# CLAUDE.md

## Grift Detective (research agent)

An evidence-led investigation workflow lives in `.claude/`. It is separate from the Creator-Hub app code.

- **Invoke:** `/grift-detective <subject> -- <question, timeframe, jurisdiction, intended use, URLs>`
- **Coordinator:** `.claude/skills/grift-detective/SKILL.md`. It runs in the main session and dispatches the subagents.
- **Subagents:** `.claude/agents/*.md`, seven modules. The registry is `.claude/skills/grift-detective/references/roles.md`.
- **Shared rules and contracts:** `.claude/skills/grift-detective/references/`
- **Case files:** `investigations/<case-id>/` (template in `investigations/_template/`)
- **Search:** Nimble MCP first, then WebSearch/WebFetch as fallback. See `references/tool-routing.md`.

Non-negotiable: never fabricate sources, never present an accusation as a finding, never claim a report proves fraud. See `references/safety-rules.md`.

## Pull requests

- Use `.github/pull_request_template.md` for every PR description: fill in each section from the actual diff and delete sections that don't apply.
- Keep the Summary focused on the why; list verification steps you actually ran under Test plan.

## Skills

- Project skills live in `.claude/skills/` (currently `grift-detective` and `karpathy-guidelines`).
