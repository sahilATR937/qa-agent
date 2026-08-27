# Fast QA verify (token + time)

## Problem
Click-by-click Playwright MCP (navigate → snapshot → click → snapshot…) is too slow for small Re-Open bugs. POCI-175 took many minutes for a <1 min human check.

## Rule for this agent
For **known Pocial flows** (Post Form preview, Quick Create, Story):
1. Do **NOT** explore with MCP click loops first.
2. Run the one-shot script (or write one if missing).
3. Read only `artifacts/<TICKET>/result.json` + 1–2 screenshots.
4. Post Sprintle comment from that evidence.

## Commands
```bash
# once per day / when session expires
$env:POCIAL_EMAIL="..."; $env:POCIAL_PASSWORD="..."; npm run auth:pocial

# fast verify
npm run smoke:poci175
```

## When MCP is OK
Unknown UI, first-time flow mapping, or script failure → then use MCP, but prefer `browser_run_code_unsafe` for multi-step in **one** call, not 15 tool rounds.

## Auth pattern (industry standard)
Playwright `storageState` — login once, reuse cookies: https://playwright.dev/docs/auth
Playwright MCP storage: https://playwright.dev/mcp/tools/storage
