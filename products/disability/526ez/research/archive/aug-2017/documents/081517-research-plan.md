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

# eBenefits Usability Research Plan

## Goal

1. Determine usability problem areas within the eBenefits user interface that occur while a Veteran is submitting a claim for disabilities related to their military service. 
Potential problem areas: 
   - Content: Does the content help the user understand what is needed from them during each step and what's next in the process? Is it clear how to locate and properly act upon information presented on the screens? Are labels clear? Is the language right?
   - Navigation: Does the screenflow make sense to the user given their mental model? Does completing a function require excessive keystrokes?
   - Control usage: Are the text fields and buttons used properly?
2. Better understand what Veterans previously told us they were thinking and feeling during their application experience by observing and listening to test participants go through the application themselves.

## Schedule

Wednesday, September 13 (all day)<br>
Thursday, September 14 (all day)<br>
Friday, September 15 (all day)<br>

## Methods

The usability test will take 45 to 60 minutes. Interviews will be conducted via go2meeting. 

## User Profiles

- Three to Five Veterans or Active Duty Servicemembers that have considered filing a disability compensation claim but never started an application. 
   - Time from separation should vary from just separated to 10+ years separated. 
   - Usage of eBenefits should vary from once a month to once a year.
   - Vary in active duty service era -- Example: during the Vietnam War era (1964-75) and/or Post 9/11
- One to Two Veterans or Active Duty Servicemembers that have started a disability compensation claim (eBenefits or paper) but never completed their application. 
   - Time from separation should vary from just separated to 10+ years separated. 
   - Usage of eBenefits should vary from once a month to once a year.

** WIP Below Here **

## What We Want to Know

There are main four sections to explore. 

- Getting Started
- Adding Claims and Evidence
- Checking Status
- Reviewing Historical Claims or Requesting an Increase

### [Getting Started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/personalinformation.png)

Getting Started includes everything up to the point of beginning to enter claims.

- Personal Information
- Address for Exam
- Homeless Information
- Important Dates
- Getting Started
- Getting Help with Claim
- Fully Developed Claim
- Fully Developed Claim More

Some [personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/personalinformation.png) is populated. 
- What else does the Veteran expect to be populated based on this?
- Where does the Veteran think this information came from?

There is a list of things you are told to have before you "[Get Started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/gettingstarted.png)."
- What in this list does the Veteran have access to easily?
- What in this list would they need to locate (save and come back later)?
- What in this list does the Veteran expect the VA to have already?
- What in this list does the Veteran not understand?
- What in this list does the Veteran not have?

There is a page that tells you [how to get help](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/gettinghelp.png).
- What do Veterans expect to see here?
- Where would Veterans go to get help?

The VA wants people to do Fully Developed Claims. 
- What information on [this page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/fullydevelopedclaim.png) makes someone want to do a fully developed claim?
- What would it take for someone to do a fully developed claim on eBenefits?

[Period of Service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/periodofservicefilled.png) is Autopopulated.
- What does verified mean?
- What does action mean?

The rest of service history seems like information we should know. What does the Veteran think?
- Combat Service
- Duty Status
- Service Separation
- Other Service Names
- Prisoner of War

[Military Pay Records]() asks you if you want to receive VA compensation instead of Military retired pay. If you receive VA compensation, your paycheck for retirement will be reduced by the VA compensation amount.
- Did the Veteran already know this? 
- Where would they expect to find this information? 

### Adding Claims and Evidence

[Adding Claims](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/yourdisabilityclaims.png)
- How does the user determine what claim to add (there are 834 claims to pick from)
![Filter by Arm](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/disabilitylist-filtered-arm.png)

[Adding Medical Treatment]() is next. Have you received any medical treatment at a VA Medical Center or DoD Military Treatment Facility?


### Checking Status

![Example Dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/example-of-status-dashboard.png)

![My Claims and Appeals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/my-claims-and-appeals.png)

### Reviewing Historical Claims or Requesting an Increase

[Requesting an Increase](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/yourdisabilityclaims.png)

![Screenshot of Before](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/yourdisabilityclaimsrequest-increase.png)

![Screenshot of After](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/yourdisabilityclaimsrequest-increase-done.png)


<hr>
<hr>


## Prototypes to Test

### Increases

- [Your Disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/yourdisabilityclaims.png) summary page is where this happens today after you click through beginning of the application. 

### Separate Claims: Conditions, PTSD, Unemployability
- Each one of these has a "getting started" screen today. Should these be different paths, TurboTax style? 

## Notes

[Adding a PTSD Incident](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/ptsd-statement.png) is an entirely different flow and starts with a "getting started" screen. Same for [Unemployability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/sep-2017/screenshots/unemployability-docs-needed.png). 
- Can hold on testing and test when appropriate
- Can test these "getting started screens" as all separate flows for different types of claims -- breaking down the decision tree at the beginning to separate these different paths

