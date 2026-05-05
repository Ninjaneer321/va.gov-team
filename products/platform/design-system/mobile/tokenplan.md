# VA Design System Token Consolidation — Web vs. Mobile Audit

---

## Repo note

`va-design-system-resources` returns a 404 — it is either private or does not exist yet as a public repo. The actual mobile token source is:

| Repo | Role |
|---|---|
| `department-of-veterans-affairs/va-mobile-library` | Source for all mobile tokens (`packages/tokens/src/tokens/`) |
| `department-of-veterans-affairs/va-mobile-app` | Consumer — imports `@department-of-veterans-affairs/mobile-tokens` |
| `department-of-veterans-affairs/component-library` | Web token source (`packages/css-library/src/tokens/`) |
| `department-of-veterans-affairs/vets-design-system-documentation` | Token documentation data (`src/_data/tokens/*.csv`) |

---

## What exists today

### Mobile token package
**NPM:** `@department-of-veterans-affairs/mobile-tokens` v0.23.0
**Source:** `va-mobile-library/packages/tokens/src/tokens/`
**Build tool:** Style Dictionary

| Category | Source files |
|---|---|
| Color | `color/semantic-light.json`, `color/semantic-dark.json`, `color/component-light.json`, `color/component-dark.json` |
| Font | `font/family.json`, `font/size.json`, `font/lineHeight.json`, `font/letterSpacing.json`, `font/paragraphSpacing.json`, `font/style.json`, `font/typography.json` |
| Spacing | `spacing/spacing.json` |

**Exported as:** JS modules — `colors`, `font`, `spacing`, `themes` (light/dark)

### Web token package
**NPM:** `@department-of-veterans-affairs/css-library`
**Source:** `component-library/packages/css-library/src/tokens/*.scss`
**Documentation data:** `vets-design-system-documentation/src/_data/tokens/*.csv`

| Category | Files |
|---|---|
| Color | `color.scss` / `vads-color-primitive.csv`, `vads-color-semantic.csv`, `vads-color-component.csv` |
| Font | `font.scss`, `line-height.scss` / `vads-font-primitive.csv`, `vads-font-semantic.csv` |
| Spacing | `margin.scss`, `padding.scss` / `vads-spacing-primitive.csv`, `vads-spacing-semantic.csv` |
| Other | `border.scss`, `elevation.scss`, `flex-grid.scss`, `height.scss`, `width.scss`, `display.scss`, etc. |

**Exported as:** CSS custom properties and SCSS variables

---

## Token-by-token comparison

### Spacing — naming convention mismatch

Mobile and web use different scales and naming conventions for spacing:

| Scale step | Mobile name | Mobile value | Web name | Web value |
|---|---|---|---|---|
| none | `vads-space-none` | 0 | `vads-spacing-0` | 0 |
| 2xs | `vads-space-2xs` | 4px | `vads-spacing-0p5` | 4px |
| xs | `vads-space-xs` | 8px | `vads-spacing-1` | 8px |
| sm | `vads-space-sm` | 12px | `vads-spacing-1p5` | 12px |
| md | `vads-space-md` | 16px | `vads-spacing-2` | 16px |
| lg | `vads-space-lg` | 20px | `vads-spacing-2p5` | 20px |
| xl | `vads-space-xl` | 24px | `vads-spacing-3` | 24px |
| 2xl | `vads-space-2xl` | 28px | *(no equivalent)* | — |
| 3xl | `vads-space-3xl` | 32px | `vads-spacing-4` | 32px |
| 4xl | `vads-space-4xl` | 36px | *(no equivalent)* | — |
| 5xl | `vads-space-5xl` | 40px | `vads-spacing-5` | 40px |
| 6xl | `vads-space-6xl` | 44px | *(no equivalent)* | — |

**Status:** Values are largely aligned but names diverge entirely. Mobile uses T-shirt sizes (`vads-space-md`), web uses USWDS numeric scale (`vads-spacing-2`). Web also has semantic spacing tokens (`vads-spacing-inset-l`, `vads-spacing-vertical-stack-s`, etc.) with no mobile equivalent.

---

### Color — what's shared vs. diverged

**Primitive colors** — both reference the same underlying USWDS system colors, but different naming conventions:

| Layer | Mobile convention | Web convention |
|---|---|---|
| USWDS primitive | `uswdsSystemColorBlue60` (camelCase JS) | `uswds-system-color-blue-60` (kebab CSS) |
| VADS semantic | `vadsColorPrimary` (camelCase JS) | `vads-color-primary` (kebab CSS/SCSS) |

Same values, different formats — this is expected (JS vs. CSS), but there's no shared source file generating both.

**Semantic colors** — partial alignment. Mobile has `on-light` / `on-dark` semantic tokens; the web token CSV explicitly annotates many of these with "Mobile":

Examples of tokens added to web CSV to track mobile alignment:
- `vads-color-action-border-base-active-on-dark` — "Used for button on mobile app in base style in dark mode"
- `vads-color-background-default-on-dark` — "Used for app background on mobile app in dark mode. Mobile."
- `vads-color-feedback-surface-error-on-dark` — "Used for error alert background on mobile app in dark mode"
- `vads-color-forms-surface-active-on-dark` — "Used for active background of tile variations of checkbox/radio in dark mode. Mobile."

These tokens exist in the web CSV as a documentation/tracking mechanism, but they are not necessarily published as CSS custom properties — they're mobile-first tokens that were added to the shared list to acknowledge alignment.

**Color tokens mobile has but web doesn't (mobile-specific):**

Mobile `colorSchemes.ts` uses colors like:
- `completedPhase: colors.uswdsSystemColorGreenCoolVivid50` — phase indicator colors
- `navButton: colors.uswdsSystemColorGray2` — nav-specific
- `veteranStatus`, `splashScreen`, `carousel`, `crisisLine` — mobile UI-specific roles

These don't have web equivalents because the concepts don't exist on web.

---

### Font — significant divergence

**Mobile font sizes** (`vadsFontSize*`) use a modular scale exported from the tokens package:

| Token | Value |
|---|---|
| `vadsFontSize5xl` | 36.49px |
| `vadsFontSize4xl` | 32.44px |
| `vadsFontSize3xl` | 28.83px |
| `vadsFontSize2xl` | 25.63px |
| `vadsFontSizeXl` | 22.78px |
| `vadsFontSizeLg` | 20.25px |
| `vadsFontSizeMd` | 18px |
| `vadsFontSizeSm` | 16px |
| `vadsFontSizeXs` | 14.22px |
| `vadsFontSize2xs` | 12.64px |

**BUT** — `standardTheme.ts` in va-mobile-app defines a second, parallel set of hardcoded font sizes that are NOT using the token package values:

```
AboutYou: 18px / 22lh
ClaimHeader: 24px / 32lh
BitterHeading: 26px / 28lh
HomeScreenHeader: 20px / 30lh
MobileBody: 20px / 30lh
VAHeader: 28px / 32lh
```

These are component-specific typography definitions that live outside the token system entirely. They predate the mobile-tokens package and have not been migrated.

**Web font tokens** use heading levels and semantic roles: `vadsFontSizeBodySmall`, `vadsFontSizeHeadingLevel1`, etc. — named differently from mobile but some values overlap (16px, 18px, 20.25px).

---

## What has been done

1. **Mobile tokens package exists** (`@department-of-veterans-affairs/mobile-tokens`) and is versioned separately from the app
2. **Mobile semantic color tokens use `vads-color-*` naming** — aligned to the VADS naming convention, referencing the same USWDS primitives as the web system
3. **Web token CSV tracks mobile tokens** — the `vads-color-semantic.csv` in vets-design-system-documentation has a "Mobile" annotation column and explicitly includes `on-dark` tokens added for mobile alignment
4. **Spacing token names follow VADS convention** — mobile spacing tokens are named `vads-space-*`, not custom mobile-only names
5. **Issue #4648 is open** — "Epic: Combining web/mobile tokens packages" in vets-design-system-documentation — this is the tracked work item

---

## What is left to do

| Gap | Detail | Complexity |
|---|---|---|
| **No shared source file** | Web tokens are SCSS, mobile tokens are JSON — there is no single token source that generates both. Style Dictionary could do this but hasn't been set up to. | High |
| **Spacing naming convention** | `vads-space-md` (mobile) ≠ `vads-spacing-2` (web) — same value, different names. Consumers can't reference the same token name across platforms. | Medium |
| **`standardTheme.ts` font sizes not tokenized** | ~20 component-specific font size/line-height pairs in `standardTheme.ts` are hardcoded, not pulled from `mobile-tokens`. | Medium |
| **Web has no dark mode tokens in CSS** | Mobile has full `on-dark` semantic color tokens. Web CSS does not output dark mode tokens — they're in the tracking CSV but not published. | Medium-High |
| **Font token naming diverges** | `vadsFontSizeMd` (mobile) vs `vadsFontSizeBodyMedium` (web) — same 18px value, different names | Medium |
| **Web has more token categories with no mobile equivalent** | Border radius, elevation/shadow, breakpoints, measure (line length), flex-grid — none of these exist in the mobile token package | Low–Medium |
| **No mobile semantic spacing** | Web has semantic spacing like `vads-spacing-inset-m` and `vads-spacing-vertical-stack-s`. Mobile has only primitive T-shirt sizes. | Low |
| **`va-design-system-resources` repo** | Referenced by the user but returns 404 — if this is the planned consolidation repo, it hasn't been created publicly yet | Unknown |

---

## Open tracking issue

**#4648** — [Epic: Combining web/mobile tokens packages](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4648)
Labels: `platform-design-system-team`, `Epic`, `Mobile`
Status: Open

This is the parent epic for the consolidation work. Current sub-issues and status would need to be checked against this epic to see what's been broken out as tasks.
