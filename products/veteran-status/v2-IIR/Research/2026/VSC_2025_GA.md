# VA.gov — Structured Findings: Veteran Status Card (VSC) Flow

## Executive Summary
Across the **Jan 1, 2025–Dec 31, 2025** period, the VSC journey shows **very low end‑to‑end completion**: only **0.32% of sessions** resulted in a successful **“Print your Veteran Status Card (PDF)”** action (72,130 completions out of 22,651,921 session starts). .pdf) The **largest drop‑offs** occur between session start → profile (**77.45% abandonment**) and profile → VSC card page (**88.5% abandonment**), with a further **87.72% abandonment** from card page → print. .pdf) **CSAT is not captured** in this GA export; survey‑related events exist (e.g., invitation accept/decline) but **no numeric 1–5 CSAT data** is available, so satisfaction cannot be computed under the required rules. .pdf) Entry paths cluster around **/profile** (319,610 sessions), **/profile/military-information** (242,929), and **direct VSC page** (189,005), indicating **discoverability depends heavily on Profile and Military Information sections**. .pdf) LOA3 sessions are a small subset (**30,318**) with slightly higher engagement (**53s vs. 49s overall**), suggesting **authentication/eligibility gating** may shape who reaches or completes the VSC flow. .pdf)

---

### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: High Funnel Abandonment (Profile → Card → Print)  
5. Category 2: Discoverability & Navigation (Entry Paths & Wayfinding)  
6. Category 3: Print Flow Friction (Click vs. Completion & PDF Reliability)  
7. Category 4: Authentication & Eligibility (LOA)  
8. Category 5: Performance & Interaction Signals (API & Engagement)  
9. Recommendations – Consolidated Priority Table  
10. Appendix: Data Overview, Metrics & Trends

---

## 1. Top‑Level Findings (Ranked by Relevance & Criticality)

1. **Massive end‑to‑end drop‑off** — Only **0.32%** of sessions print a VSC (**72,130 / 22,651,921**). Abandonment is **77.45%** at Profile entry, **88.5%** at Card page, and **87.72%** before Print. .pdf)  
2. **Discoverability relies on Profile & Military Information** — Entry paths concentrate on **/profile (319,610)** and **/profile/military-information (242,929)**, while **direct VSC** entry is **189,005** sessions; deeper navigation likely required. .pdf)  
3. **“Print” intent exceeds completion** — **85,862 “Print your Veteran Status Card (PDF)” link clicks** vs. **72,130 prints** implies friction post‑click (~**16%** drop from click to completion). .pdf)  
4. **Eligibility/authentication gating effects** — **LOA3 sessions = 30,318** with **53s** average engagement (overall **49s**) indicate segment differences that may constrain completion pathways. .pdf)  
5. **Heavy API traffic** — **3,637,975 `api_call` events** on the VSC page suggest backend reliance; potential retry patterns or non‑cached calls may contribute to latency and drop‑offs. .pdf)

---

## 2. Customer Satisfaction Table

> **Note:** GA export includes **survey invitation accept/decline** events but **no numeric CSAT values**. Therefore, satisfaction cannot be computed per the universal rules (A–D). .pdf)

| Metric | Value | Notes |
|---|---:|---|
| CSAT available? | **No** | No 1–5 numeric CSAT captured in this dataset. .pdf) |
| % Satisfied (4–5) | **N/A** | Excluded due to lack of numeric CSAT. Rules A–D applied. .pdf) |
| Median Satisfaction | **N/A** | Not computable. .pdf) |
| Primary monthly issue | **N/A** | No month‑level CSAT segmentation present. .pdf) |

**Filtering method (if CSAT existed):** Rows would be limited to VSC scope via **page path contains `/profile/veteran-status-card`** and valid numeric CSAT (1–5). Non‑matching pages, null CSAT, and non‑numeric CSAT would be excluded. .pdf)

---

## 3. Issue Category Breakdown

| Category | Mentions / Volume | Description |
|---|---:|---|
| **High Funnel Abandonment** | **22,651,921 sessions start; 5,107,365 reach Profile; 587,534 reach VSC; 72,130 print** | Severe attrition across each step (77.45%, 88.5%, 87.72% abandonment) blocks task completion. .pdf) |
| **Discoverability & Navigation** | **Entry via /profile (319,610), /profile/military-information (242,929), direct VSC (189,005)** | Users rely on upstream pages to find VSC; wayfinding may be non‑obvious from other areas. .pdf) |
| **Print Flow Friction** | **85,862 “Print” link clicks vs. 72,130 prints** | Post‑click drop suggests intermediate failures (PDF generation, messaging, or modal friction). .pdf) |
| **Authentication & Eligibility (LOA)** | **LOA3 sessions 30,318; engagement 53s (49s overall)** | Segment differences imply gating may restrict access, influencing completion. .pdf) |
| **Performance & Interaction Signals** | **3,637,975 `api_call`; 1,035,822 `page_view`; 1,025,253 `accordion`; 99,748 `user_engagement`** | Heavy backend/API dependency and UI interactions that may add cognitive load. .pdf) |

---

## 4. Category 1: High Funnel Abandonment (Profile → Card → Print)

**Mentions / Volume:**  
- **Session starts:** 22,651,921 (**100%**) → **Profile:** 5,107,365 (**22.55%**) → **VSC page:** 587,534 (**2.59%**) → **Print:** 72,130 (**0.32%**). .pdf)  
- **Abandonment rates:** **77.45%** (Step 1→2), **88.5%** (Step 2→3), **87.72%** (Step 3→4). .pdf)

**Description:**  
Users exit at each handoff, with the most severe attrition prior to reaching the VSC page and again before the final print action. The **2.59%** reach‑rate to VSC from all session starts points to **discoverability and motivation barriers**, while the **12.28%** conversion from VSC page view to print (72,130 / 587,534) indicates **final‑step friction**. .pdf)

**Representative metrics:**  
- **Completion (VSC → Print):** **12.28%** (72,130 / 587,534). .pdf)  
- **Profile → VSC reach:** **11.5%** of Profile visitors (587,534 / 5,107,365). .pdf)

**Impact:**  
The majority of Veterans attempting the journey **do not complete printing**; this affects service verification scenarios (employment, benefits, discounts) where the VSC is expected to be immediately obtainable.

**Temporal or segment patterns:**  
- The export is **annual**; **no monthly breakdown** available in this snapshot to pinpoint seasonality. .pdf)

**Critical Observations:**  
- **Profile visitation is necessary but insufficient**; many who visit Profile **never reach VSC**. .pdf)  
- **From VSC to Print, one in eight completes**; page‑level friction (UI, messaging, or backend readiness) likely contributes. .pdf)

**Recommendations:**  
- Create a **single‑page “Express Print”** path with prechecks and inline PDF generation to minimize steps.  
- Instrument **failure states** (e.g., print modal dismiss, PDF timeout) to expose the reasons behind the **final‑step drop‑off**.  
- Add **prominent CTAs** to VSC across Profile and Military Information to improve reach to the VSC page.

---

## 5. Category 2: Discoverability & Navigation (Entry Paths & Wayfinding)

**Mentions / Volume:**  
- Entry paths to VSC context are concentrated: **/profile (319,610 sessions)**, **/profile/military-information (242,929)**, **direct `/profile/veteran-status-card` (189,005)**. .pdf)

**Description:**  
Discoverability appears **profile‑centric**; users coming from general Profile or Military Information need **additional navigation** to find VSC. Deep links exist but represent **fewer sessions** compared to upstream entry pages.

**Representative metrics:**  
- **Total sessions in VSC context filter:** **685,276**. .pdf)

**Impact:**  
If Veterans **cannot easily locate VSC** from common tasks, they fail before encountering the card page. The reliance on upstream pages suggests **wayfinding and contextual prompts** are critical.

**Temporal or segment patterns (example table):**

| Entry Path | Sessions |
|---|---:|
| `/profile` | 319,610 .pdf) |
| `/profile/military-information` | 242,929 .pdf) |
| `/profile/veteran-status-card` | 189,005 .pdf) |

**Critical Observations:**  
- **Profile page dominates entry**, but **conversion onward is weak**; prompts may be insufficient. .pdf)  
- **Direct VSC entry** is substantial but **not majority**, implying **search/findability improvements** could lift reach. .pdf)

**Recommendations:**  
- Add **persistent VSC CTA** on Profile and Military Information with benefit‑framed microcopy (“Need proof of service? Print your card instantly”).  
- Introduce **contextual links** (e.g., from Letters or Personal Information) to VSC where relevant.  
- Enable **search‑optimized deep links** and **breadcrumb clarity** to VSC. .pdf)

---

## 6. Category 3: Print Flow Friction (Click vs. Completion & PDF Reliability)

**Mentions / Volume:**  
- **“Print your Veteran Status Card (PDF)” link clicks:** **85,862**.  
- **Successful prints:** **72,130**. .pdf)

**Description:**  
A noticeable **gap** exists between **print intent** (click) and **actual completion**. Potential contributors include **modal behaviors**, **PDF generation latency**, or **authentication checks** that interrupt the flow.

**Representative metrics:**  
- **Drop‑off post‑click:** ~**13,732** events (difference between clicks and prints), ~**16%** attrition from click to completion. .pdf)  
- **Modal events:** **39,884** total; may reflect dialog interactions during the print step. .pdf)

**Impact:**  
Veterans who **signal clear intent** still **fail to obtain a printable PDF**, undermining confidence and increasing reattempts or call‑center contacts.

**Temporal or segment patterns:**  
- Not available in this snapshot; **instrumentation granularity** for error codes/timeouts is recommended. .pdf)

**Critical Observations:**  
- **API dependency** is high (**3,637,975 `api_call` events**); intermittent backend issues would **disproportionately affect the final step**. .pdf)  
- **User engagement** signals (**99,748**) suggest effort on page, but **engagement ≠ completion**; friction likely occurs **after the print click**. .pdf)

**Recommendations:**  
- Add **client‑side and server‑side telemetry** for print failures (HTTP codes, timeouts, retries).  
- Implement **optimistic PDF generation** (pre‑warm caches, async render) and **progress messaging** to reduce abandonment.  
- Provide **fallbacks** (email card link, save to device wallet) when print fails.

---

## 7. Category 4: Authentication & Eligibility (LOA)

**Mentions / Volume:**  
- **LOA3 sessions:** **30,318**; **views:** **49,681**; **avg engagement:** **53s**.  
- **Totals (all LOA):** **685,276 sessions**; **1,025,253 views**; **49s** average engagement per session. .pdf)

**Description:**  
Higher LOA may be required for printing; the **smaller LOA3 cohort** with **greater engagement** implies that **eligibility/authentication** stages influence completion. (The dataset does **not** enumerate specific gating rules.)

**Representative metrics:**  
- **LOA3 engagement vs. total:** **53s vs. 49s** average per session. .pdf)  
- **Login events:** **67,887** (suggesting authentication touchpoints in the flow). .pdf)

**Impact:**  
If users lack the required authentication level, they may be **blocked late** in the journey, increasing frustration and attrition.

**Temporal or segment patterns:**  
- **LOA split** visible in the export; no monthly segmentation present. .pdf)

**Critical Observations:**  
- **Authentication gating** likely explains **some late‑stage drop‑offs**.  
- **Messaging clarity** about eligibility earlier (Profile/Military Information) could **reduce dead‑ends**.

**Recommendations:**  
- Surface **eligibility status** and **LOA requirements** **before** navigating to VSC (e.g., on Profile).  
- Offer a **lightweight upgrade path** (guided steps) when users lack required LOA.  
- Log **authorization failures** tied to print attempts for rapid triage.

---

## 8. Category 5: Performance & Interaction Signals (API & Engagement)

**Mentions / Volume:**  
- **`api_call`: 3,637,975**; **`page_view`: 1,035,822**; **`accordion`: 1,025,253**; **`navigation`: 697,774**; **`link_click`: 107,308**; **`user_engagement`: 99,748**; **`breadcrumb`: 48,987**; **`modal`: 39,884**; **`login`: 67,887**; **`survey_interaction`: 60,327**. .pdf)

**Description:**  
The VSC experience involves **heavy API use** and **multiple UI interactions** (accordion expansion, modal dialogs), each adding **latency or cognitive load**. Backend responsiveness and UI structure likely factor into abandonment.

**Representative metrics (slices):**  
- **Average engagement (overall):** **49s** per session on VSC page context; **LOA3:** **53s**. .pdf)

**Impact:**  
Even modest **latency** or **interaction overhead** can compound into **attrition** when stacked with authentication and discoverability challenges.

**Temporal or segment patterns:**  
- This is an **annual rollup**; **no per‑month error/latency** time series present. .pdf)

**Critical Observations:**  
- The ratio of **API calls to page views** suggests **multiple calls per visit**, amplifying risk if services degrade. .pdf)  
- **Accordion usage** is high (**1,025,253**), implying **content is collapsed** by default; key actions might be **hidden** behind expansions. .pdf)

**Recommendations:**  
- **Reduce API round‑trips** via caching and consolidated endpoints.  
- **Open critical content by default** (e.g., print CTA, eligibility messaging) to limit accordion friction.  
- Monitor **Core Web Vitals** alongside API SLAs; set **user‑visible thresholds** (loading spinners with timeouts & retry guidance).

---

## 9. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | **Create “Express Print” path** with inline eligibility precheck, pre‑warmed PDF generation, and progress messaging; minimize steps from Profile → VSC → Print. | High Funnel Abandonment; Print Flow Friction | **Increase completion** from **12.28%** (VSC→Print) to **20–25%** short‑term; reduce attrition at final step. .pdf) |
| **P0** | **Instrument & fix print failures** (modal exits, PDF timeouts, API retries) with error telemetry and user‑friendly fallbacks (email link, wallet). | Print Flow Friction; Performance/API | **Cut post‑click drop** (~**16%**) by half; lower call‑center escalation. .pdf) |
| **P1** | **Strengthen wayfinding**: persistent VSC CTA on Profile & Military Information; contextual links elsewhere; improve breadcrumb clarity. | Discoverability & Navigation | Lift VSC reach from **2.59%** of sessions toward **4–5%** by funneling high‑traffic entry pages. .pdf) |
| **P1** | **Eligibility messaging & LOA upgrade flow** early in journey; display LOA status near CTA. | Authentication & Eligibility | Reduce late‑stage blocks; improve trust; increase LOA3‑ready attempts. .pdf) |
| **P2** | **Accordion/content design tune‑up**: expose critical actions; streamline information hierarchy. | Performance & Interaction | Shorter decision time; fewer misclicks; better clarity for print action. .pdf) |
| **P2** | **API optimization & caching** (bundle calls, cache card assets). | Performance & Interaction | Improved responsiveness; fewer retries; reduced abandonment under load. .pdf) |

---

## 10. Appendix: Data Overview, Metrics & Trends

### Data Overview
- **Dataset:** GA4 — VA.gov Production, **Veteran Status Card** context. .pdf)  
- **Date Range:** **Jan 1, 2025–Dec 31, 2025**. .pdf)  
- **Funnel summary:** **22,651,921 sessions** → **5,107,365 Profile** → **587,534 VSC page** → **72,130 prints**. .pdf)  
- **Abandonment rates:** **77.45%**, **88.5%**, **87.72%** respectively across steps. .pdf)  
- **Events (top):** `api_call` **3,637,975**; `page_view` **1,035,822**; `accordion` **1,025,253**; `navigation` **697,774**; `link_click` **107,308**; `login` **67,887**; `user_engagement` **99,748**; `modal` **39,884**; `breadcrumb` **48,987**; `survey_interaction` **60,327**. .pdf)

### Theme & Task Counts
- **Reachability/Discoverability:** Entry via **Profile/Military Information** dominates (319,610; 242,929), **direct VSC entry** is **189,005**. .pdf)  
- **Printing Intent vs. Completion:** **85,862 print link clicks** vs. **72,130 prints**. .pdf)  
- **Authentication Touchpoints:** **67,887 logins** in VSC context. .pdf)

### Trends
- **Monthly CSAT:** **Not available** (no numeric CSAT). .pdf)  
- **Temporal patterns:** The export is a **year‑level snapshot**; monthly spikes cannot be assessed here. .pdf)

### Representative Quotes
- *(GA dataset contains metrics only; no verbatim quotes. Representative slices provided above.)*
