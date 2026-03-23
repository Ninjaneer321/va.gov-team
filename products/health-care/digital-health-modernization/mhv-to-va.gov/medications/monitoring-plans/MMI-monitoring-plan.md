# MMI (Medications Management Improvements) - Monitoring Coordination Plan

**Last updated:** 2026-03-23  
**Initiative brief:** [Meds Management Improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/product/meds-management-improvements.md)  
**Team Slack:** `#mhv-medications-rx` and `#mhv-medications-devs`  
**Product POCs:** Kay Lawyer (PO), Robyn Singleton (UX Lead)  
**Stakeholders:** Dr. Eric Spahn (OCC / Pharmacy)  

> **This is a working document.** It outlines what we may want to monitor across the Medications experience and helps identify where tracking exists today vs. where additional instrumentation is needed.  
>  
> Items in this document should be validated over time and may inform follow-up tickets for Engineering (instrumentation) and Analytics (configuration and reporting).  
>  
> Update this document as tracking is implemented, metrics evolve, or new features are introduced. See [Review schedule](#review-schedule) at the bottom.

---

## Table of contents

- [Overview](#overview)
- [Related documents](#related-documents)
- [How we use each tool](#how-we-use-each-tool)
- [MMI page architecture and URLs](#mmi-page-architecture-and-urls)
- [Medications KPIs](#medications-kpis)
- [Page-level monitoring](#page-level-monitoring)
  - [MHV Landing Page](#mhv-landing-page-my-health)
  - [Medications / Refills](#medications--refills-my-healthmedications)
  - [In-Progress Medications](#in-progress-medications-my-healthmedicationsin-progress)
  - [Medication History](#medication-history-my-healthmedicationshistory)
- [Cross-page funnels and flows](#cross-page-funnels-and-flows)
- [Renewal flow monitoring](#renewal-flow-monitoring)
- [Thresholds and alerts](#thresholds-and-alerts)
- [Monitoring cadence and reporting](#monitoring-cadence-and-reporting)
- [Roles and responsibilities](#roles-and-responsibilities)
- [Dev work needed](#dev-work-needed)
- [Review schedule](#review-schedule)

---

## Overview

This document is the single source of truth for **ongoing monitoring** of the Medications product on MHV on VA.gov. It covers the new MMI page structure (Refills landing page, In-Progress, and Medication History) and the MHV landing page entry points into medications.

It defines:
1. **What we track** - every key interaction across the four pages, mapped to the right tool
2. **Our KPIs** - the core metrics we report on to measure success
3. **What is not tracked yet** - gaps that need dev work to set up
4. **How we report** - how often, who owns it, and who sees it

---

## Related documents

| Document | Location |
|---|---|
| Original Medications Data Collection Plan | [`medications/analytics/data-collection-and-analysis-plan.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/analytics/data-collection-and-analysis-plan.md) |
| Meds to SM Renewal Monitoring Plan | [`medications/rollout-monitoring-coordination-Meds-SM-renewal-flow/meds-sm-renewal-monitoring-plan.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/rollout-monitoring-coordination-Meds-SM-renewal-flow/meds-sm-renewal-monitoring-plan.md) |
| MMI Initiative Brief | [`medications/product/meds-management-improvements.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/product/meds-management-improvements.md) |
| Datadog Rx Dashboard | [Rx on VA.gov](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov) |
| GA4 Renewal Event Tracking | [GA4 exploration](https://analytics.google.com/analytics/web/#/analysis/a50123418p418218150/edit/etkIBLZyTDevzFP07tdiQA) |
| Figma Designs (MMI) | [Working file - MHV Medications](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/) |

---

## How we use each tool

Every metric in this plan maps to one of the tools below. The simple rule:

- **"Did the user click this thing?"** Use **GA4** (tracks individual clicks and interactions)
- **"How did the user move through the site? How fast did pages load? Where did they leave?"** Use **Datadog RUM** (tracks full user sessions, page-to-page movement, load times)
- **"Is the backend working?"** Use **Datadog APM / Monitors** (tracks API health, errors, speed)
- **"What is the user telling us in their own words?"** Use **Medallia / VSignals** (surveys, feedback, satisfaction scores)
- **"What do the big-picture numbers look like for leadership?"** Use **DOMO** (rolls everything up into dashboards)

| Tool | What it does | Examples |
|---|---|---|
| **GA4** | Tracks individual user interactions like clicks, selections, and submissions | Button clicks, link clicks, filter and sort selections, checkbox use, print/download actions |
| **Datadog RUM** | Tracks full user sessions across pages, including page load speed, how users move between pages, how far they scroll, and where they leave | Entry to refill completion flow, cross-page navigation paths, page exit rates, time on page, page load speed |
| **Datadog APM / Monitors** | Tracks backend API health, including whether requests succeed or fail and how fast they respond. Sends real-time alerts when things break. | Refill API success/failure, medications list load speed, in-progress data errors |
| **Medallia / VSignals** | Captures what Veterans say in their own words through surveys and feedback buttons. Also provides satisfaction scores (CSAT). | Findability complaints, status confusion, print/download issues, overall satisfaction |
| **DOMO** | Pulls data from multiple sources into dashboards for stakeholders and leadership | CSAT trends over time, refill volume, call center volume, Medallia summaries |
| **Oracle SQL** | Source data for prescription transactions. Feeds into DOMO. | Total fills/refills, total unique Veterans who filled |

---

## MMI page architecture and URLs

```
/my-health                              - MHV Landing Page (entry point)
  /my-health/medications                - Medications landing / Refills page (top task)
    /my-health/medications/in-progress  - NEW: refill status tracking
    /my-health/medications/history      - Medication History (filter, sort, print/download)
```

---

## Medications KPIs

These are the core KPIs for the Medications product, organized by the VA.gov KPI categories: Ease of Use, Service Completion, Trust/Satisfaction, and Health.

| # | KPI | Category | Baseline | Target | Where the data comes from | Where we report it |
|---|-----|----------|----------|--------|---------------------------|---------------------|
| 1 | Refill task completion rate | Ease of Use | TBD | TBD | Datadog RUM (funnel) | Datadog |
| 2 | Total fills/refills on VA.gov | Service Completion | TBD | TBD | Oracle SQL | DOMO |
| 3 | Total unique Veterans who filled 1 or more Rx | Service Completion | TBD | TBD | Oracle SQL | DOMO |
| 4 | CSAT score for the medications app | Trust / Satisfaction | TBD | TBD | Medallia | DOMO |
| 5 | Volume of Rx-related findability complaints in Medallia | Trust / Satisfaction | TBD | TBD | Medallia | DOMO |
| 6 | Volume of Rx-related call center contacts | Trust / Satisfaction | TBD | TBD | Salesforce | DOMO |
| 7 | In-progress page adoption (unique users per week) | Ease of Use | N/A (new page) | TBD | Datadog RUM | Datadog |
| 8 | Print/download completion rate on history page | Service Completion | TBD | TBD | GA4 (event count) | GA4 |
| 9 | API error rate for refill submissions | Health | TBD | Less than 1% | Datadog APM | Datadog |
| 10 | Page load performance (LCP) across meds pages | Health | TBD | Under 2 seconds | Datadog RUM | Datadog |

### How we will capture baselines

- **KPIs 2, 3, 5, 6:** Pull current values from existing DOMO, Medallia, Salesforce, and Oracle data before launch or within the first 2 weeks.
- **KPIs 1, 4, 7, 8:** These involve new pages or new tracking. The first 30 days of data will set the baseline.
- **KPIs 9, 10:** Engineering to confirm current values from the Datadog Rx dashboard.

### Who fills in the TBDs

The TBD values in this table are intentional. This plan defines **what** to measure. The next step is for the team to fill in **where we are now** (baselines) and **where we want to be** (targets). Here is who owns what:

| What needs to be filled in | Who owns it | How they get it |
|---|---|---|
| **Baselines for KPIs 2, 3** (refill volume, unique Veterans) | Analytics / Data (Anne Kennedy has Oracle SQL access) | Run existing Oracle SQL queries and record current values |
| **Baselines for KPIs 4, 5** (CSAT, Medallia complaint volume) | UX team | Pull current values from Medallia and DOMO dashboards |
| **Baseline for KPI 6** (call center volume) | UX team | Pull current Rx-related contact volume from Salesforce via DOMO |
| **Baselines for KPIs 9, 10** (API error rate, page load speed) | Engineering | Pull current values from the Datadog Rx dashboard |
| **Baselines for KPIs 1, 7, 8** (refill completion rate, in-progress adoption, print/download rate) | UX team | These are new pages and new tracking. No baseline exists yet. Use the first 30 days of data after launch. |
| **Targets for all KPIs** | Product (Kay Lawyer, PO) with input from stakeholders (Dr. Spahn) and the team | Product decision. Example: "Improve CSAT by 5 points" or "Keep API error rate under 1%." These should be set before or shortly after launch. |

---

## Page-level monitoring

Each section below walks through **what the user does on the page**, **what we want to track**, **which tool tracks it**, and **whether it exists today or needs dev work**.

### Tracking status key

| Icon | Meaning |
|---|---|
| ✅ | Already tracked or available out of the box |
| 🔧 | **Needs dev work** to create a custom event, monitor, or configuration |
| ⚠️ | Partially tracked or needs confirmation |

---

### MHV Landing Page (`/my-health`)

**What happens here:** Veterans land on the MHV portal and choose how to get into the medications experience. There are two paths: the "Medications" tab in the secondary nav at the top, or the links inside the Medications card on the page ("Refill VA prescriptions" and "Review medications").

**Why we care:** Knowing which path Veterans use to enter meds tells us how they orient on this page, which helps inform future design and navigation decisions.

#### GA4 - Click events

| # | What the user does | What we track | Event name | Status |
|---|---|---|---|---|
| L1 | Clicks "Medications" in the 2nd-level nav | Nav entry click count | `navigation_click` with params: `nav_section: "secondary_nav"`, `link_text: "Medications"` | 🔧 Custom event |
| L2 | Clicks "Refill VA prescriptions" in the Medications card | Card link click | `cta_click` with params: `component: "medications_card"`, `link_text: "Refill VA prescriptions"` | 🔧 Custom event |
| L3 | Clicks "Review medications" in the Medications card | Card link click | `cta_click` with params: `component: "medications_card"`, `link_text: "Review medications"` | 🔧 Custom event |

#### Datadog RUM - Sessions and flow

| # | What we track | Details | Status |
|---|---|---|---|
| L4 | Page views and unique sessions on `/my-health` | How much traffic is the MHV landing page getting? | ✅ Existing |
| L5 | Funnel: `/my-health` to `/my-health/medications` | What percentage of MHV landing page visitors navigate into meds? How many drop off before entering? | ⚠️ RUM funnel may need setup |
| L6 | Entry path split: nav vs. card | What ratio of sessions enter meds via the secondary nav vs. the card links? Uses GA4 events L1 through L3 combined with RUM session data for full picture. | 🔧 Depends on L1 through L3 GA4 events being built first |

---

### Medications / Refills (`/my-health/medications`)

**What happens here:** This is the **new medications landing page** and the main place Veterans go to refill prescriptions. Veterans see a list of medications that are ready for refill, select one or more using checkboxes, and click "Request refills." They can also navigate to in-progress medications or medication history from here.

**Why we care:** Refill is the number one task in medications. The completion rate on this page is our most important behavioral KPI.

#### GA4 - Click events

| # | What the user does | What we track | Event name | Status |
|---|---|---|---|---|
| R1 | Uses the "Select all N refills" checkbox | How often do users select all vs. picking individual meds? | `select_all_refills` with params: `count: N` | 🔧 Custom event |
| R2 | Selects an individual medication checkbox | Which medications are being selected? | `medication_selected` with params: `medication_name: "..."` | 🔧 Custom event |
| R3 | Clicks the "Request refills" button | How many refills are being submitted? | `refill_request_submitted` with params: `medication_count: N` | 🔧 Custom event, **Critical** |
| R4 | Clicks "Go to your in-progress medications" link | How often do users navigate from refills to in-progress? | `navigation_click` with params: `link_text: "Go to your in-progress medications"`, `source_page: "/medications"` | 🔧 Custom event |
| R5 | Clicks "Review and print list of medications" link | How often do users navigate from refills to history? | `navigation_click` with params: `link_text: "Review and print list of medications"`, `source_page: "/medications"` | 🔧 Custom event |
| R6 | Clicks "Go to your list of renewable medications" link | How often do users look for renewable meds? | `cta_click` with params: `link_text: "Go to your list of renewable medications"` | 🔧 Custom event |

#### Datadog RUM - Sessions, flow, and performance

| # | What we track | Details | Status |
|---|---|---|---|
| R7 | Page views and unique sessions | How much traffic is the refills page getting? | ✅ Existing |
| R8 | Funnel: page view to refill submitted | **KPI #1.** What percentage of users who land on this page actually submit a refill? | 🔧 Needs R3 GA4 event plus RUM funnel config |
| R9 | Page exit without submitting a refill | How many users leave without completing a refill? | ⚠️ RUM exit analysis may need setup |
| R10 | Page load speed (LCP, FCP) | How fast does the refills page load? | ✅ Existing |

#### Datadog APM - API health

| # | What we track | Details | Status |
|---|---|---|---|
| R11 | Refill API success and error rate | Is the refill endpoint returning errors? | ⚠️ Confirm this endpoint is being monitored |
| R12 | Refill API speed | How fast is the refill endpoint responding? (p50, p95, p99) | ⚠️ Confirm this endpoint is being monitored |

#### Medallia - Feedback

| # | What we track | Details | Status |
|---|---|---|---|
| R13 | CSAT on `/my-health/medications` | Satisfaction score and open-text responses about the refill experience | ⚠️ Confirm survey URL is registered |
| R14 | Findability complaints | Veterans saying they cannot find the refill feature | ⚠️ Manual review of open-text feedback |
| R15 | Refill vs. renewal confusion | Veterans who do not understand the difference between refilling and renewing | ⚠️ Manual review of open-text feedback |

#### DOMO - Aggregated reporting

| # | Metric | Source | How often |
|---|---|---|---|
| R16 | Total fills/refills on VA.gov (**KPI #2**) | Oracle SQL | Weekly pull, monthly dashboard |
| R17 | Total unique Veterans who filled 1 or more Rx (**KPI #3**) | Oracle SQL | Weekly pull, monthly dashboard |
| R18 | CSAT trend for `/my-health/medications` (**KPI #4**) | Medallia | Monthly rollup |

---

### In-Progress Medications (`/my-health/medications/in-progress`)

**What happens here:** This is a **brand-new page**. After requesting a refill, Veterans come here to see where their medications are in the process. The page shows three status sections in order: (1) Request submitted, (2) Fill in progress, (3) Medication shipped. Shipped medications have a "Get tracking info" link. Some medications may show a "Too early to refill, no action needed" alert.

**Why we care:** This page directly addresses the second biggest user complaint: not being able to find out what is happening with a refill after requesting it. We need to watch adoption (are people finding and using this page?) and comprehension (do they understand the statuses?).

#### GA4 - Click events

| # | What the user does | What we track | Event name | Status |
|---|---|---|---|---|
| P1 | Clicks "Get tracking info" on a shipped medication | Are Veterans engaging with tracking links? | `tracking_info_click` with params: `medication_name: "..."` | 🔧 Custom event |
| P2 | Clicks "Review and print list of medications" or "Refill medications" links at top | Are Veterans navigating to other meds pages from here? | `navigation_click` with params: `link_text: "..."`, `source_page: "/medications/in-progress"` | 🔧 Custom event |
| P3 | Clicks "Go to your list of allergies and reactions" in the Need Help section | Are Veterans using the help links? | `help_link_click` with params: `link_text: "Go to your list of allergies and reactions"` | 🔧 Custom event |

#### Datadog RUM - Sessions, flow, and performance

| # | What we track | Details | Status |
|---|---|---|---|
| P4 | Page views and unique sessions (**KPI #7**) | How many Veterans are using this new page each week? | ✅ Available once page ships |
| P5 | Scroll depth and section visibility | Did the Veteran scroll far enough to see all 3 status sections? This tells us if important info at the bottom is being missed. | 🔧 RUM scroll tracking config needed |
| P6 | Time spent on page | Are Veterans spending meaningful time reading the status info, or are they leaving quickly? | ✅ Existing |
| P7 | Page exit rate | How many users leave the meds experience entirely from this page? | ⚠️ RUM exit analysis may need setup |
| P8 | Page load speed (LCP, FCP) | How fast does the in-progress page load? | ✅ Available once page ships |

#### Datadog APM - API health

| # | What we track | Details | Status |
|---|---|---|---|
| P9 | In-progress Rx data API speed and errors | This is a new endpoint that returns in-progress prescription data. We need to monitor how fast it responds and whether it returns errors. | 🔧 New endpoint, needs a monitor |
| P10 | "Too early to refill" status count | How often does the API return this status? Tells us how many Veterans are seeing this alert. | 🔧 Needs backend logging |

#### Medallia - Feedback

| # | What we track | Details | Status |
|---|---|---|---|
| P11 | Status comprehension | Do Veterans understand the three steps: Request submitted, Fill in progress, Medication shipped? | 🔧 Survey URL config needed for `/medications/in-progress` |
| P12 | Timeline confusion | Are Veterans saying they do not understand how long each step takes? | ⚠️ Manual review of open-text feedback |
| P13 | "Too early to refill" confusion | Is this alert causing frustration? Look for words like "too early", "can't refill", "won't let me" | ⚠️ Manual review of open-text feedback |

#### DOMO - Aggregated reporting

| # | Metric | Source | How often |
|---|---|---|---|
| P14 | In-progress page unique users per week (**KPI #7**) | Datadog RUM | Weekly |
| P15 | Total medications tracked on VA.gov | Oracle SQL | Weekly pull, monthly dashboard |

---

### Medication History (`/my-health/medications/history`)

**What happens here:** Veterans see a list of all their medications, which they can filter and sort. Filter options include Active medications, Renewal needed before refill, Inactive medications, and All medications. They can sort by options like "Most recently filled." Each medication card can show status badges, a "Request refill" button, a "Send a renewal request message" link, or a "Get tracking info" link depending on the med's status. At the bottom of the page, Veterans can print or download a copy of their filtered and sorted list.

**Why we care:** This page addresses long-standing complaints about the medications list being overwhelming and Veterans not being able to easily print or view just their current medications for provider appointments. Filter/sort adoption and print/download completion are the key signals here.

#### GA4 - Click events

| # | What the user does | What we track | Event name | Status |
|---|---|---|---|---|
| H1 | Selects a filter option (Active, Renewal needed, Inactive, All) | Which filters do Veterans use most? | `filter_applied` with params: `filter_value: "active"` or `"renewal_needed"` or `"inactive"` or `"all"` | 🔧 Custom event |
| H2 | Clicks "Update list" button | How often do Veterans apply a filter? | `filter_submitted` | 🔧 Custom event |
| H3 | Changes the sort dropdown (e.g., "Most recently filled") | Which sort options do Veterans prefer? | `sort_applied` with params: `sort_value: "most_recently_filled"` or other values TBD | 🔧 Custom event |
| H4 | Uses "Print or download medications list" | How many Veterans are printing or downloading? (**KPI #8**) | `print_download` with params: `action: "print"` or `"download"`, `format: "PDF"` or TBD | 🔧 Custom event, **Critical** |
| H5 | Clicks an individual medication name (e.g., "Benadryl 50mg") | How often do Veterans click into medication details? | `medication_detail_click` with params: `medication_name: "..."` | 🔧 Custom event |
| H6 | Clicks "Request refill" on a medication card | How often do Veterans start a refill from the history page? | `refill_request_from_history` with params: `medication_name: "..."` | 🔧 Custom event |
| H7 | Clicks "Send a renewal request message" | How often do Veterans start a renewal from the history page? | `renewal_request_click` with params: `medication_name: "..."` | ⚠️ May overlap with the [renewal monitoring plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/rollout-monitoring-coordination-Meds-SM-renewal-flow/meds-sm-renewal-monitoring-plan.md). Confirm before building. |
| H8 | Clicks "Go to in-progress medications" status badge link | How often do Veterans navigate from history to in-progress? | `navigation_click` with params: `link_text: "Go to in-progress medications"` | 🔧 Custom event |
| H9 | Clicks "Get tracking info" on a shipped-status badge | How often do Veterans check tracking from the history page? | `tracking_info_click` with params: `medication_name: "..."` | 🔧 Custom event |

#### Datadog RUM - Sessions, flow, and performance

| # | What we track | Details | Status |
|---|---|---|---|
| H10 | Page views and unique sessions | How much traffic is the history page getting? | ✅ Available once page ships |
| H11 | Page load speed (LCP, FCP) | How fast does the history page load, especially with a long medications list? | ✅ Available once page ships |
| H12 | Time spent on page | Are Veterans spending meaningful time reviewing their list? | ✅ Existing |
| H13 | Page exit rate | Where do Veterans go after viewing history? Back to refills? Leave the site? | ⚠️ RUM exit analysis may need setup |

#### Datadog APM - API health

| # | What we track | Details | Status |
|---|---|---|---|
| H14 | Medications list API speed | How fast does the endpoint that returns the full medications list respond? | ⚠️ Confirm this endpoint is being monitored |
| H15 | Medications list API error rate | Is the endpoint returning errors when trying to load the list? | ⚠️ Confirm this endpoint is being monitored |

#### Medallia - Feedback

| # | What we track | Details | Status |
|---|---|---|---|
| H16 | Feedback button responses | The "Feedback" button at the bottom right triggers a Medallia survey | 🔧 Survey URL config needed for `/medications/history` |
| H17 | Filter and sort comprehension | Can Veterans figure out how to narrow the list? Look for words like "filter", "sort", "find", "can't find" | ⚠️ Manual review of open-text feedback |
| H18 | List overwhelm | Are Veterans saying the list is too long or confusing? Look for words like "too many", "overwhelming", "old medications" | ⚠️ Manual review of open-text feedback |
| H19 | Print/download usability | Are Veterans having trouble printing or downloading? Look for words like "print", "download", "PDF" | ⚠️ Manual review of open-text feedback |

#### DOMO - Aggregated reporting

| # | Metric | Source | How often |
|---|---|---|---|
| H20 | CSAT for `/my-health/medications/history` (**KPI #4**) | Medallia | Monthly rollup |
| H21 | Print/download volume trend | GA4 | Weekly |
| H22 | Filter usage distribution trend | GA4 | Weekly |
| H23 | Total medications tracked on VA.gov | Oracle SQL | Weekly pull, monthly dashboard |

---

## Cross-page funnels and flows

These track how Veterans move across multiple pages in a single session. They help us understand whether the overall MMI page structure is working as intended.

**Funnels and session flows use Datadog RUM** because they need to stitch together multiple page visits within a single user session. GA4 is used only when we are comparing counts of individual click events, not tracking movement between pages.

| What we are measuring | Steps in the flow | What it tells us | Tool | Status |
|---|---|---|---|---|
| **Entry to refill completion** | `/my-health` to `/medications` to refill submitted | Can Veterans get from the MHV landing page all the way through submitting a refill? | **Datadog RUM** | 🔧 RUM funnel config needed |
| **Refill to in-progress check** | Refill submitted to `/medications/in-progress` | After requesting a refill, do Veterans go check the in-progress page? | **Datadog RUM** | 🔧 RUM funnel config needed |
| **Cross-page navigation** | Any meds page to any other meds page in the same session | How do Veterans move between the three meds pages? Are they finding their way or getting lost? | **Datadog RUM** | 🔧 RUM pathing analysis needed |
| **Entry path split** | Compare GA4 click counts: `navigation_click` (secondary nav) vs. `cta_click` (medications card) | Which entry point do more Veterans use? Informs future navigation decisions. | **GA4** (comparing individual click event counts, not session flow) | 🔧 Needs L1 through L3 GA4 events |
| **History to action** | On `/medications/history`, did the user click "Request refill" or "Send a renewal request message"? | Are Veterans finding and using the action buttons on the history page? | **GA4** (checking whether specific click events fire on a specific page) | 🔧 Needs H6 and H7 GA4 events |

---

## Renewal flow monitoring

The renewal flow ("Send a renewal request message") has its own detailed monitoring plan: [Meds to SM Renewal Monitoring Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/rollout-monitoring-coordination-Meds-SM-renewal-flow/meds-sm-renewal-monitoring-plan.md). That plan covers GA4 events, Datadog monitors, and Medallia/VSignals configuration for the full Meds to Secure Messaging round-trip.

**What this document adds:** Tracking for renewal clicks that start from the history page (H7). Before building this event, confirm with the renewal monitoring plan owners that it does not duplicate something already in place.

---

## Thresholds and alerts

### Real-time alerts (Datadog)

These fire automatically and need immediate attention.

| What triggers the alert | Datadog monitor type | Threshold | What to do |
|---|---|---|---|
| Refill API error rate spike | APM | More than 2% errors over 15 minutes | Page on-call engineer. Post in `#mhv-medications-devs`. |
| Any meds page loads too slowly | RUM | LCP over 3 seconds for more than 5 minutes | Engineering investigates. Notify engineering lead. |
| In-progress page data API errors | APM | More than 5% error rate for more than 10 minutes | Engineering investigates. Post in `#mhv-medications-devs`. |
| Medications list API errors (history page) | APM | More than 5% error rate for more than 10 minutes | Engineering investigates. |
| Print/download failures | APM | Any sustained errors for more than 5 minutes | Engineering investigates. |

### Regular cadence reviews (not real-time)

These are checked on a schedule during normal reporting.

| What we are watching for | Tool | Threshold | How often we check | What to do |
|---|---|---|---|---|
| Sudden drop in refill submissions | GA4 + Datadog RUM | More than 30% drop week over week | Weekly | Investigate whether it is a UX issue or a backend issue. Notify Product. |
| Spike in negative Medallia feedback | Medallia | More than 2x the average daily negative comments | Daily triage | UCD team reviews. Escalate if the pattern continues more than 2 days. |
| CSAT score decline | DOMO | More than 5-point drop month over month | Monthly | Root-cause analysis. Brief stakeholders. |

---

## Monitoring cadence and reporting

| Activity | How often | Who owns it | What gets produced | Who sees it |
|---|---|---|---|---|
| GA4 event review (click data) | Weekly | UX team | Snapshot posted in `#mhv-medications-rx` | Meds team |
| Datadog RUM review (funnels, performance) | Weekly | Engineering / UX | Dashboard review and funnel trends | Engineering team, Product |
| Datadog APM alert response | Ongoing, real-time | Engineering | Alert response per thresholds above | Engineering team |
| Medallia triage (daily scan) | Daily | UX team | Flag patterns as they come up | Meds team, Product |
| Medallia sentiment report | Weekly | UX team | Themes posted in `#mhv-medications-rx` and logged in Mural | Product, UCD, Stakeholders |
| DOMO dashboard review | Monthly | UX team | CSAT, refill volume, call center volume review | Stakeholders (OCC, Dr. Spahn) |
| Full KPI scorecard | Monthly | Product (Kay Lawyer) | KPI scorecard shared with stakeholders | OCC, MHV leadership |
| Monitoring plan update | Quarterly | Product + UX + Engineering | Updates to this document | Meds team |

---

## Roles and responsibilities

| Role | What they own |
|---|---|
| **Product (Kay Lawyer, PO)** | Sets KPI targets with stakeholder input. Reviews the monthly KPI scorecard. Escalates findings to stakeholders. Owns quarterly updates to this plan. |
| **UX / UCD (Robyn Singleton + team)** | Owns ongoing monitoring of GA4 click data, Medallia feedback, and DOMO dashboards (weekly and monthly reviews). Does daily Medallia triage. Writes weekly sentiment reports. Pulls baselines for KPIs 4, 5, and 6 from Medallia and DOMO. Flags UX patterns to Product and Engineering. Does **not** own the technical setup of GA4 events, Datadog monitors, or Medallia survey configuration. |
| **Engineering** | Builds all custom GA4 events listed in the [dev work section](#dev-work-needed). Sets up Datadog RUM funnels and APM monitors. Configures Medallia survey URLs for new pages. Responds to real-time Datadog alerts. Owns API reliability. Pulls baselines for KPIs 9 and 10 from Datadog. |
| **Analytics / Data** | Pulls Oracle SQL data weekly (Anne Kennedy has access). Maintains DOMO dashboards and data pipelines. Pulls baselines for KPIs 2 and 3 from Oracle SQL. Supports GA4 exploration setup when needed. Produces monthly KPI scorecard data for Product. |
| **Stakeholders (Dr. Spahn, OCC)** | Reviews monthly KPI scorecard. Provides clinical context for interpreting the numbers. Approves KPI targets set by Product. |

---

## Dev work needed

Everything marked 🔧 in the page-level sections above is listed here so engineering can scope tickets.

### GA4 custom events to build

These are individual click and interaction events that need to be added to the front end.

| Ref | Event name | Parameters | Page | Priority |
|---|---|---|---|---|
| L1 | `navigation_click` | `nav_section: "secondary_nav"`, `link_text: "Medications"` | `/my-health` | High |
| L2 | `cta_click` | `component: "medications_card"`, `link_text: "Refill VA prescriptions"` | `/my-health` | High |
| L3 | `cta_click` | `component: "medications_card"`, `link_text: "Review medications"` | `/my-health` | High |
| R1 | `select_all_refills` | `count: N` | `/medications` | Medium |
| R2 | `medication_selected` | `medication_name: "..."` | `/medications` | Medium |
| R3 | `refill_request_submitted` | `medication_count: N` | `/medications` | **Critical** |
| R4 | `navigation_click` | `link_text: "Go to your in-progress medications"`, `source_page: "/medications"` | `/medications` | Medium |
| R5 | `navigation_click` | `link_text: "Review and print list of medications"`, `source_page: "/medications"` | `/medications` | Medium |
| R6 | `cta_click` | `link_text: "Go to your list of renewable medications"` | `/medications` | Medium |
| P1 | `tracking_info_click` | `medication_name: "..."` | `/medications/in-progress` | Medium |
| P2 | `navigation_click` | `link_text: "..."`, `source_page: "/medications/in-progress"` | `/medications/in-progress` | Low |
| P3 | `help_link_click` | `link_text: "Go to your list of allergies and reactions"` | `/medications/in-progress` | Low |
| H1 | `filter_applied` | `filter_value: "active"` or `"renewal_needed"` or `"inactive"` or `"all"` | `/medications/history` | High |
| H2 | `filter_submitted` | (none) | `/medications/history` | High |
| H3 | `sort_applied` | `sort_value: "most_recently_filled"` or other values TBD | `/medications/history` | High |
| H4 | `print_download` | `action: "print"` or `"download"`, `format: "PDF"` or TBD | `/medications/history` | **Critical** |
| H5 | `medication_detail_click` | `medication_name: "..."` | `/medications/history` | Medium |
| H6 | `refill_request_from_history` | `medication_name: "..."` | `/medications/history` | Medium |
| H8 | `navigation_click` | `link_text: "Go to in-progress medications"` | `/medications/history` | Low |
| H9 | `tracking_info_click` | `medication_name: "..."` | `/medications/history` | Low |

> **Note on H7 (`renewal_request_click`):** Check with the renewal monitoring plan owners to see if this event already exists before building a duplicate.

### Datadog RUM funnels and config to set up

| Ref | What to configure | Details | Priority |
|---|---|---|---|
| L5 | Funnel: `/my-health` to `/medications` | How many MHV landing page visitors make it into meds? | Medium |
| R8 | Funnel: `/medications` page view to refill submitted | Refill task completion rate. **KPI #1.** | **Critical** |
| P5 | Scroll depth tracking on `/medications/in-progress` | Did the user see all 3 status sections? | Medium |
| (cross) | Funnel: entry to refill to in-progress check | Full user journey across MMI pages | High |
| (cross) | Pathing analysis across all 3 meds pages | How do Veterans navigate between refills, in-progress, and history? | Medium |

### Datadog APM monitors to create or confirm

| Ref | What to monitor | Endpoint or details | Priority |
|---|---|---|---|
| R11, R12 | Refill API success/error rate + speed | Refill submission endpoint. May already be monitored. | **Critical**, confirm first |
| P9 | In-progress Rx data API | New endpoint serving in-progress prescription data. Speed and error rate. | High |
| P10 | "Too early to refill" status logging | Backend logging of how often this status is returned by the API | Medium |
| H14, H15 | Medications list API speed + error rate | Endpoint returning the full medications list. May already be monitored. | High, confirm first |

### Medallia / VSignals configuration needed

| Ref | What to configure | Page | Priority |
|---|---|---|---|
| R13 | Confirm intercept survey URL is registered | `/my-health/medications` | High |
| P11 | Register intercept survey and feedback button | `/my-health/medications/in-progress` (new page) | High |
| H16 | Register feedback button survey | `/my-health/medications/history` (new page) | High |
| H20 | CSAT data pipeline from Medallia to DOMO | Make sure DOMO pulls in per-URL CSAT for `/medications/history` | Medium |

---

## Review schedule

| Review | When | What we look at |
|---|---|---|
| **Post-launch check-in** | 1 week after launch | Early signals: API errors, dropoffs, negative feedback, page load issues |
| **First full cycle review** | 30 days after launch | Set baselines for all KPIs. First CSAT read. New page adoption numbers. |
| **Quarterly review** | Every 90 days | Are the metrics still the right ones? Do thresholds need to change? Are there new features to add? **Update this document.** |
| **Annual review** | Yearly | Does this plan still align with the broader MHV and VA.gov analytics strategy? Any tooling changes? |

---

## Document history

| Date | Author | Change |
|---|---|---|
| 2026-03-23 | @athenabozak | Initial draft |
| | | |
