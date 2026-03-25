# Onboarding Modal Measurement Plan

## Goal

The onboarding modal is designed to help first-time users quickly navigate to the VA benefits most relevant to them. Success will be measured by whether the modal drives meaningful engagement with benefit areas while maintaining a positive user experience.

This document outlines:

* what success metrics we will track
* how those metrics will be captured in Google Analytics
* what baseline data we need to establish before launch

---

# Who Will See the Modal

The onboarding modal will appear:

* Only to **first-time users**
* Only **once**, on their first visit

Modal display logic:

1. Appears when a user signs up **without coming through a form**
2. If the user came through a form:

   * Appears on the **first page after completing the form**
   * Or the **first page after abandoning the form**

Because the modal appears only once, it is important that we capture clear analytics around **exposure and interaction**.

---

# Metrics We Will Track

We will measure success using three categories of metrics:

1. Modal engagement
2. Downstream engagement
3. User experience guardrails

---

# 1. Modal Engagement

We want to measure whether users interact with the modal when it appears.

### Metrics

* Number of users who see the modal
* Number of users who click one of the modal options
* Modal engagement rate (clicks / modal views)
* Distribution of clicks across benefit categories

Benefit options:

* Disability
* Health Care
* Education
* Discover Benefits

### Google Analytics Events Needed

We will instrument the following GA events.

Modal exposure:

```
onboarding_modal_view
```

Modal interactions:

```
onboarding_modal_disability_click
onboarding_modal_health_click
onboarding_modal_education_click
onboarding_modal_discover_click
```

Modal dismissal:

```
onboarding_modal_dismiss
```

These events allow us to calculate:

* modal engagement rate
* modal dismiss rate
* interest distribution across benefit areas

---

# 2. Downstream Engagement

We want to determine whether users who click through the modal **meaningfully engage with the destination pages**, rather than immediately leaving.

### Metrics

* Additional clicks on the destination page
* Navigation deeper into the benefit section
* Interaction with application or eligibility links

Examples of meaningful engagement:

* Clicking "Apply for disability benefits"
* Opening eligibility tools
* Navigating deeper into benefit content

### Google Analytics Events Needed

Example engagement events:

```
benefit_application_click
benefit_navigation_click
eligibility_tool_click
benefit_detail_view
```

We will analyze behavior of users who triggered modal click events and determine whether they perform additional engagement events.

---

# 3. Guardrail Metrics

Because the modal introduces a new UI element, we want to ensure it does not negatively impact the experience.

### Metrics

* My VA CSAT
* Disability page CSAT
* Health Care page CSAT
* Education page CSAT
* Discover Benefits page CSAT

We will compare CSAT before and after launch to ensure there is **no significant drop in satisfaction**.

---

# Baseline Metrics Needed Before Launch

To evaluate the impact of the modal, we need baseline data for the following metrics.

### Traffic Baseline

Questions:

* What is the current monthly traffic to each destination page?

  * Disability
  * Health Care
  * Education
  * Discover Benefits

---

### Engagement Baseline

Questions:

* What percentage of users currently click deeper into these pages?
* What percentage of users leave without interacting?

---

### Satisfaction Baseline

Questions:

* What is the current CSAT score for:

  * My VA
  * Disability page
  * Health Care page
  * Education page
  * Discover Benefits page

---

# Success Criteria (Best Practice Targets)

Based on common onboarding patterns, we will evaluate success using the following targets.

### Modal Engagement

Target engagement rate:

**40–60% of users interact with at least one modal option**

---

### Downstream Engagement

Users arriving from the modal should demonstrate **meaningful interaction with destination pages**, such as navigating deeper into benefit content or interacting with benefit actions.

---

### User Experience

No meaningful decline in CSAT scores for:

* My VA
* linked benefit pages

---

# Evaluation Timeline

We will evaluate modal performance at:

* 30 days post launch
* 60 days post launch
* 90 days post launch

Each review will include:

* modal engagement metrics
* downstream engagement metrics
* CSAT comparison against baseline

---

# Summary

To measure success of the onboarding modal we will:

1. Track whether users engage with the modal
2. Measure whether modal clicks lead to meaningful exploration of benefits
3. Monitor CSAT to ensure the modal does not negatively impact user experience

Google Analytics event tracking will provide behavioral data for modal engagement and downstream actions, while CSAT will act as a guardrail metric for overall experience quality.
