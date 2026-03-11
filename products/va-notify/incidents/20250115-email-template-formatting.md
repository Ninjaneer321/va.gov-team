# Incident Report: Email Template Formatting Regression

**Date:** 2025-01-15  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-01-15, 84,482 emails were sent with incorrect formatting. Headers rendered as body text with a leading `#`. The incident was reported on 2025-01-16 by Melanie Jones (report written by Kyle MacMillan).

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2024-12-19 | Package upgrade merged; template updates not yet applied |
| 2025-01-15 | Formatting issue discovered |
| _[TBD]_ | Templates updated manually |

## Impact

- **Duration:** ~5 hours
- **Affected channels:** Email
- **Estimated notifications affected:** 84,482
- **Business lines affected:** _[TBD]_

## Root Cause

Template changes required for a security package upgrade were tracked in a ticket but not completed before the upgrade was merged.

## Resolution

Rollback was not feasible due to subsequent updates. The affected templates were manually updated to resolve the formatting issue.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

- Breaking-change work should pause until templates are updated.
