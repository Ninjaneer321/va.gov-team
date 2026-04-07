# Mobile Overpay API DataDog Metrics

## Overview
This document outlines and explains the metrics featured in the _Mobile Debt Metrics_ section of the [Debt Resolution](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&from_ts=1746082800000&to_ts=1748761199999&live=false) DataDog dashboard.

## Explanation of Metrics

| Metric Name | Description |
| ----- | ----- |
| Mobile::DebtsController Latency - Index | The average of the `Mobile::DebtsController#index` total request times in milliseconds over time |
| Mobile::DebtsController Latency - Show | The average of the `Mobile::DebtsController#show` total request times in milliseconds over time |
| DMC Init Cached Debts Total | The total number of times the cached debts initialization process is triggered |
| DMC Init Cached Debts Failures | The total number of times the cached debts initialization process fails while attempting to fetch debts from DMC |
| DMC Init Cached Debts Successes | The total number of times the cached debts initialization process successfully retrieves or returns debts, either from cache or from DMC |
| DMC Init Cached Debts Failure Rate | The percentage of cached debts initialization executions that result in a failure when fetching debts from DMC |
| DMC Init Cached Debts Success Rate | The percentage of cached debts initialization executions that successfully return debts, either from cache or from DMC |
| Responses Cached | The total number of times an empty debts response is cached during the cached debts initialization process |
| Percentage of Cached Responses Returned | The percentage of cached debts initialization executions that return a response from cache instead of fetching from DMC |
| DMC Get Debts Endpoint Total Traffic | The total amount of traffic navigating to `Mobile::DebtsController#index` |
| DMC Get Debt Endpoint Total Traffic | The total amount of traffic navigating to `Mobile::DebtsController#show` |
| DMC Get Debts Endpoint Success | The total amount of successful traffic navigating to `Mobile::DebtsController#index` when `countOnly` is `false` or `nil` |
| DMC Get Debts Count Only Endpoint Success | The total amount of successful traffic navigating to `Mobile::DebtsController#index` when `countOnly` is `true` |
| DMC Get Debt Endpoint Success | The total amount of successful traffic navigating to `Mobile::DebtsController#show` |
| DMC Get Debts Endpoint Failures | The total amount of traffic navigating to `Mobile::DebtsController#index` resulting in a failure |
| DMC Get Debt Endpoint Failures | The total amount of traffic navigating to `Mobile::DebtsController#show` resulting in a failure |
| DMC Get Debts Endpoint Success Rate | The percentage of traffic to `Mobile::DebtsController#index` when `countOnly` is `false` or `nil` that results in a successful response |
| DMC Get Debts Count Only Endpoint Success Rate | The percentage of traffic to `Mobile::DebtsController#index` when `countOnly` is `true` that results in a successful response |
| DMC Get Debt Endpoint Success Rate | The percentage of traffic to `Mobile::DebtsController#show` that results in a successful response |
| DMC Get Debts Endpoint Failure Rate | The percentage of traffic to `Mobile::DebtsController#index` that results in a failed response |
| DMC Get Debt Endpoint Failure Rate | The percentage of traffic to `Mobile::DebtsController#show` that results in a failed response |
