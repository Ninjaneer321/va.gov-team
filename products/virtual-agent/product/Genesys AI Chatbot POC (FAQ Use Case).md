# Product Requirements Document: AI Chatbot POC (FAQ Use Case)  
---
## Background

Validate that Genesys can support LLM based intent detection and accurate informational responses for sign on troubleshooting and claims related questions (e.g., "How do I file a disability claim?",) while maintaining conversational context across multiple turns. This POC does not include authentiation or claims status retreival.

## Objective & Purpose:

Due to strategic consolidation into Genesys, we must validate that:
  - LLM integration within Genesys maintains intent accuracy
  - Domain specific informational responses remain accurate
  - Hallucination risk is controlled
  - Multi turn conversational context is preserved
  - Multi topic switching is handled smoothly
  - Disambiguation can occur when needed 
  - Safety concerns are mitigated (crisis, violence, harassment, jailbreak/misuse)
Without validation, migration risks degrading Chatbot effectiveness.

## Problem
> What is the problem and who is affected?

The previous CQA Chatbot struggled with accurately interpreting user queries as conversational text and does not effectively direct users to relevant information. This caused a decrease in the Chatbot's usage. An LLM based proof of concept demonstrated improved intent detection and response quality.

> What evidence do we have of the problem?

Total messages decreased from:​​
* Q1 2024 = 53,617
* Q1 2025 = 19,541

> Why do you think the problem is occurring?

The chatbot struggled with synonyms which caused it to not understand the users intent with the question. This caused it to have to follow up to understand what topic to direct the user to leading to longer user journeys. It also had difficulty understanding complex user questions for example questions that are personalized. With GenAI sites that are able to not only understand the intent of the question, but also provide answers to questions by sourcing data from not only the VA site, but other sites across the internet. Veterans are more likely to use them instead of the VA Chatbot to ask questions that are more personalized to their needs.  

> Why was this topic prioritized?

* Currently a common support use case for support teams at the VA. 
* Content availability - there is currently a robust troubleshooting guide available on VA.gov that the chatbot can surface as well as be trained on. 
* Can be a part of the ground floor for integrating Ask VA. 
* Does not contain user specific or sensitive data which allows us to move fast and explore more technologies in a short period of time

> How does this initiative help further OCTO-DE's mission and goals?

As part of the One-Bot approach.

---
## Measurements
> List project goals and their corresponding success metrics.

| Goal | Metric / KPI | Source | Notes |
|---|---:|---|---|
| Intent classification accuracy | &ge; X% | (TBD) | How do we determine what this threshold should be? |
| Informational response accuracy | &ge; X% | Validated via human review sample |  |
| Hallucination rate | &le; X% | (TBD) | Is this a metric provided by Genesys, how do we determine threshold? |
| End of Conversation Survey rate | &ge; X% | (TBD) | Is this a metric provided by Genesys, how do we determine threshold? |
| Context maintained across 3+ follow up turns | 3+ follow up turns | (TBD) | Is this metric provided by Genesys? |
| Latency within acceptable threshold | &le; X seconds | (TBD) | What is our acceptable threshold? |
| No blocking platform constraints discovered |  | Development Team | Identified & documented during investigations/POC build |

> List project goals if criteria are not met.
* Document limitation(s)
* Identify mitigation options
---
## Deliverables
> What are we delivering?
* LLM based intent classification and topic routing engine
  * Disambiguation via clarifying question if intent classification fails 
* FAQ Responses to:
  * Sign on troubleshooting queries (e.g., "Why can't I log in?", "How do I reset my password?")
  * Claims process questions (e.g., "How do I file a disability claim?") 
* Multi turn follow up questions
* Context retention across at least 3 conversational turns
* Monitoring system for jailbreaking and bad actor activity
* Handling of queries indicating suicidal ideation, harassment, or violence
* Access to Genesys Cloud metrics & dashboards
  * End of conversation survey 

---

## Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

| Risk Area | Assumption | Risk | Validation Method |
|---|---:|---|---|
| Usability | Users will use Chatbot | Low adoption | Usage tracking & usability tests |
| Value | Users may not find the Chatbot helpful | Users may prefer human support | Monitor survey responses & usability tests |
| Feasability | Genesys supports LLM flexibility | Platform constraints | Dev Testing |

- **Value Risks**: 
  - **Risk:** Users may not perceive the chatbot as helpful or may prefer human support.
  - **Validation:**
    - Monitor end of survey responses.
    - Conduct moderated usability testing sessions to observe:
      - Do they escalate anyway?
    
- **Usability Risks**:
  - **Assumption:** Users will naturally discover and use the Chatbot for sign-on and claims questions. 
  - **Risk:** The previous chatbot was hidden and low visibility. Even if accuracy improves, usage may remain low due to placement, trust, or habits. 
  - **Validation:**
    -  Measure entry rate into Chatbot
    -  Conduct moderated usability testing sessions to observe:
      - Do users choose the Chatbot first?
      - Do they trust the response?
      - Do they escalate anyway?

  - **Assumption:** LLM responses are clear, structured, and actionable. 
  - **Risk:** Even accurate answers can feel vague, wordy, or confusing. 
  - **Validation:**
    -  Human review of X number of responses for:
      - Clarity
      - Actionability
      - Tone 
    -  Measure follow up clarification rate:
      - High rate may indicate confusing responses
    - Collect qualitative user feedback during testing

  - **Assumption:** Multi turn context feels natural and stable. 
  - **Risk:** Context switching may feel inconsistend or brittle, causing user frustration.  
  - **Validation:**
    -  Simulate conversation trees:
      - Topic switch
      - Follow up clarification
      - Ambiguous phrasing
    - Track context failure rate across test cases
    - Log instances of incorrect topic retention  

- **[Technical] Feasibility Risks**:
- **Assumption:** Genesys supports flexible LLM integration without major constraints.  
  - **Risk:** Low-code enviornment restricts:
    - Prompt control
    - Model choice
    - Guardrail enforcement
    - Iteration speed   
  - **Validation:**
    -  Document integration architecture
    -  Attempt prompt tuning iterations
    -  Track time required to deploy model updates
    -  Identify any vendor imposed constraints
   
- **Assumption:** Hallucination can be sufficiently mitigated in this enviornment.  
  - **Risk:** Platform abstraction layers may reduce the ability to constrain responses. 
  - **Validation:**
    -  Create adversarial test set:
      -  Out of domain questions
      -  Ambiguous phrasing
      -  Trick questions
    -  Measure hallucination rate
    -  Test response fallback logic
   
- **Assumption:** Latency is acceptable.  
  - **Risk:** LLM + platform orchestration may introduce delays in responses. 
  - **Validation:**
    -  Measure end to end response time
    -  Compare to historical chatbot performance
    -  Define acceptable threshold 

- **Organizational Viability Risks/Constraints: Will there be a positive organizational impact?**:
- **Assumption:** 
  - **Risk:** 
  - **Validation:** 

## What're you building
> *What's in scope for you to build with this initiative? (Describe key features/flows)
- User Experience Flow:
  - User sees Chatbot window with disclaimers
  - User enters Chatbot
  - User is greeted by the Chatbot 
  - User asks question
    - Ex. "How do sign in?"
  - Chatbot scans question for suicidal ideation, harassment, or violence
    - If detected Chatbot provides curated response
  - Chatbot scans question for jailbreak/misuse attempt
    - If detected Chatbot provides curated response
  - If crisis or jailbreak is not detected, LLM identifies intent: sign on
    - If LLM is unable to identify intent then the Chatbot asks a clarifying question   
  - Chatbot provides structured response using VA.gov content as knowledge source:
    - Clear steps
    - Relevant links
    - AI Disclaimer
    - End of conversation survey question
  - User asks follow up question:
    - "How do I find my password?"
  - Chatbot scans question for suicidal ideation, harassment, or violence
    - If detected Chatbot provides curated response
  - Chatbot scans question for jailbreak/misuse attempt
    - If detected Chatbot provides curated response
  - If crisis or jailbreak is not detected, context is retained; answer reflects prior sign on topic
  - User shifts topic:
    - "How do I file a claim?"
  - Chatbot scans question for suicidal ideation, harassment, or violence
    - If detected Chatbot provides curated response
  - Chatbot scans question for jailbreak/misuse attempt
    - If detected Chatbot provides curated response
  - If crisis or jailbreak is not detected, LLM correctly identifies new intent
  - Chatbot provides structured response using VA.gov content as knowledge source:
    - Clear steps
    - Relevant links
    - AI Disclaimer
    - End of conversation survey question
- Genesys analytics/monitoring for system performance and user engagement.
- Voice & Tone prompt requirements based on VA.gov style guide & guidance from OCTO Content team (ongoing effort.) 

> *What have you explicitly decided to **not** include and why?*
- Authentication flows
- Claims status lookup tool
- Backend system integrations
- Full Chatbot migration
- Voice channel support
- Live agent support
- UX redesign

> *Technical Considerations*
- How LLM is integrated
- Prompt control flexibility
- Ability to constrain model outputs
- Logging and traceability
- Guardrails for hallucination mitigation
- Version control & iteration speed
- Vendor dependency risks

Specifically evaluate: 
How configurable is Genesys compared to prior architecture? 
  
## Evaluation
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

* VA organizations (VES, OCTO, VEO, VRM, Unified Communications Team) - Collaborating on testing & evaluation
--- 

### Timeline
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
1. Build Start: TBD
2. Build End: TBD
3. Bug Bashing: TBD
4. Usability Testing: TBD
5. Dogfooding (Internal Testing): TBD
6. Final Evaluation Presentation: TBD


### Key Decisions
- 
---
   
## Screenshots

### Before



### After

---

#### Communications
> *Where will you discuss this initiative?*

- **Team Name:** VA Chatbot
- **GitHub Label(s):** va-virtual-agent
- **Slack channel:** #va-chatbot-team
- **Product POCs:** Luciana Morais
    - Luciana Morais (Product Owner)
    - Selia Straus (Project Manager)
    - Ann-Marie Raposo (Product Manager)
    - Anita DeWitt (Tech Lead) 

</details>

#### Team Members

<details>
 
 - DEPO Lead: Luciana Morais
 - PM: Ann-Marie Raposo
 - Engineering: Anita DeWitt
 - Research/Design: Lucas Wright
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
- ** Office/Department: OCTO, Unified Communications
- ** Contact(s): Luciana Morais (OCTO), Danielle Thierry (OCTO), Brian Mahlum (UC) 

 
</details>
