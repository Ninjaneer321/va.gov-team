---
# Research Plan Metadata
title: "Research Plan for Benefits Team 1: Initial Decision CST Research, March 2023"
date: 2023-03-14
last_updated: 2023-03-14
team: "Benefits Team 1"
product: "Claim Status Tool (CST)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans are not fully satisfied with the claim status tool. They report it doesn't provide enough detail and they often feel like they're in the dark while waiting for updates about their claims."
  product_location: "Claim Status Tool on VA.gov"
  user_familiarity: "Iteration on existing product"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-11-Decision-Reviews/research-findings.md"

# Research Design
methodology: "Co-design session, Semi-structured interviews"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand what information Veterans specifically want to know to stay informed as their claim goes through the initial decision process"
  - goal_2: "Understand the experience Veterans have with requests to provide additional evidence and find opportunities to help Veterans provide better evidence earlier in the process"
  - goal_3: "Understand the experience Veterans have with requests for C&P exams and find opportunities to set the right expectation for Veterans going to C&P exams"

research_questions:
  - "What do participants typically use VA.gov for and how long have they been using it?"
  - "What do Veterans think is the status of their claim when viewing CST?"
  - "How clear is the status of the claim to Veterans on a scale of 1-5?"
  - "Is there any action Veterans think they need to take, and what makes them think that?"
  - "Do Veterans have a clear sense of what other actions will be required from them as the claim goes through the review process?"
  - "How did Veterans know they had to do a C&P exam as part of the claim process?"
  - "What is the most confusing part of the CST web page?"
  - "What is the most helpful part of the CST web page?"

hypotheses:
  - "The claim status information presented in the current CST UI is not informative enough for Veterans"
  - "The main issue for Veterans is not the CST UI itself, but the amount of time it takes for the claim to get resolved"

expected_outcomes: "By the end of this study we will have a better idea of what is confusing about the CST experience, what is working well, and what are the top features or product improvements that might make CST more helpful for veterans awaiting claim decisions."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Maximum variation sampling"
  
  primary_criteria:
    - "Veterans who currently have an open disability compensation claim"
    - "Must be willing to log in and share screen with personal information"
    - "Must have an authenticated VA.gov account"
    - "6 Black veterans"
    - "6 Hispanic veterans"
    - "10 rural veterans"
    - "10 veterans without a college degree"
    
  secondary_criteria:
    - "Experience with C&P exams preferred"
    - "Experience with receiving requests for additional claims evidence preferred"
    - "Ideally 12-16 of study participants will have experiences with receiving requests for additional evidence or C&P exams, or both"
    
  screener_questions:
    - question: "Are you currently waiting on the result of a disability compensation claim?"
      qualifying_response: "Yes"
    - question: "Have you received requests from the VA to provide additional evidence for your disability compensation claim?"
      qualifying_response: "Yes (preferred but not mandatory)"
    - question: "As a part of your claims process, did you have to undergo a claim exam (C&P exam or compensation and pension exam)?"
      qualifying_response: "Yes (preferred but not mandatory)"
      
participants:
  veterans: 20
  caregivers: 0
  dependents: 0
  total_recruited: 20
  completed_sessions_goal: 20
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-03-22"
  pilot_participant: "Rocio de Santiago"
  research_dates: "2023-03-27 to 2023-03-31"
  research_review_submission: "2023-03-14"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families can apply for all benefits online"
    key_results: []
  - objective: "Logged-in users can easily track applications, claims, or appeals online"
    key_results: []
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: []
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results: []
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-11-Decision-Reviews/research-findings.md"
    
tags:
  - "BNFT: Disability"
  - "PRDT: Claim Status Tool"
  - "PRDT: Track Claim Status"
  - "AUD: Veterans"
  - "DSC: Alert boxes"
  - "DSP: Track application status"
  - "DSP: Notifications and updates"
  - "semi-structured-interviews"
  - "co-design"
  - "authenticated"
  - "remote"
  - "disability-compensation-claims"
  - "evidence-submission"
  - "CP-exams"
---

# Research Plan for Benefits Team 1: Initial Decision CST Research

![Artboard](https://user-images.githubusercontent.com/95102058/223499048-193a8848-d8ac-4b22-8a42-9fed6a8c4a81.png)

## Background

In [past research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-11-Decision-Reviews/research-findings.md), we have found that Veterans are not fully satisfied with the claim status tool. In particular, we have heard that it doesn't provide enough detail and that Veterans often feel like they're in the dark while waiting for updates about their claims. 

**This research will be a co-design session** where we review the production version of CST with veterans who currently have claims in progress, highlighting pain points and brainstorming possible design changes to improve the overall experience. 

### OCTO Objectives 

This work supports the following OCTO Objectives: 

- Veterans and their families can apply for all benefits online
- Logged-in users can easily track applications, claims, or appeals online
- Veterans and their families can find a single, authoritative source of information
- Logged-in users have a personalized experience, with relevant and time-saving features

### Veteran Journey
This work touches on various aspects of the Veteran Journey. These findings will be relevant to whenever a Veteran is applying for disability compensation benefits, which can happen at any point along their life journey. 

## Research Goals	
With this research, we want to speak to Veterans who are currently waiting for decisions on disability compensation claims they filed on VA.gov. We want to understand what's working and what's not working about the CST experience while they are waiting for this claim. The sessions will be used to identify issues with CST and brainstorm possible solutions.

There are three areas in particular that we hope to explore:

- We want to understand **what information Veterans specifically want to know to stay informed** as their claim goes through the initial decision process.

- We want to understand **the experience Veterans have with requests to provide additional evidence.** We want to find opportunities to help Veterans provide better evidence in support of their claims, earlier in the process.

- We want to understand **the experience Veterans have with requests for C&P exams.** We want to find opportunities to set the right expectation for Veterans going to C&P exams.

### Outcome
Hopefully by the end of this study we will have a better idea of: 
- What is confusing about the CST experience for Veterans who are awaiting claim decisions. 
- What is working well in CST for these Veterans. 
- What are the top features or product improvements that might make CST more helpful for veterans awaiting claim decisions. 

### Research questions
Part 1: Warm up
- What do you typically use VA.gov for? 
- How long have you been using VA.gov?
- Do you interact with the VA in other ways – in person, on the phone?
- Do you currently have a claim in progress on VA.gov? (They should.)
- About how long ago did you file this claim? 

Part 2: Log in in to VA.gov
- [Navigating to CST] Tell me what you see here.
- What do you think is the status of your claim?
- On a scale of 1-5, how clear would you say the status of this claim is?  
- Is there any action that you think you need to take here? What makes you think that?
- Do you have a clear sense of what other actions will be required from you as this claim goes through the review process? Why or why not?
- Did you do a C&P exam as part of the claim process? If yes, how did you know that you had to do that? 
- What is the most confusing part of this web page?
- What is the most helpful part of this web page? 

Part 3: Co-design exercise 
- See details in [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/conversation-guide.md)


### Hypothesis

- The claim status information presented in the current CST UI is not informative enough for Veterans.
- The main issue for Veterans is not the CST UI itself, but the amount of time it takes for the claim to get resolved.  

## Methodology	

**Semi-structured interviews**
The primary goal of this research is to get the participants' honest, visceral reaction to a live CST environment with their real claims. As such, there are specific prompts and focus areas that will help guide the discussion (see above) but the format will be highly conversation, flexible, and hopefully highly collaborative between moderator and participant. 

### Location
Remote on Zoom

### Research materials

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/conversation-guide.md)
	
## Recruitment	

### Recruitment approach
For this study we want to talk to Veterans who **currently have an open disability compensation claim** and who have a valid VA.gov account (we don't want them to have to create one during the session). We will be reviewing the Veteran's **actual VA.gov signed-in experience** with them to identify challenges and pain points. 

> Are you currently waiting on the result of a disability compensation claim? 

- Participants should respond "Yes" to this.

> Have you received requests from the VA to provide additional evidence for your disability compensation claim? 

- Experience with additional evidence requests is not mandatory but preferred for participation.

> As a part of your claims process, did you have to undergo a claim exam? These might also be called a C&P exam or a compensation and pension exam.

- Experience with C&P exams are not mandatory but preferred for participation.

### Recruitment criteria

** **KICKOFF CALL WITH PERIGEAN REQUESTED** **

Possible dates/times for kickoff call:
- Tue, March 14th: 11 AM - 12 PM
- Wed, March 15th: 2 - 3 PM
- Thu, March 16th: 10 - 11 AM or 11 AM - 12 PM

**Primary criteria (must-haves)**

We are looking for Veterans who have an open disability compensation claim. They must be willing to log in and share screen, which may contain personal information. They must have an authenticated account that they can log into.

We would like to recruit 20 veterans. We would like representation from the following underrepresented groups: 

- 6 Black veterans
- 6 Hispanic veterans
- 10 rural veterans
- 10 veterans without a college degree

**Secondary criteria**

Participant experience with C&P exams and receiving requests for additional claims evidence are preferred. Ideally, 12-16 of study participants will have experiences with receiving requests for additional evidence or C&P exams, or both.

## Timeline
March - April 2023

Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: rocio@coforma.io
* Date and time of pilot session: March 22, 4 PM EST

### Research sessions
* Planned dates of research: March 27 – 31

### Length of sessions
- 1 hour sessions
- 30 minute buffer time between sessions 
- Maximum 4 sessions per day

### Availability
8 AM – 6 PM EST
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Skyler Schain (skyler@coforma.io) , Ruben Sun (ruben@coforma.io)
- Research guide writing and task development (usually but not always same as moderator): Skyler Schain, Ruben Sun
- Participant recruiting & screening: Perigean
- Project point of contact:	Skyler Schain, Ruben Sun, Jacob Worrell
- Participant(s) for pilot test: Rocio de Santiago (rocio@coforma.io) 
- Observers: Jacob Worrell (jacob.worrell@adhocteam.us), Sarah Ortiz Shields (sarah.shield@coforma.io) , Sam Cormier (sam.cormier@coforma.io), Jerek Shoemaker (jerek.shoemaker@adhocteam.us), Jared Cunha (jared@coforma.io), Kevin Duensing (kevin.duensing@adhocteam.us), Josh Kim (josh.kim@adhocteam.us), Eva Floyd (eva@coforma.io)
