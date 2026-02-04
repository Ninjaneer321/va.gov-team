---
# Research Plan Metadata
title: "Research Plan for Identity Team, VA.gov Sign-In, 2026-02-03"
date: 2026-02-03
last_updated: 2026-02-03
team: "Identity Team"
product: "VA.gov Sign-In"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans report getting stuck in a sign-in 'loop' (repeatedly returned to the sign-in page or otherwise failing to authenticate) on VA.gov and VA mobile apps. The team needs to clarify what experiences users describe as looping, identify where in the auth flow it occurs, and understand technical/environmental patterns (credential provider, device/browser, network) so engineering can reproduce and fix root causes and improve messaging/support."
  product_location: "VA.gov authentication flow (transition between unauthenticated and authenticated states) and VA mobile app sign-in flows"
  user_familiarity: "Iteration on existing authentication system"
  product_brief_url: "TBD (add the link to the sign-in product brief)"

# Research Design
methodology: "Semi-structured interviews with optional issue recreation"
research_format:
  location: remote # Options: remote, in-person, hybrid
  moderated: true # Options: true, false

# Research Goals & Questions
research_goals:
  - goal_1: "Define and document what Veterans mean by 'looping' by capturing the specific screens, behaviors, and failure patterns they encounter during sign-in."
  - goal_2: "Identify technical/environmental factors associated with looping (credential provider, device type, browser/OS, network context) and where in the authentication flow the failure occurs."
  - goal_3: "Understand the impact of looping on Veterans’ ability to access critical VA services and on trust, including workarounds and abandonment."

research_questions:
  - "What specific behaviors and screens do Veterans see when they experience 'looping' during sign-in?"
  - "At what point in the authentication flow does the looping occur (initial sign-in page, credential entry, two-factor, redirect)?"
  - "What technical patterns exist among users experiencing looping (specific devices, browsers, credential types, networks)?"
  - "What troubleshooting steps have Veterans attempted, and which (if any) have been successful?"
  - "How does this issue impact Veterans' access to VA services and their perception of VA digital tools?"

hypotheses:
  - "Veterans use 'looping' to describe multiple distinct technical issues, not a single failure pattern."
  - "Sign-in looping is more likely with specific credential providers (Login.gov, ID.me, DS Logon, My HealtheVet) and/or specific device/browser combinations."
  - "Most Veterans who experience looping have not successfully resolved the issue and have developed workarounds or abandoned certain VA digital services."
  - "Veterans who experience sign-in looping lack clear error messages or guidance, leaving them uncertain about what went wrong or how to fix it."

expected_outcomes: "A user-centered taxonomy of 'looping' experiences plus correlated technical context (credential provider, device/browser/OS, network) to help engineering reproduce issues and prioritize fixes; evidence of user impact to support prioritization; and actionable direction for improving error messaging and support/troubleshooting guidance."

# Recruitment & Participants
recruitment:
  approach: "Targeted recruitment based on list of Veterans who have reported this issue and who stated they are willing to speak with the Identity team."

  primary_criteria:
    - "Veteran who has experienced sign-in looping or repeated authentication failures on VA.gov or VA mobile apps within the past 3 months."
    - "Able to describe what happened (screens/behavior) in enough detail to confirm an authentication looping/failure scenario (not only forgotten password)."
    - "Has attempted to access VA.gov or a VA mobile app within the past 3 months (recency)."
    - "Comfortable with screen sharing if they still have access to the device where the issue occurred (optional but encouraged)."
    - "Credential provider used when the issue occurred can be identified or approximated (Login.gov, ID.me, DS Logon, My HealtheVet, or 'not sure')."

  secondary_criteria:
    - "Mix of credential providers (Login.gov, ID.me, DS Logon, My HealtheVet)."
    - "Variety of devices and contexts (desktop/laptop, smartphone, tablet; some with multiple device types)."
    - "Range of age groups (including 55–64 and 65+)."
    - "Range of disability ratings and tech comfort levels."
    - "Include at least some participants with cognitive disability considerations (e.g., TBI/PTSD/memory issues)."
    - "Include at least 1 participant who uses assistive technology."
    - "Geographic diversity across time zones; rural/urban mix."
    - "Demographic diversity (women, LGBTQ+, people of color, non-native English speakers)."
    - "Mix of participants who have and have not contacted VA support about the issue."

  screener_questions:
    - question: "In the past 3 months, have you tried to sign in to VA.gov or a VA mobile app and experienced being repeatedly sent back to the sign-in page without successfully logging in, or experienced other issues where sign-in kept failing?"
      qualifying_response: "Yes"
    - question: "Can you briefly describe what happened when you tried to sign in? For example, what did you see on your screen, and what happened when you tried to enter your login information?"
      qualifying_response: "Open response indicating authentication looping/failure (not only forgotten password)."
    - question: "Which sign-in method were you using when this happened? (Login.gov / ID.me / DS Logon / My HealtheVet / I'm not sure)"
      qualifying_response: "Any (used to ensure mix and track distribution)."
    - question: "What type of device were you using when you experienced this sign-in issue? (Desktop / Laptop / Smartphone / Tablet / Multiple devices)"
      qualifying_response: "Any (used to ensure mix and track distribution)."
    - question: "If you still have access to the device where you experienced this sign-in issue, would you be comfortable sharing your screen during the session to show us what happened? (Optional but helpful)"
      qualifying_response: "Any (do not disqualify; used for planning)."

participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  completed_sessions_goal: 5

# Timeline & Sessions
timeline:
  research_dates: "2026-02-12 to 2026-02-21"

session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3

# Strategic Alignment
octo_priorities:
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results:
      - "KR 3.2: Maintain a ranked list of user pain points for Veteran-facing products and services."
      - "KR 3.3: Deliver at least one release that directly addresses a documented user pain point within this product."

veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"

# Research Repository Tracking
related_research:
  previous_studies:
    - "TBD (add link to previous authentication research)"
    - "TBD (add link to credential comparison research)"

tags:
  # Audience
  - "AUD: Veterans"
  - "AUD: Internal VA Stakeholders"

  # Product / domain
  - "PRDT: Content" # placeholder: see notes below; replace if there is a specific PRDT tag for VA.gov Sign-In / Login

  # Design system pattern(s)
  - "DSP: Help users to sign in"
  - "DSP: Error Message Guide"

  # Hardware / device context being investigated
  - "HDW: Desktop"
  - "HDW: Laptop"
  - "HDW: Smartphone"
  - "HDW: Tablet"

  # Other
  - "semi-structured-interviews"
  - "problem-discovery"
  - "authentication"
  - "sign-in"
  - "technical-issues"
---

# Research Plan for Sign-In Looping Investigation, Identity Team, February 2026

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**Veterans frequently report experiencing "looping" during sign-in - a pattern where they are repeatedly returned to the sign-in page without successfully authenticating. Currently, we don't have a clear understanding of what users actually experience when they describe "looping" OR what technical issues are causing these authentication failures. This research will help us understand both the user experience and technical patterns so we can fix the underlying issues.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**This research focuses on the authenticated experience, specifically the sign-in and authentication flow that gates access to all authenticated VA.gov services and VA mobile applications. The issue occurs at the transition point between unauthenticated and authenticated states.**
  
`What is Veterans' familiarity with this tool? Is this a new product or an iteration on an existing one?`

**This is an iteration on the existing authentication system. Veterans are familiar with signing in to VA.gov, but a subset are experiencing persistent failures that prevent successful authentication. We're investigating an existing problem, not testing new features.**

`Product Brief`

**[Link to sign-in product brief](url goes here).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points.
  - ***Research Ops Plain Language:** Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - ***Research Ops Plain Language:** Supports the delivery of at least one release that directly addresses a documented user pain point within this product.*

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Sign-in authentication is a critical gateway that supports Veterans across multiple journey phases:
	
- `Starting Up` - Veterans beginning to access VA benefits and services
- `Taking Care of Myself` - Veterans managing healthcare and benefits
- `Putting Down Roots` - Veterans establishing long-term benefit usage patterns
- `Retiring` - Veterans transitioning to retirement-related services
- `Aging` - Veterans with increasing healthcare and support needs

**Moments that matter:** Sign-in failures directly impact Veterans' ability to access critical services during time-sensitive moments such as scheduling healthcare appointments, checking claim status, ordering prescriptions, and accessing urgent care information.

</details>

## Research Goals 🥅	

### Goals

`1.` **Understand what Veterans mean by "looping" and document the specific user experience patterns they encounter during sign-in failures**

- We need to establish a clear definition of what users experience when they report "looping" 
- Document the specific screens, messages, and behaviors Veterans see
- Identify if "looping" describes one issue or multiple distinct problems

`2.` **Identify technical and environmental factors associated with sign-in looping**

- Understand which credential providers are most frequently associated with looping (Login.gov, ID.me, DS Logon, My HealtheVet)
- Identify device, browser, and network patterns that correlate with the issue
- Determine where in the authentication flow failures occur

`3.` **Assess the impact of sign-in looping on Veterans' ability to access VA services**

- Understand how this issue affects Veterans' access to critical VA services
- Document workarounds Veterans have developed
- Measure the impact on Veterans' trust in VA digital tools
  
### Outcome
---

**This research will provide the Identity team with:**

1. **Clear problem definition:** A documented taxonomy of what "looping" means from the user perspective, enabling more targeted technical investigation

2. **Technical troubleshooting priorities:** Data on which credential providers, devices, browsers, and network conditions are most commonly associated with failures, guiding engineering priorities

3. **User impact assessment:** Understanding of how this issue affects Veterans' access to critical services, helping justify resource allocation for fixes

4. **Error messaging improvements:** Insights into what information would help Veterans when they encounter these issues

**Next steps after research:**
- Engineering team will use findings to reproduce and diagnose technical issues
- UX team will redesign error messaging and support resources
- Product team will prioritize fixes based on impact and frequency
- We'll develop better monitoring to detect and prevent future occurrences

---

### Research questions

**`1.` What specific behaviors and screens do Veterans see when they experience "looping" during sign-in?**

*This will help us establish a clear definition of the problem and determine if users are experiencing one issue or multiple distinct failure patterns.*

**`2.` At what point in the authentication flow does the looping occur?**

*Understanding whether failures happen at initial sign-in, credential entry, two-factor authentication, or redirect will help engineers narrow down the technical root cause.*

**`3.` What technical patterns exist among users experiencing looping (specific devices, browsers, credential types, networks)?**

*This data will help us reproduce the issue in testing environments and prioritize fixes for the most common scenarios.*

**`4.` What troubleshooting steps have Veterans attempted, and which (if any) have been successful?**

*This will reveal both potential temporary workarounds we can share with users and solutions that don't work (saving engineering time), while also informing support documentation.*

**`5.` How does this issue impact Veterans' access to VA services and their perception of VA digital tools?**

*This will help us understand the severity and urgency of the problem, and justify resource allocation for fixes.*

### Hypotheses

---

**Hypothesis 1:** Veterans use "looping" to describe multiple distinct technical issues, not a single failure pattern. We believe users may be experiencing different problems (credential provider errors, session timeouts, redirect failures) but using the same term to describe the frustrating outcome.

**Hypothesis 2:** Sign-in looping is more likely to occur with specific credential providers or on specific device/browser combinations. Based on technical support tickets, we suspect certain authentication paths are more prone to failure, and specific technical environments (older browsers, certain mobile devices) may trigger these issues.

**Hypothesis 3:** Most Veterans who experience looping have not successfully resolved the issue and have developed workarounds or abandoned certain VA digital services. We believe that because this is a complex technical issue, user-driven troubleshooting (clearing cache, different browsers) may not consistently work, leading to long-term impacts on service access.

**Hypothesis 4:** Veterans who experience sign-in looping lack clear error messages or guidance, leaving them uncertain about what went wrong or how to fix it. We suspect current error handling doesn't adequately explain authentication failures, contributing to user frustration.

---
  
## Methodology  🛠️

**Semi-structured interviews with optional issue recreation**

This is generative research aimed at understanding an existing problem. Semi-structured interviews are appropriate because:

1. **We need rich qualitative data:** We're trying to understand what "looping" means to users and capture detailed descriptions of their experiences
2. **Problem space is undefined:** We don't yet know what specific issues users are encountering, so we need flexibility to explore their experiences
3. **Technical context matters:** Interviews allow us to probe for technical details (device, browser, network) that might not surface in other methods
4. **Issue recreation opportunity:** If participants can recreate the issue during the session, we can observe it directly and capture technical details in real-time

We will NOT conduct traditional usability testing, as we're not evaluating a design - we're investigating why the current system fails for some users.

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [X] **Remote**
- [ ] **In-person**

**Rationale for remote:** Sign-in issues may occur on Veterans' personal devices in their home environments, and remote research allows us to observe the issue in the context where it naturally occurs. This also enables broader geographic participation.

## Research materials 📔

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated interviews:** 
	
- [Link to conversation guide](sign-in-looping-conversation-guide.md)

## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*


### Recruitment approach

**Audience:** Veterans who have experienced sign-in looping or repeated authentication failures on VA.gov or VA mobile apps within the past 3 months.  We have a list of 59 Veterans we can recruit from.

**Recruitment strategy:** Targeted recruitment through Perigean with required screener questions to ensure participants have experienced the issue we're investigating. This is critical - we need participants who can speak to the specific problem, not general sign-in users.

**Inclusive research considerations:** 
- We will recruit a diverse sample across age, disability rating, tech comfort, and device types
- However, our primary screener (must have experienced sign-in looping) is non-negotiable
- We will use lean maximum variation to ensure diversity within the qualifying participant pool

### Recruitment criteria

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **6**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **12**
- `Ideal completed sessions:` **8**

### Primary criteria (must-haves)

**All participants must meet ALL of the following criteria:**

1. **Must have experienced sign-in looping within the past 3 months**
   - Screener question: "In the past 3 months, have you tried to sign in to VA.gov or a VA mobile app and experienced being repeatedly sent back to the sign-in page without successfully logging in, OR experienced other issues where sign-in kept failing?"
   - Qualifying response: Yes
   
2. **Must be able to describe the issue in detail**
   - Screener question: "Can you briefly describe what happened when you tried to sign in? For example, what did you see on your screen, and what happened when you tried to enter your login information?"
   - Qualifying response: Must provide a coherent description indicating they experienced authentication failures or looping (not just forgot password). Recruiter should look for responses mentioning: being returned to sign-in page, repeated attempts, error messages, stuck in a loop, etc.

3. **Must have attempted to access VA.gov or VA mobile app within the past 3 months**
   - This ensures recency and recall accuracy

4. **Must be comfortable with screen sharing (if they have access to the device where the issue occurred)**
   - Screener question: "If you still have access to the device (computer, phone, or tablet) where you experienced this sign-in issue, would you be comfortable sharing your screen during the session to show us what happened? (This is optional but helpful)"
   - Note: This is encouraged but not required - we can still conduct valuable interviews without screen sharing

**Distribution across credential types (for variety):**
- At least 2 participants using Login.gov
- At least 2 participants using ID.me
- Screener question: "Which sign-in method were you using when you experienced this issue?" (Login.gov / ID.me / I'm not sure)

**Distribution across device types (for variety):**
- At least 3 participants who experienced the issue on a desktop/laptop computer
- At least 3 participants who experienced the issue on a mobile device (phone or tablet)
- At least 2 participants who experienced the issue on multiple device types
- Screener question: "What type of device were you using when you experienced this sign-in issue?" (Desktop computer / Laptop computer / Smartphone / Tablet / Multiple devices)

#### Secondary criteria (nice-to-haves)

**We would like to include diversity across the following dimensions:**

**Age distribution:**
- At least 2 participants aged 55-64
- At least 2 participants aged 65+
- At least 2 participants aged 35-54
- At least 1 participant aged 18-34

**Disability and cognitive consideration:**
- At least 2 participants with a cognitive disability (e.g., TBI, PTSD, memory issues)
- At least 3 participants with a disability rating of 70% or higher
- At least 1 participant who uses assistive technology

**Tech comfort:**
- At least 3 participants who describe themselves as "not very comfortable" with technology
- Mix of participants across tech comfort spectrum

**Geographic diversity:**
- Participants from at least 3 different U.S. time zones
- Mix of rural and urban locations

**Identity:**
- At least 2 women
- At least 1 person who identifies as LGBTQ+
- At least 2 people of color
- At least 1 non-native English speaker

**Other:**
- At least 2 participants who have contacted VA support about this issue
- At least 2 participants who have NOT contacted VA support about this issue

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **02/04/2026 2:00 PM EST or 02/05/2026 10:00 AM EST**

### Research sessions
- `Planned dates of research:` **02/12/2026 - 02/21/2026**

### Length of sessions
- `Session length:` **60 minutes**
  
- `Buffer time between sessions:` **30 minutes** (to reset, debrief, and accommodate schedule flexibility)
  
- `Maximum Sessions per day:` **3** (these sessions may involve troubleshooting technical issues and can be mentally demanding)

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

**We are requesting 6 participants for 5 completed sessions, so we're providing mulitple time slots:**

- `02/12/2026, Wednesday, 10:00 AM-8:00 PM EST`
- `02/13/2026, Thursday, 10:00 AM-8:00 PM EST`
- `02/14/2026, Friday, 10:00 AM-8:00 PM EST`
- `02/17/2026, Monday, 10:00 AM-8:00 PM EST`
- `02/18/2026, Tuesday, 10:00 AM-8:00 PM EST`
- `02/19/2026, Wednesday, 10:00 AM-8:00 PM EST`
- `02/20/2026, Thursday, 10:00 AM-8:00 PM EST`
- `02/21/2026, Friday, 10:00 AM-8:00 PM EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]

- `Moderator:` **Charlye Tran**	
- `Research guide writing and task development:` **Charlye Tran**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **[Product Manager name]**		
- `Note-takers:` **Charlye Tran, Clayton Zook**	
- `Observers: Spread observers across sessions. No more than 5-6 total attendees per session.`

**Identity Team:**
- **[Lead Engineer - Technical observer]**
- **[Product Manager]**
- **[UX Designer]**

**Stakeholders (spread across sessions):**
- **[OCTO Identity Lead]**
- **[Platform Identity Lead]**
- **[Authentication SME]**
- **[Customer Support Lead]**

## Approvals ✅

- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
