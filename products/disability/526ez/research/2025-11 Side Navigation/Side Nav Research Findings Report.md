---
title: "Side Navigation Research Findings"
product: "VA Form 21-526EZ (Disability Compensation)"
team: "Disability Benefits Crew - Core Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-01-30"
researchers:
  - "Irene Vailikit"
  - "Bianca Alvelo Rivera"
  - "Fiorella Geedi"
research_goals:
  - "Evaluate whether Veterans can identify the side navigation component and the process list component, and understand their purposes."
  - "Evaluate Veterans’ understanding of progress throughout the form using the side navigation component and process list component."
  - "Assess how effectively the navigation component allows Veterans to efficiently edit responses and complete tasks."
methodology:
  - "usability testing"
  - "remote moderated sessions"
  - "semi-structured interviews"
devices_used:
  desktop: 4
  tablet: 0
  smartphone: 4
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
    "35-44": 2
    "45-54": 0
    "55-64": 5
    "65+": 1
    unknown: 0
  education:
    high_school: 3
    some_college: 1
    associates: 1
    bachelors: 0
    masters: 3
    doctorate: 0
    unknown: 0
  location:
    urban: 5
    rural: 3
    unknown: 0
  race:
    white: 3
    black: 2
    hispanic: 1
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
  - "All participants were able to understand and use both navigation components after interacting with them."
  - "All participants preferred the Process List because it provided more explicit progress indicators (e.g., 'In progress'/'Complete' labels)."
  - "Participants used multiple cues (text, color, font weight, hover/click affordances) to interpret progress and status; explicit completion cues were requested (e.g., checkmarks)."
  - "On mobile, most participants needed to expand the navigation accordion to recall progress and current location in the form."
  - "After interacting with the navigation component, all participants understood why they couldn’t access future steps."
  - "Most participants had difficulty editing efficiently when navigation steps didn’t clearly map to individual pages (multi-page steps caused trial-and-error)."
  - "Mobile participants could distinguish the navigation accordion from Review-and-Submit accordions when visual treatment was differentiated."
  - "When prompted to add a condition on Review and Submit, participants often tried Review-and-Submit accordions first; some initially expected the Conditions 'Edit' flow to support adding a new condition."
recommendations:
  - "Implement the Process List version of the navigation component (as an experimental VADS component) based on consistent participant preference and clearer progress/status indicators."
  - "Develop improved treatment options for inactive/locked steps that meet accessibility needs while preserving clear affordances for what is/isn't clickable."
  - "Explore additional accessible progress/completion indicators (e.g., checkmarks) to improve status recognition."
  - "Update mobile accordion collapsed-state copy to indicate the user’s current step (not just 'Select a step')."
  - "Assess feasibility of including subpages in the navigation to better match multi-page steps; prototype and test if feasible."
  - "Coordinate with Platform Design System exploration of renaming 'Step' to 'Section' (and consider testing terminology impacts)."
kpi_alignment:
  - "Improved user satisfaction with the 21-526EZ online form experience (supports OCTO-DE priority to improve satisfaction)."
  - "Reduced navigation friction and time/effort to edit prior answers in a long form (efficiency and task completion confidence)."
outcomes:
  user: "Veterans can confidently track progress, understand what’s complete/locked, and efficiently return to edit prior answers while completing the 21-526EZ form on desktop and mobile."
  business: "Increase completion and submission confidence for a high-impact benefits form by reducing navigation-related friction, confusion, and rework."
opportunity_areas:
  - "Make mobile progress and current location visible without requiring accordion expansion."
  - "Reduce confusion caused by 'Step' labels that contain multiple pages; improve information architecture and navigation granularity."
  - "Improve discoverability/clarity for adding a new condition from Review and Submit (align user expectations with available actions)."
  - "Strengthen accessible differentiation for locked vs available navigation items beyond low-contrast gray text."
further_research_needed:
  - "Assistive technology testing and accessibility audits (screen reader and screen magnifier) for the Process List design."
  - "Usability testing of navigation with subpages (desktop and mobile), especially for 'edit a specific item' flows."
  - "Evaluate accessible completion indicators (e.g., checkmarks) and validate comprehension with AT users."
  - "Validate terminology changes (e.g., 'Step' vs 'Section') and impacts on comprehension and wayfinding."
underserved_groups_missing:
  - "Assistive Technology users (screen reader, magnification, speech input, etc.)"
  - "Cognitive disability (underrepresented vs recruitment goals)"
  - "Other than honorable"
  - "Immigrant origin"
  - "Expat (living abroad)"
  - "Native Hawaiian or other Pacific Islander"
  - "First Nations (Canada)"
  - "Native, American Indian or Alaska Native"
  - "Gay, lesbian, or bisexual"
  - "Nonbinary, gender fluid, gender queer, Two-Spirit, or another gender beyond man or woman"
secondary_research: []
synthesis_tools_used:
  - "Mural"
  - "Affinity mapping"
  - "GitHub Copilot"
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "DSC: Accordions"
  - "DSC: Alert Boxes"
  - "DSC: Button"
  - "DSC: Form"
  - "DSC: Links"
  - "DSP: Help users to check answers"
  - "DSP: Help users to sign in"
  - "DSP: Content Presentation"
  - "usability-testing"
  - "semi-structured-interviews"
  - "evaluative"
---

# Side Navigation Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), 21-5526EZ, Disability Benefits Crew**

**Date:** 01/30/2026

**Contacts:** Irene Vailikit, Bianca Alvelo Rivera, Fiorella Geedi

**[Side Navigation Research Readout Deck.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/files/Side%20Navigation%20Research%20Findings%20Presentation%20Deck%20-%20January%202026.pdf)**  

**Jump to:**

- [Context](#context)
- [Proposed Designs](#proposed-designs)
- [Research Goals](#research-goals)
- [Methods and Terminology](#methods-and-terminology)
- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Product User and Business Outcomes](#product-user-and-business-outcomes)
- [Key Performance Indicators](#key-performance-indicators)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Appendix](#appendix)
- [Research participants](#research-participants)

## Context
As a Veteran exits the service and enters the “Starting Up” and “Taking Care of Myself” life stages, they may look to claim disability benefits via the Disability Compensation form (VA Form 21-526EZ). This form is one of the longest on VA.gov, and navigation within the form is a major friction point. Veterans can only navigate the form by clicking the “Back” and “Continue” buttons and are unable to jump to previously completed sections. </br>
</br>
This results in Veterans having to click these buttons multiple times to make changes or edit their responses in different sections of the form. Additionally, it's difficult for a Veteran to understand where they are in the form and how much of the form has been completed; the section titles, visual progress bar indicator, and number of questions are not neatly correlated. The current experience can feel overwhelming and cumbersome for Veterans. By implementing the following navigation designs, we hope to alleviate some of the frustrations that come with filling out this form. 

## Proposed Designs
> [!NOTE]
> We incorrectly used the term “Review and Submit” as the heading for Step 6 in our prototype designs and throughout this report. The correct heading in production is “Review application.”

### Side Navigation (Concept 1)
In our research, we tested two design concepts. The first concept is the VADS side navigation component implemented into the 526ez form. This will let Veterans jump to previously completed sections of the form, allowing them to review, add, or edit answers faster with fewer clicks. The side navigation will contain links to the landing pages of the 6 main steps of the form: (1) Veteran details, (2) Conditions, (3) Mental health statement, (4) Supporting evidence, (5) Additional information, (6) Review and submit. The navigation component also provides an overview of the steps in the form, helping create a sense of place and completion within the form. </br>
</br>
In this new design, the VADS segmented progress bar with step labels has been removed, so Veterans are not interacting with two different components that indicate their location in the form.
On mobile devices, the side navigation component converts to an accordion that the Veteran can expand to view links to all the form's main sections.

![Screenshot of our Side Navigation (Concept 1) prototype, showing the desktop and mobile device versions on the first page of VA Form 21-526EZ Disability Compensation on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/images%20final%20report/Context%20Section%20Side%20Nav.png)
_Caption: Screenshot of our Side Navigation (Concept 1) prototype, showing the desktop and mobile device versions of the first page of Step 2: Conditions on VA Form 21-526EZ Disability Compensation on VA.gov_

### Process List (Concept 2)
Our second design concept visually presents as a process list. This component includes features and treatment styles that more strongly differentiate between the steps that have been completed, the step the Veteran is currently on, and the steps they have yet to complete.

![Screenshot of our Process List (Concept 2) prototype, showing the desktop and mobile device versions on the first page of VA Form 21-526EZ Disability Compensation on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/images%20final%20report/Context%20Section%20Process%20list.png)
_Caption: Screenshot of our Process List (Concept 2) prototype, showing the desktop and mobile device versions of the first page of Step 2: Conditions on VA Form 21-526EZ Disability Compensation on VA.gov_

## Research Goals

**Goal 1: Evaluate whether Veterans can identify the side navigation component and the process list component, and understand their purposes.**

**Goal 2: Evaluate Veterans’ understanding of progress throughout the form using the side navigation component and process list component.**

**Goal 3: Assess how effectively the navigation component allows Veterans to efficiently edit responses and complete tasks.**

## Research Questions

**Goal 1: Evaluate whether Veterans can identify the side navigation component and the process list component, and understand their purposes.**

- Do Veterans identify and correctly use the navigation component to move between sections?
    

- Do Veterans recognize the distinction between the navigation component and the “Back” and “Continue” buttons in terms of purpose?
    

- On mobile, do Veterans identify the navigation accordion as a navigation tool?
    
- On mobile, when Veterans view the “Review and Submit” page, can they distinguish between the accordion navigation component and the other accordions on the page that are part of the “Review and Submit” pattern?
    

**Goal 2: Evaluate Veterans’ understanding of progress throughout the form using the side navigation component and process list component.**

- Do Veterans understand that some sections are inactive until they finish earlier sections?
    

- If not, what are their assumptions about why certain sections are inaccessible?
    
- How do Veterans react when navigation links are locked (e.g., confusion, frustration, or understanding)?
    

- How do the navigation components contribute to Veterans’ understanding of where they are in the form and how much they have left to complete?
    

- Are there moments where Veterans lose track of their place or become disoriented?
    

- How do Veterans know when they’ve completed a section?
    
- Do Veterans feel confident they’ve completed everything required before submission?
    
- How do visual cues (like inactive links, labels, or filled/empty state bubbles) effectively communicate completion and progress?
    
- How does the copy of “Step X: Step Name” help the Veteran understand where they are in the form and how much they have left to complete?
    

**Goal 3: Assess how effectively the navigation component allows Veterans to efficiently edit responses and complete tasks.**

- Can Veterans easily navigate to and/or edit answers in previously completed sections and resume where they left off?
    
- Do Veterans remember in which sections they filled out certain pieces of information?
    
- When Veterans are on the “Review and Submit” page and are prompted to edit previous answers, what is their process?
    

- Do they use the “Back” button, the inline editing buttons on the “Review and Submit” page, or the navigation component to go back to a previous section?
    
- When Veterans are prompted to add a condition on the “Review and Submit” page, what is their process?
    

- How confident do Veterans feel submitting the form after filling it out?
    

## Methods and Terminology 

We conducted 75-minute-long usability testing sessions via Zoom on December 8-15, 2025. We spent 70% of the session time testing the Side Navigation component, since our team determined this design would be most feasible to launch as an MVP. We spent about 30% of the session time testing the Process List component by gathering initial reactions to help inform whether we should pursue this design as a V2.   
    
We had a total of 8 participants; 4 participants tested both components on desktop and 4 participants tested both components on mobile. 
    
> [!NOTE]
> In the following report sections, we use the term “Navigation component” to refer to the Side Navigation component and Process List component collectively. 

## Hypotheses and Conclusions


**Goal 1:** Capture whether Veterans can identify the side navigation component and the process list component, and understand their purposes.

| **Hypothesis**                                                                                                                                                                         | **Conclusion**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop:** Most participants will use the Side Navigation or Process List to navigate to previously completed sections.                                                              | **Definitely True.** All participants (4/4) mentioned they would use the Navigation component to go back and edit their answers. When they were first asked how they would navigate the form, most mentioned they would use the “Back” and “Continue” buttons. <br><br>However, once the participants noticed the Navigation component and interacted with it, every participant used it to complete the task of updating their email address and navigate back to Step 1.  <br>  <br>A caveat to consider is that some participants were arguably primed to use the Navigation component for editing responses during testing of the Process List, our second concept, since they had already completed the same tasks with a different design concept. |
| **Desktop & Mobile:** Some participants will attempt to click inactive links to the locked sections, then articulate that they need to complete the sections to unlock them.           | **Definitely True.** All participants (8/8) initially thought they could skip ahead in the form. However, upon hovering over and/or clicking on a future step, they realized they couldn’t access it and inferred they needed to complete prior steps before they could access a locked step.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Mobile:** Most participants will identify and use the Navigation component accordion.                                                                                                | **Likely True.** Most mobile participants (3/4)   <br>did not immediately notice the Navigation component. Once we prompted them with a task, they recognized and interacted with the Navigation component, using it to navigate the form.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Mobile**: Participants will be able to distinguish the navigation component accordion from the gray accordion components on the Review and Submit page.                              | **Definitely True.** Although we did not have questions around this, all mobile participants (4/4) showed no confusion between the Navigation component and the gray accordions on the Review and Submit page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Side Navigation vs. Process List:** Most participants will find the Process List more effective for tracking their progress and status throughout the form than the Side Navigation. | **Definitely True.** All participants (8/8) preferred the Process list over the Side Navigation due to the “Complete” and “In Progress” status labels. These labels provided clarity and reassurance as they navigated through the form.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

  

**Goal 2:** Evaluate Veterans’ understanding of progress throughout the form using the side navigation component and process list component.


| **Hypothesis**                                                                                                                                                                                                                      | **Conclusion**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop:** Participants will be able to see which step they are on in the form and how many steps remain to complete it using the visual indicators in the Navigation component.                                                  | **Definitely True**. All participants (4/4) were able to identify their progress through various text-based and visual cues, such as color changes, bolding, and status label changes (Process List). They all understood what step they were on and what steps they had left. Some participants would include their current step as one they still needed to complete. Most felt more assured with the "In Progress" status label on the Process List and therefore preferred this concept over the Side Navigation one.                                      |
| **Mobile:** Since the form step titles will be collapsed within the accordion component and not always visible, some participants may struggle to track their progress through the form when the navigation accordion is collapsed. | **Definitely True.** All mobile participants (4/4) were unable to determine which steps they were on, which steps they had completed, or which steps they had not yet started when the Navigation component was collapsed. Some attempted to recall this information or read the page title aloud to identify their current step. However, most participants understood that they needed to expand the Navigation component to see their progress.                                                                                                             |
| **Side Navigation vs. Process List:** More participants will better understand the steps they have completed in the Process List than in the Side Navigation because of the “Complete” status label on the Process List.            | **Likely False.** All participants (8/8) were able to identify which steps they had completed on both concepts through various text-based and visual cues, such as color changes, bolding, and status label changes (Process List). Some participants mentioned that the text remained blue but was not bolded for the steps they completed (Side Navigation). Others noticed how completed steps turned to links (Process List). Most felt more assured with the "complete" status label on the Process List and therefore preferred this concept over the Side Navigation one. |
| **Side Navigation vs. Process List:** More participants will be able to identify the step they are currently on when using the Process List versus the Side Navigation due to the blue fill on the Process List.                    | **Likely False.** All participants (8/8) were able to identify which step they were on on both concepts through various text-based and visual cues, such as color changes and bolding, regardless of the design they were testing. Some participants noticed the bolded text and the blue line to the left of the step name (Side Navigation). Others noticed the blue fill, bolding of text, and the “In Progress” status label to determine which step they were on (Process List).                                                                                           |

  

**Goal 3:** Assess how effectively the navigation component allows Veterans to efficiently edit responses and complete tasks.


| **Hypothesis**                                                                                                                                                                    | **Conclusion**                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop:** Participants will use the Navigation component to return to a previous section, edit an answer, and return to the screen they were previously on.                    | **Likely True.** While all our participants (4/4) used the navigation component to go back and edit responses and to return to the step they left off, we expect that Veterans will use the 'Back' or 'Continue' buttons depending on which step they are trying to access. For example, they may use the ‘Back’ and ‘Continue’ buttons to go from Step 2 back to Step 1.                                                                                            |
| **Mobile:** Participants will use the navigation component to return to a previous section, edit an answer, and return to the screen they were previously on.                     | **Maybe True.** Only some participants (2/4) mentioned they would use the Navigation component to return to a previous section, edit their email address (Side Navigation) on their first task. Others mentioned they would go into their profile or main menu to update their email. In later tasks, all participants (4/4) knew to use the Navigation component to return to a previous section, edit an answer, and return to the screen they were previously on. |
| **Desktop & Mobile:** Participants will be able to use multiple navigation and editing strategies on the Review and Submit page, including inline editing, to edit their answers. | **Definitely True.** Almost all participants (7/8) mentioned they would use the Review page accordion to see if they could add a new condition, with 1 participant mentioning they would use the Navigation component. Most participants felt confident using the Navigation component to return to Step 2 to add a new condition, with 1 participant emphasizing the need to provide evidence for that new condition.                                               |
| **Side Navigation vs. Process List:** Most participants will find it easy to use both components to edit responses on previous screens.                                           | **Definitely True.** After engaging with both Navigation components, all participants (8/8) were able to easily use the Side Navigation and Process list to edit responses on previous screens.                                                                                                                                                                                                                                                                      |
## Key Findings

1. Finding #1: All participants were able to understand and use both Navigation components after interacting with them.
    
2. Finding #2: All participants preferred the Process List because it provided more explicit progress indicators.
    
3. Finding #3: Participants relied on a variety of visual and interaction cues to interpret progress and status within the navigation.
    
4. Finding #4: On mobile, most participants needed to take the additional step of opening the accordion to recall their progress and current location in the form.
    
5. Finding #5: After interacting with the navigation component, all participants understood why they couldn’t access future steps.
    
6. Finding #6: Some participants (3 out of 8) had difficulty navigating back to edit answers when navigation steps did not clearly map to individual pages.
    
7. Finding #7: All mobile participants were able to distinguish the navigation component accordion at the top of the Review and Submit page from the review accordions on that page.
    
8. Finding #8: When prompted to add a new condition on the Review and Submit page, some participants’ initial reaction was to use the "Edit" button within the Conditions accordion to add a new condition, while other participants shared that they would use the navigation component to go back to the Conditions step. 
    

## Details of Findings 

### Finding #1: All participants were able to understand and use both navigation components after interacting with them.
After testing each navigation component, participants answered scaled questions about how helpful and effective the component was in understanding progress, identifying their current location, and navigating back to edit answers. Responses were rated on a 1–4 scale, where 1 indicated least helpful/effective, and 4 indicated very helpful/effective. Across all questions, the Side Navigation received an average score of 3.7 out of 4, while the Process List received an average score of 3.9 out of 4, indicating that participants generally found both components helpful and effective.
    
- Generally, participants were enthusiastic about the inclusion of a navigation component. They expressed wanting it in the past when they filled out their form, or wanting it in the future. 
    
- One participant noted that the navigation component allowed them to preview sections of the form, giving them a better idea of what they were about to complete.

> "They're both fours, as far as [both components], but the second one...does go into further detail and is more accurate....Not more accurate, but it just makes it easier… easier to see where you are.” - P11 (Mobile)

> “It gives you precise directions. It kind of gives you an order of what you need instead of just waiting to see the next page. Kind of like an index maybe.” - P11 (Mobile)

> “I like how… it gives you a way to confirm all the steps that are required. and maybe allows you to be better prepared because you can kind of get an idea of what you're going to need to complete the process. If that wasn't it, and it only had, like, we're on step one, and all it had was veteran details, by the time I got to step 4, I may not have the supporting evidence I need.” - P2 (Desktop)

### Finding #2: All participants preferred the Process List because it provided more explicit progress indicators.

While both designs met core navigation needs, participants consistently favored the Process List because the “In Progress” and “Complete” labels (combined with supporting visuals such as the subway map and blue fill) gave participants greater confidence in their current position in the form, how many steps they had completed, and which step they were currently on.

![Screenshot of mobile accordion of the Side Navigation (Concept 1) and Process List (Concept 2) prototypes side-by-side of Step 4: Supporting evidence of VA Form 21-526EZ, with annotations on the distinct visual indicators and affordances respective to each design concept](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/images%20final%20report/Finding%20%232%20Side%20Nav%20and%20Process%20List%20Mobile%20Compare.png)
_Caption: Screenshot of mobile accordion of the Side Navigation (Concept 1) and Process List (Concept 2) prototypes side-by-side of Step 4: Supporting evidence of VA Form 21-526EZ, with annotations on the distinct visual indicators and affordances respective to each design concept_

> “I think it's way better than the other option...I think the biggest thing was letting you know in progress or completed." - P2 (Desktop)

> “I like this one much better...they show where you're at, what progress you're in..." - P5 (Mobile)


### Finding #3: Participants relied on a variety of visual and interaction cues to interpret progress and status within the navigation.

_Disclaimer: All of our participants were sighted users. We are planning to conduct testing with low/no vision users as we develop the Process List design. See [Further research needed](#further-research-needed)._


- Most participants relied heavily on text-based cues such as labels, font weight, and text color to determine which steps were complete, in progress, or unavailable. 
    
- Additional visual indicators, including the border beside the “in progress” step on the Side Navigation and the subway map circles on the Process List, were mentioned less consistently.
    
- One participant relied heavily on the interaction cues of the mouse cursor changing into a pointer when hovering over a clickable link. 
    
- Some participants referenced visual cues for progress tracking, such as “percent complete” and “checkmarks,” and implied that those additions could be helpful on this form.
    

> “Because they're a different color. They're all, you know, black. They haven't turned blue yet. They haven't turned light… I know this… I know I finished this. That's how, you know, I know this is finished, and it's light blue, so I'm… I'm imagining that when I finish each step, it's gonna look like this one here. Light blue.” - P3 on the Side Navigation component (Desktop)

> “The 'complete' is nice, but not as good as something like a checkmark or an X, something like that.“ - P3 on the Process List component (Desktop)

> “I'm working on something, it must be bold. Well, blue. It's not black, yeah...Light blue is finished.” - P5 on the Side Navigation component (Mobile)

### Finding #4: On mobile, most participants needed to take the additional step of opening the accordion to recall their progress and current location in the form.

When the Navigation accordion component was collapsed on mobile, most participants could not determine their current step or overall progress without expanding it, requiring an additional action to know the step they are on. Some participants attempted to recall which step they were on and how many steps remained, but were uncertain since the collapsed accordion copy says “Select a step,” which fails to convey progress or current location.

> “And I think I'm still in step 1...If I remember the steps, I can't remember the steps!" - P5 (Mobile)

> “And it tells you what the next steps are, and what you'll be doing as a next step. Because without the navigation, you don't know what the next steps are and what [it's] gonna ask you.” - P8 (Mobile)

> “I think I would like to see maybe what step I'm on at the very top, like, up here. You know, it just says review and submit. If that would say, like, 6 out of 6, and when I'm in conditions, it would say 2 out of 6.” - P10 (Mobile)

### Finding #5: After interacting with the Navigation component, all participants understood why they couldn’t access future steps.   

When asked about skipping to a future step, all participants expressed an approach for how they would do so, which was to use either the Navigation component or click the Continue button. 6 out of 8 participants tried to click on future steps in the Navigation component and when they were not redirected, all of them deduced that they could not access future steps due to needing to complete the form in sequential order.

> “It looks like nothing's happening here...Probably because I haven't entered any information on my conditions, which is tinnitus.” - P4 (Desktop)

> “I like how you can't move forward until you complete what you're on. You can't get ahead of yourself; you can't skip anything. It keeps you… It keeps you in order. You can't rush it, you really can't have any excuse for missing anything, because…If you don't have everything you have, then you can't move forward.” - P11 (Mobile)

> “It's not letting me click on the one that says Step 6. It doesn't allow me to do so. Why I think that is, it wants you to fill out these steps, and because you really can't review anything without providing information to the VA...they don't want you to move on to the last step, because…it's kind of like a moot point, because without internal information [there would be no information to review].” - P8 (Mobile)

### Finding #6: Some participants (3 out of 8) had difficulty navigating back to edit answers when navigation steps did not clearly map to individual pages.

- Participants’ ability to navigate back and edit answers was affected by a mismatch between the steps shown in the navigation and the multiple pages contained within each step, making it harder to identify where to return to change specific information.
    
- Participants relied on recall and trial-and-error navigation, using the “Continue” button to advance through pages to find the part where they wanted to edit information.

> “You know, part of me still feels that it should have, like, a subcategory if, for whatever reason, there's more than one page, or more than one step” - P2 (Desktop)

> “I think it'd be quicker, like, if I wanted, like…so if I'm in the review right now, if I wanted to go back and look at that page two of those veterans' details...that I could easily get to it and save a step.” - P2 (Desktop)

> "I would have thought it would… it would have been on the first step...Well, what step am I on, actually? Step 1. Okay, I was still on step one. I was on the first page of step one. It was actually page two of step one that this information was listed." - P8 (Mobile)

### Finding #7: All mobile participants were able to distinguish the navigation component accordion at the top of the Review and Submit page from the review accordions on that page.

- The original treatment of the navigation component on mobile is a gray accordion with a + icon, indicating to the user that they can expand the accordion. However, on our form, the Review and Submit page features 5 accordions that are collapsed and have the same gray treatment.
    
- Our team changed the treatment of the Navigation accordion component to a blue outline so that users could more easily distinguish it on the Review and Submit page. 
    
- During testing, all participants were able to distinguish the navigation component as having a different purpose from the Review and Submit page accordions.

![Screenshot of the mobile accordion of the Side Navigation (Concept 1) prototype showing 'Step 6: Review and submit' of VA Form 21-526EZ. The left design shows the treatment for the closed accordion and the right design shows the treatment for the open accordion with the form steps, and include annotations to distinguish between open and closed.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/images%20final%20report/Finding%20%237%20Image.png)
    
> “I would scroll to that portion [Conditions review accordion] and click edit, or I could just [use the] drop down from the “Select a step” [Navigation accordion component] and go back to the conditions, and then list it there.” -P10 (Mobile)

> “I would go to “Select a step” [Navigation accordion component], and go to Conditions.” -P11 (Mobile)


### Finding #8: When prompted to add a new condition on the Review and Submit page, most participants first interacted with the accordions on that page. Then, some participants’ initial reaction was to use the "Edit" button within the Conditions accordion to add a new condition, while other participants shared that they would use the Navigation component to go back to the Conditions step. 

- 4 out of 8 participants explicitly said they would use the Navigation component to return to the Conditions step. 4 out of 8 participants mentioned that they would use the “Edit” button on the ‘Conditions’ accordion. Of the participants who attempted to use the “Edit” button, 2 participants needed additional prompting to use the navigation component to complete the task. 
    
- This finding is meaningful because currently, if a Veteran is on the Review and Submit page and would like to add an additional condition, there is no other way to do so other than using the “Back” button multiple times to return to the Conditions step. By providing the navigation component, we give the Veteran a faster route to adding a condition by being able to jump to the Conditions step in one click. 
    
- Based on our findings, it seems likely that most Veterans could edit an answer directly on the Review and Submit page, and if they wanted to add a condition, most would eventually figure out they could do so by using the Navigation component through trial and error. [See screenshot from Finding #7.]
    
> “I have two different options. I could go to the left column and click Conditions or under Conditions here... no actually, I feel like the drop down here would just be editing (Tinnitus) so I would go to Step 2 Conditions in the left-hand column.” - P2 (Desktop)

> "I would click and expand conditions first. It says 'Edit.' I'd click on it to see what it does. Perhaps I can add a condition." [Participant clicks on Edit] “I'm not seeing where I can do that on this page. I can go to Step 2 Conditions (in the navigation component)" - P4 (Desktop)

> P10 (Mobile): “I will hit the plus sign by conditions. Then I will hit edit. But it don't have update page… I don't know how I will add more conditions.”  
Moderator: “Can you think of any other way to add a condition?”  
P10 (Mobile): “I would just have to go all the way back to the select step and see… Go to Condition.”

---


## Secondary Findings


### Secondary Finding #1: Similar to Key Finding #3, participants also used a variety of cues to assess whether the changes they made were saved. 

- The Review and Submit page was effective at allowing participants to verify their information. This led to participants expressing a high level of confidence when submitting, especially after validating that their changes were saved. 
    
- One participant referenced the “We’ve saved your application” autosave alert on each page as a reassuring reminder throughout the form.
    
- Participants typically referenced more than one type of affordance when answering questions about the steps they had completed. The combination of different cues used in the Process List design (inactive step, status indicator, blue and black text, bold and regular text, blue fill for in progress step, filled/empty subway map circles, blue/black/gray subway map circles and lines) left little room for doubt or confusion as to whether their answers were saved, since, as mentioned in Key Finding #5, progression of the form depends on completing all required questions of the previous step. The approach of using multiple methods and affordances to communicate important information to users helps instill confidence and trust.
      
> “I know there's a little snippet about, oh, your form is saved to a reference number.” - P8 (Mobile) referring to the Alert box 

> “I'm fairly confident because I can see it on this final review and submit page, which leads me to believe it's saved.” P9 (Desktop)
 
> “I’m confident that it saved because I see ankle replacement.” - P11 (Mobile)
  

### Secondary Finding #2: All participants understood the term “Step” and appreciated knowing what tasks they had to complete, but some participants were confused as to why each “Step” contained multiple pages. 

- Related to Key Finding #6, some participants found that the term “Step,” while helpful, is also a misnomer given the number of questions and tasks nested under each “Step.” 
    
- Some participants expected that after completing the questions on the first page of a “Step,” clicking “Continue” would navigate to the next “Step,” as opposed to additional questions within the current “Step.” While this is a global pattern for VA forms, using the term “Step” for the side navigation component further reinforces the misconception that users will complete six tasks, therefore misrepresenting the length and complexity of the 526EZ form.


> ‘[Step 1] is the first thing you need to do… give your details. And then, for Step 2, you need to tell us your conditions, and Step 3, you need a mental health statement from your doctor…” - P10 (Mobile)

> “In this case, [now] that I've confirmed that the birth… that the personal information is correct. So I'd automatically be looking for the next process, or the next step to take.” - P2 (Desktop)

> “I kind of initially would think [the Side Navigation link] is the page, that it'd be a separate page. Like, that's why I said I would have thought… since I clicked continue, that I'd be progressing here. I kind of think of ‘Step’, I think, a different page. But… there's different ways of looking at it; I could see it being this way, being a major heading. Veteran details is one major heading, and then you continue on, and eventually we'll get to the next major heading Conditions, so I can understand doing it this way, but personally, my first think, when I hit continue, I think I'm going to a new page, I think I should be progressing in what would be the steps.” - P3 (Desktop)


### Secondary Finding #3: One participant, in retrospect, wanted related questions and information to be consolidated. 

- For Step 1: Veteran details, participants highlighted how Personal information and Contact information were closely related and could be consolidated into one page. Upon first impression, the first page of the Veteran details step misled one participant in thinking the only task he would be completing was to verify the personal information presented (full legal name and birth date).   

> “The details, there's not a whole lot of veteran details listed. So, I guess it just wants to confirm your date of birth, it looks like. But again, like I said… if, for whatever reason, you need to update your personal information because of the limited hour, or the hours, a phone call is required to be made to update it.” - P2 (Desktop)

### Recommendations

**1. Recommendation: Implement the Process List version of the navigation component**
- Based on Finding #2, the team should move forward with refining and building the Process List design as an experimental component to be added to the VADS.
  
**2. Recommendation: Develop treatment options for inactive steps for the Process List design**
- Based on [accessibility feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126217) we received during Midpoint Review, the gray text color used for inactive steps does not meet the minimum contrast requirements. The team could increase the contrast, change the text color to black, or find another VADS color to meet accessibility requirements.
- However, related to Key Finding #5, some participants mentioned the gray text color as a visual indicator that distinguishes between active and inactive areas. The team should explore other ways to indicate inactive steps that don’t rely on text color or contrast.
> Moderator: “How do you know it's not clickable?”
> P10 (Mobile): “I know I can click on step one because it's underlined. Because [Step 2 is] not underlined, that's not clickable. And it's grayed… I guess the word is grayed out.”

> “It grayed out the other steps, which I know means I can't click on them until I've completed the previous steps, so I like this a lot better.” - P10 (Mobile)
    

**3. Recommendation: Explore incorporating additional or other visual indicators to communicate progress and completion**
- Based on Key Finding #3, one participant mentioned using checkmarks as a visual cue to help communicate which steps have been completed. While the team has created initial mockups using checkmarks, additional exploration of styles would be beneficial, as well as technical discovery into how these will be responsive as they progress through the application.
    
**4. Recommendation: Add copy to the mobile accordion to indicate the step the user is on in addition to "Select a Step"**

- Based on Key Finding #4, a UI affordance is needed on the mobile design to indicate to users the step they are on when the accordion is collapsed.
- Since the prototypes tested were based on an ideal future state without the progress bar, this recommendation can be implemented once the initiative of removing the [VADS progress bar]([https://github.com/department-of-veterans-affairs/va.gov-team/issues/126024](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126024)) is complete.
    

**5. Recommendation: Explore the possibility of adding subpages to the navigation component as list items**
- Based on Key Finding #6, to reduce confusion and ease navigation of multiple pages within a step, the team should investigate whether including subpages is feasible given the user flow complexities and heading issues of the 526EZ form, and assess how sustainable it is to maintain over time.
  - Assess the technical lift
  - If feasible, develop design concepts for desktop and mobile
  - Conduct usability testing to understand how Veterans navigate steps that contain multiple pages, particularly when returning to edit specific information
  
**6. Recommendation: Connect with the Platform Design System team about their exploration for [renaming “Step” to “Section” for forms](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5064)**
- Based on Secondary Finding #2, verify whether any explorations or testing will be done to change the term “Step” to “Section,” as this is a global pattern for forms on [VA.gov](http://va.gov).
- If not, the team could potentially include A/B testing for “Step” vs. “Section” as the terms used on the Navigation component.
    


## Product User and Business Outcomes

This section will be revisited after the Product Outline and Initiative Brief are updated.

  

## Key Performance Indicators

This section will be revisited after the Product Outline and Initiative Brief are updated.


## Next Steps


1. Share findings with the Disability Benefits Crew to ensure all teams working on the 526EZ form are informed. [#128205](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128205)
    
2. Submit an experimental design request for the Process List design to get approval and contribute to the VADS.[#128571](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128571)
    
3. Prioritize report recommendations and stakeholder feedback received through the design and development process, and determine which requirements will be in scope for future iterations. [#129507](https://github.com/orgs/department-of-veterans-affairs/projects/1660/views/64?pane=issue&itemId=148714031&issue=department-of-veterans-affairs%7Cva.gov-team%7C129507)


## Further research needed

For the Process List design:

- **Usability Testing with AT Users**
  - Conduct usability testing with AT users to validate the front-end experience and capture back-end requirements for screen reader and screen magnifier users 


(As mentioned in our recommendations:)

- **Incorporate Subpages**

  - Assess the feasibility of adding subpages and limitations in hierarchy
    
  - Create design concepts and explore approaches that work for desktop and mobile 
    
  - Test prototypes with Veterans
    
- **Completion Indicators**

  - Create design concepts, including checkmarks, and explore other completion indicators that are accessible to AT users
    
  - Test prototypes with Veterans
    
## Appendix

### Research documents

- [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/280eb43f4af367e96baa65b66083f931cedfea9b/products/disability/526ez/collab-cycle/side-nav/side-nav%20initiative%20brief.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/Side%20Navigation%20Research%20Plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/Side%20Nav%20Conversation%20Guide.md)
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2025-11%20Side%20Navigation/Scrubbed%20Transcripts)

### Tools used for Synthesis

* Mural - [Side Navigation Usability Testing Synthesis_Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1763752874980/8849b0670895cf338818802e8e57c986041d3d0b)
* Affinity mapping
* Github Copilot  
  
### Pages and applications used
 
* Side Nav [Desktop Figma Link](https://www.figma.com/proto/pvrA4dBGYhgiRyI0cxN8vE/526---Side-Navigation?page-id=2601%3A22166&node-id=2601-22168&viewport=-1007%2C-1002%2C0.2&t=nlemzcOqrgyMkO2B-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2601%3A22168&disable-default-keyboard-nav=1&hotspot-hints=0&hide-ui=1)
* Side Nav [Mobile Figma Link](https://www.figma.com/proto/pvrA4dBGYhgiRyI0cxN8vE/526---Side-Navigation?page-id=2601%3A22166&node-id=3096-60661&viewport=-1007%2C-1002%2C0.2&t=nlemzcOqrgyMkO2B-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3096%3A60661&show-proto-sidebar=1&disable-default-keyboard-nav=1&hotspot-hints=0&hide-ui=1)
* Process List [Desktop Figma](https://www.figma.com/proto/pvrA4dBGYhgiRyI0cxN8vE/526---Side-Navigation?page-id=3317%3A43593&node-id=3317-43788&viewport=4610%2C952%2C0.23&t=fb32htj2DX55RlkQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3317%3A43778&show-proto-sidebar=1&disable-default-keyboard-nav=1&hotspot-hints=0&hide-ui=1)
* Process List [Mobile Figma](https://www.figma.com/proto/pvrA4dBGYhgiRyI0cxN8vE/526---Side-Navigation?page-id=3317%3A43593&node-id=3404-36451&viewport=4610%2C952%2C0.23&t=fb32htj2DX55RlkQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3404%3A36441&show-proto-sidebar=1&disable-default-keyboard-nav=1&hotspot-hints=0&hide-ui=1)

### Research participants 

#### Recruitment criteria

We aimed to recruit a higher proportion of participants aged 55 and older, as well as participants with a range of educational backgrounds, to evaluate how the navigation components performed for users with varying levels of experience and familiarity with digital forms.

#### Demographics 

We talked to **8 participants.**

Audience segment:
* Veterans: 8 
* Caregivers: 0
* Family members of a Veteran: 0 


Gender:
* Male: 4 
* Female: 3 


LGBTQ+:
* Transgender: 1
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 0


Devices used during study: 
* Desktop: 4
* Tablet: 0
* Smart phone: 4 
* Assistive Technology: 0


Age:
* 25-34: x
* 35-44: 2
* 45-54: x
* 55-64: 5
* 65+: 1
* Unknown: 0


Education:
* High school degree or equivalent: 3
* Some college (no degree): 1
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 0
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 5
* Rural: 3
* Unknown: 0


Race:
* White: 3
* Black: 2
* Hispanic: 1
* Biracial: 1
* Asian: 1
* Native: 0


Disability and Assistive Technology (AT): Not applicable for this study
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

This research does not include the perspectives of the following marginalized Veteran groups:
* Cognitive Disability
* Other than honorable
* Immigrant Origin
* Expat (living abroad)
* Asian
* Native Hawaiian or other Pacific Islander
* First Nations (Canada)
* Native, American Indian or Alaska Native
* Gay, lesbian, or bisexual
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman
* Beginner AT User
* Experienced AT User
* Desktop Screen Reader (SR)
* Mobile Screen Reader (SR)
* Magnification / Zoom
* Speech Input Tech (Siri, Dragon)
* Hearing Aids
* Sighted Keyboard
* Captions
* Switch Device
* Braille Reader

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/images%20final%20report/Recruitment%20Checker.png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in 2025-11 Side Navigation

| Demographic | Category | Target % | Target # | # in Study | Target Achieved? | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 | p11 | p12 |
|---|---|---:|---:|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| All participants | Total | n/a | n/a | 8 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| Assistive Tech (AT) users | Total | n/a | n/a | 0 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| No-show participants | Total | n/a | n/a | 4 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| Age 55-64+ | General | 50% | 4 | 5 | yes | 1 | 1 | 1 | 1 | N | N | 1 | 0 | 0 | 0 | 0 | N |
| Cognitive Disability | General | 50% | 4 | 2 | no | 0 | 0 | 0 | 0 | 1 | N | 0 | 0 | 0 | 0 | 1 | 0 |
| Mobile user | General | 50% | 4 | 4 | yes | 0 | 0 | 0 | 0 | 1 | 0 | N | 1 | 0 | 1 | 1 | N |
| Rural | General | 25% | 2 | 2 | yes | 0 | 0 | 0 | 0 | 1 | 1 | N | N | 0 | 0 | 0 | 0 |
| No degree | General | 25% | 2 | 4 | yes | 0 | 1 | 0 | 1 | 0 | N | N | 1 | 0 | 0 | 1 | N |
| Other than honorable | General | 21% | 2 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Immigrant origin | General | 17% | 2 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Women | General | 10% | 1 | 3 | yes | N | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | N |
| Expat (living abroad) | General | 0.4% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Black or African American | Race | 15% | 2 | 2 | yes | N | 0 | 0 | 0 | 1 | 0 | N | 0 | 0 | 0 | 1 | N |
| Hispanic, Latino, or Spanish origin | Race | 12% | 1 | 1 | yes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| Biracial | Race | 3.9% | 1 | 1 | yes | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Asian | Race | 2.7% | 1 | 1 | yes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| Native Hawaiian or other Pacific Islander | Race | 0.3% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| First Nations (Canada) | Race | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native, American Indian or Alaska Native | Race | 1.6% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Gay, lesbian, or bisexual | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Transgender | LGBTQ+ | n/a | 1 | 1 | yes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | N | 0 | 0 | 0 | 0 | 0 | 0 |
| Beginner AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Experienced AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Desktop Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Magnification/Zoom | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Speech Input Tech (Siri, Dragon) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hearing Aids | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Sighted Keyboard | AT | 10% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Captions | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Switch Device | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Braille Reader | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

