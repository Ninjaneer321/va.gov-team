# Request & Check Certificate of Eligibility (COE) Flow — 2025 Insights (Medallia, Call Center, Domo/GA4)

## TL;DR (what matters)

- **Baseline CSAT (measured):** 80.8% satisfied (CSAT 4–5), n=499 (Medallia, VA Home Loans COE scope)
- **Secondary satisfaction signal:** ~53% satisfied (4–5 stars), avg. 3.33/5 on Form 26-1880 intercept survey (GA4/Domo)
- **CSAT/feedback timeframe:** Jan 2 – Dec 31, 2025 (Medallia, ET); Jan 8 – Dec 30, 2025 (intercept survey)
- **Top pain points (task-blocking, highest impact):**
  1. **Form abandonment at Introduction + Screener steps** — 74.2% and 67.6% exit rates respectively; overall completion rate 16.52% vs. a 48% VA.gov platform average. The single largest source of lost COE applications.
  2. **Submission + document upload failures** — generic "We're sorry… can't submit" errors, JPEG/DD214 rejections, 5.3% technical failure rate on attempted submissions (4,326 failed against 77,605 successful). Users retry for hours or days.
  3. **COE data accuracy & discharge/DD214 mismatches blocking eligibility** — call center cites 132 COE/eligibility cases (~9.4% of scoped calls), many driven by missing DD214 or discharge character not reflected; causes missed closings and, in reported cases, homelessness risk.
- **What analytics adds (GA4/Domo):**
  - Confirms qualitative findings at scale: of 459,740 Introduction-step viewers, ~340,952 left before advancing; of 106,762 Screener viewers, ~72,171 exited. Qualitative "hard to find COE" and "can't submit" complaints map directly onto these cliffs.
  - Device split is nearly even (53.5% desktop / 45.2% mobile); mobile friction likely amplifies document-upload and content-heavy intro pain.
  - **Measurement gaps** limit root-cause analysis: no per-question exit tracking on the Screener, no scroll-depth on the landing page, no field-level instrumentation to distinguish auth-token expiry from validation failure at submit, and no segmentation of the 4,326 failed submissions by error type/browser.

---

## 1) Data source inventory (timeframe + frequency for each source)

### A) Medallia (VA.gov verbatims & CSAT)

- **Timeframe:** January 2 – December 31, 2025 (Eastern Time)
- **Scoped volume:** 856 in-scope rows (URL contains `va.gov/housing-assistance/home-loans/`)
- **CSAT sample size:** n=499 (rows with numeric scores 1–5); 357 excluded as non-numeric/blank
- **CSAT baseline:** 80.8% satisfied (403/499), median 5
- **Theme counts (mentions within scope):**
  - Positive experience: 122 (14.3%)
  - Document upload friction: 43 (5.0%)
  - Submission errors: 42 (4.9%)
  - Identity & login friction: 22 (2.6%)
  - Navigation & findability: 18 (2.1%)
  - Call center / support loop: 14 (1.9%)
  - Policy/program clarity: 14 (1.6%)
  - Data accuracy / COE info incorrect: 9 (1.1%)

### B) Call Center (COE_2025_CallCenter.csv — VA Home Loan/LGY notes)

- **Timeframe:** January 2 – June 2, 2025 (analysis window; file contains records through Feb 27, 2026)
- **Volume:** ~1,400 calls in the analyzed VA Home Loan/LGY subset (derived from stated percentages)
- **CSAT:** Not collected in this dataset (no numeric 1–5 scores)
- **Theme counts (cases):**
  - Foreclosure & Loss Mitigation / VASP: 369 (~26.3%)
  - COE & Eligibility: 132 (~9.4%)
  - Short Sale / Deed-in-Lieu & Servicer Delays: 110 (~7.8%)
  - Appraisal & Inspection / Property Condition: 103 (~7.3%)
  - Assumption & Entitlement Restoration: 26 (~1.9%)
  - Communication & Courtesy: 19 (~1.4%)
- **Note on scope:** Call center data covers a broader Home Loan Guaranty support surface than just the COE web flow. Foreclosure/VASP dominates volume but sits outside the COE request-and-check journey; COE & Eligibility is the most directly comparable theme for cross-source synthesis.

### C) GA4 / Domo (Form 26-1880 Analytics)

- **Timeframe:** January 1 – December 31, 2025 (funnel); Jan 8 – Dec 30, 2025 (intercept survey); Feb 11 – Nov 30, 2025 (task completion)
- **What GA4 represents (important):**
  - Funnel views are **step-level user counts**, not session counts. "Exit rate" means users who viewed a step and did not advance.
  - "Completion rate by user" (16.52%) measures whether a user who viewed the Introduction step ever submitted — not whether a session submitted.
  - Forms-by-status counts (519,058 not submitted / 77,605 successful / 4,326 failed) are session-level. A "failed" submission means the user attempted to submit and the backend returned an error; "not submitted" includes abandoners and in-progress saves.
  - Intercept survey is a random-prompt sample and under-represents users who abandon very early — the 74.2% Introduction-exiters likely never saw the survey.
- **Funnel drop-offs (behavioral signals):**
  - **Step 1 – Introduction:** 459,740 viewed → **74.2% exit** (~340,952 lost)
  - **Step 7 – VA Loan Screener:** 106,762 viewed → **67.6% exit** (~72,171 lost)
  - **Step 9 – Upload supporting documents:** 105,684 viewed → **21.4% exit** (~22,616 lost)
  - **Step 10 – Review & submit:** 83,048 viewed → **7.5% exit** (~6,229 lost) + 4,326 technical submit failures
  - **Device pattern:** 53.5% desktop / 45.2% mobile; browsers skew Chrome > Safari > Edge. No per-device funnel breakdown is currently available.
  - **Multi-session completion tail:** 15,982 users needed 2 sessions; 6,504 needed 3+ — highly correlated with the upload step.

---

## 2) Consolidated "what's going wrong"

**Two failure modes dominate: entry-point abandonment and mid-flow reliability.** GA4 shows that three-quarters of users who reach the Form 26-1880 Introduction never advance, and two-thirds of users who reach the VA Loan Screener exit from it. Together these two steps account for the overwhelming majority of lost applications and explain nearly all of the 31-point gap between COE's 16.52% completion rate and the 48% VA.gov platform average. Medallia verbatims put qualitative language on these cliffs: navigation and findability complaints ("hard to find COE," "rabbit holes," "invalid pages") describe the Introduction experience, while identity/login friction ("login.gov twice, CAC twice, photo of DL") describes the auth interleave that GA4 confirms via `/auth/login/callback/` appearing as the 7th most common pre-form page (108,946 users bouncing between auth and the intro).

**Reliability issues compound the entry-point problem for users who do push through.** Medallia reports 42 submission-error mentions and 43 upload-friction mentions — combined, the single largest blocker category by share. GA4 corroborates this with a 21.4% exit rate at document upload (~22,616 users) and a 5.3% technical failure rate on attempted submissions (4,326 of 81,931 attempts). The upload step also drives the multi-session pattern: 22,486 users need two or more sessions, consistent with verbatim reports of users leaving to find DD214s or retry after "JPEG not accepted" errors. Identity and session-state problems are cross-cutting here — several Medallia quotes describe submit failures that follow token refresh or identity-provider disagreement, a pattern GA4 cannot see without field-level instrumentation.

**Downstream of the web flow, COE data accuracy creates a second failure surface visible primarily in call-center data.** The call center shows 132 COE/eligibility cases (~9.4%) driven by missing DD214 records, discharge character not reflected in systems, portal/vendor errors returning incomplete COEs, and data mismatches (e.g., paid-off loans showing active). Medallia's smaller data-accuracy signal (9 mentions) confirms this pattern from the user side. These are not form-usability issues — they are back-end reconciliation and identity-data problems that no amount of front-end polish will fix, and they produce the highest-severity outcomes reported in any source: missed closings, veterans living in campers, and 100% service-connected veterans unable to retrieve a COE.

**Finally, service-channel handoffs are broken in ways that amplify every other issue.** Medallia reports 14 mentions of users being sent to 800-827-1000 and looped back to the website without resolution; call-center notes confirm the same loop from the other side ("simply referred me back to the website"). When web errors occur, veterans cannot escalate effectively — they cycle between channels. GA4 cannot see any of this, but the volume of 1880-sip-reminder ("save in progress reminder") traffic in the top campaigns suggests save-and-resume is already a major user behavior the product is designing around rather than eliminating root causes.

---

## 3) Pain points (with a specific fix recommendation for each)

### 1) Introduction-step abandonment (74.2% exit) — *task-blocking, highest volume, upstream of everything*

**Evidence (timeframe + frequency):**
- GA4 (Jan–Dec 2025): 459,740 viewers, 74.2% exit (~340,952 users lost at Step 1)
- Medallia (Jan–Dec 2025): 18 navigation/findability mentions (2.1%) describing "hard to find COE," "rabbit holes," and 404s on the intro and surrounding pages
- GA4 supporting signal: `/auth/login/callback/` = 7th most common pre-form page (108,946 users), indicating auth interleave at intro
- Completion-rate benchmark: 16.52% (Form 26-1880) vs. 48% (VA.gov platform avg.); modeling suggests halving intro exit would roughly double overall completions

**How to fix it (specific):**

Intro-page redesign with requirements-forward pattern:
1. Reduce content density on the Introduction page; move eligibility explanation and policy content to a collapsible or secondary page
2. Test a single dominant "Start your application" CTA above the fold against the current layout
3. Add a complete document checklist (DD214, NGB, marriage certificate, etc.) with file-format and size requirements *before* the user clicks into the form, so users don't start-then-abandon to gather papers
4. Separate authenticated-vs-unauthenticated intro-exit rates in analytics to isolate whether login friction is the driver or not
5. Audit the `/request-coe-form-26-1880/introduction/` vs. `/request-coe-form-26-1880/` split — landing counts (212K) and intro views (459K) suggest users are re-entering the intro repeatedly

**Representative quotes:**
- "Not easy to do a search and get to the COE." — Medallia (CSAT Comment, Loan limits flow)
- "Several pages were invalid… rabbit holes to find what I was looking for." — Medallia (CSAT Comment, How to request COE)

### 2) Submission errors (generic "can't submit" failures) — *task-blocking, blocks final step*

**Evidence (timeframe + frequency):**
- Medallia (Jan–Dec 2025): 42 submission-error mentions (4.9%); peaks in May (7), June (7), September (5)
- GA4 (Jan–Dec 2025): 4,326 failed submissions against 77,605 successful = **5.3% technical failure rate**; 7.5% exit at Review & Submit (~6,229 users)
- Analytics signal: no current breakdown of failures by error type, browser, auth state, or field — diagnosis is blocked by instrumentation

**How to fix it (specific):**

Submit-path reliability + diagnostic error handling:
1. Introduce idempotency keys and client-side retry queueing on the submit endpoint; add session-grace for token refresh at submit
2. Replace generic "We're sorry…" copy with diagnostic error handling (status, next step, known workarounds; auto-link back to saved draft)
3. Instrument the 4,326 failed submissions by error code, browser, device, and authentication state so failures can be segmented and fixed
4. Add submit-state telemetry (field completion, file presence, auth state, time-on-page at submit) to pinpoint failure clusters

**Representative quotes:**
- "Continue to get the same error… try again later—been trying every couple hours for the last 24 hours." — Medallia (CSAT Comment, Review & submit)
- "Spent over an hour uploading docs… click submit, lame error message, page closed." — Medallia (CSAT Comment, COE introduction)

### 3) VA Loan Screener drop-off (67.6% exit at Step 7) — *task-blocking, second-largest funnel cliff*

**Evidence (timeframe + frequency):**
- GA4 (Jan–Dec 2025): 106,762 viewers, 67.6% exit (~72,171 lost); downstream Step 8 exit rate is 0.0% (survivors sail through), confirming the screener itself is the wall
- Medallia: no direct theme match, but policy/program clarity (14 mentions) includes confusion about IRRRL, loan limits, and eligibility rules — consistent with suspicion-driven screener abandonment
- Analytics signal: no per-question exit tracking on Step 7; cannot currently distinguish "correctly filtering ineligible users" from "incorrectly turning away eligible ones"

**How to fix it (specific):**

Screener diagnosis + remediation:
1. Conduct usability testing with 8–10 veterans, prioritizing those with non-standard service histories (National Guard, reserves, multiple discharge events)
2. Add per-question exit instrumentation so specific questions driving abandonment can be identified
3. Add "Why we're asking this" inline explainers for each screener question to reduce suspicion-driven exits
4. Make the Save-and-Resume option prominent at this step (some exits are users leaving to verify loan details)
5. Audit the branching logic between Steps 7, 8, and 9 — the routing split (most users skip Step 8 entirely) is non-obvious and likely confusing

**Representative quotes:**
- "Why does the VA not publish daily updates for VA average interest rates?" — Medallia (CSAT Comment, IRRRL, illustrates policy confusion that may spill into screener abandonment)
- *(GA4 metric slice):* 106,762 viewed / 34,556 advanced to Step 8 — a 32% advance rate with near-zero downstream exit, confirming the screener is the barrier

### 4) Document upload friction (JPEG rejections, redundant requests, 21.4% exit) — *task-blocking for affected users*

**Evidence (timeframe + frequency):**
- Medallia (Jan–Dec 2025): 43 upload-friction mentions (5.0%) — largest single blocker category by share; peaks in August (8) and January (6)
- GA4 (Jan–Dec 2025): 105,684 viewers at Step 9, 21.4% exit (~22,616 users); upload page has 92,292 pre-form unique users, suggesting users preview requirements but still fail live
- Multi-session correlation: 22,486 users need 2+ sessions (15,982 at 2; 6,504 at 3+), highly consistent with upload abandonment

**How to fix it (specific):**

Validator normalization + evidence reuse:
1. Harmonize file validators server-side (authoritative checks, normalized iOS/mobile JPEG variants, clear limits surfaced before the user attempts upload)
2. Implement evidence reuse: pre-fill and auto-attach documents already verified in the veteran's VA profile, with provenance shown ("We already have your DD214 from [date]")
3. Add an upload checklist UI at the top of Step 9 (accepted types, size caps, multi-file guidance, inline remediation with rescan tips)
4. Add "email yourself a link to finish later" functionality explicitly for users leaving to retrieve documents
5. Run a mobile-specific UX audit on upload (45.2% of traffic is mobile; mobile document capture is the most common failure surface)

**Representative quotes:**
- "Even though it's a JPEG, the site… will not accept the format." — Medallia (CSAT Comment, Upload supporting documents)
- "I keep getting asked for the same document that I already uploaded; the email link does not work." — Medallia (CSAT Comment, Check COE Status)

### 5) COE data accuracy & DD214/discharge mismatches — *task-blocking, highest-severity outcomes, affects vulnerable populations*

**Evidence (timeframe + frequency):**
- Call Center (Jan–Jun 2025): 132 COE & Eligibility cases (~9.4%), primary driver in May–June 2025; includes 100% P&T veterans denied, veterans living in campers after missed closings
- Medallia (Jan–Dec 2025): 9 data accuracy mentions (1.1%) — COE showing paid-off loans as active, wrong names, missing disability updates
- Analytics signal: GA4 cannot see back-end reconciliation failures — this pain point is invisible in the funnel until it surfaces as a submission failure or a support call

**How to fix it (specific):**

"COE Fix-Desk" + automated reconciliation:
1. Stand up a dedicated cross-functional queue to correct identity/discharge data with a 72-hour decision or documented exception path
2. Nightly eligibility sync to reflect disability-rating updates and paid-off loan events; surface a "last updated" timestamp on the COE
3. Inline EDIPI helper explaining what it is, how to locate it, and alternatives to proceed; equip staff with a matching playbook
4. Publish a lender COE Health Dashboard with vendor status/outage advisories and workarounds so lenders aren't surprised by portal failures

**Representative quotes:**
- "100% P&T PTSD veteran—COE denial pending higher-level review, outcome decides whether the family keeps their home." — Call Center (Agent Note)
- "COE wasn't updated after disability rating." — Medallia (CSAT Comment, Confirmation)

### 6) Identity & login friction (auth interleave at intro + re-verification loops) — *high friction, cross-cutting*

**Evidence (timeframe + frequency):**
- Medallia (Jan–Dec 2025): 22 identity/login mentions (2.6%); primary issue in January (7 mentions)
- GA4 (Jan–Dec 2025): `/auth/login/callback/` is the 7th most common pre-form page (108,946 users), confirming auth interleave with the Introduction step
- Cross-source correlation: identity issues often cascade into submission failures (tokens expiring at submit) — Medallia verbatims describe both together

**How to fix it (specific):**

Session unification + EDIPI support:
1. Single-sign-on handshake with a clear "one-pass" expectation; suppress redundant ID.me / login.gov / CAC re-auth prompts
2. Inline EDIPI helper on forms that require it, with a visible "what to do if yours isn't showing" path
3. Separate authenticated-vs-unauthenticated intro-exit rates in analytics (currently not segmented) to quantify how much of the 74.2% intro exit is login-driven
4. Add session-state telemetry at submit to correlate auth drift with the 4,326 technical failures

**Representative quotes:**
- "Had to sign in with login.gov twice, CAC twice, then photo of DL." — Medallia (CSAT Comment, Confirmation)
- "Site… says missing EDIPI, call number; rep didn't know how to get it." — Medallia (CSAT Comment, Introduction)

### 7) Call-center / support loop (back-and-forth between channels without resolution) — *erodes trust, amplifies every other issue*

**Evidence (timeframe + frequency):**
- Medallia (Jan–Dec 2025): 14 support-loop mentions (1.9%)
- Call Center (Jan–Jun 2025): 19 Communication & Courtesy cases (~1.4%) describing robotic scripts, hang-ups, and ghosting
- Analytics signal: GA4 cannot see channel handoffs — this pain point is entirely invisible in funnel data

**How to fix it (specific):**

Escalation path + agent playbook:
1. Build an escalation path for COE exceptions with ticket handoff, SLAs, and a case ID surfaced in the UI so veterans don't re-explain their situation
2. Publish agent scripts and quick references for the top loop-inducing topics: EDIPI remediation, upload format issues, restore-eligibility steps
3. Courtesy standard + coaching (empathy scripts, no-disconnect rule, supervisor backstop) to address the crisis-moment failures documented in call notes
4. Require a "Servicer Response Clock" for servicer packet returns (≤14 days) with automatic escalation to a VA liaison on breach — addresses the adjacent loss-mitigation loop that shares the same root cause

**Representative quotes:**
- "Called… simply referred me back to the website." — Medallia (CSAT Comment, COE introduction)
- "Agent talked for five minutes without letting me speak, explained foreclosure condescendingly; panic attack ensued." — Call Center (Agent Note)

---

## 4) What to measure next (high value) to connect GA4 to root cause — and WHY (plain language)

Right now GA4 is telling us *where* people leave (Intro Step 1: 74.2% exit; Screener Step 7: 67.6% exit; Upload Step 9: 21.4% exit) and *that* submissions fail (4,326 of them). What it cannot tell us is *why* any of it happens. Every high-priority pain point in Section 3 currently relies on qualitative evidence from Medallia or call notes to explain a quantitative cliff — which means when we ship a fix, we won't know if it worked until the next round of verbatims comes in. The following measurement improvements convert analytics from descriptive to diagnostic and let the team A/B test fixes with confidence.

### A) Per-question exit tracking on the VA Loan Screener (Step 7)

**Why this matters:** Today we know 67.6% of users exit the screener but not *which question* makes them leave. A single confusing question could be responsible for most of the 72,000+ lost users. Per-question instrumentation would let us fix the specific question rather than rewriting the whole step on intuition.

**Directly ties to these pain points:**
- Pain point 3: VA Loan Screener drop-off
- Pain point 6: Identity & login friction (if an auth-related question is the culprit)

### B) Segmented submission-failure telemetry (error code, browser, device, auth state, field state)

**Why this matters:** 5.3% of all submission attempts fail technically. We don't currently know whether these are network timeouts, expired auth tokens, validation rejections on specific fields, or a browser-specific JavaScript bug. Without this breakdown, fixes are guesses. With it, the failure population becomes triageable: "37% of failures are Safari + expired login.gov tokens" is actionable; "4,326 failures" is not.

**Directly ties to:**
- Pain point 2: Submission errors
- Pain point 6: Identity & login friction

### C) Authenticated-vs-unauthenticated intro-exit segmentation

**Why this matters:** 108,946 users visit `/auth/login/callback/` on the way to the form, and verbatims describe users bouncing between auth and the intro. But we can't currently tell whether the 74.2% intro exit is dominated by users who failed to authenticate, users who chose not to authenticate, or users who authenticated and still left. These three populations need three different fixes.

**Directly ties to:**
- Pain point 1: Introduction-step abandonment
- Pain point 6: Identity & login friction

### D) Landing-page scroll-depth tracking (currently not configured — instrumentation gap)

**Why this matters:** The landing page has declining visitors (-9.8% WoW), and 21% of landing visitors leave without ever reaching the form. Scroll depth would tell us whether users are disengaging above the fold (messaging problem), mid-page (content-density problem), or near the CTA (CTA prominence problem). Without it, the 21% leave-without-visit rate has no actionable root cause.

**Directly ties to:**
- Pain point 1: Introduction-step abandonment (upstream of it)

### E) Field-level exit tracking on the Upload step (Step 9)

**Why this matters:** Upload abandonment (21.4%, ~22,616 users) is known to cluster around file-type rejections and redundant document requests, per Medallia. But GA4 currently cannot distinguish "left to find a document" from "tried to upload and was rejected." Adding file-event telemetry (upload attempt, validation result, file type attempted, error surfaced) would tell us whether the fix is a validator patch or a save-and-resume feature.

**Directly ties to:**
- Pain point 4: Document upload friction

### F) Exit-intent micro-surveys at Steps 1, 7, and 9

**Why this matters:** The 3.33/5 intercept survey rating is a random-prompt sample that under-represents the 83% of users who never complete. We're getting feedback primarily from completers, which biases every satisfaction signal upward. A one-question exit survey at the three cliff steps would give us direct "why I'm leaving" data from the population currently invisible to Medallia and intercept surveys alike.

**Directly ties to:**
- Pain point 1: Introduction-step abandonment
- Pain point 3: VA Loan Screener drop-off
- Pain point 4: Document upload friction

### If you only do 3 things (highest ROI)

1. **Segment the 4,326 failed submissions by error code, browser, device, and auth state.** This is the fastest diagnostic win available — it converts a known-bad population into a triageable one and immediately surfaces whether the root cause is auth, validation, or browser.
2. **Instrument per-question exit tracking on the VA Loan Screener (Step 7).** This is the second-largest lever in the entire funnel and currently opaque. Knowing which question kills the step lets you fix tens of thousands of lost users with a copy change rather than a redesign.
3. **Separate authenticated-vs-unauthenticated intro-exit rates.** The single largest cliff in the funnel has an unknown composition. This one segmentation tells you whether to invest in auth flow simplification, content reduction, or requirements-forward redesign — and keeps the team from solving the wrong problem.

Together, these three changes convert analytics from *descriptive* ("users leave here") to *diagnostic* ("users leave here because of X, in population Y, on device Z") — which is the prerequisite for testing any of the Section 3 fixes with confidence.
