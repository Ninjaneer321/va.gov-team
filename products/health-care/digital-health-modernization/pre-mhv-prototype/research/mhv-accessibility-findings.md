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
- 'BNFT: Records'
- 'MHV: Pharmacy'
- 'MHV: Secure Messaging'
- 'MHV: Personal Health Records/Medical Records'
---
# My HealtheVet Accessibility Findings
Consolidated findings from past research studies on the accessibility of the My HealtheVet patient portal.

## Secure Message incompatible with screen readers
[1. From VA Clipboard team's research on health records, February 2021](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/questionnaire/research/health-record)

The participant who was totally blind shared an accessibility-related issue that they have run into with secure messaging within My HealtheVet. They also mentioned trouble navigating from section to section within My HealtheVet, but navigating an individual page worked great.
> “I don’t know the issue with interacting with screen reading. I cannot send a message to someone with more than a few words, so I go to my file, write it, then copy it. If I try to write it in there, it kicks me out. If I try to find the new message, it is 50 keystrokes. I tried sending in problem messages and it doesn’t go through. I called and made complaints, but that’s gone nowhere.”

## Prescription Refill table incompatible with screen readers
1. From conversation with non-sighted Veteran using PC laptop and JAWS. Raw notes from interview.
Assumption is that technically the page "passes" 508 compliance but in the experience of using it, somehow the selected row gets disabled and he has to "get out" of the table and re-navigate to find out if the proper row was selected for the refill. 

**Navigating table**
> MHV has changed something, table displays with list of meds

> Check to refill – changed the table so I can’t read half of the columns – like 6 columns

> Have to start all over again

> How many refills I have left is one columns – check if you want a refill

> I want to get to next med – hit a key to next link – doesn’t announce if there are any refills left

> Gotta go back outside the table

> Sometimes don’t have to do that

> Takes time – disabled the basic function

> So then I have to call the pharmacy (that’s new)

> Made it less accessible as far as I’m concerned 

> Tables – MHV the only place I spend a lot of time in tables, at least once a week 

> In MHV – called a grid

> JAWS table keys navigate the table

> Some of the columns go away

> Streamlining – was better before

> I can read a column down – go through each one without going through whole row

> Once I check to refill box, no longer available – have to start again

**Pagination**
> I have 25 or 30 prescriptions

> Select refill, then wait a bit, sometimes it doesn’t takeThe way it comes up, the table has 10 rows in it, combo box – set a place mark in JAWS

> I will hit it to 25-50 rows, then it’s all in one table, but I changed the table

> First thing is increase the number of rows displays

Interesting that the first thing he does is reset the pagination to display all 25-30 of his meds on a single page so he can get the full picture. Then he goes into the table and tries to navigate and find which ones he needs to refill. 

**Prescription names**
> Bc VA uses generic names, name doesn’t make sense – not the same as the label

I asked about doing a "find" on the med name, would that help at all, and he said that the generic names make that impossible to do! Of course he has to have Braille labels for his meds and then figure out which ones need to be refilled. 
