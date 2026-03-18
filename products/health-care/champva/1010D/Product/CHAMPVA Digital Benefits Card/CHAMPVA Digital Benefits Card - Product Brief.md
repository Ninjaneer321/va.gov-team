# CHAMPVA Digital Benefits Card – Product Brief

## Resources
- [Epic #136341](https://github.com/department-of-veterans-affairs/va.gov-team/issues/136341)
- Research Folder: [TBD]
- Figma: [TBD]
- Launch Plan: [TBD]

---

## Product Vision

CHAMPVA beneficiaries can access, view, and retrieve their benefits card information at any time through VA.gov — without waiting for mail delivery or contacting the program for a replacement.

---

## Problem Statement

CHAMPVA beneficiaries struggle to access their benefits card information in a timely way because cards are delivered exclusively by postal mail, which leads to delays in care access, repeated replacement requests, and significant operational burden on the CHAMPVA program.

> In October 2025 alone, CHAMPVA processed 8,536 replacement cards, 65,432 ID card packets, and 1,999 send-back letters — indicating both high beneficiary need and unsustainable reliance on mail-based fulfillment.

---

## Metrics

| Category | KPI | Baseline | Target | Description / Purpose |
|---|---|---|---|---|
| **Effectiveness** | **Monthly replacement card requests** | **8,536 (Oct 2025)** | **[TBD — % reduction]** | **A sustained reduction in replacement card volume indicates that digital access is meeting beneficiary needs and reducing mail dependency.** |
| **Effectiveness** | **Mailed ID card packet volume** | **65,432 (Oct 2025)** | **[TBD — % reduction]** | **Reduction in ID card packets indicates beneficiaries are accessing benefits card information digitally rather than waiting for physical delivery.** |
| **Usability** | **Beneficiary satisfaction (CSAT) with digital card experience** | **[TBD — establish baseline at launch]** | **[TBD]** | **CSAT score indicates whether the digital card experience is meeting beneficiary expectations for ease and clarity.** |
| Performance | Digital card feature availability / uptime | NEW | ≥ 99.8% | Meets VES reliability standards (OKR 2.2) and ensures beneficiaries can access card information consistently. |
| Effectiveness | Beneficiary inquiries / contacts related to card access | [TBD] | [TBD — % reduction] | Reduction in inbound contacts indicates the digital experience is resolving access issues without requiring program staff intervention. |

---

## Usage and Scale

- CHAMPVA serves **[TBD — total enrolled beneficiaries]**; the program issued 65,432 ID card packets and 8,536 replacement cards in October 2025 alone, suggesting significant recurring demand.
- ⚠️ NEEDS INPUT: Monthly unique visitors to CHAMPVA-related pages on VA.gov.
- ⚠️ NEEDS INPUT: Estimated proportion of beneficiaries with a Login.gov or ID.me account capable of accessing authenticated VA.gov features.

---

## Key Product Features

- **View benefits card information** — Authenticated beneficiaries can view their CHAMPVA benefits card details (member ID, group number, coverage information) on VA.gov without requesting a physical card.
- **Download or print benefits card** — Beneficiaries can download or print a digital version of their benefits card for use at point of care.
- **Request a replacement card** — Beneficiaries can submit a replacement card request digitally, reducing phone and mail-based reissuance.
- ⚠️ NEEDS INPUT: Confirm scope of features approved through policy and compliance review — view, download, and/or request may be phased.

---

## Technical Strategy

⚠️ NEEDS INPUT: Confirm the specific backend system(s) that store CHAMPVA benefits card and enrollment data (e.g., VES, DEERS, or a CHAMPVA-specific database), and identify the API integration path to surface that data on VA.gov.

**Approach:** Custom development on the VA.gov platform, following established authenticated experience patterns. This initiative is not a SaaS/COTS implementation.

**Known dependencies and integration points:**
- VA.gov platform authentication (Login.gov / ID.me) for identity verification
- CHAMPVA enrollment and eligibility data source — [TBD: confirm system name and API]
- VA.gov design system components for card display, download, and request flows
- VA.gov Platform team for collab cycle, security review, and ATO coordination

**Upcoming architectural considerations:**
- Policy and compliance approval may constrain which delivery model is technically feasible (view-only vs. downloadable vs. full self-service request)
- Phased delivery is planned: discovery and feasibility → design and validation → incremental feature delivery

---

## OKR Alignment

### Health Applications Program OKRs

**Objective 1: All form experiences that are digitized help Veterans and family members get their benefits faster.**
- Removing mail-based card delivery from the critical path shortens the time between enrollment and a beneficiary's ability to use CHAMPVA benefits at point of care.
- Digital access eliminates reissuance lag — currently a multi-day or multi-week delay — for beneficiaries who have lost or never received a card.

**Objective 2: The digital forms experience allows Veterans and family members to find and access benefits faster than manual methods.**
- Beneficiaries gain on-demand access to their card information through VA.gov rather than waiting for mail or calling the program — directly demonstrating a faster digital path over manual alternatives.
- Reducing preference for mailed cards improves applicant satisfaction and confidence in digital CHAMPVA services (KR2).

**Objective 3: Our solution will work to ensure that an accurate status of the transaction is given to the Veteran or family member.**
- Digital access provides beneficiaries with clear, current visibility into their card and enrollment status, reducing confusion caused by lost, misdelivered, or outdated physical cards.
- Error and rework volume associated with manual card fulfillment (e.g., send-back letters) decreases as digital delivery replaces unreliable mail processes.

### VES FY26 OKRs

**Objective 1: Optimize product delivery for Veteran impact**
- This brief documents a product vision, problem statement, and KPIs per OKR 1.1.
- ⚠️ NEEDS INPUT: Confirm this product is included in the published VES roadmap and mapped to documented beneficiary pain points (OKR 1.3).

**Objective 2: Operate products with high reliability and security**
- Monitoring instrumentation (latency, error rate, volume, saturation) will be built into the digital card feature at launch to meet OKR 2.1 golden signals requirements.
- Feature availability target is ≥ 99.8% incident-free time per OKR 2.2.

**Objective 3: Quantifiably improve the user experience**
- CSAT baseline will be established at launch; improvement will be tracked against that baseline through the OKR period (OKR 3.2 / 3.3).
- Beneficiary pain points related to card access and delivery delays are the documented unmet need this initiative addresses (OKR 3.1).

---

## Scope

### In Scope
- Digital access to CHAMPVA benefits card information via VA.gov (view, download, and/or request — subject to policy approval)
- Policy, technical, and UX discovery required to responsibly enable digital access
- Instrumentation to measure usage, satisfaction, and operational impact
- Incident response and monitoring aligned to Health Applications and VES reliability standards

### Out of Scope
- Changes to CHAMPVA eligibility rules, enrollment criteria, or covered benefits
- Full elimination of physical card mailing without an approved policy decision
- Distribution of benefits card information through non-VA.gov channels
- Historical record corrections or updates to underlying enrollment data

---

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Policy or compliance constraints limit feasible digital delivery options | Prioritize discovery to identify compliant models (e.g., view-only before download/request); define phased delivery accordingly |
| Backend data system does not support a reliable API integration path | Assess technical feasibility early in discovery; identify fallback integration options |
| Uneven beneficiary adoption due to limited digital access or awareness | Maintain physical card mailing as a fallback; provide clear in-product guidance and coordinate with CHAMPVA comms team |
| Beneficiaries without VA.gov accounts cannot access the feature | Include unauthenticated access scenarios (e.g., request by mail prompt) in UX design; track account creation as a leading indicator |
| Feature scope expands beyond what policy approvals support | Establish clear go/no-go criteria tied to compliance review outcomes before design begins |

---

## Dependencies

| Dependency | Owner | Status |
|---|---|---|
| Policy and compliance approval for digital card access | OCTO Policy / CHAMPVA Program Leadership | ⚠️ In discovery |
| VA.gov platform collab cycle and security review | VA.gov Platform Team | Not started |
| CHAMPVA enrollment/eligibility API identification and readiness | [TBD — Engineering lead] | ⚠️ NEEDS INPUT |
| CHAMPVA operations and communications coordination | CHAMPVA Program Operations | Not started |

---

## Monitoring and Incident Response

- Digital card feature will be instrumented with Datadog monitoring for latency, errors, volume, and saturation at launch.
- Feature flag / toggle will be used to enable rollback to the pre-launch state if errors or availability issues are detected.
- Timeline for triage and resolution: fast-tracked to within 1–3 business days of a detected incident.
- Main POCs:
  - **Product Manager:** Andrea Merrill
  - **Engineering Leads:** Kyle Brost (Be), Matt Long (FE)
  - **Design Lead:** Renata Keck 

---

## Stakeholders

| Role | Contact |
|---|---|
| CHAMPVA Program Leadership | Angela Pinon |
| Health Applications PM | Andrea Merrill |
| OCTO Product / Engineering Lead | Premal Shah, Steve Mason |
| VA Design Lead | John Riggin|

---

## Communications

- **Team:** Health Applications
- **GitHub Label(s):** #10-10d, #ivc-forms, #health-apps
- **Slack Channel:** #health-apps-team
- **Product POC:** Andrea Merrill

