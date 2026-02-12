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

Findings to date
================

*April 1, 2025*

Because the Sitewide team's contract was not extended, this research effort was suspended after the completion of 5 out of the scheduled 9 interviews.

This document is a summary of high-level findings from those interviews regarding our hypotheses and research questions.

Hypotheses
----------

### 1. Veterans and others will understand how the list of results are organized and what options they have to refine or broaden their results

Generally, this is true. Users understood that the list of results is ordered by distance from the provided ZIP code.

However, users noticed that the facility locator can only resolve down to the ZIP code level, and not to an address. This makes the facility locator less useful for Veterans who live further away from the center of a ZIP code area - their closest VA facility may be different than the one shown first in the results.

Additionally, some users in rural areas would prefer to be able to increase their search radius to accommodate longer driving distances.

### 2. Veterans and others will understand the relationship between search results and indicators on a map.

This is true.

However, some users wish the numbers on both the map and the list results were more useful. On the list, some users wanted to click the result number to center the associated facility on the map, but were not able to. On the map, results are shown by number only, which forces users to click multiple map markers to find the facility they are trying to locate.

Additionally, screen reader users using the map only hear the facility result number with no other data. This makes the map much less useful to them.

### 3. Veterans and others will understand the difference between map view and list view, and how to move from one to the other.

This is true. We did not observe any user having difficulty switching back and forth.

### 4. Veterans and others will understand which fields are required or optional for conducting a search.

This is true; however, users generally prefer to be as specific in a search as possible. Example: when provided the task to look for a new VA health facility after moving to Del Mar, California (task 1), users want to select a VA Health Facility with Primary care.

### 5. Veterans and others will understand how to get the information they need about a selected location.

This is true. The information under each facility in the results list is generally good enough, and users are comfortable clicking on a facility name to find more information.

However, some users wish that situationally-relevant information was surfaced in certain searches. One example is that, when searching for Emergency care, one Veteran noted that they would like to see a banner notification in the results to send VA notice of their care at an ER within 48 hours, because it is difficult to obtain coverage for that visit after the fact. Another Veteran who is blinded noted that they would like to see information about whether a facility serves blinded and low vision Veterans in the results list when searching for VA health facilities with optometry services.

Research questions
------------------

### What experience do Veterans and others expect from the location mapping tool on mobile?

Generally, users want to see feature parity with Google Maps. Users want to be able to input their street address and receive tailored results. The "use my location" feature is seen as very useful.

### Do Veterans and others understand the distinction between map and list view on mobile, and how to switch between the two?

Yes, it is clear to users how the map and the list relate to each other. No one had issues switching between the two.

### Do Veterans and others understand how to interact with the map view on mobile?

Generally, yes. Users are able to zoom in and out to refine results and resolve issues with facility results overlapping.

However, the map is not interactable for users with screen readers. The Mapbox widget and the numbered results on the map do not give enough information to screen readers for blind and low-vision users to navigate using the map alone.

### How do users of assistive technology on mobile devices interact with the facility locator?

These users are comfortable using the current drop-down lists to search for facilities.

However, the length of some lists can make navigation slower for these users.
