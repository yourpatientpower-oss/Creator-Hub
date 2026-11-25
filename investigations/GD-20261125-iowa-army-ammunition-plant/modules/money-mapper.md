# Money Mapper: GD-20261125-iowa-army-ammunition-plant

Module owner: money-mapper. Claims covered: C16, C17, C18, plus the coordinator's mid-task request on 2026 operator status and lead-azide awards (C26). Written 2026-11-25. Sources are cited by ledger ID (S40-S85 are this module's rows).

Method note: the obligation figures come from live USAspending API queries run 2026-11-25 (USAspending reported data last updated 2026-11-24, S41). Registry and announcement facts come from Nimble Search/Extract results and from documents downloaded directly. Several hosts could not be reached from this session: aviationweek.com, dayzim.com via WebFetch, the Delaware, Iowa and Tennessee SOS portals, web.archive.org, justice.gov, and authenticated CourtListener and SAM.gov APIs. Where that matters it is stated below. No Wayback copies were made.

---

## 1. Question investigated

1. Who is American Ordnance LLC (AO), the operator named in the 2018 RCRA permit (C16)? When and where was it formed, and who owns it (C17)?
2. How much federal money has it received, broken out by fiscal year, contract, agency and contract type? Obligations are kept separate from outlays and from ceilings (C18).
3. What documented penalties, settlements or litigation involve AO? Do any incentive terms tie its pay to environmental performance?
4. (Coordinator request, C26) Does AO still operate IAAP in 2026, or is there a contract end, recompete or new operator? Do any 2026 awards relate to the lead-azide problem or to demilitarization at IAAP?
5. Who benefits from each claim being believed?

---

## 2. Findings

### 2.1 Entity identification (C16, C17)

**F1. The 2018 permit identifies the operator as American Ordnance, LLC, "registered to do business in the state of Iowa".** It says AO works under a facilities contract covering munitions manufacturing, site management, maintenance, security and hazardous waste management (S1 L207-209, L881-883). *Documented.*

**F2. Federal identifiers (USAspending recipient profiles, S40).** These are four registrations under one name:

| UEI | DUNS | CAGE | Site | Role in USAspending | Obligations FY2008-FY2026 |
|---|---|---|---|---|---|
| QHL5DNL1NUK3 | 037743833 | 14912 (S59) | 17575 DMC Hwy 79, Middletown IA | main operating registration (child) | $4,258,605,915.91 |
| NTPELESCCJ88 | 063956270 | 2D281 (S60) | 2280 Hwy 104 W, Milan TN | Milan registration (child); alternate name "GENERAL DYNAMICS ORDNANCE SYST" | $422,310,302.19 |
| LM5HGA7J4R45 | 011148157 | — | 17575 Hwy 79, Middletown IA | AO's own "parent" UEI; also holds the facility contract | $21,118,379.90 (direct, as child) |
| WMTSLXLFZNN9 | 037744765 | — | Milan TN ("AMERICAN ORDNANCE LLC, MILAN O") | legacy Milan registration | $13,613,591.99 |

SAM-derived registry mirrors give the following for the main registration (S59, S61). Registered with SAM 2002-03-28. **Business start date 1998-01-12.** Entity structure code 2K (partnership or LLP). The Milan registration CAGE 2D281 was first registered 1998-03-06, with a business start of 1998-01-12; one snapshot says 1997-01-01 (S60). *Documented (third-party mirrors of SAM data; not read on SAM.gov itself).*

**F3. State of formation: Delaware, per one filing.** A tenant facilities use agreement filed as an exhibit with the SEC describes "American Ordnance LLC, a Delaware limited liability company". The exhibit was filed by a third-party registrant (CIK 33619) in 2007, and the agreement was signed 2002-11 (S57). *Documented (filed document).*

The SAM mirrors are inconsistent on "state of incorporation": GovSurf says DE (S61), cage.report says IA for CAGE 14912 (S59) and TN for CAGE 2D281 (S60). The Delaware formation date was **not** retrieved, because the Delaware ICIS portal could not be reached. *Unknown.*

**F4. Iowa registration.** An Iowa SOS data mirror lists AMERICAN ORDNANCE LLC as entity 218272, a **foreign limited liability company**, registered **1998-06-10**, status ACTIVE, registered agent C T Corporation System (S58). *Documented (mirror of Iowa SOS data; the Iowa SOS portal itself could not be reached).* This fits the permit's phrase "registered to do business in the state of Iowa", which implies AO was formed elsewhere.

**F5. Formation and original owners.** In *American Ordnance LLC v. United States*, 83 Fed. Cl. 559 (decided 2008-09-12), the Court of Federal Claims found facts on the record:
- Mason & Hanger operated IAAP from 1951 to 1998.
- "In 1998, Mason & Hanger and General Dynamics Ordnance Systems, Inc. formed a joint venture known as American Ordnance LLC".
- AO operated IAAP from 1998 to the date of the opinion.

(S47; the court cites trial testimony.) *Documented (court record).* A contemporaneous Aviation Week item is titled "GD, Mason&Hanger activate American Ordnance joint venture", and a search summary says AO had Milan and Iowa operating units. The article body could not be read (S56).

**F6. Day & Zimmermann's route to ownership, with conflicting dates.**
- The D&Z corporate history page says D&Z acquired The Mason Company (Mason & Hanger) in **1999**. It also says that in **2007** "Day & Zimmermann acquires 100% of American Ordnance, previously a joint venture with General Dynamics" (S49). *Disclosed (subject's own statement).*
- A 2009 NDIA presentation by a D&Z executive says "1998 Acquired Mason and Hanger • 50% of American Ordnance JV" and "2007 Acquired the other 50% of American Ordnance" (S53). *Disclosed.*
- A GlobalSecurity summary dates the D&Z–Mason merger agreement to 14 April 1999 (S54). *Secondary.*
- A 2006 Quad-City Times report, as reproduced by GlobalSecurity, called AO "a joint venture of General Dynamics Ordnance & Tactical Systems Inc. and Day and Zimmerman Inc." (S55). *Secondary.*

Taken together, the sources agree that the JV was Mason & Hanger (later a D&Z unit) plus a General Dynamics ordnance unit, at roughly 50/50 according to the NDIA deck, and that D&Z took 100% in 2007. They disagree on whether D&Z acquired Mason & Hanger in 1998 or 1999.

**F7. Conflicting 2008 description.** An October 8, 2008 D&Z/ATK press release, reproduced by GlobalSecurity, calls AO "a joint venture led by Day & Zimmermann" that "includes Alliant Techsystems (ATK)". It also says AO won a new IAAP/Milan operating contract with "a 10-year base contract period and options to extend it an additional 15 years" (S52). This conflicts with F6's 2007 100% acquisition. Possible explanations are that ATK joined as a teaming partner or subcontractor, or that the release used "joint venture" loosely. *Unresolved; kept visible.*

**F8. Current ownership (2026).**
- D&Z's January 6, 2026 release lists "its wholly owned affiliates American Ordnance LLC, Day & Zimmermann Kansas LLC, Day & Zimmermann Lone Star LLC, and Yankton Operations" and describes D&Z as "family-owned" (S50).
- A September 21, 2026 release calls AO "a Day & Zimmermann company" that operates IAAP and Milan (S51).
- A SAM-derived profile lists the Immediate Owner as **Day & Zimmermann, Inc.** (CAGE 0ZKS5) (S62).

*Disclosed (subject statements) and documented (SAM-derived).*

**F9. USAspending's "parent" field is inconsistent.** The parent recorded on individual AO awards switches between "AMERICAN ORDNANCE LLC" (LM5HGA7J4R45), "THE MASON & HANGER GROUP INC." (VV2HSJHZ5353) and "THE DAY & ZIMMERMANN GROUP, INC" (JV1NFDGGB4S4). For example, the FY2016 orders under W52P1J16D0050 show Mason & Hanger, W15QKN15C0044 (2015) shows D&Z Group, and W15QKN24F0442 (2024) shows AO (S40, S42). *Documented.* **Inference:** this probably reflects how the owner hierarchy was entered in SAM at each action, not a series of ownership changes. Mason & Hanger is a D&Z business (S49), so all three labels point to the D&Z group. This has not been confirmed with SAM ownership history.

**F10. No General Dynamics ownership today.** No source after 2007 shows GD holding equity in AO. GD-OTS is a **competitor** on some of the same orders. For example, the 155mm M795 IDIQ W519TC23D0014 has a companion order W519TC-23-F-0108 to GD-OTS, which "will compete for each order" (S85, secondary; not verified against the DoD announcement). *Documented: GD's past JV role (S47, S49). Unknown: any residual GD interest, which is unlikely given S49 but not ruled out with a registry filing.*

**F11. Milan.** AO also operated Milan AAP (Tennessee) under the same facility contract (S43, S48). It is shown as operating Milan "storage facilities" (S51). Milan's obligations fell sharply after FY2013 (table below). *Documented.*

### 2.2 Contract structure at IAAP

**F12. The facility contract is W52P1J-09-E-0001**, titled "IAAAP AND MLAAP FACILITY CONTRACT".
- Awarded 2008-10-02 under UEI LM5HGA7J4R45.
- Pricing type: "COMBINATION".
- **Total obligation $0.00** (base and all options $0.01).
- Period of performance 2008-10-02 to **2030-12-25** (current and potential end).
- Latest modification P00145, dated 2026-04-15; record last modified 2026-11-02 (S43).

The COFC confirms that W52P1J-09-E-0001 is the "Facility Contract" or "Prime Contract" for operations and maintenance at MLAAP (S48). *Documented.*

**Inference:** the $0 value fits a facilities-use instrument that grants use of government property. Money flows through ordering agreements and production contracts, not through the facility contract itself. The October 2008 award date matches the October 8, 2008 release in S52.

**F13. W52P1J-09-G-0001 is the money channel for site services.** It is a basic ordering agreement (BOA) that "enables the purchase of additional facility support services from American Ordnance LLC" (S42).
- NAICS 561210 (Facilities Support Services); cost-plus-fixed-fee; recorded as full and open competition; awarding office ACC-Rock Island (W6QK).
- Runs 2008-10-02 to **2031-12-31**.
- **698 child orders, $805,552,676.96 obligated** (S42, idvs/amounts).

Orders cover operations, layaway and demolition, facility construction (for example the 2019 melt/pour design charrette, $49.6M), Defense Environmental Restoration Program support, and similar work. The COFC notes the BOA's role "to acquire operation and maintenance services beyond the specified tasks in the Facility Contract" (S48). *Documented.* The predecessor BOA DAAA09-98-G-0011 (1998-1999) had 84 child orders totalling $461,422,836.01 obligated (S42).

**F14. Production contracts (ceilings vs obligations).** These are shown side by side, never summed:

| Vehicle | What | Ceiling (base + all options) | Child-order obligations | Competition |
|---|---|---|---|---|
| W519TC23D0014 | 155mm M795 LAP IDIQ (2023-2028) | $1,987,580,746.42 | $571,210,633.50 (4 orders) | full and open after exclusion of sources |
| W15QKN19D0109 | MACS M231/M232 LAP (2019-2026) | $1,281,758,971.85 | $293,073,262.42 (9 orders) | full and open after exclusion of sources |
| W15QKN23D0056 | "UKRAINE" M1128 LAP (2023-2028) | $974,359,954.71 | $249,375,462.92 (2 orders) | not competed |
| W52P1J16D0050 | 5-yr large-caliber requirements, IAAP | $161,230,958.29 | $355,244,982.79 (3 orders) | full and open after exclusion of sources |
| W52P1J09D0001 | Milan FFP requirements (2008-2013) | $383,480,704.00 | $254,923,487.89 (11 orders) | full and open |
| W52P1J21D0035 | MICLIC/M112 requirements | — | $188,657,336.93 (14 orders) | — |

(S42.) On W52P1J16D0050, the IDV's recorded ceiling ($161.2M) is lower than its child obligations ($355.2M). This is an internal inconsistency in the USAspending data, flagged as found and not corrected. *Documented.*

**F15. The largest single awards by lifetime obligation (QHL5, S42):**
- Order 0003 under W52P1J16D0050, M795 TNT: $269.6M
- W52P1J20C0035, FY20 M795 TNT: $229.3M (definitive, not competed). DoD's announcement gave an initial $76,556,603, "one bid solicited with one bid received" (S68).
- W519TC25F0357, M795 LAP: $197.4M
- W15QKN23F0559, "UKRAINE" M1128 UCA: $193.0M
- W519TC24F0399: $157.7M
- W519TC26F0141: $125.1M, signed 2026-06-30
- W15QKN24F0442, "UKRAINE (FMS FUNDING)" MACS: $120.6M

*Documented.*

### 2.3 Federal funding: obligations by fiscal year (C18)

Source: USAspending `spending_over_time`, filtered by recipient hash for each AO registration (S41). All are contract obligations. No grants, loans or other assistance appear. The LM5HGA7J4R45 column is that registration's *own* direct awards. Searching by its UEI as text would double-count child awards, so the per-hash filter was used.

| FY | QHL5 (Iowa) | NTPE (Milan) | WMTS (Milan legacy) | LM5H (direct) | **All AO** |
|---|---|---|---|---|---|
| 2008 | 16.89 | 1.34 | 8.26 | 18.07 | **44.56** |
| 2009 | 24.62 | 144.00 | 5.36 | 2.96 | **176.94** |
| 2010 | 44.18 | 71.62 | 0.00 | 0.00 | **115.79** |
| 2011 | 19.75 | 71.80 | 0.00 | 0.03 | **91.58** |
| 2012 | 36.20 | 60.69 | -0.02 | 0.03 | **96.90** |
| 2013 | 35.87 | 61.22 | 0.01 | 0.03 | **97.13** |
| 2014 | 53.43 | 7.60 | 0 | 0 | **61.02** |
| 2015 | 77.71 | 0.22 | 0 | 0 | **77.94** |
| 2016 | 97.06 | 0.23 | 0 | 0 | **97.29** |
| 2017 | 169.10 | 0.17 | 0 | 0 | **169.26** |
| 2018 | 314.98 | 2.40 | 0 | 0 | **317.38** |
| 2019 | 301.60 | 0.07 | 0 | 0 | **301.67** |
| 2020 | 328.01 | 0.94 | 0 | 0 | **328.95** |
| 2021 | 142.61 | 0.02 | 0 | 0 | **142.63** |
| 2022 | 179.94 | -0.00 | 0 | 0 | **179.93** |
| 2023 | 1,251.97 | -0.00 | 0 | 0 | **1,251.97** |
| 2024 | 545.73 | 0 | 0 | 0 | **545.73** |
| 2025 | 348.80 | 0 | 0 | 0 | **348.80** |
| 2026* | 270.17 | 0 | 0 | 0 | **270.17** |
| **Total** | **4,258.61** | **422.31** | **13.61** | **21.12** | **4,715.65** |

Figures are in $ millions of obligations (net of de-obligations; negatives are de-obligations). *Documented (S41).*

\*FY2026 (2025-10-01 to 2026-09-30) is **incomplete**. DoD announced three AO actions in September 2026 that do not yet appear in USAspending:
- W519TC-26-F-A653: $23,638,438 action, $53,092,599 cumulative face value (S63)
- W519TC-26-F-A547: $15,500,977 (S64)
- W519TC-26-F-A552: $12,643,367, "equitable adjustment for costs sustained during a shutdown" (S65)

Their absence fits DoD's delayed public FPDS reporting; this is an inference, not verified. FY2027 to date is not included.

**F16. Headline figure:** about **$4.72 billion in contract obligations, FY2008-FY2026**, across AO's four registrations. Of that, **$4.26 billion** went to the Iowa registration (S40, S41).
- Funding agency for QHL5: Department of the Army $4,250.7M, Navy $7.9M, Air Force $0.03M (S41).
- Awarding offices: mainly ACC-Rock Island (W6QK / W519TC / W52P1J) and ACC-RI-Picatinny (W15QKN). Earlier awards came from "U.S. Army Industrial Operations" (DAAA09) and the Army Armament RD&E Center (DAAE30) (S42).
- **Pre-FY2008 obligations exist** (awards from 1997-1998 onward) but are **not** in this total, because the USAspending search API only covers FY2008 onward. *Unknown: the 1998-FY2007 total.*

**F17. The FY2023 spike ($1.252B).** USAspending's account linkage attributes **$1,153,962,462** of AO's FY2023 obligations to Treasury account 021-2034, *Procurement of Ammunition, Army*, and $16.1M to 021-2020, *Operation and Maintenance, Army* (S46). The largest FY2023 transactions include W15QKN23F0559 (described as "UKRAINE: MULTI-YEAR, UCA DELIVERY ORDER FOR M1128", $217.7M initial action) and W519TC23F0107 (155mm LAP set-up minimum guarantee, $93.9M) (S41, S42). *Documented.* **Inference:** the jump coincides with 155mm production expansion after 2022 and with orders the awards themselves label as Ukraine-related. Labeling alone does not establish the funding source for every order.

**F18. Outlays are not reliably available. Report obligations only.** USAspending's contract outlay fields for AO are mostly null or zero. For example, the BOA's child orders show $2.92M in outlays against $805.6M obligated (S42). That gap reflects incomplete File C linkage, not actual payments. *Unknown: actual cash paid.*

**F19. Face value vs obligation, an example.** For W519TC-26-F-0007, DoD announced "$14,970,440 … with a total cumulative face value of $29,940,880" (S66). USAspending shows $14,970,440 obligated (S45). Face values and ceilings are potential amounts, not funding. *Documented.*

**F20. The parents' own awards are separate.** D&Z, Mason & Hanger, Day & Zimmermann Kansas and Lone Star, and others hold awards under their own UEIs. They are **excluded** from the figures above. Day & Zimmermann is private and family-owned (S50). No SEC filings or public revenue figures were found or used. *Unknown: D&Z revenue and AO's share of it.*

### 2.4 Penalties, settlements, litigation (C18 context)

**F21. EPA RCRA penalty, $39,311 (2024).**
- Respondents: the Army and AO, jointly.
- Alleged 2023 violations: improper detonation in a detonation chamber, failure to properly close the moved grenade detonation chamber, and burning in open burn pans above permit limits.
- Consent Agreement and Final Order, Docket RCRA-07-2024-0092, filed 2024-09-27. The docket shows "Payment Received", closed 2024-10-08.
- EPA's release says the Army owns IAAP "while American Ordnance operates the plant".

(S72, S73.) *Documented.* *Unknown:* how the $39,311 was split between the Army and AO, and whether any share was charged back to the government under the contract.

**F22. DOL OFCCP conciliation (March 2017).** AO agreed to pay $50,000 in back pay and damages to two former security officers over disability-accommodation findings, and did not admit liability (S74). *Documented (agency release).*

**F23. DOL Wage and Hour (2018-10-01).** AO paid $678,296 in back wages, overtime and fringe benefits to 63 employees at Milan. The findings were under the Service Contract Act and the Contract Work Hours and Safety Standards Act (S75). *Documented (agency release).*

**F24. Litigation where AO was the claimant.**
- **Line 3A equipment.** In 83 Fed. Cl. 559 (2008), the court issued a declaratory judgment that **AO, not the Army, owns the Line 3A manufacturing equipment at IAAP** (used for M795 projectiles). It held that the Contract Disputes Act limitations period barred the government's ownership claim, and awarded costs to AO (S47). *Documented.* Separately, the Army later funded "LINE 3A MODERNIZATION EFFORT AT THE IOWA ARMY AMMUNITION PLANT" through order W519TC23F0370 ($24,683,179) (S45). *Unknown:* who holds title to the modernized equipment. No impropriety is implied.
- **Bid protest.** A 2007 COFC pre-award protest (AO alleged the Army disclosed AO's proprietary cost data) (S84).
- **ASBCA appeal.** A law-firm biography reports a successful ASBCA appeal (No. 54718, 10-1 BCA 34,386) recovering $3.5M in constructive-change and delay claims (S82). *Secondary; unverified.*
- **Wolf Creek Railroad v. United States**, No. 23-1684 (COFC, 2024-03-26). Claims by AO's rail tenant at Milan against the government were dismissed (S48).

**F25. False Claims Act and DOJ: nothing found.** Searches through Nimble, WebSearch and an anonymous CourtListener API call (which returned no data) found **no** FCA, qui tam or DOJ settlement naming AO. justice.gov could not be reached directly. *Unknown: absence in these searches is not proof of absence.* An OSHA penalty from 2006 surfaced only through a Violation Tracker search snippet; OSHA records are handled by the harm-accountability module.

### 2.5 Incentives tied to environmental performance

**F26. No public award-fee or incentive criteria tied to environmental performance were found.**
- The ordering agreement is **cost-plus-fixed-fee** (S42), so the fee is fixed rather than performance-scored.
- The facility contract's pricing is "COMBINATION" (S43).
- Most production awards are firm-fixed-price (S42, S68).

*Unknown:* any award-fee plan, environmental clauses or performance metrics in the facility contract text, which is not public online.

**Inference, labeled:** under cost-reimbursement orders, the government generally bears the cost of compliance work, including RCRA activities, layaway and demolition. That gives the contractor no direct financial penalty for compliance effort. Whether fines are allowable costs under these contracts is a legal question and is not concluded here.

### 2.6 Coordinator request: does AO still operate IAAP in 2026? Lead-azide and demilitarization awards (C26)

**F27. Every contract record examined shows AO still operating IAAP in 2026. None of them shows an end, recompete or successor.**
- **Facility contract W52P1J-09-E-0001** runs to **2030-12-25**, with modification P00145 on **2026-04-15** and the record last modified **2026-11-02**. No termination is recorded (S43).
- **BOA W52P1J-09-G-0001** runs to **2031-12-31**. ACC-RI placed new 2026 orders for site functions, including:
  - W519TC26F0063: CY2026 management of SMCA material at IAAP, $250,000, 2026-05-26
  - W519TC26F0078: Defense Environmental Restoration Program support at IAAP, $90,510.18, 2026-05-18 to 2027-07-11
  - W519TC26F0049: CY2026 cemetery maintenance at IAAP and Milan
  - W519TC26F0104: recreational access management
  - W519TC26F0141: $125.1M M795 LAP, 2026-06-30

  (S45). *Documented.*
- **FY2026 obligations** to AO are $270.2M (S41). The FY2026 recipient ranking for Des Moines County, Iowa, places AO first by a wide margin (S44).
- **DoD announcements** in December 2025 and September 2026 award IAAP facility work to AO (S63-S66).
- **The subject's own statement:** D&Z said on 2026-09-21 that AO "operates the Iowa Army Ammunition Plant" (S51). *Disclosed.*
- **Press (lead-azide coverage):** the Washington Post (2026-11-24) describes AO as "the contractor that operates and oversees the plant" (S79). *News, snippet only.*
- **Searches** (Nimble and WebSearch, 2026-11-25) found no recompete notice, solicitation or announced successor operating contractor. The only other large new IAAP contractor is MSM Group North America, which holds a $635M Future Artillery Complex design-build-commission award announced August 2025 (S81). That is construction of a new facility, not plant operation. *Absence of evidence, not proof.*

**F28. Why the emergency permit names the Army as "owner and operator": inference only.** EPA's public notice names the emergency permittee as the "United States Department of the Army" (S78). The work is an Army decision executed by Army-coordinated explosive ordnance disposal personnel; the Secretary of the Army selected in-place detonation (S78, S77).

**Inference:** the permittee designation likely reflects that the Army, not AO, is the party conducting this specific emergency treatment. It does not by itself indicate a change of plant operator.

**Who benefits:** the designation places the emergency permit's obligations on the Army rather than on the contractor.

**Not verified:** this module did not read S2's text on the operator designation. The coordinator should check whether S2 explains it.

**F29. 2026 lead-azide awards went to three other firms, not AO** (keyword "lead azide", USAspending, S44):

| PIID | Recipient | Obligated | Ceiling | Signed / PoP | Office / funding | Competition | Description |
|---|---|---|---|---|---|---|---|
| W519TC26C0011 | MuniRem Environmental, LLC | $30,300.00 | $30,300 | 2026-03-26; to 2026-05-27 | ACC-RI / PEO AMMO | not competed, **urgency (FAR 6.302-2)** | "LEAD AZIDE NEUTRALIZATION AT IOWA ARMY AMMUNITION PLANT" |
| W519TC26CA049 | PIKA International, Inc. | $770,810.00 | $9,999,999 | 2026-07-02; to 2027-01-04 | ACC-RI / PEO AMMO | not competed, **urgency (FAR 6.302-2)** | "LEAD AZIDE ENVIRONMENTAL SERVICES AT IOWA ARMY AMMUNITION PLANT" |
| W9128F26FA096 (under W9128F23D0020) | Cape-Weston JV1 LLC | $3,061,090.18 | $3,061,090.18 | 2026-06-12; to 2026-09-30 | USACE Omaha District | full and open after exclusion of sources; CPFF | "LEAD AZIDE REMEDIATION, IOWA ARMY AMMUNITION PLANT (IAAAP)" |

**Total lead-azide-labeled obligations in 2026: $3,862,200.18.** The PIKA ceiling is not added. USAspending's county roll-up shows $60,600 for MuniRem in FY2026 against a single $30,300 award. That discrepancy is *unexplained*. *Documented.*

**F30. AO's link to lead azide.**
- In 2009, AO received BOA order 0061 ($15,728.62) "to develop PC&H [packaging, crating and handling] procedures for lead azide at the Iowa AAP" (S45). *Documented.*
- The Washington Post reports, from documents it reviewed, that AO asked MuniRem on **2025-09-24** for a plan to "neutralize and dispose" of 68 drums of lead azide. It also reports that AO inspected the drums every September and added stabilizing fluid, citing an Army declaration filed by DOJ (S79). *News; only the search snippet was read and the full article is likely paywalled; not independently verified.*

**Inference:** lead-azide storage and inspection sat within AO's site-operations scope, while the 2026 remediation and neutralization money went to other contractors on urgency or USACE vehicles. Nothing here shows AO being paid specifically for the 2026 lead-azide response. AO's general site-support orders may cover related labor. *Unknown:* any lead-azide work charged to AO's existing orders under other descriptions.

**F31. Demilitarization at IAAP.** No 2026 award to AO is labeled demilitarization. Related AO orders include:
- W519TC24F0090: disassembly of M59 MICLICs, $3.14M, 2024-2025
- W519TC23F0485: layaway/demolition phase 11, $5.74M, to 2026-09-30
- W519TC23F0558: packaging, crating, handling and disposal of 1.78M lb of insensitive-munition explosive, $10.4M; DoD initial award $8,373,449, one bid (S70)

(S45, S70). *Documented.*

### 2.7 Money-flow table

| From | To | Mechanism | Amount / basis | Category | Source |
|---|---|---|---|---|---|
| U.S. Army (ACC-RI, ACC-RI-Picatinny) | AO (all 4 UEIs) | Contract obligations, FY2008-FY2026 | $4,715.65M obligated (FY2026 partial) | documented | S40, S41 |
| U.S. Army | AO (QHL5, Iowa) | Contract obligations, FY2008-FY2026 | $4,258.61M obligated | documented | S40, S41 |
| U.S. Army | AO (NTPE, Milan) | Contract obligations, mostly FY2009-FY2013 | $422.31M obligated | documented | S40, S41 |
| U.S. Army (Treasury acct 021-2034, Procurement of Ammunition) | AO | FY2023 obligations | $1,153.96M of the $1,251.97M FY2023 total | documented | S46 |
| U.S. Army | AO | Facility contract W52P1J-09-E-0001 (use of government plant) | $0 obligated; in-kind use of government-owned plant; runs to 2030-12-25 | documented (value of the in-kind use: unknown) | S43, S48 |
| U.S. Army | AO | BOA W52P1J-09-G-0001 orders (O&M, facility projects, DERP support), CPFF | $805.55M over 698 orders, 2008-2026 | documented | S42 |
| U.S. Army | AO | 155mm M795 IDIQ W519TC23D0014 | $571.21M obligated; $1,987.58M ceiling (**not funding**) | documented | S42 |
| U.S. Army (orders labeled "UKRAINE"/FMS) | AO | M1128 and MACS orders (W15QKN23F0559, W15QKN24F0442, W15QKN25F0383) | $193.0M; $120.6M; $59.4M lifetime obligations | documented (labels); funding source by order: inferred | S42 |
| U.S. Army | AO | DoD-announced Sept 2026 actions not yet in USAspending | $23.64M + $15.50M + $12.64M announced action amounts | documented (announcement); obligation status unknown | S63, S64, S65 |
| AO / Army (joint respondents) | U.S. Treasury (EPA) | RCRA civil penalty, CAFO RCRA-07-2024-0092 | $39,311 total; split unknown | documented | S72, S73 |
| AO | 63 Milan employees | Back wages (SCA/CWHSSA) | $678,296 | documented | S75 |
| AO | 2 former security officers | OFCCP conciliation | $50,000 | documented | S74 |
| U.S. Army | AO (title holder) | Line 3A equipment ownership held by AO (court judgment); later government-funded modernization | Judgment 2008; $24.68M modernization order 2023 | documented (judgment, order); title to new equipment unknown | S47, S45 |
| Day & Zimmermann | AO | 100% equity ownership (from 2007; previously ~50% via Mason & Hanger) | Equity; price unknown | disclosed | S49, S50, S53, S62 |
| General Dynamics Ordnance Systems | AO | ~50% JV equity, 1998-2007 | Equity; exit terms unknown | documented (S47) / disclosed (S49, S53) | S47, S49, S53 |
| ATK (Alliant Techsystems) | AO | Described as a JV member in 2008 | Unknown | disclosed but conflicting; unresolved | S52 |
| AO | Day & Zimmermann | Profit distributions or management fees | Unknown | unknown | — |
| U.S. Army (ACC-RI / PEO AMMO) | MuniRem Environmental | Urgency sole-source, lead-azide neutralization | $30,300 | documented | S44 |
| U.S. Army (ACC-RI / PEO AMMO) | PIKA International | Urgency sole-source, lead-azide environmental services | $770,810 obligated; $9,999,999 ceiling (not funding) | documented | S44 |
| USACE Omaha | Cape-Weston JV1 LLC | Task order, lead-azide remediation (CPFF) | $3,061,090.18 | documented | S44 |
| AO | MuniRem Environmental | Request for a neutralization plan, 2025-09-24 | Unknown (no payment amount reported) | documented in news only (snippet) | S79 |
| U.S. Army | MSM Group North America | Future Artillery Complex at IAAP (design-build-commission) | $635M announced (not an AO flow) | documented (announcement) | S81 |

---

## 3. Contrary evidence

- **Start of AO's operation: 1998 vs 2008.** CRS (IF12251) says IAAP "has been operated by American Ordnance LLC since 2008" (S76). The COFC (S47), D&Z (S51) and the 2008 release (S52) say 1998. **Assessment:** CRS is probably counting from the current facility contract (2008-10-02, S43). It is a scope difference, not a factual conflict. Flagged anyway.
- **Owners and dates.**
  - D&Z's acquisition of Mason & Hanger is dated 1998 (S53) or 1999 (S49, S54).
  - The 2006 press account calls the GD partner "General Dynamics Ordnance & Tactical Systems" (S55); the COFC says "General Dynamics Ordnance Systems, Inc." (S47).
  - The 2008 release names ATK as a JV member after D&Z's stated 2007 full acquisition (S52 vs S49).

  All are unresolved, and each comes from subject-affiliated or secondary sources except S47.
- **State of formation.** Delaware (S57, S61) vs IA (S59) vs TN (S60) in different SAM extracts. The Iowa "foreign LLC" record (S58) argues against an Iowa formation. TN for the Milan registration may reflect a TN foreign registration being entered as "incorporation". Not resolved without the Delaware record.
- **"Since 1998" continuity claims** in D&Z marketing (S50, S51) are the subject's own statements. The court record (S47) independently supports the 1998 start.
- **Benign explanations for the large FY2023 to FY2026 obligations:** the Army's documented 155mm production surge and FMS/Ukraine orders (S42 descriptions). The amounts are obligations for delivered or ordered munitions, not evidence of overpayment. Many awards record "one bid received" or "not competed" (S63-S68, S42). That reflects the GOCO plant structure, where the operating contractor runs the government lines. It is not evidence of impropriety.
- **The emergency permit's Army-only permittee designation (C26)** could read as AO no longer operating IAAP. The contract records (F27) show otherwise as of November 2026.
- **Possible double counting avoided.** A plain UEI-text search on LM5HGA7J4R45 returns about $3.25B, because it sweeps in child awards. That figure is **not** additional money and is not used.

---

## 4. Confidence and limitations

**Confidence:**
- High for the USAspending obligation figures, identifiers, facility contract dates and the 2026 lead-azide awards. These came from direct API calls.
- High that AO remains the operating contractor in November 2026.
- Medium-high for formation in 1998 as a Mason & Hanger / General Dynamics JV (court record), and for D&Z's full ownership since 2007 (subject statements, consistent with SAM owner data).
- Low-medium for the exact Delaware formation date, which was not retrieved.

**Limitations:**
- SAM.gov, the state SOS portals (DE/IA/TN), justice.gov, web.archive.org and aviationweek.com could not be reached directly. Registry facts come from third-party mirrors (S58-S62).
- The Aviation Week articles (S56) were seen only as search titles and summaries.
- The Washington Post (S79) and CNN (S80) were read only as search snippets.
- The FY2026 figures are incomplete: three September 2026 DoD actions are missing (S63-S65).
- USAspending's search API excludes obligations before FY2008.
- Outlays are not reliable (F18).
- USAspending's parent-recipient data is inconsistent (F9).
- The facility contract text, award-fee plans and environmental clauses are not public.
- No Wayback copies were made (host unreachable).
- Two other modules both appended ledger rows numbered S100-S140, so those IDs are ambiguous. This module does not cite them, though several overlap with sources here (dayzim history, COFC 2008, D&Z Sept 2026 release, defense.gov 3499682, 4591558 and 4614270, GlobalSecurity). See the Notes in S47, S49, S51, S54, S63, S65 and S71.

---

## 5. Next best research action

Retrieve AO's SAM.gov entity record for UEI QHL5DNL1NUK3 / LM5HGA7J4R45. The public "Entity Information" view, or the SAM Entity API with a key, shows state of incorporation, entity start date and the immediate and highest-level owner history. Then pull the Delaware Division of Corporations entity record to confirm the formation date. Alongside that, file a FOIA request with ACC-Rock Island for facility contract W52P1J-09-E-0001, including its award-fee or performance plan and environmental clauses. That would settle C17 and show whether any of AO's pay depends on environmental performance.
