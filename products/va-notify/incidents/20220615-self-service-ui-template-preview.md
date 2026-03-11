# Incident Report: Self Service UI Template Preview Issues

**Date:** 2022-06-15  
**Severity:** Low  
**Status:** Resolved  
**Reporter:** Bev  
**Authors:** _[TBD]_

---

## Summary

After deploying the VA Notify Self Service portal to Staging, several UI issues were discovered: preview functionality for newly created templates was broken, an error flashed when loading new templates, a typo was introduced on the Sample Template, and the Sample Template link was incorrectly shown on the SMS Template creation page.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2022-06-15 | Bev reported issues after deploying Self Service portal to Staging |
| 2022-06-15 | Root cause identified: notification-api preview endpoint not deployed to Staging, and URL param bug for new templates |
| 2022-06-15 | Kyle approved promoting the new preview endpoint to notification-api Staging |
| 2022-06-15 | notification-api Staging deploy completed; unsaved template preview verified working |
| 2022-06-16 | Bug fix deployed: correctly formatted URL params for new template preview request |
| 2022-06-16 | Incident resolved |

## Impact

- **Duration:** ~1 day (2022-06-15 to 2022-06-16)
- **Affected channels:** Self Service UI (Staging)
- **Estimated notifications affected:** None — Staging only; no production notifications affected
- **Business lines affected:** None — Staging environment only

## Root Cause

When the Self Service portal was initially deployed to Staging, the unsaved template preview was not working (for both saved and new templates). The portal relies on notification-api to generate the template preview, and the specific endpoint used for unsaved template changes had not yet been deployed to the Staging environment of notification-api.

After the notification-api Staging deploy was completed and unsaved template changes were verified, a second bug was discovered: new templates could not generate previews because the template's associated `service_id` was not passed correctly as a URL param in the request. See [notification-portal/pull/64](https://github.com/department-of-veterans-affairs/notification-portal/pull/64).

Additional issues observed:
- Error flashing between loading new templates
- Typo introduced on the Sample Template
- Sample Template link incorrectly showing on the SMS Template creation page

## Resolution

Correctly formatted the URL params for the new (unsaved) template preview request. See [notification-portal/pull/64](https://github.com/department-of-veterans-affairs/notification-portal/pull/64).

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Create a Release Plan | Team | — | Done |
| Add UX and Product review step during QA | Team | — | Done |
| Improve testing of external dependencies (e.g., notification-api requests) not testable during local development | Team | — | Done |

## Lessons Learned

- Creating a Release Plan to ensure dependencies are accounted for before deploying to Staging.
- Adding an additional step of UX and Product review while in QA.
- Make sure that external dependencies (like notification-api requests) that cannot be tested during local development are thoroughly validated before deployment.
