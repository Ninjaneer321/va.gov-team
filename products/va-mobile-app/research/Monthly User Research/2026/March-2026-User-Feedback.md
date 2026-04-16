# Apple App Store & Google Play Store Feedback from the VA Health & Benefits App — March, 2026

## Summary

Feedback includes 347 total responses, each with a rating of 1–5. Ratings of 1–2 are considered negative, 3 represents neutral, and 4–5 are positive.

### Overall Distribution of Ratings

| Rating | % of ratings | # of ratings |
|---|---|---|
| = 1 | 12.4% | 43 |
| = 2 | 3.7% | 13 |
| = 3 | 7.2% | 25 |
| = 4 | 12.4% | 43 |
| = 5 | 64.3% | 223 |

### General/Other Feedback

_Note: General feedback includes responses that reflect Veteran experiences with their healthcare teams, or the VA in general and may not specifically be related to the VA Health and Benefits app._

### Summary of Overall Feedback

The majority of Veterans rated the VA Health & Benefits mobile app highly and described it positively as convenient, easy to use, and helpful for prescriptions, appointments, messaging, and travel claims.

Negative feedback remains a minority but is consistent with prior months: sign-in friction (ID.me loops, biometrics not sticking, repeated verification), prescription-related regressions after updates (refill or fill dates showing as unavailable, loss of tracking visibility), and gaps in appointment detail (provider, clinic, purpose, room). Messaging drew criticism for stale threads in the app compared to the website, failed sends, and compose UX (for example, save vs. send placement). Several reviewers asked to pay copays or medical bills in the app or noted the app feels limited compared to VA.gov.

Suggestions for improvement include restoring reliable refill and fill-date display, reducing login steps, surfacing full appointment context, improving secure messaging parity with the web, and adding billing or payment paths where Veterans expect them.

---

## Positive

| Rating | % of ratings | # of ratings |
|---|---|---|
| = 4 | 12.4% | 43 |
| = 5 | 64.3% | 223 |
| **Total positive (4+5)** | **76.7%** | **266** |

**Summary:** Positive reviews emphasized convenience, ease of navigation, and having VA health and benefits tasks in one place—including refills, secure messaging, appointments, travel claims, and letters.

**Representative responses:**

- "This is absolutely the best app I have ever used. It is so easy to use and helpful and extremely thoughtful all the information that I need in one place thank you everyone for helping us veterans."
- "Super easy and simple to use. Makes it easy to see my appointments and message my care team. Love it!"
- "Since my rating years ago I have not utilized any VA services due to bad reviews and horror stories. So far it's been an easy process and I've been treated with dignity, kindness and respect."

---

## Negative

| Rating | % of ratings | # of ratings |
|---|---|---|
| = 1 | 12.4% | 43 |
| = 2 | 3.7% | 13 |
| **Total negative (1+2)** | **16.1%** | **56** |

**Summary:** Negative responses clustered around sign-in loops and repeated authentication, prescription information missing or wrong after updates (refill dates, tracking), frustration with incomplete appointment details or booking paths, and messaging failures or outdated threads in the app.

**Representative responses:**

- "It seems every time I want to use the app I have to go through the process of ID.me or some other login format just to get back into the app to check anything. There is no biometric that sticks… Deleting app."
- "Sign in with ID.me loops app back to sign in screen… It's hard to give a positive review when the app won't open."
- "The latest updates have wiped out refill dates, appointments, and a slew of medically needed information from the app."

---

## Neutral

| Rating | % of ratings | # of ratings |
|---|---|---|
| = 3 | 7.2% | 25 |

**Summary:** Neutral feedback mixed praise for core ideas with stability and completeness concerns—sign-in still flaky, prescription workflow confusing for some, or the app not matching everything available on the website.

**Representative responses:**

- "The app works well, but please allow ‘add to calendar only’ for adding appointments to the calendar."
- "when it works it's great. However sometimes when I try to log on it just goes back to the initial screen. it's quite annoying 😑 at times."
- "I use this app a lot and generally, it's fine. recently prescription fill dates aren't available. regarding secure messages, it's weird that the save draft button is in the same place as the send button in most other email apps."

---

## Common Themes for Issues

### 1. Login and authentication cause friction and abandonment (~27 reviews tagged Sign in; additional reviews in App overall cite similar issues)

Users reported ID.me and Login.gov loops back to the app sign-in screen, endless loading after verification, loss of Face ID or fingerprint convenience after OS or app updates, “Remember me” not working, and repeated text or email verification for every session.

**Representative responses:**

- "Convenient, however it always makes me log in and confirm via text every single time. And when I confirm my login, it just does the never-ending loading wheel."
- "Forces me to use 2FA. ID.me code doesn't get sent 75% of the time and when it does the app cycles back to login about 75% of the time."
- "never goes back to va.gov after verifying login credentials. can't use the app on android. what's the point?"

**Pain point:** As a Veteran, I want to open the app and reach my health and benefits quickly, but I am blocked by authentication loops, unreliable biometrics, and repeated verification steps.

**Recommendation:** Continue sign-in root-cause work (including device/OS variants), clarify error states when verification fails, and validate post-login return paths for both iOS and Android. Pair with review of “remember device” and biometric persistence after major updates.

### 2. Prescription refill dates, tracking, and display (~9 reviews with clear prescription-related problems; broader prescription discussion in 18 reviews tagged Prescriptions)

Multiple users said refill or fill dates disappeared or show as “Not available” after recent updates; others could no longer see tracking for shipped medications. Some wanted clearer separation of active vs. inactive prescriptions or better tracking across all medications.

**Representative responses:**

- "You can no longer see the refill date on medications. This happened with the last update… Now it says date unavailable."
- "Please fix the subscription fill date, it no longer works and or show the fill date, quit adding extra and not TESTING the app…"
- "Great App. But, no longer able to see tracking number. Can’t track from app to see what’s coming."

**Pain point:** As a Veteran managing medications, I want accurate refill and fill dates and shipment visibility in the app, but I am blocked by missing fields, post-update regressions, or unclear status.

**Recommendation:** Treat refill/fill date and tracking visibility as regression checks in each release; verify API/display mapping for “not available” states; communicate changes in release notes when prescription UI or data sources change.

### 3. Appointment details, scheduling, and consistency across channels (~17 reviews tagged Appointments; additional app-wide reviews mention appointments)

Veterans asked for provider name, clinic, purpose of visit, and room or floor for large facilities. Some wanted to request or make appointments in the app. A few described mismatches between phone systems, reminders, and what the app showed.

**Representative responses:**

- "It can be hard to manage my appointments because it doesn’t show who it’s with, the name of the clinic or the purpose of the appointment."
- "I tend to forget who the appointment is with… I always have to call for them to tell me what type of appointment I have."
- "I just tried to reschedule an appointment… the system told me my next scheduled appointment isn't until 27 May 2026 despite the fact… the app has my appointment for March 31st listed…"

**Pain point:** As a Veteran preparing for care, I want complete, consistent appointment information across app, phone, and web, but I am blocked by missing context or conflicting schedules.

**Recommendation:** Prioritize surfacing provider, clinic, and visit purpose where data exists; investigate reported scheduling inconsistencies between channels; continue evaluating in-app appointment request workflows where policy and systems allow.

### 4. Messaging—staleness, send failures, and compose UX (~16 reviews tagged Messaging)

Issues included the newest secure message appearing very old in the app while the website showed current threads, messages failing to send after long composition, difficulty finding Send, confusion between Save and Send, and inability to copy-paste after an update.

**Representative responses:**

- "Doesn’t show current messages. When I go to my messages, the newest message is two years old. When I use the VA website I can see my current messages."
- "Spent an hour writing a message only to have it fail to send."
- "no longer able to copy-paste within messages anymore. great app otherwise"

**Pain point:** As a Veteran, I want secure messaging in the app to match the web experience and allow reliable compose and send, but I am blocked by stale data, failed sends, or confusing controls.

**Recommendation:** Investigate app vs. web message list sync; harden send failure handling and user feedback; review compose UI (Save draft vs. Send placement and labeling) against common email patterns.

### 5. Payments, copays, and gaps vs. full VA.gov workflows (~4 reviews tagged Payments; a few App overall reviews)

Reviewers asked to pay medical bills or prescription copays in the app, see balances owed, or find pay.gov-style links. Others wanted topic-specific areas (for example, education) easier to find.

**Representative responses:**

- "I can’t find any place in this app to pay my bill. I have to go on line with my laptop to pay my medical bill… you forgot to add a link to VA pay.gov."
- "Would be nice to be able to pay prescription co-pays within the app."
- "The app is lacking. Why can the app only do maybe 5% of what the website can do?"

**Pain point:** As a Veteran, I want to complete high-frequency financial and benefits tasks in the app when appropriate, but I am blocked by missing payment flows or having to leave the app for VA.gov.

**Recommendation:** Where product and policy align, evaluate in-app or deep-linked payment paths and clearer entry points for billing; for scope gaps, consider short “complete on VA.gov” guidance with stable deep links.

---

## Feature Specific Feedback

_Note: Average ratings are based on reviews where the feature is mentioned in relation to the mobile app. If there is not strong evidence (fewer than ~3 relevant reviews), the field is marked NA._

| Feature | Average Rating | # of Ratings |
|---|---|---|
| Sign in | 2.56 | 27 |
| Messaging | 3.06 | 16 |
| Appointments | 3.47 | 17 |
| Prescriptions | 3.50 | 18 |
| Profile | 3.75 | 4 |
| Travel Pay | 4.20 | 5 |
| Medical records | 4.20 | 5 |
| Claims | 4.00 | 3 |
| Payments | 4.50 | 4 |
| Letters and documents | 4.50 | 2 |
| App overall | 4.42 | 156 |
| Navigation | NA | NA |
| Disability rating | NA | NA |

### Sign in

**Average rating:** 2.56 | **# of ratings:** 27

The lowest-rated area in March. Veterans described loops between the app and browser, failed biometrics, codes that do not arrive, and long or repeated verification flows.

**Representative responses:**

- "It seems every time I want to use the app I have to go through the process of ID.me or some other login format… There is no biometric that sticks."
- "Sign in with ID.me loops app back to sign in screen… Clearing all apps cache doesn't help."

### Prescriptions

**Average rating:** 3.50 | **# of ratings:** 18

Many reviews remained positive on refills overall, but a visible subset reported missing refill or fill dates, missing tracking, or confusion after updates.

**Representative responses:**

- "Rx Refill Dates still show Not Available… Not sure what it did but Rx Refill Dates still show Not Available."
- "The VA prescriptionn service is excellent. Each time I receive a refill I feel our nation’s gratitude for my service. Thank you!"

### Appointments

**Average rating:** 3.47 | **# of ratings:** 17

Praise for reminders and travel tied to visits coexisted with requests for provider, clinic, purpose, and room details, and with occasional reports of data disappearing or conflicting with other systems.

**Representative responses:**

- "This is a great app that is super convenient. But it can be hard to manage my appointments because it doesn’t show who it’s with…"
- "go to location for appointment. some of these medical centers are kind of big. adding something like what room its in would be more helpful"

### Messaging

**Average rating:** 3.06 | **# of ratings:** 16

When it worked, users valued secure communication; pain points included stale threads, send failures, recipient selection issues, and compose affordances.

**Representative responses:**

- "The msg option which is the primary tool to contact for care does not send msgs to the person selected. Very frustrating."
- "Great, secure, and easy way to communicate with my providers."

### Travel Pay

**Average rating:** 4.20 | **# of ratings:** 5

Generally positive where mentioned; some users still struggled to complete claims or see appointments loaded for travel.

**Representative responses:**

- "When I go to the va for a dr visit, as soon as I arrive I get a pop up on my phone to ask me about my travels and I fill it out on the spot."
- "I can’t get travel pay to work for me and now I’m missing three payments because I can’t get to where I need to be."

### Medical records

**Average rating:** 4.20 | **# of ratings:** 5

Users appreciated access to results and records when available; a few reported empty or missing records in the app compared to expectations.

**Representative responses:**

- "Love the new look… Having access to results streamlines the service."
- "What happened to my HEALTH RECORDS… Your app is saying I have no records. Which is a lie."

### Payments

**Average rating:** 4.50 | **# of ratings:** 4

Even when ratings were high, several reviewers asked for in-app bill pay or copay payment.

**Representative responses:**

- "Also there should an option to pay your bill."
- "Very helpful indeed. Only headache is you can't make payments or see balances owed."

### Claims

**Average rating:** 4.00 | **# of ratings:** 3

Limited volume; comments included appreciation for claims history and letters, and requests for richer disability or appeals detail in the app.

**Representative responses:**

- "Very nice to be able to see my claims history and claims letters conveniently at my fingertips."

### App overall

**Average rating:** 4.42 | **# of ratings:** 156

Broad satisfaction with ease of use and consolidation of VA tasks, alongside scattered complaints about navigation depth, update quality, or parity with the website.

**Representative responses:**

- "Probably the most competent app the government has ever published. Kudos to the developers."
- "The app is lacking. Why can the app only do maybe 5% of what the website can do?"

---

## Feature Enhancements

Feature requests in March 2026 (including rows flagged as feature requests in the source data) included:

- Ability to request or book appointments in the app
- Appointment list showing provider, clinic, purpose of visit, and room or floor
- Calendar add options (for example, add to calendar only)
- Restore or stabilize Face ID / fingerprint sign-in after OS updates
- Export or download health data (for example, vaccinations) to PDF/CSV; clearer ownership and portability of data
- Relabel Save as Save draft in messaging to avoid confusion with Send
- Pay medical bills or prescription copays in the app; link or surface VA pay paths
- Sort or filter active vs. inactive prescriptions; restore prescription tracking
- Education or topic-specific hubs (for example, education contacts) and clearer information architecture
- Explicit release notes describing what changed in each app update
- Accessibility and ease of use for older Veterans (contrast, guidance, optional training)
- Virtual visit integration and provider search in messaging (broader roadmap-style asks)
- Claims/disability views: appeals steps, bilateral or combined ratings detail (where data supports)

**Representative responses:**

- "Be a great update if customer could request/make appointments through the app."
- "Also there should an option to pay your bill."
- "WHY are there NO details on what update changes? Saying that bug fixes and improvements to app does not address exactly what and how changes are…"
