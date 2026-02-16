# My HealtheVet Notifications: Current State Report
This report documents what we know and understand about notifications that route users to the My HealtheVet on VA.gov health portal from outside sources (email, push-notifications on mobile devices). This report DOES NOT document passive in-app notifications that are generated on VA.gov itself, but seeks to inform a future-state where we build out an in-app notification ecosystem that will hopefully scaffold on top of the existing external notifications that already exist. Understanding the current state will help us determine several things that are crucial for scaling a system that makes sense to Veterans and is consistent with other types of communication they already receive: 
* What notifications do users already get via email for each health tool?
* What notifications do users already get via push-notification (mobile device) for each health tool?
* What notifiations are opt-in (via Profile) and which are automatic?
* What content or language do we use in those notifications today?
* What hyperlinks, buttons, or CTAs are in those notifications? And where exactly do they route users?

## On this page
* [Notification tools and applications](#tools)
* [Notification settings in Profile](#profile)
* [VAHB health notifications](#vahb)
* [Appointments](#appointments)
* [Messages](#messages)
* [Medications](#meds)
* [Medical records](#records)
* [Travel pay](#travel-pay)
* [Medical supply re-ordering](#supplies)
* [10-10EZR](#1010)
* [Medical co-pays and billing](#co-pays)

## <a name="tools"</a>Notification tools and applications

### VA Notify
VA Notify supports email, text messaging (SMS) and push notifications with the VAHB Mobile App. VA Notify is designed to be a passthrough system. We do not store Veteran information, but we do store your notification templates and settings. We partner with VA Profile and va.gov to provide communication preferences that the Veteran can see and manage. VA Notify checks these preferences before notifying a Veteran.

To create a new notification using a VA Notify template, there are some requirements for a technical team member to get set up with an API key, as well as go through privacy review in order to get the notification set up in the staging environment. Email notifications are much faster to implement, whereas **SMS (text) notifications can take up to 12 weeks to implement**. More information is in the VA Notify playbook.

**Resources:**
* [VA Notify Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify#playbook) 
rely on this system as source of truth (not the Figma)
* [VA Standard operating procedures for SMS](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf)
* [VA Notify REST API documentation](https://staging.notifications.va.gov/developer/api_docs)
* VA Notify Slack channel: `#va-notify-public`


### VEText

* VeText is both email/text - different than VA Notify (in some cases duplicative). Not at all facilities. Actual implementation is TEXT only, but they can integrate with VA Notify to do email someday.
* VeText has a nice sharepoint that we will look at next with more product documentation. Robyn is messaging the team right now for a link.

Right now it's only appointment reminders & Rx reminder (?), but they do "open slot" management in VistA. Run by Shane Elliott. It is not VA-wide, it's facility-dependent & reliant on specific facilities turning it on. So dependent on budgeting at facility-level. 

## <a name="profile"></a>Notification settings in Profile
  To review, there are opt-in notification settings for each health tool in the VA Profile. Secure Messages, however, is automatic and users cannot opt-out, so it is not listed on this page.
  
  <img width="363" height="260" alt="Screenshot 2026-02-11 at 4 10 59 PM" src="https://github.com/user-attachments/assets/19361a2d-fdb8-4db3-b39a-37e2bb405dae" />

## <a name="vahb"></a>VAHB health notifications
* what is in prod for the app?
* What's in flight?
* What's on deck? 

## <a name="appointments"></a>Appointments
Existing notifications
| Notification | Service | Trigger | Modalities offered | EHRs supported | Opt-in? | Notes |
|--------------|---------|---------|----------|---------|-------|------|
|You have an upcoming VA appointment| VEText | ? | Email, SMS| VistA, OH | Yes | --|
|Pre Check-in | ? | ? | Email, SMS | VistA | ? | when those facilities roll over to OH, these will go away & some other interim solution will kick-in |
|Check-in | ? | ? | Email, SMS | VistA | ? | when those facilities roll over to OH, these will go away & some other interim solution will kick-in |
 
### Questions:
  * Community care notifications?

### Notification content/language & routing  


### Design

### Resources:
  * [Appts notifications service blueprint](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md)

## <a name="messages"></a>Messages

Existing notifications
| Notification | Service | Trigger | Modalities offered | EHRs supported | Opt-in? | Notes |
|--------------|---------|---------|----------|---------|-------|------|
| Welcome to SM | VA Notify | When someone becomes eligible for SM (VistA) | Email, SMS | VistA | No (automatic) | Not totally sure on the logic for that but SM BE team would know |
| You have a new message| VA Notify | When a new message is sent to the Veteran | Email, SMS | VistA, OH | No (automatic) | -- |

## <a name="meds"></a>Medications
* You have 1 medication shipped (VistA + OH) 
  * Email:
  * Text message:
* You have multiple medications shipped (VistA + OH) 

Notes: 
* CBOC = central meds distribution center. some % of meds are sent from here, some from elsewhere.
* Facilities themselves send others, but email notifications are only triggered for meds sent by CBOC
* And text notifications are only for those triggered by facility, but only for those facilities that are turned on.
* In this this venn diagram some folks get no notifications b/c they go to a facility that doesn't have notifications turned on. And if the medication is shipped by facility (not CBOC) they wouldn't get notified.

## <a name="records"></a>Medical Records
* Your medical image successfully downloaded. Go to look at it. (VistA + OH)
  * User-reaction notification (based on if a user requested the records to be downloaded from the MHV front-end)  
  * Your medical image did not successfully download. Try again.
* (OH only) Will have a "you have a L&T record - go there now". _Other clinical events are eligible but just starting with that one._

Notes: 
* Had to move fast, so avoided VA Profile and made it non-opt-outable
* Cannot opt out of L&T result notification
* Had to aggressively de-identify it, so the content is just "you have a thing, go here to see it" - super generic.
* The only way it is helpful is to drop htem on specific details page for the actual thing. Mike Moyer figured it out & we are able to deep link users to their literal new thing. Want to repeat this for all other new events across MR domains. 

## <a name="travel-pay"></a>Travel Pay

## <a name="supplies"></a>Medical supply re-ordering
  Nothing

## <a name="1010"></a>10-10EZR Form
 * user-action realted notification (Email) sent ONLY when a submission fails 

## <a name="co-pay"></a>Medical co-pays and billing
Is this a profile question?
Maybe ask Ryan T. / VAHB  - interested in this too
Payments team - Robyn thinks they were working on putting payments information on VA.gov (Denise Cuveyduc)
