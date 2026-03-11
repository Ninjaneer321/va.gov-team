# Incident Report: Comp and Pen SMS Delayed by Payments Connector Issues

**Date:** 2024-10-21  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-10-21, Comp and Pen SMS notifications were delayed and sent on 2024-10-24 instead of 2024-10-22. The issue was reported on 2024-10-25 by Kyle MacMillan and Ksenia Belikova.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2024-10-17 | Connector upgrade required snapshot reload |
| 2024-10-21 | Issue brought to VA Notify |
| 2024-10-22 | Payments team fixed connector |
| 2024-10-23 | Payment events resumed |
| 2024-10-24 | Comp and Pen SMS notifications sent |

## Impact

- **Duration:** _[TBD]_ (notifications delayed by ~2 days)
- **Affected channels:** Comp and Pen SMS sending
- **Estimated notifications affected:** _[TBD]_
- **Business lines affected:** VBA Compensation and Pension

## Root Cause

The Payments team moved VBA1.CORPPROD.PYMT to a unique connector. After a connector upgrade, the snapshot reload failed and Kafka stream processing stalled, causing stale data and delayed payment events.

## Resolution

Payments team fixed the connector on 2024-10-22, and events resumed on 2024-10-23.

_[TBD: remaining resolution details from incident report]_

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
