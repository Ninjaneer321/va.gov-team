# Intiative Briefing: Outreach & Events MVP (Filtering / Recurring Events) - AKA Events V2

## Outcome Summary
The VA.gov [Outreach Events calendar](https://www.va.gov/outreach-and-events/events/) was quickly built and released as an "at parity" MVP more product -- with very basic funcitonality -- more than <two> years ago.  Since that time, the popularity of the product has grown (to more than 200,000 page views on average per month [Google Analytics report](https://analytics.google.com/analytics/web/?authuser=1#/report/content-pages/a50123418w177519031p176188361/_u.date00=20190701&_u.date01=20210722&explorer-table.filter=outreach-and-events~2Fevents~2F&explorer-table.plotKeys=%5B%5D&explorer-graphOptions.selected=analytics.nthMonth)) and so have the needs and expectations of the VA business stakeholders.   Indeed, as of the spring of 2021, the Veterans Experience Office has broaded the [user base for the national events calendar to digital comms teams at VHA, VBA, OPIA and NCA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/business-users.md).
  
For this initiative, we will implement a series of functional, UX and CMS-based authoring enhancements that will more fully mature the Outreach Hub events calendar product, making it more personalized and useful for VA.gov users and easier to curate-manage by VA business stakeholders.


EPICS: 
* Recurring Events: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1956
* Events V2 filters: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9435

## The Problem to be Solved

* Problem Defined: How might we make the [Outreach Hub events calendar](https://www.va.gov/outreach-and-events/events/) more personalized for users (e.g. find events by date, time, event type, etc.) and easier to manage/curate for VA business users.

* Evidence to support Prolem: All Outreach & Events pages are public so users so any visitor to VA .gov can view their content. A quick review of Google analytics for all Outreach pages form the last six months (April to Octber 2021) gives some insights:

[Outreach Dashboard in GA](https://analytics.google.com/analytics/web/?authuser=1#/dashboard/nJHHfkWCR3S4ti7gjyDrtw/a50123418w177519031p176188361/_u.date00=20210418&_u.date01=20211017/)
- A lot of traffic to Outreach pages is from email links
- Google is a top referral source
- Most vists are from desktop computers (65%), mobile vists are significant (32%)
- Visitors who view the Events page do use the stepper and typically go just a few pages deep
- Visit follow a cycle with traffic peaking Wednesday/Thursday, and dropping-off significanly over the weekend
- Visits have increased noticibly beginning in July 2021 
- Users often return to Outreach pages

* How does this initiative help further OCTO-DE's mission and goals?
     * VA North Star: Increase the usage and throughput of VA services 
     * VA North Star: Increase the quality and reliability of VA services 
    
   
#### User stories

**As a user:**
  
- I want to search for events by date (month, day) and time so that I know what's happening based on my schedule/availability. 
- I want to search for events by location so that I know what's happening in my area (e.g. at my VAMC).
- I want to search for events by type so that I know what's happening in-person vs. online/virtual
- I want to search for events by interest/need so that I know if there events of special interest to me (e.g. about VA benefits, about VA education, about VA Community Care etc.)
- I want to search for events based on my status (Veteran, beneficiary, care-giver, etc.) so that I can find events of special interest to me.

**As a national VACO digital comms content editor:**

- I want the capability to provide additional categorical data about events (e.g.,event category -- health, education, etc.) to help power "filtering" features for users.
- I want an [improved CMS authoring experience](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1605) so that I can be more efficient when updating/managing the events hub.
  - I want the capability for [auto-archiving past events](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4214) so that the event hub does not display old, non-relevant content.
  - I want the capability to edit/resize images more easily so that I can use photos more confidently and efficiently.
  - I want the removal of the "Cost" field for events as all VA events are no-cost. (This will require Stakeholder engagement to validate)
- I (may) want the ability to review and approve local events generated by the field (VAMCs) so that those events can be featured on the national event calendar and I don't have to duplicate-create them.  

**As the Outreach Events product owner:**

- I want an intuitive UX which allows users to narrow their search for events in an intutive way -- on desktop and mobile -- so their experience is efficient and more personalizable.  
    
<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
*Which of your product's existing KPIs will you look at to understand if your solution is meeting your desired user and business outcomes, and not bringing about undesired outcomes?*

- Reduced bounce rate for the Outreach & Events page 
- Improve service completion through increased event registration (via Outreach hub) 
- Increase event engagement through added user experience through filtering events by DTG/Location.  

Analytic Insights:
* Majority of traffic to Outreach pages is from email links (Targeted email campaigns) 
* Google is a top referral source
* Most visits are from desktop computers (65%), mobile visits are significant (32%)
* Visitors who view the Events page do use the stepper and typically go just a few pages deep (Bad Experience, increasing bounce rate).
* Visit follow a cycle with traffic peaking Wednesday/Thursday, and dropping-off significantly over the weekend
* Visits have increased noticeably beginning in July 2021
* Users often return to Outreach pages 
 
---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - There is measurable value to Veterans through an optimized event resistration experience in the Outreach hubs.  With an enhacnced filtering and recurring events user experience could increase Veteran enagement to include registration to single and recurring events via the Outreach hub.  Presently, no filter component exists, so Veterans are forced to toggle between pages and pages of events in order to locate desired events. This is the key reason for a large bounce rate after clicking three pages or more on the events page.  The added capability will also display additional data factors for Veterans to include DTG, location, category (online, location, both) and frequency, based on if its a single event or recurring event.  
- **Technical Risks**   
  - The biggest technical risk is in working in concert with the Content Management System (CMS) team in ensuring timing and synquencing is esstablished to ensure no outage of events during build process.  These updates are technically feasible and LOE is low in terms of implimentation.
- **Usability Risks** (can people figure out how to use it):
  -  A snapshot of VA.gov click-through analytics and user research conducted in September 2021 indicates there is relatively modest engagement of outreach hubs and specifically event listings, events did show a marketed increase in engagement starting in July 2021 likely due to a targeted marketing camapign to drive traffic to the hubs.  The proposed updates in this MVP will drastically improve users ability to navigate, find and register for desired events and would expect both page visits, engagements and event registration to increase as a result to the MVP roll out. 
-  **Viability Risks/Constraints** (will there be a positive organizational impact):
   - The proposed enhancements will apply some much needed streamlining for navigational strategies along with user flow and conversion paths for Veterans that are currently struggling to find and location desired events in the current layout of the event hubs. 
  
### Current User Path
![Screen Shot 2021-10-28 at 10 55 42 AM](https://user-images.githubusercontent.com/70410912/139301132-8c3ddf53-ed54-47d6-aa6e-6f85da90e1ec.png)

### Technical Analysis 
- Everything looks very feasible + has good a11y baked into the design elements.  Low to no risks in implimenting the proposed udates.

### Solution Scope for MVP
**In Scope**
- Filtering Date/Time (User/Editorial Experience)
- Recurring Events (User/Editorial Experience)
- User Testing to guage Veteran prospective on filtering and recurring event UX 

**Not In Scope**
- Larger efforts outside of listed Scope items. Limmited scope for this effort.
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket
- 

### Go-to-market 

|Date| Decision |
|--|--|
| TBD |  Dave Conlon to review initiatives briefing and validate |
| TBD |  Determine KPIs and Success Measures and validate |
| TBD |  Complete VSP Collaboration Cycle events  |
| TBD |  Complete Release Plan per action items |

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
- [Designs Artifcats](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/outreach-events/initiatives/2021-filtering-recurring-events/design) 

---

#### Communications
Primary communication for this initiative will be via #VSA-Public-Websites slack channel. 

<details>

- Team Name: Public Websites 
- GitHub Label(s): VSA-Public-Websites 
- Slack channel: #vsa-public-wesbites
- Product POCs: David Conlon (PO), Brian Lloyd (PM)

</details>



#### Stakeholders
PO - Dave Conlon 
Veteran Experience Office (VA)

<details>
  
- Office/Department: N/A
- Contact(s): N/A
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
