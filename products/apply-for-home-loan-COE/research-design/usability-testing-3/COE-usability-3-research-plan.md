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

# COE Research Plan


	# Research Plan for [IIR, Request for Certificate of Eligibility (COE), 3/24/25]

## Background


**[Request for a Certificate of Eligibility (COE) form (26-1880)](https://www.va.gov/housing-assistance/home-loans/request-coe-form-26-1880/introduction)** is an existing authenticated digital form that allows Veterans and Service Members to apply for a VA secured loan.

The digital version of the form is in need of updating, it's currently behind it's paper/PDF counterpart. It's missing several fields that are needed for efficient and effective processing. Component-wise, the form needs to be updated to v3 and from a design standpoint, the pages need to be broken down to use the "one thing per page" paradigm to make the form as digestible as possible for Veterans and Service Members.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/apply-for-home-loan-COE/initiative-brief-2024-COE-updates.md).

### OCTO Priorities 

This research supports the following [OCTO priorities:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)

**Objective 1:** VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

**Objective 4:** OCTO positively influences VA's ability to deliver software products and services faster, safer, and with higher quality.


### Veteran Journey

Requesting a COE is available to Veterans throughout their journey (including while they are active service members) but it is called out as "Revisiting housing" in the "Putting down roots" leg of the Veteran journey.

## Research Goals & Questions	

The goal of this research is to validate or learn as much as possible about the following questions:

**1. Do the new questions make sense and are they easily understood by Veterans?**

**2. Does the new page sectioning flow of the form work well?**

**3. Does providing "additional information" sections for complex terms after each question make it easier for the Veteran to process and absorb?**

### Outcome
Ideally this research will hopefully validate placing dense contextual areas after a question makes it easier to complete the form and that the new design prototype is ready for engineers to build or identify problem areas that need to be remediated.



### Hypothesis

If we break the form down so that it follows the one question per page paradigm while at the same time leveraging conditional logic to only expose necessary questions, context, and pages the ease of use will increase.


## Methodology	
### Usability testing 

##### Review checklist
- [x] Review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md)  
- [x] Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html)
- [x] Review guidance regarding [research with disabled Veterans](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) 
- [x] Review and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- [x] Review guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

### Location
 - Remote moderated via Zoom

### Research materials



 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/apply-for-home-loan-COE/research-design/usability-testing-3/COE-usability-3-convo-guide.md)
- [Link to prototype](https://www.figma.com/proto/I40qWfEd6F4CSPfDSMqGeQ/COE-2024%2F25-Updates?page-id=51%3A4009&node-id=1697-129898&p=f&viewport=421%2C18313%2C0.25&t=ctQgpwqZD597klg7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1697%3A129898&show-proto-sidebar=1)
	
## Recruitment	

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

- [x] Review [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) 
- [x] Review [Inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) 


### Recruitment approach
#### Intended audiences
 - Veterans
 - Active Service Members 

### Recruitment criteria
13 Veterans - Maximum Variation Sampling
 

#### Primary criteria

##### Experience

- 5 with VA home loan experience
- 5 with no VA loan experience


##### Scenarios 

Question: 
> Have you had experience with VA home loans? 

 [the goal is to have an even amount of new and experienced users]



Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]


## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
* Planned dates of research:
6/30/25 - 7/4/25

### Length of sessions
* Session length: 45 minutes
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 4

### Availability
(All times listed are EST)
* 6/30 10:00 - 7:00
* 7/1  10:00 - 7:00
* 7/2  10:00 - 7:00
* 7/3  10:00 - 7:00
* 7/4  10:00 - 7:00
	
## Team Roles	
**Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.

**Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Send emails only for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- Moderator:	Ian Hilton
- Research guide writing and task development: Ian Hilton
- Participant recruiting & screening: Perigean
- Project point of contact: Ian Hilton 
- Participant(s) for pilot test: Michael King
- Note-takers: Mike King, Raquel Eisele
- Observers: Jeff Barnes, Pete Egan, Mike King, Raquele Eisele, David Pearl.

## Approvals
- Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]
- Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]
