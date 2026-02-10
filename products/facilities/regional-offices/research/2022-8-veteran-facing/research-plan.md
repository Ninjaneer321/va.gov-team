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

# Research Plan for Facilities, Benefit Offices, August 2022

* [Background](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-plan.md#background)
* [Research Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-plan.md#research-goals)
* [Method](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-plan.md#method)
* [Research Materials](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-plan.md#research-materials)
* [Recruitment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-plan.md#recruitment)
* [Timeline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-plan.md#timeline)
* [Team Roles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-plan.md#team-roles)

## Background

Veteran Benefits Administration offices (Benefit Offices) provide clients (Veterans, service members, family members, caregivers, etc.) access to non-medical benefits. This can include things like:

*   education and training
*   pension
*   life insurance
*   home loans
*   special services for elderly, homeless, or Veterans who are members of other marginalized groups.

The Benefit Office webpages seek to give important information about physical locations where beneficiaries can apply for and receive benefits. Benefit Office pages are accessible through the public unauthenticated web. These pages expand on prior work done with Facility Locator, VAMCs, and Vet Centers. 

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/regional-offices)

### OCTO Objectives

This research aligns with the following OCTO objectives:

North Stars:

> 1\. Increase the usage and throughput of VA services
> 
> 2\. Decrease the time Veterans spend waiting for an outcome
> 
> 3\. Increase the quality and reliability of VA services

Goals:

> 1\. Veterans and their families can apply for all benefits online
> 
> 5\. Veterans and their families can find a single, authoritative source of information
> 
> 6\. Veterans and their families trust the security, accuracy, and relevancy of VA.gov

Increase:

> *   Usage of digital, self-service tools
> *   Percent of applications submitted online (maybe, if we can help Veterans move from this tool to online application)
> *   Benefit use and enrollment
> *   Veteran satisfaction with VA.gov

Decrease:

> *   Call center volume, wait time, and time to resolution

### Veteran Journey

Benefit Offices touch on the following stages of the Veteran Journey:

*   Getting out (engaging VA to access benefits and services)
*   Starting Up (Finding something to do, re-establishing and creating relationships, balancing finances, finding a place to live)
*   Reinventing Myself (Acquiring the appropriate education, new skills, and credentials)
*   Putting Down Roots (Revisiting housing, taking care of my family, saving for my retirement, Engaging VA to access benefits and services)
*   Retiring (Finding additional sources of income)

## Research Goals

The goal of this research is to understand a Benefit Office clients' experiences, impressions, and relationships with Benefit Offices.

### Outcome

It will give us a fuller understanding of what Benefit Office clients need, and allow us to make design recommendations for the [Regional Benefit Office MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/design/README.md). 

### Research questions

1.  What benefit-related **tasks** do clients complete at Benefit Offices?
    *   Is visiting a Benefit Office necessary/sufficient to complete the task?
    *   Do clients have preferred modalities for doing this task? 
        *   If in-person/phone/online were all available, which would they choose?
    *   Do clients' mental models of benefit tasks align to the actual processes?

2.  What is the client experience of **visiting** a Benefit Office?
    *   How do clients travel to Benefit Offices?
    *   How do clients find their way to appointments within Benefit Office buildings?
    *   What is the reception experience at Benefit Offices? (i.e. check-in, waiting area)
  
3.  What information do clients need when **preparing** for a visit?
    *   How do clients prepare for their visits? 
        *   What tasks do they complete? (i.e. directions, paperwork)
        *   What modalities do they use? (i.e. web, phone)
    *   Do clients feel prepared before their visits?
        *   Are they actually prepared?
        *   Retrospectively, what would they have needed to be prepared?
    *   Do clients understand the different types of Benefit Offices?
        *   If yes, do clients understand the relationships between Benefit Offices?
        *   Are these relationships important to clients?

4. To what extent do the answers to questions 1-3 **vary** by:
   *   Facility type? 
   *   Benefit service?
   *   Geography?
   *   Client demographics?

### Hypotheses

1.  What benefit-related **tasks** do clients complete at Benefit Offices? 
    * We expect high variance by facility type and benefit service
    * We expect moderate variance by client demographics
    * We expect little to no variance by geography

2.  What is the client experience of **visiting** a Benefit Office? - 
    * We expect high variance by facility type and geography
    * We expect moderate variance by benefit service
    * We expect little to no variance by client demographics

3.  What information do clients need when **preparing** for a visit? 
    * We expect high variance by facility type and benefit service
    * We expect moderate variance by client demographics
    * We expect little to no variance by geography

## Method

*   Semi-structured interviews - appropriate for generative research

### Location

Remote, via Zoom. 

## Research Materials

*   [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/conversation-guide.md)

## Recruitment

### Recruitment approach

Recruit 19 clients through Perigean with a goal of interviewing 15

#### Primary criteria / Must have - 

- Veterans, active duty service members, or caregivers

- Answers "Yes" to screener question

  **Screener Questions:**
  
    **1. In the last 6 months, have you visited a VA Benefits Office from the following list?** 
    **(Answer must be yes)**

      [following checkboxes] 
      
      [ ] Regional Benefit Office
      
      [ ] Satellite Benefit Office
      
      [ ] Integrated Disability Evaluation System Site      
      
      [ ] Pre-Discharge Site

      [ ] Veteran Readiness and Employment Office
      
      [ ] VetSuccess On Campus
      
     **Benefits Office Definition**: Benefit Offices are unique VA facilities, separate from VA Medical Centers, clinics, Vet Centers, VFWs, etc. If unsure, please visit Veterans Benefits Administration's website: [https://benefits.va.gov/benefits/](https://benefits.va.gov/benefits/)
     
     **2. Which benefit(s) was your visit related to? (Check all that apply)** 
      
      [following checkboxes] 
      
      [ ] Burial claim
      
      [ ] Disability
      
      [ ] Education and career counseling
      
      [ ] Home Loans
      
      [ ] Pension

      [ ] Vocational Rehabilitation
      
      [ ] Other

#### Secondary criteria / Would like to have -

* At least one client from each Benefit Office [District](https://www.benefits.va.gov/benefits/offices.asp):
  * Northeast
  * Southeast
  * Continental
  * Pacific
* A sample across different **benefit types**
  * Burial claim: 2
  * Disability: 2
  * Education and career counseling: 2
  * Home Loan: 2
* At least one **caregiver or family member** 

Based on established [MVS sampling strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy): 

Veterans
* Assistive tech users: 8
* Age 55-64+ : 8
* Cognitive Disability: 8
* Mobile user: 8
* Rural: 4
* No degree: 4
* Other than honorable: 4
* Immigrant origin: 3
* Women: 2
* Expat (living abroad): 1

Race
* Black: 3
* Hispanic: 2
* Biracial: 1
* Asian: 1
* Native: 1

LBGTQ+
* Gay, lesbian, or bisexual: 1
* Transgender: 1
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1

## Timeline

*   Session length: 45 minutes
*   Buffer time between sessions: 15 minutes
*   Maximum Sessions per day: 5

Date | Time in Eastern | Slots
-----|-----------------------|-------
Mon, Sept 19 [PILOT] |  | - 
Mon, Sept 26  | 10-11a, 3-6p | 4
Tues, Sept 27 | 10-11a, 12-3p, 4-6p | 6
Wed, Sep 28   | 10-11a, 12-2p, 3-6p | 6
Thur, Sept 29 | 10-11a, 2-6p | 5
Fri, Sept 30  | 10-12p, 1-5p | 6
Mon, Oct 3    | 3-6p | 3
Tues, Oct 4   | 10-11a, 12-3p, 4-6p | 6
Wed, Oct 5    | 10-11a, 12-2p, 3-6p | 6

## Team Roles

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker**

*   Moderator: Dave Pickett, <dave.pickett@civicactions.com>, +1 312-833-1813
*   Research guide writing and task development: Aslan French, Dave Pickett
*   Participant recruiting & screening: Perigean
*   Project point of contact: David Shannon, <David.Shannon@agile6.com>
*   Participant(s) for pilot test: Christian Burk, <christian.burk@civicactions.com>
*   Note-takers: Perigean
*   Observers:
    * Always invite:
      * Dave Conlon <david.conlon@va.gov> 
      * David Shannon <David.Shannon@agile6.com>
    * Additional invitees who will sign up for specific slots:
      * Roger Eagans <roger.eagans@agile6.com>
      * Tanekwa Bournes <Tanekwa.Bournes@va.gov>
      * Kenyonna Power <Kenyonna.Power@va.gov>
