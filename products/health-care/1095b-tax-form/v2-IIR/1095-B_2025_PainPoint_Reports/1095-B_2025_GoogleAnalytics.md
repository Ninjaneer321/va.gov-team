# VA.gov – Structured Findings: 1095-B Download Experience (GA4 Analytics)


## Executive Summary  
Between **March 15, 2026 – April 13, 2026**, the 1095-B download experience generated **~60K views and ~43K sessions**, indicating strong seasonal demand driven by tax-related needs. Engagement is moderate (**~49 seconds average engagement time**), but performance is impacted by **high error visibility and friction in form retrieval**. Notably, **~8% of tracked events reflect system or availability issues** (e.g., “forms not found,” system errors, download failures), signaling reliability gaps.  

Download behavior shows a strong preference for **PDF formats (~90%+ of download interactions)**, with minimal engagement for accessible text formats, suggesting either low awareness or discoverability issues. Additionally, **navigation patterns indicate heavy reliance on search and external entry points (e.g., Google)**, implying weak findability within the VA.gov ecosystem.  

Overall, while **task intent is clear and demand is high**, the experience is hindered by **system reliability issues, navigation inefficiencies, and limited accessibility engagement**.  


## Table of Contents  
1. Top-Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: System Errors & Form Availability Failures  
5. Category 2: Navigation & Findability Friction  
6. Category 3: Download Behavior & Format Preferences  
7. Recommendations – Consolidated Priority Table  
8. Appendix: Data Overview, Metrics & Trends  


## 1. Top-Level Findings (Ranked by Relevance & Criticality)  

1. **System Errors & Form Availability Issues — ~8% of tracked events (3,793 events)**  
   Users frequently encounter “forms not found,” system errors, or download failures, directly blocking task completion.  

2. **Navigation & Findability Friction — High reliance on external search and indirect entry paths (~24% via Google/referrals)**  
   Users struggle to reach the page through intuitive site navigation, instead relying on search engines or VA search.  

3. **Strong PDF Preference with Low Accessibility Format Engagement — ~92% of downloads are PDFs**  
   Text-based accessible formats are underutilized, suggesting discoverability or labeling issues.  


## 2. Customer Satisfaction Table  

**CSAT not available in this dataset.**  
As a result, satisfaction is inferred through behavioral proxies such as error rates, engagement time, and completion signals.


## 3. Issue Category Breakdown  

### Category 1: System Errors & Form Availability Failures  

**Mentions / Volume:**  
- Total tracked system-related events: **3,793**  
  - Forms found: 33,663  
  - Forms not found: 2,872  
  - System errors: 251  
  - PDF download errors: 670  

**Description:**  
A significant portion of users encounter issues retrieving their 1095-B forms. Failures include forms not being available, system-level errors, and download failures. These issues represent direct blockers to task completion and disproportionately impact users with urgent tax-related needs.

**Representative metrics:**  
- Forms not found: **2,872 events (~7.9%)**  
- System errors: **251 events**  
- PDF download errors: **670 events**  

**Impact:**  
Users are unable to complete their primary goal—downloading their tax document—leading to repeated attempts, increased support burden, and potential abandonment. Given the time-sensitive nature of tax filing, these failures likely result in high frustration.

**Temporal or segment patterns:**  

| Event Type               | Volume | Relative Share |
|------------------------|--------|---------------|
| Forms found            | 33,663 | ~89%          |
| Forms not found        | 2,872  | ~7.6%         |
| Download/system errors | 921    | ~2.4%         |

**Critical Observations:**  
- “Forms not found” is the dominant failure mode, suggesting eligibility, timing, or backend data issues.  
- Download errors indicate instability even after successful form retrieval.  
- Errors occur across the funnel, not just at entry.  

**Recommendations:**  
- Improve backend reliability and form availability validation.  
- Provide clear fallback guidance when forms are unavailable.  
- Instrument error-specific diagnostics to isolate root causes.  


### Category 2: Navigation & Findability Friction  

**Mentions / Volume:**  
- Total views: **60,347**  
- Top referrer: Google (**14,465 views ~24%**)  
- VA search traffic and internal navigation also significant  

**Description:**  
Users frequently arrive via search engines rather than direct navigation. This indicates that the 1095-B experience is not easily discoverable through intuitive pathways within VA.gov.

**Representative metrics:**  
- Google referrals: **14,465 views (~24%)**  
- VA search usage includes terms like “1095,” “1095-B,” and “tax form”   

**Impact:**  
Users expend additional effort locating the correct page, increasing time-to-task and cognitive load. This also introduces risk of misinformation or navigation loops.

**Temporal or segment patterns:**  

| Entry Source           | Views  |
|----------------------|--------|
| Google               | 14,465 |
| VA Search            | High   |
| Records / VA pages   | Moderate |

**Critical Observations:**  
- Heavy reliance on external search indicates weak internal IA.  
- Users search for “1095” and “tax forms,” suggesting mental model mismatch with navigation labels.  
- Multiple fragmented entry points create inconsistency in experience.  

**Recommendations:**  
- Improve internal linking and prominence during tax season.  
- Align page naming with user search language (“tax forms,” “1095-B”).  
- Add contextual entry points across high-traffic VA pages.  


### Category 3: Download Behavior & Format Preferences  

**Mentions / Volume:**  
- Total download interactions: **~41,827 (2025 PDF alone)**  

**Description:**  
Users overwhelmingly prefer PDF downloads, with minimal engagement with text-based accessible formats. While PDFs meet the needs of most users, the lack of engagement with accessible formats suggests discoverability or comprehension issues.

**Representative metrics:**  
- 2025 PDF downloads: **41,827**  
- 2025 text file downloads: **4,171 (~9%)**  
- Older year downloads drop off significantly  

**Impact:**  
Accessibility needs may not be fully supported if users are unaware of or unable to find alternative formats. This could disproportionately impact users relying on assistive technologies.

**Temporal or segment patterns:**  

| Format Type  | Downloads | Share |
|--------------|----------|-------|
| PDF (2025)   | 41,827   | ~90%  |
| Text (2025)  | 4,171    | ~9%   |
| Older forms  | <5% each | Low   |

**Critical Observations:**  
- Strong preference for current-year documents.  
- Accessible format usage is low relative to expected need.  
- Labeling (“best for screen readers…”) may not be sufficient to drive usage.  

**Recommendations:**  
- Improve visibility and placement of accessible formats.  
- Test alternative labeling (e.g., “Accessible version”).  
- Consider defaulting or prompting users based on accessibility settings.  


## 7. Recommendations – Consolidated Priority Table  

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|----------|----------------|-----------------|------------------|
| **P0** | Fix backend reliability for form retrieval and reduce “forms not found” errors | System Errors & Availability | High |
| **P0** | Implement clear error messaging with next steps (eligibility, timing, support) | System Errors | High |
| **P1** | Improve internal navigation and add prominent entry points during tax season | Findability | High |
| **P1** | Align labeling with user mental models (“Tax forms,” “1095-B”) | Findability | Medium–High |
| **P1** | Improve download reliability and error handling | System Errors | High |
| **P2** | Enhance visibility and clarity of accessible text formats | Format Usage | Medium |
| **P2** | Analyze eligibility mismatches causing “forms not found” events | System Errors | Medium |


## Appendix  

### Data Overview  
- **Dataset:** GA4 Analytics (VA.gov Production)  
- **Date Range:** March 15, 2026 – April 13, 2026  
- **Total Views:** 60,347  
- **Total Sessions:** 43,318  
- **Avg Engagement Time:** ~49 seconds  
- **Tracked Events:** ~37K+ relevant interactions  

### Theme & Task Counts  
- Form retrieval success: **~89%**  
- Form retrieval failure: **~8%**  
- System/download errors: **~2–3%**  

### Trends  
- High demand concentrated in tax season window  
- Strong skew toward current-year form downloads  
- Persistent reliance on search (internal + external)  

### Representative Metrics  
- “Forms not found” events: 2,872  
- Google-driven sessions: ~24% of traffic  
- PDF downloads dominate (~90% of interactions)  
