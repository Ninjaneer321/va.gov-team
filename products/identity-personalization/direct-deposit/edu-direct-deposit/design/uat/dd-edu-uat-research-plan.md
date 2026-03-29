---
# Research Plan Metadata
title: "Research Plan for VSA AuthdExp/eBenefits Teams, Direct Deposit for Educational Payments UAT, February 2021"
date: 2021-02-01
last_updated: 2021-03-17
team: "VSA Authenticated Experience / eBenefits"
product: "Direct Deposit for Educational Payments (DD-EDU)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Management of educational payment direct deposit is being migrated from eBenefits to VA.gov profile to be co-located with C&P direct deposit feature. Users need to view and edit direct deposit info for both payment types in profile."
  product_location: "VA.gov Profile > Direct deposit section"
  user_familiarity: "Migration - moving existing eBenefits feature to VA.gov profile"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/edu-direct-deposit"

# Research Design
methodology: "User Acceptance Testing (UAT)"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine if the new direct deposit feature is intuitive and functional for users needing to review their bank information for educational payments"

research_questions:
  - "Can users navigate to the direct deposit tool?"
  - "Can users select the payment type needing to be updated?"
  - "Can users navigate the form and re-enter current account information?"
  - "Does the form successfully submit for processing?"

hypotheses:
  - "90% of participants can successfully re-enter and submit their bank info"
  - "Bank info successfully saves on the backend and is reflected in the user's profile"

expected_outcomes: "Confirm that the direct deposit feature works as expected for educational payments, allowing successful migration from eBenefits to VA.gov profile."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Recruit Veterans or dependents who receive DD-EDU payments"
  
  primary_criteria:
    - "Must be Veteran, service member, or dependent"
    - "Must receive educational VA payments via direct deposit"
    - "Must be identity-verified (LOA3) on VA.gov using ID.me, DSLogon, or MyHealtheVet"
    - "Must have bank routing number and account number available"
    
  secondary_criteria:
    - "At least one dependent who is not a veteran or service member"
    - "At least one woman"
    - "At least one person of color"
    - "At least one participant under 35"
    
  screener_questions:
    - question: "Do you receive educational VA payments via direct deposit?"
      qualifying_response: "Yes"
      
participants:
  veterans: 5
  caregivers: 0
  dependents: 1
  total_recruited: 6
  completed_sessions_goal: 5
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2021-03-11 to 2021-03-17"
  research_review_submission: "2021-02-01"
  
session_details:
  duration_minutes: 20
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Migrate eBenefits features to VA.gov"
    key_results: 
      - "Successfully migrate DD-EDU management to VA.gov profile"
      - "Logged-in users can manage direct deposit easily"
      
veteran_journey_phases:
  - "Starting Up"
  - "Living Civilian Life"
  - "Putting Down Roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/usability-testing"
    
tags:
  - direct-deposit
  - education-benefits
  - ch33
  - uat
  - user-acceptance-testing
  - authenticated-experience
  - payment-information
  - profile
  - authenticated
  - research-plan
  - "profile"
  - "direct-deposit"
  - "education-payments"
  - "uat"
  - "authenticated-experience"
---

# Research plan for user acceptance testing (UAT) of Direct Deposit for Educational Payments (DD-EDU) feature
**VSA AuthdExp/eBenefits Teams | February 2021**

`James Adams, designer | Slack: @Jim Adams | GH: Sporeboy`

---

### Background
Recipients of VA compensation and pension (C&P), or educational (EDU) payments can elect to have deposits made directly to their checking or savings account via Electronic Funds Transfer (EFT). Management of EDU payments is being migrated from eBenefits to be co-located with the C&P direct deposit feature in VA.gov profile. Users will be able to view and edit their direct deposit information for both types of payments in their profile.

<!-- #### Note regarding UAT
We're requesting that Perigean recruit Veterans who need to **change their direct deposit information for educational payments.** This can be done in-person at a VA facility, via phone using the VA hotline, or online using the VA.gov direct deposit feature. We realize that it may be difficult to find Veterans with such specific needs.

We will be testing an actual, functioning form that could change users' bank information for direct deposits. We will be asking our partners to keep watch for the submissions coming out of UAT, while we watch for problems and errors in real time. We will be observing the transaction, but not recording it, and this will also be clearly communicated to the UAT participant.
-->
### Goals
The goal of User Acceptance Testing (UAT) is to determine if the new direct deposit feature is intuitive and functional for users needing to review their bank information for their educational payments.

### Method
Participants needed to view their bank information for direct deposits of educational payments will be recruited and given access to the new feature on VA.gov. We'll moderate UAT remotely using Zoom. Users will step through the screening wizard, then complete the inline form by re-entering their info, and submitting their 'change.' Remote observers may be in attendance.

#### Success criteria

Users will:
- Navigate to the tool
- Select the payment type needing to be updated
- Navigate the form
- Re-enter current account information
- Review and submit form
- Form will successfully submit for processing

#### The process

- There will be a quick introduction to UAT
- The user will log into VA.gov
- The participant will be guided to the direct deposit feature
- User will step through the edit-info form and re-enter their bank info
- There will be a quick Q/A and wrap-up 
- Success will be measured as 90% of participants can successfully re-enter and submit their bank info, and that bank info successfully saves on the backend and is reflected in the user's profile

### Participants & recruiting
Participants will be recruited via Perigean. The study will require Veterans (or dependents) who receive direct deposits of VA education payments. Sessions will run between 10 and 20 minutes depending on potential technical issues; sessions should be scheduled for 30 minutes, and at least 30 minutes apart.

Recruit for a **minimum of 5** fulfilled sessions using the following criteria:

#### Must have for participants
- Are you a Veteran, service member or a dependent? (pass = yes)
- Do you receive educational VA payments via direct deposit? (pass = yes)
  - If we filter participants by GI Bill, we should be able to assume they receive DD-EDU payments
<!-- - Do you need to change the direct deposit information for your educational VA payments? (pass = yes) -->
- Are you identity-verified (LOA3)--using ID.me, DSLogon, or MyHealtheVet--on VA.gov? (pass = yes) 
  - This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile.
  - Can you log-in using your ID.me, DSLogon, or MyHealtheVet username and password now? (pass = yes)
  - Are you OK with re-entering your existing bank information? (pass = yes) (You **could** change your bank info if you need to)
  - If so, do you have your bank routing number and your account number available? (pass = yes)
- **At least one dependent** who is not a veteran or service member 
- At least one woman
- At least one person of color
- At least one participant 35

#### Important for us to know
We need to have the participant's actual login email for the login method they use (DSLogon, ID.me or MyHealtheVet). This will aloow access to the feature we're testing.

#### Good to have for participants

- At least one person that does not have a college degree (to include enlisted Vets)
- At least one person that has a college degree (to include of officer Vets)
- At least one person who lives in a rural or remote area
- At least one person who lives in a major metropolitan area
- At least one participant over 55

#### Recruitment requirements

- Participants can use any device with a browser (desktop, laptop, tablet, phone)
- The participants have Zoom downloaded prior to the session (including mobile)
- The participants know how to screenshare

#### Team Availability

Please allow 30 minutes between sessions. 

`All dates and times TBD`

| Dates | Times (EDT) |
| --- | --- |
| March 11, 2021 | noon to 5 PM |
| March 12, 2021 | 9 AM to noon |
| March 15, 2021 | 9 AM to 5 PM |
| March 15, 2021 | 9 AM to 5 PM |
| March 16, 2021 | 2 PM to 5 PM |
| March 17, 2021 | noon to 5 PM |

### Team members/roles
- James Adams | email: jadams@governmentcio.com -- Moderator, researcher
- Samara Strauss | email: samara.strauss@va.gov -- DEPO lead
- Shawna Hein | email: shawna@adhocteam.us -- VSA design lead
- Erik Hansen | email: erik@adhocteam.us -- Frontend engineer
- Sandra Hallie | email: shallie@governmentcio.com -- Frontend engineer
- Lihan Li | email: lihan@adhocteam.us -- Backend engineer
- Peggy Gannon | email: peggy@thesocompany.com -- VSP content
- Bridget Hapner | email: bridget@adhocteam.us -- Mobile design
- Perigean -- Participant recruiting & screening
- Note-takers -- Various as available
- Observers -- various as available

### Resources
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/uat/dd-edu-uat-convo-guide.md)

### Results
[UAT results table](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/uat/dd-edu-uat-results.md)

---
