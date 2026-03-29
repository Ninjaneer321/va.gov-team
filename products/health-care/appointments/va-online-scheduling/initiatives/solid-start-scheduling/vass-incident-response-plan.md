
# Incident Response Plan

## Scope 
This applies to the VASS scheduling flow application on vets-website.

## Purpose
It is critical that we are aware of the performance of va.gov systems, notified when system behavior is impacting veterans, 
and have the necessary information to address problems quickly. To accomplish implement the following for your systems:

### Metrics and logging details
- [Monitoring and alerts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/solid-start-scheduling/engineering/metrics.md#monitoring--alerts)
- [Logging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/solid-start-scheduling/engineering/logging.md)


### Dashboards

- [Stakeholder dashboard](https://vagov.ddog-gov.com/dashboard/fw6-j3c-zns?fromUser=false&refresh_mode=sliding&from_ts=1769610040701&to_ts=1769613640701&live=true)
- [VASS Dashboard](https://vagov.ddog-gov.com/dashboard/fw6-j3c-zns/vass-va-solid-start?fromUser=false&overlay=events&overlayQuery=service%3Avass%20%24env&refresh_mode=sliding&from_ts=1774540766046&to_ts=1774544366046&live=true)

### Monitors
- [VASS: Anomalously High Errors](https://vagov.ddog-gov.com/monitors/542401)
- [VASS: Anonymously low traffic](https://vagov.ddog-gov.com/monitors/542515)
- [VASS: 4XX - Error rate is high](https://vagov.ddog-gov.com/monitors/542400)
- [VASS: 5XX - Error rate is high](https://vagov.ddog-gov.com/monitors/542399)

### Associated slack channels

[#check-in-experience-apm](https://dsva.slack.com/archives/C02U11L00TF)

### Watch Officer (watchtower) Process

Once we have calibrated our monitors to alert us when it makes sense. We should add the watchtower notification to those monitors.

[### Prod support playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/zero-failures/production-support-playbook.md)

## In the event of an incident

Follow the [Production support playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/zero-failures/production-support-playbook.md)
