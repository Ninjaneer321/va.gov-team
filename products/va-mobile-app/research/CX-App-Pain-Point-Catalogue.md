# CX App Pain Point Catalog

## When & How to Update This Catalog

### Ownership

**[TBD — assign owner]** owns the CX Pain Point Library and is responsible for keeping this catalog current. The owner reviews incoming feedback, adds or updates pain points, and maintains the change log.

### Sources & When to Update

**Update this catalog when new user feedback is received** from any of these sources: App Store and Google Play reviews, in-app surveys, platform surveys, retros, direct user feedback, quarterly app review analyses, and monthly research reports.

**When to update:** After each quarterly app review analysis; when monthly reports reveal recurring themes not yet captured; when retros or direct feedback surface new or escalating issues; and when significant product changes (e.g., new features, integrations) may affect existing pain points.

### Ranking Factors

Use these factors to assess and rank each pain point when adding or updating entries. Each factor maps to a column in the pain point table below.

| Factor | Definition | Table Column |
|--------|-------------|--------------|
| **Severity** | High = user cannot accomplish main task or would do it wrong; Medium = can accomplish but with confusion/workarounds/minor errors; Low = would be better UX if resolved | Severity |
| **Trending/Frequency** | First-time issue vs. found in multiple research reports/sources | Trending/Frequency |
| **Users Impacted** | Edge case, some users, majority of users | Users Impacted |
| **Legal/Risk Obligation** | e.g., accessibility issue, data privacy issue | Legal/Risk |

### Process for Adding to the Library

1. Add new pain points as rows in the table below. Assess each pain point against the ranking factors above and populate the corresponding columns.
2. Link evidence (e.g., quarterly analysis, monthly reports) in the Evidence column.
3. Document the catalog in the research folder of the GitHub repo. All pain point catalogs live in the Mobile Platform research documentation.
4. Add a change log entry for any substantive update (new pain point, status change, or significant edit).

### Pain Point Lifecycle (Status)

| Status | Meaning |
|--------|---------|
| *(blank)* | Not yet triaged or no mitigation in progress |
| Planning research | Research or discovery planned to inform mitigation |
| In progress | Mitigation actively being built or implemented |
| Partially resolved | Some mitigation deployed; may need further work |
| Resolved | Pain point addressed; user feedback no longer reports the issue. Remove from active table or move to an "Archived/Resolved" section and add change log entry |

**How a pain point gets marked as resolved:** The owner confirms that the mitigation has been deployed and that feedback sources (app reviews, surveys, etc.) no longer report the issue. Update the Status column to "Resolved," add a change log entry, and either archive the row or move it to a resolved section.

---

## Pain Points

| Rank | Pain Point | Severity | Trending/Frequency | Users Impacted | Legal/Risk | Evidence | Key Mitigation | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | As a Veteran, I want to login quickly and reliably to the mobile app, but I am blocked by issues such as sign-in looping and authentication problems | High | Frequently reported by large number of users with negative feedback | All users | Potential disparity for Android users — higher instance of login issues reported in feedback despite there being more iOS app users could be construed as discriminatory. There is a higher rate of Android users leaving feedback overall which likely accounts for this. | [Mobile App Q3 Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Mobile%20App%20Q3%20Analysis.pdf)| | Requires further investigation (engineering/data analytics) to identify root causes of latency and authentication failures; likely multiple mitigations needed | |
| 2 | As a Veteran, I want to have detailed information about my appointments so I can adequately prepare for them, but I am blocked by not having enough appointment details such as provider name or the issue I am scheduled to be seen for. | Medium | Recurring report in multiple research reports; less than sign-in issues | Majority of users (not all app users have appointments) | None | [Mobile App Q3 Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Mobile%20App%20Q3%20Analysis.pdf) [VAHB Mobile App November 2025 report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Monthly%20User%20Research/VAHB.Mobile.App.November.2025.Report.pdf) | Provide requested information in appointments section | | 
| 3 | As a Veteran who has medical travel I want reimbursement for, I want to easily find and submit travel pay in the app for all my eligible appointments, but I am blocked by it being difficult to find the travel pay area in the app. | Medium | Moderate negative feedback, less than sign-in issues | Subset of users (those with mileage eligible for reimbursement) | None (workaround exists via website) | [Mobile App Q3 Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Mobile%20App%20Q3%20Analysis.pdf) | Highlight travel pay on the home screen; conduct research with Veteran users to identify the most logical placement for travel pay | Planning research | 
| 4 | As a Veteran who has medical appointments, I want to manage all appointment based tasks directly in the app, but am blocked by my inability to book or cancel appointments in the app. | Medium | Recurring in multiple monthly reports | Majority of users (those with VA medical appointments; exact % TBD) | None (available on website) | [Mobile App Q3 Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Mobile%20App%20Q3%20Analysis.pdf) | Build feature allowing users to make and cancel appointments within the app | Partially in progress — "Start Scheduling" button has been built and may be released, but is not yet live in the app. Will need to test if this sufficiently meets Veterans' needs | |
| 5 | As a Veteran, I want to delete old secure messages so I can focus on new and relevant messages, but I am blocked by the app not providing me the ability to delete. | Low | Multiple monthly reports | Majority of users (not all app users use secure messaging) | None | [Mobile App Q3 Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Mobile%20App%20Q3%20Analysis.pdf) | Create functionality to delete messages; evaluate usage and whether this fully resolves user pain point | |
| 6 | As a Veteran, I want to access my VA letters and documents (claims decision letters, payment history, disability letters) in the app, but I am blocked by letters being missing, payment history only loading for certain years, and incorrect dates on printed letters. | Medium | Emerging in Q4; ~15+ mentions across Oct–Dec 2025 | Subset of users (those who need letters/documents) | None (workaround exists via website) | [Q4 App Review Analysis](Q4-App-Review-Analysis.md) | Audit backend data loading for historical documents and payment records; correct date display on printed disability letters; ensure parity between app and VA.gov | New — Q4 2025 |
| 7 | As a Veteran, I want to send a message to my provider, but I am blocked by my provider not appearing in the recipient list and difficulty locating the messaging feature in the app. | Medium | Recurring since Q3 (MHV list change); ~10+ mentions in Q4 | Subset of users (those who use secure messaging) | None | [Q4 App Review Analysis](Q4-App-Review-Analysis.md) [Mobile App Q3 Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Quarterly%20User%20Research%20/Q3/Mobile%20App%20Q3%20Analysis.pdf) | Allow users to search or manually connect to needed providers; direct users to messaging from homepage; continue case analysis for messaging list issues | New — Q4 2025 |
| 8 | As a Veteran, I want to clearly understand my prescription status (shipped, pending, available for refill), but I am blocked by confusing refill lists, unclear status labels, outdated pharmacy information, and lack of medication descriptions or prescribing doctor information. | Medium | Reported in Q4; prescriptions remain highest-rated feature but status clarity is a gap | Subset of users (those who refill prescriptions) | None | [Q4 App Review Analysis](Q4-App-Review-Analysis.md) | Enhance refill status visibility with clearer labels; add prescribing doctor and medication description where available; consider removing cancelled/expired medications from refill list | New — Q4 2025 |
| 9 | As a Veteran, I want the app to work reliably after updates, but I am blocked by the app no longer working properly after updates, including crashes and extended loading times. | Medium | Small but impactful subset of Q4 reviews | Edge case / some users | None | [Q4 App Review Analysis](Q4-App-Review-Analysis.md) | Investigate post-update stability; improve error handling and loading states | New — Q4 2025 |

---

## Change Log

| Date | Change |
|------|--------|
| March 2026 | Added pain points #6–9 from Q4 App Review Analysis: Letters/Documents Access, Messaging Provider Access, Prescription Status Clarity, App Errors/Crashes. Added "When & How to Update This Catalog" quick guide. |

---

## Action Items

- [ ] Work with engineering to pull specific metrics on percentage of users impacted for each pain point (appointments, secure messaging, travel pay, etc.)
- [ ] Determine percentage of app users who use the app for healthcare vs. benefits only
- [ ] (Pain point #4) Check with Binny / Appointments PO on the status of the "Start Scheduling" button and timeline for going live

