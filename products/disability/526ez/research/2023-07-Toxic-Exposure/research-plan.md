---
# Research Plan Metadata
title: "Research Plan for Form 526 Toxic Exposure Subsection/New Questions, July 2023"
date: 2023-08-21
last_updated: 2026-02-10
team: "Form 526 Team"
product: "21-526EZ Disability Compensation Application"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The 21-526EZ form is confusing and stressful for veterans to apply for disability compensation as the process is opaque. Questions regarding toxic exposure were added to the paper 21-526EZ form following the PACT Act, and those questions now need to be added to the online form."
  product_location: "VA.gov 21-526EZ form, one of the most used VA forms"
  user_familiarity: "Iteration on existing form - adding new toxic exposure questions following PACT Act requirements"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate form content clarity and comprehension for toxic exposure questions"
  - goal_2: "Understand potential for screen fatigue within the sub-section"

research_questions:
  - "Do users understand the concept of toxic exposure?"
  - "Can users understand the questions and accurately provide answers to those questions?"
  - "Do users have trouble connecting location questions with date data input on following screens?"
  - "Is summarizing the data collected in this subsection useful?"

hypotheses:
  - "Plain language content and reduced cognitive load will make it easy for Veterans to accurately fill out the toxic exposure questions"
  - "Reducing the cognitive load on individual screens is a good trade-off for making the form longer"
  - "Users may lose the thread between the locations they served and multiple dates needing to be entered when they are on separate screens"

expected_outcomes: "Findings will inform whether the implementation of toxic exposure questions is clear and effective, allowing Veterans to successfully report toxic exposure so their conditions can be considered for presumptive and other types of service connection."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "3 Veterans who served in Vietnam-era (1961-1980)"
    - "3 Veterans who served between 1990 and 2001 (Gulf War era)"
    - "3 Veterans who served after 2001 (Post 9-11 era)"
    - "3 who served between 1975-1990"
    - "Approximately 50% who have applied for disability benefits before and 50% who have never applied"
    - "4 Black Veterans, 4 Caucasian Veterans, 4 other ethnicities"
    - "4 participants with cognitive disabilities"
    - "4-6 participants from rural geographies"
    
  secondary_criteria:
    - "Even mix of education, gender, and military branch"
    
  screener_questions:
    - question: "In which of these periods were you on active duty?"
      qualifying_response: "Must select from: 1961-1980, 1990-2000, 2001-2023, or None of these"
    - question: "Do you ever find it difficult to read or understand information because of a learning disability or other condition?"
      qualifying_response: "Recruit 4-6 who answer yes"
    - question: "Have you ever filed a claim for disability compensation with the VA before?"
      qualifying_response: "Attempt to recruit 50% yes, 50% no"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-08-21"
  pilot_participant: "Anneliese LaTempa"
  research_dates: "2023-08-21 to 2023-08-31"
  research_review_submission: "2023-08-01"
  
session_details:
  duration_minutes: 75
  buffer_minutes: 45
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhance Veterans' personalized online experience"
  - objective: "Fast-track disability claims, starting with PACT Act claims"
    key_results:
      - "Reduce errors and ambiguity in submitted claims"
      - "Reduce processing time"
  - objective: "Build trust with Veterans"
      
veteran_journey_phases:
  - "Taking care of myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Form 526 usability research"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "PRDT: 526EZ"
  - "PACT-Act"
  - "toxic-exposure"
  - "usability-testing"
  - "authenticated"
  - "remote"
  - "HDW: Mobile"
  - "HDW: Desktop"
  - "Accessibility"
  - "cognitive-disability"
---

# Research Plan for Form 526 Toxic Exposure Subsection/New Questions 

## Background on the product

The 21-526EZ form is one of the most used VA forms and one of the largest. It is also often the first VA "service" that veterans will come into contact with, setting a precedent for their other experiecnes on VA.gov. However, it's confusing and stressful for veterans to apply for disability compensation as the process is rather opaque to the veteran. The form UX often leaves them feeling anxious and forgotten. The lack of clarity can also lead to mis-ratings, or misunderstanding of ratings, and a snowball of Appeals. 

As a new team, one of our objectives is to make sure the digital form is inline with the paper form so there is little discrepency between the two. Questions regarding toxic exposure were added to the paper 21-526EZ form following the PACT act, and those questions now need to be added to the online form. This research will test the implementation of those questions within the online form.

### OCTO Priorities 

This feature addresses these OCTO priorities:
- Enhance Veterans’ personalized online experience
- Fast-track disability claims, starting with PACT Act claims
- Reduce errors and ambiguity in submitted claims (thus reducing processing time)
- Build trust with Veterans

### Veteran Journey

Moments that matter:
- Taking care of myself

## Goals

### User goals
This feature addresses needs for both Veterans and employees. User goals include:
- Veterans can successfully report toxic exposure so that their conditions can be considered for presumptive and other types of service connection
- Claims processors can more readily identify relevant evidence in the Veteran’s file pertaining to toxic exposures because they have accurate dates and exposures to search for.

### Research Goals	

Research goals include:
- Validate form content clarity and comprehension
- Understand potential for screen fatigue within the sub-section (currently, we are unable to fully test whether the increase in number of pages is offset by reduced cognitive load on individual screens)

### Research questions
The research should answer these questions:
- Do users understand the concept of toxic exposure? Does the hint content provide them with enough information when the term is unfamiliar?
- Can users understand the questions and accurately provide answers to those questions?
- Do users have trouble connecting location questions with date data input on the following screens?
- Is summarizing the data collected in this subsection useful?

### Hypotheses

Key hypotheses include:
- Plain language content and reduced cognitive load will make it easy for Veterans to accurately fill out the toxic exposure questions.
- Reducing the cognitive load on individual screens is a good trade-off for making the form longer.
- Users may lose the thread between the locations they served and multiple dates needing to be entered when they are on separate screens.

## Methodology	 

- Moderated usability testing using mobile or desktop devices.
- Remote over Zoom

## Recruitment

### Approach

Lean maximum variation strategy

Resources:
- [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md)
- [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing).

### Criteria
Recruit 12 participants for 8-10 completes:
- 3 Veterans who served in Vietnam-era (1961-1980 – note covering some later dates here added for PACT)
- 3 Veterans who served between 1990 and 2001 (Gulf War era)
- 3 Veterans who served after 2001 (Post 9-11 era)
- 3 who served between 1975-1990 (not in the cohort)

Benefits:
- Recruit approximately 50% who have applied for disability benefits before and 50% who have never applied.
 
Ethnicity:
- Recruit 4 Black Veterans
- Recruit 4 Caucasian Veterans
- Recruit 4 other ethnicities (Hispanic, Asian, Native American)
 
Disability:
- Recruit 4 participants with cognitive disabilities
 
Rural:
- Recruit 4-6 participants from rural geographies
 
### Secondary criteria (nice-to-haves)

Attempt even mix of education, gender, and military branch
 
### Screener questions
 
1. In which of these periods were you on active duty?
  
a. 1961-1980 (recruit 3)
 
b. 1990-2000 (recruit 3)
 
c. 2001-2023 (recruit 3)
 
d. None of these (recruit 3)
 
Note: it’s ok for someone to choose multiple time periods in the first 3 options
 
2. Do you ever find it difficult to read or understand information because of a learning disability or other condition? Note: We ask this question because we want to make sure that our tools work for people who live with challenges like these.
  
a. Yes (recruit 4-6)
 
b. No
 
 
3. Have you ever filed a claim for disability compensation with the VA before? (Note: it doesn’t matter if your claim was approved or denied or how you applied)
  
a. Yes (attempt to recruit 50%)
 
b. No (attempt to recruit 50%
 
### Pilot
 
* Pilot participant email: Anneliese LaTempa; anneliese.latempa@agile6.com
* Date and time of pilot session: Monday August 21 at 3-4:30 EST
 
### Research sessions

* Session length: 1.25 hours
* Buffer time between sessions: 45 mins
* Maximum Sessions per day: 3
 
### Availability

available 8 am to 8 pm EST

## Research materials
- Discussion guide
- Prototype (in progress)
 
## Team roles	

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker**    

- Moderator: Lydia Hooper lydia.hooper@agile6.com 303-243-2148, or Nichole Nicholas nichole.nicholas@coforma.io
- Research guide writing and task development: Shannon Ford & Lydia Hooper	
- Participant recruiting & screening: Perigean
- Project point of contact: Rakshinda Aslam, rakshinda.aslam@agile6.com
- Participant(s) for pilot test: Anneliese LaTempa , anneliese.latempa@agile6.com
- Accessibility specialist (for sessions where support for assistive technology may be needed): N/A
- Note-takers: Kate Allbee, kate@verdance.co
- Observers: The team will manage invites for observers 



