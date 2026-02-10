---
# Research Plan Metadata
title: "Research Plan for VSP Contact Center, Ask VA (AVA), July 2021"
date: 2021-07-16
last_updated: 2026-02-10
team: "VSP Contact Center"
product: "Ask VA (AVA)"
product_area: "authenticated/unauthenticated"

# Background Context
background:
  problem_statement: "Following initial usability testing, need to document and prioritize remaining usability concerns with AVA, verify implementation of previous recommendations, and test both inquiry submission and authenticated dashboard."
  product_location: "VA.gov Contact Us section - Ask VA portal"
  user_familiarity: "iteration"
  product_brief_url: "TBD"

# Research Design
methodology: "usability testing with directed interviews"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Document and prioritize outstanding usability concerns with AVA including inquiry submission and authenticated dashboard"
  - goal_2: "Verify the implementation of recommendations provided from previous usability testing"
  - goal_3: "Assess if confusion has been reduced compared to previous study"

research_questions:
  - "Are users able to submit inquiries successfully and without hindrance?"
  - "Are users able to navigate and access previous inquiries via the authenticated dashboard?"
  - "Do veterans understand how to fill out all of the fields on the inquiry form?"
  - "Is help text provided in all the appropriate areas?"
  - "Do users understand which fields are required?"

hypotheses:
  - "Due to implementation of previous study findings, Veterans will be able to successfully submit inquiries through AVA"
  - "There will be a reduction (when compared to previous study) in confusion and questions around specific inquiry fields and the review page"

expected_outcomes: "Findings will confirm improvements from previous research and identify any remaining issues to address before wider release."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "Users who have visited and logged in to VA.gov within the past year"
    
  secondary_criteria:
    - "Users that have a VA.gov login"
    - "2-3 participants who have visited VA.gov on a mobile device (should login via mobile for session)"
    
  screener_questions:
    - question: "Have you visited and logged in to VA.gov within the past year?"
      qualifying_response: "Yes"
    - question: "Have you visited VA.gov on a mobile device?"
      qualifying_response: "Yes (nice to have 2-3)"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-07-12"
  pilot_participant: "Jason Woodman, Stan Moran, Chante Lantos-Swett"
  research_dates: "2021-07-16 to 2021-07-28"
  research_review_submission: "2021-07-12"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 15
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the usage and throughput of VA services"
    key_results: "Enable Veterans to successfully submit and track inquiries with reduced friction"
  - objective: "Increase the quality and reliability of VA services"
    key_results: "Verify improvements from previous research have addressed user pain points"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/research/ava/2021-04/research-plan.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/research/ava/2021-07/conversation-guide.md"
    
tags:
  - "PRDT: Ask VA"
  - "PRDT: IRIS"
  - "PRDT: Contact Center"
  - "AUD: Veterans"
  - "usability testing"
  - "authenticated"
  - "dashboard"
  - "form design"
  - "customer service"
  - "iterative design"
  - "DSC: Form controls"
  - "DSP: Form design"
  - "HDW: Mobile"
  - "HDW: Desktop"
  - "remote"
  - "moderated"
---

# Research Plan for VSP, Ask VA, July 2021

## Goals

This study is being conducted by the VSP Contact Center team. The study follows the Ask VA (AVA) tool, which enables veterans and VA.gov users to submit inquiries digitally.

**Usability Study Goals:**

- Document and prioritize any outstanding usability concerns with AVA, including both inquiry submission and the authenticated dashboard.
- Verify the implementation of recommendations provided from previous usability testing.

**Research Questions:**

- Are users able to submit inquiries successfully and without hindrance?
- Are users able to navigate and access previous inquiries via the authenticated dashboard?
- Do veterans understand how to fill out all of the fields on the inquiry form?
  - Is help text provided in all the appropriate areas?
  - Do users understand which fields are required? 

**Hypothesis:**

- Due to implementation of previous study findings, Veterans will be able to successfully submit inquires through AVA.
- There will be a reduction (when compared to previous study) in confusion and questions around specific inquiry fields and the review page.

## Method

We will conduct remote moderated usability testing and directed interviews via Zoom using the Perigean contract. These methods will help us:

## Participants and Recruitment

We are seeking to perform this test with 10 participants

**Must have for participants**

- Users who have visited and logged in to VA.gov within the past year

**Good to have for participants**

- Users that have a VA.gov login
- *If possible, would like to have roughly 2-3 participants who would answer "yes" to the following question:*
  - Have you visited VA.gov on a mobile device?
  - Participants who have visited VA.gov on their mobile device should login to the Zoom session on their mobile device.

## When?

**Desired Timeline: July 12-23, 2021**
60 minutes (45-minute session with 15-minute buffer)

| Date               | Time (EST)            |
| ------------------ | --------------------- |
| Friday, July 16    | 9am - 7pm             |
| Monday, July 19    | 9am - 7pm             |
| Tuesday, July 20   | 9am - 7pm             |
| Wednesday, July 21 | 9am - 2pm             |
| Thursday, July 22  | 9am - 4pm             |
| Friday, July 23    | 9am - 7pm             |
| Monday, July 26    | 9am - 7pm             |
| Tuesday, July 27   | 9am - 2pm             |
| Wednesday, July 28 | 9am - 7pm             |

Testing will be performed on a staging environment as well as with a mockup built in Figma.

**Pilot Date(s):** July 12-13, 2021
**PIlot Attendees:** Jason Woodman, Stan Moran, Chante Lantos-Swett (Note: The pilot will be scheduled internally by Ian McCullough)

## Team Roles

- **Moderator:** Ian McCullough ([ian.mccullough@oddball.io](mailto:ian.mccullough@oddball.io))
- **Research guide writing and task development:** Ian McCullough ([ian.mccullough@oddball.io](mailto:ian.mccullough@oddball.io))
- **Participant recruiting & screening:** Perigean
- **Project point of contact:** Ian McCullough
- **Note-takers:** *Potentially any of the following, depending on availability*
  - Jason Woodman ([jason.woodman@oddball.io](mailto:jason.woodman@oddball.io))
  - Ervin Peterson ([epearson@thesocompany.com](mailto:epearson@thesocompany.com))
  - Kimberly Daniels ([kimberley.daniels@adhocteam.us](mailto:kimberley.daniels@adhocteam.us))
  - Steven Tarlow ([starlow@thesocompany.com](mailto:starlow@thesocompany.com))
  - Chante Lantos-Swett ([chante.lantosswett@va.gov](mailto:chante.lantosswett@va.gov))
- **Observers:** *Potentially any of the following, depending on availability*
  - Jason Woodman
  - Ervin Peterson
  - Kimberly Daniels
  - Steven Tarlow
  - Chante Lantos-Swett

## Resources

- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/research/ava/2021-07/conversation-guide.md)
- Read-Out/Results

