# Apply for Personalized Career Planning & Guidance (PCPG, Chapter 36) — 2025 Executive Summary

[Full analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/education-career-counseling/2026/painpoints/Ch36_2025_CombinedSourcesFindings.md)

## Satisfaction & Success

* **CSAT:** 70% satisfied (rated 4–5 out of 5), n=27   
* **Task success (self-reported):** 55% said they completed their task (source: Medallia survey)   
* **Data sources:** Medallia (Jan 2–Dec 30, 2025), GA4 via Domo (Jan 1–Dec 31, 2025), Forms KPIs (Aug 31–Dec 31, 2025) 

---

## Top 5 Pain Points (Why People Fail)

### 1. Early required steps drive exits
**What’s happening:** Steps 1 and 2 have severe drop‑offs (65.86% and 67.31%), often due to unclear eligibility and guidance.   
**Impact:** Applicants fail before entering core information and cannot progress toward applying for PCPG benefits.   
**Fix:** Add a pre‑start checklist, “Should I apply?” helper, and clearer inline examples and validation. 

### 2. Claimant Address page is blank, cut off, or crashes
**What’s happening:** Users encounter blank or broken Address pages; Step 3 abandonment is 63.79% with ~10 mentions.   
**Impact:** Applicants cannot provide address details and are forced to abandon the application.   
**Fix:** Add page‑health detection, fallback minimal address form, and autosave before transitions. 

### 3. Submission fails (“try again” / kicked out)
**What’s happening:** Final submission often errors with “try again” or logs users out, with no tracked error states.   
**Impact:** Applicants believe their application failed and abandon or retry, risking duplicates.   
**Fix:** Implement idempotent submissions, readable error codes, and a single confirmation page. 

### 4. Save & Resume doesn’t reliably preserve progress
**What’s happening:** Drafts are sometimes lost or cannot be reopened, with weak multi‑session recovery support.   
**Impact:** Users who pause their application must restart or drop off entirely.   
**Fix:** Autosave frequently, provide a drafts dashboard, and track resume‑related events. 

### 5. Mobile form interactions break focus/validation
**What’s happening:** Mobile sessions (0–8.83%) show fragile validation and focus behavior that worsens errors.   
**Impact:** Mobile applicants struggle to enter data or fix errors, increasing abandonment even at low traffic share.   
**Fix:** Improve mobile-first behavior with clearer validation, larger tap targets, and accessible error states. 
