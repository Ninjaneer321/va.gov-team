# Decision Reviews Form Flow Documentation — Gap Analysis

**Generated:** 2026-03-13
**Code source:** `vets-website` repo, `main` branch (production), commit `84054aa759`
**Docs source:** `va.gov-team` repo, `master` branch, pulled 2026-03-13

This document identifies discrepancies between the existing form flow documentation in `va.gov-team/products/decision-reviews/` and the actual production code in `vets-website/src/applications/appeals/`.

---

## Form 20-0995 (Supplemental Claims)

### Docs reviewed

- `Supplemental-Claims/supplemental-claims-flow.md` (V1 and V2 flows)
- `Supplemental-Claims/engineering/SC_frontend_overview.md`
- `Supplemental-Claims/engineering/SC_frontend_details.md`

### Discrepancies

#### 1. PrimaryPhone shown as unconditional in V2 flow (MEDIUM)

- **V2 flow doc:** Shows `PrimaryPhone` always appearing after `ContactInfo`
- **Code:** `depends: hasHomeAndMobilePhone` — only shows if both home and mobile phone numbers exist
- **Impact:** The V2 diagram overstates the number of pages a veteran will see. Veterans with only one phone number skip this page entirely.
- **Fix:** Add a conditional diamond before `PrimaryPhone` in the V2 flow: "Has both home & mobile phone?"

#### 2. MST/VHA pages missing from frontend details and overview docs (MEDIUM)

- **Code:** Chapter 4 (`vhaIndicator`) contains two pages: `optionForMst` (`/option-claims`) and `optionIndicator` (`/option-indicator`, conditional on `mstOption`)
- **V2 flow doc:** These pages ARE shown in the V2 Mermaid diagram (`ViewMSTOption`, `MSTIndicator`)
- **SC_frontend_details.md:** No mention of MST/VHA indicator pages at all
- **SC_frontend_overview.md:** No mention of MST/VHA indicator pages at all
- **Fix:** Add a "VHA Indicator" section to both frontend docs describing these pages and their conditional logic

#### 3. Typo in V2 flow diagram (LOW)

- **V2 flow doc:** Uses `Facilities[Factility types]` (misspelled "Factility")
- **Code page:** `facilityTypes` at path `/facility-types`
- **Fix:** Correct spelling to "Facility types"

#### 4. URL paths use "private" while docs use "non-VA" (LOW)

- **Code URLs:** `supporting-evidence/private-medical-records`, `supporting-evidence/request-private-medical-records`, `supporting-evidence/private-medical-records-authorization`
- **V2 flow doc and UI labels:** Use "non-VA" terminology throughout
- **Impact:** Cosmetic inconsistency. The URLs are stable and work correctly; only the naming convention differs.
- **Fix:** Document this intentionally in the frontend details doc (URLs predate the terminology change and are kept for backwards compatibility)

---

## Form 20-0996 (Higher Level Review)

### Docs reviewed

- `higher-level-review/HLR_flow.md` (V2 flow)
- `higher-level-review/engineering/HLR_frontend_overview.md`
- `higher-level-review/engineering/HLR_frontend_details.md`

### Discrepancies

#### 1. OptIn page in docs vs. Authorization page in code (HIGH)

- **Flow doc:** Shows a conditional `OptIn` page between `AreaOfDisagreement` and `IssueSummary`, with logic: "only shown when legacy appeals exist or issues manually entered"
- **Frontend details doc:** Describes an "Opt-in page" with the same conditional behavior
- **Code:** Has an `authorization` page at `/authorization` between `areaOfDisagreementFollowUp` and `issueSummary`. This page is **always shown** (no `depends` condition). It is NOT an opt-in page — it's an authorization/acknowledgment page.
- **Impact:** The documentation describes a page that no longer exists in the code. The actual page has different content and behavior (unconditional vs. conditional).
- **Fix:** Replace `OptIn` node with `Authorization` in the flow diagram. Update frontend details to describe the authorization page. Remove conditional logic description.

#### 2. Primary phone page described but doesn't exist (MEDIUM)

- **Frontend details doc:** States "immediately after the contact page would be a page asking the Veteran about their primary phone number"
- **Code:** No primary phone page exists in the 996 form config. The `profileContactInfo` call for 996 includes `['address', 'email', 'phone']` but does NOT generate a primary phone selection page.
- **Impact:** Documentation describes a page veterans will never see.
- **Fix:** Remove the primary phone page reference from `HLR_frontend_details.md`

#### 3. Source code path has moved (MEDIUM)

- **Frontend details doc:** References `src/applications/disability-benefits/996`
- **Code:** Actual location is `src/applications/appeals/996`
- **Impact:** Developers following the docs will look in the wrong directory.
- **Fix:** Update all path references from `disability-benefits/996` to `appeals/996`

#### 4. Informal conference flow oversimplified in flow doc (MEDIUM)

- **Flow doc:** Shows a single `ScheduleInformalConference` node with branches for "Contact me" and "Contact rep", followed by one `BestTime` node
- **Code:** The flow is actually two sequential pages:
  1. `requestConference` (`/informal-conference`) — yes/no: "Do you want an informal conference?"
  2. `conferenceContact` (`/informal-conference/contact`) — me/rep: "Who should we contact?" (conditional on yes)

  Then branches to:
  - **Veteran path:** `conferenceTime` (`/informal-conference/conference-availability`)
  - **Rep path:** `representativeInfoV2` (`/informal-conference/representative-info`) -> `conferenceTimeRep` (`/informal-conference/conference-rep-availability`)
- **Impact:** Developers and testers won't know about the two separate availability pages or the two-step yes/no -> me/rep flow.
- **Fix:** Expand the informal conference section to show all 5 pages and their conditional logic

#### 5. Authorization page undocumented (MEDIUM)

- **Code:** `authorization` page at `/authorization`, always shown, sits between area of disagreement and issue summary
- **Flow doc:** No mention of this page
- **Frontend details doc:** No mention of this page
- **Impact:** A page that every veteran sees is completely absent from documentation.
- **Fix:** Add `Authorization` node to flow diagram between `AreaOfDisagreement` and `IssueSummary`

#### 6. Contact info editing shows only "mobile phone" in flow doc (LOW)

- **Flow doc:** Shows edit options as "email, mobile phone, or mailing address"
- **Code:** The `profileContactInfo` configuration includes `['address', 'email', 'phone']` where `phone` maps to `mobilePhone`. There is no separate home phone edit page for HLR (unlike SC which has both).
- **Impact:** Minor — the doc is actually correct that only mobile phone editing is available, but could be clearer about why home phone is absent.
- **Fix:** No change needed; optionally add a note clarifying HLR only edits mobile phone (not home)

---

## Summary Priority Matrix

| Priority | Form | Issue | Effort |
|----------|------|-------|--------|
| **HIGH** | 996 | OptIn -> Authorization page mismatch | Small (update flow + details doc) |
| MEDIUM | 996 | Primary phone page doesn't exist | Small (remove reference) |
| MEDIUM | 996 | Code path moved to `appeals/996` | Small (find-replace) |
| MEDIUM | 996 | Informal conference flow incomplete | Medium (redraw flow section) |
| MEDIUM | 996 | Authorization page undocumented | Small (add node to flow) |
| MEDIUM | 995 | PrimaryPhone conditional missing from V2 flow | Small (add decision diamond) |
| MEDIUM | 995 | MST pages missing from frontend docs | Small (add section) |
| LOW | 995 | "Factility" typo | Trivial |
| LOW | 995 | private vs. non-VA URL terminology | Trivial (add note) |
| LOW | 996 | Mobile-only phone editing clarification | Trivial |

---

## Recommendation

The **996 (HLR) documentation has more significant drift** from the code than 995. The OptIn-to-Authorization change is the highest priority fix — it describes a fundamentally different page with different behavior. The 995 docs are reasonably close to the code, with the V2 flow diagram being the most accurate existing reference.

Consider establishing a practice of updating flow docs whenever form config changes are merged — perhaps as part of the PR checklist or Definition of Done.
