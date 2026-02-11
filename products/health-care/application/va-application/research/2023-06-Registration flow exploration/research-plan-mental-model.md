---
# Research Plan Metadata
title: "Research Plan for Health Enrollment Team, 10-10EZ Registration Only Generative Mental Model Study, September 2023"
date: 2023-09-01
last_updated: 2023-09-01
team: "Health Enrollment Team"
product: "10-10EZ Health Care Application"
product_area: "unauthenticated"

# Background Context
background:
  problem_statement: "The online health care application processes all applications as enrollment, but Veterans need a 'registration only' path for specific care scenarios. How can we enable Veterans who want to register for specific care levels to do so transparently while only asking for information required for their circumstance?"
  product_location: "VA.gov health care benefits hub and application page (va.gov/health-care/apply/application/introduction)"
  user_familiarity: "New product feature - exploring registration vs enrollment distinction"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Registration"

# Research Design
methodology: "semi-structured interviews"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Learn if Veterans who have recently started receiving health care benefits are aware of the terms and difference between registration and enrollment as it pertains to them and the process to getting the level of care they want/need"
  - goal_2: "Learn more about Veteran's mental model when applying for health care benefits and the terms they use (apply, enroll, register, etc) and how they see levels of care during the health care application process"
  - goal_3: "Learn more about how Veterans would like to go about applying, discovering eligibility and getting the most health care benefits they qualify for and what amount of information they need to provide in that process"

research_questions:
  - "What is the experience of 'registering only' today?"
  - "Are Veterans aware that they registered or just that they declined enrollment?"
  - "What are the reasons a Veteran would decline to enroll in health care when completing the application?"
  - "Are Veterans aware of the health care differences between enrollment and registration?"
  - "What terms do Veterans use when describing if they are enrolled or registered for health care benefits?"
  - "What is the Veteran's mental model of discovering, getting and keeping health care benefits as they go through the application process?"
  - "What are the Veteran's current pain points with how the health care application impacts the overall benefits journey?"
  - "What do Veterans expect from the order and process of applying (registering or enrolling) for health care benefits?"
  - "When does it make sense to Veterans to go through eligibility based questions? (before, during or after application)"
  - "What other applications/claims/VA services must Veterans interact with that could change their choice from registration to enrollment in the full medical benefits package?"

hypotheses:
  - "Veterans will not use the term 'registration only' when referring to health care benefits, but will be familiar with enrollment and eligibility"
  - "Veterans will use the term registration when they are talking about choosing their main VA medical facility for care, not applying for benefits"
  - "Adding the term/step of 'registration' will add to the confusion around health care benefits"
  - "Not all Veterans can complete the enrollment process in one go, that there are often stops, such as an exam and claims filed in between"

expected_outcomes: "Gain understanding of the current problem space and Veteran's perception of registration and enrollment, check assumptions and terminology used to remain Veteran-centric, develop insights into an ideal state and how Veteran would prefer to navigate the health care benefits application journey, and guide direction in creating the registration flow hypothesis prototype for future studies."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "cohort-based recruitment"
  
  primary_criteria:
    - "Cohort 1: Veterans who visited a VA facility for a medical reason in the past year and chose not to enroll in health care benefits package"
    - "Cohort 2: Veterans who applied within the past 3 years and are currently enrolled in and using their health care benefits"
    - "Mix of participant ages with at least 4 participants over 55+"
    - "At least 3, no more than 7, participants who are women"
    - "All participants have less than a Bachelor's Degree education level"
    - "No more than 2 participants who are White (mix of other demographics)"
    
  secondary_criteria:
    - "Diverse demographic representation"
    
  screener_questions:
    - question: "Have you visited a VA facility for a medical reason in the past year and choose not to enroll in the health care benefits package?"
      qualifying_response: "Yes for Cohort 1"
    - question: "Have you applied within the past 3 years and are currently enrolled in and using your health care benefits?"
      qualifying_response: "Yes for Cohort 2"
      
participants:
  veterans: 16
  caregivers: 0
  dependents: 0
  total_recruited: 16
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-09-12"
  pilot_participant: "TBD"
  research_dates: "2023-09-13 to 2023-09-25"
  research_review_submission: "2023-09-01"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhance Veterans' personalized online experience"
    key_results: 
      - "Enable Veterans to access appropriate levels of health care based on individual needs"
  - objective: "Fast-track disability claims, starting with PACT Act claims"
    key_results:
      - "Support Veterans navigating health care in conjunction with disability claims"
      
veteran_journey_phases:
  - "Getting out"
  - "Starting up"
  - "Taking care of myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Health care application"
  - "PRDT: 10-10EZ"
  - "PRDT: Registration"
  - "research-method: interviews"
  - "research-method: semi-structured"
  - "research-method: moderated"
  - "research-method: generative"
  - "mental-models"
  - "health-enrollment"
  - "terminology"
  - "eligibility"
  - "service-connected"
---

# Research Plan for "registration only" generative mental model study [Health Enrollment Team, 10-10EZ, August 2023]

## Background
The online health care application today processes all applications as enrollment. With regards to regulation § 17.37 Enrollment not required—provision of hospital and outpatient care to veterans which is being called the "registration only" path. This has a mix of eligibility criteria or scenarios for the Veteran to meet and a mix of what type of benefits they would be receiving - ranging from care for one medical need to the "full medical benefits package". 

How might we enable Veterans who simply want to "register" for a specific level of care — up to and including the full medical benefits package — do that instead of processing all applications as enrollment applications? The outcomes of this initiative including getting Veterans access to the health care benefits for their needs in a transparent and simple process while asking only for the information required for their circumstance (future "short form" growth)

This is a generative study to gain an understanding of the current mental model of Veterans in regards to different benefit types of health care coverage.

- [Link to product initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Registration).

### OCTO Priorities 

Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) does this research support? Work with your VA lead and product manager as needed.

- Enhance Veterans’ personalized online experience
- Fast-track disability claims, starting with PACT Act claims 


### Veteran Journey
- This fits across the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from getting out to aging.
- This impacts a **key moment that matters** in that Veterans need to select the health care coverage according to their individual needs and preferences and that is the best fit for them. 


## Research Goals	

Learn if Veterans who have recently started receiving health care benefits are aware of the terms and difference between registration and enrollment as it pertains to them and the process to getting the level the care they want/need.

Learn more about Veteran's mental model when applying for health care benefits and the terms they use (apply, enroll, register, etc) and how they see levels of care during the health care application process.

Learn more about how Veterans would like to go about applying, discovering eligibility and getting the most health care benefits they qualify for and what amount of information they need to provide in that process. 


### Outcome
We will use these findings to:
- Gain more understanding of the current problem space and Veteran's perception of registration and enrollment
- Check assumptions and terminology used to remain Veteran-centric 
- Develop insights into an ideal state and how Veteran would prefer to navigation the health care benefits application journey
- Guide our direction in creating the registration flow hypothesis prototype and future study for next steps

### Research questions

Our goal is to learn if Veterans who have recently started receiving health care benefits are aware of the terms and difference between registration and enrollment as it pertains to them.
- What is the experience of "registering only" today?
- Are Veterans aware that they registered or just that they declined enrollment?
- What are the reasons a Veteran would decline to enroll in health care when completing the application?

Learn more about Veteran's mental model when applying for health care benefits and the terms they use (apply, enroll, register, etc) and how they see levels of care during the health care application process.
- Are Veterans aware of the health care differences between enrollment and registration?
- What terms do Veterans use when describing if they are enrolled or registered for health care benefits?
- What is the Veteran's mental model of discovering, getting and keeping health care benefits as they go through the application process?

Learn more about how Veterans would like to go about applying, discovering eligibility and getting the most health care benefits they qualify for and what amount of information they need to provide in that process. 
- What are the Veteran's current pain points with how the health care application impacts the overall benefits journey?
- What do Veterans expect from the order and process of applying (registering or enrolling) for health care benefits?
- When does it make sense to Veterans to go through eligibility based questions? (before, during or after application)
- What other applications/claims/VA services must Veterans interact with that could change their choice from registeration to enrollment in the full medical benefits package?


### Hypothesis
- We assume that Veterans will not use the term "registration only" when referring to health care benefits, but will be familiar with enrollment and eligibility.
- We assume that Veterans will use the term registration when they are talking about choosing their main VA medical facility for care, not applying for benefits. 
- We assume adding the term/step of "registration" will add to the confusion around health care benefits. 
- We assume not all Veterans can complete the enrollment process in one go, that there are often stops, such as an exam and claims filed in between. 


## Methodology	
- Semi-structured interviews - appropriate for generative research



Additional desk research will be conducted to supplement these interviews:
- Google analytics path and keyword study (enter ticket numbers here)
- VSignals analysis around keywords (TBD)


### Location
Remote via Zoom for the interviews

### Research materials

- [Link to conversation guide - cohort 1 - declined enrolment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-06-Registration%20flow%20exploration/conversation-guide-mental-model-cohort1.md) 
- [Link to conversation guide - cohort 2 - recently enrolled](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-06-Registration%20flow%20exploration/conversation-guide-mental-model-cohort2.md)

- [Recruitment ticket](url)
	
## Recruitment	

### Recruitment approach

Our intended audience for this research are Veterans and we will be using and leveraging Perigean to recruit participants.

### Recruitment criteria

**16 requested; 8 requested per cohort**
10 completed; 5 completed per cohort

**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 


**Veterans**

- Mix of participant ages 
- At least 4 participants over 55+
- At least 3, no more than 7, participants who are women
- All particpants have less than a Bachelor's Degree Education level 
- No more than 2 participant who are White (mix of other demographics)


**Screener Questions**

Cohort 1: 
- Have you visited a VA facility for a medical reason in the past year and **choose not to enroll** in the health care benefits package? [answer should be yes to qualify.]
- Examples of "medical reason" from screener question -- possible examples include for a compensation and pension exam, toxic exposure screening, eligibility assessment or clinical evaluation, mental health care, care only for your service connected disability or emergency care. 


Cohort 2:
- Have you applied within the past 3 years and are currently enrolled in and using your health care benefits? [answer should be yes to qualify.]



## Timeline

September 13 - September 22, 2023



### Prepare
* Pilot participant email: 
* Date and time of pilot session: 


### Research sessions
* Planned dates of research:
September 13 - September 22, 2023



### Length of sessions
* Session length:  < 1 hour
* Buffer time between sessions: 1 hour
* Maximum Sessions per day: 3


### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.



### Availability

| **Team Availability** | **Time (ET)** 	|
| --------------------- | ----------------------|
| September 13, 2023 	| 12pm ET - 7pm ET |
| September 14, 2023 	| 12pm ET - 7pm ET |
| September 15, 2023 	| 1pm ET - 4pm ET 	|
| September 18, 2023 	| 12pm ET - 7pm ET 	|
| September 20, 2023 	| 12pm ET - 7pm ET 	|
| September 21, 2023 	| 12pm ET - 7pm ET 	|
| September 22, 2023 	| 1pm ET - 4pm ET 	|
| September 25, 2023 	| 12pm ET - 7pm ET 	|





Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderators: Jessica Stump (jessica.stump@adhocteam.us), Katelyn Caillouet (katelyn.caillouet@agile6.com) 
- Research guide writing and task development (usually but not always same as moderator): Moderators
- Participant recruiting & screening: Perigean
- Project point of contact: Moderators	
- Participant(s) for pilot test: 
- Accessibility specialist (for sessions where support for assistive technology may be needed):
- Note-takers:	Perigean and 1010 Health Enrollment Team
- Observers: [link to sign up post on Slack](https://dsva.slack.com/docs/T03FECE8V/F05RF4YRU4U)


**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side


  ## Approvals

- Reviewed and approved by Kristen McConnell on September 1, 2023
