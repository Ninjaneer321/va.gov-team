# va-alert Design Decisions
Last updated: Mar 11, 2026

- [ADR: 001 - Full-width alert](#ADR-001---Full-width-alert)

## ADR 001 - Full-width Alert

The design system currently includes two very similar components:

-   **Alert**
-   **Banner**

Both components serve similar purposes for displaying important
messaging to users.

### Current differences

| Component | Width Behavior | Other Props |
|-----------|---------------|-------------|
| Alert | Default constrained width. Optional `fullWidth` prop. | Supports `slim` |
| Banner | Always full-width with centered content. | Does not support `slim` |

The **Banner component internally uses the Alert component** in the
codebase.

Additionally:

-   The Alert component has a `fullWidth` prop.
-   Banner achieves its full-width behavior through this prop.
-   Figma currently does not explicitly represent a full-width Alert
    variant.

The team needs to determine whether:

1.  The `fullWidth` prop should remain on the Alert component.
2.  The full-width behavior should be exclusive to the Banner component.
3.  Figma should support a full-width Alert variant.

------------------------------------------------------------------------

## Problem

There is ambiguity in the design system:

-   **Design layer (Figma):** Treats Alert and Banner as separate
    components.
-   **Implementation layer:** Banner is implemented using Alert with a
    `fullWidth` prop.

This creates questions about:

-   API clarity
-   Component ownership
-   Whether `fullWidth` is an intentional Alert capability or an
    implementation detail used by Banner.

------------------------------------------------------------------------

## Options Considered

### Option 1 --- Remove `fullWidth` from Alert and make Banner independent

Banner becomes its own component and no longer depends on Alert.

**Pros**

-   Clear separation of responsibilities
-   Cleaner Alert API
-   Design and code align more closely

**Cons**

-   Refactoring required
-   Potential duplication of code
-   More maintenance overhead

------------------------------------------------------------------------

### Option 2 --- Keep `fullWidth` but treat it as an implementation detail for Banner

Alert technically supports `fullWidth`, but it is **not encouraged for
direct use** outside Banner.

Storybook may still expose the prop for transparency because Banner
relies on it.

**Pros**

-   Maintains compatibility
-   Avoids refactoring Banner
-   Prevents expanding Alert usage unintentionally

**Cons**

-   Slight API ambiguity
-   Requires documentation guidance

### Status: APPROVED
_Describe the status of the decision. Options are "proposed", "accepted", "rejected", "deprecated", "superseded"._

- Date issue raised: Mar 3, 2026
- Decision date: Mar 11, 2026

### Context

[See Slack thread for context](https://adhoc.slack.com/archives/C08N8Q5E9K5/p1772578826442509)

### Decision

**Option 2 --- Keep `fullWidth` on Alert, but treat Banner as the
primary full-width pattern.**

### Rationale

-   Banner is implemented using Alert, so removing the prop would
    introduce unnecessary refactoring.
-   Keeping the prop ensures compatibility and stability.
-   Documentation and Storybook can clarify that **Banner is the
    preferred component for full-width messaging**.
-   The Figma Alert component will not add a full-width property.

### Consequences

#### Positive

-   No breaking changes
-   Banner implementation remains simple
-   Development velocity is unaffected

#### Negative

-   Alert API includes a prop that may rarely be used directly
-   Requires documentation guidance to avoid misuse

### Open Questions
None
