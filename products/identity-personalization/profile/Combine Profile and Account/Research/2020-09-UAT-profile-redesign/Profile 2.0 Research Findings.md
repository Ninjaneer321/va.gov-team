---
title: "[Study] Research Findings"
product: "Product Name"
team: "Team Name"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "YYYY-MM-DD"
researchers:
  - "Researcher/Designer 1"
  - "Researcher/Designer 2"
research_goals:
  - "Goal 1"
  - "Goal 2"
methodology:
  - "Method 1"
  - "Method 2"
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
    "25-34": X
    "35-44": X
    "45-54": X
    "55-64": X
    "65+": X
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
  - "Finding 1"
  - "Finding 2"
  # etc.
recommendations:
  - "Recommendation 1"
  - "Recommendation 2"
kpi_alignment:
  - "KPI 1"
  - "KPI 2"
outcomes:
  user: "Desired user outcome"
  business: "Desired business outcome"
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Area 1"
  - "Area 2"
underserved_groups_missing:
  - "Group 1"
  - "Group 2"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"
---

## Profile 2.0 UAT Findings

[Profile 2.0 UAT Findings Spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/Profile%202.0%20UAT%20(1).xlsx)

## Issues

1.    [Updating phone number had a weird delay and took 3 attempts](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9765)
2.    [No military branch showing up in military information section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13222)
3.    [Need to create an Error alert when we can’t verify a person is a veteran/info is not available](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13224)
4.    [“Invalid date” on Military Information service dates](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13130)
5.    Connected apps API issue: the frontend is expecting an empty array if the user has no apps, but for some reason there is a “404” display to users who have never connected an app.There seems to be an ID issue . User is shown “there was an issue connecting to connected apps”. This shouldn’t be shown if they have never been connected to apps (Mark Greenberg to create ticket)
6.    Users unable to update phone number to fix Direct Deposit issues if they have an international phone number ((VA Profile doesn't accept international phone numbers, and that's not something they are addressing for at least 3 months))
