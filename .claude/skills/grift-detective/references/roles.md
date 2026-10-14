# Roles registry (single source of truth)

If a module changes, update this file and the matching `.claude/agents/<name>.md` together.

| Agent (`subagent_type`) | Question it owns | Reads | Writes | Runs |
|---|---|---|---|---|
| `claim-auditor` | What material claims are made, and does evidence support them? | `case.md`, `sources.md` | `modules/claim-auditor.md` | Wave 1 (parallel) |
| `money-mapper` | What documented financial relationships and incentives exist? | `case.md`, `sources.md` | `modules/money-mapper.md` | Wave 1 (parallel) |
| `timeline-analyst` | What happened, in what dated order? | `case.md`, `sources.md` | `modules/timeline-analyst.md` | Wave 1 (parallel) |
| `harm-accountability-analyst` | What harm, remedies, oversight and formal findings are documented? | `case.md`, `sources.md` | `modules/harm-accountability-analyst.md` | Wave 1 (parallel) |
| `pattern-analyst` | Do tactics or mechanics repeat across events? | `case.md`, all Wave 1 module files | `modules/pattern-analyst.md` | Wave 2 |
| `countercase-analyst` | What is the strongest evidence and benign explanation against the hypothesis? | everything above | `modules/countercase-analyst.md` | Wave 3 (parallel) |
| `source-auditor` | Does each major conclusion's source exist, support the statement, and stand independently? | everything above | `modules/source-auditor.md` | Wave 3 (parallel) |

The **Coordinator** is the `/grift-detective` skill running in the main session. It is not a subagent, because subagents cannot spawn subagents. It owns scope, the plan, conflict resolution, synthesis and the report.

## Return contract (every subagent)
Write the full output to your module file. Return to the coordinator only: the file path, a summary of 200 words or fewer, your confidence, and the single most useful next research action.

## Module output sections (every module file)
1. Question investigated
2. Findings (each with evidence reference IDs from `sources.md`)
3. Contrary evidence
4. Confidence and limitations
5. Next best research action
