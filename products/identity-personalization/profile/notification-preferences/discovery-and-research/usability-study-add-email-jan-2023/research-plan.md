---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience, Add Email Notifications, January 2023"
date: 2023-01-01
last_updated: 2023-01-24
team: "Authenticated Experience"
product: "Profile - Notification Preferences"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "As notification settings grow with additional channels and notifications, we need to evaluate how the current auto-save pattern works for users and determine if the editing model needs to change."
  product_location: "VA.gov Profile > Notification settings section"
  user_familiarity: "Iteration - evaluating existing pattern with expanded notifications"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/README.md"

# Research Design
methodology: "Remote moderated usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Learn how single page, auto-save works for users when all known notifications are represented"
  - goal_2: "Learn what information needs to be surfaced to make current settings and options clear"

research_questions:
  - "In our current auto-save pattern, how easily are people able to find and interact with relevant notifications when there are more than 4 notifications and multiple channels?"
  - "Does the auto-save functionality present any usability hurdles for people?"
  - "Does a read/edit pattern make editing easier than the auto-save pattern?"
  - "What level of information do people need to decide whether they want to edit/update their preferences?"
  - "Are mobile and desktop views equally usable?"

hypotheses:
  - "The auto-save design will allow people to understand their options and read through the list of notifications with relative ease"
  - "The auto-save function will cause minor confusion for some users because they want to press a button to confirm a change"
  - "Users will want to quickly understand whether a setting is turned on or off, and by what channel, without clicking - this will be more intuitive with auto-save than read/edit model"

expected_outcomes: "This research will help us determine if we need to change our editing model in the next design iteration of notification settings."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Veterans with VA health care, cognitive disabilities, 55+"
  
  primary_criteria:
    - "Must be Veterans"
    - "Must have used My HealtheVet within last 12 months"
    - "Must have received text message or email notification from VA within last 12 months"
    - "Must require screenreader (recruit 4 participants)"
    
  secondary_criteria:
    - "Must be over age 55 (recruit 6)"
    - "Have identified cognitive impairment (recruit 8)"
    - "Must identify as other than Caucasian (recruit 6)"
    - "Must identify as gender other than male (recruit 6)"
    
  screener_questions:
    - question: "Have you signed into the My HealtheVet website at least once in the last 12 months?"
      qualifying_response: "Yes"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-01-17"
  pilot_participant: "Shane Strassberg (shane.strassberg@va.gov)"
  research_dates: "2023-01-19 to 2023-01-24"
  research_review_submission: "2023-01-01"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhance Veterans' personalized online experience"
    key_results: 
      - "Improve notification settings usability"
  - objective: "Integrate the health portal features into VA.gov"
    key_results:
      - "Support MHV notification settings in VA.gov profile"
      
veteran_journey_phases:
  - "Starting Up"
  - "Living Civilian Life"
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/README.md"
    
tags:
  - profile
  - notification-preferences
  - usability-testing
  - email
  - authenticated-experience
  - notifications
  - communication-preferences
  - authenticated
  - research-plan
  - "profile"
  - "notification-preferences"
  - "usability-testing"
  - "authenticated-experience"
---

# Research plan for Authenticated Experience, Add Email Notifications, January 2023
## Background
We know we will need to support additional channels and notifications within our Notification settings section in the near future. We already know need to make some design updates related to the input type and have better separation of notification items (research finding), but we’re not sure how the current auto-save pattern will work for users as the list of notifications grows, and new channels are added.

In order to make this determination, we need to get our existing pattern in front of users, with all the notifications we’re aware of today. 

- [Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/README.md)
- [Research brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/README.md)

### OCTO Objectives 
This research supports the following 2023 OCTO objectives:
1. Enhance Veterans’ personalized online experience
2. Integrate the health portal features into VA.gov

### Veteran Journey
VA notifications cover a broad spectrum of VA services, and managing settings is something Veterans may do at any stage from Starting Up through Aging.

## Research goals
1. Learn how our single page, auto-save works for users when all known notifications are represented. 
2. Learn what information needs to be surfaced make the current settings and options clear to people.

### Outcome
This research will help us determine if we need to change our editing model in the next design iteration of our notification settings feature.

### Research questions
1. In our current auto-save pattern, how easily are people able to find and interact with relevant notifications when there are more than 4 notifications, and multiple channels?
2. Does the auto-save functionality present any usability hurdles for people?
3. Does a read/edit pattern make editing easier than the auto-save pattern?
4. What level of information do people need in order for them to decide whether they want to edit/update their preferences?
5. Are mobile and desktop views equally usable?

### Hypothesis
1. The auto-save design will allow people to understand their options and read through the list of notifications with relative ease.
2. The auto-save function will cause minor confusion for some users because they want to be able press a button to confirm a change.
3. Users will want to quickly understand whether a setting is turned on or off, and by what channel the notification will be sent (email or text) without having to click on something to see it. This will be more intuitive with the auto-save pattern than the read/edit model.

## Methodology	
This will be a moderated usability study conducted remotely over Zoom.

### Research materials

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/conversation-guide.md)
- [Autosave prototype](https://codepen.io/surfbird/full/vYaxzMW)
- [Read/edit prototype](https://codepen.io/surfbird/full/PoBpwzO)
	
## Recruitment	

### Recruitment approach
The audience for our research will be Veterans with VA health care with cognitive disabilities who are 55+.	

We’ll use Perigean to recruit participants.

### Recruitment criteria
We’d like to recruit 12 Veterans for a total of 6-8 completed sessions.

#### Primary criteria
**All participants:**
- Must be Veterans 
- Have used My HealtheVet within the last 12 months
- Have received a text message or email notification from VA within the last 12 months

**Some participants:**
- Must require screenreader software to use computers and mobile devices (recruit 4 participants total)
- Must be over the age of 55 (recruit 6 participants in total)
- Have an identified cognitive impairment (recruit 8 in total)
- Must identify as other than Caucasian (recruit 6 in total)
- Must identify as a gender other than male (recruit 6 in total)
- Must be willing to join from a mobile device (recruit 6 in total)
- Must be willing to join from a desktop device (recruit 6 in total)

#### Screener questions to target criteria not captured in the recruitment sign-up survey:
1. Have you signed into the My HealtheVet website at least once (this could be at a VA clinic, hospital, or VA community care provider) in the last 12 months? 
- If yes, go to question 2. 
- If no, disqualify
2. Have you received text messages or email notifications from VA within the last 12 months?
- If yes, go to question 2. 
- If no, disqualify
3.  Do you need to use assistive technology to use the internet such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer? (Proceed to question 3a if yes, 3c if no)

	 3a. Are you able to join the Zoom session using this assistive technology? (Answer should be yes to satisfy criteria for screen reader)
	
	3b. Please list the name of the assistive technology or software you will use during the session.

	3c. Are you able to join the Zoom session from a smart phone such as a Samsung Galaxy or Apple iPhone? Any kind of smart phone will work, as long as it connects to the internet. (Answer should be yes to satisfy criteria for 6 mobile users)

## Timeline
### Prepare
Our research artifacts, including the prototype, will be complete by January 16.
* Pilot participant email: shane.strassberg@va.gov
* Date and time of pilot session:  1/17/2023, 11am

* **We would like to request a kickoff call with Perigean before recruiting begins to align on research goals, recruitment criteria, and terminology for screener questions in the survey and emails that will be sent to Veterans.**
	* Available times for kickoff call:
	* Wednesday, January 11, between 12:30-3pm
	* Thursday, January 12, between 10:30-11:30, or 1-4pm 
	* Friday, January 13 between 11am-1pm

### Research sessions
* Planned dates of research: Jan 19-24

### Length of sessions
* Session length: 30-45 minutes
* Buffer time between sessions: 30 minutes
* Maximum Sessions per day: 4

### Availability
All times are in eastern time:
- Jan 19th, 9:30am-4:30pm
- Jan 20, 8-4pm (no screenreader sessions before 9am)
- Jan 23, 9:30am-5pm, 7:30pm-9pm (no screenreader sessions after 5pm)
- January 24, 6:30am-7:30am, 10am-4pm, 7:30pm-9pm (no screenreader sessions after before 10am or after 5pm)

	
## Team Roles	
Please list the people who will be serving in each role.	
- Moderator: Liz Lantz, liz.lantz@adhocteam.us, 843-898-4463
- Research guide writing and task development: Liz Lantz
- Participant recruiting & screening: Perigean
- Project point of contact: Liz Lantz
- Accessibility specialist (add to invites for screenreader sessions only): Josh Kim, josh.kim@adhocteam.us 
- Participant(s) for pilot test:	Shane Strassberg
- Note-takers: Perigean
- Observers:	
	- samara.strauss@va.gov
	- adam.whitlock@adhocteam.us
	- tom.harrison@adhocteam.us
	- florence.mccafferty@agile6.com 
	- berni.xiong@agile6.com
	- beverly.nelson@va.gov
	- melanie.jones@oddball.io 
