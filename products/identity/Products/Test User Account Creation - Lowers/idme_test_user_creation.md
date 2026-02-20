# ID.me test account creation guide
Follow these step-by-step instructions to create an ID.me account for development and testing in lower environments on VA.gov. For more details on ID.me user account creation functions and the ID.me sandbox environment see the [ID.me test credentials documentation](https://developers.id.me/documentation/deploy-and-monitor/quality-assurance-testing/best-practice).

### Step-by-Step Instructions

#### 1\. Start the Sign-Up Process

* Navigate to [https://staging.va.gov](https://staging.va.gov) or [https://dev.va.gov](https://dev.va.gov) in your web browser.  
* Click the **Sign in** button in the top-right corner.  
* From the pop-up modal, click the sign in with [**ID.me**](http://ID.me) button.

#### 2\. Create the Basic ID.me Account

* On the "Sign in to ID.me" page, click the **Create an account** link.  
* Enter your test email address, must be distinct from previously created test account email addresses, and a password.  
* Check the box to accept the ID.me Terms of Service and Privacy Policy.  
* Click **Create account**.  
* On the "Confirm your email address" page, click the yellow "\!\!\! For testing purposes only \!\!\!" button labeled **Complete confirmation**. This bypasses the need to check your email.

#### 3\. Set Up Multi-Factor Authentication (MFA)

* On the "Secure Your Account" page, click **Set up multi-factor authentication**.  
* Enter any valid-format 10-digit phone number (e.g., `123-222-5555`). The phone number does not need to be real.  
* Click **Continue**.  
* A 6-digit code will be pre-filled for you. Click **Continue**.  
* On the "Your account is now secure" page, click **Continue**.

#### 4\. Begin Identity Verification

* You will be redirected back to `staging.va.gov`. Click the green **Verify with ID.me** button.  
* You will be sent back to ID.me. On the "Verify Your Identity" page, select **Upload photos of your license or state ID**.  
* On the "Consent" page, scroll down, check the acknowledgment box, and click **Continue**.

#### 5\. Upload Test Documents & Selfie

* You will be taken to a page that says "Waiting for your photos". Click the link that says **Upload form (testing only)**.  
* Confirm your email address by clicking **Yes**.  
* Click **Start document upload**.  
* **For the ID Front:** Click **Take photo**, upload a test ID image ([example image that can be used](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Test%20User%20Account%20Creation%20-%20Lowers/Resources/Ronaldinho-fake-passport-f932.jpg)), and click **Continue**.  
* **For the ID Back:** Click **Take photo of your driver's license or state ID (BACK)**, upload the same test image ([example image that can be used](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Test%20User%20Account%20Creation%20-%20Lowers/Resources/Ronaldinho-fake-passport-f932.jpg)) again, and click **Continue**.  
* Click **Submit your photos**.  
* **For the Selfie:** Click **I'm ready to take a selfie**, click **Take photo**, upload the same test image again, and click **Continue**.

#### 6\. Enter Personal Information

* The system will compare the images. You will then be prompted to enter your Social Security Number. A test SSN is pre-filled. Click **Continue**.  
* A page will display pre-filled personal information (name, address, etc.). Scroll to the bottom, check the box to accept the Fair Credit Reporting Act terms, and click **Yes**.

#### 7\. Finalize and Authorize

* The system will check your information for authenticity.  
* On the "Confirming your phone" page, click the link **Verify phone testing only\!**.  
* Confirm your email address again by clicking **Yes**.  
* You will be instructed to return to the original browser tab.  
* On the `staging.va.gov` "Authorize" page, click **Allow**.  
* You are now logged into `staging.va.gov` with a fully verified test account.
