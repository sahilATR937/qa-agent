import { chromium } from "playwright";
import fs from "node:fs";

const email = process.env.POCIAL_EMAIL || "game@yopmail.com";
const password = process.env.POCIAL_PASSWORD || "Test@123";

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-blink-features=AutomationControlled"],
});
const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
});
const page = await context.newPage();
const nets = [];
page.on("response", (r) => {
  if (/login|auth|token|signin|account/i.test(r.url())) {
    nets.push({ status: r.status(), url: r.url().slice(0, 160) });
  }
});

await page.goto("https://stage.pocial.com/pocial/login", {
  waitUntil: "domcontentloaded",
  timeout: 45000,
});
await page.getByRole("textbox", { name: /email or username/i }).fill(email);
await page.getByRole("textbox", { name: /password/i }).fill(password);
await page.locator('button:has-text("Login")').first().click();
await page.waitForTimeout(10000);

fs.mkdirSync("artifacts/auth-debug", { recursive: true });
await page.screenshot({ path: "artifacts/auth-debug/after-login.png" });
const info = {
  url: page.url(),
  text: (await page.locator("body").innerText()).slice(0, 1000),
  nets,
};
fs.writeFileSync("artifacts/auth-debug/after-login.json", JSON.stringify(info, null, 2));
console.log(JSON.stringify(info, null, 2));
await browser.close();
