---
title: "Conversation Guide for CDS My Workweek, Outlook Integration Testing, April 2026"
author: "Rosemary Rogers"
date_created: "2026-04-02"
last_modified: "2026-04-02"

# NEW: Core research metadata
team: "Clinical Decision Support (CDS)"
portfolio: "health"
product: "My Workweek"
research_phase: "usability"
research_method: "usability_test"

# NEW: Session details
session_duration: "60 minutes"
session_type: "remote_moderated"
participant_criteria: "VA healthcare providers (PCPs and emergency department clinicians) who use medical calculators"

# NEW: Related documents
related_research_plan: "products/health-care/clinical-decision-support/medical-calculators/research/2025-09-Calculator-Detail-Page-Line-Chart-Testing/research-plan.md"
related_prototype: "N/A"

tags:
  - "AUD-clinicians"
  - "AUD-providers"
  - "PRDT-medical-calculators"
  - "PRDT-cds-console"
  - "BNFT-health-care"
  - "DSC-line-chart"
  - "DSC-data-visualization"
  - "usability-testing"
  - "lab-results"
  - "HAS-BLED"
  - "clinical-workflows"
description: "Usability testing of line charts displaying lab trend data within medical calculator fields (HAS-BLED calculator), evaluating clinician comprehension of ALT/AST/AP, Bilirubin, and INR lab history for clinical decision-making."

# NEW: Compliance flags
recording_required: true
observer_support: true
consent_for_clips: true
---
# Conversation Guide for Testing Line Charts within Specific Calculator Fields

## Moderator logistics 📋✅
### 2-3 days before the session

`List and complete any project-specific setup tasks for this study below:`

- [x] Confirm prototype is working 
- [x] share session schedule for notetaker/observers


### Day of the session

> [!TIP]
> - Create a DM group in Slack for real-time feedback from observers.
> - Mute your Slack notifications.
> - Send out the Notetaker and Observer Guide

### Notetaker and Silent Obeserver Guide
- Be a silent observer. If you have a question for the participant, ask the facilitator via a Slack DM and they'll accommodate it if appropriate.
- If you can notetake, please do! It helps researchers a lot to see what you captured. There’s a note taking template in this Mural with screenshots. If you find it easier to write your notes or use a word doc, that's fine too! If you take running notes, please be sure to make a clear reference to the screen in question or the scenario being mentioned.
- Write what you hear and see as much as possible. For some it can be easier to write in first person, as it is said, so that you don't need to paraphrase anything. Try to capture what they said without adding your own interpretation of what they meant. E.g. "I'm not sure about this checkbox" does not equal "Doesn't understand checkbox."
- Share your notes back with the facilitator via Slack if taken outside of the mural. Do not include ANY PII in this chat.
- For design testing, try to write down things that aren't said—for instance, when someone misunderstood some copy or clicked the wrong element. It helps us figure out what needs to be revisited.
- Share a few raw impressions with the facilitator via Slack or in the notetaking document after the interview is done, if possible. It helps with synthesis!

**Protecting PII**
- It's important to protect the privacy of our VHA staff participants AND any Veterans. 
- Do not include the participants name or other identifiers -- such as a very specific title that can be easy to identify them with in your notes. Instead, use a general role description, such as "primary care provider" and "also works in informatics"
- In the event a participant needs to share their screen or a tool with an actual patient (since test patients don't always work to show how the tool functions), stop the recording before they share. DO NOT RECORD THE PARTICIPANT'S SCREEN IF THEY ARE SHOWING A REAL PATIENT.


### Starting the session

> [!TIP]
> - In the Attendees section, make sure everyone except the participant is on mute.
> - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
> - Check your [screensharing setup] and share permissions for participants.
> - When the participant is ready, begin the session with the following intro*

# Intro - 5 minutes

Thanks for joining us today! My name is **[NAME]** and **[NOTETAKER NAME]** & **[NOTETAKER NAME]** is/are here to help with note taking and observing the session. Is that OK?
> [!TIP]
> - Then, ask the notetaker and observers to **give a brief, camera-on introduction, like their first name and position with VA.gov.** (This is meant to humanize the interaction of observation for the participant.)
> - Once complete, ask the notetaker and observers to turn off their cameras for the remainder of the session to save bandwidth

Today we're going to talk about [insert topic]

Before we start, I have a few things that I want to go over with you:

- **This entire session should take about 60 minutes.** I want to make sure I leave some space for your questions too, so I may occasionally prompt you with the next question or topic.
  
- **In this session, we want to hear your honest opinions.** There are no right or wrong answers; we are not testing your knowledge or abilities. I welcome any and all of your feedback, and I won't be offended by any opinions you express.
  
- **Your participation in this session is completely voluntary.** You do not have to participate if you don't want to. Your responses will remain confidential and your anonymity protected. If you would like to stop the session or do not want to answer a question for any reason at any time, that's no problem. Please let me know.
       
- *(If applicable)* **You'll be interacting with a prototype today.** This is a demo tool that may not function exactly the way you expect. Some areas of the prototype will be clickable, and some will not. 
  
- **Are you comfortable if I record my screen and audio as we talk today?** We use the recordings to confirm that we have captured your opinions accurately. After we complete the analysis, the recordings are destroyed, and none of your comments will be attributed to you directly. We either report findings out in groups (i.e., 5 out of 10 participants said this), or if we want to quote you directly, we use a general role, like primary care physiciant or give you a participant ID, like P7. A general role or care setting helps provide a lens for the quote.
  
   - **Knowing that, are you comfortable if I record my screen and audio as we talk today?**

   <mark>**[Record answer here]**</mark>
     
   - If yes: **Once I start recording, I am going to confirm that you are okay with me recording this session once more.**

➡️ **Start recording.**

> [!TIP]
> After you start the recording, click the Show captions (CC) button to enable transcription for the recording.

- **I have started recording.** I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

 <mark>**[Record answer here]**</mark>
 

# Warm-up Questions (Optional) - 5 minutes

Before we look at [the prototype/etc], I'd like to learn a little bit about you. 

> [!TIP]
> - These are placeholder questions, but work well across a lot of situations. Adjust as you need for your study.
> - If it's a prior participant, consider skipping or modifying the intro questions or following up on something you previously learned from them.

1. How are you doing today?
2. Can you tell me a little bit about your role and your day-to-day responsibilities?
3. How often do you use MWW?
4. Outside of Outlook and My Workweek do you use any other applications and/or tools to view your schedule?
   - If yes – what are they?
   - What do you use each tool for?  
5. When do you use each tool?
6. How do you currently view your schedules across different tools today?
7. What challenges, if any, do you encounter when viewing your schedules across multiples tools?
8. Is there anything you particularly find useful in each tool?
9. Do you have an ideal vision for how you’d like to view your schedule information?
   - (probe if needed) for example, would it be helpful to have a consolidated view of your schedules in one place? 

## Prototype Intro - Moderator Controls:
Next we’re going to look at a prototype of the [insert thing]. There are a few things I’d like you to keep in mind: 

- I’ll describe a scenario and then give you a set of tasks to complete using the prototype.
- This is a prototype and not the real application. [Non-coded interactive prototype: It closely matches the real application, but some things may not work as expected.] You may see placeholder information that doesn't match your own situation exactly and that's ok.
- I'm going to share my screen and you can tell me what to do, what to click, where to scroll. 
- There are questions that will ask to input information. When we get to these points, you can tell me what you would input, and then we'll move on. 
- As you're going through the prototype, please think aloud. I'd like you to say whatever comes into your mind. I'm interested in what's grabbing your attention on the screen, what questions you have, and your general thoughts as you review a page. 
- If at any point you feel uncomfortable or confused, please let me know. We are testing the designs and gathering feedback and not testing you. We’re here to support and learn from you. 
- If you have any questions as we go along, please feel free to ask me. I may not be able to answer them right away since we’re interested in how people would navigate this application without a helper around. But if you still have any questions when we’re done, I’ll try to answer them then.
- And please feel free to be as honest as possible – it won’t hurt our feelings. 


## First Task: Add Outlook Calendar - 15 minutes
- Now, imagine you want to view your Outlook and MWW schedules in one place.
  - How would you envision bringing your schedules together?
    - (if required) Where would you expect to access this combined schedule?
    - (if required) For example - would it be within Outlook or MWW?
    - Do you have a preference for where this combined schedule exists – why?
    -  If you were to view your My Workweek schedule within Outlook, what information would be helpful to see?
    -   What information would not be helpful to include?
    -   Have you ever added your Outlook calendar to any other applications?
       - How did you do so?
       - What purpose was this utilized for? 
- (Share prototype link) For the sake of this scenario – imagine you want to view your Outlook Calendar within My Workweek.
  - How would you go about doing so?
    - (Feel free to click around and walk me through your thoughts as you explore how to do so)
    - (expected behavior – open hamburger menu on top right corner)
  - What would you do next to add your calendar?
  - Is it easy to understand what you need to do to retrieve the ICS link?
  - Any thoughts on the Helper text?
  - Is there anything else that would make it easier for you to understand how to access the ICS link?
  - Is “ICS link” something that is commonly used and/or widely understood? 
- Ok, for this scenario imagine that you’ve copied the ICS link and pasted it in. Now go ahead and add your calendar.
  - What are your thoughts on the experience of adding your calendar?
  - (Once a calendar has been added) is it easy to understand that your Outlook calendar has been added?
- Overall was anything particularly challenging here?
- Anything you think would be helpful to include here? 

> [!NOTE]
> ### Things to watch for:
> - Does the participant understand meaning of abnormal liver function?
> - Does the participant gravitate to finding the required data in the EHR (instead of in the product)?
> - Does the participant notice the link to the lab history?


## Second Task: Outlook Calendar General feedback - 15 minutes
- Go ahead and view your schedule for me.
  - What are your initial thoughts of this view?
  - Anything that really stands out to you?
    - (if required) Any thoughts on the overall look and feel of the calendar?
    - Can you tell me how many Outlook appointments you have this week?  
  - What are your thoughts on how your Outlook appointment are displayed?
  - Do you often have clinical appointments and Outlook appointments scheduled at the same time?
  - Can you tell me what is scheduled on Monday from 10 – 11am?
    - Which patient are you seeing at that time?
    - What Outlook meeting do you have and who sent you the invite?
  - What are your thoughts on the experience of seeing more information?
  - Was anything confusing or challenging?
  - Can you tell me what is scheduled on your calendar for Thursday from 10:30 to 11:30?
    - Which patient are you seeing?
    - What Teams meeting do you have and who sent you the invite? 
    - What are your thoughts on that experience?
    - Was it easy or difficult to navigate to the information? 
  - What are your thoughts on viewing the Outlook appointment information on Monday vs Thursday?
    - Do you have a preference for either experience? If yes, why?
  - Could you tell me what appointments you have on Tuesday from 12 – 12:30?
    - Was it easy to understand that you had two Outlook appointments starting at the same time?  
  - Imagine you are on My Workweek and its Monday 11:30 and you see here that you have a Teams meeting.
    - What, if anything, would you do next?
    - Are there any action you would like to take from My Workweek?
  - Is your calendar Blocked on MWW due to something being scheduled on Outlook?
    - If yes – How common is this?
    - If not – what else could blocked times represent? 
  - Do you have any concerns about viewing your Outlook calendar within My Workweek?
  - Overall was anything confusing or challenging? 

> [!NOTE]
> ### Things to watch for:
> - Does the participant understand meaning of the different labs?
> - Does the participant mention needing reference lines?
> - Does the participant mention the amount of data or the time period


## Third Task:Hide Outlook Calendar - 5 minutes

- Would you ever need or want to hide your outlook calendar in this view?
  - If yes/ no – why?
  - In What context would it be useful to do so? 
- Please go ahead and hide the outlook calendar for me
  - (Expected behavior user goes to settings > Hide outlook)
  - What are your thoughts on that experience?
  - Did anything seem confusing?
    - Was that easy to find?  
      
> [!NOTE]
> ### Things to watch for:
> - Does the know to hover?
> - Does the participant mention seeing data in a different format?

## Fourth Task: Remove Outlook Calendar - 5 minutes
- Would you ever remove an integrated outlook calendar from your MWW?
  - If yes/no – why? In what context?
- Go ahead and remove the outlook calendar for me please.  
  - (expected behavior user goes to Menu > Remove calendar) 
  - Any thoughts on this experience?  
- Anything that seemed confusing or challenging? 
- If I hadn't asked you to add your Outlook calendar, do you think you would've discovered this on your own?
  - Why or why not?  
  - What would have helped you notice the existence of this feature sooner, if anything? 

> [!NOTE]
> ### Things to watch for:
> - Does the participant understand meaning of the different labs?
> - Does the participant mention needing reference lines?
> - Does the participant mention the amount of data or the time period

## Fifth Task: Adding more than one Outlook Calendar - 5 minutes

- Would you ever need to add more than one Outlook calendar to your MWW schedule?  
  - Why? How would that be helpful for you?  
- Would you need or want to include other providers Outlook calendars, outside of your own, to My Workweek?   
  - Why? How would that be helpful? 
- What are you trying to understand or achieve in viewing multiple calendars?  

> [!NOTE]
> ### Things to watch for:
> - Does the participant understand meaning of labile INR?
> - Does the participant gravitate to finding the required data in the EHR (instead of in the product)?
> - Does the participant notice the link to the lab history?


# Post-Task Interview - 5 minutes

- Overall, did anything you've interacted with today seem particularly confusing or challenging?
- Overall, would you say having the ability to import your Outlook calendar into My Workweek is – useful, neutral or not useful.
- Based on your experience of using MWW today how important would this enhancement be for you in comparison to other pain points or improvements you might want us to work on - Important, neutral, not important.  
- Before we end, do you have any questions for me?
- Any last thoughts or feedback we didn't get to discuss already?

## Thank-You and Closing - X minutes

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on these tools to better meet clinician needs.

Thanks! Lastly, would you be interested in participating in another study like this for [this product] or [another product on the CDS console]? And do you have other colleagues who you think might be interested in participating in sessions like this? Would you be willing to share a link for them to sign-up?

Thank you so much again, and enjoy the rest of your day!


# Emergency Exit 🚨

In the rare case of an emergency during a session, be prepared with an [emergency exit strategy](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html#ResearchSafetyandEmergencyExitStrategies-Sampleexitstrategies). <mark>**Plan to include here at least one option, so its easy to find during a session. Take some time to practice so it feels more comfortable.**</mark>

---


