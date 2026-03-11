# Incident Report: VA Logo Missing from Emails

**Date:** 2024-04-25  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-04-25, the VA logo was missing from all VA Notify emails for approximately four hours. Reported by Jake Uhteg and filed by Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | VA logo asset removed from vets-website bucket |
| _[TBD]_ | Missing logo detected in emails |
| _[TBD]_ | Support ticket opened and PR merged |
| _[TBD]_ | Out-of-cycle deploy restored asset |

## Impact

- **Duration:** ~4 hours
- **Affected channels:** Email (all current and past emails)
- **Estimated notifications affected:** _[TBD]_ (all emails displayed missing logo)
- **Business lines affected:** _[TBD]_

## Root Cause

The VA logo image was removed in https://github.com/department-of-veterans-affairs/vets-website/pull/29331 after it was thought to be unused. The bucket URL was no longer available, so email clients showed missing images.

## Resolution

A VFS support ticket was opened to restore the logo asset. A PR was merged and deployed out of cycle after resolving unrelated CD status check issues.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
