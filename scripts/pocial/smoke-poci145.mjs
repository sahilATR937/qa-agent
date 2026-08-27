/**
 * Fast POCI-145 verify: auth reuse -> Quick Create -> upload 2 videos -> check no error.
 * Usage: npm run smoke:poci145
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const authPath = path.resolve("auth/pocial-stage.json");
const outDir = path.resolve("artifacts/POCI-145");
const video1 = path.resolve("testdata/sample-video.mp4");
const video2 = path.resolve("testdata/sample-video-2.mp4");

for (const p of [authPath, video1, video2]) {
  if (!fs.existsSync(p)) {
    console.error(`Missing required file: ${p}`);
    process.exit(1);
  }
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
await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
const page = await context.newPage();

try {
  await page.goto("https://stage.pocial.com/pocial/features-dashboard", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});

  if (/login/i.test(page.url())) {
    throw new Error("Auth expired — re-run npm run auth:pocial");
  }

  const createFromMedia = page.getByText(/Create From Media/i).first();
  await createFromMedia.waitFor({ state: "visible", timeout: 20000 });
  await createFromMedia.click();

  const [chooser] = await Promise.all([
    page.waitForEvent("filechooser", { timeout: 15000 }),
    page.getByText("Browse Device").first().click(),
  ]);
  await chooser.setFiles([video1, video2]);
  await page.waitForTimeout(3000);

  await page.screenshot({ path: path.join(outDir, "after-2-videos.png") });

  const bodyText = await page.locator("body").innerText();
  const showsTwoVideos = /2\s*Videos/i.test(bodyText) || /Item\s*1\s*of\s*2/i.test(bodyText);
  const errorMatch = bodyText.match(/(error|failed|unable|something went wrong)[^\n]{0,120}/i);

  await context.tracing.stop({ path: path.join(outDir, "trace.zip") });

  const result = {
    ticket: "POCI-145",
    elapsed_ms: Date.now() - t0,
    verdict: showsTwoVideos && !errorMatch ? "PASS" : errorMatch ? "FAIL" : "NEEDS_HUMAN_EYE",
    signals: {
      shows_two_videos_in_ui: showsTwoVideos,
      error_text_found: errorMatch ? errorMatch[0] : null,
    },
    artifacts: ["after-2-videos.png", "trace.zip"],
  };

  fs.writeFileSync(path.join(outDir, "result.json"), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  console.log(`Done in ${(result.elapsed_ms / 1000).toFixed(1)}s → ${outDir}`);
  console.log(`Trace: npx playwright show-trace ${path.join(outDir, "trace.zip")}`);
} catch (err) {
  await page.screenshot({ path: path.join(outDir, "error.png") }).catch(() => {});
  await context.tracing.stop({ path: path.join(outDir, "trace.zip") }).catch(() => {});
  fs.writeFileSync(
    path.join(outDir, "result.json"),
    JSON.stringify(
      {
        ticket: "POCI-145",
        elapsed_ms: Date.now() - t0,
        verdict: "ERROR",
        error: String(err?.message || err),
        url: page.url(),
        artifacts: ["error.png", "trace.zip"],
      },
      null,
      2
    )
  );
  throw err;
} finally {
  await browser.close();
}
