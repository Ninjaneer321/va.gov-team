# Mapbox Facility Locator implementation 

## Overview
- **Mapbox APIs that are used on VA.gov**: Temporary Geocoding V5, Map Loads for Web, Static Images, Matrix

We use Mapbox to render maps, most notably on the Facility Locator. In order to use Mapbox, an [access token](https://docs.mapbox.com/accounts/guides/tokens/) is required. One critical piece to understanding the architectural approach mapped out below is to understand that these Mapbox access tokens are [visible to the public](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/462#issue-1205626603). Mapbox knows this and accounts for this by allowing (and suggesting) URL restrictions on the tokens. So, for example, we can restrict our tokens to only work on API calls initiated from va.gov.

This is great, and works for our public-facing sites. But the problem grows in scope when we recognize that this will not work for some of our non-production environments (CI, local). In these cases, we are working without a typical URL, so we cannot use URL restriction. Luckily, in these cases, the front ends are not viewable by the world, so we don't need to worry about the token being viewable in that context. We simply need to ensure that the token is not in the source code.

So, we need [two separate tokens](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/457#issuecomment-1513272716). A production token that is URL restricted and a development token that is not URL restricted. As noted above, tokens that are not URL restricted must never be visible to the world, so it is imperative that we not store these values in our repository. So, the architectural challenge amounts to storing the value elsewhere, and then retrieving the value in an appropriate fashion.

## Architecture
### Token Storage
Tokens are stored in AWS Parameter Store. Each Mapbox-consuming application now has its own dedicated token, allowing independent rotation, URL restriction, and usage tracking per team.

#### Per-application production tokens

| Application | SSM Parameter | Env Variable |
| --- | --- | --- |
| Facility Locator | `/dsva-vagov/vets-website/prod/mapbox_token_facility_locator` | `MAPBOX_TOKEN_FACILITY_LOCATOR` |
| Static Pages | `/dsva-vagov/vets-website/prod/mapbox_token_static_pages` | `MAPBOX_TOKEN_STATIC_PAGES` |
| GI Bill Comparison Tool | `/dsva-vagov/vets-website/prod/mapbox_token_gi` | `MAPBOX_TOKEN_GI` |
| Ask VA | `/dsva-vagov/vets-website/prod/mapbox_token_ask_va` | `MAPBOX_TOKEN_ASK_VA` |
| Caregivers | `/dsva-vagov/vets-website/prod/mapbox_token_caregivers` | `MAPBOX_TOKEN_CAREGIVERS` |
| Representative Search | `/dsva-vagov/vets-website/prod/mapbox_token_representative_search` | `MAPBOX_TOKEN_REPRESENTATIVE_SEARCH` |

#### Other tokens

* Shared dev fallback: `/dsva-vagov/vets-website/dev/mapbox_token` → `MAPBOX_TOKEN`
* Production CMS token: [/cms/prod/MAPBOX_TOKEN_CMS](https://console.amazonaws-us-gov.com/systems-manager/parameters/%252Fcms%252Fprod%252FMAPBOX_TOKEN_CMS/description?region=us-gov-west-1&tab=Table#list_parameter_filters=Name:Contains:mapbox_token)
    * There is no token for CMS lower environments

Accessing and editing values in the AWS Parameter Store is not a matter that is specific to the Facilities products. Rather, it is available [throughout the VA ecosystem](https://vfs.atlassian.net/wiki/spaces/pilot/pages/1474595172/Store+a+secret+in+Parameter+Store).

### Token Retrieval
##### ❌ Option 1: Load the tokens at run time (not implemented -- also not implemented on any other system) 
Noting this option here because it was discussed in [at least one place](https://vfs.atlassian.net/wiki/spaces/FTT/pages/2139783260/MapboxToken+Conversion+Guide+Proposal+draft) throughout the discovery process. Ultimately, this did not make sense. The option below was much more feasible.

##### ✔️ Option 2: Load the tokens at build time (implemented)
**First, a caveat**: This problem space is interesting because, contrary to what we're likely conditioned to think, our prod token is not sensitive information but our dev token is sensitive. This is because our prod token can be URL restricted while our dev token cannot be.

**Update (2026):** Production tokens are no longer hardcoded in source. All tokens — both dev and prod — are now injected at build time from AWS SSM, with each application receiving its own dedicated token. This resolved the earlier open question about [handling both tokens the same way](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13336).

So, the process by which the tokens are fetched from AWS Parameter Store and ultimately packaged in the browser code is outlined below:

1. **Fetch per-app tokens from AWS Parameter Store** in the CI workflows ([continuous-integration](https://github.com/department-of-veterans-affairs/vets-website/blob/main/.github/workflows/continuous-integration.yml), [build-and-tag](https://github.com/department-of-veterans-affairs/vets-website/blob/main/.github/workflows/build-and-tag.yml), [manual-deploy-dev-staging](https://github.com/department-of-veterans-affairs/vets-website/blob/main/.github/workflows/manual-deploy-dev-staging.yml)):
```yaml
      # Shared fallback (format-valid placeholder that prevents @mapbox/mapbox-sdk from
      # throwing at import time when no real token is available)
      - name: Set Mapbox Token fallback
        run: echo "MAPBOX_TOKEN=pk.eyJ1IjoicGxhY2Vob2xkZXIifQ==" >> "$GITHUB_ENV"

      # Per-app tokens — each fetched from its own SSM parameter
      - name: Get Mapbox Token (Facility Locator)
        uses: ./.github/workflows/inject-secrets
        with:
          ssm_parameter: /dsva-vagov/vets-website/prod/mapbox_token_facility_locator
          env_variable_name: MAPBOX_TOKEN_FACILITY_LOCATOR

      - name: Get Mapbox Token (GI)
        uses: ./.github/workflows/inject-secrets
        with:
          ssm_parameter: /dsva-vagov/vets-website/prod/mapbox_token_gi
          env_variable_name: MAPBOX_TOKEN_GI

      # ... and so on for Static Pages, Ask VA, Caregivers, Representative Search
```

2. **Webpack string-replaces both the shared fallback and every per-app token** ([webpack.config.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/config/webpack.config.js)):
```js
        'process.env.MAPBOX_TOKEN': JSON.stringify(
          process.env.MAPBOX_TOKEN || 'pk.eyJ1IjoicGxhY2Vob2xkZXIifQ==',
        ),
        'process.env.MAPBOX_TOKEN_FACILITY_LOCATOR': JSON.stringify(
          process.env.MAPBOX_TOKEN_FACILITY_LOCATOR,
        ),
        // ... one entry per app
```

3. **Each application has its own `mapboxToken.js`** that prefers its dedicated token and falls back to the shared one:
```js
// src/applications/facility-locator/utils/mapboxToken.js
export const mapboxToken =
  process.env.MAPBOX_TOKEN_FACILITY_LOCATOR || process.env.MAPBOX_TOKEN;
```
All other Mapbox-consuming apps follow the same pattern:
| App | Token module |
| --- | --- |
| Facility Locator | `src/applications/facility-locator/utils/mapboxToken.js` |
| Static Pages | `src/applications/static-pages/facilities/mapboxToken.js` |
| GI Bill | `src/applications/gi/utils/mapboxToken.js` |
| Ask VA | `src/applications/ask-va/utils/mapboxToken.js` |
| Caregivers | `src/applications/caregivers/utils/mapbox/mapboxToken.js` |
| Representative Search | `src/applications/representative-search/utils/mapboxToken.js` |

After Webpack's string replacement, the browser receives the resolved token value directly — no `process.env` reference survives to runtime.

## Facility Locator location search
In Mapbox there are `place_types`, and [their docs](https://docs.mapbox.com/api/search/geocoding-v5/#geographical-feature-types) spell out what each of these means in API terms. We currently (2/2025) limit `place_type` to matches on:

place_type | Mapbox definition
--- | ---
`place` | "Typically these are **cities**, villages, municipalities, etc. They’re usually features used in postal addressing, and are suitable for display in ambient end-user applications where current-location context is needed (for example, in weather displays)."
`region`| "Top-level sub-national administrative features, such as **states in the United States** or provinces in Canada or China."
`postcode`| "Postal codes used in country-specific national addressing systems."
`locality` | "Official sub-city features present in countries where such an additional administrative layer is used in postal addressing, or where such features are commonly referred to in local parlance. Examples include city districts in Brazil and Chile and arrondissements in France."  (Notably does not include LA parishes.)
`country` | "Generally recognized **countries** or, in some cases like Hong Kong, an area of quasi-national administrative status that has a designated country code under ISO 3166-1." Some territories are considered countries like Guam and Puerto Rico. We support the return of these locations and a few others where the VA has facilities (e.g. Philippines)


### Previous discovery / notes
- [March 2022: Mapbox Predictive Search Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/discovery/predictive-geolocation-discovery.md)
- [Questions & Answers about Mapbox (as of February 2020)](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/facility-locator/engineering/archive/mapbox-info.md)
- Recently (3/2025) we added an alternative the the predictive search with an autosuggest field in the map view of the Facility Locator. Though this enables the Mapbox predictive search capacity in a text input, it is constructed differently than the predictive search method that was initially researched. The predictive search method requried that the field go through entire redux state and resolve before returning results. Unfortunately it was unresponsive and not functional to indicate feedback to the users. The alternative Autosuggest field also laid the framework for the Services Autosuggest. 

## Temporary Geocoding usage/cost (Q1 2025)
Historically, the Facility Locator uses the Temporary Geocoding API for address lookup but we have not historically used the autosuggest feature. 

In Q1 2025, location autosuggest was enabled ([#20241](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20241)). This will increase the Temporary Geocoding API usage by 5-7x previous usage levels, as we will send calls for user-typed data as they type, in order to return address suggestions. 

### PRICING
We have not currently locked in a pricing agreement for this increased usage, due to upcoming Sitewide end of period of performance, 3/31/2025. However: on the new Sitewide contract on SPRUCE, it would be advantageous to lock in pricing with Mapbox. Information from Mapbox sales / account rep:

> Q: 1. If we lock in for an annual commitment, for example, at 7.5MM calls, and we get additional traffic, is everything over the annual commitment billed at a per-call rate as we do today?
> 
> A: Yes, this would be processed through signing an annual contract via our Account Management team. I'm happy to assist with this whenever your timeline permits.
> The locked-in rates will be included in Exhibit A of the order form. We also offer an option to add credit to the annual agreement or early renewal to accommodate any additional growth.

> Q: 2. If we lock in for 7.5MM calls, and find we are consistently over that, is it possible to adjust the annual commitment for our baseline?
> 
> A. The early renewal process can be used to address this. If you sign a multi-year agreement, we can also add top-up credit to each year in case the initial estimate proves to be too low.

Options to pursue on new contract:
1. Lock in an annual rate with Mapbox.
2. See if VA can assume the Mapbox expense. (Through DOTS/Okta? Not sure.)

## Non-Sitewide Products That Use Mapbox

### Ask VA

As of 1/3/2025, this application is not yet in production.

- **Entry**: http://staging.va.gov/contact-us/ask-va-too
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ask-va
- **API usage**: Geocoding V5

This application has a search box for entering a (city, state) or zip code. It is used in two different flows: one for finding VA facilities and the other for finding educational institutions. This tool has a "Use my location" feature and uses both forward and reverse geocoding for parsing Mapbox results. No Mapbox map is rendered in this tool.

### Caregivers

- **Entry**: https://va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/introduction
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ask-va
- **API usage**: Geocoding V5

This application has a search box for entering a (city, state) or zip code to get the nearest VA facilities for Veterans needing care. This tool does not have a "Use my location" feature, so only forward geocoding is used when performing the search. No Mapbox map is rendered in this tool.

### GI

- **Entry**: https://va.gov/education/gi-bill-comparison-tool
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/gi
- **API usage**: Geocoding V5, Map Loads for Web

On its "Search by location tab," this application has a search box for entering a (city, state) or zip code and renders a map after searches are performed. This tool has a "Use my location" feature and uses both forward and reverse geocoding for parsing Mapbox results.


### Representative Search

- **Entry**: https://va.gov/get-help-from-accredited-representative/find-rep
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/representative-search
- **API usage**: Geocoding V5

This application has a search form for accredited VSO representatives, attorneys and claims agents. You can enter a full address with a (city, state) or a zip code. This tool has a "Use my location" feature and uses both forward and reverse geocoding for parsing Mapbox results.
