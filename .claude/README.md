# Grift Detective: map

```
/grift-detective  ->  Coordinator (main session, skills/grift-detective/SKILL.md)
                       |  State 0-1: intake, plan, claims  ->  investigations/<case-id>/case.md
                       |
                       |-- Wave 1 (parallel): claim-auditor, money-mapper,
                       |                      timeline-analyst, harm-accountability-analyst
                       |-- Wave 2:            pattern-analyst   (reads Wave 1 files)
                       |-- Wave 3 (parallel): countercase-analyst, source-auditor
                       |
                       |  State 5-8: synthesis, audit, countercase, report  ->  report.md
                       |  State 9:   updates                                ->  changelog.md
```

Subagents write full output to `investigations/<case-id>/modules/<agent>.md` and return a summary of 200 words or fewer. That keeps the coordinator's context small.

## Where things are
| Path | Purpose |
|---|---|
| `skills/grift-detective/SKILL.md` | Slash command entry and coordinator instructions |
| `skills/grift-detective/references/roles.md` | Role registry (source of truth) |
| `skills/grift-detective/references/workflow-states.md` | States 0-9 in detail |
| `skills/grift-detective/references/file-contracts.md` | Case folder layout, ledger schema, IDs |
| `skills/grift-detective/references/tool-routing.md` | Nimble-first tool routing |
| `skills/grift-detective/references/primary-sources.md` | Where to look for records |
| `skills/grift-detective/references/source-quality.md` | Independence rules and audit checklist |
| `skills/grift-detective/references/safety-rules.md` | Integrity rules and stop conditions |
| `skills/grift-detective/references/report-template.md` | 12-section report |
| `skills/grift-detective/templates/` | Case brief and ledger templates |
| `agents/*.md` | The seven subagents |

## Add or change a module
1. Add or edit `agents/<name>.md` with frontmatter: `name`, `description`, `tools`, `model`.
2. Update `references/roles.md`: question, inputs, output file and wave.
3. If the wave order changes, update the dispatch list in `SKILL.md` and `workflow-states.md`.

## Use in other repos
Copy `agents/` and `skills/grift-detective/` into `~/.claude/` to make it available everywhere. Also copy the `investigations/` template, or let the coordinator create it.

## Requirements
- Nimble MCP connected. Without it, agents fall back to WebSearch/WebFetch.
- Optional: network access to sec.gov, courtlistener.com and archive.org for `curl`-based lookups.
