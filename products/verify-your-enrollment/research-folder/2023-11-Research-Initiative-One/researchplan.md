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

# Research Plan for VFS, VYE-Verify Your Enrollment, November 2023

## Background
[VYE Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/verify-your-enrollment/product-outline.md)

**What problem is your product trying to solve?**
The Web Automated Verification of Enrollment (WAVE) is a legacy, noncompliant feature that uses JavaScript, which is no longer sanctioned by the U.S. goverment because of data security concerns. This is a problem because WAVE holds Veterans' personally identifiable information. This is being replaced with Verify Your Enrollment (VYE) on VA.gov. 

**Where is your product situated on VA.gov? (ex: auth vs. unauth)**
WAVE is currently a standalone application being linked to from VA.gov. The new VYE tool is an authenticated tool that will sit under the "Education and training" section of the "VA Benefits and Health Care" menu. VYE uses VA 22-8979. 

**What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?**
Verify Your Enrollment is replacing the WAVE tool which has been in existence in its current state since 2003. Veterans utilizing education benefits through the MGIB-Active Duty (Chapter 30), MGIB Selected Reserve (Chapter 1606), Reserve Educational Assistance Program (REAP, Chapter 1607), or Veterans Retraining Assistance Program (VRAP) currently verify their benefits with WAVE.

### OCTO Priorities 

Modernizing WAVE and moving it to VA.gov aligns with OCTO-DE's mission to update VA applications, create the best experience for all Veterans by streamlining the process to receive education benefits, and provide a seamless Veteran experience through the delivery of state-of-the-art technology by improving the functionality and experience of the application.

### Veteran Journey
VYE fits in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in numerous phases and has meaningful moments, such as: 
- Veterans actively serving: Managing military and family obligations
- Veterans getting out: Engaging VA to access benefits and services
- Veterans starting up: Finding something to do
- Veterans reinventing themselves: Acquiring the appropriate education, new skills, and credentials
- Veterans putting down roots: Taking care of my family
- Veterans putting down roots: Engaging VA to access benefits and services

## Research Goals and Questions	
**Evaluate the effectiveness of our proposed solution**
- Are our perceptions of Veterans goals accurate?
  - Verification #1
  - Checking history #2
  - Managing profile #3
- Is our proposed design simple for Veterans to use to accomplish their goals?
- Are Veterans able to quickly and easily verify their enrollment? 
- Do Veterans need additional touchpoints (e.g., emails) to accomplish their goals?
- Is our two-page proposed design sufficient for users to easily find their desired information?
- Can users easily update their address and direct deposit information?
- Is the label, "Your Benefits Profile" sufficient to communicate the types of information contained in the profile? 

**Evaluate our place in the VA.gov system**
- Are there other messages before or after interaction with VYE that our Veterans need?
- How do our Veterans find VYE (e.g., email link, Google search, onsite search, navigation menus, etc.)?
- How effective are these channels to Veterans for finding VYE/WAVE?
- Would Veterans prefer to verify their enrollment over the phone or via text as opposed to verifying via a web application? 

**What might we be missing in our understanding of our Veterans?**
- Are Veterans confused by the process of enrollment and how that information is communicated to the VA for verification?
- Do Veterans need more insight into backoffice processes (e.g., pending documents and processes)?

### Outcome
Evaluative findings will immediately affect the design and content of our MVP solution for VYE. 

Additional generative research will help inform future solutions and enhancements to VYE (e.g., email notifications, IVR, text verification, integration with VA.gov profile, etc.). 

### Hypothesis
**The new VYE design will provide a much simpler process for Veterans to manage their enrollment verifications as compared to the overly complicated WAVE tool.** 
- WAVE is challenging to navigate and use. 
- A more streamlined and succint design will be sufficient for Veterans to manage their enrollment verifications.
- In-context design clues will remove the need for complex user guides.
- User do not need to see backoffice processes that are currently contained in "Pending Documents."

**Veterans will be able to easily find and access the VYE application.**
- Existing processes are sufficient to bring Veterans needing to verify enrollment to the VYE tool (e.g., email prompts, Google search, onsite search, etc.).
- Veterans might prefer IVR or text-based verification processes for managing enrollment. 

**There are things we don't know about our Veterans.**
- We do not have documented research on our users and are anticipating learnings to come from open-ended conversation.  

## Methodology	
We will use a remote, moderated usability test and semi-structured interview. A remote, moderated usability test and semi-structured interview will be the primary vehicle for gathering feedback during this research process. A single conversation guide will be produced to gather both evaluative and generative feedback. 

### Location
All interviews will be conducted online on mobile or desktop devices via Zoom. Usability test sessions will ask participants to review a Sketch-based prototype. Participants may be asked to share their screen.

### Research materials
For moderated usability tests: 
- [Conversation guide]([https://va.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/verify-your-enrollment/research-folder/2023-11-Research-Initiative-One/conversation-guide.md))
- [Prototype]([https://va.gov](https://www.sketch.com/s/0c023f07-db31-4bba-9c92-1f70343f060f/prototype/ECF13B7E-5E08-4053-BEEC-11AD5A15805D/a/ECF13B7E-5E08-4053-BEEC-11AD5A15805D)

	
## Recruitment	

### Recruitment approach
Our intended audience for this study is Veterans who have an active award for:
- MGIB-Active Duty (Chapter 30)
- MGIB Selected Reserve (Chapter 1606)
- Reserve Educational Assistance Program (REAP, Chapter 1607)
- Veterans Retraining Assistance Program (VRAP)

We will use Perigean to recruit participants. As such, we’d like to schedule a kickoff call with Perigean as soon as the research plan is approved, to review the survey and email content that will be sent to participants.

We will be utilizing a lean maximum variation strategy for our studies, if possible. 

### Recruitment criteria
For remote, moderated usability interviews we would like 24 participants (assuming 16 completions). 

Participants should meet VA MVS (Maximum Variation Sampling) criteria of:
- 50% aged 55-64+
- 50% with an identified cognitive disability
- 50% primarily mobile users
- 30% people of color
- 25% in a rural area
- 25% without a degree
- 17% with immigrant origins
- 10% women

**Primary criteria (must-haves)**
Participants must have an active award for one of the following programs:
- MGIB-Active Duty (Chapter 30)
- MGIB Selected Reserve (Chapter 1606)
- Reserve Educational Assistance Program (REAP, Chapter 1607)
- Veterans Retraining Assistance Program (VRAP)

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

> Tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)


## Timeline

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
* Planned dates of research: 12/22/2023-12/31/2023 - would like to start earlier, if possible

### Length of sessions
Each research session will be 45-minutes long with a buffer time of 15 mins between sessions. We’d like a maximum of two sessions per day.

For sessions with AT, sessions should be scheduled for 75 minutes with a buffer of 15 minutes between sessions and a maximum of two sessions per day. 

### Availability
12/18 - 8am - 11am, 12pm - 1:30pm, 2pm - 530pm
12/19 - 8am - 1:30pm, 2pm - 5:30pm
12/20 - 8am - 1pm, 2pm - 3:30pm, 4pm - 5:30pm
12/21 - 8am - 1pm, 1:30pm - 5:30pm
12/22 - 10am - 1pm, 2pm - 5:30pm
12/27 - 8am - 3:30pm, 4pm - 5:30pm
12/28 - 8am - 1pm, 1:30pm - 5:30pm
12/29 - 8am - 1pm, 2pm - 5:30pm

When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles		
- **Moderator**: Ryan Gray ryan.gray1@va.gov
- **Research guide writing and task development**: Ryan Gray ryan.gray1@va.gov	
- **Participant recruiting & screening**: Ryan Gray ryan.gray1@va.gov
- **Project point of contact**: Cassidy Beach cassidy.beach@va.gov, Ryan Gray ryan.gray1@va.gov
- **Participant(s) for pilot test**: Ryan Gray ryan.gray1@va.gov
- **Accessibility specialist**: TBD	
- **Note-takers**: Ilyas Iman ilyas.iman@va.gov, Cassidy Beach cassidy.beach@va.gov, Naway Hussein nawar.hussein@va.gov
- **Observers**: The team will manage invites for observers.
