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

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your research plan below.** 
> 
> Use the [GitHub Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed research plan.  The prompt uses natural language processing to extract key information and apply appropriate research repository tags. 

# Research Plan for VFMP Status Integration, Health Apps in Claims Status Tool, CHAMPVA Application Status MVP 02/2026

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**Veterans and their families enrolled in CHAMPVA currently lack digital infrastructure to manage their application status, relying heavily on paper mail and manual processes. This results in delays, backlogs, and a high volume of status inquiries. Approximately 80% of calls to the CHAMPVA helpdesk are status inquiries, leading to significant wait times.** 

**We will integrate CHAMPVA applications into the existing Claim and Appeal Status Tool (CST) to enhance transparency, reduce delays, and improve the overall user experience for veterans and their families. This solution aims to provide real-time access to application statuses, streamline documentation workflows, and reduce call center volume.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Authenticated experience**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**We are integrating CHAMPVA applications into the existing Claim and Appeal Status Tool (CST).**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/status-tool/chamva-status-tool-product-outline.md).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

`Objective 1: Optimize software delivery for Veteran impact.`

> - **Key Result 1.1:** All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov.
>      - Research Ops Plain Language: Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov
> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
>      - Research Ops Plain Language: Supports a production release that will measurably improved a product's Veteran-impacting KPIs.

`Objective 3: Relentlessly improve the user experience.`


> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
>      - Research Ops Plain Language: Supports this product’s OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
> - **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points.
>      - Research Ops Plain Language: Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
>      - Research Ops Plain Language: Supports the delivery of at least one release that directly addresses a documented user pain point within this product.

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Getting Out`
- `Starting Up`
- `Putting Down Roots`
- `Retiring`
- `Aging`

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **Identify any usability issues or confusing language in the CHAMPVA Application Status prototype.**

`2.` **Identify any confusion or assumptions caused by including CHAMPVA Applications alongside Claims and Appeals in the status tool**

`3.` **Determine whether or not Veterans and beneficiaries are able to understand the status of their application and upload requested documents using the CHAMPVA Application Status prototype**
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**This research will help us identify usability and content issues with the CHAMPVA Application Status prototype. We will use these insights to refine the design and content of these screens before they go into production as an extension of the Claims Status Tool. Ultimately, this will enable Veterans and beneficiaries to clearly understand their CHAMPVA Application status, know when and how to upload missing documents, and reduce long call center wait times.** 

---

### Research questions

**`1.` How do participants interpret the inclusion of CHAMPVA applications within the status tool? What do they expect to be included in the status tool based on the front page?**

**`2.` How do Veterans understand the application status for each of their beneficiaries based on the information presented in the status tool?**

**`3.` How do beneficiaries understand the status of their application based on the information presented in the status tool?**

**`4.` How do participants interpret the steps presented in the status tool? How do they interpret the steps in order to build a mental model of how CHAMPVA applications are processed?**

**`5.` When participants receive an evidence request, are they able to easily understand how to upload the requested documents and why they're being asked for those documents?**

**`6.` When one beneficiary on an application is deemed eligible, and the other has a pending evidence request – how do participants understand what next steps to take? Does the status of the application make sense to them?**

**`7.` What are opportunities to help participants understand the status of their CHAMPVA application?**


### Hypotheses
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

**[Enter hypotheses here]** 

---
   
## Methodology  🛠️
This will be a usability study conducted remotely via Zoom.  
 
The moderator will ask the participant some introductory questions about their previous experience applying for benefits and using VA.gov. Then, participants will be asked to complete the following tasks on a Figma prototype: 
- The user has recently applied for CHAMPVA benefits and wants to check the status of their application.
- The user received a letter in the mail requesting them to submit additional information. They follow the link in the letter in order to submit the requested documents.  
 
Participants will be encouraged to talk through their exploration of each flow.  

### Location
Remote research, over Zoom.

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide]() - TBD
- [Link to prototype]() - TBD
	
## Recruitment 🎯	

### Recruitment approach

We would like Perigean to recruit Veterans and family members (spouses and dependents)

Our intended audience for this study is Veterans with high disability ratings and their dependent spouses and children, who are **not currently enrolled** in the CHAMPVA program. We don't want prior knowledge or previous tool exposure to affect their understanding of the new content in the prototype.

We will split this study into two cohorts:
- **Cohort 1 (5 completed)**: Veterans with a 100% service connected disability rating with spouse and/or dependent children, who are not currently enrolled in CHAMPVA benefits.
- **Cohort 2 (5 completed)**: Spouses and dependent children of Veterans with a 100% service connected disabilty rating, who are not currently enrolled in CHAMPVA benefits.



### Recruitment criteria

- `Veterans:` **[8]**
- `Spouses and dependents:` **[8]**
- `Total:` **[16]**
- `Ideal completed sessions:` **[10, total 5 each cohort]**

### Primary criteria (must-haves)

**All participants must:**
- Be on a computer or mobile device
- During the session, be willing to share a web browser window on their device
- Have a working microphone
- Have Zoom downloaded to their device prior to the session and know how to share their screen

**Cohort 1 must:**
- Be a Veteran with a service-connected disability rating of 100%
- Have a spouse and/or dependent children who are **not** currently enrolled in the CHAMPVA program

**Screener Cohort 1 (Veterans with 100% service connected disability whose spouse/dependents may or may not be enrolled in CHAMPVA benefits):**
1. Do you get a VA disability compensation for a service-connected disability rating of 100%?
_Response otions: YES or NO_
* Yes [jump to next question]
* No [disqualify]

2. Do you have a spouse or dependent children?
_Response options: YES or NO_
* Yes [jump to next question]
* No [disqualify]

3. Is your spouse and/or dependents enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
* Yes (disqualify)
* No (Qualifies for study, RECORD as enrolled in CHAMPVA)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

**Cohort 2 must:**
- Identify as a spouse or dependent child of a Veteran with a service-connected disability rating of 100%
- Are not currently enrolled in CHAMPVA

**Screener Cohort 2 (Spouses and dependent children of Veterans with a 100% service-connected disability):**
1. Please select the answer that best fits you:
_Response options: Spouse of a Veteran, Dependent child of a Veteran (Answering either would qualify the participant)_

2. Does the Veteran you are related to get a VA disability compensation for a service-connected disability rating of 100%?
_Response options: YES, NO (Answering YES would qualify the participant)_

3. Are you enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
* Yes (disqualify)
* No (Qualifies for study, RECORD as enrolled in CHAMPVA)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)


#### Secondary criteria (nice-to-haves)
- `At least 2 women`
- `At least 2 who self-report a cognitive disabiltiy`
- `At least 2 don't have any degree or vocational training after high school`
- `At least 2 are 35-44`
- `At least 2 live in a rural or remote area`
- `At least 5 people who identify as Black or African American or Hispanic, Latino or Spanish origin, or Asian or Biracial`

  
## Timeline 🗓️

### Optional Kick-off Call with Perigean
We would like a kick-off call with Perigean to discuss recruitment criteria. Suggested dates and times: 
- `Monday - Friday 9:30am-12:00pm ET and 1:00pm-4:30pm ET`

### Prepare
**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` 
- `Date and time of pilot session:` 

### Research sessions
- `Planned dates of research:` **Wednesday, March 11 - Tuesday, March 17**

### Length of sessions
- `Session length:` 60 minutes
  
- `Buffer time between sessions:` 30 minutes
  
- `Maximum Sessions per day:` 3 per day

### Availability
> - `Monday - Friday 11:30am-4:30pm ET`

## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` Alyssa Li and Chantale Hedgeman
- `Research guide writing and task development:` Alyssa Li 
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Alyssa Li and Chantale Hedgeman
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` TBD (will link to ADE intake ticket when opened)
- `Note-takers:` Alyssa Li and Chantale Hedgeman
- `Observers:` Will need to sign up so we can limit the number per session. Alyssa will add them to the session invites received from Perigean.

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
