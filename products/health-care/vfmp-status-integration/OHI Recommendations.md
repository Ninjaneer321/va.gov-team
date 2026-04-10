# Other Health Insurance (OHI) within the Claims Status Tool — VFMP Status Integration
 
## Background & Problem
 
We are working on integrating the CHAMPVA benefits application into the Claim Status Tool (CST). As part of this work, we identified a gap: if someone needs to submit additional documentation that is health insurance related, the existing file uploader in the CST does not work for this use case.
 
The business has required that anyone who did not complete their OHI in full, or completed it incorrectly, during their initial CHAMPVA application must fill out a standalone OHI form (Form 10-7959c). A photo of an insurance card alone is not sufficient. The OHI form requires at minimum the name of the insurance provider, effective date, and insurance type, among other fields.
 
- [Existing paper OHI form — Form 10-7959c](https://www.va.gov/vaforms/medical/pdf/VA%20Form%2010-7959c.pdf)
- [Digital standalone OHI — Figma source of truth](https://www.figma.com/design/QVqWdg6shBwIh1ucReXAcK/Other-Health-Insurance-Certification--10-7959c--Form-SOT?node-id=37-1574&p=f&t=xejhDGNEt9cQyq6n-0)
 
**Downstream impact of missing or incomplete OHI:** Users who are enrolled in CHAMPVA but have not fully completed their OHI may have claims rejected or placed on hold when they attempt to file. This creates a claims backlog and a poor user experience. The program wants to collect OHI as early as possible to prevent this.
 
## Business Decision
 
**March 13, 2026** — A business decision was made that the standalone OHI form (Form 10-7959c) is required for anyone who did not complete it correctly during their initial CHAMPVA application. This cannot be substituted with a simple document upload.
 
[Reference Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/stakeholders/03112026_CHAMPVA_Enhanced_Application_Flow_call.md)
 
## CST Technical Limitation
 
The Claim Status Tool owned by the Benefit Management Tool Team (BMT) does not support embedding a multi-step form or guided question flow. The CST's scope is intended for status checking and document uploads, not hosting full forms or structured data collection.
 
As a result, users will be linked out to a separate OHI form rather than completing it within the CST.
 
> **Note:** This does create a disjointed mid-task experience where we must clearly provide guidance through design. We also need to provide confirmation that the information they provide is connected back to the original application.
 
## Current State
 
- The CST has a **Status tab** (evidence requests) and a **Files tab** (document uploads)
- The Files tab dropdown currently includes health insurance document types, allowing users to upload a card as a generic document, which does not satisfy the OHI requirement
- The file uploader has no way to collect additional data about an uploaded file
- The standalone digital OHI form exists but has no pre-fill and no multi-beneficiary selection
 
## Recommended Design Changes for MVP Phase 1
 
1. Remove health insurance document types from the Files tab dropdown
2. Add a notification/callout on the Files tab informing users that health insurance must be submitted through a separate dedicated flow, with a direct link
3. Update the OHI evidence request to link to the standalone OHI digital form
 
## Application Status Scenarios
 
There are five scenarios in which a user may need to submit OHI. Each has a different context, urgency, and in some cases a different owning experience. Our current solution is focused on the first two.
 
| # | Scenario | Application Status | How It Surfaces | Front Door |
|---|----------|-------------------|-----------------|------------|
| 1 | In progress — proactive file upload | In progress | User proactively submits OHI without being asked | CST - to modified OHI experience |
| 2 | In progress — documents requested | In progress | Evidence request, send-back letter, or CCL letter has been issued | CST - to modified OHI experience |
| 3 | Enrolled — missing OHI | Enrolled | OHI was never submitted or was incomplete, may be hard to find in the tool if time has passed | Standalone OHI (10-7959c) |
| 4 | Rejected due to OHI | Rejected | Application was rejected because of missing or incorrect OHI, especially for Medicare requirements (Eligibility Determination) | Not determined — Consult with Health Apps |
| 5 | Enrolled — insurance update | Enrolled | User has new or changed insurance and needs to update their OHI on file | Standalone OHI (10-7959c) |
 
> **Important note on discoverability:** For scenarios 3, 4, and 5, significant time may have passed since the original application. These status cards within CST may be buried within the completed section, meaning users may have to actively seek them out. We need to determine how we direct these users to the enhanced application flow.
 
**Scenario 4 (Rejected due to OHI):** It is currently unclear whether a user in this state needs to resubmit their full application or whether they can simply add the OHI and return to review. This needs to be clarified with the business before a solution can be designed.
 
## Potential Solutions (Crawl → Walk → Run)
 
Taking an iterative approach in order to find a solution today, each option is functional, and builds towards a more seamless experience.
 
| Crawl (Option A) | Walk (Option B) | Run (Option C) |
|-------------------|-----------------|----------------|
| Link to Existing Standalone OHI Form | Modified OHI Form with Data Handoff | Seamless Integration (Future Exploration) |
 
### Option A — Crawl: Link to Existing Standalone OHI Form
 
Users are directed from the CST to the current digital standalone OHI form (owned by the Health Apps team) with no modifications.
 
The form is completed externally and all information must be entered manually. Post-submission confirmation lives on the OHI form only, with no visibility back in the CST. This option covers in-progress evidence requests and proactive submissions.
 
**Tradeoff:** This is the fastest option to ship, but users must re-enter information already on file, submit separately for each family member, and receive no traceability back in the CST.
 
### Option B — Walk: Modified OHI Form with Data Handoff
 
A modified version of the OHI form, built in coordination with the Health Apps team, that pulls known information from the CST and simplifies the submission process.
 
Beneficiary names are pre-filled from the CST at minimum, with additional pre-fill fields to be determined. Users select which family members the insurance applies to, and the backend generates individual OHIs per person. An application ID is passed from the CST to the form so the submission can be linked to the correct record. Completed OHI submissions surface back in "Files Received" in the CST, pending backend discovery with BMT and PEGA. The form also supports looping to add multiple insurance plans in one session, and includes a review and confirmation page with signer approval.
 
**Tradeoff:** Better user experience, but longer implementation since it requires coordination across the CST/BMT, Health Apps, and PEGA teams.
 
### Option C — Run: Seamless Integration (Future Exploration)
 
A future state where OHI collection is more natively integrated into the CST, reducing the need to link out at all. The shape of this solution requires further exploration and depends on platform capability growth and team roadmaps.
 
## Questions for the Business
 
1. At what point is an OHI request triggered?
2. How often are send-back letters sent (prior to someone filling out claims)? How often are people reminded they need to provide OHI?
3. What is the turnaround time from enrollment to receiving an OHI request?
 
## Open Technical Discovery Items
 
- How can we ensure an application ID and beneficiary information is passed from the CST to the external OHI form?
- How can a completed OHI submission get routed back into the CST and shown under the "Files Received" view?
- What does the Health Apps team's process look like for modifying an existing form vs. building a new one?
- What data fields can realistically be passed from the CST at link-out time?
