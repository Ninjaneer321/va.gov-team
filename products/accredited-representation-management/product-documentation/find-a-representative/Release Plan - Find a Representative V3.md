# Release Plan: Find a Representative V3

Feature Toggle/flag:
`find_a_representative_enabled` will control visibility of the VSO Search Filter feature, for Find a Represenatative. This will be disabled in Production prior to release.

### Preparation
- [X] Contact Center Review has been submitted
- [X] The following user flows have been tested
   - Combo-box Functionality
      -    [X] Combo box is present when "Accredited VSO respresentative" radio button is selected
      -    [X] Combo box is hidden when "Accredited attorney" or "Accredited claims agent" is selected
      -    [X] Combo box filters out any `zzz` VSOs
      -    [X] Combo box allows you to type ahead & will begin filtering, as well as click on the drop down to see all VSOs
      -    [X] ~~`combo box will clear when search button is clicked if a VSO selection has not been made`~~
               - Due to issues with the components from the design system we will not be able to clear out the combo box as originally planned.
      -    [X] Combo box searching shows expected results for search scenarios
   -  Additional Figma Designs Implemented
      -    [X] Content above the sign-in block matches the figma
      -    [X] Updated Note and hyperlinked `Learn About` section are showing as expected just below the radio buttons
      -    [X] Use my location button is showing as expected
      -    [X] Search results note is appearing and accurate; e.g. `"Showing 15 of 25  results for 'accredited VSO represenative", "Arizona Department of Veterans Services" within "50 miles" of "New York, New York 10001" sorted by "Distance[closest to furthers"`
      -    [X] Ensure `sort by` button was removed and you can now sort just by updating that drop down
      -    [X] Ensure the Name/Mileage on the contact cards align with figma designs
      -    [X] Ensure the icons align with the figma designs.
   - Accessability Testing
      -    [X] Accessability has been tested and any findings have been documented.
- [X] Any "launch blocking" findings from Team QA have been addressed.
- [X] The feature flag `find_a_representative_enabled` has been set to `Off` 
- [X] Datadog monitoring is set up to track errors for combo box and search.
- [ ] Google Analytics is set up to track specific search parameters. -- **_Actively working on this with the Analytics team.  GA tracking is already set up but ~1 month out from DOMO_**

Any other issues or requirements that should be addressed prior to rollout?



### Go/No Go meeting on March 30, 2026
Synchronous Go/No Go (Placeholder)

- [X] review the release plan with your team.
- [X] review the plan with your OCTO representative.
- [X] Finalize the release date

**Verdict: Go for release on Wednesday 4/1/26 as an initial test**

## Release Details (April 6, 2026 -- Full Permanent Release)

- [X] Enable in Production to 100% of users on 4/1 and monitor for any errors on 4/2 & again on 4/6.  If everything looks good with no errors we will send out the BLUF statement on Monday 4/6.
- [X] Confirm the release to Production, with a test user
- [X] Mia to send out BLUF Statement on 4/6.
- [X] Communicate release to VBA and VSO liason office plus DAV leadership on 4/6.

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



### 1-Month Results Post Launch

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  


## Post-Launch Questions

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
