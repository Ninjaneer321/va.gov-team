---
# Research Plan Metadata
title: "Research Plan for Search & Discovery, VA.gov Search Improvements, January 2021"
date: 2021-01-01
last_updated: 2021-01-01
team: "Public Websites"
product: "VA.gov Site Search"
product_area: "unauthenticated"

# Background Context
background:
  problem_statement: "Since the release of the modernized VA.gov in November 2018, there has been no dedicated focus to optimize VA.gov's search experience. Analytics shows ~10% of visitors used site search and ~46% of site visitors come to VA.gov via organic search. We need to better understand veteran's needs and expectations around site search to improve the search experience and align with North Star goals."
  product_location: "VA.gov site search, staging.VA.gov"
  user_familiarity: "Iteration on existing search functionality"
  product_brief_url: "TBD"

# Research Design
methodology: "user interviews"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand in what scenarios users use site search"
  - goal_2: "Identify pain points users experience when using search"
  - goal_3: "Determine how effective VA.gov's search tool is at providing the information people are seeking"
  - goal_4: "Learn where users look for information if they don't find it via VA.gov search"

research_questions:
  - "In what scenarios do users use site search? Do users see where they can use search? Does the search button being disabled by default present any usability issues?"
  - "What, if any, pain points do users experience when using search? How do those pain points differ across devices?"
  - "How effective is VA.gov's search tool at providing the information people are seeking (relevant results, ability to locate results)?"
  - "How can search results be improved to improve scanning behavior? How do users scan search results?"
  - "Is there a cognitive disconnect caused by differing typography on the search results page compared to the rest of the site?"
  - "Do people understand the difference between 'top recommendations' and the rest of the results?"
  - "What, if any, advanced search features do users expect (refinements, type ahead, etc)?"
  - "Do people utilize or see 'More VA search tools'?"
  - "Do users know about other search utilities - find a facility, yellow ribbon?"
  - "How is the search experience different for users across benefit hubs?"
  - "Where do users look for information if they don't find it via VA.gov search? How do users see VA.gov search separate from Google?"

hypotheses:
  - "Veterans will experience pain points (too many results, information not immediately apparent, no way to refine results) which will lead to perceiving site search as ineffective"
  - "Users will go to a search engine or decide to engage with a person if they don't find what they're looking for via site search"
  - "Users will expect filtering functionality on search results"
  - "Users will use site search immediately when coming to VA.gov with a task in mind, especially if they have not completed that task recently"
  - "Users use Google and online groups for broader queries, and come to VA.gov with more specific information in mind"
  - "Users likely won't pay attention to the label Top Recommendations; if they do, they won't understand what it means"
  - "Benefits with clear associated tasks (disability filing) are easier to navigate via search than education or another benefit with multiple or less clear outcomes"
  - "Users will have difficulty locating information on other search features (ex: Find a Facility)"
  - "The way our search engine works is not up to people's expectations"

expected_outcomes: "Better understand user needs and expectations from search to inform improvements to search experience and align with North Star goals. Clarify pain points and opportunities for enhancement."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "maximum variation by benefit interest and demographics"
  
  primary_criteria:
    - "Must be a veteran"
    - "50% desktop, 50% mobile users"
    - "Must be able to screenshare via Zoom"
    - "Strong preference for 1/5 veterans who have recently looked for VA education information"
    - "Strong preference for 1/5 veterans who have recently looked for VA health benefit information"
    - "Strong preference for 1/5 veterans who have recently looked for VA disability information"
    - "Strong preference for 1/5 veterans who have recently looked for VA family benefit information"
    - "Strong preference for 1/5 veterans who have recently looked for VA burial benefit information"
    
  secondary_criteria:
    - "At least 3 women"
    - "At least 3 non-Caucasian"
    - "At least 2 people from 18-34"
    - "At least 2 people from 35-54"
    - "At least 2 people who are 55 or older"
    - "50% answering high school or below on education level"
    - "60% rural / 40% urban geography"
    - "At least 1 person who utilizes a screen reader"
    - "At least 50% of participants with identified cognitive impairments and/or functional disabilities (TBI, PTSD, ADHD, Autism, Vertigo, etc.)"
    
  screener_questions:
    - question: "Have you recently looked for VA benefit information? If so, which benefit area?"
      qualifying_response: "Mix across education, health, disability, family, burial benefits"
      
participants:
  veterans: 18
  caregivers: 0
  dependents: 0
  total_recruited: 18
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2021-01-25 to 2021-02-05"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 40
  buffer_minutes: 10
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: "Improved search functionality and user satisfaction"
  - objective: "Enhance Veterans' personalized online experience"
    key_results: "Better search experience aligned with user needs"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Initial search research conducted in 2018-2019"
    
tags:
  - "AUD: Veterans"
  - "PRDT: Search"
  - "DSP: Search"
  - "user-interviews"
  - "search-optimization"
  - "cognitive-disabilities"
  - "accessibility"
  - "remote"
  - "moderated"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "HDW: Screen reader"
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
