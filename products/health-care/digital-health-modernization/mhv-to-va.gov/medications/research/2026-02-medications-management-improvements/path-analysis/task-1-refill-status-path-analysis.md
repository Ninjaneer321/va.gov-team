**Task 1:** Find Lipitor refill status  
**Where status actually lives:** In-Progress Medications page → grey “Request submitted / Too early to refill” card  
**Fallback views:** Medication History (Active or All)

                             ┌─────────────────────┐
                             │   MHV LANDING PAGE  │
                             └─────────┬───────────┘
                ┌──────────────────────┼────────────────────────┐
                ▼                      ▼                        ▼
     ┌─────────────────┐   ┌──────────────────┐     ┌──────────────────┐
     │ "Refill meds"   │   │ Medications (nav)│     │ "Review meds"    │
     │ P1,P5,P7,P12,P15│   │ P4,P13           │     │ P8,P16           │
     └────────┬────────┘   └─────────┬────────┘     └─────────┬────────┘
              │                      │                        │
              ▼                      ▼                        ▼
     ┌─────────────────┐   ┌─────────────────┐      ┌──────────────────┐
     │ Medications page│   │ Medications page│      │ Med History page │
     │ (refillable only│   │ (refillable only│      │ (Active default) │
     │  — no Lipitor)  │   │   — no Lipitor) │      │                  │
     └─┬───────┬───────┘   └─────────┬───────┘      └─────┬────────────┘
       │       │                     │                     │
       │       │                     │                     │
       │       │ "In‑progress meds"  │                     │
       │       │  link               │                     │
       │       ▼                     ▼                     ▼
       │   ┌────────────┐      ┌────────────┐      ┌──────────────────┐
       │   │ In‑Progress │      │ In‑Progress│      │ Med History page │
       │   │ Meds page   │      │ Meds page  │      │ (scroll/filters) │
       │   │             │      │            │      │                  │
       │   │ ❌ P1 misses │      │ ✅ P4 done │      │ ✅ P5 done       │
       │   │   grey card │      │ ✅ P13 done│      │ ✅ P7 done       │
       │   │             │      │ ✅ P15 done│      │ ✅ P12 done      │
       │   └──────┬──────┘      └────────────┘      └─────┬────────────┘
       │          │                                        │
       │          │ "Go to med history"                    │
       │          ▼                                        │
       │   ┌────────────┐                                  │
       │   │ Med History│                                  │
       │   │ page       │                                  │
       │   │ ✅ P1 done  │                                  │
       │   └────────────┘                                  │
       │                                                   │
       │                                                   │
       │                                      ┌────────────┴─────────────┐
       │                                      │ P8 path:                 │
       │                                      │ Review → Med History →   │
       │                                      │ Refill (no Lipitor) →    │
       │                                      │ In‑Progress → ✅ done     │
       │                                      └──────────────────────────┘
       │
       │                                      ┌────────────┴─────────────┐
       │                                      │ P16 path:                │
       │                                      │ Review → Med History     │
       │                                      │ (thought All, actually   │
       │                                      │ Active) → In‑Progress    │
       │                                      │ via Lipitor card → ✅ done│
       │                                      └──────────────────────────┘

Destinations reached
- ✅ In‑Progress Meds page (intended home): P4, P8, P13, P15, P16
- ✅ Med History page (Active/default list): P1, P5, P7, P12

Legend: ✅ found Lipitor status; ❌ reached page but missed card
