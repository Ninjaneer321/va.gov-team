---
title: 'Patient Lookup and Reverse Patient Context Research Findings'
product: CDS Console
team: Platform
office: Office of the CTO - Digital Experience (OCTO-DE)
date: 2025-06-01
researchers:
- Liz Blasi
research_goals:
- Understand clinician expectations and usability around patient search and selection workflows within the CDS Console
- Evaluate perceived value, use cases, clinician sentiments, and workflow implications of patient search
methodology:
- Usability testing with static Figma prototypes
- Clinician interviews
devices_used:
  desktop: X
  tablet: X
  smartphone: X
  assistive_technology: X
participants_total: 5+
Primary role:
  Clinical dietician: unknown
  MSA: unknown
  Nurse Practitioner: unknown
  Nursing (RN, LPN): unknown
  Pharmacist: unknown
  Physician: unknown
  Physician Assistant: unknown
  Resident, Intern, or Fellow: unknown
  Other: unknown
Specialty:
  Cardiology: unknown
  Dermatology: unknown
  Emergency Medicine: unknown
  Endocrine: unknown
  Hematology: unknown
  Hepatology/Gastroenterology: unknown
  Infectious Disease: unknown
  Informatics: unknown
  Mental Health: unknown
  Nephrology: unknown
  Neurology: unknown
  Oncology: unknown
  Pain Management: unknown
  Palliative Medicine: unknown
  Pharmacy: unknown
  Primary Care: unknown
  Pulmonology: unknown
  Surgery: unknown
  Other: unknown
Care setting:
  Outpatient: unknown
  Inpatient: unknown
  Emergency Department: unknown
  Other: unknown
EHR:
  CPRS: X
  Oracle: unknown
key_findings:
- Clinicians expect a flexible, type-ahead search supporting partial name matching
- The most ingrained search method is first initial of last name + last four digits of SSN (e.g., "B1234"), carried over from VistA/CPRS
- Patient synchronization across applications upon selection is a critical expectation
- Some clinicians expressed concerns about data loss, wrong-patient errors, and workflow disruption when switching patient context mid-task
- Clinicians want a confirmation prompt before finalizing patient selection changes
- Patient lookup is most commonly triggered during note drafting, lab order review, and verbal handoffs
recommendations:
- Support first initial + last four SSN as the primary search format, with additional support for full name and full SSN
- Implement a smart search with type-ahead, partial matching, and space-handling tolerance
- Include a confirmation step before any patient context change is committed
- Ensure patient context updates propagate automatically across all open CDS applications
- Display persistent patient identifiers at all times to prevent wrong-patient errors
- Align UI language with CPRS conventions (e.g., "Select New Patient," "Patient Selection")
kpi_alignment:
- Clinician efficiency in patient lookup workflows
- Reduction of patient safety errors related to wrong-patient context
outcomes:
  user: Clinicians can confidently and quickly locate and switch patient context within the CDS Console without disrupting active workflows or risking patient safety
  business: A well-designed patient lookup feature reduces friction in CDS Console adoption and supports safe, efficient clinical decision-making across VA care settings
opportunity_areas:
- Design a smart search that mirrors VistA/CPRS conventions while adding flexibility for partial name and multi-identifier queries
- Develop clear UI patterns for communicating what changes when patient context is switched
further_research_needed:
- How patient context switching should behave when unsaved work (e.g., open notes) is in progress
- Clinician expectations for what data should persist vs. reset when switching patients
- Edge cases around space handling and SSN format tolerance in search
underserved_groups_missing:
- Clinicians using assistive technology
- Rural or low-bandwidth care settings
- Specialty roles beyond those represented in R1 and R2 sessions
secondary_research:
- VistA/CPRS search pattern conventions
- SME interviews
synthesis_tools_used:
- Mural
- Affinity Mapping
tags:
- 'BNFT: Healthcare'
- 'PRDT: CDS Console'
- usability-testing
- remote-research
- patient-lookup
- reverse-patient-context
---

---

# Patient Lookup and Reverse Patient Context Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), CDS Console, Platform**

**Date:** June 2025

**Contacts:** Liz Blasi

**[Research Readout (PDF)](link-here)**

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

---

## Research Goals

This research was conducted to understand clinician expectations and usability around patient search and selection workflows within the CDS Console. It was evaluated across two platform research rounds (R1 and R2) using static Figma prototypes.

**Guiding Questions:**
- How do clinicians expect to locate, select, and confirm patient context within the CDS Console and across CDS applications?
- What are the perceived risks and benefits of allowing patient context switching within the Console?
- What existing search patterns and mental models do VA clinicians bring to patient lookup?

---

## Research Questions

* What is the most common method clinicians use to search for patients, and how does it map to existing VistA/CPRS patterns?
* How do clinicians expect patient context changes to propagate across open CDS tools?
* What are the patient safety concerns associated with allowing mid-workflow patient switching?
* What is the minimum patient information clinicians need visible at all times to confidently confirm patient identity?
* When in their workflow are clinicians most likely to search for or switch a patient?

---

## Methodology

- **Usability Testing with Static Figma Prototypes:** Participants interacted with two rounds of Figma-based prototypes simulating patient lookup and context-switching within the CDS Console sidebar.
- **Clinician Interviews:** Structured interview questions gathered initial impressions, task-based reactions, and comparative feedback on the prototype versus current experience.

Research was conducted remotely between December 2024 and March 2025.

---

## Hypotheses and Conclusions

- **Hypothesis: Clinicians will expect to search for patients using the same identifiers they use in CPRS/VistA.**
  - **Definitely True**
  - The first initial of the last name combined with the last four digits of the SSN (e.g., "B1234") was described as "deeply ingrained" across both research rounds. Participants consistently referenced this as their default search method.

- **Hypothesis: Clinicians will perceive patient lookup within the Console as a valuable workflow enhancement.**
  - **Maybe True**
  - Reception was mixed. Many participants saw value — particularly when multitasking or mid-documentation — but a meaningful subset expressed concern about workflow disruption and patient safety risks.

- **Hypothesis: Clinicians will expect patient context changes to automatically sync across all open CDS applications.**
  - **Definitely True**
  - All participants who engaged with the context-switching prototype expected the new patient to be reflected immediately and consistently across all open tools.

- **Hypothesis: Clinicians will want a confirmation step before a patient context change is finalized.**
  - **Likely True**
  - Several participants explicitly requested an "Are you sure?" prompt, especially given fears about accidental selection or unsaved work being lost.

---

## Key Findings

1. The first initial of last name + last four digits of SSN is the dominant and most expected patient search format, deeply rooted in VistA/CPRS usage patterns.
1. Clinicians expect a "smart search" — flexible, type-ahead, and tolerant of partial inputs and format variations.
1. Patient synchronization across all open CDS applications upon selection change is a non-negotiable expectation.
1. A confirmation prompt before committing a patient context change is strongly preferred to reduce the risk of accidental switching.
1. Some clinicians expressed significant concern about the risk of entering data into the wrong patient's chart when operating across multiple windows.
1. Patient lookup is most commonly triggered during note drafting, lab order review, and verbal handoffs — often mid-task.
1. Persistent, always-visible patient identifiers (name, SSN, DOB) are considered essential for ongoing safety verification.

---

## Details of Findings

### Finding 1
The first initial of last name + last four SSN is the dominant patient search format and should be the primary supported input.

- _Supporting data: "Sometimes a colleague is verbally saying the name, then the person is searching directly in CPRS — people are quite ingrained in using the first initial of the last name and last 4 of social. This is the most common identifier — historically in VistA, this is how people search, so it's ingrained in people to use this format." [P2, R2]_
- _Supporting data: Prototype search field placeholder ("Search by patient name or last 4 of SSN") aligned with participant expectations and received no negative feedback on framing._

### Finding 2
Clinicians expect a flexible, forgiving "smart search" that accepts multiple identifier formats and supports partial matches.

- _Supporting data: "It would be neat to be able to search for part of a name — some systems do this, some people rattle off a name fast, so that would be helpful." [P3, R2]_
- _Supporting data: Participants also mentioned support for full SSN, full last name, and first name as secondary search options._

### Finding 3
Patient synchronization across all open CDS applications is expected immediately upon saving a new patient selection.

- _Supporting data: Clinicians expected the selected patient to automatically update across applications once new patient selection was "saved." This expectation was consistent across both R1 and R2._
- _Supporting data: "If you are able to select a different patient in the console and everything is synced, some people might find that useful... I'm not against it." [P5, R2]_

### Finding 4
A confirmation prompt before finalizing patient context changes is strongly preferred.

- _Supporting data: Multiple participants in R1 explicitly requested an "Are you sure?" confirmation message before finalizing patient selection._
- _Supporting data: Concern was especially heightened among participants who were mid-documentation when imagining a context switch._

### Finding 5
Some clinicians have significant concerns about patient safety risks associated with mid-workflow context switching.

- _Supporting data: "I'm not sure I would even include that function... It's a major patient safety issue that you could end up looking at the wrong information." [P3, R2]_
- _Supporting data: "That could be a problem, because if you're in the middle of writing a note and you select a patient, it's gonna disrupt everything you're doing." [P3, R2]_

### Finding 6
Patient lookup is most commonly triggered during note drafting, lab order review, and verbal handoffs — typically mid-task.

- _Supporting data: "Generally when you are doing notes in CPRS, or you just look them up, or if for example you thought there was a lab order, and you go to look them up... When drafting and finalizing a note — this is where they would look up a patient." [P1, R2]_

### Finding 7
Persistent, always-visible patient identifiers are essential for safety reassurance when working across tools.

- _Supporting data: Participants indicated that patient name, SSN (partial), and date of birth should remain visible at all times — especially when navigating between CDS applications._
- _Supporting data: The R2 prototype, which displayed Sex, SSN, and DOB in the sidebar after a patient switch, was well-received as confirming correct patient selection._

---

## Additional Insights

- The "Select a Different Patient" button placement in the sidebar was intuitive and easily discoverable in both prototype rounds — no participants struggled to find it.
- Some participants preferred patient context to be set before launching a CDS application entirely, rather than enabling switching from within it. This represents a divergent mental model worth monitoring in future rounds.
- Participants referenced managing up to 7 concurrent windows in their current workflows, underscoring the importance of reducing — not adding — cognitive load.
- Naming conventions should mirror CPRS language to reduce friction: "Select New Patient" (button), "Patient Selection" (modal title), and "OK" to confirm.

---

## Recommendations

1. **Support the first initial + last four SSN as the default search format**
   - _Supporting evidence: Universally cited as the most ingrained method from VistA/CPRS use. [P2, R2; R1 Insights]_

2. **Implement a flexible, type-ahead "smart search" with partial name matching and format tolerance**
   - _Supporting evidence: Participants expect search to handle varied inputs without failing. [P3, R2; R2 Search Expectations]_

3. **Include a confirmation step before finalizing any patient context change**
   - _Supporting evidence: Explicitly requested by multiple participants in R1 and implied by data-loss concerns raised in R2. [R1 Insights; P3, R2]_

4. **Ensure patient context changes propagate automatically and immediately across all open CDS applications**
   - _Supporting evidence: Clinicians expected synchronization as a baseline behavior. [R1 Insights; R2 Prototype Overview]_

5. **Maintain persistent patient identifiers (name, partial SSN, DOB) visible at all times in the sidebar**
   - _Supporting evidence: Participants relied on these details to verify patient identity throughout multi-window workflows. [R2 Testing Overview]_

6. **Align UI language with CPRS naming conventions**
   - _Supporting evidence: "The main sort of place where you could find some extra joy is if we make the patient search as flexible as possible." [P3, R1]_
   - Suggested labels: "Select New Patient" (button), "Patient Selection" (modal title), "OK" to confirm

7. **Clearly communicate the scope of impact when patient context changes**
   - _Supporting evidence: Lack of clarity about what a context switch would affect was a key source of hesitation. [R2 Concerns & Risks]_

---

## Product User and Business Outcomes

### Desired User Outcome
This research supports our desired user outcome by identifying that clinicians need a fast, safe, and familiar way to switch patient context without losing work or risking wrong-patient data entry. Findings confirm that search design mirroring existing VistA/CPRS conventions — combined with clear confirmation steps and persistent identifiers — will enable clinicians to trust and adopt the feature.

### Desired Business Outcome
This research supports our desired business outcome by grounding patient lookup design in real clinical workflows, reducing the risk of building a feature that disrupts rather than supports care delivery. Implementing findings-driven safeguards positions the CDS Console as a reliable, safety-conscious platform for VA clinicians.

---

## Key Performance Indicators

### Clinician efficiency in patient lookup
This research supports measurement of this KPI by identifying the search formats and interaction patterns clinicians already use, enabling design that minimizes lookup time and learning curve.

### Reduction of patient safety errors related to wrong-patient context
This research supports measurement of this KPI by surfacing the specific risk factors — multiple windows, unclear context scope, lack of confirmation — that contribute to wrong-patient errors, informing targeted safeguards.

---

## Next Steps

- Incorporate type-ahead search component from the Clinical Design System into the patient lookup modal
- Refine modal messaging and placeholder text to reflect supported search formats (first initial + last four SSN as primary)
- Design and test a confirmation step before patient context change is committed
- Conduct technical analysis to determine feasibility of cross-application patient synchronization
- Revisit open questions [#685] regarding search input behavior and edge case handling

---

## Further research needed

- How the system should behave when a clinician attempts to switch patient context while unsaved work (e.g., an open note) is in progress
- Clinician expectations for what data should persist vs. reset after a patient switch within individual CDS tools
- Testing with clinicians who were skeptical of the feature to understand what safeguards would increase their confidence
- Participants using assistive technology were not represented in these rounds and should be included in future testing

---

## Appendix

### Research documents
- [Product Outline](link here)
- [Research plan](link here)
- [Conversation guide](link here)
- [Notes document](link here)

### Tools used for Synthesis
- Mural
- Affinity Mapping

### Pages and applications used
- R1 Static Figma Prototype — Patient Lookup Modal (sidebar, search, patient select flow)
- R2 Static Figma Prototype — Full context-switching flow within STORM/CDS Console

### Other supporting documents created
- R1 Sidebar User Testing Insights deck
- R2 Sidebar User Testing Insights deck

### Secondary research
- VistA/CPRS patient search conventions and syntax patterns
- SME interviews with VA clinicians

---

### Research participants

#### Recruitment criteria
VA clinicians actively using the CDS Console or CPRS in their daily workflow. Participants spanned multiple sessions across two research rounds (R1: December 2024; R2: February–March 2025). Participant IDs P1–P5 are referenced throughout findings.

#### Demographics

We talked to **5+ participants.**

Primary role:
  * Clinical dietician: unknown
  * MSA: unknown
  * Nurse Practitioner: unknown
  * Nursing (RN, LPN): unknown
  * Pharmacist: unknown
  * Physician: unknown
  * Physician Assistant: unknown
  * Resident, Intern, or Fellow: unknown
  * Other: unknown

Specialty:
  * Cardiology: unknown
  * Dermatology: unknown
  * Emergency Medicine: unknown
  * Endocrine: unknown
  * Hematology: unknown
  * Hepatology/Gastroenterology: unknown
  * Infectious Disease: unknown
  * Informatics: unknown
  * Mental Health: unknown
  * Nephrology: unknown
  * Neurology: unknown
  * Oncology: unknown
  * Pain Management: unknown
  * Palliative Medicine: unknown
  * Pharmacy: unknown
  * Primary Care: unknown
  * Pulmonology: unknown
  * Surgery: unknown
  * Other: unknown

Care setting:
  * Outpatient: unknown
  * Inpatient: unknown
  * Emergency Department: unknown
  * Other: unknown

EHR:
 * CPRS: X
 * Oracle: unknown

Devices used during study:
* Desktop: X
* Tablet: 0
* Smart phone: 0
* Assistive Technology: 0

Geographic location:
* Urban: unknown
* Rural: unknown
* Unknown: X

Disability and Assistive Technology (AT):
* Cognitive: unknown
* AT beginner: unknown
* AT advanced user: unknown
* Desktop screen reader: unknown
* Mobile screen reader: unknown
* Magnification/Zoom: unknown
* Speech Input Technology like Siri/Dragon Naturally Speaking: unknown
* Hearing aids: unknown
* Sighted keyboard: unknown
* Captions: unknown
