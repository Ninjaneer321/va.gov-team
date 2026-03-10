# Incident Report: SMS Delivery Delays (Provider/Carrier)

**Date:** 2025-07-17  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-07-17, a client reported SMS delivery delays for Pinpoint and Twilio messages. Reported by Evan Parish.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Client reported delayed delivery |
| _[TBD]_ | Investigation confirmed provider/carrier delays |

## Impact

- **Duration:** _[TBD]_ (provider/carrier delays)
- **Affected channels:** SMS (Pinpoint and Twilio)
- **Estimated notifications affected:** _[TBD]_ (approx. 1% delayed by 1+ hour)
- **Business lines affected:** _[TBD]_

## Root Cause

No specific system root cause identified. Provider/carrier delays can occur after VA Notify hands off messages.

## Resolution

Investigating improved monitoring to quantify delay frequency and identify prevention opportunities.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Improve monitoring for delivery delays | _[TBD]_ | _[TBD]_ | Planned |
| Enhance logging/metrics by service/template | _[TBD]_ | _[TBD]_ | Planned |

## Lessons Learned

- Monitoring should better track SMS delays.
- Logging/metrics should better associate notifications with services/templates.
