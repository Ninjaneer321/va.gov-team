# Authorize SSO
### `GET /v0/sign_in/authorize_sso`

## Description

This endpoint starts an SSO authorization using the OAuth2 PKCE flow.

- **If the user already has a valid session**, the client will be issued a one‑time authorization `code` which can be used to exchange for an access token.
- **If the user does *not* have a valid session**, the client will be redirected to the USIP (Unified Sign In Page) frontend to sign in.

## Request
GET /v0/sign_in/authorize_sso

Host: staging-api.va.gov

## Query Parameters

| Name                   | In    | Type   | Required | Description                                                                                             |
|------------------------|-------|--------|----------|---------------------------------------------------------------------------------------------------------|
| `client_id`            | query | string | yes      | OAuth client identifier.                                                                |
| `code_challenge`       | query | string | yes      | PKCE code challenge (Base64‑URL‑encoded SHA256 of the original verifier).                                |
| `code_challenge_method`| query | string | yes      | Must be `S256`.                                                                                         |
| `state`                | query | string | no       | An opaque value the client uses to maintain state between request and callback.  |

## Responses

### Existing valid session
#### 302 Found → Authorization Code
- **Headers**
  - `Location`: `<client_redirect_uri>?code=<login_code>&type=<csp_type>&state=<state>`

### No valid session
#### 302 Found → Redirect to USIP
- **Headers**
  - `Location`: `https://stagin.va.gov/sign-in?client_id=<client_id>&code_challenge=<challenge>&code_challenge_method=S256&state=<state>&oauth=true`

### 400 Bad Request
**When** the request is malformed or missing required parameters
- **Body**
```json

{
  "error": "Invalid params: client_id, code_challenge"
}
```

## Diagram
<img width="4208" height="3488" alt="auth_sso" src="https://github.com/user-attachments/assets/a37f06cb-fd27-49a8-9b16-718fb9533f0a" />

## Step-by-step

**With an existing session:**

1. Client calls `GET /v0/sign_in/authorize_sso` with required PKCE parameters.
2. Sign-in Service validates the session and generates a one-time-use authorization `code`.
3. Client is redirected to its configured `redirect_uri` with the `code` as a query parameter.
4. Client exchanges the `code` for an access token via `POST /v0/sign_in/token`.

**Without an existing session:**

1. Client calls `GET /v0/sign_in/authorize_sso` with required PKCE parameters.
2. Sign-in Service finds no valid session and redirects to USIP with the original parameters plus `oauth=true`.
3. User authenticates through USIP via their identity provider.

**With missing parameters:**

1. Client calls `GET /v0/sign_in/authorize_sso` with one or more required parameters missing.
2. Sign-in Service returns `400 Bad Request` with a JSON error listing the missing parameters.

