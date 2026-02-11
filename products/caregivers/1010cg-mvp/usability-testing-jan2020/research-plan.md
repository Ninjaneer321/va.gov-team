---
# Research Plan Metadata
title: "Research Plan for VSA Caregiver, Digitization of 10-10CG Form, January 2020"
date: 2020-01-16
last_updated: 2026-02-10
team: "VSA Caregiver"
product: "10-10CG"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The paper-based 10-10CG application process will not scale when the Caregiver program expands to all eras of Veterans under the Mission Act. A digital version is needed to replace manual data entry into CARMA system."
  product_location: "VA.gov family member benefits section"
  user_familiarity: "New product - MVP to move 1010-CG online for the first time"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/product-outline.md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine whether or not the MVP prototype of the 10-10CG form is usable and easy to navigate for Veterans and caregivers"
  - goal_2: "Ensure that caregivers/Veterans have a clear and realistic understanding of requirements and expectations once form is submitted (next steps)"
  - goal_3: "Validate information architecture placement and discoverability of the form"

research_questions:
  - "Where is the best place to have this form in the IA? Where would users want to find it?"
  - "Are users able to navigate through the form easily and without hiccups?"
  - "Is information displayed in a clear and understandable manner (text/components)?"
  - "Do users understand how to fill in each field?"
  - "Do users have a sense of where they are in the site and within user path?"
  - "Do applicants understand requirements and are next steps transparent?"
  - "What do users think will happen after they've submitted the form?"
  - "What do users want to happen after submitting the form?"

hypotheses:
  - "Users will be able to navigate through the form relatively easily, but may have issues clearly understanding when they're entering veteran information versus caregiver information"
  - "Users may have difficulty understanding whether or not the caregiver actually qualifies for this benefit"
  - "Users may not understand what a secondary caregiver is, and if they should care about that"

expected_outcomes: "Validate MVP design and identify any usability issues before production launch to support Caregiver program expansion"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Mixed sample of Veterans with caregivers and current/prospective caregivers"
  
  primary_criteria:
    - "7 Caregivers (ideally some who have heard of these benefits and are either enrolled, applying, or considering applying)"
    - "7 Veterans who have caregivers"
    - "Mix of pre-911 and post-911 Veterans"
    
  secondary_criteria:
    - "If possible, include 1-2 secondary caregivers"
    - "Include mix of Veterans with disability rating of 80% or higher"
    - "Include mix of Veterans who live and do not live with caregivers"
    
  screener_questions:
    - question: "Are you a caregiver to a Veteran?"
      qualifying_response: "Yes (7 participants)"
    - question: "Are you a Veteran who has a caregiver?"
      qualifying_response: "Yes (7 participants)"
      
participants:
  veterans: 7
  caregivers: 7
  dependents: 0
  total_recruited: 14
  completed_sessions_goal: 14
  
# Timeline & Sessions
timeline:
  pilot_date: "2020-01-15"
  pilot_participant: "Justin Linn"
  research_dates: "2020-01-16 to 2020-01-21"
  research_review_submission: "2020-01-08"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 15
  max_sessions_per_day: 6
  
# Strategic Alignment
octo_priorities:
  - objective: "Support Mission Act implementation and Caregiver program expansion"
    key_results: 
      - "Enable digital application submission to replace manual paper processing"
      
veteran_journey_phases:
  - "Living Civilian Life"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Initial MVP development research"
    
tags:
  - "PRDT: Caregivers"
  - "BNFT: Healthcare"
  - "AUD: Caregivers"
  - "AUD: Veterans"
  - "usability testing"
  - "remote"
  - "form"
  - "authenticated"
  - "10-10CG"
  - "MVP"
  - "digitization"
  - "DSP: Form templates"
  - "DSP: Question/answer"
  - "moderated"
  - "Mission Act"
---

# Research Plan: VSA Caregiver, Digitization of the 10-10CG Form, January 2020
 	
## Goals	
This study is being conducted by the VSA Caregiver team.	

The VA’s Caregiver program enables caregivers and Veterans to receive benefit payments from VA. To date, the Caregiver program has focused on post-911 Veterans. The Mission Act calls for the expansion of this program to all eras of Veterans and an IT system to be built in order to support the expansion of the program.

The internal system (CARMA) requires the manual input of paper applications (form 1010-CG). When the Caregiver program expands, the paper process will not scale.  

The Caregiver team is developing an MVP to move the 1010-CG online.  Initial designs have been created and will be coded (probably in staging). We plan on testing these initial designs to make sure we're on the right track prior to pushing to production.

**The goals of this usability study are to:**
- Determine whether or not our MVP prototype of the 10-10CG form is usable and easy to navigate for Veterans and caregivers 
- Determine whether That the caregiver/Veteran have a clear/realistic understanding of requirements and expectations once form is submitted (next steps). 

**The research questions we want to address are:**
- Where is the best place to have this form in the IA?  Where would users want to find it?
- Are users able to navigate through the form easily and without hiccups?
- Is information displayed in a clear and understandable manner (text/components)? 
- Do users understand how to fill in each field?
- Do users have a sense of where they are in the site and within user path?
- Do applicants understand requirements and are next steps transparent? 
- What do users think will happen after they’ve submitted the form?
- What do users want to happen after submitting the form?

**Our hypothesis**
Users will be able to navigate through the form relatively easily, but may have issues with the following:
- Clearly understanding when they’re entering veteran information versus caregiver information
- Understanding whether or not the caregiver actually qualifies for this benefit
- Understanding what a secondary caregiver is, and if they should care about that
	
## Method	
A task-based usability study will be conducted remotely with Zoom. A remote moderator will begin with introduction questions and prompt users with guiding questions (from the conversation guide). Participants will be encouraged to talk through their exploration of the prototype. Remote observers and note takers will be in attendance.  

We will be testing with a coded form in staging or a clickable InVision prototype if the coded form is not ready.

## Participants and Recruitment	

We would like to work with Perigeon to recruit remote users.  We are looking for:

7 Caregivers
- if possible, some who have heard of these benefits and are either already enrolled or in the process of applying or considering applying
- If possible, include 1-2 secondary caregivers

7 Veterans **who have caregivers** 
- mix of pre-911 and post-911 Veterans
- Include a mix of Veterans with a disability rating of 80% or higher
- Include a mix of Veterans who live and do not live with caregivers

## When? 
- We would like to run a pilot session with Perigeon and one of our team members, Justin Linn (jlinn@governmentcio.com) as a pilot participant on January 15th at 1:30pm Eastern.  This should include Jonathan and Shawna and the observers as well (emails below)
- Sessions will take place starting January 16th - 17th and January 20-21st.
- Sessions should last ~45 minutes
- Specific time slots:
   - For January 16th, please schedule sessions between noon - 5pm Eastern time 
   - For the rest of the days, please schedule sessions between 9am - 5pm Eastern time

  
	
## Team Roles	
- Moderator:	Jonathan Nelson (jonathan.nelson@adhocteam.us) and Shawna Hein (shawna@adhocteam.us, 530 277 4925)
- Research guide writing and task development (usually but not always same as moderator): Jonathan Nelson (jonathan.nelson@adhocteam.us) and Shawna Hein (shawna@adhocteam.us, 530 277 4925)
- Participant recruiting & screening:	Perigeon
- Project point of contact:	Jonathan Nelson (jonathan.nelson@adhocteam.us) and Shawna Hein (shawna@adhocteam.us, 530 277 4925)
- Participant(s) for pilot test: Alayna Abel, Jonathan Nelson, Shawna Hein	
- Note-takers:	Patrick Sanders
- Observers:	CC Gong (cc.gong@va.gov), Alayna Abel (alayna@adhocteam.us), Justin Linn (jlinn@governmentcio.com), Kevin Mircovich (kmircovich@governmentcio.com), Ming Ligh (Ming.Ligh@va.gov, Patrick Sanders (psanders@governmentcio.com)

## Resources	
- Project Brief 	
- [Convo Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/usability-testing-jan2020/conversation-guide.md)	
- Synthesis		
- Read-Out/Results	 	
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)

Reviewed and approved by Lauren Alexanderson on 01/08/2020
