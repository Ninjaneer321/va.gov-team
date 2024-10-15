
# New Statuses Initative Brief - Pending & Partial Fill

---
## Outcome Summary


**Related/Associated product(s)**
[Medications product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications)

## Problem

## Supporting Veteran Feedback


## Desired User Outcomes
- Veterans find the medications list is easy to navigate and find what they are looking for. 
- Veterans know how to find a complete list of medications they have on file at VA, as well as any relevant details about those medications. This includes all historical information about a medication including past prescription history.
- Improve transparency / reduce confusion around medications a Veteran is taking (VA and non-VA)
- Veterans are well-informed about the status of their medications (when something needs to be refilled or renewed, shipment tracking updates, etc.)

## Undesired User Outcomes
- Medication section doesn’t provide the user with the same functionality that they have today- causing frustration and dissatisfaction.
- Veterans are confused about medications they are taking.
- Veterans are confused by VA and non-VA medications that are the same medication. 

## Desired Business Outcomes
- Veterans have access to all historical information about a medication including past prescription history.
- Misalignment in data and functionality on VA Health and Benefits Application and MHV on va.gov.
- Enabling users to understand and self-service medication needs leads to more timely care, reduces burden on clinical staff, and increases patient safety. 
- Have one place for veterans to find all their medication information and self serve their medication needs.
- Easily accessible and identifiable medications list will alleviate congressional and patient safety questions.

## Undesired Business Outcomes
- Users find the medications on VA.gov complex and difficult to accomplish their tasks and continue to default to MHV legacy to self-serve their needs.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery

### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?
- The medication list should only have one card per medication name (name + dose + form), unless their is a VA and non-VA med with the same medication name. This will group similar medications that are separate prescriptions together under one object. 
- A veteran can find details about each prescription in the details page.
- This list view should display the most recent status, which should help veterans find their active medications quicker. 
- This should be built in a way that other clients (ie. VAHB) can use the same logic. 

#### V1
- Group medications that have the same RX# + alpha character into one object (card).  These are prescriptions and their associated renewals. 
   - Example:
    - Medication = Ibprofen 200MG tab
    - Prescription 1234567, Prescription 1234567A, Prescription 1234567B would all be grouped together under this medication vs. having three separate cards.  The most recent Rx would be the status shown on the card.  All previous Rx details would be listed under the details page.  
#### V2
- Explore grouping medications by NDC and/or Medication name (name + dose + form).  
- Likely would not want to group VA meds + non-VA meds together as one object even if NDC or medication name is the same.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94684)
- 10/16 - PO Sync
- 10/23 - Architecture Review
- 10/24 - Design Intent
- 11/15 - Midpoint
- 12/10 - Staging
- Release by end of PI 17 - Jan 21.

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
- The medications product is working on a variety of findability improvements in PI17 based on the current user problems we've identified.  Rather than doing research for each indivdual solution, the team is planning to conduct research in combination with other changes in PI18.

#### Initiative Launch Dates
- *Target Launch Date*
  - V1 - Jan 2025
  - Possible V2 coming later
- *Actual Launch Date* 
  - tbd

---
   
## Example of 3 different prescriptions as separate objects on the medications list
![image](https://github.com/user-attachments/assets/432d12f0-b523-43ec-a2bf-5f9a870aabc9)

### Additional resources 
- [Medications Data Modeling & Lo-fi Re-Structure Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708968755045/4bdbe77c90fbcf529afa0cf7c05342f6357c7997?sender=uffe0b1e17d72421900bf8566) from IA
- [Inital Slack Discussion](https://dsva.slack.com/archives/C059Q28DV99/p1725994741982699)
---

#### Communications
- Team Name: Medications on VA.gov
- GitHub Label(s): MHV-Medications
- Slack channel: #mhv-medications-devs, #mhv-medications-rx
- Product POCs: Kaitlin Fink (acting), Kay Lawyer (parental leave)

#### Stakeholders
- OCC: Eric Spahn (RX)
