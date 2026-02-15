---
title: "Facility Selection Variant Test - Research Findings"
product: "VA Online Scheduling (VAOS)"
team: "Appointments Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2021-08-23"
researchers:
  - "Lauren Ernest"
  - "Peter Russo"
research_goals:
  - "Provide simpler interactions and clearer content on the facility selection page so Veterans can more easily understand the task"
  - "Help Veterans complete this step faster - shorter time spent on page"
  - "Help Veterans complete this step more often - lower abandonment rate on page"
methodology:
  - "AB variant test"
  - "Analytics tracking via Google Analytics"
  - "Feature flag enabled variant for 50% of VA.gov users"
devices_used:
    desktop: 0
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 31572
demographics:
  veterans: 31572
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 0
    "35-44": 0
    "45-54": 0
    "55-64": 0
    "65+": 0
    unknown: 31572
  education:
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 31572
  location:
    urban: 0
    rural: 0
    unknown: 31572
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
  - "Variant users spent 3 seconds less on the facility selection page compared to control (43 seconds vs 49 seconds)"
  - "Variant users had 6% lower abandonment rate compared to control (18% vs 28%)"
  - "All users averaged 46 seconds on page during test period compared to 51 seconds in 3 months ahead of test"
  - "All users averaged 24% abandonment during test period"
  - "Most users saw the list sorted by residential address first as expected"
  - "Most users who switched the sort method changed it to current location"
  - "Twice as many control users attempted to sort by location compared to variant users"
recommendations:
  - "Track time on page and abandonment for two weeks after the variant is taken down"
  - "If time on page and abandonment continue pre-test trends, release the updated page"
  - "Align CC provider selection to facility selection"
  - "In future studies, look at tools for calculating statistical significance"
kpi_alignment: []
outcomes:
  user: "Veterans can select their VA facility faster with less confusion"
  business: "Reduce abandonment rate at facility selection step in VAOS appointment request flow"
opportunity_areas:
  - "Understanding why control group abandonment trended higher during test period"
  - "Understanding if alphabetical sort was more useful than current location or if users didn't want to share location"
  - "Understanding whether it was easier to find the location option on control or if variant page was easier to understand"
further_research_needed:
  - "Determine if 28% abandonment for control group was part of a trend or a blip"
  - "Research why 15 users ended up with current location as default sort"
  - "Understand if alphabetical sort was more useful than current location or if users didn't want to share their location"
  - "Research if it was easier to find the location option on the control (not in a dropdown) or if the variant page was easier to understand so fewer Veterans tried that option"
underserved_groups_missing: []
secondary_research:
  - "Web analytics"
  - "Previous VAOS research from July 2020"
  - "Preferred facilities research sessions from May 2021"
synthesis_tools_used:
  - "Google Analytics visualizations"
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "MHV: Appointments"
  - "AB-testing"
  - "analytics"
  - "quantitative"
  - "VAOS"
---

# Facility Selection Variant Test - Research Findings

Lauren Ernest, Product Manager
lauren.ernest@adhocteam.us

Peter Russo, Sr. UX Designer
peter.russo@adhocteam.us

Last update: August 23, 2021

[Slide deck](Sorting%20Facilities%20-%20Variant%20Test%20Report.pdf)



## How this research maps to the Veteran journey

![alt text](images/how-this-research-maps-to-the-veteran-journey.png)


## Problem
The page where Veterans select a VA facility consistently has the highest abandonment rate in the VAOS appointment request flow. 


![alt text](images/facility-select-variant-findings.png)

_Abandonment rate of 27%_

_Data from request flow, April 1 - June 22, 2021_





## Hypothesis
We believe that if we provide simpler interactions and clearer content on the facility selection page, Veterans will be able to more easily understand the task this page is asking them to complete. 

This will help them complete this step: 
- Faster - shorter time spent on page
- More often - lower abandonment rate on page

![alt text](images/facility-select-variant-findings-1.png)


## Supporting research
“__Content presented the biggest burden to all users.__ Veterans indicated excessive trouble understanding, parsing through, and comprehending the information presented to them. 

“[Veterans] indicated not only was the amount of content a burden, but the variation throughout the content used to describe the same information difficult for them to manage.”

- [VA Online Scheduling: VAOSR and "Express Care" Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/july-2020-user-research/2020-july-VAOSR-EC-research-report.md), July 2020
- Showed redesign during the [preferred facilities research sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/research-findings.md).
- Saw no major pain points around navigating the page.

![alt text](images/facility-select-variant-findings-2.png)
![alt text](images/facility-select-variant-findings-3.png)

## OCTO-DE goals this research supports

![alt text](images/octo-de-goals-that-this-research-supports.png)

## Setting up the test
- Dev team built the facility page variation under a feature flag.
- PM set up analytics event labels and created visualizations in GA.
- Analytics team helped troubleshoot some of the visualizations, but setup was mostly self-service.

![alt text](images/facility-select-variant-findings-4.png)

## Running the test
- Released this variant to 50% of VA.gov users (not VAOS specifically) 
- Test ran for 2 weeks, from July 28 to August 11th.
- Turned the variant off to analyze the data.


## Results

### Participants
- 31,572: Total users in the study 
- 14,355: (45%) Users saw the variant

![alt text](images/facility-select-variant-findings-5.png)


### Time on page

51 seconds: Avg. for 3mos ahead of test

During test:
- 46 seconds: All users (avg)
- 43 seconds: (-3s) Variant users 
- 49 seconds: (+3s) Control users

![alt text](images/facility-select-variant-findings-6.png)

### Abandonment
24%: All users (avg) 
18%: (-6%) Variant users 
28%: (+4%) Control users

Note: In the middle of the test we turned on direct scheduling, which resulted in two paths that = completion

![alt text](images/facility-select-variant-findings-7.png)

#### Abandonment trending higher?

From 8/5 - 8/11, before the variant was released, abandonments were 27%. 

Average for the year has been 26%.

Follow-up research question: Was 28% for the control group part of a trend, or a blip? 

![alt text](images/facility-select-variant-findings-8.png)


### Note on statistical significance
- Didn't calculate statistical significance for this study.
   - Having two different sample sizes added complexity to the abandonments (or conversions) calc.
   - Unclear how to calculate statistical significance for time on page.
- Goal was to simplify page and “do no harm.”


### Sorting facilities

Sorting in the control

![alt text](images/facility-select-variant-findings-9.png)

Sorting in the variant

![alt text](images/facility-select-variant-findings-10.png)


Results (described below)

![alt text](images/facility-select-variant-findings-11.png)


#### Default sort - variant
As expected, most users saw the list sorted by residential address first.

- By default, the list sorts by closest to home address for both variant and control.
- If no home address is on file, both lists default to alphabetical sort.

Follow-up research: We didn’t set intentional logic for a current location default, so we’re not sure how 15 users ended up in this state (especially since it requires browser permission…)


#### Sorting changes - variant
As expected, **most users who did switch the sort method changed it to current location**.

Roughly the same number of users switched the sorting method to alphabetical and residential address.

####  Final sort - variant

As expected, residential address was the final sort order for most users.

**Alphabetical sort slightly beat out current location.**

Follow-up research: Was alphabetical sort more useful (or usable) than current location? Or, did users just not want to share their location? 


#### Sorting facilities - control

**Twice as many control users attempted to sort by location.**

Control - 4,226 users clicked “sort by current location” 5,517 times

This is higher than the average for the past 4 months, where users have clicked that option 1997 times per week ( ~4000 clicks every two weeks.)

Variant - 2,121 users clicked “sort by current location” 2,832 times
20

Follow-up research:
- Was it easier to find the location option on the control (not in a dropdown)?
- Or, was the variant page easier to understand so fewer Veterans tried that option?


## Next steps
- Track time on page and abandonment for two weeks after the variant is taken down.
- If time on page and abandonment continue pre-test trends, release the updated page.
- Align CC provider selection to facility selection.
In future studies, look at tools for calculating statistical significance.

