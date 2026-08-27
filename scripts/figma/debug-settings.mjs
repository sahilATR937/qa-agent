import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("artifacts/figma-debug");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  storageState: path.resolve("auth/figma-session.json"),
});
const page = await context.newPage();

try {
  await page.goto("https://www.figma.com/files/recent", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.waitForTimeout(3000);

  await page.getByText(/^Team uiux/i).first().click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, "04-profile-menu.png") });

  const settingsItem = page.getByText(/^Settings$/i).first();
  if (await settingsItem.isVisible().catch(() => false)) {
    await settingsItem.click();
    await page.waitForTimeout(2000);
  }
  await page.screenshot({ path: path.join(outDir, "05-after-settings-click.png"), fullPage: true });
  console.log("URL:", page.url());

  await page.getByText(/^Security$/i).first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "06-security-tab.png"), fullPage: true });

  const modal = page.locator('[role="dialog"]').first();
  await modal.evaluate((el) => {
    const scrollable = el.querySelector('[class*="scroll"]') || el;
    scrollable.scrollTop = scrollable.scrollHeight;
  }).catch(() => {});
  await page.mouse.wheel(0, 2000);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, "07-security-scrolled.png"), fullPage: true });

  const bodyText = await page.locator('[role="dialog"]').first().innerText().catch(() => "");
  fs.writeFileSync(path.join(outDir, "security-tab-text.txt"), bodyText);
  console.log("Security modal text:", bodyText.slice(0, 1500));

  await page.getByText(/^Generate new token$/i).first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "08-generate-token-dialog.png"), fullPage: true });
  const dialogText = await page.locator('[role="dialog"]').last().innerText().catch(() => "");
  console.log("Generate-token dialog text:", dialogText);
} catch (err) {
  console.error("ERROR:", err.message);
  await page.screenshot({ path: path.join(outDir, "settings-error.png") }).catch(() => {});
} finally {
  await browser.close();
}
