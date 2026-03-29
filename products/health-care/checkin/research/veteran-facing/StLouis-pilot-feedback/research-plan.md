---
# Research Plan Metadata
title: "Research Plan for Check-in Team, St. Louis Pilot Veteran Feedback, March-April 2022"
date: 2022-04-25
last_updated: 2022-04-25
team: "Healthcare Experience - Check-in"
product: "Patient Check-in"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Gather feedback on the pre-check-in and day of check-in experiences from Veterans at pilot locations in St. Louis. The check-in team is reimagining the experience between scheduling a medical appointment and having the appointment, enabling Veterans to review information, confirm appointments, and check in via mobile device."
  product_location: "VA.gov check-in and pre-check-in experience"
  user_familiarity: "Pilot release - limited locations with live pre-check-in and mobile check-in"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md"

# Research Design
methodology: "in-person UAT and intercept interviews"
research_format: 
  location: in-person
  in_person_details:
    facility: "St. Louis area - CBOC, Annex, and John J. Cochran Veterans Hospital"
    point_of_contact: "Clinic staff coordination"
    equipment: "Veterans' personal mobile phones, posters"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Conduct user acceptance testing to evaluate if pre-check-in and check-in processes are functioning as planned at pilot locations in St. Louis"
  - goal_2: "Understand Veterans' feelings toward pre-check-in and checking in with their mobile phones"
  - goal_3: "Understand if the new low vision poster is easier to use and addresses pain points from earlier versions"

research_questions:
  - "Are Veterans able to complete pre-check-in successfully from home prior to an appointment?"
  - "What are Veterans expectations for mobile check-in if they have already completed pre-check-in?"
  - "Are Veterans able to utilize the new mobile check-in solution without intervention from MSAs?"
  - "Does the low-vision poster clearly communicate the need to wait for a link and offer guidance on scanning QR codes?"
  - "After a Veteran utilizes the new mobile check-in solution, are they called back for their appointment without talking to an MSA?"

hypotheses:
  - "Veterans successfully completed pre-check-in from the comfort of their homes"
  - "Veterans will correctly assume that they still need to complete mobile check-in even if they completed pre-check-in"
  - "The updated poster successfully communicates the check-in process and enables low-vision Veterans to understand its contents"

expected_outcomes: "Use feedback to improve pre-check-in and mobile check-in experiences, validate poster changes, and identify improvements for broader rollout"

# Recruitment & Participants
recruitment:
  recruiting_partner: "On-site intercepts with clinic staff coordination"
  approach: "intercept interviews at pilot sites"
  
  primary_criteria:
    - "Veterans arriving for appointments at St. Louis pilot locations"
    - "Veterans who have used pre-check-in and/or mobile check-in"
    - "Mix of different clinic types (CBOC, Annex, Hospital)"
    
  secondary_criteria:
    - "Veterans with low vision (if available)"
    - "Veterans with multiple appointments in one day"
    
  screener_questions:
    - question: "Did you complete pre-check-in before today's appointment?"
      qualifying_response: "Yes or No - both are valuable for feedback"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: ""
  pilot_participant: "N/A - intercept study"
  research_dates: "2022-04-25 to 2022-04-27"
  research_review_submission: ""
  
session_details:
  duration_minutes: 15
  buffer_minutes: 0
  max_sessions_per_day: 10
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Increase usage of digital self-service tools"
      - "Increase completion rate of online transactions"
  - objective: "Logged-in users have a personalized experience"
    key_results:
      - "Decrease time to successfully complete and submit online transactions"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Living civilian life"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/veteran-facing/phase-2-3-4"
    
tags:
  - "health-care"
  - "patient-check-in"
  - "PCI"
  - "HCE"
  - "check-in"
  - "pre-check-in"
  - "pilot"
  - "St-Louis"
  - "in-person"
  - "UAT"
  - "moderated"
  - "veterans"
  - "feedback"
  - "intercept-interviews"
  - "mobile"
  - "low-vision"
  - "accessibility"
  - "posters"
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Check-in"
study: St. Louis Pilot Feedback
type: UAT
---

# Research Plan for Check-in Team

# Research Plan: St. Louis Visit to Gather Feedback on Pilot from Veterans
March 2022

## Background
The check-in team is reimagining the experience between a Veteran scheduling a medical appointment and having their appointment. In particular, we are creating portions of the ecosystem that enable a Veteran to:
- review and confirm the following information prior to an appointment (also known as pre-check-in):
  - confirming the appointment.
  - reviewing contact information.
  - reviewing next of kin information.
  - reviewing emergency contact information.
  - answer health questionnaires (future feature).
- utilize their mobile device to check-in (letting the VA know that they have arrived for their appointment) for a medical appointment via VA.gov. 

With this round of research, we are looking to gather feedback on the pre-check-in and day of check-in experiences from Veterans at pilot locations across the St. Louis area. 

To date, we haven’t spoken with any Veterans who completed the live pre-check-in experience. Within this study, we want to understand how the pre-check-in experience was perceived by Veterans, especially when combined with check-in (letting the VA know that they have arrived for their appointment). It is hard to recruit Veterans who completed pre-check-in remotely utilizing our Perigean pool of participants, since we are at such limited locations. This is why we are interested in going on-site to intercept Veterans, who are more likely to have completed pre-check-in.

While we previously observed Veterans using mobile check-in on-site, we only visited a [small pain clinic](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/veteran-facing/phase-2-3-4) that averaged 8 patients per day. Therefore, we are interested in observing at different locations (CBOC, annex, and hospital) with a wider array of set-ups, such as a larger patient volume or shared waiting room. It is also important to observe in-person, because check-in is very time sensitive and its success depends upon factors located in the physical space. For instance, Veterans begin the workflow by viewing a poster on the wall and we recently made changes to the poster. Seeing Veterans interact with the poster will show if the changes we made were successful or if problem areas still exist.

During the recent spike in COVID cases over the past few months, we attempted to gather feedback from Veterans at the pilot locations remotely utilizing Medical Support Assistants (MSA) as researchers. This methodology proved to be difficult, which is another reason we now plan to gather feedback on-site. 

The staff’s experience with check-in is just as important as the Veteran experience, so we also plan to gather [staff feedback on this research trip](link to research plan].


### OCTO Objectives
This research supports the following objectives:
- Veterans can manage their health services online
- Logged-in users have a personalized experience, with relevant and time-saving features
- Increase the completion rate of online transactions
- Increase usage of digital, self-service tools 
- Decrease time to successfully complete and submit online transactions

### Veteran Journey
The veteran check-in for a medical appointment fits within the "Taking Care of Myself" of the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf).

## Research goals
- Conduct user acceptance testing to evaluate if pre-check-in and check-in processes are functioning as planned at a variety of pilot locations in St. Louis.
- Understand Veterans' feelings toward pre-check-in and checking in with their mobile phones.
- Understand if the new low vision poster is easier to use, addresses pain points from earlier versions, and identify improvements (if any).

### Research questions
- This research study should cover:
- Are Veterans able to complete pre-check-in successfully from the comfort of their own homes prior to an appointment?
- What questions or problems did Veterans have (if any) when they were completing pre-check-in?
- What are Veterans expectations for mobile check-in if they have already completed pre-check-in?
- Are Veterans able to utilize the new mobile check-in solution without intervention from MSAs? 
	- Does the low-vision poster address the following pain points observed from the earlier poster (if at all): 
		- Clearly communicates the need to wait for a link to continue the check-in process
		- Offers guidance on how to scan a QR code/send a text to initiate check-in 
	- Are veterans able to complete the task with the poster? 
		- If any Veterans with low vision are observed, are they able to complete the task with the poster?
- Are the identity verification steps clear to the Veteran?
	- How are the read-only contact, next of kin (NOK), and emergency contact information review features being used?
	- How is the process for checking in for multiple appointments within one day received?
- Is all the information on the confirmation page helpful?
- After a Veteran utilizes the new mobile check-in solution, are they called back for their appointment without having to talk to an MSA?
- How do Veterans feel about the pre-check-in and mobile check-in solution?

### Hypothesis
- Veterans successfully completed pre-check-in from the comfort of their homes.
- Veterans will be able to articulate any questions or problems that arose when completing pre-check-in.
- Veterans will correctly assume that they still need to complete mobile check-in even if they completed pre-check-in.
- The Veterans will successfully check-in via their mobile phone, and verify their identities without additional points of friction.
- The updated poster successfully communicates the need to wait for a link to continue the check-in process, offers guidance on how to scan a QR code/send a text to initiate check-in, and enables low-vision Veterans to understand its contents. 
- The Veterans find the contact, NOK, and emergency contact information easy to review and helpful.
- The Veterans will be able to understand check-in for multiple appointments within one day.
- The next steps displayed on the confirmation page are understandable and useful to the Veteran.
- Veterans who confirm that their contact, NOK, and emergency contact information are up-to-date should not have to interact with an MSA prior to their appointment, unless they need their insurance reviewed.
- Veteran responses will indicate that the pre-check-in and mobile phone check-in solutions are useful and do not negatively impact experience.


### Location
The research will be conducted at a CBOC, Annex, and certain departments within John J. Cochran Veterans Hospital.
	
### Recruitment approach
We will observe/intercept Veterans during their visit.

## Timeline
Research: 2-3 full days onsite during the week of April 25th.

## Team Roles	
- Moderator: TBD (2-3 team members) 
- Research guide writing and task development: Kristen McConnell

## Methodology and recruitment: Go to site and observe/interview Veterans
- 2-3 team members travel to a St.Louis CBOC, Annex, and certain departments within John J. Cochran Veterans Hospital.
- Work with staff to identify high-volume days for researchers to attend, so we can maximize the numbers of possible intercept interviews.
	- Work with clinic staff to determine the best approach to intercept Veterans.
	- Aim to intercept at least 5-10 Veterans as they enter the clinic before they check-in for their appointment.
- Ask Veterans if they completed pre-check-in, then ask follow-up questions.
- Watch the Veteran complete check-in on their mobile phone, then ask follow-up questions.
- Utilize Net Promoter Score (NPS) in conjunction with qualitative questions to evaluate Veteran experiences. NPS can be used over time to see fluctuations in the experience, but will not be the only user experience metric evaluated.
