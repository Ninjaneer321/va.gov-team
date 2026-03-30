---
# Research Plan Metadata
title: "Research Plan for Disability Benefits Crew, Form 21-526EZ, FY26 Q3"
date: 2026-03-26
last_updated: 2026-03-26
team: "Disability Benefits Crew"
product: "Form 21-526EZ (Disability Compensation Claim)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "VA Form 21-526EZ is the primary online application for veterans to file disability compensation claims. While iterative improvements have been made, there is limited recent observational research capturing how veterans actually experience completing the form end-to-end in a naturalistic setting. This study will observe veterans as they complete the form (or realistic portions of it) to better understand usability challenges, points of friction, and aspects of the experience that are working well."
  product_location: "Authenticated - VA.gov disability benefits section"
  user_familiarity: "Iteration on existing product"
  product_brief_url: "Not specified"

# Research Design
methodology: "Moderated usability testing with remote observation"
research_format:
  location: "remote"
  moderated: true

# Research Goals & Questions
research_goals:
  - goal_1: "Identify key usability pain points and moments of friction as veterans complete VA Form 21-526EZ online"
  - goal_2: "Understand how veterans interpret questions, instructions, and required inputs throughout the form"
  - goal_3: "Surface elements of the experience that are intuitive, efficient, or confidence-building"

research_questions:
  - "Where do Veterans hesitate, struggle, or get confused while completing the form?"
  - "Which questions or sections are most difficult for Veterans? What makes them difficult (understanding, answering, etc)?"
  - "How do Veterans interpret instructional content, such as the intro page content or guidance in additional info components?"
  - "What strategies or workarounds do Veterans use when they don't know what to do?"
  - "At what points do Veterans experience frustration, uncertainty, or loss of confidence?"
  - "Which parts of the form feel straightforward or easy to complete, and why?"
  - "How do Veterans navigate between sections and manage the overall flow of the form?"
  - "What external information or resources (if any) do Veterans rely on during completion?"
  - "Where do Veterans make errors, backtrack, or revise their responses?"
  - "What factors influence whether Veterans feel confident submitting the form?"

hypotheses: []

expected_outcomes: "Findings from this research will be used to: (1) Establish a baseline understanding of the current user experience to measure future improvements; (2) Prioritize UX and product improvements across scrum teams based on observed user pain points; (3) Inform design decisions related to form structure, content clarity, and interaction patterns; (4) Identify opportunities to simplify or streamline complex sections of the form; (5) Provide evidence-based insights to stakeholders to support documented pain points, future roadmap and policy discussions."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Veterans with varied experience levels with disability claims filing"

  primary_criteria:
    - "Must be a Veteran"
    - "Must be eligible and willing to file for disability compensation on the day of their session"
    - "Must be comfortable being observed filling out their claim on va.gov"
    - "Must be able and willing to screen share a web browser window via computer or mobile device"
    - "At least 3 Veterans who have never filed for disability compensation"
    - "At least 2 Veterans who have filed in the past, but never online"

  secondary_criteria:
    - "At least 2 and no more than 3 Veterans with cognitive disabilities"
    - "At least 1 Black Veteran"
    - "No more than 2 Caucasian Veterans"
    - "At least 2 other ethnicities (Hispanic, Asian, Native American)"
    - "A mix of genders"

  screener_questions:
    - question: "Do you have a VA.gov account that you have logged onto in the last six months?"
      qualifying_response: "Yes"
      disqualifying_response: "No"
    - question: "Have you ever filed a claim for disability compensation with VA in the past? If so, when and how did you file it?"
      qualifying_response: "No (Recruit at least 3 Veterans who have not filed in the past) OR Yes, pdf/vso/agent (Recruit at least 2 Veterans who have filed in the past but never online)"
      disqualifying_response: "Yes, online"
    - question: "Are you interested in filing for disability benefits online in the next month?"
      qualifying_response: "Yes"
      disqualifying_response: "No"
    - question: "Would you be willing to fill out your disability claim online at VA.gov while a researcher observes?"
      qualifying_response: "Yes"
      disqualifying_response: "No"
    - question: "How many conditions do you plan on filing for?"
      qualifying_response: "Any - Recruit 2 Veterans for 2 or fewer conditions, 1 Veteran for 20+ conditions, mix for remainder"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "Yes (Recruit at least 3) or No"

participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  total_recruited: 6
  completed_sessions_goal: 6

# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2026-04-20 to 2026-06-01 (rolling sessions, 1 session/week for 6 weeks)"
  research_review_submission: "TBD"

session_details:
  duration_minutes: "45 to 90 (depending on participant completion time)"
  buffer_minutes: 60
  max_sessions_per_day: 2

# Strategic Alignment
octo_priorities:
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Key Result 3.1: Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more"
      - "Key Result 3.2: 100% of end-user facing C100 systems maintain a ranked list of user pain points"
      - "Key Result 3.3: 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system"

veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Aging"

# Research Repository Tracking
related_research:
  previous_studies:
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Research%20Findings.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-10-Medallia-Research/2023-10%20Research%20Findings.md"

tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "PRDT: Form 21-526EZ"
  - "DSP: Ask users for multiple responses"
  - "DSP: Contextual Help"
  - "DSP: Content Presentation"
  - "DSP: Help users to check answers"
  - "DSP: Error Message Guide"
  - "DSC: Form"
  - "DSC: Form - Text Area"
  - "DSC: Form - Radio Button"
  - "DSC: Form - Checkbox"
  - "DSC: Form - Select"
  - "DSC: Form - File Input"
  - "DSC: Form - Date Input"
  - "HDW: Desktop"
  - "HDW: Laptop"
  - "remote-research"
  - "moderated-testing"
  - "form-optimization"
  - "accessibility"
---

# Research Plan for Disability Benefits Crew, 526ez, FY26 Q3

## Background 🏗️

<details><summary>Briefly describe the background of your product.</summary>
VA Form 21-526EZ is the primary online application for veterans to file disability compensation claims. The form is complex, requiring users to navigate eligibility rules, provide detailed service and medical history, and interpret domain-specific language.

It's been a long time since we did a shadowing study (read previous research, below). While usability testing has been conducted on specific sections for iterative improvements, we have limited recent observational research capturing how veterans actually experience completing the form end-to-end in a natural setting. Our current understanding of pain points is informed by analytics, support tickets, and prior studies, but may not fully reflect real-world behaviors, workarounds, and moments of confusion.

This study will observe veterans as they complete the form (or realistic portions of it) to better understand usability challenges, points of friction, and aspects of the experience that are working well.

`What problem is your product trying to solve?`

Disability compensationis one of the top five most used VA Benefits and the program responsible for distributing the most money to Veterans. Digital claim submission (compared to paper) offers unique opportunities to support claimants during the submission process. Our product aims to be far-and-away the best and most frequent way to self-service apply for disability compensation. 
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Authenticated

`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

Iterating on an existing product

Product Brief

[Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/README.md).

</details>


## Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

Link to relevant past research studies that inform this work. This helps build institutional knowledge and prevents duplicate efforts.


[!TIP]
> **Use the [Past Research Analysis Copilot Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-discovery/past-research-analysis-for-new-research-plan-prompt.md) to automatically find relevant research!**
1. Draft and commit your research plan
2. Open GitHub Copilot for your research plan. Click the Copilot icon on your file toolbar.
3. Copy and paste the prompt from the link above
4. Review the suggested studies and add the most relevant ones below


Previous Studies:

* [2023-11 Form 526EZ Shadowing Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md) - foundational shadowing research that directly precedes this study.
* [2024-06 Form 0781 (PTSD) Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-06%200781%20Research/Research%20Findings.md) - Directly addresses PTSD evidence form complexity
* [2023-10 Medallia Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-10-Medallia-Research/2023-10%20Research%20Findings.md) - Secondary research analyzing 300+ Medallia survey responses from March 2023

Key Takeaways from Previous Research:

- PTSD section complexity is burdensom
- Confusion between new vs. worsening conditions
- Transition issues and abrupt section changes cause confusion and usability conerns
- Confusion between 526 and 0781 evidence pages (participants saw them as redundant)
- Completion anxiety about whether all evidence was submitted
- Participants desired unified treatment records section with embedded 4142
- Evidence submission was the top pain point across the application
- Error messages created frustration, especially for Veterans near ITF expiration


[!NOTE]
If this is the first research study for this product, you can note that here. You may also want to reference research from similar products or features that could provide relevant insights.


</details>


## OCTO-DE Priorities 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
  - ***Research Ops Plain Language:** Supports this product’s OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.*
> - **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points.
  - ***Research Ops Plain Language:** Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - ***Research Ops Plain Language:** Supports the delivery of at least one release that directly addresses a documented user pain point within this product.*

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Getting Out`
- `Starting Up`
- `Taking Care of Myself`
- `Aging`

</details>


## Research Goals 🥅	
`What are you trying to learn from this research?`   

### Goals

`1.` Identify key usability pain points and moments of friction as veterans complete VA Form 21-526EZ online.
`2.` Understand how veterans interpret questions, instructions, and required inputs throughout the form.
`3.` Surface elements of the experience that are intuitive, efficient, or confidence-building. 


### Outcome

`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`
Findings from this research will be used to:

* Establish a baseline understanding of the current user experience to measure future improvements. 
* Prioritize UX and product improvements across scrum teams based on observed user pain points. 
*  Inform design decisions related to form structure, content clarity, and interaction patterns. 
*  Identify opportunities to simplify or streamline complex sections of the form. 
*  Provide evidence-based insights to stakeholders to support documented pain points, future roadmap and policy discussions. 



### Research questions

1. Where do Veterans hesitate, struggle, or get confused while completing the form? 
2.  Which questions or sections are most difficult for Veterans?  What makes them difficult (understanding, answering, etc)?
3.  How do Veterans interpret instructional content, such as the intro page content or guidance in additional info components? 
4.  What strategies or workarounds do Veterans use when they don’t know what to do? 
5.  At what points do Veterans experience frustration, uncertainty, or loss of confidence? 
6.  Which parts of the form feel straightforward or easy to complete, and why? 
7.  How do Veterans navigate between sections and manage the overall flow of the form? 
8.  What external information or resources (if any) do Veterans rely on during completion? 
9.  Where do Veterans make errors, backtrack, or revise their responses? 
10.  What factors influence whether Veterans feel confident submitting the form?



## Methodology  🛠️

We'll use va.gov production environment and observe Veterans completing the online form. Sessions may last anywhere from 45 minutes to 2 hours, depending on how long it takes the Veteran to complete the form.

We'll do these sessions remotely over zoom.

### Research materials 📔

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2026-04-526ez-shadowing/conversation-guide.md)



## Recruitment 🎯    

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 
Veterans

### Recruitment criteria

Recruit 9 Veterans for a total of 6 completed studies.

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **6**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **6**
- `Ideal completed sessions:` **6**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `Must be a Veteran`
- `Must be eligible and willing to file for disability compensation on the day of their session. Whether or not they receive compensation currently doesn't matter for this study.`
- `Must be comfortable being observed filling out their claim on va.gov.`
- `Must be able and willing to screen share a web browser window via computer or mobile device`
- `At least 3 Veterans who have never filed for disability compensation`
- `At least 2 Veterans who have filed in the past, but never online. Whether or not they receive compensation as a result of their filing doesn't matter for this study.`

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `At least 2 and no more than 3 Veterans with cognitive disabilities`
- `At least 1 Black Veteran`
- `No more than 2 Caucasian Veterans`
- `At least 2 other ethnicities (Hispanic, Asian, Native American)`
- `A mix of genders`

## Screener Questions 📋

### Screener Question Template

**`[Number].` [Screener Question Text]**
- **Qualifying response:** `[The answer that qualifies the participant]`
- **Disqualifying response:** `[Optional: The answer that disqualifies]`

### Your Study's Screener Questions

**`1.` Do you have a VA.gov account that you have logged onto in the last six months?**
- **Qualifying response:** `Yes`
- **Disqualifying response:** `No`

**`2.`Have you ever filed a claim for disability compensation with VA in the past? If so, when and how did you file it? [Free response, record method/date of last filing]**
- **Qualifying response:** ` No (Recruit at least 3 Veterans who have not filed in the past)` and `Yes, pdf/vso/agent (Recruit at least 2 Veterans who have filed in the past but never online)`
- **Disqualifying response:** `Yes, online`

**`3.` Are you interested in filing for disability benefits online in the next month?**
- **Qualifying response:** `Yes`
- **Disqualifying response:** `No`
  
**`4.` Would you be willing to fill out your disability claim online at VA.gov while a researcher observes?**
- **Qualifying response:** `Yes`
- **Disqualifying response:** `No`
  
**`5.` How many conditions do you plan on filing for?**
- **Qualifying response:** `Any, see below`
  a. Recruit 2 Veterans who plan to file for 2 or fewer conditions
  b. Recruit 1 Veteran who plan to file for 20 or more conditions
  c. Recruit a mix for the remaining
  
**`6.` Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.**
- **Qualifying response:** `Any, see below`
  a. Yes (Recruit at least 3)
  b. No
  


## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` 3/26 4:00-5:00pm, 3/27 10-11am or 3:30-4pm, 3/30 10am-1pm ET or 3-4pm

### Prepare
We'll use va.gov production, so it's ready. We're not planning a pilot session for this study; this is the second round of observational research and a mock session won't necessarily be helpful in preparing for this.

### Research sessions
- `Planned dates of research:` We'd like to do rolling research sessions beginning ASAP. Initially, our goal is to complete 1 session / week for 6 weeks. Let's discuss in detail over kick off.

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` up to 90 minutes (will depend on how long participant takes to complete application)
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` 1 hour
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` 2

### Availability
We can provide additional availability as needed
- `04/3, Friday, 07:00AM-4:00PM EST`
- `04/14, Tuesday, 07:00AM-12:00PM, 3:30-5:30PM EST`
- `04/15, Wednesday, 6:00PM - 8:00PM EST`
- `04/16, Thursday, 6:00PM - 8:00PM EST`
- `04/17, Friday, 12:00PM - 6:00PM EST`
- `04/20, Monday, 07:00AM-1:30PM, 3:00-5:00PM EST`
- `04/22, Wednesday, 07:00AM-2:00PM EST`
- `04/23, Thursday, 07:00AM-10:00AM EST, 3:30-5:30PM EST`
- `04/24, Friday, 07:00AM-4:00PM EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

* Moderators: Liz Lantz and Shannon Ford   
* Research guide writing and task development (usually but not always same as moderator): Liz Lantz        
* Participant recruiting & screening:    Perigean   
* Project point of contact: Liz Lantz      
* Accessibility specialist (for sessions where support for assistive technology may be needed): N/A    
* Note-takers: N/A (will use transcripts) 
* Observers: TBD

Approvals ✅

[!NOTE]
Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the Copilot Frontmatter Completion Prompt.

* Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]
* Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]

