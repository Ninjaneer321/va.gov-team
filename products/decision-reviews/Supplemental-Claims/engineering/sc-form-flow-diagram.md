# SC 995 Form Flow Diagram

**Form config:** [`form.js`](../../vets-website/src/applications/appeals/995/config/form.js)
**Gate function:** [`redesignActive()`](../../vets-website/src/applications/appeals/995/utils/index.js) — returns `formData?.showArrayBuilder`
**Date:** 2026-04-08

---

## Full Form Flow

### 1. Chapter: Veteran Information

```mermaid
flowchart TD
    start(["/start"]) --> vetInfo

    vetInfo["veteranInfo: /veteran-information"]
    housing["housingRisk: /housing-risk"]
    living["livingSituation: /living-situation"]
    otherHousing["otherHousingRisk: /other-housing-risks"]
    contact["contact: /point-of-contact"]
    contactInfo["contactInfo: /contact-information"]
    primaryPhone["choosePrimaryPhone: /primary-phone-number"]

    vetInfo --> housing
    housing -->|hasHousingRisk| living
    living -->|hasOtherHousingRisk| otherHousing
    housing -->|hasHousingRisk| contact
    housing --> contactInfo
    contactInfo -->|hasHomeAndMobilePhone| primaryPhone

    primaryPhone --> next(["→ Issues for Review"])
    contact --> next
    otherHousing --> next
```

### 2. Chapter: Issues for Review

```mermaid
flowchart TD
    prev(["← Veteran Information"]) --> issues

    issues["contestableIssues: /contestable-issues"]
    addIssue["addIssue: /add-issue"]
    issueSummary["issueSummary: issue-summary"]
    optIn["optIn: /opt-in"]

    issues -.->|"accessed from issues page"| addIssue
    issues --> issueSummary
    issueSummary -->|mayHaveLegacyAppeals| optIn

    optIn --> next(["→ New and Relevant Evidence"])
    issueSummary --> next
```

### 3. Chapter: New and Relevant Evidence

#### 3a. Notice & Facility Types

```mermaid
flowchart TD
    prev(["← Issues for Review"]) --> notice

    notice["notice5103: /notice-of-evidence-needed"]
    facility["facilityTypes: /facility-types"]

    notice --> facility
    facility --> next(["→ VA Evidence Branch"])
```

#### 3b. VA Evidence Branch

```mermaid
flowchart TD
    prev(["← Facility Types"]) --> vaGate

    vaGate{{"redesignActive?"}}

    subgraph vaRedesign["Redesign Path ✦"]
        direction TB
        vaSummary["vaSummary: /supporting-evidence/va-medical-records"]
        vaLocation["vaLocation: …/:idx/va-location"]
        datePrompt["treatmentDatePrompt: …/:idx/treatment-date-prompt"]
        dateDetails["treatmentDateVA: …/:idx/treatment-date-details"]

        vaSummary -->|"loop per item"| vaLocation
        vaLocation --> datePrompt
        datePrompt -->|hasTreatmentBefore2005| dateDetails
        dateDetails -->|"back to summary"| vaSummary
        datePrompt -->|"no pre-2005"| vaSummary
    end

    subgraph vaLegacy["Legacy Path"]
        direction TB
        vaPromptOld["vaPromptOld: /…/va-medical-records-prompt"]
        vaDetailsOld["vaDetailsOld: /…/va-medical-records-v0"]

        vaPromptOld -->|hasVAEvidence| vaDetailsOld
    end

    vaGate -->|"true"| vaSummary
    vaGate -->|"false"| vaPromptOld

    vaRedesign --> next(["→ Private Medical Records"])
    vaLegacy --> next

    style vaRedesign fill:#d4edda,stroke:#28a745
    style vaLegacy fill:#fff3cd,stroke:#ffc107
    style vaGate fill:#e2e3f1,stroke:#6c63ff
```

#### 3c. Private Medical Records & Consent

```mermaid
flowchart TD
    prev(["← VA Evidence Branch"]) --> privatePrompt

    privatePrompt["privatePrompt: /…/private-medical-records"]
    privAuth["privateAuthorization: /…/private-medical-records-authorization"]
    lcPrompt["limitedConsentPrompt: /…/limited-consent"]
    lcDetails["limitedConsentDetails: /…/limited-consent-details"]

    privatePrompt -->|hasPrivateEvidence| privAuth
    privAuth --> lcPrompt
    lcPrompt -->|hasPrivateLimitation| lcDetails

    lcPrompt --> next(["→ Private Evidence Branch"])
    lcDetails --> next
    privatePrompt -->|"!hasPrivateEvidence"| skip(["→ Upload & Summary"])
```

#### 3d. Private Evidence Branch

```mermaid
flowchart TD
    prev(["← Private Records & Consent"]) --> privGate

    privGate{{"redesignActive: && hasPrivateEvidence?"}}

    subgraph privRedesign["Redesign Path ✦"]
        direction TB
        privIntro["privateIntro: /…/private-records-intro"]
        privSummary["privateSummary: /…/private-records"]
        privLocation["privateLocation: …/:idx/private-details"]
        privIssues["issues: …/:idx/private-issues"]
        privTreatDate["treatmentDatePrivate: …/:idx/treatment-date"]

        privIntro --> privSummary
        privSummary -->|"loop per item"| privLocation
        privLocation --> privIssues
        privIssues --> privTreatDate
        privTreatDate -->|"back to summary"| privSummary
    end

    subgraph privLegacy["Legacy Path"]
        privDetailsOld["privateDetailsOld: /…/private-medical-records-v0"]
    end

    privGate -->|"true"| privIntro
    privGate -->|"false: && hasPrivate"| privDetailsOld

    privRedesign --> next(["→ Upload & Summary"])
    privLegacy --> next

    style privRedesign fill:#d4edda,stroke:#28a745
    style privLegacy fill:#fff3cd,stroke:#ffc107
    style privGate fill:#e2e3f1,stroke:#6c63ff
```

#### 3e. Upload & Summary

```mermaid
flowchart TD
    prev(["← Private Evidence Branch: or Private Records (no private)"]) --> uploadPrompt

    uploadPrompt["uploadPrompt: /…/additional-evidence"]
    uploadDetails["uploadDetails: /…/upload"]
    summary["summary: /…/summary"]

    uploadPrompt -->|hasOtherEvidence| uploadDetails
    uploadDetails --> summary
    uploadPrompt --> summary

    summary --> next(["→ VHA Indicator"])
```

### 4. Chapter: VHA Indicator

```mermaid
flowchart TD
    prev(["← Evidence Summary"]) --> mst

    mst["optionForMst: /option-claims"]
    indicator["optionIndicator: /option-indicator"]

    mst -->|hasMstOption| indicator

    indicator --> next(["→ Review & Submit"])
    mst --> next
```

### 5. Review & Submit → Confirmation

```mermaid
flowchart TD
    prev(["← VHA Indicator"]) --> reviewSubmit
    reviewSubmit(["Review & Submit"]) --> confirmation(["Confirmation Page"])
```

### Summary page visibility

The evidence `summary` page has its own conditional:

```mermaid
flowchart LR
    A{{"shouldHideEvidenceSummaryPage?"}} -->|"redesignActive: && hasArrayBuilderEvidence: && !hasOtherEvidence"| hidden["Summary HIDDEN"]
    A -->|otherwise| shown["Summary SHOWN"]

    style hidden fill:#fff3cd,stroke:#ffc107
    style shown fill:#d4edda,stroke:#28a745
```

---

## Redesign Branch Detail

Focused view of the two `redesignActive` branching points:

```mermaid
flowchart TD
    facility["facilityTypes"]

    facility --> vaDecision{{"redesignActive?"}}

    vaDecision -->|"true ✦"| vaSummary["vaSummary"]
    vaDecision -->|"false"| vaPromptOld["vaPromptOld"]

    subgraph vaNew["VA Array Builder Loop"]
        direction LR
        vaSummary --> vaLoc["vaLocation"]
        vaLoc --> vaDateQ["treatmentDatePrompt"]
        vaDateQ -->|"pre-2005"| vaDateD["treatmentDateVA"]
        vaDateD --> vaSummary
        vaDateQ -->|"post-2005"| vaSummary
    end

    subgraph vaOld["VA Legacy"]
        vaPromptOld -->|hasVAEvidence| vaDetailsOld["vaDetailsOld"]
    end

    vaNew --> privPrompt["privatePrompt"]
    vaOld --> privPrompt

    privPrompt -->|hasPrivateEvidence| privAuth["authorization"]
    privAuth --> lcPrompt["limitedConsentPrompt"]
    lcPrompt -->|hasPrivateLimitation| lcDetails["limitedConsentDetails"]
    lcPrompt --> privDecision
    lcDetails --> privDecision

    privDecision{{"redesignActive: && hasPrivate?"}}

    privDecision -->|"true ✦"| privIntro["privateIntro"]
    privDecision -->|"false && hasPrivate"| privOldDetails["privateDetailsOld"]

    subgraph privNew["Private Array Builder Loop"]
        direction LR
        privIntro --> privSum["privateSummary"]
        privSum --> privLoc["privateLocation"]
        privLoc --> privIss["issues"]
        privIss --> privDate["treatmentDatePrivate"]
        privDate --> privSum
    end

    subgraph privOld["Private Legacy"]
        privOldDetails
    end

    privNew --> upload["uploadPrompt"]
    privOld --> upload
    privPrompt -->|"!hasPrivate"| upload
    upload -->|hasOtherEvidence| uploadDet["uploadDetails"]
    upload --> summaryPage["summary"]
    uploadDet --> summaryPage

    style vaNew fill:#d4edda,stroke:#28a745
    style vaOld fill:#fff3cd,stroke:#ffc107
    style privNew fill:#d4edda,stroke:#28a745
    style privOld fill:#fff3cd,stroke:#ffc107
    style vaDecision fill:#e2e3f1,stroke:#6c63ff
    style privDecision fill:#e2e3f1,stroke:#6c63ff
```

---

## Key Files

| Role | File |
|------|------|
| Form config | [`form.js`](../../vets-website/src/applications/appeals/995/config/form.js) |
| Gate function | [`utils/index.js`](../../vets-website/src/applications/appeals/995/utils/index.js) |
| Flag sync | [`App.jsx`](../../vets-website/src/applications/appeals/995/containers/App.jsx) |
| Form data checks | [`form-data-retrieval.js`](../../vets-website/src/applications/appeals/995/utils/form-data-retrieval.js) |
| VA array builder pages | [`vaEvidence.js`](../../vets-website/src/applications/appeals/995/pages/evidence/vaEvidence.js) |
| Private array builder pages | [`privateEvidence.jsx`](../../vets-website/src/applications/appeals/995/pages/evidence/privateEvidence.jsx) |
| Submit transformer | [`submit-transformer.js`](../../vets-website/src/applications/appeals/995/config/submit-transformer.js) |
| BE normalizer | [`request_body_normalizer.rb`](../../vets-api/modules/decision_reviews/app/services/decision_reviews/v1/supplemental_claims/request_body_normalizer.rb) |
| URL constants | [`constants/index.js`](../../vets-website/src/applications/appeals/995/constants/index.js) |

---

## Legend

| Symbol | Meaning |
|--------|---------|
| Green subgraph (`✦`) | Redesign path — gated by `redesignActive(formData)` |
| Yellow subgraph | Legacy path — gated by `!redesignActive(formData)` |
| Purple diamond | `redesignActive` decision point |
| Dashed arrow | Accessed indirectly (not linear flow) |
| `…/:idx/` | Array builder item index (loop) |
