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

# Research Plan for Dragons: HCA Dashboard updates, April 2019

## Goals
**1. What product & team are you doing this research for?**

- Dragons — Dashboard updates to show the health care application statuses on the dashboard.

**2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?** 

This work is an extension of the overall [updates we are making to the health care application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md). In summary, we are trying to mitigate the high rate (50%) of duplicate health care applications by more clearly communicating veterans' health care application statuses on VA.gov. We plan to do this in two places — in the health care application itself, and on the logged in "My VA" dashboard.

In March 2019, we conducted [testing on planned updates to the health care application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/research-summary.md). Design for the dashboard updates was still in progress at this time and was not ready to be tested with the larger flows. Those updates are now complete and need to be tested before they are ready for build and launch.

**3. Research questions: What question(s) do you hope to be able to answer after completing this research?** 

- Do people understand the different statuses in this context?
- Do people notice the notification on the dashboard? Do they understand how to interact with it?
– Is the information we are communicating to people helpful? Do they feel they have meaningful next steps when necessary?
- Should these notifications connect to the HCA intro page?
- Do people expect to receive email notifications as part of this?

**4. Hypothesis: What is your hypothesis for this research?** 

- Veterans will be very happy to see this information on their dashboard.
- Aside from minor issues, the dashboard content and interactions will be easy to use and provide useful information to veterans.
- Veterans will want other next steps than to call a phone number.

## Method
**1.	What method of research are you planning?**

- Remote moderated user testing through GTM.
  
**2.	Why this method? How does this methodology help you answer your research questions?** 

- We need to conduct basic usability testing to see what works as expected, what is confusing, and what needs to be updated before build.

**3.	Where are you planning to do your research?** 

- GoToMeeting.

**4.	What will you be testing?** 

- InVision prototype.

## Participants and Recruitment
**1.	Participant criteria: What are you looking for in a participant?**

I am looking for the following:

- People who have a computer that can support GoToMeeting.
- Most importantly, we need people who have applied for health care at least once before. They do not have to be enrolled in VA health care, but they do have to have applied, as people who have not applied for VA health care would never find themselves in the flow we are testing.
  - Optional nice to have: People who have applied more than once for health care. We would love to speak to some of these people but it is not a requirement that any participants have applied *more* than once.
- 3 participants (max. 5 recruited).
- At least 1 person under 40.
- At least 1 woman.
- At least 1 person of color.

**2.	What is your recruitment strategy?** 

We would like to work with Perigean for recruiting.

## When? 
**1. Timeline: What dates do you plan to do research?** 

I would like to start research **April 10, 2019.**

**2. Prepare: When will the thing you are testing be ready?**

The prototype can be ready no later than Monday, April 8.

**3. Length of Sessions: How long do you estimate each session will be?**

I am estimating sessions will be about 30 minutes, but let's schedule participants for 45 minutes just in case. Also, please give at least a 15 minute buffer between sessions to allow for sessions starting late.

**4. Availability: If applicable, when would you like sessions scheduled?** 

- Wednesday, April 10: 8:30 am ET – 5:30 pm ET (session starting no later than 4:30 and ending no later than 5:30)
- Thursday, April 11: 8:30 am ET – 11:30 am ET (session ending no later than 11:30 am); 2:00 pm ET – 5:00 pm ET (session ending no later than 5:00 pm)
- Friday, April 12: 8:30 am ET – 3:00 pm ET (session ending no later than 3:00 pm)

**5. Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?** 

TBD

## Team Roles
Please list the people who will be serving in each role. 

- **Moderator**: Samara Strauss
- **Research guide writing and task development**: Samara Strauss
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Samara Strauss
- **Participant(s) for pilot test**: N/A
- **Note-takers**: Perigean
- **Observers**: None required

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md)
- [Discussion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/dashboard-updates/conversation-guide.md)
- [Synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/dashboard-updates/research-summary.md)
