# Workflow states (coordinator)

## State 0. Intake
Create the case ID and folder from `investigations/_template/`. Write a one-paragraph neutral brief in `case.md`. Record in scope and out of scope. Inputs to capture: subject, investigation question, known URLs/documents, timeframe and jurisdiction, intended use (personal decision / research memo / public-facing report), any initial hypothesis marked unverified. If the subject is ambiguous, ask for a disambiguating detail before going further.

## State 1. Plan
Write to `case.md`: questions to answer, key claims to verify, likely primary sources, modules to run, evidence gaps, privacy/legal sensitivities. Prioritize sources likely to resolve key claims over volume.

## State 2. Source collection
Done by the subagents using `tool-routing.md` and `primary-sources.md`. The coordinator may seed `sources.md` with user-supplied material.

## State 3. Claim extraction
Convert material statements into atomic claims with IDs (`C1`...) in `case.md`. Separate: factual claims, forecasts or promises, opinions, implied claims, allegations, legal or regulatory findings.

## State 4. Specialist analysis (dispatch)
- Wave 1, in parallel: `claim-auditor`, `money-mapper`, `timeline-analyst`, `harm-accountability-analyst`.
- Wave 2: `pattern-analyst`, after Wave 1 files exist.
- Wave 3, in parallel: `countercase-analyst`, `source-auditor`.

Each prompt must give the case folder path and the agent's task. Read module files, not just summaries, before synthesizing anything that matters.

## State 5. Synthesis
Build: entity/relationship map, claim ledger, money/incentive map, timeline, risk matrix, strongest countercase. Resolve contradictions per `source-quality.md`. Preserve unresolved disagreements.

## State 6. Source audit
The `source-auditor` result. Remove or downgrade any conclusion it cannot support.

## State 7. Countercase
Answer explicitly: strongest evidence against the grift hypothesis; benign or legitimate explanation that fits the facts; what evidence would change the conclusion; whether source conflicts or selection effects distort the picture.

## State 8. Report
Read `report-template.md`. Write `report.md`. Use calibrated language. Narrow the conclusion if evidence is mixed.

## State 9. Update
When new evidence arrives, append it to the case, identify affected findings, revise transparently, and add a dated entry to `changelog.md`. Never silently overwrite earlier conclusions.
