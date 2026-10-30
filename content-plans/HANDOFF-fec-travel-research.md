# Handoff: FEC research on presidential political travel (2026 midterms)

Context: the user is building a faceless TikTok series (plan in `tiktok-gov-spending-30day.md`) on who reimburses the Treasury for the President's political travel. Accuracy rules in that plan apply: every figure needs a primary source, and no claim of illegality without a finding.

## Goal
Find out from FEC filings what committees have paid the Treasury or the White House for 2025-26 political travel, and compare with 2018. Produce a sourced table (committee, date, amount, filing link) for the source tracker.

## Environment
- `FEC_API_KEY` should be in the environment (user's personal api.data.gov key). If it is missing, say so and stop; do not use `DEMO_KEY` (40 calls/hour, already exhausted).
- Allowed hosts already added: api.open.fec.gov, www.fec.gov, api.usaspending.gov, www.usaspending.gov, www.npr.org, qz.com, www.forbes.com, www.wboy.com.
- Keep calls few (per_page up to 100) and write raw JSON to the scratchpad, not the repo.

## Queries to run (OpenFEC, `https://api.open.fec.gov/v1`)
1. Confirm committee IDs: RNC `C00003418`; look up the current Trump campaign committee, Trump National Committee JFC, NRSC, NRCC via `/committees/?q=`.
2. `/schedules/schedule_b/` with `committee_id`, `two_year_transaction_period` in 2026, 2024 and 2018, and `disbursement_description` of `AIR TRAVEL`, `TRAVEL`, and `TREASURY`; also try `recipient_name=TREASURY` and `recipient_name=WHITE HOUSE`. Sort by `-disbursement_date`.
3. 2018 control: `C00580100` (Donald J. Trump for President) payments to the US Treasury marked "TRAVEL EXPENSES: AIR". Quartz reported eight payments totaling $112,667.90 dated 2018-03-12 to 2018-04-13; verify this against the API.
4. Record for each row: committee, recipient, date, amount, description, `pdf_url` / filing id.

## Already established (cite, do not re-research)
- FEC rule 11 CFR 100.93 (https://www.law.cornell.edu/cfr/text/11/100.93; FEC summary https://www.fec.gov/updates/final-rules-on-campaign-travel/): presidential candidate committee pays pro rata charter share; travelers for party committees on government aircraft pay the lowest unrestricted first-class fare (or coach/charter depending on service). The committee the traveler goes for pays the government.
- 2018 baseline: Quartz estimate $17M at $142,380/hr, eight reimbursement payments totaling $112,667.90 (about 0.7%), per https://qz.com/1476502/flying-trump-to-midterm-rallies-for-republicans-cost-us-taxpayers-millions and https://slate.com/news-and-politics/2018/12/trumps-use-of-air-force-one-for-the-midterm-elections-costed-usd17-million.html. The legal standard was never full cost.
- 2026 pace: NPR (2026-07-22) says more campaign trips than same point in 2018; no counts.

## Not verified (do not state as fact)
- Any 2026 reimbursement amount; which committee pays; what rate the White House applies.
- "Most aggressive president ever": October rally counts conflict (NBC 8 vs AMAC 23); no independent cross-president dataset.
- The claim that campaign paid $1.8M in first two years (low-quality source, no original found).

## Deliverables
- `content-plans/fec-travel-findings.md`: table of rows found, plus what is absent (absence of payments in FEC data is a finding only if committees were searched correctly; state which committees/years/queries were run).
- Then rewrite the plan's weeks into an arc: the rule; the 2018 gap; the 2026 pace; "follow the receipt" using the table; the cross-president comparison only if a real dataset exists.
- Commit and push to the branch; do not open a PR unless asked.
