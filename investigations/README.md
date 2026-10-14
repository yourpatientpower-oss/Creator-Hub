# Investigations

Case workspaces for `/grift-detective`. One folder per case.

- **Start a case:** run `/grift-detective <subject> -- <question, timeframe, jurisdiction, intended use, URLs>`. The coordinator copies `_template/` to `GD-YYYYMMDD-<slug>/`.
- **Resume or update a case:** run `/grift-detective <case-id> -- <new evidence>`. New evidence is appended and logged in `changelog.md` (State 9). Nothing is silently overwritten.
- **Layout and rules:** `.claude/skills/grift-detective/references/file-contracts.md`.

Case folders can contain sensitive allegations. Review them before committing or sharing. To keep them local-only, add `investigations/GD-*/` to `.gitignore`.
