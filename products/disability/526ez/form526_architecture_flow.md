# 526EZ Detailed Architecture Diagrams by Phase

## Phase 1: Authentication & Application Entry

```mermaid
graph TD
    VET([Veteran<br/>Browser]) -->|1. Login via ID.me /<br/>Login.gov / DS Logon| AUTH[va.gov Authentication<br/>SSOe / SIS]
    AUTH -->|Validates identity,<br/>establishes session,<br/>LOA3 verification| MPI_LOOKUP[MPI Lookup for ICN]
    MPI_LOOKUP --> API_CALLS

    subgraph API_CALLS[" Initial API Calls "]
        GET_USER["GET /v0/user<br/>→ session + profile data"]
        GET_TOGGLES["GET /v0/feature_toggles<br/>→ all Flipper toggles"]
    end

    API_CALLS -->|2. Navigate to<br/>/disability/file-disability-claim-form-21-526ez| APP

    subgraph APP["Form526EZApp.jsx — FE Entry Point"]
        direction TB
        GATES["Gate Checks (blocks if any fail):<br/>• RequiredLoginView → FORM526<br/>• hasRequiredId() → SSN + EDIPI<br/>• hasRequiredServices() → FORM526 or ORIGINAL_CLAIMS<br/>• hasRequiredDob() → profile.dob<br/>• Missing526Identifiers → alert if BIRLS/PID/SSN missing"]

        INIT["Initialization:<br/>• useFeatureToggle() → load flippers<br/>• useFormFeatureToggleSync() → sync 5 flippers into formData:<br/>  - disability526Enable2024Form4142<br/>  - disability526ToxicExposureOptOutDataPurge<br/>  - disability526SupportingEvidenceEnhancement<br/>  - disabilityCompNewConditionsWorkflow<br/>  - disability526ExtraBDDPagesEnabled<br/>• useBrowserMonitoring() → Datadog RUM<br/>• fetchBranches() → cache military branches<br/>• Sentry tags: account_uuid, in_progress_form_id"]

        WIZARD["/start → WizardContainer → /introduction"]

        GATES --> INIT --> WIZARD
    end

    APP --> ITF_PHASE([→ Phase 2: ITF])

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef process fill:#d1ecf1,stroke:#0c5460,color:#0c5460
    classDef external fill:#fff3cd,stroke:#856404,color:#856404
    class VET,ITF_PHASE endpoint
    class AUTH,MPI_LOOKUP external
```

## Phase 2: Intent to File

```mermaid
graph TD
    ENTRY([From Phase 1]) --> ITF

    subgraph ITF["ITFWrapper — FE Container"]
        direction TB
        CHECK["GET /v0/intent_to_file<br/>→ Check for active compensation ITF"]
        CHECK -->|None exists| CREATE["POST /v0/intent_to_file/compensation<br/>→ Create ITF"]
        CHECK -->|Active ITF found| SHOW
        CREATE --> SHOW["Display ITF expiration notice<br/>on introduction page"]
    end

    ITF -->|"vets-api → Lighthouse<br/>Benefits Claims API"| LH_ITF[("Lighthouse<br/>Benefits Claims API")]

    ITF --> PREFILL([→ Phase 3: Prefill & IPF Load])

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef external fill:#fff3cd,stroke:#856404,color:#856404
    class ENTRY,PREFILL endpoint
    class LH_ITF external
```

## Phase 3: Prefill & IPF Load

```mermaid
graph TD
    ENTRY([From Phase 2]) --> LOAD["GET /v0/in_progress_forms/21-526EZ"]

    LOAD --> DECISION{Existing IPF?}

    DECISION -->|"(A) No IPF —<br/>First-time form"| PREFILL
    DECISION -->|"(B) Existing IPF —<br/>Returning user"| IPF_LOAD

    subgraph PREFILL["Prefill Pipeline — BE"]
        direction TB
        P1["initialize_rated_disabilities_information<br/>→ LH Rated Disabilities API<br/>→ MaxRatingAnnotator.annotate_disabilities"]
        P2["initialize_veteran_contact_information<br/>→ VA Profile API"]
        P3["initialize_payment_information<br/>→ LH Direct Deposit API"]
        P4["initialize_identity_information<br/>→ MPI"]
        P5["initialize_contact_information<br/>→ VA Profile"]
        P6["initialize_military_information<br/>→ VADIR / eMIS"]
        P7["initialize_form526_prefill<br/>Sets: startedFormVersion: '2022'<br/>syncModern0781Flow (flipper)<br/>disabilityCompNewConditionsWorkflow (flipper)"]

        P1 --> P2 --> P3 --> P4 --> P5 --> P6 --> P7
    end

    subgraph IPF_LOAD["IPF Load Pipeline — FE + BE"]
        direction TB
        L1["1. Load saved formData + metadata<br/>from InProgressForm table<br/>(Postgres: form_id + user_uuid)"]
        L2["2. Compare saved version vs<br/>migrations.length (currently 10)"]
        L3["3. Run needed migrations sequentially:<br/>01: redirectToClaimTypePage<br/>02: convertCountryCode<br/>03: upgradeHasSeparationPay<br/>04: truncateOtherHomelessHousing<br/>05: truncateOtherAtRiskHousing<br/>06: fixTreatedDisabilityNamesKey<br/>07: mapServiceBranches<br/>08: reorderHousingIllnessRemoveFdc<br/>09: addDisabilitiesRedirect<br/>10: addDisabilitiesRedirectAdd3"]
        L4["4. Apply prefillTransformer"]
        L5["5. Run onFormLoaded() hook:<br/>• baseDoNew4142Logic()<br/>• Other conditional redirects"]
        L6["6. Merge saved data with fresh prefill<br/>metadata.returnUrl → resume page"]

        L1 --> L2 --> L3 --> L4 --> L5 --> L6
    end

    PREFILL --> MERGE["Returns prefilled formData +<br/>metadata { version, returnUrl }"]
    IPF_LOAD --> MERGE

    MERGE --> FORM([→ Phase 4: Form Fill])

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef decision fill:#fff3cd,stroke:#856404,color:#856404
    classDef external fill:#e2d5f1,stroke:#6f42c1,color:#6f42c1
    class ENTRY,FORM endpoint
    class DECISION decision
```

## Phase 4: Form Fill

```mermaid
graph TD
    ENTRY([From Phase 3]) --> FORM

    subgraph FORM["RoutedSavableApp + Form Config — FE"]
        direction TB
        CH1["Chapter 1: Veteran Details<br/>veteranInfo, contact, housing,<br/>terminallyIll, alternateNames,<br/>militaryHistory, reserves/guard,<br/>federalOrders, separationLocation,<br/>separationPay, retirementPay, trainingPay"]

        CH2["Chapter 2: Conditions<br/>├ disabilityBenefitsWorkflow (old) OR<br/>│ disabilityConditionsWorkflow (new)<br/>├ PTSD / 0781 flow<br/>├ Toxic Exposure pages<br/>├ POW (BDD)<br/>└ Ancillary forms wizard"]

        CH3["Chapter 3: Mental Health (new 0781)<br/>syncModern0781Flow gated<br/>Event types → Events → Behaviors →<br/>Evidence → Treatment providers"]

        CH4["Chapter 4: Supporting Evidence<br/>├ SHA (BDD)<br/>├ Service treatment records (BDD)<br/>├ Evidence types (legacy) OR<br/>│ Evidence request (enhanced)<br/>├ VA medical records<br/>├ Private medical records<br/>│ ├ Upload OR Request (4142)<br/>│ └ Old 4142 OR New 4142<br/>└ Additional documents"]

        CH5["Chapter 5: Additional Information<br/>payment, VA employee,<br/>retirementPayWaiver, trainingPayWaiver,<br/>fullyDevelopedClaim"]

        CH1 --> CH2 --> CH3 --> CH4 --> CH5
    end

    subgraph APIS["API Calls During Form Fill"]
        direction TB
        A1["GET /v0/.../rated_disabilities<br/>→ LH Rated Disabilities + Max CFI"]
        A2["GET /v0/.../separation_locations<br/>→ LH BRD → BGS → CorpDB"]
        A3["GET /v0/.../suggested_conditions<br/>→ DisabilityContention DB (Postgres)"]
        A4["GET /v0/.../rating_info<br/>→ Combined disability rating"]
        A5["PUT /v0/in_progress_forms/21-526EZ<br/>→ Auto-save EVERY page transition"]
        A6["POST /v0/upload_supporting_evidence<br/>→ S3 (SupportingEvidenceAttachment)"]
    end

    FORM --> APIS
    FORM -->|"Veteran clicks<br/>Submit application"| TRANSFORM([→ Phase 5: FE Transform])

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef api fill:#fff3cd,stroke:#856404,color:#856404
    class ENTRY,TRANSFORM endpoint
```

## Phase 5: Frontend Transform

```mermaid
graph LR
    ENTRY([From Phase 4]) --> PIPELINE

    subgraph PIPELINE["transformForSubmit — submit-transformer.js"]
        direction TB
        T1["transformToxicExposure<br/>(restore + purge TE data)"]
        T2["normalizeIncreases<br/>sanitizeNewDisabilities"]
        T3["setActionTypes<br/>(NEW, INCREASE, SECONDARY,<br/>WORSENED, VA)"]
        T4["filterRatedViewFields<br/>filterServicePeriods<br/>removeExtraData"]
        T5["cleanUpMailingAddress<br/>addPOWSpecialIssues<br/>addPTSDCause"]
        T6["splitNewDisabilities<br/>(primary vs secondary)<br/>removeRatedDisabilityFromNew<br/>transformSecondaryDisabilities"]
        T7["addForm4142<br/>(branches on 2024 vs legacy)<br/>addForm0781 / addForm0781V2<br/>addForm8940"]
        T8["addFileAttachments<br/>(map confirmationCodes)<br/>transformCountryCodeToName<br/>fullyDevelopedClaim"]

        T1 --> T2 --> T3 --> T4 --> T5 --> T6 --> T7 --> T8
    end

    PIPELINE --> OUTPUT

    subgraph OUTPUT["Output Shape"]
        direction TB
        O1["form526: { ...transformedData }"]
        O2["form4142: { ... } (if applicable)"]
        O3["form0781: { ... } (legacy) OR<br/>form0781v2: { ... } (modern)"]
        O4["form526_uploads: [<br/>  { confirmationCode, name, attachmentId }<br/>]"]
        O5["flashes: [ Homeless, Terminally Ill,<br/>POW, Priority Processing, ALS ]"]
    end

    OUTPUT -->|"POST /v0/.../submit_all_claim"| CONTROLLER([→ Phase 6: Controller])

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    class ENTRY,CONTROLLER endpoint
```

## Phase 6: Controller / Synchronous Actions

```mermaid
graph TD
    ENTRY([From Phase 5]) -->|"POST /v0/disability_compensation_form/<br/>submit_all_claim"| CTRL

    subgraph CTRL["DisabilityCompensationFormsController#submit_all_claim — BE"]
        direction TB
        S1["1. temp_separation_location_fix<br/>(if flipper: disability_compensation_temp_<br/>separation_location_code_string)"]
        S2["2. purge_toxic_exposure_orphaned_data<br/>(if flipper: toxic_exposure_dates_fix)<br/>Removes orphaned TE date ranges"]
        S3["3. SavedClaim::Form526AllClaim.from_hash()<br/>→ Validate against JSON schema<br/>→ saved_claim.save → saved_claims table"]
        S4["4. Add 0781 metadata to saved_claim<br/>(if syncModern0781Flow flipper on)<br/>{ sync_modern0781_flow,<br/>  sync_modern0781_flow_answered_online }"]
        S5["5. create_submission(saved_claim)<br/>→ Form526Submission.new(<br/>    user_uuid, user_account,<br/>    saved_claim_id, auth_headers_json,<br/>    form_json, submit_endpoint: 'claims_api')<br/>→ add_birls_ids<br/>→ Validate ≥1 disability<br/>→ submission.save!"]
        S6["6. Log toxic exposure opt-out changes"]
        S7{"7. Check flipper:<br/>prevent_submission_job?"}

        S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7
    end

    S7 -->|ON| LOG_ONLY["Log only — submission<br/>saved but NOT sent<br/>(testing/debugging)"]
    S7 -->|OFF| START["submission.start<br/>→ log_max_cfi_metrics_on_submit<br/>→ log_document_type_metrics<br/>→ start_evss_submission_job"]

    CTRL -->|"Return to FE"| RESPONSE["{ data: { attributes:<br/>{ job_id: jid } } }<br/>(FE begins polling)"]

    START --> BATCH1([→ Phase 7: Sidekiq Batch 1])

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef decision fill:#fff3cd,stroke:#856404,color:#856404
    class ENTRY,BATCH1 endpoint
    class S7 decision
```

## Phase 7: Sidekiq Batch 1 — Primary 526 Submission

```mermaid
graph TD
    ENTRY([From Phase 6]) --> BATCH

    subgraph BATCH["Sidekiq::Batch — on:success → perform_ancillary_jobs_handler"]
        direction TB
        JOB["SubmitForm526AllClaim.perform_async(submission_id)"]

        JOB --> BIRLS["1. mark_birls_id_as_tried!"]
        BIRLS --> PREP["2. prepare_for_evss!<br/>(data transformation)"]
        PREP --> CHOOSE{"3. choose_service_provider<br/>submission.claims_api?"}
    end

    CHOOSE -->|"true (current primary)"| LH_PATH
    CHOOSE -->|"false (legacy)"| EVSS_PATH

    subgraph LH_PATH["PATH A: Lighthouse"]
        direction TB
        LH1["Look up ICN from submission.account"]
        LH2["Form526ToLighthouseTransform<br/>.new.transform(form526)"]
        LH3["BenefitsClaims::Service<br/>.new(icn).submit526(body)"]
        LH4["POST → LH Benefits Claims API<br/>→ LH validates (incl. separationLocationCode via BRD)<br/>→ LH → FES → VBMS (claim established)"]
        LH5["Parse claimId from response"]

        LH1 --> LH2 --> LH3 --> LH4 --> LH5
    end

    subgraph EVSS_PATH["PATH B: EVSS (legacy, retiring)"]
        direction TB
        EV1["EVSS::DisabilityCompensationForm::Service"]
        EV2["POST /submit to EVSS Docker<br/>→ EVSS generates 526EZ PDF<br/>→ EVSS submits to VBMS"]
        EV3["Returns FormSubmitResponse<br/>Timeout: ~355 seconds"]

        EV1 --> EV2 --> EV3
    end

    LH_PATH --> RESPONSE
    EVSS_PATH --> RESPONSE

    RESPONSE["4. response_handler(response):<br/>submission.submitted_claim_id = claim_id<br/>submission.save<br/>submission.send_submitted_email (VANotify)"]

    RESPONSE --> NOTIF["5. send_post_evss_notifications"]

    NOTIF --> SUCCESS_CB([Batch :success → Phase 8])

    subgraph EXHAUSTED["On Retry Exhaustion (16 attempts)"]
        direction TB
        EX1["Try alternate BIRLS IDs"]
        EX2["If no BIRLS left →<br/>send_backup_submission_if_enabled()<br/>(→ Phase 10)"]
        EX1 --> EX2
    end

    JOB -.->|"all retries fail"| EXHAUSTED

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef decision fill:#fff3cd,stroke:#856404,color:#856404
    classDef danger fill:#f8d7da,stroke:#721c24,color:#721c24
    class ENTRY,SUCCESS_CB endpoint
    class CHOOSE decision
    class EXHAUSTED danger
```

## Phase 8: Sidekiq Batch 2 — Ancillary Jobs

```mermaid
graph TD
    ENTRY([From Phase 7<br/>Batch :success]) --> CHECK{"jobs_succeeded?<br/>(submit_form_526 +<br/>all others)"}

    CHECK -->|Yes| ANCILLARY

    subgraph ANCILLARY["perform_ancillary_jobs — Sidekiq::Batch<br/>on:success → workflow_complete_handler"]
        direction TB

        UPLOADS["SubmitUploads<br/>(if form526_uploads present)<br/>One job PER file, staggered:<br/>delay = (index+1) × 60s<br/>+ 300s per duplicate<br/>→ LH Benefits Documents API<br/>→ VBMS eFolder"]

        F4142["conditionally_submit_form_4142<br/>(if 4142 data present)<br/>→ Generate 4142/4142a PDF<br/>→ LH Benefits Documents → VBMS"]

        F0781["SubmitForm0781<br/>(if form0781 data present)<br/>→ Generate 0781 PDF (legacy)<br/>  or 0781v2 PDF (modern)<br/>→ LH Benefits Documents → VBMS"]

        BDD_INST["UploadBDDInstructions<br/>(if BDD claim)<br/>→ Standard BDD instruction sheet<br/>→ VBMS"]

        FLASHES["SubmitFlashes<br/>(if flashes array present)<br/>→ POST to BGS<br/>Types: Homeless, Terminally Ill,<br/>POW, Priority Processing, ALS"]

        POLL["PollForm526Pdf<br/>(if startedFormVersion +<br/>submitted_claim_id exist)<br/>→ Poll LH Benefits Claims API<br/>  for generated 526 PDF<br/>→ Retry for 96 hours<br/>→ On found + flipper: send<br/>  Received email via VANotify<br/>→ On exhaustion: queue backup"]

        CLEANUP["SubmitForm526Cleanup ◄ ALWAYS RUNS<br/>════════════════════════════<br/>InProgressForm.find_by(<br/>  form_id: '21-526EZ',<br/>  user_uuid: submission.user_uuid<br/>)&.destroy<br/>════════════════════════════<br/>THIS IS WHERE THE IPF IS DELETED"]
    end

    ANCILLARY --> COMPLETE([→ Phase 9: Workflow Complete])

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef decision fill:#fff3cd,stroke:#856404,color:#856404
    classDef critical fill:#f8d7da,stroke:#721c24,color:#721c24
    class ENTRY,COMPLETE endpoint
    class CHECK decision
    class CLEANUP critical
```

## Phase 9: Workflow Complete

```mermaid
graph TD
    ENTRY([From Phase 8<br/>Batch :success]) --> CHECK{"jobs_succeeded?"}

    CHECK -->|Yes| SUCCESS
    CHECK -->|No| FAILURE

    subgraph SUCCESS["Success Path"]
        EMAIL["Send 'Received' email via VANotify<br/>(UNLESS flipper:<br/>disability_526_call_received_email_from_polling<br/>is on — PollForm526Pdf already sent it)"]
        MARK["submission.workflow_complete = true<br/>submission.save"]
        EMAIL --> MARK
    end

    subgraph FAILURE["Failure Path"]
        FAIL_EMAIL["Form526SubmissionFailedEmailJob<br/>.perform_async(params)<br/>→ Sends failure notification via VANotify<br/>→ Includes: email, submitted_claim_id,<br/>  date_submitted, date_received, first_name"]
    end

    classDef endpoint fill:#d4edda,stroke:#155724,color:#155724
    classDef decision fill:#fff3cd,stroke:#856404,color:#856404
    classDef danger fill:#f8d7da,stroke:#721c24,color:#721c24
    class ENTRY endpoint
    class CHECK decision
    class FAILURE danger
```

## Phase 10: Backup Submission Path

```mermaid
graph TD
    subgraph ENTRIES["Entry Points"]
        E1["sidekiq_retries_exhausted<br/>in SubmitForm526<br/>→ send_backup_submission_if_enabled()"]
        E2["queue_central_mail_backup_submission<br/>_for_non_retryable_error!"]
        E3["PollForm526Pdf retries exhausted<br/>(PDF never found after 96h)"]
    end

    ENTRIES --> CRITERIA

    subgraph CRITERIA["All Must Be True"]
        direction TB
        C1["Settings.form526_backup.enabled == true"]
        C2["form526_backup_submission_temp_killswitch flipper enabled"]
        C3["submitted_claim_id is nil (primary never succeeded)"]
        C4["backup_submitted_claim_id is nil (no prior backup)"]
        C5["No untried BIRLS IDs remaining"]
    end

    CRITERIA --> BACKUP

    subgraph BACKUP["Form526BackupSubmissionProcess::Submit — Retries: 14"]
        direction TB
        B1["1. get_form526_pdf<br/>→ LH Claims API /getPDF<br/>→ Filled 526EZ PDF as binary"]
        B2["2. get_uploads + get_form4142_pdf +<br/>get_form0781_pdf + get_bdd_pdf"]
        B3["3. instantiate_upload_info_from_lighthouse<br/>→ Get upload location from<br/>Benefits Intake API"]
        B4["4. submit_initial_payload<br/>→ lighthouse_service.upload_doc(<br/>    upload_url, file: 526_pdf,<br/>    metadata, attachments: evidence)<br/>→ Benefits Intake API → Central Mail"]
        B5["5. submit_ancillary_payloads<br/>(4142, 0781, BDD — each own upload)"]
        B6["6. submission.backup_submitted_claim_id<br/>= upload_uuid<br/>Central Mail → VBMS"]

        B1 --> B2 --> B3 --> B4 --> B5 --> B6
    end

    BACKUP -->|Success| BACKUP_EMAIL["send_submitted_email<br/>(backup path, no claim_id)"]
    BACKUP -->|Exhaustion| FAIL_EMAIL["Form526SubmissionFailedEmailJob<br/>(if flipper enabled)"]

    classDef danger fill:#f8d7da,stroke:#721c24,color:#721c24
    classDef external fill:#fff3cd,stroke:#856404,color:#856404
    class FAIL_EMAIL danger
```

## Confirmation Page (Frontend, concurrent with Phases 7–9)

```mermaid
graph LR
    FE["ConfirmationPoll.jsx"] -->|"GET /v0/.../submission_status/{job_id}<br/>(polling)"| API["vets-api<br/>→ Form526JobStatus lookup"]
    API -->|"{ status, claim_id }"| FE

    FE --> DISPLAY["Displays to Veteran:<br/>• Submission confirmation number<br/>• Claim ID (when available)<br/>• Estimated processing time<br/>• Link to check claim status"]
```

## Separation Location Code Validation Chain

```mermaid
graph TD
    CORPDB[("CorpDB<br/>BDD_INTAKE_SITE table<br/>(System of Record)")]

    CORPDB --> BGS["BGS (legacy)<br/>Shared Data Web Service<br/>findIntakesSite"]
    CORPDB --> BIP["BIP Standard Data<br/>Service API<br/>(replacing BGS)"]

    BGS --> BRD["BRD API<br/>(Lighthouse)<br/>← migrating to BIP"]
    BIP -->|"BRD migrating<br/>to match FES"| BRD
    BIP --> FES

    BRD --> FE_SELECT["Phase 4: FE Selection<br/>GET /v0/separation_locations<br/>(dropdown population)"]
    BRD --> LH_VALIDATE["Phase 7: LH Benefits Claims API<br/>validates separationLocationCode<br/>during 526 submission"]

    FES["FES (Forms Establishment Svc)<br/>validates separationLocationCode<br/>during claim establishment<br/>Uses BIP → CorpDB directly"]
    LH_VALIDATE --> FES
    FES --> VBMS[("VBMS<br/>Claim established")]

    classDef sysofrecord fill:#d4edda,stroke:#155724,color:#155724
    classDef external fill:#fff3cd,stroke:#856404,color:#856404
    classDef legacy fill:#f8d7da,stroke:#721c24,color:#721c24
    class CORPDB sysofrecord
    class BGS legacy
```

## External Services Reference

```mermaid
graph LR
    subgraph LIGHTHOUSE["Lighthouse APIs"]
        LH_CLAIMS["Benefits Claims API<br/>• Primary 526 submission<br/>• Rated disabilities<br/>• ITF get/create<br/>• PDF generation<br/>• Combined rating<br/>• PDF polling"]
        LH_DOCS["Benefits Documents API<br/>• Evidence uploads → VBMS eFolder<br/>• Ancillary PDFs (4142, 0781)"]
        LH_INTAKE["Benefits Intake API<br/>• BACKUP path only<br/>• Multi-part upload<br/>• → Central Mail → VBMS"]
        LH_BRD["BRD API<br/>• Separation locations<br/>• → BGS → CorpDB"]
    end

    subgraph VA_SERVICES["VA Internal Services"]
        VA_PROFILE["VA Profile<br/>• Contact info prefill"]
        MPI_SVC["MPI<br/>• Identity info, ICN"]
        VADIR["VADIR / eMIS<br/>• Military service history"]
        BGS_SVC["BGS (legacy, retiring)<br/>• Flashes<br/>• Separation locations (being replaced)"]
        FES_SVC["FES<br/>• Establishes claim in VBMS<br/>• Uses BIP → CorpDB"]
    end

    subgraph NOTIFICATIONS["Notifications & Monitoring"]
        VANOTIFY["VANotify<br/>• Submitted email (primary)<br/>• Submitted email (backup)<br/>• Received email (PDF confirmed)<br/>• Failed email"]
        DATADOG["Datadog<br/>• Browser RUM (FE)<br/>• APM, StatsD, logging (BE)"]
        SENTRY["Sentry<br/>• Error tracking (FE + BE)"]
    end

    subgraph DESTINATIONS["Final Destinations"]
        VBMS_DEST[("VBMS<br/>• Established claim<br/>• 526EZ PDF<br/>• All evidence<br/>• Ancillary PDFs<br/>• BDD instructions<br/>• Backup submissions")]
    end
```

## Data Stores

```mermaid
graph LR
    subgraph POSTGRES["Postgres"]
        IPF[("InProgressForm<br/>THE IPF — saved form data<br/>Key: form_id + user_uuid<br/>Created: first auto-save<br/>Updated: every page transition<br/>Expired: 60 days<br/>Deleted: SubmitForm526Cleanup")]
        SC[("SavedClaim<br/>Immutable snapshot at submit<br/>Type: Form526AllClaim<br/>Validated: JSON schema")]
        SUB[("Form526Submission<br/>Tracks lifecycle<br/>submitted_claim_id<br/>backup_submitted_claim_id<br/>workflow_complete")]
        STATUS[("Form526JobStatus<br/>One per Sidekiq job<br/>Statuses: try, success,<br/>retryable_error,<br/>non_retryable_error,<br/>exhausted, pdf_not_found")]
    end

    subgraph S3_STORE["S3"]
        EVIDENCE[("SupportingEvidence-<br/>Attachment<br/>Temp evidence files<br/>Ref: confirmationCode<br/>Created: Phase 4<br/>Consumed: Phase 8")]
    end

    subgraph REDIS_STORE["Redis"]
        REDIS[("Session data<br/>Feature toggles cache<br/>Sidekiq job queues<br/>Breakers circuit state")]
    end
```

## Happy Path Sequence

```mermaid
sequenceDiagram
    participant V as Veteran
    participant FE as vets-website
    participant API as vets-api
    participant SQ as Sidekiq
    participant LH as Lighthouse
    participant VBMS as VBMS

    V->>FE: Login
    FE->>API: GET /v0/user
    FE->>API: GET /v0/feature_toggles
    FE->>API: GET /v0/intent_to_file
    API->>LH: Check/Create ITF
    FE->>API: GET /v0/in_progress_forms/21-526EZ
    API->>LH: Prefill calls (rated disab, VA Profile, MPI, eMIS)
    API-->>FE: Prefilled formData + metadata

    loop Form Fill (each page)
        V->>FE: Fill page
        FE->>API: PUT /v0/in_progress_forms/21-526EZ (auto-save)
    end

    FE->>API: GET rated_disabilities, separation_locations
    API->>LH: BRD API, Rated Disabilities API
    V->>FE: Upload evidence
    FE->>API: POST /v0/upload_supporting_evidence → S3

    V->>FE: Submit
    FE->>FE: transformForSubmit (~25 transforms)
    FE->>API: POST submit_all_claim

    API->>API: Validate, save SavedClaim
    API->>API: Create Form526Submission
    API-->>FE: { job_id }
    API->>SQ: submission.start

    Note over SQ,VBMS: Batch 1: Primary Submission
    SQ->>LH: submit526 (Benefits Claims API)
    LH->>VBMS: FES → establish claim
    LH-->>SQ: claim_id
    SQ->>SQ: Save claim_id, send "Submitted" email

    Note over SQ,VBMS: Batch 2: Ancillary Jobs
    SQ->>LH: Upload evidence files (Benefits Documents API)
    LH->>VBMS: Documents → eFolder
    SQ->>LH: Upload 4142, 0781 PDFs
    LH->>VBMS: Ancillary forms → eFolder
    SQ->>LH: PollForm526Pdf (check for generated PDF)
    SQ->>API: SubmitForm526Cleanup (DELETE IPF)

    Note over SQ: Workflow Complete
    SQ->>SQ: workflow_complete = true
    SQ->>V: "Received" email (VANotify)

    loop Confirmation Polling
        FE->>API: GET submission_status/{job_id}
        API-->>FE: { status, claim_id }
    end
    FE-->>V: Confirmation page with claim ID
```
