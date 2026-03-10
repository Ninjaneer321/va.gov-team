# Incident Report: Celery Retry Misconfiguration Caused Scaling

**Date:** 2025-08-07  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-08-07, a single notification triggered excessive retries and system scaling due to misconfigured Celery retry timeouts. Reported by Evan Parish.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Callback endpoint returned 500 |
| _[TBD]_ | Retry loop caused excessive worker scaling |
| _[TBD]_ | Retries dropped for affected notification |

## Impact

- **Duration:** ~2 hours (1 hour troubleshooting, 1 hour recovery)
- **Affected channels:** Notification API Celery workers
- **Estimated notifications affected:** _[TBD]_ (delivery not impacted)
- **Business lines affected:** _[TBD]_

## Root Cause

Retry max timeout exceeded the SQS visibility timeout, allowing multiple workers to retry the same task without advancing the retry counter.

## Resolution

Deployed a change to drop retries for the affected notification, returning resource usage to normal levels.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Align Celery retry max timeout with SQS visibility timeout | _[TBD]_ | _[TBD]_ | Planned |
| _[TBD]_ | | | |

## Lessons Learned

- Celery retry max timeout cannot be longer than the SQS visibility timeout.
- _[TBD: remaining lessons learned text from incident report]_
