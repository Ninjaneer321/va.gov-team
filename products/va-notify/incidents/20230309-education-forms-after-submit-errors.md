# Incident Report: Education Forms Submission Errors

**Date:** 2023-03-09  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

A change introduced on 2023-03-09 caused errors when submitting VBA Education forms (1995, 1990e, 5495, 1990n, 0993, 0994, 1990s). The issue was noticed on 2023-03-10 and reported to VA Notify on 2023-03-15 by Michael Napper (VBA Education Services Chief).

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2023-03-09 | Regression introduced during refactor |
| 2023-03-10 | Issue noticed by Michael Napper |
| 2023-03-15 | Issue reported to VA Notify |
| _[TBD]_ | Fix deployed |

## Impact

- **Duration:** _[TBD]_ (introduced 03/09, reported 03/15)
- **Affected channels:** VA.gov education form submissions (vets-api staging and production)
- **Estimated notifications affected:** _[TBD]_ (email confirmations failed for affected forms)
- **Business lines affected:** VBA Education

## Root Cause

VA Notify added logic to `SavedClaim::EducationBenefits#after_submit` to send email confirmations. During a refactor to move logic into subclasses, the parent `after_submit` method was removed in https://github.com/department-of-veterans-affairs/vets-api/pull/12020. Forms that did not implement their own `after_submit` method broke as a result.

## Resolution

_[TBD: resolution details from incident report]_

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned from incident report]_
