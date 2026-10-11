# Source Auditor: GD-20261011-trump-accounts

Module owner: source-auditor (Wave 3). Run date: 2026-10-11.
Inputs: case.md, sources.md (203 rows: HA-, MM-, CA-, TL-, PA-) and all five module files (claim-auditor, money-mapper, timeline-analyst, harm-accountability-analyst, pattern-analyst).
Tools actually used: Nimble Extract (statute pages on LII; Treasury sb0433, sb0517, sb0551, sb0642; White House releases of 2025-12-02, 2026-07-06 and 2026-10-07; the T.D. 10056 full text; the Invest America Dell page; the Robinhood Q1 8-K exhibit; the LDA API and the State Street registration print page; Wayback captures, the availability API and Save Page Now), Nimble Search (JCT, SEC no-action letter, CRS, Commonwealth, Urban, Warren letter, OGE, inaugural donations, Robinhood Q2 results, June 2025 transcripts) and Bash for local parsing.
Blocked or failed: direct `curl` to archive.org and web.archive.org (proxy CONNECT 403); WebFetch to jct.gov (DNS); Nimble Extract of buildcommonwealth.org (403). The JCT and SEC PDFs came back as undecodable binary. The OGE 278-T is a 113-page scan, and search did not surface its rows.
Edits to sources.md: filled the Origin ID, Independent? and Archive link columns only. Appended rows SA-S1 to SA-S10 and a "Source-auditor notes" section. No other existing cell was changed, and a column-level diff confirmed it.

---

## 1. Question investigated

Does each major conclusion in the five modules rest on a source that (1) exists, (2) supports the exact statement, (3) has the right date and context, and (4) is primary or clearly labelled secondary? How many independent origins stand behind it once repeats are collapsed? Which archived copies preserve the key pages? Priority was given to the conclusions most likely to reach the executive finding: mechanics, what was "automatic", the Dell pledge, the operators, the political-finance items and distribution.

---

## 2. Findings

### 2.1 Resolution of the "automatic" conflict (HA vs CA vs TL)

All three modules are right about different things. Each describes a different election.

| Element | What happened | Source (primary) |
|---|---|---|
| **Account opening** | Automatic. 26 USC 530A(b)(2)(C)(i) lets the Secretary make the account election "based on information available ... from tax returns or otherwise". Under T.D. 10056 (effective 2026-09-30, expires 2029-09-30), the Secretary made that election "on or about October 1, 2026" for **every child under 18 with an SSN**, not only for children eligible for the seed. Treasury announced completion on 2026-10-01: "over 60 million more eligible children now have an account ready to be claimed". | CA-S1, SA-S1, HA-S5/TL-S61 |
| **$1,000 seed (sec. 6434)** | **Not automatic.** The statute triggers it only for "an individual who makes an election" (CA-S2). The rule text says "the Secretary cannot make a pilot program election". An auto account receives the $1,000 only if an individual has made that election. Treasury: "Eligible children must also have their Trump Account claimed to receive the one-time $1,000 seed contribution". | CA-S2, SA-S1, HA-S5, CA-S15 |
| **Why not earlier** | The March 2026 proposal confined Secretary elections to edge cases. The agencies were "unable to fully resolve the legal and administrative issues ... including the need to prevent the unauthorized disclosure of return information". The September rules solved this with a master group trust. | SA-S1 (resolves PA-S17's pointer) |
| **"60M+"** | An official estimate. The rule's analysis says "more than 60 million". CT Mirror notes the White House "did not provide a specific figure". | SA-S1, MM-S19 |

Verdicts:
- HA's "Oct 1 auto-enrollment of 60M+ children" is **correct for accounts**. Label it an official, unaudited figure that covers all children under 18.
- CA's C14 ("automatic $1,000" contradicted by statute) is **correct**. One more instance exists: in the same 2026-07-06 White House release, Michael Dell says "every newborn American child will start their life with $1,000 invested" (CA-S14 archived capture).
- TL's 09-30 entry is **correct**. Clarify that the Treasury-made election is the account election, and that it was made on or about 10-01.
- An official contemporaneous acknowledgment exists. At the 2025-06-09 roundtable, Speaker Johnson said "The families that opt in will receive a one-time payment of $1,000" (TL-S18, SA-S5).
- The rule's own regulatory analysis says an opt-in design "would likely have been close to 50%" enrollment, "supported" by "administrative data from early Trump account elections" (SA-S1). That is primary support for the take-up gap the modules inferred.

### 2.2 Dell pledge

- **$6.25B and $250 x 25M:** verified in the White House release (CA-S12, archived), on the Invest America page (CA-S19) and in the rule preamble (SA-S1).
- **Threshold:**
  - At announcement it was ZIP codes "with median incomes below $150,000" (White House). The rule preamble says "household median income". Invest America later wrote "families with incomes below $150,000".
  - The final threshold was ZIP median **family** income of **$117,300** or less, as of 2026-10-09 (CA-S19). Invest America says the threshold changed after auto-enrollment enlarged the eligible pool. It also says families who enrolled before 10-01 keep eligibility under the earlier rules.
  - CT Mirror's "$118,000" (MM-S19) is a rounding of $117,300. **There is no three-way conflict.**
- **$2.6B vs "complete 10-09":**
  - The White House's $2.6B philanthropic figure was as of 2026-10-07 (CA-S15).
  - Dell said on 10-07: "we have funded 10 million of those accounts as of this morning ... By the end of this week we will have funded 25 million" (SA-S7, MM-S19). 10M x $250 = $2.5B.
  - Invest America: "All deposits were made as of Friday, October 9" (CA-S19, archived 2026-10-11).
  - The figures are consistent once timing is taken into account. Completion is still attested only by the donor and its partner. No Treasury confirmation was found.
- **New open point:** 25M x $250 = $6.25B exactly, yet Invest America also says funds are "reserved for children in foster care". Whether the foster-care funds are additional to the $6.25B is unexplained.

### 2.3 Operators

- **BNY:** designated financial agent on 2026-04-06. sb0433 has no compensation terms (re-read; archived). A search on 2026-10-11 found no Trump Accounts financial agency agreement, only a 2017 BNY agreement for a different purpose. Absence in search is not proof of non-publication.
- **Robinhood:**
  - Robinhood's no-action request (HA-S28/MM-S6, dated 2026-05-05) states that "The Financial Agent contracts with Robinhood". It also says "Treasury has chosen Robinhood ... consistent with statutory criteria set forth in 26 U.S.C. § 530A(g)", and it calls Robinhood "a subcontractor of the Treasury". MM's "engaged as a subcontractor of BNY, not directly by Treasury" needs rewording: the contract runs through BNY, while Robinhood says Treasury made the choice. The selection record is still unknown.
  - The cross-marketing limit is partly public: Robinhood "will not be permitted to offer or market additional products or services to Trump accounts while acting as the initial trustee".
  - Cost-plus: the Q1 8-K exhibit (MM-S8, 2026-04-28, archived) says verbatim "contracted on a cost plus basis with a small margin" and reports a $100M addition to 2026 spending. It also discloses "$14 million of costs related to Rothera and Trump Accounts" in Q1.
  - The Q2 results (SA-S3, 2026-07-29) give primary support that "Other revenues" rose "primarily driven by Trump Account service revenues". No amount is disclosed, so MM-S10's $25M is unsupported.
- **State Street:**
  - SPYM was named the default on **2026-07-01**. That date is confirmed in sb0551 itself, so the timeline's "inferred" label can be dropped.
  - The LDA registration of CGCN for State Street Global Advisors was signed and posted 2026-06-05, but its **"Effective Date of Registration" is 4/21/26** (SA-S2, archived). So the engagement began about 71 days before the default selection and 15 days after the BNY designation, not "26 days before".
  - The registration lists Ja'Ron Smith, former "Deputy Asst. and Special Asst. to President Donald Trump 2017-2020", as a lobbyist. This is a disclosed fact, not evidence of influence.

### 2.4 Political finance

- **Robinhood's $2M inaugural donation:** two independent origins.
  - A company spokesperson, quoted by Reuters on 2024-12-17 (SA-S4) and Politico on 2025-01-17 (MM-S27).
  - The inaugural committee's FEC filing, as reported by CNBC on 2025-04-23 (PA-S3): "after not donating in the two previous elections".
  - Keep.
- **Presidential BNY and Robinhood purchases:**
  - The Warren–Garcia letter (HA-S31; re-read and archived) gives:
    - Robinhood: up to $50,000 on 03-11, up to $250,000 on 03-17, up to $15,000 on 03-23.
    - BNY: up to $50,000 on 03-12, up to $15,000 on 03-23.
  - The letter cites OGE 278-T rows 1196, 170, 1980/2070 and 1028.
  - The primary filing was located (SA-S6) but its rows were not read. Status: **reported, citing primary**. It is one origin (O-OGE-278T) relayed by Warren, Quiver and Open Cabinet.
  - The trustee-managed caveat and the Trump Organization's denial stand.
- **Dell stock "up to $5M on 2026-02-10" (TL-S46):** not corroborated. The Warren letter flags Dell purchases on 02-10, but its $1M–$5M items for 02-10 are Boeing and Axon. Drop the amount.
- **Trade-count "discrepancy":** largely explained. The Q1 report came as two filings: 3,642 equity/ETF transactions plus 69 fixed-income, for 3,711 in total. Warren's 3,555 "individual stock trades" probably excludes ETFs (inference).
- **Warren–Garcia letter:** dated 2026-08-12, with answers requested by 08-28 and questions about the April 6 announcement. Verified and archived. No response was found.
- **"Gift courtesy of Donald J. Trump":**
  - Verified in the 2025-12-02 Wayback capture. CDX shows 1,479 captures. The claim-auditor's "no snapshot" was wrong.
  - Nuance: the same 12-02 page body says "$1,000 pilot deposit from the U.S. Treasury".
  - The 12-17 capture shows the change to "$1,000 from the U.S. Treasury". It also shows the individual-stock mock-up and "Launching July 5, 2026", and contains both "Get $1,000 for every American child born ..." and "Enroll your child by making an election when you file your taxes".
- **"No cost to the American taxpayer":** confirmed in the neutral Roll Call Factba.se and Rev transcripts (SA-S5), not only in the Senate Democrats transcript. The same sentence claims the program is "fully funded" through offsets. The contradiction with JCT therefore concerns the provision's gross cost. The offset claim was not tested.

### 2.5 Distribution

- **CRS R48910** (updated 2026-06-15) is verified word for word:
  - the tax benefit "is economically regressive (greater for higher-income households)";
  - the pilot deposit "will reduce wealth inequality";
  - employer contributions "could increase inequities".
  It is independent, but it predates auto-enrollment. Keep.
- **Commonwealth's 5%** is verified (SA-S9). It comes from a July 2026 survey of about 1,100 LMI parents of children aged 10 and under, taken before auto-enrollment. "Eligible" includes children eligible only for the Dell $250. The sponsor promotes the accounts. HA's "<= $80k" cut-off was not visible in the text read.
- **Urban's 39%** is Urban's own calculation: Treasury's 1.4M seed-eligible enrollments divided by Urban's eligible denominator (SA-S8). CA's "about 40% of 'eligible' children had signed up by late May (CA-S25)" mixes this with the roughly 6M total sign-ups. It should read "about 39% of seed-eligible children".
- **Urban January 2026 model** (7% vs 1%; "nearly $600 million"): now read directly (SA-S10). Upgrade it from unverified. The figures are "illustrative rather than predictive".
- **$1.3B seeds paid vs JCT's $6.578B for FY2026:**
  - The direction is supported. Two pieces of administration evidence agree: Treasury's 1.4–1.5M seed-eligible enrollment counts (HA-S4, TL-S58) and the rule's statement that opt-in enrollment would be "close to 50%" (SA-S1).
  - The magnitude is not supported. The fiscal-year window differs from the 10-07 cumulative figure, and JCT assumed $731M in FY2025, which could not have been paid.
  - Keep as a labelled inference about direction only.
- **"86%" / "80%":**
  - Verified on sb0517 (archived), in the White House 07-06 release and in the White House 10-07 release. No method is published.
  - The same sb0517 release reports that **89%** of families claiming the enhanced CTC, and 96% of filers receiving a tax cut, had income under $200,000. Against that benchmark, 86% does not show disproportionate reach to lower-income families (inference; the populations differ).
  - This strengthens CA's C15 and supersedes HA's remark that the figure "lacks a denominator".
- **JCT -$15.233B / $14.599B:**
  - The document, its date and the line item were confirmed (search snippet; Wayback capture 2026-08-21).
  - The auditor could not re-read the numbers because the PDF was undecodable and jct.gov failed DNS.
  - The figures rely on two direct Wave 1 reads of the same PDF. Secondary totals match: BHFS's $15.2B and BPC's $14.6B (= outlays). This is one origin.

### 2.6 Audit table

| Conclusion (module) | Source IDs | Exists | Supports exact claim | Date/context OK | Primary? | Independent origins | Verdict (keep/downgrade/remove) |
|---|---|---|---|---|---|---|---|
| $1,000 seed: U.S.-citizen qualifying child born 2025-01-01 to 2028-12-31, SSN, **individual election required**, offset-exempt, no deposit before 2026-07-04 (CA C1) | CA-S2, CA-S4, SA-S1 | yes (re-read) | yes | yes | primary | O-STATUTE (+ agency guidance O-IRS-N2568, O-TD10056) | keep |
| Index-fund only, no leverage, fund fees <= 0.1% (CA C2) | CA-S1, HA-S39 | yes | yes | yes | primary | O-STATUTE | keep |
| $5,000 cap; employer $2,500 per employee, counted inside the cap; seed/QGC/rollover exempt (CA C3) | CA-S1, CA-S3, CA-S4, CA-S15 | yes | yes | yes | primary | O-STATUTE, O-IRS-N2568 | keep |
| No distributions before Jan 1 of the year the child turns 18; seed/QGC/§128 money has no basis and is taxed on withdrawal (CA C4) | CA-S1, CA-S4 | yes | yes (530A(d)(2)) | yes | primary | O-STATUTE | keep |
| JCT: -$15,233M FY2025-34, of which $14,599M outlays (CA C11, MM 2.5, HA 2b.2) | CA-S5, MM-S1, HA-S19 (+CA-S27, MM-S34, TL-S13) | yes | not re-read by auditor; two Wave 1 direct reads; secondary totals match | yes | primary | 1 (O-JCT-JCX35; secondaries are repeats) | keep (flag: auditor could not re-read figures) |
| Accounts opened automatically on or about 10-01 for every child under 18 with an SSN; seed still requires an individual's election/claim (reconciles HA, CA, TL) | SA-S1, CA-S1, CA-S2, HA-S5, TL-S61, CA-S15 | yes | yes | yes | primary | O-STATUTE, O-TD10056 (+ administration statements) | keep |
| "Oct 1 auto-enrollment of 60M+ children" (HA) | HA-S5, HA-S8, HA-S43, SA-S1 | yes | yes for accounts; 60M+ is an official estimate | yes | primary (official claim) | administration only | keep, with label "official, unaudited; accounts not seeds" |
| "Automatic $1,000 seed" wording is contradicted by statute (CA C14) | CA-S14, CA-S6, CA-S2, SA-S1 | yes (archived capture) | yes | yes | primary | O-LAUNCH-0706 vs O-STATUTE | keep (add Dell "every newborn" quote) |
| Temporary regs effective 2026-09-30 authorize Treasury-made elections (TL) | TL-S39, CA-S16, SA-S1 | yes | yes; covers the account election only | yes | primary | O-TD10056 | keep (clarify scope) |
| Dell $6.25B pledge, $250 x 25M children born 2016-2024 (CA C6, MM) | CA-S12, CA-S19, MM-S16, MM-S17, SA-S1 | yes | yes | yes | primary + wire | 1 announcement (O-DELL-PLEDGE-1202) | keep |
| Threshold $150K at announcement, final $117,300 ZIP median family income (CA C6) | CA-S12, CA-S19, SA-S1 | yes | yes | yes | primary (partner) | O-INVESTAMERICA only (non-independent) for final value | keep |
| "$118,000 vs $150,000 discrepancy unresolved" (MM 2.4) | MM-S19, CA-S19 | yes | $118,000 rounds $117,300 | no (stale) | news | n/a | **downgrade** (resolved; no conflict) |
| Dell targeting "only weakly targeted: ~3% of ZIPs exceed $150k" (HA 2b.6) | HA-S41 | yes (not re-read) | uses superseded threshold | no | secondary | O-CNBC-0614 | **downgrade** (outdated) |
| "$2.6B philanthropic well below $6.25B; no reconciliation found" (CA C6) | CA-S15, CA-S19, MM-S19, SA-S7 | yes | timing explains it (10M funded on 10-07, 25M by 10-09) | yes | mixed | subject/partner only | **downgrade** the "no reconciliation" point; keep "completion attested only by donor/partner" |
| BNY designated financial agent 2026-04-06; compensation not disclosed (MM 2.2.3) | MM-S3, TL-S40, MM-S37 | yes (archived) | yes | yes | primary | O-TREAS-BNY-0406 | keep (absence searched 2026-10-11) |
| Robinhood sole broker-dealer/initial trustee; paid through BNY agreements; no account-level fees (MM 2.2.1) | HA-S28, MM-S6, MM-S7 | yes | yes | 2026-05-05 | primary | O-SEC-NAL-0505, O-RH-AGR | keep |
| Robinhood "engaged as a subcontractor of BNY, not directly by Treasury"; no evidence how BNY chose it (MM 2.1, 2.6) | MM-S6, HA-S28 | yes | partly: Robinhood says Treasury chose it under 530A(g); contract runs via BNY | yes | primary | O-SEC-NAL-0505 | **downgrade** (reword) |
| Cost-plus "small margin"; +$100M 2026 spend (MM 2.2.2) | MM-S8 | yes (archived) | yes, verbatim | 2026-04-28 | primary | O-RH-Q1-8K | keep |
| Robinhood began earning Trump Account revenue in Q2 (MM 2.2.2) | MM-S9, SA-S3 | yes | yes | 2026-07-29 | primary (now) | O-RH-Q2 | keep (upgraded) |
| Robinhood Q2 Trump Accounts revenue = $25M (MM-S10) | MM-S10, SA-S3 | yes | not in primary | n/a | low-quality secondary | unknown | **remove** |
| Cross-marketing limit "scope not public" (MM 2.2.5, PA P7) | MM-S6, HA-S28 | yes | restriction is stated in the no-action request; agreement text not public | yes | primary | O-SEC-NAL-0505 | **downgrade** (partly public) |
| SPYM default on 2026-07-01 (CA, TL "inferred") | CA-S7, TL-S48 | yes (archived) | yes, release dated July 1 | yes | primary | O-TREAS-LINEUP-0701 | keep (date confirmed) |
| State Street registered CGCN on 2026-06-05, "26 days before" default (TL O5, PA P1) | TL-S63, SA-S2 | yes (archived) | filed 6/5, but effective date 4/21/26 | **no** | primary (LD-1) | O-LDA-SSGA | **downgrade** (engagement effective 2026-04-21) |
| SPYM cheapest major S&P 500 ETF since 2023 (PA P1) | PA-S13, MM-S14 | not re-read | n/a | n/a | secondary commercial | O-SPYM-FEE | keep as secondary (verify on issuer page) |
| Robinhood $2M to 2025 inaugural committee (MM 2.6, PA P1) | MM-S27, SA-S4, PA-S3, PA-S1 | yes | yes | Dec 2024–Apr 2025 | spokesperson + FEC (via CNBC) | 2-3 (spokesperson; FEC Form 13; LD-203) | keep |
| NYT: SEC ended a Robinhood probe after the donation (MM 2.6) | MM-S28 | paywalled snippet | not re-read | n/a | secondary | 1 | keep only as a reported juxtaposition; not for the executive finding |
| Presidential Robinhood/BNY purchases 03-11 to 03-23, before the 04-06 designation (HA, TL O6, PA P8) | HA-S31, TL-S45, TL-S46, PA-S11, SA-S6 | letter yes (archived); OGE PDF located | letter gives amounts with row cites; OGE rows not read | yes | secondary citing primary | 1 (O-OGE-278T, relayed) | keep as "reported" (not primary-verified; allegation-framed) |
| Presidential Dell purchase "up to $5M" on 2026-02-10 (TL timeline, TL-S46) | TL-S46, HA-S31 | yes | amount not corroborated | n/a | secondary aggregator | O-OGE-278T via Quiver | **downgrade** (drop the $5M amount) |
| Q1 trade counts 3,555 / 3,642 / 3,711 "unresolved" (PA P8) | HA-S31, PA-S11, SA-S6 | yes | 3,642 + 69 = 3,711 across two filings | n/a | aggregators | O-OGE-278T | **downgrade** "unresolved" to "largely explained" |
| Warren–Garcia letter 2026-08-12; answers by 08-28; Trump Org denial (HA 2d) | HA-S31 | yes (archived) | yes | yes | primary (letter) | O-WARREN-0812 | keep (allegation, not finding) |
| trumpaccounts.gov "$1,000 gift courtesy of Donald J. Trump" 12-02 to 12-15; changed by 12-17 (TL O7, PA P2a) | TL-S30, TL-S31, TL-S32, TL-S33 | yes (re-opened) | yes; same 12-02 page body credits "U.S. Treasury" | yes | primary (archived) | O-TRUMPACCOUNTS-SITE | keep (add nuance) |
| "No cost to the American taxpayer" vs JCT (TL O3, PA P2c) | TL-S18, SA-S5, CA-S5 | yes | wording verified in neutral transcripts; stated as an offset claim | yes | primary transcript | O-WH-0609 | keep (reword: gross cost vs untested offset claim) |
| Bessent: "backdoor for privatizing Social Security", clarified the same day (TL) | TL-S22, TL-S23 (+Reuters, USA Today headlines) | yes | yes (headline level) | 2025-07-30 | secondary, one event | O-BESSENT-0730 | keep |
| CRS: tax benefit regressive; seed reduces inequality; employer channel could increase inequities (CA C7, MM, PA P4) | CA-S18, MM-S2, HA-S26 | yes (archived) | verbatim | 2026-06-15 (pre-auto-enrollment) | independent government analysis | O-CRS-R48910 | keep |
| Commonwealth: only 5% of eligible LMI parents opened an account (HA) | HA-S6, HA-S7, SA-S9 | yes | yes | July 2026 survey; pre-auto-enrollment; includes Dell-only-eligible children | secondary survey | O-COMMONWEALTH-0915 | keep with context ("<= $80k" detail unverified) |
| Urban: ~39% of seed-eligible children enrolled (HA, TL) | HA-S2, TL-S56, SA-S8 | yes | yes | yes | secondary (Urban calculation on Treasury number) | O-URBAN-0702 (+O-ADMIN-TAKEUP) | keep |
| "About 40% of 'eligible' children had signed up by late May" (CA C7) | CA-S25, SA-S8 | yes | mixes seed-eligible 1.4M with ~6M total | no | secondary | O-CNBC-0614 | **downgrade** (reword to "~39% of seed-eligible children") |
| Urban Jan 2026 simulation: 7% vs 1%; ~$600M forgone (HA, CA C7) | HA-S3, CA-S22, SA-S10 | yes (now read) | yes | premise superseded for accounts, still relevant to seed election | secondary simulation | O-URBAN-0120 | keep (upgraded; "illustrative") |
| $1.3B seeds paid vs JCT $6.578B FY2026 implies take-up below JCT path (CA C7, MM 2.5) | CA-S15, CA-S5, SA-S1, HA-S4, TL-S58 | yes | direction yes; magnitude no | timing bases differ | inference on primary inputs | O-WH-1007, O-JCT-JCX35, O-TD10056 | keep as inference (direction only; now supported by T.D. 10056 "close to 50%") |
| "86%"/"80%" of accounts linked to families under $200k; no method (CA C15, HA, PA P2f) | HA-S4, CA-S11, CA-S14, CA-S15 | yes (archived) | yes | yes | primary (administration) | 1 (O-ADMIN-TAKEUP) | keep; add sb0517 benchmark (89% of CTC families under $200k) |
| March 2026 NPRM declined broad auto-enrollment (PA P3 "unresolved", PA-S17 pointer) | PA-S17, SA-S1 | yes | primary now states reasons (return-information disclosure, timing) | yes | primary | O-TD10056 | keep (resolved; drop reliance on PA-S17) |
| Rollover conflict: SEC letter "no transfer" vs Quartz/WSJ "rollover within a year" unresolved (HA 2d, 3) | HA-S28, HA-S47, CA-S12 | yes | WH FAQ: transfer "at a later date"; letter: none during sole-broker period | yes | primary | O-SEC-NAL-0505, O-DELL-PLEDGE-1202 | **downgrade** "conflict" to "reconciled by timing" (date still unknown) |
| "Senate LDA disclosures: unknown" (MM 2.3.4) | MM-S38, TL-S63, SA-S2 | yes | superseded: filings exist and were read via Nimble | n/a | primary | O-LDA-DB | **downgrade** (superseded by TL-S63/SA-S2) |
| Altimeter HOOD position ~900K shares at 2026-06-30 (MM 2.6) | MM-S24, MM-S25, MM-S26 | not re-read | n/a | n/a | aggregators of 13F | O-ALT-13F | keep as secondary (EDGAR not reached) |
| "Go out and buy a Dell Computer", 2026-02-19 (PA P8) | HA-S31 | yes | letter cites a Roll Call transcript (not opened) | yes | secondary | O-WARREN-0812 | keep as reported |

### 2.7 Origin collapse for headline claims

| Headline claim | Sources cited | Independent origins after collapse |
|---|---|---|
| Seed is elective | CA-S2, CA-S4, CA-S12 FAQ, CA-S15, HA-S5, HA-S43, SA-S1, SA-S5 | Law (O-STATUTE) plus the administration's own statements. Independent confirmation is the law itself. |
| 60M+ accounts auto-created | HA-S5, HA-S7, HA-S8, HA-S43, MM-S18, CA-S15, TL-S61, TL-S62, SA-S1 | 1 (administration: O-TD10056 / O-TREAS-AUTOENROLL / O-WH-1007). No independent count. |
| $4.5B deposited / $1.3B seeds / $2.6B philanthropic | MM-S18, MM-S19, CA-S15, TL-S62 | 1 (O-WH-1007). CT Mirror repeats it. |
| Dell deposits complete | CA-S19, MM-S33, SA-S7 | Donor and partner only (O-INVESTAMERICA, O-DELL-1007) |
| 86% under $200k | HA-S4, CA-S11, CA-S14, TL-S54 | 1 (O-ADMIN-TAKEUP) |
| BNY/Robinhood selection | MM-S3/4/5, TL-S40/41/42/43, HA-S29, HA-S47, MM-S36 | 1 coordinated announcement (O-TREAS-BNY-0406) plus the SEC letter (O-SEC-NAL-0505) |
| Presidential trades | HA-S31, TL-S45, TL-S46, PA-S11 | 1 underlying filing (O-OGE-278T), not read at row level |
| Distribution is regressive in tax terms and progressive in the seed | CA-S18/MM-S2/HA-S26, HA-S1/CA-S21/HA-S54, HA-S14, HA-S15, TL-S21, CA-S24 | Independent analytic origins: CRS, Urban (x2 analyses), Ghilarducci, NWLC, Hamilton, Wolfers/Guardian. All are qualitative. No TPC/JCT/CBO quintile table exists. |

### 2.8 Archive status (key pages)

Archived or verified this session:
- trumpaccounts.gov (12-02 and 12-17 captures re-opened; 1,479 captures in total)
- JCT JCX-35-25 (capture 2026-08-21)
- Treasury sb0433, sb0517, sb0551, sb0642 and sb0374
- SEC no-action letter
- Robinhood Q1 exhibit, Robinhood Q2 release and customer agreement
- White House Dell (2025-12-02), launch (2026-07-06) and 70M (2026-10-07) releases
- Warren–Garcia letter
- Invest America Dell page (new capture 2026-10-11 with the final text)
- T.D. 10056 on federalregister.gov
- CRS R48910 HTML
- State Street LDA registration

New Save Page Now captures were made for: the White House 07-06 and 10-07 releases, sb0517, the Warren letter, the Invest America Dell page, the LDA registration and T.D. 10056.

Not archived or not checked: the OGE 278-T PDF, the Commonwealth page (403), and the news and think-tank pages (low change risk).

---

## 3. Contrary evidence

The audit cuts against both the critics' and the administration's framing:
- **Against critic framing:**
  - Auto account opening was statutorily authorized from the start (530A(b)(2)(C)(i)).
  - The delay has a documented legal-operational reason: protecting return information (SA-S1).
  - The State Street default is consistent with SPYM's low cost, as Treasury's release states.
  - Several "conflicts" the modules flagged turn out to be timing or rounding issues: $118K vs $117,300, $2.6B vs completion, and rollover now vs later.
- **Against administration framing:**
  - The rule's own analysis expects only about 50% enrollment under opt-in. Its own release benchmarks the 86% figure below the CTC population.
  - The seed cannot be made automatic by the Secretary.
  - "No cost" contradicts JCT's gross cost.
- **Cuts both ways:**
  - The State Street lobbying engagement began earlier than reported (04-21). That strengthens the sequence observation, but timing is still not evidence of influence.
  - Robinhood says Treasury itself chose it under the statutory criteria. That ties the choice more closely to Treasury, but the record of how the criteria were applied is still missing.
- **No item audited supports a finding of wrongdoing.** The trade items remain allegation-framed questions resting on one unread primary filing.

---

## 4. Confidence and limitations

- **Overall confidence: medium-high.**
  - High for the mechanics and the "automatic" resolution (statute and rule text read directly).
  - High for the operator and lobbying facts (primary documents re-read and archived).
  - Medium for deposit totals and Dell completion (administration, donor and partner only).
  - Medium-low for the presidential-trade items (one primary filing, not read at row level).
- **Not personally re-read:**
  - The JCT figures (PDF undecodable; DNS failure). Wave 1 read them twice; secondary totals match.
  - The OGE 278-T rows.
  - The Robinhood customer agreement text (archived; relied on MM's grep).
  - The Altimeter 13F data, NYT, POLITICO Pro and Forbes (paywalled).
  - The Commonwealth page directly (403; read via search content).
- **T.D. 10056:** the full text (162K characters) was retrieved, but only targeted passages were read: auto-enrollment, sec. 6434, the good-cause statement, the economic analysis, sec. 170 and the expiry date. The rest was not read.
- **Origin IDs:** module-specific origin labels were replaced with a single shared set to collapse cross-module repeats. Earlier labels are recoverable from version history, and a pre-edit copy was kept in the session scratchpad.
- **Ordering:** the countercase-analyst ran in parallel, and this audit did not read its output.

---

## 5. Next best research action

Download the primary OGE Form 278-T signed 2026-05-08 (SA-S6; the OGE URL cited in HA-S31) from a network that can fetch the 113-page scan. Read rows 170, 1028, 1196, 1980 and 2070, and the 2026-02-10 Dell rows. That would move the presidential BNY, Robinhood and Dell purchase items from "reported" to primary-verified, or correct them, and record the exact brackets and notification flags. They are the highest-risk items that could reach the executive finding, and they currently rest on a single relayed origin.
