# MHV Medications | On-call Log

On-call: Andrea Uhr
Schedule: 20260122 11 AM EST through 20260129 11AM EST (Thursday to Thursday)
Previous week: Chris Donelson
Next week: Cam Kief

[PagerDuty | On Call Schedules](https://ecc.pagerduty.com/schedules-new)

## Incidents/Outages

- 20260123 - 14:38 -- Increase in errors across `my_healh` endpoints noted in this [DSVA Slack thread] (https://dsva.slack.com/archives/C044WNQT4P9/p1769197122183319)

## Resolution
- 20260127 - 10:22 -- Memory leak was discovered across controllers inheriting from `MHVControllerConcerns`, causing the pods to max out. This was due to instances where there was a nil `mhv_correlation_id`.
- 20260127 - 15:16 -- Opened [this PR](https://github.com/department-of-veterans-affairs/vets-api/pull/26179) to address root cause.

## Follow up
Plan to continue to monitor these pods and address any other memory leakage issues.


