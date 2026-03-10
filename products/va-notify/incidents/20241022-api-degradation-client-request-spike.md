# Incident Report: API Degradation Due to Client Request Spike

**Date:** 2024-10-22  
**Severity:** High  
**Status:** Resolved  
**Incident Commander:**  
**Authors:** Kyle MacMillan

---

## Summary

On 2024-10-22 and 2024-10-23, a client bug caused an extra 400,000–500,000 notification requests to be sent in a short time span. The surge in requests per second degraded VA Notify's ability to respond, with P50 API response times climbing from ~65ms to over 650ms (approximately 10x normal). Degradation lasted approximately 4 hours across those two days and returned to normal after the concern was raised with the client.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2024-10-22 | Degradation first observed; P50 response times climbed from ~65ms to over 650ms |
| 2024-10-22–23 | Approximately 4 hours of total degradation spread across the two days |
| 2024-10-23 | Issue raised with the client; client returned to expected notification request levels |
| 2024-10-23 | API response times returned to normal |
| 2024-10-30 | Incident report filed |

## Impact

- **Duration:** ~4 hours total across 2024-10-22 and 2024-10-23
- **Affected channels:** All — SMS, Email, and Push (initial ingestion and API latency)
- **Estimated notifications affected:** 400,000–500,000 excess requests
- **Business lines affected:** All clients at the API level

## Root Cause

A client had a bug that resulted in an extra 400,000–500,000 notification requests being sent in a short time span. The sustained increase in requests per second (approximately 220 req/s) exceeded the capacity of the underlying database, causing a degraded state for VA Notify. The API itself was capable of withstanding the load, but the database could not keep up, leading to elevated response times.

## Resolution

The client was contacted and returned to an expected level of notification requests, after which API response times returned to normal.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Set up [anomaly detection monitor](https://vanotify.ddog-gov.com/monitors/238103) to catch request volume spikes | VA Notify | Pre-incident | Complete (did not behave as expected — review needed) |
| Enable [RDS Performance Insights](https://github.com/department-of-veterans-affairs/vanotify-infra/releases/tag/v1.9.15) to identify database slowdowns | VA Notify | Post-incident | Complete |

## Lessons Learned

Anomaly detection was set up to monitor for scenarios like this but did not behave as expected. We were aware that the database would struggle under heavier loads but were not sure where that threshold was. We now know that degradation can start to appear with a sustained 220 requests per second — the API is capable of handling this load, but the database is not. [RDS Performance Insights have been enabled](https://github.com/department-of-veterans-affairs/vanotify-infra/releases/tag/v1.9.15) to better understand where database slowdowns occur and to plan future capacity work.
