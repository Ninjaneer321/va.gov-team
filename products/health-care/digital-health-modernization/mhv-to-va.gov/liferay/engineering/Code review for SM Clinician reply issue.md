# Code review for SM Clinician reply issue
Used GH Copilot to conduct code review in Liferay repos for this issue [SM/Admin - Secure Messages Not Completing #138432](https://github.com/department-of-veterans-affairs/va.gov-team/issues/138432). Results are below.

---

Date: 2026-04-03  
Reported symptom window: Around 8:00 AM PST  
Scope: SM Clinician UI/controller review in mhv-sm-clinician-messagemgmt-portlet

## Summary
The reported behavior is consistent with two likely defects:
1. Front-end tab-state logic can incorrectly force logout/block send while user is active.
2. Reply finish flow can return success even when backend completion does not apply.

Result: user sees reply content saved, but message can remain in Inbox and require Complete again.

## Findings

### High: Tab-state cleanup bug can trigger false cross-wired/logout behavior
- localStorage tab tracking is cleaned with pop(currentPageType), but pop ignores arguments.
- Stale tab state can leave cannot-send latched true and trigger logout modal.
- This aligns with daily reports of being kicked out after short active sessions.

Evidence:
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/resources/js/sm-javascript.js](src/main/webapp/resources/js/sm-javascript.js#L2896)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/resources/js/sm-javascript.js](src/main/webapp/resources/js/sm-javascript.js#L2900)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/resources/js/sm-javascript.js](src/main/webapp/resources/js/sm-javascript.js#L2917)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/resources/js/sm-javascript.js](src/main/webapp/resources/js/sm-javascript.js#L2965)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/resources/js/sm-javascript.js](src/main/webapp/resources/js/sm-javascript.js#L2996)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/template/layoutSecureMessages.xhtml](src/main/webapp/template/layoutSecureMessages.xhtml#L22)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/template/layoutSecureMessages.xhtml](src/main/webapp/template/layoutSecureMessages.xhtml#L26)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/views/msgCrossWiredModal.xhtml](src/main/webapp/views/msgCrossWiredModal.xhtml#L36)

### High: Reply finish flow does not validate complete result before success return
- finishMessageDone calls completeIndividualMessage but does not check/act on completion result.
- Method still returns success to Inbox.
- This can produce the exact symptom: reply present, message not completed.

Evidence:
- [mhv-sm-clinician-messagemgmt-portlet/src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ReplyMessageController.java](src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ReplyMessageController.java#L533)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ReplyMessageController.java](src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ReplyMessageController.java#L567)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ReplyMessageController.java](src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ReplyMessageController.java#L598)

Reference behavior (direct complete checks result):
- [mhv-sm-clinician-messagemgmt-portlet/src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ViewMessageController.java](src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ViewMessageController.java#L183)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ViewMessageController.java](src/main/java/gov/va/med/mhv/sm/clinician/web/controller/ViewMessageController.java#L234)

### Medium: 401 send failures require manual recovery
- UI shows expired/invalid page message on 401.
- Token refresh exists, but failed send does not guarantee transparent replay.

Evidence:
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/resources/js/sm-javascript.js](src/main/webapp/resources/js/sm-javascript.js#L2082)
- [mhv-sm-clinician-messagemgmt-portlet/src/main/webapp/resources/js/sm-javascript.js](src/main/webapp/resources/js/sm-javascript.js#L2084)

## Recommended Actions

### Immediate
1. Fix processUnloadEvent tab removal logic to remove the actual current page type (not pop with arg).
2. In finishMessageDone, validate completeIndividualMessage result and block success return on failure.
3. Show explicit completion failure message and keep user in reply/finish context when complete fails.

### Hardening
1. Add structured logs/telemetry for finishMessageDone, completion outcome, and logoutModal trigger reason.
2. Add tests for:
- Reply finish success/failure paths.
- Multi-tab open/close lifecycle for reply/compose/view.
- 401/token-edge behavior during send/finish.

## Validation Plan
1. Reproduce multi-tab scenario and verify stale tab state no longer persists.
2. Simulate completeIndividualMessage false/exception and verify no false success.
3. Verify reply+complete transitions message from Inbox to expected folder consistently.

## Note
This is based on static code review; backend logs for the exact 8:00 AM PST event were not part of this pass.
