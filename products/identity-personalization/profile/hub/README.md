# Feature Outline: Profile Hub

**Last Updated: April 2, 2026**

### Communications

- **Github labels**: authenticated-experience
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

### Table of Contents

- [Feature Outline: Profile Hub](#feature-outline-profile-hub)
    - [Communications](#communications)
    - [Roles](#roles)
      - [OCTO team](#octo-team)
    - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Problem statement](#problem-statement)
  - [User Outcomes](#user-outcomes)
    - [Desired User Outcomes](#desired-user-outcomes)
    - [Undesired User Outcomes](#undesired-user-outcomes)
  - [Business Outcomes](#business-outcomes)
    - [Desired Business Outcomes](#desired-business-outcomes)
    - [Undesired Business Outcomes](#undesired-business-outcomes)
  - [Analytics](#analytics)
  - [Projects](#projects)
  - [Design](#design)
  - [Frontend](#frontend)

## Overview

The profile hub serves as the default landing page for the VA.gov Profile at `/profile`. It gives users a list-style overview of the current Profile information architecture and routes them to the section-level landing pages that make up the Profile 2.0 experience.

As of the March 2026 implementation state, the hub is no longer just a mobile navigation improvement. It is the primary entry point into Profile and reflects the current top-level information architecture:

- Personal information
- Contact information
- Service history information
- Financial information*
- Health care settings*
- Dependents and contacts*
- Letters and documents*
- Email and text notifications
- Account security*

*\*has a sub-navigation page to different portions of the portal as well as potentially other applications within va.gov.*

## Problem statement

- As a mobile user, I can easily miss the mobile menu in the profile, which leads me to think that `Personal information` is the only section of the profile.
- As a person using a screen reader, I expect to see a `Profile` H1 when I go to the profile.
- As a Profile user, I need a stable landing page that reflects the current parent-child structure of Profile 2.0, not a collection of disconnected leaf pages.

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this? With this problem solved, what should users be able to do/achieve that they couldn't before?*

- On mobile, users can more easily scan for what is available in the profile.
- For people using screen readers, it will be much clearer that links to `Profile` landed them in the right place.
- Users can understand the parent categories within Profile before drilling into nested pages like Direct deposit, Connected apps, and more.

### Undesired User Outcomes

- Done wrong, the hub could become noisy, cluttered place that makes it harder for users to easily navigate to tools.

## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- This allows us to fix longstanding issues for mobile and screen reader users.
- This allows us to surface links associated with the profile without having to build whole new sections within the profile.
- This allows us to experiment with the hub model and whether it might be part of a more holistic authenticated experience.

### Undesired Business Outcomes

- The hub becomes a dumping ground.

## Analytics

- Launch metrics can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/hub/mvp#measuring-success)
- Click data can be found at the bottom left of [this dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/_u.date00=20231119&_u.date01=20231128) < only working if we haven't migrated to GA4
- [GA4 click data report](https://analytics.google.com/analytics/web/?authuser=0#/analysis/a50123418w177519031p176188361/edit/_K1zzMjpQ2qxlfcC--aNiw)

The hub also inherits behavior from the current Profile app shell:

- Section descriptions may change based on feature availability
- Health care settings content changes based on scheduling preferences pilot eligibility and whether health care contacts are hidden behind a feature flag
- The bad address alert can render above the hub content

## Projects

|Project|Epic|Launch date|
|---|---|---|
|[Profile hub MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/mvp/README.md)|[#40593](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40593)|12/18/2023|
|Profile 2.0 hub refresh|Profile 2.0 implementation work from October 2025 to March 2026|10% 3/9/26<br />50% 3/11/26<br />100% 3/13/26|

## Design

- [Desktop](https://www.figma.com/design/5bxmQiCLaXdXrEfPhqMmdJ/Profile-2.0--113546?node-id=52-19965&t=Q1EHjNeRYPkOiQvf-0)
- [Mobile/user flow](https://www.figma.com/design/5bxmQiCLaXdXrEfPhqMmdJ/Profile-2.0--113546?node-id=52-19997&t=Q1EHjNeRYPkOiQvf-0)
- Supporting frontend documentation in `va.gov-team-sensitive`: `products/identity-personalization/profile/hub/frontend_documentation.md`

## Frontend

- Root route: `src/applications/personalization/profile/routes.js`
- Hub component: `src/applications/personalization/profile/components/hub/ProfileHub.jsx`
- Hub cards: `src/applications/personalization/profile/components/hub/ProfileHubItem.jsx`
- Dynamic Health care settings description logic: `src/applications/personalization/profile/util/index.js`
