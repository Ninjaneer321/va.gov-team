# Incident Report: API 500 Errors During Schema Mismatch

**Date:** 2025-06-09  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-06-09, 13,644 notification requests received 500 responses and no notifications were sent. Reported by David Kalbfleisch.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Database migration removed `onsite_notification` column |
| _[TBD]_ | API code still referenced removed column |
| _[TBD]_ | Deployment completed and errors resolved |

## Impact

- **Duration:** _[TBD]_ (deployment window)
- **Affected channels:** notification-api email and SMS endpoints
- **Estimated notifications affected:** 13,644 failed requests (14,010 errors logged for missing column)
- **Business lines affected:** _[TBD]_

## Root Cause

A production deployment removed the `onsite_notification` column from Template and TemplateHistory before the API code was updated. Requests during the interim failed with `column templates.onsite_notification does not exist` errors.

## Resolution

_[TBD: resolution details from incident report]_

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
