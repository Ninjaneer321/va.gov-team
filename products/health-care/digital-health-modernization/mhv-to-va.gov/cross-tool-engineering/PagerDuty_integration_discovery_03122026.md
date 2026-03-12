# PagerDuty / Datadog / Slack Integration Discovery

**Date:** March 12, 2026
**Author:** Cross-Tool Engineering, MHV-to-VA.gov

---

## Context

Engineers on the MHV frontend team were being pinged via Slack to join off-hours production support investigations. While the team is passionate about helping Veterans and often responds, this informal approach had several problems:

- **No guaranteed delivery** — Slack messages are easy to miss outside working hours, and some engineers don't have Slack on their phone.
- **Off-duty engineers disrupted** — Even folks not on call were being Slack-summoned.
- **No clear escalation path** — Escalation relied on word-of-mouth and person-to-person texting, making it difficult to get additional support when needed.

## Purpose

Integrating PagerDuty with our existing monitoring (Datadog) and messaging (Slack) tools will allow us to:

- **Alert on-call engineers quickly and reliably.**
- **Establish a clear, automated escalation path.**
- **Protect off-duty engineers** from unnecessary interruptions.

## Approach

1. Created a **test service** in PagerDuty to avoid accidentally paging anyone.
2. Added a **Datadog integration** to the service during creation.
3. Added a **Slack extension** to the service after creation (new Slack channel in the DSVA workspace).
4. Added a **PagerDuty integration in Datadog**, referencing the test service name and ID.
5. Created a **test monitor** in Datadog to manually trigger an event.
6. Linked the service to the monitor.
7. Manually triggered the event and validated end-to-end behavior.

## Results

When the monitor was manually triggered, the following occurred:

| Capability | Status |
|---|---|
| Slack notification with incident details | ✅ Working |
| SMS notification with incident details | ✅ Working |
| Acknowledge / respond / resolve via SMS | ✅ Working |
| Acknowledge / respond / resolve via Slack (after connecting account) | ✅ Working |
| Track incident lifecycle in PagerDuty | ✅ Working |
| View Datadog monitor info within PagerDuty incident | ✅ Working |
| Navigate directly to Datadog monitor from PagerDuty incident | ✅ Working |

## Considerations

- **Setup complexity:** There are some hoops to jump through, but nothing that is a dealbreaker.
- **Duplicate Slack messages:** Occasionally saw duplicate PagerDuty messages posted to Slack — worth investigating during the pilot.
- **Alert threshold tuning:** Getting Datadog alert thresholds right will be critical.
  - Too sensitive → alert fatigue and reduced trust in the system.
  - Too lenient → missed incidents.
  - **Recommendation:** Err on the side of *slightly more alerts* at first, then tune down based on real-world data.

## Recommendation

The integration works well end-to-end. **We recommend moving forward** with a deliberate, safe rollout that allows room for iteration.

### Suggested Rollout Plan

| Phase | Action |
|---|---|
| **1. Pilot team** | Select a single team to trial the integration. |
| **2. Pilot on-call personnel** | Start with a small group of on-call engineers. |
| **3. New monitors only** | Create new Datadog monitors for this integration — do not modify existing monitors. |
| **4. Conservative thresholds** | Set slightly higher alert thresholds than ideal to start; tune down over time. |