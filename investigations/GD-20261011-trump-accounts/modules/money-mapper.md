# Money Mapper: GD-20261011-trump-accounts

Module owner: money-mapper. Claims covered: C6, C9, C11, C12, plus the incentive side of the motive question.
Research date: 2026-10-11. Tools: Nimble Search/Extract, one Nimble Web Search Agent run (used only for leads; every fact below was re-checked against a source I accessed myself, or is labeled), and WebSearch. The Senate LDA database (lda.senate.gov) and SEC EDGAR were unreachable from this environment (proxy denied the connection; Nimble Extract timed out). See Limitations.

Categories used throughout:
- **Documented flow**: money movement shown in a primary record (statute, JCT, Federal Register, Treasury, SEC filing, company filing or legal agreement).
- **Disclosed relationship**: a tie the party itself disclosed (press release, 13F, Form 990, company statement) or that credible news reported from a disclosure. It is not a money flow tied to the program.
- **Inference**: my reasoning, labeled as such, with the basis given.
- **Unknown**: searched for and not found, or not accessible.

---

## 1. Question investigated

Who is paid, who pays, and who gains financially from Trump Accounts? Specifically:
(a) which firms were designated to hold or invest the accounts, on what terms and with what fees;
(b) lobbying for the provision and its precursor (the Invest America Act), and who backs the concept;
(c) donor and employer pledges, and their tax treatment for the giver;
(d) the federal cost and any distribution of the tax benefit;
(e) any documented financial ties between promoting officials and benefiting firms.

This module does not assess motive or intent. It maps incentives only.

---

## 2. Findings

### 2.1 Legal entities (only those relevant to the money question)

| Entity | Role | Evidence |
|---|---|---|
| U.S. Treasury / IRS | Creates initial accounts. Pays the $1,000 pilot deposit. Receives and allocates "general funding contributions". Selected the default fund. | MM-S3, MM-S12, MM-S20 |
| The Bank of New York Mellon Corp. (BNY; NYSE: BK) | Designated as Treasury "financial agent" on 2026-04-06. Trustee of the Master Trust that pools "Auto Account" assets. Trustee of each Auto Account. | MM-S3, MM-S4, MM-S12 |
| Robinhood Markets, Inc. (NASDAQ: HOOD), via Robinhood Securities, LLC (clearing broker and nonbank trustee) and Robinhood Financial LLC (introducing broker) | "Sole broker-dealer and initial trustee" for initial (claimed) accounts. Builds and runs the app. Engaged as a subcontractor of BNY, not directly by Treasury. | MM-S5, MM-S6, MM-S7, MM-S8 |
| State Street (SPYM, SPTM), BlackRock/iShares (IVV, ITOT), Vanguard (VTI) | Sponsors of the five ETFs in Treasury's investment lineup. SPYM is the launch default. | MM-S13, MM-S14 |
| Invest America Charitable (EIN 93-4763819), a 501(c)(3) in Menlo Park, CA | Gerstner-founded advocacy and education charity. FY2024 Form 990: about $3.9M revenue, 99% from contributions. Brad Gerstner is chairman/director (unpaid per the 990). Grants include $400K to the Milken Institute. Program description says it sponsored "The Economic Impact of Invest America Accounts" study. Not to be confused with the unrelated "Invest In America Charitable Fund" (AZ) or "Invest America Fund Inc". | MM-S30, MM-S31, MM-S16 |
| Michael & Susan Dell Foundation (MSDF) | Eligible donor making the $6.25B "general funding contribution" (Treasury's regulatory preamble refers to the MSDF contribution). | MM-S20, MM-S16 |
| Altimeter Capital Management, LP (SEC CIK 1541617) | Gerstner's investment firm. 13F filer holding HOOD and UBER, among others. | MM-S25, MM-S26 |

### 2.2 Who gets paid to run the accounts (C9)

1. **Account-level fees to families are contractually zero, per Robinhood's own documents.** Robinhood's SEC no-action request states that Robinhood "will not be permitted to collect any fees directly or indirectly from the Trump accounts". It says Robinhood is instead compensated under agreements between Treasury and the Financial Agent (BNY) and between BNY and Robinhood (MM-S6). The customer agreement states that Robinhood does not receive payment for order flow on Trump Account transactions and charges no account fees, and that the trustee "will not charge fees for managing a Trump Account" (MM-S7). **Documented** (as the terms on paper). Whether these terms hold in practice is **unknown**.
2. **Taxpayer-funded service compensation to Robinhood is documented in kind but not in amount.** Robinhood's Q1 2026 results (SEC Exhibit 99.1) say: "Our work for Trump Accounts is contracted on a cost plus basis with a small margin, so we expect revenues to exceed costs." The company planned an extra $100M of 2026 spending to build and support the app (MM-S8). On the Q2 2026 call, management said "other revenues" rose partly because "we started generating revenues for our work on the Trump accounts" (MM-S9). A figure of $25M in Q2 2026 Trump Account revenue appears only in a low-quality secondary outlet (MM-S10) and is **not verified** against a Robinhood filing.
3. **BNY's compensation is unknown.** Treasury's designation release gives no compensation terms (MM-S3). Treasury has published earlier BNY financial agency agreements with compensation exhibits, for example the CARES Act FAA with fixed monthly fees (MM-S37), so publication is possible. No Trump Accounts FAA was found. **Unknown.**
4. **Fund-sponsor fees are capped by statute and are small.** Eligible investments must be index mutual funds or ETFs with annual expenses of at most 0.1% (MM-S12, MM-S2). The default, SPYM, has about a 0.02% expense ratio. The other four lineup funds are about 0.03% (MM-S14, MM-S13). **Documented** (cap and lineup). **Inference (illustrative only):** if all ~$4.5B deposited by 2026-10-07 (MM-S18) sat in SPYM at 0.02%, State Street's annual fee revenue would be about $0.9M. That is trivial relative to the firms' scale. The incentive for fund sponsors is asset gathering and brand exposure, not fee yield. The actual fund-by-fund AUM is **unknown**.
5. **Customer-relationship value to Robinhood is a disclosed incentive.** Robinhood's CEO told CNBC that the role "puts Robinhood in front of the next generation" and "is literally going to be the first investment account for millions of people". He also said there "may be, in the future, management fees through ETFs" but that they would be "very small" (MM-S11). The SEC no-action letter references a "limitation on cross-marketing" in the BNY–Robinhood agreement, but its scope is not public (MM-S6). **Disclosed relationship / stated incentive.** How much cross-selling is allowed is **unknown**.
6. **Scale.** About 70M accounts exist after auto-enrollment. More than $4.5B was deposited by 2026-10-07: $1.3B in federal seed money, more than $600M from family and friends ($638M per MM-S19), and $2.6B in philanthropic gifts (MM-S18, a White House primary statement, not independently audited). Robinhood reported about 7M children signed up and nearly $1.5B in contributions by its late-July call (MM-S9).

### 2.3 Lobbying and the Invest America lineage (C9, motive incentives)

1. **Sponsor and backers (documented).** Sen. Ted Cruz introduced S. 1718, the Invest America Act, on 2025-05-12 (MM-S21, MM-S22). The bill gave Treasury rules for choosing account providers "based on low fees, historical investment performance, administrative capabilities". Cruz's release quotes Brad Gerstner (Altimeter) and Michael Dell endorsing it (MM-S21). A House version was in the Ways and Means reconciliation package the same day (MM-S21).
2. **Concept origin (disclosed).** Michael Dell told CNBC that he heard the idea from Gerstner around 2021. CNBC reports that Gerstner founded Invest America, which advocated for inclusion in the reconciliation bill (MM-S16). Uber, Dell, Nvidia, Oracle and Altimeter publicly said in May 2025 that they would contribute to employees' children's accounts (MM-S35).
3. **Robinhood's pre-selection support (disclosed, reported).** On 2025-06-09, the day of the White House "Invest America" event, Robinhood's CEO said the firm planned to provide "technology and capital resources" for the initiative (MM-S23, paywalled; headline and lead only). This was about 10 months before Robinhood was named initial trustee. The nature and amount of the "capital" is **unknown**.
4. **Senate LDA disclosures: unknown.** I could not query lda.senate.gov (proxy denied, Nimble timed out, WebFetch DNS failure; MM-S38). A web search for LDA filings naming "Invest America" or "Trump Accounts" surfaced none, only unrelated "Invest in America Act" infrastructure filings. The Nimble agent likewise found no LDA filing naming the provision. **This is not evidence that no lobbying occurred.** Invest America Charitable is a 501(c)(3), so its own lobbying would appear on Form 990 Schedule C. Its Schedule C was not reviewed. **Unknown.**

### 2.4 Donor and employer pledges and their tax treatment (C6, C12)

**Pledges (documented or disclosed):**
- **Michael & Susan Dell: $6.25B.** $250 for each of 25M children aged 10 and under (born 2016–2024) in ZIP codes with median income at or below $150,000. Announced 2025-12-02 (MM-S16, MM-S17). Invest America's site says the gifts "have been deposited and invested" (MM-S33). Michael Dell said on 2026-10-07 that 10M accounts were funded, with 25M expected by week's end (MM-S19, reported remarks). **Discrepancy kept visible:** CT Mirror describes the ZIP threshold as median family income "up to $118,000" (MM-S19), which conflicts with the $150,000 in MM-S16, MM-S17 and MM-S33. It is unresolved.
- **Treasury's commitments list (2026-01-29)** names 28 corporate committers. Financial firms include BNY, BlackRock, State Street, Robinhood, Charles Schwab, JPMorgan Chase, Bank of America, Wells Fargo, Visa, Mastercard, SoFi, Chime, Block, Coinbase and Russell Investments. Also listed are the Investment Company Institute (the fund-industry trade group) and Turning Point USA. Philanthropic donors listed are the Dells, the Dalios, Brad Gerstner, Harold Hamm and Nicki Minaj (MM-S15). The White House said on 2026-10-07 that more than 70 companies had committed (MM-S18). Most employer pledges match the $1,000 seed for employees' children (MM-S36, MM-S11).
- **Other reported pledges:** Micron $250M (per a Trump Truth Social post); Ray & Barbara Dalio $250 per child for about 300,000 Connecticut children; Gerstner $250 per child for some Indiana children; Nicki Minaj $150K–$300K (all MM-S14). SpaceX president Gwynne Shotwell announced stock gifts to more than 2M children aged 11–17 (MM-S32).
- **Notable overlap (disclosed):** four of the five program operators and fund sponsors (BNY, Robinhood, State Street, BlackRock) are also on Treasury's January 2026 list of corporate committers. Vanguard is the only one not on that list (MM-S15, MM-S4, MM-S5).

**Tax treatment for givers (documented, primary):**
- **Charitable route (C12).** Only governments and 501(c)(3) organizations can be "eligible donors" for qualified general contributions. Under temporary regulation §1.530A-7T(e)(1), a person's contribution to a 501(c)(3) to fund such a contribution "is deductible under section 170, subject to the other requirements of that section". Private foundations making these gifts are treated as exercising expenditure responsibility, and donor-advised funds may be used (MM-S20). So a donor such as the Dells gets the ordinary charitable deduction when funding their foundation, as with any §170 gift. The child receives the money tax-free when deposited but taxable on withdrawal (MM-S2, MM-S20).
- **Stock gifts.** Since 2026-09-30, qualified general contributions may be made in publicly traded domestic stock, which must generally be held 5 years (MM-S20). Treasury's preamble says it "reviewed claims that allowing stock contributions is a method of facilitating tax deductions of appreciated stock". It responds that individuals must still act through a 501(c)(3) and that the rules "have no impact on the deductibility" of such gifts (MM-S20). A financial planner quoted by CNBC says the rules make stock gifts attractive because donors avoid the capital-gains tax that selling first would trigger (MM-S39). **Documented** (rule text). The donor-side advantage is **expert commentary**, not a measured flow. Treasury also states donors "are attracted by the hope" that a five-year stock holding gives children "a stake in the fate of the corporation" (MM-S20). That is a primary statement of a non-financial donor incentive.
- **Employer route (C12).** Employer contributions of up to $2,500 per employee per year are excluded from the employee's income (§128). The employer deducts them as compensation. They count toward the $5,000 annual cap and are taxed to the child on withdrawal (MM-S2). **Documented.**
- **Inference:** for a corporate matcher, a $1,000 match is a deductible compensation expense with an employee-retention and public-relations benefit, not a pure gift. The tax benefit to the giver is the ordinary compensation deduction, not a new subsidy. The new element is the employee-side exclusion.

### 2.5 Federal cost (C11)

- **JCT JCX-35-25 (2025-07-01), Senate-passed text later enacted:** "Trump accounts and contribution pilot program", total budget effect **-$15,233M** over FY2025–2034. Year by year: -731, -6,446, -3,564, -3,627, then -33 to -270 per year through 2034. Footnote 1 shows outlays of **$14,599M**, concentrated in FY2025–2028 (731; 6,578; 3,650; 3,640) (MM-S1). I read this line item from the PDF text directly. So about 96% of the 10-year cost is the $1,000 deposits. The rest (about $0.6B) is revenue loss from tax deferral and the exclusions. **Documented.** This confirms C11 ("billions"). Earlier versions were scored differently: about $17.3B for the House May 2025 version (MM-S35, secondary), and BPC cites $14.6B (MM-S34), which matches the outlay component.
- **Inference (labeled):** the White House reports $1.3B of seed deposits made by 2026-10-07 (MM-S18). JCT projected $6.58B of pilot outlays in FY2026 alone (MM-S1). Actual seed outflows so far therefore appear well below the JCT path. The likely reason is that the $1,000 requires a parent to claim or elect (MM-S18, MM-S19). JCT budget timing may also differ from deposit timing. If the shortfall persists, the realized federal cost would fall below the score.
- **Distribution by income group: unknown at provision level.** No provision-specific JCT or Treasury distribution was found. CRS (MM-S2) concludes qualitatively that the tax-deferral benefit "is economically regressive (greater for higher-income households)". It also concludes that the flat pilot deposit reduces wealth inequality and that employer contributions "could increase inequities". I did not find a tax-expenditure estimate by income group. The harm-accountability module owns the broader distribution question.

### 2.6 Documented ties between officials or architects and benefiting firms (e)

| Tie | Category | Source |
|---|---|---|
| Robinhood donated $2M to the Trump 2025 inaugural committee (per a company spokesperson) | Disclosed relationship (FEC-reportable inaugural donation; not program money) | MM-S27, MM-S28 |
| Micron gave $1M to the inaugural committee (per NYT) and is on the White House ballroom donor list. Micron later pledged $250M to Trump Accounts | Disclosed relationship | MM-S28, MM-S29, MM-S14 |
| NYT reported that the SEC ended an investigation into Robinhood after its inaugural donation | Reported juxtaposition by NYT. **Not** evidence of a link to the trustee selection. No causal finding | MM-S28 (paywalled) |
| Altimeter (Gerstner) held about 900K HOOD shares (~$90M, 0.9% of its 13F book) at 2026-06-30, down from ~2.6M shares at 2025-09-30. Zacks reported that Altimeter added about $120M of HOOD in Q1 2025. Altimeter also holds UBER, an employer committer | Disclosed relationship (13F, via aggregators; EDGAR not directly reached) | MM-S24, MM-S25, MM-S26 |
| Michael Dell is CEO of Dell Technologies, an employer committer. The Dells' $6.25B gift runs through their foundation | Disclosed relationship | MM-S15, MM-S16, MM-S20 |
| Cruz, Bessent or Trump holding interests in BNY, Robinhood, State Street, BlackRock or Vanguard | **Unknown.** No such tie was found in the sources I accessed. OGE and Senate financial disclosures were not reviewed directly. The Nimble agent's summary claimed Bessent holds large broad-index ETFs (from a ProPublica OGE page). I did not verify this. Even if accurate, it would be a broad-market holding, not a firm-specific tie | n/a |

**Inference (labeled):** the person most credited with the concept (Gerstner) ran a fund that owned shares of the firm that later became sole initial trustee. Robinhood had publicly offered "technology and capital" to the initiative before its selection. These are disclosed facts that create an appearance-of-interest question about the selection. I found **no** evidence about how BNY chose Robinhood, whether Gerstner played any role, or whether alternatives were considered. Treasury's statute requires it to consider certain criteria when selecting trustees (MM-S12). The selection process record is **unknown**.

### 2.7 Money-flow table

| From | To | Mechanism | Amount / basis | Category | Source |
|---|---|---|---|---|---|
| U.S. Treasury (general revenue) | Eligible children's accounts (born 2025–2028) | §6434 pilot contribution, $1,000 each | JCT: $14,599M outlays FY2025–34. $1.3B deposited by 2026-10-07 | documented | MM-S1, MM-S18 |
| U.S. Treasury (forgone revenue) | Account holders | Tax deferral on growth; exclusion of employer, pilot and qualified general contributions until withdrawal | About $0.6B of the $15,233M 10-year total | documented (JCT total); split derived | MM-S1, MM-S2 |
| U.S. Treasury | BNY (financial agent) | Financial agency agreement | Not disclosed | unknown | MM-S3, MM-S37 |
| BNY (funded under Treasury agreements) | Robinhood | Subcontract for broker, initial trustee, app, support and custody | Cost-plus with "small margin". Robinhood planned +$100M of 2026 costs. Q2 revenue "started"; $25M figure unverified | documented (basis); amount unknown or unverified | MM-S6, MM-S8, MM-S9, MM-S10 |
| Account holders | Robinhood | Account fees, commissions, payment for order flow | $0 per customer agreement | documented (contract terms) | MM-S6, MM-S7 |
| Account holders (via fund NAV) | State Street, BlackRock, Vanguard | ETF expense ratios | Cap 0.10%. SPYM ~0.02%; others ~0.03%. AUM per fund unknown | documented (cap and lineup); AUM unknown | MM-S12, MM-S13, MM-S14 |
| Michael & Susan Dell, via MSDF (501(c)(3)) | 25M children's accounts, via Treasury | Qualified general contribution | $6.25B pledged ($250 × 25M). Funding of 10M→25M accounts reported Oct 2026 | documented (rule and pledge); deposit total reported | MM-S16, MM-S18, MM-S20, MM-S33 |
| Dells (individuals) | MSDF | Charitable gift | §170 deduction "subject to the other requirements" | documented (rule); actual deduction amount unknown | MM-S20 |
| Other philanthropists (Dalio, Gerstner, Micron, Minaj, Shotwell stock) | Defined classes of children | Qualified general contributions (cash or stock) | $250 per child (Dalio, Gerstner); Micron $250M; Minaj $150K–$300K; Shotwell stock to >2M children | disclosed (pledges); deposits largely unknown | MM-S14, MM-S32 |
| Employers (more than 70 companies) | Employees' children's accounts | §128 employer contribution | Typically a $1,000 match. Excluded from employee income up to $2,500 a year. Deductible to the employer | documented (tax rule); disclosed (pledges) | MM-S2, MM-S15, MM-S18 |
| Families, friends | Children's accounts | After-tax contributions, up to $5,000 a year | More than $600M ($638M) by 2026-10-07 | documented (White House statement) | MM-S18, MM-S19 |
| Robinhood | Trump 2025 inaugural committee | Donation | $2M | disclosed | MM-S27, MM-S28 |
| Robinhood | Invest America initiative | "Technology and capital resources" (June 2025) | Amount unknown | disclosed (reported) | MM-S23 |
| Donors (various) | Invest America Charitable | Contributions | About $3.9M (FY2024) | disclosed (Form 990 via aggregator) | MM-S30 |
| Altimeter Capital (Gerstner) | Robinhood shareholders | Equity position | About 900K HOOD shares at 2026-06-30 | disclosed (13F via aggregator) | MM-S25, MM-S26 |
| Robinhood, BNY | Program | Long-term customer acquisition and brand value | Not quantifiable | inferred (basis: CEO statements in MM-S11 and MM-S5; cross-marketing limit in MM-S6) | MM-S11, MM-S6 |

### 2.8 Who benefits if each claim is believed

| Claim | Who benefits if believed | Basis |
|---|---|---|
| C6 (Dell and other pledges add money to many accounts) | Children in qualifying ZIPs (direct deposits). The administration and named donors (reputational). Treasury and its operators (more claimed accounts mean more account activity, inferred). Donors also receive ordinary charitable deductions | MM-S16, MM-S18, MM-S20. Largely **supported**: the pledge is documented and deposits were reported under way in Oct 2026. Final total deposited is not yet confirmed |
| C9 (financial firms gain assets, fees, customers) | Critics (if believed). Partly **supported**: Robinhood is paid cost-plus and states a customer-acquisition benefit. BNY is paid an undisclosed amount. Fund sponsors gather assets at very low fees. **Countervailing:** zero account-level fees and no payment for order flow are contractually documented | MM-S6, MM-S7, MM-S8, MM-S11 |
| C11 (federal cost in the billions) | Critics and fiscal hawks; also proponents framing it as modest. **Supported**: JCT $15.2B over 10 years, 96% of it the deposits | MM-S1 |
| C12 (contributors get tax benefits) | Donors and employers. **Supported** within existing law: §170 deduction via 501(c)(3), §128 exclusion and compensation deduction. Stock gifts add a capital-gains-avoidance channel under existing rules. The new regulation does not change deductibility, per Treasury | MM-S2, MM-S20, MM-S39 |

---

## 3. Contrary evidence

- **Against a "fee extraction" reading of C9:** the statute caps fund expenses at 0.10%, and the chosen funds charge about 0.02–0.03% (MM-S12, MM-S14). Robinhood is contractually barred from account fees and payment for order flow on these accounts (MM-S6, MM-S7). Its margin is described as "small" on a cost-plus basis (MM-S8). Treasury retains control of the app and can replace the Master Trust trustee at any time (MM-S3, MM-S12).
- **Against a "donor tax shelter" reading of C12:** Treasury notes that the rules do not change deductibility and that charitable gifts to 501(c)(3)s were already deductible (MM-S20). Qualified general contributions must be paid in equal amounts to a whole class of at least 5,000 beneficiaries, and donors cannot pick individual children (MM-S20).
- **On cost:** about 96% of the 10-year score is a flat, universal $1,000 deposit, not a tax preference skewed by income (MM-S1). CRS judges that this part reduces wealth inequality (MM-S2).
- **On the operator overlap:** BNY, Robinhood, State Street and BlackRock also pledged employee matches (MM-S15). That is equally consistent with ordinary corporate participation in a high-profile program and is not evidence of a quid pro quo.
- **On Altimeter's HOOD stake:** the 13F data show Altimeter reduced its HOOD position from about 2.6M to about 0.9M shares between Q3 2025 and Q2 2026, the period spanning Robinhood's selection (MM-S25, MM-S26). The stake is under 1% of its reported book.

---

## 4. Confidence and limitations

- **Confidence:** High for federal cost (JCT line item read directly), the operator designations, contract terms on paper and donor tax rules (Treasury, SEC, Federal Register, Robinhood SEC exhibit). Medium for pledge amounts and deposit totals (White House statements and news; no audited figures). Low for lobbying (LDA database inaccessible) and for operator compensation amounts (not disclosed).
- **Access limits:** lda.senate.gov and sec.gov/EDGAR full-text search were blocked by the egress proxy. Nimble Extract of the LDA API timed out. 13F data come from aggregators (MM-S25, MM-S26), not EDGAR directly. The Form 990 data come from aggregators (MM-S30, MM-S31), and the 990 PDF and Schedule C were not reviewed. NYT (MM-S28) and Seeking Alpha (MM-S23) are paywalled, so only snippets were read. Treasury press release sb0551 (investment lineup) was not opened directly; CNBC and Yahoo reports of it were used.
- **Wayback:** no archive copies were created or checked. Key pages to archive are MM-S3, MM-S6, MM-S7, MM-S8, MM-S18 and MM-S20.
- **Nimble Web Search Agent output:** used as leads only. Two of its claims were wrong or unsupported, and I did not adopt them: (1) that JCT did not isolate the provision (JCX-35-25 does); (2) the "Bessent holdings overlap" framing (not verified, and not a firm-specific tie).
- **No intent is inferred.** Disclosed relationships in 2.6 are not findings of conflict, influence or wrongdoing.

---

## 5. Next best research action

Query the Senate LDA database (lda.senate.gov, from a network that permits it) for 2024–2026 LD-2 filings whose specific issues mention "Invest America", "Trump Account", "530A" or "child savings/investment accounts". Pull those filings for BNY, Robinhood, State Street, BlackRock, Vanguard, the Investment Company Institute, Altimeter and Dell. Pair this with a FOIA request to Treasury (Office of Fiscal Assistant Secretary) for the BNY Trump Accounts financial agency agreement, including the compensation exhibit and the BNY–Robinhood subcontract terms. Treasury has published comparable agreements before (MM-S37).
