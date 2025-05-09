# Supplemental Claims

<details>
<summary>V1 flow limited to compensation-only benefit type</summary>

```mermaid
flowchart TB
    Title(Supplemental Claims flow)

    %% =============================
    %% Subtask (/start page)
    %% =============================

    subgraph subtask
      BenefitType -. other .-> PDF[Fill out paper form]
    end

    BenefitType[Benefit Type] -. compensation .-> Intro

    Intro[Introduction page] --> ITF

    ITF[Intent to file] -. failure .-> END
    ITF -. success .-> VetInfo

    %% =============================
    %% Veteran info
    %% =============================

    VetInfo[Veteran Information<br>Name, SSN & DoB] --> ContactInfo

    ContactInfo -. edit .-> EditContactInfo
    ContactInfo[&dagger; Contact Info] -. has home AND<br>mobile .-> PrimaryPhone
    ContactInfo -. has home OR<br>mobile phone .-> ContestableIssues

    EditContactInfo[Edit email,<br>home phone,<br>mobile phone,<br>or mailing address] --> ContactInfo

    PrimaryPhone[Choose primary phone] --> ContestableIssues

    %% =============================
    %% Contestable issues
    %% =============================

    ContestableIssues --> IssueSummary[Issue Summary]
    ContestableIssues[Contestable Issues] .-> AddOrEdit

    AddOrEdit[Add or edit issue] --> ContestableIssues

    IssueSummary -. has legacy issues .-> OptIn
    IssueSummary --> Acknowledgment

    OptIn[Opt in to AMA,<br>if legacy issues loaded in] --> Acknowledgment

    %% =============================
    %% Supporting evidence
    %% =============================

    Acknowledgment[Notice of Acknowledgement 5103] --> VaRecords

    VaRecords{Request VA records} -. yes .-> AddVaRecord
    AddVaRecord[Add VA record] -. add another<br>location .-> AddVaRecord
    VaRecords -. no .-> PrivateRecord
    AddVaRecord --> PrivateRecord

    PrivateRecord{Request private records} -. no .-> UploadRecord
    PrivateRecord -. yes .-> PrivateAuthorization

    subgraph Evidence [Form 4142/4142a]

    PrivateAuthorization[Authorization release<br>evidence] --> AddPrivateRecord

    AddPrivateRecord[Add private record] -. add another<br>provider .- AddPrivateRecord
    AddPrivateRecord --> PrivateLimitation

    end

    PrivateLimitation[Private record limitations] --> UploadRecord

    UploadRecord -. no .-> EvidenceSummary
    UploadRecord{Upload records} -. yes .-> UploadPage

    UploadPage[Upload evidence] -. add more uploads .-> UploadPage
    UploadPage --> EvidenceSummary

    %% =============================

    EvidenceSummary[&Dagger; Summary of evidence] --> ReviewSubmit

    ReviewSubmit[Review & Submit] --> Confirmation[Confirmation page]
```

## Notes:

&dagger; Contact info (email, home phone, mobile phone and mailing address)
  - Editing from the contact info page will take you to a new edit page; updating or canceling will return you to the contact info page
  - Editing from the review & submit page will take you to a new edit page; updating or canceling will return you to the review & submit page

&Dagger; Summary of Evidence page:
  - Editing VA records will return you to the individual record; continue through all pages to return to the summary
  - Editing private records will return you to the individual record; continue through all pages to return to the summary
  - Editing uploads will return you to the upload page
  - Add more evidence returns to the Request VA records yes/no question
  - This behavior remains the same when editing the summary from the review & submit page

</details>

<details open>
<summary>V2 flow limited to compensation-only benefit type (3/2025)</summary>

```mermaid
flowchart TB
    Title(Supplemental Claims flow)

    %% =============================
    %% Subtask (/start page)
    %% =============================

    subgraph subtask
      BenefitType -. other .-> PDF[Fill out paper form]
    end

    BenefitType[Benefit Type] -. compensation .-> Intro

    Intro[Introduction page] --> ITF

    ITF[Intent to file] -. success/failure .-> VetInfo

    %% =============================
    %% Veteran info
    %% =============================

    VetInfo[Veteran Information<br>Name, SSN & DoB] --> Homeless

    Homeless -. no .-> ContactInfo
    Homeless -. yes .-> LivingSituation[Living situation]
    LivingSituation --> Contact[Point of contact]
    LivingSituation -. other .-> OtherRisk[Other risk] --> Contact
    Contact --> ContactInfo

    ContactInfo[&dagger; Contact Info] -. edit .-> EditContactInfo
    EditContactInfo[Edit email,<br>home phone,<br>mobile phone,<br>or mailing address] --> ContactInfo

    ContactInfo --> PrimaryPhone
    PrimaryPhone[Choose primary phone] --> ContestableIssues

    %% =============================
    %% Contestable issues
    %% =============================

    ContestableIssues --> IssueSummary[Issue Summary]
    ContestableIssues[Contestable Issues] .-> AddOrEdit

    AddOrEdit[Add or edit issue] --> ContestableIssues

    IssueSummary -. has legacy or<br>added issues .-> OptIn
    IssueSummary --> Acknowledgment

    OptIn[Opt in to AMA] --> Acknowledgment

    %% =============================
    %% Supporting evidence
    %% =============================

    Acknowledgment[Notice of Acknowledgement 5103] --> Facilities[Factility types]
    Facilities --> VaRecords

    VaRecords{Request VA records} -. yes .-> AddVaRecord
    AddVaRecord[Add VA record] -. add another<br>location .-> AddVaRecord
    VaRecords -. no .-> NonVARecord

    AddVaRecord --> NonVARecord

    NonVARecord{Request non-VA records} -. no .-> UploadRecord
    NonVARecord -. yes .-> NonVAAuthorization

    subgraph Evidence [Form 4142/4142a]

    NonVAAuthorization[Authorization release<br>evidence] --> AddNonVALimitation
    AddNonVALimitation{Add non-VA limitation} -. yes .-> NonVALimitation
    AddNonVALimitation -. no .-> AddNonVARecord
    NonVALimitation[Non-VA record limitations] --> AddNonVARecord

    AddNonVARecord[Add non-VA record] -. add another<br>provider .- AddNonVARecord

    end

    AddNonVARecord --> UploadRecord

    UploadRecord -. no .-> EvidenceSummary
    UploadRecord{Upload records} -. yes .-> UploadPage

    UploadPage[Upload evidence] -. add more uploads .-> UploadPage
    UploadPage --> EvidenceSummary

    EvidenceSummary[&Dagger; Summary of evidence] --> ViewMSTOption

    %% =============================
    %% MST questions
    %% =============================

    ViewMSTOption{View MST option} -. yes .-> AddIndicator
    ViewMSTOption -. no .-> ReviewSubmit
    AddIndicator[Add MST indicator] --> ReviewSubmit

    %% =============================

    ReviewSubmit[Review & Submit] --> Confirmation[Confirmation page]
```

## Notes:

&dagger; Contact info (email, home phone, mobile phone and mailing address)
  - Editing from the contact info page will take you to a new edit page; updating or canceling will return you to the contact info page
  - Editing from the review & submit page will take you to a new edit page; updating or canceling will return you to the review & submit page

&Dagger; Summary of Evidence page:
  - Editing VA records will return you to the individual record; continue through all pages to return to the summary
  - Editing non-VA records will return you to the individual record; continue through all pages to return to the summary
  - Editing uploads will return you to the upload page
  - Add more evidence returns to the Request VA records yes/no question
  - This behavior remains the same when editing the summary from the review & submit page

</details>

Updated: 3/17/2025