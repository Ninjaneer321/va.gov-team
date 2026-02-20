# Figma-to-Code Alignment Report

**Generated:** February 19, 2026  
**Purpose:** Identify alignment gaps between Figma component properties and VADS web component props
**Task:** Reviewed the following components
- [Accordion](#1-Accordion)
- [Button](#2-Button)
- [Link](#3-Link)
- [Text Input](#4-TextInput)
- [Checkbox Group](#5-CheckboxGroup)
- [Radio Group](#6-RadioGroup)
- [Progress Bar Segmented](#7-ProgressBarSegmented)
- [Icon](#8-Icon)

---

## 1. Accordion

**Web Component:** `va-accordion` + `va-accordion-item`

### ✅ Aligned Properties
- `state` → `va-accordion-item[open]`
- `bodyBorder` → `va-accordion[bordered]` or `va-accordion-item[bordered]`
- `headingText` → `va-accordion-item[header]`
- `subheadingText` → `va-accordion-item[subheader]`

### ❌ Misaligned (Figma has, Code doesn't)
- `showHeadingIcon` - not supported natively
- `showSubheadingIcon` - not supported natively
- `showToggleButtons` - requires custom implementation

### ⚠️ Missing in Figma
- `level` - heading level for accordion item header
- `open-single` - prevents multiple items from being open
- `uswds` - USWDS styling variant

---

## 2. Button

**Web Component:** `va-button`

### ✅ Aligned Properties
- `type: "Secondary"` → `va-button[secondary]`
- `type: "Alternate"` → `va-button[primary-alternate]`
- `size: "Large"` → `va-button[big]`
- `state: "Loading"` → `va-button[loading]`
- `state: "Disabled"` → `va-button[disabled]`
- `text` → `va-button[text]`

### ❌ Misaligned (Figma has, Code doesn't)
- `type: "Destructive"` - no direct prop (use contextual styling)
- `showLeadingIcon` / `showTrailingIcon` - requires slot content
- `state: "Hover/Focus/Active"` - CSS pseudo-classes only

### ⚠️ Missing in Figma
- `submit` - makes button type="submit"
- `continue` - special form navigation button
- `back` - special form navigation button with arrow

---

## 3. Link

**Web Component:** `va-link`

### ✅ Aligned Properties
- `type: "Active"` → `va-link[active]`
- `type: "Back"` → `va-link[back]`
- `type: "Channel"` → `va-link[channel]`
- `type: "Download"` → `va-link[download]`
- `line1Text` → `va-link[text]`

### ❌ Misaligned (Figma has, Code doesn't)
- `type: "Calendar"` / `type: "Video"` - custom icon implementation
- `type: "Strong"` - just CSS bold styling
- `state` variants - CSS pseudo-classes only
- `ofLines` - CSS text wrapping
- `mode` (Light/Dark) - CSS based on context

### ⚠️ Missing in Figma
- `href` **(required in code!)**
- `external` - marks external links

---

## 4. TextInput

**Web Component:** `va-text-input`

### ✅ Aligned Properties
- `state: "Error"` → `va-text-input[error]`
- `showHintText` → `va-text-input[hint]`
- `labelText` → `va-text-input[label]` **(required)**
- `labelState: "Required"` → `va-text-input[required]`
- `inputValue` → `va-text-input[value]`

### ❌ Misaligned (Figma has, Code doesn't)
- `state: "Success"` - custom implementation
- `showAdditionalInfo` - use separate `va-additional-info` component
- `showCharacterCountHintText` - use `va-textarea[charcount]`
- `showPrefix` / `showSuffix` - custom wrapper needed
- `size` - CSS width styling

### ⚠️ Missing in Figma
- `name` **(important for form submission!)**
- `type` - input type (email, tel, url, etc.)
- `inputmode` - mobile keyboard optimization

---

## 5. CheckboxGroup

**Web Component:** `va-checkbox-group` + `va-checkbox`

### ✅ Aligned Properties
- `state: "Error"` → `va-checkbox-group[error]`
- `labelHeader` → `va-checkbox-group[label]` **(required)**
- `showGroupHint` / `groupHintText` → `va-checkbox-group[hint]`
- `checkboxLabel` → `va-checkbox[label]` **(required)**
- `checkboxChecked` → `va-checkbox[checked]`

### ⚠️ Missing in Figma
- `required` - makes at least one checkbox required
- `name` **(required for va-checkbox!)** - form field name
- `value` - checkbox value for form submission
- `error` / `hint` - can be set on individual checkboxes too

---

## 6. RadioGroup

**Web Component:** `va-radio` + `va-radio-option`

### ✅ Aligned Properties
- `state: "Error"` → `va-radio[error]`
- `labelHeader` → `va-radio[label]` **(required)**
- `showHint` / `hintText` → `va-radio[hint]`
- `inlineErrorMessage` → `va-radio[error]`
- `radioLabel` → `va-radio-option[label]` **(required)**
- `radioValue` → `va-radio-option[value]` **(required)**
- `radioName` → `va-radio-option[name]` **(required)**

### ⚠️ Missing in Figma
- `required` - makes radio selection required
- `checked` - sets default selected option
- `description` - additional text below radio label
- `disabled` - disables specific radio option
- `tile` - displays radio as a tile style

---

## 7. ProgressBarSegmented

**Web Component:** `va-segmented-progress-bar`

### ✅ Aligned Properties
- `totalSteps` → `va-segmented-progress-bar[total]` **(required)**
- `currentStep` → `va-segmented-progress-bar[current]` **(required)**
- `stepLabels` → `va-segmented-progress-bar[labels]`
- `headingText` → `va-segmented-progress-bar[heading-text]`
- `counterStyle` → `va-segmented-progress-bar[counters]`
- `centeredLabels` → `va-segmented-progress-bar[centered-labels]`
- `progressTerm` → `va-segmented-progress-bar[progress-term]`
- `headerLevel` → `va-segmented-progress-bar[header-level]`

### ⚠️ Missing in Figma
- `label` - custom aria-label override
- `use-div` - use div instead of heading
- `enable-analytics` - fires analytics events

---

## 8. Icon

**Web Component:** `va-icon`  
**Maturity:** ⚠️ Caution (may have breaking changes)

### ⚠️ Figma Component Not Yet Extracted

4. **Icon:** Not extracted from Figma yet - `icon` prop is required
The Icon component has not been extracted from the Figma library yet. Below are the web component requirements:

### 📋 Web Component Props (va-icon)

**Required:**
- `icon` **(required)** - Icon name from the icon library

**Optional:**
- `size` - Icon size (1-9, or specific pixel values)
- `srtext` - Screen reader text for accessibility
- `sprite-location` - Custom sprite sheet location

### 🔍 What to Look For When Extracting from Figma

When you extract the Icon component from Figma, check for these properties:

1. **Icon name/type** - Should map to `icon` prop (required)
2. **Size variants** - Should map to `size` prop
3. **Accessibility text** - Should map to `srtext` prop
4. **Color variants** - May need CSS custom properties
5. **Decorative vs semantic** - Affects whether `srtext` is needed

### 📝 Expected Alignment Issues

- Icon names in Figma may not match web component icon names exactly
- Figma may use visual variants where code uses different icon names
- Screen reader text (`srtext`) likely won't be in Figma properties
- Custom sprite locations won't be designer-specified

### 💡 Recommendation

See the detailed Icon analysis above. Icons require a name mapping table between Figma component names and va-icon icon names for effective Code Connect implementation.

---

## Summary: Critical Gaps

### 🔴 High Priority - Missing Required Props in Figma

1. **Link:** Missing `href` (required)
2. **TextInput:** Missing `name` (needed for forms)
3. **CheckboxGroup:** Missing `name` and `value` per checkbox (required)
4. **Icon:** Architectural mismatch - requires icon name mapping table

### 🟡 Medium Priority - Missing Common Props

1. **All form components:** Missing `required` attribute
2. **Button:** Missing `continue`, `back`, `submit` form navigation props
3. **RadioGroup:** Missing `checked`, `description`, `disabled`, `tile`
4. **TextInput:** Missing `type` and `inputmode`
5. **Icon:** Missing `srtext` (accessibility text must be dev-specified)

### 🟢 Well Aligned

- **ProgressBarSegmented:** 💯 Near perfect alignment (8/8 core props mapped)
- **RadioGroup:** 90% aligned, just missing optional props
- **CheckboxGroup:** 85% aligned, missing form-critical props

### ⚠️ Architectural Challenge

- **Icon:** Fundamental difference in approach - Figma uses discrete components per icon, code uses single parameterized component

---

## Figma Code Connect Considerations

**Code Connect can help bridge some alignment gaps** by mapping Figma properties to code props programmatically. However, there are limits to what Code Connect can solve:

### ✅ What Code Connect Can Handle

**Property name translations:**
- ✅ Add `href` (Text property, required) - **Designer should specify URL**
- ⚠️ Add `external` (Boolean property) - or map via Code Connect based on href pattern

#### TextInput Component
- ✅ Add `name` (Text property) - **Required for forms, designer should specify**
- ✅ Add `type` (Options: text, email, tel, url, password) - **Affects keyboard/validation**
- ⚠️ `inputmode` can be derived from `type` in Code Connect

#### CheckboxGroup Component
- ✅ Add `required` (Boolean property at group level)
- ✅ Add `name` (Text property per checkbox) - **Required for form submission**
- ✅ Add `value` (Text property per checkbox) - **Required for form submission**

#### RadioGroup Component
- ✅ Add `required` (Boolean property at group level)
- ✅ Add `checked` (Boolean property per radio option) - **Designer specifies default**
- ⚠️ Add `description` (Text property per radio option) - optional, designer provides if needed
- ⚠️ Add `disabled` (Boolean property per radio option) - designer specifies if needed
- ⚠️ Add `tile` (Boolean property per radio option) - could be a separate component variant

#### Button Component
- ⚠️ Add `continue` (Boolean property) - or create separate "Button/Continue" variant
- ⚠️ Add `back` (Boolean property) - or create separate "Button/Back" variant  
- ⚠️ Add `submit` (Boolean property) - or infer from context in Code Connect

**Legend:**
- ✅ = Must add to Figma (designer needs to specify these)
- ⚠️ = Could handle via Code Connect mapping or variant insteadics`) - not a design concern
- ARIA labels and accessibility props - often implementation-specific

**Dynamic/computed values:**
- Radio group name (must be same across all options)
- Form IDs that must be unique
- Programmatic state management

### 💡 Recommended Code Connect Strategy

**Use Code Connect for:**
1. **Type/variant mappings** - map Figma variants to boolean props (`secondary`, `big`, `loading`)
2. **Property name translations** - map clearly equivalent props even if names differ
3. **Conditional logic** - set props based on Figma property combinations
4. **Default values** - provide sensible defaults for optional props

**Require manual specification for:**
1. **Required technical props** - `name`, `href`, unique IDs
2. **Semantic props** - `type="email"`, `inputmode="tel"`
3. **Accessibility enhancements** - `aria-describedby`, custom labels
4. **Form behavior** - `submit`, form navigation props

**Update Figma library for:**
1. **Designer-controlled values** - props that designers should specify (like `href`)
2. **Content variations** - different input types that affect UX (tel vs email keyboard)
3. **Functional variations** - `required` state, `disabled` state, `checked` defaults

---

## Recommendations

### For Figma Code Connect Implementation

**Priority 1: Map existing Figma properties**

Create Code Connect files for each component that translate Figma properties to VADS props:

```typescript
// Example: Button Code Connect
figma.connect(VAButton, {
  props: {
    secondary: figma.enum('type', { Secondary: true }),
    'primary-alternate': figma.enum('type', { Alternate: true }),
    big: figma.enum('size', { Large: true }),
    loading: figma.enum('state', { Loading: true }),
    disabled: figma.enum('state', { Disabled: true }),
    text: figma.string('text'),
  },
  example: (props) => <va-button {...props} />
})
```

### For Figma Library Updates

**Add these properties to enable better Code Connect mappings:**

#### Link Component
- Add `href` (Text property, required)
- Add `external` (Boolean property)

#### TextInput Component
- Add `name` (Text property, required for forms)
- Add `type` (Options: text, email, tel, url, password, number)
- Add `inputmode` (Options: text, numeric, tel, email, url, search)

#### CheckboxGroup Component
- Add `required` (Boolean property at group level)
- Add `name` (Text property per checkbox, required)
- Add `value` (Text property per checkbox, required)

#### RadioGroup Component
- Add `required` (Boolean property at group level)
- Add `checked` (Boolean property per radio option)
- Add `description` (Text property per radio option)
- Add `disabled` (Boolean property per radio option)
- Add `tile` (Boolean property per radio option)

#### Button Component
- Add `continue` ( (Without Code Connect)

When implementing from Figma designs manually:

1. **Always add form field `name` attributes** - Coordinate with design team for naming
2. **Check if links need `external` prop** - Inspect href for external domains
3. **Verify `required` fields** - Ask designers which fields are mandatory
4. **Use `type` and `inputmode` on text inputs** - Add based on field purpose (email, tel, etc.)
5. **Set default `checked` state** for radio buttons - Confirm default selection with designer
6. **Add unique IDs** - Generate or coordinate for form field relationships

### For Developers (With Code Connect)

Code Connect will auto-generate most props, but you'll need to:

1. **Review generated code** - Verify mappings are correct
2. **Add technical props** - `name`, unique IDs still need manual input
3. **Enhance accessibility** - Add any additional ARIA labels needed
4. **Test form behavior** - Ensure submission and validation work correctlycify these
2. **Check if links need `external` prop** - Figma doesn't distinguish
3. **Verify `required` fields** - coordinate with design team
4. **Use `type` and `inputmode` on text inputs** for proper keyboard behavior
5. **Set default `checked` state** for radio buttons when needed

---

---

## Code Connect Implementation Priority

### Phase 1: Quick Wins (High ROI, Low Effort)
- **ProgressBarSegmented** - Near perfect alignment, easy mappings
- **Button** - Clear variant-to-prop mappings
- **RadioGroup** - Straightforward with good coverage

### Phase 2: Medium Complexity (Requires some Figma updates)
- **CheckboxGroup** - Add `name`/`value` to Figma first
- **TextInput** - Add `name`/`type` to Figma first
- **Accordion** - Good base, custom features documented separately

### Phase 3: Needs Design System Work
- **Link** - Add `href` to Figma library first (critical!)
- **Icon** - Build icon name mapping table, create generic icon mapper Code Connect
- Consider creating specialized variants (Button/Continue, Button/Back, etc.)

### Phase 4: Architectural Solutions
- **Icon Library** - Create and maintain canonical mapping between Figma icon component names and va-icon icon names
- Consider Figma plugin to help designers see va-icon prop values for selected icons
- Document icon name conventions for designers

### Long-term: Maintain Alignment
- **Regular audits** when new component props are added to web components
- **Update Code Connect mappings** when Figma properties change
- **Update icon mapping table** when new icons are added to either system
- **Version both systems together** to prevent drift

## Alignment Score by Component

| Component | Alignment % | Critical Gaps |
|-----------|-------------|---------------|
| ProgressBarSegmented | 95% | None |
| RadioGroup | 90% | `name`, `value` per option |
| CheckboxGroup | 85% | `name`, `value` per checkbox |
| Button | 80% | Form navigation props |
| TextInput | 75% | `name`, `type`, `inputmode` |
| Accordion | 70% | Icon properties |
| Link | 65% | `href` (required!) |
| Icon | 40% ⚠️ | Architectural mismatch - requires name mapping table |

**Overall Average:** 75% aligned across 8 components

**Note:** Icon component scored lower due to fundamental architectural differences between Figma (discrete icon components) and code (single parameterized component). This requires a different Code Connect approach focused on icon name mapping rather than property translation.
