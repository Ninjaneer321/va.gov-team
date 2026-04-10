## Overview

This document tracks the product outline for the Scheduling preferences feature that now lives in **Profile > Health care settings > Scheduling preferences** at `/profile/health-care-settings/scheduling-preferences`.

This page was initially scoped as a standalone scheduling preferences effort. As implemented in Profile 2.0 between January 2026 and March 2026, it became part of the broader **Health care settings** section and now ships alongside:

- Personal health care contacts
- Messages signature
- Scheduling preferences

The Elizabeth Dole Veterans Program Improvement Act of 2022 includes provisions aimed at enhancing veterans' access to healthcare services, including specific requirements related to appointment scheduling preferences. Here are some key points:

The act mandates that (VA) must take into account individual veterans' scheduling preferences to a reasonable extent when arranging appointments for healthcare services. This includes preferences for dates, times, and locations that best suit the veterans' needs and availability.

## Problem Statement
Veterans have different options and modalities for scheduling health care appointments but nowhere to enter in their preferences for how they'd like to complete scheduling. This means that VA staff may be reaching out in channels or at times that are not convenient to the Veteran or are wasting time and resources calling a veteran who would prefer to self schedule.

The implementation also needs to fit naturally into the rest of Profile. By early 2026 this meant integrating scheduling preferences into the Health care settings landing page, nested Profile navigation, full-width subtask flows, and the shared Profile edit and analytics patterns.

## Desired User Outcomes

- As a Veteran, I want scheduling a health care appointment to be easy and happen how and when it is convenient for me.
- As a Veteran, I want the scheduling of community care appointments to happen quickly and efficiently.
- As a Veteran, I don't want to be contacted in channels or at times that are not convenient to me.
- As a Veteran, I want missing contact details to be surfaced at the right time so I can update them and continue.
- As a Veteran, I want complex choices like preferred contact times and appointment times to be broken into smaller steps instead of one dense form.

## Undesired User Outcomes
- As a Veteran, I don't want to set preferences for scheduling health care appointments and then have those preferences be ignored.
- As a Veteran, I don't want to lose work if I navigate away from a partially completed preference flow.
- As a Veteran, I don't want to see this feature if my account or facility is not eligible for the pilot.

## Desired Business Outcomes

- VA should be able to scheduling appointments more efficiently and reduce the amount of outreach and time spent on scheduling appointments.
- The feature should align with the Profile 2.0 information architecture instead of behaving like a disconnected special case.

## Undesired Business Outcomes

- Preferences should not lead to more confusion and overhead for VA staff responsible for scheduling health care appointments.

---
## Measuring Success

### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Improve the experience of scheduling a community care appointment
  - Key result: Reduce the # of contact attempts needed to get an appointment scheduled.
  - Key result: Reduce the time from appt requested to appt scheduled
  - Key result: Overall usage of appointment scheduling preferences
  - Key result: CSAT of appointment scheduling preferences

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

As a Veteran I want to document 4 specific preferences related to Veteran health care appointment scheduling preferences (see below)

Our idea is to store the preferences in VA profile, enable Veterans to update them in the VA.gov profile, and enable schedulers/MSAs to also be able to view/update them in ISS.

(1) How and when the veteran prefers to be contacted about an appointment for health care.
(2) Whether the veteran prefers to schedule appointments without the assistance of the Department, if able.
(3) Whether the veteran prefers to select a provider without the assistance of the Department, if able.
(4) Whether the veteran prefers appointments to be scheduled during certain days or times.

### Implemented experience

The current frontend implementation includes:

- a Health care settings parent page at `/profile/health-care-settings`
- a Scheduling preferences landing page at `/profile/health-care-settings/scheduling-preferences`
- inline edit flows for simpler single-select preferences
- routed subtask flows for preferred contact method, preferred contact times, and preferred appointment times
- missing-contact-information handoff into shared Profile edit flows
- unsaved-changes protection when navigating away from modified routed flows
- pilot eligibility gating based on `schedulingPreferencesPilotEligible`

The scheduling preferences entry is shown only when the user is eligible for the pilot, and it appears in:

- the Profile hub card description for Health care settings
- the Profile side navigation
- the Health care settings section itself

### Supporting research

This work is not supported by user research because it comes from a specific call out in Congressional legislation with an associated timeline. The first iteration of this project is primarily based off the text of the legislation rather than documented research on a specific problem and will launch without input from research. However, there will be a simultaneous research effort that will inform future work as well as data collected from the initial launched product.

### Initiatives

None as of now

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

Implementation notes from the January-March 2026 rollout:

- the feature launched behind pilot gating rather than broad Profile availability
- the page was integrated into the broader Profile 2.0 navigation refresh rather than shipped as a standalone page
- related content and UX refinements continued after the initial page shell shipped

## Launch Dates
- *Target Launch Date*
  - January 2, 2026
- *Actual Launch Date*
  - April 6, 2026
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

Scheduling preferences now follows the same Profile 2.0 navigation model as other nested Profile features. Users enter through the Health care settings section, review their saved preferences on the main page, and then either edit simple fields inline or complete full-page subtasks for more complex preferences.

The more complex subtask flows were added because several preferences require conditional branching:

- preferred contact method can require confirmation and can send the user to contact info editing when required details are missing
- preferred contact times can be either no preference or a multi-select list of times
- preferred appointment times can be either no preference or a multi-select list of times

This keeps the main page readable while still supporting the full legislative requirement set.

### Current Status

- Implemented in Profile 2.0
- Still pilot-gated
- Documented FE/BE details are maintained in `va.gov-team-sensitive` under `products/identity-personalization/profile/health_care_settings/scheduling_preferences/`

### Key Decisions

|Date|Decisions|Reason|Impacts|
|---|---|---|---|
|Late 2025 - early 2026|Scheduling preferences moved under a new Health care settings section in Profile 2.0|Align the feature with the new parent-child information architecture|Navigation, breadcrumbs, and page descriptions changed|
|January 2026|Complex preferences use routed subtask flows instead of only inline edit|Improves usability for multi-step and multi-select flows|Introduced dedicated routes and unsaved-changes handling|
|January 2026|Feature visibility is gated by user pilot eligibility|Rollout depends on facility-based pilot access|Feature is hidden from ineligible users in hub and sidenav|

---

## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Authenticated Experience
- GitHub Label: authenticated-experience, profile
- Slack channel: #elizabeth-dole-act-in-va-gov-profile-
- Product POCs: Chante Lantos-Swett, Kay Lawyer
- Stakeholders: IVC, VA Profile

</details>

#### Team Members

<details>

 - OCTO Lead: Chante Lantos-Swett
 - PM: Pat Siebenlist
 - Engineering: Micah Frazier
 - Research/Design: Janelle Finnerty

</details>

#### Stakeholders

<details>

_What offices/departments are critical to make this initiative successful?_

</details>
