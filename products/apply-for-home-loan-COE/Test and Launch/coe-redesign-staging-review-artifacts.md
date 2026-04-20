# COE Request Form 26-1880 Staging Review Artifacts  

### Staging URL
https://staging.va.gov/housing-assistance/home-loans/request-coe-form-26-1880/introduction
  - Everything from the introduction page through the confirmation page
  - In the main nav go to VA Benefits and Health Care > Housing assistance > Request a COE online (this is the form introduction page)

### Generated PDF form
- N/A - a PDF is not generated on this form
  
### Test Users & scenarios
[Link to passwords](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- To see the new version of the form we have built, use test users +12, +238, or +151
  - Noting the pages/sections that have logic built into them:
    - "Your service status" - first page of Step 2. All selections dictate what you see in Step 4. If you select "I'm currently an active-duty service member" you will get additional form pages in Step 2.
    - "Previous VA home loans" - second page of Step 3. If you select No, you go to Step 4. If you select Yes, you get another page.
    - "Properties owned with VA home loans" - third page of Step 3. If you select No, you go to Step 4. If you select Yes, you go through list and loop pages.

### List of known issues and bugs
- When a user uploads a doc, adds a doc type, and then changes the file, the doc type stays selected but it acts as if there isn't a doc type selected and the user can't move forward. [Ticket](https://va.ghe.com/software/va-cve/issues/2665)
- Planning to implement minimal header and footer before release. [Ticket](https://va.ghe.com/software/va-cve/issues/2533)
- When a user is offline and starts the form, the first page of the form populates the first page of the "old" form. [Ticket](https://va.ghe.com/software/va-cve/issues/2666)

### Content & IA Epic
- TBD
  
### Accessibility Test Artifact
- TBD

### Regression Test Plan
- TBD

### Test Plan
- TBD

### Coverage for References
- TBD

### Summary (Defects) Reports
- TBD

### E2E Tests
- TBD

### Unit Test Coverage
- TBD

### Endpoint Monitoring Playbook
- TBD

### Logging Silent Failures
- TBD

### Engineering & Security Checklist
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/26_1880_Security_Checklist.md
  



