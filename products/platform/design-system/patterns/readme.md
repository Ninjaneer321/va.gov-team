# VA Patterns Library

## Overview
The VA Patterns Library documents repeatable solutions for multi-component user flows on VA.gov — patterns like prefill, eligibility prompts, service history, multiple-response sets, and file inputs. Patterns sit one level above components: they combine design-system components, content standards, and interaction rules into a proven solution teams can reuse rather than reinvent.


| Component / Pattern | Description | Release Date | Links |
|---|---|---|---|
| **Prefill Pattern** | The prefill pattern tells Veterans where their information is coming from, what they can edit, and how to update what they can't. These examples make it easier to implement correctly the first time. **NOTE:** Follow `international-phone-number` channel — we have not enabled the international phone number yet, since VA Profile can't accept it at this time.<br><br>• [Prefill – Minimal workflow](#): Shows the prefill pattern using the minimal header/footer template.<br>• [Prefill – Standard header/footer](#): Shows the full authenticated experience with the standard VA.gov introduction page. | April 2026 | 📖 [Pattern guidance](#) \| [Update the prefilled information guidance](#) <br> 💻 [Code (Forms library)](#) |
| **Multi file upload with document type array builder pattern** | This pattern is intended for scenarios where Veterans need to upload supporting documents and associate each file with a specific document type — such as a DD-214, birth certificate, or discharge papers. This is guidance only. There is no pre-built coded pattern at this time. Teams can implement this pattern today using a combination of the Array Builder pattern and the Single file input component.<br><br>**Examples** — See this pattern in action in the mock form:<br>• [Supporting documents — Required](#)<br>• [Supporting documents — Optional](#) | April 2026 | _Guidance only — no pre-built coded pattern._ |
| **Prefill Pattern** | Reduces form completion burden by pre-populating known Veteran information from their VA profile, with accessible error handling when data is missing or invalid. | March 2026 | — |
| **Details** `va-details` | Reveals optional, supporting information that isn't required for most users to complete a task. It is used to provide plain language help at the point where it is most relevant. | April 2026 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |



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

