# Incident Report: Pinpoint V2 SMS Validation Regression

**Date:** 2025-11-06  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-11-06, three VEText SMS notifications were delayed after a Pinpoint V2 rollout caused tasks to get stuck in the retry queue. Reported by Christopher Johnson.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Pinpoint V2 rollout initiated |
| _[TBD]_ | SMS retries stuck for Puerto Rico and Ontario numbers |
| _[TBD]_ | Feature flag disabled; V1 resumed processing |

## Impact

- **Duration:** ~60 minutes
- **Affected channels:** VEText (SMS API Rx Message)
- **Estimated notifications affected:** 3 notifications delayed
- **Business lines affected:** _[TBD]_

## Root Cause

AWS End User Messaging introduced stricter destination validation for Puerto Rico and Ontario numbers. Pinpoint V2 threw exceptions instead of HTTP errors (as in V1), leaving tasks in the retry queue.

## Resolution

Disabled Pinpoint V2 feature flag (rollback to V1). Pinpoint V1 client processed the queued notifications.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Open AWS support ticket for destination validation discrepancy | _[TBD]_ | _[TBD]_ | In progress |
| Improve exception handling for End User Messaging | _[TBD]_ | _[TBD]_ | Planned |

## Lessons Learned

- AWS support ticket opened for destination validation discrepancies.
- _[TBD: remaining lessons learned text from incident report]_
