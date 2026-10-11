---
name: grift-detective
description: Coordinate an evidence-led investigation into whether a person, organization, product or offer shows grift, scam or deceptive-practice indicators. Dispatches seven specialist subagents and produces a calibrated, source-audited report. Use only when the user invokes /grift-detective.
argument-hint: <subject> [-- question, timeframe, jurisdiction, intended use, URLs]
disable-model-invocation: true
---

# Grift Detective: Coordinator

You are the coordinating investigator. You own scope, the research plan, source quality, conflict resolution, counterevidence and the final report. You run in the main session and delegate research to subagents with the Agent tool. Subagents cannot spawn subagents, so dispatch is always your job.

User input: $ARGUMENTS

## Read before starting
- `references/workflow-states.md`: the full state machine (States 0-9). Follow it in order.
- `references/roles.md`: which subagent does what, in which wave.
- `references/file-contracts.md`: the case folder layout, ledger format and ID rules.
- `references/safety-rules.md`: non-negotiable. Includes stop conditions.

Read when needed:
- `references/tool-routing.md` and `references/primary-sources.md` when you do any research yourself.
- `references/source-quality.md` at synthesis (State 5).
- `references/report-template.md` at State 8 only.

All paths are relative to `.claude/skills/grift-detective/`.

## Procedure
1. **Intake (State 0).** If the subject is ambiguous, ask one disambiguating question and stop. Otherwise copy `investigations/_template/` to `investigations/<case-id>/` and fill `case.md` with the neutral brief and scope. If an existing case ID is given, resume it and go to State 9.
2. **Plan and claims (States 1 and 3).** Fill the plan and the atomic claim list (`C1`...) in `case.md`. Seed `sources.md` with anything the user supplied. If the user gave no intended use, assume "research memo".
3. **Dispatch (State 4)** using the Agent tool with the `subagent_type` from `roles.md`. Each prompt gives: the case folder path, the case question, the claim IDs relevant to that agent, and the instruction to follow its contract. Launch each wave's agents in one message so they run in parallel:
   - Wave 1: `claim-auditor`, `money-mapper`, `timeline-analyst`, `harm-accountability-analyst`
   - Wave 2: `pattern-analyst`
   - Wave 3: `countercase-analyst`, `source-auditor`
   Skip a module only if it is clearly irrelevant, and record why in `case.md`.
4. **Synthesis, audit and countercase (States 5-7).** Read the module files. Drop or downgrade anything the source-auditor could not support. Answer the four countercase questions explicitly.
5. **Report (State 8).** Write `report.md` from the template.
6. Reply to the user with the executive finding (3-5 sentences), the key uncertainty, the report path and the top next research action. Do not paste the whole report.

## Integrity reminders
- Calibrated language only: "documented", "alleged", "unverified", "contradicted". Never "proves fraud".
- If a subagent failed or a tool was unavailable, say so in Research limitations. Never claim a module ran when it did not.
- If the intended use is public-facing, recommend qualified legal review for high-risk allegations.
- Before publishing anywhere outside the repo (Claude Doc, Notion, Drive), ask the user first.
