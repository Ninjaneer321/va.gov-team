# Product Outline  
## Shared Claims & Appeals Card Component

---

## Overview

This initiative explores abstracting the CST (Claims Status Tool) Claims & Appeals card into a shared component that can be consumed directly by My VA from a shared library.

Today, both experiences render similar cards independently. Rather than continuing to maintain parallel implementations, My VA would render the same shared component used in CST. Any updates to content, alerts, formatting, or integrations would automatically propagate across the two experiences.

---

## Problem Statement

Claims & Appeals cards are currently implemented separately in CST and My VA, resulting in:

- Inconsistent titles and content across experiences  
- Manual coordination required to stay in sync  
- Risk of content drift over time  
- Increased engineering overhead  
- Reduced Veteran trust due to discrepancies  

These issues will only get worse as CST evolves its cards, content, alerts, and API integrations.

---

## Outcomes

### Desired User Outcomes

- Claims and appeals information appears consistent across My VA and CST  
- Veterans experience clarity and trust when navigating between tools  

### Undesired User Outcomes

- Seeing different claim titles or statuses across platforms  
- Missing or inconsistent alert messaging  
- Confusion about which experience is “correct”  

---

### Desired Business Outcomes

- Reduced cross-team coordination overhead  
- Elimination of duplicated FE implementations  
- Future CST updates automatically reflected in My VA  
- Stronger cross-platform alignment as CST evolves  

### Undesired Business Outcomes

- Release cycle bottlenecks caused by shared dependencies  
- Shared component becoming a blocker for either team  
- Governance friction around content ownership  

---

## Measuring Success

We’ll measure success through a combination of operational and user-facing signals:

- Reduction in cross-team coordination issues related to CST ↔ My VA card alignment  
- Decreased engineering effort required for future CST card updates  
- Reduced Medallia feedback related to inconsistency or confusion in claims and appeals content  
- Zero drift incidents post-implementation  

---

## Assumptions

- A shared Claims & Appeals card component is technically feasible within VA.gov architecture  
- Governance concerns can be managed through existing PR review and code ownership processes  
- My VA can safely render the CST component without introducing FE conflicts or breaking current/future IA and spacing constraints  
- Preserving My VA’s existing logic (max two most recent cards) remains sufficient for user needs  

The most material risk is governance and release coordination — not technical feasibility.

---

## Solution Approach

We will:

- Abstract the CST Claims & Appeals card into a shared component/library  
- Replace My VA’s current implementation with that shared component  
- Preserve My VA display logic (show a maximum of two most recent cards)  
- Maintain the current 60-day display rule  

This approach intentionally limits scope. We are not redesigning the card or altering CST’s logic. We are aligning structurally.

Importantly, this solution does not position My VA as dictating what belongs in the card. CST/BMT understands the claims domain and user needs most deeply. Our goal is to consume and reflect that source of truth — not redefine it. If CST updates alerts, titles, integrations, or content depth, those changes should naturally propagate.

---

## What This Does Not Include

- Changes to claim sorting logic  
- Expansion beyond two cards  
