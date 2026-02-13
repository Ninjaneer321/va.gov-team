---
title: "SEP Audit Findings - Current State Analysis"
product: "Accredited Representative Portal (ARP)"
team: "Accredited Representative Facing Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2024-01"
researchers:
  - "Accredited Representative Facing Team"
research_goals:
  - "Audit Stakeholder Enterprise Portal (SEP) public-facing website and authenticated portal"
  - "Document SEP audience, authentication methods, and scope of functionality"
  - "Identify tasks available in SEP portal for accredited representatives"
  - "Understand current state before designing replacement tool"
methodology:
  - "Content audit of public-facing SEP website"
  - "Screen-by-screen walkthrough of authenticated SEP portal"
  - "SEP demo analysis and documentation"
  - "Expert review and heuristic evaluation"
devices_used:
    desktop: "Yes"
    tablet: "Not evaluated"
    smartphone: "Not evaluated"
    assistive_technology: "Not evaluated"
participants_total: 0
participant_type: "Secondary research - no direct participants; audit of existing system"
demographics:
  note: "This is a secondary research audit; no participant demographics apply"
key_findings:
  - "SEP is intended for three user types: VSO representatives, attorneys, and claims agents (three additional portals were never built/launched)"
  - "SEP users can authenticate via PIV card or ID.me; new PIV users must input OGC accreditation number"
  - "Five task categories available: managing representation requests (accept/decline), finding a Veteran, supporting claims, reviewing Intents to File, and updating dependents"
  - "Three unbuilt features were planned but never launched: SEP Education Service for schools, PC@HAC for healthcare providers, and VR&E for employers"
recommendations:
  - "Build ARP to replace SEP with same core functionality: representation request management, Veteran search, claims support, ITF review, and dependent updates"
  - "Maintain PIV card and ID.me authentication methods for continuity"
  - "Focus on three core user types: VSO representatives, attorneys, and claims agents"
  - "Consider whether unbuilt SEP features (Education, Healthcare, Employment) should be incorporated into future ARP roadmap"
kpi_alignment:
  - "Document baseline SEP functionality for feature parity planning"
  - "Inform ARP MVP scope based on SEP capabilities"
outcomes:
  user: "Accredited representatives will transition from SEP to ARP with equivalent or improved functionality"
  business: "Successful sunset of legacy SEP system and migration to modern ARP platform built on VA.gov"
opportunity_areas:
  - "Managing representation requests (accept/decline POA)"
  - "Finding a Veteran in system"
  - "Supporting claims submission and tracking"
  - "Reviewing Intents to File"
  - "Updating dependent information"
  - "Improved authentication experience"
  - "Modern user interface and accessibility compliance"
further_research_needed:
  - "User testing with SEP users to understand current workflows"
  - "Pain point analysis of SEP from representative perspective"
  - "Feature prioritization for ARP MVP based on SEP usage data"
underserved_groups_missing:
  - "N/A - This is a system audit, not a user research study"
secondary_research:
  - "SEP Content Audit - Public Site (PDF on SharePoint)"
  - "Screen-by-screen SEP walkthrough (PDF on SharePoint)"
  - "SEP Demos (video recordings on SharePoint)"
  - "Accredited Representative Facing team SharePoint folder"
synthesis_tools_used:
  - "Content audit spreadsheet"
  - "Screenshot documentation"
  - "SharePoint document repository"
---

# SEP Audit Findings

## Audience

The public-facing website indicates it’s intended for **VSO representatives, attorneys, and claim agents**. But there are three exceptions, which appear to be portals or features within SEP that were never built/launched:

* **SEP Education Service** for schools and training institutions. 
* **Purchased Care @ Health Administration Center (PC@HAC)** for healthcare providers.
* **Veteran Readiness and Employment (VR&E)** for employers and people supporting Veteran employment.

The SEP portal in its current state is intended for VSO representatives, attorneys, and claims agents only.

## Authentication

Users can sign in using their PIV card or ID.me. 

* If they don’t have an account yet, they can **Register for a Sign-In Partner** which directs them to create an ID.me account.
* If they sign in with their PIV as a new user, they are prompted to input their OGC accreditation number. 

## Scope

Categories of tasks available in the SEP portal:

* Managing representation requests (accept/decline)
* Finding a Veteran
* Supporting claims
* Reviewing Intents to File
* Updating dependents

## Relevant links 
(All on Sharepoint; file path Accredited Representative Facing > POA 21-22 > 2024-01 Current State Analysis)
* [SEP Content Audit - Public Site.pdf](https://dvagov.sharepoint.com/:b:/s/vaabdvro/ERfdr7tOD4JKisreec0MeRUBH7a6kxPgklymz2ZQ37YzyQ?e=mBzwUY)
* [Screen-by-screen_SEP_walkthrough.pdf](https://dvagov.sharepoint.com/:b:/s/vaabdvro/EYvdNE8cjkBGoOz7AyaH8dYBvhgZ2CMCKyPahLqfAvv6TA?e=43ebXP)
* [SEP Demos](https://dvagov.sharepoint.com/:f:/s/vaabdvro/Eslf7hosMINOoZ5Ksf2s14MBDyccN5NMCmlA24TbFQUyhQ?e=oZL7zr)
