---
# Research Plan Metadata
title: "Research Plan for Dependents Management Team, 686/0538 AT Testing, April 2026"
date: 2026-04-02
last_updated: 2026-04-02
team: "Dependents Management Team"
product: "Add/Remove/Verify Dependents (Forms 686 and 0538)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need an easy way to keep their dependent spouses and children up-to-date on their disability and VA pension benefits to avoid overpayments and ensure compliance with the 8-year verification requirement. Current forms are difficult for users with assistive technology (AT) to navigate."
  product_location: "https://www.va.gov/manage-dependents/"
  user_familiarity: "Iteration - existing product with partial 2025 release of dependent picklist feature and digitized form 0538"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/initiative_brief/Dependent%20Picklist%20Component.md"

# Research Design
methodology: "Usability testing with assistive technology users"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Assess the usability of the dependents management flow, identifying barriers for Veterans who use assistive technology."
  - goal_2: "Determine if Veterans who use assistive technology understand how to complete the verification process if they do have changes to make."
  - goal_3: "Understand the unique challenges AT users have with the cancel flow in the child add list+loop."

research_questions:
  - "What specific needs do AT users have when encountering errors and instructions in the picklist?"
  - "What barriers, if any, does the picklist pattern present to AT users?"
  - "What is the right amount of content in headers, labels, and links to assist users without impeding usability for AT users?"
  - "Can AT users make edits to their responses from the summary page?"
  - "What would Veterans expect to see or happen when they verify dependents?"
  - "Are Veterans using assistive technology able to understand that they need to go to a different form to make changes?"
  - "Can AT users navigate back to the verification form once they've made their changes in the 686?"
  - "Are any headers, labels, or links lacking description or clarity?"
  - "Do AT users understand where they have been returned to after cancelling? Does it align with their expectations, and if not, what would they expect?"
  - "What unique challenges might AT users experience with the cancel flow?"

hypotheses:
  - "Veterans who use assistive technology will be able to use the picklist pattern to remove dependents independently."
  - "AT users won't experience any additional difficulties from the 0538→686 transition, beyond those experienced by other user types."
  - "AT users will be able to understand and recover from errors."
  - "The friction included in the app to explain add/removal reasons won't impede AT users from completing their task, or be overly frustrating."
  - "The balance between context included in questions and hint text is right for AT users."

expected_outcomes: "Test 686 picklist and 0538 pathways with AT users before releasing to 100% in production. Insights will prioritize changes to the dependents management flow to make the form more accessible to various AT users and move toward OCTO Goal #1: making the digital experience the best way to access VA benefits by increasing Veteran satisfaction."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Strategic recruitment with Perigean to ensure diversity of AT user types and demographic representation"
  
  primary_criteria:
    - "Uses a screen reader every time they use the Internet (JAWS, NVDA, VoiceOver, TalkBack, or Narrator)"
    - "Uses alternative navigation technology every time they use the Internet (switch systems, Dragon, Voice Control, or sip and puff device)"
    - "Uses screen magnification every time they use the Internet (Magnifier, Zoom, ZoomText, or browser zoom at 200% or greater)"
    - "Willing to join Zoom session using their AT"
    - "Has been using their AT for at least 1 year"
    - "Receives VA disability compensation or Veteran's Pension"
    - "Must have Zoom downloaded to their device prior to the session and know how to share their screen"
    - "Must be willing to share a web browser window over Zoom"
    - "Must have a working microphone on their device"
    
  secondary_criteria:
    - "At least 4 are age 55 or older"
    - "At least 2 are women"
    - "At least 2 don't have any degree or vocational training after high school"
    - "At least 2 are 35 or under"
    - "At least 2 live in a rural or remote area"
    - "At least 3 are people of color (anything other than White or Caucasian)"
    - "At least 4 have a cognitive disability (e.g., TBI)"
    
  screener_questions:
    - question: "Do you use a screen reader, alternative navigation, or screen magnifier every time you use the Internet?"
      qualifying_response: "Yes"
      
    - question: "Are you willing to join the Zoom session using your screen reader, alternative navigation technology, or screen magnifier?"
      qualifying_response: "Yes"
      
    - question: "How long have you been using this screen reader or screen magnifier?"
      qualifying_response: "At least 1 year"
      
    - question: "Do you receive VA disability compensation or Veteran's Pension?"
      qualifying_response: "Yes"
      
    - question: "Have you ever received additional VA disability or pension compensation for one or more dependents (like a spouse, child, or parent)?"
      qualifying_response: "Yes (prioritize), but No does not disqualify"
      
    - question: "What is the name of the screen reader, alternate navigation tool, or screen magnifier technology that you will use during the Zoom session?"
      qualifying_response: "Must be one of: JAWS, NVDA, VoiceOver, TalkBack, Narrator (screen reader); switch systems, Dragon, Voice Control, sip and puff device (alternative navigation); Magnifier, Zoom, ZoomText, or 200%+ browser zoom (magnification). Non-digital magnification disqualifies."
      
    - question: "For this meeting, you'll need a device with Zoom installed that can screen share and has a working microphone. What kind of device will you be using?"
      qualifying_response: "Smartphone or Computer (5 each recruited); Tablet (no more than 2 recruited)"
      
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "Yes = RECORD as having cognitive disability (recruit 4); No = continue"
      
    - question: "What (if any) accommodations will you need to participate in this Zoom session?"
      qualifying_response: "Open-ended text response to document accommodations needed"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  assistive_technology_breakdown:
    screen_reader_recruited: 6
    screen_reader_goal: 4
    alternative_navigation_recruited: 3
    alternative_navigation_goal: 2
    magnification_recruited: 3
    magnification_goal: 2
  
# Timeline & Sessions
timeline:
  pilot_sessions:
    - date: "2026-04-06"
      participant_type: "Alternative Navigation (ADE team)"
      time: "11:30 AM - 1:00 PM ET"
    - date: "TBD"
      participant_type: "Screen Reader users (to be scheduled)"
    - date: "TBD"
      participant_type: "Magnification users (to be scheduled)"
      
  optional_kickoff_with_perigean:
    - date: "2026-04-07"
      time: "10 AM - 1 PM ET"
    - date: "2026-04-08"
      time: "10 AM - 1 PM ET or 3 PM - 6 PM ET"
      
  research_dates: "2026-04-15 to 2026-04-24"
  research_review_submission: "2026-05-08"
  contract_end_date: "2026-05-08"
  
session_details:
  duration_minutes: 90
  buffer_minutes: 30
  max_sessions_per_day: 3
  
  session_availability:
    - "Wed 4/15: 10 AM - 6 PM ET"
    - "Thurs 4/16: 10 AM - 2 PM ET, 5 PM - 6 PM ET"
    - "Fri 4/17: 10 AM - 6 PM ET"
    - "Mon 4/20: 10 AM - 6 PM ET"
    - "Tues 4/21: 10 AM - 6 PM ET"
    - "Wed 4/22: 10 AM - 6 PM ET"
    - "Thurs 4/23: 10 AM - 6 PM ET"
    - "Fri 4/24: 10 AM - 2 PM ET"
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results: 
      - "Key Result 3.1: Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more. This research will support the Health/Benefits portfolio in improving customer satisfaction of the dependent management forms for AT users."

veteran_journey_phases:
  - "Starting Up"
  - "Putting Down Roots"
  - "Aging"
  - "Dying"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research"

tags:
  - "AUD: Veterans"
  - "AUD: Internal VA Stakeholders"
  - "BNFT: Disability"
  - "BNFT: Pension"
  - "PRDT: Form 21-686c"
  - "PRDT: Form 21-0538"
  - "PRDT: Dependents"
  - "DSP: Ask users for multiple responses"
  - "DSC: Form"
  - "Accessibility"
  - "usability-testing"
  - "assistive-technology"
  - "screen-reader-testing"
  - "alternative-navigation-testing"
  - "magnification-testing"
---


# Research Plan for Dependents Management Team -- AT testing of 686/0538 Dependent Management Flows


## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>

Veterans who receive disability compensation or pension may be eligible to add dependent spouses, children, and parents to their benefit, resulting in additional $$ on their payments each month for each dependent. 
If Veterans don’t keep their dependents up-to-date on their benefits, they could end up owing the VA money for overpayments once the VA eventually finds out. 
The VA also requires veterans to affirm their dependent status every 8 years – a process known as ‘dependent verification’. If a veteran doesn’t complete this process via form 0538, they may end up owing 8 years of overpayments, and their dependents will be removed (even if their dependents are correct!). Prior to 2025, veterans could only satisfy verification requirements by mail. We digitized part of the 0538 so most veterans can complete it online.
We want to help veterans keep their dependents accurate and avoid these overpayment scenarios by making it easy for them to update their dependents online. 

In 2025 we partially released 2 features:

1. A ‘dependent picklist’ feature intended to make it easier for veterans to REMOVE dependents from their benefit. 
2. The digitized form 0538, 

We want to test both pathways with AT users before releasing to 100% in production.

This is an existing product for auth users only.

- [Picklist product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/initiative_brief/Dependent%20Picklist%20Component.md#phase-1-implementation-picklist-in-686c-remove-flows-september---december-2025)
- [Verification product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/README.md)

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

[Previous user research in dependents space](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research).

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
  - ***Research Ops Plain Language:** Supports this product’s OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.*

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Starting Up`
- `Putting Down Roots`
- `Aging`
- `Dying`

</details>



## Research Goals 🥅	
`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **Assess the usability of the dependents management flow, identifying barriers for Veterans who use assistive technology.**

`2.` **Determine if Veterans who use assistive technology understand how to complete the verification process if they do have changes to make**

`3.` **Understand the unique challenges AT users have with the cancel flow in the child add list+loop** 
  
### Outcome

Research will help us prioritize changes to the dependents management flow that will make our form more accessible to a variety of AT users. Insights gathered will inform post-MVP enhancements to the features. These learnings will be relevant to other teams using the picklist pattern for releases in the future.

In relation to OCTO goals, this study will help us move toward making our digital experience the best way to access VA benefits (Priority #1) by increasing Veteran satisfaction with the digital 686/0538 (Key result 3.1).


---

### Research questions

Research Goal 1: Better understand how our end users understand and interact with the picklist pattern

* What specific needs do AT users have when encountering errors and instructions in the picklist?
* What barriers, if any, does the picklist pattern present to AT users?
* What content density in headers/labels optimizes comprehension without overwhelming AT users?
* Can AT users make edits to their responses from the summary page?
* Do different AT types encounter unique barriers with the picklist?
* What severity level do Veterans assign to errors they encounter?

Research Goal 2: Determine if Veterans who use assistive technology are able to successfully complete dependent verification

* What would Veterans expect to see/or to happen when they "verify dependents"?
* Are Veterans using assistive technology able to understand that they need to go to a different form to make changes?
* Can AT users navigate back to the verification form once they’ve made their changes in the 686?
* Are any headers, labels, or links lacking description or clarity?

Research Goal 3 : Assess how AT users would like the ‘cancel list+loop’ flow to function

* Do AT users understand where they have been returned to after cancelling? Does it align with their expectations, and if not, what would they expect?
* What unique challenges might AT users experience with the cancel flow?

### Hypotheses

* Veterans who use assistive technology will be able to use the picklist pattern to remove dependents independently
* AT users wont experience any additional difficulties from the 0538→686 transition, beyond those experienced by other user types
* AT users will be able to understand and recover from errors
* The friction we have included in the app to explain add/removal reasons wont impede AT users from completing their task, or be overly frustrating
* The balance between context we have included in questions and in hint text is right for AT users


---
  
## Methodology  🛠️
	
We plan on conducting 90-minute moderated usability sessions with AT users on staging.

### Location
- [x] **Remote**
- [ ] **In-person**
      
## Research materials 📔

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2026-04-dependents-management-AT-study/conversation-guide.md)
* [686/674 staging ](https://staging.va.gov/view-change-dependents/add-remove-form-21-686c-v2/introduction)
* [0538 staging](https://staging.va.gov/manage-dependents/verify-dependents-form-21-0538/introduction)
	
## Recruitment 🎯	

### Recruitment approach

We will work alongside Perigean to recruit Veterans for this research. 

* We’d like to have a kickoff meeting. Some times we are available (all in ET):
    * Tues 4/7: 10-1
    * Wed 4/8: 10-1, 3-6
* Could perigean...":
    * Share a link or screenshot of the recruitment survey for this study, so we can review it before it goes out to participants and before the kickoff meeting?
    * Call participants one day in advance to remind them about the session and confirm they plan on using the AT they indicated during the session?


### Recruitment criteria

Recruit 12 Veterans for 8 completes. If we can’t get enough alternative navigation users, feel free to allocate from the other assistive-technology types.

### Primary criteria (must-haves)

* 6 screen reader users, 4 completes
* 3 alternative navigation users, 2 completes
* 3 magnification users, 2 complete
* Must have Zoom downloaded to their device prior to the session and know how to share their screen
* Must be willing to share a web browser window over Zoom
* Must have a working microphone on their device

#### Secondary criteria (nice-to-haves)

* At least 4 are age 55 or older
* At least 2 women
* At least 2 don't have any degree or vocational training after high school
* At least 2 are 35 or under
* At least 2 live in a rural or remote area
* At least 3 people of color (anything other than White or Caucasian)
* At least 4 have a cognitive disability (e.g., TBI)

## Screener Questions 📋

### Screener Question Template

1. Do you use a screen reader, alternative navigation, or screen magnifier every time you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.
    1. No (DISQUALIFY)
    2. Yes (ask next question)
2. Are you willing to join the Zoom session using your screen reader, alternative navigation technology, or screen magnifier?
    1. No (DISQUALIFY)
    2. Yes (ask next question)
3. How long have you been using this screen reader or screen magnifier?
    1. Less than 1 year (DISQUALIFY)
    2. At least 1 year (ask next question)
4. Do you receive VA disability compensation or Veteran’s Pension?
    1. No (DISQUALIFY)
    2. Yes (ask next question)
5. Have you ever received additional VA disability or pension compensation for one or more dependents (like a spouse, child, or parent)?
    1. No (Don’t disqualify, but prioritize users who answer YES)
    2. Yes (ask next question)
6. What is the name of the screen reader, alternate navigation tool, or screen magnifier technology that you will use during the Zoom session? (open text field—RECORD what they say AND ask the rest of the questions)
    * If they say something non-digital like "magnifying glass, DISQUALIFY
    * If they say "JAWS", "NVDA", "VoiceOver", "TalkBack", or "Narrator", RECORD as screen reader user, RECRUIT 6 and ask next question
    * If they say “switch systems”, “Dragon”, “Voice Control” or a “sip and puff device” RECORD as alternative navigation user, RECRUIT 3 and ask next question
    * If they say "Magnifier", "Zoom", "Magnification", "Magnifier", or "ZoomText", RECORD as screen magnifier user, RECRUIT 3 and ask next question
    * If they say "increase font size" or "zoom in the browser", ask what percentage they zoom to.
        * If 200% or greater, RECORD as screen magnifier user, RECRUIT 3, and ask next question
    * If unsure whether someone qualifies, please ask Kristin
7. For this meeting, you'll need a device with Zoom installed that can screen share and has a working microphone. What kind of device will you be using? (RECORD)
    * Smartphone (RECRUIT 5 and ask next question)
    * Computer (RECRUIT 5 and ask next question)
    * Tablet (RECRUIT no more than 2, and ask next question)
8. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
    * No (ask next question)
    * Yes (RECRUIT 4, RECORD as having a cognitive disability, and ask next question)
9. What (if any) accommodations will you need to participate in this Zoom session?
    * Response option: text box


## Timeline 🗓️
We are on an extension contract that ends May 8, and hope to complete the synthesis from this research by then if possible. (Kristin is OOO May 1-8)

### Optional Kick-off Call with Perigean
    * Tues 4/7: 10-1
    * Wed 4/8: 10-1, 3-6

### ADE pilot sessions
* Mon 4/6: 11:30-1pm ET (alt navigation)
* Screenreader and magnification pilot sessions (to be scheduled)


### Research sessions
4/15-4/24

### Length of sessions
* Session length: 90 minutes
* Buffer time between sessions: 30 minutes
* Maximum Sessions per day: 3 sessions per day
  
### Availability
(all in ET)
* Wed 4/15: 10-6
* Thurs 4/16: 10-2, 5-6
* Fri 4/17: 10-6
* Mon 4/20: 10-6
* Tues 4/21: 10-6
* Wed 4/22: 10-6
* Thurs 4/23: 10-6
* Fri 4/24: 10-2

## Team Roles  🕵️👩‍💻👩‍🔬

* Moderator: Kristin Ouellette
* Research guide writing and task development: Kristin Ouellette
* Participant recruiting & screening: Perigean
* Project point of contact: Kristin Ouellette
* OCTO Design Lead: Christine Miller-Kelly
* Participant(s) for pilot test: ADE team
* Accessibility specialists: TBD from ADE team
* Note-takers: Kristin Ouellette Muskat, Christine Miller-Kelly, ADE team member to-be-assigned
* Observers: New Lifestage team once they get onboarded, OCTO stakeholders. Will share broadly on DSVA slack


## Approvals ✅
- `Reviewed by Christine Miller-Kelly, Team Design Lead on [04-02-2026]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
