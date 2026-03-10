# Incident Report: Pinpoint V2 Status Update Failures

**Date:** 2025-09-30  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-09-30, 701 inbound notification status updates were not applied, delaying callbacks for ~550 notifications. Reported by Evan Parish.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Pinpoint V2 feature flag enabled for Celery only |
| _[TBD]_ | Status update validation failures observed |
| _[TBD]_ | Feature flag rolled back and updates replayed |

## Impact

- **Duration:** _[TBD]_ (delays only; no data loss)
- **Affected channels:** Notification status updates and callbacks
- **Estimated notifications affected:** ~550 notifications; 701 status events
- **Business lines affected:** _[TBD]_

## Root Cause

A partial rollout enabled Pinpoint V2 for Celery workers but not for API processes handling status updates, causing validation failures. Pinpoint V2 error variants were not mapped, increasing failed update attempts.

## Resolution

1. Disabled the Pinpoint V2 feature flag (rollback to V1).
2. Extracted and deduplicated affected payloads.
3. Replayed cleansed events through the status update pipeline.
4. Created ticket #2604 to resolve V2 error mapping issues.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Address Pinpoint V2 SMS error mapping (ticket #2604) | _[TBD]_ | _[TBD]_ | Planned |
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
