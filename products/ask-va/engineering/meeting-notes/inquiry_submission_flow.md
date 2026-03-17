At minimum, this approach requires one checkpoint before CRM submission and the CRM response checkpoint.
Any one of checkpoints 1, 2, or 3 can create the initial record, and checkpoint 4 is needed to update
that record with CRM outcome data for correlation and diagnostics. Aside from those required checkpoints,
any additional checkpoints are optional and can be implemented as part of this initial effort or
at a later time.

```mermaid
  flowchart TD
      A["vets-website submits inquiry"] --> B["ask_va_api receives inbound submission"]
      B --> C["Checkpoint 1: what vets-website sent"]

      C --> D["InquiriesController establishes inquiry_params via strong params"]
      D --> E["Checkpoint 2: what Rails accepted"]

      E --> F["ask_va_api builds CRM payload"]
      F --> G["Checkpoint 3: what ask_va_api prepared for CRM"]

      G --> H["ask_va_api submits inquiry to CRM"]
      H --> I["CRM returns success or rejection"]
      I --> J["Checkpoint 4: what CRM returned"]
```
