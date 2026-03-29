## Mobile Dashboard Documentation
This is a public facing dashboard intended for stakeholders to provide visibility into the health of the mobile API in production.


## Ownership
- The Mobile team owns the [Mobile Dashboard](https://vagov.ddog-gov.com/dashboard/2pz-anp-xzs/mobile-dashboard?fromUser=false&refresh_mode=paused&from_ts=1773956611050&to_ts=1773961226940&live=false) in Datadog.
- The Mobile team is responsible for maintaining existing widgets, updating metrics as needed, and creating new widgets, and SLOs and monitors.


## Metrics
- The dashboard highlights the Golden Signals: Error Rate, Traffic, Latency, Saturation.
- As [defined](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/12521#issuecomment-3887003570) by the PO (Product Owners), the widgets should provide high level and API level visibility on the following:

#### Latency (response time)
- Cumulative app-wide average latency
- Latency by API
- Top 5 slowest APIs

#### Traffic (request rate)
- Cumulative app-wide traffic
- Traffic by API
- Top 5 most used APIs

#### Error rate
- Cumulative app-wide error rate
- Error rate by API
- Top 5 APIs by error rate

#### Saturation (resource usage)
- Infrastructure utilization and capacity (CPU, memory), peak load behavior and indicators of resource pressure


## Metric Maintenance
- The dashboard should be reviewed and updated when:
  - Datadog service config or tagging changes (service_tag or resource_name)
  - Metric definitions or queries change
  - Infrastructure changes (cluster renamed, deployment name changes)
  - Additional context or clarity is needed to improve metric interpretation


## Alerting/Monitoring
- Currently the dashboard does not have any alerts/monitors.
- Threshold monitors/alerts may be added, please refer to the [documentation](https://department-of-veterans-affairs.github.io/va-mobile-app/development/BackEnd/Monitoring/DataDog#creating-alerts).


## Creating New SLO
- Follow existing guidelines for [SLO](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v).

## Notes
- [Latency](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v#:~:text=metric%20over%20time.-,Latency,-Latency%20can%20be) defined in VA SLO documentation is not a 1:1 match with the latency shown in the Mobile Dashboard. The VA SLO measures end to end response time, including client side factors and upstream service responses. The Mobile Dashboard reflects backend API latency from when a request is received to when the server returns a response.
- [Saturation](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v#:~:text=Vets%20API%20endpoint.-,Utilization,-Throughput%20metrics%20are) in the VA documentation is referred to as utilization and is based on Puma (application server) capacity. The Mobile Dashboard reflects infrastructure saturation (CPU, memory utilization) specific to the mobile API. Puma capacity is measured at the vets-api level and is not specific to the mobile-app, so infrastructure metrics are used instead.


## Adding New Widgets
- Titles must be clear and understandable to non-engineers.
- Each widget should include a description explaining what is shown.
- Use Note widgets where needed to define terms, thresholds (what is a good percentage vs bad), and additional context that may be needed to aid understanding.



## Reporting
- An automated dashboard report is sent weekly on Fridays at 9am PST to the #va-mobile-core-team Slack channel.
