# Multiple Responses Pattern (List and Loop / Array Builder) — Product Outline

## [Mock Form Examples](https://staging.va.gov/mock-form-patterns/treatment-records)

## Overview
- The Multiple Responses pattern — known interchangeably on VA.gov as **List and Loop** (UX name) and **Array Builder** (engineering name), is the way VA.gov forms collect variable-length lists of items such as dependents, previous jobs, service periods, medical expenses, treatment records, and financial accounts. 
- It pairs a summary/review page with per-item item pages and supports optional Yes/No gating, max-item limits, and conditional page visibility.

## Problem Statement
- - Many VA forms need to collect lists of things like, dependents, employers, deceased persons, treatment records, income sources, where the number of items is not known in advance.
- - Before List and Loop launched in May 2024, each forms team implemented this independently, producing inconsistent UX and duplicated code.

One year in (June 2025 discovery), List and Loop is adopted by **31 applications (21% of all VA.gov apps)** with **81 array instances spanning 481 total pages (346 item pages + 135 summary pages)**. Adoption is strong, but usage patterns and team feedback surface real usability and coverage gaps:

- **Edit mode is rigid** No back button, unclear save/cancel behavior, users can't jump directly to a specific question. Research on 0781 (disability claims events) found 6/6 participants forgot the edit flow was multi-paged.
- **Complex arrays hurt more than simple ones** Page count ranges from 1 to 21, but the pattern treats a 1-page array the same as a 21-page one. A single "dependents" array in 686C-674-v2 spans 21 item pages.
- **Conditional logic inside loops is under-documented** — teams handle data-reset and validation behavior inconsistently.
- **Most arrays have no maxItems** 68 of 81 (84%) are unbounded, which can lead to overwhelming forms.

**How might we** Evolve the Multiple Responses pattern so simple and complex arrays get the right UX, edit mode matches Add mode, and teams land on consistent naming and limits, without breaking the 31 apps already using it?

## Desired User Outcomes
- Veterans can add, edit, delete, and cancel items with predictable behavior regardless of array complexity
- Editing a multi-page item lets Veterans navigate (back/next) and cancel all changes, not just the current page
- Veterans know when conditional logic changes affect previously-entered data
- Prefilled items (e.g., dependents from VA Profile) appear in the list and are correctable inline
- Progress is visible for long multi-page loops (e.g., Dependents 21-page flow)

## Undesired User Outcomes
- Veterans lose data because "save" vs. "cancel" behavior is ambiguous
- Editing a deep page of a multi-page item sends Veterans back through the full flow unexpectedly
- Conditional logic silently resets data Veterans entered earlier
- Long arrays overwhelm Veterans because there is no progress indicator or item limit

## Desired Business Outcomes
- All production forms with list collection use this pattern 
- Simple and complex variants reduce per-form design and engineering time



## Measuring Success

### Key Performance Indicators (KPIs)

*Data sources: GitHub (vets-website, va.gov-team-forms repos), `patterns/Multiple Responses/anaylysis.md` (2026-02-19), `discovery-Aug25.md` (June 2025), VA.gov research repository (label `DSP: Ask users for multiple responses`), quarterly forms-team survey, Google Analytics form funnels.*

| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| Metric | Task-completion rate on edit mode (per research) | # apps using List and Loop | Forms-team CSAT on pattern | Open P1/P2 bugs + stale generic "items" labels |

#### Baseline KPI Values

| Metric | Baseline | Source | Target |
|---|---|---|---|
| Apps using List and Loop | 31 apps / 21% of VA.gov apps | `anaylysis.md` (2026-02-19) | +10 apps FY26 (reach ~40 apps) |
| Total array instances in production | 81 | `anaylysis.md` | Continue to grow; measure coverage, not just count |
| Production forms using the pattern | 17 (plus 6 mock forms) | `discovery-Aug25.md` | +5 production forms FY26 |
| Arrays using generic "items" label | 23 of 81 (28%) | `anaylysis.md` | ≤ 5 (production forms only; mocks exempt) |
| Arrays with no max-item constraint | 68 of 81 (84%) | `anaylysis.md` | Reduce to ~50% as teams add reasonable limits |
| Apps using Yes/No gating (for optional arrays) | 18 of 31 (58%) | `anaylysis.md` | ≥ 80% for optional arrays (recommended pattern) |
| Edit-mode task completion (0781 research) | 6/6 struggled to edit deep pages; 6/6 succeeded on single-page edits | 526ez 0781 research (Feb 2025) | Re-test after edit-mode parity work; target 5/6+ success on multi-page edit |
| Open pattern bugs (P1/P2) | ≥ 6 known issues (#2033, #1925, #1497, #2026, #105568, #105599) | `discovery-Aug25.md` | 0 P1/P2 open > 30 days |
| Forms-team CSAT on pattern | TBD — run baseline at FY26 kickoff | Quarterly forms-team survey | ≥ 4.0 / 5.0 |

### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ **Obj 1 (Optimize software delivery for Veteran impact)** Shared pattern keeps eliminating bespoke array code
- ✅ **Obj 2 (Operate products with high reliability and security)** Closing known bugs 


**Current capabilities:**
- Summary + item-page model (1–21 item pages supported)
- Optional Yes/No gating ("Do you have any dependents?")
- Required / optional flag; maxItems constraint (no minItems in production use)
- Conditional page visibility (`depends`)
- Custom titles via `arrayBuilderItemFirstPageTitleUI` / `arrayBuilderItemSubsequentPageTitleUI`
- Text config: `nounSingular`, `nounPlural`, `cardDescription`, `getItemName`

### What we're building next
Pulled from `discovery-Aug25.md` — tracked in VA.gov-team-forms issues:
- **Edit-mode navigation** (back button, save-all-changes semantics) — [#1981](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1981)
- **Predefined-list support** (prefill into a loop) — [#2125](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/2125)
- **Conditional flows in edit path** — [#2126](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/2126)
- **Simple vs. complex variant** — design exploration needed (scope TBD)
- **Progress indicator / content cart** for long loops — design exploration
- **Summary-card deep links** — make summary items clickable to specific questions
- **Min/Max item configuration** — [#1656](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1656)



## Launch Strategy
Pattern is already live. Each enhancement ships behind a Forms Library release with migration notes, announced in #platform-design-system and at VA Forms stand-up. Major changes (edit mode, variants) go out with a deprecation window for any breaking behavior.

## Launch Dates
- Pattern launched: **May 2024**
- Discovery retro with forms teams: **June 2025** (documented in `discovery-Aug25.md`)
- Cross-portfolio analysis: **February 19, 2026** (`anaylysis.md`)


## Solution Narrative

### Current Status
**Active, widely adopted, with known gaps.** 31 apps / 81 arrays / 481 pages in production. One-year discovery identified concrete themes. Bug backlog is non-trivial but well-documented. Naming is "List and Loop" (UX) / "Array Builder" (engineering) / "Multiple Responses" (design-system pattern folder)


---

#### Communications
- Slack: **#platform-design-system**
- GitHub (pattern + bug tracking): [VA.gov-team-forms](https://github.com/department-of-veterans-affairs/VA.gov-team-forms) and [va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team)
- Docs: design.va.gov/patterns/multiple-responses (target URL — confirm)
- Pattern source: `products/platform/design-system/patterns/Multiple Responses/`

#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- Technical Lead (Forms Library): Robert Hassell (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Designers: Barb Denney, Dan Brady, Jeana Clark
- Multiple Responses DRI: TBD — confirm with Tricia Baker

#### Stakeholders
- All 17+ VA.gov forms teams currently using the pattern (686C-674-v2, pensions, hca, ezr, income-and-asset-statement, 10-10d-extended, pre-need-integration, representative-21a, 526EZ, medical-expense-report, 21-4142-medical-release, survivors-benefits, 21-8940, 40-xxxx-ton, plus CHAMPVA and edu-benefits forms)
- Forms teams evaluating the pattern for new forms
- Forms Library consumers

