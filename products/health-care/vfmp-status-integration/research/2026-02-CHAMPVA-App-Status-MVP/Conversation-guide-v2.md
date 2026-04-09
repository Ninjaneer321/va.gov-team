---
# Conversation Guide Metadata
title: "Conversation Guide for VFMP Status Integration, CHAMPVA Application Status MVP, February 2026"
author: "VFMP Status Integration Team"
date_created: "2026-02-01"
last_modified: "2026-03-30"

# Core research metadata
team: "Health Apps Team"
portfolio: "health"
product: "VFMP Status Integration - CHAMPVA Application Status MVP"
product_area: "authenticated"
research_phase: "usability"
research_method: "moderated_usability_testing"

# Session details
session_duration: "60 minutes"
session_type: "remote_moderated"
participant_criteria: "Veterans and beneficiaries who have applied or are managing CHAMPVA applications"

# Related documents
related_research_plan: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/vfmp-status-integration/research/2026-02-CHAMPVA-App-Status-MVP/research-plan.md"
related_prototype: "see below"

tags:

  # Audience
  - "AUD: Veterans"
  - "AUD: Dependents"
  - "AUD: Family Member"
  - "AUD: Surviving Family"
  
  # Benefit
  - "BNFT: Healthcare"
  - "BNFT: Disability"
  
  # Products
  - "PRDT: CHAMPVA"
  - "PRDT: Claim-status-tool"
  - "PRDT: MyVA"
  
  # Design System Components (based on tasks testing these elements)
  - "DSC: Accordions"
  - "DSC: Alert Boxes"
  - "DSC: Card"
  - "DSC: Form - File Input"
  - "DSC: Links"
  - "DSC: Tabs"
  
  # Design System Patterns (based on tasks)
  - "DSP: Ask users for files"
  - "DSP: Content Presentation"
  - "DSP: Notifications"
  
  # Hardware
  - "HDW: Desktop"
  - "HDW: Smartphone"
  
  # Research Type
  - "usability-testing"
  - "moderated-research"
  - "prototype-testing"
  - "authenticated-experience"
  
  # Additional relevant tags
  - "navigation"
  - "status-tracking"
  - "document-upload"
  - "notifications"
  - "post-submission-experience"
  - "vfmp-status"
  - "form-status"

description: "Conversation guide for VFMP Status Integration research testing the CHAMPVA Application Status MVP feature integrated into the Health Apps Claims Status Tool. Tests how Veterans and beneficiaries find, understand, and interact with application status updates, evidence requests, and document uploads after submitting a CHAMPVA application."

# Compliance flags
recording_required: true
observer_support: true
consent_for_clips: true
---

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your conversation guide below.**
> 
> Use the [GitHub Copilot Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed conversation guide.  The prompt uses natural language processing to extract key information and apply appropriate research repository tags based on your tasks and research objectives.

# Conversation Guide for VFMP Status Integration, Health Apps in Claims Status Tool, CHAMPVA Application Status MVP 02/2026

## Moderator logistics 📋✅
### Before all sessions 

> - Review all guidelines for moderating
> - Review research goals
> - Have links to both Veteran and non-Veteran prototypes ready 

### Day of the session

> - Review participant list for name and demographics
> - Review notetaking board and remind notetaker and observers to follow #feedback-backchannel 

### 10 minutes before the session

> - Start a thread in the #feedback-backchannel
  > - @mention observers with the [observer instructions](https://depo-platform-documentation.scrollhelp.site/research-design/Observer-guidelines.1622311177.html) (Slackbot will do this for you if you type "observer instructions" into [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/))
  > - Share brief summary of participant demographics
  > - Github link for notetaking
> - Sign into Perigean’s Zoom and start the meeting (see email for login details)
> - Turn on transcriptions by clicking LIVE TRANSCRIPT and ENABLE
> - Check Zoom settings and make sure participants have permission to share
> - Change your name in Zoom
> - In the Participant “more” menu, make sure “Play Join and Leave Sound” is unchecked
> - Open conversation guide
> - Copy prototype link into the Zoom chat (do NOT hit enter)
> - Mute your Slack notifications 

### Starting the session

> - Turn camera on
> - Check your screensharing setup and share permissions for participants.
> - If participant doesn’t arrive after 2 minutes, Slack Perigean in the study channel
> - If participant is a no-show, Slack team in #feedback-backchannel
> - When the participant is ready, begin the session with the intro 

# Intro - 5 minutes

Thanks for joining us today! My name is **[NAME]** and **[NOTETAKER NAME]** is taking notes.
I also have a couple other colleagues in the Zoom waiting room who would like to observe and take notes. But before we get to them... 

Today we're going to talk about the experience after someone submits an application for CHAMPVA benefits, which is the Civilian Health and Medical Program of the Department of Veterans Affairs. 

Before we start, I have a few things that I want to go over with you:

- **This entire session should take about 60 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
  
- **In this session, we want to hear your honest opinions.** There are no right or wrong answers; we are not testing your knowledge or abilities. I welcome any and all of your feedback, and I won't be offended by any opinions you express.
  
- **Your participation in this interview is completely voluntary.** You do not have to participate if you don't want to. Whether you choose to participate or not will not affect your benefits in any way with the VA. If you would like to stop the session or do not want to answer a question for any reason at any time, that's no problem. Please let me know.
  
- I know the folks who invited you to participate in this interview asked if it was alright to allow people to observe this interview, but I want to double-check with you before we get going. **Are you okay with a couple of additional observers during this session?**
   - <mark>**If no:** Use Slack to kindly ask the observers to leave the Zoom.</mark>
   - **If yes:** Admit observers.
     
> [!TIP]
> - Then, ask the notetaker and observers to **give a brief, camera-on introduction, like their first name and position with VA.gov.** (This is meant to humanize the interaction of observation for the participant.)
> - Once complete, ask the notetaker and observers to turn off their cameras for the remainder of the session to save bandwidth
     
- *~~(If applicable)~~* **You'll be interacting with a prototype today.** This is a demo tool that may not function exactly the way you expect. Some areas of the prototype will be clickable, and some will not. <mark>**Since it's a demo, none of your actions will affect your VA information or benefits.**</mark>
  
- **Are you comfortable if I record my screen and audio as we talk today?** We use the recordings to confirm that we have captured your opinions accurately. After we complete the analysis, the recordings are destroyed, and none of your comments will be attributed to you directly. We either report findings out in groups (i.e., 5 out of 10 participants said this), or if we want to quote you directly, we take away any identifying information and give you a participant ID, like P7.
   - **Knowing that, are you comfortable if I record my screen and audio as we talk today?**

   <mark>**[Record answer here]**</mark>
     
- **Would you be comfortable if we decided to use a clip of our session with you to help our partners understand Veterans’ experiences?** One of the ways that we share findings with our partners across the VA is by showing short video clips of sessions with Veterans. In these video clips, we blur out any information that could possibly be used to identify you, like your onscreen image. Sharing these video clips can be a compelling way for our partners to better understand what Veterans go through when using VA.gov and our digital products. These clips will not be shared outside of the VA. We don't know at this point if we will or not, but we like to ask ahead of time. At the end of the interview, I'll also confirm that this is okay with you, so you will get a chance to veto this once you know what we've discussed.
   - **Knowing this, would you be comfortable if we decided to use a clip of our session with you to help our partners understand Veteran's experiences?**
 
   <mark>**[Record answer here]**</mark>

   - If yes: **Once I start recording, I am going to confirm that you are okay with me recording this session once more.**

➡️ **Start recording.**

> [!TIP]
> After you start the recording, click the Show captions (CC) button to enable transcription for the recording.

- **I have started recording.** I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

 <mark>**[Record answer here]**</mark>
 
- **Are you comfortable if we decide to use a recorded clip from our discussion today to share with other VA partners if we remove any information that can be used to identify you?**

 <mark>**[Record answer here]**</mark>

# Warm-up Questions - 5 minutes

Before we look at the prototype, let’s start with a few warm-up questions. 

1. Do you have a VA.gov account? 
- [IF YES:]
  - How often are you logging into VA.gov?
  - For what tasks?
- [IF NO:]
  - Have you ever visited the VA.gov website?
    - [IF YES:]
      - For what tasks?
      - How often are you visiting VA.gov?
    - [IF NO:] What would you expect to find on VA.gov? 

2. Have you ever applied for the CHAMPVA program? 
- [IF YES:]
  - Are you or anyone else in your household currently enrolled in the CHAMPVA program?
  - Did you fill out the CHAMPVA application online, on paper, over the phone, etc.?
  - What was your experience like after submitting the CHAMPVA application?
  - Did you have to mail or fax in anything after you submitted your application?
- [IF NO:] Have you ever heard about the CHAMPVA program before?
  - What do you know about the program?
  - [IF THEY’VE NEVER HEARD OF CHAMPVA] CHAMPVA is a healthcare reimbursement program for the spouses, dependents, and survivors of Veterans who meet certain service-connected disability requirements 

3. Let’s imagine that you just submitted your CHAMPVA application on VA.gov.
- What would you expect to happen after you submit your application?
  - How would you expect to be notified or find updates on your application?
    - [IF THEY MENTION CHECKING VA.GOV]
      - How often would you be checking VA.gov?
  - What would you want to be notified about?
  - How soon do you expect to be notified about any updates on your application? 

## Screenshare & Prototype Setup - 5 minutes

Now, I'm going to drop a link to the prototype in the chat, which I'd like you to open in your browser and then share your screen in Zoom. I can help walk you through how to share your screen, but I want to give you a moment to close any other browser windows, tabs or applications you may have running, and silence notifications on your device so it doesn't interfere. Let me know when you're ready for the link. 

Wait for participant's verbal consent. 

I'd like to confirm, what kind of device are you using today (desktop, mobile, tablet)? 

Great! I'm pasting the link and a password to the site in the chat. You can find that chat icon in the row of buttons at the bottom, ~~under the chat icon~~: 

_Share link and password as **two separate messages** in chat. This will enable the user to copy-paste the password easily._

- Veteran flow:
  - https://chisel-pear-20681620.figma.site/scenario1
  - champva-test89124
- Spouse/dependent flow:
  - https://chisel-pear-20681620.figma.site/scenario1-nonveteran
  - champva-test89124

Please open this link and share your screen (phone) or web browser (desktop). Let me know if you need any help. 

### Screen sharing instructions (if needed) 

- In the Zoom application on your computer, there's a row of buttons at the bottom. In the center is a button that says **Share** (on phone, may need to scroll sideways or click **More...**)
  - If you don't tap the screen for a while, all the buttons at the bottom will hide. To get them back, you can tap/click anywhere on the screen, and they'll show up again.
  - (If you have more than one screen, the row of buttons may be on the screen that's being shared) 
- Now I'd like you to share your screen with me. Tap on the button that says **Share**. Then there will be options for what to share. Please choose **"Screen"** (phone) or your web browser.
  - iPad: Broadcast screen [Avoid AI Companion, which is a new option next to “Share” in the Zoom buttons] 
- Great, now I can see your screen! Thank you for your patience in figuring this out.
  
- _If having difficulty moving windows around or opening the prototype, you could request control of the participant’s screen and mouse in Zoom:_ 
< Name >’s screen tab > Request remote control. Then you can move/resize browser (but not zoom windows/buttons) and type into browser bar. The participant may need to minimize the zoom video view, and drag the zoom buttons to the bottom of the screen so out of the way. 

## Scenario 1a: My VA homepage - 5 minutes 
Now that we have the prototype up, I’m going to give you a couple scenarios and have you give feedback as you navigate through the prototype. On each page, please share what you are thinking out loud so we can hear your honest opinion. We want to improve these tools and are not testing your ability. 

Do you have any questions? 

Wait for participant answer. 

### [Scenario 1 page] 
For the first scenario I'd like you to imagine that you submitted a CHAMPVA application recently and want to find out what is happening with your application. You log into VA.gov and this upcoming screen is the first thing you see. Go ahead and click continue. 

### [MyVA] 
If you wanted to find out what is happening with your CHAMPVA application, can you show me what you would do next?  Take a moment to review this page and think out loud as you go, but don’t click on anything yet – so I can get your feedback on this page before we move on.  

[Let the user explore. As they navigate, probe if they pause or seem to find anything confusing.] 

- [If they would click “Check status details” or “Track claims, decision reviews, and applications” link]
  - What do you think would happen if you click on the link?
    - Got it, we’ll go back to that.
  - For now, let's zoom out. Is this section where you expected to find your application?
    - If not, where would you expect it to be?
    - What else do you expect to be in this section?
  - Before we move on, I want you to scroll down to the section called "Forms."
    - What do you expect to find in this section?
    - [If they would click Completed forms accordion]
      - Okay, go ahead and click on Completed forms.
      - Is this what you expected to see?
        
- [If they would click Completed forms accordion]
  - Okay, go ahead and click on Completed forms.
    - Is this what you expected to see?
    - What do you expect to find in the Forms section?
  - Now, what would you do next?
    - [If they would call] What would you ask about?
      - Is there anything else you would do on this page?
      - [If they don’t scroll up] Could you scroll back up to the top of the page and look at the Claim and application status section?
    - [If they would click “Check status details” or “Track claims, decision reviews, and applications” link]
      - What do you think would happen if you click on the link?
        - Got it, we’ll go back to that.
      - For now, let's zoom out. Is this section where you expected to find your application?
        - If not, where would you expect it to be?
        - What else do you expect to be in this section? 

- [If they don’t know what to do next] Could you look at the Claim and application status section? 

- In your own words, how would you describe what the Claim and application status section is for, versus the Forms section?
  - What are your thoughts on the names of those sections?
  - Is there any way that we could improve them? 

**Now that you’ve seen both sections, what would you do next?** 
- [IF THEY WOULD CLICK THE CHECK STATUS DETAILS LINK]
  - [If they are mentioning it for the first time] What do you think will happen if you click on the “Check status details” link?
  - Okay, go ahead and click on the link to move forward in the prototype.
- [IF THEY WOULD CLICK THE STATUS TOOL LINK]
  - [If they are mentioning it for the first time] What do you think will happen if you click on the “Track claims, decision reviews, and applications” link?
  - For this first scenario, let's click on the Check status details link so I can get feedback on those pages. We will go back to that link later.
- [IF NOT] Could you share why you would do that next?
  - For this first scenario, let's click on the Check status details link so I can get feedback on those pages. We will go back to that link later.

> [!NOTE]
> ### Things to watch for:
> - Where does the participant expect to find their CHAMPVA app?
> - What do they think the Claim and application status section is for, versus the Forms section? 
> - Are they able to navigate to the status tool without assistance?

## Scenario 1b: CHAMPVA App screens in CST - 10 minutes 

### [Status page] 
Let's continue imagining that you’re trying to find out more about your CHAMPVA application, and about what will happen next.  
 
Take a moment to review this page and the other tabs, and think out loud as you go.  

[Let the user explore. As they navigate, probe if they pause or seem to find anything confusing. When they are done:] 
- Now that you’ve read through these pages, in your own words, can you tell me what you learned about your application?
  - What do you think will happen next?
- Is there anything else you want to see or know more about?
- What would you do next, if anything? 

### [Files tab] 
- Can you click on the Files tab?
  - When would you use this screen?
  - Let’s pretend that you want to submit an updated marriage certificate for Jane Doe. What would you do?
    - [If they want to upload] Go ahead and click in the file upload box, and we’ll pretend that you brought in a file from your device
      - [Doctype dropdown comes up, let user choose an option]
    - How was that process? Is it what you expected?
    - Now what would you do?
      - Okay, go ahead and click continue (the submit button) 

### [Overview tab] 
- Now, I want to ask more about the Overview tab. Can you go there for me?
  - In your own words, can you explain what happens in each of these steps?
  - ~~On a scale of 1-5 (with 1 being very hard and 5 being very easy) - how difficult or easy was it to understand the steps an application goes through after it is submitted? Why?~~

Great! That’s the end of our first scenario. To go to the next scenario, scroll all the way down to the bottom of the screen. Then, click the button that says “Proceed to the next scenario”. 

> [!NOTE]
> ### Things to watch for:
> - How do participants interpret the steps presented in the status tool?
> - How do they interpret the steps in order to build a mental model of how CHAMPVA applications are processed?   

## Scenario 2: Evidence request - 10 minutes 

### [Scenario 2 page]  
Let’s say a week has passed and you want to find out what has happened with your CHAMPVA application. You’ve logged back into VA.gov and this upcoming screen is the first thing you see. Go ahead and click continue. 

### [MyVA, CHAMPVA card now has yellow action needed tag] 
- Take a look at this page and tell me what you see.
  - What do you think has happened with your application?
- What would you do next?
  - [If they WOULD NOT FOLLOW the Check status details link] For the scenario today, let's click on the link anyway. 

### [Status page for CHAMPVA App: one beneficiary has been deemed eligible, the other has an evidence request] 
- Take a look at this page and tell me, in your own words, what has happened with your application.
  - What step is the application on? Does that make sense to you?
  - What has happened with Jane’s application? With John Doe Jr.’s?
- ~~On a scale of 1-5 (with 1 being very hard and 5 being very easy) - how difficult or easy was it to understand this screen? Why did you give it that rating?~~
- What would you do next?
  - [If they WOULD NOT FOLLOW the Review request link] For the scenario today, let's click on the link anyway. 

### [Birth certificate evidence request page] 
- Tell me what you see here. What is this request for?
- What would you do next?
  - [If they want to upload] Go ahead and click in the file upload box, and we’ll pretend that you brought in a file from your device
  - [Once the upload animation is complete]
    - Is this what you expected to happen?
    - Now what would you do?
      - Okay, go ahead and click continue (the submit button) 

### [Success alert on status tab, now on Step 3, one beneficiary has been deemed eligible] 
- Take a look at this page and tell me what you see.
- What step is the application on now?
  - Is that what you’d expect? 

That’s the end of our second scenario. To go to the last scenario, scroll all the way down to the bottom of the screen. Then, click the button that says “Proceed to the next scenario”. 

> [!NOTE]
> ### Things to watch for:
> - How do participants understand the application status for each of their beneficiaries based on the information presented in the status tool?
> - Do participants understand how to upload the requested documents and why they're being asked for those documents?   

## Scenario 3: CST home page+ completed application - 10 minutes 
### [Scenario 3 page]  
A week has passed since you uploaded the requested document, and you want to check on the status of your CHAMPVA application again. You’ve logged back into VA.gov and this upcoming screen is the first thing you see. Go ahead and click continue. 

### [MyVA, For Veteran flow: CHAMPVA card is not visible ] 
- Take a look at this page and tell me what you see.
  - What do you think has happened with your application?
  - [ASK VETERANS ONLY] Why do you think it isn’t on this page?
- What would you do next?
  - [If they WOULD follow the status tool link]
    - What would you expect to see if you select "Track claims, decision reviews, and applications”?
  - [If they would NOT follow the status tool link]
    - I'd love to get your feedback on an additional page today.
    - What would you expect to see if you select "Track claims, decision reviews, and applications”?
    - Please click on the link. 

### [CST home page] 
- Take some time to review this page and think out loud.
  - [IF THEY NEED PROMPTING]
    - How does this compare to what you expected to find?
  - [IF THEY FIND CHAMPVA CARD] Was that where you expected it to be? Why?
  - [IF THEY CAN’T FIND CHAMPVA CARD]
    - Where would you expect to find your CHAMPVA application?
    - Do you see where it says “In progress, Closed, All”? Would you try clicking each of those?
    - How was that experience?
  - What would have made it easier for you to find your CHAMPVA application? 

What would you do next? 
- [If they WOULD proceed] Okay, go ahead and click on the link to move forward in the prototype.
- [If they WOULD NOT proceed] For the scenario today, let's click on the Details link anyway.  

### [Complete application with an Ineligible applicant card] 
- Take a look at the page and tell me what you see.
  - What is the status of Jane’s application? John Doe Jr.’s?
- What would you do next, if anything? 

That’s the end of our scenarios for today. You can stop sharing your screen and then I’ll ask you a few more questions before we finish up. 

 
> [!NOTE]
> ### Things to watch for:
> - What do they expect to be included in the status tool based on the home page?
> - Do they think it makes sense to have their CHAMPVA application in the status tool? 




# Post-Task Interview - 5 minutes
- Can you tell me about your overall impression of this prototype?
- [If the participant is a current CHAMPVA beneficiary or applied in the past] How would you compare the post-application experience you just had to your previous experience after applying for CHAMPVA? Why?
- Now that you’ve seen the prototype, how would you like to be notified or find updates on your application?
- ~~Was there anything confusing or unexpected in this prototype?~~

For this next section, I'm going to read a series of 10 statements, and I would like you to rate how much you agree or disagree with each one on a scale from 1 to 5, where 1 means Strongly Disagree and 5 means Strongly Agree. There are no right or wrong answers we're interested in your honest reaction to the experience you just had.

  1. I think that I would like to use this website frequently.
  2. I found the website unnecessarily complex.
  3. I thought the website was easy to use.
  4. I think that I would need the support of a technical person to be able to use this website.
  5. I found the various functions in this website were well integrated.
  6. I thought there was too much inconsistency in this website.
  7. I would imagine that most people would learn to use this website very quickly.
  8. I found the website very cumbersome to use.
  9. I felt very confident using the website.
  10. I needed to learn a lot of things before I could get going with this website.

- Overall if you could wave a magic wand and change anything about the prototype or the overall experience after you submit an application for CHAMPVA, what would it be?
- Do the observers have any questions?
- Any questions for me?  

## Consent to use video clips

- I want to circle back and re-confirm that **you are comfortable if we were to share a video clip of this session with our VA partners?** Just to remind you, we will remove all information that could be used to identify you before sharing and will only share the videos with VA partners with the purpose of improving VA.gov and other digital experiences.
   - **If yes:** Is there any part of our discussion you would NOT want shared in a video clip?
 
   <mark>**[Record answer here]**</mark>


## Thank-You and Closing 

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans.

Thanks! Lastly, Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!


# Emergency Exit 🚨

In the rare case of an emergency during a session, be prepared with an [emergency exit strategy](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html#ResearchSafetyandEmergencyExitStrategies-Sampleexitstrategies). <mark>**Plan to include here at least one option, so its easy to find during a session. Take some time to practice so it feels more comfortable.**</mark>

---

## After You Save This Convo Guide ✅

- [x] Complete the YAML frontmatter at the top of this file using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)
- [x] Review alignment with your research plan tags
- [x] Update the last_modified date

### Sample Conversation Guide _(note: this link points to resources in the va.gov-team GitHub repo)_

- [Veteran ID Card Discovery Interview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-id-cards/research/discovery/discovery-conversation-guide.md)
