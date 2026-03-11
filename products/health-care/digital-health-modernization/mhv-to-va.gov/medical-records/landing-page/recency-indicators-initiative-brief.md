# Initiative brief for adding recency indicators to the MHV Medical records tool

**Overview**
- Product: MHV Medical Records
- Feature: Add indicators to help notify and guide Veterans to recent records 

**On this page**
- [Outcome summary](#outcome-summary)
- [Problem](#problem)
- [Desired user outcomes](#desired-user-outcomes)
- [Undesired user outcomes](#undesired-user-outcomes)
- [Desired business outcomes](#desired-business-outcomes)
- [Undesired business outcomes](#undesired-business-outcomes)
- [Measuring success](#measuring-success)
- [Discovery](#discovery)
- [Launch planning](#launch-planning)
- [Screenshots](#screenshots)

## Outcome summary
Veterans will be able to review their latest health updates and results after receiving a notification or review their records following a recent visit.
**Related/Associated product(s)**
- MHV Medical Records | [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md)

## Problem
> Describe the challenge / pain point you seek to address.: 
- **Problem**: Veterans struggle to find recent results after receiving a notification or following a recent visit. 
- **Why this is happening**: Veterans are experiencing navigational friction, because the current structure of the medical records page doesn't align with Veterans' mental model.
   - Veterans are brought to a generic landing page without additional context

- **Evidence**: Learn more about this problem in our [February 2026 research review (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review).
- **OCTO-DE mission/goals**: This initiative will help further OCTO-DE's mission and goals by:
   - Making it easier for Veterans to access their medical records, coordinate care, and stay informed throughout their health care journey.

## Desired user outcomes
- **Why would a user want to use this?**
   - Veterans are struggling to locate recent health records. This effort aims to simplify that process and remove unnecessary friction.
- **With this problem solved, what should users be able to do/achieve that they couldn't before?**
   - Veterans will be able to more easily locate recent records 
   - Veterans will make more informed care decisions because they can more easily access up-to-date records

## Undesired user outcomes
- Veterans don't understand the meaning of the UI recency indicators
- Veterans don't understand why the recency indicator will not clear after engagement 
- Veterans still can't identify their most recent health records

## Desired business outcomes
- **Why would your business want this to exist?**
   -  Veterans will be able to find more relevant health records more easily. Which could result in more positive health outcomes for Veterans if they can act sooner on more recent health records.
- **With this problem solved, what should your business be able to do/achieve that they couldn't before?**
   - VA will respond to less customer support calls and emails related to locating recent medical records. VA will be able to redirect resources to more complex customer issues.

## Undesired business outcomes
- None known at this time

## Measuring success
**Key Performance Indicators (KPIs)**
> 💡VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.<sup>1</sup>\
>💡 Identify balancing metrics to ensure you're not bringing about undesired outcomes.
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- **Baseline**: Current count of clicks to record details pages
- **Target**: Increase in count of clicks to record details pages
   - Hypothesis: If we indicate which records are most recent, Veterans will more frequently click into the health record list item cards to view details of those particular records.
- **Other metrics to monitor**
   - Decreased count of support contacts related to not being able to find recent records 
   - Decreased count of mentions in Medallia of Veterans not being able to find their recent records 
   - Clicks on records with recency indicator
   - Clicks on recent records cards at top of MR landing page

## Discovery
**Assumptions/Risks**
> Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks.](https://www.svpg.com/four-big-risks/)
- **Value Risks** (will people use it): 
   - Not a known risk
   - Research review indicates people want to find recent health records, but it's not easy to do this right now
- **Usability Risks** (can people figure out how to use it): 
   - We will work with the Platform team to ensure design and accessibility standards are met as we strive to improve the usability of the product.
   - Veterans don't understand why the recency indicator will not clear after engagement 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - Yes
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
   - These changes will need to be communicated to field support staff

**Supporting research**
This work is supported by existing research and the metasynthesis review of the existing research. 
Learn more in our [February 2026 research review (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review).

**What're you building**
- **In scope**: We will utilize a "dot notification" or a tag/status already used on MHV and place it next to a recent record. We will also build a "recent" card/section of the Medical records landing page that points Veterans to the appropriate page with an updated/recent record.
   - Future iterations with a higher tech LOE
      - Deep-linking to a specific record (tech LOE) 
      - Clearing the notification (Tech LOE) 
- **VAHB work**: We will not build for VAHB mobile app at the this time. 
  - We want to conduct the usability study for web only to see how the designs perform with Veterans. 
   - We want to explore utilizing the "What's new" feature the VAHB app is currently developing to increase findability in the app.
- **Assumptions & Risks**: Dot notification/tag status has proven success in other products already. Surfacing "recent" card section at top of page is also similar to the VAHB model of surfacing recent information, which is also successful.
- **Go-to-market**: We will make sure we communicate this design to OCC, so OCC can socialize the change if necessary before release.


## Launch Planning
**Collaboration Cycle**
- Link to Kickoff ticket (tbd)
**Timeline**
> Describe any major milestones for this initiative including organizational, legislative, etc. constraints.
- Link to release plan (tbd)

**Initiative Launch Dates**
- Target Launch Date: tbd
- Actual Launch Date: tbd
  
## Screenshots
View mock ups [in this Figma file](https://www.figma.com/design/gGU9oX4QVqbYdxzXfTqTEj/Medical-Records---Milestone-2?node-id=24715-18943&t=Zo5ljmZx6JbfmXsT-1)

**Before**
[insert mock]
<img width="842" height="816" alt="image" src="https://github.com/user-attachments/assets/bf0d9aea-4147-4626-aca6-03f84567f72b" />

[insert mock]

**Communications**
<details>
- Team Name: MHV Medical Records  
- GitHub Label(s): TEAM-mhv-medical-records
- Slack channel:  #mhv-medical-records-team 
- Product POCs: Marci McGuire 
</details>

**Stakeholders**
<details>
- Office/Department: VHA OCC
- Contact(s): Bresha Lipscomb
</details>
