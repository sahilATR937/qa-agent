/**
 * Exploration script: find the Quick Create -> add-video flow for POCI-145.
 * Not a smoke test — just dumps screenshots + visible text at each step so
 * selectors can be identified for a real smoke-poci145.mjs.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const authPath = path.resolve("auth/pocial-stage.json");
const outDir = path.resolve("artifacts/debug-poci145");
fs.mkdirSync(outDir, { recursive: true });

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

async function snap(name) {
  await page.screenshot({ path: path.join(outDir, `${name}.png`) });
  const text = await page.locator("body").innerText();
  fs.writeFileSync(path.join(outDir, `${name}.txt`), text);
  console.log(`--- ${name} --- url=${page.url()}`);
  console.log(text.slice(0, 800));
}

try {
  await page.goto("https://stage.pocial.com/pocial/features-dashboard", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(3000);
  await snap("01-dashboard");

  const createFromMedia = page.getByText(/Create From Media/i).first();
  await createFromMedia.waitFor({ state: "visible", timeout: 15000 });
  await createFromMedia.click();
  await page.waitForTimeout(2000);
  await snap("02-after-create-from-media-click");

  const video1 = path.resolve("testdata/sample-video.mp4");
  const video2 = path.resolve("testdata/sample-video-2.mp4");

  const [chooser] = await Promise.all([
    page.waitForEvent("filechooser", { timeout: 15000 }),
    page.getByText("Browse Device").first().click(),
  ]);
  console.log("file input isMultiple:", await chooser.isMultiple());
  try {
    await chooser.setFiles([video1, video2]);
    console.log("setFiles([video1, video2]) succeeded without throwing");
  } catch (err) {
    console.log("setFiles([video1, video2]) threw:", err.message);
  }
  await page.waitForTimeout(3000);
  await snap("03-after-select-two-videos");
} catch (err) {
  console.error("ERROR:", err.message);
  await page.screenshot({ path: path.join(outDir, "error.png") }).catch(() => {});
} finally {
  await browser.close();
}
