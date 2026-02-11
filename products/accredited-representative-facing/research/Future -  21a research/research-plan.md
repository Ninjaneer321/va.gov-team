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

# Research Plan for Accredited Representative Facing (ARF) Team, Form 21a, Date TBD

## Background

The Accredited Representative Facing Team is seeking to re-envision the experience of Accredited Representatives so that they can more seamlessly and accurately help Veterans with their VA interactions. Today, individuals who want to become an accredited representative through the VA must fill out [Form 21a](https://www.va.gov/find-forms/about-form-21a/) and submit it to the Office of General Counsel (OGC) through US Mail or fax machine. VA OGC Employees/Accreditation managers must then process the paper form, and will correspond with the individual multiple times when there is insufficient information provided on the form or if there are follow-up questions. 

We are seeking to modernize this experience with a Digital 21a form that individuals seeking VA Accreditation can submit through the Accredited Representative Portal, which will help to ensure that the required information is being provided at the time the application is submitted for review from the VA Office of General Counsel. 

### OCTO priorities

**Objective 1: Our digital experiences are the best way to access VA health care and benefits.**

* **Key Result 2:** Number of transactions processed during our products have increased by 25%.
* **Key Result 3:** All new products have a faster transaction time than those they replaced.
* **Key Result 4:** No transactions accepted by our products have a fatal error.

**Objective 2: Our platforms are the best way to deliver products at VA**

* **Key Result 3:** Our platforms power twice as many interactions compared to last year

After years of focusing exclusively on Veterans who want to interact directly with VA, we will build tools for Veterans who want to work with accredited representatives, and the representatives who support those Veterans. In doing so, we will redirect to VA.gov traffic currently going through paper forms submissions to OGC.

Full list of [OCTO-DE priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md).

### Veteran journey

Any/all points when a Veteran needs support filing and accessing their benefits.

## Research Goals

* Understand the usability of digitized Form 21a for **prospective claims agents and accredited attorneys** on desktop.
* Uncover prospective claims agents’ and attorneys’ assumptions about the accreditation application process.
* Answer questions about design patterns that could impact multiple forms outside of Form 21a.
* Understand 21a applicants better to create more robust personas.

### Outcome

* Participants’ accreditation application experience will inform user documentation and improvements to usability and accessibility.
* Observational and reported usability measures will inform adjustments to the Form 21a experience to improve accessibility and usability.
* Observational and reported usability measures will inform future design decisions to other forms across the VA network to improve accessibility and usability.
* Quantitative and qualitative feedback from user testing will define and benchmark usability for the digital 21a experience ahead of future expansions of Form 21a fields.

### Research questions

Claims Agents/Attorneys

* What prompts Claims Agents/Attorneys to apply for accreditation?
* (For those who have already applied for/have their accreditation) What have users’ experience been with applying for and receiving accreditation from VA?
* Are there any instances where attorneys who are not in good standing with the bar would apply?
* How do jurisdictions work for Claims Agents versus accredited Attorneys?

21a usability

* Do users understand the information shown in the 21a? Is there any information missing?
* What are users’ expectations of the digital 21a experience?
* Are there any challenges with using the experience?
* Do users understand next steps after submitting the 21a?

Accessibility

* Are there any issues with VA Forms Library components that make the AT user experience incomplete or unable for them to finish the form?
* How do AT users handle condition questions in the 21a form? Are they fully accessible?

Language

* How do users respond to the language of potentially triggering questions around imprisonment, convictions, terminations, suspensions, etc.?
* Do users understand the legal jargon in various questions, especially in Step 6? Is this a blocker to completion of the form? Are there better ways to word these questions?

### Hypothesis

* If shown a substantial portion of they form, applicants will find the form long and desire to:
    * See more granular data about how far through they form they have progressed
    *  Be able to jump between steps/questions
* Accreditation applicants will understand the language used in the form, but report that they could imagine others could be confused by it. 

## Methodology

**Semi-structured interviews**/ The interviewer will ask the participant a series of questions to understand users’ current experiences with obtaining accreditation from VA with an emphasis on clarifying users’ mental models and attitudes towards the accreditation experience. 

**Usability testing**/ Accredited representatives will be asked to sign in and fill out the authenticated 21a form to test usability, accessibility, and comprehensibility of content.

### Location

Online, over Zoom. Point of contact is [NAME, TITLE].

### Research materials

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/Future%20-%20%2021a%20research/converation-guide.md)
* [Link to staging environment](url goes here) and prototype(url goes here)(Figma)

## Recruitment

Our target audience is non-accredited claims agents and attorneys who are seeking to apply for accreditation with VA OGC. Our goal is to have an even split between claims agents and attorneys.

### Recruitment approach

Given the audience for Form 21a, we ideally would like to test with non-accredited claims agents and attorneys. Recruitment sources for these users may prove difficult, as these users may not currently have a relationship with VA OGC, or an outside organization, such as a law office with practicing accredited attorneys. 

Our recruitment criteria and recruitment plan for this study has taken these constraints into account to ensure a balanced user testing panel.

### Recruitment criteria

Primary criteria (must-haves): Our target audience for this research are attorneys/agents who:

* Are seeking to apply for accreditation with VA OGC
* Recently accredited attorneys/agents (within the past 6 months)

We are looking for attorneys/agents from all phases of acquiring acreddition:

1. Attorneys/agents that are looking/have started applying for accreditation 
2. Attorneys/agents who are in the middle of the process of applying (Researchers running this study should confirm with OGC that testing with applicants who are partway through their application will not complicate or jeopardize the application process)
3. Attorneys/agents who have recently completed their application
4. Attorneys/agents who have recently been awarded accreditation

## Timeline

1. ##/## usability test plan and conversation guide completed, ARF Design internal review conducted, and materials disseminated to VA stakeholders for comment
2. ##/## 21a prototype is built in the staging environment or in Figma (reference the [current Figma mock ups](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=1509-182176&t=ogZbmJOugbOzFN0p-1) as a starting place to create a clickable prototype)
3. ##/## Pilot session completed, changes made to research artifacts and staging environment as needed
4. ##/## Start recruitment
5. ##/## - ##/## Conduct test sessions
6. ##/## - ##/## Data analysis and reporting
7. ##/## Final presentation

Timeline is an estimation and will be updated if needed. Dependencies that may impact this timeline include:

* Readiness of upstream dependencies from OGC teams
* Completion of Staging Review
* Review process with direct team and VA Benefits Portfolio enablement
* Recruitment

### Prepare

* Pilot participant name/email: TBD
* Date and time of pilot session: TBD
* Pilot season attendance: TBD (moderator), TBD (lead notetaker), TBD (observers/secondary notetakers)

### Research sessions

* Session length: 75 minutes
* Buffer time between sessions: 30-45 minutes
* Maximum sessions per day: 3
* Availability: Monday-Friday, 10am-6pm Eastern

## Team Roles

* Moderators: TBD
* Research guide writing and task development: TBD
* Participant recruiting & scheduling: TBD
* Project point of contact: TBD
* Notetakers: TBD
* Observers: TBD
