---
title: "[Study] Research Findings"
product: "Product Name"
team: "Team Name"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "YYYY-MM-DD"
researchers:
  - "Researcher/Designer 1"
  - "Researcher/Designer 2"
research_goals:
  - "Goal 1"
  - "Goal 2"
methodology:
  - "Method 1"
  - "Method 2"
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
    "25-34": X
    "35-44": X
    "45-54": X
    "55-64": X
    "65+": X
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
  - "Finding 1"
  - "Finding 2"
  # etc.
recommendations:
  - "Recommendation 1"
  - "Recommendation 2"
kpi_alignment:
  - "KPI 1"
  - "KPI 2"
outcomes:
  user: "Desired user outcome"
  business: "Desired business outcome"
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Area 1"
  - "Area 2"
underserved_groups_missing:
  - "Group 1"
  - "Group 2"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"
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

1. The interstitial page was NOT effective in communicating about save in progress because when it came up, most users were so focused on filling out form fields that anything other than that was ignored.
1. Most users didn't understand that saving was happening all the time, assuming it only happened after selecting "Finish later" or submitting the form.
1. Most users would like their form data to be saved all the time, and they were pleasantly surprised when they heard that VA forms do this. 
1. All 7 participants used the Finish later button to stop filling out the form, and successfully resumed by signing in and then using the My VA page. 
1. All 6 participants who interacted with the accordions on the Review/Submit page were able to easily open and close them with the controls on the left side (instead of the right).
1. Finding six
1. Finding seven

## Details of Findings 

*Provide detailed descriptions and supporting evidence for each key finding.*  

> [!TIP]
> **After drafting your detailed findings, apply OCTO metadata labels to enable automated pattern detection and cross-study aggregation.**
> Use the [GitHub Copilot Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md) to generate structured YAML label blocks for each finding below.

### Finding 1. The interstitial page was NOT effective in communicating about save in progress because when it came up, most users were so focused on filling out form fields that anything other than that was ignored.
Half of the participants ignored the interstitial page when it came up because it was an **unwelcome interruption to their task of filling out a VA form and didn't seem relevant**. The wording on the page included "after every change", and two participants said that didn't apply to what they were doing, which was filling out the form for the first time. 

  > *"I'm focused on the task, getting a job done. Trying to get to the form, and...I was kind of speed reading through it" (p7).*

  > *"Where's my form? Let me fill it out...I read it and it didn't register, it didn't click" [that these were instructions to read] (p11).*

  > *"I was already beginning to input information on the previous page and then all of a sudden, it shows me what to expect in the form that I'm going to be filling out, which I basically was already doing, so that's probably why I did not focus on that" (p9).*

  > *"Bombarding somebody with the information in the beginning, if it's pertinent or not" (p8).*

Half of the participants did read the interstitial page but **most didn't remember that it said all of their work would be saved automatically**.  

While looking at the page again at the end of the research session, participants provided additional feedback on it: 

- One participant didn't realize that "after every change you make"  applied to entering information the first time.

  > *"I'm starting this, and I'm making entries. And it's talking about I'm making changes" (p7).*
- Another participant said that if we are saving form information all the time, why would they ever need to click "Finish later"? 
  - It seems like we're conflating two messages in the interstitial page: (1) your information is being automatically saved, and (2) how to get back to your in-progress form after selecting "Finish later".


- _Supporting data: ![description of the image (image)](link - add image to github folder and link here with .png)_  

> **TIP:** For details on how to write descriptive links that are accessible to assistive technology users, see Platform documentation on [How to create accessible GitHub Markdown files](https://depo-platform-documentation.scrollhelp.site/research-design/how-to-create-accessible-github-markdown-files).

### Most users (6 of 7) didn't understand that saving was happening all the time, assuming it only happened after selecting "Finish later" or submitting the form.
After participants finished filling out the form, we asked when they thought their information was saved. Most participants said only after selecting the "Finish later" or "Submit" button. **Most skipped or forgot the interstitial page that said their information gets saved automatically.** When we told participants that VA form information is saved automatically, they were pleasantly surprised. Maybe it's OK if people don't know that saving is happening automatically, as long as they're glad to not be losing information they already entered.

- _Supporting data: Quote [add context]_  

---

## Additional Insights
*Include insights that do not represent patterns but are still valuable.*  
> **TIP:** These could be powerful user comments or unexpected issues worth noting


## Recommendations

*Summarize actionable recommendations based on findings.*  

1. **Recommendation:** Remove the interstitial page and instead consider adding something very short just above the Continue button on every page (e.g., "Your information is being saved automatically"). 
   - _Supporting evidence_: Most participants ignored the interstitial page when it came up or forgot what it said because it appeared as an interruption to their task of filling out a VA form and didn't seem relevant.  
2. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_

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