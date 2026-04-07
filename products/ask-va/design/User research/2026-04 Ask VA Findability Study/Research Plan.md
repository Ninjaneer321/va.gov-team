---
# Research Plan Metadata
title: "Research Plan for Ask VA, Findability Study, April 2026"
date: 2026-04-06
last_updated: 2026-04-06
team: "Ask VA"
product: "Ask VA"
product_area: "authenticated and unauthenticated"

# Background Context
background:
  problem_statement: "Ask VA is a support channel for Veterans, family members, and other submitters where they can get answers to any VA question and submit documentation. This research explores how Ask VA fits into Veterans' current use of VA support resources and how to make Ask VA more easily accessible."
  product_location: "VA.gov support resources"
  user_familiarity: "Iteration on existing product"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md"

# Research Design
methodology: "Exploratory Interviews"
research_format:
  location: remote
  moderated: true

# Research Goals & Questions
research_goals:
  - goal_1: "Better understand how Ask VA fits into a Veteran's mental model of VA support"
  - goal_2: "Uncover how authentication impacts how a Veteran interacts with Ask VA and other support channels"
  - goal_3: "Identify opportunities to improve the experience from the start of a Veteran's issue until they are able to start the Ask VA form (How they find Ask VA, how the text on the introduction page prepares them)"

research_questions:
  - "Where do Veterans expect to find the support they need? How do they decide which channel of support to use?"
  - "What are Veterans expectations for support from Ask VA when they've landed on our page?"
  - "When and how do Veterans decide to sign in vs. not sign in to ask questions?"
  - "How well does Ask VA's introduction page prepare Veterans to complete the form and get the answers they need?"

hypotheses:
  - "Navigating to Ask VA is not straightforward or where Veterans would expect it to be"
  - "Veterans feel prepared to complete the Ask VA form upon reaching our introduction page"
  - "Veterans want support without having to login to their VA accounts"

expected_outcomes: "This research will create a better understanding of how Ask VA fits into a Veteran's support experience with VA. We hope to uncover the different paths people might take to arrive at Ask VA. This will help make content and design decisions on the Ask VA Introduction page and better understand how authentication impacts their experience, enabling future design and content decisions."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Maximum variation sampling"
  
  primary_criteria:
    - "Exactly 9 participants are Veterans"
    - "Exactly 6 participants are Veteran family members, dependents, or other beneficiaries"
    - "Exactly 15 participants have contacted VA online in the past year"
    - "Exactly 15 participants have an active VA.gov account"
    - "Exactly 15 participants have VA benefits"
    - "Exactly 6 participants are willing to join from a desktop device"
    - "Exactly 6 participants are willing to join from a mobile device"
    
  secondary_criteria:
    - "At least 4 participants have a cognitive disability or consideration"
    - "At least 4 participants are over 55 years old"
    - "At least 2 participants are assistive tech users (screen reader)"
    - "At least 3 participants identify as a gender other than male"
    - "At least 3 participants identify as Asian or Hispanic"
    - "At least 3 participants identify as Black or Native"
    - "At least 3 participants are rural"
    - "At least 3 participants don't have a degree"
    - "At least 2 participants identify as LGBTQ+"
    
  screener_questions:
    - question: "Have you contacted the VA online for help in the past year?"
      qualifying_response: "Must answer Yes"
    - question: "Do you have an active account to login to VA.gov?"
      qualifying_response: "At least 6/8 participants must answer Yes"
    - question: "Do you currently receive any VA benefits?"
      qualifying_response: "Must answer Yes"
    - question: "Are you able to join the Zoom session from an internet-connected desktop, laptop, or mobile phone?"
      qualifying_response: "Must answer Yes"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "At least 4 participants must answer Yes"
      
participants:
  veterans: 9
  family_members_dependents_beneficiaries: 6
  total_recruited: 15
  completed_sessions_goal: 12
  
# Timeline & Sessions
timeline:
  pilot_date: "2026-04-03"
  pilot_participant: "Cameron Johnson"
  research_dates: "2026-04-13 to 2026-04-21"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results:
      - "Making Ask VA more easily accessible to Veterans"
      - "Improving findability and navigation to Ask VA"
  - objective: "Objective 2: OCTO's platforms are the fastest, most efficient, and most secure way to deliver products at VA"
    key_results:
      - "Understanding how authentication impacts support channel interaction"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Reinventing Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
  - "Dying"
    
# Research Repository Tracking
related_research:
  previous_studies: []
    
tags:
  - "AUD: Veterans"
  - "AUD: Family Member"
  - "AUD: Dependents"
  - "PRDT: Ask VA (AVA)"
  - "PRDT: Contact us"
  - "PRDT: Content"
  - "DSP: Content Presentation"
  - "DSP: Help users to sign in"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "Accessibility"
  - "exploratory-interviews"
  - "findability"
  - "navigation"
  - "information-architecture"
  - "authentication"
  - "unauthenticated-experience"
---

# Ask VA Findability Study

**Ask VA, Ask VA Findabilty, April 2026**

# Background

Ask VA is a support channel for Veterans, family members, and other submitters where they can get answers to any VA question and submit documentation. Ask VA is available to both authenticated and unauthenticated users. The frontend integrates with a backend customer relationship management (CRM) application that routes questions to the appropriate VA team. Multiple VA teams can access and use the CRM.

In this research we are specifically exploring Veteran submitters' input on how Ask VA fits into their current use of VA support resources. We hope to learn how to make Ask VA more easily accessible to submitters and reduce any barriers to entry when they land on the Ask VA introduction page.  

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

`1.` Better understand how Ask VA fits into a Veteran's mental model of VA support.

`2.` Uncover how authentication impacts how a Veteran interacts with Ask VA and other support channels.

`3.` Identify opportunities to improve the experience from the start of a Veteran's issue until they are able to start the Ask VA form. (How they find Ask VA, how the text on our introduction page helps or hinders them, why they might leave or stay)

### Outcome 

---

This research will create a better understanding of how Ask VA fits into a Veteran's support experience with VA. We hope to uncover the different paths people might take to arrive at Ask VA and complete the form for help. 

More specifically, this will help us make content and design decisions on the Ask VA Introduction page that increase the use of Ask VA. With the goal of reducing the burden on other support channels such as phone lines or in-person visits. This will also help us better understand how authentication impacts their experience, enabling us to make informed decisions about how to handle the authenticated experience vs. the unauthenticated experience for Ask VA. 

---

### Research questions 

`1.` Where do Veterans expect to find the support they need? How do they decide which channel of support to use? 

`2.` What are Veterans expectations for support from Ask VA when they've landed on our page?

`3.` When and how do Veterans decide to sign in vs. not sign in to ask questions?

`4.` How well does Ask VA's introduction page prepare Veterans to complete the form and get the answers they need?  

### Hypotheses

---

Veterans have varied expectations about where Ask VA should be located.

Veterans feel prepared to complete the Ask VA form upon reaching our introduction page.

Veterans want support without having to login to their VA accounts. 

---

## Methodology

**Research method:** Exploratory Interviews  
**Moderation style:** Moderated \- facilitator led  
**Location:** Remote over Zoom  
**Timeframe:** 60 minutes

## Research materials
We will have Veterans navigate to va.gov and show us how they might navigate the site to find the support they need. 


## Recruitment

### Recruitment approach

We will work with Perigean to recruit Veterans and other beneficiaries.

### Recruitment criteria

We will recruit 18 Veterans for a total of 12 completed sessions.

| Priority | \# of participants | Criteria |
| ----- | ----- | ----- |
| Required | Exactly 9 | Are Veterans |
| Required | Exactly 9 | Are Veteran family members, dependents, or other beneficiaries |
| Required | Exactly 18 | Have contacted VA online in the past year |
| Required | Exactly 18 | Have an active VA.gov account (Don't know if I need to specify this) |
| Required | Exactly 18 | Have VA benefits (Don't know if I need to specify this) |
| Required | Exactly 9 | Are willing to join from a desktop device |
| Required | Exactly 9 | Are willing to join from a mobile device |
|  | At least 6 | Have a cognitive disability or consideration |
|  | At least 6 | Are over 55 years old |
|  | At least 3 | Assistive Tech users (screen reader) |
|  | At least 3 | Identify as a gender other than male |
|  | At least 3 | Identify Asian or Hispanic |
|  | At least 3 | Identify as Black or Native |
|  | At least 3 | Are rural |
|  | At least 3 | Don't have a degree |
|  | At least 2 | Identify as LGBTQ+ |

### Screener questions

| Question | Answers | Screening Criteria |
| :---- | :---- | :---- |
| Have you contacted the VA online for help in the past year? | Yes / No | Must answer Yes |
| Do you have an active account to login to VA.gov? | Yes / No | At least 6/8 participants must answer Yes |
| Do you currently receive any VA benefits?  | Yes / No  | Must answer Yes |
| Are you able to join the Zoom session from an internet-connected desktop, laptop, or mobile phone? | Yes / No | Must answer Yes |
| Do you find it difficult to remember or learn new things, focus on a task, or make decisions?  | Yes / No | At least 4 participants must answer Yes |

## Timeline 

### Optional 30-min Kick-off Call with Perigean

- `Suggested dates and times:`  
  - Tuesday, April 7, 9:30am \- 2pm ET (except 11:30-12pm)
  - Friday, April 10, 12:30pm \- 5pm ET


### Prepare

- `Pilot participant name:` Cameron Johnson  
- `Date and time of pilot session:` Friday April 3, 2026 2:30-3:30 ET 

### Research sessions

- `Planned dates of research:` April 13, 2026 \- April 28, 2026 

### Length of sessions

- `Session length:` **60 minutes**   
    
- `Buffer time between sessions:` **30 minutes**  
    
- `Maximum Sessions per day:` **4 sessions per day**

### Availability

**Time slots**

- `4/13, Monday, 11:30am-6:00pm EST (4)`  
- `4/14, Tuesday, 1:00pm-2:30pm EST (1)`  
- `4/14, Tuesday, 3:30pm-6:00pm EST (2)`  
- `4/15, Wednesday, 9:30am-12:30pm EST (2)`  
- `4/15, Wednesday, 1:30pm-6:00pm EST (3)`  
- `4/16, Thursday, 12:30pm-5:30pm EST (3)`  
- `4/17, Friday, 11:00am-12:30pm EST (1)`
- `4/17, Friday, 2:30pm-5:30pm EST (2)`  

- `4/20, Monday, 11:30am-6:00pm EST (4)`  
- `4/21, Tuesday, 9:30am-2:00pm EST (3)`  
- `4/23, Thursday, 9:30am-5:30pm EST (4)`  
- `4/24, Friday, 9:30am-5:30pm EST (4)`

- `4/27, Monday, 12:30pm-4:00pm EST (2)`
- `4/28, Tuesday, 10:30am-2:00pm EST (3)`



## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Elena B. Naids**  
- `Research guide writing and task development (usually but not always same as moderator):` **Elena B. Naids**  
- `Participant recruiting & screening:` **Perigean**  
- `Project point of contact:` **Elena B. Naids**  
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **–**  
- `Note-takers:` **Danielle Oppendike**  
- `Observers`  - *This is a potential list of observers across all sessions. We will limit each session to a max of 2 observers.*   
  - **Becky Phung**
  - **Kace Bowen**  
  - **Stephanie Vargo**  
  - **Matt Floyd**  
  - **Walker Marlatt**  
  - **Alex Castillo**
  - **Jerek Shoemaker**

## Approvals ✅

- `Reviewed by` Becky Phung`, OCTO Product Owner on 4-02-2026`  
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
