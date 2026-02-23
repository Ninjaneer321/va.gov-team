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

# Research Plan for Sitewide Navigation, March 2026


## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

As VA.gov continues to expand in features and content related to benefits, we need to ensure visitors can navigate the site to find the right information.  This research will evaluate the effectiveness of the organization and labeling in the key navigation components usedin the VA.gov benefit experience - the primary navigation menu in the header (labeled VA benefits and health care) and the secondary navigation in the benefit hub space shown in the left rail on desktop and in a drop list on mobile.  This research effort will not evaluate the design or interactions of those components, only the organization and labeling.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Primary navigation is available to all users across the entire site.  Secondary naviation is available to all users within the benefit hub experience.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

From Jan 1, 2025 - Sept 30, 2025 there were 10.7M searches submitted and 12.7M clicks on the "VA Benefits and Health care menu option.

`Product Brief`

[VA.gov Information Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/README.md).

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

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

The Informaiton Architecture of VA.gov must support Veterans and Veteran family members and caregiver at all stages of the Veteran journey beyond "Joining" to ensure they can explore, apply for, manage, and track the benefits VA has to offer in the moments that matter.

- `Serving`
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

### Goals

- `1.` Assess whether users can find key information related to top tasks on the site easily and with confidence.
- `2.` Determine if the labels used in navigation meet the mental model of our users.
- `3.` Determine if adding "My VA" and My HealtheVet" to the top level of navigation impacts findability of tools related to managing benefits.


  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

Outcomes from this research will be used to inform and prioritize changes needed to menu labels, groupings, or broader site organization.



### Research questions
	
#### Goal 1: Assess whether users can find key information related to top tasks on the site easily and with confidence
- `1.` Can users easily find information related to applying for key benefits?
- `2.` Can users easily find key tools that help them manage benefits they are already receiving?
- `3.` Is there a difference in findability between tools that align with a single benefit versus those that support multiple benefits?

#### Goal 2: Determine if the labels used in navigation meet the mental model of our users.
- `4.` Where do users look for information related to benefits for a Veteran family member or caregiver?
- `5.` Is the Service member benefits hub a common destination for key tasks related to Veteran benefits?
- `6.` Are Veterans able to determine which hub contains information related to the VR&E program?

#### Goal 3: Determine if adding "My VA" and My HealtheVet" to the top level of navigation impacts findability of tools related to managing those benefits.
- `7.` Is "My VA" a common pathway to tools related to managing benefits?
- `8.` Is "My HealtheVet" a common pathway to tools related to managing health care?


### Hypotheses

- `1.` Users will be able to easily find key information related to learning about and applying for key Veteran benefits within their respective benefit hubs. 
- `2.` Users will look to the family member and caregiver benefit hub to find key information related to benefits for family members.
- `3.` Users will not commonly look to the Service member benefits hub as a destination for key Veteran benefit information and tools. 
- `4.` Users will most commonly look in "My VA" and My HealtheVet" as ways to get to tools to manage their benefits.

  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

A tree test will be used to evaluate the existing navigation component organization and labels. The tree used in the test will reflect the labels and organizational structure that visitors must navigate through to get to content and tools within the benefit experience.  Participants will be asked to completed 10 tasks based on the most commonly accessed information and tools on the site.

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

- [x] **Remote - unmoderated**
- [ ] **In-person**
      


## Research materials 📔

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- [Link to email with instructions](url goes here)
- [Optimal Workshop tree test study](url goes here)


## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 
- Recruitment through Perigean for remote, [unmoderated study](https://depo-platform-documentation.scrollhelp.site/research-design/perigean-recruiting-process-for-unmoderated-studie), however, these studies require strict recruitment requirements. 
- Recruiting Veterarns only for this test.
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


- `Veterans:` **578**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **578**
- `Ideal completed sessions:` **385**

Sample size calculated based on achieving a 95% confidence level with a total audience of approx 15M living Veterans in the US. 

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `All participants are Veterans`
- `primary criteria`
- `primary criteria`
- **`Add more criteria as needed`**



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
- N/A

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

- N/A
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` N/A	
- `Research guide writing and task development (usually but not always same as moderator):` Mikki Northuis		
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Mikki Northuis	
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` N/A
- `Note-takers:` N/A
- `Observers: N/A


## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
