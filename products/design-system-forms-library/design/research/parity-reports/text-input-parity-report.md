# Text Input Component Parity Report

- **Date:** 2026-03-16
- **Design source:** Figma file `Component Library`
- **Design node:** `Text Input` component set (`1629:1567`)
- **Code source:** `packages/web-components/src/components/va-text-input/va-text-input.tsx` and `packages/web-components/src/components/va-text-input/va-text-input.scss`

## Summary

- **Parity score:** **0/100**
- **Discrepancies:** 37 total
  - Critical: 0
  - Major: 0
  - Minor: 32
  - Info: 5

## Findings

- The discrepancy profile is API-model heavy: most differences are between Figma property modeling and runtime web-component props.
- No critical or major discrepancies were returned in this parity run.
- Accessibility representation differs: code includes textbox semantics while equivalent design annotations are not present.

## Detailed Notes

- Figma Text Input exposes a compact set of toggles/variants, while `va-text-input` exposes a broad runtime API (validation, analytics, character count, prefixes/suffixes, forms pattern support).
- This report intentionally avoids source-of-truth assumptions and documents observed parity differences only.
- The complete discrepancy appendix below includes every item returned by the parity check.

## Full Discrepancy List (All 37)

1. **[minor][componentAPI]** `prop:label` — Code prop "label" has no matching Figma component property (code `label`).
2. **[minor][componentAPI]** `prop:error` — Code prop "error" has no matching Figma component property (code `error`).
3. **[minor][componentAPI]** `prop:reflectInputError` — Code prop "reflectInputError" has no matching Figma component property (code `reflectInputError`).
4. **[minor][componentAPI]** `prop:showInputError` — Code prop "showInputError" has no matching Figma component property (code `showInputError`).
5. **[minor][componentAPI]** `prop:invalid` — Code prop "invalid" has no matching Figma component property (code `invalid`).
6. **[minor][componentAPI]** `prop:required` — Code prop "required" has no matching Figma component property (code `required`).
7. **[minor][componentAPI]** `prop:hideRequiredText` — Code prop "hideRequiredText" has no matching Figma component property (code `hideRequiredText`).
8. **[minor][componentAPI]** `prop:inputmode` — Code prop "inputmode" has no matching Figma component property (code `inputmode`).
9. **[minor][componentAPI]** `prop:step` — Code prop "step" has no matching Figma component property (code `step`).
10. **[minor][componentAPI]** `prop:type` — Code prop "type" has no matching Figma component property (code `type`).
11. **[minor][componentAPI]** `prop:maxlength` — Code prop "maxlength" has no matching Figma component property (code `maxlength`).
12. **[minor][componentAPI]** `prop:autocomplete` — Code prop "autocomplete" has no matching Figma component property (code `autocomplete`).
13. **[minor][componentAPI]** `prop:enableAnalytics` — Code prop "enableAnalytics" has no matching Figma component property (code `enableAnalytics`).
14. **[minor][componentAPI]** `prop:name` — Code prop "name" has no matching Figma component property (code `name`).
15. **[minor][componentAPI]** `prop:pattern` — Code prop "pattern" has no matching Figma component property (code `pattern`).
16. **[minor][componentAPI]** `prop:hint` — Code prop "hint" has no matching Figma component property (code `hint`).
17. **[minor][componentAPI]** `prop:messageAriaDescribedby` — Code prop "messageAriaDescribedby" has no matching Figma component property (code `messageAriaDescribedby`).
18. **[minor][componentAPI]** `prop:value` — Code prop "value" has no matching Figma component property (code `value`).
19. **[minor][componentAPI]** `prop:success` — Code prop "success" has no matching Figma component property (code `success`).
20. **[minor][componentAPI]** `prop:width` — Code prop "width" has no matching Figma component property (code `width`).
21. **[minor][componentAPI]** `prop:useFormsPattern` — Code prop "useFormsPattern" has no matching Figma component property (code `useFormsPattern`).
22. **[minor][componentAPI]** `prop:formHeadingLevel` — Code prop "formHeadingLevel" has no matching Figma component property (code `formHeadingLevel`).
23. **[minor][componentAPI]** `prop:formHeading` — Code prop "formHeading" has no matching Figma component property (code `formHeading`).
24. **[minor][componentAPI]** `prop:charcount` — Code prop "charcount" has no matching Figma component property (code `charcount`).
25. **[minor][componentAPI]** `prop:currency` — Code prop "currency" has no matching Figma component property (code `currency`).
26. **[minor][componentAPI]** `prop:inputPrefix` — Code prop "inputPrefix" has no matching Figma component property (code `inputPrefix`).
27. **[minor][componentAPI]** `prop:inputIconPrefix` — Code prop "inputIconPrefix" has no matching Figma component property (code `inputIconPrefix`).
28. **[minor][componentAPI]** `prop:inputSuffix` — Code prop "inputSuffix" has no matching Figma component property (code `inputSuffix`).
29. **[minor][componentAPI]** `prop:inputIconSuffix` — Code prop "inputIconSuffix" has no matching Figma component property (code `inputIconSuffix`).
30. **[minor][componentAPI]** `prop:min` — Code prop "min" has no matching Figma component property (code `min`).
31. **[minor][componentAPI]** `prop:max` — Code prop "max" has no matching Figma component property (code `max`).
32. **[minor][componentAPI]** `prop:errorHasPii` — Code prop "errorHasPii" has no matching Figma component property (code `errorHasPii`).
33. **[info][componentAPI]** `prop:Show Hint Text#1629:3` — Figma property "Show Hint Text#1629:3" (BOOLEAN) has no matching code prop (design `Show Hint Text#1629:3`).
34. **[info][componentAPI]** `prop:Show Character Count Hint Text#1629:4` — Figma property "Show Character Count Hint Text#1629:4" (BOOLEAN) has no matching code prop (design `Show Character Count Hint Text#1629:4`).
35. **[info][componentAPI]** `prop:Show Additional Info#1629:5` — Figma property "Show Additional Info#1629:5" (BOOLEAN) has no matching code prop (design `Show Additional Info#1629:5`).
36. **[info][componentAPI]** `prop:State` — Figma property "State" (VARIANT) has no matching code prop (design `State`).
37. **[info][accessibility]** `role` — Code defines role="textbox" but design has no accessibility annotations (code `textbox`).
