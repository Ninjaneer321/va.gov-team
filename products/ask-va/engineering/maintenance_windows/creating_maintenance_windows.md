# Creating an AskVA maintenance window in Staging

> ### Before you begin
> The vets-api development, staging, sandbox, and production environments reside in EKS.
If you do not have not have terminal access, you must first fill out the [vets-api ArgoCD terminal access request form](https://depo-platform-documentation.scrollhelp.site/developer-docs/vets-api-on-eks#VetsAPIonEKS-Access).

## Steps to create a maintenance window

### Starting a Rails console session

1. Follow the steps outlined in the [VA Platform Developer Docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/vets-api-on-eks#VetsAPIonEKS-Access) for accessing your target environment (e.g. vets-api-staging) and starting a rails console session.

1. Make sure to log in using your regular Github account and not GHEC-US

1. Find the staging cluster and start a terminal session with `Exec`. Example:
<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/504c9888-01e4-4257-aa56-05664640e801" />
<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/b97a5c62-a284-4f10-a4e5-af38901eb59c" />


### Creating a maintenance window record

1. Use a standard rails console `bundle exec rails c`. Do not pass the `--sandbox` flag as this will not save the record.

1. You can use the syntax below to create a new record in the `maintenance_windows` table:
   ```ruby
     maintenance_window = MaintenanceWindow.create!(
       external_service: 'ask-va',
       start_time: Time.current,
       end_time: 15.minutes.from_now,
       description: 'AskVA maintenance window'
     )
   ```

1. Confirm the record persists:
   ```ruby
     MaintenanceWindow.exists?(maintenance_window.id)
     => true
   ```
   
   This creates a maintenance window record that `vets-api` can expose to VA.gov for banner display.

> [!NOTE]
> When manually inserting a record into the `maintenance_windows` tables, it will be cleared in 3 minutes or less. This
[cronjob](https://github.com/department-of-veterans-affairs/vets-api/blob/1a460cf00c953d34670553dbc44ddea0907b60d6/lib/periodic_jobs.rb#L185) polls PagerDuty and refreshes maintenance window state. This means manually inserted records may be removed regardless of the provided end time.
