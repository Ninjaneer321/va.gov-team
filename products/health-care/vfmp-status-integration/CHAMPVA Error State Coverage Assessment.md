# CHAMPVA Error State Coverage Assessment
> This document covers both frontend (FE) and backend (BE) findings. FE owned by Stephen, BE owned by Brandon.

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
