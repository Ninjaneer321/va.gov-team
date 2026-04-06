# Release Plan: Claimant Details

Feature Toggle/flag:
`accredited_representative_portal_claimant_details` will control visibility of the Claimant Details feature, for Accredited Representative Portal users. This will be disabled in Production prior to release.

### Preparation
- [x] The following user flows have been tested
   - Find Claimant Search Results
      -    [x] Established POA
      -    [x] No POA / No results found
      -    [x] No POA / Pending request
   -  Claimant Overview Tab
      -    [x] User has established POA for a claimant
      -    [x] User has established POA for a claimant without an established ITF
      -    [x] User has established POA for a claimant with an expiring ITF
      -    [x] User has no established POA for a claimant
   -  Submission History Tab
      -    [x] No submissions currently exist for a claimant
      -    [x] Submissions do exist for a claimant
- [x] Any "launch blocking" findings from Team QA have been addressed.
- [x] Datadog monitoring is set up to monitor error rates, latency, and evaulate the Claimant Details endpoint
- [ ] Contact Center Review has been submitted
   - [ ] Note: Will be submitted right after release

Any other issues or requirements that should be addressed prior to rollout?

### Go/No Go meeting April 6th, 2026
Synchronous Go/No Go (Placeholder)

- [x] Review the release plan with your team.
- [x] Review the plan with your OCTO representative.
- [x] Finalize the release date

**Verdict: Go**

## Release Details April 6th, 2026

- [x] Enable in Production to 100% of users
- [ ] Confirm the release to Production, with a test user
- [ ] Communicate release to ARP pilot users via Teams/Email
- [ ] Communicate release to VBA and VSO liaison office

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the feature toggle `accredited_representative_portal_claimant_details` 
   1. Submit a PR
2. Alert the team in [#benefits-accredited-rep-crew](https://dsva.slack.com/archives/C05SUUM4GAW) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates
3. Create a ticket to document ( [Ref.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems#instructions-for-creating-a-new-postmortem) for current Postmortem process):
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***

## Post Launch Metrics

### 1-Week Results Post-Launch 


### 1-Month Results Post Launch

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  


## Post-Launch Questions

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
