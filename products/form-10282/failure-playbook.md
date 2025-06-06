# Verify Your Enrollment Failure Playbook
_last updated: 2025-05-01_  

## Audience 
VEBT Team members responsible for monitoring Form 10282.

# Required access
```
- [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/dqp-kjk-hzs/form-10282-dashboard)
- Production rails console (in the event manual data lookup is needed)
```

# Failure Mode

Form 10282 is a education form like any other, and uses the same APIs and such as most every other education form (e.g. 1990, 1995, etc.) to get data from a user and store it in the database. The extra step that is needed of 10282 data is an asynchronous job that uploads the form data to an SFTP server. This is how the VA administrator(s) access and then process the form submissions. As this SFTP upload is an asynchronous process, it has the potential to fail. In the event of a failed upload, alerts and insights will be generated by the above datadog dashboard, Sentry, and the human VA administrator themselves (they check the SFTP server on a daily basis to grab the new submissions).

The main (likely only) failure mode is a failed upload, likely do to a network error (though the background job does try repeatedly with an exponential backoff before finally giving up). In this case, no data is lost or compromised. It's just a matter of finding why the upload failed and fixing it. In an extreme case where the upload problem proves difficult to solve, a developer with production access can still generate the necessary report and send it to the VA administrator via encrypted email.

# Steps

- Use [VYE dashboard](https://vagov.ddog-gov.com/dashboard/dqp-kjk-hzs/form-10282-dashboard) or Sentry or Sidekiq Admin to determine that `EducationForm::CreateDailyExcelFiles` has failed.
- Using the error tracking or stack trace, confirm that it was indeed the SFTP upload that failed. This is perhaps the only real failure mode, as it's the only place it needs to interact with an external system. If the job fails in another spot it's likely some sort of bug caused by a recent code change.
- Assuming it's the SFTP upload that failed, and that it's failed consistently, and intervention is needed; in order to get a list of affected users you'll need to get into a production rails console.
``` ruby
records = EducationBenefitsClaim
          .unprocessed
          .joins(:saved_claim)
          .where(
            saved_claims: {
              form_id: '22-10282'
            }
          )
```
- The above query will get you a list of the records that need to be compiled into a report and sent to the administrator.