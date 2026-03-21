---
# Research Plan Metadata
title: "Research Plan for VA Mobile App Homescreen Redesign, March 2026"
date: 2026-03-11
last_updated: 2026-03-11
team: "VA Mobile App (Core Mobile)"
product: "VA Health and Benefits Mobile App"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "VA Health and Benefits Mobile App has limited real estate on the homescreen, and additional features expected to be added this year will further take up homescreen space. The team seeks to understand whether planned homescreen design concepts align with Veterans' expectations and priorities and successfully help Veterans access key information and complete important tasks."
  product_location: "VA Health and Benefits Mobile App (authenticated experience)"
  user_familiarity: "Iteration on existing product that Veterans currently use"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Homescreen%20Redesign%20Product%20Brief"

# Research Design
methodology: "Remote moderated usability testing with clickable medium-fidelity Figma prototype"
research_format:
  location: remote
  moderated: true

# Research Goals & Questions
research_goals:
  - goal_1: "Understand users' expectations for homescreen content and navigation"
  - goal_2: "Understand how users interpret and use new design concept's homescreen content and capabilities"
  - goal_3: "Understand any points of confusion for users on the homescreen content and navigation, including for users with cognitive disabilities"
research_questions:
  - "What content do users expect to find on the homescreen?"
  - "Where do users expect to find their Veteran status card, disability rating and payments, and dependents verification?"
  - "Do users expect due dates for some or all 'Action required' items?"
  - "What level of detail do users need for homescreen content so that they can take action and complete tasks?"
  - "Do users notice, understand, and take action on items in 'Action required' and 'Activity' sections?"
  - "When tasks are surfaced on the homescreen, how do users want and expect to complete them?"
  - "When provided with the opportunity to complete tasks such as paying copay and refilling prescription without leaving the homescreen, do users understand what to do and choose to do that instead of navigating away?"
  - "What causes users confusion or misunderstandings?"
  - "Are there any terms or processes that cause particular confusion for users with cognitive disabilities?"

hypotheses:
  - "Users will expect to find new content such as new Secure messages and items requiring their review and action on the homescreen."
  - "Users very familiar with the app will expect to find Veteran status card, dependents, and disability rating and payments on the homescreen as reflects the current live app layout."
  - "Users less familiar with the app will expect to find Veteran status card and dependents verification in Profile."
  - "Users less familiar with the app will expect to find disability payments and rating in Profile or in Payments."
  - "Users will sometimes want more information than is presented on homescreen to help them with some tasks such as managing prescriptions, due dates for Action required items, or for appointments prep."
  - "Users will notice and give more weight to 'Action required' items because of the label and design styling of the section."
  - "Users will be able to describe in their own words what the 'Action required' section is for."
  - "Users will want to take action on both 'Action required' items and 'Activity' items that usually are of top concern to Veterans such as new appointment information, prescription updates, travel pay."
  - "Users may not be able to articulate exactly what kind of items belong in the 'Activity' section."
  - "Users will want to complete tasks as directly as possible."
  - "Users will expect to be able to complete tasks directly from the homescreen when there is a call to action button associated with the item such as 'Pay copay' for a medical copayment."
  - "Since homescreen content uses plain language and short, to-the-point phrases, users will generally understand terms and calls to action."
  - "Users may experience minor confusion due to lack of familiarity with specific items such as 'evidence request.'"
expected_outcomes: "We plan to incorporate insights to guide design decisions for homescreen and related actions so that we evolve current design concepts based on Veterans' needs and expectations. Insights will impact design refinements and influence future feature prioritization for homescreen functionality. We will base homescreen updates on mental model alignment for where users expect to find featues and how users expect to interact with homescreen content. We will work with ADE on ptoential addtional research as designs become more developed."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation"

  primary_criteria:
    - "Be on a mobile device or tablet (recruit mix of device types)"
    - "During the session, be willing to share a web browser window on their device"
    - "Have a working microphone"
    - "Have Zoom downloaded to their device prior to the session and know how to share their screen"
    - "Have used the VA Health and Benefits app at least once in the last year"
    - "Have a service-related disability rating of at least 10%"

  secondary_criteria:
    - "At least 5, age 55 or older"
    - "At least 5, self-reported cognitive disability"
    - "At least 3, rural"
    - "At least 3, identifies as gender other than male"
    - "At least 6, identifies as other than white/Caucasian"
    - "At least 3, no degree"
  screener_questions:
    - question: "Which device(s) would you use to join the research session?"
      qualifying_response: "Mobile phone – Android, Mobile phone – iPhone, Tablet – Android, or Tablet – iPad"
    - question: "How often did you use the Veterans Affairs Health and Benefits App on your smartphone or tablet in the past year?"
      qualifying_response: "I used it rarely, I used it at least once a month, or I used it at least once a week"
    - question: "What is your service-related disability rating?"
      qualifying_response: "10% or higher"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "Yes (qualify and recruit at least 5) or No (qualify)"

participants:
  veterans: 14
  caregivers: 0
  dependents: 0
  total_recruited: 14
  completed_sessions_goal: 9

# Timeline & Sessions
timeline:
  pilot_sessions:
    - date: "2026-03-17"
      participant: "Matthew Sweeney"
  
  research_dates: "2026-03-30 to 2026-04-03"
  research_review_submission: "2026-03-13"

session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4

# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Optimize software delivery for Veteran impact"
    key_results:
      - "Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs (Supports a production release that will measurably improve a product's Veteran-impacting KPIs)"
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Key Result 3.1: Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more"
      - "Key Result 3.3: 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system"

veteran_journey_phases:
  - "Taking Care of Myself"

# Research Repository Tracking
related_research:
  previous_studies:
    - "Personalized Home Screen Evaluative Research, April 2024 - https://github.com/department-of-veterans-affairs/va.gov-team/blob/35af580d97e75798e00779173cdd133e18870dd0/products/va-mobile-app/research/[research-plan-link]"
    - "VA Mobile App Information Architecture & Navigation: Evaluative Research - Usability Study, August 2022 - https://github.com/department-of-veterans-affairs/va.gov-team/blob/35af580d97e[research-plan-link]"

tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "BNFT: Disability"
  - "BNFT: Finances"
  - "HDW: Smartphone"
  - "HDW: Tablet"
  - "PRDT: VA-Mobile-App"
  - "DSP: Content Presentation"
  - "DSP: Help users to navigate a long list"
  - "usability-testing"
  - "moderated-research"
  - "mobile-research"
  - "information-architecture"
  - "navigation-design"
  - "homescreen-design"
  - "prototype-testing"
---




> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your research plan below.** 
> 
> Use the [GitHub Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed research plan.  The prompt uses natural language processing to extract key information and apply appropriate research repository tags. 

	# Research Plan for [Core Mobile, VAHB Mobile App, March, 2026]
> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**VA Health and Benefits Mobile App has limited real estate on the homescreen, and additional features expected to be added this year will further take up homescreen space. The team seeks to understand whether planned homescreen design concepts align with Veterans expectations and priorities and successfully helps them complete tasks.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Auth**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**Product that Veterans currently use. Iteration on existing product.**

`Product Brief`

**Link to product brief: [Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Homescreen%20Redesign%20Product%20Brief).**

</details>

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

`Link to relevant past research studies that inform this work. This helps build institutional knowledge and prevents duplicate efforts.`


**Previous Studies:**
- Personalized Home Screen Evaluative Research, April 2024 [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35af580d97e75798e00779173cdd133e18870dd0/products/va-mobile-app/research/ux/personalized-homescreen/2024-04%20evaluative%20research/personalized%20home%20screen%20-%20research%20plan.md) [Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35af580d97e75798e00779173cdd133e18870dd0/products/va-mobile-app/research/ux/personalized-homescreen/2024-04%20evaluative%20research/personalized%20home%20screen%20-%20findings.md)
- VA Mobile App Information Architecture & Navigation: Evaluative Research - Usability Study, August 2022 [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35af580d97e75798e00779173cdd133e18870dd0/products/va-mobile-app/research/ux/navigation/new%20navigation%20usability/usability-research-plan.md) [Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35af580d97e75798e00779173cdd133e18870dd0/products/va-mobile-app/research/ux/navigation/new%20navigation%20usability/2022%20-%20VA%20Mobile%20App_%20Information%20Architecture%20%26%20Navigation%20User%20Research%20-%20Findings%20Report.pdf)


**Key Takeaways from Previous Research:**
1. Personalized Home Screen Evaluative Research:
- `When asked to imagine how they might use the homescreen of the app to help them with something in their life, participants described using the home screen as the entry point to: 1. give them access to a specific task, be reminded of an outstanding task, use the information on the home screen itself to accomplish a task.`
- `5 of 13 participants found it useful to see disability rating and monthly compensation displayed together, and 1 said it was specifically helpful to see it on the home screen`
- `Nearly all participants expected to tap and then used the home screen modules successfully to begin their tasks (and arrived where they predicted they would be). In the case of one task (prescriptions), most participants’ expectations of the module destination was different from what they experienced when using the app. (They didn't expect to see the full list of prescriptions.)`
- `6 of the 8 participants that saw Proof of Veteran status on homescreen commented on its usefulness`

2. Information Architecture & Navigation Evaluative Research:

- `All participants directly or indirectly found their Disability Rating and Disability Payments though they had moved to Benefits and Payments respectively from their original location in Profile.`
- `Recommendation: Investigate moving Manage dependents into the Profile section in the future`



</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

> **NOTE:** If a Key Result does not have a ***Research Ops Plain Language*** equivalent, it does not map to research supporting it as a key result for the parent objective.


`Objective 1:  Optimize software delivery for Veteran impact.`  

> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
  - ***Research Ops Plain Language:** Supports a production release that will measurably improved a product's Veteran-impacting KPIs.*

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
  - ***Research Ops Plain Language:** Supports this product’s OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - ***Research Ops Plain Language:** Supports the delivery of at least one release that directly addresses a documented user pain point within this product.*


</details>

> [!TIP]
> Delete priorities not supported by this research.

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

> [!TIP]
> Delete journeys not supported by this research.

## Research Goals 🥅	
`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **Understand users' expectations for homescreen content and navigation**

`2.` **Understand how users interpret and use new design concept's homescreen content and capabilities**

`3.` **Understand any points of confusion for users on the homescreen content and navigation, including for users with cognitive disabilities**

  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**We plan to incorporate insights to guide design decisions for homescreen and related actions so that we evolve current design concepts based on Veterans' needs and expectations. Insights will impact amount and type of information displayed on homescreen, the organization of homescreen sections, and functionality including direct action from the homescreen on simple tasks versus going to the category screen. We will base homescreen updates on mental model alignment for where users expect to find features and how users expect to interact with homescreen content. We will work with ADE on potential additional research as designs become more developed.** 

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

**Research goal 1: Understand users' expectations for homescreen content and navigation**
1. What content do users expect to find on the homescreen?
2. Where do users expect to find their Veteran status card, disability rating and payments, and dependents verification?
3. Do users expect due dates for some or all "Action required" items?
4. What level of detail do users need for homescreen content so that they can take action and complete tasks?

**Research goal 2: Understand how users interpret and use new design concept's homescreen content and capabilities**

1. Do users notice, understand, and take action on items in "Action required" and "Activity" sections?
2. When tasks are surfaced on the homescreen, how do users want and expect to complete them?
3. When provided with the opportunity to complete tasks such as paying copay and refilling prescription without leaving the homescreen, do users understand what to do and choose to do that instead of navigating to the feature?

**Research goal 3: Understand any points of confusion for users on the homescreen content and navigation, including for users with cognitive disabilities**

1. What causes users confusion or misunderstandings?
2. Are there any terms or processes that cause particular confusion for users with cognitive disabilities?

> [!TIP]
>Enter more questions as needed

### Hypotheses
> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---
**Research goal 1: Understand users' expectations for homescreen content and navigation**
1. Users will expect to find new content such as new Secure messages and items requiring their review and action on the homescreen.
2. Users very familiar with the app will expect to find Veteran status card, dependents, and disability rating and payments on the homescreen as reflects the current live app layout.
3. Users less familiar with the app will expect to find Veteran status card and dependents verification in Profile.
4. Users less familiar with the app will expect to find disability payments and rating in Profile or in Payments.
5. Users will sometimes want more information than is presented on homescreen to help them with some tasks such as managing prescriptions, due dates for Action required items, or for appointments preparation. 

**Research goal 2: Understand how users interpret and use homescreen content and capabilities**

1. Users will notice and give more weight to "Action required" items because of the label and design styling of the section.
2. Users will be able to describe in their own words what the "Action required" section is for. 
3. Users will want to take action on both "Action required" items and "Activity" items that usually are of top concern to Veterans such as new appointment information, prescription updates, travel pay claims.
4. Users may not be able to articulate exactly what kind of items belong in the "Activity" section.
5. Users will want to complete tasks as directly as possible.
6. Users will expect to be able to complete tasks directly from the homescreen when there is a call to action button associated with the item such as "Pay copay" for a medical copayment. 

**Research goal 3: Understand how users interpret and use homescreen content and capabilities**
1. Since homescreen content uses plain language and short, to-the-point phrases, users will generally understand terms and calls action.
2. Users may experience minor confusion due to lack of familiarity with specific items such as 'evidence request.'
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

This research will be a remote moderated study using Zoom. Participants will be asked to narrate their thoughts as they navigate the clickable, medium-fidelity Figma prototype of the proposed homescreen redesign. Participants will then be asked for targeted feedback on where to find items moved off the homescreen with the redesign, and to try to complete the tasks of paying a copay and refilling a prescription directly from the homescreen through a newly designed user flow concept. Since Figma prototypes cannot be used with screen readers, we will prioritize recruiting at least 5 participants with cognitive disabilities and assess accessibility of content and navigation from their point of view. The conversation guide is written to be plain language and to allot ample time for each task to account for participants with cognitive disabilities who may need additional time to review and respond to designs. 

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

- [X] **Remote**
- [ ] **In-person**
      

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  


**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/4717498a59003842567808e70dc87d1a79614656/products/va-mobile-app/research/2026-03-Homescreen-Research/Conversation-guide.md)
- [Link to prototype](https://www.figma.com/proto/qVqjxULrC26YoIbvnZKOwp/IA---Nav?node-id=673-114466&t=Bp35KWcWPBYzxcWt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=673%3A114466&show-proto-sidebar=1)

	
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

**We would like Perigean to recruit Veterans as participants using lean maximum variation. Target 14 to seat and complete 9 sessions total.**

### Recruitment criteria

- Must have interacted with the mobile app at least once
- Have a service-connected disability rating of at least 10%

Please make sure that ALL participants are willing to complete the session on the mobile or tablet device they specify during the screener questions and:
During the session:
- Are willing to share their screen.
- Have a working microphone on their device.


### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*


- `Veterans:` **[14]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[14]**
- `Ideal completed sessions:` **[9]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

**All participants must:**
- `Be on a mobile device or tablet (recruit mix of device types)`
- `During the session, be willing to share a web browser window on their device`
- `Have a working microphone`
- `Have Zoom downloaded to their device prior to the session and know how to share their screen`
- `Have used the VA Health and Benefits app at least once in the last year`
- `Have a service-related disability rating of at least 10%`

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `At least 5, age 55 or older`
- `At least 5, self-reported cognitive disability`
- `At least 3, rural`
-` At least 3, identifies as gender other than male`
- `At least 6, identifies as other than white/Caucasian`
- `At least 3, no degree`

## Screener Questions 📋

> [!NOTE]
> Perigean will use these screener questions **verbatim** to recruit and qualify participants. Write them as you want them asked.



### Your Study's Screener Questions

**1. Which device(s) would you use to join the research session?** (Recruit mix)
   
- Mobile phone – Android: Qualify
- Mobile phone – iPhone: Qualify
- Tablet – Android: Qualify
- Tablet – iPad: Qualify
- None of the above: Disqualify

**2. How often did you use the [Veterans Affairs Health and Benefits App](https://mobile.va.gov/app/va-health-and-benefits) on your smartphone or tablet in the past year?**
- I never used the app: Disqualify
- I used it rarely: Qualify
- I used it at least once a month: Qualify
- I used it at least once a week: Qualify

**3. What is your service-related disability rating?**
- Less than 10%: Disqualify
- 10% or higher: Qualify
- I don't have a disability rating: Disqualify
- I don't know my rating: Disqualify

**4. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.** (Recruit mix)
- Yes: Qualify; Recruit at least 5
- No: Qualify


## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:`
- **03/20, Friday, 9:30am-5:00pm ET**
- **03/23, Monday, 9:30am-6:00pm ET**

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **Matthew Sweeney**
- `Date and time of pilot session:` **03/17, Tuesday, 3:05 PM - 4:00PM EST** 

### Research sessions
- `Planned dates of research:` **03/30-04/03**

### Length of sessions
- `Session length:` **60 minutes**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **4**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**

- `03/30, Monday, 11:00 AM-12:00 PM EST`
- `03/30, Monday, 1:00 PM-6:00 PM EST`
- `03/31, Tuesday, 11:00 AM-1:30 PM EST`
- `03/31, Tuesday, 2:30 PM-6:00 PM EST`
- `04/01, Wednesday, 11:00 AM-1:30 PM EST`
- `04/01, Wednesday, 2:30 PM-6:00 PM EST`
- `04/02, Thursday, 12:00 PM-6:00 PM EST`
- `04/03, Friday, 11:00 AM-12:00 PM EST`
- `04/03, Friday, 2:00 PM-6:00PM EST`

  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Theresa Wang**	
- `Research guide writing and task development (usually but not always same as moderator):` **Theresa Wang**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Theresa Wang**		
- `Note-takers:`
- **Maria Kravets**
- **Brenda Rocha Barraza**
  
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **Ryan Thurlwell**
- **Michelle Middaugh**
- **Matthew Sweeney**
- **Jonathan David Post**
- **Courtney Stubbert**

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by [Ryan Thurlwell, Team Lead] on [03-11-2026]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
