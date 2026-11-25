# Countercase Analyst: GD-20261125-iowa-army-ammunition-plant

Prepared 2026-11-25 by the countercase-analyst subagent (Wave 3). Inputs read: `case.md` (C1-C34; C35-C46 via claim-auditor), `changelog.md`, `sources.md`, and all five modules (claim-auditor, money-mapper, timeline-analyst, harm-accountability-analyst, pattern-analyst). New ledger rows **S1100-S1111** were appended to `sources.md` (append only; no existing rows touched).

**Role.** This module builds the strongest honest case *against* the working hypotheses H1-H3. It is deliberately one-sided in what it looks for, but it does not suppress adverse evidence. Where the countercase is weak, it says so.

**Method and tools.**
- Nimble Search and Nimble Extract were used. The Nimble Web Search Agent was not used, because Wave 1 reported it unavailable (billing).
- **Read in full this session:**
  - the 8th Circuit per curiam opinion (S122), decoded from the PDF; SHA-256 f348d11b... matches the ledger;
  - S2 pp.2-3, checked against rendered page images;
  - the IPR article of 2026-11-24 (S1108);
  - the CAMEO UN/NA 0129 and 0130 pages (S1102, S1103).
- **Seen only as search excerpts:** S1100, S1101, S1104-S1107, S1109-S1111.
- **Not reachable:** ecf.ca8.uscourts.gov was refused by the proxy for curl, but the opinion was obtained through Nimble Extract.

**Hypotheses tested (all UNVERIFIED):**
- **H1.** The documents reflect lax or careless regulation that endangers the public: inconsistent limits, stale safeguards, identifier typos (44MM, UN0130), and soft notification duties.
- **H2.** The emergency detonation exposes the community to avoidable lead harm.
- **H3.** American Ordnance LLC (AO) profits heavily (about $4.7B in obligations) with little accountability for environmental and labor violations.

None of this module is a legal conclusion. "Grift" in the workflow's sense means deception for gain. No module has found evidence of deception for gain, and this module does not find any.

---

## 1. Question investigated

For H1, H2 and H3, this module asks four questions:
1. What is the strongest evidence against each hypothesis?
2. What benign or legitimate explanation fits the facts?
3. What evidence would change the conclusion, in either direction?
4. Are source conflicts or selection effects distorting the picture? This covers advocacy sources (Earthjustice and the petitioners), excerpt-only items such as the Washington Post email story, interested contractors, and single-origin repetition.

It also flags findings in other modules that go beyond their sources.

---

## 2. Findings

### Q1. What is the strongest evidence against each hypothesis?

#### H1: lax or careless regulation

1. **The "inconsistent limits" are mostly different metrics, not conflicting limits.**
   - Claim-auditor image-checked all the numbers (claim-auditor 2.2; changelog C1-C5 reframe):
     - 140 lb/hr OB and 100 lb/hr OD are the permit limits;
     - 120 and 1,000 lb/hr are closure-plan **design capacities**, used to estimate maximum inventory for closure costing;
     - 70 and 60 lb/hr are **stricter** SOP operating limits that the SOP attributes to Iowa DNR. Permit V.F.3 makes the SOP enforceable.
   - Only two genuine conflicts remain:
     - the Response to Comments says OD is 60 lb/hr. That **understates** the true 100 lb/hr limit, so it is a public-information error, not a weaker safeguard;
     - the OB permit limit (140) is above a stated design capacity (120) that appears on an application-era page.
   - OD's 100 lb/hr limit is one-tenth of the stated OD design capacity.
2. **The two identifier "typos" sit in background recitals, not in operative conditions** (S2 p.2, page image checked this session).
   - "44MM" appears in a sentence summarizing the 2018 permit's units. The very next bullet restates the operative 40mm limit correctly: two grenades per detonation, 50 per week.
   - "UN0130" appears in the description of the waste covered by the *September* storage permit. The same block gives the correct name (Lead Azide), the correct CAS number (13424-46-9) and the correct waste codes (D003, D008).
3. **UN0130 and UN0129 lead to the same emergency response** (S1102, S1103, read in full).
   - Both are Hazard Class 1.1A.
   - Both are assigned **ERG 2024 Response Guide 112**. NOAA notes that the ERG assigns explosives to guides by division, not by name.
   - A first responder reading either number gets the same isolation and evacuation guidance.
   - The DOT Hazardous Materials Regulations govern transportation in commerce. Movements solely within a restricted-access facility are non-regulated (S1104).
   - Every party agrees this material will not be moved off-site (S122; S2 p.1-2). So the UN number is not an operative safety control in this permit. Applying S1104 to this case is an inference; no legal review was done.
4. **The stale items are disclosed, and the attached SOP is newer than the one cited.**
   - The 2007 risk assessment and the funding condition on a new one are stated openly in the RTC (C6).
   - Condition V.F.3 cites SOP Rev 6 (2000/2006), but the SOP physically attached is **Rev 8 (2015) with Change 2 dated May 2018** (C7; timeline 2.3). The operative document is therefore current; only the citation lags.
   - Missing alternatives assessments are the national norm. As of April 2023, 41 of 67 OB/OD facilities had not done one (S1000).
5. **The limits are enforced.**
   - EPA detected the 2023 OB exceedance and the chamber problems, penalized the Army and AO, and reports a return to compliance (S113/S10).
   - Iowa DNR's 2022 Title V inspection noted "No Deficiencies" (S115).
   - EPA accepted Iowa DNR's 2018 comment and changed the permit text (harm-accountability B2).
   - The 2018 comment period ran 51 days, longer than the 45 days stated (C10).
6. **The "soft" duties sit inside a frame of hard ones.**
   - "Reasonable best efforts" (C33) applies only to two things: scheduling so as to minimize deposition in the named tracts, and notifying the potentially affected public.
   - These deadlines are mandatory: a 5-day forecast, a 48-hour notice, a 6-hour notice, hourly updates, and a +6-hour report (IV.G.1); the weather exclusions in IV.O.3; sampling within 24 hours at ≥100 µg/ft²; and a 30-day impact report (claim-auditor C33; harm F4).
   - The Army issued the 5-day advisory, a FEMA wireless alert, and evacuation or relocation assistance within 5 miles (S1100, S130). It also postponed twice, citing weather.
7. **S2 adds corrective action beyond the fence line.**
   - S2 p.3 requires the permittee to take corrective action for releases "both on the Permitted Facility and beyond the Permitted Facility boundary" (42 U.S.C. 6924(u)-(v)).
   - The 8th Circuit found that EPA "adequately incorporated safeguards" (S122).

#### H2: avoidable lead harm from the detonation

1. **Even the petitioners concede the point that matters for November 2026.**
   - IEC's general counsel said detonation "may now be the only feasible option because the problem was allowed to persist" (S1108, read in full).
   - The adverse party's dispute is about *how the hazard arose*. It does not claim a safer option existed in November.
2. **The court framed the real comparison** (S122, read in full). The choice is between a controlled detonation and an unplanned explosion, "not between the risk of a controlled detonation and no explosion at all".
   - The record shows:
     - the material is friction-sensitive and cannot be moved;
     - freezing temperatures raise the risk of a chain reaction across barrels;
     - a planned detonation allows weather selection, advance notice and an immediate response.
   - The court found EPA's reliance on the Army's explosives experts reasonable. It also found that the Army evaluated "a full range" of alternatives: on-site chemical treatment, closed-chamber thermal treatment, relocation, and in-place detonation.
   - This was a ruling on the stay motion only, not on the merits.
3. **The permit adds protection compared with what was legally available without it.**
   - EPA filed notice that the Army could detonate under RCRA's munitions emergency exclusion even without S2 (40 CFR 264.1(g)(8)(i)(D) and 270.1(c)(3)(i)(D); S122; S124). The court did not rule on that point.
   - If the exclusion applies, S2's conditions add to the protections rather than replacing stricter ones: EF 1.00 modelling, timed notices, sampling, and corrective action beyond the boundary.
4. **The plume maps are deliberately conservative** (S2 p.3, page image read).
   - EPA states that technical experts from both agencies agree the modelling "is not necessarily representative of actual conditions".
   - EPA acknowledges the Army's judgment that the real airborne release will be below 100%. Because the reduction from mitigation could not be quantified, EPA chose a conservative Emission Factor "to ensure that the prior notifications are maximally protective".
   - The Army cites the last large lead azide disposal, about 7,000 lb in the open in Colorado in 1977 with "zero mitigation", where about 75% of the lead stayed on site (S1101). This is an Army statement from a single origin and has not been verified against a primary record.
   - If roughly representative, it suggests the published isopleths assume about four times the airborne fraction seen without mitigation, before counting the sand barriers, water walls, gel blocks and foam (S1100, S1101).
5. **Scale arithmetic (inference, for context only).**
   - Lead azide is about 71% lead by mass (Pb 207.2 / Pb(N3)2 291.2).
   - If the DOJ figure of 9,773.5 lb (S20) is net lead azide, it contains about 6,950 lb of lead (about 3.5 short tons). At the 1977 airborne fraction of 25%, about 0.9 short tons would go airborne.
   - EPA estimates piston-engine aircraft emitted about 470 tons of lead to U.S. air in 2017 (S1111). On those figures this event equals well under 1% of one year of aviation lead nationally.
   - This does **not** make it safe, because the release is concentrated in one place and time.
   - For soil: 100 µg/ft² (about 1,076 µg/m²) mixed into the top 1 cm of soil adds roughly 0.08 mg/kg. That is far below EPA's 400 ppm soil-lead hazard for play areas (S126).
   - The pathways that matter are surface dust and indoor infiltration, and the permit's wipe sampling and advisories target exactly those (harm F4).
6. **Independent checks exist.**
   - EPA is doing its own sampling and has a field team on site.
   - There is an Army claims process, and filters will be provided if water lead exceeds the action level (S121).
   - An IPR headline (not read) reports University of Iowa researchers deploying air sensors and soil sampling before and after the blast.
   - The local mayor supports the detonation (S1108).

**Where the countercase on H2 is weak (stated honestly).** "Avoidable" may be true of the **storage history**, not of the November decision. The adverse facts are:
- the material was stored for decades (S122);
- the stabilizing liquid was unchecked and unreplenished from September 2025, according to the government's own brief as reported (S1108);
- a joint Army, JHU APL and EPA panel recommended chemical neutralization on 2026-03-19, according to a timeline supplied by MuniRem (S1108);
- the Secretary of the Army chose detonation on 2026-05-08, and treatment work was dropped six days later (S1108);
- DoD was concerned about deteriorating lead azide at IAAP as early as 2004 (S94), although it is not established that this was the same inventory.

Nothing found rebuts the proposition that earlier disposal could have avoided the plume. The Army has said it will investigate (S1014).

#### H3: heavy profits, little accountability

1. **Obligations are not profit.**
   - The $4.72B figure (FY2008-FY2026) is gross contract obligations for munitions production and site services (money-mapper F16, F18).
   - In FY2023, $1.15B of the $1.25B came from *Procurement of Ammunition, Army*, alongside the 155mm surge and orders labelled for Ukraine (money-mapper F17; S46).
   - The site-services channel (BOA W52P1J-09-G-0001, $805.6M over 698 orders) is cost-plus-fixed-fee. By statute, a CPFF fee may not exceed 10% of estimated cost (S1107).
   - Even at that cap, fee on the BOA would be at most about $73M across 18 years. That is a ceiling computed by inference; the actual fee is unknown.
   - AO's actual margin is not public. Day & Zimmermann is privately held (money-mapper F20). "Profits heavily" is therefore untested, not shown.
2. **Under the GOCO structure, the Army carries cleanup liability by design.**
   - The government owns the plant (money-mapper F12).
   - GAO reported that the Secretary of the Army approved P.L. 85-804 indemnification of ammunition-plant operators against environmental liability. Army officials said the Army pays cleanups directly from its own funds (S1105, 1997; current contract terms unknown).
   - Cleanup at IAAP runs through the DERP, FUSRAP and the CERCLA FFA (harm E1).
   - So the absence of contractor-paid cleanup is a policy choice by the government. It is not evidence that AO evaded anything.
3. **Accountability mechanisms have in fact been used against AO.**
   - EPA penalty of $39,311, paid jointly with the Army (S113).
   - DOL Wage and Hour: $678,296 in back wages to 63 workers (S605).
   - OFCCP: $50,000 (S604).
   - OSHA citations in 2006, 2019 and 2024 (S110-S112).
   - These are peer-typical in frequency and size. Radford's CAFOs were $203,200 and $279,700. Lake City's 2011 OSHA penalty was cut from $28,000 to $5,600 (pattern e, f; S1009-S1012).
   - Per alleged violation, the IAAP penalty is about $13,100. That is within the per-violation ranges of EPA's RCRA penalty matrix, which scales with potential for harm and extent of deviation, not with contractor revenue (S1110). Placing it in a specific cell needs the CAFO.
4. **No fraud or court findings.**
   - Searches found no False Claims Act case, DOJ settlement, qui tam action or court judgment against AO (money-mapper F25; harm E3).
   - AO's only reported court outcomes are as claimant, including winning title to the Line 3A equipment (S47).
   - Absence in web searches is not proof of absence. PACER was not searched.
5. **AO was not paid for the lead azide response.**
   - The 2026 lead-azide money ($3.86M) went to MuniRem, PIKA and Cape-Weston (money-mapper F29).

**Where the countercase on H3 is weak.**
- Indemnification and cost-reimbursement mean AO bears little direct financial consequence for environmental outcomes (money-mapper 2.5, inference).
- Nobody knows how the $39,311 was split, or whether it was charged back to the government.
- S2 names only the Army.
- Whether AO had contractual responsibility for surveillance of the lead azide storage is unknown. The WaPo report that AO inspected the drums each September (S609) bears on this.

### Q2. What benign or legitimate explanation fits the facts?

| Observation | Benign explanation | How well it fits |
|---|---|---|
| 140/100 vs 120/1,000 vs 70/60 lb/hr (C1-C5) | Three metrics in one packet: permit limit, design capacity (application-era page), and an SOP or air-permit limit. The RTC's "OD 60" is most likely a transcription error from the SOP's 60 lb/hr OB figure (claim-auditor 2.2). | Strong for most items; the 140 > 120 gap is unexplained |
| "44MM" (C20-C22) | Typo in a recital; the next bullet gives 40mm; S1 never says 44mm | Strong |
| UN0130 (C23-C25) | Transcription error in the waste-description block. The Army EA says the material was stored wetted in water and ethanol (S22; S122), which fits UN0129. The class (1.1A) and ERG Guide (112) are the same. No transport is planned. | Strong for safety consequence; the cause is still unconfirmed (C25 lead-styphnate hypothesis not excluded, because contents detail is redacted) |
| Wind clause "and" (C30) | Drafting slip; purposive reading would be "or"; other weather exclusions still operate | Moderate. This sits in an **operative** condition and is the most consequential drafting error found. |
| 2007 risk assessment and missing TAR (C6, C9) | Army demilitarization and environmental funding "historically" inadequate (S1008); a national majority lacked alternatives evaluations (S1000) | Moderate: explains the delay but does not excuse it |
| Rev 6 cited, Rev 8 attached (C7) | Citation lag; RTC item 5 accepted the revised SOP | Strong |
| "Draft" metadata, 2025 posting path (C12) | Bulk re-posting of about 55 Subpart X permits (S70) | Strong |
| Superfund redirection in the RTC (C13, C15) | Standard RCRA/CERCLA deferral (S1013) under the 1990 FFA | Strong as policy; separate from whether CERCLA progress is adequate |
| Army-only permittee (C26) | Army EOD (71st EOD Group) executes the treatment; the Secretary of the Army chose the method (S608, S1101) | Strong |
| Effective before signature (C32) | Emergency permits can be oral and then confirmed in writing (40 CFR 270.61) | Moderate |
| Serial 90-day storage permits | EPA itself describes this practice as common for deteriorating energetics (S1000) | Strong |
| $4.72B obligations | Munitions procurement during the 155mm surge; GOCO operator of the main U.S. artillery load-assemble-pack line (money-mapper F17) | Strong |
| Small penalties | Per-violation statutory penalty policy; peer-typical | Strong |
| Sept 2025 neutralization request; Feb 2026 email (S21, S609, S1014) | Routine disposal planning for stock no longer needed for production (S87). In February the government chose "another approach" *because* of a safety assessment, which is consistent with prudence rather than concealment. | Partial. The MuniRem CEO's claim of an August 2025 instability warning (S1108) would, if verified, weaken this explanation. |

The overall benign reading: a legacy-contaminated GOCO site under template-heavy permits with ordinary-to-weak quality control, plus one serious storage failure that produced a genuine emergency. The record does not support deception for gain by EPA, the Army or AO.

### Q3. What evidence would change the conclusion?

**Toward H1/H2/H3 (strengthening the hypotheses)**
- Post-detonation data:
  - EPA, Army or University of Iowa sampling showing deposition or indoor dust above the modelled isopleths;
  - residential results above 5 µg/ft² (floors) or 40 µg/ft² (sills);
  - lead in drinking water above the action level.
  - Any of these would undercut the EF-1.00 conservatism argument.
- Surveillance records showing recrystallization was observed at or before the September 2025 inspection; or verification of MuniRem's August 2025 warning (S1108). Either would make the 6-month notification gap a real failure rather than a dispute.
- Independent technical review (for example DDESB or JHU APL) concluding chemical neutralization was feasible in May 2026. That would make the detonation avoidable at the decision point, not only historically.
- Evidence that the drums contain lead styphnate or mixed initiators. That would mean the UN0130 entry was a real misidentification affecting the basis of S2.
- The Condition II.C.4 modification log showing the OD/40mm SOPs, Technology Assessment Reports and new risk assessment were never submitted.
- The CAFO showing a large or repeated OB exceedance.
- AO's contract making it responsible for storage surveillance, with evidence of non-performance.
- An IG, FCA or GAO finding on AO billing.
- The penalty being charged back to the government as an allowable cost.

**Against H1/H2/H3 (strengthening the countercase)**
- Measured deposition well below the modelled isopleths (expected if the 1977 analogue holds).
- The modification log showing the deferred deliverables were delivered.
- An Army investigation confirming that instability was first known in March 2026.
- Contract documents placing storage surveillance with the Army.
- Fee data showing a modest margin.
- The CAFO showing a minor, single-event exceedance.

### Q4. Do source conflicts or selection effects distort the picture?

1. **Advocacy sources.** Earthjustice, IEC and Sierra Club are adverse parties: S19, S20, S81, S123 and S1015 (Radford, advocacy report).
   - Their notice-timing allegations are partly corroborated by EPA's own dates (S118, S119).
   - Their merits claims did not persuade the court at the stay stage (S122).
   - The "100 miles or more" plume framing comes from the petitioners' motion (quoted in S122). WaPo repeats it, attributing it to Army models (S1109). The Army's own model put ≥5 µg/ft² deposition over about **148 sq mi** and ≥100 µg/ft² over about 27 sq mi (S129).
   - "100 miles" therefore describes the outer reach of the lowest airborne contour, not where meaningful deposition is predicted. Cite it with that context.
2. **The Washington Post email story** (S609, S1014, S1109): excerpt-only, one origin.
   - The S609, S1014 and S1109 rows are one article, seen through syndications and snippets. The emails themselves were not seen.
   - The excerpts do not say who supplied the documents. IPR's parallel story relies on "documents and a timeline shared with IPR by" MuniRem (S1108).
   - MuniRem had its treatment work dropped in May 2026, so it has a commercial and reputational interest. It is plausible, though not established, that both stories trace to the same source.
   - Weight: a lead to verify, not a finding.
3. **Interested-party symmetry.** Army statements also carry interest: the 1977 analogue, mitigation efficacy, "made aware in March", and "no viable alternative" (S1101, S1108, S1014). The countercase relies on some of them. They should get the same discount as MuniRem's and the petitioners' claims.
4. **Single-origin repetition in the ledger.** Several sources appear under more than one ID. Count each once:

   | Underlying source | Ledger IDs |
   |---|---|
   | The 8th Circuit opinion | S18, S79, S122 |
   | The 2024 EPA release | S10, S113 |
   | The DOJ opposition | S17, S82 |
   | One CNN article | S35, S128, S610 |
   | WaPo | S609, S1014, S1109 |
   | The SAM notice, via Midland Monitor | S21, S24, S95 |
   | The Army press conference (five outlets) | S1101 |

   Several "corroborations" in Wave 1 are the same origin counted twice.
5. **Selection in the document review.** S1 (287 pages) and S2 were searched specifically for errors, and no base rate exists for EPA permit error rates (pattern c). A long scanned permit will always yield a list of defects. The count needs a denominator, for example a comparison against another Region 7 Subpart X permit, before it can support "careless".
6. **News-cycle concentration.** Most S2-era sources fall in a 10-day crisis window (Nov 15-25) and lean on the same Army, AP and EPA statements. Political statements (S1108) are not evidence about the facts.
7. **Excerpt dependence and access gaps.**
   - ATSDR, OSHA, the CAFO docket, the SAM notice and the 2021 Five-Year Review were seen only as excerpts or mirrors.
   - ECHO and PACER were not accessible.
   - The enforcement record may be incomplete in **both** directions.

### Overreach flags (findings in other modules that go beyond their sources)

| # | Module and finding | Problem | Suggested fix |
|---|---|---|---|
| 1 | timeline-analyst, 2004 row: "Lead azide degradation documented 22 years before the 2026 emergency" | S94 documents DoD *concern* about a deteriorating 40-year-old IAAP stockpile. Its identity with the 2026 drums is unknown, and AP reports those drums were transferred from Texas in 2009 (S90). The row's own note admits this, but the headline implies the same inventory. | "DoD concern about deteriorating lead azide at IAAP in 2004; link to the 2026 drums not established." |
| 2 | timeline-analyst 2025-09-09 ("Six months before the 'discovery'", with scare quotes); claim-auditor C27 ("at least 6 months of documented awareness before notification") | The SAM notice (S21, excerpt) documents a neutralization or disposal *requirement*, not awareness of instability. The Army says the stock was no longer needed for production (S87). Awareness of instability before March rests on excerpt-only WaPo (S1014) and an interested party (MuniRem, S1108), and the Army disputes it. | "Disposal planning documented from Sept 2025; earlier awareness of instability alleged in news and by MuniRem; disputed by the Army." |
| 3 | pattern-analyst (c), "Safety-relevant subset (5)" | UN0130 sits in a recital, with the same class and ERG guide (S1102, S1103) and no transport (S1104). RTC "OD 60" understates the limit: a disclosure error, not a weaker safeguard. VI.G.1.c's reversed purpose sentence does not change the sampling obligation. | Safety-relevant: wind "and" (C30) and VI.G.4's groundwater omission. Disclosure-accuracy: RTC OD 60. Low consequence: UN0130 and VI.G.1.c. |
| 4 | pattern-analyst (d): the Feb 2026 timing gap is "documented in news reporting of AO emails" | The source is excerpt-only and single-origin. The module does caveat it, but the word "documented" overstates. | "Reported" |
| 5 | timeline-analyst 2020-03-02: "the OB limit was temporarily raised ~21x" | Accurate numerically, but the base permit limit was not changed. It was a separate 90-day emergency permit for one 60,000 lb lot of propellant judged unsafe to store or ship (S72, S1003). | Describe as a separate emergency authorization |
| 6 | timeline-analyst 2006-12-21: "The 2018 permit rests on a 12-year-old application" | RTC item 5 records revised SOP, WAP and closure-plan submissions in 2018. The attached SOP is Rev 8, Change 2 (May 2018). | "Base application from 2006, supplemented in 2018" |
| 7 | claim-auditor C30: "the wind-speed restriction is void" | The clause is inoperable as written, but the other weather exclusions in IV.O.3 still apply, and the module itself notes a purposive reading. | "Inoperable as literally written" |
| 8 | claim-auditor C14: "now a monitoring gap" | PFAS is under active CERCLA investigation as OU13 (S100, S101). The gap is in the RCRA permit's analyte list, not necessarily in monitoring at the site. | "Gap in the RCRA permit analyte list; PFAS handled under CERCLA OU13" |
| 9 | money-mapper F28, "Who benefits: ... obligations on the Army rather than on the contractor" | Implies a benefit to AO. The Army, through its EOD unit, is the party performing the treatment (S608, S1101), so the designation tracks who acts. | Keep as an observation and drop the benefit framing, or pair it with this explanation |
| 10 | harm-accountability F3, quoting the parties' agreement that the detonation "will result in harm" | Accurate, but in S122 that sentence leads directly into the court's comparison with an uncontrolled explosion. Quoting it alone overstates its force. | Quote with that context |
| 11 | case.md H3, "profits heavily, about $4.7B" | Money-mapper states plainly that these are obligations, not profit or outlays (F16, F18). No source gives AO's margin. | "$4.7B in obligations; profit unknown" |

---

## 3. Contrary evidence (against this countercase)

- **Storage failure is the strongest adverse fact, and it is unrebutted.**
  - The material was stored for decades (S122).
  - The stabilizing liquid was unreplenished after September 2025 (S1108, the government's brief as reported).
  - In March 2026 a panel recommended neutralization, which was dropped in May (S1108, from a MuniRem timeline).
  - DoD raised concern in 2004 (S94).
  - The countercase defends the November choice, not the history that made it necessary.
- **Notice and coordination.**
  - The public got 5 days' notice of the original date.
  - EPA posted the third storage permit 35 days after issuance (S118).
  - Iowa HHS, Iowa City and Illinois reported late or no notice (S117, S135, S95).
  - These are documented facts, not just allegations.
- **Thresholds.** The 100 µg/ft² sampling trigger is 20 times the floor action level. Areas between 5 and 100 µg/ft² get advisories but no mandated sampling, and properties without Rights of Entry get none at all (harm F4).
- **The wind clause.** The "and" error sits in an operative weather condition (C30). S2 also dropped S1's clause barring smoke over publicly accessible areas.
- **Contractor accountability is thin by design.** Indemnification and cost reimbursement blunt the financial consequences for AO (S1105; money-mapper 2.5).
- **Many deferred 2018 deliverables have no public trace:** the OD/40mm SOPs, the inspection schedule, the TAR and the new risk assessment (claim-auditor C36-C38; pattern b).
- **The countercase leans on Army claims too.** The 1977 analogue and mitigation efficacy (S1101) come from the agency whose conduct is at issue.

---

## 4. Confidence and limitations

**Overall confidence: medium.** Confidence varies by hypothesis:
- **H1, identifier typos (44MM, UN0130): high** that their safety consequence is low. Page images were checked, and the ERG and class equivalence was confirmed in full-page reads.
- **H1, limits: high** that most of the apparent inconsistency is a metric mismatch. This draws on claim-auditor's image checks.
- **H1, stale safeguards: medium.** They are disclosed and typical nationally, but delivery has not been verified.
- **H2, the November decision: medium-high.** The court opinion was read in full, the petitioners' counsel made a concession, and the EF 1.00 text was read on the page image.
- **H2, the storage history: low** for the countercase, as the adverse facts are unrebutted.
- **H3, profit: medium** that obligations overstate profit. The actual margin is unknown.
- **H3, accountability: medium.** The mechanisms exist and are peer-typical, but they are structurally weak for the contractor.

**Limitations**
- The detonation outcome was **unconfirmed** as of the last search on 2026-11-25. Post-blast data could reverse the H2 countercase.
- The 1977 Colorado analogue rests on one Army statement (S1101), not a primary record.
- GAO's indemnification finding dates from 1997 (S1105). AO's current contract text is not public.
- The scale and soil arithmetic is the module's own inference, using stated assumptions. It is not a risk assessment.
- The 10% fee figure is a statutory ceiling for CPFF, not AO's fee. Fixed-price production margins are unknown.
- WaPo, the CAFO, SAM, ECHO, PACER and the S2 administrative record (the Army's 12 Aug and 4 Sep 2026 letters, and the EPA approval memo) were not read.
- Applying the HMR scope (S1104) to this case is an inference, not legal advice. Qualified legal review is recommended before publishing any conclusion on regulatory adequacy.

---

## 5. Next best research action

Obtain the S2 administrative record from EPA Region 7, by request or from the 8th Circuit record in No. 26-3374. The items needed are:
- the Army's 2026-08-12 and 2026-09-04 alternatives letters;
- the EPA approval memo;
- Col. Teller's sworn declaration;
- the government brief describing replenishment of the storage liquid.

These documents decide the one question the countercase cannot answer: whether chemical neutralization was still feasible when it was dropped in May 2026, and when instability was first known. That is the crux of H2's "avoidable" claim and of the notification-gap dispute.

Second priority, time-sensitive: once posted, collect EPA's sampling results (response.epa.gov site 17211), the Army's +6-hour plume report and University of Iowa data. Compare measured deposition with the EF 1.00 isopleths.
