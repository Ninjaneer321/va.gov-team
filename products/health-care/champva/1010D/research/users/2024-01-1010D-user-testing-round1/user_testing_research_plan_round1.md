---
# Research Plan Metadata
title: "User Testing Research Plan for IVC Team, Form 10-10D, December 2023"
date: 2023-12-01
last_updated: 2023-12-01
team: "Integrated Veteran Care (IVC)"
product: "Form 10-10D CHAMPVA Application"
product_area: "authenticated and unauthenticated"

# Background Context
background:
  problem_statement: "Veterans and family members currently must complete CHAMPVA Form 10-10D as a fillable PDF and mail it in, creating a burdensome application process that needs to be digitized and streamlined."
  product_location: "VA.gov health care benefits section - CHAMPVA application"
  user_familiarity: "New digitized product - transforming existing PDF form into online application"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/product-outline.md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine whether or not the flow and copy in the 10-10D prototype are usable and understandable for those filling out the form on their own behalf and those filling it out for someone else"
  - goal_2: "Determine whether or not the flow and copy are usable and understandable for participants who do have other forms of health insurance and those who don't have other forms of health insurance"
  - goal_3: "Determine whether or not the prototype is usable and understandable in both an authenticated and unauthenticated state"

research_questions:
  - "Are participants able to use and understand the partially pre-populated form as an authenticated user?"
  - "Are participants able to use and understand the form as an unauthenticated user?"
  - "Are participants able to use and understand the form when filling it out for themselves and when filling it out for someone else?"
  - "Are participants able to easily add more than one applicant for the form?"
  - "What are opportunities to streamline the flow and make the form feel less redundant for users?"
  - "Are participants able to easily understand how to upload supplementary documents and why they're being asked for those documents?"
  - "Do participants who have other health insurance understand why they are asked to fill out additional information and add additional documents?"
  - "What is the overall sentiment about the experience?"

hypotheses:
  - "Users will be able to navigate through the form relatively easily but may have issues understanding why they're asked for certain information including sponsor's date of death, whether the sponsor died during service, and contact information"
  - "Users may find redundancy in information such as asking for address, email address, and phone number for each applicant"
  - "Users may have difficulty understanding their progress through the form and how to correctly report other insurance information"

expected_outcomes: "The findings will provide insights needed to iterate upon and refine our initial prototype of Form 10-10D and demonstrate where copy needs to be rewritten to enhance clarity."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Maximum variation sampling for Veterans, spouses, and family caregivers eligible for CHAMPVA benefits"
  
  primary_criteria:
    - "At least 4 Veterans"
    - "At least 10 spouses, children, or caregivers of Veterans"
    - "25% on phone or tablet, 75% on desktop"
    - "At least 8 participants age 55-64+"
    - "At least 8 participants have cognitive disability"
    - "At least 4 participants live in a rural area"
    - "At least 4 participants have no degree"
    
  secondary_criteria:
    - "At least 2 participants are women"
    - "At least 1 participant is an expat (living abroad)"
    - "At least 3 participants are Black, at least 2 Hispanic, at least 1 Asian, at least 1 Native"
    - "At least 1 participant is gay, lesbian, or bisexual"
    - "At least 1 participant is transgender, nonbinary, gender fluid, gender queer, Two-Spirit, or another gender beyond man or woman"
    - "At least 3 participants use screen readers, at least 2 use some other kind of assistive technology"
      
participants:
  veterans: 4
  caregivers: 10
  dependents: 1
  total_recruited: 20
  completed_sessions_goal: 15
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "TBD"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 90
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhance Veterans' personalized online experience"
  - objective: "Drive OIT's Digital Transformation Strategy"
      
veteran_journey_phases:
  - "Putting down roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://www.va.gov/find-forms/about-form-10-10d/"
    - "https://www.va.gov/health-care/family-caregiver-benefits/champva/"
    
tags:
  - "health-care"
  - "CHAMPVA"
  - "benefits-forms"
  - "10-10D"
  - "usability-testing"
  - "remote-moderated"
  - "authenticated"
  - "unauthenticated"
  - "caregivers"
  - "family-members"
  - "veterans"
  - "prototype-testing"
  - "health-insurance"
  - "document-upload"
  - "assistive-technology"
  - "screen-reader"
  - "cognitive-disability"
  - "form-digitization"
---

# User Testing Research Plan for Integrated Veteran Care (IVC) Team, Form 10-10D, December 2023
**This file IS NOT ready for review outside the IVC forms team.**

## Background
This research is to be conducted on a protoype of [Form 10-10D](https://www.va.gov/find-forms/about-form-10-10d/), which is a component of the application for [CHAMPVA benefits](https://www.va.gov/health-care/family-caregiver-benefits/champva/). At the time this research plan is being written, Form 10-10D is a fillable PDF that applicants must print and mail in. The overall goal of the [project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/product-outline.md) is to create a fully digitized form that Veterans and/or family members can use to streamline their application process.

The purpose of this research is to explore the usability of our prototyped Form 10-10D and identify opportunities to improve the experience. Based on participant feedback, we will iterate on the prototype and implement it on va.gov.

### OCTO Priorities 
1. Enhance Veterans’ personalized online experience
2. Drive OIT’s Digital Transformation Strategy

### Veteran Journey
- Putting down roots
  - Moment: taking care of my family

## Research Goals	
The goals of this research are to:

1. Determine whether or not the flow and copy in the 10-10D prototype are usable and understandable for those filling out the form on their own behalf and those filling it out for someone else
2. Determine whether or not the flow and copy are usable and understandable for participants who do have other forms of health insurance and those who don't have other forms of health insurance
3. Determine whether or not the prototype is usable and understandable in both an authenticated and unauthenticated state

### Research questions
1. Are participants able to use and understand the partially pre-populated form as an authenticated user?
2. Are participants able to use and understand the form as an unauthenticated user?
3. Are participants able to use and understand the form when filling it out for themselves and when filling it out for someone else?
4. Are participants able to easily add more than one applicant for the form?
5. What are opportunties to streamline the flow and make the form feel less redundant for users?
6. Are participants able to easily understand how to upload supplementary documents and why they're being asked for those documents?
7. Do participants who have other health insurance understand why are asked to fill out additional information and add additional documents?
8. What is the overall sentiment about the experience?

### Hypothesis
Our hypothesis is that users will be able to navigate through the form relatively easily, but may have issues with the following:
- Understanding why they're being asked for certain information, including:
	- Sponsor's date of death
 	- Whether the Sponsor died during service
 	- Contact information 
- Redundancy of information, such as asking for an address, email address, and phone number for each applicant
- Understanding their progress through the form
- Understanding how to correctly report other insurance information

### Outcome
The findings from this research will: 
- Provide insights needed to iterate upon and refine our initial prototype of Form 10-10D
- Demonstrate where copy needs to be rewritten to enhance clarity

## Methodology	
**Usability study**

A usability study will be conducted remotely via Zoom using the Perigean contract. A remote moderator will begin with introduction questions about their experience with applying for benefits. Participants will then be asked to complete a series of tasks on a Figma prototype.

Participants will be showed one of the following four flows:
1. An authenticated experience where the user has additional health insurance to report
2. An authenticated experience where the user does not have additional health insurance to report
3. An unauthenticated experience where the user has additional health insurance to report
4. An unauthenticated experience where the user does not have additional health insurance to report

Participants will be encouraged to talk through their exploration of the flow. Remote observers and note takers will be in attendance.

### [WIP] Research materials

- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)
	
## Participants and Recruitment	

### Recruitment approach
Our intended audience is Veterans, spouses of Veterans, and family Caregivers for Veterans who can sponsor or are [eligible for CHAMPVA benefits](https://www.va.gov/health-care/family-caregiver-benefits/champva/) but have not applied. Participants will be recruited by Perigean.

### Recruitment criteria
We would like to work with Perigean to recruit for 15 full sessions. Therefore, we request that 20 sessions be scheduled.

**Primary criteria (must-haves, all numbers out of 15)**

- User groups:
	- At least 4 Veterans 
	- At least 10 spouses, children, or caregivers of Veterans
 	- The remaining participant may belong to either user group

- Device
	- 25% on phone or tablet
 	- 75% on desktop
 
- Demographics:
  - At least 8 participants age 55-64+
  - At least 8 participants have cognitive disability
  - At least 4 participants live in a rural area
  - At least 4 participants have no degree
  - At least 2 participants are women
  - At least 1 participant is an expat (living abroad)
  - At least 3 participants are Black
  - At least 2 participants are Hispanic
  - At least 1 participant is Asian
  - At least 1 participant is Native
  - At least 1 participant is gay, lesbian, or bisexual
  - At least 1 participant is transgender, nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman
  - At least 3 participants use screen readers
  - At least 2 participants use some other kind of assistive technology

## [WIP] Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### [WIP] Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### [WIP] Research sessions
* Planned dates of research:

### Length of sessions
* Session length: up to 90 minutes
* Buffer time between sessions: 30 minutes
* Maximum Sessions per day: 3 sessions

### [WIP] Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles	

- Moderator: Rachael Penfil (rachael.penfil@adhocteam.us) or Steven Straily (steven.straily@agile6.com)
- Research guide writing and task development (usually but not always same as moderator): Rachael Penfil and Steven Straily
- Participant recruiting & screening: Perigean
- Project point of contact: Rachael Penfil
- Participant(s) for pilot test: **TBD**
- Accessibility specialist (for sessions where support for assistive technology may be needed): Rachael Penfil
- Note-takers: Jamie Fiore (jamie.fiore@adhocteam.us), Brian Wilke (brian.wilke@copilot.llc), Syd Hoeper (syd.hoeper@adhocteam.us)
- Observers: Bo Altes (bo.altes@agile6.com), Mary Wang (mary.wang@adhocteam.us), Premal Shah (premal.shah@va.gov), Devi Hill (devi.hill@agile6.com), Melissa Schaff (melissa.schaff@agile6.com) 
