# Iteration 00 — baseline (pre-loop)

## Focus
Establish baseline after POCI-175 MCP slowness.

## Current state
- Sprintle MCP for tickets (Sahil QA).
- Ticket scenarios in `scenarios/*.json`.
- Fast path started: `scripts/pocial/save-auth.mjs`, `smoke-poci175.mjs`, `docs/FAST-QA.md`, skill `fast-qa-verify`.
- Auth bug found: early save matched login "Welcome Back!" → empty UI on reuse (`origins=0`).

## Bottleneck
MCP click/snapshot loops: minutes + high tokens for <1 min visual Re-Open bugs.

## Next iteration target
Fix auth capture so `storageState` lands on real Features Dashboard; prove smoke <60s or document blocker.
