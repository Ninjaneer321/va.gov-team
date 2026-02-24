---
# Research Plan Metadata
title: "Veteran & Caregiver Research Plan for 21-2680 Provider Experience"
date: 2026-02-19
last_updated: 2026-02-20
team: "[Team Name]"
product: "Form 21-2680 Provider Experience"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Form 21-2680 requires Veterans (claimants) or their caregivers to have a medical provider fill out and sign a section verifying eligibility for Aid and Attendance or Housebound benefits. The claimant portion is already digitized on VA.gov; this research focuses on the experience veterans and caregivers have completing their part of the form and navigating the handoff to their provider."
  product_location: "Benefits & Claims section; authenticated experience on VA.gov"
  user_familiarity: "Iteration - the claimant (patient-facing) portion is already online. This research focuses on the veteran and caregiver experience in completing their section and coordinating with their provider."
  product_brief_url: "[Link to product brief]"

# Research Design
methodology: "Semi-structured interviews and desktop research"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand how veterans and caregivers experience the claimant side of Form 21-2680."
  - goal_2: "Understand how veterans and caregivers navigate getting their provider to complete the provider section, including challenges and facilitators in the handoff process."
  - goal_3: "Understand the usability of Form 21-2680 as it exists in its digital form."
  - goal_4: "Discover how veterans and caregivers currently interact with their providers and what pain points exist."
  - goal_5: "Usability test how well people understand the new digital handoff between claimant and provider."

research_questions:
  - "How clear are the instructions and form fields?"
  - "What is the timeline and effort required to complete the claimant side?"
  - "How do veterans and caregivers feel about their experience completing Form 21-2680?"
  - "How easy is it to navigate and complete the form?"
  - "Are form fields and questions clear and understandable?"
  - "How do veterans and caregivers handle errors or unclear sections?"
  - "Is the form accessible?"
  - "How do they typically contact or coordinate with providers?"
  - "What challenges arise with follow-up and tracking?"
  - "Do they understand what the consent to disclose to their provider mean?"
  - "Do they understand their options for handoff?"

hypotheses:
  - "Veterans and caregivers often experience confusion or delay in the provider handoff process."
  - "Asynchronous workflows (completing the form outside an appointment) may be more common, contrary to assumptions about synchronous provider involvement."
  - "Additional or clearer support resources would increase success and satisfaction for veterans/caregivers completing the process."

expected_outcomes: "This research will clarify how veterans and caregivers experience the digital claimant portion of Form 21-2680, identify barriers and facilitators in the provider handoff process, and inform design improvements to reduce friction and increase successful claim submissions."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Perigean will recruit 8-10 veterans and caregivers to understand their experience with healthcare and benefits processes, and to gather feedback on the Form 21-2680 digital experience."
  
  primary_criteria:
    - "Veteran or caregiver/dependent of a Veteran"
    
  secondary_criteria:
    - "Receives a pension or has a service-related disability"
    
  screener_questions:
    - question: "Are you a Veteran, or the caregiver or dependent of a Veteran?"
      qualifying_response: "Yes"
    - question: "Do you receive a VA pension or have a service-related disability?"
      qualifying_response: "Yes"
    - question: "Are you comfortable participating in a 60-minute remote interview about your experience with healthcare and benefits?"
      qualifying_response: "Yes"
      
participants:
  veterans: 5
  caregivers: 3
  total_recruited: 8-10
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Optimize software delivery for Veteran impact"
    key_results: 
      - "Supports reducing processing time and ensuring correct benefit distribution through improved claimant form submission workflows"
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Supports reducing burden for Veterans and caregivers through a streamlined, user-friendly claimant form experience"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Reinventing Myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Research on Form 21-2680 claimant experience, if available]"
    - "[Previous studies on Aid and Attendance claims processes, if available]"
    
tags:
  - "benefits-claims"
  - "veteran-experience"
  - "caregiver-experience"
  - "form-21-2680"
  - "aid-and-attendance"
  - "semi-structured-interviews"
  - "authenticated-experience"
  - "generative-research"
---

# Research Plan for 21-2680 Claimant Experience

> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

Form 21-2680 requires Veterans (claimants) or their caregivers to have a medical provider fill out and sign a section verifying eligibility for Aid and Attendance or Housebound benefits. The claimant portion is already digitized on VA.gov; this research focuses on the experience veterans and caregivers have completing their part of the form and navigating the handoff to their provider.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Benefits & Claims section; authenticated experience.
  
`What is Veterans' familiarity with this tool? Is this a new product or an iteration on an existing one?`

This is an iteration. The claimant (patient-facing) portion of Form 21-2680 is already digitized on VA.gov. This research explores the veteran and caregiver experience in completing their section and coordinating with their provider for the provider section.

`Product Brief`

**[Link to product brief](url goes here).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

`Link to relevant past research studies that inform this work.`

**Previous Studies:**
- [Link to Study 1 - Research on Form 21-2680 claimant experience, if available]
- [Link to Study 2 - Previous studies on Aid and Attendance claims processes, if available]

**Key Takeaways from Previous Research:**
- The handoff process between claimants and providers is a frequent source of confusion and delay.
- Claimants and caregivers value clarity and simplicity in instructions.

> [!NOTE]
> If you have specific studies to reference, link them here. Otherwise, note that this is the first focused claimant/caregiver workflow study for this product, informed by stakeholder conversations with VBA and internal SMEs.

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support?</summary>

`Objective 1: Optimize software delivery for Veteran impact.`  

> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
  - ***Research Ops Plain Language:** Supports a production release that will measurably improve a product's Veteran-impacting KPIs (processing time, benefit accuracy, successful claim submissions).*

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
  - ***Research Ops Plain Language:** Supports this product's OIT portfolio in improving customer satisfaction and reducing friction for Veterans and caregivers.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - ***Research Ops Plain Language:** Supports the delivery of an improved claimant form experience that directly addresses documented pain points in the current 21-2680 workflow.*

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey? Are there moments that matter?</summary>

**This research supports the following Veteran journey phases:**
	
- `Taking Care of Myself` - Veterans seeking healthcare and disability benefits for medical conditions
- `Reinventing Myself` - Veterans re-evaluating work capacity and independence due to service-connected conditions
- `Aging` - Veterans with progressive or age-related conditions requiring medical certification for support benefits

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **Understand how veterans and caregivers experience the claimant side of Form 21-2680.**

`2.` **Understand how veterans and caregivers navigate getting their provider to complete the provider section, including challenges and facilitators in the handoff process.**

`3.` **Understand the usability of Form 21-2680 as it exists in its digital form.**

`4.` **Discover how veterans and caregivers currently interact with their providers and what pain points exist.**

`5.` **Usability test how well people understand the new digital handoff between claimant and provider.**
  
### Outcome

This research will clarify how veterans and caregivers experience the digital claimant portion of Form 21-2680, identify barriers and facilitators in the provider handoff process, and inform design improvements to reduce friction and increase successful claim submissions.

---

### Research questions

**Goal 1: Experience with claimant side**
	
**`1.` How clear are the instructions and form fields?**

**`2.` What is the timeline and effort required to complete the claimant side?**

**`3.` How do veterans and caregivers feel about their experience completing Form 21-2680?**

**Goal 3: Usability of digital form**

**`4.` How easy is it to navigate and complete the form?**

**`5.` Are form fields and questions clear and understandable?**

**`6.` How do veterans and caregivers handle errors or unclear sections?**

**`7.` Is the form accessible?**

**Goal 4: Provider interaction & pain points**

**`8.` How do they typically contact or coordinate with providers?**

**`9.` What challenges arise with follow-up and tracking?**

**Goal 5: Understanding the digital handoff**

**`10.` Do they understand what the consent to disclose to their provider mean?**

**`11.` Do they understand their options for handoff?**

---

### Hypotheses

**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` We intend to uncover real workflows, pain points, and opportunities for supporting veterans and caregivers through the claimant-side experience.

`What do you already know about this problem space?` From stakeholder conversations, we know that:
- The handoff to providers is a frequent pain point.
- Veterans and caregivers value clear instructions and simplicity.
- Some veterans may not fully understand what their provider needs to do.

`What do you think users will do or think about this product?` We anticipate:
- Veterans and caregivers want a straightforward digital process.
- They may struggle with coordinating the handoff to their provider.
- Clear, contextual guidance could improve success rates.

---

**Key Hypotheses:**

- Veterans and caregivers often experience confusion or delay in the provider handoff process.
- Asynchronous workflows (completing the form outside an appointment) may be more common, contrary to assumptions about synchronous provider involvement.
- Additional or clearer support resources would increase success and satisfaction for veterans/caregivers completing the process.

---
  
## Methodology  🛠️

***Describe the method you're planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

**Research approach:**

1. **Semi-structured interviews** (with veterans and caregivers) - Appropriate for generative research to understand real workflows, pain points, and decision-making processes around the claimant-side experience and provider handoff.
2. **Desktop research** - Review existing literature, forum posts, VA.gov analytics (if available), and any documented feedback on the claimant experience to supplement interview findings and identify patterns.

**Why these methods:** We are in the generative phase of understanding the veteran and caregiver experience with Form 21-2680. Semi-structured interviews allow us to deeply explore real workflows, frustrations, and needs. Desktop research provides context and validates interview insights without additional participant burden.

<details><summary>Additional resources</summary> 
	
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, screens, and prepares participants.

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research.

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [X] **Remote**
- [ ] **In-person**

> [!NOTE]
> We are planning remote research via video calls or phone interviews. This allows us to reach geographically dispersed veterans and caregivers, and accommodates varying schedules and accessibility needs.

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For semi-structured interviews (veterans, caregivers):** 
	
- [Link to conversation guide for veterans/caregivers](url goes here)
- [Link to screener questions](url goes here)
- [Link to recruitment flyer or email](url goes here)

**For desktop research:** 
- [Link to literature review or findings summary](url goes here)

## Recruitment 🎯	

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants.
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive in your recruitment.

### Recruitment approach

**We will recruit participants using Perigean:**
- Perigean will recruit 8-10 veterans and caregivers to understand their experience with healthcare and benefits processes, and to gather feedback on the Form 21-2680 digital experience.

This approach allows us to reach a diverse group of veterans and caregivers across the country.

### Recruitment criteria

**Primary criteria (must-haves):**
- Veteran or caregiver/dependent of a Veteran

**Secondary criteria (nice-to-haves):**
- Receives a pension (3 - 5 participants)
- Has a service-related disability (5 - 8 participants)
- Currently receives SMP, SMC, or other benefit for aid and attendance / housebound allowance (4- 8)
- Thinks they are eligible for aid and attendance / housebound allowance (2 - 3)
- Has a VHA medical provider (2-3)
- Has a private medical provider (2-3)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 8 ideal completed sessions, request 10-12 total participants)*

- `Veterans:` **5 - 8**
- `Caregivers:` **2 - 3**
- `Dependents:` **3 - 5**
- `Total:` **10 - 16**
- `Ideal completed sessions:` **10**

## Screener Questions 📋

> [!NOTE]
> Perigean will use these screener questions **verbatim** to recruit and qualify participants. Write them as you want them asked.

> [!TIP]
> - Write questions in plain language that participants will easily understand.
> - Clearly indicate the **qualifying response** that will make someone eligible.
> - Include links to products or clear descriptions so participants understand what they're being asked about.
> - The more screener questions you have, the harder it will be to recruit - prioritize your must-haves.

### Your Study's Screener Questions

**`1.` Are you a Veteran, or the caregiver or dependent of a Veteran?**
- Yes I am a Veteran (recruit 5-8)
- Yes I am the caregiver of a Veteran (recruit 2-3)
- Yes I am the dependent (spouse, child, parent) of a Veteran (recruit3- 5)
- No, I am none of the above (exclude)

**`2.` Do you (or the Veteran you care for) receive a VA pension?**
- Yes (recruit 3-5)
- No, but I think I am eligible to receive a VA pension (recruit 1)
- No

**`3.` Do you (or the Veteran you care for) have a service-related disability? Do you currently receive any form of disability benefits?**
- Yes I have a service-related disability and receive disability benefits (recruit 5 - 8)
- Yes I have a service-related disability but do not currently receive disability benefits (exclude)
- No 

**`4.` Does your (or the Veteran you care for) doctor or medical provider work at a VHA facility or through a private practice?**
- My medical provider works at a VHA facility (recruit 3 - 5)
- My medical provider works at a private practice (recruit 3 - 5)
- I do not know where my medical provider works (recruit 2 - 3)
- I do not currently have a medical provider (recruit 2 - 3)

**`5.` Do you (or the Veteran you care for) currently receive a VA benefit for Aid and Attendance or Housebound Allowance? Sometimes referred to as Special Monthly Pension (SMP) or Special Monthly Compensation (SMC).**
- Yes, I currently receive SMC (recruit 1-2)
- Yes, I currently receive SMP (recruit 1-2)
- Yes, I currently receive a different benefit for Aid and Attendance or Housebound Allowance (recruit 1 - 2)
- I am not sure (recruit 1-2)
- No, but I think I am eligible to receive SMC, SMP or another benefit for Aid and Attendance or Housebound Allowance (recruit 2 - 3)
- No, and I do not think I am eligible for this benefit (exclude)

**`6.` Are you comfortable participating in a 60-minute remote interview about your experience with healthcare and benefits?**
- Yes

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research session.**

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

### Prepare
*When will the thing you are testing be finalized?*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]**

### Length of sessions
- `Session length:` **60 minutes**
  
- `Buffer time between sessions:` **30 minutes** (to debrief with team, reset, accommodate late arrivals or overruns)
  
- `Maximum Sessions per day:` **4**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times.

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/5, Wednesday 9:00AM-1:00PM, 2:00-5:00PM EST; 3/6, Thursday 10:00AM-2:00PM EST).**
>
> **Place time slots between `hash marks` when in edit mode.**

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `Add more slots as needed`

## Team Roles 🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker and any accessibility accommodations needed.

- **Moderator/Interviewer:** [Enter full name]
- **Note-taker:** [Enter full name or designate Perigean]
- **Observers / Shadow Participants** (1–2 people):
  - [Enter full name]
  - [Enter full name]

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document.

- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
