---
title: 'Topline Findings: Medications management improvements usability study'
product: My HealtheVet on VA.gov - Medications
team: MHV on VA.gov - Medications Team
office: Office of the CTO - Digital Experience (OCTO-DE)
date: '2026-02-00'
researchers:
  - Athena Bozak
  - Anneka Van Garza
  - Florence McCafferty
  - Cara Frissell
research_goals:
  - Evaluate whether Veterans can successfully navigate across the new Medications, Medication History, and In-Progress Medications pages to complete common medication-management tasks
  - Evaluate whether Veterans understand key medication states, filters, and refill-related UI patterns well enough to locate information and take action confidently
  - Identify usability issues that could create task failure, silent error, or confusion before implementation
methodology:
  - Remote moderated usability testing
  - Think-aloud protocol
  - Figma prototype testing
devices_used:
  desktop: 0
  tablet: 0
  smartphone: 0
  assistive_technology: 0
participants_total: 9
demographics:
  veterans: 9
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    25-34: 0
    35-44: 0
    45-54: 0
    55-64: 0
    65+: 0
    unknown: 9
  education:
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 9
  location:
    urban: 0
    rural: 0
    unknown: 9
  race:
    white: 0
    black: 0
    hispanic: 0
    biracial: 0
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
  - Wayfinding between the Medications, Medication History, and In-Progress Medications pages was fragile and created high task-completion risk
  - The filter “Update list” button caused repeated silent failures
  - The “Too early to refill” card was understood, but participants wanted clearer timing information
  - The print feature had discoverability and labeling issues
  - The grey “Too early to refill” card could be overlooked due to its muted visual treatment
  - The term “In-progress medications” was not intuitive before participants experienced the page
  - The In-Progress Medications page concept tested well once participants reached it
  - Refill and bulk refill workflows were generally strong and well understood
recommendations:
  - 'Strengthen wayfinding between medication pages: Increase the visual prominence of cross-links, consider button-style treatments, and add clearer contextual guidance when a page does not contain what users expect'
  - 'Reduce silent filter failures: Auto-apply filters when selected or make the “Update list” action substantially more prominent and harder to miss'
  - 'Clarify timing for “Too early to refill” states: Add an estimated eligibility date or refill window so Veterans know what to expect next'
  - 'Improve print feature visibility and clarity: Move the print action higher on the page or make it more persistent; relabel “Submit” to a clearer action such as “Print” or “Download”'
  - 'Increase visibility of grey informational cards: Reassess contrast, hierarchy, and placement so no-action-needed cards are still noticed'
  - 'Use more descriptive wayfinding labels: Consider replacing “In-progress medications” with language that more clearly communicates status tracking or refill progress'
kpi_alignment:
  - Not specified
outcomes:
  user: Veterans can more easily find the correct medication page, understand what actions are available, and complete refill-related tasks without confusion or unnecessary backtracking
  business: Reduce navigation-related failure, prevent avoidable calls or secure messages, and support a smoother rollout of the new medication management experience
opportunity_areas:
  - Improve cross-page orientation and navigation
  - Reduce error-prone filter interactions
  - Clarify refill timing and medication tracking states
  - Improve access to printable medication information
further_research_needed:
  - Evaluate whether revised navigation patterns and labels improve page-to-page movement without moderator support
  - Monitor whether users continue to default to calling or messaging when they encounter friction
underserved_groups_missing:
  - Not specified
secondary_research: []
synthesis_tools_used:
  - Figma prototype
tags:
  - 'AUD: Veterans'
  - 'BNFT: Healthcare'
  - 'MHV: Pharmacy'
  - usability-testing
  - moderated-research
  - remote-research
  - evaluative
---

# Topline Findings: Medications management improvements usability study

**Authors:** Athena Bozak, Anneka Van Garza, Florence McCafferty, Cara Frissell  
**Date:** February 2026

---

## On this page
- [Context](#context)
  - [Background](#background)
  - [Overview](#overview)
  - [Research goals and questions](#research-goals-and-questions)
  - [Screens and paths used in testing](#screens-and-paths-used-in-testing)
  - [Summary of key findings](#summary-of-key-findings)
- [Insights](#insights)
  - [Insight 1: Wayfinding between pages was fragile and high-risk](#insight-1-wayfinding-between-pages-was-fragile-and-high-risk)
  - [Insight 2: The "Update list" filter button caused silent failures](#insight-2-the-update-list-filter-button-caused-silent-failures)
  - [Insight 3: The "Too early to refill" card was understood, but participants wanted more timing information](#insight-3-the-too-early-to-refill-card-was-understood-but-participants-wanted-more-timing-information)
  - [Insight 4: The print feature had discoverability and labeling issues](#insight-4-the-print-feature-had-discoverability-and-labeling-issues)
  - [Insight 5: The grey card visual treatment may cause it to be overlooked](#insight-5-the-grey-card-visual-treatment-may-cause-it-to-be-overlooked)
  - [Insight 6: The term "In-progress medications" was not intuitive before users experienced the page](#insight-6-the-term-in-progress-medications-was-not-intuitive-before-users-experienced-the-page)
- [Secondary findings](#secondary-findings)
  - [The In-Progress Medications page is conceptually strong once users reach it](#the-in-progress-medications-page-is-conceptually-strong-once-users-reach-it)
  - [Refill and bulk refill workflows were generally strong](#refill-and-bulk-refill-workflows-were-generally-strong)
  - [Filter category comprehension was solid](#filter-category-comprehension-was-solid)
  - [Existing habits shaped user expectations](#existing-habits-shaped-user-expectations)
- [Recommendations](#recommendations)
- [Hypothesis mapping](#hypothesis-mapping)
- [Resources](#resources)

---

## <a name="context"></a>Context

### <a name="background"></a>Background

The Medications team is exploring a new medications management experience on VA.gov that separates key medication tasks across three distinct pages: **Medications**, **Medication History**, and **In-Progress Medications**. The goal is to better support common Veteran needs such as refilling medications, reviewing older medications, tracking refill progress, and printing medication information.

This work is part of broader Medications management improvements within authenticated My HealtheVet on VA.gov. The concepts tested in this study build on existing Veteran behaviors, but introduce a more distributed page structure and new navigation patterns that require users to understand where different types of medication information live.

---

### <a name="overview"></a>Overview

We conducted remote moderated usability sessions with **9 Veterans** to evaluate how well participants could complete common medication-management tasks using the proposed page designs.

Sessions followed a think-aloud approach using a Figma prototype. In addition to task completion, this research focused on where users hesitated, where they formed incorrect assumptions, and where the new structure created friction or silent failure.

#### Study structure

- **Part 1: Finding information across the medications experience**  
  Participants attempted common tasks such as locating a medication’s status, finding an older medication, and understanding where a medication was in the refill process.

- **Part 2: Taking action on medications**  
  Participants attempted refill-related tasks, interacted with filtering and page-to-page navigation, and explored printing and list-management features.

---

### <a name="research-goals-and-questions"></a>Research goals and questions

#### Research goals
1. Evaluate whether Veterans can successfully navigate across the new Medications, Medication History, and In-Progress Medications pages to complete common medication-management tasks.
2. Evaluate whether Veterans understand key medication states, filters, and refill-related UI patterns well enough to locate information and take action confidently.
3. Identify usability issues that could create task failure, silent error, or confusion before implementation.

#### Research questions
1. Can users understand the medication processes well enough to complete key tasks?
2. Can users accurately locate information about where a medication is in the process?
3. How do users move between the different medication interfaces?
4. What moments of friction or uncertainty create the greatest implementation risk?
5. What parts of the experience are already working well and should be preserved?

---

### <a name="screens-and-paths-used-in-testing"></a>Screens and paths used in testing

#### Figma prototype screens evaluated

- Medications Page
- Medication History Page
- In-Progress Medications Page
- Medication cards with refill actions, filter states, and cross-links
- Print workflow and bulk refill interaction patterns

---

### <a name="summary-of-key-findings"></a>Summary of key findings

Participants responded positively to the overall concept and generally understood the purpose of the new medication pages once they reached the right place. However, the experience showed two major risks before implementation: **fragile wayfinding between pages** and **silent filter failures caused by the “Update list” button**.

The central tension in the current design is that the experience distributes medications across three separate pages, while participants largely arrived expecting a more unified medications view. When they did not find what they needed, many did not interpret that as a page-structure issue. Instead, they assumed the medication was missing, chose inefficient recovery paths, or said they would leave the experience and call or message the VA.

---

## <a name="insights"></a>Insights

*Note: Not all participants completed every task. Task-level counts vary due to prototype constraints, including one session affected by a screen freeze during later tasks.*

---

## <a name="insight-1-wayfinding-between-pages-was-fragile-and-high-risk"></a>Insight 1: Wayfinding between pages was fragile and high-risk

**Veterans did not arrive with a clear mental model of the three-page medications structure, which made navigation between pages fragile and increased the risk of task failure.**

Participants often expected **“Medications”** or **“Refill VA medications”** to show everything. In Task 1, **6 of 9 participants** started on the wrong page for the task by going to the Medications Page or refill-related entry points first.

When the needed medication was not there, recovery depended heavily on cross-links or secondary navigation. These pathways were inconsistent. Some participants found them, but others missed them, backtracked, or said they would leave the experience and call or message the VA instead.

#### Cross-links were important, but not consistently noticed

Text links such as **“Go to your in-progress medications”** and **“Review and print list of medications”** were intended to help users recover when they landed on the wrong page. However, these links were frequently overlooked or not fully understood.

- **3 to 4 participants per task** missed key cross-links
- Several participants backtracked to the MHV landing page to try again
- Some participants used breadcrumbs or secondary navigation as a fallback
- **3 of 9 participants** said they would call the pharmacy or send a secure message rather than continue navigating

> *“I don’t know what that is... I’m guessing that means you’ve placed the order.”*  
> *“Actually, I wouldn’t... I would probably look on the bottle. Call to the pharmacy and tell them what the situation is.”*

#### When users noticed the right cues, navigation improved quickly

The issue was not that the pathways failed functionally. It was that they were easy to miss. Participants who noticed the cross-links or alert-based navigation could move through the experience with relatively little friction.

The **green success alert** after refill submission was the most reliable example of this pattern. All **7 participants** who submitted a refill noticed the success alert, and **6 of 7** used its in-progress link to continue.

**Research implication**

Navigation between pages currently depends too much on subtle text links and on users understanding the architecture ahead of time. Stronger wayfinding and more explicit recovery guidance will likely be needed before implementation.

---

## <a name="insight-2-the-update-list-filter-button-caused-silent-failures"></a>Insight 2: The "Update list" filter button caused silent failures

**Participants generally understood the filter categories, but the manual “Update list” interaction repeatedly caused silent failures.**

**7 of 9 participants** selected a filter without clicking **“Update list”** at least once during the study. In these moments, participants believed the page had updated when it had not.

This created a high-risk usability issue because the error was often invisible. Participants continued the task with confidence, using results that did not actually reflect their filter selection.

#### The issue was mechanical, not conceptual

Participants generally understood what filter categories such as **Active**, **Inactive**, **All**, and **Renewal needed before refill** meant. The problem was that the interface did not match their expectation that selecting a radio button would immediately update the list.

This issue affected multiple tasks:

- In Task 2, participants believed an old medication was not present when the list had not actually updated
- In Task 4, participants selected filters for printing but did not apply them, creating a risk of printing the wrong list
- Repeat misses across tasks suggest this was not just a one-time learning issue

> *“I keep forgetting that update list.”*  
> *“I think the list should popup/change when he chooses ‘All meds’ without clicking the button.”*

**Research implication**

The current pattern creates silent error rather than visible failure. Auto-applying filters or making the apply state much more prominent would better align with participant expectations.

---

## <a name="insight-3-the-too-early-to-refill-card-was-understood-but-participants-wanted-more-timing-information"></a>Insight 3: The "Too early to refill" card was understood, but participants wanted more timing information

**The grey “Too early to refill” card was broadly understood, but some participants wanted clearer timing expectations.**

All **9 participants** who encountered the card correctly interpreted it as meaning their request had been acknowledged and would be processed automatically when eligible. Many found this reassuring.

At the same time, **3 participants** explicitly wanted more timing specificity, such as when the refill would become eligible or roughly when they could expect it to ship.

> *“It’s kind of reassuring that once we’re able to, we’ll ship these medications to you.”*  
> *“It’s too early to refill... we will expect it to be refilled between a certain date and a certain date.”*

**Research implication**

The pattern is conceptually strong, but adding an expected date or refill window could reduce uncertainty and help prevent unnecessary follow-up behaviors such as calling the pharmacy.

---

## <a name="insight-4-the-print-feature-had-discoverability-and-labeling-issues"></a>Insight 4: The print feature had discoverability and labeling issues

**Participants saw value in printing medications, but the print feature was hard to find and some of its labels were unclear.**

The print action was located at the bottom of the Medication History Page, below the medication list. This placement created friction because participants often had to scroll through a long list before finding it.

**5 of 8 participants** who attempted the print task had notable difficulty locating the feature. Some said they would have defaulted to browser print instead.

There was also confusion around the **“Submit”** button within the print flow. Some participants interpreted it correctly, but others found it vague and less direct than a clearer action label such as **“Print”** or **“Download.”**

Participants were also split on whether printing **Active** medications or **All** medications best matched the idea of a current list, which introduced additional ambiguity.

**Research implication**

The print feature appears useful, but its current placement and labeling make it harder to discover and interpret than expected.

---

## <a name="insight-5-the-grey-card-visual-treatment-may-cause-it-to-be-overlooked"></a>Insight 5: The grey card visual treatment may cause it to be overlooked

**Although participants correctly interpreted the grey “Too early to refill” card, its muted visual styling made it easier to miss.**

**3 of 9 participants** initially had difficulty locating the grey card on the In-Progress Medications Page. In some cases, participants scrolled past it before realizing it was the item they needed.

This suggests that the card’s visual distinction from more colorful or prominent status sections may unintentionally reduce its visibility, even when the information itself is important.

> *“Oh, wait, yeah, Lipitor is there. Oh my god, I missed it.”*

**Research implication**

The grey card successfully communicates a lower-action state, but it may need stronger hierarchy or contrast so it is not skipped.

---

## <a name="insight-6-the-term-in-progress-medications-was-not-intuitive-before-users-experienced-the-page"></a>Insight 6: The term "In-progress medications" was not intuitive before users experienced the page

**Participants understood the In-Progress page once they saw it, but the label itself did not consistently communicate what users would find there.**

Before clicking into the page, **2 of 9 participants** explicitly said the term **“In-progress medications”** was unclear or unfamiliar. Some participants were not sure whether it referred to submitted refill requests, shipped medications, or something else entirely.

> *“Go to your in-progress medications. Now I’m confused, because I’m not sure what that one means.”*  
> *“I don’t know what that is.”*

Once participants reached the page, reactions were much more positive. Most found the page helpful and understandable.

**Research implication**

The concept tested better than the label. A more descriptive link label may help users predict the destination and use the page more confidently.

---

## <a name="secondary-findings"></a>Secondary findings

### <a name="the-in-progress-medications-page-is-conceptually-strong-once-users-reach-it"></a>The In-Progress Medications page is conceptually strong once users reach it

**Participants generally responded well to the In-Progress Medications page once they arrived there.**

**7 of 8 participants** who viewed the page understood the three-phase tracker and found the information useful. Participants described the page as helpful for confirming whether a refill had been requested and for understanding where that refill was in the process.

> *“This lets me know everything I need to know at the present time.”*  
> *“It tells me what’s on the way.”*

---

### <a name="refill-and-bulk-refill-workflows-were-generally-strong"></a>Refill and bulk refill workflows were generally strong

**Participants were generally able to complete refill tasks once they were on the correct page.**

**7 of 8 participants** successfully refilled a medication in Task 3, and all **6 participants** who completed the bulk refill task successfully used the **Select all** and **Request refills** pattern without assistance.

The green success alert performed especially well as a confirmation and next-step cue.

> *“Oh, well, how wonderful it is, instead of having to hunt for it.”*  
> *“That would be my first thought, is to just click all three.”*

---

### <a name="filter-category-comprehension-was-solid"></a>Filter category comprehension was solid

**Participants generally understood what filter categories meant when asked to define them.**

Active, Inactive, All, and Renewal needed were conceptually understandable. The larger issue was not category comprehension, but rather whether users successfully applied the selected filter.

This matters because it suggests the current risk lies more in interaction design than in terminology.

---

### <a name="existing-habits-shaped-user-expectations"></a>Existing habits shaped user expectations

**Participants brought strong expectations from their current medication-management routines, and these habits shaped how they approached the new experience.**

Several participants expected a single comprehensive medications list. Others relied on familiar cues such as **last filled date** or defaulted to calling or messaging when they felt uncertain.

These habits were not inherently negative, but they shaped how participants interpreted the new page structure and how quickly they abandoned the digital flow when they could not find what they expected.

---

## <a name="recommendations"></a>Recommendations

### Strengthen wayfinding between medication pages
**Outcome:** Veterans can move confidently between Medications, Medication History, and In-Progress Medications without backtracking or abandoning the task.

**Rationale:**  
Wayfinding was the highest-risk issue in the study. Participants often started on the wrong page and did not consistently notice the cross-links intended to help them recover.

**Design and content considerations:**  
- Increase the visual prominence of cross-links significantly  
- Consider button-style treatments rather than standard text links  
- Add contextual guidance when a page may not contain what a user expects  
- Reassess whether link labels clearly communicate what users will find on the destination page  

---

### Reduce silent filter failures
**Outcome:** Veterans can confidently filter medication lists without believing results changed when they did not.

**Rationale:**  
The “Update list” interaction repeatedly caused silent failures across tasks.

**Design and content considerations:**  
- Auto-apply filters on selection if possible  
- If manual apply must remain, make the action substantially more visible and clearly tied to the selected filter  
- Consider stronger state change cues when a new filter has been selected but not yet applied  

---

### Clarify timing for “Too early to refill” states
**Outcome:** Veterans better understand what will happen next and when.

**Rationale:**  
Participants understood the grey card, but some still wanted more concrete timing information.

**Design and content considerations:**  
- Add an estimated eligibility date or refill window  
- Clarify when the medication will be processed or shipped if no action is needed  

---

### Improve print feature visibility and labeling
**Outcome:** Veterans can more easily find and use the print feature with confidence.

**Rationale:**  
The print feature was useful in concept but difficult to find, and some labels were unclear.

**Design and content considerations:**  
- Move the print action higher on the page or make it more persistent  
- Replace “Submit” with a more direct label such as “Print” or “Download”  
- Continue evaluating how filter choices affect print expectations  

---

### Increase visibility of grey informational cards
**Outcome:** Veterans notice important no-action-needed statuses without confusion.

**Rationale:**  
The grey card was understood when seen, but was sometimes overlooked.

**Design and content considerations:**  
- Reassess visual hierarchy, contrast, and placement  
- Ensure lower-action states are still easy to scan and find  

---

### Use more descriptive wayfinding labels
**Outcome:** Veterans can better predict where links will take them before clicking.

**Rationale:**  
The concept of the In-Progress page worked, but the label did not always communicate that clearly.

**Design and content considerations:**  
- Explore more descriptive alternatives such as status-tracking language  
- Test revised labels in context with surrounding page navigation  

---

## <a name="hypothesis-mapping"></a>Hypothesis mapping

| Hypothesis | Supported? | Notes |
|------|-----|-----|
| Most Veterans will find and understand in-progress medication status | Partially | Understood once participants reached the page; getting there was inconsistent |
| Most Veterans will understand different progress states and what happens next | Yes | The three-phase tracker and grey card were generally understood |
| Veterans will use navigation cues, links, filtering, and sorting successfully | Partially | Used when noticed; cross-links and “Update list” were both missed repeatedly |
| Most Veterans will locate medications when they do not know the name | Partially | Some participants completed this, but filter interaction issues and page structure introduced friction |
| Veterans can determine whether they can request more medication from list view | Yes | Medication cards and refill patterns generally supported this |
| Most Veterans will complete refill requests and understand what happened | Yes | Refill and bulk refill patterns tested well overall |
| Most Veterans will find a complete list of current medications | Partially | Filter issues and page-distribution issues created risk |
| Veterans will recognize that lists can be printed or shared | Partially | Print feature discoverability was inconsistent |

---

## <a name="resources"></a>Resources

- Figma prototype
- Task-level findings
