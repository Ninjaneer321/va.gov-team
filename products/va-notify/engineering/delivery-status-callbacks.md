# Delivery Status Callbacks

Callbacks provide status updates per notification sent, so your team can track individual successes and failures.

### Service-Level Callback Requirements
- Provide a webhook URL for Staging and Production
- VA Notify uses bearer tokens for authenticating with services when making a callback. These should be long-lived, but not permanent, bearer tokens sent to VA Notify via encrypted VA email.

### Request-Level Callback Requirements
- Provide a webhook URL in the `callback_url` field of your request to VA Notify
- Validate the signature in the headers: `x-enp-signature`

#### Callback URL Validation
1. Collect `x-enp-signature` value
2. Collect all parameters in the JSON response
3. URL encode all parameters
4. Use the API key used for the request and HMAC-SHA256 to create a signature
5. Validate the generated signature matches the one sent by VA Notify

Python example:
```python
signature = HMAC(
        get_unsigned_secret(api_key_id).encode(),
        urlencode(callback_params).encode(),
        digestmod=hashlib.sha256,
    ).hexdigest()
```

### Sample Callback Payload
```json
{
  "id": "6ba01111-f3ee-4a45-9d04-234asdfb6abbb9a",
  "reference": null,
  "to": "",
  "status": "delivered",
  "created_at": "2023-01-10T00:04:25.273410Z",
  "completed_at": "2023-01-10T00:05:33.255911Z",
  "sent_at": "2023-01-10T00:04:25.775363Z",
  "notification_type": "SMS",
  "status_reason": "",
  "provider": "pinpoint"
}
```

### Delivery Status Reasons

**Temporary failure**
- Retryable - Notification is unable to be processed at this time. Replay the request to VA Notify.

**Permanent failure**
- Undeliverable - Phone number is invalid
- Undeliverable - Individual unreachable
- Undeliverable - Individual or carrier has blocked the request
- Undeliverable - Preferences declined in VA Profile
- Undeliverable - No VA Profile contact information
- Undeliverable - No VA Profile found in MPI
- Undeliverable - Identifier not found in MPI
- Undeliverable - Individual is deceased
- Undeliverable - Unable to deliver
