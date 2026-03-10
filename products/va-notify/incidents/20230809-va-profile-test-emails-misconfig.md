# Incident Report: VA Profile Misconfiguration Triggered Test Emails

**Date:** 2023-08-09 to 2023-08-10  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2023-08-09 to 2023-08-10, VA Profile misconfiguration could have sent ~125,000 emails to a test address. The requests were invalid, so no emails were sent. Reported by Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2023-08-09 | VA Profile test events triggered in production |
| 2023-08-10 | API key revoked; remediation actions taken |

## Impact

- **Duration:** _[TBD]_ (off-hours; no valid emails sent)
- **Affected channels:** API email notifications
- **Estimated notifications affected:** _[TBD]_ (invalid requests prevented actual sends)
- **Business lines affected:** _[TBD]_

## Root Cause

A legacy configuration in VA Profile PPD routed test events through VA Notify production. The configuration was intended as a one-time testing setup but was not removed after testing.

## Resolution

Revoked the VA Profile API key. VA Profile removed all references to VA Notify production in PPD. 

_[TBD: remaining resolution steps from incident report]_

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Ensure test plans avoid VA Notify production configuration | _[TBD]_ | _[TBD]_ | Planned |

## Lessons Learned

_[TBD: lessons learned from incident report]_
