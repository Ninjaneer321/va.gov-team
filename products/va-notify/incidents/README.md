# VA Notify Incident Reports

This folder contains incident reports and postmortems for the VA Notify platform.

## Incident Report Index

| Date | Summary | Severity | Status |
|------|---------|----------|--------|
| _No incidents recorded yet_ | | | |

---

## How to File an Incident Report

When an incident occurs, create a new file in this folder using the naming convention:

```
YYYYMMDD-short-description.md
```

For example: `20240315-email-delivery-delay.md`

Use the [incident report template](#incident-report-template) below.

---

## Incident Report Template

```markdown
# Incident Report: [Short Description]

**Date:** YYYY-MM-DD  
**Severity:** Critical / High / Medium / Low  
**Status:** Open / Resolved  
**Incident Commander:**  
**Authors:**  

---

## Summary

_A brief description of what happened._

## Timeline

| Time (ET) | Event |
|-----------|-------|
| HH:MM | Incident detected |
| HH:MM | Team notified |
| HH:MM | Root cause identified |
| HH:MM | Mitigation applied |
| HH:MM | Incident resolved |

## Impact

- **Duration:**
- **Affected channels:** Email / SMS / Push
- **Estimated notifications affected:**
- **Business lines affected:**

## Root Cause

_Describe the root cause of the incident._

## Resolution

_Describe the steps taken to resolve the incident._

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| | | | |

## Lessons Learned

_What went well? What could be improved?_
```

---

## Severity Definitions

| Severity | Description |
|----------|-------------|
| **Critical** | Complete platform outage or significant data loss; immediate response required |
| **High** | Major feature degradation affecting a large number of notifications or multiple business lines |
| **Medium** | Partial degradation or errors affecting a subset of notifications |
| **Low** | Minor issues with minimal user impact; can be addressed during normal business hours |

---

## Contacts & Escalation

For current team contacts (Product, Engineering, VA PO), see the [VA Notify product README](../README.md#points-of-contact).

**Slack:** [#va-notify-public](https://dsva.slack.com/archives/C010R6AUPHT)

**PagerDuty:** Used for on-call escalation during off-hours incidents.

---

## Monitoring & Alerting

- **Datadog:** Primary monitoring and alerting platform
- **PagerDuty:** On-call incident escalation
- **Domo:** [Notification analytics dashboard](https://va-gov.domo.com/page/2040841289)

For environment-specific details, see the [engineering README](../engineering/README.md).
