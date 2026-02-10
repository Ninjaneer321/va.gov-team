---
# Research Plan Metadata
title: "Research Plan for Dependents Benefits (Form 21-686c), Usability Testing, June 2018"
date: 2018-06-01
last_updated: 2026-02-10
team: "Benefits"
product: "Declaration of Dependents (Form 21-686c)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans with a disability rating of 30% or greater need to add or update dependents to receive additional benefits. The current process through eBenefits or paper forms can be confusing and frustrating. The team is digitizing Form 21-686c for VA.gov and needs to ensure Veterans can successfully complete the form with minimal confusion."
  product_location: "VA.gov, Disability Benefits, Add or Remove Dependents"
  user_familiarity: "new"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/declare-dependent"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine if Veterans and their dependents can fill out Form 21-686c with minimal frustration or confusion"
  - goal_2: "Identify the most difficult portions of the form and understand why they cause challenges"
  - goal_3: "Understand Veterans' preferences for completing related Form 21-674 content (for students 18-23)"

research_questions:
  - "Do Veterans understand who is and is not eligible for dependents' benefits?"
  - "Does the flow of Form 21-686c make sense to Veterans?"
  - "Are Veterans successfully able to complete the application?"
  - "Do all form labels make sense, and are Veterans clear on whose information is being requested?"
  - "Are Veterans confused or frustrated by any questions, particularly about marriages and spouses' marriages?"
  - "Do Veterans know what to expect after they submit the application?"
  - "Would Veterans prefer to fill out Form 21-674 questions now or later, and how would they prefer to be alerted?"

hypotheses:
  - "Veterans will experience some confusion around questions about multiple marriages and marriage history"
  - "The digital form will be easier to complete than the paper version"
  - "Veterans may not fully understand dependents' benefits eligibility criteria"
  - "Veterans with children 18-23 in school will prefer to complete related questions at the same time rather than returning later"

expected_outcomes: "Identify key usability issues and areas of confusion in the Form 21-686c flow. Findings will inform design refinements before launch and help determine the best approach for integrating related Form 21-674 content."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for specific scenarios"
  
  primary_criteria:
    - "Veterans with disability rating of 30% or greater"
    - "Mix of Veterans who have and haven't used dependents' benefits"
    - "At least one Veteran and their spouse both in at least their second marriage"
    - "At least one Veteran with a child aged 18-23 enrolled in school"
    - "Mix of men and women across all military branches"
    - "Representation across age brackets: 18-30, 30-50, 50+"
    
  secondary_criteria:
    - "At least half (3) must have dependents who have used or are using VA benefits"
    - "One spouse of a Veteran (non-Veteran participant)"
    
  screener_questions:
    - question: "Do you have a VA disability rating of 30% or greater?"
      qualifying_response: "Yes"
    - question: "Do you have or have you had dependents using VA benefits?"
      qualifying_response: "Mix of yes and no"
    - question: "Have you been married more than once?"
      qualifying_response: "At least one yes"
      
participants:
  veterans: 7
  caregivers: 0
  dependents: 1
  total_recruited: 9
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2018-06-01"
  pilot_participant: "Lauren Alexanderson"
  research_dates: "2018-06-18 to 2018-06-22"
  research_review_submission: "2018-06-01"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their benefits online"
    key_results: 
      - "Enable Veterans to add and remove dependents online"
      - "Reduce confusion and errors in dependents declarations"
      - "Improve processing time for dependents benefits"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Putting Down Roots"
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "eBenefits dependents functionality research"
    
tags:
  - "AUD: Veterans"
  - "AUD: Family Member"
  - "AUD: Dependents"
  - "BNFT: Disability"
  - "PRDT: Form 21-686c"
  - "DSC: Form"
  - "DSC: Form - Date Input"
  - "DSC: Form - Radio Button"
  - "DSP: Ask users for names"
  - "DSP: Ask users for dates"
  - "DSP: Ask users for addresses"
  - "DSP: Ask users for multiple responses"
  - "DSP: Help users to check answers"
  - "usability-testing"
  - "authenticated"
---

## Goals

1. Do Veterans understand who is and is not eligible for dependents' benefits?
2. Does the flow of form 686 make sense? Are Veterans successfully able to apply?
3. Do all the form labels make sense, and the Veterans aren't confused by what we're asking from them? Do they know whose information we are asking for at any given time?
4. Are Veterans confused or frustrated by any questions on the form? What are their reactions to questions about their marriages and spouses' marriages?
5. Do they know what to expect after they apply?
6. Would Veterans prefer to fill out additional 674 questions here or at another time? How would they prefer to be alerted to fill out these forms?

## We will know we have been successful if:

1. We have a clearer understanding of whether Veterans are easily able to fill out form 686 online, and which sections require the most frustration or collection of information (if any).
2. We have a sense as to how Veterans would want to fill out additional forms related to 686.

## Who are our participants?

We would like to speak with 6-8 Veteran participants representing all branches of the Armed Forces, with an even split of men and women, and at least one person in each of the age brackets 18-30, 30-50, 50+.

All participants must have a disability rating of 30% or greater.

At least half (3) of the participants must have dependents who have in the past used or are currently using VA benefits through the participants' service.

We would like at least one veteran and their spouse to both be in at least their second marriage.

We would like at least one veteran to have a child who is between ages 18-23 and enrolled in school.

Additionally, we would like to speak with one spouse of a Veteran.

## Key research questions

1. Are Veterans and their dependents able to fill out form 686c with as little frustration or confusion as possible?
2. What are the most difficult portions of the form for Veterans or their dependents to fill out? Why?
3. If Veterans or their dependents are able to remember their first time filling out this form, does this version compare more favorably to that experience?
4. Would Veterans or their dependents prefer to fill out the additional form 674 content at the same time? If not, how would they want to be prompted to return to this content?
5. Do Veterans and their dependents understand who is and is not eligible for dependents' benefits?

## Methods

- Remote usability testing of front-end app of introduction page and form flow for 686c form.

## Team Roles
Please list the people who will be serving in each role.

- Moderator: Emily Waggoner: emily@adhocteam.us
- Research guide writing and task development: Emily Waggoner: emily@adhocteam.us
- Participant recruiting & screening: Paris Martin: paris.martin@va.gov
- Project point of contact: Ryan Luu: ryan.luu@adhocteam.us
- Participant(s) for pilot test: Lauren Alexanderson: lauren.alexanderson@va.gov
- Note-takers: 
  - Joe Stanek: jstanek@thesocompany.com
  - Leah Bannon: leah.bannon2@va.gov
  - Ryan Luu: ryan.luu@adhocteam.us 
  - Mel Woodard: mel@adhocteam.us
  - Samara Strauss: samara.strauss@va.gov
- Observers: 
  - Joe Stanek: jstanek@thesocompany.com
  - Matt Self: matthew.self2@va.gov
  - Peggy Gannon: peggy@thesocompany.com
  - Mary Park: mpark@thesocompany.com
  - Alex Taylor: alex@adhocteam.us
  - Lauren Alexanderson: lauren.alexanderson@va.gov
  - Mariam Mayanja: mariam.mayanja@hotmail.com
  
## Resources
Project Brief: Project brief should live in the appropriate vetsdotgov-team product folder, simply paste a link to it here

Conversation Guides:
- [Non-Veteran version](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/research/june-2018/686-conversation-guide-non-veteran-version.md)
- [Veteran version](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/research/june-2018/686-conversation-guide-veteran-version.md)

Notes & Recordings
- P1
-- [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/research/june-2018/p1-verbatim-observer-notes.md)
- P2
-- [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/research/june-2018/p2.md)
- P3
-- [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/research/june-2018/p3-6.18.18-1400.docx)
- P4
-- [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/research/june-2018/p4-notes.md)

Synthesis: [In-progress Reframer document](https://www.optimalworkshop.com/a/adhoc/reframer/projects/126bc333-dc7d-41ee-a5a6-d438f6c7c43e)

Lessons Learned: TBD
Read-Out/Results: TBD
