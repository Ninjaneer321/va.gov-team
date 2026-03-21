# Creating Codespace for CST

This guide was created using the [Platform Codespace documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/set-up-codespaces-for-user-research) but adds details specific to the CST application to make creating a Codespace easier. Creating your own Codespace is the only way to have control over starting it up whenever needed.

Platform Documentation: 

1. Complete the [Configuring the Codespace environment variables](https://depo-platform-documentation.scrollhelp.site/developer-docs/set-up-codespaces-for-user-research#SetupCodespacesforuserresearch-ConfiguringtheCodespaceenvironmentvariables)
  a. Note 1: The GitHub Settings are found by clicking on your profile picture circle in the top right
  b. Note 2: You have to type in vets-website to see it in the dropdown
2. Navigate to [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website)
3. Click "Main" dropdown (which is the branch dropdown), paste in the branch name, and click on that result to switch to the feature branch (can find branch name at top of PR)
4. Create a new Codespace:
  a. Click Code
  b. Click Codespaces Tab
  c. Click +
5. Wait 10min+ for Codespace to finish being created
6. Create a new terminal by clicking the '+' in the bottom bar after the Codespace setup is finished
7. Start the mock-api server: `yarn mock-api --responses src/applications/claims-status/tests/local-dev-mock-api/common.js`
8. Create a new terminal by clicking the '+' in the bottom bar
9. Start the frontend server: `yarn watch --env entry=auth,claims-status,static-pages,login-page,terms-of-use,verify`
10. Make both the mock-api and frontend servers public by clicking into the Ports tab on the bottom bar and right-clicking the 3000 and 3001 rows and changing Port Visibility to Public
11. Click on the 3001 URL globe to "Open in browser"
12. Go to that tab and click the "Continue" button on that warning
13. Right-click on the resulting page, click Inspect, click the Console tab in the now-open sidebar and paste `localStorage.setItem('hasSession', 'true');`. Hit Enter.
14. Append the path '/track-claims' to the URL to get to the CST
