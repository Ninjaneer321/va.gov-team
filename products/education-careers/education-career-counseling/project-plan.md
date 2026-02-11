# Project Plan

## Chapter 36

### Objective

This document is meant to serve as a planning doc for the work the IIR team is doing to enhance the Chapter 36 application experience by bringing this product into alignment with the modern VA digital standards, in sync with the latest paper format, and in compliance with the necessary monitoring, so that the team can address any real-time issues as Veterans use this product. IIR will track our work here so it is easy for the team to stay up to date with the progress that is being made. All tickets related to this project are…- [EPIC Link](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=2663136070&issue=department-of-veterans-affairs%7Cva-iir%7C1240).

### Problem Statement

There are many online VA forms, which the VA needs to keep in compliance and in sync with one another so that they are all uniform.  It is imperative that this form is brought up to current VA v3 component and accessibility standards to match the VA forms that are currently in compliance, and also for the benefit of the users.

### Veteran Goals

Veterans and their dependents seeking free educational and career guidance, planning, and resources 

### Risks
- Not be in sync with the stakeholders for their paper form version
- Not be up to par with accessibility requirements so that all users can have a seamless experience
- Create a UX that actual users are not happy with (not weed out ineligible applicants prior to submission if we don’t have sub-task format or decision tree)

### Success Metrics

(Use this section to document how you plan to measure the success of this project. What metrics do we care about? Will these metrics tie back to the problem statements? Do these metrics tie back to OCTO OKRs?)

### Project Priorities

(Use this section to document the project priorities. We can’t do everything at once so what are the most important priorities?)

- [X] Get UX mocks for new Interstitial page created
- [ ] Schedule Staging Review via Collab Cycle
- [X] create a click through prototype
- [X] Sync with CAIA office hrs/slack to seek feedback on Sub-Task format prior to collab cycle
- [X] Zero Silent Failure work (stages 2-5) to add claim in-progress emails, update confirmation email, and update the confirmation page. Silent failure flow
- [ ] Lock pre-filled bio data from editing to prevent claimants from changing their name, DOB, or ssn on their application. This info should be changed at the profile level
- [ ] Understand complete user experience on VA.gov and identify areas for improvement. Example: Prefill military history.
- [ ] PCPG Form Updates: Update the form to align to the latest version of the pdf and v3 design system components. VA.gov is generating the Nov 2015 pdf and the most recent version is Jun 2023. See full list of form pdf versions here.
  - [ ] Updated designs and flows have gone through midpoint review of the Collaboration Cycle. CAIA Intake ticket and Collab Cycle ticket.
- [ ] Determine if a product guide should be created for the Call Center before form updates are made or after. Currently no guide exists, and guides are typically created as part of the collaboration cycle when new forms are launched or updated.
- [ ] Implement redirects to complete form number change. It was changed from 28 to 25 in 2023 and then to 27 in 2024. Redirects were implemented for the change from 28 to 25, but not for the change from 25 to 27. Backend code also needs to be renamed.

### Engineering Project Plan
##### Note: This is a draft plan and may require additions when we finally complete Chapter 31 and move on to Chapter 36.

#### FE Non-dependent tickets that can be started or worked on in parallel by multiple engineers (following #1667)

- Set up initial Chapter 36 form app [FE] #1667
- Stage the new Chapter 36 form app [FE] #1835
- Create Introduction Page Container as rendered in the designs [FE] #1668
- Set up progress bar version with text [FE] #1778
- Create draft version of the data contract [FE] 1779
- [SPIKE] Claimant Info Chapter: How to add and use new info card design and discover dependencies [FE] #1669
- Claimant Info Chapter: Create Mailing Address and Contact Information pages [FE] #1670
- Claimant Info Chapter: Mailing Address Prefill [FE] #1982
- Claimant Info Chapter: Contact Information page [FE] #1981
- Claimant Info Chapter: Create Training and Tell Us Who You Are pages [FE] #1671
- Vet/SM Info Chapter: Create Vet/SM Info and Mailing Address pages [FE] #1672
- Vet/SM Info Chapter: Create Contact Information and Training pages [FE] #1674
- Military History Chapter: Create Dependent Spouse or Child Active Duty Status page [FE] #1675
- Military History Chapter: Create Dependent Spouse or Child, Current Service Period and Most Recent Service Period pages [FE] #1676
- Military History Chapter: Create Vet/ SM Active Duty Status, Current Service Period, and Most Recent Service Period pages [FE] #1677

#### BE Non-dependent tickets that can be started or worked on in parallel by multiple engineers

- Ch 36 Discovery [BE] #1859
  - May lead to additional stories
- Logging and statsd audit [BE] #1860
- Datadog Monitors and Dashboard audit [BE] #1861
- Add cutover notice feature toggle [BE] #1863



#### FE Dependent tickets that are connected to those above or to completeness of the form (multiple engineers if coordinated)

- Claimant Info and Vet/SM Info Chapters: Add conditionality and text fields to Training pages [FE]
  - Ian is changing the field from appearing on the same page as in the original designs to the field appearing on the next page if “Yes” is selected
- Claimant Info Chapter: Add conditionality to Tell Us Who You Are page [FE]
- Military History Chapter: Add conditionality to connect prior chapter pages to Military History Chapter pages [FE]
- Military History Chapter: Add conditionality to determine whether Current Service or Most Recent Service pages will display [FE]
- Set up save-in-progress functionality [FE] #1673
  - This might be dependent but probably best placed here.
- Design a cutover notice for the old site [UX] 
- Add cutover notice to the old site [FE] 
- Create submit and transformer functions [FE/BE Support] 
  - Although maybe not a hard dependency, this may be dependent on completing form page and conditionality tickets for fuller testing on staging.
  - Also may have cross dependency on #1481
- Create Confirmation Page Container as rendered in the designs [FE]
  - Unclear at the beginning if this has dependencies on our form page, submit, and schema tickets.
  - Let’s save this towards the end.
-  Create E2E tests for our Chapter 36 form [FE] 
  - Dependent on the form being complete.
- Create form config tests [FE] 
  - Dependent on the config being complete/mostly complete
- Create container tests [FE] 
  - Dependent on the Introduction and Confirmation pages being complete
- Create pages directory tests [FE] 
- Final testing review in prep for Staging Review [FE] 
  - Dependent on all previous unit testing tickets being complete
- Check Review Page [FE] 
  - Dependent on us completely the form page and conditionality tickets.
  - Should be done towards the end of main form completion.
- Delete old app from vets-website
- Delete old SIP data [BE] 

#### BE Dependent tickets that are connected to those above or to completeness of the form (multiple engineers if coordinated)

- Update endpoint to handle new form data [BE] #1862
  - Dependent on #1779
- Add validations for new form payload [BE] #1864
  - Dependent on #1779 and all FE validations implemented
- Implement PDF fill functionality [BE] #1865
  - Dependent on #1862 and #1864
- Create config for save-in-progress [BE] #1866
  - Dependent on having the form ID that will be sent from the FE for this configuration
- Test old and new form submissions [BE/FE] #1867
  - This testing should be conducted once all BE and FE changes are deployed to staging.
- Staging Review [BE] #1868
- Readiness Review [BE] #1869
- Implement VFS Library for interacting with VA Notify services #1881
  - Needs to be filled out, informed by Ch 31 work
  - Don’t think this necessarily needs to be done before launch, but does help with reassurance that we don’t have silent failures with sending emails.
Delete old form code from vets-api


### Launch strategy
1. Get a new permanent URL for the new version of the form
1. Maintain two entries in content-build: The old app pointing to the old URL, and the new pointing to the new
1. Add a feature flag, use it to wrap the first page of the old app
    - If toggled off, display the old form as usual
    - If toggled on, check for old form SIP data. If it exists, display the old form as usual, otherwise redirect the browser to the new form
1. On launch day, we can simply toggle the flag on. To rollback, we can toggle it off.
    - Folks accessing the old app will still be able to complete their form through visiting the form directly, or through the SIP draft card on My VA
1. When we are ready to remove the old app:
    - Remove the feature toggle
    - Delete the entry for the app in content-build’s registry
    - Delete the app in vets-website

### Resources

The way to manual submit a form (as was needed in the case of 1495: Ch. 31 Potential Zero Silent Failure: Issue sending "Action Needed" Email for VR&E)

