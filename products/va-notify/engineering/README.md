# VA Notify Engineering

This folder contains technical documentation for the VA Notify platform.

## Architecture Overview

VA Notify is a passthrough notification platform located in AWS VAEC GovCloud West behind the VA Network.

![VA Notify architecture diagram](../images/vanotifydiagram.png)

### Tech Stack

| Application | Infrastructure  | Monitoring & Security |
|:------------|:----------------|:----------------------|
| Python      | Terraform       | Datadog               |
| Flask       | GitHub Actions  | PagerDuty             |
| Celery      | AWS Fargate     | Twistlock             |
|             | Bandit          |                       |

## Environments

| Environment | Self-Service Portal URL | Notes |
|-------------|------------------------|-------|
| Staging     | https://staging.notifications.va.gov | Maps to MPI SQA and VA Profile QA |
| Production  | https://notifications.va.gov | Live environment |

## API Documentation

- API documentation and technical information are available on the [Self Service Portal](https://staging.notifications.va.gov/developer/api_docs)
- For teams using vets-api to trigger notification requests, see the [vets-api VA Notify module README](https://github.com/department-of-Veterans-affairs/vets-api/blob/master/modules/va_notify/README.md)
- For local testing, use the [Postman collection](https://github.com/department-of-Veterans-affairs/notification-api/tree/master/documents/postman)

## Authentication

- **API authentication:** JWT
- **Self-service portal authentication:** PIV (SSOi) — see [Login with PIV initiative](../initiatives/login-with-piv/README.md)

## API Keys

VA Notify provides API keys for both staging and production environments. Keys are issued directly by the VA Notify team and delivered over encrypted email.

- Each API key expires **180 days** after creation
- Keys must be rotated before expiration to avoid notification failures
- Multiple teams sharing a service may request separate API keys, each following the same rotation schedule
- IAM key rotation is scheduled every 60 days

## Integrations

| System | Purpose |
|--------|---------|
| VA Profile | Contact information (email, phone) and communication preference lookups |
| MPI | Veteran identity resolution and deceased-status checks |
| VA.gov Authenticated Experience | Notification preference UI on VA.gov |
| VEText | Appointment reminders and push notification routing |
| BIP (Benefits Integration Platform) | Payment event consumption via Kafka event bus (Comp & Pen) |
| AWS Pinpoint / SES | SMS and email delivery |
| AWS SNS | Push notification topics |

## Supported Recipient Identifier Types

When triggering a notification that requires VA Notify to perform a person lookup via MPI/VA Profile, provide one of these ID types:

- `ICN`
- `PID` (participant id)
- `EDIPI`
- `BIRLSID` (also known as file number)
- `VAPROFILEID`

## Infrastructure Limits

- **Email quota:** 10M messages per 24-hour period (AWS SES)
- **SMS spending limit:** $500K/month (AWS Pinpoint)

## Monitoring & Incident Response

- **Datadog:** Primary monitoring and alerting
- **PagerDuty:** On-call incident escalation
- **Domo:** [Notification analytics dashboard](https://va-gov.domo.com/page/2040841289)

## Source Code

The VA Notify codebase is maintained in the [vanotify-team](https://github.com/department-of-veterans-affairs/vanotify-team) and [notification-api](https://github.com/department-of-veterans-affairs/notification-api) repositories.
