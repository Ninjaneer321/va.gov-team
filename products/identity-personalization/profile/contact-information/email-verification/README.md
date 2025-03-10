# Initiative Brief - Email Verification 

#### Overview

Currently, emails are not confirmed, can be stale, and are relied upon heavily by us to communicate with users. We need to be able to communicate with our users in the event of a failure. Accounts with no email address in the VA.gov Profile make this more difficult.


## POCs
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)
- [This is currently managed by the VA.gov authenticated experience team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/README.md).

## Outcome Summary
The objective of this initiative is to improve the accuracy and completeness of contact information within VA.gov user profiles by building a contact email verification process. The goal is to ensure that VA Profile/VA Notify/VA.gov Profile are able to support sending timely and critical communications from the VA to verified email addresses, leading to improved engagement and reduced errors in delivery.

**Related/Associated product(s)**
- [Contact Information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information#readme)
  
## Problem
Some VA.gov users have outdated or incorrect contact email addresses, leading to missed communications regarding benefits, healthcare, and other services. This issue affects veterans who rely on VA services, as well as VA staff who depend on accurate contact information for outreach.

### Key Challenges:

- The current profile setup does not require email confirmation.
- Inaccurate or outdated emails contribute to missed notifications and delays in service completion

### Root Causes:
- Lack of mandatory email confirmation during profile setup.
- Users not being aware of the importance of maintaining updated contact details.
- Insufficient prompts and frictionless workflows encouraging updates. (IIR launched a product focused on new users onboarding to the VA. This will need to form part and parcel of that process and is something of an extension of what they launched)

## Alignment with OCTO-DE Goals:
- Enhances user engagement and trust by ensuring seamless communication.
- Supports VA’s mission of providing timely and accurate information to veterans.
- Strengthens VA.gov’s data integrity and service effectiveness.

---
## Measuring Success

### Key Performance Indicators (KPIs)

| KPI                                       | Baseline | Target | Data Source               |
|-------------------------------------------|----------|--------|---------------------------|
| Percentage of users with confirmed emails | X%       | Y%     | GA, Domo                  |
| Reduction in email bounce rate            | X%       | Y%     | GA                        |
| Increase in successful email deliveries   | X%       | Y%     | Internal VA email reports |
| Improved user trust/satisfaction score    | X        | Y      | VA.gov feedback surveys   |


---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - Users may not see immediate value in confirming their email addresses.
  - Some users may abandon the process if it is too complex.
- **Usability Risks** (can people figure out how to use it):
  - We're forcing users to navigate to their email, some users w/cognitive impairments may not be able to complete the process end to end
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Ensuring a seamless verification flow without technical glitches (may need VA Notify and Identity team support)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Coordination with multiple VA departments for policy alignment.
  - Compliance with security and privacy regulations.

### What're you building

#### In Scope

- Implement a mandatory or strongly encouraged email confirmation step during profile updates.
- Introduce periodic prompts reminding users to verify their email addresses.
- Provide clearer messaging on why email confirmation is critical.
- Automate detection and alerts for invalid/bounced emails.

#### Out of Scope:
- Expanding verification to other contact details such as phone numbers (future consideration).

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications

- Team Name: Authenticated Experience 
- GitHub Label(s): authenticated-experience, contact-information
- Slack channel: #accountexp-authexp
- Product POCs: Travis Cahill, Chante Lantos-Swett



