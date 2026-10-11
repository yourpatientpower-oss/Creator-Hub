# Tool routing (Nimble first)

Prefer Nimble. Fall back to built-in `WebSearch` / `WebFetch` if Nimble errors or returns nothing. Never invent results. If no web tool works, say so and label the work as based on supplied material only.

| Need | Tool |
|---|---|
| One closed lookup (filing pointer, who is X, reverse lookup) | `nimble_search` (`include_answer=true` for a closed synthesized fact) |
| One known URL (filing, docket, sales page, archived page) | `nimble_extract`. If the site is named, check `nimble_extract_templates_list` first |
| Open-ended research, dossier, fan-out beyond a few URLs | Web Search Agent: `nimble_agents_list`, then `nimble_agent_templates_list`, then `nimble_agents_create` / `nimble_agents_run`, then poll `nimble_agents_run_status`, then `nimble_agents_run_result`. Use `research` for dossiers; `high` effort or above |
| List a subject's pages | `nimble_map` |
| Bulk-fetch a known doc tree (terms, refund policy, disclaimers) | `nimble_crawl_run`, then `nimble_crawl_status` |
| Public APIs (EDGAR, CourtListener, Wayback availability) | `Bash` with `curl` and `jq`, only if the network allows the host. If blocked, say so |

Do not use `nimble_search` to complete a research or dataset task. Use an agent run.

## Provenance
Every fetched page that supports a conclusion gets a ledger row. For key pages, check or request a Wayback copy and record the link, so later edits or deletions stay checkable.

## Privacy
Stay on public-interest records. Do not look up private individuals' addresses, family, or unrelated personal data. Do not bypass logins or paywalls.
