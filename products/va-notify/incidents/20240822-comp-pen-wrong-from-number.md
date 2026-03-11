# Incident Report: Comp and Pen SMS Sent from Wrong Phone Number

**Date:** 2024-08-22  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-08-22, Comp and Pen SMS notifications were sent from the wrong phone number (+18334981539 instead of 96702). The issue was reported on 2024-09-26 by Kyle MacMillan and Melanie Jones.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2024-08-22 | Notifications sent from toll-free number |
| 2024-09-26 | Incident reported |
| _[TBD]_ | Remediation applied |

## Impact

- **Duration:** _[TBD]_ (notifications delayed due to toll-free throughput limits)
- **Affected channels:** Comp and Pen SMS feature (all environments)
- **Estimated notifications affected:** _[TBD]_ (throttling at 3 messages/second)
- **Business lines affected:** VBA Compensation and Pension

## Root Cause

Comp and Pen SMS integrated directly with SMS delivery code rather than calling the standard VA Notify API, and misconfiguration led to using a toll-free test number. 

_[TBD: remaining root cause details from incident report]_

## Resolution

_[TBD: resolution details from incident report]_

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
