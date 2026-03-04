# Task 2: Find the name of an old medication (rash cream)

**Starting point:** Varies. Most participants carried over from their Task 1 ending location.

**Target destination:** Medication History Page with either "Inactive" or "All medications" filter applied.

---

## Entry patterns

1. **Started from In-Progress or Medications Page, used cross-links or nav (5 of 9):** P1, P7, P8, P13, P15 were on the In-Progress or Medications Page and had to find a path to the Medication History Page. Cross-links like "Review and print list of medications" were frequently missed.
2. **Used secondary nav or breadcrumbs to reach Medications Page first (3 of 9):** P4, P13, P16 clicked "Medications" in the secondary nav, which routed them to the Medications Page (refillable meds only), requiring a second redirect.
3. **Went directly to Medication History from landing page (1 of 9):** P12 clicked "Review medications" from the MHV landing page.

```mermaid
flowchart TD
    IP[In-Progress Medications Page<br>P1, P4, P7, P8, P13]
    MEDSPAGE[Medications Page<br>P15]
    LANDING[MHV Landing Page<br>P12, P16]
    T1END[Carried over from Task 1<br>P5 already on Medication History Page]

    IP -->|P1| HIST_LINK1[Clicks 'Go to your<br>medication history' link]
    IP -->|P4| SEC_NAV1[Clicks 'Medications'<br>in 2nd nav]
    IP -->|P7| BREADCRUMB[Uses breadcrumb<br>back to Medications Page]
    IP -->|P8| SEC_NAV2[Clicks 'Medications'<br>in 2nd nav]
    IP -->|P13| SEC_NAV3[Clicks 'Medications'<br>nav or breadcrumb]

    MEDSPAGE -->|P15| REVIEW_LINK1[Clicks 'Review and print<br>list of medications' link]

    LANDING -->|P12| REVIEW_LINK2[Clicks 'Review medications'<br>from landing page]
    LANDING -->|P16| SEC_NAV4[Clicks 'Medications'<br>in 2nd nav]

    SEC_NAV1 -->|P4| MEDS_P4[Medications Page<br>refillable meds only]
    SEC_NAV2 -->|P8| MEDS_P8[Medications Page<br>refillable meds only]
    SEC_NAV3 -->|P13| MEDS_P13[Medications Page<br>refillable meds only]
    SEC_NAV4 -->|P16| MEDS_P16[Medications Page<br>refillable meds only]

    BREADCRUMB -->|P7| MEDS_P7[Medications Page<br>refillable meds only]

    MEDS_P4 -->|P4| HIST_P4["✅ Medication History Page"]
    MEDS_P8 -->|P8, moderator directed| HIST_P8["✅ Medication History Page"]
    MEDS_P13 -->|P13| REVIEW_LINK3[Clicks 'Review and print<br>list of medications' link]
    MEDS_P16 -->|P16| BACK_LANDING[Back to MHV Landing Page]
    MEDS_P7 -->|P7, after several minutes| REVIEW_LINK4[Notices 'Review and print<br>list of medications' link]

    BACK_LANDING -->|P16| HIST_P16["✅ Medication History Page"]
    REVIEW_LINK3 -->|P13| HIST_P13["✅ Medication History Page"]
    REVIEW_LINK4 -->|P7| HIST_P7["✅ Medication History Page"]

    HIST_LINK1 -->|P1| HIST_P1["✅ Medication History Page"]
    REVIEW_LINK1 -->|P15| HIST_P15["✅ Medication History Page"]
    REVIEW_LINK2 -->|P12| HIST_P12["✅ Medication History Page"]
    T1END -->|P5| HIST_P5["✅ Medication History Page"]

    style IP fill:#0071bc,color:#fff
    style MEDSPAGE fill:#0071bc,color:#fff
    style LANDING fill:#0071bc,color:#fff
    style T1END fill:#0071bc,color:#fff
    style HIST_P1 fill:#2e8540,color:#fff
    style HIST_P4 fill:#2e8540,color:#fff
    style HIST_P5 fill:#2e8540,color:#fff
    style HIST_P7 fill:#2e8540,color:#fff
    style HIST_P8 fill:#2e8540,color:#fff
    style HIST_P12 fill:#2e8540,color:#fff
    style HIST_P13 fill:#2e8540,color:#fff
    style HIST_P15 fill:#2e8540,color:#fff
    style HIST_P16 fill:#2e8540,color:#fff
    style BACK_LANDING fill:#fad980,color:#212121
```

**Color key:**
- 🔵 **Blue** = Starting points (carried over from Task 1)
- 🟢 **Green** = Reached Medication History Page (target destination)
- 🟡 **Yellow** = Backtracking
