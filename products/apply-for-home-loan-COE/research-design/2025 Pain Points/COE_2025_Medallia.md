# **VA Home Loans** – Structured Findings: **Request & Check Certificate of Eligibility (COE) Flow**


### Executive Summary

Across **856** in‑scope Medallia entries (Jan–Dec 2025), overall customer satisfaction (CSAT) for the VA Home Loans COE flow was **80.8% satisfied** (scores **4–5**), with a **median CSAT of 5**—indicating generally high satisfaction despite notable task‑blocking defects.  Completion barriers clustered around **submission errors** and **document upload friction**, together representing ~**10%** of all mentions; **identity & login friction** and **navigation & findability** further eroded confidence in pockets.  Positive verbatims were abundant (≈**14%** of in‑scope rows), often citing **“easy, quick, user‑friendly”** experiences; however, repeated reports of **“We’re sorry… can’t submit your request right now”** and **file‑type rejections (e.g., JPEG)** blocked COE requests and forced call‑center loops.   
**Data range:** **January 2, 2025 – December 31, 2025** (Eastern Time). 


### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Submission errors  
5. Category 2: Document upload friction  
6. Category 3: Identity & login friction  
7. Category 4: Navigation & findability  
8. Category 5: Data accuracy / COE info incorrect  
9. Category 6: Call center / support loop  
10. Category 7: Policy/program clarity  
11. Category 8: Positive experience  
12. Recommendations – Consolidated Priority Table  
13. Appendix: Data Overview, Metrics & Trends


## 1) Top‑Level Findings (Ranked by Relevance & Criticality)

Ranking factors: frequency, severity, task‑blocking impact, and actionability.

1. **Submission errors** — **42 mentions (4.9%)**: Frequent **“cannot submit / We’re sorry…”** defects blocked COE requests; many users retried for hours/days.   
2. **Document upload friction** — **43 mentions (5.0%)**: **JPEG/DD214/NGB** uploads rejected or misclassified; password prompts during upload and unclear accepted formats.   
3. **Identity & login friction** — **22 mentions (2.6%)**: Excessive re‑verification, **ID.me/login.gov/DS Logon/CAC/EDIPI** loops; multi‑code MFA bursts and lockouts.   
4. **Navigation & findability** — **18 mentions (2.1%)**: **“Hard to find COE”**, **rabbit holes**, unclear paths to status or reinstatement; occasional **404/invalid pages**.   
5. **Data accuracy / COE info incorrect** — **9 mentions (1.1%)**: COE showing paid‑off loans as active, wrong names, or missing disability updates; veterans asked to re‑prove known facts.   
6. **Call center / support loop** — **14 mentions (1.9%)**: Guidance to call **800‑827‑1000** often **loops back** to the site; perceived **hostility** and no resolution.   
7. **Policy/program clarity** — **14 mentions (1.6%)**: Confusion about **IRRRL**, **funding fees**, **loan limits**, and **VASP** news; users requested rate transparency and clearer NADL rules.   
8. **Positive experience** — **122 mentions (14.3%)**: Many called the flow **“fast, seamless, user friendly”** with immediate COE generation and easy confirmations. (Signal of what to preserve while fixing blockers.) 


## 2) Customer Satisfaction Table

**CSAT calculation logic & scope**  
*Filter:* Only rows whose **URL contains** `va.gov/housing-assistance/home-loans/`. *Include CSAT values* **1–5**; *exclude* non‑numeric/blank CSAT and rows outside scope. **% satisfied = count(CSAT in {4,5}) / count(CSAT in {1..5})**. **Median** computed monthly from included rows. 

| Month (2025) | CSAT n | % Satisfied | Median CSAT | Primary Issue (by monthly category count) |
|---|---:|---:|---:|---|
| Jan | 19 | **68.4%** | **5** | **Identity & login friction** (7)  |
| Feb | 24 | **66.7%** | **5** | **Positive experience** (7)  |
| Mar | 19 | **89.5%** | **5** | **Document upload friction** (5)  |
| Apr | 15 | **80.0%** | **4** | **Submission errors** (3)  |
| May | 37 | **86.5%** | **5** | **Positive experience** (13)  |
| Jun | 52 | **92.3%** | **5** | **Positive experience** (13)  |
| Jul | 55 | **83.6%** | **5** | **Positive experience** (11)  |
| Aug | 74 | **70.3%** | **5** | **Positive experience** (13)  |
| Sep | 52 | **75.0%** | **5** | **Positive experience** (10)  |
| Oct | 49 | **89.8%** | **5** | **Positive experience** (14)  |
| Nov | 52 | **78.8%** | **5** | **Positive experience** (15)  |
| Dec | 51 | **84.3%** | **5** | **Positive experience** (17)  |

**Overall (2025):** **CSAT n=499**, **% satisfied=80.8%**, **median=5**. CSAT exclusions (non‑numeric/blank): **357** rows. 


## 3) Issue Category Breakdown

**Distribution (share of 856 in‑scope rows)**  
- **Submission errors:** 42 (**4.9%**)   
- **Document upload friction:** 43 (**5.0%**)   
- **Identity & login friction:** 22 (**2.6%**)   
- **Navigation & findability:** 18 (**2.1%**)   
- **Data accuracy / COE info incorrect:** 9 (**1.1%**)   
- **Call center / support loop:** 14 (**1.9%**)   
- **Policy/program clarity:** 14 (**1.6%**)   
- **Positive experience:** 122 (**14.3%**) 


## 4) Category 1: Submission errors

**Mentions / Volume:** **42** (4.9% of dataset) 

**Description:** Users encounter **blocking errors** at **Review & submit** and confirmation steps: **“We’re sorry… can’t submit your request right now”**, silent failures, or sessions that close after submit—requiring complete re‑entry. Impact peaks during **May–June** and **September**. 

**Representative quotes:**
- “**Upload documents but won’t submit.**” (Check COE Status)   
- “**Continue to get the same error… try again later**—been trying every couple hours for the last 24 hours.” (Review & submit)   
- “Spent over an hour uploading docs… click **submit**, **lame error message**, page closed.” (COE introduction) 

**Impact:** **Task‑blocking.** Users can’t file or finalize COE; delays ripple to loan approvals and closing dates; repeated attempts create frustration and increase contact‑center load. 

**Temporal or segment patterns:**

| Month | Mentions |
|---|---:|
| **May** | 7 |
| **June** | 7 |
| **September** | 5 |
| **April/July/August/Nov/Dec** | 1–4 each |  
(Primary issue in **April**.) 

**Critical Observations:**
- Errors occur after successful form save—suggesting instability at **submit APIs** or session/auth token expiry windows.   
- Lack of **actionable error copy** forces retries and calls; some users report **no reason given** for failure.   
- Failures correlate with **identity steps** (EDIPI hints) and **upload states**, indicating cross‑dependency between verification and submission. 

**Recommendations:**
- **P0:** Introduce **robust submit‑path health checks** (retry with idempotency keys; client‑side queueing) and **session‑grace** for token refresh at submit.   
- **P0:** Replace generic failure with **diagnostic error handling** (status, next step, known workarounds; auto‑link to saved draft).   
- **P1:** Add **submit‑state telemetry** (field completion, file presence, auth state) to pinpoint failure clusters and drive defect burn‑down.   


## 5) Category 2: Document upload friction

**Mentions / Volume:** **43** (5.0%)—largest single blocker by share. Peaks in **August** and **January**. 

**Description:** Veterans struggle to upload **DD214/NGB/marriage certificates**; files flagged as wrong type (even JPEG), unclear limits, or password prompts interrupting flow. Some must re‑upload documents already on file. 

**Representative quotes:**
- “**Even though it’s a JPEG, the site… will not accept the format**.” (Upload supporting documents)   
- “**Upload my DD214… said not the correct file type**.” (Form saved)   
- “I keep getting asked for the **same document** that I already uploaded; the **email link does not work**.” (Check COE Status) 

**Impact:** **Task‑blocking to high‑friction.** Errors prevent verification and slow adjudication; repeated document requests erode trust and increase support outreach. 

**Temporal or segment patterns:**

| Month | Mentions |
|---|---:|
| **Aug** | 8 |
| **Jan** | 6 |
| **Mar/Jul** | 5 each |  
(Sustained noise across remaining months.) 

**Critical Observations:**
- **Client‑side validation** rejects valid formats; likely mis‑mapped MIME detection across mobile (iOS/Camera JPEGs) and PDFs.   
- **Redundant evidence** (e.g., DD214 already on file) signals **back‑end reconciliation gaps** between claims profile and COE workflow.   
- Lack of **max size / accepted types** copy at point‑of‑action creates guessing and repeat failures. 

**Recommendations:**
- **P0:** Harmonize **file validators** (server‑side authoritative checks; normalize JPEG variants; clear limits up front).   
- **P1:** Implement **evidence reuse**: pre‑fill and auto‑attach documents already verified in the veteran’s profile; show provenance.   
- **P1:** Add **upload checklist UI** (accepted types, size caps, multi‑file guidance; inline remediation with rescan tips).   


## 6) Category 3: Identity & login friction

**Mentions / Volume:** **22** (2.6%); primary issue in **January**. 

**Description:** Excessive identity steps (**ID.me, login.gov, DS Logon, CAC**) and missing identifiers (**EDIPI**) lead to repeated logins, code storms, and timeouts. 

**Representative quotes:**
- “**Can not verify ID**.” (How to request COE)   
- “Had to sign in with **login.gov twice**, **CAC twice**, then **photo of DL**.” (Confirmation)   
- “Site… says **missing EDIPI**, call number; rep didn’t know how to get it.” (Introduction) 

**Impact:** **High friction / abandonment risk.** Verification should be invisible; repeated identity checks destabilize the flow and **cascade into submit failures**. 

**Temporal or segment patterns:** January spike (7), then steady background noise (3–4 in Sep). 

**Critical Observations:**
- Identity providers **disagree on session state**; **re‑auth prompts** appear post‑checkmarks, confusing veterans.   
- **EDIPI dependency** is opaque—front‑line staff and UI lack guidance for remediation. 

**Recommendations:**
- **P0:** **Session unification**: single‑sign‑on handshake with clearer **one‑pass** expectation; suppress redundant prompts.   
- **P1:** **EDIPI assist**: inline helper explaining what it is, how to locate, and alternatives to proceed; provide staff playbook.   


## 7) Category 4: Navigation & findability

**Mentions / Volume:** **18** (2.1%). 

**Description:** Users report difficulty **finding COE** pages, **status**, or **reinstatement** paths; references to **404s** and **rabbit holes** indicate brittle IA and cross‑page linking. 

**Representative quotes:**
- “**Not easy to do a search and get to the COE.**” (Loan limits flow)   
- “**Several pages were invalid… rabbit holes** to find what I was looking for.” (How to request COE)   
- “**Still not sure** if I uploaded all items needed.” (Confirmation) 

**Impact:** **Medium friction.** Extra steps and dead links elongate the journey, add errors, and diminish trust—especially for veteran borrowers under contract timelines. 

**Temporal patterns:** Mild bumps in **Nov–Dec** (3 mentions each). 

**Recommendations:**
- **P1:** **COE hub redesign** with all paths (request, status, restore eligibility, evidence upload) in one scaffold; **persistent status tile** in profile.   
- **P2:** **Link integrity monitoring** and **404 guardrails** with contextual fallback.   


## 8) Category 5: Data accuracy / COE info incorrect

**Mentions / Volume:** **9** (1.1%). 

**Description:** COE shows **active loans that are paid off**, **wrong names**, or missing **disability rating** updates; users asked to manually prove facts the VA already holds. 

**Representative quotes:**
- “**Loan has been paid off… information is wrong**.” (Introduction)   
- “**COE wasn’t updated after disability rating.**” (Confirmation)   
- “**Need reinstatement**—don’t have payoff dates from the 70s & 80s.” (Loan limits) 

**Impact:** **Confidence & delay.** Lenders pause; veterans escalate; corrections require human intervention and proof‑gathering. 

**Recommendations:**
- **P1:** **Eligibility sync**: nightly reconciliation to reflect disability updates and paid‑off loan events; show **last updated** timestamp.   
- **P2:** **Guided restoration**: wizard to locate legacy payoff dates via VA archives without user‑held records.   


## 9) Category 6: Call center / support loop

**Mentions / Volume:** **14** (1.9%). 

**Description:** The site directs users to **800‑827‑1000**; representatives often send them back to the site or **can’t assist** (e.g., EDIPI), creating a **loop** without resolution. 

**Representative quotes:**
- “**Called… simply referred me back to the website.**” (COE introduction)   
- “**Phone number… did not provide assistance.**” (COE introduction) 

**Impact:** **Wasted effort.** Veterans cycle between channels, raising dissatisfaction and time‑to‑close; staff burden increases without solving root causes. 

**Recommendations:**
- **P1:** **Escalation path** for COE exceptions with ticket handoff and SLAs; surface case ID in the UI.   
- **P2:** **Agent scripts** and quick references (EDIPI, upload remediation, restore eligibility steps) to end loops.   


## 10) Category 7: Policy/program clarity

**Mentions / Volume:** **14** (1.6%). 

**Description:** Confusion around **IRRRL standards**, **funding fee** rules, **loan limits**, **VASP program changes**, and **NADL eligibility**; some links redirect to **news.va.gov** without direct answers. 

**Representative quotes:**
- “**Why does the VA not publish daily updates for VA average interest rates?**” (IRRRL)   
- “Links… **redirect to the main page**; no clear answer.” (IRRRL) 

**Impact:** **Understanding gap.** Policy ambiguity fuels lender skepticism and borrower delays; clear guidance reduces inbox and call‑center volume. 

**Recommendations:**
- **P2:** **Policy explainer tiles** (IRRRL tangible benefit rules, funding‑fee scenarios, loan‑limit calculator, NADL checklist) with canonical links.   


## 11) Category 8: Positive experience

**Mentions / Volume:** **122** (14.3%)—dominant monthly theme in **Feb, May–Dec**. 

**Description:** Veterans praise **speed**, **clarity**, and **auto‑generated COE**; “**quick & easy**” confirmations and **seamless uploads** show the target user experience is achievable and repeatable. 

**Representative quotes:**
- “**Easy application process.**” (Confirmation)   
- “**Seamless process**.” (Confirmation)   
- “**Super easy! Thanks!**” (COE introduction) 

**Impact:** **Proof of success.** Highlights components to protect (clear copy, straight‑through processing, status visibility) while defects are addressed. 


## 12) Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | **Stabilize submit endpoint & session grace** (idempotent retries, token refresh, saved‑draft recovery, actionable errors) | Submission errors | Reduce hard fails; increase completed COE submissions; cut retries/calls by **30–50%**.  |
| **P0** | **Normalize upload validation** (server‑side canonical checks; support iOS JPEG variants; explicit size/type limits UI) | Document upload friction | Lift first‑attempt upload success; lower abandonment; shorten adjudication cycles.  |
| **P1** | **Unify identity flow** (single pass; suppress redundant prompts; EDIPI helper) | Identity & login friction | Fewer re‑auth loops; faster path to submission; fewer help‑desk escalations.  |
| **P1** | **COE Hub + persistent status** (request, status, restoration, evidence reuse in one place) | Navigation & findability | Shorter paths; lower misclicks; more self‑service completions.  |
| **P1** | **Eligibility & disability sync** (automatic updates; “last refreshed” indicator) | Data accuracy | Higher trust; fewer manual proofs and exceptions; smoother lender underwriting.  |
| **P2** | **Agent playbook & escalations** (scripts, exception queues, SLAs, case ID surfaced) | Call center loop | Reduce ping‑pong; increase first‑contact resolution.  |
| **P2** | **Policy explainers & calculators** (IRRRL, funding fees, loan limits, NADL) | Policy clarity | Lower confusion; fewer off‑site redirects; better borrower readiness.  |


## 13) Appendix: Data Overview, Metrics & Trends

### Data Overview
- **Dataset:** Medallia verbatims (VA.gov A11 & VFS) focused on **VA Home Loans COE** paths. **Scope filter:** `URL` contains `va.gov/housing-assistance/home-loans/`.   
- **Time window:** **2025‑01‑02 → 2025‑12‑31** ET.   
- **Rows in scope:** **856**. **CSAT rows (1–5):** **499**. **% satisfied:** **80.8%** (403/499). **Median CSAT:** **5**. **CSAT exclusions:** **357** (non‑numeric/blank/out‑of‑range). 

### Theme & Task Counts (Issue Distribution)
- **Document upload friction:** **43** (5.0%)  
- **Submission errors:** **42** (4.9%)  
- **Identity & login friction:** **22** (2.6%)  
- **Navigation & findability:** **18** (2.1%)  
- **Call center / support loop:** **14** (1.9%)  
- **Policy/program clarity:** **14** (1.6%)  
- **Data accuracy / COE info incorrect:** **9** (1.1%)  
- **Positive experience:** **122** (14.3%)  
(All shares calculated on **856** in‑scope rows.) 

### Trends

**Monthly CSAT (n, % satisfied, median):**  
Jan (19, **68.4%**, 5), Feb (24, **66.7%**, 5), Mar (19, **89.5%**, 5), Apr (15, **80.0%**, 4), May (37, **86.5%**, 5), Jun (52, **92.3%**, 5), Jul (55, **83.6%**, 5), Aug (74, **70.3%**, 5), Sep (52, **75.0%**, 5), Oct (49, **89.8%**, 5), Nov (52, **78.8%**, 5), Dec (51, **84.3%**, 5). 

**Primary issue by month (by mention count):**  
Jan—**Identity & login** (7); Feb—**Positive experience** (7); Mar—**Upload friction** (5); Apr—**Submission errors** (3); May–Dec—**Positive experience** dominates (10–17 mentions) while **submission/upload** remain persistent background noise. 

**Monthly category counts (selected highlights):**

| Month | Submission | Upload | Identity | Navigation | Call‑center |
|---|---:|---:|---:|---:|---:|
| Jan | 1 | **6** | **7** | 1 | 2 |
| Mar | **4** | **5** | 0 | 1 | 0 |
| Jun | **7** | 4 | 3 | 1 | 2 |
| Aug | **4** | **8** | 2 | 2 | **4** |
| Sep | **5** | 2 | **4** | 1 | 1 |  
(Full per‑month matrix available on request.) 

### Representative Quotes (Additional)

- “**We’re sorry. We can’t submit your request right now…**” (Review & submit)   
- “**I was immediately able to get my COE—super easy!**” (COE introduction)   
- “Had to **verify multiple times**; too many one‑time codes.” (Confirmation)   
- “**COE shows active amount** though the loan was **paid off**.” (Eligibility/Introduction)   
- “Links **redirect to the news site**—no clear answer.” (IRRRL page) 


**END OF REPORT**
