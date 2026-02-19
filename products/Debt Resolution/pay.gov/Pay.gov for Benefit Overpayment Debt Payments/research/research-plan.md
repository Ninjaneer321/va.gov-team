---
# Research Plan Metadata
title: "Research Plan for Financial Management, Pay.gov for Benefit Overpayment Debt Payments, 2026-02-12"
date: 2026-02-12
last_updated: 2026-02-19
team: "Financial Management"
product: "Pay.gov for Benefit Overpayment Debt Payments"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Integrate Pay.gov Hosted Collection Pages into the VA.gov overpayment debt payment flow to reduce confusion and drop-off caused by cross-site redirects and manual re-entry of personal/account information, and to improve usability, comprehension, and trust in completing overpayment debt payments."
  product_location: "VA.gov authenticated pages (My VA / Outstanding debts / overpayment debt details and resolve flow) with Pay.gov Hosted Collection Pages embedded/continued within the same browser, ending on a VA.gov confirmation page."
  user_familiarity: "Iteration on existing payment journey (improves current redirect-to-pay.va.gov experience by streamlining flow and prepopulating account information)."
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/product%20outline.md"

# Research Design
methodology: "Mixed methods: semi-structured interviews + moderated usability testing"
research_format:
  location: remote
  moderated: true

# Research Goals & Questions
research_goals:
  - goal_1: "Understand Veterans’ needs, expectations, and preferences for making payments, specifically (a) financial management behaviors (b) decision making around amounts and timelines (c) interest and challenges in automatic/recurring payments."
  - goal_2: "Test the usability of the Veteran’s overpayment debt experience in end-to-end flow testing (debt summary → details → resolve → choose payment option → Pay.gov HCP → confirmation)."

research_questions:
  - "What are Veterans’ current workflows and mental models for making payments on VA.gov?"
  - "What other comparable payment experiences do they prefer? Why?"
  - "What challenges or pain points do Veterans encounter in the current experience?"
  - "How easy is it to read and comprehend the pages?"
  - "Which aspects of the layout are most and least effective and why?"
  - "How does the experience compare to what they expected?"
  - "How confident and secure do they feel in the payment process? What creates confidence?"
  - "What factors influence Veterans’ decisions on payment amount/timeline (full vs partial vs plan)?"
  - "Do Veterans want recurring/auto-pay options? What trust/controls would they need?"
  - "Do Veterans notice/understand the transition and does it impact trust?"
  - "What parts of the flow are hardest to navigate with screen reader/magnifier and Zoom screen share?"

hypotheses:
  - "Veterans will prefer the more streamlined experience of hosted collection pages, including pre-populated account details and staying within the same browser."
  - "Veterans will be able to understand the difference between full and partial payment options and make a selection; if they hesitate or are unsure, we will identify what decision support (content, examples, explanations of consequences, or links to payment plans/financial help) is needed."
  - "Veterans will feel confident and secure that their payment has has been received in the new experience."
  - "Veterans will want more diverse payment methods for submitting payments, including interest in recurring payments and autopay."

expected_outcomes: "Identify how to iterate VA.gov pages and the VA.gov → Pay.gov transition to reduce confusion and manual entry, improve comprehension and usability of the end-to-end payment flow (including choosing full/partial/plan), and increase trust/confidence at confirmation—supporting future payment features and increasing online payment transactions while reducing analog transactions and drop-off."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation (inclusive recruitment strategy; quotas across cohorts such as payment plan experience, age, income, financial hardship, cognitive disabilities, and assistive technology use)."

  primary_criteria:
    - "Have a debt balance from overpayments in the last year"
    - "Are comfortable talking about their personal finances"
    - "Be willing to share a web browser window on their device during the session"
    - "Have a working microphone on their device"
    - "Have Zoom downloaded to their device prior to the session and know how to share their screen"

  secondary_criteria:
    - "At least 8 have had a debt repayment plan with the VA in the last year"
    - "At least 8 ages 55+"
    - "At least 8 with an annual household income of less than 50K"
    - "At least 6 participants must have experienced financial hardship now or in the past"
    - "At least 5 with cognitive disabilities"
    - "At least 5 under age 35"
    - "At least 5 people of color"
    - "At least 5 in a rural area"
    - "At least 5 without a degree"
    - "At least 3 with immigrant origins"
    - "At least 2 women"
    - "At least 1 from the LGBTQ+ community"

  screener_questions:
    - question: "Do you currently owe any of the following types of VA debt? If so, please select all that apply."
      qualifying_response: "Select at least one overpayment debt type (NOT 'Medical debt' only; NOT 'I do not currently owe any of the above')."
    - question: "When you sign in to VA.gov and to go My VA (https://va.gov/my-va/), do you see details about \"overpayment debts\" under the section \"Outstanding debts\"? (this is different from copay bills)"
      qualifying_response: "Yes, I see a listing of 1 or more overpayment debts on VA.gov."
    - question: "Have you been on a debt payment plan with the VA in the past year?"
      qualifying_response: "Either 'Yes' or 'No' (quota: aim for at least 8 participants to have been on payment plans with the VA in the past year)."
    - question: "Please select the statement(s) that apply to you: (Check all that apply)"
      qualifying_response: "Any response is acceptable (quota: aim for at least 6 participants to have experienced financial hardship; includes 'currently experiencing' and/or 'experienced in the past')."
    - question: "Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve."
      qualifying_response: "Any response is acceptable ('Yes', 'No', or 'Decline to answer'); used for representation quota."
    - question: "Is your annual household income less than $50,000?"
      qualifying_response: "Either 'Yes' or 'No' (used for representation quota)."
    - question: "Is it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these."
      qualifying_response: "Any response is acceptable; 'Yes' indicates cognitive disability."
    - question: "What device will you use to join the session?"
      qualifying_response: "Any response is acceptable."

participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 10

# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "TBD"
  research_review_submission: "TBD"

session_details:
  duration_minutes_non_at_users: 75
  duration_minutes_at_users: 90
  buffer_minutes: 60
  max_sessions_per_day: 2

# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Optimize software delivery for Veteran impact."
    key_results:
      - "Key Result 1.1: All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov."
      - "Key Result 1.2: Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs."
      - "Key Result 1.3: OIT has avoided at least $5 million in cost via successful decommissioning of at least 10 systems."
  - objective: "Objective 3: Relentlessly improve the user experience."
    key_results:
      - "Key Result 3.1: Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more."
      - "Key Result 3.2: 100% of end-user facing C100 systems maintain a ranked list of user pain points."
      - "Key Result 3.3: 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system."

veteran_journey_phases:
  - "Starting Up (Moment: Balancing Finances)"
  - "Taking Care of Myself (Moment: Maintaining my health)"
  - "Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)"
  - "Retiring (Moment: Taking care of my health)"
  - "Aging (Moment that Matters: Managing my declining health)"

# Research Repository Tracking
related_research:
  previous_studies:
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/research-plan.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/research-findings.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/research/2025-10-copays-usability/research-plan.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/research/2024-9-copay-usability/research-plan.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/research/2024-6-overpayment-usability/research-plan.md"

tags:
  - "AUD: Veterans"
  - "BNFT: Finances"
  - "BNFT: Education"
  - "BNFT: Disability"
  - "PRDT: Debt-portal"
  - "PRDT: Pay.gov"
  - "DSC: Form"
  - "DSC: Form - Radio Button"
  - "DSC: Checkbox"
  - "DSC: Button"
  - "DSC: Alert Boxes"
  - "DSP: Content Presentation"
  - "DSP: Contextual Help"
  - "DSP: Help users to check answers"
  - "usability-testing"
  - "moderated-usability-testing"
  - "semi-structured-interviews"
  - "HDW: Desktop"
  - "HDW: Laptop"
  - "HDW: Smartphone"
---

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

The integration of Pay.gov Hosted Collection Pages aims to provide an easier, more seamless payment experience for Veterans. In the current experience, Veterans are redirected from the VA.gov “Resolve Overpayment” page to an external pay.va.gov tab and entry page, where they must manually enter their personal account information. Monthly Medallia feedback consistently describes this experience as confusing and painful, increasing cognitive load and leading to drop-off.  

The new design streamlines the user experience with Pay.gov hosted collection pages, presenting the VA.gov to Pay.gov payment journey as a continuous flow and prepopulating a user’s account information, thus removing the need for Veterans to manually enter debt information.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The new experience spans VA.gov auth pages with Pay.gov Hosted Collection Pages integration. When looking at an individual overpayment debt , the user will be able to select full, partial, or a payment plan within VA.gov, and then proceed to Pay.gov hosted collection pages within the same browser without having to reenter their account information. Next, they enter and review payment information, and finally arrive at a payment confirmation page on VA.gov
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**As described above, this iterates and improves upon the existing payment journey, to now include the ability to seamlessly process a payment for an overpayment debt directly from the va.gov experience without needing to navigate to a different site.**

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/product%20outline.md).**

### Related Research 🔍

<details><summary>What research has been done on this product or similar products in the past?</summary>

`Link to relevant past research studies that inform this work. This helps build institutional knowledge and prevents duplicate efforts.`

> [!TIP]
> **Use the [Past Research Analysis Copilot Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-discovery/past-research-analysis-for-new-research-plan-prompt.md) to automatically find relevant research!**
>
> 1. Draft and commit your research plan
> 2. Open GitHub Copilot for your research plan. Click the Copilot icon on your file toolbar.
> 3. Copy and paste the prompt from the link above
> 4. Review the suggested studies and add the most relevant ones below

**Previous Studies:**
- [Mobile Feature Support, Debt Portal: Overpayments and Copayments (Mobile app), May 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/research-plan.md)
- [Mobile Feature Support, One VA Debt Letter in mobile app, Nov–Dec 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/research-findings.md)
- [Financial management, debt portal copays, October-November 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/research/2025-10-copays-usability/research-plan.md)
- [Financial management, debt portal copays, October 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/research/2024-9-copay-usability/research-plan.md)
- [Financial management, debt portal overpayments, June-July 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/research/2024-6-overpayment-usability/research-plan.md)

**Key Takeaways from Previous Research:**
- `Cross-site redirects create high risk for confusion and drop-off, especially when Veterans have to leave the “primary” experience (e.g., app or VA.gov) to complete actions on pay.va.gov / Pay.gov; prior mobile debt research anticipated that Veterans would find redirection confusing and feel friction when completing tasks outside the originating experience.
Relevant past study: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/research-plan.md`
- `Veterans manage VA debt alongside other bills and prioritize actionability (due dates + next steps). Prior research indicates Veterans often think in terms of “what do I need to do next and by when,” rather than categorizing VA debt as a separate mental bucket—so this study should focus on whether the Pay.gov flow supports quick comprehension, clear next steps, and a strong sense of “payment completed successfully,” rather than only testing page usability in isolation.
Relevant past study: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/research-findings.md`
- `Trust and confidence come from transparency and specific details—not from format alone. Veterans’ trust is more closely tied to whether the experience provides clear, concrete information (what they owe, why they owe it, what will happen next, and proof/confirmation) than whether information is “combined” or presented in a different wrapper. This suggests the Pay.gov experience must clearly communicate amounts, attribution, and confirmation/receipt details.
Relevant past study: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/research-findings.md`

> [!NOTE]
> If this is the first research study for this product, you can note that here. You may also want to reference research from similar products or features that could provide relevant insights.
</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

> **NOTE:** If a Key Result does not have a ***Research Ops Plain Language*** equivalent, it does not map to research supporting it as a key result for the parent objective.


`Objective 1:  Optimize software delivery for Veteran impact.`  

> - **Key Result 1.1:** All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov.
  - ***Research Ops Plain Language:** Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov*
> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
  - ***Research Ops Plain Language:** Supports a production release that will measurably improved a product's Veteran-impacting KPIs.*
> - Key Result 1.3:** OIT has avoided at least $5 million in cost via successful decommissioning of at least 10 systems.
  - ***Research Ops Plain Language:** Supports the decommissioning of a legacy system.*

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
  - ***Research Ops Plain Language:** Supports this product’s OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.*
> - **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points.
  - ***Research Ops Plain Language:** Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - ***Research Ops Plain Language:** Supports the delivery of at least one release that directly addresses a documented user pain point within this product.*

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
* `Starting Up (Moment: Balancing Finances)`  
* `Taking Care of Myself (Moment: Maintaining my health)`  
* `Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)`  
* `Retiring (Moment: Taking care of my health)`  
* `Aging (Moment that Matters: Managing my declining health)`

</details>

> [!TIP]
> Delete journeys not supported by this research.

## Research Goals 🥅	
`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **Understand Veterans’ needs, expectations, and preferences for making payments, specifically a)financial management behaviors b)decision making around amounts and timelines c) interest and challenges in automatic/recurring payments**

`2.` **Test the usability of the Veteran’s overpayment debt experience in end to end flow testing (debt summary → details → resolve → choose payment option → Pay.gov HCP → confirmation)**
  
### Outcomes
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---
* Determine how to iterate [VA.gov](http://VA.gov) pages to improve the payment experience for Veterans prior to build and release  
* Advance user-centered digital strategy for delivering future payment features and functionality 
* Gain foundational understanding of Veteran payment needs and preferred methods  
* Decrease rate of drop off due to Veteran frustration with manual data entry   
* Increase online payment transactions and decrease analog payment transactions  
* Evaluate trust/confidence during the VA.gov --> Pay.gov transition and at confirmation

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

**`1.`What are Veterans’ current workflows and mental models for making payments on VA.gov?**

**`2.`What other comparable payment experiences do they prefer? Why?**

**`3.`What challenges or pain points do Veterans encounter in the current experience?**

**`4.`How easy is it to read and comprehend the pages?**

**`5.`Which aspects of the layout are most and least effective and why?**

**`6.`How does the experience compare to what they expected?**

**`7.`How confident and secure do they feel in the payment process? What creates confidence?**

**`8.`What factors influence Veterans’ decisions on payment amount/timeline (full vs partial vs plan)?**

**`9.`Do Veterans want recurring/auto-pay options? What trust/controls would they need?**

**`10.`Do Veterans notice/understand the transition and does it impact trust?**

**`11.`What parts of the flow are hardest to navigate with screen reader/magnifier and Zoom screen share?**


> [!TIP]
>Enter more questions as needed

### Hypotheses
> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

* Veterans will prefer the more streamlined experience of hosted collection pages, including pre-populated account details and staying within the same browser  
* Veterans will be able to understand the difference between full and partial payment options and make a selection; if they hesitate or are unsure, we will identify what decision support (content, examples, explanations of consequences, or links to payment plans/financial help) is needed. 
* Veterans will feel confident and secure that their payment has has been received in the new experience  
* Veterans will want more diverse payment methods for submitting payments, including interest in recurring payments and autopay 

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

</details>

**`Semi-structured interviews - appropriate for generative research`,`Usability testing - appropriate for evaluative research`**

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [X] **Remote**
- [ ] **In-person**
      

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/research/conversation-guide.md)
- [Link to prototype](https://www.figma.com/proto/Yzumw4ai6JjkgS6jmB1PB5/Pay.gov-Hosted-Collections?node-id=40002346-61020&viewport=3519%2C-4684%2C0.25&t=RskLNxhHqH7nHhYc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=40002346%3A61020))

	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 
- Veterans who have experience making payments towards VA benefit overpayment debt.
- We would like for Perigean to recruit a total of 15 Veterans who do not use assistive technology. We are aiming for 10 sessions total.  
- Per VA guidance, the team will conduct an additional round of usability testing for accessible technology (assistive device, etc.) users once we have a coded prototype.

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **[15]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[15]**
- `Ideal completed sessions:` **[10]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `Have a debt balance from overpayments in the last year`  
- `Are comfortable talking about their personal finances`
- `Be willing to share a web browser window on their device during the session`
- `Have a working microphone on their device`
- `Have Zoom downloaded to their device prior to the session and know how to share their screen`

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `At least 8 have had a debt repayment plan with the VA in the last year`
- `At least 8 ages 55+`
- `At least 8 with an annual household income of less than 50K`
- `At least 6 participants must have experienced financial hardship now or in the past`
- `At least 5 with cognitive disabilities`
- `At least 5 under age 35`
- `At least 5 people of color`
- `At least 5 in a rural area`
- `At least 5 without a degree`
- `At least 3 with immigrant origins`
- `At least 2 women`
- `At least 1 from the LGBTQ+ community`

## Screener questions

Screener question 1

* Do you currently owe any of the following types of VA debt? If so, please select all that apply.  
  * Medical debt \[IF THEY ONLY SELECT THIS, DISQUALIFY\]  
  * Post-9/11 GI Bill overpayment (books and supplies, housing, or tuition)  
  * Disability compensation and pension overpayment  
  * Education Ch 33-Ch1606/Ch30 Kickers  
  * Chapter 34 education overpayment  
  * Chapter 35 education overpayment  
  * I do not currently owe any of the above types of VA debt. \[DISQUALIFY\]

Screener question 2

* When you sign in to VA.gov and to go My VA ([https://va.gov/my-va/](https://va.gov/my-va/)), do you see details about "overpayment debts" under the section "Outstanding debts"? (this is different from copay bills)  
  * Yes, I see a listing of 1 or more overpayment debts on [VA.gov](http://VA.gov).  
  * No, I don’t see any overpayment debt details on VA.gov \[DISQUALIFY\]  
  * I don’t have a VA.gov account / I can’t sign in right now \[DISQUALIFY\]  

Screener question 3

* Have you been on a debt payment plan with the VA in the past year?  
  * Yes  
  * No

Quotas: 

* Please aim for at least 8 participants to have been on payment plans with the VA in the past year

Screener question 4

Please select the statement(s) that apply to you: (Check all that apply)

* I am currently experiencing financial hardship.  
* I have experienced financial hardship in the past.  
* I have never experienced financial hardship.

Quotas:

* Aim for at least 6 participants to have experienced financial hardship


Screener question 5

* Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.  
  * Yes  
  * No  
  * Decline to answer

Screener question 6

* Is your annual household income less than $50,000?  
  * Yes   
  * No

Screener question 7

* Is it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.  
  * Yes (*mark as having a cognitive disability*)  
  * No  
  * Decline to answer

Screener question 8

*What device will you use to join the session?
  * Desktop or laptop computer  
  * Smartphone  
  * Tablet

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **2/20/26, 1-5pm ET**

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **3/2/26-3/23/26**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **75 minutes**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **60 mins**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **2 per day**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**

- `3/2, Monday, 12:00PM-5:00PM EST`
- `3/3, Tuesday, 12:00PM-5:00PM EST`
- `3/4, Wednesday, 12:00PM-5:00PM EST`
- `3/5, Thursday, 12:00PM-5:00PM EST`
- `3/9, Monday, 12:00PM-5:00PM EST`
- `3/10, Tuesday, 12:00PM-5:00PM EST`
- `3/11, Wednesday, 12:00PM-5:00PM EST`
- `3/12, Thursday, 12:00PM-5:00PM EST`
- `3/13, Friday, 12:00PM-5:00PM EST`
- `3/16, Monday, 12:00PM-5:00PM EST`
- `3/17, Tuesday, 12:00PM-5:00PM EST`
- `3/18, Wednesday, 12:00PM-5:00PM EST`
- `3/19, Thursday, 12:00PM-5:00PM EST`
- `3/20, Friday, 12:00PM-5:00PM EST`
- `3/23, Monday, 12:00PM-5:00PM EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Risha Lee**	
- `Research guide writing and task development (usually but not always same as moderator):` **Risha Lee**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Risha Lee**		
- `Note-takers:` **Megan Gayle and Joseph Lee**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **Denise Coveyduc**
- **Heather Rienks**
- **Tom Davis**

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by Denise Coveyduc, Financial Management Team Lead on [02-11-2026]`
- `Reviewed by Kevin M. Hoffman, OCTO Research-Ops Lead on [02-19-2026]`
