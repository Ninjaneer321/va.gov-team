# VA Paperless Delivery Settings — 2025 Insights (Call Center + Qualitative Research)

**Important context:** Paperless Delivery is in the **exploratory design phase and has not yet launched**. This means there is no shipped product against which to measure CSAT, no GA4 funnel data, and no post-launch adoption metrics. All findings below are drawn from **pre-launch qualitative research, usability testing of prototypes, and call center cases about the *current* (pre-paperless) state of VA mail**.

**Scope filter applied:** This report has been narrowed to findings that specifically relate to **Paperless Delivery settings** — the ability for Veterans to opt into digital delivery of VA documents and letters in place of physical mail. Findings about notification preferences, channel selection for appointment reminders (text/email/push/phone), Kano-ranked reminder prioritization, and general communication preferences have been excluded. The 2023 Kano Appointment Reminders survey is not used in this version because its subject matter (reminder channel preferences) falls outside Paperless Delivery settings scope.


## TL;DR (what matters)

- **Baseline CSAT (measured):** Not applicable — product is pre-launch. No CSAT instrument is in place for Paperless Delivery, and the single call center case on record did not capture a satisfaction score.
- **Directional satisfaction proxies (pre-launch research only):** ~89% (16/18) of Paperless Delivery prototype usability participants wanted digital delivery of both documents and notifications; only ~11% (2/18) wanted to keep paper mail as primary. Currently only two VA documents are available digitally, and participants repeatedly said the VA "needs to catch up with the times."
- **Feedback timeframe:** Call center case April 22, 2025 (n=1, no score). Paperless Delivery prototype usability May–July 2025 (n=18). Supporting references from Veteran Communication Preferences Discovery interviews Sept 30–Oct 11, 2024 (n=20), filtered to paperless-relevant findings only.
- **Top pain points (task-blocking, highest impact):**
  1. **A discoverable, named Paperless Delivery setting does not exist today, and the prototype path from homepage to settings is hard to find.** In the call center case, the veteran could not locate any paperless option, and the agent could not confidently direct them. In prototype testing, navigation from the VA.gov homepage to the settings page was the #1 observed usability issue.
  2. **Scope of paperless coverage is ambiguous** — Veterans cannot tell which letter types would go paperless (appointment letters, hotline-triggered letters, claim decisions) and whether enrolling means "all mail" or a subset.
  3. **Privacy exposure in paper mail is the primary adoption driver, and the current mail system cannot meet it.** Letters still contain full SSN, name, and address, creating privacy-motivated urgency for a paperless option that does not yet exist.
- **What analytics will add (GA4 — not yet applicable):**
  - **GA4 data is not available because the Paperless Delivery experience has not been built or released.** There is no live flow to instrument yet.
  - The measurement plan in Section 4 is a **pre-launch instrumentation brief** — events and funnels to build *into* the Paperless Delivery product before release so Day-1 telemetry can validate the qualitative findings at scale.


## 1) Data source inventory (timeframe + frequency for each source)

### A) Call Center Transcripts (PaperlessDelivery_2025_CallCenter.csv)

- **Timeframe:** April 22, 2025 (single day)
- **Scoped volume:** 1 closed case (all 1 case is paperless-relevant)
- **CSAT sample size:** n=0 (CSAT not captured; no instrument currently tied to Paperless Delivery calls)
- **CSAT baseline:** Not applicable
- **What this source represents:** A veteran contacting the call center about the *current* pre-paperless mail experience — specifically, trying to find a nonexistent paperless option.
- **Theme counts (mentions within scope, non-exclusive, paperless-settings-relevant):**
  - Discoverability of a paperless option: 1 (100%)
  - Cross-channel ownership & deflection (My HealtheVet ↔ call center ↔ local VA) specifically for paperless enrollment: 1 (100%)
  - Privacy & PII exposure as paperless adoption driver: 1 (100%)
  - Scope ambiguity (which letter types would be paperless-eligible): 1 (100%)

### B) Paperless Delivery Prototype Usability Research

- **Timeframe:** May – July 2025
- **Volume:** 18 participants (8 Veterans with paperless experience elsewhere, 6 without, 4 caregivers/family). Devices: 14 desktop, 4 mobile.
- **What this source represents:** Usability testing of **Paperless Delivery prototypes** — not a shipped product. All findings cited below are specifically about the paperless settings flow.
- **Satisfaction proxy (prototype exposure only):** 89% (16/18) wanted paperless delivery of documents and notifications; 11% (2/18) wanted paper as primary.
- **Theme counts (paperless-settings-relevant only):**
  - Navigation failure to prototype paperless settings page from homepage: #1 observed usability issue
  - Mobile vs. desktop navigation inversion when locating the paperless setting: recurring across mobile participants
  - Requests for bulk "all paperless" selection with per-category override: recurring
  - Requests for save confirmation + "if you didn't do this" safety link after saving paperless preferences: recurring
  - Requests for label clarity ("Paperless," "Digital," "Electronic," "Paper"): recurring
  - Caregiver access to paperless documents (cannot retrieve Veteran's physical mail): P18

### C) Veteran Communication Preferences Discovery Interviews (paperless-relevant subset)

- **Timeframe:** September 30 – October 11, 2024
- **Volume:** 20 participants (16 Veterans, 5 family/caregivers; 1 dual-role). Findings filtered to paperless-specific themes only; broader channel-preference findings excluded.
- **Paperless-relevant themes surfaced:**
  - Desire for paperless to reduce PII exposure in physical mail (privacy driver)
  - Preference for digital delivery of reviewable/archivable documents (claim decisions, records)
  - Preference of a durable minority of older Veterans to keep paper as primary for "important and final" documents
  - Rural-delivery unreliability (PO Box, long transit times) as a paperless adoption driver

### D) GA4 / Behavioral Analytics

- **Status: Not applicable — product is pre-launch.**
- No Paperless Delivery flow exists in production to instrument. Section 4 reframes analytics as a pre-launch instrumentation brief.



## 2) Consolidated "what's going wrong" with Paperless Delivery settings

The dominant failure mode is **there is no discoverable, named Paperless Delivery setting today, and the prototype designed to introduce one is still hard to reach from the VA.gov homepage**. The April 22, 2025 call center case is the clearest real-world evidence: a veteran explicitly asked how to go paperless on the VA website, could not find any such setting, contacted My HealtheVet (which did not know), and was ultimately referred to the local VA without resolution. In parallel, the May–July 2025 prototype usability study with 18 participants showed that even when a paperless settings page exists as designed, navigating to it from the homepage was the #1 observed usability issue. Most participants *could* update paperless preferences once they reached the right page — the failure is upstream of the settings screen itself.

The second failure mode is **scope ambiguity about what "paperless" covers**. The call center case shows this concretely: the veteran wanted to go paperless specifically because of letters about upcoming appointments and letters generated when calling the VA hotline, and the agent could not confirm whether those letter types would be eligible. Only two VA documents are currently available digitally, which means even a well-designed settings page risks disappointing Veterans if it implies broader coverage than the backend actually supports. Prototype participants asked for plain-language labels ("Paperless," "Digital," "Electronic," "Paper") and for a visible list of which letter types would switch — i.e., they want the scope surfaced in the UI, not assumed.

The third failure mode is **privacy-driven demand that the current system cannot yet meet**. Across both the call center case and the prototype usability study, the strongest adoption driver for paperless was reducing PII exposure in physical mail — full SSN, name, and address appearing on letters that sit in mailboxes. Participants referenced mailbox break-ins and compared the VA unfavorably to banks ("All of my bank statements come electronically… That way, there's also no PII out there for anybody to grab as it's coming in the mail" — P1). This creates a design imperative: the Paperless Delivery launch needs to communicate its security value proposition clearly, *and* the upstream mail templates should reduce PII (e.g., mask SSN) for Veterans who remain on paper, because those Veterans are exactly the ones most exposed.

Because the product is pre-launch, GA4 cannot yet confirm where users drop off in the paperless enrollment flow, which device they use, or how often failure to find the setting becomes a call-center ticket. The research signals above are therefore the strongest evidence available, and the instrumentation plan in Section 4 is designed so that Day-1 telemetry can validate or falsify these hypotheses at scale.



## 3) Pain points (with a specific fix recommendation for each)

### 1) A discoverable, named Paperless Delivery setting does not exist in the current experience, and the prototype path from homepage to the setting is hard to find (task-blocking)

**Evidence (timeframe + frequency):**
- **Call Center (Apr 22, 2025):** 1/1 case (100%) — veteran could not locate any paperless option on VA.gov; agent suggested "check Profile" without confidence; call closed without in-call resolution.
- **Paperless Delivery prototype usability (May–Jul 2025):** #1 observed usability issue across 18 participants. Several who successfully completed the paperless settings task said they would need help the first time. Mobile participants failed more often due to the top-right control inversion between mobile and desktop.
- **Analytics signal:** Not applicable pre-launch. Instrumentation plan in Section 4.

**How to fix it (specific — for the launch design):**
1. Ship a single, named **Paperless Delivery setting** on VA.gov and the Health and Benefits app, placed on the Profile page with plain-language labels ("Paperless Delivery," "Paper vs. Digital") grouped with related account settings.
2. **Mirror desktop and mobile placement** of the Profile/Account control where the paperless setting lives; prototype testing found mobile currently inverts it, which was the observed source of navigation failure for mobile participants.
3. Add a **top-level "Go Paperless" CTA** in Profile with an eligibility explainer ("What goes paperless?") — addresses the call center case directly.
4. Index VA.gov search for "paperless," "digital," "electronic," and "paper" to route to the Paperless Delivery setting — P19 described using search as their fallback.
5. Provide a **cross-property knowledge base article and call-center agent script** before launch so frontline staff can confidently direct Veterans to the new setting (directly addresses the April 22 deflection).

**Representative quotes:**
- "Veteran wanted to go paperless." — Agent Note, Call Center Apr 22, 2025
- "He wanted to know if there was a way on the VA website to go paperless." — Agent Note, Call Center Apr 22, 2025
- "Agent let the veteran know that he can go to his profile setting and check." — Agent Note, Call Center Apr 22, 2025
- "I do wish it had been up underneath the contact information, but… I found it still." — P7, Paperless Delivery 2025
- "I think that it's good that it's labeled separately because I think sometimes people are looking for that like paperless option." — P7, Paperless Delivery 2025
- "I would do contact us online or through the VA. And then I would ask the question, what is the process for changing delivery to online only…" — P17, Paperless Delivery 2025



### 2) Scope of paperless coverage is ambiguous — Veterans cannot tell which letter types would go paperless (task-blocking for confident enrollment)

**Evidence (timeframe + frequency):**
- **Call Center (Apr 22, 2025):** 1/1 case (100%) — veteran specifically asked about appointment letters and hotline-triggered letters; coverage for those types could not be confirmed during the call.
- **Paperless Delivery prototype usability (May–Jul 2025):** Participants requested bulk selection ("make all health care paperless") plus per-category override — implying they expect to *see* what categories exist. Currently only two VA documents are available digitally, which caps realistic coverage at launch.
- **Analytics signal:** Not applicable pre-launch.

**How to fix it (specific — for the launch design):**
1. Publish an in-product **coverage matrix** ("What goes paperless?") listing included and excluded letter types with expected delivery timelines. Make this visible on the Paperless Delivery setting page itself, not in a help article.
2. Offer a **bulk "make all paperless" action** at the top of the page with per-category overrides below, so Veterans can see the full scope before committing.
3. Add a **post-enrollment confirmation screen** summarizing exactly which communications will switch to paperless and how to revert.
4. Be explicit about what *remains* on paper — particularly formal/legal documents that a subset of Veterans prefer in physical form (claim decisions, etc.).
5. Plan a roadmap for expanding the set of paperless-eligible documents beyond today's two, since "needs to catch up with the times" (P4) was a recurring prototype sentiment.

**Representative quotes:**
- "The letters are about appointments that are upcoming or whenever he calls the VA hotline." — Agent Note, Call Center Apr 22, 2025
- "They need to catch up with the times." — P4, Paperless Delivery 2025
- "Like, per category. Like, I don't want you to send me my appointment notifications…" — P7, Paperless Delivery 2025 *(cited here for the category-visibility principle as it applies to paperless scope)*



### 3) Privacy exposure in paper mail is the primary adoption driver, and today's mail system cannot meet it (high-stakes, security-relevant)

**Evidence (timeframe + frequency):**
- **Call Center (Apr 22, 2025):** 1/1 case (100%) — motivation to go paperless driven by full SSN, name, and address appearing in mailed letters.
- **Paperless Delivery prototype usability (May–Jul 2025):** Security and PII reduction cited as primary adoption driver; 89% wanted paperless for documents and notifications. Participants compared the VA unfavorably to digital banking.
- **Discovery interviews (Sept–Oct 2024, paperless subset):** Privacy and rural mail-delivery unreliability repeatedly named as paperless adoption drivers.
- **Analytics signal:** Not applicable pre-launch.

**How to fix it (specific — for launch design and upstream templates):**
1. Conduct a **PII audit of mailed letter templates** and mask or remove full SSN wherever possible (truncate to last four, or eliminate entirely where not needed for identity verification). This is independent of Paperless Delivery launch and protects Veterans who stay on paper.
2. Add **security framing copy** directly on the Paperless Delivery setting page: e.g., "Reduce mail that contains sensitive details" and "Your documents are protected by your sign-in."
3. Expand the set of VA letter types available digitally beyond the current two, since limited coverage caps the privacy benefit even for enrolled Veterans.
4. Add **"You can change this anytime"** microcopy on the Paperless Delivery setting to reduce the perceived risk of switching.

**Representative quotes:**
- "He receives a lot of mail that has his full SSN, name and address." — Agent Note, Call Center Apr 22, 2025
- "All of my bank statements come electronically… That way, there's also no PII out there for anybody to grab as it's coming in the mail." — P1, Paperless Delivery 2025
- "Mailbox break-ins… worth the money to redirect to a PO box." — P19, Paperless Delivery 2025
- "If I had any reservation toward security… I probably wouldn't be using that platform altogether." — P16, Paperless Delivery 2025



### 4) Cross-channel ownership of paperless enrollment is unclear; Veterans get routed between properties without resolution (task-blocking, high operational cost)

**Evidence (timeframe + frequency):**
- **Call Center (Apr 22, 2025):** 1/1 case (100%) — veteran bounced from VA.gov → My HealtheVet ("not sure how to go paperless") → call center → local VA (PACT team / enrollment coordinator). Call closed without resolution.
- **Paperless Delivery prototype usability (May–Jul 2025):** Participants asked for in-product guidance, help pop-ups, and clear ownership of where to go for paperless help — suggesting the cross-property confusion is anticipated even for the prototype design.
- **Analytics signal:** Not applicable pre-launch.

**How to fix it (specific — for launch design and operations):**
1. Establish a **single owner** for Paperless Delivery end-to-end across VA.gov, My HealtheVet, the call center, and local VA touchpoints *before* launch.
2. Publish a **canonical knowledge base article and agent script** so frontline staff can complete paperless enrollment or cleanly refer the Veteran to self-service.
3. Create **warm-transfer protocols** if escalation is required, so Veterans are not asked to repeat themselves across channels.
4. Ensure the **Paperless Delivery setting is identically accessible** on both VA.gov and the Health and Benefits app, so a Veteran on either property can complete the task without cross-property referral.

**Representative quotes:**
- "Veteran reached out to My HealtheVet and they were not sure how to go paperless." — Agent Note, Call Center Apr 22, 2025
- "Agent … referred the Veteran to contact his local VA and ask someone in his pact team or the enrollment coordinator." — Agent Note, Call Center Apr 22, 2025



### 5) Confirmation and trust-closing feedback is missing from the proposed paperless save flow (trust-eroding)

**Evidence (timeframe + frequency):**
- **Paperless Delivery prototype usability (May–Jul 2025):** Most common post-save behavior was **double-checking** the paperless preference. Participants trusted the save but confirmed manually and explicitly requested email confirmation plus an "if you didn't make these changes, please notify us" safety link.
- **Analytics signal:** Not applicable pre-launch.

**How to fix it (specific — for the launch design):**
1. Send **email confirmation** after every paperless settings change, including what changed (which letter types moved to digital), when, and a "if you didn't do this, notify us" link. An optional SMS confirmation is a valuable add.
2. Display an **in-product confirmation banner** with explicit "undo" or "change back" affordance after save on the Paperless Delivery page.
3. Use familiar security framing language borrowed from banking contexts on the settings page itself.
4. Add **"You can change this anytime"** microcopy (addresses caregiver P18's concern about reverting a parent's preference).

**Representative quotes:**
- "I think there's one that says, 'If you didn't make these changes, please notify us.'" — P2, Paperless Delivery 2025
- "If I had any reservation toward security… I probably wouldn't be using that platform altogether." — P16, Paperless Delivery 2025



### 6) Caregivers and a durable paper-preferring minority need first-class support in the paperless design (accessibility/equity)

**Evidence (timeframe + frequency):**
- **Paperless Delivery prototype usability (May–Jul 2025):** 11% (2/18) of participants wanted paper as primary. Caregiver P18 specifically wanted centralized digital access because she could not physically retrieve the Veteran's mail. Participants asked for clear labels distinguishing "Paperless," "Digital," "Electronic," and "Paper."
- **Discovery interviews (Sept–Oct 2024, paperless subset):** Older Veterans described preferring paper for "important and final" documents (e.g., claim decisions), independent of digital capability.
- **Analytics signal:** Not applicable pre-launch.

**How to fix it (specific — for the launch design):**
1. **Preserve a first-class paper option** on the Paperless Delivery setting for Veterans who opt in — do not deprecate paper as a supported delivery method, and do not make digital the only path.
2. Design for **caregiver access** to a Veteran's digital documents where authorized, since caregivers are often the ones who would benefit most from paperless.
3. Use **plain-language, non-overlapping labels** ("Paperless," "Paper") rather than jargon ("electronic-only," "opt-out"), per repeated prototype feedback.
4. Allow Veterans to **mix per letter type** — e.g., paperless for appointment letters but paper for formal/final documents — rather than forcing an all-or-nothing choice.

**Representative quotes:**
- "There should be options for each [text, email, paper]." — P13, Paperless Delivery 2025 *(cited for the paper-as-option principle in the paperless context)*
- P18 (caregiver): wanted centralized digital access to the Veteran's documents because physical mail retrieval was not possible.



## 4) Pre-launch instrumentation brief: what to build *into* the Paperless Delivery product so GA4 can answer root-cause questions on Day 1

Because Paperless Delivery has not launched, there is no GA4 funnel to audit or extend — there is only a design phase in which analytics can be built in from the start. Every pain point above is currently validated by prototype usability sessions, filtered Discovery findings, or a single call center case, but none is validated at population scale. The brief below describes the events and funnels that should be specified *alongside* the Paperless Delivery launch design.

### A) Specify the full Paperless Delivery enrollment funnel before launch

**Why this matters:** From 18 prototype participants we know many cannot navigate from the homepage to the paperless settings page. We do not know whether that failure rate will be 30% or 80% in the real Veteran population. Specifying the funnel events (homepage → Profile → Paperless Delivery setting → category selection → save → confirmation) *in the build spec* means Day-1 data answers these questions rather than requiring a six-month retrofit.

**Directly ties to these pain points:**
- A discoverable, named Paperless Delivery setting does not exist / is hard to find
- Confirmation and trust-closing feedback is missing from the save flow

### B) Specify mobile and desktop path events separately for the paperless setting

**Why this matters:** Prototype testing surfaced a mobile-vs-desktop control inversion hypothesis from only 4 mobile participants. Shipping with device-segmented click-path events means the launch design will have evidence within weeks of release to confirm or reject whether mobile users fail to find the paperless setting more often than desktop users.

**Directly ties to:**
- A discoverable, named Paperless Delivery setting does not exist / is hard to find

### C) Specify paperless save events, confirmation-delivery events, and post-save return behavior

**Why this matters:** Prototype participants trusted the paperless save but double-checked. If the save event, confirmation email send, confirmation email open, and 24-hour return-to-page event are all captured from launch, the team can measure whether the confirmation flow eliminates the double-check behavior — converting a UX hypothesis into a measurable trust signal specific to paperless.

**Directly ties to:**
- Confirmation and trust-closing feedback is missing from the save flow
- Cross-channel ownership of paperless enrollment

### D) Tag call center tickets and "Contact Us" submissions with Paperless Delivery themes from Day 1

**Why this matters:** P17 said they would use "Contact Us" rather than find the paperless setting themselves. The April 22, 2025 call is one observed instance of this escape hatch. If call center case codes and "Contact Us" form tags include Paperless Delivery themes at launch — and can be correlated with whether the user previously visited the paperless setting page — the team can quantify how often a UX failure becomes an operational cost specific to paperless enrollment.

**Directly ties to:**
- A discoverable, named Paperless Delivery setting does not exist / is hard to find
- Cross-channel ownership of paperless enrollment

### E) Specify per-letter-type paperless opt-in events

**Why this matters:** Prototype participants asked to see and select paperless per letter category (appointments, benefits, health records, etc.). If opt-in events capture which letter types each Veteran moves to paperless, the team can measure actual paperless coverage per user, detect which letter types have low adoption (suggesting a labeling or trust problem), and prioritize which additional letter types to digitize next — directly addressing the "only two documents are digital today" constraint.

**Directly ties to:**
- Scope ambiguity of paperless coverage
- Privacy exposure in paper mail

### F) Log the linkage between paperless enrollment and paper-send suppression

**Why this matters:** A paperless setting only delivers its privacy value if the backend actually suppresses paper sends for enrolled Veterans and enrolled letter types. Instrumenting the linkage (paperless-opt-in → paper-send-suppression flag → actual paper-send log) makes the suppression rule auditable, catches silent failures where paper continues to ship after opt-in, and quantifies the privacy and postage savings.

**Directly ties to:**
- Privacy exposure in paper mail
- Scope ambiguity of paperless coverage



### If you only do 3 things before Paperless Delivery launches (highest ROI)

1. **Write the Paperless Delivery enrollment funnel into the build spec** (homepage → Profile → Paperless Delivery setting → category selection → save → confirmation), segmented by device, so the #1 pain point across all three sources becomes measurable from Day 1.
2. **Align call center case codes and "Contact Us" form tags with Paperless Delivery themes before launch**, so isolated cases like the April 22, 2025 call become a population-scale deflection metric as soon as real users start enrolling.
3. **Instrument per-letter-type opt-in events and the paperless-to-paper-send-suppression linkage** so the team can measure actual paperless coverage, catch silent suppression failures, and prioritize which letter types to digitize next.

Together these three specifications convert the Paperless Delivery launch from "ship and hope" to "ship and measure." They turn the rich pre-launch qualitative evidence into a Day-1 diagnostic framework specific to paperless enrollment — so that within weeks of release the team can distinguish Veterans who don't want paperless from Veterans who tried and got lost, and can show whether enrolled Veterans actually stop receiving paper mail.



**Scope note:** All findings in this report are drawn from pre-launch research (Paperless Delivery prototype usability testing, filtered Discovery interview findings, and one call center case about the current pre-paperless mail experience), narrowed to Paperless Delivery settings only. Notification preferences, appointment-reminder channel selection, and the 2023 Kano Appointment Reminders survey are excluded from this version as out of scope. No CSAT data or GA4 data exists for Paperless Delivery because the product has not launched. The instrumentation recommendations in Section 4 are intentionally scoped to what should be built *into* the Paperless Delivery product before release.
