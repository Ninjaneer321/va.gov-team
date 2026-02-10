---
# Research Plan Metadata
title: "Research Plan for Dragons Team, HCA Duplicates Mitigation, March 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "Dragons"
product: "Health Care Application (10-10EZ)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "50% of health care applications submitted via VA.gov are duplicate applications. October 2018 research showed duplicates result from communication problems - applicants aren't aware of their application decision and don't know where to find that information. Need to detect previous applications and surface health care status information."
  product_location: "VA.gov health care application section"
  user_familiarity: "Iteration - adding duplicate detection and status information to existing application flow"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md"

# Research Design
methodology: "usability-testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate that the duplicate detection flow reduces frustration for Veterans"
  - goal_2: "Ensure users understand why they're being asked for personal information and to sign in"
  - goal_3: "Test comprehension of health care status messages for different enrollment states"

research_questions:
  - "For logged out users, do they understand why we are asking for personal information before they can go to the HCA?"
  - "For logged out users who are found in the ESR, do they have any idea why we're asking them to sign in?"
  - "If LOA1, do they understand why we are asking them to verify their identity?"
  - "For LOA3, do they understand what we are communicating to them about their past HCA status?"
  - "How frustrated do people get at each step in the flow?"
  - "Is there any way to reduce their frustration?"
  - "Do users understand the different messages we show them around different health care statuses (ineligible, enrolled, etc.)?"

hypotheses:
  - "Overall, users will not find the flow confusing, though they may find it frustrating"
  - "Users will understand we need to tell them something, and that is why we are asking them to sign in"
  - "Users will start to get frustrated when we ask them to verify their identity, and when we tell them they are ineligible"
  - "However, they will find this option to be better than not knowing their health care status at all"
  - "Users will understand the different messages we show them around different health care statuses"

expected_outcomes: "Validate the duplicate detection flow and content before full build. Will conduct UAT after code implementation to test with live backend."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "maximum variation"
  
  primary_criteria:
    - "Must have applied for VA health care at least once before"
    - "Have computer that can support GoToMeeting"
    
  secondary_criteria:
    - "Nice to have: People who have applied more than once for health care"
    - "1-2 people under 40"
    - "1-2 women"
    - "1-2 people of color"
      
participants:
  veterans: 7
  caregivers: 0
  dependents: 0
  total_recruited: 7
  completed_sessions_goal: 7
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2019-03-06 to 2019-03-12"
  research_review_submission: "2019-02-25"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Reduce duplicate health care applications by 50%"
      
veteran_journey_phases:
  - "Getting out"
  - "Starting up"
  - "Taking care of myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "October 2018 HCA duplicate applications research: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca%202.0/research/oct-2018"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Form 10-10 EZ"
  - "PRDT: Health-care-application"
  - "usability-testing"
  - "remote-moderated"
  - "prototype-testing"
  - "InVision"
  - "duplicate-applications"
  - "ESR"
  - "identity-verification"
  - "LOA1"
  - "LOA3"
---

# Research Plan for Dragons: HCA duplicates, March 2019

## Goals
**1. What product & team are you doing this research for?**

Dragons: HCA work to mitigate duplicate applications

**2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md)

Currently, 50% of health care applications submitted via VA.gov are duplicate applications, meaning people are applying who have applied before. In October of 2018, we talked to veterans and [our research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca%202.0/research/oct-2018) showed that duplicate applications were primarily the result of communication problems with the VA. Participants weren't aware of the decision that had been made about their original application and didn't know where to find that information.

Our work on the health care application hopes to mitigate this problem by detecting if people have applied for health care previously, and, if they have, surfacing information on their health care status so they can better determine next steps.

**3. Research questions: What question(s) do you hope to be able to answer after completing this research?** 

Overall understanding of the flow
- For logged out users, do they understand why we are asking for personal information before they can go to the HCA?
- For logged out users who are found in the ESR, do they have any idea why we're asking them to sign in?
- If LOA1, do they understand why we are asking them to verify their identity?

Overall comprehension of content

- For LOA3, do they understand what we are communicating to them about their past HCA status?

Overall level of frustration and how we can help reduce it

- How frustrated do people get at each step in the flow (asking for their personal info, being told they need to login, being told they need to verify their identity, when they find out their health care determination)?
- Is there any way to reduce their frustration?

**4. Hypothesis: What is your hypothesis for this research?** 

- Overall, user will not find the flow confusing, though they may find it frustrating.
- Users will understand we need to tell them something, and that is why we are asking them to sign in.
- Users will start to get frustrated when we ask them to verify their identity, and when we tell them they are ineligble. However, they will find this option to be better than not knowing their health care status at all.
- Users will understand the different messages we show them around different health care statuses (eg. someone is ineligible, someone is enrolled, etc.)

## Method
**1.	What method of research are you planning?** 

We will be conducting remote, moderated testing with an InVision prototype.

For this project, we will later need to test this work in code, but we can't do that right now since the work isn't yet finished being built. To account for this, we will conduct UAT once build is complete.
  
**2.	Why this method? How does this methodology help you answer your research questions?**

This method helps us test the specific things we are looking to test in this research — flow, content, and overall user perception and level of frustration.

We *do* need to test how this works with a live backend, but we will use UAT for that.

**3.	Where are you planning to do your research?**

GoToMeeting. Participants should be able to download GoToMeeting and feel comfortable using it for the session.

**4.	What will you be testing?**

InVision prototype (has not been put together yet).

## Participants and Recruitment

**1.	Participant criteria: What are you looking for in a participant?**

I am looking for the following:

- People who have a computer that can support GoToMeeting.
- Most importantly, we need people who have applied for health care at least once before. They do not have to be enrolled in VA health care, but they do have to have applied, as people who have not applied for VA health care would never find themselves in the flow we are testing.
  - Optional nice to have: People who have applied more than once for health care. We would love to speak to some of these people but it is not a requirement that any participants have applied *more* than once.
- 7 participants.
- 1 - 2 people under 40.
- 1 - 2 women.
- 1 - 2 people of color.

**2.	What is your recruitment strategy?** 

We would like to work with Perigean for recruiting. If their database does not tell them whether people have applied before, then we may need to work with Josh Faulkner (contact at the HEC) to find people.

## When? 

**1. Timeline: What dates do you plan to do research?** 

I would like research to start **Wednesday, March 6, 2019**.

**2. Prepare: When will the thing you are testing be ready?**

The prototype can be ready the week of 2/25/19.

**3. Length of Sessions: How long do you estimate each session will be?**

I am estimating sessions will be between 45 – 60 minutes and will have a better idea of this after I create the conversation guide.

**4.	Availability: If applicable, when would you like sessions scheduled?**

Please leave at least **30 minutes** between sessions to account for sessions going over.

- Wednesday, March 6: 8:30 am ET – 6:30 pm ET (session starting no later than 5:30 and ending no later than 6:30)
- Thursday, March 7: 8:30 am ET – 11:30 am ET (session ending no later than 11:30 am); 2:00 pm ET – 6:00 pm ET (session ending no later than 6:00 pm)
- Friday, March 8: 8:30 am ET – 4:30 pm ET (session ending no later than 4:30 pm)
- Monday, March 11: 8:30 am ET – 6:30 pm ET (session starting no later than 5:30 and ending no later than 6:30)
- Tuesday, March 12: 8:30 am ET – 5:00 pm ET (session ending no later than 5:00 pm)

**5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

TBD

## Team Roles

**Please list the people who will be serving in each role.**

- **Moderator**: Samara Strauss
- **Research guide writing and task development**: Samara Strauss
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Samara Strauss
- **Participant(s) for pilot test**: TBD
- **Note-takers**: TBD depending on session timing
- **Observers**: TBD depending on session timing

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md)
- [Discussion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/conversation-guide.md)
- [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019)
- [Read-Out/Results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/research-summary.md)
