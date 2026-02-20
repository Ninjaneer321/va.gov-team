# 02/19/2026 SRE Meeting - Dashboard reviews

### Top concerns - ACTION ITEMS FOR THE TEAM
- Latency across all apps not hitting target
     - What is going to work to resolve these?
- High Error rates on EZR and CG

### General comments & questions
- Is it suspect that some of our SLO metrics returning 100% uptime/availability?
     - Per Steve M: This is not a usual occurrence
- Utilization
     - Percentage of requests vs total request capacity as gathered by our application web servers (puma).
     - How should this be calculated?
     - How would we calculate max capacity?
     - Can we see CPUs in DD for the containers?

### EZ 
- No notes - looks healthy

### CG 
- Check into 503s - should this return differently?
- Check into Latency (1.35s)

### EZR 
- Check into submission error rate
- Check into Upload errors 401s

### 10-10D
- including 403s - error rate is quite high
- Looking into 422s

### 10-10D Claims
- overall Latency 1.04s
     - Includes submit and supporting docs
- Submit 2.94s
     - Only submit
     - Jan 30th shows a spike, could be due to a large request payload with heavy supporting document attachments

### FMP
- Latency 1.41s

### FMP Claims
- Just released
- 99.84% availability
- Submit latency 1.48s
     - 8 total submissions so far
     - one error received since launch

### 10-10D Merged
- Latency 1.03s overall
- Latency 2.28s submit
     - Have we tried to scale up resources to resolve latency?
          - We are investigating
                - Looking at waterfalls
                - Seeing large requests
                - reviewing logs around them
                - Theory - due to PDF generations?
                - Need trace logs to confirm



