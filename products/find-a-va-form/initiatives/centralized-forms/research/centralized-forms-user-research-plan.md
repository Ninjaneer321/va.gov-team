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

	# Research Plan for Public Websites, Centralized Forms, March 2026

## Background 🏗️
<details><summary>Forms are a necessary part of managing healthcare and benefits for veterans and their families. UX Research to date suggests that users who know which form they need can usually find it, but often struggle to identify the right actions, navigate between different parts of the site, and interpret form-related information. Content redundancy and inconsistent navigation (e.g., between Benefit Hubs and the Forms area) cause cognitive load and increase time on task. A significant pain point is also the handoff when users must download, complete, and upload forms.

The Centralized Forms initiative aims to address these issues by:
- Centralizing all digitized forms and form-related tasks (URL updates)
- Streamlining site navigation and reducing duplication (e.g., merging "How to Apply" content into the Form Detail page)
This deduplication of information and simplified navigation should have the following outcomes:

For Veterans and 3rd Parties
Increased findability of specific forms
Improved search results (SEO optimization)
Increased discoverability of form-related information and how to submit the form
Increased understanding of form-related content and preparation information
For VA Staff
Decreased content maintenance time of duplicative form related information
Decreased maintenance of referring links
Decreased IA design time
This research plan focuses on evaluating the new centralized experience rather than comparing several divergent prototypes, but it is still essential to probe user mental models, navigation expectations, and informational needs.
</summary>
	
`What problem is your product trying to solve?`

**Centralizing form-related content to simplify navigation, maintenance, and improve user preparedness to complete forms.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Unauthenticated**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**Iteration**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/97c053f843f45bdb92f7576a98ef64f7d192369f/products/find-a-va-form/initiatives/centralized-forms/centralized-forms-iteration.md#L4).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

**Previous Studies:**
- [Link to Study 1 - Brief description, Date](url goes here)

**Key Takeaways from Previous Research:**
- `[Major finding or insight that informs this study]`
- `[Major finding or insight that informs this study]`
- `[Major finding or insight that informs this study]`
</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

> **NOTE:** If a Key Result does not have a ***Research Ops Plain Language*** equivalent, it does not map to research supporting it as a key result for the parent objective.

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
	
- `Starting Up`
- `Taking Care of Myself`
- `Reinventing Myself`
- `Retiring`
- `Aging`

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **Assess Findability & Navigation: Determine whether users can successfully locate forms and critical information.**

`2.` **Evaluate Comprehension & Timing of Information on the Form Detail page: Assess if users understand form eligibility, associated tasks, what is needed to complete pre/post form submission, and the intended audience for each form at the right moments in their journey.**
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**This research will help optimize the design of the Form Detail page. It will identify user requirements for form centralization (e.g. navigational elements/interaction patterns, relationship between different components of form information such as eligibility, supporting documentation, next steps, other forms and application CTA’s) and enable a comprehensive design iteration.

In order to proceed, we would like to see the following: 
- ≥80% participants can confirm if a form applies to them within 2 interactions.
- ≥75% can correctly identify and initiate their preferred submission option (online/PDF/help) within 2 interactions.
- Confidence to start the form ≥4/5 for ≥70% of participants.
** 

---

### Research questions

**`1.`Can users identify and access the form they need in the new centralized flow? Sub-questions: 1A. How do users conceptualize the navigation and relationship between forms, benefits, and site sections (task, benefit, forms library, etc.)?
1B. Are users confused by the transition between benefit hubs and centralized forms?
1C. What navigational elements help or confuse users (breadcrumbs, links, Headers, TOC, CTAs)?
**

**`2.`Is information presented in the new centralized/Form About page at the right step, in the right detail? Sub-questions: 2A. Where do users expect to find “what do I need”, “am I eligible”, “how to submit”, and “what happens next” content? In what order?
2B. - Does combining "About" and "How to Apply" content enable users to more easily find the information they need to be prepared to complete their form?
2C. Are the different options for form submission clear, understandable and easy to identify?
**

**`3.`What risks, if any, are there of combining the About forms and How to Apply pages for Veterans and their families? 3A. **Special Cases & Edge Scenarios:** Identify any confusion around forms that are combined (serve multiple benefits/audiences), non-VA forms, or forms without numbers.**

**`4.`Does the new Detail Page template overall work for both simple and complex forms (minimal/maximal?)**

### Hypotheses
---

**1. Centralizing forms will reduce user frustration and confusion with duplicate information. Users will prefer to have a single page with this information.** 

**2. Increased detail on the Form Detail page will help Veterans & their families have more confidence (>4/5) that they are prepared to fill out and submit forms regardless of where they navigated from.** 

**3. Standardizing CTAs (online form, download, find eligibility information) with key instructions and will improve findability and streamline critical actions so that users can:
Identify whether it is the right form for them
Understand available submission options
Identify what is needed to submit and prepare before starting form
Identify related or supporting forms
Identify options for getting help with the form**

**4. The PDF download process is clear and easy to use with sufficient detail.**

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

**Moderated usability test. 12 participants including 4 using AT (2 screenreader and 2 screen magnifier). Mix of 8 Veterans and 4 family/caregivers.
5 min warm up/background questions
5 minutes discussion on current navigation (search engine or homepage to a form to help ground user in real-world use & context)
40 minutes prototype evaluation
Complex form- 25 minutes- either 526 or Education Benefits
Identifying and recalling key information, evaluation of preparedness & confidence
Evaluate information hierarchy and visibility of key actions
Complete task of moving on to the online introduction
Minimal form- 15 minutes
Identifying and recalling key information, evaluation of preparedness & confidence
Evaluation of download flow
10 minutes wrap-up discussion

**

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

- [X] **Remote**
- [ ] **In-person**
      
## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated interviews:** 
	
- [Link to conversation guide](url goes here)

**For moderated usability tests:** 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

	
## Recruitment 🎯	

### Recruitment approach
Veterans and Family members/caregivers who have and have not previously completed similar forms with the VA.

### Recruitment criteria
- Target completes: 12; **Total recruited: 18** (including **≥6 AT** to ensure ≥4 AT completes).
- Must-have: Veteran/caregiver/family; recent form experience *or* near-term need; AT mix.
- Nice-to-have: No prior 526 or education form experience; submission mode preferences.

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **12**
- `Caregivers:` **3**
- `Dependents:` **3**
- `Total:` **18**
- `Ideal completed sessions:` **12**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `9 Have filled out at least one form with VA in the last year`
- `3 participants have never filled out a VA form but are eligible to`
- `6 have not filled out a VA form in the last year`
- '2 screenreader users'
- **`Recruit a mix of gender, ages, cognitive abilities, etc.`**

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `3 Veteran participants who have never completed the 526 Disability Form (or in the last five years)
- '3 Participants who have never completed the Education Benefits form (or in the last five years)
Nice to have: Form submission type
- `3 Participants who typically complete forms using a PDF/paper
- '3 Participants who typically complete forms online'
- '3 Participants who have done both in the past'
- '3 participants who have previously had VA staff help them complete a form'

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

**`1.` Which of the following VA forms have you submitted in the last 5 years? (Select all that apply)**
- 21-526EZ Application for Disability Benefits
- 22-1990 Application for VA Education Benefits
- 10-10EZ Application for Healthcare Benefits
- None of the above forms, but another form (specify an example)
- I’ve never filled out and submitted a form with VA
- **Qualifying response: After meeting recruitment quota** 

**`2.` How do you typically submit forms to the VA? Select all that apply**
-Print a PDF and submit by mail
-Download and upload a PDF
-In person at a VA facility
-Using a VSO or Accredited Representative
-Online forms
- **Qualifying response: After meeting recruitment quota** 
## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **March 27, 2026**

### Prepare

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 

- `Pilot participant name:` **TBD**
- `Date and time of pilot session:` **March 30, 2026** 

### Research sessions
- `Planned dates of research:` **April,6,2026 - April 15, 2026**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **1 hour (1.5 hour AT)**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **30 mins**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **3**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

- `[04/06, M, 09:00 AM-15:00 PM] EST`
- `[04/07, Tu, 10:00 AM-17:00 ] EST`
- `[04/08, W, 11:00 AM/PM-17:00] EST`
- `[04/09, Th, 9:00 AM/PM-17:00] EST`
- `[04/10, Fr, 9:00 AM/PM-17:00 AM/PM] EST`
- `Add more slots as needed following week same time slots, but try to front load`
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Tina Kambil**	
- `Research guide writing and task development (usually but not always same as moderator):` **Tina Kambil**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Tina Kambil**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **Jacqueline Quintanilla**	
- `Note-takers:` **Tean** ***and*** **Designate Perigean**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **Tim Shundo**
- **Dave Pickett**
- **Randi Hecht**
- **Team members**

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by Randi Hecht on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
