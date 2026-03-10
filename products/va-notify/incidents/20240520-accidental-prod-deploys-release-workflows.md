# Incident Report: Accidental Production Deploys from Release Workflows

**Date:** 2024-05-20  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2024-05-20, release workflows triggered accidental deploys to production when publishing release drafts via the GitHub API. Reported by Cris Stoddard and filed by Lucas Draney.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Release draft published via GitHub API |
| _[TBD]_ | `cd-pipeline.yml` triggered from `1721-publish-release-notes` |
| _[TBD]_ | Manual production deploy executed to stabilize |

## Impact

- **Duration:** ~3 hours from discovery to stabilization
- **Affected channels:** Notification API production environment
- **Estimated notifications affected:** _[TBD]_ (potential instability)
- **Business lines affected:** _[TBD]_

## Root Cause

`release_trigger.yml` and `prerelease_trigger.yml` fire on release events. Publishing drafts via the GitHub API triggered `cd-pipeline.yml` unlike the GitHub UI, causing accidental production deploys.

## Resolution

Manual deployment to production at 1:55 MST to stabilize. Future work on branch `1721` will proceed only after deleting release-trigger and pre-release trigger workflows from the main branch.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Remove release-trigger and prerelease-trigger workflows from main | _[TBD]_ | _[TBD]_ | Planned |
| _[TBD]_ | | | |

## Lessons Learned

_[TBD: lessons learned text from incident report]_
