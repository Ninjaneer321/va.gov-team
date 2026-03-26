# Failure Notification Email Visibility for VA Employees Release Plan
Originally created as a [Slack canvas](https://dsva.slack.com/docs/T03FECE8V/F0A52LVSSMQ) for better visibility and gathering feedback.

## Staging Testing Completed
1. Prepare `DecisionReviewNotificationAuditLog` records:
    1. :white_check_mark: Set up failure notification emails to go out (one for each template, using my email) by clearing the `failure_notification_sent_at` field on the `AppealSubmission` and `AppealSubmissionUploads` and ensuring the linked `SavedClaim` has an error in the correct place in the metadata field
        1. See script `failure_notif_email_pdfs_staging_test.rb` at bottom of doc
    2. :white_check_mark: Run the FailureNotificationEmailJob and validate creation of DecisionReviewNotificationAuditLogs (6: one for each type of template)
        1. [Datadog logs showing emails queued](https://vagov.ddog-gov.com/logs?query=env%3Aeks-staging%20DecisionReviews%5C%3A%5C%3AFailureNotificationEmailJob%5C%20%2A%5C%20email%5C%20queued&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&link_source=monitor_notif&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1766379600000&to_ts=1766456187965&live=false)
        2. Datadog logs showing [evidence](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-staging%20%40payload.context.callback_klass%3A%22DecisionReviews%3A%3AEvidenceNotificationCallback%22&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice%2C%40payload.context.notification_id&fromUser=true&graphType=flamegraph&link_source=monitor_notif&messageDisplay=inline&refresh_mode=sliding&sort=time&spanID=4048808207350769942&storage=hot&stream_sort=time%2Cdesc&viz=stream&from_ts=1764687140351&to_ts=1764773540351&live=true) callbacks, [form](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-staging%20%40payload.context.callback_klass%3A%22DecisionReviews%3A%3AFormNotificationCallback%22&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice%2C%40payload.context.notification_id&graphType=flamegraph&link_source=monitor_notif&messageDisplay=inline&refresh_mode=paused&sort=time&spanID=4048808207350769942&storage=hot&stream_sort=time%2Cdesc&viz=stream&from_ts=1766379600000&to_ts=1766456234232&live=false) callbacks for emails all successfully delivered
2. With `decision_review_upload_notification_pdfs_enabled` feature flag off 
    1. :white_check_mark: Job should not process any emails
3. With `decision_review_upload_notification_pdfs_enabled` feature flag on
    1. :white_check_mark: Job should not process any emails prior to cutoff date
    2. :white_check_mark: Job should process emails after cutoff date
    3. :white_check_mark: Job should reprocess any emails that initially failed to upload 
        1. Logs for first run of job, showing a couple of initial [failures](https://vagov.ddog-gov.com/logs?query=env%3Aeks-staging%20%40named_tags.jid%3A3244369d28b8751ee0dc8bf4&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&link_source=monitor_notif&messageDisplay=inline&refresh_mode=sliding&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1766367262774&to_ts=1766453662774&live=true) (reason for failure: ICN of the staging user does not correspond to a valid user in VBMS UAT)  
        2. Logs for [second job run ](https://vagov.ddog-gov.com/logs?query=env%3Aeks-staging%20DecisionReviews%5C%3A%5C%3AUploadNotificationPdfsJob%2A%20%40named_tags.jid%3A48e109682ab523252f4ce7c2&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&link_source=monitor_notif&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1766379600000&to_ts=1766456263001&live=false)
    4. :white_check_mark: Metrics should be updated appropriately
        1. Show all three job runs with correct metric counts (3rd job run had no logs, only metric counts, since there were no more outstanding emails) 
            1. Individual upload [success](https://vagov.ddog-gov.com/metric/explorer?fromUser=true&graph_layout=stacked&start=1766452200000&end=1766455680000&paused=true#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YPV48mg4GFBOIjgSwpmeY05wHhBoTvJQgrPzi8saeJnZGhrAAFQ8zRj1mfgiCAAUAJQgPAC6VFc7jwmFC4WBqlBGBipXif0BIDaWDQOVA8gwqIQCBySRwMCcmTBo0yiTQojgTjkimU6XJUDJFKc9CYylW7kxf34I3m2CpClx5JESgBPD4SPm4gAwlJhDAUCJQWgeEA)
            2. Individual upload [failure](https://vagov.ddog-gov.com/metric/explorer?fromUser=false&graph_layout=stacked&start=1766452224687&end=1766455824687&paused=false#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YPV48mg4GFBOIjgSwpmeY05wHhBoTvJQgrPzi8uCGPt4RsAAVDzNGPWZ+CIIABQAlCA8ALpUVzuPCYULhIGqEEYGKleK-AEgNpYNA5UDyDAohAIHJJHAwJyZUGjTKJNCiOBOOSKZTpMlQUnkpz0JjKVbuDG-fgjebYSkKHFkkRKf48PiI+biADCUmEMBQIhBaB4QA)
            3. [Overall success count](https://vagov.ddog-gov.com/metric/explorer?fromUser=false&graph_layout=stacked&start=1766452224687&end=1766455824687&paused=false#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YPV48mg4GFBOIjgSwpmeY05wHhBoTvJQgvUaeJnZGvWZ+CIIwABUPCA8ALpUru54mKHhn6rfDAxUrxF7vEBtLBoHKgeQYaEIBA5JI4GBOTI-UaZRJoURwJxyRTKdK4qA4vFOehMZSrdzwl78EbzbAEhTI3EiJRvHh8CHzcQAYSkwhgKBE3zQPCAA)
            4. [Overall failure count](https://vagov.ddog-gov.com/metric/explorer?fromUser=false&graph_layout=stacked&start=1766452164687&end=1766455764687&paused=false#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YPV48mg4GFBOIjgSwpmeY05wHhBoTvJQgvWCGPt4Rk6Z+CIIwABUPCA8ALpUru54mKHhn6rfDAxUrxF7vEBtLBoHKgeQYaEIBA5JI4GDXH6jTKJNCiOBOOSKZTpHFQbG4pz0JjKVbueEvfgjebYfEKZE4kRKN48PgQ+biADCUmEMBQIm+aB4QA)
            5. [No pending uploads](https://vagov.ddog-gov.com/metric/explorer?fromUser=false&graph_layout=stacked&start=1766452164687&end=1766455764687&paused=false#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YPV48mg4GFBOIjgSwpmeY05wHhBoTvJQgvWrh3AiUKIwTnMLSxrAAFQ8zRj1mfgiCAAUAJQgHgAXSornceEwoXCYNUEIwMVK8UBIJAbSwaByoHkGAxCAQOSSOBumUho0yiTQojgTjkimU6UpUApVKc9CYylW7hxgP4I3m2BpCgJlJESmBPD4qPm4gAwlJhDAUCIIWgeEA)
            6. [Upload job started](https://vagov.ddog-gov.com/metric/explorer?fromUser=false&graph_layout=stacked&start=1766452164687&end=1766455764687&paused=false#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YPV48mg4GFBOIjgSwpmeY05wHhBoTvJQgvVtGNoIcFDAAFQ8zRj1mfgiCAAUAJQgPAC6VK7uPCYULhAGqIEYGKleLfP4gNpYNA5UDyDBIhCXZRQHAwJyZYGjTKJNCiOBOOSKZTpElQYmkpz0JjKVbuNHffgjebYckKHIgEkiJS-Hh8eHzcQAYSkwhgKBEQLQPCAA)
4. :white_check_mark: Added [Datadog monitor](https://vagov.ddog-gov.com/monitors/489285?display_mode=sourceData&from_ts=1766173484329&to_ts=1766778284329&live=true) for new job (for initial rollout, we'll likely want to manually verify each upload made it to the Veteran's eFolder successfully) 
    1. Example alert triggered after second round of staging testing [here](https://dsva.slack.com/archives/C05UPRR0HK3/p1767904036501049)


## Remaining TO-DOs
* :white_check_mark: Determine whether feedback received from Sara Cooney needs to be addressed prior to release
* :white_check_mark: Determine when the cutoff date should be (so we only upload PDF copies of emails sent on that day & moving forward, not all historical emails). Who do we need sign-off from?
    * :white_check_mark: Get stakeholders to look at the test email PDFs uploaded to VBMS UAT to see if they have any additional feedback for us (e.g. re: the format of the filename)
    * We've already validated silent failure remediation steps with the Contact Center and @Amy Lai has shared that info with the VBA to confirm that we've taken all the steps we can take to contact the Veteran or Claimant when a submission error occurs, so a claims processor does not need to take any action upon seeing these PDFs in VBMS. 

### Requires PR/code changes:
* :white_check_mark: Address PDF template feedback from VBA OBA
<img width="883" height="268" alt="image" src="https://github.com/user-attachments/assets/a4d2a97d-b7eb-408f-b34d-67bac567b72c" />
* :white_check_mark: Address feedback on VBMS document title format

<img width="1065" height="206" alt="image" src="https://github.com/user-attachments/assets/8fa44652-daa2-4020-a0e6-0a30d5f006c2" />
<img width="895" height="315" alt="image" src="https://github.com/user-attachments/assets/5c7dda65-385e-4075-a192-b0abfd3f6a8e" />

* :white_check_mark: Update name of StatsD metric: currently using "decision_reviews", e.g. `vets_api.statsd.worker_decision_reviews_upload_notification_email_pdfs_started`, while our other ones use "decision_review", e.g. `vets_api.statsd.worker_decision_review_saved_claim_sc_status_updater_status`
    * See following DD metric links (no examples of failed uploads during second round of staging testing):
        * [Individual upload success](https://vagov.ddog-gov.com/metric/explorer?fromUser=true&graph_layout=stacked&start=1767848400000&end=1767904601218&paused=true#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YE548mg4GFBOIjgSwpmeY05wHhBoTvJQgvVzC0tpeJnZGhrAAFQ8zRj1mfgiCAAUAJQgPAC6VFc7jwmFC4WBqlBGBipXif0BIDaWDQOVA8gwqIQCBySRwMCcmTBo0yiTQojgTjkimU6XJUDJFKc9CYylW7kxf34I3m2CpClx5JESgBPD4SPm4gAwlJhDAUCJQWgeEA)
        * [Overall success count](https://vagov.ddog-gov.com/metric/explorer?fromUser=true&graph_layout=stacked&start=1767848400000&end=1767904656726&paused=true#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YE548mg4GFBOIjgSwpmeY05wHhBoTvJQgvUaeJnZGvWZ+CIIwABUPCA8ALpUru54mKHhn6rfDAxUrxF7vEBtLBoHKgeQYaEIBA5JI4GBOTI-UaZRJoURwJxyRTKdK4qA4vFOehMZSrdzwl78EbzbAEhTI3EiJRvHh8CHzcQAYSkwhgKBE3zQPCAA)
        * [Upload job started](https://vagov.ddog-gov.com/metric/explorer?fromUser=false&graph_layout=stacked&start=1766452164687&end=1766455764687&paused=false#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM1gbgDWOk4CmRAakiJORhV6YPV48mg4GFBOIjgSwpmeY05wHhBoTvJQgvVtGNoIcFDAAFQ8zRj1mfgiCAAUAJQgPAC6VK7uPCYULhAGqIEYGKleLfP4gNpYNA5UDyDBIhCXZRQHAwJyZYGjTKJNCiOBOOSKZTpElQYmkpz0JjKVbuNHffgjebYckKHIgEkiJS-Hh8eHzcQAYSkwhgKBEQLQPCAA)
* :white_check_mark: Update the cutoff date to not be hardcoded, so that we can update it freely without a code change
* :white_check_mark: Add uppercased version of `currentVersionUuid` of generated PDF to logs to make it easy to search for the uploaded PDF in VBMS without logging any PHI. (What we are currently logging as file_uuid from a successful upload response is not directly searchable in VBMS; see screenshots below.) 
    * See [Datadog logs](https://vagov.ddog-gov.com/logs?query=env%3Aeks-staging%20DecisionReviews%5C%3A%5C%3AUploadNotificationPdfsJob%2A&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&link_source=monitor_notif&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1767848400000&to_ts=1767903964439&live=false) after code changes were implemented; now includes a [document_id field](https://vagov.ddog-gov.com/logs?query=env%3Aeks-staging%20DecisionReviews%5C%3A%5C%3AUploadNotificationPdfsJob%2A&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&event=AwAAAZufSIsG0RXuIgAAABhBWnVmU0prQUFBREtIZjlzUE9obkJRQUMAAAAkMDE5YjlmNGEtNGFhNC00MzUxLTk2NzEtMDQ4YTY4NTc2NjdjAADDMQ&fromUser=true&link_source=monitor_notif&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1767848400000&to_ts=1767903964439&live=false) that can be used to look up the PDF directly in VBMS
    * **POST-RELEASE NOTE:** We found out that search by `document_id` is only supported in VBMS UAT at the moment, so we used Veteran ICN/SSN to verify uploads.
<img width="1194" height="342" alt="image" src="https://github.com/user-attachments/assets/fb8e303f-07b3-41a8-8a60-d1e471446882" />


### VBMS UAT Search screenshots
<img width="1150" height="68" alt="image" src="https://github.com/user-attachments/assets/72ad1e11-db41-4b34-a8c5-872f67eea417" />
<img width="742" height="394" alt="image" src="https://github.com/user-attachments/assets/d347ddc2-c636-4e15-9a6a-6532a72785c7" />
<img width="1338" height="910" alt="image" src="https://github.com/user-attachments/assets/5b9ca12a-4db8-4ca2-ad5f-3e4a08a36d46" />
<img width="1956" height="716" alt="image" src="https://github.com/user-attachments/assets/7a56a68a-f423-4e9a-a98e-35880b1c660e" />


## Production Release Plan
### Overview

The functionality in question is a new Sidekiq job, `UploadNotificationPdfsJob`, that generates PDF copies of the notification emails we send to Veterans when their Decision Review form or evidence submission fails to upload to VBMS. For more detail, see the full technical writeup [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/engineering/2025_12_16_va_notify_failure_notification_email_copies_to_efolder_updated.md). 
The job is scheduled to run after each daily run of our `FailureNotificationEmailJob` at 12:05AM ET, which queues the emails to be sent by VANotify, at 12:30AM ET.* 

Note that a staged rollout is not required for this feature according to the [release plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md), since:

* This change does not add substantial new functionality to VA.gov
* This change does not impact user flows through tasks
* This change does not affect traffic to backend services*

* _Our `FailureNotificationEmailJob` typically finishes within a minute since the volume of emails we send is so low. Even for anomalous situations like the Nov 18th CMP failure, where we sent 700 emails (~100x our normal volume of <10 emails per day), the job finished by 12:14AM, so scheduling the new job for 12:30AM should give plenty of time for the FailureNotificationEmailJob to finish (a potential concern since both jobs cause writes to the same database table, `DecisionReviewNotificationAuditLog`). It also means that the volume of traffic we're adding to the Claims Evidence API (for uploading the PDFs to VBMS) should be low enough to be basically insignificant. _

### Step by Step
* :white_check_mark: Determine from what date we'd like to start uploading copies of failure notification email PDFs. Target date: February 10th 
    * Update the cutoff date env variable in AWS param store to reflect this date:
        * `/dsva-vagov/vets-api/prod/env_vars/decision_review/email_pdf_upload_cutoff_date` 
* :white_check_mark: Determine the release date with the enablement team. (When we actually want to turn on the job) Target date: February 10th 
    *   Note that the job runs at 12:30AM ET. 
* :white_check_mark: The day of the release date:
    * :white_check_mark: Update the Datadog monitor query to use `env:eks-prod`
    * :white_check_mark: Enable the following feature flag in production by going to Flipper: `decision_review_upload_notification_pdfs_enabled`
    * :white_check_mark: Notify Sara Cooney & Andrew Gray of release (via email)
* :white_check_mark: On day after the release date:
    * We should see an alert in the #benefits-decision-reviews-notifications for a successful run of the UploadNotificationPdfsJob . Pull the document_ids from the logs and ask an enablement team member with production VBMS access to search for them in VBMS to validate the emails were uploaded successfully.
    * Based on initial results, determine how many emails/how many days we'd like to verify in VBMS before switching to a more typical monitoring pattern (see below).
* :white_check_mark: Monitor until we’ve seen all 6 unique email templates come through successfully 
    * This will require the enablement team/someone with production VBMS access to look up the generated PDFs
    * :white_check_mark: SC-form
    * :white_check_mark: SC-secondary-form (4142)
    * :white_check_mark: SC-evidence
    * :white_check_mark: HLR-form
    * :white_check_mark: NOD-form
    * :white_check_mark: NOD-evidence

### POST-RELEASE enhancements
* :white_check_mark: Reach out to Platform to ask for guidance on stamping the submission date/time on documents we upload (per Amy’s suggestion [here](https://dsva.slack.com/archives/C05UPRR0HK3/p1771544441351999?thread_ts=1770874306.930989&cid=C05UPRR0HK3))
    * Platform thread [here](https://dsva.slack.com/archives/CBU0KDSB1/p1772125318502139), confirmed no additional action needed [here](https://dsva.slack.com/archives/C05UPRR0HK3/p1773104797654209?thread_ts=1770874306.930989&cid=C05UPRR0HK3)
  * Upload this canvas to Github 
* Switch to monitoring focused on failures rather than verification ([#137578](https://github.com/department-of-veterans-affairs/va.gov-team/issues/137578))
    * Individual failures
    * Job not running
    * When we have failure notification emails queued but no pending PDF uploads? 
    * When a pdf upload fails continuously and hits the max retry count (would require code change to include new log to alert on)
* Remove feature flag ([#128822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128822))

<details>
  <summary>Script for prepping staging test data: failure_notif_email_pdfs_staging_test.rb</summary>
  
  ```  
  # Run this in the staging Rails console
  
  puts "🚀 Preparing staging test data for UploadNotificationPdfsJob..."
  
  # ⚠️ UPDATE THIS TO YOUR EMAIL
  YOUR_EMAIL = "gxu@kindsys.us"
  
  # Your identified staging records
  APPEAL_SUBMISSION_IDS = {
    hlr: 730,
    nod: 731,
    sc: 864
  }
  
  APPEAL_SUBMISSION_UPLOAD_IDS = {
    sc: 270,   # Associated with AppealSubmission 864
    nod: 256   # Associated with AppealSubmission 820 - needs email update
  }
  
  SECONDARY_FORM_ID = 150  # Associated with AppealSubmission 864 (SC)
  
  # AppealSubmission 820 needs email update for upload 256
  NOD_UPLOAD_APPEAL_SUBMISSION_ID = 820
  
  puts "\n📋 Step 1: Fetching existing records..."
  
  # Fetch AppealSubmissions
  appeal_submissions = {
    hlr: AppealSubmission.find(APPEAL_SUBMISSION_IDS[:hlr]),
    nod: AppealSubmission.find(APPEAL_SUBMISSION_IDS[:nod]),
    sc: AppealSubmission.find(APPEAL_SUBMISSION_IDS[:sc])
  }
  
  # Fetch AppealSubmissionUploads
  uploads = {
    sc: AppealSubmissionUpload.find(APPEAL_SUBMISSION_UPLOAD_IDS[:sc]),
    nod: AppealSubmissionUpload.find(APPEAL_SUBMISSION_UPLOAD_IDS[:nod])
  }
  
  # Fetch SecondaryAppealForm
  secondary_form = SecondaryAppealForm.find(SECONDARY_FORM_ID)
  
  # Fetch AppealSubmission 820 for NOD upload email update
  nod_upload_submission = AppealSubmission.find(NOD_UPLOAD_APPEAL_SUBMISSION_ID)
  
  puts "   ✅ Found #{appeal_submissions.count} AppealSubmissions"
  puts "   ✅ Found #{uploads.count} AppealSubmissionUploads"
  puts "   ✅ Found SecondaryAppealForm #{secondary_form.id}"
  
  puts "\n👤 Step 2: Collecting UserAccount and ICN details for VBMS folder verification..."
  
  # Helper method to get MPI profile for ICN lookup
  def get_mpi_profile_with_icn(icn)
    return nil if icn.blank?
    
    begin
      response = MPI::Service.new.find_profile_by_identifier(
        identifier: icn,
        identifier_type: MPI::Constants::ICN
      )&.profile
      response
    rescue => e
      puts "   ⚠️  MPI lookup failed for ICN #{icn}: #{e.message}"
      nil
    end
  end
  
  # Collect all unique AppealSubmissions for UserAccount/ICN lookup
  all_submissions = appeal_submissions.values + [nod_upload_submission]
  unique_submissions = all_submissions.uniq(&:id)
  
  user_account_details = {}
  
  unique_submissions.each do |submission|
    user_account = submission.user_account
    icn = user_account&.icn
   
    next if user_account_details.key?(user_account&.id)
  
    mpi_profile = get_mpi_profile_with_icn(icn) if icn.present?
  
    user_account_details[user_account&.id] = {
      user_account_id: user_account&.id,
      icn: icn,
      mpi_given_names: mpi_profile&.given_names,
      mpi_family_name: mpi_profile&.family_name,
      appeal_submission_ids: []
    }
  end
  
  # Map submissions to user accounts
  unique_submissions.each do |submission|
    user_account_id = submission.user_account&.id
    user_account_details[user_account_id][:appeal_submission_ids] << submission.id if user_account_details[user_account_id]
  end
  
  puts "\n📊 UserAccount/ICN Details for VBMS Folder Verification:"
  puts "=" * 70
  user_account_details.each do |user_account_id, details|
    puts "   UserAccount ID: #{details[:user_account_id]}"
    puts "   ICN: #{details[:icn]}"
    puts "   MPI Name: #{details[:mpi_given_names]&.join(' ')} #{details[:mpi_family_name]}"
    puts "   AppealSubmission IDs: #{details[:appeal_submission_ids].join(', ')}"
    puts "   VBMS Folder Identifier: VETERAN/ICN/#{details[:icn]}"
    puts "-" * 70
  end
  
  puts "\n📧 Step 3: Updating email addresses in SavedClaims..."
  
  # Helper method to update email in SavedClaim
  def update_saved_claim_email(appeal_submission, email)
    saved_claim = SavedClaim.find_by(guid: appeal_submission.submitted_appeal_uuid)
    
    unless saved_claim
      puts "   ⚠️  No SavedClaim found for AppealSubmission #{appeal_submission.id}"
      return false
    end
    
    form_data = JSON.parse(saved_claim.form)
    
    # Update email in the veteran data
    if form_data.dig('data', 'attributes', 'veteran')
      form_data['data']['attributes']['veteran']['email'] = email
    elsif form_data.dig('veteran')
      form_data['veteran']['email'] = email
    else
      puts "   ⚠️  Could not find veteran email path in SavedClaim #{saved_claim.id}"
      return false
    end
    
    saved_claim.update!(form: form_data.to_json)
    puts "   ✅ Updated email for SavedClaim #{saved_claim.id} (#{saved_claim.type})"
    true
  end
  
  # Update emails for all AppealSubmissions
  appeal_submissions.each do |type, submission|
    update_saved_claim_email(submission, YOUR_EMAIL)
  end
  
  # Update email for AppealSubmission 820 (for NOD upload)
  update_saved_claim_email(nod_upload_submission, YOUR_EMAIL)
  
  puts "\n⚠️  Step 4: Setting up error conditions in SavedClaim metadata..."
  
  # Helper method to set form error in SavedClaim metadata
  def set_form_error_metadata(appeal_submission)
    saved_claim = SavedClaim.find_by(guid: appeal_submission.submitted_appeal_uuid)
    return false unless saved_claim
    
    metadata = JSON.parse(saved_claim.metadata || '{}')
    metadata['status'] = 'error'
    metadata['error_message'] = 'Test error for UploadNotificationPdfsJob staging test'
   
    saved_claim.update!(metadata: metadata.to_json, delete_date: nil)
    puts "   ✅ Set form error metadata for SavedClaim #{saved_claim.id}"
    true
  end
  
  # Helper method to set evidence upload error in SavedClaim metadata
  def set_evidence_error_metadata(appeal_submission, upload)
    saved_claim = SavedClaim.find_by(guid: appeal_submission.submitted_appeal_uuid)
    return false unless saved_claim
    
    metadata = JSON.parse(saved_claim.metadata || '{}')
    
    # Add or update uploads array with error status
    uploads_metadata = metadata['uploads'] || []
    
    # Remove existing entry for this upload if present
    uploads_metadata.reject! { |u| u['id'] == upload.lighthouse_upload_id }
    
    # Add error entry
    uploads_metadata << {
      'id' => upload.lighthouse_upload_id,
      'status' => 'error',
      'detail' => 'Test evidence error for UploadNotificationPdfsJob staging test',
      'createDate' => upload.created_at.iso8601,
      'updateDate' => Time.current.iso8601
    }
    
    metadata['uploads'] = uploads_metadata
    
    saved_claim.update!(metadata: metadata.to_json, delete_date: nil)
    puts "   ✅ Set evidence error metadata for upload #{upload.lighthouse_upload_id} in SavedClaim #{saved_claim.id}"
    true
  end
  
  # Set form errors for each AppealSubmission (for form failure emails)
  appeal_submissions.each do |type, submission|
    set_form_error_metadata(submission)
  end
  
  # Set evidence errors for uploads
  uploads.each do |type, upload|
    submission = upload.appeal_submission
    set_evidence_error_metadata(submission, upload)
  end
  
  puts "\n📄 Step 5: Setting up SecondaryAppealForm error status..."
  
  # Set error status on secondary form
  secondary_form.update!(
    status: { 
      'status' => 'error', 
      'detail' => 'Test secondary form error for UploadNotificationPdfsJob staging test',
      'updated_at' => Time.current.iso8601,
      'final_status' => true
    }.to_json,
    failure_notification_sent_at: nil,
    delete_date: nil
  )
  puts "   ✅ Set error status for SecondaryAppealForm #{secondary_form.id}"
  
  puts "\n🔄 Step 6: Clearing failure_notification_sent_at timestamps..."
  
  # Clear timestamps to allow failure notifications to be sent
  appeal_submissions.values.each do |submission|
    submission.update!(failure_notification_sent_at: nil)
    puts "   ✅ Cleared failure_notification_sent_at for AppealSubmission #{submission.id}"
  end
  
  uploads.values.each do |upload|
    upload.update!(failure_notification_sent_at: nil)
    puts "   ✅ Cleared failure_notification_sent_at for AppealSubmissionUpload #{upload.id}"
  end
  
  puts "\n🔍 Step 7: Verification..."
  
  # Verify the job will pick up these records
  job = DecisionReviews::FailureNotificationEmailJob.new
  
  begin
    submissions_to_process = job.send(:submissions)
    uploads_to_process = job.send(:submission_uploads)
    secondary_forms_to_process = job.send(:permanently_errored_secondary_forms)
    
    puts "\n📊 FailureNotificationEmailJob will process:"
    puts "   - #{submissions_to_process.count} form submissions"
    submissions_to_process.each do |s|
      icn = s.user_account&.icn
      puts "     • AppealSubmission #{s.id} (#{s.type_of_appeal})"
      puts "       Email: #{s.current_email_address}"
      puts "       ICN: #{icn}"
      puts "       VBMS Folder: VETERAN/ICN/#{icn}"
    end
    
    puts "   - #{uploads_to_process.count} evidence uploads"
    uploads_to_process.each do |u|
      submission = u.appeal_submission
      icn = submission.user_account&.icn
      puts "     • Upload #{u.lighthouse_upload_id} (AppealSubmission #{submission.id})"
      puts "       ICN: #{icn}"
      puts "       VBMS Folder: VETERAN/ICN/#{icn}"
    end
    
    puts "   - #{secondary_forms_to_process.count} secondary forms"
    secondary_forms_to_process.each do |f|
      submission = f.appeal_submission
      icn = submission.user_account&.icn
      puts "     • SecondaryAppealForm #{f.id} (AppealSubmission #{submission.id})"
      puts "       ICN: #{icn}"
      puts "       VBMS Folder: VETERAN/ICN/#{icn}"
    end
    
  rescue => e
    puts "   ❌ Error during verification: #{e.message}"
  end
  
  puts "\n" + "=" * 70
  puts "✅ STAGING TEST DATA PREPARATION COMPLETE"
  puts "=" * 70
  
  puts "\n📝 Next Steps:"
  puts "1. Enable the Flipper flags if not already enabled:"
  puts "   Flipper.enable(:decision_review_failure_notification_email_job_enabled)"
  puts "   Flipper.enable(:decision_review_upload_notification_pdfs_enabled)"
  puts ""
  puts "2. Run the FailureNotificationEmailJob to send failure emails:"
  puts "   DecisionReviews::FailureNotificationEmailJob.perform_async"
  puts ""
  puts "3. Wait for VA Notify callbacks to update notification statuses"
  puts "   (or manually trigger callbacks if testing locally)"
  puts ""
  puts "4. Verify DecisionReviewNotificationAuditLog records were created:"
  puts "   DecisionReviewNotificationAuditLog.where('created_at >= ?', 1.hour.ago).count"
  puts ""
  puts "5. Run the UploadNotificationPdfsJob:"
  puts "   DecisionReviews::UploadNotificationPdfsJob.perform_async"
  puts ""
  
  puts "\n📋 Expected Results:"
  puts "You should see DecisionReviewNotificationAuditLog records with references like:"
  puts "   - HLR-form-<uuid>       (from AppealSubmission #{APPEAL_SUBMISSION_IDS[:hlr]})"
  puts "   - NOD-form-<uuid>       (from AppealSubmission #{APPEAL_SUBMISSION_IDS[:nod]})"
  puts "   - SC-form-<uuid>        (from AppealSubmission #{APPEAL_SUBMISSION_IDS[:sc]})"
  puts "   - SC-evidence-<uuid>    (from AppealSubmissionUpload #{APPEAL_SUBMISSION_UPLOAD_IDS[:sc]})"
  puts "   - NOD-evidence-<uuid>   (from AppealSubmissionUpload #{APPEAL_SUBMISSION_UPLOAD_IDS[:nod]})"
  puts "   - SC-secondary_form-<uuid> (from SecondaryAppealForm #{SECONDARY_FORM_ID})"
  
  puts "\n🔍 VBMS Folder Verification:"
  puts "After UploadNotificationPdfsJob runs, PDFs should be uploaded to:"
  user_account_details.each do |_, details|
    puts "   ICN #{details[:icn]} → Folder: VETERAN/ICN/#{details[:icn]}"
    puts "      (#{details[:mpi_given_names]&.join(' ')} #{details[:mpi_family_name]})"
  end
  
  puts "\n📊 To verify uploads after job completes:"
  puts <<~VERIFY
    DecisionReviewNotificationAuditLog
      .where('created_at >= ?', 1.hour.ago)
      .pluck(:reference, :vbms_file_uuid, :pdf_uploaded_at, :pdf_upload_error)
  VERIFY
  ```
</details>
