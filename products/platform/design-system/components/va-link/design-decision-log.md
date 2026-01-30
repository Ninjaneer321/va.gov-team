# va-link Design Decisions
Last updated: January 28, 2026

This document outlines the key design decisions made for implementing  `va-link`. These Architecture Decision Records (ADRs) capture the context, decisions, and consequences of our design choices to ensure consistency and provide guidance for future development.

- [ADR: 001 - Prevent file links from interrupting SPA and form flows](#ADR-001---Prevent-file-links-from-interrupting-SPA-and-form-flows)



## ADR 001 - Prevent file links from interrupting SPA and form flows

### Status: Accepted
- Date issue raised: 01/09/2026
- Decision date: 01/29/2026

### Context
Browsers don't reliably support the HTML `download` attribute for files hosted on a different origin. When a file is cross-origin (including different subdomains), the browser may ignore the attribute and instead navigate to or preview the file in the same tab.

In single-page applications and multi-step form flows, same-tab navigation to a file can interrupt task completion, replace application state, or cause users to lose their place. Preventing disruption to in-progress tasks is a higher priority than enforcing download behavior.

Opening file links in a new tab avoids interrupting application state, but does not guarantee a file download; actual behavior depends on browser handling, file type, and server headers. This creates ambiguity between the visual affordance of a download and the actual behavior of the link.

The design system needs to distinguish between:
- same-origin file links where download behavior can be requested via the download attribute or where opening in the same window is acceptable, and
- cross-origin file links where download behavior cannot be enforced and non-disruptive navigation is required.

**Note:** The download attribute only works for same-origin URLs ([Source: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#download)). In otherwords, when files are at a different domain and even a different sub-domain, the file will open in the same window. 

### Decision
We will
- **Retain the download icon** for all file-related links to preserve a consistent visual affordance
- **Update the `download` prop** to apply the native HTML `download` attribute to the rendered `<a>`
- **Introduce a new `external-download` prop** for file links that must not interrupt an SPA page or form flow.
  - When `external-download` is used:
    - the link will open in a new tab `target="_blank"`,
    - visible disclosure text `(opens in a new tab)` will be appended,
    - the download icon will be used
    - the `download` attribute will not be applied
- **Prevent prop overlap** by treating `download` and `external-download` as mutally exclusive

These changes are backward-compatible. Existing implementations will continue to function without modification. Teams may opt into `external-download` when linking to files.

We can't guarantee download behavior for cross-origin files; this process guarantees only safe, non-disruptive navigation.

### Consequences
**Positive**
* Prevents task disruption in forms. Opening the file in a new tab reliably avoids replacing the current state and reduces risk for users losing their place mid-flow

**Tradeoffs/Negative**
* Potential mismatch between icon and outcome. With `external-download`, the icon implies download, but the real behavior is open in a new tab. 

### Open Questions
