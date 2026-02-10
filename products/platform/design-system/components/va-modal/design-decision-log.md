# va-modal Design Decisions
Last updated: 09 Feb 2026

- [ADR: 001 - Modal button sizing and layout](#adr-001---modal-footer-button-sizing-and-layout)

## ADR 001 - Modal button sizing and layout

### Status: Accepted

- Date issue raised: 09 Feb 2026
- Decision date: 09 Feb 2026

### Context

We want modal buttons to:
- Be easy to tap on small screens
- Avoid awkward wrapping for long labels
- Look appropriately sized on larger modals and viewports

Previously, buttons:
- Were full-width on mobile (good for tap targets)
- Switched to side‑by‑side at larger breakpoints
- Could become very wide in large modals, causing short labels to look stretched and long labels to wrap in unbalanced ways

### Decision

We adopted a responsive footer layout and sizing pattern:

1. **Default behavior (all modals)**
   - Buttons are always full‑width and vertically stacked
   - This maximizes tap area and keeps widths consistent when button label lengths vary

2. **Large modal behavior (on wider viewports)**
   - For large modals (`.va-modal--lg`) at `medium-screen` and above, the buttons layout in a row
   - Buttons remain sized to the width of their labels
   - This lets buttons size to their label text and avoids excessively wide buttons

3. **Long label handling**
   - Buttons use `overflow-wrap: anywhere` so long words (string of characters) wrap instead of overflowing
   - This keeps the modal layout intact even when labels are longer than expected
   - This works alongside existing content guidance, which recommends [keeping labels to 35 characters](https://design.va.gov/content-style-guide/button-labels)
