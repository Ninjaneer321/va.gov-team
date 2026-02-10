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
