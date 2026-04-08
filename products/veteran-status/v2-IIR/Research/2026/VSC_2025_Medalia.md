# VA.gov Profile – Structured Findings: Veteran Status Card (VSC)

---

## Executive Summary
Across **Aug–Dec 2025**, overall satisfaction for the VSC experience is **~52–53% “satisfied” (CSAT 4–5)** with an **overall median CSAT ≈ 3.5**, indicating a mixed experience where many Veterans can complete simple tasks but encounter blockers on more complex flows.   
Task completion (where respondents answered) shows **~23 “Yes” vs 79 “No”**—**~22–23% success**—with non‑responses common, signaling **task-blocking issues** for a substantial cohort.   
Top pain points concentrate around **Discharge Status errors/ineligibility messaging**, **navigation/usability difficulties**, and **incorrect service data (dates/branch/rating)**; smaller but meaningful issues include **printing/physical card**, **contact info limitations** (foreign phone numbers), **site errors/downtime**, and **authentication friction**.   
Monthly satisfaction was **highest in Aug (61.5%)** and dipped to **~44% in Sep**, stabilizing at **~50–53% in Oct–Dec**; medians oscillated between **3.0–4.0**, reflecting episodic reliability with recurring blockers.   
**Data Range (this dataset):** **July 10–December 31, 2025; total VSC‑scoped rows ≈ 270; monthly CSAT calculations use Aug–Dec (n≈212 CSAT rows).** 

---

### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Discharge Status Error / Ineligible Message  
5. Category 2: Navigation / Usability  
6. Category 3: Incorrect Service Data (Dates/Branch/Rating)  
7. Category 4: Printing / Physical Card Request  
8. Recommendations – Consolidated Priority Table  
9. Appendix: Data Overview, Metrics & Trends

---

## 1. Top‑Level Findings (Ranked by Relevance & Criticality)
Ranking factors: **frequency, severity, task‑blocking impact, actionability**. 

1. **Discharge Status Error / Ineligible message** — **~29 mentions (~14% of CSAT‑scoped records)**; recurring “problem with records / call DMDC” messages **block card access** and lead to repeated, unsuccessful support loops.   
2. **Navigation / Usability** — **~24 mentions (~11%)**; customers report “hard to navigate/clunky” with difficulty locating award letters, card, or messages—**confusion increases abandonment**.   
3. **Incorrect Service Data (dates/branch/rating)** — **~18 mentions (~8%)**; mismatches (e.g., wrong dates, branch “UNKNOWN,” disability % errors) **undermine trust and prevent printing/use**.   
4. **Contact Info Limitations** — **~13 mentions (~6%)**; inability to enter **foreign phone numbers/emergency contacts online** blocks updates and trips escalations.   
5. **Printing / Physical Card Request** — **~6 mentions (~3%)**; users need a printable/mailed card and face blocked flows (“Save only, can’t print”).   
6. **Site Bugs / Downtime** — **~5 mentions (~2%)**; “Something went wrong,” load failures, downtime during weekends **stop card viewing**.   
7. **Authentication / Login friction** — **~4 mentions (~2%)**; repeated **one‑time codes/challenge questions** frustrate frequent users.   
8. **Messaging / Provider Access** — **~3 mentions (~1%)**; inability to message PCP/general contact from certain clinics.   
9. **Benefits/Claims visibility issues** — **~3 mentions (~1%)**; **award letters/claim info not found**. 

> Note: A large share of CSAT rows lack detailed text, causing an “Other/Unclassified” bucket to dominate; nonetheless, the **specific thematic issues above** recur across months and drive dissatisfaction. 

---

## 2. Customer Satisfaction Table

**Inclusion & Filtering Method (CSAT):** Included rows where **URL path contains `/profile/veteran-status-card`** and CSAT is **numeric 1–5**. For A11‑type forms, we used the **`CSAT`** field; for VFS, we used **`What is your overall satisfaction with this site?`** when numeric. Excluded rows outside scope, non‑numeric/missing CSAT. 

| Period (2025) | CSAT rows (n) | % Satisfied (4–5) | Median CSAT | Primary Issue (by volume) |
|---|---:|---:|---:|---|
| **Aug** | **52** | **61.5%** | **4.0** | Other/Unclassified*  |
| **Sep** | **34** | **44.1%** | **3.0** | Other/Unclassified*  |
| **Oct** | **36** | **52.8%** | **4.0** | Other/Unclassified*  |
| **Nov** | **34** | **50.0%** | **3.5** | Other/Unclassified*  |
| **Dec** | **56** | **50.0%** | **3.5** | Other/Unclassified*  |
| **Aug–Dec (overall)** | **~212** | **~52–53%** | **~3.5** | Discharge/Nav/Data issues recur across months  |

\* Many CSAT entries lack detailed verbatims; when text is present, “Discharge Status Error,” “Navigation,” and “Incorrect Service Data” dominate identified pain points. 

**Task Completion (where answered):** **Yes 23 / No 79** → **~22–23% success**, indicating **task‑blocking** patterns in core VSC flows. (168 rows did not answer completion.) 

---

## 3. Issue Category Breakdown

| Issue Category | Mentions (CSAT‑scoped) | Share of CSAT‑scoped |
|---|---:|---:|
| Discharge Status Error / Ineligible message | **~29** | **~14%**  |
| Navigation / Usability | **~24** | **~11%**  |
| Incorrect Service Data (dates/branch/rating) | **~18** | **~8%**  |
| Contact Info Limitations (foreign phone/emergency contacts) | **~13** | **~6%**  |
| Printing / Physical Card Request | **~6** | **~3%**  |
| Site Bugs / Downtime | **~5** | **~2%**  |
| Authentication / Login friction | **~4** | **~2%**  |
| Messaging / Provider Access | **~3** | **~1%**  |
| Benefits/Claims visibility issues | **~3** | **~1%**  |

---

## 4. Category 1: Discharge Status Error / Ineligible Message

**Mentions / Volume:** **~29** (≈14% of CSAT‑scoped). 

**Description:** Veterans see **persistent “problem with your discharge status records”** messaging and are instructed to call external numbers (e.g., DMDC). Many report **successful corrections externally**, yet **VA.gov still reflects outdated status**, producing a **dead‑end loop** with support lines and **no clear remediation path** in product. 

**Representative quotes:**
- “Webpage said there's a problem with my ‘discharge status’… There is no option to ‘fix’ a discharge status.” *(Nov 4)*   
- “It's been months since a glitch was discovered and I am still showing ineligible… elevated and sitting in someone’s inbox…” *(Nov 28)*   
- “I have sent my DD‑214 in no less than 5 times… you still keep telling me there is a problem…” *(Oct 3)* 

**Impact:** **Task‑blocking** for core VSC: **cannot view/print card**, cannot verify status for discounts/benefits; **trust erosion** (“system broken”), **repeat contacts** and **escalation fatigue**. 

**Temporal or segment patterns:** Recurs steadily Aug–Dec; surfaced strongly **Oct–Nov** with “Something is wrong / call and no help” reports; **many entries originate from DC region** (dataset distribution). 

**Critical Observations:**
- **External dependency drift**—record corrections at **DMDC**/archives do not **sync back** or **surface status** in product.   
- **Messaging lacks remediation pathways**—no **in‑product “resolve” flow**; users bounce between **numbers** without closure.   
- **High severity**: associated CSAT often **≤2**, reflecting acute frustration and **direct inability** to complete the VSC task. 

**Recommendations:**
- **P0:** Build an **in‑product “Resolve Discharge Status” flow** with guided steps, evidence upload, and **status tracking**; integrate **DMDC webhook/polling** so corrections appear **within 24–48 hours**.   
- **P0:** Add **targeted microcopy** that explains **why** the error occurs and **what happens next** (SLAs, who owns resolution) to reduce calls/chat loops.   
- **P1:** Instrument **status telemetry** (time to resolution, attempts per user) to proactively flag “stuck” cases for **ops intervention**. 

---

## 5. Category 2: Navigation / Usability

**Mentions / Volume:** **~24** (≈11%). 

**Description:** Users describe the site as **“hard to navigate/clunky”**, especially when trying to **locate award letters, messages, or the card**. Several report being **kicked out** when trying to view records; others cite **search quality issues**. 

**Representative quotes:**
- “Damn this site is hard to navigate. I've been going in circles…” *(Nov 2)*   
- “Instructions are clear but site does not allow to do.” *(Nov 20)*   
- “It's clunky… should be able to access disability rating and award letter but I’m not able to…” *(Oct 28)* 

**Impact:** **Wayfinding failures** cause **drop‑offs** before card viewing/printing; **higher support demand** due to “where do I find…?” questions; **perceived unreliability**. 

**Temporal or segment patterns:** Present **throughout**; spikes observed alongside **site issues/downtime** mentions. 

**Critical Observations:**
- **Findability gaps** (award letters, VSC, messages) correlate with **lower CSAT** and **task failure**.   
- **Session interruptions** (“shows then kicks me out”) imply **state management/auth expiration** pain points. 

**Recommendations:**
- **P1:** Introduce a **VSC‑focused hub** (“View card / Fix status / Print / Add to wallet / Mail me a copy”), accessible from **Profile** and **top nav**.   
- **P1:** Add **contextual breadcrumbs** and **inline tips** for award letters/claims visibility; **strengthen search synonyms** (e.g., “VIC,” “status card,” “award letter”).   
- **P1:** Address **session continuity** (silent refresh, clearer re‑auth prompts) to prevent unexpected “kickouts.” 

---

## 6. Category 3: Incorrect Service Data (Dates/Branch/Rating)

**Mentions / Volume:** **~18** (≈8%). 

**Description:** Users report **wrong dates of service** (e.g., “1994–1997” shown vs actual), **branch mismatches** (Army vs Coast Guard, “UNKNOWN”), and **incorrect disability %**—all of which **undermine trust** and **block printing/use**. 

**Representative quotes:**
- “Verify my service time. It showed 1994–1997. That is incorrect.” *(Dec 30)*   
- “NOW THE SYSTEM SHOWS BRANCH ‘UNKNOWN’! … system used to work fine.” *(Aug 25)*   
- “Correct my Military status from ARMY to COAST GUARD.” *(Sep 11)* 

**Impact:** **Card integrity compromised**; **discount acceptance** and **identity validation** at retailers may fail; **repeat contacts** to fix records. 

**Temporal or segment patterns:** Appears **across months**, often co‑occurring with **Discharge Status** blockers. 

**Critical Observations:**
- **Upstream data quality** issues combined with **lack of in‑product correction path** drive **low CSAT** and **task failure**. 

**Recommendations:**
- **P0:** Provide **guided corrections** for **dates/branch/percentage** with **evidence upload** and **status tracking**, independent from discharge status flow.   
- **P1:** Add **“Report a data mismatch”** on the card view with expected **SLA** and **what sources** will be reconciled. 

---

## 7. Category 4: Printing / Physical Card Request

**Mentions / Volume:** **~6** (≈3%). 

**Description:** Users struggle to **print** the card (“Save only” loop) or request a **mailed physical copy**; several ask for **Apple Wallet** integration and **photo on card**. 

**Representative quotes:**
- “Trying to print my VA status card… window would not allow me to print, just allowed me to save.” *(Dec 30)*   
- “Print Status Card… Should say: Nov 1970–Nov 1978.” *(Oct 6)*   
- “I do not have a printer. Can you send me a copy of my Veterans Status Card please?” *(Jul 16)* 

**Impact:** **Access friction** at point‑of‑use; increased **staff tickets** for mail requests; **mobile wallet** gaps. 

**Recommendations:**
- **P1:** **Fix print dialog** (PDF render mode; default to “Print to PDF” + browser‑agnostic print instructions).   
- **P1:** Offer **Mail‑me‑a‑Card** with identity verification, status checks, and **estimated delivery**.   
- **P2:** Explore **Wallet integration** and **optional photo** (security considerations noted). 

---

## 8. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | **In‑product “Resolve Discharge Status” workflow** with DMDC sync (webhook/poll), evidence upload, status tracker, SLA messaging. | Discharge Status Error | **High** – removes #1 blocker; lifts task completion and trust.  |
| **P0** | **Guided corrections** for **dates/branch/percentage** + “Report a mismatch” entry point on card. | Incorrect Service Data | **High** – enables self‑service fixes; reduces repeat calls.  |
| **P1** | **VSC hub**: View card / Fix status / Print / Wallet / Mail me a copy; add breadcrumbs and stronger search synonyms. | Navigation / Usability | **Medium–High** – improves findability; reduces abandonment.  |
| **P1** | **Print pathway repair** and **Mail‑me‑a‑Card** option with delivery estimates. | Printing / Physical Card | **Medium** – addresses practical access needs.  |
| **P1** | **Session continuity & re‑auth design** (silent refresh, clearer prompts). | Navigation / Site interruptions | **Medium** – reduces “kicked out” incidents.  |
| **P2** | **Contact info upgrades** (foreign phone support; emergency contacts online). | Contact Info Limitations | **Medium** – removes avoidable support calls.  |
| **P2** | **Clinic messaging exposure** (PCP/general contact options where missing). | Messaging / Provider Access | **Low–Medium** – targeted visibility improvement.  |
| **P2** | **MFA friction tuning** (remembered devices, fewer OTP prompts). | Authentication | **Low–Medium** – reduces annoyance; small CSAT lift.  |

---

## 9. Appendix: Data Overview, Metrics & Trends

### Data Overview
- **Scope filter:** Rows with **URL path `/profile/veteran-status-card`**. Forms include **A11 Group B** (with CSAT) and **VFS Questionnaire** (site satisfaction).   
- **Date range (dataset):** **July 10–December 31, 2025**. **Total VSC‑scoped rows ≈ 270.**   
- **CSAT rows (Aug–Dec):** **~212**; **overall satisfied ≈ 52–53%**, **median ≈ 3.5**.   
- **Completion (where answered):** **Yes 23 / No 79** → **~22–23% success**; **168** missing. 

### Theme & Task Counts
- **Discharge Status Error / Ineligible message:** **~29** mentions; strong blocker theme.   
- **Navigation / Usability:** **~24** mentions; findability and session stability concerns.   
- **Incorrect Service Data:** **~18** mentions; wrong dates/branch/rating.   
- **Contact Info Limitations:** **~13** mentions; foreign phone/emergency contacts.   
- **Printing / Physical Card:** **~6** mentions; print loop / mailed card requests. 

### Trends
- **Monthly CSAT:** **Aug 61.5% (n=52)** → **Sep 44.1% (n=34)** → **Oct 52.8% (n=36)** → **Nov 50.0% (n=34)** → **Dec 50.0% (n=56)**; median **3.0–4.0** monthly.   
- **Issue recurrence:** Discharge/Navigation/Data issues present **every month**; **weekend** downtime/“can’t complete on weekends” appears sporadically. 

### Representative Quotes
- **Discharge Status Error:**  
  “Webpage said there's a problem with my ‘discharge status’ … There is no option to ‘fix’ a discharge status.” *(Nov 4)*   
  “It's been months since a glitch… still showing ineligible … elevated and sitting in someone’s inbox…” *(Nov 28)*   
- **Navigation / Usability:**  
  “Damn this site is hard to navigate. I've been going in circles…” *(Nov 2)*   
  “Instructions are clear but site does not allow to do.” *(Nov 20)*   
- **Incorrect Service Data:**  
  “Verify my service time. It showed 1994–1997. That is incorrect.” *(Dec 30)*   
  “NOW THE SYSTEM SHOWS BRANCH ‘UNKNOWN’!” *(Aug 25)*   
- **Printing / Physical Card:**  
  “Trying to print my VA status card… window would not allow me to print, just allowed me to save.” *(Dec 30)*   
  “Can you send me a copy of my Veterans Status Card please?” *(Jul 16)*   
- **Contact Info Limitations:**  
  “Still waiting for the ability to input foreign phone numbers under contact information.” *(Dec 21)* 
