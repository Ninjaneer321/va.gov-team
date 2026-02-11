# Identity Github documentation audit

## Overview
To make our content easier to find and understand, we're revising the information architecture for our documentation in Github. The first step is to do a type of "spring cleaning" to tidy up content that's deprecated, duplicated, or out of order in the hierarchy of our folder structure.

### Focus of this content audit
This audit was scoped to our top-level identity root folder and our products folder.
* [Identity](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity)
* [Identity > Products](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products)

---

## Quick cleanup recommendations
Please provide feedback if any of the following recommendations should not be actioned at this time.
**Note:** A fast-follow task will be to review updated pages to fix any broken links.

### 1. Rename folders
**Identity root folder**

| Identity folder | Purpose | Recommendations |
| :--- | :--- | :--- |
| Archive | Documenting archive projects (with context) | Rename folder: `_archive` so it's listed last instead of first |
| login | Product outline for sign in on VA.gov | Rename this to "sign-in" or "sign-in experience" for consistency with VADS |

### 2. Nest top-level folders into existing folders
**Identity root folder**

| Identity folder | Purpose | Recommendations |
| :--- | :--- | :--- |
| Devops | Not sure | Update and add a readme, add to internal-team folder |
| MHV account creation API | Documents product requirements and launch plan | Move into products folder |
| Spikes & Decisions | Ad hoc documentation of spikes and decision rationale | Standardize structure, consider nesting in internal-team folder |
| requirements | Security policies, feature requirements index | Add to internal-team folder, consider moving anything security-related to the sensitive repo |
| templates | Checkpoints for a product release | Add to internal-team folder |

**Products folder**

| Products folder | Purpose | Recommendations |
| :--- | :--- | :--- |
| DSLogon Deprecation | Roadmap of DSL deprecation tasks | Move to secure sign-in transition folder |
| domo dashboards | Guide for team members to access and run reports in Domo | Add to internal-team folder |

### 3. Archive inactive content
* Move inactive projects into the archive folder (now).
* Clean up and restructure the `_archive` folder (next).
* Consider renaming "Archive" to "Inactive" or something else to convey the intended purpose more clearly.

**Identity root folder**

| Identity folder | Purpose | Recommendations | Inactive vs delete |
|-----------------|---------|-----------------|-------------------|
| External Auth Data Reporting | Project planning | <br>• No changes at this time<br>• Recommend updating the readme content in the next phase | Not actively bring worked on but still referenced |
| External Auth Status Page | Project planning | Move to archive folder | Inactive |
| Maintenance & Downtime Banners | Product outline | Move to archive (covered in frontend documentation)<br>Delete | Delete (duplicate content) |
| Support Process | Project work developing Slack support process and Slackbot | Move to products folder | Inactive (there are individual important pages within this folder) |
| user-action-logs | Product requirements | Add to products folder | Inactive |
| MHV Credential Deprecation | N/A [empty folder] | Remove or archive | Delete |
| gh templates | N/A [empty folder] | Move to archive folder | Delete |
| identity-team-charter.md | Team names and summary of what we do | Consolidate with "internal team" folder (move content into a README for internal-identity) | Inactive |

**Products folder**

| Products folder (Topic) | Purpose | Recommendations | Inactive vs delete |
|-------------------------|---------|-----------------|-------------------|
| Fraud Notifications | Product outline | Move to archive folder | Inactive |
| Login SLO | Project planning for SLO initiative | Move to archive folder | Inactive |
| Product Briefs | Documents past product initiatives | Consider adopting this structure for the archive folder and moving the content there | Inactive |
| Release Report | Documents past sprint reports | Consider if we want to resume this practice of documenting past sprint reports. If not we could move this to the archive folder | Inactive |
| Request & Support Process | Documents team initiative for support process development | Move to archive folder | Inactive |
| 2024 Fraud Prevention, Detection & Remediation Projects.md | Project planning | Move to archive folder | Inactive |
| 2024 Operational Support Projects.md | Project planning | Move to archive folder | Inactive |
| 2024 Remove Unnecessary Dependencies Projects.md | Project planning | Move to archive folder, consider documenting these somewhere else too | Delete or update if any projects are still on our roadmap |
| 3 Types of Metrics Products.md | Project planning | Move to archive folder | Inactive |


---

## Audience alignment
To organize the target audience of the content, there are 3 high-level audience groups.

### 1. Veterans Experience Services (VES) teams
Teams supporting Veterans who sign into VA online services. We build platform authentication services for these teams so they can focus on their individual respective applications and services.
* **VFS teams**: Product teams building applications and services on VA.gov platform.
* **VA Platform**: Content + IA, Collaboration Cycle, VA Platform, VA Design System, Platform Security.
* **OCTO DSD product leadership**: VA product leadership within DSD (VA POS, CTO).
* **Identity team (internal)**: Internal documentation for our team covering products, integrations, and services.
* **VA teams outside OCTO DSD**: My HealtheVet coordinators, Call Center Support staff, OCC/HRC (MHV and call center), IAM.

### 2. Integration partners
Identity integration partners for our platform authentication components. We're responsible for managing these relationships and the health of these integrations.

| Team | Integrations | Contacts | Integration users |
| :--- | :--- | :--- | :--- |
| Identity Access Management (IAM) | SSOe, Master Person Index | #identity, #identity-support | VA.gov users, VA staff, VA application users outside VA.gov |
| ICAM | Okta, VA Services on VA.gov (AccessVA) | #identity | VA.gov users, VA staff, VA application users outside VA.gov |
| Mobile Application Team (MAP) | System authentication with vets-api | | |
| Office of Connected Care (OCC) | MHV on VA.gov, Oracle Health platform | #identity | VA.gov users, VA staff, VA application users outside VA.gov |
| ID.me | ID.me | #idme-public | VA.gov users |
| Login.gov | Login.gov | #logingov-public | VA.gov users |

### 3. Users signing in
End users consuming VA.gov identity services. We work in partnership with VES teams to ensure these users have a consistent, secure, and reliable sign in experience.
* **Veterans and beneficiaries**: Users of Veteran-facing services platform applications.
* **VA employees**: Users signing into VA.gov platform services, signing in with test users, or using production test accounts.

---

## Appendix
* [Previous IA research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2025-07%20team%20documentation%20IA/identity-team-documentation-index.pdf)
