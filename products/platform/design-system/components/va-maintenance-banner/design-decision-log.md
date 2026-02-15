# va-maintenance-banner Design Decisions
Last updated: 12-02-2026

- [ADR: 001 - Standardize System-Wide Maintenance Banner Messaging](#adr-001---standardize-system-wide-maintenance-banner-messaging)

---

## ADR 001 - Standardize System-Wide Maintenance Banner Messaging

### Status: Accepted

- Date issue raised: 2026-02-12  
- Decision date: 2026-02-12  

### Context

System-wide maintenance banners had inconsistent structure and phrasing. This made them harder to reuse, increased engineering effort, and created unnecessary variation across implementations.

[See tickets and comments related to this change](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4996#issuecomment-3886290080)

### Decision

Standardize the structure and wording of system-wide maintenance banners.

The new pattern:

- Uses a consistent, reusable message structure.  
- Reduces one-off variations.  
- Simplifies engineering implementation.  
- Supports consistent user experience across VA.gov.  

### Consequences

**Positive:**

- Easier to reuse across maintenance events.  
- More efficient to implement in code.  
- Clearer and more consistent messaging.  
- Lower long-term maintenance overhead.  

**Negative:**

- Slightly less flexibility for unique edge cases.  


### Open Questions
