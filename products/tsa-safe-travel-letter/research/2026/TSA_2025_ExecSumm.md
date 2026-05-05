# VA.gov TSA Safe Travel Letter — 2025 Executive Summary

[Full analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tsa-safe-travel-letter/research/2026/TSA_2026_CombinedFindings.md)


## Satisfaction & Success

- **CSAT:** Not available — pre-launch (no 4–5 ratings collected), n=0
- **Task success (self-reported):** Not available — Medallia survey data not yet collected
- **Data sources:** Usability testing (Jun–Aug 2025), Staging review artifacts (Dec 2025)


## Top 5 Pain Points (Why People Fail)

### 1. Mailing address gate blocks access
**What's happening:** Veterans without a current mailing address are blocked from accessing any letters, including the TSA letter.  
**Impact:** This prevents Veterans experiencing homelessness or housing instability from downloading the TSA PreCheck document they need.  
**Fix:** Remove the mailing‑address requirement and add messaging clarifying the letter is available without an address.

### 2. Silent eligibility suppression
**What's happening:** Ineligible Veterans see no TSA letter and receive no explanation.  
**Impact:** Users assume the system is broken and contact support because the absence of the letter is not explained.  
**Fix:** Add an eligibility alert explaining criteria, why a letter may not appear, and what to do next.

### 3. Extreme latency + bottom‑of‑list placement
**What's happening:** The TSA letter loads 20–30 seconds after the page renders and is placed at the bottom of a long accordion.  
**Impact:** Many users never see the letter because they think the page is complete and do not scroll far enough.  
**Fix:** Move the TSA letter higher on the page, add a loading indicator, and prioritize backend latency fixes.

### 4. Accessibility failures
**What's happening:** Assistive‑technology users struggle with accordions and alerts, and the TSA letter has not undergone any AT‑specific testing.  
**Impact:** Veterans using screen readers or keyboard navigation cannot reliably access or download the letter.  
**Fix:** Conduct AT testing, ensure proper ARIA labels, and add a skip link or keyboard shortcut to the TSA letter section.

### 5. Findability & naming comprehension
**What's happening:** Users take inconsistent routes to find letters, and the title “Safe Travel” does not clearly indicate TSA PreCheck eligibility.  
**Impact:** Users misinterpret the letter’s purpose and often abandon the task before locating it.  
**Fix:** Rename the letter to “TSA PreCheck Eligibility Letter,” add plain‑language purpose text, and include relevant search synonyms.
