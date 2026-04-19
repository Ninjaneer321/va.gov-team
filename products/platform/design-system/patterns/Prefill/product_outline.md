# Prefill Pattern — Product Outline


## Overview
The Prefill pattern defines how VA.gov forms prepopulate known Veteran data (name, date of birth, SSN, address, phone, email) so Veterans don't re-enter information VA already has. It consolidates six legacy prefill mechanisms into a single, accessible, consistent pattern with shared components, review-page behavior, and decision rules for when and how to prefill.

## Problem Statement
- VA.gov has at least **six distinct prefill mechanisms** in active use — `ContactInfo` component (25 forms / 17% adoption), `prefillTransformer` (19 forms, 1,906 LOC across 36 files), `PersonalInformation` component (12 forms), `profileContactInfo` pattern (5 forms / 3%), `PrefillMessage` (23 LOC alert), and direct `formData` prepopulation (18 forms). Each solves the same problem differently, which means Veterans see inconsistent behavior, teams duplicate work, and maintenance cost compounds as the forms portfolio grows past 75+ digital forms.
- A unified pattern is the prerequisite for raising prefill quality, expanding coverage to LOA3 forms that don't prefill today, and retiring the most complex legacy code (`prefillTransformer`).
- Prefill also sits at the intersection of identity (LOA1 vs LOA3), data availability (MPI, VA Profile API, BIRLS), and Veteran trust — if prefilled data is wrong, Veterans lose confidence that VA has their record right.

**How might we** consolidate VA.gov's six prefill mechanisms into one documented, accessible pattern that every forms team can adopt, so Veterans see consistent prefill behavior and teams stop re-implementing the same logic?

## Desired User Outcomes
- Veterans see consistent prefill behavior across every VA.gov form (same alert, same review-card UX, same "update profile vs this form only" choice)
- Veterans can correct prefilled data inline without leaving the form
- Veterans know which data is coming from VA Profile vs. entered by them
- Forms teams adopt the new pattern with Figma artifacts, content guidance, and reference implementation
- Engineers retire `prefillTransformer` custom code in favor of the shared pattern

## Undesired User Outcomes
- Prefilled data is wrong and Veterans don't notice before submission
- Prefill changes to the current form overwrite VA Profile unintentionally (or vice versa)
- Different forms show different prefill UX, increasing cognitive load
- Accessibility regressions in the new review-card / alert components

## Desired Business Outcomes
- Migrate all 32 prefilling forms off legacy mechanisms onto the unified pattern
- Reduce prefill codebase by retiring `prefillTransformer` 
- Increase form start-to-submit completion rates by reducing friction on known-data fields
- Provide a documented decision framework teams use to choose the right prefill approach for a new form

## Undesired Business Outcomes
- Migration stalls, leaving VA.gov with 7 mechanisms instead of 6
- Pattern ships but teams don't adopt 
- Data-source drift (MPI vs VA Profile API) produces inconsistent prefill across forms

## Measuring Success

### Key Performance Indicators (KPIs)

*Data sources: GitHub (vets-website repo), Google Analytics (VA.gov form funnels), Domo design-system adoption dashboard, VA Profile API, quarterly forms-team survey.*

| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| Metric | Form abandonment on prefilled pages | Adoption of new Prefill pattern | Rate of Veterans editing prefilled data (trust signal) | Accessibility + data-accuracy defects |



### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ **Obj 1 (Optimize software delivery for Veteran impact)** Retiring `prefillTransformer` and consolidating 6 mechanisms into 1 directly reduces per-form engineering cost
- ✅ **Obj 2 (Operate products with high reliability and security)** Shared pattern centralizes a11y and data-handling review
- ✅ **Obj 3 (Relentlessly improve user experience)** Consistent prefill UX across every form
- ✅ **Obj 4 (Empower DSD teammates)** Published pattern + decision framework replaces tribal knowledge

## Assumptions
1. **Assuming** VA Profile API + MPI remain the source for prefillable data. 
2. **Assuming** forms teams have capacity to migrate off legacy mechanisms within FY26.
3. **Assuming** VA Profile API data-quality percentages (96% address, 86% phone, 72% email) do not materially regress. 



### How this solution evolves
1. Pattern is documented in `patterns/Prefill/` and published to design.va.gov
2. Pilot form migrates as reference implementation
3. Migration cohorts move forms off legacy mechanisms, prioritized by usage and simplicity
4. `prefillTransformer` is deprecated once migration threshold is met
5. Pattern receives quarterly review alongside DS release cadence

### Supporting Research

- VA Profile team docs: [2025 Profile Features SharePoint](https://dvagov.sharepoint.com/:x:/r/sites/AuthenticatedExperience2/Shared%20Documents/AE%20Governance/2025%20Profile%20Features.xlsx)
- MPI reference: [Master Patient Index Technical Manual](https://www.va.gov/vdl/documents/Infrastructure/Master_Patient_Index_(MPI)/rg1_0_pm.pdf)


## Launch Strategy
1. Publish pattern docs to design.va.gov and announce in #platform-design-system
2. Track adoption

## Launch Dates
- Pattern analysis published: **2026-03-11** (`anaysis.md`)
- Pattern pilot target: **April 2026**
- First migration cohort target: **TBD — FY26**


---

#### Communications
- Slack: **#platform-design-system** (pattern owner), **#va-profile** (VA Profile API team), **#accountexp-authexp** (Profile UX)

#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- Technical Lead (Forms Library): Robert Hassell (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Designers: Barb Denney, Dan Brady, Jeana Clark

#### Stakeholders
- All VA.gov forms teams (32 forms currently prefill; ~75 forms total)
- VA Profile team (API and data ownership) — #va-profile
- Authenticated Experience team (VA.gov/profile UI) — #accountexp-authexp
- MPI team (authoritative identity source)
- VA ADE accessibility office
- CIA (content standards for prefill alerts and review-card copy)
