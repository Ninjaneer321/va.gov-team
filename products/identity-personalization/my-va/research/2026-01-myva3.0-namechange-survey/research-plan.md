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

	# Research Plan for [Team, Product, Date]
> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	The Core Veteran Experience Crew ensures Veterans and beneficiaries have a cohesive logged-in experience across and within the current mobile and web modalities. The crew seeks to do this by developing and curating a personalized view of the Veteran’s and beneficiary’s information so they can easily understand their benefits and take action to manage and update their account and benefits. We aim to aggregate and elevate personalized tasks and information relevant to Veterans on VA.gov and the Flagship Health & Benefits Mobile app so Veterans and beneficiaries can quickly get a snapshot of their existing business with VA.

[Link to Authenticated Experience team folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization)

`What problem is your product trying to solve?`

**[We are updating the name of My VA based on previous user feedback to incorporate a new title that is more recognizable by Veterans and aligned to their mental models.]**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**[Authenticated Experience]**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**[Existing]**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va-3.0/README.md).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

> **NOTE:** If a Key Result does not have a ***Research Ops Plain Language*** equivalent, it does not map to research supporting it as a key result for the parent objective.


`Objective 1:  Optimize software delivery for Veteran impact.`  

> - **Key Result 1.1:** All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov.
  - ***Research Ops Plain Language:** Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov*

</details>


### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Getting Out`
- `Starting Up`
- `Taking Care of Myself`
- `Reinventing Myself`
- `Putting Down Roots`
- `Retiring`
- `Aging`
- `Dying`

</details>


## Research Goals 🥅	
`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **[Validate if renaming My VA to include a descriptor such as dashboard or feed will reflect recommendations from prior research and user feedback. ]**

`2.` **[Validate if updating My VA to include a descriptor such as dashboard or feed will  match Veteran mental models.]**

  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**[Outcome will be a validated content change for changing My VA to a name more recognizable to Veterans.]** 

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

**`1.`[Do Veterans associate the word Dashboard with My VA? Or is there another term they’d prefer?]**

**`2.`[Does the recommendation to rename My VA to My VA Dashboard, based on prior research and user feedback, match Veterans mental models?]**


### Hypotheses

**`1.`[Based on prior research, we believe Veterans will associate the word Dashboard with My VA.]**

**`2.`[Based on prior research and user feedback, we believe Veterans will prefer My VA Dashboard over My VA.]**

**`3.`[Based on prior research, we believe Veterans will understand what My VA Dashboard is even when the page is not readily available and in front of the user]**

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 
	
</details>

**[Unmoderated survey - Evaluating updates to an existing experience based on past research recommendations]**

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

- [X] **Remote**
- [ ] **In-person**
      

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  



**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- [Link to email with instructions](url goes here)



**If recruiting outside of Perigean’s participant database:**
- [N/A](url goes here)
	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 
- Perigean **CANNOT** recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, [unmoderated studies](https://depo-platform-documentation.scrollhelp.site/research-design/perigean-recruiting-process-for-unmoderated-studie), however, these studies require strict recruitment requirements. 
- Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and download the [recruitment checker (Excel)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx) to understand OCTO's targets for inclusivity and use it to plan your participant demographics for this study.

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*


- `Veterans:` **[504]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[504]**
- `Ideal completed sessions:` **[400]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `[ALL / Participants have a VA.gov or MyHealtheVet account]`
- `252 / Frequent VA.gov users (Daily or Weekly)  `
- `252 / Non frequent VA.gov users (Monthly, Every few months or Never, but am open to using VA.gov)`


### Screener questions
- `1. Do you have a VA.gov or My HealtheVet account?`  
- `Yes`  
- `No`  
- `I’m not sure`  
- `2. How often do you use VA.gov? Your best guess is okay.`  
- `Daily`  
- `Weekly`  
- `Monthly`  
- `Every few months`  
- `Never, but am open to using VA.gov`  
- `Never, and would prefer not to use VA.gov`  
- `I’m not sure`  
- `3. Do you identify as a member of the LGBTQ+ community?`  
- `Yes`  
- `No`  
- `Prefer not to answer`  
- `4. Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed.`   
- `Yes`  
- `No`  
- `Prefer not to answer`

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `252 / age 55-64+ yo`
- `252 / with cognitive disability`
- `252 / Mobile user`
- `126 / Rural`
- `126 / No degree`
- `106 / Other than honorable`
- `86 / Immigrant origin`
- `51 / Woman`
- `3 / Expat (living abroad)`

- `76 / Black or African American` 
- `61 / Hispanic, Latino, or Spanish origin` 
- `20 / Biracial` 
- `14 / Asian`  
- `2 / Native Hawaiian or other Pacific Islander` 
- `9 / Native, American Indian or Alaska Native`   

- `1 / Gay, lesbian, or bisexual`   
- `1 / Transgender`  
- `1 / Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman` 
 
- `0 / Beginner AT User`   
- `0 / Experienced AT User`   
- `0 / Desktop Screen Reader (SR)`  
- `0 / Mobile Screen Reader (SR)`  
- `0 / Magnification/Zoom`   
- `0 / Speech Input Tech (Siri, Dragon)`  
- `0 / Hearing Aids`   
- `0 / Sighted Keyboard`   
- `0 / Captions`   
- `0 / Switch Device`   
- `0 / Braille Reader` 

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[TBD]**

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[TBD]**
- `Date and time of pilot session:` **[TBD]** 

### Research sessions
- `Planned dates of research:` **[TBD]**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **[Less than 10 minutes]**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **[Not applicable due to being an unmoderated study]**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **[Not applicable due to being an unmoderated study]**

### Availability

- `Not applicable due to being an unmoderated study`

  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **[Ashley Bush]**	
- `Research guide writing and task development (usually but not always same as moderator):` **[Ashley Bush]**		
- `Participant recruiting & screening:`	**[Perigean]**	
- `Project point of contact:` **[Ashley Bush]**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Ashley Bush]**	
- `Note-takers:` **[N/A]**
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[N/A]**


## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by [Chante, OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`


## Appendix

[Instruction email](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/research/2026-01-myva3.0-namechange-survey/survey-outline.md#instruction-email)

[Survey structure](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/research/2026-01-myva3.0-namechange-survey/survey-outline.md#survey-structure)

Perigean completion codes (To be added)

Analysis (To be added)

[Laws related to this work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/research/2026-01-myva3.0-namechange-survey/survey-outline.md#laws-related-to-this-work)
