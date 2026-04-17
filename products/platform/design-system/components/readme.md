# VA Component Library 2025  - 2026
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
| **Details** `va-details` | Reveals optional, supporting information that isn't required for most users to complete a task. It is used to provide plain language help at the point where it is most relevant. | April 2026 | [Guidance](https://design.va.gov/components/details) \| [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=42924-290) \| [Storybook](https://design.va.gov/storybook/?path=/docs/components-va-details--docs) |
| **Card Error State** `va-card-status` | Provides consistent, accessible visual and programmatic alerts when card information is missing or invalid. | February 2026 | [Guidance](https://design.va.gov/components/card/card-status/) \| [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=44355-6605&t=CELULnAK5Ke87Rc1-1) \| [Storybook](https://design.va.gov/storybook/?path=/docs/components-va-card-status--docs) |
| **Colored Tags** `va-tag-status` | Adds visual hierarchy and semantic meaning to staff-facing apps, aligned with VADS Alert color conventions to improve data scanning efficiency. | February 2026 | [Guidance](https://design.va.gov/components/tag/tag-status/) \| [Figma](https://design.va.gov/components/tag/tag-status/) \| [Storybook](https://design.va.gov/storybook/?path=/docs/components-va-tag-status--docs) |
| **Sort** `va-sort` | Enables users to organize and reorder information (search results, lists, data sets) to find relevant content quickly. | February 2026 | [Guidance](https://design.va.gov/components/sort/) \| [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=40936-5762&t=RJz70e6yAZDcvGY3-1) \| [Storybook](https://design.va.gov/storybook/?path=/docs/components-va-sort--docs) |
| **Side Navigation** `va-sidenav` | Provides consistent, accessible, responsive side navigation between major sections. Added to support IIR team's child nav item on va.gov/profile. | August 2025 | [Guidance](#) \| [Figma](#) \| [Storybook](#) |
| **Segmented Button** `va-button-segmented` | Creates intuitive navigation allowing users to access related content sections without leaving their current context. | July 2025 | [Guidance](https://design.va.gov/components/button/button-segmented) \| [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=28629-138&t=3efQOtruhM1IdGDg-1) \| [Storybook](https://design.va.gov/storybook/?path=/docs/va-button-segmented--docs) |
| **Search Filter** `va-search-filter` | Improves content findability by letting users filter content, reducing cognitive burden. Addresses Veteran feedback on poor findability. | June 23, 2025 | [Guidance](https://design.va.gov/components/search-filter) \| [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=29763-24650&t=RwH9qbwZGs859rIX-1) \| [Storybook](https://design.va.gov/storybook/?path=/docs/components-va-search-filter--docs) |
| **International Phone** `va-telephone-input` | Enables support for international phone numbers across VA.gov, improving accessibility and usability for Veterans outside the US. | June 12, 2025 | [Guidance](https://design.va.gov/components/form/telephone-input) \| [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=31366-83) \| [Storybook](https://design.va.gov/storybook/?path=/docs/components-va-telephone-input--docs) |
| **Tabs** `va-tabs` | Updated tab design requested by the Claim Status Tool team to fix a 508 defect where tab items were styled as links without keyboard functionality. | September 2025 | [Guidance](https://design.va.gov/components/tabs) \| [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=24991-2000) \| [Storybook](https://design.va.gov/storybook/?path=/story/components-va-tabs--default) |

--

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
