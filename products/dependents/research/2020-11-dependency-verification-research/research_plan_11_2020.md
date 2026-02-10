---
# Research Plan Metadata
title: "Research Plan for USDS, Dependency Verification Workflow, November 2020"
date: 2020-12-01
last_updated: 2026-02-10
team: "USDS"
product: "Dependency Verification"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans receive benefits based on number of dependents. When dependency status changes (divorce, aging, death), Veterans often don't update VA, resulting in overpayments and debt. Need to improve the ease of maintaining accurate dependent information."
  product_location: "VA.gov - Form 21-686c and Form 21-0538 processes"
  user_familiarity: "Iteration - exploring improvements to existing dependency verification workflow"
  product_brief_url: ""

# Research Design
methodology: "ethnographic interviews"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand whether Veterans remember to manage dependent benefits with the VA and how they keep information up-to-date"
  - goal_2: "Identify ways Veterans do regular business with VA where reminders could be integrated to update dependent information"
  - goal_3: "Determine best methods for reminding Veterans to make changes to dependent status"

research_questions:
  - "Do Veterans remember to manage dependent benefits with the VA? If so, how do they go about keeping their dependent information up-to-date? If not, why not?"
  - "What are ways in which Veterans do regular business with the VA where we might remind them to update their information around dependents?"
  - "How would Veterans like to be reminded to make a change?"
  - "If reminding Veterans as part of logging in on VA.gov, would it be a better strategy to make it required or optional?"
  - "If reminding Veterans as part of logging in on VA.gov, would it be a better strategy to include or not include current dependents?"
  - "Are there unique aspects to Veterans that have been overpaid that would help us identify the best ways to update VA with accurate information on dependents?"
  - "Are Veterans that use VA.gov regularly or semi-regularly a significant part of the population of Veterans that are being overpaid?"
  - "Conversely, are Veterans that do not use VA.gov (either that can use but choose not to, or cannot for some reason) a significant part of the population of Veterans that are being overpaid?"

hypotheses:
  - "Veterans who regularly or semi-regularly use VA.gov for online self-service can be intercepted in smarter and more effective ways to encourage them to keep information about their dependents up-to-date"
  - "Smarter targeting based on factors unique to the individual (that might make them more likely to have a change in dependents) will be more effective"
  - "More effective interventions will create the behavior of making updates with VA as dependencies change"

expected_outcomes: "Identify product improvements and intervention strategies that will reduce Veteran debt owed to VA from dependency-related overpayments"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Qualitative sample focused on Veterans with dependents who use VA benefits"
  
  primary_criteria:
    - "Must use their VA benefits"
    - "Must have dependents"
    - "Must use their Veteran benefits for their dependents"
    - "Must have access to a computer and be able to do a Zoom call and share screen"
    
  secondary_criteria:
    - "May have had a change in the status of their dependents as the result of age, marital status, or other life change"
    
  screener_questions:
    - question: "Do you use your VA benefits?"
      qualifying_response: "Yes"
    - question: "Do you have dependents?"
      qualifying_response: "Yes"
    - question: "Do you use your Veteran benefits for your dependents?"
      qualifying_response: "Yes"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2020-11-30"
  pilot_participant: "Steve Kovacs and Martha Wilkes"
  research_dates: "2020-12-01 to 2020-12-04"
  research_review_submission: "2020-11-20"
  
session_details:
  duration_minutes: 40
  buffer_minutes: 20
  max_sessions_per_day: 6
  
# Strategic Alignment
octo_priorities:
  - objective: "Reduce Veteran debt from benefit overpayments"
    key_results: 
      - "Improve accuracy of dependent information in VA systems"
      - "Reduce overpayments related to unreported dependency status changes"
      
veteran_journey_phases:
  - "Starting Up"
  - "Living Civilian Life"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Form 21-686c research"
    - "Form 21-0538 process research"
    
tags:
  - "PRDT: Dependents"
  - "BNFT: Dependency"
  - "AUD: Veterans"
  - "AUD: Dependents"
  - "ethnographic interviews"
  - "remote"
  - "authenticated"
  - "21-686c"
  - "21-0538"
  - "debt"
  - "overpayments"
  - "dependency verification"
  - "life events"
  - "moderated"
  - "discovery"
  - "customer journey"
  - "mental model"
---


# Research Plan for Dependency Verification Workflow to Reduce Veteran Debt Owed to VA 

Related concepts: Forms 686C Dependent Verification Form, 0538 Dependent Verification Letter, associated VA business processes, Veteran mental model and/or customer journey

## Goals
### Product and team
Working with USDS team lead Steve Kovacs, this research explores how we might improve the ease with which Veterans maintain an accurate list of their dependents with the VA. The business goal is to develop approaches or product improvements that will reduce the amount of Veteran debt owed to the VA around overpayments based on a change in dependency status, brought about by life events such as divorce, aging, or death. 

The research lead for this project will be Kevin M. Hoffman. The design lead for this project will be Martha Wilkes. 

### Background
A Veteran receives benefits commensurate with the number of their dependents. This could include spouses, children, grandchildren, and caregivers. As the number of dependents a Veteran has decreases due to aging or a life change, that Veteran should report that decrease to Veteran’s Affairs so that adjustments are made to the benefits that they receive. If those adjustments are not made, the Veteran is overpaid and is in debt to VA. 

There are two forms related to the process of updating a Veteran’s dependents. One is the  Application Request to Add and/or Remove Dependents ([About VA Form 21-686c | Veterans Affairs](https://www.va.gov/find-forms/about-form-21-686c/))  and the other the Status of Dependents Questionnaire (and associated automated mailing process), (https://www.va.gov/find-forms/about-form-21-0538/). An automated letter and form (0538) is sent to Veterans via mail once every 8 years to encourage them to fill out verification of dependents form (0538) which they do on paper. If the Veteran has to add or remove dependents, they will likely need to fill out the 686-c as well as other forms (in some cases related to dependents over the age of 18 who are attending college). 

There are three Veteran user types we are considering as we conduct this research. The first is a Veteran who uses online self-service on VA.gov with some regularity. The second is a Veteran who has the credentials to use VA.gov, but doesn’t for some reason. The third is a Veteran who doesn’t use online self service and my not be able to due to access issues. 

### Research Questions
Do Veterans remember to manage dependent benefits with the VA? If so, how do they go about keeping their dependent information up-to-date? If not, why not? 

What are ways in which Veterans do regular business with the VA where we might remind them to update their information around dependents? 

How would Veterans like to be reminded to make a change? 

If reminding Veterans as pat of logging in on VA.gov, would it be a better strategy to make it required or optional? 

If reminding Veterans as pat of logging in on VA.gov, would it be a better strategy to include or not include current dependents? 

Are there unique aspects to Veterans that have been overpaid that would help us identify the best ways to update VA with accurate information on dependents?

Are Veterans that use VA.gov regularly or semi-regularly a significant part of the population of Veterans that are being overpaid? 

Conversely, are Veterans that do not use VA.gov (either that can use but choose not to, or cannot for some reason)  a significant part of the population of Veterans that are being overpaid?


### Hypothesis
Veterans who regularly or semi-regularly use VA.gov for online self-service to do business with Veterans Affairs can be intercepted in smarter and more effective ways to encourage them to keep information about their dependents up-to-date. 

By smarter, we mean processes that target factors unique to the individual that might make them more likely to have a change in dependents that merits reporting to the VA. By more effective, we mean more likely to create the behavior of making updates with VA as dependencies change. 

## Method
We will be using remote moderated ethnographic interviews via Zoom combined with open observation of usage of VA.gov to define the Veteran customer journey as it relates to making an update to dependency status. This method will allow us to consider and observe VA.gov usage if it relates to the Veteran’s natural behavior, but not assume that they are likely to use it. 

## Participants and Recruitment
We would like to talk to no less than 6 and no more 15 Veterans. 

**1** **Primary criteria / Must have** 

* The Veteran must use their VA benefits.
* The Veteran must have dependents. 
* The Veteran must use their Veteran benefits for their dependents. 
* The Veteran must have access to a computer and be able to do a Zoom call, as well as share their screen. 

**2** **Secondary criteria / Would like to have** 
* The Veteran may have had a change in the status of their dependents as the result of age, marital status, or other life change. 

## When?
### Timeline
Research with Veterans will take place between Tuesday, December 1st and Friday, December 4

### Prepare
If anything, we will using VA.gov as it currently exists. No prototypes or new designs will be tested with Veterans. 

### Length of Sessions
Each session should be 40 minutes maximum. We will block a full hour for each session so that we have time for debrief and synthesis after we complete each session. 

### Availability
15 slots, they can all be filled. 

Tuesday, December 1
* 8am ET
* 9am ET
* 10am ET
* 5pm ET
* 6pm ET
* 7pm ET

Thursday, December 3
* 5pm ET
* 6pm ET
* 7pm ET

Friday, December 4
* 8am ET
* 9am ET
* 10am ET
* 5pm ET
* 6pm ET
* 7pm ET

### The Pilot 
A pilot will be conducted with Steve Kovacs and Martha Wilkes on Monday, November 30. 

## Team Roles
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker**
* Moderator: Kevin M. Hoffman 443-416-7227
* Research guide writing and task development (usually but not always same as moderator): Kevin M. Hoffman
* Participant recruiting & screening: Perigian
* Project point of contact: Kevin M. Hoffman
* Participant(s) for pilot test:
* Note-takers: Martha Wilkes
* Observers:  [steven.kovacs@va.gov](mailto:steven.kovacs@va.gov)   [martha.wilkes@va.gov](mailto:martha.wilkes@va.gov)  [paul.shute@va.gov](mailto:paul.shute@va.gov)   [alejandro.mendiolaflores@va.gov](mailto:alejandro.mendiolaflores@va.gov)  

## Resources
* Project Brief: _Project brief should live in the appropriate va.gov-team product folder, simply paste a link to it here_
* Convo Guide _Discussion guide should live in the appropriate va.gov-team product folder, simply paste a link to it here_
* Synthesis _Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)_
* Lessons Learned _Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here._
* Read-Out/Results
	* _Read-out presentation should live in the appropriate product repo and folder; paste a link to it here._
	*  Don’t forget to add a link to your research folder to the research tracker!  [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md) 
