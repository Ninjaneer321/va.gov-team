---
title: Historical Findings on 10-10CG Signatures and Save In-progress
product: 10-10CG Caregiver Application
team: Caregivers
office: Office of the CTO - Digital Experience (OCTO-DE)
date: '2024-11-01'
researchers:
- Caregivers Team
research_goals:
- Document historical discovery and research findings from original 10-10CG form development
- Capture signature implementation decisions and considerations
- Document Save In-progress functionality exploration from 2019-2020
methodology:
- Historical document review
- Discovery research synthesis
- Stakeholder meeting documentation review
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
  dependents: 0
  VA_staff: N/A - Desk research
  age:
    25-34: 0
    35-44: 0
    45-54: 0
    55-64: 0
    65+: 0
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
- October 2019 discovery work explored signature requirements prior to form launch
  on VA.gov
- Checkbox signature solution considered for 526 form required both Veteran and Witness
  present when checking box
- Historical VA practice used checkbox signatures with re-authentication to verify
  identity but this is no longer used
- February 2020 stakeholder discussions addressed multiple signature requirements
  for 10-10CG form
- Multiple workflows were proposed for handling signatures from Veteran, Primary Caregiver,
  and Secondary Caregiver
- Workflow B for signature handling was discussed but never implemented
- Save In-progress functionality was explored during October 2019 discovery phase
- Form complexity with multiple signatories created unique challenges for Save In-progress
  implementation
- Historical documentation provides context for current signature and save functionality
  decisions
recommendations:
- Reference historical findings when considering changes to signature workflow
- Review October 2019 discovery documentation before implementing new signature features
- Consider lessons learned from Workflow B proposal that was not implemented
- Evaluate historical Save In-progress exploration when planning future enhancements
- Maintain documentation of signature implementation decisions for future reference
kpi_alignment:
- Support informed decision-making for form improvements
- Preserve institutional knowledge about signature implementation
outcomes:
  user: Future form improvements benefit from understanding of historical signature
    and save functionality decisions
  business: Institutional knowledge preservation enables better decision-making and
    avoids repeating past exploration work
opportunity_areas:
- Leverage historical research to inform future signature workflow improvements
- Apply lessons learned to other multi-party signature scenarios
- Use historical context to evaluate new Save In-progress feature requests
further_research_needed:
- Current user research on signature workflow usability
- Evaluation of whether historical decisions still align with current user needs
underserved_groups_missing:
- No primary research conducted - historical documentation only
secondary_research:
- October 2019 Caregiver Discovery Sprint documentation
- Example checkbox solution from 526 form
- Carnetta Scruggs signature research
- February 2020 stakeholder check-in deck
synthesis_tools_used:
- Document review
- Historical research synthesis
tags:
- 'PRDT: Caregivers'
- discovery
---
# Historical findings on 10-10CG Signatures & Save In-progress
- The information below came from the original discovery and research done to put the 10-10cg online for the first time.  

## Signatures
---

- [10/2019 discovery work prior to form launch on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/20191001%20Caregiver%20Discovery%20Sprint%202%20Roadmap.pdf)

![image](https://github.com/user-attachments/assets/3cd9d42e-218f-4e9b-9507-d39a306efd25)



- [Example of checkbox in 2019 related to 526 form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/research/signatures-vba/SEP_Checkbox%20Solution.docx.pdf) that talks about having both Veteran and Witness present when checking the box

![image](https://github.com/user-attachments/assets/863f7c09-10bc-4ed7-84cd-9f52fa08963e)


- [Info from Carnetta Scruggs re: signatures](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery/research/signatures-vha)

     - Not really that helpful, but a little background on using a checkbox.  It used to be a thing on VA to check the box, then have the person authenticate again to verify it was them.  This is no longer a thing on VA.



- [Feb 2020 Stakeholder check-in deck discussion multiple signatures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/Caregiver%20Program%20%20Team%20Check-in%20Final.pdf)

![image](https://github.com/user-attachments/assets/c2ed26bd-c2d5-46c2-86c9-c8650d73c2b8)

![image](https://github.com/user-attachments/assets/c12580e4-6988-4cbd-b7c0-c7b86bd8f4fc)

![image](https://github.com/user-attachments/assets/da6e8832-d559-4f42-86b8-eef13b9e6eb3)

![image](https://github.com/user-attachments/assets/7d1d1495-0ddf-40ac-b9c5-561df0586041)

![image](https://github.com/user-attachments/assets/cb0e3fb1-f3ba-463c-92ab-7a9c7e7edb26)

![image](https://github.com/user-attachments/assets/243da927-c6b4-4f3e-8b5f-3ee228ac3e37)
- Note on the above "Roadmap": Workflow B was never implemented
---

## Save-In-Progress for 10-10CG

- [10/2019 discovery work prior to form launch on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/20191001%20Caregiver%20Discovery%20Sprint%202%20Roadmap.pdf)

![image](https://github.com/user-attachments/assets/201cc5bb-92ea-4535-a212-27a7916fcd24)

![image](https://github.com/user-attachments/assets/789e8269-07e4-4414-b84d-b48235880413)


