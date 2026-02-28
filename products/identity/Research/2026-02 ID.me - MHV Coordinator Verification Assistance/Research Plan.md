---
# Research Plan Metadata
title: "Research Plan: MHV Coordinator Interviews on ID.me Verification Support Challenges (YYYY-MM-DD)"
date: 2026-02-25
last_updated: 2026-02-25
team: "[Team Name]"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "MHV coordinators support Veterans who need help verifying identity with ID.me to access VA online services. Coordinators report recurring friction points (e.g., identity proofing failures, document requirements, device constraints, and process confusion). We need to understand where coordinators get stuck, what patterns they see, and what support/tools would reduce time-to-resolution and Veteran frustration."
  product_location: "Veterans attempting to access authenticated services (e.g., VA.gov and related authenticated experiences) that require ID.me sign-in and identity verification."
  user_familiarity: "This is an established sign-in/identity verification process; this study focuses on coordinator support workflows and pain points."
  product_brief_url: "[URL]"

# Research Design
methodology: "Semi-structured interviews (staff/operational research)"
research_format:
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true # Options: true, false

# Research Goals & Questions
research_goals:
  - goal_1: "Identify the most common ID.me verification challenges coordinators encounter when assisting Veterans, and understand their frequency and impact."
  - goal_2: "Map coordinator support workflows (intake → troubleshooting → preparation → escalation → resolution) and pinpoint breakdowns, workarounds, and constraints."
  - goal_3: "Generate actionable recommendations to improve guidance, tooling, and processes (including pre-appointment prep) to reduce verification failures and support burden."

research_questions:
  - "What are the most common scenarios that lead Veterans to seek help verifying with ID.me (and what signals show up first)?"
  - "Where do coordinators observe Veterans getting stuck (steps, requirements, terminology, device/accessibility barriers, etc.)?"
  - "What workarounds do coordinators use today, and what do they wish they could do but cannot (permissions, systems, policy)?"
  - "What escalation paths exist (to ID.me, VA help desks, internal channels), and where do escalations break down or slow down?"
  - "What improvements would MHV coordinators like to see from ID.me in order better support Veterans during the verification process?"
  - "What content, tools, or process changes would most reduce time-to-resolution and improve Veteran experience?"

  # Questions for consideration (add/keep as needed)
  - "How often are coordinators supporting Veterans who are verifying with ID.me?"
  - "How often are coordinators encountering situations where Veterans are unable to verify with ID.me (daily/weekly/other frequency)?"
  - "How many Veterans already have an existing ID.me account vs verifying for the first time?"
  - "When a Veteran 'already has an ID.me account,' is the issue typically (a) account exists but not identity-verified, (b) identity-verified but cannot access/sign in, or (c) account recovery (email/phone/device) problems?"
  - "For scheduling appointments, how often are coordinators providing Veterans with required information in advance (e.g., a VA verification checklist) and does it change outcomes?"

hypotheses:
  - "A small number of recurring verification issues (document capture quality, mismatch of identity data, account recovery, and device/accessibility constraints) account for the majority of coordinator support time."
  - "Coordinators rely on informal knowledge and peer workarounds because official guidance is fragmented, hard to find, or not aligned to real-world scenarios."
  - "Escalation and handoff processes are inconsistent, increasing Veteran drop-off and repeat contacts."

expected_outcomes: "A prioritized set of coordinator-identified pain points and root causes, a coordinator support journey map, and recommendations/backlog items to improve pre-appointment preparation, in-the-moment support guidance, and escalation pathways."

# Strategic Alignment
octo_priorities:
  - objective: "Objective 3: Relentlessly improve the user experience."
    key_results:
      - "[Specific KR if applicable]"
  - objective: "Objective 2: Operate products with high reliability and security."
    key_results:
      - "[Specific KR if applicable]"

veteran_journey_phases:
  - "Taking Care of Myself"
  - "Starting Up"

# Research Repository Tracking
related_research:
  previous_studies:
    - "[Link to related past research]"

tags:
  - "identity"
  - "sign-in"
  - "idme"
  - "staff-research"
  - "semi-structured-interviews"
  - "mhv"
---

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your research plan below.**

# Research Plan: MHV Coordinator Interviews on ID.me Verification Support Challenges (YYYY-MM-DD)

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>

`What problem is your product trying to solve?`

Coordinators are regularly asked to help Veterans through ID.me identity verification so they can access VA online services. Verification failures can block access, create repeated support contacts, and increase frustration for Veterans and staff. This study will document the most common failure modes, coordinator workflows, and opportunities to reduce effort and improve outcomes—especially through better preparation and clearer guidance.

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

This work sits at the boundary between unauthenticated and authenticated experiences: sign-in, identity proofing/verification, and account recovery steps that gate access to authenticated services.

`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

The process is established, but many Veterans encounter it for the first time when trying to sign in or use a feature. Familiarity varies widely, and coordinators often see Veterans in time-sensitive or high-stress contexts.

`Product Brief`

[Link to product brief](url goes here).

</details>

### Related Research 🔍
<details><summary>What research has been done on this product or similar products in the past?</summary>

**Previous Studies:**
- [Link to Study 1 - Brief description, Date](url goes here)
- [Link to Study 2 - Brief description, Date](url goes here)

**Key Takeaways from Previous Research:**
- `[Major finding or insight that informs this study]`
- `[Major finding or insight that informs this study]`

</details>

### OCTO-DE Priorities
<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed.</summary>

This research supports improving the end-to-end experience and reducing friction for authenticated access while maintaining required security.

</details>

### Veteran Journey
<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>

Likely touchpoints include:
- Taking Care of Myself (accessing health tools)
- Starting Up (establishing online access and credentials)

</details>

## Research Goals 🥅
`What are you trying to learn from this research?`

### Goals

`1.` **Identify the most common ID.me verification support challenges coordinators encounter, including frequency and impact.**

`2.` **Understand coordinator workflows, tools, constraints, and escalation paths for verification support (and where they break down).**

`3.` **Assess preparation practices (e.g., sharing a VA verification checklist in advance) and how those practices affect outcomes.**

### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

We will produce:
- A prioritized list of coordinator pain points and common failure modes (with frequency estimates where possible)
- A coordinator support workflow map and escalation map
- Recommendations/backlog items for:
  - Veteran-facing instructions and error guidance
  - Clearer escalation pathways and decisioning support

---

### Research questions

**`1.` How often are coordinators supporting Veterans who are verifying with ID.me?**

**`2.` How often are coordinators encountering situations where Veterans are unable to verify with ID.me (daily/weekly/other frequency)?**

**`3.` How many Veterans already have an existing ID.me account vs verifying for the first time?**
- *(Follow-up for clarity)* When a Veteran “already has an account,” is the blocker usually that they still need identity verification, or is it account access/recovery (email/phone/device) to complete verification/sign-in?

**`4.` What are the most common points of failure/confusion in the ID.me verification journey, as coordinators observe it (documents, selfies, data mismatches, device/accessibility barriers, terminology)?**

**`5.` For scheduling appointments, how often are coordinators providing Veterans with required information in advance (e.g., a VA verification checklist), and what effect does that have on outcomes (success rate, time-to-resolution, repeat contacts)?**

### Hypotheses
- Providing required information in advance (e.g., checklist) reduces verification failures and shortens coordinator support time.
- A few recurring issues (doc capture, mismatched identity attributes, account recovery barriers, device/accessibility constraints) drive most support burden.
- Escalation paths are inconsistent across contexts, increasing unresolved cases and repeat contacts.

---

## Methodology 🛠️
We will conduct **moderated semi-structured interviews** with coordinators to understand real-world support scenarios, constraints, and opportunities for improvement.

**[Enter methodology here]**
- Format: 45–60 minute interviews
- Collection: notes (and recordings where approved)
- Synthesis: affinity mapping to identify themes, frequency ranges, and opportunities; produce workflow + escalation maps

### Location
- [x] **Remote**
- [ ] **In-person**

## Research materials 📔
> [!NOTE]
> Your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.

- [Link to conversation guide](url goes here)
- [Link to any existing VA verification checklist referenced in this plan](url goes here)
- [Link to any internal escalation documentation (if applicable)](url goes here)

## Team Roles  🕵️👩‍💻👩‍🔬
> [!NOTE]
> Please do not include email addresses in this section.

- `Moderator:` **Charlye Tran, Clayton Zook**
- `Research guide writing and task development:` **Charlye Tran**
- `Project point of contact:` **Charlye Tran**
- `Accessibility specialist:` **[Enter full name]**
- `Note-takers:` **Clayton Zook**
- `Observers:`
  - **[Enter full name]**
  - **[Enter full name]**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`