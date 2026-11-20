# Timeline Analyst — GD-20261120-deutsche-bank-italy

Prepared 2026-11-20. Tools actually used: Nimble Search, Nimble Extract (incl. Wayback CDX/availability API via Extract), WebSearch. The Nimble Web Search Agent was unavailable (billing error 402). Direct curl/WebFetch to `democrats-judiciary.house.gov`, `finance.senate.gov` and `web.archive.org` was blocked by the session proxy. Both congressional PDFs were retrieved through Nimble Extract and keyword-searched locally; neither was read in full.

## 1. Question investigated
What happened, and in what dated order, across four strands: (a) the Deutsche Bank S.p.A. (Italy) loss allegations; (b) Epstein at Deutsche Bank; (c) Trump at Deutsche Bank; (d) Paolo Zampolli. The window runs from 2008 to 20 Nov 2026 and also covers the "Inside Deutsche Bank" leak and reactions to it. A key sub-question: does any source place the Zampolli strand and the Deutsche Bank strands on the same date or event?

## 2. Findings

### Chronology

Precision: exact = day known; month; year; approximate = inferred or range. Confidence covers whether the event happened as described, not whether the underlying allegation is true.

| Date | Precision | Event or claim | Source | Significance | Confidence |
|---|---|---|---|---|---|
| 2007 | year | Italian law change lets households repay fixed-rate mortgages early without penalty. Per the FT, this is the root of the DB S.p.A. mispricing problem. | S71, S70 | Starting condition for C1. The statute itself was not checked. | Medium |
| ~2008 | approximate | Flavio Valeri begins 12 consecutive years as Chief Country Officer Italy / CEO DB S.p.A. (back-calculated from the June 2020 release). | S73 | His tenure covers the whole alleged period. | Medium-high |
| 2008-2018 | approximate | Alleged "tesoretto" hidden reserve and derivative positions used to cover missed targets "for more than a decade". | S70, S3, S5 | C1, C2. This is an allegation from leaked internal documents. | Medium (that it was reported); unverified (substance) |
| 10 Nov 2008 | exact | Trump sues DB and other lenders for $3bn over the Chicago tower construction loan. | S92 | Start of the documented Trump-DB friction. Outside the Italian strand. | High |
| 2011, 2014, 2016 | year | Per the Aetos report quoted by FT, DB S.p.A. met its profit targets in these years by drawing on the tesoretto. | S70 | C2. Reported from leak only. | Medium (reported) |
| Nov 2011 | month | Vrablic "whale hunting" email. DB private bank loans to Trump follow: Doral (2012), Chicago, and Old Post Office (2013-2014). | S93 | Trump lending context for C10/C11. | High |
| Apr 2013 | month | Epstein's relationship manager emails DB seniors with estimated flows of $100-300m. | S81, S83 | Onboarding (C9). | High |
| Aug 2013 (19 Aug 2013 class start date) | month | Epstein's first DB accounts open (Southern Financial). The settlement class period starts 19 Aug 2013. | S86, S84 | C9. Onboarding came five years after his 2008 plea. | High |
| 30 Mar 2017 | exact | DB relationship manager sends year-end tax statements for 1,586 accounts, including Trump's, to one client's accountant. White House not told. Sewing calls it an "awful mistake". | S87, S1, S2 | C10. Reported from leak. It happened during Trump's first term. | Medium-high (reported) |
| 2017 | year | DB internal "Project Broadway" review of Trump-related activity starts, per the May 2020 memo. | S89, S88 | C11. Sourced only via aggregators relaying Berlingske / Financial Mail. | Low-medium |
| Early 2018 | month (approx.) | DB S.p.A. supervisory-board member raises asset/liability concerns. Investigation launched; it becomes Project Aetos. Case.md calls this the "2018 whistleblower". | S70, S3 | C3. FT's account ties the 2018 trigger to a board member raising concerns. Whether this is the same person or event as "the whistleblower" is unclear in the snippets. | Medium |
| 2018-2023 | range | DB AG injects ~€1bn of capital into DB S.p.A., per FT reading of the 2023 accounts. | S70, S5 | C5. The underlying DB S.p.A. statements are listed online but were not opened by this module. | Medium |
| May 2018 | month | DB compliance queries Epstein payments to a Moscow bank. | S81 | C9 warning signs. | High |
| Dec 2018 (21 Dec per FT snippet) | month | DB notifies Epstein it will close his accounts. | S86, S81 | C9. Exit was notified but not completed. | High (month) |
| 11 Apr 2019 | exact | House Financial Services and Intelligence Committees subpoena DB for Trump family records. | S90 | Trump strand. Note that this falls during the Aetos period, but no source links the two. | High |
| 2019 (after July arrest) | year | DB files 21 SARs covering ~3,000 Epstein transactions (Oct 2013-May 2019) totalling ~$582m. Wyden counts 1,140 retroactively flagged wires / $147m. | S86, S81 | C8. The two figures measure different things and should not be merged. | Medium-high |
| Jul 2019 (≈9 Jul) | month | Epstein's last two DB accounts closed three days after his 6 Jul 2019 arrest. | S86, S85 | DB kept servicing him after the Dec 2018 notice. | Medium-high |
| 2020 | year | DB tells the ECB of a €522m crystallised loss at the Italian unit, with €779m potential including unrealised losses. | S70, S5 | C4. Reported from leak. No public ECB record found. | Medium (reported) |
| May 2020 | month | Hagerty "Trump/Kushner" memo: 59 SARs, 140 entities, >$3m involving two Trump Baku companies. Trump not named as a suspect; neither company was a DB customer. | S88, S6 | C11. Comes from secondary relays only. | Low-medium |
| 25 Jun 2020 | exact | DB announces Valeri's departure and appoints Roberto Parazzini CEO of DB S.p.A., effective 1 Jul 2020. | S73, S74 | The release gives no reason. FT later ties Valeri's and the CFO's 2020 exits to Aetos. | High (event); Medium (link to Aetos) |
| 7 Jul 2020 | exact | NYDFS consent order: $150m penalty covering Epstein, Danske Estonia and FBME. | S83 | C9. This is the formal regulatory finding. | High |
| 9 Jul 2020 | exact | Supreme Court decides Trump v. Mazars (consolidated with the DB subpoena case): vacated and remanded. | S90 | Trump strand. | High |
| 2021 | year | Italian private-banking head Cincotto resigns. FT says this was unrelated to Aetos. | S70 | C6 context. | Medium |
| 12 Jan 2021 | exact (report date) | DB reported to cut ties with Trump after 6 Jan; >$300m outstanding. | S91 | End of Trump relationship. Anonymous-source report; DB declined comment. | Medium-high |
| Jun 2023 / 20 Oct 2023 | month / exact | $75m Epstein-victims class settlement: preliminary approval June, final approval 20 Oct 2023. No admission of wrongdoing. | S84 | C9 outcome. | High |
| 11 Mar or 21 Mar 2025 | month | Zampolli named Special Envoy for Global Partnerships. Wikipedia says in office from 11 Mar; his X thank-you post decodes to 21 Mar 2025. | S95, S96, S4 | Zampolli strand. The exact day is unreconciled. | High (month) |
| 11 Feb 2026 | exact | Reuters, using DOJ Epstein files, reports DB kept servicing Epstein after the late-2018 notice. | S85 | Pre-leak public record. Shows the slow exit was public before the leak. | High |
| Spring 2026 | approximate | Consortium begins analysing ~15m leaked files. | S100 (weak; secondary site drweb.de not ledgered) | Leak strand. | Low |
| 4 Aug 2026 | exact | Sen. Wyden (minority) report "Looking the Other Way" on JPMC, DB and BofA and Epstein. DB says it regrets its "historical connection". | S81, S82 | C9. Zero mentions of Zampolli. No Italy content. | High |
| Oct 2026 | month | DB says it notified the Hesse data protection authority "proactively and on a precautionary basis" in October. | S76 | First datable sign that DB knew of the leak. | Medium-high |
| 15 Oct 2026 | exact | Zampolli's envoy status terminated after a reported feud with Deputy Secretary Landau. He calls it the end of his term. | S94, S95 | Zampolli strand. No source mentions DB. | High |
| 26 Oct 2026 | exact | House Judiciary Democrats' staff report says Trump and Zampolli "may have been co-conspirators" in Epstein's 1990s conspiracy. Zampolli denies it; the White House calls the report false. | S97, S98, S7 | C14. Partisan staff report, so the claims are allegations. The report mentions neither "Deutsche" nor "bank". | High (that it was published) |
| 28 Oct - ~8 Nov 2026 | approximate | HJC PDF replaced at least three times at the same URL. Wayback shows four distinct digests (26 Oct, 28 Oct, 31 Oct, ~8 Nov). | S97 (Wayback CDX) | Citations to "the report" may point to different versions. The 26 Oct original was checked: it also has 0 "Deutsche" / 0 "bank". | High |
| 17 Nov 2026 | exact | "Inside Deutsche Bank" published (FT, Spiegel, Le Monde, NYT, ZDF and others): Epstein $582m, 2017 Trump tax error, Russia. DB says the matters are historical and cites €7bn in controls since 2019. Chair backs Sewing. | S1, S2, S77, S78, S99, S100 | C8, C10, C16. | High |
| 17 Nov 2026 | exact | DB shares fall >6% in Frankfurt, then trim to -3.8%. Klingbeil demands "full transparency" and says regulators and law enforcement should look into it. | S80, S77, S79 | Reaction. | High |
| 17 Nov 2026 | exact | Trump, asked in Manila, says the 2017 disclosure was "illegal". | S78 | Public response. | Medium-high |
| 18 Nov 2026 | exact | Hesse data protection commissioner Rossnagel opens a probe into DB's data safeguards and breach notification. It will not assess document content. | S75, S76 | This is a privacy probe, not a financial-misconduct probe. | High |
| 19 Nov 2026 | exact | FT publishes the Italian-unit story (≤€800m, tesoretto, Aetos, KPMG, no dismissals). DB says the auditor saw no need to restate and nothing was material at group level. | S70, S3, S72, S5 | C1-C7. First public appearance of the Italian matter found. | High (that it was published) |

### Sequencing observations (observations, not conclusions about intent)
1. **No Zampolli–Deutsche Bank intersection was found in any source.** The Zampolli events (Mar 2025, 15 Oct 2026, 26 Oct 2026) and the DB events share no actor, transaction or document in anything retrieved. Checks run: the HJC report (both the original and current versions: 0 "Deutsche", 0 "bank"); the Wyden report (0 "Zampolli"); Nimble and WebSearch queries for "Zampolli" with "Deutsche Bank" / "Inside Deutsche Bank" / "filiale italiana" (nothing relevant). The only overlap is the calendar: Zampolli's firing (15 Oct) and the HJC report (26 Oct) fall in the same month DB says it notified the data authority of the leak (Oct 2026). No source connects these. Absence in these sources is not proof of absence, because the leak corpus is not public.
2. **The Italian strand never meets the Epstein or Trump strands in any source.** They share a 2018-2020 window: Aetos launched in 2018, Epstein was exited Dec 2018, the subpoenas came Apr 2019, and in 2020 came the ECB notification, the Trump/Kushner memo, the NYDFS order and Valeri's exit. They are linked only because they come from the same leak (O-FT-LEAK / O-FT-ITALY / O-LEAK-CONSORTIUM).
3. **In 2020 DB both reported and stayed quiet.** In 2020 DB reportedly told the ECB of the Italian loss (C4) and replaced the Italian CEO, but the 25 Jun 2020 release gives no reason and says nothing of losses (S73). The case for "undisclosed" rests on the lack of public disclosure, not on concealment from the supervisor. By the bank's account, supervisors were informed (S3, S72).
4. **Epstein exit lag.** DB notified Epstein in Dec 2018 but closed his last accounts only after his July 2019 arrest (S86, S85). The NYDFS order followed a year later. This was public from Feb 2026 (S85), before the leak.
5. **The Italian story came out two days after the main leak (19 vs 17 Nov),** after the Hesse probe had opened (18 Nov). The Hesse probe is about data protection only and does not cover the Italian losses.
6. **The HJC report changed after publication** (four file versions between 26 Oct and ~8 Nov 2026). Later modules quoting it should cite the version they used.

## 3. Contrary evidence
- DB's position: the Italian matter came from reassessed funding assumptions; supervisors were informed; the auditor saw no need to restate; it was not material at group level (S3, S72). The leak matters are historical, and €7bn has gone into controls since 2019 (S77).
- The "€800m hidden" headline figure (C1) differs from the reported ECB figures (€522m crystallised, €779m potential; C4). The amounts depend on definitions.
- Valeri and the two other senior managers were cleared of personal misconduct, though reprimanded (S70). The 2020 release frames the exit as a personal decision (S73).
- The May 2020 memo reportedly states that Trump was not named as a suspect and that the Baku companies were not DB customers (S88, S6).
- Zampolli denies any relationship or business with Epstein (S98). The White House rejects the HJC report (S98). Both congressional reports are minority/partisan staff products.

## 4. Confidence and limitations
- **Overall confidence: Medium.** Dated public-record events are high confidence: NYDFS 2020, SCOTUS 2020, the 2023 settlement, the 2020 DB release, the Zampolli firing, the HJC and Wyden reports, and the 17-19 Nov reactions. Leak-derived internal events (Aetos timing, the 2020 ECB figures, the 2017 tax error, the May 2020 memo, Project Broadway) are medium to low confidence. They rest on paywalled FT text seen only in snippets, or on aggregators, and the leaked documents are not public.
- Almost all news sources were seen only as search snippets. The FT is paywalled.
- Wayback was usable only through Nimble Extract. Captures were checked for S73 (earliest 2021-02-25) and S97 (versions). Wayback could not date "first appearance" of the Italian claims, because they were first published 19 Nov 2026 and came from non-public documents.
- Not checked: DB S.p.A. annual accounts 2018-2023 (capital increases); any ECB/Banca d'Italia record; KPMG; the Italian 2007 statute; the 2023 settlement docket; Financial Mail and Berlingske originals for C11.
- The "2018 whistleblower" (case.md) and the FT's "supervisory-board member raised concerns" may describe the same trigger or different ones. Unresolved. Per scope, no attempt was made to identify individuals.

## 5. Next best research action
Open DB S.p.A.'s consolidated financial statements for 2018-2023, which are listed at country.db.com/italia (2020, 2021, 2022 and 2023 PDFs surfaced in search). Extract the dates and amounts of each capital increase and any note on provisions, early-repayment or ALM restatements. This tests C5 and the 2018-2020 timeline against a primary filing rather than leak-derived reporting.
