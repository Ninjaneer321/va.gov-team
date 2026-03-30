# Letter Access Without Address – Feasibility & Recommendations Report

## Analysis

### Policy and Procedural Constraints
Based on conversations with [letter owners and stakeholders](https://docs.google.com/spreadsheets/d/1pCXc0n9N9xbKiWLJcUIwInnGX-I-tlRh3p2x-ONkzuI/edit?usp=sharing) familiar with policy and legal requirements:

- Benefit letters do not require a mailing address from the VA to be generated  
- However, receiving organizations (e.g., state agencies, local governments, housing authorities) often require an address to:
  - Validate identity  
  - Confirm eligibility  
  - Accept the letter as official documentation  

**Implication:**  
While the system could technically allow letters without an address, doing so would likely result in letters being rejected or considered invalid in many real-world use cases.  

As a result, the mailing address requirement should be maintained.

---

### Impacted and Sensitive Letter Types
- All benefit letters are potentially impacted, as they are commonly used for verification purposes  
- Sensitivity varies depending on how the letter is used, particularly for:
  - Housing assistance  
  - State or local benefit programs  
  - Income or eligibility verification  

**Key finding:**  
Letters used for external validation are most sensitive to address presence and formatting, reinforcing the need to maintain an address in the experience.

---

### Refined UX Risk Assessment

**Current State Risks:**
- Veterans without a permanent address may be:
  - Blocked from accessing letters  
  - Forced to enter temporary or inaccurate information  
- Creates equity and access barriers, particularly for unhoused Veterans  

**If address requirement is removed:**
- Letters may be:
  - Rejected by receiving organizations  
  - Viewed as incomplete or invalid  
- Creates downstream usability and trust risks  

**Additional risk identified:**
- The federal VA letterhead may not meet requirements for some use cases  
  - Some state or local entities require a local or regional VA source  
  - Current workaround requires Veterans to call support to generate an alternative letter  

---

### Mitigation Strategies and Guardrails

To balance access with real-world usability:

#### 1. Address Guidance for Veterans Without Stable Housing
- Provide clear alternatives for address entry:
  - VA facility address  
  - PO Box  
  - Trusted third-party address  

#### 2. UX Support and Transparency
- Clearly explain:
  - Why an address is required  
  - How the letter will be used  

#### 3. Contextual Help
- Add support content such as:  
  *“Don’t have a mailing address? View options”*  
- Guide Veterans toward acceptable alternatives  

#### 4. Letterhead Flexibility (New Opportunity)
- Allow Veterans to select:
  - Federal VA letterhead (default)  
  - Local or regional VA letterhead  
- Reduces reliance on support channels and improves acceptance by local entities  

---

## Documentation & Recommendation

### Feasibility Assessment
**Moderate complexity**

- **Not recommended:** Removing the address requirement entirely  
  - High risk of letters being rejected  
  - Reduces real-world usability  

- **Recommended:**
  - Maintain address requirement  
  - Add UX guidance and support for Veterans without a permanent address  
  - Explore letterhead flexibility  

> To maintain a consistent and predictable experience, this approach does not recommend varying address requirements by letter type or use case.

---

### Scope of Potential Changes

**In Scope:**
- UX updates to the benefit letter download experience  
- Clear guidance for address entry  
- Support content or links for Veterans without a mailing address  
- Exploration of letterhead selection (federal vs. local VA)  

**Out of Scope:**
- Removing the address requirement entirely  
- Creating different rules by letter type or jurisdiction  
- Policy changes to external validation requirements  

---

### Recommendations

- Maintain the mailing address requirement to ensure letters remain valid and accepted by receiving organizations  
- Add clear guidance for Veterans without a permanent address, including acceptable alternatives such as a VA facility address or PO Box  
- Introduce contextual support within the experience, such as a link:  
  *“Don’t have a mailing address? View options”*  
- Provide explanation for why an address is required and how the letter will be used  
- Enable letterhead selection (federal vs. local VA) to better support requirements from state and local entities and reduce reliance on support channels  

---

### Recommended Path Forward

Proceed with implementing the above improvements to enhance access while maintaining compliance and usability.

This approach:
- Preserves real-world validity of benefit letters  
- Improves access for Veterans without stable housing  
- Increases transparency and reduces confusion  
- Avoids introducing unnecessary system complexity  

---

### Next Steps

- Align with stakeholders on recommended approach  
- Validate feasibility with engineering (especially letterhead selection)  
- Develop and test UX concepts for:
  - Address guidance  
  - Support link for Veterans without a mailing address  
- Gather feedback and iterate before implementation  
