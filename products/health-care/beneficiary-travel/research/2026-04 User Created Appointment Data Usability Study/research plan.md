---
# Research Plan Metadata
title: "Research Plan for Travel Pay Team, User Created Appointment Data, March/April 2026"
date: 2026-03-18
last_updated: 2026-03-18
team: "Travel Pay"
product: "Travel Pay Reimbursement"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Some medical appointments (community care and unscheduled VA appointments like walk-ins or emergency visits) do not appear in a Veteran's past appointment list. Veterans cannot file for travel pay on VA.gov for these appointments and must use the legacy BTSSS system to manually enter appointment information. This creates a fragmented user experience and prevents VA.gov from being a complete travel reimbursement solution."
  product_location: "Authenticated VA.gov experience - Health care benefits section, specifically within the Travel Pay claim filing flow"
  user_familiarity: "Iteration on existing product. Veterans are already familiar with filing travel pay claims on VA.gov (complex claims launched February 2026), but this adds new functionality to manually create missing appointments."
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/product"

# Research Design
methodology: "Moderated usability testing with comparative analysis"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine the optimal entry point for user-generated appointment data functionality"
  - goal_2: "Validate that Veterans can successfully enter appointment data and claim information to file travel claims"
  - goal_3: "Evaluate how Veterans perceive user-generated appointment data in relation to system generated appointments"

research_questions:
  - "Where do Veterans expect to start when filing a travel claim for an appointment that doesn't appear in their list?"
  - "How do Veterans perceive and distinguish user-generated appointments from system-generated appointments?"
  - "How do Veterans remember or keep track of the information they need to enter for missing appointments?"
  - "Do Veterans understand that once they enter appointment data, they cannot edit it?"
  - "Do Veterans expect VA to tell them if they enter data about an appointment that already exists?"
  - "Can Veterans successfully create an appointment and file a travel claim using user-entered data?"
  - "Do Veterans expect their appointment to be displayed in their list of appointments?"

hypotheses:
  - "Veterans will not have a strong preference for where they begin filing a travel claim for a missing appointment, as they may view both past appointments and claims as valid entry points. However, the past appointments page may feel slightly more intuitive given the existing pattern of filing from past appointments on VA.gov."
  - "Veterans will be able to successfully enter the required appointment information and create a claim, but may be confused by the user-generated appointment not appearing in the past appointments list."
  - "Veterans will expect VA to prevent them from creating duplicates, which could indicate a moderate risk of increased appointment and claim duplication."

expected_outcomes: "This research will directly inform design and development decisions for releasing user-generated appointment functionality on VA.gov. Findings will determine where to place the entry point for user-generated appointment data, identify issues in the appointment data creation flow, refine designs based on user feedback, and validate related community care work."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Stratified purposive sampling to ensure representation across appointment types and travel pay filing experience"
  
  primary_criteria:
    - "All participants must be Veterans who use VA health care"
    - "Veterans who have only attended VA appointment(s) at VA facilities: 4-6 participants total (2-3 who have filed for travel pay, 2-3 who have not)"
    - "Veterans who have only attended community care appointment(s): 4-6 participants total (2-3 who have filed for travel pay, 2-3 who have not)"
    - "Veterans who have attended both VA appointments and community care appointment(s): 4-6 participants total (2-3 who have filed for travel pay for both types, 2-3 who have not filed for either type)"
    - "All participants must have attended at least one VA or community care appointment in the past 12 months"
    
  secondary_criteria:
    - "Not specified in plan"
    
  screener_questions:
    - question: "Do you use VA healthcare (including community care)?"
      qualifying_response: "Yes"
    - question: "In the past 12 months, have you attended any of the following types of appointments? [single select] (1) VA appointments at VA facility, (2) Community care appointments, (3) Both VA appointments and community care appointments, (4) Neither"
      qualifying_response: "Options 1, 2, or 3 qualify. Option 4 disqualifies."
    - question: "In the past 12 months, have you filed for travel reimbursement for any VA or community care appointments? [single select] (1) I have filed for travel reimbursement for VA appointments at a VA facility, (2) I have filed for travel reimbursement for community care appointments, (3) I have filed for travel pay for both VA facility and community care appointments, (4) I have not filed for travel reimbursement for VA or community care appointments"
      qualifying_response: "All options qualify"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 15
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "TBD"
  research_review_submission: "TBD - should be 8-9 days prior to first research session"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: "TBD"
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Optimize software delivery for Veteran impact"
    key_results:
      - "Key Result 1.3: Supports the decommissioning of a legacy system by enabling Veterans to complete travel pay tasks on VA.gov that currently require BTSSS"
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Key Result 3.1: Supports the Health portfolio in improving customer satisfaction by removing barriers to filing travel reimbursement claims"
      - "Key Result 3.2: Supports maintaining the ranked list of user pain points by investigating Veterans' inability to file claims for appointments not appearing in their list"
      - "Key Result 3.3: Supports the delivery of at least one release that directly addresses this documented user pain point"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies:
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2024-04-Reimbursement-Status-Look-and-Feel-Study/ResearchFindings.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2024-06-Travel-Claim-Status-Language-Generative-Study/ResearchFindings.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/08-2025--Travel%20Complex%20Claims%20Concept%20Study/09-2025%20Travel%20Pay%20Complex%20Claims%20Concept%20Study%20Research%20Findings.md"
    
tags:
  - AUD: Veterans
  - BNFT: Healthcare
  - PRDT: Travel-pay
  - MHV: Appointments
  - DSP: Ask users for dates
  - DSP: Content Presentation
  - DSP: Help users to check answers
  - DSC: Form
  - usability-testing
  - comparative-analysis
  - remote
  - authenticated-experience
  - travel-reimbursement
  - community-care
  - appointment-data-entry
  - legacy-system-migration
---


# Research Plan for Travel Pay User Created Appointment Data Usability Study - March/April 2026

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

Some medical appointments, such as community care and other unscheduled VA appointments like walk-ins or emergency visits, do not appear in a Veteran’s past appointment list. This means that Veterans cannot file for travel pay on VA.gov and are instead required to go to the legacy Beneficiary Travel Self-Service System (BTSSS) to enter their appointment info in order to input a user-created appointment as a starting point for their travel claim. 

We need to enable Veterans to file travel reimbursement claims on VA.gov for appointments that don’t appear in their appointments list, consolidating more travel pay functionality on VA.gov and reducing reliance on BTSSS. Our goal is to create a complete, self-contained travel reimbursement claim experience on VA.gov.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Authenticated
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

This is an iteration and enhancement of existing VA.gov travel pay functionality. In February 2026, the Travel Pay team launched complex claims on VA.gov, allowing Veterans to upload receipts for all travel claim expenses. However, additional travel reimbursement claim features still exist in the legacy BTSSS portal, including the ability to manually create appointments that don’t appear in the past appointments list. Veterans who currently file for travel pay on VA.gov are familiar with complex claims on VA.gov and also may be familiar with this process in the BTSSS portal.

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/product).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

**Previous Studies:**
- [Reimbursement Status Look and Feel Study-2024-04](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2024-04-Reimbursement-Status-Look-and-Feel-Study/ResearchFindings.md)
- [Travel Claim Status Language Generative Study-2024-06](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2024-06-Travel-Claim-Status-Language-Generative-Study/ResearchFindings.md)
- [Travel Complex Claims Concept Study-08-2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/08-2025--Travel%20Complex%20Claims%20Concept%20Study/09-2025%20Travel%20Pay%20Complex%20Claims%20Concept%20Study%20Research%20Findings.md)

**Key Takeaways from Previous Research:**
- `Reimbursement Status Takeaway: Navigation Patterns: 6 of 9 participants "satisfice" - taking the first available option from Top Pages rather than thinking deeply about navigation`
- `Status Language Takeaway: Participants struggled to connect individual claim statuses within the larger process - they wanted proactive notifications about critical phases.`
- `Concept Study Takeaway: Participants had clear preferences for continued communication and visibility about their claim post-submission.`

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? </summary>

`Objective 1:  Optimize software delivery for Veteran impact.`  

> - **Key Result 1.3:** Supports the decommissioning of a legacy system by enabling Veterans to complete travel pay tasks on VA.gov that currently require BTSSS, advancing efforts to reduce reliance on and eventually decommission the legacy BTSSS system.
  - ***Research Ops Plain Language:** Veterans can do more travel pay tasks on VA.gov instead of having to use the old BTSSS system. This helps VA retire BTSSS.*

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Supports the Health portfolio in improving customer satisfaction by removing barriers to filing travel reimbursement claims and creating a more complete travel reimbursement claim experience on VA.gov.   
> - **Key Result 3.2:** Supports maintaining the ranked list of user pain points by investigating a documented pain point, i.e. Veterans' inability to file claims for appointments not appearing in their list on VA.gov.    
> - **Key Result 3.3:** Supports the delivery of at least one release that directly addresses this documented user pain point by enabling Veterans to create missing appointments and file associated travel claims entirely within VA.gov.   
  - ***Research Ops Plain Language:** Letting Veterans create missing appointments so they can file travel claims for them fixes a pain point and makes filing easier.*

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Starting Up`
- `Taking Care of Myself`
- `Putting Down Roots`
- `Retiring`
- `Aging`
  
</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **Determine the optimal entry point for user-generated appointment data functionality.**

`2.` **Validate that Veterans can successfully enter appointment data and claim information to file travel claims.**

`3.` **Evaluate how Veterans perceive user-generated appointment data in relation to system generated appointments.** 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

This research will directly inform our design and development decisions for releasing user-generated appointment functionality on VA.gov. As travel pay continues to migrate from BTSSS to VA.gov, we must determine the best way to implement this capability to ensure Veterans have a complete, intuitive travel reimbursement experience.

We will use the findings to:
Determine where to place the entry point for user-generated appointment data
Identify issues in the appointment data creation flow and refine designs based on user feedback
Validate related community care work, which is a primary use case for this new functionality.

---

### Research questions

**`1.`Where do Veterans expect to start when filing a travel claim for an appointment that doesn't appear in their list?**    

**`2.`How do Veterans perceive and distinguish user-generated appointments from system-generated appointments?**   

**`3.`How do Veterans remember or keep track of the information they need to enter for missing appointments?**   

**`4.`Do Veterans understand that once they enter appointment data, they cannot edit it?**   

**`5.`Do Veterans expect VA to tell them if they enter data about an appointment that already exists?**   

**`6.`Can Veterans successfully create an appointment and file a travel claim using user-entered data?**   

**`7.`Do Veterans expect their appointment to be displayed in their list of appointments?**   


### Hypotheses
	
`What do you intend to learn and measure from this study?` 
* We will measure entry-point preference, by comparing the number of people who choose to create their appointment on the past appointment list to those who prefer to create their appointment from the travel claims list.
* We will measure task completion, by the number of people who are able to successfully complete the flow to create an appointment and then file the corresponding claim.
* _WORKING NOTE: Possibly add portion about learning about perceptions_   

`What do you already know about this problem space?`
* Veterans are more familiar with creating claims from their past appointment list, as that is the current pattern.   
* Veterans will have preconceived ideas about how the process should function, depending on their familiarity with BTSSS, the VA Health and Benefits app (VAHB), and simple mileage only claims (SMOC).    
 
`What do you think users will do or think about this product?`   
* We assume that Veterans will be able to successfully create claims from either entry point and will not have a definitive preference, although they may find creating claims from the past appointment list is more familiar. We also expect that when starting from the past appointments list, they will expect the appointment to be added to this list.   
* We think that while Veterans may be slightly confused by their user generated appointments not appearing in the past appointments list, they will be able to easily identify the claims associated with those appointments in their claims list. However, we recognize there is a risk of duplicate claims due to the separate views.
* _WORKING NOTE: Do we think users will be able to navigate back to their claim? Should we add something about that in this study?_

---
**Hypothesis**   

We hypothesize that Veterans will not have a strong preference for where they begin filing a travel claim for a missing appointment, as they may view both past appointments and claims as valid entry points. However, we believe the past appointments page may feel slightly more intuitive given the existing pattern of filing from past appointments on VA.gov.   

We anticipate that Veterans will be able to successfully enter the required appointment information and then create a claim, but may be confused by the user-generated appointment not appearing in the past appointments list. We also predict that users will expect VA to prevent them from creating duplicates, which could indicate a moderate risk of increased appointment and claim duplication.   

---
  
## Methodology  🛠️   
<details>
We will conduct **moderated usability testing sessions with 10-12 Veterans using a clickable Figma prototype.** This study will be a hybrid study. The first part will evaluate participants’ mental models around where they expect to create an appointment, then we’ll move into a usability test of the user-created appointment data screens. Finally, we will show the participants the alternate entry-point option and ask questions for a comparative analysis.

### Structure      

**Warm-up (5 minutes)**
We will begin each session with introductory questions to understand participants’ familiarity with travel reimbursement, their experience filing claims on VA.gov, BTSSS, or in VAHB.

**Entry-point navigation (5-10 minutes)**
We will provide a brief scenario, then ask participants to navigate from VA.gov’s homepage using our prototype to find where they would file a claim for an appointment that doesn’t appear in their past appointments list. The entry point locations are past appointments and the travel claims list page.

**Primary usability testing (25-30 minutes)**
Once the participant has reached an entry point, we will observe them as they complete the full flow: creating an appointment using the required fields, adding proof of attendance, and a mileage expense, and then submitting the claim. 

**Alternate entry-point evaluation (5-8 minutes)**
After completing the flow from the self-selected entry point, we’ll guide participants to the alternative entry point. We’ll ask them to evaluate whether this path feels natural and whether it conflicts with their mental model of where travel claims functionality lives on the site.

**4a. Comparative entry point assessment (5-8 minutes**
Time permitting, we will also show participants the static mock ups of both entry points side-by-side and ask what works well or doesn’t work well for each page. This will help us distinguish between preferences for navigation path versus preferences for the content, call to action placement, and messaging on each page itself.

**Wrap up (3 minutes)**
We’ll wrap up with some closing questions and allow the participants time to express any final thoughts.

</details>

### Location

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

## Recruitment 🎯	
We will work with Perigean to recruit participants for this study.   

### Recruitment approach

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **15**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **15**
- `Ideal completed sessions:` **15**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `Veterans who use VA health care`   
- `Veterans who have only attended VA appointment(s)   
  * Those who have filed for travel pay: 2-3 participants   
  * Those who have not filed for travel pay: 2-3 participants   
  * Veterans who have only attended community care appointment(s)   
  * Those who have filed for travel pay: 2-3 participants   
  * Those who have not filed for travel pay: 2-3 participants   
  * Veterans who have attended both VA appointments or community care appointment(s)   
  * Those who have filed for travel pay for both VA or community care appointments: 2-3 participants   
  * Those who have not filed for travel pay for VA or community care appointments: 2-3 participants`   

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 


## Screener Questions 📋

### Screener Question Template

**`[Number].` [Screener Question Text]**
- **Qualifying response:** `[The answer that qualifies the participant]`
- **Disqualifying response:** `[Optional: The answer that disqualifies]`

### Your Study's Screener Questions

**`1.` Do you use VA healthcare (including community care)?**
- _Qualifying response: Yes._   
- _Disqualitfying response: If no, participant is ineligible for this study._   

**`2.` In the past 12 months, have you attended any of the following types of appointments? [single select/radio button field]**  

- VA appointments at VA facility (VA hospital, VA clinic, or other facility)
- Community care appointments (appointments at non-VA facilities that VA referred you to for care)
- Both VA appointments and community care appointments
- Neither

- _Qualifying responses: VA appointments/community care appointments/Both (first 3 options)_
- _Disqualifying responses: “Neither” (4th option)_


**`3.` In the past 12 months, have you filed for travel reimbursement for any VA or community care appointments? [single select/radio button field]**
- I have filed for travel reimbursement for VA appointments at a VA facility
- I have filed for travel reimbursement for community care appointments
- I have filed for travel pay for both VA facility and community care appointments
- I have not filed for travel reimbursement for VA or community care appointments

- _Qualifying responses: All_

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **[Enter time length]**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **[Enter buffer time]**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **[Enter NUM per day]**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `Add more slots as needed`
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Kristen Faiferlick and Liza McRuer**	
- `Research guide writing and task development (usually but not always same as moderator):` **Kristen Faiferlick and Liza McRuer**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Kristen Faiferlick and Liza McRuer**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Enter full name]**	
- `Note-takers:` **Kristen Faiferlick and Liza McRuer**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

## Approvals ✅
