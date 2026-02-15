---
title: Copilot findings for Auth Experience, My VA 3.0, 2025/08
product: My VA 3.0
team: Auth Experience
office: Office of the CTO - Digital Experience (OCTO-DE)
date: '2025-08-28'
researchers:
- Ashley Bush
research_goals:
- Review and analyze the scrubbed user research transcripts from the 08/2025 My VA
  3.0 Usability Study
- Draft a list of key findings and recommendations using Copilot AI analysis
methodology:
- AI-assisted analysis
- Transcript review using Copilot
devices_used:
  desktop: 0
  tablet: 0
  smartphone: 0
  assistive_technology: 0
participants_total: 9
demographics:
  veterans: 9
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    25-34: 0
    35-44: 0
    45-54: 0
    55-64: 0
    65+: 0
    unknown: 9
  education:
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 9
  location:
    urban: 0
    rural: 0
    unknown: 9
  race:
    white: 0
    black: 0
    hispanic: 0
    biracial: 0
    asian: 0
    native: 0
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
- Inline refill interactions that do not force a full page navigation were praised
  as fast and clear (high willingness to use, rated 4–5)
- 'Participants want more details on refill actions: remaining refills, whether request
  was mailed vs. pickup, and ship/expected delivery date'
- Some participants worry about accidental taps on trackpads/phones and want a secondary
  confirmation or a safer multi-select workflow
- Participants who refill many meds want batch/refill-all flows and ability to check
  boxes for multiple meds
- Quick check-in from the homepage is valued; many use phone app/mobile for appointment
  tasks
- 'Inconsistent presentation/incomplete appointment data: participants asked for provider
  name, room number, and clearer clinic location'
- Centralized notifications are highly valued. Participants prefer a notifications
  bell and chronological, filterable list
- The label 'Activity Feed' was confusing; participants strongly preferred 'Notifications'
  (virtually unanimous)
- 'Many want certain types of notifications highlighted/prominent: debts/payments
  (high anxiety), prescription shipped, appointment reminders, test results, and changes
  to personal information'
- Desire for the ability to review notifications per a date range or pick a date (date
  picker) and to see more notifications per page
- Participants overwhelmingly expect healthcare (appointments, meds, messages) to
  be top priority on the dashboard — claims and appeals being above healthcare was
  a common complaint
- 'Desktop layout issues: perceived empty whitespace and wasted real estate; participants
  suggested using it for more above-the-fold content'
- Confusion between 'My VA' vs 'Profile' and overlap with My HealtheVet — participants
  suggested renaming and clearer labels
- The 'step X of Y' indicator (option B style) and status bar were repeatedly singled
  out as very valuable — it reduces uncertainty about progress
- The 'green check' for in-progress items was confusing for some — participants expected
  a 'pending' or 'in progress' color/indicator rather than a completion check
- Profile that includes clear headings and short descriptions explaining what you
  can do in each section (option A for profile) helps comprehension
- The word 'debt' causes anxiety and anxiety-driven reactions
- Participants want payments/debts to be higher on the page and/or labeled in ways
  that are less alarming (e.g., 'Payments & balances' or 'Payment history' + a clear
  indicator for amounts due)
- Participants need easy access to letters for verification (e.g., income/disability
  letters) and expect a clear 'Letters & Documents' place
- Many participants primarily use phone/app; several mentioned features available
  in the browser or My HealtheVet app that are missing or awkward in the VA app
- Copy such as 'Messages' vs 'Secure Messaging,' 'Manage health appointments' vs 'Change/Cancel
  appointment' caused confusion
recommendations:
- Use the label 'Notifications' (not 'Activity Feed') on the bell/center
- Put healthcare (appointments, medications, secure messaging) higher on the My VA
  homepage — above claims & appeals
- Change 'Messages' → 'Secure messaging' where it's clinical; 'Manage health appointments'
  → 'Change or cancel appointment' or 'View & manage appointments'
- Change 'Payments & debts' copy to reduce alarm (e.g., 'Payments & balances' or split
  into 'Payments' and 'Outstanding balances' with clear context)
- Ensure Notifications list is newest→oldest and shows actionable links
- 'Add or surface these small but high-value data points on relevant cards: For medications:
  show remaining refills, last fill date, expected ship/ready date (or pickup location),
  and whether request was mailed vs pickup. For appointments: provider name and room
  number (or clear clinic location)'
- Add 'refill all' and multi-select for batch refill; add a lightweight confirmation
  step (checkbox & 'Refill X meds' confirm) for accidental clicks
- Let users pick pickup vs mail and show expected ship/ready date
- 'Revise claims & appeals card to include: ''Step X of Y'' progress indicator (option
  B), clear action buttons, and deadline/requested evidence call-outs. Avoid a green
  check for ''in progress'''
- Keep category filters (claims, healthcare, payments, benefits, VA.gov updates)
- Add optional date picker and ability to set 'notifications per page' (10/20/50)
- Provide a dedicated 'Verification letters' subcategory (DD214/service dates, proof
  of service, benefit verification) and a 'Sent to you' archive for mailed/emailed
  notifications
- Push notifications to mobile app/device (opt-in) and sync notifications across web
  and app
- Allow users to reorder dashboard sections client-side (saved to cookie/local storage)
  as an experiment
- Integrate My HealtheVet content and critical app features (billing, device parts
  ordering) into My VA/VA app where feasible
- 'A/B test the ''My VA'' name: Options to test: ''My VA,'' ''My Dashboard,'' ''My
  VA Dashboard'''
- 'Rework copy around ''debt'' and payment alerts: Rename UI elements to reduce panic
  (e.g., ''Outstanding balance'' with a calm explanatory line and an obvious ''What
  this means'' modal)'
- 'Make secure messaging & notifications consistent: If a refill causes a message,
  consider optionally mirroring the confirmation into the messages inbox'
- A brief 'What is My VA?' overlay or short guided tour for first-time users explaining
  where to find letters, payments, meds, and appointments
kpi_alignment:
- Increase in percent of refills completed via the in-page flow
- Reduction in time-to-complete refill task
- Reduction in support calls about refills
- Increase in check-in completion rate
- Reduced missed appointments
- Fewer calls asking for provider/room info
- Increase in opt-ins for notifications
- Reduced time-to-find specific notifications
- Increased perception of timeliness/relevance (user survey)
- Decrease in 'Where am I in the process?' support requests
- Increase in user satisfaction with claims card
- Reduction in support requests for verification letters
outcomes:
  user: Veterans can quickly complete key tasks (refills, check-in, find notifications)
    with less confusion and anxiety, meeting their expectations for a personalized,
    action-oriented dashboard
  business: Reduced support call volume, increased digital self-service completion
    rates, improved Veteran satisfaction with My VA as primary authenticated experience
opportunity_areas:
- Better integration between My VA, My HealtheVet, and VA mobile app to reduce redundancy
  and confusion
- Personalization and customization options for dashboard section ordering
- Enhanced appointment and prescription data integration to show complete, actionable
  information
- Push notification system to increase mobile app adoption and reduce missed actions
further_research_needed:
- Run a focused unmoderated usability task for the top quick wins (change copy + reorder
  healthcare), measuring task success & time for refill, appointment check-in, and
  finding a letter
- A/B test the 'My VA Dashboard' label vs 'My VA' to confirm which reduces navigation
  confusion
- Prototype notification improvements (filters + date picker) and test with participants
  who have many notifications
underserved_groups_missing: []
secondary_research:
- My VA 3.0 Usability Study research plan (08/2025)
- Nine scrubbed user research transcripts from 08/2025 study
synthesis_tools_used:
- Copilot AI
tags:
- 'AUD: Veterans'
- 'BNFT: Disability'
- 'BNFT: Healthcare'
- 'BNFT: Records'
- 'PRDT: My VA'
- 'MHV: Appointments'
- 'MHV: Pharmacy'
- 'MHV: Secure Messaging'
- moderated-research
---
# Copilot findings for Auth Experience, My VA 3.0, 2025/08
**product:** My VA 3.0

**team:** Auth Experience

**office:** Office of the CTO - Digital Experience (OCTO-DE)

**researchers:** Ashley Bush 

**date created:** 11/24/2025
**last modified:** 12/01/25



## Study overview 

Utlized Copoilt to review and analyze the scrubed user research transcripts from the 08/2025 My VA 3.0 Usability Study. Also included the research plan as a guide to assist with keeping the AI tool from hallucinating false findings. 

>  
> Prompt used: Review and analyze the user research transcripts in these text files [attach files] and draft a list of key findings and recommendations. Use the research plan as a guide. 

## Feedback
Overall Copoilt did an overall good job of analyzing the user research transcripts. It's findings were aligned to the findings we found during our own analysis of the user testing. Some considerations include missing some on the emotions/sentiments that had participants during the study. 



## Copilot results: 
Quick note about evidence and scope

The findings below reflect recurring themes across the nine session transcripts you supplied. I call out when an insight was mentioned by many participants vs. a smaller number. Where participants disagreed, I note the split.
I assumed the research plan’s primary tasks were: refill prescriptions, appointment check‑in, scanning the signed‑in homepage (My VA), notifications drawer / review all notifications, profile (and profile variants), and claims & appeals card variants. Findings and recommendations map to those tasks.
Key findings (by theme / task)

### Refill prescriptions (task)
What participants liked: 
- Inline refill interactions that do not force a full page navigation were praised as fast and clear (“That was so slick… way faster” — P5).
- High willingness to use: most participants rated likelihood as 4–5 for using an inline refill feature.

Problems & pain points:
- Participants want more details on refill actions: remaining refills, whether request was mailed vs. pickup, and ship/expected delivery date. Several reported confusion about “refill request sent” without delivery/pickup details (P6, P12, P5).
- Some participants worry about accidental taps on trackpads / phones and want a secondary confirmation or a safer multi-select workflow (P3).
_ Participants who refill many meds want batch/refill-all flows and ability to check boxes for multiple meds (P3).
- Evidence level: consistent across many transcripts.

### Appointments and check‑in (task)
What participants liked:
- Quick check‑in from the homepage is valued; many use phone app/mobile for appointment tasks (P6, P9, P12).
  
Problems & pain points: 
- Inconsistent presentation / incomplete appointment data: participants asked for provider name, room number, and clearer clinic location (P6, P4, P11).
- Participants often prefer to use a kiosk or onsite check‑in; mobile check‑in is useful for convenience but must not encourage no‑shows from far away (P3).
- Evidence level: recurring.

### Notifications drawer and “Review all notifications”
What participants liked: 
Centralized notifications are highly valued. Participants prefer a notifications bell and chronological, filterable list (many).
Filters by category (claims, healthcare, payments, etc.) and sort newest→oldest are helpful and expected (P4, P5, P13).

Problems & pain points: 
- The label “Activity Feed” was confusing; participants strongly preferred “Notifications” (virtually unanimous).
- Many want certain types of notifications highlighted/prominent: debts/payments (high anxiety), prescription shipped, appointment reminders, test results, and changes to personal information (new dependent etc.) (P3, P5, P6, P12).
- Desire for the ability to review notifications per a date range or pick a date (date picker) and to see more notifications per page (P4, P5).
- Some want notifications to be actionable and link to details (reviewable; participants repeatedly noted links should go to contextual pages).
- Evidence level: strong & consistent.

### Information hierarchy & homepage (My VA) organization
What participants liked: 
- Yellow highlights (call to action) and status indicators draw attention to required actions and are valued (several).

Problems & pain points: 
- Participants overwhelmingly expect healthcare (appointments, meds, messages) to be top priority on the dashboard — claims and appeals being above healthcare was a common complaint (P3, P4, P5, P13).
- Desktop layout issues: perceived empty whitespace and wasted real estate; participants suggested using it for more above‑the‑fold content (P3).
- Confusion between “My VA” vs “Profile” and overlap with My HealtheVet — participants suggested renaming (see section below) and clearer labels (P3, P4, P6, P13).
- Evidence level: strong.

### Claims & appeals card variants
What participants liked: 
- The “step X of Y” indicator (option B style) and status bar were repeatedly singled out as very valuable — it reduces uncertainty about progress (P5, P10, P11, P13).
- Iconography and short bullets help scanning (P4, P10, P13).

Problems & pain points:
The “green check” for in‑progress items was confusing for some — participants expected a “pending” or “in progress” color/indicator rather than a completion check (P3).
- Evidence level: strong — several participants favored the step + status UI (option B).

### Profile, menu, and naming
What participants liked:
- Profile that includes clear headings and short descriptions explaining what you can do in each section (option A for profile) helps comprehension (P12, P13).

Problems & pain points:
- Confusion for less‑web‑savvy users between “My VA” vs “Profile” vs “My HealtheVet.” Some suggested “My VA Dashboard” or simply “Dashboard” or “My Dashboard” — “My VA Dashboard” performed well as descriptive (P3, P4, P5, P6).
Participants want “Profile settings” only if it truly contains view settings; otherwise “Profile” is fine (P4).
- Evidence level: consistent.

### Payments & debts language & placement
Problems & pain points:
- The word “debt” causes anxiety and anxiety‑driven reactions.
- Participants want payments/debts to be higher on the page and/or labeled in ways that are less alarming (e.g., “Payments & balances” or “Payment history” + a clear indicator for amounts due) (P3, P13).
- Some wanted upcoming payments visible in the notifications drawer (P3).
- Evidence level: clear theme from multiple participants.

### Letters & documents (verification letters)
Problems & pain points:
- Participants need easy access to letters for verification (e.g., income/disability letters) and expect a clear “Letters & Documents” place. They also want the ability to find verification letters quickly (P13).
Evidence level: recurring.

### Mobile vs desktop differences, and app limitations
Observations
- Many participants primarily use phone/app; a number use desktop (split). Several mentioned features available in the browser or My HealtheVet app that are missing or awkward in the VA app (ordering device parts, paying bills) (P5, P6, P11).
- Evidence level: consistent.

### Personalization & ordering
Mixed opinions
- Some participants liked the idea of reordering dashboard sections to suit personal priorities; others thought filters/notifications make it less necessary. Several recommended a low‑effort solution like client‑side reordering (cookie/local storage) if inexpensive (P3).
- Evidence level: mixed but actionable.

### Copy clarity & microcopy
Problems & pain points
- Copy such as “Messages” vs “Secure Messaging,” “Manage health appointments” vs “Change/Cancel appointment” caused confusion. Better descriptive labels and short descriptions would reduce uncertainty (many).
- Evidence level: widespread.

## Recommendations (prioritized: Quick wins → Mid → Long‑term). 
Each recommendation includes rationale and rough effort signal.
High‑impact, low‑effort (Quick wins)

### Use the label “Notifications” (not “Activity Feed”) on the bell/center.
- Rationale: Strong, consistent user preference and expectation.
- Effort: Very low (copy change).

### Put healthcare (appointments, medications, secure messaging) higher on the My VA homepage — above claims & appeals.
- Rationale: Primary reason most participants visit; increases immediate utility.
- Effort: Low (content reordering, QA).

### Improve microcopy for risky/ambiguous labels:
Change “Messages” → “Secure messaging” where it’s clinical; “Manage health appointments” → “Change or cancel appointment” or “View & manage appointments.”
Change “Payments & debts” copy to reduce alarm (e.g., “Payments & balances” or split into “Payments” and “Outstanding balances” with clear context).
- Rationale: Reduces confusion and anxiety; participants repeatedly asked for this.
- Effort: Very low (copy edits + small design tweaks).

### Ensure Notifications list is newest→oldest and shows actionable links.
- Rationale: Expected behavior; several participants explicitly asked for newest first and direct links.
- Effort: Very low.

### Add or surface these small but high‑value data points on relevant cards:
- For medications: show remaining refills, last fill date, expected ship/ready date (or pickup location), and whether request was mailed vs pickup.
- For appointments: provider name and room number (or clear clinic location).
- Rationale: Frequent usability gaps that cause extra calls/confusion.
- Effort: Low to moderate (UI + data mapping).
- Mid‑term (moderate effort) 
-
### Enhance appointment & refill flows:
- Add “refill all” and multi-select for batch refill; add a lightweight confirmation step (checkbox & “Refill X meds” confirm) for accidental clicks (trackpad/phone).
- Let users pick pickup vs mail and show expected ship/ready date.
- Rationale: Many users refill multiple meds and fear accidental actions.
- Effort: moderate (flow + backend support).

### Revise claims & appeals card to include:
- “Step X of Y” progress indicator (option B), clear action buttons, and deadline / requested evidence call‑outs. Avoid a green check for “in progress.”
- Rationale: Reduces uncertainty and support calls.
- Effort: moderate.
- Improve notifications filtering and review page:

### Keep category filters (claims, healthcare, payments, benefits, VA.gov updates).
- Add optional date picker and ability to set “notifications per page” (10/20/50).
- Rationale: Participants want to find historical notifications and filter large volumes.
- Effort: moderate.

### Make letters & documents easier to find and separate:
_ Provide a dedicated “Verification letters” subcategory (DD214/service dates, proof of service, benefit verification) and a “Sent to you” archive for mailed/emailed notifications.
- Rationale: Participants need quick access to verification letters for administrative tasks.
- Effort: moderate.
- Lower priority / longer term (higher effort) 10. Push notifications to mobile app / device (opt‑in) and sync notifications across web and app. - Rationale: Participants said this would increase mobile adoption and reduce missed actions (P3, P5). - Effort: high (push services, privacy/consent, product changes).

### Offer low‑cost personalization:
- Allow users to reorder dashboard sections client‑side (saved to cookie/local storage) as an experiment — evaluate adoption and value before building server‑side persistence.
- Rationale: Mixed interest; cookie‑based solution is cheaper and respects cross‑device limits.
- Effort: medium → low if client‑side; high if server‑side.

### Integrate My HealtheVet content and critical app features (billing, device parts ordering) into My VA/VA app where feasible.
- Rationale: Multiple participants noted missing flows in the app vs browser (P5, P6, P11).
- Effort: high (product roadmap & backend integration).
- Reconsider the “My VA” name with A/B testing:

#### Options to test: “My VA,” “My Dashboard,” “My VA Dashboard.” Run a short A/B test to measure task completion and comprehension.
- Rationale: Participants had preferences for descriptive naming; testing prevents unintended confusion.
- Effort: low‑moderate (content + analytics).
- Accessibility, trust and copy hygiene (foundational) 14. Rework copy around “debt” and payment alerts: - Rename UI elements to reduce panic (e.g., “Outstanding balance” with a calm explanatory line and an obvious “What this means” modal). - Provide clear next steps and payment links. - Rationale: “Debt” causes strong emotional response; clarity will reduce panic & support calls. - Effort: low to moderate (copy + UX).

### Make secure messaging & notifications consistent:
- If a refill causes a message, consider optionally mirroring the confirmation into the messages inbox (or make a brief notification that links to the message).
- Rationale: Participants expected confirmations in both places (P6, P5).
- Effort: medium.
- Improve onboarding / micro‑help for older or less confident users:

### A brief “What is My VA?” overlay or short guided tour for first‑time users explaining where to find letters, payments, meds, and appointments.
- Rationale: Several participants (and observers) expressed concern for veterans who are less internet‑savvy.
- Effort: low to medium.

## Metrics & success signals to measure after implementing recommendations

### Refill: Increase in percent of refills completed via the in‑page flow, reduction in time-to-complete refill task, and reduction in support calls about refills.
- Appointments: Increase in check‑in completion rate, reduced missed appointments, fewer calls asking for provider/room info.
- Notifications: Increase in opt‑ins for notifications, reduced time-to-find specific notifications (task success time), increased perception of timeliness/relevance (user survey).
- Claims: Decrease in “Where am I in the process?” support requests; increase in user satisfaction with claims card.
- Letters: Reduction in support requests for verification letters; fewer user complaints about “where do I download my letter.”
Representative quotes (to use in deliverables)

“That was so slick… way faster” — P5 (inline refill experience)
“The word debt… my palms are actually sweaty” — P3 (debt language causes anxiety)
“I prefer notifications — activity feed doesn’t make sense” — multiple participants
“Step three of eight — I like that, it manages expectations” — P5/P10 (claims status)

## Suggested next research steps
- Run a focused unmoderated usability task for the top quick wins (change copy + reorder healthcare), measuring task success & time for refill, appointment check‑in, and finding a letter.
- A/B test the “My VA Dashboard” label vs “My VA” to confirm which reduces navigation confusion.
- Prototype notification improvements (filters + date picker) and test with participants who have many notifications.
