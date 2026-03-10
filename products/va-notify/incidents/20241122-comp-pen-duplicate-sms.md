# Incident Report: Comp & Pen Duplicate SMS Sends

**Date:** 2024-11-22  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-11-22, most Comp & Pen recipients received a second SMS message due to a deployment race condition and SSM parameter misconfiguration. The incident was reported on 2024-11-26 by Cris Stoddard and Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | SSM parameter changed and cron adjusted |
| _[TBD]_ | Celery Beat deploy completed before Celery deploy |
| _[TBD]_ | Duplicate sends observed |
| _[TBD]_ | Resend decision made |

## Impact

- **Duration:** _[TBD]_ (race condition window ~2.5 minutes)
- **Affected channels:** SMS
- **Estimated notifications affected:** 55,143 intended recipients; 6,000 processed during invalid param window; 844 failed on resend
- **Business lines affected:** Comp & Pen

## Root Cause

A wrong SSM parameter was changed, then a race condition occurred where Celery Beat deployed before Celery. Invalid SSM params were loaded by Celery tasks for ~2.5 minutes, causing duplicate sends. The system could not identify which recipients were affected, so the team resent all messages under at-least-once delivery.

## Resolution

Resent all notifications after validating the SSM parameters and redeploying. During the second delivery, 844 failed due to ECS task scale-in (SIGTERM 30-second shutdown window for long-lived tasks).

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: remaining lessons learned text from incident report]_
