# My HealtheVet "Recent Activity"
Last edited: April 2026

This report documents "in-app notifications" that are generated on VAHB and VA.gov web patient portal, both the current state and a future-state forecasting of what we may want to do or further research with Veterans to assess user-value. Currently, VAHB has a recent "Activity" section on the home screen that provides short-cuts to relevant or time-sensitive tasks that are personalized to the Veteran. We would like to replicate this on web, and begin to build out a more complete and robust set of data and features for these activities so that they can become closer "notifications" one day. However, there are significant technical feasibility roadblocks in the way of that future right now, so we will need to incrementally work toward it, and learn about Veteran expectations as we go. 

## On this page
* [Current state - Recent activity cards on VAHB home screen](#recent-activity-vahb)
* [Current state - Recent activity on web](#recent-activity-web)
* [Next steps - expanding recent activity on web](#next-steps-web)
* [Future state - Expansion of user controls and moving toward in-app notifications](#notifications)

## <a name="recent-activity-vahb"></a>Current state - Recent activity cards on VAHB home screen

VAHB currently has 5 "activity" cards surfaced on the home screen, 4 of which are health-specific notifications or point to health tools. One activity is not health-related ("Claims" - [X] active with [Y] evidence request), which falls under Benefits menu).  

| Tool | Card heading | Body text | Trigger | Page it routes to | Notes |
|--------------|---------|---------|----------|---------|------|
|Appointments| Upcoming appointments | [X] in the next 30 days | Count of upcoming appointments in the next 30 days. If none, the card does not appear | Health -> Appointments page, on the "upcoming" tab | |
|Travel claims | Past appointments | [X] eligible for travel reimbursement | ? | Health -> Appointments page, on the "Past" tab | |
|Messages | Messages| [X] unread | Count of messages in the inbox that have not been read by a user | Health -> Messages page, on the "Inbox" tab | Unread messages denoted by "blue" notification dot |
|Medications | Prescriptions| [X] ready to refill |  | Health -> Prescriptions page | Prescriptions eligible for refill not clear until user hits "Request refills" CTA button on that page |

**Resources:**

## <a name="recent-activity-web"></a>Current state - Recent activity on web

My HealtheVet on web currently has 2 existing health tools that can surface the same data as VAHB: 

| Tool | Indicator | Page it routes to | Notes |
|--------------|---------|---------|----------|
| Messages | Dot indicator next to "Go to inbox" on My HealtheVet landing page; dot indicator next to "Go to inbox" on My VA page | Messages: Inbox | Unread messages denoted by "blue" notification dot |
| Appointments | No visibility into specific upcoming appointments on My HealtheVet landing page (but there is a link to go to them); Card for nearest upcoming appointment details is surfaced directly on My VA page under the "Health care" heading | Appointments | |


## <a name="next-steps-web"></a>Next steps - expanding recent activity on web

Since VAHB already has the data for 4 recent activities that affect health tools, it is reasonable to assume that is data is also available for web and we could leverage it in the exact same way. As a next step for web, we should look at: 
1. Updating the current state "recent activity" for web to more closely match how it is presented in VAHB
2. Adding the missing recent activities from VAHB to web to help point users to additional high-touch tools and tasks that are hard to find: prescriptions that are ready for refill, and past appointments that are eligible for travel reimbursement
3. Once the first two have been accomplished, we could consider evaluating technical feasibility of potential new activities for items not represented in the secondary navigation that are currently harder to find:
  * medical supplies eligible for re-order
  * co-payments due

## <a name="notifications"></a>Future state - Expansion of user controls and moving toward in-app notifications



