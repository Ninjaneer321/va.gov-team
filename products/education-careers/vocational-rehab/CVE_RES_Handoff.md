# Chapter 31 Handoff Doc

Created by: Core Veteran Experiences (CVE) Team

Created for: Readiness & Employment System (RES) Team

Handoff Date: February 2026


### Product Overview

- [Link to staging](https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/introduction)

  - Everything from the `/introduction` page through the `/confirmation` page

  - Content team is responsible for informational pages about Ch. 31

- [Link to physical form](https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf)

  - Expired 8/31, a new one is coming

- [Link to Figma prod designs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/vocational-rehab/design/Chapter%2031%20Documentation.md)

- [Test Users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

  - Must be LOA 3 to access and fill out the form

- BE code:
  While the front-end developers were updating the form to newest standards and for parity with the paper form, the back end developers set about migrating the code housed within the `vets-api` monolith into a [New VRE Module](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/vre).  This is a suggested best practice for benefits teams.  While most of the migration is complete, there are still a few things to be addressed:

    - The [current controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/veteran_readiness_employment_claims_controller.rb) lives within the monolith and should be replaced by [module controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vre/app/controllers/vre/v0/claims_controller.rb).  These controllers are roughly identical, but should be double-checked.  The front-end client is currently pointed at the monolith API endpoint, so a change will need to be made in `vets-website` as well

    - The [RES service library](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/res) should be replaced by [module services](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/vre/app/services/vre).  It is being called [here](https://github.com/department-of-veterans-affairs/vets-api/blob/2b8a20e589c5e7d730744d470c067293ad3dec81/app/models/saved_claim/veteran_readiness_employment_claim.rb#L228).  Again, these service objects are roughly identical but should be double-checked
 
    - The [Claim Model](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim/veteran_readiness_employment_claim.rb) needs to be replaced with the [VREVeteranReadinessEmploymentClaim](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vre/app/models/vre/vre_veteran_readiness_employment_claim.rb).  This could be somewhat tricky.  See [This spike](https://github.com/department-of-veterans-affairs/va-iir/issues/2011) and the [linked ticket](https://github.com/department-of-veterans-affairs/va-iir/issues/2391)


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

  - [Link to current prod designs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/vocational-rehab/design/Chapter%2031%20Documentation.md)

- We integrated with VFS Library to monitor failure emails being undeliverable

  - Context: if a submission fails all of the retry jobs, an email is sent to the user that there was an error and they need to fill out the physical form and submit it by mail. VFS Library can tell us if that failure email was sent to an undeliverable email address meaning the user was never informed of the failure. If that’s the case, that is a silent failure and we would need to figure out how to contact the individual to submit.

- Made adjustments to FE based on reported issues:

  - Added LOA 1 user alerts - users who were signed in but NOT verified didn’t see a link to the form or an alert telling them they need to verify.

  - Removed DRAFT cards on My VA and introduction page after submission (the cause for user-driven duplicate submission spike) - submitted forms were stuck in a status that incorrectly told users their forms were still in draft when in reality they were submitted.
    
  - If a user didn’t have a middle name, prefill would break and the user wouldn’t be able to access the form - would see a “blank” page when clicking apply on the introduction page. We resolved the issue by changing where the prefill data was coming from. However, we identified some follow up investigation that should be done to look at profile data for some instances and SIP data in others. Link to ticket, do not have a plan to pick up: https://github.com/department-of-veterans-affairs/va-iir/issues/2369

- RES Maintenance Windows

  - February 28th is the first data migration RES is doing. PagerDuty is set up to not allow users to access the form during this time. The exact window is 7 am EST - 10 PM EST. No other maintenance windows have been set.
 
- Blank PDFs being saved in VBMS
  
  - There was a bug that was causing the old Chapter 31 form (2019 version) to be saved in VBMS. Because the structure of the data was mapped to the most recent form, the old form couldn’t be filled out and was saved. We resolved this and the old form is no longer being referenced. We went back and re-uploaded the current Chapter 31 form to VBMS for the applications that were blank - we didn’t replace blank forms, we added new ones. Still in remediation.

### Initiatives in Flight: 

- Passing the ICN for submissions to RES
  
  - This work is currently behind a feature flag. We have a ticket to QA in Staging and ensure RES is receiving it as expected next sprint: https://github.com/department-of-veterans-affairs/va-iir/issues/2271  

- [Refactoring the BE](https://github.com/department-of-veterans-affairs/va-iir/issues/2070) so it is easier to make future updates

  - As Rails applications grow, the conventions which make them easy to reason about become a hindrance

  - It’s difficult to understand what parts of the codebase are related to what functionality

  - We refactored the BE code out of the Rails Monolith and into a [Rails Engine](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/vre) in /modules

  - This makes the boundaries of the VRE application clearer
    
  - Because of the recent Ch. 31 issues, we have stopped development on this initiative. RES can prioritize as they see fit.

- Updating logging & monitoring in Datadog to better identify issues and collect analytics

  - We have added logging so we can see:

    - Submissions by service

    - Duplicate submissions within 24 hrs

    - Total submissions

    - VFS Library undeliverable logging

    - We are planning to add all of these to the Datadog Dashboard for streamlined reporting next sprint. Also revisit current monitors and update as needed. Ticket here: <https://github.com/department-of-veterans-affairs/va-iir/issues/2366>

- UX updates to prepare for new physical 31 form

  - Minimal updates to actual form pages but coordinating with the Content Team to ensure they have their updates on informational pages ready to go.

  - [Link to figma designs](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2608-14274&t=Yh6Ydlk9kueURf2p-1) 

  - [Link to closed Content ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122016) 

  - No dev work has happened on this yet. UX only.

- Operational Maintenance

  - Investigating failed jobs

    - One ticket associated, do not have a plan to pick up: <https://github.com/department-of-veterans-affairs/va-iir/issues/2242> 

  - Increasing monitoring coverage for FE

    - One ticket associated, do not have a plan to pick up: <https://github.com/department-of-veterans-affairs/va-iir/issues/2324> 


### Potential Future Initiatives:

#### VBMS PDF Document ID

- During the blank PDF issue, we learned that the `vbms_document_series_ref_id` that VA.gov gets from VBMS and sends to RES, is not actually the PDF document ID. A series ID can have multiple document versions associated to it. The version ID is what VBMS can use to search for a specific file in their database.

- There should be an initiative to align with VBMS and RES to capture the correct unique identifier so when inevitable issues arise, there is a shared identifier to work with.
  

#### Storing RES submission ID within the VeteranReadinessEmploymentClaim Model

- When a submission is made to RES from the API, we should be provided a unique identifier as a part of the response, which we save in our database.  This would assist in tracking the application as it crosses API boundaries
  

#### Storing VBMS Document ID in VeteranReadinessEmploymentClaim Model

- We currently do save the document ID provided by VBMS, when we successfully submit an application there.  

- That data is stored within the form attribute, which is an encrypted field

- This makes it impossible to query on a VRE model with a given document id

- Creating a new column for the VBMS document ID, outside of the encrypted form, could provide similar utility as storing the RES Submission ID


#### Efolder API replacement 

- The efolder API is currently used to upload the completed PDF form to VBMS, using the [connect_vbms RubyGem](https://github.com/18F/connect_vbms) which has been deprecated since 2017.

- The efolder API is being deprecated and this process needs to move over to the [Claims Evidence API](https://claimevidence-api-dev.dev.bip.va.gov/api/v1/rest/swagger-ui.html).

- It is strongly recommended that, once developers have familiarized themselves with the codebase, they undertake this migration.  The new API is thoroughly documented, follows REST design patterns, offers expanded functionality.

- It is possible that, after moving from VBMS eFolder API to the Claims Evidence API, the backend code could be cleaned up significantly by removing the need for a [fallback mechanism](https://github.com/department-of-veterans-affairs/vets-api/blob/2b8a20e589c5e7d730744d470c067293ad3dec81/app/models/saved_claim/veteran_readiness_employment_claim.rb#L193) to upload the claim to the BenefitsIntake Lighthouse API 
  

#### Confirmation Page

- Right now it doesn’t exactly match the VA design system template - we don’t link a PDF to the user to download. It could be good to figure out how to do that.

- One ticket associated, do not have a plan to pick up: <https://github.com/department-of-veterans-affairs/va-iir/issues/2258> 

- Update content on the confirmation page to better set post submission expectations for users - shouldn’t be funneling people to My VA if there isn’t a status there. How long will it take for users to hear back?


#### RES downtime maintenance windows

- RES should consider setting up a specific service in Pager Duty for RES specifically - Ch. 31 will be a consumer of that service and RES can directly manage their maintenance windows.


#### Sending RES + VBMS applications

- Why does VA.gov send applications to two different places? It’s proved difficult having two sources of truth. Is there a way to only send things to RES or only VBMS? 


#### Application Status Messages 

- Right now, the only status card on My VA is DRAFT, meaning they started an application but never submitted it. Once a user submits, they won’t be able to see a status at all. If they were to see different status messages, it would help reduce user-driven duplicates even more.

- RES should consider sending application status info into [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake) (this is where other forms send statuses and what populates the My VA status cards automatically.

- Some technical information:

  - [FormsAndApplications](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/benefit-application-drafts/FormsAndApplications.jsx#L23) component is used in the “Dashboard” ie (My VA) on [VA.gov](http://va.gov).  This component displays the current status of submitted applications.

  - The component calls the [getForms function](https://github.com/department-of-veterans-affairs/vets-website/blob/31fd014bf49e5ed8baac79f2341b314733798aa4/src/applications/personalization/dashboard/actions/form-status.js#L14-L68) which makes a request to the API - the [SubmissionStatusesController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/my_va/submission_statuses_controller.rb). 

  - This controller builds a JSON object which is then used to render the cards for the user on the website

  - The simplest solution would be to hook applications made to RES into the aforementioned Benefits Intake API.  That way, Ch31 application statuses could be retrieved in the same way as current applications

  - Another possibility is to create a new endpoint on the API which is called by the RES service, in order to update application status

### Resources/Documentation:

#### Product

- [Github documentation folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/vocational-rehab)

  - Most of this is from prior teams

- [Collab Cycle Tickets](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1254) from the design updates

- Data Analytics

  - Usage | [Domo](https://va-gov.domo.com/page/447193050) (filter by Form 28-1900)

  - Submissions, Latency & Error Rate | [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/94e-cku-2aq/benefits-veteran-readiness-employment-claims?fromUser=true\&refresh_mode=sliding\&from_ts=1766620687999\&to_ts=1766621587999\&live=true)

  - CSAT | [Domo](https://va-gov.domo.com/page/1545882322?userId=1451339229) (filter by URL containing 28-1900)

  - Can request qualitative data from feedback surveys or help desk calls via Contact Center Team [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=newworld2616%2C+ATMiddleton\&labels=VSP-contact-center%2Ccc-data-request\&projects=\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request)

  - Not a permanent home but this is where we have been reporting on analytics monthly: [Slack Canvas in our team’s public Slack channel](https://dsva.slack.com/docs/T03FECE8V/F09MV7NKP7W)


#### Design

- [Link to production designs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/vocational-rehab/design/Chapter%2031%20Documentation.md)

- [Updates for when new form drops](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2608-14274&p=f&t=NBCQWv8al4uV1oa7-0)


#### Engineering

- Backend Processes 

  - [Code Path Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/vocational-rehab/engineering/backend_logic.md)
    
  - [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715981718612/f40f764f3e9675c932f49eed6c9644fdc5a71372) owned by Sanja Bajovic
    
  - A different [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727286761015/c720da157691aad3bd756fcd75f1e7ec6099cef7)

- Frontend

    - Forms are constructed based upon the VA Forms Library (aka Forms System)

      - [Location within Platform](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system)

      - Forms System [Documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)

        - The documentation is still in the process of being edited, with a number of portions out-of-date (see note [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-getting-started-with-the-forms-li)). This can lead to confusion or misunderstanding of the potential of the framework given that it’s unclear which portions are still valid and which are not.

        - Best to rely on examples with [Simple Forms](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/simple-forms) (particularly [20-10207](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/simple-forms/20-10207) and [20-10206](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/simple-forms/20-10206)), [Mock Simple Forms Patterns](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/simple-forms/mock-simple-forms-patterns) (staging [link](https://staging.va.gov/mock-simple-forms-patterns/introduction)), and [Patterns Demonstrations mock form](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/simple-forms/mock-simple-forms-patterns-v3) (staging [link](https://staging.va.gov/mock-form-patterns/introduction)).

      - [Web Component Fields and Patterns](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-web-component-fields-and-patterns) are now essential to creating forms and they replace the old, direct vets-json-schema approach to building forms (it’s still involved but wrapped into the Web Component Fields and Patterns for you).

        - Web Component [Fields](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/web-component-fields)

        - Web Component [Patterns](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/web-component-patterns)

      - [Personal Information Page Pattern](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/components/PersonalInformation)

        - Not in the directories above but essential, and updated for gathering/displaying contact information in a form.

      - New [Array Builder Pattern](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/patterns/array-builder)

        - Also not included in the Web Component Fields and Patterns but essential and the current best approach for constructing a list and loop within a form

        - [Example use](https://github.com/department-of-veterans-affairs/vets-website/blob/90a613769b9c9ba3cd1bf2ab79ec7bd268fe2132/src/applications/simple-forms/mock-simple-forms-patterns-v3/pages/treatmentRecords.js)

      - [Prefill Pattern](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/patterns/prefill)

      - [ConfirmationView](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/components/ConfirmationView)

  - FE Context about the work we did to update the form to use new design components to meet [VA.gov](http://va.gov) standards

    - The rebuild we focused on 1) bringing the form up-to-date with its paper analogue and 2) bringing the digital experience up-to-date with current VA technology including shifting from the legacy vets-json-schema pattern to using VA web components.

    - We decided to develop the new version as a separate application based on the available information, tools, and recommendations of engineers who worked closely with the Forms System at the time of initial planning and development.

    - Developing the new version as a separate application had several advantages.

      - It had the benefit of isolating our work and avoiding any complexity in integrating new patterns into legacy code.

      - To launch the new version, we swapped the old and new app contents. This allowed us to avoid timing issues and outages associated with changing both vets-website and content-build.

      - We also avoided running two versions of the app at once, which meant we didn’t need to implement migrations, instead we gave users 60 days notice of the switch, at which point in-progress forms would be lost.

    - There were downsides to the separate application approach as well.

      - While swapping the code, we needed to be careful to retain some things from the old app, like its manifest.

      - We also had difficulty with the FE and BE communicating correctly about which app version to associate save-in-progress data with.

      - Another issue is that in version history, most of the app’s code is attributed to one engineer in one day, which doesn’t help in understanding how the app developed over time.

    - Given the issues of the separate application approach and, more importantly, the recently improved and standardized incorporation of feature toggles in the Forms System, we recommend that major overhauls to forms be implemented inside the same app following the new feature toggle recommendations

      - [Feature toggle documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-replace-a-form-page-using-)

      - Note: there are still limitations to this approach (e.g., toggles only wrap page modifications) and it can be a bit clunky, but it still provides more control over switching between form versions upon release.

     - Feature flag support is implemented in the App.jsx file. It allows for inserting feature flag values into form data which can be accessed in form config and other places. Currently there is one active flag, vrePrefillName, which is accessed in the prefillTransformer.

- [Endpoint Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/vre-form-28-1900.md)

  - Slack channel where alerts come in: [#benefits-ch31-and-36-notifications](https://dsva.slack.com/archives/C08KE2KJHFE)

    - Ch. 31 and 36 are combined in one channel. Will leave it up to RES if they want to move 31 to its own channel. Will need to update the playbook.

    - Playbook needs some updating now that we’ve added additional logging.

- [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/94e-cku-2aq/benefits-veteran-readiness-employment-claims?fromUser=false\&refresh_mode=sliding\&from_ts=1764714281168\&to_ts=1764887081168\&live=true)

  - Needs some updating with the new logging and BE refactor work - want to add more widgets.
