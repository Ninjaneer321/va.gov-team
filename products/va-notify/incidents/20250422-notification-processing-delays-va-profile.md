# Incident Report: Notification Processing Delays (VA Profile)

**Date:** 2025-04-22  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-04-22, notifications and updates were delayed up to one hour during a three-hour window. Reported by Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Comp & Pen load triggered high VA Profile traffic |
| _[TBD]_ | Read timeouts blocked contact lookup tasks |
| _[TBD]_ | Workers scaled down to reduce load |
| _[TBD]_ | Processing restored and scaled back up |

## Impact

- **Duration:** ~3 hours (delays up to 1 hour)
- **Affected channels:** All notification sending and updates
- **Estimated notifications affected:** _[TBD]_ (Comp & Pen surge)
- **Business lines affected:** Comp & Pen

## Root Cause

VA Notify did not anticipate request-per-second impacts on VA Profile. Celery worker prioritization and the Comp & Pen load caused read timeouts for contact information lookups.

## Resolution

Coordinated with VA Profile and reduced worker count to lighten load. Workers were scaled back up after processing completed.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Negotiate RPS limits with VA Profile for current/projected load | _[TBD]_ | _[TBD]_ | Planned |
| _[TBD: read timeout improvements]_ | | | |

## Lessons Learned

- Negotiate RPS limits with VA Profile to account for current and projected load.
- _[TBD: read timeout improvements from incident report]_ 
