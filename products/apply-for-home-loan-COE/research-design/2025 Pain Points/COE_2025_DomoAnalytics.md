# VA.gov Form 26-1880 (Certificate of Eligibility) — Structured Findings: End-to-End Form Experience

## Executive Summary

Analysis of **Form 26-1880 (Certificate of Eligibility for VA Home Loan)** across the full calendar year **January 1, 2025 – December 31, 2025** reveals a form that is being found and started at scale but failing to convert into completed submissions. Of **459,740 users** who viewed the introduction step, only **16.52%** ultimately completed the form by user, well below the **48% VA.gov platform average** — a gap of more than 30 percentage points. The funnel exhibits two catastrophic drop-off points: a **74.2% exit rate at the Introduction step** (Step 1) and a **67.6% exit rate at the VA Loan Screener step** (Step 7), which together account for the overwhelming majority of lost users. Despite these structural issues, the form recorded **77,605 successful submissions** against **4,326 failures** and **519,058 sessions that did not submit**, indicating that when users persist, submission success is relatively high. Sentiment among surveyed users is mixed-to-cautiously-positive: the **average experience rating is 3.33 / 5 stars (+38.9% vs. prior period)**, and the distribution skews toward 5 stars, though a meaningful tail of 1–2 star ratings persists. User experience satisfaction (computed per the CSAT rules below) sits at approximately **53% satisfied**. Intercept survey and task-completion data ranges (**Jan. 8, 2025 – Dec. 30, 2025** for experience ratings; **Feb. 11, 2025 – Nov. 30, 2025** for task completion) confirm these findings are stable across the year.


### Table of Contents

1. Top-Level Findings (Ranked by Relevance & Criticality)
2. Customer Satisfaction Table
3. Issue Category Breakdown
4. Category 1: Introduction-Step Abandonment (Findability-to-Intent Gap)
5. Category 2: VA Loan Screener Drop-Off (Eligibility Friction)
6. Category 3: Upload Supporting Documents Friction
7. Category 4: Review & Submit Fall-Off
8. Category 5: Landing Page Engagement Erosion
9. Category 6: Experience Rating Polarization
10. Recommendations – Consolidated Priority Table
11. Appendix: Data Overview, Metrics & Trends


## CSAT Calculation Logic Applied

Because this dataset is GA-based, no 1–5 CSAT is attached at the row level. The closest analog is the **Intercept Survey Experience Rating (1–5 stars)** and the **Able-to-Complete-Tasks** donut on Page 9 of the dashboard. Applying the generalized rules:

- **Inclusion:** Only responses tied to Form 26-1880 on VA.gov (form_name filter already applied at dashboard level), numeric 1–5 rating, non-null.
- **Formula applied:** % satisfied = (ratings of 4 or 5) ÷ (ratings of 1–5, excluding "No response").
- **Result:** Based on the visible distribution (5-star bar is dominant, 4-star is second tallest, with 1/2/3-star bars roughly equal and smaller), **approximately 53% satisfied**, median rating **4**, mean **3.33**.
- **Excluded:** "No response" bucket, non-26-1880 traffic, and rows outside the Jan. 8 – Dec. 30, 2025 intercept survey window.


## 1. Top-Level Findings (Ranked by Relevance & Criticality)

Ranking factors: frequency of occurrence, severity of user impact, task-blocking potential, and actionability.

1. **Introduction-step exit (74.2%)** — Of 459,740 users who viewed Step 1, roughly **340,952 exited before advancing** to personal information. This is the single largest source of lost users on the form and represents the primary conversion bottleneck.

2. **VA Loan Screener exit (67.6%)** — Of 106,762 users who reached Step 7, approximately **72,171 exited**. This is the most severe mid-funnel collapse and the clearest eligibility-related friction point.

3. **Overall completion rate by user is 16.52%** — Against a VA.gov platform benchmark of **48%**, Form 26-1880 underperforms by a factor of nearly 3×, signaling systemic rather than isolated usability issues.

4. **Upload supporting documents exit (21.4%)** — Of 105,684 users reaching Step 9, roughly **22,616 exited**, making document upload the third-largest drop-off after Intro and Screener.

5. **Review and submit exit (7.5%)** — Even at the final gate, 83,048 users reached review and **6,229 still exited before submitting**, suggesting last-mile hesitation.

6. **Form completion requires multiple sessions for a meaningful minority** — Average sessions to complete is **1.42**; while 56,318 users finished in one session, **15,982 needed two and 6,504 needed three or more**, indicating some users cannot complete in a single sitting.

7. **Landing page traffic is declining** — Unique visitors to the landing page dropped **-9.8% week-over-week comparison period**, and avg. visits per user dropped **-0.9%**, both negative indicators for upstream funnel health.

8. **Experience rating is improving but polarized** — Avg. experience rating rose **+38.9% vs. prior period** to 3.33/5, but the distribution shows a bimodal pattern with substantial 1–2 star responses alongside a dominant 5-star bucket.


## 2. Customer Satisfaction Table

| Metric | Value | Source / Window |
|---|---|---|
| Avg. experience rating (1–5) | **3.33** | Intercept Survey, monthly avg. |
| Change vs. prior period | **+38.9%** | Monthly trend |
| % Satisfied (4–5 stars) | **~53%** | Jan. 8 – Dec. 30, 2025 |
| % Dissatisfied (1–2 stars) | **~25–28%** | Jan. 8 – Dec. 30, 2025 |
| Median rating | **4** | Jan. 8 – Dec. 30, 2025 |
| Able to complete tasks (green slice) | **~30–35%** Yes | Feb. 11 – Nov. 30, 2025 |
| Unable to complete tasks (red slice) | **~15–20%** No | Feb. 11 – Nov. 30, 2025 |
| Completion rate by user | **16.52%** | Jan. 1 – Dec. 31, 2025 |
| Platform benchmark | **48%** | All VA.gov forms, same window |


## 3. Issue Category Breakdown

Six distinct issue categories emerge from the funnel, engagement, and survey data. Each is treated in depth below.


## 4. Category 1: Introduction-Step Abandonment (Findability-to-Intent Gap)

**Mentions / Volume:** **340,952 users** (74.2% of 459,740 Step-1 viewers). This is the largest single failure point in the entire form experience.

**Description:** Three-quarters of users who reach the Form 26-1880 Introduction page leave without clicking into the Personal Information step. Given that **238,766 users arrived from the `/introduction/` URL** and another **212,203** from the form landing root, this is not a findability problem — users *find* the form but choose not to start it, or encounter an entry barrier (authentication, eligibility uncertainty, or information demands) before advancing. Combined with the fact that **51% of unique users are returning visitors**, a large share of these exits likely represent users who came back specifically to start the form and still did not advance.

**Representative metrics:**
- Step 1 – Introduction: **459,740 viewed / 118,789 completed Step 2 (26%)** → **340,951 lost**
- Top pre-form page: `/request-coe-form-26-1880/introduction/` — 238,766 unique users
- Secondary pre-form page: `/request-coe-form-26-1880/` — 212,203 unique users
- `/auth/login/callback/` appears as the **7th most common pre-form page (108,946 users)**, suggesting authentication is a meaningful step in the intro journey

**Impact:** This single drop-off alone explains most of the gap between Form 26-1880's 16.52% completion rate and the 48% VA.gov benchmark. If Introduction-step exit dropped from 74.2% to even 50% (a level comparable to similar forms), completions would more than double without any other changes.

**Temporal or segment patterns:**

| Segment | Observation |
|---|---|
| Desktop (53.5%) vs. Mobile (45.2%) | Near-even split; mobile friction on a content-heavy intro is a likely contributor |
| New vs. Returning | 49% new / 51% returning — high returning share implies intent-to-start exists but is not being converted |
| Traffic source | (direct) and google dominate; organic campaign leads — intent is high, suggesting the intro page itself is the barrier |

**Critical Observations:**
- The 74.2% intro exit is radically higher than downstream steps 3–6, which all cluster at 0.1–6.0%. This confirms the barrier is at entry, not mid-flow.
- The mismatch between 212,203 landing-page visits and 459,740 introduction-step views suggests many users are re-visiting the introduction multiple times — consistent with users coming back to "check if they're ready" rather than completing.
- Authentication (`/auth/login/callback/`) in the top-10 pre-form pages means some users are bouncing between the form intro and the login flow, which is a known friction pattern.

**Recommendations:**

| Action | Rationale |
|---|---|
| Reduce intro-page content density and move eligibility explanation to a collapsible or secondary page | Lower the cognitive barrier to starting |
| Audit the intro CTA — test a single dominant "Start your application" button above the fold | Strong CTAs move users off high-exit entry pages |
| Ensure users can preview what documents they'll need before committing | Prevents starting-then-abandoning to gather papers |
| Measure authenticated vs. unauthenticated intro-exit rates separately | Isolates whether login friction is driving abandonment |


## 5. Category 2: VA Loan Screener Drop-Off (Eligibility Friction)

**Mentions / Volume:** **~72,171 users** (67.6% exit rate of 106,762 Step-7 viewers). Second-largest absolute loss point after Introduction.

**Description:** The VA Loan Screener is a mid-funnel step where users answer eligibility questions. Nearly **seven of every ten users who reach this step exit the form entirely** — not just skipping or erroring, but leaving. Critically, the next step ("VA loan history") shows only **34,556 viewers and a 0.0% exit rate**, meaning users who survive the screener sail through. The screener itself is the wall.

**Representative metrics:**
- Step 7 – VA Loan Screener: **106,762 viewed / 34,556 advanced to Step 8 (~32%)**
- Step 8 – VA Loan History: **34,556 viewed / 0.0% exit rate** (steep drop in volume, frictionless for survivors)
- Completion rate at Step 7 in the funnel view: **23%** (down from 24% at Step 6)
- The VA Loan Screener URL (`/existing-loan-screener/`) appears in the top pre-form pages with 105,684 unique users — matching the step-view count almost exactly

**Impact:** This step effectively functions as a second bottleneck gate. Because the drop is so sharp and the downstream steps so clean, the screener is either (a) correctly filtering ineligible users, or (b) incorrectly turning away eligible ones through confusing questions or unclear language. The dashboard cannot distinguish these without qualitative follow-up, but the sheer scale — 72,000+ users — means even a 10% misclassification rate would represent thousands of eligible veterans being lost.

**Temporal or segment patterns:**

| Funnel step | Users | Exit rate |
|---|---|---|
| 6 – Add service history | 107,435 | 0.6% |
| **7 – VA loan screener** | **106,762** | **67.6%** |
| 8 – VA loan history | 34,556 | 0.0% |
| 9 – Upload supporting documents | 105,684 | 21.4% |

Note: Step 9's viewer count (105,684) exceeds Step 8's (34,556), indicating the screener routes users down divergent paths — most users skip Step 8 (VA loan history) entirely and go to Step 9, while a subset is sent to Step 8 first. This routing split may itself be confusing.

**Critical Observations:**
- The screener's 67.6% exit is second only to the Introduction's 74.2%; together they account for the vast majority of funnel loss.
- The branching logic between Steps 7, 8, and 9 is non-obvious from the funnel and likely invisible to users.
- Users who pass the screener have a near-zero exit rate on the immediately following step, suggesting the screener is the pain, not a general screener-like aversion.

**Recommendations:**

| Action | Rationale |
|---|---|
| Conduct usability testing specifically on Step 7 with 8–10 veterans, especially those with non-standard service histories | Identify whether questions are confusing or eligibility logic is wrong |
| Add a "Why we're asking this" inline explainer for each screener question | Reduces abandonment driven by suspicion or confusion |
| Instrument the screener with per-question exit tracking | Pinpoints which specific question causes exits |
| Provide a "Save and come back" option prominently at this step | Some exits may be users leaving to verify loan details |


## 6. Category 3: Upload Supporting Documents Friction

**Mentions / Volume:** **~22,616 users** (21.4% exit rate of 105,684 Step-9 viewers).

**Description:** After surviving the screener, users face the document upload step, where more than one in five still exits. This is consistent with a well-documented pattern on federal forms: users who are willing to answer questions often balk when asked to produce documents they may not have readily available.

**Representative metrics:**
- Step 9 – Upload supporting documents: **105,684 viewed / 23% advanced**
- The `/upload-supporting-documents/` URL shows **92,292 unique pre-form users**, indicating many users visit this page before starting, likely to preview requirements
- Sessions to complete: **1.42 average**, with **22,486 users needing 2+ sessions** (15,982 at 2 sessions, 6,504 at 3+)

**Impact:** Document upload drop-off translates directly into incomplete applications, which means a veteran who has already invested effort across 8 prior steps never receives their Certificate of Eligibility. This is arguably the most costly type of abandonment because of sunk effort.

**Critical Observations:**
- The multi-session pattern (1.42 avg, tail of 3+ sessions) strongly correlates with this step — users likely leave to retrieve documents and do not return.
- 92,292 users visited the upload page *before* starting the form, suggesting many are trying to understand requirements in advance but still find the live step problematic.

**Recommendations:**

| Action | Rationale |
|---|---|
| Display the complete document checklist on the Introduction page with file-format and size requirements | Users can prepare before starting |
| Add "email yourself a link to finish later" functionality | Acknowledges real-world document-gathering gaps |
| Allow optional document deferment with a clear "add later" path | Reduces terminal abandonment |
| Review mobile upload UX specifically (45.2% of traffic is mobile) | Mobile document capture/upload is the most common failure surface |


## 7. Category 4: Review & Submit Fall-Off

**Mentions / Volume:** **~6,229 users** (7.5% exit rate of 83,048 Step-10 viewers).

**Description:** A smaller but notable share of users reaches the final review step and still walks away. At 7.5%, this is lower than earlier gates but represents the most expensive lost users — those who completed every substantive step.

**Representative metrics:**
- Step 10 – Review and submit: **83,048 viewed / 18% completed** (per funnel view)
- Step 11 – Submission confirmation: **76,860 viewed**
- Total submissions for the year: **77,605 successful / 4,326 failed** → **5.3% technical failure rate** among attempts
- Forms-by-status: 519,058 Not Submitted, 77,605 Successful, 4,326 Failed

**Impact:** Users exiting at review often do so because of validation errors, sudden doubt about data entered, or uncertainty about what happens next. The 4,326 submission failures are particularly important — these are users who *tried* to submit and couldn't.

**Critical Observations:**
- The gap between 83,048 review-step viewers and 77,605 successful submissions is roughly 5,400 users — broadly consistent with the 7.5% exit rate plus the 4,326 technical failures.
- A 5.3% technical failure rate on submission is non-trivial for a year-long window and warrants its own investigation.

**Recommendations:**

| Action | Rationale |
|---|---|
| Analyze the 4,326 failed submissions by error type and browser | Technical failures are the most fixable form of lost conversion |
| Show a clear "what happens next" summary at review step | Reduces last-moment uncertainty |
| Make edit-in-place from the review screen obvious | Reduces exits driven by "I need to fix something" |


## 8. Category 5: Landing Page Engagement Erosion

**Mentions / Volume:** Landing page metrics span **3,696 weekly unique visitors** with **-9.8% WoW decline** and **1.09 avg. visits per user (-0.9%)**.

**Description:** Upstream of the form itself, the landing page shows declining engagement. Unique visitors, visits per user, and exit-without-visiting-form (21%) are all trending in the wrong direction, though time on page improved +14.8%.

**Representative metrics:**
- Unique visitors (weekly): **3,696 (-9.8%)**
- Avg. visits per user: **1.09 (-0.9%)**
- Avg. minutes on page: **1.4 (+14.8%)**
- Left without visiting form: **21% (-0.5%)**
- Avg. scroll depth: not configured (data gap)

**Impact:** Declining visitors indicate fewer veterans are discovering or returning to the form. The 21% who leave without visiting the form represents a meaningful share of landing traffic that could be funneled in with better navigation or CTAs.

**Critical Observations:**
- Scroll depth is "not configured for landing page" — this is an **instrumentation gap** that blocks diagnosis of where on the page users disengage.
- Longer time on page (+14.8%) combined with lower visit frequency could indicate users needing to re-read content rather than finding it quickly.

**Recommendations:**

| Action | Rationale |
|---|---|
| Configure scroll-depth tracking on the landing page | Eliminate the current diagnostic blind spot |
| A/B test landing-page CTA prominence and placement | Address the 21% leave-without-visit rate |
| Investigate WoW visitor decline against any SEO / referral changes | -9.8% is large enough to warrant root-cause analysis |


## 9. Category 6: Experience Rating Polarization

**Mentions / Volume:** Intercept survey responses across **Jan. 8 – Dec. 30, 2025**.

**Description:** The average rating of 3.33 masks a bimodal distribution. Five-star responses are the largest bucket and four-star the second, but one-star and two-star responses are substantial — visibly larger than the three-star middle. This polarization is characteristic of a form that works well for a "happy path" cohort but fails users who hit the screener or upload friction documented above.

**Representative metrics:**
- Avg. rating: **3.33 (+38.9% vs. prior period)**
- Distribution shape: bimodal, 5-star dominant, meaningful 1–2 star tail
- Task completion (Feb. 11 – Nov. 30, 2025): mixed, with visible red (No) and grey (No response) slices alongside green (Yes)

**Impact:** The +38.9% improvement is a strong positive signal, but absolute rating of 3.33 on a 5-point scale is still below where a mature federal form should sit. The polarization tells us that fixing the ~25–28% dissatisfied tail is where the highest-leverage rating improvements exist.

**Critical Observations:**
- The improvement trend is real but modest in absolute terms — the form is getting better but from a low base.
- Intercept survey is a random-prompt sample and may under-represent users who abandoned very early (the 74.2% Intro exiters likely never saw the survey).

**Recommendations:**

| Action | Rationale |
|---|---|
| Add a lightweight exit survey at Steps 1, 7, and 9 | Capture feedback from the users currently invisible to intercept survey |
| Segment rating data by completion outcome (completed vs. abandoned) | Understand whether low ratings come from completers or abandoners |
| Continue the interventions that drove +38.9% improvement | Lock in what's working before making large changes |


## 10. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | Redesign the Introduction step — reduce density, strengthen CTA, preview requirements | Cat. 1: 74.2% intro exit | **Largest single lever**; modeling suggests a drop to ~50% intro exit could **nearly double overall completion rate** |
| **P0** | Usability-test and re-copy the VA Loan Screener (Step 7) with per-question exit instrumentation | Cat. 2: 67.6% screener exit | **Second-largest lever**; targets ~72K users/yr |
| **P1** | Surface complete document checklist before form start; enable save-and-resume at Step 9 | Cat. 3: 21.4% upload exit | Addresses ~22K users/yr and the multi-session pattern |
| **P1** | Investigate 4,326 submission failures by error type and browser | Cat. 4: 5.3% technical failure rate | Technical failures are the most directly fixable loss |
| **P1** | Configure landing-page scroll-depth tracking and A/B test CTAs | Cat. 5: -9.8% visitors, 21% leave-without-visit | Closes instrumentation gap; addresses upstream decline |
| **P2** | Add exit-intent micro-surveys at Steps 1, 7, and 9 | Cat. 6: rating polarization + invisible abandoner feedback | Captures feedback from the 83% who don't complete |
| **P2** | Mobile-specific UX audit (45.2% of traffic) focused on intro, screener, and upload | Cats. 1, 2, 3 | Mobile likely amplifies each major friction point |
| **P2** | Add "Why we're asking this" inline explainers across the form | Cats. 2, 3 | Reduces suspicion-driven abandonment |


## 11. Appendix: Data Overview, Metrics & Trends

### Data Overview

| Metric | Value |
|---|---|
| Form | Form 26-1880 – Certificate of Eligibility (VA Home Loan) |
| Data source | VA.gov Platform Analytics & Insights (Domo + GA4; UA data ≤ June 30, 2024) |
| Primary data window | **January 1, 2025 – December 31, 2025** |
| Experience rating window | **January 8, 2025 – December 30, 2025** |
| Task completion window | **February 11, 2025 – November 30, 2025** |
| Total form starts | **44,416** (+3.7% last period) |
| Total form submissions | **5,897** (+7.2% last period — monthly recent figure) |
| Successful submissions (cumulative) | **77,605** |
| Failed submissions | **4,326** |
| Not-submitted sessions | **519,058** |
| Completion rate by user | **16.52%** (vs. 48% platform avg.) |
| Avg. sessions to complete | **1.42** (-2.7%) |
| Completed in 1 session | **4,392 (monthly); 56,318 (cumulative)** |
| Unique new vs. returning users | **49% new / 51% returning** |

### Funnel & Exit Metrics

| Step | Viewed | Exit Rate |
|---|---|---|
| 1 – Introduction | 459,740 | **74.2%** |
| 2 – Add personal information | 118,789 | 6.0% |
| 3 – Add mailing address | 111,652 | 1.2% |
| 4 – Add phone and email | 110,359 | 0.1% |
| 5 – Select service status | 110,270 | 2.6% |
| 6 – Add service history | 107,435 | 0.6% |
| 7 – VA loan screener | 106,762 | **67.6%** |
| 8 – VA loan history | 34,556 | 0.0% |
| 9 – Upload supporting documents | 105,684 | **21.4%** |
| 10 – Review and submit | 83,048 | 7.5% |
| 11 – Submission confirmation | 76,860 | — |

### Device & Browser Distribution

| Attribute | Breakdown |
|---|---|
| Desktop | 53.5% |
| Mobile | 45.2% |
| Top browsers | Chrome > Safari > Edge > Firefox > Samsung Internet |

### Traffic Sources & Campaigns

| Source | Users (approx.) |
|---|---|
| (direct) | ~195K |
| google | ~190K |
| (data deleted) | ~60K |
| bing | ~20K |
| yahoo | ~5K |

Top campaigns: (organic), (referral), 1880-sip-reminder. The presence of **1880-sip-reminder** (save-in-progress reminder campaign) in the top 3 reinforces that save-and-resume is a real user behavior worth designing for.

### Trends

- **Form starts trending up (+3.7%)** — demand is growing, which amplifies the urgency of fixing completion bottlenecks
- **Submissions trending up (+7.2% monthly)** — absolute submissions improving faster than starts, a modest positive
- **Sessions-to-complete trending down (-2.7%)** — form is becoming slightly easier for completers
- **Completed-in-1-session up (+8.7%)** — positive efficiency signal for the happy path
- **Landing page unique visitors down (-9.8%)** — upstream warning signal
- **Experience rating up (+38.9%)** — strong positive momentum from a low base

### Representative Metric Slices (in lieu of verbatim quotes)

- **Step 1 cliff:** 459,740 viewed → 118,789 advanced. **74.2% exit** in a single step.
- **Step 7 cliff:** 106,762 viewed → 34,556 advanced to Step 8. **67.6% exit**.
- **Authentication interleave:** `/auth/login/callback/` = 7th most common pre-form page (108,946 users).
- **Multi-session tail:** 6,504 users required 3+ sessions to complete.
- **Technical failure floor:** 4,326 failed submissions against 77,605 successful = **5.3% failure rate on attempt**.
- **Landing-page instrumentation gap:** "Scroll depth not configured for landing page" — active diagnostic blind spot.
- **Benchmark gap:** Form completion rate 16.52% vs. platform average 48% = **~31 percentage-point shortfall**.
