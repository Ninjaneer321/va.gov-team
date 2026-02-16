---
title: '[Study] Research Findings'
product: Product Name
team: Team Name
office: Office of the CTO - Digital Experience (OCTO-DE)
date: YYYY-MM-DD
researchers:
- Researcher/Designer 1
- Researcher/Designer 2
research_goals:
- Goal 1
- Goal 2
methodology:
- Method 1
- Method 2
devices_used:
  desktop: X
  tablet: X
  smartphone: X
  assistive_technology: X
participants_total: X
demographics:
  veterans: X
  service_members: X
  caregivers: X
  dependents: X
  VA_staff: X
  age:
    25-34: X
    35-44: X
    45-54: X
    55-64: X
    65+: X
    unknown: X
  education:
    high_school: X
    some_college: X
    associates: X
    bachelors: X
    masters: X
    doctorate: X
    unknown: X
  location:
    urban: X
    rural: X
    unknown: X
  race:
    white: X
    black: X
    hispanic: X
    biracial: X
    asian: X
    native: X
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
- Finding 1
- Finding 2
recommendations:
- Recommendation 1
- Recommendation 2
kpi_alignment:
- KPI 1
- KPI 2
outcomes:
  user: Desired user outcome
  business: Desired business outcome
opportunity_areas:
- Unmet need 1
- Research gap 1
further_research_needed:
- Area 1
- Area 2
underserved_groups_missing:
- Group 1
- Group 2
secondary_research:
- Web analytics
- SME interviews
synthesis_tools_used:
- Mural
- Affinity Mapping
tags:
- 'BNFT: Disability'
- 'BNFT: Education'
- 'BNFT: Records'
- 'PRDT: My VA'
- 'MHV: Secure Messaging'
- usability-testing
- moderated-research
- remote-research
---
> [!TIP]
> **Complete the frontmatter section above AFTER you've finished and saved your research findings report below.**
> 
> Use the [GitHub Copilot Research Findings Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/research-findings-frontmatter-completion-prompt.md) to automatically generate structured metadata from this completed research findings report. The prompt uses natural language processing to extract key findings, participant demographics, recommendations, and apply appropriate research repository tags.

---

# 2026-01 Save in Progress (2nd round of usability testing) Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Accessibility Digital Experience (ADE)**

**Date:** 01/30/2026

**Contacts:** Cindy Merrill

**[Research Readout (PDF)](link-here)**  
*Add a link to your research readout deck, if available.*

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals
Veterans may fill out web forms on VA.gov throughout their lives, including all stages of the Veteran Journey--Serving and separation, Living civilian life, and Retiring and aging. **Saving in-progress work while filling out an online form** is an interaction for which the current implementation on VA.gov has two known accessibility issues, and a revised design that was [usability tested in May 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-findings.md) didn't work very well. Key findings from that study indicated that most participants didn't know that their information was being saved automatically, and they didn't see or remember either of the informational alerts about saving. 

This research was intended to get user feedback on a revised design that hopefully communicates more effectively to Veterans that the information they enter into forms will be saved automatically. The new design adds an [interstitial page (in Figure 1 below)](#user-content-figure-1-shows-the-new-interstitial-page) about saving that appears after the user clicks the Continue button on the first page of form fields, which is after they've started filling out the form and during a natural pause in their work (between form pages).

### Figure 1 shows the new interstitial page

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2026-01-save-in-progress-2/images/interstitial.PNG" width="50%" height="50%" alt="The new interstitial page explains that the information you enter in the form will saved, and that you can select the Finish later button anytime to stop">

The **goals of this research** were to 
1. See if Veterans understand that their form data is being saved as they're filling out a form but haven't submitted it yet.
1. See if Veterans can stop filling out a form, get signed out, and then resume filling out a form.
1. See if moving the accordion controls to the left side affects usability.

Findings and recommendations from this research will **inform guidance and documentation for the "save in progress" feature** for authenticated users filling out forms on VA.gov. Matt Dingee asked ADE to assist with this because some VFS teams are innovating new designs, whereas "save in progress" should be a standard pattern used by all teams for consistency across VA.gov.

## Research Questions

### Research goal 1: See if Veterans understand that their form data is being saved as they're filling out a form but haven't submitted it yet.
1. What reactions/feedback do Veterans have upon encountering the interstitial page after clicking "Continue"?
1. Do Veterans think that their form data is being saved? If so, how confident are they?
1. Do Veterans click on either of the links on the interstitial page (that go to My VA or the form intro page)?
1. Do Veterans remember later what the interstitial page said?

#### Research goal 2: See if Veterans can stop filling out a form, get signed out, and then resume filling out a form.  
1. Do Veterans use the "Finish later" button to stop filling out a form?
1. What feedback do Veterans have on the revised "Finish later" page? 
1. Are Veterans able to resume filling out a form that they previously started? If so, how?
1. Do users realize that they have to sign in before resuming the form?

#### Research goal 3: See if moving the accordion controls to the left side affects usability.

## Methodology 

We conducted **remote moderated usability testing** to observe research participants filling out an online form. The participants were logged in so that the information they entered was automatically saved before the form was submitted. We used a GitHub Codespace that was accessible to screen readers and screen magnifiers, which half of our participants were using.

Research sessions were conducted over Zoom during January 12-21, 2026. Sessions were 90 minutes long for Veterans using assistive technology (i.e., screen readers or screen magnifiers), and 60 minutes for Veterans not using any assistive technology (AT). 

## Participants
 Perigean recruited all **9 research participants** who were all Veterans. 7 participants were able to complete all the user tasks, and the other 2 participants were not able to due to technical issues.  
 - **5 were full-time assistive technology users**:
   - 4 used a screen reader
   - 1 used a screen magnifier
  - 4 were on a computer, and 5 were on a smart phone

The assistive technology used by the 5 participants is summarized in the table below. 

P# | Screen Reader/Magnifier | Software | Device | O/S | Browser 
-- | ----- |------|-------|--------|--------
2 | none | none | phone | iOS | Safari 
3 | Screen reader | JAWS w/mouse echo | computer | Windows | Chrome 
4 | Screen reader | VoiceOver | phone | iOS | Safari then Chrome
6 | Screen reader | Read aloud highlighted text | phone | iOS | Safari 
7 | none | none | computer | Windows | Chrome 
8 | Screen reader | TalkBack | phone | Android | Chrome
9 | none | none | computer | Windows | Opera
11 | Screen magnifier | Windows Magnifier | computer | Windows | Chrome
12 | unknown | unknown | phone | Android | unknown because didn't get that far

For demographic details, see [Research participants](#user-content-research-participants).


## Hypotheses and Conclusions

1. With the new design, Veterans are confident that their form data will be saved.
    - **Definitely False** because most participants said they would lose the information they entered if they didn't click the Finish later button or submit the form. They didn't realize that the form was saving their information every time they moved onto the next field.
1. Telling Veterans about auto saving after the first form page is a time when they are receptive and likely to remember.
    - **Definitely False** because most participants skipped past the interstitial page in their zeal to fill out the form. 
1. With the new design, Veterans will be able to stop filling out a form, get signed out, and then resume filling out a form.
    - **Likely True** because all participants used the Finish later button to stop filling out the form, and successfully resumed by signing in and then using the My VA page. 
1. All Veterans (including screen magnifier and screen reader users) will find the accordion controls on the left side easy to use.
    - **Likely True** because all 6 participants who interacted with the accordions on the Review/Submit page were able to easily open and close them, which included one person using a screen magnifier.

## Key Findings

*Summarize the 5–10 most impactful findings from your study.* 

> [!TIP] 
> Write findings as stand-alone insights that are easy to scan. For example:  
> - "Most participants used the search field to locate forms, often searching for 'veteran health.'"  
> - "Participants struggled with the secondary caregiver section on the form."  
> 
> **After completing your detailed findings below, you'll add metadata labels using the [Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md).**  

[Example Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#key-findings)

**1. PULL LIST FROM Details of Findings section below**

## Details of Findings 

*Provide detailed descriptions and supporting evidence for each key finding.*  

> [!TIP]
> **After drafting your detailed findings, apply OCTO metadata labels to enable automated pattern detection and cross-study aggregation.**
> Use the [GitHub Copilot Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md) to generate structured YAML label blocks for each finding below.

### Finding 1: The interstitial page was NOT effective in communicating about save in progress because most users were so focused on form fields that anything other than that was ignored.
Half of the participants ignored the interstitial page when it came up because it was an **unwelcome interruption to their task of filling out a VA form and didn't seem relevant**. The wording on the page included "after every change", and two participants said that didn't apply to what they were doing, which was filling out the form for the first time. 

  > *"I'm focused on the task, getting a job done. Trying to get to the form, and...I was kind of speed reading through it" (p7).*

  > *"Where's my form? Let me fill it out...I read it and it didn't register, it didn't click" [that these were instructions to read] (p11).*

  > *"I was already beginning to input information on the previous page and then all of a sudden, it shows me what to expect in the form that I'm going to be filling out, which I basically was already doing, so that's probably why I did not focus on that" (p9).*

  > *"Bombarding somebody with the information in the beginning, if it's pertinent or not" (p8).*

Half of the participants did read the interstitial page but **most didn't remember that it said all of their work would be saved automatically**.  

While looking at the page again at the end of the research session, participants provided additional feedback on it: 

- Two participants didn't read the heading but only the text below it, and it was the heading that said "We'll save your information automatically after every change you make".
  > *"The big bold up at the top is usually the title of the page or the document, and it's the little stuff down below that has the meat--the meaning" (p9).*

- One participant didn't realize that "after every change you make"  applied to entering information the first time.

  > *"I'm starting this, and I'm making entries. And it's talking about I'm making changes" (p7).*
- Another participant said that if we are saving form information all the time, why would they ever need to click "Finish later"? 
  - It seems like we're conflating two messages in the interstitial page: (1) your information is being automatically saved, and (2) how to get back to your in-progress form after selecting "Finish later".

- Four participants didn't understand the "form introduction" link. Two clicked on it and were confused when it took them to the page they already saw. One participant thought it might open a new introduction, such as a video.

- One participant didn't understand the "My VA" link. She has a VA account but didn't know what "My VA" means.

- _Supporting data: ![description of the image (image)](link - add image to github folder and link here with .png)_  

> **TIP:** For details on how to write descriptive links that are accessible to assistive technology users, see Platform documentation on [How to create accessible GitHub Markdown files](https://depo-platform-documentation.scrollhelp.site/research-design/how-to-create-accessible-github-markdown-files).

### Finding 2: Most participants assumed that saving happened only after selecting "Finish later" or submitting the form.
After participants finished filling out the form, we asked when they thought their information was saved. Most participants (6 of 7) said only after selecting the "Finish later" or "Submit" button. **Most skipped or forgot the interstitial page that said their information gets saved automatically.** When we told participants that VA form information is saved automatically, they were pleasantly surprised because they didn't want to lose their work. Maybe it's OK if people don't know that saving is happening automatically, as long as they're glad to not be losing information they entered.

- _Supporting data: Quote [add context]_  

### Finding 3: All participants used the "Finish later" button to stop filling out the form, and then they successfully resumed the form. 
**All 7 participants found the "Finish later" button intuitive to save their work**, even if they didn't remember it from the interstitial page. Only one person said they knew that it would save from their past experience with VA forms. One participant said that he was leery of losing his work if he stops in the middle:

> *"I'd just sit here and finish it until I was done...I hate doing work and then having to come back and redo the exact same thing.  Experience over time [with non-VA forms] has taught me to not trust what it's supposed to do...If it works like it should, everything up to the point where I stop should remain filled out, and when I log back in...it should take me right where I left off" (p9).*

5 of 7 participants knew that they needed to sign in to resume their form. One participant didn't know that, and another participant didn't need to sign in because of a prototype malfunction. **6 of the 7 participants resumed their form from the My VA page**, and one did it from the form intro page.  

> *"Right back to where I left off" (p11).*

> *"That's nice that that's right there. I like that. I wouldn't have expected that for something that I was doing previously to pop up in my main page when I first sign in...That's a great feature because I forget easily, so I might not even remember what the form number was" (p9).*

After resuming the form

### Finding 4: All participants who interacted with the accordions on the Review/Submit page were able to easily open and close them with the controls on the left side (instead of the right).
6 of 7 people who reached the "Review and submit" page used the accordions, and none had any issues interacting with the "+" control being on the left side (instead of on the left in the current VA Design Syste
m). This included the participant who was using a screen magnifier. In the [previous round of usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-findings.md#finding-6-va-forms-in-general-had-accessibility-issues-for-screen-readers-and-screen-magnifiers), a participant using a screen magnifier didn't understand how to interact with these accordions when the "+" control was on the right because it wasn't visible to him. 

One participant interpreted the accordions as providing extra information to help the VA find their records, and he was surprised when he saw that it was only the information that he had already entered.

Two participants didn't notice the "Expand all" link, one of whom said that the text was too small. That participant said that he would have clicked on "Expand all" if he had seen it, instead of opening each accordion one at a time. A third participant said that they never use "Expand all" because they get too overwhelmed by the length of what might expand, so it's easier for them to expand each accordion, one at a time.


### Finding 5: XX had some accessibility issues ...

### Finding 6: Participants wanted to be notified by email or text after selecting "Finish later" and before their information gets deleted. 

Most participants (6 of 7) assumed that after 60 days, their saved form data would be deleted. **Almost everyone wanted to be notified before that via email and/or text**, with one participant mentioning a notification in the VA mobile app. Most people suggested the first notification should be within 1-7 days of having selected "Finish later", and then once a week after that. 

Eight participants said they asked wanted to be able to delete a form they started but never finished. Reasons provided included finding out that you no longer need to submit that form, you already submitted it, or it was the wrong form. 

## Additional Insights -- REORDER, MV SOME INTO FINDINGS SECTION??
*Include insights that do not represent patterns but are still valuable.*  
> **TIP:** These could be powerful user comments or unexpected issues worth noting

1. Participants encountered a number of usability issues when filling out the form:

     1. **Additional records information**: Three of 7 participants said that they didn't know what kinds of information would be helpful to include. One participant said perhaps your parents' names or where you where stationed. Another participant said maybe a date range for your medical records.
     1. **Country**: One participant was using a scroll wheel to traverse the dropdown list but couldn't find "United States". When he scrolled to the top of list, the first option was "Afghanistan" (the second option), and when he scrolled to the bottom of the list where "United States" should be alphabetically, it wasn't there either. He kept on scrolling down then up, and eventually was able to see "United States" at the very top.


1. **All participants who encountered an error while filling out the form (6 of 7) were able to fix it themselves**. Some of the errors likely resulted because the participants were entering fake data (e.g., name, social security number) as instructed, in order to not share PII. Below are descriptions of some of the issues.

     1. Six of 7 participants didn't enter their name correctly in the verification field on the "Review and submit" page. 4 people corrected the name by using what the error message said, one of whom was glad to see that (see quote below); someone else was annoyed that he couldn't copy/paste the name from the error message and had to retype it (see quote below). 2 people didn't notice the name within the error text and instead expanded the "Your personal information" accordion to see what they entered before. 

        > p3 liked that the error told you what it the name was supposed to be: *"Great! Wish more forms did it that way" (p3).*

        > p8 wanted to copy/paste the name in the error: *"It won't let me even copy that" (p8).*

    1. A screen reader user entered the postal code and then a space in order to hear JAWS read it. This triggered an error because there was a space entered into that field and so too many characters. The participant said that they encounter this same issue on many forms, so they realized what the problem was and how to correct it.
     1. One participant entered "1-" at beginning of phone number, which resulted in an error because there were more than 10 digits.
 
1. One participant expressed his appreciation for our taking the time to learn from Veterans...

1. Participants had many positive comments on prototype features that worked well for them: 


1. Three participants had technical issues with their assistive tech...

1. Two participants said that they prefer to fill out forms on paper instead of online. One of them said it's easier and he likes to keep a copy. The other participant doesn't have a computer and said the following: 
  > *"I'm thinking I could fill it out quicker if I had it in front of me in paper and pencil...Slow [on phone] because of my vision and I'm not the greatest typist. I have to look at the keys to type, that’s why I prefer to write it out" (p2).*

  At the end of the session, this participant said that this session had helped her learn how to navigate back to an in-progress form. She had been planning to print out a paper form from an online form she already started because she needed to upload 15 documents, but at the end of the session, she said that she might try to upload them online, given that she already completed most of the online form and now knows that it's been saved. 

## Recommendations   

   - _Supporting evidence_: 

*Summarize actionable recommendations based on findings.*  

1. **Remove the interstitial page and instead consider adding something very short just above the Continue button on every page** (e.g., "Your information is being saved automatically"). 
   - _Supporting evidence_: Most participants ignored the interstitial page when it came up or forgot what it said because it appeared as an interruption to their task of filling out a VA form and didn't seem relevant.  
1. **Don't put essential information in the heading that isn't repeated below because some people will ignore the text of the heading.**
   - _Supporting evidence: Two participants didn't read the heading on the interstitial page but only the text below it._

1. **Avoid using the phrases "My VA" and "form introduction" in Veteran-facing web pages.**
   - _Supporting evidence: 4 of 8 participants didn't know what these phrases meant when seeing them as links on the interstitial page._

1. **Move accordion controls to the left side of the item so as to increase visibility for screen magnifier users who may not see any controls on the right.** Discuss this finding to Chandra Carney from the US Web Design System team.
   - _Supporting evidence: 6 of 7 people who reached the "Review and submit" page used the accordions, and none had any issues interacting with the "+" control being on the left side, including the participant who was using a screen magnifier._

1. **Consider keeping the "Expand all" link (ADD FROM SLACK DM CONVO W/JEANA)**

1. **Learn how to advise participants who are struggling with their assistive tech, and incorporate a suggestion into future conversation guides.** Work with Martha to meet with a VA Blind Rehab Center to learn about how they help Veterans who are blind or low vision and whether/how we can get them in touch with research participants who could benefit from their services.
   - _Supporting evidence_: Two participants were particularly frustrated with their current assistive technologies, and we wanted to help. 

### For the Request Personal Records form

1. Consider adding more details in the helper text for types of information would be helpful in the "Additional records information" field".
   - _Supporting evidence_: Three of 7 participants said that they didn't know what kinds of information would be helpful to include.

1. Consider revising the "Your full name" text on the "Review and submit" page to include a reference to what you entered before: "Your full name--Enter exactly what you entered earlier in this form".
   - _Supporting evidence_: Participants didn't realize that the name that you enter here must exactly match what they entered as their name at the beginning of the form.

1. Consider adding a second "United States" option to the "Country" dropdown where it fits alphabetically near the bottom of the list.
   - _Supporting evidence_: One participant using a scroll wheel to traverse the dropdown list was unable to access "United States" at the top of the dropdown list, and he then looked near the bottom of the list where it would fit alphabetically, and it wasn't there either. 

## Product User and Business Outcomes

*Explain how findings and recommendations align with the product's goals.*

> [!NOTE] 
> Refer back to your Product Outline. 

### Desired User Outcome 
This research supports our desired user outcome by....
 
### Desired Business Outcome
This research supports our desired business outcome by....


## Key Performance Indicators

*Explain how findings will support KPI measurement.*  

> [!NOTE]
> Refer back to your Product Outline. 

### KPI 1
This research supports measurement of this KPI by....
  

## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  

> [!TIP]
> Once your **Recommendations** and **Next Steps** are finalized, you can quickly turn them into GitHub issues using the reusable Copilot prompt in [`create-issues-from-research-findings-prompt.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/create-issues-from-research-findings-prompt.md).  
> **After creating issues, add their hyperlinks back here under their corresponding "Recommendation" or "Next Step."**
> 
> If you need Github Copilot Enterprise Access, please complete this [Issue](https://github.com/department-of-veterans-affairs/copilot-onboarding/issues/new?template=copilot-onboarding.yml).

## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 


## Appendix

### Research documents
- [Product Outline](link here)
- [Research plan](link here)
- [Conversation guide](link here)
- [Interview transcripts](link here)

### Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
### Pages and applications used

*Link to prototypes or pages tested during the study.*  


### Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


### Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

> [!IMPORTANT]
> **After completing the demographic information below and saving this file**, use the [GitHub Copilot Research Findings Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/research-findings-frontmatter-completion-prompt.md) to automatically populate the YAML frontmatter section at the top of this document with: 
> - Participant demographics (counts, age ranges, education levels, etc.)
> - Key findings and recommendations
> - Research goals and methodology
> - Appropriate research repository tags
>
> The prompt will parse the demographic data from this section and structure it correctly for the frontmatter's nested YAML format. 

### Research participants 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 

[Example Research participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-findings.md#research-participants)

#### Recruitment criteria

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

#### Demographics 

We talked to **x participants.**

Audience segment:
* Veterans: x 
* Caregivers: x 
* Family members of a Veteran: x  


Gender:
* Male: x 
* Female: x 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: x 
* Tablet: x 
* Smart phone: x 
* Assistive Technology: x


Age:
* 25-34: x
* 35-44: x
* 45-54: x
* 55-64: x
* 65+: x
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): x
* Associate's degree, trade certificate or vocational training: x
* Bachelor's degree: x
* Master's degree: x
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: x
* Rural: x
* Unknown: x


Race:
* White: x
* Black: x
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: x
* Sighted keyboard: x
* Captions: x


#### Underserved groups we haven’t talked to 
> [!NOTE]
_Complete the [VA recruitment checker for marginalized Veteran groups](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx):_
> 1. Duplicate the ***Template*** worksheet
> 1. Enter your participant information **(see the *Template Instructions* worksheet for details)**
> 1. Make a screenshot of the cells that you want to share and paste it into this report below
> 1. Generate an accessible version of those cells using Github Copilot Chat:
>    - Start a new Github Copilot chat
>    - Enter: "I want to convert these spreadsheet cells into a table in markdown:" 
>    - Copy and paste the cells from the recruitment checker spreadsheet that you've filled in
>    - Copy the resulting markdown table by clicking the copy icon in the Copilot chat, and paste it into this report below 
>    - (If Copilot returns an error, try using a different AI model, such as "Claude Sonnet 3.7 Thinking")

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

➡️ _[insert screenshot of completed recruitment checker in the format below]_

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](link - add image to github folder and link here with .png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in [Study name]

➡️ _[paste markdown table of completed recruitment checker from Github Copilot chat]_