---
# Research Plan Metadata
title: "Research Plan for Pension Burial Benefits, Pension Form (527EZ), January 2026"
date: 2025-12-01
last_updated: 2025-12-05
team: "Pension Benefits"
product: "Veterans Pension Application (Form 527EZ)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Inform Veterans with a 100% Disability Rating of their potential compensation before they fill out a Pension application, helping save them wasted effort and reduce burden on VSRs processing claims that would likely not result in additional benefits."
  product_location: "Introduction page of the Pension form (527EZ) for authenticated Veterans"
  user_familiarity: "Iteration on existing product - adding disability rating alert to Pension application"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/"

# Research Design
methodology: "semi-structured-interviews"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Ensure that the message is clear to Veterans and that they understand what it is trying to say"
  - goal_2: "See if Veterans who understand the message and have a 100% rating will be encouraged or discouraged from filling out the Pension form"

research_questions:
  - "Do participants understand what the standard alert message is trying to tell them?"
  - "After seeing the standard alert message, are Veterans more or less likely to fill out the pension form?"
  - "What would Veterans do after seeing the standard alert message?"
  - "Do participants understand what the API-failed alert message is trying to tell them?"
  - "After seeing the API-failed alert message, are Veterans more or less likely to fill out the pension form?"
  - "What would Veterans do after seeing the API-failed alert message?"

hypotheses:
  - "For the standard alert, the Veteran will recognize that because of their high Disability Rating, filling out the Pension application does not make sense for them"
  - "For the API-failed version of the alert, the Veteran will recognize that Disability Rating might have an impact on whether or not they should fill out the Pension form"

expected_outcomes: "We will iterate on the language or even the overall design if the messaging is shown to be confusing or if it has the opposite of the intended effect"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment of Veterans with 100% disability rating who would see this message in real scenarios"
  
  primary_criteria:
    - "Has a 100% overall disability rating"
    - "Has used VA.gov website to file a claim for disability or pension"
    - "Is receiving disability compensation from the VA"
    
  secondary_criteria:
    - "Experience applying for and receiving Veterans Pension"
    - "30% people of color"
    - "25% live in a rural area"
    - "25% without a degree"
    - "10% women"
    
  screener_questions:
    - question: "Have you ever used the VA.gov website to file a claim for disability or pension?"
      qualifying_response: "Yes (Include)"
    - question: "Are you receiving disability compensation from the VA? If so, what is your overall disability rating?"
      qualifying_response: "I have a service-connected disability, and my overall rating is 100% (Include)"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 7
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-12-16"
  pilot_participant: "Rocio Santiago"
  research_dates: "2026-01-06 to 2026-01-12"
  research_review_submission: "2025-12-05"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Key Result 1: Improve satisfaction with our web and mobile products by 5 points"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Retiring"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/"
    
tags:
  - "AUD: Veterans"
  - "PRDT: Pension"
  - "BNFT: Pension"
  - "BNFT: Disability"
  - "DSC: Alert"
  - "DSC: Form"
  - "semi-structured-interviews"
  - "usability-testing"
  - "authenticated"
  - "remote"
  - "moderated"
  - "HDW: Desktop"
  - "disability-rating"
  - "compensation"
---


	# Research Plan for Pension Burial Benefits, Pension Form (527EZ), Jan 2026

## Background 🏗️
	
`What problem is your product trying to solve?`

If a Veteran has a 100% Disability Rating, it's nearly impossible that they will be paid more with Veterans Pension, given the disability compensation they are receiving. For this reason, we want to inform the Veterans with a 100% Disability Rating of their potential compensation  before they take the time to fill out a Pension application to help save them the wasted effort and reduce burden on VSRs processing claims .
There is also an "API-failed" version of this alert, which we will show Veterans if the API fails and we can't tell if they have a 100% Disability Rating or not. We want to ensure that message is also clear and we want to understand what impact both messages would have on user behavior.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The messaging will appear on the Introduction page of the Pension form for authenticated Veterans with a Disability Rating of 100%.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

We are iterating on an existing product – the Pension application.

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)
	
- `Taking Care of Myself`
- `Retiring`

## Research Goals 🥅	

### Goals

`1.` **Ensure that the message is clear to Veterans and that they understand what it is trying to say.**

`2.` **See if Veterans who understand the message and have a 100% rating will be encouraged or discouraged from filling out the Pension form.**
  
### Outcome

`How will this research advance our product to the next phase in the design process? What will we do with our learnings?`

We will iterate on the language or even the overall design if the messaging is shown to be confusing or if it has the opposite of the intended effect.

### Research questions

*Assess clarity of the standard alert*

**`1.`Do participants understand what the message is trying to tell them?**

**`2.`After seeing the message, are Veterans more or less likely to fill out the pension form?**

**`3.`What would Veterans do after seeing the message?**

*Assess clarity of the API-failed alert*

**`1.`Do participants understand what the message is trying to tell them?**

**`2.`After seeing the message, are Veterans more or less likely to fill out the pension form?**

**`3.`What would Veterans do after seeing the message?**

## Hypotheses 🔬

For the standard alert, the Veteran will recognize that because of their high Disability Rating, filling out the Pension application does not make sense for them.

For the API-failed version of the alert, the Veteran will recognize that Disability Rating might have an impact on whether or not they should fill out the Pension form.
  
## Methodology  🛠️

For this study, we will be facilitating short, semi-structured interviews with Veterans on desktop. We’ll provide a scenario to review the Veterans Pension introduction page containing the service-connected disability alert, in order to assess their comprehension. 

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. 

 - [X] **Remote**
 - [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2025-12%20Pension%20Disability%20Alert/conversation-guide.md)
- [Link to prototype](https://www.figma.com/proto/0hU7Y56EO2skWUjS8HxFjf/Usability-Prototypes?page-id=589%3A3&node-id=589-6631&p=f&t=0p1budEblOPAbwoC-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=589%3A6631)
	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach
We want to recruit Veteran participants who have a 100% Disability Rating. These Veterans are the ones who would see this message in a real life scenario.

### Recruitment criteria

**Intro included below should be included with screener:**

*We are seeking to inform Veterans about their potential compensation for Veterans Pension, specifically letting them know when their compensation would not change  due to a high Disability Rating.*

**Screener start:**

1. Have you ever used the VA.gov website to file a claim for disability or pension? 
* Yes (Include)
* No (Exclude)

2. Are you receiving disability compensation from the VA? If so, what is your overall disability rating? 
* I am not receiving any disability compensation from the VA (Exclude)
* I have a service-connected disability, and my overall rating is 0-90% (Exclude)
* I have a service-connected disability, and my overall rating is 100% (Include)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **10**
- `Total:` **10**
- `Ideal completed sessions:` **5-7**

### Primary criteria (must-haves)

- Has a 100% overall disability rating

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `Experience applying for and receiving Veterans Pension`
- `30% people of color`
- `25% live in a rural area`
- `25% without a degree`
- `10% women`

## Timeline 🗓️

### Kick-off Call with Perigean

- `Suggested dates and times:` **Dec 15-17**

### Prepare

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 

- `Pilot participant name:` **Rocio Santiago**
- `Date and time of pilot session:` **Dec 16, 1:30-2:15 PM ET**  

### Research sessions
- `Planned dates of research:` **Jan 6-12, 2026 (5 business days)**

### Length of sessions
- `Session length:` **30 minutes**
  
- `Buffer time between sessions: ` **30 minutes**
  
- `Maximum Sessions per day: ` **5**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

Jan 6 - 12, 2026 (5 business days)

Available 9 AM - 5 PM ET each of those days
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Megan Graham** or **Elisabeth Chin**
- `Research guide writing and task development (usually but not always same as moderator):` **Skyler Schain** and **Elisabeth Chin**		
- `Participant recruiting & screening:`	**Perigean**
- `Project point of contact:` **Elisabeth Chin** ***or*** **David Kennedy**	
- `Note-takers:`  **Elisabeth Chin** ***or*** **A'Nita Evans** ***or*** **David Kennedy**
- `Observers:` **Elisabeth Chin, David Kennedy, Matt Reilly, A’Nita Evans**

## Approvals ✅
- `Reviewed by Shannon Ford on 12/5/25`
- `Reviewed by OCTO Research-Ops Lead on --`

