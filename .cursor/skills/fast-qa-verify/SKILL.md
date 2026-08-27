---
name: fast-qa-verify
description: Prefer one-shot Playwright smoke scripts over MCP click loops for Pocial/Sprintle ticket verification. Use when verifying Re-Open bugs, POCI tickets, or user says tests are too slow / save tokens.
---

# Fast QA Verify

## Default
For tickets with a known UI path, run a Node Playwright smoke script. Do not click-loop MCP.

## Pocial
1. Ensure `auth/pocial-stage.json` exists (`npm run auth:pocial` with env creds).
2. Prefer `npm run smoke:poci175` or add `scripts/pocial/smoke-<TICKET>.mjs`.
3. Judge from `artifacts/<TICKET>/result.json` + screenshots only.
4. Sprintle comment in English from that evidence.

## MCP only if
Script missing/fails, or flow is unknown — then use one `browser_run_code_unsafe` multi-step block, not 10+ snapshot/click rounds.
