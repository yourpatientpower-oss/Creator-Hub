# Grift Detective Investigation Report

**Case ID:** GD-20261120-deutsche-bank-italy
**Subject:** Deutsche Bank AG and its Italian subsidiary Deutsche Bank S.p.A.; the "Inside Deutsche Bank" leak (published 17-19 Nov 2026). Persons referenced: Jeffrey Epstein (deceased), Donald Trump, Paolo Zampolli.
**Investigation date:** 2026-11-20
**Scope / jurisdiction:** Italy, Germany, US; 2007 – 20 Nov 2026
**Question investigated:** What does the evidence show about the reported hidden losses at Deutsche Bank's Italian unit, and are there documented ties between that matter / the leak and Jeffrey Epstein, Paolo Zampolli and Donald Trump?
**Materials reviewed:** 172 ledger entries (`sources.md`). They include one primary DB S.p.A. filing (FY2022 statements, S17) read by section, the House Judiciary Democrats' staff report (S97) and the Wyden Senate minority report (S81), keyword-searched in full, the NYDFS 2020 press release (S47), Deutsche Bank's on-record statements (S3, S9/S72), and Italian, German and English press coverage of the FT and consortium reporting. Seven specialist modules in `modules/`.
**Research limitations:**
- The leaked documents are not public. No leak-derived figure could be checked against its underlying document.
- The FT originals (S8/S70/S106) are paywalled and were seen only through search excerpts and relays.
- Many sources were read as search excerpts, not full text. The source-auditor re-opened 21 key pages in full.
- DB S.p.A.'s FY2018, FY2023 and FY2024 statement PDFs are dead links (S251). The FY2011-2020 audit reports and the Project Aetos report were not obtained.
- The Nimble Web Search Agent was unavailable (account billing limit). Modules used Nimble Search/Extract and WebSearch/WebFetch instead. The proxy blocked some direct .gov and archive.org fetches.
- No property, lien or company-registry records were searched.
- All seven modules ran as separate subagents: claim-auditor, money-mapper, timeline-analyst, harm-accountability-analyst, pattern-analyst, countercase-analyst and source-auditor.

---

## 1. Executive finding

**The Italian-unit story is documented as reporting, but it has a single origin, and the strongest framing goes beyond the evidence.** Every substantive detail traces to one FT reading of leaked internal documents. More than 20 outlets relaying it count as one source.

**What the FT reports:**
- €522m of crystallised losses and €779m of potential losses (including €257m unrealised) on mortgage hedging, after a 2007 Italian law allowed penalty-free early repayment.
- A local hidden reserve, the "tesoretto", reportedly used to hit profit targets in 2011, 2014 and 2016.
- An internal probe, Project Aetos, triggered in 2018.
- Notification of the ECB in 2020, but no public disclosure.

**What Deutsche Bank says:** it does not address the reserve. It says the matter was a reassessment of funding assumptions, supervisors were informed, its external auditor saw no need to restate, and the matter was not material to the group.

**What official bodies have done:** no regulator has made any finding. **Documented:** €1.0bn of parent capital went into DB S.p.A. in 2018-2021 (primary filing), but with stated purposes that do not mention the losses.

**No documented tie between Zampolli and Deutsche Bank, the leak or the Italian matter was found. No documented tie between the Italian losses and Epstein or Trump was found either.**
- The Epstein and Trump material is real reporting from the *same leak*. It sits in separate chapters, involves different mechanisms (US wealth management, lending, SARs) and has no Italian link.
- Zampolli's Epstein-related exposure comes from a different, partisan source: the House Judiciary Democrats' staff report, which he denies. That report contains no Deutsche Bank content.
- Zampolli's documented Milan tie is a property company, Borgonuovo 2000 Srl. That is shared geography with DB S.p.A.'s headquarters, not evidence of a relationship.

**Key uncertainty:** whether the tesoretto amounted to deliberate, undisclosed earnings management or to an immaterial accounting correction. DB S.p.A.'s audited FY2016-2020 statements and the Aetos report could resolve this. Neither was obtainable.

## 2. How the operation works (as reported, not established)

1. **2007:** the Bersani reforms let Italian households prepay or switch fixed-rate mortgages without penalty (S200, S71). DB S.p.A. had hedged its mortgage book with fixed-rate derivatives sized to the original loan terms.
2. **Hedges outgrow the loans.** As rates fell and customers refinanced, the hedges no longer matched the loans. The FT reports roughly €900m of derivatives with "no economic rationale" and about €235m of unrecovered internal funding costs (S10, S41, S42; FT via relays). Prepayment modelling was standard elsewhere, but local staff reportedly did not update their assumptions (S41, S42).
3. **The reserve.** Per the FT's account of Aetos, local managers built a generic reserve by adjusting loan-loss provisions outside group rules. They reportedly drew on it to meet profit targets in 2011, 2014 and 2016 (S10, S41, S108). Milan reportedly stopped sending some loan data to the parent: €2.8bn of loans and €1.4bn of prepayments were outside central risk systems (S10, S41, S42). A 2013 whistleblower report and a 2014 internal audit reportedly went unacted on (S10, S42).
4. **2018 discovery.** A trigger, described as a whistleblower report and/or a DB S.p.A. supervisory-board member's intervention (unresolved whether these are the same), led to Project Aetos (S3, S10). The probe reportedly found failures of skill and control, **not intentional fraud or collusion** (S10, S11, S15; this is the bank's own conclusion, relayed by the FT).
5. **2020 resolution.** DB told the ECB of the €522m and €779m figures (S10, S108). The CEO and CFO of DB S.p.A. left in 2020 (S73, S74), and a third executive left in 2021. No one was dismissed for cause. About €8.1m of severance was reportedly *agreed* (S10 says "previste", planned; S108 says paid; unresolved). €5.25m of deferred pay was reportedly not clawed back (S10, S108).
6. **No public disclosure.** Neither DB AG nor DB S.p.A. disclosed Aetos publicly. DB says no group-level disclosure was required (S3, S9).

## 3. Claim audit

Status per `source-quality.md` and the source-auditor's verdicts. The "O-FT-ITALY" origin is one source, however many outlets relay it.

| ID | Claim | Evidence for | Evidence against | Status | Confidence |
|---|---|---|---|---|---|
| C1 | Italian unit concealed losses of "up to ~€800m" | FT via relays (S8/S70, S3, S10, S108) | "Up to €800m" includes €257m unrealised. The €522m was reported to the ECB, so "concealed" applies only to public disclosure. Aetos found no intent (C19). | **Partly supported, reworded:** FT reports €522m crystallised / €779m potential, told to the ECB in 2020 and not disclosed publicly | Medium |
| C2 | Hidden "tesoretto" reserve used to hit 2011/2014/2016 targets | S10, S41, S108 (single origin) | DB does not address it | **Supported as reporting** (single origin, unverified) | Medium |
| C3 | 2018 trigger led to Project Aetos; findings never published | S3, S9, S10 | Exact trigger unclear (whistleblower vs board member) | **Supported as reporting** | Medium |
| C4 | €522m crystallised / €779m potential told to ECB in 2020 | S10, S11, S108 | No ECB or DB confirmation | **Supported as reporting** (single origin) | Medium |
| C5 | ~€1bn DB AG capital into DB S.p.A. | Primary filing S17: €1.0bn in 2018-2021 (five tranches) | FT says 2018-2023; FY2023 PDF is a dead link. The filing's stated purposes are the IFRS 9 transition and a €168.2m intra-group deposit-termination loss, not Aetos. | **Amount documented (2018-2021). Link to the hidden losses is an inference.** | High (amount) / Low (link) |
| C6 | No dismissals; ~€8.1m severance; €5.25m not clawed back | S10, S108 | Severance "planned" vs "paid" conflict. Senior managers did leave. | **Partly supported:** no dismissals for cause; severance reportedly agreed; €5.25m not clawed back (reported) | Medium-low |
| C7 | DB: reassessment of funding assumptions; corrections; supervisors told; auditor saw no need to restate; not material to the group | Verbatim DB statement (S3 Italian, S9 English) | DB names no auditor. "Nessuna irregolarità" is the outlet's headline, not DB's words. | **Documented that DB said this.** Substance unverified. | High (statement made) |
| C8 | ~$582m Epstein-linked transactions flagged (21 SARs, ~3,000 transactions, Oct 2013-May 2019) | S1, S86 (consortium, full text) | Flagged ≠ criminal. Transaction counts vary (3,000/3,135/3,200). | **Supported as reporting** (leak origin) | Medium |
| C9 | Senior sign-off on Epstein onboarding (2013); Maxwell warning cleared | S86, S2; DB "acknowledges its error of onboarding Epstein in 2013" | — | **Supported** | Medium-high |
| C10 | March 2017 Trump tax-data mis-send kept from the White House | S1, S2, S78 | 1,586-account detail rests on snippets | **Supported as reporting** | Medium |
| C11 | May 2020 memo: 59 SARs / 140 entities; >$3m involving DT Marks Baku and THC Baku | S22 (consortium, full text) | The memo says the Baku firms were not DB customers and Trump was not a SAR suspect. The firms *were* listed as SAR "suspects" (16 Jan 2020). | **Supported as reporting, with that nuance** | Medium |
| C12 | Zampolli appears in the leak or the Italian matter | — | Targeted searches in English, Italian and German; HJC report (0 "Deutsche"); IrpiMedia Italy chapters; consortium name lists | **No source found** (published reporting only; the corpus is not public) | High (as to published reporting) |
| C13 | Zampolli–Epstein ties | 2004 joint Elite bid (This is Money via HJC report S97; S59). TerraMar: secondary only (S59, S4). | Zampolli says he "never had any business dealings with Jeffrey Epstein" (S98). No source for "ID Models client". | **Elite bid reported and disputed. TerraMar unverified. "ID Models client" removed.** | Medium-low |
| C14 | HJC Democrats' report: Zampolli "appeared in many ways to be an active participant" in Epstein's sex trafficking operation; listed among "likely co-conspirators" | S97 (current version, dated 6 Nov 2026; revised four times) | Partisan minority staff report, not a finding. Zampolli denies it (S98). The White House calls it untrue (S123). | **Documented as an allegation in a partisan report.** Not a finding. | High (that it was alleged) |
| C15 | Italian losses connected to Epstein/Trump | — | Separate chapters (S14, S28). Different mechanisms. | **No source found** | High |
| C16 | DB: matters are historical; €7bn spent on controls 2019-2025 | S1, S18 | — | **Documented statement** | High |
| C17 | Zampolli Milan ties: modelling agency and property | Property: Open (S63, citing registry minutes and deeds) documents Borgonuovo 2000 Srl, a Brera building valued at >€11m. Zampolli confirms he is "uno dei soci" (S64). Born in Milan; family firm Harbert (S4). | Ownership 100% (Apr 2025) vs "one of the shareholders" (Jan 2026); unresolved. **Milan agency: no reliable source.** ID Models was a New York firm. S38 is not evidence. | **Property supported. Agency element removed.** | Medium-high (property) |
| C18 | Zampolli's Milan interests had a DB S.p.A./DB AG relationship | — | S63 names no lender. Re-check on 2026-11-20 found nothing. | **No source found** (lien registry not checked) | Medium |
| C19 | Aetos found no intentional fraud or collusion; attributed the problem to negligence/incompetence | S10, S11, S15 | The bank's own internal conclusion, relayed by the FT. In tension with C2. | **Supported as attributed**, not independent | Medium-low |
| C20 | KPMG audited DB S.p.A., missed the tesoretto, later advised no restatement | FT reporting (relayed S108, S11) | DB's statement names no auditor. KPMG was DB AG group auditor until FY2019 (S206, S250). Mazars has audited DB S.p.A. since FY2019 (S17). The pre-2019 DB S.p.A. auditor is unverified. | **Downgraded:** "DB says its external auditor concluded no restatement was needed; the FT reports this was KPMG" | Low-medium |
| C21 | ECB's Buch: new facts will be assessed and measures taken | S16, S33 (as reported) | Not an action or finding | **Supported as reported** | Medium |
| C22 | DB S.p.A. filings record €1.0bn of contributions 2018-2021 with stated purposes not mentioning Aetos | S17 (full PDF, by section) | Not read cover to cover | **Supported** | High |
| C23 | Zampolli's envoy role ended 15 Oct 2026 after an internal email dispute | S26 (Politico) | He calls it the end of a time-limited appointment | **Supported** (context) | High |

## 4. Money and incentives

**Documented flows**
- DB AG → DB S.p.A.: €1.0bn of capital contributions (€210m Mar 2018, €190m Nov 2018, €250m Apr 2019, €150m 2020, €200m 2021) (S17).
- DB → NYDFS: $150m penalty, July 2020, covering Epstein, Danske Estonia and FBME together (S47).
- DB → Epstein victims: $75m class settlement, approved Oct 2023, no admission (S84, S86).
- DB → Trump: roughly $340m in loans outstanding by Jan 2021, later repaid (money-mapper; S2).

**Reported (leak, single origin)**
- €522m crystallised / €779m potential Italian losses; about €235m of internal funding costs waived (intra-group); about €8.1m of severance reportedly agreed; €5.25m of deferred pay not clawed back (S10, S41, S108).
- About $582m of Epstein-linked flagged transactions (S86); more than $3m of flagged transactions involving the two Trump Baku companies (S22).

**Disclosed relationships**
- Zampolli ↔ Borgonuovo 2000 Srl (Milan property) (S63, S64).
- Zampolli ↔ Epstein: 2004 joint Elite bid reported (S97, S59), and disputed by Zampolli (S98).

**Inferences (labelled)**
- The capital injections *may* have absorbed Aetos-related losses. The filing gives other purposes, so this is inference only.
- Profit-target pressure plausibly motivated the tesoretto. A link between local variable pay and those targets is **not documented**.
- The capital injection and the funding-cost waiver are intra-group support and net out on consolidation. The economic loss is the €522m (possibly €779m). Counting both would be double-counting.

**Unknowns**
- Any DB relationship with Zampolli or his entities: none found; lien registry not checked.
- Who signed off on the no-restatement view.
- Whether there were 2022-2023 contributions.
- How individual pay was tied to the Italian targets.

## 5. Timeline

| Date | Event or claim | Source | Significance | Confidence |
|---|---|---|---|---|
| 2004 | Zampolli and Epstein reportedly join a bid for Elite Model Management | S97 (citing This is Money), S59 | C13; disputed by Zampolli | Medium-low |
| 2007 | Bersani reforms allow penalty-free mortgage prepayment in Italy | S200, S71 | Root cause of the hedging loss | Medium |
| ~2008-2018 | Alleged tesoretto and oversized hedges at DB S.p.A. | S10, S108 (FT origin) | C1, C2 | Medium (reported) |
| 2011, 2014, 2016 | Profit targets reportedly met via the tesoretto | S10, S41 | C2 | Medium (reported) |
| 2013 | Epstein becomes a DB client; a DB S.p.A. whistleblower report reportedly not acted on | S86; S10 | C9; earlier warning signs | Medium |
| 2014 | Internal audit at DB S.p.A. reportedly not followed through | S10, S42 | Earlier warning signs | Medium-low |
| Mar 2017 | Trump tax documents mistakenly sent to a third party | S1 | C10 | Medium |
| 2017 | "Project Broadway" internal Trump review under way | S22 | C11 context | Medium |
| 2018 | Trigger at DB S.p.A. leads to Project Aetos; Epstein relationship terminated | S3, S10; S81 | C3 | Medium |
| 2018-2021 | €1.0bn DB AG capital contributions to DB S.p.A. | S17 | C5/C22 | High |
| 11 Apr 2019 | US House subpoenas to DB over Trump records | timeline module | Context | High |
| 2020 | €522m / €779m reported to the ECB | S10, S108 | C4 | Medium (reported) |
| May 2020 | "Trump/Kushner" memo: 59 SARs / 140 entities | S22 | C11 | Medium |
| 25 Jun 2020 | DB announces leadership change at DB S.p.A. (Valeri out, Parazzini in from 1 Jul) | S73, S74 | Consistent with the Aetos aftermath; the press release does not mention it | High (event) |
| 7 Jul 2020 | NYDFS $150m consent order | S47 | Formal finding (Epstein and others) | High |
| Jan 2021 | DB stops doing business with Trump | S2 | Context | Medium-high |
| 20 Oct 2023 | $75m Epstein victims settlement final | S84 | Formal resolution, no admission | High |
| 4 Aug 2026 | Wyden Senate minority report on banks and Epstein | S81 | Partisan; no Zampolli mention | High (exists) |
| Oct 2026 | DB says it notified the data-protection authority of the leak | S76 | DB's awareness of the leak | Medium |
| 15 Oct 2026 | Zampolli removed as special envoy | S26 | C23 | High |
| 26 Oct 2026 | HJC Democrats' staff report (later revised; current version dated 6 Nov) | S97 | C14; no Deutsche Bank content | High (exists) |
| 17 Nov 2026 | "Inside Deutsche Bank" published; shares fall more than 6% intraday; Klingbeil demands transparency | S1, S79, S80 | Leak | High |
| 18 Nov 2026 | Hesse data-protection commissioner opens a GDPR probe | S75 | Data-protection only | High |
| 19 Nov 2026 | FT Italy-unit story; DB statement | S8, S3, S9 | C1-C7 | High (published) |

**No date in any source shows the Zampolli and Deutsche Bank strands meeting.** The Italian strand overlaps the Epstein and Trump strands only in time (2018-2020) and in coming from the same leak.

## 6. Patterns and tactics

- **P4: keeping high-risk clients and controls despite warnings. Strong.**
  - Formal findings: the 2017 FCA/NYDFS mirror-trade penalties (S161), the NYDFS 2020 Epstein order (S47), and the Fed 2023 finding of "insufficient remedial progress" (S157).
  - Leak material: the lag in exiting Epstein and about 28,000 clients not offboarded (S1).
  - Counterevidence: the Trump/Baku item should not be counted as client retention, because the firms were not DB customers.
- **P2: losses kept out of reported numbers. Moderate.**
  - Examples: SEC 2015 gap-risk settlement, no admission (S150); the tesoretto (leak only).
  - Counterevidence: only the reserve fits this description. The core Italian loss was a modelling omission, and DB says all transactions were correctly reflected. Monte dei Paschi is a *counterexample*: DB was acquitted on appeal (2022) and in Cassation (S152-S155).
- **P1: "historical matter, controls since invested" framing. Real but ordinary.**
  - Other large banks use the same framing, so it says nothing about the conduct.
  - The narrower "told the supervisor, not the public" mechanic is weak. All instances come from the leak, and SARs are confidential by law.
- **P3: weak individual accountability.**
  - Settling without admission is standard industry practice.
  - "No dismissals, severance, no clawback" is a single Italian instance.
- **Zampolli: no pattern.** There are zero documented instances. The timing, the shared city (Milan), and shared associations with Trump and Epstein are co-occurrences, not links.

## 7. Risk matrix

| Dimension | Score / Unknown | Rationale | Counterevidence |
|---|---|---|---|
| Italian unit: earnings management via reserve | Medium (reported) | Tesoretto reportedly used in three target years (S10, S41) | Aetos found no intent (C19); DB says the group was correctly reflected |
| Italian unit: improper group non-disclosure | Unknown | No source applies a specific disclosure rule | ECB informed; plausibly immaterial vs group results (2019 net loss ~€5.3bn, S201) |
| Italian unit: customer harm | Low | No customer harm documented; borrowers refinanced lawfully | — |
| Control and governance failures (Italy) | Medium-high (reported) | Data cut-off; 2013/2014 warnings unacted on | Single origin |
| Epstein: compliance failure | High (formal) | NYDFS order (S47); $75m settlement | Settlement had no admission |
| Trump: SAR/data-handling issues | Medium (reported) | 2017 mis-send; 59 SARs | No formal finding; firms not customers; Trump not a SAR suspect |
| Zampolli ↔ Deutsche Bank link | No evidence found | No source in any module | Absence bounded to published reporting |
| Zampolli ↔ Epstein exposure | Contested allegation | Partisan staff report (S97); 2004 Elite bid reported | Denial (S98); no proceedings; opposing majority report (S124) |
| Source concentration | High | All Italy detail is O-FT-ITALY; all Epstein/Trump detail comes from one leak | Leak authenticity verified by the consortium, not contested by DB (S204) |

## 8. Harm and accountability

- **Documented harm:**
  - Italy: the €522m crystallised loss (possibly €779m), borne by DB S.p.A. and ultimately DB AG and its shareholders. This is reported; the bank's own figures are not public.
  - Epstein: victims' harm, recognised through the $75m settlement.
- **Potential harm:**
  - Investors may have lacked information about Aetos. Whether any disclosure obligation applied (IAS 8, MAR, TUF/Consob) is untested and needs qualified review.
  - Possible misstated local value-at-risk figures, per an accounting academic quoted by the FT (S106). Unverified.
- **Responses:**
  - Germany: Klingbeil demanded "full transparency" (S79). BaFin will act only on indications beyond what is already known (harm module).
  - ECB: Buch said new facts would be assessed (S16, S33). Vujčić said the ECB does not comment on individual cases (S15).
  - Data protection: Hesse's commissioner opened a GDPR probe into the leak (S75).
  - US: DOJ and FinCEN reportedly received the data, with no announcement (S2, S203).
  - The bank: the chair backed Sewing (S78).
- **Formal findings:**
  - Italy: **none.** No sanction, order, restatement or prosecution was found.
  - Epstein: NYDFS 2020 consent order ($150m, shared with Danske Estonia and FBME) (S47); $75m settlement (2023, no admission).
  - Trump: none.
  - Zampolli: none. The HJC report is a partisan staff document, not a finding.

## 9. Strongest countercase

**Italian unit.** The best-supported benign account is that this was **a model-risk and ALM failure after a lawful legal change, booked and reported to the supervisor, and immaterial at group level**:
- A 2007 consumer reform left hedges oversized.
- The €522m loss was crystallised and the ECB told in 2020.
- The probe found no intent.
- The parent's €1bn support and the unit's weak results were public.
- Under IAS 8, a change in estimates is recognised prospectively, so no restatement would be needed (S207). DB's "reassessment of funding assumptions" is the language of an estimate change.

**Where it does not fit: the tesoretto.**
- A reserve built from adjusted provisions and drawn down in three target years looks like purposeful earnings management, whatever Aetos concluded about intent.
- So do the unacted-on 2013 and 2014 warnings.
- The no-restatement sign-off may also have been a self-review, if the auditor was KPMG reviewing years it had itself audited (unresolved).

The defensible countercase is **"local earnings management and control failure, not proven to be deliberate fraud, and not shown to be improper group non-disclosure."** It is not "nothing happened".

**The connection hypothesis.**
- The benign account is strong: this is **a news-cycle and geography conflation**.
- Within about five weeks came Zampolli's firing (15 Oct), the HJC report (26 Oct), the leak (17 Nov) and the Italy story (19 Nov). He owns Milan property, and Milan is where DB S.p.A. is based.
- Nothing in the record needs any other explanation.

**Selection effects to bear in mind:**
- The leaked files come mainly from compliance and investigation departments, so they over-represent problems (S204).
- The whistleblowers may be eligible for US rewards, an incentive that bears mostly on the US strands (S203).
- The headline figure inflates as it is relayed: €522m → "€800m" → "€850m" → "nearly €1bn" (S108, S210).
- The best counter-evidence, Aetos and DB's statement, is also the bank's own material.

## 10. Conclusion

- **Established (documented):**
  - The leak exists and was published by a multi-outlet consortium.
  - DB's on-record statements.
  - DB AG's €1.0bn capital contributions to DB S.p.A. in 2018-2021.
  - The NYDFS 2020 order and the 2023 Epstein settlement.
  - That the HJC Democrats' report makes hedged allegations about Zampolli, which he denies.
  - Zampolli's Milan property company.
- **Plausible but unproven (reported from a single origin):**
  - The €522m/€779m losses and the tesoretto; the 2020 ECB notification; Aetos's no-intent finding; the severance and clawback details.
  - The $582m of Epstein-flagged transactions; the 59-SAR Trump memo; the 2017 tax-data error.
- **Contradicted or removed:**
  - "Concealed €800m" as a description of concealed losses: €257m was unrealised, and the supervisor was told.
  - "Nessuna irregolarità" as DB's words.
  - DB naming KPMG.
  - A Milan modelling agency.
  - "ID Models client."
  - The "2018-2023" injection range as a filing fact.
- **Unknown:**
  - Whether any disclosure rule was breached.
  - Who signed off on no restatement.
  - The full Aetos findings.
  - Whether Zampolli appears in the unpublished leak corpus.
  - Whether any lender relationship exists on his Milan property.
- **On the user's premise:** there is **no documented connection** between the Italian hidden-loss matter and Epstein, Trump or Zampolli, and none between Zampolli and Deutsche Bank. Epstein and Trump are linked to Deutsche Bank through separate, well-documented strands of the same leak. Zampolli is linked to Epstein and Trump through other sources. The strands meet only in the news cycle.

## 11. Next research actions

1. **DB S.p.A. audited statements FY2016-FY2020, plus FY2018 and FY2023** (Registro Imprese, the Luxembourg Stock Exchange copy, or Wayback). Look for auditor identity, IAS 8 notes, generic-reserve movements and any 2022-2023 contributions. This is the only public primary source that can test C1, C2, C5, C7 and C20 independently of the leak.
2. **The FT originals in full** (S8/S106 and the 17 Nov Epstein and Trump pieces), via a subscription. This would confirm exact wording and attribution.
3. **Banca d'Italia and Consob sanctions registers, and an ECB SSM statement or request.** These would confirm whether any supervisory measure followed.
4. **The consortium's published name index or follow-up chapters** (Spiegel, Le Monde, IrpiMedia, Paper Trail Media). This would settle whether Zampolli appears anywhere in the corpus.
5. **An ispezione ipotecaria (Italian lien-register search) on the Borgonuovo 2000 Srl Brera property.** This would identify any mortgagee. It is a public-record request for the user to decide on. Even a DB mortgage would show only an ordinary banking relationship.
6. **The SDNY docket for the 2023 Epstein settlement, and the full HJC report version history.**

## 12. Sources

The full ledger, with origin IDs, independence flags and archive links, is in `sources.md`. Key sources:

- **S1:** CNBC, 17 Nov 2026. Leak overview, Epstein $582m, 2017 Trump tax error, DB response. https://www.cnbc.com/2026/11/17/deutsche-bank-leak-epstein-trump.html
- **S2:** Al Jazeera, 18 Nov 2026. Leak explainer: Trump loans, Epstein onboarding, Russia. https://www.aljazeera.com/news/2026/11/18/what-do-deutsche-bank-leaks-reveal-about-trump-epstein-and-russia
- **S3:** Il Giornale d'Italia, 19 Nov 2026. Italian-unit allegations plus DB's full Italian statement. https://www.ilgiornaleditalia.it/news/cronaca/838881/inchiesta-deutsche-bank-filiale-italiana-ha-occultato-perdite-per-800mln-ma-la-banca-al-gdi-nessuna-irregolarita.html
- **S8/S106:** Financial Times, 19 Nov 2026. Original Italian-unit story (paywalled; seen via excerpts). https://www.ft.com/content/06be5c7d-b1f2-44e9-9cad-a2dcb5a2f452
- **S10:** Corriere della Sera, 19 Nov 2026. Detailed relay: Aetos, no-intent finding, severance "previste". https://www.corriere.it/economia/finanza/26_novembre_19/deutsche-bank-italia-il-tesoretto-segreto-per-nascondere-perdite-fino-a-800-milioni-l-inchiesta-del-financial-times-3974a2b4-899c-4019-b333-897428231xlk.shtml
- **S17:** DB S.p.A., Relazioni e Bilanci 2022 (primary filing). €1.0bn contributions 2018-2021 and stated purposes. https://country.db.com/italia/documents/2023/05/BilancioDBSpaVentidue.pdf
- **S22:** The Wire / Financial Mail (consortium), 18 Nov 2026. May 2020 "Trump/Kushner" memo: 59 SARs, Baku firms. https://thewire.in/world/deutsche-bank-documents-connect-trump-owned-companies-to-laundromat-schemes
- **S41:** MF-Milano Finanza, 19 Nov 2026. Tesoretto mechanics, data cut-off. https://www.milanofinanza.it/news/inside-deutsche-bank-la-filiale-italiana-ha-nascosto-fino-a-800-milioni-di-perdite-sui-mutui-202611190917562014
- **S47:** NYDFS, 7 Jul 2020. $150m penalty (Epstein, Danske Estonia, FBME). https://dfs.ny.gov/reports_and_publications/press_releases/pr202007071
- **S63:** Open, 11 Apr 2025. Zampolli and Borgonuovo 2000 Srl (Milan property). https://www.open.online/2025/04/11/paolo-zampolli-inviato-trump-dimissioni-societa-immobiliare/
- **S64:** MF-Milano Finanza, 5 Jan 2026. Zampolli on-record as "uno dei soci". https://www.milanofinanza.it/news/zampolli-l-ambasciatore-amico-di-trump-che-porta-affari-all-america-202601051948516940
- **S84:** CNN/Reuters, 20 Oct 2023. $75m Epstein victims settlement. https://cnn.com/2023/10/20/business/deutsche-bank-settlement-epstein-accusers
- **S86:** Investigative Journalism Bureau (U. Toronto, consortium), 19 Nov 2026. 21 SARs / $581.9m Epstein. https://ijb.utoronto.ca/news/deutsche-bank-epstein-suspicious-transactions-leak
- **S97:** House Judiciary Committee Democratic staff report (26 Oct 2026; current version 6 Nov). Zampolli allegations; no Deutsche Bank content. https://democrats-judiciary.house.gov/sites/evo-subsites/democrats-judiciary.house.gov/files/evo-media-document/2026-10.hjc-dems-staff-report-epstein-and-trump.pdf
- **S98:** Miami Herald, 26 Oct 2026. Zampolli's denial. https://amp.miamiherald.com/news/nation-world/article317782501.html
- **S108:** Il Fatto Quotidiano, 19 Nov 2026. €522m + €257m unrealised = €779m; severance. https://www.ilfattoquotidiano.it/2026/11/19/deutsche-bank-la-filiale-italiana-ha-nascosto-un-buco-da-800-milioni-manager-richiamati-ma-hanno-preso-8-milioni-di-buonuscita/8577688/
- **S150:** SEC, 26 May 2015. Gap-risk valuation settlement. http://sec.gov/news/pressrelease/2015-99.html
- **S157:** Federal Reserve, 19 Jul 2023. Enforcement action. https://federalreserve.gov/newsevents/pressreleases/enforcement20230719a.htm
- **S204:** Corriere della Sera, 17 Nov 2026. Leak composition (compliance files); Spiegel caveat. https://www.corriere.it/economia/finanza/26_novembre_17/deutsche-bank-nella-tempesta-oltre-15-milioni-di-documenti-svelano-gravi-anomalie-nella-gestione-de1e9cd0-038e-4d75-b97a-22f46e1cdxlk.shtml

---

This report is an evidence summary, not a legal finding. Accusations are not findings. Seek qualified legal review before any public use.
