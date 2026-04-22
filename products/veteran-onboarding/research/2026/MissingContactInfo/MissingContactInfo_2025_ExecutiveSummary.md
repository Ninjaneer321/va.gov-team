# Contact Information Update (Missing Contact Info flow) — 2025 Executive Summary

[Full analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research/2026/MissingContactInfo/MissingContactInfo_2025_CombinedSourcesFindings.md)


## Satisfaction & Success

* **CSAT:** 29.4% satisfied (rated 4–5 out of 5), n=327   
* **Task success (self-reported):** Not reported for this flow in 2025 (source: Medallia)   
* **Data sources:** Medallia surveys (Feb 7–Dec 31, 2025), Call center cases (Jan 2–Jul 18, 2025), GA4 analytics (Jan 1–Dec 31, 2025) 


## Top 5 Pain Points (Why People Fail)

### 1. Save/confirmation fails (“We can’t update right now”)  
**What's happening:** Users encounter persistent errors when saving updates, and changes don’t stick.   
**Impact:** Accounts for ~11% drop at save with 824 Medallia mentions and 74 call-center cases; veterans cannot update critical contact info.   
**Fix:** Make saves transactional and confirmed in a single step with persistent state and preserved input on error. 

### 2. Edit-step friction (mobile-heavy)  
**What's happening:** The edit step loses ~19.3% of users, with mobile/tablet abandonment far higher than desktop.   
**Impact:** Users struggle with mobile form ergonomics and validation issues, leading to widespread task failure.   
**Fix:** Redesign forms mobile-first with larger tap targets, clearer inline errors, and field‑level telemetry. 

### 3. Valid emails and addresses are rejected  
**What's happening:** APO/FPO, international addresses, and valid emails fail validation.   
**Impact:** 610 Medallia mentions indicate users cannot enter or save accurate contact details.   
**Fix:** Use international-aware validation libraries and accept global address and email formats. 

### 4. International phone numbers are rejected  
**What's happening:** Only US phone numbers are accepted; overseas formats are blocked.   
**Impact:** 239 Medallia mentions plus call logs show overseas veterans cannot add phone numbers or receive verification codes.   
**Fix:** Add country selector and support E.164 phone number formats with SMS/voice options. 

### 5. “Mobile required” blocks people without cell phones  
**What's happening:** The form forces users to provide a mobile number with no landline or alternative option.   
**Impact:** 142 Medallia mentions show elderly, disabled, and rural users are prevented from completing updates.   
**Fix:** Allow landline numbers and alternative verification like voice or email OTP. 
