# Profile 2.0 Release Plan

**Last Updated 3/17/2026**

## Communication
Primary communications are taking place in the [Authenticated Experience DSVA Slack Channel](https://dsva.slack.com/archives/C909ZG2BB).

## Important Artifacts
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108656)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va-3.0)
- [Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108140)
- [Data Dog Dashboard](https://vagov.ddog-gov.com/dashboard/4dk-pwd-mni/authenticated-experience-my-va?fromUser=false&refresh_mode=sliding&from_ts=1741082862507&to_ts=1741097262507&live=true)
- [Domo Dashboard](https://va-gov.domo.com/page/825663825?userId=932934509)
- [Figma Designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=4134-28964&t=xBCTYHzPUV2tRLLJ-1)
- [Relevant Use Cases]()
- [QA Test Plan]() - in progress
- [Staging Users]() - in progress


## Development & Test Plan
There are no known API changes occurring within this project. The development includes IA, content, and accessibility enhancements to the current My VA experience. The Authenticated Experience team is putting this development behind a feature flag, ** flag. These changes will impact all users with an existing va.gov account, and new users that create a va.gov account after this release takes place.

### Testing
For this release we will not perform UAT testing with Veterans.

We will conduct QA testing in the va.gov staging environment to:
- Validate all content and interactions match the approved designs;
- Validate API transaction data matches the front-end user interactions;
- Validate all data is stored and saved appropriately.

## Release
- Flip feature flag to on.
- Staged rollout 10, 50, 100%
- Monitoring by development team, product & delivery leads.

### Metrics-based criteria for staged rollout
My VA 3.0 does not introduce new or updated backend services or API calls. The changes in this release are limited to front-end information architecture, navigation, content, and accessibility updates.

Because no backend behavior is changing, we do not expect any variance in API error rates or latency. As a result, backend performance metrics are not used as advancement criteria for this rollout.

Instead, the purpose of staged rollout metrics for My VA 3.0 is to ensure that the updated information architecture and navigation do not introduce user confusion, misnavigation, or new friction compared to the existing My VA experience.

Before advancing rollout to the next stage, we will review the following indicators:
- **Veteran Support Center contact volume and logs**: Monitored for spikes or recurring themes related to My VA navigation, findability, missing information, or perceived breakage following the rollout.
- **Qualitative Medallia feedback**: Reviewed for sustained or recurring comments indicating difficulty locating information, misunderstanding section changes, or frustration with the new My VA structure. Medallia feedback is treated as a qualitative signal and is not evaluated against fixed quantitative targets.
- **Real User Monitoring (RUM) frustration signals**: Including rage clicks, dead clicks, and error clicks, reviewed directionally to identify potential usability or navigation regressions introduced by the new information architecture.

These signals are evaluated holistically and over time. No single metric is used as a pass/fail gate. Rollout may be paused if multiple signals consistently indicate increased user friction or confusion attributable to My VA 3.0 changes.

### Rollback Plan: 
Tech Lead, Design Lead, PM, and PO will monitor DataDog analytics. If the team notices a spike in errors, the team will disable the feature, debug, and re-release.


### Go Live 
We will measure success of the release by monitoring:
- API error rates & latency
- Veteran Support Center & Medallia feedback

### 1-week results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?||
|Types of errors logged:| )|
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?||
|If yes, what:||


### 1-month results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?| |
|Types of errors logged:|  |
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?| |
|If yes, what:||

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?
