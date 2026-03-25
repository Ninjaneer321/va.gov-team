# VA.gov – Structured Findings: Contact Information Update Flow

## Executive Summary  
Across the VA.gov “Missing Contact Info / Contact Information Update” flow, **overall completion from Alert Click to Confirmation Page is ~68.8% (510,235 of 741,283)**, indicating notable attrition in mid‑flow steps. The **largest drop occurs at “Edit Contact Info,” with 137,394 abandonments (19.3%)**, followed by a secondary drop at **“Contact Info Saved” (63,259; 11.0%)**—both strongly suggest friction from form complexity, validation clarity, and post‑save confidence. **Mobile and tablet users consistently abandon at higher rates than desktop** (e.g., Edit: **19.8% mobile** vs. **25.98% tablet** vs. **18.6% desktop**), pointing to device‑specific usability and performance gaps. High total edit volume (**3.1M events in 2025**) shows strong demand concentrated in **address and phone updates**, but edits are fragmented across multiple entry points (Profile, Welcome Setup, Letters, Debt), which may erode consistency and trust. Finally, **confirmation instrumentation lacks definitive success markers**, limiting certainty about final outcomes and constraining optimization efforts.

---

## Table of Contents  
- Top‑Level Findings (Ranked by Relevance & Criticality)  
- Issue Category Breakdown  
  - Category 1: Mid‑Flow Drop‑offs (Edit & Save Steps)  
  - Category 2: Mobile/Tablet Usability Variance  
  - Category 3: Fragmented Entry Points & Flow Inconsistency  
  - Category 4: Instrumentation Gaps (Confirmation & Success Signals)  
  - Category 5: Task Demand & Edit Distribution (Addresses & Phones)  
- Recommendations – Consolidated Priority Table  
- Appendix: Data Overview, Metrics & Trends

---

## Top‑Level Findings (Ranked)  
*Ranking factors: frequency, severity, task‑blocking impact, and actionability.*

1. **Mid‑flow abandonment peaks at “Edit Contact Info” — 137,394 users (19.3%)**, the single largest source of failure.  
2. **Secondary drop at “Contact Info Saved” — 63,259 users (11.0%)** fail to progress to confirmation, suggesting save‑state friction or post‑save uncertainty.  
3. **Mobile/tablet users abandon more than desktop across core steps** (e.g., Edit: **19.8% mobile**, **25.98% tablet**, **18.6% desktop**), indicating device‑specific usability/performance deficits.  
4. **Edits are dispersed across many entry points** (Profile hub, Welcome VA setup, Letters, Debt), complicating mental models and consistency expectations.  
5. **Confirmation step lacks completion/abandonment metrics**, limiting the ability to attribute final success and diagnose residual failures.  
6. **High annual edit volume (3.1M events)** demonstrates strong demand, concentrated in **address and phone** updates—high‑leverage improvement areas.

---

## Issue Category Breakdown

### Category 1: Mid‑Flow Drop‑offs (Edit & Save Steps)  
**Mentions / Volume:**  
- **Edit Contact Info:** 710,888 users; **abandonment 19.33%** (137,394).  
- **Contact Info Saved:** 573,494 users; **abandonment 11.03%** (63,259).  
- **Overall completion to Confirmation:** **68.8%** (510,235 of 741,283).

**Description:**  
Users progress well into the flow but stall at the point of editing (form interaction) and again after saving. The Edit step’s loss is typical of **form complexity and validation friction** (e.g., unclear requirements, hidden errors). The Save step’s additional loss suggests **post‑save uncertainty** about whether changes “took,” or intermittent errors that are not surfaced clearly.

**Representative metrics:**  
- **Alert Click → Contact Info Page:** 741,283 → 740,589 (**0.94% abandon**).  
- **Contact Info Page → Edit:** 740,589 → 710,888 (**4.01% abandon**).  
- **Edit → Saved:** 710,888 → 573,494 (**19.33% abandon**).  
- **Saved → Confirmation:** 573,494 → 510,235 (**11.03% abandon**).

**Impact:**  
These drop‑offs directly reduce the number of veterans with current contact info, degrading downstream communications (benefits notices, claims updates, debt letters) and increasing call‑center reliance. The **Edit step** is task‑blocking; the **Save step** introduces confidence gaps and potential error states.

**Temporal or segment patterns:**  
| Step                    | Desktop Abandonment | Mobile Abandonment | Tablet Abandonment |
|-------------------------|--------------------:|-------------------:|-------------------:|
| Contact Info Page       | **3.98%**           | **4.80%**          | **7.30%**          |
| Edit Contact Info       | **18.56%**          | **19.81%**         | **25.98%**         |
| Contact Info Saved      | **10.20%**          | **11.55%**         | **17.03%**         |

**Critical Observations:**  
- Attrition clusters around **form interaction** and **post‑save** states—classic friction signatures (validation clarity, error visibility, feedback).  
- Higher mobile/tablet abandonment implies **responsive layout, input ergonomics**, and **performance** issues (e.g., keyboard handling, touch targets, scroll‑within‑modals).

**Recommendations:**  
- **Simplify forms**: reduce required fields, group related inputs, adopt progressive disclosure.  
- **Strengthen validation**: inline, accessible, field‑specific messages; avoid page‑level error dumps.  
- **Reinforce save state**: visible success toast + confirmation checklist; persistent **“Last updated”** timestamp.  
- **Error recovery affordances**: auto‑save drafts, retry without data loss, clear next steps after failure.

---

### Category 2: Mobile/Tablet Usability Variance  
**Mentions / Volume:** Elevated abandonment across devices—tablet worst, mobile next, desktop best (see table above).

**Description:**  
Device breakdowns show consistent gaps on smaller/touch screens, implicating **layout density**, **input masking**, **keyboard navigation**, and **latency**. Tablet’s outsized failure rate suggests issues in **landscape layouts, touch target sizing**, or intermediate viewport breakpoints.

**Representative metrics:**  
- **Edit step abandonment:** Desktop **18.6%**, Mobile **19.8%**, Tablet **26.0%**.  
- **Saved step abandonment:** Desktop **10.2%**, Mobile **11.6%**, Tablet **17.0%**.  
- **Final confirmations by device:** Desktop **328,096 (64%)**, Mobile **175,967 (34%)**, Tablet **6,017 (1%)**.

**Impact:**  
Mobile/tablet users are disproportionately failing to complete updates, reducing the reach of timely communications to a large segment of veterans who prefer or rely on mobile access.

**Critical Observations:**  
- **Touch targets (≥44px), input masks, keyboard “Next” progression**, and **error placement** are likely root causes.  
- Validation messages can **push content below the fold** on smaller screens, causing hidden errors and repeat attempts.

**Recommendations:**  
- **Mobile/tablet pattern audit**: increase touch target sizes, anchor error messages near fields, support numeric keypad where appropriate.  
- **Reduce above‑the‑fold noise**: condense headers, use collapsible sections, maintain clear focus and scroll restoration.  
- **Performance**: defer nonessential scripts, minimize layout thrash, avoid blocking calls during validation.

---

### Category 3: Fragmented Entry Points & Flow Inconsistency  
**Mentions / Volume:** **3,107,462 total edits (2025)** dispersed across **Profile**, **Welcome VA setup**, **Letters**, **Debt**, and **Decision Review** surfaces. Top edit volumes: **home address (518k)**, **mobile phone (450k)**, **mailing address (429k)**.

**Description:**  
Veterans initiate contact updates from many surfaces. While this increases discoverability, it **splinters the mental model** and can produce **divergent form experiences, validation rules, and confirmations**—raising uncertainty about whether updates propagate globally.

**Representative metrics:**  
- **/profile/contact-information – home address saved:** 518,412  
- **/my-va/welcome-va-setup/contact-information – mobile phone saved:** 449,831  
- **/profile/contact-information – mailing address saved:** 428,616  
- Additional substantial edits via **Letters** and **Debt** contexts.

**Impact:**  
Inconsistent entry points can multiply variations in **copy, validation, field order**, and **post‑save feedback**, creating uncertainty and rework. Veterans may **repeat edits** or question whether updates **sync across VA services**.

**Critical Observations:**  
- The same task (e.g., change mailing address) appears across **multiple surfaces**, elevating the need for **pattern standardization** and **authoritative confirmation**.

**Recommendations:**  
- **Unify the contact info pattern** (field order, labels, validation, help text) across all entry points.  
- Provide a **single authoritative confirmation** (“Your contact info is updated across VA services”) after save, regardless of entry.  
- Consider **contextual deep links** back to Profile with **source breadcrumbs** (“Updated via Letters”).

---

### Category 4: Instrumentation Gaps (Confirmation & Success Signals)  
**Mentions / Volume:** **510,235 users reach Confirmation**, but the step lacks **completion/abandonment instrumentation** and **commit‑success markers**.

**Description:**  
The last step records active users but not a definitive **data‑commit success** (vs. UI confirmation). This obscures whether confirmation represents true completion and prevents precise attribution of improvements.

**Representative metrics:**  
- **Confirmation Page active users:** **510,235** (no success/failure breakdown available).

**Impact:**  
Without a **“Final Commit Success” event** and error taxonomy, teams cannot quantify residual failures (e.g., back‑end rejects, network issues) or correlate fixes to improved outcomes.

**Critical Observations:**  
- Instrumentation should distinguish **UI confirmation vs. back‑end commit** and **capture retries**.

**Recommendations:**  
- Add GA4 events for **Final Commit Success**, **Commit Failure**, and **Auto‑retry**; include **step‑linked identifiers** for cross‑surface reconciliation.  
- Implement **error taxonomy** (validation, network, system) and **actionable error surfaces** to quantify and reduce failure classes.

---

### Category 5: Task Demand & Edit Distribution (Addresses & Phones)  
**Mentions / Volume:** **3.1M “profile saved” events (2025)**, top categories in **addresses** and **phones** across **Profile** and **Welcome** paths.

**Description:**  
Demand is strong and diversified; the **highest volumes** concentrate in addresses and phones—core contact channels for mission‑critical communications. This underscores the importance of **low‑friction patterns, clear validation,** and **trust‑building confirmations**.

**Representative metrics:**  
- **Home address saved (/profile):** 518,412  
- **Mobile phone saved (/welcome setup):** 449,831  
- **Mailing address saved (/profile):** 428,616

**Impact:**  
High‑demand tasks magnify the impact of friction. Improvements to **address/phone flows** will drive outsized gains in completion and data quality, with downstream benefits for notifications and correspondence.

**Critical Observations:**  
- Address edits span **Profile, Setup, Letters**—shared validation standards and **global state messaging** are critical for trust.

**Recommendations:**  
- **Pre‑fill known fields**; use **USPS‑style address normalization** with clear handling of **PO Boxes** and **APO/FPO**.  
- **Phone input patterns**: enforce formats, provide examples, support international numbers where applicable.  
- Add **“last updated” stamps** and **change history** (privacy‑appropriate detail) to strengthen trust.

---

## Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | Simplify **Edit Contact Info** forms (reduce required inputs, progressive disclosure, inline validation, clearer error copy). | Mid‑flow drop‑off at Edit (**19.3% abandon**). | Recover **~3–6%** of in‑flow users at Edit; thousands of additional completions monthly. |
| **P0** | Strengthen **post‑save feedback** (success toast, redirected confirmation with “Updated across VA services,” next‑best actions). | Drop‑off at Save (**11.0% abandon**). | Recover **~1–3%** at Save; reduce repeat edits and uncertainty. |
| **P1** | **Mobile/tablet optimization**: touch targets (≥44px), keyboard “Next,” input masking, persistent error placement. | Higher abandonment on mobile/tablet vs. desktop. | Narrow device gap by **1–2pp**; improve completion equity. |
| **P1** | **Unify patterns** across Profile, Welcome Setup, Letters, Debt; standardize labels, validation, and confirmation language. | Fragmented entry points & inconsistency. | Reduce confusion; cut repeat edits; increase trust in global propagation. |
| **P1** | **Instrument final success** (commit success/failure events), add error taxonomy and retry logging on Confirmation. | Instrumentation gap at last step. | Enables precise attribution and faster iteration; reduces unknown failure classes. |
| **P2** | **Address normalization & phone input enhancements** (examples, format hints, country selection where applicable). | High‑demand address/phone edits. | Improves data quality; fewer validation errors; better downstream communications. |

---

## Appendix

### Data Overview  
- **Update Flow (GA4)** timeframe: **2025‑01‑01 → 2025‑12‑31**. Steps: Alert Click → Contact Info Page → Edit → Saved → Confirmation. Device breakdowns provided (desktop, mobile, tablet).  
- **Total Edits (All VA)** timeframe: **2025‑01‑01 → 2025‑12‑31**. **3,107,462 total “profile saved” events** across multiple paths and contexts.  
- **GA Snapshot (PDF extract)**: VA.gov Production view with sample paths and counts (Feb **1–28, 2026**); contextual, not central to funnel analysis.

### Theme & Task Counts  
- Top edit types (2025): **Home address (518,412)**, **Mobile phone (449,831)**, **Mailing address (428,616)**—primarily via **/profile/contact-information** and **/my-va/welcome-va-setup/contact-information**.  
- Secondary contexts include **Letters** and **Debt** flows, indicating broad touchpoints for contact info updates.

### Trends  
- **Sustained multi‑surface engagement** across 2025; monthly granularity not present in the provided extracts.  
- **Device‑based completion gaps** are consistent at multiple steps—systemic rather than isolated issues.

### Representative Metrics (instead of quotes)  
- **Alert → Contact Info Page:** **741,283 → 740,589**, abandonment **0.94%** (tablet highest rate at **0.72%**).  
- **Contact Info Page → Edit:** **740,589 → 710,888**, abandonment **4.01%**.  
- **Edit → Saved:** **710,888 → 573,494**, abandonment **19.33%**.  
- **Saved → Confirmation:** **573,494 → 510,235**, abandonment **11.03%**; final step lacks success instrumentation.  
- **Total edits (2025):** **3,107,462** across VA surfaces; address and phone changes dominate volume.
