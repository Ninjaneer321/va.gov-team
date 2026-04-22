# Apply for Personalized Career Planning & Guidance (PCPG, Chapter 36) — 2025 Insights  
**Sources: Medallia CSAT; GA4 Funnel via Domo; Forms KPIs**

---

## TL;DR (what matters)

- **Baseline CSAT (measured):** **70% satisfied (CSAT 4–5), n=27**   
- **CSAT/feedback timeframe:** **Jan 2–Dec 30, 2025 (Medallia)**; **Jan 1–Dec 31, 2025 (GA4)**; **Aug 31–Dec 31, 2025 (Forms KPIs)**   

### Top pain points (task‑blocking, highest impact)

1. **Early required steps (Intro, Applicant Info) drive exits** — Step 1 abandonment **65.86%**; Step 2 **67.31%**   
2. **Claimant Address page blank/cut‑off/crash** — hard‑blocked progress (~10 mentions)   
3. **Submission failures (“try again” / kicked out)** — prevents completion (~5 mentions)   

### What analytics adds (GA4)

- Quantifies **where** users exit (Steps 1–3 major losses)   
- **Device patterns:** Desktop dominant (**≈91–100%**), mobile **0–8.83%** still relevant for ergonomics   
- **Measurement gaps:**  
  - No **field‑level error telemetry**  
  - No numeric **CSAT** in KPIs export  
  - Multi‑session charts exist but **values not exposed**   

---

# 1) Data Source Inventory

## A) Medallia (CSAT & Free‑text)

- **Timeframe:** Jan 2–Dec 30, 2025  
- **Scoped volume:** 96 verbatims  
- **CSAT sample:** n=27  
- **CSAT baseline:** **70% satisfied; median=5**  
- **Theme counts:**  
  - Form not loading / blank page / cut‑off: ~10  
  - Submission failure / “try again”: ~5  
  - Resume / saved record lost: ~3  
  - Navigation & benefit clarity: ~6  
  - Program trust / staff issues: ~3  
  - Positive satisfaction drivers: ~16  
  - Task completion (self‑reported): **55%** (32 Yes / 26 No)  
  

## B) GA4 (via Domo) + Forms KPIs

- **Timeframe:**  
  - GA4 Funnel: Jan 1–Dec 31, 2025  
  - KPIs Snapshot: Aug 31–Dec 31, 2025  
    
- **Definitions:**  
  - *Entrants*: Users who view a step  
  - *Completions*: Users who advance  
  - *Abandons*: Users who leave before advancing  
  - Device shares reflect *sessions* at step views  
  - Experience ratings present but **no numeric values** → CSAT not computable  
    

### Funnel Drop‑offs

- **Step 1 (Intro):** 25,535 entrants → 34.14% completion; **65.86% abandonment (16,818)**   
- **Step 2 (Applicant Info):** 16,046 entrants → 32.69% completion; **67.31% abandonment (10,800)**   
- **Step 3 (Address):** 8,949 entrants → 36.21% completion; **63.79% abandonment (5,709)**   
- **Step 4 (Applicant Status):** 540 entrants → 42.78% completion; **57.22% abandonment (309)**   
- **Device patterns:** Desktop ≈91–100%; Mobile ≈0–8.83%   

### Completions

- **90 successful submissions** (Aug–Dec 2025)   

---

# 2) Consolidated “What’s Going Wrong”

**Two core failure modes dominate.**

**1. Early required‑step clarity & validation failure.**  
GA4 shows the **largest exits** occur at **Step 1 (65.86%)** and **Step 2 (67.31%)**, both required to proceed.  Medallia comments mention uncertainty about **which benefit applies**, **what steps to take**, and missing context—all pointing to **clarity, eligibility, and prerequisite gaps**. 

**2. Mid‑ and late‑flow reliability failures.**  
Medallia repeatedly cites the **Address step blank/crash** (~10 mentions), consistent with elevated **Step 3** exits (63.79%).  Users also report **submission failures**, unclear completion, and being “kicked out.” 

**Save & Resume** gaps cause rework and abandonment during multi‑session journeys—suggested by KPIs but impossible to quantify due to missing values.   

Device insights show that although mobile is a small share, **mobile users may experience disproportionately worse validation/focus behavior**, amplifying churn. 

Across all sources, GA reveals **where** exits occur, but not **why**, due to missing telemetry (error codes, failed loads, field‑level signals).  

---

# 3) Pain Points (with Fixes)

## **Priority #1 — Early Required‑Step Exits (Intro & Applicant Info)**  
**Impact tags: task‑blocking, clarity/validation, high‑frequency**

### Evidence
- Step 1 abandonment: **16,818 (65.86%)**; Step 2: **10,800 (67.31%)** (GA4 Jan–Dec 2025)   
- Navigation/eligibility confusion (~6 mentions) (Medallia)   

### Fix (specific)

**Category: Validation & Guidance**

1. Add **inline examples** and **microcopy** for top‑error fields (requires new field‑level telemetry).  
2. Add **eligibility & document pre‑start checklist** + **“Should I apply?”** mini‑wizard carrying selections into Step 1.  
3. Implement **progressive disclosure**, accessible error states, and robust focus management.  

### Quotes
- “**Not sure what steps to take**.” — CSAT Comment   
- “**Not sure which VA benefits apply.**” — CSAT Comment   

---

## **Priority #2 — Claimant Address Page Blank / Cut‑off / Crash**  
**Impact tags: hard‑block, reliability**

### Evidence
- ~10 Medallia mentions of blank/cut‑off/crash (Jan–Dec 2025)   
- Step 3 abandonment **5,709 (63.79%)** (GA4)   

### Fix (specific)

**Category: Page Health & Failover**

1. Add **component load‑failure detection** + **fallback minimal address form**.  
2. **Autosave before step transition** + recovery banner (“We saved your draft”).  
3. Add **page‑health telemetry** with alerts (render success, timeouts, JS errors).  

### Quotes
- “When I go to the next page it is **blank**...” — CSAT Comment   
- “The page just **cut off**... won’t show the page.” — CSAT Comment   

---

## **Priority #3 — Submission Failures (“Try Again” / Unclear Confirmation)**  
**Impact tags: hard‑block, high‑stakes**

### Evidence
- ~5 mentions: “try again,” “kicked us out,” unclear submission (Medallia)   
- GA lacks explicit submission error codes (KPIs only show 90 successes)   

### Fix (specific)

**Category: Transaction Integrity**

1. Use **idempotent tokens** + server‑side deduplication; return **human‑readable error codes**.  
2. Guarantee a **single confirmation page** (no routing to feedback pages on error).  
3. Track **submit_attempted**, **submit_failed(error_code)**, **submit_succeeded(ref_id)**.  

### Quotes
- “Can’t submit... tells me to **try again**.” — CSAT Comment   
- “Form **kicked us back out**.” — CSAT Comment   

---

## **Priority #4 — Save & Resume Durability (Lost Drafts / Cannot Reopen)**  
**Impact tags: abandonment, accessibility**

### Evidence
- ~3 Medallia mentions (lost progress; cannot reopen)   
- KPIs indicate multi‑session pattern but no values (missing quant)   

### Fix (specific)

**Category: State Durability**

1. **Autosave** on every field blur + step transition; add recovery prompts.  
2. Add **drafts dashboard** + **resume deep‑links** + reminder notifications.  
3. Instrument **resume_opened**, **resume_failed(reason)**, **resume_completed**.  

### Quotes
- “Cannot get it to **open again**.” — CSAT Comment   
- “Unable to **locate** the record.” — CSAT Comment   

---

# 4) What to Measure Next — and Why

Right now GA4 shows **where** users leave, but **not why**. Missing telemetry prevents distinguishing **validation errors**, **blank‑page failures**, or **submission‑pipeline issues**. We need finer‑grained instrumentation to convert insights from **descriptive** to **diagnostic**.  


---

## A) Field‑Level Error Telemetry (Steps 1–2)

**Why:** Reveals which inputs cause churn; shows whether users fix errors or exit.  
**Ties to:** Early required‑step exits (#1), submission failures (#3).  


## B) Page‑Health Signals for Claimant Address

**Why:** Quantifies frequency of blank/cut‑off/crash; identifies device/browser sources.  
**Ties to:** Address step reliability (#2), Save & Resume (#4).  


## C) Transactional Submission States

**Why:** Distinguishes successful vs failed submissions; reduces duplicate attempts.  
**Ties to:** Submission failures (#3), early‑step exits (#1).  


## D) Save & Resume Telemetry

**Why:** Confirms whether users return after interruptions; quantifies draft loss.  
**Ties to:** Save & Resume (#4), early‑step exits (#1).  


## E) Accessibility/Error‑State Metrics

**Why:** Ensures error messages are visible and recoverable across devices.  
**Ties to:** Early required‑step exits (#1), Claimant Address (#2).  


---

# If You Only Do 3 Things (Highest ROI)

1. **Instrument per‑field error telemetry (Steps 1–2)**  
2. **Add page‑health telemetry + fallback rendering for Claimant Address**  
3. **Track explicit submission states (attempted → failed → succeeded)**  

---

If you'd like, I can export this Markdown to a **clean downloadable .md file**, or generate a **slide‑ready version**.
