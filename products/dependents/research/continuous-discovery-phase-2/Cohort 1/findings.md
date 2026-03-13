
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

# [Study] Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Dependents Management, Lifestage**

**Date:** 03/2026

**Contacts:** Megan Graham

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
*Provide context for this research by explaining how it fits into the Veteran’s journey.*  

The goal of this research is to assess the usability of the form flow that allows Veterans to keep their dependent on the disability compensation benefit after the turn 18 as a student dependent or disabled dependent. Dependents management is relevant to many life stages but is especially relevant to putting down roots which includes the "Starting, growing, or maintaining my family" and "Engaging VA to access benefits and services moments" that matter.

## Research Questions

* Do participants understand how to keep a dependent on the disability compensation benefit past their 18th birthday as a disabled or student dependent? 
* Do participants understand how to add back inactive dependents? 
* Do participants understand that they can submit the form without uploading documents? 

## Methodology 

*Provide a brief description of the research methods used (e.g., usability testing, interviews).*  

- Method 1: Moderated testing 
- Method 2: Usability testing  


## Key Findings

> **After completing your detailed findings below, you'll add metadata labels using the [Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md).**  

1. Participants looking to make updates found the “Add or remove dependents” call to action to be incomplete.
2. The link to start the 686/674 forms is at the bottom of a long intro page. Three participants felt that the content was overwhelming and made it difficult to find the link.
3. Participants' opinions were split on the prototype’s ‘check-in’ form structure.
4. On the Veteran address screen, participants had inconsistent understandings of what “I agree to receive electronic correspondence from VA about my claim” meant.
5. Participants wanted more specific information about which medical records VA needs to determine a dependent’s disability status.
6. Three of five participants who saw the screen were confused by the informational page listing the required evidence types being separate from the upload screens. 
7. Three of five participants who saw the screens were unclear whether they could upload multiple files in each upload screen.
8. Six participants found content callouts about "Overpayments" and "Reasons to add/remove dependent helpful".
9. Most users would want to know if their answer might trigger an automatic denial.

## Details of Findings 

> [!TIP]
> **After drafting your detailed findings, apply OCTO metadata labels to enable automated pattern detection and cross-study aggregation.**
> Use the [GitHub Copilot Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md) to generate structured YAML label blocks for each finding below.

### Finding 1
Participants looking to make updates found the “Add or remove dependents” call to action to be incomplete.  

- _"I would be frustrated at this point if I were trying to add information about a disability as to why I would be in a form that says add or remove dependents . . . I'm just trying to provide more information to keep her on. I'm not trying to add her because she's already part of the benefit." - P8_

- _“[The Add/Remove link] looks like what I should click on but my goal is to add information about a dependent, not to add or remove one. That doesn't make sense to me" - P16_

- **Recommendation:** Update static content and content on My VA Dependents page to encompass the ‘update’ functionality of the 686 form. Ex: instead of “Add or remove dependents”, use the phrase “Add, remove, or update dependents”. This would apply to the form title, step titles, etc. We could also look at updating the paper form name as well

- **Effort:** Small - simple change to the CTA. Larger changes to VA as a whole could bump up the coordination effort, but we wouldn’t be directly responsible for those changes.
  
### Finding 2  
The link to start the 686/674 forms is at the bottom of a long intro page. Three participants felt that the content was overwhelming and made it difficult to find the link. 

- The intro page also emphasizes the info needed to add dependents. But if a user is making a change or removing, they don’t actually need all of this info. The intro page could lead users to over-prepare for the task and waste their time.

- _“I like to read all of [the content], but someone with significant PTSD might have trouble with it” - P17_

- **Recommendation:** Consider shortening the intro page content, hiding some content in accordions or other static pages on va.gov, or providing a link to start the form nearer the top of the page.

- **Effort:** Medium - This is a unique situation where the form does many things. The biggest effort would probably be coordinating with the content team since this page is an established VA pattern.

### Finding 3  
Participants' opinions were split on the prototype’s ‘check-in’ form structure.
- The 'check-in' structure involves asking users about removing, keeping, adding back, and adding on separate screens and then cycling them through the workflows for each change that they indicated that they needed to make. While no participants failed to complete the task with this design, some experienced confusion and friction. But others found the check-ins to be helpful reminders of possible dependent actions.

- Examples of friction
     - _“If I'm going into a form to add dependents, I don't want to be concerned with removing dependents also . . . now I'm trying to add my child and they're just trying to take more of my benefit away with these remove questions." - P8_

     - _“I prefer that you just ask about Jen because if you ask me this question [about removals] first . . . you'll lose me because I have to stay focused." - P17_

- Examples of confusion
     - _“Why is Porshia being brought up here while I'm in the middle of trying to make sure Jen is OK?" - P13_

     - _“It feels like I skipped a step, then I'm all of a sudden in Jen's questions again . . . I know this is what I want to do, but I'm confused as to why I jumped from "No, I don't want to delete anybody" to this question about Jen . . . I would have figured I'd go to a page with all three and it would be like, "What do you want to do with who" - P16_

     - _“How come it doesn’t give me options to add dependents? It asked me about removing, and now I have this random question about Jen – what is happening?” - P5_

- Examples of positive responses
     - _“I do like that even though you come here for one thing, it is checking whether the other things apply. If it don't pertain to you, just answer no. I’d rather have it asked versus not." - P14_

     - _“I think it's cool that they ask [about Porshia], just in case you might be able to get extra money and you didn’t realize.” - P14_

     - _"I guess they figured, well, since you're here managing your other dependents, you have any other changes? So I do like that they prompt you for that. . . . Thanks for checking in VA." - P15_

  - **Recommendation:** Weigh the pros and cons of this design vs other possibilities (See appendix) – it may decrease overpayments by catching removals, but it does add friction for the user to review each action. Are the potential avoided overpayments worth the additional friction for ½ of users? As a first pass, design team thinks maybe yes. Is there quant data we could look at or collect to help us make a decision? Additional testing? If we do decide to go with this design, we recommend changing the way the steps and questions are organized to alleviate the confusion users had.

### Finding 4  
On the Veteran address screen, participants had inconsistent understandings of what “I agree to receive electronic correspondence from VA about my claim” meant.

- Users were unclear on whether they would continue to receive paper correspondence if they check the box, or if this preference applies only to this submission, or to all VA correspondence moving forward.

- Context – this field was added to all PDF forms in 2024, but not all business lines actually use it. It is present on the 686c.

- **Recommendation:** Figure out what this checkbox actually does for the 686c and 674. If it IS necessary, clarify that users will continue to receive paper correspondence no matter what. Consider checking the box by default. If it is NOT necessary or does nothing, remove it!

- **Effort:** Small - inter-agency sleuthing could get us answers, but there might be OCTO-level coordination needed for what VA should do across teams, since this is a standard question.

### Finding 5  
Participants wanted more specific information about which medical records VA needs to determine a dependent’s disability status.

- The doctor's statement was clearer to users.

- _“Are they looking for when it first started? Over a period of time? The diagnosis codes? IEP records? Medications they’re on?...What do they actually need?” - P2_

- _“I am not sure what the difference is between a note from the doctor and the medical record. If I have the medical record, that is a statement from the doctor. If I need this doctors statement, I have to pay to go to the doctor and take a sick person’s appointment for this confusing reason.” - P8_

- **Recommendation:** Talk to David Reis/VSRs to understand more specifically what the necessary elements of a medical record are. Include that information in static content on VA.gov, and contextually within the medical records upload section.

- **Effort:** Medium - inter-agency coordination w/ VSRs to understand policy, but then easy to implement as content changes on VA.gov

### Finding 6  
Three of five participants who saw the screen were confused by the informational page listing the required evidence types being separate from the upload screens.

- The card design and alert seemed to imply some kind of action, but there was actually no action on this page. 
For context – we designed this informational page for the edge-case situations where a user might need to provide 5+ different types of evidence. And, for a situation where a user might want to see what’s needed and go get it. In the user-research setting, users didn’t have to go find documents.

- **Recommendation:** Revisit the design of this page - we may have reached the limit of what the current design system affords us re: components for this complex task. Consider an alternate design like a task-list to upload evidence.

- **Effort:** Medium - We may need to redesign the UI for the page informing users of evidence requirements. This work could benefit the whole VA, so could be slowed down by collab cycle etc.

### Finding 7  
Three of five participants who saw the screens were unclear whether they could upload multiple files in each upload screen.

- **Recommendation:** Clarify whether they can add multiple files, and if the 99MB limit is total, or per file. Note: full limit for a single form is 5GB

- **Effort:** Small - We need to clarify the requirements and then add content that supports it.

### Finding 8
Six participants found content callouts about "Overpayments" and "Reasons to add/remove dependent helpful".

- _“A lot of Veterans struggle to understand the nuances of the benefits, so it’s helpful to explain some of this stuff” - P4_

- **Recommendations:** Continue to call out overpayments and add/removal reason reminders in dependents designs where appropriate.

- **Effort:** No action needed.

### Finding 9
Most users would want to know if their answer might trigger an automatic denial.

- Users were split on whether they wanted the form to stop them from continuing despite the probable denial, or allow them to continue.

- _“If the system is going to automatically deny my application then don't let me continue now, but if there is a gray area then let me continue. I could take action like talking to my child about the school they are going to, or double-check that the school is accredited“ - P16_

- _“I would like to be notified [that my answer may result in a denial], but allowed to continue. That would help me make sure I didn’t make an error.” - P17_

- **Recommendations:** Continue with our plan to explain potential for denials based on answers in our various forms (content team is working on how to do this gracefully). 

- **Effort:** No action needed
  
---

## Additional Insights
*Include insights that do not represent patterns but are still valuable.*  

1. Users want the ability to report the disability when the child acquires it, and not have to wait until the child turns 18.
   
2. Users might benefit from examples of qualifying disabilities
5. Users wondered if the student needed to be in school full-time or not
6. One user mentioned wanting to be able to add dependent parents (or at least find out how to do so) in the 686c/674 flow.
Most users would want to know if their answer might trigger an automatic denial.
2 users assumed that dependents from military service will transfer over to VA dependents automatically, and reported delayed payments because of the misunderstanding
One participant mentioned that having the form in spanish would be really important, especially for programs that would apply to caregivers or family members.
Having separate upload components for the different types of evidence was helpful, but two users didn’t realize that the 2nd screen would appear, and would have uploaded all documents on the first one




## Recommendations

*Summarize actionable recommendations based on findings.*  

1. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_  
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

### Recruitment of underserved groups in [Study name]

➡️ _[insert screenshot of completed recruitment checker in the format below]_

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](link - add image to github folder and link here with .png)

#### A more accessible version of the table in the above image

➡️ _[paste markdown table of completed recruitment checker from Github Copilot chat]_
