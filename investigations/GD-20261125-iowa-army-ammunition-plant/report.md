# Grift Detective Investigation Report

**Case ID:** GD-20261125-iowa-army-ammunition-plant
**Subject:**
- (1) EPA Region 7's RCRA Hazardous Waste Management Permit for the Iowa Army Ammunition Plant (IAAP/IAAAP), Middletown, Iowa. Final 28 Sep 2018; posted at epa.gov under a 2025-05 path (S1).
- (2) EPA Region 7's Emergency Permit for Storage and Treatment of Lead Azide, effective 13 Nov 2026 – 11 Feb 2027 (S2).
- (3) The plant's operator, American Ordnance LLC.

**Investigation date:** 2026-11-25
**Scope / jurisdiction:** US federal (EPA, Army, DoD contracting, DOT/PHMSA); Iowa. Site history 1940–2026.
**Question investigated:**
- What red flags, inconsistencies, or dangerous or harmful matters do the two documents contain or reveal?
- Who is American Ordnance LLC, and when was it formed?
- How much federal funding has it received?

**Materials reviewed:**
- S1, read in full via OCR, with key pages checked against page images.
- S2, all 26 pages read as images.
- 49 CFR 172.101 (S3).
- About 230 ledger sources, including EPA notices and letters, the 8th Circuit opinion (No. 26-3374), USAspending recomputations, DOL and OSHA records, ATSDR, and news.

**Research limitations:**
- Many secondary sources were seen as search excerpts only. The Washington Post article was read via full syndicated text.
- Archive services (Wayback, perma.cc, archive.ph) were unavailable, so SHA-256 hashes were recorded instead.
- Not obtained:
  - the full CAFO text (RCRA-07-2024-0092);
  - the full 1999 ATSDR assessment;
  - the Delaware formation record;
  - American Ordnance's contract text and fee terms;
  - the emergency permit's administrative record.
- The Nimble Web Search Agent was unavailable.
- **Whether the 25 Nov 2026 detonation occurred, and its results, was unconfirmed at the time of writing.**
- All seven modules ran as separate subagents. Some ledger-ID collisions between parallel agents were resolved (see changelog).

---

## 1. Executive finding

**The two EPA documents contain real errors, but nothing in the record shows deception, and most of the "inconsistent limits" compare different kinds of numbers.**

Documented errors:
- **S2 calls the grenade unit "44MM".** The 2018 permit and S2's own next sentence say 40mm. 40mm is correct.
- **S2 gives lead azide the shipping number UN0130**, which 49 CFR 172.101 assigns to lead *styphnate*. Wetted lead azide is **UN0129**, and dry lead azide is Forbidden for transport.
- **S2's binding wind restriction is impossible as written:** "less than 1 mph **and** more than 15 mph".
- **S1's Response to Comments says open detonation is limited to 60 lb/hr.** The permit condition says 100 lb/hr.
- **S1's 140 lb/hr open-burning limit exceeds the unit's own stated 120 lb/hr design capacity.**
- **S1 cites an outdated SOP revision** (Rev 6 instead of the attached Rev 8) and attaches **blank placeholder SOPs** for open detonation and the 40mm unit.

**The most serious matter is not a typo. It is how the lead azide was handled for years.** About 9,800 lb of lead azide in 68 drums was stored "for over two decades" in a water/ethanol solution and recrystallized into a shock- and friction-sensitive state. Earlier warning signs are documented or alleged:
- DoD concern about a deteriorating stockpile (2004);
- a federal solicitation seeking neutralization (Sept 2025);
- a chemical-neutralization contract cancelled in May 2026;
- a February 2026 operator email, reported in the press.

By November the only option left was an in-place open detonation that **EPA itself expects to release lead off-site**. The permit's soil and wipe sampling starts only at 100 µg/ft², twenty times the advisory level. The 8th Circuit declined to stop the detonation (23 Nov 2026), framing the choice as a controlled versus an uncontrolled explosion.

**American Ordnance LLC:**
- Formed in 1998 as a Mason & Hanger / General Dynamics Ordnance Systems joint venture.
- Day & Zimmermann says it has owned 100% of the company since 2007.
- Still IAAP's operator: its facility contract runs to 25 Dec 2030.
- **$4.72 billion** in federal contract obligations, FY2008 – FY2026 (partial). This is obligated money, not profit. FY2023 was the peak at **$1.25 billion**.
- Formal findings against it are modest:
  - a **$39,311** EPA consent settlement (with the Army) for 2023 permit violations, including open burning above limits;
  - two Department of Labor settlements: **$50,000** (2017) and **$678,296** (2018, Milan, Tennessee);
  - OSHA citations, including the 2006 fatal-explosion inspection.
- **It received none of the 2026 lead-azide treatment money.**

**Key uncertainty:** whether chemical neutralization was still feasible when it was dropped in May 2026, and when the instability was first known. Only the emergency permit's administrative record can answer that.

## 2. How the operation works

- **Structure.** IAAP is a government-owned, contractor-operated (GOCO) plant. The Army owns it and American Ordnance runs it under a facilities contract (S1). The plant loads, assembles and packs munitions. Its waste explosives are destroyed on site by open burning (OB) in pans and open detonation (OD) in pits and in a 40mm grenade chamber, under a 10-year RCRA permit: issued 28 Sep 2018, expiring 28 Sep 2028 (S1, S71). Past contamination is handled separately under Superfund (S1 p.1-2).
- **Emergency route.** When material is too unstable to keep or ship, the Army asks EPA for 90-day emergency permits under 40 CFR 270.61:
  - 2020: one 60,000-lb lot of unstable propellant, with open burning allowed up to 3,000 lb/hr (S72, S1003).
  - 2026: three emergency storage permits (2 Apr, 30 Jun, 29 Sep), then the 13 Nov treatment permit (S121, S2).
- **2026 lead azide sequence:**
  - 24 Sep 2025: the operator asks MuniRem to "neutralize and dispose" of 68 drums (S1109, WaPo).
  - 4 Feb 2026: an operator email says the government is taking "another approach ... based on their assessment of safety risk" (S1109).
  - 12 Mar 2026: plant pause; EPA notified (S121).
  - 26 Mar 2026: MuniRem contract awarded; cancelled about two months later (S44, S1109).
  - 8 May 2026: the Secretary of the Army selects detonation (S1108, as reported).
  - Sep – Nov 2026: permit application and EPA comments.
  - 13 Nov 2026: emergency permit issued.
  - 20 Nov 2026: administrative stay.
  - 23 Nov 2026: stay denied (S122).
  - 25 Nov 2026, about 9:00 a.m. CT: planned detonation (S1300, S1301).

## 3. Claim audit

| ID | Claim | Evidence for | Evidence against | Status | Confidence |
|---|---|---|---|---|---|
| C1 | RTC: "open detonation is limited to 60 pounds per hour" | S1 p.2 (image-verified) | Permit VI.E.2 says 100 lb/hr; no condition says 60 | **Inconsistent:** the RTC misstates (understates) the permit | High |
| C2/C3 | Permit limits: OB 140 lb/hr (V.F.2), OD 100 lb/hr (VI.E.2) | S1 pp.57, 65 (images) | — | Documented | High |
| C4 | Closure plan: OB design capacity 120 lb/hr; OD 1,000 lb/hr | S1 p.194 (image) | A design capacity is not an operating limit | Documented. **The 140 lb/hr permit limit exceeds the stated 120 lb/hr design capacity** | High |
| C5 | SOP: 70 lb/hr propellant (35/pan), 60 lb/hr explosives (30/pan), 208 hr/yr, "mandated by" Iowa DNR | S1 p.200 | The Iowa DNR mandate is the SOP's own statement, not checked against a DNR permit | Documented; attribution limited to the SOP | High (numbers) |
| C6 | 2007 OB/OD risk assessment; new one awaits Army funding | S1 RTC | No later risk assessment found publicly | Documented; no update found | Medium |
| C7 | V.F.3 cites SOP Rev 6 (2000/2006); the attached SOP is Rev 8 (2015/2018) | S1 pp.57, 200 | — | **Inconsistent** | High |
| C36 | OD SOP (Att. VI-1) and 40mm SOP (Att. VII-1) are blank "to be incorporated" placeholders | S1 pp.223-224 | Later incorporation unknown | Documented as of Sept 2018 | High |
| C9 | Technology Assessment Report on alternatives to OB due from ~Sept 2022 | S1 V.K | None found publicly. Base rate: 41 of 67 OB/OD sites had not evaluated alternatives as of Apr 2023 | Unknown whether submitted | Medium |
| C12 | S1 PDF metadata says "Draft" though the content is final; posted under 2025-05 | PDF metadata; most Subpart X permits share the 2025-05 path (bulk upload) | — | Documented; benign | High |
| C13/C14 | Superfund handles past releases; no PFAS in permit text | S1; EPA profile (PFAS is OU13) | PFAS is handled under CERCLA OU13 | The gap is in the RCRA analyte list, not in site oversight | High |
| C19 | "IAAAP" is a typo | — | It is the official acronym | **Withdrawn** | High |
| C20-C22 | S2 says "44MM Grenade Treatment Unit"; S1 and S2's next bullet say 40mm | S2 p.2; S1 throughout (0 hits for 44MM) | Appears in background text, not an operative condition | **Typo; 40mm is correct** | High |
| C23-C24 | S2 lists lead azide (CAS 13424-46-9) as "1.1A, UN0130" | S2 p.2; S3: UN0129 = lead azide, wetted; UN0130 = lead styphnate, wetted; dry lead azide Forbidden | Same class (1.1A) and ERG Guide 112. The material is not to be transported. It appears in a recital | **Incorrect identifier; low operational consequence** | High |
| C25 | Explanations for UN0130 | Army EA: stored wetted in water/ethanol, which fits UN0129 (S22, S122) | Contents line is redacted | Most likely a transcription error; unverified | Medium |
| C26 | S2 names the Army as "owner and operator" | S2 p.1 | AO still operates IAAP (contract to 2030; WaPo; D&Z). The Army's EOD unit performs the treatment | Wording reflects who performs the treatment; **no operator change** | High |
| C27 | Prior storage history | EPA letter: first emergency storage permit 2 Apr 2026, second 30 Jun, third 29 Sep (S121) | S2 mentions only the September permit (it never says "first") | **S2 omits the April and June permits.** Pre-2026 storage status is unresolved | High |
| C28 | EPA "imminent and substantial endangerment" finding; in-place detonation with charges and accelerant | S2 pp.1, 9 | — | Documented | High |
| C29 | Thresholds: advisory ≥5 µg/ft²; sampling ≥100 µg/ft² (only at parks, public facilities and Rights-of-Entry properties); air contour 0.18 µg/m³; EF 1.00 | S2 pp.3, 16, 22-24 | 5 and 100 match EPA's indoor floor and window-trough action levels (indoor wipe standards, not outdoor deposition). 0.18 µg/m³ is not comparable to the 0.15 µg/m³ 3-month NAAQS. Census tracts are areas where deposition is to be minimized, not predicted zones | Documented; protectiveness contested | High (text) / Medium (adequacy) |
| C30 | Wind condition: "less than 1 mph **and** more than 15 mph" | S2 p.13 | EPA's letter describes it as winds "not to exceed 15 mph" (S121); other weather exclusions still apply | **Inoperable as literally written**; drafting error in an operative condition | High |
| C31 | Other drafting slips: Section 13 named two ways; "Direct Approval"; "UFP-QAA"; a 2026 contingency plan "included in" the 2018 permit | S2 pp.4, 8, 17-21 | — | Documented, minor | High |
| C32 | Effective 00:00 13 Nov 2026; signed 13:04 | S2 pp.1, 19 | — | Documented, minor | High |
| C33 | "Reasonable best efforts" for scheduling and public notification | S2 pp.9, 23 | — | Documented | High |
| C34 | RCRA shield excludes violations before 13 Nov 2026 | S2 p.4 | Standard clause | Documented | High |
| C16-C18 | AO identity and funding | See §4 | — | Answered | Medium-high |

## 4. Money and incentives

**Documented flows (USAspending, recomputed exactly; S40, S41):** $4,715.65M in obligations to American Ordnance, FY2008 – FY2026, across four registrations:
- $4,258.61M through the Iowa registration (QHL5);
- $422.31M through the Milan, TN registration (NTPE);
- $21.12M direct (LM5H);
- $13.61M through the Milan legacy registration (WMTS).

| FY | $M |
|---|---|
| 2008 | 44.6 |
| 2009 | 176.9 |
| 2010 | 115.8 |
| 2011 | 91.6 |
| 2012 | 96.9 |
| 2013 | 97.1 |
| 2014 | 61.0 |
| 2015 | 77.9 |
| 2016 | 97.3 |
| 2017 | 169.3 |
| 2018 | 317.4 |
| 2019 | 301.7 |
| 2020 | 329.0 |
| 2021 | 142.6 |
| 2022 | 179.9 |
| **2023** | **1,252.0** |
| 2024 | 545.7 |
| 2025 | 348.8 |
| 2026* | 270.2 |

\*FY2026 is incomplete. Three September 2026 DoD actions ($23.6M, $15.5M, $12.6M) are not yet loaded. One is an "equitable adjustment for costs sustained during a shutdown" (S63-S65).

- Nearly all of the money is Army funding awarded through ACC-Rock Island.
- The facilities contract W52P1J-09-E-0001 runs 2008-10-02 to **2030-12-25** (S43).
- The site-services BOA W52P1J-09-G-0001 is cost-plus-fixed-fee, $805.6M over 698 orders (S1107).

**Disclosed relationships:**
- AO is a Delaware LLC per a 2002 agreement and a 2007 FTC complaint; the Delaware record was not checked.
- It registered in Iowa as a foreign LLC on **1998-06-10** (entity 218272, S58).
- It was formed in 1998 as a JV of **Mason & Hanger** and **General Dynamics Ordnance Systems** (83 Fed. Cl. 559, No. 07-867C, S47).
- **Day & Zimmermann** says it acquired 100% in 2007. A 2017 DOL release independently describes AO as D&Z-owned (S604).
- A 2008 release names Alliant Techsystems (ATK) as a JV member (S52). This conflict is unresolved.

**Inferences (labelled):**
- At the statutory CPFF fee cap of 10%, fee on the BOA would be at most about $73M over 18 years. This is a ceiling, not the actual fee.
- Production-contract margins are unknown.
- GAO (1997) reported that the Army indemnifies ammunition-plant operators for environmental liability and pays for cleanups itself (S1105). Current contract terms are not public.

**Not AO:**
- The 2026 lead-azide treatment awards went to MuniRem ($30,300), PIKA ($770,810; ceiling ~$10M not counted) and Cape-Weston ($3.06M): $3.86M in total (S44).

**Unknowns:**
- AO's profit or fee;
- award-fee criteria tied to environmental performance;
- the pre-FY2008 totals.

## 5. Timeline

| Date | Event or claim | Source | Significance | Confidence |
|---|---|---|---|---|
| 1940–41 | IAAP established (Iowa Ordnance Plant) | S1, timeline module | Site origin | High |
| 1949–74 | AEC-era nuclear weapons assembly (Line 1). DOL EEOICPA payments to these workers exceed $370M (snapshot date not captured) | S108, S109 | Historic worker harm; **unrelated to AO's tenure** | Medium |
| 1990 | IAAP placed on Superfund NPL | EPA profile | Contamination history | High |
| 1998 | AO formed (Iowa foreign registration 10 Jun 1998; JV agreements 21 Jul 1998) | S58, S47, S911 | Company origin | Medium-high |
| 1999 | ATSDR: RDX in 5 off-site private wells, as excerpted (max 27.5 ppb vs 2 ppb advisory) | S102 | Off-site exposure; full report not re-read | Low-medium |
| 2004 | DoD concern over a deteriorating, ~40-year-old lead azide stockpile at IAAP | S94 | Early warning; **link to the 2026 drums not established** | Medium |
| 12 Jun 2006 | Fatal explosion; OSHA accident inspection: 9 serious, $34,000 | S110 | Worker harm | High |
| 2007 | D&Z says it takes 100% of AO; OB/OD risk assessment conducted | S49; S1 | — | Medium |
| 2009 | Lead azide transferred to IAAP from Texas (AP) | S90 | Conflicts with the court's "over two decades" | Medium |
| 2013 | ATSDR health consultation: RDX in private well 4.3 µg/L; non-cancer concern "None" | S103 | Contrary evidence on harm | High |
| 2 Mar 2020 | Emergency permit allowing OB up to 3,000 lb/hr for one unstable 60,000-lb propellant lot | S72, S1003 | Emergency-route precedent | High |
| 2021 | Five-year review: OU1 soil cleanup goals for 5 metals "no longer protective" | S104 | Remedy gap | Medium |
| 2022 | PFAS detected; later OU13 | S100 | New contaminant | High |
| 2023 | Alleged violations, including OB pans "in excess of permit limits" | S113 | Exceedance | High |
| 27 Sep 2024 | CAFO filed: Army + AO pay $39,311 (announced Dec 2024) | S1201, S113 | Only formal enforcement naming AO | High |
| 24 Sep 2025 | AO asks MuniRem to "neutralize and dispose" of 68 drums | S1109 (WaPo) | Disposal planning predates "discovery" | Medium |
| 4 Feb 2026 | AO email: government taking "another approach ... based on their assessment of safety risk" | S1109 | Disputed: the Army says it was "made aware in March" | Medium |
| 12 Mar 2026 | Plant pause; EPA notified | S121, S1109 | Emergency begins publicly | High |
| 2 Apr / 30 Jun / 29 Sep 2026 | Three 90-day emergency storage permits | S121, S118 | **Omitted from S2's narrative** | High |
| 8 May 2026 | Secretary of the Army selects detonation; treatment work dropped ~6 days later | S1108 | Key decision point | Medium |
| 13 Nov 2026 | Emergency storage-and-treatment permit (S2) | S2 | Subject document | High |
| 23 Nov 2026 | 8th Cir. denies stay; petition pending | S122 | Legal clearance | High |
| 25 Nov 2026 ~9:00 CT | Planned detonation; governor's emergency proclamation for 3 counties | S1300-S1303 | **Outcome unconfirmed** | — |
| 28 Sep 2028 | 2018 RCRA permit expires | S71 | Renewal opportunity | High |

## 6. Patterns and tactics

- **(a) Emergency permits operating outside the base permit (documented).**
  - Examples: 2020 OB at 3,000 lb/hr; 2026 three storage permits plus a treatment permit.
  - Counter: EPA describes 90-day renewals for deteriorating energetics as common. The SOP frames OB of unstable material as an exception process. This is ordinary practice, not evidence of evasion.
- **(b) Deferred or missing safeguards (documented).**
  - Examples: the 2007 risk assessment not updated; the Technology Assessment Report not public; blank SOPs; a one-building inspection schedule; a waste analysis plan without OB/OD residues.
  - Counter: the base rate is high (41 of 67 OB/OD sites had not evaluated alternatives as of 2023). The risk assessment is discretionary under the permit.
- **(c) Drafting and quality-control errors in EPA documents (documented).**
  - Examples: 60 vs 100; Rev 6 vs Rev 8; 44MM; UN0130; the wind "and"; Section 13 naming; copied-forward citations.
  - Only the wind clause, and S2's omission of a groundwater item, sit in operative safety conditions. The rest are disclosure-accuracy or low-consequence errors.
- **(d) Energetics degrading in long-term storage (documented).**
  - Examples: lead azide and M14 propellant.
  - Counter: the Army's national backlog of unserviceable munitions runs to several hundred thousand tons. This is systemic, not unique to IAAP.
- **(e) Exceed, then settle small (observation only).**
  - One exceedance and one $39,311 penalty. Comparing it with $4.7B in obligations is not valid.
- **(f) Repeated labor and safety findings against the operator (documented).**
  - OSHA 2006, 2019 (mirror-sourced) and 2024; DOL 2017 and 2018 (the latter at the Milan plant).
  - Counter: penalties are comparable to peer plants (Radford, Lake City).
- **(g) Community concerns redirected to Superfund (2018 only; ordinary EPA practice).** The 2026 permit did not repeat it.

## 7. Risk matrix

| Dimension | Score / Unknown | Rationale | Counterevidence |
|---|---|---|---|
| Document accuracy (S1, S2) | **Medium** | Multiple identifier, limit and drafting errors | Most are non-operative or low-consequence |
| Off-site lead exposure from the detonation | **Medium-high (expected, magnitude unknown)** | EPA expects release; EF 1.0; advisories in place; 3-county emergency proclamation | Conservative modelling; 1977 analogue (Army claim) suggests ~25% airborne; controlled vs uncontrolled framing |
| Protectiveness of sampling triggers | **Medium** | Sampling only ≥100 µg/ft², and only where access is granted | Thresholds track EPA's indoor action levels; a 5 µg/ft² advisory |
| Storage stewardship (lead azide) | **High concern** | Decades of storage; liquid not replenished after Sep 2025; neutralization dropped May 2026 | Army disputes earlier awareness; some evidence comes from an interested party (MuniRem) |
| Long-term site contamination | **Medium** | RDX off-site; PFAS (OU13); metals goals not protective (2021) | EPA indicators "under control"; 2013 ATSDR found low risk |
| Operator accountability | **Low-medium** | Few formal findings; Army indemnifies and pays cleanup | Penalties in line with peers; no FCA or IG findings |
| Financial misconduct by AO | **No evidence found** | — | Obligations are not profit; no FCA matter found |

## 8. Harm and accountability

- **Documented harm:**
  - 2006 double-fatality explosion (OSHA).
  - Historic nuclear-worker illness compensated under EEOICPA (pre-AO era).
  - RDX and other contaminants in groundwater beyond the plant boundary.
  - PFAS detected (OU13).
  - 2023 permit violations (alleged; resolved by consent).
- **Potential harm:**
  - Off-site lead deposition and airborne lead from the 25 Nov 2026 detonation. EPA required notification and modelling on the basis of an expected release.
  - Gaps in post-event sampling coverage (≥100 µg/ft² trigger, Rights-of-Entry only).
  - Debris throw: the Army estimates concrete up to about 3,000 ft (news reports).
- **Responses:**
  - EPA emergency permits with modelling, public notification and closure and remediation obligations (S2).
  - Iowa governor's emergency proclamation; Illinois emergency operations center partially activated (news).
  - Earthjustice-represented petitioners challenged the permit.
- **Formal findings:**
  - 8th Cir. stay denial (23 Nov 2026; merits pending).
  - EPA CAFO, $39,311 (2024).
  - OSHA citations (2006, 2024; 2019 via mirrors).
  - DOL settlements (2017, $50,000; 2018, $678,296, Milan).
  - NYDFS-type, FCA or IG findings against AO: none found.

## 9. Strongest countercase

- **Documents:** most "inconsistencies" are different measures: permit limits vs design capacity vs stricter SOP limits. The 44MM and UN0130 errors sit in a background recital. UN0129 and UN0130 share hazard class 1.1A and ERG Guide 112, and the drums will never be shipped. These are careless but not dangerous, except the wind clause in an operative condition, whose intent EPA's own letter makes clear.
- **Detonation:** by November, every party, including the petitioners' counsel ("may now be the only feasible option"), accepted that a controlled detonation was better than risking an uncontrolled one. EPA forced a worst-case emission factor over the Army's objection.
- **Money:** the $4.7B is production and operations funding passed through a GOCO contract. Fee is capped (10% on CPFF). The Army, not AO, carries cleanup liability.

**Where the countercase fails:**
- It cannot explain why lead azide sat for decades until it became too dangerous to move or treat chemically.
- It cannot explain why the stabilizing liquid went unreplenished after Sept 2025.
- It cannot explain why the neutralization option was dropped in May 2026.

These facts point to a **stewardship failure that turned a manageable disposal problem into an emergency with public exposure**, though some rest on interested-party or reported sources. Nothing shows fraud or deliberate concealment.

## 10. Conclusion

- **Established:**
  - S2's "44MM" is an error (40mm is correct).
  - S2's UN0130 does not match lead azide (UN0129 is correct for wetted lead azide).
  - S2's wind clause is inoperable as written.
  - S1's RTC understates the OD limit (60 vs 100).
  - S1's OB limit exceeds the stated design capacity.
  - S1 cites a stale SOP and has blank SOP placeholders.
  - S2 omits the April and June 2026 storage permits.
  - EPA expects off-site lead release, and the sampling trigger is 20× the advisory level.
  - AO: formed 1998 as a JV; D&Z-owned; still the operator to 2030; $4.72B in obligations FY2008-26; $39,311 EPA penalty; DOL and OSHA findings; no 2026 lead-azide awards.
- **Plausible but unproven:**
  - That the Army or AO knew of the instability before March 2026 (reported; disputed).
  - That neutralization remained feasible in May 2026.
  - That the 1977 analogue (~25% airborne) applies.
- **Contradicted or withdrawn:**
  - "IAAAP" as a typo.
  - S2 saying storage was "first" authorized in September.
  - Operator change in 2026.
  - "Profits heavily" (unknown).
  - Census tracts as predicted deposition zones.
- **Unknown:**
  - Whether the detonation occurred and its measured results.
  - Pre-2026 storage permitting.
  - Whether the Technology Assessment Report or an updated risk assessment exists.
  - AO's fee or profit.
  - The exact Delaware formation date.

## 11. Next research actions

1. **Post-detonation data (most time-sensitive).** Obtain the post-detonation plume estimate (within 6 h), the Final Impact Area Report (within 30 days) and sampling results, from EPA response site 17211, and compare them to the 5 and 100 µg/ft² isopleths.
2. **Administrative record for the emergency permit** (8th Cir. No. 26-3374 / EPA R7): the 12 Aug and 4 Sep 2026 alternatives letters, EPA's approval memo, Col. Teller's declaration, and the brief on liquid replenishment. This decides the stewardship question.
3. **EPA R7 records request:** all IAAP emergency permits since 2018; the permit modification log; Technology Assessment Reports; any updated OB/OD risk assessment.
4. **Full CAFO RCRA-07-2024-0092:** admissions, the Army/AO penalty split and the exact limit exceeded.
5. **FOIA to ACC-Rock Island for W52P1J-09-E-0001 and BOA W52P1J-09-G-0001:** fee, award-fee and environmental clauses.
6. **Full ATSDR 1999 PHA, and the Delaware formation record for AO.**

## 12. Sources

The full ledger, with origin IDs, independence notes and hashes, is in `sources.md`. Key sources:

- **S1:** EPA R7, IAAP RCRA permit (final 28 Sep 2018) plus RTC. https://www.epa.gov/system/files/documents/2025-05/iowa-army-ammunition-plant.pdf. Limits, SOPs and drafting issues.
- **S2:** EPA R7, Emergency Permit for Storage and Treatment of Lead Azide (13 Nov 2026), user-supplied, redacted, byte-identical to the EPA-posted copy. 44MM, UN0130, wind clause, thresholds.
- **S3:** 49 CFR 172.101 (2024). https://www.govinfo.gov/content/pkg/CFR-2024-title49-vol2/xml/CFR-2024-title49-vol2-sec172-101.xml. UN0129 vs UN0130.
- **S121:** EPA R7 Administrator letter to Gov. Reynolds. https://response.epa.gov/sites/17211/files/R7%20Letter%20to%20Governor%20Reynolds.pdf. Storage-permit dates 2 Apr, 30 Jun, 29 Sep.
- **S122/S79:** 8th Cir. No. 26-3374 (23 Nov 2026). https://ecf.ca8.uscourts.gov/opndir/26/11/263374P.pdf. Stay denied; "over two decades"; controlled vs uncontrolled.
- **S113/S1201:** EPA, "EPA fines Iowa Army plant and contractor ...". https://www.epa.gov/newsreleases/epa-fines-iowa-army-plant-and-contractor-alleged-hazardous-waste-violations. $39,311; CAFO filed 27 Sep 2024.
- **S40/S41/S43/S44:** USAspending.gov (recipient American Ordnance LLC; awards W52P1J-09-E-0001; lead-azide awards). Funding totals.
- **S47:** *American Ordnance LLC v. United States*, No. 07-867C (Fed. Cl. 2008). https://courtlistener.com/opinion/6774815/american-ordnance-llc-v-united-states. 1998 JV origin.
- **S49:** Day & Zimmermann company history. 100% ownership in 2007 (subject statement).
- **S58:** Iowa SOS registration mirror. Foreign LLC, 1998-06-10.
- **S604/S605:** DOL OFCCP 2017 ($50,000) and WHD 2018 ($678,296, Milan TN).
- **S110:** OSHA inspection 301555504 (2006 fatal explosion).
- **S100:** EPA Superfund profile, IAAP. PFAS OU13.
- **S1109:** Washington Post (24 Nov 2026), via syndicated full text. Sept 2025 and Feb 2026 AO emails; Army "made aware in March".
- **S1105:** GAO (1997). Army indemnification of ammunition-plant operators.
- **S1300-S1303:** Army announcement; NBC, KCRG and ABC pre-event reports (detonation planned for 25 Nov; governor's proclamation).
  - https://www.army.mil/article/297069/army_announces_controlled_detonation_of_degraded_explosive_material_at_iowa_army_ammunition_plant
  - https://www.nbcnews.com/news/us-news/army-detonate-lead-explosives-iowa-rcna611086
  - https://www.kcrg.com/2026/11/24/government-agencies-give-update-detonation-iowa/
  - https://abcnews.com/US/us-army-details-mitigation-plans-controlled-iowa-munition/story?id=138410668

---

This report is an evidence summary, not a legal finding. Accusations are not findings. Seek qualified legal review before any public use.
