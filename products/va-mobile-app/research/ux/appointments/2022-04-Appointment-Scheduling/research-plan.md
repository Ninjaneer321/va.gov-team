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

# Research Plan: Appointment Request Usability Study


## **Background**

As a Veteran who uses the VA Mobile App (or other schedulers) I want to understand the mental model of appointments with existing statuses (Pending, Confirmed, and Canceled) and testing usability of the Appointment Request flow. 

Assume I have requested an appointment in VAOS (authenticated experience), or somewhere else. I want to ensure the experience is reflected in the VA Mobile App, so that I can either start or continue to use the VA Mobile App to manage my appointments.


## **OCTO objectives**


<table>
  <tr>
   <td><strong>OBJECTIVE</strong>
   </td>
   <td><strong>OBJECTIVE DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Objective 4</strong>
   </td>
   <td>Veterans can manage their health services online
   </td>
  </tr>
  <tr>
   <td><strong>Objective 5</strong>
   </td>
   <td>Veterans and their families can find a single, authoritative source of information
   </td>
  </tr>
  <tr>
   <td><strong>Objective 6</strong>
   </td>
   <td>Logged-in users have a personalized experience, with relevant and time-saving features
   </td>
  </tr>
</table>



#### Measures to increase



* Completion rate of online transactions
* Usage of digital, self- service tools
* Percent of applications submitted online (vs. paper)


#### Measures to decrease



* Call center volume, wait time, and time to resolution
* Time from online benefit discovery to benefit delivery
* Time to successful complete and submit online transactions


## **Veteran journey**

[Link to Journey Map on Github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)


<table>
  <tr>
   <td><strong>THEME</strong>
   </td>
   <td><strong>LIFE STAGE</strong>
   </td>
  </tr>
  <tr>
   <td>Serving and Separating
   </td>
   <td>Starting up
   </td>
  </tr>
  <tr>
   <td>Living Civilian Life
   </td>
   <td>Taking care of myself, Putting down roots, Reinventing myself
   </td>
  </tr>
  <tr>
   <td>Retiring and Aging
   </td>
   <td>Retiring, Aging
   </td>
  </tr>
</table>



## **Research goals**

1. Discover the Veteran’s mental models surrounding their current appointment scheduling experience. Find opportunities, pain points.
2. Assess the usability of appointment statuses and the ability to cancel previous requests. Gather feedback on how they interpret the information.


#### Details

We want to understand how Veterans interact with their appointment schedule. Specifically, we will gain insight on current work and also observe Veterans interacting with the experimental concepts in real time. These sessions will provide clarity for what is useful currently and what particular insights can improve the Appointment experience within the VA Mobile App. 


#### Outcome

Other team’s research informed the MVP phase to display Pending Appointments. Now that the work is implemented, we will use this session to evaluate the feature’s efficacy and inform the next design phase.


#### Research questions

Conversations about healthcare and appointments provide insight into their experience, whether at the VA or somewhere else. This will also get participants thinking about appointments and their individual experiences. Running a usability test on the prototype helps to evaluate hypotheses made when designing the MVP, and also informs the next phase.


#### Hypothesis

With various digital products offering ways to book appointments for various tasks, most users expect a certain behavior. The discovery portion will uncover the expectations for the VA through how they’ve experienced this task in other places. If they only use the VA for this task, then the information received will inform how to provide the service in the mobile context.

Participants will easily find Pending appointments alongside their other confirmed, canceled and past appointments because of the label. The Pending label will have the intended meaning for some participants, not all. They will likely desire an improvement to the way the appointments are organized. 

Tapping into the Details screen will give them all of the expected details, though some may express the need for additional details they do not see. Actions they can take within this screen will also be in line with ones they would expect to be there. They also see they can Cancel a request and successfully do it.


## **Method**

This is a moderated, semi-structured interview with usability testing. It is a remote study using Zoom. 

For conducting the study, ask what device they intend to use in the session, and how it compares with the tool they normally use (if different). Things like: How proficient or comfortable are you with using the device? Is it your primary device?_

[Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/appointment-scheduling/usability-testing/conversation-guide.md) / [Link to prototype](https://www.sketch.com/s/7af71fd5-b940-4196-9402-c34b0861b441/a/9PJ5K9n/play)

## **Recruitment**


### Approach

The intended audience for this study are Veterans who have had a medical appointment, either at the VA or private care. Secondary participants include caregivers or anyone else who uses the VA Mobile App to manage appointments on a Veteran’s behalf.

We aim to recruit less represented participants so that we can have statistics that truly reflect mobile users. As recommended by OCTO, inclusive research will be critical to our findings.


### Recruitment criteria


#### Primary criteria

We want to recruit 8-12 Veterans or caregivers. Participants must have access to mobile device, or computer (desktop, laptop). They will need it to join the session and interact with the prototype. Participants should have experience making healthcare appointments, and have made/attended a medical appointment in the last year.

We are requesting our group of participants are diverse in age, gender, and race/ethnicity. At least:
* 2 people from 18-34 (age)
* 3 people from 35-55 (age)
* 4 people from 55-65 (age)
* 3 people 65+ (age)
* 3 women (gender)
* 4 non-Caucasian (race/ethnicity)


#### Secondary criteria

It would be beneficial if participants use VA healthcare, though not required for this study. We also will gather this data in the warm-up portion of the test. 

For inclusivity, we would like to recruit at least: 
 
Education level can vary, though we want to target
* 3 participants with an identified cognitive disability
* 2-3 with ‘some college’ or ‘some high school’ 


## Timeline

We will run sessions between 4/1-4/13. Please schedule 15 minutes between sessions, and no more than 3 sessions per day. Sessions should take about 1 hour. 

### Pilot

Date and time of pilot: Monday 3/28, 2:00-300pm

Pilot Participant email: rafael.arroyo@adhocteam.us


### Sessions

Session dates: 4/1-4/13

Session length: 1 hour

## Session observers 



### Availability

<table>
  <tr>
   <td><strong>SESSION DATE</strong>
   </td>
   <td><strong>AVAILABILITY (Eastern Standard Time)</strong>
   </td>
  </tr>
  <tr>
   <td>4/1
   </td>
   <td>11:00am-12:00pm EST
<p>
3:00pm-4:00pm EST
   </td>
  </tr>
  <tr>
   <td>4/4
   </td>
   <td>9:00am-10:00am EST
<p>
10:30am-11:30am EST
<p>
2:00pm-3:00pm EST
<p>
4:00pm-5:00pm EST
   </td>
  </tr>
  <tr>
   <td>4/5
   </td>
   <td>3:00pm-4:00pm EST
<p>
4:30pm-5:30pm EST
   </td>
  </tr>
  <tr>
   <td>4/6
   </td>
   <td>11:00am-12:00pm EST
<p>
1:00pm-2:00pm EST
<p>
3:00pm-4:00pm EST
<p>
5:00pm-6:00pm EST
   </td>
  </tr>
  <tr>
   <td>4/7
   </td>
   <td>9:30am-10:30am EST
<p>
11:00am-12:00pm EST
<p>
3:30pm-4:30pm EST
   </td>
  </tr>
  <tr>
   <td>4/8
   </td>
   <td>12:30pm-1:30pm EST
<p>
3:00pm-4:00pm EST
<p>
4:30pm-5:30pm EST
   </td>
  </tr>
  <tr>
   <td>4/11
   </td>
   <td>2:00pm-3:00pm EST
<p>
4:00pm-5:00pm EST
   </td>
  </tr>
  <tr>
   <td>4/13
   </td>
   <td>11:00am-12:00pm EST
<p>
1:00pm-2:00pm EST
<p>
3:00pm-4:00pm EST
<p>
5:00pm-6:00pm EST
   </td>
  </tr>
</table>



## **Team Roles**

We want Perigean to take notes, and also will have a designated note taker and observers on the call to catch context-specific insights. See participant tracker for contact information.

# Expected observers
  - therese.dickson@adhocteam.us 
  - jen.ecker@adhocteam.us 
  - meko.hong@adhocteam.us 
  - leanna.miller@va.gov
  - travis.newby@va.gov
  - brenda@digitalfoundry.com

[Link to participant tracker](https://docs.google.com/spreadsheets/d/1qJSb-9gaUuxa4Ty23r7AELE_6NDO5a_3O51lUM9dRug/edit#gid=0)
