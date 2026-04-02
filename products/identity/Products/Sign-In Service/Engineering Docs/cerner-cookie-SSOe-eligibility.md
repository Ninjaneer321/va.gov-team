# CERNER_ELIGIBLE cookie behavior

The `CERNER_ELIGIBLE` cookie is used to determine whether a user should be routed through the legacy SSOe flow or the OAuth/SiS flow when opening the login modal.

## Simple summary
If the `CERNER_ELIGIBLE` cookie indicates eligibility (true or T), the user stays on SSOe (`oauth=false`). If the cookie indicates non-eligibility (false or F), or if the cookie is missing or invalid, the user is routed through OAuth/SiS (`oauth=true`).
 
## Cookie evaluation rules
### 1. Cookie is missing, malformed, or empty
   ```
   if (!cookieValue) return true;
   ```
   Result:
   - `oauth=true`
   - User is NOT eligble for SSOe
   - User goes through OAuth
   - This is the safe fallback behavior  
### 2. Cookie signed in Rails format
   ```
   if (cookieValue.includes('--')) {
     const [signedCookie] = cookieValue.split('--');
   ```
  The function:
  1.	Splits the string
  2.	base64 decodes it
  3.	parses the JSON
  4.	looks for `parsedJson?._rails?.message`
  5.	base64 decodes that message
  6.	reads the character at index 2

```
const parsedCookie = secondDecode?.charAt(2);
```

  If that character is T or F it is interpreted as follows:
  - F --> return true
  - T --> return false

### 3. Cookie is plain text
```
const plainTextCookie = cookieValue.trim().toLowerCase();
return plainTextCookie !== 'true';
```
Interpretation: 
- cookie value 'true' → return false
- any other value → return true

Result:
- 'true'
  - `oauth = false`
  - User is eligible for SSOe
- 'false'
  - `oauth = true`
  - User is not eligible for SSOe
- any other unexpected plain text value
  - `oauth = true`
  - User is not eligible for SSOe

Again, unexpected values fall back to OAuth.

## Eligibility summary

User is eligible for SSOe (`oauth=false`) when:
- the cookie is a valid signed cookie whose decoded value resolves to T, or
- the cookie is plain text and equals 'true'

User is not eligible for SSOe and must use OAuth (`oauth=true`) when:
- the cookie is missing
- the cookie is empty
- the signed cookie is malformed
- the signed cookie resolves to F
- the plain text cookie equals 'false'
- the plain text cookie has any unexpected value other than 'true'

## Functional Logic
### Where the cookie is used
When the login modal is opened, `toggleLoginModal` calls `determineAuthBroker()` and uses its return value to set the oauth query parameter.

``` 
const oauth = !cernerNonEligibleSisEnabled ? true : determineAuthBroker();
```

The value is then added to the login modal URL:

```
const nextQuery = {
  next: nextParam ?? 'loginModal',
  oauth,
  ...(forceVerification && { verification: 'required' }),
};
```

### What the returned value means
`determineAuthBroker()` returns a boolean that is assigned directly to oauth.
- `oauth = true`
  - User is treated as not eligible for SSOe
  - User is routed through the OAuth flow
- `oauth = false`
  - User is treated as eligible for SSOe
  - User is routed through the non-OAuth / SSOe flow

## Important implementation note

Even though the cookie is named `CERNER_ELIGIBLE`, the utility does not return “eligible” directly. It returns the value that should be assigned to `oauth`.

That means the logic is effectively inverted from an eligibility perspective:
- cookie says eligible (T or 'true') → function returns false → oauth=false
- cookie says not eligible (F or 'false') → function returns true → oauth=true

So when reading this code, it is best to think of `determineAuthBroker()` as:
<br> “Should this user use OAuth?”
<br> NOT
<br> “Is this user Cerner eligible?”

## Short version

`CERNER_ELIGIBLE` determines whether the login modal opens with `oauth=true` or `oauth=false`.
- `oauth=false` means the user is eligible for SSOe
- `oauth=true` means the user is not eligible for SSOe and should use OAuth

Only these cookie values lead to SSOe eligibility:
- signed cookie resolving to T
- plain text cookie value 'true'

Everything else falls back to OAuth.
