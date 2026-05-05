# Mobile App Store Access Guidelines

## 1. Entry Point & Prerequisites
* All access requests must originate from the [Onboarding Request (Mobile App Stores)](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/new?template=onboarding-mobile-appstores.yml) GitHub issue template.
* Requesters must be members of the VA GitHub Organization before submitting a request.
* We know that we've successfully completed a request when: Access is confirmed via the ticket status. Once your onboarding issue is marked **Closed/Completed**, your access is active. Please check the respective app testing portals (TestFlight/App Tester); do not rely on automated email notifications.

## 2. Group Assignment Logic
Assign users to the appropriate group based on their team affiliation provided in the ticket.

| Team Affiliation | Group Assignment | Notes |
| :--- | :--- | :--- |
| **MAP Team** (Core Eng, QA, UX, PM) | **Internal Tester** | Provides immediate access to all builds. |
| **External Experience Teams** | **External Tester** | Access provided after builds pass initial internal verification.* |
| **VA Stakeholders / POs** | **External Tester** | Defaults to External unless a Product Owner specifically requests Internal access for high-frequency feedback loops. |

*\* **Note on External Builds:** There is no functional/access difference from the stand point of what builds you have access to test between internal/external testing. This is purely a way for the MAP team to more easily manage the groups.*

## 3. Maintenance & Offboarding
* **Offboarding:** Removal from TestFlight and AppTester is a mandatory step in the standard team offboarding checklist.
* **Annual Audit:** Every Q1, it is suggested that the MAP team conduct a Validation Sweep to reclaim seats. Users who have not downloaded a build in 12 months or whose VA email is inactive will be removed from both platforms.