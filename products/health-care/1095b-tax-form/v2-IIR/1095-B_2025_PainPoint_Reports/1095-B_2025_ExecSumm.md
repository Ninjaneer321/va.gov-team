# 1095-B Tax Form Download Flow — 2025 Executive Summary

Full analysis: https://github.com/department-of-veterans-affairs/va.gov-team/blob/80312a25b8c89b56870b49d7ffc2310f1403540b/products/health-care/1095b-tax-form/v2-IIR/1095-B_2025_PainPoint_Reports/1095-B_2025_CombinedSourcesFindings.md

## Satisfaction & Success

* CSAT: 72.7% satisfied (rated 4–5 out of 5), n=44
* Task success (self-reported): 72.7% said they completed their task (source: Medallia survey, April–December 2025)
* Data sources: Medallia surveys (April 9–December 30, 2025), Call center cases (March 6–December 15, 2025), GA4 analytics (January–December 2025)

## Top 5 Pain Points (Why People Fail)

1. **"No form found" silent failures block 21% of authenticated users**

What's happening: Veterans sign in successfully but encounter a blue alert saying their 1095-B form is unavailable, with no explanation of why or when it will be ready.  
Impact: 3,263 blue-alert events across six months prevent veterans from completing their tax filing, with 20–25% of download-step abandonment caused by this silent dead-end.  
Fix: Redesign the alert to explain causation ("Your 2025 form will be available by [date]. Why the delay? [Learn about IRS timelines]"), add an "email me when available" opt-in, and surface availability status on the hub page before users click through.

2. **ID.me camera/smartphone requirement blocks older and offline veterans**

What's happening: Identity verification mandates smartphone or camera use, which 9.1% of survey respondents report prevents access, including a 70-year-old without modern devices.  
Impact: Veterans without cameras or who cannot use video verification are permanently locked out of their accounts; 771 verified users hit authorization errors with no recovery pathway.  
Fix: Provide camera-free alternatives (mail-in verification, in-person at VA facilities, knowledge-based Q&A) and pre-check EDIPI on page load to catch missing credentials before download click.

3. **December system performance collapse causes 5.6× latency regression and errors**

What's happening: The `available_forms` endpoint latency jumped from 48ms average to 273ms in December, with error rate spiking to 1.5%, during a 15× increase in traffic (23,511 December sessions vs. 1,570 in July).  
Impact: Pages timeout or fail during peak tax season (December 15–31), when veterans most need to file taxes; error rate and latency were not monitored in advance.  
Fix: Add SLO alerting for latency >100ms and error rate >0.5%, implement endpoint caching (per-user, 24-hour TTL), and pre-scale backend capacity 10× starting December 1st.

4. **Authentication and login friction stops veterans before download**

What's happening: 2,546 EDIPI authorization errors occur annually; veterans face raw 401 error messages ("User does not have valid EDIPI"), MFA resets, and no pre-sign-in validation on the page.  
Impact: 42.9% of call center cases involve sign-in issues; 25–30% of page visitors abandon at login before ever reaching the download button.  
Fix: Gate download buttons behind client-side authentication check on page load, replace raw errors with veteran-facing language, and send January pre-access email campaign to reset MFA and confirm access before April tax season demand.

5. **Navigation and discovery gaps cause users to get lost**

What's happening: Users report the site is a "maze" with confusing acronyms (VHIC, EDIPI, LOA 3, SSO); 28.6% of call center cases required agent guidance to locate the 1095-B download; 8,878 self-referral sessions (15.8% of traffic) indicate retry loops.  
Impact: Veterans take longer to find the form, retry multiple times, or call support instead of self-serving; only 0.53% of `/records/` hub visitors ever arrive at the 1095-B page.  
Fix: Create a dedicated tax documents hub at `/records/download-your-irs-1095-b` with one-click download, replace acronyms with plain language + linked glossary, and add prominent "IRS 1095-B" card on the main `/records/` hub.
```
