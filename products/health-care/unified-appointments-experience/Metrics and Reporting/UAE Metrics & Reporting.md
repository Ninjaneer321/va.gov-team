# UAE Reporting & Analytics Resources

This page is the central reference for all reporting and analytics resources used by the UAE team. The tools and resources listed throughout this page are used for monthly reporting and creating the visualizations used in the IVC demo presentations. Additionally, this will list some of the commonly used web analytics and backend monitoring resources, but will not be all encompassing. For any missing resources or questions, please contact the appropriate product team or the Tyler Spangler.

---

## Table of Contents

- [New Here? Start Here](#new-here-start-here)
- [Resources Overview](#resources-overview)
  - [Monthly Metrics Excel (SharePoint)](#monthly-metrics-excel-sharepoint)
  - [Power BI — UAE  Metrics App](#power-bi--uae-metrics-app)
  - [Power BI — MHV Patient Portal and Design Workspace](#power-bi--mhv-patient-portal-and-design-workspace)
  - [Monthly IVC Demo Presentations (PowerPoint)](#monthly-ivc-demo-presentations)
  - [Google Analytics](#google-analytics)
  - [DataDog](#datadog)
  - [Corporate Data Warehouse (CDW)](#cdw)
- [Access & Permissions](#access--permissions)
- [Glossary](#glossary)

---

## New Here? Start Here

If you're new to the team or just getting oriented with our reporting resources, follow these steps:

1. **Request access** to the core tools (see [Access & Permissions](#access--permissions)) — start with SharePoint and Power BI as these are used most frequently. Additionally, additional access may be needed if you need to view PII/PHI data. That will require additional approvals, so please start that as soon as the need is identified.
2. **Bookmark the key links** listed in each section below.
3. **Review the Monthly Metrics Excel** to understand what data is tracked and how it's structured.
4. **Explore the UAE Monthly Metrics Power BI App** for additional metrics that are not tracked specifically in the Excel.
5. **Note the update cadence** — the monthly metrics that are not available in Power BI will need to be updatedin Excel by the second of each month. The IVC presentations listed below will be pre-briefed at the UAE Metrics sync the third Tuesday of each month.

---

## Resources Overview

### Monthly Metrics Excel (SharePoint)

**What it is:** This is the original file used to track all UAE metrics. There are three sheets with the current metrics tracked in Excel in *Reporting Metrics*. This is not necessarily all metrics that UAE reports as some are also available in Power BI. The second sheet is *Technical Reporting Metrics* which tracks latency, errors, and downtime for all applications in the portfolio. The final sheet, *Historical* shows the metrics that are no longer tracked in Excel and have been moved to Power BI.


**Link: [UAE Monthly Metrics - MHV Sharepoint](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7BC95CA18B-BA4A-4913-BA21-0545E72D2CC9%7D&file=UAE%20metrics.xlsx&action=default&mobileredirect=true)**

**Tips:**
- If you notice a discrepancy with the metric or the source, flag it to the appropriate product team or Tyler Spangler, before using the data in a presentation.

---

> **Power BI Concepts/Terms Used In Following Sections**
> - **Report** — A single visualization or set of visualizations built on a single data model.
> - **Workspace** — A shared environment where reports and data models are stored and managed. Access is more restricted.
> - **App** — A curated, read-only set of selected reports published from a workspace for broader consumption.
> - **Power BI Training** - VA has published Power BI trainings posted on [Sharepoint](https://dvagov.sharepoint.com/sites/oitpdscdwpowerbi/SitePages/Power-BI-Training.aspx).

---
### Power BI — UAE Metrics App

**What it is:** A curated Power BI app providing a consolidated, visual dashboard of UAE's key monthly metrics. This provides visualizations for many metrics that were previously only reported in Excel. This application includes most of the individual reports in the Power BI workspace detailed below. Each report may have a different data model for the visualizations and most custom data models have a readme included in the report. Most of the reports are built on pre-existing data models built by other teams (i.e. VTP for travel, VSSC for appointments, etc).

**Link: [UAE Metrics Power BI App](https://app.powerbigov.us/groups/me/apps/97ce032e-3364-4f55-bdca-a37510b8ba6e/reports/46f8fac2-01c0-4dab-8241-64c8418cba39/f4c021dc785315dd8634?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)**

**Tips:**
- Use the built-in filters to slice by time period or other available fields. Most include a date filter, so ensure it is inclusive of the dates you are analyzing.
- Each individual report could have a different update cadence. At the top of each report in the app, there is a date that shows when the data was last updated.
- If a visual looks off or a metric seems unexpected, please reach out to Tyler Spangler.

---

### Power BI — MHV Patient Portal and Design Workspace

**What it is:** This stores all individual reports and data models that are included in the app. There could be additional reports that are no longer used or in-progress. There could also be reports that might be team specific or not reported monthly.


**Link: [MHV Patient Portal and Design Workspace](https://app.powerbigov.us/groups/579eff14-3a9e-45e6-8cde-6770ee9ae2e4/list?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)**

**Tips:**
- Access to the workspace is more restricted than the app — see [Access & Permissions](#access--permissions).

---

### Monthly IVC Demo Presentations

**What it is:** These are monthly presentations that need to be prepared by the third Tuesday of each month. Visualizations are copied and pasted from the Power BI app or individual report in the workspace. The visualizations will be reviewed at the UAE metrics sync on the third Tuesday of each month and then presented to VA leadership on the third thursday of each month.

**How to update**
The visualizations used in the metrics portions are generated in Power BI in the above workspace. There are some that require manual updating in the excel file [IVC Metrics](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/Appointments/IVC%20Monthly%20Demo/Metrics%20Data?csf=1&web=1&e=8zYUTO), but the rest are updated automatically from underlying Power BI models. After updating the metrics in the excel file, you can refresh this model by selecting refresh on the [Power BI page](https://app.powerbigov.us/groups/579eff14-3a9e-45e6-8cde-6770ee9ae2e4/datasets/c59f1df0-01c5-45de-9213-0d06ea2395dd/details?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf) for the model. After refreshing this model, the visualizations will update in the appropriate report. For any questions, please contact Tyler Spangler. Additionally, if there are any additional requests for visualization or metrics, please notify Tyler Spangler ahead of time to allow time to prepare new slides.

**Link: [Appointments IVC Monthly Demo Slides](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/Appointments/IVC%20Monthly%20Demo?csf=1&web=1&e=O3Gscn)**
**Link: [Travel Pay IVC Monthly Demo Slides](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/TravelPay/IVC%20Monthly%20Demos?csf=1&web=1&e=Ot2Qwk)**

---

### Google Analytics

**What it is:** There are various Google Analytics reports that teams build for one time analyses or recurring reports. Additionally, there is some web traffic data in Power BI that is updated daily. The table below contains some reports team use periodically for reporting or analyses. Most GA metrics have been pulled into Power BI to analyze conversion rates, submissions, and page views for Appointments applications. As teams build more or if any recurring reports are requested, please add them to the table.

**Google Analytic Reports**
|Team | Title | Description | Link |
|-----|-------|-------------|------|
|Appointments | Web Users | Monthly totals for unique users for Appointments on VA.gov. <br> Used in IVC Monthly Demo presentations | [Web Users](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/XHK_fSR6QQOnRdrLO-4k_Q) |
|Appointments | VAHB Users | Monthly totals for unique users for Appointments on VAHB. <br> Used in IVC Monthly Demo presentations | [VAHB Users](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/analysis/a50123418p265787033/edit/v1DlIiPkS9qYZLA2GZcHJw)



**Tips:**
- This is a **real-time and historical** data source — no monthly refresh needed.
- The shared view is read-only. If you need a custom report or date range, you can create a copy of the report to provide additional fields or analyses. If the changes should be added to the recurring report, please contact the product team or report owner.

---

### DataDog

**What it is:** Shared DataDog dashboards for monitoring system health, infrastructure performance, and operational metrics.

**DataDog Dashboards**
| Team | Title | Description | Link |
|------|-------|-------------|------|
|UAE | UAE Performance Metrics | Consolidated dasbhoard displaying all monthly technical reporting metrics | [UAE Metrics](https://vagov.ddog-gov.com/dashboard/a4a-n8w-3p6/uae-performance-metrics?fromUser=false&refresh_mode=paused&from_ts=1772348400000&to_ts=1775023199999&live=false) |
| Hydra| PCI Metrics | Metrics associated with Pre-Check In, Check-in, and Travel Pay | [PCI Metrics](https://vagov.ddog-gov.com/dashboard/be6-5ki-272/pci-metrics?%3Bamp%3Bamp%3Blive=true&%3Bamp%3Bamp%3Brefresh_mode=sliding&%3Bamp%3Bamp%3Bto_ts=1734639371380&amp%3Bamp%3Bamp%3Bfrom_ts=1734635771380&fromUser=false&refresh_mode=sliding&from_ts=1775744790180&to_ts=1775748390180&live=true) | 
| Travel Pay | Travel Pay: Leadership Dashboard | Has metrics associated with Travel Pay submissions and Users | [Travel Pay: Leadership Dashboard](https://vagov.ddog-gov.com/dashboard/rhb-86m-7bc/travel-pay-leadership-dashboard?fromUser=false&refresh_mode=paused&from_ts=1772348400000&to_ts=1773813599999&live=false) |
| Travel Pay | Unique Users Log Query | Queries unique users for travel pay (VA.gov). <br> Will need to enable Flex Logs to pull logs more than 30 days old |[Log Query](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20%40http.url_details.path%3A%22%2Ftravel_pay%2Fv0%2Fcomplex_claims%22%20%40named_tags.dd.env%3Aeks-prod%20%40http.method%3APOST&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1775747793266&to_ts=1775748693266&live=true) |
| Travel Pay | Unique Users Log Query | Queries unique users for travel pay (VAHB). <br> Will need to enable Flex Logs to pull logs more than 30 days old |[Log Query](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20%40http.url_details.path%3A%22%2Fmobile%2Fv0%2Ftravel-pay%2Fclaims%22%20env%3Aeks-prod%20%40http.method%3APOST&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1775747793266&to_ts=1775748693266&live=true) |
|Travel Pay | Travel Pay: Complex Claims [Web] Dashboard | Metrics for complex claims application | [Travel Pay: Complex Claims](https://vagov.ddog-gov.com/dashboard/ns5-8df-49r/travel-pay-web-complex-claims-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1775745257179&to_ts=1775748857179&live=true) | 
| Hydra | VASS Metrics | Dashboard for all VASS metrics | [VASS - VA Solid Start](https://vagov.ddog-gov.com/dashboard/fw6-j3c-zns/vass-va-solid-start?fromUser=false&refresh_mode=sliding&from_ts=1775144016301&to_ts=1775748816301&live=true) | 


**Tips:**
- This is a **live/real-time** dashboard — data reflects current system state.
- Product teams/engineers are mostly responsible for updating logging and metrics in the codebase. Tyler Spangler can help add visualizations or understand metrics.

---
### CDW

**What it is:** Data warehouse with different environments. This is used to pull various appointment related data.

Most of the data in this warehouse is available through Power BI models managed by VSSC. SQL Queries can be used to pull appointments made/cancelled if the reports are down or not refreshing. Additionally, different filters can be included to verify information or different consults. 

**Links**:
- [CDW Factbooks](https://vaww.virec.research.va.gov/CDW/Documentation.htm#Factbooks) - these details the various tables/schemas that can be used to pull data from the database
- [SQL Queries](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/unified-appointments-experience/Metrics%20and%20Reporting) - queries that are used to pull UAE information mainly surrounding appointments and text messages

## Access & Permissions

All access requests should be directed to Tyler Spangler or report owner. This could depend on the source, but please start with Tyler and reach out with any questions.

| Resource | Access Type | How to Request |
|---|---|---|
| Monthly Metrics Excel (SharePoint) | View / Edit | Must be on VA network. [UAE Metrics](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Appointments/Analytics%20and%20Metrics/UAE%20metrics.xlsx?d=wc95ca18bba4a4913ba210545e72d2cc9&csf=1&web=1&e=deCPGu) |
| Power BI — UAE Monthly Metrics App | View | Request through the [application](https://app.powerbigov.us/groups/me/apps/97ce032e-3364-4f55-bdca-a37510b8ba6e/reports/46f8fac2-01c0-4dab-8241-64c8418cba39/f4c021dc785315dd8634?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf) or contact Tyler|
| Power BI — MHV Patient Portatl & Deisgn Workspace | View / Contributor | Can request through [workspace](https://app.powerbigov.us/groups/579eff14-3a9e-45e6-8cde-6770ee9ae2e4/list?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf) or contact Tyler Spangler|
| Monthly IVC Metrics Deck | View | See above for links |
| Google Analytics | View/Edit| [VA Platform Documentation](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/new-users-to-google-analytics) |
| DataDog | View/Edit | [VA Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog) |
| VSSC PHI/PII Requests | View | (Github UAE Metrics)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/analytics/requesting-access-to-vssc-vaos-report.md] |

>**Tip for new team members:** Request SharePoint and Power BI App access as your first priority — these cover the majority of day-to-day reporting needs.

## Glossary
| Acronym | Full Name |
|---------|-----------|
| IVC | Integrated Veteran Care |
| MHV | MyHealtheVet |
| PHI | Personal Health Information |
| PII | Personally Identifiable Information |
| UAE | Unified Appointment Experience|
| VSSC | VHA (Veteran Health Administration) Support Service Center |
| VTP | Veteran Transportation Program |
---
