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

	# Research plan for Authenticated Experience Team, Profile, 03/2026

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**Profile 2.0 introduces a reorganized, research-backed information architecture that aligns with Veteran mental models and creates space for new features. It restructures sections, updates naming, and groups related information more intuitively so the Profile can incorporate future additions without creating confusion.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Authenticated profile experience**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**Iterating on an existing product.**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113546).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

`Link to relevant past research studies that inform this work. This helps build institutional knowledge and prevents duplicate efforts.`

**Previous Studies:**
- [Link to Study 1 - Profile Secondary Research Report, consolidation of 39 previous profile research reports, 03/2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2025-03-profile-secondary-research/research-findings.md)
- [Link to Study 2 - Profile hub: Tree test, tree test to validate updates based on secondary research, 05/2025](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test)

**Key Takeaways from Previous Research:**
- `Veterans expect VA.gov Profile to be a “one-stop shop” and to reflect changes across VA.`
- `The proposed Profile hub navigation largely works, and Veterans reported high satisfaction.`
- `Veterans have discoverability and navigation challenges because they don’t know what Profile contains.`
- `Veterans want Profile to expand into “missing” categories—especially Dependents and Letters/Records—aligned to their mental models.`

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

> **NOTE:** If a Key Result does not have a ***Research Ops Plain Language*** equivalent, it does not map to research supporting it as a key result for the parent objective.

`Objective 1:  Optimize software delivery for Veteran impact.`  

> - **Key Result 1.1:** All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov.
  - ***Research Ops Plain Language:** Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov*
> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
  - ***Research Ops Plain Language:** Supports a production release that will measurably improved a product's Veteran-impacting KPIs.*

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
- `Reinventing Myself`
- `Putting Down Roots`
- `Retiring`
- `Aging`

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **Validate profile experience and architecture changes with participants.**

`2.` **Identify any bugs, with special focus on data quality and accessibility.**

`3.` **Identify new product feature ideas.** 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

`1.` **Ensure profile meets participant expectations and is a solid foundation for future work.**

`2.` **Bugs are identified, documented, and prioritized.**

`3.` **New feature ideas are documented and prioritized.** 

---

### Research questions

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

**`1.`Do participants have any challenges navigating to profile?**

**`2.`Do participants have difficulty navigating new profile categories?**

**`3.`Is there any information missing that participants want to see?**

**`4.`Are there any features missing that participants want to see? Such as wanting to edit or remove content?**

**`5.`Does the new experience meet participant expectations? Why or why not?**

**`6.`Are there any specific challenges screen reader or magnification participants face while using our new experience?**


### Hypotheses
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

**`1.`Participants will not have difficulty navigating to the profile.**

**`2.`Participants will not have difficulty navigating the new categories in profile.**

**`3.`The new categories and content will meet participants expectations.**

**`4.`Participants will want to be able to edit and remove all information they see.**

**`5.`Participants will not want to call the help desk when their information is incorrect.**

**`6.`Using VADS and USDS accessibility guidance will ensure an experience that is easy to use for screen reader and magnification participants.**

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

**Usability testing to evaluate the new profile experience.**

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

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated usability tests:** 
- [Link to conversation guide](url goes here)
- [Link to website](https://www.va.gov/profile)

	
## AT recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 

Our intended audience are Veterans recruited by Perigean. With a focus on screen reader and magnification participants. Recruitment demographics will be driven by OCTO’s target demographics outlined in the recruitment checker.

Recruitment will be broken into two cohorts:
- Cohort 1: Screen reader participants
- Cohort 2: Magnification participants

### Recruitment criteria

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **[10]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[10]**
- `Ideal completed sessions:` **[6]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

#### All cohorts
- `ALL participants have a verified VA.gov account`
- `ALL participants have signed into VA.gov in the last 3 months`
- `Half of participants have VA health care`

#### Cohort 1: Screen reader participants
- `5 are screen reader users`
   - `3 completed sessions required`

#### Cohort 2: Magnification participants
- `5 are magnification users`
   - `3 completed sessions required`

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

##### All cohorts
* `5 are age 55 - 64+`
* `5 identify as having a cognitive disability`
* `3 live in a rural area`
* `3 have no degree`
* `2 identify as being Black or African American`
* `2 identify as being Hispanic, Latino, or Spanish origin`
* `1 identifies as a woman`
* `1 identifies as being LGBTQ+`
* `1 identifies as being Asian`
* `1 identifies as being Native Hawaiian or other Pacific Islander`
* `1 identifies as being Native, American Indian or Alaska Native`

##### Cohort 1: Screen reader participants
* `Mix of beginner and experienced screen reader participants`
* `Mix of desktop and mobile screen reader participants`

##### Cohort 2: Magnification participants
* `Mix of beginner and experienced magnification user participants`
* `Mix of desktop and mobile magnification participants`

## Screener Questions 📋

### Screener Question Template

**`[Number].` [Screener Question Text]**
- **Qualifying response:** `[The answer that qualifies the participant]`
- **Disqualifying response:** `[Optional: The answer that disqualifies]`

### Your Study's Screener Questions

#### Cohort 1: Screen reader participants

**`1.` Do you need a screen reader every time you use the internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.**
- **Yes, I use a screen reader every time I use the internet**
- No, I do not use a screen reader every time I use the internet (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`2.` Have you signed into VA.gov with an ID.me or Login.gov account in the last 3 months?**
- **Yes, I have signed into the VA.gov website in the last 3 months**
- No, I have not signed into the VA.gov website in the last 3 months (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`3.` Being able to access your profile will be required to participate in this study. You can check your profile access by going to va.gov/profile/personal-information. Are you able to see your name and date of birth in your profile?**
- **Yes, I am able to check my name and date of birth in my VA.gov profile**
- No, I am not able to check my name and date of birth in my VA.gov profile (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`4.` To participate in this study you will be required to sign into VA.gov using your ID.me or Login.gov account and share your screen on Zoom. All sessions will be conducted in a secure setting and recordings deleted once the study is complete. To learn more about sharing your screen on Zoom you can go to this link: https://tinyurl.com/zoomshare2026. Are you willing, and able, to sign into VA.gov and share your screen during the session?**
- **Yes, I am willing and able to sign into my account and share my screen through Zoom**
- No, I am not willing and able to sign into my account and share my screen through Zoom (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`5.` What is the name of the screen reader technology that you will use during the Zoom session?**
* **JAWS for Windows**
* **Narrator for Windows**
* **NVDA for Windows**
* **Orca for Linux**
* **TalkBack for Android**
* **VoiceOver for Apple or iOS**
* **Windows Narrator for Windows**
* **Other**
* I don’t use a screen reader (DISQUALIFY)

**`6.` What VA benefits do you currently have or utilize? Select all that apply.**
* **Disability compensation**
* **Education and training**
* **Health care**
* **Housing assistance**
* **Life insurance**
* **Pension**
* **Other**

**`7.` Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed. This question helps us make sure we get feedback from all the people we serve.**
* **Yes**
* **No**
* **I prefer not to answer**

#### Cohort 2: Magnification participants

**`1.` Do you need a screen magnifier or magnification program every time you use the internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.**
* **Yes, I use a screen magnifier or magnification program every time I use the internet**
* No, I do not use a screen magnifier or magnification program every time I use the internet (DISQUALIFY)
* I’m not sure (DISQUALIFY)

**`2.` Have you signed into VA.gov with an ID.me or Login.gov account in the last 3 months?**
- **Yes, I have signed into the VA.gov website in the last 3 months**
- No, I have not signed into the VA.gov website in the last 3 months (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`3.` Being able to access your profile will be required to participate in this study. You can check your profile access by going to va.gov/profile/personal-information. Are you able to see your name and date of birth in your profile?**
- **Yes, I am able to check my name and date of birth in my VA.gov profile**
- No, I am not able to check my name and date of birth in my VA.gov profile (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`4.` To participate in this study you will be required to sign into VA.gov using your ID.me or Login.gov account and share your screen on Zoom. All sessions will be conducted in a secure setting and recordings deleted once the study is complete. To learn more about sharing your screen on Zoom you can go to this link: https://tinyurl.com/zoomshare2026. Are you willing, and able, to sign into VA.gov and share your screen during the session?**
- **Yes, I am willing and able to sign into my account and share my screen through Zoom**
- No, I am not willing and able to sign into my account and share my screen through Zoom (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`5.` What is the name of the screen magnifier or magnification technology that you will use during the Zoom session?**
* **MAGic**
* **Magnification for Android**
* **Magnifier for Windows**
* **SuperNova**
* **Virtual Magnifying Glass**
* **Zoom for Apple or iOS**
* **ZoomText**
* **Magnifixer**
* **Fixed settings to increase font size in web browser**
* **Other**
* I don’t use a screen magnifier or magnification technology (DISQUALIFY)

**`6.` What VA benefits do you currently have or utilize? Select all that apply.**
* **Disability compensation**
* **Education and training**
* **Health care**
* **Housing assistance**
* **Life insurance**
* **Pension**
* **Other**

**`7.` Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed. This question helps us make sure we get feedback from all the people we serve.**
* **Yes**
* **No**
* **I prefer not to answer**

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

**During kick-off**

- Review screener questions.
- Review recruitment email.
- Align on recruitment approach and timing.
- Review after kick-off tasks.

**After kick-off**

- Requesting Perigean to confirm and prepare participants prior to the session.
- To confirm with each participant:
  - The assistive technology matches what the participant marked on the survey.
  - Device they’ll be using for the session. Mobile (iOS or Android) or Desktop.
  - The participants level of experience with assistive technology. Do they describe themselves as beginner, intermediate, or expert?
  - If participants have any additional accommodations they need for the session.
- Walk participants through setting up, and using, Zoom share prior to the session starting. [Link to platform guidance.](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants#Recruiting-Recruitingformobilestudies)


### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

Study will be conducted on VA.gov production. Experience went live 03/13/2026.

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]**

### Length of sessions

#### Cohort 1: Screen reader participants
- `Session length:` **90 minutes**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **2 per day**

#### Cohort 2: Magnification participants
- `Session length:` **60 minutes**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **2 per day**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

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

## Mobile recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 

Our intended audience are Veterans recruited by Perigean. With a focus on mobile participants. Recruitment demographics will be driven by OCTO’s target demographics outlined in the recruitment checker.

### Recruitment criteria

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **[5]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[5]**
- `Ideal completed sessions:` **[3]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `ALL participants have a verified VA.gov account`
- `ALL participants have signed into VA.gov in the last 3 months`
- `ALL participants participate through their mobile device, tablets are allowed`
- `Half of participants have VA health care`

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

##### All cohorts
* `3 are age 55 - 64+`
* `3 identify as having a cognitive disability`
* `2 live in a rural area`
* `2 have no degree`
* `1 identifies as being Black or African American`
* `1 identifies as being Hispanic, Latino, or Spanish origin`
* `1 identifies as a woman`
* `1 identifies as being LGBTQ+`
* `1 identifies as being Asian`
* `1 identifies as being Native Hawaiian or other Pacific Islander`
* `1 identifies as being Native, American Indian or Alaska Native`

## Screener Questions 📋

### Screener Question Template

**`[Number].` [Screener Question Text]**
- **Qualifying response:** `[The answer that qualifies the participant]`
- **Disqualifying response:** `[Optional: The answer that disqualifies]`

### Your Study's Screener Questions

**`1.` Have you signed into VA.gov with an ID.me or Login.gov account in the last 3 months?**
- **Yes, I have signed into the VA.gov website in the last 3 months**
- No, I have not signed into the VA.gov website in the last 3 months (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`2.` Being able to access your profile will be required to participate in this study. You can check your profile access by going to va.gov/profile/personal-information. Are you able to see your name and date of birth in your profile?**
- **Yes, I am able to check my name and date of birth in my VA.gov profile**
- No, I am not able to check my name and date of birth in my VA.gov profile (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`3.` To participate in this study you will be required to sign into VA.gov using your ID.me or Login.gov account and share your screen on Zoom. All sessions will be conducted in a secure setting and recordings deleted once the study is complete. To learn more about sharing your screen on Zoom you can go to this link: https://tinyurl.com/zoomshare2026. Are you willing, and able, to sign into VA.gov and share your screen during the session?**
- **Yes, I am willing and able to sign into my account and share my screen through Zoom**
- No, I am not willing and able to sign into my account and share my screen through Zoom (DISQUALIFY)
- I’m not sure (DISQUALIFY)

**`4.` Are you able to join the research session from a smartphone, such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.**
* **Yes, I can join from a smartphone**
* No, I cannot join from a smartphone (DISQUALIFY)
* I’m not sure (DISQUALIFY)

**`5.` What VA benefits do you currently have or utilize? Select all that apply.**
* **Disability compensation**
* **Education and training**
* **Health care**
* **Housing assistance**
* **Life insurance**
* **Pension**
* **Other**

**`6.` Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed. This question helps us make sure we get feedback from all the people we serve.**
* **Yes**
* **No**
* **I prefer not to answer**

**`7.` Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.**
* **Yes**
* **No**
* **I prefer not to answer**

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

**During kick-off**

- Review screener questions.
- Review recruitment email.
- Align on recruitment approach and timing.
- Review after kick-off tasks.

**After kick-off**

- Requesting Perigean to confirm and prepare participants prior to the session.
- To confirm with each participant:
  - Device they’ll be using for the session. Mobile (iOS or Android) or Desktop.
  - If participants have any additional accommodations they need for the session.
- Walk participants through setting up, and using, Zoom share prior to the session starting. [Link to platform guidance.](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants#Recruiting-Recruitingformobilestudies)


### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

Study will be conducted on VA.gov production. Experience went live 03/13/2026.

**Pilot completed with AT participant recruitment.**

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]**

### Length of sessions

- `Session length:` **60 minutes**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **2 per day**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

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

- `Moderator:` **Janelle Finnerty**	
- `Research guide writing and task development (usually but not always same as moderator):` **Janelle Finnerty**	
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Janelle Finnerty**	
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Enter full name]**	
- `Note-takers:` **Janelle will manage note-taker invites**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **Janelle will manage note-taker invites**

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
