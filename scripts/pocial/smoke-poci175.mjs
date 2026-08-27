/**
 * Fast POCI-175 verify: auth reuse → Post Form → IG/FB shots → result.json
 * Usage: npm run smoke:poci175
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const authPath = path.resolve("auth/pocial-stage.json");
const outDir = path.resolve("artifacts/POCI-175");
const imagePath = path.resolve("testdata/poci175-landscape.jpg");

if (!fs.existsSync(authPath)) {
  console.error("Missing auth/pocial-stage.json — run: npm run auth:pocial");
  process.exit(1);
}
if (!fs.existsSync(imagePath)) {
  console.error("Missing testdata/poci175-landscape.jpg");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
const t0 = Date.now();

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-blink-features=AutomationControlled"],
});
const context = await browser.newContext({
  storageState: authPath,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
});
const page = await context.newPage();

try {
  await page.goto("https://stage.pocial.com/pocial/features-dashboard", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });

  if (/login/i.test(page.url())) {
    throw new Error("Auth expired — re-run npm run auth:pocial");
  }

  // Ensure Create section visible
  const createTab = page.getByText(/^Create$/).first();
  if (await createTab.isVisible().catch(() => false)) {
    await createTab.click().catch(() => {});
  }

  const writeLink = page.locator("a", { hasText: /Write it Myself/i }).first();
  await writeLink.waitFor({ state: "visible", timeout: 20000 });
  await writeLink.click();

  await page.getByPlaceholder(/enter title/i).waitFor({ timeout: 15000 });
  await page.getByPlaceholder(/enter title/i).fill("POCI-175 smoke");

  const [chooser] = await Promise.all([
    page.waitForEvent("filechooser", { timeout: 15000 }),
    page.getByText("Browse Device").first().click(),
  ]);
  await chooser.setFiles(imagePath);

  const igBtn = page.getByRole("button", { name: /^instagram$/i });
  await igBtn.waitFor({ state: "visible", timeout: 30000 });
  await igBtn.click();
  await page.screenshot({ path: path.join(outDir, "ig.png") });

  await page.getByRole("button", { name: /^facebook$/i }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, "fb.png") });

  const fbText = await page.locator("body").innerText();
  const storyChromeOnFb = /add to your story/i.test(fbText);

  const result = {
    ticket: "POCI-175",
    elapsed_ms: Date.now() - t0,
    verdict: storyChromeOnFb ? "FAIL" : "NEEDS_HUMAN_EYE",
    signals: {
      story_chrome_visible_on_fb_tab: storyChromeOnFb,
      note: storyChromeOnFb
        ? "FB tab still shows IG-style 'Add to your story'."
        : "Compare ig.png vs fb.png for zoom/letterbox.",
    },
    artifacts: ["ig.png", "fb.png"],
  };

  fs.writeFileSync(path.join(outDir, "result.json"), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  console.log(`Done in ${(result.elapsed_ms / 1000).toFixed(1)}s → ${outDir}`);
} catch (err) {
  await page.screenshot({ path: path.join(outDir, "error.png") }).catch(() => {});
  fs.writeFileSync(
    path.join(outDir, "result.json"),
    JSON.stringify(
      {
        ticket: "POCI-175",
        elapsed_ms: Date.now() - t0,
        verdict: "ERROR",
        error: String(err?.message || err),
        url: page.url(),
      },
      null,
      2
    )
  );
  throw err;
} finally {
  await browser.close();
}
