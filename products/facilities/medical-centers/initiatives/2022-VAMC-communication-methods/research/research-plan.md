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

[PRE-REVIEW 3/10/22]

# VAMC Communication Methods - Research Plan

## Background

[#34431 - Methods for contacting VAMCs](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34431)

Unauthenticated VAMC site pages give Veterans multiple methods for contacting their doctors, patient advocates, and other members of their broader health care team. The variety of communication methods, and their placement on VAMC site pages, needs to be validated with Veteran feedback in order to determine which methods Veterans find the most useful, where it is most useful to Veterans to place this information on site pages, and where Veterans expect to find these different methods.

### OCTO Objectives 

[OCTO objectives & goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)

This research supports these main OCTO objectives:
- Veterans can manage their health services online

This supports decreasing theses measures:
- Time to successfully complete and submit online transactions

### Veteran Journey

[The Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

This research fits into the Veteran journey at these key moments:
- Attending to health needs
- Managing primary care and chronic health issues
- Take care my health

## Research Goals	

**The main goals of this study are:**
1) To identify where Veterans expect to find the various methods of communication that VAMC pages provide.
2) To validate the labels used to describe the communication methods found on VAMC pages.
3) To identify why a Veteran would choose one particular communication method as opposed to another.

**Secondary goals include collecting supplemental feedback:**
- What is confusing to Veterans?
- What experience do Veterans expect?
- What changes or additional things do Veterans suggest?

### Outcome

Currently, not all communication methods available to Veterans are present on each VAMC page. This study will determine which VAMC pages should have what communication methods, and how those communications methods should be described and labeled. This usability study will directly inform upcoming design changes to  VAMC pages.

### Research questions

1) Where do Veterans expect to find each of the different methods of communication? [Note: may need to confirm that the participant knows what each of these are, or onboard them in some way during the study.]
	- VA Health Chat
	- Secure messaging
	- VA health connect (24/7 phone)
	- VA telehealth
2) How do Veterans expect communications methods to be labeled/described? 
3) Under what circumstances do Veterans choose specific communications methods?
4) Which communication methods do Veterans prefer overall, and how does this impact their elevation/placement on VAMC pages?

### Hypotheses

1) Most participants will want to access these methods of communication on facility health care pages.
2) Most participants will prefer methods of communication *other* than phone numbers.
3) Most participants will find phone number labeling adequate.
4) Most participants will prefer at least one page that lists all available communication methods (ie. on the Contact Us page).
5) Most participants will have similar use cases for specific communication methods (ie. secure messaging for appointments).

## Method	

This is a list of the research methods this study will utilize, along with a description of how these methods impact the goals of this study.

**1) Usability testing**

This usability test will use staging/production sites as appropriate.

- Method
	- Task flow from specific starting points:
		- [VA.gov](https://www.va.gov/)
		- [System-level health care page](https://www.va.gov/pittsburgh-health-care/)
		- [Facility-level health care page](https://www.va.gov/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/)
- Goals
	- Gives us data on how Veterans search for communication methods on VA.gov, where Veterans generally expect to find this information, and their overall impressions of this experience.

**2) Tree test**

Tree testing will use [Optimal Workshop's Treejack](https://www.optimalworkshop.com/treejack/) tools.

- Method
	- A tree test using system-level health care links/headings
	- A tree test using facility-level health care links/headings
- Goals
	- Gives us specific data on where Veterans feel communication methods should be located on VAMC pages based on side navigation links, and page headings.

**3) Contextual inquiry**

Contextual inquiry will utilize a [Mural board with sections for different scenarios](https://app.mural.co/t/vsa8243/m/vsa8243/1646769310259/6ca0b11d0a55138780cfc6a03f4da72718e5932e?sender=u8a90be72499ecb4354e14700).

- Method
	- Asking specific questions about existing labels, based on micro-scenarios.
	- Asking specific questions about which communication method Veterans would use for a given micro-scenario.
	- [Note: It may be benefificial to explore participant mental models before showing them labels]
- Goals
	- Gives us feedback on communications elements themselves, as opposed to where they are located. This is also a chance to capture general feedback and suggestions that may not have come up in previous tasks.

### Location

Remote usability testing will be conducting via Zoom.

### Research materials

For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/VAMC-communications-methods/Conversation-Guide.md)
	
## Recruitment	

### Recruitment approach

Using Perigean recruiting, we would like to schedule **20 participants** to reach our goal of observing 10 participants.

### Recruitment criteria

**Primary criteria (must-haves)**
- *Must be enrolled in VA healthcare*
- *Laptop or desktop computer only*
	- *For this study, mobile devices may introduce technical difficulties, or make it more difficult for participants to complete the task*
- *Be able to screenshare via Zoom*
	- *Please confirm beforehand that participant is able to use Zoom, and is familiar with screen sharing*
- *At least 2 participants under 35 years old*
- *At least 2 participants over 55 years old*
- *At least 2 participant with cognitive disabilities*
- *At least 5 participants with no college degree or professional certificates*
- *At least 5 participants of color*

**Secondary criteria (nice-to-haves)**
- *Mix of Veterans and Caregivers*
- *All genders*
- *A mix of rural and urban participants*

## Timeline

[TBD post contract agreement; likely mid-late April]

### Prepare

Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: [TBD]
* Date and time of pilot session: [TBD]

### Research sessions

- Scheduled session should be for **1 hour** with the expectation they take around 45 minutes to complete. 
- The goal is for two sessions per day, leaving at least **30 minutes** between sessions.

### Availability

[TBD post-contract agreement; likely mid-late April]

Date | Time
-----|-----
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
4/-/2022 | 0:00 AM - 0:00 PM
	
## Team Roles		
- Moderator: Nick Osmanski (nick.osmanski@amida.com)
- Research guide writing and task development: Nick Osmanski (nick.osmanski@amida.com)
- Participant recruiting & screening: Perigean
- Project point of contact: Nick Osmanski (nick.osmanski@amida.com)
- Participant(s) for pilot test: [TBD]
- Note-takers: Perigean
- Observers: Michelle Middaugh (michelle.middaugh@adhocteam.us), Dave Conlon (david.conlon@va.gov), Dave Sukharan (dave.sukharan@adhocteam.us)	
	
