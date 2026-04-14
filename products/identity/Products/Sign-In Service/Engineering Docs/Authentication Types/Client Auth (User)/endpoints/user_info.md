# GET /sign_in/user_info

Returns identity and profile information for the authenticated user. This is an OpenID Connect-style UserInfo endpoint used by authorized Sign-in Service clients.

## Authentication

Requires a valid **Bearer access token** in the `Authorization` header:

```
Authorization: Bearer <access_token_jwt>
```

## Authorization

Enforced by `SignIn::UserInfoPolicy` — the request is rejected with `403 Forbidden` if the access token's `client_id` is not in the allowlist.

## Responses

| Status | Description |
|--------|-------------|
| **200 OK** | User info returned successfully |
| **400 Bad Request** | User info failed validation (e.g., non-approved GCIDs) |
| **401 Unauthorized** | Missing or invalid access token |
| **403 Forbidden** | Client is not authorized to call this endpoint |

## 200 Response Body

All fields are strings. Pipe-delimited (`|`) where noted.

| Field | Description | Example |
|-------|-------------|---------|
| `sub` | Credential identifier (unique subject ID) | `"abc123-def456"` |
| `csp_type` | Credential service provider type | `"idme"` or `"logingov"` |
| `ial` | Identity assurance level | `"2"` (verified) or `"1"` |
| `aal` | Authentication assurance level | `"http://idmanagement.gov/ns/assurance/aal/2"` |
| `csp_uuid` | CSP-specific UUID (same as `sub`) | `"abc123-def456"` |
| `email` | Credential email address | `"veteran@example.com"` |
| `first_name` | First name | `"John"` |
| `middle_name` | Middle name | `"Michael"` |
| `last_name` | Last name | `"Doe"` |
| `full_name` | Full normalized name | `"John Michael Doe"` |
| `birth_date` | Date of birth | `"1990-01-15"` |
| `ssn` | Social Security Number | `"123456789"` |
| `gender` | Gender | `"M"` |
| `address_street1` | Street address line 1 | `"123 Main St"` |
| `address_street2` | Street address line 2 | `"Apt 4B"` |
| `address_city` | City | `"Springfield"` |
| `address_state` | State | `"VA"` |
| `address_country` | Country | `"USA"` |
| `address_postal_code` | Postal/ZIP code | `"22150"` |
| `phone_number` | Home phone number | `"555-123-4567"` |
| `person_types` | Person type codes (pipe-delimited) | `"VET\|PAT"` |
| `icn` | Integration Control Number (MPI) | `"1000123456V123456"` |
| `sec_id` | SEC ID | `"1234567"` |
| `sec_id_history` | Historical SEC IDs (caret-delimited) | `"1234567^7654321"` |
| `edipi` | DoD EDIPI | `"1234567890"` |
| `mhv_ien` | My HealtheVet IEN | `"12345678"` |
| `npi_id` | National Provider Identifier | `""` |
| `cerner_id` | Cerner patient ID | `""` |
| `corp_id` | CorpDB Participant ID | `"12345678"` |
| `birls` | BIRLS ID | `"12345678"` |
| `gcids` | Global Correlation IDs (pipe-delimited) | `"1000123456V123456^NI^200M^USVHA^P\|12345^PI^516^USVHA^PCE"` |

## Hosts

| Environment | Base URL |
|-------------|----------|
| Production | `https://api.va.gov` |
| Staging | `https://staging-api.va.gov` |
| Dev | `https://dev-api.va.gov` |
| Local | `http://localhost:3000` |

## Example Request

```bash
curl -H "Authorization: Bearer eyJhbGciOiJSUzI1NiJ9..." \
     https://staging-api.va.gov/sign_in/user_info
```

## Example 200 Response

```json
{
  "sub": "abc123-def456",
  "csp_type": "idme",
  "ial": "2",
  "aal": "http://idmanagement.gov/ns/assurance/aal/2",
  "csp_uuid": "abc123-def456",
  "email": "veteran@example.com",
  "first_name": "John",
  "middle_name": "Michael",
  "last_name": "Doe",
  "full_name": "John Michael Doe",
  "birth_date": "1990-01-15",
  "ssn": "123456789",
  "gender": "M",
  "address_street1": "123 Main St",
  "address_street2": "Apt 4B",
  "address_city": "Springfield",
  "address_state": "VA",
  "address_country": "USA",
  "address_postal_code": "22150",
  "phone_number": "555-123-4567",
  "person_types": "VET|PAT",
  "icn": "1000123456V123456",
  "sec_id": "1234567",
  "sec_id_history": "",
  "edipi": "1234567890",
  "mhv_ien": "12345678",
  "npi_id": "",
  "cerner_id": "",
  "corp_id": "12345678",
  "birls": "12345678",
  "gcids": "1000123456V123456^NI^200M^USVHA^P|12345^PI^516^USVHA^PCE"
}
```
