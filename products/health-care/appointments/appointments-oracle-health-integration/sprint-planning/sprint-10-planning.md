## VetsAPI Sprint 10 Planning
Sprint 10: 5/7/24 - 5/20/24

## 📅 Upcoming Dates

## 📣 Announcements
CTO slack channel: appointments-oracle-health-integrations
DSU will now be on slack T/Th and on zoom WMF at 11 am EST

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites 
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
  *  🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟣 Testing/Admin
 
## 📋 Previous Sprint Summary:
This sprint, we implemented VetsAPI support for creating new appointment requests at Oracle Health sites, including modifying the CES infrastructure to include business rules specific to Appointment creation.  Additionally, we upgraded the VetsAPI Patient Gateway (VPG) to refresh Oracle Health site configuration information at configurable intervals, which will serve to improve the reliability of our data.  The CES component was modified with a new endpoint that returns valid appointment cancellation reasons by site, and the documentation needed for production deployment was completed and submitted for review.  Lastly, a document detailing the business rules governing the cancellation of Appointments was created and uploaded to the `appointments-oracle-health-integration` github team area.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * 🚧[#81339 CES-427: VPG: Migrate to Mobile Framework V2](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81339)
  * 🚧🚫[#81432 CES-318 CES: migrate to mobile-framework v2](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81432) 
* 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * [#81348 Research options for adding mock appointment data to CES](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81348) 
* 🟢 Appointment Requests
* 🟩 🟦 SUB-GOAL Eligibility
* 🔴 Appointment Cancellation
  * 🚧 [#81438 ces-312: VPG: Allow cancellation of non-VAOS care types](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81438) 
  
## ✈️ Planned Releases
None
