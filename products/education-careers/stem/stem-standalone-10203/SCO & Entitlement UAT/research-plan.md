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

# Research Plan for STEM Scholarship Application (for 22-10203) enhancements

## Goals	
1. What product & team are you doing this research for?	
    This research plan is related to the rollout of updates to the STEM Scholarship that will:
   1. Display remaining entitlement to applicants who are logged in and have supporting EVSS entitlement data
   2. Upon submission of eligible applications, SCOs for the institution most recently associated with the applicant will receieve an email notification so that they can preemptively begin the process of supplying the VA with data necessary to validate the scholarship application. 
2. Background: 
   1. This functionality was determined post-MVP from the initial 22-10203 form launch in September 2020 due to issues related to coordinating with and testing against EVSS. Since then, DEPO has approved the approach of launching and testing these two features in Production because data to test in lower environments is unavailable. 
3. Research questions: What question(s) do you hope to be able to answer after completing this research? 	
   1. Do these two features work as expected for Veterans, SCOs, and the STEM application processing team?
4. Hypothesis: 
   1. The features do work as expected. 

## Method	
1.	What method of research are you planning? Observation of remote moderated user acceptance testing 	
2.	Why this method? How does this methodology help you answer your research questions?  Observing applicants as they move through and submit the application will allow us to observe and capture any unexpected behavior or errors that arise during user acceptance testing. 
3.	Where are you planning to do your research? Webex Web Conferencing
4.	What will you be testing? Production application
5. If remote: What tool do you plan to use? Webex


## Participants and Recruitment	
1.	Participant criteria: What are you looking for in a participant?	  
**Primary criteria / Must have**
We want to recruit 6 participants that meet the following criteria: 
- Willing to submit an application for the Rogers STEM Scholarship (https://www.va.gov/education/other-va-education-benefits/stem-scholarship/)
- 6 months or less of entitlement remaining or have exhausted their education benefits (can be validated here: https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/)
- Meet any ONE of the following criteria: 
   - Have remaining Post-9/11 (Chapter 33) GI Bill Education Benefits
   - Have exhausted their Post-9/11 (Chapter 33) GI Bill Education Benefits
   - Are a Fry Scholar (https://www.va.gov/education/survivor-dependent-benefits/fry-scholarship/)
- Have previously been enrolled or are currently enrolled in an educational institution using GI Bill education benefits

And 6 more participants that meet the following critieria: 
- Willing to submit an application for the Rogers STEM Scholarship (https://www.va.gov/education/other-va-education-benefits/stem-scholarship/)
- Remaining Post-9/11 (Chapter 33) GI Bill Education Benefits or are a [Fry Scholar](https://www.va.gov/education/survivor-dependent-benefits/fry-scholarship/)
- More than 6 months of entitlement remaining (can be validated here: https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/)
- Have previously been or are currently enrolled in an education institution using GI Bill education benefits

**Secondary criteria / Would like to have** 
None

2.	What is your recruitment strategy? 	
- Draw from the existing recruiting contract - Perigean 
- Draw from professional relationships in existing networks

## When? 	
1.	Timeline: What dates do you plan to do research? 	
Testing will take place between 10/26 and 11/6
2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 	
It is ready right now (10/08)
3. Length of Sessions: How long do you estimate each session will be? 
Sessions should take no longer than 1 hour. We would like a 15 minute buffer between sessions. 
4.	Availability: If applicable, when would you like sessions scheduled?
Monday - Friday 8:30AM-4:00PM EST; If more flexibility required please let me know (turner_desiree@bah.com)
5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 	
Thursday 10/22 or Friday 10/23

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator:	Desiree Turner, turner_desiree@bah.com, 757-375-0662
- Research guide writing and task development (usually but not always same as moderator):	Desiree Turner, turner_desiree@bah.com, 757-375-0662
- Participant recruiting & screening:	Desiree Turner, turner_desiree@bah.com, 757-375-0662 & Perigean
- Project point of contact:	Desiree Turner, turner_desiree@bah.com, 757-375-0662
- Participant(s) for pilot test:	TBD
- Note-takers:	TBD
- Observers:	Amy Knox (knox_amy@bah.com), Darrell Neel (neel_darrell@bah.com), Emma Waters (waters_emma@bah.com), Jen Jones (jones_jennifer2@bah.com), Dan Shawkey (shawkey_daniel@bah.com), Will McCormack (mccormack_will@bah.com)

## Resources	
- Project Brief: 	
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/stem/stem-standalone-10203/10203_product_outline.md
- Convo Guide	
*Discussion guide should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- Synthesis	
*Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 	
- Lessons Learned	
*Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results	
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 	
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
