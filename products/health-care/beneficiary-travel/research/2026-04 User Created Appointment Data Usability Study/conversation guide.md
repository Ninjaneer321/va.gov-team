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

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

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

Thanks for joining us today! My name is **[NAME]** and **[NOTETAKER NAME]** is taking notes.
I also have a couple other colleagues in the Zoom waiting room who would like to observe and take notes. But before we get to them... 

Today we're going to talk about adding appointment information in order to file  for travel pay.

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
     
- *(If applicable)* **You'll be interacting with a prototype today.** This is a demo tool that may not function exactly the way you expect. Some areas of the prototype will be clickable, and some will not. <mark>**Since it's a demo, none of your actions will affect your VA information or benefits.**</mark>
  
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

# Section 1:  Warm-up Questions - 5 minutes

`Moderator: Before we look at our prototype, I’d like to start with a few questions about your experience with VA travel reimbursement.`


1. Do you use VA health care?
2. Have you filed for travel pay in the past?   
If yes: Tell me more about it.   
If no: Can you share more about why you haven’t filed?
3. If yes to 1: Which system did you use to file for travel pay? (VAHB, VA.gov, BTSSS)
4. If yes to 1: Are you familiar with “community care”? What does that phrase mean to you?
If no: Briefly explain that if VA can’t provide the healthcare you need, they sometimes approve you to go to other health care facilities in the community. These are called “community care” appointments. [This is important to explain to the participant so that they can understand the testing scenario we present to them below.]
5. If yes to 1: Have you filed for VA appointment(s) or community care appointment(s)?
6. If yes to 1:  Were the appointment(s) scheduled ahead of time, or walk-in appointments?
7. If the participant has filed for community care: Can you tell me more about your experience filing for community care?
8. If no to 1: If you were going to file for travel reimbursement today, where would you go or what would you do first?   


## Section 2: Entry-point navigation (5-10 minutes)

`Moderator: Now we’re going to take a look at the prototype. As a reminder, it’s a representation of the site, and some things will work like you'd expect, but other things won't be clickable. If you try to click something and it doesn't work, just let me know what you were trying to do, and I'll help us move forward.`   

`Here’s the scenario I’d like you to imagine:`
`Last week, you went to a community care appointment for your dermatologist. VA referred you here because the local facility doesn’t have a dermatology department. Now you’d like to file for travel pay for your appointment.`   

`In the chat, you’ll find a link to the prototype. It’s going to open on the VA.gov homepage. We’ll pretend that your name is Jordan, and you’re already logged in. Show me where you would click to file a travel claim for your recent appointment.` 

`Remember to think out loud as you go and tell me what you’re looking for or thinking about.`

> [!NOTE]
> ### Things to watch for:
> - 1. What navigation things do they look at first?
Do they use the main menu, account dropdown, links under the “Top pages” section, search, or something else? `Moderator: Can you tell me more about why you picked that?`   
> - 2. What language are they using as they navigate? Are they speaking about the claim or the appointment?   
> - 3. Which entry point do they land on?   

## Section 3: Primary usability testing (25-30 minutes)   
**Entry point: past appointments or travel claims list**

### Past appointments page
`Moderator: Let’s take a pause for just a moment before you click on anything else. Tell me about this page.`

1. What are you looking for?

_After participant reviews page_

`Moderator: Now let’s say you reviewed the list, but you didn’t see your dermatology appointment.'   

1. What would you click on or do next?
2. What do you expect to happen after you click on that?

### Claims list page   
`Moderator: Let’s take a pause for just a moment before you click on anything else. Tell me about this page.`   

1. What are you looking for?    
2. What do you see here that might help you with your task?
3. What would you click on or do next?   
- If participant decides to click “create claim” link first: What made you decide to click that?
- If participant decides to then click “past appointments,” see the above process and questions.
- If participant decides to then click “Go to BTSSS website,” explain that they can now file on VA.gov, and ask where they would expect to do this.   
4. What do you expect to happen after you click on that?

`Moderator: Okay, go ahead and continue your task.`   

> [!NOTE]
> #### Things to watch for:
> - 1. What do they notice first on the page? 
> - a. If it’s the past appointments page, are they able to locate the link at the bottom of the page?
> - b. If it’s the travel claims list page, do they notice the link to past appointments first or the link to file a claim first?
> - Are they able to navigate through all the text at the top of the page to find the text that’s relevant to them?
> - If they choose to create a claim first rather than view past appointments, what is their reasoning?
> - 2. Do they read instructional text aloud, ignore it, or paraphrase?

### Intro page   
`Moderator: Take a moment to look at this page, but don’t click on anything just yet. Is this what you expected?`   

1. What is the page telling you?
2. Based on what you’re reading, does it seem like this is the correct path for your scenario?
3. Is there anything here that gives you pause or makes you uncertain?
4. What do you think you need to do next?

> [!NOTE]
> #### Things to watch for:
> - 1. What content do they read versus scroll past on the page?   
> - 2. Do they notice the alert box? How do they respond to it?   
> - 3. Do they express any concern about this process?
> - 4. Do they seem to understand that this is for a specific scenario of missing appointments?

### Appointment information page <mark>Working note: May be split up further with facilities selection</mark>
`Moderator: Moderator: Go ahead and take some time to observe this page. Because this is a prototype, you won’t be able to actually input anything, so the fields will be prepopulated when you click on them. But it helps us if you speak out loud and pretend to fill out this form as you would normally.`   

#### Page sections   
**Facility selection**   
* What would you do if you couldn’t find your facility in this list?
* <mark>Working note: Designs still in progress, so additional questions may be added.</mark>

**Appointment type**   
* What do these “types” listed here mean to you?
* Do you know which kind you would choose?   

**Appointment name:**
* What would you put in this field?

**Did you attend your appointment? question:**
* Why do you think we’re asking for this information?

**Prior to submission:**   
* What do you think will happen once you continue?
* What do you think would happen if you left or went back a step? Would your information here be saved?   

_If earlier in the session, they indicated that they have filed for travel pay on community care appointment_
`You mentioned that you have filed for community care before. How do you typically recall or keep track  of your community care appointment information when filing for travel pay?`

> [!NOTE]
> #### Things to watch for:
> - 1. Do they read any of the intro text/helper text about contacting a travel clerk?
> - 2. Do they notice that the time selector has AM/PM, but no question about timezone?
> - 3. Is the hint text helpful or do participants still express confusion?

### Review page
`Moderator: Take a look at this page. What do you see here?`   
1. What is this page asking you to do?
2. What do you think the “edit” button does?
3. What do you expect to happen after you continue?
4. What do you think will happen to your information if you left this page?

`Moderator: Now I’d like to pause again for a minute and imagine a new scenario. Let’s pretend that this dermatology appointment was actually in VA’s system already, but you were in a hurry and just missed seeing it. So the appointment is there, but you just didn’t notice it.`   

1. What do you think will happen if you continue with this appointment information, even though it's already in the system?
2. Are you concerned about creating a duplicate appointment?

`Thank you for sharing that. Okay, let's return to our original scenario: the appointment really is not in your list. Go and continue with what you'd do next.`

> [!NOTE]
> #### Things to watch for:
> - 1. Do they notice the alert at the top?
> - 2. Do they understand that they won’t be able to edit the appointment information later? If so, how do they feel about that?
> - 3. Do they think their claim is filed after continuing or do they recognize there is more to do?
> - 4. Do users imagine that the system will check them or prevent them from creating duplicate appointments?

### Community care proof page
`Moderator: Take a look at this page and think aloud again. What is this page asking you to do?`    

1. What kind of document would you upload here?
2. _If the user has been to a community care appointment:_ Do you typically have this kind of document after a community care appointment?
3. What would you do if you didn’t have this type of documentation?   
4. <mark>Working note: If we're testing new language here, as well, we can add questions about the content.</mark>
5. _If they notice the hint text:_Do you have an concerns about what this is telling you?

`Moderator: Since this is a prototype, we won’t actually upload a document, but you can click on the box and imagine it was a file that you selected and added.`

<mark>Working note: We’re going to try to simulate this as best we can. Will revisit this section after we complete the prototype to see what we can ask.</mark> 
   
> [!NOTE]
> #### Things to watch for:
> - 1. Do they have past experiences to share about community care documentation?
> - 2. Do they notice the hint text about renaming the file?
> - 3. Do they interact with or notice  the “more info” component?

### Expense selection   
`Moderator: In this scenario, you just drove there and back from your home address. How would you continue to file a travel reimbursement claim from this page?`   

_Participant selects mileage_   

1. What do you expect to happen next?   

`Moderator: Go ahead and continue.'   

> [!NOTE]
> #### Things to watch for:
> - 1. Do they select mileage immediately?   
> - 2. Do they comment on any of the other expense types?   
> - 3. What do they notice about the language on this page?

### Mileage questions   
`Moderator: Go ahead and click to fill this out. As a reminder, in our pretend scenario, you just drove there and back from the address we have on file.`     

> [!NOTE]
> #### Things to watch for:
> - 1. Do they expand the “more info” component and have any questions about the language?

### Unsubmitted expenses/your in-progress claim   
`Moderator: Take a look at this page. What do you see here?`   

1. What do you think you need to do next?
2. What would you do if the appointment information looked incorrect or you noticed something that you need to change?
3. If you hit the “Sign the agreement” button, what do you expect will happen?   

> [!NOTE]
> #### Things to watch for:
> - 1. Does the user recognize the proof of attendance file as something they previously added?
> - 2. Does the user expect to be able to edit the appointment information as they would any of the other information section on this page?

### Confirmation page    
`Moderator: Now take a look at this page.`   

1. What is happening here? What does this page tell you?
2. Have you submitted your claim or is there more you need to do?
3. Does this page show you what you expect to see?
4. If you came back in a few days and wanted to track the status of your submission, where would you go to find it? _If time:_ Let’s go back to the home page and you can show us where you’d click.
5. Looking at this page, did you create an appointment, file a claim, or both?

> [!NOTE]
> #### Things to watch for:
> - 1. Do they notice the messaging in the alert?
> - 2. What do they think about the appointment not appearing in their past appointment list?
> - 3. Do they know where to navigate for updates?



## Section 4: Alternate entry-point evaluation (5-10 minutes)   
`Moderator: Thank you so much for walking through that with me! Now that you’ve filed through one path, let’s take a look at another way we could file. We’re going to go back to the VA.gov homepage so we can explore another path.`   

<mark>Working note: Path and language here still TBD; list the path moderator will follow or participant will be guided through</mark>

`Moderator: Here’s the other page where someone could start a travel claim.`

1. Could you see yourself taking this pathway? Why or why not?   
2. Does this path feel as natural to you as the path you took?   
3. What do you see here that could help you file a claim for your appointment?   
4. Is there anything confusing about this page or how we got here?   
5. If you had to file another community care claim tomorrow, which path would you take?   
6. What works well about having the entry point here? What doesn’t work well?   

> [!NOTE]
> ### Things to watch for:
> - 1. Can they identify the entry point on the alternative page?
> - 2. What reasoning do they provide for a preference?

## Section 4A: Comparative entry point assessment (5-10 minutes)   
`Moderator: Now that you’ve seen both pages, I’d like to show them to you side-by-side. Take a moment to look at both pages again.`   

1. What stands out to you? What do you notice?
2. Which page makes it clearer that you can file for an appointment that isn’t on your list?
3. If you could only pick one version, which one would you pick? Why would you pick that one?
4. Is there anything you’d change about the entry point on either page?  

> [!NOTE]
> ### Things to watch for:
> - 1. Is there a clear preference for one page over the other?
> - 2. Why does the user pick one version over the other?
> - 3. Does mental modal have a bearing on that preference - claim-centric vs appointment-centric thinking?

## Section 5: Wrap up / Post-task interview   
`Moderator: Moderator: Thank you so much for everything you’ve shared! We’re about to wrap up, so I have some final questions for you.`

1. If you had an appointment that wasn’t showing up on your list, how likely would you be to use this process to file for travel pay? On a scale of 1-5, where 1 is “not at all likely” and 5 is “very likely.”   
2. In your own words, can you explain what you did today, as if you were telling another Veteran about it?   
3. Is there anything that could make you more comfortable about using this process?   
4. Do you have any questions for me?   


## Consent to use video clips

- I want to circle back and re-confirm that **you are comfortable if we were to share a video clip of this session with our VA partners?** Just to remind you, we will remove all information that could be used to identify you before sharing and will only share the videos with VA partners with the purpose of improving VA.gov and other digital experiences.
   - **If yes:** Is there any part of our discussion you would NOT want shared in a video clip?
 
   <mark>**[Record answer here]**</mark>


## Thank-You and Closing - 1 minute

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
