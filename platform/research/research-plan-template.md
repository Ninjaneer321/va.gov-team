---
# Research Plan Metadata
title: "Research Plan for 21-2680 Provider Experience"
date: 2026-02-19
last_updated: 2026-02-19
team: "[Team Name]"
product: "Form 21-2680 Provider Experience"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Form 21-2680 requires Veterans (claimants) to have their medical provider fill out and sign the provider section to verify eligibility for Aid and Attendance or Housebound benefits. The claimant portion is digitized, but once completed, the patient must print the provider section for a doctor's completion. We are in the initial design phase for allowing providers to complete, sign, and submit their portion digitally."
  product_location: "Benefits & Claims section; authenticated experience on VA.gov"
  user_familiarity: "Iteration - the claimant (patient-facing) portion is already online; we are newly digitizing the provider (doctor-facing) experience."
  product_brief_url: "[Link to product brief]"

# Research Design
methodology: "Mixed-methods: semi-structured interviews, contextual inquiry, workflow mapping, and prototype usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Identify real-world workflows for claimants and providers when completing Form 21-2680, including handoff processes, to understand how the digital experience should accommodate current practices."
  - goal_2: "Uncover pain points and opportunities for improvement in the provider experience with digital completion and submission, including authentication, data entry, and notification challenges."
  - goal_3: "Determine key constraints, privacy/PII handling requirements, and notification strategy considerations in a digital provider form flow to inform design and compliance requirements."

research_questions:
  - "How do providers today receive and complete the 21-2680 form (paper or digital), and what is the real-world handoff process between claimant and provider?"
  - "Are synchronous (during appointment) vs. asynchronous (after appointment, via records) workflows common, and what are the pros and cons of each?"
  - "What scenarios or frictions are most likely to cause delays or errors in provider completion, and what information or context would help providers complete the form more accurately?"
  - "What are the authentication or identity verification pain points for providers in a digital flow (e.g., using ID.me), and how do providers prefer to be notified and onboarded?"
  - "How do raters use provider-supplied answers, what information or format makes their work easiest, and what are the most common challenges in processing 21-2680 forms?"

hypotheses:
  - "Providers often complete forms asynchronously and rely heavily on patient records, not always requiring an in-person visit, contrary to the assumed synchronous workflow."
  - "Digital submission will reduce time-to-benefit for Veterans and processing burden for raters if handoff and authentication barriers are minimized."
  - "Main bottlenecks in the digital flow will be authentication (ID.me account creation), unclear handoff instructions, and lack of direct provider email contact information from claimants."
  - "Providers will prefer a digital solution if it saves them time, minimizes duplicate data entry, and clarifies which form questions are non-negotiable vs. flexible."

expected_outcomes: "This research will clarify existing and ideal workflows for digital provider form completion, inform design requirements for a seamless and compliant provider-facing portal, and reduce processing frictions for claimants, providers, and raters. Insights will directly support wireframes, technical requirements, and prompt iterative usability testing."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean and internal VA networks"
  approach: "Blended recruitment: Perigean will recruit Veterans, caregivers, and private practice providers. Internal VA networks will recruit VHA providers, private providers, and VBA raters with 21-2680 experience."
  
  primary_criteria:
    - "Provider: Has completed a Form 21-2680 or similar VA disability examination form"
    - "Rater: Has evaluated claims involving Form 21-2680 in the past 12 months"
    - "Veteran/Caregiver: Has filed or assisted with filing an Aid and Attendance or Housebound claim within the past 2 years"
    - "Understanding of VA benefits claims workflows or disability examination processes"
    
  secondary_criteria:
    - "Provider: Experience in VHA (VA Health Administration) or private practice settings"
    - "Provider: Familiarity with digital medical forms or electronic health records (EHR) systems"
    - "Rater: Experience with evaluation 21-2680"
    - "Veteran/Caregiver: Any Veteran or caregiver who might fill out a form on VA.gov"
    
  screener_questions:

participants:
  veterans: 2
  caregivers: 1
  providers: 5
  raters: 2
  total_recruited: 12
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
      - "Supports reducing processing time and ensuring correct benefit distribution through improved provider form submission workflows"
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Supports reducing burden for Veterans, providers, and raters through a digitized, streamlined provider form experience"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Reinventing Myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Research on digital provider forms in VA or healthcare systems if available]"
    - "[Previous studies on Aid and Attendance claims processes if available]"
    
tags:
  - "benefits-claims"
  - "provider-experience"
  - "form-21-2680"
  - "aid-and-attendance"
  - "semi-structured-interviews"
  - "workflow-mapping"
  - "authenticated-experience"
  - "generative-research"
---

# Research Plan for 21-2680 Provider Experience

> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

Form 21-2680 requires Veterans (claimants) to have their medical provider fill out and sign the provider section to verify eligibility for Aid and Attendance or Housebound benefits. The claimant portion is digitized, but once completed, the patient must print the provider section for a doctor's completion. We are in the initial design phase for allowing providers to complete, sign, and submit their portion digitally. We aim to clarify real-world workflows around provider completion, identify opportunities for process improvement, and design a digital experience that may support both synchronous (during appointment) or asynchronous (post-appointment via records) workflows.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Benefits & Claims section; authenticated experience. Providers will authenticate using ID.me.
  
`What is Veterans' familiarity with this tool? Is this a new product or an iteration on an existing one?`

This is an iteration. The claimant (patient-facing) portion of Form 21-2680 is already digitized on VA.gov. We are newly designing and implementing the provider (doctor-facing) experience for digital completion and submission.

`Product Brief`

**[Link to product brief](url goes here).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

`Link to relevant past research studies that inform this work.`

**Previous Studies:**
- [Link to Study 1 - Research on digital provider forms in VA or healthcare systems, if available]
- [Link to Study 2 - Previous studies on Aid and Attendance claims processes, if available]

**Key Takeaways from Previous Research:**
- Digital provider forms can reduce processing time and improve data quality if implemented with clear instructions and minimal friction.
- Providers often prefer asynchronous workflows where they can reference patient records rather than synchronous appointment-based completion.
- Authentication and identity verification are common pain points in multi-party digital workflows; clear communication about who needs to do what and when is critical.

> [!NOTE]
> If this is the first focused provider workflow study for this product, note that here. However, we have insights from stakeholder conversations with MDEO, VBA raters, and internal SMEs that inform this research.

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support?</summary>

`Objective 1: Optimize software delivery for Veteran impact.`  

> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
  - ***Research Ops Plain Language:** Supports a production release that will measurably improve a product's Veteran-impacting KPIs (processing time, benefit accuracy).*

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
  - ***Research Ops Plain Language:** Supports this product's OIT portfolio in improving customer satisfaction and reducing friction for Veterans and providers.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - ***Research Ops Plain Language:** Supports the delivery of a digital provider form that directly addresses documented pain points in the current paper-based 21-2680 workflow.*

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey? Are there moments that matter?</summary>

**This research supports the following Veteran journey phases:**
	
- `Taking Care of Myself` - Veterans seeking healthcare and disability benefits for medical conditions
- `Reinventing Myself` - Veterans re-evaluating work capacity and independence due to service-connected conditions
- `Aging` - Veterans with progressive or age-related conditions requiring medical certification for support benefits

</details>

> [!TIP]
> Delete journeys not supported by this research.

## Research Goals 🥅	
`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **Identify real-world workflows for claimants and providers when completing Form 21-2680, including handoff processes, to understand how the digital experience should accommodate current practices.**

`2.` **Uncover pain points and opportunities for improvement in the provider experience with digital completion and submission, including authentication, data entry, and notification challenges.**

`3.` **Determine key constraints, privacy/PII handling requirements, and notification strategy considerations in a digital provider form flow to inform design and compliance requirements.**
  
### Outcome

This research will clarify existing and ideal workflows for digital provider form completion, inform design requirements for a seamless and compliant provider-facing portal, and reduce processing frictions for claimants, providers, and raters. Insights will directly support wireframes, technical requirements, and iterative usability testing of the provider-facing interface.

---

### Research questions

***Consider bucketing research questions under research goals:***

**Goal 1: Real-World Workflows & Handoff**
	
**`1.`How do providers today receive and complete the 21-2680 form (paper or digital), and what is the real-world handoff process between claimant and provider?**

**`2.`Are synchronous (during appointment) vs. asynchronous (after appointment, via records) workflows common, and what are the pros and cons of each?**

**Goal 2: Pain Points & Opportunities**

**`3.`What scenarios or frictions are most likely to cause delays or errors in provider completion, and what information or context would help providers complete the form more accurately?**

**`4.`What are the authentication or identity verification pain points for providers in a digital flow (e.g., using ID.me), and how do providers prefer to be notified and onboarded?**

**Goal 3: Constraints & Compliance**

**`5.`How do raters use provider-supplied answers, what information or format makes their work easiest, and what are the most common challenges in processing 21-2680 forms?**

> [!TIP]
> Enter more questions as needed

### Hypotheses

**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` We intend to uncover the real workflows, pain points, and design constraints for a digital provider form experience.

`What do you already know about this problem space?` From stakeholder conversations, we know that:
- Providers may not always conduct in-person exams; they often rely on patient health records.
- The current paper handoff relies on patients to print and deliver forms; this is a friction point.
- Providers often do not have direct email contact information from patients.
- Raters have specific needs for form clarity and completeness.

`What do you think users will do or think about this product?` We anticipate:
- Providers will prefer a digital solution if it is faster and simpler than paper.
- Providers may resist creating new accounts (ID.me) if the process is unclear.
- Raters will value forms that are consistent, complete, and clear—regardless of digital vs. paper.

---

**Key Hypotheses:**

- Providers often complete forms asynchronously and rely heavily on patient records, not always requiring an in-person visit, contrary to the assumed synchronous workflow.
- Digital submission will reduce time-to-benefit for Veterans and processing burden for raters if handoff and authentication barriers are minimized.
- Main bottlenecks in the digital flow will be authentication (ID.me account creation), unclear handoff instructions, and lack of direct provider email contact information from claimants.
- Providers will prefer a digital solution if it saves them time, minimizes duplicate data entry, and clarifies which form questions are non-negotiable vs. flexible.

---
  
## Methodology  🛠️

***Describe the method you're planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

**Mixed-methods research:**

1. **Semi-structured interviews** (with providers, raters, Veterans/caregivers) - Appropriate for generative research to understand current workflows, pain points, and decision-making processes.
2. **Contextual inquiry** (observing or "riding along" with providers filling out forms, if feasible) - Allows us to see the real environment, constraints, and informal workflows that interviews alone might miss.
3. **Workflow mapping sessions** - Collaboratively document the current and ideal state of the claimant-to-provider-to-rater handoff.
4. **Prototype usability testing** (later iterations) - Test wireframes and prototypes to validate assumptions and iterate on design solutions.

**Why these methods:** We are in the generative phase of design (very initial), and the problem involves multiple stakeholders with competing needs and complex workflows. Interviews and contextual inquiry allow us to capture rich, qualitative insights about how people currently work and what they need. Workflow mapping helps us visualize and align on process improvements across teams.

<details><summary>Additional resources</summary> 
	
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, screens, and prepares participants.
- Review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to understand PRA requirements for multi-party forms and medical provider research.
- If recruiting VHA employees or internal VA staff, coordinate with your VA lead, as Perigean cannot recruit VA employees directly.

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research.

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [X] **Remote**
- [ ] **In-person**

> [!NOTE]
> We are planning remote research via video calls or phone interviews. This allows us to reach geographically dispersed providers and raters. If the team identifies an opportunity to conduct in-person contextual inquiry at a clinic or VA facility, we will add those details here.

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For semi-structured interviews (providers, raters):** 
	
- [Link to conversation guide for providers](url goes here)
- [Link to conversation guide for raters](url goes here)
- [Link to conversation guide for Veterans/caregivers](url goes here)

**For workflow mapping sessions:** 
- [Link to workflow mapping template or visual](url goes here)

**For prototype testing (future iterations):** 
- [Link to conversation guide for prototype testing](url goes here)
- [Link to prototype or wireframes](url goes here)

**Recruitment materials:**
- [Link to screener questions](url goes here)
- [Link to recruitment flyer or email (if using internal VA networks)](url goes here)

## Recruitment 🎯	

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants.
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive and avoid bias.

### Recruitment approach

**We will recruit participants using a blended approach:**
- **Perigean** will recruit Veterans, caregivers, and private practice providers from their panel.
- **Internal VA networks** will recruit VHA providers and VBA raters with direct 21-2680 experience.

This approach is necessary because:
- Perigean cannot recruit VA employees (raters, VHA providers), so internal networks are required for those cohorts.
- Perigean specializes in recruiting Veterans and civilian populations, including private-sector healthcare providers.
- We will use a **lean maximum variation approach** to ensure diversity across provider types (VHA vs. private, different specialties), practice settings, and experience levels with the form.

### Recruitment criteria

**Primary criteria (must-haves):**
- Provider cohort: Has completed Form 21-2680 or similar VA disability examination form in the past 2 years
- Rater cohort: Has evaluated claims involving Form 21-2680 in the past 12 months
- Veteran/Caregiver cohort: Has filed or assisted with filing an Aid and Attendance or Housebound claim within the past 2 years
- All participants: Basic understanding of VA benefits claims workflows or disability examination processes

**Secondary criteria (nice-to-haves):**
- Provider: Experience in both VHA (VA Health Administration) and private practice settings
- Provider: Familiarity with digital medical forms or electronic health record (EHR) systems
- Rater: Experience with both internal VHA exams and contracted vendor exams
- Veteran/Caregiver: Has worked with a VSO (Veterans Service Officer) or VSA in the claims process

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 8 ideal completed sessions, request 12 total participants)*

- `Veterans:` **2**
- `Caregivers:` **1**
- `Providers:` **5**
- `Raters:` **2**
- `Total:` **12**
- `Ideal completed sessions:` **8**

## Screener Questions 📋

> [!NOTE]
> Perigean will use these screener questions **verbatim** to recruit and qualify participants. Write them as you want them asked.

> [!TIP]
> - Write questions in plain language that participants will easily understand.
> - Clearly indicate the **qualifying response** that will make someone eligible.
> - Include links to products or clear descriptions so participants understand what they're being asked about.
> - The more screener questions you have, the harder it will be to recruit - prioritize your must-haves.

### Your Study's Screener Questions

**`1.` Have you completed a VA Form 21-2680 (Aid and Attendance or Housebound Examination Report) for a patient in the past 2 years?**
- **Qualifying response:** Yes

**`2.` Are you currently licensed to practice as one of the following: Medical Doctor (MD), Doctor of Osteopathy (DO), Nurse Practitioner (NP), or Physician Assistant (PA)?**
- **Qualifying response:** Yes to any of the above

**`3.` Do you currently work in a VA medical facility (VHA), a private medical practice, or both?**
- **Qualifying response:** Any of the above

**`4.` [For Rater Cohort] Have you evaluated or rated a disability claim that included Form 21-2680 in the past 12 months?**
- **Qualifying response:** Yes

**`5.` [For Veteran/Caregiver Cohort] Have you filed a claim for Aid and Attendance or Housebound benefits through the VA in the past 2 years, or helped a Veteran file one?**
- **Qualifying response:** Yes

> [!TIP]
> Add more screener questions as needed to address your primary and secondary recruitment criteria. For example, you may want to ask about familiarity with digital forms, experience with ID.me, or practice setting diversity.

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
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and providers have varying clinic schedules.

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/5, Wednesday 9:00AM-1:00PM, 2:00-5:00PM EST; 3/6, Thursday 10:00AM-1:00PM, 3:00-5:00PM EST)**
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
> **Please do not include email addresses in this section.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker and any accessibility specialists.

- **Moderator/Interviewer:** [Enter full name]
- **Note-taker:** [Enter full name or designate Perigean]
- **Observers / Shadow Participants** (1–2 people):
  - [Enter full name]
  - [Enter full name]

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) (if needed).

- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
