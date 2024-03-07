# General Notes
General info, notes and miscellaneous 

### Programs
- IVC: Office of Integrated Veteran Care (merging of two offices - OVAC Office of Veterans Access to Care and the Office of Community Care)
- VBA: Veterans Benefits Administration
- VHA: Veterans Health Administration
- VFMP: Veteran and Family Member Program
- VR&E (or Chapter 31): Veteran Readiness and Employment

### Systems/Processes
- AVA: [Ask VA](https://ask.va.gov/) (online service where people can submit questions, concerns, recommendations, and upload documents to VA)
- CMP: Centralized Mail Portal
  - takes documents and routes them to various VBA (Veterans Benefits Administration) teams for processing
- CP&E: Claims Processing and Eligibility
  - Eligibility system where records are stored and decisions are made
- CRM: where tasks/requests from call center are created and tracked/routed
- CXM: health care clearinghouse/database
  - all CHAMPVA,  VFMP, Spina Bifida, Children of Women Vietnam Veterans claims go here
- DAPER: Document and process enabled repository (existing system that will be replaced by PEGA)
- DCDM: Document Control Data Management 
- EEV: eligibility, enrollment, verification
- PEGA: new document repository and management system that will replace DAPER
  - integration needs to be built still
- PRA: Paperwork Reduction Act
- VBMS: Veteran Benefit Management system
  - case management system for VBA (Veteran's name/phone number/address/Ch 31)
- VES: Veterans enrollment system
  - new enrollment system that won't be ready until sometime in 2025
  - (dev will begin in spring 2024 and plan to complete in spring 2025)
  - VHA version of VBMS
- VIS: Veteran Information System
- VISTA: Veterans Health Information Systems and Technology Architecture (VISTA)
  - instance of CP&E (where eligibility info is stored, service connected conditions); VBA system

 
### Key Decisions/Findings
- PEGA integration [decision record](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/ADR-PEGA%20integration%20for%20CHAMPVA.md)
- 2/7/24 - Recommendation (long term): VBMS and VIS to communicate with each other (and eliminate need for 10-7959f-1 FMP registration form altogether). For now we will focus on digitizing the form.
- 3/4/24 - Testing: 10-10d will be done in staging. 10-7959f-1 testing - looking into UXPin (CodePen involves too much coding, Figma licenses are too limited - would require the VA to update, since Figma is new not a lot of precedent for testing).
  - [Decision matrix](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709218659350/85e1a2c931eafd52734bc66235165d15bf08d582?sender=334959bc-2aad-4cce-a6be-76386587a1e8) for prototypes created by Lois.
- 3/6/24 - Recommendation: To avoid asking redundancy, confusion or displaying overlapping information during CHAMPVA enrollment (with OHI) we should consolidate 1010D and 7959c. We will still have a standalone 7959c form to capture any coverage/ address updates.
   - Question for CAIA: How may we solve this problem to best accommodate the PRA?
   - A: Per CAIA, we can make the recommendation since we are following the spirit of PRA - reduce burden time on user.
   - (Lois can help us find the contact in legal - this would go through General Council).
   - Can we give 2 control numbers on the intro page if we consolidate?
   - expiring forms - need to go through form owner (Laura to provide us more info)
  - additional recommendation for 10-7959c: allow for multiple applicants (improve user experience but handle as separate applications on back end).

### Miscellaneous
- New list and loop pattern being worked on by VFF team but not ready to use ('classic' will be used in usability testing as well as staging review and production). 
- Houseless/no address not really an existing pattern for this currently (may revisit this at a later point in time, but not part of initial effort for launch).
  
