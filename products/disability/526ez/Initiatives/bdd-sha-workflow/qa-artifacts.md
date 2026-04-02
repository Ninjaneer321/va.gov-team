# QA Artifacts

## Introduction

This page provides evidence required as part of the Collaboration Cycle process for the Digital BDD project.

[Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134254)

## Regression Test Plan

## Test Plan

TODO

## Traceability Reports

TODO

## E2E Test Report

TODO

## E2E Tests - Best Practice Adherence

TODO

## E2E Test Execution Time

TODO

## Unit Test Coverage

TODO

## Unit Tests - Best Practice Adherence

TODO

## Endpoint Monitoring

**Changes are primarily frontend-based and does not impact architecture. Listing existing solutions that Form 21-526EZ utilizes for mitigating issues.**

Form 21-526EZ endpoints have monitoring enabled through this dashboard.

[Dashboard - Benefits - Form 526 Disability Compensation Product Insights](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/benefits-form-526-disability-compensation-product-insights?fromUser=false&refresh_mode=sliding&from_ts=1774969452129&to_ts=1775142252129&live=true)

The monitors for this dashboard get sent to the [#benefits-disability-notifications](https://dsva.slack.com/archives/C05URMLM09Z) Slack channel.

## Logging Silent Failures

**Changes are primarily frontend-based and does not impact architecture. Listing existing solutions that Form 21-526EZ utilizes for mitigating issues.**

Form 21-526EZ utilizes the Lighthouse `/synchronous` endpoint for the actual claim submission. If the claim submission
fails, the veteran is sent on a "backup" path that still shows their claim as being submitted successfully, but their
confirmation will just omit the claim id. This backup path will utilize an async job through SideKiq to submit their
claim to Lighthouse.

In addition to the claim submission, the "supporting evidence" is first stored in S3 and then when a claim is fully
submitted, a SideKiq job kicks off to upload that evidence to LightHouse.

The following dashboard provides monitoring for our SideKiq jobs, covering both of these use cases.

[Dashboard - vets-api-sidekiq](https://vagov.ddog-gov.com/apm/resource/vets-api-sidekiq/sidekiq.job/72c3579499cb45e6?query=env%3Aeks-prod%20operation_name%3Asidekiq.job%20service%3Avets-api-sidekiq&env=eks-prod&fromUser=false&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%2CgroupBy%3A%5B%5D%29%2Chits%3A%28selected%3Acount%2CgroupBy%3A%5B%5D%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%2CgroupBy%3A%5B%5D%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&start=1775140623252&end=1775144223252&paused=false)

The monitors for this dashboard get sent to the [#benefits-disability-notifications](https://dsva.slack.com/archives/C05URMLM09Z) Slack channel.

## PDF Form Validation

Changes are purely frontend and do not involve PDF Form Generation.

## No Cross App Dependency

TODO
