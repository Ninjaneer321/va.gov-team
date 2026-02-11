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

# Form \+ Inbox Research Plan

**Ask VA, Form \+ Inbox Usability Testing, October 2025**

# Background

Ask VA is comprised of a contact form and inbox where Veterans, family members, and other submitters can get answers to any VA question and submit documentation. Ask VA is available to both authenticated and unauthenticated users. The frontend integrates with a backend customer relationship management (CRM) application that routes questions to the appropriate VA team. Multiple VA teams can access and use the CRM.

In this research we are specifically exploring Veteran and business (education) submitters' input on how well the current Ask VA form and inbox are working to meet their needs. We hope to uncover opportunities to reduce the burden of the form and improve the inbox experience. 

[Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md)

## OCTO-DE Priorities

`Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`

`Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

## Veteran Journey

* `Getting Out`  
* `Starting Up`  
* `Taking Care of Myself`  
* `Reinventing Myself`  
* `Putting Down Roots`  
* `Retiring`  
* `Aging`  
* `Dying`

## Research Goals

### Goals

`1.` Understand Veteran and business users’ needs from the Ask VA form and inbox. 

`2.` Identify opportunities to simplify the form and inbox to better meet their needs. 

`3.` Assess satisfaction and ease of use of the current Ask VA experience versus our exploratory prototype. 

### Outcome

---

This research will create a shared understanding of the different mental models that submitters have in walking through the form and reviewing responses in their inbox. This will enable our team to make future design decisions that will enhance the Ask VA form and inbox experiences. 

More specifically, we will be able to determine a forward design path to enable all submitters better access to their previous submissions. We will also be equipped with evidence when designing business lines’ requested changes to the Ask VA form.  

---

### Research questions

`1.` What are submitters’ expectations with the Ask VA interface and process?  

`2.`What are the biggest problem areas with the form for Veterans? For business submitters? 

`3.`What are the biggest problem areas with the inbox for Veterans? For business submitters? 

`4.`How are submitters working around these problem areas? 

### Hypotheses

---

Business submitters have to use workarounds to get the information they need from Ask VA.

Using Ask VA to submit education and work study documentation is overly burdensome to business submitters.  

Veteran submitters expect a simple contact form allowing them to ask any question. 

Veteran submitters don’t understand the internal routing processes to get their question to the right person.

---

## Methodology

**Research method:** Usability testing  
**Moderation style:** Moderated \- facilitator led  
**Location:** Remote over Zoom  
**Timeframe:** 60 minutes

### Comparative study plan

|  | Group A \- Staging then Proto | Group B *\-* Proto then Staging |
| :---- | :---- | :---- |
| Participants | <ul><li> **Veterans** (3-4)</li> <li>**Veteran SCOs** (1)</li>  <li>**SCOs** (2-3)</li></ul> | <ul><li> **Veterans** (3-4)</li>  <li>**Veteran SCOs** (1)</li>  <li>**SCOs** (2-3)</li></ul> |
| Task Order | **Staging** <ol><li>Submit question</li>  <li>Review question in inbox</li></ol> **Prototype**  <ol><li>Submit question</li>  <li>Review question in inbox</li></ol> | **Prototype** <ol><li>Submit question</li>  <li>Review question in inbox</li></ol> **Staging**  <ol><li>Submit question</li>  <li>Review question in inbox</li></ol>  |

## Research materials

**For moderated usability test:**

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/2024-05%20Dashboard/Conversation%20guide%20-%20Veterans.md)  
- [Ask VA staging site](https://staging.va.gov/contact-us/ask-va/introduction)  
  - Login credentials  
    - Email: [vets.gov.user+41@gmail.com](mailto:vets.gov.user+41@gmail.com), [vets.gov.user+220@gmail.com](mailto:vets.gov.user+220@gmail.com)   
    - Password: AskVA2025Testing  
- Prototype links  
  - [Veteran (Tasks 1, 3): Submit Education and Work Study Question](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form-Future-exploration?node-id=1085-93727&viewport=19%2C157%2C0.05&t=FjCNmXJMbOXAZpmA-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1085%3A93727)  
  - [Veteran (Tasks 2, 4): Review Question in Inbox](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form-Future-exploration?node-id=1154-18648&viewport=-315%2C-640%2C0.17&t=FjCNmXJMbOXAZpmA-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1154%3A18648&show-proto-sidebar=1)  
  - [SCO (Tasks 1, 3): Submit Education and Work Study Question](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form-Future-exploration?node-id=1137-15665&viewport=10%2C-677%2C0.06&t=FjCNmXJMbOXAZpmA-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1137%3A15665&show-proto-sidebar=1)  
  - [SCO (Tasks 2, 4): Review Question in Inbox](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form-Future-exploration?node-id=1091-10509&viewport=-1522%2C-6288%2C0.33&t=FjCNmXJMbOXAZpmA-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1091%3A10509&show-proto-sidebar=1)

## Recruitment

### Recruitment approach

We will work with Perigean to recruit Veterans.

We will also work with the GI Bill team to recruit business submitters, such as Work study site supervisors or School Certifying Officials (SCOs). However, if we're unable to do this within our timeline, this will not be a blocker to completing this study.

### Recruitment criteria – Veterans

We will recruit 15 Veterans for a total of 12 completed sessions.

| Priority | \# of participants | Criteria |
| ----- | ----- | ----- |
| Required | Exactly 15 | Are Veterans |
| Required | Exactly 15 | Have contacted VA online or over the phone in the past year |
| Required | Exactly 15 | Have signed in to VA.gov in the past year |
| Required | Exactly 15 | Have VA Education benefits |
| Required | Exactly 2-5  | School Certifying Official or Work Study Site Supervisor |
| Required | Exactly 15 | Are willing to join from a desktop device |
|  | At least 4 | Have a cognitive disability or consideration |
|  | At least 4 | Are over 55 years old |
|  | At least 3 | Identify as a gender other than male |
|  | At least 3 | Identify Asian or Hispanic |
|  | At least 3 | Identify as Black or Native |
|  | At least 3 | Are rural |
|  | At least 3 | Don't have a degree |
|  | At least 2 | Identify as LGBTQ+ |

### Screener questions

| Question | Answers | Screening Criteria |
| :---- | :---- | :---- |
| Have you contacted the VA online or over the phone in the past year? | Yes / No | Must answer Yes |
| Do you currently receive any VA Education or Training benefits?  | Yes / No  | Must answer Yes |
| Are you currently a School Certifying Official (SCO) or Work Study Site Supervisor? | Yes / No | At least 2 participants must answer Yes |
| Are you able to join the Zoom session from an internet-connected desktop or laptop computer? | Yes / No | Must answer Yes |
| Do you find it difficult to remember or learn new things, focus on a task, or make decisions?  | Yes / No | At least 4 participants must answer Yes |

## Timeline 

### Optional 30-min Kick-off Call with Perigean

- `Suggested dates and times:`  
  - Tuesday, October 21, 12pm \- 5pm CT
  - Wednesday, October 22, 8:30am \- 10:30am CT
  - Wednesday, October 22, 12pm \- 1pm CT
  - Wednesday, October 22, 4pm \- 5pm CT


### Prepare

- `Pilot participant name:` Alex Castillo  
- `Date and time of pilot session:` October 21, 2025 1:30-2:30 EST 

### Research sessions

- `Planned dates of research:` October 29, 2025 \- November 12, 2025 

### Length of sessions

- `Session length:` **60 minutes**   
    
- `Buffer time between sessions:` **30 minutes**  
    
- `Maximum Sessions per day:` **4 sessions per day**

### Availability

**Time slots**

- `10/29, Wednesday, 9:30am-6:30pm EST (4)`  
- `10/30, Thursday, 9:30am-1:00pm EST (2)`  
- `10/31, Friday, 9:30am-2:30pm EST (3)`  
    
- `11/3, Monday, 9:30am-12:30pm EST (2)`  
- `11/3, Monday, 2:30pm-6:30pm EST (3)`  
- `11/4, Tuesday, 9:30am-6:30pm EST (4)`  
- `11/7, Friday, 9:30am-6:30pm EST (4)`  
    
- `11/10, Monday, 9:30am-6:30pm EST (4)`
- `11/12, Wednesday, 9:30am-6:30pm EST (4)`


## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Elena B. Naids**  
- `Research guide writing and task development (usually but not always same as moderator):` **Elena B. Naids**  
- `Participant recruiting & screening:` **Perigean**  
- `Project point of contact:` **Elena B. Naids**  
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **–**  
- `Note-takers:` **Danielle Oppendike**  
- `Observers`  - *This is a potential list of observers across all sessions. We will limit each session to a max of 2 observers.*   
  - **Becky Phung**
  - **Megan Salerno**  
  - **Stephanie Vargo**  
  - **Matt Floyd**  
  - **Sumit Patel**  
  - **Walker Marlatt**  
  - **Alex Castillo**
  - **Kayla Watanabe**

## Approvals ✅

- `Reviewed by` Becky Phung`, OCTO Product Owner on 10-16-2025`  
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
