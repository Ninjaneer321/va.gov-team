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

# Editor-facing research plan for Facilities, VBA regional offices, January 2024

Publish final research plan in the [CMS research repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/research) ~and add a link in the [UX research airtable]~

## Background

[Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/regional-offices)

The Facilities team is ready to launch MVP VBA regional office pages in Drupal. A pilot group of VBA RO editors are currently (January-March 2024) attending training so they can start editing these pages. This is an opportune time to get early research insights about the editorial experience and Drupal training. Insights gained in this study will help us identify potential pain points before launching the national roll out of RO pages. 

## OCTO Objectives 

### OCTO Goals 
- Our people are empowered with the knowledge and resources they need to make sustained impact.

### Increase 📈
- **Usage of digital, self- service tools**
- **Benefit use and enrollment, across all business lines**
- **Number of VA.gov users as a function of total Veteran population**
- **Veteran satisfaction with VA.gov**
- Increase editor satisfaction with Drupal editing environment 

### Decrease 📉
- **Call center volume, wait time, and time to resolution**
- **Time from online benefit discovery to benefit delivery**

## Research Goals	
There are two goals of this research:
1. To determine whether the current design of the Drupal interface meets editors' needs.
2. To collect feedback on the training and support materials provided to new regional office editors.

### Outcome
The findings from this research will influence design iterations before the national rollout of RO pages.

### Research questions
For research goal one, "To determine whether the current design of the Drupal interface meets editors' needs":
- Are labels, help text, error messaging, and other text in interface clear?
- Are widget interactions intuitive (buttons, checkboxes, etc)?
- How easily can editors get to the content they need to edit?

For research goal two, "To collect feedback on the training and support materials provided to new regional office editors":
- Are Drupal trainings provided by the Facilities team providing editors enough information to get started?
- Are editors able to access and use knowledge base articles to resolve issues they encounter during the editing process?

### Hypotheses
- Editors will find content (including labels, error messages and help text) in the RO editing page clear and actionable.
- Editors will find widget interactions in the RO editing page intuitive.
- Editors will be able to easily navigate to the content they need to edit.
- Editors will find the training offered adequate to complete their editing tasks.
- Editors will be able to resolve issues that arise using self-service knowledge base articles.

## Method	
This study will use a hybrid approach, with a mix of interview questions and task observation. Participants will perform tasks that are part of the editorial process while being asked questions related to the task. This method is appropriate for the timing of the study and accounts for variation in tasks editors will be completing. 

### Location
Sessions will be remote over Zoom. 

### Research materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2024-01-editor-facing/conversation-guide.md)
	
## Recruitment	

### Recruitment criteria
- Participants must be editors participating in the pilot MVP roll out of new VBA regional office pages.
- There are approximately 14 editors in the recruitment pool. We would like to interview at least half of them (7).

### Recruitment approach
Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them? 

Participants will be recruited from the bi-weekly training sessions being conducted for regional office editors who are new to editing in Drupal. Bookings link will be shared at the end of the sessions and editors will be encouraged to sign up for one (see script below).

### Recruitment script for training sessions
Hello, everyone! I'm Alexis, and I'm a researcher on the facilities team. Part of my job is to help make sure the products we create work well for both Veterans and for editors like yourselves. 

As part of that work, I'd love to meet with as many of you (individually) as possible as you begin editing facility information in Drupal. 
Here's a little about what you can expect in these sessions:
- They'll take **one hour or less**
- You'll **complete actual tasks in Drupal while sharing your screen** and telling me what you think about the experience
- I'll be seeking your **uncensored opinions**, so you can share whatever's on your mind without worrying about being diplomatic
- There will typically be an observer or two that will join us, just to make sure I capture everything
- ~We'll also **record** the session, but I'm the only one who will review the recordings and then they'll be deleted~
- We'll use the data we gather from talking to you to **make improvements to the editing and training experience** before we roll the new sites out nationally

If you're willing to help us with this important work, please use the link provided in chat to sign up for a time slot. Once you sign up, you can expect an email from me within a couple of days with more info about the session! 

[Bookings page](https://outlook.office.com/bookwithme/user/200913e2d3394a81b950c33d967f9065@va.gov/?ge[…]GF59ZUEUiiwMA7idk6iIbCd-1XBLUkDQ&anonymous&ep=mLinkFromTile)


### Prepare
Participants will log in to the live Drupal environment and perform real tasks related to the pages they're responsible for editing. They'll be observed while performing tasks and the interviewer will ask them questions.

### Research sessions
**Planned dates of research:** We'll conduct research sessions between training sessions, beginning some time after 2/6/2024 and ending the week following 3/19/2024.

#### Training sessions and topics
| Date | Topics covered |
| --- | ----------- |
| 2/6/24 | Operating status, Banner alerts, Facility photos (and alt text) |
| 2/20/24 | Benefit office overview, Prepare for your visit |
| 3/5/24 | Spotlights, Centralized content |
| 4/2/24 | Services |

### Length of sessions
* Session length: 60 minutes
* Buffer time between sessions: Minimum of 30 minutes between sessions

## Team Roles	
Please list the people who will be serving in each role. 	
- Moderator: Alexis Logsdon
- Research guide writing and task development: Alexis Logsdon
- Participant recruiting & screening: Alexis Logsdon and Michelle Middaugh
- Project point of contact: Alexis Logsdon and Amanda Klausmeier		
- Note-takers:	TBD
 
