---
title: "Travel Pay Complex Claims UAT Research Findings"
product: "Travel Pay"
team: "Travel Pay"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-01-29"
researchers:
  - "Kristen Faiferlick"
  - "Liza McRuer"
research_goals:
  - "Ensure a beneficiary can file a complex claim on VA.gov from start to finish. We want to ensure a user can understand the steps and limitations, start a claim, add expenses to their claim, and file a claim."
  - "Test that the content, including error messages and redirects, appear properly and are clear to users."
  - "Validate that users can leave, and re-enter, a claim in progress."
methodology:
  - "User acceptance testing (UAT) in production"
  - "Remote, moderated sessions"
devices_used:
  desktop: 2
  tablet: 1
  smartphone: 6
  assistive_technology: 0
participants_total: 8
demographics:
  veterans: 8
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 0
    "35-44": 1
    "45-54": 5
    "55-64": 0
    "65+": 2
    unknown: 1
  education:
    high_school: 3
    some_college: 0
    associates: 3
    bachelors: 1
    masters: 1
    doctorate: 0
    unknown: 0
  location:
    urban: 3
    rural: 4
    unknown: 1
  race:
    white: 3
    black: 1
    hispanic: 1
    biracial: 3
    asian: 0
    native: 0
  disability:
    cognitive: 3
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 1
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "UI is intuitive and usable, but critical flow and navigation improvements will reduce friction. Overall, testing proved that the interface is understandable - participants could add, edit, and delete expenses; upload receipts; and quickly learn patterns within the flow - but certain navigation elements caused friction and inefficiency."
  - "Field labels and hint text are essential while missing or vague guidance causes user error. Clear, contextual labels and hint text helped participants enter correct information while absent or vague help caused confusion."
  - "Users weren't completely confident that their claim progress was being saved. Some participants assumed the system autosaves, based on previous VA experience, but some noted that the 'Save in Progress' indicator was not present, which caused doubt."
  - "Participants struggled to understand deductible language and how it would affect their estimated reimbursement totals. Additionally, while users were able to add mileage, several of them did not understand how mileage was calculated or how gas costs factored into their trip."
  - "Participants noted that it was difficult to find travel pay on VA.gov and witnessed users struggling to navigate to the appropriate location to start a claim."
  - "One user could see their mobile clinic appointment in the past appointment list, but claims for this clinic were repeatedly rejected by the system when filed digitally or simply did not show up in their claims list when they filed with the paper form."
  - "Some participants were not clear from the claim detail page if their claim was submitted or in-progress. Several feared that the claim had already been submitted."
  - "When viewing their list of past appointments on the web, participants struggled to know which appointment they had filed a travel claim for."
  - "Participants expressed concern about filing past 30 days and were concerned there could be repercussions from VA."
  - "Breadcrumbs did not meet expectations and caused confusion about where users were in the flow and where they would return to. Most users believed breadcrumbs would step back to the previous page, but they were designed to take the user to where they entered the flow."
recommendations:
  - "Due to the different entry points into complex claims, there are some issues with routing we need to consider, but we will re-evaluate the breadcrumbs and work with Platform IA in order to improve the navigation."
  - "Audit input fields and ensure that each has a concise and accurate label and hint text. Work with stakeholders to provide valuable hint text language for fields where it is missing."
  - "Build upon the existing language telling users their data will be saved, and explore ways of visually highlighting saved progress as the user navigates the flow."
  - "Rewrite deductible copy to explicitly state that the estimated amount may not take into account the deductible. Blue sky goal: Investigate an interactive element that is tailored to each Veteran's status and input."
  - "Update the appointment list and claim detail page to add clarity about which appointments the user can file claims for and the state of the claim, if they've already started or submitted a claim."
kpi_alignment:
  - "Steady increase of overall claim submission quantity (YoY)"
  - "Positive shift in claim submission volume from BTSSS to VA.go ecosystem (web + mobile)."
outcomes:
  user: "Veterans can successfully file travel reimbursement claims with attachments on VA.gov, supporting the consolidation of travel claims systems."
  business: "First step in consolidating systems in order to eventually sunset the Beneficiary Travel Self Service System (BTSSS) portal."
opportunity_areas:
  - "Improved navigation and breadcrumb design to meet user expectations"
  - "Clearer field labels and hint text across all input fields"
  - "Enhanced visual indicators for save progress throughout the flow"
  - "Improved deductible language and calculations"
  - "Better discoverability of travel pay tool on VA.gov"
  - "Integration or consistency indicators for mobile clinic appointments"
  - "Clearer appointment list indicators showing whether claims have been filed"
  - "Days-left-to-file indicator on appointment lists"
further_research_needed:
  - "Further UAT focused on users with assistive technology"
  - "Additional testing on complex mileage scenarios"
  - "Targeted survey to gather additional data on the complex claims flow for community care appointments"
underserved_groups_missing:
  - "Age 55-64 (only 2 participated, target was 4)"
  - "Assistive technology users (0 participated)"
  - "Veterans with no degree (0 participated)"
  - "Asian Veterans (0 participated)"
  - "Native/American Indian or Alaska Native Veterans (0 participated)"
  - "LGBTQ+ Veterans (0 participated)"
synthesis_tools_used:
  - "Mural"
tags:
  - "PRDT: Travel Pay"
  - "BNFT: Healthcare"
  - "AUD: Veterans"
  - "usability-testing"
  - "user-acceptance-testing"
  - "evaluative"
  - "DSC: Form"
  - "DSC: Form - File Input"
  - "DSP: Ask users for files"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "HDW: Tablet"
---

# Travel Pay Complex Claims UAT Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Travel Pay Complex Claims, Travel Pay**

**Date:** 01/29/2026

**Contacts:** Kristen Faiferlick, Liza McRuer

**[Research Readout (PDF)](link-here)**  TBD
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
Travel Pay Complex Claims UAT tested whether Veterans can easily use the new travel claims functionality and submit claims successfully. Our goals in conducting UAT on complex claims were to:
1. Ensure a beneficiary can file a complex claim on VA.gov from start to finish. We want to ensure a user can understand the steps and limitations, start a claim, add expenses to their claim, and file a claim.
2. Test that the content, including error messages and redirects, appear properly and are clear to users.
3. Validate that users can leave, and re-enter, a claim in progress.   

**Guiding Questions:**  
- What are the key moments this tool supports in the Veteran’s journey?
  * In the Veteran journey, this work primarily falls under starting up, taking care of myself, putting down roots, and retiring.   
- What outcomes are we aiming to achieve for Veterans and stakeholders?
  * We want Veterans to successfully able to file claims with attachments on VA.gov, the first step in consolidating systems in order to eventually sunset the Beneficiary Travel Self Service System (BTSSS) portal.

## Research Questions

1. Does the user understand the qualifications around filing on VA.gov, and if they are unable to file on VA.gov, does our process successfully route them to BTSSS?
2. Are participants able to add mileage, as well as additional expenses with documentation, to their claim?
3. Can the participant successfully edit and delete an expense?
4. How does the participant navigate within the tool?
5. Can a participant leave their claim and then return to it at a later time to add expenses or submit?
6. Can the participant successfully submit a claim?   

## Methodology 

- Method: Remote, moderated user acceptance testing (UAT) in production with live appointment and claims data. Participants were observed and guided by researchers as they filed travel reimbursement claims.   

We conducted hour-long remote moderated research sessions via Zoom between January 20-23, 2026. Participants were asked to login to the VA.gov accounts and file travel claims for eligible past medical appointments. We used a series of pre-determined metrics to monitor success. Because the tests were live and we had no way of knowing what scenario each participant might have, our standards determined that we needed 1 successful instance of each metric to consider the UAT complete.

Our primary metrics tracked the following scenarios:     
1. User starts a claim.    
2. User adds mileage to their claim.   
3. User continues to the additional expense flow.   
4. User uploads a file.   
5. User adds metadata to an expense.   
6. User successfully adds an additional expense (with attachment) and views it on the unsubmitted expenses page.   
7. User successfully submits a simple mileage-only claim.
8. User exits and re-enters the flow.
9. User successfully submits a claim with 1+ file (a complex claim).

We also monitored additional scenarios, or subtasks, that were not considered critical to submission:   
1. User edits an expense.
2. User cancels the editing of an expense.
3. User deletes an expense.
4. User cancels the deletion of an expense.
5. User exits the expense page before submitting.


[Metric tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2025-12%20Complex%20Claims%20UAT/Metric%20Tracker%20UAT.png)


## Hypotheses and Conclusions

- **Hypothesis Statement:** We hypothesize that a beneficiary will be able to complete a claim on VA.gov from start to finish. Beneficiaries may be confused by some of the nuances of complex claims, but our content and direction will allow them to successfully add expenses, edit expenses, leave a claim, re-enter, and submit a claim on VA.gov.

- A beneficiary will be able to complete a claim on VA.gov from start to finish.
  * **Definitely True**: We had 3 Veteran participants, as well as 1 Veteran stakeholder, start and submit claims on VA.gov. The 3 Veteran participants successfully submitted simple mileage-only claims and our Veteran stakeholder submitted a claim with an attachment.

- A beneficiary will be able to successfully add expenses.
  * **Definitely True**: We had 6 Veteran participants successfully add expenses to their claims.
  
- A beneficiary will be able to successfully edit expenses.
  * **Definitely True**: We had 3 Veteran participants who were able to either successfully edit or delete expenses on their claim.

- A beneficiary will be able to leave a claim and re-enter a claim.
   * **Likely True**: We had 1 Veteran participant exit the claim flow, then return to the claim through appointment details.     

## Key Findings

> **After completing your detailed findings below, you'll add metadata labels using the [Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md).**  

[Example Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#key-findings)

1. **UI is intuitive and usable, but critical flow and navigation improvements will reduce friction.**
   * Overall, testing proved that the interface is understandable - participants could add, edit, and delete expenses; upload receipts; and quickly learn patterns within the flow - but certain navigation elements caused friction and inefficiency.

2. **Field labels and hint text are essential while missing or vague guidance causes user error.**
   * Clear, contextual labels and hint text helped participants enter correct information while absent or vague help caused confusion.

3. **Users weren’t completely confident that their claim progress was being saved.**
   * Some participants assumed the system autosaves, based on previous VA experience, but some noted that the “Save in Progress” indicator was not present, which caused doubt.
  
4. **Content about travel pay complexities, especially deductibles, is confusing.**
   * Participants struggled to understand deductible language and how it would affect their estimated reimbursement totals. Additionally, while users were able to add mileage, several of them did not understand how mileage was calculated or how gas costs factored into their trip.   


## Details of Findings 

> [!TIP]
> **After drafting your detailed findings, apply OCTO metadata labels to enable automated pattern detection and cross-study aggregation.**
> Use the [GitHub Copilot Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md) to generate structured YAML label blocks for each finding below.

### Finding 1: UI is intuitive and usable, but critical flow and navigation improvements will reduce friction.   

```yaml key-finding-labels
finding_id: 1
finding_title: "UI is intuitive and usable, but critical flow and navigation improvements will reduce friction"
labels:
  finding_types:
    - usability_issue
    - positive_feedback
    - process_inefficiency
  severity_levels: medium
  research_themes:
    - navigation_wayfinding
    - user_expectations
    - mental_models
    - task_completion
    - user_satisfaction
  product_areas:
    - health_care
    - claims_appeals
  journey_stages:
    - application
    - ongoing_management
  user_characteristics:
    - experienced_user
  emotional_states:
    - empowered
    - confident
  design_system_patterns:
    - breadcrumbs
    - buttons_actions
    - file_upload
    - review_edit_patterns
  temporal_patterns:
    - emerging_trend
service_journey_mapping:
    - "Travel Claim Filing"
pattern_triggers:
    - "Journey Friction Patterns"
```

* **Participants reliably added, edited, and deleted expenses and uploaded receipts with metadata.**

     > “I see where it says ‘add more expenses’ here at the top, just under where it says ‘your unsubmitted expenses,’ so I would probably click that. - P6

     > P7: "I would just click the delete, and I’m sure it deletes it all together, but if, you know, it was that I needed to change the upload or description, you know one of the, excuse me, the cost, or date or whatever it is, any bit of that information, I’m… I would imagine the edit is the proper route, and it just takes you back to the previous page, and probably, you know, gives you the chance to do it all over again."   
     > Moderator: “So if you wanted to change the date, what would you do?”   
     > P7: “So I could click ‘edit.’ And then yeah, you can change any bit of the information [...] But if I just needed to change the date, that’s an easy fix.”   
     > P7 [after clicking 'edit']: “Yeah, and this is, this is really great. It’s nice that, it’s nice that, you know, when you hit edit, it doesn’t, you know, it doesn’t put you back and delete everything [...] I like that it has all the information you’d already submitted, including the upload and it allows you to change, you know, just one piece of it if you need to, and you don’t have to start over.”

     > “I would drag it [the file] into the… to the… the box here, which you know, works just fine. That actually uploaded very quickly, and I like that it shows a little preview, as well.” - P7

* **Participants understood that adding expenses did not submit the claim until they pressed the “Sign agreement” button.**   

  > “And I get that it’s unsubmitted, I haven’t, you know, done the final submission for it.” - P7

  > "But when it says, ‘sign agreement,’ that was a little indicator to me, like, no, I don’t want to do that yet.” - P9

* Several participants expressed a preference for selecting multiple expenses from a single screen rather than being routed into a separate “choose an expense” flow.

  > “It might be confusing, more confusing to some. For me, I think it would be easier as, you know, what type of expenses and, you know, you could select multiple if needed, and it would walk you through, you know, one by one.” - P7

  > “I can only select one at a time, so what if there’s… It’s kind of confusing because, yeah, so I might be submitting for mileage, but what if I have a parking thing at the same time for that exact same travel claim?” - P8

  > [Participant trying to select mileage and tolls at the same time] “Oh. I guess I have to do them individually.” - P9

* **Breadcrumbs did not meet expectations and caused confusion about where users were in the flow and where they would return to. The breadcrumbs were designed to take the user to where they entered the flow, but most users believed they would step back to the previous page.**

  > Moderator: “Another question for you, without clicking on it, on this page at the top, we see a little ‘back’ with a little arrow. If you were to click on that, where do you think it would take you?”
  > P2: “Previous page."

  > Moderator: “If you scroll up a little bit to the top, we had a question about the breadcrumb there again, too, and where do you imagine that back button goes to?”
  > P7: “Probably just to, as if I hadn’t, the previous page, I mean, as if I hadn’t selected to add any additional expenses.”

  > Moderator: “The little back breadcrumb at the top, where do you think that takes you?”
  > P8: "I have no idea."

  > Moderator: ““Note that there is a little back arrow. If you were to tap it, where would that take you?”
  > P9: "Good question. Uh, trying to remember what the page was before this one. I guess it takes me back to the, uh, it would take me back to the page where I’m saying, where am I leaving from?”

### Finding 2: Field labels and hint text are essential; missing or vague guidance causes user error.   

```yaml key-finding-labels
finding_id: 2
finding_title: "Field labels and hint text are essential while missing or vague guidance causes user error"
labels:
  finding_types:
    - content_confusion
    - usability_issue
  severity_levels: high
  research_themes:
    - content_comprehension
    - form_completion
    - user_expectations
    - help_support
  product_areas:
    - health_care
    - claims_appeals
  journey_stages:
    - application
  user_characteristics:
    - first_time_user
  emotional_states:
    - confused
    - frustrated
  design_system_patterns:
    - form_fields
    - help_text_tooltips
    - form_validation
    - labels
  temporal_patterns:
    - recurring_issue
service_journey_mapping:
    - "Travel Claim Filing"
pattern_triggers:
    - "Form Validation Cascade"
```

* **When entering information into the expense pages, participants praised hint text that clarified expected input, but were uncertain how to use fields like “description” when no guidance was present. The ambiguous fields cause additional burden on the user.**

  > “You know, it’s nice that you have the clarification that even if it’s the same as the, you know, check-in or check-out, to go ahead and add the date on the receipt, and I’m sure that’s helpful on the backend to make sure that they’re looking at the right receipt.” - P7

  > “Description. What am I putting there? I need more elaboration on that, though. What do they want us to put in regards to that?” - P5

  > “The ‘where do you stay,’ that’s… you know, I think that could probably be refined, because honestly, I don’t know if you’re looking for city and state, or if you’re looking for, you know, the name of the facility itself.” - P7

  > “The description’s a little vague, in my opinion [...] Because it seems like it’s doing, like, it’s asking, why did you choose this public transportation? It’s kind of the same thing as maybe the description? I don’t know, does it need to be both, you know what I’m saying?” - P8

### Finding 3: Users weren’t completely confident that their claim progress was being saved.     

```yaml key-finding-labels
finding_id: 3
finding_title: "Users weren't completely confident that their claim progress was being saved"
labels:
  finding_types:
    - usability_issue
    - content_confusion
  severity_levels: high
  research_themes:
    - trust_credibility
    - user_expectations
    - mental_models
    - content_comprehension
  product_areas:
    - health_care
    - claims_appeals
  journey_stages:
    - application
    - ongoing_management
  emotional_states:
    - anxious
    - uncertain
  trust_factors:
    - confirmation_needed
    - status_uncertainty
    - process_transparency
  design_system_patterns:
    - alerts_notifications
    - save_in_progress
    - success_messaging
  temporal_patterns:
    - recurring_issue
service_journey_mapping:
    - "Travel Claim Filing"
pattern_triggers:
    - "Waiting Period Anxiety"
    - "Progress Indicator Confusion"
```

* **Although there is content on the intro page that informs users that claims in progress will be saved, participants did not express confidence that their work would be available if they left and returned.**

  > Moderator: “If you wanted to leave your claim and come back to it, do you imagine that your information would be saved?”
  > P7: “No, it doesn’t appear that it would be, because I mean, it’s a, you know, it’s not like much would be lost. There’s only, you know, a couple of bits of information, but there is no, you know, save and exit, or save and continue later.”
  > [Upon discovering it was saved] P7: “That’s nice. I mean, there was no, as I as I could tell, there was no indication, previously that it would, you know, save your progress.”

### Finding 4: Users weren’t completely confident that their claim progress was being saved.    

```yaml key-finding-labels
finding_id: 4
finding_title: "Content about travel pay complexities, especially deductibles, is confusing"
labels:
  finding_types:
    - content_confusion
    - unmet_need
  severity_levels: high
  research_themes:
    - content_comprehension
    - user_expectations
    - pain_points
    - mental_models
  product_areas:
    - health_care
    - claims_appeals
  journey_stages:
    - application
  user_characteristics:
    - first_time_user
  emotional_states:
    - confused
    - overwhelmed
  trust_factors:
    - data_accuracy_concern
    - process_transparency
  design_system_patterns:
    - form_fields
    - help_text_tooltips
    - typography_hierarchy
  temporal_patterns:
    - recurring_issue
service_journey_mapping:
    - "Travel Claim Filing"
pattern_triggers:
    - "Cognitive Overload"
```

* **Although information about the deductible is present in the estimated reimbursement section, no participants truly understood how the deductible affected their current payment.**   

  > “And that’s…and I’ve come across this as well, the deductible information, and I think it doesn’t mention it on the app, but it does online, so I’ve seen it before. And it is a bit confusing, it’s like, you know, what is the, the deductible? I-I-It just doesn’t make sense.” - P7

  > Moderator: “Does that $21.13 take into account your deductible?”
  > P6: “I don’t know. It’s a good question.”

  > “You’ll pay no more than $18 total each month. What does that mean? I don’t know. That’s kind of…that’s kind of not. That doesn’t make a lot of sense to me.” - P8

  > “I mean, it’s…it’s a computer, so it should be smart. But I suppose if this was my third or fourth travel claim for the month of January, then it would know that I’ve already satisfied the deductible on the first three. And I suppose it could calculate all that, but I would think that’s going to be done at the, I’ll call it, the other end.” - P9

* **Participants could file for mileage, and most did so without question, but when asked if they understood the calculations, they were unsure how mileage is calculated or how gas relates to mileage reimbursement.**   

  >  Moderator: “If you had questions on how VA calculates mileage or gives you money for mileage, how would you find out more about that?”
  > P8: “I have no idea. I think it’s right by whatever the state comes up with, or IRS law? Or is it state law? I’m not sure, which, okay. No idea.”


* **Most participants did understand the high-level eligibility and direct deposit overview on the intro page, but that could be influenced by the sample group’s prior experience with travel pay.**

  > "So yes, I’m eligible for healthcare travel reimbursement. 100% disabled. You could be at 10% and still receive that. Your travel reimbursement direct deposit set up, yep [...] it’s self-explanatory.” - P5


---

## Additional Insights
The focus of our UAT was to specifically ensure that complex claims was functioning and usable, but during the course of testing we also noted other areas for improvement.   

* **Participants noted that it was difficult to find travel pay on VA.gov and we witnessed users struggling to navigate to the appropriate location to start a claim.**

  > “I don’t know if it matters because VA.gov is different than MyHealtheVet, but because I’m like in MyHealtheVet more than I am in VA.gov, I think there should be an easier option to submit instead of having to navigate to VA.gov for travel.” - P2


* **One user could see their mobile clinic appointment in the past appointment list, but claims for this clinic were repeatedly rejected by the system when filed digitally or simply did not show up in their claims list when they filed with the paper form.**

  > “I got new hearing aids [...]. I’ve not been able to file. I attempted to file a paper form for that, but never went through. And it’s kind of an unusual situation at my clinic because the hearing department is actually situated in a van. It’s parked outside the building.” - P10

    We were able to view the appointment in the participant’s past appointment list, but just as they stated, it did not register when we attempted to file the claim. We believe this requires further investigation and are creating a Service Now ticket to assess if there is a possible bug around mobile clinics.   

* **Some participants were not clear from the claim detail page if their claim was submitted or in-progress.** Several feared that the claim had already been submitted. This may be resolved by adjusting language and adding “days left to file” for unsubmitted claims.

  > “I was afraid something like this might happen. This happened to me once before. So it just filed my travel claim.” - P9

* **When viewing their list of past appointments on the web, participants struggled to know which appointment they had filed a travel claim for.** A few participants referenced and spoke highly of the appointments list on the VAHB app, which has a “days left of file” indicator on eligible appointments.

  > “Yeah, so this looks a lot like the app when I go into the app. I go to the appointment and it automatically has the file for travel reimbursement claim, which I really like, because then it’s all on one page, so I can see my appointment stuff, what appointment it was, whether it was video or not. And then I can know that I can file or not. And then it tells me how many days I have left to file.” - P6

  > “Well, remember when we first started and I showed you the VA app, and it, you know, I thought that was very useful when it showed that, you know, past appointments, you have one eligible for a travel claim. That was very useful. And I suppose if I had been in the app within 30 days of my appointment that I forgot to file, that would have served as a reminder for me.” - P9

* **Participants expressed concern about filing past 30 days and were concerned there could be repercussions from VA.**

  > “I don’t want it to look like I’m submitting also…Like, it’s, you know, like I’m lying or something, I don’t know. I mean, I did have the appointment, but it’s over the timeframe. I mean, I could submit it, I don’t know.” - P2

  > “Yeah, I don’t want to do that. I don’t want to look bad in their system, and be flagged or something.” - P5   


## Recommendations

1. **Recommendation:** Due to the different entry points into complex claims, there are some issues with routing we need to consider, but we will re-evaluate the breadcrumbs and work with Platform IA in order to improve the navigation. 

2. **Recommendation:** Audit input fields and ensure that each has a concise and accurate label and hint text. Work with stakeholders to provide valuable hint text language for fields where it is missing.

3. **Recommendation:** Build upon the existing language telling users their data will be saved, and explore ways of visually highlighting saved progress as the user navigates the flow.

4. **Recommendation:** Rewrite deductible copy to explicitly state that the estimated amount may not take into account the deductible. 
Blue sky goal: Investigate an interactive element that is tailored to each Veteran’s status and input.

5. **Recommendation:** Update the appointment list and and claim detail page to add clarity about which appointments the user can file claims for and the state of the claim, if they've already started or submitted a claim.


## UAT Summary   
Complex claims met the metrics determined for a successful UAT. All participants who were able to either test a variety of screens or fully file (6 of 9) rated the process of filing a travel claim as “easy” or “extremely easy.” Any bugs that were uncovered during the course of UAT were addressed and fixed. The product was released to a portion of users starting on February 9, 2026. The Travel Pay team will continue to monitor feedback and analytics in order to ensure the product functions as users add more complex scenarios.

## Product User and Business Outcomes


### Desired User Outcome 
This research supports our desired user outcome by:   
* Creating a seamless and positive health-care travel related reimbursement claim creation, submission, and management experience for Veterans and caregivers on the VA.gov website and VAHB mobile app
* Enjoy a simple and intuitive experience that meets all VA accessibility, design, and performance standards
* Increase the number of claims filed successfully

 
### Desired Business Outcome
This research supports our desired business outcome by:   
* Increasing the number of claims filed successfully through VA.gov vs BTSSS
* Increased user satisfaction rating
* Increased travel claims submission accuracy
* Positive user survey feedback received   


## Key Performance Indicators

### KPI 1: Steady increase of overall claim submission quantity (YoY)
This research supports measurement of this KPI by:   
* Providing users an efficient way to file complex claims on VA.gov, directly from their past appointment list

### KPI 2: Positive shift in claim submission volume from BTSSS to VA.go ecosystem (web + mobile)   
This research supports measurement of this KPI by:   
* Reducing reliance on BTSSS and directing more Veterans to file on VA.gov

## Next Steps

1. For the recommended enhancements, the travel pay team has created tickets to track and investigate.
2. The travel pay team has plans to launch additional functionality for users filing for travel pay on community care appointments in Q2 of 2026. Ideally, we’d also like to gather additional data on the complex claims flow with a targeted survey.
3. Certain scenarios around complex mileage were not included in the MVP launch. These scenarios were planned for part of a later iteration and the flow correctly routes users back to the BTSSS portal. The travel pay team has started investigation into complex mileage and has planned for further usability testing.


> [!TIP]
> Once your **Recommendations** and **Next Steps** are finalized, you can quickly turn them into GitHub issues using the reusable Copilot prompt in [`create-issues-from-research-findings-prompt.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/create-issues-from-research-findings-prompt.md).  
> **After creating issues, add their hyperlinks back here under their corresponding "Recommendation" or "Next Step."**
> 
> If you need Github Copilot Enterprise Access, please complete this [Issue](https://github.com/department-of-veterans-affairs/copilot-onboarding/issues/new?template=copilot-onboarding.yml).

## Further research needed

While we completed accessibility reviews and utilized existing design components, this product could benefit from further UAT focused on users with assistive tech.

## Appendix

### Research documents
- [Product Outline](products/health-care/beneficiary-travel/product)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/beneficiary-travel/research/2025-12%20Complex%20Claims%20UAT/UAT%20Plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2025-12%20Complex%20Claims%20UAT/conversation%20guide.md)
- [Interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/research/2025-12%20Complex%20Claims%20UAT/UAT%20notes#readme)
### Tools used for Synthesis
- [Synthesis Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1769456573363/fa6b1547ac784ad32fea64ba6fcac991609a86ef)
  
### Pages and applications used
- Complex claims _Note: While we tested in production, this is a link to complex claims on staging. Travel claims are created from eligible past appointments._
- [Figma designs](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=250-9661&t=WVfa2eUUYbz4thgK-1) _Note: Because we tested in production, the Figma files are an easier way to see the flow._


<!-- ### Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


### Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.* -->

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

We talked to **8**. One participant cancelled midway through the session, and one did not show. 

Audience segment:
* Veterans: 8
* Caregivers: 0
* Family members of a Veteran: 0 


Gender:
* Male: 6
* Female: 2


LGBTQ+:
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: Unknown


Devices used during study: 
* Desktop: 2
* Tablet: 1 (the partial session was on a tablet) 
* Smart phone: 6 
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 1
* 45-54: 5
* 55-64: 0
* 65+: 2
* Unknown: x


Education:
* High school degree or equivalent: 3
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 3
* Bachelor's degree: 1
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 3
* Rural: 4
* Unknown: 1


Race:
* White: 3
* Black: 1
* Hispanic: 1
* Biracial: 3
* Asian: 0
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: 3
* AT beginner: None
* AT advanced user: None
* Desktop screen reader: None
* Mobile screen reader: None
* Magnification/Zoom: None
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: None
* Hearing aids: 1
* Sighted keyboard: None
* Captions: None


#### Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:

* Age 55-64+
* Rural
* No degree
* Assistive tech
* Identify as Latinx, Asian, Native, or LGBTQ+

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2025-12%20Complex%20Claims%20UAT/UAT%20demographics%202026.png)
#### A more accessible version of the table in the above image   

| Demographic Category | Type | Target % | Recruited | Participated | Met Goal |
|---|---|---|---|---|---|
| All participants | Total | n/a | 9 | 8 | n/a |
| Assistive Tech (AT) users | Total | n/a | n/a | 0 | n/a |
| No-show participants | Total | n/a | n/a | 2 | n/a |
| Age 55-64+ | General | 50% | 4 | 2 | no |
| Cognitive Disability | General | 50% | 4 | 3 | no |
| Mobile user | General | 50% | 4 | 6 | yes |
| Rural | General | 25% | 2 | 4 | yes |
| No degree | General | 25% | 0 | 0 | no |
| Other than honorable | General | 21% | 0 | 0 | no |
| Immigrant origin | General | 17% | 0 | 0 | no |
| Women | General | 10% | 1 | 2 | yes |
| Expat (living abroad) | General | 0.40% | 0 | 0 | no |
| Black or African American | Race | 15% | 1 | 1 | yes |
| Hispanic, Latino, or Spanish origin | Race | 12% | 1 | 1 | yes |
| Biracial | Race | 3.90% | 1 | 3 | yes |
| Asian | Race | 2.70% | 1 | 0 | no |
| Native Hawaiian or other Pacific Islander | Race | 0.30% | 1 | 0 | no |
| First Nations (Canada) | Race | n/a | 1 | 0 | no |
| Native, American Indian or Alaska Native | Race | 1.60% | 1 | 0 | no |
| Gay, lesbian, or bisexual | LGBTQ+ | n/a | 1 | 0 | no |
| Transgender | LGBTQ+ | n/a | 1 | 0 | no |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | LGBTQ+ | n/a | 1 | 0 | no |
| Beginner AT User | AT | 50% | 0 | 0 | no |
| Experienced AT User | AT | 50% | 0 | 0 | no |
| Desktop Screen Reader (SR) | AT | 20% | 0 | 0 | no |
| Mobile Screen Reader (SR) | AT | 20% | 0 | 0 | no |
| Magnification/Zoom | AT | 20% | 0 | 0 | no |
| Speech Input Tech (Siri, Dragon) | AT | 20% | 0 | 0 | no |
| Hearing Aids | AT | 20% | 0 | 0 | no |
| Sighted Keyboard | AT | 10% | 0 | 0 | no |
| Captions | AT | n/a | 1 | 0 | no |
| Switch Device | AT | n/a | 1 | 0 | no |
| Braille Reader | AT | n/a | 1 | 0 | no |

