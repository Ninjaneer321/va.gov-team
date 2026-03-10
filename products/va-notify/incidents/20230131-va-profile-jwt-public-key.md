# Incident Report: VA Profile JWT Public Key Not Updated in Production

**Date:** 2023-01-31  
**Severity:** Low  
**Status:** Resolved  
**Incident Commander:**  
**Authors:** Dave Kalbfled

---

## Summary

The VA Profile team deployed to their production environment and attempted to verify integration with VA Notify by making a POST request to VA Notify's endpoint. VA Notify returned a 401 response; the expected response was 200. This impacted testing only; no Veterans were impacted.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2023-01-18 | VA Profile e-mailed three public keys (including the new production key) to VA Notify |
| ~18:00 2023-01-31 | VA Profile deployed to production; 401 response identified during integration verification |
| 2023-02-01 | Production public key updated; issue resolved |

## Impact

- **Duration:** Identified ~6pm January 31st; resolved February 1st
- **Affected channels:** API (VA Profile integration)
- **Estimated notifications affected:** None — testing only; no Veterans were impacted
- **Business lines affected:** None

## Root Cause

POST requests from VA Profile to VA Notify use [JWTs](https://en.wikipedia.org/wiki/JSON_Web_Token) for authentication. VA Profile recently changed their JWT private keys used to sign requests. VA Notify updated the associated public key needed to verify this signature for non-production environments, but did not update the production public key, causing the 401 response.

VA Profile e-mailed three public keys, including the new production key, to VA Notify on January 18th, 2023. The two non-production keys appeared prominently as attachments in the responsible developer's Microsoft Outlook client, but the production key was only visible when clicking a small drop-down button below the obvious attachments.

## Resolution

[Vanotify-infra issue 506](https://github.com/department-of-veterans-affairs/vanotify-infra/issues/506) captures the resolution: update the production public key file.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Update production public key file | VA Notify engineering | 2023-02-01 | Resolved |

## Lessons Learned

- Microsoft Outlook attachments don't necessarily all show up as big rectangles at the beginning of the message.
- Updating only non-production keys should have prompted additional questions.
