# Portal Environment Consolidation — Production Login Only

## Overview

Migrate all Portal user-facing functionality from Staging to Production so that all users have a single, unified environment. Staging will become an API-only application, with users automatically redirected to Production.

## Problem Statement

VA Notify's Portal depends on IAM for special provisioning in lower environments, preventing a fully self-service model. This manual intervention creates friction for Business and Technical Contacts. Additionally, Staging has experienced increasing intermittent downtime without notice or clear ETA for restoration, impacting user experience and team reliability.

## Why This Is Important

- Eliminates the manual provisioning process required by IAM for lower environments.
- Reduces frequency of login issues caused by IAM instability in Staging.
- Allows Business and Technical Contacts to fully self-service user management.
- Provides all Portal users the same capabilities currently only available in the Staging environment.

## Solution

Migrate all functionality from Staging to Production. Staging will become an API-only application, with users redirected to Production via a redirect and explanatory banner.

## Goals

- Staging becomes an API-only app — no user-facing UI.
- Users visiting Staging are automatically redirected to Production.
- A banner on the Staging page explains the change.
- All UI elements and functionality from Staging are migrated to Production. On the backend, instead of Staging "pushing to Production," Production will "pull templates from Staging."
- New functionality will initially be gated behind a platform-admin-only feature flag to allow incremental builds and normal releases.
- All Staging users (and their service/role permissions) are migrated to Production.
- Logic associated with `higher_env` and `lower_env` is deprecated in favor of API vs non-API terminology.
- Config and initializer files updated to use API verbiage instead of P2P, higher, lower, etc.

## Desired Outcomes

- Decrease in frequency of login issues due to Staging/IAM instability.
- Removal of the manual IAM provisioning process for lower environments.
- Business and Technical Contacts can fully self-service user management in Production.

## OKRs

**Objective 3: Quantifiably improve the user experience**

## VA Partners

All teams that utilize VA Notify's Portal.

## Acceptance Criteria

- [ ] Staging is an API-only app
- [ ] Users attempting to access Staging are redirected to Production
- [ ] Banner implemented on Staging page that explains the change
- [ ] All existing Staging functionality is now present in Production
- [ ] All Staging users have been migrated to Production with existing Staging roles
  - [ ] Update `ability.rb`
- [ ] Users should still NOT be able to update templates directly in Production
- [ ] Logic associated with "higher env" and "lower env" has been deprecated
- [ ] Configs updated to use API verbiage
- [ ] Initializers updated to use API verbiage
- [ ] `promote_template.rb` updated to use API verbiage
- [ ] `config/initializers/feature_settings.rb` updated to use API verbiage
- [ ] Migrate template add functionality
- [ ] Migrate template delete functionality

## Known Risks or Challenges

_To be documented as the initiative progresses._

## Monthly Updates

_Add brief status updates here or as comments on the tracking issue._
