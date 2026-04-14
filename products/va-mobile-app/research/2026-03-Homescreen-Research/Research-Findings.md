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


\[\!TIP\] **Complete the frontmatter section above AFTER you've finished and saved your research findings report below.**

Use the [GitHub Copilot Research Findings Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/research-findings-frontmatter-completion-prompt.md) to automatically generate structured metadata from this completed research findings report. The prompt uses natural language processing to extract key findings, participant demographics, recommendations, and apply appropriate research repository tags.

---

# 2026-03 Homescreen Concept Testing Research Findings

**Office of the CTO \- Digital Experience (OCTO-DE), VA Health and Benefits App, Mobile App Core Team**

**Date:** 04/09/2026

**Contacts:** Theresa Wang (Researcher)

[**Research Readout (PDF)**](http://link-here)  
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

This research can impact Veterans from Getting Out to Aging. [See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

`1.` **Understand users' expectations for homescreen content and navigation**

`2.` **Understand how users interpret and use new design concept's homescreen content and capabilities**

`3.` **Understand any points of confusion for users on the homescreen content and navigation, including for users with cognitive disabilities**

## Research Questions

**Research goal 1: Understand users' expectations for homescreen content and navigation**

1. What content do users expect to find on the homescreen?  
2. Where do users expect to find their Veteran status card, disability rating and payments, and dependents verification?  
3. Do users expect due dates for some or all "Action required" items?  
4. What level of detail do users need for homescreen content so that they can take action and complete tasks?

**Research goal 2: Understand how users interpret and use new design concept's homescreen content and capabilities**

1. Do users notice, understand, and take action on items in "Action required" and "Activity" sections?  
2. When tasks are surfaced on the homescreen, how do users want and expect to complete them?  
3. When provided with the opportunity to complete tasks such as paying copay and refilling prescription without leaving the homescreen, do users understand what to do and choose to do that instead of navigating to the feature?

**Research goal 3: Understand any points of confusion for users on the homescreen content and navigation, including for users with cognitive disabilities**

1. What causes users confusion or misunderstandings?  
2. Are there any terms or processes that cause particular confusion for users with cognitive disabilities?

## Methodology

This research was remote moderated concept testing study using Zoom. Participants were asked to narrate their thoughts as they navigate the clickable, medium-fidelity Figma prototype of the proposed homescreen redesign. Participants were then asked for targeted feedback on where to find items moved off the homescreen with the redesign, and to try to complete the tasks of paying a copay and refilling a prescription directly from the homescreen through a newly designed user flow concept. Since Figma prototypes cannot be used with screen readers, we prioritized recruiting at least 5 participants with cognitive disabilities and assessed the accessibility of content and navigation from their point of view. The conversation guide was written to be plain language and to allot ample time for each task to account for participants with cognitive disabilities who may need additional time to review and respond to designs.

## Hypotheses and Conclusions

*List hypotheses explored in the research and the conclusions drawn. If applicable, list the success or task completion rate.*

- **Hypothesis Statements:**

**Research goal 1: Understand users' expectations for homescreen content and navigation**

1. Users will expect to find new content such as new Secure messages and items requiring their review and action on the homescreen.  
- **“Definitely True”**: All users felt that items requiring attention and action belonged on the homescreen such as alerts, updates from the VA, reminders, information requiring their review, and tasks to complete.  
2. Users very familiar with the app will expect to find Veteran status card and disability rating and payments on the homescreen as reflects the current live app layout.  
- **“Likely False”**: Of the 8 users who were familiar with the app, none expected all of these items on the homescreen, and only a few expected some of these on the homescreen.  
3. Users less familiar with the app will expect to find Veteran status card and dependents verification in Profile.  
- **"Likely False"**: 1 of the 2 non-users expected to find dependents in Profile but the other expected it in Benefits. 1 expected Veteran status card in Payments or Profile, while the other was very unsure and thought it could be in VA Resources or a new, separate tab.  
4. Users less familiar with the app will expect to find disability payments and rating in Profile or in Payments.  
- **"Definitely True"**: Both expected both payments and rating together in Payments.  
5. Users will sometimes want more information than is presented on homescreen to help them with some tasks such as managing prescriptions, due dates for Action required items, or for appointments preparation.  
- **"Definitely True"**: All users felt displaying dates, especially due dates on items with due dates would better help them manage tasks.

**Research goal 2: Understand how users interpret and use homescreen content and capabilities**

1. Users will notice and give more weight to "Action required" items because of the label and design styling of the section.  
- **"Maybe True"**: While all users were drawn to the Action required items because of the label and styling and felt the Action required label denoted greater importance or urgency, all users also noticed and would act on items in the Activity section. A user's own goals and habits, perceived time sensitivity of items, and item's impact on benefits and were stronger factors in drawing a user's notice and sense of importance for specific items. However, users did think Action required was important and therefore felt that items they thought important should be moved into the Action required section.  
2. Users will be able to describe in their own words what the "Action required" section is for.  
- **“Definitely True”**: All users understand and could describe that this section was for items requiring their action or a "to-do list."  
3. Users will want to take action on both "Action required" items and "Activity" items that usually are of top concern to Veterans such as new appointment information, prescription updates, travel pay claims.  
- **“Definitely True”**: All users expected to act on items in both sections.  
4. Users may not be able to articulate exactly what kind of items belong in the "Activity" section.  
- **"Maybe True"**: While 3 participants were able to explain that Activity section contained updates and sometimes informational items that didn't require action, most users were confused about which items belonged in Action required vs Activity and some felt that some Activity section items like secure messages and unread decision letter did require action.  
5. Users will want to complete tasks as directly as possible.  
- **"Likely True"**: Most users appreciated the option to complete tasks directly from the homescreen, but verbiage that made it seem like actions would be one click without opportunity to review fully before committing made them nervous. As long as full information was incorporated into the direct process, users would want this option.  
6. Users will expect to be able to complete tasks directly from the homescreen when there is a call to action button associated with the item such as "Pay copay" for a medical copayment.  
- **"Definitely True"**: Call to action buttons made 6 users think that pressing the button would mean one click task completion. 

**Research goal 3: Understand how users interpret and use homescreen content and capabilities**

1. Since homescreen content uses plain language and short, to-the-point phrases, users will generally understand terms and calls action.  
- **"Likely True"**: Most content was easy to understand, but 6 users had slight confusion about what was meant with the phrases prescription "updates" and "refill ready."  
2. Users may experience minor confusion due to lack of familiarity with specific items such as 'evidence request.'  
- **“Likely False”**: Users, including those with cognitive disabilities only had minor confusion with the two phrases in hypothesis 3.1.

## Key Findings

**After completing your detailed findings below, you'll add metadata labels using the [Key Findings Metadata Labels Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md).**

### Homescreen content \- general

1. All participants expect to find items on the homescreen requiring attention and action including:  
   - Alerts  
   - Updates from the VA  
   - Reminders  
   - Information requiring their review  
   - Tasks to complete
```yaml key-finding-labels  
finding_id: 1
finding_title: "All participants expect to find items on the homescreen requiring attention and action"
labels:
  finding_types:
    - workflow_insight
  severity_levels: enhancement
  research_themes:
    - user_expectations
    - mental_models
  product_areas: []
  journey_stages: []
  user_characteristics: []
  emotional_states: []
  life_events: []
  trust_factors: []
  channel_switching: []
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: This is primarily an insight about expectations/mental models for what belongs on a homescreen (alerts, reminders, tasks), and it doesn’t describe a barrier—so it’s best captured as a workflow/expectations insight with “enhancement” severity.
```
2. 6 Participants prefer an uncluttered and streamlined homescreen so they can focus on what’s important
```yaml key-finding-labels
finding_id: 2
finding_title: "6 Participants prefer an uncluttered and streamlined homescreen so they can focus on what’s important"
labels:
  finding_types:
    - workflow_insight
  severity_levels: low
  research_themes:
    - pain_points
    - user_expectations
  product_areas: []
  journey_stages: []
  user_characteristics: []
  emotional_states:
    - overwhelmed
  life_events: []
  trust_factors: []
  channel_switching: []
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: This expresses a preference/need around information density and focus (friction but not task-blocking), so “low” fits; the sentiment suggests overwhelm when the homescreen is too busy.
```
### Homescreen organization and functionality

1. Prioritization of homescreen items are driven less by the “Action required” and “Activity” section designations and more by users’ goals habits, perceived time sensitivity of items, and their impact on benefits and pay  
   1. 6 participants find “Action required” easy to understand as “to-do-list” and helpful for drawing attention, but “Activity” header is less clear  
   2. All users expect items in both sections to require attention and action and found the distinction between what belongs where confusing and sometimes contrary to expectations  
   3. Users prioritize reviewing decision letters, messages, appointments, and unusual and unexpected items like copays  
```yaml key-finding-labels
finding_id: 3
finding_title: "Prioritization of homescreen items are driven less by the “Action required” and “Activity” section designations and more by users’ goals habits, perceived time sensitivity of items"
labels:
  finding_types:
    - usability_issue
  severity_levels: medium
  research_themes:
    - content_comprehension
    - navigation_wayfinding
    - mental_models
  product_areas: []
  journey_stages:
    - ongoing_management
  user_characteristics:
    - experienced_user
  emotional_states:
    - confused
  life_events: []
  trust_factors: []
  channel_switching: []
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: Users misunderstand the meaning/intent of “Activity” vs “Action required,” creating confusion about where to look first and what requires action; because it affects prioritization (but not full task completion), “medium” severity is a good fit.
```
2. Users find dates helpful for quickly understanding the prioritization of tasks and items surfaced on the homescreen  
   1. All users want dates displayed for items when available, especially for due dates for tasks affecting benefits and payments to help keep them on track   
   2. 6 users would appreciate a time sensitive organization of homescreen items that need their attention  
   3. All users take VA required tasks seriously, are afraid of missing due dates, and 3 would find helpful more highlighting of the dates such as displaying dates in red to make sure they don’t miss them  
```yaml key-finding-labels
finding_id: 4
finding_title: "Users find dates helpful for quickly understanding the prioritization of tasks and items surfaced on the homescreen"
labels:
  finding_types:
    - usability_issue
  severity_levels: high
  research_themes:
    - content_comprehension
    - task_completion
  product_areas:
    - benefits
    - payment_history
  journey_stages:
    - ongoing_management
  user_characteristics: []
  emotional_states:
    - anxious
  life_events: []
  trust_factors:
    - status_uncertainty
    - confirmation_needed
  channel_switching: []
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: Lack of clear dates/due dates increases risk of missed time-sensitive tasks affecting benefits/payments; participants expressed fear of missing due dates (anxiety) and needing clarity/confirmation, so “high” is appropriate.
```
3. 7 users use physical ID to show their Veteran status, not the app.   
   1. 6 participants felt Veterans status card belonged in Profile while 5 thought Benefits made sense.  
```yaml key-finding-labels
finding_id: 5
finding_title: "7 users use physical ID to show their Veteran status, not the app"
labels:
  finding_types:
    - behavioral_pattern
  severity_levels: low
  research_themes:
    - task_completion
    - user_expectations
  product_areas:
    - profile_account
  journey_stages:
    - ongoing_management
  user_characteristics: []
  emotional_states: []
  life_events: []
  trust_factors: []
  channel_switching:
    - digital_to_in_person
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: This is an observed behavior/workaround (using physical ID instead of in-app status card). It may inform prioritization/placement decisions but isn’t a major barrier, so “low” fits.
```
4. Some participants stressed the importance of Disability rating while waiting for an update but said that they rarely checked the rating once it had been set.   
   1. 6 expected rating in Benefits, and 5 could see it being useful on the homescreen.  
   2. 9 expected disability payments in the Payments category  
   3. Only 3 found it useful to have both rating and payment on the same page.   
```yaml key-finding-labels
finding_id: 6
finding_title: "Some participants stressed the importance of Disability rating while waiting for an update but said that they rarely checked the rating once it had been set"
labels:
  finding_types:
    - workflow_insight
  severity_levels: medium
  research_themes:
    - personalization_expectations
    - mental_models
  product_areas:
    - disability_compensation
  journey_stages:
    - ongoing_management
  user_characteristics: []
  emotional_states:
    - anxious
  life_events: []
  trust_factors:
    - status_uncertainty
  channel_switching: []
  temporal_patterns:
    - life_stage_dependent
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: Importance changes by “waiting for update” vs “already set,” which is a strong signal for conditional/personalized surfacing. Anxiety/status uncertainty is implied during the waiting period; severity is “medium” because it affects information needs and focus, not a hard block.
```
5. 8 participants expected to find dependents in Benefits since it affects the amount of benefits they would receive.   
```yaml key-finding-labels
finding_id: 7
finding_title: "8 participants expected to find dependents in Benefits since it affects the amount of benefits they would receive"
labels:
  finding_types:
    - workflow_insight
  severity_levels: medium
  research_themes:
    - navigation_wayfinding
    - mental_models
    - user_expectations
  product_areas:
    - benefits
  journey_stages:
    - ongoing_management
  user_characteristics: []
  emotional_states:
    - confused
  life_events: []
  trust_factors: []
  channel_switching: []
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: This is about where users expect to find a capability/info (dependents) based on their mental model of benefits impacts; mismatch can cause search friction/confusion (medium).
```
6. Users want to handle tasks directly from the homescreen when given the opportunity, but are concerned about committing to an action that they believe is completed with one click if they feel they won’t have adequate time to review beforehand.
```yaml key-finding-labels
finding_id: 8
finding_title: "Users want to handle tasks directly from the homescreen when given the opportunity, but are concerned about committing to an action that they believe is completed with one click"
labels:
  finding_types:
    - usability_issue
  severity_levels: high
  research_themes:
    - task_completion
    - trust_credibility
    - error_handling
  product_areas:
    - payment_history
    - prescriptions
  journey_stages:
    - ongoing_management
  user_characteristics: []
  emotional_states:
    - anxious
  life_events: []
  trust_factors:
    - confirmation_needed
  channel_switching: []
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: Fear of unintended one-click commitment is a trust/confirmation problem that can prevent users from taking action (or push them to slower paths). Because it impacts payments/refills and can block action, “high” severity is appropriate.
```
### Refill prescription \- content

1. 6 participants, including all 4 users with cognitive disabilities misunderstood or had slight confusion about prescription “updates” and “refill ready” meant.
```yaml key-finding-labels
finding_id: 9
finding_title: "6 participants, including all 4 users with cognitive disabilities misunderstood or had slight confusion about prescription “updates” and “refill ready” meant."
labels:
  finding_types:
    - content_confusion
  severity_levels: medium
  research_themes:
    - content_comprehension
    - mobile_experience
    - task_completion
  product_areas:
    - prescriptions
  journey_stages:
    - ongoing_management
  user_characteristics:
    - cognitive_considerations
  emotional_states:
    - confused
  life_events: []
  trust_factors:
    - confirmation_needed
  channel_switching: []
  temporal_patterns: []
  design_system_patterns: []
service_journey_mapping: []
pattern_triggers: []
Rationale: The issue is specifically unclear terminology that affects understanding of prescription status/actions; it impacts task success but is described as “slight confusion” (not complete failure), so “medium” fits. Cognitive considerations are explicitly relevant.
```
## Details of Findings

### Homesceen \- general: 

**Finding 1**  
All participants found that the Alert, Action required, and Activity section items matched their expectations for what they would find on the homescreen \- calling these to-do-list items, updates, and items needing their attention and action. No participant was surprised by the type of items included on the homescreen. 

![Homescreen prototype showing alerts and Action required and Activity sections.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/2026-03-Homescreen-Research/Images/Homescreen-general.png)


**Finding 2**  
6 participants talked about wanting an uncluttered and streamlined homescreen so they can focus on what’s the most important. Participants voiced this when discussing whether homescreen items needed more data on the homescreen, with most feeling only dates when available should be added to reduce clutter. They also voiced this when discussing where Veteran Status Card and Disability status and payments should be on the homescreen, with some saying they wouldn’t want those items on homescreen to reduce clutter. 

"*You can’t have too many things on the screen, because then it just kind of takes away from what you’re trying to do" (P9)*

*“Don’t want the homescreen being uber busy*” (P7)


### Homecreen organization and functionality: 

**Finding 1**  
Users usually come to the app to accomplish specific tasks such as checking status, refilling prescriptions, or managing appointments. 6 participants commented about being vigilant about tasks they need to complete that impact their benefits and pay. Therefore, how users prioritize homescreen items is less impacted by whether items are in “Action required” versus “Activity” and more by what they’re used to coming to the app for, whether something is time sensitive with a due date, and how much of an impact they will have on benefits and pay. 

* 8 participants were monthly or weekly app users and usually handled secure messages, travel pay, prescriptions, reviewing appointments, letters, and general review of benefits in app.   
* 4 commented that what would catch their attention would depend on what they were using the app for, and one specifically said they often skip homescreen items in lieu of going directly to the app category they have tasks in.   
* 4 specifically called out wanting to first review time sensitive items like unread decision letter, secure messages, and evidence due request, which is the only item shown in the design concept with a due date. Copay due caught most participants’ attention because this was unexpected.  
* 6 participants find “Action required” easy to understand as “to-do-list” and helpful for drawing attention, but “Activity” header is more ambiguous. These participants sometimes wanted to move items from Activity section to Action required to better fit their mental model that all of these items might require prioritized attention. 

"*When I'm focused on when I get onto the app, I'm focused on exactly where I need to go. I'm not really looking at the screen, per se, just like what I was telling you about the updates, I just kind of skip it, so it's a possibility that a veteran may just go and do whatever task they need to do, and not even pay attention to.*" (P9)

*"\[I would expect\] some of the things you have in the activity area \[in the Action required area\] actually. To the vast majority of us \[...\] any one of these things, you know, would be important to someone who that pertained to, but if it doesn't pertain to you, then I would say upcoming appointments, you know, secure messages, you know, all of those are gonna grab the average veteran first, because they're more \[...\] relevant to more of us.*” (P15)

“*So I feel like that Activity should be under Action Required...Because as a Veteran, I would prefer to be like, oh yeah, I got some messages I should be reading from my doctor, or, oh wow, a decision letter. That's kind of big.*" (P2)

*"I don’t really agree with the Activity designation…it’s not that I don’t agree with it but maybe it needs a different name. Activity could probably be more, like, the first one action required. Because when I see activity, no, it's, something that I need to do, like, reply to those letters. When I first saw it, I thought activity, what am I doing here? But then I learned to just kind of ignore that part and just look at the actual things that are in there, the actual information included in there."* (P5)

*"The first thing I would do is find out what this copay is and how much it is and when it's due. Ordinarily the only copays I have are for civilian providers and not VA providers and I'm neurotic about my bills so that would be the first thing I'd do"; "And then the evidence request that's due by the second, which is quickly running out of time.*" (P1)

**Finding 2**

Users find dates helpful for quickly understanding the prioritization of tasks and items surfaced on the homescreen because they take VA required tasks seriously and are afraid of missing due dates. 

* All users would like relevant dates displayed for items when available, with a special interest in having due dates to help keep them on track with tasks.   
* 6 users would appreciate a time sensitive organization of homescreen items that need their attention with 1 suggesting a stoplight approach with red signaling the most urgent upcoming items. A time sensitive organization with the most urgent items at the top was suggested by these participants.   
* 3 would find helpful more highlighting of the dates such as displaying dates in red or to make sure they don’t miss them.

*"So, I think for anything that has a timeframe, you should have a date\[...\] If \[organization is\] by date, the most urgent ones are the ones that's due sooner. So, for example, I guess the one evidence request by April 2nd. If everything else is under, like, after April 2nd, then maybe we should do it in that order. Time sensitivity order."* (P2)

*“Like the first one says due by April 2, 2026, maybe the others just have some kind of timeline because that’s what veterans are all about because we don’t want to miss our starting points and wait up until the last minute.”* (P5)

*“didn't see that April 2nd \[evidence request due date\] until I read it. I mean, I had to really read it. If it were me \[...\] because I'm older, I would have probably put April 2nd in \[...\] a bigger font. Something that would catch my attention. So, I mean, that's important. I would even maybe make it red or something."* (P12)

*"If it's something the VA needs, then yeah, a due date there would be good, too. Copay, I mean, anytime something's due, a no later than date, you know, should be included. That way, like I say, it's a trigger, and we know we gotta take care of it."* (P15)

**Finding 3**

7 users use physical ID to show their Veteran status, and therefore didn’t find the Veteran status card in app personally important or relevant to their app usage. 

* 6 participants expected to find the status card in the Profile, which is where it currently resides, with 5 selecting it as their first or only choice of location, and 1 selecting it as their second choice.   
* 5 thought Benefits made sense since it was related to getting Veterans’ benefits, with 4 selecting it as their first or only location choice, and 1 selecting it as their second choice.   
* Including 1 participant who remembered the status card is in the current app homescreen, 4 felt it could be useful for others on the homescreen but largely not something they needed for themselves.   
* 1 participant specifically wanted this in Profile so it would be at a remove from their other information and better preserve the privacy of their other benefits and payment related information. 

*"I'm assuming Benefits has all of my benefit letters and everything that I would generally show or use."* (P14)

*"I don't use the VA app for that. I have my driver's license or my VA card.*" (P2)

**Finding 4**

Disability rating is incredibly important for users while they’re waiting for an update. Participants spoke to its importance during this time but also agreed that once it was set, this was something they rarely checked since changes are rare. 

* 6 expected rating in Benefits since it relates to the benefits they would receive.   
* 5 could see it being useful on the homescreen in addition to elsewhere in the app because it’s so vitally important while waiting for the initial rating decision.   
* 9 expected disability payments in the Payments category and felt that was straightforward and obvious.  
* Only 3 found it useful to have both rating and payment on the same page, with some of those disagreeing saying they would prefer the page to be uncluttered. 


*"When people log in, they literally love to see their rating, especially if they’re waiting for \[disability\] claims \[approval\], to see if it changed right off the bat.”* (P9)

"*No, because it's not something that changes often."* On whether disability rating would be expected on the homescreen (P14)

*“I like to have that \[rating and payments\] separate so it don't all become jumbled where you're looking at your benefits."* (P5)

**Finding 5**

8 participants expected to find dependents in Benefits since it affects the amount of benefits they would receive. This was the 1st and only location choice for 6 people, and the 2nd choice for 2\. 

*"I want to say he’s under Benefits. Because from my understanding, when I had to add my wife, years ago. You know, because it is a little bit more money too."* (P6)

**Finding 6**

Users liked the efficiency of being able to pay their copay and refill their prescription directly from the homescreen, but because they were unfamiliar with the process, some became nervous about potentially paying or refilling with one action without the opportunity to thoroughly review an unexpected copay or the list of medications and only select one to refill. 

* 9 participants found the process to pay their copay quick and easy after completing the flow from homescreen.  
* 7 participants were wary that clicking the Pay copay subtask button would force them to immediately pay without a chance to review copay information, feeling it was safer to click the arrow or whole tile to view information  
* 4 participants expected the option to select their payment method and payment amount before submitting payment, and a couple wanted the reason for copay at the top of page for easier review  
* 7 participants appreciated the amount of information in the prescriptions modal, which detailed that they had 2 refills ready and 1 prescription shipped.  
* 2 participants called out their preference for staying on the homescreen while reviewing their refills in contrast to having to review the full prescription page, which can be overly complex and confusing.   
* 6 expected clicking Refill in the modal would force them to refill both prescriptions

*"I definitely wouldn't click on pay copay \[button on the homescreen\], because then I don't know if it's going to just come directly out of my account without me fully authorizing it, but yeah, I would click on the arrow, and see what they're talking about."* (P9)

*"I do like it this way \[through prescription modal\], because it doesn't get you entirely out of the homepage. It \[...\] should answer a majority of what folks would click on the Prescription for.”* (P2)

*“I wouldn’t have to worry about scrolling through my list of meds to figure out what I needed to get refilled.”* (P6)  

*"If I just wanted to do one of them, I would go to prescriptions, and just click the one I wanted or needed, and refill it from there. Because if I hit refill on this screen, it's going to give me both of them. Yeah, I would assume they \[both\] wouldn't be there unless they were going to be refilled when I said refill.”* (P15)

*"I feel like this one's \[prototype\] homescreen is a lot more functional. It's easier to do things. I can click the activity thing and it takes me right to the places that I need to go to address these things. And saying just click this button to file your travel claim. Instead of me having to right now go into my appointments and then I have to click submit a travel claim. Instead it's right here."* (P14)

### Refill prescription \- content

**Finding 1**

All 4 users with cognitive disabilities and 2 other participants experienced some confusion or did not understand what prescription “updates” meant in the Activity section or what “refill ready” meant in the prescriptions modal. 

* Participants either didn’t know what “updates” might include or assumed it would be changes to their medication from their doctor or a formulary change. This would be outside the scope of what prescription updates in the app refers to.  
* Participants were unsure if “refill ready” meant their refill was ready for pickup, had been shipped, or was ready to refill.

![Prescription refill modal showing 2 refills ready and 1 shipped.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/2026-03-Homescreen-Research/Images/Prescription-modal.png)

*"Prescription updates to me could mean we’re discontinuing this, or it’s no longer in the formulary.”* (P12)

*"2 refill ready. Ready for what? Pick up? Refill?"* (P2)

---

## Recommendations

*Summarize actionable recommendations based on findings.*

1. **Recommendation:** Display due dates, issued date, or other relevant dates when available  
   - All users would like relevant dates displayed for items when available, with a special interest in having due dates to help keep them on track with tasks.   
2. **Recommendation:** Display homescreen items in chronological order with the most recent activity at the top for items where dates are available  
   - 6 users would appreciate a time sensitive organization of homescreen items that need their attention with 1 suggesting a stoplight approach with red signaling the most urgent upcoming items. A time sensitive organization with the most urgent items at the top was suggested by these participants.   
   - 4 participants called out wanting to first review time sensitive items like unread decision letter, secure messages, and evidence due request, which is the only item shown in the design concept with a due date.   
3. **Recommendation:** Iterate on more descriptive label(s) or section(s) for homescreen items in lieu of “Activity” that can better prompt attention and action from users  
   - 6 participants find “Action required” easy to understand as “to-do-list” and helpful for drawing attention, but “Activity” header is more ambiguous. These participants sometimes wanted to move items from Activity section to Action required to better fit their mental model that all of these items might require prioritized attention.   
4. **Recommendation:** Review analytics for how often users click Veteran Status Card on homescreen, and if usage is low, remove from homescreen, keeping card in Profile only  
   - 7 users use physical ID to show their Veteran status, and therefore didn’t find the Veteran status card in app personally important or relevant to their app usage.   
   - 6 participants expected to find the status card in the Profile, which is where it currently resides, with 5 selecting it as their first or only choice of location, and 1 selecting it as their second choice.   
   - Including 1 participant who remembered the status card is in the current app homescreen, 4 felt it could be useful for others on the homescreen but largely not something they needed for themselves.   
   - 1 participant specifically wanted this in Profile so it would be at a remove from their other information and better preserve the privacy of their other benefits and payment related information.   
5. **Recommendation:** Since Disability Rating has drastically varying importance depending on whether users are waiting for disability claim approval, provide users option to minimize Rating card on homescreen to streamline homescreen  
   - Disability rating is incredibly important for users while they’re waiting for an update. Participants spoke to its importance during this time but also agreed that once it was set, this was something they rarely checked since changes are rare.  
   - 6 participants expected rating in Benefits since it relates to the benefits they would receive.   
   - 5 could see it being useful on the homescreen in addition to elsewhere in the app because it’s so vitally important while waiting for the initial rating decision.   
6. **Recommendation:** Review analytics for how often users click show latest payment on homescreen and consider removing recent payment from homescreen and displaying in Payments only  
- 9 participants expected disability payments in the Payments category and felt that was straightforward and obvious.  
- Only 3 found it useful to have both rating and payment on the same page, with some of those disagreeing saying they would prefer the page to be uncluttered.   
7. **Recommendation:** Locate Dependents in Benefits category  
- 8 participants expected to find dependents in Benefits since it affects the amount of benefits they would receive.   
8. **Recommendation:** Provide users the ability to handle simple tasks directly from homescreen  
- Users liked the efficiency of being able to pay their copay and refill their prescription directly from the homescreen, but because they were unfamiliar with the process, some became nervous about potentially paying or refilling with one action without the opportunity to thoroughly review an unexpected copay or the list of medications and only select one to refill.   
- 9 participants found the process to pay their copay quick and easy after completing the flow from homescreen.  
- 7 participants appreciated the amount of information in the prescriptions modal, which detailed that they had 2 refills ready and 1 prescription shipped.  
- 2 participants called out their preference for staying on the homescreen while reviewing their refills in contrast to having to review the full prescription page, which can be overly complex and confusing.   
9. **Recommendation:** Use clear language to set expectations and alleviate anxiety when providing users with ability to handle tasks directly from homescreen e.g., Review and \[action\] or use arrows to indicate more information without call to action text  
- 7 participants were wary that clicking the Pay copay subtask button would force them to immediately pay without a chance to review copay information, feeling it was safer to click the arrow or whole tile to view more information  
- 6 expected clicking Refill in the modal would force them to refill both prescriptions  
10. **Recommendation:** Place key information on what payments are for (e.g., date of service, provider, reason for copay) at the top of the screen so users can quickly understand charges, distinguish from similar activity, and determine whether to pay  
- 7 participants were wary that clicking the Pay copay subtask button would force them to immediately pay without a chance to review copay information, feeling it was safer to click the arrow or whole tile to view more information  
- A couple participants wanted the reason for copay at the top of page for easier review  
11. **Recommendation:** If providing users with ability to submit payment directly from homescreen, ensure users have the ability to choose payment method and amount  
- 4 participants expected the option to select their payment method and payment amount before submitting payment  
12. **Recommendation:** Use clear and consistent language for refills e.g., “x number ready to refill” to avoid confusion  
- All 4 users with cognitive disabilities and 2 other participants experienced some confusion or did not understand what prescription “updates” meant in the Activity section or what “refill ready” meant in the prescriptions modal.   
- Participants were unsure if “refill ready” meant their refill was ready for pickup, had been shipped, or was ready to refill.  
13. **Recommendation:** Ideate on whether “prescription updates” should be worded differently or broken up into single categories like refills vs shipped as homescreen activity to alleviate user confusion  
- All 4 users with cognitive disabilities and 2 other participants experienced some confusion or did not understand what prescription “updates” meant in the Activity section or what “refill ready” meant in the prescriptions modal.   
- Participants either didn’t know what “updates” might include or assumed it would be changes to their medication from their doctor or a formulary change. This would be outside the scope of what prescription updates in the app refers to.

## Product User and Business Outcomes

As the VA Health & Benefits mobile app grows, the app needs a clear, scalable information architecture (IA) framework that defines where features live, how they are presented, and when they belong on the Home screen. This work establishes a shared model for app structure and Homescreen placement so teams can make consistent, intentional decisions as new features are introduced.

This initiative is meant to create a durable, reusable foundation for feature placement across the mobile app. It should help protect the Homescreen as high-value real estate, reduce ambiguity for teams, and improve navigability and predictability for Veterans.

## Next Steps

1. Investigate:  
* Which home screen items have what kind of dates  
* What kind of data and statuses are available from Prescriptions backend  
2. Review analytics on Veteran Status Card and Payment Details click through from app homescreen  
3. Work with product, engineering, product owners, and design on prioritization of potential design updates

## Further research needed

*Continue testing updated organization of homecreen and information architecture decisions made once new designs are implemented.*

## Appendix

### Research documents

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Homescreen%20Redesign%20Product%20Brief.md)  
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/2026-03-Homescreen-Research/Research-plan.md)  
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/2026-03-Homescreen-Research/Conversation-guide.md)  
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/research/2026-03-Homescreen-Research/Transcripts)

### Tools used for Synthesis

*Excel, Figjam*

### Pages and applications used

[*Figma prototype*](https://www.figma.com/proto/qVqjxULrC26YoIbvnZKOwp/IA---Nav?node-id=1267-111661&t=h7BX9QDFmQDGn1Dk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1267%3A111661)

\[\!IMPORTANT\] **After completing the demographic information below and saving this file**, use the [GitHub Copilot Research Findings Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/research-findings-frontmatter-completion-prompt.md) to automatically populate the YAML frontmatter section at the top of this document with:

- Participant demographics (counts, age ranges, education levels, etc.)  
- Key findings and recommendations  
- Research goals and methodology  
- Appropriate research repository tags

The prompt will parse the demographic data from this section and structure it correctly for the frontmatter's nested YAML format.

### Research participants

*Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic.*

#### Recruitment criteria

*If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants.*

#### Demographics

We talked to **10 participants.**

Audience segment:

* Veterans: 10  
* Caregivers: 0  
* Family members of a Veteran: 0

Gender:

* Male: 6  
* Female: 4

LGBTQ+:

* Transgender: Unknown  
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0  
* Gay, lesbian, or bisexual: Unknown

Devices used during study:

* Desktop: 0  
* Tablet: 0  
* Smart phone: 10  
* Assistive Technology: 0

Age:

* 25-34: 2  
* 35-44: 1  
* 45-54: 2   
* 55-64: 4  
* 65+: 1  
* Unknown: 0

Education:

* High school degree or equivalent: 2  
* Some college (no degree): 1  
* Associate's degree, trade certificate or vocational training: 0  
* Bachelor's degree: 0  
* Master's degree: 5  
* Doctorate degree: 2  
* Unknown: 0

Geographic location:

* Urban: 6  
* Rural: 4  
* Unknown: 0

Race:

* White: 5  
* Black: 3  
* Hispanic: 2  
* Biracial: 2  
* Asian: 1  
* Native: 0

Disability and Assistive Technology (AT):

* Cognitive: 4  
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

\[\!NOTE\] *Complete the [VA recruitment checker for marginalized Veteran groups](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx):*


4. Generate an accessible version of those cells using Github Copilot Chat:  
   - Start a new Github Copilot chat  
   - Enter: "I want to convert these spreadsheet cells into a table in markdown:"  
   - Copy and paste the cells from the recruitment checker spreadsheet that you've filled in  
   - Copy the resulting markdown table by clicking the copy icon in the Copilot chat, and paste it into this report below  
   - (If Copilot returns an error, try using a different AI model, such as "Claude Sonnet 3.7 Thinking")

This research does not include the perspectives of the following marginalized Veteran groups: *List all groups in red from the spreadsheet*

* Other than honorable  
* Immigrant origin  
* Expat  
* First Nations, Native, American Indian or Alaska Native  
* LGBTQ+

### Recruitment of underserved groups in \[2026-03 Homescreen Concept Testing\]

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/2026-03-Homescreen-Research/Images/Participant-demographics.png)

#### A more accessible version of the table in the above image

➡️ *\[paste markdown table of completed recruitment checker from Github Copilot chat\]*  
