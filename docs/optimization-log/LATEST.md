# Iteration 01 — 2026-08-26

## Focus
Fix Pocial `storageState` auth so one-shot smoke is usable (<60s).

## Research used (links)
- https://playwright.dev/docs/auth
- https://jo4.io/blog/auth0-localstorage-race-condition/
- Headless anti-bot UA + AutomationControlled flag

## Change implemented (paths)
- `scripts/pocial/save-auth.mjs`, `smoke-poci175.mjs`, `debug-login.mjs`

## Evidence / measurement
- Auth: origins=1, lsKeys=6
- Smoke: **13.5s** (`artifacts/POCI-175/result.json`)

## Challenge (why not good enough yet)
- Heuristic verdict weak; no generic smoke runner

## Next iteration target
Generic smoke runner + stronger POCI-175 FAIL assert (platform chrome / crop).
