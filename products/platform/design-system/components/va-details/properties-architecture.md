
# Requirements

---

Purpose: Define technical requirements and implementation details for the `va-details` component.

---

## **Component architecture**

* Common name
  * Details
* Element name
  * `<va-details>`

## **Architecture overview**

Details makes content easier to scan by hiding secondary, contextual information that may not be applicable to all users or situations. It is used to surface plain-language help at the point in the experience where it is most relevant.

This component is **implemented using native HTML `<details>` and `<summary>` elements**, with expand/collapse behavior fully handled by the browser.

Key architectural decisions:

* **Built on native disclosure semantics**  
  * Uses `<details>` for state management (open / closed)  
  * Uses `<summary>` as the interactive trigger  
  * Expand/collapse behavior is **not re-implemented in JavaScript**  
* **Not an accordion**  
  * No grouping behavior  
  * No expectation of heading-level content sections  
  * Intended for short, inline contextual help  
* **Content constraints**  
  * Not intended for form controls, inputs, or complex interactive content  
  * Expanded content should be brief, scannable, and optional  
* **Trigger constraints**  
  * Trigger text should be short, plain-language, and descriptive  
  * The trigger is not a question and does not end in punctuation

This approach intentionally reduces custom logic, improves reliability across assistive technologies, and aligns with platform-native accessibility expectations.

### Related components

* Accordion  
  * Use Accordion instead when content  
    * Warrants a heading  
    * Is part of a series  
    * Is long or structurally complex  
* Alert – Expandable  
  * Preferred over Details when the content communicates important or time-sensitive information  
 

### Related patterns/template

* Forms — contextual help associated with a specific question or input  
* Process lists — secondary explanations that would otherwise interrupt the primary flow


### Styles

* [Figma branch link](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/G8NbXDnLJJSiAvHyaDeoxS/VADS-Component-Library?m=auto&node-id=42924-57682&t=SeRZK2Qwt16MF5wi-1)

### Existing implementations with similar functionality

* Widespread usage across VA.gov forms for inline contextual help  
* Often appears immediately after labels, legends, or short instructional text


## **Text content**

| Element | Default value | Notes |
| :---- | :---- | :---- |
| Label text (rendered as the summary text that open/closes the disclosure) | None | Provided via the `label` prop. Must be short, descriptive, and written as a statement (not a question), with no ending punctuation. |
| Expanded content | None | Slotted content inside `<va-details>`. guidance recommends keeping it brief and scannable (lists as needed), and linking out if the content is long/complex.  |

## **Properties**

| Prop name | Description  | Expected values | Default value |
| :---- | :---- | :---- | :---- |
| `label` | The text for the summary element that triggers the details to expand | String | None |
| `open` | Value to control whether the details element is open or not | boolean | false |
| `width` | Displays the component at a specific width | `xl` or `2xl` | None |
| `disable-analytics` | If `true`, doesn’t fire the analytics CustomEvent used for tracking usage | boolean | false |


## **Slots:**

| Slot name | Description |
| :---- | :---- |
| (default/unnamed) | Content revealed when the `<details>` element is open |

## **Events:**

| Event name | Description |
| :---- | :---- |
| component-library-analytics | Analytics event emitted when the `<summary>` element is clicked and `disable-analytics` is not true. |


**Note:** Expand/collapse state is managed by the browser via the \<details\> element. No custom open/close events are introduced.

### Additional considerations

* Accessibility  
  * \<details\> and \<summary\> provide built-in keyboard interaction, focus handling, and state announcement  
  * No ARIA roles, states, or properties are added to override native semantics  
* Focus behavior  
  * Focus remains on the \<summary\> element when toggling  
  * No programmatic focus movement occurs  
* Do not use for  
  * Error messages  
  * Critical or blocking information  
  * Content that must be read before continuing

## **Example implementation code:**

```html
<va-details label="Learn more about military addresses">
  <p>
    The United States is automatically chosen as your country if you live on a
    military base outside of the country.
  </p>
</va-details>
```

## **Example rendered code**

```html
<details class="va-details">
  <summary class="va-details__summary">
    <va-icon class="va-details__icon hydrated" icon="chevron_right" size="2"></va-icon>
    Learn more about military addresses
  </summary>
  <div class="va-details__content va-details__content--element-child">
    <p>
      The United States is automatically chosen as your country if you live on a
      military base outside of the country.
    </p>
  </div>
</details>
```

## **Storybook stories**

* [Default](https://design.va.gov/storybook/?path=/story/components-va-details--default)
* [Open](https://design.va.gov/storybook/?path=/story/components-va-details--open)
* [WithContentComponent](https://design.va.gov/storybook/?path=/story/components-va-details--with-content-component)
* [Widths](https://design.va.gov/storybook/?path=/story/components-va-details--widths)


## **Focus management**

* None \- focus stays on the `<summary>` element before and after expansion or collapse

## **Validation**

* None — this component does not represent user input and does not have an error state.

## **Future considerations**

* Consider whether to expose the native `open` attribute as a controlled prop (only if a strong use case emerges)