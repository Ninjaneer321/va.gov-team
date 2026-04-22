# VA.gov Veteran Status Card (VSC) — 2025 Executive Summary

[Full analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/Research/2026/VSC_2025_CombinedSourcesFindings.md)


## Satisfaction & Success

* **CSAT:** 53% satisfied (rated 4–5 out of 5), n=212 (Aug–Dec 2025)   
* **Task success (self‑reported):** Not available; Medallia data did not include a task‑completion metric for VSC during Jul–Dec 2025   
* **Data sources:** Medallia surveys (Jul 10–Dec 31, 2025), Call center cases (Jan 6, 2025–Jan 10, 2026), GA4 analytics (Jan 1–Dec 31, 2025)   


## Top 5 Pain Points (Why People Fail)

### 1. Discharge status error blocks the card  
**What's happening:** Users see “problem with your discharge status” and cannot access or print the VSC, with the error persisting for months.   
**Impact:** This is the top task‑blocker—41.7% of call‑center cases and many survey comments—preventing veterans from obtaining proof of status.   
**Fix:** Add an in‑product “Resolve Discharge Status” flow with evidence upload, DMDC/archives sync, and visible status tracking.   

### 2. Incorrect or missing service data  
**What's happening:** Some veterans see wrong or incomplete service dates, branch, or rating, which stops them from trusting or using the card.   
**Impact:** Seen in ~8% of Medallia feedback and ~8.6% of call‑center cases, blocking those whose records don’t match official data.   
**Fix:** Add a “Report a data mismatch” tool, align source‑of‑truth systems, and display last‑updated timestamps.   

### 3. Hard to find the card (discoverability & navigation)  
**What's happening:** Only 2.59% of sessions reach the VSC page, with an 88.5% drop from Profile to VSC; users say they “go in circles.”   
**Impact:** Many never even begin the task due to weak wayfinding from Profile and Military Information.   
**Fix:** Create a VSC hub with persistent CTAs and clearer navigation, exposing critical actions without accordion friction.   

### 4. Print flow fails or stalls  
**What's happening:** A 16% drop occurs after clicking print due to dialog, PDF, or browser friction.   
**Impact:** Users ready to complete the task cannot generate a printable card or get alternatives.   
**Fix:** Instrument print failure reasons, pre‑warm PDF generation, and offer fallback options like email, wallet, or mailed copy.   

### 5. App/web mismatch and identity friction  
**What's happening:** App and browser show different card states, and users get stuck in sign‑in or verification loops.   
**Impact:** About 9–10% of call‑center cases involve identity or platform inconsistency, causing confusion and abandonment.   
**Fix:** Align API behavior across app/web, surface LOA requirements earlier, and add a post‑verification health check.   
