# CHAMPVA Error State Coverage Assessment
> This document covers both frontend (FE) and backend (BE) findings. FE owned by Stephen Willis, BE owned by Brandon Reed.

Type 1 versus Type 2 Error: 
- Type 1 errors would appear to the user right away, and those would disappear if the user left and came back or refreshed their page.
- Type 2 errors would appear after some time to the user, and that alert persists on the UI for 30 days.

## #1 — Full Page Load Failure

Already covered by the existing `ServiceUnavailableAlert` component which renders when the claims API is down. No CHAMPVA-specific gap in functionality.

One potential enhancement: the error message could be made CHAMPVA-aware by pulling the custom phone number and hours from `claimStatusMeta?.help` in the JSON config (which already has `800-733-8387` and hours), falling back to the generic message for non-CHAMPVA claims. This would require a small update to `ServiceUnavailableAlert` to accept and render `claimStatusMeta` help data. This is a product decision. If generic messaging is acceptable, no work needed here.

If CHAMPVA-specific messaging is desired, it would read something like: "We're sorry, we can't load your CHAMPVA application status right now. Please try again later or call us at 800-733-8387 (TTY: 711)." This is more useful than the generic message because it gives the CHAMPVA-specific phone number rather than a general VA number.

**Current generic message in UI:**
> "We can't access some of your claims or appeals right now"
> "We're sorry. There's a problem with our system. Refresh this page or try again later."

No phone number, no retry guidance beyond "refresh." For CHAMPVA that's notably less helpful since users have no idea who to call.

---

## #2 — PEGA Status Unavailable / Unmapped

This one has both a FE and BE gap.

**BE side (Brandon):** The PEGA status normalizer in the BE maps known statuses (`Submission Received` → `pending`, `Processed` → `vbms`, etc.). If PEGA returns something outside that known list, there is no default fallback value — the raw or null status passes through to the FE.

**FE side (Stephen):** When `status` is unmapped, `claimStatusMeta?.whatWeAreDoing?.statusMap?.[status]` returns `undefined`. The card renders with no step title, no description, no content — just a blank section with no indication to the user that something went wrong.

**What's needed:**
- BE adds a default/fallback normalized status (likely `error` or a new `unknown`) for anything outside the known PEGA values
- FE adds a fallback render when `statusMap[status]` is undefined, showing something like: "We're unable to display your application status right now. Please call us at 800-733-8387 (TTY: 711)."

**Product question to flag:** Should an unmapped PEGA status fall back to the `error` state copy, or get its own distinct message? That determines whether this is a BE-only fix or needs new FE copy too.

---

## #3 — Eligibility / Evidence (VES) Unavailable

This is a pure gap on both sides — nothing exists for this today. VES is not in scope for Release 1 but documenting for future planning.

**BE side (Brandon):** VES is a separate upstream system from PEGA. If VES times out or fails, there is currently no isolated error surfaced in the API response to distinguish "PEGA worked but VES failed" from a full failure. The BE would need to return a partial response shape or a specific error indicator for VES being down independently.

**FE side (Stephen):** There is no section-level error component for eligibility or evidence data failing independently. The CST either renders everything or shows the full `ServiceUnavailableAlert`. There is no pattern for "status loaded fine but eligibility/evidence section failed."

**What's needed:**
- BE surfaces a VES-specific error indicator in the response (e.g. a flag or null with an error code on the eligibility/evidence portion)
- FE adds a localized section-level error component that renders in place of the VES data section when that indicator is present, something like: "We're unable to load your eligibility information right now. Please try again later."

No action needed now. Revisit when VES integration is scoped.

---

## #4 — Partial Data (Mixed Success)

This is a gap on both sides — no pattern exists for this today.

Think of the CHAMPVA detail page as a dashboard with multiple sections: a status section (from PEGA), a beneficiary/eligibility section (from VES), and a documents section. Right now if any one of those upstream systems fails, the whole page either works or fails together. Partial data means: the status section loads fine and shows correctly, but the eligibility section fails and shows a localized "we can't load this section" error instead of the entire page blowing up. The goal is to not let one failed section take down the whole page.

**BE side (Brandon):** The current API response is all-or-nothing per claim. There is no response shape that communicates "some data loaded successfully, other data did not." For example, if PEGA status loads but a beneficiary record fails, the BE has no way to indicate that to the FE currently.

**FE side (Stephen):** The CST has no partial render pattern. It either renders the full claim detail or falls back to the full page `ServiceUnavailableAlert`. There is no component or logic for rendering a successfully loaded section alongside a localized error in a failed section.

**What's needed:**
- BE returns a partial success response shape that identifies which sections loaded and which failed, rather than treating any failure as a full outage
- FE adds per-section error handling so a failed section renders a localized inline error while successfully loaded sections still display normally

**Note:** This is the most complex of all the scenarios as it requires a new response contract between BE and FE. Recommend treating this as its own follow-up story rather than part of this validation ticket. Lower priority for Release 1 since CHAMPVA Phase 1 only has status, not multiple data sections yet.

**Product/UX question:** When a section fails to load, what should the fallback experience look like for CHAMPVA specifically? Options are:
1. A generic "we can't load this section" inline error with a retry button
2. A CHAMPVA-specific message with the help phone number (800-733-8387)
3. Hide the section entirely with no error shown

That decision drives what the FE component needs to render and whether copy needs to go in the JSON config or hardcoded in the component. Worth getting UX to weigh in before building.

---

## #5 — Identity / Mapping Issues

This one is partially covered generically but has a CHAMPVA-specific gap. Brandon will need to weigh in on the BE side given the ICN column work he's done.

**BE side (Brandon):** Generic `RECORD_NOT_FOUND_ERROR` and `USER_FORBIDDEN_ERROR` action types exist in the FE, meaning the BE already returns 404/403 responses for these cases. However, with Brandon's ICN column work on the table, there may now be CHAMPVA-specific matching logic — if a veteran's ICN doesn't match a CHAMPVA record, the BE needs to confirm what it returns and whether that's distinguishable from a generic 404. Brandon to confirm.

**FE side (Stephen):** The FE handles generic 404/403 via existing action types but has no CHAMPVA-specific "we can't find your record" state. A CHAMPVA user hitting an identity mismatch would see the same generic error as any other claim type with no guidance on who to contact.

**What's needed:**
- Brandon to confirm what the BE returns when ICN lookup fails for a CHAMPVA record specifically
- If a distinct error code is returned, FE can render a CHAMPVA-specific message like: "We're unable to match your information to a CHAMPVA application. Please call us at 800-733-8387 (TTY: 711)."

filespage.jsx lines 120-129 has a potential solution for this we can review!

**Product question to flag:** Is a CHAMPVA-specific identity error message in scope for Release 1 or is the generic fallback acceptable for now?

---

## #6 — Data Not Yet Available

Already covered — no gap for the `pending` status scenario.

**BE side (Brandon):** When a CHAMPVA application is submitted but not yet processed by PEGA, the BE normalizes the status to `pending` (`Submission Received` → `pending`). This is working as expected.

**FE side (Stephen):** `pending` maps to Step 1 "Application received" in the JSON config's `statusMap`, which correctly communicates to the user that their application was received and is being processed. No additional "check back later" state is needed since Step 1 already handles this gracefully.

**Note on `error` status:** The `error` PEGA status (`Error`, `Failed`, `Rejected`, `Submission failed`) is a separate scenario covered under #2. The error state copy and step mapping are still unfinished — UX (Alyssa) is finalizing designs. Once confirmed, Kenny updates the JSON config and the FE copy in `claims-helpers.js` will need to be updated to match.

No action needed for #6. Fully covered by the existing `pending` status flow.

---

## #7 — Upload Errors

Already covered by existing CST infrastructure, but not applicable to CHAMPVA.

**BE side (Brandon):** Upload error handling exists via the `evidence_submissions` table and `uploadStatus: 'FAILED'` tracking. This is all standard CST infrastructure.

**FE side (Stephen):** `UploadType2ErrorAlert`, `UploadType2ErrorAlertSlim`, `Type1UnknownUploadError`, and file size/type validation all exist and work for standard claims. However, CHAMPVA uses `simpleLayout: true` in the JSON config which suppresses the entire upload UI on the Files tab, replacing it with mail/fax instructions instead. Upload errors are therefore not reachable for CHAMPVA users — they have no upload UI to trigger them.

No action needed. Upload errors are N/A for CHAMPVA in Release 1.

