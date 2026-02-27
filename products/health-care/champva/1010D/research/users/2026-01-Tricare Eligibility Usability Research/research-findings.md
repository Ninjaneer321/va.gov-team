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

# [CHAMPVA Tricare Eligibility Usabilty Study] Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), 10-10D CHAMPVA application, Health Apps**

**Date:** January - February 2026

**Contacts:** [Health Apps UX Team - Renata K, Jessica S, Hieu V]

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

1. Learn where there are content comprehension issues within the eligibility questions and error messages options tested.

2. Discovery around two flows - one using a new VADS pattern and the other with a VADS pattern and API hybrid approach - to determine usability and user preference for both.
   
3. Learn if there are any usability issues with the new VADS eligibility pattern and/or hybrid option.


## Research Questions

`Goal 1: Learn where there are content comprehension issues within the eligibility questions and error messages options tested.`

**`1.`Do participants find the introduction page eligibility content clear and easy to understand?**

**`2.`Do participants find the eligibilty questions asked in the VADS pattern flow confusing, unclear or state they need additional information?**

**`3.`Do participants understand the content in the error messages clear enough to state what specific action, if any, they would need to take when applying for benefits?**



`Goal 2: Discovery around two flows - one using a new VADS pattern and the other with a VADS pattern and API hybrid approach - to determine usabilty and user preference for both.`

**`1.`Is the flow of prototype Blueberry and the VADS eligibility pattern easy for participants - both Veterans and family members?**

**`2.`What flow do participants seem to find easier via self-reported ratings and quotes?**


`Goal 3: Learn if there are any usability issues with the new VADS eligibility pattern and/or hybrid option.`

**`1.`Do participants clearly understand the eligibility gray results box with the icons in the pattern?**

**`2.`Do the error alerts in the hybrid option add any confusion or do participants state incorrect actions needed?**


## Methodology 
- Semi-structured interviews/usabilty testing with mid-fidelty prototypes to explore two options of implementation and content options for alerts
- The study used an A/B protocol to randomize prototype order and reduce recency bias; findings show no strong correlation between prototype order and participant preference.



## Hypotheses and Conclusions

- **Hypothesis Statement:** [We assume that both Veterans and their family members will find the hybrid API-driven approach to provide more immediate, personalized feedback than the VADS pattern approach, but both may have different strengths.]  
  - **"Maybe True"**  
  - Participants self-reported a mix of preference. 6 preferred Blueberry, 5 preferred Pineapple and 4 stated they were similar or had no preference.
  - Some of those who stated Pineapple as their prferrence the reason why was due to the prototype appearing to check DEERS for their TRICARE status. 


- **Hypothesis Statement:** [We assume that the VADS pattern will add clarity to the eligibility of CHAMPVA benefits and will be recieved positively by both Veterans and their family members.]  
  - **“Likely False”**  
  - Key finding 1: The “Check eligibility” default pattern was confusing to most participants when they were not eligible (Pineapple prototype) mostly due to the double negative statement and visual misunderstanding. 

 
- **Hypothesis Statement:** [We assume that participants may find both approaches similarly confusing/helpful, suggesting content improvements are more important than flow differences.]  
  - **"Likely True"**  
  - Participants were split on their preferred preference of a prototype between Blueberry and Pineapple, but many had points of confusion or suggestions of improvement to the content.

    
## Key Findings

> **After completing your detailed findings below, you'll add metadata labels using the [Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md).**  


1. The “Check eligibility” default pattern was confusing to most participants when they were not eligible (Pineapple prototype) mostly due to the double negative statement and visual misunderstanding.
2. Participants wanted a clear action or contact information when they saw the first warning alert or the eligibility review screen in the Pineapple prototype and they reported they would continue anyways or contact somebody as next steps - not exit the application.
3. Most participants commented that more definitive language around eligibility would be helpful in understanding the review summary card and almost all preferred the alternate card option B with additional dynamic content explaining their eligibility.
4. Participants stated actions on the various warning alerts overall were to continue on with the application or they wanted contact information to talk to somebody.




## Details of Findings 


> [!TIP]
> **After drafting your detailed findings, apply OCTO metadata labels to enable automated pattern detection and cross-study aggregation.**
> Use the [GitHub Copilot Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md) to generate structured YAML label blocks for each finding below.


### Finding 1: The “Check eligibility” default pattern was confusing to most participants when they were not eligible (Pineapple prototype) mostly due to the double negative statement and visual misunderstanding.


**Double negative confusion**

- 14 of 15 participants saw that they did not meet the CHAMPVA program requirements, but noticed that one of the bullet points outlining eligibility said “the Veteran and applicant is not eligible for TRICARE.” The double negative would result in participants having initial confusion and needing to re-read that line item. (Goal 3, research question 1).
- Participants did not seem to understand the mutually exclusive eligibility for TRICARE and CHAMPVA when interpreting the eligibility review screen, despite high confidence in understanding that content earlier when on the 10-10d introduction page. 

**Visual system misunderstanding**

- 13 of 15 participants went on to explain that a part of their confusion about the eligibility summary was the red “X” next to “the Veteran and applicant is not eligible for TRICARE,” compounding issues with the semantic double negative outlined. 

**Participant quotes**

- _Quote [P1: Yes, if I'm not mistaken, the previous page, asked about TRICARE, and it says, are you or any applicants eligible or enrolled in TRICARE? It says yes, but when you continue here, it says the veteran applicant is not eligible for TRICARE, so…That would stand out to me, because…in the previous page, I'm telling the system that I am eligible or enrolled. And then it's saying, basically, that, I may not be eligible, as a Veteran because, you know, for TRICARE, but… It's…the previous page, I selected that I, you know, that either had or was eligible, so…I guess I would still reach out to CHAMPVA. Being that that's what I'm applying for, and as a backup, maybe reach out to TRICARE and see if there's some sort of…you know, connection between the two that may disqualify you from using the benefits.]_  
- _Quote [P10: “The second card says may NOT be eligible, and the difference is the Veteran or applicant is not.. wait a second what? I’m so confused. (Re reads the last bullet) What in the trick-ness is going on here? What? The x’s and checks I don’t even know what they mean anymore”]_
- _Quote P14: “I read that as, we're not eligible (for TRICARE) because of this X.” …”It just doesn't make sense. How can it be a green over here, but it's a red over here? It's the same sentence.”]_



### Finding 2: Participants wanted a clear action or contact information when they saw the first warning alert or the eligibility review screen in the Pineapple prototype and they reported they would continue anyways or contact somebody as next steps - not exit the application.
 
When participants saw the summary card showing they were ineligible, users were divided on the next action to take. 

- Some participants, 8 of 15, reported they would continue anyways and not exit the application for various reasons: to see what would happen next, if an explanation would be provided or just to go as far as the application would allow. 
- Out of the 7 participants who did say they would stop on the eligibility screen, 5 stated they would call somebody at the VA or TRICARE next.
- 2 stated they would check their TRICARE status on their own as a next step.

**Clear resolution and next steps**

When also reviewing the alert options at the end of the session, contacting somebody was a common response to the various warning alerts shown.

- Participants suggested a link or contact information to talk to somebody when reviewing the eligibility summary pages (5 for Pineapple and 1 for Blueberry). It was more often suggested in the Alert review task. (Goal 1, research question 3).


**Participant quotes**

- _Quote [P1: I would try to find some sort of, like, help desk number, or you said TRICARE, but this is referring to CHAMPVA benefits, right?
[Moderator: Yes.]
P1: Okay, then I would try to find some sort of…contact number for CHAMPVA, or, you know, a…email address or something along those lines where I could reach out and basically communicate that I've attempted to apply. I believe I'm eligible, but…you know, it says that I may not be eligible, could I… how would I find out additional information?]_  
- _Quote [P4: Need some guidance and an exit path. For disagreement. This isn’t explaining why or contact someone to find out what my next step would be.]


### Finding 3: Most participants commented that more definitive language around eligibility would be helpful in understanding the review summary card and almost all preferred the alternate card option B with additional dynamic content explaining their eligibility.

**Lack of definitive language**

The eligibility summary screen lets users know that they “may not be eligible” for CHAMPVA. For 12 of 15 participants, the lack of definitive eligibility language at this point in the form made it difficult to make the decision whether or not to abandon the form, or continue with the application.

**Alternate card design for “Check eligibility” pattern**

When shown an alternative eligibility summary card design (Card Style B) in a follow-up task, the majority of participants (12 of 15) preferred it to the option they saw in both form flows. Reasons why included:

- The subheader sentence was easy for participants to understand and they stated that extra clarity helped determine their preference (12 of 15 participants)
- Two participants mentioned that the icons and wording around that bullet item was their deciding factor

**Participant quotes**

- _Quote [P14: But I do feel like this is helping you, you know, you might, but again, because it's not a definitive statement, you might still keep going.]_
- _Quote [P14: So, again, I know, VA benefits are rather nuanced, but anytime you say, may not be eligible instead of you are not eligible, people might still try to continue because they think perhaps there's an error. Or, again, because they say it says.]_




### Finding 4: Participants stated actions on the various warning alerts overall were to continue on with the application or they wanted contact information to talk to somebody.

In Task 3, participants were shown 5 alerts that may appear in the hybrid (VADS pattern + API call) eligibility flow. These alerts map to errors or outages with the 2 APIs called in the flow, or to eligibility decisions. 

| Alert | Trigger                                                                                | Desired User Outcome                                                       | Participant Reported Action                                                                                                                                                    |
| ----- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A     | Veteran not found in MPI                                                               | User checks accuracy of Veteran information before continuing              | *   Continue after checking info (5) *   Continue but contact VA later (2) *   Stop form and contact VA (8)                                                          |
| B     | Error calling EDS API                                                                  | User saves the form in progress or continues without the eligibility check | *   Continue form (8) *   Stop and contact VA (4) *   Stop and try again later (3)                                                                                   |
| C     | Veteran not found in EDS                                                               | User checks the accuracy of Veteran information before continuing          | *   Continue form (9) *   Continue form and contact VA after (3) *   Stop and contact VA (4)                                                                         |
| D     | User was found in MPI and DEERS and is eligible for TRICARE / not eligible for CHAMPVA | User exits the application, optionally may continue                        | *   Continue form (1) *   Stop, but want contact information for TRICARE (5) *   Stop, but contact VA (2) *   Exit form (5) *   Confused on next steps (3) |
| E     | User was found in MPI and DEERS and is not eligible for TRICARE / eligible for CHAMPVA | User continues in the application                                          | *   Continue form (15)                                                                                                                                                         |



The majority of participants responded to Alerts B (11 of 15) and E (15 of 15) as intended. With more than half of participants wanting to contact VA or a TRICARE representative for Alerts A (10 of 15), Alert C (7 of 15) and D (7 of 15), we believe additional content and resources are necessary to reduce friction and user burden, and increase call volume. 

**Participant quotes**

- _Quote [P15, Alert D: It's telling me the Veteran is enrolled in TRICARE and you can't have both. I would like a link for TRICARE benefits, and I'd click on that.]_
- _Quote [P10, Alert D this is so confusing to me, I had to read it twice just to break it down in my head. Found this information in DEERS that is good, so yes he is eligible for TRICARE. Just because we he whatever is eligible for TRICARE , does not automatically makes us eligible… I don't really like the wording. It's very confusing. I have to read it, like, twice in my head.]_
- _Quote [P01, Alert C: P1: Yeah, it's the same, I take it's the same as the first one, Alert A. Basically, it just asks me to verify the information that I put in. And, you know, because it's saying it cannot verify me because of the… potentially because of the information I entered, so I'm gonna go back and check, and if it is correct, then, you know, you have the option to continue, or…Me, personally, I would just reach out to, either CHAMPVA or TRICARE, depending upon, you know, which one led me to believe may have caused the inability to, apply.]_


### Finding 5: One flow was not preferred more than the other and some participants stated they were too similar to choose however in both participants provided feedback similar content and pattern feedback.

Participants were evenly split on ease of the two flows, with 6 preferring the VADS pattern, 5 preferring the hybrid VADS pattern/API option, and 4 stating they had no preference. The study used an A/B protocol to randomize prototype order and reduce recency bias; findings show no strong correlation between prototype order and participant preference. Feedback on the flow options emphasized content changes to the alerts and eligibility summary to improve decision-making and reduce the need to stop the form to contact a VA or TRICARE representative (see: Recommendations). 

- About half of participants (8 of 15) preferred the second prototype that they saw.


**Participant quotes**

- _Quote [P15: “To me, the system is time saving here. Instead of applying and finding out at the end that I'm not eligible. I like that it comes almost immediately after checking your personal information (name, DOB and social)” (Pineapple Prototype)]_
- _Quote [P11: "I don’t think it’s intrusive - it’s just off. Right away (warning alert Pineapple Prototype). It tells you right up front instead of going further - I feel like they should explain why. Maybe like a chat service (wants contact information)]_
- _Quote [P16: Pineapple preferred - "it does all the , it does the work for you (liked system check)"]_


---

## Additional Insights

#### Secondary 1
Participants were split in their previous knowledge of CHAMPVA, 9 were aware of it and 6 had never heard of it before at all. However all participants were familiar with TRICARE and 4 participants even stated they were currently enrolled. 


#### Secondary 2
Participants who interacted with the additional information component on the TRICARE question page seemed to appreciate the information and the link to check their status on that site. 

#### Secondary 3
One participant (P14) commented on language used around Veteran living question and that it could be adjusted to be more sensitive

- _"They know that, and so sometimes I feel that question might hit a survivor in the wrong way. So, again, we'll ask more questions about those in detail, but I would probably remove answer to the best of your knowledge from this question specifically." (P14)_



### Participant Rating Responses

| Participant | Persona       | Prototype First | Pineapple Intro Page Informed Rating | Blueberry Intro Page Informed Rating | Pineapple Eligibility Review Screen Understanding | Blueberry Eligibility Review Screen Understanding | Prototype Preference                  | Alerts Overall Confidence | Card Design Preference    |
| ----------- | ------------- | --------------- | ------------------------------------ | ------------------------------------ | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------- | ------------------------- | ------------------------- |
| 1           | Veteran       | Blueberry       |                                      | 4                                    | 3                                                 | 5                                                 | Blueberry, easier                     | 4                         | B                         |
| 2           | Family Member | Pineapple       | 5                                    |                                      | 2                                                 | 5                                                 | Pineapple, but similar                | 4                         | B                         |
| 3           | Family Member | Blueberry       |                                      | 5                                    | 1                                                 | 1                                                 | Pineapple, but similar                | N/A                       | A                         |
| 4           | Veteran       | Pineapple       | 4                                    |                                      | 5                                                 | 5                                                 | Blueberry, faster                     | 5                         | both / B                  |
| 6           | Family Member | Pineapple       | 3                                    |                                      | 5                                                 | 5                                                 | Similar                               | 5                         | B                         |
| 7           | Family Member | Blueberry       |                                      | Very confident                       | 5                                                 | 5                                                 | None- didn't notice difference        | 5                         | B                         |
| 8           | Veteran       | Pineapple       | 5                                    |                                      | 4                                                 | 5                                                 | None- but noted pattern verbiage      | 5                         | B                         |
| 9           | Veteran       | Blueberry       |                                      | 5                                    | 5                                                 | 5                                                 | Pineapple                             | NA                        | B                         |
| 10          | Family Member | Pineapple       | 5                                    |                                      | 1                                                 | 3                                                 | Same - aha moment about TRICARE       | 3                         | B                         |
| 11          | Family Member | Blueberry       |                                      | 4                                    | 5                                                 | 2                                                 | Pineapple                             | 5                         | B                         |
| 12          | Veteran       | Pineapple       | 4                                    |                                      | 5                                                 | 5                                                 | Blueberry                             | 5                         | B                         |
| 13          | Veteran       | Pineapple       | 5                                    |                                      | 2                                                 | 5                                                 | Blueberry                             | 3                         | B                         |
| 14          | Family Member | Blueberry       |                                      | 5                                    | 3                                                 | 4                                                 | Blueberry?                            | 3                         | B                         |
| 15          | Family Member | Pineapple       | 5                                    |                                      | 5                                                 | 5                                                 | Blueberry, Pineapple was confusing    | 5                         | Same? B                   |
| 16          | Veteran       | Blueberry       |                                      | 2                                    | 5                                                 | 4                                                 | Pineapple becuase it checked DEERS    | 3                         | B                         |
|             |               |                 |                                      |                                      |                                                   |                                                   |                                       |                           |                           |
|             |               |                 | 4.5 (avg)                            | 4.2 (avg)                            | 3.7 (avg)                                         | 4.3 (avg)                                         |                                       | 4.2 (avg)                 |                           |
|             |               |                 |                                      |                                      |                                                   |                                                   | 6 prefer Blueberry, 5 prefer Pineapply (2 noting similar), 4 - none / similar                    |                           | 1 prefers A, 12 prefer B, 2 - initialy same, then B               |




## Recommendations

Design recommendations are broken down by proposed v1 (VADS only design) and v2 (hybrid API) releases:


1. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_  
2. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_



## Product User and Business Outcomes

### Desired User Outcome 
This research supports our desired user outcome by....
- Users understand whether Tricare eligibility may impact their ability to receive CHAMPVA benefits.
- Users avoid spending time on applications that are likely to be denied.
- Users feel informed, respected, and supported—even when guided away from applying.
- Users can confidently decide whether to proceed with or stop the application.

### Desired Business Outcome
This research supports our desired business outcome by....
- Reduce the percentage of CHAMPVA applications rejected due to Tricare eligibility.
- Reduce processing backlog caused by clearly ineligible submissions.
- Improve efficiency for CHAMPVA processing teams.
- Increase overall satisfaction with the CHAMPVA application experience.

## Key Performance Indicators


### KPI 1
This research supports measurement of this KPI by....
- Percentage of CHAMPVA applications denied due to Tricare eligibility
- Total number of CHAMPVA applications submitted
- Average processing time per application
- User drop-off rates early in the application flow

  

## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  

> [!TIP]
> Once your **Recommendations** and **Next Steps** are finalized, you can quickly turn them into GitHub issues using the reusable Copilot prompt in [`create-issues-from-research-findings-prompt.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/create-issues-from-research-findings-prompt.md).  
> **After creating issues, add their hyperlinks back here under their corresponding "Recommendation" or "Next Step."**
> 
> If you need Github Copilot Enterprise Access, please complete this [Issue](https://github.com/department-of-veterans-affairs/copilot-onboarding/issues/new?template=copilot-onboarding.yml).


## Further research needed
- Testing with in a working staging environment - this was a study usign Figma prototypes and focused on content comprehension. We did not conduct any research sessions with assistive technology participants. 


## Appendix

### Research documents
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/Product/Tricare-Eligibilty/Tricare-Eligibility-Product-Outline.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/research_plan.md)

**Conversation Guides**
- [Link to conversation guide - BlueberryFirst](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/convo_guide_BlueberryFirst.md)
- [Link to conversation guide - PineappleFirst](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/convo_guide_PineappleFirst.md)


### Tools used for Synthesis

- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/transcripts)
- [Notes folder from observers](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/notes)
- [Working synthesis folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva/1010D/research/users/2026-01-Tricare%20Eligibility%20Usability%20Research/synthesis)
- VA Research Synthesis Tool - Feedback and notes Slack canvas
  
### Pages and applications used

**Figma Prototypes**
- [Veteran flow, Mobile Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32316&p=f&t=IG3jW1bmGA0pmJ36-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10114%3A20511&show-proto-sidebar=1)
- [Veteran flow, Desktop Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32317&p=f&t=r8QA77r1hjXJfo1Z-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10298%3A44146&show-proto-sidebar=1) 
- [Applicant flow, Mobile Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32316&p=f&t=IG3jW1bmGA0pmJ36-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10123%3A13173&show-proto-sidebar=1)
- [Applicant flow, Desktop Prototype](https://www.figma.com/proto/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA-10-10d-and-OHI-Certification-10-7559c-WIP?node-id=10068-32317&p=f&t=r8QA77r1hjXJfo1Z-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10298%3A58551&show-proto-sidebar=1)
- [Figma with Mobile Prototype](https://www.figma.com/design/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA---10-10d--and-OHI-Certification--10-7559c--WIP?node-id=10068-32316&t=IG3jW1bmGA0pmJ36-1)
- [Figma with Desktop Prototype](https://www.figma.com/design/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA---10-10d--and-OHI-Certification--10-7559c--WIP?node-id=10298-58549&t=r8QA77r1hjXJfo1Z-1)



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

**Cohort 1:**
- Veteran with a service-connected disability rating of 100%
- Have a spouse and/or dependent children who are not currently enrolled in the CHAMPVA program

**Cohort 2:**
- Identify as a spouse or dependent child of a Veteran with a service-connected disability rating of 100%
- Are not currently enrolled in CHAMPVA

#### Demographics 

We talked to **15 participants.**

Audience segment:
* Veterans: 5
* Family members of a Veteran: 10
Subsets of Family Members
* Veteran: 2
* Veteran's Caregivers: 7


Gender:
* Male: 6 
* Female: 9 


LGBTQ+: Unknown
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 0


Devices used during study: 
* Desktop: 10 
* Tablet: 0 
* Smart phone: 5 
* Assistive Technology: 0


Age:
* 25-34: 1
* 35-44: 3
* 45-54: 8
* 55-64: 1
* 65+: 2
* Unknown: 0


Education:
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 0
* Bachelor's degree: 5
* Master's degree: 7
* Doctorate degree: 0
* Unknown: x


Geographic location:
* Urban: 8
* Rural: 7
* Unknown: 0


Race:
* White: 5
* Black: 6
* Hispanic: 4
* Biracial: 0
* Asian: 1
* Native: 1


Disability and Assistive Technology (AT): 0
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
* Ages 55-64+
* Cognitive Disability
* Mobile Users
* No degree
* Other than honorable discharge
* Expat (living abroad)

➡️ _[insert screenshot of completed recruitment checker in the format below]_

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](link - add image to github folder and link here with .png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in [Study name]

| **Demographic**                                                                                            | **Category** | **Target %** | **Target #** | **\# in Study** | **Target Achieved?** | **p1** | **p2** | **p3** | **p4** | **p5** | **p6** | **p7** | **p8** | **p9** | **p10** | **p11** | **p12** | **p13** | **p14** | **p15** | **p16** |
| ---------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ------------ | --------------- | -------------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| All participants                                                                                           | Total        | n/a          | 16           | **15**          |                      | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a     | n/a     | n/a     | n/a     | n/a     | n/a     | n/a     |
| Assistive Tech (AT) users                                                                                  | Total        | n/a          | 0            |                 | 0                    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a     | n/a     | n/a     | n/a     | n/a     | n/a     | n/a     |
| No-show participants                                                                                       | Total        | n/a          | n/a          |                 | 1                    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a    | n/a     | n/a     | n/a     | n/a     | n/a     | n/a     | n/a     |
| Age 55-64+                                                                                                 | General      | 50%          | 8            | 3               | no                   | 0      | 0      | 1      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 1       | 0       | 0       | 0       | 1       | 0       |
| Cognitive Disability                                                                                       | General      | 50%          | n/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Mobile user                                                                                                | General      | 50%          | 8            | 5               | no                   | 0      | 0      | 1      | 1      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 1       | 1       | 0       | 1       | 0       |
| Rural                                                                                                      | General      | 25%          | 4            | 6               | yes                  | 1      | 0      | 0      | 0      | N      | 1      | 1      | 0      | 1      | 0       | 1       | 0       | 0       | 0       | 0       | 1       |
| No degree                                                                                                  | General      | 25%          | 4            | 3               | no                   | 0      | 0      | 0      | 0      | N      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 1       | 0       | 1       | 1       |
| Other than honorable                                                                                       | General      | 21%          | 4            | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Immigrant origin                                                                                           | General      | 17%          | 3            | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Women                                                                                                      | General      | 10%          | 2            | 9               | yes                  | 0      | 0      | 1      | 0      | N      | 1      | 1      | 1      | 0      | 1       | 1       | 0       | 1       | 1       | 1       | 0       |
| Expat (living abroad)                                                                                      | General      | 0.4%         | 1            | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Black or African American                                                                                  | Race         | 15%          | 3            | 6               | yes                  | 1      | 0      | 0      | 1      | N      | 0      | 0      | 1      | 0      | 1       | 0       | 1       | 0       | 0       | 0       | 1       |
| Hispanic, Latino, or Spanish origin                                                                        | Race         | 12%          | 2            | 4               | yes                  | 0      | 1      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 1       | 1       | 0       | 0       | 0       | 1       | 0       |
| Biracial                                                                                                   | Race         | 3.9%         | 1            | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Asian                                                                                                      | Race         | 2.7%         | 1            | 1               | yes                  | 0      | 0      | 0      | 0      | N      | 0      | 0      | 0      | 0      | 0       | 1       | 0       | 0       | 0       | 0       | 0       |
| Native Hawaiian or other Pacific Islander                                                                  | Race         | 0.3%         | 1            | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| First Nations (Canada)                                                                                     | Race         | n/a          | 1            | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Native, American Indian or Alaska Native                                                                   | Race         | 1.6%         | 1            | 1               | yes                  | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 1       | 0       | 0       | 0       |
| Gay, lesbian, or bisexual                                                                                  | LGBTQ+       | n/a          | n/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Transgender                                                                                                | LGBTQ+       | n/a          | n/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | LGBTQ+       | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Beginner AT User                                                                                           | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Experienced AT User                                                                                        | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Desktop Screen Reader (SR)                                                                                 | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Mobile Screen Reader (SR)                                                                                  | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Magnification/Zoom                                                                                         | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Speech Input Tech (Siri, Dragon)                                                                           | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Hearing Aids                                                                                               | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Sighted Keyboard                                                                                           | AT           | n/a          | N/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Captions                                                                                                   | AT           | n/a          | n/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Switch Device                                                                                              | AT           | n/a          | n/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
| Braille Reader                                                                                             | AT           | n/a          | n/a          | 0               | no                   | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0      | 0       | 0       | 0       | 0       | 0       | 0       | 0       |
