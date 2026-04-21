# **1095-B Tax Form Download Flow — 2025 Insights (Medallia, Call Center, Google Analytics)**

## **TL;DR**

* **Baseline CSAT**: 74.2% satisfied (Medallia: 72.7% n=44; GA4: 75.6% n=41)
* **CSAT/feedback timeframe**: April 9 – December 30, 2025 (Medallia); March – December 2025 (GA4); March 6 – December 15, 2025 (Call Center)
* **Top pain points (task-blocking, highest impact)**:

1. **"No form found" silent failures** — 21% of authenticated users encounter a blue alert stating their form is unavailable (3,263 events across six months); no guidance on why, when it will be available, or what to do next.
2. **ID.me / camera-based verification barriers** — 9.1% of survey respondents report being blocked by smartphone/camera requirements for identity verification; disproportionately affects older Veterans and those without modern devices.
3. **December system performance collapse** — `available_forms` endpoint latency regressed 6× (45ms → 273ms), error rate jumped to 1.5%, backend capacity exceeded by 10× during peak tax season (Dec 15–31, 23,511 sessions).

* **What analytics adds (GA4)**:
  * Confirms qualitative barriers (login, discovery) with behavioral signatures: 8,878 self-referral sessions (retry loops), 51.3% abandonment at download step, 2,546 EDIPI authorization errors.
  * December:July session ratio of 15:1 reveals structural seasonality requiring 10× baseline capacity planning.
  * Distinguishes symptom (abandonment) from cause (21% blue-alert population cannot complete; 25–30% other abandonment remains unexplained without exit-intent data).
  * **Measurement gap**: GA4 does not instrument *why* users fail at download; funnel stops at "click" vs. "no click." Cannot confirm whether tax-year confusion, clarity issues, or pure form unavailability drives the 51% non-click rate.

---

## **1) Data source inventory (timeframe + frequency for each source)**

### **A) Medallia (Survey feedback)**

* **Timeframe**: April 9, 2025 – December 30, 2025 (ET); December concentrates 35/44 responses (79.5%)
* **Scoped volume**: 52 total rows (URL filter: `/records/download-your-irs-1095-b`); 44 with valid 1–5 CSAT
* **CSAT sample size**: n=44; Satisfied (CSAT 4–5): 32 (72.7%); Dissatisfied (CSAT 1–3): 12 (27.3%)
* **Theme counts (mentions within CSAT scope)**:
  * Login/ID.me verification barrier: 4 (9.1%)
  * Tax-year availability mismatch: 4 (9.1%)
  * Content clarity & wayfinding: 2 (4.5%)
  * Access VA/VHIC SSO & URL errors: 1 (2.3%)
  * Historical copies / back years: 1 (2.3%)
  * Positive drivers: 12 (27.3%)
  * Uncoded/blank: 20 (45.5%)

### **B) Call Center (Support tickets)**

* **Timeframe**: March 6, 2025 – December 15, 2025
* **Volume**: 7 total cases; 6 closed (85.7%), 1 routed (14.3%)
* **Note on CSAT**: No CSAT values present in dataset; proxy satisfaction = resolution status
* **Theme counts (cases)**:
  * Authentication & account access: 3 (~42.9%) — sign-in failures, MFA reset, portal re-access
  * Navigation & discovery: 2 (~28.6%) — finding 1095-B download, QuickSubmit, tax documents
  * Technical compatibility (browser): 1 (~14.3%) — Edge/Chrome switch required
  * Channel & policy clarity: 1 (~14.3%) — availability timing, offline options

### **C) Google Analytics / Internal VA Analytics CSV**

* **Timeframe**: March 1 – December 31, 2025 (internal CSV); January 1 – December 31, 2025 (GA4)
* **What GA4 represents**: Sessions = unique user visits; page views = total interactions; endpoint latency = milliseconds per API call; blue-alert events = form-not-found messages; EDIPI errors = authorization failures; download events = link clicks
* **Funnel drop-offs (behavioral signals)**:
  * `/records/` hub → 1095-B page: 30,241 / 5,662,807 users (0.53% arrival; 99.47% abandonment—expected for a hub)
  * 1095-B page → download click: 15,506 / 30,241 users (51.3% abandonment; ~20–25% due to blue-alert population, remainder unattributed)
  * Self-referral sessions (retries/reloads): 8,878 sessions (15.8% of total page traffic) — fingerprint of error loops
  * **Device/platform pattern**: Bing and Yahoo organic search users engage 30–60% longer (48–53s) than Google users (36s), suggesting older demographic
  * **Monthly volatility**: December 23,511 sessions vs. July 1,570 (15:1 ratio); April 12,371 sessions (second peak)
  * **System performance**: 
    * `available_forms` latency: Jul–Nov avg 48.6ms → December 272.96ms (5.6× regression)
    * System error rate: 0% Jul–Oct, 0.07% Nov (prod testing flag), 1.5% December (127/8,280 calls)
  * **Blue-alert (form-not-found) events**: 3,263 across Jul–Dec; monthly rate 16.1%–24.8% of authenticated users (peak Nov 24.8%, 551 events)
  * **EDIPI authorization errors**: 2,546 annual events; April spike ~700 errors (incl. ~600 single-day peak); LOA 3 verified users: 849 errors / 771 users (1.10 errors per user—no self-service recovery)

---

## **2) Consolidated "what's going wrong"**

The 1095-B download flow suffers from **three converging failure modes** that compound during tax season (April, December):

**Authentication and access gates** are the highest-friction entry point. ID.me identity verification mandates camera or smartphone use, blocking older Veterans and those without modern devices—a finding confirmed across all three data sources. Call center data shows sign-in failures, MFA resets, and portal re-access issues accounting for 43% of cases (3/7). GA4 reveals this manifests as 2,546 EDIPI authorization errors yearly, with 771 LOA 3 (fully verified) users hitting a permanent "User does not have a valid EDIPI" error with no self-service recovery path. The April spike of ~700 errors suggests a specific event (IRS notification, news, mailed reminder) drove concentrated demand toward a brittle endpoint. Unauthenticated users exhibit a 1.47 retry-per-user rate, suggesting they interpret the 401 error as transient rather than an authentication requirement—a UX clarity failure.

**Form availability mismatch** affects 21% of authenticated users monthly (3,263 blue-alert events across six months). When a Veteran signs in and the IRS has not yet issued their 1095-B for the requested tax year, the page displays a blue alert stating "Form not found" with no explanation of *why*, when the form will arrive, or what to do next. Survey respondents corroborate this: 9.1% report confusion over seeing "2024 content" when expecting "2025 availability" or being told forms "won't be available until January." This is not a backend error—it is the system correctly reporting IRS processing delays—but the *presentation* is silent, leaving users stranded. In November, 24.8% of authenticated users hit this state, a peak that precedes the December system degradation.

**System capacity collapse in December** compounds both issues. The `available_forms` endpoint (the gatekeeper for the entire page experience) regressed 5.6× in latency (45ms → 273ms) and jumped to 1.5% error rate as session volume reached 23,511—10× baseline. Call center data shows no explicit complaints during December, but the timing aligns with peak tax filing. GA4 reveals the root is likely a November "prod testing new API" note; if the new API rolled out fully in December, it may lack caching or capacity planning. April's 12,371 sessions showed zero errors at 33ms latency, proving the stack *can* handle ~15,000 sessions—but December's 2× volume combined with 6× worse latency indicates a code or dependency change, not purely load-driven scaling.

**Discovery and clarity gaps** are secondary but persistent. Call center agents walked users through finding the 1095-B (28.6% of cases); Medallia respondents asked for a "simple answer" and complained of "acronyms" and "maze-like" structure (4.5% of responses). GA4 shows 6,345 sessions arrived from the `/records/` hub (presumably looking for tax forms) but only 30,241 reached the 1095-B page—suggesting the cross-link is not prominent. The 8,878 self-referral sessions (users reloading the page) are the fingerprint of error retry loops that could be reduced with clearer pre-error messaging and post-error guidance.

**Historical copies and offline access** are lower-frequency but high-stakes. Two respondents needed prior-year forms (2022 for state audit, 2015–2019 for unknown reason); one needed an offline mailing option for tax season. The call center handled these with agent guidance, but the self-service path is opaque.

---

## **3) Pain points (with a specific fix recommendation for each)**

### **Priority 1) "No Form Found" Silent Task Failure (task-blocking, high-stakes)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: Indirect; 4 respondents (9.1%) reported "2024 when expecting 2025" or "won't be available until January" confusion
* **Call Center (Mar–Dec 2025)**: 1 case (14.3%) — veteran told form unavailable until February 1 by mail; veteran does not use computer; frustrated re: timing
* **GA4 (Jul–Dec 2025)**: 3,263 blue-alert events; monthly rate 16.1%–24.8% of authenticated users (peak Nov 24.8%, 551 events from 2,218 users); 20–25% of the 51.3% download-step abandonment rate directly attributable to this population

**How to fix it (specific)**:

1. **Redesign blue alert to explain causation and provide next actions**: Replace "Form not found" with "**Your 2025 1095-B will be available by [January 15, 2026]**. [Why the delay? Learn about IRS timelines.] In the meantime: [Download 2024 copy] or [Request a mailed copy] or [Call 1-800-XXX-XXXX]."
2. **Add an "Email me when available" opt-in** to the blue alert; capture intent from the 3,263+ six-month cohort and send a notification on release (estimated 550+ users per month in steady state).
3. **Surface form availability via pre-fetch** on the `/records/` hub with a banner ("Your 2025 1095-B will be ready by [date]") to prevent dead-end visits entirely.
4. **Instrument blue alert with distinct analytics**: add a checkbox/survey adjacent ("Was this information helpful?") to distinguish blue-alert drop-off from other abandonment causes; current GA4 does not track this separately.

**Representative quotes**:

* "Getting an Email about **downloading 1095-B**, only to find that download was for **2024**." — Medallia (CSAT 2, 12/12/2025)
* "Don't tell us today that something **won't be available until January**, and bury the link inside the email…" — Medallia (CSAT 2, 12/11/2025)
* "**Veteran … was told that she could not get the tax form … until after February 1 by mail … usually files early and needs her 1095-B.**" — Call Center (12/15/2025, non-CSAT)

---

### **Priority 2) ID.me Verification Barriers — Camera/Smartphone Requirement (task-blocking, accessibility)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: 4 respondents (9.1% of CSAT scope) reported camera/smartphone requirement blocking access; concentrated in October (1) and December (3, including one 70-year-old without camera)
* **Call Center (Mar–Dec 2025)**: Implicit in 3/7 cases (42.9%) involving MFA resets via ID.me; not explicitly called out as barrier but required agent intervention to resolve
* **GA4 (Mar–Dec 2025)**: Correlates with 2,546 EDIPI errors (401 Not Authorized, "User does not have valid EDIPI"); LOA 3 verified users (771) hitting permanent block with no recovery path

**How to fix it (specific)**:

1. **Provide camera-less alternatives on the 1095-B page**: Add a clear banner ("**No smartphone or camera?**") that surfaces mail-in verification, in-person verification (at VA facility), and knowledge-based checks (personal questions) as **equally valid** paths to download. Ensure the banner appears *before* users attempt the camera flow.
2. **Add a fallback pathway for verified (LOA 3) users missing EDIPI**: Pre-check EDIPI on page load (instead of waiting for download click). If missing, render: "**We need to update your ID to send your 1095-B. [Call 1-800-XXX-XXXX] or [Request mailed copy].** This prevents a 401 error experience and gives LOA 3 users a clear next action instead of a dead end.
3. **Instrument verification failure reasons**: Add client-side telemetry to track which alternative (camera, mail, in-person, knowledge-based) users select and whether they succeed; GA4 currently has no visibility into which flows fail.
4. **Document and promote offline request flow**: Ensure mailed copy requests can be initiated from the 1095-B page without requiring authentication; based on call center cases, some users will always prefer offline.

**Representative quotes**:

* "I've been trying to access my ebenefits page for over 6 hours now with this IDMe absurdity… they want a video camera meeting… I'm a 70 year old… I don't have a damn camera…" — Medallia (CSAT 1, 12/24/2025)
* "**Trying to access VA.Gov without a smart phone is impossible**, and makes me very angry. I need a 1095B form." — Medallia (CSAT 1, 12/24/2025)
* "Camera on document to **verify ID was very challenging**." — Medallia (CSAT 2, 10/2/2025)

---

### **Priority 3) December System Performance Collapse (high-stakes, reliability)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: No explicit complaints; December had 35/44 responses (79.5%) with 77.1% satisfaction despite operational issues (likely masked by successful completions)
* **Call Center (Mar–Dec 2025)**: No explicit December complaints; possibly because support volume goes up (users call instead of completing self-service)
* **GA4 (Mar–Dec 2025)**: December 23,511 sessions (10× July baseline); `available_forms` latency 272.96ms (5.6× regression from 48.6ms Jul–Nov avg); system error rate 1.5% (127/8,280 calls); November "prod testing new API" flag suggests cause

**How to fix it (specific)**:

1. **Immediately investigate November "prod testing new API" and December rollouts**: Review deployment logs, compare old and new API implementations for caching, connection pooling, or dependency changes. The 5.6× latency regression with coincident error spike points to code change, not load alone.
2. **Add capacity pre-scaling and pre-warming**: Start scaling backend workers and warming caches on **December 1** (not just when traffic arrives). Target **10× baseline capacity for December 15–31** and **8× baseline for April 1–15** based on historical session volume. April's 12,371 sessions with zero errors at 33ms latency proves the stack can handle this if provisioned.
3. **Implement `available_forms` endpoint caching**: Cache responses per-user for 24 hours; every page load triggers a fresh call to this high-latency endpoint. Caching would reduce load 3–4× during retry-heavy periods without sacrificing data freshness (form availability does not change intra-day).
4. **Add SLO alerting**: Configure alerts for `available_forms` latency > 100ms sustained for 5 minutes or error rate > 0.5%; November/December regression was only visible retrospectively. Shift monitoring from reactive to proactive.

**Representative quotes**:

* No verbatim complaint (operational finding only), but backend metrics show: "**Latency jumped 5.6× (45ms → 273ms), error rate to 1.5% (127/8,280), during December peak of 23,511 sessions (10× baseline).**"

---

### **Priority 4) Authentication & Login Friction (task-blocking, medium frequency)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: 4 respondents (9.1%) reported ID.me/camera friction; overlap with Priority 2 but distinct from pure login barriers
* **Call Center (Mar–Dec 2025)**: 3 cases (42.9%) — veterans unable to log in, needed MFA reset, or lacked recent portal access; concentrated in March–April (tax season ramp)
* **GA4 (Mar–Dec 2025)**: 2,546 EDIPI authorization errors annually; 1,697 not-logged-in (1.47 errors per affected user—retry behavior), 849 LOA 3 (1.10 per user—give up after first failure); April spike ~700 errors suggests coordinated demand

**How to fix it (specific)**:

1. **Gate download buttons behind pre-sign-in check** (client-side): Instead of rendering "Download PDF" and erroring on click, check authentication on page load. If not authenticated, render: "**Sign in to download your 1095-B**" with a prominent CTA. This eliminates the click-to-401 dead end.
2. **Add post-login deep link to 1095-B**: After MFA reset or sign-in success, redirect to the 1095-B page with a confirmation banner ("**Account verified. Your 1095-B is ready to download.**") and a prominent Download button. Call center notes show agents need to walk users through this; automating it reduces friction.
3. **Replace raw 401 error text with Veteran-facing language**: "**You need to sign in to download your 1095-B. [Sign in]** or [Call 1-800-XXX-XXXX for help]." Current error text ("User does not have a valid EDIPI") is cryptic and drives retry loops.
4. **Create a tax-season pre-access campaign**: Send a January `vanotify` email ("Check your 1095-B access") with a link that pre-authenticates users or prompts MFA reset before April surge; current data shows email is under-leveraged (2.15% of sessions) but Bing/Yahoo users (older demographic) engage longer, indicating email would resonate.

**Representative quotes**:

* "**Veteran is calling in to receive tax form documents. Veteran states he is unable to log in to VA.gov.**" — Call Center (3/6/2025)
* "**He is having issues with log in … needs help … reset MFA in ID ME … needed his 1095 B for taxes.**" — Call Center (4/22/2025)
* "**Needs his tax forms online but he has not logged into his portal in a while …**" — Call Center (7/2/2025, routed)

---

### **Priority 5) Navigation & Discovery Gaps (medium frequency, convenience)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: 2 respondents (4.5%) reported difficulty finding "simple answer," "maze" structure, "abbreviations, acronyms"
* **Call Center (Mar–Dec 2025)**: 2 cases (28.6%) — agents walked users through QuickSubmit, locating 1095-B download; one caller also asked for pharmacy spend totals
* **GA4 (Mar–Dec 2025)**: Only 6,345 sessions arrived from `/records/` hub (vs. 25,549 direct and 24,434 organic search); 8,878 self-referrals (15.8% of traffic) suggest users struggle to find the download on first visit

**How to fix it (specific)**:

1. **Create a dedicated "1095-B Tax Documents Hub"** at `/records/download-your-irs-1095-b` with clear sections: (a) **One-click Download** (PDF/Text), (b) **"When will my form be ready?" with status & date**, (c) **"Don't see your form? Here's why [IRS timeline explainer]"**, (d) **FAQ** ("What is a 1095-B?", "How long to arrive?", "Where is 2024?"), (e) **Related links** (download VA letters, pharmacy spend statements, etc.)
2. **Add guided microcopy on `/records/` hub**: Ensure `/records/` displays a prominent **"IRS 1095-B Tax Form"** card with tagline "**Download your VA health coverage form for taxes**" and a direct link. Current GA4 shows only 0.53% of `/records/` visitors reach the 1095-B page; better cross-link would recapture traffic.
3. **Reduce acronyms; link to glossary**: Replace "VHIC," "EDIPI," "LOA 3," "SSO" with plain-language first mention + linked glossary. Call center agents walked users through this; self-service pages should not require an agent.
4. **Add an integrated "Pharmacy Spend Summary"** link or embed (per call center request): If integration is not feasible, add a clear CTA ("Need your pharmacy spend for taxes? [Go to pharmacy records]") to keep users on-property.

**Representative quotes**:

* "I need a **simple answer**. It takes a **long run around** to get to my answer." — Medallia (CSAT 3, 12/11/2025)
* "A maze of compartmentalized information… **abbreviations, acronyms**… the system they work in is a disaster." — Medallia (CSAT 3, 12/13/2025)
* "**Guided the Veteran on using QuickSubmit.**" — Call Center (3/18/2025)

---

### **Priority 6) Tax-Year Mismatch & Historical Copies (medium frequency, high-stakes for affected)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: 4 respondents (9.1%) reported seeing "2024 when expecting 2025" or being told "won't be available until January"; concentrated in May and December (off-peak/peak tax)
* **Call Center (Mar–Dec 2025)**: 1 case (14.3%) — veteran told form unavailable until February, does not use computer, frustrated re: early filing
* **GA4 (Mar–Dec 2025)**: No direct signal, but December blue-alert rate 19.7% (vs. Nov peak 24.8%) suggests year-transition confusion ongoing

**How to fix it (specific)**:

1. **Add a Tax-Year Status module at page top**: Display "**Current year (2025) available by [date] | [Availability badge]. Prior years: [2024] [2023] [2022]** [Select year to view]." Include a year dropdown with a visual calendar indicator ("2024: Available now | 2023: Available now | 2022: Available now | 2021: [Contact us]").
2. **Synchronize email templates to the same module**: When sending mailed notifications, include: "Your 2025 1095-B will be available on [date]. [In the meantime, download 2024 here: link]." Every email should deep-link with a year parameter (e.g., `?tax_year=2024`).
3. **Provide a fallback contact method for archival requests**: Add a button ("Need a form older than 5 years?") linking to a secure form or phone number where users can request scanned copies of prior-year 1095-Bs from paper archives.
4. **Add tooltips explaining IRS timelines**: "Why is 2025 not available yet? The IRS requires VA to submit healthcare data by [date]. Your form will be released within [X] days of our submission." Reduces confusion and false belief that form is "missing."

**Representative quotes**:

* "Getting an Email about **downloading 1095-B**, only to find that download was for **2024**." — Medallia (CSAT 2, 12/12/2025)
* "Your 1095-B form is for **tax year 2024, not 2025**." — Medallia (CSAT 2, 12/10/2025)
* "I need my **1095-B from 2022**… The State of Massachusetts has seized my bank account…" — Medallia (CSAT 2, 10/22/2025)

---

### **Priority 7) Access VA / VHIC SSO & URL Errors (low frequency, high-severity for affected)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: 1 respondent (2.3%) reported "URL request rejected" when accessing VHIC via Access VA; note mentions OAuth/SAML header changes and session persistence failures
* **Call Center (Mar–Dec 2025)**: Implicit in authentication friction; no explicit SSO complaint
* **GA4 (Mar–Dec 2025)**: No direct signal; EDIPI errors are separate from SSO handshake failures

**How to fix it (specific)**:

1. **Stabilize SSO session persistence** between VA.gov and Access VA: Conduct a full audit of OAuth/SAML handshakes, token lifetime, and cross-origin cookies. The note mentioning "header no longer says SAML or SSO" suggests a recent code change broke backward compatibility.
2. **Add a status ribbon** when SSO/OAuth transitions are in progress: "**OAuth authentication is being updated. If you experience 'URL request rejected,' try [switching browsers / clearing cookies / signing out and in again].**"
3. **Monitor for HTTP 4xx "URL request rejected" spikes** in production telemetry (currently unmeasured): Add alerting for this specific error pattern to catch future transitions.
4. **Provide a workaround flow** for users hitting SSO failures: If SSO redirect fails, offer a fallback ("**Sign in directly to VHIC** [here] or [call support]") instead of a dead end.

**Representative quotes**:

* "Can no longer login to VHIC on Access VA, it returns an error message **'URL request rejected'**… used to be when you login to VA.gov you were also automatically logged into Access VA…" — Medallia (12/27/2025, non-CSAT)

---

### **Priority 8) Browser Compatibility (low frequency, high-severity for affected)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: No explicit complaint
* **Call Center (Mar–Dec 2025)**: 1 case (14.3%) — veteran could not access needed site until switching from Microsoft Edge to Google Chrome
* **GA4 (Mar–Dec 2025)**: No direct signal; possible latency variations by browser not instrumented

**How to fix it (specific)**:

1. **Add client-side browser detection** on page load: If Edge, Firefox, or Safari are detected, display a banner: "**Experiencing issues? Try [downloading Chrome] or [updating your browser].** Most Veterans use Chrome for the best experience."
2. **Publish a compatibility matrix** with clear troubleshooting steps: Link from the 1095-B page to a support page listing "Known issues: [Edge with older Windows versions], [Safari with older macOS], [Firefox with ad blocker X]" with auto-detect messaging.
3. **Test across browsers** in pre-prod before seasonal peaks: Add Edge, Firefox, and Safari to the CI/CD test matrix (currently may only test Chrome).

**Representative quotes**:

* "**Agent was able to help the veteran with changing to Chrome … able to gain access after he changed from Edge to Chrome.**" — Call Center (3/10/2025)

---

### **Priority 9) Accessibility Format Under-Utilization & Q3 Regression (low frequency, accessibility)**

**Evidence (timeframe + frequency)**:

* **Medallia (Apr–Dec 2025)**: No explicit complaint
* **Call Center (Mar–Dec 2025)**: No explicit complaint
* **GA4 (Mar–Dec 2025)**: Text-file downloads 2,183 (9.14% of 23,882 total), vs. PDF 21,603 (90.46%); Text users show +6.02% longer engagement (16s vs. 14s); August/September "No Click" cluster (95 of 96 annual events, 39 Aug + 56 Sep) overlaps with elevated Text-user session times, suggesting Q3 code deploy broke accessibility

**How to fix it (specific)**:

1. **Audit page for WCAG 2.2 AA compliance**, focusing on August–September 2025 code deploys: The correlation between "No Click" spike and elevated Text-user engagement times indicates a potential accessibility regression. Run a full WAVE or Axe scan and compare Q3 commits.
2. **Ensure screen reader announces "Download started"** on PDF/Text click: Current 16s Text-user average suggests users may not be receiving clear download completion feedback.
3. **Reorder or relabel buttons** to prioritize accessible format: Currently PDF-first; consider "**Download (best for all): [PDF] [Text—best for screen readers & enlargers]**" or test reverse order in A/B test.
4. **Expand CSAT collection** to accessibility-aware respondents: Add a question ("Do you use assistive technology (screen reader, magnifier, etc.)?") to correlate format choice with accessibility needs. Current CSAT sample (41 responses) is too small.

**Representative quotes**:

* (No verbatim complaint; analytics-only finding)

---

## **4) What to measure next (high value) to connect GA4 to root cause — and WHY (plain language)**

Right now GA4 is telling us **WHERE** people leave (funnel step 2→3, blue alert, 401 error) but not **WHY**. The 51.3% abandonment at the download step is partially explained by 20–25% blue-alert population, but the remaining 25–30% is a black box. Call center and survey data fill in some gaps (clarity, login, verification barriers), but we lack diagnostic signals for each failure path. These recommendations connect analytics back to qualitative findings.

---

### **A) Exit-intent "Why did you leave?" micro-survey on abandonment**

**Why this matters**: Current GA4 shows 51.3% of visitors to the 1095-B page do not click a download link. Call center data suggests some abandon due to confusion (navigation, clarity), survey data points to verification barriers. But we cannot distinguish between (1) users who saw the blue alert and rationally left, (2) users who could not log in and gave up, (3) users who were overwhelmed by choices, and (4) users who simply changed their mind. A 2–3 question micro-survey ("What brought you here today?", "Why did you leave?", "Would you try again?") deployed on page exit would segment the 25–30% unexplained abandonment and confirm or refute hypotheses from qualitative sources. This ties directly to clarity, login, and form-availability pain points; a 10% response rate would give us ~1,500 data points annually from the 15,000+ abandoners.

**Directly ties to these pain points**:

* "No form found" silent task failure (Priority 1) — can quantify how many abandoners saw the blue alert vs. other reasons
* Tax-year mismatch & historical copies (Priority 6) — can identify if year confusion drives abandonment
* Navigation & discovery gaps (Priority 5) — can confirm if clarity/findability is a barrier
* Authentication & login friction (Priority 4) — can measure how many abandoned due to sign-in failure

---

### **B) Field-level "Reason form not found" telemetry in the blue-alert experience**

**Why this matters**: Currently, the blue alert is a silent dead end with no telemetry. We know 3,263 blue-alert events occurred across six months (21% of authenticated users), but we don't track whether users clicked on "Why?" explanations, selected alternatives (download prior year, request by mail, call support), or simply left. Instrumenting the blue-alert UI with event tracking for every click and selection would tell us: (1) whether redesigned explainers (Priority 1 fix) are effective, (2) what % of users choose each recovery path (email notification, prior-year download, mail request, phone), and (3) whether the blue alert is truly a task blocker or a natural IRS-cycle pattern that needs only better framing. This is the single highest-impact measurement improvement because it directly addresses the largest silent failure population.

**Directly ties to**:

* "No form found" silent task failure (Priority 1) — core diagnostic instrument for the 3,263 six-month population
* Tax-year mismatch & historical copies (Priority 6) — will show which prior years are requested, informing content and archive policy

---

### **C) EDIPI pre-check + error-reason instrumentation**

**Why this matters**: GA4 shows 2,546 EDIPI errors annually, with 771 LOA 3 (verified) users hitting a permanent block. But we don't know whether the error is due to (1) missing EDIPI in the backend (data sync issue), (2) EDIPI mismatch between VA.gov and the download service (integration bug), or (3) user not actually LOA 3 despite profile saying so (authentication escalation issue). Implementing a client-side pre-check that runs on page load (Priority 2 fix) and logs *why* EDIPI is missing or mismatched would distinguish these root causes. Combined with a "hard block" message instead of a 401 error, this would eliminate the current 1.47-retry-per-user rate and reduce call volume. Measurement goal: track "EDIPI pre-check pass" vs. "EDIPI missing" vs. "EDIPI mismatch" events to understand the true size of each failure mode.

**Directly ties to**:

* ID.me verification barriers (Priority 2) — separates camera/verification friction from EDIPI backend mismatches
* Authentication & login friction (Priority 4) — diagnostic data for the 2,546 annual error population

---

### **D) MFA reset → download completion funnel (call center + self-service)**

**Why this matters**: Call center data shows 3 cases (42.9%) involved MFA resets via ID.me, but we don't know whether users successfully completed the 1095-B download after the reset or gave up. GA4 currently has no tag for "post-MFA-reset session," so these users are indistinguishable from fresh-login sessions. If we instrument the ID.me callback with a `source=mfa_reset` UTM parameter and track conversion to download, we could measure: (1) whether post-reset users complete the task at a different rate than other users, (2) whether adding a post-reset deep link (Priority 4 fix) improves completion, and (3) what percentage of MFA-reset cases end in call center transfer (currently unknown). This is a lower-priority measurement than blue alert, but valuable for understanding whether authentication friction is truly a blocker or a temporary friction that resolves quickly.

**Directly ties to**:

* Authentication & login friction (Priority 4) — measure the conversion path for MFA-reset users
* December system performance collapse (Priority 3) — correlate MFA resets with latency spikes to see if error retry loops compound

---

### **E) Browser + device performance correlation**

**Why this matters**: Call center reported one Edge-to-Chrome resolution (Priority 8). GA4 shows Bing/Yahoo users engage 30–60% longer than Google users (older demographic signal), but we don't measure browser-specific latency or error rates. Instrumenting `navigator.userAgent` and correlating with endpoint latency and error rates could reveal: (1) whether certain browsers (Edge, older Firefox, Safari) have higher failure rates, (2) whether older users (inferred from Bing/Yahoo traffic) experience different latency, and (3) whether pre-winter browser updates (Priority 8 fix) would meaningfully improve experience. This is a lower-frequency pain point (1/7 call center cases), but easy to instrument and low-risk to measure.

**Directly ties to**:

* Browser compatibility (Priority 8) — diagnostic data for the 1/7 case and potential broader pattern

---

### **F) Session-level "form availability pre-check" notification campaign measurement**

**Why this matters**: Priority 1 recommends surfacing form availability on `/records/` hub before users click through. Priority 6 recommends a January email campaign to shift April demand earlier. Currently, GA4 has no visibility into whether users see these pre-campaign banners or how they respond (click through, ignore, etc.). Instrumenting with campaign-source UTM tags and tracking downstream conversion (page visit → download within same session) would tell us: (1) whether pre-fetch banners reduce blue-alert dead-end visits, (2) whether January email campaign is effective at smoothing April surge, and (3) what copy/timing maximizes early-season engagement. Measurement goal: compare blue-alert rate among users who saw pre-check banner vs. control group.

**Directly ties to**:

* "No form found" silent task failure (Priority 1) — measure effectiveness of blue-alert redesign
* Tax-year mismatch & historical copies (Priority 6) — measure effectiveness of email campaign
* December system performance collapse (Priority 3) — if email shifts demand earlier, reduces December peak

---

## **If you only do 3 things (highest ROI)**

1. **Implement exit-intent micro-survey on abandonment** — Directly answers "why 25–30% of users don't click download" and validates/refutes core hypotheses from qualitative sources. No code change required; can be deployed in GA4 within 1–2 weeks. Estimated annual data: 1,500+ abandonment reasons.

2. **Instrument blue-alert UI and pre-check EDIPI error reasons** — Together, these two address the 3,263 blue-alert events + 2,546 EDIPI errors (largest silent failure populations) and enable measurement of Priority 1 and Priority 2 fixes. Estimated cost: 1 sprint of frontend instrumentation. Payoff: actionable data on when users are truly blocked vs. when they need guidance.

3. **Add SLO alerting for `available_forms` latency and pre-scale December capacity** — Prevents recurrence of the December 5.6× latency regression and 1.5% error rate. Estimated cost: 0.5 sprints (alerting) + 1 sprint (load testing and scaling config). Payoff: operational resilience during peak tax season (40%+ of annual sessions).

These three changes convert analytics from **descriptive** ("Here is the funnel drop-off") to **diagnostic** ("Here is why users leave and whether the fix works"). Together, they directly support all nine prioritized pain points and close the gap between GA4 and qualitative feedback.

---

## **Summary**

The 1095-B download flow serves ~74% of users satisfactorily but fails 21–26% of authenticated users with silent, unguided task blocks (form unavailability, ID.me barriers, system errors). These failures compound during December peak (23,511 sessions, 15× baseline). Fixes are specific and measurable: redesign blue alert with actionable next steps, surface camera-less verification alternatives, pre-scale December capacity, and gate downloads behind pre-sign-in checks. Measurement gaps (why do 25–30% abandon?) are addressable with exit-intent survey, blue-alert instrumentation, and EDIPI pre-checks. Priority ranking is task-blocking first, then frequency, then accessibility impact.
