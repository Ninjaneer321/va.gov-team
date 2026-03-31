---
# Research Plan Metadata
title: "Research Plan for health-care, health-care, 2026-03-23"
date: 2026-03-23
last_updated: 2026-03-23
team: "health-care"
product: "health-care"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Research plan for recent care teams feature in secure messaging"
  product_location: "VA.gov My HealtheVet Secure Messaging"
  user_familiarity: "TBD - New product or iteration?"
  product_brief_url: "TBD - Add product brief URL if available"

# Research Design
methodology: "Usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "TBD - Extract from research plan"
  - goal_2: "TBD - Extract from research plan"

research_questions:
  - "TBD - Extract from research plan"

hypotheses:
  - "TBD - Extract from research plan if available"

expected_outcomes: "TBD - How will findings advance the product?"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "TBD"
  
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  research_dates: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "TBD"

veteran_journey_phases:
  - "TBD"
    
# Research Repository Tracking
tags:
  - health-care
  - MHV
  - secure-messaging
  - care-teams
  - research-plan
---

# Research Plan: Recent Care Teams Study  
**UX Designer: Espy Thomson**

## Background 🏗️
<details>
<summary>Briefly describe the background of your product.</summary>

`What problem is your product trying to solve?`

The **'Start a new message'** flow was redesigned to streamline care-team selection and improve accessibility through a **single-feature-per-page** approach. Since launch (**November 2025**), Veterans have reported consistent usability issues:

- **Flow complexity:** Extra steps and multi-page interactions feel “over-engineered” and slow message composition  
- **Unmet 'recent care team' needs:** A share of users immediately click **'Select a different care team'**, indicating the initial options often don’t match expectations  
- **Provider confusion:** Users are still finding it difficult to find previously messaged providers  

<img width="1046" height="764" alt="image" src="https://github.com/user-attachments/assets/f41db1dd-86a2-491c-b6dc-82927e40911c" />

*(Possible steps to start a new message for users)*

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

VA.gov authenticated experience

`Product Brief`

[Secure Messaging Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/README.md)

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
`4.` Understand what format of the interstitial content may be most easily understood by users. 
`5.` Identify new and existing pain points in the message creation flow.  

### Outcome

The insights that come out of this research will inform the structure and usability of the 'Start a new message' flow and help prioritize improvements for future iterations. Design decisions will be made around the number of pages to start a new message, and the other components of selecting a care team to start a new message. 

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
- c. Are there names they would expect to see here that they don’t? 
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
**`7.` How does this flow support or hinder users’ ability to complete the task?**  
- a. Where do users experience confusion or hesitation?  
- b. How does the flow align with user expectations as they move between steps?  
- c. What changes would improve clarity, efficiency, or overall usability?  

#### Concept B (1-page): User addresses and writes the message all in one place  
**`8.` How does this flow support or hinder users’ ability to complete the task?**  
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

- [Recent Care Teams Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/Recent-Care-Teams-Research/conversation-guide-final.md)
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

All participants must receive VA health care, have sent a secure message to their provider using My HealtheVet on VA.gov at least once in the past 6 months, and be comfortable participating on either a desktop/laptop or mobile device.

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

**3. Have you received care from more than one VA health care facility?**  
- Yes → Move to Q4  
- No → End screening

**4. During the session, we’ll ask you to sign in to your My HealtheVet account on VA.gov and share your screen while we observe how you use secure messaging. We will only focus on the messaging area and will not ask you to open or read any personal messages or health information. Are you comfortable participating in this way?**  
- Yes → Recruit  
- No → End screening  
---

## Timeline 🗓️

- `Planned dates:` **[Enter dates]**  
- `Session length:` **[Enter]**  
- `Buffer time:` **[Enter]**  
- `Sessions per day:` **[Enter]**

---

## Team Roles 🕵️

- Moderator: **Espy Thompson, Athena Bozak**  
- Research guide: **[Enter]**  
- Recruiting: **Perigean**  
- Point of contact: **Espy Thomson**  
- Accessibility specialist: **Sarah Horton?**  
- Note-takers: **Athena Bozak**

---

## Approvals ✅

- Reviewed by: Cara Frissell, Horizon Team  
- Reviewed by Research Ops: Robyn Singleteon, Research lead 
