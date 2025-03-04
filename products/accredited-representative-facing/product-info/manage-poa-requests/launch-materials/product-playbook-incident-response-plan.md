# Manage POA Request Playbook/Incident Response Plan

## Product Description

**Product Overview:** [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/21-22-power-of-attorney-product-outline.md)

## Contacts

- _All team members can also be reached via the Accredited Representative Facing team DSVA Slack channel: [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW)_

### Team Members

- DSVA Product Lead: Jennifer Bertsch, jennifer.bertsch@va.gov
- Team Product Manager: Candi Lemoine, candi.lemoine@oddball.io
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing#the-team)

### Outage Contacts:

- Accredited Representative Facing team Lead Engineer: Oren Mittman, oren@verdance.co
- Accredited Representative Facing team Senior Full Stack Engineer: Kevin Beddingfield, kevin.beddingfield@oddball.io
- Accredited Representative Facing team Senior Back-End Engineer: Orlando Bucao, Jr., orlando.bucao@oddball.io

## Troubleshooting

### Errors and Metrics

This section will focus on how to identify and measure errors and performance metrics for the "Manage POA Request" feature.

#### Error Logging

- **Datadog Integration:** Ensure Datadog is properly integrated into both vets-api and vets-website. Datadog will capture any runtime errors, performance issues, or exceptions in the application.
- **Error Alerts:** Set up Datadog alerts to notify the team via email or Slack when critical errors occur or when error rates exceed a predefined threshold (NOTIFICATIONS HAVE NOT BEEN SETUP YET).
- **Error Types and Frequencies:** Regularly review error logs to identify common or recurring issues. Pay special attention to error types, frequencies, and the severity of impacts on users.

#### Performance Metrics

- **Datadog Monitoring:** Utilize Datadog to monitor the application's performance. Track metrics like response times, server load, and API call frequencies.
- **Thresholds and Anomalies:** Set performance thresholds in Datadog. Receive alerts when metrics fall outside of these thresholds, indicating potential performance issues (NOTIFICATIONS HAVE NO BEEN SETUP YET).
- **User Journey Tracking:** Monitor key user journeys to ensure the feature is performing as expected. This can include tracking the success rate of POA requests decisions being submitted.

#### Feedback Loop

- **User Feedback:** Incorporate user feedback regarding the "Manage POA Request" feature obtained through interviews with pilot participants and support emails sent directly to the Accredited Representative Facing team.
- **Analytics:** Use Google Analytics to track user engagement and behavior on the "Manage POA Request" feature pages. This will help in understanding how users interact with the feature and where they might encounter issues.

### Issue Investigation Steps

This section outlines the steps to investigate and resolve issues related to the "Manage POA Request" feature.

#### Initial Assessment

- **Identify the Issue:** Use Datadog alerts to identify the issue. Determine whether it's an API failure, a frontend error, or a performance bottleneck.
- **Impact Analysis:** Assess the impact of the issue. Determine how many users are affected and the severity of the impact on the feature's functionality.

#### Detailed Investigation

- **Log Analysis:** Review Datadog logs to pinpoint the error's origin. Look for stack traces, error messages, and the conditions under which the error occurred.
- **Reproduction:** Attempt to reproduce the issue in a test environment based on the information from Datadog and user reports.
- **Cross-Reference Metrics:** Use Datadog to cross-reference performance metrics around the time the issue occurred. This can help identify if the issue is isolated or part of a larger systemic problem.

#### Resolution and Follow-Up

- **Fix Implementation:** Once the issue is identified and understood, develop a fix. This could involve code changes, configuration updates, or infrastructure adjustments.
- **Testing and Deployment:** Test the fix thoroughly in a staging environment before deploying to production.
- **Monitoring Post-Fix:** Closely monitor Datadog after deploying the fix to ensure the issue is resolved and no new issues have arisen.
- **Postmortem Analysis:** Conduct a postmortem analysis to understand the root cause and document learnings. Update the playbook accordingly to improve response for future incidents.

### Flipper Features and Rollback
- Add pilot participant emails to whitelist to enable their access to the Accredited Representative Portal
- Will need to work with the Accredited Representation Management team to disable feature toggle as a rollback

## Security
<!--  descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc. -->
No PII/PHI captured in this feature. However, we do obtain PII/PHI information through the POA request. That data will expire and be deleted after 60 days.
