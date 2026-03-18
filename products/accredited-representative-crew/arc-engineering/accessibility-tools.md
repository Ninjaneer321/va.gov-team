# ARC Accessibility Tools for Developers
## Resources and Links
- [axe DevTools extension for Google Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

## axe DevTools
### Overview
axe DevTools is an extension for Google Chrome that can run automated accessibility scans on a webpage. There are two versions: a paid version (axe DevTools Pro) and a free version. For ARC, we’ll be using the free version.

### Setup
1. Install the [axe DevTools plugin for Google Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd).
2. Open the Developer Tools in Google Chrome and click on the axe DevTools tab.
3. Click on the kabab menu icon and click on “Settings.”
4. Under “Rules and issues,” ensure that:
    1. “Best Practices” are enabled, and
    2. “WCAG 2.2 AA” is selected.

### Running a Scan
1. Open the Developer Tools in Google Chrome and click on the axe DevTools tab.
2. Click “Full page scan” and wait for the results to appear.
3. If any issues are found, either:
    1. Fix the issue before submitting a PR (preferred), or
    2. Create a backlog ticket to address the issue. Include a screenshot of the issue in the ticket.
4. To run the scan again, click “Re-run scan.”
5. A modal will appear prompting you to put the page in the state you want to test. When you’re ready, click “Ready” and another scan will run.
