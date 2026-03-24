---
# Research Plan Metadata
title: "Research Plan for medical-device-tool, medical-device-tool, 2026-03-23"
date: 2026-03-23
last_updated: 2026-03-23
team: "medical-device-tool"
product: "medical-device-tool"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "API planning for medical device tool"
  product_location: "VA.gov Medical Device Tool API"
  user_familiarity: "TBD - New product or iteration?"
  product_brief_url: "TBD - Add product brief URL if available"

# Research Design
methodology: "Technical planning"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "TBD - Extract from research plan"
  - goal_2: "TBD - Extract from research plan"

research_questions:
  - "TBD - Extract from research plan"

hypotheses:
  - "TBD - Extract from research plan if available"

expected_outcomes: "TBD - How will findings advance the product?"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "TBD"
  
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  research_dates: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "TBD"

veteran_journey_phases:
  - "TBD"
    
# Research Repository Tracking
tags:
  - medical-device-tool
  - API
  - planning
---

# Medical Device Ordering Tool API Plan v1.1.0

## Overview

This document contains the proposed endpoints, requests & response information for the MDOT API Service. This project and any all documentation related to the project including this document is owned and maintained by the Benefits & Memorials II team. Any questions or concerns should be directed to the B&M II team, which can be reached on the [#vsa-bam-2](https://dsva.slack.com/channels/vsa-bam-2) Slack channel.

## Endpoints

| HTTP Method | Endpoint                     | Description                                                                                                |
|-------------|------------------------------|------------------------------------------------------------------------------------------------------------|
| POST        | /v0/mdot/supplies           | Creates a new medical device and/or accessory order.                                                       |
| GET         | /v0/in_progress_forms/mdot   | Returns just the veteran information: address, gender, date of birth, email, etc.                          |

### GET /v0/in_progress_forms/mdot

#### Request

```json
GET https://api.va.gov/v0/in_progress_forms/mdot
HTTP/1.1
Accept-Encoding: *
```

#### Response

```json
HTTP/1.1 200 OK
Date: Thu, Jan 30 2020 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json

{
  "form_data": {
    "veteranFullName": {
      "first": "Greg",
      "middle": "A",
      "last": "Anderson"
    },
    "gender": "M",
    "permanentAddress": {
      "street": "MILITARY ADDY 3",
      "city": "DPO",
      "state": "MI",
      "country": "USA",
      "postalCode": "22312"
    },
    "temporaryAddress": {
      "street": "123 Test Street",
      "city": "Test",
      "state": "AK",
      "country": "USA",
      "postalCode": "67676"
    },
    "email": "test2@test1.net",
    "supplies": [
      {
        "deviceName": "OMEGA XD3241",
        "productName": "ZA1239",
        "productGroup": "hearing aid batteries",
        "productId": "1",
        "availableForReorder": "false",
        "lastOrderDate": "2020-01-01",
        "nextAvailabilityDate": "2020-09-01",
        "leftEar": "true",
        "rightEar": "false"
      },
      {
        "deviceName": "OMEGA XD3241",
        "productName": "ZA1239",
        "productGroup": "hearing aid batteries",
        "productId": "2",
        "availableForReorder": "false",
        "lastOrderDate": "2020-01-01",
        "nextAvailabilityDate": "2020-09-01",
        "leftEar": "false",
        "rightEar": "true"
      },
      {
        "deviceName": "RITE Power",
        "productName": "DOME",
        "productGroup": "hearing aid dome",
        "productId": "3",
        "availableForReorder": "true",
        "lastOrderDate": "2019-06-30",
        "nextAvailabilityDate": "2019-12-15",
        "quantity": "10",
        "size": "6mm"
      },
      {
        "deviceName": "RITE Power",
        "productName": "DOME",
        "productGroup": "hearing aid dome",
        "productId": "4",
        "availableForReorder": "true",
        "lastOrderDate": "2019-06-30",
        "nextAvailabilityDate": "2019-12-15",
        "quantity": "10",
        "size": "7mm"
      }
      {
        "deviceName": "Waxbuster",
        "productName": "single unit",
        "productGroup": "hearing aid wax guard",
        "productId": "5",
        "availableForReorder": "true",
        "lastOrderDate": "2019-06-30",
        "nextAvailabilityDate": "2019-12-15",
        "quantity": "10"
      }
    ]
  },
  "metadata": {
    "version": 0,
    "prefill": true,
    "returnUrl": "/veteran-information"
  }
}
```


### POST /v0/mdot/supplies

#### Request

```json
POST https://api.va.gov/v0/mdot/supplies
HTTP/1.1
Accept-Encoding: *

{
  "permanentAddress": {
    "street": "101 Example Street",
    "street2": "Apt 2",
    "city": "Kansas City",
    "state": "MO",
    "country": "USA",
    "postalCode": "64117"
  },
  "usePermanentAddress": true,
  "useTemporaryAddress": false,
  "order": [
    {
      "productId": "1"
    },
    {
      "productId": "4"
    }
  ],
  "additionalRequests": ""
}
```

#### Response

```json
HTTP/1.1 200 OK
Date: Thu, Jan 30 2020 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json

{
  "status": "success",
  "orderId": "1234abcd1234abcd"
}
```
