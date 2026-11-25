# Source Auditor: GD-20261125-iowa-army-ammunition-plant

Prepared 2026-11-25 by the source-auditor subagent (Wave 3). Inputs: `case.md` (C1-C46), `changelog.md`, `sources.md` (re-read before editing; it now includes the countercase rows S1100-S1111), and all five module files.

Every verdict below rests on a source that was **re-opened in this session**. "Image-checked" means a page image was rendered and read; it does not rely on OCR. Where a source could not be re-opened, this is stated and the verdict reflects it.

**Tools and access (2026-11-25)**
- **Worked:**
  - `pdftoppm` page images of S1, rendered into a new scratchpad directory (`srcaudit-s1-pages/`).
  - Read of S2 page images.
  - curl to govinfo.gov, epa.gov and api.usaspending.gov.
  - Nimble Extract/Search for ca8.uscourts.gov, response.epa.gov, earthjustice.org, dol.gov, osha.gov (2006 record only), cumulis.epa.gov, dayzim.com, iaopendata.com, the COFC PDF, washingtonpost.com and the Yahoo syndication.
- **Blocked:**
  - archive.org, web.archive.org, perma.cc and archive.ph all refused by the proxy, so **no Wayback copies could be made or checked**. SHA-256 hashes of the copies fetched today are recorded in the Archive column instead.
  - The osha.gov 2024 inspection page sits behind a CAPTCHA, which was not bypassed.
  - The ATSDR 1999 PHA extract timed out.
  - The yosemite.epa.gov CAFO body was not reachable.
  - washingtonpost.com is paywalled; the full text was read through its Yahoo syndication.

---

## 1. Question investigated

Does each major conclusion the final brief will rely on have a source that:
- exists;
- supports the **exact** statement;
- is correctly dated and in context;
- stands independently?

Where several ledger rows share one origin, they are collapsed and counted once. The coordinator's 15 priority items are all covered in the table in 2.1.

---

## 2. Findings

### 2.1 Audit table

Verdict key:
- **keep**: supported as stated.
- **downgrade**: keep only with the narrower wording or attribution given.
- **remove**: do not use the claim, or do not use the cited source for it.

| # | Conclusion (module) | Source IDs | Exists | Supports exact claim | Date/context OK | Primary? | Independent origins | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | Permit OB limit 140 lb/hr (V.F.2); OD limit 100 lb/hr (VI.E.2) (claim-auditor C2, C3) | S1 | yes | yes. Image-checked PDF pp.57, 65 | yes (Final Sept 2018) | primary | 1 (O-EPA-R7-PERMIT-2018); S2 p.2 restates both, but it is the same agency | keep |
| 2 | RTC says "open detonation is limited to 60 pounds per hour"; no permit condition says this (C1) | S1 | yes | yes. Image p.2, verbatim | yes | primary | 1 | keep |
| 3 | Closure plan J-4b: OB design capacity 120 lb/hr, OD 1,000 lb/hr, so the 140 lb/hr OB limit exceeds stated design capacity (C4) | S1 | yes | yes. Image p.194. It is an application-era page with no "Final" header, written for a closure-inventory estimate (264.112(b)(3)) | yes, but label it "design capacity stated in the closure plan", not an operating limit | primary | 1 | keep |
| 4 | OB SOP: 70 lb/hr propellant (35/pan), 60 lb/hr explosives and ammunition components (30/pan), 208 hr/yr per source; "mandated by" Iowa DNR (C5) | S1 | yes | numbers yes (image p.200). The Iowa DNR mandate is the **SOP's own statement** (OCR L9681, an AO-proprietary document); it was not checked against an Iowa DNR air permit | yes | primary (permittee document) | 1 (permittee) | downgrade: attribute "mandated by Iowa DNR" to the SOP |
| 5 | V.F.3 cites SOP Rev 6 (1 May 2000) / Change 2 (15 May 2006), but the attached SOP is Rev 8 (21 Jan 2015) / Change 2 (3 May 2018) (C7) | S1 | yes | yes. Images p.57 and p.200 | yes | primary | 1 | keep |
| 6 | OD SOP (Att. VI-1) and 40mm SOP (Att. VII-1) are blank "to be incorporated through a permit modification request" placeholders (C36) | S1 | yes | yes. Images pp.223-224 | as of Sept 2018 only. Later incorporation is **unknown**; do not write "never incorporated" | primary | 1 | keep |
| 7 | S2 p.2 says "44MM Grenade Treatment Unit" and also "40mm grenades ... steel tank detonation chamber"; S1 uses 40MM throughout (C20, C21) | S2, S1 | yes | yes. S2 p.2 re-read; S1 image p.74; 0 OCR hits for "44MM" in S1 | yes | primary | 1 (both EPA R7) | keep. "Typo" (C22) stays labelled as inference |
| 8 | S2 lists lead azide as "Hazard Class 1.1A, UN0130"; 49 CFR 172.101 assigns UN0129 to wetted lead azide and UN0130 to wetted lead styphnate; dry lead azide is Forbidden (C23, C24) | S2, S3 (S1102, S1103 corroborate via ERG) | yes | yes. S2 p.2; S3 re-fetched today | yes (2024 CFR ed.) | primary | 2 (EPA; GPO/PHMSA) | keep. **Remove S18 as support**: the 8th Cir. opinion does not mention UN0130 |
| 9 | S2 IV.O.3.ii reads "less than 1 mile per hour **and** more than 15 miles per hour" (C30) | S2; S121 | yes | yes. S2 p.13 re-read. New: EPA's own letter (S121) describes the permit as "requiring surface-level wind speeds to not exceed 15 miles per hour", which supports reading it as a drafting slip for "or" | yes | primary | 1 (EPA) | keep (text). Keep the "void as written" point as a literal reading only |
| 10 | S2 thresholds: advisory ≥5 µg/ft²; sampling ≥100 µg/ft² within 24 h, only at parks, public facilities and Rights-of-Entry properties; 0.18 µg/m³ outer air contour; EF 1.00 (C29) | S2; S126, S127, S125 | yes | yes. S2 pp.16, 22, 24 re-read | yes. Benchmark comparison is indicative only (indoor TSCA wipe standards vs outdoor modelled deposition) | primary | 2 (EPA permit; CFR) | keep |
| 11 | Census Tracts 2-6, 8, 9 are tracts where deposition is to be **minimized**, not predicted deposition zones (changelog C29 correction) | S2 p.9 | yes | yes. IV.D "reasonable best efforts to ... minimize dust-lead deposition within the boundaries of" | yes | primary | 1 | keep (correction stands) |
| 12a | First emergency storage permit 2026-04-02 (timeline; C27 superseded) | S121 (S74, S17, S15/S80, S86) | S121 yes. **S74 page now 404** | yes. S121 4/2 entry: "first of three emergency storage permits ... a new hazardous waste on their facility" | yes | primary (EPA letter) | 1 EPA origin (S74, S17, S121 are all EPA). ABC (S15/S80) derives from the letter. The Army 1 Apr statement via DMR (S86) is a 2nd origin, snippet only | keep |
| 12b | Second permit **2026-06-30** vs "July 1" | S121 vs S120 | S120 page 404 | S121: 6/30 | — | primary | 1 | keep 6/30; **remove "July 1"** (dead snippet) |
| 12c | Third permit 2026-09-29, effective to 2026-12-26; notice published 2026-11-03 | S118 (=S12=S75), S2 p.2 | yes | yes. Page re-fetched; "third emergency permit" | yes | primary | 1 | keep. S17's "Dec 29" stays an unresolved excerpt (C46) |
| 12d | "S2 says storage was first authorized on 29 Sep 2026" (case.md C27 wording) | S2 | yes | **no**. S2 p.2 says only "On September 29, 2026, the EPA issued..."; it never says "first". The defect is omission of the April and June permits (C44), not a false "first" | — | primary | — | downgrade: reword to "S2 mentions only the September permit" |
| 13 | Plant paused 2026-03-12 and reopened 2026-03-30 | S83, S85, S80; S121; S1109 | yes | Pause: yes. EPA notified 3/12 (S121), and WaPo reports the plant "announced a pause on operations" on Mar 12 (S1109, full text). Reopen 3/30: DMR snippet (S85) plus ABC (S80) only | yes | secondary | Pause: 3 (EPA, WaPo, DMR). Reopen: 2 news (snippets) | keep pause; keep reopen at medium confidence |
| 14 | 8th Cir. (No. 26-3374) denied emergency stay and lifted administrative stay on 2026-11-23; the petition for review remains pending | S122 (=S79=S18); S81 (=S19, S20, S123) | yes | yes. Opinion re-decoded (hash matches): filed 2026-11-23; admin stay 2026-11-20; "we deny the emergency motion for stay and lift the administrative stay"; Army not a party (fn.1) | yes. Stay ruling only, not merits | primary | 1 court origin; Earthjustice = 1 adverse-party origin (allegations, confirmed verbatim, e.g. notice "a mere five days") | keep. **Remove the KWWL "Nov 19 stay" date** (S88), which the opinion contradicts |
| 15 | EPA settlement: Army + AO pay $39,311 for alleged 2023 permit violations (improper chamber detonation; grenade chamber not closed after move; OB pans "in excess of permit limits"); CAFO RCRA-07-2024-0092 | S113 (=S10=S73=S602=S72-MM); S11, S603, S1201 | yes | yes. Release re-read in full. Docket and filing date confirmed by the EPA Notice of Filing excerpt (S1201) | **Date correction:** CAFO filed and effective **2024-09-27**; EPA announced it 2024-12-09/10. "December 2024 settlement" (changelog, harm module) is the announcement date | primary | 1 (O-EPA-R7-CAFO-2024) | downgrade (date wording only). Alleged violations resolved by consent, not adjudicated; CAFO text (admissions, split) unread |
| 16 | DOL OFCCP 2017: AO pays $50,000 to two former security officers; no admission of liability | S604 (=S74-MM) | yes | yes. Re-read in full | yes (2017-03-27) | primary | 1 | keep |
| 17 | DOL WHD 2018: AO paid $678,296 back wages to 63 employees, **Milan TN**, SCA/CWHSSA | S605 (=S75-MM) | yes | yes. Re-read in full; violations partly via subcontractor | yes (2018-10-01); Milan site, not IAAP | primary | 1 | keep (state Milan) |
| 18a | OSHA 2006 (insp. 301555504): 9 serious (8 current), $40,500 reduced to $34,000 | S110 (=S96) | yes | yes. osha.gov page read. New: it is the **accident inspection of the 2006-06-12 double fatality** (pattern-analyst said the link was unconfirmed). Standards: 1910.119 (7 items), 1910.184 (3 items) | yes | primary | 1 | keep. Update pattern (f) |
| 18b | OSHA 2019: $10,000 for late reporting of a hospitalized worker | S111 (mirrors), S112 (news) | mirrors only | not verified on osha.gov | — | secondary | 2 weak (mirror; Gleaner, which itself reads OSHA) | downgrade: "reported by OSHA-data mirrors and news" |
| 18c | OSHA 2024: 1910.134(d)(1)(iii), failure to monitor TNT exposure; $9,795 reduced to $5,877 | S111, S112, S1202 | yes | citation text yes (osha.gov violation-detail excerpt, S1202); penalty from mirrors | yes | primary (excerpt) | 1 | keep (state penalty "per OSHA-data mirrors") |
| 19a | AO registered in Iowa as a **foreign LLC** on 1998-06-10 (entity 218272) | S58 | yes | yes. Re-extracted (third-party mirror; Iowa SOS portal not reached) | yes | mirror of government record | 1 | keep |
| 19b | AO is a Delaware LLC | S57, S61, S910 | not re-opened | S57 is a 2002 agreement filed by a third party; SAM mirrors conflict (DE / IA / TN) | DE registry not checked; formation date unknown | primary filing (third party) / mirrors | 2 (SEC exhibit; FTC complaint snippet) | downgrade: "described as a Delaware LLC in a 2002 agreement and a 2007 FTC complaint; Delaware record not checked" |
| 19c | "Formed 21 July 1998" (timeline 2.2) | S911 | snippet only | **no**. The Iowa foreign registration (1998-06-10) predates 21 July 1998, so that date cannot be the LLC's legal formation. It is the JV Formation/Operating Agreement date | conflict | — | — | downgrade: "formed in 1998, on or before 10 June 1998 (exact Delaware date unknown); JV agreements dated 21 July 1998" |
| 19d | 1998 joint venture of Mason & Hanger and General Dynamics Ordnance Systems (83 Fed. Cl. 559) | S47 (=S909) | yes | yes. Full opinion decoded: No. 07-867C, filed 2008-09-12, verbatim sentence (fact-finding citing trial testimony). The reporter cite is not printed on the slip opinion | yes | court record | 1 court + subject statements (S49, S53) | keep |
| 19e | 100% Day & Zimmermann ownership since 2007 | S49 (=S912), S53, S50, S51 (=S914), S62; S604 | yes | D&Z history re-read verbatim ("2007 ... acquires 100% of American Ordnance, previously a joint venture with General Dynamics"). Independent: DOL OFCCP (Mar 2017) states AO "is owned by Day and Zimmerman", which supports D&Z ownership but not "100%" or "2007". Conflict: the 2008 D&Z/ATK release calls AO a JV that "includes" ATK (S52 = S913) | ownership in 2017 and 2026: yes. 2007 date: subject-only | subject + 1 independent govt | O-DZ (subject; 1 origin) + O-DOL-OFCCP-2017 + SAM mirror | downgrade: "D&Z states it acquired 100% in 2007; a 2017 DOL release independently describes AO as D&Z-owned" |
| 20 | USAspending: $4,715.65M obligations FY2008-FY2026 (4 UEIs); FY2023 $1,251.97M | S40, S41 | yes | **recomputed today, exact match** (per-hash spending_over_time; recipient totals $4,258.61M + $422.31M + $21.12M + $13.61M). LM5H parent total $3,251.6M is a roll-up and must not be added | obligations, not outlays; FY2026 partial; pre-FY2008 excluded | primary | 1 | keep |
| 21 | Facility contract W52P1J-09-E-0001, AO (LM5HGA7J4R45), $0 obligated, 2008-10-02 to **2030-12-25** | S43, S48 | yes | yes. Re-fetched | yes | primary | 2 (USAspending; COFC 2024 opinion) | keep |
| 22 | 2026 lead-azide awards: MuniRem $30,300, PIKA $770,810 (ceiling $9,999,999 not added), Cape-Weston $3,061,090.18; total $3,862,200.18; none to AO | S44 | yes | yes. Re-fetched; keyword search FY2021-26 returns only these three. The WaPo timing (MuniRem contract 26 Mar, cancelled ~2 months later) matches PoP 03-26 to 05-27 | yes; keyword search covers descriptions only | primary | 1 (+WaPo for MuniRem) | keep |
| 23 | ATSDR 1999: RDX in 5 off-site private wells, max 27.5 ppb vs 2 ppb HAL; site "No Apparent Public Health Hazard" | S102 (=S34) | URL exists | **not re-verified**: the extract timed out. Only Wave-1 excerpts. A 2021 FYR excerpt shows "27.5 µg/L" (context unseen) | 1999 document; predates remedies | primary (excerpt) | 1 | downgrade: "as excerpted"; re-read full PHA before publishing the number |
| 23b | ATSDR 2013 LHC: conclusion "not captured" (harm module) | S103 | yes | **now captured**: private-well RDX 4.3 µg/L, surface water max 40.4 µg/L; non-cancer concern "None"; cancer risk "Low"/"Very Low"; nitrate 11 mg/L in a non-drinking well | 2013 | primary | 1 | add as contrary evidence |
| 24 | PFAS: dedicated OU13 at IAAP | S100 (=S101, S922, S923, S29) | yes | yes. Re-extracted: "OU13: Areas affected by Perfluoroalkyl Substances (PFAS)"; OU6, 7, 10-13 in RI/FS | current page; **S922's "12 OUs" is outdated** | primary | 1 (O-EPA-SF-PROFILE); Army PFAS reports are a 2nd origin | keep; **remove "12 OUs"** |
| 25 | 2021 FYR: OU1 soil RGs for antimony, cadmium, Cr(VI), thallium and mercury "no longer protective" | S104; S31; S30/S918 | excerpts only | yes. The FYR Addendum (May 2025) excerpt quotes Issue 2 verbatim; the RAB minutes repeat it | 2021 finding; post-ROD change status unknown | Army-prepared FYR (EPA-concurred) | **1 origin** (O-ARMY-FYR-2021); RAB and Addendum are repeats | keep, attributed to the 2021 FYR; count once |
| 26 | EEOICPA payments for "Iowa Ordnance Plant" ≈ $372.3M | S109; S116; S1200 | DOL page 404 | the figure is a snapshot with **no as-of date**. A law-firm page citing DOL gives $358,084,767 as of 2023-01-08 (S1200); IPR says "nearly $400 million" (Nov 2026) | date unknown; cumulative and rising; covers AEC-era Line 1 workers, **not AO-era conduct** | secondary (excerpt of govt stats) | 1 (DOL statistics) | downgrade: "more than $370 million (DOL statistics; date not captured)"; never link it to AO |
| 27 | WaPo: AO asked MuniRem on 2025-09-24 to "neutralize and dispose" of 68 drums; on 2026-02-04 an AO manager emailed that the government was "taking another approach to lead azide disposal based on their assessment of safety risk"; the Army says "current indications are that we were made aware in March" | S609 (=S1014=S1109=S79-MM) | yes | **verified verbatim** from the full syndicated text (S1109). washingtonpost.com copy is paywalled | yes (2026-11-24) | news (secondary; documents not seen) | 1 news origin (WaPo). MuniRem's account in IPR (S1108) is a commercially interested party | keep **as reported and attributed** |
| 27b | Pattern-analyst: the Feb 2026 email is "stronger evidence of a safety assessment before March"; framing of "warning signs months before" | S1014 | — | **over-reads the source**. The email cites the government's safety assessment of a *disposal approach* (chemical neutralization). It does not show the material was known to be degraded before March. The WaPo headline frames it that way; the Army disputes it | — | — | 1 | downgrade: "the email shows the government had rejected the neutralization approach on safety grounds by 4 Feb 2026; whether degradation was known then is disputed" |
| 28 | Lead azide stored ">2 decades" (court) vs consolidated at IAAP in 2009 (AP/KCRG) | S122; S90, S91, S92 | yes | court recital confirmed verbatim ("for over two decades", water/ethanol). AP: "transferred there in 2009" (snippet) | unresolved scope (different inventories possible; cf. 2004 "40-year-old stockpile", S94) | court + news | 2 (court record; AP; S92 repeats AP) | keep both, attributed; unresolved |
| 29 | AO still IAAP operator in Nov 2026 although S2 names Army "owner and operator" (C26) | S2 p.1; S43; S51; S1109 | yes | yes. S2 p.1 re-read. WaPo (2026-11-24) calls AO "the contractor that operates and oversees the plant"; facility contract runs to 2030 | yes | mixed | 3 (USAspending; D&Z; WaPo) | keep |
| 30 | Detonation status | S27, S36, S93; today's searches | — | scheduled about 9:00 a.m. CST 2026-11-25 (Army advisory). **No report confirming that it occurred** was found in two news searches run today | as of 2026-11-25 | primary (Army advisory) | — | keep as "scheduled; occurrence unconfirmed at time of writing". Must be re-checked |
| 31 | S71 permit expiry 9/28/2028 | S71 | yes | yes. Full EPA page now read (was snippet) | yes | primary | 1 | keep (upgrade) |
| 32 | Money-mapper S70-MM to S85-MM | S70-MM to S85-MM | — | identical to S600-S615 | — | — | count once | **remove from citation**; cite S600-S615 only |

### 2.2 Origin collapse (sources that repeat one origin; count once)

| Origin ID (as now in ledger) | Rows | Count as |
|---|---|---|
| O-EPA-R7-EMERG-2026 (EPA Region 7 lead-azide permits, notices, letter) | S2, S12, S13, S14, S16, S74, S75, S76, S77, S78, S118, S119, S120, S121, S607, S608, S77-MM, S78-MM | 1 agency origin. S2 = S14 (byte-identical). S12 = S75 = S118 (same notice page). S13 = S76 = S119 = S608 (same page). S16 = S78 = S121 (same letter) |
| O-NEWS-ABC-2026-11-24 | S15, S80, S134 | 1 article; its timeline items derive from S121, so they are not independent of EPA |
| O-NEWS-CNN-2026-11-23 | S35, S128, S610, S80-MM | 1 |
| O-WAPO-2026-11-24 | S609, S1014, S1109, S79-MM | 1 |
| O-CA8-26-3374 (opinion) | S18, S79, S122 | 1 court ruling |
| O-CA8-26-3374-RESP (DOJ/EPA filings) | S17, S82, S124 | 1 party (EPA) |
| O-EJ-PETITIONERS-2026 | S19, S20, S81, S123 | 1 adverse party (allegations) |
| O-EPA-R7-CAFO-2024 | S10, S11, S73, S113, S602, S603, S72-MM, S73-MM, S1201 | 1 |
| O-DZ (subject) | S49, S50, S51, S912, S914 (S53 NDIA deck is also a D&Z statement) | 1 subject origin |
| O-DZ-ATK-2008 | S52, S913 | 1 |
| O-COFC-07-867 | S47, S909 | 1 |
| O-EPA-SF-PROFILE | S29, S100, S101, S922, S923 | 1 |
| O-ARMY-FYR-2021 | S30, S31, S918 (S104 repeats it via RAB) | 1 |
| O-ATSDR-PHA-1999 | S34, S102 | 1 |
| O-IDNR-REG | S33, S106, S921 | 1 |
| O-EPA-ROD-OU1 | S136, S919 | 1 |
| O-EEOICPA-IAAP | S108, S901 (plus S900, S902-S904) | 1 program |
| O-OSHA-301555504 | S96, S110 | 1 inspection |
| O-OSHA-347498107 | S111, S1202 | 1 |
| O-NEWS-IPR-2026-11-23A | S99, S116 | 1 |
| O-MIDLAND-2026 | S24, S95 | 1 (new outlet; low weight) |
| O-IAHHS | S37, S135 | 1 |
| O-40CFR745 | S25, S126, S127 | 1 rule |
| O-40CFR50.16 | S26, S125 | 1 |
| O-AP-2026 | S90, S92, S93 | 1 |
| O-ARMY-PRESSCONF-2026-11-24 (countercase) | S1100, S1101 | 1 |
| Money-mapper duplicates | S70-MM to S85-MM = S600-S615 | cite S6xx only |

### 2.3 Ledger corrections made (sources.md)

All edits were made by a script that changed only the Origin ID, Independent?, Archive link and Notes cells. Notes were appended, never overwritten. The file was re-read immediately before writing, and a column-wise diff confirmed that 0 other cells changed. Backup: `/tmp/claude-0/-home-user/369ed7fa-37a5-5358-9c37-630cbeaa70c3/scratchpad/sa-backup/sources.pre-run.md`.

- **Origin ID (60 cells).**
  - Harmonised per 2.2: S2, S12-S16, S74-S78, S118-S121, S607, S608, S77-MM, S78-MM; S15, S80, S134; S35, S128, S610, S80-MM; S99, S116; S10, S11, S72-MM, S73-MM, S73, S113, S602, S603; S18, S79, S122; S17, S82, S124; S19, S20, S81, S123; S49-S51, S912, S914; S52, S913; S47, S909; S29, S100, S101, S922, S923; S30, S31, S918; S917; S34, S102; S33, S106, S921; S136, S919; S108, S901; S96, S110; S25, S26; S37, S135; S24, S95; S32, S39.
  - Filled blanks: S22, S23, S27, S28, S36, S38.
- **Independent? (16 cells).**
  - EPA 2026 notices and letter rows (S12, S13, S16, S74-S78, S118-S120, S607, S608, S77-MM, S78-MM) now read "yes (rel. to Army/AO); no (rel. to EPA's own permitting)".
  - S82 changed from "n/a" to "no (party filing)".
- **Archive link (38 cells).** Recorded that Wayback, perma.cc and archive.ph are unavailable, plus the SHA-256 of today's copy for S1, S2/S14, S3, S71, S113 group, S118 group, S119 group, S121 group, S122 group and S47 group.
- **Notes (47 cells appended, tagged "[SA 2026-11-25]").** These record what was re-verified and what was corrected, including:
  - S16/S78: "inaccessible" status superseded.
  - S74/S120: pages now return 404.
  - S18: the opinion has no UN0130.
  - S88: stay date contradicted.
  - S922: "12 OUs" outdated.
  - S58/S911: formation-date conflict.
  - S103: 2013 LHC conclusions.
  - S109: EEOICPA dating.
  - S110/S96: fatality link.
  - S604: D&Z ownership; the "$13M" statement.
  - S1109: full text read.
  - S41/S40/S43/S44: recomputation.
- **New rows:**
  - S1200: law-firm EEOICPA dating, low weight.
  - S1201: EPA CAFO Notice of Filing.
  - S1202: osha.gov 2024 violation detail.
  - A planned Yahoo row was **not** added, because S1109 (countercase) already holds that URL; its Notes were updated instead.

### 2.4 Additional observations from re-reading primaries (not previously in any module)

- **S1 OB SOP Remark B** (image p.200) says the OB procedure "was developed for emergency situations such as ... propellant found to be unstable ... deemed unsafe for continued storage" and requires an AO/Army determination that no other safe treatment exists. That matches S2 p.1's description of OB under the 2018 permit. It frames OB at IAAP as an exception-based process, which bears on pattern (a).
- **EPA letter (S121)** adds dated steps:
  - 3/16/2026: OSC deployed.
  - 3/24/2026: five EPA air samples, "did not indicate lead above levels of concern".
  - 5/13/2026: a second public notice, of an "extension".
- **The Iowa foreign registration (1998-06-10) predates the JV agreements (1998-07-21).** The LLC therefore existed before the agreements that the timeline treats as "formation".
- **DOL OFCCP (2017)** says AO had "more than $13 million in federal contracts" since 2014. USAspending shows hundreds of millions for FY2014-FY2016 on the Iowa UEI alone. The DOL figure is technically consistent ("more than") but cannot be used as a measure of funding.

---

## 3. Contrary evidence

- **ATSDR 2013 LHC (S103)** rated private-well RDX (4.3 µg/L) and surface-water RDX as no non-cancer concern and "Low"/"Very Low" cancer risk. That cuts against any implication of current drinking-water harm from RDX.
- **The EPA letter (S121)** describes the wind condition as "not to exceed 15 miles per hour", so the "and" in S2 is very likely a slip, not a void safeguard in practice.
- **The Feb 2026 email** is consistent with the Army's account that it rejected chemical neutralization on safety grounds. It does not establish earlier knowledge of degradation. The Army says it will investigate.
- **The court found** the Army evaluated "a full range" of alternatives and that EPA's reliance on that was reasonable (stay stage only).
- **Several apparent conflicts are scope differences:**
  - "since 2008" (CRS) refers to the facility contract;
  - "over two decades" vs the 2009 consolidation may describe different inventories;
  - the June 30 vs July 1 date: the 404 snippet loses to the primary letter.
- **Penalties and citations** (EPA $39,311; OSHA reductions) are allegations or citations resolved by settlement, not adjudicated findings of fault.

---

## 4. Confidence and limitations

**Confidence: high** for items checked against primaries today:
- S1 images; S2 pages; S3;
- the 8th Cir. opinion; the EPA letter and notices;
- the EPA release; the DOL releases; the OSHA 2006 record;
- the COFC opinion;
- the USAspending recomputation; the D&Z history; the EPA Superfund profile; the WaPo full text.

**Medium** for:
- Iowa registration (mirror);
- 2021 FYR wording (excerpts);
- OSHA 2024 (excerpt; penalty via mirrors);
- March reopening (snippets).

**Low** for:
- ATSDR 1999 numbers (not re-read);
- OSHA 2019 (mirrors only);
- the EEOICPA total's date.

**Limitations:**
- No Wayback, perma.cc or archive.ph access, so there are no archive links. Local hashes are recorded instead, and the scratchpad copies are not durable.
- Not re-opened: the CAFO body, the Delaware registry, SAM.gov, the full DOJ and petitioner filings, and the ATSDR 1999 full text.
- Detonation outcome unknown as of these searches.
- Another agent appended rows during this audit (S1100-S1111). Origin assignments for those rows were left as that agent set them, except S1109 Notes and Archive.

---

## 5. Next best research action

Re-open three sources and take durable copies once an archive host or alternate route is available:
1. **The CAFO RCRA-07-2024-0092 body (yosemite.epa.gov).** It settles the CAFO date, any admissions, the Army/AO penalty split and which OB limit was exceeded.
2. **The full ATSDR 1999 PHA.** It is needed to confirm or replace the 27.5 ppb figure.
3. **The Delaware Division of Corporations record for American Ordnance LLC.** It is needed to fix the legal formation date.

At the same time, re-run the detonation-status search after 2026-11-25 midday CST and capture the Army's +6-hour plume estimate.
