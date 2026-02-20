# CX App Pain Point Catalog

## Ranking Factors

- **Severity:** High (user cannot accomplish main task or would do it wrong), Medium (can accomplish but with some confusion/workarounds/minor errors), Low (would be better user experience if pain point resolved)
- **Trending/Frequency:** First time issue vs. found in multiple research reports/sources
- **Number of Users Impacted:** Edge case/1 team, all team members/majority of users, impacts majority of both team members and users
- **Legal/Risk Obligation:** e.g., accessibility issue or data privacy issue

---

| Rank | Pain Point | Severity | Trending/Frequency | Users Impacted | Legal/Risk | Description | Evidence | Key Mitigation | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | As a Veteran, I want to sign on easily to the mobile app, but I am blocked by login and authentication issues. | High | Frequently reported by large number of users with negative feedback | All users | Potential disparity for Android users — higher instance of sign-in issues could be construed as discriminatory | | | Requires further investigation (engineering/data analytics) to identify root causes of latency and authentication failures; likely multiple mitigations needed | |
| 2 | As a Veteran, I want to have detailed information about my appointments so I can adequately prepare for them, but I am blocked by not having enough appointment details such as provider name or the issue I am scheduled to be seen for. | | | Majority of users (not all app users have appointments) | | | | | |
| 3 | As a Veteran who has medical travel I want reimbursement for, I want to easily find and submit travel pay in the app for all my eligible appointments, but I am blocked by it being difficult to find the travel pay area in the app. | Medium | Moderate negative feedback, less than sign-in issues | Subset of users (those with mileage eligible for reimbursement) | None (workaround exists via website) | | | Highlight travel pay on the home screen; conduct research with Veteran users to identify the most logical placement for travel pay | |
| 4 | As a Veteran who has medical appointments, I want to book or cancel appointments directly in the app, but I am blocked by my inability to currently do so. | Medium | | Majority of users (those with VA medical appointments; exact % TBD) | None (available on website) | | | Build feature allowing users to make and cancel appointments within the app | Partially in progress — "Start Scheduling" button has been built and may be released, but is not yet live in the app |
| 5 | As a Veteran, I want to delete old secure messages, but I am blocked by the app not having a delete message feature. | Low | Multiple sources | Majority of users (not all app users use secure messaging) | None | Concretely translatable to feature request; straightforward evaluation | | Create functionality to delete messages | |

---

## Action Items

- [ ] Work with engineering to pull specific metrics on percentage of users impacted for each pain point (appointments, secure messaging, travel pay, etc.)
- [ ] Determine percentage of app users who use the app for healthcare vs. benefits only
- [ ] (Pain point #4) Check with Binny / Appointments PO on the status of the "Start Scheduling" button and timeline for going live

