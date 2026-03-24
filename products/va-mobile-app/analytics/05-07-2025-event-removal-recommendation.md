[Reference document](firebase-events.md)

# 03/23/2026 Firebase Events removed
As we prepare to retire some of our Home Screen analytics, we’ve compiled a summary of key insights. This data was collected over approximately the past month, following an update released on 2/10/26 that overhauled our load time analytics.

The metrics below represent the time (in milliseconds) required for each activity to load its initial data. The vama_hs_load_time metric reflects the total time it takes for all Home Screen activities to load, at which point the activity buttons become visible to the user.

## Key Takeaways:
It typically takes 5–7 seconds for all Home Screen activities to fully load.

Most individual activities load within 1–3 seconds.
Prescriptions has the highest typical load time, with most loads occurring between 5–7 seconds. Its second most common load time range is 1–3 seconds.
Prescriptions also has the greatest number of load time outliers (i.e., load times exceeding 15 seconds).

You can also view the full Google Analytics exploration here: [Home Screen Load Time Analytics](https://analytics.google.com/analytics/web/?authuser=1&hl=en-US#/analysis/a50123418p265787033/edit/ijWB4sQwTUKBK4BJfmn1wA)


| Name                  | So far in 2026 | Justification |
| --------------------- | -------------------------- | ------------- |
| vama_hs_sm_load_time  | 29.8 mil | HS Loadtimes have been isolated and will be removed for space savings |
| vama_hs_appts_load_time  | 27.2 mil | HS Loadtimes have been isolated and will be removed for space savings |
| vama_hs_rx_load_time  | 19.1 mil | HS Loadtimes have been isolated and will be removed for space savings |
| vama_hs_claims_load_time  | 14.6 mil | HS Loadtimes have been isolated and will be removed for space savings |
| vama_load_time_outlier  | 3.3 mil | HS Loadtimes have been isolated and will be removed for space savings |
| vama_eu_shown  | 1.7 mil | Encouraged update been live for a long time, by update takeaways not needed |
| vama_eu_updated  | 0.9 mil | Encouraged update been live for a long time, by update takeaways not needed |
| vama_eu_skipped  | 0.3 mil | Encouraged update been live for a long time, by update takeaways not needed |
| vama_sso_cookie_received  | 2.3 mil | cookies are almost 100% returning true, no changes |
| vama_ddl_landing_click | 1.7 mil | Data regarding obfuscated text secured at this point |



# 05/07/2025 Firebase Events recommended for removal

## MVP Event Removals, platform

| Name                  | Month Event Count Estimate | Justification  | Status |
| --------------------- | -------------------------- | -------------- | ------ |
| vama_accordion_click  | 1.6 mil  | Generic component event          | Removed in release 2.50.0 |
| vama_segcontrol_click | 2.7 mil  | Generic component event          | Removed in release 2.50.0 |
| vama_modalpick_open   | 1 mil    | Generic component event          | Removed in release 2.50.0 |
| vama_modalpick_sel    | 900k     | Generic component event          | Removed in release 2.50.0 |
| vama_login_token_get  | 14 mil   | Duplicative to a debugging event | Removed in release 2.50.0 |
| vama_hs_appts_count   | 11 mil   | Data not used, very high traffic | Removed in release 2.50.0 |
| vama_hs_claims_count  | 7.2 mil  | Data not used, very high traffic | Removed in release 2.50.0 |
| vama_hs_rx_count      | 8 mil    | Data not used, very high traffic | Removed in release 2.50.0 |
| vama_hs_sm_count      | 12.2 mil | Data not used, very high traffic | Removed in release 2.50.0 |

Total monthly reduction estimate: 58.6 mil

## Post-MVP 1, platform

| Name                  | Month Event Count Estimate | Justification  | Status |
| --------------------- | -------------------------- | -------------- | ------ |
| vama_auth_completed | 2.4 mil | Duplicative event to vama_login_success | active |
| vama_react_query_retry | 675k | Rarely used debugging event | active |
| vama_select_all | 74k | Tracked, but unused, no data gathered | active |
| vama_pagination | 800k | Generic component, not very useful | active |

Total monthly reduction estimate: 3.95 mil

## Post-MVP 2, experience teams

| Name                  | Month Event Count Estimate | Justification  | Status |
| --------------------- | -------------------------- | -------------- | ------ |
|  |  |  |  |

