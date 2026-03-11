# Incident Report: VEText Reverse Proxy Token Overwrite

**Date:** 2022-07-13  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2022-07-13, a portal deployment to Production caused Terraform to overwrite the SSM parameter store token used by the Public Endpoint reverse proxy for inbound message routing to VEText. This prevented messages from Veterans from being routed to VEText for live use cases. Reported by Rob from VEText. The issue was resolved the same minute it was reported by updating the token in parameter store.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| _[TBD]_ | Portal deployed to Production (Infra and Portal repos) |
| _[TBD]_ | Terraform updated SSM parameter store key to a new generated key |
| _[TBD]_ | Incident reported by Rob from VEText |
| _[TBD]_ | Token updated in parameter store; incident resolved |

## Impact

- **Duration:** Same day; resolved same minute as reported
- **Affected channels:** Public Endpoint - Reverse Proxy, inbound message routing to VEText
- **Estimated notifications affected:** 1 message stuck in queue with retries; final delivery outcome _[TBD]_
- **Business lines affected:** VEText live use cases

## Root Cause

Portal was deployed to Production (Infra and Portal repos). The update included Terraform changes to update the supporting ALBs in AWS. When deploying the Infra repo and running the updated Terraform scripts, the changes intended to prevent SSM parameter store keys from being overwritten were not included in the deployment. As a result, Terraform updated the key to a newly generated key, breaking inbound message routing.

## Resolution

Updated the token in parameter store to restore inbound message routing to VEText.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Review each other's deployment plans cross-team | _[TBD]_ | _[TBD]_ | Open |
| Manually validate tokens on Staging and Prod after deployments | _[TBD]_ | _[TBD]_ | Open |
| Rework deployment procedures for all repos with better release note detail | _[TBD]_ | _[TBD]_ | In Progress |

## Lessons Learned

1. Cross-team deployment plan reviews are needed since teams share repos. This ensures potential issues and areas requiring validation are called out before deployments.
2. Manually validate tokens on Staging and Prod until there is confidence the code will not overwrite existing tokens.
3. Rework deployment procedures for all repos to include better detail in release notes to fully understand what has been deployed to which environment. This will enable better change tracking across all environments for all teams and ensure only validated code from lower environments is promoted.
