/**
 * POCI-145 additional coverage: 3-video limit check + mobile viewport.
 * Exploration/evidence script, not the main smoke test.
 */
import { chromium, devices } from "playwright";
import fs from "node:fs";
import path from "node:path";

const authPath = path.resolve("auth/pocial-stage.json");
const outDir = path.resolve("artifacts/POCI-145-edge");
fs.mkdirSync(outDir, { recursive: true });

const v1 = path.resolve("testdata/sample-video.mp4");
const v2 = path.resolve("testdata/sample-video-2.mp4");
const v3 = path.resolve("testdata/sample-video-3.mp4");

async function openCreateFromMedia(page) {
  await page.goto("https://stage.pocial.com/pocial/features-dashboard", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
  const createFromMedia = page.getByText(/Create From Media/i).first();
  await createFromMedia.waitFor({ state: "visible", timeout: 20000 });
  await createFromMedia.click();
}

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-blink-features=AutomationControlled"],
});

// --- Scenario N01: try selecting 3 videos at once ---
{
  const context = await browser.newContext({ storageState: authPath });
  const page = await context.newPage();
  try {
    await openCreateFromMedia(page);
    const [chooser] = await Promise.all([
      page.waitForEvent("filechooser", { timeout: 15000 }),
      page.getByText("Browse Device").first().click(),
    ]);
    await chooser.setFiles([v1, v2, v3]);
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(outDir, "N01-three-videos.png") });
    const text = await page.locator("body").innerText();
    console.log("=== N01 (3 videos at once) ===");
    console.log("body text snippet:", text.slice(0, 400).replace(/\n+/g, " | "));
    fs.writeFileSync(path.join(outDir, "N01-three-videos.txt"), text);
  } catch (err) {
    console.log("N01 error:", err.message);
    await page.screenshot({ path: path.join(outDir, "N01-error.png") }).catch(() => {});
  } finally {
    await context.close();
  }
}

// --- Scenario E01: mobile viewport, 2 videos ---
{
  const context = await browser.newContext({
    storageState: authPath,
    ...devices["iPhone 13"],
  });
  const page = await context.newPage();
  try {
    await openCreateFromMedia(page);
    const [chooser] = await Promise.all([
      page.waitForEvent("filechooser", { timeout: 15000 }),
      page.getByText("Browse Device").first().click(),
    ]);
    await chooser.setFiles([v1, v2]);
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(outDir, "E01-mobile-two-videos.png") });
    const text = await page.locator("body").innerText();
    console.log("=== E01 (mobile viewport, 2 videos) ===");
    console.log("body text snippet:", text.slice(0, 400).replace(/\n+/g, " | "));
    fs.writeFileSync(path.join(outDir, "E01-mobile-two-videos.txt"), text);
  } catch (err) {
    console.log("E01 error:", err.message);
    await page.screenshot({ path: path.join(outDir, "E01-error.png") }).catch(() => {});
  } finally {
    await context.close();
  }
}

await browser.close();
console.log("Done ->", outDir);
