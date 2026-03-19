# Product Outline: FMP Letters
---

## Overview
The goal of this product update to VA Benefits Letters & Documents tool is to make it possible for Veterans to download Foreign Medical Program (FMP) letters on VA.gov and VA mobile app

## Problem Statement
Currently, Veterans must 'register' for the FMP program [by submitting this form to VA](https://www.va.gov/health-care/foreign-medical-program/). Once the form is received, the FMP team confirms the Veteran exists in VBMS and has a disability rating, then generates and mails the FMP letter to the Veteran. Since October 2024, VA has received roughly 1,200 FMP registration forms online each month. Relying on physical mail is slow and less reliable (for example if a Veteran recently changed their address).

By making the FMP letter available for download for Veterans who are eligible, we can reduce unnecessary burden for Veterans to obtain the letter, eliminate administrative steps the FMP team is taking to generate and mail the letter, and reduce the cost of printing and mailing these letters abroad. This will also free up the FMP team's time, enabling them to focus their effort on processing claims, which currently have a 6 month backlog.
 
## Desired User Outcomes
- Veterans living abroad will be able to receive medical care for their service-connected conditions sooner since they can easily access their FMP letter online
- FMP letters are quickly and easily accessible to download on both VA.gov and the VA mobile app

## Undesired User Outcomes
- Veterans are confused on how to find or download their FMP letter

## Desired Business Outcomes
- Reduce reliance on mailed communication
- Eliminate administrative steps the FMP team is taking to generate and mail the letter
- Reduce the cost of printing and mailing these letters abroad

## Undesired Business Outcomes
- Veterans call in to the call center with issues seeing and/or downloading their FMP letter

---
## Measuring Success

### Key Performance Indicators (KPIs)
* FMP Letter Downloads [GA Report: https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/SvIXt89hQnCx4HDFQ6iKNw]
* Letter Download Success Rate
* Error Rate on Letter Download Page
* Unique Users successfully downloading FMP Letter
* Free up the FMP team's time


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Make it possible for Veterans to download FMP Letter on VA.gov and VA mobile app
  - Key result: Increase FMP Downloads over time - baseline is 0 since letter is only available by mail
  - Key result: Decrease mailed FMP letters

---

## Assumptions
- Veterans who are qualified for FMP may not always be living abroad; they could be downloading the FMP letter before going on a trip

## Solution Approach

- Add FMP Letter to VA Letters and Documents page of VA.gov and VA Mobile app. Include clear description of the purpose of the letter as well as clear call to action to download

### Additional Information

- Figma: https://www.figma.com/design/61I2UcRPJDXdw0xCl9BlEe/Your-VA-benefit-letters-and-documents?node-id=5436-4743&t=58zDhqQGX2R3Dlms-0
- Mobile change request: https://github.com/department-of-veterans-affairs/va-mobile-app/issues/12435#issuecomment-3811831699
- Intake request: https://github.com/department-of-veterans-affairs/va.gov-team/issues/126469


--- 

## Launch Strategy
- Veterans will be able to view and download the FMP letter from the VA Benefits Letters & Documents page of VA.gov / screen of mobile app.
- We have decided NOT to announce the new FMP letter in the What's New section of the mobile app since we cannot target the message to only be shown to users who have an FMP letter. The reason: the majority of users will not have an FMP letter, and we don't want to cause confusion for users who do not have one.
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - First week of April on Web, April 21 for mobile
- *Actual Launch Date* 
  - tbd, depending on outcome of Staging Review, if we need to make changes
- Release Plan: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-management-tools/engineering/release-plans/fmp-benefit-letter.md
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - We'll evaluate 1 week post launch, followed by 1 month, followed by quarterly (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-management-tools/engineering/release-plans/fmp-benefit-letter.md#phase-iii-post-launch-results-optional)

---

## Solution Narrative
Github Epic: https://github.com/department-of-veterans-affairs/va.gov-team/issues/129558

### Current Status
As of March 19, 2026: FMP letters can be tested in staging (test plan: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-FMP-letter-03302026.md)

### Key Decisions
We're phasing roll out to start with a select group of internal testers, 

---
   
## Screenshots

### Before
![m-benefit-letters-and-documents](https://github.com/user-attachments/assets/807da806-b0bf-4657-88f3-2f480807c9e2)


### After
<img width="402" height="4096" alt="49033f73076bc0d6128eb192f6214fa16c966de5" src="https://github.com/user-attachments/assets/79df2df4-7b2a-426e-9ec8-b3204899c7c1" />

<img width="256" height="4096" alt="7798825de0d1b2fe95b9a04d19e23816c1280e0d" src="https://github.com/user-attachments/assets/765d8ed4-9073-45b1-aaa4-213f8ee19aa1" />

---

#### Team Members

<details>

- Team Name: BMT 3
- GitHub Label: bmt-team-3
- Slack channel: https://dsva.slack.com/archives/C09E50V48RM
- Product POCs: Ruby Anaya
- Engineering: Liana Fleming, Seth Darr
- Design: Melissa Lefevre
- Stakeholders: Amy Lai

