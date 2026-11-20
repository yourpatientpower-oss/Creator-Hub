# Money Mapper — GD-20261120-deutsche-bank-italy

Module owner: money-mapper. Claims covered: C4, C5, C6, C8, C11, C13, plus C17/C18 (added on coordinator request, 2026-11-20). Accessed 2026-11-20.

Tool note: the Nimble Web Search Agent was unavailable (billing error), so this module used Nimble Search and Extract plus WebSearch. Direct PDF downloads from `country.db.com` and `dl.bourse.lu` were blocked by the network proxy, and the Nimble extract of DB S.p.A.'s 2023 statements returned "page not found". Where a primary document was seen only as a search-result excerpt, its ledger row says so.

## 1. Question investigated
What documented financial relationships and incentives connect (a) Deutsche Bank AG (DB AG) and its Italian subsidiary Deutsche Bank S.p.A. (DB S.p.A.) in the hidden-loss matter; (b) Deutsche Bank and Jeffrey Epstein; (c) Deutsche Bank and Donald Trump or his companies; and (d) Paolo Zampolli or his entities and Deutsche Bank? Who benefits from each claim being believed?

### Legal entities (relevant only)
| Entity | Role | Note |
|---|---|---|
| Deutsche Bank AG (Frankfurt; XETRA DBK / NYSE DB; SEC CIK 1159508) | Parent; capital provider to DB S.p.A.; lender to Trump Org. (Private Wealth Management); party to NYDFS 2020 order | S45, S47 |
| Deutsche Bank AG New York Branch; Deutsche Bank Trust Company Americas | Respondents in the NYDFS 2020 consent order (Epstein, Danske Estonia, FBME) | S47, S48 |
| Deutsche Bank S.p.A. (Milan) | Italian subsidiary at the centre of C1–C6 | S44 |
| KPMG (Italy) | Auditor of DB S.p.A. during the period; reported to have later said no restatement was needed | S41, S42 |
| DT Marks Baku LLC; THC Baku Services LLC | Trump-owned licensing companies. Per the leak reporting, they were the subject of flagged transactions and were **not DB customers** | S53 |
| ID Model Management; Paramount Realty Group of America Corp. (Zampolli) | Zampolli entities. **Not** the NYSE-listed REIT Paramount Group, Inc. (PGRE), which is unrelated | S61 |

Officers are named only where reporting ties them to C6. Per S40/S42, Flavio Valeri (head of DB S.p.A. for 12 years), Carmine Di Martino (then CFO) and Mario Cincotto (then head of private banking) were among five employees who received a collective written warning. S42 (paraphrase) says the three were cleared of personal charges but cited for failings in their managerial duties. All declined to comment.

## 2. Findings

### 2a. Money-flow table
| From | To | Mechanism | Amount / basis | Category | Source |
|---|---|---|---|---|---|
| DB AG | DB S.p.A. | Capital contributions ("versamenti") | €400m (2018, two payments) + €250m (2019) + €150m (2020) + €200m (2021) = €1,000m. Stated purpose: regulatory capital support and lending growth | documented (primary filing, seen as excerpt) | S44 (also reported in S40, S41) |
| DB S.p.A. | DB AG treasury | Internal funding costs underpaid, later waived by the parent | €235m | documented-from-leak (reported; leak not public) | S40, S41, S42 |
| DB S.p.A. (Italian unit) | — (economic loss) | Losses reported to the ECB in 2020 | €522m crystallised; €779m "potential total loss" including unrealised | documented-from-leak (reported) | S40, S41, S5 |
| DB S.p.A. internal reserve ("tesoretto") | DB S.p.A. P&L | Generic risk reserve built from adjusted loan-loss provisions, released to meet profit targets in 2011, 2014 and 2016 | Amount not disclosed | documented-from-leak (allegation per Project Aetos report) | S40, S41, S42 |
| DB S.p.A. | Derivative counterparties | Derivative positions with "no economic rationale" (paraphrase of Aetos finding) | €900m notional | documented-from-leak | S41, S42 |
| DB (Italy) | Departing senior managers | Severance on non-renewal of contracts (2020) | "Seven-figure" payouts (S40); about €8.1m total (S42) | documented-from-leak | S40, S42 |
| Departing managers | DB (not exercised) | Deferred compensation clawback / malus | €5.25m not reclaimed | documented-from-leak | S40, S41, S42 |
| DB group framework | All MRTs/board | Malus and clawback rules: deferred pay can be forfeited for misconduct, negative contributions or failed performance conditions | Policy; no amounts | disclosed (primary policy) | S46 |
| Epstein | DB Wealth Management | Client revenue 2015–2018 | About $1m a year (vs $2–4m a year anticipated) | documented-from-leak | S50 |
| Epstein accounts (at DB) | Third parties | Settlement payments; law-firm payments; cash withdrawals; payments to women and alleged co-conspirators | >$7m settlements; >$6m legal fees; >$800k cash over about 4 years | documented (regulator finding) | S47, S48 |
| DB | NYDFS | Civil penalty (covers Epstein, Danske Estonia and FBME together; not allocated) | $150m (July 2020) | documented (government record) | S47, S48 |
| DB | Epstein victims class (SDNY, Jane Doe 1 v. Deutsche Bank, Judge Rakoff) | Settlement, no admission of wrongdoing; 30% fees to class counsel | $75m (final approval 20 Oct 2023) | documented (court-approved; seen via news) | S49 |
| Epstein-linked transactions | Flagged by DB | 21 SARs filed with US authorities in 2019 covering about 3,200 transactions | About $582m (vs about $250m in Wyden's August 2026 figure, partly because DB's review included checks and other-bank transactions) | documented-from-leak | S50, S51, S1, S2 |
| DB (Private Wealth Mgmt) | Trump Org. entities | Loans with Trump's personal guarantee: Doral ($125m, 2011), Chicago ($107m, 2012), Old Post Office (about $170m) | About $340m outstanding by Jan 2021 | documented (court record and testimony) | S55, S56, S2 |
| Trump Org. | DB | Repayment and refinancing (Doral refinanced by Axos, May 2022; OPO retired) | $295m repaid by May 2022; $45m (Chicago) left; all DB loans since paid off (per CNN, Nov 2023) | documented (NYAG filing via news) | S57, S58 |
| Trump Org. | DB (benefit to borrower) | Interest saved through personally guaranteed pricing (NYAG expert estimate, contested at trial) | About $168m across 4 properties, including $72.9m Doral | disclosed (trial testimony; contested) | S62 |
| Third parties (incl. Laundromat-linked entities) | DT Marks Baku LLC / THC Baku Services LLC | Transactions flagged in DB SARs; memo of May 2020 ("Trump/Kushner") counted 59 SARs on 140 entities | >$3m. Trump not named as suspect; neither company a DB customer | documented-from-leak (single memo, relayed) | S53, S6, S2 |
| Zampolli / ID Model Mgmt / Paramount Realty Group of America | Deutsche Bank | Any account, loan or flagged flow | **No documented relationship found** | unknown / none found | negative searches (see 2e) |
| Zampolli (100% owner per S63; "one of the shareholders" per his own statement in S64) | Borgonuovo 2000 Srl (Milan, Brera; on Registro Imprese since 2011) | Equity ownership of a property-rental company holding a residential building | Building valued at >€11m; 2023 revenue about €410k from rents (as reported) | disclosed (press review of registry and notarial records) | S63, S64 |
| Borgonuovo 2000 Srl | Buyers (private individuals, not named here) | Sale of an apartment and garages (May 2024) | Price not reported | disclosed (press, citing notarial records) | S63 |
| Borgonuovo 2000 Srl / Zampolli Milan property | DB S.p.A. or DB AG | Mortgage, loan, account or counterparty | **No documented relationship found** | unknown / none found | negative searches (see 2g) |
| Epstein | Zampolli venture | Joint 2004 bid for Elite Model Management (unsuccessful) | Amount not reported | disclosed (secondary reporting) | S59, S4 |
| Zampolli | TerraMar Project (Maxwell) | Listed as partner | No money flow documented | disclosed (secondary) | S59, S4 |

"Documented-from-leak" means a figure reported by consortium outlets from leaked internal documents that are not public and have not been independently checked by this case. Treat these figures as reported, not verified.

### 2b. DB AG ↔ DB S.p.A. (C4, C5, C6)
- **C5 is supported by a primary filing.** A DB S.p.A. financial statement for FY2021, hosted on the Luxembourg Stock Exchange and seen as an excerpt, lists contributions of €400m (2018), €250m (2019), €150m (2020) and €200m (2021): €1,000m in total (S44). That matches the FT's "€1bn between 2018 and 2023 per the 2023 accounts" (S40). The filing reaches €1bn by 2021. It describes the money as regulatory-capital support for lending growth and does not mention losses. The same excerpt reports FY2021 profit of €36.3m (S44).
- **C4 (the €522m and €779m figures) depends only on the leak** (S40, S41, S5). No public ECB, Banca d'Italia or DB document found here confirms them. ECB supervisory chair Claudia Buch said only that new facts would be assessed (paraphrase, S43).
- **C6** is reported consistently across outlets from one origin (O-FT-ITALY): no dismissals, a collective written warning, about €8.1m in severance, and €5.25m of deferred pay not clawed back (S40–S42). S42 (paraphrase) gives the bank's reasoning as reported: no deliberate misconduct or collusion was found, and Italian labour law makes dismissal for cause hard. DB's published framework allows malus for misconduct or negative contributions (S46). Not applying it was therefore a discretionary choice, as reported. It was not a gap in the policy.
- **Scale versus the group.** DB's group profit before tax was €5.7bn in 2023 (S45). The bank says the matter was not material at group level (S3, S41). *Inference:* a €522m hit spread over many years is plausibly below group materiality in any single year. This supports the bank's non-disclosure position on materiality grounds only. It says nothing about local-entity accounting accuracy.

### 2c. DB ↔ Epstein (C8)
- Regulator findings (S47): the $150m penalty, the payment categories and the cash withdrawals are documented. The Epstein relationship ran 2013–2018 (S49). The $75m victim settlement is court-approved with no admission of wrongdoing (S49).
- The leak adds the $582m in flagged transactions, the 21 SARs and 3,200 transactions, and about $1m a year in revenue (S50, S51). These are new figures relayed by the consortium and not independently checked. A 2025 House Judiciary Democrats letter to DB's CEO said DB memos emphasised the relationship's expected profitability (S52, partisan source).

### 2d. DB ↔ Trump (C11)
- The loan relationship is documented in court records and testimony (S55, S56). About $340m was outstanding in January 2021 (S2). It was largely unwound in 2022 (S57) and fully repaid per CNN (S58).
- The SAR material (59 SARs, 140 entities, >$3m involving two Baku companies) comes from one internal memo relayed by Financial Mail and others (S53, S6). Per that reporting, Trump was not named a suspect and the Baku companies were not DB customers. Flagged transactions are not findings of wrongdoing.

### 2e. Zampolli ↔ Deutsche Bank (C12, C13)
- **No documented financial relationship found** between Zampolli, ID Model Management or Paramount Realty Group of America and Deutsche Bank, DB S.p.A. or the leak. Searches that returned nothing relevant: Nimble "Paolo Zampolli Deutsche Bank"; Nimble "Zampolli Inside Deutsche Bank" (past month); WebSearch `Zampolli "Deutsche Bank"`; and Nimble restricted to `democrats-judiciary.house.gov` (the HJC report excerpts mention Zampolli and, separately, DB's Epstein SARs, with no link between the two). The NYDFS press release (S47) does not name him.
- **Disambiguation risk:** "Paramount Group" can be confused with Paramount Group, Inc. (NYSE: PGRE), a large office REIT. Zampolli's firm is Paramount Realty Group of America Corp. (S61). Any DB–PGRE financing must not be attributed to Zampolli.
- Also avoid conflation with secondary posts that mention DB transfers to MC2 (Jean-Luc Brunel's agency). MC2 is not a Zampolli entity.
- **C13:** the Epstein–Zampolli business ties (the 2004 Elite bid and the TerraMar partner listing) are reported in secondary sources (S59, S4). No money amounts are documented. These ties do not involve Deutsche Bank.

### 2f. Who benefits from each claim being believed
| Claim | Benefits if believed | Benefits if disbelieved / minimised |
|---|---|---|
| C4/C5 (large hidden loss, €1bn capital) | Consortium outlets (story value); potential litigants; short sellers (inference) | DB AG and former Italian management. The bank's "not material / no restatement" framing (C7) and the "competence not malice" framing (S42) limit regulatory and reputational exposure |
| C6 (no firing, severance, no clawback) | Critics of bank governance; supervisors seeking leverage (inference) | Departing executives, who kept about €8.1m severance and €5.25m deferred pay (as reported) |
| C8 ($582m flagged) | Victims' counsel; congressional Democrats pressing "follow the money" (S52) | DB ("historical"); Epstein associates named as payors (inference) |
| C11 (Trump SARs/Baku) | Trump's political opponents | Trump, whose position is supported by "not named as suspect" and "not DB customers" (S53) |
| C12/C15/C18 (Zampolli, or Zampolli's Milan property, tied to DB or the Italy loss) | Engagement-driven commentary that merges separate strands (inference). **No documented financial beneficiary found** | — |

### 2g. C17 / C18: Zampolli's Milan ties and Deutsche Bank
- **C17 is partly supported, with corrections.**
  - *Documented Milan ties:* Zampolli was born in Milan in 1970. His family company Harbert distributed Hasbro toys in Italy and was sold after his father's death in 1988 (S65, S66).
  - *Documented Milan real estate:* he owns Borgonuovo 2000 Srl, a Milan property-rental company that holds a residential building in Brera. Per Open's review of registry and notarial documents (S63): the company has been on the Registro Imprese since 2011, Zampolli owns 100%, the building is valued at over €11m, and 2023 revenue was about €410k. He resigned as sole director on 31 Mar 2025. In January 2026 he told MF-Milano Finanza he is "one of the shareholders" (paraphrase; S64), which differs slightly from the 100% figure. MF also reports (paraphrase) that he keeps a residence in the building.
  - *Modeling agency in Milan: not documented.* All sources place his agency, ID Model Management, in New York (S65, S66, S4). S66 says only that he is remembered in Milan's modeling-agency scene (paraphrase). That is not evidence of a Milan agency entity.
  - Out of scope and not pursued: a defamation complaint he reportedly filed in Milan, and the street address and buyers' names in S63.
- **C18: no documented relationship found** between Zampolli, Borgonuovo 2000 Srl, Harbert or any Zampolli Milan property and DB S.p.A. or DB AG (no account, mortgage, loan, guarantee or counterparty link). Searches run:
  - Nimble IT: "Zampolli Deutsche Bank Italia mutuo prestito conto"
  - Nimble IT: "Borgonuovo 2000 Zampolli ipoteca mutuo banca Deutsche Bank"
  - Nimble IT: Zampolli Milan property / company registry
  - WebSearch: `"Borgonuovo 2000" Zampolli`
  - None returned a lender name for Borgonuovo 2000 Srl. No reporting by the consortium's Italian partner (IrpiMedia, per S43) or by FT Italy-unit coverage (S40–S43) names Zampolli.
  - **Geography is not evidence:** DB S.p.A.'s Milan headquarters and Zampolli's Milan property share a city and nothing more on the record.
- *Limitation:* the identity of any mortgagee on the Borgonuovo building would appear only in the Agenzia delle Entrate property-lien register (ispezione ipotecaria) or, as unnamed bank debt, in the company's filed bilancio. Neither was accessed here: both are paid services and outside this module's tools. Absence of evidence in press and search results does not prove no relationship exists.

## 3. Contrary evidence
- DB says all relevant transactions were correctly reflected in its accounts, the auditor found no restatement necessary, supervisors were informed, and the matter was not material at group level (S3, S41, S43).
- The primary DB S.p.A. filing frames the €1bn as growth and regulatory-capital support, not loss absorption (S44). Treating the injections as covering the hidden losses is an **inference**, not documented.
- Per S42 (paraphrase), the internal Aetos investigators attributed the problem to inadequate competence rather than malice. That is evidence against intentional concealment.
- Per S53, Trump was not named as a suspect, and the Baku companies were not DB customers. SARs are not findings of wrongdoing (S1 notes this for the Epstein flows).
- The NYAG interest-savings estimate (S62) was contested by DB witnesses who said the bank was not misled (S58). This module did not check the later appellate history of that case.

## 4. Confidence and limitations
- **Medium-high:** C17 Milan property (S63, one investigative outlet citing registry documents, partly corroborated by Zampolli's own statement in S64). **Low evidentiary basis for C18:** nothing found, and lien and registry records were not checked.
- **High:** NYDFS penalty and findings (S47); $75m settlement (S49); Trump loan sizes and repayment (S55–S58); DB AG → DB S.p.A. €1bn by year (S44, primary but seen as an excerpt only); absence of any found Zampolli–DB link (bounded by the searches listed).
- **Medium:** C4, C6, C8 figures and C11. All come from leaked documents relayed by consortium outlets from one origin per strand (O-FT-ITALY, O-FT-LEAK, O-LEAK-CONSORTIUM). They are consistent across outlets but unverified.
- **Unknown:** whether Italian management's variable pay was tied to the legal-entity profit targets reportedly met via the tesoretto (2011, 2014, 2016). If it was, that would be the key incentive. It is not documented here. Also unknown: the tesoretto amount; DB S.p.A. net results for 2018–2020; whether the €235m waiver and the €1bn appear as linked items in the DB S.p.A. accounts.
- **Access limits:** FT, Il Messaggero and Bloomberg are paywalled (snippets only). DB S.p.A. PDFs were not downloadable from here. The leaked files are not public.

## 5. Next best research action
Obtain and read the full DB S.p.A. annual financial statements for FY2018–FY2020 (bilancio d'esercizio, especially the Relazione sulla gestione and the notes on provisions, hedge accounting and capital contributions) from `country.db.com/italia` or the Registro Imprese. Check whether they disclose the prepayment-hedge losses, prior-period adjustments, the €235m funding-cost waiver, and any link between variable pay and legal-entity profit targets.

Secondary next action (C18): obtain the Borgonuovo 2000 Srl filed financial statements (Registro Imprese) and an ispezione ipotecaria on the Brera building to identify any mortgagee. Only a named lender of record would support or refute C18.
