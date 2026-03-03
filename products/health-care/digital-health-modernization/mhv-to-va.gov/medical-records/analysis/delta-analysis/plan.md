# Delta Analysis Plan: Comparing Outputs from Two Backends

## Objective
Establish a repeatable, deterministic process to compare data outputs from two backends, identify deltas, classify their impact, and support efficient root-cause analysis.

## Scope
- Compare output payloads produced by Backend A and Backend B for equivalent requests.
- Detect differences at schema, record, and field/value levels.
- Distinguish expected variance from true defects.

## Success Criteria
- Critical deltas (P0): **0** in release-gated flows.
- High deltas (P1): tracked with owner and SLA; below agreed threshold.
- False-positive rate reduced to acceptable level after tuning normalization rules.
- Deterministic reruns produce identical diff results for identical inputs.

## 1) Define Comparison Boundaries
1. Identify systems and environments:
   - Backend A source and environment.
   - Backend B source and environment.
2. Define equivalence per endpoint/use case:
   - Exact value equality.
   - Tolerance-based equality (numeric/time).
   - Semantic equality (e.g., order-insensitive arrays).
3. Document included and excluded endpoints/entities.

## 2) Build a Contract Mapping
Create a field mapping matrix for each compared payload:
- `backend_a_field -> backend_b_field`
- expected data type
- required vs optional
- transformation/normalization notes
- allowed variance/tolerance

Mark explicitly:
- backend-specific fields to ignore
- unknown/unmapped fields requiring follow-up

## 3) Define Canonical Normalization Rules
Apply normalization to both sides before diffing:
- Type coercion where valid (`"42" -> 42`).
- Null/empty semantics (`null`, empty string, missing key policy).
- Datetime normalization (UTC conversion, precision truncation).
- Numeric precision/rounding and epsilon tolerance.
- String normalization (trim/case) when domain-appropriate.
- Array handling:
  - preserve order when order is semantic
  - stable sort by key when order is non-semantic
- Object key ordering for deterministic serialization.
- Ignore/redact volatile fields (timestamps, trace IDs, transient identifiers).

Version these rules and maintain a changelog.

## 4) Identity and Record Matching Strategy
Define how records are joined across outputs:
- Primary key or composite key.
- Fallback/derived matching key policy (if any).
- Duplicate-key handling.
- Orphan handling:
  - present in A, absent in B
  - present in B, absent in A

For nested collections, define matching keys per nesting level.

## 5) Delta Taxonomy and Severity
Classify deltas into standardized categories:
1. **Presence deltas**: missing/extra records.
2. **Schema deltas**: missing/extra fields, type mismatch.
3. **Value deltas**:
   - exact mismatch
   - tolerance-exceeding numeric/time drift
   - enum/category mismatch
4. **Format-only deltas**: raw difference but normalized equivalence.
5. **Semantic deltas**: business-meaning divergence.

Severity model:
- **P0 Critical**: patient/business-critical behavior mismatch.
- **P1 High**: contract-breaking or high-impact drift.
- **P2 Medium**: meaningful but non-blocking differences.
- **P3 Low**: cosmetic/formatting-only concerns.

## 6) Comparison Harness Architecture
Pipeline stages:
1. Ingest paired payloads.
2. Normalize both sides.
3. Match records by key.
4. Diff matched/unmatched records.
5. Classify and score severity.
6. Emit reports/artifacts.

Required outputs:
- Machine-readable artifact (JSON) for automation.
- Human-readable summary (Markdown) with:
  - totals by severity/category
  - top divergent fields
  - representative examples
  - links/references to reproducible inputs

## 7) Test Data Strategy
Create layered test corpora:
1. **Golden set**: known-equivalent cases.
2. **Edge set**:
   - null/missing fields
   - boundary numeric values
   - timezone/DST transitions
   - Unicode/special characters
   - large/nested arrays
3. **Adversarial set**:
   - duplicate keys
   - partial/corrupt payloads
   - ordering instability
4. **Production sample (sanitized)**:
   - representative distribution across high-volume scenarios

Each confirmed defect must add a regression fixture.

## 8) Metrics, Reporting, and Alerting
Track and trend:
- Delta rate by endpoint/use case.
- Delta count by category and severity.
- Top failing fields over time.
- Coverage (compared fields vs total mapped fields).
- Reproducibility/flakiness indicators.

Define alerting thresholds and release gates for P0/P1.

## 9) Triage and Root-Cause Workflow
For each P0/P1:
1. Reproduce with pinned input pair.
2. Isolate minimal failing case.
3. Determine source of divergence:
   - upstream data mismatch
   - transformation logic defect
   - schema/version mismatch
   - business-rule divergence
4. Assign owner + SLA.
5. Add/expand regression tests.

## 10) Rollout Plan
1. **Shadow mode** (non-blocking): collect baseline deltas.
2. Tune normalization/tolerance to reduce false positives.
3. **Soft gate**: warn/fail on selected critical deltas.
4. **Hard gate**: block on P0 (and agreed P1) in critical flows.
5. Periodic governance review for taxonomy/rule updates.

## Deliverables Checklist
- [ ] `comparison_spec.md` (mapping + normalization + taxonomy)
- [ ] Normalization module
- [ ] Comparator module
- [ ] Reporter module (JSON + Markdown)
- [ ] Fixture suite (golden/edge/adversarial)
- [ ] CI workflow for automated comparison + artifact publication
- [ ] Dashboard definitions and alert thresholds
- [ ] Runbook for triage and incident handling

## Recommended Implementation Agent
Use a coding-focused implementation agent with strong support for:
- Data transformation and schema validation
- Deterministic test harness design
- CI integration and artifact publishing

Suggested workflow:
1. Planning/reasoning agent finalizes policy decisions (mapping/tolerance/severity).
2. Implementation agent builds modules, tests, and CI.
3. Reviewer agent validates maintainability and false-positive rate before hard-gate rollout.

## Ownership and Change Management
- Assign a single DRI for comparison-spec governance.
- Require versioned updates for mapping/normalization changes.
- Maintain a decision log for tolerance and severity policy changes.