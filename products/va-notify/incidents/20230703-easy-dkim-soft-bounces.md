# Incident Report: Easy DKIM Failure Causing Email Soft Bounces

**Date:** 2023-07-03  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2023-07-03, email notifications in production were soft-bounced because a large DNS issue caused AWS Easy DKIM to fail. Reported by Cris Stoddard and Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | DNS issue impacted Easy DKIM |
| _[TBD]_ | Soft bounces observed |
| _[TBD]_ | Easy DKIM reset forced |
| _[TBD]_ | Email delivery restored |

## Impact

- **Duration:** ~2 hours
- **Affected channels:** API email notifications
- **Estimated notifications affected:** _[TBD]_ (emails soft-bounced)
- **Business lines affected:** _[TBD]_

## Root Cause

A large DNS issue caused AWS Easy DKIM to fail, resulting in unsigned emails and soft bounces.

## Resolution

Forced an update to the Easy DKIM certificates, which reset the signing configuration.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

- If unexpected soft bounces occur, force Easy DKIM to reset.
