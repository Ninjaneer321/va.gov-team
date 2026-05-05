# **Paperless Delivery – Structured Findings: Go Paperless Settings**

## Executive Summary  
The call‑center dataset contains **one** resolved case (Closed) on **April 22, 2025** in which a veteran attempted to enable paperless delivery for VA letters but could not find the setting, resulting in referral to other channels. **No CSAT was captured**, so satisfaction is unknown for this interaction; per the universal rules, CSAT metrics are **not computable** for this dataset.   
Completion appears **unsuccessful/deflected**: the agent suggested checking **Profile** settings and then referred the veteran to **My HealtheVet** and the **local VA** rather than completing the task within the call.   
Primary pain points include **discoverability of Paperless Mail Settings**, **cross‑channel ownership confusion**, and **privacy concerns** (letters containing the veteran’s **full SSN**, name, and address).   
**Data Range:** Call‑center transcripts — **April 22, 2025 (1 case)**. 

### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Discoverability of Paperless Settings  
5. Category 2: Cross‑Channel Ownership & Deflection  
6. Category 3: Privacy & PII Exposure Concerns  
7. Category 4: Scope & Coverage (Appointments & Hotline Letters)  
8. Recommendations – Consolidated Priority Table  
9. Appendix: Data Overview, Metrics & Trends


## 1. Top‑Level Findings (Ranked by Relevance & Criticality)

1. **Discoverability of “Paperless Mail Settings”** — **1/1 case (100%)**: The veteran could not locate the paperless toggle; the agent’s guidance (“check Profile settings”) did not resolve the task within the call.   
2. **Cross‑channel confusion (My HealtheVet ↔ Local VA)** — **1/1 case (100%)**: The customer was bounced between My HealtheVet and local VA contact points, indicating unclear ownership of the paperless capability.   
3. **Sensitive PII in mailed letters (full SSN)** — **1/1 case (100%)**: The veteran’s urgency to go paperless was driven by privacy risk from letters that include full SSN, name, and address.   
4. **Scope ambiguity for paperless coverage** — **1/1 case (100%)**: It is unclear whether appointment letters and hotline‑triggered letters are eligible for paperless delivery. 


## 2. Customer Satisfaction Table

| Dataset | Inclusion Filter Applied | CSAT Availability | % Satisfied (4–5) | Median Score | Data Range | Notes |
|---|---|---:|---:|---:|---|---|
| Call‑center transcripts | Case pertains to **Paperless Mail Settings** (case_type=Profile; case_category=Navigation Issues; subject indicates paperless) | **No** | **N/A** | **N/A** | **Apr 22, 2025** | Single closed case; satisfaction not recorded.  |

**CSAT methodology applied:**  
We attempted to compute satisfaction using the provided rules: include only rows with non‑null numeric CSAT on a 1–5 scale for the relevant product/domain; % satisfied = count of {4,5} / count of {1–5}; monthly CSAT uses the same filter plus median and top issue per month. **Because this dataset lacks CSAT, all CSAT fields are not applicable (N/A).** 


## 3. Issue Category Breakdown

**Mentions / Volume (all Paperless Delivery–related call‑center cases; categories are non‑exclusive):**  
- **Discoverability of Paperless Settings** — **1** (**100%**)   
- **Cross‑Channel Ownership & Deflection** — **1** (**100%**)   
- **Privacy & PII Exposure Concerns** — **1** (**100%**)   
- **Scope & Coverage (Appointments & Hotline Letters)** — **1** (**100%**) 


## 4. Category 1: Discoverability of Paperless Settings  
**Mentions / Volume:** **1/1 (100%)**.   
**Description:** The veteran explicitly sought a way to “go paperless” on the VA website but could not find a setting or pathway. The agent recommended checking **Profile settings**, yet the call did not produce a completed outcome, implying the setting is either absent, mislabeled, or insufficiently surfaced.   
**Representative quotes:**  
• “Veteran wanted to go paperless.”   
• “He wanted to know if there was a way on the VA website to go paperless.”   
• “Agent let the veteran know that he can go to his profile setting and check.”   
**Impact:** Users attempting to reduce physical mail—especially those motivated by privacy concerns—experience **task failure**, prolonged search, and deflection to other channels; this increases call volume and undermines trust in digital self‑service.   
**Temporal or segment patterns:**  
| Date | Pattern |  
|---|---|  
| **Apr 22, 2025** | Single case; discoverability failure observed.  |  
**Critical Observations:**  
- The pathway to “Paperless Delivery” is not findable from the veteran’s perspective and not confidently known by frontline agents.   
- The term “Paperless Mail Settings” may be absent or buried; agent instruction to “check Profile” suggests **labeling/placement** issues rather than a clear, action‑oriented CTA.   
- Ticket closed without an in‑call resolution, reinforcing a **discoverability gap**.   
**Recommendations:**  
- Introduce a **top‑level “Go Paperless” CTA** in Profile with plain language and guidance about eligible communications.   
- Add contextual **inline education** (“What goes paperless?”) near the toggle to prevent uncertainty.   
- Implement **task‑completion telemetry** (e.g., clicks on toggle, confirmation flows) to detect failure points and future CSAT capture. 


## 5. Category 2: Cross‑Channel Ownership & Deflection  
**Mentions / Volume:** **1/1 (100%)**.   
**Description:** The veteran contacted **My HealtheVet**, which “was not sure” how to enable paperless; in the call, the agent then referred the veteran to the **local VA** (PACT team or enrollment coordinator). This indicates non‑aligned knowledge bases and unclear ownership of the paperless capability across properties.   
**Representative quotes:**  
• “Veteran reached out to My HealtheVet and they were not sure how to go paperless.”   
• “Agent … referred the Veteran to contact his local VA and ask someone in his pact team or the enrollment coordinator.”   
**Impact:** Cross‑channel deflection increases effort, prolongs resolution time, and undermines the promise of digital self‑service. It likely drives repeated contacts and adds operational load across phone and in‑person channels.   
**Critical Observations:**  
- Ownership of **Paperless Delivery** appears fragmented; frontline systems and scripts do not equip agents with definitive steps.   
- The referral chain (My HealtheVet → local VA) suggests **inconsistent capability** or a gap in inter‑property documentation.   
**Recommendations:**  
- Establish a **single owner** and canonical guidance for paperless enrollment; publish a **cross‑property KB** article and agent script with step‑by‑step resolution.   
- Create **warm transfer** protocols (if escalation is required) to reduce drop‑off and churn across channels. 


## 6. Category 3: Privacy & PII Exposure Concerns  
**Mentions / Volume:** **1/1 (100%)**.   
**Description:** Motivation to go paperless is rooted in **privacy risk**—letters currently contain **full SSN**, name, and address, creating anxiety and potential exposure.   
**Representative quotes:**  
• “He receives a lot of mail that has his full SSN, name and address.”   
**Impact:** Persisting with physical letters that include sensitive PII increases **risk of mishandling** and prompts urgent demand for digital alternatives; failure to meet this need erodes confidence.   
**Critical Observations:**  
- Paper mail content is a **driver** of digital adoption; privacy mitigation should be **part of the UX value proposition** for paperless.   
**Recommendations:**  
- Conduct a **PII audit** of mailed templates; mask/omit full SSN wherever feasible and communicate privacy protections in the UI near the paperless toggle.   
- Provide clear **security messaging** (“Reduce mail that contains sensitive details”) to align with user motivations. 


## 7. Category 4: Scope & Coverage (Appointments & Hotline Letters)  
**Mentions / Volume:** **1/1 (100%)**.   
**Description:** The veteran specifically cited letters about **upcoming appointments** and letters generated when calling the **VA hotline**; the dataset reflects uncertainty about whether these communications are eligible for paperless delivery.   
**Representative quotes:**  
• “The letters are about appointments that are upcoming or whenever he calls the VA hotline.”   
**Impact:** Ambiguity about coverage causes hesitation and **repeat contacts**, slowing adoption. If paperless excludes key letter types, the perceived value diminishes.   
**Recommendations:**  
- Publish a **coverage matrix** in‑product (e.g., “What goes paperless?” with a list of included/excluded letter types and expected delivery timelines).   
- Add **confirmation UI** after enrollment summarizing which communications will switch to paperless and how to revert. 


## 8. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | Ship a prominent **“Go Paperless” CTA** in Profile with plain‑language copy and an eligibility explainer. | Discoverability of Paperless Settings | Highest: reduces task failure and immediate deflection. |
| **P0** | Establish **single ownership** + unified **KB & agent script** across VA properties; add warm‑transfer pathways. | Cross‑channel confusion & deflection | High: improves first‑contact resolution, lowers repeat calls. |
| **P1** | **PII content audit** of mailed letters; mask SSN; message privacy benefits in the UI. | Privacy & PII exposure concerns | High: mitigates risk and strengthens paperless value proposition. |
| **P1** | Publish an in‑product **coverage matrix** for appointments/hotline letters; confirm post‑enrollment. | Scope ambiguity | Medium–High: clarifies expectations, increases adoption confidence. |
| **P2** | Introduce **CSAT capture** and **task‑completion telemetry** for paperless interactions (calls & self‑service). | Measurement gaps | Medium: enables trend tracking and targeted improvements. |


## 9. Appendix: Data Overview, Metrics & Trends

**Data Overview**  
- **Dataset:** PaperlessDelivery_2025_CallCenter.csv (call‑center transcript).   
- **Total cases:** **1**; **Status:** Closed.   
- **Date:** **April 22, 2025**.   
- **CSAT:** Not recorded; satisfaction not computable per rules.   

**Theme & Task Counts**  
- **Navigation / Discoverability (Paperless Settings): 1**.   
- **Cross‑channel ownership & deflection: 1**.   
- **Privacy & PII exposure concerns: 1**.   
- **Scope ambiguity (appointments/hotline letters): 1**.   

**Trends**  
- Single‑day observation; no temporal trend available.   

**Representative Quotes**  
• “Veteran wanted to go paperless.”   
• “He receives a lot of mail that has his full SSN, name and address.”   
• “Veteran reached out to My HealtheVet and they were not sure how to go paperless.”   
• “Agent … referred the Veteran to contact his local VA and ask someone in his pact team or the enrollment coordinator.” 

END OF REPORT
