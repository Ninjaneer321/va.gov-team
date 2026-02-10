---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[e.g., authenticated/unauthenticated]"

# Background Context
background:
  problem_statement: "[What problem is your product trying to solve?]"
  product_location: "[Where is this situated on VA.gov?]"
  user_familiarity: "[New product or iteration?]"
  product_brief_url: "[URL]"

# Research Design
methodology: "[e.g., usability testing, semi-structured interviews, card sort]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "[First research goal]"
  - goal_2: "[Second research goal]"
  - goal_3: "[Third research goal]"

research_questions:
  - "[Research question 1]"
  - "[Research question 2]"
  - "[Research question 3]"
  - "[Research question 4]"
  - "[Research question 5]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"
  - "[Hypothesis 3]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[Must-have criterion 1]"
    - "[Must-have criterion 2]"
    - "[Must-have criterion 3]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener question text]"
      qualifying_response: "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[e.g., Getting Out]"
  - "[e.g., Starting Up]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research]"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

# Research plan for usability testing for View Payment History
**VSA eBenefits Team | August 2020**

`James Adams, designer/researcher`

---

### Goals
We're moving the View Payment History feature (VPH) from eBenefits to VA.gov. Our primary goal is to maintain exisitng functionality of the VPH feature as we 'translate' it into the VA.gov system. We're conducting usability testing of the feature as developed in staging to determine if the new VPH is intuitive and functional for users needing to review their VA payment.

#### Background
In its current implementation, VPH is a pair of filtered tables that show VA Compensation & Pension, and Education payments made to quailifying Veterans. The arrangement of these tables (Payments Made and Payments Returned) is similar to basic consumer bank and financial apps. Preliminary research indicated that participants often look to their own banking apps to review VA payments rather than logging-in to eBenefits, but users generally found the current eBenefits VPH feature acceptable. Some wanted more advanced search and filting of data.

#### Research questions
- Where and how (what links/navigation) do participants expect to find their payment history?
- Do participants find the information in the VPH feature useful and complete?
- What, if any, other information do participants expect to see?
- What changes are needed to beter present the information?
- What changes would help viewing data in mobile formats (small viewports only)?

#### Hypotheses
During discovery, the users we talked to said they usually used their own bank apps to check VA payments, and they were satisfied with the desktop and mobile presentations. We did not talk to anyone without a bank checking account. The presentation of View Payment History was designed to align with commercial banking apps.

Our hypothesis is that View Payment History will present most of the information Veterans expect in a generally accptaple manner. Some users will want more advanced search and filter options; some may want additional columns.

### Method
We will engage in moderated usability testing conducted remotely using Zoom. Remote testing is curently to only viable option, but the metod should yield acceptable observations on which to base findings. Participants who receive VA payments will be recruited using Perigean. These users will login to VA staging using test accounts and review the feature. The sessions will be recorded, and observers and notetakers may be in attendance.

### Participants and recruitment

Recruit for 5 fulfilled sessions using the following criteria:

**Must have for participants**
- Do you receive compensation & pension, or education payments from VA? (pass = yes)

**Good to have for participants**
- At least 1 woman
- At least 1 person of color
- At least 1 participant 35 or under and 1 participant over 55
- At least one person that does not have a college degree (to include enlisted Vets)
- At least one person that has a college degree (to include of officer Vets)
- At least one person who lives in a rural or remote area
- At least one person who lives in a major metropolitan area
- At least one person with a disability rating of 80% or greater

**Recruitment requirements**
- The participants have Zoom downloaded prior to the session
- The participants know how to screenshare

#### When
The current timeline is in flux pending the resolution of last-mile development issues.

#### Pilot session

`Date/time TBD`

#### Testing sessions

`All times TBD`

| Dates | Times (EST) |
| --- | --- |
| TBD | 9 AM to 5 PM |

- Please leave 30 minutes between sessions
- Please do not exceed 3 sessions a day

### Team members/roles
- [James Adams](jadams@governmentcio.com) [(VA Email)](james-adams2@va.gov) -- Moderator, researcher
- [Steve Kovacs](steve.kovacs@va.gov) -- DSVA lead
- [Jason Wolf](jwolf@governmentcio.com) -- eBenefits product manager
- [Shawna Hein](shawna@adhocteam.us) -- VSA design lead
- [Kathleen Crawford](kcrawford@governmentcio.com) -- Backend engineer
- [Micah Chiang](micha@adhocteam.us) -- Frontend engineer
- [Jesse Cohn](jesse.cohn@adhocteam.us) -- Frontend engineer
- [Jennifer Strickland](jennifer.stricklandn@adhocteam.us) -- 508 compliance
- [Emily Waggoner](emily@adhocteam.us) -- VSP platform
- [Peggy Gannon](peggy@thesocompany.com) -- VSP content
- Perigean -- Participant recruiting & screening
- Note-takers -- Various as available
- Observers -- various as available

### Resources
- [Project brief for View Payment History](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ebenefits/view-payment-history)

- [Conversation guide]() (Available soon.)

- [View Payment History mockups](https://xd.adobe.com/view/5f609803-b045-428a-510e-1754e404af3e-2951/)

- [View Payment History prototype](https://preview.uxpin.com/546893e0b210374a0734240e0ca9fccc2e02ed11#/pages/129039987/comment/no-panels)

- [View Payment History in staging](https://staging.va.gov/va-payment-history/payments/)

- [Session notes]() (Available after research sessions.)

- [Topline summary]() (Available at conclusion of research.)

- [Research synthesis]() (Available at conclusion of research.)

### References

 - [View Payment History user flow diagrams](https://xd.adobe.com/view/44399930-6143-4192-6e80-99a0566c4092-3208/)

 - [View Payments: Discovery Synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-payment-history/research-design/design-discovery.md)

 - [eBenefits Payment History comparative analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-payment-history/research-design/payment-history-comp-analysis.md)

---

#### Approval
_Plan approval TBA_
