# Auth Experience team feature toggle guide

Last updated: April 2, 2026

- [Auth Experience team feature toggle guide](#auth-experience-team-feature-toggle-guide)
  - [Overview](#overview)
  - [Team specific practices](#team-specific-practices)
  - [Rough guidelines of how to implement a toggle](#rough-guidelines-of-how-to-implement-a-toggle)
  - [Testing features in production](#testing-features-in-production)
  - [Feature toggle list](#feature-toggle-list---status)

## Overview

[Platform docs around feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/)

## Team-specific practices

- Ideally, we use one toggle per feature.
- A feature is an enhancement we would want to test and prove out before the end users can see/use it.
- Always aim to deprecate a toggle after the feature is successfully deployed to production.
- Namespace your toggles by naming the toggle using the `profile_` prefix. The toggle should be specific to your feature. For example: `profile_my_feature` or `profile_do_not_require_zip_code`.

## Rough guidelines of how to implement a toggle

- Add the toggle to the code base via the instructions in the platform docs.
- Typically, FE and BE should use the same toggle unless there are unique requirements. Typically the fewer toggles, the better.
- If separate FE and BE feature toggles are required, then the BE toggle will need to be fully enabled during rollout to avoid any issues with 25/50/75% deployments
- Add a new selector to the selector file [Example](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/selectors.js). This allows for easy reuse and removal
- Add your toggle to our [mock API endpoint file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/mocks/endpoints/feature-toggles/index.js#L5). This will help in the creation of the e2e tests and other testing situations.
- Implement your cool feature and get it merged into staging
- Create/ensure there are e2e tests to cover the feature toggle on **and** off.
- Once the feature is fully merged into staging, enable it for all users. Work with the team to test this out and make sure it works.

## Testing features in production

- First, we start by enabling the feature per user. Enabling per user allows for smoke testing and UAT testing.
  - To note, the team should be checking analytics for the smoke test to confirm they are working.
- Once the feature has been smoke-tested and UAT tested, we enable it for a subset of users, usually `25%` of logged-in users.
- After a bit, we bump the number to `50%`, then `75%`, and then `100%` of logged-in users. With each bump happening after we verify the feature works as expected, using the analytics we have set up.
  - Each of these steps will be a ticket created by your PM/PO.
- Once the feature is entirely on, the developer can remove the feature toggle. Removing the toggle will also include removing old tests and code no longer needed.

## Feature toggle list - status

This is not a complete list of every historical Authenticated Experience toggle, but it captures the Profile toggles that materially shape the current Profile 2.0 experience and therefore should be considered when testing or documenting Profile behavior.

| Toggle | Purpose | Notes |
| --- | --- | --- |
| `profile_2_enabled` | Enables the Profile 2.0 information architecture and navigation patterns | Controls the hub-first Profile 2.0 experience, nested sidenav, tier 2 landing pages, breadcrumbs, and several route expectations |
| `profile_health_care_settings_page` | Enables the Health care settings parent page | Gates the Health care settings section and related child-page organization |
| `profile_hide_health_care_contacts` | Hides the personal health care contacts page from Profile | Used with the Health care settings page to suppress the contacts child page in nav and hub descriptions |

### Testing notes for current Profile 2.0 work

- When a feature changes route structure or parent-child page relationships, test both direct navigation and hub/sidenav navigation.
- When a feature changes hub card descriptions or sidenav contents, verify both the visible UI and the underlying analytics payloads.
- When a feature depends on user eligibility and feature flags, document both conditions. Scheduling preferences is a good example because it is controlled by both pilot eligibility and surrounding Profile navigation state.
