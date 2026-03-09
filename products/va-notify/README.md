# VA Notify Product Outline

[Overview](#overview) | [Description](#description) | [Problem Statement](#problem-statement) | [Desired User Outcomes](#desired-user-outcomes) | [Desired Business Outcomes](#desired-business-outcomes) | [Approach](#approach) | [Initiatives](#initiatives)

## Overview

**Mission:** Facilitate an excellent communications experience from VA Business Lines to Veterans across any digital channel.

**Vision:** To be the core VA notification platform that helps increase utilization and visibility of VA services, while also improving the Veteran's experience.

**North Star:** Provide Veterans with actionable, timely notifications in the manner that is most convenient for them.

### Contact Us

**Slack:** [#va-notify-public](https://dsva.slack.com/archives/C010R6AUPHT)

**Email:** [oitoctovanotify@va.gov](mailto:oitoctovanotify@va.gov)

**Office Hours:** Tuesdays and Thursdays at 2:30 PM ET (30 minutes each). Sign-ups close 24 hours before each session. Office hours are a chance to:
- Hold a kick-off session once your intake has been submitted
- Ask onboarding or integration questions
- Request quick demos of features
- Get help with specific issues or blockers

### Points of Contact

**Product**
- Dave Conlon, VA PO - VA Notify, Platform & Experience
- Samantha Jennings, Experience Team Product Manager
- Ksenia Belikova, Platform Team Product Manager

**Engineering**
- Nathan Wright, Experience Team Tech Lead
- Evan Parish, Platform Team Tech Lead

## Description

VA Notify is an enterprise notifications platform dedicated to improving the Veteran's notification experience by providing actionable, unified communications on the VA services they utilize. The platform is available to any business line or team inside the VA or with an ATO.

VA Notify is designed to be a passthrough system. We do not store Veteran information, but we do store notification templates and settings. We partner with VA Profile and VA.gov to provide communication preferences that the Veteran can see and manage. VA Notify checks these preferences before notifying a Veteran.

VA Notify is located within the VAEC. We provide a REST OpenAPI which your system can call each time a notification is needed, and a self-service web application behind the network (PIV or GFE required) so you can directly create and maintain your notification templates. Aggregated message metrics are provided. Google Analytics (UTM trackers) can and should be used for all message links that point to VA.gov.

### Supported Notification Channels
Currently we support email, text messaging (SMS), and push notifications with the Flagship Mobile App.
Read our [VA Standard Operating Procedures for SMS](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf).

### What VA Notify Does Not Do
- Pull data to trigger notification events
- Provide notification scheduling services (though we may throttle or queue notifications based on volume)
- Support newsletter notifications
- Store Veteran data
- Track analytics per Veteran

### Integration Partners
- VA Profile (contact information and communication preferences)
- MPI (Veteran identity and deceased-status lookups)
- VA.gov Authenticated Experience (notification settings on VA.gov)
- VEText (appointment reminders and push notifications)

## Problem Statement

Veterans receive fragmented, inconsistent communications from VA across many different channels and business lines, with no single source of truth for notification preferences. Business lines lack a standardized, secure platform to send timely, compliant notifications—leading to duplicated effort, compliance risk, and poor Veteran experience.

How might we provide a centralized, reusable notification platform so that every VA business line can reliably reach Veterans through their preferred channel, while honoring their communication preferences and reducing call center burden?

## Desired User Outcomes
- Veterans receive timely, actionable notifications about VA services they use
- Veterans can manage their notification preferences in one place on VA.gov
- Veterans are not bombarded with unwanted notifications (opt-out is easy and honored)
- Veterans can trust that notifications from VA are legitimate and secure
- Veterans on any device (mobile or desktop) have a consistent notification experience

## Undesired User Outcomes
- Veterans receive duplicate or conflicting notifications from multiple VA systems
- Veterans are unable to opt out of unwanted notifications
- Veterans receive notifications with inaccurate or outdated information
- Veterans distrust VA notifications due to phishing concerns
- Veterans miss time-sensitive information because their preferred channel is not supported

## Desired Business Outcomes
- Reduced call center volume as proactive notifications answer common questions
- All VA business lines have a secure, compliant, reusable notification platform
- Notification preferences are centrally managed and consistently honored
- Measurable improvement in Veteran engagement with VA services
- Reduced duplicated engineering effort across VA product teams

## Undesired Business Outcomes
- Increased call center volume due to confusing or incorrect notifications
- Business lines building one-off notification solutions outside of VA Notify
- Compliance violations due to uncontrolled SMS sending or preference management
- Inability to scale the platform to meet growing demand

## Approach
- Provide a REST API and self-service portal for business lines to create and send notifications without deep engineering dependencies on VA Notify
- Integrate with VA Profile for contact information and communication preferences, and with MPI for Veteran identity resolution
- Support multiple notification channels (email, SMS, push) with channel-appropriate guidance
- Collaborate with business lines on notification content to ensure it meets VA standards
- Provide analytics via the self-service UI and Domo to help business lines measure effectiveness
- Partner with VA.gov Authenticated Experience to surface notification preferences on VA.gov
- Adhere to SMS courtesy hours and regulatory requirements for all outbound messages

## Onboarding to VA Notify

Submit an [intake form](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=davidconlon%2C+GitSamJennings%2C+kbelikova-oddball&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to kick off the process.

### General Steps
(*) = Your team, (**) = Joint effort between your team and VA Notify

- Submit the [intake form](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=davidconlon%2C+GitSamJennings%2C+kbelikova-oddball&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) *
- Have your technical team review the VA Notify API docs *
- Kick-off with VA Notify ** (during office hours - Tuesday and Thursday at 2:30pm ET)
- Get access to the Self Service Portal **
- Budget approval for notifications *
- Create your notification content (Privacy Officer review required) *
- VA Notify submits a communication preference intake for your team (if applicable)
- SMS only: VA Notify requests applicable phone number(s)
- Build your notification code to call the VA Notify API *
- Test your notification *
- Launch your notification **
- Evaluate business outcomes and make revisions as needed *

### Accessing the Self-Service Portal

The VA Notify self-service portal empowers your team to create and manage notification templates. You will need to be on the VA network (GFE or Citrix).

- **Staging:** https://staging.notifications.va.gov
- **Production:** https://notifications.va.gov

Sign in with your PIV using the button at the top right. Let us know you've signed in and we will assign you to the right service for your team.

### Timeframe

Email is much quicker to launch than SMS because there are fewer steps. SMS requires acquiring sender phone number(s) for your use case (short codes or 10DLCs), which can take up to 12 weeks. If communication preferences are needed, we must account for scheduling with VA Profile and Authenticated Experience teams. Please allow ample time between intake submission and planned launch.

### Billing
VA Notify is currently paid for by OIT and there is no charge to partners. At this time there are no plans for cost recovery.


## Initiatives
- [Comp & Pen Payment Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/comp-and-pen)
- [Custom Reply-To Email](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/custom-reply-to-email)
- [Login with PIV (SSOi)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/login-with-piv)
- [Notification Preferences MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/notification-preferences-mvp)
- [One-Thing-Per-Page Form Pattern](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/one-thing-per-page-form-pattern)
- [Onsite Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/onsite-notifications)
- [Portal Activity Log](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/portal-activity-log)
- [Portal Environment Consolidation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/portal-environment-consolidation)
- [Sample Templates](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/sample-templates)
- [Self-Service API Key Rotation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/initiatives/self-service-api-key-rotation)
