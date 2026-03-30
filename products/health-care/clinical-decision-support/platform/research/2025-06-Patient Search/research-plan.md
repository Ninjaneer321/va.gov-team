---
# Research Plan Metadata
title: "Research Plan for Patient Lookup and Reverse Patient Context, Platform, June 2025"
date: 2025-06-01
last_updated: 2026-03-30
team: "Platform"
product: "CDS Console"
product_area: "CDS Console — Sidebar Navigation / Patient Context"

# Background Context
background:
  problem_statement: "VA stakeholders requested a collation of existing patient-search related user findings from prior CDS Console studies to inform the design and implementation of patient lookup and reverse patient context features."
  product_location: "CDS Console > Sidebar Navigation"
  user_familiarity: "Iteration on existing Console sidebar; patient lookup is a net-new feature within the CDS Console context"
  product_brief_url: "[URL]"

# Research Design
methodology: "Secondary research synthesis — collation and analysis of findings from prior usability testing studies (R1 and R2 Sidebar Navigation rounds)"
research_format:
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: false # Options: true, false

# Research Goals & Questions
research_goals:
  - goal_1: "Identify and consolidate clinician expectations for patient search and selection within the CDS Console"
  - goal_2: "Surface patient safety concerns and workflow risks associated with mid-session patient context switching"
  - goal_3: "Establish design principles to guide patient lookup and reverse patient context implementation"

research_questions:
  - "What patient identifier formats do clinicians expect to use when searching for a patient in the CDS Console?"
  - "How do clinicians expect patient context changes to propagate across open CDS applications?"
  - "What patient safety risks are associated with allowing mid-workflow patient context switching?"
  - "What is the minimum patient information clinicians need visible at all times to confirm patient identity?"
  - "When in their workflow are clinicians most likely to search for or switch a patient?"

hypotheses:
  - "Clinicians will expect to search using first initial + last four SSN, mirroring established VistA/CPRS conventions"
  - "Clinicians will expect patient context changes to sync automatically across all open CDS tools"
  - "A meaningful subset of clinicians will have safety-related concerns about mid-workflow patient switching that must be addressed in the design"

expected_outcomes: "Findings will ground the design and implementation of patient lookup and reverse patient context features in validated clinician needs, reducing the risk of building functionality that disrupts existing workflows or introduces patient safety risks."

# Recruitment & Participants
recruitment:
  recruiting_partner: "N/A — secondary synthesis study, no new participants recruited"
  approach: "N/A"

  primary_criteria:
    - "N/A — data sourced from R1 and R2 Sidebar Navigation study participants (VA clinicians actively using CPRS and CDS Console)"

  secondary_criteria:
    - "N/A"

  screener_questions:
    - question: "N/A"
      qualifying_response: "N/A"

participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0

# Timeline & Sessions
timeline:
  pilot_date: "N/A"
  pilot_participant: "N/A"
  research_dates: "2024-12-10 to 2025-03-13"
  research_review_submission: "2025-06-01"

session_details:
  duration_minutes: 0
  buffer_minutes: 0
  max_sessions_per_day: 0

# Strategic Alignment
octo_priorities:
  - objective: "VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results:
      - "Improve satisfaction with our web and mobile products by 5 points"
      - "100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error"
  - objective: "OCTO's platforms are the fastest, most efficient, and most secure way to deliver products at VA"
    key_results:
      - "We have reduced the total error rates in our platforms by 50% compared to Q4 2024, towards a goal less than 1% per endpoint"

veteran_journey_phases:
  - "Patient appointment"
  - "Making clinical decisions"
  - "Documentation or charting"

# Research Repository Tracking
related_research:
  previous_studies:
    - "R1 Sidebar Navigation Usability Testing — December 2024"
    - "R2 Sidebar Navigation Usability Testing — February–March 2025"

tags:
  - "health-care"
  - "clinical-decision-support"
  - "CDS"
  - "patient-lookup"
  - "reverse-patient-context"
  - "sidebar-navigation"
  - "secondary-synthesis"
  - "BNFT: Healthcare"
---


	# Research Plan for Patient Lookup and Reverse Patient Context, Platform, June 2025
> [!NOTE]
> *Questions about how to set up your research study? Reach out first in the via Slack in [#cds-hcd-cop](https://dsva.slack.com/archives/C06043YBWTC) or if more help is needed check out the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.*

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>

`What problem is your product or feature trying to solve?`

**This research was initiated in response to a stakeholder request to collate existing patient-search related user findings from prior CDS Console studies. Stakeholders identified a need to ground the design and implementation of patient lookup and reverse patient context features in validated clinician insights, rather than building from assumptions alone. No new primary research was conducted; this plan documents the scope, goals, and approach of that synthesis effort.**

`Where is your product situated within the clinicians' or VA staff's toolset (ex: CDS Console > MedCalc)`

**CDS Console > Sidebar Navigation. The patient lookup feature allows clinicians to search for and switch the active patient context from within the Console sidebar, updating patient details across all open CDS applications.**

`What is clinicians' familiarity with this tool? Is this a new product or an iteration on an existing one?`

**The CDS Console sidebar is an existing product. Patient lookup and reverse patient context are net-new features being designed within the sidebar. Clinicians are highly familiar with patient search conventions from VistA/CPRS, which strongly shapes their expectations for this feature.**

`Product Brief`

**[Link to product brief](url goes here).**

</details>

### [OCTO-DSD Priorities](insert link here)

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA's digital experiences are the easiest and most efficient way to access VA health care and benefits.`

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

`Objective 2: OCTO's platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

> - **Key Result 1:** 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.
> - **Key Result 2:** We have reduced the total error rates in our platforms by 50% compared to Q4 2024, towards a goal less than 1% per endpoint.
> - **Key Result 3:** 100% of VA employees have access to a valuable Generative AI tool to help with their work.
> - **Key Result 4:** Each of our platforms* and tools increase the number of non-OCTO built capabilities or non-OCTO users by 50%. (*excluding mobile)

`Objective 3: OCTO teammates are empowered with the knowledge and resources they need to make sustained impact.`

> - **Key Result 1:** Team members reporting more than a reasonable amount of stress is 5 points lower for each quarter in 2025 than it was in the corresponding quarter in 2024.
> - **Key Result 2:** Every OCTO Portfolio identifies 2 or more strategic decisions per quarter that would benefit the larger OCTO team, and documents them publicly in a shared location.
> - **Key Result 3:** 75% or more team members are confident they have the knowledge needed to make effective decisions.

`Objective 4: OCTO positively influences VA's ability to deliver software products and services faster, safer, and with higher quality.`

> - **Key Result 1:** OCTO has delivered at least 10 impactful artifacts or learning activities (e.g., trainings, guides, COP meetings) focused on improving delivery practices that achieve an NPS score of 30 or higher from the target OIT delivery staff.
> - **Key Result 2:** OCTO has helped resolve/support at least 10 significant engineering issues or products outside our portfolio.
> - **Key Result 3:** Five or more non-OCTO teams have used SPRUCE to deliver high quality software.

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Clinician or VA Staff Journey](insert link)

<details><summary>Where does your product fit into the Clinician or VA staff journey?

- `Scheduling an appointment`
- `Preparing for an appointment`
- `Patient appointment`
- `Patient follow-up`
- `Making clinical decisions`
- `Documentation or charting`
- `Putting in an order`
- `Reviewing results`
- `Closing an encounter`

</details>

> [!TIP]
> Delete journeys not supported by this research.

## Research Goals 🥅
`What are you trying to learn from this research?`

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.
> This is a secondary synthesis study. Goals reflect the synthesis objectives rather than goals for new primary data collection.

### Goals

`1.` **Identify and consolidate clinician expectations for patient search and selection within the CDS Console, drawing from R1 and R2 Sidebar Navigation usability testing studies.**

`2.` **Surface patient safety concerns and workflow risks associated with mid-session patient context switching, as expressed by VA clinicians across prior research rounds.**

`3.` **Establish evidence-based design principles to guide the implementation of patient lookup and reverse patient context features.**

### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**This synthesis will serve as a reference document for the patient lookup and reverse patient context initiatives, enabling design decisions to be grounded in real clinician needs and behaviors. Findings will inform UX recommendations, open questions for future research rounds, and acceptance criteria for implementation.**

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/research-templates/conversation-guide.md)
> These questions guided the synthesis of prior study findings. They are not questions asked of new participants.

***Consider bucketing research questions under research goals and think about:***

`What will I do with what I learn from this question?`

`Does this question serve the goals of my study?`

**`1.` What patient identifier formats do clinicians expect to use when searching for a patient in the CDS Console, and how do these map to established VistA/CPRS conventions?**

**`2.` How do clinicians expect patient context changes to propagate across open CDS applications?**

**`3.` What patient safety risks do clinicians associate with mid-workflow patient context switching?**

**`4.` What is the minimum patient information clinicians need to see at all times to confidently confirm patient identity?**

**`5.` At what points in their workflow are clinicians most likely to search for or need to switch a patient?**

> [!TIP]
> Enter more questions as needed

### Hypotheses
> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!

**Think through these prompts to develop strong hypotheses:**

`What do you intend to learn and measure from this study?`

**We intend to learn whether existing research rounds contain sufficient, consistent signal about clinician expectations for patient search and context switching to drive design decisions without additional primary research.**

`What do you already know about this problem space?`

**From R1 and R2 testing, we know clinicians are deeply familiar with the first initial + last four SSN search format from VistA/CPRS. We also know there is mixed sentiment around the value of mid-workflow patient switching, with safety concerns cited by a subset of participants.**

`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don't skip this step!)`

**We assume clinicians will broadly accept patient lookup as a useful feature if it mirrors CPRS conventions and includes adequate safety guardrails. We may be underestimating the proportion of clinicians who would prefer to avoid context switching entirely.**

`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

**Clinicians will expect to search using the first initial of the last name combined with the last four digits of the SSN (e.g., "B1234"), mirroring the deeply ingrained search syntax from VistA/CPRS.**

**Clinicians will expect patient context changes to automatically and immediately sync across all open CDS tools upon confirmation.**

**A meaningful subset of clinicians will have patient safety concerns about mid-workflow context switching — specifically around data loss, wrong-patient entry, and unclear implications of switching — that must be addressed through confirmation steps, persistent identifiers, and clear messaging.**

---

## Methodology  🛠️
***Describe the method you're planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.***

<details><summary>Examples of common research methods include</summary>

- `Semi-structured interviews - appropriate for generative research`
- `Contextual inquiry - appropriate for generative research`
- `Card sorts - appropriate for generative and evaluative research; depending on the study design`
- `Tree tests - appropriate for evaluative research`
- `Usability testing - appropriate for evaluative research`
- `User acceptance testing (UAT) - required before product release`

</details>

**Secondary research synthesis.** This study involved the review, extraction, and thematic collation of patient-search relevant findings from two prior usability testing rounds — R1 Sidebar Navigation (December 2024) and R2 Sidebar Navigation (February–March 2025). No new participants were recruited or sessions conducted. Findings unrelated to patient lookup and reverse patient context (e.g., MedCalc, Task Manager, Voogle navigation) were excluded from the synthesis scope.

This method is appropriate because prior studies already generated rich, directly relevant clinician feedback on this topic. New primary research would be redundant at this stage. The synthesis creates a consolidated, accessible resource for the design team and stakeholders, and was initiated at the explicit request of VA stakeholders seeking a single reference for patient-search related user insights.

<details><summary>Additional resources</summary>

- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location
Currently, all clinical research for CDSC takes place remotely over MS Teams. We do not have processes in place to conduct in-person research with clinicians and VA staff. We will update this guide as things change.

- [x] **Remote**


## Research materials 📔

> [!NOTE]
> **Have your research plan reviewed by the OCTO VA HCD Lead or a CDS HCD Peer review before beginning recruitment. This doesn't mean the research plan has to be 100% finalized, but reviewed to ensure we are clear on our target participants**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

**For moderated interviews:**

- [Link to conversation guide](url goes here)

**For moderated usability tests:**
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)

**Source materials for this synthesis:**
- [R1 Sidebar Navigation Usability Testing — Session notes and insights](url goes here)
- [R2 Sidebar Navigation Usability Testing — Session notes and insights](url goes here)
- [Patient Lookup and Reverse Patient Context Research Findings](url goes here)
- [Patient Lookup Conversation Guide (R1 + R2 subset)](url goes here)
- [Research Readout (PDF)](url goes here)


## Recruitment 🎯
*Recruitment for CDSC research is done by the researcher. Account for recruitment in your planning and preparation time. Ideally outreach begins 2-4 weeks ahead of targeted testing dates*

*This is a secondary synthesis study. No new recruitment was required. The notes below apply to any future primary research rounds that build on these findings.*

### Recruitment approach
*Who is your intended audience for this research (e.g. clinicians, VHA administrative staff, coordinators, SMEs), and how will you recruit them?*

`Audience:` VA clinicians actively using CPRS and the CDS Console, with representation across care settings and roles.

**`1.`CDSC Research Participant Database:** The CDSC research participant database is available to CDSC HCD Practitioners. If you are not part of this group, ask the OCTO CDSC VA Lead to assist with recruitment.

**`2.`SSS Clinician Office Hours:** SSS hosts a weekly office hours for clinicians and other VHA staff. If you have an upcoming study, consider attending office hours to share about your study and see if any folks are interested or could connect you with someone.

**`3.`Application Support and Feedback:** SSS manages initial platform and app team support for CDS. Review support and feedback queries that come in and see who submitted the feedback and if they might match your study criteria. For example, a physician who requested a new calculator or had trouble with autopopulation may be interested in reviewing new designs.

**`4.`Snowball:** Ask your prior participants if they can share your name and email or the sign-up form with their colleagues to find new participants.

**`5.`Product SME:** Ask your product SME if they have other contacts you can engage with.

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. This is helpful if getting recruitment assistance from CDSC peers.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you used the CDS Console in the last 6 months? [answer should be yes to qualify.]
- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider what criteria MUST be met, versus what is nice to have.

### List the ideal completed sessions and total number and type (clinicians, VHA administrative staff, coordinators, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **2x** your ideal completed sessions number *(e.g. for 6 ideal completed sessions, plan to email at least 12 participants)*

- `Clinicians - CPRS:` **N/A — synthesis study**
- `Clinicians - Oracle:` **N/A — synthesis study**
- `VHA admin staff:` **N/A — synthesis study**
- `Total:` **N/A — synthesis study**
- `Ideal completed sessions:` **N/A — synthesis study**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?*

- `N/A — secondary synthesis study. For future rounds, primary criteria should include active CPRS users across inpatient and outpatient care settings.`
- **`Add more criteria as needed`**

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?*

- `N/A — secondary synthesis study. For future rounds, consider variety in specialty, role type (physician, NP, nurse, pharmacist), and FTE patient-facing time.`
- **`Add more criteria as needed`**

## Timeline 🗓️
Consider recruitment lead time is often 2-4 weeks.

### Outreach Email Templates
**General template, adjustments made for individual emails based on context or prior connection with participant. The outreach email must contain the line about voluntary participation and anonymity**

Hello (Name),

My name is (researcher/designer name), and we previously connected via your support request to (enter request or issue).

I am reaching out now to see if you would be interested in participating in a design feedback session. We are currently evaluating some new designs for the CDS Console patient lookup feature. I'd love to get your perspective and feedback on these new concepts. It would involve participating in a 60-minute remote session on MS Teams. The session would include a general introduction and current experience with the CDS Console, then I would share a design prototype with you along with a few probes to get your reactions, followed by closing questions.

**Your choice to participate is completely voluntary. We will share our learnings within the CDS Collaborative in the form of aggregated information or anonymized quotes. Your responses will remain confidential, and your anonymity protected.**

If you are interested in participating, the following days and times are available. Please respond to this email with a few 60-minute options that work for you, and I will send an invitation. If you are interested in participating, but not available for this session, please keep an eye out for future opportunities.

All times are in **Eastern** time:

Week of [Date]:

- [Day, Date]: [Time range]

Week of [Date]:

- [Day, Date]: [Time range]
- [Day, Date]: [Time range]

I hope we can connect soon. If you are not interested in participating in these types of sessions, that's fine too! Please let me know so I can make note!

Cheers,

(researcher name)


### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been shared via Slack in #cds-hcd-cop or DS Office Hours for feedback.*

**A pilot session is strongly recommended. Find a participant in the HCD CoP slack channel or your product team**

- `Pilot participant name:` **N/A — synthesis study**
- `Date and time of pilot session:` **N/A — synthesis study**

### Research sessions
- `Planned dates of research:` **Source studies conducted December 10–13, 2024 (R1) and February 18 – March 13, 2025 (R2). Synthesis completed June 2025.**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **N/A — synthesis study**

- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **N/A — synthesis study**

- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **N/A — synthesis study**


## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **N/A**
- `Research guide writing and task development (usually but not always same as moderator):` **Liz Blasi**
- `Participant recruiting & screening:` **N/A**
- `Project point of contact:` **[Enter full name]**
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**
- `Note-takers:` **N/A**
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 3 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.` Share the Notetaker and Silent Observer guide in advance to the other people observing the sessions.

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

### Notetaker and Silent Observer Guide
- Be a silent observer. If you have a question for the participant, ask the facilitator via a Slack DM and they'll accommodate it if appropriate.
- If you can notetake, please do! It helps researchers a lot to see what you captured. There's a note taking template in this Mural with screenshots. If you find it easier to write your notes or use a word doc, that's fine too! If you take running notes, please be sure to make a clear reference to the screen in question or the scenario being mentioned.
- Write what you hear and see as much as possible. For some it can be easier to write in first person, as it is said, so that you don't need to paraphrase anything. Try to capture what they said without adding your own interpretation of what they meant. E.g. "I'm not sure about this checkbox" does not equal "Doesn't understand checkbox."
- Share your notes back with the facilitator via Slack if taken outside of the mural. Do not include ANY PII in this chat.
- For design testing, try to write down things that aren't said—for instance, when someone misunderstood some copy or clicked the wrong element. It helps us figure out what needs to be revisited.
- Share a few raw impressions with the facilitator via Slack or in the notetaking document after the interview is done, if possible. It helps with synthesis!

**Protecting PII**
- It's important to protect the privacy of our VHA staff participants AND any Veterans.
- Do not include the participants name or other identifiers -- such as a very specific title that can be easy to identify them with in your notes. Instead, use a general role description, such as "primary care provider" and "also works in informatics"
- In the event a participant needs to share their screen or a tool with an actual patient (since test patients don't always work to show how the tool functions), stop the recording before they share. DO NOT RECORD THE PARTICIPANT'S SCREEN IF THEY ARE SHOWING A REAL PATIENT.


## Approvals ✅
- `Reviewed by [CDSC HCD Peer] or [CDSC VA HCD Lead] on [MM-DD-YYYY]`
