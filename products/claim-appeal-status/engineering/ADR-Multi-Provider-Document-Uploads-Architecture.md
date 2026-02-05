# ADR: Multi-Provider Document Upload Architecture

## Status
**Proposed** - Pending team review and approval

## Date
2026-02-04

## Context

### Current Situation

The `benefits_documents_controller` (v0/benefits_documents_controller.rb) currently has a hardcoded dependency on the Lighthouse `BenefitsDocuments::Service`. The controller's `service` method at line 31 directly instantiates this service:

```ruby
def service
  BenefitsDocuments::Service.new(@current_user)
end
```

This creates several problems:

1. **Limited Extensibility**: All document uploads must go through Lighthouse, even for claims from other systems (e.g., CHAMPVA claims)
2. **Tight Coupling**: The controller is tightly coupled to a specific implementation, making it difficult to add new upload destinations
3. **No Feature Flag Control**: Cannot gradually roll out new providers or perform A/B testing
4. **Poor Separation of Concerns**: Routing logic would need to live in the controller if we wanted to support multiple destinations
5. **Inconsistent with Claims Architecture**: We recently implemented a successful multi-provider pattern for claims retrieval, but document uploads still use the old monolithic approach

### Business Need

Veterans may have claims from multiple sources (VA benefits, CHAMPVA, etc.), and supporting documents need to be uploaded to the correct backend system. Currently, users with CHAMPVA claims cannot upload documents to the appropriate system through the VA.gov platform.

### Technical Constraint

We need a solution that:
- Maintains backward compatibility during migration
- Supports gradual rollout via feature flags
- Follows established patterns already successful in the codebase
- Minimizes risk to the existing document upload flow (which is working well)

## Decision

We will **implement a Provider Registry pattern with routing strategy** for document uploads, mirroring the architecture used for the multi-claim provider system but adapted for the different semantics of document uploads.

### Key Architectural Decisions

#### 1. Registry Pattern with Routing (Not Aggregation)

**Decision**: Use a registry pattern but with **single-destination routing** instead of multi-source aggregation.

**Rationale**:
- **Claims (GET)**: Aggregation pattern - fetch from all enabled providers and combine results
- **Documents (POST)**: Routing pattern - send to exactly one provider based on claim characteristics

This reflects the fundamental difference between read operations (can merge results) and write operations (must go to correct destination).

#### 2. Provider Selection Strategy

**Decision**: Route documents to providers based on this priority:

1. **Claim ownership detection** (primary)
   - Determine claim type from claim_id
   - Route CHAMPVA claims to CHAMPVA provider
   - Route VA claims to Lighthouse provider

2. **Feature flag enablement** (secondary)
   - Only use providers enabled for the current user

3. **Fallback to Lighthouse** (default)
   - If routing cannot be determined, use Lighthouse (current behavior)

**Rationale**:
- Claim ownership is the most reliable indicator of where documents should go
- Feature flags provide safety valve for rollout and rollback
- Fallback ensures no breaking changes to existing functionality

#### 3. Two-Tier Feature Flag Architecture

**Decision**: Implement two levels of feature flags:

1. **Controller-level flag**: `cst_multi_document_provider`
   - Enables/disables entire registry system
   - When disabled, falls back to legacy code path
   - Provides master kill switch for safety

2. **Provider-level flags**: `benefits_documents_<provider>_provider`
   - Controls individual provider availability
   - Only checked when controller flag is enabled
   - Allows fine-grained rollout per provider

**Rationale**:
- Matches proven pattern from multi-claim provider implementation
- Provides multiple layers of control for safe rollout
- Enables independent testing of individual providers

#### 4. Wrap, Don't Replace

**Decision**: Wrap the existing `BenefitsDocuments::Service` as the Lighthouse provider instead of refactoring it.

**Rationale**:
- Minimizes risk - existing battle-tested code remains unchanged
- Faster implementation - no need to rewrite working logic
- Clear migration path - can refactor internals later if needed
- Maintains backward compatibility during transition

#### 5. Synchronous Routing (Not Fan-Out)

**Decision**: Documents will be uploaded to **one provider per request**, not multiple providers simultaneously.

**Rationale**:
- Simpler error handling - single point of failure
- Consistent with business requirements - each claim belongs to one system
- Avoids complexity of distributed transactions and reconciliation
- Can add fan-out capability later if business needs evolve

## Alternatives Considered

### Alternative 1: Controller-Level Routing with Conditionals

**Description**: Add if/else logic directly in the controller to route to different services.

```ruby
def service
  if champva_claim?(params[:claim_id])
    ChampvaDocuments::Service.new(@current_user)
  else
    BenefitsDocuments::Service.new(@current_user)
  end
end
```

**Rejected because**:
- Violates Open/Closed Principle - controller must be modified for each new provider
- No feature flag integration
- Routing logic pollutes controller
- Difficult to test in isolation
- Doesn't scale beyond 2-3 providers

### Alternative 2: Strategy Pattern Without Registry

**Description**: Use dependency injection to pass provider to controller, but no central registry.

**Rejected because**:
- No central place to manage provider configuration
- Feature flag logic scattered across multiple locations
- Difficult to introspect enabled providers
- Inconsistent with established patterns in the codebase

### Alternative 3: Message Queue with Async Routing

**Description**: Queue document uploads and route asynchronously based on claim lookup.

**Rejected because**:
- Significant architectural complexity
- Changes user-facing behavior (async response)
- Risk to existing document upload flow
- Overkill for current business needs
- Can be added later if needed without changing provider interface

### Alternative 4: Do Nothing (Status Quo)

**Description**: Keep hardcoded Lighthouse dependency and handle CHAMPVA documents through separate endpoint.

**Rejected because**:
- Creates poor user experience - veterans must know which endpoint to use
- Duplicates controller logic across endpoints
- Frontend complexity increases
- Doesn't scale as more claim types are added
- Inconsistent with multi-claim provider architecture

## Consequences

### Positive

1. **Extensibility**: New document upload providers can be added by:
   - Creating provider class (1-2 hours)
   - Registering in initializer (5 minutes)
   - No controller changes required

2. **Feature Flag Control**: Gradual rollout and quick rollback capability
   - Per-user enablement for testing
   - Percentage-based rollout
   - Immediate rollback if issues detected

3. **Maintainability**: Clear separation of concerns
   - Controller remains thin and focused
   - Provider logic isolated in provider classes
   - Routing logic centralized in registry

4. **Consistency**: Aligns with established multi-claim provider pattern
   - Developers already familiar with the pattern
   - Reuses proven architecture
   - Consistent mental model across claims and documents

5. **Observability**: Built-in logging and metrics
   - Provider selection decisions logged
   - Per-provider error tracking
   - StatsD metrics for monitoring

6. **Testability**: Registry and providers can be tested in isolation
   - Shared RSpec examples ensure interface compliance
   - Feature flag combinations easily tested
   - Mock providers for development

7. **Safety**: Backward compatibility maintained
   - Legacy code path remains available
   - Zero breaking changes during migration
   - Incremental migration possible

### Negative

1. **Increased Complexity**: More moving parts
   - Registry, interface, multiple provider classes
   - Two-tier feature flag system
   - Routing logic to maintain
   - **Mitigation**: Comprehensive documentation and onboarding guide

2. **Runtime Overhead**: Additional method calls through registry
   - Registry lookup on each request
   - Feature flag checks
   - **Mitigation**: Minimal (< 1ms), and registry uses concurrent data structures

3. **Learning Curve**: Developers must understand provider pattern
   - New pattern to learn for new team members
   - More files to navigate
   - **Mitigation**: Detailed documentation, shared examples, and reference implementation

4. **Migration Effort**: Non-trivial implementation work
   - Estimated 40-60 hours for infrastructure
   - Testing across feature flag combinations
   - **Mitigation**: Can be done incrementally, legacy path remains

5. **Routing Logic Maintenance**: Must keep claim-to-provider mapping accurate
   - Logic for detecting claim ownership
   - Risk of routing to wrong provider
   - **Mitigation**: Comprehensive tests, logging of routing decisions, fallback to Lighthouse

### Neutral

1. **Not Solving Document Storage**: This ADR only addresses upload routing, not where documents are ultimately stored (S3, etc.)

2. **No Change to Frontend**: API contract remains identical

3. **Performance**: No measurable performance impact expected (positive or negative)

## Implementation Plan

### Phase 1: Infrastructure (Week 1-2)
- Create `BenefitsDocuments::Providers::ProviderRegistry`
- Create `BenefitsDocuments::Providers::BenefitsDocumentsProvider` interface
- Create Lighthouse provider wrapper
- Add feature flags to config
- Create initializer for provider registration
- Write comprehensive tests

### Phase 2: Controller Integration (Week 3)
- Update `benefits_documents_controller` with feature flag check
- Add provider routing logic
- Maintain legacy code path
- Add logging and StatsD metrics
- Update controller tests

### Phase 3: Testing & Validation (Week 4)
- Internal testing with feature flag enabled
- Validate routing decisions
- Confirm zero regression in upload success rates
- Load testing to confirm no performance impact

### Phase 4: Rollout (Week 5-8)
- Enable for 5% of users
- Monitor metrics and error rates
- Gradually increase to 25%, 50%, 100%
- Remove feature flag after stabilization

### Phase 5: New Provider Addition (Week 9+)
- Add CHAMPVA or other provider
- Follow established pattern
- Validate end-to-end flow

## Success Metrics

- **Zero regression**: Document upload success rate remains >= 99.5%
- **Performance**: p99 latency increase < 5ms
- **Development velocity**: New provider can be added in < 4 hours
- **Observability**: Provider routing decisions logged for 100% of requests
- **Rollback capability**: Can disable multi-provider system via feature flag within 1 minute

## References

- **Related ADR**: ADR-CHAMPVA-Claims-Integration.md
- **User Story**: USER_STORY_Multi_Provider_Document_Uploads.md
- **Reference Implementation**: `lib/benefits_claims/providers/provider_registry.rb`
- **Documentation**: Multi-Claim Provider Developer Onboarding Documentation.pdf
- **Current Controller**: `app/controllers/v0/benefits_documents_controller.rb`
- **Current Service**: `lib/lighthouse/benefits_documents/service.rb`

## Decision Makers

- Platform Engineering Team
- Benefits Claim Appeal Status Team (product team tag in controller)
- Architecture Review Board

## Notes

### Open Questions

1. **Claim Ownership Detection**: How will we determine if a claim belongs to CHAMPVA vs VA?
   - Option A: Query claim provider registry
   - Option B: Parse claim ID prefix/pattern
   - Option C: Store claim source in database
   - **Recommendation**: Need product input

2. **Validation Strategy**: Should we validate upload permissions against all providers or just the selected one?
   - **Recommendation**: Just selected provider (fail fast)

3. **Multi-Upload Support**: Will we ever need to upload the same document to multiple providers?
   - Currently: No
   - Future: Possibly for auditing or backup
   - **Decision**: Implement single-destination now, add fan-out later if needed

### Related Work

This ADR complements the existing multi-claim provider architecture. Key files:
- Claims Provider Registry: `lib/benefits_claims/providers/provider_registry.rb`
- Claims Provider Interface: `lib/benefits_claims/providers/benefits_claims/benefits_claims_provider.rb`
- Multi-Provider Support Concern: `app/controllers/v0/concerns/multi_provider_support.rb`

The document upload architecture intentionally diverges from claims in one key area: **routing vs aggregation**. This reflects the different semantics of POST operations (must go to correct destination) versus GET operations (can combine from multiple sources).

---

**Last Updated**: 2026-02-04
**Status**: Proposed - Awaiting team review
