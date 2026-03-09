# VA Notify FAQ

## Business & Process FAQ

**Are there any blackout hours for sending SMS?**
Yes. SMS messages are subject to legally required "courtesy hours." Messages should generally be sent only between 8:00 AM and 9:00 PM in the recipient's local time.

**How can Veterans opt in and opt out of SMS messages?**

Veterans can manage SMS preferences in two ways:

**Opt-in:**
- Veterans can check the communication permission box in VA Profile to subscribe to SMS messages by use case.
- If the use case uses implicit/default consent logic, then explicit consent is not required. See the [VA SOP](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf) for SMS.

**Opt-out:**
- Veterans can uncheck the box on VA.gov to stop receiving messages, **or**
- Reply `STOP` to an SMS message directly. Once a Veteran has replied `STOP`, they must reply `START` to the applicable phone number to opt back in.

> **Important Note:** These two opt-out methods are not fully synced. If a Veteran replies `STOP` by text, that blocks all messages from the applicable phone number. Re-checking the box in VA Profile does not automatically resume delivery—the Veteran must reply `START` via SMS to unblock message delivery.

## Technical FAQ

**What type of API is VA Notify?**
We offer a REST API.

**How does VA Notify work?**

![VA Notify architecture diagram](../images/vanotifydiagram.png)

**Tech Stack**

| Application | Infrastructure  | Monitoring & Security |
|:------------|:----------------|:----------------------|
| Python      | Terraform       | Datadog               |
| Flask       | GitHub Actions  | PagerDuty             |
| Celery      | AWS Fargate     | Twistlock             |
|             | Bandit          |                       |

**Where is VA Notify hosted?**
VA Notify is located in AWS VAEC GovCloud West behind the VA Network, but we do offer both public and private URLs for API calls.

**What is the authentication method for your API?**
Our API authentication method is JWT.

**How can we begin sending requests through VA Notify?**
VA Notify provides API keys for both staging and production. Keys are issued directly by the VA Notify team and delivered over encrypted email to VA.gov addresses of the technical contacts assigned to the service. *Each API key expires 180 days after creation.* Keys must be rotated before expiration to ensure service continuity and avoid notification failures.

**How to configure Push Notifications?**
- The client service must integrate with the VA Flagship Mobile App Service.
- The client team must reach out to VA Notify to request a new API key associated with the VA Flagship Mobile App Service.
- The client team must work with the VEText team to create a push notification template and applicable mobile app notification preference before any push messages are sent.

**What endpoints will my team need to use?**
You will only need to use our API for notification-specific actions:
- Triggering a notification send (email, SMS, or push)
- Checking a message status during testing

**Does VA Notify integrate with any other VA systems?**
VA Notify integrates with MPI and VA Profile to look up the Veteran's deceased status, contact information, and opt-in status via a person identifier you provide.

Supported ID Types:
- ICN
- PID (participant id)
- EDIPI
- BIRLSID (also known as file number)
- VAPROFILEID

**What environments does VA Notify have?**
We onboard notification partners to our Staging and Production environments. You can connect one or more of your lower environments to our Staging environment. Staging maps to MPI's SQA environment and VA Profile's QA environment.

**Will any of my configurations differ by environment?**
Yes. Template id(s), Service id, and API Key differ by environment.

**Is there anything our team can use for local testing?**
See our [postman collection](https://github.com/department-of-Veterans-affairs/notification-api/tree/master/documents/postman).

**Sample Email request with personalisation**
`{{notification-api-url}}/v2/notifications/email`

```json
{
   "template_id": "{{email-template-id}}",
   "email_address": "sample@gmail.com",
   "personalisation": {
       "Name": "Jane"
   }
}
```

**Sample SMS request with personalisation**
`{{notification-api-url}}/v2/notifications/sms`

```json
{
   "template_id": "{{template-id}}",
   "phone_number": "+11234567890",
   "sms_sender_id": "{{sms-sender-id}}",
   "personalisation": {
       "Name": "Jane"
   }
}
```

**Sample Push request with personalisation**
`{{notification-api-url}}/v2/notifications/push`

```json
{
    "mobile_app": "VA_FLAGSHIP_APP",
    "template_id": "123ID",
    "recipient_identifier": {
        "id_type": "ICN",
        "id_value": "value"
    },
    "personalisation": {
        "appointment_date": "date",
        "appointment_time": "time"
    }
}
```
