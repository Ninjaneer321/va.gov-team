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

# Research Plan: Current condition evidence, Veteran discovery
**Employee Experience Team, July 2024**

Researchers: [Carolyn Dew](mailto:carolyn@navapbc.com), [Kim Ladin](mailto:kimladin@navapbc.com), [Katelyn Caillouet](mailto:katelyn.caillouet@agile6.com)


## Background

The employee experience team is exploring ways we can improve evidence submission for disability claims submitted on va.gov, in order to make claims processing go more smoothly. Through our initial research we learned that evidence of a current condition is critical to moving a claim forward, and yet it is often missing in disability claims. However, Veterans seem to lack understanding of what kind of evidence is required to prove a current condition. Some Veterans think they go to a C\&P exam to get a diagnosis, but in fact they need a diagnosis (or sufficient evidence of a current condition) in order to get an exam in the first place. 

Our previous research identified this problem through interviews with VSOs, VSRs, and RVSRs. However, we currently do not know if we can influence Veteran behavior to provide better evidence of a current condition. 

This study will explore how Veterans understand what’s required and what kind of content might influence the evidence they submit. The results will inform our decision on whether to proceed with a project around evidence of current condition.


### OCTO Priorities and Veteran Journey

This research supports [OCTO Objective 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md): Our digital experiences are the best way to access VA health care and benefits. In the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf), it’s related to the Living Civilian Life phase, and the Moment that Matters: Managing primary care and chronic health issues.


## Research goals

Our research in this phase aims to get a directional signal on this core question: 

>Can content influence Veterans to provide better evidence of a current condition when they file a claim?


### Outcome

Findings from this research will inform OCTO’s evaluation of whether to move this project forward from Shaping to Pilot (Building). If the study suggests we could potentially influence Veteran behavior, we’ll use what we learn in this research to:

- Solidify the problem statement and benefit hypothesis

- Identify design opportunities where we can influence Veteran behavior

- Inform the next rounds of design and research work


### Research questions

We’ll specifically seek to learn: 

1. How do Veterans currently think about what information they need to provide for a new condition they’re claiming?

2. Can we provide information that will give Veterans a better understanding of what is required?

3. How useful is it to have information specifically related to the Veteran’s claimed condition?

4. If Veterans do gain a better understanding, are they more likely to provide evidence of a current condition? 

5. What else might be getting in the way?


### Hypothesis

In additional to the discovery questions outlined above, we’ll also test the hypothesis:

>Providing better information around what evidence of a current condition is required will influence some Veterans to provide the evidence needed to move their claim forward.  


## Methodology

This study will use a semi-structured interview around two primary objectives:

1. Understand how Veterans think about the topic. We'll ask them in detail about a recently filed claim or a claim they are planning to file in the future.

2. Get feedback on design concepts focusing on informational content. The first concept will show generic content. The second will include content related to a specific condition. 


### Location

Remote, via Zoom  


### Research materials

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2024-7-Claim-Evidence/conversation-guide.md)

[Testing prototype (Google doc)](https://docs.google.com/document/d/1EyW3Z3hQVqDRuWvTcceS0D2o4SgoMqCqqZmCNFseGiU/edit?userstoinvite=katelyn.caillouet@agile6.com&sharingaction=manageaccess&role=writer) Note: We'll remove extraneous content from this doc before testing.


## Recruitment

We’ll recruit Veterans who have recently filed a disability claim with the VA or who plan to file in the next 3 months.

- Target: 6 sessions (recruit for 10 to cover no-shows/cancellations)

We’ll use a lean maximum strategy for inclusivity, targeting 2 demographic criteria (education and ESL/immigrant origin) as primary sample distribution criteria, and several others as secondary criteria.

See: [All EE team recruitment equity checkers](https://docs.google.com/spreadsheets/d/1ooJLEU9U72kNBoc1hpc643MfsjlfujOs5LcFjDYOEi0/edit?gid=1622121386#gid=1622121386)


### Recruitment criteria

Primary criteria:

- Veteran has recently filed a disability claim ("Recent Filer") for a new condition, OR is planning to file a claim for a new condition ("Future Filer")
   - At least 2 of these should be Recent Filers

- At least 3 without a college degree

- At least 2 should speak a language other than English at home

Secondary criteria:

- At least 2 from a rural area

-  At least 1 should identify as LGBTQ+

- At least one should identify as Asian or Hispanic

- At least 2 who do not identify as male


### Screening questions

**Primary criteria** 

*Veteran has recently filed a disability claim OR is planning to file a claim for a new condition*

  - When was the last time you filed a VA claim for a NEW disability? (Do not include an appeal or a claim for increase for a previously rated condition.)

    - In the last three months **(Recruit as Recent Filer)**

    - In the last year **(Does not qualify as Recent Filer)**

    - In the last two years **(Does not qualify as Recent Filer)**

    - More than 2 year ago **(Does not qualify as Recent Filer)**

    - N/A - I’ve never filed a disability claim with the VA **(Does not qualify as Recent Filer)**

  - Are you planning to file a claim for a NEW disability within the next 3 months? (Do not include an appeal or a claim for increase for a previously rated condition.)

    - Yes

    - No **(Does not qualify as Future Filer)**

    - Not sure

  - If you answered Yes, above, what have you done so far to prepare your claim? (Select all that apply.)

    - I have just started thinking about it **(Does not qualify as Future Filer)**

    - I have talked to friends, family, or other Veterans about it.  **(Recruit as Future Filer)**

    - I have looked online for information. **(Recruit as Future Filer)**

    - I have talked with a Veteran Service Organization or attorney about it. **(Recruit as Future Filer)**

    - I have started collecting documents to support my claim. **(Recruit as Future Filer)**

    - I have submitted an Intent to File. **(Recruit as Future Filer)**

    - I started a claim application on VA.gov, but I have not finished filing the claim. **(Recruit as Future Filer)**

    - N/A - I am not planning to file a claim in the next three months. **(Does not qualify as Future Filer)**

*At least 3 without a college degree*

  - From Perigean's database: Does not have Bachelor's, Master's, Professional, or Doctoral degree

*At least 2 should speak a language other than English at home*

  - What language do you mainly speak at home?
      - English
      - Spanish **(Recruit for language)** 
      - Mandarin **(Recruit for language)**
      - French **(Recruit for language)**
      - Other (please specify) **(Recruit for language)**

**Secondary (nice-to-have)**

*These should all be in Perigean's database:*

- At least 2 from a rural area

-  At least 1 should identify as LGBTQ+

- At least one should identify as Asian or Hispanic

- At least 2 who do not identify as male


## Timeline

### Prepare

Conversation guide and concepts will be ready Friday, July 19.

Pilot session information 

- Pilot participant name: TBD

- Pilot participant email: TBD

- Date and time of pilot session: Wednesday, July 24, Time TBD.


### Planned dates of research

- July 29 - Aug 2 


### Length of sessions

- Session length: 1 hour

- Buffer time between sessions: 30 minutes 

- Maximum Sessions per day: 4


## Availability


Monday, July 29 (Don't schedule more than 2 sessions this day)

- 1:00pm - 2:00pm ET
- 1:30pm - 8:00pm ET

Tuesday, July 30

- 10:00am - 2:30pm ET
- 4:00pm - 8:00pm ET

Wednesday, July 31

- 10:00am - 4:00pm ET
- 5:00pm - 8:00pm ET

Thursday, August 1

- 10:00am - 3:30pm ET
  
Friday, August 2

- 11:00am - 3:00pm
- 4:00pm - 8:00pm

### Team Roles

Below is the list of the people serving in each role and their contact information:

- Moderator: Carolyn Dew, Kim Ladin, Katelyn Caillouet

- Research guide writing and task development: Kim Ladin

- Participant recruiting & screening: Perigean

- Project point of contact: Kim Ladin (backups: Carolyn Dew, Katelyn Caillouet)

- Participant(s) for pilot test: TBD

- Accessibility specialist (for sessions where support for assistive technology may be needed): n/a

- Note-takers: Kim Ladin, Carolyn Dew, Katelyn Caillouet

- Observers: Katelyn Caillouet, Kim Ladin, Carolyn Dew, Mack Howell, Shannon Ford, Jen Bertsch

  - Note: Not every observer will attend every session. To reduce confusion, we’ll handle sending invites to observers for specific sessions. 

**Contact info:**

Carolyn Dew carolyn\@navapbc.com 513-907-9531

Kim Ladin kimladin\@navapbc.com 408-250-0036

Katelyn Caillouet katelyn.caillouet\@agile6.com 678-296-0635

Mack Howell mackhowell\@navapbc.com

Shannon Ford Shannon.Ford1\@va.gov

Jen Bertsch Jennifer.Bertsch\@va.gov

