# On-Call Improvement Rollout Plan

The purpose of this document is to outline a rollout plan for each of the tool teams.

## KPIs
- Mean time to acknowledge (MTTA) is < 15 minutes
- True positive rate is >= 80%
- Mean time to resolve (MTTR) is based on contractual reqs:
  - 0 - 2 hours for critical impact issues
  - 2 - 4 hours for high impact issues
  - 4 - 8 hours for moderate/low impact issues
 
## Quick Setup Guide

Note: Before fully integrating these systems, it is a good idea to either fine-tune your monitors so your team doesn't get paged constantly. You can do this by:
1. Fine-tuning the thresholds so they're not noisy in the first place
2. Create a separate set of monitors with higher thresholds
3. Conditionally render PagerDuty integration on alerts but leave it off for warnings

### PagerDuty
1. **Ensure you have a Pager Duty service created for your team**
    1. Go to the [service directory page](https://ecc.pagerduty.com/service-directory?direction=asc&query=&team_ids=mine) to check
    2. If you don't see services, verify you're part of the `MHV on VA.gov` Pager Duty team
        1. Click on your profile/initials at the top right of the page.
        2. Click "Permissions and Teams"
        3. Verify you see "MHV on VA.gov" listed
   3. If you don't see your team or any services [reach out to platform support](https://dsva.slack.com/archives/CBU0KDSB1).
2. **Go to your tool's service page**
3. **Click "Integrations"**
    1. Verify you have Datadog set up as an integration
        1. If you do not, you may attempt to add it following [instructions here (scroll to "in PagerDuty" section)](https://www.pagerduty.com/docs/guides/datadog-integration-guide).
        2. If you don't have permissions to add the integration, or would prefer not to, reach out to your tech lead or Kevin Duensing for help.
    2. Verify you have Slack set up as an "Extention and Add-On"
        1. If you do not, you may attempt to add it following [instructions here](https://support.pagerduty.com/main/docs/slack-integration-guide).
        2. If you don't have permissions to add the extension, or would prefer not to, reach out to your tech lead or Kevin Duensing for help.
      
### Datadog
1. **Ensure your PagerDuty service is registered in the Datadog integration by [viewing the PagerDuty integration page](https://vagov.ddog-gov.com/integrations?search=pagerduty&integrationId=pagerduty) in Datadog.**
    1. If you see a message that says "You need the Integrations Read permission to view this content", you do not have permissions to set up integrations. Reach out to your tech lead or Kevin Duensing for help.
    2. Search your service by name in the left side of the integration modal window.
        1.  If found, note the service name for use later
        2.  If not found, add a new service with the "+ New" button
            1.  Enter a name you will remember
            2.  Copy the integration key generated in the Datadog integration from PagerDuty. You can find this in the integrations tab of your service in PagerDuty (click the cog wheel for information - the key should be present)
    3. Click "Save"
2. **You may now register specific montiors to your specific PagerDuty service by including `@my-service-name` in the alert message field in each monitor**

## Team Adoption Order
1. Medical Records
2. Secure Messaging
3. Medications
