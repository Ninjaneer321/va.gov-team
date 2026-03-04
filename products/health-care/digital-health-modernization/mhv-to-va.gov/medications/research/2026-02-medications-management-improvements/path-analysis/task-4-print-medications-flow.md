# Task 4: Find and print a list of current medications

**Starting point:** Varies. Most participants carried over from their Task 3 ending location.

**Target destination:** Medication History Page → Print feature (located at the bottom of the page). Participants could reach it via:
1. MHV Landing Page → "Review medications" link → Medication History Page → Print feature
2. Any Medications tool page → "Review and print list of medications" link → Medication History Page → Print feature

---

## Entry patterns

1. **Used "Review and print list of medications" cross-link (5 of 8):** P4, P5, P13, P15, P16 noticed the cross-link from the In-Progress or Medications Page and used it to reach the Medication History Page.
2. **Used "Go to your medication history" link (1 of 8):** P1 used the cross-link from the In-Progress Medications Page.
3. **Navigated from MHV Landing Page (1 of 8):** P12 clicked "Review medications" from the landing page.
4. **Hesitated, then found cross-link (1 of 8):** P8 initially considered the breadcrumb, then noticed the "Review and print list of medications" link.

*P7 excluded due to technical issues.*

```mermaid
flowchart TD
    IP[In-Progress Medications Page<br>P1, P4, P5, P8, P16]
    MEDS[Medications Page<br>P15]
    IP2[In-Progress Medications Page<br>P13]
    LANDING[MHV Landing Page<br>P12]

    IP -->|P1| HIST_LINK[Clicks 'Go to your<br>medication history' link]
    IP -->|P4| REVIEW_LINK1[Clicks 'Review and print<br>list of medications' link]
    IP -->|P5| REVIEW_LINK2[Clicks 'Review and print<br>list of medications' link]
    IP -->|P8| REVIEW_LINK3[Hesitates, then clicks<br>'Review and print list<br>of medications' link]
    IP -->|P16| REVIEW_LINK4[Clicks 'Review and print<br>list of medications' link]

    IP2 -->|P13| SEC_NAV[Clicks 'Medications'<br>tab]
    SEC_NAV -->|P13| MEDS_P13[Medications Page]
    MEDS_P13 -->|P13| REVIEW_LINK5[Clicks 'Review and print<br>list of medications' link]

    MEDS -->|P15| REVIEW_LINK6[Clicks 'Review and print<br>list of medications' link]

    LANDING -->|P12| REVIEW_LANDING[Clicks 'Review medications'<br>from landing page]

    HIST_LINK --> HIST_P1[Medication History Page]
    REVIEW_LINK1 --> HIST_P4[Medication History Page]
    REVIEW_LINK2 --> HIST_P5[Medication History Page]
    REVIEW_LINK3 --> HIST_P8[Medication History Page]
    REVIEW_LINK4 --> HIST_P16[Medication History Page]
    REVIEW_LINK5 --> HIST_P13[Medication History Page]
    REVIEW_LINK6 --> HIST_P15[Medication History Page]
    REVIEW_LANDING --> HIST_P12[Medication History Page]

    HIST_P1 -->|P1, selects 'Active',<br>clicks 'Update list'| PRINT_P1["✅ Finds print feature"]
    HIST_P4 -->|P4, selects 'All',<br>does not click 'Update list'| SCROLL_P4[Scrolls looking for print,<br>misses it at first]
    HIST_P5 -->|P5, does not use filters| PRINT_P5["✅ Finds print feature"]
    HIST_P8 -->|P8, 'Active' already selected| SCROLL_P8[Scrolls to bottom<br>looking for print]
    HIST_P12 -->|P12, selects 'All',<br>clicks 'Update list'| SCROLL_P12[Scrolls past print,<br>would right-click to print]
    HIST_P13 -->|P13, selects 'Active',<br>clicks 'Update list'| PRINT_P13["✅ Finds print feature<br>right away"]
    HIST_P15 -->|P15, selects 'Active',<br>clicks 'Update list'| SCROLL_P15[Scrolls up and down,<br>does not see print at first]
    HIST_P16 -->|P16, selects 'All',<br>does not click 'Update list'| SCROLL_P16[Does not find<br>print button]

    SCROLL_P4 -->|P4| PRINT_P4["✅ Finds print feature<br>at bottom of page"]
    SCROLL_P8 -->|P8| PRINT_P8["✅ Finds print feature"]
    SCROLL_P12 -->|P12, moderator directed| PRINT_P12["✅ Finds print feature"]
    SCROLL_P15 -->|P15, continues scrolling| PRINT_P15["✅ Finds print feature"]
    SCROLL_P16 -->|P16| NOTFOUND_P16["⚠️ Assumes 'Submit'<br>triggers print"]

    style IP fill:#0071bc,color:#fff
    style IP2 fill:#0071bc,color:#fff
    style MEDS fill:#0071bc,color:#fff
    style LANDING fill:#0071bc,color:#fff
    style PRINT_P1 fill:#2e8540,color:#fff
    style PRINT_P4 fill:#2e8540,color:#fff
    style PRINT_P5 fill:#2e8540,color:#fff
    style PRINT_P8 fill:#2e8540,color:#fff
    style PRINT_P12 fill:#2e8540,color:#fff
    style PRINT_P13 fill:#2e8540,color:#fff
    style PRINT_P15 fill:#2e8540,color:#fff
    style SCROLL_P4 fill:#fad980,color:#212121
    style SCROLL_P8 fill:#fad980,color:#212121
    style SCROLL_P12 fill:#fad980,color:#212121
    style SCROLL_P15 fill:#fad980,color:#212121
    style SCROLL_P16 fill:#fad980,color:#212121
    style NOTFOUND_P16 fill:#e31c3d,color:#fff
```

**Color key:**
- 🔵 **Blue** = Starting points (carried over from Task 3)
- 🟢 **Green** = Successfully located print feature
- 🟡 **Yellow** = Difficulty finding print feature (scrolled past it, missed it initially)
- 🔴 **Red** = Did not locate the print feature as designed
