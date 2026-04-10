# Mobile Overpay API DataDog Metrics

## Overview
This document outlines and explains the metrics featured in the **_Mobile Debt Metrics_** section of the [Debt Resolution](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&from_ts=1746082800000&to_ts=1748761199999&live=false) DataDog dashboard.

**Note:** The `Mobile::DebtsController#index` endpoint returns the list of all overpayments for a specific veteran. When the optional parameter `countOnly` is included and set to `true`, this endpoint returns the total count of all overpayments for a specific veteran.

## Explanation of Metrics

| Metric Name | Description |
| ----- | ----- |
| Mobile::DebtsController Latency | The average of the `Mobile::DebtsController#index` total request times in milliseconds over time |
| DMC Get Debts Endpoint Total Traffic | The total amount of traffic navigating to `Mobile::DebtsController#index` |
| DMC Get Debts Endpoint Success (list of debts) | The total amount of successful traffic navigating to `Mobile::DebtsController#index` when `countOnly` is `false` or `nil`. In other words, this is the total amount of successful traffic when the debts controller calls for the list of debts. |
| DMC Get Debts Count Only Endpoint Success (number of debts) | The total amount of successful traffic navigating to `Mobile::DebtsController#index` when `countOnly` is `true`. In other words, this is the total amount of successful traffic when the debts controller calls for the number of debts. |
| DMC Get Debts Endpoint Failures | The total amount of traffic navigating to `Mobile::DebtsController#index` resulting in a failure |
| DMC Get Debts Endpoint Success Rate | The percentage of all traffic to `Mobile::DebtsController#index` that results in a successful response |
| DMC Get Debts Endpoint Failure Rate | The percentage of all traffic to `Mobile::DebtsController#index` that results in a failed response |
| DMC Init Cached Debts Total | The total number of times the cached debts initialization process is triggered |
| DMC Init Cached Debts Failures | The total number of times the cached debts initialization process fails while attempting to fetch debts from DMC |
| DMC Init Cached Debts Successes | The total number of times the cached debts initialization process successfully retrieves or returns debts, either from cache or from DMC |
| DMC Init Cached Debts Failure Rate | The percentage of cached debts initialization executions that result in a failure when fetching debts from DMC |
| DMC Init Cached Debts Success Rate | The percentage of cached debts initialization executions that successfully return debts, either from cache or from DMC |
| Responses Cached | The total number of times an empty debts response is cached during the cached debts initialization process |
| Percentage of Cached Responses Returned | The percentage of cached debts initialization executions that return a response from cache instead of fetching from DMC |
