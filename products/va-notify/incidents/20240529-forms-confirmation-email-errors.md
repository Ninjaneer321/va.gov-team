# Incident Report: VA.gov Forms Confirmation Email Errors

**Date:** 2024-05-29  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-05-29, VA.gov form submissions displayed errors because confirmation email logic failed when a feature flipper was off. The issue was reported to VA Notify on 2024-06-03 by Eric Tillberg (Veteran Facing Forms).

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2024-05-29 | Regression introduced in https://github.com/department-of-veterans-affairs/vets-api/pull/16892 |
| 2024-06-03 | Issue reported to VA Notify |
| 2024-06-03 | Fix merged in https://github.com/department-of-veterans-affairs/vets-api/pull/16982 |

## Impact

- **Duration:** _[TBD]_ (resolved before notification)
- **Affected channels:** VA.gov forms (vets-api)
- **Estimated notifications affected:** Up to 2.9k users impacted (per reporter)
- **Business lines affected:** Veteran Facing Forms

## Root Cause

A refactor in https://github.com/department-of-veterans-affairs/vets-api/pull/16892 caused errors when a feature flipper was off for a given form.

## Resolution

A fix was merged in https://github.com/department-of-veterans-affairs/vets-api/pull/16982. The Forms team chose not to send confirmation emails retroactively due to matching risks. See the Forms team incident report: https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/incident_reporting/0966incident.md#incident-2-confirmation-email-bug.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Add signoff checks for code owners in trigger ticket templates | _[TBD]_ | _[TBD]_ | Planned |
| Add automated specs for flipper on/off states | _[TBD]_ | _[TBD]_ | Planned |
| _[TBD]_ | | | |

## Lessons Learned

- Ensure proper signoff from engineers who own the code being modified.
- Add automated specs for flipper states (on and off) covering relevant code.
- _[TBD: remaining lessons learned text from incident report]_
