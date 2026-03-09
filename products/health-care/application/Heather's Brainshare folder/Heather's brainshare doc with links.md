## Heather’s Brain-share document
- March 2026
- My focus has been on the 10-10EZ, 1-0-10CG and 10-10EZR forms.

### Links to stuff
- [Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Team%20docs/EZ_CG_EZR%20Priorities.md) (shows all work since beginning of 2025)
- [Planning doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Team%20docs/EZ_CG_EZR%20Priorities.md)
- [GH Project](https://github.com/orgs/department-of-veterans-affairs/projects/1917) (subject to change with GH to GHEC-US migration)
- [GH Issues list](https://github.com/department-of-veterans-affairs/va.gov-team/issues) to find old stuff
- [EZ Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application)
- [CG Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers)
- [EZR Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/health-update-form)
- [10-10 Team Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application)
- [Team folder (sensitive repo)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/health-portfolio/1010-health-apps)
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/health-portfolio/1010-health-apps/Team%20Charter.md)
- [Roadmap Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1703106781604/56e2a5cb39c72e3faad25bcb94496ecdd92ccb35?fromVisitorModal=true&sender=u5b5b283ad7d33e12ab259320) (can only edit when on VA Network)


#### Dashboards
- Google Analytics explorations
     - [GA4 - Explorations](https://analytics.google.com/analytics/web/#/analysis/p419143770)
     - [GA4 - Home dashboard](https://analytics.google.com/analytics/web/#/p419143770/reports/intelligenthome)
     - [GA4 EZ Start form](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/dwxhetVwQr2pSXRr341_Ow)
          - Start Form count comes from the "No seg" tab, use Total Users count
     - [GA4 EZ Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/7yD42qmORqO0iVldCEuWdQ)
          - Future date submissions
          - Short form starts
     - [GA4 CG Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/ffeHfxucSzypFvNDaGArbw)
          - Start Form count comes from the Form starts event
     - [GA4 CG Start form (WIP)](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/5QPqHO34SJm5njqGugStxQ)
          - Not really used for anything, since we have the event already
     - [GA4 EZR Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/B1BuF9JgTgCgLV3cx4EB4Q)
          - No special events captured but good to have this
     - [GA4 EZR Start form](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/ejYeYXxMRViT5UJzSEafaQ)
          - Start Form count comes from the Unique views tab, use total views count

- Datadog dashboards & Links
     - [DD - Breakers External Services - Up](https://vagov.ddog-gov.com/dashboard/8c9-p4m-7ut/breakers-external-services---up?fromUser=true&refresh_mode=sliding&view=spans&from_ts=1721138524527&to_ts=1721311324527&live=true)
     - [PACT ACT - Second Cohort (9.30.2023)](https://vagov.ddog-gov.com/dashboard/gfw-rwf-w5r/pact-act-second-cohort-9302023?refresh_mode=sliding&from_ts=1695058547299&to_ts=1695062147299&live=true)
     - [POST /voa/voaSvc Log Explorer](https://vagov.ddog-gov.com/logs?query=%22POST%20%2Fvoa%2FvoaSvc%22%20&cols=host%2Cservice&index=%2A&messageDisplay=inline&refresh_mode=sliding&stream_sort=desc&viz=stream&from_ts=1703108933681&to_ts=1703195333681&live=true)
     - :star:[ EZ & CG basic Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1689364959316&to_ts=1689368559316&live=true)
     - [EZ APM Trace logs](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Ahealthcare-application%20-status%3Aok%20&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=service-entry&traceQuery=&view=spans&start=1712612790528&end=1713822390528&paused=false)
     - [EZ APM Traces - Retries](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20-status%3Aok%20resource_name%3A%22HCA%3A%3ASubmissionJob%22%20&cols=service%2Cresource_name%2C%40duration%2C%40http.method%2C%40http.status_code%2C%40_span.count%2C%40_duration.by_service&fromUser=false&historicalData=true&query_translation_version=v0&saved-view-id=1736&spanType=service-entry&traceQuery=&view=spans&viz=stream&start=1710341392542&end=1710427792542&paused=false)
     - [EZ Create APM logs](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23create%22%20-status%3Aok%20&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=service-entry&traceQuery=&view=spans&start=1712704149934&end=1713913749934&paused=false)
     - [EZ PDF Download](https://vagov.ddog-gov.com/apm/resource/healthcare-application/rack.request/fed2018843dbdd46?query=env%3Aeks-prod%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23download_pdf%22%20service%3Ahealthcare-application&env=eks-prod&fromUser=false&start=1746528453520&end=1746542853520&paused=false)
     - [DD - EZ Facilities APM](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3A%2A%20env%3Aeks-prod%20service%3Ahealthcare-application%20status%3Aerror%20-resource_name%3A%28%22V0%3A%3AHealthCareApplicationsController%23rating_info%22%20OR%20%22V0%3A%3AHealthCareApplicationsController%23create%22%20OR%20%22V0%3A%3AHealthCareApplicationsController%23enrollment_status%22%29&agg_m=count&agg_m_source=base&agg_t=count&cols=service%2Cresource_name%2C%40duration%2C%40http.method%2C%40http.status_code%2C%40_span.count%2C%40_duration.by_service&fromUser=true&graphType=service_map&historicalData=true&query_translation_version=v0&saved-view-id=1577&shouldShowLegend=true&spanType=service-entry&spanViewType=logs&storage=hot&view=spans&viz=stream&start=1727755200000&end=1733927602377&paused=true)
     - [:star: 10-10EZR | Datadog](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?refresh_mode=sliding&from_ts=1698757876568&to_ts=1698761476568&live=true)
     - [EZR Job APM](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20operation_name%3Asidekiq.job%20service%3Avets-api-sidekiq%20resource_name%3A%22HCA%3A%3AEzrSubmissionJob%22%20&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&refresh_mode=sliding&shouldShowLegend=true&sort=time&spanType=all&spanViewType=errors&view=spans&start=1723576924341&end=1723580524341&paused=false)
     - [EZR APM Traces](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Ahealth-information-update%20-status%3Aok&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=service-entry&traceQuery=&view=spans&start=1720126160146&end=1721335760146&paused=false)
     - [EZR Create APM](https://vagov.ddog-gov.com/apm/resource/health-information-update/rack.request/b3dd8934d6edf9d3?query=env%3Aeks-prod%20operation_name%3Arack.request%20service%3Ahealth-information-update&env=eks-prod&fromUser=false&graphType=flamegraph&shouldShowLegend=true&sort=time&spanViewType=metadata&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&view=spans&start=1757516569685&end=1757530969685&paused=false)
     - [EZR Services APM (incl PDF download)](https://vagov.ddog-gov.com/apm/entity/service%3Ahealth-information-update?dependencyMap.showNetworkMetrics=false&env=eks-prod&fromUser=false&graphType=span_list&groupMapByOperation=null&operationName=rack.request&shouldShowLegend=true&traceQuery=&start=1758125441669&end=1758139841669&paused=false)
     - [EZR Download PDF](https://vagov.ddog-gov.com/apm/resource/health-information-update/rack.request/f58c9c8874db774a?query=env%3Aeks-prod%20operation_name%3Arack.request%20service%3Ahealth-information-update&env=eks-prod&fromUser=false&primaryTags=&start=1758557894375&end=1758572294375&paused=false)
     - [CG - APM Traces | Datadog](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Acaregiver-application%20-status%3Aok&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&historicalData=true&messageDisplay=inline&query_translation_version=v0&sort=desc&spanType=service-entry&traceQuery=&view=spans&start=1711464472416&end=1712674072416&paused=false)
     - [CG Submission APM](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20-status%3Aok%20resource_name%3A%22Form1010cg%3A%3ASubmissionJob%22%20&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=true&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=all&spanViewType=errors&storage=hot&view=spans&start=1725281423104&end=1725886223104&paused=false)
     - [CG Service APM page](https://vagov.ddog-gov.com/apm/entity/service%3Acaregiver-application?dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&errors=qson%3A%28data%3A%28issueSort%3AFIRST_SEEN%29%2Cversion%3A%210%29&fromUser=false&groupMapByOperation=null&infrastructure=qson%3A%28data%3A%28viewType%3Apods%29%2Cversion%3A%210%29&logs=qson%3A%28data%3A%28indexes%3A%5B%5D%29%2Cversion%3A%210%29&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&start=1737730328255&end=1737744728255&paused=false)
     - [VA Notify Submission fail emails](https://vagov.ddog-gov.com/metric/explorer?fromUser=false&start=1721323274885&end=1721409674885&paused=false#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGABuMMgViBpOGPIQAHQaCJ4aUM2NEE5kAAwDcABeaXgARqoQGhqSIi4YEGh4Rk5wHktpcCIIwABUPN31mfg7ABQAlCA8ALpUru54mKHhD6pPGDGl8dd3IG1YNA5UDyDBAhAIHJJHAwJyZZ6zTKJNCiOBOOSKZTpFFQZGopz0JjKERuDxoa78abyTBYdEKKHjDDaSy3Hh8f7U8QAYSkwhgKBETzQPCAA)
     - [EZ-CG Schema validation logs](https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%22Form%20validation%20in%22%2A&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1737664958446&to_ts=1738269758446&live=true)
     - [EZ_EZR Payload w attachments](https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%22Payload%20for%20submitted%22%2A&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=hot&stream_sort=desc&viz=stream&from_ts=1739466620077&to_ts=1739481020077&live=true)
     - [EZ SIP deleted Logs](https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%22-%20InProgressForm%20successfully%20deleted%22%2A&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&messageDisplay=inline&refresh_mode=sliding&source=monitor_notif&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1758126689151&to_ts=1759422689151&live=true)
- VA Notify (get access to the spaces)
- Pagerduty (get access to the space)
     - [List of services](https://ecc.pagerduty.com/service-directory/?direction=asc&query=&sort_by=name&team_ids=mine)
          - EZ
               - External: 10-10EZ form - PROD
               - External: Enrollment Services (ES) - PROD
               - Staging: External: 10-10EZ form - Staging
               - Staging: External: ES - Staging
          - EZR
               - External: 10-10EZR form - PROD
               - Staging: External: 10-10EZR form - Staging
          - CG
               - External: CARMA - PROD
               - Dev: External: CARMA - DEV
               - Staging: External: CARMA - Staging
     - [Set up a Maintenance window](https://ecc.pagerduty.com/service-directory/maintenance-windows?team_ids=mine)
- Figma Files
     - [EZ Working file](https://www.figma.com/file/UljiHam46o5DItC5iDgmPd/10-10EZ?type=design&node-id=109-59846&mode=design&t=NG4WSpLntVopG3ox-0)
     - [EZ Production file](https://www.figma.com/design/W1cs6Gjx3MR5VU0EjurHLZ/10-10EZ-Production?node-id=0-1&p=f&t=JhxW0BXZeM2oyPIO-0)
     - [CG Working file](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG---WORKING-file?node-id=0-1&p=f&t=1S8aaa9JVqAS4t4Z-0)
     - CG Production file - TBD
     - [EZR Working file](https://www.figma.com/design/tggcJk382w9yQ0ElwKfh3N/10-10EZR?node-id=0-1&p=f&t=97ZZGWDgjbxuR6BE-0)
     - [EZR Production file](https://www.figma.com/design/FIol4hCGVx9eTrY0AXDmnl/10-10EZR-Production?node-id=0-1399&p=f&t=ey2ypoqbR0FpA8aE-0)



### List of resources for each form that will help provide some background

- 10-10EZ
     - [EZ Things to Know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/10-10EZ%20-%20Things%20to%20know.md)
          - There is a feature toggle that can turn on and off Staging Test Users for enrolled/not enrolled
     - [EZ Transition Hub](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/Transition%20hub)
     - [ZSF playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10EZ%20Monitor%20Playbook.md)

- 10-10CG
     - [CG Things to Know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/10-10CG%20-%20Things%20to%20Know.md)
     - [CG Transition Hub](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/Transition%20hub)
     - [ZSF playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10CG%20Monitor%20Playbook.md)

- 10-10EZR
     - [EZR Things to Know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Form/10-10EZR%20-%20Things%20to%20know.md)
     - [EZR Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/EZR%20Transition%20Hub%20(August%202025).md)
     - [ZSF playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Form/Error%20Monitoring%20playbook/10-10EZR%20Endpoint%20Monitoring%20Playbook.md)

### List of contacts for each form
- **10-10EZ and 10-10EZR**
     - Amanda Scully - Director
          - Main decision maker
     - Angela Fulton - HEC business SME
          - Knows how the staff work
     - Simone Gully - HEC business SME
          - Always thinks of the Veteran and staff impacts
     - Tiffany Gaines - HEC business SME

- **10-10CG**
     - Caregiver team is very friendly and accommodating, 
          - Open to hearing new ideas
          - Resistant to changing or complicating things online (This is a very simple form)
          - Don’t want to add too much program eligibility details on the form, as they can/do change
     - Slack channel [#vecms-carma_vadotgov_development_external](https://dsva.slack.com/archives/C02MJCT59S7)
     - Matt Brown - Director
          - **Main** decision maker
     - Marla Clayton - Technical Project Manager 
          - **Secondary** decision maker to Matt Brown
          - Can help you get tech folks together
          - **Main contact** for any issues/errors that come up
     - Drew DeRocco - PMO
          - Can help to schedule calls with everyone
     - Gaspare Caruso - Program Coordinator
          - **Main contact** for getting monthly metrics
          - Usually contacts us when there is an issue reported through calls to CG coordinators
     - Paul Kuprionas - CARMA tech lead
          - Not usually directly engaged by us, but has been known to provide input
     - Tiffany Puckett - Health system specialist
          - **Secondary contact** for monthly metrics

### Features in progress (as of March 2026)

* EZR Service History section
     * [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Add%20Service%20History/Add%20Service%20History%20-%20Initiative%20Brief.md)
     * [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77527)
* EZ Form Statuses
     * [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Form%20Statuses/Form%20Statuses%20-%20Initiative%20Brief.md)
     * [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95313)
* EZR Form Statuses	MyVA
     * [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Form%20Statuses/Form%20Statuses%20-%20Initiative%20Brief.md)
     * [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117626)
* EZR Edit EC/NOK on Profile page
     * [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Edit%20EC_NOK%20on%20Profile/Edit%20EC_NOK%20on%20Profile%20page%20-%20Initiative%20Brief.md)
     * [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120581)


### Features delivered (listed from newest to oldest)

#### 10-10EZ
- **Note**: 10-10 EZ form has been available online for a number of years.  Only in 2019, had the form been regularly revisited for updates and improvements. ([archived docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/vets-application/product))
- 2012: Fillable PDF avalable to submit online (vets.gov)
- May 2016: Launched Online form with data fields and submission online (no more PDF), content & data fields match PDF form (vets.gov)
- 06/03/2019: Launched Enrollment record validation when user enters personal info, if no record found, user can proceed through the form
- 08/23/2022: Launched Medicare Claim number field added to the form
- 10/11/2022: Launched American Indian question added to the form
- 10/31/2022: Launched 10-10EZ Short Form flow
- 11/01/2022: Launched 10-10EZ Saved-in-progress email reminders
- 03/08/2023: American Indian question REMOVED from the form
- 06/27/2023: Moved submission failure email from govdelivery service to VA Notify template
- 08/10/2023: Launched Household section optimization
- 08/29/2023: Removed "screener" page for unauthenticated users (duplicate questions to confirm name/DOB/SSN)
- 03/05/2024: Launched Toxic Exposure questions added to form
- 05/06/2024: Root URL updated from `va.gov/health-care/apply/application/` to `va.gov/health-care/apply-for-health-care-form-10-10ez/`
- 08/27/2024: Update Facilities list to use LH Facilities API (and compare to Enrollment system data to avoid validation errors)
- 09/03/2024: Update "Need Help" section with new Accredited Representative content (replacing VSO content)
- 10/09/2024: Launched Registration Only MVP 3-month experiment (Ended 1/6/2025)
- 10/21/2024: Remove "Minimum Essential Coverage" checkbox from Facility page
- 11/05/2024: Launched Toxic Exposure improvements (question branching logic and content updates)
- 11/25/2024: Launched Updates to Submission failure and In-progress email templates within VA Notify (aligning with CAIA and VAN templates)
- 11/25/2024: Created Temporary BGS-disable feature toggle to disable during COLA update on 11/29-12/2
- 02/25/2025: Upgraded to Lighthouse Facilities API v2 (for facility search page)
- 05/05/2025: Launched PDF Download (on submission or submission failure)
- 06/24/2025: Allow PDF downloads after initial failures (3 retries)
- 07/14/2025: Used Temporary BGS-disable feature toggle to turn off during BGS to BEP migration. (7/11-7/14)
- 07/15/2025: Updated Facility selection list to remove all mobile and defunct facilities
- 08/03/2025: Launched update to Dependents section for List & Loop fix to allow Save-in-progress within the loop
- 08/03/2025: Updated headers throughout form to align with DST
- 08/04/2025: Launched UI update to phone number field to strip international phone numbers that do not match the 10-digit format (until downstream systems can support)
- 09/09/2025: Launched List & Loop for Insurance section
- 11/14/2025: Updated Intro page with Dental coverage information
- TBD: Form status updates on MyVA to include submission in progress & received
- TBD: Updated Intro page alerts for enrollment statuses of Pending (pendingMT (financials) and pendingOther (missing information) to direct to EZR

#### 10-10CG
- 10/01/2020: Caregiver Online form
- 03/2022: Mulesoft Integration ph 1
- 07/06/2022: Sign as a Representative - content update
- 07/21/2022: "Same Address" Checkbox (Caregiver can use checkbox to indicate they have the same address as the Veteran)
- 09/23/2022: Mulesoft Integration ph 2 (queueing and retries)
- 09/12/2023: Updated to memorable date component
- 03/06/2024: Completed removing eMIS references within form (eMIS deprecated)
- 06/26/2024: Root URL updated from `va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/` to `va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/`
- 07/08/2024: Form updates from latest OMB review
- 09/24/2024: Added `submitted_at` subattribute in schema
- 02/14/2025: Facilities search
- 04/02/2025: OAuth update
- 07/15/2025: Update signature page to prefill Veteran's and Caregivers' names

#### 10-10EZR
- 12/20/2023: EZR Form launched at 10% over the holiday week
- 04/11/2024: Full launch at 100%
- 03/05/2024: Launched Toxic Exposure questions added to form
- 06/20/2024: Launched ability to upload documents with submission
- 10/21/2024: Update "Need Help" section with new Accredited Representative content (replacing VSO content)
- 10/15/2024: Launched Updates to Submission failure and In-progress email templates within VA Notify (aligning with CAIA and VAN templates)
- 12/04/2024: Launched Toxic Exposure improvements (question branching logic and content updates)
- 08/18/2025: Launched prefill for Dependents section
- 09/22/2025: Launched Emergency Contact and Next of Kin pages, prefilled (maximum of 2 contacts each)
- 09/25/2025: Launched PDF Download (on submission or submission failure)
- 11/14/2025: Updated Intro page with Dental coverage information
- 12/24/2025: Launched prefill for Spouse section
- 01/22/2026: Launch read-only content to display previous year's reported financials (income, deductibles)
- TBD: Launch Military Service History questions pages
- TBD: Launch Form status updates on MyVA to include submission in progress & received
- TBD: Launch edit function on VA.gov profile page for Emergency Contact & Next of Kin


### Tech Debt that needs to get done

- [ ] [#121079](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121079) - [Eng] Remove `ezr_form_prefill_with_providers_and_dependents` feature toggle
- [ ] [#121402](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121402) - [Eng] Remove `ezr_spouse_confirmation_flow_enabled` feature toggle
- [ ] [#134864](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134864) - [FE] Update Dep education expenses content
- [ ] [#134863](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134863) - [FE] Update Dep financial support content
- [ ] [#134867](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134867) - [FE] Update dependents review page "Remove" button
- [ ] [#134872](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134872) - [FE] Update dependents review page content
- [ ] [#130856](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130856) - [FE/QA] Review and align with the latest QA Standards updates
- [ ] [#130857](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130857) - [FE/QA] Review and align with the latest QA Standards updates
- [ ] [#134813](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134813) - [BE] Investigate recent increase of 422 errors
- [ ] [#133844](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133844) - [BE] Investigate 503 errors
- [ ] [#133848](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133848) - [BE] Investigate 401 errors
- [ ] [#133850](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133850) - [BE] Investigate high latency
- [ ] [#133849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133849) - [BE] Investigate high latency
- [ ] [#119890](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119890) - [FE] Update file upload pattern
- [ ] [#119892](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119892) - [FE/QA] Update file upload pattern
- [ ] [#119891](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119891) - [FE] Update file upload pattern - array builder
- [ ] [#134812](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134812) - [FE] Discovery on PDF date/time watermark






### Known or reoccurring issues
- 403/CSRF errors
- Schema validation errors
- Latency

### Future work
- EZR Management in [VA.gov](VA.gov) Profile
     - Super Epic  [#134714](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134714)
          - EC/NOK Epic [#120581](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120581) **[Scheduled and in progress]**
          - Insurance Epic [#134772](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134772)
          - Spouse Epic [#134724](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134724)
          - Dependents Epic [#134726](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134726)
          - Financials Epic [#134729](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134729)
- [EZR Short Form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Short%20Form/10-10EZR%20Short%20Form%20-%20Initiative%20Brief.md) (allows 50% or greater disability rating to skip household)
