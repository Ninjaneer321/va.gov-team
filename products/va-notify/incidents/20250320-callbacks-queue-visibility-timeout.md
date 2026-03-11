# Incident Report: Callback Status Update Failures

**Date:** 2025-03-20 to 2025-03-24  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

Between 2025-03-20 and 2025-03-24, callback status updates were potentially incorrect. At most 8,500 emails were sent during the incident window. Reported by Kyle MacMillan on 2025-03-24.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Queue visibility timeout reduced to 10 seconds |
| _[TBD]_ | Tasks reappeared under load and were retried |
| 2025-03-24 | Issue reported and mitigated |

## Impact

- **Duration:** _[TBD]_ (issue window 03/20–03/24)
- **Affected channels:** Callbacks
- **Estimated notifications affected:** Up to 8,500 emails sent
- **Business lines affected:** _[TBD]_

## Root Cause

A queue visibility timeout change to 10 seconds caused tasks to reappear while workers were under load. The duplicate-send protection raised exceptions and marked notifications as permanent failures.

## Resolution

Increased the queue visibility timeout and made a small change to application code.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
