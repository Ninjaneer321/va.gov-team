# Accessibility notes for future consideration

- [WCAG 1.4.11 - Non-text contrast](#non--text-contrast)

## Non-text contrast
Only visual indicators that are required to identify a component or its state must meet 3:1 contrast. If the component or state is already conveyed through text, structure, or context, additional visual styling does not need to meet this requirement.

WCAG 1.4.11 says
> User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;

### Why axe DevTools or other scanners haven't caught this
This type of contrast issue isn’t picked up by automated tools because it depends on how a component is visually perceived, not just code. Even manual audits often miss it because it doesn’t block users from completing tasks.

- A scanner needs to know "What pixels define the edge of this button?" Is it the fill color, a border, a shadow, a container, just spacing? The DOM doesn't know this. 
- Tools produce a ton of false positives and negatives when comparing a component against its adjacent background.
- The criteria allows, boundary from color, or a border, or the layout context to help identify meaning.

### Why is our blue sign in button passable on a dark blue background.

The button "Sign in" itself, signifies clickability, expecially in a nav next to other links and nav items.

> This success criterion does not require that controls have a visual boundary indicating the hit area, but if the visual indicator of the control is the only way to identify the control, then that indicator must have sufficient contrast. If text (or an icon) within a button or placeholder text inside a text input is visible and there is no visual indication of the hit area then the Success Criterion is passed.

### In the case of the MHV selected-state underline...

The underline is
- indicating the selected/current page
- it's purely visual
- it's not programmatic

So the question becomes, is that underline required for users to understand the current state?

We already have
- page `<title>`
- Breadcrumbs
- `<h1>`

So the user can fully understand where they are without the underline

So the underline is not required to convey state

So it does not need to meet 3:1 contrast, and so it does not fail 1.4.11

We're reading the guidance to mean that only indicators that are necessary to perceive the state must meet 3:1

**Summary**
> Only visual indicators that are required to identify a component or its state must meet 3:1 contrast.
> 
> In this case, the selected underline is a supplementary visual cue. Users can determine their current location through the page title, breadcrumb, and heading, so the underline is not required to convey state and is not subject to WCAG 1.4.11 contrast requirements.

