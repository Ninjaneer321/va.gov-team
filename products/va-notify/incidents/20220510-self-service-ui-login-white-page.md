# Incident Report: Self Service UI Login White Page

**Date:** 2022-05-10  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2022-05-10, users logging into the VA Notify Self Service UI via GitHub SSO were met with a white page and could not reach service/template pages. Reported by Beverly Nelson (VA Notify Product Owner).

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Issue reported by Beverly Nelson |
| _[TBD]_ | Team identified UI/API mismatch after deployment |
| _[TBD]_ | Rollback initiated |
| _[TBD]_ | Incident resolved |

## Impact

- **Duration:** Under an hour
- **Affected channels:** Self Service UI (production)
- **Estimated notifications affected:** _[TBD]_
- **Business lines affected:** _[TBD]_
- **Users impacted:** All Self Service UI users were unable to proceed after login.

## Root Cause

A UI deployment had been manually paused to verify changes in Dev/Staging. Because changes to Dev/Staging required merging to `main`, a small change to a Cypress container brought along pending UI changes that were not ready for production. This introduced a discrepancy between the UI and API code that was not caught during PR review.

## Resolution

Rolled back the change to restore the previous UI version.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

- Share knowledge on how to roll back changes so more team members can do it.
- Engineering will complete smoke testing in all environments, ensuring the Self Service UI loads and at least one service is assigned to the user.
- _[TBD: remaining lessons learned from incident report]_
