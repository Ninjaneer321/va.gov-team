---
# Research Plan Metadata
title: "Research Plan for Health Enrollment Team, 10-10EZR Usability Study, December 2023"
date: 2023-12-01
last_updated: 2023-12-01
team: "Health Enrollment Team"
product: "10-10EZR Health Benefits Update Form"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans enrolled in VA health care who need to update their personal, insurance, or financial information are burdened with manual processes of calling VA, mailing paper forms, or visiting facilities. This burden is multiplied for Veterans required to provide annual updates."
  product_location: "My Health section of VA.gov (va.gov/my-health/update-benefits-information-form-10-10ezr/introduction)"
  user_familiarity: "New online form (MVP). Veterans may be familiar with 10-10EZ application but 10-10EZR is new for updating after enrollment."
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/EZ(R)%20Update%20Capabilities/10-10EZR%20Product%20Brief%20(standalone%20form).md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: null
    point_of_contact: null
    equipment: null
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test the usability of the prefilled form fields to see if Veterans understand what information needs to be updated, that the information is prefilled and information can be changed"
  - goal_2: "Test the usability of the household financial information section of the form to see if Veterans understand what they need to provide since that section is never prefilled"
  - goal_3: "Determine how a Veteran knows or would like to know they need to update the household financial section"

research_questions:
  - "Do participants understand that information is prefilled?"
  - "Are the alerts about pre-filled information at the beginning of each section effective and understandable for participants?"
  - "Do participants understand that they can change the information that's pre-filled?"
  - "What is the impact on participants who need to update only one section of the form vs. more than one section of the form?"
  - "Do participants understand that they need to provide updated financial information?"
  - "Do the participants understand the impact of not providing an update?"
  - "How do participants approach the financial update section when they have different disability ratings?"
  - "How do participants want to be notified that they need to update their financial information?"
  - "Do participants know what they need to do after encountering the intro page on the form?"
  - "Can participants find the landing page with more information, if prompted?"

hypotheses:
  - "Participants will understand that information is prefilled and be able to update and submit the information"
  - "Participants may be frustrated if they want to only update one section of the form vs. multiple sections because they will have to go through the form linearly"
  - "Participants will understand they need to update financial information"
  - "Participants will understand how not providing an update to financial information will impact their benefits"
  - "Participants with a lower disability rating will be more familiar with the need to keep financial information updated to keep their benefits"
  - "Participants will know what they need to do based on the intro page on the form"

expected_outcomes: "These learnings will allow us to evaluate for additional gaps to address in future iterations of the form. The findings and recommendations will be categorized as to if there are any blockers and what can be addressed by priority and impact."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "stratified sampling by disability rating cohorts"
  
  primary_criteria:
    - "Enrolled in VA health care"
    - "At least 3 are using a mobile device during the session"
    - "At least 2 are using assistive technology"
    - "Cohort 1: 12 participants with VA service-connected disability rating of 50% or higher"
    - "Cohort 2: 12 participants with no VA disability compensation"
    
  secondary_criteria:
    - "At least 2 participants who are biracial"
    - "At least 2 participants who identify as LGBTQ+"
    - "Mix of ages, genders, education levels"
    - "Mix of rural and urban participants"
    
  screener_questions:
    - question: "Are you currently enrolled in VA health care benefits?"
      qualifying_response: "Yes"
    - question: "Do you have a VA service-connected disability rating?"
      qualifying_response: "Used to split into cohorts"
      
participants:
  veterans: 24
  caregivers: 0
  dependents: 0
  total_recruited: 24
  completed_sessions_goal: 14
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-12-15"
  pilot_participant: "Internal team member"
  research_dates: "2023-12-18 to 2024-01-12"
  research_review_submission: "2023-12-08"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase completion rate of online transactions"
    key_results: 
      - "Increase usage of digital, self-service tools"
      - "Increase percent of applications submitted online (vs. paper)"
  - objective: "Enhance Veterans' personalized online experience"
    key_results:
      - "Improve usability of authenticated forms with prefilled data"
      
veteran_journey_phases:
  - "Getting out"
  - "Starting up"
  - "Taking care of myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "10-10EZ Health Care Application research"
    - "Short Form flow research and implementation"
    
tags:
  - "PRDT: 10-10EZR"
  - "PRDT: Health-care-application"
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "DSC: Form-controls"
  - "DSC: Prefill"
  - "DSP: Alert"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "HDW: Screen-reader"
  - "RESRCH: Usability"
  - "RESRCH: Remote"
  - "RESRCH: Moderated"
  - "RESRCH: Evaluative"
---

# Research Plan for usability study on 10-10EZR form (Updates to health benefits information), Health Enrollment Team, December 2023

## Background
The Health Benefits Update Form (10-10EZR) is a new online version of a currently paper-only form. It's used to update personal, insurance, or financial information for Veterans currently enrolled in health care benefits. Most commonly, this includes annual updates for removing a dependent or updating income information for those Veterans who are placed in a Priority Group that requires this. 

We will be usability testing the MVP version of the new online form to ensure it meets the needs of VA.gov users. The form contains 4 sections, and for MVP, must be completed and submitted in its entirety to be processed.

This study will look at the form from the perspective of two cohorts - those with disability ratings over 30% and those without - as we hypothesize these two groups will have very different experiences with this form.

The four main sections are:
- Veteran information
- Household financial information
- Insurance information
- Review




### What problem is your product trying to solve?
Veterans who want to provide updates to their personal information for increasing or maintaining their health benefits are burdened with the manual processes of calling VA, mailing in a paper form and/or visiting a facility. This is driven by the lack of an online experience and pathway to provide these updates at a more convenient time and place for the Veteran. For Veterans who must provide these updates annually, the burden is multiplied. More information available in the [product outline - 10-10EZR Health Benefits Update form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/EZ(R)%20Update%20Capabilities/10-10EZR%20Product%20Brief%20(standalone%20form).md).

### Where is your product situated on VA.gov?
The product will live in the My Health section of VA.gov, but also be referenced by other static, informational pages on VA.gov, outside of the My Health section.

### What is Veterans’ familiarity with this tool?
The EZR is a new online form. Veterans are most likely familary with the 10-10EZ in terms of questions asked and content, however the 10-10EZR is very similar but for updating after enrollment. 

### OCTO Priorities 

The [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) that this research supports are:

Increase 
- Completion rate of online transactions
- Usage of digital, self-service tools
- Percent of applications submitted online (vs. paper)
- Enhance Veterans’ personalized online experience


### Veteran Journey
This product fits into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) during the areas:

- Getting out
- Starting up
- Taking care of myself

## Research Goals	
- Goal 1: **Pre-filled information** - Test the usability of the prefilled form fields to see if Veterans understand what information needs to be updated, that the information is prefilled and information can be changed.
- Goal 2: **Financial information update** - Test the usability of the household financial information section of the form to see if Veterans understand what they need to provide since that section is never prefilled. 
- Goal 3: **Financial information update notification** - Determine how a Veteran knows or would like to know they need to update the household financial section.

### Outcome
These learnings will allow us to evaluate for additional gaps to address in future iterations of the form. The findings and recommendations will be categorized as to if there are any blockers and what can be addressed by priority and impact.


### Research questions
#### Goal 1: **Pre-filled information** - Test the usability of the prefilled form fields to see if Veterans understand what information needs to be updated, that the information is prefilled and information can be changed.

- Do participants understand that information is prefilled?
- Are the alerts about pre-filled information at the beginning of each section effective and understandable for participants?
- Do participants understand that they can change the information that's pre-filled?
- What is the impact on participants who need to update only one section of the form vs. more than one section of the form?

#### Goal 2: **Financial information update** - Test the usability of the household/financial information section of the form to see if Veterans understand what they need to provide since that section is never pre-filled.

- Do participants understand that they need to provide updated financial information?
- Do the participants understand the impact of not providing an update?
- Do the pariticipants struggle because this section isn't prefilled as opposed to other sections?

#### Goal 3: **Disability rating and financial updates** - Determine how disability ratings affect a Veteran's understanding of the financial updates section.

- How do participants approach the financial update section when they have a low disability rating (under 10 percent)?
- How do participants approach the financial update section when they have a high disability rating (above 50 percent)?
- How do participants want to be notified that they need to update their financial information?
- Do participants know what they need to do after encoutering the intro page on the form?
- Can participants find the landing page with more information, if prompted? 

### Hypothesis
- Participants will understand that information is prefilled and be able to update and submit the information.
- Participants may be frustrated if they want to only update one section of the form vs. multiple sections because they will have to go through the form linearly.
- Participants will understand they need to update financial information.
- Participants will understand how not providing an update to financial information will impact their benefits.
- Participants with a lower disability rating will be more familar with the need to keep financial information updated to keep their benefits.
- Participants will know what they need to do based on the intro page on the form.

## Methodology	
- Usability testing - appropriate for evaluative research

### Location
- Remote, moderated via Zoom.

### Research materials
For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-12-EZR%20MVP%20Usability/conversation-guide.md)
- [Link to production](https://va.gov/my-health/update-benefits-information-form-10-10ezr/introduction)
- [Link to recruitment ticket]() 

## Recruitment	

### Recruitment approach
Our intended audience for this research are Veterans and we will be using and leveraging Perigean to recruit participants.

**Veterans: Requesting 24 / completed 14**

- Cohort 1: Requested 12 / completed 7
- Cohort 2: Requdested 12 / completd 7


### Recruitment criteria

**Primary criteria (must-haves)**
- Enrolled in VA health care
- At least 3 are using a mobile device during the session
- At least 2 are using assistive technology
- At least 2 participants who are biracial
- At least 2 participants who identify at LGBTQ+


**Screener questions for all participants / both cohorts:**
- Are you currently enrolled in VA health care benefits?
   	- Yes *(Qualify)*
   	- No *(Disqualify)*

**Screener questions for recruiting 3 mobile users - either cohort:**
- Are you able to join the Zoom session from a smart phone such as a Samsung Galaxy or Apple iPhone? Any kind of smart phone will work, as long as it connects to the internet. 
   	- Yes *(Qualify)*
   	- No *(Disqualify)*
  
**Screener questions for recruiting 2 assistive technology - either cohort:**
- Do you need to use screen reader technology to use the internet, such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer?
    - Yes *(Qualify)*
   	- No *(Disqualify)*

- We want to make sure our website works for people with various levels of experience with screen readers. Please rate your experience level using a screen reader:
  - Response options: Beginner, Intermediate, Advanced
 
- Are you willing to join the Zoom session using this assistive technology?
    - Yes *(Qualify)*
   	- No *(Disqualify)*

- Please list the name of the screen reader technology you will use during the session.
    - Response option: text box


### Cohort 1:
**All participants**
- Do you have a VA service-connected disability rating of 50% or higher?
    - Yes *(Qualify)*
    - No *(Disqualify)*


### Cohort 2:
**All participants**
- Do you get VA disability compensation for a service-connected disability rating?
    - Yes *(Disqualify)*
    - No *(Qualify)*


## Timeline
December or January

Perigean kickoff requested
Preferred date/time: TBD 

### Prepare

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: TBD
* Date and time of pilot session: TBD

### Research sessions
* Planned dates of research: **TBD**




### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 1 hour
* Maximum Sessions per day: 2

### Availability

| **Team Availability** | **Time (ET)** 	|
| --------------------- | --------------------- |
| TBD   	|  11am - 6pm ET 	|



## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Katelyn Caillouet, Jessica Stump, Hieu Vo	
- Research guide writing and task development: Katelyn Caillouet (katelyn.caillouet@agile6.com)
- Participant recruiting & screening: Perigean	
- Project point of contact: Moderators
- Note-takers: Perigean, 10-10 Team
- Participant(s) for pilot test: TBD
- Accessibility specialist (for sessions where support for assistive technology may be needed):	
- Observers: TBD


## Approvals

