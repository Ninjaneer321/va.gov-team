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
- [Additional insights](#user-content-additional-insights)
- [Recommendations](#user-content-recommendations)
- [Next Steps](#user-content-next-steps)
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
3. What caused them
   a. The **in-service conditions or events** that caused these problems (and why I deserve to get benefits)
4. What I did to get benefits
   a. The turning point when **I decided to file**
   b. The **evidence** I provided
   c. The **people/organizations** who supported me
5. The result: "My percentage
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


## Appendix

### Research documents
  - [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Research%20Plan%20-%202025-10-Supplemental-Claim.md)
  - [Conversation guide V1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide.md)
  - [Conversation guide V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide%20v2.md)
  - [Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-11%20526EZ%20Supplemental%20Claims%20Design%20Direction?csf=1&web=1&e=bXiWUN)

### Tools used for Synthesis
  - [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1763754263362/8090932e8c64bf7b1ce609df56a7f1ab1170e1ed): post-session debrief notes with observers, screen-specific feedback mapping, task-specific success/failure tracking, affinity mapping, analysis and synthesis, mental model mind maps
  - [Spreadsheet](https://docs.google.com/spreadsheets/d/1Wo8TDMxRVE3M7Wtc_HWiL0rsD8-S3EbLbRYAxNKONt0/edit?gid=1109817157#gid=1109817157): timestampled notes collection during sessions

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

