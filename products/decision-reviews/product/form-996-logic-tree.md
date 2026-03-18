# VA Form 20-0996 (Higher Level Review) — Complete Logic Tree

**Generated:** 2026-03-13
**Source of truth:** `vets-website` repo, `main` branch (production code)
**Commit:** `84054aa759` (pulled 2026-03-13)
**Source code:** `src/applications/appeals/996/`
**Base URL:** `/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996`

## Logic Tree (Mermaid)

```mermaid
flowchart TD
    classDef always fill:#d4edda,stroke:#155724,color:#000
    classDef conditional fill:#fff3cd,stroke:#856404,color:#000
    classDef hidden fill:#e2e3e5,stroke:#6c757d,color:#383d41,stroke-dasharray: 5 5
    classDef decision fill:#cce5ff,stroke:#004085,color:#000
    classDef terminal fill:#f8d7da,stroke:#721c24,color:#000
    classDef review fill:#d1ecf1,stroke:#0c5460,color:#000

    subgraph SUBTASK["Pre-Form: Benefit Type Selection"]
        P_START["<b>Benefit Type</b><br/>/start"]:::always
        DEC_BENEFIT{{"benefitType ===<br/>'compensation'?"}}:::decision
        P_OTHER["<b>Other Benefit Type</b><br/>/start (dead end:<br/>mail/in-person only)"]:::terminal
        P_START --> DEC_BENEFIT
        DEC_BENEFIT -- "No" --> P_OTHER
    end

    DEC_BENEFIT -- "Yes" --> INTRO
    INTRO["<b>Introduction</b><br/>/introduction"]:::always

    subgraph CH1["Chapter 1: Veteran Information"]
        direction TB
        VET_INFO["veteranInformation<br/><b>/veteran-information</b><br/>ALWAYS"]:::always
        HOMELESS["homeless<br/><b>/homeless</b><br/>ALWAYS"]:::always
        CONTACT["confirmContactInfo<br/><b>/contact-information</b><br/>ALWAYS"]:::always
        EDIT_ADDR["editMailingAddress<br/><b>/contact-information/edit-mailing-address</b><br/>SUB-PAGE"]:::hidden
        EDIT_PHONE["editMobilePhone<br/><b>/contact-information/edit-mobile-phone</b><br/>SUB-PAGE"]:::hidden
        EDIT_EMAIL["editEmailAddress<br/><b>/contact-information/edit-email-address</b><br/>SUB-PAGE"]:::hidden
        VET_INFO --> HOMELESS --> CONTACT
        CONTACT -. "edit" .-> EDIT_ADDR & EDIT_PHONE & EDIT_EMAIL
    end

    INTRO --> VET_INFO

    subgraph CH2["Chapter 2: Issues for Review"]
        direction TB
        ISSUES["contestableIssues<br/><b>/contestable-issues</b><br/>ALWAYS"]:::always
        ADD_ISSUE["addIssue<br/><b>/add-issue</b><br/>SUB-PAGE"]:::hidden
        AOD["areaOfDisagreementFollowUp<br/><b>/area-of-disagreement/:index</b><br/>DYNAMIC: one per selected issue"]:::always
        AUTH["authorization<br/><b>/authorization</b><br/>ALWAYS"]:::always
        SUMMARY["issueSummary<br/><b>/issue-summary</b><br/>ALWAYS"]:::always
        ISSUES -. "add" .-> ADD_ISSUE
        ISSUES --> AOD --> AUTH --> SUMMARY
    end

    CONTACT --> ISSUES

    subgraph CH3["Chapter 3: Informal Conference"]
        direction TB
        CONF_CHOICE["requestConference<br/><b>/informal-conference</b><br/>ALWAYS"]:::always
        DEC_CONF{{"informalConferenceChoice<br/>=== 'yes'?"}}:::decision
        CONF_CONTACT["conferenceContact<br/><b>/informal-conference/contact</b><br/>CONDITIONAL"]:::conditional
        DEC_WHO{{"informalConference:<br/>'me' or 'rep'?"}}:::decision
        CONF_TIME_VET["conferenceTime<br/><b>/informal-conference/conference-availability</b><br/>CONDITIONAL: yes + me"]:::conditional
        REP_INFO["representativeInfoV2<br/><b>/informal-conference/representative-info</b><br/>CONDITIONAL: yes + rep"]:::conditional
        CONF_TIME_REP["conferenceTimeRep<br/><b>/informal-conference/conference-rep-availability</b><br/>CONDITIONAL: yes + rep"]:::conditional
        CONF_CHOICE --> DEC_CONF
        DEC_CONF -- "No" --> REVIEW
        DEC_CONF -- "Yes" --> CONF_CONTACT --> DEC_WHO
        DEC_WHO -- "me" --> CONF_TIME_VET --> REVIEW
        DEC_WHO -- "rep" --> REP_INFO --> CONF_TIME_REP --> REVIEW
    end

    SUMMARY --> CONF_CHOICE

    REVIEW["Review & Submit"]:::review
    CONFIRM([Confirmation]):::review
    REVIEW --> CONFIRM
```

## Page Summary

### Always-Shown Pages (9)

| Page Key | URL Path |
|----------|----------|
| Benefit Type (subtask) | `/start` |
| Introduction | `/introduction` |
| `veteranInformation` | `/veteran-information` |
| `homeless` | `/homeless` |
| `confirmContactInfo` | `/contact-information` |
| `contestableIssues` | `/contestable-issues` |
| `authorization` | `/authorization` |
| `issueSummary` | `/issue-summary` |
| `requestConference` | `/informal-conference` |

### Dynamic Pages

| Page Key | URL Path | Behavior |
|----------|----------|----------|
| `areaOfDisagreementFollowUp` | `/area-of-disagreement/:index` | `showPagePerItem: true` — renders one page per selected contestable issue |

### Conditional Pages (4)

| Page Key | URL Path | Condition |
|----------|----------|-----------|
| `conferenceContact` | `/informal-conference/contact` | `informalConferenceChoice === 'yes'` |
| `representativeInfoV2` | `/informal-conference/representative-info` | `informalConferenceChoice === 'yes' AND informalConference === 'rep'` |
| `conferenceTime` | `/informal-conference/conference-availability` | `informalConferenceChoice === 'yes' AND informalConference === 'me'` |
| `conferenceTimeRep` | `/informal-conference/conference-rep-availability` | `informalConferenceChoice === 'yes' AND informalConference === 'rep'` |

### Sub-Pages (accessed via links, `depends: () => false`)

| Page Key | URL Path | Accessed From |
|----------|----------|---------------|
| `confirmContactInfoEditMailingAddress` | `/contact-information/edit-mailing-address` | Contact info page |
| `confirmContactInfoEditMobilePhone` | `/contact-information/edit-mobile-phone` | Contact info page |
| `confirmContactInfoEditEmailAddress` | `/contact-information/edit-email-address` | Contact info page |
| `addIssue` | `/add-issue` | Contestable issues page |

**Note:** HLR has only 3 contact info edit sub-pages (address, mobile phone, email). Unlike SC (995), there is **no home phone edit page**.

## Informal Conference Branching (3 paths)

1. **No conference:** `requestConference` -> Review & Submit (skip all conference pages)
2. **Conference with veteran:** `requestConference` -> `conferenceContact` (choose "me") -> `conferenceTime` -> Review & Submit
3. **Conference with representative:** `requestConference` -> `conferenceContact` (choose "rep") -> `representativeInfoV2` -> `conferenceTimeRep` -> Review & Submit

## Path Lengths

- **Minimum path:** 10 pages (1 issue selected, no informal conference)
- **Maximum path:** 13+ pages (multiple issues, conference with representative)
- Page count scales with number of selected contestable issues (area of disagreement is per-issue)

## Audit Status

Independently audited against source code on 2026-03-13. **Zero discrepancies found.** All pages, paths, conditions, and ordering confirmed accurate.

## Key Source Files

- `src/applications/appeals/996/config/form.js` — form config (chapters, pages, depends)
- `src/applications/appeals/996/utils/helpers.js` — conditional logic (`showConferenceContact`, `showConferenceVeteranPage`, `showConferenceRepPages`)
- `src/applications/appeals/996/constants/index.js` — path constants
- `src/applications/appeals/996/subtask/` — pre-form benefit type selection pages
- `src/applications/appeals/shared/utils/contactInfo.js` — contact info page generation
