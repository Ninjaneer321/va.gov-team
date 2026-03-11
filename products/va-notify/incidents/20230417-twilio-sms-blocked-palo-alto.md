# Incident Report: Twilio SMS Blocked by Palo Alto Update

**Date:** 2023-04-17  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2023-04-17, outbound SMS to Twilio failed after a Palo Alto Security update blocked outbound requests. Reported by Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 01:00 PT | Palo Alto update applied |
| 04:50 | SMS messages began to trickle in |
| 08:25 | PagerDuty alert triggered |
| ~13:00 | Exception granted; SMS resumed |
| 2023-04-18 | Palo Alto change reverted |

## Impact

- **Duration:** ~4.5 hours (alert at 08:25 ET, fix by ~13:00 ET)
- **Affected channels:** API SMS delivery (Twilio)
- **Estimated notifications affected:** _[TBD]_ (some messages did not reach Veterans)
- **Business lines affected:** _[TBD]_

## Root Cause

Palo Alto Security updated outbound request handling, blocking Twilio SMS traffic. The issue appeared external because VA Notify had not changed API/infrastructure in over a week and certificates were valid.

## Resolution

Opened a support ticket, escalated to critical, and joined a bridge call with Palo Alto Security. An exception was granted to allow Twilio traffic, and the Palo Alto changes were reverted on 2023-04-18.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Increase retry policy to 24 hours with different interval | _[TBD]_ | _[TBD]_ | Planned |
| _[TBD]_ | | | |

## Lessons Learned

- A 4-hour retry policy was insufficient; increase to 24 hours with a different interval.
- _[TBD: remaining lessons learned text from incident report]_
