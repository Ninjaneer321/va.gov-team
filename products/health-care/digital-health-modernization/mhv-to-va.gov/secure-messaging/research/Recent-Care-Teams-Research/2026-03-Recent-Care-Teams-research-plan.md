---
# Research Plan Metadata
title: "Research Plan for MHV on VA.gov, Secure Messaging, Recent Care Teams Study, 2026-03-23"
date: 2026-03-23
last_updated: 2026-04-03
team: "MHV on VA.gov, Secure Messaging"
product: "Secure Messaging"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The 'Start a new message' flow was redesigned to streamline care-team selection and improve accessibility through a single-feature-per-page approach. Since launch (November 2025), Veterans have reported friction with flow complexity, unmet 'recent care team' needs, and provider confusion."
  product_location: "VA.gov My HealtheVet Secure Messaging"
  user_familiarity: "Iteration on existing product"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product-outline.md"

# Research Design
methodology: "Usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate how many pages users should go through to write a message and how this impacts the overall experience."
  - goal_2: "Identify where assistive technology users encounter challenges in both current and proposed designs."
  - goal_3: "Identify and assess what strategies users are defaulting to in order to identify the correct care team."
  - goal_4: "Understand what format of the interstitial content may be most easily understood by users."
  - goal_5: "Identify new and existing pain points in the message creation flow."

research_questions:
  - "How do users determine which care team to select when composing a message?"
  - "How do users experience the multi-step flow when composing a message?"
  - "To what extent do users notice, understand, and engage with interstitial content?"
  - "How does the one-feature-per-page structure impact task completion for assistive technology users when composing a message?"
  - "How do users use or expect to use the contact list when selecting a care team?"
  - "How do users interpret and use message categories when composing a message?"
  - "How does a 2-page combined addressing flow support or hinder users' ability to complete the task?"
  - "How does a 1-page single-page flow support or hinder users' ability to complete the task?"

hypotheses:
  - "Users will be able to complete message composition more efficiently in a single-page flow compared to a multi-step flow, including assistive technology users when dynamic updates are minimal."
  - "Users will not notice or engage with interstitial content, and it will have little impact on task completion."
  - "Users will have difficulty understanding the distinction between care systems and care teams, which will impact their ability to select the correct care team."

expected_outcomes: "The insights will inform the structure and usability of the 'Start a new message' flow and help prioritize improvements for future iterations."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation"
  
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  submit_to_research_ops: "2026-04-06"
  kickoff_with_perigean: "2026-04-10 or 2026-04-13"
  research_dates: "2026-04-20 to 2026-04-28"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "KR 3.1: Each OIT portfolio will improve customer satisfaction of impactful systems by 3% or more"
      - "KR 3.2: 100% of end-user facing C100 systems maintain a ranked list of user pain points"
      - "KR 3.3: 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point"

veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
tags:
  - health-care
  - MHV
  - secure-messaging
  - care-teams
  - research-plan
  - usability-testing
  - recent-care-teams
---

# Research Plan: Recent Care Teams Study  
**UX Designer: Espy Thomson**

## Background 🏗️
<details>
<summary>Briefly describe the background of your product.</summary>

`What problem is your product trying to solve?`

The **'Start a new message'** flow was redesigned to streamline care-team selection and improve accessibility through a **single-feature-per-page** approach. Since launch (**November 2025**), Veterans have reported:

- **Flow complexity:** Extra steps and multi-page interactions feel "over-engineered" and slow message composition  
- **Unmet 'recent care team' needs:** A share of users immediately click **'Select a different care team'**, indicating the initial options often don't match expectations  
- **Provider confusion:** Users are still finding it difficult to find previously messaged providers  

<img width="1046" height="764" alt="image" src="https://github.com/user-attachments/assets/f41db1dd-86a2-491c-b6dc-82927e40911c" />

*(Possible steps to start a new message for users)*

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

VA.gov authenticated experience

`Product Brief`

[Secure Messaging Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product-outline.md) 

</details>

---

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md)

`Objective 3: Relentlessly improve the user experience.`

- **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more  
- **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points  
- **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system  

---

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

- `Starting Up`  
- `Taking Care of Myself`  
- `Putting Down Roots`  
- `Retiring`  
- `Aging`  

---

## Research Goals 🥅

### Goals

`1.` Evaluate how many pages users should go through to write a message and how this impacts the overall experience.  
`2.` Identify where assistive technology users encounter challenges in both current and proposed designs.  
`3.` Identify and assess what strategies users are defaulting to in order to identify the correct care team 
`4.` Understand what format of the interstitial content may be most easily uderstood by users to i.  
`5.` Identify new and existing pain points in the message creation flow.  

### Outcome

The insights that come out of this research will inform the structure and usability of the 'Start a new message' flow and help prioritize specific design improvements around number of pages and care system questions. Design decisions will be based on real Veteran behaviors, preferences, and pain points.

---

## Research Questions

### Section 1: Current experience

#### Care team selection & discovery  
**`1.` How do users determine which care team to select when composing a message?**  
- a. Care system: Do users rely on the care system to narrow their list of care teams?
- b. Do users search or scroll in the combo box when looking for a care team?
- c. What categories of care teams do users normally message, including recent care teams?
- d. What navigational features help users correctly identify the appropriate care team quickly and easily? 

#### Task flow & friction points  
**`2.` How do users experience the multi-step flow when composing a message?**  
- a. What do users do when the care team they want isn't visible on the first page?
- b. How do users think a care team name shows up on the recent care teams page? 
- c. Are there names they would expect to see here that they don't? 
- d. What do users do if this happens?


#### Interstitial content engagement  
**`3.` To what extent do users notice, understand, and engage with interstitial content?**   

#### Accessibility  
**`4.` How does the one-feature-per-page structure impact task completion for assistive technology users when composing a message?**

#### Contact list  
**`5.` How do users use or expect to use the contact list when selecting a care team?**  
- a. How do users think the contact list works?
- b. What do users think happen if they add or remove care teams from the contact list?
- c. When users cannot find a care team in their dropdown, what actions do they take?
  

#### Category selection  
**`6.` How do users interpret and use message categories when composing a message?**  
- a. What aspects of the categories do users find confusing?  
- b. What choices do users default to when they are unsure?

---

### Section 2: Future experience & flow concepts

#### Concept testing for alternative flows

#### Concept A (2-page): Combined addressing page (care system + team selection) → message composition  
**`7.` How does this flow support or hinder users' ability to complete the task?**  
- a. Where do users experience confusion or hesitation?  
- b. How does the flow align with user expectations as they move between steps?  
- c. What changes would improve clarity, efficiency, or overall usability?  

#### Concept B (1-page): User addresses and writes the message all in one place  
**`8.` How does this flow support or hinder users' ability to complete the task?**  
- a. Where do users experience confusion or hesitation?  
- b. How does the single-page structure align with user expectations?  
- c. What changes would improve clarity, efficiency, or overall usability?  

#### Concept Comparison
- Which parts of both concepts made it easier for you to address and send a message? Why?

---

### Hypotheses
1. Users will be able to complete message composition more efficiently in a single-page flow compared to a multi-step flow, including assistive technology users when dynamic updates are minimal.  

2. Users will not notice or engage with interstitial content, and it will have little impact on task completion.  

3. Users will have difficulty understanding the distinction between care systems and care teams, which will impact their ability to select the correct care team.  

---

## Methodology 🛠️

- 60-minute moderated usability sessions conducted via Zoom  
- Target of 8 completed sessions with Veterans  
- Participants will use either a desktop/laptop or mobile device  

---

## Location

- [x] **Remote**  
- [ ] **In-person**

---

## Research materials 📔

- [Recent Care Teams Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/Recent-Care-Teams-Research/2026-03-Recent-Care-Teams-conversation-guide.md)
- [Link to Prototype 1](https://department-of-veterans-affairs.github.io/va-prototype-kit/src/prototypes/recent-care-teams-prototype-1/start-message.html)
- Link to prototype 2 (url goes here)

---

## Recruitment 🎯

### Recruitment approach

We will partner with Perigean to recruit a diverse sample of Veterans for moderated remote usability testing. We will use a lean maximum variation approach to include:

### Recruitment criteria

- `Veterans:` **12**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **12**
- `Ideal completed sessions:` **8 (minimum)**

### Primary criteria (must-haves)

All participants must receive VA health care, have sent a secure message to their provider using My HealtheVet on VA.gov at least once in the past 6 months, and be comfortable participating on either desktop or mobile.

- At least 6 participants are over 55 years old
- At least 6 participants have a traumatic brain injury or cognitive disability
- At least 6 participants primarily use a mobile device
- At least 4 participants have a high school diploma as their highest level of education
- At least 4 participants use assistive technology (2 screen reader, 2 speech input or speech-to-text)
- At least 3 participants live in a rural area
- At least 3 participants are women
- At least 3 participants are Black or African American
- At least 3 participants are Hispanic, Latino, or of Spanish origin
- At least 2 participants are Asian
- At least 1 participant identifies as gay, lesbian, or bisexual

<img width="400" alt="image" src="https://github.com/user-attachments/assets/7c6afacd-989f-4c50-b60a-95abafa6d8ec" />


---

## Screener Questions 📋

**1. Do you currently receive health care through VA?**  
- Yes → Move to Q2  
- No → End screening  

**2. In the past 6 months, have you sent a secure message to your health care team using My HealtheVet on VA.gov?**  
- Yes → Move to Q3  
- No → End screening  

**3. When sending a secure message on My HealtheVet, are you able to choose from more than one VA health care system?**  
- Yes → Move to Q4  
- No → End screening  

*Note for Perigean (not read to participants):*  
*We're looking to recruit Veterans who have access to more than one VA health care system within secure messaging (not just multiple care teams). This can happen when a Veteran has received care at facilities in different VA health care systems.*

[_Example of having more than one VA health care system:_]  
<img width="250" alt="Select care team example" src="https://github.com/user-attachments/assets/1d216107-1d83-49b1-94b8-2b19981433ef" />

**4. During the session, we'll ask you to sign in to your My HealtheVet account on VA.gov and share your screen while we observe how you use secure messaging. We will only focus on the messaging tool, and no personal health information will be recorded. Are you comfortable with this?**  
- Yes → Recruit  
- No → End screening  
---

## Timeline 🗓️
- `Submit plan to Research Ops:` **April 6**
- `Kickoff with Perigean:` **Planning for April 13, once approved by ResearchOps** 
- `Planned dates:` **April 20 - April 28**  
- `Session length:` **no longer than 60 minutes**  
- `Buffer time:` **at least 30 minutes in between sessions**  
- `Sessions per day:` **no more than 3**

---

### Session availability (PT)
- `Time slots per day:` **4 (max 3 scheduled)**
- `Session length:` **60 minutes**
- `Buffer:` **at least 30 minutes between sessions**

**Monday, April 20**
- 9:30–10:30 AM  
- 11:00 AM–12:00 PM  
- 1:00–2:00 PM  
- 3:00–4:00 PM  

**Tuesday, April 21**
- 9:30–10:30 AM  
- 11:00 AM–12:00 PM  
- 1:00–2:00 PM  
- 3:00–4:00 PM  

**Wednesday, April 22**
- 9:30–10:30 AM  
- 11:00 AM–12:00 PM  
- 1:00–2:00 PM  
- 3:00–4:00 PM  

**Thursday, April 23**
- 9:30–10:30 AM  
- 11:00 AM–12:00 PM  
- 1:00–2:00 PM  
- 3:00–4:00 PM  

**Friday, April 24**
- 9:30–10:30 AM  
- 11:00 AM–12:00 PM  
- 1:00–2:00 PM  
- 3:00–4:00 PM  

**Monday, April 27 (backup / overflow)**
- 9:30–10:30 AM  
- 11:00 AM–12:00 PM  
- 1:00–2:00 PM  
- 3:00–4:00 PM  

**Tuesday, April 28 (backup / overflow)**
- 9:30–10:30 AM  
- 11:00 AM–12:00 PM  
- 1:00–2:00 PM  
- 3:00–4:00 PM  

---

## Team Roles 🕵️

- Moderator: **Espy Thompson, Athena Bozak**   
- Recruiting: **Perigean**  
- Point of contact: **Espy Thomson**  
- Accessibility specialist: **Sarah Horton?**  
- Note-takers: **Athena Bozak, Espy Thomson**

---

## Approvals ✅

- Reviewed by: Cara Frissell, Horizon Team  
- Reviewed by Research Ops: Robyn Singleteon, Research lead 
