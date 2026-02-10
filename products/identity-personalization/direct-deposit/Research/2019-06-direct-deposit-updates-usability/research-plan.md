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

# Research Plan for Dragons: Direct deposit updates | June 2019

## Goals

**1. What product & team are you doing this research for?**

This research is for the direct deposit work that is happening as a joint effort between the Dragons and Website teams.

**2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?** 

In March 2019, we decided to add direct deposit functionality to the profile on VA.gov as part of a request from the eBenefits team. Since eBenefits doesn't have two-factor authentication, the site is more open to security vulnerabilities and the potential for fraud. As VA.gov does have 2FA capabilities, the transition seemed like a natural fit.

Direct deposit functionality on eBenefits covers two benefit categories — (disability) compensation & pension benefits, and GI Bill benefits. Because of how the GI Bill functionality was built, we determined that we would not be able to integrate that functionality into the VA.gov profile right now. Instead, we would move forward with only integrating the compensation & pension direct deposit functionality for the MVP.

We've completed an initial round of design and need to get this in front of users to make sure we've taken the right direction, and to determine whether these designs are useful and usable.

**3. Research questions: What question(s) do you hope to be able to answer after completing this research?**

- Is the profile the best place for this functionality?
- Do users know where to go to update this information? If they don't, what steps do they try to take to get there?
- Do users understand how to update their information when they get to the profile? 
  - Are they confused that we don't populate the edit modal with their information? 
  - Do they understand how to find/update their routing and account numbers?
- How confused are people that they have to go to eBenefits to update GI Bill info?

**4. Hypothesis: What is your hypothesis for this research?**

- People will find the profile to be the natural place to update their direct deposit info.
- People will find the process to update information to be intuitive.
- People will be confused that they open up the edit modal and the routing and account numbers are blank.
- People will not like that they still have to go to eBenefits to update GI Bill info.

## Method
**1.	What method of research are you planning?**

Moderated, remote testing.
  
**2.	Why this method? How does this methodology help you answer your research questions?**

This is the easiest way to test the direction/design we've chosen. 

**3.	Where are you planning to do your research?**

GoToMeeting.

**4.	What will you be testing?**

We will be testing this functionality on staging.

## Participants and Recruitment

**1.	Participant criteria: What are you looking for in a participant?**

We are looking for **5** people who meet the following criteria:

- Must currently receive VA compensation or pension benefits via direct deposit on eBenefits.
- Must be able to access GoToMeeting via a computer (for screensharing purposes) during our session.

Ideally, we'd have:

- At least one woman participant
- At least one participant under 35
- At least one participant of color

**2.	What is your recruitment strategy?**

We would like to work with Perigean on this effort.

## When? 

**1.	Timeline: What dates do you plan to do research?**

We would like to start usability testing sessions on **Monday, June 24**.

**2.	Prepare: When will the thing you are testing be ready?**

This functionality is currently ready and live on staging.

**3. Length of Sessions: How long do you estimate each session will be?**

We estimate sessions will be 30 – 45 minutes. Please schedule sessions for 60 minutes and give a 30 minute break between sessions.

**4.	Availability: If applicable, when would you like sessions scheduled?**

This is my availability for the week of **June 24 – June 28**:

- **Monday, June 24** — 9:00 am – 5:00 pm
- **Tuesday, June 25** — 9:00 am – 3:30 pm
- **Wednesday, June 26** — 9:00 am – 12:00 pm
- **Thursday, June 27** — 9:00 am – 11:30 am; 1:30 pm — 3:30 pm
- **Friday, June 28** — 9:00 am – 4:00 pm

**5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

Friday, June 21

## Team Roles
Please list the people who will be serving in each role. 
- **Moderator**: Samara Strauss
- **Research guide writing and task development**: Samara Strauss
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Samara Strauss
- **Participant(s) for pilot test**: TBD
- **Note-takers**: Perigean
- **Observers**: Perigean

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

Please invite the following people to these sessions:

- TJ Rice (tj@adhocteam.us)
- Nick Sullivan (nick.sullivan@adhocteam.us)
- Tze Lei (tze@adhocteam.us)
- Erik Hansen (erik@adhocteam.us)
- Danielle Thierry (danielle@thesocompany.com)
- Chris Johnston (christopher.johnston2@va.gov)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md)
- Discussion Guide
- Notes & Recordings
- Synthesis
