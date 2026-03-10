# Incident Report: Expired API Keys Caused Authentication Failures

**Date:** 2025-10-06  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-10-06, the VBA Education and Pension Benefits services received 403 errors when sending emails due to expired API keys. Reported by Evan Parish.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | API keys expired |
| _[TBD]_ | 403 errors detected |
| _[TBD]_ | Expiry dates extended and keys updated |

## Impact

- **Duration:** _[TBD]_ 
- **Affected channels:** Email
- **Estimated notifications affected:** VBA Education 49,417 failed requests; Pension Benefits 2,218 failed requests (75 notifications blocked)
- **Business lines affected:** VBA Education, Pension Benefits

## Root Cause

Two services did not update to new API keys before the old keys expired.

## Resolution

Extended API key expiry dates to allow more time for migration. VBA Education updated configuration to use the new key.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
