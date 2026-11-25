# Pattern Analyst: GD-20261125-iowa-army-ammunition-plant

Prepared 2026-11-25 by the pattern-analyst subagent (Wave 2). Inputs: `case.md` (C1-C46), `changelog.md`, `sources.md`, and the four Wave 1 modules (claim-auditor, money-mapper, timeline-analyst, harm-accountability-analyst). Source IDs refer to `sources.md`. IDs **S1000-S1016** are new rows from this module. They are listed in Appendix A and are **not yet in `sources.md`** (see the ledger note there).

**Method.** Each candidate pattern was tested against dated instances already in the Wave 1 record. Targeted searches were run only to confirm or refute a specific instance, or to find a base rate at other Army ammunition plants or OB/OD sites. Tools: Nimble Search, plus a Nimble Extract of the 2024 OB/OD proposed rule, which was read through targeted passage searches rather than in full (see section 4). federalregister.gov was not reachable through WebFetch.

**Strength scale used below**
- **Documented pattern:** at least two independent instances, each with a primary or independent source, sharing the same mechanic.
- **Suggested pattern:** two or more instances, but weak independence (for example, the same episode), weak sourcing, or mechanics that only partly match.
- **Observation:** one instance.
- **Not supported:** the instances do not share a mechanic, or the evidence contradicts the pattern.

Every pattern describes **mechanics only**. None of it is a statement about intent, and none of it is a legal conclusion.

---

## 1. Question investigated

Do tactics or mechanics repeat across the documented events at IAAP (the 2018 RCRA permit S1, the 2020 and 2026 emergency permits, enforcement, worker-safety and energetics-storage events)? The coordinator proposed seven candidates (a-g). For each one this module asks:
- What dated instances exist, and with which source IDs?
- What counterexamples exist?
- Is there an ordinary-practice explanation?
- How common is the issue at other Army ammunition plants or OB/OD sites (base rate)?
- Is the pattern documented or only suggested?

---

## 2. Findings

### 2.1 Pattern table

| Pattern | Instances (source IDs) | Counterexamples | Ordinary-practice explanation? | Strength |
|---|---|---|---|---|
| **(a) Emergency permits used to raise limits or authorize treatment and storage outside the base permit** | (1) 2020-03-02: OB rate raised from 140 to 1,500 lb/hr per pan (3,000 lb/hr, ~21x) for up to 60,000 lb of M14 propellant with a faulty stabilizer; permittees Army + AO; 90 days (S72, S1003). (2) 2026-04-02, 06-30, 09-29: three successive 90-day storage permits for lead azide in ECMs outside the permitted units (S74, S120, S121, S75/S118). (3) 2026-11-13: storage + in-place detonation permit, Army only (S2, S119). (2) and (3) are **one episode**. | No other IAAP emergency permits found for 2018-2019 or 2021-2025 (search; not exhaustive). The 2026 permits authorized a new location and method; they did **not** raise a numeric limit in a permitted unit. | **Yes.** 40 CFR 270.61 exists for imminent and substantial endangerment. EPA's 2024 proposed rule says emergency permits are "often" used for situations that run past 90 days, and gives deteriorating propellants, explosives and pyrotechnics as an example of repeated 90-day renewals (S1000). | **Documented pattern** (two independent episodes, 2020 and 2026). The mechanic is lawful and nationally common. The 2026 serial renewal matches a practice EPA itself flagged. |
| **(b) Deferred or never-produced safeguards** | 2007 OB/OD risk assessment; new one conditioned on Army funding (S1 L100-101, 2018); any new RA is discretionary (S1 V.J/VI.I/VII.I). Technology Assessment Report due ~2022-09-28, no public copy (S1 V.K; claim-auditor C9). OD and 40mm SOP attachments blank, due 30 days after issuance (C36). OB inspection schedule missing (C37). OB secondary containment with an open-ended trigger (claim-auditor 2.3). V.F.3 cites SOP Rev 6 while Rev 8 is attached (C7). Fifth Five-Year Review due Mar 2026, status not found (S923). | Deferrals are disclosed openly in S1 (C6, C9). One deferred safeguard was delivered: the 2021 FYR's groundwater protection zone became a protected water source on 2025-06-18 (S921). The incorporated SOP limits (70/60 lb/hr) are stricter than the permit (C5). | **Partly.** Nationally, as of Apr 2023, **41 of 67** operating OB/OD facilities had not done the required alternatives evaluation, 24 had, and 2 were unknown (S1000). DoD IG says Army demilitarization funding has "historically" been inadequate (S1008). | **Documented pattern** at IAAP (several instances in S1). **Typical, not an outlier,** against the national base rate. Non-production is unproven: it rests on the absence of public copies. |
| **(c) Drafting and quality-control errors in EPA permit documents** | S1 (2018): RTC "OD 60 lb/hr" vs VI.E.2's 100; V.F.3 Rev 6 vs attached Rev 8; "45-day" for 51 days; VI.G.1.c "are contributing" copied from V.H.1.c; VI.G.4 omits groundwater; IX.K.1.a points to the wrong criteria; "27 CFR Part 55" for 555; 40 CFR 267.74 for 264.74 (claim-auditor 2.3, C1, C7, C10, C39). S2 (2026): "44MM" (C20-C22); UN0130 for lead azide (C23-C24); wind "and" (C30); Section 13 title; "Direct Approval"; contingency plan described as part of the 2018 permit; 267.74 repeated (C31). Related EPA communications: "first" vs "third" storage permit (C27/S75); second permit 6/30 vs 7/1 (S121/S120); third permit expiry Dec 26 vs Dec 29 (C46); notice 11/13 vs 11/16 (S121/S119). | The "Draft" PDF title and the 2025-05 path are explained by bulk re-posting (S70): **excluded** from the pattern. "IAAAP" is not a typo (C19 withdrawn). The 40mm limit, the 140/100 lb/hr limits and the EF 1.00 are restated correctly in S2. The S1 RTC itself corrected four cross-reference errors. 40 CFR 267.74 is a real section with matching content, so that error is a cross-part citation, not a nonexistent one (S1016). | **Partly.** Long template-derived permits commonly carry cross-reference errors. Enforcers would likely read the wind clause purposively. **No base rate** for error rates in EPA permits was found. | **Documented recurrence** across two EPA Region 7 documents eight years apart. The errors **cluster** by mechanic (see 2.2c) rather than being isolated. Their significance is mixed: most are clerical, and five are safety-relevant. |
| **(d) Late discovery or long-term storage of degraded energetics** | 2004: DoD concern over a "40-year-old" deteriorating lead azide stockpile at IAAP (S94). 2009: lead azide reportedly consolidated at IAAP (S90-S92); AO order for lead azide packaging, crating and handling procedures (S45). 2020-03: 60,000 lb M14 propellant "determined by analysis to have a faulty stabilizer", "Category D", unsafe to store or ship (S72, S1003). 2025-09-09: SAM notice for "Lead Azide Neutralization" (S21). 2025-09-24: AO asks MuniRem for a plan to neutralize 68 drums (S609). Jan 2026: Army working group (S128). **2026-02-04: AO email says the government is "taking another approach ... based on their assessment of safety risk"** (S1014). 2026-03-12: EPA notified; plant paused (S121, S83). | Surveillance detected both degradations **before** any accident (S72; S91, S609). The Army says it monitored the drums (monthly per S91; every September per S609). Until it was declared waste, the lead azide was product, not RCRA waste (harm-accountability F6). Whether the 2004 inventory is the same as the 2026 drums is unknown. | **Yes, systemically.** The DoD conventional ammunition demilitarization stockpile was ~529,000 tons (Feb 2015, S1007) and ~472,000 tons (Sept 2016, S1008), with funding below need. Camp Minden (LA, 2012-2016): ~15.7M lb of M6 propellant with a degrading stabilizer (S1004-S1006). EPA cites deteriorating energetics as a recurring emergency-permit driver (S1000). | **Documented pattern:** two distinct materials degraded in long-term storage at one site (lead azide and M14 propellant). The **timing gap** between the first documented safety-risk statement (Feb 2026 or earlier) and EPA notification (Mar 12, 2026) is documented in news reporting of AO emails. The Army disputes it. |
| **(e) Exceeding permit limits, then settling for small penalties** | Only **one** documented exceedance: 2023 OB "in excess of permit limits", settled for $39,311 by Army + AO (S113/S10, S603). Older ICIS formal actions (1986, 1990, 1992, 2001): content unknown (S114). | The 2020 rate increase was **authorized**, not an exceedance (S72). EPA states compliance was restored (S113). | **Yes, for the penalty size.** Radford AAP (Army + operating contractor) multimedia CAFOs: $203,200 for 10 counts (2017, S1009) and $279,700 (2018, S1010); a third order of $263,335 per advocacy summary (S1015). The IAAP figure is lower but covers 3 RCRA-only allegations. Statutory penalty policies scale with gravity and economic benefit, not contractor revenue, so the $4.7B obligation total is **not a valid comparator**. | **Observation** (one exceedance). "Small penalties" recur across EPA and OSHA but are **in line with peer plants**. |
| **(f) Repeated OSHA and DOL findings against the operator** | OSHA 2006-10-26: 9 serious, mostly process safety management; $40,500 reduced to $34,000 (S110), after the 2006-06-12 fatal explosion (S96; link between the two not confirmed). DOL OFCCP 2017: $50,000 conciliation, no admission (S604). DOL WHD 2018: $678,296 back wages, Milan (S605). OSHA 2019: $10,000 for late reporting of a hospitalized worker (S111, S112). OSHA 2024-10-18: 1 serious, respiratory/exposure evaluation; $9,795 reduced to $5,877 (S111, S112). | 2023 OSHA referral with **no citations** (S111, mirror). No court finding against AO (harm-accountability E3). Different categories: 3 safety, 2 employment. Milan is a different site. | **Partly.** Lake City AAP (ATK) was cited by OSHA in 2008, 2011 and 2012; its 2011 PSM penalty went from $28,000 to $5,600 (S1011). Radford's 2018 fatal fire led to 10 serious citations, $112,711 reduced to ~$83,000 (S1012). Repeated citations with settlement reductions are common at GOCO energetics plants. | **Documented pattern** (5 findings in 2006-2024, 3 by OSHA). Its frequency and penalty size are **not anomalous** against the two peer plants checked. Hazard evaluation recurs as a sub-theme (PSM 2006; exposure evaluation 2024). |
| **(g) Community exposure concerns redirected to Superfund or other programs** | 2018 RTC #1: groundwater/air concern answered by pointing to Superfund (S1 L83-93; C13, C15). RTC #3: Camp Lejeune referred to Region 4 (C15). Permit Section IX corrective action deferred to the 1990 FFA, with corrective measures "RESERVED" (S1 L4745-4800). Trench 5 to be folded into CERCLA OU-4, whose ROD was still in draft in 2025 (S1 VIII.A; S921). PFAS handled under CERCLA OU13, with no PFAS analytes added to permit monitoring (C14; S100). | **2026:** S2 keeps off-site lead exposure **inside the permit**: advisories, sampling, cleanup and a 30-day impact report (C29, C33), plus EPA independent sampling and an Army claims process (S121). 2018: the Iowa DNR comment produced a permit text change (harm-accountability B2). | **Yes, strongly.** EPA's 1996 RCRA/CERCLA coordination memo makes deferral between programs standard and points to interagency agreements at federal facilities (S1013). | **Documented mechanic** in 2018 (several instances), but explained by **ordinary policy**. Not repeated in 2026. Its effect: the RCRA permit selects no remedies, and the CERCLA track remains open 36 years after NPL listing (S100, S101). |
| **(h) [added] Public notice published after issuance** | 2026-04-02 permit, notice 05-07 (35 days) (S121, S17). 2026-09-29 permit, notice 11-03 (35 days) (S118). 2026-11-13 permit, EPA notice 11-16, after the Army's 11-15 advisory (S119, S122). Iowa HHS "recently made aware" (S135). Illinois reportedly not notified (S95, low weight). | 2018 permit: 51-day comment period, longer than the 45 days required (C10). The 8th Circuit found a 45-day comment period not a prerequisite in an emergency (S122). The Army held an open house on 2026-10-15 (S121). | **Yes.** 270.61 allows oral or immediate issuance followed by notice (S1000). | **Suggested pattern.** All instances belong to the 2026 episode, so they are not independent. The 2020 notice date was not found. |

### 2.2 Pattern detail

#### (a) Emergency permits outside the base permit: documented pattern, ordinary mechanism

**Mechanics common to both episodes**
- An energetic material was judged unsafe both to keep storing and to transport (S72; S2 p.1-2).
- An emergency permit then authorized OB or OD beyond what the 2018 permit allows.
- There was no prior comment period, and notice followed issuance.

**Differences between the episodes**
- **2020** raised a rate in an already-permitted unit, by about 21x. AO was a co-permittee. The permit ran 90 days.
- **2026** authorized a new location (ECMs) and a new method (in-place detonation). It followed three serial 90-day storage permits. The Army was the sole permittee (C26).

**Base rate**
- 40 CFR 270.61(b)(2) caps an emergency permit at 90 days with no extension.
- In its 2024 proposed rule, EPA said emergency permits are "often being used for situations that do not conclude within the 90 days". It distinguished renewals "on a continuous 90-day cycle", citing deteriorating propellants, explosives and pyrotechnics as an example. EPA proposed a one-time 90-day extension (S1000).
- IAAP's April-June-September 2026 chain fits that description: about 7.5 months on 90-day storage permits before the treatment permit.
- No final rule was found as of 2026-11-25. The EPA page still shows the rule as proposed (S1001).

**Assessment**
- Recurrence is documented.
- The legal mechanism is ordinary and used nationally.
- What is distinctive in 2026 is the off-site exposure footprint, not the use of the mechanism.

#### (b) Deferred safeguards: documented at IAAP, typical nationally

- **Dated instances.**
  - 2007 RA, still the operative RA in 2018 (11 years old). A new one depends on Army funding.
  - TAR due ~Sept 2022. No public copy.
  - OD and 40mm SOPs due ~Oct 2018. Status unknown.
  - OB inspection schedule: required before any OB. Status unknown.
  - Secondary containment: design due ~Sept 2020; construction trigger open-ended.
  - The fifth FYR (due Mar 2026) has not been located.
- **Mechanic.** Obligations are written with a deliverable but no public tracking, or with a trigger outside EPA's control ("once funding ... is approved"; "the Director may require").
- **A partial link, stated as a sequence only.** The 2023 alleged violations involved a detonation chamber and the closure of a relocated grenade chamber (S113). Those are the same units whose SOPs were blank placeholders in 2018 (C36). The record does not show whether the SOPs were later incorporated, so this is a co-location of issues, not a demonstrated cause.
- **Base rate.** Missing alternatives evaluations are the national majority: 41 of 67 facilities in April 2023 (S1000). IAAP's missing TAR is therefore typical, not exceptional.
- **Counterexamples.**
  - The deferrals were disclosed in the permit.
  - The groundwater protection zone was delivered in 2025 (S921).
  - The 2009 lead azide handling-procedures order (S45) shows some energetics planning took place.

#### (c) Drafting and QC errors: recurring and clustered, mixed significance

The errors are not isolated. They fall into three repeating mechanics.

1. **Copy-forward or template carryover.**
   - VI.G.1.c's reversed purpose ("are contributing") was copied from V.H.1.c.
   - The 40 CFR 267.74 citation appears in S1 (V.N, VI.M, VII.M, IX.V.5) and again in S2 (N.2). That is direct evidence that S2 was drafted from S1-derived text.
   - Part 267 is the standardized-permit analogue, and its §267.74 covers availability and retention of records (S1016). The citation is therefore wrong-part but substantively parallel, which makes it low severity.
2. **Stale version references.**
   - SOP Rev 6 is cited while Rev 8 is attached (C7).
   - The II.E.3 "layaway" reference is stale (C37).
   - S2 calls a 2026 contingency plan part of S1's 1999-era Attachment III-5 (C31).
   - S2 mentions only the third storage permit (C27, C44).
3. **Transcription of numbers and identifiers.**
   - RTC "OD 60" (S1).
   - "44MM" and UN0130 (S2).
   - EPA date inconsistencies in 2026: 6/30 vs 7/1; Dec 26 vs 29; posted 11/13 vs 11/16.

**Safety-relevant subset (5)**
- The S2 wind clause "and" voids the literal low/high-wind restriction, and S2 also dropped S1's smoke-over-public-areas clause (C30).
- UN0130 misidentifies the hazmat entry (C24).
- RTC "OD 60" misstates a public-facing limit (C1).
- VI.G.1.c reverses the purpose of OD groundwater monitoring.
- VI.G.4 omits groundwater from OD removal and verification.

**Review context**
- S1 went through public comment, and its RTC fixed four cross-references.
- S2 went through at least seven EPA comment rounds between Oct 6 and Nov 6, 2026 (S2 pp.20-21).
- Both review processes missed numeric and identifier errors.

**Excluded from the pattern**
- The "Draft" metadata and the 2025-05 posting path are explained by bulk posting (S70).
- "IAAAP" is the official acronym (C19).

**Base rate.** None found for EPA permit error rates. The pattern is therefore within-office recurrence, not a comparison with other regions.

#### (d) Degraded energetics in long-term storage: documented pattern, systemic base rate

**Two independent IAAP instances**
- **Lead azide.** First documented concern in 2004 (S94). Disposal in 2026.
- **M14 propellant.** Faulty stabilizer found by analysis in 2020 (S72, S1003).

Both were found through surveillance or analysis, not through an accident. Both ended in emergency OB or OD at IAAP, which links (d) to (a).

**The 2025-2026 sequence, as dated in the record**
1. 2025-09-09: SAM requirement for neutralization (S21).
2. 2025-09-24: AO request to MuniRem (S609).
3. January 2026: Army working group (S128).
4. 2026-02-04: AO email citing the government's "assessment of safety risk" (S1014).
5. 2026-03-12: EPA notified (S121).
6. 2026-05-07: first public notice.

**Caution**
- A 2025 request to "neutralize and dispose" could reflect routine disposal of stock that was no longer needed (S87). It does not on its own show known degradation.
- The Feb 2026 email is stronger evidence of a safety assessment before March.
- The Army says "current indications are that we were made aware in March" and that it will investigate (S1014).
- This is a documented discrepancy between accounts. It is not a finding of concealment.

**Inconsistent surveillance record.** One account says monthly checks (S91, Army via KCRG). Another says AO inspected every September and added stabilizing fluid (S609, Army declaration via WaPo). These may describe different inspection types. Unresolved.

**Base rate**
- The DoD demilitarization stockpile has been several hundred thousand tons for years, with funding "historically" inadequate (S1007, S1008).
- Camp Minden shows the same failure mode, a degrading stabilizer in stored propellant, at larger scale. There, EPA's initial open-burn-in-trays remedy was replaced by a contained burn chamber after review (S1004-S1006).
- Long-term storage of unserviceable energetics is a systemic DoD condition, not an IAAP anomaly.

#### (e) Exceed-then-settle: observation only

- Only one exceedance of a permit limit is documented (2023 OB).
- The 2020 rise was a permitted emergency change.
- The penalty-to-obligations framing ($39,311 vs $4.72B) is not a valid measure:
  - civil penalties follow per-violation statutory penalty policies;
  - the Army is co-respondent;
  - most obligations are munitions procurement.
- Rough per-count comparison (counts may not map one-to-one):
  - IAAP: ~$13,100 per alleged violation (3).
  - Radford 2017: ~$20,300 per count (10, multimedia) (S1009).
- Unknown: how the $39,311 was split between the Army and AO, and whether any share is a reimbursable contract cost. That is a legal and contract question; qualified review is recommended. The money-mapper F21 flags the same gap.

#### (f) OSHA and DOL findings: documented recurrence, peer-typical

- There are five formal findings in 2006-2024 across two plants:
  - OSHA x3 at IAAP: 2006, 2019, 2024;
  - DOL x2: OFCCP 2017 and WHD 2018 (the WHD finding was at Milan).
- In both IAAP OSHA cases with penalty data, the penalty was cut at settlement: by 16% in 2006 and 40% in 2024.
- Peer plants show the same mechanic: Lake City cut 80% in 2011 (S1011); Radford ~26% in 2019 (S1012).
- Not counted against AO: the EEOICPA SEC class (1949-1974) relates to the AEC and Mason & Hanger era (S108, S900). AO did not exist then.

#### (g) Redirection to Superfund: documented, ordinary policy, not repeated in 2026

- **2018.** EPA deferred corrective action and answered exposure concerns by pointing to Superfund or another region. This is consistent with the 1996 memo and the 1990 FFA (S1013).
- **2026.** EPA did **not** redirect off-site lead exposure. The permit itself carries sampling and cleanup duties.
- **Remaining mechanic worth reporting.** With Section IX "RESERVED", no RCRA-enforceable remedy schedule exists in the permit. Remedy timing depends on the CERCLA track: Construction Complete = No (S101); OU-4 ROD in draft in 2025 (S921).

### 2.3 Cross-pattern linkage (mechanics, not intent)

1. **(d) leads to (a) in both episodes.** Degraded energetics judged unsafe to store or transport led to emergency OB/OD outside base-permit terms (2020, 2026).
2. **(b) bears on (a).** Without a completed alternatives assessment (TAR), open treatment stays the default when an emergency arises. In 2026 the Army did evaluate alternatives and the court found that reliance reasonable (S122). EPA's 2024 proposal would require emergency permits to consider alternatives (S1000).
3. **(c) intersects (h).** Inconsistent dates and "first" vs "third" labelling in EPA's 2026 communications make the public timeline harder to reconstruct.

### 2.4 Documented vs suggested: summary

- **Documented patterns:**
  - (a) emergency permits outside the base permit (2 episodes);
  - (b) deferred safeguards;
  - (c) recurring and clustered drafting errors;
  - (d) degraded energetics in long-term storage (2 materials);
  - (f) repeated OSHA and DOL findings;
  - (g) Superfund deferral in 2018. This one is documented, but it is ordinary policy and was not repeated in 2026.
- **Benchmarked as typical or ordinary** (against peers, national data or policy): (a), (b), (d), (f), (g).
- **Suggested:** (h) post-issuance notice lag (single episode).
- **Observation only:** (e) exceedance followed by settlement (one instance).
- **Not supported as framed:**
  - the $39,311 vs $4.7B comparison as a measure of leniency;
  - the "Draft" metadata as part of the error cluster.

---

## 3. Contrary evidence

- **Legality and disclosure.**
  - Every emergency permit used a lawful mechanism (270.61).
  - The 2018 deferrals were disclosed in the permit itself (C6, C9).
  - The 8th Circuit found petitioners unlikely to succeed and found the alternatives analysis reasonable (S122). That ruling was on the stay motion only.
- **Peer base rates show most patterns are industry-typical.**
  - Most OB/OD facilities had not completed alternatives evaluations (S1000).
  - Serial 90-day emergency permits for deteriorating energetics are a practice EPA describes as common (S1000).
  - Penalty sizes and settlement reductions at Radford and Lake City are comparable (S1009-S1012).
  - The demilitarization stockpile backlog is DoD-wide (S1007, S1008).
- **Surveillance worked in both degradation cases.** The material was found before an accident (S72, S91).
- **Protective features exist.** S2 imposes EF 1.00, in-permit off-site sampling and cleanup, and timed notices (C29, C33). The 2018 Iowa DNR comment changed the permit text.
- **Absence is not proof.** The missing TAR, risk assessment, SOP incorporation and fifth FYR were not found publicly. EPA's modification log was not accessible, and these may exist.
- **Discovery timing is contested.** The Army says it was made aware in March 2026 and will investigate. The WaPo emails were seen only as excerpts (S609, S1014).

---

## 4. Confidence and limitations

**Overall confidence: medium.**
- **High** that the instances listed occurred as described, where primary sources were read: S1, S2, S72, S113, S122, S1003.
- **Medium** for the base rates. The FR proposal (S1000) was read only through targeted passage searches of the extracted text, not in full. The peer penalty and OSHA figures come from search excerpts of CAFOs and news (S1009-S1012).
- **Low-medium** for the 2025-2026 discovery timeline. It rests on WaPo and CNN excerpts of documents not read (S609, S1014, S128).

**Limitations**
- Base rates were sampled, not systematic. Two peer AAPs were checked for penalties and OSHA (Radford, Lake City) and one comparator for degraded energetics (Camp Minden).
- No base rate was found for EPA permit drafting-error frequency.
- The IAAP permit modification log, the CAFO text, and the April and June 2026 permits were not accessible. So (b) and (a) may be incomplete. There may be more emergency permits or delivered safeguards.
- ECHO and osha.gov were not directly accessible (as in Wave 1). The OSHA record is likely incomplete.
- **Ledger:** no append or edit tool was available in this session. Rewriting the 206-row `sources.md` with a full-file write would risk altering existing rows, which the contract forbids. The new rows S1000-S1016 are in Appendix A for the coordinator to append verbatim.

---

## 5. Next best research action

Submit one records request (or Administrative Record review) to EPA Region 7 for IAAP (IA7213820445) covering:
- every emergency permit issued since 2018-09-28;
- the Condition II.C.4 permit-modification log;
- any Technology Assessment Reports and OD/40mm SOP modifications received.

At the same time, pull the facility-level alternatives-evaluation status for IAAP from EPA's OB/OD rulemaking docket, EPA-HQ-OLEM-2021-0397, which underlies the 24-of-67 figure. Together these would confirm or refute the instance counts for (a) and (b), and place IAAP precisely against the national base rate.

---

## Appendix A: New ledger rows (S1000-S1016), to append to `sources.md` verbatim

| ID | URL | Publisher / author | Published | Accessed | Type | Origin ID | Independent? | Archive link | Supports (exact claim) | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| S1000 | https://federalregister.gov/documents/full_text/xml/2024/03/20/2024-05088.xml | U.S. EPA, Federal Register (proposed rule, Revisions to Standards for the Open Burning/Open Detonation of Waste Explosives) | 2024-03-20 | 2026-11-25 (Nimble Extract of full text; read by targeted passage search, not in full) | government record | O-FR-2024-05088 | yes | — | Pattern (a), (b), (d): "As of April 2023, 24 facilities out of 67 operating facilities have conducted an evaluation of available alternative treatment technologies"; 13 identified an alternative, 11 found none; 41 have not conducted any evaluation, 2 unknown. Emergency permit provisions "are often being used for situations that do not conclude within the 90 days"; renewals "on a continuous 90-day cycle" with example "when propellants, explosives, pyrotechnics (PEP) deteriorates"; 270.61(b)(2) no extensions; proposes one-time 90-day extension and alternatives consideration under emergency permits; OD sites exceeded action levels more often than OB-only sites. | Proposed rule; not final. www.federalregister.gov blocked for WebFetch. |
| S1001 | https://epa.gov/hwpermitting/revisions-standards-open-burning-open-detonation-waste-explosives | U.S. EPA | undated page | 2026-11-25 (search excerpt) | government record | O-FR-2024-05088 | yes | — | Pattern (a), (b): proposal of 2024-03-20; comment through 2024-06-20; page shows no final rule | No final rule or withdrawal found in 2025-2026 searches (not exhaustive). |
| S1002 | https://news.meaww.com/beyond-iowa-what-hazardous-military-waste-does-the-us-detonate-and-where-are-other-lead-sites | MEAWW (news aggregator) | 2026-11 | 2026-11-25 (search excerpt) | secondary commentary | O-EPA-OBOD-LIST | unknown | — | Base rate: EPA inventory lists 65 facilities operating under OB/OD permit or interim status as of Sept 2024 | Low weight; restates EPA list (S71). |
| S1003 | https://19january2021snapshot.epa.gov/ia/iowa-army-ammunition-plant-middletown-iowa_.html | U.S. EPA Region 7 (public notice, 2020 emergency permit; Jan 2021 snapshot) | 2020 | 2026-11-25 (search excerpt) | government record | O-EPA-R7-EMERG-2020 | yes (rel. to Army/AO) | EPA Jan-2021 snapshot host | Pattern (a), (d): Emergency Permittee "U.S. Army and American Ordnance LLC"; up to 60,000 lb "unstable M14 propellant"; OB raised to 1,500 lb per pan, 3,000 lb/hr; "faulty stabilizer"; Army characterized waste "Category D"; unsafe for on-site storage and off-site transport | Same origin as S72. Notice date not captured. |
| S1004 | https://19january2017snapshot.epa.gov/la/camp-minden_.html | U.S. EPA Region 6 (Camp Minden site page; Jan 2017 snapshot) | c. 2015-2016 | 2026-11-25 (search excerpt) | government record | O-EPA-MINDEN | yes | EPA Jan-2017 snapshot host | Base rate (d): 2012 explosion revealed improperly stored explosives; ~15,687,247 lb M6 propellant + 320,890 lb CBI; weather deteriorates stabilizer; contained burn method selected | Comparator site; not Army-operated at the time (Explo Systems). |
| S1005 | https://19january2017snapshot.epa.gov/sites/production/files/2015-01/documents/printer_friendly_camp_minden_questions_and_answers.pdf | U.S. EPA Region 6 (Q&A) | 2015-01 | 2026-11-25 (search excerpt) | government record | O-EPA-MINDEN | yes | EPA Jan-2017 snapshot host | Base rate (d): open burning in trays originally chosen; Army Explosive Safety Board warned M6 stability would be "significantly reduced" after Aug 2015 | Superseded by S1006 remedy. |
| S1006 | https://epa.gov/archive/epa/newsreleases/epa-approves-contained-burn-system-camp-minden-disposal.html | U.S. EPA (news release) | 2016-06-13 | 2026-11-25 (search excerpt) | government record | O-EPA-MINDEN | yes | — | Base rate (d), counterexample to OB default: EPA approved contained-burn system for ~16M lb M6 and CBI; 99.99% destruction | — |
| S1007 | https://gao.gov/assets/gao-15-538.pdf | U.S. GAO (GAO-15-538) | 2015 | 2026-11-25 (search excerpt) | government record | O-GAO-15-538 | yes | — | Base rate (d): CAD stockpile ~529,373 tons as of Feb 2015; DoD estimated +582,789 tons FY2016-FY2020 | — |
| S1008 | https://oversight.gov/sites/default/files/documents/reports/2017-12/DODIG-2018-052.pdf | DoD Inspector General (DODIG-2018-052, The Army Demilitarization Program) | 2017-12 | 2026-11-25 (search excerpt) | government record | O-DODIG-2018-052 | yes | — | Base rate (b), (d): 471,767-ton stockpile awaiting demil as of 2016-09-30; "Historically, the Army's DEMIL funding levels have not been adequate" | — |
| S1009 | https://19january2021snapshot.epa.gov/sites/static/files/2017-07/documents/radford_army_atk_consentagreement7_14_17.pdf (case summary also at https://downloads.regulations.gov/EPA-HQ-OLEM-2021-0397-0365/attachment_14.pdf) | U.S. EPA Region 3 (CAFO, Army + Alliant Techsystems Operations LLC, Radford AAP) | 2017-07 (case closed by 2017-09-25) | 2026-11-25 (search excerpts) | government record | O-EPA-R3-RADFORD-2017 | yes | EPA Jan-2021 snapshot host | Base rate (e): $203,200 civil penalty for ten counts (RCRA generator, CERCLA notification, stormwater, CAA) against Army and operating contractor | Multimedia scope; not RCRA-permit-only. |
| S1010 | https://epa.gov/sites/default/files/2017-11/documents/radfordarmyosiconsent_agreement.pdf ; https://epa.gov/va/radford-army-ammunition-plant-frs-id-110000601867 | U.S. EPA Region 3 (CAFO, Army + BAE Systems Ordnance Systems Inc., Radford AAP) | 2017-11 / 2018 | 2026-11-25 (search excerpts) | government record | O-EPA-R3-RADFORD-2018 | yes | — | Base rate (e): $279,700 civil penalty (RCRA, CWA, EPCRA, CAA) plus RCRA compliance order | Army sovereign-immunity reservation for CWA/EPCRA noted in EPA notice. |
| S1011 | https://apnews.com/article/4a4af83a47ea4a608ab28eae9f1c6412 | Associated Press | c. 2017 | 2026-11-25 (search excerpt) | news | O-AP-LAKECITY | yes | — | Base rate (f): Lake City AAP fined by OSHA in 2008, 2011, 2012; 2011 PSM "serious" penalty $28,000 initially, $5,600 paid (ATK operator) | Kansas City Star carries the same facts (same origin). |
| S1012 | https://wsls.com/news/2019/06/17/radford-army-ammunition-plant-fined-more-than-83000-in-wake-of-2018-fatal-fire | WSLS (news) | 2019-06-17 | 2026-11-25 (search excerpt) | news | O-WSLS-RADFORD-2019 | yes | — | Base rate (f): after 2018 fatal fire, OSHA cited Radford AAP for 10 serious violations; initial >$112,000, settled ~$83,000 | — |
| S1013 | https://archive.epa.gov/epawaste/hazard/web/pdf/coordmem.pdf | U.S. EPA (Memorandum, Coordination between RCRA Corrective Action and Closure and CERCLA Site Activities) | 1996-09-24 | 2026-11-25 (search excerpt) | government record | O-EPA-1996-COORD | yes | — | Pattern (g): deferral between RCRA and CERCLA is "already in general use at EPA"; at federal facilities, interagency agreements are encouraged to eliminate duplication | — |
| S1014 | https://washingtonpost.com/climate-environment/2026/11/24/warning-signs-iowa-plant-emerged-months-before-army-says-it-knew-emails-show (also yahoo.com syndication) | The Washington Post (S. Kaplan, A. Horton) | 2026-11-24 | 2026-11-25 (search excerpts only; likely paywalled) | news | O-WAPO-2026-11-24 | yes | — | Pattern (d): on 2026-02-04 an AO materiel division manager emailed MuniRem that the U.S. government was "taking another approach to lead azide disposal based on their assessment of safety risk"; Army statement: "current indications are that we were made aware in March"; Army will investigate | Same article as S609 (count once); this row records additional excerpt content. Documents reviewed by WaPo not seen. |
| S1015 | https://earthjustice.org/document/an-explosive-problem-the-radford-arsenals-toxic-operations | Earthjustice (advocacy report) | unknown (c. 2020s) | 2026-11-25 (search excerpt) | secondary commentary | O-EJ-RADFORD | no (advocacy) | — | Base rate (e): lists Radford enforcement: 2017-08-03 consent order $263,335; 2017-09-15 $203,200; 2018-01-23 CAFO $279,700 | Advocacy source; the $263,335 item not verified against a primary. |
| S1016 | https://ecfr.gov/current/title-40/chapter-I/subchapter-I/part-267/subpart-E/section-267.74 | eCFR (40 CFR 267.74 "Who sees the records?") | current | 2026-11-25 (search excerpt; ecfr.gov blocked for direct fetch in Wave 1) | primary (federal regulation) | O-40CFR267 | yes | — | Pattern (c): 267.74(a) furnishing records on request; (b) retention period extended during unresolved enforcement. S1 and S2 cite this standardized-permit section for record availability; content is parallel to 264.74 | Refines C39: citation is to the wrong Part but a real, parallel section. |
