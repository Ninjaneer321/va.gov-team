---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience Team, Profile, 03/2026"
date: 2026-03-30
last_updated: 2026-03-30
team: "Authenticated Experience Team"
product: "Profile 2.0"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Profile 2.0 introduces a reorganized, research-backed information architecture that aligns with Veteran mental models and creates space for new features. It restructures sections, updates naming, and groups related information more intuitively so the Profile can incorporate future additions without creating confusion."
  product_location: "Authenticated profile experience"
  user_familiarity: "Iterating on an existing product"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/issues/113546"

# Research Design
methodology: "Usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate profile experience and architecture changes with participants"
  - goal_2: "Identify any bugs, with special focus on data quality and accessibility"
  - goal_3: "Identify new product feature ideas"

research_questions:
  - "Do participants have any challenges navigating to profile?"
  - "Do participants have difficulty navigating new profile categories?"
  - "Is there any information missing that participants want to see?"
  - "Are there any features missing that participants want to see? Such as wanting to edit or remove content?"
  - "Does the new experience meet participant expectations? Why or why not?"
  - "Are there any specific challenges screen reader or magnification participants face while using our new experience?"

hypotheses:
  - "Participants will not have difficulty navigating to the profile"
  - "Participants will not have difficulty navigating the new categories in profile"
  - "The new categories and content will meet participants' expectations"
  - "Participants will want to be able to edit and remove all information they see"
  - "Participants will expect any information in their profile to be used across the VA"
  - "Using VADS and USDS accessibility guidance will ensure an experience that is easy to use for screen reader and magnification participants"

expected_outcomes: "Ensure profile meets participant expectations and is a solid foundation for subsequent work. Bugs are identified, documented, and prioritized. New feature ideas are documented and prioritized."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Focus on screen reader and magnification participants"
  
  primary_criteria_at:
    - "ALL participants use AT technology"
    - "ALL participants have a verified VA.gov account"
    - "ALL participants are willing and able to share their screen on Zoom"
    - "Half of participants have VA health care"
    
  primary_criteria_mobile:
    - "ALL participants participate through their mobile device, tablets are allowed"
    - "ALL participants have a verified VA.gov account"
    - "ALL participants are willing and able to share their screen on Zoom"
    - "Half of participants have VA health care"

participants:
  veterans_at: 10
  veterans_mobile: 5
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "[Enter pilot date]"
  pilot_participant: "[Enter name]"
  research_dates_at: "04/13 – 04/24"
  research_dates_mobile: "04/27 – 05/01"
  
session_details_at:
  duration_minutes: 90
  buffer_minutes: 30
  max_sessions_per_day: 2
  
session_details_mobile:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Optimize software delivery for Veteran impact"
    key_results: 
      - "Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov"
      - "Supports a production release that will measurably improve a product's Veteran-impacting KPIs"
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Supports this product's OIT portfolio in improving customer satisfaction by 3% or more"
      - "Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services"
      - "Supports the delivery of at least one release that directly addresses a documented user pain point"
       
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Reinventing Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[03/2025 Profile Secondary Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2025-03-profile-secondary-research/research-findings.md)"
    - "[05/2025 Profile hub: Tree test](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test)"
    
tags:
  - "profile"
  - "usability-testing"
  - "accessibility"
  - "assistive-technology"
  - "veterans"
---

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your research plan below.** 
> 
> Use the [GitHub Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed research plan.

# Research Plan for Authenticated Experience Team, Profile, 03/2026

> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.*

## Background 🏗️

<details><summary>Briefly describe the background of your product.</summary>

`What problem is your product trying to solve?`

**Profile 2.0 introduces a reorganized, research-backed information architecture that aligns with Veteran mental models and creates space for new features. It restructures sections, updates naming, and groups related information more intuitively so the Profile can incorporate future additions without creating confusion.**

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Authenticated profile experience**

`What is Veterans' familiarity with this tool? Is this a new product or an iteration on an existing one?`

**Iterating on an existing product.**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113546).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

**Previous Studies:**
- [03/2025 Profile Secondary Research Report - consolidation of 39 previous profile research reports](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2025-03-profile-secondary-research/research-findings.md)
- [05/2025 Profile hub: Tree test - tree test to validate updates based on secondary research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test)

**Key Takeaways from Previous Research:**
- Veterans expect VA.gov Profile to be a "one-stop shop" and to reflect changes across VA
- The proposed Profile hub navigation largely works, and Veterans reported high satisfaction
- Veterans have discoverability and navigation challenges because they don't know what Profile contains
- Veterans want Profile to expand into "missing" categories—especially Dependents and Letters/Records—aligned to their mental models

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md)

<details><summary>Which OCTO priorities does this research support?</summary>

> **NOTE:** If a Key Result does not have a ***Research Ops Plain Language*** equivalent, it does not map to research supporting it as a key result for the parent objective.

`Objective 1: Optimize software delivery for Veteran impact.`

> - **Key Result 1.1:** All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov.
>   - ***Research Ops Plain Language:** Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov*
> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
>   - ***Research Ops Plain Language:** Supports a production release that will measurably improve a product's Veteran-impacting KPIs.*

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
>   - ***Research Ops Plain Language:** Supports this product's OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.*
> - **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points.
>   - ***Research Ops Plain Language:** Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
>   - ***Research Ops Plain Language:** Supports the delivery of at least one release that directly addresses a documented user pain point within this product.*

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey? Are there moments that matter?</summary>

- `Getting Out`
- `Starting Up`
- `Taking Care of Myself`
- `Reinventing Myself`
- `Putting Down Roots`
- `Retiring`
- `Aging`

</details>

> [!TIP]
> Delete journeys not supported by this research.

## Research Goals 🥅

`What are you trying to learn from this research?`

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **Validate profile experience and architecture changes with participants.**

`2.` **Identify any bugs, with special focus on data quality and accessibility.**

`3.` **Identify new product feature ideas.**

### Outcome

`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**Ensure profile meets participant expectations and is a solid foundation for subsequent work. Bugs are identified, documented, and prioritized. New feature ideas are documented and prioritized.**

---

### Research questions

> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***

`What will I do with what I learn from this question?`

`Does this question serve the goals of my study?`

**`1.` Do participants have any challenges navigating to profile?**

**`2.` Do participants have difficulty navigating new profile categories?**

**`3.` Is there any information missing that participants want to see?**

**`4.` Are there any features missing that participants want to see? Such as wanting to edit or remove content?**

**`5.` Does the new experience meet participant expectations? Why or why not?**

**`6.` Are there any specific challenges screen reader or magnification participants face while using our new experience?**

### Hypotheses

> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!

**Think through these prompts to develop strong hypotheses:**

`What do you intend to learn and measure from this study?`

`What do you already know about this problem space?`

`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don't skip this step!)`

`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

1. Participants will not have difficulty navigating to the profile.
2. Participants will not have difficulty navigating the new categories in profile.
3. The new categories and content will meet participants' expectations.
4. Participants will want to be able to edit and remove all information they see.
5. Participants will expect any information in their profile to be used across the VA.
6. Using VADS and USDS accessibility guidance will ensure an experience that is easy to use for screen reader and magnification participants.

---

## Methodology 🛠️

***Describe the method you're planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.***

<details><summary>Examples of common research methods include</summary>

- `Semi-structured interviews - appropriate for generative research`
- `Contextual inquiry - appropriate for generative research`
- `Card sorts - appropriate for generative and evaluative research; depending on the study design`
- `Tree tests - appropriate for evaluative research`
- `Usability testing - appropriate for evaluative research`
- `User acceptance testing (UAT) - required before product release`

</details>

**Usability testing to evaluate the new profile experience.**

<details><summary>Additional resources</summary>

- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support.
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/conducting-mobile-sessions-v1)
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html)

</details>

### Location

Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research.

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

**For moderated usability tests:**
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2026-04-profile2.0-postlaunch-usabilitytesting/conversation-guide.md)
- My VA: [va.gov/my-va](http://va.gov/my-va)
- Profile: [va.gov/profile](http://va.gov/profile)

## Recruitment 🎯 – AT Recruitment

*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources:
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research.
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach

Our intended audience are Veterans recruited by Perigean. With a focus on screen reader and magnification participants. Recruitment demographics will be driven by OCTO's target demographics outlined in the [recruitment checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx).

Recruitment will be broken into two cohorts:

- **Cohort 1:** Screen reader participants (5 participants, 3 completed sessions required)
- **Cohort 2:** Magnification participants (5 participants, 3 completed sessions required)

### Recruitment criteria

#### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **10**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **10**
- `Ideal completed sessions:` **6**

#### Primary criteria (must-haves)

*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?*

- **ALL** participants use AT technology
- **ALL** participants have a verified VA.gov account
- **ALL** participants are willing and able to share their screen on Zoom
- **Half** of participants have VA health care

#### Secondary criteria (nice-to-haves)

*What criteria would strengthen your results?*

##### All cohorts

- Mix of desktop and mobile devices
- 5 are age 55 – 64+
- 5 identify as having a cognitive disability
- 3 live in a rural area
- 3 have no degree
- 2 identify as being Black or African American
- 2 identify as being Hispanic, Latino, or Spanish origin
- 1 identifies as a woman
- 1 identifies as being LGBTQ+
- 1 identifies as being Asian
- 1 identifies as being Native Hawaiian or other Pacific Islander
- 1 identifies as being Native, American Indian or Alaska Native

### Screener Questions 📋

> [!NOTE]
> Perigean will use these screener questions **verbatim** to recruit and qualify participants. Write them as you want them asked.

> [!TIP]
> - Write questions in plain language that participants will easily understand. [**Examples of General and Assistive Tech Screener Questions**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/example-screener-questions.md)
> - Clearly indicate the **qualifying response** that will make someone eligible
> - Include links to products or clear descriptions so participants understand what they're being asked about
> - The more screener questions you have, the harder it will be to recruit - prioritize your must-haves

**`1.` Do you use a screen reader, screen magnifier, or magnification program every time you use the internet?**
- **Qualifying response:** Yes, I use a screen reader, screen magnifier, or magnification program every time I use the internet
- **Disqualifying response:** No, I do not use a screen reader, screen magnifier, or magnification program every time I use the internet; I'm not sure

**`2.` Are you able to access your VA.gov profile to see your name and date of birth at va.gov/profile/personal-information?**
- **Qualifying response:** Yes, I am able to review my name and date of birth in my VA.gov profile
- **Disqualifying response:** No, I am not able to review my name and date of birth in my VA.gov profile; I'm not sure

**`3.` To participate in the study, you’ll need to sign into VA.gov, share your screen on Zoom, and use your screen reader, screen magnifier, or magnification program during the session. Are you willing and able to meet these requirements?**
- **Qualifying response:** Yes
- **Disqualifying response:** No; I'm not sure

**`4.` What is the name of the screen reader, screen magnifier, or magnification program that you will use during the Zoom session? (Open input field)**
- If they reply [JAWS, Narrator, NVDA, Orca, TalkBack, VoiceOver, Windows Narrator] RECORD as screen reader participant
- If they reply [Magic, Magnification, Magnifier, SuperNova, Virtual Magnifying Glass, Zoom for Apple, ZoomText, Magnifixer] RECORD as screen magnifier participant
- If they reply [increase font size, zoom in the browser] RECORD as potential screen magnifier participant and follow-up
   - Perigean follow-up: Ask what percentage the participant zooms to. If 200% or greater, RECORD as screen magnifier user
- If they reply something non-committal, such as [I’m not sure] RECORD as potential participant
   - Perigean follow-up: Ask participants for details on their technology.
     - If they can answer one of the above, RECORD as the respective technology recruitment type
     - If we cannot get specifics, DISQUALIFY
- If they reply something non-digital, such as [magnifying glass], DISQUALIFY
- If unsure whether someone qualifies, please ask Janelle

**`5.` How long have you been using this screen reader, screen magnifier, or magnification program?**
- **Qualifying response:** At least 1 year
- **Disqualifying response:** Less than 1 year

**`6.` What VA benefits do you currently have or use? Select all that apply.**
- Disability compensation
- Education and training
- Health care
- Housing assistance
- Life insurance
- Pension
- Other

**`7.` Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.**
- Yes
- No
- I prefer not to answer

## Timeline 🗓️

> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior.**

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **04/02 12:00 – 2:00 PM EST, 04/03 10:00 AM – 1:00 PM EST**

**During kick-off**

- Review screener questions.
- Review recruitment email.
- Align on recruitment approach and timing.
- Review after kick-off tasks.

**After kick-off**

- Requesting Perigean to confirm and prepare participants prior to the session.
- To confirm with each participant:
  - The assistive technology matches what the participant marked on the survey.
  - Device they'll be using for the session. Mobile/Tablet (iOS or Android) or Desktop.
  - If participants have any additional accommodations they need for the session.
- Walk participants through setting up and using Zoom share prior to the session starting. [Link to platform guidance.](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants#Recruiting-Recruitingformobilestudies)

### Prepare

*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

Study will be conducted on VA.gov production. Experience went live 03/13/2026.

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.**

> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]**

### Research sessions

- `Planned dates of research:` **04/13 – 04/24**

### Length of sessions

- `Session length:` **90 minutes**
- `Buffer time between sessions:` **30 minutes**
- `Maximum Sessions per day:` **2 per day**

### Availability

When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**.

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants*** **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.; 12 time slots for 6 participants)**. This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

**Week 1: Target week**

- 04/13, Monday, 9:00 AM – 3:00 PM EST
- 04/14, Tuesday, 9:00 AM – 4:00 PM EST
- 04/15, Wednesday, 9:00 AM – 4:00 PM EST
- 04/16, Thursday, 9:00 AM – 2:00 PM EST
- 04/17, Friday, 9:00 AM – 4:00 PM EST

**Week 2: For reschedules**

- 04/18, Monday, 9:00 AM – 3:00 PM EST
- 04/19, Tuesday, 9:00 AM – 4:00 PM EST
- 04/20, Wednesday, 9:00 AM – 4:00 PM EST
- 04/21, Thursday, 9:00 AM – 2:00 PM EST
- 04/22, Friday, 9:00 AM – 4:00 PM EST

## Recruitment 🎯 – Mobile Recruitment

*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources:
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research.
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach

Our intended audience are Veterans recruited by Perigean. With a focus on mobile participants. Recruitment demographics will be driven by OCTO's target demographics outlined in the [recruitment checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx).

### Recruitment criteria

#### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **5**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **5**
- `Ideal completed sessions:` **3**

#### Primary criteria (must-haves)

*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?*

- **ALL** participants participate through their mobile device, tablets are allowed
- **ALL** participants have a verified VA.gov account
- **ALL** participants are willing and able to share their screen on Zoom
- **Half** of participants have VA health care

#### Secondary criteria (nice-to-haves)

*What criteria would strengthen your results?*

- 3 are age 55 – 64+
- 3 identify as having a cognitive disability
- 2 live in a rural area
- 2 have no degree
- 1 identify as being Black or African American
- 1 identify as being Hispanic, Latino, or Spanish origin
- 1 identifies as a woman
- 1 identifies as being LGBTQ+
- 1 identifies as being Asian
- 1 identifies as being Native Hawaiian or other Pacific Islander
- 1 identifies as being Native, American Indian or Alaska Native

### Screener Questions 📋

> [!NOTE]
> Perigean will use these screener questions **verbatim** to recruit and qualify participants. Write them as you want them asked.

> [!TIP]
> - Write questions in plain language that participants will easily understand.
> - Clearly indicate the **qualifying response** that will make someone eligible
> - Include links to products or clear descriptions so participants understand what they're being asked about
> - The more screener questions you have, the harder it will be to recruit - prioritize your must-haves

**`1.` Are you able to join the research session from a smartphone, such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.**
- **Qualifying response:** Yes, I can join from a smartphone
- **Disqualifying response:** No, I cannot join from a smartphone; I'm not sure

**`2.` Are you able to access your VA.gov profile to see your name and date of birth at va.gov/profile/personal-information?**
- **Qualifying response:** Yes, I am able to review my name and date of birth in my VA.gov profile
- **Disqualifying response:** No, I am not able to review my name and date of birth in my VA.gov profile; I'm not sure

**`3.` To participate in the study, you'll need to sign into VA.gov and share your screen on Zoom during the session. Are you willing and able to meet these requirements?**
- **Qualifying response:** Yes
- **Disqualifying response:** No; I'm not sure

**`4.` What VA benefits do you currently have or use? Select all that apply.**
- Disability compensation
- Education and training
- Health care
- Housing assistance
- Life insurance
- Pension
- Other

**`5.` Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.**
- `Yes` / `No` / `I prefer not to answer`

**`6.` Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.**
- `Yes` / `No` / `I prefer not to answer`

## Timeline 🗓️

> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior.**

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **04/17 10:00 AM – 1:00 PM EST**

**During kick-off**

- Review screener questions.
- Review recruitment email.
- Align on recruitment approach and timing.
- Review after kick-off tasks.

**After kick-off**

- Requesting Perigean to confirm and prepare participants prior to the session.
- To confirm with each participant:
  - Device they'll be using for the session. Mobile (iOS or Android) or Desktop.
  - If participants have any additional accommodations they need for the session.
- Walk participants through setting up and using Zoom share prior to the session starting. [Link to platform guidance.](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants#Recruiting-Recruitingformobilestudies)

### Prepare

*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

Study will be conducted on VA.gov production. Experience went live 03/13/2026.

**Pilot completed with AT participant recruitment.**

### Research sessions

- `Planned dates of research:` **04/27 – 05/01**

### Length of sessions

- `Session length:` **60 minutes**
- `Buffer time between sessions:` **30 minutes**
- `Maximum Sessions per day:` **2 per day**

### Availability

When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**.

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.

**Part 1: Target days**

- 04/27, Monday, 9:00 AM – 3:00 PM EST
- 04/28, Tuesday, 9:00 AM – 4:00 PM EST
- 04/29, Wednesday, 9:00 AM – 4:00 PM EST

**Part 2: For reschedules**

- 04/30, Thursday, 9:00 AM – 2:00 PM EST
- 05/01, Friday, 9:00 AM – 4:00 PM EST

## Team Roles 🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** VA's GitHub policy has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Janelle Finnerty**
- `Research guide writing and task development:` **Janelle Finnerty**
- `Participant recruiting & screening:` **Perigean**
- `Project point of contact:` **Janelle Finnerty**
- `Accessibility specialist (for screen reader sessions only):` **TBD**
- `Note-takers:` **Janelle will manage note-taker invites**
- `Observers:` **Janelle will manage observer invites**

## Approvals ✅

> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).

- `Reviewed by OCTO Product Owner, Chante Lantos-Swett on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
