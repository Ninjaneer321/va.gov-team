# Incident Report: CareCentra Launched Notifications in Staging Instead of Production

**Date:** 2024-05-09  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-05-09, CareCentra attempted to launch SMS and email notifications in Staging instead of Production. The issue was discovered when CareCentra hit the daily send limit in Staging and reached out to VA Notify for assistance.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2024-05-09 | CareCentra begins sending SMS and email notifications in Staging instead of Production |
| 2024-05-09 | Daily send limit reached in Staging |
| 2024-05-09 | CareCentra contacts VA Notify after hitting the daily limit |
| 2024-05-09 | Issue identified: notifications were being sent to Staging environment |

## Impact

- **Duration:** _[TBD]_
- **Affected channels:** SMS, Email
- **Estimated notifications affected:** _[TBD]_ (notifications sent to Staging instead of Production)
- **Business lines affected:** CareCentra

## Root Cause

CareCentra mistakenly configured their notification launch to target the Staging environment instead of Production, causing all SMS and email notifications to be sent to Staging.

## Resolution

_[TBD — see postmortem for details]_

Postmortem: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/pull/1672

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

- _[TBD — see postmortem for details]_
