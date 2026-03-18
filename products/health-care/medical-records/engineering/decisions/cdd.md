# CCD design and flow

``` mermaid
sequenceDiagram
    actor Veteran
    participant vets-website
    participant vets-api
    participant SCDF

    Veteran ->> vets-website: clicks "Generate {format} CCD" button
    note over vets-website: stores 
    vets-website ->> vets-api: GET v2/cdd/generate
    vets-api ->> SCDF: GET /ccd/oracle-health?patientId=1234&dates
    SCDF ->> vets-api: returns { job_guid }
    vets-api ->> vets-website: return { job_guid }
    loop Every {retry_seconds} seconds until task_id exists
        note over vets-website: Shows spinner
        vets-website ->> vets-api: GET /v2/cdd/{job_guid}
        vets-api ->> SCDF: GET /ccd/oracle_health/jobs/{job_guid}"
        SCDF ->> vets-api: returns { status,task_id, retry_seconds}
        vets-api ->> vets-website: return { status, task_id}
    end

    loop Every {retry_seconds} seconds until status == done && signed_url exists
        note over vets-website: Shows spinner
        vets-website ->> vets-api: GET /v2/cdd/{task_id}
        vets-api ->> SCDF: GET /ccd/oracle_health/jobs/{task_id}"
        SCDF ->> vets-api: returns { status, retry_seconds} || FHIR Bundle {signed_urls}
        vets-api ->> vets-website: return { status, task_id, pre_signed_url} 
    end
    note over vets-website: programmicalyt initiate the download
    vets-website <<->> S3: download file from s3
    


```

## Questions

- Are we keeping hte same XML\HTML\PDF experience or are we going to do something different?

## Points of Interests

- We are not doing notifciations yet until we need to see it happen
- Messing on the `Show Spinner` screen will let the users know its coming
- We need to figure out a `max wait time` and a `timeout` for the user experience. We don't want to leave the user hanging for too long, but we also don't want to timeout too early if the job is still processing.
- We need to measure
  - the full wait time
  - Abandonment rates at each step of the process

## New vets-api endpoints

- POST /v2/cdd/generate
  - Request body: { veteran_id }
  - Response: { task_id }
- GET /v2/cdd/{task_id}
  - Response: { status }
- GET /v2/cdd/download/{task_id}
  - Response: the file
