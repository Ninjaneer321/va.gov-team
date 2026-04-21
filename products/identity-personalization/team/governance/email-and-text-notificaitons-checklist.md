# Profile | Email and text notifications checklist

Changes to the Email and text notifications page in the [va.gov](http://va.gov) Profile require coordination with the Authenticated Experience Team, as well as the VA Profile, VA notify, and VeText teams. The VA Profile team manages the overall permissions on this page, and are the current maintainer of all content, excluding checkbox hint text. Teams need to coordinate with VA notify and VeText to create email and text notifications respectively. ***Any development not coordinated with VA Profile, VA notify, or VeText will result in failures for Veterans using this page.***

If you want to make a change to Email and text notifications page on the [va.gov](http://va.gov) Profile, you should follow these steps:

- [ ] If you are adding a new email or text notification, [review this documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/profile/notification_settings) to prepare for the development, and [review this documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/profile-design-content-standards.md#email-and-text-notifications) to prepare designs;  
- [ ] Submit an intake request to [Authenticated Experience](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=auth-exp-request.yml) so we can review your proposed changes and prioritize coordination with your team;  
- [ ] Meet with the Authenticated Experience UX team to review your designs and discuss content and IA;
  - [ ] Finalize content and IA with Authenticated Experience and C&IA teams;  
- [ ] When you have your designs and content ready;
  - [ ] Submit an intake request to [VA Profile](https://jira.devops.va.gov/servicedesk/customer/portal/12/user/login?destination=portal%2F12%2Fgroup%2F60%3FgroupId%3D60) (must be on VA network). **Note:** VA Profile team works mostly on network using [va.gov](http://va.gov) email and MS Teams to communicate. Their team works in PI’s so submitting your request early is advised to avoid significant delays;
  - [ ] If adding a new email notification, submit an intake request to [VA Notify](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=davidconlon%2C+GitSamJennings%2C+kbelikova-oddball&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D).
  - [ ] If adding a new text notification, submit an intake request to VeText.  
- [ ] Develop your new email and/or text notifications behind a feature flag;  
- [ ] Finalize development plans and keep Authenticated Experience advised of when your changes are expected to go live.

**Resources:**

* [va.gov Profile product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/a4c22fdc7963b2b03b6b0b292a80b7c828d116fb/products/identity-personalization/profile)  
* [va.gov Profile design & content standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/profile-design-content-standards.md)  
* [va.gov Profile email and text notifications use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/use-cases#readme)  
* [va.gov Profile developer documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/profile/notification_settings)
