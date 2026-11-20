# Source Auditor — GD-20261120-deutsche-bank-italy

Module owner: source-auditor (Wave 3). Prepared 2026-11-20. Inputs: `case.md` (C1-C23), `sources.md`, and every module file (claim-auditor, money-mapper, timeline-analyst, harm-accountability-analyst, pattern-analyst, countercase-analyst).

**What I did.** I re-opened 21 cited pages with Nimble Extract (full page text, not search snippets). Two of them were primary PDFs that I decoded and searched locally: the DB S.p.A. FY2022 statements (S17) and the House Judiciary Democrats' staff report (S97). I ran 3 Nimble Search queries and about 20 Wayback availability or Save Page Now requests through Nimble Extract. Direct `curl` to archive.org was blocked by the proxy (403).
- **Could not re-open:** S5 (Investing.com, HTTP 403); S38 and S42 (timed out); the FT original S8/S40/S70/S106 (paywalled).
- **Dead links:** DB S.p.A. FY2018, FY2023 and FY2024 PDFs ("Page not found"; S251). There is no Wayback copy of the FY2023 PDF.
- **Not accessed:** the leaked documents (not public), so no leak-derived figure can be checked against its underlying document.

---

## 1. Question investigated

Does each major conclusion in the modules rest on a source that exists and supports the **exact** statement, with the right date and context? How many **independent origins** stand behind each conclusion? Which conclusions should be kept, downgraded or removed?

## 2. Findings

### 2a. Audit table

"Origins" counts independent origins. Relays of one FT story or one consortium story count as one. "Subject" = DB's own statement or filing.

| Conclusion (module) | Source IDs | Exists | Supports exact claim | Date/context OK | Primary? | Independent origins | Verdict (keep/downgrade/remove) |
|---|---|---|---|---|---|---|---|
| **C1** "concealed losses of up to ~€800m" (case.md brief; claim-auditor C1; timeline) | S8/S70, S3, S9, S10, S108 | Yes (S8 paywalled) | **Partly.** "Up to €800m" is the FT/relay headline. The underlying figures are €522m crystallised plus €257m unrealised mark-to-market = €779m potential, plus €18m tax (S108, re-read in full). The €522m was reported to the ECB in 2020 (S10). | Conduct ~2008-2018, reported 19 Nov 2026 | No (FT reading of non-public leak) | 1 (O-FT-ITALY) | **Downgrade wording.** Use "FT reports, from leaked documents, €522m crystallised and €779m potential losses, reported to the ECB in 2020 but not disclosed publicly". "Concealed" applies to public disclosure only. |
| **C4** €522m crystallised / €779m potential, told to ECB 2020 (claim-auditor, money-mapper, harm, timeline) | S108, S10, S11 | Yes | Yes (S108, S10, S11 full text) | Yes | No | 1 (O-FT-ITALY) | **Keep**, labelled as reported, single origin and unverified. No ECB or DB confirmation exists. |
| **C5** ~€1bn DB AG capital, "2018-2023" (timeline, harm) vs "2018-2021" (claim-auditor, money-mapper, countercase) | S17, S44, S8, S108, S11 | Yes | **Amount yes; date range differs by source.** S17 (FY2022 filing, re-read in full) lists €210m (27 Mar 2018), €190m (13 Nov 2018), €250m (4 Apr 2019), €150m (2020) and €200m (2021) = €1.0bn. There is no 2022 contribution. FT and relays say "2018-2023 per 2023 accounts". The FY2023 PDF is now a dead link (S251), so any 2023 contribution is unverified. | Filing dates verified | S17 yes (subject filing) | 2 (O-DBSPA-AR2022 subject filing; O-FT-ITALY) | **Keep the amount.** **Downgrade "2018-2023"** to "€1.0bn contributed 2018-2021 per DB S.p.A. filings (FT says 2018-2023, citing the 2023 accounts)". |
| C5 causal link: injections covered the hidden losses (harm 2a "documented harm"; money-mapper 2f) | S17, S8 | Yes | **No.** S17 states other purposes for 2018: offsetting the IFRS 9 transition effect (€196.7m) and offsetting a €168.2m loss on early termination of intra-group deposits. The FT puts the injection *next to* the losses. It does not show that the money covered them. | — | S17 yes | 1 per side | **Downgrade.** Label it "intra-group support", not "documented harm". The link to the losses is an inference. |
| Money-mapper 2b: filing calls the €1bn "regulatory-capital support for lending growth" | S44 | Excerpt only (PDF blocked) | **Conflicts with S17**, which I read in full | — | Yes (subject) | — | **Downgrade.** Prefer S17. |
| **C6a** "no one was fired" | S10, S108 | Yes | Yes. "Nessuno ... licenziato" (S10). "Nessun dipendente è stato licenziato per giusta causa" (S108). | The CEO and CFO left in 2020 and a third executive in 2021 (S10, S73) | No | 1 | **Keep, with the nuance** that senior managers left, though none was dismissed for cause. |
| **C6b** ~€8.1m severance | S10, S108, S42 | Yes (S42 not re-opened) | **Wording conflict.** S10 says severance of about €8.1m was "previste" (planned) for some departing managers. S108 says the bank "paid" €8.1m in 2020. | 2020 | No | 1 | **Downgrade** to "about €8.1m of severance reportedly agreed for departing Italian managers (2020)". Do not say "paid" as fact. |
| **C6c** €5.25m deferred pay not clawed back | S10, S108 | Yes | Yes | — | No | 1 | **Keep** (reported, single origin). |
| Money-mapper: not applying malus was "a discretionary choice ... not a gap in the policy" | S46 | Not re-opened | S46 is the DB AG 2022 Compensation Report. It does not show the rules that applied to DB S.p.A. staff in 2020. | Date mismatch | Yes (subject) | — | **Downgrade** to "appears discretionary under the group framework; applicability to DB S.p.A. in 2020 not verified". |
| **C2** tesoretto from adjusted provisions, used for 2011/2014/2016 targets | S108, S10, S11 | Yes | Yes | Yes | No | 1 | **Keep** (single origin; DB does not address it). |
| **C3** 2018 trigger and Project Aetos; findings not made public | S3, S9, S10 | Yes | Yes. Corriere (S10) says a DB S.p.A. supervisory-board member's intervention preceded Aetos. Relays call this an "internal whistleblower report". | 2018 | No | 1 | **Keep.** Treat "whistleblower" and "board-member intervention" as possibly the same trigger. Unresolved. |
| Claim-auditor C1/C3: "Il Fatto dates conduct 2008-2016" | S12/S108 | Yes | **No.** The Il Fatto text says only that the matters "date back to 2008" (relaying DB's statement) and names target years 2011/2014/2016. It gives no 2008-2016 range. | — | — | — | **Remove** this attribution. |
| **C7** DB statement: funding-assumption reassessment; corrections; supervisors informed; external auditor saw no need to restate; not material at group level | S3, S9/S72/S107, S16 | Yes | **Yes, verbatim** (S3 Italian; S9 English). Three caveats. (i) DB says "the Bank's external auditor" and **does not name KPMG**. (ii) S3's headline "Nessuna irregolarità" is the outlet's framing and does not appear in DB's text. (iii) ANSA's lead loosens "Group's financial statements" into "the subsidiary's balance sheets". | 19 Nov 2026 | Primary statement by subject | Subject only | **Keep** that the statement was made. **Remove** any quote attributing "no irregularity" to DB. |
| **C7/C20** auditor no-restatement conclusion (harm 2a: "KPMG ... rests on DB's statement") | S3, S107, S108, S11, S206, S250, S17 | Yes | **Rests on two non-independent strands.** (a) DB's own statement, which names no auditor. (b) FT leak reporting that KPMG missed the tesoretto and later advised no restatement (relayed by S108, S11, Forbes.it). No auditor statement, auditor's report or filing confirms it. KPMG was DB AG group auditor up to FY2019 (S206, S250), and Mazars has audited DB S.p.A. from FY2019 (S17). Who audited DB S.p.A. before FY2019 is not verified: the FY2018 PDF is dead. | — | No independent primary | Subject + 1 (O-FT-ITALY) | **Downgrade.** Write "DB says its external auditor concluded no restatement was needed; the FT reports this was KPMG". Correct harm 2a, which wrongly says the KPMG attribution rests on DB's statement. |
| **C19** Aetos found negligence or incompetence, not intentional fraud or collusion | S10, S11, S15 | Yes | **Yes as attributed.** S10: "L'istituto aveva concluso ... di non aver individuato comportamenti intenzionalmente fraudolenti o collusivi, pur riconoscendo possibili responsabilità per negligenza o incompetenza". S11 applies "no deliberate choice, serious lack of skills" to the *origin of the losses* (the prepayment-hedging failure). | 2018-2020 probe | No (FT reading of the bank's internal report) | 1, and it is the subject's own internal conclusion | **Keep, attributed:** "per the bank's internal probe, as reported by the FT". It is not an independent finding of no fraud. It sits in tension with the FT's account of provisions being deliberately "manipolati" (C2). Keep both visible. |
| C21 ECB's Buch: new facts will be assessed | S16, S33 | Not re-opened | — | — | — | 1 | **Keep as reported** (not re-verified by this module). |
| C22 S17 records €1.0bn 2018-2021 with stated purposes, no Aetos mention | S17 | Yes | Yes (Notes 12.3/12.4 re-read) | Yes | Yes (subject) | 1 (subject) | **Keep** (high). |
| €235m internal funding costs waived (money-mapper, harm) | S40, S41, Forbes.it excerpt | Yes (search text) | Yes as reported | — | No | 1 | **Keep** (reported). It is intra-group, not external harm. |
| **C8** ~$582m Epstein-linked flagged: 21 SARs, ~3,000 transactions, Oct 2013-May 2019 | S1, S86/S128, S50/S19, S21 | Yes | Yes. S86 (re-read in full): "21 suspicious activity reports ... 3,000 transactions between October 2013 and May 2019 ... US$581.9 million". S1 has $582m. | **S86 was published 19 Nov 2026, not 17 Nov** as the ledger says | No (leak) | 1 leak origin (FT and consortium outlets share the same files) | **Keep**, as reported from the leak. Keep the transaction-count variants (3,000 / 3,135 / 3,200) visible. |
| Prior public figure ~$250m (Wyden) | S86, S103 | Yes | Yes. Wyden is quoted saying DB failed to promptly report "more than US$250 million" (S86). | Aug 2026 | S103 partisan minority report | 1 | **Keep.** It is a partisan report, not a finding. |
| **NYDFS** $150m (July 2020) | S47/S83/S131, S101 | Yes | Yes (S47 re-opened): $150m for Epstein, Danske Estonia and FBME together. "First enforcement action ... for dealings with Jeffrey Epstein." | 7 Jul 2020 | Yes (government record) | 1 (regulator) | **Keep** (high). The penalty is not allocated to Epstein alone. |
| **$75m** Epstein victims settlement (Rakoff, Oct 2023) | S84/S49/S102, S86 | Yes (CNN not re-opened) | Yes. S86 independently mentions the $75m class settlement. | 2023 | No (docket not checked) | 2 (Reuters/CNN; IJB) | **Keep.** Recommend checking the SDNY docket. |
| **C9** senior sign-off on onboarding; 2015 Maxwell alert cleared; DB "acknowledges its error of onboarding Epstein in 2013" | S86, S19 | Yes | Yes (S86 re-read: monitors' 2020 report; sign-off by the AFC head and the DB America general counsel; DB statement) | Yes | Statement by subject inside news | Leak + subject statement | **Keep.** |
| **C10** Mar 2017 Trump tax-data mis-send kept from the White House; Sewing called it an "awful mistake" | S1, S87, S23 | Yes | Yes (S1 re-read). The 1,586-accounts detail rests on S23/S87 snippets only. | Mar 2017 | No | 1 (O-FT-LEAK) | **Keep** (reported). |
| **C11** May 2020 Hagerty memo: 59 SARs / 140 entities; >$3m involving DT Marks Baku and THC Baku | S22, S53, S6, S88 | Yes | Yes (S22 re-read in full). Precise wording: 59 SARs relating to 140 entities "as of the previous month". | May 2020 | No (leak) | 1 (O-LEAK-CONSORTIUM) | **Keep.** Cite S22, a full consortium text. **Downgrade S88/S89** (low-quality aggregators) and stop relying on them. |
| C11: Baku companies "not DB customers"; Trump not a SAR suspect (claim-auditor, money-mapper, pattern P4) | S22 | Yes | **Yes, but incomplete.** The memo also says the two companies were listed as **"suspects" in a 16 Jan 2020 SAR** and fell within DB's "covered client" definition (S22). | — | No | 1 | **Keep, with the added nuance.** "Not customers" must not be read as "not flagged". |
| Project Broadway began 2017 (timeline: "low-medium", via aggregators) | S89, S88, S22 | Yes | Yes. S22: "By 2017 a probe into Trump's affairs, called Project Broadway, had been launched internally". | 2017 | No | 1 | **Keep, re-sourced to S22.** Confidence can rise to medium. |
| C16 DB: matters historical; €7bn on controls 2019-2025 | S1, S18 | Yes | Yes (S1 re-read) | 17 Nov 2026 | Statement by subject | Subject | **Keep** (that the statement was made). |
| **C13** Zampolli-Epstein ties (Elite bid 2004; TerraMar; "ID Models client") | S97, S59, S4, S98 | Yes | **Partly.** The 2004 joint Elite bid is stated in the HJC report (S97, citing This is Money, 2004). TerraMar does **not** appear in the HJC report and rests only on S59/S4. I found no source for "ID Models client". Zampolli says he "never had any business dealings with Jeffrey Epstein" (S98, verbatim), which directly contradicts the Elite-bid claim. | 2004 | No | Elite bid: 2 (This is Money via HJC; S59). TerraMar: secondary only | **Downgrade.** Keep the Elite bid as reported and disputed. TerraMar should be "secondary only, unverified". **Remove** "ID Models client" unless a source is found. |
| **C14** HJC Dems report alleges Zampolli was an "active participant"; he denies it | S97/S60/S121, S24/S120, S98/S25/S122 | Yes | **Exact wording is hedged.** The current PDF (dated 6 Nov 2026) says "Zampolli appeared in many ways to be an active participant in Epstein's sex trafficking operation" and lists him among "likely co-conspirators". The press release says "may have been co-conspirators". His denial is verified verbatim. The report was revised four times (S97). I checked the current version only. | 26 Oct 2026 (revised to ~6-8 Nov) | Partisan minority staff report | 1 (O-HJC-DEMS) + denial | **Keep with the exact hedged quote and version date. Downgrade** any unhedged "alleged he was an active participant". Not a finding. |
| C14 (case.md): HJC report has no Deutsche Bank content | S97 | Yes | Yes. 0 "Deutsche" and 0 whole-word "bank" in the current version (timeline also checked the 26 Oct original). | — | — | — | **Keep.** |
| **C17** Zampolli Milan ties: property (claim-auditor: "no reliable source found"; money-mapper: "documented, medium-high") | S63, S64, S38, S36, S34/S65 | Yes | **Resolved in favour of money-mapper, with corrections.** S63 (Open; re-read in full; cites registry minutes and notarial deeds) documents Borgonuovo 2000 Srl, a Milan/Brera property-rental company. Open says it was 100% owned and he was sole director until 31 Mar 2025; it values the building at over €11m and gives 2023 revenue of ~€410k. S64 (re-read) has his own on-record confirmation: "di cui sono uno dei soci". S38 stays **not evidence**. The claim-auditor was right to reject S38 but did not have S63/S64. | Ownership share: 100% (Apr 2025) vs "one of the shareholders" (Jan 2026). It may have changed or he may be imprecise; unresolved. | S63 news citing registry documents; S64 subject statement | 2 (O-OPEN-BORGONUOVO; O-ZAMPOLLI-STMT-MF) | **Keep the property element** and upgrade the claim-auditor's C17 status to "supported". Date the ownership share. |
| C17: Milan modelling-agency business | S36, S35, S4 | Yes | **No.** Only S36 (unsourced, low reliability) claims a Milan office. Every other source places ID Models in New York. | — | — | 0 reliable | **Remove** the "Milan modelling-agency business" element. Keep "remembered in the Milan modelling scene" (S35) only as colour. |
| **C18** Zampolli's Milan interests had a DB S.p.A. relationship | S63, searches | — | **No source found.** S63 names no lender. A re-check on 2026-11-20 (Nimble: `Zampolli "Deutsche Bank"`, past week; Italian query with Zampolli + Deutsche Bank Italia + tesoretto + Borgonuovo) returned nothing linking him to DB. | — | — | 0 | **Keep "no source found"** (bounded: published reporting only; lien registry not checked). |
| **C12** Zampolli appears in the leak or the Italian matter | S31, S20, S204, S205, searches | — | **No source found** (re-checked as above) | — | — | 0 | **Keep "no source found"** (bounded; the leak is not public). |
| **C15** Italian-unit losses connected to Epstein/Trump | S14, S28, searches | — | **No source found.** S28 and S14 cover them as separate chapters (the Antimafia Duemila re-check confirms this). | — | — | 0 | **Keep "no source found"**. |
| C23 Zampolli envoy status ended 15 Oct 2026 | S26/S94/S126, S95 | Not re-opened | — | — | — | 1 | **Keep as reported** (not re-verified; context only). |
| Pattern P4 / P2 (formal findings: SEC 2015, FCA/NYDFS 2017, Fed 2023) | S150, S157, S161 | Not re-opened (snippets) | — | — | Government records seen as snippets | Independent | **Keep as reported**, at the pattern-analyst's own stated confidence. Not re-audited here. P5 and P6 ("no pattern") **keep**. |

### 2b. Origin collapse (count once)

- **O-FT-ITALY: every Italian-unit fact except S17.** That covers S3, S5, S8/S40/S70/S106, S9-S16, S41-S43, S108, S208, S210, and more than 20 outlets in all. Their agreement is **not** corroboration.
  - Beyond this single origin, the only other sources are the subject's own: DB's statement (O-DB-STMT-ITALY) and DB S.p.A.'s filing (S17).
  - So C1-C4, C6, C19 and C20 have **no corroboration** that is independent of both the leak and the subject.
- **One leak origin for Epstein/Trump.** O-FT-LEAK and O-LEAK-CONSORTIUM describe the same files, so for corroboration they count as one origin.
  - The independent records in this strand are NYDFS 2020 (S47), the 2023 settlement (S84; docket not checked) and the Wyden report (partisan; S103).
- **Same URL ledgered more than once.** The ledger notes now flag each group so it is counted once:
  - S8/S40/S70/S106; S9/S72/S107; S12/S108; S13/S41; S15/S109; S19/S50; S24/S120
  - S25/S98/S122; S26/S94/S126; S34/S65; S47/S83/S131; S48/S101; S49/S84/S102; S60/S97/S121
  - S78/S117; S79/S111; S81/S103; S82/S105; S86/S128

### 2c. Archive status (key pages)

- **New captures I created on 2026-11-20 (Save Page Now via Nimble):**
  - S3 (GdI, DB statement)
  - S12/S108 (Il Fatto)
  - S10 (Corriere)
  - S86/S128 (IJB)
  - S22 (The Wire)
  - S9/S72/S107 (ANSA)
  - S64 (MF)
- **Existing captures I recorded:**
  - S1 (CNBC, 2026-11-18)
  - S17 (FY2022 PDF, 2025-03-14)
  - S47 (NYDFS, 2026-11-16)
  - S63 (Open, 2026-05-13)
  - FT S8 (2026-11-19, probably the paywall page)
  - HJC PDF S60/S121 (copied from S97)
- **No usable capture:** Miami Herald (S25/S98). Its only capture returns status 204.
- **Paywalled:** FT, Il Messaggero, Corriere and La Stampa (metered).
- **Inaccessible:** S5 (403).
- **Dead links:** DB S.p.A. FY2018, FY2023 and FY2024 PDFs (S251).

### 2d. Corrections made to `sources.md`

I changed only the Origin ID, Independent? and Archive link columns, and appended "[Source-auditor 2026-11-20: ...]" text to Notes. No other column was changed.

- **Origin IDs normalised:**
  - S72: O-DB-STATEMENT-ITALY → O-DB-STMT-ITALY
  - S3, S9, S16, S41, S43: → "O-FT-ITALY (allegations); O-DB-STMT-ITALY (bank statement)"
  - S117: O-REUTERS-1117 → O-REUTERS-20261117
  - S102: O-REUTERS-2023-SETTLE → O-EPSTEIN-CLASS-2023 (S49 and S84 likewise)
  - S26, S126: → O-ZAMPOLLI-FIRING
  - S34, S65: → O-SOLE-20260423
  - S63: → O-OPEN-BORGONUOVO
  - S64: → O-OPEN-BORGONUOVO plus O-ZAMPOLLI-STMT-MF
  - S25, S98, S122: → O-HJC-DEMS plus O-ZAMPOLLI-DENIAL
  - S105: → O-WYDEN-2026
  - S15, S109: → added O-ECB-VUJCIC-20261119
- **Independent? clarified:**
  - S3, S9, S16, S41, S43, S72, S107: "no" for C7, because it is the subject's own statement
  - S64: the quote is the subject's own
  - S22, S86, S128: consortium partners, so independent of DB but not of the leak
  - S24, S60, S120: partisan source
  - S8: single origin for all Italian-unit detail
  - S36: "unknown"
- **Archive links filled:** S1, S3, S5 (marked "not archived"), S8, S9, S12, S17, S19, S22, S25, S40, S47, S60, S63, S64, S70, S72, S83, S86, S98, S106, S107, S108, S121, S128, S131
- **Notes added (date corrections and verification):**
  - S86: actual publication date is 19 Nov
  - S22: actual publication date is 18 Nov
  - S12/S108: author is Nicola Borzi; no 2008-2016 dating
  - S3: headline not DB's words; auditor not named
  - S10, S11, S17, S47, S63, S97: verified content
  - S38, S42: re-fetch failed
  - S44: conflicts with S17
  - Duplicate-URL flags
- **New rows:**
  - S250: SEC exhibit showing KPMG as DB AG FY2018 auditor
  - S251: DB S.p.A. reports index; FY2018/2023/2024 PDFs dead

## 3. Contrary evidence

- **S17 is the subject's own filing.** It confirms the €1bn *amount*. It also gives purposes that do not mention the losses, which weakens the FT's implied link between the injections and the losses.
- **The countercase also rests on the subject.** The "no intent" finding (C19) and the "no restatement" position (C7) both come from the bank itself, as the countercase module also notes. Neither the allegation nor the defence has independent support.
- **Zampolli's denial conflicts with documented reporting.** His blanket denial of "any business dealings" with Epstein (S98) conflicts with the 2004 Elite bid reported by This is Money and repeated in the HJC report. That conflict is unresolved and should stay visible.
- **S38 is still not evidence.** Its Brera claim overlaps with S63, but that overlap does not make S38 reliable.

## 4. Confidence and limitations

- **Overall confidence: medium-high** that the verdicts above are right for the sources I re-opened.
  - High for S3, S9, S10, S17, S22, S47, S63, S64, S86, S97, S98 and S108, which I read as full text.
  - Lower for rows I did not re-open: S21, S23, S33, S42, S46, S59, S84, S150-S161.
- **Limits of what was checked:**
  - Nothing derived from the leak can be checked against the leaked documents.
  - The FT original was not read; it is paywalled.
  - Any 2022-2023 capital contribution and DB S.p.A.'s pre-2019 auditor remain unverified, because those PDFs are dead links.
  - I checked only the current HJC PDF version.
  - I did not check the SDNY settlement docket.
- **Privacy:**
  - I did not record the street number of the Brera building, the buyers' names or the other co-owners in S63.
  - I did not search property or lien registries.

## 5. Next best research action

Retrieve DB S.p.A.'s FY2018 and FY2023 financial statements from an alternative host. Possible routes are the Registro Imprese bilancio filing, the Luxembourg Stock Exchange copy used for S44, or a Wayback capture of the old `bilanci-relazioni/` paths. From them, confirm three things:
- the auditor that signed FY2018, which tests whether KPMG audited DB S.p.A. (C20);
- whether any capital contribution was made in 2022-2023, which settles the 2018-2021 vs 2018-2023 discrepancy (C5);
- any prior-period adjustment or emphasis-of-matter wording (C7).

These are the only public primary documents that can test the auditor and capital claims independently of both the leak and DB's statement.
