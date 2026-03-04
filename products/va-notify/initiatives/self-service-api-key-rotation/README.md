# Self-Service API Key Rotation

## Overview

Enable VA Notify service owners to self-service generate and download new API keys, and establish a key rotation cadence to reduce the risk of stale keys being used to send unauthorized messages to Veterans.

## Problem Statement

VA Notify does not currently require API key rotation on a regular basis, unlike other platforms and systems. This increases the security risk of stale keys being used to send unauthorized messages, which could erode Veteran trust in VA communications.

## Why This Is Important

API key rotation is a recommended security practice that removes stale keys and strengthens the security posture of a platform. Without it, VA Notify is exposed to the risk of compromised or outdated keys being used to send unauthorized notifications to Veterans.

**Current baseline:**
- 105 total keys
- 97 have no expiry or are already expired
- 8 have an expiration within the next 180 days

## Solution

- Enable an automated means for key generation.
- Provide a mechanism for service owners to self-service generate and download a new API key.
- Establish a key rotation expectation and change management initiative to ensure keys are rotated on a regular cadence with minimal intervention from the VA Notify team.

## Desired Outcomes

- 100% of VA Notify keys are less than 180 days old.
- Median key age is approximately 90 days.
- Reduced risk of unauthorized notifications being sent via stale or compromised keys.

## What We Want to Avoid

Notifications failing to send because customers/partners are unable to rotate keys or are out of compliance with the new policy. This risk is mitigated through change management practices.

## OKRs

_To be added._

## VA Stakeholders

Users of the VA Notify Enterprise notifications platform.

## OCTO Lead

Dave Conlon

## Is This Tracked to an Upcoming Event or Congressional Deadline?

No.

## Scale of Impact

VA Notify sends millions of messages each year.

## Long-Term Plan

Self-service API keys with monitoring of key rotation (or lack thereof) by the VA Notify team to mitigate risk of outages.

## Known Risks or Challenges

_To be documented as the initiative progresses._

## Monthly Updates

_Add brief status updates here or as comments on the tracking issue._
