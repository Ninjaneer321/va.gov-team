# CX App Pain Point Catalog

## Ranking Factors

- **Severity:** High (user cannot accomplish main task or would do it wrong), Medium (can accomplish but with some confusion/workarounds/minor errors), Low (would be better user experience if pain point resolved)
- **Trending/Frequency:** First time issue vs. found in multiple research reports/sources
- **Number of Users Impacted:** Edge case, some users, majority of users
- **Legal/Risk Obligation:** e.g., accessibility issue or data privacy issue

---

| Rank | Pain Point | Severity | Trending/Frequency | Users Impacted | Legal/Risk | Evidence | Key Mitigation | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | As a Veteran, I want to login quickly and reliably to the mobile app, but I am blocked by issues such as sign-in looping and authentication problems | High | Frequently reported by large number of users with negative feedback | All users | Potential disparity for Android users — higher instance of login issues reported in feedback despite there being more iOS app users could be construed as discriminatory. There is a higher rate of Android users leaving feedback overall which likely accounts for this. | [Mobile App Q3 Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Mobile%20App%20Q3%20Analysis.pdf))| | Requires further investigation (engineering/data analytics) to identify root causes of latency and authentication failures; likely multiple mitigations needed | |
| 2 | As a Veteran, I want to have detailed information about my appointments so I can adequately prepare for them, but I am blocked by not having enough appointment details such as provider name or the issue I am scheduled to be seen for. | Medium | Recurring report in multiple research reports; less than sign-in issues | Majority of users (not all app users have appointments) | None | [VAHB Mobile App November 2025 report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Monthly%20User%20Research/VAHB.Mobile.App.November.2025.Report.pdf) | Provide requested information in appointments section | | |
| 3 | As a Veteran who has medical travel I want reimbursement for, I want to easily find and submit travel pay in the app for all my eligible appointments, but I am blocked by it being difficult to find the travel pay area in the app. | Medium | Moderate negative feedback, less than sign-in issues | Subset of users (those with mileage eligible for reimbursement) | None (workaround exists via website) | | | Highlight travel pay on the home screen; conduct research with Veteran users to identify the most logical placement for travel pay | |
| 4 | As a Veteran who has medical appointments, I want to manage all appointment based tasks directly in the app, but am blocked by my inability to book or cancel appointments in the app. | Medium | Recurring in multiple monthly reports | Majority of users (those with VA medical appointments; exact % TBD) | None (available on website) | | | Build feature allowing users to make and cancel appointments within the app | Partially in progress — "Start Scheduling" button has been built and may be released, but is not yet live in the app. Will need to test if this sufficiently meets Veterans' needs |
| 5 | As a Veteran, I want to delete old secure messages so I can focus on new and relevant messages, but I am blocked by the app not providing me the ability to delete. | Low | Multiple monthly reports | Majority of users (not all app users use secure messaging) | None | | | Create functionality to delete messages; evaluate usage and whether this fully resolves user pain point | |

---

## Action Items

- [ ] Work with engineering to pull specific metrics on percentage of users impacted for each pain point (appointments, secure messaging, travel pay, etc.)
- [ ] Determine percentage of app users who use the app for healthcare vs. benefits only
- [ ] (Pain point #4) Check with Binny / Appointments PO on the status of the "Start Scheduling" button and timeline for going live

