# Get Inquiry Status

Retrieve an inquiry summary, given its reference number.

**URL:** `/ask_va_api/v0/inquiries/:number/status`

**Method:** `GET`

**Auth Req'd:** NO

## Success Response

**Condition:** Inquiry details are found.

**Code:** `200 OK`

**Content:** 

```json

```

## Error Response

**Condition:** Inquiry details are not found.

**Code:** `404 NOT FOUND`

**Content:**

```json

```

**OR**

**Condition:** Something unexpected occurs.

**Code:** `500 INTERNAL SERVER ERROR`

**Content:**

```json

```

## Notes

* None

## Behind the Scenes

* The user's `ICN` is used to tie the logged-in user to their data in the CRM APIs. This value is passed automatically by the `ask_va_api` APIs when the user is authenticated.
* A `message_id` is generated for each session and passed with every call to the CRM APIs. This value is passed automatically by the `ask_va_api` APIs. The value can be used to trace the flow of API calls for a given session, which can aid debugging and troubleshooting.
* Passing `user_mock_mock=true` as a parameter will return static data, useful for user testing and mocking CRM service replies.