
# Product Outline - My HealtheVet Account Activity Logs 

## Overview
Account Activity Logs (AALs) are records of specific actions and interactions associated with a user's health care patient portal account. They serve as a transparent audit trail of everything that happens within the portal.
### What AALs include
AALs usually capture events like logins and logouts (including the date, time, and device/IP address used), failed login attempts, password changes, profile or contact information updates, messages sent or received, records viewed or downloaded, prescription refill requests, appointment scheduling, and any changes made to account settings or privacy preferences.

### Who Can See Them
Patients can typically view their own AALss to monitor for unauthorized access or suspicious behavior. Healthcare providers and administrators also have access to audit logs on the backend, both for security oversight and to comply with regulatory requirements.

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
Transform and build on the existing eligibility page on VA.gov into a more interactive and personalized experience for Veterans. Integrate secure RES data Application Programming Interfaces (APIs) to enable real-time interactions with VA.gov. Enhance user experience (UX) components, including case progress tracker, orientation tools and resources, scheduling assistance, career planning module, and other usability improvements to facilitate smoother navigation and better interaction. Develop and implement a user-friendly portal User Interface (UI) that integrates seamlessly with the existing VA.gov infrastructure. Utilize the Single Sign On (SSO) capabilities to streamline the login process and enhance security for users accessing the VR&E portal.

### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_

#### Baseline KPI Values

### Objectives and Key results (OKRs)
Users navigate to the self-management portal and track and interact with their VR&E case journey.


## Solution Approach
We're still in a technical discovery phase, but our plan is: 
 - We will move over the same data points currently collected in My HealtheVet Classic to VA.gov.
 - We will also need to ensure that consistent data is available and can be provided to Veterans from the Oracle Health EHR system
 - We need to develop a plan to continue identifying, storing, and providing these data points to users from the new UI on VA.gov.
 - We'll create a new page under /my-health that will store this functionality, and connect to it from various places within the health portal as deemed appropriate
 - We'll consider allowing users some level of control over how to filter their list to the types of logs or date ranges they're looking for. 


## Launch Strategy
- We will first build the application and incrementally launch it to a percentage of users or to a specific facility for testing
- We'll dial that up over time, and make iterations and fixes as we learn from users what is working. 

## Launch Dates
Target launch date: June 2026 

#### Communications

<details>

- Team Name: My HealtheVet Horizon
- GitHub Label: mhv-horizon
- Slack channel: 
- Stakeholders: Marci McGuire, Robyn Singleton

</details>

#### Team Members

<details>
 
 - PM: David Koger
 - Engineering: Kevin Duensing
 - Research/Design: Sara Sterkenburg, Cara Frissell
 
</details>
