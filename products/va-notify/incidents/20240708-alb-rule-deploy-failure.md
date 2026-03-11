# Incident Report: ALB Rule Deploy Failure

**Date:** 2024-07-08  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-07-08, an infrastructure deploy failed while updating AWS ALB rules. Reported by Cris Stoddard.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Terraform deploy failed (ALB rule tags lookup after removal) |
| _[TBD]_ | Deploy rolled back within ~6 minutes |
| 2024-07-09 | Change re-applied around 4:30 ET |

## Impact

- **Duration:** _[TBD]_ (rollback within 6 minutes)
- **Affected channels:** AWS ALB rules for Notification API
- **Estimated notifications affected:** _[TBD]_ (no routing issues expected)
- **Business lines affected:** _[TBD]_

## Root Cause

Terraform attempted to list a resource's tags after it was removed, causing the deploy to fail.

## Resolution

Rolled back within 6 minutes, then pushed the intended change on 2024-07-09 around 4:30 ET to reprioritize ALB rules.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

- Consider retrying failed deploys for similar Terraform tag ordering issues.
- _[TBD: remaining lessons learned text from incident report]_
