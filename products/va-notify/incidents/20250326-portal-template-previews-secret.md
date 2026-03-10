# Incident Report: Portal Template Previews Unavailable

**Date:** 2025-03-26  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2025-03-26, the portal was unable to show template previews due to an extra space in a secret. Reported by Ksenia Belikova (written by Kyle MacMillan).

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Secret updated with extra space |
| _[TBD]_ | Endpoint tests passed in Postman (ignored space) |
| _[TBD]_ | Secret fixed and task redeployed |

## Impact

- **Duration:** ~25 minutes
- **Affected channels:** Portal
- **Estimated notifications affected:** _[TBD]_
- **Business lines affected:** _[TBD]_

## Root Cause

A secret update included an extra space. Postman ignored the space during testing, masking the issue.

## Resolution

Fixed the secret and redeployed the task.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Update portal validation documentation | _[TBD]_ | _[TBD]_ | In progress |

## Lessons Learned

Portal validation documentation needed clarification and is being updated.
