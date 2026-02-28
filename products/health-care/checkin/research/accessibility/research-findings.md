---
title: "[Health Care Check-in Accessibility] Research Findings"
product: "Health Care Check-in (Pre-check-in and Day-of Check-in)"
team: "Not specified"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "Not specified"
researchers: 
  - "Not specified"
research_goals:
  - "Not specified - accessibility evaluation of pre-check-in and day-of check-in flows implied from content"
methodology:
  - "Accessibility testing (implied)"
  - "Screen reader testing (implied)"
devices_used:
    desktop: 0
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 0
demographics:
  veterans: 0
  service_members: 0
  caregivers: 0
  family_members: 0
  dependents: 0
  VA_staff: 0
  age: 
    "25-34": 0
    "35-44": 0
    "45-54": 0
    "55-64": 0
    "65+": 0
    unknown: 0
  education: 
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 0
  location: 
    urban: 0
    rural: 0
    unknown: 0
  race:
    white: 0
    black: 0
    hispanic: 0
    biracial: 0
    asian: 0
    native: 0
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Voice overs cannot indicate to users when pages are loading during transitions between pages"
  - "Voice overs do not indicate when a user submits information"
  - "On appointments and intro pages, having 'Your appointment is on' and the date on the same line requires excessive swiping for screen reader users"
  - "For multiple appointment use cases when a user is late for their appointment, screen reader behavior does not start at H1 appropriately"
  - "On appointment details page when user is late, there is no messaging to let users know they can scroll down to check-in to remaining/upcoming appointments"
recommendations:
  - "Pre-check-in: Ensure voice overs can tell users that the page is loading when transitioning between pages. https://github.com/department-of-veterans-affairs/va.gov-team/issues/35471"
  - "Pre-check-in: Ensure the same when a user submits information too"
  - "Pre-check-in: On specific pages where relevant, edit the line on the appointments and intro page so that 'Your appointment is on' is one line, and then 'date' is the second line. This helps reduce swiping. https://github.com/department-of-veterans-affairs/va.gov-team/issues/35472"
  - "Day of check-in - Multiple appointment use case when a user is late: Ensure appropriate screen reader behavior, where it starts at H1"
  - "Day of check-in - Multiple appointment use case when a user is late: Add messaging on appointment details page that lets them know they can still scroll down to check-in to remaining/upcoming appointments. Perhaps this should be an aria tag, so it's only read for screen reader users. https://github.com/department-of-veterans-affairs/va.gov-team/issues/35473"
  - "Day of check-in: For multiple appointments and confirmation page: Edit the line on the appointments and intro page so that 'Your appointment is on' is one line, and then 'date' is the second line. This helps reduce swiping."
kpi_alignment: []
outcomes:
  user: "Not specified"
  business: "Not specified"
opportunity_areas: []
further_research_needed:
  - "Clarify to veterans what the purpose of pre-check-in is"
  - "Help veterans distinguish between pre-check-in and check-in"
underserved_groups_missing: []
secondary_research: []
synthesis_tools_used: []
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "MHV: Appointments"
  - "Accessibility"
  - "PRDT: health-care-check-in"
  - "HDW: Smartphone"
  - "screen-reader"
  - "usability-testing"
  - "evaluative"
  - "DSP: Contextual Help"
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


