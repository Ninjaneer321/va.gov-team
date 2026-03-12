# Michigan Cutover Weekend Communication & Coordination Plan - WIP
**Go-Live Date:** April 11, 2025 | **Anticipated all clear:** 7:00 AM ET

---

## Communication Channels

### Primary Internal Channel
**Slack: `#mhv-april-go-live-tiger-team`**
This is the primary channel for internal OCTO/VA.gov team coordination throughout the cutover weekend. All task updates, status confirmations, and issue escalations should be posted here.

### Oracle Health/EHRM Bridge Line (External)
A team member representative (to be determined) will be invited to the Oracle-led bridge line. OCTO is finalizing who will liaise via this external channel.

---

## Communication Protocol: How to Report Task Status

For every task listed below, the responsible team member should post **two updates** in `#mhv-april-go-live-tiger-team`:

1. **▶️ STARTED** — Post when you begin executing a task
   > Example: `▶️ STARTED | T-0 | Running sign-up service job for Michigan SM patients | [Name]`

2. **✅ COMPLETE** — Post when the task is fully finished and confirmed
   > Example: `✅ COMPLETE | T-0 | Sign-up service job done. is_messageable flag verified set for Michigan patients | [Name]`

If a task encounters a problem or delay, post immediately:
> `🚨 ISSUE | T-0 | [Brief description of problem] | [Name] — escalating to [contact]`

For tasks that also need to be reported out on the **Oracle bridge line**, the person responsible should post in Slack first, then coordinate with POC to report on the bridge line.

---

## Weekend Task Schedule & Coordination Touchpoints

### April 10 (T-1)

| Time (ET) | Task | Team | Report In |
|---|---|---|---|
| **2:00 PM** | Discontinue RX data refresh (must happen before facility changes RX to discontinued at 7 PM) | VA.gov/OCTO | Slack |
| **6:00 PM** | Vista downtime begins; facility discharges patients from Vista. Monitor for confirmation. | Oracle/Facility | Bridge line → Slack |
| **6:45 PM** | NPI flag switches from Vista to Millennium | Oracle Health| Bridge line → Slack |
| **7:00 PM** | **All interfaces flip from Vista to Millennium**; site goes to downtime/paper charting procedures. NPI flag confirmed set. 200CRNR field expected to be set. Await confirmation before triggering dependent VA.gov tasks. | Oracle Health| Bridge line → Slack |
| **7:15 PM** | *(Dependent on 200CRNR field being set)* Run sign-up service job for all Michigan SM patients who have accepted terms of use | OCTO | Slack + Bridge line |
| **7:15 PM** | Validate is_messageable flag is set for Michigan patients | OCTO | Slack + Bridge line |

---

### April 11 (T-0)

This is the highest-coordination period. All updates go to Slack **and** the Oracle Health/ EHRM Bridge line as appropriate.

| Time (ET) | Task | Team | Report In |
|---|---|---|---|
| **12:15 AM** | Activate Oracle Health triage groups | SM API | Slack |
| **7:00 AM** | **ALL CLEAR — Go-live confirmed** | Oracle Health| Bridge line → Slack |
| **7:00 AM** | Disable clinicians in SM Clinician portal | OCTO | Slack |
| **7:00 AM** | Update medication statuses to "transferred" in VA.gov database so Oracle Health medications populate in UI | Rx API | Slack |
| **8:00 AM onward** | Perform final PHR VPR extract (full PHR refresh) on all Active MHV Patients from the site and load into Evault. | MR API | Slack |

**⚠️ Key Dependency Note:** The VA.gov sign-up service job and Is_Messageable flag tasks **cannot begin until the 200CRNR field is confirmed set**. Monitor the Bridge Line and Slack for this confirmation. If there is any timing discrepancy (previous information suggested it might not be set until 10:00 AM April 11), this needs to be escalated immediately.

---

## Validation

Once the interface is live, a production validation step is required to officially mark VA.gov as **"Operational"** in the Oracle cutover dashboard. This is tracked in the Oracle cutover plan as a "Production Validation" step.

- VA.gov/OCTO will use **trusted users** (VA staff who are also veterans at Michigan facilities - already identified) to validate that the experience is working as expected after go-live
- Once validated, report **✅ VALIDATED — VA.gov operational** in Slack and on the bridge line
- Larry Thorne can assist with tagging this step in the Oracle cutover plan so it reflects as validated on the dashboard

---


