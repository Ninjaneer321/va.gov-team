---
title: "[21-2680 Claimant Experience] Research Findings"
product: "Form 21-2680 (Examination for Housebound Status or Aid & Attendance)"
team: "Benefits Intake Optimization (Aquia BIO)"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-03-01"
researchers:
  - "Dave Luetger"
  - "Elyse Voegeli"
research_goals:
  - "Understand how veterans, dependents, and caregivers experience the claimant side of Form 21-2680"
  - "Understand how veterans, dependents, and caregivers navigate getting their provider to complete the provider section, including challenges and facilitators in the handoff process"
  - "Understand the usability of Form 21-2680 as it exists in its digital form"
  - "Discover how Veterans, dependents, and caregivers currently interact with their providers and what pain points exist"
  - "Usability test how well people understand the new digital handoff between claimant and provider"
methodology:
  - "Moderated semi-structured interviews"
  - "Form walkthrough usability testing"
  - "Remote testing via Zoom"
devices_used:
    desktop: 15
    tablet: 0
    smartphone: 1
    assistive_technology: 0
participants_total: 16
demographics:
  veterans: 10
  service_members: 0
  caregivers: 4
  family_members: 2
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 2
    "35-44": 4
    "45-54": 2
    "55-64": 4
    "65+": 4
    unknown: 0
  education:
    high_school: 2
    some_college: 4
    associates: 1
    bachelors: 5
    masters: 3
    doctorate: 0
    unknown: 1
  location:
    urban: 12
    rural: 4
    unknown: 0
  race:
    white: 8
    black: 5
    hispanic: 2
    biracial: 1
    asian: 1
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
  - |
    Most participants who were filling out 21-2680 for someone else (e.g., a parent they give care to) did not correctly choose the "claimant" for the form. Only one participant realized the error before submitting the form. Supporting quotes:
    - "Claimants information. My relationship to the Veteran. If I was applying for my dad I'd be a Veteran's child. If I was applying for myself I'd be a Veteran."
    - "At first I was going to say Veteran. But then I would look at it as myself if I was filing this out. I'm the claimant. I looked and I thought I could put Veteran but I got confused if its looking at it as myself if I was filing that out for my dad."
    - "That's the person that's making the file. That's, you know, that's putting in the information. Because if I'm filling that for myself, then I will be the veteran, but if I'm filling it out for my dad..."
  - "Most participants struggled to understand the difference between Special Monthly Compensation and Special Monthly Pension, the two benefits described by this form, and found it difficult to make a selection"
  - "Most participants had one or more issues understanding the two-step process involved in the current implementation of the \"online\" version of 2680, which requires a manual handoff to a medical provider"
  - "Some participants struggled to begin the application process, either because they didn't see how to begin or were confused as to whether this benefit would apply to them"
  - "Most participants were confused by the order of the instructions on the confirmation page, or were looking for more clarity"
  - "Almost all participants struggled with the definition of the term \"hospital care\""
  - |
    In some ways, the PDF was easier to use or understand because everything is exposed at once. Supporting quote:
    - "It almost helps to see the [paper] form. It answers a lot more questions than before I saw the [paper] form."
  - |
    A core issue determining participants' experience is the their relationship with their medical provider. Participants with positive provider relationships felt this benefit would be accessible to them. Participants who had negative provider relationships felt a high burden in the provider handoff. Participants who were confident their provider could fill this out based on medical records have a much lower burden than those who need to go into the office for an exam. Supporting quote:
    - "I feel like it would be easier to send my 2,000-plus medical record to an outside doctor, and have them fill this out and upload it, than it would be for me to have my VA doctor do it, and that's [...]"
  - |
    Supporting quote: "If they are giving benefits for people that are housebound and can't get out [of the house] but to get the benefits you have to get out [of the house]. Let me tell you, brother, it's no picnic."
recommendations:
  - |
    Improve the wayfinding instructions on the Intro page:
    1. Guide users that this is the correct place to start the form
       - Actions: Decide and implement a standard between "form" and "application"; Add language that clarifies this is the place to begin the form; Remove or change the placement of the Step 5 "upload" call action from intro and submission page
       - Rationale: Some participants saw the Intro page as instructions, but not necessarily the "starting point" for the form, and didn't know what to do next. Some were confused that first call to action in the instructions is actually a link to upload the completed form.
    2. Offer the PDF as an up-front alternative
       - Actions: Add a link to the PDF form on the Intro Page as an optional alternative to the online process, so users have it up front.
       - Rationale: Several users remarked that based on their situations, printing out the form from the very beginning may have been easier for them, since there was a handoff at the end of the process anyway. We observed some participants seemed to have a better understanding of the process when they could see the "whole picture" up front while looking at the PDF
    3. Clarify and highlight the two part process
       - Actions: Update Step 4 and 5 of the existing instructions for clarity; Add additional content to the top of the instructions page, potentially using "Alert" styling, that explicitly states this is a two part form
       - Rationale: It wasn't clear to some participants that this is a two-step process that would eventually involve a third party before they began the form
    4. Help users better understand this benefit before applying
       - Actions: Add clarifying language to the Intro Page explaining who exactly receives the benefit and why; Possibly add a section to the Intro Page comparing this benefit to similar benefits the user might already be receiving or may have heard of
       - Rationale: Several participants wondered whether SMC was funding for a professional, or support funding for a family member giving care. They wondered if the funds would be going to them or the third party. Several participants wondered if they already had some version of this benefit, and even reported already having a home health aid.
  - |
    Improve the instructions and calls to action on the Confirmation page:
    1. Add detail to the instructions and clarify what users might do next
       - Actions: Add explicit options for how a user might get a form to their doctor, while not explicitly recommending anything. For instance, download the PDF and take it your next appointment, or send a [...]
       - Rationale: Despite the existing instructions, several participants struggled to understand what they needed to do specifically. They didn't necessarily know how they might get this form to a doctor.
    2. "Preview" the medical provider portion of the form
       - Actions: Add a plain language explanation to the page that not only tells the user that a doctor's input is required, but what sorts of information they will be filling out. For example, [Claimant]'s [...]
       - Rationale: Some participants were concerned that they hadn't yet provided any health information about themselves by the time they got to the end of the form. Some participants were not clear that they would need to get this form to a medical provider to completely finish their application. We hypothesize that previewing the what's next helps folks know these questions will get answered and also reveals there's more to the form, if they haven't noticed already
    3. Move "Download for your records" component
       - Actions: Move the "Download for your records" component further down the page, after the "What to do next" instructions, and potentially adjust the language.
       - Rationale: The current position of this component confused some users, as it doesn't actually download the PDF, and is separate from the workflow they actually need to do to complete the process with a medical provider
  - |
    Revise language and content throughout for clarity and to support easier decisions:
    1. Further clarify SMC vs SMP by more granular groupings
       - Actions: Further clarify SMC vs SMP by more granular groupings of the bullet points; Rewrite in general
       - Rationale: A majority of participants struggled to understand the difference between the two benefits, and which they should select. Some people figured it out by process of elimination if they did not receive [...]
    2. Add hint text to clarify who is considered the claimant
       - Actions: People interpret 'claimant' to mean 'person who is filling out the form', rather than 'person in need of the care'. We suggest modifying the question and adding clarifying hint text to [...]
       - Rationale: A majority of participants who were filling out 21-2680 for someone else (e.g., a parent they give care to) answered this question incorrectly, rendering the rest of the application invalid. Only one participant realized the error before submitting the form.
    3. Add claimant name variable for SMC/SMP choice
       - Actions: Change language from second person pronouns ("which benefit are you applying for") to third person, with the claimant's name ("which benefit is [NAME] applying for")
       - Rationale: Because many people are helping someone fill out this form or have POA and are filling it out on behalf of someone, there's confusion when using second person pronouns. This alleviates the confusion.
    4. Change "hospital care" to a term that is more clear
       - Actions: Change the phrase "hospital care" to either a) "in the hospital" or b) return to using "hospitalization."
       - Rationale: "Hospital care," as recommended by Platform, meant a number of different things to participants, including but not limited to being hospitalized, receiving medication, outpatient care, etc. When [...]
    5. Change "examiner" to "medical provider"
       - Actions: Throughout the form, change the word "examiner" to "medical provider".
       - Rationale: This word was not clear to some participants, and one even thought the word "examiner" referred to the claim examiner (rater), causing additional confusion.
kpi_alignment:
  - "Submission accuracy (reduce claimant selection errors)"
  - "Form completion rate"
  - "Error rate and rejection rate"
  - "Online vs paper submission percentage"
outcomes:
  user: |
    Veterans, dependents, and caregivers understand the 21-2680 form process, correctly identify themselves as claimants, understand the two-step process with provider handoff, and can successfully complete and submit their portion of the form
  business: |
    Reduce error rates in claimant information, improve form submission quality, decrease processing time through fewer rejections, and increase adoption of the digital form over paper submissions
opportunity_areas:
  - "Reducing confusion about claimant identity when caregivers or family members complete the form on behalf of a veteran"
  - "Clarifying the two-step digital handoff process between veteran and medical provider"
  - "Simplifying benefit selection between SMC and SMP with clearer language and definitions"
  - "Improving provider recruitment and instructions for completing the medical provider portion"
  - "Addressing pain points for housebound veterans and those with mobility challenges in accessing and using the form"
further_research_needed:
  - "Research medical providers to understand how the other side of this process works (receiving the form, conducting exams, completing provider section)"
  - "Continue researching claimant experience after making recommendations to the form"
  - "Research response to changes to the form as VBA revises the source form in 2026"
  - "Explore the provider recruitment and handoff process more deeply"
underserved_groups_missing:
  - "Transgender participants"
  - "Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous), or other gender identities"
  - "LGBTQ+ participants (gay, lesbian, bisexual)"
secondary_research:
  - "PDF form usability comparison"
synthetic_tools_used: []
tags:
  - "AUD: Veterans"
  - "AUD: Caregivers"
  - "AUD: Family Member"
  - "BNFT: Pension"
  - "PRDT: Form 21-2680"
  - "DSC: Form"
  - "DSP: Ask users for multiple responses"
  - "usability-testing"
  - "semi-structured-interviews"
  - "evaluative"
---

# 21-2680 Claimant Experience Research Study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), VA Form 21-2680, Aquia BIO Team**

**Date:** March 2026

**Contacts:** [Dave Luetger](https://github.com/dluetger), [Elyse Voegeli](https://github.com/evoeges)

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
1. Understand how veterans, dependents, and caregivers experience the claimant side of Form 21-2680.

2. Understand how veterans, dependents, and caregivers navigate getting their provider to complete the provider section, including challenges and facilitators in the handoff process.

3. Understand the usability of Form 21-2680 as it exists in its digital form.

4. Discover how Veterans, dependents, and caregivers currently interact with their providers and what pain points exist.

5. Usability test how well people understand the new digital handoff between claimant and provider.

## Research Questions

### Goals 1 + 2: Experience with claimant side
1. How clear are the instructions and form fields?
2. What is the timeline and effort required to complete the claimant side?
3. How do veterans, dependents, and caregivers feel about their experience completing Form 21-2680?

### Goal 3: Usability of digital form
4. How easy is it to navigate and complete the form?
5. Are form fields and questions clear and understandable?
6. How do veterans, dependents, and caregivers handle errors or unclear sections?
7. Is the form accessible?

### Goal 4: Provider interaction & pain points
8. How do they typically contact or coordinate with providers?
9. What challenges arise with follow-up and tracking?

### Goal 5: Understanding the digital handoff
10. Do they understand what the consent to disclose to their provider mean?
11. Do they understand their options for handoff?

## Methodology 

We conducted sixteen, moderated semi-structured interviews that also had a "form walkthrough" that acted like a usability test. We conducted these sessions remotely via Zoom.

We asked each participant background questions about their experience as Veterans or caretakers, their experience communicating with medical providers, and their experience applying for benefits.

For the "form walkthrough," we didn't have a testing environment we could share directly with participants, so instead, we shared our screens with participants, and asked them to "drive" us. We treated the sessions like a usability test, asking participants to think aloud, what they were seeing, and what they might do next on each page. During this portion of the interview, we continued to ask open-ended follow-up questions to participants about their experience as appropriate.

Each session had one facilitator and one note taker. Some sessions had one or two observers.

## Key Findings

1. Most participants who were filling out 21-2680 for someone else (eg: a parent they give care to) did not correctly choose the "claimant" for the form, and all but one of these needed to be prompted before submitting an incorrect claim.
2. Most participants struggled to understand the difference between Special Monthly Compensation and Special Monthly Pension, the two benefits described by this form, and found it difficult to make a choice.
3. Most participants had one or more issues understanding the two-step process involved in the current implementation of the "online" version of 2680, which requires a manual handoff to a medical provider.
4. Some participants struggled to begin the application process, either because they didn't see how to begin or were confused as to whether this benefit would apply to them
5. Most participants were confused by the order of the insstructions on the confirmation page, or were looking for more clarity.
6. Almost all participants struggled with the definition of the term "hospital care."
7. Most participants found other language somewhat confusing throughout the form.

## Details of Findings 

### 1. Most participants who were filling out 21-2680 for someone else (eg: a parent they give care to) did not correctly choose the "claimant" for the form, and all but one of these needed to be prompted before submitting an incorrect claim.
A majority of participants who were filling out 21-2680 for someone else (eg: a parent they give care to) answered this question incorrectly, rendering the rest of the application invalid. 

Only one participant realized the error before submitting the form. 

- _"Claimants information. My relationship to the Veteran. If I was applying for my dad I’d be a Veteran’s child. If I was applying for myself I'd be a Veteran."_
- _"At first I was going to say Veteran. But then I would look at it as myself if I was filing this out. I’m the claimant. I looked and I thought I could put Veteran but I got confused if its looking for someone that is filling out for someone else but they are a veteran. So I looked at veteran’s child even though its my FIL. It confused me. If the claimant is the veteran but not THE veteran filling it out."_
- _"That's the person that's making the file. That's, you know, that's putting in the information.” “Because if I'm feeling that for myself, then I will be the veteran, but if I'm filling it out for him, then I will be the veteran spouse, because he's my husband."_

### 2. Most participants struggled to understand the difference between Special Monthly Compensation and Special Monthly Pension, the two benefits described by this form, and found it difficult to make a choice.
A majority of participants struggled to understand the difference between the two benefits, and which they should select.  Some people figured it out by process of elimination if they did not receive pension. One person stated they would even pause the application to call a friend or the VA before proceeding.
- _"'SMC benefits are not paid without eligibility to compensation.' I don't know what that means. I’m sorry, it's just a lot of words."_
- _"Ok, 'you’re currently receiving monthly compensation or eligible…' [I'm] not sure.. I’m reading it. I’m not sure what. I’m not understanding very well. ...I wouldn't know which one is which. Or what qualifies those."_

### 3. Most participants had one or more issues understanding the two-step process involved in the current implementation of the "online" version of 2680, which requires a manual handoff to a medical provider.
It wasn’t clear to some participants that this is a two-step process that would eventually involve a third party before they began the form. And, despite the existing instructions, several participants struggled to understand what they needed to do specifically at the end of the form. They didn’t necessarily know how they might get this form to a doctor, or gave us feedback that printing it might be a challenge. Some participants were concerned that they hadn’t yet provided any health information about themselves by the time they got to the end of the form, while others were not clear that they would need to get this form to a medical provider to completely finish their application.
- _"You have to have an examiner fill out a form probably? You have to download a form, print it out and give it to the examiner I think? Is this download form? I’m not sure if you have to print this out or if it gets sent to the examiner to fill out. You have to know the process."_
- _"Why, if it can be done online, do I need a PDF version? That would be my question."_

### 4. Some participants struggled to begin the application process, either because they didn't see how to begin 
Some participants saw the Intro page as instructions, but not necessarily the “starting point” for the form, and didn’t know what to do next. Some were confused that first call to action in the instructions is actually a link to upload the completed form. They were confused why they would upload a form before even beginning the digital process.

- _"Actually, yeah, where’s the form? Am I looking at the wrong spot? Is it at the beginning of the page?"_
- When asked what they would do next to apply, while looking at the Introduction page for the form: _"I’d probably go online, look for a PDF."_
- _"[It] threw me off at number 5 where it said ‘upload.’ That’s the first thing I looked at because it was bolder and bigger than the ‘start your application’."_

### Several participants did not have confidence starting the form, because they weren't sure if this benefit would apply to them according to the instructions.
Several participants wondered whether SMC was funding for a professional, or support funding for a family member giving care. They wondered if the funds would be going to them or the third party.

Several other participants wondered if they already had some version of this benefit, and even reported already having a home health aid. This was confusing for them because they wondered if there was still more they could apply for.

- _"So I would want to know if these benefits are paid to me or a provider. A lot of times you can't afford a provider. You're getting Aunt Suzy from down the street to sit with them."_
- _"Are you applying to have an aid come in or you’re asking for family to be your aid?"_

### 6.  Almost all participants struggled with the definition of the term "hospital care."
- “Hospital care,” was recommended as preferred language, but we found it meant a number of different things to participants, including but not limited to: being hospitalized, receiving medication, outpatient care, etc. While this language might be more approachable than “hospitalized,” we saw participants struggle with the ambiguity.

- _"Hospital care is ambiguous. A housebound senior is definitely receiving some hospital care at home. Is hospital care only in the hospital? In the last 6 months he’s been in and out of the ER a half dozen times. Does that count?_"


### 7. Most participants thought it would be easier if the _entire_ form was digitized, rather than just the claimant half
We also observed that they didn’t necessarily know how they might get this form to a doctor, or gave us feedback that printing it might be a challenge.
- _"I know it’s too much to ask the two parts of the government to talk to each other but it would sure be nice if that form was just continued on to your doctor with your part already filled in."_
- _"It doesn't make sense to go in, fill it out electronically, print it, go to the doctor, come back, now I gotta friggin'…upload it and scan it, and do all that. none of that makes sense to me in this world."_
- _"How would you know who to send the PDF to? Does it show the email address or how would you know?"_
- _"I know the doctor's signature needs to be wet most of the time. Me getting a scan isn’t going to work. No SOP, no prompting if they want me to sign it first and scan and send it to me."_


---

## Additional Insights

### In some ways, the PDF was easier to use or understand because everything is exposed at once
- _"It almost helps to see the [paper] form. It answers a lot more questions than before I saw the [paper] form."_

### A core issue determining participants' experience is the their relationship with their medical provider
- Participants with positive provider relationships felt this benefit would be accessible to them. Participants who had negative provider relationships felt a high burden in 	 		the provider handoff. 
- Participants who were confident their provider could fill this out based on medical records have a much lower burden than those who need to go into the office for an exam
- _"I feel like it would be easier to send my 2,000-plus medical record to an outside doctor, and have them fill this out and upload it, than it would be for me to have my VA doctor do it, and that's the honest-to-God truth, and it's sad to say, but that's how I really feel."_

### Additional insightful quotes
- _"If they are giving benefits for people that are housebound and can’t get out [of the house] but to get the benefits you have to get out [of the house]. Let me tell you, brother, it's no picnic."_

## Recommendations

### Improve the wayfinding instructions on the Intro page
#### 1. Guide users that this is the correct place to start the form
- Actions
  - Decide and implement a standard between “form” and “application”
  - Add language in the clarifies this is the place to begin the form
  - Remove or change the placement of the Step 5 “upload” call action from intro and submission page
- Rationale
  - Some participants saw the Intro page as instructions, but not necessarily the “starting point” for the form, and didn’t know what to do next. 
  - Some were confused that first call to action in the instructions is actually a link to upload the completed form. They were confused why they would upload a form before even beginning the digital process.

#### 2. Offer the PDF as an up-front alternative
- Actions
  - Add a link to the PDF form on the Intro page as an optional alternative to the online process, so users have it up front. 
- Rationale
  - Several users remarked that based on their situations, printing out the form from the very beginning may have been easier for them, since there was a handoff at the end of the process anyway.
  - We observed some participants seemed to have a better understanding of the process when they could see the “whole picture” up front while looking at the PDF

#### 3. Clarify and highlight the two part process
- Actions
  - Update Step 4 and 5 of the existing instructions for clarity
  - Add additional content to the top of the instructions page, potentially using “Alert” styling, that explicitly states this is a two part form
- Rationale
  - It wasn’t clear to some participants that this is a two-step process that would eventually involve a third party before they began the form
  
#### 4. Help users better understand this benefit before applying
- Actions
  - Add clarifying language to the Intro page explaining who exactly receives the benefit and why
  - Possibly add a section to the Intro page comparing this benefit to similar benefits the user might already be receiving or may have heard of
- Rationale
  - Several participants wondered whether SMC was funding for a professional, or support funding for a family member giving care. They wondered if the funds would be going to them or the third party.
  - Several participants wondered if they already had some version of this benefit, and even reported already having a home health aid. This was confusing for them because they wondered if there was still more they could apply for.
 

### Improve the instructions and calls to action on the Confirmation page
#### 1. Add detail to the instructions and clarify what users might do next
- Actions
  - Add explicit options for how a user might get a form to their doctor, while not explicitly recommending anything. For instance, download the PDF and take it your next appointment,” or “send a copy of the PDF through MyHealtheVet or your doctor’s secure messaging portal”.
- Rationale
  - Despite the existing instructions, several participants struggled to understand what they needed to do specifically. They didn’t necessarily know how they might get this form to a doctor, or gave us feedback that printing it might be a challenge. We want to reduce confusion by providing a few tangible examples of what they might do.
#### 2. "Preview" the medical provider portion of the form
- Actions
  - Add a plain language explanation to the page that not only tells the user that a doctor’s input is required, but what sorts of information they will be filling out. For example, “[Claimant]’s doctor will provide information related to their housebound status, disabilities, ADLs, etc.”
- Rationale
  - Some participants were concerned that they hadn’t yet provided any health information about themselves by the time they got to the end of the form.
  - Some participants were not clear that they would need to get this form to a medical provider to completely finish their application.
  - We hypothesize that previewing the what’s next helps folks know these questions will get answered and also reveals there’s more to the form, if they haven’t noticed already
#### 3. Move "Download for your records" component
- Actions
  - Move the "Download for your records" component further down the page, after the “What to do next” instructions, and potentially adjust the language.
- Rationale
  - The current position of this component confused some users, as it doesn’t actually download the PDF, and is separate from the workflow they actually need to do to complete the process with a medical provider.

### Revise language and content throughout for clarity and to support easier decisions
#### 1. Further clarify SMC vs SMP by more granular goupings
- Actions
  - Further clarify SMC vs SMP by more granular groupings of the bullet points
  - Rewrite in general
- Rationale
  - A majority of participants struggled to understand the difference between the two benefits, and which they should select.  Some people figured it out by process of elimination if they did not receive pension. One person stated they would  pause the application to call a friend or the VA.
#### 2. Add hint text to clarify who is considered the claimant
- Actions
  - People interpret ‘claimant’ to mean ‘person who is filling out the form’, rather than ‘person in need of the care’, We suggest modifying the question and adding clarifying hint text to guide users to the right decision.
- Rationale
  - A majority of participants who were filling out 21-2680 for someone else (eg: a parent they give care to) answered this question incorrectly, rendering the rest of the application invalid. 
Only one participant realised the error before submitting the form. 
#### 3. Add claimant name variable for SMC/SMP choice
- Actions
  - Change language from second person pronouns (“which benefit are you applying for”) to third person, with the claimant’s name (“which benefit is [NAME] applying for.)
- Rationale
  - Because many people are helping someone fill out this form or have POA and are filling it out on behalf of someone, there’s confusion when using second person pronouns. This alleviates the confusion and helps provide additional wayfinding on  who ‘claimant’ is. 
#### 4. Change "hospital care" to a term that is more clear
- Actions
  - Change the phrase “hospital care” to either a) “in the hospital” or b) return to using “hospitalization.”
- Rationale
  - “Hospital care,” as recommended by Platform, meant a number of different things to participants, including but not limited to being hospitalized, receiving medication, outpatient care, etc. While this language might be more approachable than “hospitalized,” we saw participants struggle with the ambiguity.
#### 5. Change "examiner" to "medical provider"
- Actions
  - Throughout the form, change the word “examiner” to “medical provider”.
- Rationale
  - This word was not clear to some participants, and one even thought the word “examiner” referred to the claim examiner (rater), causing additional confusion.
  
## Next Steps

- [ ] Socialize with BIO leadership and Compensation and Pension SMEs
- [ ] Address immediately actionable issues (see below)
  - [ ] _tickets_
- [ ] Document medium and long term issues

## Further research needed

We'd like to continue researching the claimant experience of 2680 especially after making some of the above changes. In addition, the source form is up for revision this year (2026). As the form changes, we may be able to influence the language or procedure based on our findings. We would want to follow up on the experience if that were the case.

Most of all, we want to research medical providers to understand how the other side of this process works. What's it like to receive this form? To conduct this exam? How might we make this process easier for Veterans _and_ doctors?

## Appendix

### Research documents
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/21-2680/research/2026-02-medical-provider-research/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/21-2680/research/2026-02-medical-provider-research/conversation-guide.md)
- [Interview transcripts](link here)

### Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
### Pages and applications used

We tested directly from the [staging environment](https://staging.va.gov/pension/aid-attendance-housebound/apply-form-21-2680/).

### Other supporting documents created

[2680 Figma file](https://www.figma.com/design/cvZN6kMZSMcczGLxJJK5NK/VA-Form-21-2680?node-id=0-1&t=nbCEL11iYLwIeeY9-1)


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

#### Demographics 

We talked to **16 participants.**

Audience segment:
* Veterans: 10
* Caregivers: 4
* Family members of a Veteran: 2


Gender:
* Male: 8
* Female: 8


LGBTQ+:
* Transgender: unknown 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown
* Gay, lesbian, or bisexual: unknown


Devices used during study: 
* Desktop: 15 
* Smart phone: 1
* Assistive Technology: x


Age:
* 25-34: 2
* 35-44: 4
* 45-54: 2
* 55-64: 4
* 65+: 4
* Unknown: 0


Education:
* High school degree or equivalent: 2
* Some college (no degree): 4
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 5
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 1

Geographic location:
* Urban: 12
* Rural: 4
* Unknown: 0

Race:
* White: 8
* Black: 5
* Hispanic: 2
* Biracial: 1
* Asian: 1
* Native: 0


Disability and Assistive Technology (AT):
_We did not specifically screen for disability to AT use this round, though we did observe some instances where our participants did use assistive technology during our sessions._

* Cognitive: 1
* AT beginner: unknown
* AT advanced user: unknown
* Desktop screen reader: unknown
* Mobile screen reader: unknown
* Magnification/Zoom: unknown
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: unknown
* Hearing aids: 1
* Sighted keyboard: unknown
* Captions: 1

During the next round of research, we may want to focus more heavily on specifically recruiting:
* Participants over 65 years of age
* Participants who use assistive technology
