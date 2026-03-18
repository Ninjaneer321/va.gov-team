---
title: "Pay.gov for Benefit Overpayment Debt Payments Research Findings"
product: "Pay.gov for Benefit Overpayment Debt Payments"
team: "Financial Management"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-03-17"
researchers:
  - "Risha Lee"
research_goals:
  - "Understand Veterans' needs, expectations, and preferences for making payments, specifically financial management behaviors, decision making around amounts and timelines, and interest and challenges in automatic/recurring payments"
  - "Test the usability of the Veteran's overpayment debt experience in end-to-end flow testing (debt summary → details → resolve → choose payment option → Pay.gov HCP → confirmation)"
methodology:
  - "Semi-structured interviews (N=11)"
  - "Moderated usability testing (N=11)"
devices_used:
    desktop: 8
    tablet: 0
    smartphone: 3
    assistive_technology: 0
participants_total: 11
demographics:
  veterans: 11
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 2
    "35-44": 3
    "45-54": 1
    "55-64": 3
    "65+": 1
    unknown: 1
  education:
    high_school: 1
    some_college: 2
    associates: 1
    bachelors: 4
    masters: 3
    doctorate: 0
    unknown: 0
  location:
    urban: 8
    rural: 3
    unknown: 0
  race:
    white: 6
    black: 2
    hispanic: 0
    biracial: 0
    asian: 2
    native: 1
  disability:
    cognitive: 2
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
  - "Veterans are confused by 'overpayment' terminology which feels like VA's mistake but places blame on them for repayment"
  - "Veterans cannot track their debt balance or payment progress in VA.gov despite money being automatically deducted"
  - "Multiple sequential debt letters with incomplete information cause severe stress and anxiety about financial impact"
  - "Veterans prefer online self-service over phone calls for setting up and managing payment plans"
  - "Critical payment information is buried behind multiple clicks rather than being front-facing"
  - "Veterans need clear receipts and payment confirmations to verify payments were applied correctly"
  - "VA system processing delays create overpayments but collection is aggressive, creating sense of injustice"
recommendations:
  - "Replace 'overpayment balance' terminology with 'Amount Due' and use plain language throughout debt communications"
  - "Create Debt Management Dashboard in VA.gov showing real-time balance, payment history, projected payoff date, and payment modification options"
  - "Consolidate debt notification into ONE comprehensive letter with full explanation, all options, specific dates, and online access information"
  - "Build online payment plan setup and management tool allowing Veterans to self-service without phone calls"
  - "Redesign debt detail page information architecture to front-load critical details above the fold"
  - "Implement comprehensive confirmation and receipt system with email notifications and downloadable PDFs"
  - "Develop VA accountability measures for system-caused debts including automatic waiver review and transparent attribution"
kpi_alignment:
  - "Reduce call volume to Debt Management Center for payment management inquiries by 25%"
  - "Increase payment plan modification rate (Veterans who increase payment amounts)"
  - "Decrease time from debt notification to payment setup from 2-3 weeks to under 7 days"
  - "Increase Veteran confidence scores for understanding debt details"
outcomes:
  user: "Veterans can understand, verify, and manage their VA debts with the same ease and transparency they experience with consumer banking"
  business: "Reduce administrative burden on Debt Management Center while improving on-time payment rates and Veteran trust"
opportunity_areas:
  - "Proactive error reporting before debt accumulates"
  - "Real-time payment simulation to calculate payoff timeline based on custom amounts"
  - "Consolidated debt dashboard showing all VA debts across benefit types"
  - "Mobile-first payment management for Veterans on-the-go"
further_research_needed:
  - "Mobile-specific debt management needs with diary study of Veterans using mobile exclusively"
  - "Complex debt scenarios involving reserve/VA compensation crossover requiring detailed verification"
  - "Non-English speaking Veterans' understanding of debt notifications and payment options"
underserved_groups_missing:
  - "Veterans over 65 (only 1 participant, 9%)"
  - "Hispanic Veterans (0 participants, 0%)"
  - "Veterans with lower education levels (all participants had some college or higher)"
secondary_research:
  - "Previous mobile debt portal research"
  - "Copay payment history usability studies"
synthesis_tools_used:
  - "Manual thematic analysis"
  - "Transcript review and coding"
  - "Verbatim quote extraction"
---

# Pay.gov for Benefit Overpayment Debt Payments Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Pay.gov for Benefit Overpayment Debt Payments, Financial Management Team**

**Date:** 03/17/2026

**Contacts:** Risha Lee

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

This research supports Veterans during multiple phases of their journey where they manage VA benefit overpayment debts:

- **Starting Up (Moment: Balancing Finances)** - Managing unexpected debt while establishing financial stability
- **Taking Care of Myself (Moment: Maintaining my health)** - Balancing health needs with financial obligations
- **Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)** - Managing debt alongside other life responsibilities
- **Retiring / Aging (Moment: Taking care of my health)** - Managing fixed income with debt repayment

The Pay.gov integration aims to streamline the VA.gov to Pay.gov payment journey by presenting it as a continuous flow with prepopulated account information, eliminating the current confusing cross-site redirect experience that causes high drop-off rates based on Medallia feedback.

**Key moments this tool supports:**
- Discovering they owe a VA benefit overpayment debt
- Understanding what they owe and why
- Deciding how to repay (full payment, partial, payment plan)
- Completing the payment transaction securely
- Verifying payment was received and applied correctly

**Intended outcomes:**
- Reduce time to complete payment from 20+ minutes to under 10 minutes
- Increase payment completion rate from current baseline by 25%
- Reduce calls to Debt Management Center for payment inquiries by 25%
- Increase Veteran confidence in understanding debt details and payment options

## Research Questions

* What are Veterans' current workflows and mental models for making payments on VA.gov?
* What other comparable payment experiences do they prefer and why?
* What challenges or pain points do Veterans encounter in the current debt payment experience?
* How easy is it to read and comprehend the overpayment information and payment pages?
* Which aspects of the layout are most and least effective and why?
* How does the experience compare to what Veterans expected?
* How confident and secure do Veterans feel in the payment process and what creates confidence?
* What factors influence Veterans' decisions on payment amount/timeline (full vs partial vs payment plan)?
* Do Veterans want recurring/auto-pay options and what trust/controls would they need?
* Do Veterans notice/understand the VA.gov to Pay.gov transition and does it impact trust?

## Methodology 

- **Method 1: Semi-structured interviews (N=11)** - 25 minutes exploring payment behaviors, financial management practices, decision-making around payment amounts/timelines, experiences with VA and non-VA payment plans, and preferences for automatic payments
- **Method 2: Moderated usability testing (N=11)** - 30 minutes evaluating a Figma prototype of the VA.gov debt summary → details → resolve → Pay.gov hosted collection pages → confirmation flow, with participants completing tasks and thinking aloud

**Session duration:** 75 minutes total per participant  
**Dates:** February-March 2026  
**Location:** Remote (Zoom) with screen sharing


## Hypotheses and Conclusions

**Hypothesis 1:** Veterans will prefer the more streamlined experience of hosted collection pages, including pre-populated account details and staying within the same browser.
- **Likely True** - While the hosted collection pages tested well with P13 providing strongly positive feedback about the seamless process, the research revealed deeper issues with terminology, information architecture, and lack of balance tracking that must be addressed to fully realize the streamlined benefit.

**Hypothesis 2:** Veterans will be able to understand the difference between full and partial payment options and make a selection; if they hesitate or are unsure, we will identify what decision support is needed.
- **Likely True** - Participants navigated the payment options without significant confusion. P13 specifically appreciated "the 3 different options for financial help" being clearly presented with visual hierarchy. However, the research revealed that decisions are heavily influenced by their inability to track remaining balance over time.

**Hypothesis 3:** Veterans will feel confident and secure that their payment has been received in the new experience.
- **Likely False** - 4 out of 11 participants (36%) explicitly stated they need receipts, confirmations, or ability to verify payment was applied. P02 said "I don't trust that my payment will catch up to the balance" due to lack of visibility. The absence of email confirmations and downloadable receipts significantly undermines confidence.

**Hypothesis 4:** Veterans will want more diverse payment methods for submitting payments, including interest in recurring payments and autopay.
- **Definitely True** - 6 out of 11 participants (55%) expressed preference for automatic payments. P03: "I have everything in my life kind of on auto-pay." P11 valued auto-deduction because it's "one and done, and I don't have to really think about it." However, they also want ability to easily modify payment amounts online (currently requires phone calls).

## Key Findings

1. Veterans are confused by "overpayment" terminology which feels like VA's mistake but places blame on them for repayment
2. Veterans cannot track their debt balance or payment progress in VA.gov despite money being automatically deducted
3. Multiple sequential debt letters with incomplete information cause severe stress and anxiety about financial impact
4. Veterans prefer online self-service over phone calls for setting up and managing payment plans
5. Critical payment information is buried behind multiple clicks rather than being front-facing
6. Veterans need clear receipts and payment confirmations to verify payments were applied correctly
7. VA system processing delays create overpayments but collection is aggressive, creating sense of injustice

## Details of Findings 

### Finding 1: Veterans are confused by "overpayment" terminology which feels like VA's mistake but places blame on them for repayment

**CRITICAL SEVERITY** - Affects 9 out of 11 participants (82%)

The term "overpayment balance" creates immediate confusion and distrust. Veterans interpret "overpayment" as the VA's error ("you overpaid me"), yet they feel blamed for repayment. The word "balance" is ambiguous—it could mean either a credit or a charge. This linguistic barrier undermines trust at the critical first touchpoint when Veterans discover they owe debt.

**Evidence:**

**P02:**
> "Overpayment balances is kind of, like, two words that are confusing. Overpayment is… doesn't mean balance. Balance means balance. There's… so, if you think of the word overpayment, I know this is thinking about it, but this is what language is so important… overpayment means you made a mistake, you overpaid me. Why do I owe you money back? That's your mistake, not mine. Right, so I would take off the word overpayment, and balance… That's… balances due. Or, pay back… pay a debt. Or debt owed, but overpayment means you made a mistake, not me."

**P02:**
> "Pay your balance now to avoid collection… balance due. What does that mean? Is that a credit, or is it a charge? I don't know what current balance is. Is that your balance, or is that my balance due? Current debt, but a balance means that it's balanced. Current balance of… is that a credit, or a charge."

**P04:**
> "Yeah, it's confusing, and it looks like it... I don't know why the VA uses some of the language they use."

**P02:**
> "You are collecting, but do you mean… I think what they mean is a collections agency, or a late fee, I don't know, a late fee collected by the VA. It's ambiguous, because you are collecting, but… trying to avoid collection is ambiguous."

**Impact:**
- Language barriers prevent Veterans from quickly understanding their financial obligation
- Creates emotional distress as Veterans feel blamed for VA's administrative errors
- Affects Veterans' ability to take action because they don't clearly understand what they owe
- Most severe for Veterans experiencing financial hardship who need crystal-clear actionable information

**Context:**
This issue appears immediately when Veterans first encounter debt notices and persists throughout the payment process. Affects all user segments regardless of education level (all participants had some college or higher) or technical literacy.

---

### Finding 2: Veterans cannot track their debt balance or payment progress in VA.gov despite money being automatically deducted

**CRITICAL SEVERITY** - Affects 8 out of 11 participants (73%)

Veterans have money automatically deducted from their disability checks but cannot verify current balance, whether payments are being correctly applied, how many payments remain, or when debt will be paid off. This complete lack of financial transparency violates basic financial management expectations and creates deep distrust in the VA payment system.

**Evidence:**

**P02:**
> "I don't know how much, or, you know, what the… I don't have a balance sheet or a register to go by. I don't know… I think there's one… one letter that goes out every year. It just says that you're gonna be making a payment, but it doesn't, to my recollection, doesn't indicate how much or for how long this payment will be."

**P09:**
> "Well, I, I could go into the VA, but… Now that I said that, I really can't... I really can't go into, like, VA.gov and track it. They don't… to my knowledge, they don't have that set up, which should really be good. I mean, it's really essential. But they don't have it set up… like, I go into VA.gov a lot. I can't… I can't access that. I would have to go to, like, Deers.com, or another… A totally different email or different app. I can't go into VA.gov."

**P09:**
> "It'd be nice just to see a monthly-monthly, almost like an amortized, rate where you would see it less and less each month, and you would know how many more payments. I don't have access to that. All it does at VA.gov is it states I have X amount taken out, and when it was started. It doesn't show what my balance is now."

**P02:**
> "I don't trust that my payment will catch up to the balance, because I don't… I see one balance, but I don't know… It's just… I don't trust that they will take my payment, apply it to my debt. And provide me a fresh balance every month. So, I don't see a balance sheet…"

**P16:**
> "if I could access and say... because I see the fact, like, when I log into the VA site, that I have a debt, and it's being repaid, but it's not… like, I can go change my direct deposit, but I don't have anywhere to log into the debt, or if there is, I haven't found it, to say, would you like to change your repayment amount?"

**Impact:**
- Complete lack of financial transparency prevents informed decision-making
- Veterans cannot verify payments are being correctly applied to their debt
- Inability to plan budget or financial future without knowing payoff timeline
- Creates distrust in VA's financial management and payment systems
- Most severe for Veterans with multi-year repayment plans who receive only annual letters

**Context:**
Affects the 9 participants (82%) who have automatic payment plans set up. Veterans consistently compare unfavorably to commercial financial services (credit cards, auto loans, mortgages) where online balance tracking is standard and expected.

---

### Finding 3: Multiple sequential debt letters with incomplete information cause severe stress and anxiety about financial impact

**MAJOR SEVERITY** - Affects 7 out of 11 participants (64%)

Veterans receive a first letter announcing an overpayment debt without explaining the repayment mechanism or timeline. Subsequent letters with payment details arrive weeks later. During this gap, Veterans experience acute anxiety catastrophizing about consequences ("Am I not gonna get paid one month?"). This multi-letter sequence with information gaps creates unnecessary emotional burden during an already stressful situation.

**Evidence:**

**P16:**
> "I think I got a letter saying I was overpaid, and they'd have to get it back, and I was like, what does that mean? Am I not gonna get paid one month? Like, what… what is going on? And so I called, and the person I spoke to said, no, that's not what's gonna happen. You're gonna get another letter that's gonna say how the repayment works."

**P16:**
> "I spoke to somebody, it was like, I was less stressful, because I was waiting for, am I just not going to get a payment? Like, what's… what's happening here? But that definitely calmed, and then once I got the letter saying they were just gonna do a deduction, that was fine."

**P16:**
> "This will not stop… start prior… without your notification, you know, or so many days prior to it starting, you'll be notified, so you're not just waiting on, -oh, what's about to happen when."

**P17:**
> "Yeah, and they took a long time to get back to me, so now I'm kind of like, okay, anything that I had fresh on my mind is all… Out the window. This was back in May of last year… Quite some time ago."

**P02:**
> "I think there's one… one letter that goes out every year. It just says that you're gonna be making a payment, but it doesn't, to my recollection, doesn't indicate how much or for how long this payment will be."

**Impact:**
- Creates acute anxiety and financial stress during waiting period between letters
- Veterans catastrophize about immediate consequences without information
- Forces unnecessary phone calls to VA for clarification, adding administrative burden
- Particularly severe for Veterans experiencing financial hardship who need immediate clarity
- Destroys trust in VA communication systems

**Context:**
Occurs at the beginning of the debt collection process. Most severely affects Veterans who receive first letter without context or timeline, then must wait weeks for details about repayment mechanism and amount.

---

### Finding 4: Veterans prefer online self-service over phone calls for setting up and managing payment plans

**MAJOR SEVERITY** - Affects 6 out of 11 participants (55%)

Veterans expect digital self-service capabilities consistent with commercial financial services (credit cards, mortgages, auto loans). The current phone-based process for payment plan setup and modification creates unnecessary friction, delays, and accessibility barriers. Veterans want immediate online control over their payment arrangements.

**Evidence:**

**P06:**
> "I don't know, maybe if there was a website I could go to instead of having to call? Definitely want to figure out how to do things online or, you know, maybe with, like, an app. I don't mind calling, but sometimes it's easier for me to just use my app or go on the phone."

**P07:**
> "It'd probably make it easier where I didn't have to, you know, maybe have something internally where I could put my information in there, you know, I didn't have to, you know, they… instead of me go through the phone, maybe I could put my information in, you know... just feel like a financial assistant, or something like that, online and everything."

**P13:**
> "I think it was a loan or something, I think I got a loan, I was on payment plan for a loan when I was working. I think I applied, talked to them in person, or over the phone, I don't recall. Two thoughts for the VA that I think would be super easy. That's really great. If I want to do the full lump sum, and then on a… maybe my debit card, that's great, or you can have the option to reduce it from my disability, check, that would be great. Or, I mean, the phone is great, too, I just think… Some people don't want to talk to other people, and they just want to set it up."

**P03:**
> "I have everything in my life kind of on auto-pay, and it's all about efficiency, and I'd rather just… Have it set up, and auto-pay, and I keep track of, you know, my credit card app I look at every two days, give or take."

**Impact:**
- Phone requirement creates barriers for Veterans with social anxiety, hearing difficulties, or work schedule conflicts
- Adds unnecessary delays when Veterans want immediate resolution
- Creates accessibility issues for Veterans who cannot easily make phone calls
- Increases administrative burden on VA staff handling routine payment plan requests
- Particularly impacts younger, digital-native Veterans and those with cognitive disabilities who struggle with phone conversations

**Context:**
Affects Veterans setting up initial payment plans, modifying payment amounts, or requesting hardship consideration. Most strongly expressed by participants under age 44 and those comparing to commercial digital financial experiences.

---

### Finding 5: Critical payment information is buried behind multiple clicks rather than being front-facing

**MAJOR SEVERITY** - Affects 5 out of 11 participants (45%)

Essential information (file number, debt amount, reason for overpayment, payment options) that Veterans need to verify their identity and understand their obligation is hidden behind multiple clicks. This poor information hierarchy forces Veterans to hunt for critical details, increasing cognitive load and violating usability best practices.

**Evidence:**

**P02:**
> "all this data looks like it's all there, but it's not on the front pa… front-facing page, which… I would probably want to see on the front page. Why am I clicking deeper into it? The only click… second click should be to, like, okay, how do I pay this? Not… Click more, click deeper, just show me everything on the front page."

**P02:**
> "This, this, this to make sure that, like, yep, this is what we're talking about, here's my file number. My name is correct. This should be on the front line, not on the buried, two clicks deep."

**P04:**
> "It's important to me to know, okay, what's the outstanding balance? What is the term for it? What are my options for paying it? Do I have options? And if I do have options, how easy is it for me to set up that? Whichever option I pick. And it, it, you know, it has to be electronic, too. The other way of doing things is so antiquated that it's kind of difficult to do nowadays."

**Impact:**
- Increases cognitive load as Veterans search for essential information
- Creates frustration and distrust when basic details require excessive clicking
- Risks Veterans missing important information buried in navigation
- Particularly problematic for Veterans with cognitive disabilities
- Violates information scent and progressive disclosure usability principles
- Fails to meet commercial financial dashboard standards Veterans expect

**Context:**
Affects Veterans navigating VA.gov debt pages and trying to quickly understand what they owe and how to pay. Desktop users provided more detailed critiques, but issue affects all device types and user segments.

---

### Finding 6: Veterans need clear receipts and payment confirmations to verify payments were applied correctly

**MAJOR SEVERITY** - Affects 4 out of 11 participants (36%) explicitly, likely valuable for all users

Without clear payment confirmations, email receipts, and downloadable records, Veterans cannot verify that their payment was received, processed, and applied to the correct debt. This absence of confirmation creates ongoing anxiety and distrust, especially given the existing inability to track balances (Finding 2).

**Evidence:**

**P02:**
> "Like a receipt, a downloadable PDF receipt? It's good, it confirms, and I've got a receipt for payment. Shows the remaining balance. Up again, as just a final confirmation of what was the purpose of the debt in the first place."

**P07:**
> "Like I say, just GEICO, it's just, it's just more seamless and everything. I just got an email saying, you know, thank you for receiving your payment and all that. It's just easy and everything, you know, it's a notification that it's taking it out."

**P13:**
> "Yeah. I also can appreciate, just the ability to go back and view that it's been cleared. I'm assuming that this is gonna… I'm gonna go back and it's gonna say that I owe nothing."

**Impact:**
- Cannot verify payment was received and processed correctly
- Cannot confirm payment was applied to the correct debt
- Cannot track new balance after payment
- Cannot verify debt is fully paid off
- Creates ongoing anxiety and distrust in the payment system
- Lacks paper trail for tax purposes or financial records
- Particularly problematic for automatic deductions where Veterans lack proactive visibility

**Context:**
Applies to both one-time payments and automatic deductions. Veterans consistently compare to commercial payment experiences (utilities, insurance, credit cards, GEICO) where email confirmations and receipts are automatic, immediate, and standard.

---

### Finding 7: VA system processing delays create overpayments but collection is aggressive, creating sense of injustice

**CRITICAL SEVERITY (for affected Veterans)** - Affects 4 out of 11 participants (36%)

When VA's slow processing of benefits changes creates overpayments, yet collection is prompt and aggressive, Veterans feel a profound sense of injustice and betrayal. They perceive being punished for administrative failures outside their control. This severely damages trust in the VA as an institution committed to supporting Veterans.

**Evidence:**

**P04:**
> "they're, they're awfully prompt in collecting a debt, but not so prompt in processing the paperwork that would have avoided the debt, so I felt kind of… in a way, it's kind of a betrayal, because it's really simple action. It's just annoying, it's just one more thing I gotta… think about. It's not my problem, that's your problem. Why do I have to pay back an overpayment?"

**P06:**
> "I don't know, I feel like the VA, they're so slow sometimes, so I don't think they purposely let you… build it up, but I've heard from many veterans, and including myself, with certain things where… They'll take their time and then hit you with a bill."

**P07:**
> "I had lost my job recently, I got laid off, so I was just trying to, like, you know, trying to, lower it, you know, have it where it's more affordable."

**Impact:**
- Creates profound sense of injustice when Veterans are blamed for VA's operational failures
- Severely damages trust in VA as an institution
- Veterans feel betrayed: "It's not my problem, that's your problem"
- Compounds financial stress when Veterans are already experiencing hardship
- Undermines willingness to engage with VA services
- Creates resentment that affects broader VA relationship

**Context:**
Common scenarios include disability rating changes processed slowly (creating months of overpayment), GI Bill paperwork delays leading to excess tuition payments, and administrative errors in benefits calculations. Particularly severe for Veterans experiencing financial hardship who cannot afford unexpected debt repayment.

---

## Additional Insights

### Veterans appreciate automatic payment deductions for simplicity

6 out of 11 participants (55%) expressed preference for automatic deductions because they reduce mental burden and eliminate risk of missed payments. This should remain the default option, but with critical improvements to transparency and online management capabilities.

**P03:**
> "I have everything in my life kind of on auto-pay, and it's all about efficiency, and I'd rather just… Have it set up, and auto-pay, and I keep track of, you know, my credit card app I look at every two days, give or take."

**P11:**
> "I mean, I think it's just easier. I prefer not to, like… I was like, well, if you're just gonna… like, it just, I guess, negates me having to, like, remember to go back in and make the payments and stuff, if it's just like, hey, just take it… out of a deduction of one of my monthly, you know, disability payments and stuff, like, then it's kind of a one and done, and I don't have to really think about it."

### Veterans want flexibility to increase payment amounts to pay off faster

3 out of 11 participants (27%) wanted to pay more than the minimum to accelerate payoff but couldn't do so easily. Online payment management should enable Veterans to increase automatic payment amounts or make additional lump sum payments without friction.

**P13:**
> "The only thing I actually would say I don't like about it is that I wanted to set up automatic payments for… maybe it was, like, $300 a month, but that's not an option. So anytime I want to go back and pay extra, I… I… it can't be done automatically. I have to remember to go back and pay it, and I don't really love that."

### Prototype design elements tested positively

P13 provided consistently positive feedback on the research prototype's visual hierarchy, clear options, and confirmation features. These design strengths should be preserved in final implementation.

**P13:**
> "I really appreciated the process, it was seamless, it was easy. My favorite part was just the 3 different options for financial help. I really always love seeing, like, different places highlighted, and the check mark. I just… it's very easy to read, without having to read."

### Pay.gov transition needs clearer communication

P02 didn't realize they were transitioning from VA.gov to Pay.gov, creating confusion about authorization and security. Clear transition messaging is needed: "You will now go to Pay.gov, a secure government payment system used by VA, to complete your payment. Your information will be transferred securely."

---

## Recommendations

### 1. Replace "overpayment balance" terminology with "Amount Due"
**Severity: CRITICAL | Effort: LOW | Timeline: 1-2 sprints**

- Change all instances of "overpayment balance" to "Amount Due" or "Outstanding Debt"
- Replace "Pay your balance" with "Pay your debt"
- Replace ambiguous "avoid collection" with specific consequences: "to prevent referral to Treasury or debt collection agencies"
- Add brief plain-language explanation of why debt occurred alongside the amount
- Use action-focused language throughout debt communications

**Supporting evidence:** Addresses confusion affecting 82% of participants who interpreted "overpayment" as VA's mistake but felt blamed for repayment.

### 2. Create Debt Management Dashboard in VA.gov
**Severity: CRITICAL | Effort: HIGH | Timeline: 3-6 months for MVP**

Build an authenticated Debt Management Dashboard that displays:
- Original overpayment amount and plain-language reason
- **Current balance remaining (updated in real-time)**
- Payment history with transaction dates and amounts
- Monthly deduction amount
- **Projected payoff date**
- Option to modify payment amount or pay lump sum online
- Downloadable statements (monthly and annual)
- Link to request hardship waiver or payment plan modification

Integrate with existing VA.gov profile and My VA sections. Model after commercial financial dashboards (Chase, Capital One) that prioritize account balance and payment actions.

**Supporting evidence:** Addresses critical transparency gap affecting 73% of participants who cannot track their debt balance, payment history, or payoff date.

### 3. Consolidate debt notification into ONE comprehensive letter
**Severity: MAJOR | Effort: MEDIUM | Timeline: 2-3 months**

Eliminate the multi-letter sequence. Provide complete information in the first letter:

1. **What happened:** Clear plain-language explanation of overpayment and reason
2. **Amount owed:** Total debt prominently displayed
3. **Repayment options:** All options clearly presented (automatic deduction, online payment, payment plan, hardship waiver)
4. **Default plan:** "If you don't respond within 30 days, we will automatically deduct $X per month starting [SPECIFIC DATE]"
5. **Timeline:** Specific dates for when deductions start and estimated payoff date
6. **How to change:** Phone number and VA.gov URL to modify payment amount or discuss hardship
7. **Online access:** Direct link to VA.gov debt dashboard for real-time tracking

**Supporting evidence:** Reduces severe stress affecting 64% of participants who experienced acute anxiety during the gap between incomplete letters.

### 4. Build online payment plan setup and management tool
**Severity: MAJOR | Effort: HIGH | Timeline: 4-6 months**

Develop self-service tool in VA.gov allowing Veterans to:
- Choose automatic deduction amount (with min/max based on debt and income)
- Select start date for payments
- Opt for lump sum payment via debit/credit card or bank account
- Request hardship waiver with online form submission
- **Modify existing payment plan amount without calling**
- View real-time confirmation of changes
- Download payment plan agreement

Maintain phone option for Veterans who prefer it, but make digital the primary path.

**Supporting evidence:** Addresses preference of 55% of participants who want online self-service instead of phone calls for payment plan management.

### 5. Redesign debt detail page information architecture
**Severity: MAJOR | Effort: MEDIUM | Timeline: 2-3 months**

Front-load essential information above the fold:
- Veteran's name and file number (for verification)
- Debt type and brief plain-language reason
- **Amount due (prominently displayed)**
- Last payment date and amount (if applicable)
- Payment due date (if applicable)
- Primary action button: "Pay Now" or "Manage Payment Plan"

Below the fold:
- Payment history summary with link to full history
- Detailed explanation of overpayment reason
- Contact information and help resources

Apply progressive disclosure for secondary details. Model after commercial financial dashboards.

**Supporting evidence:** Reduces cognitive load for 45% of participants who criticized excessive clicking to find critical information.

### 6. Implement comprehensive confirmation and receipt system
**Severity: MAJOR | Effort: MEDIUM | Timeline: 2-3 months**

**For one-time payments:**
- Immediate on-screen confirmation with transaction ID
- Downloadable PDF receipt with VA letterhead (date, amount, payment method, confirmation number, remaining balance)
- Email confirmation within 5 minutes with receipt attached
- Receipt accessible in VA.gov payment history

**For automatic deductions:**
- Email notification 2 days before deduction: "Your $X payment will be deducted on [DATE]"
- Email confirmation within 24 hours after deduction: "Your $X payment was processed on [DATE]. Remaining balance: $X"
- Monthly statement emailed showing payment activity and current balance

**All confirmations include:**
- What debt was paid (type and reason)
- Amount paid and date
- Remaining balance or "Paid in Full" status
- Projected payoff date (if balance remains)
- Transaction/confirmation ID
- Link to view full payment history in VA.gov

**Supporting evidence:** Builds trust for 36% who explicitly need payment verification, and addresses distrust from 73% who cannot currently track balances.

### 7. Develop VA accountability measures for system-caused debts
**Severity: CRITICAL (for fairness) | Effort: HIGH | Timeline: 6-12 months**

Implement policy changes:

1. **Automatic waiver review:** When overpayment resulted from VA processing delays >90 days, automatically review for administrative waiver before initiating collection

2. **Transparent attribution:** Include in all debt notices:
   - Timeline showing when forms were submitted vs. processed
   - Clear attribution if VA processing contributed to overpayment
   - Acknowledgment of VA's role

3. **Generous hardship provisions for VA-caused overpayments:**
   - Extended repayment terms (up to 5 years) with no questions asked
   - Automatic approval for reduced payment amounts
   - No referral to collections or Treasury offset for first 12 months

4. **Process improvements to prevent future issues:**
   - Alert Veterans when processing is delayed beyond normal timeframes
   - Stop future payments immediately when status change is detected (don't wait for full processing)
   - Proactive communication about potential overpayment before it accumulates

5. **Empathetic communication:**
   - Acknowledge VA's role in any processing delays
   - Use language that doesn't blame Veterans
   - Lead with "We're here to help you resolve this" tone, not collection agency approach

**Supporting evidence:** Addresses profound sense of injustice affecting 36% of participants who feel betrayed by being blamed for VA's operational failures.

---

## Product User and Business Outcomes

### Desired User Outcome 
This research supports our desired user outcome by identifying critical barriers preventing Veterans from understanding, trusting, and successfully completing debt payments. The findings reveal that Veterans need:

- **Transparency:** Real-time visibility into debt balance and payment progress (like commercial banking)
- **Clarity:** Plain language replacing confusing "overpayment" terminology
- **Control:** Online self-service for payment management without phone calls
- **Confidence:** Receipts and confirmations to verify payments were applied correctly
- **Fairness:** Recognition of VA's role when system delays create overpayments

Addressing these needs will enable Veterans to manage VA debts with the same ease and confidence they experience with credit cards, mortgages, and other consumer financial services.

### Desired Business Outcome
This research supports our desired business outcome by:

- **Reducing administrative burden:** Online self-service will decrease call volume to Debt Management Center by an estimated 25% for routine payment plan inquiries
- **Increasing payment completion:** Clear information architecture and streamlined flow will reduce drop-off and increase on-time payments
- **Improving trust:** Transparency and accountability measures will rebuild Veteran trust in VA financial systems, improving engagement across all VA services
- **Preventing escalation:** Early clarity and self-service options will reduce need for escalated hardship cases and aggressive collection actions

The Pay.gov integration provides the foundation for these improvements, but must be combined with transparency, terminology changes, and self-service capabilities to achieve full desired outcomes.

## Key Performance Indicators

### KPI 1: Reduce call volume to Debt Management Center
This research supports measurement of this KPI by identifying that 55% of participants prefer online self-service over phone calls for payment plan setup and management. The Debt Management Dashboard and online payment plan tool (Recommendations 2 and 4) should reduce routine inquiry calls by 25% within 6 months of launch.

**Measurement:** Track monthly call volume for payment plan inquiries before and after dashboard launch.

### KPI 2: Increase payment completion rate
This research supports measurement of this KPI by identifying critical barriers (confusing terminology, hidden information, lack of tracking) that cause drop-off. Implementing Recommendations 1, 2, and 5 should increase payment completion rate by 15-25% by removing friction points.

**Measurement:** Track percentage of Veterans who initiate payment flow and successfully complete transaction.

### KPI 3: Decrease time from debt notification to payment setup
This research supports measurement of this KPI by revealing that the multi-letter sequence (Finding 3) and lack of online self-service (Finding 4) create delays of 2-3 weeks. Consolidating into one comprehensive letter and enabling online setup should reduce this timeline to under 7 days.

**Measurement:** Track days between first debt notification letter and first payment/plan setup.

### KPI 4: Increase Veteran confidence in understanding debt details
This research supports measurement of this KPI by identifying that 82% struggle with terminology and 73% cannot track balances. Post-implementation surveys should show increased confidence scores after terminology changes and dashboard launch.

**Measurement:** Add survey question to post-payment flow: "How confident are you that you understand your debt and payment options?" (1-5 scale)

## Next Steps

### Immediate (Sprint-level - Weeks 1-4)
- [ ] Audit all VA.gov debt-related content for "overpayment balance" and confusing terminology
- [ ] Design clear VA.gov → Pay.gov transition messaging and security reassurance
- [ ] Create wireframes for front-loaded information architecture on debt detail pages
- [ ] Begin policy discussions on VA accountability measures with stakeholders

### Short-term (2-3 months)
- [ ] Implement terminology changes across all debt communications
- [ ] Redesign debt detail page with critical information above the fold
- [ ] Consolidate debt notification letters into single comprehensive format
- [ ] Implement email confirmation system for payments
- [ ] Create PDF receipt generation functionality

### Medium-term (3-6 months)
- [ ] Build MVP Debt Management Dashboard in VA.gov with real-time balance tracking
- [ ] Develop online payment plan setup tool with self-service modification
- [ ] Integrate payment history and downloadable statements
- [ ] Launch email notification system for automatic deductions

### Long-term (6-12 months)
- [ ] Implement VA accountability policy changes for system-caused debts
- [ ] Explore VA mobile app integration for debt management
- [ ] Add payment flexibility features (increase amounts, lump sum additions)
- [ ] Conduct follow-up usability testing on implemented changes
- [ ] Research mobile-specific debt management needs with mobile-only users

## Further research needed

### Mobile-specific debt management needs
Only 3 out of 11 participants (27%) used mobile devices during testing. A focused mobile study (diary study with Veterans using mobile exclusively) would reveal mobile-specific pain points, app preferences, and accessibility considerations not fully captured in this primarily desktop-based research.

### Complex debt scenarios requiring verification
This study focused on Veterans with relatively straightforward overpayment debts. Further research is needed on complex scenarios such as:
- Reserve component members transitioning between reserve pay and VA compensation
- Veterans with multiple simultaneous debts across different benefit types
- Situations requiring detailed verification and dispute of amounts

### Non-English speaking Veterans
All participants conducted sessions in English. Research with non-English speaking Veterans would reveal additional language barriers, translation quality issues, and cultural considerations in debt notification and payment processes.

### Underserved groups with lower education levels
All participants in this study had some college education or higher. Veterans with high school education or less may face different comprehension challenges with debt terminology, navigation, and decision-making that weren't fully captured.

## Appendix

### Research documents
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/product%20outline.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/research/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/research/conversation-guide.md)
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/research/transcripts)

### Tools used for Synthesis
- Manual thematic analysis of verbatim transcripts
- Systematic coding for recurring patterns and themes
- Frequency tracking across participants
- Severity assessment based on impact and prevalence
- Exact verbatim quote extraction for evidence

### Pages and applications used
- Figma prototype of VA.gov debt summary → details → resolve → Pay.gov hosted collection pages → confirmation flow
- [Desktop prototype](https://www.figma.com/proto/Yzumw4ai6JjkgS6jmB1PB5/Pay.gov-Hosted-Collections?node-id=40002346-61020)
- [Mobile prototype](https://www.figma.com/proto/Yzumw4ai6JjkgS6jmB1PB5/Pay.gov-Hosted-Collections?page-id=40002322%3A9464&node-id=40002553-19582)

### Secondary research
- Previous mobile debt portal research showing cross-site redirects create confusion and drop-off
- Past copay payment history usability studies demonstrating Veterans expect commercial-grade digital experiences
- Medallia feedback consistently describing current pay.va.gov redirect experience as confusing and painful

### Research participants 

#### Recruitment criteria

We recruited 15 Veterans with the goal of completing 10 sessions. We successfully completed 11 sessions with Veterans who:
- Have a debt balance from overpayments in the last year
- Are comfortable talking about their personal finances
- Can share their web browser window during the session
- Have a working microphone and Zoom capability

We specifically recruited for diversity across:
- Payment plan experience (aimed for 8+ with VA payment plans)
- Age (aimed for 8+ ages 55+, 5+ under 35)
- Income (aimed for 8+ with household income <$50K)
- Financial hardship (aimed for 6+ with current or past financial hardship)
- Cognitive disabilities (aimed for 5+)
- Rural location, people of color, women, LGBTQ+, immigrant origins

#### Demographics 

We talked to **11 participants.**

Audience segment:
* Veterans: 11
* Caregivers: 0
* Family members of a Veteran: 0

Gender:
* Male: 7
* Female: 4

LGBTQ+:
* Gay, lesbian, or bisexual: 2
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit, or another gender: 0

Devices used during study: 
* Desktop/Laptop: 8
* Tablet: 0
* Smartphone: 3
* Assistive Technology: 0

Age:
* 25-34: 2
* 35-44: 3
* 45-54: 1
* 55-64: 3
* 65+: 1
* Unknown: 1

Education:
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 4
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 8
* Rural: 3
* Unknown: 0

Race:
* White: 6
* Black: 2
* Hispanic: 0
* Biracial: 0
* Asian: 2
* Native: 1

Disability and Assistive Technology (AT):
* Cognitive: 2 (plus 1 declined to answer)
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* Speech Input Technology: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

Other important demographics:
* VA payment plan experience: 9 Yes, 2 No
* Financial hardship (current or past): 7 (64%)
* Annual household income <$50K: 5 (45%)
* Debt types: 6 Disability compensation/pension, 3 GI Bill overpayment, 1 Chapter 35 education, 1 other

#### Underserved groups we haven't talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Veterans over age 65 (only 1 participant, 9%)
* Hispanic/Latino Veterans (0 participants, 0%)
* Veterans with lower education levels (all participants had some college or higher)
* Veterans who use assistive technology (0 participants)
* Transgender or nonbinary Veterans (0 participants)

### Recruitment of underserved groups in Pay.gov Debt Payment Study

The table below shows recruitment targets and actual participation for underserved groups:

| Underserved Group | Target | Actual | Met Target? |
|-------------------|--------|--------|-------------|
| Veterans over 55 | 8 | 4 | ❌ No |
| Veterans under 35 | 5 | 2 | ❌ No |
| Household income <$50K | 8 | 5 | ❌ No |
| Financial hardship | 6 | 7 | ✅ Yes |
| Cognitive disabilities | 5 | 2-3 | ❌ No |
| People of color | 5 | 5 | ✅ Yes |
| Rural location | 5 | 3 | ❌ No |
| No college degree | 5 | 4 | ❌ No |
| Women | 2 | 4 | ✅ Yes |
| LGBTQ+ | 1 | 2 | ✅ Yes |
| Immigrant origins | 3 | Unknown | ❓ Unknown |
| **Total participants** | **10** | **11** | ✅ Yes |
