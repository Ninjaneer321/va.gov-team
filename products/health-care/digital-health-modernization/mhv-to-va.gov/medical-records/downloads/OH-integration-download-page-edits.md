# Oracle Health Integration
Download page edits to CCD & Blue Button for OH patients
* Needs to be in prod by February 13, 2026 at 12pm ET

## Overview
As of January 2026, the Medical Records team had been working on templating versions of the "Download" page for all 3 user-types: 
* VistA only users - see VistA CCD & Blue Button link
* Hybrid users (VistA & OH) - see VistA CCD, OH CCD, & Blue Button link
* OH only users - see OH CCD 

But per OCTO PO Marci McGuire on February 9, 2026 in a UX sync, there are issues with this approach, where specifically the way we are handling OH-only users is not accurate. Many of those users attended their current OH facilities from before those facilities cutover to the Oracle Health (OH) EHR system, and when they were previously on VistA. This means that they do most likely have VistA data in both a VistA CCD record and the Blue Button report. We have an obligation to ensure that all Veterans have access to ALL of their medical records per the CARES Act. There is a slight risk to users who may have only begun receiving care at these named OH facilities _after_ their cutover dates - when they were on Oracle Health, and they may download a file that has an empty section in any VistA report download. However, business is okay with this case - which is not a patient-safety risk, and avoids users _not_ having access to any records. We can iterate on the experience to provide a better and easier UX in the future. For now, we will: 
* Fold the "OH only users" use case into the Hybrid user use case and treat these the same (remove the OH-only use case for now)
* Assume that all users have a Blue Button and bring back the blue button link for OH users
* Assume that any user with an OH facility in their profile may have attended this facility when it was on VistA, and that the have data in the VistA CCD for this facility (pre-cutover), and in the OH CCD for this facility (after the cutover date)

We will iterate on this page to include the OH facility name with specific date-ranges that cover pre and post-cutover based on the [EHR deployment schedule](https://digital.va.gov/ehr-modernization/ehr-deployment-schedule/) published by the VA. 

## Existing Oracle Health facilities and their cutover dates

This table also includes the upcoming round of Southeast Michigan cutover facilities who are anticipated to move to Oracle Health on April 11, 2026.

|facility name | facility location | facility_id | Cutover date
|----|----|----|----|
| Mann-Grandstaff VA Medical Center | Spokane, WA | `VHA_668` | October 24, 2020 |
| Jonathan M. Wainwright Memorial VA Medical Center | Walla Walla, WA | `VHA_687` | March 26, 2022 |
| VA Central Ohio Health Care System | Columbus, OH | `VHA_757` | April 30, 2022 |
| Roseburg VA Health Care System | Roseburg, OR | `VHA_653` | June 11, 2022 |
| VA Southern Oregon Rehabilitation Center and Clinics | White City, OR | `VHA_692` | June 11, 2022 |
| Captain James A. Lovell Federal Health Care Center | Chicago, IL | `VHA_556` | March 9, 2024|
|VA Detroit Healthcare System | Detroit, MI |`VHA_553` |  April 11, 2026 |
|VA Saginaw Healthcare System | Saginaw, MI |`VHA_655` | April 11, 2026 |
|VA Ann Arbor Healthcare System | Ann Arbor, MI | `VHA_506` | April 11, 2026 |
|VA Battle Creek Medical Center | Battle Creek, MI |`VHA_515` | April 11, 2026 |


## Design
Figma file is [located here](https://www.figma.com/design/gGU9oX4QVqbYdxzXfTqTEj/Medical-Records---Milestone-2?node-id=22897-28752&p=f&t=JmT1ktPJHavfVfgX-0)


## Engineering
This solution will be handled within the Medical Records application itself (not at the platform level in the AWS parameter store at this time). This is because of: 
1. Time constraints requiring us to get this into production within 48 hours (whereas platform code reviews take 3 business days)
2. There are no use cases in the My HealtheVet front-end experience right now that require the cutover date being named in front-end user-facing content outside of Medical Records at this time.

This work will be divided into two tickets: 
* [Ticket 1](https://github.com/department-of-veterans-affairs/va.gov-team/issues/132755) - remove the Blue Button download link suppression for users who only have an OH facility in their profile
* [Ticket 2](https://github.com/department-of-veterans-affairs/va.gov-team/issues/132762) - update content on the "Download" page for the combined Hybrid users + OH-only users scenarios. The content should be different in the intro text, and also include a bulleted list of facilities with date-ranges specified for any OH facilities. 
