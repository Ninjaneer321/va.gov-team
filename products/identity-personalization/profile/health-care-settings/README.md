# Product Outline: Health care settings

**Last Updated:** 4/2/2026

## Overview

Health care settings is a top-level section in the VA.gov Profile 2.0 experience. It groups together Profile features related to health care contact and scheduling behavior so users can find them in one place instead of across unrelated Profile pages.

The section currently includes:

- Personal health care contacts
- Messages signature
- Scheduling preferences

The page lives at `/profile/health-care-settings`.

## Why this section exists

As Profile 2.0 introduced parent and child pages, these health-related settings no longer fit well as isolated leaf pages in the broader Profile navigation. Grouping them under a Health care settings parent page helps:

- clarify that these settings are health-care-related
- provide a stable parent route for nested pages
- support a hub-first Profile experience
- make it easier to show or hide child features based on flags or eligibility

## Current implementation notes

- Health care settings is part of the Profile 2.0 navigation model.
- Child pages can vary based on feature availability and user eligibility.
- The hub card description for Health care settings changes based on whether scheduling preferences is available and whether personal health care contacts are hidden.

## Child features

### Personal health care contacts

Owned by the MHV Cartography team.

- Public doc: `products/identity-personalization/profile/personal-health-care-contacts/README.md`

### Messages signature

Messages signature now lives under Health care settings in the Profile 2.0 route structure.

### Scheduling preferences

Scheduling preferences is a pilot-gated feature under Health care settings.

- Public product outline: `products/identity-personalization/profile/scheduling-preferences/README.md`
- Sensitive FE doc: `products/identity-personalization/profile/health_care_settings/scheduling_preferences/frontend_documentation.md`
- Sensitive BE doc: `products/identity-personalization/profile/health_care_settings/scheduling_preferences/backend_documentation.md`

## Related routes

- `/profile/health-care-settings`
- `/profile/health-care-settings/contacts`
- `/profile/health-care-settings/messages-signature`
- `/profile/health-care-settings/scheduling-preferences`

## Related toggles and eligibility

- `profile_2_enabled`
- `profile_health_care_settings_page`
- `profile_hide_health_care_contacts`
- `schedulingPreferencesPilotEligible` user eligibility for scheduling preferences
