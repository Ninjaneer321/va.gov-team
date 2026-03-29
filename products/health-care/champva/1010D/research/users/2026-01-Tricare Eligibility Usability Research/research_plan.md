---
# Research Plan Metadata
title: "Research Plan for 10-10d CHAMPVA Tricare Eligibility Usability Study, January 2026"
date: 2026-01-15
last_updated: 2025-12-08
team: "Health Applications Team"
product: "CHAMPVA Form 10-10d"
product_area: "authenticated, unauthenticated"

# Background Context
background:
  problem_statement: "Need to test eligibility questions and error messages for CHAMPVA 10-10d, comparing VADS pattern vs hybrid approach with API integration to determine best usability for Veterans and family members."
  product_location: "Form 10-10d on VA.gov, CHAMPVA benefits application"
  user_familiarity: "Iteration - testing new eligibility patterns for Tricare questions"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/product-outline.md"

# Research Design
methodology: "semi-structured interviews with usability testing using mid-fidelity prototype"
research_format: 
  location: remote 
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true 
  
# Research Goals & Questions
research_goals:
  - goal_1: "Learn where there are content comprehension issues within the eligibility questions and error messages options tested"
  - goal_2: "Discovery around two flows - one using new VADS pattern and another with VADS pattern and API hybrid approach - to determine usability and user preference"
  - goal_3: "Learn if there are any usability issues with the new VADS eligibility pattern and/or hybrid option"

research_questions:
  - "Do participants find the introduction page eligibility content clear and easy to understand?"
  - "Do participants find the eligibility questions in the VADS pattern flow confusing or unclear?"
  - "Do participants understand the content in the error messages and what action to take?"
  - "Is the flow of VADS eligibility pattern easy for Veterans and family members?"
  - "What flow do participants find easier via self-reported ratings?"
  - "Do participants clearly understand the eligibility gray results box with icons?"
  - "Do the error alerts in the hybrid option add confusion?"

hypotheses:
  - "Both Veterans and family members will find the hybrid option easiest to understand without issues with alert messages"
  - "The VADS pattern will add clarity to CHAMPVA benefits eligibility and be received positively"
  - "Content comprehension will be higher with the hybrid approach"

expected_outcomes: "Determine which eligibility pattern approach to implement for CHAMPVA 10-10d based on usability testing"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "targeted recruitment for Veterans and family members"
  
  primary_criteria:
    - "Veterans and family members interested in or familiar with CHAMPVA"
    - "Mix of those with and without Tricare experience"
    - "Both authenticated and unauthenticated users"
    
  secondary_criteria:
    - "Diverse age range"
    - "Various education levels"
    
  screener_questions:
    - question: "Are you or a family member interested in CHAMPVA benefits?"
      qualifying_response: "Yes"
      
participants:
  veterans: 6
  caregivers: 0
  dependents: 4
  total_recruited: 12
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2026-01-20"
  pilot_participant: "TBD"
  research_dates: "2026-01-27 to 2026-02-07"
  research_review_submission: "2026-01-13"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Our digital experiences are the best way to access VA health care and benefits"
    key_results: []
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
  - "[The changes in the flow and the signer information section will be easy for Veterans and family mbmers to follow with less confusion than previous studies.]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"

  
  primary_criteria:
    - "[All: Be on a computer or mobile device]"
    - "[All: During the session, be willing to share a web browser window on their device]"
    - "[All: Have a working microphone]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener Cohort 1: Do you get a VA disability compensation for a service-connected disability rating of 100%?]"
      qualifying_response: "[Yes]"
    - question: "[Screener Cohort 1: Do you have a spouse or dependent children?]"
      qualifying_response: "[Yes]"
    - question: "[Screener Cohort 1: Is your spouse and/or dependents enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs?]"
      qualifying_response: "[No, Unsure]"
    - question: "[Screener Cohort 2: Please select the answer that best fits you: Response options: Spouse of a Veteran, Dependent child of a Veteran]"
      qualifying_response: "[Spouse of a Veteran, Dependent child of a Veteran]"
    - question: "[Screener Cohort 2: Does the Veteran you are related to get a VA disability compensation for a service-connected disability rating of 100%?]"
      qualifying_response: "[Yes]"
    - question: "[Screener Cohort 2: Are you enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?]"
      qualifying_response: "[No, Unsure]"
      
participants:
  veterans: 8
  caregivers: 0
  dependents: 8
  total_recruited: 16
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "2026-02-09 to 2026-02-20"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 45
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[Getting Out]"
  - "[Starting Up]"
  - "[Putting Down Roots]"
  - "[Taking care of self]"
  - "[Retiring]"
  - "[Aging]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[OHI Merge Usability](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability)"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

	 # Research Plan for Tricare Eligibility Usability Research (10-10D Champva), Jan 2026


## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

Explore two options around to better understand how Veterans and family members understand the eligibility content, flow and alerts related to Tricared due to a percentage of applicants that are later denied because they are eligible for Tricare, which makes them ineligible for CHAMPVA.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Can be access both authenticated and unauthenticated. Signer can be a Veteran, applicant/beneficiary or represenative.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

We are recruiting participants who are not currently enrolled in CHAMPVA and shouldn't have too much familiarity with the online application, VA Form 10-10d.

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10D-OHI-Merge-Product-Outline%20v2.md).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

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
- `Taking Care of Myself`
- `Putting Down Roots`
- `Retiring`
- `Aging`

</details>

## Research Goals 🥅	


### Goals

`1. Learn where there are content comprehension issues within the eligibility questions and error messages options tested.`

`2. Discovery around two flows - one using a new VADS pattern and the other with a VADS pattern and API hybrid approach - to determine usability and user preference for both.`

`3. Learn if there are any usability issues with the new VADS eligibility pattern and/or hybrid option.`


  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**Determine which approach (VADS pattern vs. hybrid/API) best reduces confusion, and potentially inform future wider adoption within VA.gov, including contributions to the VADS design system.** 


---

### Research questions

`Goal 1: Learn where there are content comprehension issues within the eligibility questions and error messages options tested.`

**`1.`[Do participants find the introduction page eligibility content clear and easy to understand?]**

**`2.`[Do participants find the eligibilty questions asked in the VADS pattern flow confusing, unclear or state they need additional information?]**

**`3.`[Do participants understand the content in the error messages clear enough to state what specific action, if any, they would need to take when applying for benefits?]**



`Goal 2: Discovery around two flows - one using a new VADS pattern and the other with a VADS pattern and API hybrid approach - to determine usabilty and user preference for both.`

**`1.`[Is the flow of prototype Blueberry and the VADS eligibility pattern easy for participants - both Veterans and family members?]**

**`2.`[What flow do participants seem to find easier via self-reported ratings and quotes?]**


`Goal 3: Learn if there are any usability issues with the new VADS eligibility pattern and/or hybird option.`

**`1.`[Do participants clearly understand the eligibility gray results box with the icons in the pattern?]**

**`2.`[Do the error alerts in the hybrid option add any confusion or do participants state incorrect actions needed?]**



### Hypotheses

---

**We assume that both Veterans and their family members will find the hybrid API-driven approach to provide more immediate, personalized feedback than the VADS pattern approach, but both may have different strengths.** 

**We assume that the VADS pattern will add clarity to the eligibility of CHAMPVA benefits and will be recieved positively by both Veterans and their family members.**

**We assume that participants may find both approaches similarly confusing/helpful, suggesting content improvements are more important than flow differences.**


---
  
## Methodology  🛠️


**[Semi-structured interviews/usabilty testing with mid-fidelty prototypes to explore two options of implementation and content options for alerts]**

<img width="5674" height="3316" alt="Prototype Flow(1)" src="https://github.com/user-attachments/assets/99585c3c-0ed1-43c8-8f1c-99409781f46d" />




### Location
- [x] **Remote**
- [ ] **In-person**
      

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide - BlueberryFirst](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/convo_guide_BlueberryFirst.md)

- [Link to conversation guide - PineappleFirst](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/convo_guide_PineappleFirst.md) 


- [Veteran flow, Mobile Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32316&p=f&t=IG3jW1bmGA0pmJ36-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10114%3A20511&show-proto-sidebar=1)
- [Veteran flow, Desktop Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32317&p=f&t=r8QA77r1hjXJfo1Z-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10298%3A44146&show-proto-sidebar=1) 
- [Applicant flow, Mobile Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32316&p=f&t=IG3jW1bmGA0pmJ36-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10123%3A13173&show-proto-sidebar=1)
- [Applicant flow, Desktop Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32317&p=f&t=r8QA77r1hjXJfo1Z-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10298%3A58551&show-proto-sidebar=1)

- [Figma with Mobile Prototype](https://www.figma.com/design/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA---10-10d--and-OHI-Certification--10-7559c--WIP?node-id=10068-32316&t=IG3jW1bmGA0pmJ36-1)
- [Figma with Desktop Prototype](https://www.figma.com/design/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA---10-10d--and-OHI-Certification--10-7559c--WIP?node-id=10298-58549&t=r8QA77r1hjXJfo1Z-1)




## Recruitment 🎯	

### Recruitment approach

We would like Perigean to recruit Veterans and family members (spouses and dependents)

Our intended audience for this study is Veterans with high disability ratings and their dependent spouses and children, are **not currently enrolled** in the CHAMPVA program. We don't want prior knowledge or previous tool exposures affect understanding of the new content in the prototypes.

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

We would like a kick-off call with Perigean to discuss recruitment criteria.

- `Suggested dates and times:` 

- **01/29, Thursday, 12:30pm-2:30pm ET**
- **01/30, Friday, 12:00pm-5:00pm ET**
- **02/02, Monday, 12:00pm-4:00pm ET**
- **02/03, Tuesday, 12:00pm-5:00pm ET**

### Prepare

- `Pilot participant name:` Heather R.
- `Date and time of pilot session:` 02/02, Monday 4:00pm ET

### Research sessions
- `Planned dates of research:` **[Feb 5, 2026 - Feb 23, 2026]**

### Length of sessions
- `Session length:` **[60 minutes]**
  
- `Buffer time between sessions:` **[45 minutes]**
  
- `Maximum Sessions per day:` **[3]**

### Availability

- `[02/05, Thursday, 11:00 AM- 06:00 PM] EST`
- `[02/06, Friday, 11:00 AM- 06:00 PM] EST`
- `[02/09, Monday, 11:00 AM- 06:00 PM] EST`
- `[02/10, Tuesday, 11:00 AM- 06:00 PM] EST`
- `[02/11, Wednesday, 11:00 AM- 06:00 PM] EST`
- `[02/12, Thursday, 11:00 AM- 06:00 PM] EST`
- `[02/13, Friday, 11:00 AM- 06:00 PM] EST`
- `[02/18, Wednesday, 11:00 AM- 06:00 PM] EST`
- `[02/19, Thursday, 11:00 AM- 06:00 PM] EST`
- `[02/20, Friday, 11:00 AM- 06:00 PM] EST`
- `[02/23, Monday, 11:00 AM- 06:00 PM] EST`

  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **[Health Apps UX Team - Renata K, Jessica S, Hieu V]**	
- `Research guide writing and task development (usually but not always same as moderator):` **[Hieu V, Jessica S]**		
- `Participant recruiting & screening:`	**[Perigean]**	
- `Project point of contact:` **[Hieu V]**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Not needed for this study, interview methodology with Figma prototype]**	
- `Note-takers:` **[Health Apps UX Team]** ***or*** **[Designate Perigean]**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

## Approvals ✅
- `Reviewed by [Amanda Klausmeier, UX Team Lead] on [01-27-2026]`
- `Reviewed by OCTO Research-Ops Lead on [01-28-2026]`
