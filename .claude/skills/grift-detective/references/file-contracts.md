# File contracts

All case state lives in `investigations/<case-id>/`. Case ID format: `GD-YYYYMMDD-<slug>` (e.g. `GD-20261011-acme-coaching`). Copy `investigations/_template/` to start a case.

```
investigations/<case-id>/
  case.md        # brief, scope, hypothesis (unverified), plan, claim list   (owner: coordinator)
  sources.md     # source ledger                                            (append-only; any role)
  modules/       # one file per subagent                                    (owner: that subagent)
  changelog.md   # dated record of conclusion changes                       (owner: coordinator)
  report.md      # final report                                             (owner: coordinator)
```

## Rules
- Only write to your own file, except `sources.md`, where you may append rows. Never edit or delete another role's file.
- Never overwrite earlier conclusions in `changelog.md`. Append a dated entry saying what changed and why.
- Reference sources by ledger ID (`S12`) everywhere. Do not paste long quotes into module files.
- Claim IDs (`C1`, `C2`...) are assigned once in `case.md` and reused by every module.

## Source ledger row (`sources.md`)
| ID | URL | Publisher / author | Published | Accessed | Type | Origin ID | Independent? | Archive link | Supports (exact claim) | Notes |
|---|---|---|---|---|---|---|---|---|---|---|

- **Type:** primary filing / primary statement by subject / government record / court record / news / secondary commentary / user-supplied.
- **Origin ID:** shared by sources that trace to one underlying origin (e.g. one press release). Count it once.
- **Independent?** yes / no / unknown relative to the subject.
- Mark paywalled, deleted or inaccessible pages in Notes.

## Quotes
Use an exact quote only when the original was accessed and accurately captured. Otherwise paraphrase and label it `(paraphrase)`.
