# Discover Your Benefits Prototype V3 Research Findings
**Office of the CTO - Digital Experience (OCTO-DE), Discover Your Benefits**
**Date:** 01/26/2025
**Contacts:** Anna Higgins

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
The Discover Your Benefits tool aims to consolidate complex VA benefit information into an intuitive, personalized discovery experience for Veterans and transitioning service members. The goals of this study were to evaluate Version 3 of the unauthenticated prototype, specifically testing:
- If design changes help users accomplish their goals of discovering, exploring, and understanding relevant benefits.
- The usability and accessibility of redesigned filters, sorting mechanisms, and benefit cards.
- Comprehension of time sensitivity, recommendation status, and eligibility framing.
- Usability differences between radio buttons and checkboxes for filter toggles.

## Research Questions
* Do the design changes make users better able to accomplish their goals of discovering, exploring, and understanding benefits?
* Are the redesigned filters usable and accessible?
* Are the redesigned benefit cards usable and accessible?
* Are time sensitivity, recommendation status, and potential eligibility clear?
* Is the redesigned sorting function usable and accessible?
* Which prototype has better filtering usability for seeing recommended benefits vs all benefits - radio buttons or checkbox?
* Is the rewritten length of service question easy to understand and aligned with mental models?
* Have design changes to fix accessibility bugs made the product accessible to users of adaptive technology?
* Does redesigned content for Reserves/National Guard improve usability?
* Does improved usability impact users' desire for human help?

## Methodology
- **Moderated Usability Testing:** 11 participants completed tasks using a clickable prototype using Codespaces to explore benefits based on their personal goals and military history.
- **A/B Testing:** 6 participants interacted with a radio button prototype for filters, and 5 interacted with a checkbox prototype to observe behavioral differences and mental models regarding the "Apply" function.

## Hypotheses and Conclusions
- **Hypothesis:** The redesigned Results page will make it easier for users to discover, explore, and understand the benefits that are most relevant to them by making it more clear why benefits are recommended or not recommended, making potential deadlines more clear, and making filters easier to interact with to enable the open-ended, broad exploration of benefits that users value in the Discover Your Benefits tool. We will measure ease of discovery, exploration, and understanding through comparison with results of the July 2025 study as well as the metrics listed in the research questions.
- **Definitely True:** The redesign preserves the ease of exploration and improves the filter experience. Findings are mixed on the default sort being Expiration Date, which is confusing to separated Veterans.
- **Hypothesis:**  The radio button prototype will enable better product usability than the checkbox prototype because the binary of "recommended" and "not recommended" makes the full range of options more explicit.
- **Definitely True:** Radio button is the better design solution because the content makes it more understandable to users, however the checkbox is also a sufficient solution for an initial release of the new results page.
- **Hypothesis:** The rewritten length of service question will reduce confusion and negative emotional responses to the question by better aligning with users' mental models around service.
- **Definitely True:** We did not receive negative feedback, unlike the previous study.
- **Hypothesis:** Changes made to the product after recent heuristic evaluation for accessibility will create an improvement in accessible experience for AT users, but that we will discover new issues not uncovered by the heuristic testing.
- **Likely True:** We discovered issues not covered in the heuristic testing. 

---

## Key Findings

1. The radio button is more successful at supporting our goal of users easily understanding and exploring the results page as a whole, whether they want to use it or not. It:
* Alerts the user to the existence of benefits other than the ones shown
* Participants were more clear about what the radio button was going to change on the page 
* More participants found the radio button without prompting
However, the check box is an adequate solution for launch. 
2. Some Veterans who had separated more than 3 years ago were confused by seeing expiration date as the default sort
* We are addressing this finding by differentiating sort based on time since separation
* We will do this work after our product’s pilot in TAP begins in March
* TSM and RSV experience is our current priority
3. The results page redesign significantly improved the tool’s usability  
* Easier exploration of benefits  
* Improved overall filter experience  
* Rewritten content creates a better experience  
* Participants rated their experience 4.3 out of 5  
4. Filter placement is a barrier to mobile and screen magnification users finding the main benefit content of the page and impacted their ability to explore benefits  
* We are addressing this finding by defaulting to collapsing filters for mobile devices and screen reader users   
* We are conducting additional assistive technology audits (post-launch)
5. Users validate the use of "Learn More" on benefit cards rather than direct "Apply" links
While some users initially looked for an "Apply" button, they ultimately validated the design decision to use "Learn More" links that offer summaries of complex benefits.
6. Users expressed a strong desire for more prominent dependent and family benefit information
7. This study strengthened our previous study’s findings about wanting to save and return to results. These findings are informing our current work on an authenticated experience MVP.

---

## Details of Findings

1. The radio button is more successful at supporting our goal of users easily understanding and exploring the results page as a whole, whether they want to use it or not. It:
* Alerts the user to the existence of benefits other than the ones shown
* Participants were more clear about what the radio button was going to change on the page 
* More participants found the radio button without prompting
* However, it creates an expectation that the filter will be applied immediately, and some users missed the “Apply Filters” button.

| Outcome | Radio button | Check box |
| :---: | :---: | :---: |
| Users **find** the option to filter by recommended benefits vs all benefits | 4 of 6 users found it independently 2 of 6 users found it when prompted No users could not find when prompted | 1 of 5 users found it independently 3 of 5 users found it when prompted 1 user could not find when prompted |
| Users **understand** that they are able to see all benefits, not only the ones recommended to them | 5 of 6 users understood the function | 3 of 5 users understood the function |
| Users successfully **apply** the filter | 4 of 6 applied the filters smoothly (2 missed the “Apply filters” button) | 4 of 5 applied the filters smoothly  |

For users who do not wish to filter results, the improved clarity of the radio button enables them to understand that they are seeing results tailored to their answers to the questionnaire.
Making the filter more easily findable supports users who do not want to use it by giving them the choice, and by making it clear that they are seeing results tailored to them
*In this study and our previous study, many participants, particularly those with disabilities, wanted to keep their experience simple
"I would keep [recommended benefits] checked for me personally. Because I don't want to see extra information... extra information that's not tailored to me, because then it's overwhelming" (P16)

### 2. Default sorting by "Expiration Date" causes confusion for separated Veterans
Participants who had been separated from the military for several years did not understand why their benefits were sorted by an "Expiration Date," as benefits like disability compensation do not expire for them.
- *Supporting data:* Participant 11 stated, "How is the expiration date for disability compensation expiring before anybody used them? I think you can technically get any of these at any time".
- *Supporting data:* Participant 18 noted she was unsure why disability was listed as soonest expiring since she could apply anytime post-service, and suggested "Type of benefit" would be a better default,.
While this was not a common response in this study, we confirmed the insight from the previous study that language targeting "transitioning" members can inadvertently alienate separated veterans.
- *Supporting data:* Participant 15 interpreted the link "Benefits for transitioning service members" to mean the information below it was *only* for those currently leaving active duty, reducing her confidence that she would be eligible for recommended benefits. 

### 3. The results page redesign significantly improved the tool’s usability  
* Easier exploration of benefits  
* Improved overall filter experience  
* Rewritten content creates a better experience  
* Participants rated their experience 4.3 out of 5  

The tool successfully drives the discovery of new, unknown benefits. All but 2 participants (both of whom work with Veterans benefits professionally) discovered a benefit they were unaware of during the session
- *Supporting data:* Participant 15, who is blind, discovered the Specially Adapted Housing (SAH) grant through the tool,
- *Supporting data:* Participant 9 noted the tool helps younger veterans "see ourselves more in the veteran space" and realize they are eligible for benefits
- *Supporting data:* Participant 16, a veteran mentor, said she would refer other veterans to the tool because it consolidates information she didn't know about previously

#### Participant quotes
- “I didn't even know about some of these things. And I worked… I even worked at the Veterans' office at my school. And I had no idea some of these things are out there." – P4
- "Oh, without a doubt, a 5. Very easy to use. Very user-friendly. I like the fact that it has multiple things that you can use to filter out certain things... It seems like you guys put a lot of thought and consideration into some of the different, benefits that you guys are putting on there." –P5
- "I want VA to know, like, I'm glad they're moving in a better direction. Everything is getting centralized. I would have loved this page. Like, it's way better than what we had before. Especially if all the benefits is on one page." –P6
- "It's so handy, and it's way better than having the 8,000 little pamphlets and flyers that we ended up with." –P18
- "I really like the language around this. Like, what goals do you want to accomplish? It sounds collaborative." “I'm literally sending it to my friend now." –P9

### 4. Significant accessibility barriers remain for screen magnification users
* Filter placement is a barrier to mobile and screen magnification users finding the main benefit content of the page and impacted their ability to explore benefits  
* We are addressing this finding by defaulting to collapsing filters for mobile devices and screen reader users   
* We are conducting additional assistive technology audits (post-launch)
Users relying on screen magnification software encountered blocking errors and high cognitive load due to UI layouts.
- *Supporting data:* Participant 14 (Magnification user) was unable to open or select an option from the "Character of Discharge" dropdown menu, preventing him from moving forward without moderator intervention.
- *Supporting data:* Participant 15 (Magnification user) lost track of the "Back" buttons due to Zoom overlays and felt the layout required too much panning to digest the information,.

### 5. Users validate the use of "Learn More" on benefit cards rather than direct "Apply" links
While some users initially looked for an "Apply" button, they ultimately validated the design decision to use "Learn More" links that offer summaries of complex benefits.
- *Supporting data:* Participant 2 stated, "y'all made the right call to click on the Learn More... apply is a big step forward, you know? But I'm going in... kind of blind... And if this just goes to apply, I may feel, again, overwhelmed".
- *Supporting data:* Participant 6 admitted he initially looked for an apply button, but conceded that after using the tool, "you'll know exactly what the Learn More button does".
- *Supporting data:* Participant 9 said that because benefits like the GI Bill are complex, a general description page is necessary

### 6. Users expressed a strong desire for more prominent dependent and family benefit information
* Participants expect to see benefits for family members and dependents, which they felt was currently lacking or hard to find.
* They were not expecting the tool to be for dependents, but they expect to see benefits they could use or apply for to help their dependents like spouse eligibility for DOL’s vocational training.
- *Supporting data:* * Participant 2 said there needs to be text that "screams dependents" because taking care of family is a priority
- *Supporting data:* * Participant 16 expected to see benefits for her daughter, such as CHAMPVA or the caregiver program, under the "plan for my family's future" goal
- *Supporting data:* * Participant 9 suggested adding a filter or category specifically for children or dependents

### 7. This study strengthened our previous study’s findings about wanting to save and return to results. These findings are informing our current work on an authenticated experience MVP.

## Recommendations

1. **While radio button is more usable than checkbox, we are going with the checkbox for now:**
- In the interest of releasing the new results page within a timeframe that better suits the pilot timeline, we’re going to leverage the existing design system component configuration and use the checkbox.
- Revisit the radio button configuration post launch in partnership with other teams who may also have use of the radio button configuration.

2. **Use logic in the questionnaire to create a different default sort for established Veterans.**
- Established Veterans need a different results page experience that does not imply urgency for benefits that do not change. This finding aligns with finding on the next page about using language about transition.

3. **Launch the redesigned results page**
- New filters, content, and introductory content provide a big usability improvement over the experience currently in production.

4. **Continue work on accessibility for Blind and low vision users**
- Auto-collapsing the filter bar will eliminate some usability issues as well as creating a better experience for mobile users. A fix for this issue is in progress.
- Conduct an additional audit after launch

5. **Use “Learn More” for links**
- Continue using “Learn More” for links to benefit content. 
- Add descriptive content to the link tag for WCAG compliance. 

6. **Explore a strategy for surfacing dependent benefits to Veterans without scope creep for additional user types.**

7. **Continue exploring an authenticated experience for this product to support users who want to save and return to results.**

## Product User and Business Outcomes

### Desired User Outcome
This research supports our desired user outcome by ensuring that Veterans, regardless of their separation date or technical proficiency, can intuitively discover and understand benefits relevant to their current life stage without feeling overwhelmed by irrelevant information.

### Desired Business Outcome
This research supports our desired business outcome by validating a centralized, unauthenticated discovery pipeline that reduces reliance on external search engines and fragmented VA pages, ultimately driving higher application rates for underutilized programs (like the SAH grant and State Benefits).

## Key Performance Indicators

### KPI 1: Increase successful discovery of unknown benefits
This research supports measurement of this KPI by demonstrating qualitative success; multiple participants explicitly stated they discovered new programs (e.g., SAH, Foreign Medical Program) during a 10-minute exploration of the prototype,.

### KPI 2: Improve usability scores among assistive technology users
This research highlights critical failure points for this KPI. By identifying blocking bugs in dropdowns and layout issues for magnification users, the team can address these barriers before launch to ensure equitable access.

## Next Steps
- Address the critical dropdown accessibility bug identified by P14.
- Update sorting logic to remove "Expiration Date" as the default for veterans separated > 1 year.
- Rename the "All Results" toggle to "All Benefits."
- Investigate technical feasibility of auto-applying filters for the Recommended/All toggle.

## Further research needed
- Research is needed to understand how active-duty service members currently utilizing TAP would interact with the "Expiration Date" sorting.
- We need to conduct specific testing with users experiencing cognitive or high-stress loads to evaluate the implementation of crisis/unhoused resources on the discovery page.

## Appendix

### Research documents
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/vet-transition-support/results-page-2.0/research/results-page-2.0-usability-study/session-notes)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/vet-transition-support/results-page-2.0/research/results-page-2.0-usability-study/results-page-2.0-conversation-guide.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/vet-transition-support/results-page-2.0/research/results-page-2.0-usability-study/results-page-2.0-conversation-guide.md)
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/vet-transition-support/results-page-2.0/research/results-page-2.0-usability-study/session-notes)

### Tools used for Synthesis
- Spreadsheet Synthesis
- Transcription analysis

### Secondary research
- N/A

### Research participants

#### Recruitment criteria
Recruited participants were a mix of Veterans separated within the last 10 years and those separated more than 10 years ago. Included users of assistive technology (specifically screen magnification) and users with cognitive disabilities.

#### Demographics

We talked to **11 participants.**

Audience segment:
* Veterans: 11
* Caregivers: 0
* Family members of a Veteran: 0

Gender:
* Male: 6
* Female: 4
* LGBTQ+: (Not explicitly tracked in provided data, defaulting to 0)
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: Unknown
* Gay, lesbian, or bisexual: 0
* Prefer not to answer: 1

Devices used during study:
* Desktop/Laptop: 9
* Tablet: 0
* Smart phone: 2
* Assistive Technology: 2

Age:
* 25-34: 8
* 35-44: 1
* 45-54: 1
* 55-64: 0
* 65+: 1
* Unknown: 0

Education:
* High school degree or equivalent: 0
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 3
* Master's degree: 4
* Doctorate degree: 0
* Unknown: 1

Geographic location:
* Urban: 8
* Rural: 3
* Unknown: 0

Race:
* White: 4
* Black: 2
* Hispanic: 1
* Biracial: 2
* Asian: 0
* Native: 0
*(Note: 2 participants preferred not to answer)*

Disability and Assistive Technology (AT):
* Cognitive: 10
* AT beginner: 0
* AT advanced user: 2
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 2
* Speech Input Technology: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

#### Underserved groups we haven’t talked to
This research does not include the perspectives of the following marginalized Veteran groups:
* Individuals utilizing Speech Input Technology
* Caregivers and Dependents
```
