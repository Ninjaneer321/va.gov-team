## Background

This [ticket #139312](https://github.com/department-of-veterans-affairs/va.gov-team/issues/139312) asks us to assess how CST (Claim Status Tool) can surface per-beneficiary status for CHAMPVA submissions. When a veteran submits CHAMPVA paperwork for their family, a single submission can cover multiple people — for example, a spouse and two dependents — all grouped together under one submission ID (`form_uuid`).

Today, CST shows only a single status for the whole submission. It has no awareness that one submission covers multiple people who could each be at a different stage of processing. The goal of this story is to agree on the right approach before writing any code, so the team is aligned on complexity, data availability, and risk.

---

## What We Already Have (The Good News)

Before getting into options, it's worth explaining what our database already stores — because it shapes everything.

### The `ivc_champva_forms` table

Every file in a CHAMPVA submission gets its own row in our database table called `ivc_champva_forms`. When a veteran submits CHAMPVA paperwork for a spouse and two dependents, we end up with multiple rows — one per person, per document — all sharing the same submission ID (`form_uuid`) so we know they belong together.

Each row includes:

| Column | What it stores |
|---|---|
| `form_uuid` | The ID that groups all rows for one submission together |
| `first_name` / `last_name` | The name of the specific beneficiary (the person being enrolled) |
| `form_number` | Which CHAMPVA form this row is for, e.g. `10-7959C` |
| `pega_status` | The current processing status, updated daily by our PEGA sync job |
| `case_id` | The case ID assigned by PEGA once they start processing |
| `ves_status` | API call result from VES (success/error) — confirms whether the submission was successfully received by VES, not whether the beneficiary is eligible or enrolled |
| `submitted_by_icn` | The ICN (unique VA identifier) of the veteran who submitted on behalf of their family. This column was just added and is now in staging. |
| `updated_at` | Automatically updated by Rails any time anything in the row changes |

**The key insight: per-beneficiary status data already exists in our database.** The problem is not a data gap — it's that we throw the per-person data away before it ever reaches the front end.

### How the data gets thrown away today

A class called `ClaimBuilder` (`lib/benefits_claims/providers/ivc_champva/claim_builder.rb`) is responsible for turning database rows into the JSON response that CST reads. When it finds multiple rows for the same submission, it picks just one — the most recently updated — and discards the rest:

```ruby
def pick_representative(records)
  records.max_by(&:updated_at)  # picks one row, silently discards all others
end
```

It does list all the applicant names, but with no status attached to them:

```ruby
def applicant_names(records)
  records.map { |r| "#{r.first_name} #{r.last_name}" }  # names only, no statuses
end
```

So the veteran sees a list of names and one status for the whole group — they have no way to know whether each individual person has been approved, is still pending, or needs something.

### How CST gets its data

CST reads from our own database — it does **not** call PEGA in real time. A background job (`PollPegaStatusJob`) runs daily on a schedule, asks PEGA for the latest status on each submission, and writes the results back to each row in `ivc_champva_forms`. CST then reads whatever is in the database.

This is actually a good design: if PEGA's systems go down, CST just shows the last known status rather than throwing an error or showing a blank screen. The trade-off is that status information can be up to 24 hours stale.

---

## Confirmed Findings (from Code)

**PEGA does return per-applicant statuses — Options A and B are on solid ground.**

When `PollPegaStatusJob` calls PEGA with a `form_uuid`, PEGA returns an **array of case objects** — one per applicant, not one status for the whole submission. The job then matches each DB row to its specific PEGA case object by `case_id` and writes a distinct `pega_status` to each row individually.

This means the per-beneficiary data in `ivc_champva_forms` is genuinely meaningful — each person's row can and does hold a different status as their application progresses.

**One nuance — early submission fallback:** Before PEGA has assigned individual case IDs (immediately after submission), rows fall back to the first case in the array. This means all rows for a submission may temporarily share the same status early on. Once PEGA assigns case IDs, each row diverges to its own individual status. This is expected behavior and not a concern for CST, which is most useful once processing is underway.

---

## The ICN Problem (Why This Isn't Trivial)

When a veteran submits CHAMPVA, they are applying **on behalf of their family members** — the spouse and dependents are not the ones logged into VA.gov. The database rows we store have the beneficiary's name, but not their VA identifier (ICN).

When the veteran later logs into VA.gov and opens CST, we have their ICN. We need a way to connect that ICN to their family's CHAMPVA submission records. There are two ways to do that:

**Way 1 — Use `submitted_by_icn` (already done):** We store the submitting veteran's ICN at the time of submission. When CST loads, we query `ivc_champva_forms` filtering by the logged-in veteran's ICN — returning all rows they submitted on behalf of their family. This column (`submitted_by_icn`) was just added to the database in a recently merged PR and is now in staging.

**Way 2 — Look it up in real time via MPI and VES:** Query VA's Master Person Index (MPI) to find out who this veteran's dependents and family members are, then ask the Veterans Enrollment System (VES) what their CHAMPVA status is. This is more powerful but requires additional infrastructure work that hasn't started yet.

---

## Data Retention Constraint

A background job called `OldRecordsCleanupJob` is designed to delete rows from `ivc_champva_forms` where the record hasn't been updated in more than 60 days. This sounds alarming, but there is an important nuance:

Because `updated_at` resets every time any column in the row changes — including when the daily PEGA polling job writes a new status — active, in-flight claims stay fresh and are never at risk. The 60-day clock only starts ticking after PEGA stops updating a record, which happens when a claim reaches a final settled state.

In practice, the concern is: if a veteran submits, their claim gets fully processed and closed, and then they come back to VA.gov 3+ months later hoping to see their history — those rows would be gone and CST would show nothing.

**Important:** This job is currently behind two separate feature flags and is **not running in any environment**. It has not caused any data loss yet and won't until someone intentionally enables it. We have time to make a deliberate decision about the threshold and what categories of records to protect before we turn it on.

---

## PEGA Status Normalization

The status strings we receive from PEGA (e.g. "Pending", "In Review", "Approved") have known inconsistencies — typos, different capitalizations, and variations across different form types. `ClaimBuilder` already has a partial map that normalizes these, but it's known to be incomplete.

Before we surface per-beneficiary statuses to veterans in the UI, we need to audit and complete this normalization map. Displaying a raw misspelled status string next to a beneficiary's name would be a confusing and poor experience.

---

## Option A — Enrich `claimStatusMeta` with Per-Beneficiary Statuses (Recommended)

### What this means in plain language
Instead of throwing away the per-person statuses, we include them in the existing data structure that CST already reads (`claimStatusMeta`). We add a `beneficiaryStatuses` array that lists each person by name alongside their individual status. The front end then renders a breakdown showing each family member's status rather than a single line for the whole submission.

### What changes on the backend
We update `ClaimBuilder` to stop picking just one representative row and instead build an array of objects — one per beneficiary — each containing the person's name, their current status, and which form it relates to:

```ruby
def beneficiary_statuses(records)
  records.map do |r|
    {
      name: "#{r.first_name} #{r.last_name}",
      status: normalize_status(r.pega_status),
      form_number: r.form_number
    }
  end
end
```

The single top-level claim status (shown in the card header) becomes the most conservative status across all beneficiaries — if anyone is still pending, the overall status shows as pending. No database schema changes are needed. We filter `ivc_champva_forms` by `submitted_by_icn`, which is already in the database.

### What changes on the front end
CST needs a new UI component that, when `beneficiaryStatuses` is present and has more than one entry, renders a per-person breakdown rather than (or in addition to) the single status line.

### Pros
- No new infrastructure, no new API integrations, no new database tables
- The data already exists — this is purely a change to what we return from the read path
- If PEGA's systems go down, CST still shows the last known status per person — nothing breaks
- Builds on the existing `claimStatusMeta` contract that CST already reads today

### Cons
- `submitted_by_icn` is `NULL` on all rows submitted before this column was added. Veterans who submitted before that point won't see per-beneficiary status until we backfill or until they resubmit
- The PEGA status normalization map needs to be completed before this ships
- FE needs a new component for the per-person rendering

---

## Option B — New `beneficiaryStatuses` Top-Level Field

### What this means in plain language
This is identical to Option A in terms of what data we surface and how we get it. 
```json
{
  "claimStatusMeta": { ... },
  "beneficiaryStatuses": [
    { "name": "Jane Doe", "status": "Pending", "form_number": "10-7959C" },
    { "name": "John Doe", "status": "Approved", "form_number": "10-7959C" }
  ]
}
```
Option A puts the `beneficiaryStatuses` array **inside** `claimStatusMeta`. Option B puts it **next to** it as its own field. Same data either way.

The only difference is *where* in the API response we put it — as its own dedicated top-level field rather than nested inside `claimStatusMeta`. This makes the API contract cleaner and easier for the front end to reason about independently.

### Why you might prefer this over Option A
If `claimStatusMeta` is already getting crowded and the team wants a clean dedicated contract for beneficiary data, Option B is a better long-term API shape. It's also fully backward compatible — the existing CST front-end code simply ignores fields it doesn't recognize, so nothing breaks.

### Pros and Cons
Identical to Option A. Same data, same database query, same backfill gap, same normalization requirement. This is purely an API contract design preference.

---

## Option C — Real-Time Lookup via VA's Master Person Index and Enrollment System (Future State)

### What this means in plain language
Instead of relying on whatever we stored in our database at submission time, we look up the veteran's family relationships and each beneficiary's CHAMPVA status in real time, directly from VA's authoritative systems. When the veteran opens CST, we ask VA's Master Person Index "who are this veteran's dependents?" and then ask the Veterans Enrollment System "what is each of those people's CHAMPVA status?"

This approach doesn't depend on anything we stored. It works even for claims submitted before we added `submitted_by_icn`, and even for people enrolled via paper forms that never touched vets-api.

### Why it's blocked

**This is a different ICN problem than what Brandon's PR solved.** Brandon's PR (#27205) stores the submitting veteran's ICN at submission time, which enables Options A and B to filter `ivc_champva_forms` to the logged-in veteran's records. That problem is solved.

Option C requires the opposite direction — starting from the veteran's ICN and asking MPI "who are this veteran's dependents?" to get each beneficiary's ICN, then querying VES per beneficiary:

- **Brandon's work:** Veteran's ICN → find their submissions in our DB ✅ solved
- **Option C needs:** Veteran's ICN → ask MPI "who are your dependents?" → get each dependent's ICN → query VES per dependent ICN ❌ not done

That MPI dependent lookup infrastructure does not exist yet and is blocked on a separate piece of work that has not started. Until that work defines the lookup pattern, Option C cannot be built on either the backend or front end.

Additionally, making live API calls to MPI and VES in the CST page load path introduces latency and availability risk that needs to be assessed — if either service is slow or down, we need a fallback so CST doesn't break.

### Pros
- Does not require backfilling `submitted_by_icn`
- No 60-day data retention concern — we're reading from authoritative live systems
- Works for paper submissions and cases that never went through vets-api
- Reflects truly current eligibility state, not just last-known submission state

### Cons
- Blocked until the ICN mapping work is complete
- Adds live API calls to the CST page load path — latency and availability risk with complex fallback requirements
- VES returns enrollment/eligibility status, which is a different vocabulary than PEGA's processing statuses; the front end would need to reconcile two different status models
- Significantly more implementation scope than Options A or B

---

## Summary Table

| | **Option A** | **Option B** | **Option C** |
|---|---|---|---|
| New infrastructure needed | No | No | Yes |
| Database schema changes | No | No | No |
| Currently blocked on other work | No | No | Yes (ICN mapping work not started) |
| Backfill needed for old submissions | Yes | Yes | No |
| Live API calls in page load | No | No | Yes |
| Front-end changes required | Yes | Yes | Yes (more complex) |
| Implementation risk | Low | Low | High |
| Recommended now | ✅ Yes | Viable alternative | Future state |

---

## Recommendation

**Options A or B are unblocked and ready to scope now.** The `submitted_by_icn` column is already in the database (merged to staging). The per-beneficiary status data is already being written to `ivc_champva_forms` every day by the PEGA cron job. What we need to do is stop throwing that data away in `ClaimBuilder` and start including it in the CST response — plus build the front-end component to display it.

**Choosing between A and B** is a team preference on API design. Option A has a smaller diff and builds on what already exists. Option B is a cleaner contract if the team prefers a dedicated field. Either is low risk and can ship without waiting on any other team.

**Option C** is the right long-term direction when we want to show a truly authoritative, real-time view — but it cannot start until the separate ICN mapping work is done and we've assessed the latency/availability implications for the CST load path.

**"See Follow-Up Questions & Gaps and Stories to Write below for open decisions and next steps."**

---

## Expanding to All of CST (If Scope Grows)

### Important Caveat First

The per-beneficiary status problem is not universal across all CST claim types. Disability claims, for example, are filed by and for the veteran themselves — there are no separate beneficiaries to list. The multi-beneficiary pattern is most relevant for a specific subset of benefit types where a veteran files on behalf of family members, such as:

- **CHAMPVA** — health coverage for dependents/survivors (the primary driver of this story)
- **Chapter 35 (DEA)** — education benefits for dependents of permanently disabled or deceased veterans
- **DIC (Dependency and Indemnity Compensation)** — compensation for surviving spouses and dependents
- **Survivors Pension** — for surviving spouses and dependents

For the remaining claim types in CST, the veteran is the only subject and per-beneficiary status doesn't apply.

### What Would Need to Change

**API Contract:** Option B's dedicated `beneficiaryStatuses` top-level field becomes the clearly preferred approach over Option A. It defines a standard, reusable contract slot that any claim type provider can populate when relevant, rather than being specific to CHAMPVA's `claimStatusMeta`. Claim types where beneficiaries don't apply simply return an empty array or omit the field.

**Provider Architecture:** Each claim type in CST has its own backend provider (CHAMPVA uses `ClaimBuilder`; other types use different providers backed by different systems — EVSS, Lighthouse, BGS, etc.). Expanding this pattern means each relevant provider would need its own assessment of whether per-beneficiary data is available in its underlying system and in what shape.

**Not a one-size-fits-all:** Unlike CHAMPVA where per-beneficiary rows already exist in `ivc_champva_forms`, other benefit systems may not store data with the same per-person granularity. Each would need to be assessed individually before implementing.

### Recommended Approach If Scope Expands

1. **Start with CHAMPVA as the pilot** — it has the clearest data model and the most immediate need. Use it to validate the `beneficiaryStatuses` contract and the FE rendering pattern.
2. **Define the contract generically from day one** — design `beneficiaryStatuses` as a standard field shape `{ name, status, form_number }` that any provider can implement, not something CHAMPVA-specific.
3. **Audit other relevant claim types one by one** — assess Chapter 35, DIC, and Survivors Pension to determine whether their backend systems provide per-beneficiary data and what work is needed to surface it.
4. **Leave disability and other veteran-only claim types out of scope** — no beneficiary concept applies.

This approach lets us ship value for CHAMPVA now while laying the groundwork for broader expansion without over-engineering upfront.

---

## Follow-Up Questions & Gaps

These are open questions that need answers before implementation stories can be written or sized confidently.

### Backend / Data

1. **Backfill feasibility** — Is the submitting veteran's ICN stored anywhere in `request_json_ciphertext` for submissions made before `submitted_by_icn` was added? If yes, a backfill script is straightforward. If no, historical submissions are permanently unlinked and veterans who submitted before the column was added will see no per-beneficiary data in CST.

2. **How many unlinked records exist?** — A quick DB query to count rows where `submitted_by_icn IS NULL` would tell us the scale of the backfill gap.

3. **PEGA status normalization audit** — What is the full set of `pega_status` strings currently in the database, including typos and variations? This needs to be inventoried before any per-beneficiary status is shown to a veteran in the UI.

4. **`OldRecordsCleanupJob` threshold decision** — Is 60 days the right window? Should we protect records in non-terminal statuses from deletion regardless of age? This needs a deliberate decision before the job is enabled in any environment.

5. **Scope of multi-beneficiary submissions** — Do all CHAMPVA form types follow the same multiple-applicant-per-submission pattern, or only some?

### Front End / Design

6. **What does the UI actually look like?** — Has design produced any mocks for a per-beneficiary breakdown inside a claim card? This is a prerequisite for all FE implementation stories.

7. **Fallback when `beneficiaryStatuses` is absent or empty?** — For pre-backfill submissions or non-CHAMPVA claim types, the field will be absent. Does the UI silently show nothing extra, or display a message?

8. **If scope expands to all of CST** — Which other claim types are in scope? Has the PM confirmed which benefit types should be Phase 1 vs. future?

### Product / Strategy

9. **Option A vs. B preference** — If there's any chance of expanding to other claim types, Option B is strongly preferred. Team should align before implementation begins.

10. **Phase 2 timeline** — Is there a plan for the live VES integration (Option C)? If it's on the near-term roadmap, the Option A/B contract should be designed with that migration in mind.

---

## Stories to Write

Stories are organized by option. Prerequisites are shared across all options and should be written regardless.

---

### Prerequisite Stories (All Options)

**BE — PEGA Status Normalization Audit**
Inventory all `pega_status` values currently in `ivc_champva_forms` (including typos and variations). Complete the normalization map in `ClaimBuilder` so every possible PEGA status string maps to a clean, display-safe label. Write tests covering all known variants.

**BE — Backfill Assessment for `submitted_by_icn`**
Determine whether the submitting veteran's ICN can be recovered from `request_json_ciphertext` for rows where `submitted_by_icn IS NULL`. Produce a count of affected rows. Recommend: backfill script, accept the gap, or a hybrid approach. This story is research/spike output only — implementation is a separate story if backfill is viable.

**BE — `OldRecordsCleanupJob` Threshold Decision**
Review the 60-day retention window and determine the right threshold. Assess whether records in non-terminal PEGA statuses should be excluded from deletion. Update `CLEANUP_THRESHOLD_DAYS` and/or add a guard clause before the feature flag is enabled in any environment.

**Design — Per-Beneficiary Status UI Pattern**
Produce design mocks for how a per-beneficiary status breakdown renders inside a CST claim card. Define behavior for single vs. multiple beneficiaries, loading states, and the fallback when per-beneficiary data is unavailable. This is a prerequisite for all FE implementation stories.

---

### Option A — Enrich `claimStatusMeta`

**BE — Enrich `ClaimBuilder` with `beneficiaryStatuses`**
Update `ClaimBuilder` to stop collapsing all rows to one representative and instead build a `beneficiaryStatuses` array of `{ name, status, form_number }` objects. Define the top-level claim status as the most conservative status across all beneficiaries. Add unit tests covering single and multiple beneficiary scenarios.

**BE — Wire `submitted_by_icn` filter into CHAMPVA provider query**
Update the `ivc_champva_forms` query in the CHAMPVA provider to filter by `submitted_by_icn = veteran_icn` so CST only returns the logged-in veteran's submissions.

**FE — Render per-beneficiary status breakdown in claim card**
Build the new UI component (per design mocks) that reads `claimStatusMeta.beneficiaryStatuses` and renders each person's name and status. Handle the fallback when the field is absent or empty. Write unit and integration tests.

---

### Option B — New `beneficiaryStatuses` Top-Level Field

**BE — Add `beneficiary_statuses` to `ClaimResponse` serializer**
Add a dedicated `beneficiary_statuses` top-level attribute to the claim response. Populate it with the same `{ name, status, form_number }` array as Option A. Same `ClaimBuilder` changes apply. Write unit tests.

**BE — Wire `submitted_by_icn` filter into CHAMPVA provider query**
Same as Option A.

**FE — Render per-beneficiary status breakdown in claim card**
Same as Option A, but reading from the top-level `beneficiaryStatuses` field instead of `claimStatusMeta`.

---

### Option C — Real-Time MPI + VES Lookup (Future Phase)

These stories cannot be written until the ICN mapping work (separate initiative) is complete and MPI/VES latency/availability has been assessed for the CST load path.

**Spike — Assess MPI + VES integration feasibility for CST load path**
Evaluate MPI response times, availability SLAs, and rate limits. Determine whether a live lookup in the CST page load path is acceptable or whether a caching/async approach is needed. Define the fallback when MPI or VES is unavailable.

**BE — Implement MPI beneficiary ICN lookup**
Given a veteran's ICN, query MPI to return associated beneficiary ICNs and relationship types. Cache results if latency requires it. Write tests with mocked MPI responses.

**BE — Implement VES CHAMPVA eligibility lookup per beneficiary ICN**
Given a beneficiary ICN, query VES for CHAMPVA enrollment/eligibility status. Map VES status vocabulary to the normalized display labels used in CST. Write tests with mocked VES responses.

**FE — Reconcile PEGA processing status with VES eligibility status in claim card**
Update the claim card to handle two different status models (PEGA processing status from DB + VES eligibility status from live lookup) and present them coherently to the veteran. Define what happens when one is available but not the other.

---

## TL;DR — Options at a Glance

### Option A — Use What's Already in the Database
The data we need is already in our database (`ivc_champva_forms`). Each beneficiary has their own row with their own status — confirmed directly from the PEGA polling code, which returns a separate status per applicant and writes each one individually to the database. We just need to stop collapsing all those rows into one and start sending each person's name and status to the front end. **The only work is stopping `ClaimBuilder` from throwing it away and building the FE to display it.** Low risk, no new systems, can start now.

### Option B — Same as A, Cleaner API Shape
Exact same idea as Option A — the same per-beneficiary data, the same database query, the same result for the veteran. The only difference is we give beneficiary statuses their own dedicated top-level field in the API response instead of bundling them inside existing claim metadata. This makes it immediately clear to the front end that beneficiary data is its own concept, separate from the overall claim status. Cleaner design, same effort, same outcome.

### Option C — Real-Time Lookup from VA's Central Systems (Future)
Instead of using what's in our database, we ask two VA systems in real time: first, VA's **Master Person Index (MPI)** — the central registry that knows who a veteran's dependents and family members are — to get each beneficiary's VA identifier. Then we ask the **Veterans Enrollment System (VES)** — the system that tracks CHAMPVA eligibility and enrollment — for each person's current status. This is more authoritative and works even for submissions that predate our database records, but it requires a separate piece of infrastructure work that hasn't started yet and adds live API calls to the page load. Best saved for a future phase.

