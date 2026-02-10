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

# Research Plan for Dragons: HCA duplicates, March 2019

## Goals
**1. What product & team are you doing this research for?**

Dragons: HCA work to mitigate duplicate applications

**2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md)

Currently, 50% of health care applications submitted via VA.gov are duplicate applications, meaning people are applying who have applied before. In October of 2018, we talked to veterans and [our research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca%202.0/research/oct-2018) showed that duplicate applications were primarily the result of communication problems with the VA. Participants weren't aware of the decision that had been made about their original application and didn't know where to find that information.

Our work on the health care application hopes to mitigate this problem by detecting if people have applied for health care previously, and, if they have, surfacing information on their health care status so they can better determine next steps.

**3. Research questions: What question(s) do you hope to be able to answer after completing this research?** 

Overall understanding of the flow
- For logged out users, do they understand why we are asking for personal information before they can go to the HCA?
- For logged out users who are found in the ESR, do they have any idea why we're asking them to sign in?
- If LOA1, do they understand why we are asking them to verify their identity?

Overall comprehension of content

- For LOA3, do they understand what we are communicating to them about their past HCA status?

Overall level of frustration and how we can help reduce it

- How frustrated do people get at each step in the flow (asking for their personal info, being told they need to login, being told they need to verify their identity, when they find out their health care determination)?
- Is there any way to reduce their frustration?

**4. Hypothesis: What is your hypothesis for this research?** 

- Overall, user will not find the flow confusing, though they may find it frustrating.
- Users will understand we need to tell them something, and that is why we are asking them to sign in.
- Users will start to get frustrated when we ask them to verify their identity, and when we tell them they are ineligble. However, they will find this option to be better than not knowing their health care status at all.
- Users will understand the different messages we show them around different health care statuses (eg. someone is ineligible, someone is enrolled, etc.)

## Method
**1.	What method of research are you planning?** 

We will be conducting remote, moderated testing with an InVision prototype.

For this project, we will later need to test this work in code, but we can't do that right now since the work isn't yet finished being built. To account for this, we will conduct UAT once build is complete.
  
**2.	Why this method? How does this methodology help you answer your research questions?**

This method helps us test the specific things we are looking to test in this research — flow, content, and overall user perception and level of frustration.

We *do* need to test how this works with a live backend, but we will use UAT for that.

**3.	Where are you planning to do your research?**

GoToMeeting. Participants should be able to download GoToMeeting and feel comfortable using it for the session.

**4.	What will you be testing?**

InVision prototype (has not been put together yet).

## Participants and Recruitment

**1.	Participant criteria: What are you looking for in a participant?**

I am looking for the following:

- People who have a computer that can support GoToMeeting.
- Most importantly, we need people who have applied for health care at least once before. They do not have to be enrolled in VA health care, but they do have to have applied, as people who have not applied for VA health care would never find themselves in the flow we are testing.
  - Optional nice to have: People who have applied more than once for health care. We would love to speak to some of these people but it is not a requirement that any participants have applied *more* than once.
- 7 participants.
- 1 - 2 people under 40.
- 1 - 2 women.
- 1 - 2 people of color.

**2.	What is your recruitment strategy?** 

We would like to work with Perigean for recruiting. If their database does not tell them whether people have applied before, then we may need to work with Josh Faulkner (contact at the HEC) to find people.

## When? 

**1. Timeline: What dates do you plan to do research?** 

I would like research to start **Wednesday, March 6, 2019**.

**2. Prepare: When will the thing you are testing be ready?**

The prototype can be ready the week of 2/25/19.

**3. Length of Sessions: How long do you estimate each session will be?**

I am estimating sessions will be between 45 – 60 minutes and will have a better idea of this after I create the conversation guide.

**4.	Availability: If applicable, when would you like sessions scheduled?**

Please leave at least **30 minutes** between sessions to account for sessions going over.

- Wednesday, March 6: 8:30 am ET – 6:30 pm ET (session starting no later than 5:30 and ending no later than 6:30)
- Thursday, March 7: 8:30 am ET – 11:30 am ET (session ending no later than 11:30 am); 2:00 pm ET – 6:00 pm ET (session ending no later than 6:00 pm)
- Friday, March 8: 8:30 am ET – 4:30 pm ET (session ending no later than 4:30 pm)
- Monday, March 11: 8:30 am ET – 6:30 pm ET (session starting no later than 5:30 and ending no later than 6:30)
- Tuesday, March 12: 8:30 am ET – 5:00 pm ET (session ending no later than 5:00 pm)

**5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

TBD

## Team Roles

**Please list the people who will be serving in each role.**

- **Moderator**: Samara Strauss
- **Research guide writing and task development**: Samara Strauss
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Samara Strauss
- **Participant(s) for pilot test**: TBD
- **Note-takers**: TBD depending on session timing
- **Observers**: TBD depending on session timing

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md)
- [Discussion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/conversation-guide.md)
- [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019)
- [Read-Out/Results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/research-summary.md)
