# va-button-pair

Last updated: 4-2-2026

- [ADR: 001 - Remove list and grouping semantics from Button Pair component](#ADR-001---Remove-list-and-grouping-semantics-from-Button-Pair-component)

## ADR 001 - Remove list and grouping semantics from Button Pair component

### Status: APPROVED  

- Date issue raised: 11-25-25  
- Decision date: 04-02-26

### Context

The button pair component was originally implemented using a list structure:

```html
<ul class="usa-button-group">
  <li class="usa-button-group__item">
    <button>Yes</button>
  </li>
  <li class="usa-button-group__item">
    <button>No</button>
  </li>
</ul>
```
The list was not used for layout. It was used to:

- communicate that the buttons are related
- provide structural grouping semantics to assistive technology

A [508 audit flagged](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5173) this implementation with the guidance that:

- **lists should not be used for layout**

While this component was not strictly using lists for layout, the structure:

- did not represent a true list of items
- risked being interpreted as presentational rather than meaningful content

This prompted re-evaluation of how (or whether) the relationship between buttons should be conveyed programmatically.


### Exploration

#### Option 1: Keep list semantics (`ul` / `li`)

**Rejected**

- The buttons do not represent a list of homogeneous items
- The structure introduces semantics that do not match user expectations of a list
- Aligning with guidance, the list pattern was considered inappropriate for this use case


#### Option 2: Replace with `role="group"` + accessible name

```html
<div role="group" aria-label="This is a group">
  <button>Yes</button>
  <button>No</button>
</div>
```

**Explored but ultimately rejected**

This approach was intended to:

- preserve grouping semantics without misusing list markup
- provide a programmatic label for the relationship between buttons

#### Findings from testing

Testing across mobile assistive technologies showed:

- **VoiceOver (iOS)** does not reliably announce the group or its label
- **TalkBack (Android)** does not consistently announce group context
- Focus lands directly on individual buttons, bypassing container semantics
- And [a11ysupport.io indicates no support](https://a11ysupport.io/tech/aria/group_role) for mobile devices for role="group"

As a result:

- the group label is often **never announced**
- the grouping provides **inconsistent or no user benefit**


### Decision

We will:

- **Remove list markup (`ul` / `li`)**
- **Remove `role="group"`**
- **Remove `aria-label` / grouping label prop**
- Use **non-semantic containers (`div`) for layout only**
- Encourage teams to make sure their buttons make sense in context through visible text
 
Each button should:

- clearly communicate its purpose independently
- not rely on container-level context

Example:

- “Edit address”
- “Delete address”


### Consequences

#### Positive

- More consistent behavior across assistive technologies
- Simpler, more predictable implementation
- Encourages clearer, self-contained button labels
- Avoids misuse of semantic elements

#### Negative

- No programmatic grouping relationship between buttons
- Loss of grouping context in environments where `group` may be announced (e.g., some desktop screen readers)


### Future considerations

If a need emerges to communicate grouping:

- Re-evaluate based on **real product use cases**
- Validate behavior across assistive technologies before adopting
- Prefer patterns where grouping is **semantically required** (e.g., radio groups, fieldsets)

Grouping semantics may be reconsidered as a **progressive enhancement** only if:

- they provide measurable benefit, and
- they are reliably conveyed across platforms

