# Veteran Status Card DataDog Metrics

## Overview
This document outlines and explains the metrics featured in the DataDog [Veteran Status Card V2](https://vagov.ddog-gov.com/dashboard/q5r-bsv-xjp/veteran-status-card-v2?fromUser=false&refresh_mode=sliding&from_ts=1770827733500&to_ts=1773246933500&live=true) dashboard.

These metrics are split into two main categories:
- Web
- Mobile
  
The metrics and graphs shown for each of these categories are the same.

## Explanation of Metrics

| Metric Name | Description |
| ----- | ----- |
| API - ALL Traffic | The total amount of traffic navigating to the Veteran Status Card Controller over time |
| API - Non 200 Traffic | The total amount of traffic navigating to the Veteran Status Card Controller with a non 200 response (error) over time |
| API - 200 Traffic | The total amount of traffic navigating to the Veteran Status Card Controller with a 200 response (success) over time |
| Veteran Status Cards Latency | The average of the Veteran Status Card Controller total request times in seconds |
| Eligible or Ineligible % | The total number of confirmed versus not confirmed verification statuses |
| VSC Rum Views and Errors | The total number of frontend views and client errors recorded by Real User Monitoring for the Veteran Status Card experience over a 4 hour time period |
| VSC Service Failure Rate | The average error rate of the Veteran Status Card Service over a 4 hour time period |
| Confirmed Statuses Breakdown | The total number of each type of confirmed verification status |
| Vet Verification Service Failure Rate | The average error rate of the Vet Verification Service over a 4 hour time period |
| VAProfile Military Personnel Service Failure Rate | The average error rate of the VAProfile Military Personnel Service over a 4 hour time period |
| Ineligible Message Reasons | The total number of each type ineligibility reason |
| Vets API Memory Usage | The average memory consumption of Vets API pods over time |
| Vets API CPU Throttling | The total amount of CPU throttling occurring on Vets API containers when they exceed their configured CPU limits |
| Vets API CPU Usage | The average CPU usage of Vets API pods per second |
| Vets API Pod Restarts | The total number of container restarts across Vets API pods over time |
| Vets API Autoscaling Replicas | The total number of running Vets API pods managed by the Horizontal Pod Autoscaler over time |
| SSC-Determined Ineligible Status Breakdown | The total number of each type of ineligibility status determined by SSC |
| All Statuses Breakdown | The total number of each type of verification status |
| User Message Breakdown | The total number of each type of message shown to the user |


## Explanation of Reporting Metrics

For both web and mobile, there is also a _Product Analytics & OKR Reporting_ section that features helpful visuals for reporting. 

| Metric Name | Description |
| ----- | ----- |
| "Confirmed" Responses and all 200 Responses | The total number of Veteran Status Card requests resulting in an confirmed verification status versus the total number of Veteran Status Card requests resulting in a 200 response (success) over time |
| Confirmed % out of all 200 Responses | The percentage of all Veteran Status Card requests resulting in a 200 response (success) that had a confirmed verification status |
| "NOT_TITLE_38" Responses and all 200 Responses | The total number of Veteran Status Card requests resulting in a NOT_TITLE_38 ineligibility status versus the total number of Veteran Status Card requests resulting in a 200 response (success) over time |
| NOT_TITLE_38 % out of all 200 Responses | The percentage of all Veteran Status Card requests resulting in a 200 response (success) that had a NOT_TITLE_38 ineligibility status |
| Not "NOT_TITLE_38" Not Confirmed Responses and all 200 Responses | The total number of Veteran Status Card requests resulting in an ineligibility status that was not NOT_TITLE_38 versus the total number of Veteran Status Card requests resulting in a 200 response (success) over time |
| Not NOT_TITLE_38 Not Confirmed % out of all 200 Responses | The percentage of all Veteran Status Card requests resulting in a 200 response (success) that had an ineligibility status that was not NOT_TITLE_38 |
| "ERROR" Not Confirmed Responses and all 200 Responses | The total number of Veteran Status Card requests resulting in an ERROR ineligibility status versus the total number of Veteran Status Card requests resulting in a 200 response (success) over time |
| Error Not Confirmed % out of all 200 Responses | The percentage of all Veteran Status Card requests resulting in a 200 response (success) that had an ERROR ineligibility status |
| vets-api Errors and all vets-api Responses | The total number of Veteran Status Card requests resulting in an error (failure) versus the total number of all Veteran Status Card requests |
| vets-api Error % out of all vets-api Responses | The percentage of all Veteran Status Card requests that resulted in an error (failure) |
| LH API Errors and all LH API Responses | The total number of Vet Verification Status requests resulting in an error (failure) versus the total number of all Vet Verification Status requests |
| LH API Error % out of all LH API Responses | The percentage of all Vet Verification Status requests that resulted in an error (failure) |
