# How We Work

**North Star:** Delivery as strategy — build, ship, and maintain software.

## Core Assumptions

- OCTO Health Engineers own end-to-end feature delivery, from development to production.
- We operate with a startup mentality: agile, adaptable, and focused on delivering value quickly.
- OCTO Health Engineers provide technical leadership but operate as a separate team from core product teams, allowing focused execution without competing priorities.
- We prioritize communication and delivery over bureaucracy — as few tickets and formal processes as possible.

## How We Measure Progress

We (OCTO Health Engineering) track progress through **delivered features** and **proofs of concept**, not tickets.

- **Known risk → ship a feature.** When the problem and solution are well understood, work is scoped and delivered end-to-end. A merged PR and a working feature in production are the artifacts — not a closed ticket.
- **Unknown risk → build a proof of concept.** When requirements are unclear or the technical approach is uncertain, we spike with a targeted PoC to reduce risk before committing to full delivery.

Tickets may still be created by teams that need them for their own process, but they are not our primary measure of work or progress.

We acknowledge that contracts have reporting requirements around ticketing and documentation. Parallel ticket infrastructure to satisfy those requirements is fine — but it should support delivery, not drive it.

## Ideal Workflow

1. Stakeholders (PMs, Designers, Engineers) define and document requirements — starting in Slack or meetings, then formalized in GitHub, Confluence, etc.
2. Work is distributed to OCTO Health Engineers or core product teams based on the nature of the work.
3. The responsible team develops the feature following their own process and the shared standards (code review, testing, deployment, etc.).
4. All parties communicate regularly to stay aligned and on track with deadlines and support the delivery process.

## Case Study: Medical Records SCDF Migration

OCTO led a swarm effort to migrate all Medical Records domains to SCDF. We stood up dedicated syncs outside regular sprint ceremonies, organized work in a Slack canvas, and used PRs as the primary documentation. Contractor teams created tickets as needed to fit their process, but we didn't require tickets for every task — keeping the focus on delivery. The migration completed on time, demonstrating effective cross-team collaboration with minimal bureaucracy. This approach allowed us to move quickly completing all domains in a timeframe measured in days, not weeks.
