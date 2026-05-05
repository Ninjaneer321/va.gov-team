# Foreign Medical Program Benefit Letter Release Plan

## Overview

This release plan outlines the phases for launching the FMP (Foreign Medical Program) benefit letter functionality, ensuring the feature performs as expected and delivers the desired user outcomes.

---

## Step 1: Development

Development was done behind feature flags, following the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide).

| Toggle name | Description |
| ----------- | ----------- |
| [fmp_benefits_authorization_letter](https://api.va.gov/flipper/features/fmp_benefits_authorization_letter) | When enabled, if a veteran has the FMP letter available in Lighthouse it will be visible in the Benefit Letters and Documents web page |
| [fmp_benefits_authorization_letter_mobile](https://api.va.gov/flipper/features/fmp_benefits_authorization_letter_mobile) | When enabled, along with the fmp_benefits_authorization_letter flag, if a veteran has the FMP letter available in Lighthouse it will be visible in the mobile app's Review Letters page if the veteran has not updated their mobile app|
| FMPAvailable (within va-mobile) | When enabled, along with the fmp_benefits_authorization_letter and fmp_benefits_authorization_letter_mobile flags, if a veteran has the FMP letter available in Lighthouse it will be visible in the mobile app's Review Letters page if the veteran has updated their app to the latest build |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day.

Before enabling your feature toggle in production, you'll need to:

**Web**
- [x] Testing with the feature flags for web. Confirm that with the flags off, the FMP letter is not visible for a veteran who does and does not have the letter in FMP. Confirm that with the flags on, the FMP letter is available for those who have it in Lighthouse. Test results documented in [vets-website PR 41814](https://github.com/department-of-veterans-affairs/vets-website/pull/41814)
- [x] Testing with the feature flags for mobile. Confirm that with the flags off, the FMP letter is not visible for a veteran who does and does not have the letter in FMP. Confirm that with the flags on, the FMP letter is available for those who have it in Lighthouse. Test results documented in [va-mobile PR 12838](https://github.com/department-of-veterans-affairs/va-mobile-app/pull/12838)
- [x] Confirm production deployment of Web code
- [x] Complete Staging Review
- [x] Gather details for initial user rollout
- [x] Confirm with the VFMP-Veterans and Family Member Program team that they are ready for release
- [x] Contact center / support team trained on FMP letter feature (confirm with VFMP team whether training is needed)
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
    - [x] Review the plan with your DEPO/OCTO representative
    - [x] Review the release plan with your team

**Mobile**
- [x] Confirm the Mobile App team has completed any desired testing
- [x] Complete go-live mobile template ticket
- [ ] Confirm related code is released to iOS and Android

---

## Phase I: User Acceptance Testing
*Test real-world user scenarios to ensure the FMP benefit letter performs as expected.*

### Planning

- **Desired date range or test duration:** 3/30 - 4/1 (May change due to Staging Review and VFMP user recruitment)
- **Desired number of users:** [To be confirmed with VFMP-Veterans and Family Member Program Team]
- **The group(s) from which you'll recruit test users:** The VFMP team has a set list of veterans they would like to use
- **How you'll recruit test users:** VFMP has done the recruitment
- **How you'll give test users access to the product:** The feature flags listed at the top of the document can be specified to be enabled for a select list of users by specifying their email in the actor list.
- **What "Success" criteria will you look at before launch?**
  - Letter does not display in the list of Benefit Letters and Documents for veterans who are not eligible
  - Letter does display in the list of Benefit Letters and Documents for veterans who are eligible
  - Letter is downloadable from the web
  - Visibility in the letter list matches the desired design document
  - PDF download of the letter is as desired by the VFMP team
- **How you'll measure your "Success" criteria?**
  - Automated testing and QA review
  - User feedback from test participants
  - Analytics on page views and download rates
  - Accessibility audit and screen reader testing

### Results

- **Date completed:** Users added 3/31
- **Number of users:** 13
- **Results per your "Success" criteria:** 9 users confirmed they saw the letter and were able to download the letter. 1 user was unable to see the letter, however the FMP team confirmed that this may have been an issue with user selection. They had no concerns with proceeding.
- **Number of bugs identified / fixed:** None
- **Any UX changes necessary based on the logs, user feedback, or VA challenges?**
  - [ ] Yes
  - [x] No
  - If yes, what: [Document changes needed]

---

## Phase II: Staged Rollout

### Rollout Planning

- **Desired date range:** 4/6 - 4/17 
- **How will you make the product available in production while limiting the number of users who can find/access it:** By using the feature flag `fmp_benefits_authorization_letter` and the `enable_percentage_of_actors` feature to enable it for a percentage of users.
If mobile testing is desired, both mobile related feature flags should be enabled and the gating of the percentage of the users will be done solely by the `fmp_benefits_authorization_letter` flag.
- **Success criteria (metrics-based criteria for advancing to the next stage):**
  - [ ] No increase in errors on the letter download page
  - [ ] Successful downloads shown in GA Report
- **Defined KPIs:**
  - KPI 1: Error rate on the letter download page (target: no statistically significant increase vs. baseline)
  - KPI 2: Number of unique users successfully downloading the FMP letter
- **Links to dashboards showing success criteria metrics:**
  - [DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/n29-azs-rpp?fromUser=false&refresh_mode=sliding&from_ts=1775065921951&to_ts=1775069521951&live=true)
  - [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/hkpzxMCySNe5WvYEWRsQQw)
- **Who is monitoring the dashboard(s)?:** BMT3 (Liana Fleming, Seth Darr)

### Rollback Process

Rollback will be done by disabling feature flags. To disable FMP letter availability, set `fmp_benefits_authorization_letter` and `fmp_benefits_authorization_letter_mobile` to 0% or fully disabled. This will hide the letter from the list in both web and mobile.

**Rollback triggers:** Initiate rollback immediately if any of the following thresholds are breached during any stage:
- Error rate on the letter download page increases by more than 5% relative to baseline
- Letter download failure rate exceeds 3%
- A critical accessibility or data integrity issue is identified

---

### Stage A: Canary

*** Due to success of production UAT we will be moving immediately to stage B ***
---

### Stage B: 25% of Users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- **Percentage of Users:** 25%

#### Results

- **Date completed:** Enabled to 25% on 4/6/26
- **Number of users:** 48 users downloaded the letter
- **Metrics at this stage (per success criteria):**
  - [x] No increase in errors on the letter download page - Overall success rate was 99.9% which is consistent or above all other letters
  - [x] Successful downloads shown in GA Report
- **Rollback triggered?** [ ] Yes  [x] No
- **Was any downstream service affected by the change?** No
- **Types of errors logged:** 2 warnings were logged 
  - One 499 response code. This means the PDF did not complete downloading, which could be caused by the veteran closing or refreshing prior to the completion or temporary slowness. No immediate remediation needed since we only saw this once.
  - One 403 response code. This indicates a veteran was authenticated but not authorized to access the letter (e.g. not FMP-eligible, or a Lighthouse entitlement check failing). We have seen this code with other letters and the count is consistent with baseline, so no immediate remediation is needed.

- **What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?** No changes at this time

---

### Stage C: 50% of Users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- **Percentage of Users:** 50%

#### Results

- **Date completed:**  Enabled to 50% on 4/7/26
- **Number of users:** 687 users downloaded the letter
- **Metrics at this stage (per success criteria):**
  - [x] No increase in errors on the letter download page - Overall success rate was 99.7% which is consistent or above all other letters. There was a known outage during this time period that caused the decrease in success rate.
  - [x] Successful downloads shown in GA Report
- **Rollback triggered?** [ ] Yes  [x] No
- **Was any downstream service affected by the change?** No
- **Types of errors logged:** 8 warnings/errors were logged (5 503s, 2 500s, and 1 422)
- **What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?** No changes at this time

---

### Stage D: 100% of Users

#### Planning

- **Percentage of Users:** 100%

#### Results

- **Date completed:**  Enabled to 100% on 4/8/26
- **Number of users:** [To be filled in]
- **Metrics at this stage (per success criteria):**
  - [ ] No increase in errors on the letter download page
  - [ ] Successful downloads shown in GA Report
- **Rollback triggered?** [ ] Yes  [ ] No
- **Was any downstream service affected by the change?** __
- **Types of errors logged:** [None / describe]
- **What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?** [Document or N/A]

---

## Post-Launch Metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins as a minimum.

---

## Phase III: Post-Launch Results (Optional)

### 1-Week Results

- **Number of unique users:** [To be filled in]
- **KPI 1 actual — Letter download success rate:** [Data]
- **KPI 2 actual — Error rate on letter download page:** [Data]
- **KPI 3 actual — Unique users successfully downloading FMP letter:** [Data]
- **Any issues with Platform handling/processing?**
  - [ ] Yes
  - [ ] No
  - If yes, what: [Document issues]
- **Any UX changes necessary based on the logs, user feedback, or VA challenges?**
  - [ ] Yes
  - [ ] No
  - If yes, what: [Document changes]

### 1-Month Results

- **Number of unique users:** [To be filled in]
- **KPI 1 actual — Letter download success rate:** [Data]
- **KPI 2 actual — Error rate on letter download page:** [Data]
- **KPI 3 actual — Unique users successfully downloading FMP letter:** [Data]
- **Any issues with Platform handling/processing?**
  - [ ] Yes
  - [ ] No
  - If yes, what: [Document issues]
- **Any UX changes necessary based on the logs, user feedback, or VA challenges?**
  - [ ] Yes
  - [ ] No
  - If yes, what: [Document changes]

---

## Post-Launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
   [Response]

2. **What qualitative feedback have you gathered from users or other stakeholders, if any?**
   [Response]

3. **Which of the assumptions you listed in your product outline were/were not validated?**
   [Response]

4. **How might your product evolve now or in the future based on these results?**
   [Response]

---

## References

- [Foreign Medical Program (FMP) Letter Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126469)
- [Foreign Medical Program (FMP) Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/foreign-medical-program)
- [Benefits Claims Release Plans](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/benefits-portfolio/benefits-management-tools/engineering/release-plans)