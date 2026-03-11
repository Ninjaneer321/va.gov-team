# Incident Report: VEText Forwarding Lambda VPC Conflict

**Date:** 2022-08-24  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2022-08-24, the VEText forwarding lambda encountered a VPC/security group conflict across environments after staging attempted to use a development VPC. Reported by Kyle MacMillan. Resolution work began around 8:00 PM ET and was in place around 8:30 PM ET.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Conflict discovered while resolving lower environments |
| 20:00 | Maintenance window started; endpoint expected down up to an hour |
| 20:30 | Resolution in place |

## Impact

- **Duration:** About a day overall; endpoint maintenance window lasted ~30 minutes
- **Affected channels:** VEText forwarding lambda (all environments)
- **Estimated notifications affected:** _[TBD]_ (lambda had a fallback so zero messages were lost)
- **Business lines affected:** _[TBD]_

## Root Cause

The original VPC/security group configuration was set up with incomplete knowledge, resulting in security groups pointing to the development VPC.

## Resolution

Updated security groups to point to the applicable VPC and deployed the changes.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

- Share knowledge on the correct VPC/security group setup for lambda resources.
- _[TBD: remaining lessons learned text from incident report]_
