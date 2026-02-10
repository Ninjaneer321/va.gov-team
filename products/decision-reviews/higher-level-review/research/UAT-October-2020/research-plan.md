---
# Research Plan Metadata
title: "Research Plan for Benefits and Memorials 1, Higher-Level Review UAT, October 2020"
date: 2020-10-23
last_updated: 2026-02-10
team: "Benefits and Memorials 1"
product: "Higher-Level Review"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need a way to request a Higher-Level Review of their disability claim decision online. Currently, paper-based VA Form 20-0996 requires manual processing which doesn't scale effectively."
  product_location: "VA.gov decision reviews section"
  user_familiarity: "New product - first online version of Higher-Level Review form"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd"

# Research Design
methodology: "user acceptance testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate that Veterans can successfully request a Higher-Level Review on VA.gov"
  - goal_2: "Identify any technical issues in the application process in real-time"
  - goal_3: "Ensure the form functions correctly with real data submission"

research_questions:
  - "Can Veterans request a Higher-Level Review on VA.gov?"
  - "Are there any technical or functional issues that prevent successful form submission?"
  - "Do Veterans understand the Higher-Level Review process and requirements?"

hypotheses:
  - "Veterans will be able to successfully apply online for a Higher-Level Review"

expected_outcomes: "Confirm production-readiness of the Higher-Level Review tool on VA.gov and catch any technical issues before full launch"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment of Veterans ready to submit real HLR applications"
  
  primary_criteria:
    - "Must have a DS Logon account"
    - "Must have a desire to apply for/request a Higher-Level Review of their disability claim"
    - "Must have all documents needed to apply for a Higher Level Review to contest at least one claim decision or supplemental claim decision"
    - "Must be able to see content clearly and hear moderator clearly"
    - "Must be on a computer (not phone or tablet)"
    
  secondary_criteria:
    - "Good spread in demographics"
    - "Good spread across different levels of tech-savviness"
    
  screener_questions:
    - question: "Do you have a DS Logon account?"
      qualifying_response: "Yes"
    - question: "Do you have a desire to apply for a Higher-Level Review of your disability claim?"
      qualifying_response: "Yes"
    - question: "Do you have all documents needed to apply for a Higher Level Review?"
      qualifying_response: "Yes"
      
participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  total_recruited: 6
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "None"
  pilot_participant: "None - no pilot session"
  research_dates: "2020-10-23 to 2020-11-05"
  research_review_submission: "2020-10-22"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhance Veterans' access to benefits and services"
    key_results: 
      - "Enable online submission of Decision Review requests"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Putting Down Roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd"
    
tags:
  - "PRDT: Decision-reviews"
  - "BNFT: Disability"
  - "AUD: Veterans"
  - "UAT"
  - "remote"
  - "form"
  - "authenticated"
  - "Higher-Level Review"
  - "20-0996"
  - "decision review"
  - "appeals"
  - "claims"
  - "DSP: Form templates"
  - "moderated"
  - "production"
  - "real submission"
---

#
# **Research Plan for UAT for HLR**

## **Goals**

1. **What product &amp; team are you doing this research for?**

The Benefits and Memorials 1 team has created an online version of the Higher-Level Review form (VA form 20-0996) and will now be conducting user-acceptance testing.

Note that the Veterans will submit a real Higher-Level Review during the session. We will request AMO representatives to be present during the application process.

1. **Background: Briefly, what is the background of this product? What would a new person on the team need to know about this product?**

If a veteran disagrees with the VA&#39;s decision on their claim, they can request to do what&#39;s called a &#39;Decision Review&#39;. In essence, this is an appeal of the decision they received on their initial claim. There are 3 types of decision reviews:

1. Higher Level Review
2. Supplemental Claim
3. Notice of Disagreement (or board appeal)

We will be testing our Higher-Level Review tool on va.gov.

**What is a Higher-Level Review?**

If a veteran disagrees with VA&#39;s decision on their claim, they can request to have a senior reviewer take a new look at their case. The reviewer will determine whether the decision can be changed based on a difference of opinion or an error. A Veteran cannot submit new evidence with a Higher-Level Review. Rather, only the evidence that has been submitted with the original claim may be considered.

1. **Research questions: What question(s) do you hope to be able to answer after completing this research?**

- Can veterans request a Higher-Level Review on VA.gov?

1. **Hypothesis: What is your hypothesis for this research?**

- Veterans will be able to successfully apply online for a HLR.

## **Method**

1. **What method of research are you planning?**

- Moderated UAT.
- These sessions will not be recorded.

1. **Why this method? How does this methodology help you answer your research questions?**

- This is the only way we will be able to catch technical issues in real time and diagnose on the frontend of the website.

Specifically, we want 6 participants: The 6 Veterans must understand that they are submitting a real HLR request, be eligible for said request, and have all the necessary documents ready for the UAT sessions.

1. **Where are you planning to do your research?**

- Through Zoom

1. **What will you be testing?**

- The Higher-Level Review request / application process.

## **Participants and Recruitment**

1. Participant criteria: What are you looking for in a participant?

We would like 6 participants who MUST meet the following criteria:

- Participants must have a DS Logon account.
- **Participants must have a desire to apply for / request a Higher-Level Review of their disability claim.**
- Participants must have all documents needed to apply for a Higher Level Review, (to contest at least _one_ claim decision or a supplemental claim decision).
- Participants must be able to see the content on the screen clearly and hear the moderator clearly.
- Participants should not have to use a screen reader or other assistive devices.
- Participants must be on a computer (not a phone or a tablet etc.)
- Participants should be comfortable using Zoom on their computer, and be able to locate the chat function and the share function.

Nice to have requirements:

- Good spread in demographics.
- Good spread across different levels of &quot;tech-savviness&quot;.

1. What is your recruitment strategy?

We will work with Perigean to recruit for this study.

## **When?**

1. Timeline: What dates do you plan to do research?

We are looking to start sessions: \*\*. One user 23 October if possible, and 5 users spread out on  3, 4, 5 November.  \*\*.

1. Prepare: When will the thing you are testing be ready?

HLR should be live on production October 22, 2020.

1. Length of Sessions: How long do you estimate each session will be?

We expect sessions to be 60 minutes. Please schedule sessions for 60 minutes with a 30-minute buffer between sessions.

1. Availability: If applicable, when would you like sessions scheduled?

Between 9 am and 2 pm EST.

1. \*\*Pilot: There will be no pilot session \*\*

## **Team Roles**

Please list the people who will be serving in each role.

- Moderator: Christian Valla (cvalla@governmentcio.com)
- Research guide writing and task development: Christian Valla
- Participant recruiting &amp; screening: Perigean
- Project point of contact: Christian Valla and Luke Majewski
- Participant(s) for the pilot test: Kevin S.
- Note-takers: Kevin S.
- Observers: Luke Majewski, Anna Carey, Robin Garrison, Nick Sprinkle, Fred Somers, Lauren Sylvia, Ed Mangimelli

List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work

- Luke Majewski (lmajewski@governmentcio.com)
- Christian Valla (cvalla@governmentcio.com)
- Kevin Stachura (kstachura@governmentcio.com)
- Robin Garrison (robin.garrison@adhocteam.us)
- Anna Carey (anna@adhocteam.us)
- Nick Sprinkle (nick.sprinkle@oddball.io)
- Fred Somers
- Lauren Sylvia
- Ed Mangimelli (ed.mangimelli@adhocteam.us)

## **Resources**

- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd/BDD%20Research/UAT-August-2020)
- Notes
