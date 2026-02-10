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

# Research Plan for Authenticated Experience, Profile Editing Evaluation, September 2022

## Background
Accessibility specialists have been advocating for a “one thing per page” pattern for VA.gov forms for the last year. This pattern is known to improve the usability for complex forms by reducing cognitive load, improving error messages, reducing load times and more.

We’re considering this pattern for profile, but we’re not sure if there are actual user problems this would solve since profile has relatively simple forms. This research will help us identify usability problems that would be solved by this approach.

 * [Profile product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)
 * Related [GitHub ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46871)

### OCTO Objectives 
This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) :
* Logged-in users can update their personal information easily and instantly
* Veterans and their families can find a single, authoritative source of information
* Logged-in users have a personalized experience, with relevant and time-saving features

### Veteran Journey
Our product fits into [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) at all stages. Veterans have personal information on file with VA from Starting Up and beyond.

## Research Goals	
1. Learn whether or not our edit-in-place pattern presents major usability problems for people with cognitive disabilities on mobile devices.
2. Identify any other usability hurdles in profile.

**Note:** In this study, we’re going to test with a group of Veterans that would be most likely to have challenges with edit in place functionality: people with cognitive disabilities, those who use assistive technology, and those who have limited screen real estate.  These are the people we are referring to when we say “people” throughout the rest of this document.

### Outcome
The findings from this research will help our team understand how well our current profile editing pattern supports self-service for managing personal information. We’ll use these findings to plan future iterations.

### Research questions
1. What challenges do people encounter related to in-line editing, especially address information and notification preferences?
2. How easily can people understand and navigate address validation?
3. Do people encounter any usability hurdles with updating notification settings?

### Hypothesis
* people will be able to easily update 1-2 field forms (such as phone number) with in-line editing
* People will encounter usability hurdles with more complex forms/flows such as address validation
* People will not encounter significant usability hurdles when updating their notification settings
* If a people can edit their profile without major challenges, we can be more confident our edit-in-place pattern works well for *all* Veterans.

## Method	
We’ll conduct this research through moderated usability testing by having people log into VA.gov on a mobile device.

If we have time in the session, we’ll also review a prototype with the participant.

### Location
The research will be conducted remotely over Zoom, using Perigean’s account.

### Research materials
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/conversation-guide.md)
- [Prototype](https://codepen.io/surfbird/full/vYjxQWy)

## Recruitment	

### Recruitment approach
Our recruitment will focus on people with cognitive disabilities, and people who use assistive technology, as well as groups that have been underrepresented in VA research to date.
  
### Recruitment criteria
|Total requested|Completed sessions|Various|Veterans|Family Member|Caregivers|Service Members|
|:-------------:|:----------------:|:------:|:-----------:|:--------:|:-------------:|:-------------:|
|     12          |       8           |   12     |             |         |       |    |


### Criteria Table 
|                |Moderated   |Cohort 1|Cohort 2|Cohort 3|Cohort 4|Cohort 5|Cohort 6|Cohort 7|Cohort 8|Cohort 9|Cohort 10|
|----------------|:----------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|
|***SEX***       |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |       12     |        |        |        |        |        |        |        |        |        |         |
|Male            |            |        |        |        |        |        |        |        |        |        |         |
|Female          |            |        |        |        |        |        |        |        |        |        |         |
|***LGBTQ+***    |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Gay             |            |        |        |        |        |        |        |        |        |        |         |
|Lesbian         |            |        |        |        |        |        |        |        |        |        |         |
|Bisexual        |            |        |        |        |        |        |        |        |        |        |         |
|Asexual         |            |        |        |        |        |        |        |        |        |        |         |
|Transgender     |            |        |        |        |        |        |        |        |        |        |         |
|Non-Binary      |            |        |        |        |        |        |        |        |        |        |         |
|Gender-fluid    |            |        |        |        |        |        |        |        |        |        |         |
|Queer           |            |        |        |        |        |        |        |        |        |        |         |
|Two-Spirit      |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |       
|***RACE***      |            |        |        |        |        |        |        |        |        |        |         |               
|*Various*       |     7       |        |        |        |        |        |        |        |        |        |         |
|Black           |       1     |        |        |        |        |        |        |        |        |        |         |               
|White           |           |        |        |        |        |        |        |        |        |        |         |                 
|Latinx          |     1      |        |        |        |        |        |        |        |        |        |         |                            
|Asian           |     1       |        |        |        |        |        |        |        |        |        |         |                 
|Native          |     1       |        |        |        |        |        |        |        |        |        |         |                
|Pacific Islander|    1       |        |        |        |        |        |        |        |        |        |         |                 
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |       
|***AGE***       |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |     8       |        |        |        |        |        |        |        |        |        |         |
|18-24 yo        |            |        |        |        |        |        |        |        |        |        |         |
|25-34 yo        |            |        |        |        |        |        |        |        |        |        |         |
|35-44 yo        |            |        |        |        |        |        |        |        |        |        |         |
|45-54 yo        |            |        |        |        |        |        |        |        |        |        |         |
|55+ yo          |      4      |        |        |        |        |        |        |        |        |        |         |
|      ---       |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***BENEFITS***  |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |           |        |        |        |        |        |        |        |        |        |         |
|*No Ben/Ser Exp*|            |        |        |        |        |        |        |        |        |        |         |
|Disability      |            |        |        |        |        |        |        |        |        |        |         |
|Education       |            |        |        |        |        |        |        |        |        |        |         |    
|Employment      |            |        |        |        |        |        |        |        |        |        |         |
|Finances        |            |        |        |        |        |        |        |        |        |        |         |
|Healthcare      |            |        |        |        |        |        |        |        |        |        |         |
|Housing         |            |        |        |        |        |        |        |        |        |        |         |
|Life Insurance  |            |        |        |        |        |        |        |        |        |        |         |
|Memorialization |            |        |        |        |        |        |        |        |        |        |         |
|Pension         |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |      
|***BRANCH***    |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Marine Corps    |            |        |        |        |        |        |        |        |        |        |         |
|Army            |            |        |        |        |        |        |        |        |        |        |         |
|Navy            |            |        |        |        |        |        |        |        |        |        |         |
|Air Force       |            |        |        |        |        |        |        |        |        |        |         |
|Space Force     |            |        |        |        |        |        |        |        |        |        |         |
|Coast Guard     |            |        |        |        |        |        |        |        |        |        |         |
|Nat. Guard      |            |        |        |        |        |        |        |        |        |        |         |
|Pub Hlth Corps  |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***EDUCATION*** |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |       12     |        |        |        |        |        |        |        |        |        |         |
|Elementary      |            |        |        |        |        |        |        |        |        |        |         |
|Intermediate    |            |        |        |        |        |        |        |        |        |        |         |
|GED             |            |        |        |        |        |        |        |        |        |        |         |
|High School     |            |        |        |        |        |        |        |        |        |        |         |
|Some College    |            |        |        |        |        |        |        |        |        |        |         |
|Associate's     |           |        |        |        |        |        |        |        |        |        |         |
|Bachelors       |       |        |        |        |        |        |        |        |        |        |         |
|Masters         |   X     |        |        |        |        |        |        |        |        |        |         |
|Professional    |     X     |        |        |        |        |        |        |        |        |        |         |
|Doctoral        |     X      |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***RESIDENCE*** |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |           |        |        |        |        |        |        |        |        |        |         |
|Urban           |            |        |        |        |        |        |        |        |        |        |         |
|Rural           |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***HARDWARE***  |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |   12 - but must have a mobile device available for session if they are not using assistive technology (see screener questions)       |        |        |        |        |        |        |        |        |        |         |
|Desktop         |            |        |        |        |        |        |        |        |        |        |         |
|Laptop          |            |        |        |        |        |        |        |        |        |        |         |
|Smartphone      |           |        |        |        |        |        |        |        |        |        |         |
|Tablet          |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***WEBSITE***   |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|VA.gov (has acct)|     12       |        |        |        |        |        |        |        |        |        |         |
|VA.gov(no acct) |            |        |        |        |        |        |        |        |        |        |         |
|MyHealtheVet    |            |        |        |        |        |        |        |        |        |        |         |
|Ebenefits       |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |      ---   |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***LOGIN***     |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |          |        |        |        |        |        |        |        |        |        |         |
|DS Logon        |            |        |        |        |        |        |        |        |        |        |         |
|MyHealtheVet    |            |        |        |        |        |        |        |        |        |        |         |
|ID.me           |            |        |        |        |        |        |        |        |        |        |         |
|Login.gov       |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |      ---   |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***ID PROOF***  |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |    12        |        |        |        |        |        |        |        |        |        |         |
|IAL1            |      x      |        |        |        |        |        |        |        |        |        |         |
|IAL2            |            |        |        |        |        |        |        |        |        |        |         |
|IAL3            |            |        |        |        |        |        |        |        |        |        |         |

---

|                                                             |Participants| 
|-------------------------------------------------------------|:----------:|
|***ASSISTIVE TECH***                                         |            | 
|*Various*                                                    |            |
|Font resizing/larger /magnification                                        |      6      |
|Screen reader                                                |     4       |
|Braille terminal                                             |            |
|Speech recognition sftw                                      |            |
|Speech generating device                                     |            |
|Speech to text                                               |            |
|High contrast mode                                           |            |
|Alternative keyboard                                         |            |
|Alternative mouse or stylus                                  |            |
|Keyboard only navigation (no mouse usage)                    |            |
|Switch access, head pointer, or eye tracking                 |            |
|Joystick                                                     |            |
|Teletypewriter or telecommunication device for the deaf (TTY)|            |
|Closed captions                                              |            |
|Amplified telephone                                          |            |
|Hearing aid                                                  |            |
|Cochlear implant                                             |            |
|Cane, walker, guide animal, or other walking aid             |            |
|Wheelchair                                                   |            |
|Prosthetics                                                  |            |
|Wearable tech (not prosthetic)                               |            |
|Augmentive and alternative communication device              |            |
|Sign language interpreter                                    |            |
|Speech-to-speech transliterator                              |            |
|Visual aids                                                  |            |
|Writing on paper                                             |            |
|Typing with phone or tablet and showing it to others         |            |
|Caregiver                                                    |            |
|                           ---                               |     ---    |
|***COGNITIVE IMPAIRMENT and/or FUNCTIONAL DISABILITIES***    |            |
|*Various*                                                    |      12      |
|Traumatic Brain Injury (TBI)                                 |            |
|Post-Traumatic Stress Disorder (PTSD)                        |            |
|Attention-Deficit/Hyperactivity Disorder (ADHD)              |            |
|Autism                                                       |            |
|Vertigo                                                      |            |
|Aphasia                                                      |            |
|Dyslexia                                                     |            |
|Dyscalculia                                                  |            |
|Distractibility                                              |            |
|Memory loss                                                  |            |
|Reading difficulties                                         |            |
|Low tolerance for cognitive overload                         |            |
       

### Screener questions
1. Do you need assistive technology to use the internet such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer? (Proceed to question 1a if yes, 1b if no)

	 1a. Are you able to join the Zoom session using this assistive technology? (Answer should be yes to satisfy criteria for screen reader)

	1b. Are you able to join the Zoom session from a mobile device, or log into VA.gov on a mobile device during the session? (Answer should be yes to satisfy criteria for non-AT users)

2. Do you normally need to resize font or use a magnification tool to see your screen when you are using the internet? (Proceed to question 2a if yes, 2b if no)

	 2a. Are you able to join the Zoom session using the tools you need to see your screen? (Answer should be yes to satisfy criteria for zoom magnification/font resizing)

	2b. Are you able to join the Zoom session from a mobile device, or log into VA.gov on a mobile device during the session? (Answer should be yes to satisfy criteria for non-AT users)

### Additional instructions  
ALL participants need to:
  - ~be willing to log into *their own* VA.gov account and share over Zoom in a web browser window on their device~ Update: we will have participants log into a staging account.
  - Have a working microphone on their device
  - Have Zoom downloaded to their device prior to the session


## Timeline
### Prepare
It’s ready as of 9/15/2022.

* Pilot participant email: john.cater@govcio.com
* Date and time of pilot session:  9/23/2022, 1pm eastern (please book 1 hour)

### Research dates
* Planned dates of research: 9/27-9/29

### Length of sessions
* Session length: 45 minutes for sessions without screenreaders, 75 minutes for sessions with screenreaders.
* Buffer time between sessions: 30 minutes

### Availability
* 9/27 - 9:45am-7:30pm EST
* 9/28 - 7-8am, 9:30am-7:30pm EST
* 9/29 - 10:45am-5:30pm EST
	
## Team Roles		
- Moderator: Liz Lantz, liz.lantz@adhocteam.us, 843-898-4463
- Research guide writing and task development (usually but not always same as moderator): Liz Lantz	
- Participant recruiting & screening:	Perigean
- Project point of contact: Liz Lantz
- Participant(s) for pilot test:	TBD
- Note-takers:	Perigean
- Observers:	
* samara.strauss@va.gov
* christina.gednalske@adhocteam.us
* sharon.kasimo@govcio.com
* adam.whitlock@adhocteam.us
* tom.harrison@adhocteam.us
* john.cater@govcio.com
* angela.fowler@adhocteam.us (only screenreader sessions) 
* erica.sauve@adhocteam.us
