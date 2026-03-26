# Findings: Sign-In Support Prompts (Genesys AI Guides)

## Summary
The implementation of sign-in support using Genesys AI Guides does not meet the stated goal of providing accurate, conversational, and context-aware assistance. While structured flows can be created, the system behaves as a rigid, script-driven experience with limited intelligence, poor context handling, and no control over tone and voice.

---

## Definition of Done Evaluation

### 1. LLM successfully handles defined sign-in scenarios
**Status: Partially Met**

- “Forgot password” scenarios return valid guidance when KB data exists.

📸 **Successful Scenario (Forgot Password)**
> <img width="345" height="472" alt="image" src="https://github.com/user-attachments/assets/b94ee420-3a1e-4466-b236-8eed065741ac" />

- However, multiple critical failures were observed:
  - “How do I login to VA.gov?” returns incorrect password reset guidance.

📸 **Incorrect Intent Mapping**
> <img width="342" height="392" alt="image" src="https://github.com/user-attachments/assets/5c1b12dc-d190-42da-a76a-90be3afd7b52" />

  - “I forgot my username/email” returns no results.

📸 **Missing KB Coverage**
> <img width="348" height="365" alt="image" src="https://github.com/user-attachments/assets/56ff72a0-54a7-475f-9254-ebccf4d299f5" />

  - “I can’t log in” returns unrelated or incorrect KB responses.

📸 **Incorrect KB Response**
> <img width="342" height="474" alt="image" src="https://github.com/user-attachments/assets/b5ef310f-d17b-4fbf-ab01-04fa6d667bf4" />

- System heavily depends on KB coverage and lacks fallback intelligence.

---

### 2. Clarification logic functions in multi-turn conversations
**Status: Not Met**

- The system confirms the initial user input but does not meaningfully adapt after that.

📸 **Confirmation Without Adaptation**
> Insert screenshot showing confirmation followed by irrelevant or generic response

- Follow-up responses are not dynamically adjusted based on user answers.

📸 **Static Follow-Up**
> <img width="384" height="376" alt="image" src="https://github.com/user-attachments/assets/e6c1de9c-9fb3-4d65-be66-f40db2565336" />

- Example:
  - User: “I can’t log in”
  - System confirms intent
  - Immediately jumps to resolution confirmation without solving the issue

📸 **Premature Resolution Prompt**
> See image above

---

### 3. Voice & Tone aligns with VA guidelines
**Status: Not Met**

- No mechanism exists within AI Guides to configure or enforce tone and voice.
- Tone cannot be standardized, tuned, or aligned with VA conversational guidelines.
- Responses are generic and inconsistent.
- This requirement is currently not achievable within the platform.

---

### 4. Hallucination risk tested and mitigated
**Status: Partially Met**

- The system safely rejects malicious or irrelevant prompts.

📸 **Safe Handling of Malicious Prompt**
> <img width="379" height="629" alt="image" src="https://github.com/user-attachments/assets/a035d1a7-e5bf-4599-af87-5bb59ba4b80f" />

- However:
  - Incorrect KB matches lead to misleading guidance.
  - No intelligent validation of response relevance.
 
> <img width="381" height="897" alt="image" src="https://github.com/user-attachments/assets/8245be05-ca10-464d-a2b9-e99c8efba1da" />

---

## Acceptance Criteria Evaluation

### Clarification & Follow-Up Questions

#### Structured clarification questions
**Partially Met**
- System asks confirmation questions using “Ask and Confirm”.

📸 **Ask and Confirm Working**
> <img width="379" height="591" alt="image" src="https://github.com/user-attachments/assets/6badedbd-1407-4dd7-a15c-930e0c0c9c84" />

---

#### Adapts follow-ups based on previous responses
**Not Met**

- Follow-ups are non-deterministic and do not follow "system prompt".

📸 **Wrong Follow-Up Adaptation**
> <img width="381" height="354" alt="image" src="https://github.com/user-attachments/assets/d7cfbf8d-35b6-4c7c-bb84-182ff67466b4" />

> <img width="664" height="137" alt="image" src="https://github.com/user-attachments/assets/da2c8561-0260-4ac1-ac03-db1674aa0fde" />

---

#### Multi-turn context is maintained
**Partially Met**

- Context is stored (e.g., `userQuestion`) but not intelligently used.

---

#### Does not repeat clarification questions
**Met**

- Previously asked questions are not repeated.

---

## Key Findings

### 1. Lack of Intent Reclassification

- Once a user’s input is stored and confirmed, the system does not re-evaluate intent.

📸 **Intent Lock-In**
> <img width="381" height="728" alt="image" src="https://github.com/user-attachments/assets/16ea6640-92eb-4a6c-9984-876b273b46b4" />

- New or changed user inputs are ignored.

Example:
- Initial: “I forgot my password”
- Follow-up: “How can my dad log in?”
- System continues treating conversation as password issue

📸 **Context Not Updating**
> See image above

---

### 2. No Context-Aware Assistance

- The system maintains state but does not demonstrate understanding.
- Behavior reflects persistence, not intelligence.
- Conversations cannot pivot based on new information.

---

### 3. Rigid, Scripted Flow Architecture

- AI Guides function as deterministic workflows, not dynamic AI systems.
- Responses are predefined and linear.
- No real-time reasoning or adaptive decision-making.

---

### 4. Knowledge Base Dependency

- System performance is entirely dependent on KB completeness and accuracy.

📸 **KB Dependency Failure**
> <img width="348" height="365" alt="image" src="https://github.com/user-attachments/assets/56ff72a0-54a7-475f-9254-ebccf4d299f5" />

- Missing or weak KB entries result in:
  - No answers
  - Incorrect answers

---

### 5. No Voice & Tone Control

- No capability to configure or enforce tone.
- Cannot meet VA conversational standards.
- No system prompt equivalent exists.

---

## Overall Assessment

AI Guides behave as a scripted decision tree with light AI augmentation rather than a true conversational assistant.

---

## Final Verdict

This approach is **not viable for production** for VA.gov sign-in support because it cannot meet core requirements around context awareness, conversational adaptability, and tone alignment.
