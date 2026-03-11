# Incident Report: Domo/BigQuery Lambda Dependency Failure

**Date:** 2023-05-08  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2023-05-08, Domo data for clients was inaccurate because AWS library updates caused VA Notify lambdas to fail. Reported by Kyle MacMillan.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Lambda failures detected |
| _[TBD]_ | Dependency issue identified (urllib3 subdependency) |
| _[TBD]_ | Non-breaking urllib3 version pinned |
| _[TBD]_ | Data restored |

## Impact

- **Duration:** ~6 hours
- **Affected channels:** Domo/BigQuery data pipeline (perf, staging, prod)
- **Estimated notifications affected:** _[TBD]_ (client reporting data inaccurate)
- **Business lines affected:** _[TBD]_

## Root Cause

AWS library updates caused lambdas to fail. The lambda depended on a `urllib3` subdependency that was not pinned, and the OS update introduced breaking changes.

## Resolution

Pinned a non-breaking version of `urllib3`.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Identify critical lambdas that require pinned subdependencies | _[TBD]_ | _[TBD]_ | Planned |
| Improve lambda monitoring for dependency failures | _[TBD]_ | _[TBD]_ | Planned |

## Lessons Learned

- If a system is critical, pin all subdependencies.
- Review existing lambdas for more locked-down dependency configurations.
- Improve monitoring to alert on these failures sooner.
