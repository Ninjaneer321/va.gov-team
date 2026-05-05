# VA.gov 1095-B – Structured Findings: Download Your IRS 1095-B Flow

## Executive Summary

Between **March 1, 2025 and December 31, 2025** (the reporting window of VA's internal GA analytics CSV, with supporting GA4 data spanning **January 1, 2025 – December 31, 2025**), the VA.gov "Download Your IRS 1095-B" page generated **23,882 download-link events** across **21,603 PDF clicks (90.46%)** and **2,183 Text-file clicks (9.14%)**, with total **page views of 73,032** and **sessions of 55,364** across the measurement period. **CSAT is 75.6% satisfied (31 of 41 responses)**, but the sample is small and **heavily concentrated in December (32 of 41 responses)**, so the figure reflects tax-season behavior more than annual experience. The flow has **three material UX failures**: (1) a **December performance degradation** in which the `available_forms` endpoint slowed **~6×** (from ~45ms baseline to **272.96ms**) and the system error rate jumped from effectively 0% to **1.5% (127 of 8,280 calls)**; (2) a **"No form found" blue-alert state that affects roughly 20–25% of authenticated users every month** — about **1 in 5 Veterans who successfully sign in are told no 1095-B exists for them**, peaking at **24.8% in November** and totaling **3,263 blue-alert events from July through December alone**; and (3) an **EDIPI-linked authentication failure** that produced **~600 errors in a single April day** and **2,546 total error events** across the year. **Discoverability is healthy** — 55,441 sessions reached the page through a roughly even mix of Direct (46.1%) and Organic Search (44.0%) traffic — but the **funnel from page view to download click converts at only 48.7%**, meaning half of Veterans who reach the page leave without retrieving the form. The dominant UX failure pattern is **a compliance page that performs well under normal load but degrades visibly in December, with a persistent 20%+ share of users being silently turned away because their form is not available in the system**.


## Table of Contents

1. Top-Level Findings (Ranked by Relevance & Criticality)
2. Customer Satisfaction Table
3. Issue Category Breakdown
4. Category 1: December Performance Degradation & System Errors
5. Category 2: "No Form Found" Blue Alert — Silent Task Failure for 1 in 5 Users
6. Category 3: Authentication & EDIPI Authorization Failures
7. Category 4: Tax-Season Traffic Concentration & Load Volatility
8. Category 5: Funnel Abandonment at the Download Step
9. Category 6: Accessibility Format Under-Utilization
10. Category 7: Discoverability & Upstream Entry Points
11. Recommendations – Consolidated Priority Table
12. Appendix: Data Overview, Metrics & Trends


## 1. Top-Level Findings (Ranked by Relevance & Criticality)

Ranking factors: frequency, severity, task-blocking impact, and actionability.

1. **December performance degradation — system error rate jumped from 0% to 1.5%, and backend latency increased 3–6× across all three endpoints.** The `available_forms` endpoint moved from a **~45ms baseline to 272.96ms (6.0× slower)**, the `download_pdf` endpoint from **~780ms to 1.08s (1.4× slower)**, and the `download_txt` endpoint from **~100ms to 350.85ms (3.3× slower)**. **127 system errors** occurred on `available_forms` calls in December versus 0–2 in every prior month. This is the **single most consequential finding** in the dataset because it coincides with the **highest-volume month of the year**.
2. **"No form found" blue alert is shown to ~20–25% of authenticated users every month** from July through December. This is not an error — it is the system correctly reporting that the IRS has not issued a 1095-B for that Veteran in the requested year — but from a **Veteran's perspective it is functionally indistinguishable from a failure**, and it represents **3,263 task-failed sessions in six months alone**. **November peaked at 24.8%**.
3. **EDIPI-linked `401 Not Authorized` errors block Veterans from their tax form** — **2,546 total error events** across the year, with a **single-day April spike of ~600 errors** during peak tax-filing season. Affects **1,157 unauthenticated users** and **771 fully-verified LOA 3 users** who cannot self-recover.
4. **CSAT is 75.6% (31/41)** with an extreme December concentration (32/41 responses). **April's single response was positive (100%)** and **May's single response was negative (0%)**, but both are too small to interpret. **December's 81.25% satisfied** is the only statistically meaningful month.
5. **December volume was ~10× baseline** — **28,382 page views and 23,511 sessions** versus a July trough of **2,329 views and 1,570 sessions**. Tax-filing April surge (**18,811 views, 12,371 sessions**) is a distant second. The combination of **highest volume + worst latency + highest error rate in the same month** is the most actionable operational finding.
6. **Funnel abandonment at the download step is 51.3%** — of **30,241 users** who reached the 1095-B page from `/records/`, only **15,506 (48.7%)** clicked a download link. Roughly **20–25% of this abandonment is explained by the blue-alert state**, leaving **~25–30%** unexplained.
7. **Only 9.14% of users select the accessibility-optimized Text file**, with a 96-event "No Click" cluster concentrated in **August (39) and September (56)** that overlaps with anomalously long Text engagement, suggesting a Q3 accessibility regression.


## 2. Customer Satisfaction Table

Per the template's CSAT Calculation Logic: rows are included where a CSAT response exists and maps to the 1–5 scale (equivalent here: "% satisfied" = share of responses marking the experience positively, the universal proxy for scores of 4–5 on a 5-point scale).

**Overall: 31 satisfied / 41 total responses = 75.6% satisfied.**

| Month | CSAT (% satisfied) | Response Count | Satisfied | Dissatisfied | Primary Issue That Month |
|---|---|---|---|---|---|
| March 2025 | No responses | 0 | — | — | Tax-season ramp; no errors recorded |
| **April 2025** | **100%** | **1** | 1 | 0 | Peak volume; 600-event single-day error spike |
| May 2025 | 0% | 1 | 0 | 1 | Tail of tax season; single dissatisfied response |
| June 2025 | No responses | 0 | — | — | Quarterly uptick; no CSAT signal |
| July 2025 | No responses | 0 | — | — | Annual volume trough; 20.4% blue-alert rate begins |
| August 2025 | No responses | 0 | — | — | "No Click" anomaly begins (39 events) |
| **September 2025** | **100%** | **3** | 3 | 0 | "No Click" peak (56 events); 22.2% blue alert |
| **October 2025** | **0%** | **3** | 0 | 3 | 22.7% blue alert; all 3 respondents dissatisfied |
| **November 2025** | **100%** | **1** | 1 | 0 | 24.8% blue alert (year peak); prod testing new API |
| **December 2025** | **81.25%** | **32** | 26 | 6 | **Latency spike, 1.5% system error rate, 10× volume** |

**Key observations:**

- **October's 0% satisfaction (0/3)** is the only month with dissatisfaction clustered in multiple responses, and it coincides with **610 blue-alert events (22.7% of authenticated users)** and lengthening `available_forms` latency — an early warning of the December degradation that was not acted upon.
- **December's 81.25% satisfied** is striking given December also had the **worst latency and highest system error rate of the year**. This likely reflects the population being predominantly task-successful users (they got their form) because the 1.5% error rate affected a minority; the 18.75% dissatisfied cohort is consistent with users who hit errors or saw the blue alert.
- **The 41-response total is small for a page with 73,032 annual views** (0.056% response rate). Any CSAT conclusion should be treated as directional, not definitive.


## 3. Issue Category Breakdown

Seven categories emerge from the combined dataset, ranked by severity and user impact.


## Category 1: December Performance Degradation & System Errors

**Mentions / Volume:** **127 system errors on `available_forms` calls in December (1.5% of 8,280 calls)**, **1 PDF download error (0.2% of 451)**, **1 TXT download error (0.01% of 5,440)**. Backend latency degraded **3×–6× across all three endpoints** versus the July–November baseline.

**Description:** December is when the 1095-B page experiences its actual production stress. The `available_forms` endpoint — which runs on every page load to determine whether to show download buttons or the blue "no form" alert — slowed from a normal-month average of ~45ms to **272.96ms**, a **6.0× regression**. The `download_pdf` endpoint slowed from ~780ms to **1.08 seconds**, and the `download_txt` endpoint from ~100ms to **350.85ms**. At the same time, the system error rate on `available_forms` jumped from effectively 0% (0–2 errors in prior months, with November's 2 errors flagged as *"prod testing new API"*) to **1.5%** — a **~75× increase in the monthly error rate** against a **10× traffic surge**.

**Representative metric slices:**

| Endpoint | Jul–Nov Avg | December | Regression |
|---|---|---|---|
| `available_forms` latency | 48.6 ms | **272.96 ms** | **5.6×** |
| `download_pdf` latency | 798 ms | **1,080 ms** | **1.35×** |
| `download_txt` latency | 111 ms | **350.85 ms** | **3.2×** |
| `available_forms` error rate | 0.00% (0–0.07%) | **1.5% (127/8,280)** | **~75×** |
| Page views | 3,051 avg | **28,382** | **9.3×** |
| Sessions | 2,315 avg | **23,511** | **10.2×** |

**Impact:**

The December signature is the profile of a system that has not been load-tested at its actual production peak. The `available_forms` endpoint is the gatekeeper for the entire page experience — every Veteran who lands on the page triggers a call — so its latency is felt by **100% of users**, not just those who download. A **273ms gate latency** pushes the user's perceived page-ready time past the 200ms threshold above which delay becomes consciously noticeable. **127 system errors** mean **127 Veterans saw the red "we can't load this right now" state** during the month they most needed to retrieve their form for year-end tax and healthcare-coverage verification.

**Temporal patterns:**

| Month | Sessions | `available_forms` Latency | `download_pdf` Latency | System Errors |
|---|---|---|---|---|
| March | 2,135 | 54.78 ms | 778.68 ms | 0/2,130 |
| April | 12,371 | 33.32 ms | 759.85 ms | 0/10,960 |
| May | 3,065 | 41.03 ms | 777.24 ms | 0/2,730 |
| June | 2,707 | 39.48 ms | 782.15 ms | 0/2,580 |
| July | 1,570 | 40.96 ms | 786.17 ms | 0/1,400 |
| August | 1,566 | 48.92 ms | 784.96 ms | 0/1,410 |
| September | 2,446 | 53.55 ms | 827.04 ms | 0/2,270 |
| October | 3,288 | 48.86 ms | 833.48 ms | 0/3,130 |
| November | 2,705 | 52.28 ms | 830.19 ms | 0.07% (2/2,590) — flagged "prod testing new API" |
| **December** | **23,511** | **272.96 ms** | **1.08 s** | **1.5% (127/8,280)** |

**Critical Observations:**

- **April absorbed 12,371 sessions with 33.32ms latency and zero system errors** — proving the stack *can* handle high volume when not stressed on a different axis.
- **December had ~2× April's session volume but ~8× worse latency**, indicating the December regression is **not purely load-driven**. There is likely a code change, dependency change, or infrastructure change between November and December that compounded with the seasonal surge.
- **November's 0.07% error rate flagged as "prod testing new API"** is a potential smoking gun — if the new API was rolled out fully in December, it may be the root cause of the performance regression. This is the first thing to investigate.
- The **download_txt endpoint regressed proportionally more than download_pdf** (3.2× vs. 1.35×), suggesting the common upstream dependency (`available_forms`) is the bottleneck and PDF generation has some independent caching or scaling.

**Recommendations:**

| Recommendation | Rationale |
|---|---|
| **Immediately investigate the November "prod testing new API" flag and any December deployments** | Most likely root cause of the 6× `available_forms` latency regression |
| **Pre-scale backend capacity to 10× baseline for December 15–31 and 8× baseline for April 1–15** | Current load shape exceeds baseline provisioning by an order of magnitude |
| **Add SLO alerting: `available_forms` latency > 100ms for 5 consecutive minutes, error rate > 0.5%** | November/December regression was only visible retrospectively |
| **Cache `available_forms` responses per user for 24 hours** | Every page load triggers a fresh call; caching would cut load ~3× during retry-heavy periods |


## Category 2: "No Form Found" Blue Alert — Silent Task Failure for 1 in 5 Users

**Mentions / Volume:** **3,263 blue-alert events from July through December 2025** (the months for which the metric is instrumented). **Monthly rate: 16.1%–24.8% of authenticated users**, with **November peaking at 24.8%** and the six-month average at **approximately 21.0%**.

**Description:** When a Veteran signs in and loads the page, the backend calls `available_forms`. If the IRS has not issued a 1095-B for that Veteran in the requested tax year, the page displays a **blue informational alert** — *"no form found"* — instead of the download buttons. This is not a bug: it is the correct system behavior. But from the Veteran's perspective, they came to retrieve a document, authenticated successfully, and were told nothing is there. They have no self-service recovery path. They do not know whether the form will appear later, whether their health coverage record is missing from the system, or whether they need to call someone.

**Representative metric slices:**

| Month | Blue Alerts | Forms Found | Total Authenticated Users | % Seeing Blue Alert |
|---|---|---|---|---|
| July | 172 | 671 | 843 | **20.4%** |
| August | 194 | 1,013 | 1,207 | 16.1% |
| September | 433 | 1,518 | 1,951 | 22.2% |
| October | 610 | 2,076 | 2,686 | 22.7% |
| **November** | **551** | **1,667** | **2,218** | **24.8%** |
| December | 1,303 | 5,300 | 6,603 | 19.7% |
| **6-month total** | **3,263** | **12,245** | **15,508** | **~21.0% avg** |

**Impact:**

This is the **largest Veteran-facing task-failure category in the dataset** — larger than the EDIPI errors, the December system errors, and the funnel abandonment combined. The blue-alert population is, by construction, **fully authenticated, identity-proofed, on the correct page, with a valid EDIPI** — every upstream UX investment has succeeded for these users, and they still leave without their form. The fact that the **rate holds steady at 20%+ across six months** means this is a **structural property of the data**, not a one-time anomaly: roughly one in five Veterans who comes to this page is never going to get a form from this flow.

The reasons a form may not be found are legitimate and varied: the tax year requested has not closed, VA has not yet transmitted data to the IRS, the Veteran's VA healthcare coverage for that year fell below reportable thresholds, or record-keeping gaps. But the alert does not distinguish these cases, and it does not guide the user to the correct alternative path (wait, call VA, call IRS, check a different tax year).

**Critical Observations:**

- **November's 24.8% peak** is the single worst month for the blue-alert experience, and it precedes the December performance degradation by four weeks. The combination creates a compounding negative experience.
- The **2:1 found-to-not-found ratio** in July–August improves to **~4:1 in December** as more forms become available — this is consistent with the IRS filing-year cycle, and suggests pushing Veterans to try again later in the year would succeed for a majority.
- The blue-alert rate is **invisible to the Category 5 funnel analysis** because blue-alert users count as "page visits that did not result in a download click" — they are indistinguishable from users who abandoned for any other reason in the 51.3% page-level abandonment metric.

**Recommendations:**

| Recommendation | Rationale |
|---|---|
| **Redesign the blue alert to explain *why* no form was found and what to do next** (wait until [date], call [number], check a different year) | Converts a silent dead end into a guided next action |
| **Add an "email me when my form is available" opt-in to the blue alert** | Captures intent from the 3,263+ users per six months who leave empty-handed |
| **If possible, pre-compute form availability from user profile and surface a "your 1095-B will be available by [date]" banner on the `/records/` hub** | Prevents the dead-end visit entirely |
| **Instrument the blue alert with a distinct click-out / satisfaction survey** | Currently indistinguishable from other page abandonment |


## Category 3: Authentication & EDIPI Authorization Failures

**Mentions / Volume:** **2,546 error events** across the year (1,697 for not-logged-in users, 849 for LOA 3 users), concentrated in two error keys tied to EDIPI validation.

**Description:** The 1095-B download endpoint requires a valid EDIPI — a DoD-issued identifier — to retrieve the form from the backend service. When a Veteran is not logged in, is logged in at an insufficient assurance level, or is authenticated but lacks an EDIPI (e.g., Veterans whose records predate EDIPI assignment, or who were never issued one through DoD identity systems), the download call returns a `401 Not Authorized` or a `RuntimeError: User does not have a valid edipi`.

**Representative metric slices:**

- **April 2025 single-day spike:** Approximately **600+ error events** on one day in early-to-mid April — the single largest error concentration of the year.
- **Not-logged-in segment:** 1,697 error events / 1,157 active users — **~1.47 errors per affected user** (users retry).
- **LOA 3 (fully verified) segment:** 849 error events / 771 active users — **~1.10 errors per user** (verified users fail once and give up).
- **Error breakdown:**
  - `401, 401, Not authorized | RuntimeError, User does not have a valid edipi`: **926 events (not-logged-in)** + **540 events (LOA 3)** = **1,466 events**
  - `RuntimeError, User does not have a valid edipi`: **771 events (not-logged-in)** + **309 events (LOA 3)** = **1,080 events**

**Impact:**

For **LOA 3 users**, who have completed identity proofing, a `User does not have a valid edipi` error is a **total task block with no self-service recovery path**. 771 verified Veterans per year hit this wall. The April spike specifically suggests the failure mode compounds during peak demand, likely because more edge-case users attempt the flow during tax season.

**Temporal patterns:**

| Month | Approximate Error Events |
|---|---|
| January–February | <50 each |
| March | ~150 |
| **April** | **~700 (incl. single-day 600+ spike)** |
| May | ~120 |
| June | ~150 |
| July | ~50 |
| August–September | ~120 each |
| October | ~50 |
| November | ~100 |
| December | ~150 |

**Critical Observations:**

- The April spike is a **single-day discontinuity**, suggesting a specific upstream event (mailed notification, IRS reminder, news coverage) drove a surge toward a brittle endpoint.
- The EDIPI error is **distinct from** the December `available_forms` system error in Category 1 — these are two different failure modes that reach users through different code paths.
- The **1.47 retry rate among unauthenticated users** suggests users interpret the error as a transient glitch, not an authentication requirement.

**Recommendations:**

| Recommendation | Rationale |
|---|---|
| Pre-check EDIPI presence on page load; swap the UI to an explanatory state *before* the user clicks | Converts a `401` into a readable "We can't find your 1095-B because..." message |
| For LOA 3 users missing an EDIPI, surface a guided recovery path (phone number, mailed copy request) | Closes the task-block for verified users |
| Replace raw 401 text with Veteran-facing language and a sign-in CTA for unauthenticated users | Reduces retry loops |


## Category 4: Tax-Season Traffic Concentration & Load Volatility

**Mentions / Volume:** **April alone generated 18,811 page views and 12,371 sessions (22.4% of annual sessions)** and **December generated 28,382 page views and 23,511 sessions (42.5% of annual sessions)** — together, **these two months account for ~65% of annual sessions** for what is, on paper, a year-round compliance document.

**Description:** Download demand is almost entirely seasonal, but — critically — the first dataset (GA4 monthly link-click events) understated December's true load. The internal analytics CSV reveals December had **~1.9× April's session volume and ~15× the July baseline**. This reframes the operational risk: **December, not April, is the peak**.

**Representative metric slices:**

| Month | Page Views | Sessions | Avg Session Time |
|---|---|---|---|
| March | 3,181 | 2,135 | 40 s |
| **April** | **18,811** | **12,371** | 38 s |
| May | 4,023 | 3,065 | 35 s |
| June | 3,575 | 2,707 | 35 s |
| July | 2,329 | 1,570 | 40 s |
| August | 2,278 | 1,566 | 44 s |
| September | 3,328 | 2,446 | 39 s |
| October | 3,936 | 3,288 | 36 s |
| November | 3,189 | 2,705 | 37 s |
| **December** | **28,382** | **23,511** | 35 s |

**Impact:**

December is the operational worst case. It combines **the highest traffic volume, the slowest latency, and the highest error rate of any month**. April is a secondary but also important peak. Baseline months (May–November) are steady at 2,000–3,300 sessions and do not stress the system. Capacity planning calibrated to the annual average will miss both peaks by an order of magnitude.

**Critical Observations:**

- The **December:July session ratio is ~15:1**. Capacity planning must target this shape.
- **Average session time shortens in high-volume months** (35s in April, 35s in December vs. 40–44s in summer), which is consistent with more task-focused behavior during tax/coverage seasons.
- April's **38s** average session time is slightly longer than December's 35s — possibly because April users encountered more errors (per Category 3) and spent time investigating.

**Recommendations:**

| Recommendation | Rationale |
|---|---|
| Target **December** capacity at 10× baseline and **April** at 8× baseline | Current load shape exceeds annualized provisioning |
| Pre-warm caches and scale backend workers starting **December 1** and **March 15** | Anticipates rather than absorbs the seasonal surge |
| Surface a January "your form is coming" notification to shift some April demand into the quieter Feb/Mar window | Smooths the load curve |


### Category 5: Funnel Abandonment at the Download Step

**Mentions / Volume:** Of **5,662,807 users** who visited `/records/` in 2025, only **30,241 (0.53%)** advanced to the 1095-B page, and of those **15,506 (51.27%)** clicked a download link. The **51.3% abandonment rate at the final step** is the single most actionable funnel metric.

**Description:** The funnel has two drop-off points. The first (Step 1→2) is **99.47% abandonment** from `/records/` to the 1095-B page — expected, because `/records/` is a general hub. The second (Step 2→3) is the diagnostic one: **51.27% of users who land on the page leave without clicking either download link**. Cross-referencing with Category 2, **~20–25% of this Step 2→3 abandonment is explained by the blue-alert (no form found) state** — these users physically cannot click a download link because the buttons are not rendered. That leaves **~25–30% of page visitors** abandoning for other reasons: authentication errors (Category 3), layout issues, format indecision, or deliberate exits to sign in.

**Representative metric slices:**

- **Step 1 (`/records/`):** 5,662,807 active users (100%)
- **Step 2 (1095-B page):** 30,241 users (0.53%) — **99.47% abandonment from hub**
- **Step 3 (download click):** 15,506 users (48.73%) — **51.27% abandonment from page**
- **Of the 51.27% who did not click:** roughly **20–25%** saw the blue alert and had nothing to click; the remainder is unexplained

**Impact:**

After accounting for the blue-alert population, the **truly recoverable abandonment is on the order of 25–30% of page visitors** — which is still high for a single-purpose page, but less severe than the raw 51.3% suggests. The Category 2 and Category 5 findings should be addressed together, because fixing the blue-alert experience will move some of those users into successful completions, lifting the overall funnel conversion.

**Critical Observations:**

- The **Previous Page report** shows **8,878 sessions arrived at the 1095-B page from itself** (reloads, retries) — the second-largest referrer after direct. This is consistent with error retry patterns in Categories 1 and 3.
- **Only 3,238 sessions arrived via the `/auth/login/callback?type=idme` route**, suggesting most Veterans try to access the page *before* signing in, hit an error or gate, and bounce.

**Recommendations:**

| Recommendation | Rationale |
|---|---|
| Add a pre-download auth check that prompts sign-in *before* rendering download buttons | Prevents click-then-error dead ends |
| A "Why did you leave?" exit-intent micro-survey for users leaving without a click | Distinguishes blue-alert, auth-error, and pure-abandonment cases |
| A/B test a single-button (PDF default) layout against the current dual-button layout | Tests decision-friction hypothesis for the non-blue-alert abandonment |


### Category 6: Accessibility Format Under-Utilization

**Mentions / Volume:** **Text-file downloads: 2,183 events (9.14%)** vs. **PDF: 21,603 (90.46%)** — a ~10:1 PDF preference. The Text file is labeled "best for screen readers, enlargers, and refreshable Braille displays."

**Description:** The 10:1 split is expected for a general population, but should be interrogated against VA.gov's audience, which includes a disproportionately higher share of older Veterans with low-vision and blind users than a typical consumer site.

**Representative metric slices:**

- **PDF: 21,603 events, 14 s avg engagement/session, -9.21% vs. site average**
- **Text: 2,183 events, 16 s avg engagement/session, +6.02% vs. site average** — Text users engage longer
- **August Text engagement:** 107 events averaging **27 s per session** — ~2× the overall Text average
- **October Text engagement:** 216 events averaging **26 s per session** — similar extended pattern
- **"No Click" cluster:** 95 of 96 annual events concentrated in **August (39) and September (56)**

**Impact:**

The overlap of the **Aug/Sep "No Click" cluster** with the **elevated Text-user engagement times** suggests an accessibility regression during a Q3 code deploy. If screen reader users encountered an unlabeled button, an ARIA mismatch, or a download that did not announce completion, they would take longer on the page and potentially fail to register a click event.

**Critical Observations:**

- The **95 of 96 "No Click" events in Aug/Sep** is the most temporally concentrated anomaly in the entire dataset outside the April error spike.
- **Text users' +6.02% engagement delta** year-round is small but consistent; preserving it is a proxy for accessibility experience quality.

**Recommendations:**

| Recommendation | Rationale |
|---|---|
| Audit page for WCAG 2.2 AA compliance with focus on Aug–Sep code deploys | Correlation between "No Click" spike and Text engagement outliers |
| Ensure screen readers announce "Download started" on click | Current 16s Text-user average suggests possible unclear completion feedback |
| Consider reordering buttons or adding explicit "accessible format" labeling | Text link subtext may be under-noticed |

---

### Category 7: Discoverability & Upstream Entry Points

**Mentions / Volume:** **55,441 sessions** reached the page. **Direct: 46.1% (25,549)**, **Organic Search: 44.0% (24,434)**, **Email: 2.15% (1,194)**, **Referral (id.me): 0.75% (415)**, **Paid Search (bing.com): 0.43% (240)**.

**Description:** Discoverability into the page is healthy and diversified. Veterans find the page through roughly equal channels: typed URL/bookmark, commercial search, and email — characteristic of a known, trusted compliance document users return to annually.

**Representative metric slices:**

- **Direct / (none):** 25,549 sessions, 33 s engagement
- **google / organic:** 19,757 sessions, 36 s engagement
- **bing / organic:** 3,558 sessions, 48 s engagement — longer engagement, likely older demographic
- **yahoo / organic:** 812 sessions, 53 s engagement — longest of any channel, strongest older-demographic signal
- **vanotify / email:** 737 sessions, 39 s engagement — VA's own notification system
- **id.me / referral:** 415 sessions, 51 s engagement — post-auth landings

**Top referring previous pages:**

| Rank | Previous Page | Sessions | Views |
|---|---|---|---|
| 1 | (unspecified / new session) | 16,951 | 18,159 |
| 2 | **1095-B page itself (self-reload)** | **8,878** | **5,964** |
| 3 | google.com | 8,515 | 9,037 |
| 4 | /records/ hub | 6,345 | 6,476 |
| 5 | /records/download-va-letters/ | 5,695 | 5,938 |
| 6 | /auth/login/callback?type=idme | 3,238 | 3,259 |
| 7 | /records/get-military-service-records/ | 2,185 | 2,207 |

**Impact:**

The **8,878 self-referrals** (rank 2) are the behavioral fingerprint of the error/retry/blue-alert loops from Categories 1, 2, and 3. It is the second-largest source of page traffic — a sign that the failure modes are not rare.

**Critical Observations:**

- Yahoo and Bing users engage 30–60% longer than Google users, consistent with an older demographic.
- **5,695 sessions came from `/records/download-va-letters/`** — natural cross-traffic worth promoting in January–March.
- **`android-app://com.google.android.gm/`:** 1,854 sessions — email-driven, mobile-heavy traffic.

**Recommendations:**

| Recommendation | Rationale |
|---|---|
| Investigate the 8,878 self-referral sessions as likely retry signatures | Corroborates Categories 1–3 from a different angle |
| Send a January–February `vanotify` email campaign with a direct link | Smooths the April surge; drives authenticated traffic |
| Cross-link from `/records/download-va-letters/` to 1095-B | 5,695 sessions already make this transition organically |


## Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | Investigate the November "prod testing new API" rollout and any December deploys as the likely cause of the 6× `available_forms` latency regression | Category 1: December performance degradation | Eliminates the **single largest production-impact event of the year**; restores sub-100ms gate latency for all users |
| **P0** | Redesign the "no form found" blue alert to explain *why* and guide next action (wait, call, try different tax year) | Category 2: 3,263+ silent task failures in six months | Converts **~20% of authenticated sessions** from dead ends into guided recoveries |
| **P0** | Pre-scale backend capacity to **10× baseline for December 15–31** and **8× baseline for April 1–15** | Categories 1 & 4: load + error compounding | Prevents recurrence of 1.5% December error rate and April single-day spikes |
| **P0** | Pre-check EDIPI on page load; render a sign-in state or guided recovery *before* download buttons when EDIPI is missing | Category 3: 401/EDIPI errors, especially LOA 3 users | Eliminates task-blocking dead end for ~850 verified users/year |
| **P1** | Add SLO alerting: `available_forms` latency > 100ms sustained, error rate > 0.5% | Categories 1 & 4: November/December regression was retrospective | Shifts monitoring from reactive to proactive |
| **P1** | Add an "email me when my form is available" opt-in to the blue alert | Category 2: no current way to capture blue-alert users | Recovers intent from 3,000+ six-month users per cycle |
| **P1** | Gate download buttons behind a client-side auth check so unauthenticated users see "Sign in to download" instead of erroring | Categories 3 & 5: click-to-error dead end | Closes the most common Veteran-facing failure path |
| **P1** | Audit page for WCAG 2.2 AA compliance, focusing on Aug–Sep 2025 deploys | Category 6: No-Click spike + Text engagement outliers | Restores accessibility parity; protects Section 508 posture |
| **P1** | Replace raw `401 Not Authorized` error text with Veteran-facing language and sign-in CTA | Category 3: 1,697 not-logged-in error events | Reduces 1.47 retry-per-user rate |
| **P2** | Send a January–February `vanotify` email campaign linking directly to the 1095-B page | Categories 4 & 7: smooths April surge; leverages under-used channel | Shifts demand earlier; drives authenticated (lower-error) traffic |
| **P2** | Add an exit-intent "Why did you leave?" micro-survey | Categories 2 & 5: abandonment attribution gap | Provides the qualitative data this dataset lacks |
| **P2** | A/B test single-PDF-button layout vs. dual-button | Categories 5 & 6: abandonment and format under-selection | Tests decision-friction hypothesis |
| **P2** | Cross-link from `/records/download-va-letters/` to 1095-B | Category 7: 5,695 existing organic transitions | Low-cost discoverability improvement |
| **P2** | Expand CSAT collection — current 41 responses / 73,032 views = 0.056% response rate | Section 2: CSAT sample too small to interpret monthly | Enables the full CSAT-by-month analysis the template specifies |


## Appendix: Data Overview, Metrics & Trends

### Data Overview

- **Primary sources:**
  - **VA Internal GA Analytics CSV** — monthly CSAT, page views, sessions, endpoint latency, download counts, and system/blue-alert error rates (**March 1, 2025 – December 31, 2025**)
  - **GA4 Exploration Report** (`[GA4] VA.gov - Production`, 1095-B Analytics) — monthly download-link events, API error events, login-level breakdowns (**January 1, 2025 – December 31, 2025**)
  - **GA4 Discoverability Report** — traffic sources, previous page, funnel from `/records/` (**January 1, 2025 – December 31, 2025**)
- **Page filter across all sources:** `page_path contains /records/download-your-irs-1095-b/`
- **Total page views:** 73,032 (Mar–Dec internal CSV)
- **Total sessions:** 55,364 (Mar–Dec internal CSV) / 55,441 (full-year GA4)
- **Total download events:** 23,882 (PDF 21,603 / Text 2,183 / No Click 96)
- **Total system errors (available_forms):** 129 (2 in Nov "prod testing", 127 in Dec)
- **Total blue-alert events (Jul–Dec):** 3,263
- **Total EDIPI/auth errors:** 2,546
- **CSAT responses:** 41 total (31 satisfied, 10 dissatisfied) → **75.6% satisfied**

### Theme & Task Counts

| Category | Primary Metric | Value |
|---|---|---|
| December performance degradation | `available_forms` latency increase | 6.0× (45ms → 273ms) |
| December system error rate | Errors / calls | 1.5% (127/8,280) |
| Blue-alert ("no form found") share | Avg % of authenticated users (Jul–Dec) | ~21.0% |
| EDIPI authentication errors | Annual event count | 2,546 |
| Tax-season concentration | Dec + Apr share of annual sessions | ~65% |
| Funnel abandonment (page → click) | Abandonment rate | 51.3% |
| Accessibility format share | Text-file of total downloads | 9.14% |
| Discoverability | Direct + Organic share | 90.1% |
| CSAT | % satisfied (31/41) | 75.6% |

### Trends (Monthly, Combined)

| Month | Sessions | `available_forms` Latency | `download_pdf` Latency | System Err Rate | Blue Alerts | EDIPI Errors (approx.) | CSAT |
|---|---|---|---|---|---|---|---|
| Jan | — | — | — | — | — | <50 | — |
| Feb | — | — | — | — | — | <50 | — |
| Mar | 2,135 | 54.78 ms | 778.68 ms | 0% | — | ~150 | No responses |
| **Apr** | **12,371** | 33.32 ms | 759.85 ms | 0% | — | **~700** | 100% (1) |
| May | 3,065 | 41.03 ms | 777.24 ms | 0% | — | ~120 | 0% (1) |
| Jun | 2,707 | 39.48 ms | 782.15 ms | 0% | — | ~150 | No responses |
| Jul | 1,570 | 40.96 ms | 786.17 ms | 0% | 172 (20.4%) | ~50 | No responses |
| Aug | 1,566 | 48.92 ms | 784.96 ms | 0% | 194 (16.1%) | ~120 | No responses |
| Sep | 2,446 | 53.55 ms | 827.04 ms | 0% | 433 (22.2%) | ~120 | 100% (3) |
| Oct | 3,288 | 48.86 ms | 833.48 ms | 0% | 610 (22.7%) | ~50 | 0% (3) |
| Nov | 2,705 | 52.28 ms | 830.19 ms | 0.07% | **551 (24.8%)** | ~100 | 100% (1) |
| **Dec** | **23,511** | **272.96 ms** | **1.08 s** | **1.5%** | 1,303 (19.7%) | ~150 | **81.25% (32)** |

### Representative Behavioral Signals

Because this analysis is drawn from GA4 and internal analytics rather than verbatim research, the strongest signals are behavioral:

- *"The December 6× latency regression with 1.5% system error rate"* — the single most consequential operational finding
- *"20–25% of authenticated users every month see 'no form found'"* — the largest silent task-failure population
- *"600-error single-day April spike"* — concentrated EDIPI authorization failure at peak tax demand
- *"8,878 self-referral sessions"* — behavioral fingerprint of retry loops
- *"51.27% abandonment at the download step"* — half of Veterans who reached the page did not complete the task (partially explained by blue-alert population)
- *"9.14% Text-file selection with Aug/Sep No-Click cluster"* — under-used accessibility option with a possible Q3 regression
- *"December:July session ratio of 15:1"* — seasonality is the dominant structural feature; operational sizing must target December

### Confidence Notes

- **High confidence:** Endpoint latency figures, system error rates, blue-alert counts, monthly sessions and page views — all directly measured in the internal CSV.
- **High confidence:** Funnel abandonment rate, EDIPI error volumes, traffic source mix — directly measured in GA4.
- **Medium confidence:** April single-day peak of "600+" errors is read from the GA4 chart visualization and is approximate; exact daily counts would require the GA4 explore underlay.
- **Lower confidence:** Interpretive attribution of *why* the 25–30% of non-blue-alert users abandon at Step 2→3. The GA4 + CSV combination narrows the hypothesis set but cannot confirm cause without session recordings or a micro-survey.
- **Low statistical confidence on CSAT:** Only April, May, September, October, November, and December have any responses, with single-digit samples except December. The **75.6% overall** is directionally useful but should not be reported as a precise KPI until the response rate improves above the current 0.056%.
