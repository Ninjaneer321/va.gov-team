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

# MHV and VA.gov profile evaluation and comparison
## Background
We evaluated the My HealtheVet (MHV) Personal Information section to compare it to VA.gov’s Profile section and work toward a strategy for how we might provide a single profile experience for Veterans on VA.gov

## Method
1. We started with [a Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/vsa8243/1645732777530/3b751dac638c58f4463823ac9476e4e25dc1240f?invited=true&sender=uaa72d11015d3f7c704a64191) to get a sense of MHV screen-by-screen, and then did the same with our profile.  
2. We conducted interviews with the MHV UX and Health Apartment teams to get a better sense of plans for MHV Personal Information, and learn what they know about how people use these pages today. (notes coming soon)
3. We created an [excel document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/comparison/mhv-profile-audit.xlsx) to capture:
- whether or not information already lives on VA.gov
- what the MHV team plans are
- our initial recommendations based on what we know today. 

## Findings Summary
1. Generally, MHV wants to align data with the VA.gov profile, and pull in data from MPI wherever possible (rather than having it live in multiple places, or have it be editable by users).
2. As a step toward single profile, MHV team will be directing Veterans from MHV’s “My Profile” to VA.gov profile to view or update information we have on our side, such as contact information.
3. There are some fields in My Profile, and sections of Personal Information, that need further research before we can make initial recommendations (details below).

## MHV section-by-section
### MHV - My Profile
This is closest to VA.gov’s personal information and contact information
- Much of this data is in MPI and already being pulled into VA.gov profile.
- Most of the data that isn’t already being pulled in is proposed or confirmed for removal.
- We probably don’t need the fields `My VA Treating Facilities` or  `What is your relationship to the VA?`.
	- The MHV team doesn’t know much about how they’re used or how Veterans understand them. 
	- We need to learn more from Veterans and coordinators to confirm it’s fine not to move them to VA.gov.
- The options under  `Notification settings` are the only new fields we recommend adding profile to accommodate MHV users at this time.
- `Blood type`  could be useful on the health information card, but probably makes sense in the health apt more than in VA.gov profile

### MHV - Download my data
Veterans can access Blue Button, lab reports, and health records from here.
- This whole section is going to the health apartment, [according to the site map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1643826109164/a19c6f1b4d6e0570477757008aad730f1cf7782a?wid=97-1643826112506).
- We not recommend putting this in profile based on what we know today.
- We can update existing links in My VA to point to the health apartment.

### MHV - In case of emergency
In this section of Personal Information, a Veteran can identify an emergency contact. This contact is then added to the Veteran Health Information card that is printable from another section of Personal information.
- We need to learn more about this (MHV and Health apt perspective)
- This data is reviewed/updated when a person checks in for an appointment, and will be sent to VA Profile 
- Could this be useful for Veterans without health care to have on their VA record?
- Hypothesis: this belongs more with health preferences than a profile.

### MHV - My Account
This section of Personal Information allows users to manage their password,  and view account details, including log-in attempts.
- Hypothesis: this whole section will become irrelevant once we drop the MHV credential

### MHV - Health information
This page displays a Veteran’s Health Information card and allows them to print it out. Some of the information on the card, like blood type, and emergency contact, is self-entered.
- Need to learn more about this (MHV and Health apt perspective, Veteran perspective).
- Would like to gather data about usage.
- Hypothesis: this belongs more with health preferences than a profile

### MHV - My Links
Veterans can enter URLs, assign them a name, and set as “Active” or “inactive” from there. More questions than answers came up after reviewing this section:
- How much is this used?
- What do Theresa and Carnetta see as the usefulness of this section?
- Are there health apt plans for this?

### MHV - Pay or receive funds
These are links to submit for travel pay reimbursement, pay co-pays, view patient statements, and VA.gov.
- Some links are already on My VA, or will be soon.
- The other links are slated for the Health Apartment’s [copay, bills, and travel pay section](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1643826109164/a19c6f1b4d6e0570477757008aad730f1cf7782a?wid=99-1643826112506).

## Next steps
We'll conduct interviews with MHV stakeholders in the next sprint, and start planning for interviews with Veterans, MHV help desk staff, and coordinators.

## Links
- [Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1645732777530/3b751dac638c58f4463823ac9476e4e25dc1240f?sender=lizlantz1528) (visual comparison of MHV + VA.gov structure)
- [MHV personal info audit (xlsx)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/comparison/mhv-profile-audit.xlsx) 

[image:6517351A-8F80-4B35-9A5A-4D5BE06DB4E7-28619-00002A61D53A6D21/FCF56A9A-4781-404F-8644-C578E0D72C28.png]

- [Recommendations]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/recommendations.md)) based on all research activities for this initaitive. 
