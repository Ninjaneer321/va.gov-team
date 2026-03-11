# Incident Report: MPI Certificate Renewal Broke Staging Integration

**Date:** 2022-05-19 (noticed 2022-05-25)  
**Severity:** Medium  
**Status:** Resolved  
**Reporter:** Dave  
**Authors:** Dave

---

## Summary

MPI renewed their certificates used for the VA Notify API integration on 2022-05-19 without notifying the VA Notify team. The issue was not noticed until 2022-05-25. This caused a `RequestException` when querying for FHIR identifiers, blocked a unit test from passing in the API repo (preventing commits to `main`), and prevented Strike team and MHV from testing their notifications on Staging.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2022-05-19 | MPI renewed certificates in lower environments |
| 2022-05-25 | Issue noticed — unit test failing for MPI integration (ICN user flow) |
| 2022-05-25 | Dave reported the incident |
| 2022-06-02 | Resolution deployed; production certificates proactively updated same day |

## Impact

- **Duration:** ~1 week (2022-05-25 to 2022-06-02)
- **Affected channels:** API (Staging)
- **Estimated notifications affected:** Staging testing blocked; no production notifications affected
- **Business lines affected:** Strike team (10-10 EZ in-progress notification), MHV (push notifications)
- **Users impacted:** Strike team and MHV were unable to test their Staging notification flows

## Root Cause

MPI renewed their certificates used for the VA Notify API integration in the lower environments on 2022-05-19. The VA Notify team was not informed of this change, causing the MPI FHIR identifier query to throw a `RequestException` and a unit test to fail, blocking commits to `main` in the API repo.

## Resolution

The team reached out in the `#vsp-identity` Slack channel and was instructed to submit a [Lower Environment Trouble Ticket (LETT)](https://dvagov.sharepoint.com/sites/OITEPMOIAM/Lists/IAM%20Environment%20Tasks/active.aspx). A ticket was submitted [here](https://dvagov.sharepoint.com/sites/OITEPMOIAM/Lists/IAM%20Environment%20Tasks/Task/displayifs.aspx?List=2c2c3e9b%2D7e31%2D4548%2Db32b%2D6ab7b2cf7aee&ID=2807&Web=27f8cd5a%2D08fa%2D4fd9%2Da487%2D0c20f7da7076). The IAM team reached out via email, confirmed certificates were updated on 2022-05-19 in lower environments, and the VA Notify team updated the certificates and deployed. Production was scheduled to change on 2022-06-02, which the team proactively addressed the same day.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Added Kyle and Jesse to the VANotify inbox to monitor technical emails | Team | — | Done |
| Beverly had IAM team add the VA Notify Admin email group to their mailing list | Beverly | — | Done |
| Document MPI/SSOi/IAM certificate dependency as part of certificate tracking | Team | — | Done |
| Document that MPI, SSOi, and IAM are managed by the identity team for future escalation | Team | — | Done |

## Lessons Learned

1. Added Kyle and Jesse to the VANotify inbox to help monitor technical emails.
2. Beverly had IAM team add the VA Notify Admin email group to their mailing list.
3. We will document this dependency as part of our certificate tracking.
4. Now we know that MPI, SSOi, and IAM are all managed by the identity team and know where to go to escalate issues.
