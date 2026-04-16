# VA.gov Forms – Structured Findings: Apply for Personalized Career Planning & Guidance (Form 27‑8832 / Chapter 36 / PCPG)

**Executive Summary**  
Between **Jan 1–Dec 31, 2025**, GA funnel data for **Chapter 36 / PCPG** shows heavy attrition at early required steps: **Step 2 (Applicant Info) abandonment 10,800 / 67.31%**, **Step 1 (Intro) 16,818 / 65.86%**, **Step 3 (Address) 5,709 / 63.79%**, and **Step 4 (Applicant Status) 309 / 57.22%**. These drop‑offs indicate validation, clarity, or prerequisite gaps as primary friction drivers. .pdf) Across **Aug 31–Dec 31, 2025**, the Forms KPIs snapshot still records **90 successful submissions**, reinforcing that completion is attainable but constrained by the choke points above and multi‑session behaviors observed in the dashboard. .pdf) Device mix skews **heavily desktop (≈91–100%)** with **mobile low but non‑trivial (≈0–8.8%)** at key steps—suggesting cross‑platform parity and mobile ergonomics matter even with smaller shares. .pdf) Experience ratings exist in the attachment (Jan–Nov 2025) but lack underlying numeric distributions; thus **CSAT cannot be computed here** and remains a follow‑up data need. .pdf)  
**Data ranges used in this report:** GA funnel (Jan 1–Dec 31, 2025), Forms KPIs (Aug 31–Dec 31, 2025), experience ratings (Jan 4–Nov 26, 2025). .pdf).pdf)

---

### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Required‑Step Exit Concentration  
5. Category 2: Multi‑Session Completion Burden  
6. Category 3: Pre‑Form Navigation & Discoverability  
7. Category 4: Device/Browser Variability  
8. Category 5: Acquisition Quality (Sources & Campaigns)  
9. Recommendations – Consolidated Priority Table  
10. Appendix: Data Overview, Metrics & Trends

---

## 1. Top‑Level Findings (Ranked by Relevance & Criticality)

1. **Early‑step attrition is the dominant blocker** — **Step 2 abandonment 10,800 (67.31% of 16,046 entrants)**; **Step 1 16,818 (65.86% of 25,535)**. These two steps drive the majority of loss and should be the primary remediation focus. .pdf)  
2. **Subsequent required steps still shed users** — **Step 3 abandonment 5,709 (63.79% of 8,949)** and **Step 4 309 (57.22% of 540)**, indicating persisting friction through the flow. .pdf)  
3. **Completion is attainable but constrained** — Despite heavy early drop‑offs, downstream confirmations were observed in the period (**90 successful submissions, Aug–Dec 2025**), suggesting targeted fixes can unlock throughput. .pdf)  
4. **Mobile experience—small share, outsized risk** — Desktop dominates (**≈91–100%**) while **mobile spans ≈0–8.83%** across key steps; even low mobile volume can amplify exit rates when validations and layout aren’t optimized. .pdf)  
5. **Upstream navigation and campaign source mix vary** — Users view multiple pages before starting; sources and campaigns are heterogeneous, implying varied intent/readiness that influences start quality. .pdf)

---

## 2. Customer Satisfaction Table

> **CSAT Calculation Notes (Universal Rules):**  
> **Inclusion filter:** rows with non‑null numeric ratings (1–5) tied to **Form 27‑8832** (by form name/URL). **Exclusions:** rows without CSAT, non‑numeric CSAT, outside scope. **% satisfied:** count of {4,5} ÷ count of {1–5}.  
> **Status:** Experience rating cards appear in the Forms KPIs export but do not expose numeric distributions in the attachment; **CSAT cannot be computed here**. .pdf)

| Month (2025) | % Satisfied (4–5) | Median Score | Primary Issue (Highest Category Count) |
|---|---:|---:|---|
| Jan–Nov | N/A | N/A | Required‑step exits (directional) .pdf) |
| Dec | N/A | N/A | N/A |

---

## 3. Issue Category Breakdown

### Category 1: Required‑Step Exit Concentration  
**Mentions / Volume:** High—quantified by GA funnel. .pdf)  
**Description:** Users disproportionately abandon at early mandatory inputs. The pattern (Step 1 & Step 2) suggests unclear instructions, strict validations, eligibility uncertainty, or prerequisite document gaps.  
**Representative metrics:**  
• **Step 1 (Intro):** **25,535 entrants**, **8,717 completions (34.14%)**, **16,818 abandons (65.86%)**. .pdf)  
• **Step 2 (Applicant Info):** **16,046 entrants**, **5,246 completions (32.69%)**, **10,800 abandons (67.31%)**. .pdf)  
• **Step 3 (Address):** **8,949 entrants**, **3,240 completions (36.21%)**, **5,709 abandons (63.79%)**. .pdf)  
• **Step 4 (Applicant Status):** **540 entrants**, **231 completions (42.78%)**, **309 abandons (57.22%)**. .pdf)  
**Impact:** These choke points directly reduce throughput, inflate multi‑session attempts, and increase assistance‑seeking.  
**Temporal or segment patterns (device hints):** Desktop dominates (≈91–100%), mobile is present (≈0–8.83%)—validations and focus states must be robust cross‑platform. .pdf)  
**Critical Observations:**  
- Step 2 has the **highest abandonment rate (67.31%)**, making it the top candidate for copy, validation, and prerequisite improvements. .pdf)  
- Step‑level completions shrink predictably, but **Step 1 and Step 2** account for the vast majority of loss—fixes here will yield the largest gains. .pdf)  
**Recommendations:**  
- **P0:** Instrument detailed validation/error telemetry per required field; add inline examples, microcopy, and eligibility previews at **Step 1–2**. .pdf)  
- **P1:** Progressive disclosure + contextual help (tooltips, expandable guidance) to reduce cognitive load in early steps.  
- **P2:** Accessibility review of labels, error states, and focus management to minimize form‑related exits.

---

### Category 2: Multi‑Session Completion Burden  
**Mentions / Volume:** Not quantified in GA funnel; observed in Forms KPIs charts (sessions to complete; 1‑session completions by month). .pdf)  
**Description:** Users often stop and return later—indicative of unclear prerequisites, time constraints, or interruptions caused by validation failures.  
**Representative metrics (directional):**  
• **Aug–Dec 2025:** Charts show multi‑session distribution and 1‑session completion tracking (values not exposed). .pdf)  
**Impact:** Increases abandonment risk and erodes confidence; magnifies the cost of early‑step friction.  
**Critical Observations:**  
- Multi‑session patterns commonly co‑occur with required‑step exits and missing documents.  
**Recommendations:**  
- **P0:** Strengthen **save & resume** with autosave and reminder emails/SMS; provide resume deep‑links.  
- **P1:** Pre‑start checklist covering eligibility and required documents; set expectations for time/effort.  
- **P2:** Improve session timeout handling and in‑progress data preservation. .pdf)

---

### Category 3: Pre‑Form Navigation & Discoverability  
**Mentions / Volume:** High—**Top pages viewed before accessing the form** show multi‑page journeys. .pdf)  
**Description:** Users seek eligibility clarity and benefit explanations before starting; diffuse entry points increase effort and can deter starts.  
**Representative metrics (directional):**  
• Upstream page‑view diversity prior to form access (no counts shown in export). .pdf)  
**Impact:** Raises cognitive load and filters out qualified users who might otherwise complete.  
**Recommendations:**  
- **P0:** Elevate a canonical **Apply** CTA on the landing page; add succinct eligibility gate and benefits summary. .pdf)  
- **P1:** Guided “Should I apply?” wizard forwarding context into the form.  
- **P2:** Strengthen breadcrumbs and cross‑links across the top pre‑form pages.

---

### Category 4: Device/Browser Variability  
**Mentions / Volume:** Moderate—device/browser charts in KPIs; device shares surfaced in GA funnel lines. .pdf).pdf)  
**Description:** Cross‑platform inconsistencies (layout density, validation, performance) can magnify exits, especially on mobile where ergonomics are tighter.  
**Representative metrics:**  
• Desktop share ≈**91.17–100%**, mobile share ≈**0–8.83%** across steps with device breakdowns provided. .pdf)  
**Impact:** Even small mobile cohorts can experience disproportionately higher friction; parity matters.  
**Recommendations:**  
- **P0:** Browser/device parity QA focused on early required steps; standardize error messaging and focus behavior. .pdf)  
- **P1:** Mobile layout optimizations (field grouping, sticky guidance, reduced scroll).  
- **P2:** Lightweight performance monitoring (LCP/CLS) and targeted fixes. .pdf)

---

### Category 5: Acquisition Quality (Sources & Campaigns)  
**Mentions / Volume:** Present—**Top sources** (Aug–Dec 2025) and **Top campaigns** (Sep–Dec 2025) indicate heterogeneous traffic and intent. .pdf)  
**Description:** Misaligned campaign messaging or broad targeting can drive low‑intent visits, increasing pre‑start churn and early exits.  
**Recommendations:**  
- **P1:** Add campaign‑level deep links to the pre‑start checklist and eligibility summary; track start/completion by source/campaign. .pdf)  
- **P2:** Optimize creatives/targeting and suppress audiences unlikely to qualify.

---

## 8. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | Fix top validations & microcopy at **Step 1–2**; instrument detailed error telemetry | Required‑Step Exit Concentration | **High** (reduces primary drop‑offs) .pdf) |
| **P0** | Robust **save & resume** with autosave and reminders; resume deep‑links | Multi‑Session Completion Burden | **High** (recovers interrupted tasks) .pdf) |
| **P1** | Pre‑start eligibility & document checklist on landing | Pre‑Form Navigation & Discoverability | **Medium–High** (improves start quality) .pdf) |
| **P1** | Device/browser parity QA and mobile ergonomics | Device/Browser Variability | **Medium** (consistency across platforms) .pdf) |
| **P1** | Campaign/source analytics tied to start & completion; align creatives | Acquisition Quality | **Medium** (boosts qualified starts) .pdf) |
| **P2** | Accessibility audit of labels, error states, focus | Required‑Step Clarity | **Medium** |
| **P2** | Performance telemetry (LCP/CLS) & targeted optimizations | Device/Browser Variability | **Medium** .pdf) |

---

## 9. Appendix: Data Overview, Metrics & Trends

### Data Overview  
- **Datasets integrated:**  
  - **GA4 funnel** for **Chapter 36 Form** (**Jan 1–Dec 31, 2025**). .pdf)  
  - **VA.gov Forms KPIs dashboard export** (**Aug 31–Dec 31, 2025**) with completion funnel, sessions to complete, exit rate by required steps, device/browser, sources/campaigns. .pdf)  
- **Successful submissions:** **90** in the Aug–Dec 2025 KPIs export (numeric values not surfaced for GA confirmation in this attachment). .pdf)  
- **Experience ratings:** Cards present (Jan 4–Nov 26, 2025) but no numeric distribution; CSAT not computable here. .pdf)  
- **GA funnel step metrics (Jan–Dec 2025):**  
  - **Step 1 (Intro):** 25,535 entrants; 8,717 completions (34.14%); 16,818 abandons (65.86%). .pdf)  
  - **Step 2 (Applicant Info):** 16,046 entrants; 5,246 completions (32.69%); 10,800 abandons (67.31%). .pdf)  
  - **Step 3 (Address):** 8,949 entrants; 3,240 completions (36.21%); 5,709 abandons (63.79%). .pdf)  
  - **Step 4 (Applicant Status):** 540 entrants; 231 completions (42.78%); 309 abandons (57.22%). .pdf)  
  - **Device shares across steps:** Desktop ≈91.17–100%; Mobile ≈0–8.83%. .pdf)

### Theme & Task Counts  
- **Early‑step required exits (Steps 1–2):** Dominant, with combined **27,618 abandons** in 2025 (16,818 + 10,800). .pdf)  
- **Mid‑flow exits (Step 3):** **5,709 abandons**. .pdf)  
- **Late‑flow exits (Step 4):** **309 abandons**. .pdf)  
- **Multi‑session behavior:** Present in KPIs charts (values not exposed). .pdf)  
- **Upstream navigation & acquisition:** Pre‑form page views and source/campaign variability present (no counts shown). .pdf)

### Trends  
- **Funnel narrowing:** Pronounced before submission; the highest loss occurs at **Step 1–2**. .pdf)  
- **Sessions to complete:** Multi‑session distribution visible across Aug–Dec 2025 (values not exposed). .pdf)  
- **Traffic mix:** Source/campaign presence across fall 2025 indicates intent variability. .pdf)
