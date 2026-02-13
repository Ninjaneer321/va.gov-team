---
name: DRAFT Collaboration Cycle / Staging Review
about: DRAFT - do not use - Template for Staging Review
title: 'Staging Review for [Team Name, Product Name, Feature Name]'
labels: collaboration-cycle
assignees: ''

---

## About Staging Review 

The [Staging Review touchpoint](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/midpoint-review) is a synchronous half-hour discussion or an asynchronous review. The goal is to confirm your prototype or mockup aligns with existing VA.gov patterns and standards and to ensure your product is ready for successful research activities.

## Before the meeting
  
### :one: VFS team: schedule the meeting
- [ ] Review [Staging Review Guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review) to understand what this touchpoint involves.
- [ ] Schedule your Staging Review (with at least 4 business days lead time from now):
  - Open the <a href="https://calendly.com/collaboration-cycle/staging-review" target="_blank">Calendly Staging Review calendar (opens in a new tab)</a>
  - Select a date and time and click "Confirm"
  - Add your name and email
  - Click "Add Guests" and enter the email addresses for VFS team attendees
  - Click "Schedule Event"
- [ ] Add meeting date/time:
- [ ] If this product contains any [experimental design](https://design.va.gov/about/contributing-to-the-design-system/experimental-components-and-patterns), add the `experimental-design` label and schedule a meeting with Design System Council to present the research findings.

#### Governance Team actions
- [ ] Add link to Collaboration Cycle ticket
- [ ] Add link to Slack thread

### :two: VFS team: add links to artifacts at least 4 business days before the meeting
Link all artifacts in this section of the ticket **at least four business days** before the scheduled Staging Review. Please don't add artifacts in the comments section. Please do not make changes to the product or artifacts during the 4-day review period. 
 [Review guidance on Staging Review artifacts.](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Staging-review.1810137181.html#Stagingreview-Artifacts)

#### Required artifacts
- [ ] **Direct link or instructions on how to access the product**
  - The product should be available on an [approved staging environment](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-environment-guidance-for-vfs-teams). 
  - List screens, sections of screens, and/or user flows impacted by this work.
- [ ] **Generated PDF form** (when applicable)
  - A populated version of the form that will be submitted through the online tool 
- [ ] **Drupal or Staging URL for updated primary entry point:** the main way Veterans will access the tool through site navigation (not search)
  - If the primary entry point is not a page on VA.gov, include information about how to view it. Reach out to `@platform-governance-team-members` on Slack with any questions.
- [ ] **Test users and scenarios** (when applicable)
  - Store [test user information](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-accessible-example.md), passwords, and tasks in a .md file in the va.gov-team-sensitive repository. 
  - Make sure all user scenarios can be tested, i.e.: in-progress form, submitted form, new form.
- [ ] **List of known issues and bugs**
  - Include a list of known issues and/or bugs that might be flagged at Staging Review.
  - When possible, please include links to relevant tickets.
- [ ] **Link to Content and Information Architecture epic and Accessibility Digital Experience (ADE) team intake tickets**, if applicable.
- [ ] **Completed Accessibility testing:Staging Review artifact:** see [instructions and link to accessibility testing template](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review).
- [ ] **QA Artifacts:** artifacts that correspond to each of the [QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards).
  - [ ] Regression test plan
  - [ ] Test plan
  - [ ] Traceability Reports
    - [ ] Coverage for References
    - [ ] Summary (Defects) reports
  - [ ] E2E Test Participation
  - [ ] E2E Tests - Best Practice Adherence
  - [ ] E2E Test Execution Time
  - [ ] Unit Test Coverage
  - [ ] Unit Tests - Best Practice Adherence
  - [ ] Endpoint monitoring
  - [ ] Logging silent failures
  - [ ] PDF Form Version Validation
  - [ ] No Cross-App Dependencies
- [ ] Link your completed **[Engineering and Security Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/eng-sec-checklist.md)**

**If you skipped both Design Intent and Midpoint Review, additional required artifacts**
- [ ] Updated product outline
- [ ] User flow for the current state of the product (currently in production)
- [ ] User flow for the updated state of the product (reflects changes being reviewed)
[Guidance on user flows](https://depo-platform-documentation.scrollhelp.site/research-design/guidance-for-creating-user-flows)


#### Not required, but nice to have artifacts
- [ ] **Content source of truth:** link to Content and Information Architecture team Content feedback, such as a content source of truth.
- [ ] **Information Architecture spec:** link to Content and Information Architecture team IA feedback, such as an IA spec.

## During the meeting

[What to expect during a Staging Review.](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/midpoint-review#MidpointReview-WhathappensduringtheMidpointReview?)

## After the meeting

### VFS team actions
- [ ] Review the findings tickets and comment on the ticket if there are any questions or concerns
- [ ] Close individual findings tickets when the issue has been resolved or validated by your Product Owner. If a team has additional questions or needs Platform help validating the issue, please comment on the issue ticket.
- [ ] After launch, [request an accessibility audit from the VA 508 Office](https://depo-platform-documentation.scrollhelp.site/developer-docs/request-support-from-the-va-508-office#RequestsupportfromtheVA508office-AuditRequest). This is required even if no accessibility issues were found during the Staging Review.
  - [ ] Share ServiceNow ticket number here: ______
- [ ] Close ticket once Privacy, Security, Infrastructure Readiness Review has been completed, VA 508 Office audit is requested, and all other post-Staging actions are complete

### Governance Team actions
- [ ] Add link to recording

## :clipboard: Collaboration Cycle feedback
[Complete Collaboration Cycle feedback survey](https://ows.io/qs/o3jkwoez) at any point during your Collaboration Cycle process.
