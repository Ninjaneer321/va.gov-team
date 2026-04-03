---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience Team, Profile, 04/2026"
date: 2026-03-31
last_updated: 2026-03-31
team: "Authenticated Experience Team"
product: "Profile 2.0"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Profile 2.0 introduces a reorganized, research-backed information architecture that aligns with Veteran mental models and creates space for new features. It restructures sections, updates naming, and groups related information more intuitively so the Profile can incorporate future additions without creating confusion."
  product_location: "Authenticated profile experience at va.gov/profile"
  user_familiarity: "Iteration on an existing product"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/issues/113546"

# Research Design
methodology: "Moderated usability testing"
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
  - "Are there any features missing that participants want to see, such as wanting to edit or remove content?"
  - "Does the new experience meet participant expectations? Why or why not?"
  - "Are there any specific challenges screen reader or magnification participants face while using the new experience?"

hypotheses:
  - "Participants will not have difficulty navigating to the profile"
  - "Participants will not have difficulty navigating the new categories in profile"
  - "The new categories and content will meet participants' expectations"
  - "Participants will want to be able to edit and remove all information they see"
  - "Participants will expect any information in their profile to be used across the VA"
  - "Using VADS and USDS accessibility guidance will ensure an experience that is easy to use for screen reader and magnification participants"

expected_outcomes: |
  1. Ensure profile meets participant expectations and is a solid foundation for subsequent work
  2. Bugs are identified, documented, and prioritized
  3. New feature ideas are documented and prioritized

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation with multiple cohorts for AT and mobile participants"
  
  primary_criteria_at:
    - "ALL participants use assistive technology (screen readers or magnification)"
    - "ALL participants have a verified VA.gov account"
    - "ALL participants are willing and able to share their screen on Zoom"
    - "Half of participants have VA health care"
    
  primary_criteria_mobile:
    - "ALL participants access research session from a smartphone"
    - "ALL participants have a verified VA.gov account"
    - "ALL participants are willing and able to share their screen on Zoom"
    - "Half of participants have VA health care"
    
  secondary_criteria_at:
    - "Mix of desktop and mobile devices"
    - "5 are age 55-64+"
    - "5 identify as having a cognitive disability"
    - "3 live in a rural area"
    - "3 have no degree"
    - "2 identify as Black or African American"
    - "2 identify as Hispanic, Latino, or Spanish origin"
    - "1 identifies as a woman"
    - "1 identifies as LGBTQ+"
    - "1 identifies as Asian"
    - "1 identifies as Native Hawaiian or other Pacific Islander"
    - "1 identifies as Native, American Indian or Alaska Native"
    
  secondary_criteria_mobile:
    - "3 are age 55-64+"
    - "3 identify as having a cognitive disability"
    - "2 live in a rural area"
    - "2 have no degree"
    - "1 identifies as Black or African American"
    - "1 identifies as Hispanic, Latino, or Spanish origin"
    - "1 identifies as a woman"
    - "1 identifies as LGBTQ+"
    - "1 identifies as Asian"
    - "1 identifies as Native Hawaiian or other Pacific Islander"
    - "1 identifies as Native, American Indian or Alaska Native"

participants:
  at_veterans: 10
  at_caregivers: 0
  at_dependents: 0
  mobile_veterans: 5
  mobile_caregivers: 0
  mobile_dependents: 0
  total_recruited: 15
  at_completed_sessions_goal: 6
  mobile_completed_sessions_goal: 3
  
# Timeline & Sessions
timeline:
  pilot_date: "2026-04-02"
  pilot_participant: "TBD - AT participant"
  research_dates: "2026-04-13 to 2026-05-01"
  research_review_submission: "2026-04-02"
  
at_session_details:
  duration_minutes: 90
  buffer_minutes: 30
  max_sessions_per_day: 2
  
mobile_session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Optimize software delivery for Veteran impact"
    key_results: 
      - "Key Result 1.1: Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov"
      - "Key Result 1.2: Supports a production release that will measurably improve a product's Veteran-impacting KPIs"
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "Key Result 3.1: Supports this product's OIT portfolio in improving customer satisfaction of impactful systems by 3% or more"
      - "Key Result 3.2: Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services"
      - "Key Result 3.3: Supports the delivery of at least one release that directly addresses a documented user pain point within this product"
       
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
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2025-03-profile-secondary-research/research-findings.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test"
     
tags:
  - "authenticated"
  - "usability-testing"
  - "accessibility"
  - "assistive-technology"
  - "post-launch"
  - "profile"
---

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your research plan below.** 
> 
> Use the [GitHub Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed research plan.

# Research Plan for Authenticated Experience Team, Profile, 04/2026

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

`Objective 1: Optimize software delivery for Veteran impact`

- **Key Result 1.1:** All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov
  - ***Research Ops Plain Language:*** Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov
- **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs
  - ***Research Ops Plain Language:*** Supports a production release that will measurably improve a product's Veteran-impacting KPIs

`Objective 3: Relentlessly improve the user experience`

- **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more
  - ***Research Ops Plain Language:*** Supports this product's OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more
- **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points
  - ***Research Ops Plain Language:*** Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services
- **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system
  - ***Research Ops Plain Language:*** Supports the delivery of at least one release that directly addresses a documented user pain point within this product

</details>

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

## Research Goals 🥅

`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

1. **Validate profile experience and architecture changes with participants**

2. **Identify any bugs, with special focus on data quality and accessibility**

3. **Identify new product feature ideas**

### Outcome

1. Ensure profile meets participant expectations and is a solid foundation for subsequent work
2. Bugs are identified, documented, and prioritized
3. New feature ideas are documented and prioritized

### Research questions

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

1. **Do participants have any challenges navigating to profile?**

2. **Do participants have difficulty navigating new profile categories?**

3. **Is there any information missing that participants want to see?**

4. **Are there any features missing that participants want to see, such as wanting to edit or remove content?**

5. **Does the new experience meet participant expectations? Why or why not?**

6. **Are there any specific challenges screen reader or magnification participants face while using the new experience?**

### Hypotheses

**1. Participants will not have difficulty navigating to the profile**

**2. Participants will not have difficulty navigating the new categories in profile**

**3. The new categories and content will meet participants' expectations**

**4. Participants will want to be able to edit and remove all information they see**

**5. Participants will expect any information in their profile to be used across the VA**

**6. Using VADS and USDS accessibility guidance will ensure an experience that is easy to use for screen reader and magnification participants**

## Methodology 🛠️

**Moderated usability testing to evaluate the new profile experience.**

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits and what types of research they can support
- If conducting testing on mobile, refer to the [mobile research guidelines](https://depo-platform-documentation.scrollhelp.site/research-design/conducting-mobile-sessions-v1)
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html)

</details>

### Location

**Remote** - Sessions will be conducted remotely via Zoom with participants across the United States.

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.**

**For moderated usability tests:**
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2026-04-profile2.0-postlaunch-usabilitytesting/conversation-guide.md)
- Live testing on VA.gov production
  - My VA: [va.gov/my-va](http://va.gov/my-va)
  - Profile: [va.gov/profile](http://va.gov/profile)

---

## Assistive Technology Recruitment 🎯

*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach

**Who is your intended audience for this research?**

Veterans recruited by Perigean with a focus on screen reader and magnification participants. Recruitment demographics will be driven by OCTO's target demographics outlined in the [recruitment checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx).

**Recruitment Cohorts:**

- **Cohort 1 - Screen reader participants:** 5 participants, 3 completed sessions required
- **Cohort 2 - Magnification participants:** 5 participants, 3 completed sessions required

### Recruitment criteria

**List the ideal completed sessions and total number and type of participants:**

- `Veterans:` **10**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **10**
- `Ideal completed sessions:` **6**

### Primary criteria (must-haves)

**What demographics, experience, and scenarios do you need participants to meet to effectively run your study?**

- **ALL** participants use assistive technology (screen reader or magnification)
- **ALL** participants have a verified VA.gov account
- **ALL** participants are willing and able to share their screen on Zoom
- **Half** of participants have VA health care

### Secondary criteria (nice-to-haves)

**What criteria would strengthen your results?**

- Mix of desktop and mobile devices
- 5 are age 55-64+
- 5 identify as having a cognitive disability
- 3 live in a rural area
- 3 have no degree
- 2 identify as Black or African American
- 2 identify as Hispanic, Latino, or Spanish origin
- 1 identifies as a woman
- 1 identifies as LGBTQ+
- 1 identifies as Asian
- 1 identifies as Native Hawaiian or other Pacific Islander
- 1 identifies as Native, American Indian or Alaska Native

### Screener Questions 📋

**1. Do you use a screen reader, screen magnifier, or magnification program every time you use the internet?**
- **Qualifying response:** Yes, I use a screen reader, screen magnifier, or magnification program every time I use the internet
- **Disqualifying response:** No, I do not use a screen reader, screen magnifier, or magnification program every time I use the internet
- **Disqualifying response:** I'm not sure

**2. Are you able to access your VA.gov profile to see your name and date of birth at va.gov/profile/personal-information?**
- **Qualifying response:** Yes, I am able to review my name and date of birth in my VA.gov profile
- **Disqualifying response:** No, I am not able to review my name and date of birth in my VA.gov profile
- **Disqualifying response:** I'm not sure

**3. To participate in the study, you'll need to sign into VA.gov, share your screen on Zoom, and use your screen reader, screen magnifier, or magnification program during the session. Are you willing and able to meet these requirements?**
- **Qualifying response:** Yes
- **Disqualifying response:** No
- **Disqualifying response:** I'm not sure

**4. What is the name of the screen reader, screen magnifier, or magnification program that you will use during the Zoom session?** (Open input field)
- **Qualifying response:** 
   - Screen readers: JAWS, Narrator, NVDA, Orca, TalkBack, VoiceOver, Windows Narrator
   - Magnification: Magic, Magnification, Magnifier, SuperNova, Virtual Magnifying Glass, Zoom for Apple, ZoomText, Magnifixer
- **Requires follow-up**
   - Browser Zoom Magnification: Increase font size, zoom in browser
      - Qualifying response: 200% or greater zoom or increase
      - Disqualifying response: Less than 200% zoom or increase
   - Non-committal response, such as I’m not sure
      - Qualifying response: Participant can answer they use one of the other qualifying responses
      - Disqualifying response: We can’t get specifics
- **Disqualifying response**
   - Non-digital technology, such as magnifying glass
- If unsure whether someone qualifies, please ask Janelle

**5. How long have you been using this screen reader, screen magnifier, or magnification program?**
- **Qualifying response:** At least 1 year
- **Disqualifying response:** Less than 1 year

**6. What VA benefits do you currently have or use?** Select all that apply.
- Disability compensation
- Education and training
- Health care
- Housing assistance
- Life insurance
- Pension
- Other

**7. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.**
- Yes
- No
- I prefer not to answer

## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **04/02 12:00-2:00 PM EST, 04/03 10:00 AM-1:00 PM EST**

**During kick-off:**
- Review screener questions
- Review recruitment email
- Align on recruitment approach and timing
- Review after kick-off tasks

**After kick-off:**
- Perigean to confirm and prepare participants prior to the session
  - Confirm assistive technology matches survey response
  - Confirm device (mobile/tablet iOS or Android, or Desktop)
  - Confirm any additional accommodations needed
- Walk participants through setting up, and using, Zoom share prior to the session starting. Link to platform guidance. [Link to platform guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants#Recruiting-Recruitingformobilestudies)

### Prepare

Study will be conducted on VA.gov production. Experience went live 03/13/2026.

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.**

**Pilot 1: iPhone, Voiceover**
- Pilot participant name: **Sarah**
- Date and time of pilot session: **04/03/2026, 1:30 - 3:00 PM EST**

**Pilot 2: Desktop, Fusion**
- Pilot participant name: **Jamie**
- Date and time of pilot session: **04/08/2026, 1:00 - 2:30 PM EST**


#### Research sessions

- `Planned dates of research:` **04/13 – 04/24**

#### Length of sessions

- `Session length:` **90 minutes**
- `Buffer time between sessions:` **30 minutes**
- `Maximum Sessions per day:` **2 per day**

#### Availability

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

---

## Mobile Recruitment 🎯

*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach

**Who is your intended audience for this research?**

Veterans recruited by Perigean with a focus on mobile participants. Recruitment demographics will be driven by OCTO's target demographics outlined in the [recruitment checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx).

### Recruitment criteria

**List the ideal completed sessions and total number and type of participants:**

- `Veterans:` **5**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **5**
- `Ideal completed sessions:` **3**

### Primary criteria (must-haves)

**What demographics, experience, and scenarios do you need participants to meet to effectively run your study?**

- **ALL** participants participate through their smartphone device, tablets are allowed
- **ALL** participants have a verified VA.gov account
- **ALL** participants are willing and able to share their screen on Zoom
- **Half** of participants have VA health care

### Secondary criteria (nice-to-haves)

**What criteria would strengthen your results?**

- 3 are age 55-64+
- 3 identify as having a cognitive disability
- 2 live in a rural area
- 2 have no degree
- 1 identifies as Black or African American
- 1 identifies as Hispanic, Latino, or Spanish origin
- 1 identifies as a woman
- 1 identifies as LGBTQ+
- 1 identifies as Asian
- 1 identifies as Native Hawaiian or other Pacific Islander
- 1 identifies as Native, American Indian or Alaska Native

### Screener Questions 📋

**1. Are you able to join the research session from a smartphone, such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.**
- **Qualifying response:** Yes, I can join from a smartphone
- **Disqualifying response:** No, I cannot join from a smartphone
- **Disqualifying response:** I'm not sure

**2. Are you able to access your VA.gov profile to see your name and date of birth at va.gov/profile/personal-information?**
- **Qualifying response:** Yes, I am able to review my name and date of birth in my VA.gov profile
- **Disqualifying response:** No, I am not able to review my name and date of birth in my VA.gov profile
- **Disqualifying response:** I'm not sure

**3. To participate in the study, you'll need to sign into VA.gov, share your screen on Zoom, and use your smartphone during the session. Are you willing and able to meet these requirements?**
- **Qualifying response:** Yes
- **Disqualifying response:** No
- **Disqualifying response:** I'm not sure

**4. What VA benefits do you currently have or use?** Select all that apply.
- Disability compensation
- Education and training
- Health care
- Housing assistance
- Life insurance
- Pension
- Other

**5. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.**
- Yes
- No
- I prefer not to answer

**6. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.**
- Yes
- No
- I prefer not to answer

### Timeline 🗓️

#### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **04/17 10:00 AM – 1:00 PM EST**

**During kick-off:**
- Review screener questions
- Review recruitment email
- Align on recruitment approach and timing
- Review after kick-off tasks

**After kick-off:**
- Requesting Perigean to confirm and prepare participants prior to the session
  - Confirm device (iOS or Android smartphone)
  - Confirm any additional accommodations needed
- Walk participants through setting up, and using, Zoom share prior to the session starting. [Link to platform guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants#Recruiting-Recruitingformobilestudies)

#### Prepare

Study will be conducted on VA.gov production. Experience went live 03/13/2026.

**Pilot completed with AT participant recruitment**

#### Research sessions

- `Planned dates of research:` **04/27 – 05/01**

#### Length of sessions

- `Session length:` **60 minutes**
- `Buffer time between sessions:` **30 minutes**
- `Maximum Sessions per day:` **2 per day**

#### Availability

**Part 1: Target days**
- 04/27, Monday, 9:00 AM – 3:00 PM EST
- 04/28, Tuesday, 9:00 AM – 4:00 PM EST
- 04/29, Wednesday, 9:00 AM – 4:00 PM EST

**Part 2: For reschedules**
- 04/30, Thursday, 9:00 AM – 2:00 PM EST
- 05/01, Friday, 9:00 AM – 4:00 PM EST

---

## Team Roles 🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers.

- `Moderator:` **Janelle Finnerty**	
- `Research guide writing and task development:` **Janelle Finnerty**		
- `Participant recruiting & screening:` **Perigean**	
- `Project point of contact:` **Janelle Finnerty**		
- `Accessibility specialist (for AT sessions):` **TBD**	
- `Note-takers:` **Janelle will manage note-taker invites**	
- `Observers:` **Janelle will manage observer invites**

## Approvals ✅

- `Reviewed by OCTO Product Owner, Denise Coveyduc on 03-30-2026`
- `Reviewed by OCTO Research-Ops Lead on [04-02-2026]`
