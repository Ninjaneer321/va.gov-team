# Automating User Feedback & Behavioral Data Analysis

**Ticket:** Explore opportunities to make the process of analyzing user feedback and behavioral data more automated and scalable.

---

## Overview

This document responds to the exploration ticket by outlining the current manual workflow, identifying automation opportunities, and proposing a phased approach to streamlining insight generation across GA, Medallia, and Call Center data — for both existing and pre-launch products. All proposed approaches are intended to operate within VA AI and data governance constraints.

---

## Acceptance Criteria — Status

| Criteria | Status | Notes |
|---|---|---|
| Document current workflow | ✅ Done | Covered below. Current process is fully manual across three separate data sources with no unified view. |
| Identify automation opportunities | ✅ Done | Mapped to each step of the workflow. Highest-leverage opportunities are in synthesis and reporting narrative generation. |
| Evaluate within VA AI and governance constraints | ✅ Done | Proposed AI use is limited to non-PII synthesis and doc generation tasks. No raw user data is passed to external AI tools. |
| Propose approaches for automation or improved workflows | ✅ Done | Five workstreams proposed with specific AI roles defined per step. |
---

## Current Workflow — Existing Products (5)

The current process is fully manual, repeated independently for each of 5 existing products:

| Step | Current manual step | Pain point |
|---|---|---|
| 1 | Pull GA exports, Medallia scores, and call center summaries separately for each product | Three separate exports, no unified view, repeated for each of 5 products |
| 2 | Manually review research repository documents for user pain points | Time-intensive read-through; no consistent extraction method across studies |
| 3 | Manually cross-reference findings across data sources to identify recurring issues | Pattern-matching done by memory and judgment; inconsistent across researchers |
| 4 | Write up pain point summaries and recommendations per product | Written from scratch each time; no reusable format; variable structure |
| 5 | Produce monthly metric updates and quarterly trend reviews ad hoc | No template; inconsistent cadence; narrative written manually every cycle |

---

## Automation & Workflow Improvement Opportunities

> **Legend:** `HIGH AI` = AI does the heavy lifting · `MEDIUM AI` = AI accelerates, human judges · `HUMAN ONLY` = judgment call, no AI

| # | Task | AI Role | Proposed Approach |
|---|---|---|---|
| A | Pain point extraction from research repo | `HIGH AI` | Use Microsoft Copilot to extract pain points from GitHub-hosted research documents. Structured prompt ensures consistent output format across all products and researchers. |
| B | Synthesis + deduplication across sources | `HIGH AI` | Feed extracted pain points into Copilot to group, deduplicate, and flag items appearing across multiple sources. Reduces hours of manual cross-referencing to minutes. |
| C | GA gap analysis | `MEDIUM AI` | Share current GA tracking + success metrics with Copilot to identify what's missing. Human review required — AI surfaces gaps, researcher confirms. |
| D | Monthly report narrative | `HIGH AI` | Paste monthly metric exports into Copilot with a standardized prompt. AI generates consistent narrative commentary across all 8 products in one session. |
| E | Direction calls — act now vs. research first | `HUMAN ONLY` | Intentionally kept as a human judgment step. Requires knowledge of business context, PM priorities, and source quality that AI cannot reliably evaluate. |

---

## Proposed Workstreams

### A — Pain Point Audit *(existing products, 5)*
Mine GA, Medallia, call center data, and the research repo. Produce a prioritized problem list per product with a direction call — **act now**, **research first**, or **monitor** — for each item.

**Goal:** A complete, prioritized list of pain points per product that PMs can use to make roadmap decisions without needing to ask for interpretation.

**AI role:** Extract pain points from repo documents, deduplicate and group them across sources, draft the structured output doc. Researchers make all direction calls.

---

### B — GA Audit + Recommendations *(existing products, 5)*
Review current GA tracking, identify gaps against success metrics, produce a prioritized recommendations doc for front-end. UX recommends; FE implements.

**Goal:** A clear, actionable gap list per product that FE can act on directly — prioritized so they know what to tackle first, with each gap tied back to the metric it supports.

**AI role:** Compare current tracking against success metrics to surface gaps, then draft the FE-facing recommendation doc.

---

### C — Repo Review + Metric Refinement *(pre-launch products, 3)*
Extract pain points from existing evaluations and research in the repo. Cross-check against current success metrics to identify gaps in both directions. Refine metrics before launch.

**Goal:** Ensure pre-launch products are measuring the right things from day one. Every pain point maps to a metric; every metric connects to a real user struggle.

**AI role:** Extract pain points from repo docs, cross-check against success metrics, surface uncovered pain points and orphaned metrics.

> ⚠️ **Dependency:** Must complete before Workstream D. Metrics must be finalized before the GA spec is written.

---

### D — GA Instrumentation Spec *(pre-launch products, 3)*
Define what GA needs to track from day one of launch, based on refined metrics from C. Write spec for FE. Validate in staging before go-live.

**Goal:** Clean, meaningful data from launch day — no gaps or misfires in the first month of reporting.

**AI role:** Translate refined success metrics into a structured event list, draft the full FE-facing spec. Researchers validate against the actual product UI before handoff.

---

### E — Monthly + Quarterly Reporting *(all 8 products, ongoing)*
Build a reusable report template. Monthly pulse covers key metrics across all products. Quarterly trend analysis re-scores pain points and updates direction calls.

**Goal:** A repeatable system that keeps the pain point list live — not a one-time artifact. PMs always have a current picture to make decisions from.

**AI role:** Generate narrative commentary from raw metric exports each cycle. Surface trend patterns and pain point movement in quarterly analysis. Template built once; AI makes each run fast.

| Report | Cadence | Contents |
|---|---|---|
| Monthly pulse | Monthly | Traffic, CSAT, call volume, task completion · health signal per product |
| Quarterly trend | Quarterly | 3-month trend analysis · pain point re-scoring · updated direction calls · feeds back into roadmap |

---

## VA AI & Governance Constraints — Approach

All proposed AI use operates on aggregated, anonymized, or synthesized data — not raw user records or PII.

### ✅ What AI touches
- Research repo documents (already synthesized findings)
- Exported metric summaries
- Pain point lists
- Draft recommendation text

### ❌ What AI does not touch
- Raw GA user-level data
- Individual Medallia responses
- Call center transcripts
- Any data containing veteran PII

### Tool in use
**Microsoft Copilot** — already within VA's approved M365 ecosystem. No data leaves the approved environment.

---

## Recommended Next Steps

- [ ] Review this document with PMs to align on scope, workstream prioritization, and any governance questions
- [ ] Begin workstreams A and C in parallel — one researcher per track — using a shared prompt library stored in the GitHub repo
- [ ] Build the monthly report template (E1) early to clarify what GA gaps in B and D actually need to be closed

---

*Prepared by UX · March 25th, 2026*
