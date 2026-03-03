# Task 1: Check the status of a refill request that has already been submitted
Three entry patterns emerged:

1. **Refill-first (5 of 9):** P1, P5, P7, P12, P15 clicked "Refill VA medications" and had to redirect
2. **Medications nav (2 of 9):** P4, P13 used the secondary nav, landed on Medications Page, and quickly found cross-links to In-Progress
3. **Review-first (2 of 9):** P8, P16 went to "Review medications" / Medication History Page, then navigated to In-Progress



```mermaid
flowchart TD
    START[MHV Landing Page<br>All 9 participants start here]

    START -->|P1, P5, P7, P12, P15| REFILL[Refill VA Medications<br>Medications Page]
    START -->|P4, P13| MEDS_NAV[Medications via 2nd nav<br>Medications Page]
    START -->|P8, P16| REVIEW[Review Medications<br>Medication History Page]

    REFILL -->|P1| CROSSLINK_IP1[Notices 'Go to in-progress<br>medications' link]
    REFILL -->|P5, P7, P12| BACK_LANDING[Back to MHV Landing Page]
    REFILL -->|P15| CROSSLINK_IP2[Notices 'Go to in-progress<br>medications' link]

    MEDS_NAV -->|P4| CROSSLINK_IP3[Notices 'in-progress<br>medications' link]
    MEDS_NAV -->|P13| CROSSLINK_IP4[Notices 'Review In-Progress<br>Medications' link]

    REVIEW -->|P8| REFILL_LINK[Clicks 'Refill medications' link<br>Medications Page]
    REVIEW -->|P16| IP_LINK[Clicks 'Go to in-progress<br>medications' link from med card]

    BACK_LANDING -->|P5| REVIEW2[Review Medications<br>Medication History Page]
    BACK_LANDING -->|P7| REVIEW3[Review Medications<br>Medication History Page]
    BACK_LANDING -->|P12| REVIEW4[Review Medications<br>Medication History Page]

    REFILL_LINK -->|P8| CROSSLINK_IP5[Clicks 'In-progress<br>medications' link]

    REVIEW2 -->|P5| FOUND_HIST["✅ Found Lipitor on<br>Medication History Page"]
    REVIEW3 -->|P7| FOUND_HIST2[Found Lipitor card<br>on Medication History Page]
    REVIEW4 -->|P12| FOUND_HIST3[Found Lipitor card<br>on Medication History Page]

    FOUND_HIST2 -->|P7, moderator clicked| IN_PROGRESS_P7["✅ In-Progress<br>Medications Page"]
    FOUND_HIST3 -->|P12| IP_FROM_CARD["✅ Clicks 'Go to in-progress<br>medications' from med card"]

    CROSSLINK_IP1 -->|P1| IN_PROGRESS_P1[In-Progress Medications Page<br>Misses grey card on first pass]
    IN_PROGRESS_P1 -->|P1| FOUND_P1["✅ Found Lipitor grey card<br>on second scan"]

    CROSSLINK_IP2 -->|P15| FOUND_IP["✅ In-Progress Medications Page<br>Found Lipitor immediately"]
    CROSSLINK_IP3 -->|P4| FOUND_P4["✅ In-Progress Medications Page<br>Found Lipitor quickly"]
    CROSSLINK_IP4 -->|P13| IN_PROGRESS_P13[In-Progress Medications Page<br>Difficulty scrolling]
    IN_PROGRESS_P13 -->|P13| FOUND_P13["✅ Found Lipitor grey card"]

    CROSSLINK_IP5 -->|P8| FOUND_P8["✅ In-Progress Medications Page<br>Found Lipitor right away"]

    IP_LINK -->|P16| FOUND_P16["✅ In-Progress Medications Page<br>Found Lipitor"]

    IP_FROM_CARD -->|P12| FOUND_P12["✅ In-Progress Medications Page"]

    style START fill:#0071bc,color:#fff
    style FOUND_HIST fill:#2e8540,color:#fff
    style FOUND_P1 fill:#2e8540,color:#fff
    style FOUND_IP fill:#2e8540,color:#fff
    style FOUND_P4 fill:#2e8540,color:#fff
    style FOUND_P13 fill:#2e8540,color:#fff
    style FOUND_P8 fill:#2e8540,color:#fff
    style FOUND_P16 fill:#2e8540,color:#fff
    style FOUND_P12 fill:#2e8540,color:#fff
    style IN_PROGRESS_P7 fill:#2e8540,color:#fff
    style BACK_LANDING fill:#e31c3d,color:#fff
```
