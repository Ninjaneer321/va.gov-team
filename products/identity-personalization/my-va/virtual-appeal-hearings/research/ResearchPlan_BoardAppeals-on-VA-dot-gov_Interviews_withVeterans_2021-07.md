---
# Research Plan Metadata
title: "Understanding Board Appeal Hearings on VA.gov, July 2021"
date: 2021-07-01
last_updated: 2021-07-01
team: "Caseflow Team"
product: "Board Appeal Virtual Hearings"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Enable Veterans with existing appeals to self-service notify the Board they would like to change to a virtual hearing, eliminating inefficient manual outreach by Hearing Coordinators"
  product_location: "VA.gov authenticated experience (claims tracking area)"
  user_familiarity: "New self-service feature for existing Board appeal process"
  product_brief_url: "https://vajira.max.gov/browse/CASEFLOW-51"

# Research Design
methodology: "Semi-structured interviews and usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand where in VA.gov authenticated experience Veterans expect to find and change information about their Board hearing"
  - goal_2: "Identify what information Veterans need to confidently make a decision about virtual hearing"
  - goal_3: "Learn how Veterans currently find and manage information about their Board hearing"

research_questions:
  - "Where in the VA.gov authenticated experience do Veterans expect to be able to change their existing hearing request type to virtual?"
  - "What information do Veterans need to confidently make a decision about whether they'd like a virtual hearing?"
  - "How do Veterans find and manage information about their Board hearing now?"

hypotheses:
  - "Veterans will expect to see and make changes to their existing hearing request within the Track Claims section of the VA.gov authenticated experience"
  - "Veterans may have concerns about virtual hearing technology requirements that would impact their willingness to choose the virtual hearing format"
  - "Veterans will want to receive clear guidance on next steps"

expected_outcomes: "Inform next stages of design for choosing a virtual hearing on VA.gov"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for Veterans with Board appeal hearings"
  
  primary_criteria:
    - "Veterans who have requested or participated in a hearing with a Judge from the Board of Veterans' Appeals"
    - "Must be able to participate via laptop or desktop and screenshare via Zoom"
    
  secondary_criteria:
    - "Mix of hearing not held and hearing already held"
    - "Mix of participants who had virtual hearing vs VA facility"
    - "Mix of those with VA.gov accounts (LOA3) and those without"
    - "At least 2 non-male"
    - "At least 2 non-white"
    - "At least 3 who are 60 years and over"
    - "At least 1 with cognitive impairments or functional disabilities"
    
  screener_questions:
    - question: "Have you requested or participated in a hearing with a Judge from the Board of Veterans' Appeals to review a VA claims decision?"
      qualifying_response: "Yes"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-07-20"
  pilot_participant: "Kim Ladin, Risha Parikh, Kavitha Krishnan"
  research_dates: "2021-07-26 to 2021-07-30"
  research_review_submission: "2021-07-20"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Logged-in users can easily track applications, claims, or appeals online"
    key_results: 
      - "Enable self-service virtual hearing selection"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results:
      - "Consolidated Board appeal information on VA.gov"
      
veteran_journey_phases:
  - "Living Civilian Life"
  - "Retiring"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "TBD"
    
tags:
  - "board-appeals"
  - "virtual-hearings"
  - "semi-structured-interviews"
  - "authenticated-experience"
  - "caseflow"
---

# **Research Plan: Understanding Board Appeal Hearings on VA.gov**

Date: July-August 2021

## **Goals**

### **Product and Team**

This research plan outlines the Caseflow Team's approach to understanding where in the VA.gov authenticated experience Veterans expect to find and make changes to information about their Board of Veterans' Appeals hearing. This exploratory research will inform the next stages of design for choosing a virtual hearing on VA.gov.

### **Background**

In March 2020 in response to the COVID-19 pandemic, the Board of Veterans' Appeals expanded access to virtual hearings to all Veterans. Virtual hearings allow Veterans, their representatives, and Board Veterans Law Judges to attend a hearing via video conference using their own device and from the location of their choice, eliminating the need to travel to a VA Regional Office.

However, there is not a self-service way for Veterans with an existing appeal to notify the Board that they would like to change to a virtual hearing. Hearing Coordinators at the Board are currently calling and emailing Veterans and their representatives to ask if they would like to change to virtual and then manually recording responses in Caseflow. This method is not only inefficient, but it also requires a lot of one-on-one communication by Hearing Coordinators to confirm that Veterans have the technical requirements in place to participate in a virtual hearing. In FY22, the Board needs to scale up to contacting more than 60,000 Veterans who are waiting for a hearing. Having a way for Veterans to opt-in to a virtual hearing on VA.gov will allow the Board to focus on scheduling and holding virtual hearings instead of finding out if a Veteran would like a virtual hearing.

### **Research Questions**

- Where in the  VA.gov authenticated experience do Veterans expect to be able to change their existing hearing request type to virtual?
- What information do Veterans need to confidently make a decision about whether they'd like a virtual hearing?
- How do Veterans find and manage information about their Board hearing now?

### **Hypotheses**

- Veterans will expect to see and make changes to their existing hearing request within the Track Claims section of the  VA.gov authenticated experience.
- Veterans may have concerns about virtual hearing technology requirements that would impact their willingness to choose the virtual hearing format.
- Veterans will want to receive clear guidance on next steps.



## **Method**

**What method of research are you planning?**

Remote, semi-structured interviews and usability testing of the existing VA.gov authenticated experience

**Why this method? How does this methodology help you answer your research questions?**

Semi-structured interviews help the Caseflow Team to uncover rich descriptive data on the personal experiences of Veterans as they decide whether or not to choose a virtual hearing. The flexible format allows for a more open-ended discussion, which can surface pain points and areas for improvement that the Caseflow Team might not otherwise think to ask about. The interviews will be conducted remotely to allow us to speak with people located throughout the United States.

Having participants complete tasks using the current VA.gov authenticated experience will help us understand how they find information about their Board hearing and gain insight into the type(s) of information they may expect to see.

**Where are you planning to do your research?**

Remotely via Zoom

**What will you be testing?**

- Participants who have accounts will log in to [VA.gov](http://VA.gov)
- Participants who don't have accounts will be shown a clickable prototype created from VA.gov staging screenshots



## **Participants and Recruitment**

### **Recruitment Strategy**

The Caseflow Team will work with Perigean to recruit participants with a **Board appeal hearing**.

> When a Veteran disagrees with a VA decision on a claim for benefits, they can choose from 3 decision review options (Supplemental Claim, Higher-Level Review, or **Board Appeal**). If a Veteran chooses a Board Appeal, they have another 3 options (Request a Direct Review, Submit more evidence, **Request a hearing**). We'd like to speak with participants who have **chosen a Board appeal and requested a hearing with a Veterans Law Judge**. 



### **Participant Criteria**

**We'd like to interview 6 Veterans.**

In order to speak with 6 Veterans, we'd like Perigean to recruit 10, with the expectation that there be a max of 3-4 no shows. We'll ask to cancel any remaining sessions once we hit 6.



#### **Must have (absolutely must be true in order to run the study)**

- Participants must be able to participate via a laptop or desktop. Phones/iPads will not work.

- Participants must be able to screen share via Zoom.

- Have you requested or participated in a hearing with a Judge from the Board of Veterans’ Appeals to review a VA claims decision? (For more information about Board appeals hearings, see https://www.va.gov/decision-reviews/board-appeal/veterans-law-judge-hearing/)

  - [radio buttons]: Yes, No
  - Answer must be Yes

  

#### **Good to have (other criteria that would strengthen results)**

> *Plain language summary — We'd like a mix of:*
>
> - *Participants who are able to login to the [VA.gov](http://VA.gov) authenticated experience to view their claim/appeal status (i.e. LOA3 level of assurance) and those who cannot / don't have an account*
> - *Participants who have completed their hearing and those who are still waiting*
> - *Participants who've had a virtual tele-hearing and those who had their hearing at a VA facility*
> - *Demographic and geographic diversity*



- What is the status of your Board Appeal hearing?

  - [radio buttons]:
    - [1] I'm waiting for my hearing to be scheduled
    - [2] I've been notified my hearing is scheduled, but it hasn't been held
    - [3] My hearing has been held
    - [4] I withdrew my request for a hearing
  - Recruit a mix of hearing not held [1, 2, 4] and hearing held [3]

- If you've already had your hearing, when was it held?

  - [radio buttons]:
    - [1 ]February 2019 or before
    - [2] March 2019 or after
  - Recruit [2]

- If you've already had your hearing, where did you participate from?

  - [radio buttons]:
    - [1] A VA facility
    - [2] Your home, representative's office, or other non-VA facility
  - Recruit a mix

- When was the last time you logged into your VA.gov account and viewed the status of your Board appeal?

  - `Question for Perigean: Do you recommend rephrasing this question? Ultimately, we'd like a mix of folks who can login to their account and view claim/appeal information (LOA3), and those who can't.`
  - [radio buttons]:
    - [1] Never (or I don't have a VA.gov account)
    - [2] More than a year ago
    - [3] Within the last six months
    - [4] Within the last month
  - Recruit a mix of no account / never [1] and have an account [2, 3, 4]

- What is your gender?

  - [open text field]
  - Recruit a mix, minimum 2 non-male

- How would you describe your race or ethnicity?

  - [open text field]
  - Recruit a mix, minimum 2 non-white

- What is your age?

  - [open text field OR numeric dropdown]
  - Recruit at least 3 who are 60 years and over

- Do you have any disabilities? If yes, please briefly describe your disabilities if you're comfortable doing that.

  - [open text field] OR [radio buttons with 'Yes' 'No' 'Prefer not to say' options and open text field on Yes option]
  - Recruit at least 1 participant that has identified cognitive impairments and/or functional disabilities.
  - Diagnoses that may align with this would be: Traumatic Brain Injury (TBI), Post-Traumatic Stress Disorder (PTSD), Attention-Deficit/Hyperactivity Disorder (ADHD), Autism, and Vertigo. Other conditions may be autism, aphasia, dyslexia, dyscalculia, distractibility, memory loss, reading difficulties, low tolerance for cognitive overload, and intellectual/adaptive functioning challenges such as learning and problem-solving.

- What state or country are you currently located in?

  - [open text field]
  - Recruit a mix (i.e. from a variety of US states; bonus for those in overseas locations)

  

## **When?**

- Timeline: What dates do you plan to do research?

  - July 27-30

- Prepare: When will the thing you are testing be ready?

  - July 20

- Length of Sessions: How long do you estimate each session will be?

  - 60 minutes

- Availability: All times are Eastern Standard Time.

  - Please allow 30 minutes between sessions to allow for participants who can't join on time or go over time.
  - Mon July 26:
    - 12:30pm — 5:30pm
  - Tue July 27:
    - 12:30pm — 5:30pm
  - Wed July 28:
    - 12:30pm — 5:30pm
  - Thu July 29:
    - 12:30pm — 5:30pm
  - Fri July 30:
    - 2:30pm — 5:30pm

- Pilot: Indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?

  - Kim Ladin, Risha Parikh, and Kavitha Krishnan
  - July 20

  

## **Team Roles**

Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers.

- Moderators:

  - Kim Ladin ([kimladin@navapbc.com](mailto:kimladin@navapbc.com) | 408-250-0036)
  - Risha Parikh ([rishaparikh@navapbc.com](mailto:rishaparikh@navapbc.com) | 470-385-8278)
  - Kavitha Krishnan ([kkrishnan@tistatech.com](mailto:kkrishnan@tistatech.com) | 617-999-3160)

- Research guide writing and task development: Nichole Rosamilia, Kim Ladin, Kavitha Krishnan, Risha Parikh

- Participant recruiting & screening: [Perigean Technologies](http://perigeantechnologies.com/)

- Project point of contact: Kim Ladin

- Participant(s) for pilot test: Kim Ladin, Risha Parikh, and Kavitha Krishnan

- Note-takers: Kim Ladin, Risha Parikh, and Kavitha Krishnan

- Observers: List email addresses for those who should attend and observe the sessions (VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work)

  - Charley Ferguson ([charleyferguson@navapbc.com](mailto:charleyferguson@navapbc.com))
  - Rubaiyat Rashid ([rubaiyat@navapbc.com](mailto:rubaiyat@navapbc.com))
  - Steve Lund ([tomas@navapbc.com](mailto:tomas@navapbc.com))
  - Stephen Halliburton ([shalliburton@tistatech.com](mailto:shalliburton@tistatech.com))
  - Tomas Apodaca ([tomas@navapbc.com](mailto:tomas@navapbc.com))
  - Anastasia Jakabcin, VSA Authenticated Experience, Product Manager ([ana@adhocteam.us](mailto:ana@adhocteam.us))
  - Tressa Furner, VSA Authenticated Experience, UX Designer / Researcher ([tressa.furner@adhocteam.us](mailto:tressa.furner@adhocteam.us))
  - Kevin Hoffman, VA/DEPO, Head of Design Operations, Account Experience Crew Lead ([kevin.hoffman1@va.gov](mailto:kevin.hoffman1@va.gov))

  

## **Resources**

- Product Brief on Jira: https://vajira.max.gov/browse/CASEFLOW-51
- Discussion Guide: see accompanying markdown file
- Synthesis TBD
  - *Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)*
- Lessons Learned TBD
  - *Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.*
- Read-Out/Results TBD
