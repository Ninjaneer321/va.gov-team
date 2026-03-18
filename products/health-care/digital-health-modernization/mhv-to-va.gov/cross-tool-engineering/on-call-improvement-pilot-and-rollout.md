# On-Call Improvement Pilot:

## Phase 1 - Pilot (target 1 week)
The purpose of this phase is to increase confidence in the approach and to get a feel for tuning monitors for on-call responsibilities.

### Parameters
- 1 engineer (@kjduensing) on a test PD service
- 1 real (duplicated) DD monitor 
  - duplicated so as to not blow up other engineers on call
  - monitor should be high-frequency so we can get the reps in
- **Time to deliver**: approx 1 week, unless exit criteria not met

### Responsibilities
- observe and log true positives and false positives
- determine a threshold for true positives to use for the next phase
- ensure messaging, alerts, fire and are delivered
- tweak thresholds as necessary to meet exit criteria

### Exit Criteria
- Alert delivery rate is at 100% - no missed messages
- True positive rate is >= 80%

## Phase 2 - Proof (target 2 weeks)
The purpose of this phase is to expand the improvements to a "real-world" situation, and to identify any gaps in the improvements.

### Parameters
- 1 team (TBD) on a real PD service
  - do NOT add PD slack integration (for now)
- 1 real (existing, not duped) DD monitor
  - Keep existing datadog slack integration
- **Time to deliver**: approx 2 weeks, depending on blockers to exit criteria

### Responsibilities
- Test threshold set previously
- Ensure messaging, alerts, fire and are delivered
- Test escalation (to me)
- Plan team monitor/alerting expansion
  - which monitors to add next
  - tweak thresholds
- Identify gaps in the plan

### Exit Criteria
- Mean time to acknowledge is < 15 minutes
- True positive rate is >= 80%

## Phase 3 - Rollout
This phase is where we begin to roll out the improvements to all MHV teams. See more detail in the [rollout plan](#forthcoming).

### KPIs
- Mean time to acknowledge (MTTA) is < 15 minutes
- True positive rate is >= 80%
- Mean time to resolve (MTTR) is based on contractual reqs:
  - 0 - 2 hours for critical impact issues
  - 2 - 4 hours for high impact issues
  - 4 - 8 hours for moderate/low impact issues
