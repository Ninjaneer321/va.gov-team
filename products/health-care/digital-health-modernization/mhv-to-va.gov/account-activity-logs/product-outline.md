
# Product Outline - My HealtheVet Account Activity Logs 

## Overview
Account Activity Logs (AALs) are records of specific actions and interactions associated with a user's health care patient portal account. They serve as a transparent audit trail of everything that happens within the portal.

### What AALs include
The account activity logs on VA.gov will differ from the logs that were displayed on MHV Classic because authentication and account activities like password changes are no longer managed by MHV and is now stored with Login.gov and ID.me.  The patient-facing UI on VA.gov will provide users with insight on activities conducted within My HealtheVet onVA.gov, including messages sent or received, health records viewed or downloaded, prescription refill requests, and appointment scheduling. 

### Who Can See Them
Patients can typically view their own AALs to monitor for unauthorized access or suspicious behavior. Healthcare providers and administrators also have access to audit logs on the backend, both for security oversight and to comply with regulatory requirements.

## Problem Statement
The Health portal on VA.gov seeks to replace two independent patient portals: My HealtheVet Classic and My VA Health, but the long-pole in the tent includes this AAL feature that has not yet been moved over and built on VA.gov. This is a blocker for sunsetting the other patient portals, but also is critical and HIPAA required functionality that we should provide Veterans as part of their health care management online. AALs are especially important because they help protect sensitive health information. Under HIPAA, covered entities are required to maintain audit controls and track access to electronic protected health information (ePHI). These logs support that compliance obligation.
From the patient's perspective, they offer peace of mind — you can check whether anyone else has accessed your account, review when your records were viewed, or confirm that a message was sent. From the provider's perspective, they're a tool for security monitoring, investigating potential breaches, and demonstrating due diligence.

## Desired User Outcomes
A user might want to check their AALs for any number of records-management reasons. For example, if they receive a suspicious email notification and want to verify whether someone else logged in. Or a security team might review logs if a data breach is suspected. Logs can also be used as evidence in legal or compliance investigations. 

With these logs available within My HealtheVet on VA.gov, users can self-serve this information, which should reduce the time it takes for Veterans to troubleshoot their access and security questions related to logs from their health portal.

## Undesired User Outcomes
Veterans continue to send messages, call help desks, or call facilities in order to request this type of information. 

## Desired Business Outcomes
Making these AALs available in a self-serve manner on VA.gov reduces clinician and help desk burden to fetch, query, and download these logs for users. 

## Undesired Business Outcomes
Building these AALs doesn't help in the ways we expect, and a consistent or increased number of requests for AALs comes through high-burden channels such as help desks, call centers, or messages. 

---
## Measuring Success
We'll evaluate the traffic and usage on this page to better understand the demand for this feature over time, but will also monitor the count of helpdesk inquiries, call center volume, and messages sent related to this topic to track whether those numbers are decreasing.

### Key Performance Indicators (KPIs)
* One of our KPIs is just having this data on VA.gov instead of legacy portals, so that we can begin to baseline and track the access to and demand for this feature in a better way.
* We will also monitor feedback on the page itself to understand if there are any user issues with the type of data availalbe in AALs and whether this is meeting user expectations, the traffic to the page itself, and the impact it has on other in-person channels such as helpdesk, messages, and call center incident or ticket volume. 

#### Baseline KPI Values


## Solution Approach
We're still in a technical discovery phase, but our plan is: 
 - We will move over the same data points currently collected in My HealtheVet Classic to VA.gov.
 - We will also need to ensure that consistent data is available and can be provided to Veterans from the Oracle Health EHR system
 - We need to develop a plan to continue identifying, storing, and providing these data points to users from the new UI on VA.gov.
- We are going to build this now because we need to move this feature over to VA.gov before September 2026 when we plan to sunset My HealtheVet Classic legacy patient portal completely.
- We first started with an MVP approach to describe what AALs are in a "need help?" component on the My HealtheVet landing page, and point users to help desk to call if they need AALs for any reason. This approach has received some push-back and we are being asked to iterate beyond MVP to decrease the burden on help desks and clinicians to support AAL requests.
- We will not add additional data fields beyond what is already being offered on My HealtheVet Class in this initial design effort - this will primarily be a lift + shift effort, with some design treatment to making it accessible, clear, and intuitive for users per the VA Design System.
- We plan to build this feature under the `/my-health` domain space in a new page (TBD) and will provide cross-link entry points to that page from the My healtheVet landing page and potentially other tools within the health portal. 
- We'll consider allowing users some level of control over how to filter their list to the types of logs or date ranges they're looking for.
- Our solution does not include the VAHB mobile app - AALs will be a web-only feature. 

## Launch Strategy
- We are in early stages right now, and are taking on technical and design discovery to better understand the best way to port this information over from LifeRay (VistA) onto VA.gov, also integrate similar logs from Oracle Health EHR systems, and continue to fetch, store, and provide access to these logs moving forward from VA.gov itself. 
- Once we have more discovery ready, we can answer more strategic questions about architectural plans and launch strategy
- We will likely launch this work to a very small percentage of users or a specific facility, and slowly dial up the launch based on post-launch monitoring. 

## Launch Dates
- Target: June 2026

#### Communications

<details>

- Team Name: My HealtheVet Horizon team
- GitHub Label: mhv-horizon
- Slack channel: #mhv-horizon-team
- Product POCs: Marci McGuire, Robyn Singleton

</details>

#### Team Members
<details>
 - OCTO PO: Marci McGuire
 - OCTO UX Lead: Robyn Singleton
 - PM: David Koger
 - Engineering: Kevin Duensing
 - Research/Design: Cara Frissell / Sara Sterkenburg
 
</details>
