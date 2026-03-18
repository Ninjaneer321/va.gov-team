# Link Component Parity Report

- **Date:** 2026-03-16
- **Design source:** Figma file `Component Library`
- **Design node:** `Link` component set (`15:2260`)
- **Code source:** `packages/web-components/src/components/va-link/va-link.tsx` and `packages/web-components/src/components/va-link/va-link.scss`

## Summary

- **Parity score:** **34/100**
- **Discrepancies:** 28 total
  - Critical: 0
  - Major: 0
  - Minor: 19
  - Info: 9

## Findings

- No major visual-token/spacing mismatches were reported in this parity run.
- Differences are predominantly API-model discrepancies between Figma properties and runtime web-component props.
- Additional differences were identified in accessibility metadata representation and naming conventions.

## Detailed Notes

- Figma `Link` uses variant/property abstractions (`Type`, `State`, `# of Lines`, `Mode`, text properties, instance swap).
- `va-link` exposes runtime props for behavior and rendering (`href`, `text`, `external`, download metadata, icon props, language).
- The discrepancy profile indicates model/representation drift as the dominant source of parity noise.

## Full Discrepancy List (All 28)

1. **[minor][componentAPI]** code prop `abbrTitle` has no matching Figma component property.
2. **[minor][componentAPI]** code prop `active` has no matching Figma component property.
3. **[minor][componentAPI]** code prop `back` has no matching Figma component property.
4. **[minor][componentAPI]** code prop `calendar` has no matching Figma component property.
5. **[minor][componentAPI]** code prop `channel` has no matching Figma component property.
6. **[minor][componentAPI]** code prop `disableAnalytics` has no matching Figma component property.
7. **[minor][componentAPI]** code prop `download` has no matching Figma component property.
8. **[minor][componentAPI]** code prop `href` has no matching Figma component property.
9. **[minor][componentAPI]** code prop `filename` has no matching Figma component property.
10. **[minor][componentAPI]** code prop `filetype` has no matching Figma component property.
11. **[minor][componentAPI]** code prop `pages` has no matching Figma component property.
12. **[minor][componentAPI]** code prop `text` has no matching Figma component property.
13. **[minor][componentAPI]** code prop `video` has no matching Figma component property.
14. **[minor][componentAPI]** code prop `reverse` has no matching Figma component property.
15. **[minor][componentAPI]** code prop `external` has no matching Figma component property.
16. **[minor][componentAPI]** code prop `label` has no matching Figma component property.
17. **[minor][componentAPI]** code prop `iconName` has no matching Figma component property.
18. **[minor][componentAPI]** code prop `iconSize` has no matching Figma component property.
19. **[minor][componentAPI]** code prop `language` has no matching Figma component property.
20. **[info][componentAPI]** Figma property `Line 1 Text#456:31` (TEXT) has no matching code prop.
21. **[info][componentAPI]** Figma property `Line 2 Text#5604:0` (TEXT) has no matching code prop.
22. **[info][componentAPI]** Figma property `Instance#13674:144` (INSTANCE_SWAP) has no matching code prop.
23. **[info][componentAPI]** Figma property `Type` (VARIANT) has no matching code prop.
24. **[info][componentAPI]** Figma property `State` (VARIANT) has no matching code prop.
25. **[info][componentAPI]** Figma property `# of Lines` (VARIANT) has no matching code prop.
26. **[info][componentAPI]** Figma property `Mode` (VARIANT) has no matching code prop.
27. **[info][accessibility]** code defines link accessibility behavior, but design has no equivalent accessibility annotations.
28. **[info][naming]** naming convention differs: design `Link` vs code `va-link`.
