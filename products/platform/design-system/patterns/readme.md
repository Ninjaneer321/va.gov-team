# VA Patterns Library

## Overview
The VA Patterns Library documents repeatable solutions for multi-component user flows on VA.gov — patterns like prefill, eligibility prompts, service history, multiple-response sets, and file inputs. Patterns sit one level above components: they combine design-system components, content standards, and interaction rules into a proven solution teams can reuse rather than reinvent.


## Released:
## April 2026 - Prefill Pattern

- Prefill Pattern Mock Form Examples Now on Staging and ready to implement in your authenticated form

### We’ve published two mock form examples to help teams implement the Know when their information is prefilled pattern


 - Prefill – [Minimal workflow](https://staging.va.gov/mock-form-minimal-prefill/introduction) : Shows the prefill pattern using the minimal header/footer template.
 - Prefill – [Standard header/footer:](https://staging.va.gov/mock-form-prefill/introduction) Shows the full authenticated experience with the standard VA.gov introduction page
 - Sign in with any staging user to see the authenticated prefill experience.

- Why it matters: The prefill pattern tells Veterans where their information is coming from, what they can edit, and how to update what they can’t. These examples make it easier to implement correctly the first time.



## Problem Statement
Many VA.gov experiences share common flows (e.g., asking for service history, collecting repeated responses, prompting prefill, uploading files), but without a published patterns library each team designs and implements these independently. The result: inconsistent Veteran experiences, duplicated research, accessibility variation, and unnecessary engineering cost.

Teams also need patterns that bundle content, accessibility, and edge-case guidance — not just a Figma artifact.

**How might we** Publish and maintain a comprehensive patterns library so VA.gov teams consistently reuse proven, accessible flows instead of reinventing them per product?

## Desired User Outcomes
- Product teams find an authoritative pattern for common flows (prefill, multiple responses, service history, file upload, eligibility)
- Designers get Figma pattern files, content guidance, and accessibility considerations in one place
- Engineers get implementation-ready guidance tied to design-system components
- Patterns evolve based on real Veteran research, not one-off decisions

## Undesired User Outcomes
- Patterns diverge across products (especially high-frequency flows like prefill and file upload)
- Patterns are published but not kept current with component-library changes
- Teams bypass the patterns library because intake or updates are too slow

## Desired Business Outcomes
- Fewer one-off design and engineering reviews for repeated flows
- Reduced research duplication across product teams
- Higher Veteran task-completion rates on flows that adopt canonical patterns

## Undesired Business Outcomes
- Patterns go stale without maintenance ownership
- Team capacity overwhelmed by requests for bespoke variants
- Fragmented accessibility quality across implementations

## Measuring Success

### Key Performance Indicators (KPIs)


| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| [Metric](https://design.va.gov/about/metrics/) | Pattern page views on design.va.gov | Pattern adoption rate across VA.gov flows | Consumer-team CSAT for patterns | Patterns current-with-components count |

#### Baseline KPI Values

| Metric | Baseline | Source | Target |
|---|---|---|---|
| Pattern page pageviews (monthly, design.va.gov) | TBD | Google Analytics | +10% YoY |
| Pattern adoption rate | TBD | Domo adoption dashboard | ≥ 75% of applicable flows |
| Consumer-team CSAT for patterns | TBD — run baseline survey | Quarterly DS consumer survey | ≥ 4.0 / 5.0 |
| Patterns reviewed within last quarter | TBD | GitHub file metadata | 100% of published patterns |

### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ Obj 1 (Optimize software delivery for Veteran impact) — pattern reuse accelerates teams
- ✅ Obj 3 (Relentlessly improve user experience) — consistent Veteran flows
- ✅ Obj 4 (Empower DSD teammates) — patterns are a primary teaching artifact
- 🔄 Obj 2 (Operate products with high reliability and security) — shared a11y/content guidance reduces defects

## Assumptions
1. **Assuming** teams will reuse patterns when they are discoverable and current. 
2. **Assuming** Forms Library and component library remain stable sources of truth. 
3. **Assuming** Veteran research on existing patterns remains valid.
## Solution Approach

### What we built (or: What this product does)
Published pattern docs:
- Multiple Responses
- Prefill
- Service History
- Eligibility
- va-file-input (file input pattern)

c.


#### Communications
- Slack: #platform-design-system
- Docs: design.va.gov (patterns section)

#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- PM: Carol Wong (Oddball)
- Technical Lead (Forms Library): Robert Hassell (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Designers: Barb Denney, Dan Brady, Jeana Clark

#### Stakeholders
- All VA.gov product teams using multi-component flows
- Forms Library consumers
- VA ADE - accessibility office
- CIA (content standards)

