# Paperless Delivery — 2025 Executive Summary

Full analysis: [PaperlessDelivery_2025_CombinedSourcesFindings.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/paperless-delivery/Research/2025_PainPoints/PaperlessDelivery_2025_CombinedSourcesFindings.md)

**Important context:** Paperless Delivery is pre-launch. There is no shipped product, so standard CSAT, Medallia task-success, and GA4 metrics do not yet exist. Figures below are directional proxies from pre-launch qualitative research.


## Satisfaction & Success

* CSAT: Not applicable — product is pre-launch. **Directional proxy:** 89% (16/18) of prototype usability participants wanted paperless delivery of documents and notifications; 11% (2/18) preferred paper as primary.
* Task success (self-reported): Not applicable — no Medallia instrument exists for a pre-launch product. In prototype testing, navigating from the homepage to the paperless settings page was the #1 observed usability failure.
* Data sources: Paperless Delivery prototype usability research (May–Jul 2025, n=18), Call center case (Apr 22, 2025, n=1), Veteran Communication Preferences Discovery interviews — paperless subset (Sept–Oct 2024, n=20).

## Top 5 Pain Points (Why People Fail)

### 1. No discoverable paperless setting exists, and the prototype path is hard to find

**What's happening:** Veterans cannot locate any paperless option on VA.gov today, and in prototype testing, navigating from the homepage to the settings page was the top usability failure.
**Impact:** Veterans seeking paperless bounce between VA.gov, My HealtheVet, and the call center without resolution; mobile users fail more often due to a desktop/mobile placement inversion.
**Fix:** Ship a clearly named "Paperless Delivery" setting in Profile with mirrored mobile/desktop placement, a homepage CTA, and search indexing for "paperless," "digital," and "paper."

### 2. Scope of paperless coverage is ambiguous

**What's happening:** Veterans cannot tell which letter types (appointments, hotline letters, claim decisions) will go paperless or whether enrolling means "all mail" or a subset, and only two VA documents are currently available digitally.
**Impact:** Veterans can't confidently enroll, and those who do risk being disappointed when expected letters still arrive on paper.
**Fix:** Publish an in-product coverage matrix on the settings page, offer bulk "make all paperless" with per-category overrides, and roadmap expansion beyond today's two eligible documents.

### 3. Privacy exposure in paper mail drives demand that the current system can't meet

**What's happening:** Physical VA letters contain full SSN, name, and address, which Veterans cite as the primary reason they want paperless — but no paperless option exists yet.
**Impact:** Veterans remain exposed to mailbox theft and PII leakage, and compare the VA unfavorably to banks that have been paperless for years.
**Fix:** Audit mailed letter templates to mask or remove full SSN, add security-framing copy to the paperless setting page, and expand the set of digitally available letter types.

### 4. Cross-channel ownership of paperless enrollment is unclear

**What's happening:** Veterans asking about paperless get bounced between VA.gov, My HealtheVet, the call center, and local VA staff — none of whom currently own or can complete the enrollment.
**Impact:** Veterans repeat themselves across channels without resolution, driving operational cost and eroding trust before the product even launches.
**Fix:** Assign a single owner for paperless end-to-end before launch, publish a canonical knowledge base article and agent script, and ensure identical access on VA.gov and the Health and Benefits app.

### 5. Confirmation and trust-closing feedback is missing from the save flow

**What's happening:** In prototype testing, participants trusted the save but manually double-checked and explicitly asked for email confirmation plus an "if you didn't do this, notify us" safety link.
**Impact:** Without confirmation, Veterans — especially security-conscious ones — may distrust the setting and return repeatedly, or disengage from the platform entirely.
**Fix:** Send an email confirmation after every paperless change (listing what switched and an "undo" link), display an in-product confirmation banner, and add "You can change this anytime" microcopy.
