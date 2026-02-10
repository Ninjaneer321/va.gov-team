---
# Research Plan Metadata
title: "Research Plan for Dragons Team, Direct Deposit Updates, June 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "Dragons"
product: "Direct Deposit"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "eBenefits doesn't have two-factor authentication, making the site more open to security vulnerabilities and potential fraud. VA.gov has 2FA capabilities, making it a more secure platform for managing direct deposit for compensation & pension benefits."
  product_location: "VA.gov Profile - Direct Deposit section"
  user_familiarity: "New feature - Adding direct deposit functionality from eBenefits to VA.gov profile"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md"

# Research Design
methodology: "usability-testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate that the profile is the best place for direct deposit functionality"
  - goal_2: "Evaluate if users understand how to update their direct deposit information"
  - goal_3: "Assess user reactions to design decisions including blank edit modal fields and eBenefits redirect for GI Bill"

research_questions:
  - "Is the profile the best place for this functionality?"
  - "Do users know where to go to update direct deposit information? If not, what steps do they try?"
  - "Do users understand how to update their information when they get to the profile?"
  - "Are users confused that the edit modal doesn't populate their existing information?"
  - "Do users understand how to find and update their routing and account numbers?"
  - "How confused are people that they have to go to eBenefits to update GI Bill info?"

hypotheses:
  - "People will find the profile to be the natural place to update their direct deposit info"
  - "People will find the process to update information to be intuitive"
  - "People will be confused that the edit modal has blank routing and account number fields"
  - "People will not like that they still have to go to eBenefits to update GI Bill info"

expected_outcomes: "Validate design direction for direct deposit integration into VA.gov profile and identify usability improvements before full launch"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment with diversity goals"
  
  primary_criteria:
    - "Must currently receive VA compensation or pension benefits via direct deposit on eBenefits"
    - "Must be able to access GoToMeeting via computer for screensharing"
    
  secondary_criteria:
    - "At least one woman participant"
    - "At least one participant under 35"
    - "At least one participant of color"
    
  screener_questions:
    - question: "Do you currently receive VA compensation or pension benefits via direct deposit on eBenefits?"
      qualifying_response: "Yes"
      
participants:
  veterans: 5
  caregivers: 0
  dependents: 0
  total_recruited: 5
  completed_sessions_goal: 5
  
# Timeline & Sessions
timeline:
  pilot_date: "2019-06-21"
  pilot_participant: "TBD"
  research_dates: "2019-06-24 to 2019-06-28"
  research_review_submission: ""
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their VA benefits online"
    key_results: 
      - "Increase secure transactions on VA.gov"
  - objective: "Improve security and reduce fraud"
    key_results:
      - "Move sensitive transactions to 2FA-protected platform"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - ""
    
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "BNFT: Pension"
  - "PRDT: Direct-deposit"
  - "PRDT: Profile"
  - "DSP: Authenticated-experience"
  - "DSC: Form"
  - "DSC: Modal"
  - "usability-testing"
  - "remote"
  - "profile"
  - "financial-information"
---

# Research Plan for Dragons: Direct deposit updates | June 2019

## Goals

**1. What product & team are you doing this research for?**

This research is for the direct deposit work that is happening as a joint effort between the Dragons and Website teams.

**2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?** 

In March 2019, we decided to add direct deposit functionality to the profile on VA.gov as part of a request from the eBenefits team. Since eBenefits doesn't have two-factor authentication, the site is more open to security vulnerabilities and the potential for fraud. As VA.gov does have 2FA capabilities, the transition seemed like a natural fit.

Direct deposit functionality on eBenefits covers two benefit categories — (disability) compensation & pension benefits, and GI Bill benefits. Because of how the GI Bill functionality was built, we determined that we would not be able to integrate that functionality into the VA.gov profile right now. Instead, we would move forward with only integrating the compensation & pension direct deposit functionality for the MVP.

We've completed an initial round of design and need to get this in front of users to make sure we've taken the right direction, and to determine whether these designs are useful and usable.

**3. Research questions: What question(s) do you hope to be able to answer after completing this research?**

- Is the profile the best place for this functionality?
- Do users know where to go to update this information? If they don't, what steps do they try to take to get there?
- Do users understand how to update their information when they get to the profile? 
  - Are they confused that we don't populate the edit modal with their information? 
  - Do they understand how to find/update their routing and account numbers?
- How confused are people that they have to go to eBenefits to update GI Bill info?

**4. Hypothesis: What is your hypothesis for this research?**

- People will find the profile to be the natural place to update their direct deposit info.
- People will find the process to update information to be intuitive.
- People will be confused that they open up the edit modal and the routing and account numbers are blank.
- People will not like that they still have to go to eBenefits to update GI Bill info.

## Method
**1.	What method of research are you planning?**

Moderated, remote testing.
  
**2.	Why this method? How does this methodology help you answer your research questions?**

This is the easiest way to test the direction/design we've chosen. 

**3.	Where are you planning to do your research?**

GoToMeeting.

**4.	What will you be testing?**

We will be testing this functionality on staging.

## Participants and Recruitment

**1.	Participant criteria: What are you looking for in a participant?**

We are looking for **5** people who meet the following criteria:

- Must currently receive VA compensation or pension benefits via direct deposit on eBenefits.
- Must be able to access GoToMeeting via a computer (for screensharing purposes) during our session.

Ideally, we'd have:

- At least one woman participant
- At least one participant under 35
- At least one participant of color

**2.	What is your recruitment strategy?**

We would like to work with Perigean on this effort.

## When? 

**1.	Timeline: What dates do you plan to do research?**

We would like to start usability testing sessions on **Monday, June 24**.

**2.	Prepare: When will the thing you are testing be ready?**

This functionality is currently ready and live on staging.

**3. Length of Sessions: How long do you estimate each session will be?**

We estimate sessions will be 30 – 45 minutes. Please schedule sessions for 60 minutes and give a 30 minute break between sessions.

**4.	Availability: If applicable, when would you like sessions scheduled?**

This is my availability for the week of **June 24 – June 28**:

- **Monday, June 24** — 9:00 am – 5:00 pm
- **Tuesday, June 25** — 9:00 am – 3:30 pm
- **Wednesday, June 26** — 9:00 am – 12:00 pm
- **Thursday, June 27** — 9:00 am – 11:30 am; 1:30 pm — 3:30 pm
- **Friday, June 28** — 9:00 am – 4:00 pm

**5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

Friday, June 21

## Team Roles
Please list the people who will be serving in each role. 
- **Moderator**: Samara Strauss
- **Research guide writing and task development**: Samara Strauss
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Samara Strauss
- **Participant(s) for pilot test**: TBD
- **Note-takers**: Perigean
- **Observers**: Perigean

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

Please invite the following people to these sessions:

- TJ Rice (tj@adhocteam.us)
- Nick Sullivan (nick.sullivan@adhocteam.us)
- Tze Lei (tze@adhocteam.us)
- Erik Hansen (erik@adhocteam.us)
- Danielle Thierry (danielle@thesocompany.com)
- Chris Johnston (christopher.johnston2@va.gov)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md)
- Discussion Guide
- Notes & Recordings
- Synthesis
