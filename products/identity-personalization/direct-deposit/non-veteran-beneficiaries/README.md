# Direct deposit for non-Veteran beneficiaries

Last updated: March 2026  

* Product documentation  
  * [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92610)  
  * [Figma files](https://www.figma.com/design/o56Tm2MhyKJ4NxezHwlDtL/Profile---Financial-information?node-id=2051-2600&t=ziAKtrLZ7OR3mg3y-1)  
  * [GA4 report of user statuses when updating direct deposit](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/5Jm2bveUQDG4SBSAp_OrJQ)  
* Development documentation  
  * [Lighthouse API documentation](https://developer.va.gov/explore/api/direct-deposit-management/docs?version=current)  
  * [Backend Documentation: Direct Deposit benefits](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/direct-deposit/backend)

# Jump to 

[Overview](#overview)

[Access to direct deposit information](#access-to-direct-deposit-information)

- [Definition of each status](#definition-of-each-status)

- [Lighthouse process diagram for eligibility](#lighthouse-process-diagram-for-eligibility)

[Project history](#project-history)

# Overview 

This initiative ensures that non-Veteran beneficiaries—such as dependents, spouses, and survivors—are informed that they are only able to view their direct deposit information on VA.gov and must call in, or submit a paper form, to update their information.

Direct deposit write access was revoked by BGS in December 2024, and Lighthouse in March 2025. The policy and technology would need to be re-evaluated and updated to allow edit features.

As of March 2026 the logic blocks an average of ~20% of our monthly users as can be seen by the [GA4 report](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/5Jm2bveUQDG4SBSAp_OrJQ).

## Purpose 

* Provide overview of current read and write logic on direct deposit.  
* Provide information on how non-Veteran beneficiaries (e.g., dependents, survivors, spouses) are determined by the system.  
* Explain why online updates are not supported and how users can make changes via VA assistance.

# Access to direct deposit information 

Users identified as Veterans have read and write access. Users identified as non-Veteran beneficiaries have read only access.

Lighthouse informed us the following are classified as non-Veteran beneficiaries:

* Dependents  
* Spouses  
* Survivors

Lighthouse created a new field to allow VA.gov to preemptively detect if a user is a Veteran or non-Veteran beneficiary to block edits to their direct deposit information. That field is called `DirectDepositResponse › veteranStatus`. [Link to Lighthouse documentation page.](https://developer.va.gov/explore/api/direct-deposit-management/docs?version=current)

This `veteranStatus` field has the following options:

* `VETERAN` can read and write  
* `DEPENDENT` read only  
* `NEITHER_VETERAN_NOR_DEPENDENT` read only  
* `COULD_NOT_DETERMINE_DUE_TO_EXCEPTION` read only

## Definition of each status 

`VETERAN`

* Lighthouse (LH) checks to see if a person is a `VETERAN` by:  
  * 1/ Checking the VA Profile ProfileServiceV3 endpoint for a `DoDServiceSummary › dodservicesummarycode` of `A1`. If they do not have an endpoint of `A1`;  
    * [Link to VA Profile ProfileServiceV3 documentation](https://qa.vaprofile.va.gov:7005/profile-service/swagger-ui/index.html?urls.primaryName=ProfileServiceV3)  
  * 2/ LH checks a Benefits Gateway Service’s Rating Information endpoint to see if they have any *service connected disability*.  
  * 3/ If the person either has a `dodservicesummarycode` of `A1`, or they have *service connected disabilities*, the person is considered a `VETERAN`, otherwise they are not.  
* If they are NOT considered a `VETERAN` from the above logic, LH checks for whether the person is a `DEPENDENT`.  
  * If the person is a `VETERAN`, we do NOT check to see if they are a `DEPENDENT`.

`DEPENDENT`

* If the person is NOT a Veteran according to the `VETERAN` logic, then a check is done to see if the person is a `DEPENDENT`, using a Benefits Gateway Service endpoint to check if there is a Veteran associated with the person calling the DDM endpoint.  
* If they are NOT a `DEPENDENT` either, LH returns either `NEITHER_VETERAN_NOR_DEPENDENT` or `COULD_NOT_DETERMINE_DUE_TO_EXCEPTION`.

`NEITHER_VETERAN_NOR_DEPENDENT`

* If the person is neither `VETERAN` nor `DEPENDENT`, AND there were no errors of any kind calling any of the backends, we return the `NEITHER_VETERAN_NOR_DEPENDENT` status.

`COULD_NOT_DETERMINE_DUE_TO_EXCEPTION`

* If the person is neither `VETERAN` nor `DEPENDENT`, but there was an error calling the upstream services, such as VA Profile or Benefits Gateway Service, then we return the `COULD_NOT_DETERMINE_DUE_TO_EXCEPTION` status.  
* The rationale is that LH does not want to return `NEITHER_VETERAN_NOR_DEPENDENT` if there was a system error in confirming if the user is a `VETERAN` or `DEPENDENT`.

### dodServiceSummarycode A1 definition 

`dodservicesummarycode` of `A1` is defined as: Active duty, meets minimum service, or Reserve, or National Guard with any active-duty service, and has Honorable discharge. From what the team can tell, `A1` is not the only code that reflects if a user is a Veteran, and could be limiting Veterans from updating their direct deposit information. [More information about the statuses and direct Veteran impact can be found in this link.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/ineligibility-error-messaging-logic.md)

## Lighthouse process diagram for eligibility 

<img width="720" height="404" alt="448550768-28b39edb-4524-4fed-8f17-1e768eb6bbe1" src="https://github.com/user-attachments/assets/d20b1aad-e44d-4dd7-a816-36c14b59f52d" />

# Project history 

* [December 2024: BGS update was identified to be causing bugs](https://dsva.slack.com/archives/C03P6C3FYMR/p1734538027407029?thread_ts=1734447497.292419&cid=C03P6C3FYMR)  
* [February 2025: Overview of the bug](https://dsva.slack.com/archives/C03P6C3FYMR/p1740420696276189?thread_ts=1740420662.604229&cid=C03P6C3FYMR)  
* [March 2025: Lighthouse implemented a fix to stop bugs, and blocks non-Veterans from updating direct deposit](https://dsva.slack.com/archives/C03P6C3FYMR/p1742319982613899?thread_ts=1742314466.773659&cid=C03P6C3FYMR)  
  * [March 2025: Lighthouse release notes supporting the Slack conversation](https://developer.va.gov/explore/api/direct-deposit-management/release-notes)  
* [March 2025: Authenticated Experience team updates Direct deposit experience to reflect Lighthouse changes.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105566)  
  * [March 2025: GH page created to outline problem and solution.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/non-veteran-beneficiaries/README.md)  
* [March 2026: Reconfirmed logic for direct deposit to propose updates to reduce call volume and survey feedback](https://dsva.slack.com/archives/C03P6C3FYMR/p1774468614111709)





<details><summary>Archive | Direct Deposit for Non-Veteran Beneficiaries</summary>

# Direct Deposit for Non-Veteran Beneficiaries

1. [Overview](#overview)
2. [Purpose](#purpose)
3. [Eligibility](#eligibility)
4. [Access to Direct Deposit Information](#access-to-direct-deposit-information)
   - [Read-Only View](#read-only-view)
   - [Online Updates Not Supported](#online-updates-not-supported)
5. [Analytics](#analytics)
6. [Important Artifacts](#important-artifacts)

## Overview 
This initiative ensures that non-veteran beneficiaries—such as dependents, spouses, and survivors— are informed that they are only able to view their direct deposit information on VA.gov and must call in for updates. Read access was revoked by BGS and Lighthouse and we will need to work at a later time to allow user's access to the edit features. 

## Purpose
- Provide information on how non-veteran beneficiaries (e.g., dependents, survivors) can **view** their direct deposit details.
- Explain why online updates are not supported and how users can make changes via VA assistance.

## Eligibility

Veterans are the only people who can update on VA.gov 
If classified as a Dependent we will show the alert seen in the design below 
Also if classified as "Neither veteran nor dependent" we will show the same alert

Lighthouse has said all of the users below are classified as dependents:
  - Spouses receiving VA benefits
  - Dependents
  - Survivors (e.g., receiving Dependency and Indemnity Compensation)

<details><summary>Lighthouse process for eligibility</summary>
<p>


Lighthouse has a definition/process they're using:

![image](https://github.com/user-attachments/assets/28b39edb-4524-4fed-8f17-1e768eb6bbe1)

Lighthouse created a new field to allow VA.gov to preemptively detect if a user is a veteran or dependent to blocke edits their direct deposit information. That field is called `veteranStatus`

This new field has the following options ([enums found on the LH documentation page](https://developer.va.gov/explore/api/direct-deposit-management/docs?version=current)):

- VETERAN
- DEPENDENT
- NEITHER_VETERAN_NOR_DEPENDENT
- COULD_NOT_DETERMINE_DUE_TO_EXCEPTION

</p>
</details> 


## Access to Direct Deposit Information

### Read-Only View
- Non-veteran beneficiaries can **view** their current direct deposit details (e.g., masked account number, bank name).
- Displayed in a read-only format within the Profile section of VA.gov.

### Online Updates Not Supported
- Direct deposit updates are **not available online** for non-veteran beneficiaries.
- Users will see a message explaining this limitation and the steps to take.

![image](https://github.com/user-attachments/assets/14368ecb-a1a4-4a77-b8b9-75b9b5d4d76a)

## Analytics
- [Basic GA4 template that each person will need to update for their own view of the data](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/5Jm2bveUQDG4SBSAp_OrJQ)

### Launch showing improved metrics 

The big change was a drop in 422's after the new push - but we still have high 502s
#### GET/SHOW

![image](https://github.com/user-attachments/assets/8025d0ab-7ab5-48f1-aa2c-116dca7393a0)

#### PUT/UPDATE 

![image](https://github.com/user-attachments/assets/0b258e5d-9f81-42c9-b1b4-4ca46da647ed)


## Important Artifcats 
-  [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92610)
-  [Designs](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=1855-3868&t=919ZyW3EaSu2495z-0)

</details>
