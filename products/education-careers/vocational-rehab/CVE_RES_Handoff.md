# Chapter 31 Handoff Doc - DRAFT

Created by: Core Veteran Experiences (CVE) Team

Created for: Readiness & Employment System (RES) Team

Handoff Date: February 2026


### Product Overview

- [Link to staging](https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/introduction)

  - Everything from the /introduction page through the /confirmation page

  - Content team is responsible for informational pages about Ch. 31

- [Link to physical form](https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf)

  - Expired 8/31, a new one is coming

- Link to Figma prod designs - coming soon

- [Test Users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

  - Must be LOA 3 to access and fill out the form

- BE code:

  - [New VRE Module](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/vre)

  - Still being migrated/cleaned up:

    - [old controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/veteran_readiness_employment_claims_controller.rb) will be replaced by [module controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vre/app/controllers/vre/v0/claims_controller.rb)

    - [old RES service library](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/res) will be replaced by [module services](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/vre/app/services/vre)

    - [old monitor library](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/vre) will be removed (already replaced by [module monitor](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vre/lib/vre/vre_monitor.rb))

- [FE Code in vets-website](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vre)


### CVE Points of Contact

|                             |                  |
| --------------------------- | ---------------- |
| David Conlon                | VA Product Owner |
| Pete Egan                   | Program Manager  |
| Megan Commons               | Product Manager  |
| Adam King & Kyle Henson     | BE Engineers     |
| John Rodriguez & Nick Sayre | FE Engineers     |
| Raquel Eisele               | UX Designer      |


### What has the CVE Team done since they’ve been the owners?

- We updated the form to use new design components to meet [VA.gov](http://va.gov) standards

  - Link to current prod designs - coming soon

- We integrated with VFS Library to monitor failure emails being undeliverable

  - Context: if a submission fails all of the retry jobs, an email is sent to the user that there was an error and they need to fill out the physical form and submit it by mail. VFS Library can tell us if that failure email was sent to an undeliverable email address meaning the user was never informed of the failure. If that’s the case, that is a silent failure and we would need to figure out how to contact the individual to submit.

- Made adjustments to FE based on reported issues:

  - Added LOA 1 user alerts - users who were signed in but NOT verified didn’t see a link to the form or an alert telling them they need to verify.

  - Removed DRAFT cards on My VA and introduction page after submission (the cause for user-driven submission spike) - submitted forms were stuck in a queue that incorrectly told users their forms were still in draft when in reality they were submitted.


### Initiatives in Flight: 

- Resolving a bug where users with no middle names are seeing a blank page when they click the apply link on the /introduction page. Ticket here: <https://github.com/department-of-veterans-affairs/va-iir/issues/2367> 

  - Actively working on a resolution. Will want to keep a close eye on reports.

  - Need to research if anything else could be causing this bug or if it truly is just the middle name culprit.

- Refactoring the BE so it is easier to make future updates

  - As Rails applications grow, the conventions which make them easy to reason about become a hindrance

  - It’s difficult to understand what parts of the codebase are related to what functionality

  - We refactored the BE code out of the Rails Monolith and into a [Rails Engine](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/vre) in /modules

  - This makes the boundaries of the VRE application clearer

- Updating logging & monitoring in Datadog to better identify issues and collect analytics

  - Finishing the BE refactor will make reporting easier but we have added logging so we can see:

    - Submissions by service

    - Duplicate submissions within 24 hrs

    - Total submissions

    - VFS Library undeliverable logging

    - We need to add all of these to the Datadog Dashboard for streamlined reporting. Also revisit current monitors and update as needed. Ticket here: <https://github.com/department-of-veterans-affairs/va-iir/issues/2366> 

- Updates to prepare for new physical 31 form

  - Minimal updates to actual form pages but coordinating with the Content team to ensure they have their updates on informational pages ready to go.

  - Link to designs - coming soon

  - Link to Content ticket - coming soon

  - No dev work has happened on this yet. UX only.

- RES Maintenance Windows

  - February 28th is the first data migration RES is doing. Pager Duty will already be set up to not allow users to access the form during this time. The exact window is 7 am EST - 10 PM EST.

- Operational Maintenance

  - Investigating failed jobs

    - One ticket associated: <https://github.com/department-of-veterans-affairs/va-iir/issues/2242> 

  - Increasing monitoring coverage for FE

    - One ticket associated: <https://github.com/department-of-veterans-affairs/va-iir/issues/2324> 


### Potential Future Initiatives:

#### Confirmation Page

- Right now it doesn’t exactly match the VA design system template - we don’t link a PDF to the user to download. It could be good to figure out how to do that.

- One ticket associated: <https://github.com/department-of-veterans-affairs/va-iir/issues/2258> 

- Update content on the confirmation page to better set post submission expectations for users - shouldn’t be funneling people to My VA if there isn’t a status there. How long will it take for users to hear back?


#### RES downtime maintenance windows

- RES should consider setting up a specific service in Pager Duty for RES specifically - Ch. 31 will be a consumer of that service and RES can directly manage their maintenance windows.


#### Sending RES + VBMS applications

- Why does VA.gov send applications to two different places? It’s proved difficult having two sources of truth. Is there a way to only send things to RES or only VBMS? 


#### Storing RES submission ID within the VeteranReadinessEmploymentClaim Model

- When a submission is made to RES from the API, we should be provided a unique identifier as a part of the response, which we save in our database.  This would assist in tracking the application as it crosses API boundaries


#### Storing VBMS Document ID in VeteranReadinessEmploymentClaim Model

- We currently do save the document ID provided by VBMS, when we successfully submit an application there.  

- That data is stored within the form attribute, which is an encrypted field

- This makes it impossible to query on a VRE model with a given document id

- Creating a new column for the VBMS document ID, outside of the encrypted form, could provide similar utility as storing the RES Submission ID


#### Application Status Messages 

- Right now, the only status card on My VA is DRAFT, meaning they started an application but never submitted it. Once a user submits, they won’t be able to see a status at all. If they were to see different status messages, it would help reduce user-driven duplicates even more.

- RES should consider sending application status info into [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake) (this is where other forms send statuses and what populates the My VA status cards automatically.

- Some technical information:

  - [FormsAndApplications](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/benefit-application-drafts/FormsAndApplications.jsx#L23) component is used in the “Dashboard” ie (My VA) on [VA.gov](http://va.gov).  This component displays the current status of submitted applications.

  - The component calls the [getForms function](https://github.com/department-of-veterans-affairs/vets-website/blob/31fd014bf49e5ed8baac79f2341b314733798aa4/src/applications/personalization/dashboard/actions/form-status.js#L14-L68) which makes a request to the API - the [SubmissionStatusesController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/my_va/submission_statuses_controller.rb). 

  - This controller builds a JSON object which is then used to render the cards for the user on the website

  - The simplest solution would be to hook applications made to RES into the aforementioned Benefits Intake API.  That way, Ch31 application statuses could be retrieved in the same way as current applications

  - Another possibility is to create a new endpoint on the API which is called by the RES service, in order to update application status


#### Efolder API replacement 

- The efolder API is currently used to upload the completed PDF form to VBMS

- Apparently the efolder API is being deprecated and this process needs to move over to the [Claims Evidence API](https://claimevidence-api-dev.dev.bip.va.gov/api/v1/rest/swagger-ui.html).


### Resources/Documentation:

#### Product

- [Github documentation folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/vocational-rehab)

  - Most of this is from prior teams

- [Collab Cycle Tickets](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1254) from the design updates

- Data Analytics

  - Usage |[ Domo](https://va-gov.domo.com/page/447193050) (filter by Form 28-1900)

  - Submissions, Latency & Error Rate |[ Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/94e-cku-2aq/benefits-veteran-readiness-employment-claims?fromUser=true\&refresh_mode=sliding\&from_ts=1766620687999\&to_ts=1766621587999\&live=true)

  - CSAT |[ Domo](https://va-gov.domo.com/page/1545882322?userId=1451339229) (filter by URL containing 28-1900)

  - Can request qualitative data from feedback surveys or help desk calls via Contact Center Team [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=newworld2616%2C+ATMiddleton\&labels=VSP-contact-center%2Ccc-data-request\&projects=\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request)

  - Not a permanent home but this is where we have been reporting on analytics monthly: [Slack Canvas in our team’s public Slack channel](https://dsva.slack.com/docs/T03FECE8V/F09MV7NKP7W)


#### Design

- In production documentation/Figma - coming soon

- Updates for when new form drops - coming soon


#### Engineering

- BE processes - what is getting sent where? 

  - Should we update [this mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715981718612/f40f764f3e9675c932f49eed6c9644fdc5a71372)?

  - Different mural: <https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727286761015/c720da157691aad3bd756fcd75f1e7ec6099cef7> 

- FE Context

  - Maybe write a blurb about our app replacement approach and why it did/didn’t work?

  - What did we do that now enables us to use feature flags? Is it still only feature flags by page?

- [Endpoint Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/vre-form-28-1900.md)

  - Slack channel where alerts come in: [#benefits-ch31-and-36-notifications](https://dsva.slack.com/archives/C08KE2KJHFE)

    - Ch. 31 and 36 are combined in one channel. Will leave it up to RES if they want to move 31 to its own channel. Will need to update the playbook.

    - Playbook needs some updating now that we’ve added additional logging.

- [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/94e-cku-2aq/benefits-veteran-readiness-employment-claims?fromUser=false\&refresh_mode=sliding\&from_ts=1764714281168\&to_ts=1764887081168\&live=true)

  - Needs some updating with the new logging and BE refactor work - want to add more widgets.
