## Walkthrough on how to determine if the EZ Form submission was successful
- You may be able to follow similar steps for the other forms, but the job names will be different
- If you can find the Request ID of the form submission, the last step can be useful
- Here is the [Slack message with Premal](https://dsva.slack.com/archives/C0310PNS7TQ/p1773933362958889?thread_ts=1772917543.619359&cid=C0310PNS7TQ) showing the same steps (less detail)


### Step 1 - Look for Gateway timeouts - aka [HCA API errors on the main EZ graph ](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=true&fullscreen_end_ts=1773933021424&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1773846621424&fullscreen_widget=1487329546266362&refresh_mode=sliding&from_ts=1773846617540&to_ts=1773933017540&live=true)
- <img width="839" height="301" alt="image" src="https://github.com/user-attachments/assets/5058af6f-2bc5-4e87-a826-a276f77d219a" />



### Step 2 [This APM Trace log](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20-status%3Aok%20resource_name%3A%22HCA%3A%3ASubmissionJob%22&agg_m=count&agg_m_source=base&agg_t=count&cols=service%2Cresource_name%2C%40duration%2C%40http.method%2C%40http.status_code%2C%40_span.count%2C%40_duration.by_service&fromUser=false&graphType=span_list&historicalData=true&query_translation_version=v0&saved-view-id=1736&shouldShowLegend=true&spanType=service-entry&storage=hot&traceQuery=&view=spans&viz=stream&start=1773846656789&end=1773933056789&paused=false) shows the submission job errors.  
- Adjust the time filter at the top right to make sure you are looking at the same timeframe
- The timeframe correlates with the errors we saw on the HCA API errors graph
     - <img width="1874" height="909" alt="image" src="https://github.com/user-attachments/assets/34540559-78d3-4a8c-b61f-a01965a88fcf" />



### Step 3 - Find the [logs of the failure](https://vagov.ddog-gov.com/logs?query=span_id%3A%281037522299997060903%20OR%20e660508e9deff27%29&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&event=AwAAAZ0CyIxwbwiCkgAAABhBWjBDeUp1TUFBQVBWMnpUa2x1SmVRQWYAAAAkMDE5ZDAyY2YtMjgwZS00NmFlLThhYWQtMTJjZjZkNDU4YzgzAA7r0Q&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1773868159669&to_ts=1773868191957&live=false)
- Click on the error from the APM trace log
- Click on the "Logs" tab within the new window (middle of the screen)
- Click on the failure line item
     - <img width="1683" height="898" alt="image" src="https://github.com/user-attachments/assets/95a354e8-2af7-45c9-9352-2e2dd1018370" />

### Step 4 - Find the Request ID in the [new Log Explorer window](https://vagov.ddog-gov.com/logs?query=span_id%3A%282338264316329888224%20OR%2020732f01cdd089e0%29&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&event=AwAAAZ0sMiFZ4Fm2kAAAABhBWjBzTWpiYUFBREZMVms4czhZM1pBQVMAAAAkMDE5ZDJjMzYtYjhjOC00NTEyLTk1MTUtZmRmMTBkNzA1ZGMzAAU4lQ&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1774562974943&to_ts=1774562977095&live=false) that came up
- Scroll down on the "Fields & Attributes" tab to find the request ID
- Copy the request ID
     - <img width="1666" height="897" alt="image" src="https://github.com/user-attachments/assets/ffed9f14-ff5f-4454-b671-b41d33ce9831" />

### Step 5 - Open a [new Log Explorer and search](https://vagov.ddog-gov.com/logs?query=%40request_id%3A915696b3-4271-4acb-aa34-fae43ca78574&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1774463324059&to_ts=1774636124059&live=true) with the copied request ID
- Make sure you have the timeframe set the same as your other logs
- Enter the copied request ID in the search bar "@request_id:[paste request ID]"
- Here, we can see (from bottom to top) the submission, the Gateway timeout error, and subsequent retry with success (Submission ID should display on one of the line items).
     - <img width="1772" height="1066" alt="image" src="https://github.com/user-attachments/assets/134938dc-6c72-4c80-9ded-46dc99163162" />



