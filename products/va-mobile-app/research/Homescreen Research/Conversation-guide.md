---
title: "Conversation Guide for [Team, Product, Date]"
author: "[AUTHOR NAME]"
date_created: "[YYYY-MM-DD]"
last_modified: "[YYYY-MM-DD]"

# NEW: Core research metadata
team: "[TEAM NAME]"
portfolio: "[benefits|health|digital-experience|bam]"
product: "[PRODUCT NAME]"
research_phase: "[discovery|validation|usability|evaluative]"
research_method: "[moderated_interview|usability_test|card_sort|etc]"

# NEW: Session details
session_duration: "[X minutes]"
session_type: "[remote_moderated|remote_unmoderated|in_person]"
participant_criteria: "[Brief description, e.g., 'Veterans with service-connected disabilities']"

# NEW: Related documents
related_research_plan: "[path/to/research-plan.md]"
related_prototype: "[URL or N/A]"

tags:
  - "[Tag1]"
  - "[Tag2]"
description: "A template for moderating research sessions including logistics, intro script, task outlines, and consent steps."

# NEW: Compliance flags
recording_required: true
observer_support: true
consent_for_clips: true
---

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your conversation guide below.**
> 
> Use the [GitHub Copilot Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed conversation guide.  The prompt uses natural language processing to extract key information and apply appropriate research repository tags based on your tasks and research objectives. This ensures consistency and completeness across all research documentation.

# Conversation Guide for [initiative]

## Moderator logistics 📋✅
### 2-3 days before the session

> [!NOTE]
> Review VA Platform's [Research Checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-checklist).

`List and complete any project-specific setup tasks for this study below:`

- [ ] Ensure notetakers and observers have meeting links, note taking template, and instructions
- [ ] Ensure prototype works correctly

**Before all sessions**:
- Review participant list for participant name and screener question responses
- Check Settings > In Meeting (Advanced) > Automated captions, Full transcript, Save captions are all ON
- Check Settings > Meeting > In Meeting (Basic) > Sound notification when someone joins or leaves OFF
  - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
- Check Settings > Meeting > In Meeting (Basic) > Screen sharing > Who can share > All Participants
- Check Settings > Meeting > In Meeting (Basic) > Hide participant profile pictures in a meeting ON

### Day of the session

> [!TIP]
> - Use [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/) in Slack for real-time feedback from observers.
> - Mute your Slack notifications.
> - Send out the [observer instructions](https://depo-platform-documentation.scrollhelp.site/research-design/Observer-guidelines.1622311177.html) to your observers (Slackbot will do this for you if you type "observer instructions" into [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel)).

### Starting the session

> [!TIP]
> - In the Attendees section, make sure everyone except the participant is on mute.
> - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
> - Check your [screensharing setup] and share permissions for participants.
> - When the participant is ready, begin the session with the following intro*

# Intro - 5 minutes
Thanks for joining us today! My name is **Theresa**. How are you doing today?

I have a colleague with us in this session who will be taking notes. 

There are a few of my teammates who would like to observe this session as well. **Would it be OK with you if I invited them to join us?**
- *(If participant seems hesitant or unsure or uncomfortable)* Just so you know, my teammates will be muted and off camera and you won't have to interact with them. You also have the option to keep the session just the two of us plus the notetaker (and the technical support person).
- *(If yes, let them in--3-4 MAX. If no, post to #feedback-backchannel "Sorry, the participant doesn't want any observers in this session.")*

- *(OBSERVERS JOIN w/cameras ON )* We have a few people from the team listening in today: there's [NAME] *(wave or say "hi")*, [NAME] *(wave or say "hi")*, etc. *(If I don't know the name of one of the observers, ask them to please turn on their camera and say their name aloud)*

Could the observers please turn their cameras off now to save bandwidth? 

Today we're going to talk about using the VA mobile app. I'm going to ask you a few questions, and then I'll have you do some specific tasks using the VA Health & Benefits App. 

Before we start, I want to go over a few things:

- **This entire session may take 60 minutes.** I want to be sure not to keep you longer, so I may occasionally prompt you with the next question or topic.
  
- **In this session, we want to hear your honest opinions.** There are no right or wrong answers; we are not testing your knowledge or abilities. We're testing this app to learn how we can make it easier to use. I welcome any and all of your feedback, and I won't be offended by any opinions you express.
- **Your participation in this interview is completely voluntary.** Whether or not you choose to participate will not affect your benefits with the VA. If you would like to stop the session or do not want to answer a question for any reason at any time, that's no problem. Just let me know.

- Finally, I would like to record my screen and audio to confirm that I’ve captured your opinions accurately and sometimes share video clips with our colleagues at the VA to show user feedback. If we do this, we don’t link anything you choose to share in the session to any information that identifies you, and we remove your face and name from any videos that we share.
**Knowing this, are you comfortable if I record my screen and audio as we talk today?**
  - *(If yes:)* Once I start recording, I am going to confirm once more that you are ok with me recording this session.

➡️ Select **Record**, then **Record to the cloud**.

*(If participant asks you to NOT record)* Are you comfortable if I save the transcript of the session? *(If not, take good notes!)*

- I have started recording. I'd like to confirm: 
  - **Are you comfortable if I record my screen and the audio as we talk today?** Yes / No
 
  - **Are you comfortable if we decide to use a recorded clip from our discussion today to share with other VA partners as long as we remove any information that can be used to identify you?** Yes / No

*Moderator: In the bottom toolbar of the Zoom window, click the arrow next to **SHOW CAPTIONS** > **View Full Transcript** > Save (NEED TO DO THIS TO GET TRANSCRIPT)*

*After checking that transcription is working, close the Transcript panel by clicking **Close Full Transcript** in the Show Captions menu.*


## Troubleshooting
- [Avoid **AI Companion**, which is a new option next to “Share” in the Zoom buttons]

- [If see **unpredictable jumping around** behavior and participant is using a browser other than Chrome, ask them to switch to Chrome (this helped with VoiceOver on an iPhone using Safari)]

# Warm-up Questions - 5 minutes, 5 minutes elapsed

Let’s start with a few questions... 

1. I understand you are a Veteran. Is that right? 
    - Thanks for confirming that.

2. What kind of device are you using today? *(Tablet / Smartphone)*
    - *(If not the expected device, ask to rejoin that way)*

3. What operating system is on your device? *(iOS / Android / _______)*

4. Do you have the VA Health and Benefits mobile app on your device?
   - If so, can you tell me what you typically use the mobile app for? How has your experience been so far?


# User Tasks

## Task 0: Share screen - 3 minutes, 10 minutes elapsed

I would like you to share your screen with me so that I can see what you do during this session. Before we start, I want to make sure you know that screen share will show me your own screen, so if you'd like to close any apps or turn off notifications that you don't want me to see, you could do that now. You may also find it helpful to turn on Do Not Disturb so you're not interrupted during this session.
- *STOP TECH TROUBLESHOOTING **< 15 min into session** if want a replacement participant from Perigean b/c not likely to be successful*

We can help guide you through this if you need help. Please say what you're doing out loud so that if there are any issues, we'll know what they are.

**(If video window is covering up phone screen)** It looks like my zoom video is covering up a lot of your screen. Could you please swipe it off? 

## Task 00: Open prototype - 2 minutes, 13 minutes elapsed

Today, we're going to look at a demo version of the app. This is just for us to test with, so not everything will work like it does on the real app. You might see some buttons or links not working and some placeholder words instead of real information. Since this is just the demo version, nothing you do in this app will affect your real app or VA information and benefits. 

I will now share in the zoom chat the URL for the demo: Please open the chat and then click the link. 

- *If “unsupported browser” error, ask to try a different browser or device 
- *If prototype doesn't open, copy the URL and open in a new incognito window (Chrome), private window (Firefox, Safari) or InPrivate (Edge)*


## Task 1: General review of homescreen - 10 minutes, 15 minutes elapsed

Please go ahead and log in using ID.me. The system will automatically generate a test user login for you. 

As we go through the steps in this study, please talk aloud about what you're thinking BEFORE clicking on anything. And please share any thoughts, reactions, or questions you have about the current screen. Remember that we're testing how well the app is working and not you. If you're confused, I expect other people would be confused too, so we definitely want to hear when something seems confusing or not right to you. 

Take a look at this page [homescreen]. [Give participant a minute to look.]
1. What's catching your attention?
2. Probe: What about it is catching your attention?
3. If you saw this screen when you first logged into your app, what would you do next?
4. What do you think this first section in blue is about?
5. What kind of things would you expect to see here?
6. What do you think the next section is for?
7. What kind of things would you expect to see here?
8. Is there anything confusing here?
9. Is there anything missing?

> [!NOTE]
> ### Things to watch for:
> - Does the participant notice Action required section label?
> - Does the participant notice Activity section label?

## Second Task: Find dsability rating/payments, Veteran status card, dependents - 10 minutes, 25 minutes elapsed

Now let's talk about trying to find a few things in the app. 
1. If you had submitted some things to hopefully update your disability rating and got notice that it has been updated, where would you look for your disability rating?
2. What about your disability payments history?
3. Would you expect them to be in the same place?
4. If you were in a store and saw a sign that they offered a military and Veterans discount and wanted to try to get the discount, where would you go in the app to find your Veteran status card to show the store?
5. 
- [ ] Step 2

> [!NOTE]
> ### Things to watch for:
> - [Does the participant understand meaning of xyz?]
> - [Does the participant notice xyz?]
> - [Etc]

## Third Task: [TASK NAME] - X minutes

- [ ] Step 1
- [ ] Step 2

> [!NOTE]
> ### Things to watch for:
> - [Does the participant understand meaning of xyz?]
> - [Does the participant notice xyz?]
> - [Etc]

# Post-Task Interview - X minutes

- Question 1
- Question 2
- Any questions for me? 

## Consent to use video clips

- I want to circle back and re-confirm that **you are comfortable if we were to share a video clip of this session with our VA partners?** Just to remind you, we will remove all information that could be used to identify you before sharing and will only share the videos with VA partners with the purpose of improving VA.gov and other digital experiences.
   - **If yes:** Is there any part of our discussion you would NOT want shared in a video clip?
 
   <mark>**[Record answer here]**</mark>


## Thank-You and Closing - X minutes

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans.

Thanks! Lastly, Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!


# Emergency Exit 🚨

In the rare case of an emergency during a session, be prepared with an [emergency exit strategy](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html#ResearchSafetyandEmergencyExitStrategies-Sampleexitstrategies). <mark>**Plan to include here at least one option, so its easy to find during a session. Take some time to practice so it feels more comfortable.**</mark>

---

## After You Save This Convo Guide ✅

- [ ] Complete the YAML frontmatter at the top of this file using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)
- [ ] Review alignment with your research plan tags
- [ ] Update the last_modified date

### Sample Conversation Guide _(note: this link points to resources in the va.gov-team GitHub repo)_

- [Veteran ID Card Discovery Interview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-id-cards/research/discovery/discovery-conversation-guide.md)
