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

# Research Plan for AR Team, VSO - VA Benefits (526ez, 686c, 674) - Interviews, 10/2024

## **Background**

The Accredited Representative Facing (ARF) team, within the Office of the Chief Technology Officer (OCTO) Benefits Portfolio at the Department of Veterans Affairs (VA), supports accredited representatives in their work with Veterans.

Our mission is to create an accessible, modern, and secure online system for accredited representatives. We aim to streamline the use of digital forms, providing a faster and smoother experience for both representatives and the Veterans they serve, ultimately improving the overall VA experience.

[Link to product brief.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing)


### **OCTO priorities**

Objective 1: Our digital experiences are the best way to access VA health care and benefits.

- Key Result 2: Number of transactions processed during our products have increased by 25%.

- Key Result 3: All new products have a faster transaction time than those they replaced.

- Key Result 4: No transactions accepted by our products have a fatal error.

[Full list of OCTO-DE priorities.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md)


### **Veteran journey**

Veterans, their family members, and caregivers can get the help of an accredited representative at any point in the journey where they are submitting claims. Such as; starting up, taking care of myself, retiring, and aging.

Full [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) for reference.


## **Research overview**

### **Goals**

- Understand how Veterans Service Organization Representatives (VSORs) prepare and file VA compensation disabilities claims ([VA Form 21-526EZ](https://www.va.gov/find-forms/about-form-21-526ez/)) with Veterans.

- Understand desirability of SEP replacement and what features are required for minimal viable product (MVP) adoption.

- Understand VSOR assistive technology (AT) user needs.


### **Outcome**

- Understanding VSORs process, technology use, and additional forms used will help inform features and functionality in the Accredited Representative Portal (ARP).

- Understanding what VSORs expect in an ARP MVP will help inform priorities.

- _Stretch goal:_ Understanding how VSORs prepare and file VA compensation disability claims could inform existing benefits workflows on VA.gov.


### **Research questions**

- What is the VSORs process for preparing and filing VA disability compensation claims ([VA Form 21-526EZ](https://www.va.gov/find-forms/about-form-21-526ez/))?

- How do VSORs support Veterans with managing dependents with VA Forms [21-686c: Application Request to Add and/or Remove Dependents](https://www.va.gov/find-forms/about-form-21-686c/) and [21-674: Request for Approval of School Attendance](https://www.va.gov/find-forms/about-form-21-674/)?

- What technology do they use in their processes?

  - What do they like and dislike about their digital tools?

  - How do AT VSORs use technology to support them?

    - What do they need to be successful with new VA.gov tools?

- What additional forms do VSORs frequently use?

  - Which would they find most beneficial to have digitized?

- If the ARP MVP only included instant acceptance/denial of VA Form 21-22, and submission of 21-686c and 21-674, would that be enough for ARP adoption?


### **Hypothesis**

- VSORs will want a reliable VA tool for processing claims.

- VSORs will want all claims forms, including supporting forms, digitized.

- VSORs will want a way to upload supporting documents.

- VSORs will want a way to review past claims, and track new claims.

- VSORs, including AT users, will prefer to fill out a PDF form, rather than a stepped flow.

- VSORs will be open to ARP adoption without VA Form 21-526EZ.


## **Methodology**

**Interviews**/ The moderator will ask the participants a series of questions to understand how they approach the disability claims process.


### **Location**

Remote on Zoom.


### **Research materials**

- Link to conversation guide


## **Recruitment**

### **Recruitment approach**

Our target audience are 9 VSORs, who have recently supported a Veteran with filing a VA compensation claim. With a mix of Blind Veterans of America (BVA) AT, SEP, and non-SEP users.


### **Recruitment criteria**

#### **Primary criteria**

- Supports Veterans with filing VA disability compensation claims.

- **3 each**/ BVA AT users, SEP users, non-SEP users.


#### **Secondary criteria**

In order of importance:

- No participant state overlap.

  - Target states include: California, Texas, and Ohio.

- Mix of singular and multiple VSO accreditations.

- Mixture of officers and director role participants.

- Mixture of novice and experienced VSORs.

- Mixture of in-person, hybrid, and remote Veteran support.


### **Recruitment templates**

#### **Screener questions**

1. What is your current job title? \[Open response field]

2. How long have you been accredited to represent Veterans and claimants to VA? \[Open response field]

3. Which Veterans Service Organizations are you accredited with? \[Open response field]

4. \[SEP] Do you currently, or have you previously, used any of the following tools to complete and submit VA Form 21-526EZ? Select all that apply.

   - AccessVA / VA QuickSubmit

   - SEP

   - Tyler Tecch / Vetraspec

   - VetPro

   - USPS Mail or Fax

   - Other \[Open response field]

5. \[SEP] Do you currently, or have you previously, used any of the following tools to complete and submit VA Form 21-686c or 21-674? Select all that apply.

   - AccessVA / VA QuickSubmit

   - SEP

   - Tyler Tecch / Vetraspec

   - VetPro

   - USPS Mail or Fax

   - Other \[Open response field]

6. \[Non-SEP] Do you frequently support Veterans or claimants with VA disability compensation claims? Select all that apply. \[Multi select]

   - I support Veterans or claimants with preparing Fully Developed Claims

   - I support Veterans or claimants in preparing and filing VA Form 21-526EZ

   - I support Veterans or claimants with VA decision reviews and appeals

   - I support Veterans with VA Form 21-686c: Application Request to Add and/or Remove Dependents

   - I support Veterans with VA Form 21-674: Request for Approval of School Attendance

   - I do not support Veterans or claimants with any of the above

   - Other \[Open response field]

7. Do you use any assistive technology when operating a computer or mobile device, such as a magnification device or screen reader? \[Open response field]


## **Timeline**

- [ ] 09/23/ Send VBA content for SEP to begin recruitment

- [ ] 09/27/ Submit for team and [#benefits-vso-research](https://dsva.slack.com/archives/C07CXMZ995W) feedback

- [ ] 10/16 - 10/18 BVA VSOR interviews

- [ ] 10/16 - 10/18/ SEP recruitment

  - [ ] 10/21 - 10/25/ SEP interviews

- [ ] 10/21 - 10/25/ Non-SEP recruitment

  - [ ] 10/28 - 11/01/ Non-SEP interviews

- [ ] 11/04 - 11/22/ Report and share-out

Timeline is an estimation and will be updated as dependencies clear. Some dependencies that can impact this timeline include:

- Review process

- Recruitment


### **Length of sessions**

- Session length: 60-minutes

- Buffer time between sessions: 1 hour

- Maximum Sessions per day: 2 per day


## **Team Roles**

- **Moderator:** Janelle Finnerty, 248-303-2329, janelle.finnerty\@oddball.io

- **Research guide writing and task development:** Janelle Finnerty

- **Participant recruiting & screening:** Janelle Finnerty

- **Project point of contact:** Janelle Finnerty

- **Observers:** Janelle will forward invites based on the sign-up sheet.
