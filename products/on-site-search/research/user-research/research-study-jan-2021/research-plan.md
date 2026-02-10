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

# [User Interview] Research Plan for VA.gov Search Improvements
## Goals
1. What product & team are you doing this research for?
Search enhancements for VA.gov, Public Websites
2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?

   Since the release of the modernized VA.gov in November 2018, there has been no dedicated focus to optimize VA.gov's search experience. Analytics tells that search is a primary utility for the modernized VA.gov's users - from June 2019 to June 2020, ~10% of visitors used site search, and ~46% of site visitors come to VA.gov via organic search.
   
    We'd like to better understand veteran's needs and expectations around our site search so we can improve our search experience, and more fully align with our North Star goals.

3. Research questions: What question(s) do you hope to be able to answer after completing this research?
    - **In what scenarios do users use site search?**
      - Do users see where they can use search? Or is the hidden input box make it harder to find and to utilize?
      - Does the search button being disabled by default present any usability issues?
    - **What, if any, pain points do users experience when using search?**
      - How do those pain points differ across devices e.g. mobile, desktop, screen readers, etc.
    - **How effective is VA.gov's search tool at providing the information people are seeking?** 
        - Effective in terms of relevant results?
        - Effective in terms of ability for users to locate those results? (the way it is presented?)
      - How can search results be improved to improve scanning behavior?
      - How do users scan search results?
      - Is there a cognitive disconnect and/or issues caused by differing typography (smaller font) on the search results page compared to the rest of the site?
      - Do people understand the difference between “top recommendations” and the rest of the results and what are their thoughts on that?
      - What, if any, advanced search features do users expect? (refinements, type ahead, etc)
    - **Other VA.gov search utilities**
      - Do people utilize or see “More VA search tools”? (get some data on the right rail)
      - Do users know about other search utilities - find a facility, yellow ribbon
      - How is the search experience different for users across benefit hubs?
    - **Where do users look for information if they don't find it via VA.gov search?**
      - How do users see VA.gov search separate from Google?

4. Hypothesis: What is your hypothesis for this research?
    - Veterans will experience the following pain points which will lead to veterans perceiving our site search to be ineffective:
      - Too many results to sort through
      - The information they're looking for will not be immediately apparent from the search titles and descriptions
      - Not having a way to refine search results
    - Users will go to a search engine or decide to engage with a person if they don't find what they're looking for via site search.
    - Users will expect filtering functionality on search results.
    - Users will use site search immediately when coming to VA.gov with a task in mind, especially if they have not completed that task recently (or ever).
    - Users use Google and online groups (such as Facebook or Reddit) for broader queries, and they come to VA.gov with more specific information in mind found through those other avenues.
    - Users likely won't pay attention to the label Top Recommendations; if they do, they won't understand it means.
    - Benefits that have a clear associated task, such as disability (filing a claim) are easier to navigate via search than education or another benefit that has multiple, or less clear, outcomes.
    - Users will have difficulty locating information on other search features (ex: Find a Facility).
    - The way our search engine works is not up to people's expectations.

## Method

1. What method of research are you planning and why?
  - User interviews, so that we can further clarify what users need and expect from search
    - Ask participants about a time they needed to find VA-related information (chance to compare Google vs on-site search)
    - Ask participants to show us how they would find information using on-site search 
    - Ask participants how they perceive search results

2. Where are you planning to do your research?
User interviews will be remote moderated sessions via Zoom

3. What will you be testing?
staging.VA.gov on-site search<br>
Schedule for 40 minutes with 10 minute buffer time to allow for participants who can't make it on time, or if you might go over time. Allow at least 30 minutes between sessions. <br>
If remote: What tool do you plan to use: Zoom

4. Participants and Recruiting
  - We would like 10 fufilled sessions. In order to get 10 participants, we'd like Perigean to recruit 15-18. Remaining interviews will be canceled once we reach 10.
    - Must be a veteran
    - 50% desktop, 50% mobile users 
    - Be able to screenshare via Zoom either via mobile or desktop. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.
         
    - Strong preference for anyone who has looked for the following topics:
      - 1/5 veterans who have recently looked for VA education information
      - 1/5 veterans who have recently looked for VA health benefit information
      - 1/5 veterans who have recently looked for VA disability information
      - 1/5 veterans who have recently looked for VA family benefit information
      - 1/5 veterans who have recently looked for VA burial benefit information

    - We request the participant pool be diverse in:
       - Gender (at least 3 women)
       - Ethnicity/Race (at least 3 non-Caucasian)
       - Age
         - at least 2 people from 18-34
         - at least 2 people from 35-54
         - at least 2 people who are 55 or older.
       - Education level 
         - 50% answering high school or below on "Highest Level of Education" question on registration form
       - Geography - 60% rural / 40% urban
       - Screen Reader use
         - At least 1 person who utilizes a screen reader
       - To ensure inclusivity, we request at least 50% of participants that have identified cognitive impairments and/or functional disabilities. Diagnoses that may align with this would be Traumatic Brain Injury (TBI), Post-Traumatic Stress Disorder (PTSD), Attention-Deficit/Hyperactivity Disorder (ADHD), Autism, and Vertigo. Other conditions may be autism, aphasia, dyslexia, dyscalculia, distractibility, memory loss, reading difficulties, non-native English speakers, low tolerance for cognitive overload, and intellectual/adaptive functioning challenges such as learning and problem-solving.


  
    
## Timeline 	
#### Desired Timeline: Either the week of Jan 25, 2021 or the week of Feb 1, 2021
Matching the criteria above is more important than timing.
40 minute sessions<br/>

Team Availability | Time (EST)
------------------|--------------
Jan 25, 2021 - Jan 29, 2021 | 11am-4pm EST
Feb 1, 2021 - Feb 5, 2021 | 11am-4pm EST

    
## Team Roles
- Moderator: Megan Gayle (mgayle@governmentcio.com)
- Notetaker: **We request that Perigean take notes**
- Observers: Denise Coveyduc (dcoveyduc@governmentcio.com), John Hashimoto (John.Hashimoto@va.gov), Sam Suddath(ssuddath@governmentcio.com)


## Resources
- <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/conversation-guide.md">Conversation Guide</a>
