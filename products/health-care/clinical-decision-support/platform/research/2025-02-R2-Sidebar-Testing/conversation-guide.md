---
title: "Conversation Guide for CDS Platform Team, Sidebar Navigation R2 Usability Testing, Q1 2025"
author: "Liz"
date_created: "2025-02-17"
last_modified: "2025-03-07"
tags:
  - "clinical-decision-support"
  - "CDS-console"
  - "sidebar-navigation"
  - "usability-testing"
  - "R2"
  - "MedCalc"
  - "MWW"
description: "Moderator guide for Round 2 usability testing of the CDS Console Sidebar Navigation, covering scenario-based flows with Prototype A and B."
---
# Conversation Guide for CDS Console – Sidebar Navigation R2 Usability Testing

## Moderator logistics 📋✅
### 2-3 days before the session

`Complete the following project-specific setup tasks before each session:`

- [ ] Confirm prototype links are live and working (Prototype A and Prototype B)
- [ ] Confirm participant details, role, and which segment they belong to (MWW, MedCalc, Task Manager)
- [ ] Review session scenario prompts and confirm which flows apply to this participant
- [ ] Confirm notetaker and observer attendance and share the Notetaker & Silent Observer Guide
- [ ] Set up the Mural notetaking board for the session
- [ ] Confirm Teams recording is enabled

### Day of the session

> [!TIP]
> - Create a DM group in Slack for real-time feedback from observers.
> - Mute your Slack notifications.
> - Send out the Notetaker and Observer Guide.
> - Have both prototype links ready to paste in Teams chat.

**Prototype Links:**
- [Prototype A](https://www.figma.com/proto/iRqkr3vqVQzY2dOMAmPMs7/WIP-CDS-Console-%22Sidebar%22-Header?page-id=3784%3A11142&node-id=4078-8923&viewport=732%2C-2193%2C0.15&t=3zn3uL0XoaD0zQj0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4078%3A8923&show-proto-sidebar=1)
- [Prototype B](https://www.figma.com/proto/iRqkr3vqVQzY2dOMAmPMs7/WIP-CDS-Console-%22Sidebar%22-Header?page-id=3784%3A11142&node-id=4089-12922&viewport=732%2C-2193%2C0.15&t=3zn3uL0XoaD0zQj0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4089%3A12922&show-proto-sidebar=1)

### Notetaker and Silent Observer Guide
- Be a silent observer. If you have a question for the participant, ask the facilitator via a Slack DM and they'll accommodate it if appropriate.
- If you can notetake, please do! It helps researchers a lot to see what you captured. There's a note taking template in the Mural with screenshots. If you find it easier to write your notes or use a word doc, that's fine too! If you take running notes, please be sure to make a clear reference to the screen in question or the scenario being mentioned.
- Write what you hear and see as much as possible. Try to capture what they said without adding your own interpretation. E.g. "I'm not sure about this checkbox" does not equal "Doesn't understand checkbox."
- Share your notes back with the facilitator via Slack if taken outside of the Mural. Do not include ANY PII in this chat.
- For design testing, try to write down things that aren't said — for instance, when someone misunderstood some copy or clicked the wrong element. It helps us figure out what needs to be revisited.
- Share a few raw impressions with the facilitator via Slack or in the notetaking document after the session, if possible. It helps with synthesis!

**Protecting PII**
- Do not include the participant's name or other identifiers in your notes. Instead, use a general role description, such as "primary care provider."
- In the event a participant needs to share their screen with a real patient visible, stop the recording before they share. **DO NOT RECORD THE PARTICIPANT'S SCREEN IF THEY ARE SHOWING A REAL PATIENT.**


### Starting the session

> [!TIP]
> - In the Attendees section, make sure everyone except the participant is on mute.
> - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked.
> - Check your screensharing setup and share permissions for participants.
> - When the participant is ready, begin the session with the following intro.

---

# Intro - 3 minutes

Thanks for joining us today! My name is **[NAME]** and **[NOTETAKER NAME]** is/are here to help with note taking and observing the session. Is that OK?

> [!TIP]
> - Ask the notetaker and observers to **give a brief, camera-on introduction** — first name and position. This humanizes the observation for the participant.
> - Once complete, ask the notetaker and observers to **turn off their cameras** for the remainder of the session to save bandwidth.

Today, we'll be showing you a visual prototype of the CDS Console sidebar navigation and asking for your feedback on navigation and usability. We held a previous round of usability sessions with clinicians back in December 2024 and will be starting implementation of a sidebar navigation in a few weeks based on those learnings.

**Today, our goals are to:**
- Identify enhancement opportunities for future prioritization.
- Use scenario-based testing with a clickable prototype.

Before we start, a few things to go over:

- **This session should take about 60 minutes.** I may occasionally prompt you to keep us on track.

- **There are no right or wrong answers.** We are not testing your knowledge or abilities — we want to hear your honest opinions. I won't be offended by anything you share.

- **Your participation is completely voluntary.** You can stop at any time or skip any question. Your responses will remain confidential and your anonymity protected.

- **You'll be interacting with a prototype today.** It closely matches the real application, but some things may not work as expected. You may see placeholder information — that's OK.

- **Confidentiality & Recording:** Feedback will be anonymized and shared within the CDS Collaborative to refine the experience. We'd like to connect insights to roles when relevant, but will make sure no specific title could be identified. Please notify us if you anticipate that PHI may be shown at any time, and we will pause the recording. At the point in the session when we ask you to share your screen, please reference a test patient if possible, to avoid sharing any PHI.

- **Are you comfortable if I record my screen and audio as we talk today?** We use the recordings to confirm we've captured your opinions accurately. After analysis, recordings are destroyed, and none of your comments will be attributed to you directly. We report findings in groups (e.g., 5 out of 10 participants said this) or use a general role like "primary care physician" or a participant ID like P7.

   - **Knowing that, are you comfortable if I record my screen and audio as we talk today?**

   <mark>**[Record answer here]**</mark>

   - If yes: **Once I start recording, I am going to confirm that you are OK with me recording once more.**

➡️ **Start recording.**

> [!TIP]
> After you start the recording, click the Show Captions (CC) button to enable transcription.

- **I have started recording.** I'd like to confirm: Are you comfortable if I record my screen and audio as we talk today?

<mark>**[Record answer here]**</mark>

---

# Warm-up Questions - 5 minutes

Before we look at the prototype, I'd like to learn a little bit about you.

> [!TIP]
> If this is a returning participant, consider skipping or modifying intro questions, or following up on something learned in the prior session.

1. Can you tell me about your current role at the VA and how long you've been there?
2. How often have you been using the CDS Console (MWW, MedCalc, or other tools)?
3. Can you briefly walk me through what your experience was like the last time you used one of these tools?
4. What, if anything, was challenging about that experience? Why?
5. What, if anything, was straightforward? Why?

---

## Prototype Intro - Participant Controls

Next, we're going to look at a prototype of the CDS Console sidebar navigation. A few things to keep in mind:

- I'll describe a scenario and then give you tasks to complete using the prototype.
- This is a prototype, not the real application. It closely matches the real application, but some things may not work as expected. Placeholder information may appear — that's OK.
- I'm going to send you a link in the Teams chat and ask you to open it and share your screen. Does that sound OK? *(If uncomfortable: I can share my screen and you can tell me where to click.)*
- Before you share your screen, please close any windows that contain patient information so we don't accidentally record any PHI.
- Can you share your screen now? In MS Teams, click the green "Share screen" button in the top bar, then select the window with the prototype open.
- As you go through the prototype, **please think aloud** — say whatever comes to mind. What's grabbing your attention, what questions you have, your general impressions.
- We are testing the designs, not you. If anything feels confusing or uncomfortable, please let me know.
- Feel free to ask questions as we go — I may not answer right away since we're interested in how you'd navigate without help, but I'll answer at the end.
- And please be as honest as possible — it won't hurt our feelings!

`[Describe clinical scenario, paste prototype link in chat, and confirm participant has it open and is sharing screen]`

---

# Flow 1 - 5 minutes
## User starts in MWW, navigates to MedCalc

**Prototype: A**

### Scenario 1: Finding a Medical Calculator via Sidebar

📌 *User starts in My Workweek (MWW) and needs to find a calculator for a patient's condition.*
📌 *Milestones: MWW – Patient Detail Card → Console → MedCalc – Patient info*

**Scenario Prompt:**
Imagine it's Friday, April 24th. You're reviewing patient information in My Workweek for an appointment in 30 minutes with **your patient, Sheba Harris**. You click on the appointment details (in orange). You see that your patient has Liver Fibrosis, and you want to assess their risk using the Fib-4 calculator. Walk me through how you would find a Fib-4 calculator.

**Follow-up Questions:**
- How would you find a medical calculator related to a patient's key condition — Liver Fibrosis?
- Would you expect to launch a calculator directly from My Workweek? Why or why not?

---

### Scenario 2: Navigating to MedCalc & Using the Calculator

📌 *User navigates from the Console to MedCalc and interprets results.*
📌 *Milestones: MedCalc – Patient info → MedCalc – Calc detail → TM – Home → TM – Task Drawer*

**Scenario Prompt:**
Now navigate to the Console and **launch MedCalc**. [Show MedCalc – patient info view.] You see that your patient has a Fib-4 score of 1.9. Where would you go for more information?

**Follow-up Questions:**
- How intuitive was it to find and launch MedCalc?
- What do you think of the patient information displayed in MedCalc?
- Are there points in your workflow where you'd expect MedCalc to appear more prominently?

**Gut Check:**
- How easy or difficult was this navigation process?
- Did any steps feel unnecessary or unclear?
- Did this flow match how you typically access tools?

> [!NOTE]
> ### Things to watch for:
> - Does the participant attempt to launch MedCalc from MWW directly?
> - Does the participant use the sidebar or another navigation path to find MedCalc?
> - Does the participant notice or engage with patient demographic information across views?
> - Any moments of hesitation or confusion at navigation transitions?

---

# Flow 2 - 7 minutes
## Patient Details Expectations, Voogle, STORM

**Prototype: B**

📌 Focus on how patient details support navigation; minimum patient identifiers.

**Scenario Prompt: Minimum Patient Information for Identification**

📌 As you interact with this prototype, we want to understand your expectations for patient identification within the Console and across CDS tools. I'll be sharing a new link — please pull it up in your browser and share your screen. I'll be asking questions about patient identification.

- What is the minimum patient information you expect to see at all times to confidently identify the patient? (e.g., name, date of birth, SSN, photo)
- Are there moments in your workflow when having patient details visible becomes **more important**?
- Was patient information easy to reference as you moved between tools? Why or why not?
- At what points in your workflow would you expect patient details to be most visible?

**Voogle & STORM:**
- Imagine you want to find mentions of a condition in historical notes on a patient. How would you expect to be able to do this?
- [Voogle] What are your impressions of the launch behavior?
- Imagine you now want to prescribe an opioid for this patient, but before doing so you need to check any potential mental health risks. How would you expect to be able to do this?
- [STORM] What are your impressions of the application's navigation?

**Task: Changing the Patient Context**

📌 Please select a different patient within the Console or application.

- After selecting a new patient, what information would you expect to appear immediately to confirm you're viewing the correct patient? (e.g., name, SSN, DOB, photo)
- How should changing the patient context affect other areas of the Console or CDS tools?
- Are there specific details that should automatically update or stay visible?
- If you were verifying patient identity, which key details would be essential to confirm the correct patient? Would any additional information help?

> [!NOTE]
> ### Things to watch for:
> - What patient identifiers does the participant call out unprompted?
> - Does the participant express concern about patient safety when switching context?
> - Does the participant notice how patient info persists (or doesn't) across tools?
> - Any confusion about Voogle or STORM launch behavior?

---

#### Bridge

Now we'll cover another scenario with an alternative entry point, and ask you a series of questions about the prototype, ease of navigation, and what could be improved. Please go back to the **first prototype link** you have pulled up in your browser.

---

# Flow 3 - 5 minutes
## User starts in MedCalc, gets a calculation, then creates a task

**Prototype: A**

### Scenario 1: Reviewing Patient Info & Using MedCalc

📌 *User is in MedCalc reviewing a patient's condition and interpreting results.*
📌 *Milestones: MedCalc – Patient info → MedCalc – Calc detail → TM – Home → TM – Task Drawer*

**Scenario Prompt:**
Imagine you're in MedCalc reviewing a patient's condition — Liver Fibrosis — and calculating their risk score. Based on these Fib-4 results, what would be your next steps?

**Follow-up Questions:**
- How intuitive was it to find and launch MedCalc?
- Did the patient details displayed here support your workflow?
- Did anything about navigating within MedCalc feel unexpected or unclear?

---

### Scenario 2: Tracking a Follow-Up Task from MedCalc

📌 *User needs to create a follow-up task based on calculator results.*

**Scenario Prompt:**
After reviewing the calculation, you need to track a follow-up action (e.g., ordering medication, scheduling labs, setting a reminder). Walk me through how you would add a task or follow-up action.

**Follow-up Questions:**
- Does this process match how you currently track follow-ups?

**Gut Check:**
- How easy or difficult was this navigation process?
- Did any steps feel unnecessary or unclear?
- Did this flow align with how you manage clinical tasks?

> [!NOTE]
> ### Things to watch for:
> - Does the participant locate the Task Manager via the sidebar or another path?
> - Does the sidebar entry point to MedCalc feel natural?
> - Does the participant express confusion about how to initiate a task from a calculator result?
> - Any friction in transitioning from MedCalc to Task Manager?

---

# Flow 4 - 3 minutes
## Feedback & Account

**Prototype: A or B**

**Sidebar Footer (Account and Feedback):**
- Imagine the application is working great and you want to share your experience along with a future suggestion. How would you share your experience?
- If you were to provide feedback during your experience, how would you share it?
- (If located): How do you feel about its current placement and design?
- Where would you expect to find information or functionality related to your account?

> [!NOTE]
> ### Things to watch for:
> - Does the participant find the feedback or account functionality in the sidebar footer?
> - Is the placement intuitive or does the participant look elsewhere?
> - Does the participant have expectations about what "account" should include?

---

# General Effectiveness and Usability - 12 minutes

**General Effectiveness & Expectations:**
- As you navigate between applications, how do you feel about how items appear or persist in the sidebar?
  - Are there navigation items you would expect to only appear when needed?
- Did you notice that launched apps appear in the sidebar? Was that what you expected?
- Would you expect launched applications to stay in the sidebar even after navigating away?
  - Why or why not?
- What do you think should always be present in the sidebar?
- When do you expect the sidebar to be expanded? When do you expect it to collapse?
- When using the sidebar, what would you expect to happen if you see an "x" or a close button next to a navigation item?
  - Would you expect the option to close individual navigation items from the sidebar? Why or why not?

**Workflow Integration:**
- Does having launched applications persist in the sidebar help or hinder your workflow?
- Are there scenarios when you might be switching between multiple apps? If so, what are they?
- If you were switching between multiple apps, how would you expect them to act in the sidebar or elsewhere?
- Would you expect any visual indication in the sidebar when an app is launched? If so, what would be helpful?

**Findability & Usability:**
- If you were in the Console looking for an application you recently opened, where would you expect to find it?
- Were you able to easily recognize and re-access a launched application?
- Was there a moment when you felt unsure about how to navigate to or back to an application you already used?

> [!NOTE]
> ### Things to watch for:
> - Does the participant expect persistent vs. contextual sidebar items?
> - Does the participant understand the "x" / close button affordance?
> - Are there patterns in how participants expect multi-app switching to work?
> - Any confusion about what should be always visible vs. appearing on demand?

---

# Post-Task Interview / Wrap Up - 10 minutes

**General Reflection:**
- How well does this navigation structure fit your workflow needs?
- Did you find the sidebar navigation addresses any pain points? If so, which ones?
- What specific aspects of the sidebar navigation, if any, still cause friction?
- What is the most important thing that still needs improvement before this version is finalized?

**Enhancement Prioritization:**
- What additional functionality would be most valuable to you?

**Closing Questions:**
- Of all the things we've reviewed today, what was a highlight for you?
- What was most challenging or confusing? Why?
- Before we end, do you have any questions for me?
- Any last thoughts or feedback we didn't get to discuss?

---

## Thank-You and Closing - 1 minute

Thank you so much for your time and valuable feedback! Our next steps involve gathering input from more clinicians, refining the design, and collaborating with our technical team to assess feasibility and plan a path forward for our V1 implementation of the sidebar navigation.

Before we wrap up, do you have any questions or additional thoughts you'd like to share?

Lastly — would you be interested in participating in another study like this for the CDS Console or another CDS product? Do you have colleagues who might be interested in participating? Would you be willing to share a link for them to sign up?

Thank you so much again — enjoy the rest of your day!

---

# Emergency Exit 🚨

In the rare case of an emergency during a session, be prepared with an [emergency exit strategy](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html#ResearchSafetyandEmergencyExitStrategies-Sampleexitstrategies).

<mark>**Sample exit:** "I appreciate you sharing that with me. We've covered a lot today and I want to be respectful of your time. Let's go ahead and wrap up for today — thank you so much for participating."</mark>
