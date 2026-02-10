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

# ‘Share My Health Data’ and ‘Account Activity’ IA Research Plan | MHV on VA.gov  

[Treejack Link_Share My Health Data and Account Activity IA Tree Test ](https://dj540s05.optimalworkshop.com/treejack/1w7z62v5)

## Background  
As My HealtheVet (MHV) transitions to VA.gov, integrating key features from MHV Classic, such as **Share My Health Data** and **Account Activity History**, requires a clear understanding of where authenticated users expect to find them. While these features support Veterans in managing their health data and tracking account activity, their placement within VA.gov has not yet been determined. Identifying where users naturally look for these tools will help ensure they are easily accessible and aligned with their expectations.

Historically, Veterans have recorded their health metrics using either a self-reporting tool or the Share My Health Data app, developed by the Office of Connected Care (OCC). The Share My Health Data app allows automatic syncing with smart health devices, reducing the need for manual entry and making it easier to share data with VA care teams. For devices that are not compatible with the app, users can still manually log key health metrics, such as blood pressure, heart rate, glucose levels, pulse oximetry, temperature, and weight.

Account Activity History is a legally mandated feature that provides authenticated MHV users with a record of their account activity, including who accessed their account, what information was viewed, any changes made, and the type of action performed. 

This study will identify where users naturally expect to find links to ‘Share My Health Data’ and ‘Account Activity History’ within MHV on VA.gov, ensuring they can efficiently access these tools to share healthcare metrics and monitor account activity. Findings will help inform decisions on site structure to support intuitive navigation and discoverability of these features.

## OCTO Priorities  
**Objective 1:** VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.  
**Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.  

## Veteran Journey  
- Starting up  
- Taking care of myself  
- Putting down roots  
- Retiring  
- Aging  

## Research Goals  
The goal of this research is to identify where users naturally expect to find links to ‘Share My Health Data’ and ‘Account Activity History’ on MHV within VA.gov by conducting a task-based unmoderated tree test.

## Outcome  
Findings from this research will determine where users intuitively expect to find links to ‘Share My Health Data’ and ‘Account Activity History,’ ensuring they can efficiently locate the tools needed to share their healthcare metrics and monitor their account activity within MHV on VA.gov.

## Research Questions  
- Where do MHV users expect to find **‘Share My Health Data’** within MHV on VA.gov?
- Where do MHV users expect to find **‘Account Activity History’** within MHV on VA.gov?
- How easily can users find the ‘Share My Health Data’ and ‘Account Activity History’ features within MHV on VA.gov, and what can their navigation patterns tell us about improving discoverability?

## Hypotheses  
### **Share My Health Data Link**  
- Users will primarily expect to find **‘Share My Health Data’** within the **Health Records** section, as it logically aligns with personal health management.  
- Users familiar with MHV Classic may experience confusion if they expect to find a **‘Track Your Health’** or **‘Shared Vitals’** section instead.  

### **Account Activity History Link**  
- Users will **not** expect to find this link on the MHV landing page, as existing categories—Appointments, Messages, Medication, Records, Payments, and Medical Supplies—do not logically align with it.  
- Users familiar with MHV Classic will expect to find **‘Account Activity History’** under **‘Profile’**, mirroring past navigation patterns.  
- Users who perceive **‘Account Activity History’** as a security feature will look for it within **‘Profile’ → ‘Account Security’** options.  

## Methodology  
A tree test study will be conducted using Optimal Workshop (Treejack) to assess where MHV users expect to find links to ‘Share My Health Data’ and ‘Account Activity History’ features within VA.gov. Participants will complete task-based scenarios in an unmoderated study to evaluate their navigation patterns.

### **Location**  
- Unmoderated study via Optimal Workshop (Treejack).  

### **Recruitment**  
We will recruit **100 MHV users** through our recruitment partners, Perigean, based on the following criteria:  

**Group 1 (50 Veterans):**  
- Veterans who have an active MHV account and have accessed it at least once in the last year. 

**Group 2 (50 Veterans):**  
- Veterans who do not have an MHV account.

### **Availability for Potential Kickoff Meeting Times with Perigean**  
- Tuesday, March 11, 9:00 AM - 2:00 PM (PST)
- Wednesday, March 12, 9:00 AM - 3:00 PM (PST)

### **Recruitment Approach**  
We are partnering with Perigean to recruit 100 Veterans for this tree test study, aiming to launch by **March 17, 2025**. The study will include Veterans, divided into two groups: Veterans who have an active My HealtheVet (MHV) account and have accessed it at least once within the past year, and Veterans who do not have a My HealtheVet (MHV) account. This approach ensures a balanced representation of user experiences to inform the optimal placement of these features within VA.gov. Additionally, we will gather participant data on accessing account activity history and using health data-sharing tools through post-test questions rather than as recruitment screening criteria.

### **Recruitment Criteria**  
**How many participants do you want in your study?**
100

**How many completed sessions do you need to consider your study complete?**
100

**Group Assignment**
- Group 1: My HealtheVet (MHV) users
- Group 2: Non-MHV users

**All participants must:**
- Be Veterans
- Receive VA healthcare benefits
- Have a computer or tablet and be comfortable following written instructions to complete simple, lightweight tasks on their own (~15 min.)

**Group 1 (50 Veterans - MHV Users)**
Veterans with an active My HealtheVet (MHV) account who have logged in at least once in the past year.

**Group 2 (50 Veterans - Non-MHV Users)**
Veterans who do **not** have a My HealtheVet (MHV) account.

**Screener Questions:**
1. Do you currently receive VA healthcare benefits?
- a. Yes (Continue)
- b. No (Exclude)

2. Do you have an My HealtheVet (MHV) account?
- a. Yes (Qualifies for Group 1)
- b. No (Qualifies for Group 2)

**Questions 3 and 4 are post-test questions designed to collect participant characteristic data only. Do not use the following questions for screening or exclude participants based on their responses.**

3. In the past 12 months, have you recorded your health vitals on My HealtheVet or the Share My Health Data App? *(Examples include blood pressure, blood sugar, body temperature, weight, heart rate, pain level, pulse oximetry, respiratory rate.)*   
- a. Yes 
- b. No 

4. In the last 12 months, have you viewed details about logins or changes made in your My HealtheVet account? *(Examples includee seeing who accessed your account, what changes were made to your account, and when information was viewed.)*
- a. Yes 
- b. No
  
## Length of Sessions  
- Unmoderated  
- Aim for ~15 minutes per session

## Timeline  
- **3/6:** Researh plan peer review
- **3/7:** Submit recruitment request 
- **3/10:** ReOps & Perigean review
- **3/10 - 3/11**: Finalize plan and complete Optimal Workshop study
- **3/11 - 3/12**: Peregiean kick-off 
- **3/17:** Target launch date  

## Research Sessions  
- Planned test launch date: March 17, 2025
- Duration: Ongoing until the participant threshold is met.

## Team Roles  
- Researcher: Athena Bozak  
- Research Guide Writing & Task Development: Athena Bozak  
- Participant Recruiting & Screening: Perigean  

**Primary Project Point of Contact:**  
- [athena.bozak@va.gov](mailto:athena.bozak@va.gov)  

**Backup Project Points of Contact:**  
- [Florence.McCafferty@agile6.com](mailto:Florence.McCafferty@agile6.com)  
- [sara.sterkenburg@adhocteam.us](mailto:sara.sterkenburg@adhocteam.us)  
- [jonathan.nelson@adhocteam.us](mailto:jonathan.nelson@adhocteam.us)  
