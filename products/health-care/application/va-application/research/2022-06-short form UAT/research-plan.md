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

# [DRAFT] Research Plan: Health care application 10-10EZ, UAT of shortened form based on disability rating, October 2022

## Background
This research is to be conducted on the Health Care Application (10-10EZ) by the 10-10 Health Apps team.

The primary purpose of this research is to test the designs/flows in production and reach participant populations that we were unable to reach due to prototype limitations. These are the created [shortened form flows](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/A71F1C96-FF98-42A2-9ADD-6D4B7A1DDB20) that eliminate Military Service and Household Information sections for those that we identify to have a service-connected disability rating of 50% or higher either through information we already have on file (pre-populated) or by the applicant self-reporting it during the application. 

September 2021 prototype [usability research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/flow-research-sept-21/research-findings.md) validated the flows that are now in production.

Previous [usability testing findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/Short%20form%20usability-June%202022/research-findings.md) and [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/Short%20form%20usability-June%202022/research-plan.md) conducted on short form flow during June 2022.

Link to product outline: [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/product-outline.md)

### OCTO Objectives
> Goal 1: Veterans and their families can apply for all benefits online

> Goal 6: Logged-in users have a personalized experience, with relevant and time-saving features

### Veteran Journey
Applying for health care and ensuring the Veteran understands their current disability rating can possibly happen in a variety of points in the journey including: getting out, starting up, taking care of myself, retiring and aging. 


## Research Goals	
The primary goal of our UAT is to confirm that the short form functionality for the authenticated [use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Short%20Form/Short-form-use-cases.md) works as expected.


The goals of this user acceptance test are to:
1. Validate that there are no issues or bugs for authenticated users with 50% or greater disability rating on record
2. Validate that there are no issues or bugs for authenticated users with less than 50% disability rating on record
3. Validate that there are no issues or bugs for authenticated users with no disability rating on record, but self-report a disability rating of 50% or higher
4. Validate that there are no issues or bugs for authenticated users with no disability rating on record and don't self-report a disability rating of 50% or higher


**Research questions**
1. Does the functionality work as expected?
2. Is any aspect of the flow surprising/unexpected?
3. Are there any indications of UX issues?


**Hypothesis**
- The functionality of each use case will work as expected.
- No bugs will be experienced.
- Veterans will move through the flow easily.



## Method	
### User acceptance testing (UAT)
We'll have participants go through a list of specific tasks for UAT and ask follow-up questions to get feedback on any usability-related findings.

Testing in production to validate authenticated shortened flows.
[Production link](https://va.gov/health-care/apply/application/introduction)

### Location
Remote via Zoom

### Research materials
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/short%20form%20UAT%20may.june%202022/conversation-guide.md)
	
## Participants and Recruitment	
We would like to work with Perigean to recruit for 10 fulfilled remote sessions. Therefore, we request that 18 sessions be scheduled. 

### Recruitment approach
We will be testing the [shortened form flows](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/A71F1C96-FF98-42A2-9ADD-6D4B7A1DDB20) in production with Veterans.

**Groups/Use Cases**
1. Authenticated with established disability rating of 50% or higher
2. Authenticated with no established disability rating (self report)


### Recruitment criteria

| Total requested | Completed sessions | Veterans | Family Member | Caregivers | Service Members |
| --------------- | ------------------ | -------- | ------------- | ---------- | --------------- |
| 18              | 10	               | 10       | 0             | 0          | 0               |

  
**Must have for participants**
- Participants are not currently receiving health care benefits and have not previously applied but are interested in applying
- At least half of participants must be identity-verified (LOA3)--using ID.me, DSLogon, or MyHealtheVet--on VA.gov? (pass = yes)
	- This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile.
	- Can you log-in using your ID.me, DSLogon, or MyHealtheVet username and password now? (pass = yes)
- At least 8 people with a disability rating of 50% or higher

**Additional criteria**
- At least 3 people who use a screenreader (at least 1 that is new to assistive technology)
- At least 5 people with a cognitive disability
- At least 8 people who will use a mobile device during the research session
- At least 50% that identify as women or nonbinary
- At least 50% age 55+
- At least 50% that live in a rural area
- At least 50% that don't have a bachelor degree or higher
- At least 2 participants who identify as Black or African American
- At least 3 participants who identify as Hispanic
- At least 2 participants who identify as Asian
- At least 2 participants who identify as Native
- All participants must be able to use Zoom, locate and use the chat function in Zoom, and to share their screen through Zoom



**Participant pool should in diverse in**
- Branch of service


## Timeline

### Prepare
A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.

Pilot participant email:
Date and time of pilot session:


### Research sessions
Desired Timeline: October TBD, 2022

### Length of sessions
* Session length: 45 minutes
* Buffer time between sessions: 1 hour 
* Maximum Sessions per day: 2


### Availability
	
Team Availability | Time (EST)
------------------|--------------
October      | TBD
October      | TBD
October      | TBD
October      | TBD



## Team Roles	
	
- Moderator: Nick Osmanski (nick.osmanski@amida.com) and Jessica Stump (jessica.stump@adhocteam.us)	
- Research guide writing and task development: Moderators and Dené Gabaldón (dene.gabaldon@adhocteam.us)	
- Participant recruiting & screening:	Perigean
- Project point of contact:	Same as moderators
- Participant(s) for pilot test: 
- Note-takers: 10-10 Team
- Observers: Heather Justice (heather.justice@adhocteam.us), Mark Fallows (mark.fallows@adhocteam.us), Lisa Zapson (lisa.zapson@adhocteam.us), Matt Long (matt.long@adhocteam.us), Lihan Li (lihan@adhocteam.us)  
	

## Resources	
- [User flows](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/A71F1C96-FF98-42A2-9ADD-6D4B7A1DDB20)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/short%20form%20UAT%20may.june%202022/conversation-guide.md)
- [Production link](https://va.gov/health-care/apply/application/introduction)
- [Research Findings]
