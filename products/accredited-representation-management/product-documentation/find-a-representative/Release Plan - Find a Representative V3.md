# Release Plan: Find a Representative V3

Feature Toggle/flag:
`find_a_representative_enabled` will control visibility of the VSO Search Filter feature, for Find a Represenatative. This will be disabled in Production prior to release.

### Preparation
- [ ] Contact Center Review has been submitted
- [ ] The following user flows have been tested
   - Combo-box Functionality
      -    [ ] Combo box is present when "Accredited VSO respresentative" radio button is selected
      -    [ ] Combo box is hidden when "Accredited attorney" or "Accredited claims agent" is selected
      -    [ ] Combo box filters out any `zzz` VSOs
      -    [ ] Combo box allows you to type ahead & will begin filtering, as well as click on the drop down to see all VSOs
      -    [ ] `combo box will clear when search button is clicked if a VSO selection has not been made`
      -    [ ] Combo box searching shows expected results for search scenarios
   -  Additional Figma Designs Implemented
      -    [ ] Content above the sign-in block matches the figma
      -    [ ] Updated Note and hyperlinked `Learn About` section are showing as expected just below the radio buttons
      -    [ ] Use my location button is showing as expected
      -    [ ] Search results note is appearing and accurate; e.g. `"Showing 15 of 25  results for 'accredited VSO represenattive", "Arizona Department of Veterans Services" within "50 miles" of "New York, New York 10001" sorted by "Distance[closest to furthers"`
      -    [ ] Ensure `sort by` button was removed and you can now sort just by updating that drop down
      -    [ ] Ensure the Name/Mileage on the contact cards align with figma designs
      -    [ ] Ensure the icons align with the figma designs.
   - Accessability Testing
      -    [ ] Accessability has been tested and any findings have been documented.
- [ ] Any "launch blocking" findings from Team QA have been addressed.
- [ ] The feature flag `find_a_representative_enabled` has been set to `Off` 
- [ ] Datadog monitoring is set up to track submission attempts, successes and errors.

Any other issues or requirements that should be addressed prior to rollout?



### Go/No Go meeting on March 26, 2026
Synchronous Go/No Go (Placeholder)

- [ ] review the release plan with your team.
- [ ] review the plan with your OCTO representative.
- [ ] Finalize the release date

**Verdict: TBD**

## Release Details (April 1, 2026)

- [ ] Enable in Production to 100% of users
- [ ] Confirm the release to Production, with a test user
- [ ] Communicate release to ARP pilot users via Teams/Email

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the feature toggle `find_a_representative_enabled` 
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
Intent to File [Datadog Dashboard Widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/rep-claim-submissions/release-plan-intent-to-file.md)
<img width="1281" height="957" alt="Screenshot 2026-02-03 at 8 21 43 AM" src="https://github.com/user-attachments/assets/e03e44ce-686e-41a8-8cec-bd9a8f615b87" />
<img width="1270" height="910" alt="Screenshot 2026-02-03 at 8 21 57 AM" src="https://github.com/user-attachments/assets/b22e15d8-b3a4-4868-8858-af831ebe80ea" />


### 1-Month Results Post Launch

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  


## Post-Launch Questions

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
