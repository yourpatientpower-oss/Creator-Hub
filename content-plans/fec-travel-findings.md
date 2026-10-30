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
| US TREASURY, "TRAVEL EXPENSES" | 31 | $329,105.38 net, all dates (2017-12-07 to 2018-08-28) | Includes a **$154,045.97 payment on 2018-08-22** ([201809209123954745](https://docquery.fec.gov/cgi-bin/fecimg/?201809209123954745)). Includes 17 negative rows from voided checks (below), so the net total is not a sum of new payments. Calendar-2018 net ($234,979.89) is misleading for the same reason: it counts the voids but not the 2017-dated originals they cancel |
| WHITE HOUSE MILITARY OFFICE, "TRAVEL EXPENSES" | 5 | $133,637.22 all rows; $118,913.10 for calendar 2018 | Largest: $80,912.76 on 2018-12-21 ([201901319145346934](https://docquery.fec.gov/cgi-bin/fecimg/?201901319145346934)), $37,698.45 on 2018-12-05 ([201901319145346560](https://docquery.fec.gov/cgi-bin/fecimg/?201901319145346560)) |

NRSC and NRCC: no "Treasury" payee rows in the 2018 cycle (0 and 0).

## Why some amounts are negative

The 17 negative RNC rows are all dated 2018-03-05, filed on the March 2018 monthly report (M4), and carry the memo **"VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018"**. The RNC cut payments to the US Treasury on 2017-12-07, voided them, and reissued them on 2018-03-05. FEC rules let a committee report a voided disbursement as a negative entry so the original payment is cancelled out. So these are not refunds, and they are not payments back to the committee.

What the data shows (RNC, "US Treasury", "TRAVEL EXPENSES"):

| Item | Amount |
|---|---|
| Original payments, 2017-12-07 (2 rows) | $94,125.49 |
| Voids, 2018-03-05 (17 rows, negative) | -$78,836.34 |
| Reissued payments, 2018-03-05 (positive rows) | $79,969.50 |
| Net effect of the reissue day | +$1,133.16 |

**The numbers do not reconcile exactly.** The voids ($78,836.34) are smaller than the originals ($94,125.49), and the reissues ($79,969.50) are $1,133.16 larger than the voids. I cannot tell from the data whether that is a partial void, a changed amount on reissue, or other items reported the same day. The 2017-12-07 originals were filed as two large rows; the voids are 17 smaller rows, so the match is by memo and date, not by transaction ID. Do not state a reconciled figure on camera. If this matters for a post, open filing images 201804209111708100 to 201804209111708106 and compare line by line.

Do not treat the negative rows as extra reimbursements, and do not count both the 2017-12-07 originals and the 2018-03-05 reissues as separate trips. Treat the October 2017 to March 2018 batch as roughly **$95,258.65 net** (originals plus the net reissue difference), with the caveat above.

Separately, there are two rows of exactly $4,689.52 (2018-01-10 and 2018-04-12). Same amount does not prove a duplicate; I have not checked.

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

## Payment-by-payment tables

Every row the queries returned for the three payee groups. Amounts are as filed; negatives are voided checks (see "Why some amounts are negative"). Dates are `disbursement_date`. Rows are oldest first. Memo = the filer's `memo_text`.

### Trump campaign (C00580100, filed as Donald J. Trump for President, Inc.) to Department of Treasury, 2017-18

Date range: 2017-03-31 to 2018-12-20 · 63 rows · net total $473,917.36

| # | Date | Payee as filed | Description | Amount | Memo | Report | Filing |
|---|---|---|---|---|---|---|---|
| 1 | 2017-03-31 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 3,247.01 |  | Q1 | [201707209067004733](https://docquery.fec.gov/cgi-bin/fecimg/?201707209067004733) |
| 2 | 2017-03-31 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 3,915.32 |  | Q1 | [201707209067004733](https://docquery.fec.gov/cgi-bin/fecimg/?201707209067004733) |
| 3 | 2017-03-31 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 20,059.31 |  | Q1 | [201707209067004734](https://docquery.fec.gov/cgi-bin/fecimg/?201707209067004734) |
| 4 | 2017-03-31 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 22,570.30 |  | Q1 | [201707209067004734](https://docquery.fec.gov/cgi-bin/fecimg/?201707209067004734) |
| 5 | 2017-06-30 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 3,025.40 |  | Q2 | [201807159115557769](https://docquery.fec.gov/cgi-bin/fecimg/?201807159115557769) |
| 6 | 2017-06-30 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 7,685.36 |  | Q2 | [201807159115557769](https://docquery.fec.gov/cgi-bin/fecimg/?201807159115557769) |
| 7 | 2017-07-17 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 1,213.76 |  | Q3 | [202606049870385975](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870385975) |
| 8 | 2017-07-17 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 6,286.38 |  | Q3 | [202606049870385976](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870385976) |
| 9 | 2017-08-12 | DEPARTMENT OF TREASURY | AMEX: TRAVEL: AIR [SB23.924302] | 1,921.34 |  | Q3 | [202606049870385976](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870385976) |
| 10 | 2017-08-12 | DEPARTMENT OF TREASURY | AMEX: TRAVEL: AIR [SB23.924302] | 2,120.48 |  | Q3 | [202606049870385976](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870385976) |
| 11 | 2017-08-12 | DEPARTMENT OF TREASURY | AMEX: TRAVEL: AIR [SB23.924302] | 20,059.60 |  | Q3 | [202606049870385977](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870385977) |
| 12 | 2017-08-15 | DEPARTMENT OF TREASURY | AMEX: TRAVEL: AIR [SB23.924302] | 23,126.50 |  | Q3 | [202606049870385977](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870385977) |
| 13 | 2017-08-16 | DEPARTMENT OF TREASURY | AMEX: TRAVEL: AIR [SB23.924302] | 215.05 |  | Q3 | [202606049870385977](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870385977) |
| 14 | 2017-09-06 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925527]: TRAVEL: AIR | 20,737.50 |  | YE | [202606049870391687](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391687) |
| 15 | 2017-09-06 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925527]: TRAVEL; AIR | 4,638.70 |  | YE | [202606049870391688](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391688) |
| 16 | 2017-09-06 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925527]: TRAVEL: AIR | 228.98 |  | YE | [202606049870391688](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391688) |
| 17 | 2017-10-10 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 7,387.00 |  | YE | [202606049870391688](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391688) |
| 18 | 2017-10-10 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 2,388.35 |  | YE | [202606049870391689](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391689) |
| 19 | 2017-10-10 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 941.47 |  | YE | [202606049870391689](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391689) |
| 20 | 2017-10-10 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 590.00 |  | YE | [202606049870391689](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391689) |
| 21 | 2017-10-10 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 185.20 |  | YE | [202606049870391690](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391690) |
| 22 | 2017-10-24 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 24,098.67 |  | YE | [202606049870391690](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391690) |
| 23 | 2017-10-24 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 199.79 |  | YE | [202606049870391690](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391690) |
| 24 | 2017-10-25 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 28,946.17 |  | YE | [202606049870391691](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391691) |
| 25 | 2017-10-25 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 4,624.84 |  | YE | [202606049870391691](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391691) |
| 26 | 2017-10-25 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 3,710.96 |  | YE | [202606049870391691](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391691) |
| 27 | 2017-10-25 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.925530]: TRAVEL: AIR | 1,999.16 |  | YE | [202606049870391692](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391692) |
| 28 | 2017-12-20 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 5,122.90 |  | YE | [202606049870391692](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391692) |
| 29 | 2017-12-20 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 6,803.07 |  | YE | [202606049870391692](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391692) |
| 30 | 2017-12-20 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 13,992.17 |  | YE | [202606049870391693](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391693) |
| 31 | 2017-12-20 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 15,046.40 |  | YE | [202606049870391693](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391693) |
| 32 | 2017-12-29 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 1,590.48 |  | YE | [202606049870391693](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391693) |
| 33 | 2017-12-29 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 1,613.30 |  | YE | [202606049870391694](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391694) |
| 34 | 2017-12-29 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 2,701.56 |  | YE | [202606049870391694](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870391694) |
| 35 | 2018-01-23 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1179443]: TRAVEL: AIR | 327.75 |  | Q1 | [202606049870400368](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870400368) |
| 36 | 2018-01-23 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1179443]: TRAVEL: AIR | 4,667.92 |  | Q1 | [202606049870400368](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870400368) |
| 37 | 2018-03-12 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 2,783.22 |  | Q1 | [202606049870400369](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870400369) |
| 38 | 2018-03-12 | DEPARTMENT OF TREASURY | TRAVEL: AIR | 32,627.18 |  | Q1 | [202606049870400369](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870400369) |
| 39 | 2018-04-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1401808]: TRAVEL: AIR | 17,786.93 |  | Q2 | [202606049870427611](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427611) |
| 40 | 2018-04-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1401808]: TRAVEL: AIR | 3,089.76 |  | Q2 | [202606049870427612](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427612) |
| 41 | 2018-04-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1401808]: TRAVEL: AIR | 161.54 |  | Q2 | [202606049870427612](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427612) |
| 42 | 2018-04-12 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1401808]: TRAVEL: AIR | 3,059.67 |  | Q2 | [202606049870427612](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427612) |
| 43 | 2018-04-12 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1401808]: TRAVEL: AIR | 368.60 |  | Q2 | [202606049870427613](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427613) |
| 44 | 2018-04-13 | DEPARTMENT OF THE TREASURY | TRAVEL: AIR | 52,771.00 |  | Q2 | [202606049870427611](https://docquery.fec.gov/cgi-bin/fecimg/?202606049870427611) |
| 45 | 2018-07-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1405358]: TRAVEL EXPENSES | 42.76 |  | Q3 | [201812179143563974](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563974) |
| 46 | 2018-07-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1405358]: TRAVEL EXPENSES | 9.50 |  | Q3 | [201812179143563974](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563974) |
| 47 | 2018-07-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1405358]: TRAVEL EXPENSES | 28.08 |  | Q3 | [201812179143563974](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563974) |
| 48 | 2018-07-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1405358]: TRAVEL EXPENSES | 14,991.46 |  | Q3 | [201812179143563975](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563975) |
| 49 | 2018-07-11 | DEPARTMENT OF TREASURY | AMEX PMT [SB23.1405358]: TRAVEL EXPENSES | 463.87 |  | Q3 | [201812179143563975](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563975) |
| 50 | 2018-08-29 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 203.93 |  | Q3 | [201812179143563975](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563975) |
| 51 | 2018-08-29 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 3,710.96 |  | Q3 | [201812179143563976](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563976) |
| 52 | 2018-08-29 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 19,949.00 |  | Q3 | [201812179143563976](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563976) |
| 53 | 2018-09-13 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 94.06 |  | Q3 | [201812179143563976](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563976) |
| 54 | 2018-09-13 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 3,128.10 |  | Q3 | [201812179143563977](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563977) |
| 55 | 2018-09-13 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 12,462.21 |  | Q3 | [201812179143563977](https://docquery.fec.gov/cgi-bin/fecimg/?201812179143563977) |
| 56 | 2018-12-04 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 136.14 |  | YE | [201903139145687061](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687061) |
| 57 | 2018-12-04 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 180.46 |  | YE | [201903139145687061](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687061) |
| 58 | 2018-12-04 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 187.14 |  | YE | [201903139145687061](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687061) |
| 59 | 2018-12-04 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 321.43 |  | YE | [201903139145687062](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687062) |
| 60 | 2018-12-04 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 18,136.96 |  | YE | [201903139145687062](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687062) |
| 61 | 2018-12-13 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 1,590.48 |  | YE | [201903139145687062](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687062) |
| 62 | 2018-12-13 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 13,933.81 |  | YE | [201903139145687063](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687063) |
| 63 | 2018-12-20 | DEPARTMENT OF TREASURY | TRAVEL EXPENSES | 3,710.96 |  | YE | [201903139145687063](https://docquery.fec.gov/cgi-bin/fecimg/?201903139145687063) |

### RNC (C00003418) to US Treasury, "TRAVEL EXPENSES"

Date range: 2017-12-07 to 2018-08-28 · 31 rows · net total $329,105.38

| # | Date | Payee as filed | Description | Amount | Memo | Report | Filing |
|---|---|---|---|---|---|---|---|
| 1 | 2017-12-07 | US TREASURY | TRAVEL EXPENSES | 63,209.43 |  | YE | [201807109115285877](https://docquery.fec.gov/cgi-bin/fecimg/?201807109115285877) |
| 2 | 2017-12-07 | US TREASURY | TRAVEL EXPENSES | 30,916.06 |  | YE | [201807109115285877](https://docquery.fec.gov/cgi-bin/fecimg/?201807109115285877) |
| 3 | 2018-01-10 | US TREASURY | TRAVEL EXPENSES | 4,689.52 |  | M2 | [201802209094628750](https://docquery.fec.gov/cgi-bin/fecimg/?201802209094628750) |
| 4 | 2018-01-10 | US TREASURY | TRAVEL EXPENSES | 489.41 |  | M2 | [201802209094628751](https://docquery.fec.gov/cgi-bin/fecimg/?201802209094628751) |
| 5 | 2018-02-14 | US TREASURY | TRAVEL EXPENSES | 3,821.36 |  | M3 | [201803209096669469](https://docquery.fec.gov/cgi-bin/fecimg/?201803209096669469) |
| 6 | 2018-02-14 | US TREASURY | TRAVEL EXPENSES | 4,099.60 |  | M3 | [201803209096669469](https://docquery.fec.gov/cgi-bin/fecimg/?201803209096669469) |
| 7 | 2018-02-21 | US TREASURY | TRAVEL EXPENSES | 55,299.39 |  | M3 | [201803209096669614](https://docquery.fec.gov/cgi-bin/fecimg/?201803209096669614) |
| 8 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | 60,891.96 |  | M4 | [201804209111708100](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708100) |
| 9 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | 19,077.54 |  | M4 | [201804209111708100](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708100) |
| 10 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -4,501.60 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708101](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708101) |
| 11 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -5,596.40 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708101](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708101) |
| 12 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -5,844.25 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708101](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708101) |
| 13 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -5,996.55 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708102](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708102) |
| 14 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -14,782.16 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708102](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708102) |
| 15 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -20,416.00 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708102](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708102) |
| 16 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -329.58 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708103](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708103) |
| 17 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -709.78 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708103](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708103) |
| 18 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -927.74 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708103](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708103) |
| 19 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -927.74 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708104](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708104) |
| 20 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -2,783.22 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708104](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708104) |
| 21 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -2,811.25 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708104](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708104) |
| 22 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -2,846.48 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708105](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708105) |
| 23 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -8,679.60 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708105](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708105) |
| 24 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -190.19 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708105](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708105) |
| 25 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -463.88 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708106](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708106) |
| 26 | 2018-03-05 | US TREASURY | TRAVEL EXPENSES | -1,029.92 | VOID PAYMENT ORIG DISB 12/07/2017; REISSUED 03/05/2018 | M4 | [201804209111708106](https://docquery.fec.gov/cgi-bin/fecimg/?201804209111708106) |
| 27 | 2018-04-12 | US TREASURY | TRAVEL EXPENSES | 4,689.52 |  | M5 | [201809129121703838](https://docquery.fec.gov/cgi-bin/fecimg/?201809129121703838) |
| 28 | 2018-08-17 | US TREASURY | TRAVEL EXPENSES | 29.90 |  | M9 | [201809209123954654](https://docquery.fec.gov/cgi-bin/fecimg/?201809209123954654) |
| 29 | 2018-08-21 | US TREASURY | TRAVEL EXPENSES | 6,677.64 |  | M9 | [201809209123954657](https://docquery.fec.gov/cgi-bin/fecimg/?201809209123954657) |
| 30 | 2018-08-22 | US TREASURY | TRAVEL EXPENSES | 154,045.97 |  | M9 | [201809209123954745](https://docquery.fec.gov/cgi-bin/fecimg/?201809209123954745) |
| 31 | 2018-08-28 | US TREASURY | TRAVEL EXPENSES | 4.42 |  | M9 | [201809209123954761](https://docquery.fec.gov/cgi-bin/fecimg/?201809209123954761) |

### RNC (C00003418) to White House Military Office, "TRAVEL EXPENSES"

Date range: 2017-11-03 to 2026-07-03 · 6 rows · net total $138,506.94

| # | Date | Payee as filed | Description | Amount | Memo | Report | Filing |
|---|---|---|---|---|---|---|---|
| 1 | 2017-11-03 | WHITE HOUSE MILITARY OFFICE | TRAVEL EXPENSES | 14,724.12 |  | M12 | [201712209089410004](https://docquery.fec.gov/cgi-bin/fecimg/?201712209089410004) |
| 2 | 2018-11-09 | WHITE HOUSE MILITARY OFFICE | TRAVEL EXPENSES | 93.98 |  | 30G | [201901319144411535](https://docquery.fec.gov/cgi-bin/fecimg/?201901319144411535) |
| 3 | 2018-12-05 | WHITE HOUSE MILITARY OFFICE | TRAVEL EXPENSES | 37,698.45 |  | YE | [201901319145346560](https://docquery.fec.gov/cgi-bin/fecimg/?201901319145346560) |
| 4 | 2018-12-10 | WHITE HOUSE MILITARY OFFICE | TRAVEL EXPENSES | 207.91 |  | YE | [201901319145346634](https://docquery.fec.gov/cgi-bin/fecimg/?201901319145346634) |
| 5 | 2018-12-21 | WHITE HOUSE MILITARY OFFICE | TRAVEL EXPENSES | 80,912.76 |  | YE | [201901319145346934](https://docquery.fec.gov/cgi-bin/fecimg/?201901319145346934) |
| 6 | 2026-07-03 | WHITE HOUSE MILITARY OFFICE | TRAVEL EXPENSES | 4,869.72 |  | M8 | [202608209899803855](https://docquery.fec.gov/cgi-bin/fecimg/?202608209899803855) |
