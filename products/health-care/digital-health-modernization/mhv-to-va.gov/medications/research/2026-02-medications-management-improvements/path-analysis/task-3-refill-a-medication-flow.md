# Task 3: Request an urgent refill for Metformin medication

**Starting point:** Varies. Most participants carried over from their Task 2 ending location.

**Target destination:** Metformin can be refilled from three places:
1. Medications Page (first refillable medication in the list)
2. Medication History Page with "Active medications" filter applied
3. Medication History Page with "All medications" filter applied

---

## Entry patterns

1. **Already on Medication History Page, redirected to Medications Page or refilled from there (4 of 8):** P1, P4, P5, P8 were on the Medication History Page from Task 2 and either refilled directly or followed cross-links to the Medications Page.
2. **Used secondary nav or breadcrumbs to reach Medications Page (2 of 8):** P13, P15 navigated to the Medications Page via nav controls.
3. **Started from MHV Landing Page (2 of 8):** P12, P16 went to the landing page and clicked "Refill VA medications."

*P7 excluded due to technical issues. P15 did not complete the task as designed due to task comprehension but demonstrated understanding of the refill flow when the moderator pivoted.*

```mermaid
flowchart TD
    HIST[Medication History Page<br>P1, P4, P5, P8]
    IP[In-Progress Medications Page<br>P13]
    LANDING[MHV Landing Page<br>P12, P16]
    HIST2[Medication History Page<br>P15]

    HIST -->|P1| FILTER_P1[Selects 'Active' filter,<br>forgets 'Update list',<br>then self-corrects]
    HIST -->|P4| FILTER_P4[Selects 'Renewal needed',<br>does not click 'Update list']
    HIST -->|P5| FILTER_P5[Selects 'All medications',<br>clicks 'Update list']
    HIST -->|P8| REFILL_LINK[Clicks 'Refill medications'<br>link]

    IP -->|P13| SEC_NAV[Clicks 'Medications'<br>tab]

    LANDING -->|P12| REFILL_LANDING1[Clicks 'Refill VA<br>medications' link]
    LANDING -->|P16| REFILL_LANDING2[Clicks 'Refill medications'<br>link]

    HIST2 -->|P15, moderator pivoted| MEDS_P15[Medications Page]

    FILTER_P1 -->|P1| FOUND_MET_P1[Finds Metformin,<br>clicks 'Request refill']
    FILTER_P4 -->|P4| FOUND_MET_P4[Finds Metformin in default view,<br>clicks 'Request refill']
    FILTER_P5 -->|P5| FOUND_MET_P5[Finds Metformin,<br>clicks 'Request refill']
    REFILL_LINK -->|P8| MEDS_P8[Medications Page]

    SEC_NAV -->|P13| MEDS_P13[Medications Page]

    MEDS_P8 -->|P8| FOUND_MET_P8[Finds Metformin,<br>selects checkbox]
    MEDS_P13 -->|P13| FOUND_MET_P13[Finds Metformin,<br>selects checkbox]
    MEDS_P15 -->|P15| FOUND_MET_P15["✅ Understands refill flow"]
    REFILL_LANDING1 -->|P12| MEDS_P12[Medications Page]
    REFILL_LANDING2 -->|P16| MEDS_P16[Medications Page]

    MEDS_P12 -->|P12| FOUND_MET_P12[Finds Metformin,<br>selects checkbox]
    MEDS_P16 -->|P16| FOUND_MET_P16[Finds Metformin,<br>selects checkbox]

    FOUND_MET_P1 -->|P1| SUCCESS_P1["✅ Green success alert<br>→ clicks 'Go to in-progress'"]
    FOUND_MET_P4 -->|P4| SUCCESS_P4["✅ Green success alert<br>feels 'very very confident'"]
    FOUND_MET_P5 -->|P5| SUCCESS_P5["✅ Green success alert<br>→ clicks 'Go to in-progress'"]
    FOUND_MET_P8 -->|P8| SUCCESS_P8["✅ Green success alert<br>→ clicks 'Go to in-progress'"]
    FOUND_MET_P12 -->|P12| SUCCESS_P12["✅ Green success alert<br>→ clicks 'Go to in-progress'"]
    FOUND_MET_P13 -->|P13| SUCCESS_P13["✅ Green success alert<br>→ clicks 'Go to in-progress'"]
    FOUND_MET_P16 -->|P16| SUCCESS_P16["✅ Green success alert<br>→ clicks 'Go to in-progress'"]

    style HIST fill:#0071bc,color:#fff
    style IP fill:#0071bc,color:#fff
    style LANDING fill:#0071bc,color:#fff
    style HIST2 fill:#0071bc,color:#fff
    style SUCCESS_P1 fill:#2e8540,color:#fff
    style SUCCESS_P4 fill:#2e8540,color:#fff
    style SUCCESS_P5 fill:#2e8540,color:#fff
    style SUCCESS_P8 fill:#2e8540,color:#fff
    style SUCCESS_P12 fill:#2e8540,color:#fff
    style SUCCESS_P13 fill:#2e8540,color:#fff
    style SUCCESS_P16 fill:#2e8540,color:#fff
    style FOUND_MET_P15 fill:#2e8540,color:#fff
    style FILTER_P4 fill:#fad980,color:#212121
    style FILTER_P1 fill:#fad980,color:#212121
```

**Color key:**
- 🔵 **Blue** = Starting points (carried over from Task 2)
- 🟢 **Green** = Successfully refilled Metformin or demonstrated understanding of refill flow
- 🟡 **Yellow** = Filter friction ("Update list" missed or wrong filter selected)
