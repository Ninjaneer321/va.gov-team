# Task 5: Refill all eligible medications at once

**Starting point:** Varies. Some participants were directed back to the MHV Landing Page; others carried over from Task 4. Some bulk refill behaviors were observed during Task 3.

**Target destination:** Medications Page → "Select all" checkbox → "Request refills" button. Participants could reach the refillable medications list via:
1. MHV Landing Page → "Refill VA medications" link → Medications Page → Refillable medications list
2. Medications tool → "Refill medications" link → Medications Page → Refillable medications list

---

## Entry patterns

1. **Started from MHV Landing Page (3 of 6):** P5, P13, P16 were directed back to the landing page and used "Refill medications" or the secondary nav to reach the Medications Page.
2. **Already on Medications Page from prior task (3 of 6):** P4, P8, P12 were already viewing the refillable medications list and demonstrated bulk refill behavior during or immediately after Task 3.

*P1 and P15 excluded (task added after their sessions). P7 excluded due to technical issues.*

```mermaid
flowchart TD
    LANDING[MHV Landing Page<br>P5, P13, P16]
    MEDSPAGE[Already on Medications Page<br>P4, P8, P12]

    LANDING -->|P5| REFILL_LINK1[Clicks 'Refill medications'<br>link]
    LANDING -->|P13| SEC_NAV[Clicks 'Medications'<br>in 2nd nav]
    LANDING -->|P16| REFILL_LINK2[Clicks 'Refill prescriptions'<br>link]

    REFILL_LINK1 --> MEDS_P5[Medications Page]
    SEC_NAV --> MEDS_P13[Medications Page]
    REFILL_LINK2 --> MEDS_P16[Medications Page]

    MEDSPAGE -->|P4| SELECT_P4[Sees refillable meds list,<br>notices 'Select all' checkbox]
    MEDSPAGE -->|P8| SELECT_P8[Sees refillable meds list,<br>selects checkboxes]
    MEDSPAGE -->|P12| SELECT_P12[Sees refillable meds list,<br>selects checkboxes]

    MEDS_P5 -->|P5| SELECT_P5[Selects 'Select all 3 refills'<br>checkbox]
    MEDS_P13 -->|P13| SELECT_P13[Selects 'Select all 3 refills'<br>checkbox]
    MEDS_P16 -->|P16| SELECT_P16[Selects 'Select all 3 refills'<br>checkbox]

    SELECT_P4 -->|P4| SUCCESS_P4["✅ Understands bulk refill flow"]
    SELECT_P8 -->|P8| SUCCESS_P8["✅ Understands bulk refill flow"]
    SELECT_P12 -->|P12| SUCCESS_P12["✅ Understands bulk refill flow"]

    SELECT_P5 -->|P5| SUBMIT_P5[Clicks 'Request refills']
    SELECT_P13 -->|P13| SUBMIT_P13[Clicks 'Request refills']
    SELECT_P16 -->|P16| SUBMIT_P16[Clicks 'Request refills']

    SUBMIT_P5 -->|P5| SUCCESS_P5["✅ Green success alert<br>→ navigates back to landing page<br>to verify via 'Review medications'"]
    SUBMIT_P13 -->|P13| SUCCESS_P13["✅ Green success alert"]
    SUBMIT_P16 -->|P16| SUCCESS_P16["✅ Green success alert<br>→ clicks 'Go to in-progress'<br>to verify"]

    style LANDING fill:#0071bc,color:#fff
    style MEDSPAGE fill:#0071bc,color:#fff
    style SUCCESS_P4 fill:#2e8540,color:#fff
    style SUCCESS_P5 fill:#2e8540,color:#fff
    style SUCCESS_P8 fill:#2e8540,color:#fff
    style SUCCESS_P12 fill:#2e8540,color:#fff
    style SUCCESS_P13 fill:#2e8540,color:#fff
    style SUCCESS_P16 fill:#2e8540,color:#fff
```

**Color key:**
- 🔵 **Blue** = Starting points
- 🟢 **Green** = Successfully completed or demonstrated understanding of bulk refill flow
