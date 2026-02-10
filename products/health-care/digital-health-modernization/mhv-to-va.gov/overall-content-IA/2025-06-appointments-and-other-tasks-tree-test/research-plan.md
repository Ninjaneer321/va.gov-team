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

# Research Plan for Transitioning service-member Tree-Test, June-July 2025
Seeking data from transitioning-service members about where they expect to find a variety non-health tools, information, and resources on VA.gov to inform where we should put those in the sitewide IA.

## Background 🏗️
	
`What problem is your product trying to solve?`

Questions have arisen around where to put several non-health information and tasks (including appointments, letters) on VA.gov for caregivers and transitioning service-members. This study will specifically target transitioning service-members who are exiting or have recently exited the military and may need to access several things that don't have obvious placement on VA.gov

**Examples:**
* Finding information about a program called "Solid Start" and scheduling appointments with representatives who can connect them wtih services and benefits.
* Scheduling C&P exams for disability compensation & pension
* Accessing denial letters if denied community care appointments 

We'd like to evaluate the best placement for these tasks by running a tree-test with a statistically significant sample of the population this affects (estimated to be roughly 58,000 people based on activity in the service-member hub during May 2025). Estimated number of Veterans who transition to civilian life each year is 200,000 ([source](https://discover.va.gov/transition-programs/transition-assistance-program/)). 
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Auth. 
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

Varies by product. There are 7 tasks we hope to have participants complete in this study, and each have a different level of visibility / Veteran familiarity. 

`Product Brief`

No product brief for this study. 

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

Which OCTO priorities does this research support? Work with your VA lead and product manager as needed.

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Where does your product fit into the Veteran journey?
Are there moments that matter?
	
- `Starting Up`
- `Taking Care of Myself`

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

* `1.` Gain an understanding of where transitioning service-members expect to find tools, information, and resources related to onboarding with and managing VA benefits. 
* `2.` Better understand where VA should place non-health related apppointments in the site architecture. 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`
* We will use the information and signals from this tree-test to determine where to place information for the Solid Start program (for transitioning service-members) in the VA.gov sitewide IA. Related to this program, Veterans will need to be able to schedule a non-health appointment with a Solid Start representative. We'd like to generalize this study to also learn where this audience expects to find additional resources they're most likely to engage with in their first years as Veterans with the VA, including scheduling C&P exams, finding education letters related to their GI Bill benefits, and looking up the status of submitted applications. 

---

**Transitioning service-members will be able to more easily find specific resources, tools, or services on VA.gov; and specifically information that helps them onboard with and manage benefits with the VA.** 

---

### Research questions
* **`1`** Where should VA.gov surface non-health appointments, including managing and viewing said appointments, for Veterans in their first year out of service?
* **`2`** Where should VA.gov surface denial letters to Veterans who were denied Community Care?
* **`3`** Where will transitioning service-members expect to find a copy of letters from their military service?
* **`4`** Where will transitioning service-members expect to go to release educational records from VA to the college they plan to attend using educational benefits?
* **`5`** Where will transitioning service-members expect to go update dependents related to their disability payments?
* **`6`** Where will transitioning service-members expect find status updates on VA home improvement grant applications?
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

**Unmoderated tree test**


### Location
Data collection will be remote and conducted using Optimal Workshop's Tree Test functionality. 

- [X] **Remote**
- [ ] **In-person**


## Research materials 📔

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- [Link to email with instructions](url goes here)
- [Link to tree-test study](https://dj540s05.optimalworkshop.com/treejack/hspeacns)

	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach
- Transitioning service-members; and 
- Veterans who have separated within the last 4 years and also have no benefits.

Intentionally open so recruitment can go faster. Will go through Perigean. 

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **384**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **0**
- `Ideal completed sessions:` **384**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `Transitioning service-members (any) who have not yet left the military` OR
- `Veterans with no benefits or service experience`

#### Secondary criteria (nice-to-haves)
- N/A

## Timeline 🗓️

### Optional Kick-off Call with Perigean

- N/A - do not need a kickoff call

### Prepare

- `Pilot participant name:` **We have piloted the study in preview mode with a few members of the Cartography team or broader My HealtheVet OCTO stakeholders to check for comprehension and functionality prior to launch.**
- `Date and time of pilot session:` **06/12/2025**

### Research sessions
- `Planned dates of research:` **06/18/2025 start date. Will run for 4+ weeks or until we reach the completed session target number of 384**

### Length of sessions
- `Session length:` **20 minutes**
  
- `Buffer time between sessions:` **N/A**
  
- `Maximum Sessions per day:` **This study is unmoderated, N/A**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

**N/A - test can be taken asyncronously and is unmoderated.** 
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Sara Sterkenburg**	
- `Research guide writing and task development (usually but not always same as moderator):` **Robyn Singleton, Mikki Northuis**			
- `Participant recruiting & screening:`	**Athena Bozak**	
- `Project point of contact:` **Sara Sterkenburg, Robyn Singleton, Mikki Northuis**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**	
- `Note-takers:` **N/A**	
- `Observers:` **N/A**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
