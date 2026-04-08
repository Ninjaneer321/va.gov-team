# VA.gov – Structured Findings: Contact Information Update Flow

## Executive Summary
This GA4 dataset (VA.gov, **“Missing Contact Info” flow, Jan 1–Dec 31, 2025**) reveals a pronounced drop at **Step 3: Edit Contact Info**, with **~137K abandonments (19.3%)**, making it the single largest point of attrition in the flow. .pdf) Overall entry-to-page engagement shows a modest early drop at **Step 2: Contact Info Page (≈30K; 4%)**, while **Step 1: Alert Click** is nearly frictionless (**694; 0.094%**). .pdf) Post‑edit friction persists at **Step 4: Contact Info Saved (≈63K; 11%)**, indicating confirmation and save mechanics as secondary blockers. .pdf) Device segments suggest **mobile/tablet abandonment near ~19%**, materially higher than **desktop (~4.8%)** at the edit step. .pdf) CSAT was **not present** in this GA‑only dataset; satisfaction statements are therefore inferred from behavioral signals rather than explicit ratings. .pdf)

**Data Range:** GA4, VA.gov “Missing Contact Info” flow — **January 1, 2025 through December 31, 2025**. .pdf)

---

### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Edit Step Abandonment (Mobile‑Heavy)  
5. Category 2: Save & Confirmation Friction  
6. Category 3: Entry & Page Access Drop  
7. Category 4: Instrumentation & Event Naming Inconsistency  
8. Recommendations – Consolidated Priority Table  
9. Appendix: Data Overview, Metrics & Trends  

---

## 1. Top‑Level Findings (Ranked by Relevance & Criticality)

1. **Edit step abandonment is the primary blocker** — **~137K abandonments (19.3%)** at **Step 3: Edit Contact Info**; users are exiting before completing edits. .pdf)  
2. **Save/confirmation friction** — **~63K abandonments (11%)** after edits, implying late‑stage uncertainty or error handling issues. .pdf)  
3. **Entry/page access drop is non‑trivial** — **~30K abandonments (4%)** at **Step 2: Contact Info Page**; discoverability or load/performance may contribute. .pdf)  
4. **Early alert click is nearly frictionless** — **694 abandonments (0.094%)** at **Step 1: Alert Click**, indicating the prompt is clear and enticing. .pdf)  
5. **Mobile/tablet segment risk** — Edit‑step abandonment **~19.33% (mobile) / ~18.56% (tablet)** vs **~4.8% (desktop)**, highlighting a device‑specific usability gap. .pdf)

---

## 2. Customer Satisfaction Table

| Metric | Scope | Value | Notes |
|---|---|---:|---|
| % Satisfied (Overall) | GA4 Only | **N/A** | **CSAT not available in this dataset**; GA4 provides behavioral signals (funnel and events) but no rating field. Excluded per rule **D** (lack of CSAT). .pdf) |
| Monthly CSAT (Jan–Dec 2025) | Filtered (A) | **N/A** | Not computable: no 1–5 numeric CSAT values present for target flow. .pdf) |
| Filtering Method (A) | Target Flow | **Included only GA4 events and funnel steps for “Missing Contact Info”** (alert click → contact info page → edit → saved → confirmation). .pdf) |
| Formula (B) | % Satisfied | **(count of CSAT 4–5) / (count of CSAT 1–5)** | Not applied due to missing CSAT fields. .pdf) |
| Exclusions (D) | Out of Scope | **All non‑flow events lacking CSAT; non‑numeric CSAT; unrelated product lines** | GA4 dataset contained events and funnel metrics only. .pdf) |

---

## 3. Issue Category Breakdown

### Category 1: **Edit Step Abandonment (Mobile‑Heavy)**
**Mentions / Volume:** **~137K abandonments; 19.3% rate at Step 3**. .pdf)

**Description:** The dominant failure occurs when users reach **Edit Contact Info** and exit before saving. Mobile and tablet segments show materially higher abandonment (**~19.33% / ~18.56%**) than desktop (**~4.8%**), suggesting form ergonomics, validation behavior, or responsiveness issues on smaller screens. .pdf)

**Representative metrics:**
- **Step 3 Abandonment:** **≈137K (19.3%)**. .pdf)  
- **Desktop at Edit:** **~4.8% abandonment (≈12,498 / 260,595)**. .pdf)  
- **Mobile at Edit:** **~19.33% abandonment (≈137,394 / 710,888)**. .pdf)  
- **Tablet at Edit:** **~18.56% abandonment (≈83,239 / 448,596)**. .pdf)

**Impact:** Users who intend to correct or add contact details stall at the moment of editing—impeding notifications, mail delivery, and follow‑up communications reliant on accurate profiles. .pdf)

**Temporal or segment patterns (if applicable):**
| Segment | Completion | Abandonments | Abandonment Rate |
|---|---:|---:|---:|
| Desktop (Edit) | ~95.2% | ~12,498 | **~4.8%** .pdf) |
| Mobile (Edit) | ~80.67% | ~137,394 | **~19.33%** .pdf) |
| Tablet (Edit) | ~81.44% | ~83,239 | **~18.56%** .pdf) |

**Critical Observations:**
- The edit step is disproportionately risky on mobile/tablet, indicating screen‑level friction and/or error handling that is more punishing on touch devices. .pdf)  
- Desktop users complete at far higher rates, implying the form design may be optimized for larger layouts rather than responsive patterns. .pdf)  
- The late‑stage failures (Step 4) suggest that even after edits, save/confirmation flow behavior interrupts completion, compounding the edit‑step risk. .pdf)

**Recommendations:**
- **P0:** Redesign mobile/tablet edit forms (reduce required fields; streamline validation; defer non‑critical checks; ensure accessible inputs and responsive layout). Instrument field‑level error telemetry. .pdf)  
- **P0:** Add **autosave/progressive save** and persistent inline confirmation banners to reduce navigation to separate confirmation steps. .pdf)  
- **P1:** Introduce **real‑time validation** with clear microcopy; avoid blocking modals; ensure durable state on back/refresh. .pdf)  
- **P1:** Run device‑specific usability tests on representative touch hardware; prioritize thumb‑reach, focus management, and tap target sizing. .pdf)

---

### Category 2: **Save & Confirmation Friction**
**Mentions / Volume:** **~63K abandonments; 11% rate at Step 4: Contact Info Saved.** .pdf)

**Description:** Users who complete edits still fail at or after the save action, as indicated by the significant drop before reaching the **Confirmation Page**. This suggests ambiguous save affordances, error messages that do not guide recovery, or a fragile post‑save navigation pattern. .pdf)

**Representative metrics:**
- **Step 4 Abandonment:** **≈63K (11%)**. .pdf)  
- **Confirmation completion snapshot:** Funnel shows **80.7%** completion before confirmation and a reported **89%** at confirmation (indicative of differing denominators), reinforcing that “save” and “confirm” are split interactions with observable drop‑off. .pdf)

**Impact:** Even motivated users encounter failure at the finalization stage, leaving profiles partially updated and exposing downstream communication failures (missed notices or incorrect contact routing). .pdf)

**Critical Observations:**
- The presence of separate “saved” and “confirmation” steps increases cognitive load and introduces navigation risk; one step should suffice with clear success feedback. .pdf)  
- High event volume for **“profile saved”** (over **3.1M events** across contact fields) suggests repeated attempts or multi‑field saves, amplifying the need for resilient confirmation UX. .pdf)

**Recommendations:**
- **P0:** Consolidate “save” and “confirm” into a single, resilient interaction; ensure **atomic save** per field and visible success states without requiring page transitions. .pdf)  
- **P1:** Add **undo/rollback** window and consistent post‑save status badges per field to increase trust and reduce repeat saves. .pdf)  
- **P1:** Harden error recovery (clear retry CTA; preserve typed data; avoid session loss on navigation). .pdf)

---

### Category 3: **Entry & Page Access Drop**
**Mentions / Volume:** **~30K abandonments; 4% at Step 2: Contact Info Page.** .pdf)

**Description:** After the **Alert Click**, a subset fail to reach or proceed through the **Contact Info Page**. Causes may include latency, content hierarchy, or immediate friction (authentication or load). The **Alert Click** itself is strong—**only 694 abandonments (0.094%) at Step 1**—so the primary early friction is tied to the page experience rather than the alert. .pdf)

**Representative metrics:**
- **Step 1:** **694; 0.094% abandonment** (very low). .pdf)  
- **Step 2:** **~30K; 4% abandonment**, indicating early page‑level friction. .pdf)

**Impact:** Users with outdated contact information are alerted but do not progress into actionable editing, delaying corrections that support benefits processing and communications. .pdf)

**Critical Observations:**
- Entry paths include **/profile/contact-information** and **/my-va/welcome-va-setup/contact-information**, which should deliver immediate clarity and quick load to maintain intent. .pdf)  
- The split entry routes imply that consistency across welcome/setup and profile areas is essential to prevent confusion. .pdf)

**Recommendations:**
- **P1:** Optimize entry page load and content hierarchy (prioritize actionable fields, collapse non‑critical info, defer heavy modules). .pdf)  
- **P1:** Unify entry microcopy across **welcome/setup** and **profile** to reduce cognitive switching. .pdf)  
- **P2:** Add lightweight prefetching for edit forms upon alert click to smooth the transition. .pdf)

---

### Category 4: **Instrumentation & Event Naming Inconsistency**
**Mentions / Volume:** **“profile saved” totals ≈3,107,462 events across contact‑field variants**; multiple entries show near‑duplicate labels (e.g., **email** appears twice; **mobile‑telephone** appears twice) across different paths. .pdf)

**Description:** Event taxonomy for “profile saved” is duplicated across page paths (e.g., **/profile/contact-information** and **/my-va/welcome-va-setup/contact-information**), creating analysis ambiguity and making field‑level performance comparisons harder. Top‑volume events include **home‑address (~518,412)**, **mobile‑telephone (~449,831)**, **mailing‑address (~428,616)**, **work‑telephone (~247,789)**, **email (~244,472)**, etc. .pdf)

**Representative metrics:**
- **Total “profile saved” (all variants): ≈3,107,462**. .pdf)  
- **Top variants (example counts):** home‑address (**~518,412**), mobile‑telephone (**~449,831**), mailing‑address (**~428,616**), work‑telephone (**~247,789**), email (**~244,472**). .pdf)  
- **Initialize Vet360 ID:** **~186,150** events, highlighting back‑end identity initialization activity tied to profile updates. .pdf)

**Impact:** Inconsistent naming increases analytic noise, complicates detection of field‑level failures, and may mask which edits correlate with abandonment (e.g., phone vs address). .pdf)

**Critical Observations:**
- Duplicate labels reduce confidence in funnel‑to‑event attribution at field level. .pdf)  
- Multiple save events per user inflate totals and can obscure unique‑user completion rates without deduplication. .pdf)

**Recommendations:**
- **P1:** Standardize event taxonomy (one **canonical** event per field type; include **field_name**, **interaction_outcome**, **error_code**, **device**) for precise analysis. .pdf)  
- **P2:** Implement unique‑user deduplication keys (e.g., session and field hash) to separate retries from successes. .pdf)

---

## 8. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | **Redesign mobile/tablet edit forms** (responsive layout, reduced required fields, accessible controls, resilient validation) | Edit step abandonment (Category 1) | **High** — Reduce ~19% mobile/tablet attrition; unlock majority of blocked updates. .pdf) |
| **P0** | **Unify save + confirmation into a single atomic interaction; add persistent success state** | Save/confirmation friction (Category 2) | **High** — Cut ~11% late‑stage drop; increase trust and completion. .pdf) |
| **P1** | **Optimize entry page performance and hierarchy; unify entry microcopy** | Entry/page access drop (Category 3) | **Medium** — Address ~4% early attrition; maintain momentum post‑alert. .pdf) |
| **P1** | **Instrument field‑level errors and outcomes; standardize event naming** | Instrumentation inconsistency (Category 4) | **Medium** — Enables targeted fixes (e.g., specific field failures). .pdf) |
| **P2** | **Prefetch edit forms and enable autosave/progressive save** | Edit + Save friction (Categories 1 & 2) | **Medium** — Smooths flow; mitigates network/persistence issues. .pdf) |

---

## 9. Appendix: Data Overview, Metrics & Trends

### Data Overview
- **Dataset:** GA4, VA.gov **“Missing Contact Info”** flow; funnel steps include **Alert Click → Contact Info Page → Edit Contact Info → Contact Info Saved → Confirmation Page**. .pdf)  
- **Date Range:** **Jan 1–Dec 31, 2025** (Production). .pdf)  
- **Step‑level abandonments & rates (aggregate):**  
  - **Step 1:** **694; 0.094%**. .pdf)  
  - **Step 2:** **~30K; 4%**. .pdf)  
  - **Step 3:** **~137K; 19.3%**. .pdf)  
  - **Step 4:** **~63K; 11%**. .pdf)

### Theme & Task Counts
- **Edit (Step 3) dominates attrition** by count and rate (**~137K; 19.3%**). .pdf)  
- **Save/confirmation (Step 4) contributes** substantial late‑stage attrition (**~63K; 11%**). .pdf)  
- **Entry (Step 2) presents a moderate early drop** (**~30K; 4%**). .pdf)

### Trends
- **Device segmentation at the edit step** shows **desktop ≈4.8% abandonment** vs **mobile ≈19.33%** and **tablet ≈18.56%**, indicating persistent mobile/tablet friction through 2025. .pdf)  
- **High “profile saved” event volume (~3.1M)** across fields suggests multiple saves per user/session and the presence of duplicate naming conventions that should be rationalized for cleaner longitudinal tracking. .pdf)

### Representative Metrics
- **Edit (Desktop):** **~260,595 users; ~12,498 abandonments; ~95.2% complete; ~4.8% abandon**. .pdf)  
- **Edit (Mobile):** **~710,888 users; ~137,394 abandonments; ~80.67% complete; ~19.33% abandon**. .pdf)  
- **Edit (Tablet):** **~448,596 users; ~83,239 abandonments; ~81.44% complete; ~18.56% abandon**. .pdf)  
- **Top “profile saved” variants (events):** home‑address (**~518,412**), mobile‑telephone (**~449,831**), mailing‑address (**~428,616**), work‑telephone (**~247,789**), email (**~244,472**), **initialize‑vet360‑id (~186,150)**. .pdf)
