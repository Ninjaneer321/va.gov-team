---
# Research Plan Metadata
title: "Research Plan for UAE Team, Appointments - PACT and SUD, September 2025"
date: 2025-09-01
last_updated: 2025-09-01
team: "UAE Team (Appointments)"
product: "PACT Expansion and Substance Use Disorder (SUD) Scheduling"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "As part of expanding online self-scheduling, we're adding two new features to the scheduling flow: expanding the teams' roles returned during the Patient Aligned Care Team (PACT) check and adding Substance Use Disorder (SUD) as a mental health sub-type of care. The PACT expansion will be implemented on the backend only, with no UI changes in this phase."
  product_location: "Auth under My HealtheVet on VA.gov"
  user_familiarity: "Iteration on existing VA.gov appointments tool"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/2025-expand-access-to-scheduling/README.md"

# Research Design
methodology: "Semi-structured interviews with tasks and direct questions"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand Veterans' mental model for scheduling with their PACT, especially regarding the different teams' roles"
  - goal_2: "Identify opportunities to update UI on the clinic selection page or any other pages in the scheduling flow"
  - goal_3: "Understand whether Veterans consider SUD to be part of mental health when scheduling appointments and how they prefer to schedule it"

research_questions:
  - "How do Veterans navigate the Type of Care selection page, the location selection page, and the clinic selection page in the appointment scheduling flow?"
  - "What parts (if any) of the scheduling flow cause friction?"
  - "What do Veterans think about the clinic selection page?"
  - "What would the clinic selection page look like in an ideal world?"
  - "Are Veterans aware of their PACT and who/what roles are considered part of their team? If yes, do Veterans associate their PACT with the appointments they are scheduling through the tool?"
  - "Do Veterans think SUD is a mental health sub-type of care?"

hypotheses:
  - "Veterans may be confused and unsure about which clinic to select due to a significantly longer list of options and clinic names that are unclear or difficult to interpret"
  - "Veterans prioritize scheduling appointments based on type of care, location, provider, and availability, while selecting a specific clinic is generally less important in their decision-making process"
  - "Most Veterans likely do not know what a PACT is, who their assigned PACT is, or whether they have ever seen a provider from that team"
  - "Veterans who know what the assigned PACT is and have seen providers on their assigned PACT may expect to schedule directly with them instead of choosing a clinic"
  - "Most Veterans may not recognize the connection between type of care, clinic selection, and their assigned providers, even if they know what a PACT is"
  - "Veterans may recognize some clinics from previous experiences, but more clinics may not improve their online scheduling experience"
  - "Most Veterans may not expect to find SUD service under the Mental Health category, but the descriptive context on the sub-type of care page may help them understand and learn this organization"
  - "Some Veterans may select primary care when asked to schedule appointments to discuss unhealthy use of drugs or alcohol"

expected_outcomes: "The learnings from this study will clarify how Veterans understand PACT and schedule with their care team, guide UI improvements to the scheduling flow, and reveal how Veterans view SUD as part of mental health and prefer to schedule it."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Diverse sample across age, abilities, and ethnicities"
  
  primary_criteria:
    - "All participants must be enrolled in VA healthcare"
    - "All participants must have received care at a VA facility in the past year"
    - "All participants should have scheduled or attempted to schedule appointments using MHV on VA.gov within the last 12 months"
    - "All participants must have a MHV premium account, OR an authenticated / identity-proofed ID.me account"
    - "Must identify as a gender other than male (recruit no less than 6)"
    - "Must be over the age of 55 (recruit no less than 6, and at least 3 over the age of 70)"
    - "Must have scheduled a mental health appointment (recruit no less than 7)"
    
  secondary_criteria:
    - "At least 7 participants who identify as other than Caucasian"
    - "At least 7 participants who join the session on their mobile phone"
    - "At least 3 participants who have a cognitive disability"
    
  screener_questions:
    - question: "Do you have an email and password for either Login.gov or ID.me that you use to sign into VA.gov?"
      qualifying_response: "Yes"
    - question: "Do you have a My HealtheVet (MHV) account?"
      qualifying_response: "Yes"
    - question: "Have you signed into the My HealtheVet website at least once in the last 12 months?"
      qualifying_response: "Yes"
    - question: "Have you scheduled or attempted to schedule a medical appointment in the last 12 months?"
      qualifying_response: "Yes"
    - question: "Have you ever scheduled a mental health appointment?"
      qualifying_response: "Yes - recruit 7; No - recruit 8"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2025-09-DD to 2025-09-DD"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Improve satisfaction with our web and mobile products by 5 points"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/2025-expand-access-to-scheduling/README.md"
  conversation_guide: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2025-09-pact-sud-uat/conversation-guide.md"
    
tags:
  - "health-care"
  - "appointments"
  - "pact"
  - "substance-use-disorder"
  - "mental-health"
  - "scheduling"
  - "veterans"
  - "authenticated"
  - "semi-structured-interviews"
---


	# Research Plan for [UAE Team, Appointments, September, 2025]

## Background 🏗️

As part of expanding online self-scheduling, we’re adding two new features to the scheduling flow: expanding the teams’ roles returned during the Patient Aligned Care Team (PACT) check and adding Substance Use Disorder (SUD) as a mental health sub-type of care. The PACT expansion will be implemented on the backend only, with no UI changes in this phase. This study aims to understand Veterans’ mental models around scheduling—specifically, what roles they consider part of their PACT team, such as physician assistants, nurse practitioner, clinical pharmacy, and more, how an expanded set of clinic options affects their scheduling experience, and whether they consider SUD to be part of mental health when scheduling appointments.

**[Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/2025-expand-access-to-scheduling/README.md).**


### OCTO-DE Priorities

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
### Veteran Journey
	
- `Starting Up`
- `Taking Care of Myself`
- `Aging`


## Research Goals 🥅	

### Goals

`1.` **Understand Veterans’ mental model for scheduling with their PACT, especially regarding the different teams' roles.**

`2.` **Identify opportunities to update UI on the clinic selection page or any other pages in the scheduling flow.**

`3.` **Understand whether Veterans consider SUD to be part of mental health when scheduling appointments and how they prefer to schedule it.** 
  
### Outcome

---

**The learnings from this study will clarify how Veterans understand PACT and schedule with their care team, guide UI improvements to the scheduling flow, and reveal how Veterans view SUD as part of mental health and prefer to schedule it.** 

---

### Research questions

**`1.`How do Veterans navigate the Type of Care selection page, the location selection page, and the clinic selection page in the appointment scheduling flow?**

**`2.`What parts (if any) of the scheduling flow cause friction?**

**`3.`What do Veterans think about the clinic selection page?**

**`4.`What would the clinic selection page look like in an ideal world?**

**`5.`Are Veterans aware of their PACT and who/what roles are considered part of their team? If yes, do Veterans associate their PACT with the appointments they are scheduling through the tool?**

**`6.`Do Veterans think SUD is a mental health sub-type of care?**  


### Hypotheses

---

- **Veterans may be confused and unsure about which clinic to select due to a significantly longer list of options and clinic names that are unclear or difficult to interpret.**
- **Veterans prioritize scheduling appointments based on type of care, location, provider, and availability, while selecting a specific clinic is generally less important in their decision-making process.**
- **Most Veterans likely do not know what a PACT is, who their assigned PACT is, or whether they have ever seen a provider from that team.**
- **Veterans who know what the assigned PACT is and have seen providers on their assigned PACT may expect to schedule directly with them instead of choosing a clinic.**
- **Most Veterans may not recognize the connection between type of care, clinic selection, and their assigned providers, even if they know what a PACT is.**
- **Veterans may recognize some clinics from previous experiences, but more clinics may not improve their online scheduling experience.**
- **Most Veterans may not expect to find SUD service under the Mental Health category, but the descriptive context on the sub-type of care page may help them understand and learn this organization.**
- **Some Veterans may select primary care when asked to schedule appointments to discuss unhealthy use of drugs or alcohol.**

---

  
## Methodology  🛠️

**The interviews will combine tasks and direct questions, focusing on users’ ability to navigate the initial screens of the scheduling flow, their reactions to and understanding of these screens, and their preferences and expectations around clinic selection, PACT, and how they view SUD in relation to mental health.**
- There are 5 total sections. Sections 1-3 are tasks that involve navigating to schedule a visit with a primary care provider, social worker, and pharmacist. Section 4 includes questions specifically around PACT and section 5 involves navigating to select a mental health appointment. Tasks 1-3 are similar, just changing the type of care a user is navigating. Therefore, every participant will do Task 1 (primary care) and then either Task 2 (social work) or Task 3 (pharmacist) and then continue to complete sections 4 and 5. 

### Location

- [X] **Remote**
- [ ] **In-person**


## Research materials 📔
	
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2025-09-pact-sud-uat/conversation-guide.md)

	
## Recruitment 🎯	

### Recruitment approach

We will partner with Perigean to recruit Veterans. All efforts will be made to recruit a diverse sample, with participants' backgrounds ranging across age, abilities, and ethnicities.

### Recruitment criteria

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **[15]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[15]**
- `Ideal completed sessions:` **[10]**

### Primary criteria (must-haves)

- `All participants must be enrolled in VA healthcare.`
- `All participants must have received care at a VA facility in the past year.`
- `All participants should have scheduled or attempted to schedule appointments using MHV on VA.gov within the last 12 months.`
- `All participants must have a MHV premium account, OR an authenticated / identity-proofed ID.me account. In the email sent by Perigean, they should be informed that you will need to log in to their accounts either before or during the interview session so they should have their account details handy for the session, as they will be required to sign in.`
- `Must identify as a gender other than male (recruit no less than 6)`
- `Must be over the age of 55 (recruit no less than 6, and at least 3 over the age of 70)`
- `Must have scheduled a mental health appointment (recruit no less than 7)`

#### Secondary criteria (nice-to-haves)

- `At least 7 participants who identify as other than Caucasian`
- `At least 7 participants who join the session on their mobile phone`
- `At least 3 participants who have a cognitive disability`

### Screener questions

1. Do you have an email and password for either Login.gov or ID.me that you use to sign into VA.gov?
	- Yes (Go onto Screener question 2)
	- No (Disqualify)
2. Do you have a My HealtheVet (MHV) account?
	- Yes (go on to Screener question 3)
	- No (Disqualify)
3. Have you signed into the My HealtheVet website at least once (this could be at home, at a VA clinic, hospital, or VA community care provider) in the last 12 months?
	- Yes (go on to Screener question 4)
	- No (disqualify)
4. Have you scheduled or attempted to schedule a medical appointment in the last 12 months?
	- Yes (go on to Screener question 5)
	- No (Disqualify)
5. Have you ever scheduled a mental health appointment?
	- Yes (recruit 7)
	- No (recruit 8)


## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 


### Optional Kick-off Call with Perigean

- `Available timeslots for a kick off call are below:`
	- **Tuesday, Sept 9, 3-5pm EST**
	- **Thursday, Sept 11, 2-4pm EST**
	- **Friday, Sept 12, 11am-1pm EST**


### Prepare

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 


### Research sessions
- `Planned dates of research:` **09/DD-09/DD**


### Length of sessions

- `Session length:` **1 hour**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **3 per day**


### Availability - 
> [!NOTE]
**Will add in times when we are closer to research kick-off**

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`

  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Jenny Wang, Lena Cardoso**	
- `Research guide writing and task development (usually but not always same as moderator):` **Jenny Wang, Lena Cardoso, Kristen Faiferlick**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Jenny Wang, Lena Cardoso**		
- `Note-takers:` **Enter full name** ***or*** **[Designate Perigean**	
- `Observers:` [Link to sign-up sheet](insert URL here)


## Approvals ✅
- `Reviewed by [OCTO Product Owner, Kristen McConnell] on 08/06/2025`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
