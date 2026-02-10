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

# Research Plan for Team MOVE, 1095-B, August 2022

## Background

Internal Revenue Service (IRS) form 1095-B reports the months a person had minimum essential health coverage to the IRS. VA sends this form to Veterans and dependents to show what months they were covered under the VA health care system. 

In most cases, it is simply a form for one's records. However, some states still have an individual coverage mandate, and in those states, the form is necessary for filing taxes. The form is not required by the IRS, but it is required to be sent by health care providers as of 2019. 


When this is in production, it will be available at: [http://www.va.gov/records/download-your-irs-1095-b](http://www.va.gov/records/download-your-irs-1095-b). Veterans will have familiarity with the 1095-B (they currently receive in in the mail, but no familiarity with it being available online). 

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/product/1095B-Tax-Form-Product-Outline.md)


### OCTO Objectives 
- 'Veterans and their families can find a single, authoritative source of information'

### Veteran Journey

- Phase 2: Living Civilian Life state: putting down roots
- Moment: Engaging VA to access benefits and services

## Research Goals	
- Test usability of our solution

### Outcome
How will this research advance your product to the next phase in the design process? What will you do with your learnings?

This is user acceptance testing to ensure our product works for a small representative sample of Veterans before we enable it for everyone. 


### Research questions

- Are users able to pick the appropriate format of the 1095-B (pdf, text) for their needs?
- Is the data in the 1095-B form accurate for all participants?
- Do users know what to do if they need changes to the form?
- Are users able to get their 1095-B form using their mobile devices? 

### Hypothesis

Hypothesis 1: We expect users to have an easy time downloading the 1095-B form and know which format to download.  We expect that the details on the form are accurate

Hypothesis 2: Users who do not receive a 1095-B form from VA get and understand appropriate messaging


## Method	
We are conducting User acceptance testing (UAT) which is required for product release. We are making the 1095-B form available in production for all users. 


### Location

This will be remote research, conducted over Zoom. 

### Research materials

For moderated usability tests: 
- [Link to conversation guide](url goes here)
- [Link to 1095-B page in production](url goes here)
	
## Recruitment	


### Recruitment approach
We will use Perigean to recruit particpants. 

We are using (hopefully we did it correctly), the lean [Maximum Variation Strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) (MVS). 

### Recruitment criteria
Participants are both Veterans and dependents, since dependents can also receive healthcare from VA (and would therefore receive a 1095-B). 

Participant must haves (primary criteria):
- 24 participants scheduled (we're aiming for 12 successful sessions)
    - 20 participants who currently use VA healthcare as their primary insurance
    - 4 participants who access healthcare outside the VA system
- Participants must have access to Zoom on a desktop computer (see below, because we'd also like to test with participants who use mobile devices)

[Spreadsheet for recruitment diversity](https://docs.google.com/spreadsheets/d/1QSskfDMINAjlkS0DgPAVq9k168sTLq7MC2OYOBSqAEs/edit#gid=0)


## Timeline

Timeline TBD, as we do not have a production launch date.

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: TBD
* Date and time of pilot session: TBD 

### Research sessions
* Planned dates of research: TBD

### Length of sessions
* Session length: < 30 minutes
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 5

### Availability

TBD

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	

- Moderator: TBD	
- Research guide writing and task development (usually but not always same as moderator): Shashank Khandelwal (shashank@bluetiger.digital)
- Participant recruiting & screening: TBD
- Project point of contact: TBD
- Participant(s) for pilot test: TBD
- Note-takers:	TBD
- Observers: TBD

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 
