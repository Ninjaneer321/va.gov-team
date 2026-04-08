# **VA.gov Profile & VA Mobile App – Structured Findings: Veteran Status Card & Military Information**

## **Executive Summary**
Across **Jan 6, 2025–Jan 10, 2026**, call‑center transcripts show that **41.7%** of escalations (73 of 175 relevant cases) stem from the recurring **“We’re sorry—there’s a problem with your discharge status records”** error, which blocks access to the Veteran Status Card and related tasks such as obtaining a VIC. **VIC application access/upload failures** represent another **14.3%**, and identity partner friction (ID.me/Login.gov) adds **9.7%** more. Even without CSAT measurements, volume and persistence reveal significant reliability and integration issues across Military Information, VA.gov, and the VA Mobile App.  
**Data Range:** Jan 6, 2025 – Jan 10, 2026  
**Datasets Used:** Call‑center transcripts only (no CSAT included)

---

# **Table of Contents**

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Discharge Status Error  
5. Category 2: Incorrect or Missing Service Data  
6. Category 3: App/Web Inconsistency  
7. Category 4: DMDC/DEERS Ping‑Pong  
8. Category 5: Identity & Sign‑in Friction  
9. Category 6: VIC Application Access/Upload Error  
10. Recommendations – Consolidated Priority Table  
11. Appendix: Data Overview, Metrics & Trends  

---

# **1. Top‑Level Findings (Ranked by Relevance & Criticality)**

1. **Discharge Status Error — 73 cases (41.7%)**  
   The dominant, task‑blocking error preventing issuance of the Veteran Status Card.

2. **VIC Application Access/Upload Error — 25 cases (14.3%)**  
   Repeated failures to submit, upload photos, or move past stalled application states.

3. **Identity & Sign‑in Friction — 17 cases (9.7%)**  
   Problems with ID.me/Login.gov verification, resets, or mismatched identity states.

4. **App/Web Inconsistency — 16 cases (9.1%)**  
   VA Mobile App and VA.gov browser show conflicting information.

5. **Incorrect or Missing Service Data — 15 cases (8.6%)**  
   Missing service periods, wrong dates, incorrect branch, crest mismatches.

6. **DMDC/DEERS Ping‑Pong — 11 cases (6.3%)**  
   Users are told alternately by VA and DMDC/DEERS that the issue lies with the other party.

7. **Other/Out of Scope — 18 cases (10.3%)**

---

# **2. Customer Satisfaction Table**

| Dataset | CSAT Availability | Inclusion Method | % Satisfied | Median Score | Monthly CSAT |
|--------|-------------------|------------------|-------------|--------------|--------------|
| Call‑center transcripts (Jan 2025–Jan 2026) | **No CSAT values present** | Keyword & case_type filtering for Veteran Status/Military Information/VIC topics | N/A | N/A | N/A |

### **CSAT Method (Applicable When Data Exists)**
- **A. Inclusion Rules:** Numeric CSAT (1–5), in‑scope rows only  
- **B. Formula:** % satisfied = (# of 4–5) / (# of 1–5)  
- **C. Monthly CSAT:** Apply A+B monthly; compute monthly median; identify top monthly issue  
- **D. Exclusions:** Non‑numeric CSAT, unrelated product lines, missing CSAT  

*This dataset had no CSAT values; CSAT could not be computed.*

---

# **3. Issue Category Breakdown**

**Category Distribution (n = 175):**
- **41.7%** — Discharge Status Error  
- **14.3%** — VIC Application Access/Upload Error  
- **9.7%** — Identity & Sign‑in Friction  
- **9.1%** — App/Web Inconsistency  
- **8.6%** — Incorrect or Missing Service Data  
- **6.3%** — DMDC/DEERS Ping‑Pong  
- **10.3%** — Other/Out of Scope  

---

# **4. Category 1: Discharge Status Error**

### **Mentions / Volume**
**73 cases (41.7%)**

### **Description**
A yellow banner or status‑card block displays **“There is a problem with your discharge status records”**, despite the veteran’s DEERS or DD‑214 showing an honorable discharge. This breaks core flows including viewing military status, generating the Veteran Status Card, and applying for VIC.

### **Representative Quotes**
- “We’re sorry there is a problem with your discharge status records.”  
- “I have an honorable discharge—DEERS shows it. Why does VA.gov say not eligible?”  
- “Benefit letter shows discharge ‘unknown’ while DEERS says honorable.”

### **Impact**
- Users cannot produce proof of veteran status  
- Creates significant mistrust between DEERS and VA systems  
- Causes multi‑hour escalations with VA, NCC, DMDC/DEERS, Login.gov  

### **Temporal Patterns**
- **Top issue from March through July 2025**, persisting across platforms.

### **Critical Observations**
- Evidence of **system regression** around May/June 2025  
- Legacy “**shell records**” and archived data cause edge‑case failures  
- Some users see differing discharge validations between app/web surfaces

### **Recommendations**
- **P0:** Stabilize EVSS/DEERS/VA.gov data pipeline for discharge status  
- **P0:** Add resilient fallback logic when DEERS status is unavailable or ambiguous  
- **P1:** Guided in‑UI routing: remove “call DMDC” dead‑ends  
- **P1:** Improve monitoring: alert on spikes in discharge‑status errors

---

# **5. Category 2: Incorrect or Missing Service Data**

### **Mentions / Volume**
**15 cases (8.6%)**

### **Description**
Service periods missing, incorrect dates, crest mismatch, or only one period showing on the status card even when the “Review Military Information” tab displays full data.

### **Representative Quotes**
- “Only the second service period shows; 1972–1974 is missing.”  
- “Account shows Coast Guard crest, but VIC shows Army.”  
- “Dates should be 1969–1971, but site shows 1971–1975.”

### **Impact**
Incorrect data erodes trust and creates real‑world issues (base access, applications, benefits verification).

### **Temporal Patterns**
Spike during **April–June 2025**.

### **Critical Observations**
- Status Card may use a different data slice than VA.gov Military Information  
- Multi‑profile cases (different EDIPI values) correlate with mismatches

### **Recommendations**
- **P0:** Unify service‑data source of truth  
- **P1:** Add “Missing a service period?” quick‑fix workflow  
- **P2:** Automated branch/crest validation

---

# **6. Category 3: App/Web Inconsistency**

### **Mentions / Volume**
**16 cases (9.1%)**

### **Description**
Users see discrepancies between mobile app and web. Example: browser shows correct periods; app shows errors—or vice versa.

### **Representative Quotes**
- “App shows discharge error; browser shows both periods.”  
- “Reinstalled the app—same issue.”

### **Impact**
Confusion, repeated troubleshooting attempts, belief data is corrupted.

### **Temporal Patterns**
- **January 2025** was dominated by App/Web mismatches.

### **Critical Observations**
- Likely caching or differing API schema  
- Updates may push incompatible formats across platforms

### **Recommendations**
- **P0:** Synchronize API contracts and cache invalidation  
- **P1:** Add parity tests between app/web in CI pipeline  
- **P2:** Display last refreshed timestamp

---

# **7. Category 4: DMDC/DEERS Ping‑Pong**

### **Mentions / Volume**
**11 cases (6.3%)**

### **Description**
Users are directed by VA to call DMDC/DEERS, who then direct them back to VA, causing loops without resolution.

### **Representative Quotes**
- “DMDC says everything is correct—call VA.”  
- “DEERS said it’s a shell record due to older service.”

### **Impact**
High frustration, unnecessary call volume, and expensive resource use.

### **Recommendations**
- **P0:** Joint routing protocol with DMDC/DEERS  
- **P1:** Create a cross‑agency ticket with visible user SLA  
- **P2:** Provide clear documentation for legacy records

---

# **8. Category 5: Identity & Sign‑in Friction**

### **Mentions / Volume**
**17 cases (9.7%)**

### **Description**
ID.me vs. Login.gov confusion, incomplete verification states, and multi‑factor authentication loops.

### **Representative Quotes**
- “Using ID.me; service dates are still wrong.”  
- “Reset Login.gov but still denied in the app.”

### **Impact**
User believes identity is verified but military data is not linked properly, creating circular troubleshooting.

### **Recommendations**
- **P1:** Clearer identity partner explanations  
- **P1:** Add post‑verification service‑data health check  
- **P2:** Guided recovery flow based on sign‑in partner

---

# **9. Category 6: VIC Application Access/Upload Error**

### **Mentions / Volume**
**25 cases (14.3%)**

### **Description**
Users cannot upload photos, cannot submit the application, see non‑actionable errors, or get stuck at “review required.”

### **Representative Quotes**
- “File type not acceptable—worked before.”  
- “Can’t process request—tried different browsers.”

### **Impact**
Prevents obtaining the VIC card required for many in‑person and benefits‑related activities.

### **Recommendations**
- **P0:** Add user‑visible upload validation and server‑side file‑normalization  
- **P1:** Explicit application‑status transparency with remediation steps  
- **P2:** Instrument upload and error telemetry

---

# **10. Recommendations – Consolidated Priority Table**

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---------|----------------|------------------|------------------|
| **P0** | Fix discharge‑status data pipeline & fallback logic | Discharge Status Error | **High** |
| **P0** | Harmonize app/web API & caching, add parity tests | App/Web Inconsistency | **High** |
| **P0** | Consolidate service‑data source for Status Card | Incorrect/Missing Data | **High** |
| **P1** | Guided routing & inter‑agency triage | DMDC/DEERS Ping‑Pong | **Medium–High** |
| **P1** | Identity partner messaging + post‑verification check | Identity Friction | **Medium** |
| **P1** | Upload validation & better status feedback | VIC Application Errors | **Medium–High** |
| **P2** | Error‑code dashboards & regressions monitoring | All categories | **Medium** |
| **P2** | Legacy record & EDIPI merge tools | Incorrect/Missing Data | **Medium** |

---

# **11. Appendix: Data Overview, Metrics & Trends**

### **Data Overview**
- **Total Rows:** 176  
- **In‑scope Rows:** 175 (using subject/notes keyword filters + case_type filters)  
- **Time Range:** Jan 6, 2025 — Jan 10, 2026  
- **Status Outcomes:** 170 Closed, 4 Routed, 1 In‑Progress  
- **CSAT:** Not present  

### **Theme & Task Distribution**
(As listed above in Issue Breakdown)

### **Monthly Trends (Top Issue Each Month)**  
- **January 2025:** App/Web Inconsistency  
- **February 2025:** VIC Application errors  
- **March–July 2025:** Discharge Status Error  
- **August 2025:** Incorrect/Missing Service Data  
- **January 2026:** Other/Out of Scope (Loan‑Guaranty–related issues)

### **Representative Quotes**
- “We’re sorry—there’s a problem with your discharge status records.”  
- “Not eligible for a Veteran Status Card—you must have an honorable discharge.”  
- “Only one period of service shows on my card.”  
- “The app and website show different data.”  
- “DMDC says everything is correct.”  
- “Can’t process my VIC request.”

### **Filtering Method**
Rows were included if:
- Subject or notes referenced Veteran Status Card, Military Information, VIC, Veteran ID Card, or VA Mobile App issues  
- case_type matched Profile, Military Information, Personal Information, or VIC Application  
