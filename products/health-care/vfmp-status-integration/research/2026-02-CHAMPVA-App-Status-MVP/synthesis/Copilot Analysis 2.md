
# CHAMPVA Application Status MVP — Cohort 1 Usability Analysis
## 9 Veteran Sessions (P01, P02, P03, P04, P06, P07, P08, P09, P11)

---

## 1. EXECUTIVE SUMMARY

- **The core concept works**: Integrating CHAMPVA application status into the Claims Status Tool is directionally validated — 8 of 9 participants found the CHAMPVA card on MyVA and clicked "Check status details" immediately and with confidence. The overall prototype received high ease-of-use ratings (7 of 9 rated it a 5/5).
- **File upload is a standout success**: All 9 participants completed the document upload task with minimal friction; 7 of 9 did so without any assistance. The dedicated birth certificate upload page was specifically praised as clear and streamlined.
- **Task 3 (finding the closed application) is a consistent failure point**: 8 of 9 participants could not find the completed CHAMPVA application without moderator assistance. The card disappearing from MyVA and moving to the "Closed" tab in CST caused confusion, panic, and anxiety.
- **The "Request to add or remove a dependent" card is a major confusion vector**: 5 of 9 participants mistook this unrelated card for their CHAMPVA application in Task 3, creating a false mental model that blocked further navigation.
- **Unmet expectations around timelines, email notifications, and denial reasons are universal**: 9 of 9 want email/text notifications; 7 of 9 explicitly request processing timelines; 6 of 9 want immediate access to decision letters and denial reasons online rather than waiting for mail.

---

## PART 1: TASK-LEVEL MICRO-FAILURE ANALYSIS

### Task 1: Find Application Status

| # | Session | Severity | Behavior | Expected | UI Trigger | Type |
|---|---------|----------|----------|----------|------------|------|
| 1 | P01, Veteran, beneficiaries enrolled | 1 | Said "Thrown off" and "Does this even exist on VA.gov?" when seeing CHAMPVA under "Claim and application status" | Disability claims only in this section | "Claim and application status" section heading | MENTAL MODEL |
| 2 | P01, Veteran | 2 | Clicked "Check status details" on the *first* card (non-CHAMPVA) before clicking CHAMPVA card, thought it was a broken link | Expected CHAMPVA to be the first card | Card ordering on MyVA | NAVIGATION |
| 3 | P03, Veteran, tablet with zoom | 1 | "Why are there 4 steps? Why are there steps 2 and 3? I'm not applying to be a NASA astronaut" | Simpler process for CHAMPVA vs. disability claims | Step indicator "Step 1 of 4" | MENTAL MODEL |
| 4 | P03, Veteran | 2 | Confused by relationship between "Completed forms" card and "Claim and application status" cards — "It's like the two aren't talking to each other" | Unified view of application status | MyVA section separation between forms and claims | CONTENT |
| 5 | P04, Veteran | 2 | Initially wanted segmented tab to default to "Closed" before realizing in-progress wouldn't show everything | Expected closed/decided items to be prominently displayed | CST segmented tab defaulting to "In progress" | NAVIGATION |
| 6 | P04, Veteran | 1 | Called "In-progress forms" section "In-process forms" 3 times | N/A — language slip revealing mental model | "In-progress forms" label | CONTENT |
| 7 | P07, Veteran | 2 | Clicked "Check status details" on a non-CHAMPVA card first, didn't find the CHAMPVA card immediately | CHAMPVA card to be most prominent | MyVA card ordering | NAVIGATION |
| 8 | P07, Veteran | 1 | Expected the CHAMPVA application itself to be found under "Forms" section, not "Claim and application status" | Applications live under Forms | "Claim and application status" vs "Forms" section distinction | MENTAL MODEL |
| 9 | P08, Veteran | 1 | "Co-pays doesn't make sense if you are 100%" — distracted by irrelevant content | Only relevant content to show | MyVA co-pay section | CONTENT |
| 10 | P09, Veteran, mobile | 2 | Thought both cards in "Claim and application status" were separate CHAMPVA applications (one per person) | One card per beneficiary | Two cards in claim section (one CHAMPVA, one housing) | MENTAL MODEL |
| 11 | P09, Veteran | 1 | Confused that "Completed forms" accordion is visually under "In-progress forms" heading | Clear separation between sections | Page hierarchy, disability rating between sections | VISUAL HIERARCHY |
| 12 | P11, Veteran, mobile | 1 | "Applying for CHAMPVA isn't a claim... applying for a claim is applying for a disability rating" — CHAMPVA doesn't belong here | CHAMPVA in its own section | "Claim and application status" heading | MENTAL MODEL |
| 13 | P11, Veteran | 2 | Scrolled up and down repeatedly trying to understand difference between "Claim and application status" and "Completed forms" | Unified status view | MyVA section layout | NAVIGATION |

### Task 2: Upload Missing Documents

| # | Session | Severity | Behavior | Expected | UI Trigger | Type |
|---|---------|----------|----------|----------|------------|------|
| 14 | P01, Veteran | 1 | Expected a dropdown to select document type on birth certificate page — "Would have expected dropdown, but understands they already know what they're looking for" | Dropdown for document type | Pre-selected document type on dedicated upload page | MENTAL MODEL |
| 15 | P03, Veteran, tablet | 2 | Tried to click "Action needed" tag as a button, then found the link | Tag to be interactive | "Action needed" tag | VISUAL HIERARCHY |
| 16 | P03, Veteran | 1 | "Why didn't they tell me before that they needed the birth certificate?" — questions document request timing | All required documents requested upfront | Information request appearing mid-process | MENTAL MODEL |
| 17 | P03, Veteran | 2 | Didn't click submit button until directed; didn't click applicant checkbox initially, but error state corrected him | More obvious submit flow | File upload interaction pattern | NAVIGATION |
| 18 | P06, Veteran | 1 | After uploading, clicked Jane Doe again — confused if they needed to re-select who the file was for | Clear confirmation of completed upload | File upload success state / applicant checkbox | VISUAL HIERARCHY |
| 19 | P07, Veteran | 3 | "Extremely confused" by file upload — looking for "attach document" button, confused by "change file" link, didn't realize document was attached | Traditional "attach file" button like email | Drag-and-drop upload area, "change file" link | NAVIGATION |
| 20 | P07, Veteran | 2 | After uploading, clicked Jane Doe name again — unsure if document uploaded | Clear upload confirmation with file name | Success alert content | VISUAL HIERARCHY |
| 21 | P08, Veteran | 2 | Missed selecting Jane Doe checkbox, triggered error state, then corrected | Checkbox pre-selected or more prominent | Applicant checkbox | VISUAL HIERARCHY |
| 22 | P09, Veteran, mobile | 1 | "Review request" phrasing is odd — expected "Submit requested document" | Action-oriented label | "Review request" link text | CONTENT |
| 23 | P09, Veteran | 1 | Confused by "how to confirm we've received your documents" — already sees confirmation above | Section to not appear after confirmed submission | Confirmation section for mail/fax juxtaposed with online confirmation | CONTENT |
| 24 | P11, Veteran, mobile | 1 | Had to be prompted to review rest of status page after uploading — went straight to upload and stopped | Upload as primary focus overshadows status updates | Page layout after upload completion | VISUAL HIERARCHY |
| 25 | P11, Veteran | 1 | "huh" — confused by partial decision alert saying "after you submit more information" when she already submitted | Alert text to update after submission | Partial decision alert content | CONTENT |

### Task 3: Understand Eligibility Outcome / Find Closed Application

| # | Session | Severity | Behavior | Expected | UI Trigger | Type |
|---|---------|----------|----------|----------|------------|------|
| 26 | P01, Veteran | 1 | "Was wondering if there was a completed claims section" — scrolled down looking for it on MyVA | Completed application to surface on MyVA | Absence of card on MyVA after decision | NAVIGATION |
| 27 | P02, Veteran, mobile | 3 | Identified "Request to add or remove a dependent" as the CHAMPVA application. "We just added John Doe Jr. since we were asking for his birth certificate" | CHAMPVA card to remain visible | Unrelated dependent card on MyVA | MENTAL MODEL |
| 28 | P02, Veteran | 2 | Had to be prompted to find "Track claims" link to reach CST | Completed app visible on MyVA or easy path to closed items | "Track claims, decision reviews, and applications" link | NAVIGATION |
| 29 | P03, Veteran | 1 | "I don't know what is going on with it... I assume it's completed, but why didn't they say it here?" | Decision surfaced on MyVA | Absence of completed CHAMPVA card on MyVA | CONTENT |
| 30 | P03, Veteran | 1 | "An application for CHAMPVA is a big deal... Why are they putting it 4 pages down when my son is denied?" | Denial prominently surfaced | Multi-click path to find closed application | VISUAL HIERARCHY |
| 31 | P04, Veteran | 2 | Looked for CHAMPVA under "Track claims" link first — didn't find it in in-progress tab initially | Application to be surfaced regardless of status | CST defaulting to "In progress" tab | NAVIGATION |
| 32 | P06, Veteran | 3 | "Oh hell did they lose it, or didn't they cancel it... Don't tell me I have to start over." Panic when card disappeared from MyVA. Checked messages. | Card to remain where it was | CHAMPVA card removed from MyVA after decision | MENTAL MODEL |
| 33 | P06, Veteran | 1 | "Is closed a bad thing? I don't even know what that means" — questioned terminology | "Completed" instead of "Closed" | "Closed" tab label | CONTENT |
| 34 | P06, Veteran | 2 | Wanted denial reason and letter immediately — "Sent a letter that they may or may not receive" — would call immediately | Link to decision letter online | No link to denial letter | CONTENT |
| 35 | P07, Veteran | 3 | Thought "Request to add or remove a dependent" was John Doe Jr.'s CHAMPVA application, and closed CHAMPVA card was only for Jane. Did not find the correct status without multiple redirects. | Clear connection between CHAMPVA card and all beneficiaries | "Request to add or remove a dependent" card presence + closed CHAMPVA card label | MENTAL MODEL |
| 36 | P07, Veteran | 1 | "Tell me why and how to fix it" — wanted a link explaining ineligibility reason | Reason for denial in the tool | Only "Learn how to choose a decision review option" link | CONTENT |
| 37 | P08, Veteran | 3 | Confused CHAMPVA with "add or remove dependent" card. Scrolled repeatedly between MyVA sections. Could not find CHAMPVA without redirect to CST "Track claims" link. | CHAMPVA card to persist on MyVA | Card disappearance + unrelated dependent card | NAVIGATION |
| 38 | P08, Veteran | 2 | At CST, didn't see John Doe Jr. as denied — stopped at card level thinking "step 4/4" meant everything was fine | Per-beneficiary status visible on card | Card-level summary not showing mixed outcomes | VISUAL HIERARCHY |
| 39 | P09, Veteran, mobile | 3 | Still believed "Request to add or remove a dependent" was the CHAMPVA application even after seeing closed CHAMPVA card — thought application was split into two cards | One card = one application | Two different cards appearing to represent same process | MENTAL MODEL |
| 40 | P09, Veteran | 1 | "This is a strange page for me. It's the same two boxes as the previous screen." — CST home felt redundant with MyVA | CST to add new information | MyVA and CST showing same cards | CONTENT |
| 41 | P11, Veteran, mobile | 3 | "I don't see CHAMPVA on here." Didn't realize "Closed" and "All" tabs were clickable — thought they were labels. Needed redirect. | Tabs to look interactive | Segmented tab styling on mobile | VISUAL HIERARCHY |
| 42 | P11, Veteran | 1 | "I would call to see if I can get the information by calling. Would call to understand why John Doe Jr. isn't eligible" | Reason online | No denial reason in tool | CONTENT |

---

## PART 2: FIRST IMPRESSIONS — MENTAL MODEL CAPTURE

### MyVA Homepage (First Exposure)

| Session | First Words/Action | Assumption Revealed | UI Confirms or Contradicts? |
|---------|-------------------|---------------------|---------------------------|
| P01 | "That is very nice, tells me what I need" | Centralized dashboard should show everything at a glance | **Confirms** — card is visible |
| P01 | "Does this even exist on VA.gov? I'm used to disability claims only on this page" | CST = disability claims exclusively | **Contradicts** — CHAMPVA is now included |
| P02 | Scrolled full page, clicked check status details immediately | Status tool is the right place to look | **Confirms** |
| P03 | "Why are there 4 steps? I'm not applying to be a NASA astronaut" | CHAMPVA should be simpler than disability claims | **Contradicts** — 4-step process feels heavyweight |
| P04 | "Things he is looking for is right up front and is well marked" | Important items should be at top of page | **Confirms** |
| P06 | "Page looks clean, tells them what they are looking at" | Dashboard should be scannable | **Confirms** |
| P07 | "What I would like vs what I would expect are two different things" | VA tools typically under-deliver on detail | **Contradicts** — prototype exceeds expectations |
| P08 | Would check status details; "Co-pays doesn't make sense if you are 100%" | Dashboard should be contextually relevant | **Partially contradicts** — co-pay section irrelevant to 100% P&T |
| P09 | "Both the applications at the top are in progress" — thinks each card = one CHAMPVA application | One beneficiary = one application | **Contradicts** — one application covers multiple beneficiaries |
| P11 | "Applying for CHAMPVA wouldn't be a claim... Claims are for disability" | Claims ≠ healthcare benefit applications | **Contradicts** — CHAMPVA placed under "Claim and application status" |

### Partial Decision Screen (One Approved, One Pending)

| Session | First Words/Action | Assumption Revealed | UI Confirms or Contradicts? |
|---------|-------------------|---------------------|---------------------------|
| P01 | "Ooh... That throws you for a loop right there" then scrolled up/down and realized it was for 2 people | One application = one decision | **Contradicts** initially, then self-corrects |
| P02 | Scrolled down and saw Jane; liked the timeline for ID card arrival | Each person gets separate status | **Confirms** after exploration |
| P03 | "I would split the screen, say Jane went through Steps 1 to 4 and she's enrolled" | Per-person step tracker | **Partially contradicts** — shared step indicator |
| P06 | Focused on action needed, didn't see Jane's status initially | Action items should be primary focus | **Confirms** action orientation but **misses** completed status |
| P07 | "I thought this was for my wife? I thought this was for Jane Doe, not John Doe Jr." | Was applying only for spouse, forgot about Jr. | **Contradicts** momentarily — realizes multi-beneficiary after reviewing |
| P08 | "Likes the partial decision, especially the transparency" | Partial decisions are unusual but appreciated | **Confirms** |
| P09 | "Hm. We made a decision on part of your application. This was a surprise to me." | Decision is all-or-nothing | **Contradicts** — partial decisions are new concept |
| P11 | "huh" then "oh we made a decision on Jane and she is enrolled" | Alert text "after you submit more information" means more work needed | **Contradicts** — confusing alert wording after already submitting |

### Closed Application in CST

| Session | First Words/Action | Assumption Revealed | UI Confirms or Contradicts? |
|---------|-------------------|---------------------|---------------------------|
| P01 | "I would guess it's in closed" — pointed to closed tab immediately | Completed applications go to a "closed" section | **Confirms** — but still looked around first |
| P02 | "Doesn't say anything about CHAMPVA" then went to closed tab | CHAMPVA should be labeled in the card clearly | **Partially confirms** — found it after searching |
| P03 | "I don't see it here either" then found closed tab | Completed items should be surfaced prominently | **Contradicts** — buried under tab |
| P06 | "Oh hell did they lose it" — immediate panic | Items should stay where they were | **Contradicts** — card moved/disappeared |
| P07 | "I just want Junior enrolled in health care" — frustrated by seeing travel claims | CST should filter to relevant content | **Contradicts** — all claim types mixed together |
| P08 | Scrolled up and down, went to forms section repeatedly | CHAMPVA status should be in forms section | **Contradicts** — it's under closed in CST |
| P09 | "Request to add or remove a dependent" must be the CHAMPVA app | Card titles indicate CHAMPVA | **Contradicts** — unrelated card mistaken for CHAMPVA |
| P11 | "I don't see CHAMPVA on here. Didn't know that was clickable" | Tabs should look like buttons | **Contradicts** — tab styling not interactive-looking on mobile |

---

## PART 3: CONFIDENCE VS. ACCURACY MATRIX

| Session | Task 1: Find Status | | | Task 2: Upload Documents | | | Task 3: Find Closed App | | |
|---------|----|----|-----|----|----|-----|----|----|-----|
| | Completion | Accuracy | Confidence | Completion | Accuracy | Confidence | Completion | Accuracy | Confidence |
| P01 | Yes | Yes | High ("5/5, everything right where I could see it") | Yes | Yes | High ("very simple and straightforward") | Yes | Partial* | High ("5/5") |
| P02 | Yes | Yes | High ("5/5, self-explanatory") | Yes | Yes | High ("seamless") | Partial** | Yes | Medium ("had to go to closed applications") |
| P03 | Yes | Partial*** | Medium ("why are there 4 steps?") | Yes | Yes | Medium ("uploaded but questioned timing") | Partial** | Yes | Low ("2.5/5 on knowing where to look") |
| P04 | Yes | Yes | High ("5/5, clear and simple") | Yes | Yes | High ("know exactly what to provide") | Yes | Yes | High ("5/5") |
| P06 | Yes | Yes | High ("5/5, page looks clean") | Yes | Yes | High ("works how I want") | Partial** | Partial | Medium ("4/4 confidence, but panicked") |
| P07 | Yes | Yes | Medium ("still needs some work") | Partial**** | Partial | Low ("not sure what happened") | No***** | Partial | Low ("2/5 on understanding") |
| P08 | Yes | Yes | High ("5/5") | Yes | Yes | High ("perfect, straight to the point") | Partial** | Partial | Medium ("4/4 but didn't see John denied") |
| P09 | Yes | Partial*** | Medium ("thought each box was per person") | Yes | Yes | High ("5/5, simple") | Partial** | Partial | Medium ("4/4 — add/remove dependent confusion") |
| P11 | Yes | Yes | High ("5/5") | Yes | Yes | High ("easy and self-explanatory") | No***** | Yes | Medium ("might take a second to figure out") |

*P01 was surprised by multi-beneficiary application but self-corrected
**Required moderator prompt to find "Track claims" link or closed tab
***Misunderstood section structure on MyVA
****Confused by upload interaction, uncertain if file attached
*****Could not find closed application without multiple moderator redirects

### MISMATCH FLAGS (High Confidence + Inaccurate Understanding) — CRITICAL

- **P09, Task 3**: Still believed "Request to add or remove a dependent" was the CHAMPVA application even after seeing the closed CHAMPVA card. Rated 5/5 on knowing where to look, but held an incorrect mental model of what the cards represented. **CRITICAL — user won't know to seek help because they believe they understand.**

### GAP FLAGS (Accurate but Low Confidence)

- **P03, Task 3**: Found the closed app with prompting and correctly identified the outcome, but rated 2.5/5 on knowing where to look. "It's frustrating... 4 pages down when my son is denied." **Content/feedback clarity problem — the path to information is too long.**
- **P07, Tasks 2 & 3**: Eventually understood outcomes but rated 2/5 for ease and understanding. Upload confusion and multi-redirect path eroded confidence despite eventually arriving at correct understanding. **Interaction pattern problem.**

### CLEAN FLAGS

- **P01, Tasks 1 & 2**: Accurate understanding, 5/5 confidence. File upload was "very simple and straightforward." MyVA card was "exactly what I need." The step accordion on Overview was immediately understood because participant had prior CHAMPVA experience.
- **P04, All Tasks**: Clean across the board. 5/5 on all Likert items. "Clear, simple to find what he was looking for."
- **P02, Tasks 1 & 2**: Accurate, confident. "Seamless and great place" for file upload.

### Summary Matrix

| | Task 1 | Task 2 | Task 3 |
|---|---|---|---|
| **Completed without assistance** | 9 of 9 | 7 of 9 | 1 of 9 |
| **Completed with minor prompting** | — | 2 of 9 | 4 of 9 |
| **Failed / required major redirect** | 0 of 9 | 0 of 9 | 4 of 9 |
| **Accurate understanding** | 7 of 9 | 9 of 9 | 4 of 9 |
| **High confidence** | 7 of 9 | 7 of 9 | 2 of 9 |

---

## PART 4: VETERAN KNOWLEDGE ASSET vs. LIABILITY ANALYSIS

### P01
- **[VETERAN KNOWLEDGE ASSET]**: Prior experience with disability claims made CST familiar — immediately navigated to "Closed" tab. Drew on experience of "having to dig through VA.gov" to appreciate the improvement.
- **[VETERAN KNOWLEDGE LIABILITY]**: Uses "claim" as a "catch-all for VA stuff" — may not distinguish CHAMPVA applications from disability claims in future. Prior experience of one application per person caused momentary confusion when seeing multi-beneficiary application.
- *Cohort 2 implication*: Non-Veteran family members won't have CST familiarity to fall back on. "Closed" tab discovery will likely be even harder.

### P02
- **[VETERAN KNOWLEDGE ASSET]**: Regular VA.gov user — navigated MyVA confidently, immediately clicked "Check status details."
- **[VETERAN KNOWLEDGE LIABILITY]**: Associated "Request to add or remove a dependent" with CHAMPVA because they connected the birth certificate request to dependent management — a leap only a Veteran familiar with dependent benefits would make.
- *Cohort 2 implication*: Family members may not have the dependent-management mental model, so may not confuse these cards — but also won't know to look in CST at all.

### P03
- **[VETERAN KNOWLEDGE LIABILITY]**: Expected CHAMPVA to be as simple as "flipping a switch" based on knowing their disability rating qualifies them. The 4-step process felt bureaucratic and excessive.
- *Cohort 2 implication*: Family members won't have the "I'm already 100% P&T, why is this complicated?" frustration but may have different frustration about not understanding the Veteran's rating relationship to eligibility.

### P04
- **[VETERAN KNOWLEDGE ASSET]**: Understood the claims process from disability experience — "makes sense now that I read the earlier paragraph." Step model mapped to prior experience.
- *Cohort 2 implication*: Family members won't have this claims-process schema to draw on.

### P06
- **[VETERAN KNOWLEDGE ASSET]**: Drew on disability compensation claims experience — "same process, just a different branch." Compensation tracker mental model mapped directly.
- **[VETERAN KNOWLEDGE LIABILITY]**: Expected items to STAY in place on dashboard — "We like things the way they are. If something isn't where we left it, who moved it and why?" This is a deeply Veteran-specific anxiety rooted in benefits being lifeline.
- *Cohort 2 implication*: The panic response to card disappearance may be **weaker** for family members who aren't accustomed to checking claims daily, but the navigational problem remains.

### P07
- **[VETERAN KNOWLEDGE ASSET]**: Familiar with secure messaging attachment flow — wanted similar "attach document" pattern.
- **[VETERAN KNOWLEDGE LIABILITY]**: Mixed up "Request to add or remove a dependent" with CHAMPVA because he associated dependent management with the CHAMPVA benefit — a connection rooted in understanding VA benefit structures.
- *Cohort 2 implication*: Family members likely won't confuse dependent management with CHAMPVA, but may struggle more with the overall CST mental model since they have no prior exposure.

### P08
- **[VETERAN KNOWLEDGE ASSET]**: Understood the claims process and accepted the step model. Appreciated partial decision transparency because of experience with multi-part disability claims.
- **[VETERAN KNOWLEDGE LIABILITY]**: Expected CHAMPVA files to include all previously submitted documents across all VA interactions — "the application should appear here." Over-expected data integration.
- *Cohort 2 implication*: Family members won't expect cross-system file visibility but may be confused by what "files" are available at all.

### P09
- **[VETERAN KNOWLEDGE ASSET]**: Recognized VA.gov patterns — "seems consistent with VA website." Easy navigation of MyVA.
- **[VETERAN KNOWLEDGE LIABILITY]**: Expected each card in "Claim and application status" to represent a separate CHAMPVA application (one per beneficiary) — drawing on the disability claims model where each claim is separate.
- *Cohort 2 implication*: Family members may not have the "one claim per condition" mental model and may better understand the one-application-multiple-beneficiaries model — **watch for opposite pattern**.

### P11
- **[VETERAN KNOWLEDGE ASSET]**: Regular claims checker — knew to look at status pages, comfortable with mobile VA.gov.
- **[VETERAN KNOWLEDGE LIABILITY]**: Strong belief that "claims" = disability ratings. CHAMPVA doesn't belong under claims. "CHAMPVA is an automatic benefit for disabled Veterans, thinks it would be in its own place."
- *Cohort 2 implication*: Family members will likely **not** have the claims = disability mental model. They may actually find the "Claim and application status" heading more neutral. **Watch for this specifically.**

---

## PART 5: RESEARCH QUESTION DIRECT MAPPING

### RQ1: Where do participants expect to find their CHAMPVA application? Can they navigate without assistance?

**Finding**: Participants looked first in the "Claim and application status" section of MyVA, and all 9 found the CHAMPVA card without assistance during Task 1. However, 3 of 9 (P07, P09, P11) expressed that they would NOT have expected CHAMPVA under "Claims" — they expected it under Forms or in its own section. The section heading "Claim and application status" is sufficient for findability but creates a conceptual mismatch for some Veterans.

**Supporting evidence**: P01 ("thrown off"), P07 ("I wouldn't expect to find the application here"), P11 ("applying for CHAMPVA wouldn't be a claim"), P09 (confused by section relationships).

**Confidence**: HIGH — 9 of 9 sessions provide evidence.

### RQ2: How do participants interpret CHAMPVA in the status tool? What do they expect from the front page?

**Finding**: Participants accepted CHAMPVA's presence in CST without difficulty once inside the tool. On the MyVA front page, they expected: (a) all active applications to be visible at a glance, (b) a clear indication of what step means in terms of *their* action needed, and (c) estimated timelines. The status card on MyVA was consistently praised. The "step X of 4" indicator was understood but felt uninformative without timelines.

**Supporting evidence**: P01 ("exactly what I need"), P06 ("tells them what they are looking at"), P03 ("what step is this? How do I do it?"), P09 ("the steps aren't that helpful").

**Confidence**: HIGH — consistent across 9 sessions.

### RQ3: How do participants understand per-beneficiary status?

**Finding**: Participants initially assumed one status per application, not per beneficiary. The partial decision screen was a "surprise" (P09) or "threw you for a loop" (P01) but was ultimately understood and appreciated. 7 of 9 participants understood the per-beneficiary breakdown after reviewing the full status page. 2 of 9 (P06, P07) remained somewhat confused about the relationship between beneficiaries.

**Supporting evidence**: P01 ("didn't realize they were part of the same application"), P03 ("I would split the screen"), P08 ("likes the partial decision"), P09 ("surprise to me").

**Confidence**: HIGH — 9 of 9 provide evidence.

### RQ4: How do participants interpret the steps? What mental model do they have of processing?

**Finding**: Before using the tool, participants expected a simple linear process (submit → review → decide). The 4-step model was initially confusing to 3 of 9 participants (P03, P06, P09) who questioned why Steps 2 and 3 were separate. After reading the Overview tab, most understood the distinction. Several participants (P06, P09) drew parallels to disability claims processing. 3 of 9 (P06, P09, P01) desired a "queue" or "UPS tracker" model showing real-time progress, not just step completion.

**Supporting evidence**: P03 ("why steps 2 and 3?"), P06 ("step 2, 3, 4 should happen on the same day"), P09 ("UPS tracker — even if a false sense of progress"), P01 (understood steps immediately from prior experience).

**Confidence**: HIGH — 8 of 9 sessions provide explicit evidence on step interpretation.

### RQ5: Can participants understand and complete the document upload when receiving an information request?

**Finding**: YES — 8 of 9 participants understood what was needed and completed the upload. The dedicated birth certificate page was praised (P09: "nice to have a customized page"). The "Action may be needed" yellow indicator was consistently effective at drawing attention. Two areas of friction: (a) "Review request" link text was questioned by P09 as confusing, and (b) P07 had significant confusion with the upload interaction itself (wanted an "attach" button, not drag-and-drop + "change file").

**Supporting evidence**: P01 ("straightforward"), P04 ("know exactly what he needs to provide"), P08 ("tells exactly what you need, straight to the point"), P07 (3-level confusion with upload), P09 ("review request is a little odd").

**Confidence**: HIGH — 9 of 9 sessions attempted this task.

### RQ6: When one beneficiary is approved and the other has pending request, how do participants understand next steps? Does Step 2 make sense?

**Finding**: The partial decision was understood by 7 of 9 participants after initial surprise. Step 2 remaining while one person is approved was understood by 6 of 9 — P01 said "Step 2 makes sense, they're still looking for more information for John Doe Jr." However, 3 of 9 (P03, P06, P09) wanted per-person step indicators rather than a shared step. P11 was confused by the alert text "after you submit more information" appearing after she had already submitted. P06 feared John Doe Jr. would "go back to the end of the line."

**Supporting evidence**: P01 ("makes sense"), P03 ("I would split the screen"), P06 ("feels they have to go back to step 1"), P09 ("might be helpful if Step 3 speaks to John Doe Jr."), P11 ("what more information do you need if I just submitted info").

**Confidence**: MEDIUM — partially conflicting signals on whether shared step indicator works.

---

## PART 6: CROSS-SESSION FREQUENCY — CALIBRATED COUNTS

### CONSISTENT (6+ of 9)

1. **Desire for email/text notifications**: 9 of 9 participants — CONSISTENT
2. **Desire for processing timelines**: 7 of 9 (P01, P02, P03, P06, P07, P08, P09) — CONSISTENT
3. **Difficulty finding closed CHAMPVA application (Task 3)**: 8 of 9 required prompting or assistance — CONSISTENT
4. **Desire for online access to decision/denial letters**: 6 of 9 (P01, P02, P04, P06, P07, P11) — CONSISTENT
5. **Positive reaction to file upload flow**: 7 of 9 completed without assistance and expressed satisfaction — CONSISTENT
6. **Positive first impression of MyVA CHAMPVA card**: 7 of 9 — CONSISTENT
7. **Would call VA if confused or denied**: 6 of 9 (P03, P06, P07, P08, P09, P11) — CONSISTENT

### MAJORITY (4-5 of 9)

8. **Confused "Request to add or remove a dependent" card with CHAMPVA**: 5 of 9 (P02, P06, P07, P08, P09) — MAJORITY
9. **Partial decision was initially surprising but ultimately understood**: 5 of 9 explicitly noted surprise (P01, P03, P06, P09, P11) — MAJORITY
10. **Questioned why Steps 2 and 3 are separate**: 4 of 9 (P03, P06, P08, P09) — MAJORITY
11. **Wanted to see all previously submitted documents in Files tab**: 4 of 9 (P04, P06, P08, P09) — MAJORITY

### NOTABLE MINORITY (2-3 of 9)

12. **CHAMPVA doesn't belong under "Claims"**: 3 of 9 (P07, P09, P11) — NOTABLE MINORITY
13. **Confusion with file upload interaction pattern**: 2 of 9 (P07, P08 had checkbox errors) — NOTABLE MINORITY
14. **Segmented tab (In progress/Closed/All) not recognized as interactive on mobile**: 2 of 9 (P11, P04 mentioned wanting default tab change) — NOTABLE MINORITY
15. **"Closed" label preference for "Completed"**: 2 of 9 (P06, P04) — NOTABLE MINORITY
16. **Clicked "Action needed" tag expecting it to be a button**: 2 of 9 (P03, P08) — NOTABLE MINORITY

### OUTLIER (1 of 9)

17. **P06: Wanted queue position number** ("where am I, 1043 out of 6000") — OUTLIER; worth noting because it reveals deep anxiety about applications being lost, which may manifest differently in Cohort 2.
18. **P03: Rated ease of use 3/5** — OUTLIER; only participant below 4/5. Driven by tablet/zoom issues compounding with content frustrations. Worth noting because accessibility-adjacent issues may surface more with older or less tech-savvy family members.
19. **P07: Rated ease of use 2/5** — OUTLIER; lowest rating. Driven by upload confusion and Task 3 failure. Signals that when multiple friction points compound, the experience breaks down significantly.

---

## PART 7: INSIGHT SYNTHESIS — THE "SO WHAT" LAYER

### Finding 1: Card Disappearance from MyVA

**OBSERVATION**: 8 of 9 participants could not find their completed CHAMPVA application without assistance because the card disappeared from MyVA when the application was decided.
**BECAUSE**: Veterans expect items to remain where they last saw them. Moving a card to a different location (Closed tab in CST) without leaving any trace on MyVA contradicts the "things stay where I put them" mental model — especially for benefits-dependent Veterans who check frequently.
**SO WHAT**: Add a "Recently decided" or "Recently completed" section to MyVA that persists for 30-60 days after a decision, OR keep the card visible with a "Decided" status tag, OR add an alert/notification on MyVA pointing users to the closed application.
**URGENCY**: BLOCKER — 8 of 9 failure rate on this task will generate support calls in production.

### Finding 2: "Request to Add or Remove a Dependent" Confusion

**OBSERVATION**: 5 of 9 participants mistook the "Request to add or remove a dependent" card for their CHAMPVA application during Task 3.
**BECAUSE**: Veterans associate dependent management with CHAMPVA because CHAMPVA *is* a dependent benefit. When the CHAMPVA card disappears and a dependent-related card appears, the mental model connects them. The birth certificate request reinforces this connection.
**SO WHAT**: This is partially a test artifact (the dependent card would not necessarily appear alongside a real CHAMPVA application). However, consider whether the CST card labeling strategy can more clearly differentiate application types — potentially with benefit-type badges or icons on cards.
**URGENCY**: IMPORTANT — may be partially mitigated in production if the dependent card doesn't coincide, but the labeling problem persists for any non-disability card in CST.

### Finding 3: File Upload Success

**OBSERVATION**: 7 of 9 participants completed document upload without assistance, and the dedicated birth certificate page was praised for its specificity.
**BECAUSE**: The system pre-selecting the beneficiary and document type removed decision-making burden. The "Action may be needed" yellow indicator reliably drew attention.
**SO WHAT**: Retain the dedicated information-request page pattern. It outperformed the general Files tab upload for clarity.
**URGENCY**: CLEAN — no changes needed to core upload flow.

### Finding 4: "Review Request" Link Text

**OBSERVATION**: P09 said "review request" is odd phrasing, expecting something like "Submit requested document."
**BECAUSE**: "Review" implies reading something already done, not taking action. The user's mental model at this point is action-oriented — they want to *do* something, not *review* something.
**SO WHAT**: Change "Review request" link text to action-oriented language: "Submit requested document" or "Upload [document type]".
**URGENCY**: IMPORTANT — affects first interaction with the information request flow.

### Finding 5: Partial Decision Alert Text

**OBSERVATION**: P11 was confused by the partial decision alert saying "after you submit more information" after she had already submitted the requested document.
**BECAUSE**: The alert is static and doesn't update to reflect the user's completed action. After submitting, "after you submit more information" implies additional action is still needed.
**SO WHAT**: Make the partial decision alert dynamic: after all information requests are fulfilled, change text to reflect that the application is under review, not awaiting more submissions.
**URGENCY**: BLOCKER — will cause confusion and potential support calls in production when users think they still need to do something after completing all requests.

### Finding 6: No Processing Timelines

**OBSERVATION**: 7 of 9 participants asked for estimated processing timelines at some point during the session.
**BECAUSE**: The step model shows *where* you are but not *how long* each step takes. Without timelines, users default to checking daily and/or calling for updates.
**SO WHAT**: Add estimated processing time to each step in the Overview tab (e.g., "This step typically takes 2-4 weeks"). Even approximate timelines reduce anxiety and call center volume.
**URGENCY**: IMPORTANT — primary driver of anticipated call center contact.

### Finding 7: No Online Access to Denial Reason

**OBSERVATION**: 6 of 9 participants wanted to see the reason for John Doe Jr.'s ineligibility online rather than waiting for a letter.
**BECAUSE**: The letter may take 2-3 weeks (or longer for rural Veterans), during which the user cannot take action. This creates anxiety and drives phone calls.
**SO WHAT**: If technically feasible, surface the denial reason or link to the decision letter in the status tool. If not feasible for MVP, add content explaining when the letter will arrive and what it will contain.
**URGENCY**: IMPORTANT — the most frequently cited reason participants would call the VA. WATCH IN COHORT 2 — family members receiving denial may react more emotionally.

### Finding 8: Segmented Tab Not Interactive-Looking on Mobile

**OBSERVATION**: 2 of 9 mobile participants (P11, and partially P04) didn't realize the In progress/Closed/All segmented tab was interactive.
**BECAUSE**: The tab styling doesn't have sufficient affordance on mobile — P11 specifically said tabs need "a black outline around each one to make it look like a button."
**SO WHAT**: Increase visual affordance of segmented tabs on mobile — add borders, increase contrast, or use a design that more clearly communicates interactivity.
**URGENCY**: BLOCKER for mobile users — this is the only path to finding closed applications, and Task 3 failure is already near-universal.

### Finding 9: Partial Decision Initially Surprising but Accepted

**OBSERVATION**: 5 of 9 participants were initially surprised by the partial decision but ultimately understood and appreciated it.
**BECAUSE**: Most Veterans' mental model is all-or-nothing decisions. Partial decisions are a new concept that contradicts this but is logical once explained.
**SO WHAT**: The current design works for conveying partial decisions. Consider adding a brief explainer ("Since your application included multiple beneficiaries, decisions may be made at different times") at the top of the partial decision view.
**URGENCY**: NICE TO HAVE — self-correcting for most Veterans. WATCH IN COHORT 2 — family members may find this more confusing without claims experience.

### Finding 10: "Closed" vs. "Completed" Terminology

**OBSERVATION**: 2 of 9 (P06, P04) questioned whether "Closed" was negative. P06: "Is closed a bad thing?"
**BECAUSE**: "Closed" has ambiguous connotations — could mean denied, canceled, or completed. "Completed" or "Decided" is more neutral.
**SO WHAT**: Consider changing "Closed" tab label to "Completed" or "Decided." This is a CST-wide consideration, not CHAMPVA-specific.
**URGENCY**: NICE TO HAVE — only 2 of 9 flagged this explicitly, but it compounds the Task 3 findability problem.

---

## PART 8: NUANCE AND OUTLIER LOG

### Surprising/Contradictory Moments

1. **P06 — Queue position desire**: Wanted to see "1043 / 6000" — a literal queue number. This reveals a mental model of CHAMPVA processing as a FIFO queue, and an anxiety that applications can be "lost in the sauce." No other participant requested this specific feature, but the underlying anxiety about applications being lost was present in P06, P03, and P08.

2. **P07 — Lowest Likert ratings (2/5 ease, 2/5 confidence)**: The only participant who struggled significantly with the upload interaction. His desire for a traditional "attach file" button (like secure messaging) vs. the drag-and-drop pattern suggests the upload component may not match all users' mental models. This was compounded by the "change file" link being the only visible affordance after initial file selection.

3. **P03 — Tried to click "Action needed" tag**: Treated the tag as a button. Only P03 and P08 did this. Worth noting because it reveals that yellow/highlighted UI elements create an expectation of interactivity even when they are informational.

4. **P08 — Wants to rename uploaded files**: Only participant who wanted to rename files before submission. This suggests a document management mental model (like a filing cabinet) rather than a simple upload interaction.

5. **P09 — Persistent mental model error**: Even after seeing the closed CHAMPVA card in the Closed tab, P09 still believed the "Request to add or remove a dependent" card represented part of the CHAMPVA application. This is the most concerning single-participant moment because it represents a high-confidence incorrect understanding that the user would carry into production without seeking help.

### Moments Revealing CHAMPVA Program Issues

6. **P06 — "They shouldn't [need the birth certificate] but they do"**: Frustrated that VA already has dependent information from disability claims but requires re-submission for CHAMPVA. P06 and P07 both noted that dependent verification documents were already provided for disability benefits. This is a CHAMPVA program issue, not a UI issue, but it affects perceived legitimacy of information requests.

7. **P03 — "The weirdest thing that the government doesn't consider email secure"**: Deep frustration with mail/fax requirement. P03, P06, and P07 all expressed strong negative reactions to paper-based communication. This affects trust in the digital tool when it still references mailing letters.

8. **P11 — School certification workaround**: Her real CHAMPVA blocker is that her daughter needs to get a school enrollment certification from the registrar's office, and her daughter is "too busy." This reveals a real-world process gap: the Veteran cannot complete the application on behalf of an adult dependent who must take their own action.

### Workaround/Coping Behaviors

9. **P01 — "Would highlight call center number with mouse"**: Immediately noted the phone number as a fallback. Multiple participants (P06, P07, P08, P11) identified "I would call" as their default coping mechanism for any confusion.

10. **P03 — "I always start from the bottom in case I miss something"**: Unique reading pattern that may be more common with screen magnification users.

### Notably Strong Emotional Responses

11. **P06 — Near-panic when card disappeared**: "Oh hell did they lose it, or didn't they cancel it, why isn't there... Don't tell me I have to start over, I've been having to do this for months." This was the strongest emotional response across all sessions. P06 explicitly connected this to their prior experience of a lost CHAMPVA application.

12. **P03 — Anger about denial being buried**: "An application for CHAMPVA is a big deal. Everyone wants their medical care. Why are they putting it 4 pages down when my son is denied?" This was a visceral, values-driven reaction — not just usability frustration.

13. **P07 — "I ain't here for claim letters, travel claims. I just want Junior enrolled in health care."**: Frustration with CST showing all claim types when user has a specific, urgent goal.

---

## PART 9: COHORT 2 PREPARATION — WATCH LIST

### 1. MyVA Section Mental Model
- **What to watch for**: Do family members even look at "Claim and application status" or do they go elsewhere first?
- **Why it matters**: 3 of 9 Veterans said CHAMPVA doesn't belong under "Claims." Family members have no claims history and may not associate CHAMPVA with this section at all.
- **Probe to add**: "Before you click anything, where on this page would you expect to find information about your CHAMPVA application? Why?"
- **Expected pattern**: DIFFERENT — family members may look under Forms first, or not know where to look at all.

### 2. Card Disappearance Anxiety
- **What to watch for**: How do family members react when the CHAMPVA card isn't on MyVA in Task 3? Do they panic like P06 or accept it?
- **Why it matters**: Veterans' panic was tied to benefits being a "lifeline." Family members may have different emotional stakes but the same navigational problem.
- **Probe to add**: "What do you think happened to your CHAMPVA application? Where would you look first?"
- **Expected pattern**: WEAKER emotionally but STRONGER navigational difficulty — without CST familiarity, family members may not know the "Track claims" link or "Closed" tab exist.

### 3. CST Concept Familiarity
- **What to watch for**: Do family members understand what the "Claims Status Tool" is? Do they have any prior mental model for it?
- **Why it matters**: Veterans drew on disability claims experience to navigate CST. Family members won't have this foundation.
- **Probe to add**: "Have you ever used VA.gov to check on a claim or application before? What did that look like?"
- **Expected pattern**: STRONGER difficulty — no prior CST exposure means the entire flow from MyVA → CST is novel.

### 4. Multi-Beneficiary Application Understanding (continued)
- **What to watch for**: Do family members understand they were included in an application filed by the Veteran, and that the application covers multiple people? Do they expect to see their own status separately?
- **Why it matters**: Veterans understood the multi-beneficiary model because they filled out the form. Family members are the *subjects* of the application, not the *filers*. They may expect a personal, individual view rather than a shared application view.
- **Probe to add**: "When you look at this application, who do you think filed it? Do you expect to see just your information, or information about other family members too?"
- **Expected pattern**: DIFFERENT — family members may be confused by seeing other beneficiaries' statuses alongside their own. They may not understand why the Veteran's name appears as the applicant.

### 5. Partial Decision Comprehension
- **What to watch for**: When one beneficiary is approved and another has a pending information request, do family members understand why the application isn't "done"? Do they understand the relationship between beneficiaries?
- **Why it matters**: 5 of 9 Veterans were initially surprised by partial decisions but self-corrected using their claims experience. Family members lack this correction mechanism.
- **Probe to add**: "What does it mean that the application is on Step 2 but Jane is already enrolled? Does that make sense to you?"
- **Expected pattern**: STRONGER confusion — without the claims mental model, partial decisions may be more disorienting. If the family member *is* the person whose status is still pending, the emotional reaction to seeing someone else already approved may be more intense.

### 6. Upload Interaction on Mobile
- **What to watch for**: Do family members encounter the same upload confusion as P07 (drag-and-drop vs. attach button)? Are mobile family members more or less comfortable with file upload?
- **Why it matters**: P07's confusion was the most severe across Cohort 1. Family members (especially spouses) may skew older or less tech-savvy.
- **Probe to add**: "Talk me through what you're expecting to happen when you need to upload a document. What would that look like?"
- **Expected pattern**: Could be STRONGER if family members are less familiar with VA.gov's upload patterns, or WEAKER if they're more familiar with consumer apps that use similar upload patterns.

### 7. "Review Request" Language
- **What to watch for**: Do family members interpret "Review request" as action-oriented or passive? Do they click it confidently?
- **Why it matters**: P09 flagged this as odd. Family members without VA vocabulary may find it even more confusing.
- **Probe to add**: "What do you think will happen when you click this link? What would you call this action?"
- **Expected pattern**: STRONGER confusion — "request" and "review" are VA jargon that may not map to family members' vocabulary.

### 8. Denial/Ineligibility Emotional Response
- **What to watch for**: How do family members react to seeing "Not eligible" for themselves or their child? Is the emotional response more intense than Veterans'?
- **Why it matters**: 6 of 9 Veterans wanted to see the denial reason and would call. Family members who are personally denied may have a more visceral reaction — this is *their* healthcare, not an application they filed on someone else's behalf.
- **Probe to add**: "How does this make you feel? What would you do next? Is there enough information here for you to understand what happened?"
- **Expected pattern**: STRONGER emotional reaction — family members are the direct recipients of the denial, not intermediaries. Watch for feelings of helplessness if they don't understand how to appeal or what went wrong.

### 9. "Track Claims, Decision Reviews, and Applications" Link
- **What to watch for**: Do family members notice this link on MyVA? Do they understand what it means? Do they click it?
- **Why it matters**: This link is the critical bridge between MyVA and CST, and it was missed by multiple Veterans (P08, P11). The phrase "claims" and "decision reviews" are VA-specific concepts that family members may not recognize.
- **Probe to add**: "Do you see anything else on this page that might help you find your application? What do you think this link would show you?"
- **Expected pattern**: STRONGER difficulty — the link text uses VA vocabulary that family members may not identify with. They may not associate their CHAMPVA application with "claims."

### 10. Authenticated Experience Expectations
- **What to watch for**: Do family members expect to log in with their own account or the Veteran's? What do they expect to see when they log in?
- **Why it matters**: This is the first authenticated CHAMPVA experience for family members on VA.gov. Their mental model of "my account" vs. "the Veteran's account" may fundamentally affect what they expect to find.
- **Probe to add**: "If you wanted to check on your CHAMPVA application, whose VA.gov account would you log into? What would you expect to see on the homepage?"
- **Expected pattern**: DIFFERENT — this is a fundamentally different interaction paradigm for family members who may not have their own VA.gov accounts or may not understand why they'd log into the Veteran's account.

---

## 3. PRIORITIZED RECOMMENDATION LIST

### BLOCKER — Must address before production

| # | What to Change | Where | Driving Insight |
|---|---------------|-------|----------------|
| B1 | **Surface recently decided applications on MyVA** — add a "Recently decided" card, a persistent notification, or keep the card visible with a "Decided" tag for 30-60 days | MyVA homepage, "Claim and application status" section | 8 of 9 participants failed Task 3 because the card disappeared. This will generate significant call center volume. |
| B2 | **Make partial decision alert text dynamic** — after user completes all information requests, change "after you submit more information" to reflect that the application is under review | CHAMPVA status page, partial decision alert component | P11 was confused by being told to "submit more information" after already submitting. Static alert text creates false action requirements. |
| B3 | **Increase visual affordance of segmented tabs on mobile** — add borders, increase contrast, ensure tabs look interactive | CST homepage, In progress/Closed/All filter | P11 didn't know tabs were clickable. This is the ONLY path to closed applications. Combined with B1, this creates a complete dead end on mobile. |

### IMPORTANT — Should address before launch

| # | What to Change | Where | Driving Insight |
|---|---------------|-------|----------------|
| I1 | **Change "Review request" to action-oriented language** — e.g., "Upload requested document" or "Submit [document name]" | CHAMPVA status page, information request link | P09 flagged "review request" as passive/confusing. Action-oriented labeling matches user intent at this point. |
| I2 | **Add estimated processing timelines to each step** — even approximate ranges (e.g., "typically 2-4 weeks") | Overview tab, step accordions | 7 of 9 participants requested timelines. Absence drives daily checking and call center contacts. |
| I3 | **Surface denial reason or decision letter online** — link to PDF or display reason text directly in the tool | Closed CHAMPVA status page, per-beneficiary status section | 6 of 9 wanted to know *why* immediately. "Sent a letter that you may or may not receive" drives calls and anxiety. |
| I4 | **Differentiate the "Request to add or remove a dependent" card more clearly from CHAMPVA** — consider benefit-type badges/icons on CST cards | CST homepage cards, MyVA cards | 5 of 9 confused this card with their CHAMPVA application. Even if partially a test artifact, card differentiation benefits all CST users. |
| I5 | **Add a brief explainer for partial decisions** — "Since your application included multiple beneficiaries, decisions may be made at different times" | CHAMPVA status page, above the partial decision section | 5 of 9 were surprised by partial decisions. A single sentence prevents the "loop" reaction. |
| I6 | **Consider "Completed" or "Decided" instead of "Closed"** for the segmented tab label | CST homepage, segmented tab | 2 of 9 questioned whether "Closed" was negative. This is a minor content change with outsize clarity benefit when combined with B1/B3. |

### NICE TO HAVE — Can be roadmapped

| # | What to Change | Where | Driving Insight |
|---|---------------|-------|----------------|
| N1 | **Add per-beneficiary step indicators** rather than a single shared step for the whole application | CHAMPVA status page | 3 of 9 (P03, P06, P09) wanted per-person step tracking. Would clarify partial decision states. |
| N2 | **Show previously submitted documents in Files tab** — list all files received with the application | Files tab | 4 of 9 expected to see everything they submitted, not just newly uploaded files. |
| N3 | **Support multiple file upload** in a single submission | Files tab, upload component | P04 specifically requested this. Minor efficiency improvement. |
| N4 | **Make "Action needed" tag interactive** or add a visual cue that it's informational, not a button | MyVA card, action tag | 2 of 9 tried to click it. Minor affordance improvement. |
| N5 | **Add file rename capability before submission** | Files tab, upload component | P08 outlier request but aligns with document management best practices. |

### WATCH IN COHORT 2

| # | What to Watch | Where | Why |
|---|--------------|-------|-----|
| W1 | **MyVA section mental model for non-Veterans** — do they look under "Claims" at all? | MyVA homepage | Veterans had mixed reactions; family members may not associate CHAMPVA with "claims" |
| W2 | **CST familiarity** — can family members navigate CST without any prior exposure? | Full CST flow | Every Veteran drew on disability claims experience to orient themselves |
| W3 | **Partial decision emotional response** — is it more intense when the family member *is* the pending/denied beneficiary? | CHAMPVA status page | Veterans reacted as intermediaries; family members will react as direct subjects |
| W4 | **Account/authentication model** — do family members expect their own login or to use the Veteran's? | Pre-task, login | Fundamental question about who sees what in an authenticated experience |
| W5 | **Denial reaction intensity** — "Not eligible" for yourself vs. for your dependent | Closed application status page | 6 of 9 Veterans would call; family members may react more strongly |

---

## 4. OPEN QUESTIONS

### What These 9 Sessions Cannot Answer

1. **Will the card disappearance problem generate call center contacts at scale?** — The 8/9 failure rate strongly suggests yes, but we don't have production analytics to quantify the impact.
2. **Is the "Request to add or remove a dependent" confusion purely a test artifact?** — In production, this card may not appear alongside a CHAMPVA application. We cannot determine the real-world co-occurrence rate from prototype testing.
3. **How will real notifications (email, text) change the Task 3 experience?** — Every participant wanted notifications. If notifications alert users to decisions, the "find the closed app" problem may be significantly mitigated.
4. **What happens with 3+ beneficiaries?** — P07 explicitly warned "this will get more confusing when you start dealing with more dependents." All sessions tested with exactly 2 beneficiaries.
5. **Can decision letters technically be surfaced in the tool?** — 6 of 9 wanted this, but feasibility is a technical/policy question outside research scope.

### What Cohort 2 Is Specifically Positioned to Answer

1. **Do non-Veterans find the CHAMPVA application on MyVA at all** — without the CST mental model, the entire entry point may fail.
2. **How do family members understand being a *subject* of an application they didn't file** — the multi-beneficiary model may break down when the user didn't fill out the form.
3. **Is the authenticated experience model clear** — do family members know to log in, whose account to use, and what they'll find?
4. **How do family members emotionally process denial** — when it's their own healthcare at stake rather than a dependent's?
5. **Does the "claims" vocabulary create a barrier** — or do non-Veterans interpret "Claim and application status" more neutrally than Veterans who associate it exclusively with disability?

### Assumptions Still Needing Validation

1. **The MyVA card is the primary entry point for CHAMPVA status** — validated for Veterans, but not yet for family members who may use different paths (bookmarks, search, direct links from emails).
2. **The 4-step model is the right level of granularity** — 3 of 9 questioned it, but most accepted it. Cohort 2 will test whether it works without claims-process background knowledge.
3. **One application card for multiple beneficiaries is the right abstraction** — accepted by Veterans who filed the form, but may not match family members' expectation of seeing only their own status.
