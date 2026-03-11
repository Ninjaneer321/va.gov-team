# CCD design and flow

``` mermaid
sequenceDiagram
    actor Veteran
    participant vets-website
    participant vets-api
    participant SCDF

    Veteran ->> vets-website: clicks Download CDD button
    vets-website ->> vets-api: POST v2/cdd/generate
    vets-api ->> SCDF: GET /ccd/oracle-health
    SCDF ->> vets-api: returns { job_id }
    vets-api ->> SCDF: GET /ccd/oracle_health/jobs/#{job_id}
    SCDF ->> vets-api: returns { task_id }
    vets-api ->> vets-website: return { task_id }
    loop Every X seconds until status == done && signed_url exists
        note over vets-website: Shows spinner
        vets-website ->> vets-api: GET /v2/cdd/{task_id}
        vets-api ->> SCDF: GET /ccd/oracle_health/jobs/#{job_id}"
        SCDF ->> vets-api: returns { status, signed_rul}
        note over vets-api: stores signed_url in redis
    end

    note over vets-website: Shows download now button
    vets-website ->> vets-api: GET /v2/cdd/download/{job_id}
    note over vets-api: looks in redis for signed url, if not signed url, make SCDF api call
    vets-api <<->> S3: proxy to download file
    vets-api ->> vets-website: the file

```

## Points of Interests

- We are not doing notifciations yet until we need to see it happen
- Messing on the `Show Spinner` screen will let the users know its coming
- We need to figure out a `max wait time` and a `timeout` for the user experience. We don't want to leave the user hanging for too long, but we also don't want to timeout too early if the job is still processing.
