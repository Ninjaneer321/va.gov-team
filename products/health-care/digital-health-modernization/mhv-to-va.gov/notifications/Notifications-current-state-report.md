# My HealtheVet Notifications: Current State Report
This report documents what we know and understand about notifications that route users to the My HealtheVet on VA.gov health portal from outside sources (email, push-notifications on mobile devices). This report DOES NOT document passive in-app notifications that are generated on VA.gov itself, but seeks to inform a future-state where we build out an in-app notification ecosystem that will hopefully scaffold on top of the existing external notifications that already exist. Understanding the current state will help us determine several things that are crucial for scaling a system that makes sense to Veterans and is consistent with other types of communication they already receive. This report covers questions such as: 
* What notifications do users already get via email & SMS for each health tool?
* Are they enabled for both VistA & OH EHR systems? 
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

## Background information

SMS notifications in particular are subject to legally mandated "quiet hour" windows, and can only be sent from specific facilities during allowed hours, typically 8am-8pm in the time zone where the facility is located. Almost all notifications can be dismissed or opted out of, but this works differently based on whether they are managed in the VA.gov Profile or if the user opts in/out via SMS commands (more information on this below, based on specific notification tool). 

In general, there are templates used to propogate both email and SMS messages for both VEText and VA Notify, but these content templates are not centrally managed and there is not one single source of truth for all notification template management. There are some gaps in the existing ecosystem where some notifications are ONLY available at the facility-level and/or are ONLY available via SMS or e-mail (but not both), which will cut out any users without a either a mobile device/e-mail or who are at a facility that has not implemented the VEText service. 

## <a name="tools"></a>Notification tools and applications

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
VEText is different than VA Notify (in some cases duplicative), and relies on data in the Computerized Patient Record System (CPRS). It is not VA-wide, instead it is facility-dependent and reliant on specific facilities budgeting for it and enabling its implementation. Each facility with VEText may have some variation (but not necessarily all) of the possible notifications that are supported. VEText is only SMS today, but in the future there is capability to integrate the service with VA Notify to also include Email notifications.

These notifications are primarily for VA appointments, community care appointemnts, and prescription tracking. 

According to VEText documentation, all Veterans are opted into all VEText messaging by default. If they wish to opt out, they can reply `STOP` (or in some cases `PASS`) to a message they received and they will be opted out of the use cases corresponding to the number they responded to. Replying `STOP ALL` will opt them out of all messaging regardless of which number they reply to. If Veterans would like to opt-into a use case, they must text `START` to the corresponding number shown in the table below. Some notifications, such a prescription tracking, also have an "opt-in" select box option in the Profile. Opting out via SMS, and then re-selecting the checkbox in the Profile will not necessarily re-start the notifications. The user may need to reply `START` to the message itself to re-initiate these notifications. 

Type of notifications and the number they come from via VEText are as follows: 

| Sender Number (for opt-in/out) | Use case |
|-----|-------|
|53079 | Appointment reminders, Open Slot Management, Community Care, Clinic Cancellations |
|214413 | Surgery notifications, ad-hoc notifications, and one-way vaccine outreach |
| 80728 | Two-way vaccine outreach, Emergency management |
| 53941| Rx notifications (both VistA and Federal EHR facilities) |
| 202-951-7856 | Board of Veterans Appeals (BVA) |
|N/A | Behavioral Health lab (BHL) - _Veterans will need to respond to a previously received message. BHL uses a pool of 10-digit numbers_|
  
**Resources:**
* [VEText Sharepoint site](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Home-Page.aspx) (VA Network)
* VEText Slack channel: `#notifications-vetext`

## <a name="profile"></a>Notification settings in Profile
  To review, there are opt-in notification settings for each health tool in the VA Profile. Secure Messages, however, is automatic and users cannot opt-out, so it is not listed on this page. Review the full set of notification settings provided in the Profile in [this documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences#currently-supported-notifications).  
  
  <img width="363" height="260" alt="Screenshot 2026-02-11 at 4 10 59 PM" src="https://github.com/user-attachments/assets/19361a2d-fdb8-4db3-b39a-37e2bb405dae" />

## <a name="vahb"></a>VAHB health notifications

### Resources
* Documentation about push notifications enabled in the VAHB mobile app is [available here](https://department-of-veterans-affairs.github.io/va-mobile-app/development/FrontEnd/Push%20Notifications/).
* [Push notifications architectural overview](https://department-of-veterans-affairs.github.io/va-mobile-app/development/BackEnd/Features/PushNotifications/)

## <a name="appointments"></a>Appointments
Existing notifications
| Notification | Service | Trigger | Modalities offered | EHRs supported | Opt-in? | Notes |
|--------------|---------|---------|----------|---------|-------|------|
| VA appointments - upcoming reminder| VEText | ? | SMS| VistA | No (automatic) |Can opt out by replying to SMS|
| VA appointments - Veteran can auto cancel | VEText | ? | SMS| VistA | No (automatic)|Can opt out by replying to SMS|
| VA appointments - clinic cancelled the appointment | VEText | ? | SMS | VistA | No (automatic)|Can opt out by replying to SMS|
| VA appointments - attempt to schedule reminders| VEText | ? | SMS | VistA | No (automatic)|Can opt out by replying to SMS|
| VA appointments - Pre Check-in | VEText | ? | SMS | VistA | No | when those facilities roll over to OH, these will go away & some other interim solution will kick-in |
| VA appointments - Check-in | VEText | ? | SMS | VistA | No | when those facilities roll over to OH, these will go away & some other interim solution will kick-in |
| VA appointments - post-appointment reminders | VEText | ? | SMS | VistA | No (automatic)|Can opt out by replying to SMS|
| Community care - attempt to schedule reminders | VEText | ? | SMS | VistA | No (automatic)|Can opt out by replying to SMS|
| Community care - post-appointment reminders | VEText | ? | SMS | VistA | No (automatic)|Can opt out by replying to SMS|
| Open Slot management | VEText | ? | SMS | VistA | No (automatic)|Can opt out by replying to SMS|

Notes: 
* Open Slot Management (OSM) allows Veterans to claim earlier appointments as they become available. The Veteran is presented with 2 options over text message: `reschedule` or `keep`.
  * If the Veteran chooses to `reschedule`, VETet will claim the earlier appointment and cancel the original. The Veteran will not get additional offers for earlier appointments. 
  * If the Veteran chooses to `keep`, the original appointment is kept. The Veteran will not get additional offers for earlier appointments. 
  * If there is no response from the Veteran, the original appointment is kept. and they will continue to receive offers for earlier appointments. 

### Notification message content & routing  


### Design

### Resources:
  * [Appts notifications service blueprint](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md)

## <a name="messages"></a>Messages

Existing notifications
| Notification | Service | Trigger | Modalities offered | EHRs supported | Opt-in? | Notes |
|--------------|---------|---------|----------|---------|-------|------|
| Welcome to SM | VA Notify | When someone becomes eligible for SM (VistA) | Email, SMS | VistA | No (automatic) | Not totally sure on the logic for that but SM BE team would know |
| You have a new message| VA Notify | When a new message is sent to the Veteran | Email, SMS | VistA, OH | No (automatic) | -- |

### Notification content/language & routing  

### Design

## <a name="meds"></a>Medications

Existing notifications
| Notification | Service | Trigger | Modalities offered | EHRs supported | Opt-in? | Notes |
|--------------|---------|---------|----------|---------|-------|------|
| 1 medication has shipped | CBOC | Tracking information added to in-progress medication | Email | VistA, OH | Yes | Notes |
| Multiple medications have shipped | CBOC | Tracking information added to in-progress medication | Email | VistA, OH | Yes | Notes |
| 1 medication has shipped | VEText | Tracking information added to in-progress medication | SMS | VistA, OH | Yes | Some prescriptions are shipped by the facility (not CBOC), but not all facilities have capabilities to send SMS notifications|
| Multiple medications have shipped | VEText | Tracking information added to in-progress medication | SMS | VistA, OH | Yes | Some prescriptions are shipped by the facility (not CBOC), but not all facilities have capabilities to send SMS notifications |
| Window pickup notifications | VEText | Once a prescription is verified in ScriptPro (fully automated) | SMS | Vista, OH | No (automatic) | Not all facilities have this implemented |
| [Coming soon!] Rx Refill available | VEText | -- | SMS | --| -- | On VEText roadmap, with a planned 2027 release |
| [Coming soon!] CMOP shipment notification | -- | -- | -- | -- | -- | On VEText roadmap, but no timeline is available |

Notes: 
* CBOC = central meds distribution center. some % of meds are sent from here, and users will get Email notifications (not SMS) regarding these meds if they opt-in via the Profile. 
* Facilities themselves send other medications (or have window pickup). Facilities use VEText to notify Veterans via SMS, but only SOME facilities have VEText implemented.
* Facilities with VEText implemented send out Rx tracking messages daily at 8:00 AM local time. 
* In this this venn diagram some folks get no notifications b/c they go to a facility that doesn't have notifications turned on. And if the medication is shipped by facility (not CBOC) they wouldn't get notified.



### Notification content/language & routing  

### Design

## <a name="records"></a>Medical Records
Existing notifications
| Notification | Service | Trigger | Modalities offered | EHRs supported | Opt-in? | Notes |
|--------------|---------|---------|----------|---------|-------|------|
|Your medical image successfully downloaded [link] | VA Notify | User-generated request to download images, notification is triggered when that download is complete | VistA, OH | Yes | -- |
|Your medical image did not download; try again | VA Notify | User-generated request to download images, notification is triggered when that request fails | VistA, OH | Yes | -- |
| You have a new lab & test result [link to exact result] | VA Notify | New lab and test result | OH only | No (automatic) | _Coming soon_; not quite ready yet |

Notes: 
* More clinical events (beyond lab & test results only) are eligible, but we are starting with that one
* Had to move fast, so avoided VA Profile and made it non-opt-outable
* Cannot opt out of L&T result notification
* Had to aggressively de-identify it, so the content is just "you have a thing, go here to see it" - super generic.
* The only way it is helpful is to drop them on specific details page for the actual thing. Mike Moyer figured it out & we are able to deep link users to their literal new thing. Want to repeat this for all other new events across MR domains.

### Notification content/language & routing  

### Design

## <a name="travel-pay"></a>Travel Pay

## <a name="supplies"></a>Medical supply re-ordering
  Nothing

## <a name="1010"></a>10-10EZR Form
Existing notifications
| Notification | Service | Trigger | Modalities offered | EHRs supported | Opt-in? | Notes |
|--------------|---------|---------|----------|---------|-------|------|
|Your update (submission) failed| VA Notify | User tries to update their 10-10EZR form and the update fails | Email| N/A | No (automatic) | --|


## <a name="co-pay"></a>Medical co-pays and billing
Is this a profile question?
Maybe ask Ryan T. / VAHB  - interested in this too
Payments team - Robyn thinks they were working on putting payments information on VA.gov (Denise Cuveyduc)
