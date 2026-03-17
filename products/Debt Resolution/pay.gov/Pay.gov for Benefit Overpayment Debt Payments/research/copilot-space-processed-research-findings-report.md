---
title: "Pay.gov for Benefit Overpayment Debt Payments Research Findings"
product: "Pay.gov for Benefit Overpayment Debt Payments"
team: "Financial Management"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-03-23"
researchers:
  - "Risha Lee"
research_goals:
  - "Understand how Veterans currently make payments toward VA benefit overpayment debts"
  - "Identify what information Veterans need to make informed payment decisions"
  - "Evaluate how Veterans decide between payment options (lump sum, payment plan, automatic deduction)"
  - "Understand what makes payment experiences feel easy or difficult from Veterans' perspectives"
  - "Assess how Veterans track and verify their debt balances and payment progress"
methodology:
  - "Semi-structured interviews (N=11)"
devices_used:
    desktop: 7
    tablet: 0
    smartphone: 4
    assistive_technology: 0
participants_total: 11
demographics:
  veterans: 11
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 1
    "35-44": 3
    "45-54": 2
    "55-64": 2
    "65+": 1
    unknown: 2
  education:
    high_school: 1
    some_college: 2
    associates: 1
    bachelors: 3
    masters: 4
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
    cognitive: 4
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
  - "Veterans want self-service payment management but current system forces phone calls to make basic changes"
  - "Veterans cannot see detailed balance information or payment history despite VA having this data for accounting"
  - "First debt notifications create anxiety by lacking actionable information about timeline, amount, and process"
  - "Veterans who notice billing errors cannot report them proactively, leading to passive acceptance of accumulating debt"
  - "Veterans compare VA debt experience unfavorably to consumer banking, expecting similar self-service features"
  - "Educational overpayment notifications arrive months after issues occur, destroying context needed for dispute"
  - "Communication methods inconsistent within same household create perception of inequitable treatment"
recommendations:
  - "Implement self-service payment management in VA.gov debt portal allowing Veterans to change payment amount and schedule without calling"
  - "Surface detailed balance information and payment history in VA.gov debt portal, including month-by-month breakdown and payoff timeline"
  - "Consolidate debt notification into single letter providing all actionable information (amount, timeline, method, options)"
  - "Create visible 'Report a billing error' pathway in VA.gov benefit pages and payment communications"
  - "Standardize communication methods (physical mail to all or digital-only with Veteran choice)"
  - "Implement proactive education benefit overpayment checks within 30 days of enrollment certification"
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
  - "Real-time payment simulation (calculate payoff timeline based on custom amounts)"
  - "Consolidated debt dashboard showing all VA debts across benefit types"
  - "Mobile-first payment management for Veterans on-the-go"
further_research_needed:
  - "Mobile-specific debt management needs (diary study with Veterans using mobile exclusively)"
  - "Complex debt scenarios (reserve/VA compensation crossover) requiring detailed verification"
  - "Non-English speaking Veterans' understanding of debt notifications and payment options"
underserved_groups_missing:
  - "Veterans over 65 (only 1 participant, 9%)"
  - "Hispanic Veterans (0 participants, 0%)"
  - "Assistive technology users (0 participants using AT, 0%)"
  - "Veterans with hearing disabilities (0 participants, 0%)"
secondary_research:
  - "None"
synthesis_tools_used:
  - "Manual transcript analysis and coding"
  - "Cross-participant pattern identification"
  - "Frequency and severity assessment"
---

# Pay.gov for Benefit Overpayment Debt Payments Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), Pay.gov for Benefit Overpayment Debt Payments, Financial Management**

**Date:** March 23, 2026

**Contacts:** Risha Lee

**Jump to:**
- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Product User and Business Outcomes](#product-user-and-business-outcomes)
- [Key Performance Indicators](#key-performance-indicators)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Appendix](#appendix)
- [Research participants](#research-participants)

## Research Goals

This research supports Veterans during **financial obligation management** moments in their journey—specifically when they owe money to VA due to benefit overpayments. These moments occur most commonly during:

- **Transition periods**: Moving between benefit types (active duty → reserve status, undergraduate → graduate school)
- **Life events**: Marriage, divorce, dependent status changes that affect benefit calculations
- **Educational pursuit**: Using GI Bill or Chapter 35 benefits with complex eligibility rules that may result in overpayments

### Key Moments This Research Supports

1. **Learning about debt**: Veterans discover they owe money to VA (often months after overpayment occurred)
2. **Understanding debt details**: Veterans need to verify what they owe, why they owe it, and how calculations were made
3. **Deciding how to pay**: Veterans choose between payment options based on their financial situation
4. **Managing ongoing payments**: Veterans track progress, adjust payment amounts, and verify payments are being processed correctly

### Intended Outcomes

**For Veterans:**
- Reduce time and effort to understand debt details from 30+ minutes (calling, waiting on hold, interpreting complex letters) to under 5 minutes through self-service tools
- Enable informed payment decisions without requiring phone calls
- Provide visibility into payment progress and remaining balance at any time

**For VA:**
- Reduce call volume to Debt Management Center by enabling self-service payment management
- Increase on-time payment rates by providing clear, actionable information upfront
- Improve Veteran trust through transparency in payment calculations and progress tracking

## Research Questions

* How do Veterans currently make payments toward VA benefit overpayment debts?
* What information do Veterans need to make informed payment decisions?
* How do Veterans decide between payment options (lump sum, payment plan, automatic deduction)?
* What makes payment experiences feel easy or difficult from Veterans' perspectives?
* How do Veterans track and verify their debt balances and payment progress?
* What are Veterans' mental models for managing financial obligations based on consumer banking experiences?
* How does VA debt payment experience compare to non-VA payment experiences (credit cards, loans, utilities)?

## Methodology

**Semi-structured interviews (N=11)**: Participants completed 60-75 minute remote moderated sessions via Zoom exploring their experiences making VA debt payments, comparing to non-VA payment experiences, and discussing payment plan setup processes. Sessions were conducted between March 2-17, 2026 and recorded with participant consent.

Interviews covered:
- Recent VA payment experiences and specific pain points
- Payment plan setup processes (both VA and non-VA) including decision-making factors
- Financial management approaches, tools used, and information needs
- Comparison experiences with consumer banking, auto loans, credit cards, and utilities
- What information participants need to feel confident in payment transactions

**Note**: This synthesis focuses on the **payment behaviors interview portion** of the research. Prototype usability testing findings (Pay.gov payment flow evaluation) will be documented in a separate report.

## Hypotheses and Conclusions

**Hypothesis:** Veterans prefer automatic deduction from benefits because it requires the least effort
  - **Definitely True**
  - Supporting evidence: 11 of 11 participants (100%) either chose or accepted automatic benefit deduction as their payment method. However, deeper analysis reveals this "preference" is driven by **lack of accessible alternatives** rather than true satisfaction. **P16**: "I didn't decide. That's just what they… dictated, I guess" (interview, 03-16-26). **P15**: "Anything on auto-pay? Feels easy to me, because I don't really have to think about it, I kind of just set it and forget it" (interview, 03-13-26). Yet when asked if they'd change payment amount if easy to do online, multiple participants (P16, P09) said yes—indicating they accept automatic deduction due to **process friction** (calling required) rather than **feature preference**.

**Hypothesis:** Veterans understand their debt details and payment terms from initial notifications
  - **Definitely False**
  - Supporting evidence: First debt notifications consistently failed to provide actionable information. **P16** described receiving a letter stating she was overpaid and "would have to pay it back" but providing "zero information on how or when," causing immediate fear: "Am I not gonna get paid one month?" (interview, 03-16-26). When she called the 800 number, the representative said "just wait, you should be getting a letter"—providing no immediate information but reducing her stress simply by human contact. A second letter arrived "a couple weeks" later with actual payment details. **P04** had similar experience: first letter announced debt, second letter weeks later explained terms (interview, 03-03-26). This two-stage communication creates unnecessary anxiety.

**Hypothesis:** Veterans who want to increase payments to pay off debt faster can easily do so
  - **Definitely False**
  - Supporting evidence: Zero participants (0/11, 0%) could change their payment amount through self-service online tools. **P16**: "like I said, just… if I could access and say… because I see the fact, like, when I log into the VA site, that I have a debt, and it's being repaid, but it's not… like, I can go change other things, so if I could do something on there to easily, if I wanted to, increase my monthly repayment, then that would be easier than having to call and do something" (interview, 03-16-26). She would prefer to pay more (~$24/month current deduction for ~$1,600-2,000 debt equals 5-7 years) but won't call to change it due to "long wait times," "callbacks," and sometimes getting "hung up on." **P09** has been paying since 1995 (~30 years) and wants to know his balance to potentially pay off in lump sum but cannot access this information online (interview, 03-10-26).

**Hypothesis:** Veterans can see their payment history and remaining balance in VA.gov
  - **Definitely False**
  - Supporting evidence: Multiple participants explicitly stated they cannot see detailed payment information. **P09**: "I can go into VA.gov [...] it doesn't tell me [...] what my balance is now, and, you know, that'd be nice to know" (interview, 03-10-26). He explained: "it does exist for their accounting purposes, it's just that they're not sharing it [...] if I give you my social security and I log in there into a secured account, then make that available to me" (interview, 03-10-26). **P02** wanted day-by-day accounting to verify reserve/VA compensation crossover deductions were accurate but stated: "I don't have access. It just says the amount I owe and when it started" (interview, 03-02-26). **P16** can see she has a debt and that "it's being repaid" but cannot see payment history, balance, or payoff timeline (interview, 03-16-26).

**Hypothesis:** Veterans prefer to resolve payment issues online rather than calling
  - **Likely True**
  - Supporting evidence: When describing non-VA payment experiences, all participants who mentioned preferences explicitly favored self-service online tools. **P06**: "Definitely want to figure out how to do things online or, you know, maybe with, like, an app. I don't mind calling, but sometimes it's easier for me to just use my app or go on the phone" (interview, 03-04-26). **P16** explained her experience calling VA: "Very often when I call the VA, it's… you get a call back, because there's wait times, or you're on hold for a while, or sometimes you call and you get hung up on, so that's fine. [...] I'd much rather not call if I don't have to" (interview, 03-16-26). When comparing to car loan experience, she noted: "with the banks or whomever, you can usually log in and just change your payment amount" (interview, 03-16-26).

## Key Findings

1. Veterans want self-service payment management but current system forces phone calls to make basic changes

2. Veterans cannot see detailed balance information or payment history despite VA having this data for accounting

3. First debt notifications create anxiety by lacking actionable information about timeline, amount, and process

4. Veterans who notice billing errors cannot report them proactively, leading to passive acceptance of accumulating debt

5. Veterans compare VA debt experience unfavorably to consumer banking, expecting similar self-service features

6. Educational overpayment notifications arrive months after issues occur, destroying context needed for dispute

7. Communication methods inconsistent within same household create perception of inequitable treatment

## Details of Findings

### Finding 1: Veterans want self-service payment management but current system forces phone calls to make basic changes

All 11 participants (100%) either chose or accepted automatic benefit deduction as their payment method. However, when participants wanted to change payment terms—most commonly to **increase payment amount to pay off debt faster**—they discovered they could not make these changes online and would need to call. Multiple participants chose not to call due to phone system barriers (long waits, callbacks, disconnections), resulting in **passive acceptance of default terms they would prefer to change**.

- _Supporting data: **P16**: "I mean, if they had said an easy way, like, you could log in if you'd like to change this amount, then I probably would increase the deduction. Just to get it over with, but it was… I mean, it's like I said, it was, like, $23 or $24 a month, and it's, like, $2,000 or something, or $1,600, so, like, that's gonna be a while, but… sure" (interview, 03-16-26). At current rate (~$24/month for ~$1,600-2,000 debt), payoff will take approximately 5-7 years._

- _Supporting data: **P16**: "like I said, just… if I could access and say… because I see the fact, like, when I log into the VA site, that I have a debt, and it's being repaid, but it's not… like, I can go change other things, so if I could do something on there to easily, if I wanted to, increase my monthly repayment, then that would be easier than having to call and do something" (interview, 03-16-26)._

- _Supporting data: **P09**: "I've been paying for this since 1995, and I want to know what my balance is, like, my overall amount that I owe the U.S. government, because maybe I could pay it off [...] in, like, one lump sum, if it's a small enough amount, maybe I can pay it off, and then I'll have a zero balance" (interview, 03-10-26). P09 has been making automatic payments for approximately 30 years but cannot see his current balance or payoff timeline online._

- _Supporting data: **P16** explained why she doesn't call to increase payment: "Very often when I call the VA, it's… you get a call back, because there's wait times, or you're on hold for a while, or sometimes you call and you get hung up on, so that's fine. [...] I'd much rather not call if I don't have to" (interview, 03-16-26). She has experience calling VA for multiple services (healthcare, CHAMP VA for family, GI Bill) and noted: "it just depends. Some are better than others, and some… It's a struggle to get to a person" (interview, 03-16-26)._

**Pattern**: 100% of participants (11/11) use automatic deduction. At least 2 participants (18%) explicitly stated they want to increase payment but won't call. Phone system barriers documented by 3 participants (27%). Pattern affects all participant types regardless of debt type or demographics.

**Impact**: **Critical**. Forces Veterans to accept payment terms they would prefer to change, extending debt payoff unnecessarily (P16: 5-7 years at $24/month when she'd prefer to pay more). Drives unnecessary call volume to Debt Management Center when Veterans have questions or want changes. Creates perception that VA systems lag behind consumer banking standards. Prevents Veterans from managing their finances according to their own cash flow preferences.

### Finding 2: Veterans cannot see detailed balance information or payment history despite VA having this data for accounting

Multiple participants explicitly requested access to detailed balance information, payment history, month-by-month breakdowns, and payoff timelines—all information that exists in VA accounting systems but is not surfaced to Veterans in VA.gov. Participants used language like "balance sheet," "ledger," "amortized rate," and "payment register" to describe what they expect to see based on consumer banking experiences.

- _Supporting data: **P09**: "basically, it states that I have a balance, right? Okay. It states that I have a balance owed back to the U.S. government, basically. And it… it states when that… when… it states how much was taken out way back when it first started. In my case, it was 1995, if you can believe it. 1995, it started… I started paying this, or they started taking money out. And. It'd be nice just to see a monthly-monthly, almost like an amortized, rate where you would see it less and less each month, and you would know how many more payments. I mean… But I don't have access to that. All it does at VA.gov is it states. I have X amount taken out, and when it was started" (interview, 03-10-26)._

- _Supporting data: **P09**: "it does exist for their accounting purposes, it's just that they're not sharing it [...] Put it… if I give you my social security and I log in there into a secured account, then make that available to me. There's no secret, you're taking it out every month, just show me" (interview, 03-10-26)._

- _Supporting data: **P02**: "Logging in to see a balance sheet of how much I owe, what is the repayment plan, or resetting the payment plan every 12 months so that I can see how much Is going to be paid via the reduced compensation. [...] Based on the amount that was, like, balanced out" (interview, 03-02-26). She cannot see which specific dates VA is using for deduction calculations, so cannot verify against her military records: "I can't access that. I can't, like, see it. And that would be good, because I've been paying it for years" (interview, 03-02-26)._

- _Supporting data: **P09** when asked why balance visibility matters: "Well, it's just like anything. I mean, if you owe, don't you want to kind of know your balance? I mean, they're taking it out monthly. Even, like, in a bank account, right? Even when you're repaying a bank, you can see how much you paid, you know, what the interest was, what the principle was, what's the balance? It's a simple system to do it. Somebody has the records of it. It's pretty simple to do. To add that change or make that change. And why not do it on VA.gov? I mean, it's the central system. For all veterans" (interview, 03-10-26)._

**Pattern**: At least 3 participants (27%) explicitly requested detailed balance/payment visibility. Pattern appears across different debt types (disability compensation, reserve crossover, education) and demographics. Participants with financial sophistication (P15: multiple credit cards and loans; P09: long-term debt management) and those seeking verification (P02: reserve accounting) all express same need.

**Impact**: **Major**. Prevents Veterans from making informed decisions about paying off debt early or adjusting payment amounts. Creates inability to verify VA calculations are correct, which matters especially for complex scenarios like reserve/VA compensation crossover (P02) or long-term debts (P09: 30 years). Forces Veterans to "take VA's word for it" without ability to audit their own account. Generates unnecessary calls when Veterans want balance information for financial planning. Violates Veterans' reasonable expectation based on consumer banking that they can see their own financial information.

### Finding 3: First debt notifications create anxiety by lacking actionable information about timeline, amount, and process

Multiple participants described receiving initial debt notifications that stated they were overpaid and would need to repay but provided **no information about: (1) how much per month, (2) when deductions would start, (3) how payment would be collected, or (4) timeline for resolution**. This lack of actionable information created immediate anxiety, with participants fearing they might lose an entire month's benefit payment without warning.

- _Supporting data: **P16**: "I think I got a letter saying I was overpaid, and they'd have to get it back, and I was like, what does that mean? Am I not gonna get paid one month? Like, what… what is going on? And so I called the 800 number, and they were like, just wait, you should be getting a letter, and so I waited for the letter, and that's when I got a more detailed one" (interview, 03-16-26)._

- _Supporting data: **P16**: "Well, once I spoke to somebody, it was like, I was less stressful, because I was waiting for, am I just not going to get a payment? Like, what's… what's happening here?" (interview, 03-16-26). She estimated "a couple weeks at least" between first letter and second letter with actual details._

- _Supporting data: **P16** identified what would have made experience easier: "Not send the first letter, that just gives you no information, except for the fact they're gonna pay it back at some point, with zero information on how or when. [...] Yeah, like I said, it just definitely would have been good to say. This will not stop… start prior… without your notification, you know, or so many days prior to it starting, you'll be notified, so you're not just waiting on, -oh, what's about to happen" (interview, 03-16-26)._

- _Supporting data: **P04**: "So here's… here's also a part of the VA process that is really disjointed. So… I get one letter that is like a… you get them through the VA if you're filing for disability or things like that. It's kind of like what's considered an award letter. So that letter comes first, and that comes from the regional… regional office. And what that letter says, we have made a decision on your claim, blah blah blah blah. And it says, you have incurred a debt. And then two weeks later is when that debt notification, you know, here's… what do you want to do with it?" (interview, 03-03-26)._

**Pattern**: At least 3 participants (27%) explicitly described stress from vague initial notifications. Two-stage notification process (first letter vague, second letter weeks later with details) documented by 2 participants (18%). Pattern appears to affect all debt types.

**Impact**: **Major**. Creates unnecessary anxiety and stress during already difficult moment (discovering you owe money). Forces Veterans to call simply to get basic information that should be in initial letter, driving up call volume unnecessarily. Two-week+ gap between notifications leaves Veterans in uncertain state, unable to plan or prepare. Violates basic communication principle: tell people what action will be taken, when, and how.

### Finding 4: Veterans who notice billing errors cannot report them proactively, leading to passive acceptance of accumulating debt

When Veterans notice potential errors in their benefit calculations **before receiving official debt notification**, they do not know how to contact VA to correct the error proactively. They perceive contacting VA as a "logistical nightmare" with unclear pathways, so they wait passively for official notification while debt accumulates.

- _Supporting data: **P15**: "I was actually kind of expecting it, because I realized that there were certain things that, like, were gonna be different with, relation to my income. And so, and the VA, well, for whatever reason, didn't have the right income for me for my military service, and so the disability, compensation that I was receiving was not commensurate with what my income was. [...] So I already kind of expected, like, okay, I know at some point I'm going to be requested to overpay this, because they… Like, they have… they're using the wrong facts to determine how much I should be getting" (interview, 03-13-26)._

- _Supporting data: **P15**: "like, my… LES. income that was being used seemed... it just seemed higher than, like, what I was getting. And so I was like, well, this doesn't seem right, but then I also was like, I don't really know how to contact people at the VA, like, that could really fix it, because it just seemed like a really logistical, like, nightmare, to like, find somebody..." (interview, 03-13-26)._

- _Supporting data: **P15**: "because I kind of knew that this is, like, high, like, I was already, like, setting that money aside in the expectation that's gonna be eventually requested to be paid back" (interview, 03-13-26). Time between noticing error and receiving notification: "Probably, like... Probably 2 months?" (interview, 03-13-26)._

**Pattern**: At least 2 participants (18%) explicitly described noticing errors but not knowing how to report proactively. Time gaps documented: P15: 2 months. Pattern suggests Veterans feel: (1) unclear who to contact, (2) expect it will be "logistical nightmare," (3) passively prepare (set money aside) rather than attempting proactive contact.

**Impact**: **Major**. Allows debt to accumulate when Veterans are aware of error and willing to address it early. Creates perception that VA systems are one-way (VA can deduct but Veteran can't initiate correction). Violates principle of good faith—Veterans who notice and want to report errors should have clear pathway to do so. P15's 2-month delay = 2 additional months of overpayment that could have been avoided.

### Finding 5: Veterans compare VA debt experience unfavorably to consumer banking, expecting similar self-service features

All participants who discussed non-VA payment experiences referenced consumer banking tools (car loans, credit cards, mortgages) as comparison standard. They expect: (1) ability to log in and see balance/payment history, (2) ability to change payment amount/schedule online without calling, (3) ability to align payment dates with payday, (4) confirmation notifications after each transaction, and (5) no-penalty prepayment options.

- _Supporting data: **P16**: "Oh, on the VA, at least I'm not paying interest, which is a plus. But, I mean, it's not difficult, again, with the banks or whomever, you can usually log in and just change your payment amount" (interview, 03-16-26). She elaborated: "like I said, just the… the ease of access, just because I can log in and... [...] Again, with the car notes, I was able to… initially set it up at the lowest amount, and then, you know, through the portal, go in and increase it, or make additional payments above the monthly, without having to, you know, call somebody" (interview, 03-16-26)._

- _Supporting data: **P15**: "I went through a credit union, and then I just did an ACH transfer payment for the ACH... like, ACH payment for the loan. [...] and I... can modify and view my loan through the credit union's, like, portal" (interview, 03-13-26)._

- _Supporting data: **P03**: "I use Chase, so, like, I have a Southwest card. [...] I think perfect, and it shows what day you can send it on. So, if I have a bill due, say, the 18th, I want it to arrive by the 17th, so then if I hit, like, the 15th, you know, it'll show me the 15th... Like, it'll give me the schedule of if I was to send it this day, it'll show up on this day, and so... Painless, is what I like" (interview, 03-03-26)._

- _Supporting data: **P07**: "My GEICO and everything. So, GEICO, the first month, I'll take money out of my account every, the 18th each month and everything. certain, I think 10 o'clock or something like that. So, every 18… each month, at 10 o'clock a.m, it pulls it out automatically. You know, it's just… it just automatic pulls out and everything, and then you'll get an email saying, hey, we received your payment and everything" (interview, 03-05-26)._

**Pattern**: 100% of participants who discussed non-VA payment experiences (at least 6 participants, 55%) referenced consumer banking as comparison standard. Specific features mentioned: change payment amount online (P16, P15, P04), see balance/history (P09, P16), schedule payments (P03, P07), receive confirmations (P07), align with payday (P15, P03), no prepayment penalty (P16, P09).

**Impact**: **Major**. Creates perception that VA is behind commercial banking standards, affecting trust and satisfaction. Veterans are accustomed to self-service financial management in every other aspect of their lives but must call VA for basic changes. Gap between expectation and reality is particularly stark because VA **has the technical infrastructure** (Veterans can change other account settings online, as P16 noted) but hasn't applied it to debt management.

### Finding 6: Educational overpayment notifications arrive months after issues occur, destroying context needed for dispute

Veterans using GI Bill, Chapter 35, or Voc Rehab benefits receive overpayment notifications many months after the eligibility issue occurred. By the time notification arrives, Veterans have lost fresh memory of: (1) what they submitted, (2) what school told them about coverage, (3) what documentation they provided, and (4) details needed to effectively dispute.

- _Supporting data: **P13**: "I was very upset and flustered when I saw that there was a bill on my account, because For me, I'm 100% disabled, all my education benefits, all my education should be taken care of. So I was really upset that I didn't find out about it sooner. That was weird. It was, like, maybe... I could have obviously stopped after that first semester after realizing that I had accumulated a charge. I just didn't realize because the system was new, and, like, the sailfish is that... Well... Granted, I did know that they gave me a, like, a stipend, but, like." (interview, 03-12-26). She continued: "So it was, like, 2 or 3 semesters. So that… I forgot, actually, your question, now that I've been yapping so much, but I just… I wish the VA would have reached out and sent me a bill, or let me know, like, the school had let me know" (interview, 03-12-26)._

- _Supporting data: **P17**: "Yeah, so I filed my letter back on... let's see... This was back in May of last year. [...] Yeah. Quite some time ago. And then they said they sent me a letter dated May 15th, proposing to remove her from my award" (interview, 03-16-26). When asked impact of delay: "Yeah, and they took a long time to get back to me, so now I'm kind of like, okay, anything that I had fresh on my mind is all… Out the window" (interview, 03-16-26). P17 submitted dependent benefits request May 2025, received decision January 2026—8+ months later._

- _Supporting data: **P13**: "Like, a month, like, at the end of each semester, or whenever the… I don't exactly know when… the VA pays out… what's due, but, like, I think me keeping… Me staying abreast. Or letting me know if there is a charge? I don't look every month, because in my mind, there's no bill. I would have liked to be informed so that the following semesters I could stop using that service called Sailfish" (interview, 03-12-26)._

**Pattern**: Education debt delays documented: P13: 2-3 semesters (~4-9 months), P17: 8 months from submission to decision. Pattern specific to education benefits where three parties involved (Veteran, VA, school) and eligibility can be complex. At least 2 participants (18%) explicitly described losing context due to delays.

**Impact**: **Major**. Destroys Veterans' ability to effectively dispute decisions by creating too long a gap between action/submission and notification of issue. P13's case particularly clear: if notified after semester 1, she would have stopped using Sailfish and avoided semesters 2-3 accumulation. P17's 8-month delay meant she lost memory of what she submitted and why, making it impossible to gather supporting documentation.

### Finding 7: Communication methods inconsistent within same household create perception of inequitable treatment

When two Veterans in the same household have debts from the same underlying issue (e.g., dependent benefits), VA may send physical mail to one Veteran but email-only to the other Veteran. This inconsistency creates: (1) perception of inequitable treatment, (2) documentation gaps (the email-only Veteran must print their own copies), and (3) confusion about what communication method to expect.

- _Supporting data: **P17**: "So yeah, in my case, I never got anything in the mail. All of mine is only available for me to view online, where for my husband, they sent him stuff in the mail. [...] I don't know email-wise, because obviously I don't get his emails, but he got several correspondences through the mail regarding it, so I don't know how many emails he got first, or if he just got… he just… they just went straight to sending him stuff in the mail. But for me, they expect me to do everything online. If I want to view it, if I want to have a physical copy, I need to print it out on my end, which is rather frustrating" (interview, 03-16-26)._

- _Supporting data: **P17**: February 9th email stated: "you will also receive a letter from the Debt Management Center with the details of this information" but as of March 16th interview (5+ weeks later), she still hadn't received that promised physical letter (interview, 03-16-26)._

- _Supporting data: **P17** identified what would have made experience easier: "I mean, well, for one, if I actually got something in the mail that was a hard copy versus. just getting this" (interview, 03-16-26)._

**Pattern**: 1 participant (9%) explicitly documented inconsistent communication within household. While sample size is small for this specific finding, the **principle violation** is significant: same household, same debt issue, different communication methods with no clear logic.

**Impact**: **Moderate** (affects smaller percentage but high severity for those affected). Creates perception of unfair treatment between two Veterans in same family dealing with same issue. Forces Veteran receiving email-only to: (1) actively log in and click through multiple screens to find information, (2) print own copies if wanting paper documentation, (3) not receive promised physical letters. Documentation gap particularly problematic for complex policy decisions where Veteran may want to consult VSO or review carefully before responding.

## Additional Insights

**School certifying officials frequently misinform Veterans about benefit coverage, contributing to debt accumulation.** **P13** asked bookstore staff if school's "Sailfish" book rental program was covered by GI Bill book stipend. Staff told her "no, you should be fine" when in fact it created charges that accumulated over 2-3 semesters. She noted broader pattern: "A lot of times, though, what I have found when I was using Chapter 31, I can't, I get them confused, is that people are not up to date or informed about veteran benefits, so they give you... And then you're kind of, like, looking around, trying to figure out, like, okay, like, you don't know, and you should know, because you're at the bookstore. But if the school's person that's supposed to certify my benefits at my school, if they're, like, confused or, like, whatever the case is, then you kind of feel, like, a little lost" (interview, 03-12-26). This represents a **systemic training gap** across educational institutions that contributes to Veteran debt. While not directly fixable by VA digital services, it suggests need for: (1) clearer Veteran education for schools about benefit coverage, (2) proactive notification when charges post, (3) plain-language benefit coverage documentation Veterans can show school staff.

**One Veteran with extensive UX research participation (10+ years) praises VA.gov evolution but notes travel reimbursement remains on third-party site.** **P13**: "Over the years, honestly, there's been such great improvement over this system. When I came in, was it called eBenefits? It was awful. So I love how there's been just this collaborative, you know, Their, disability, applying. The only thing that I was, like, I'm surprised they haven't done yet is the travel, how you have to go to that other third's website, rather than, like, being able to put it in. Also, if you're... You know, if… once you check in, or if you're too late to check in, you no longer can do the travel benefits through your phone. So I wish that… but, you know, I… I'm sure you guys will get there" (interview, 03-12-26). This provides useful longitudinal perspective from someone who has seen VA digital evolution over 10+ years and recognizes significant progress while identifying remaining integration gap.

## Recommendations

### 1. Implement self-service payment management in VA.gov debt portal allowing Veterans to change payment amount and schedule without calling **(High Priority)**

**Supporting evidence**: This addresses Finding 1. All 11 participants (100%) use automatic benefit deduction, but at least 2 participants (18%) explicitly stated they want to increase payment amount but won't call due to phone system barriers. **P16** stated she would "probably increase the deduction" to "get it over with" but at $24/month for ~$1,600-2,000 debt, payoff takes 5-7 years (interview, 03-16-26). **P09** has paid since 1995 (~30 years) and wants to pay off in lump sum if balance is manageable but cannot see balance or make lump payment online (interview, 03-10-26).

**Implementation**: 
- Add "Manage payment plan" section to existing VA.gov debt portal
- Allow Veterans to:
  - Increase monthly payment amount (within reasonable limits to prevent over-deduction)
  - Make one-time additional payments toward balance
  - Change payment due date to align with their payday (if not using benefit offset)
  - See impact of changes (e.g., "If you increase to $100/month, debt will be paid off in 18 months instead of 67 months")
- Use VADS Form Components for input fields with clear labels
- Implement confirmation step using VADS Alert component showing: current plan, proposed plan, impact on payoff timeline
- Send confirmation email after changes saved
- Consider constraints: minimum payment amounts, maximum deduction from benefits (must leave livable benefit amount)

**Success criteria**: 
- At least 30% of Veterans with active payment plans access payment management feature within 3 months of launch
- At least 15% make a change (increase amount or make additional payment)
- Call volume to Debt Management Center for "change my payment amount" requests decreases by at least 25%
- Validate with 8-10 Veterans in usability testing that >80% can successfully increase payment amount without assistance

---

### 2. Surface detailed balance information and payment history in VA.gov debt portal, including month-by-month breakdown and payoff timeline **(High Priority)**

**Supporting evidence**: This addresses Finding 2. Multiple participants (at least 27%) explicitly requested balance visibility. **P09**: "I can go into VA.gov [...] it doesn't tell me [...] what my balance is now, and, you know, that'd be nice to know. [...] it does exist for their accounting purposes, it's just that they're not sharing it" (interview, 03-10-26). **P02** needs day-by-day breakdown of reserve/VA compensation crossover to verify accuracy (interview, 03-02-26). **P16** can see she has debt and it's "being repaid" but cannot see payment history, remaining balance, or payoff timeline (interview, 03-16-26).

**Implementation**:
- Create "Payment history" tab in VA.gov debt portal showing:
  - Current balance (remaining amount owed)
  - Original debt amount and date incurred
  - Total paid to date
  - Month-by-month payment history table with columns: Date, Amount Paid, Balance After Payment
  - Projected payoff date based on current payment rate
  - Payoff timeline calculator: "If you increase payment to $X, you'll pay off by [date]"
- For complex debts (reserve crossover, education multi-semester), show:
  - Line-item breakdown of charges (which dates/semesters contributed to debt)
  - Source of deduction calculation (e.g., "10 drill days in October 2025")
  - Link to dispute if Veteran believes calculation is incorrect
- Use VADS Table component for payment history
- Use VADS Card or Accordions for expandable details
- Implement "Download payment history (PDF)" and "Print for my records" buttons

**Success criteria**:
- At least 40% of Veterans with active debts view payment history within first 3 months of launch
- Call volume to Debt Management Center for "what's my balance?" queries decreases by at least 30%
- Validate with 6-8 Veterans that >90% can locate their current balance and understand payment history table
- Track downloads/prints as signal of utility

---

### 3. Consolidate debt notification into single letter providing all actionable information (amount, timeline, method, options) to eliminate stress from multi-stage communication **(High Priority)**

**Supporting evidence**: This addresses Finding 3. At least 27% of participants described stress from vague initial notifications. **P16**: first letter said she was overpaid and "would have to pay it back" with "zero information on how or when," causing immediate fear: "Am I not gonna get paid one month?" A second letter with details arrived "a couple weeks" later (interview, 03-16-26). **P04** described "really disjointed" process where award letter from regional office says "you have incurred a debt" but no repayment details, then 2-3 weeks later debt notification from Minneapolis Debt Management Center explains repayment (interview, 03-03-26).

**Implementation**:
- Redesign debt notification letter to include in first communication:
  - **Total amount owed** with clear explanation of how calculated
  - **Monthly deduction amount** if using benefit offset (default method)
  - **Start date** for deductions with statement: "Deductions will not begin before [date], giving you [X days] to respond"
  - **Payoff timeline** (e.g., "At $50/month, debt will be paid off in approximately 20 months")
  - **Options available**: (a) Accept automatic deduction, (b) Increase payment amount [link to manage online], (c) Request financial hardship review, (d) Dispute the debt
  - **Contact information** for questions with estimated wait times and best times to call
  - **Plain-language explanation** of why debt occurred (not just legal citation)
- Use VA plain language standards and VADS Alert/Warning component styles in letter design
- Coordinate between regional offices and Debt Management Center to send consolidated letter rather than two separate notifications
- Test letter with Veterans to ensure information architecture is clear

**Success criteria**:
- Call volume to Debt Management Center for "I got a letter, what does this mean?" inquiries decreases by at least 40%
- Veteran satisfaction scores for debt notification communication increase from baseline (establish baseline through post-notification survey)
- Validate with 8-10 Veterans that >85% can answer: (1) how much they owe, (2) when deductions start, (3) how long payoff will take, (4) what options they have—after reading only the letter
- Track decrease in "second letter" mailings (cost savings)

---

### 4. Create visible "Report a billing error" pathway in VA.gov benefit pages and payment communications to enable proactive error correction before debt accumulates **(Medium Priority)**

**Supporting evidence**: This addresses Finding 4. At least 18% of participants noticed errors but didn't know how to report proactively. **P15** noticed VA was using wrong income data from his LES for ~2 months before receiving official debt notification. He stated: "I don't really know how to contact people at the VA, like, that could really fix it, because it just seemed like a really logistical, like, nightmare, to like, find somebody..." Instead, he "set that money aside in the expectation that's gonna be eventually requested to be paid back" (interview, 03-13-26). P15's 2-month delay = 2 additional months of overpayment that could have been prevented.

**Implementation**:
- Add prominent "Report a billing error" or "I think my benefit amount is wrong" link to:
  - VA.gov benefit payment confirmation pages (where Veterans see current payment amounts)
  - Monthly benefit deposit notifications (eNotifications or email confirmations)
  - VA.gov account dashboard near payment/benefit sections
- Link should open simple form collecting:
  - What benefit payment seems incorrect
  - Why they believe it's incorrect (free text field with examples)
  - Supporting documentation upload option
  - Contact information for follow-up
- Route submissions to appropriate benefit administration office (VBA, VHA, VR&E) based on benefit type
- Send acknowledgment within 24 hours stating: "We received your report. You'll hear from us within [X business days]. In the meantime, continue receiving payments—we'll adjust if needed."
- Track reports and resolution time to identify systemic issues

**Success criteria**:
- At least 10% of Veterans who receive debt notifications report having tried to report error proactively
- Average time from error report to resolution decreases from current state to under 30 days
- Validate with 6-8 Veterans that >80% can find the "Report a billing error" pathway when they notice incorrect payment
- Measure decrease in accumulated debt amounts (if Veterans report early, less debt accumulates)

---

### 5. Standardize communication methods (physical mail to all or digital-only with Veteran choice) to eliminate perception of inequitable treatment **(Medium Priority)**

**Supporting evidence**: This addresses Finding 7. **P17** and her husband both had debts related to daughter's benefits. Husband received multiple physical letters; P17 received only emails directing her to log in. She stated: "for my husband, they sent him stuff in the mail. [...] But for me, they expect me to do everything online. If I want to view it, if I want to have a physical copy, I need to print it out on my end, which is rather frustrating" (interview, 03-16-26). Email promised physical letter that never arrived 5+ weeks later.

**Implementation**:
- Establish consistent communication policy for debt notifications:
  - **Option A**: Send physical mail to all Veterans (with electronic copy available online)
  - **Option B**: Allow Veterans to choose communication preference in VA.gov profile settings and honor that choice consistently
- If Option B (preference-based):
  - Add "Debt notification preferences" to VA.gov profile settings
  - Options: (1) Physical mail only, (2) Email only, (3) Both physical mail and email
  - Default to physical mail until preference set
  - Display current preference in confirmation messages
- Audit debt notification systems to identify why inconsistency occurs (different systems? Different administrators?)
- Coordinate across VBA regional offices and Debt Management Center to apply same rules
- If email notification sent, include key details IN the email body (not just "log in to see")

**Success criteria**:
- Zero instances of inconsistent communication methods within same household for same debt issue (track through Veteran complaints/feedback)
- If preference system implemented, at least 40% of Veterans set a preference within 6 months
- Veteran satisfaction scores for debt communication consistency increase from baseline
- Validate with 6-8 Veterans that >90% understand how to set communication preferences and trust VA will honor them

---

### 6. Implement proactive education benefit overpayment checks within 30 days of enrollment certification to catch issues before debt accumulates **(Medium Priority)**

**Supporting evidence**: This addresses Finding 6. **P13** accumulated debt over 2-3 semesters (~4-9 months) before notification. She stated: "I wish the VA would have reached out and sent me a bill, or let me know, like, the school had let me know [...] I would have liked to be informed so that the following semesters I could stop using that service called Sailfish" (interview, 03-12-26). **P17** waited 8 months from submission to decision, losing context: "anything that I had fresh on my mind is all… Out the window" (interview, 03-16-26).

**Implementation**:
- Create automated check 30 days after each semester enrollment certification:
  - Compare school-certified enrollment (credit hours, enrollment status) against what VA paid
  - Flag discrepancies between book stipend issued and enrollment certification
  - Cross-reference with other benefit sources (Chapter 35, Voc Rehab) to catch dual payment issues
- If discrepancy found, send proactive notification:
  - "We're reviewing your [Semester/Quarter] enrollment and may have questions about [specific issue]"
  - "No action needed now—we'll follow up within 15 days if adjustment required"
  - "If you believe enrollment information is incorrect, you can submit clarification here [link]"
- For complex cases (graduate school transitions, enrollment status changes), assign case worker to review within 45 days rather than automated decision
- Send monthly "Education benefits summary" showing: total paid this semester, remaining balance, any pending issues

**Success criteria**:
- Average time from enrollment certification to overpayment detection decreases from 4-9 months to under 45 days
- Percentage of education overpayments >$500 (indicating multi-semester accumulation) decreases by at least 40%
- Validate process with 6-8 school certifying officials that they can respond to VA questions within 45-day window
- Track Veteran satisfaction scores for education debt communication specifically

---

## Product User and Business Outcomes

### Desired User Outcome

**Enable Veterans to understand, verify, and manage their VA debts with the same ease and transparency they experience with consumer banking.**

This research directly supports this outcome by identifying specific barriers that prevent Veterans from achieving self-service debt management. Finding 1 revealed that Veterans cannot change payment amounts online, forcing 5-7 year payoff periods when they'd prefer faster resolution (P16). Finding 2 showed Veterans cannot see detailed balance information despite it existing in VA accounting systems (P09: 30 years of payments with no visibility). Finding 3 demonstrated that vague initial notifications create anxiety and force phone calls for basic information. 

Our recommendations to implement self-service payment management (Recommendation 1), surface detailed balance/history (Recommendation 2), and consolidate notification information (Recommendation 3) directly address these barriers. If implemented, we project:
- Time to understand debt details: decrease from 30+ minutes (calling, waiting, interpreting) to under 5 minutes (self-service)
- Confidence in debt accuracy: increase through ability to verify against own records
- Payment plan modifications: increase from near-zero to at least 15% of Veterans with active plans

### Desired Business Outcome

**Reduce administrative burden on Debt Management Center while improving on-time payment rates and Veteran trust through transparent, self-service tools.**

This research supports achievement of this goal by identifying the top drivers of DMC call volume: (1) "what's my balance?" (Finding 2), (2) "when will deductions start?" (Finding 3), (3) "can I change my payment amount?" (Finding 1), and (4) "is this calculation correct?" (Finding 4). Each of our recommendations addresses one of these call drivers.

Based on the frequency and severity of these issues:
- **Call volume reduction**: Recommendations 1, 2, and 3 together should reduce DMC call volume by 25-40% by enabling self-service for most common inquiries
- **On-time payment rates**: Clearer upfront communication (Recommendation 3) and reduced anxiety should decrease payment plan abandonment, increasing completion rates
- **Veteran trust**: Transparency through balance visibility (Recommendation 2) and proactive error reporting (Recommendation 4) should improve trust scores
- **Processing efficiency**: Proactive education checks (Recommendation 6) should reduce complex dispute cases by catching issues early

## Key Performance Indicators

### KPI 1: Call Volume to Debt Management Center

This research revealed specific categories of calls that could be eliminated through self-service features: balance inquiries (Finding 2), payment plan modification requests (Finding 1), and "what does my letter mean?" inquiries (Finding 3). We recommend establishing baseline call volume in these categories, then tracking whether Recommendations 1, 2, and 3 reduce call volume by target 25-40% within 6 months of implementation.

**Measurement approach**: Categorize DMC calls into: (1) balance/history inquiries, (2) payment plan changes, (3) notification clarification, (4) error reports, (5) dispute escalations, (6) other. Track volume by category monthly. Success = 25% reduction in categories 1-3 after recommendations implemented.

### KPI 2: Payment Plan Modification Rate

This research revealed that Veterans want to increase payment amounts but cannot do so easily (Finding 1). Currently, near-zero Veterans modify their payment plans because it requires calling. We recommend establishing baseline modification rate, then tracking whether Recommendation 1 (self-service payment management) increases modification rate to at least 15% of Veterans with active payment plans.

**Measurement approach**: Track percentage of Veterans with active payment plans who modify their plan (increase amount, make additional payment, change date) per month. Segment by: initial plan amount, debt size, Veteran demographics. Success = >15% of Veterans with plans modify within first 6 months.

### KPI 3: Time from Debt Notification to Payment Setup

This research identified 2-3 week gaps between first and second notification letters (Finding 3), plus additional time for Veterans to decide and contact VA. We recommend establishing baseline time from first notification to payment plan establishment, then tracking whether Recommendation 3 (consolidated notification) reduces this time to under 7 days.

**Measurement approach**: Calculate median days between: (1) first notification sent, (2) payment plan established (or debt paid). Segment by: debt type, notification method, debt amount. Success = median time decreases from estimated 14-21 days to under 7 days.

### KPI 4: Veteran Confidence in Debt Accuracy

This research revealed Veterans cannot verify debt calculations (Finding 2), leading to statements like "I have to take VA's word for it" (P09). We recommend establishing baseline confidence through post-notification survey ("How confident are you that your debt amount is accurate?"), then tracking whether Recommendation 2 (detailed balance visibility) increases confidence scores.

**Measurement approach**: Add 3-question survey to debt portal: (1) "How confident are you your debt amount is accurate?" (1-5 scale), (2) "Can you verify the debt calculation?" (yes/no), (3) "What information would help you feel more confident?" (free text). Track monthly. Success = average confidence increases from baseline to >4.0/5.0.

### KPI 5: Education Benefit Overpayment Amounts

This research revealed education overpayments accumulate over multiple semesters before Veterans are notified (Finding 6: P13 accumulated over 2-3 semesters). We recommend tracking: (1) average overpayment amount by debt type, (2) percentage of education debts >$500 (indicating multi-semester accumulation). Success = Recommendation 6 (proactive 30-day checks) decreases average education debt amount and percentage >$500.

**Measurement approach**: Segment overpayment debts by type (education vs. disability vs. other). For education debts, track: average amount, percentage >$500, time from enrollment to notification. Success = average amount decreases by 30%, percentage >$500 decreases by 40% after proactive checks implemented.

## Next Steps

| Action | Owner | Timeline | Success Criteria |
|--------|-------|----------|------------------|
| Present research findings to Debt Management Center leadership and VBA stakeholders | Risha Lee, UX Researcher | Week of March 25, 2026 | Meeting held; stakeholder questions answered; priorities discussed |
| Schedule design sprint to prototype self-service payment management (Recommendation 1) | Design Lead (TBD by Product Manager) | 2 weeks (April 8, 2026) | Prototype created showing: change payment amount, make additional payment, see payoff timeline |
| Request data access to VA debt accounting systems to determine feasibility of surfacing balance/payment history (Recommendation 2) | Product Manager (TBD) | 2 weeks (April 8, 2026) | Data availability confirmed; technical constraints documented; timeline for implementation estimated |
| Draft consolidated debt notification letter template (Recommendation 3) with content designer and plain language specialist | Content Designer (TBD) | 3 weeks (April 15, 2026) | Draft letter created with all required elements; reviewed by DMC and legal team |
| Conduct design validation testing with 8-10 Veterans using payment management prototype | Risha Lee, UX Researcher | 4 weeks (April 22, 2026) | Participants recruited; sessions completed; findings documented |
| Establish baseline KPI measurements (call volume, modification rate, time to setup, confidence scores) | Data Analyst (TBD) | 4 weeks (April 22, 2026) | Baseline data collected for all 5 KPIs; dashboard created for ongoing tracking |
| Create detailed design spec for balance visibility feature (Recommendation 2) including VADS components | Interaction Designer (TBD) | 6 weeks (May 6, 2026) | Design spec completed with: data sources, UI components, accessibility requirements, success metrics |
| Coordinate with regional offices and DMC to pilot consolidated notification letter (Recommendation 3) | Product Manager (TBD) | 8 weeks (May 20, 2026) | Pilot cohort identified (100-200 Veterans); timeline for pilot established; evaluation criteria defined |

## Further Research Needed

### Research Gaps

**Mobile-specific debt management needs**: This research included 4 participants using smartphones (36%), but mobile testing occurred in moderated sessions rather than real-world contexts. We need to understand how Veterans manage debts on mobile devices during daily routines (commuting, waiting at appointments, at work). Suggested approach: 2-week mobile diary study with 10-12 Veterans who primarily use smartphones for VA interactions. Ask them to log each time they attempt debt-related tasks on mobile and capture pain points, workarounds, and needs.

**Complex debt scenarios requiring detailed verification**: **P02** described complex reserve/VA compensation crossover where she needs day-by-day drill date visibility to verify deductions are accurate but cannot access this data. We didn't deeply explore how Veterans with complex debts (reserve crossover, dual benefits, retroactive adjustments) need to verify calculations. Suggested approach: Follow-up interviews with 8-10 Veterans with complex debt scenarios to understand verification needs and design appropriate detail views.

**Non-English speaking Veterans' understanding of debt notifications**: No participants in this study were non-English speakers. Language barriers may significantly affect ability to understand why debt occurred and what options are available. Suggested approach: Spanish-language usability testing with 6-8 Veterans using debt notification letters and payment management prototypes, with particular attention to translated financial terminology and cultural appropriateness.

**Optimal notification timing for education benefits**: **P13** suggested notification "at the end of each semester" while **P17** experienced 8-month delay. We need to determine optimal timing that balances: (1) giving VA time to process enrollment certifications, (2) catching errors before debt accumulates, (3) notifying while context is fresh. Suggested approach: Collaborative workshop with VBA education benefit administrators, school certifying officials, and Veterans to map ideal notification timeline with constraints.

**Payment plan decision-making for Veterans experiencing financial hardship**: 4 of 11 participants (36%) reported currently experiencing financial hardship, but interviews focused on payment management rather than payment plan setup decisions during hardship. We need deeper understanding of how Veterans in hardship evaluate payment options and what financial assistance resources they need. Suggested approach: Interviews with 10-12 Veterans currently experiencing financial hardship to explore decision-making process, trade-offs, and unmet needs when setting up payment plans.

### Underserved Groups Not Yet Studied

**Veterans over 65**: Only 1 of 11 participants (9%) was over 65, despite 65+ representing significant portion of VA benefit recipients. Older Veterans may have different technology comfort levels, accessibility needs (vision, hearing, cognitive), and financial management approaches. They may also have longer payment histories (like P09: paying since 1995) requiring special attention to historical data access.

**Hispanic Veterans**: Zero participants (0%) identified as Hispanic. Language preferences may affect understanding of notifications and ability to navigate payment management systems. Cultural approaches to debt management may also differ.

**Veterans with disabilities using assistive technology**: Zero participants (0%) used assistive technology during sessions despite 4 participants (36%) reporting cognitive disabilities. We specifically need to test debt management tools with screen reader users, magnification users, and speech input users to ensure accessibility.

**Rural Veterans with limited internet access**: Only 3 of 11 participants (27%) were from rural areas. Rural Veterans may have limited internet access, making digital-only debt management tools challenging. They may rely more heavily on physical mail and phone contact.

**Veterans with hearing disabilities**: Zero participants (0%) reported hearing disabilities. Phone-based debt management support may not be accessible to this population, making self-service digital tools particularly critical.

**Veterans who have successfully disputed debts**: All participants in this study described accepting or passively managing debts. We didn't speak with Veterans who successfully disputed and had debts removed. Understanding successful dispute pathways could inform Recommendation 4 (proactive error reporting).

## Appendix

### Research Documents
- [Product Outline - Pay.gov for Benefit Overpayment Debt Payments](link-to-product-outline)
- [Research Plan - Pay.gov Benefit Overpayment Debt Payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/research/research-plan.md)
- [Conversation Guide - Semi-Structured Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/research/conversation-guide.md)
- [Interview Transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/pay.gov/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/research/transcripts)

### Tools Used for Synthesis
- Manual transcript analysis and coding
- Cross-participant pattern identification using frequency tracking
- Thematic clustering of payment pain points, comparison standards, and unmet needs
- Severity assessment using Finding Prioritization Framework (decision drivers, stakeholder relevance, actionability, strategic value)

### Pages and Applications Referenced
- VA.gov debt portal (current state - referenced by participants as lacking payment management features)
- VA.gov benefit payment pages (current state - participants mentioned checking benefit amounts here)
- Consumer banking comparison sites referenced: Chase credit card portal (P03), GEICO auto-pay (P07), Baxter Credit Union loan portal (P15), South Carolina State Credit Union (P16)

### Other Supporting Documents
- Participant demographic data from Perigean recruitment survey
- Individual transcript analysis documents (P02, P03, P04, P06, P07, P09, P11, P13, P15, P16, P17)

### Secondary Research
None - this study focused exclusively on primary qualitative research through semi-structured interviews

## Research Participants

### Recruitment criteria

Participants were recruited through Perigean to reflect Veterans who have experience with VA benefit overpayment debts and payment management. We specifically recruited for diversity across:
- Debt types (disability compensation, education benefits, pension)
- Payment plan status (currently on payment plan or not)
- Financial hardship experience (current, past, or never)
- Device usage (desktop and mobile)
- Age, education, location, and disability status

All participants had received at least one debt notification from the VA and had experience either setting up a payment plan or managing ongoing debt payments.

We talked to **11 participants.**

Audience segment:
* Veterans: 11 
* Caregivers: 0 
* Family members of a Veteran: 0  

Gender:
* Male: 7 
* Female: 4 

LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 1

Devices used during study: 
* Desktop: 7 
* Tablet: 0 
* Smart phone: 4 
* Assistive Technology: 0

Age:
* 25-34: 1
* 35-44: 3
* 45-54: 2
* 55-64: 3
* 65+: 1
* Unknown: 1

Education:
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 3
* Master's degree: 4
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
* Cognitive: 4
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* Speech Input Technology: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

#### Underserved groups we haven't talked to 

This research does not include the perspectives of the following marginalized Veteran groups:

* **Veterans over 65** (recruited 1 of target 3-4, representing 9% of sample vs. 25-33% target)
* **Hispanic Veterans** (recruited 0, representing 0% of sample)
* **Assistive technology users** (recruited 0 participants actively using AT during sessions, representing 0% of sample)
* **Veterans with hearing disabilities** (recruited 0, representing 0% of sample)

### Recruitment of underserved groups in Pay.gov Benefit Overpayment Debt Payments Study

| Criterion | Target | Actual | Gap |
|-----------|--------|--------|-----|
| Veterans over 65 | 3-4 (25-33%) | 1 (9%) | 2-3 participants (16-24% gap) |
| Hispanic Veterans | 1-2 (9-18%) | 0 (0%) | 1-2 participants (9-18% gap) |
| Assistive Technology users | 2-3 (18-27%) | 0 (0%) | 2-3 participants (18-27% gap) |
| Veterans with hearing disabilities | 1-2 (9-18%) | 0 (0%) | 1-2 participants (9-18% gap) |
| Rural Veterans | 3 (27%) | 3 (27%) | 0 participants (0% gap) ✓ |
| Veterans with cognitive disabilities | 4 (36%) | 4 (36%) | 0 participants (0% gap) ✓ |
| LGBTQ+ Veterans | 1-2 (9-18%) | 1 (9%) | 0-1 participants (0-9% gap) ✓ |

**Impact of missing perspectives:**

**Veterans over 65**: This group may have different technology comfort levels, accessibility needs (vision, hearing, cognitive), and financial management approaches developed over longer lifetimes. They may also have been paying VA debts for extended periods (like P09, who has paid since 1995 for 30+ years) and could provide insights about long-term debt management needs that younger participants cannot. Their absence limits our understanding of how aging affects debt management expectations and capabilities.

**Hispanic Veterans**: Language preferences and cultural approaches to debt management were not explored. Hispanic Veterans may prefer Spanish-language notifications, may have different cultural expectations about government debt communication, or may face unique barriers understanding VA terminology. Without their participation, we cannot validate whether our findings about plain language and communication methods apply across linguistic and cultural contexts.

**Assistive technology users**: While 4 participants reported cognitive disabilities, none actively used assistive technology during sessions (screen readers, magnification, speech input). This means we cannot validate whether payment management tools are accessible to AT users or identify specific barriers they face. P16's quote about calling difficulties suggests phone-based support may not work for hearing-impaired Veterans, but we lack direct AT user perspectives to design appropriate alternatives.

**Veterans with hearing disabilities**: No participants with hearing disabilities means we cannot assess whether current communication methods (phone calls to DMC, recorded messages, video tutorials if present) create barriers. We also cannot evaluate whether text-based alternatives (email, SMS, chat) would better serve this population.

---

## End of Research Findings Report

**Report completed:** March 23, 2026

**For questions about this research, contact:**
- Risha Lee, UX Researcher

**Version:** 1.0

**Change log:**
- 2026-03-23: Initial research findings report published

---

**Document metadata for research repository:**
- Study ID: Pay.gov-Debt-Payments-2026-Q1
- Repository: department-of-veterans-affairs/va.gov-team
- Path: products/Debt Resolution/pay.gov/Pay.gov for Benefit Overpayment Debt Payments/research/
- Related documents: research-plan.md, conversation-guide.md, transcripts/
- Tags: debt-payment, financial-management, payment-plans, self-service, VA.gov-portal, benefit-overpayments
