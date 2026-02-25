# Travel Pay Design

## Travel pay design and research team members
- Cara (____ - roughly Aug 2025)
- Micah (____ - roughly Sept 2025)
- Liza (July 2025-current)
- Kristen (Aug 2025-current)

## Design history
The first iteration of travel pay on VA.gov was simple mileage-only claims (SMOC). In February 2026, the team released new functionality to submit complex claims (claims with receipts). Additional information is available in this [Travel Pay Design History and Decisions file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/adrs/adr9_complex_claims_design_decisions.md), which serves as an ADR (architecture decision record). That file explains why and how we made key design decisions. 

## Figma files
Most of the travel pay design work is documented in Figma. Below are some of the most commonly used files: 

- [Complex travel reimbursement claims](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=250-9661&t=CKTXtfIWlFar0BcQ-1) - the main file used for travel pay claims on VA.gov
- [Travel Pay Working - VA Mobile](https://www.figma.com/design/ZIHY63cFlD7pFjqQLA5rFN/Travel-Pay-Working---VA-Mobile?node-id=17-284&t=Ei6IUeuHmhAI87uc-1) - the main file for travel pay in the VA mobile app (VAHB). This file is admittedly a bit messy! If you're working on the app it may also be helpful to view the Figma pages for the app [Benefits](https://www.figma.com/design/p0vlRz38TKIOwWDfI2bGc7/Benefits-2.0---%F0%9F%9A%A2-Shipped---VA-Mobile?m=auto&node-id=818-1784&t=348Fw7SbQAU5CAvD-1), [Health](https://www.figma.com/design/JQAoUBxvSWCzKvu2ifRRE7/Health-2.0---%F0%9F%9A%A2-Shipped---VA-Mobile?m=auto&node-id=802-3615&t=MI5skbk3VVlgdtTy-1), and [Payments](https://www.figma.com/design/yhGsaPc2px6eCVzXhuOwm4/Payments-2.0---%F0%9F%9A%A2-Shipped---VA-Mobile?m=auto&node-id=802-3322&t=RfJSAazAbYzUZB0V-1) areas.
- [Travel reimbursement status page](https://www.figma.com/design/RJ6OVm0MWD2WprVfO7E3lp/Travel-reimbursement-status-page?node-id=250-9661&t=T6r8C8VcKR9XdrXH-1) (archived; current designs for the detail/status page have been moved to the Complex travel reimbursement claims file)
- [Simple mileage-only travel pay claim submission](https://www.figma.com/design/RzugGEmu4drhCSHTyQ6hjl/Simple-mileage-only-travel-pay-claim-submission?node-id=250-9661&t=F8ws5nIEun6ssKfr-1) (archived; simple mileage-only claims were replaced with the complex claims flow, shown in the Complex travel reimbursement claims file)

## Other helpful resources
- [Travel pay UX research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/research)
- [Travel Claim Status Descriptions Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741383202688/4275fca192314799dededc2a9aeae4fd383b0ace) and [Travel Claim Statuses Translation Layer Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729029298796/b9c1bdc48809fbb04d73eed6f9d8c1e4474d56cb) - this reflects the work Cara and team began to provide better claim status descriptions to users. This work stalled because of concerns from VA stakeholders.
- [The collab cycle ticket for complex claims](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107829) and [associated milestones/tickets](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1542)
- [How to access the staging/test environment](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/13a41c7221283df13187b100d37cc941ea246009/Administrative/vagov-users/staging-test-accounts-travel-pay.md) (use the same staging user on the [BTSSS staging site](https://dvagov-btsss-qa.dynamics365portals.us/))
- [Screenshots of BTSSS](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/engineering/complex_claims/expense_types)
