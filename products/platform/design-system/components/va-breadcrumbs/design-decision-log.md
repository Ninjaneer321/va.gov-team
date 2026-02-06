# va-breadcrumbs Design Decisions
Last updated: 4 Feb 2026

- [ADR: 001 - Current page should be a link and look like a link](#ADR-001---Current-page-should-be-a-link-and-look-like-a-link)
- [ADR: 002 - Make current page visually distinct with non-interactive styling](#ADR-002---Make-current-page-visually-distinct-with-non-interactive-styling)


## ADR 001 - Current page should be a link and look like a link
- a11y Discovery: Breadcrumb Link Cursor Event [#53331](https://github.com/department-of-veterans-affairs/va.gov-team/issues/53331)
- Breadcrumb's current page styling should not remove pointer events [#1458](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1458#issuecomment-1671807757)
- [LAUNCH BLOCKING FOR TEAMS] Design System Staging Review - Accessibility Feedback - Converted components: Memorable date, Select and Breadcrumbs [#64284](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64284)

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
- Visually Distinguished - Styled differently from other navigation links while maintaining link functionality

### Rational
- Ensures consistency across all input methods (keyboard, mouse, touch, assistive technology)
- Follows industry best practices from USWDS, GOV.UK, and W3C
- Provides robustness for screen readers to voice the current page regardless of navigation method
- Treats navigation components consistently with other navigational patterns (like navigation bars)
- Allows users to refresh or reload the current page if needed, which is valid user behavior

### Consequences

#### Positive

- **Accessibility:** Screen readers and keyboard users have consistent access; meets WCAG 2.1 Level AA requirements
- **User Experience:** Consistent interaction patterns across all input methods; aligns with major government design systems

#### Negative

- **User Confusion:** Some users may question clicking a link to the current page; risk of unintended page refreshes
- **Counter-intuitive Design:** Styling suggests "you are not here" (static) since appearance looks like a link you can navigate somewhere else

### Open Questions

---

## ADR 002 - Make current page visually distinct with non-interactive styling
- [Decision to proceed with non-interactive styling for the language toggle](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3605#issuecomment-2552177861)
- [Design] Update design for current links in breadcrumbs [#3759](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/pull/5631)
- [[Slack thread](https://dsva.slack.com/archives/C01DBGX4P45/p1709240056546889)] Designers sharing personal experience of screenreader getting confused by the interactive current page


### Status: APPROVED
- Date issue raised: December 11, 2024
- Decision date: December 18, 2024

### Context
During a accessibility review of the language toggle component, concerns were raised that using only bold text as a visual indicator may not provide sufficient distinction for visually impaired users to identify the currently active page or language option. Similar concerns apply to breadcrumb components where the current page needs clear visual differentiation from clickable links.

The DST design team met to discuss this matter, taking into account WCAG accessibility requirements and similarities to breadcrumb patterns. The team examined the WCAG example breadcrumb for guidance.

For better usability and user experience, the page/language that is currently active and displayed to the user should differ in appearance from other links that are active (clickable). Users may be confused if they see what appears to be a link but clicking it does nothing.

### Decision
This approach follows the [WCAG example by making the current page text black in color](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/), providing clear visual differentiation while maintaining an inert (non-interactive) design for better usability and avoiding user confusion.

For the currently active page/language in selection/state components (language toggles):

- Keep the element as a functional link (clickable and focusable) for accessibility and robustness
- Style to appear non-interactive using: bold text, black color, and underlined
- Do not move or shift layout to accommodate visual indicators (bar or icon)

### Consequences

#### Positive

- **Visual Clarity:** Bold, black, underlined styling provides clear visual distinction beyond color alone; meets WCAG requirements for multiple visual indicators
- **Accessibility:** Maintains link functionality so screen readers can announce the current page regardless of navigation method (by element or by tabbing)

#### Negative

- **Visual Expectation Mismatch:** Element looks non-interactive (black, bold) but is actually clickable, which may confuse some users
- **Unintended Refreshes:** Users may accidentally click the current page link and trigger an unwanted page reload
- **Counter-intuitive Design:** Styling suggests "you are here" (static) while behavior allows clicking (dynamic)
- **Cursor Inconsistency:** May need to decide whether to show pointer cursor (indicating clickability) or default cursor (matching visual non-interactive appearance)

### Open Questions
