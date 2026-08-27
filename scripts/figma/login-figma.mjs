/**
 * One-time login to Figma to establish a session, then we generate a
 * read-only Personal Access Token manually from within that session.
 * Usage: FIGMA_EMAIL=... FIGMA_PASSWORD=... node scripts/figma/login-figma.mjs
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const credsPath = path.resolve(".figma-creds.local.json");
if (!fs.existsSync(credsPath)) {
  console.error("Missing .figma-creds.local.json (gitignored, local-only file with {email, password})");
  process.exit(1);
}
const { email, password } = JSON.parse(fs.readFileSync(credsPath, "utf8"));

const outDir = path.resolve("artifacts/figma-debug");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.resolve("auth"), { recursive: true });

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
  await page.goto("https://www.figma.com/login", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(outDir, "01-login-page.png") });

  const cookieBtn = page.locator('button:has-text("Allow all cookies")').first();
  if (await cookieBtn.isVisible().catch(() => false)) {
    await cookieBtn.click().catch(() => {});
    await page.waitForTimeout(500);
  }

  const inputCount = await page.locator("input").count();
  const inputInfo = [];
  for (let i = 0; i < inputCount; i++) {
    const inp = page.locator("input").nth(i);
    inputInfo.push({
      type: await inp.getAttribute("type").catch(() => null),
      placeholder: await inp.getAttribute("placeholder").catch(() => null),
      name: await inp.getAttribute("name").catch(() => null),
    });
  }
  console.log("inputs found:", JSON.stringify(inputInfo));
  const frameCount = page.frames().length;
  console.log("iframe count:", frameCount);

  await page.locator('input[type="email"], input[name="email"]').first().fill(email, { timeout: 15000 });
  await page.locator('input[type="password"], input[name="password"]').first().fill(password, { timeout: 15000 });
  await page.locator('button[type="submit"], button:has-text("Log in")').first().click();

  await page.waitForTimeout(6000);
  await page.screenshot({ path: path.join(outDir, "02-after-login.png") });

  const url = page.url();
  const bodyText = await page.locator("body").innerText().catch(() => "");
  console.log("URL after login:", url);
  console.log("Body snippet:", bodyText.slice(0, 500).replace(/\n+/g, " | "));

  fs.writeFileSync(
    path.join(outDir, "after-login.json"),
    JSON.stringify({ url, bodyTextSnippet: bodyText.slice(0, 1000) }, null, 2)
  );

  await context.storageState({ path: path.resolve("auth/figma-session.json") });
  console.log("Session saved to auth/figma-session.json");
} catch (err) {
  console.error("ERROR:", err.message);
  await page.screenshot({ path: path.join(outDir, "error.png") }).catch(() => {});
} finally {
  await browser.close();
}
