# Incident Report: Notification Portal Stats Route Removed

**Date:** 2024-06-17  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-06-17, the Notification Portal staging `Live in Production` tab displayed an error because a route was removed during a refactor. Reported by Samantha Jennings on 2024-06-25.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2024-06-17 | Refactor removed a staging/prod shared route |
| 2024-06-25 | Issue reported |
| 2024-06-25 | Route restored; issue resolved |

## Impact

- **Duration:** _[TBD]_ (report to fix ~2 hours)
- **Affected channels:** Notification portal (staging)
- **Estimated notifications affected:** _[TBD]_ (portal displayed error instead of stats)
- **Business lines affected:** _[TBD]_

## Root Cause

A refactor in https://github.com/department-of-veterans-affairs/notification-portal/pull/2182 removed a route that was still used for staging/prod shared logic.

## Resolution

Re-added the removed route.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

- Double-check all functionality impacted by refactors involving communication between environments.
