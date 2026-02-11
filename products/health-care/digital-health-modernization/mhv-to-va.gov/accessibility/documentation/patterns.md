# Accessible Patterns

Collection of patterns supporting accessibility, along with the rationale for the pattern and a list of standards or other factors supported by the pattern.

Last updated: 10 Feb 2026

## Alerts

### Primary Alert — Tool/Page

<img width="259" height="340" alt="Screenshot of alert at the top of the page following the page heading" src="../files/alert-static-page.png" />

#### Guidance
- Use for unprompted tool- or page-wide messages.
- Place directly below the page heading.
- Use only the standard Alert component for this type of alert.
- Focus management:
  - Set focus to the page heading on page load.
  - If the alert is dismissible, move focus back to the page heading when the alert is dismissed.
- Role attribute: None

#### Rationale
- In most cases, the standard Alert (in all of its variations) should be placed directly below the intro text, near the top of the page. — Excerpted from VADS [Alert placement guidance](https://design.va.gov/components/alert/#web-4)
- Alert - Expandable is only to be used within the contents of a page, not as a page-level alert. — Excerpted from VADS [Expandable Alert usage guidance](https://design.va.gov/components/alert/alert-expandable/#when-to-use-alert---expandable)
- Static alert: No Role. If the alert is a static alert that exists on the page when the page gets loaded, it doesn’t need a role. — Excerpted from VADS [Alert aria-role guidance](https://design.va.gov/components/alert/#assign-an-appropriate-aria-role)

#### Reelvant standards
- [SC 1.3.2 Meaningful Sequence (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence): When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.
- [SC 2.4.3 Focus Order (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html): If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
- [SC 4.1.3 Status Messages (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages): In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.
