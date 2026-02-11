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

# Research plan for secondary nav expansion study, Jan/Feb 2025

## Background
Insights from MHV’s Adoption study, the Secondary Nav Comparison study, and the MHV Wayfinding study provide evidence that the MHV on VA.gov secondary navigation (abbreviated as “secondary nav” going forward) improves overall user experience of the portal. 

**Specifically, the MHV on VA.gov secondary nav has:**

Improved users’ ability to find the four main health tools (messaging, medical records, medications, and appointments).
Enabled mobile users to have an improved navigational UX that is closer to the desktop UX.
Facilitated users’ understanding of each page of MHV on VA.gov as part of an overall portal where users can manage their health care.

However, these past studies have also identified continued navigational problems within the MHV on VA.gov portal:

Health tasks that are not covered by the main four health tools currently highlighted in the secondary are still too hard to find (i.e. ordering medical supplies, getting reimbursed for travel).
Users coming from the previous portal experience are confused by the My HealtheVet label and link within the secondary nav (which leads to the landing page), expecting it to take them back to the older portal.

This research is intended to start to answer the question: how might we scale the secondary nav to improve on both of these navigational difficulties? 

### OCTO Priorities
This research supports the following OCTO priorities:

1. Our digital experiences are the best way to access VA health care and benefits.
2. Our platforms are the best way to deliver products at VA.
3. Our people are empowered with the knowledge and resources they need to make sustained impact.

### Veteran Journey
This research fits into these points of a Veteran's Journey:
- Starting up
- Taking care of myself
- Retiring
- Aging

### Research Goals
This research aims to evaluate proposed design concepts that introduce modifications to the current MHV secondary nav with participants using both desktop and mobile designs. Moving forward in this document, we will refer to these proposed design concepts as “expanded secondary nav”.

### Outcome
This study will assess how Veterans engage with an expanded secondary nav, focusing specifically on the continued navigational weaknesses present in the portal. Findings from this research will guide the optimization of the navigation structure, identify usability challenges, and offer insights to improve the experience, ultimately making it easier for Veterans to navigate the tools and services they rely on for their health.

### Research questions
* How does an expanded secondary nav impact users’ go-to strategies for finding tools and tasks not obviously found within the 4 main tool secondary nav? 
* What are Veteran’s mental models for where certain health-related tasks should appear in the portal or on VA.gov?
* How do changes to the link and label for the MHV landing page impact users’ expectations for where that link will lead them, as well as users’ interest in clicking it?
* What challenges do users encounter while attempting to use the proposed designs?

### Hypotheses
* The expanded secondary nav will allow Veterans to complete key health tasks more efficiently, with faster access to tools, fewer clicks, and reduced navigation time.
* Even with the expanded secondary nav, Veterans will still expect to complete certain tasks using tools that do not offer those affordances.
* The addition of a “home” label and icon in the secondary nav will make users more interested in clicking the link to arrive at the landing page.
* The addition of a “home” label and icon will also change users’ perception of what they will find on the landing page.

## Method
### Interviews
We will conduct remote interviews with Zoom. The interviews will focus on evaluative methods, consisting of a combination of tasks and direct questions. Participants will engage with secondary nav designs and the portal overall in prod, meaning that we will need to use the “flipper” to turn on and off different nav experiences to conduct the interviews.

### Research materials
- [Conversation Guide]
- [Mural Discovery] 
- [Prototype - Design A]
- [Prototype - Design B]

## Recruitment
### Recruitment approach
We will partner with Perigean to recruit Veterans and we request a 30 min. kickoff meeting with Perigean to clarify recruiting needs.

Possible meeting times for a kick-off:
* TBD
* TBD
* TBD

We will keep track of participant demographic information (identified gender, age, ethnicity, cognitive abilities) and other relevant information in an encrypted Excel file on the VA Network.

## Recruitment criteria

**Primary criteria (must-haves)**
- X participants total, split into X groups of X
- Each group of X must have the following characteristics:
          - X participants are My HealtheVet users
          - X participants are 55+ / X participants under age 55
          - X participant self-identifies as having a cognitive disability
          - X participant uses pinch magnification
          - X participants will test on desktop / X participants test on mobile
- At least X (of X) who identify as a race other than white/caucasian
- At least X (of X) who identify as a gender other than male
- At least X (of X)  who identify as LGBTQ

### Screener questions
1. How often, if at all, do you use VA.gov?
          - Never use it
          - Once per year
          - Once per month
          - 2-3 times per month
          - More than 3 times per month

2. Do you have a My HealtheVet (MHV) account?
          - Yes
          - No
          - Not sure

3. How often, if at all, do you use My HealtheVet?
	- Never used it (Move on to Question 4)
	- Once a year (Move on to Question 4)
	- **Once a month (Automatically qualify - if still sourcing this user type - but collect answers to the rest of screener)**
	- **2-3 times a month  (Automatically qualify  - if still sourcing this user type - but collect answers to the rest of screener)**
	- **More than 3 times a month  (Automatically qualify - if still sourcing this user type - but collect answers to the rest of screener)**

4. How comfortable are you with the idea of managing your health-related tasks online, such as scheduling appointments, viewing medical records, or communicating with health care professionals?
	- Not at all comfortable (Disqualify)
	- Slightly comfortable (Disqualify)
	- Moderately comfortable (Disqualify)
	- **Very comfortable (Qualify)**
	- **Extremely comfortable (Qualify)**

5. How frequently do you use the internet for personal activities, such as browsing websites, online banking, or online shopping?
	- Never (Disqualify)
	- Rarely (Disqualify)
	- Occasionally (Disqualify)
	- **Regularly (Qualify)**
	- **Frequently (Qualify)**

## Timeline
- Submit for approval: TBD
- Pilot #1: During the week of TBD
- Kick-off: TBD
- Conduct interviews: TBD
- Synthesize and analysis week TBD

### Research sessions
**Please schedule no more than 3 interviews per day. Planned dates of research (all in eastern time):**
* TBD
* TBD
* TBD

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 30 minutes

## Team Roles
Please list the people who will be serving in each role.
- Alternating Moderators: Florence McCafferty (kathryn.mccafferty@va.gov), Jonathan Nelson (jonathan.nelson@va.gov), Athena Bozak (athena.bozak@va.gov)
- Participant recruiting & screening: Perigean
- Project point of contact: Wes Rowe (wesley.rowe@va.gov); Robyn Singleton (robyn.singleton@va.gov)
- Participants for the pilot test: Veteran colleague(s) from Agile6
- Note-takers: Athena Bozak (athena.bozak@va.gov), Jonathan Nelson (jonathan.nelson@va.gov), Florence McCafferty (kathryn.mccafferty@va.gov)
- Observers to attend as they wish: NA
