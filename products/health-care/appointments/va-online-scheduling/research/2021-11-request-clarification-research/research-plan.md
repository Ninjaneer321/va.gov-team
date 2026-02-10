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

VAOS Requests Discovery - Research Plan
=============================================

Background
----------

### VA Online Scheduling

VA Online Scheduling allows Veterans to request and schedule health care appointments if they are logged into VA.gov. It is one [channel](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/design/scheduling-channels-touchpoints.md) Veterans can use to schedule appointments.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/vaos-product-guide.pdf)


### Problem

We've heard in previous research and user feedback that Veterans are generally confused by the concept of appointment requests in VAOS:

[2019 VAOS research](department-of-veterans-affairs/va.gov-team/products/health-care/appointments/va-online-scheduling/research/2020-07-vaos-mvp-and-express-care-user-research/2020-july-VAOSR-EC-research-report.md#findings>)

[2021 appointments list usability test](department-of-veterans-affairs/va.gov-team/products/health-care/appointments/va-online-scheduling/research/2021-01-appts-list-test/findings-report.md#appointment-requests-continue-to-create-confusion>)

### Assumptions

We believe that:

-   Veterans don't see a distinction between a request for an appointment and a self-scheduled appointment
-   It isn't clear when an appointment becomes a request in VAOS
-   The language "request" doesn't clearly explain what an appointment request is
-   Veterans don't know where to find information about their existing appointment requests

### OCTO-DE Objectives

[OCTO-DE objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) this research supports:
-   Increase: Veteran satisfaction with VA.gov
-   Decrease: 
    -   Call center volume, wait time, time to resolution
    -   Time to successfully complete and submit online transactions


Research Goals
--------------

1.  Learn how appointment requests are confusing to Veterans
2.  Validate concepts for reducing that confusion.

### Outcome

We'll use these findings to make appointment requests easier to understand.

### Research questions

-   How are requests confusing Veterans during the scheduling process? When viewing their appointments on the VAOS home page?
-   What value do Veterans find in appointment requests?

### Hypotheses

We believe that requests are confusing _during scheduling_ because there is no indication when a self scheduled appointment becomes a request. If we clearly show when this transition happens, and offer alternative options to making a request, Veterans will be able to make choices about how to schedule their appointment that better fit their needs.

We believe that, once an appointment is requested, Veterans expect to see them listed with their existing appointments. If we call out their alongside other appointments, Veterans will be able to more easily understand what requests are, and how to find details about them.

Method
------

To get a better understanding of why Veterans are confused by the current state of requests, we'll run a usability test with participants, focusing on:
-   Requesting an appointment.
-   Finding their appointment requests.

### Location

Remote, via Zoom.

### Research materials

-   [Conversation guide](conversation-guide.md)
-   [Prototype](https://va-scheduling.invisionapp.com/console/share/EW35S0RT8V)

Recruitment
-----------

### Recruitment approach

We will use Perigean to recruit Veterans for this research.

### Recruitment criteria

10-12 Veterans with VA health care established at facilities.

**Primary criteria**

- Veteran has received VA health care.
- Must be able to join via a desktop or laptop device. This test does not support mobile devices.

Timeline
--------

### Prepare

Test materials will be finalised by Friday, November 5, 2021

Pilot Date/time is TBD

### Research sessions

This study will start on or after Monday the 8th of November, 2021.

### Length of sessions

Sessions will be scheduled for 1 hour.

### Availability

Monday-Friday
11 AM-10PM EST

Team Roles
----------

-   Moderator: Peter Russo - <peter.russo@adhocteam.us>
-   Research guide writing and task development: Peter Russo
-   Participant recruiting & screening: Perigean
-   Project point of contact: Peter Russo
-   Participant(s) for pilot test: Ciera Maddox
-   Note-takers: TBD
-   Observers: 
    -   Lauren Ernest
    -   Ciera Maddox


