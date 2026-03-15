# 10-10d Enhanced Application Flow – Product Brief

> **Last updated:** [TBD]
> **Product POC:** [TBD]
> **GitHub Label(s):** [TBD]
> **Slack channel:** #1010-health-apps

---

## Product Vision

CHAMPVA applicants — including sponsors, beneficiaries, and their representatives — can electronically submit missing or supplemental documentation for a previously submitted 10-10d application, ensuring documents are received reliably and applications are processed without unnecessary delay.

---

## Problem Statement

CHAMPVA applicants struggle to provide missing documentation required to complete their 10-10d application because the current process relies entirely on paper mail, which leads to lost or delayed documents, slower application processing, and applicants receiving little to no feedback about what is missing or why their application is stalled.

---

## Metrics

| Category | KPI | Baseline (if available) | Target | Description / Purpose |
|---|---|---|---|---|
| **Effectiveness** | **Supplemental doc submissions received electronically vs. by mail** | [TBD – current mail volume from Contact Center] | 50% of sendback responses submitted electronically within 12 months of launch | Indicates that applicants are successfully using the digital channel to respond to CCLs and resolve missing documentation. |
| **Effectiveness** | **Application processing time for submissions with missing docs** | [TBD – average days from CCL issuance to processing completion] | 20% reduction in average days to process after a sendback | A reduction in processing time indicates that electronic document submission is removing mail/scan delays from the intake pipeline. |
| **Usability** | **Form completion rate for the Enhanced Application Flow** | NEW | ≥ 75% of users who start the flow complete and submit it | High completion rates indicate that the flow is intuitive and users are able to accomplish their goal without abandoning. |
| Performance | API/submission error rate | NEW | < 1% of submissions result in an error | Ensures the flow is reliable and documents are being received by the backend without failures. |
| Usability | Customer satisfaction score (CSAT) | NEW | Baseline to be established at launch; target improvement by Q3 | Measures applicant confidence in the digital experience vs. paper alternatives. |

> ⚠️ **NEEDS INPUT:** Baseline data for mail volume and current processing time should be confirmed with the Contact Center and CHAMPVA program office before launch. Datadog monitoring links to be added once the feature is in staging.

---

## Usage and Scale

- CHAMPVA serves approximately [TBD – confirm with CHAMPVA program office] beneficiaries, with [TBD] new applications submitted annually.
- The Contact Center currently handles a significant volume of inbound inquiries related to missing documentation and application status — this flow is expected to reduce that contact volume over time.
- Three distinct user groups will access this flow: Veteran sponsors, CHAMPVA applicants/beneficiaries, and third-party representatives (e.g., parents of minor beneficiaries).

> ⚠️ **NEEDS INPUT:** Confirm annual 10-10d submission volume and average CCL issuance rate with CHAMPVA program office or Contact Center.

---

## Key Product Features

- **Branching entry point on the existing 10-10d form:** The Signer section will move to the end of the 10-10d, enabling a pre-form routing question that directs users into the standard application or the Enhanced Application Flow based on their situation.
- **Minimal-input supplemental doc submission:** The Enhanced Application Flow collects basic information about the Sponsor and a single Applicant, with optional screens to capture an Application ID (for users who received a CCL) or an A-card ID (for already-enrolled beneficiaries), enabling CHAMPVA to accurately match submissions to a pending application or existing beneficiary file.
- **Document upload capability:** Applicants can upload missing supporting documents (e.g., Medicare cards, school certifications, marriage certificates, insurance cards) directly through the form rather than mailing physical copies.
- **OHI routing logic:** Users who need to submit a full OHI are routed appropriately — either through the Enhanced Application Flow (for missing OHI supporting docs) or to the standalone 10-7959c (for beneficiaries with updated or changed other health insurance).
- **Multiple submission support:** The confirmation page will leverage the multiple forms pattern to allow users who need to submit for more than one Sponsor/applicant pair to quickly re-enter the flow.

---

## Technical Strategy

The Enhanced Application Flow will be a new, lightweight digital form (referenced as **10-10Dx** in discovery) built on VA.gov's existing form infrastructure. It will be modeled on the 10-7959a Enhanced Claims Flow, adapting that pattern for the 10-10d application context.

**Key integrations and dependencies:**

- **10-10d form (existing):** The Signer section reordering must be completed as a prerequisite, as it enables the routing logic for the enhanced flow entry point. *(Link to prerequisite ticket: [TBD])*
- **CHAMPVA backend / document processing system:** The flow must be able to associate uploaded documents with the correct pending application or beneficiary file using one or more identifiers (basic Sponsor/applicant info, Application ID, or A-card ID). This is the highest-risk technical dependency — see open questions below.
- **VA.gov file upload infrastructure:** Reuses existing upload components; compatibility with CHAMPVA's backend document intake system must be confirmed.
- **VFMP Status Tool Integration:** Findings from this discovery, particularly around OHI document handling, are relevant to MVP Phase II of the Status Tool Integration initiative and should be shared with that team.

**Architecture:** Custom development on VA.gov platform. No SaaS/COTS system involved.

**Major open questions requiring partner input:**
- Can basic Sponsor/applicant information alone reliably associate uploaded documents with a pending application (Use Case 1 — no CCL)?
- Is the Application ID required for accurate matching, or is basic info sufficient (Use Case 2)?
- Can an uploaded health insurance card submitted through the Enhanced Application Flow be associated with all relevant applicants on a pending application?
- Can the Enhanced Application Flow serve as a substitute for a wet-signature OHI form (Use Case: missing entire OHI)?
- How do we communicate to users that they should navigate to the standalone 10-7959c for updated OHI, rather than submit through the Enhanced Application Flow?

> ⚠️ **NEEDS INPUT:** Technical assessment with engineers is needed to validate backend document-matching capabilities before finalizing the flow design.

---

## OKR Alignment

### Health Applications Program OKRs

**Objective 1: All form experiences that are digitized help the Veteran or family members get their benefits faster.**

- **KR1 — Removing the mailroom and scanners from the enrollment process reduces overall processing time.** The Enhanced Application Flow directly removes paper mail from the document intake process for 10-10d sendbacks. When applicants submit missing documentation electronically, CHAMPVA receives it without a mail delay, physical scan, or risk of loss — directly shortening the time from CCL issuance to application processing completion.

- **KR2 — Faster intake helps applicants and VA identify opportunities to address application problems sooner.** By providing applicants with a structured digital path for responding to a CCL, the flow creates a faster feedback loop between the applicant and CHAMPVA. CHAMPVA receives the documents sooner and can act on them or identify further issues earlier in the process.

**Objective 2: The digital forms experience allows for Veterans and their family members to find and access benefits faster than manual methods.**

- **KR1 — Applicants prefer the digital experience over manually mailing the form.** This flow directly offers a digital alternative to mailing a physical response to a CCL. Adoption rates (electronic vs. mail submissions) will be tracked as a primary KPI to validate this preference.

- **KR3 — Giving applicants feedback in the digital application process reduces resubmits resulting from unknown status.** The optional Application ID and A-card ID screens, combined with the structured upload flow, give applicants clarity about what they are submitting and why — reducing the likelihood of applicants submitting incomplete or misdirected documentation.

**Objective 3: Our solution will work to ensure that an accurate status of the transaction is given to the Veteran or family member.**

- **KR1 — Errors due to hand-written applications decrease.** Replacing paper-based document submissions with a structured digital form reduces transcription errors, illegible handwriting, and misdirected mail — all of which currently contribute to processing delays and application errors.

---

## Risks and Assumptions

### Value Risks (will people use it?)
- Applicants may not know the enhanced digital flow exists, particularly those who have already received a paper CCL in the mail. Clear post-submission messaging and CCL content updates will be critical for adoption.
- Some users (particularly older beneficiaries or those with limited digital access) may still prefer or need to use paper processes. The digital channel should supplement, not replace, paper intake.
- **Validation approach:** Monitor adoption rate (electronic vs. mail submissions) in the months following launch; compare Contact Center inquiry volume before and after.

### Usability Risks (can people figure out how to use it?)
- The branching logic between Use Cases 1, 2, and 3 must be intuitive — users should not need to understand internal CHAMPVA processes to route themselves correctly.
- The distinction between the Enhanced Application Flow (for missing docs) and the standalone 10-7959c (for updated OHI) may be confusing to users.
- **Validation approach:** Usability testing of the flow with CHAMPVA applicants before launch; review Contact Center feedback post-launch for routing confusion.

### Technical Feasibility Risks (can we build it with available tech/data?)
- The highest risk is backend document matching: it is currently unknown whether basic Sponsor/applicant information alone is sufficient to reliably associate uploaded documents with the correct pending application or beneficiary file.
- Integration with CHAMPVA's document processing system may surface constraints not yet identified.
- **Validation approach:** Technical discovery with CHAMPVA backend partners before design is finalized; prototype and test document-matching logic in staging.

### Organizational Viability Risks
- CHAMPVA program staff must be prepared for an increase in electronically submitted documentation and have processes in place to receive and act on it.
- Content changes to the CCL itself (directing applicants to the digital flow) would require coordination with the CHAMPVA program office.

---

## Scope

### In Scope
- New **10-10Dx Enhanced Application Flow** on VA.gov for submitting missing/supplemental documentation for a previously submitted 10-10d
- Reordering of the Signer section in the existing 10-10d form as a prerequisite
- Branching entry point logic on the 10-10d form routing users into the standard or enhanced flow
- Optional screens for Application ID (CCL recipients) and A-card ID (enrolled beneficiaries)
- Document upload capability for common missing doc types (Medicare cards, school certs, marriage certs, insurance cards, notice of disallowance)
- Confirmation page with multiple forms pattern for users needing to submit for additional Sponsor/applicant pairs
- OHI routing: directing users with a full missing OHI or updated OHI to the appropriate form/flow

### Out of Scope
- The standalone 10-7959c OHI form (already exists; this initiative will reference but not modify it)
- Multi-applicant list-and-loop within the Enhanced Application Flow (limited to a single Sponsor/applicant pair per submission)
- Authenticated application status or document tracking (this is related to the VFMP Status Tool Integration, which is a separate initiative)
- Changes to the CHAMPVA backend document processing system

---

## Dependencies

| Dependency | Owner | Status |
|---|---|---|
| Signer section reorder on 10-10d form | Health Apps – Design/Engineering | In progress – [link to ticket TBD] |
| CHAMPVA backend: doc-to-application matching capability | CHAMPVA program office / backend engineers | ⚠️ Open question – needs technical discovery |
| VA.gov file upload infrastructure compatibility | Platform / Health Apps Engineering | [TBD] |
| CCL content update (directing applicants to digital flow) | CHAMPVA program office | ⚠️ Needs coordination |
| VFMP Status Tool Integration team: OHI findings handoff | VFMP team | Flagged as next step in discovery |

---

## Launch Planning

- **Target Launch Date:** [TBD]
- **Actual Launch Date:** [TBD]
- **Release Plan:** [TBD – link to release plan]

### Incident Response
- Feature will be deployed behind a feature toggle, enabling rollback without a code deploy if issues are identified post-launch.
- Datadog monitoring will be configured for submission errors, API latency, and upload failures prior to launch.
- [Monitoring dashboard links](https://vagov.ddog-gov.com/dashboard/c2u-hkx-sdc/ivc-champ-va-10-10d-ohi-merged-form-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1773592982059&to_ts=1773596582059&live=true)
- **Main POCs:** 
  - PM: Andrea Merrill
  - Engineering Leads: Kyle Brost (BE) and Matt Long (FE)
  - Design Lead: Renata Keck
- Triage SLA: Critical submission errors to be triaged within 1 business day; feature toggle rollback available as immediate mitigation.

---

## Communications

- **Team:** Health Applications
- **GitHub Label(s):** ivc-forms, health-applications, 10-10d
- **Slack channel:** #1010-health-apps
- **Product POC:** Andrea Merrill

### Stakeholders

| Office / Department | Contact |
|---|---|
| CHAMPVA Program Office | Angela Pinon |
| OCTO-DE | Premal Shah |
| Contact Center | Brian Guenther |
| VFMP Status Tool Integration Team | Mike Mooney |

---

## Next Steps

- [ ] Design flow and mocks for updated Signer section reorder
- [ ] Finalize Enhanced Application Flow design and create mocks
- [ ] Walkthrough mocks with CHAMPVA partners; resolve open questions around document-matching and form/flow routing
- [ ] Technical discovery: confirm backend capability to associate uploaded docs to pending applications and existing beneficiary files
- [ ] Share OHI findings with VFMP Status Tool Integration team (relevant to MVP Phase II)
- [ ] Confirm baseline metrics with CHAMPVA program office and Contact Center
- [ ] Update release plan and Datadog monitoring links once feature is in staging
