# Segmented Button Design Decisions
Last updated: May 13, 2025

- [ADR: 001 - Segmented Button Design](#ADR-001---Segmented-Button-Design)

## ADR 001 - Segmented Button Design

### Status: Accepted

- Date issue raised: 2025-05-07
- Decision date: 2025-05-07

### Context

As part of our initiative to align VADS components with our existing Mobile Design System counterparts, we reviewed the Segmented Control component ([Storybook](https://design.va.gov/storybook/?path=/docs/va-mobile_segmented-control--docs)) that the VA Mobile DS team has successfully implemented.

VADS currently lacks a component providing this specific functionality. We also considered the [USWDS segmented button group](https://designsystem.digital.gov/components/button-group/), which shares visual similarities.

### Decision

Based on our review and the successful implementation of the Mobile component in production, we've decided on the following:

* We will largely adopt the functionality of the existing Mobile Segmented Control component.
* The visual design will be updated to align with the current VADS (and USWDS) styling for primary and secondary buttons, ensuring consistency within the VADS ecosystem.
* We will not be incorporating additional semantic color variations, such as those found in USWDS, at this time.
* The component will be named "Segmented Button" within VADS.

### Consequences

* There is a potential risk that product teams may require alternate view configurations not included in the initial implementation.
* The current visual design of the Mobile component does not fully align with current VADS primary button styling, which may require additional design.
* The difference in component names ("Segmented Control" in Mobile vs. "Segmented Button" in VADS) is an inconsistency we should address.

### Open Questions

* The Mobile component includes a "dark mode" variation. How should VADS handle this, given that VADS does not currently have a comprehensive "dark mode" strategy?
* Should we propose creating an issue to discuss renaming the Mobile "Segmented Control" component for better alignment?
