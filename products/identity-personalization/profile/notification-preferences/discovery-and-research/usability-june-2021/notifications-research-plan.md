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

# Research Plan for Authenticated Experience, Notification Settings, June 2021

## Goals	

### What product & team are you doing this research for?	

Profile notification settings, Authenticated Experience

### Background 	

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, Veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA Profile team is building a communications permissions engine that will integrate with the VA.gov profile frontend and allow veteran-managed settings to be saved and shared across systems at the VA.

See our [MVP definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md) for more details.

### Questions we hope to be able to answer through this research

1. What expectations do Veterans have about managing notifications?
2. What kind of notifications do Veterans expect to be able to receive from the VA?
3. What words do Veterans use to talk about or search for notification content?
4. How do Veterans expect to be able to discover notifications they're not currently opted in to?
5. Does our solution enable Veterans to manage their notifications without encountering UX hurdles?
6. Are we providing sufficient contextual information through group and notification names?
7. Do Veterans expect to be able to update their contact info right here on the page?
8. If a Veteran has partial contact info (missing a phone or email from their profile), do they understand how to make updates so they can get notifications to that channel?
9. Does a Veteran with partial contact info they understand email/text is also available when they don't have a checkbox to click?
10. Do they know how to get back to notification settings once they add info?
11. What kind of static content support makes sense for this section of profile?

We're also working on improvements to our user experience for removing contact information, so we'll include one question about that to evaluate during the final task in our sessions:

Do Veterans experience any usability hurdles when removing contact information from their profile?

### Our hypothesis for this research study

- Veterans will expect to be able to manage notifications from their profile.
- Veterans expect to be able to discover notifications they're not opted into via channels outside their profile - VAMC/call center interactions, campaigns, etc.
- Our solution will allow Veterans to intuitively manage their notification settings.
- The group and notification names will be easily understood.
- Our content and design will help Veterans understand why they can only manage notifications for the contact information they have on file.
- Having to go to the contact info section to update email or phone number will not be ideal, but it will be acceptable.
- Veterans will know how to get back to notification settings after updating their contact information.
- Veterans will be able to intuitively remove contact information without experiencing major usability hurdles.

## Method	

### What method of research are you planning? 	

This will be a 30-45 minute remote moderated usability test with a high-fidelity prototype.	

### Why this method?

A remote study will allow us to test with participants around the country. Testing with a high-fidelity prototype will provide insights to our research questions before investing time in engineering.  We'll start people a screen with partial contact information to help us evaluate our overall design, and help us understand:

- If our solution for partial contact info works for Veterans 
- If Veterans expect to be able to edit/update contact information right on the page
- If Veterans can get back to notification settings after they've updated their contact information

### Where are you planning to do your research? 

Zoom

### What will you be testing?

We'll test with a [UXPin prototype](https://preview.uxpin.com/5ecec4de6ec34eddc9f095677a881be3646124ce#/pages/139049739/simulate/sitemap?mode=i).

## Participants and Recruitment	

Please schedule 12 participants for 8 fulfilled sessions using the below criteria. Once we hit 8 sessions, we will cancel the remaining participants.

### Must have for participants

- All participants must: 
  - be Veterans
  - have logged into VA.gov **and** used text messaging in the last 6 months. 
  - be able to participate from a laptop/desktop device

#### Additional questions to ask in the screener

- Have you used text messaging on a mobile phone in the last 6 months? *Answer should be yes.*	
- Have you logged into VA.gov in the last 6 months? *Answer should be yes.*

### Good to have for participants

- At least 3 women
- At least half of the participants identify as a person of color
- At least 2 participants under 30 and 2 participants over 55
- At least one person that does not have a college degree (to include enlisted Vets)
- At least one person that has a college degree (to include officer Vets)
- At least one person who lives in a rural or remote area
- At least one person who lives in a major metropolitan area
- At least one person with a disability rating of 70% or greater
- At least one person with an identified cognitive consideration of PTSD or TBI

### Recruitment requirements

- All must have a laptop/desktop device and be willing to be complete their interview on said device
- The participants have Zoom downloaded prior to the session
- The participants know how to screen share
- Note that our prototype isn't compatible with assistive technology

### What is your recruitment strategy? 	

We will leverage Perigean's services to recruit participants.

## Timeline

#### Desired Timeline: June 14-16, 2021 

45 minute sessions<br/>
**Schedule at least 15 minute breaks in-between sessions.**

| Team Availability | Time (EST) |
| ----------------- | ---------- |
| June 14, 2021     | 9am-7pm    |
| June 15, 2021     | 9am-7pm    |
| June 16, 2021     | 9am-7pm    |

#### Pilot Session  

| Team Availability | Time (EST)                |
| ----------------- | ------------------------- |
| June 10, 2021     | 11:30am-1:30pm, or  2-3pm |
| June 11, 2021     | 4-5pm                     |

## Team Roles	

Please list the people who will be serving in each role. 

- Moderators:	Christian Valla (cvalla@governmentcio.com) and Liz Lantz 
  - Christian is on the west coast, so he would facilitate any sessions that start after 5pm eastern. 
  - Liz will facilitate any sessions before 11am eastern.
  - Any sessions between 11-5, we'll figure it out amongst ourselves. We will each moderate 4 sessions.
  - Liz is not available after 5pm eastern, so please do not schedule more than 4 sessions after 5pm.
- Research guide writing and task development:	Liz Lantz
- Participant recruiting & screening:	Perigean
- Project point of contact:	Liz Lantz, 843-898-4463, liz.lantz@adhocteam.us
- Participant(s) for pilot test
  - Taylor Mitchell - tmitchell@governmentcio.com
  - Please send pilot invite to Christian Valla as well.
- Note-takers: Internal; will send emails via Slack once they are recruited.
- Observers:	
  - Samara Strauss - samara.strauss@va.gov
  - Beverly Nelson - beverly.nelson@va.gov 
  - Ana Jakabcin - ana@adhocteam.us
  - Erik Hansen - erik@adhocteam.us
  - Lihan Li- lihan@adhocteam.us
  - Taylor Mitchell - tmitchell@governmentcio.com
  - Tressa Furner - tressa.furner@adhocteam.us
  - Maria Becker - Maria.becker@thoughtworks.com
  - Todd Stanich - todd.stanich@thoughtworks.com
  - Paras Shah - paras@docme360.com
  - Terry Bazemore - tbazemore@meetveracity.com

**Please include the following information in the calendar invite for observers:**

> Please plan on joining the session *prior* to the scheduled start time.  After the session begins, the moderator may not be able to admit observers.  When you join, please keep your camera off, your microphone muted, and change your name to "observer".  If you have questions during the session, please post them in #feedback-backchannel on Slack.



## Resources	

- [MVP definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md) 	
- [Convo Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-conversation-guide.md)		
- [Prototype](https://preview.uxpin.com/5ecec4de6ec34eddc9f095677a881be3646124ce#/pages/139049739/simulate/sitemap?mode=i)
- Synthesis: [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/session-notes) and [affinity map](https://app.mural.co/t/vsa8243/m/vsa8243/1623630550601/cbe1799b20d464ea6cedb4629d84851891d51e70?sender=lizlantz1528)
- [Findings report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-research-findings.md)
- Findings Decks - to come

