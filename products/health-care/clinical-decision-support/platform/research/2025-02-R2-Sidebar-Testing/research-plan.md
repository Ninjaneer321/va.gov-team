---
# Research Plan Metadata
title: "Research Plan for CDS Platform Team, CDS Console Sidebar Navigation, Q2 2025"
date: 2025-02-17
last_updated: 2025-03-07
team: "CDS Platform Team (Thoughtworks)"
product: "CDS Console – Sidebar Navigation"
product_area: "Clinical Decision Support Console"

# Background Context
background:
  problem_statement: "The current header navigation occupies too much vertical space, hindering viewability of CDS application content. Clinicians face significant challenges navigating between different CDS content and data across applications, resulting in a fragmented experience disconnected from the workflow-based approach they need to deliver clinical care effectively and enhance care coordination."
  product_location: "CDS Console (Clinical Decision Support Console) – includes MWW, MedCalc, Voogle, STORM, and Task Manager"
  user_familiarity: "Iteration on an existing product; Round 2 of usability testing following validated Round 1 sidebar navigation concept"
  
# Research Design
methodology: "Moderated usability testing with clickable prototypes"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate whether updates to the sidebar navigation improve efficiency and usability by refining the information architecture and ensuring a clear, intuitive structure."
  - goal_2: "Identify any remaining usability challenges clinicians face when interacting with the navigation, focusing on wayfinding, discoverability, and workflow alignment."
  - goal_3: "Assess the effectiveness of the visual hierarchy and organization within the sidebar to ensure key tools and CDS applications are easily accessible and logically grouped."

research_questions:
  - "Does the revised sidebar navigation improve clinicians' ability to locate and access necessary tools quickly?"
  - "Are there any lingering usability issues causing friction in workflow efficiency?"
  - "Do users understand the labeling and grouping of navigation elements?"
  - "How are patient demographic details best displayed across focus areas for user journey milestones?"
  - "How do navigation interactions align with clinician workflow needs?"

hypotheses:
  - "Addressing usability issues identified in Round 1 testing will improve the effectiveness of the V1/MVP sidebar navigation, making it easier for clinicians to navigate between CDS applications and tools."
  - "Optimizing the organization of navigational elements, refining interactions, and streamlining transitions will result in fewer workflow interruptions and help clinicians locate essential tools more efficiently."
  - "Standardizing the display of patient demographic details across the user journey will reduce cognitive load, minimize errors, and improve clinician confidence in accessing critical patient information."

expected_outcomes: "Findings will inform final design refinements before V1/MVP implementation. Usability challenges identified will be addressed to ensure an optimized experience. Opportunities for future enhancements will be captured for consideration based on product prioritization. Implementation of V1/MVP is scheduled to begin in Q2 2025."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Internal (Researcher-led outreach via CDSC Research Participant Database)"
  approach: "Targeted outreach based on application user type; mix of MWW users, MedCalc users, and Task Manager users"
  
  primary_criteria:
    - "3 MWW Users"
    - "2 MedCalc Users"
    - "1 Patient Safety SME"
    - "1 MWW & MedCalc User"
    - "2 Miscellaneous CDS Console users"
    
  secondary_criteria:
    - "Primary Care Physicians"
    - "Familiar with the CDS Console"
    
  screener_questions:
    - question: "Have you used the CDS Console (e.g., MWW or MedCalc) in the last 6 months?"
      qualifying_response: "Yes"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-02-21"
  pilot_participant: "[Session Dry Run – internal team]"
  research_dates: "2025-02-28 to 2025-03-13"
  research_review_submission: "2025-03-07"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhancing clinician efficiency in decision support workflows"
    key_results: 
      - "Reduce navigation friction and time spent locating essential CDS tools"
  - objective: "Reducing navigation friction and cognitive load"
    key_results:
      - "Optimized sidebar navigation information architecture validated through usability testing"
  - objective: "Ensuring CDSC usability and accessibility for diverse clinical users"
    key_results:
      - "CDS accessibility guidelines incorporated into V1/MVP story shells"
      
veteran_journey_phases:
  - "N/A – Research focuses on VHA clinical staff, not Veterans"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Round 1 Sidebar Navigation Usability Testing (validated sidebar navigation hypothesis; identified adjustments for R2)"
    
tags:
  - "health-care"
  - "clinical-decision-support"
  - "CDS"
  - "sidebar-navigation"
  - "usability-testing"
  - "CDS-console"
  - "V1/MVP"
  - "BNFT: Healthcare"
---


# Research Plan for CDS Platform Team, CDS Console Sidebar Navigation, Q2 2025
> [!NOTE]
> *Questions about how to set up your research study? Reach out first in the via Slack in [#cds-hcd-cop] (https://dsva.slack.com/archives/C06043YBWTC) or if more help is needed check out the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product or feature trying to solve?`

**The current header navigation in the CDS Console occupies too much vertical space, hindering the viewability of Clinical Decision Support (CDS) application content. Clinicians face significant challenges navigating between different CDS content and data across applications, resulting in a "fragmented" experience that is disconnected from the workflow-based approach they need to deliver clinical care effectively and enhance opportunities for care coordination.**
  
`Where is your product situated within the clinicians' or VA staff's toolset (ex: CDS Console > MedCalc)`

**The CDS Console serves as the central hub for clinical decision support tools. It includes applications such as MWW (My Workflow Workspace), MedCalc (Medical Calculators), Voogle, STORM, and Task Manager. The sidebar navigation is the primary means of access between these tools.**
  
`What is clinicians' familiarity with this tool? Is this a new product or an iteration on an existing one?`

**This is an iteration on an existing product. The CDS Console is familiar to participating clinicians. Round 1 usability testing validated the sidebar navigation concept over the existing header navigation. Round 2 testing builds on those findings to refine the design ahead of V1/MVP implementation scheduled to begin in Q2 2025.**

`Product Brief`

**[Moderator Guide](https://dvagov.sharepoint.com/:w:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20CDSP/2.%20User%20Research/2025%20Research/Moderator%20Guide_%20Sidebar%20Navigation%20Round%202_Final%20for%20Testing2.docx?d=w2c7d47f0d36b406294382017500ba26b&csf=1&web=1&e=tynptn)**

</details>

### OCTO-DSD Priorities

<details><summary>Which OCTO priorities does this research support?</summary>

`Objective 1: Enhancing clinician efficiency in decision support workflows`  

> - **Key Result:** Reduce navigation friction and time spent locating essential CDS tools within the clinician's workflow.

`Objective 2: Reducing navigation friction and cognitive load`

> - **Key Result:** Validate an optimized sidebar navigation information architecture through usability testing prior to V1/MVP implementation.

`Objective 3: Ensuring CDSC usability and accessibility for diverse clinical users`

> - **Key Result:** CDS accessibility guidelines incorporated into all relevant V1/MVP story shells before implementation begins in Q2 2025.

</details>

## Research Goals 🎯

**Goal 1:** Evaluate whether updates to the sidebar navigation improve efficiency and usability by refining the information architecture and ensuring a clear, intuitive structure.

**Goal 2:** Identify any remaining usability challenges clinicians face when interacting with the navigation, focusing on wayfinding, discoverability, and workflow alignment.

**Goal 3:** Assess the effectiveness of the visual hierarchy and organization within the sidebar to ensure key tools and CDS applications are easily accessible and logically grouped.

### Outcome
Findings from this research will inform final design refinements before V1/MVP implementation. Any usability challenges identified will be addressed to ensure an optimized experience. Opportunities for enhancements will be captured for consideration in future releases based on product prioritization.

## Research Questions ❓

- Does the revised sidebar navigation improve clinicians' ability to locate and access necessary tools quickly?
- Are there any lingering usability issues causing friction in workflow efficiency?
- Do users understand the labeling and grouping of navigation elements?
- How are patient demographic details best displayed consistently across focus areas and user journey milestones?
- How do navigation interactions align with clinician workflow needs across different tools (MWW, MedCalc, Task Manager)?

## Hypotheses 💡

**Hypothesis 1 (Primary):** We believe that addressing usability issues identified in Round 1 testing will improve the effectiveness of the V1/MVP sidebar navigation implementation, making it easier for clinicians to navigate between CDS applications and tools. By optimizing the organization of navigational elements, refining interactions, and streamlining transitions, we expect clinicians to experience fewer workflow interruptions and locate essential tools more efficiently.

**Hypothesis 2 (Secondary):** We believe that standardizing the display of patient demographic details across the user journey will enhance usability and ensure alignment with patient safety standards. By improving consistency and gathering user expectations, we expect to reduce cognitive load, minimize errors, and improve clinician confidence in accessing critical patient information.

## Method 🔬

**Moderated usability testing** using two clickable Figma prototypes (Prototype A and Prototype B) conducted remotely via MS Teams.

### User Flows / Scenarios Tested

- **Flow 1:** User starts in MWW, navigates to the CDS Console, then to MedCalc.
- **Flow 2:** User starts in MedCalc, gathers a calculation, then creates a task.
- **Flow 3:** User launches Voogle; User launches STORM.
- **Flow 4:** Patient context change.

**Focus Topics:**
- Patient demographic details display
- Interactions across scenarios
- Navigational orientation and clarity
- Navigation labels

### Location
Remote – MS Teams

**Prototypes:**
- [Prototype A](https://www.figma.com/proto/iRqkr3vqVQzY2dOMAmPMs7/WIPCDSConsole-%22Sidebar%22Header?page-id=3784%3A11142&node-id=40788923&viewport=732%2C2193%2C0.15&t=wF1odQYhIr6dfqfC1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4078%3A8923&show-proto-sidebar=1)
- [Prototype B](https://www.figma.com/proto/iRqkr3vqVQzY2dOMAmPMs7/WIPCDSConsole-%22Sidebar%22Header?page-id=3784%3A11142&node-id=408912922&viewport=732%2C2193%2C0.15&t=wF1odQYhIr6dfqfC1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4089%3A12922&show-proto-sidebar=1)

**For moderated usability tests:** 
- [Moderator Guide – SharePoint](https://dvagov.sharepoint.com/:w:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20CDSP/2.%20User%20Research/2025%20Research/Moderator%20Guide_%20Sidebar%20Navigation%20Round%202_Final%20for%20Testing2.docx?d=w2c7d47f0d36b406294382017500ba26b&csf=1&web=1&e=tynptn)
	
## Recruitment 🎯	
*Recruitment is done by the researcher. Outreach began the week of February 17th, approximately 2 weeks ahead of testing.*

### Recruitment approach

`Audience:` Clinicians and clinical staff currently using the CDS Console (MWW, MedCalc, Task Manager)

**`1.` CDSC Research Participant Database:** Rosemary managing target list and outreach.

**`2.` Patient Safety SME:** Direct outreach scheduled during the week of February 17th.

**`3.` Snowball:** Ask prior participants to refer colleagues who meet the study criteria.

**`4.` Product SME:** Engage product SMEs for additional contacts as needed.

### Recruitment criteria

- Have you used MWW or MedCalc within the CDS Console in the last 6 months? [Answer should be yes to qualify.]
- Are you a Primary Care Physician, Pharmacist, PACT Clinician, or Nurse Care Manager? [Answer should be yes to qualify.]

### List the ideal completed sessions and total number and type of participants for this study:
> [!NOTE]
> Total number equals **2x** the ideal completed sessions *(target 8 outreach for ~6 completed sessions)*

- `MWW Users:` **3**
- `MedCalc Users:` **2**
- `MWW & MedCalc Users:` **1**
- `Patient Safety SME:` **1**
- `Miscellaneous:` **2**
- `Total:` **8 (target recruited)**
- `Ideal completed sessions:` **6**

### Primary criteria (must-haves)

- `Actively uses MWW, MedCalc, or Task Manager within the CDS Console`
- `Primary Care Physician, Pharmacist, PACT Clinician, or Nurse Care Manager`
- `Familiar with the CDS Console`
- **`At least one Patient Safety SME must be included`**

#### Secondary criteria (nice-to-haves)

- `Primary Care Physicians preferred for majority of sessions`
- `Mix of MWW-only, MedCalc-only, and dual users to cover all test scenarios`
- **`Variety of care settings (inpatient/outpatient) if possible`**

## Timeline 🗓️

### Prepare

- `Pilot participant name:` **Internal team dry run (week of Feb 17th)**
- `Date and time of pilot session:` **Week of February 17–21, 2025** 

### Research sessions
- `Planned dates of research:` **February 28 – March 13, 2025**

| # | Date | Time (ET) | Role / Specialty | Segment | Moderator | Status |
|---|------|-----------|-----------------|---------|-----------|--------|
| P1 | Friday, Feb 28 | 3:00–4:00 PM | Women's Health Director, Primary Care Physician | MWW & MedCalc User | Liz | ✅ Confirmed & Completed |
| P2 | Wednesday, Mar 5 | 11:30–12:30 PM | Pharmacist | MedCalc User | Liz | ✅ Confirmed & Completed |
| P3 | Wednesday, Mar 5 | 3:00–4:00 PM | Primary Care Physician | MedCalc User | Liz | ✅ Confirmed & Completed |
| P4 | Friday, Mar 7 | 3:00–4:00 PM | Primary Care Physician | MedCalc User | Liz | ✅ Confirmed & Completed |
| P5 | Wednesday, Mar 12 | 1:00–2:00 PM | PACT Clinician | Console User, Task Manager User | Liz | ✅ Confirmed & Completed |
| P6 | Thursday, Mar 13 | 1:30–2:30 PM | RN, Nurse Care Manager | Task Manager User | Liz | ❌ Cancelled |

### Length of sessions
- `Session length:` **60 minutes**
  
- `Buffer time between sessions:` **30 minutes recommended**
  
- `Maximum sessions per day:` **2 per day**

  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.**

- `Moderator:` **Liz**	
- `Research guide writing and task development:` **Liz**		
- `Participant recruiting & screening:` **Rosemary**	
- `Project point of contact:` **Liz**		
- `Accessibility specialist:` **[To be confirmed]**	
- `Note-takers:` **MR Ngo (P1), December Burgh (P2), Rosemary Rogers (P3), None (P4, P5), Sarah Cnota (P6)** 	
- `Observers:` Share the Notetaker and Silent Observer guide in advance. No more than 3 total attendees (moderator, notetaker, observer) per session on the VA side.

### Notetaker and Silent Observer Guide
- Be a silent observer. If you have a question for the participant, ask the facilitator via a Slack DM and they'll accommodate it if appropriate.
- If you can notetake, please do! Use the note taking template in the [Mural](https://app.mural.co/t/thoughtworksclientprojects1205/m/thoughtworksclientprojects1205/1740762221224/572e7d830b11d84b545341f0546714bd48a489b3) with screenshots.
- Write what you hear and see as much as possible. Try to capture what participants said without adding your own interpretation.
- Share your notes back with the facilitator via Slack if taken outside of the Mural. Do not include ANY PII in this chat.
- For design testing, write down things that aren't said — when someone misunderstood copy or clicked the wrong element.

**Protecting PII**
- Do not include the participant's name or other identifiers in your notes. Use a general role description such as "primary care provider."
- In the event a participant needs to share their screen with a real patient visible, stop the recording before they share. **DO NOT RECORD THE PARTICIPANT'S SCREEN IF THEY ARE SHOWING A REAL PATIENT.**


## Approvals ✅
- `Reviewed by or [Amanda Klausmeirer] on [02-20-2025]`
