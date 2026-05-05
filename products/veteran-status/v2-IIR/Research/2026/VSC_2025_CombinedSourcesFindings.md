# Veteran Status Card (VSC) — 2025 Insights (Medallia/CSAT, Call Center, GA4)
### TL;DR (what matters)

* **Baseline CSAT (measured):** ~52–53% satisfied (CSAT 4–5), **n ≈ 212** (Aug–Dec 2025)   
* **CSAT/feedback timeframe:** Jul 10–Dec 31, 2025 (Medallia/CSAT)   
* **Top pain points (task-blocking, highest impact):**
  1. **“Problem with your discharge status” error** blocks card access; persistent across months and channels   
  2. **Discoverability & navigation gaps** (hard to find VSC from Profile/Military Information; users “go in circles”)   
  3. **Incorrect or missing service data** (dates, branch, rating) undermines trust and prevents printing/use   

## 1) Data source inventory (timeframe + frequency for each source)

### A) Medallia/CSAT

* **Timeframe:** Jul 10–Dec 31, 2025  
* **Scoped volume:** ~270 VSC-scoped rows (Profile path filter)   
* **CSAT sample size:** n ≈ 212 (Aug–Dec numeric CSAT rows)   
* **CSAT baseline:** ~52–53% satisfied (4–5), median CSAT ≈ 3.5 (Aug–Dec)   
* **Theme counts (mentions within scope):**  
  * Discharge Status Error / Ineligible: ~29   
  * Navigation / Usability: ~24   
  * Incorrect Service Data (dates/branch/rating): ~18   

### B) Call Center

* **Timeframe:** Jan 6, 2025–Jan 10, 2026   
* **Volume:** 175 relevant cases (in-scope)   
* **Theme counts (cases):**  
  * Discharge Status Error: **73** (~41.7%)   
  * VIC Application Access/Upload Error: **25** (~14.3%)   
  * Identity & Sign‑in Friction: **17** (~9.7%); App/Web Inconsistency: **16** (~9.1%); Incorrect/Missing Service Data: **15** (~8.6%)   

### C) GA4 (Analytics)

* **Timeframe:** Jan 1–Dec 31, 2025   
* **What GA4 represents (important):**  
  * **Sessions vs. views:** “Session starts” and page views reflect traffic, not users; **events** (e.g., link clicks, modal, API calls) capture interactions; **funnel** defined here as session start → Profile → VSC page → Print (PDF). GA export used does **not include numeric CSAT**.   
* **Funnel drop-offs (behavioral signals):**  
  * **Session start → Profile:** 22,651,921 → 5,107,365 (**77.45% abandonment**)  
    * **Device pattern:** Not available in this export   
  * **Profile → VSC page:** 5,107,365 → 587,534 (**88.5% abandonment**)  
    * **Device pattern:** Not available in this export   
  * **VSC page → Print (PDF):** 587,534 → 72,130 (**87.72% abandonment**; VSC→Print conversion **12.28%**)  
    * **Device pattern:** Not available in this export; **85,862 print link clicks** indicate post‑click friction (~16% drop)   

## 2) Consolidated “what’s going wrong”

Across sources, the **core failure mode is reliability of eligibility and service-data validation**, manifesting as the recurring **“problem with your discharge status records”** banner that **blocks the VSC entirely**. Call-center cases show this is the dominant issue (41.7% of escalations), and CSAT comments echo months‑long unresolved loops with external agencies and no in‑product path to remediate. This is **task‑blocking** and **high‑severity**: users cannot produce proof of veteran status when they need it. 

A second cluster is **data integrity mismatches** (dates, branch, rating), which erode trust and prevent printing or acceptance of the card. These issues appear in both CSAT feedback and calls, often intertwined with discharge eligibility. There is **no guided correction flow**, creating repeated contacts and frustration. 

The third cluster involves **discoverability and last‑mile friction**: GA4 shows **massive attrition** before users even reach the VSC page, and another significant drop from print intent to completion. Users report the site is **hard to navigate** and that **printing fails** or is trapped in “save only” loops. Heavy **API dependency** implies backend latency can amplify attrition, while the GA export lacks device/browser detail needed to isolate where failures concentrate (e.g., mobile vs. desktop). 

Finally, **platform consistency and identity gating** (app vs. web discrepancies, LOA/verification states) add friction and confusion. GA segments (LOA3 engagement) suggest authentication influences completion, but the analytics snapshot does not expose **which gating rules or error states** are causing late‑stage drop‑offs—pointing to a **measurement gap**. 

## 3) Pain points (with a specific fix recommendation for each)

### **[Priority #1] Discharge Status error blocks VSC**  
*(Impact tags: task‑blocking, high‑stakes, reliability)*

**Evidence (timeframe + frequency):**  
* **Medallia (Jul–Dec 2025):** ~29 mentions (~14% of CSAT‑scoped records)   
* **Call Center (Jan 2025–Jan 2026):** 73 cases (41.7% of in‑scope)   
* **Analytics signal:** Severe funnel attrition; GA lacks error code telemetry to attribute drop‑offs specifically to discharge failures (measurement gap) 

**How to fix it (specific):**  
*Category: Eligibility pipeline repair & guided remediation*  
1. **Build an in‑product “Resolve Discharge Status” flow** with evidence upload, SLA messaging, and status tracking; integrate **DMDC/archives sync** (webhook/poll) to reflect corrections within **24–48 hours**.   
2. **Add resilient fallback logic** (e.g., display last confirmed status + steps to validate) when upstream status is ambiguous/unavailable.   
3. **Instrument error telemetry** (error_code, upstream source, retries) to quantify root causes and alert on spikes. 

**Representative quotes:**  
* “Webpage said there's a problem with my ‘discharge status’… There is no option to ‘fix’ a discharge status.” — **CSAT Comment** (Medallia)   
* “We’re sorry—there’s a problem with your discharge status records.” — **Agent Note** (Call Center) 

---

### **[Priority #2] Incorrect or missing service data (dates/branch/rating)**  
*(Impact tags: task‑blocking, trust, data integrity)*

**Evidence (timeframe + frequency):**  
* **Medallia (Jul–Dec 2025):** ~18 mentions (~8%)   
* **Call Center (Jan 2025–Jan 2026):** 15 cases (~8.6%)   
* **Analytics signal:** Not directly tracked; high API volume indicates backend dependency; GA lacks field‑level instrumentation for mismatches (measurement gap) 

**How to fix it (specific):**  
*Category: Guided record correction & source‑of‑truth alignment*  
1. **Add “Report a data mismatch”** on the VSC page (dates/branch/rating) with evidence upload and clear SLA; expose which sources will be reconciled.   
2. **Unify the service‑data source of truth** used by VSC and Military Information; prevent slice/schema drift (EDIPI handling, crest validation).   
3. **Provide user‑visible refresh status** (“Last updated: …”) to reduce confusion when upstream data changes. 

**Representative quotes:**  
* “Verify my service time. It showed 1994–1997. That is incorrect.” — **CSAT Comment** (Medallia)   
* “Only the second service period shows; 1972–1974 is missing.” — **Agent Note** (Call Center) 

---

### **[Priority #3] Discoverability & navigation gaps to reach the VSC**  
*(Impact tags: high‑frequency, usability, accessibility)*

**Evidence (timeframe + frequency):**  
* **Medallia (Jul–Dec 2025):** ~24 mentions (~11%) of “hard to navigate/clunky,” “going in circles”   
* **GA4 (2025):** Only **2.59%** of session starts reach the VSC page (587,534 / 22.65M); major drop between Profile → VSC (**88.5% abandonment**) 

**How to fix it (specific):**  
*Category: Wayfinding & IA improvements*  
1. **Create a VSC hub** (“View card / Fix status / Print / Add to wallet / Mail me a copy”) accessible from **Profile** and **Military Information** with persistent CTA placement.   
2. **Strengthen breadcrumbs and on‑page cues**; add search synonyms (e.g., “VIC,” “status card,” “award letter”).   
3. **Reduce accordion friction** by exposing critical actions by default on the VSC page. 

**Representative quotes:**  
* “Damn this site is hard to navigate. I've been going in circles…” — **CSAT Comment** (Medallia)   
* “Instructions are clear but site does not allow to do.” — **CSAT Comment** (Medallia) 

---

### **[Priority #4] Print flow friction (intent ≠ completion)**  
*(Impact tags: task‑blocking, last‑mile, performance)*

**Evidence (timeframe + frequency):**  
* **Medallia (Jul–Dec 2025):** ~6 mentions (~3%) about print failure/need for mailed copy/wallet   
* **GA4 (2025):** 85,862 print link clicks vs. 72,130 successful prints (~**16%** post‑click drop); modal events = 39,884 (possible dialog friction) 

**How to fix it (specific):**  
*Category: PDF generation & fallback pathways*  
1. **Instrument print failures** (timeout, HTTP status, modal dismiss) and **pre‑warm PDF generation** with async render + progress messaging.   
2. **Default to “Print to PDF”** with browser‑agnostic instructions; repair cross‑browser print dialog behavior.   
3. **Provide fallbacks** (email link; add to device wallet; request mailed copy with ETA). 

**Representative quotes:**  
* “Trying to print my VA status card… window would not allow me to print, just allowed me to save.” — **CSAT Comment** (Medallia)   
* “I do not have a printer. Can you send me a copy of my Veterans Status Card please?” — **CSAT Comment** (Medallia) 

---

### **[Priority #5] App/Web inconsistency & identity friction**  
*(Impact tags: trust, continuity, authentication)*

**Evidence (timeframe + frequency):**  
* **Call Center (Jan 2025–Jan 2026):** App/Web mismatches: 16 cases (~9.1%); identity & sign‑in friction: 17 cases (~9.7%) (ID.me/Login.gov loops)   
* **GA4 (2025):** LOA3 cohort shows higher engagement (53s vs. 49s overall), suggesting gating effects; GA lacks explicit gating/error telemetry (measurement gap) 

**How to fix it (specific):**  
*Category: Consistency & authentication clarity*  
1. **Synchronize API contracts and cache invalidation** across app/web; add **parity tests** in CI to catch schema differences.   
2. **Surface eligibility & LOA requirements early** (on Profile), with a **guided LOA upgrade** flow if needed.   
3. **Post‑verification health check** that confirms military data linkages after ID.me/Login.gov steps and provides remediation if mismatched. 

**Representative quotes:**  
* “App shows discharge error; browser shows both periods.” — **Agent Note** (Call Center)   
* “Reset Login.gov but still denied in the app.” — **Agent Note** (Call Center) 


## 4) What to measure next (high value) to connect GA4 to root cause — and WHY

**Right now GA4 is telling us WHERE people leave, but not WHY.** We see big drop‑offs and a print intent gap, but analytics lacks **error codes**, **eligibility/gating reasons**, **device/browser detail**, and **field‑level signals** (e.g., which service period failed to load). Without this, we can’t distinguish **retry loops** (users trying to fix status) from **back‑end failures** (PDF timeouts) or **UX hurdles** (hidden CTAs/accordion friction). 

### A) Capture **discharge_status_error_code** + **upstream_source** (DEERS/DMDC/archives) at VSC load

**Why this matters:** Tells us whether users are blocked by upstream validation vs. product logic, enabling teams to prioritize **data‑pipeline fixes** vs. **UI remediation**.  
**Directly ties to these pain points:**  
* Discharge Status error blocks VSC (Priority #1)   
* App/Web inconsistency & identity friction (Priority #5) 

### B) Log **service_data_diff** (which fields mismatched: dates, branch, rating) + **user_submitted_fix_attempts**

**Why this matters:** Distinguishes **data integrity** failures from general dissatisfaction; reveals whether guided corrections reduce repeat contacts and lift completion.  
**Directly ties to:**  
* Incorrect/missing service data (Priority #2)   
* App/Web inconsistency (Priority #5) 

### C) Instrument **print_failure_reason** (modal dismiss, PDF timeout, auth not eligible, network) + **time_to_pdf**

**Why this matters:** Explains the **16% post‑click attrition** and separates **performance** issues from **eligibility/auth** failures; enables targeted fixes (pre‑warm, fallback).  
**Directly ties to:**  
* Print flow friction (Priority #4)   
* Discoverability & navigation (Priority #3, last‑mile clarity) 

### D) Add **device/browser OS** + **accordion_interaction_path** (which sections opened) to VSC events

**Why this matters:** Shows whether certain devices/browsers or hidden content patterns correlate with drop‑offs; validates the impact of exposing critical actions by default.  
**Directly ties to:**  
* Discoverability & navigation (Priority #3)   
* Print flow friction (Priority #4) 

### E) Track **LOA_state_at_CTA** + **auth_upgrade_attempts** and **authorization_failure_code**

**Why this matters:** Quantifies how often **gating** causes late‑stage exits, and whether a **guided upgrade** path converts more attempts to successful prints.  
**Directly ties to:**  
* App/Web inconsistency & identity friction (Priority #5)   
* Discharge Status error blocks VSC (Priority #1) 

### If you only do 3 things (highest ROI)

1. **Instrument discharge_status_error_code + print_failure_reason** (root‑cause telemetry for the #1 blocker and last‑mile failures)   
2. **Create the in‑product “Resolve Discharge Status” flow** with DMDC sync and status tracking (removes the main task‑blocker)   
3. **Strengthen wayfinding (persistent CTA + VSC hub) and expose critical actions by default** (lift reach to VSC and improve conversion)   

Together, these changes turn analytics from **descriptive (where people leave)** into **diagnostic (which failure types cause exits)**—and they pair instrumentation with **direct fix paths** that can measurably increase successful card access and printing. 

---

**Notes on synthesis rules applied:**  
* **Deduplication:** Discharge status errors across CSAT and calls were merged into one top pain point; evidence from both sources is cited.   
* **Weighting & ranking:** Task‑blocking, high‑frequency issues ranked first; multi‑source corroboration and quantification drove priority order. 
