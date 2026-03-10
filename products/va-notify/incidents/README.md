# VA Notify Incident Reports

This folder contains incident reports and postmortems for the VA Notify platform.

## Incident Report Index

| Date | Summary | Severity | Status |
|------|---------|----------|--------|
| January 2026 | [AWS SMS spend limit reached](./20260126-aws-sms-spend-limit-reached.md) — SMS sends blocked for ~7 hours | TBD | Resolved |
| January 2026 | [PII spill to Datadog logs](./20260115-pii-spill-datadog-logs.md) — PII logged to Datadog | TBD | Resolved |
| January 2026 | [API and SMS outage (database issue)](./20260100-api-database-sms-outage.md) — API down ~4.5 hrs; SMS down additional ~7.3 hrs | High | Resolved |
| November 2025 | [Pinpoint V2 SMS validation regression](./20251106-pinpoint-v2-sms-validation.md) — 3 SMS notifications delayed | TBD | Resolved |
| October 2025 | [Expired API keys caused authentication failures](./20251006-expired-api-keys.md) — 403s for VBA Education and Pension Benefits | TBD | Resolved |
| September 2025 | [Pinpoint V2 status update failures](./20250930-pinpoint-v2-status-update-failures.md) — 701 status updates delayed | TBD | Resolved |
| August 2025 | [Celery retry misconfiguration caused scaling](./20250807-celery-retry-misconfig.md) — Excess retries from callback failure | TBD | Resolved |
| July 2025 | [SMS delivery delays (provider/carrier)](./20250717-sms-delivery-delays-provider.md) — Provider delays reported | TBD | Resolved |
| June 2025 | [API 500 errors during schema mismatch](./20250609-api-schema-mismatch-500s.md) — 13,644 requests failed | TBD | Resolved |
| June 2025 | [Brief API outage](./20250600-api-brief-outage.md) — API down ~4 min | Low | Resolved |
| April 2025 | [Notification processing delays (VA Profile)](./20250422-notification-processing-delays-va-profile.md) — Delays up to 1 hour | TBD | Resolved |
| March 2025 | [Portal template previews unavailable](./20250326-portal-template-previews-secret.md) — Secret formatting error | TBD | Resolved |
| March 2025 | [Callback status update failures](./20250320-callbacks-queue-visibility-timeout.md) — Visibility timeout change | TBD | Resolved |
| January 2025 | [Email template formatting regression](./20250115-email-template-formatting.md) — 84,482 emails misformatted | TBD | Resolved |
| November 2024 | [Comp & Pen duplicate SMS sends](./20241122-comp-pen-duplicate-sms.md) — Duplicate messages sent | TBD | Resolved |
| October 2024 | [Comp and Pen SMS delayed by payments connector issues](./20241021-comp-pen-sms-delay-payments-connector.md) — Notifications delayed to 10/24 | TBD | Resolved |
| August 2024 | [Comp and Pen SMS sent from wrong number](./20240822-comp-pen-wrong-from-number.md) — Toll-free number used, causing throttling | TBD | Resolved |
| July 2024 | [ALB rule deploy failure](./20240708-alb-rule-deploy-failure.md) — Terraform deploy failed, rolled back in 6 minutes | TBD | Resolved |
| June 2024 | [Notification portal stats route removed](./20240617-notification-portal-stats-route-missing.md) — Staging stats tab error | TBD | Resolved |
| May 2024 | [Forms confirmation email errors](./20240529-forms-confirmation-email-errors.md) — Submission errors with flipper off | TBD | Resolved |
| May 2024 | [Twilio inbound validation missing second account key](./20240522-twilio-inbound-validation-second-account.md) — Inbound SMS validation failures | TBD | Resolved |
| May 2024 | [Accidental production deploys from release workflows](./20240520-accidental-prod-deploys-release-workflows.md) — Deploys triggered by release publish | TBD | Resolved |
| April 2024 | [VA logo missing from emails](./20240425-va-logo-missing-email-assets.md) — Email logo unavailable for ~4 hours | TBD | Resolved |
| August 2023 | [VA Profile misconfiguration triggered test emails](./20230809-va-profile-test-emails-misconfig.md) — Invalid test sends prevented | TBD | Resolved |
| July 2023 | [Easy DKIM failure causing email soft bounces](./20230703-easy-dkim-soft-bounces.md) — DNS issue caused unsigned emails | TBD | Resolved |
| May 2023 | [Domo/BigQuery lambda dependency failure](./20230508-domo-bigquery-lambda-dependency-failure.md) — Client data missing for ~6 hours | TBD | Resolved |
| April 2023 | [Twilio SMS blocked by Palo Alto update](./20230417-twilio-sms-blocked-palo-alto.md) — Outbound SMS blocked for ~4.5 hours | TBD | Resolved |
| March 2023 | [Education forms submission errors](./20230309-education-forms-after-submit-errors.md) — Errors for multiple VBA Education forms | TBD | Resolved |
| August 2022 | [VEText forwarding lambda VPC conflict](./20220824-vetext-forwarding-lambda-vpc-conflict.md) — Security groups pointed to dev VPC | TBD | Resolved |
| May 2022 | [MPI certificate renewal broke Staging integration](./20220519-mpi-certificate-renewal.md) — MPI renewed certificates without notice; Staging testing blocked for ~1 week | Medium | Resolved |
| May 2022 | [Self Service UI login white page](./20220510-self-service-ui-login-white-page.md) — Users unable to proceed after GitHub SSO login | TBD | Resolved |

> **Note:** Detailed incident data (exact dates, timelines, root cause, action items) is sourced from the private [vanotify-team/Incidents/README.md](https://github.com/department-of-veterans-affairs/vanotify-team/blob/main/Incidents/README.md). The files above were seeded from the [Platform Health Statistics](../analytics/metrics/README.md#platform-health-statistics) table in this repo. Team members with access to the vanotify-team repository should update the individual incident files with complete information.

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
