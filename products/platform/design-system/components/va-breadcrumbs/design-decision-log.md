# va-breadcrumbs Design Decisions
Last updated: 28 January 2026

- [ADR: 001 - Current page should be a link and look like a link](#ADR-001---Current-page-should-be-a-link-and-look-like-a-link)
- [ADR: XXX - DECISION LABEL](#ADR-XXX---Decision-Label)
- [ADR: XXX - DECISION LABEL](#ADR-XXX---Decision-Label)


## ADR 001 - Current page should be a link and look like a link
- a11y Discovery: Breadcrumb Link Cursor Event [#53331](https://github.com/department-of-veterans-affairs/va.gov-team/issues/53331)
- Breadcrumb's current page styling should not remove pointer events [#1458](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1458#issuecomment-1671807757)

### Status: APPROVED

- Date issue raised: Feb 8, 2023
- Decision date: August 15, 2023

### Context
Inconsistencies were identified in how navigation components handle the current page across different interaction methods:
- Current page is focusable, but not clickable
- Creates an inconsistent experience between keyboard and mouse users

Navigation components, like breadcrumbs, serve as wayfinding tools similar to navigation bars. Typically, navigation bars do not hide or disable particular input devices from interacting with an item just because the user is already on that page. The current inconsistency creates confusion and accessibility barriers.

Industry Standards and Best Practices:
[USWDS Pagination Guidance](https://designsystem.digital.gov/components/pagination/):
"Use a link for the current page for robustness. While it may sound counterintuitive to link to the current page in your Pagination component, it makes sense to include this as a link so screen readers voice the current page whether the user navigates by element or by tabbing."

[WAI-ARIA Authoring Practices Guide (APG)](https://github.com/w3c/aria-practices/issues/441):
For breadcrumbs, states that an <a> element with aria-current="page" should represent the current page

Other Design System Examples:
[GOV.UK Design System](https://design-system.service.gov.uk/components/breadcrumbs/) - Breadcrumbs (current page is a link)
[W3C Design System](https://design-system.w3.org/components/pagination.html) - Breadcrumbs (current page is a link)

### Decision
The current page in navigation components (pagination, breadcrumbs, and similar navigational elements) should be:

- Clickable - Display the hand cursor and respond to click events
- Focusable - Receive keyboard focus and respond to Enter/Space key activation
- Marked with aria-current="page" - Properly identified for assistive technology
- Visually Distinguished - Styled differently from other navigation links (per ADR 002: bold, black text, underlined) while maintaining link functionality

### Rational
- Ensures consistency across all input methods (keyboard, mouse, touch, assistive technology)
- Follows industry best practices from USWDS, GOV.UK, and W3C
- Provides robustness for screen readers to voice the current page regardless of navigation method
- Treats navigation components consistently with other navigational patterns (like navigation bars)
- Allows users to refresh or reload the current page if needed, which is valid user behavior

### Consequences

#### Positive

- Accessibility: Screen readers and keyboard users have consistent access; meets WCAG 2.1 Level AA requirements
- User Experience: Consistent interaction patterns across all input methods; aligns with major government design systems

#### Negative

- User Confusion: Some users may question clicking a link to the current page; risk of unintended page refreshes

### Open Questions
