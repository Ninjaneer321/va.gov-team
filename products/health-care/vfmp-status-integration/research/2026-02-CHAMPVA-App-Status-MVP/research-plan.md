---
# Research Plan Metadata
title: "Research Plan for VFMP Status Integration, Health Apps in Claims Status Tool, CHAMPVA Application Status MVP, February 2026"
date: 2026-03-30
last_updated: 2026-03-30
team: "VFMP Status Integration"
product: "CHAMPVA Application Status MVP"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans and their family members applying for CHAMPVA benefits currently lack digital infrastructure to view their application status, relying heavily on paper mail and manual processes. This results in delays, confusion, and repeated manual inquiries."
  product_location: "Authenticated experience, integrated into the existing Claim and Appeal Status Tool (CST)"
  user_familiarity: "Iteration on existing product - integrating CHAMPVA applications into the existing Claims Status Tool"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/status-tool/chamva-status-tool-product-outline.md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Identify any usability issues in the CHAMPVA Application Status user flows, which include finding application status and identifying and uploading missing documents (requested information)"
  - goal_2: "Identify where participants expect their CHAMPVA Application status to live within the VA ecosystem, inclusive of MyVA and the status tool"
  - goal_3: "Identify any content comprehension challenges that might prevent participants from understanding their CHAMPVA Application Status and requested next steps, and how issues might differ between Veterans and non-Veterans"

research_questions:
  - "In what section of MyVA do participants expect to find their CHAMPVA application? Are they able to navigate to the status tool without assistance?"
  - "How do participants interpret the inclusion of CHAMPVA applications within the status tool? What do they expect to be included in the status tool based on the front page?"
  - "How do participants understand the application status for each of their beneficiaries based on the information presented in the status tool? Are there differences between how Veteran and beneficiary participants understand their status?"
  - "How do participants interpret the steps presented in the status tool? What mental model do participants have of how CHAMPVA applications are processed before using the status tool? What is their mental model after?"
  - "When participants receive an information request, are they able to easily understand how to upload the requested documents and why they're being asked for those documents?"
  - "When one beneficiary on an application is deemed eligible, and the other has a pending information request, how do participants understand what next steps to take? Does it make sense that the application stays open until both beneficiaries have been processed?"
  - "What are opportunities to improve the experience of participants using the status tool for their CHAMPVA application?"

hypotheses:
  - "Participants will be able to navigate through the prototype relatively easily and will react positively to seeing the status of their applications online"
  - "Participants may have issues identifying what section of MyVA to find CHAMPVA Applications in, since they are the only healthcare application listed alongside claims and appeals"
  - "Participants may have issues interpreting the steps a CHAMPVA application will go through to be processed"
  - "Participants may have issues interpreting the next steps on a CHAMPVA application when one beneficiary has been approved, and the other is missing documentation"
  - "Veteran participants will on average have more familiarity with VA.gov and benefits terminology. They might expect to track CHAMPVA application status within the existing Claims Status Tool"
  - "Spouse and dependent participants might already have their own VA.gov accounts or log into Veterans accounts to help them manage their benefits. They might be confused by Veteran-facing language on the homepage of the status tool"

expected_outcomes: "This research will help us identify usability and content issues with the CHAMPVA Application Status prototype. We will use these insights to refine the design and content of these screens before they are built. We will also be testing a new h1 for the Claims Status Tool, as well as new headings for the Claims and appeals and Forms and applications sections of MyVA. In addition, this study is part of the Design and Forms Systems Team's exploration of AI prototyping tools."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "All participants must be on a computer or mobile device"
    - "All participants must be willing to share a web browser window on their device during the session"
    - "All participants must have a working microphone"
    - "All participants must have Zoom downloaded to their device prior to the session and know how to share their screen"
    - "Cohort 1 must be a Veteran with a service-connected disability rating of 100%"
    - "Cohort 1: No more than 3 should have a spouse and/or dependent children who are currently enrolled in the CHAMPVA program"
    - "Cohort 2 must identify as a spouse or dependent child of a Veteran with a service-connected disability rating of 100%"
    - "Cohort 2: No more than 3 should be currently enrolled in CHAMPVA"
    
  secondary_criteria:
    - "Cohort 1: At least 2 are 55-64+"
    - "Cohort 1: At least 2 who self-report a cognitive disability"
    - "Cohort 1: At least 2 women"
    - "Cohort 1: At least 2 people who identify as Black or African American or Hispanic, Latino or Spanish origin, or Asian or Biracial"
    - "Cohort 1: At least 2 who are using a mobile device"
    - "Cohort 1: At least 2 don't have any degree or vocational training after high school"
    - "Cohort 2: At least 2 are 55-64+"
    - "Cohort 2: At least 2 who self-report a cognitive disability"
    - "Cohort 2: At least 2 women"
    - "Cohort 2: At least 2 people who identify as Black or African American or Hispanic, Latino or Spanish origin, or Asian or Biracial"
    - "Cohort 2: At least 2 who are using a mobile device"
    - "Cohort 2: At least 2 don't have any degree or vocational training after high school"
    
  screener_questions:
    - question: "Do you get VA disability compensation for a service-connected disability rating of 100%?"
      qualifying_response: "Yes (for Cohort 1)"
    - question: "Do you have a spouse or dependent children?"
      qualifying_response: "Yes (for Cohort 1)"
    - question: "Is your spouse and/or dependents enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?"
      qualifying_response: "Yes (no more than 3 per cohort), No, or Unsure"
    - question: "What is your age?"
      qualifying_response: "18 or older (for Cohort 2)"
    - question: "Do you identify as one of the following: Spouse of a Veteran, Dependent child of a Veteran?"
      qualifying_response: "Either option qualifies (for Cohort 2)"
    - question: "Does the Veteran you are related to get VA disability compensation for a service-connected disability rating of 100%?"
      qualifying_response: "Yes (for Cohort 2)"
    - question: "Are you enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?"
      qualifying_response: "Yes (no more than 3 per cohort), No, or Unsure (for Cohort 2)"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 12
  total_recruited: 24
  completed_sessions_goal: 16
  
# Timeline & Sessions
timeline:
  pilot_date: "2026-04-01"
  pilot_participant: "Steven Straily"
  research_dates: "2026-04-14 to 2026-05-04"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Optimize software delivery for Veteran impact"
    key_results: 
      - "Key Result 1.1: All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov"
      - "Key Result 1.2: Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs"
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Key Result 3.1: Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more"
      - "Key Result 3.2: 100% of end-user facing C100 systems maintain a ranked list of user pain points"
      - "Key Result 3.3: 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva/1010D/research/users]
    
tags:
  - CHAMPVA
  - vfmp-status
  - form-status
  - usability-testing
  - health-care
  - authenticated
  - research-plan
  - AUD: Veterans
  - AUD: Dependents
  - AUD: Family Member
  - AUD: Surviving Family
  - BNFT: Healthcare
  - BNFT: Disability
  - PRDT: CHAMPVA
  - PRDT: Claim-status-tool
  - PRDT: MyVA
  - DSP: Ask users for files
  - DSP: Content Presentation
  - DSP: Notifications
  - HDW: Desktop
  - HDW: Smartphone
---

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your research plan below.** 
> 
> Use the [GitHub Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed research plan.  The prompt uses natural language processing to extract key information and apply appropriate research repository tags. 

# Research Plan for VFMP Status Integration, Health Apps in Claims Status Tool, CHAMPVA Application Status MVP 02/2026

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**Veterans and their family members applying for CHAMPVA benefits currently lack digital infrastructure to view their application status, relying heavily on paper mail and manual processes. This results in delays, backlogs, and a high volume of status  inquiries. Approximately 80% of calls to the CHAMPVA helpdesk are status inquiries, leading to significant wait times up to 2 hours.** 

**We will integrate CHAMPVA applications into the existing Claim and Appeal Status Tool (CST) to enhance transparency, reduce delays, and improve the overall user experience for veterans and their families. This solution aims to provide real-time access to application statuses, streamline documentation workflows by enabling applicants to upload missing documents online, and reduce call center volume.** 
  
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

`1.` **Identify any usability issues in the CHAMPVA Application Status user flows, which include finding application status and identifying and uploading missing documents (requested information).**

`2.` **Identify where participants expect their CHAMPVA Application status to live within the VA ecosystem, inclusive of MyVA and the status tool.**

`3.` **Identify any content comprehension challenges that might prevent participants from understanding their CHAMPVA Application Status and requested next steps, and how issues might differ between Veterans and beneficiaries.**
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**This research will help us identify usability and content issues with the CHAMPVA Application Status prototype. We will use these insights to refine the design and content of these screens before they go into production as an extension of the Claims Status Tool. Ultimately, this will enable Veterans and beneficiaries to clearly understand their CHAMPVA Application status, know when and how to upload missing documents, and reduce long call center wait times.** 

**We will also be testing a new h1 for the Claims Status Tool, as well as new headings for the "Claims and appeals" and "Forms and applications" sections of MyVA - since they will have to change once CHAMPVA applications are integrated into the Claims Status Tool. We developed these headings in collaboration with the CST and MyVA teams, and will report back to them with our findings. Participant feedback on these new headings will inform future research.**

**In addition, this study is part of the Design and Forms Systems Team's exploration of AI prototyping tools. See [github ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5813). The prototypes for this study were built using Figma Make.**

---

### Research questions

**`1.` In what section of MyVA do participants expect to find their CHAMPVA application? Are they able to navigate to the status tool without assistance?** 

**`2.` How do participants interpret the inclusion of CHAMPVA applications within the status tool? What do they expect to be included in the status tool based on the front page?**

**`3.` How do participants understand the application status for each of their beneficiaries based on the information presented in the status tool? Are there differences between how Veteran and beneficiary participants understand the application status?**

**`4.` How do participants interpret the steps presented in the status tool? What mental model do participants have of how CHAMPVA applications are processed before using the status tool? What is their mental model after reading the steps?**

**`5.` When participants receive an information request, are they able to easily understand how to upload the requested documents and why they're being asked for those documents?**

**`6.` When one beneficiary on an application is deemed eligible, and the other has a pending information request, how do participants understand what next steps to take? Does it make sense that the application status still says Step 2, even though one of the applicants has already received an eligibility determination?**

**`7.` What are opportunities to improve the experience of participants using the status tool for their CHAMPVA application?**

### Hypotheses
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

Our hypothesis is that participants will be able to navigate through the prototype relatively easily. Based on prior research, we expect that they will react positively to seeing the status of their application and being able to upload requested documents online. 

Participants may also have issues with the following, since they are unique to CHAMPVA applications: 

- Identifying what section of MyVA to find CHAMPVA Applications in, since they are the only healthcare application listed alongside claims and appeals
- Interpreting the steps a CHAMPVA application will go through to be processed
- Interpreting the next steps on a CHAMPVA application when one beneficiary has been approved, and the other is missing documentation

Based on prior research with these user groups, we also expect that: 
- **Veteran participants** will on average have more familiarity with VA.gov and benefits terminology. They might expect to track CHAMPVA application status within the existing Claims Status Tool.
- **Spouse and dependent participants** might already have their own VA.gov accounts or log into Veterans accounts to help them manage their benefits. So, it’s likely that some spouse or dependent participants may be familiar with VA.gov and benefits terminology.
	- They might be confused by Veteran-facing language on the homepage of the status tool like “Your claim letters” and “Your travel claims”. However, the CHAMPVA application status pages are designed to be read by either a Veteran or their spouse/dependents, and they should be able to understand who the application status and any information requests apply to 
  
---
   
## Methodology  🛠️
This will be a usability study conducted remotely via Zoom.  
 
The moderator will ask the participant some introductory questions about their previous experience applying for benefits and using VA.gov, as well as their awareness of the CHAMPVA program. Then, participants will be asked to complete the following tasks on a Figma prototype: 
- The user has recently applied for CHAMPVA benefits and wants to check the status of their application.
- The user logs in again and has to upload the requested missing information for their CHAMPVA application.
- The user logs in again once their CHAMPVA application has been closed and wants to understand the eligibility of each person on the application.   
 
Participants will be encouraged to talk through their exploration of each flow.  

### Location
Remote research, over Zoom.

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/vfmp-status-integration/research/2026-02-CHAMPVA-App-Status-MVP/conversation-guide.md)
- [Link to Veteran prototype](https://chisel-pear-20681620.figma.site/scenario1)
- [Link to non-veteran prototype](https://chisel-pear-20681620.figma.site/scenario1-nonveteran)
	
## Recruitment 🎯	

### Recruitment approach

We would like Perigean to recruit Veterans with high disability ratings and their dependent spouses and children. We will split this study into two cohorts: 

We will split this study into two cohorts:
- **Cohort 1 (8 completed)**: Veterans with a 100% service-connected disability rating with spouse and/or dependent children.
- **Cohort 2 (8 completed)**: Spouses and dependent children of Veterans with a 100% service connected disabilty rating.

Only 3 participants per cohort should be currently enrolled in the CHAMPVA program. Prior knowledge or previous tool exposure will affect their understanding of the new content in the prototype, but might also provide useful insights. 

### Recruitment criteria

- `Veterans:` **[12]**
- `Spouses and dependents:` **[12]**
- `Total:` **[24]**
- `Ideal completed sessions:` **[16, total 8 each cohort]**

### Primary criteria (must-haves)

**All participants must:**
- Be on a computer or mobile device
- During the session, be willing to share a web browser window on their device
- Have a working microphone
- Have Zoom downloaded to their device prior to the session and know how to share their screen

**Cohort 1 must:**
- Be a Veteran with a service-connected disability rating of 100%
- No more than 3 should have a spouse and/or dependent children who are currently enrolled in the CHAMPVA program 

**Screener Cohort 1 (Veterans with 100% service-connected disability whose spouse/dependents may or may not be enrolled in CHAMPVA benefits):**
1. Do you get VA disability compensation for a service-connected disability rating of 100%?
_Response options: YES or NO_
	* Yes [jump to next question]
	* No [disqualify]

2. Do you have a spouse or dependent children?
_Response options: YES or NO_
	* Yes [jump to next question]
	* No [disqualify]

3. Is your spouse and/or dependents enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
	* Yes (No more than 3 participants in this cohort, RECORD as enrolled in CHAMPVA)
	* No (Qualifies for study, RECORD as not enrolled in CHAMPVA)
	* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

**Cohort 2 must:**
- Identify as a spouse or dependent child of a Veteran with a service-connected disability rating of 100%
- No more than 3 should be currently enrolled in CHAMPVA

**Screener Cohort 2 (Spouses and dependent children age 18+ of Veterans with a 100% service-connected disability):**
1. What is your age? _Response options: Whatever age categories Perigean normally uses. (Answering <18 would disqualify the participant)_

2. Do you identify as one of the following? 
_Response options: Spouse of a Veteran, Dependent child of a Veteran (Answering either would qualify the participant)_

3. Does the Veteran you are related to get VA disability compensation for a service-connected disability rating of 100%?
_Response options: YES, NO_
	* Yes [jump to next question]
	* No [disqualify]

5. Are you enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
	* Yes (No more than 3 participants in this cohort, RECORD as enrolled in CHAMPVA)
	* No (Qualifies for study, RECORD as not enrolled in CHAMPVA)
	* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)


#### Secondary criteria (nice-to-haves)

Cohort 1 (recruit 12 people): 
- `At least 2 are 55-64+`
- `At least 2 who self-report a cognitive disabiltiy`
- `At least 2 women`
- `At least 2 people who identify as Black or African American or Hispanic, Latino or Spanish origin, or Asian or Biracial`
- `At least 2 who are using a mobile device`
- `At least 2 don't have any degree or vocational training after high school`
  
Cohort 2 (recruit 12 people): 
- `At least 2 are 55-64+`
- `At least 2 who self-report a cognitive disabiltiy`
- `At least 2 women`
- `At least 2 people who identify as Black or African American or Hispanic, Latino or Spanish origin, or Asian or Biracial`
- `At least 2 who are using a mobile device`
- `At least 2 don't have any degree or vocational training after high school`
  
## Timeline 🗓️

### Optional Kick-off Call with Perigean
We would like a kick-off call with Perigean to discuss recruitment criteria. Suggested dates and times, all in EST: 
> - Wednesday 4/1: 12-1pm
> - Thursday 4/2: 1:30-3pm
> - Friday 4/3: 2-4:30pm

### Prepare
**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` Steven Straily
- `Date and time of pilot session:` Wednesday 4/1 2:30-3:30pm ET

### Research sessions
- `Planned dates of research:`
	- **Cohort 1: Tuesday, April 14 - Monday, April 20**
	- **Cohort 2: Tuesday, April 28 - Monday, May 4**


### Length of sessions
- `Session length:` 60 minutes
  
- `Buffer time between sessions:` 30 minutes
  
- `Maximum Sessions per day:` 3 per day

### Availability

_All times are in EST_

Cohort 1
> - Tuesday 4/14: 11:30-1pm, 3-4:30pm
> - Wednesday 4/15: 11:30-2pm, 2:30-3:30pm
> - Thursday 4/16: 1-2pm, 3-4:30pm
> - Friday 4/17: 11:30-4:30pm
> - Monday 4/20: 11:30-2pm, 2-3pm, 3:30-4:30pm
> - IF NEEDED Tuesday 4/21: 11:30-1pm, 3-4:30pm

Cohort 2
> - Tuesday 4/28: 11:30-1pm, 3-4:30pm
> - Wednesday 4/29: 11:30-2pm, 2:30-3:30pm
> - Thursday 4/30: 1-4:30pm
> - Friday 5/1: 11:30-4:30pm
> - Monday 5/4: 11:30-2pm, 2-3pm, 3:30-4:30pm
> - IF NEEDED Tuesday 5/5: 11:30-1PM, 3-4:30pm 

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
- `Reviewed by John Riggin on [03-30-2026]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
