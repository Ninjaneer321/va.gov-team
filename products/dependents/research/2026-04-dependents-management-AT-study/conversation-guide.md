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

# Conversation Guide for AT testing of dependents management flow

## Moderator logistics 📋✅

Before all sessions:

* Review participant list for participant name and screener question responses
* Check Settings > In Meeting (Advanced) > Automated captions, Full transcript, Save captions are all ON
* Check Settings > Meeting > In Meeting (Basic) > Sound notification when someone joins or leaves OFF
    * In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
* Check Settings > Meeting > In Meeting (Basic) > Screen sharing > Who can share > All Participants
* Check Settings > Meeting > In Meeting (Basic) > Hide participant profile pictures in a meeting ON

10-15 min before each session:

* Sign onto Zoom website as Perigean and start Zoom meeting
* Post the participant number and "observer instructions" in #feedback-backchannel
    * @mention observers
    * Share brief summary of participant demographic info
    * Mural link for notetaking
* Wear HEADPHONES to prevent the user's screen reader from echoing back to them
* Paste staging link into Zoom chat (but don't hit enter)
* Make sure everyone is muted except me and the participant

When the participant is ready, turn on your camera and begin session with the intro
CHECK SLACK for real-time feedback or questions from observers

# Screen sharing instructions (if needed)
* In the Zoom application on your computer, there's a row of buttons at the bottom. In the center is a button that says Share (on phone, may need to scroll sideways or click More...)
    * If you don't tap the screen for a while, all the buttons at the bottom will hide. To get them back, you can tap/click anywhere on the screen, and they'll show up again.
    * (If you have more than one screen, the row of buttons may be on the screen that's being shared)

* Now I'd like you to share your screen with me. Tap on the button that says Share. Then there will be options for what to share. Please choose "Screen" (phone) or your web browser.
* Great, now I can see your screen! Thank you for your patience in figuring this out.
* iPad: Broadcast screen
* iPhone: Screen broadcast or Start broadcast

# Troubleshooting
* [Avoid AI Companion, which is a new option next to “Share” in the Zoom buttons]
* [If see unpredictable jumping around behavior and participant is using a browser other than Chrome, ask them to switch to Chrome (this helped with VoiceOver on an iPhone using Safari)]
* [If having difficulty moving windows around or opening the prototype, you could request control of the participant’s screen and mouse in Zoom: <Name>’s screen tab > Request remote control. Then you can move/resize browser (but not zoom windows/buttons) and type into browser bar. The participant may need to minimize the zoom video view, and drag the zoom buttons to the bottom of the screen so out of the way.]
* [If can't see an iPhone's magnified screen, ask participant to go into their phone and do Settings > Accessibility > Show while Mirroring]
* [If “Uncaught runtime errors”, close with “X” (label “dismiss”) in top right corner, leave site if prompted.
    * Check my browser window to see if codespace shut down.
    * If so, restart it. Then have them click on the Apron link to resume/start over.]

# Intro - 5 minutes

Thanks for joining us ! I’m Kristin. How are you doing today?
I have a colleague with us in this session who will be taking notes.
(if applicable) [accessibility specialist] is also in this meeting to help with any technical issues that may arise with your use of assistive technology during this session.
There are a few of my teammates who would like to observe this session as well. Would it be OK with you if I invited them to join us?

* (If participant seems hesitant or unsure or uncomfortable) Just so you know, my teammates will be muted and off camera and you won't have to interact with them. You also have the option to keep the session just the two of us plus the notetaker (and the technical support person).
* (If yes, let them in—3-4 MAX. If no, post to #feedback-backchannel "Sorry, the participant doesn't want any observers in this session.")
* (OBSERVERS JOIN w/cameras ON ) We have a few people from the team listening in today: there's [NAME] (wave or say "hi"), [NAME] (wave or say "hi"), etc. (If I don't know the name of one of the observers, ask them to please turn on their camera and say their name aloud)

Could the observers please turn their cameras off now to save bandwidth?
Today we're going to talk about managing dependents on va.gov. I'm going to ask you a few questions, and then I'll have you do some specific tasks using a website that I will share with you.
Before we start, I want to go over a few things:

* This entire session may take 90 minutes. I want to be sure not to keep you longer, so I may occasionally prompt you with the next question or topic.
* In this session, we want to hear your honest opinions. There are no right or wrong answers; we are not testing your knowledge or abilities. We're testing a website to learn how we can make it easier to use. I welcome any and all of your feedback, and I won't be offended by any opinions you express.
* Your participation in this interview is completely voluntary. Whether or not you choose to participate will not affect your benefits with the VA. If you would like to stop the session or do not want to answer a question for any reason at any time, that's no problem. Just let me know.
* Finally, I would like to record my screen and audio to confirm that I’ve captured your opinions accurately and sometimes share video clips with our colleagues at the VA to show user feedback. If we do this, we don’t link anything you choose to share in the session to any information that identifies you, and we remove your face and name from any videos that we share. Knowing this, are you comfortable if I record my screen and audio as we talk today?
    * (If yes:) Once I start recording, I am going to confirm once more that you are ok with me recording this session.

➡️ Select Record, then Record to the cloud.
(If participant asks you to NOT record) Are you comfortable if I save the transcript of the session? (If not, take good notes!)

* I have started recording. I'd like to confirm:
    * Are you comfortable if I record my screen and the audio as we talk today? Yes / No
    * Are you comfortable if we decide to use a recorded clip from our discussion today to share with other VA partners as long as we remove any information that can be used to identify you? Yes / No

In the bottom toolbar of the Zoom window, click the arrow next to SHOW CAPTIONS > View Full Transcript > Save (NEED TO DO THIS TO GET TRANSCRIPT)
After checking that transcription is working, close the Transcript panel by clicking Close Full Transcript in the Show Captions menu.

# Warm-up Questions (Optional) - 5 minutes

Let’s start with a few questions...

1. I understand you are a Veteran and you have [benefit from screener]. Is that right?
    * Thanks for confirming that.
2. And have you ever had a dependent spouse, child, or parent on your benefit?
    * Can you tell me about who and when?
    * How did you add them? was is online or paper form? And did you do it yourself or have help from someone?
    * How was that experience?
3. What kind of device are you using today? (Computer / Tablet / Smartphone)
    * What operating system? (macOS / Windows / iOS / Android / _______)
4. What web browser do you use? (Chrome / Firefox / Edge / Safari / _______)
* I will be sharing a web page link with you during the session. How would you prefer to receive the URL? I could dictate it to you, put it in the Zoom chat, email it to you, or (for smartphone only) text it to you. (RECORD)
    * (If text or email) Could the notetaker please text/email the link now?
5. What assistive technology are you using right now? (screen reader / magnifier ________________)
    * (If Dolphin screen reader, won't be able to share screen on Zoom)
    * (if no AT) Do you sometimes use assistive technology while using VA.gov or filling out a form online?
        * If so, what do you use and when?
            * Would you be willing to start using it now in this session?
            * (if not, run session w/o AT, or stop and ask Perigean for a replacement participant)
6. How would you rate your level of experience with using a screen (reader / magnifier)—beginner, intermediate, advanced, or expert?
7. How long have you been using a screen (reader / magnifier)?
8. Have you ever shared your screen in Zoom while using a screen (reader / magnifier)? (Yes / No)
    * If not, we can help you do that.


## First Task: Share Screen - 10 minutes

I would like you to share your screen with me so that I can see what you do during this session. Before we start, I want to make sure you know that screen share will show me your screen, so if you'd like to close any apps or turn off notifications that you don't want me to see, you could do that now.

* (refer to Screen sharing instructions above, if needed)
* STOP TECH TROUBLESHOOTING < 15 min into session if want a replacement participant from Perigean b/c not likely to be successful

We can help guide you through this if you need help. Please say what you're doing out loud so that if there are any issues, we'll know what they are.

1. Make sure that the Zoom application has focus
2. Navigate to the screen share button (maybe via More menu)
3. Check the "share sound" checkbox (so we can hear their screen reader speaking)—may have to tab a LOT to get to this in the right pane
4. Activate the screen share

(If we can't hear the screen reader) Since I can't hear your screen reader and don't want to interrupt it, after I ask you to do something, I'll try to not say anything until you say that you're done or need help, OK?
(If video window is covering up phone screen) It looks like my zoom video is covering up a lot of your screen. Could you please swipe it off? (Screen reader: swipe right until the video window has focus, and then double tap when you hear "Stash preview".)


## Second Task: Open Prototype - 10 minutes

You'll be interacting with a demo prototype today. We will provide you with a demo account to use for a made-up veteran with dependents on their disability compensation benefit. None of your actions will affect your own VA information or benefits. 
Now I'd like you to open a website that I'm going to share with you.
I will [email/text/dictate/put into the Zoom chat] the URL: staging.va.gov

* (If asked, reassure that this is a legitimate link to what I want you to test)
* (Might need to hold tablet horizontally so easier to read)

Did you get the link?

* If “unsupported browser” error, ask to try a different browser or device, or share my screen (works for anyone) and mouse control (doesn't work w/iPhones)
* If prototype doesn't open, copy the URL and open in a new incognito window (Chrome), private window (Firefox, Safari) or InPrivate (Edge)

Later on, I will send you the login information for the made-up veteran. I could dictate it to you, put it in the Zoom chat, email it to you, or (for smartphone only) text it to you – which would you prefer?

* Take note of their preference and prepare to send

I would like you to interact with the prototype just like you would on your own if we were not in a session together. Please use whatever zooming or assistive technology you're accustomed to while browsing the web.


## Third Task: Find MyVA Dependents - 5 minutes

[start on staging.va.gov home page]
(If using screen magnifier but can’t see zoomed screen over Zoom) Is your screen magnified? If so, I can’t see that. Could you please tell me how far across the page you can see? And how far down from the top of the page?

Please talk aloud about what you're thinking BEFORE you click/tap on anything.

Imagine that you received an email telling you that you have to verify your dependents are accurate on va.gov to avoid owing the VA money. It included a link to this page.

How would you start that process from this screen?

[when prompted to log-in, give participant the test user credentials according to their preferred method)


> ### Things to watch for:
> - Feedback on dependent cards or the difference between verification notification and 686 link


## Fourth Task: Verification - 5 minutes

[Alert on My VA Dependents page] What do you think this alert is telling you? What would you do next?

[get them into the verification 0538 flow]

[On review your dependents page in 0538]: Imagine that you do need to update your dependents: you recently got divorced, so need to remove [spouse + child], and you also have a newborn to add. 

[‘Update dependents in diff form’ page] – what would you do next?


> ### Things to watch for:
> - Did they distinguish between verification and add/remove?

## Fifth Task: Remove dependents using 686 - 10 minutes

[get user into 686 flow]

Next, let’s try to make those changes we talked about — removing [spouse and child] and adding a newborn.

Please talk aloud with any thoughts, reactions, or questions you have. And tell me what you want to click/tap on before you do it.

[as form fields appear], You can make up fake details so you don't share your personal information with me.

[Follow participant all the way through to add steps]


> ### Things to watch for:
> - Feedback on form fields, reasons to add/remove dependents, error recovery

## Sixth Task: Child add (cancel list+loop) - 15 minutes

[when seeing the child SSN field]. Imagine that you don’t have the social security card yet, so you don’t want to add this child right now. What would you do?

[might need to prompt them to cancel]

What happened after you dismissed the alert? Is this where you would expect to be taken next?

> ### Things to watch for:
> - How does the user expect this to work?

## Seventh Task: Make an edit from the summary page, then submit - 10 minutes

Let’s pause here and imagine that you realized you entered the wrong [date type] for [one of the dependents]. How would you correct that mistake from here?


> ### Things to watch for:
> - Error recovery, navigating from summary page to form sections and back

# Post-Task Interview - 5 minutes

[Type into #feedback-backchannel: "Any questions you want me to ask?"]

1. Overall, about everything you've seen in this session...What worked well for you?
2. What was unclear or did not work well for you?
    1. [If they say nothing, could ask:] What, if anything, did you find annoying?
3. What would you like to change or add?
4. If you had a magic wand and could change anything about the process of managing your dependents, what would you want to change?
5. Is there anything else that we haven't talked about that you think I should know?



## Consent to use video clips

- I want to circle back and re-confirm that **you are comfortable if we were to share a video clip of this session with our VA partners?** Just to remind you, we will remove all information that could be used to identify you before sharing and will only share the videos with VA partners with the purpose of improving VA.gov and other digital experiences.
   - **If yes:** Is there any part of our discussion you would NOT want shared in a video clip?
 
   <mark>**[Record answer here]**</mark>


## Thank-You and Closing - X minutes

We really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to learn about Veterans so we can improve the online tools that we provide.
If you know any other Veterans or family members who might be willing to participate in a future research session like this one, you can pass along the web link that you'll receive in your email from our team.
Thank you so much again, and I hope that you enjoy the rest of your day!
Open the Transcript panel, click Save Transcript
End meeting for all


# Emergency Exit 🚨

We have covered all the questions I have for you today. Thank you so much for your time and feedback!

---

