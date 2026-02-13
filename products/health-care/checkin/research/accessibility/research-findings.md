---
title: '[Study] Research Findings'
product: Product Name
team: Team Name
office: Office of the CTO - Digital Experience (OCTO-DE)
date: YYYY-MM-DD
researchers:
- Researcher/Designer 1
- Researcher/Designer 2
research_goals:
- Goal 1
- Goal 2
methodology:
- Method 1
- Method 2
devices_used:
  desktop: X
  tablet: X
  smartphone: X
  assistive_technology: X
participants_total: X
demographics:
  veterans: X
  service_members: X
  caregivers: X
  dependents: X
  VA_staff: X
  age:
    25-34: X
    35-44: X
    45-54: X
    55-64: X
    65+: X
    unknown: X
  education:
    high_school: X
    some_college: X
    associates: X
    bachelors: X
    masters: X
    doctorate: X
    unknown: X
  location:
    urban: X
    rural: X
    unknown: X
  race:
    white: X
    black: X
    hispanic: X
    biracial: X
    asian: X
    native: X
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
- Finding 1
- Finding 2
recommendations:
- Recommendation 1
- Recommendation 2
kpi_alignment:
- KPI 1
- KPI 2
outcomes:
  user: Desired user outcome
  business: Desired business outcome
opportunity_areas:
- Unmet need 1
- Research gap 1
further_research_needed:
- Area 1
- Area 2
underserved_groups_missing:
- Group 1
- Group 2
secondary_research:
- Web analytics
- SME interviews
synthesis_tools_used:
- Mural
- Affinity Mapping
tags:
- 'BNFT: Healthcare'
- 'MHV: Appointments'
---
Recommendations
===

**Pre-check-in**

Ensure voice overs can tell users that the page is loading when transitioning between pages. 
https://github.com/department-of-veterans-affairs/va.gov-team/issues/35471
Ensure the same when a user submits information too. 
On specific pages where relevant, edit the line on the appointments and intro page so that “Your appointment is on” is one line, and then “date” is the second line. This helps reduce swiping. 
https://github.com/department-of-veterans-affairs/va.gov-team/issues/35472


**Day of check-in**

Multiple appointment use case: when a user is late for their appointment:
Ensure appropriate screen reader behavior, where it starts at H1 
Add messaging on appointment details page that lets them know they can still scroll down to check-in to remaining / upcoming appointments. Perhaps this should be an aria tag, so it’s only read for screen-readers. Question: Why did her voiceover immediately read that message and not the H1 and the paragraph immediately below the H1? 
https://github.com/department-of-veterans-affairs/va.gov-team/issues/35473


For multiple appointments and confirmation page: Edit the line on the appointments and intro page so that “Your appointment is on” is one line, and then “date” is the second line. This helps reduce swiping. 


General observations
===
These questions may be helpful when we do the holistic, end-to-end pre-check-in and check-in user testing: 
Is it clear to veterans what the purpose of pre-check-in is? 
How do they distinguish between pre-check-in and check-in? 


