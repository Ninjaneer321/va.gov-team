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

# Research plan for usability testing of Direct Deposit for Educational Payments (DD-EDU) feature
**VSA AuthdExp/eBenefits Teams | November 2020**

`James Adams, designer | Slack: @Jim Adams | GH: Sporeboy`

---

#### Background
Recipients of VA compensation and pension (C&P), or educational (EDU) payments can elect to have deposits made directly to their checking or savings account via Electronic Funds Transfer (EFT). These recipients include Veterans and qualifying dependents, and payments are made from C&P, GI Bill and Veteran Readiness and Employment (VR&E) programs.

Direct deposits for C&P and EDU (GI Bill and VR&E) payments are set up and managed independently. Management of EDU payments is being migrated from eBenefits to be co-located with the C&P direct deposit feature in VA.gov profile. Users will be able to view and edit their direct deposit information for both types of payments in their profile.

### Goals
The goal of this usability study is to assess how easily participants locate, understand and can change their direct deposit information. We also want to determine what value users place on having both DD payment types displayed, whether the user receives both types of payments or not.

#### Guiding questions
- Where on VA.gov do users expect to find direct deposit (DD) information? 
- How often do users expect to review and/or update their DD information?
- What barriers prevent users from easily submitting changes to their DD info?
- How do users react to the two different "categories" of payments--and having to change them separately? 
- What other features do users expect on the DD screen?

#### Hypotheses
- Users may have some difficulty locating their direct deposit information
- Users will rarely, some occasionally, change their direct deposit information
- Participants will accept and easily navigate the DD edit function
- Participants will have some questions/hesitation about **two** distinct Direct Deposit features
- Users may want more information about the DD change process

### Method
We will engage in moderated usability testing conducted remotely using Zoom. Remote testing is currently the only viable option, but the method should yield acceptable observations on which to base findings. Participants will be recruited using Perigean. These users will be asked to explore VA.gov (home), then will be provided links to a prototype of the DD-EDU feature (likely to include some protion of Profile). The sessions will be recorded, and observers and notetakers may be in attendance.

#### The process
- There will be a quick warm-up and introduction to usability testing
- The user will be aked to navigate to VA.gov 
- The moderator will outline a scenario (use case) for the participant to follow
- The participant will aske to locate the DD feature
- After a brief period exploring a pth to DD, the users will be provided a link to the DD prototype
- The user will potentially proceed through review and editing of direct deposit info
- There will be a quick Q/A and wrap-up

### Participants and recruitment

Recruit for 5 fulfilled sessions using the following criteria:

**Must have for participants**
- Participants must receive some type of VA payments
- At least 1 woman of color
- At least 1 participant 55 or older
- At least one person that does not have a college degree (to include enlisted Veterans)
- At least one person with a disability rating of 80% or greater

**Good to have for participants**
- At least 1 participant 35 or under and 1 participant over 55
- At least one person that has a college degree (to include of officer Veterans)
- At least one person who lives in a major metropolitan area

**Please consider**
- At least one person who lives in a rural or remote area

**Recruitment requirements**
- The participants have Zoom downloaded prior to the session
- The participants know how to screenshare

#### When

#### Testing sessions

**Pilot session** | Date/time TBD

**Team availability**
| Dates | Times (EDT) |
| --- | --- |
| November 30 | 9 AM to 5 PM |
| December 1 | N/A |
| December 2 | 9 AM to Noon |
| December 3 | 9 AM to 5 PM |
| December 4 | 9 AM to Noon |
| December 7 | 9 AM to 5 PM |

- Please leave 30 minutes between sessions 
- Please do not exceed 3 sessions a day 

### Team members/roles
- James Adams | email: jadams@governmentcio.com -- Moderator, researcher
- Samara Strauss | email: samara.strauss@va.gov -- DEPO lead
- Matt Shea | email: matt.shea@adhocteam.us -- Product manager
- Shawna Hein | email: shawna@adhocteam.us -- VSA design lead
- Erik Hansen | email: erik@adhocteam.us -- Frontend engineer
- Sandra Hallie | email: shallie@governmentcio.com -- Frontend engineer
- Lihan Li | email: lihan@adhocteam.us -- Backend engineer
- Jennifer Strickland | email: jennifer.stricklandn@adhocteam.us -- 508 compliance
- Emily Waggoner | email: emily@adhocteam.us -- VSP platform
- Peggy Gannon | email: peggy@thesocompany.com -- VSP content
- Perigean -- Participant recruiting & screening
- Note-takers -- Various as available
- Observers -- various as available

### Resources
- [Project brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/edu-direct-deposit)

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/usability-testing/dd-edu-convo-guide.md)

- [Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/usability-testing/session-notes) (In-progress)

- [Topline summary]() (Available at conclusion of research.)

- [Research synthesis]() (Available at conclusion of research.)

### References

- [Mockups](https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/)

- [Prototype](https://preview.uxpin.com/f80ffd0a5433096bc9abd52333b1e60a4ffd745d#/pages/134411565/simulate/no-panels?mode=f)

- [Feature flow diagrams](https://xd.adobe.com/view/b1df79ab-e636-4aea-9929-a8ee3d06e2a9-e48c/)
 
---

#### Approval
_Approval pending_
