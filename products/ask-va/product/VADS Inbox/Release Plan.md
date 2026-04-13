## Release Plan: Ask VA, VADS Filter & Sort Patterns, [Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/131991)
- Release plan required for Architecture Intent and when VFS team is seeking Architecture Intent waiver.

## Rollout Plan
Feature toggles/flags:
+ `ask_va_enhanced_inbox` - used to enable users to view the new `/inbox` route.
+ Also updates the `/introduction` page - the inbox components will no longer reside on the `/introduction` page therefore;
+ The landing page content updates will be displayed when the feature flag is enabled.
+ Enabled for 100% user population.

## Rollback Plan
+ `ask_va_enhanced_inbox` feature flag will be disabled if there is a production issue event.
+ Disabling the feature flag will roll all users back to the previous inbox experience.

## Preparation
+ No additional development is planned outside of addressing findings (that block release) from staging review.
+ No ongoing development will occur, at minimum, 4 days prior to staging review.
+ Staging review has been completed `insert date` - **to be scheduled following architecture intent waiver approval.**
+ Authenticated staging environment for testing.
+ Login information for authenticated experience provided to governance team for staging review.
  + Commonly utilized user test accounts;
  + vets.gov.user+1@gmail.com
  + vets.gov.user+7@gmail.com
  + vets.gov.user+12@gmail.com

##  Testing Strategy (prior & post launch)
+ New unit tests have been created to test new FE components developed as part of this initiative.
+ Any test user account that has previously submitted an inquiry is viable for end-to-end testing.
+ End-to-end testing will be completed by `insert date` and prior to staging review.
+ Smoke test following `ask_va_enhanced_inbox`, feature flag enablement.

## Go/No Go Meeting (to be scheduled, contingent on staging review)
+ [ ] Release plan has been reviewed and approved by VFS Product Owner, Becky Phung. 
+ [ ] Release plan has been reviewed with all team members.
+ [ ] Release date finalized and confirmed.
