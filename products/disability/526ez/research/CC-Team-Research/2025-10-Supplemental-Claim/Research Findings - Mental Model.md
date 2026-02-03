---
title: "[2025-10 Supplemental Claims Design Directions] Research Findings - Mental Model"
product: "Online Form 526 (Disability Claim) - Conditions Section, Supplemental Claims Flow"
team: "Conditions Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-02-03"
researchers:
  - "Clara Fritz"
  - "Kim Ladin"
research_goals:
  - "Explore Veterans’ mental models and language around disabilities, claims, and appeals to inform how we approach organizing the conditions flow.."
methodology:
  - "Semi-structured, exploratory interviews and task-based usability testing comparing two prototypes."
devices_used:
    desktop: 7
    tablet: 2
    smartphone: 1
    assistive_technology: 0
participants_total: 10
demographics:
  veterans: 10
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 2
    "35-44": 0
    "45-54": 2
    "55-64": 1
    "65+": 5
    unknown: 0
  education:
    high_school: 5
    some_college: 0
    associates: 2
    bachelors: 2
    masters: 1
    doctorate: 0
    unknown: 0
  location:
    urban: 7
    rural: 3
    unknown: 0
  race:
    white: 5
    black: 4
    hispanic: 0
    biracial: 1
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
  - "Veterans approach benefits filing as a narrative case, not a procedural task."
  - "Veterans must translate VA terminology to navigate the process."
  - "Veterans see VA as both adversary and partner."
  # etc.
design_implications:
  - "Focus on the Veteran's experience rather than procedural details."
  - "Center on their health conditions and filing intent rather than claim types."
  - "Help them tell their story (even if the details are sometimes more than VA needs to adjudicate claims)."
  - "Make it easy to provide documentation to prove their claims."
  - "Use terms that are familiar to Veterans rather than narrow technical terms."
further_research_needed:
  - "Re-analyzing existing research - It may be possible to re-analyze the transcripts or recordings from previous studies to look for the themes uncovered here."
  - "Expanding the sample size - Conducting a similar study with more participants would increase confidence in applying these findings to the broader Veteran population and reveal potential variations across different Veteran subgroups."
underserved_groups_missing:
  - "While we recruited for Veterans with other than honorable discharge, and had sessions scheduled with them, both either cancelled beforehand or were a no show."
  - "Additionally, because we tested in Figma we were not able to test with AT users."
synthesis_tools_used:
  - "[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1763754263362/8090932e8c64bf7b1ce609df56a7f1ab1170e1ed): post-session debrief notes with observers, screen-specific feedback mapping, task-specific success/failure tracking, affinity mapping, analysis and synthesis, mental model mind maps"
  - "[Spreadsheet](https://docs.google.com/spreadsheets/d/1Wo8TDMxRVE3M7Wtc_HWiL0rsD8-S3EbLbRYAxNKONt0/edit?gid=1109817157#gid=1109817157): timestampled notes collection during sessions "
---


# 2025-10 Supplemental Claims Design Directions Research Findings - Mental Model 

**Office of the CTO - Digital Experience (OCTO-DE), Online Form 526 (Disability Claim) - Conditions Section, Supplemental Claims Flow, Conditions Teame**

**Date:** 02/03/2026

**Contacts:** [Clara Fritz](https://github.com/maddiefritz), [Kim Ladin](https://github.com/KimLadin)

**Research Readout (PDF) - forthcoming**  

**Jump to:**
- [Background](#user-content-background)
- [Research goal](#user-content-research-goal)
- [Methodology](#user-content-methodology)
- [Key findings](#user-content-key-findings)
- [Additional learnings](#user-content-additional-learnings)
- [Design implications](#user-content-design-implications)
- [Recommendations for further research](#user-content-recommendations-for-further-research)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Background
As part of our work to incorporate Supplemental Claims into the online 526 disability compensation application, our team conducted user research sessions with Veterans. These sessions had two goals: concept/usability testing to evaluate design directions, and open-ended interviews to understand how Veterans think about disability claims.

This report is a companion to our [usability research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Research%20Findings%20-%20Usability.md) (which covers the concept testing results) and focuses specifically on Veterans' mental models around disability claims. While these insights directly inform our work on the Conditions flow, we hope they'll also be valuable to other teams across the VA working on the disability benefits user experience.

## Research Goal
Explore Veterans’ mental models and language around disabilities, claims, and appeals to inform how we approach organizing the conditions flow.

### Research Questions
- How are conditions and their various statuses (particularly in relation to the VA) perceived?
- How do Veterans think about conditions that have been granted v. those that have been denied?
   - What about conditions that were granted at 0%?
- How do Veterans think about their conditions in terms of causality and relation to military service (e.g. service connection, presumption)
   - Do Veterans think of secondary conditions differently from conditions that are directly service-connected or aggravated?
- Is there a perceived order in which claims should be filed, and if yes, what is that order and what are its origins?
- How do Veterans think about challenging a VA decision? What words do they use?

## Methodology 

### Testing structure
Our methodology combined semi-structured, exploratory interviews with task-based usability testing to compare two different prototypes. In the exploratory section, we asked Veterans to tell us about their experience with VA disability claims. We then asked Veterans to share their screens and think aloud as they filled out a section of the online 526 application. The scenarios focused on adding several different types of conditions (new, rated, and denied) to a disability claim. 

Sessions were 75 minutes and conducted over Zoom. We spent 10-20 minutes on the exploratory interview, then switched to prototype testing to evaluate design concepts. Most of the information about mental models comes from the exploratory section, but we learned more as Veterans interacted with the prototypes.

### Who we interviewed
We interviewed 10 participants, but this report focuses primarily on 7 of them. Of the remaining 3 participants, 1 did not have time for the interview portion of the research, and 2 serve as advisors for Veterans’ organizations. Since the advisers are very familiar with VA processes, we excluded them from the mental model analysis. We did, however, include their expert opinions about Veteran understanding and language. 

#### Sample skew
This sample (the 7 non-adviser participants) is similar to the overall Veteran population in:
- Race/ethnicity mix - roughly equivalent
- Age distribution - roughly equivalent
- Educational attainment - this sample has slightly lower attainment than the overall population
- Overall disability rating - roughly equivalent to the population of Veterans who have a disability rating.

But the sample is very different from the overall Veteran population in:
- Gender - This sample has a far greater proportion of women (71% vs. 11% for the actual Veteran population)
- Cognitive disabilities - We did not specifically recruit for cognitive disability or assistive technology use, so these groups are not represented in this study.

When interpreting this report, it’s important to remember that this is a small sample of the large, diverse Veteran population. Given the consistency of the core findings across participants, we believe these findings provide useful directional signals about Veterans’ mental models and language. We recommend further research to validate and expand on the findings.

### Location and device
Sessions were conducted remotely, over Zoom. Participants joined from a computer, tablet, or smartphone.

## Key Findings

1. [Veterans approach benefits filing as a narrative case, not a procedural task.](#user-content-finding-1-veterans-approach-benefits-filing-as-a-narrative-case-not-a-procedural-task)
2. [Veterans must translate VA terminology to navigate the process.](#user-content-finding-2-veterans-must-translate-va-terminology-to-navigate-the-process)
3. [Veterans see VA as both adversary and partner.](#user-content-finding-3-veterans-see-va-as-both-adversary-and-partner)

## Details of Findings 

### Finding 1: Veterans approach benefits filing as a narrative case, not a procedural task.
In the first part of the research sessions, we asked participants to describe their experiences getting VA disability benefits. Throughout the interviews, these Veterans described their experience filing for disability benefits like a story with four major parts: 
- My health problems
- Why they happened
- What I did to get benefits
- The result: “My percentage”

Many began by describing what happened to them at their departure from military service. They outlined their health status at service separation, the guidance they received about VA benefits, and the proof they had gathered to support their claim. As discussions continued, they shared detailed stories about how their conditions and disabilities were actively affecting day-to-day life. 

- _"I got out of the military and had been given the heads up by my military doctor that I should get checked out by VA. I'd had medical problems in service…. there was a veteran service group that ushered me around through the different places… helped me get my paperwork and records that I needed. I had a fairly smooth process comparing it to most other people. A lot of people don't go to medical and get things documented when they have injuries or things like that. Because I had such a severe illness, and was forced into hospital, there was mountains of paperwork. There was no option of not applying for disability." **(P3)**_
- _“First time [applying for benefits] was after getting boarded out of the military - I  came out at an automatic 40%. I had a screwed up back surgery at age 25 and have had 3 [more] back surgeries but after the third one was when I got 60%. I got denied many times.” **(P4)**_
- _“When I got debriefed when I got out, and I told them about my knees and my hearing, I got chewed out - ‘how dare you consider filing for benefits’ ...I explained all that and still got rejected.” **(P13)**_

In contrast, the 526EZ form is perceived as a sequence of procedural steps that, while reflective of VA policy and procedure, require users to translate their intent (get disability benefits), which is grounded in their personal narrative, into VA’s administrative structure. Veterans have to comply with rules that are not obvious from their lived experiences (e.g. when to file a Claim for Increase vs. a Supplemental Claim). 

Due to this conceptual mismatch when completing the tasks inherent in the 526EZ, participants often:
- Hesitated
- Collapsed distinctions
   - There were a few instances of this, but the most common were (1) the intent in filing either a Supplemental Claim or a Claim for Increase was the same - “trying to get a higher rating;” and (2) conditions were often spoken about as if they were individual claims (“I’m filing a claim for my knee” vs. “I’m adding a condition”).
- Relied on guesswork
- Expressed anxiety about making incorrect selections

#### Experiences are shared as narratives
Because participants consistently framed their experiences as narratives rather than procedural descriptions, we were able to analyze these stories to understand how Veterans think and talk about applying for disability benefits. Across sessions, the same elements of their story emerged with a consistent set of concerns:

1. My health problems\
   a. My **current health problems** and how they affect my daily life
3. What caused them\
   a. The **in-service conditions or events** that caused these problems (and why I deserve to get benefits)
4. What I did to get benefits\
   a. The turning point when **I decided to file**\
   b. The **evidence** I provided\
   c. The **people/organizations** who supported me
5. The result: "My percentage\
   a. The **overall disability rating** the VA assigned me (and the rating I hoped to have)

Notably, beyond describing their service experiences and resulting conditions, participants almost always referenced their disability rating, typically calling it “my percentage” or citing the number itself. They discussed their reactions to the ratings they received and, for many, their subsequent efforts to secure higher ratings. For those who felt their initial rating was inadequate, the struggle to obtain a rating increase was often described in emotionally charged terms. Multiple participants recounted extended campaigns involving examinations, documentation gathering and submission, attempts to decipher VA requirements, and encouragement from family members, physicians, or Veterans Service Organization (VSO) representatives to continue pursuing their claims.

#### The end goal drives their efforts
What dominated participants’ narratives was their goal - achieving a disability rating they considered fair - and the obstacles and frustrations they encountered in pursuit of that goal. The specifics of Supplemental Claims, Higher-level Reviews, or Board Appeals rarely entered the discussion except as vaguely understood steps in a prolonged effort. 

- Claim intent was described as “get an increase or a higher rating” (outcome), not as choosing a particular claim path.
   - _“Seems the same, just worded differently. For both [Claim for Increase and Supplemental Claim], **you’re trying to get an increase**.” **(P1)**_
   - _“I'm doing both...**my condition has gotten worse so I'm applying for an increase, and I'm appealing my previous rating because I also want an increase**.” **(P13)**_
- Participants treat denied conditions pathways as “try again with proof,” not “file a Supplemental Claim.”
   - _“If I have **all the proper docs**, I could continue to **file this claim again**.” **(P1)**_
   - _“The other one, I'm disagreeing with the previous rating because I think **they didn't rate me high enough to begin with**.” **(P8)**_

After participants described their own experiences, we posed a different question designed to surface their conceptual understanding of the disability benefits system: "How would you explain to a young Veteran how to get disability benefits?"

#### Procedural details are rarely mentioned
Participants’ responses revealed where they believe the critical work lies: almost none discussed the procedural steps of submitting an application. Instead, they emphasized finding knowledgeable support (VSOs, VA staff, or Internet sources), systematically collecting medical evidence and service records, and maintaining persistence in the face of denials or inadequate ratings. In essence, they articulated a theory of success centered on preparation, advocacy, and determination rather than on navigating specific VA processes.

- _“Most importantly, grab all your paperwork. I'm sure they have electronic files now. Get copies of everything. Go down to the VA, plan on spending the whole day there. Take your time, try not to get frustrated. It's a slow process, nothing goes quickly. If it doesn't go the first time, you can maybe find a different angle. At the VA they usually have helpful people there. Find the claims office.” **(P3)**_
- _“You could either go to the VSO here, they'd walk you through everything. Or you could go to the VA hospital. They have a patient advocate, they'll refer you to someone to walk you through the entire process.” **(P8)**_

Throughout these accounts, VA procedural details remained peripheral - participants had remarkably little to say about the mechanics of filing claims. When participants did mention specifics about the application process, they were usually tied to a specific friction point, such as a technical issue or a challenge related to a Compensation and Pension (C&P) exam. Often, they focused on the people who assisted them, typically VSO representatives or VA staff, treating and perceiving these helpers as essential mediators of an opaque system. 

### Finding 2: Veterans must translate VA terminology to navigate the process.
We also wanted to learn what words Veterans use to describe different aspects of the disability benefits process, and what terms are problematic. As recommended in the Usability Research Findings [Next Steps section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Research%20Findings%20-%20Usability.md#next-steps), aligning form content with how Veterans actually interpret and use language will likely have considerable positive impacts. Participants consistently described their actions in plain, goal-oriented terms: “getting an increase,” “trying again,” or “adding more evidence,” rather than using VA terminology (e.g.: “decision review,” “claim for increase,” “supplemental claim,” etc.). When interface language aligned with perceived intent (e.g., clearly signaling why a path exists or what action it enables), participants felt more confident in their decision-making. When it did not, they were forced to translate VA verbiage to align with their own mental models, increasing confusion, hesitation, and misclassification.

| How Veterans describe things | How VA describes things|
| --- | --- |
| _Appeal a VA decision_ |
| Reapply | Request a decision review or appeal |

[table to be completed later]

#### Literal interpretations of terms
Participants consistently interpreted labels literally, which led to hesitation, misclassification, and avoidance throughout the form. Given that the distinction between Claims for Increase and Supplemental Claims is already complex, this literal reading further contributed to participants’ lack of clarity.

Specifically, “Add a condition” language was cause for confusion and created a mismatch between user intent and the system’s framing:
- _"I don't know that a regular person would know to add another condition - 'i'm already rated for migraines, i don't want to add that" **(P12, Adviser)**_
- _“Well this is confusing because am I adding a condition I've never claimed or am I addressing another condition that I have a claim for?" **(P13)**_
- Q: What does add a condition mean to you? A: _“I have a brand new one that I need.” **(P4)**_
- _“I would look at these and go, oh, okay, well, I'm already rated on these. So if I need to add a new one, it needs to be a new part of my body that I have a problem with.” **(P4)**_

And hint text on the “Date worsened” screen was interpreted literally by 2 participants:
- _“Why does it say back pain? I don’t have back pain.” **(P4)**_
- _“I would enter the date it’s telling me. [referring to example date in the hint text: December 1, 2020]” **(P7)**_

| <img width="338" height="331" alt="Screenshot 2026-02-03 at 11 15 15" src="https://github.com/user-attachments/assets/3be96367-ce1a-446c-93e5-0869cc3d8de1" /> |
|---|

#### “Appeal” is somewhat familiar, “Supplemental Claim” is not 
When discussing opportunities for disagreeing with disability ratings, Veterans relied on plain-language descriptions rather than formal VA claim terms. “Appeal” was used with some frequency, but participants were even more likely to use “re-applying,” “re-filing,” or similar language, particularly in the context of adding a denied condition to their current claim:

- _“When you're applying for a new one [claim], the VA has to get all your docs from doctors and you have to start all over again. Whereas if you're **appealing**, you just add new information. They're kinda the same thing to me.” **(P4)**_
- _“I thought the Edit button would allow me to **re-file** for asthma.” **(P5)**_
- _“I'm **appealing** my previous rating [...] that was my intent from the get-go." **(P8)**_
- _“...about a year ago I went to the VA locally and they had a female speaker talking about things you can do… and I went up to her after the meeting and asked if I should **re-file**.” **(P13)**_

And while “Supplemental Claim” is not a naturally understood label, participants were able to understand the reason for a Supplemental Claim better than the term itself.
- Participants had their own interpretations of the term “Supplemental Claim,” but these rarely matched VA’s meaning. Some had heard the term in a different context and understood it as “extra” or “optional.” Another participant interpreted it as adding new conditions to an older claim, which would, they feared, cause their whole claim to restart.
   - _“I don’t get supplemental anything. I’m 100% disabled. There’s nothing supplemental in my life. Appeal is way more clear than ‘supplemental claim.’” **(P4)**_
   - _“Like supplemental vitamins? Like something you want to add to that claim.” **(P13)**_
   - _“But if I do that, I start the process from day 1 and lose all that time from when your first part was being evaluated." **(P7)**_
- When presented with an explanation of Supplemental Claims for denied conditions, participants understood them as “try again with proof,” not as a distinct claim category. But some participants were able to discern the specific intent behind a Supplemental Claim.
   - _“I’m trying to re-claim a condition that was denied before.” **(P1)**_
   - _“I can add more evidence if I disagree.” **(P3)**_

We interviewed two people who served as Veteran advisors through a VSO (though not as full-time staff). They emphasized the importance of simple language and raised flags about using the term “Supplemental Claim.”
- _“Vets don’t know the term ‘Supplemental.’ In their mind, they’re thinking they’re just going to file a claim. They just know that they were denied before.” **(P12, Adviser)**_

#### Conditions and claims
There is a very permeable border between the concepts of a “condition” and a “claim” when Veterans talk aloud in the 526 form. Some referred to the separate conditions they’d added to the claim as individual claims, while others referred to a condition they hadn’t claimed before as “a new one.”

While not a general finding, one participant explicitly noticed that on the “Add a condition” screen, both “condition” and “disability” are used and found that confusing:
- _"To me 'disability' is saying I'm incapable of doing certain things… is it because things [conditions] that the VA hasn't approved aren't perceived as limiting you in some way?" **(P10)**_

### Finding 3: Veterans see VA as both adversary and partner.
Some participants expressed worries about the process; VA becomes an adversary when perceived as a **claims/benefits bureaucracy**. A mismatch between Veterans’ expectations and VA requirements can deepen the lack of trust.
- _“I’m thinking, ‘what do I select that the VA will actually listen to.’” **(P4)**_
- _“I’m afraid to [file a claim for increase]. I’m told they have up to five years to yank your disability from you. I’m happy that this happened in the 70s and I got my first check in December of last year [2024] …The psychiatrist said I needed 100% and that I should think about refiling, but I haven’t pursued it…I’m intimidated.” **(P13)**_

It’s worth noting that VA as a **healthcare provider** is often viewed positively. Participants hold both perspectives simultaneously, and can be both appreciative and distrustful.
- _“My disability rating is 80% but I get 100% of my medical care through VA. I have no copays, there’s nothing they don’t pay for. [when asked about their disability rating:] It seems very inconsistent. There doesn’t seem to be any rhyme or reason. My individual disabilities add up to more than 100% but you still get 80%. I have no clue. I don’t understand it.” **(P8)**_
- _“It [applying for disability benefits] was an ok experience. It wasn’t what I was expecting, so it wasn’t comfortable. [when asked how they’d explain the disability benefits process to a young Veteran:] Part of the reason why I went to the VA is to take advantage of something that, you know, is rightfully a benefit. And, to me, the easiest way is to go right into a VA facility, whether it’s a clinic, hospital, whatever kind. I have never run into a rude person at mine; it’s very helpful, full of resources, a great, great facility and I’m very happy that I’m involved with them.” **(P5)**_

## Additional learnings
The previous section described the primary findings that emerged from a thematic analysis of mental models and language. The next section outlines additional learnings related to more specific research questions.

### 4. Overall, Veterans have a big-picture view of their disability situation, rather than a granular view distinguishing among procedural statuses. 
At top of mind, they get "a percentage" from the VA – their overall disability rating. Beneath that are their individual health conditions related to military service. 
- Some the VA has approved, and some they've denied.
- Some decisions they agree with, and some they don’t. In this regard, Veterans tend to talk about denied conditions in the same way as granted conditions that they think are rated too low.
- The other status that is mentioned is that of waiting or pending, possibly _"before a judge" **(P7)**._

### 5. There isn’t a crisp delineation between granted vs. denied conditions.
This distinction is blurry because having a health condition is so much more salient to the Veteran than whether the VA has approved it or not. 

Conditions that were denied are talked about in the same way as conditions that were granted but at a lower percentage than the Veteran thinks is right.
- Veterans’ outcome-driven persistence comes into play here: “...there's been a lot of stuff that's been denied and you just have to keep at it until they accept it.” (P7)
- One adviser mentioned that _“I think they [Veterans] attach themselves to the word ‘denial.’” **(P12)**_

Veterans said they may not recall every condition they’ve applied for, especially those that were denied.

### 6. 0% ratings made no sense to the people we asked. 
Participants were just as likely to interpret a 0% rating as not service-connected as they were to interpret it as service-connected but not severe enough to qualify for compensation. One participant said such ratings are “BS,” (P8) and another, an adviser, said:
- _“I mean, countless times, people will get their decision letter and say ‘Hey, they denied everything.’ I'll look, and [say] ‘No, you were granted. Zeros are good. Zero is a grant, but not to the degree it's compensable for you.’ Because we are facilitators and I'm an authorized signer, I try to focus on the positives - "your kid can go to college for free with 0%".  Zeros are good. VA acknowledges the condition is because of your service. You can only go up from zero.” **(P12)**_

### 7. Veterans are usually keenly aware of how their conditions were caused by their military service; they speak about the service relationship in great narrative detail.
But some Veterans have a disability that no one knows the actual causality for. One such Veteran explained that _"the way the VA looks at it, if you were fine when you came in and you're messed up when you get out, it's considered the military's fault." **(P3)**_

### 8. Veterans recognized the idea of secondary conditions, but their understanding was limited.
When asked about the concept of a secondary condition, several Veterans could relate it to something in their own health situation. We don't have enough information to further characterize their thinking.

### 9. There is no perceived order in which claims should be filed.
These participants were fairly vague on specific disability claims processes. The few who'd been through an appeal had either done so of their own accord or with external help, usually a VSO. Most of those who’d pursued an appeal had some concept of a regular claim vs. an appeal, but didn't mention different appeal lanes.

### 10. Veterans use a mix of plain language words when describing how they’d challenge a VA decision.
The most common terms used the concept of re-doing a claim - "re-file," "re-claim," "re-apply," "re-open," "file again," "claim again." After those, "appeal" was the most common term, and the two advisors we spoke with said "appeal" was a widely understood term. For additional quotes, see the section titled ["Appeal" is somewhat familiar, "Supplemental Claim" is not](#user-content-appeal-is-somewhat-familiar-supplemental-claim-is-not).

## Design implications
This research demonstrates that Veterans' mental models of disability benefits are organized around their personal health narratives, their service history, their current rating, and the evidence supporting their claims. The procedural outlines of VA systems - the distinctions between claim types, the structure of decision review options, the specific requirements of each pathway - largely do not register in Veterans' conceptual frameworks.

We can see this disjunction in the 526 application flow:
| <img width="1536" height="443" alt="Screenshot 2026-02-03 at 11 40 11" src="https://github.com/user-attachments/assets/011b59d5-b945-4229-93a6-2126dba3e03a" /> |
|---|

To design effectively for Veterans, our work should:
- Focus on the Veteran's experience rather than procedural details.
- Center on their health conditions and filing intent rather than claim types.
- Help them tell their story (even if the details are sometimes more than VA needs to adjudicate claims).
- Make it easy to provide documentation to prove their claims.
- Use terms that are familiar to Veterans rather than narrow technical terms. 

When writing content, we should evaluate language with special consideration for Veterans’ tendency for literal interpretations. Along with familiar words, using intent-based language (e.g. “select a condition to increase”) can help establish meaning. This not only makes our products more usable, but it also encourages Veterans to see the VA as an ally rather than a slow, bureaucratic adversary.

## Recommendations for further research
We hope these findings can inform the development of content and services relating to Veterans’ disability benefits. To validate and expand on these findings, we recommend:
- **Re-analyzing existing research** - It may be possible to re-analyze the transcripts or recordings from previous studies to look for the themes uncovered here.
- **Expanding the sample size** - Conducting a similar study with more participants would increase confidence in applying these findings to the broader Veteran population and reveal potential variations across different Veteran subgroups.

## Appendix

### Research documents
  - [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Research%20Plan%20-%202025-10-Supplemental-Claim.md)
  - [Conversation guide V1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide.md)
  - [Conversation guide V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide%20v2.md)
  - [Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-11%20526EZ%20Supplemental%20Claims%20Design%20Direction?csf=1&web=1&e=bXiWUN)

### Tools used for synthesis
  - [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1763754263362/8090932e8c64bf7b1ce609df56a7f1ab1170e1ed): post-session debrief notes with observers, screen-specific feedback mapping, task-specific success/failure tracking, affinity mapping, analysis and synthesis, mental model mind maps
  - [Spreadsheet](https://docs.google.com/spreadsheets/d/1Wo8TDMxRVE3M7Wtc_HWiL0rsD8-S3EbLbRYAxNKONt0/edit?gid=1109817157#gid=1109817157): timestampled notes collection during sessions

### Pages and applications used
- [Prototype Apple](https://www.figma.com/proto/P6IUm8gN00H3Yi1XzN80fj/-526ez--Condition-information-entry?page-id=6174%3A18589&node-id=6225-28762&viewport=487%2C-7286%2C0.7&t=iysFGHlWrbJqCNTW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6225%3A28762&show-proto-sidebar=1)
- [Prototype Banana](https://www.figma.com/proto/P6IUm8gN00H3Yi1XzN80fj/-526ez--Condition-information-entry?page-id=6174%3A18589&node-id=6241-54179&viewport=487%2C-7286%2C0.7&t=iysFGHlWrbJqCNTW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6241%3A54179&show-proto-sidebar=1)

### Previous research on Conditions flow
- [2025-06 New/Increase at Condition Level](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-06%20New%20or%20Increase%20at%20Condition%20Level/New%20or%20Increase%20at%20Condition%20level%20-%20Reseach%20Findings.md)

### Research participants 
#### Recruitment criteria
We, in partnership with Perigean, recruited Veterans across the following categories:
  - Have previously filed a disability claim of any type within the last 15 years AND never appealed a disability decision
  - Have previously filed a disability claim of any type within the last 15 years AND an appeal to a disability decision
  - Have never filed a disability claim
  - Have experience helping other Veterans file disability claims (2) (haven’t necessarily filed a claim themselves)

In terms of Veteran backgrounds, we aimed for a balanced group across demographics. Because we’ll use Figma wireframes for testing, we did not recruit for AT users. We also aimed to over-recruit for groups that were under-represented in our most recent study (see “2025-06 New/Increase Conditions” tab in the VA Recruitment Checker for Equality; this study’s equality metrics are tracked in the “2025-10 Supplemental Claims in 526” tab of the same spreadsheet).

#### Demographics 

We talked to **10 participants.**

Audience segment:
* Veterans: 10
* Caregivers: 0 
* Family members of a Veteran: 0


Gender:
* Male: 3
* Female: 7


LGBTQ+:
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 2


Devices used during study: 
* Desktop: 7
* Tablet: 2
* Smart phone: 1
* Assistive Technology: 0


Age:
* 25-34: 2
* 35-44: 0
* 45-54: 2
* 55-64: 1
* 65+: 5
* Unknown: 0


Education:
* High school degree or equivalent: 5
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 7
* Rural: 3
* Unknown: 0


Race:
* White: 5
* Black: 4
* Hispanic: 0
* Biracial: 1
* Asian: 0
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


#### Underserved groups we haven’t talked to 
While we recruited for Veterans with other than honorable discharge, and had sessions scheduled with them, both either cancelled beforehand or were a no show. 

Additionally, because we tested in Figma we were not able to test with AT users.

|<img width="923" height="719" alt="Screenshot 2026-01-16 at 15 09 52" src="https://github.com/user-attachments/assets/c16a9c61-e8a6-4523-a74e-3c6713580828" />|
|---|

<br>
<br>
<br>

➡️ _**markdown table of completed recruitment checker follows:**_

|                                                                                                                                                                                                                                                                                                                                                                | Category                                                   | Target % | Target # | \# in Study | Target Achieved? | p1  | p2  | p3  | p4  | p5  | p6  | p7  | p8  | p9  | p10 | p11 | p12 | p13 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- | -------- | ----------- | ---------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| All participants                                                                                                                                                                                                                                                                                                                                               | Total                                                      | n/a      | n/a      | 13          | n/a              | 1   | n/a | 1   | 1   | 1   | 1   | 1   | 1   | n/a | 1   | n/a | 1   | 1   |
| Assistive Tech (AT) users                                                                                                                                                                                                                                                                                                                                      | Total                                                      | n/a      | n/a      | 0           | n/a              | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| No-show participants                                                                                                                                                                                                                                                                                                                                           | Total                                                      | n/a      | n/a      | 3           | n/a              | n/a | N   | n/a | n/a | n/a | n/a | n/a | n/a | N   | n/a | N   | n/a | n/a |
| [Age 55-64+](https://www.va.gov/VETDATA/docs/SurveysAndStudies/VETPOP.pdf)                                                                                                                                                                                                                                                                                     | General                                                    | 50%      | 7        | 6           | no               | 0   | N   | 0   | 0   | 1   | 1   | 1   | 1   | 0   | 0   | 0   | 1   | 1   |
| [Cognitive Disability](https://www.census.gov/content/dam/Census/library/working-papers/2016/demo/Holder-2016-01.pdf)                                                                                                                                                                                                                                          | General                                                    | 50%      | 7        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Mobile user](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6125614/#:~:text=The%20rate%20of%20smartphone%20ownership,low%20levels%20of%20current%20engagement.)                                                                                                                                                                                                | General                                                    | 50%      | 7        | 1           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Rural](https://www.ruralhealth.va.gov/aboutus/ruralvets.asp)                                                                                                                                                                                                                                                                                                  | General                                                    | 25%      | 4        | 3           | no               | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | N   | 0   | 1   |
| [No degree](https://www.luminafoundation.org/wp-content/uploads/2019/10/veterans-without-degrees.pdf)                                                                                                                                                                                                                                                          | General                                                    | 25%      | 4        | 4           | yes              | 1   | 0   | 1   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Other than honorable](https://veteransaidbenefit.org/correcting_military_discharge.htm#:~:text=Honorable%3A%2078.29%20percent,Bad%20Conduct%3A%200.49%20percent)                                                                                                                                                                                              | General                                                    | 21%      | 3        | 0           | no               | 0   | N   | 0   | 0   | 0   | 0   | 0   | 0   | N   | 0   | 0   | 0   | 0   |
| [Immigrant origin](https://www.migrationpolicy.org/article/immigrant-veterans-united-states-2018)                                                                                                                                                                                                                                                              | General                                                    | 17%      | 3        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Women](https://www.womenshealth.va.gov/womenshealth/latestinformation/facts.asp#:~:text=Women%20Veterans%20Health%20Care,-Facts%20and%20Statistics&text=The%20current%20projected%20percentage%20of,years%20for%20their%20male%20counterparts.)                                                                                                               | General                                                    | 10%      | 2        | 7           | yes              | 0   | 0   | 0   | 1   | 0   | 1   | 1   | 1   | N   | 1   | 0   | 1   | 1   |
| [Expat (living abroad)](https://expatresearch.com/files/4915/0501/3576/McNulty_Fisher_Hicks_and_Kane_2014_-_Military_Expatriates-US_Veterans_Living_Abroad_The_Civilian_Lives_of_U.S._Veterans_Part_2.pdf#:~:text=How%20Many%20U.S.%20Veterans%20Live%20Abroad%3F&text=today%E2%80%94about%2021.6%20million.,Veterans%20Analysis%20and%20Statistics%202015\).) | General                                                    | .4%      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Black or African American                                                                                                                                                                                                                                                                                                                                      | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 15%      | 2        | 4           | yes              | 1   | 0   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 0   |
| Hispanic, Latino, or Spanish origin                                                                                                                                                                                                                                                                                                                            | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 12%      | 2        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Biracial                                                                                                                                                                                                                                                                                                                                                       | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 3.9%     | 1        | 1           | yes              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Asian                                                                                                                                                                                                                                                                                                                                                          | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 2.7%     | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Native Hawaiian or other Pacific Islander                                                                                                                                                                                                                                                                                                                      | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | .3%      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| First Nations (Canada)                                                                                                                                                                                                                                                                                                                                         | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Native, American Indian or Alaska Native                                                                                                                                                                                                                                                                                                                       | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 1.6%     | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | N   | 1   | 0   |
| Gay, lesbian, or bisexual                                                                                                                                                                                                                                                                                                                                      | LGBTQ+                                                     | n/a      | 1        | 2           | yes              | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 1   |
| Transgender                                                                                                                                                                                                                                                                                                                                                    | LGBTQ+                                                     | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman                                                                                                                                                                                                                                                     | LGBTQ+                                                     | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Beginner AT User                                                                                                                                                                                                                                                                                                                                               | AT                                                         | 50%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Experienced AT User                                                                                                                                                                                                                                                                                                                                            | AT                                                         | 50%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Desktop Screen Reader (SR)                                                                                                                                                                                                                                                                                                                                     | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Mobile Screen Reader (SR)                                                                                                                                                                                                                                                                                                                                      | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Magnification/Zoom                                                                                                                                                                                                                                                                                                                                             | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Speech Input Tech (Siri, Dragon)](https://www.w3.org/WAI/perspective-videos/voice/)                                                                                                                                                                                                                                                                           | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Hearing Aids                                                                                                                                                                                                                                                                                                                                                   | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Sighted Keyboard                                                                                                                                                                                                                                                                                                                                               | AT                                                         | 10%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Captions                                                                                                                                                                                                                                                                                                                                                       | AT                                                         | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Switch Device                                                                                                                                                                                                                                                                                                                                                  | AT                                                         | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Braille Reader                                                                                                                                                                                                                                                                                                                                                 | AT                                                         | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |

