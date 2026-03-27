

https://dsva.slack.com/archives/C0310PNS7TQ/p1773933362958889?thread_ts=1772917543.619359&cid=C0310PNS7TQ

Gateway timeouts - aka [HCA API errors on the main EZ graph ](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=true&fullscreen_end_ts=1773933021424&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1773846621424&fullscreen_widget=1487329546266362&refresh_mode=sliding&from_ts=1773846617540&to_ts=1773933017540&live=true)

[This APM Trace log](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20-status%3Aok%20resource_name%3A%22HCA%3A%3ASubmissionJob%22&agg_m=count&agg_m_source=base&agg_t=count&cols=service%2Cresource_name%2C%40duration%2C%40http.method%2C%40http.status_code%2C%40_span.count%2C%40_duration.by_service&fromUser=false&graphType=span_list&historicalData=true&query_translation_version=v0&saved-view-id=1736&shouldShowLegend=true&spanType=service-entry&storage=hot&traceQuery=&view=spans&viz=stream&start=1773846656789&end=1773933056789&paused=false) filtered for Past 1 Day shows the submission job error

Going into the [logs of the failure](https://vagov.ddog-gov.com/logs?query=span_id%3A%281037522299997060903%20OR%20e660508e9deff27%29&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&event=AwAAAZ0CyIxwbwiCkgAAABhBWjBDeUp1TUFBQVBWMnpUa2x1SmVRQWYAAAAkMDE5ZDAyY2YtMjgwZS00NmFlLThhYWQtMTJjZjZkNDU4YzgzAA7r0Q&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1773868159669&to_ts=1773868191957&live=false), we obtain the Request_id

We copy the request_id and enter it in the [Log Explorer search](https://vagov.ddog-gov.com/logs?query=%40request_id%3Af8bff288-7d2b-4776-adf3-dd6a2d7bfd11&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1773843048228&to_ts=1773929448228&live=true)

Here, we can see (from bottom to top) the submission, the Gateway timeout error, and subsequent retry with success.
