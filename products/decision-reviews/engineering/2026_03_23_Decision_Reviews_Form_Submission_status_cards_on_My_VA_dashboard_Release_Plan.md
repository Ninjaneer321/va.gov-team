# Decision Reviews Form Submission Status Cards on My VA Dashboard Release Plan
(link to [original canvas](https://dsva.slack.com/docs/T03FECE8V/F0AKGKGGX7T))

## Overview

Currently, when decision review applications are received by VA and an end product (EP) is established:

- The decision review will be listed in the Claim Status Tool, and
- Veterans will receive a confirmation email

However, there isn't a way for Veterans to check the status of their decision review prior to it being received by VA, which can take 7-10 days. During this time, the only way to check the status is to call. If an error occurs, Veterans will be notified by email, but we'd like to also provide this information in the app.

**Our goal is to:**

- Increase transparency into the submission process and reduce concerns around lost submissions
- Provide Veterans a self-service way to check their submission status and reduce call center inquiries

> 💡 With this release, Veterans will be able to see cards corresponding to their decision review form submissions under the **Benefit applications and forms** section on My VA labeled with [the appropriate submission status](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status#form-submission-status-in-my-va).

## Related Tickets

- [\[Super Epic\] Veterans can view the status of their decision review form and evidence submission in MyVA dashboard #110583](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110583)
- [\[Eng\] Display Decision Review form statuses in MyVA Dashboard #121198](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121198)
- [\[Eng\] Update SC and standalone 4142 submission cards in MyVA #129014](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129014)
- [\[Eng\] Add a link on our confirmation pages to the MyVA dashboard #130891](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130891)
- [\[Product\] Set up GA tracking for "Veterans can view status..." #130949](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130949)
- [\[Eng\] Update accordion info on MyVA to include DR forms #134060](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134060)
- [\[Eng\] Release DR form submission statuses on MyVA #130893](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130893)

## Release Plan

This release plan does not follow the [VA.gov product management release plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) because we are not answering yes to any of the stated questions:

- ❌ Does the feature you are working on moderately or significantly affect the Veteran experience of the product?
- ❌ Does the feature you are working on change the structure of the underlying data?
- ❌ Does the feature's backend or downstream interactions change?
- ❌ Is this a brand new experience for a Veteran?

However, we are pursuing a staged rollout because the addition of this feature is expected to have a minor to moderate impact on traffic to backend services (the Lighthouse Decision Reviews API that we pull DR form submission statuses from).

> **NOTE:** Percentage-based staged rollout represents a chance of seeing the feature, and not a hard number ([and this guidance was only recently clarified](https://dsva.slack.com/archives/C0460N83Y9G/p1772042493997769?thread_ts=1772042488.720789&cid=C0460N83Y9G)). If we set the release to 25%, anywhere between 0–100% of users could see the feature.

> ### [Enabling a feature flag for a percentage of actors: Logged-in Users](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide)
>
> When `actor_type` is set to `user`, each logged-in user is evaluated independently against the configured rollout percentage. Each user has the same configured percentage chance of having the feature enabled. The result is deterministic for that user, meaning they will consistently see the same behavior on subsequent visits, unless the configured percentage changes.

### Rollout Steps

- ✅ Obtain approval from enablement team for release
- **Notes:**
  - Before each percentage increase, check and log GA click-through rate on the "Check the status of your form on My VA" link
  - Feature toggle name: `my_va_display_decision_reviews_forms` ([link](https://api.va.gov/flipper/features/my_va_display_decision_reviews_forms))

- ✅ **Turn feature toggle on to 1% (canary release): March 10th at 12pm ET**
  - GA funnel notes (from March 9–12):
    - _Note: I had to make a personal copy and correct the funnel dates to reflect the current release period. See screenshots below for more detail._
    - SC: 2,008 active users, 1 user (0.05%) clicked on the new link to check status on My VA
    - HLR: 986 active users, 2 users (0.2%) clicked on the new link
    - NOD: 212 active users, 0 users

- ✅ **Increase to 25%: March 12th at 9AM ET**
  - GA funnel notes (from March 12–16, see screenshots below):
    - SC: 1,718 active users, 70 users (4.07%) clicked on the new link to check status on My VA
    - HLR: 826 active users, 24 users (2.91%) clicked on the new link
    - NOD: 191 active users, 13 users (6.81%) clicked on the new link

- ✅ **Increase to 50%: March 16th at 9AM ET**
  - GA funnel notes (from March 16–23, see screenshots below):
    - SC: 3,548 active users, 292 users (8.23%) clicked on the new link to check status on My VA
    - HLR: 1,745 active users, 152 users (8.71%) clicked on the new link
    - NOD: 375 active users, 24 users (6.4%) clicked on the new link

- ✅ **Increase to 100%/fully enabled: March 23rd at 9AM ET**

## Metrics

**[GA funnel](https://analytics.google.com/analytics/web/?pli=1#/analysis/a50123418p419143770/edit/rrYN-c0iQG-EjAHw1tvlkQ)** (from [#130949](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130949)):

Tracks click-through rate from the newly added "Check the status of your form on My VA" link on each of our decision review flows' confirmation page. Note that the visibility of the link is also controlled by the same feature toggle, so we don't direct users to the My VA page if they won't be able to see their submission statuses there.

## GA Screenshots

### From the 1–25% release

<img width="1676" height="677" alt="image" src="https://github.com/user-attachments/assets/7f053710-711a-4c88-9fdf-c250313d1781" />
<img width="1677" height="704" alt="image" src="https://github.com/user-attachments/assets/6195cf2b-c4a3-4b5d-8b96-ff8ca02f8474" />
<img width="1690" height="721" alt="image" src="https://github.com/user-attachments/assets/1f9e53d7-14e2-4965-abc8-1087a904fda2" />

### From the 25–50% release

<img width="1231" height="651" alt="image" src="https://github.com/user-attachments/assets/0af5d578-a9ae-43a7-bc7a-c29368c9ab46" />
<img width="2422" height="1264" alt="image" src="https://github.com/user-attachments/assets/1ffc9ced-cf25-44bc-a426-7b93a683511f" />
<img width="1206" height="636" alt="image" src="https://github.com/user-attachments/assets/bd531b6b-e512-4422-9052-844b9ede3ab9" />

### From the 50–100% release

<img width="2380" height="1266" alt="image" src="https://github.com/user-attachments/assets/8fe07a4a-f7c4-4382-b391-4fd1dc899708" />
<img width="2380" height="1298" alt="image" src="https://github.com/user-attachments/assets/89d9e7c8-6484-499d-bd27-8f6a4855954b" />
<img width="2410" height="1274" alt="image" src="https://github.com/user-attachments/assets/c5162a1c-d2a4-4787-9878-04c493df038b" />

### From March 16th release (base numbers prior to fully enabling)

<img width="2476" height="1306" alt="image" src="https://github.com/user-attachments/assets/235947d2-dddf-42f5-a823-b9f62b3313e5" />
<img width="2436" height="1286" alt="image" src="https://github.com/user-attachments/assets/246458ac-47cb-45a5-91b8-228cf5d60614" />
<img width="2410" height="1274" alt="image" src="https://github.com/user-attachments/assets/3f918aeb-7e4b-4879-8c1e-b1e53583c3d3" />

## Summary Charts

<img width="834" height="431" alt="image" src="https://github.com/user-attachments/assets/b72320a8-9ae5-4470-8f27-07a831526648" />
<img width="814" height="464" alt="image" src="https://github.com/user-attachments/assets/03e5de15-6cf1-4458-958b-d28fba1273bb" />
<img width="572" height="383" alt="image" src="https://github.com/user-attachments/assets/e49d37b4-d488-4cb8-a6ab-d9c01dbd06ec" />
<img width="604" height="517" alt="image" src="https://github.com/user-attachments/assets/bbb80095-ca85-41a1-9f5a-32ce71221cdf" />

# DRAGONS Quarterly Health Tracker

[Slack canvas](https://dsva.slack.com/docs/T03FECE8V/F0AG5SYGR4N)


## Rollback Plan

The engineering lead (@GraceXu) will monitor Datadog logs throughout. If we see one-off unexpected behavior, we will investigate using the `user_uuid` to determine if we should turn off the feature toggle or if the error is unique to one user (e.g. an unlikely scenario would be a single user having an anomalous number of in-progress DR submissions causing the API rate limit to be exceeded).

If we see a significant spike in errors we'll immediately disable the feature flag to rollback.

- Datadog query for errors: [prod](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%22Report%20execution%20failed%20in%20Forms%3A%3ASubmissionStatuses%3A%3AReport%22&agg_m=count&agg_m_source=base&agg_q=status%2Cservice&agg_q_source=base%2Cbase&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice%2C%40http.status_code%2C%40payload.user_uuid&messageDisplay=inline&refresh_mode=sliding&sort=time&sort_m=%2C&sort_m_source=%2C&sort_t=%2C&spanID=336994431213512540&storage=hot&stream_sort=time%2Cdesc&top_n=10%2C10&top_o=top%2Ctop&viz=pattern&x_missing=true%2Ctrue&from_ts=1772219286958&to_ts=1772824086958&live=true) | [staging](https://vagov.ddog-gov.com/logs?query=env%3Aeks-staging%20%22Report%20execution%20failed%20in%20Forms%3A%3ASubmissionStatuses%3A%3AReport%22&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice%2C%40http.status_code%2C%40payload.user_uuid&messageDisplay=inline&refresh_mode=sliding&sort=time&spanID=336994431213512540&storage=hot&stream_sort=time%2Cdesc&viz=stream&from_ts=1772219219404&to_ts=1772824019404&live=true) 
  - **Note:** There were errors in staging resulting from stale test data that we just [cleaned up recently](https://dsva.slack.com/archives/CBU0KDSB1/p1772644035240379?thread_ts=1772640908.842869&cid=CBU0KDSB1)
- 🆕 Added [Datadog monitor](https://vagov.ddog-gov.com/monitors/533358) for monitoring form submission status errors on My VA

## Follow-ups

- [x] Upload this release plan to GitHub [#137560](https://github.com/department-of-veterans-affairs/va.gov-team/issues/137560)
  - [x] Gather immediate data
  - [x] Establish tracking cadence
  - [x] Link to metrics canvas
- [x] Update the My VA status cards implementation tracker per auth exp team's request [#137561](https://github.com/department-of-veterans-affairs/va.gov-team/issues/137561) 
- [x] Review and update GA funnels (meeting scheduled for March 31st)
- [ ] [\[Eng\] Feature flag removal: my_va_display_decision_reviews_forms #132362](https://github.com/department-of-veterans-affairs/va.gov-team/issues/132362)
