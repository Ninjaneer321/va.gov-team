# **Performance Dashboard — 2025 Insights (GA4)**

## **TL;DR (what matters)**

* **Baseline CSAT (measured):** Not available (GA4-only dataset; no survey responses collected)
* **CSAT/feedback timeframe:** N/A
* **Top pain points (task-blocking, highest impact):**

1. **Dashboard → Authentication friction** – 19% of dashboard sessions immediately redirect to /sign-in or auth flows; unclear pre-auth value proposition limits reach for unauthenticated users.
2. **Shallow content exploration** – Only ~1% of dashboard visitors click outbound links (~439 clicks across 60,468 views); average session duration ~40–50s indicates scanning behavior, not insight-seeking.
3. **Engagement-rate volatility + inconsistent onboarding** – Monthly engagement varies 86–93% with new-user surges reaching 363/month; no structured onboarding for high-traffic periods.

* **What analytics adds (GA4):**
  * Confirms authentication is the dominant next action, not a secondary flow.
  * LOA3 (authenticated) users spend 12 seconds longer (~1:03 vs ~0:51) per session, indicating post-auth content has higher perceived value.
  * Device/platform patterns: Not available in current dataset.
  * **Measurement gaps:** GA4 cannot determine *why* users abandon exploration—only *that* they do. Field-level event tracking, scroll depth, and exit surveys would pinpoint specific friction points.

---

## **1) Data Source Inventory (timeframe + frequency for each source)**

### **A) Google Analytics 4 (GA4)**

* **Timeframe:** Jan 1–Dec 31, 2025 (full year; daily rollup frequency)
* **Scoped volume:** 60,468 page views | 36,885 sessions | 2,655 new users
* **CSAT sample size:** N/A (no survey responses tied to GA4 sessions)
* **CSAT baseline:** Not measured
* **Engagement metric definitions (critical):**
  * **Engagement rate:** 87.99% (percentage of sessions with >10s duration or >1 meaningful event)
  * **Average session duration:** 43 seconds (full year); varies 40–50s by month
  * **Views vs. sessions:** 60,468 views = page-level hits; 36,885 sessions = user-level visit clusters
  * **Outbound links:** 439 events = clicks on deep-dive/resource links (1% conversion from view volume)
* **Behavioral theme counts (Step +1 destinations from /performance-dashboard):**
  * **/sign-in:** 7,097 (~19.3% of sessions)
  * **/my-va:** 1,466 (~4.0% of sessions)
  * **/auth/login/callback:** 849 (~2.3% of sessions)
  * **/mhv-portal-web/home:** 580–771 (~1.6–2.1% of sessions)
  * **/find-locations:** 391–694 (~1.1–1.9% of sessions)
  * **Outbound link clicks (total):** 439 (~1.2% of sessions)
* **Segment breakdown (LOA / Authentication Status):**
  * **LOA3 (authenticated):** ~1:03 average engagement, 99% engagement rate
  * **LOA1 (unauthenticated):** ~0:51 average engagement, 98% engagement rate
* **Monthly fluctuations:**
  * **Engagement rate range:** 86–93% (±7 percentage points month-to-month)
  * **New users range:** 170–363 per month (~2× variance)
  * **Session duration range:** 40–50s (±10s month-to-month)

### **B) Medallia / CSAT data**

* **Timeframe:** Not provided; assumed N/A for this dashboard
* **Scoped volume:** 0 records in scope
* **CSAT sample size:** n=0
* **CSAT baseline:** Not measured

### **C) Call Center / Support Ticket logs**

* **Timeframe:** Not provided; assumed N/A for this dashboard
* **Volume:** 0 cases in scope

### **D) Qualitative sources (user research, usability testing, social media)**

* **Timeframe:** Not provided; assumed N/A for this dashboard
* **Volume:** 0 records in scope

---

## **2) Consolidated "what's going wrong"**

The VA.gov Performance Dashboard exhibits three interconnected failure modes:

**Authentication leakage (19% of traffic).** Nearly 1 in 5 dashboard sessions immediately transition to authentication flows (/sign-in, /my-va, /auth/login/callback). This suggests the dashboard functions as a gateway to account management rather than an informational hub. The high concentration (7,097 /sign-in clicks alone) indicates either (a) users arrive without valid credentials and the dashboard is their entry point, (b) the pre-authentication value proposition is so weak that users immediately seek to unlock personalized content, or (c) the dashboard UX explicitly directs users to sign in without presenting public value first. The 12-second dwell-time advantage for LOA3 users (1:03 vs 0:51) provides soft evidence that post-auth content is materially more useful—but only *after* login friction is overcome.

**Shallow exploration and skim-level consumption (1% outbound engagement).** Despite an 88% engagement rate (indicating most users stay >10 seconds), only 439 clicks lead to deeper content across the entire year—a 1% conversion from 60,468 views. This paradox reveals the dashboard is *consumed* (users don't bounce immediately), but not *explored* (users don't drill into underlying resources, documentation, or related metrics). Average session duration of 40–50 seconds suggests users scan headlines and move on, typical of dashboard interfaces that lack clear information hierarchy, actionable next steps, or visible "learn more" affordances.

**Measurement-driven but undiagnosed engagement volatility.** Monthly engagement rates fluctuate 7 percentage points (86–93%), and new-user traffic varies 2× month-to-month (170–363 users), yet there is no causal explanation in the available data. This volatility complicates trend detection and suggests either seasonal effects, upstream campaign/communication changes, or content updates that are unmeasured. The lack of field-level event tracking, scroll-depth instrumentation, or exit-point tagging prevents root-cause analysis of drop-offs.

**Across all three, the core issue is information asymmetry:** GA4 tells us *where* sessions exit and *how long* they dwell, but not *why* users make those choices. Without qualitative feedback, field-level analytics instrumentation, or support ticket correlation, the dashboard team is blind to the actual cognitive barriers—whether users don't understand the content, can't find relevant sections, perceive authentication as a hard requirement, or simply don't know the dashboard exists.

---

## **3) Pain Points (with specific fix recommendations for each)**

### **Priority #1: Dashboard → Authentication Friction (Blocks task completion for unauthenticated users; gates access to self-service insights)**

**Impact tags:** Task-blocking, access/authentication, value gating

**Evidence (frequency + timeframe):**

* **GA4 (Jan–Dec 2025):** /sign-in accounts for 7,097 clicks (19.3% of 36,885 sessions); /auth/login/callback 849 clicks (2.3% of sessions); total auth-related traffic ≈9,046 clicks from dashboard (≈24.5% of sessions).
* **Behavioral signal:** LOA3 users stay 12 seconds longer per session (~1:03 vs ~0:51), indicating post-auth content delivers measurably higher perceived value—but only *after* login friction is cleared.
* **Related finding:** Step +2 and beyond transitions are minimal for unauthenticated users, suggesting they abandon the dashboard rather than sign in.

**How to fix it (specific):**

* **Separation of pre-auth and post-auth value propositions**
  1. Create a **public-facing summary section** above the fold that displays non-sensitive, system-level KPIs (e.g., top services by volume, average load times, uptime percentage) *without* requiring authentication.
  2. Add **dual CTAs** (side-by-side):  
     — "Explore Public Performance Data" (stays on dashboard, scrolls to public metrics)  
     — "Sign In for Personalized Insights" (gateway to LOA3 content)
  3. Place **public KPIs and charts at the top** of the page (before the fold); gate deeper analytics and personalized views below.

* **Transparency for gated content**
  1. For tiles/charts that require authentication, add a **"lock" icon with tooltip** explaining what's inside: *"Sign in to see your personalized service activity, transaction history, and performance trends for services you use."*
  2. Reduce perceived friction by showing a **small preview snippet** of what authenticated users see (e.g., a sample chart or metric).

* **Optimize the sign-in path** (if users must authenticate)
  1. Ensure the **/sign-in button is near public content** (not the only CTA); users who arrive for public data shouldn't feel "wrong" for not signing in immediately.
  2. Add **"Continue as guest" or "Explore public data first"** link above the authentication form.

**Representative quotes:**

* *[No direct user quotes available; GA4 provides behavioral signals only.]*
* **Proxy insight from behavior:** 19.3% of sessions immediately transition to /sign-in (suggesting either credential requirement or weak pre-auth value).

**Measurement gap addressed:** Adding exit-survey micro-interactions ("Why are you leaving?" at sign-in click) or comparing bounce rates of users who see pre-auth vs. post-auth layouts would confirm whether friction is access-control or value-proposition driven.

---

### **Priority #2: Shallow Content Exploration & Skim-Level Consumption (Reduces insight depth; lowers actionability)**

**Impact tags:** Usability, information architecture, content hierarchy

**Evidence (frequency + timeframe):**

* **GA4 (Jan–Dec 2025):** 439 outbound link clicks across 60,468 page views = 0.73% click-through rate (CTR); average session duration 40–50 seconds (skim-level dwell).
* **Engagement paradox:** 87.99% engagement rate (users stay >10s) but <1% drill-down rate, indicating dashboard is *consumed passively* rather than *explored actively*.
* **Segment note:** LOA3 users stay 12 seconds longer but still exhibit low outbound engagement, suggesting even authenticated users find limited reason to drill deeper.

**How to fix it (specific):**

* **Elevate content hierarchy and surface "learn more" affordances**
  1. **Redesign card layout** to include **inline "Learn more" or "View details" links** directly below each KPI or chart (not buried in footer or sidebar).
  2. **Increase visual contrast** for outbound links (use color, icons, or hover states to signal interactivity).
  3. **A/B test card density:** Test 3-column vs. 2-column layouts with larger cards and more breathing room; hypothesis is that dense layouts feel overwhelming and reduce exploration.

* **Add sticky sub-navigation or "Related resources" sidebar**
  1. Create a **persistent "Resources" or "Deep Dive" sidebar** visible during scroll, with links to:
     — Detailed methodology for each metric
     — Historical trends and downloadable reports
     — Related services and cross-linked dashboards
  2. Populate it with **contextual links** based on which chart the user is viewing (e.g., "Learn more about uptime metrics" when hovering over availability chart).

* **Introduce interactive patterns to encourage exploration**
  1. Add **"Details" toggle or expandable sections** within cards (e.g., "Click to see monthly breakdown" or "View regional distribution") without leaving the page.
  2. **Instrument drill-down events** (see Section 4) to measure which insights users actually want to explore.

**Representative quotes:**

* *[No direct user quotes available; GA4 provides behavioral signals only.]*
* **Proxy insight from behavior:** 439 clicks across 60,468 views suggests outbound links are either invisible, irrelevant, or not prominently positioned.

**Measurement gap addressed:** Tracking scroll depth, time-to-click, and which specific links are clicked (vs. ignored) would reveal whether the problem is visibility, relevance, or content quality.

---

### **Priority #3: Monthly Engagement Volatility & Lack of New-User Onboarding (Inconsistent experience; missed activation opportunities)**

**Impact tags:** Onboarding, consistency, user activation

**Evidence (frequency + timeframe):**

* **GA4 (Jan–Dec 2025):** Engagement rate fluctuates 86–93% (±7 percentage points); new users range 170–363 per month (2× variance).
* **Behavioral signal:** High new-user surges (up to 363/month) present onboarding opportunities, but no structured "What's new?" or welcome flow is evident in current event tracking.
* **Consistency impact:** Volatility complicates trend analysis and may obscure UX issues (e.g., is a dip in engagement due to a content update, campaign change, or genuine usability regression?).

**How to fix it (specific):**

* **Add monthly "What's new" module**
  1. Create a **dismissible top-banner or modal** that appears 1× per month (or on first visit of the month for returning users) with a summary of dashboard updates, new metrics, or feature launches.
  2. **Tie banner visibility to pageview count or new-user surges** (deploy prominently during high-traffic months).
  3. **Include version/date stamp** so users know when they last saw it.

* **Lightweight onboarding flow for new users**
  1. Detect **first-time visitors** via GA4 `user_first_touch_timestamp` and show a **2-step inline tutorial:**
     — Step 1: "Welcome to the Performance Dashboard. Here's what you can explore:" (highlight 3 key sections)
     — Step 2: "Sign in to unlock personalized insights" (soft CTA, not required).
  2. Use **CSS classes or GA4 events** to track tutorial completion; skip for returning users.
  3. **Allow dismissal** without friction (X button or "Skip").

* **Align dashboard updates with communication channels**
  1. **Coordinate release notes** between dashboard content updates and VA.gov email/blog announcements (reduces surprise/confusion from unexplained metric changes).
  2. **Add "Release notes" link in footer** or sidebar for users who want to understand recent changes.

**Representative quotes:**

* *[No direct user quotes available; GA4 provides behavioral signals only.]*
* **Proxy insight from behavior:** New-user surges (170–363/month) and engagement volatility (86–93%) suggest campaigns or content changes are unmeasured and uncoordinated.

**Measurement gap addressed:** Tagging new-user onboarding events and correlating tutorial completion with downstream engagement would validate whether the onboarding path improves activation and retention.

---

## **4) What to Measure Next (high value) to connect GA4 to root cause — and WHY (plain language)**

**The gap:** Right now GA4 tells us *where* people leave the dashboard and *how long* they stay, but not *why*. We know 19% of sessions redirect to /sign-in and only 1% of users click outbound links, but we can't distinguish between:
- Users who *don't need* the dashboard (already know what they want) vs. users who *can't find* what they need
- Users who are blocked by authentication requirements vs. users who don't perceive value until they log in
- Users who don't explore because links are invisible vs. users who explored and found nothing useful

Adding targeted measurement and qualitative signals will transform GA4 from descriptive (what happened) to diagnostic (why it happened).

---

### **A) Scroll depth and content engagement by section**

**Why this matters:** If users are scrolling past key metrics or abandoning before reaching deeper resources, we'll see it. If they're reaching the "Learn more" section but not clicking, we know the problem isn't visibility—it's relevance or clarity. This answers: "Are users not exploring because they can't find links, or because they don't want to explore?"

**How to implement:**
* Add **GA4 custom events** for scroll milestones (25%, 50%, 75%, 100% of page height reached).
* Tag **each section/card with a custom dimension** (e.g., `section_name: "uptime_metrics"`, `section_name: "service_volume"`) and log when users view them.
* Track **time-to-click** for each outbound link (if >30s, users may have forgotten context by the time they click).

**Directly ties to these pain points:**
* **Priority #2: Shallow Content Exploration** – Scroll depth tells us whether users reach the outbound-link section; if 80% reach it but <5% click, the problem is CTA design, not discoverability.
* **Priority #3: Onboarding & Engagement Volatility** – New users' scroll patterns vs. returning users' patterns will show whether onboarding is needed (e.g., new users abandon early if they don't understand the layout).

---

### **B) Exit reasons via micro-survey at drop-off points**

**Why this matters:** When a user leaves the dashboard (either to /sign-in, a different page, or closes the browser), a 1-question micro-survey ("What were you looking for?") captures intent *before* they leave. This directly addresses the authentication friction and exploration gaps: did they leave because they wanted personalized insights, couldn't find what they needed, or didn't know what to do next?

**How to implement:**
* Deploy **"Quick feedback" modal** via GA4 event listeners:
  - On /sign-in click: "What would help you most? A) Personalized data [auth route], B) Public performance trends, C) Something else"
  - On 45s dwell (half the median session duration): "Are you finding what you need? Y/N" (if N, show quick-link suggestions).
  - On page exit: "What were you looking for?" with buttons like "Service performance", "Help with a problem", "General overview".
* Log responses as **GA4 custom events** (`exit_reason: "personalized_insights"`, etc.) tied to session IDs.
* **Keep it one-click or two-click** (otherwise: response bias—only frustrated users answer).

**Directly ties to these pain points:**
* **Priority #1: Dashboard → Authentication Friction** – "Why did you click sign-in?" responses will confirm whether users perceive authentication as a required unlock or a voluntary personalization step.
* **Priority #2: Shallow Exploration** – "What were you looking for?" at 45s dwell will surface unmet needs (e.g., "Trends over time", "Comparison to other services", "Download this data") that aren't currently on the dashboard.

---

### **C) Authenticated vs. unauthenticated user intent (LOA-segmented events)**

**Why this matters:** We know LOA3 users stay 12 seconds longer, but we don't know if that's because the content is better, the UI is clearer, or they spend the extra time *looking* for something they eventually abandon. Segmenting key events (outbound clicks, scroll depth, exit reasons) by LOA will reveal whether the dashboard is underserving unauthenticated users structurally (missing content) or behaviorally (they don't know how to navigate).

**How to implement:**
* **Retrospectively segment existing GA4 data** by `user_properties: LOA_level` (map from authentication status or user ID prefixes if available).
* For forward-going data, **add user property** `LOA_level: [1, 2, 3]` at session start (log in event or unauthenticated marker).
* Compare these metrics by LOA:
  - Scroll-depth distribution (do LOA1 users abandon before reaching resource links?)
  - Outbound-click rate (% of LOA1 vs. LOA3 sessions with ≥1 click).
  - Time-to-sign-in (if LOA1 users click /sign-in, how long until they do it?).
  - Exit reasons (LOA1: "Needed to log in"? vs. LOA3: "Found what I needed"?).

**Directly ties to these pain points:**
* **Priority #1: Authentication Friction** – If LOA1 users have high exit-reason responses like "I need to sign in to see more", the friction is access control. If LOA1 exits are "I found what I needed", the friction is false alarm, and the real issue is low overall engagement.
* **Priority #3: Engagement Volatility** – If volatility correlates with LOA1 surges (new, unauthenticated users arriving via campaigns), onboarding is urgent.

---

### **D) Time-to-value: first meaningful event latency by traffic source & device**

**Why this matters:** If users from organic search bounce faster than users from internal links, or mobile users drop off at different rates than desktop, we can target interventions. "First meaningful event" = first outbound click, scroll, or engagement beyond the passive 10-second engagement threshold. This tells us whether the problem is a universal UX issue or specific to how traffic *arrives*.

**How to implement:**
* Add **GA4 custom metric** `time_to_first_click: event_timestamp - session_start_timestamp`.
* Segment by:
  - **`traffic_source`** (organic search, email, internal link, direct, social).
  - **`device_category`** (mobile, tablet, desktop).
  - **`user_device_platform`** (iOS, Android, Windows, Mac).
* Calculate median and p90 time-to-first-click per segment.

**Directly ties to these pain points:**
* **Priority #2: Shallow Exploration** – If time-to-first-click is 0s for 90% of users (no clicks at all), the problem is engagement, not device friction. If mobile users have 3× higher time-to-first-click than desktop, the UX is device-specific.
* **Priority #3: Engagement Volatility** – If volatility correlates with traffic-source changes (e.g., new organic search surge), we can improve SEO or messaging to set accurate expectations.

---

### **If you only do 3 things (highest ROI)**

1. **Implement scroll-depth + section-level event tracking** (2–3 days of GA4 configuration). This immediately answers whether the exploration problem is visibility, relevance, or UX layout. Directly unblocks Priority #2 and provides real-time feedback for the "Learn more" CTA redesign.

2. **Deploy 1-question exit micro-survey** on /sign-in click and page exit (1 day of modal implementation + GA4 event logging). This captures the "why" for the two highest-impact drop-off points, directly unblocking Priority #1 (authentication friction) and Priority #2 (shallow exploration) root causes.

3. **Segment existing GA4 data and forward events by LOA_level** (1 day of data retrospective + user-property tag addition). This isolates whether engagement volatility and low exploration are structural (missing content for unauthenticated users) or behavioral (all users, but worse for new/unauthenticated). Unblocks prioritization between Priority #1 and Priority #3.

**Together, these three changes convert GA4 from "we know sessions are 40 seconds long" to "we know users scroll past the resources section but don't click, and when they try to sign in, they don't know if they'll see personalized insights or public data"**—the evidence needed to prioritize which of the three pain points to fix first, and what the fix should be.

---

## **5) Critical Caveats & Missing Data**

1. **CSAT not available.** No survey responses were collected for the Performance Dashboard in 2025. Satisfaction baseline and sentiment themes cannot be established. **Recommendation:** Implement post-visit survey (1–2 questions) or integrate with Medallia if available.

2. **No qualitative data.** User research, usability testing, support tickets, and social media feedback are out of scope. All findings are inferred from behavioral signals; causation is not confirmed. **Recommendation:** Conduct 3–5 moderated user testing sessions with new and returning users to validate the authentication-friction and shallow-exploration hypotheses.

3. **Device/platform patterns unavailable.** Current GA4 export does not include device_category or platform breakdowns. Mobile-specific friction may be masked in aggregate metrics. **Recommendation:** Re-query GA4 with device dimensions to check for platform-specific engagement drop-offs.

4. **No event-level root cause instrumentation.** Field-level tracking (which specific charts are viewed, which links are clicked, where scrolling stops) is minimal. All analysis is page-level or Step+1 destination. **Recommendation:** Implement detailed event logging per section (Priority #4 roadmap).

---

**Report prepared:** 2026-04-21  
**Data period:** Jan 1–Dec 31, 2025  
**Primary analyst:** Cross-source insights synthesis (GA4-only dataset)  
**Next review:** Post-implementation of Priority #4 measurement improvements (estimate 2–4 weeks after instrumentation)
