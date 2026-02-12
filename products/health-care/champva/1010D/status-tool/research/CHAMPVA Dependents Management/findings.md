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

# Findings from 3 SME interviews - Sept 2025

More detailed notes can be found in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1756332139043/fc1bb9a1bdb0c5ee01798567c25245b3f3dbff02?sender=u7ee42566b5167ec20b007504). (Only visible when logged into VA account.)

## 1. How dependent applications are processed
Dependents are stored independently in CP&E. 
- If there are multiple dependents in one CHAMPVA application, each dependent will be deemed either eligible or ineligible.
- Dependents who are ineligible because they are missing documents will NOT hold up the other dependents in the application.
- Once they resubmit their application with the missing information, they will go to the back of the queue. Their application will be processed with the same timeline as new applications.

Once an application is assigned to someone "it's going to be processed within... I would say no more - and this is being extreme - 48 hours. Realistically, it's more within hours."  
> Since an application is only In Progress for < 48 hours, it could be good enough for MVP to just display Received and Complete statuses.  

## 2. Who can access application status 

A caller can access a dependent's application status as long as they are able to verify 3 of the following data points (one needs to be the SSN or DOB):
- SSN
- first name
- middle initial/middle name
- last name
- DOB of applicant

If a child is over 18, they have to give active permission to release their information to a parent. They can do this verbally over the phone. 

> Need to check with policy to see how these rules would translate to VA.gov.
>  
> **For MVP, we will assume that the applicant can view statuses and submit updates for any other dependent on their application, when logged into VA.gov.** The applicant could be the Veteran sponsor, spouse, or adult child. This should align with policy because the applicant knew the 3 data points about each dependent on the application when they filled out the form, and they will confirm their own identity by logging into VA.gov.
> 
> If someone (Veteran, dependent, caretaker) was NOT the applicant and wants to look up an application status, they will have to use the call center.
> 
> We could consider building an eligibility checker, completely separate from any application status. The user would type in an SSN and be able to see if the status is Eligible, Pending, or Not Eligible. This functionality is currently available through the call center's telephony system (referred to as the eligibility status self-service option for CHAMPVA).  
  
## 3. Magic wand
If the 3 SMEs could wave a magic wand and change anything, they would:
  - Check for Tricare eligibility. "That would stop like 40% of my ineligible applications right off the bat."
  - Give online application status
  - Tell people when their A card is mailed out, and to what address
  - If someone is approved for CH35 education assistance, automatically update school eligibility for CHAMPVA
  - Let applicants update school certifications and OHI on VA.gov (like EZR update only flow). 
