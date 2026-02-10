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

    # Research Plan for Dependent Management Team, Continuous Discovery Pilot, August 2025

## Background 🏗️

<summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**This research effort is part of the three-month pilot to test lightweight, recurring conversations with Veterans, focused exclusively on the Dependents Management Tools (DMT) team. This pilot introduces a fast, low-friction interview format to inform in-flight work, improve decision quality, and strengthen trust. This research plan will be updated with new topics each week as the pilot progresses.**

**For the first session of Continuous Discovery, we want to understand more about how Veterans think about the broader landscape of dependents. The broad problem areas cover three of our products, which are: Dependency Verification, Add and/or Remove Dependents, and Request for Approval of School Attendance.**

**Currently, the VA overpays $250 million in dependent benefits each year. If a Veteran is overpaid a benefit, they are required to re-pay the overpayment back to the VA. One of the most common causes of overpayment is out-of-date dependents information. Many possible challenges can lead to a Veteran not updating their dependent information. This includes knowing when to update dependents, how dependent changes affect Veteran benefits and understanding how the VA's verification process works. We want to explore these broad problem spaces with Veterans across our multiple products so we can better understand how to create a cohesive dependent benefits ecosystem.**

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**The pilot will likely cover the full range of our products. Those products include:**

- **Dependency Verification, which begins on the "Your VA dependents" page; this page can only be accessed when the Veteran has signed into VA.gov.**
- **Add and/or Remove Dependents, which begins on the form's introduction page; the form can only be accessed when the Veteran has signed into VA.gov. Combined with Request for Approval of School Attendance.**
- **Request for Approval of School Attendance, which begins on the form's introduction page; the form can only be accessed when the Veteran has signed into VA.gov. Add and/or Remove Dependents.**

`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**Two of these products (Add and/or Remove Dependents and Request for Approval of School Attendance) exist already. One (Dependency Verification) will be launched soon.**

`Product Brief`

**[Link to initiative brief](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7BE3[…]0(Dependents%20Man.docx&action=default&mobileredirect=true)**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)

<summary>Which OCTO priorities does this research support?</summary>

**Updates from this research may include changes to frontend and backend functionality.**

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

`Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

> - **Key Result 2:** We have reduced the total error rates in our platforms by 50% compared to Q4 2024, towards a goal less than 1% per endpoint.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<summary>Where does your product fit into the Veteran journey? Are there moments that matter?</summary>
	
**Veterans could interact with our products at many points in their journey but it is especially relevant to the `Putting Down Roots`stage. Updating dependents involves a Veteran's family and their VA benefits and this stage contains the "Starting, growing, or maintaining my family" and the "Engaging VA to access benefits and services" moments that matter.**

## Research Goals 🥅

`What are you trying to learn from this research?`

### Goals for Cohort 1

_This study will have multiple cohorts since it's continuous research. Each cohort might map to different goals._

`1.` **How do Veterans understand what adding and removing dependents does to their benefits?**

`2.` **How do Veterans understand the dependent verification process?**

### Outcome

`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**The findings will be used to shape how the team approaches content, alerts and flows within our products. It may also affect how we think about how the three products fit together as a cohesive ecosystem.**

---

### Research questions for Cohort 1

_This study will have multiple cohorts since it's continuous research. Each cohort may have different research questions._

**_Consider bucketing research questions under research goals and think about:_**
`What will I do with what I learn from this question? Does this question serve the goals of my study?`

**Goal 1: How do Veterans understand what adding and removing dependents does to their benefits?**

Some key questions:

- What happens to your disability benefits when you remove a dependent from your benefits?
- What happens to your disability benefits when you add a dependent from your benefits?
- When do you need to add or remove someone from your benefits? How would you want to learn about this?

**Goal 2: How do Veterans understand the dependent verification process?**

Some key questions:

- What does dependent verification mean?
- What do you think dependent verification does?

### Hypotheses for Cohort 1

_This study will have multiple cohorts since it's continuous research. Each cohort might have different hypotheses._

---

**The majority of Veterans won't know when they need to update their dependents (what life events trigger it).**

**The majority of Veterans will understand that adding or removing a person from their benefits affects their benefit payment amount.**

**Veterans won't understand what verification is and how it relates to benefit payment, like overpayments.**

---

## Methodology 🛠️

**_Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design._**

**The research method we will be using is recorded, moderated user interviews.**

### Location

Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**None**

## Recruitment 🎯

_OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers._

### Recruitment approach

_Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?_

**Our intended audience is Veterans who receive VA disability compensation and who also receive additional VA disability compensation for one or more dependents. We are requesting that Perigean recruit these participants.**

### Recruitment criteria

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **5**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **5**
- `Ideal completed sessions:` **3**

### Primary criteria (must-haves)

_What demographics, experience, and scenarios do you need participants to meet to effectively run your study?_

- `Do you receive VA disability compensation?`[answer should be yes to qualify]
- `Do you receive additional VA disability compensation for one or more of your dependents?`[answer should be yes to qualify]

#### Secondary criteria (nice-to-haves)

_What criteria would strengthen your results?_

- `Because this is a continuous research, we encourage Perigean to recruit a representative sample of Veterans. The team will work with Perigean to adjust recruitment criteria in future cohorts if needed.`
- `Since we're not using a prototype, we can talk to Veterans who use assistive technology.`

## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **August 18th 9-11:30ET or 1-2:30ET, August 19th 10:30-4:30ET, August 20th 9-3ET.**

### Prepare

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.**

- `Pilot participant name:` **TBD**
- `Date and time of pilot session:` **TBD**

### Research sessions

- `Planned dates of research:` **All cohorts: 08/11/25 to 11/13/25**, **First cohort: 8/21/25 to 8/25/25**

### Length of sessions

**Each session would last no more than an hour.**

### Availability

When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**.
- Suggested times: 08/21/25: 9 - 2 ET; 08/22/25: 9 - 2 ET; 08/25/25: 11 - 3:30 ET.

## Team Roles 🕵️👩‍💻👩‍🔬

- `Moderator:` **Megan Graham, David Kennedy, Kristin Ouellette Muskat, Gretchen Maciolek, Fiorella Geedi**
- `Research guide writing and task development (usually but not always same as moderator):` **Megan Graham, David Kennedy**
- `Participant recruiting & screening:` **Megan Graham, David Kennedy**
- `Project point of contact:` **Megan Graham, David Kennedy**
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**
- `Note-takers:` **N/A**
- `Observers:` **Megan Graham, David Kennedy, Kristin Ouellette Muskat, Gretchen Maciolek, Fiorella Geedi**

## Approvals ✅

- `Reviewed by Ben Delphine on [08-07-2025]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
