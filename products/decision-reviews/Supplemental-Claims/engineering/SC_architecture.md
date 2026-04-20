# Supplemental Claim architecture

```mermaid
flowchart
    veteran(("fa:fa-user<br/>User"))
    s3[(s3)]
    lighthouseS3[(lighthouse s3)]
    vetsWebsite[vets-website]
    vetsApi[vets-api]
    lighthouse[Lighthouse]
    caseflow[Caseflow]
    centralMail[Central Mail Portal<br/>submit form & 4142]
    vba[VBA<br/>Supporting evidence files]

    veteran <--> vetsWebsite

    s3 <--> vetsApi
    lighthouseS3 <--> lighthouse

    vetsWebsite <--> vetsApi
    vetsApi <---> lighthouse

    lighthouse <-- Get Contestable issues --> caseflow
    lighthouse <--> centralMail
    lighthouse <--> vba

    centralMail <--> vba

    classDef s3Style fill:#1e88e5,stroke:#0d47a1,stroke-width:2px,color:#ffffff
    class s3,lighthouseS3 s3Style
```

## Components

- **Veteran** — End user submitting a Supplemental Claim via VA.gov.
- **vets-website** — VA.gov frontend where Veterans submit Supplemental Claims.
- **vets-api** — VA.gov backend; proxies requests to Lighthouse and uploads supporting documents.
- **s3** — vets-api S3 bucket for temporary storage of uploads.
- **Lighthouse** — Lighthouse Decision Reviews API; authoritative submission path.
- **lighthouse s3** — Lighthouse-managed S3 bucket used during submission.
- **Caseflow** — Source of contestable issues for a Veteran.
- **Central Mail Portal** — Receives the submitted form (20-0995) and 4142 authorizations.
- **VBA** — Receives supporting evidence files.
