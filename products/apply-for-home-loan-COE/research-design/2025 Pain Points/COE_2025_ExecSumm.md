# VA Certificate of Eligibility (COE) Flow — 2025 Executive Summary

Full analysis: [COE_2025_CrossSource_Synthesis.md](./COE_2025_CrossSource_Synthesis.md)


## Satisfaction & Success

- **CSAT:** 80.8% satisfied (rated 4–5 out of 5), n=499
- **Task success (self-reported):** ~53% satisfied with experience on Form 26-1880 (intercept survey, n varies; median 4/5) — note: Medallia does not publish a direct self-reported task-completion metric for this flow, so the intercept survey experience rating is the closest available signal
- **Data sources:** Medallia surveys (Jan–Dec 2025), Call center cases (Jan–Jun 2025), GA4/Domo analytics (Jan–Dec 2025)


## Top 5 Pain Points (Why People Fail)

### 1. Three-quarters of users abandon at the Introduction step

**What's happening:** Of 459,740 users who open the COE form's Introduction page, 74.2% leave before clicking into Step 2.
**Impact:** This single cliff drives most of the gap between COE's 16.52% completion rate and the 48% VA.gov platform average — roughly 340,000 lost applications per year.
**Fix:** Redesign the Introduction page to reduce content density, strengthen a single "Start your application" CTA above the fold, and show document requirements before the user commits.

### 2. "Can't submit" errors and technical failures at the final step

**What's happening:** Users get generic "We're sorry… can't submit your request right now" errors at Review & Submit, and 5.3% of attempted submissions fail technically (4,326 of 81,931 attempts).
**Impact:** Veterans who complete every other step still can't finish; many retry for hours or days, delaying loan approvals and closings, and escalating to the call center.
**Fix:** Add idempotent retries and session-grace for token refresh at submit, replace generic errors with diagnostic messages, and segment the 4,326 failures by error code and browser to triage root causes.

### 3. Two-thirds of users abandon at the VA Loan Screener

**What's happening:** Of 106,762 users who reach Step 7 (eligibility questions), 67.6% exit the form entirely — while users who survive the screener have a 0.0% exit rate on the next step.
**Impact:** Roughly 72,000 users per year leave at this single step, and we cannot currently tell whether they're correctly ineligible or incorrectly turned away by confusing questions.
**Fix:** Usability-test Step 7 with veterans who have non-standard service histories, add "Why we're asking this" explainers on each question, and instrument per-question exit tracking.

### 4. Document uploads get rejected or demanded repeatedly

**What's happening:** Valid files (including JPEGs and DD214s) are rejected as "wrong file type," and veterans are asked to re-upload documents already on file in their VA profile.
**Impact:** 43 Medallia complaints and 21.4% exit at Step 9 (~22,600 users) — upload friction also drives the multi-session pattern, with 22,486 users needing 2+ sessions to complete.
**Fix:** Normalize file validation server-side (including iOS JPEG variants), pre-fill documents already verified in the veteran's profile, and surface accepted formats and size limits before upload.

### 5. COE data errors block eligibility for the most vulnerable veterans

**What's happening:** The issued COE shows paid-off loans as active, reflects wrong names, or misses disability-rating updates and DD214/discharge-character changes — sometimes for 100% service-connected veterans.
**Impact:** 132 call center cases (~9.4%) and the highest-severity outcomes in any source — missed closings, veterans reported living in campers, families at risk of losing homes.
**Fix:** Stand up a 72-hour "COE Fix-Desk" for identity and discharge corrections, and run a nightly eligibility sync with a visible "last updated" timestamp on every COE.
