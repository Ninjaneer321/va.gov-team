# ARC Accessibility Tools for Developers
## Resources and Links
- [axe DevTools extension for Google Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

## axe DevTools
### Overview
axe DevTools is an extension for Google Chrome that can run automated accessibility scans on a webpage. There are two versions: a paid version (axe DevTools Pro) and a free version. For ARC, we’ll be using the free version.

### Setup
1. Install the [axe DevTools plugin for Google Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd).
2. Open the Developer Tools in Google Chrome (More tools > Developer Tools)
   1. <img width="584" height="350" alt="image" src="https://github.com/user-attachments/assets/0a5b3322-9f15-4de8-b5bb-739a7aa5d0a1" />
3. Click on the axe DevTools tab
   1. <img width="794" height="127" alt="image" src="https://github.com/user-attachments/assets/8a3e3d49-ce14-4359-bf32-52ef0eab256a" />
5. Click on the kabab menu icon within axe DevTools and click on “Settings.”
   1. <img width="863" height="120" alt="image" src="https://github.com/user-attachments/assets/b7254c3f-1e13-449a-a41b-41a3d360d84d" />
6. Under “Rules and issues,” ensure that:
    1. “Best Practices” are enabled, and
    2. “WCAG 2.2 AA” is selected.
    3. <img width="850" height="276" alt="image" src="https://github.com/user-attachments/assets/1d5860f1-241c-4b7e-952f-7d7bfa16e0c9" />


### Running a Scan
1. Open the Developer Tools in Google Chrome
2. Click on the axe DevTools tab within the Developer Tools.
   1. <img width="714" height="265" alt="image" src="https://github.com/user-attachments/assets/2f9116fe-fe72-4468-8791-be15a5f3d640" />
3. Click “Full page scan” and wait for the results to appear.
4. If any issues are found, either:
    1. Fix the issue before submitting a PR (preferred), or
    2. Create a backlog ticket to address the issue. Include a screenshot of the issue in the ticket.
5. To run the scan again, click “Re-run scan.”
6. A modal will appear prompting you to put the page in the state you want to test. When you’re ready, click “Ready” and another scan will run.
