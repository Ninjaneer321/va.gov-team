---
# Research Plan Metadata
title: "Research Plan for AR Team, VSO - VA Benefits (526ez, 686c, 674) - Interviews, 10/2024"
date: 2024-10-01
last_updated: 2024-10-01
team: "Accredited Representative Facing (ARF) Team"
product: "Accredited Representative Portal (ARP)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans Service Organization Representatives need a modern, accessible, and secure online system to streamline digital form submissions and improve the experience for both representatives and Veterans they serve."
  product_location: "Accredited Representative Portal on VA.gov"
  user_familiarity: "New product development - MVP features evaluation"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing"

# Research Design
methodology: "semi-structured interviews"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand how Veterans Service Organization Representatives (VSORs) prepare and file VA compensation disabilities claims (VA Form 21-526EZ) with Veterans"
  - goal_2: "Understand desirability of SEP replacement and what features are required for minimal viable product (MVP) adoption"
  - goal_3: "Understand VSOR assistive technology (AT) user needs"

research_questions:
  - "What is the VSORs process for preparing and filing VA disability compensation claims (VA Form 21-526EZ)?"
  - "How do VSORs support Veterans with managing dependents with VA Forms 21-686c and 21-674?"
  - "What technology do they use in their processes and what do they like and dislike about their digital tools?"
  - "How do AT VSORs use technology to support them and what do they need to be successful with new VA.gov tools?"
  - "What additional forms do VSORs frequently use and which would they find most beneficial to have digitized?"
  - "If the ARP MVP only included instant acceptance/denial of VA Form 21-22, and submission of 21-686c and 21-674, would that be enough for ARP adoption?"

hypotheses:
  - "VSORs will want a reliable VA tool for processing claims"
  - "VSORs will want all claims forms, including supporting forms, digitized"
  - "VSORs will want a way to upload supporting documents"
  - "VSORs will want a way to review past claims, and track new claims"
  - "VSORs, including AT users, will prefer to fill out a PDF form, rather than a stepped flow"
  - "VSORs will be open to ARP adoption without VA Form 21-526EZ"

expected_outcomes: "Understanding VSORs process, technology use, and additional forms used will help inform features and functionality in the Accredited Representative Portal. Understanding what VSORs expect in an ARP MVP will help inform priorities. Stretch goal: Understanding how VSORs prepare and file VA compensation disability claims could inform existing benefits workflows on VA.gov."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Direct recruitment through VBA and VSO organizations"
  approach: "Targeted recruitment of VSORs with mix of AT users, SEP users, and non-SEP users"
  
  primary_criteria:
    - "Supports Veterans with filing VA disability compensation claims"
    - "3 BVA AT users, 3 SEP users, 3 non-SEP users"
    - "Recently supported a Veteran with filing a VA compensation claim"
    
  secondary_criteria:
    - "No participant state overlap - target states: California, Texas, and Ohio"
    - "Mix of singular and multiple VSO accreditations"
    - "Mixture of officers and director role participants"
    - "Mixture of novice and experienced VSORs"
    - "Mixture of in-person, hybrid, and remote Veteran support"
    
  screener_questions:
    - question: "What is your current job title?"
      qualifying_response: "Open response"
    - question: "How long have you been accredited to represent Veterans and claimants to VA?"
      qualifying_response: "Open response"
    - question: "Which Veterans Service Organizations are you accredited with?"
      qualifying_response: "Open response"
    - question: "Do you currently, or have you previously, used any tools to complete and submit VA Forms 21-526EZ, 21-686c or 21-674?"
      qualifying_response: "SEP, AccessVA/QuickSubmit, Tyler Tech/Vetraspec, VetPro, or other tools"
    - question: "Do you use any assistive technology when operating a computer or mobile device?"
      qualifying_response: "Open response"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  accredited_representatives: 9
  total_recruited: 9
  completed_sessions_goal: 9
  
# Timeline & Sessions
timeline:
  pilot_date: "2024-10-15"
  pilot_participant: "TBD"
  research_dates: "2024-10-16 to 2024-11-01"
  research_review_submission: "2024-09-27"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Our digital experiences are the best way to access VA health care and benefits"
    key_results: 
      - "Key Result 2: Number of transactions processed during our products have increased by 25%"
      - "Key Result 3: All new products have a faster transaction time than those they replaced"
      - "Key Result 4: No transactions accepted by our products have a fatal error"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "2024-02 User Interviews"
    - "2024-03 Single Accredited Testing"
    - "2024-05 NACVSO Research"
    
tags:
  - "accredited-representative-facing"
  - "accredited-representative-portal"
  - "interviews"
  - "discovery"
  - "vso-representatives"
  - "disability-compensation"
  - "form-21-526ez"
  - "form-21-686c"
  - "form-21-674"
  - "form-21-22"
  - "power-of-attorney"
  - "assistive-technology"
  - "accessibility"
  - "SEP-replacement"
  - "mvp-requirements"
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
