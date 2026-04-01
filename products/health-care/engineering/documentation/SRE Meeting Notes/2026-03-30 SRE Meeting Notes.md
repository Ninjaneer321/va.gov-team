* 1010d (and all forms in ivc)  
  * submit errors (standardize)  
    * break out the 403s, keep those in separate graph  
    * perhaps a bar graph capture the "other" errors separately so that they can still be tracked/visualized  
    * Andrea also has a couple views in progress in data dog (links in ticket)  
  * Availability  
    * Can this be improved? 100% seems sus, so we may not be measuring accurately  
  * Utilization  
    * verify we're tracking that accurately \- should be % of total capacity  
  * Latency  
    * work continuing in tickets in this sprint  
* All SLO targets are north star  
  * We should be capturing them accurately and working iteratively on adjustments to meet (or get closer to) if we're not meeting the goal yet
  * [SLO Target Link](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v)
  ### Summary of SLO Targets

* **Availability:** \> 99.9%. (Processes are up and responding)  
  * % of requests which do not result in an error (HTTP code \<500) as *sampled* by our external synthetic testing tool (Datadog).  
* **Latency:** \< 750ms/request  
  * Response time as *gathered* by our server-side application.  
* **Errors:** \< 0.25%  
  * % of requests which result in an error (HTTP code \>=500) as *gathered* by our server-side application.  
* **Utilization:** \< 80  
  * Percentage of requests vs total request capacity as *gathered* by our application web servers (puma).

(Metrics are averaged over the previous rolling month.)
