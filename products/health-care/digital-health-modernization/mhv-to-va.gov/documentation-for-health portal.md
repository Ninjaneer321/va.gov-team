# My HealtheVet on VA.gov transition documentation (WIP) 

Last Update: March 10, 2025

## Summary

This document serves as a resource for future work, ensuring that our team and future contract teams can easily access critical information. 

## On this page

* [Background of the My HealtheVet transition](#background)
* [Directory of teams](#directoryofteams)
* [Where are we now? - Existing features](#existingfeatures)
* [Where are we going? - 2025 goals/key milestones](#2025goals)
* [High-level performance and adoption metrics for the health portal](#metrics)
* [Design and research resources](#design)
* [Engineering resources](#engineering) 
* [Quality Assurance](#QA)

## <a name="background"></a>Background of the My HealtheVet transition<be>

**Overview**

The My HealtheVet (MHV) project is part of the Health Modernization Initiative at the VA, operating within the Office of the CTO (OCTO). 

The My HealtheVet on VA.gov team’s mission is to simplify Veterans’ health experience on the web by consolidating all health things into a single health “home” on VA.gov, mirgating from [My HealtheVet classic](https://www.myhealth.va.gov/mhv-portal-web/home). 

Research from 2018, repeated in late 2020, shows that Veterans find it difficult to navigate commonplace interactions with VA health care. The VA ecosystem is so complex that veterans feel discouraged from applying for, managing, and maximizing their benefits.

While the team’s core responsibility focuses on the MHV landing page and Secondary Navigation, close collaboration with other teams ensures that Veterans have a seamless experience managing their healthcare in a single place. 

[See the full product brief here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/product-brief.md)

## <a name="directoryofteams"></a>Directory of teams<be>

The MHV to VA.gov initiative consists of several different products, each with its discrete product outlines and teams:

  - [MHV on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/product-brief.md) (overall initiative) 
  - [Secure Messaging](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)
  - [Medical Records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md)
  - [Medications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/README.md)
  - [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling)

## <a name="existingfeatures"></a>Where are we now? - Existing features<be>

### My HealtheVet on VA.gov Landing page

In September 2023, the My HealtheVet on VA.gov landing page was launched ([see more about the landing page here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page)). 

### Four main health tools 

Using a phased approach, teams have systematically integrated the four major health tools — [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling),  [Medications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/README.md), [Secure Messaging](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product), and [Medical Records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md) — into My HealtheVet on VA.gov. An "opt-in" experience in production allowed Veterans to access these tools on VA.gov while enabling VA teams to monitor usage, validate performance, and refine the experience. 

### Secondary Navigation

On June 2024, the [Secondary Navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/README.md) was launched to enhance Veterans' awareness and navigation of health tools available within My HealtheVet on VA.gov. This improvement aims to reduce the likelihood of Veterans searching for healthcare-related tools in unauthenticated areas of VA.gov, such as the megamenu.

**As of December 2025, all four of the essential health tools are now fully available on VA.gov.** 

## <a name="2025goals"></a>Where are we going? - 2025 goals/key milestones<be>

*Milestones are subject to change* 

**Milestone 1 (3/17/25)**

- Appointments no longer available on MHV. MHV Classic link redirects to appointments on VA.gov.
- All health care links on VA.gov (facility pages, tools pages, My VA, etc.) will direct to the portal
on VA.gov for a consistent experience. Users will be able to “Go back to the previous version of
MHV” via links in the portal, but the user interface will not encourage users to go to MHV Classic.
- No changes to secure message, medications, or medical records on the new or classic MHV
experiences. Users who directly go to MHV Classic will continue to have the same experience.
- Update MHV Classic “Try Me” banners to let users know that coming soon (June 1), users will be re-
directed to VA.gov for secure messaging, medications, and medical records.
- MyVA Health users can still get to MyVA Health from both portals.

For more information regarding **Milestone 2**, **the Oracle Health integration on VA.gov**, and **VAHB Health Features**, [please see review in Sharepoint](https://dvagov.sharepoint.com/:p:/r/sites/OCTO-Health/_layouts/15/Doc.aspx?sourcedoc=%7B06E09678-7D2D-4AEA-991D-BF33A960F896%7D&file=2.24725%20-%20MHV%20on%20VA.gov%20Transition%20Timeline%202025.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1&ct=1741186637169&wdOrigin=OFFICECOM-WEB.START.EDGEWORTH&cid=7c137060-4176-4ad3-bae1-df9d57e6a12c&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=dc48b4cc-a814-40f7-aa78-a1286844355b). 

## <a name="metrics"></a>High-level performance and adoption metrics for the health portal<be>

Folder containing metrics for the health portal can be seen in Sharepoint: [Monitoring, Reporting, and Feedback](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=QGJNSi&CID=5667b80d%2D4ee2%2D46b6%2Da293%2Df55fbab8b5e1&FolderCTID=0x012000E6CB91B251F8F14F832E520FAF90885D&id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FGeneral%2FMonitoring%2C%20Reporting%2C%20and%20Feedback&viewid=9384f3a8%2De3e8%2D4abb%2Db2ab%2D24cf305ccdac) (Sharepoint)

This folder contains metrics on the following: 

  - [Medallia feedback](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Medallia%20feedback?csf=1&web=1&e=h9cZ0u) (Sharepoint)
 - [Product metrics and feedback reports](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Monthly%20Product%20Metrics%20%26%20Feedback%20Reports?csf=1&web=1&e=qmWxPb) (Sharepoint)
 - [Monthly transition evaluation reports](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Monthly%20Transition%20Evaluation%20reports?csf=1&web=1&e=1Ekyyg) (Sharepoint)

## <a name="design"></a>Design and research resources<be>

### Figma 

Design teams at VA use Figma to view, share, and collaborate on our work. Here are some helpful Figma links. 

- [VA design system](https://www.figma.com/files/team/1278375444205744118/project/105082786/VA-Design-System?fuid=1094287939207433857)

More specific information on the the VA design system can be found on the [Getting started with design.va.gov](design.va.gov)

_Health specific_ 

- [My HealtheVet - Portal](https://www.figma.com/files/team/1278375444205744118/project/176500480/MHV---Portal?fuid=1094287939207433857) (For more general projects across the portal - including but not limited to: **The secondary navigation** and **My HealtheVet on VA.gov laning page.**) 
- [My HealtheVet - Unified Appointments](https://www.figma.com/files/team/1278375444205744118/project/175332858/MHV---Unified-Appointments?fuid=1094287939207433857) 
- [My HealtheVet - Medical Records](https://www.figma.com/files/team/1278375444205744118/project/176500754/MHV---Medical-Records?fuid=1094287939207433857)
- [My HealtheVet - Meds & Devices](https://www.figma.com/files/team/1278375444205744118/project/176500922/MHV---Meds-%26-Devices?fuid=1094287939207433857)
- [My HealtheVet - Messages](https://www.figma.com/files/team/1278375444205744118/project/198497820/MHV---Messages?fuid=1094287939207433857) 

### Reserach 

_The following are some helpful health portal related links._

- [Portal level research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/research)
- [Landing page research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/research)
- [Secondary navigation research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav)

_Tool specific research_

- [Medical records](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research)
- [Medications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research)
- [Messaging](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research)
- [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research) 

You can learn more about getting started with research at VA here: [Research at VA](https://depo-platform-documentation.scrollhelp.site/research-design/research-at-va).

### Relevant Mural Rooms 

- [Cartographers - MHV on VA.gov portal](https://app.mural.co/invitation/room/1698186759596?code=02f984b27ce94456b25ea2a67987e582&sender=u24af215c7d9bf806b8545488)
- [MHV on VA.gov](https://app.mural.co/t/departmentofveteransaffairs9999/r/1646265288521) 

## <a name="engineering"></a>Engineering resources<be>

- [This directory contains engineering info that applies to the entire MHV to VA.gov project](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/engineering)

**Relevant murals**

- [My HealtheVet on VA.gov - API logic diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717177396025/367057c4a9219404c3b7080e71210082b3c65771?sender=u24af215c7d9bf806b8545488) 

For more documentation and [resources for developers, go here](https://design.va.gov/about/developers/) 

## <a name="QA"></a>Quality Assurance<be>

You will want to verify and validate your product in one of the standard Platform environments.

Please see [developer docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) to learn more about quality assurance. 

The staging environment (https://staging.va.gov/) is an essential tool to review work for teams. You can see a [list of staging credentials in the sensative repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/15c8f93da2a19bbe38705cfbde1179a6c36e25a8/Administrative/vagov-users/mvi-staging-users.csv#L18) that allows you to sign in to https://staging.va.gov to review work. 
