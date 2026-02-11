---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience, Benefit Payments and Debts, July 2022"
date: 2022-07-01
last_updated: 2022-07-01
team: "Authenticated Experience"
product: "My VA - Payment History"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans identified financial information as high priority on My VA dashboard. Need to iterate on benefit payments and debts section to include payment and debt details that encourage action and key information Veterans want to see, including introducing outstanding copays."
  product_location: "va.gov/my-va - Benefit Payments and Debts section"
  user_familiarity: "iteration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine if the redesigned notification style is clear and actionable"
  - goal_2: "Determine if the title of the two sections accurately convey the content"
  - goal_3: "Validate that the details displayed are the most important pieces of information for debts"
  - goal_4: "Validate that the logical next step for debts is effectively presented and Veterans know how to take action"
  - goal_5: "Validate that the most important pieces of payment information are being presented on My VA"

research_questions:
  - "Do users notice the notification at the top of the page and what would they do next?"
  - "Do any users have trouble seeing any aspect of the notification?"
  - "What do users expect to see in each section before and after reviewing content?"
  - "Do veterans understand what debt is and why it might be due from them?"
  - "Is showing the total amount of outstanding debt useful on My VA?"
  - "Does usage of dark red color and parentheses for debt convey importance? Do colorblind and low vision users have difficulty?"
  - "Is it better to show total for all debts and copays as one card or two separate cards?"
  - "Is the difference between debts and payments clear?"
  - "Is it clear that the payment shown is just the most recent payment?"
  - "Do the dark green color and plus sign convey payments deposited to them? Any issues for colorblind users?"

hypotheses:
  - "All users will be able to clearly see and read the notification and know how to act on it"
  - "Veterans will find debt information useful and determine a path to resolve debts"
  - "Veterans will be able to tell the difference between amounts due and amounts paid"
  - "Surfacing more details about debts and payments is important to Veterans"
  - "There may be confusion around whether copays should fall under debts or healthcare-related section"

expected_outcomes: "Use findings to update content and links in this section of My VA, and to propose a new notification component for the design system"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation strategy"
  
  primary_criteria:
    - "16 Veterans requested for minimum 8 completed sessions"
    - "All must have received education benefit or compensation/pension payments from VA"
    - "At least 50% should have incurred debt or have copay balance due"
    - "All must be able to screenshare via Zoom"
    - "50% on desktop device, 50% on non-desktop (tablet or mobile)"
    
  secondary_criteria:
    - "8 women, 8 men"
    - "3 participants with colorblindness"
    - "8 participants who identify as other than white"
    - "5 participants LGBTQ+"
    - "8 participants age 55+"
    - "5 with cognitive disability"
    - "5 without college degree"
    - "5 in rural area"
    
  screener_questions:
    - question: "Have you ever received an education, compensation, or pension payment from the VA?"
      qualifying_response: "Yes"
    - question: "Do you have education, compensation, or pension debt with VA?"
      qualifying_response: "Yes qualifies for 50% of participants"
    - question: "Do you have health care related debt with VA?"
      qualifying_response: "Yes qualifies for 50% of participants"
      
participants:
  veterans: 16
  caregivers: 0
  dependents: 0
  total_recruited: 16
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2022-07-26"
  pilot_participant: "Christia Troyer"
  research_dates: "2022-08-01 to 2022-08-05"
  research_review_submission: "2022-07-20"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "My VA as one-stop shop for action items and benefit status"
    key_results: "Provide more direct, personalized routes to Veterans' most critical updates and tasks with clear path to resolution"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking care of myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/payment-information-research-plan.md"
    
tags:
  - "AUD: Veterans"
  - "PRDT: MyVA"
  - "PRDT: Payment-history"
  - "BNFT: Disability"
  - "BNFT: Education"
  - "BNFT: Healthcare"
  - "DSC: Notification"
  - "usability-testing"
  - "authenticated-experience"
  - "Accessibility"
  - "colorblind"
  - "debt"
  - "payment"
  - "copay"
  - "personalization"
---

# Research Plan for Authenticated Experience team - Benefit Payments and Debts, July 2022

## Background

Throughout [My VA payment information research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/payment-information-research-plan.md) in January 2022, the recurring theme mentioned by Veterans is that seeing financial info on My VA dashboard is a high priority. We gathered information during that research around what the critical pieces of information about a veteran's financials are, such as amounts and due dates.

Since the addition of benefit payments and debts on My VA, the importance of financial information is also reflected in analytics, as viewing payments is a top interaction on My VA and managing debt has performed well since its launch in April 2022.

This effort aims to iterate and build on the recent addition of benefit payments and debts by incorporating payment and debt details that will encourage action where necessary and include key pieces of information that veterans want to see on My VA. This effort will also introduce outstanding copays on My VA.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history).

### OCTO Objectives

The iteration of a financial information section should help fulfill our north star objective of moving toward My VA being the one-stop shop for action items and benefit status, so that it provides more direct, personalized routes to Veterans’ most critical updates and tasks, and a clear path to resolution.

### Veteran Journey

Since Veterans can incur debt and receive payments any time after establishing benefits with VA, this work impacts the Veteran journey from Starting Up and beyond.

## Research Goals

### **1. Determine if the redesigned notification style is clear and actionable.**

- Do users notice the notification at the top of the page?
- Do any users have trouble seeing any aspect of the notification?
- What would users do next after reading this notification?
- What would users do if they had settled all debts but this notification was still appearing at the top of My VA?

### **2. Determine if the title of the two sections accurately convey the content.**

- Before reviewing the content of these two sections, what do users expect to see in each?
- What do users think that outstanding debts are?
- What do users think that benefit payments are?
- After revealing the content of both sections, are there any surprises?
- Is this information that veterans would want to see once they log into VA.gov?

### **3. Validate that the details displayed are the most important pieces of information for debts.**

- Do veterans understand what debt is and why it might be due from them?
- Do veterans find it useful to see the last date that the debt was updated on My VA?
- Is showing the total amount of outstanding debt useful on My VA?
- Does the usage of the dark red color and parantheses for debt make it clear that this amount is due and convey a sense of importance? Do colorblind and low vision users have any difficulty seeing the dark red text?
- Is it better to show the total for all debts and copays as one card or as two separate cards? Is the difference between debts and copays clear for each option?
- Is there any important information missing in this section?

### **4. Validate that the logical next step for debts is effectively presented to the veteran and they know how to take action on it.**

- How do users think they would go about paying or requesting help for debt?
- What do users expect to happen when they click the Manage all VA debt link?
- Do users want to be able to click on an individual debt, or go to a page to view and manage your VA debt? What about the manage your VA bills link?
- What would a user do if they had questions about their debts?
- Would a user expect to see anything here if they had paid off a debt?

### **5. Validate that the most important pieces of payment information are being presented on My VA.**

- Is the difference between debts and payments clear?
- Is it clear that the payment shown is just the most recent payment?
- How long would veterans want this info to persist on My VA if they were no longer receiving monthly payments?
- Is it unclear if we take away the account number where this money was deposited to? Do veterans know where to find that info if they are unsure?
- Do the dark green color and plus sign convey that these are payments that have been deposited to them? Do colorblind and low vision users have any difficulty seeing the dark green text?
- Is there any important information missing in this section?

### Outcome

We'll use the findings from this research to update the content and links in this section of My VA, and to propose a new notification component for the design system.

### Hypothesis

- We believe that all users will be able to clearly see and read the notification at the top of the page and will know how to act on it if they wished to see more details or resolve a debt.
- We believe Veterans will find the debt information useful and will be able to determine a path to resolve debts that are due from My VA.
- We believe Veterans will be able to tell the difference between amounts that are due and amounts that have been paid to them on My VA.
- We believe that surfacing more details about debts and payments is important to Veterans and is something they would want to see upon logging into the site.
- We believe that there may be some confusion around whether copays should fall under debts or belong under a healthcare-related section because feedback on this topic has been split fairly even so far.

## Method

We'll conduct remote usability testing over Zoom using a prototype. This method will enable us to show various types of debt and payments for all participants without restricting by which they currently have so we have a diverse user population to pull from and all users can see both debts and payments. We will plan to test in production with a screen reader user before launch since that is a limitation of testing with a prototype.

### Research materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/june-2022-research/conversation-guide.md)

**Links to prototypes:** Sketch prototypes no longer supported after February 16, 2024
- ~~[Desktop version 1](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/C420F965-7F88-4A6E-A886-36385E9B7C82)~~
- ~~[Desktop version 2](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/1CC7B24C-E3F9-4032-9C80-3087E1DEAC91)~~
- ~~[Mobile version 1](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/A4FB6758-495D-4468-95CE-9876FF97782C)~~
- ~~[Mobile version 2](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/F49A6509-A8FB-410D-AC45-1861C1DC959D)~~

## Recruitment

### Recruitment approach

We will recruit Veteran participants using a lean maximum variation strategy. We'll leverage Perigean's recruiting services to find our participants.

### Recruitment criteria

Schedule 16 Veterans for a minimum of 8 successfully completed sessions.

#### **Primary criteria (must-haves)**

- All participants should have received education benefit or compensation/pension payments from the VA. Screener question:

  - Have you ever received an education, compensation, or pension payment from the VA?

  - Answering yes would qualify the participant for the study.

- At least 50% of participants should have incurred education (CH 33, CH 34, CH 35), compensation/pension debts, or have a copay balance due. Screener questions:

  1. Do you have education, compensation, or pension debt with VA?
  2. Do you have health care related debt with VA?

  - Answering yes to question **1 OR 2** would qualify the participant for the study.

- All participants must able to screenshare via Zoom. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.

- 50% of participants should be able to participant from a desktop device.

- 50% of participants should be able to participate from a non-desktop device (tablet or mobile phone).

- 8 women, 8 men

- 3 participants who have a form of colorblindness

- 8 participants who identify as other than white

#### **Secondary criteria (nice-to-haves)**

- 5 participants who identify as other than straight/heterosexual and cisgender
- 8 participants age 55+
- 5 participants who identify as having a cognitive disability
- 5 participants who do not have a college degree
- 5 participants who live in a rural area

##### Geography

- 6 participants from the east coast
- 5 participants from the mid-west
- 5 participants from the west coast

## Timeline

### Prepare

When will the thing you are testing be finalized?

- Fall 2022

Please indicate the date and name of a mock participant for a pilot session.

- Date: Tuesday, July 26, 2022 4:00pm EST
- Name: Christia Troyer

### Research sessions

What dates do you plan to do research?

Monday, August 1 - Friday, August 5, 2022

### Length of sessions

- Sessions will be 45 minutes
- Schedule minimum of 30 minutes between sessions

### Availability

| Date | Time (all Eastern)|
| ---- | ----------------- |
| 8/1/2022 | 9am - 5pm |
| 8/2/2022 | 9am - 11am, 12-12:45pm, 1:30-5pm |
| 8/3/2022 | 9am - 11:30am, 1pm-5pm |
| 8/4/2022 | 9am - 10:30am, 12pm-3pm, 4-5pm |
| 8/5/2022 | 9am - 4pm |


## Team Roles

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker**

- Moderator: Angela Agosto, 570-807-0619, angela.agosto@adhocteam.us
- Research guide writing and task development (usually but not always same as moderator): Angela Agosto

- Participant recruiting & screening: Perigean

- Project point of contact: Angela Agosto

- Participant(s) for pilot test: Christia Troyer

- Note-takers: Perigean

- Observers:

  - samara.strauss@va.gov

  - ana@adhocteam.us

  - erica.sauve@adhocteam.us

  - taylor.mitchell@gcio.com
