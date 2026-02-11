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

# Research plan for user acceptability testing (UAT) for VA Form-28-8832 (Chapter 36) / production environment
**VSA eBenefits Team | December 2020**

`James Adams, designer/researcher`

---

### Background
The Chapter 36 (CH36) program, Personalized Career Planning and Guidance (PCPG), provides career, educational and adjustment counseling to Veterans, service members or their qualifying dependents. To receive these benefits, users must complete and submit VA Form 28-8832.

#### Note regarding UAT
We're requesting that Perigean recruit Veterans who need to apply for Chapter 36 (CH36) benefits. This usually involves submitting a paper 28-8832 or going to eBenefits. We realize that it may be difficult to find Veterans with such specific needs, particularly given the impending holiday season.

For those Veterans we talk to in UAT, we intend to be very transparent about what we are testing--it's an actual, functioning form. We will be asking our partners to keep watch for the submissions coming out of UAT, while we watch for problems and errors in real time. We will be observing the transaction, But not recording it, and this will also be clearly communicated to the UAT participant.

In the event that we don’t get any Veterans that meet our criteria, or we can't find any who are comfortable displaying live/personal data, we may toggle the feature “on” to as tiny a percentage as possible, capture a small number of submissions during a "quieter" time of the week, and then revert back to eBenefits while we take some time to validate the small number of naturally gained submissions. With feature toggles we can control access quickly and with granularly. Again, we want to keep the data being collected real and accurate. In this scenario, it may take longer to get the volume of valid VA.gov submissions to 100%, but as our confidence in the new feature increases, we should be able to accelerate to full deployment.

### Goals
The goal of User Acceptance Testing (UAT) is to determine if the new PCPG forms and wizards are intuitive and functional for users needing to submit either form VA 28-8832.

### Method
Participants needed to submit a 28-8832 will be recruited and given access to the new form on VA.gov. We'll moderate UAT remotely using Zoom. Users will step through the screening wizard, then complete the form--either authenticated or unauthenticated. Remote observers may be in attendance.

#### Success criteria

Users will:
- Step through the screening wizard (Optional)
- Enter the form
- Navigate the form
- Review and submit form
- Form will successfully submit for processing

#### The process

- There will be a quick introduction to UAT
- The participant will be guided to the 28-8832 intro
- User will step through the screening wizard (Optional)
- The user will proceed through the 28-8832 and submit
- There will be a quick Q/A and wrap-up
- Success will be measured as 80% of participants can successfully submit their 28-8832

### Participants & recruiting
Participants will be recruited via Perigean. The study will require Veterans (or dependents) who have a need to apply for CH36 benefits. Sessions will run between 20 and 30 minutes depending on potential technical issues; sessions should be scheduled for 30 minutes, and at least 30 minutes apart.

Recruit for a **minimum of 3** fulfilled sessions using the following criteria:

#### Must have for participants
- Are you a Veteran, service member or a dependent? (pass = yes)
- Do you need to submit a 28-8832 to receive CH36 benefits (pass = yes)

#### Good to have for participants

- At least one woman
- At least one person of color
- At least one participant 35 or under and 1 participant over 55
- At least one person that does not have a college degree (to include enlisted Vets)
- At least one person that has a college degree (to include of officer Vets)
- At least one person who lives in a rural or remote area
- At least one person who lives in a major metropolitan area

#### Recruitment requirements

- Participants can use any device with a browser (desktop, laptop, tablet, phone)
- The participants have Zoom downloaded prior to the session (including mobile)
- The participants know how to screenshare

#### eBenefits Team Availability

Please allow 30 minutes between sessions.

| Dates | Times (EDT) |
| --- | --- |
| December 28, 2020 | 9 AM to noon |
| December 29, 2020 | 9 AM to noon |
| December 30, 2020 | 9 AM to 5 PM |

### Team members
- James Adams | jadams@governmentcio.com -- Moderator, designer
- Steve Kovacs | steve.kovacs@va.gov -- DSVA lead
- Jason Wolf | jwolf@governmentcio.com -- eBenefits product manager
- Kathleen Crawford | kcrawford@governmentcio.com -- Backend engineer
- Derek Dyer | ddyer@governmentcio.com -- Backend engineer
- Micah Chiang | micah@adhocteam.us) -- Frontend engineer
- Jesse Cohn | jesse.cohn@adhocteam.us -- Frontend engineer
- Perigean -- Participant recruiting & screening
- Note-takers -- Various as available
- Observers -- various as available

### Resources
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/apply-CH36-VRE-counseling/research-design/uat/ch36-uat-convo-guide.md)

---
