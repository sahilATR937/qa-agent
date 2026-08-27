/**
 * One-time login → save Playwright storageState (cookies + localStorage).
 * Usage: POCIAL_EMAIL=... POCIAL_PASSWORD=... npm run auth:pocial
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const email = process.env.POCIAL_EMAIL;
const password = process.env.POCIAL_PASSWORD;
if (!email || !password) {
  console.error("Set POCIAL_EMAIL and POCIAL_PASSWORD");
  process.exit(1);
}

const out = path.resolve("auth/pocial-stage.json");
const debugDir = path.resolve("artifacts/auth-debug");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.mkdirSync(debugDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-blink-features=AutomationControlled"],
});
const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
});
const page = await context.newPage();

try {
  await page.goto("https://stage.pocial.com/pocial/login", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.getByRole("textbox", { name: /email or username/i }).fill(email);
  await page.getByRole("textbox", { name: /password/i }).fill(password);
  await page.locator('button:has-text("Login")').first().click();

  // Post-login may land on /poki/calendar (not features-dashboard)
  await page.waitForFunction(
    () => !location.pathname.includes("/login"),
    null,
    { timeout: 45000 }
  );

  await page.goto("https://stage.pocial.com/pocial/features-dashboard", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.getByText("Quick Create").first().waitFor({
    state: "visible",
    timeout: 45000,
  });
  await page.getByText("Write it Myself").first().waitFor({
    state: "visible",
    timeout: 20000,
  });

  const lsInfo = await page.evaluate(() => ({
    href: location.href,
    keys: Object.keys(localStorage),
    count: localStorage.length,
  }));

  await page.waitForTimeout(1000);
  await context.storageState({ path: out });
  const saved = JSON.parse(fs.readFileSync(out, "utf8"));
  console.log(
    `Saved auth → ${out} (cookies=${saved.cookies?.length ?? 0}, origins=${saved.origins?.length ?? 0}, lsKeys=${lsInfo.count})`
  );
  fs.writeFileSync(
    path.join(debugDir, "auth-meta.json"),
    JSON.stringify(
      {
        lsInfo,
        cookies: saved.cookies?.length ?? 0,
        origins: saved.origins?.length ?? 0,
        originLs: saved.origins?.[0]?.localStorage?.length ?? 0,
      },
      null,
      2
    )
  );
} catch (err) {
  await page.screenshot({ path: path.join(debugDir, "auth-fail.png") }).catch(() => {});
  fs.writeFileSync(
    path.join(debugDir, "auth-fail.json"),
    JSON.stringify({ error: String(err?.message || err), url: page.url() }, null, 2)
  );
  throw err;
} finally {
  await browser.close();
}
