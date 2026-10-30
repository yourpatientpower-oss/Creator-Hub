# FEC findings: reimbursement of presidential political travel

Run 2026-10-30 against OpenFEC (`https://api.open.fec.gov/v1/schedules/schedule_b/`), per `HANDOFF-fec-travel-research.md`. Raw JSON is in the session scratchpad, not the repo. Filing links are `docquery.fec.gov` images (the `pdf_url` field); the trailing number is the FEC image number.

## Bottom line

1. **2026: one qualifying row found.** The RNC paid the White House Military Office $4,869.72 for "TRAVEL EXPENSES" on 2026-07-03. Nothing else in the committees and queries below. The filing does not say which trip or whose travel it covers.
2. **2018: the handoff's baseline is incomplete.** Quartz's eight payments ($112,667.90) are real but cover one committee in one 32-day window. The FEC data shows far more reimbursement-type payments in 2017-18, mostly from the RNC. Do not use "about 0.7%" as a headline.
3. **Quartz's total is off by $20.** The same eight rows sum to **$112,647.90** in the API, not $112,667.90.
4. No payment in this data is labeled as rally travel, and none says what rate was applied. These are payments to a government payee for "travel", nothing more.

## Committees confirmed

| ID | Name in OpenFEC today | Note |
|---|---|---|
| C00003418 | Republican National Committee | confirmed |
| C00580100 | Make America Great Again PAC | **renamed**; 2017-18 rows are filed as "Donald J. Trump for President, Inc." |
| C00828541 | Never Surrender, Inc. | PAC; this is the ID I used for the 2024-26 Trump committee. I did not confirm it is the current "campaign committee" in the legal sense |
| C00873893 | Trump National Committee JFC, Inc. | confirmed |
| C00027466 | NRSC | confirmed |
| C00075820 | NRCC | confirmed |

`/committees/?q=` free-text search returned unrelated committees (e.g. "National Draft Donald J. Trump for President 2024 Committee", C00814079), so IDs were taken from the handoff and the API's committee-ID lookup rather than from search.

## 2026 cycle (transactions dated 2025-01 to 2026-09/10)

| Committee | Date | Recipient | Description | Amount | Filing |
|---|---|---|---|---|---|
| RNC (C00003418) | 2026-07-03 | WHITE HOUSE MILITARY OFFICE | TRAVEL EXPENSES | $4,869.72 | [202608209899803855](https://docquery.fec.gov/cgi-bin/fecimg/?202608209899803855) (M8) |

All other 2026 matches for the recipient queries were not travel: RNC payments to "White House Military Office" for catering (12 rows), to the White House Historical Association for donor mementos, and payments to state treasuries (MD, MI) for taxes; NRSC, NRCC, Never Surrender and MAGA PAC "Treasury" rows are all taxes, a disgorgement, or a research fee.

## 2018 control

### Trump campaign (C00580100, filed as Donald J. Trump for President, Inc.): payments to Department of Treasury

63 rows over 2017-03-31 to 2018-12-20, all described as "TRAVEL: AIR" or "TRAVEL EXPENSES" (many tagged "AMEX PMT"). Total across all 63: **$473,917.36** (2017: $262,992.48; calendar 2018: $210,924.88).

Quartz check, 2018-03-12 to 2018-04-13 (8 rows):

| Date | Amount | Filing |
|---|---|---|
| 2018-03-12 | $32,627.18 | [202606049870400369](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870400369) |
| 2018-03-12 | $2,783.22 | [202606049870400369](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870400369) |
| 2018-04-11 | $161.54 | [202606049870427612](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427612) |
| 2018-04-11 | $3,089.76 | [202606049870427612](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427612) |
| 2018-04-11 | $17,786.93 | [202606049870427611](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427611) |
| 2018-04-12 | $368.60 | [202606049870427613](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427613) |
| 2018-04-12 | $3,059.67 | [202606049870427612](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427612) |
| 2018-04-13 | $52,771.00 | [202606049870427611](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427611) |
| **Total** | **$112,647.90** | Quartz reported $112,667.90 |

The image numbers starting `2026...` look like they were assigned in June 2026 (FEC image numbers begin with the year and month received), which suggests these 2017-18 reports were amended or re-filed then. I have not opened the images. Check the report type and filing date on each one before putting it on screen.

### RNC (C00003418), 2018 cycle

| Payee / description | Rows | Total | Notes |
|---|---|---|---|
| US TREASURY, "TRAVEL EXPENSES" | 31 | $329,105.38 all rows; $234,979.89 for calendar 2018 | Includes a **$154,045.97 payment on 2018-08-22** ([201809209123954745](https://docquery.fec.gov/cgi-bin/fecimg/?201809209123954745)) and 17 negative rows dated 2018-03-05 (reversals or refunds, not explained in the data). Totals are net of those |
| WHITE HOUSE MILITARY OFFICE, "TRAVEL EXPENSES" | 5 | $133,637.22 all rows; $118,913.10 for calendar 2018 | Largest: $80,912.76 on 2018-12-21 ([201901319145346934](https://docquery.fec.gov/cgi-bin/fecimg/?201901319145346934)), $37,698.45 on 2018-12-05 ([201901319145346560](https://docquery.fec.gov/cgi-bin/fecimg/?201901319145346560)) |

NRSC and NRCC: no "Treasury" payee rows in the 2018 cycle (0 and 0).

## What was run, and what is absent

Queries: `schedules/schedule_b`, `per_page=100`, sorted by `-disbursement_date`.

- `recipient_name` = `TREASURY` and `WHITE HOUSE`, for each of C00003418, C00828541, C00873893, C00027466, C00075820, C00580100, in two-year periods 2026 and 2024.
- C00580100 in 2018: `recipient_name=TREASURY` (63 rows); `disbursement_description=TRAVEL EXPENSES: AIR` returned 0, because the filer used "TRAVEL: AIR" / "TRAVEL EXPENSES" instead.
- C00003418 in 2018: `recipient_name=US TREASURY` + description `TRAVEL EXPENSES`; `recipient_name=WHITE HOUSE MILITARY OFFICE` (2018, 2024, 2026); `recipient_name=TREASURY` (first 100 of 142 rows read).
- C00027466 and C00075820 in 2018: `recipient_name=TREASURY` (0 rows).
- C00003418 `disbursement_description=AIR TRAVEL` in 2026 (0); C00873893 `TRAVEL` in 2026 (40 rows, all commercial airlines, hotels and rideshare dated 2025, no government payee).
- `disbursement_description=TRAVEL EXPENSES` without a payee filter for the RNC returned thousands of commercial-vendor rows; it is a text match, not a payee filter, and I read only the first page. Not useful for this question.

**Absence is not proven for:**
- **Campaign committee 2024-26 payments to the Treasury or White House for travel: none found.** Searched only by payee `TREASURY` / `WHITE HOUSE`, in periods 2024 and 2026. A payee spelled differently (for example a Department of Defense or Air Force name, a White House Communications Agency name, or a vendor acting as intermediary) would be missed. I did not search by those names.
- **Late 2026 filings.** Latest RNC transactions seen are dated 2026-09-30 (image numbers suggest an October 2026 filing). Anything later is not yet filed or not yet in the API.
- **Description-based queries** (`AIR TRAVEL`, `TRAVEL`) were run only for the RNC and the JFC, not for the campaign, NRSC or NRCC.
- **2024 cycle:** the White House Military Office / Treasury travel query returned 0 for the RNC, but I did not read past page 1 of its Treasury results (state tax rows).
- **Which trips any payment covers.** FEC data gives payee, date, amount and a short description. Matching payments to specific events needs the filing memo text or other records.
- **Who actually paid in 2026.** If another committee (for example a state party or a joint fundraising vehicle) reimbursed, it is not in this search.

## Implications for the series

- The legal rule from the handoff stands; this data does not test whether any payment met it.
- Do not state a share of cost reimbursed for 2018. The $17M estimate is Quartz's; the payments above are the committees' own filings; the two do not line up trip by trip.
- Do not say "the campaign paid nothing in 2026." Say what was searched.
- The $154,045.97 and $80,912.76 RNC payments in 2018 are the headline "follow the receipt" example. They are the committee's own reports of payments; the description is only "TRAVEL EXPENSES".
- Not verified: "most aggressive president ever" and the "$1.8M in first two years" claim. Neither appears in this data.
