# PCMM convergence scoring for care team selection

This doc describes how we can help users pick a relevant care team by comparing patient's assigned care team providers and the pools that these providers belong to.

In this doc:
- [Solution description](#solution-description)
- [How it works](#how-it-works)
- [Data sources](#data-sourcess)
- [UX options](#ux-options)
- [Limitations](#limitations)
- [Future (100% confidence path)]


## Solution description
- Rank OH message pools by relevance to each patient, so the most relevant pools surface to the top of the list instead of being buried in 50-100+ alphabetical entries.

## How it works
1. At session start, SM Patient API calls the PCMM API to get the patient's assigned care team providers (IENs)
2. Cross-reference IENs against `OHS.OH\_POOL\_PRACTITIONER`. This is an ETL table in the SM Oracle RDS that maps providers to OH message pools (loaded daily from CDW, ~22,800 rows / 2,092 pools)
3. For each pool, we calculate: `convergence\_score = (# of patient's PCMM providers in this pool) / (total PCMM providers for patient)`
4. Rank pools: score DESC → pool type (Clinical > Other) → pool size ASC → alphabetical
5. Score + rank returned alongside existing triage group data via `TriageTeamDTO.convergenceScore` and `TriageTeamDTO.convergenceRank`

## Data sources
| Source | What | Where |
|---|---|---|
| PCMM API | Patient's care team providers (IENs) | REST API called at session start |
| `OHS.OH_POOL_PRACTITIONER` | Provider → pool mapping | SM Oracle RDS (ETL from CDW daily) |
| `SMS.TRIAGE_GROUP` | Existing pool/TG data | SM Oracle RDS |

## UX options
1. **Sort within HCS sections**: In each HCS section, sort high-scoring pools to the top
2. **"Recommended for you" section**: Separate bucket at top of each HCS section with top-scoring pools, then full alphabetical list below. Clearer signal but introduces new UI concept.


## Limitations
- ~86-90% of patients have PCMM data. 10-14% won't get any scoring (fallback to alphabetical, current UX)
- Matching is by provider overlap, not a direct PCMM→pool link. Estimated 80-90% accuracy. Provider may be in a training pool or secondary pool that inflates its score
- PCMM data refreshes at session start. So changes during a session won't reflect until next login
- Cross-schema access needed (`OHS` schema from SM Patient API's `SMS` schema user). May need DB synonym or grant

## Future (100% confidence path)
Missing piece is a direct, authoritative link between PCMM team IDs and OH pool IDs. 

Some options:
1. OH product change: Oracle Health adds a PCMM team ID field to pool configuration.
2. PCMM product change: PCMM adds an OH pool ID field. 
3. VA-managed crosswalk table: We maintain a PCMM_TEAM_ID → OH_POOL_ID mapping ourselves. 100% accurate when maintained, but requires a curation process for ~2,000+ pools across all OH sites.

Convergence scoring is "good enough now". Any of the 100% paths could layer on top later as a scoring boost.
