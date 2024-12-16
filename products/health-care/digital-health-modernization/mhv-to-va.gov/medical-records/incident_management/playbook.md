# DEC 16, 2024: THIS TEMPLATE NEEDS TO BE FILLED OUT* 


# Endpoint monitoring

## Scope 
This applies to all OCTO APIs & Sidekiq jobs hosted as part of vets-api, and focuses on the use of Datadog for observability.

## Purpose
It is critical that we are aware of the performance of va.gov systems, notified when system behavior is impacting veterans, 
and have the necessary information to address problems quickly.  To accomplish implement the following for your systems:

## Dashboards
Have dashboards that reflect the operations of your system.  This can show traffic levels, error rates, system latency, or any 
other metric that helps understand system performance for addressing current issues or predicting future behavior.  

### Dashboard recommendations
- For quantitative data that is measured over time look into using metrics, or creating custom metrics.  Metrics are faster to query,
  and are retained in an indexed state for longer.  Generally *do not* tag metrics with highly unique values (like IDs) because
  it can greatly increase the cost.  Look into the use of statsd for publishing clear quantitative data from vets-api code.
- For qualitative data that requires more context consider the use of logs.  When possible logs should be written out in a JSON format
  to permit better searchability.
- It is recommended to include APM timeseries metrics for errors in your Dashboards.  APM will only show error cases, and has a more limited
  duration, but it's click-through capability to show rich debugging data is useful.  We recommend noting that APM widgets on a Dashboard
  have the click-through capability so users can easily find them.
- When appropriate it is recommended to create a dashboard that models behavior for high impact/risk launches, showing the impact of changes
  and identifying new errors that happen post-launch.  This type of dashboard can often be deleted or incorporated into other dashboards
  after a successful release.

## Monitors
Include monitors that notify the team (or organization) when the system has an issue that should be investigated or addressed.

#### Monitor types
*A team can determine the specific functionality that should be monitored based on the system's functionality, but we generally 
expect that the following three scenarios will be covered:*
- **High error counts** - cases where the system produces unexpectedly high number of errors
- **Anomonously low traffic** - the system encounters less traffic than expected for a given period of time.  This is often
  indicative of a failure elsewhere upstream in the system.
- **Silent failures in processing** - You should have monitors for any case where the system can encounters failures that impacts a
  veteran submission.  *This is crucially important for cases where a Veteran is not aware that their submission has failed - the
  requirement is that every one of these cases is addressed*
- *Any other cases that the team feels is important to provide a reliable, responsive service to Veterans.*

### Monitor recommendations
- Make monitor alerts *actionable*.  Frequent non-actionable monitor alerts lead teams to ignore monitors and
  eventually miss important issues.
- Expect to have to iterate on monitor thresholds and messages to ensure that they are actionable over time.
- Have a process for communicating monitor alerts.  Typically monitors alerts are configured to send a message to a Slack channel,
  which provides visibility and a historical record.
  - Viewers should have a way to identify the status of an alert (emojis or replies)
  - It is recommended to have a separate channel for monitoring Slack notifications because alerts can
    overwhelm a more general channel.
- DO NOT put any PII or PHI in a notification message ever.  
- DO NOT group large numbers of controller actions into single alerts unless there is a particular reason to do so.  Grouped
- Consider using the default_zero() function when measuring traffic that can often drop to zero.  Empty result sets often do not
  respond to low traffic in expected ways
- Whenever possible try to segment errors by cause: a monitor is much more useful and reduces team toil if it specifically notes that
  the issue is being, (for instance), caused by an upstream system or TIC latency.
- Include clear guidance for different target groups in monitor alerts
- Only include monitor warnings (as opposed to alerts) if there is a team that is specifically going to act on them.

## Process expectations
- It is expected that teams will monitor alert notifications and deal with them appropriately for their respective products.
- Monitor alert notifications should include links to playbooks that explain how to review and address alerts.
- If a team finds they are receiving too many or too few alerts, adjust the parameters or methology for the monitor.  

## SLOs and Business/Product Metrics
- This document is focused on operational metrics for well running applications, but Datadog can also be used for providing business
  metrics using tools like SLOs.

## Watch Officer (watchtower) Process
- High priority applications may need to be included in the Watchtower program
- Guidelines on the Watchtower can be found [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/watchtower-integration)
- Teams can mark monitors for Watch Officer review by adding the `watchtower` tag to the monitor.
- Be sure to that all Watchtower include clear instructions for the Watch Officer to follow

## General
- ALWAYS check with Dashboard, Monitor, and SLO Owners prior to making changes to them.  

## Access rights
- For reviewing Dashboards, Monitors, and SLOs a user can request `datadog readonly` role access.  If a user needs access to create or modify
  dashboards, monitors, or SLOs they can request `VFS Team Pilot` role access

## Getting help
- Questions can be posted in the #public-datadog Slack channel
- There is a Datadog TAM office hours meeting held most Mondays at 11 AM.  Details for the meeting are posted in the #public-datadog channel.

   