## VA Notify query to obtain email addresses (for business assistance outreach per our ZSF Procedure)

The Health Apps team received alerts of "Triggered: 1010CG submission job has failed due to record parse error".  
- This was caused by a mismatch between VA.gov and MuleSoft/CARMA, due to a CARMA update that unintentionally removed file types.  Any online 10-10CG submission that included an attachment would fail
- However the user did not see this failure, they saw the Confirmation page as successful.  They would then receive an email that the submission did not go through and they would need to submit again.
- Because the submission was initially "successful", we do not store the data input.  Therefore, we cannot retrieve any contact information in the PersonalInformationLog (PIL) so that the Veteran may be assisted.
- We reached out to VA Notify to see if there would be a way to pull email addresses for those that received a submission failure email.
- The response is below:

>Ok, here are some options for retrieval, depending on what information is available to you (notification ids vs template ids), access to ARGO (prod) (support can help if no one on your team has access). Fair warning, this does reveal PII:
>
>1. In ARGO (prod) Using the notification_id from the callbacks, could query VANotify::Notification.find(notification_id) and then call #to on an instance to observe the email address. Obviously, this is considered PII (the field is automatically decrypted when you view it this way)
>2. If notification_ids are not at your disposal, in ARGO (prod) could use a template_id and date in a permutation of this SQL query:
>
>`VANotify::Notification
>  .where(template_id: YOUR_TEMPLATE_ID_HERE, created_at: Date.parse('SOME_DATE_HERE').all_day)
>  .where(status: ['permanent-failure', 'temporary-failure'])
>  .pluck(:status, :status_reason, :sent_at, :completed_at, :updated_at)`
>
>Note: Would need to also be selective about the fields plucked/retrieved (or omit plucking all together).

The Health Apps team determined this query would work best for our purpose of getting email addresses for those that this submission failure email went out:
- `VANotify::Notification.where(template_id: 'cbf99a1c-8a9e-41c5-af7d-c3bd6a927588').where('created_at > ?', Date.new(2026,2,23)).map(&:to)`
- For a second batch of emails, we used the list of `notification_id`s from the logs instead:
- `VANotify::Notification.where(template_id: 'cbf99a1c-8a9e-41c5-af7d-c3bd6a927588', id: [ <list of notification_id values> ]).map(&:to)`
