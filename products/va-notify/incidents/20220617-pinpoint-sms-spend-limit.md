# Incident Report: Amazon Pinpoint SMS Spend Limit Reached

**Date:** 2022-06-17 (began); 2022-06-22 (discovered and resolved)  
**Severity:** High  
**Status:** Resolved  
**Reporter:** _[TBD]_  
**Authors:** _[TBD]_

---

## Summary

Starting around 2022-06-17, VA Notify was unable to send SMS messages on any environment. Attempted sends were returned with a failure status from Amazon Pinpoint indicating the account had no quota remaining. The issue was discovered on 2022-06-22 by Jesse while working on an unrelated task when his SMS test did not go through.

## Timeline

| Time (ET) | Event |
|-----------|-------|
| 2022-06-17 ~12:03 | First observed Pinpoint `_SMS.FAILURE` callback with `No quota left for account` error |
| 2022-06-22 | Jesse discovers SMS sends are failing while working on an unrelated task |
| 2022-06-22 | Root cause identified: monthly SMS spending limit exceeded |
| 2022-06-22 | Spending limit increased from $1,000/mo to $1,500/mo |
| 2022-06-22 | Incident resolved; SMS sends restored |

## Impact

- **Duration:** ~5 days (2022-06-17 through 2022-06-22)
- **Affected channels:** SMS (Amazon Pinpoint)
- **Estimated notifications affected:** All SMS sends during the period returned failure status
- **Business lines affected:** All — SMS messaging was blocked on every environment

## Root Cause

VEText added clinics to RX Shipment notifications, which significantly increased their SMS send volume. This pushed the account over the configured monthly spending limit of $1,000/mo in Amazon Pinpoint, causing all subsequent SMS sends to fail with the following error:

```json
{
    "name": "delivery",
    "levelname": "INFO",
    "message": "received callback from Pinpoint with event_type of _SMS.FAILURE and record_status of Failed to send because No quota left for account with reference givt3mq5rn3u4aflqeak16p60d4takigij15hj80",
    "pathname": "/app/app/celery/process_pinpoint_receipt_tasks.py",
    "lineno": 71,
    "time": "2022-06-17T12:03:10",
    "requestId": "no-request-id",
    "application": "delivery",
    "logType": "application"
}
```

## Resolution

- Increased the Amazon Pinpoint monthly SMS spending limit from $1,000/mo to $1,500/mo.
- Decreased the Staging daily message limit for VEText to reduce cost contribution from non-production traffic.

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Add an AWS billing alert | _[TBD]_ | _[TBD]_ | _[TBD]_ |
| Reduce VEText's Staging daily message limit | _[TBD]_ | _[TBD]_ | _[TBD]_ |
| Ask VEText to give advance notice when additional clinics are rolled out, including volume estimates | _[TBD]_ | _[TBD]_ | _[TBD]_ |

## Lessons Learned

- Add AWS billing alerts so spend-limit breaches are caught immediately rather than discovered days later.
- Reducing VEText's Staging daily message limit helps prevent non-production volume from consuming the monthly quota.
- Coordinate with high-volume clients (VEText) to proactively increase limits when they plan to expand usage to new clinics or use cases.
