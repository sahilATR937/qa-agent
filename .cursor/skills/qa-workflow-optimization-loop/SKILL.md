---
name: qa-workflow-optimization-loop
description: >-
  Run the Autonomous QA Workflow Optimization Loop — continuous research,
  audit, implement, measure, challenge. Trigger when user asks for QA
  workflow optimization, 60-minute improvement loop, make QA faster, or
  paste/run the Autonomous QA Workflow Optimization Loop prompt.
---

# Autonomous QA Workflow Optimization Loop

## When this skill applies

User wants continuous QA process improvement (speed, reliability, automation, coverage), a 60-minute optimization loop, or to harden the team's QA system — not a single ticket smoke only.

## How to run

1. Read `prompts/AUTONOMOUS_QA_OPTIMIZATION_LOOP.md` and follow it **as the operating contract**.
2. Prefer **short timed iterations** (5–8 min each) for up to **60 minutes**.
3. For Cursor local looping: `/loop 8m` with the tick prompt in that file.
4. Each iteration must write/update `docs/optimization-log/ITERATION-NN.md` and `docs/optimization-log/LATEST.md`.
5. Implement safe code/script/docs changes in-repo when they improve the workflow; do not only advise.

## Hard constraints (this project)

- Ticket source: **Sprintle MCP** (`assignee = currentUser()`), not Jira/Linear by default.
- Known Pocial flows: prefer **one-shot Playwright scripts** + `storageState` over MCP click loops.
- Never claim tested/fixed/passing without evidence (command output, screenshots, `result.json`).
- Do not store passwords in git; use env vars + gitignored `auth/*.json`.
- Token/time budget: minimize full-page snapshots; prefer scripts + 1–2 screenshots.

## First actions on invoke

1. Inspect `docs/FAST-QA.md`, `.cursor/skills/fast-qa-verify/`, `scripts/pocial/`, `scenarios/`.
2. Inspect Sprintle + Playwright tools available.
3. Start Iteration 01 of the loop immediately.
