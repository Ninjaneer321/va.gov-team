# Branch of Service Pattern — Product Outline

[Mock Form Example:-(https://staging.va.gov/mock-form-patterns/service-branch)

## Overview
The Branch of Service pattern defines a single, consistent way for VA.gov forms to ask Veterans which branch (or branches) of the U.S. armed forces they served in. It standardizes input type (dropdown vs. open text), the list of branches, labeling, and multi-entry behavior so every form collects this universally-required field the same way.

## Problem Statement
A form-field audit of 18 VA forms found that **"Branch of Service" appears in 100% of audited service-history forms** It is the single most common service-history question across the VA.gov portfolio. Yet implementation is inconsistent: some forms use dropdowns (with varying lists: Army, Navy, Marine Corps, Air Force, Coast Guard, Space Force, NOAA, USPHS), others use open text fields, and labels vary across forms. Eight of the 18 forms support multiple service-history entries (one per branch or period), while others support only a single value.

This inconsistency causes three concrete problems:
1. **Data quality** Open-text branch entries produce free-form strings that are hard to validate or analyze downstream
2. **Veteran experience** Veterans who serve in multiple branches have to re-learn the UI per form; branches like Space Force, NOAA, and USPHS are present on some forms and missing from others
3. **Engineering cost** 18 forms implement the same conceptual field in different ways

Branch of Service is also a candidate for prefill from VA Profile / MPI once a Veteran's branch(es) of service are available.

**How might we** standardize the Branch of Service input across every VA.gov form so Veterans answer it the same way, data is canonical, and the field is prefill-ready?

## Desired User Outcomes
- Veterans see the same Branch of Service input and branch list on every VA.gov form
- Veterans with service in multiple branches can add multiple entries where the form requires it
- The branch list reflects current reality — includes Space Force (est. 2019), NOAA, and USPHS where appropriate
- Once prefill from VA Profile / MPI is wired up, Veterans see their branch(es) already filled in and can correct inline - TBD

## Undesired User Outcomes
- Veterans with non-traditional service (Space Force, NOAA, USPHS, Coast Guard when under DHS) can't find their branch in the list
- Multi-branch Veterans are forced into single-entry forms and lose data
- Screen-reader users get inconsistent labels and announcements across forms

## Desired Business Outcomes
- All 18 audited forms (and future forms) converge on one Branch of Service component
- Reduced per-form design and engineering time for service-history sections
- Foundation for a full Service History pattern (dates, place of release, service number)

## Undesired Business Outcomes
- Pattern ships but forms don't migrate, leaving variations intact
- Canonical branch list becomes stale (e.g., doesn't track new branches or reclassifications)


## Measuring Success

### Key Performance Indicators (KPIs)


| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| Metric | Time to complete service-history section | Forms using the standard Branch of Service component | Veteran error / correction rate on the field |

#### Baseline KPI Values

| Metric | Baseline | Source | Target |
|---|---|---|---|
| Forms using a standard Branch of Service component | 0 / 18 audited forms on a shared pattern | `Form field audit.md` | ≥ 12 of 18 migrated by end of FY26 |
| Forms supporting multi-branch entry (where needed) | 8 / 18 | `Form field audit.md` | All forms where multi-branch is relevant |
| Canonical branch list coverage | TBD — confirm current list vs Army, Navy, Marine Corps, Air Force, Coast Guard, Space Force, NOAA, USPHS | Forms Library + design.va.gov | Published canonical list with versioning |
| Open-text Branch of Service fields remaining | TBD (some audited forms use open text) | `Form field audit.md` | 0 |
| Forms-team CSAT for the pattern | TBD — run baseline at launch | Quarterly forms-team survey | ≥ 4.0 / 5.0 |

### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ **Obj 1 (Optimize software delivery for Veteran impact)** Retiring bespoke implementations reduces per-form engineering cost
- ✅ **Obj 2 (Operate products with high reliability and security)** List enables downstream validation
- ✅ **Obj 3 (Relentlessly improve user experience)** Consistent branch selection across every form
- ✅ **Obj 4 (Empower DSD teammates)** — published pattern + canonical value set replaces tribal knowledge

## Assumptions
1. **Assuming** the canonical branch list (Army, Navy, Marine Corps, Air Force, Coast Guard, Space Force, NOAA, USPHS) is complete and stable for VA.gov purposes. 
2. **Assuming** VA Profile / MPI can eventually supply branch(es) of service for prefill. 
3. **Assuming** forms teams will migrate within FY26 if given a drop-in component. 

## Solution Approach


No component, canonical branch list, or published pattern page exists yet.

### What we're building next

Near-term (FY26):
- Pilot migration on 1–2 forms from the audit
- Publish migration guide for the remaining 16
- Wire prefill once VA Profile / MPI exposes branch(es) of service


### Initiatives
- Branch of Service standardization (this effort)
- Full Service History pattern (follow-on)
- Prefill integration (dependent on Prefill pattern + VA Profile data)

## Launch Strategy
1. Publish branch list and pattern page on design.va.gov
2. Announce in #platform-design-system and at VA Forms stand-up
3. Ship Forms Library component with single- and multi-entry variants



## Solution Narrative

### Current Status
Research / discovery phase. Audit of 18 forms is complete and identifies Branch of Service as the highest-leverage target. No component, canonical list, or pattern page published yet.

---

#### Communications
- Slack: **#platform-design-system**
- Docs: design.va.gov/patterns/branch-of-service (target URL — confirm)
- Audit source: `products/platform/design-system/patterns/Service History/Form field audit.md`

#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- Technical Lead (Forms Library): Robert Hassell (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Designers: Barb Denney, Dan Brady, Jeana Clark


#### Stakeholders
- All VA.gov forms teams with service-history questions (at least the 18 audited forms)
- Forms Library consumers
- VA Profile / MPI teams (#va-profile) — for future prefill integration
- CIA (content standards for branch labels and help text)
