# Multi-Provider Document Upload Architecture

## As a
VA.gov Platform Developer

## I want to
Abstract the `benefits_documents_controller` to support multiple document upload providers through a registry pattern

## So that
We can route supporting document uploads to different backend systems (Lighthouse, CHAMPVA, etc.) based on claim type, feature flags, and other criteria, without requiring controller code changes

---

## Background

Currently, the `benefits_documents_controller` has a hardcoded dependency on the Lighthouse `BenefitsDocuments::Service`. This creates the following limitations:

1. All document uploads must go to Lighthouse, even for non-VA claims (e.g., CHAMPVA)
2. Adding new document upload destinations requires controller modifications
3. No way to gradually roll out new providers via feature flags
4. Cannot route documents to appropriate systems based on claim characteristics

We need to replicate the successful multi-claim provider pattern (documented in "Multi-Claim Provider Developer Onboarding Documentation.pdf") for document uploads.

---

## Acceptance Criteria

### 1. Provider Registry Infrastructure

**Given** a new `BenefitsDocuments::Providers::ProviderRegistry` module exists
**When** providers are registered in an initializer
**Then** the registry should:
- Store provider configurations in a thread-safe `Concurrent::Map`
- Support registration with `provider_name`, `provider_class`, `feature_flag`, and `enabled_by_default` options
- Provide `enabled_provider_for(user, params)` method that returns the appropriate provider instance based on:
  - Feature flag enablement (via Flipper)
  - Claim type or other routing criteria from params
  - User context
- Validate that all registered providers implement the `BenefitsDocumentsProvider` interface
- Support `clear!` method for testing (non-production only)

### 2. Provider Interface Contract

**Given** a new `BenefitsDocuments::Providers::BenefitsDocumentsProvider` module exists
**When** a provider implements this interface
**Then** it must implement these required methods:
- `queue_document_upload(params, lighthouse_client_id = nil)` - Queues a document upload and returns a job ID (String)
- `queue_multi_image_upload_document(params, lighthouse_client_id = nil)` - Queues multi-image PDF upload and returns a job ID (String)
- `validate_claimant_can_upload(document_data)` - Returns boolean indicating if upload is allowed
- `cleanup_after_upload` - Performs any necessary cleanup operations

**And** each provider class must:
- Accept `user` in its constructor: `initialize(user)`
- Handle provider-specific authentication and configuration
- Transform responses into a consistent format
- Raise `Common::Exceptions::UnprocessableEntity` for validation failures

### 3. Provider Routing Strategy

**Given** multiple providers are registered
**When** a document upload request is received
**Then** the system should:
- Determine the appropriate provider based on:
  - **Primary**: Claim type or claim ID (route CHAMPVA claims to CHAMPVA provider, VA claims to Lighthouse)
  - **Secondary**: Feature flags (gradual rollout control)
  - **Tertiary**: User-level enablement
- Use **single-destination routing** (not aggregation like claims)
- Fall back to default provider (Lighthouse) if routing cannot be determined
- Log routing decisions for observability

### 4. Controller Abstraction

**Given** the `benefits_documents_controller` needs to support multiple providers
**When** the controller's `create` action is invoked
**Then** it should:
- Check a controller-level feature flag `cst_multi_document_provider`
- **If enabled**: Use `provider_registry.enabled_provider_for(@current_user, params)` to get the appropriate provider
- **If disabled**: Use legacy `BenefitsDocuments::Service.new(@current_user)` (backward compatible)
- Call `provider.queue_document_upload(params)` regardless of which path is taken
- Maintain identical response format for both paths

### 5. Lighthouse Provider Migration

**Given** the existing Lighthouse document upload functionality
**When** migrating to the provider pattern
**Then** create:
- `lib/benefits_documents/providers/lighthouse/lighthouse_benefits_documents_provider.rb`
- Wrap existing `BenefitsDocuments::Service` as the Lighthouse provider implementation
- Include `BenefitsDocuments::Providers::BenefitsDocumentsProvider` module
- Delegate all method calls to the underlying `BenefitsDocuments::Service` instance
- Register as `:lighthouse` provider with feature flag `benefits_documents_lighthouse_provider`
- Set `enabled_by_default: true` for backward compatibility

### 6. Error Handling & Observability

**Given** a provider fails during document upload
**When** the failure occurs
**Then** the system should:
- Log errors with provider name and context: `Rails.logger.error('Document upload failed', { provider: name, error: e.message })`
- Track failures in StatsD: `api.benefits_documents.provider_error` with provider tag
- Re-raise authentication exceptions (`Unauthorized`, `Forbidden`)
- Convert provider-specific exceptions to standard VA.gov exceptions
- Include provider name in error responses for debugging

### 7. Feature Flag Architecture

**Given** the two-tier feature flag system
**Then** implement:

**Controller-Level Flag**: `cst_multi_document_provider`
- Type: User-level actor flag
- Controls: Whether to use provider registry or legacy service
- Default: `false` (use legacy path)

**Provider-Level Flags**: Individual provider flags (e.g., `benefits_documents_lighthouse_provider`, `benefits_documents_champva_provider`)
- Type: User-level actor flags
- Controls: Whether specific provider is available for selection
- Default: `false` (except Lighthouse which defaults to `true`)
- Only checked when `cst_multi_document_provider` is enabled

### 8. Configuration & Registration

**Given** providers need to be registered at application boot
**When** `config/initializers/benefits_documents_providers.rb` is loaded
**Then** it should:
```ruby
BenefitsDocuments::Providers::ProviderRegistry.register(
  :lighthouse,
  BenefitsDocuments::Providers::Lighthouse::LighthouseBenefitsDocumentsProvider,
  feature_flag: 'benefits_documents_lighthouse_provider',
  enabled_by_default: true
)

# Future providers:
# BenefitsDocuments::Providers::ProviderRegistry.register(
#   :champva,
#   BenefitsDocuments::Providers::Champva::ChampvaBenefitsDocumentsProvider,
#   feature_flag: 'benefits_documents_champva_provider',
#   enabled_by_default: false
# )
```

### 9. Testing Requirements

**Given** the new provider architecture
**Then** create:
- Shared RSpec examples in `spec/support/benefits_documents/benefits_documents_provider.rb`
- Test that providers implement the required interface
- Test provider routing logic
- Test feature flag combinations
- Test error handling and fallback behavior
- Test backward compatibility with legacy code path
- Controller specs covering both feature flag states

### 10. Documentation

**Given** developers need to add new document upload providers
**Then** create:
- Developer onboarding documentation similar to claims provider docs
- Inline code documentation for registry and interface
- ADR (Architecture Decision Record) explaining routing vs aggregation choice
- Examples of adding a new provider

---

## Technical Implementation Notes

### Key Architectural Differences from Claims Providers

| Aspect | Claims (GET) | Documents (POST) |
|--------|-------------|------------------|
| **Pattern** | Aggregation (combine from all sources) | Routing (send to one destination) |
| **Response** | Merged array of claims | Single job ID |
| **Provider Selection** | All enabled providers | One provider per request |
| **Error Handling** | Graceful degradation, partial results | Fail fast, re-raise errors |
| **Concurrency** | Parallel fetches | Single destination |

### Routing Logic Pseudocode

```ruby
def determine_provider(user, params)
  claim_id = params[:claim_id] || params[:claimId]

  # Strategy 1: Route based on claim ownership/type
  if claim_belongs_to_champva?(claim_id, user)
    return :champva if registry.enabled?(:champva, user)
  end

  # Strategy 2: Explicit provider hint in params (optional)
  if params[:provider_hint]
    provider = params[:provider_hint].to_sym
    return provider if registry.enabled?(provider, user)
  end

  # Default: Lighthouse
  :lighthouse
end
```

### Directory Structure

```
lib/
  benefits_documents/
    providers/
      provider_registry.rb          # Registry implementation
      benefits_documents/
        benefits_documents_provider.rb  # Interface contract
      lighthouse/
        lighthouse_benefits_documents_provider.rb  # Lighthouse wrapper
      champva/                        # Future provider
        champva_benefits_documents_provider.rb
config/
  initializers/
    benefits_documents_providers.rb  # Registration
spec/
  support/
    benefits_documents/
      benefits_documents_provider.rb  # Shared examples
```

---

## Dependencies

- Existing `BenefitsDocuments::Service` (wrap, don't rewrite)
- `Concurrent::Map` gem (already in use)
- Flipper for feature flags
- StatsD for metrics

---

## Rollout Plan

1. **Phase 1**: Infrastructure (registry, interface, Lighthouse provider wrapper)
2. **Phase 2**: Controller integration with feature flag disabled
3. **Phase 3**: Enable for internal testing users
4. **Phase 4**: Gradual rollout to percentage of users
5. **Phase 5**: Enable for all users
6. **Phase 6**: Add additional providers (CHAMPVA, etc.)
7. **Phase 7**: Remove legacy code path after validation

---

## Success Metrics

- Zero regression in document upload success rates
- Provider routing decisions logged and observable
- New providers can be added with <4 hours of development time
- Feature flag control allows safe rollback
- StatsD metrics show provider-level upload statistics

---

## Questions for Product/Team

1. **Routing Strategy**: Should documents ever be uploaded to multiple providers simultaneously (fan-out), or always single-destination?
2. **Claim Type Detection**: How should the system determine which provider to use? Query the claim first, or rely on claim ID prefixes/patterns?
3. **Validation**: Should `validate_claimant_can_upload` be checked on all providers or just the selected one?
4. **Backward Compatibility**: Timeline for legacy code path removal?

---

## Related Documentation

- Multi-Claim Provider Developer Onboarding Documentation.pdf
- `lib/benefits_claims/providers/provider_registry.rb` (reference implementation)
- `app/controllers/v0/benefits_claims_controller.rb` (reference controller pattern)
- `app/controllers/v0/benefits_documents_controller.rb` (current implementation)

---
