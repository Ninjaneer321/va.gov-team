# Incident Report: VEText Reverse Proxy SSM Token Overwrite (Check-in Experience)

**Date:** 2022-06-22 (reported 2022-06-27)  
**Severity:** _[TBD]_  
**Status:** Resolved  
**Incident Commander:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

On 2022-06-22, a deployment to Production caused Terraform to overwrite the SSM parameter store token used by the Public Endpoint reverse proxy for inbound message routing to VEText. As a result, the Check-in Experience team was not receiving responses to their texts because VEText was not receiving the messages. The issue was reported by Shawn Adams from Check-in Experience on 2022-06-27 after being discovered on Staging. If VEText had set up a phone number on Production right after the code was deployed, that would have failed as well.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2022-06-22 | Code deployed to Production; Terraform code to prevent SSM token overwrite was not included |
| 2022-06-22 | SSM parameter store token overwritten, breaking inbound VEText message routing on both Staging and Production |
| 2022-06-27 | Incident reported by Shawn Adams from Check-in Experience (discovered on Staging) |
| 2022-06-27 | Token updated in SSM parameter store; fix code merged; incident resolved (~2 hours after report) |

## Impact

- **Duration:** 2022-06-22 to 2022-06-27; resolved ~2 hours after being reported
- **Affected channels:** Public Endpoint - Reverse Proxy, inbound message routing to VEText
- **Estimated notifications affected:** Check-in Experience team not receiving responses to texts; potential Production failures if VEText had set up a phone number post-deploy
- **Business lines affected:** Check-in Experience (VEText)
- **Environments affected:** Both Staging and Production

## Root Cause

Terraform code intended to prevent SSM parameter store tokens from being overwritten was not merged in prior to the planned deployment to Production on 2022-06-22. As a result, Terraform overwrote the token during the deployment, breaking inbound message routing to VEText.

## Resolution

Updated the token in SSM parameter store and merged in the missing Terraform code to prevent future overwrites.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Follow the deployment process to avoid merging issues | _[TBD]_ | _[TBD]_ | Resolved |
| Validate tokens post-deployment on Staging and Production | _[TBD]_ | _[TBD]_ | Resolved |

## Lessons Learned

1. Follow the deployment process so merging issues do not occur.
2. Validate tokens and critical configuration post-deployment on all environments.
