# Pattern Analyst: GD-20261011-trump-accounts

Module owner: pattern-analyst (Wave 2). Run date: 2026-10-11.
Inputs: case.md, sources.md, and all four Wave 1 modules (claim-auditor, money-mapper, timeline-analyst, harm-accountability-analyst).
Tools used this run: Nimble Extract (26 USC 530A on LII; Treasury sb0374, full text), Nimble Search (inaugural and ballroom donor lists, OGE 278-T aggregators, myRA precedent, SPYM fee history, Fiscal Service financial-agent solicitations, temporary-regulation summaries, FINRA Rule 2210), and WebSearch. Unreachable: FEC docquery PDF and OpenSecrets (DNS / timeout), federalregister.gov (DNS), napa-net.org (timeout / DNS).
New sources use the prefix PA-. **No Bash tool was available in this run, so the PA- rows could not be appended to sources.md with `cat >>`. They are listed in the "Pending ledger rows" section at the end for the coordinator to append. Write and Edit were not used on sources.md.**

Rule applied throughout: a pattern needs at least two independent instances. One instance is an observation. Patterns describe mechanics only. No pattern below is evidence of intent, quid pro quo, or wrongdoing.

---

## 1. Question investigated

Do tactics or mechanics repeat across the events documented in Wave 1? I tested the five candidate patterns the coordinator supplied, and found three more:

1. Firms that pledged or donated early later received program roles.
2. Official messaging overstates benefits or misattributes the source of funds.
3. Program milestones are timed relative to political events.
4. Design features tilt benefits by income.
5. The same firms pledge to Trump Accounts and donate to other presidential projects.
6. *(new)* Implementing rules followed specific donor commitments.
7. *(new)* Compensation and selection terms are undisclosed along the operator chain.
8. *(new)* Presidential remarks and reported presidential trades involve program-linked firms.

For each I list the instances, counterexamples and ordinary-practice explanations, then grade strength.

Strength scale:
- **Strong**: several independent, primary-verified instances and few material counterexamples.
- **Moderate**: at least two documented instances, but with material ordinary explanations or instances that are not fully independent.
- **Weak**: the instances exist, but base rates or counterexamples explain them about as well.
- **Observation**: a single instance.

---

## 2. Findings

### 2.0 Summary table

| Pattern | Instances (source IDs) | Counterexamples | Ordinary-practice explanation? | Strength |
|---|---|---|---|---|
| P1. Pledgers or donors got program roles | BNY: pledge list, then financial agent (MM-S15, MM-S4, MM-S3). Robinhood: $2M inaugural donation, CEO at 2025-06-09 event, "technology and capital" offer, pledge list, then trustee (MM-S27, PA-S3, TL-S20, MM-S23, MM-S15, MM-S5). State Street: pledge list, CGCN lobbying registration 2026-06-05, then default fund 2026-07-01 (MM-S15, TL-S63, CA-S7). BlackRock: $1M inaugural donation, pledge list, LDA filings, then optional funds (PA-S3, PA-S4, MM-S15, TL-S63, CA-S7) | Vanguard got a lineup role (VTI) without being on the 2026-01-29 pledge list and with no inaugural donation found (MM-S15, CA-S7). 24 of 28 pledgers got no role, including natural custodians Schwab, JPMorgan ($1M inaugural), Bank of America and Wells Fargo (MM-S15, PA-S3, PA-S4). At least 10 inaugural-donor pledgers got no role (PA-S1, PA-S2, PA-S3). ICI pledged and lobbied against a single provider, and lost (TL-S25). No inaugural donation by BNY or State Street was found (not verifiable; databases unreachable) | Yes, substantial. Treasury has long used single financial agents, e.g. BNY under the CARES Act and Comerica for myRA (MM-S37, PA-S7, PA-S8). SPYM has been the cheapest major S&P 500 ETF since its Aug 2023 fee cut, which predates the lobbying (PA-S13). Pledges were solicited industry-wide (MM-S15) | **Weak** as a pattern. The Robinhood concentration of ties is an **observation** (one firm) |
| P2. Messaging overstates or misattributes | "$1,000 gift courtesy of Donald J. Trump" (TL-S31, TL-S32). "Automatic $1,000" (CA-S14) and "Get $1,000 for every American child" (CA-S6), against the election requirement (CA-S2). "No cost to the American taxpayer" (TL-S18) against JCT -$15.2B (CA-S5). "Not a government program" (CA-S10) against accounts "created or organized by the Secretary" (CA-S1). Projections that conflict: $674k, then "half a million", then $1.9M vs $1.09M at 28 (CA-S10, TL-S37, CA-S12, CA-S13). 86%/80% income shares with no method (HA-S4, CA-S11, CA-S14, CA-S15). Individual-stock mock-up against the index-only rule (TL-S33, CA-S1). "Starting a business" listed as a qualified use (HA-S21). Cross-program precedent: "President Donald J. Trump" on the memo line of 2020 stimulus checks (PA-S9, PA-S10) | Illustrations labeled "not guaranteed" (CA-S6). CEA published a no-contribution case of $5,800 (CA-S13). The White House Dell FAQ called the seed elective (CA-S12). The 2026-10-07 release says parents must claim (CA-S15). "Courtesy of" was replaced within about 15 days (TL-S33). The stock mock-up was removed by 2026-10-01 (TL-S35). Scam warnings were accurate (HA-S22) | Partly. Administrations promote programs, and ~10% nominal S&P returns are common in popular finance. Benchmark only: FINRA Rule 2210 generally bars member broker-dealers from projecting performance, and requires tax-deferral illustrations to cap assumed returns at 10% and disclose that withdrawals are taxed as ordinary income (PA-S16). It does not govern government speech. WaPo called the 2020 check name "unprecedented" (PA-S9) | **Strong** (mechanics: simplification consistently favors the program or the President). All instances share one origin family (administration channels), so they are independent statements, not independent sources |
| P3. Milestones timed to political events | Auto-enrollment completed 2026-10-01, then a White House event on 10-07, 27 days before the midterms, with the line "every single Democrat voted against" (TL-S61, TL-S62). Temporary regulations effective immediately on good cause; the comment period runs to 11-30, after the election (PA-S15, TL-S39). Partisan White House release 2026-07-07 (TL-S62, title only). Gerstner in 2023: ads "this political season" (TL-S6) | The July 4 contribution start is fixed by statute (12 months after enactment) (CA-S1). The seed birth window is fixed by statute (CA-S2). The statute expressly lets the Secretary make the election, i.e. auto-enroll (CA-S1 sec. 530A(b)(2)(C)(i)). Critics had urged auto-enrollment (CA-S22). The Dell deposits (completed 10-09) needed auto accounts (CA-S19). The 2025-12-02 launch tracked the Notice and the Dell pledge, not an election (TL-S27) | Yes. Treasury's good-cause rationale cites growth-period loss and donor readiness (PA-S15). Temporary-plus-proposed rules with a 3-year sunset is a standard IRS structure (PA-S15). Any 2026 milestone falls in a midterm year | **Weak** (partisan messaging in official releases is documented; election-driven scheduling is not shown) |
| P4. Design tilts benefits by family means | Tax deferral "economically regressive" (CA-S18). Contribution-scaled balances; Maine CDA median contributions $790 vs $3,600 by income (CA-S22). Employer §128 channel "could increase inequities" (CA-S18, CA-S3). Take-up skew before auto-enrollment (HA-S6, HA-S2, HA-S9). Seed limited to 2025-28 births while the tax preferences are permanent (CA-S1, CA-S2). SSI cliff at 18 (HA-S53, unverified) | About 96% of federal cost is the flat $1,000 (CA-S5, MM-S1). CRS: the seed reduces wealth inequality (CA-S18). Dell allocation went to the lowest-income ZIPs first, with a final threshold of $117,300 (CA-S19). Auto-enrollment (CA-S16). Cato: family money gets little or negative tax advantage, which shrinks the regressive subsidy (HA-S51, unverified figures). Seed reaches children the CTC misses (HA-S12) | Yes. Same structure as IRAs and 529s, where contribution-scaled tax benefits are standard (CA-S18) | **Strong** for the mechanics of each component. The net distribution is **unmeasured** |
| P5. Pledgers overlap with donors to other presidential projects | Micron: $1M inaugural, ballroom donor, $250M pledge (MM-S28, PA-S5, MM-S29, MM-S14). Coinbase: $1M inaugural, ballroom, pledge list (PA-S1, PA-S5, MM-S15). Comcast: $1M inaugural, ballroom, pledge list (PA-S1, PA-S5, MM-S15). Nvidia: $1M inaugural, ballroom, pledge list (PA-S3, PA-S5, MM-S15). At least 12 of 28 Jan-2026 committers appear as 2025 inaugural donors (PA-S1 to PA-S4, PA-S6) | Ballroom donors not on the Jan-2026 commitment list: Apple, Amazon, Meta, Microsoft, Google, Lockheed (PA-S5, MM-S29, MM-S15; the later list of >70 companies was not checked). Overlapping donors Micron, Coinbase, Comcast and Nvidia received no program role. Committers with no donation found: Chipotle, Steak 'n Shake, SoFi, Chime, Block, Russell, ICI (not exhaustively checked) | Yes, strong. The inaugural committee raised about $239M from a very broad corporate base, including regular bipartisan donors: AT&T ("every inauguration ... three decades"), Visa and Charter gave to Biden 2021 (PA-S6, PA-S3, PA-S2). Overlap among the largest firms is expected | **Weak** as evidence of exchange. **Moderate** as a description: the same large firms appear across administration-solicited funding vehicles |
| P6. Implementing rules followed donor commitments | Dell's ZIP-income targeting was announced 2025-12-02 (CA-S12) when Notice 2025-68 designated no geographic areas (CA-S4). The 2026-09-30 temporary rules created an "approved class" combining age and geography (CA-S17), and deposits were completed 10-09 (CA-S19). Stock gifts: Treasury said on 2026-07-02 it would accept stock (CA-S8), the rules followed 09-30 (MM-S20), and Shotwell's stock gifts went to >2M children (MM-S32) | The statute contemplates Secretary-designated geographic areas of at least 5,000 beneficiaries and grants general regulatory authority (CA-S1 sec. 530A(a), (f)(3)). Rules apply to all donors, donors cannot pick individual children, and the 5,000-beneficiary minimum holds (MM-S20). Dalio's Connecticut gift fit the statute's state class without new rules (MM-S14). Treasury addressed deduction concerns in the preamble (MM-S20) | Yes. Agencies routinely write implementing rules after enactment. The statute lists age, geography and birth-year classes separately (CA-S1). Whether a combined class is within the Secretary's authority is a **legal question, not concluded here** | **Moderate** (two documented sequences) |
| P7. Undisclosed terms along the operator chain | BNY financial agency agreement and compensation not published (MM-S3, MM-S37). BNY–Robinhood agreement and cross-marketing scope not public (MM-S6, HA-S28). Robinhood's Trump Accounts revenue amount not disclosed (MM-S8, MM-S9; $25M figure unverified, MM-S10). No selection solicitation found (TL timeline 2026-04-06; PA-S14 shows Fiscal Service publishes such solicitations for other roles) | Robinhood's 8-K discloses a cost-plus basis (MM-S8). The SEC no-action letter and customer agreement are public (HA-S28, MM-S7). Zero account fees and no payment for order flow (MM-S7). Treasury can replace the trustee (MM-S12). The statute lists trustee criteria (CA-S1 sec. 530A(g)) | Partly. Financial agents are designated under longstanding authority outside the FAR, and agreements may be posted later. Absence in search is not absence | **Moderate** (the instances are facets of one arrangement, so not fully independent) |
| P8. Presidential remarks and reported trades involve program-linked firms | Dell: "Go out and buy a Dell Computer," 2026-02-19 (HA-S31, citing a Roll Call transcript); urged the audience to buy Dell computers on 2026-07-06 (TL-S54). Reported Dell purchases 02-10, 03-02/11/17/23 and 06-24 (HA-S31, PA-S11). Reported purchases of Robinhood (03-11/17/23) and BNY (03-12/23) before the 04-06 designation (HA-S31, TL-S45) | Trades attributed to discretionary third-party managers (HA-S31, TL-S45). Very high volume: about 3,555 trades in Q1 2026 alone (HA-S31) and about 8,940 from Jan 2025 to Jun 2026 (PA-S11), including Visa, Mastercard, Coinbase, Bank of America and Apple (HA-S31). The same accounts sold BlackRock on 2026-06-24 (PA-S11). Whether the selection was public before 03-11 is unknown | Partly. With trading at this volume, overlap with any large-cap program participant is likely by chance. Praising a large donor at its own gift event is common | **Weak** for the trades (base rate). **Moderate** for the repeated Dell product promotion (two dated instances, same firm). No finding; allegations remain allegations |

### 2.1 P1: Pledgers or donors received program roles

**Instances (all documented).**
- **BNY.** BNY is on Treasury's 2026-01-29 list of 28 corporate committers (MM-S15, re-extracted in full this run). It had pledged a $1,000 employee match (MM-S4). Treasury designated it financial agent on 2026-04-06 (MM-S3). BNY's own release says its role "builds on its participation as one of the first financial services companies to join" (TL-S41).
- **Robinhood.**
  - $2M to the inaugural committee, its first inaugural gift in three cycles (MM-S27, PA-S3).
  - CEO attended the 2025-06-09 roundtable (TL-S20).
  - Offered "technology and capital resources" to the initiative (MM-S23).
  - On the pledge list (MM-S15).
  - Named sole initial trustee and broker on 2026-04-06 (MM-S5, HA-S28).
- **State Street.** On the pledge list (MM-S15). It registered CGCN to lobby on "TRUMP Accounts" on 2026-06-05 (TL-S63). Its SPYM was named the default fund on 2026-07-01 (CA-S7).
- **BlackRock.** $1M to the inaugural committee, also a first in three cycles (PA-S3; the FEC Form 13 snippet lists "BLACKROCK FINANCIAL MANAGEMENT INC", PA-S4). It is on the pledge list (MM-S15) and filed LDA reports naming the program (TL-S63). Its IVV and ITOT are optional lineup funds, not the default (CA-S7).

**Counterexamples.**
- **Vanguard** has a lineup role (VTI) but is not on the January pledge list (MM-S15), and no inaugural donation was found.
- **Pledgers with no role.** 24 of 28 committers have no program role, including the natural custodian candidates Schwab, JPMorgan, Bank of America and Wells Fargo (MM-S15). JPMorgan gave $1M to the inauguration (PA-S3), and Bank of America appears in the FEC filing (PA-S4).
- **Inaugural-donor pledgers with no role:** Coinbase, Comcast, Charter, Uber, Nvidia, Broadcom, IBM and Visa (PA-S1, PA-S2, PA-S3, PA-S6), plus JPMorgan and Bank of America. That is at least 10.
- **ICI** pledged (MM-S15), but its stated position against a single Treasury-selected provider (TL-S25) was not adopted.
- **Franklin Templeton** disclosed Treasury meetings in Feb–Mar 2026 (TL-S63) and has no role.
- **BNY and State Street:** no inaugural donation was found in the sources reviewed. This is *not verified*, because the FEC and OpenSecrets lists were unreachable.

**Base rates (as far as checked).** Of the 5 role-holders, 4 were on the pledge list and 2 had a documented inaugural donation. Of the 28 pledgers, 4 got roles. Of the 12 or more pledgers with a documented inaugural donation, 2 got roles.

**Ordinary-practice explanations.**
- Treasury has a long record of single designated financial agents: BNY under the CARES Act (MM-S37) and Comerica for the Obama-era myRA (PA-S7, PA-S8).
- BNY is a dominant custodian.
- SPYM's 0.02% expense ratio has been the lowest among major S&P 500 ETFs since August 2023 (PA-S13). That predates State Street's 2026 lobbying registration, so cost alone is a sufficient explanation for the default choice.
- Treasury solicited pledges broadly and said it would keep "collaborating with industry partners to secure additional commitments" (MM-S15). Firms competing for a role would rationally also pledge, so pledging does not distinguish winners from losers.

**What remains distinctive (observation, single firm).** Robinhood concentrates several disclosed ties:
- the inaugural donation;
- the June 2025 offer of support;
- the CEO's presence at the White House event;
- an architect's fund holding a stake (Altimeter; MM-S25);
- reported presidential purchases before designation (HA-S31).

Robinhood is also a less conventional choice of trustee than legacy custodians. The statute requires Treasury to weigh reliability and compliance history, customer service and cost (CA-S1 sec. 530A(g)). No record of how those criteria were applied was found (P7). This is one firm, so it is an observation, not a pattern.

**Strength: Weak.**

### 2.2 P2: Official messaging overstates benefits or misattributes the source of funds

**Instances (each checked against primary text in Wave 1).**

| # | Statement | Channel / date | Against | Sources |
|---|---|---|---|---|
| a | $1,000 "gift courtesy of Donald J. Trump" | trumpaccounts.gov 2025-12-02 to 12-15 | §6434 Treasury outlay, JCT $14.6B | TL-S31, TL-S32, CA-S2, MM-S1 |
| b | "automatic $1,000 seed"; "Get $1,000 for every American child born ..." | White House 2026-07-06; trumpaccounts.gov | §6434 requires an election; the seed requires a claim even after auto-enrollment | CA-S14, CA-S6, CA-S2, CA-S15 |
| c | "no cost to the American taxpayer" | Roundtable 2025-06-09 (transcript hosted by opposing party) | JCT -$15,233M | TL-S18, CA-S5 |
| d | "Trump Accounts are not a government program" | Bessent 2025-12-17 | Accounts "created or organized by the Secretary"; Treasury-funded seed | CA-S10, CA-S1 |
| e | "nearly $674,000"; "at least half a million"; "$1.9 million by age 28" | Bessent 12-17 and 01-28; White House Dell page | CEA's own max-contribution figure is $1,091,900 at 28; all are nominal and pre-tax at ~10.3–10.55% | CA-S10, TL-S37, CA-S12, CA-S13 |
| f | 86% (later 80%) of accounts from families under $200k | Treasury 06-02; White House 07-06; Bessent 07-27; White House 10-07 | No method or benchmark published. The share stayed at 86% while the base grew from 5.5M to 7M accounts | HA-S4, CA-S14, CA-S11, CA-S15 |
| g | Portfolio mock-up of Nvidia, Caterpillar, Home Depot, Tesla | trumpaccounts.gov 2025-12-17 to at least 2026-01-01 | Index-fund-only rule | TL-S33, TL-S34, CA-S1 |
| h | Starting a business listed as a qualified use | trumpaccounts.gov (late May 2026) | No such statutory category | HA-S21 |

**Cross-program instance of mechanic (a).** In 2020, "President Donald J. Trump" was printed on the memo line of Economic Impact Payment checks. Contemporaneous reporting called this "unprecedented" (PA-S9, PA-S10). It shows that crediting a federal payment to the President personally has occurred in more than one program. It does not show purpose.

**Counterexamples.**
- trumpaccounts.gov labels its figures "for illustration only ... not guaranteed" (CA-S6).
- CEA published the no-contribution case ($5,800 at 18) (CA-S13).
- The White House Dell FAQ described the seed as elective (CA-S12), and the 2026-10-07 release says parents must claim (CA-S15).
- The "courtesy of" wording was replaced with "from the U.S. Treasury" within about 15 days (TL-S33).
- The stock mock-up was gone by 2026-10-01 (TL-S35).
- Treasury's scam warnings were accurate and specific (HA-S22, HA-S23).

**Ordinary practice.** Administrations of both parties promote their programs, and the nominal ~10% historical S&P 500 return is a common popular-finance assumption. As a **benchmark only**: a FINRA member broker-dealer's retail communications generally may not project performance. Tax-deferral illustrations by members must cap the assumed return at 10% and disclose that withdrawals are taxed as ordinary income (PA-S16). FINRA rules do not apply to government speech. Several official projections sit at or above that 10% ceiling and omit the tax disclosure (C13 in claim-auditor). The comparison describes a gap from a private-sector disclosure norm. It is not a rule violation.

**Mechanics.** Across eight distinct statements on four channels over ten months, the simplifications consistently run toward a larger, more certain, or more personally attributed benefit. Some were corrected. None of the corrections was accompanied by a public correction notice in the sources reviewed.

**Strength: Strong** (for the repeated mechanic). All instances share one origin family (administration channels). They are independent statements, not independent corroborating sources.

### 2.3 P3: Timing of milestones relative to political events

**Instances.**
- Temporary regulations took effect on publication (2026-09-30). Treasury invoked good cause to skip prior notice and comment (PA-S15).
- Auto-enrollment was announced complete on 2026-10-01 (TL-S61).
- A White House event followed on 2026-10-07, 27 days before the 2026-11-03 midterms. The release includes "every single Democrat voted against" (TL-S62).
- The companion proposed rules take comments until 2026-11-30, after the election (TL-S39).
- A 2026-07-07 White House release had a partisan title (TL-S62, title only).
- In 2023, Gerstner described ads timed to "this political season" (TL-S6).

**Counterexamples and statutory constraints.**
- The 2026-07-04 contribution start is set by statute ("12 months after the date of the enactment", CA-S1 sec. 530A(b)(1)(C)(i)(I)). The bell ceremony on 07-06 was discretionary; the launch date was not.
- The seed window (2025–2028 births) is statutory (CA-S2).
- The statute itself authorizes the Secretary to make the account election "based on information available to the Secretary from tax returns or otherwise" (CA-S1 sec. 530A(b)(2)(C)(i)). Auto-enrollment was therefore contemplated in the 2025 law, not invented in 2026.
- Independent analysts had urged auto-enrollment (CA-S22, HA-S3).
- The Dell deposits, completed 2026-10-09 (CA-S19), needed auto accounts to reach the targeted class. That is an operational reason for the late-September timing.
- The 2025-12-02 coordinated launch tracked IRS Notice 2025-68 and the Dell pledge (TL-S27), not an electoral date.

**Ordinary practice.** Treasury's stated good-cause rationale is that delay would shorten children's investment growth period and would stall donor contributions (PA-S15; an industry summary, not the Federal Register text, which was unreachable). The structure is standard IRS practice: temporary regulations paired with identical proposed regulations and a 3-year sunset (PA-S15). Any 2026 milestone necessarily falls in a midterm year.

**Unresolved.** A pointer source (PA-S17, unverified) says the withdrawn March 2026 proposal had declined broad auto-enrollment, citing taxpayer-privacy constraints. If accurate, the reversal from March to September is a policy change whose stated reasons should be read in the full T.D. 10056 preamble. It was not read here.

**Strength: Weak.** Partisan messaging in official releases is documented as an observation. That the schedule was driven by the election calendar is not shown.

### 2.4 P4: Design features tilt benefits by family means

**Instances (each from independent analysis).**
- CRS: tax deferral on growth is "economically regressive", and employer contributions "could increase inequities" (CA-S18).
- Contribution-scaled balances: Maine's CDA program shows median contributions of $790 for incomes under $25k and $3,600 for $150k and above (CA-S22).
- The employer §128 channel reaches only employees of firms that adopt written programs (CA-S3). About 4% of employers plan one (HA-S52, unverified).
- Take-up before auto-enrollment skewed away from lower-income families (HA-S6 5% of LMI parents; HA-S2; HA-S9).
- The seed covers only 2025–2028 births, while the contribution-scaled preferences are permanent (CA-S1, CA-S2).

**Counterexamples.**
- About 96% of the JCT 10-year cost is the flat $1,000 deposit (CA-S5, MM-S1). CRS judges the seed to reduce wealth inequality (CA-S18).
- Dell's $250 was allocated from the lowest-income ZIP codes upward, with a final threshold of $117,300 (CA-S19).
- Auto-enrollment removes the filing-based access gap (CA-S16, CA-S17).
- Cato and EPIC find little or negative tax advantage for after-tax family money (HA-S51 unverified figures, HA-S46). That shrinks the regressive tax subsidy itself.
- Brookings: universal seeds reach children the CTC misses (HA-S12).

**Ordinary practice.** Contribution-scaled tax benefits are the standard structure of IRAs and 529 plans (CA-S18). The tilt is a design choice familiar from existing law, not a novel mechanism.

**Strength: Strong** for the mechanics of each component. The direction of the net distribution depends on contribution behavior, which is **unmeasured** (no TPC, JCT or CBO quintile table exists for the provision).

### 2.5 P5: Pledgers overlap with donors to other presidential projects

**Instances.**
- **Micron:** $1M inaugural (MM-S28, PA-S5), White House ballroom donor (MM-S29, PA-S5), $250M Trump Accounts pledge (MM-S14).
- **Coinbase:** $1M inaugural (PA-S1), ballroom (PA-S5, MM-S29), on the 2026-01-29 committer list (MM-S15).
- **Comcast:** $1M inaugural (PA-S1), ballroom (PA-S5), committer (MM-S15).
- **Nvidia:** $1M inaugural (PA-S3), ballroom (PA-S5), committer (MM-S15).

More broadly, at least 12 of the 28 January committers appear in 2025 inaugural-donor reporting: Robinhood, BlackRock, JPMorgan, Bank of America, Coinbase, Comcast, Charter, Uber, Nvidia, Broadcom, IBM and Visa (PA-S1, PA-S2, PA-S3, PA-S4, PA-S6). Amounts for Bank of America and IBM were not captured.

**Counterexamples.**
- Ballroom donors Apple, Amazon, Meta, Microsoft, Google and Lockheed are not on the January commitment list (PA-S5, MM-S15). The later list of more than 70 companies (MM-S18) was not obtained.
- None of Micron, Coinbase, Comcast or Nvidia has a program role, and no program money flows to them beyond their own pledged outlays.
- Several committers had no donation found (Chipotle, Steak 'n Shake, SoFi, Chime, Block, Russell, ICI). This was not exhaustively checked.

**Ordinary practice.** The 2025 inaugural committee raised about $239M from a very broad corporate base (PA-S3). Several donors give to every inauguration regardless of party: AT&T for "more than three decades" (PA-S6), and Visa and Charter gave to Biden in 2021 (PA-S3, PA-S2). Among the largest U.S. firms, overlap across administration-solicited vehicles is expected by base rate.

**Mechanics.** A largely overlapping set of large firms appears across three administration-solicited funding vehicles: the inaugural committee, the ballroom, and Trump Accounts pledges. Their Trump Accounts pledges are mostly employee matches that cost the firms money and are deductible as compensation (MM-S2).

**Strength: Weak** as evidence of exchange. **Moderate** as a descriptive overlap.

### 2.6 P6 (new): Implementing rules followed specific donor commitments

**Instance A (geography).**
1. 2025-12-02: the Dells announced $250 per child in ZIP codes under a median-income threshold (CA-S12).
2. The same day, Notice 2025-68 stated that no qualified geographic areas were designated in the initial phase (CA-S4).
3. 2026-09-30: temporary rules created an "approved class" combining age and geography, with a 5,000-beneficiary minimum (CA-S17).
4. 2026-10-09: Invest America reported deposits complete (CA-S19).

The statute lists three classes separately: all under-18s; under-18s in Secretary-designated geographic areas; and under-18s born in specified years (CA-S1 sec. 530A(f)(3)).

**Instance B (stock).**
1. 2026-07-02: Treasury announced it would accept stock gifts (CA-S8).
2. 2026-09-30: the temporary rules created qualified stock contributions with a 5-year hold (MM-S20, CA-S17).
3. Shotwell's stock gifts went to more than 2M children (MM-S32).

The preamble acknowledges that donors "are attracted by the hope" of giving children a stake in their company (MM-S20).

**Counterexamples.**
- §530A(a) gives broad regulatory authority, and §530A(f)(3)(B) contemplates Secretary-designated geographic areas (CA-S1).
- The rules apply to every donor, and donors cannot pick children (MM-S20).
- Dalio's Connecticut gift used the statute's state class directly, with no new rule (MM-S14).
- Treasury responded on the record to deduction concerns (MM-S20).

**Ordinary practice.** Implementing rules routinely follow enactment, and accommodating announced donors is consistent with the statute's purpose of attracting qualified general contributions.

**Flag for legal review.** Whether a combined age-and-geography class and in-kind stock contributions fit within the statutory text is a legal question. This module does not answer it.

**Strength: Moderate** (two documented sequences; mechanics only).

### 2.7 P7 (new): Undisclosed terms along the operator chain

**Instances.**
- The Treasury–BNY financial agency agreement and its compensation are not published (MM-S3). Treasury has published earlier BNY agreements with fee exhibits (MM-S37).
- The terms of the BNY–Robinhood agreement, including the scope of the cross-marketing limit, are not public (MM-S6, HA-S28).
- Robinhood's Trump Accounts revenue is undisclosed in amount (MM-S8, MM-S9; the $25M figure is unverified, MM-S10).
- No selection solicitation or evaluation record was found. For comparison, the Bureau of the Fiscal Service does publish a "Financial Agent Selection Process" solicitation for at least one other 2026 financial-agent role (PA-S14).

**Counterexamples.**
- Robinhood disclosed its cost-plus basis in an SEC 8-K exhibit (MM-S8).
- The SEC staff no-action letter and the customer agreement are public, showing zero account fees and no payment for order flow (HA-S28, MM-S7).
- Treasury retains control of the app and can replace the trustee (MM-S12).
- Statutory trustee criteria exist (CA-S1 sec. 530A(g)).

**Ordinary practice.** Financial-agent designations rest on National Bank Act authority, outside the FAR. Agreements are sometimes posted after execution. Absence in search is not proof of non-publication.

**Strength: Moderate.** The four instances are facets of a single arrangement, so they are not fully independent.

### 2.8 P8 (new): Presidential remarks and reported trades involving program-linked firms

**Instances.**
- **Dell product promotion, twice.** On 2026-02-19 in Rome, Georgia: "Go out and buy a Dell Computer" (HA-S31, citing a Roll Call transcript). On 2026-07-06 at the bell ceremony, he urged the audience to buy Dell computers (TL-S54).
- **Reported Dell stock purchases.** 2026-02-10 and 03-02/11/17/23 (HA-S31, citing OGE 278-T row numbers), and 06-24 (PA-S11).
- **Reported Robinhood and BNY purchases.** Robinhood on 03-11, 03-17 and 03-23, and BNY on 03-12 and 03-23, all before the 04-06 designation (HA-S31, TL-S45).

**Counterexamples and base rate.**
- The Trump Organization attributes the trades to discretionary third-party managers (HA-S31). Bessent described an "outside manager" (TL-S45).
- Volume is very high: Warren's letter counts about 3,555 trades in Q1 2026 alone, about 50 per trading day (HA-S31). An aggregator counts about 8,940 transactions from January 2025 to June 2026 (PA-S11). Counts differ by source (3,555, 3,642 and 3,711 for Q1); the discrepancy is unresolved. The same period includes purchases of Visa, Mastercard, Coinbase, Bank of America, Citigroup and Apple (HA-S31).
- The same accounts sold BlackRock, a lineup sponsor, on 2026-06-24 (PA-S11).
- Whether the BNY/Robinhood selection was known to anyone outside Treasury before 03-11 is **unknown**. A trade-press page with a March URL path could not be opened, and its text appears to refer to the April announcement.

**Ordinary practice.** At this trading volume, purchases of any given large-cap program participant are likely by chance. Presidents commonly praise companies at events celebrating those companies' gifts. A direct exhortation to buy a specific brand is less common, but it is outside the program's mechanics.

**Strength.**
- Trades: **Weak** (the base rate explains them comparably well).
- Repeated Dell promotion: **Moderate** (two dated instances of the same act).

No regulator has made a finding. The Warren–Garcia questions are allegations, not findings (HA-S31).

---

## 3. Contrary evidence

- **Base rates undercut most "insider" readings.**
  - Only 4 of 28 pledgers received roles.
  - At least 10 inaugural-donor pledgers received none.
  - One role-holder (Vanguard) neither pledged by January nor showed a donation.
  - The President's accounts traded thousands of large-cap names.
- **Statute fixes much of the timeline.** The July 4 start, the seed window and the Secretary's power to auto-elect are all in the 2025 law (CA-S1, CA-S2). Treasury's discretion lay mainly in the order and speed of guidance.
- **Cost-based selection is sufficient for the default fund.** SPYM has the lowest expense ratio among major S&P 500 ETFs and has held that position since 2023 (PA-S13).
- **Some corrections occurred.** "Courtesy of Donald J. Trump" and the individual-stock mock-up were removed (TL-S33, TL-S35). Official pages also carry accurate qualifiers in places (CA-S6, CA-S12, CA-S13, CA-S15).
- **The federal outlay is the most progressive component** (96% flat seed; CA-S5, CA-S18). P4 concerns private and tax components, not the federal dollar.
- **Precedent for single financial agents** spans administrations (MM-S37, PA-S7).

---

## 4. Confidence and limitations

- **Overall confidence: Medium.**
  - **High** for P2 and P4 mechanics: Wave 1 checked each instance against primary text, and statute text was re-read directly this run (CA-S1).
  - **Medium** for P1, P5 and P8, where the counterexample base rates rest on secondary donor lists and OGE aggregators.
  - **Low-to-medium** for P3 and P6 stated rationales, because the Federal Register text was unreachable and an industry summary (PA-S15) was used instead.
- **Access failures.** docquery.fec.gov, OpenSecrets, federalregister.gov and napa-net.org were unreachable (DNS or timeout). The FEC Form 13 was seen only as a search snippet (PA-S4). BNY, State Street and Vanguard inaugural status is therefore "not found", **not** "did not donate".
- **Incompleteness.** The donor cross-match covered the 28 January committers only, not the later list of more than 70 companies (MM-S18). Ballroom donor amounts are undisclosed (PA-S5).
- **Source independence.** P2 instances all originate in administration channels. PA-S5 and PA-S2 (Public Citizen) and HA-S31 (Warren–Garcia) come from parties critical of the administration and are used only for list facts. Ascensus (PA-S15) is an industry participant that lobbied on the program (TL-S63). PA-S11 and PA-S13 are commercial or aggregator sites.
- **Ledger.** PA- rows are not yet in sources.md (no Bash tool was available; see the next section).
- **No intent inferred.** Every pattern here describes sequence and mechanics. None is a finding of influence, quid pro quo, insider trading or illegality. The legal-authority question in P6 and any Hatch Act or ethics question in P8 need qualified legal review.

---

## 5. Next best research action

FOIA Treasury (Office of the Fiscal Assistant Secretary / Bureau of the Fiscal Service) for the Trump Accounts financial-agent record, and check whether any of it is already posted on Treasury's financial-agency-agreements page. Request:
- the BNY financial agency agreement with its compensation exhibit;
- any selection or solicitation memo applying the §530A(g) trustee criteria;
- the BNY–Robinhood subcontract and its cross-marketing terms;
- the date the selection was decided.

This single record would test P1 (selection basis), P7 (disclosure) and the timing question in P8. Pair it with a direct read of the T.D. 10056 preamble on federalregister.gov from a network that resolves it, to settle P3 and P6.

---

## Pending ledger rows (for coordinator to append to sources.md; not appended because no Bash tool was available in this run)

| ID | URL | Publisher / author | Published | Accessed | Type | Origin ID | Independent? | Archive link | Supports (exact claim) | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| PA-S1 | https://www.rollingstone.com/politics/politics-features/trump-inauguration-donors-big-oil-big-pharma-big-tech-crypto-1235252214/ | Rolling Stone | 2025-01-31 | 2026-10-11 | news | PA-O-INAUG-LDA | yes | none checked | P1/P5: $1M inaugural donations by Uber, Coinbase, Comcast, Goldman Sachs; $2M by Robinhood (per LDA disclosures of 44 companies) | Read as Nimble search content. Pre-FEC-report; based on LD-203 disclosures |
| PA-S2 | https://www.citizen.org/article/corporations-and-billionaires-funnel-millions-into-trump-inauguration-committee/ | Public Citizen | 2024-12/2025-01 (date not captured) | 2026-10-11 | secondary commentary (advocacy tracker) | PA-O-INAUG-PC | yes (critical of administration) | none checked | P1/P5: Charter $1M (also gave $350k to Biden 2021, $250k to Trump 2017); Bank of America planned to give (amount undecided); Coinbase $1M; Uber and CEO $1M each | Advocacy source; used for list facts only |
| PA-S3 | https://www.cnbc.com/2025/04/23/trump-inauguration-donors-include-meta-amazon-target-delta-ford.html | CNBC | 2025-04-23 | 2026-10-11 | news | PA-O-INAUG-FEC | yes | none checked | P1/P5: committee raised record $239M; BlackRock $1M and JPMorgan $1M (no gift in two prior cycles); Robinhood $2M (first time); Nvidia and Broadcom $1M; Visa a regular contributor (same amounts 2017/2021/2025); Bessent gave $250,000 | Based on FEC filing released 2025-04-20 |
| PA-S4 | https://docquery.fec.gov/pdf/973/202504209756330973/202504209756330973.pdf | Trump Vance Inaugural Committee, FEC Form 13 | 2025-04-20 | 2026-10-11 (snippet only) | primary filing | PA-O-INAUG-FEC | yes | none checked | P1: entries include "BANK OF AMERICA" (01-16-2025) and "BLACKROCK FINANCIAL MANAGEMENT INC" (12-31-2024) | Seen only via Nimble search snippet; name-date pairing in snippet layout is ambiguous; direct fetch failed (DNS). Do not cite amounts from it |
| PA-S5 | https://www.citizen.org/article/banquet-of-greed-trump-ballroom-donors-feast-on-federal-funds-and-favors/ | Public Citizen | 2025-10/11 (date not captured) | 2026-10-11 | secondary commentary (advocacy analysis) | PA-O-BALLROOM | yes (critical) | none checked | P5: White House ballroom donors include Coinbase, Comcast, Nvidia, Micron, Apple, Amazon, Meta, Microsoft, Google, Lockheed; Micron gave $1M to 2025 inaugural | Amounts per ballroom donor not disclosed by White House. List facts only |
| PA-S6 | https://www.newsweek.com/american-businesses-supporting-donating-donald-trump-list-2027957 | Newsweek; Katherine Fung, Jenna deJong | 2025-02-07 (updated 2025-04-29) | 2026-10-11 | news | PA-O-INAUG-LDA | yes | none checked | P5 ordinary practice: AT&T spokesperson: contributed "as we have done for every inauguration for more than three decades, regardless of which party"; Goldman: "this and future presidential inaugural committees"; Robinhood statement | Paywalled flag in metadata; content read via search |
| PA-S7 | https://www.pbs.org/newshour/economy/obama-administration-releases-new-retirement-savings-plan | PBS NewsHour; Richard Eisenberg (Next Avenue) | 2015-11 (approx.; Forbes version dated 2015-11-04) | 2026-10-11 | news | PA-O-MYRA | yes | none checked | P1/P7 ordinary practice: myRA.gov "operated by Comerica Bank, the financial agent of the Treasury that's responsible for administering myRA accounts" | Precedent for single designated financial agent in a retail savings program (Obama administration) |
| PA-S8 | https://www.pionline.com/article/20141223/ONLINE/141229959/comerica-chosen-as-myra-custodian/ | Pensions & Investments | 2014-12-23 | 2026-10-11 | news | PA-O-MYRA | yes | none checked | P1: Comerica chosen as custodian for Treasury's myRA | Headline/lead only |
| PA-S9 | https://www.washingtonpost.com/politics/coming-to-your-1200-relief-check-donald-j-trumps-name/2020/04/14/071016c2-7e82-11ea-8013-1b6da0e4a2b7_story.html | Washington Post | 2020-04-14 | 2026-10-11 | news | PA-O-EIPCHECK | yes | none checked | P2 cross-program precedent: "unprecedented decision" to print "President Donald J. Trump" on $1,200 paper checks | Snippet only; paywalled |
| PA-S10 | https://abcnews.com/Politics/inside-donald-trumps-stimulus-checks/story?id=77534116 | ABC News | 2021 (approx.) | 2026-10-11 | news | PA-O-EIPCHECK | yes | none checked | P2: "President Donald J. Trump" appeared on memo line of checks sent to 35 million Americans; records obtained via FOIA lawsuit | Snippet only |
| PA-S11 | https://open-cabinet.org/officials/trump-donald-j | Open Cabinet (aggregator of OGE 278-T filings) | data through filing posted 2026-08-22 | 2026-10-11 | secondary commentary (data aggregator) | PA-O-OGE278T | unknown | none checked | P8 base rate: 8,940 transactions (5,772 purchases, 3,168 sales) Jan 6, 2025 – Jun 29, 2026; 80% filed late; 2026-06-24 BlackRock sale ($50K-$100K) and Dell Technologies purchase ($50K-$100K) | Aggregator; verify against OGE PDFs. Q1 2026 counts differ across sources (3,555 HA-S31; ~3,642; 3,711 tracefour) |
| PA-S12 | (reserved, not used) | | | | | | | | | |
| PA-S13 | https://www.optimizedportfolio.com/spym/ | Optimized Portfolio (personal-finance site) | 2026 (after 2026-10-02 data) | 2026-10-11 | secondary commentary | PA-O-SPYM | yes (commercial site; possible affiliate links) | none checked | P1 ordinary practice: SPYM (formerly SPLG) expense ratio cut from 0.03% to 0.02% in Aug 2023; ticker changed Oct 2025; lowest expense ratio among major S&P 500 ETFs (VOO, IVV 0.03%; SPY 0.0945%) | Corroborated by investlane.com and gomdorieconomic.com in same search; issuer page not opened |
| PA-S14 | https://fiscal.treasury.gov/system/files/2026-06/rpn-solicitation.pdf | Bureau of the Fiscal Service | 2026-06 | 2026-10-11 (snippet only) | government record | PA-O-FASP | yes | none checked | P7 ordinary practice: Fiscal Service publishes a "Financial Agent Selection Process" solicitation for a Retail Product Network financial agent | Different program; shows a published-solicitation practice exists. No equivalent found for Trump Accounts (searches 2026-10-11) |
| PA-S15 | https://www.ascensus.com/resources/industry-regulatory-news/treasury-issues-trump-account-temporary-regulations/ | Ascensus (recordkeeper; industry news) | 2026-09/10 | 2026-10-11 | secondary commentary (industry summary of T.D. 10056) | CA-O-FR-TEMPREGS | no (industry participant; LDA filer per TL-S63) | none checked | P3/P6: temp regs effective on publication, expire after 3 years, paired with replacement proposed regs; March 9 proposal withdrawn; agencies claim good cause because delay would leave children without accounts for QGCs or the $1,000, shorten growth period, and hinder donor contributions; Secretary election on or about 2026-10-01 | Summary of primary rule; count once with CA-S16/CA-S17. FR text not reachable |
| PA-S16 | https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210 | FINRA | current rule | 2026-10-11 | primary rule (SRO) | PA-O-FINRA2210 | yes | none checked | P2 benchmark: Rule 2210(d)(1)(F) communications "may not predict or project performance" (exceptions incl. hypothetical illustrations of mathematical principles); (d)(4)(C) tax-deferral illustrations: assumed return "may not exceed 10 percent", must disclose ordinary income tax on withdrawals | Applies to FINRA members only; not to government communications. Benchmark, not a violation claim |
| PA-S17 | https://brendonbeebe.substack.com/p/trump-accounts-explained-2026-how | Brendon Beebe (Substack) | 2026-10 | 2026-10-11 | secondary commentary (blog) | PA-O-BEEBE | unknown | none checked | Pointer only: says March 2026 proposed rules declined broad auto-enrollment citing taxpayer-privacy constraints; temporary rules issued invoking "good cause"; temp regs cite 530A(b)(2)(C)(i) | Low-quality source; claims unverified; use only to locate the T.D. 10056 preamble passage |
