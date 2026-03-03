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
- **Moderated Usability Testing:** 11 participants completed tasks using a clickable prototype (Codespaces) to explore benefits based on their personal goals and military history.
- **A/B Testing:** 6 participants interacted with a radio button prototype for filters, and 5 interacted with a checkbox prototype to observe behavioral differences and mental models regarding the "Apply" function.

## Hypotheses and Conclusions

- **Hypothesis:** Users will correctly identify and utilize the default "Expiration Date (Soonest First)" sort function.
- **Definitely False:** Most veterans separated for more than a few years found the concept of benefits "expiring" confusing and irrelevant to their situation,.
- **Hypothesis:** Users will prefer reading a summary ("Learn More") rather than jumping straight to an application.
- **Definitely True:** Participants validated that applying is a "big step" and they prefer learning the details and eligibility first,.
- **Hypothesis:** Screen magnification users will be able to navigate the redesigned prototype without blocking errors.
- **Definitely False:** Screen magnification users encountered blocking errors on dropdowns and struggled with excessive horizontal whitespace,.
- **Hypothesis:** Users expect radio buttons to apply filters automatically without a secondary click.
- **Likely True:** Participants explicitly stated that radio buttons imply an immediate toggle, causing friction when a manual "Apply" button was required.

---

## Key Findings

1. Default sorting by "Expiration Date" causes confusion for separated Veterans.
2. Users validate the use of "Learn More" on benefit cards rather than direct "Apply" links.
3. The manual "Apply" button for filters causes interaction friction, especially with radio buttons.
4. Significant accessibility barriers remain for screen magnification users.
5. Users expressed a strong desire for more prominent dependent and family benefit information.
6. Language targeting "transitioning" members can inadvertently alienate veterans who separated years ago.
7. The tool successfully drives the discovery of new, unknown benefits.

---

## Details of Findings

### 1. Default sorting by "Expiration Date" causes confusion for separated Veterans
Participants who had been separated from the military for several years did not understand why their benefits were sorted by an "Expiration Date," as benefits like disability compensation do not expire for them.
- *Supporting data:* Participant 11 stated, "How is the expiration date for disability compensation expiring before anybody used them? I think you can technically get any of these at any time".
- *Supporting data:* Participant 18 noted she was unsure why disability was listed as soonest expiring since she could apply anytime post-service, and suggested "Type of benefit" would be a better default,.

### 2. Users validate the use of "Learn More" on benefit cards rather than direct "Apply" links
While some users initially looked for an "Apply" button, they ultimately validated the design decision to use "Learn More" links that offer summaries of complex benefits.
- *Supporting data:* Participant 2 stated, "y'all made the right call to click on the Learn More... apply is a big step forward, you know? But I'm going in... kind of blind... And if this just goes to apply, I may feel, again, overwhelmed".
- *Supporting data:* Participant 6 admitted he initially looked for an apply button, but conceded that after using the tool, "you'll know exactly what the Learn More button does".

### 3. The manual "Apply" button for filters causes interaction friction
Users testing the radio button prototype expected the page to refresh automatically. Users testing the checkbox prototype often missed the "Apply" button entirely, believing the page had already updated.
- *Supporting data:* Participant 12 explicitly stated that for an "either-or" toggle (radio button), "when I was clicking this circle, I was assuming it to just automatically apply... That's why I was like, oh, wait, I gotta hit apply",.
- *Supporting data:* Participant 4 clicked the checkbox for "All results" but did not realize he needed to click "Apply," leading to confusion when the screen did not update.

### 4. Significant accessibility barriers remain for screen magnification users
Users relying on screen magnification software encountered blocking errors and high cognitive load due to UI layouts.
- *Supporting data:* Participant 14 (Magnification user) was unable to open or select an option from the "Character of Discharge" dropdown menu, preventing him from moving forward without moderator intervention.
- *Supporting data:* Participant 15 (Magnification user) lost track of the "Back" buttons due to Zoom overlays and felt the layout required too much panning to digest the information,.

### 5. Users expressed a strong desire for more prominent dependent and family benefit information
Multiple participants actively sought out information regarding what benefits their spouses and children were entitled to, finding it lacking in the top-level filters.
- *Supporting data:* Participant 2 emphasized, "There needs to be... something that screams dependence on here as a filter... I need to take care of my loved ones, boom",.
- *Supporting data:* Participant 16 expected to see specific programs for her daughter under her goals, stating, "I mainly expected to see stuff about CHAMP VA, healthcare, maybe the caregiver program".

### 6. Language targeting "transitioning" members can inadvertently alienate separated veterans
Phrasing in the questionnaire and the results page headers made some separated veterans feel the tool was not meant for them.
- *Supporting data:* Participant 9 noted that grouping everyone out of the service into a single "3+ years" bucket "kind of excludes them a little bit... I just don't want people to think that it's been too long",.
- *Supporting data:* Participant 15 interpreted the link "Benefits for transitioning service members" to mean the information below it was *only* for those currently leaving active duty, missing that it applied to her.

### 7. The tool successfully drives the discovery of new, unknown benefits
Despite usability friction, participants consistently found the tool valuable for surfacing niche benefits they were unaware they qualified for.
- *Supporting data:* Participant 15 discovered the Specially Adapted Housing (SAH) grant: "Never heard of that before. That's why, when I saw it, I was like, okay, let me... Read it... Now that I know SAH, I'm gonna go and look it up".
- *Supporting data:* Participant 4 praised the tool for consolidating information, noting, "I didn't even know about some of these things. And I even worked at the veteran's office at my school".

---

## Additional Insights
* **Desire for Crisis Resources:** Participant 5 suggested adding specific, highly visible links for displaced/unhoused veterans or those in mental health crises directly on the discovery page to bypass complex navigation,.
* **Filter Naming:** Participant 18 noted that "All Results" was confusing because "results" implies personalization based on her quiz answers. She suggested "All Benefits" would better communicate a generic, exhaustive list.

## Recommendations

1. **Change the default sort order:**
- For users who indicate they separated more than a year ago, default the sort to "Benefit Type" or "Alphabetical" rather than "Expiration Date."
- *Supporting evidence:* P11, P12, and P18 found "Expiration Date" irrelevant and confusing for permanent benefits like disability,.

2. **Refine Filter UI Behaviors:**
- If using Radio Buttons for "Recommended vs. All," implement auto-apply behavior. If using checkboxes, make the "Apply" button sticky or highly visible.
- *Supporting evidence:* P12's mental model strongly expected a radio "circle" to automatically refresh the page.

3. **Address screen magnification accessibility blocks:**
- Fix the dropdown interaction bug that blocks keyboard/magnifier users on the Discharge question. Evaluate card designs to reduce empty horizontal whitespace.
- *Supporting evidence:* P14 could not progress past the dropdown menu; P12 noted the card layout forced excessive scrolling,.

4. **Elevate Dependent/Spouse benefits:**
- Add a specific filter tag or highly visible goal option specifically for "Dependent & Family Benefits."
- *Supporting evidence:* P2 and P16 explicitly searched for family benefits and felt they were buried,.

5. **Adjust Separation Timeframe options:**
- Expand the "3+ years" option to "3-10 years" and "10+ years" to make older veterans feel recognized and included.
- *Supporting evidence:* P9 indicated that stopping at "3+ years" makes long-separated veterans feel their time has expired.

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
- [Product Outline]
- [Research plan]
- [Conversation guide]
- [Interview transcripts]

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
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
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

