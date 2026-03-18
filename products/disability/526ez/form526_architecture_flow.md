# 526EZ Disability Benefits Application — Complete Architecture Diagram (v3)

**Last updated:** 2026-03-13 (v3)
**Sources:** vets-website (0d0c531), vets-api (00bbe4a)

## v3 Changes
- Phase 1: Corrected `useFormFeatureToggleSync` toggle list; added toggle entry path annotations
- Phase 3: Added backend IPF controller reconciliation pipeline, expanded `onFormLoaded`, added `normalizeReturnUrlForResume`
- Phase 4: Added `gatePages` dual-config pattern to disabilities chapter
- Phase 5: Added `purgeToxicExposureData` and save/restore pattern
- Phase 6: Expanded `log_toxic_exposure_changes` to show IPF→claim comparison
- Feature Flippers: Added missing flippers, annotated entry paths

---

## Phase 1: Authentication & Application Entry

```mermaid
flowchart TD
    Veteran["🧑‍💻 Veteran (Browser)"]
    Auth["va.gov Authentication (SSOe / SIS)<br/>ID.me / Login.gov / DS Logon<br/>LOA3 verification, MPI → ICN"]
    APIs["GET /v0/user → session + profile<br/>GET /v0/feature_toggles → all Flipper toggles"]
    Nav["Navigate to<br/>/disability/file-disability-claim-form-21-526ez"]

    subgraph Entry["Form526EZApp.jsx (FE Entry Point)"]
        direction TB
        Gates["Gate Checks (blocks form if any fail):<br/>• RequiredLoginView → FORM526<br/>• hasRequiredId() → SSN + EDIPI<br/>• hasRequiredServices() → FORM526 or ORIGINAL_CLAIMS<br/>• hasRequiredDob() → profile.dob<br/>• Missing526Identifiers → alert if BIRLS/PID/SSN missing"]

        subgraph Synced["useFormFeatureToggleSync (refreshed every load)"]
            S1["disability526Enable2024Form4142"]
            S2["disability526ToxicExposureOptOutDataPurge"]
            S3["disability526SupportingEvidenceEnhancement"]
            S4["disability526SupportingEvidenceFileInputV3"]
            S5["disability526ExtraBDDPagesEnabled"]
            S6["disability526NewBddShaEnforcementWorkflowEnabled"]
        end

        subgraph Prefill["Backend Prefill Only (sticky — set once)"]
            P1["disabilityCompNewConditionsWorkflow"]
            P2["startedFormVersion"]
            P3["syncModern0781Flow"]
        end

        subgraph RenderOnly["Render-Time Only (never in formData)"]
            R1["disability526SidenavEnabled<br/>→ sessionStorage only"]
        end

        Init["Other Initialization:<br/>• useBrowserMonitoring() → Datadog RUM<br/>• fetchBranches() → military service branches<br/>• Sentry tags: account_uuid, in_progress_form_id"]
    end

    Wizard["Wizard: /start → WizardContainer → /introduction"]

    Veteran --> Auth --> APIs --> Nav --> Entry --> Wizard
    Gates ~~~ Synced ~~~ Prefill ~~~ RenderOnly ~~~ Init
```

---

## Phase 2: Intent to File (ITF)

```mermaid
flowchart LR
    FE["ITFWrapper (FE container)"]
    API["vets-api"]
    LH["Lighthouse<br/>Benefits Claims API"]

    FE -- "GET /v0/intent_to_file<br/>(check for active compensation ITF)" --> API --> LH
    FE -- "POST /v0/intent_to_file/compensation<br/>(create if none exists)" --> API
    LH -- "ITF reference number<br/>expiration date (1 year)" --> API --> FE
```

---

## Phase 3: Prefill & In-Progress Form (IPF) Load

### Scenario A: First-Time Form (No IPF)

```mermaid
flowchart TD
    Request["GET /v0/in_progress_forms/21-526EZ<br/>No existing IPF found"]

    subgraph Prefill["Prefill Pipeline (BE) — FormProfiles::VA526ez"]
        direction TB
        RD["initialize_rated_disabilities_information<br/>→ Lighthouse Rated Disabilities API<br/>→ MaxRatingAnnotator.annotate_disabilities<br/>(adds maximumRatingPercentage)"]
        VC["initialize_veteran_contact_information<br/>→ VA Profile (address, phone, email)"]
        PI["initialize_payment_information<br/>→ Lighthouse Direct Deposit API"]
        II["initialize_identity_information → MPI"]
        CI["initialize_contact_information → VA Profile"]
        MI["initialize_military_information → VADIR / eMIS"]
        F526["initialize_form526_prefill (internal only):<br/>• startedFormVersion: '2022'<br/>• syncModern0781Flow: (flipper check)<br/>• disabilityCompNewConditionsWorkflow: (flipper check)"]
        RD --> VC --> PI --> II --> CI --> MI --> F526
    end

    Result["Returns:<br/>{ form_data: {...},<br/>  metadata: { version: 0,<br/>    prefill: true,<br/>    returnUrl: '/veteran-information' } }"]

    Request --> Prefill --> Result
```

### Scenario B: Returning User (Existing IPF)

```mermaid
flowchart TD
    Request["GET /v0/in_progress_forms/21-526EZ<br/>Existing IPF found"]

    subgraph BE["Step 0: Backend IPF Controller Reconciliation"]
        direction TB
        URD["0a. update_rated_disabilities<br/>→ Re-fetch from Lighthouse<br/>→ If changed: set updatedRatedDisabilities,<br/>  redirect returnUrl to /disabilities/rated-disabilities<br/>  (or /conditions/summary if new conditions workflow)"]
        SFV["0b. set_started_form_version<br/>→ If BOTH keys blank: set '2019'<br/>→ Preserves existing values"]
        FIX["0c. fix_new_conditions_workflow_flag<br/>🛡️ Poisoned IPF fix (gated by Flipper)<br/>→ If flag=true AND returnUrl is old-flow page:<br/>  /claim-type, /disabilities/orientation,<br/>  /disabilities/rated-disabilities,<br/>  /new-disabilities/follow-up, /new-disabilities/add<br/>→ RESET flag to false in DB<br/>→ Prevents RJSF crash + redirect loops"]
        DUP["0d. purge_duplicate_additional_information<br/>→ Fixes IPFs created 2/3–2/9/2026<br/>→ TODO: Remove after 2/9/2027"]
        URD --> SFV --> FIX --> DUP
    end

    subgraph FE["Steps 1–7: Frontend IPF Processing"]
        direction TB
        Load["1. Load saved formData + metadata<br/>from InProgressForm table"]
        Version["2. Compare saved version vs<br/>migrations.length (currently 10)"]
        Migrate["3. Run needed migrations sequentially:<br/>01–08: legacy migrations<br/>09: /new-disabilities-revised/add → /new-disabilities/add<br/>10: /new-disabilities/add-3 → /new-disabilities/add"]
        Transform["4. Apply prefillTransformer"]

        subgraph OFL["5. onFormLoaded() — Resume-Time Redirect Logic"]
            direction TB
            B1["baseDoNew4142Logic?<br/>Legacy 4142 auth but not new auth, flipper ON"]
            B2["redirectWhenFlipperOff?<br/>returnUrl → modern 4142 page, flipper OFF"]
            B3["redirectWhenNoEvidence?<br/>No evidence, returnUrl is 4142 page"]
            B4["redirectLegacyToEnhancement?<br/>returnUrl → legacy evidence, enhancement ON"]
            B5["redirectEnhancementToLegacy?<br/>returnUrl → enhancement page, flipper OFF"]
            B6["default:<br/>router.push(returnUrl)"]

            B1 -- "true → set alertNeedsShown4142<br/>redirect to /supporting-evidence/<br/>private-medical-records" --> Done["done"]
            B1 -- "false" --> B2
            B2 -- "true → redirect to<br/>private-medical-records" --> Done
            B2 -- "false" --> B3
            B3 -- "true → redirect to<br/>/evidence-types" --> Done
            B3 -- "false" --> B4
            B4 -- "true → redirect to<br/>/evidence-request" --> Done
            B4 -- "false" --> B5
            B5 -- "true → redirect to<br/>/evidence-types" --> Done
            B5 -- "false" --> B6
        end

        Merge["6. Merge saved data with fresh prefill"]

        Normalize["7. normalizeReturnUrl(returnUrl)<br/>→ Registered as formConfig.normalizeReturnUrl<br/>→ Runs at REDIRECT TIME only (IPF unchanged)<br/>→ Rewrites array-builder item pages to summary:<br/>  /conditions/:n/* → /conditions/summary<br/>  /mental-health-form-0781/:n/* → events-summary<br/>→ Prevents loops (item pages need ?add=true)"]

        Load --> Version --> Migrate --> Transform --> OFL --> Merge --> Normalize
    end

    Resume["Veteran resumes at<br/>resolved returnUrl"]

    Request --> BE --> FE --> Resume
```

---

## Phase 4: Form Fill

```mermaid
flowchart TD
    subgraph Chapters["Form Chapters (formConfig)"]
        direction TB

        subgraph VD["veteranDetails"]
            VD1["veteranInformation · contactInformation<br/>homelessOrAtRisk · terminallyIll<br/>alternateNames · militaryHistory<br/>reservesNationalGuardService · federalOrders"]
            VD2["separationLocation ← showSeparationLocation<br/>separationPay · retirementPay · trainingPay<br/>← !hasRatedDisabilities"]
        end

        subgraph DIS["disabilities (Conditions chapter)"]
            direction TB
            subgraph Gate["gatePages — Dual Page Config Pattern"]
                direction LR
                V1["Legacy V1 (disabilityBenefitsWorkflow)<br/>gated by isNewConditionsOff<br/>• Add Conditions (Autocomplete)<br/>• showPagePerItem follow-ups<br/>• Summary of Disabilities"]
                V2["New V2 (disabilityConditionsWorkflow)<br/>gated by isNewConditionsOn<br/>• arrayBuilderPages: intro,<br/>  per-item (condition, side-of-body,<br/>  cause, cause details, date),<br/>  summary with YesNo schema"]
            end
            Note["Only ONE set visible at a time<br/>based on disabilityCompNewConditionsWorkflow"]
            PTSD["PTSD / 0781 flow:<br/>Legacy (hasNewPtsdDisability) OR<br/>Modern (syncModern0781Flow)"]
        end

        subgraph SE["supportingEvidence"]
            VA["VA medical records"]
            PMR["Private medical records:<br/>Legacy 4142 ← !isCompletingModern4142<br/>2024 4142 ← isCompletingModern4142<br/>  • standalone auth page<br/>  • recordsConfirmAlertBanner<br/>    (alertNeedsShown4142 for IPF Veterans)"]
            TE["Toxic Exposure section:<br/>• TE conditions (checkbox)<br/>• Per-location details (checkbox-and-loop)<br/>• Summary pages<br/>depends: showToxicExposurePages<br/>= hasRealNewDisabilities (post-cleanup)"]
            EV["Additional evidence uploads"]
        end

        AI["additionalInformation:<br/>Aid & Attendance · IU (8940/4192)<br/>Summary of conditions"]

        Review["Review & Submit:<br/>CustomReviewTopContent:<br/>if startedFormVersion==='2019' + isClaimingNew:<br/>info alert → link to TE questions<br/>⚠️ TODO: remove after 11/18/2025 (PAST DUE)"]
    end

    subgraph APICalls["API Calls During Form Fill"]
        direction TB
        API1["GET rated_disabilities → LH Rated Disabilities<br/>(maximumRatingPercentage for Max CFI)"]
        API2["GET separation_locations → LH BRD → BGS → CorpDB"]
        API3["GET suggested_conditions → local Postgres lookup"]
        API4["GET rating_info → combined disability rating %"]
        API5["PUT /v0/in_progress_forms/21-526EZ<br/>→ auto-save EVERY page transition<br/>→ BE also syncs 0781 + new_conditions metadata"]
        API6["POST upload_supporting_evidence<br/>→ S3 (SupportingEvidenceAttachment)<br/>→ returns confirmationCode (GUID)"]
    end
```

---

## Phase 5: Frontend Transform

```mermaid
flowchart TD
    subgraph PrePipeline["Pre-Pipeline: Save Before filterEmptyObjects"]
        Save["savedToxicExposure = _.cloneDeep(toxicExposure)<br/>savedToxicExposurePurgeFlag = disability526ToxicExposure...<br/><br/>Why: filterEmptyObjects strips empty nested TE objects.<br/>Purge needs original structure to distinguish<br/>'never entered' vs 'entered then opted out'"]
    end

    subgraph Pipeline["Submit Transformer Pipeline (.reduce())"]
        direction TB
        T1["transformToxicExposure:<br/>1. RESTORE savedToxicExposure<br/>2. RESTORE purge flag<br/>3. purgeToxicExposureData (if flag on):<br/>   • No conditions → remove all exposure data<br/>   • conditions.none=true → remove all<br/>   • Unchecked location → filter details<br/>   • none:true on section → remove section<br/>   • otherKey w/ description → preserve<br/>   • otherKey w/o description → remove<br/>4. STRIP purge flag from output"]
        T2["normalizeIncreases (V2 only):<br/>Move rated disability placeholders<br/>from newDisabilities → ratedDisabilities"]
        T3["sanitizeNewDisabilities (V2 only):<br/>Filter entries missing condition or cause"]
        T4["setActionTypes → filterRatedViewFields<br/>→ filterServicePeriods → removeExtraData<br/>→ cleanUpMailingAddress → addPOWSpecialIssues<br/>→ addPTSDCause → splitNewDisabilities<br/>→ transformSecondaryDisabilities<br/>→ stringifyRelatedDisabilities<br/>→ transformSeparationPayDate<br/>→ sanitizeHomelessnessContact"]
        T5["addForm4142 (branches: 2024 vs legacy)<br/>addForm0781 · addForm0781V2<br/>addForm8940 · addFileAttachments<br/>transformCountryCodeToName<br/>fullyDevelopedClaim"]
        T1 --> T2 --> T3 --> T4 --> T5
    end

    Output["Output: JSON.stringify({<br/>  form526: {...},<br/>  form4142: {...},<br/>  form0781: {...} / form0781v2: {...},<br/>  form8940: {...},<br/>  form526_uploads: [...],<br/>  flashes: [...]<br/>})"]

    PrePipeline --> Pipeline --> Output
```

---

## Phase 6: Controller / Synchronous Actions

```mermaid
flowchart TD
    Submit["POST /v0/disability_compensation_form/submit_all_claim"]

    SepFix["1. temp_separation_location_fix<br/>(Flipper-gated)<br/>separationLocationCode.to_s<br/>(int→string coercion)"]

    subgraph TEPurge["2. purge_toxic_exposure_orphaned_data (Flipper-gated)"]
        direction TB
        BEPurge["Backend purge: MALFORMED SYNTACTIC data<br/>Partial dates like 'XXXX-01-XX'<br/>from mid-entry navigation"]
        FEPurge["≠ Frontend purge (Phase 5):<br/>ORPHANED SEMANTIC data<br/>(user opted out of TE)"]
        Both["Both run at submit time.<br/>Both are independent.<br/>A submission can trigger BOTH."]
    end

    SaveClaim["3. SavedClaim::Form526AllClaim.from_hash()<br/>→ Validate against JSON schema<br/>→ saved_claim.save"]

    Meta["4. Add 0781 metadata (if syncModern0781Flow)"]

    CreateSub["5. create_submission(saved_claim)<br/>→ Form526Submission.new(...)<br/>→ add_birls_ids<br/>→ validate ≥1 new/increased disability<br/>→ submission.save!"]

    subgraph TELog["6. log_toxic_exposure_changes (Flipper-gated)"]
        direction TB
        Compare["Compare InProgressForm toxic_exposure (snake_case)<br/>vs submitted claim toxicExposure (camelCase)<br/>→ OliveBranch::Transformations.camelize to normalize"]
        Log["→ Log to Datadog: which keys removed and why<br/>→ Validates frontend purge working correctly"]
    end

    Check["7. disability_compensation_prevent_submission_job?"]
    JobON["ON → Log only, do NOT send downstream"]
    JobOFF["OFF → submission.start (normal path)"]

    Return["8. Return { job_id: jid } to frontend<br/>(FE begins polling on confirmation page)"]

    Submit --> SepFix --> TEPurge --> SaveClaim --> Meta --> CreateSub --> TELog --> Check
    Check --> JobON
    Check --> JobOFF
    JobOFF --> Return
    JobON --> Return
```

---

## Phase 7: Sidekiq Batch 1 — Primary 526 Submission

```mermaid
flowchart TD
    Start["submission.start<br/>→ log_max_cfi_metrics_on_submit<br/>→ log_document_type_metrics<br/>→ start_evss_submission_job"]

    Batch["Sidekiq::Batch<br/>on(:success) → perform_ancillary_jobs_handler"]

    subgraph Job["SubmitForm526AllClaim"]
        direction TB
        Prep["1. mark_birls_id_as_tried!<br/>2. prepare_for_evss!"]

        subgraph Paths["3. choose_service_provider"]
            direction LR
            LH["PATH A: LIGHTHOUSE ✅ (primary)<br/>claims_api? == true<br/>(all submissions, unconditional since Dec 2024)<br/>→ Form526ToLighthouseTransform<br/>→ BenefitsClaims::Service.submit526<br/>→ LH validates separationLocationCode via BRD<br/>→ LH → FES → VBMS (claim established)"]
            EVSS["PATH B: EVSS 🚫 (legacy, retiring)<br/>claims_api? == false<br/>→ EVSS Docker container<br/>→ generates PDF + submits to VBMS"]
        end

        Response["4. response_handler:<br/>→ submission.submitted_claim_id = claim_id<br/>→ send_submitted_email via VANotify"]
    end

    Retry["Retry: 16 attempts (~2d 1h 47m)<br/>On exhaustion:<br/>→ try alternate BIRLS IDs<br/>→ if none left → backup submission (Phase 10)"]

    Start --> Batch --> Job --> Retry
    Prep --> Paths --> Response
```

---

## Phase 8: Sidekiq Batch 2 — Ancillary Jobs

```mermaid
flowchart TD
    Handler["perform_ancillary_jobs_handler<br/>→ checks jobs_succeeded?<br/>→ calls perform_ancillary_jobs"]

    Batch["Sidekiq::Batch<br/>on(:success) → workflow_complete_handler"]

    subgraph Jobs["Ancillary Jobs (all conditional)"]
        direction TB
        Uploads["SubmitUploads<br/>One job PER file, staggered<br/>→ LH Benefits Documents API → VBMS eFolder"]
        F4142["conditionally_submit_form_4142<br/>→ Generate 4142/4142a PDF<br/>→ LH Benefits Documents → VBMS"]
        F0781["SubmitForm0781<br/>→ 0781/0781a PDF (legacy) or 0781v2 (modern)<br/>→ LH Benefits Documents → VBMS"]
        F8940["SubmitForm8940<br/>→ 8940 PDF via PdfFill → VBMS"]
        BDD["UploadBDDInstructions<br/>→ BDD instruction sheet → VBMS"]
        Flash["SubmitFlashes → BGS<br/>Homeless, Terminally Ill, POW, Priority, ALS"]
        Poll["PollForm526Pdf<br/>→ Poll LH for 526 PDF (up to 96h)<br/>→ On found + flipper: send 'Received' email<br/>→ On exhaustion: queue backup submission"]
        Cleanup["SubmitForm526Cleanup ◀ ALWAYS RUNS<br/>═══════════════════════════<br/>IPF IS DELETED HERE<br/>═══════════════════════════<br/>InProgressForm.find_by(<br/>  form_id: '21-526EZ',<br/>  user_uuid: submission.user_uuid<br/>)&.destroy"]
    end

    Handler --> Batch --> Jobs
```

---

## Phase 9: Workflow Complete

```mermaid
flowchart TD
    WCH["workflow_complete_handler"]

    subgraph Success["jobs_succeeded? == true"]
        Email["Send 'Received' email via VANotify<br/>UNLESS polling flipper is on<br/>(PollForm526Pdf already sent it)"]
        Mark["submission.workflow_complete = true<br/>submission.save"]
    end

    subgraph Failure["jobs_succeeded? == false"]
        FailEmail["Form526SubmissionFailedEmailJob<br/>→ Sends failure notification via VANotify<br/>→ email, claim_id, dates, first_name"]
    end

    WCH --> Success
    WCH --> Failure
```

---

## Phase 10: Backup Submission Path

```mermaid
flowchart TD
    subgraph Entries["Entry Points"]
        E1["SubmitForm526<br/>sidekiq_retries_exhausted"]
        E2["queue_central_mail_backup_<br/>submission_for_non_retryable_error!"]
        E3["PollForm526Pdf<br/>exhausted (96h)"]
    end

    Criteria["Criteria (all must be true):<br/>• Settings.form526_backup.enabled<br/>• backup killswitch flipper enabled<br/>• submitted_claim_id is nil<br/>• backup_submitted_claim_id is nil<br/>• No untried BIRLS IDs"]

    subgraph Process["Processor.new(submission_id).process!"]
        direction TB
        PDF["1. get_form526_pdf → LH Claims API /getPDF"]
        Files["2. get_uploads, get_form4142_pdf,<br/>get_form0781_pdf, get_form8940_pdf, get_bdd_pdf"]
        Upload["3. instantiate_upload_info_from_lighthouse<br/>→ Benefits Intake API"]
        Submit["4. submit_initial_payload<br/>→ upload_doc(526_pdf + evidence)<br/>→ Benefits Intake API → Central Mail → VBMS"]
        Ancillary["5. submit_ancillary_payloads<br/>(4142, 0781, 8940, BDD)"]
        Save["6. submission.backup_submitted_claim_id = uuid"]
        PDF --> Files --> Upload --> Submit --> Ancillary --> Save
    end

    Result["On success: send_submitted_email (no claim_id)<br/>On exhaustion: Form526SubmissionFailedEmailJob"]

    Entries --> Criteria --> Process --> Result
```

---

## Confirmation Page (Frontend)

```mermaid
flowchart LR
    FE["ConfirmationPoll.jsx"]
    API["GET /v0/disability_compensation_form/<br/>submission_status/{job_id}"]
    Status["Form526JobStatus:<br/>status, claim_id"]
    Display["Displays:<br/>• Submission confirmation #<br/>• Claim ID (when available)<br/>• Processing time estimate<br/>• Link to check status"]

    FE --> API --> Status --> Display
```

---

## Separation Location Code Validation Chain

```mermaid
flowchart TD
    CorpDB["CorpDB BDD_INTAKE_SITE table<br/>(System of Record)"]

    BGS["BGS (legacy)<br/>findIntakesSite<br/>(straight fetch, no filtering)"]
    BIP["BIP Standard Data<br/>Service API<br/>(replacement for BGS)"]

    BRD["BRD API (Lighthouse)<br/>← migrating from BGS to BIP"]

    FE["Phase 4: FE Selection<br/>GET /v0/separation_locations<br/>(populates dropdown)"]
    LH["Phase 7: LH Benefits Claims API<br/>validates separationLocationCode<br/>at 526 submission using BRD"]
    FES["Phase 7 (downstream):<br/>FES validates separationLocationCode<br/>via BIP → CorpDB directly"]

    CorpDB --> BGS --> BRD
    CorpDB --> BIP --> BRD
    BIP --> FES
    BRD --> FE
    BRD --> LH
```

---

## Environment Mapping (Lower Environments)

| GW Env | LHDI Env | BGS Env | Notes |
|---|---|---|---|
| Dev | dev | linktest | |
| Staging | qa | linktestbepbenefits | UPDATED: was prepbepbenefits; caused code mismatch with FES/BIP |
| Sandbox | sandbox | mock-bgs (internal) | No real BGS; BRD returns internal mock data |
| Prod | prod | bepbenefits | prod == prod |

⚠️ Each BGS environment has similar entries but uses DIFFERENT IDs. BRD Sandbox does NOT use BGS — it returns mock data.

---

## Data Stores

```mermaid
erDiagram
    InProgressForm {
        string form_id "= '21-526EZ'"
        uuid user_uuid
        jsonb form_data "formData + synced toggles"
        jsonb metadata "returnUrl, version, etc."
        timestamp expires_at "60 days if untouched"
    }

    SavedClaim {
        string type "Form526AllClaim"
        jsonb form "validated against JSON schema"
        timestamp created_at "Phase 6 — immutable snapshot"
    }

    Form526Submission {
        uuid user_uuid
        uuid user_account
        bigint saved_claim_id
        jsonb auth_headers_json
        jsonb form_json
        string submitted_claim_id "from VBMS"
        string backup_submitted_claim_id "from Central Mail"
        jsonb birls_ids_tried
        boolean workflow_complete
        string submit_endpoint "= 'claims_api'"
    }

    Form526JobStatus {
        string job_class
        string status "try | success | retryable_error | non_retryable_error | exhausted | pdf_not_found"
        string job_id
        text error_message
        jsonb bgjob_errors
    }

    SupportingEvidenceAttachment {
        uuid confirmation_code "GUID"
        string file "S3-backed"
    }

    InProgressForm ||--o| SavedClaim : "snapshot at submit"
    SavedClaim ||--|| Form526Submission : "saved_claim_id"
    Form526Submission ||--o{ Form526JobStatus : "one per Sidekiq job"
    SupportingEvidenceAttachment }o--|| Form526Submission : "consumed by SubmitUploads"
```

---

## External Services Reference

```mermaid
flowchart LR
    subgraph Lighthouse["Lighthouse APIs"]
        LBC["Benefits Claims API<br/>• submit526 (primary)<br/>• get_rated_disabilities<br/>• ITF get/create<br/>• getPDF (backup)<br/>• rating_info<br/>• PDF polling (get_claim)<br/>• validates separationLocationCode"]
        LBD["Benefits Documents API<br/>• Evidence uploads → VBMS eFolder<br/>• Ancillary PDFs (4142, 0781, 8940)<br/>• BDD instructions"]
        LBI["Benefits Intake API<br/>• BACKUP path only<br/>• Multi-part upload<br/>• → Central Mail → VBMS"]
        LBRD["BRD API<br/>• Separation locations<br/>• → BGS findIntakesSite → CorpDB<br/>• Migrating to BIP backend"]
    end

    subgraph Downstream["Downstream / Establishment"]
        FES["FES → VBMS<br/>(claim establishment)"]
        BIPSD["BIP Standard Data<br/>(replaces BGS for FES)"]
    end

    subgraph Legacy["Legacy (retiring)"]
        BGS["BGS<br/>• Flashes (SubmitFlashes)<br/>• Being replaced by BIP"]
        EVSS["EVSS<br/>• Legacy submit path (Path B)<br/>• Some getPDF<br/>• Some 8940 uploads"]
    end

    subgraph VAPlatform["VA Platform Services"]
        VAP["VA Profile<br/>• Contact info prefill"]
        MPI["MPI<br/>• Identity, ICN"]
        EDIR["VADIR / eMIS<br/>• Military service history"]
    end

    subgraph Comms["Communications & Monitoring"]
        VAN["VANotify<br/>• 'Submitted' email (primary + backup)<br/>• 'Received' email (PDF polling)<br/>• 'Failed' email (exhaustion)"]
        DD["Datadog<br/>• FE: RUM<br/>• BE: APM, StatsD, logging"]
        Sentry["Sentry<br/>• FE + BE error tracking"]
    end

    VBMS["VBMS<br/>Final destination:<br/>• Established claim (via FES)<br/>• 526EZ PDF<br/>• Evidence documents<br/>• Ancillary PDFs<br/>• Backup submissions"]
```

---

## Key Feature Flippers (active as of March 2026)

| Flipper | Entry Path | Effect |
|---|---|---|
| `disability526Enable2024Form4142` | `useFormFeatureToggleSync` | Shows 2024 version of 4142 pages |
| `disability526ToxicExposureOptOutDataPurge` | `useFormFeatureToggleSync` | Purges TE data on opt-out (FE + BE logging) |
| `disability526SupportingEvidenceEnhancement` | `useFormFeatureToggleSync` | Enhanced evidence upload UI |
| `disability526SupportingEvidenceFileInputV3` | `useFormFeatureToggleSync` | File input V3 component |
| `disability526ExtraBDDPagesEnabled` | `useFormFeatureToggleSync` | Shows 5 extra BDD pages |
| `disability526NewBddShaEnforcementWorkflowEnabled` | `useFormFeatureToggleSync` | BDD SHA enforcement workflow |
| `disabilityCompNewConditionsWorkflow` | Backend prefill only | New conditions chapter (arrayBuilder V2) |
| `startedFormVersion` | Backend prefill only | TE rollout tracking / review alert |
| `syncModern0781Flow` | Backend prefill only | Modern 0781 PTSD flow |
| `disability526SidenavEnabled` | Render-time only | Side navigation in form |
| `disability_compensation_prevent_submission_job` | Backend only | Blocks downstream submission (debug) |
| `disability_compensation_fail_submission` | Backend only | Forces submission failure (testing) |
| `disability_compensation_production_tester` | Backend only | Skips notifications (production test) |
| `disability_526_call_received_email_from_polling` | Backend only | Send "Received" email from PDF poll |
| `form526_backup_submission_temp_killswitch` | Backend only | Enables/disables backup submission |
| `disability_compensation_temp_separation_location_code_string` | Backend only | Fixes separationLocationCode type |
| `disability_compensation_temp_toxic_exposure_optional_dates_fix` | Backend only | Backend TE date purge |
| `disability_compensation_fix_poisoned_ipf` | Backend only | Corrects poisoned new-conditions flag |
| `disability_compensation_fix_duplicate_key_ipf` | Backend only | Removes duplicate additionalInformation |
| `disability_compensation_sync_modern0781_flow_metadata` | Backend only | Syncs 0781 flow into IPF metadata on save |
| `disability_compensation_new_conditions_workflow_metadata` | Backend only | Syncs new conditions flag into IPF metadata on save |

---

## Simplified Sequence Diagram (Happy Path)

```mermaid
sequenceDiagram
    participant V as Veteran
    participant FE as vets-website
    participant API as vets-api
    participant SK as Sidekiq
    participant LH as Lighthouse
    participant VBMS as VBMS

    V->>FE: Login
    FE->>API: GET /user + GET /feature_toggles
    FE->>API: GET /intent_to_file
    API->>LH: Check/create ITF
    FE->>API: GET /in_progress_forms/21-526EZ
    API->>LH: Prefill calls (rated disab, VA Profile, MPI, eMIS)

    Note over API: If existing IPF: run BE reconciliation<br/>(update_rated_disabilities,<br/>set_started_form_version,<br/>fix_new_conditions_workflow_flag)

    API->>FE: Prefilled data + metadata
    Note over FE: Run migrations → prefillTransformer<br/>→ onFormLoaded (6 branches)<br/>→ normalizeReturnUrl

    FE->>V: Form displayed

    loop Form Fill (each page)
        V->>FE: Fill page
        FE->>API: PUT /in_progress_forms/21-526EZ (auto-save)
    end

    FE->>API: GET rated_disabilities, separation_locations
    FE->>API: POST upload_supporting_evidence → S3

    V->>FE: Submit application
    Note over FE: transformForSubmit pipeline:<br/>save/restore TE → purge TE → normalizeIncreases<br/>→ ~25 transforms → output JSON

    FE->>API: POST submit_all_claim

    Note over API: temp_separation_location_fix<br/>→ purge_toxic_exposure_orphaned_data<br/>→ SavedClaim.save → Form526Submission.save<br/>→ log_toxic_exposure_changes

    API->>FE: { job_id }
    API->>SK: submission.start

    SK->>LH: submit526 (Lighthouse Benefits Claims)
    LH->>VBMS: FES → establish claim
    LH->>SK: claim_id
    SK->>V: "Submitted" email (VANotify)

    Note over SK: Batch 2 — Ancillary Jobs
    SK->>LH: Upload evidence → Benefits Documents → VBMS
    SK->>LH: 4142/0781/8940 PDFs → VBMS
    SK->>LH: PollForm526Pdf (up to 96h)

    Note over SK: SubmitForm526Cleanup<br/>═══ IPF DELETED ═══

    SK->>V: "Received" email (VANotify)
    Note over SK: workflow_complete = true

    FE->>API: GET submission_status/{job_id}
    API->>FE: status + claim_id
    FE->>V: Confirmation page
```
