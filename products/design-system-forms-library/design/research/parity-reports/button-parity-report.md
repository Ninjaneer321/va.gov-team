# Button Component Parity Report

- **Date:** 2026-03-16
- **Design source:** Figma file `Component Library`
- **Design node:** `Button` component set (`614:2658`)
- **Code source:** `packages/web-components/src/components/va-button/va-button.tsx` and `packages/web-components/src/components/va-button/va-button.scss`

## Summary

- **Parity score:** **28/100**
- **Discrepancies:** 25 total
  - Critical: 0
  - Major: 3
  - Minor: 13
  - Info: 9

## Findings

- Visual/spacing differences were detected for primary background expression and default vertical padding.
- Most remaining differences are API-model mismatches between Figma component properties and runtime web-component props.
- Accessibility and naming differences were identified as metadata/documentation mismatches between design and implementation surfaces.

## Detailed Notes

- The background difference is represented as a literal resolved value in design (`#005EA2`) and tokenized value in code (`var(--vads-button-color-background-primary-default)`).
- Vertical padding differs: design shows `12px` top/bottom while the component style sets `0.60rem` (9.6px) top/bottom.
- Figma models states and behavior via variant/property axes (`Type`, `Size`, `State`, icon toggles, loading text), while `va-button` models runtime behavior via dedicated props/events.
- The discrepancy set is dominated by representation differences rather than broad functional divergence.

## Full Discrepancy List (All 25)

1. **[major][visual]** `backgroundColor` — design `#005EA2` vs code `var(--vads-button-color-background-primary-default)`.
2. **[major][spacing]** `paddingTop` — design `12px` vs code `9.6px`.
3. **[major][spacing]** `paddingBottom` — design `12px` vs code `9.6px`.
4. **[minor][componentAPI]** code prop `back` has no matching Figma component property.
5. **[minor][componentAPI]** code prop `big` has no matching Figma component property.
6. **[minor][componentAPI]** code prop `continue` has no matching Figma component property.
7. **[minor][componentAPI]** code prop `disableAnalytics` has no matching Figma component property.
8. **[minor][componentAPI]** code prop `disabled` has no matching Figma component property.
9. **[minor][componentAPI]** code prop `fullWidth` has no matching Figma component property.
10. **[minor][componentAPI]** code prop `loading` has no matching Figma component property.
11. **[minor][componentAPI]** code prop `label` has no matching Figma component property.
12. **[minor][componentAPI]** code prop `primaryAlternate` has no matching Figma component property.
13. **[minor][componentAPI]** code prop `secondary` has no matching Figma component property.
14. **[minor][componentAPI]** code prop `submit` has no matching Figma component property.
15. **[minor][componentAPI]** code prop `text` has no matching Figma component property.
16. **[minor][componentAPI]** code prop `messageAriaDescribedby` has no matching Figma component property.
17. **[info][componentAPI]** Figma property `Text#614:0` (TEXT) has no matching code prop.
18. **[info][componentAPI]** Figma property `Show Leading Icon#620:139` (BOOLEAN) has no matching code prop.
19. **[info][componentAPI]** Figma property `Show Trailing Icon#620:170` (BOOLEAN) has no matching code prop.
20. **[info][componentAPI]** Figma property `Loading Text#16842:15` (TEXT) has no matching code prop.
21. **[info][componentAPI]** Figma property `Type` (VARIANT) has no matching code prop.
22. **[info][componentAPI]** Figma property `Size` (VARIANT) has no matching code prop.
23. **[info][componentAPI]** Figma property `State` (VARIANT) has no matching code prop.
24. **[info][accessibility]** code defines button accessibility behavior, but design has no equivalent accessibility annotations.
25. **[info][naming]** naming convention differs: design `Button` vs code `va-button`.
