# VA Component Library 
Team: Design & Forms Systems | VA.gov Platform*

## Overview
The VA Component Library is the set of accessible, reusable UI components that VA.gov product teams assemble into Veteran-facing experiences. Components are designed, specified in Figma, implemented as Web Components, published to Storybook, and documented on design.va.gov.

## Problem Statement
- Without a shared component library, every VA.gov product team would re-implement primitives like buttons, alerts, modals, and form controls, producing inconsistent experiences, accessibility regressions, and duplicated engineering effort across 100+ products.

- The current component library covers most high-use primitives (va-button, va-alert, va-accordion, va-modal, form-control-components, etc.), but component gaps, inconsistent adoption, and requests for new variants continue to surface. 
- Meeting VA's accessibility (Section 508 / WCAG 2.2 AA) and Veteran experience standards at scale requires a curated, well-governed component library.

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
