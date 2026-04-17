# VA Component Library 
Team: Design & Forms Systems | VA.gov Platform

## Overview
The VA Component Library is the set of accessible, reusable UI components that VA.gov product teams assemble into Veteran-facing experiences. Components are designed, specified in Figma, implemented as Web Components, published to Storybook, and documented on design.va.gov.

## Problem Statement
- Without a shared component library, every VA.gov product team would re-implement primitives like buttons, alerts, modals, and form controls, producing inconsistent experiences, accessibility regressions, and duplicated engineering effort across 100+ products.

- The current component library covers most high-use primitives (va-button, va-alert, va-accordion, va-modal, form-control-components, etc.), but component gaps, inconsistent adoption, and requests for new variants continue to surface. 
- Meeting VA's accessibility (Section 508 / WCAG 2.2 AA) and Veteran experience standards at scale requires a curated, well-governed component library.

- # VA.gov Design System — Components & Patterns

| Component / Pattern | Description | Release Date | Links |
|---|---|---|---|
| **Prefill Pattern** | The prefill pattern tells Veterans where their information is coming from, what they can edit, and how to update what they can't. These examples make it easier to implement correctly the first time. **NOTE:** Follow `international-phone-number` channel — we have not enabled the international phone number yet, since VA Profile can't accept it at this time.<br><br>• [Prefill – Minimal workflow](#): Shows the prefill pattern using the minimal header/footer template.<br>• [Prefill – Standard header/footer](#): Shows the full authenticated experience with the standard VA.gov introduction page. | April 2026 | 📖 [Pattern guidance](#) \| [Update the prefilled information guidance](#) <br> 💻 [Code (Forms library)](#) |
| **Multi file upload with document type array builder pattern** | This pattern is intended for scenarios where Veterans need to upload supporting documents and associate each file with a specific document type — such as a DD-214, birth certificate, or discharge papers. This is guidance only. There is no pre-built coded pattern at this time. Teams can implement this pattern today using a combination of the Array Builder pattern and the Single file input component.<br><br>**Examples** — See this pattern in action in the mock form:<br>• [Supporting documents — Required](#)<br>• [Supporting documents — Optional](#) | April 2026 | _Guidance only — no pre-built coded pattern._ |
| **Prefill Pattern** | Reduces form completion burden by pre-populating known Veteran information from their VA profile, with accessible error handling when data is missing or invalid. | March 2026 | — |
| **Details** `va-details` | Reveals optional, supporting information that isn't required for most users to complete a task. It is used to provide plain language help at the point where it is most relevant. | April 2026 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Card Error State** `va-card-status` | Provides consistent, accessible visual and programmatic alerts when card information is missing or invalid. | February 2026 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Colored Tags** `va-tag-status` | Adds visual hierarchy and semantic meaning to staff-facing apps, aligned with VADS Alert color conventions to improve data scanning efficiency. | February 2026 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Sort** `va-sort` | Enables users to organize and reorder information (search results, lists, data sets) to find relevant content quickly. | February 2026 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Form Submitter Pattern** | Guidance only: This pattern helps determine two things: who is filling out the form (the person typing or writing) and who the form is about (the person who will get the benefits). Sometimes these are the same person and sometimes they are different. | January 2026 | — |
| **Branch of Service** `serviceBranchPattern` | Standardizes how Veterans select their military branch, improving data accuracy and form consistency across VA.gov applications. | October 2025 | — |
| **Tabs** `va-tabs` | Updated tab design requested by the Claim Status Tool team to fix a 508 defect where tab items were styled as links without keyboard functionality. | September 2025 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Side Navigation** `va-sidenav` | Provides consistent, accessible, responsive side navigation between major sections. Added to support IIR team's child nav item on va.gov/profile. | August 2025 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Segmented Button** `va-button-segmented` | Creates intuitive navigation allowing users to access related content sections without leaving their current context. | July 2025 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Search Filter** `va-search-filter` | Improves content findability by letting users filter content, reducing cognitive burden. Addresses Veteran feedback on poor findability. | June 23, 2025 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **International Phone** `va-telephone-input` | Enables support for international phone numbers across VA.gov, improving accessibility and usability for Veterans outside the US. | June 12, 2025 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |

---

> **Note:** All link URLs are currently placeholders (`#`). Replace each `#` with the actual URL for Guidance, Figma, Storybook, code references, and example pages.

**How might we** keep the VA Component Library comprehensive, accessible, and easy to adopt so every VA.gov product can deliver a consistent Veteran experience without re-inventing designs & implementations?

## Desired User Outcomes
- Product teams find the component they need and can drop it in with minimal custom code
- Designers have Figma components that map 1:1 to implemented components
- New components ship with documentation, Storybook examples, accessibility review, and Figma parity
- Consumers know what is supported, deprecated, and on the roadmap

## Undesired User Outcomes
- Teams fork or re-build components because library coverage is missing or hard to find
- Components diverge between Figma and code
- Accessibility bugs reach production in library components
- Breaking changes ship without adequate migration guidance

## Desired Business Outcomes
- Higher component adoption rate across VA.gov products
- Fewer accessibility incidents attributable to custom-built UI
- Reduced design and engineering time per net-new product page
- Clear roadmap that VA leadership can plan against

## Undesired Business Outcomes
- Low adoption signaling the library does not meet real team needs
- Support load consuming the team's entire capacity (reactive vs. strategic work)
- Fragmentation across web and mobile platforms

## Measuring Success

### Key Performance Indicators (KPIs)

*Data sources: TBD — candidate sources: GitHub (component library repo), Storybook analytics, Domo design-system adoption dashboard, axe CI, design.va.gov GA.*

| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| [Metric](https://design.va.gov/about/metrics/) | design.va.gov component-page pageviews | Component adoption rate across VA.gov | CSAT from consumer-team survey | Open a11y defects in library components |



### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ Obj 1 (Optimize software delivery for Veteran impact) — component reuse directly accelerates teams
- ✅ Obj 2 (Operate products with high reliability and security) — library components are accessibility- and security-reviewed
- ✅ Obj 3 (Relentlessly improve user experience) — consistent, accessible UI raises experience baseline


## Assumptions
1. **Assuming** VA.gov products will continue to consolidate on the Web Components library rather than fragment to other frameworks. 
2. **Assuming** the Figma component library and code library stay in sync. 
3. **Assuming** current team capacity can cover both maintenance and new component work.


## Launch Strategy
- Individual components are announced in #platform-design-system and in release notes published to [design.va.gov](https://design.va.gov/about/whats-new)
- 
#### Communications
- Slack: #platform-design-system
- GitHub: [component-library](https://github.com/department-of-veterans-affairs/component-library) (confirm URL)
- Docs: design.va.gov
- Storybook: (confirm URL)

#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Web Dev: TBD
- Mobile Dev: Tim Roettger
- Designers: Barb Denney, Dan Brady, Jeana Clark

#### Stakeholders
- All VA.gov product teams consuming components
- Mobile app team (for parity)
- CIA (Center for Information & Analytics) — content review
- VA ADE accessibility office
