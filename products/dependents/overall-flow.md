# Form 686C-674 flow by chapter

Chapter: Veteran's Information
```mermaid
flowchart TD
  START(Introduction) --> VET_INFO
  VET_INFO["Veteran information<br/>/veteran-information"]
  VET_ADDR["Veteran address<br/>/veteran-address"]
  VET_CONTACT["Veteran contact information<br/>/veteran-contact-information"]
  VET_INFO --> VET_ADDR --> VET_CONTACT
```

Chapter: Add or Remove Dependents / Manage Dependents
```mermaid
flowchart TD
  VET_INFO_CH["Veteran information Chapter"]
  VET_INFO_CH --> REVIEW_DEPS

  REVIEW_DEPS["Review your VA Dependents<br/>/review-dependents"]

  REVIEW_DEPS -->|Dep load success| ADD_OR_REMOVE
  REVIEW_DEPS -->|"Dep load failure<br/>(skip remove flow)"| ADD_OPTS

  ADD_OR_REMOVE{"Add or remove<br/>dependents?<br/>/options-selection"}

  ADD_OR_REMOVE -->|"Remove<br/>only"| REMOVE_CHECK
  ADD_OR_REMOVE -->|"Add<br/>dependents?"| ADD_OPTS

  ADD_OPTS["Add dependent options<br/>/options-selection/add-dependents"]
  ADD_OPTS -->|"Remove was<br/>selected"| REMOVE_CHECK{"V3 flow?"}
  ADD_OPTS -->|"Add only"| CHECK_VET_PENSION
 
  REMOVE_OPTS["Remove dependent options<br/>/options-selection/remove-dependents"]
  REMOVE_CHECK -->|"No"| REMOVE_OPTS

  CHECK_VET_PENSION["Check Veteran Pension<br/>/check-veteran-pension<br/>(Visible if pension flag on and adding dependents)"]
  REMOVE_OPTS --> CHECK_VET_PENSION
  REMOVE_CHECK -->|"Yes"| CHECK_VET_PENSION

  CHECK_VET_PENSION -->|"v2/v3 add,<br/>with or without<br/>v2 remove"| ADD_SPOUSE_CH["First add chapter"]
  CHECK_VET_PENSION -->|"v2 remove only"| REMOVE_CH["First remove chapter"]
  CHECK_VET_PENSION -->|"v3 + remove +<br/>has awarded deps"| PICKLIST_SELECT["Manage dependents<br/>/options-selection/remove-active-dependents<br/>(CustomPage: PicklistRemoveDependents)"]

  PICKLIST_SELECT --> PICKLIST_CH
  PICKLIST_CH["Chapter: Remove Dependents (V3)"]
```

Chapter: Remove Dependents (V3)
```mermaid
flowchart TD
  Start([Active<br>dependents<br>with checkboxes<br><br>✓ Spouse<br>✓ Child<br>✓ Parent])

  direction TB
  DepType{Cycle through checked dependent, what is the dependent type?}
  Start --> DepType
  DepType -- "Spouse" --> SpouseReasonToRemove{Reason to remove}
  SpouseReasonToRemove -- "divorce" --> SpouseDetails[Divorce details]
  SpouseDetails --> NextDep
  SpouseReasonToRemove -- "death" --> SpouseDeathDetails[Death details]
  SpouseDeathDetails --> NextDep

  DepType -- "Child" --> ChildIsStepchild[Is stepchild?]
  ChildIsStepchild -- yes/no --> ChildReasonToRemove{Reason to remove}
  ChildLeftSchoolDetails --> NextDep
  ChildReasonToRemove -- "married" --> ChildMarriedDetails[Married details]
  ChildMarriedDetails --> NextDep
  ChildReasonToRemove -- "death" --> ChildDeathDetails[Death details]
  ChildDeathDetails --> NextDep
  ChildReasonToRemove -- "left school" --> ChildLeftSchoolDetails[Left school details]
  ChildReasonToRemove -- "stepchild left household" --> ChildHalfFinancialSupport{Provide at least half financial support?}
  ChildHalfFinancialSupport -- "no" --> ChildLeftHouseholdDetails[Left household details]
  ChildLeftHouseholdDetails --> NextDep
  ChildHalfFinancialSupport -- "yes" --> ChildAddress[Child current address]
  ChildAddress --> ChildLivesWith[Child lives with]
  ChildLivesWith --> ChildLeftHouseholdDetails
  ChildReasonToRemove -- "adopted" --> ChildAdoptedDetails[Adopted details]
  ChildAdoptedDetails --> exit

  DepType -- "Parent" --> ParentReasonToRemove{Reason to remove}
  ParentReasonToRemove -- "Other" --> ParentExit[Use different form]
  ParentExit --> exit
  ParentReasonToRemove -- "death" --> ParentDeathDetails[Death details]
  ParentDeathDetails --> NextDep

  NextDep@{ shape: hex, label: "Check next dependent" }
  NextDep l1@-- "More dependents" --> DepType
  NextDep -- "Leave loop" --> Done[Next chapter]

  Done -- "Adding dependent" --> NEXT_ADD[Next add chapter]
  Done --> HOUSEHOLD_CHECK["Pension chapter"]

  classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 1200,animation: dash 25s linear infinite, stroke:#ff9500, stroke-width:3px;
  class l1 animate

  %% Styling
  style NextDep fill:#ff9500,stroke:#ff6600,stroke-width:2px,color:#000000
```


Chapter: Add Your Spouse
```mermaid
flowchart TD
  ADD_OPTS["Add dependents"] -->|"Add spouse"| SPOUSE_START

  SPOUSE_START["Current spouse's personal information<br/>/add-spouse/current-legal-name"]
  SPOUSE_ID["Current spouse's identification<br/>/add-spouse/personal-information"]
  SPOUSE_MIL{"Spouse is<br/>a veteran?"}
  SPOUSE_MIL_INFO["Spouse's military service<br/>/add-spouse/military-service-information"]
  SPOUSE_LIVE["Marriage information<br/>/current-marriage-information/living-together"]
  SPOUSE_LIVE_CHECK{"Spouse lives<br/>with veteran?"}
  SPOUSE_ADDR["Spouse's address<br/>/current-marriage-information/spouse-address"]
  SPOUSE_SEPARATE["Reason living separately<br/>/current-marriage-information/reason-for-living-separately"]
  SPOUSE_PENSION_CHECK{"Show pension<br/>related questions?"}
  SPOUSE_INCOME["Spouse's income<br/>/current-marriage-information/spouse-income"]
  SPOUSE_LOCATION["Marriage location<br/>/current-marriage-information/location-of-marriage"]
  SPOUSE_TYPE["Marriage type<br/>/current-marriage-information/type-of-marriage"]

  SPOUSE_START --> SPOUSE_ID
  SPOUSE_ID --> SPOUSE_MIL
  SPOUSE_MIL -->|"Yes"| SPOUSE_MIL_INFO --> SPOUSE_LIVE
  SPOUSE_MIL -->|"No"| SPOUSE_LIVE
  SPOUSE_LIVE --> SPOUSE_LIVE_CHECK
  SPOUSE_LIVE_CHECK -->|"Not living together"| SPOUSE_ADDR --> SPOUSE_SEPARATE --> SPOUSE_PENSION_CHECK
  SPOUSE_LIVE_CHECK -->|"Living together"| SPOUSE_PENSION_CHECK
  SPOUSE_PENSION_CHECK -->|"Pension flag<br/>toggle on"| SPOUSE_INCOME --> SPOUSE_LOCATION
  SPOUSE_PENSION_CHECK -->|"Pension flag<br/>toggle off"| SPOUSE_LOCATION
  SPOUSE_LOCATION --> SPOUSE_TYPE

  SPOUSE_TYPE --> SPOUSE_MARRIAGE_HIST["Spouse's marital history<br/>/current-spouse-marriage-history"]
  SPOUSE_MARRIAGE_HIST -.-> |"add"| EX_INFO["Spouse's history<br/>Name, How, When, Where"]
  EX_INFO -.-> EX_ADD{Add another}
  EX_ADD -.-> |"Yes"| EX_INFO
  EX_ADD --> |"No"| VET_MARRIAGE_HIST

  SPOUSE_MARRIAGE_HIST --> VET_MARRIAGE_HIST["Veteran's marital history<br/>/veteran-marriage-history"]
  
  VET_MARRIAGE_HIST -.-> |"add"| EX_INFO2["Veteran's history<br/>Name, How, When, Where"]
  EX_INFO2 -.-> EX_ADD2{Add another}
  EX_ADD2 -.-> |"Yes"| EX_INFO2
  EX_ADD2 --> |"No"| HOUSEHOLD_CHECK
  
  VET_MARRIAGE_HIST --> HOUSEHOLD_CHECK["Pension chapter"]
```

Chapter: Add One or More Children
```mermaid
flowchart TD
  ADD_OPTS["Add dependents"] -->|"Add a child or<br/>a disabled child"| CHILD_START

  CHILD_START["Add child intro<br/>/686-report-add-child<br/>(Array Builder)"]
  CHILD_SUMMARY{"Child summary + Add another?<br/>/686-report-add-child/summary"}
  CHILD_INFO["Child information<br/>/686-report-add-child/:index/information"]
  CHILD_BIRTH["Place of birth<br/>/686-report-add-child/:index/place-of-birth"]
  CHILD_REL["Relationship type<br/>/686-report-add-child/:index/relationship-to-child"]
  CHILD_STEP_CHECK{"Child is a<br/>stepchild?"}
  CHILD_STEP["Biological parents<br/>/686-report-add-child/:index/stepchild"]
  CHILD_DISABILITY["Child's disability<br/>/686-report-add-child/:index/disability-part-one"]
  CHILD_DIS_CHECK{"Has permanent<br/>disability?"}
  CHILD_DIS2["Disability details<br/>/686-report-add-child/:index/disability-part-two"]
  CHILD_ADDL["Additional info<br/>/686-report-add-child/:index/additional-information-part-one"]
  CHILD_MARRIED_CHECK{"Was ever<br/>married?"}
  CHILD_MARRIAGE_END["Marriage end details<br/>/686-report-add-child/:index/marriage-end-details"]
  CHILD_PENSION_CHECK{"Show pension<br/>related questions?"}
  CHILD_ADDL2["Additional info pt 2<br/>/686-report-add-child/:index/additional-information-part-two"]
  CHILD_LIVES_CHECK{"Lives with<br/>veteran?"}
  CHILD_ADDR1["Child's address<br/>/686-report-add-child/:index/child-address-part-one"]
  CHILD_ADDR2["Child's address pt 2<br/>/686-report-add-child/:index/child-address-part-two"]

  CHILD_START --> CHILD_INFO --> CHILD_BIRTH --> CHILD_REL
  CHILD_REL --> CHILD_STEP_CHECK
  CHILD_STEP_CHECK -->|"stepchild + not biological"| CHILD_STEP --> CHILD_DISABILITY
  CHILD_STEP_CHECK -->|"Not stepchild"| CHILD_DISABILITY
  CHILD_DISABILITY --> CHILD_DIS_CHECK
  CHILD_DIS_CHECK -->|"Yes"| CHILD_DIS2 --> CHILD_ADDL
  CHILD_DIS_CHECK -->|"No"| CHILD_ADDL
  CHILD_ADDL --> CHILD_MARRIED_CHECK
  CHILD_MARRIED_CHECK -->|"Yes"| CHILD_MARRIAGE_END --> CHILD_PENSION_CHECK
  CHILD_MARRIED_CHECK -->|"No"| CHILD_PENSION_CHECK
  CHILD_PENSION_CHECK -->|"Yes"| CHILD_ADDL2 --> CHILD_LIVES_CHECK
  CHILD_PENSION_CHECK -->|"No"| CHILD_LIVES_CHECK
  CHILD_LIVES_CHECK -->|"No"| CHILD_ADDR1 --> CHILD_ADDR2
  CHILD_ADDR2 --> CHILD_SUMMARY
  
  CHILD_SUMMARY -->|"No"| HOUSEHOLD_CHECK["Pension chapter"]
  CHILD_SUMMARY -->|"Yes"| CHILD_INFO
```

Chapter: Add Students (18-23) - Form 674
```mermaid
flowchart TD
  ADD_OPTS["Add dependents"] -->|"Add child under 18, or child with permanent disability"| CHILD_START

  CHILD_START["Add child intro<br/>/686-report-add-child<br/>(Array Builder)"]
  CHILD_SUMMARY{"Summary +<br/>Add another?<br/>/686-report-add-child/summary"}
  CHILD_INFO["Child name, DoB, and SSN<br/>/686-report-add-child/:index/information"]
  CHILD_BIRTH["Place of birth<br/>/686-report-add-child/:index/place-of-birth"]
  CHILD_REL["Relationship type<br/>/686-report-add-child/:index/relationship-to-child"]
  CHILD_STEP_CHECK{"Child is a<br/>stepchild?"}
  CHILD_STEP["Biological parents<br/>/686-report-add-child/:index/stepchild"]
  CHILD_DISABILITY["Child's disability<br/>/686-report-add-child/:index/disability-part-one"]
  CHILD_DIS_CHECK{"Has permanent<br/>disability?"}
  CHILD_DIS2["Disability details<br/>/686-report-add-child/:index/disability-part-two"]
  CHILD_ADDL["Child lives with you, or ever been married?<br/>/686-report-add-child/:index/additional-information-part-one"]
  CHILD_MARRIED_CHECK{"Was ever<br/>married?"}
  CHILD_MARRIAGE_END["Marriage end details<br/>/686-report-add-child/:index/marriage-end-details"]
  CHILD_PENSION_CHECK{"Show pension<br/>related questions?"}
  CHILD_ADDL2["Child income in<br/>past 365 days?<br/>/686-report-add-child/:index/additional-information-part-two"]
  CHILD_LIVES_CHECK{"Lives with<br/>veteran?"}
  CHILD_ADDR1["Child's address<br/>/686-report-add-child/:index/child-address-part-one"]
  CHILD_ADDR2["Child's lives with?<br/>/686-report-add-child/:index/child-address-part-two"]

  CHILD_START --> CHILD_INFO --> CHILD_BIRTH --> CHILD_REL
  CHILD_REL --> CHILD_STEP_CHECK
  CHILD_STEP_CHECK -->|"stepchild + not biological"| CHILD_STEP --> CHILD_DISABILITY
  CHILD_STEP_CHECK -->|"Not a stepchild"| CHILD_DISABILITY
  CHILD_DISABILITY --> CHILD_DIS_CHECK
  CHILD_DIS_CHECK -->|"Yes"| CHILD_DIS2 --> CHILD_ADDL
  CHILD_DIS_CHECK -->|"No"| CHILD_ADDL
  CHILD_ADDL --> CHILD_MARRIED_CHECK
  CHILD_MARRIED_CHECK -->|"Yes"| CHILD_MARRIAGE_END --> CHILD_PENSION_CHECK
  CHILD_MARRIED_CHECK -->|"No"| CHILD_PENSION_CHECK
  CHILD_PENSION_CHECK -->|"Pension flag<br/>toggle on"| CHILD_ADDL2 --> CHILD_LIVES_CHECK
  CHILD_PENSION_CHECK -->|"Pension flag<br/>toggle off"| CHILD_LIVES_CHECK
  CHILD_LIVES_CHECK -->|"No"| CHILD_ADDR1 --> CHILD_ADDR2
  CHILD_ADDR2 --> CHILD_SUMMARY

  CHILD_SUMMARY -->|"No"| HOUSEHOLD_CHECK["Pension chapter"]
  CHILD_LIVES_CHECK -->|"Yes"| CHILD_SUMMARY
  CHILD_SUMMARY -->|"Yes"| CHILD_INFO
```

Chapter: Report Divorce (V2 only)
```mermaid
flowchart TD
  REMOVE_OPTS["Remove dependents"] -->|"Report divorce"| DIVORCE_START

  DIVORCE_START["Former spouse name & DoB<br/>/report-a-divorce/former-spouse-information"]
  DIVORCE_INFO["Divorce date,<br/>location & reason<br/>/report-a-divorce/divorce-information"]
  DIVORCE_PENSION_CHECK{"pension flag<br/>OFF?"}
  DIVORCE_INCOME["Former spouse income<br/>/report-a-divorce/former-spouse-income"]

  DIVORCE_START --> DIVORCE_INFO --> DIVORCE_PENSION_CHECK
  DIVORCE_PENSION_CHECK -->|"Pension flag<br/>toggle on"| DIVORCE_INCOME
  DIVORCE_PENSION_CHECK -->|"Pension flag<br/>toggle off"| HOUSEHOLD_CHECK

  DIVORCE_INCOME --> HOUSEHOLD_CHECK["Pension chapter"]
```

Chapter: Stepchild Left Household (V2 only)
```mermaid
flowchart TD
  REMOVE_OPTS["Remove dependents"] -->|"Stepchild<br/>not in household"| STEPCHILD_START

  STEPCHILD_START["Stepchild intro<br/>/686-stepchild-no-longer-part-of-household<br/>(Array Builder)"]
  STEPCHILD_SUMMARY{"Summary + Add another?<br/>/686-stepchild-no-longer-part-of-household/summary"}
  STEPCHILD_INFO["Child name, SSN, & DoB<br/>/686-stepchild-no-longer-part-of-household/:index/child-information"]
  STEPCHILD_DATE["Date left household<br/>/686-stepchild-no-longer-part-of-household/:index/date-child-left-household"]
  STEPCHILD_SUPPORT{"Veteran supports child?<br/>/686-stepchild-no-longer-part-of-household/:index/veteran-supports-child"}
  STEPCHILD_AMOUNT["Support amount<br/>/686-stepchild-no-longer-part-of-household/:index/child-support-amount"]
  STEPCHILD_ADDR["Child address<br/>/686-stepchild-no-longer-part-of-household/:index/child-address"]
  STEPCHILD_GUARDIAN["Lives with parent<br/>or guardian<br/>/686-stepchild-no-longer-part-of-household/:index/parent-or-guardian"]

  STEPCHILD_START --> STEPCHILD_INFO --> STEPCHILD_DATE --> STEPCHILD_SUPPORT
  STEPCHILD_SUPPORT -->|"Yes"| STEPCHILD_AMOUNT --> STEPCHILD_ADDR
  STEPCHILD_SUPPORT -->|"No"| STEPCHILD_ADDR
  STEPCHILD_ADDR --> STEPCHILD_GUARDIAN

  STEPCHILD_GUARDIAN --> STEPCHILD_SUMMARY 
  STEPCHILD_SUMMARY -->|"No"| HOUSEHOLD_CHECK["Pension chapter"]
  STEPCHILD_SUMMARY -->|"Yes"| STEPCHILD_INFO
```

Chapter: Deceased Dependents (V2 only)
```mermaid
flowchart TD
  REMOVE_OPTS["Remove dependents"] -->|"Report death"| DEATH_START

  DEATH_START["Death reporting intro<br/>/686-report-dependent-death<br/>(Array Builder)"]
  DEATH_SUMMARY{"Summary + Add another?<br/>/686-report-dependent-death/dependent-summary"}
  DEATH_INFO["Dependent name, SSN, & DoB <br/>/686-report-dependent-death/:index/dependent-information"]
  DEATH_TYPE{"Relationship to dependent<br/>/686-report-dependent-death/:index/dependent-type"}
  DEATH_CHILD_TYPE["Biological, adopted, or stepchild?<br/>/686-report-dependent-death/:index/child-type"]
  DEATH_DATE["Date of death<br/>/686-report-dependent-death/:index/date-of-death"]
  DEATH_LOCATION["Location of death<br/>/686-report-dependent-death/:index/location-of-death"]
  DEATH_PENSION_CHECK{"Show pension<br/>related questions?"}
  DEATH_INCOME["Dependent income<br/>/686-report-dependent-death/:index/dependent-income"]

  DEATH_START --> DEATH_INFO --> DEATH_TYPE
  DEATH_TYPE -->|"Was child?"| DEATH_CHILD_TYPE --> DEATH_DATE
  DEATH_TYPE -->|"Not child"| DEATH_DATE
  DEATH_DATE --> DEATH_LOCATION --> DEATH_PENSION_CHECK
  DEATH_INCOME --> DEATH_SUMMARY
  DEATH_PENSION_CHECK -->|"pension flag<br/>toggle on"| DEATH_INCOME
  DEATH_PENSION_CHECK -->|"pension flag<br/>toggle off"| DEATH_SUMMARY

  
  DEATH_SUMMARY -->|"No"| HOUSEHOLD_CHECK["Pension chapter"]
  DEATH_SUMMARY -->|"Yes"| DEATH_INFO
```

Chapter: Child Marriage (V2 only)
```mermaid
flowchart TD
  REMOVE_OPTS["Remove dependents"] -->|"Report marriage of<br/>child under 18"| CHILD_MARRY_START

  CHILD_MARRY_START["Child marriage intro<br/>/686-report-marriage-of-child<br/>(Array Builder)"]
  CHILD_MARRY_SUMMARY{"Summary + add another?<br/>/686-report-marriage-of-child/summary"}
  CHILD_MARRY_INFO["Child name, SSN & DoB<br/>/686-report-marriage-of-child/:index/child-information"]
  CHILD_MARRY_DATE["Date child married<br/>/686-report-marriage-of-child/:index/date-child-married"]
  CHILD_MARRY_PENSION_CHECK{"Show pension<br/>related questions?"}
  CHILD_MARRY_INCOME["Child income<br/>/686-report-marriage-of-child/:index/child-income"]

  CHILD_MARRY_START --> CHILD_MARRY_INFO --> CHILD_MARRY_DATE
  CHILD_MARRY_DATE --> CHILD_MARRY_PENSION_CHECK
  CHILD_MARRY_INCOME --> CHILD_MARRY_SUMMARY
  CHILD_MARRY_PENSION_CHECK -->|"pension flag<br/>toggle on"| CHILD_MARRY_INCOME
  CHILD_MARRY_PENSION_CHECK -->|"pension flag<br/>toggle off"| CHILD_MARRY_SUMMARY


  CHILD_MARRY_SUMMARY -->|"No"| HOUSEHOLD_CHECK["Pension chapter"]
  CHILD_MARRY_SUMMARY -->|"Yes"| CHILD_MARRY_INFO
```

Chapter: Child Left School (V2 only)
```mermaid
flowchart TD
  REMOVE_OPTS["Remove dependents"] -->|"Report child 18 or older<br/>not attending school"| SCHOOL_START

  SCHOOL_START["Child left school intro<br/>/report-child-stopped-attending-school<br/>(Array Builder)"]
  SCHOOL_SUMMARY{"Summary<br/>/report-child-stopped-attending-school/summary"}
  SCHOOL_INFO["Child name, SSN, & DoB<br/>/report-child-stopped-attending-school/:index/child-information"]
  SCHOOL_DATE["Date child left school<br/>/report-child-stopped-attending-school/:index/date-child-left-school"]
  SCHOOL_PENSION_CHECK{"Show pension<br/>related questions?"}
  SCHOOL_INCOME["Child income<br/>/report-child-stopped-attending-school/:index/child-income"]

  SCHOOL_START --> SCHOOL_INFO --> SCHOOL_DATE
  SCHOOL_DATE --> SCHOOL_PENSION_CHECK
  SCHOOL_PENSION_CHECK -->|"pension flag<br/>toggle on"| SCHOOL_INCOME
  SCHOOL_PENSION_CHECK -->|"pension flag<br/>toggle off"| SCHOOL_SUMMARY

  SCHOOL_INCOME --> SCHOOL_SUMMARY
  SCHOOL_SUMMARY -->|"No"| HOUSEHOLD_CHECK["Pension chapter"]
  SCHOOL_SUMMARY -->|"Yes"| SCHOOL_INFO
```

Chapter: Your Net Worth
```mermaid
flowchart TD
  HOUSEHOLD_CHECK{"Show pension<br/>related questions?"}
  HOUSEHOLD_INCOME["Net worth information<br/>/net-worth"]

  HOUSEHOLD_CHECK -->|"Yes, pension flag toggle on<br/>+ in receipt of pension<br/>+ adding a dependent"| HOUSEHOLD_INCOME

  %% Additional Evidence
  HOUSEHOLD_CHECK -->|"No"| EVIDENCE_CHECK
  HOUSEHOLD_INCOME --> EVIDENCE_CHECK

  EVIDENCE_CHECK["Additional evidence chapter"]
```

Chapter: Additional Information
```mermaid
flowchart TD
  SPOUSE_EVIDENCE{"Add spouse +<br/>non-ceremonial<br/>marriage?"}
  SPOUSE_EVIDENCE_UPLOAD["Spouse supporting evidence<br/>/add-spouse-evidence"]
  CHILD_EVIDENCE{"Add child +<br/>(outside USA / stepchild /<br/>adopted / disabled)?"}
  CHILD_EVIDENCE_UPLOAD["Child supporting evidence<br/>/add-child-evidence"]

  SPOUSE_EVIDENCE -->|"Yes"| SPOUSE_EVIDENCE_UPLOAD
  SPOUSE_EVIDENCE -->|"No"| CHILD_EVIDENCE
  CHILD_EVIDENCE -->|"Yes"| CHILD_EVIDENCE_UPLOAD
  CHILD_EVIDENCE -->|"No"| SUBMIT

  SPOUSE_EVIDENCE_UPLOAD --> CHILD_EVIDENCE
  CHILD_EVIDENCE_UPLOAD --> SUBMIT

  SUBMIT([Review & Submit])
```
