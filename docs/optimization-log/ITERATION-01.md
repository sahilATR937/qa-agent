# Iteration 01 — 2026-08-26

## Focus
Fix Pocial `storageState` auth so one-shot smoke is usable (<60s).

## Research used (links)
- https://playwright.dev/docs/auth
- https://jo4.io/blog/auth0-localstorage-race-condition/ (wait for real storage before snapshot)
- Headless bot detection: `--disable-blink-features=AutomationControlled` + real Chrome UA

## Change implemented (paths)
- `scripts/pocial/save-auth.mjs` — anti-bot launch args, wait leave `/login` via pathname (not load), confirm Quick Create, capture localStorage
- `scripts/pocial/smoke-poci175.mjs` — same UA/args
- `scripts/pocial/debug-login.mjs` — login diagnostics

## Evidence / measurement
- Auth: `cookies=1, origins=1, lsKeys=6` (was `origins=0`)
- Smoke: **13.5s** elapsed (`artifacts/POCI-175/result.json`) — target was <60s
- Prior MCP click-loop for same ticket: many minutes

## Challenge (why not good enough yet)
- Auto verdict `NEEDS_HUMAN_EYE` (story chrome heuristic weak; still need visual IG vs FB compare or pixel/DOM assert)
- Auth+smoke cold path still ~2 min if re-login; warm smoke alone is 13.5s
- No generic `smoke:<ticket>` runner yet — only POCI-175 hardcoded

## Next iteration target
Generic smoke runner + stronger FAIL signal for POCI-175 (IG/FB distinct chrome or aspect-ratio assert) without MCP loops.
