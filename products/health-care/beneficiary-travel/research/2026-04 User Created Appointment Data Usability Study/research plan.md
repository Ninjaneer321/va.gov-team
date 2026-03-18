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
	
`What problem is your product trying to solve?`

Some medical appointments, such as community care and other unscheduled VA appointments like walk-ins or emergency visits, do not appear in a Veteran’s past appointment list. This means that Veterans cannot file for travel pay on VA.gov and are instead required to go to the legacy Beneficiary Travel Self-Service System (BTSSS) to enter their appointment info in order to input a user-created appointment as a starting point for their travel claim. 

We need to enable Veterans to file travel reimbursement claims on VA.gov for appointments that don’t appear in their appointments list, consolidating more travel pay functionality on VA.gov and reducing reliance on BTSSS. Our goal is to create a complete, self-contained travel reimbursement claim experience on VA.gov.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Authenticated
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

This is an iteration and enhancement of existing VA.gov travel pay functionality. In February 2026, the Travel Pay team launched complex claims on VA.gov, allowing Veterans to upload receipts for all travel claim expenses. However, additional travel reimbursement claim features still exist in the legacy BTSSS portal, including the ability to manually create appointments that don’t appear in the past appointments list. Veterans who currently file for travel pay on VA.gov are familiar with complex claims on VA.gov and also may be familiar with this process in the BTSSS portal.

`Product Brief`

**[Link to product brief](url goes here).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

`Link to relevant past research studies that inform this work. This helps build institutional knowledge and prevents duplicate efforts.`

> [!TIP]
> **Use the [Past Research Analysis Copilot Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-discovery/past-research-analysis-for-new-research-plan-prompt.md) to automatically find relevant research!**
>
> 1. Draft and commit your research plan
> 2. Open GitHub Copilot for your research plan. Click the Copilot icon on your file toolbar.
> 3. Copy and paste the prompt from the link above
> 4. Review the suggested studies and add the most relevant ones below

**Previous Studies:**
- [Link to Study 1 - Brief description, Date](url goes here)
- [Link to Study 2 - Brief description, Date](url goes here)
- [Link to Study 3 - Brief description, Date](url goes here)

**Key Takeaways from Previous Research:**
- `[Major finding or insight that informs this study]`
- `[Major finding or insight that informs this study]`
- `[Major finding or insight that informs this study]`

> [!NOTE]
> If this is the first research study for this product, you can note that here. You may also want to reference research from similar products or features that could provide relevant insights.

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
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

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

`Write a generalized statement that combines what you know + what you think will happen during the study.`

---
**Hypothesis**   

We hypothesize that Veterans will not have a strong preference for where they begin filing a travel claim for a missing appointment, as they may view both past appointments and claims as valid entry points. However, we believe the past appointments page may feel slightly more intuitive given the existing pattern of filing from past appointments on VA.gov.   

We anticipate that Veterans will be able to successfully enter the required appointment information and then create a claim, but may be confused by the user-generated appointment not appearing in the past appointments list. We also predict that users will expect VA to prevent them from creating duplicates, which could indicate a moderate risk of increased appointment and claim duplication.   

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

<details><summary>Examples of common research methods include</summary> 
	
- `Semi-structured interviews - appropriate for generative research`
- `Contextual inquiry - appropriate for generative research`
- `Card sorts - appropriate for generative and evaluative research; depending on the study design` 
- `Tree tests - appropriate for evaluative research`
- `Usability testing - appropriate for evaluative research`
- `User acceptance testing (UAT) - required before product release`

</details>

**[Enter methodology here]**

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [ ] **Remote**
- [ ] **In-person**
      
> [!NOTE]
> If in-person, include:

- `Location:` **[Enter text]**
- `Point of contact:` **[Enter text]**
- `Equipment used for research:` **[Enter text]**

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated interviews:** 
	
- [Link to conversation guide](url goes here)

**For moderated usability tests:** 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)



**If recruiting outside of Perigean’s participant database:**
- [Link to recruitment flyer](url goes here)
	
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


- `Veterans:` **[n]**
- `Caregivers:` **[n]**
- `Dependents:` **[n]**
- `Total:` **[n]**
- `Ideal completed sessions:` **[n]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `[Place primary criteria here between hash marks when in edit mode]`
- `primary criteria`
- `primary criteria`
- **`Add more criteria as needed`**

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `[Place secondary criteria here between hash marks when in edit mode]`
- `secondary criteria`
- `secondary criteria`
- **`Add more criteria as needed`**

## Screener Questions 📋

> [!NOTE]
> Perigean will use these screener questions **verbatim** to recruit and qualify participants. Write them as you want them asked.

> [!TIP]
> - Write questions in plain language that participants will easily understand. [**Examples of General and Assistive Tech Screener Questions**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/example-screener-questions.md) 
> - Clearly indicate the **qualifying response** that will make someone eligible
> - Include links to products or clear descriptions so participants understand what they're being asked about
> - The more screener questions you have, the harder it will be to recruit - prioritize your must-haves

### Screener Question Template

**`[Number].` [Screener Question Text]**
- **Qualifying response:** `[The answer that qualifies the participant]`
- **Disqualifying response:** `[Optional: The answer that disqualifies]`

### Your Study's Screener Questions

**`1.` [Enter your first screener question]**
- **Qualifying response:** 

**`2.` [Enter your second screener question]**
- **Qualifying response:** 

**`3.` [Enter your third screener question]**
- **Qualifying response:** 

> [!TIP]
> Add more screener questions as needed to address your primary and secondary recruitment criteria

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

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **[Enter full name]**	
- `Research guide writing and task development (usually but not always same as moderator):` **[Enter full name]**		
- `Participant recruiting & screening:`	**[Enter full name]**	
- `Project point of contact:` **[Enter full name]**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Enter full name]**	
- `Note-takers:` **[Enter full name]** ***or*** **[Designate Perigean]**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

## Approvals ✅
