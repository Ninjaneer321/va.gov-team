# Release Plan: Individual Acceptance of Representation Requests

Feature Toggles/flags:
- 'accredited_representative_portal_individual_accept' for the feature, both AAR (vet-facing) and ARP (rep-facing)
- 'accredited_representative_portal_individual_accept_backend' on the ARP side is needed to allow us to conduct a staged/incremental release
  
### Preparation
- [ ] Regression testing has been conducted -- since we're migrating user permissions, even if the permission **level** doesn't change, references/calls will
- [ ] Team QA (end-to-end testing) has been conducted in Staging
- [ ] Exemption from Staging Review has been confirmed (OR Staging Review has been conducted)
- [ ] Any "launch blocking" findings from Team QA have been addressed
- [ ] Contact Center Review has been submitted

Any other issues or requirements that should be addressed prior to rollout?

### Go/No Go meeting -- tentatively April 6th, 2026
Synchronous Go/No Go

- [ ] Review the release plan with the team
- [ ] Review the plan with the OCTO product owner
- [ ] Finalize the release date

**Verdict:**

## Release Details

- [ ] Code fully merged in Production
- [ ] Conduct smoke test with friendly user (in org using the new permission level) with live support from Engineering + Engagement
- [ ] Enable in Production to fraction of users spanning different permission levels
- [ ] Enable for 100% of users in Production


***

## Rollback Process

While we have conducted regression testing to verify that the feature is entirely behind its flag and does not introduce issues to existing functionality, unanticipated issues can occur.

**The rollback process is:**
1. Turn off the feature toggles 'accredited_representative_portal_individual_accept' and 'accredited_representative_portal_individual_accept_backend'
   1. Submit a PR
2. Alert the team in [#benefits-accredited-rep-crew](https://dsva.slack.com/archives/C05SUUM4GAW) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback, and users / submissions affected if any
   2. Tag relevant teammates
3. Create a ticket to document ( [Ref.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems#instructions-for-creating-a-new-postmortem) for current Postmortem process):
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next-step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***

## Post Launch Metrics

### 1-Week Results Post-Launch 
- ARP users from newly-enabled orgs
- 21-22 requests submitted to newly-enabled orgs

### 1-Month Results Post Launch
- Number of veteran users entering AAR on the org-first pathway -- see https://github.com/department-of-veterans-affairs/va.gov-team/issues/135460

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  


## Post-Launch Questions

1. **What qualitative feedback have you gathered from users or other stakeholders?** 
2. **Which assumptions you listed in your product outline were/were not validated?**
3. **How might your product evolve now or in the future based on these results?** 
4. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
