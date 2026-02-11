---
# Research Plan Metadata
title: "Research Plan for Benefits and Claims Dependents Verification On-Platform MVP 02-2025"
date: 2025-02-10
last_updated: 2025-02-10
team: "Benefits and Claims - Dependents"
product: "Dependents Verification MVP"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "VA mails Form 21-0538 to Veterans with dependents every eight years to verify dependent status. Veterans are responsible for notifying VA of changes between notifications, resulting in significant over and underpayments costing ~$250 million annually and burdening Veterans with debt."
  product_location: "Authenticated experience - 'Your VA dependents' page under 'View or change dependents', accessible via email notification"
  user_familiarity: "Combination of new and existing products - new annual notification email and digitized Form 21-0538, existing 21-686c/674 tool for updates. Veterans only verify every 8 years so familiarity varies."
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md"

# Research Design
methodology: "Mixed methods - foundational research with semi-structured interviews and usability testing with prototype"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand the Veteran's mental model of dependent verification on VA.gov and their expectations for finding tools and completing tasks around dependent management"
  - goal_2: "Validate the usability of our 0538 email notification and va.gov designs and determine whether they provide a clear path to verify and update dependents and where they might impede the Veteran from completing tasks"
  - goal_3: "Understand how the flow, designs, and copy impact the Veteran's understanding of the task"

research_questions:
  - "How does the Veteran find dependent management info and tools on VA.gov?"
  - "What actions and benefits do they associate with dependent management?"
  - "How do Veterans expect to be able to accomplish tasks they associate with dependent management?"
  - "Do directions and other informative language provide clarity or confusion?"
  - "Do the designs allow most Veterans to verify their dependents in one sitting?"
  - "Do we see indicators that a Veteran would take action immediately upon receiving the email?"
  - "What content or IA decisions might impede the Veteran from completing the task to verify or update?"
  - "Is the Veteran familiar with VA Form 0538?"
  - "Does the Veteran's mental model match the task they're completing?"
  - "Does the Veteran understand the impact of the dependency verification task?"
  - "Do Veterans answer the yes/no question accurately and with clarity based on their dependents situation?"

hypotheses:
  - "Most Veterans will be familiar with VA.gov notifications and engage directly with the email notification"
  - "Veterans will use VA.gov's search or benefits menu to find dependent management tools and information"
  - "Most Veteran's mental models will match the task to verify or update dependents"
  - "Veterans will understand the difference between the tasks to verify and update"
  - "Most Veterans will complete the dependency verification task with clarity and in one sitting"
  - "Veterans will expect to be able to edit, add, or remove individual dependents quickly"

expected_outcomes: "Build greater understanding of Veteran's mental model of dependent verification and usability of the flow, identify key moments of clarity/confusion. Findings will inform improvements to design, language, flow, IA, and entry points. Will support reducing $250M annual overpayment costs and Veteran debt burden."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation sampling"
  
  primary_criteria:
    - "Veterans with disability benefits or Pension benefits"
    - "Veterans with dependents on their VA benefits (disability or Pension) currently or previously"
    - "Representative of the VA population"
    - "At least 50% with cognitive impairment"
    - "Comfortable reading English"
    - "Have access to computer or device that runs Zoom and the prototype"
    
  secondary_criteria:
    - "Representative demographics across various cognitive abilities"
    - "Exclude assistive technology users for this lightweight prototype research"
    
  screener_questions:
    - question: "Have you ever claimed one or more dependent(s) on your VA benefits (disability or Pension)?"
      qualifying_response: "Yes"
    - question: "Select the relationship of your dependent(s): Spouse, biological child, stepchild, adopted child, child under 18, child 18-23 in school, permanently disabled child, parent"
      qualifying_response: "At least one selected"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "At least 50% answer yes for cognitive disability representation"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-02-04 to 2025-02-07"
  pilot_participant: "TBD"
  research_dates: "2025-02-10 to 2025-02-14"
  research_review_submission: "2025-01-27"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Our digital experiences are the best way to access VA health care and benefits"
    key_results: 
      - "1.2 Number of transactions processed using our products have increased by 25%"
      - "1.3 All new products have a faster transaction time than those they replaced"
  - objective: "Objective 2: Our platforms are the best way to deliver products at VA"
    key_results:
      - "Support platform delivery efficiency"
      
veteran_journey_phases:
  - "Getting out: Engaging VA to access benefits and services"
  - "Putting down roots: Taking care of my family"
  - "Retiring: Finding additional sources of income"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2023-09-dependents-research/research-findings.md"
    
tags:
  - "dependents"
  - "benefits"
  - "verification"
  - "form-21-0538"
  - "usability-testing"
  - "foundational-research"
  - "prototype"
  - "authenticated-experience"
  - "veterans"
  - "cognitive-disability"
  - "email-notification"
  - "disability-benefits"
  - "pension-benefits"
---

# Research Plan for Benefits and Claims Dependents Verification On-Platform MVP 02-2025

## Background
### What problem is your product trying to solve?

VA mails Form 21-0538 to Veterans with dependents every eight years to verify dependent status. The Veteran is responsible for notifying the VA of any changes in dependent status between these infrequent notifications. This results in significant over and underpayments, costing the VA ~ $250 million annually and burdening Veterans with debt.

To solve this problem, we’re building the following:
 
- An email will be sent annually to Veterans with dependents on their benefits, reminding them to review and update or verify their dependents on VA.gov at least once every 12 months. The email will also invite Veterans to visit the authenticated "Your VA dependents" page, where they can review their dependents (existing functionality) and answer whether their dependents have changed (new functionality on VA.gov as a part of this effort).
  - If no, VA.gov will automatically generate a 21-0538 form, ask the Veteran to review the information, sign a statement of truth, and then submit the 21-0538 form.
  - If yes, they will be directed to fill out the add/remove dependents form on VA.gov (21-686c/674).
- This research will focus primarily on the on-platform verification element because we completed [research focused on the email portion of the solution in Fall 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2023-09-dependents-research/research-findings.md).

### Where is your product situated on VA.gov?
The product is located within the authenticated experience, beginning on the "Your VA dependents" page, housed under the unauthenticated "View or change dependents" page. Veterans may arrive via the unauthenticated email notification. The email’s primary CTA would invite Veterans to the "View or change dependents" page. At that point, they would log in to view and verify that their dependents are correct via the "Your VA dependents" page or to update their dependents via 686c/674 directly.

[View the proposed flow with common entry points in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1716382766670)
### What is Veterans’ familiarity with this tool? Is this a new product or an iteration of an existing one?

The verification MVP is a combination of new and existing products:

New:
- The annual notification email
- Digitization of “No” answers for VA Form 21-0538 (“No, I don’t need to make any changes to my dependents, I can verify they are correct”)

Existing:
- Online tool to request to add or remove dependents (VA Form 21-686c and/or 21-674) (Which we’re leveraging for “Yes” answers—”Yes, I need to make changes to my dependents”)

Veterans may be familiar with these tools or the VA forms they’re based on, but since Veterans are only required to verify every 8 years, it’s possible that Veterans have never yet had to verify or don’t recall the process. 

[Link to product brief
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md)
### OCTO Priorities
- Objective 1: Our digital experiences are the best way to access VA health care and benefits.
- Objective 2: Our platforms are the best way to deliver products at VA.
- 1.2 Number of transactions processed using our products have increased by 25%. 
- 1.3 All new products have a faster transaction time than those they replaced. 

### Veteran Journey
- Getting out: Engaging VA to access benefits and services
- Putting down roots: Taking care of my family
- Retiring: Finding additional sources of income

## Research Goals & Questions

- Understand the Veteran’s mental model of dependent verification on VA.gov and their expectations for finding tools and completing tasks around dependent management.
  - How does the Veteran find dependent management info and tools on VA.gov?
  - What actions and benefits do they associate with dependent management?
  - How do Veterans expect to be able to accomplish tasks they associate with dependent management? 
- Validate the usability of our 0538 email notification and va.gov designs and determine whether they provide a clear path to verify and update dependents and where they might impede the Veteran from completing tasks.
  - Do directions and other informative language provide clarity or confusion?
  - Do the designs allow most Veterans to verify their dependents in one sitting?
  - Do we see indicators that a Veteran would take action immediately upon receiving the email? Do they currently receive VA.gov notifications?
  - What content or IA decisions might impede the Veteran from completing the task to verify? Update? 
- Understand how the flow, designs, and copy impact the Veteran’s understanding of the task. 
  - Is the Veteran familiar with VA Form 0538?
  - Does the Veteran’s mental model match the task they’re completing?
  - Does the Veteran understand the impact of the dependency verification task?
  - Do Veterans answer the yes/no question accurately and with clarity based on their dependents situation.

### Outcome
With findings from this study, we’ll build a greater understanding of the Veteran’s mental model of dependent verification and usability of the flow and identify key moments of clarity and/or confusion. This will inform us of our improvements to the design of this product, including uncovering opportunities to improve language, flow, etc. 

Evaluative findings will directly affect the design and content of our MVP email and verification experience. More foundational insights will help us understand the Veteran's comprehension of and expectations around dependent verification and will inform our plans for information architecture, entry points, and how to improve in-page comprehension. As a secondary outcome, foundational insights will inform longterm visioning for dependent management in general. 

Our topline metric is reducing the average amount of debt accrued by Veterans and reducing the $250 million that overpayments cost the VA every year. This would also reduce the burden on VA employees who have to audit Veterans and manage debt. Secondarily, we will look to findings from this study to inform the long-term vision for enhancements to dependent management on VA.gov.

### Hypotheses

**Task: Receive notification**
- Most Veterans will be familiar with VA.gov notifications
- Most Veterans will engage directly with the email notification
- Veterans will have clarity around the request, but may face lack of clarity with understanding the implications of the request (

**Task: Locate verification tool**
- Veterans will use VA.gov’s search or benefits menu to find dependent management tools and information.

**Task: Comprehend request**
- Most Veteran’s mental models will match the task to verify or update dependents.
- Most Veterans will understand that they must still respond to a paper 21-0538 request after completing the update or verify task on VA.gov (won’t disregard future paper requests)

**Task: Determine primary action (verify / update)**
- Veterans will understand the difference between the tasks to verify and update
- Veterans will expect to be able to edit, add, or remove individual dependents quickly

**Task: Complete verification**
- Most Veterans will complete the dependency verification task with clarity and in one sitting.
- Some Veterans may find the tool unfamiliar or unexpected


## Methodology
This study will consist of two parts: 

**Foundational research**: a series of open-ended questions to gain further insight into the Veteran’s mental model of dependent management on VA.gov and their expectations around managing their dependents.

**Usability testing**: This is appropriate to our goals of evaluating the flow, design, and content of this new experience and whether they cause clarity or confusion to discover opportunities for improvement before development. 

If pilot tests indicate usability testing is being primed or otherwise influenced by the foundational line of questioning, we will alternate the order of usability test related questions and foundational questions by session. 

### Location
Sessions will be held remotely over Zoom.

### Research Materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2025-02-dependents-verification-mvp-research/conversation-guide.md)
- [Link to prototype](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=1868-15803&t=1OImniqt5pucSNXq-1)

## Recruitment
### Recruitment approach
We’ll partner with Perigean to recruit Veterans who meet our criteria

### Recruitment criteria
Our goal is to include a minimum of 8 and recruit 12 (to allow for no-shows and sessions that end early Veterans) using a lean maximum variation sampling strategy. 

Primary criteria (must-haves): 
- Veterans with disability benefits or Pension benefits
- Veterans with dependents on their VA benefits (disability or Pension) currently or previously (spouse, child, stepchild, adopted child, school-aged child (18-23 years old), permanently disabled child, parent) 
- Representative of the VA population (with the exception of assistive technology which we will not include in this lightweight prototype-based research but will include in following research in staging or post-launch). 
- Veterans of varying cognitive abilities, with at least 50% with some sort of cognitive impairment
- Veterans who are comfortable reading English
- Veterans who have access to a computer or other device that will run Zoom and the prototype

#### Screener questions:

Have you ever claimed one or more dependent(s) on your VA benefits (disability or Pension)? Y/N [no would disqualify from the study]

If yes, select the relationship of your dependent(s) (Check all that apply) [multi-select check boxes]

[ ] Spouse (including same-sex and common-law marriages)
[ ] Biological child
[ ]  Stepchild
[ ] Adopted child
[ ]  Child under 18 years old
[ ]  Child 18-23 years old enrolled in school full time
[ ]  Child permanently incapable of self-support
[ ]  Parent

*Another primary criteria is at least 50% (4) with an identified cognitive disability.*

**Screener question:** Do you find it difficult to remember or learn new things, focus on a task, or make decisions? [We ask this question because we want to make sure that our tools work for people who live with challenges like these.]

[Go to recruitment request ticket
](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/651)

## Timeline

| Dates    | Step |
| -------- | ------- |
| 1/17/25  | Midpoint review   |
| 1/20/25 - 1/24/25 | Refine research materials and design     |
| 1/27/25    | Submit to research review    |
| 1/27/25 - 2/7/25 | Recruitment|
| 1/28/25 - 2/4/25 | Finalize prototype etc.| 
|2/4/25 - 2/7/25| Pilot sessions| 
|2/7/25| Finalize all research assets (incorporate feedback from pilot sessions)|
|2/10/25 - 2/14/25| Research sessions|
|2/17/25 - 3/18/25|Synthesis & Review|
|3/19/25 - 3/31/25| Package findings and recommendations for handoff|

### Prepare
- Pilot participant email: TBD
- Date and time of pilot session: 2/4/25 - 2/7/25, times TBD
### Research sessions
- Planned dates of research: 2/10/25 - 2/14/25 
- Length of sessions
- Session length: 60 minutes 
- Buffer time between sessions: 30 minutes
- Maximum Sessions per day: 3
### Availability
2/10/25 - 2/14/25

8AM - 6PM EST

## Team Roles
Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker

- Moderator: Ajia Wallace, 480-748-0329, ajia.wallace@softrams.com
- Research guide writing and task development (usually but not always same as moderator): Ajia Wallace
- Participant recruiting & screening: Perigean, Ajia Wallace
- Project point of contact: Ajia Wallace
- Participant(s) for pilot test: TBD
- Accessibility specialist (for sessions where support for assistive technology may be needed): N/A
- Note-takers: Ruben Sun, Fiorella Geedi, others TBD
- Observers: We’ll share out a sign-up sheet as sessions are scheduled so stakeholders etc. can sign up to observe for specific sessions as their schedules allow. 


