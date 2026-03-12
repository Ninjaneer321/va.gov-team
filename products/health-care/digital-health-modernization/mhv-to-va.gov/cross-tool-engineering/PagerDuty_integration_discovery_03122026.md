# PagerDuty/Datadog/Slack integration discovery

## Context
I realized that engineers on the MHV frontend team were getting pinged via slack to join off-hours production support investigations. This team is passionate about helping Veterans so they often check slack after hours. However, even folks who are not on call get slack-summoned, and some folks don't have slack on their phone,
making getting additional support difficult to do. There was also no clear escalation path, relying on word-of-mouth and person-to-person texting to escalate.

## Purpose
If we integrate PagerDuty with our existing monitoring and messaging tools, we can alert the engineers on call quickly and assuredly, we can escalate confidently, and we can let people who are not on call stay not on call.

## Approach
1. Created a test service in PagerDuty so folks don't get pinged accidentally
2. Added a Datadog integration during service creation
3. Added a Slack extension to the service after service creation (new slack channel in DSVA org)
4. Added a new PagerDuty integration in Datadog with the name of the test service and the service ID
5. Added a new test monitor so I could manually trigger the event
6. Linked the service to the monitor
7. Manually tested the event

## Results
When I triggered the monitor manually, the following happened:
* I saw a slack message with the pager duty incident information
* I saw a text message with the pager duty incident information
* I was able to ack/respond/resolve to the incident via text and via slack (after I connected my slack account to pager duty)
* I was able to follow the incident in pagerduty
* I was able to view datadog monitor info in the pagerduty incident
* I was able to navigate to the datadog monitor from the pagerduty incident

## Considerations
* There are some hoops to jump through to set this up, but not deal breakers
* Sometimes saw duplicate pagerduty messages in Slack
* We should strive to get thresholds/alert types right in DataDog
  * b/c we don't want to be pinged constantly
  * HOWEVER, don't want to dull the sensitivity too much.
  * It will be a balance getting this right, and we should err on the side of too much at first

## Recommendation
Overall it works really well, and my recommendation is to move forward with this in a deliberate, safe way, with a mindset that allows for some mistakes.

Safe & deliberate may look like:
* pilot team to trial this
* pilot on-call personnel to trial this
* new monitors to trial this, so we don't clobber the existing monitors
* slightly higher thresholds for triggering monitors than we'd ideally want (at first)
