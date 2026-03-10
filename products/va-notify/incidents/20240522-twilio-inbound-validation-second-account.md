# Incident Report: Twilio Inbound Validation Missing Second Account Key

**Date:** 2024-05-22  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-05-22, inbound Twilio messages to VEText could not be validated when a second Twilio account was used for SMS. Reported by Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2023-12-18 | Potential start of issue based on https://github.com/department-of-veterans-affairs/vanotify-team/issues/1189 |
| 2024-05-22 | Incident discovered; validation temporarily disabled |
| 2024-05-23 | Validation re-enabled with permanent fix |

## Impact

- **Duration:** _[TBD]_ (messages forwarded via fallback with minimal delay)
- **Affected channels:** Twilio inbound SMS forwarding to VEText
- **Estimated notifications affected:** _[TBD]_ (no data lost; delays of seconds)
- **Business lines affected:** _[TBD]_

## Root Cause

VA Notify added validation to the forwarder, but a second Twilio account was sending SMS and the validation key was missing. There was no monitoring for failed authentications, and the low frequency of messages delayed detection.

## Resolution

Received the second Twilio account key and added validation for any Twilio account with a known key. Validation was temporarily disabled during monitoring and re-enabled with a permanent fix.

_[TBD: remaining resolution details from incident report]_

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Add monitoring/alerting for failed inbound validations | _[TBD]_ | _[TBD]_ | Planned |
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
