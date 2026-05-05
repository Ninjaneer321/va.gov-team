# VA.gov – Structured Findings: Education & Career Counseling (Chapter 36) — Apply for Personalized Career Planning (Form 25‑8832)

## Executive Summary
Across **96 total Medallia verbatims** in scope (VA.gov Education & Career Counseling pages), **CSAT=4–5 appears in 70% of CSAT‑eligible responses (19/27)**, with an **overall median CSAT of 5**. **Task completion is 55% (32 Yes / 26 No)** among rows that explicitly reported completion, indicating meaningful friction mid‑flow. The **top pain point is reliability at the “Claimant Address” step (blank page / cut‑off / crash)**, followed by **submission failures** and **lost saved progress**. Positive satisfaction drivers center on **ease of navigation**, **clear directions**, and **professional support**.  
**Data range:** January 2, 2025–December 30, 2025.

---

# Table of Contents
1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Form Not Loading / Blank Page / Page Cut‑Off  
5. Category 2: Submission Failure / “Try Again” Loops / Kicked Out  
6. Category 3: Resume / Saved Record Lost  
7. Category 4: Navigation & Benefit Clarity  
8. Category 5: Program Trust / Service Issues (VR&E / VSO / Staff)  
9. Category 6: Satisfaction Drivers (Ease, Clarity, Professionalism)  
10. Recommendations – Consolidated Priority Table  
11. Appendix: Data Overview, Metrics & Trends  

---

# 1. Top‑Level Findings (Ranked by Relevance & Criticality)

1. **Form not loading / blank page at “Claimant Address”** — ~10 mentions (~10%); page goes blank or cuts off, blocking submission.  
2. **Submission failure (“try again”, kicked out)** — ~5 mentions; users cannot complete.  
3. **Resume / saved record lost** — ~3 mentions; saved applications cannot be reopened.  
4. **Navigation & benefit clarity gaps** — ~6 mentions; confusion about eligibility and steps.  
5. **Program trust / service issues** — ~3 mentions; VR&E or VSO‑related dissatisfaction.  
6. **Satisfaction drivers** — ~16 positive mentions; ease, clarity, and professionalism.

---

# 2. Customer Satisfaction Table

### Overall CSAT (27 valid CSAT rows)
| Rating | Count | % |
|-------|------:|---:|
| 1 | 2 | 7% |
| 2 | 4 | 15% |
| 3 | 2 | 7% |
| 4 | 3 | 11% |
| 5 | 16 | 59% |
| **Satisfied (4–5)** | **19** | **70%** |
| **Median CSAT** | **5** | — |

### Monthly CSAT Summary
| Month | N | % Satisfied | Median CSAT | Primary Issue |
|-------|---:|------------:|-------------:|----------------|
| Feb | 1 | 0% | 3 | None (small N) |
| Apr | 1 | 0% | 2 | Submission failures |
| May | 3 | 66.7% | 5 | Mixed: submission issues & positives |
| Jun | 2 | 50% | 3 | Form not loading |
| Jul | 4 | 100% | 5 | Satisfaction drivers |
| Aug | 4 | 100% | 4.5 | Satisfaction drivers |
| Oct | 1 | 0% | 3 | Form incomplete / cut‑off |
| Nov | 3 | 66.7% | 5 | Resume / loading issues |
| Dec | 8 | 75% | 5 | Mixed |  

---

# 3. Issue Category Breakdown
Categories reflect recurring patterns across 96 in‑scope responses.

---

# 4. Category 1: Form Not Loading / Blank Page / Page Cut‑Off

**Volume:** ~10/96 (~10%)

**Description:**  
Users reach the next step—typically `claimant-address`—and the page displays blank content, stalls, or crashes.

**Representative Quotes:**  
- “When I go to the next page it is **blank**...”  
- “Online version... **crashing** for the past week.”  
- “The page just **cut off**... won’t show the page.”

**Impact:** Severe; hard‑block preventing submission.

**Recommendations:**  
- **P0:** Fix rendering failures on `claimant-address` (fallback content, load‑failure detection).  
- **P0:** Add failover mode with minimal fields and Save & Resume option.  
- **P1:** Add page‑health telemetry and alerting.

---

# 5. Category 2: Submission Failure / “Try Again”

**Volume:** ~5/96 (~5%)

**Description:**  
Users cannot submit forms; receive “try again” or are redirected to feedback pages.

**Quotes:**  
- “Can’t submit... tells me to **try again**.”  
- “Didn’t tell me if I did or not.”  
- “Form **kicked us back out**.”

**Impact:** Severe; blocks final completion.

**Recommendations:**  
- **P0:** Idempotent submission + clear error states.  
- **P0:** Prevent feedback‑page routing post‑submit.  
- **P1:** Add transactional confirmation indicators.

---

# 6. Category 3: Resume / Saved Record Lost

**Volume:** ~3/96 (~3%)

**Description:**  
Users return to complete saved applications but cannot reopen or locate the records.

**Quotes:**  
- “Cannot get it to **open again**.”  
- “Unable to **locate** the record.”

**Impact:** Moderate‑high; leads to abandonment.

**Recommendations:**  
- **P1:** Durable Save & Resume with dashboard.  
- **P1:** Add “We found your draft” automated recovery.

---

# 7. Category 4: Navigation & Benefit Clarity

**Volume:** ~6/96 (~6%)

**Description:**  
Uncertainty about eligibility, next steps, or where to seek help.

**Quotes:**  
- “Not sure **what steps to take**.”  
- “Not sure which VA benefits apply.”  
- “Any other ways to get help?”

**Impact:** Medium; increases time and confusion.

**Recommendations:**  
- **P1:** Eligibility guide (Chapter 36 vs VR&E vs Chapter 35).  
- **P2:** Clearer routing and contact pathways.

---

# 8. Category 5: Program Trust / Staff / VSO Issues

**Volume:** ~3/96 (~3%)

**Description:**  
Negative experiences with VR&E, unclear VSO contacts, or confused staff.

**Quotes:**  
- “VR&E **sucks**...”  
- “Staff seem **confused**...”  
- “VSO list said **none within 50 miles**.”

**Impact:** Medium; undermines trust.

**Recommendations:**  
- **P2:** Clarify program boundaries.  
- **P2:** Offer call‑back or escalated support when local options fail.

---

# 9. Category 6: Satisfaction Drivers (Ease, Clarity, Professionalism)

**Volume:** ~16 positive mentions (~17%)

**Quotes:**  
- “Simple to access... **clear directions**.”  
- “Navigating is **simple**.”  
- “Very **easy** to access.”

**Recommendations:**  
- Apply proven clarity and navigation patterns from confirmation pages across earlier, more complex steps.

---

# 10. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Impact |
|----------|---------------|-----------------|---------|
| **P0** | Stabilize `claimant-address` loading (fallbacks + guardrails) | Blank pages / cut‑off | Reduce hard‑blocks for ~10% of users; CSAT gain +5–10 pts |
| **P0** | Harden submission pipeline (retry + error codes) | Submission failures | Improves final completion +5–8 pts |
| **P1** | Durable Save‑and‑Resume | Lost progress | Reduces abandonment in May/Nov clusters |
| **P1** | Eligibility & routing helper | Navigation clarity | Shorter time‑to‑complete; fewer misroutes |
| **P2** | Accessibility / assistive options | Tech‑savvy gaps | Supports users with digital barriers |

---

# 11. Appendix: Data Overview, Metrics & Trends

### Dataset Overview
- **96 in‑scope rows** containing URLs under `/careers-employment/education-and-career-counseling/`.  
- **CSAT‑eligible rows:** 27  
- **Date range:** Jan 2 – Dec 30, 2025.  
- **Task completion (reported):** Yes 32 / No 26 → **55% completion**.

### Theme Distribution
- Form not loading: ~10  
- Submission failure: ~5  
- Resume issues: ~3  
- Navigation clarity: ~6  
- Program trust: ~3  
- Positive drivers: ~16  

### Trends
- Low‑CSAT months (Apr, Oct) map to known reliability issues.  
- High‑CSAT months (Jul–Aug) dominated by positive “ease of use” comments.  
- Failures consistently cluster at `claimant-address` and `#content` anchor variants.  

### Additional Representative Quotes
- “Not every veteran is **technically savvy**.”  
- “Website didn’t tell me if I **submitted**.”  
- “Simple and **easy** to access.”  
