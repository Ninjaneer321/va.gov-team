---
# Research Plan Metadata
title: "Research Plan for VA Mobile Team, Rx Refill, November 22, 2021"
date: 2021-11-22
last_updated: 2026-02-10
team: "VA Mobile App Team"
product: "VA Health & Benefits Mobile App - Rx Refill"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "A common request in pre-release research and post-launch Veteran feedback has been for Rx Refill functionality in the VA Health & Benefits App. We need to understand the existing standalone Rx Refill app and explore how to expose Rx Refill functionality to Veterans using authenticated mobile apps."
  product_location: "VA Health & Benefits Mobile App"
  user_familiarity: "New - exploring integration of existing Rx Refill app into flagship mobile app"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md"

# Research Design
methodology: "moderated usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - "Understand the Veteran experience using the Rx Refill app as it exists today"
  - "Better understand the whole picture of how Veterans and caretakers manage prescriptions across online and offline touch points"

research_questions:
  - "What native app opportunities are there to improve the experience of managing prescriptions?"
  - "What is helpful about using the existing Rx Refill mobile app?"
  - "What is challenging about using the existing Rx Refill mobile app? How does this compare to using MHV?"
  - "What short and medium term steps can we take to improve on the status quo?"

hypotheses:
  - "We may be able to address Veteran Rx needs with seamless handoff from the Flagship app to the existing Rx Refill app"
  - "There are significant improvements that will need to be made to the Rx Refill app to support this path"
  - "Veterans will have requests to improve the app along several lines: Authentication, Key features requiring transfer to MHV website, Accessibility considerations, General fit and finish"

expected_outcomes: "This study will give us a clear picture of how Veterans navigate Rx Refill today and inform decisions about integration approaches and necessary improvements"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "Must have an iOS or Android mobile device"
    - "Must have VA prescribed medications that need refills"
    - "Must be able to log into MyHealtheVet to manage prescriptions"
    - "Mix of Veterans who do and do not currently use the VA Rx Refill mobile app"
    
  secondary_criteria:
    - "Urban and rural participants"
    - "Age diverse"
    - "Racially diverse"
    - "Education diverse"
    
  screener_questions:
    - question: "Do you have an iOS or Android mobile device?"
      qualifying_response: "Yes"
    - question: "Do you have any VA prescribed medications that you need to get refills for?"
      qualifying_response: "Yes"
    - question: "Are you able to log into MyHealtheVet to manage those prescriptions?"
      qualifying_response: "Yes"
    - question: "Do you use the VA Rx Refill mobile app?"
      qualifying_response: "Mix of yes and no"
      
participants:
  veterans: 5-8
  caregivers: 0
  dependents: 0
  total_recruited: 5-8
  completed_sessions_goal: 5-8
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-11-29"
  pilot_participant: "TBD"
  research_dates: "2021-11-30 to 2021-12-08"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
  - objective: "Logged-in users can update their personal information easily and instantly"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
  - objective: "Veterans and their families trust the security accuracy and relevancy of VA.gov"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Managing my declining health"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md"
    
tags:
  - "AUD: Veterans"
  - "PRDT: VA-mobile-app"
  - "PRDT: Rx-refill"
  - "MHV: Pharmacy"
  - "BNFT: Healthcare"
  - "usability-testing"
  - "moderated"
  - "remote"
  - "authenticated-experience"
  - "mobile"
  - "HDW: Smartphone"
  - "prescription-management"
  - "medication-refill"
  - "app-integration"
---


# Research Plan for VA Mobile Team, Rx Refill, 11/22/21
*Questions about how to set up your research study? Reach out in the #research-ops Slack channel.*

## Background
The VA Health & Benefits App was released in July and has been slowly rolling out to the Veteran population on the Apple and Google app stores. A common request in pre-release research, and post launch Veteran feedback has been for Rx Refill functionality. We're doing some research to better understand the existing stand alone Rx Refill app and explore how we might expose Rx Refill functionality to Veterans using authenticated mobile apps.

[VA: Health and Benefits Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md).

### OCTO Objectives

2. Veterans can manage their health services online
3. Logged-in users can update their personal information easily and instantly
5. Logged-in users have a personalized experience, with relevant and time-saving features
6. Veterans and their families trust the security accuracy and relevancy of VA.gov

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?
Are there moments that matter?

**Taking care of myself**

## Research Goals
What are you trying to learn from this research?

1. Understand the Veteran experience using the Rx Refill app as it exists today.
2. Better understand the whole picture of how Veterans and caretakers manage prescriptions across online and offline touch points.



*Pro tip: Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.*

### Outcome

This study is one of three research efforts to build a complete picture of the trade-offs with different approaches to making Rx Refill available to Veterans on mobile devices. This study will give us a clear picture of how Veterans can navigate Rx Refill today.
- **Usability of VA Rx Refill app**
- Accessibility of VA Rx Refill app (separate study)
- Mechanics of handoff from app to app

### Research questions
- What native app opportunities are there to improve the experience of managing prescriptions?
- What is helpful about using the existing Rx Refill mobile app?
- What is challenging about using the existing Rx Refill mobile app? How does this compare to using MHV?
- What short and medium term steps can we take to improve on the status quo?

### Hypothesis

- We think that we may be able to address Veteran Rx needs with seamless handoff from the Flagship app to the existing Rx Refill app.
- We think that there are significant improvements that will need to be made to the Rx Refill app to support this path.


We suspect that the Veterans will have requests to improve the app along a few lines.

- Authentication
- Key features that require transfer to the MHV website (and authenticating again)
- Accessibility considerations
- General fit and finish (typography, alert and warning presentation, etc.)



## Method
We plan to conduct moderated usability testing with 5–8 Veterans.

We will ask a mix of experienced and (Rx) novice Veterans to walk us through some specific tasks and then follow up with any other ways that they use the app in their lives.


### Location
- Remote Zoom based screen share

### Research materials
For moderated usability tests:
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

## Recruitment

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.

Before writing your recruitment criteria, be sure to review the following resources.
- [Refer to the Perigean Recruitment Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md) to learn how Perigean recruits, screens, and prepares participants for research.
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
We plan to recruit a range of Veterans with mobile devices who have VA medications that they need to manage prescription refills for. We would like to have both experienced and novice users of the VA Rx Refill app. We plan an inclusive recruitment, but intend to address users of assistive technology in a separate study.

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. [Use the recruitment checker on Microsoft Excel teams](https://governmentcio.sharepoint.com/:x:/r/sites/VSATeam/Shared%20Documents/Accessibility/RecruitmentChecker.xlsx?d=we0ffb06d5bac4cd5902c5f8b23fe988c&csf=1&web=1&e=FzYt5t) to understand OCTO's targets for inclusivity. *Note: if you are struggling to access the online teams link; you can also [use the recruitment checker on Google sheets](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) and take a screenshot of your table to share.*

### Recruitment criteria
5–8 Veterans

**Primary criteria (must-haves)**

- Do you have an iOS or Android mobile device?
  - Yes qualifies
- Do you have any VA prescribed medications that you need to get refills for?
  - Yes qualifies
- Are you able to log into MyHealtheVet to manage those prescriptions?
  - Yes qualifies
- Do you use the VA Rx Refill mobile app?
  - Would like a mix of yes and no answers to this question

**Secondary criteria (nice-to-haves)**

- Urban and rural
- Age diverse
- Racially diverse
- Education diverse

## Timeline
We'd like to start sessions in a week
### Prepare
We are testing a production app that is already available through the app stores

Please indicate the date and name of a mock participant for a pilot session.
* Pilot participant email:
* Date and time of pilot session: 11/29/2021

### Research sessions
What dates do you plan to do research?
Tuesday 11/30/2021
Thursday 12/2/2021
Friday 12/3/2021

Tuesday 12/7/2021 (if needed)
Thursday 12/8/2021 (if needed)

### Length of sessions
We think these sessions will take less than an hour

### Availability
When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.*
Please request enough dates and time slots for the number of requested participants. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.).

## Team Roles
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Alex Taylor
- Research guide writing and task development (usually but not always same as moderator):	Alex Taylor
- Participant recruiting & screening: Perigean
- Project point of contact:	Leanna Miller
- Participant(s) for pilot test:
- Note-takers:
- Observers:
