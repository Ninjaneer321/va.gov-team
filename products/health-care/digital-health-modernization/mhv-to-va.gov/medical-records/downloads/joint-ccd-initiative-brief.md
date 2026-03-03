# Initiative Brief for Joint Continuity of Care Document (CCD)

#### Overview
- Product: MHV Medical Records
- Feature: Provide Veterans with a single, unified Continuity of Care Document (CCD) that combines health data from both VistA and Oracle Health (OH) EHR systems into one comprehensive download

---

## Outcome Summary

Veterans will be able to download a single, consolidated Continuity of Care Document that aggregates health data from both their VistA and Oracle Health medical records, eliminating the need to download and reconcile separate CCDs from each system. This will reduce user confusion, improve care coordination with non-VA providers, and ensure compliance with the CARES Act requirement to make all health records accessible.

**Related/Associated product(s)**
- MHV Medical Records | [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md)
- [CCD Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/ccd.md)
- [CCD PDF/TXT Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/ccd-pdf-txt-initiative-brief.md)
- [Oracle Health Integration - Download Page Edits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/OH-integration-download-page-edits.md)

## Problem

> *Describe the challenge / pain point you seek to address.:*

* **What is the problem and who is affected?**
  * As VA facilities migrate from VistA to Oracle Health (OH), Veterans who are hybrid users (with records in both systems) must currently download **separate** CCDs — one from VistA (via VHIE) and one from Oracle Health (via FHIR API) — to have a complete picture of their health data. This fragmented experience is confusing, burdensome, and risks Veterans sharing incomplete records with non-VA providers.
  * Veterans who began receiving care at a facility before its cutover to Oracle Health have pre-cutover data in VistA and post-cutover data in Oracle Health. There is currently no single document that unifies both sets of records.
  * As of March 2026, there are **10 Oracle Health facilities** (Spokane, Walla Walla, Columbus, Roseburg, White City, Chicago, Detroit, Saginaw, Ann Arbor, Battle Creek) with more expected. The number of affected hybrid users will continue to grow with each new facility cutover.

* **What evidence do we have of the problem?**
  * MHV coordinators have reported Veterans asking how to get a complete picture of their health records.
  * The [Oracle Health Integration - Download Page Edits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/OH-integration-download-page-edits.md) document outlines the interim approach of displaying separate CCD links with facility-specific date ranges, acknowledging this is not the ideal long-term experience.
  * Survey feedback and support contacts indicate Veterans struggle to understand the difference between the multiple download options.

* **Why do we think this problem is occurring?**
  * VistA and Oracle Health are separate EHR systems with different data stores and APIs. No integration layer currently exists on the MHV on VA.gov front end to merge their CCD outputs into a single document.
  * The VHIE service that generates VistA CCDs and the Oracle Health FHIR API for CCDs are independent services that were never designed to produce a combined output.

* **How does this initiative help further OCTO-DE's mission and goals?**
  * It directly supports the mission to make it easier for Veterans to use their benefits by removing the burden of reconciling multiple downloads.
  * It ensures compliance with the CARES Act requirement that Veterans have access to ALL of their medical records.
  * It aligns with the digital health modernization goal of providing a seamless, unified experience regardless of which EHR system stores the data.

## Desired User Outcomes
- **Why would a user want to use this?** Veterans want a single, comprehensive health summary to share with non-VA providers, maintain personal health records, or use for continuity of care during transitions. Currently, they must download and mentally reconcile two separate documents.
- **With this problem solved, what should users be able to do/achieve that they couldn't before?** Download one unified CCD (in XML, PDF, or TXT format) that contains their complete health history across both VistA and Oracle Health, without needing to understand which EHR system stores which data.

## Undesired User Outcomes
- Veterans receive a document that contains duplicate records (e.g., the same medication listed twice from both systems) due to data reconciliation failures.
- Veterans experience significantly longer download/generation times due to the complexity of merging data from two systems.
- Veterans mistakenly believe the joint CCD contains all their records when data from one system may be temporarily unavailable.

## Desired Business Outcomes

- **Why would your business want this to exist?**
  - Ensures full CARES Act compliance by providing Veterans access to all their health data in a single document.
  - Reduces support burden — fewer calls/emails from Veterans confused about which CCD to download or how to get a complete picture of their records.
  - Positions MHV on VA.gov as a mature, unified health portal that abstracts away the complexity of the underlying EHR migration.
- **With this problem solved, what should your business be able to do/achieve that they couldn't before?**
  - Provide a seamless records experience regardless of how many facilities have migrated to Oracle Health.
  - Reduce the need for ongoing content updates every time a new facility cuts over (the joint CCD handles it automatically).
  - Eliminate the need for Release of Information (ROI) requests for data that should be self-service.

## Undesired Business Outcomes
- Increased support volume if the joint CCD is unreliable or produces inaccurate/incomplete data.
- Performance degradation of the MHV Medical Records application due to the complexity of aggregating data from multiple sources in real time.
- Dependency on VHIE service availability creating a single point of failure for the combined document.

## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

| Product KPI | Baseline | Target | Data Source |
|---|---|---|---|
| Joint CCD downloads per month | N/A (new feature) | TBD after 30-day baseline | GA/Domo |
| Separate VistA + OH CCD downloads (should decrease) | Current download counts | 50% reduction after joint CCD launch | GA/Domo |
| Support contacts related to CCD confusion | TBD — current volume | 30% reduction within 90 days of launch | Support ticket data |
| CCD generation success rate | TBD | ≥ 99% | Application monitoring |
| Average CCD generation time | TBD | ≤ 30 seconds | Application monitoring |
| Medallia satisfaction score for Downloads page | TBD | Maintain or improve | Medallia |

---

## Discovery

### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>.*
> *Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it):
  - Low risk. Veterans have already demonstrated demand for comprehensive health records. The separate CCD approach was an interim solution that Veterans have expressed confusion about. A unified document directly addresses their needs.

- **Usability Risks** (can people figure out how to use it):
  - Low risk for the download action itself — we will follow the established download patterns already in use for CCD XML, PDF, and TXT.
  - Moderate risk around Veterans understanding what the joint CCD contains vs. Blue Button. Clear content/labeling will be critical.

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - **Data aggregation complexity**: Merging CDA/CCDA documents from VHIE (VistA) and FHIR-based CCD from Oracle Health requires mapping, deduplication, and reconciliation logic.
  - **API availability**: Depends on the reliability of both the VHIE jHIE Agg CCD service and the Oracle Health FHIR R4 Binary CCD endpoint. Either being unavailable would impact the joint CCD.
  - **Hold periods**: Certain records (e.g., C&P exam notes) have hold periods that must be consistently applied across both data sources.
  - **Data format differences**: VistA CCD is generated as CDA XML via VHIE; Oracle Health CCD is available via [FHIR R4 Binary endpoint](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-binary-autogen-ccd-if-get.html). Harmonizing these formats into a single document is a significant technical challenge.
  - **Performance**: Calling two separate services and merging results may increase response time.

- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Requires coordination with VHIE team, Oracle Health/Cerner team, and potentially the FEHR (Federal Electronic Health Record) program.
  - The [VHIE concept diagram](https://github.com/user-attachments/files/24941763/VHIEConceptDiagram_MHV_AggCCD_10082025.pptx) outlines two future-state options — alignment on which option to pursue is a prerequisite.
  - Changes will need to be communicated to MHV coordinators and field support staff.
  - Must maintain CARES Act compliance throughout the transition.

### Supporting research

- *Is this work supported by user research?*
  - This work is informed by:
    - Feedback from MHV coordinators reporting Veteran confusion about multiple CCD downloads.
    - Survey comments from Veterans about difficulty accessing complete health records.
    - The decision documented in [OH Integration - Download Page Edits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/OH-integration-download-page-edits.md) that acknowledged the current multi-CCD approach is interim.
  - *Will this work include user research?*
    - Yes. We plan to conduct usability testing to validate:
      - Veteran understanding of what the joint CCD contains.
      - Whether the joint CCD meets their needs for sharing records with non-VA providers.
      - Whether the content and labeling clearly distinguish the joint CCD from the Blue Button report.

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*

- **Backend aggregation service** that retrieves CCD data from both VistA (via VHIE jHIE Agg CCD service) and Oracle Health (via FHIR R4 Binary CCD API), reconciles and merges the data, and produces a single unified CCD.
- **Joint CCD in multiple formats**: XML (for provider EHR import), PDF (human-readable), and TXT (accessible alternative) — consistent with the formats established in the [CCD PDF/TXT initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/ccd-pdf-txt-initiative-brief.md).
- **Updated Downloads page** that replaces the separate VistA CCD + OH CCD links with a single "Download your Continuity of Care Document" option for hybrid/OH users.
- **Content updates** explaining what the joint CCD includes and how it differs from the Blue Button report.
- **Error handling** for scenarios where one data source is unavailable (e.g., graceful degradation showing available data with a message about the unavailable source).

> *What have you explicitly decided to **not** include and why?*
- **Real-time data reconciliation/deduplication UI**: We will not build a user-facing interface for resolving duplicate records. The backend will handle deduplication algorithmically.
- **Historical CCD versioning**: We will not provide the ability to download point-in-time historical CCDs; the joint CCD will reflect the current state.
- **Blue Button integration**: Blue Button remains a separate report. We are not merging CCD and Blue Button at this time.

> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*
- Not initially. The mobile app does not currently support CCD downloads. This may be considered in a future iteration once the web experience is validated.

> *How does this solution address your Assumptions & Risks?*
- The aggregation service addresses the technical feasibility risk by providing a clear architecture for merging data from two sources.
- Usability testing will validate content and labeling to mitigate confusion risks.
- Error handling and graceful degradation address the API availability risk.

#### Go-to-market

> *What marketing, outreach, or communications are necessary for this product to be successful?*
- Communication to MHV coordinators about the new unified CCD and removal of separate download links.
- Updated FAQ/help content on VA.gov explaining the joint CCD.
- Coordination with field support staff on the new experience.

> *Which groups/orgs are necessary to make this happen?*
- VHIE team (for jHIE Agg CCD service)
- Oracle Health / FEHR program (for FHIR API access and coordination)
- MHV Medical Records engineering and design teams
- OCTO-DE leadership
- MHV coordinators and field support

---

## Launch Planning

### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket: TBD

### Timeline
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

| Milestone | Target Date | Notes |
|---|---|---|
| Technical discovery & architecture decision | TBD | Alignment on VHIE Option 1 vs. Option 2 |
| Design mockups & content | TBD | |
| Backend aggregation service development | TBD | |
| Usability testing | TBD | |
| Staging review | TBD | |
| Phased rollout begins | TBD | |
| Full launch | TBD | |

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - TBD
- *Actual Launch Date*
  - TBD

---

## Screenshots

### Before
*Current state: Hybrid/OH users see separate VistA CCD and OH CCD download links with facility-specific date ranges.*

### After
*Future state: All users see a single "Download your Continuity of Care Document" option that contains unified data from all EHR sources.*

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: MHV Medical Records
- GitHub Label(s): medical-records, ccd
- Slack channel:
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>

- Office/Department: OCTO-DE
- Office/Department: VHIE
- Office/Department: Oracle Health / FEHR Program Office
- Office/Department: MHV Coordinators
- Contact(s): TBD

</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
