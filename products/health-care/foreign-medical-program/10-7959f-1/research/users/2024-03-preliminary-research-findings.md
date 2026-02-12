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

# Preliminary Form Improvements: Form 10-7959f-1 (FMP Registration)

This document lists first-impression quick fixes to form 10-7959f-1 discovered during user research. The purpose is to identify opportunities for improvment to the form that can be made by design and developers while full analysis is ongoing.

This document is not intended to serve as a research report and does not cover all research findings. It is not the result of full analysis but rather documents gut-feeling best guesses by researchers.

[Prioritization matrix](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1716217052586/a2bc86c566749036601fe4d68331e62cf475e983?sender=u3844370d13a440a7859d3526)

## Things we don’t need to go through the design system for



* Most users expect to receive an email confirmation when they submit the registration. Let’s send them an email.
    * Tell people approximately how long until they receive a response, and by what method (mail? email?).
    * Consider providing contact details and next steps, if they don’t hear from the VA by a certain date.
        * Several participants mentioned having issues contacting the FMP or VA by phone. In this case, email or AVA information could be very valuable to users.
    * Consider providing instructions on how to retrieve the application at a later date.
    * Consider providing instructions on how to update their information after they’ve submitted their application.
* Remove formatting requirements like dashes, parens, etc. whenever possible.
* If possible, customize addresses for each country or include extra lines for foreign  countries.
* Explain what the VA will use phone number, address, and email address for so users are able choose the right ones for them; many Veterans overseas have more than one of each.
* Provide brief explanations in the content about mailing vs. home address and its relevance to the FMP.
    * There was some confusion among participants, if not on the meaning of these two, then on how FMP would use them.


## Things we should go through the design system for



* Add helper text to the VA file number explaining what it is and who has one.


## Unsure if we should go through the design system



* Add country code to the phone number, and remove limits on the number of numbers and the format.
* On the review page, expand all the accordions or just lay out all the information on one page with no accordions.
* Consider leaving “select” in the “suffix” field when no suffix has been added.
* Tell users the benefit of signing on on the page where they are prompted to do so.
* There seemed to be some significant confusion about the program's coverage and what some exceptions (FDA approval, etc.) could be.
    * Consider suggesting changes to the content page to outline the benefits more concisely.
    * Consider this when working on the claims form and consider what information users may need in that context.
