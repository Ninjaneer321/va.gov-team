# SC Form 995 Step 3 (Evidence) — URL Changes for Analytics QA

**Generated:** 2026-03-13
**Feature branch:** `origin/103986-array-builder-2`
**Compared against:** `main` branch (production)
**Base URL:** `/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995`

The VA and non-VA (private) evidence sections are being migrated to the VADS array builder pattern. The old pages are gated behind `!redesignActive()` (currently always `false`), so they are hidden. The new array builder pages are active.

---

## List 1: All Step 3 URLs on the Feature Branch (Active Pages Only)

These are all the evidence chapter URLs that are **active** (visible to veterans) on the feature branch.

### Static pages (always shown)

| # | URL Path | Page | Notes |
|---|----------|------|-------|
| 1 | `/notice-of-evidence-needed` | Notice 5103 | Unchanged from production |
| 2 | `/facility-types` | Facility types | Unchanged from production |

### VA Evidence — Array Builder (new)

| # | URL Path | Page | Notes |
|---|----------|------|-------|
| 3 | `/supporting-evidence/va-medical-summary` | VA evidence summary | Prompt + card list of added records |
| 4 | `/supporting-evidence/:index/va-medical-records-location` | Facility name | Per-item page |
| 5 | `/supporting-evidence/:index/va-medical-records-condition` | Conditions treated | Per-item checkbox group |
| 6 | `/supporting-evidence/:index/va-medical-before-2005` | Treatment before 2005? | Per-item radio prompt |
| 7 | `/supporting-evidence/:index/va-medical-before-2005-date` | Treatment date | Per-item, conditional on "before 2005" answer |

### Non-VA (Private) Evidence — Array Builder (new)

| # | URL Path | Page | Notes |
|---|----------|------|-------|
| 8 | `/supporting-evidence/private-medical-records-review` | Private evidence summary | Prompt + card list of added records |
| 9 | `/supporting-evidence/:index/private-medical-records-authorization` | 4142 authorization | Per-item, shown only for first record (index === 0) |
| 10 | `/supporting-evidence/:index/private-medical-records-location` | Provider name & address | Per-item page |
| 11 | `/supporting-evidence/:index/private-medical-records/condition` | Conditions treated | Per-item checkbox group |
| 12 | `/supporting-evidence/:index/private-medical-records-dates` | Treatment dates | Per-item start/end dates |

### Direct Upload (minor change)

| # | URL Path | Page | Notes |
|---|----------|------|-------|
| 13 | `/supporting-evidence/add-supporting-evidence` | Upload prompt | **URL renamed** (was `will-add-supporting-evidence`) |
| 14 | `/supporting-evidence/upload-evidence` | File upload | Conditional on `hasOtherEvidence`, unchanged logic |

**Note:** `:index` in URLs is replaced by `0`, `1`, `2`, etc. at runtime — one page per added record.

---

## List 2: NEW URLs (do not exist in production)

These 10 URLs are entirely new and need analytics tracking set up from scratch:

| # | URL Path | Description |
|---|----------|-------------|
| 1 | `/supporting-evidence/va-medical-summary` | VA evidence summary/prompt (array builder intro) |
| 2 | `/supporting-evidence/:index/va-medical-records-location` | VA facility name entry |
| 3 | `/supporting-evidence/:index/va-medical-records-condition` | VA conditions treated selection |
| 4 | `/supporting-evidence/:index/va-medical-before-2005` | VA "before 2005?" prompt |
| 5 | `/supporting-evidence/:index/va-medical-before-2005-date` | VA treatment date (conditional) |
| 6 | `/supporting-evidence/private-medical-records-review` | Private evidence summary/prompt (array builder intro) |
| 7 | `/supporting-evidence/:index/private-medical-records-authorization` | 4142 authorization (first item only) |
| 8 | `/supporting-evidence/:index/private-medical-records-location` | Provider name & address |
| 9 | `/supporting-evidence/:index/private-medical-records/condition` | Private conditions treated selection |
| 10 | `/supporting-evidence/:index/private-medical-records-dates` | Treatment start/end dates |

---

## List 3: CHANGED URLs (exist in production but modified)

### URL Renamed

| Old URL (production) | New URL (feature branch) | What changed |
|----------------------|--------------------------|-------------|
| `/supporting-evidence/will-add-supporting-evidence` | `/supporting-evidence/add-supporting-evidence` | Path renamed. Same page concept (upload prompt). |

### Pages Hidden by Feature Toggle (replaced by array builder)

These production URLs still exist in the code but are **gated behind `!redesignActive()`** (always hidden). They are replaced by the new array builder pages above.

| # | Production URL | Status | Replaced By |
|---|----------------|--------|-------------|
| 1 | `/supporting-evidence/request-va-medical-records` | Hidden | `va-medical-summary` |
| 2 | `/supporting-evidence/va-medical-records` | Hidden | Per-item VA pages (location, condition, dates) |
| 3 | `/supporting-evidence/request-private-medical-records` | Hidden | `private-medical-records-review` |
| 4 | `/supporting-evidence/private-medical-records-authorization` | Hidden | Per-item `private-medical-records-authorization` (now indexed) |
| 5 | `/supporting-evidence/add-limitation` | Hidden | No direct replacement (may be folded into authorization) |
| 6 | `/supporting-evidence/limitation` | Hidden | No direct replacement |
| 7 | `/supporting-evidence/private-medical-records` | Hidden | Per-item private pages (location, condition, dates) |
| 8 | `/supporting-evidence/summary` | Hidden | Built into array builder summary pages |

---

## Analytics QA Notes

- **`:index` URL segments** — Analytics should expect dynamic segments like `/supporting-evidence/0/va-medical-records-location`, `/supporting-evidence/1/va-medical-records-location`, etc. Consider using regex or wildcard matching for these patterns.
- **The 4142 authorization page** (`/:index/private-medical-records-authorization`) only appears for the first private record (`index === 0`). Subsequent records skip directly to the location page.
- **The "before 2005 date" page** (`/:index/va-medical-before-2005-date`) is conditional — only shown if the veteran answers "yes" to the pre-2005 prompt.
- **Feature toggle:** `redesignActive()` is currently hardcoded to `true`. There is a commented-out version that would read from `formData?.showArrayBuilder`, suggesting this may become a feature flag in the future.
- **Limited consent pages** (`add-limitation` and `limitation`) have no direct replacement in the new flow. This may be intentional or may be added later.
