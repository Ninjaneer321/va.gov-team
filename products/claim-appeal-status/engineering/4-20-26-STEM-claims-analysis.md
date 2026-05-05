# How STEM and Education Claims Reach the Claim Status Tool

## Summary

This document answers two questions the team has been asking:

1. CST has a STEM-specific component (`StemClaimListItem`) and related code. Are STEM scholarship applications (Form 22-10203) still visible to Veterans anywhere in the Claim Status Tool, and is that STEM component actually in use?
2. A Datadog dashboard for CST shows roughly 700 claim-detail views per six months tagged `claim_type = "Education"` with EP codes 940 or 950. Where are those coming from?

Short answer to both: yes, STEM scholarship claims are still visible in CST, and those are the "Education" rows in Datadog. They render today as generic Education claim cards, not as STEM cards, because the STEM-specific render path has been unreachable in production since a vets-api cleanup on 2025-04-21.

The confusion comes from the fact that a single STEM claim is handled by CST in two different ways at two different points in its life:

- Before a regional processing center finishes reviewing the submission, the claim lives only in vets-api tables. CST once had a code path to show a "denied" card for this stage, via a dedicated endpoint, but that path was never meaningfully active for production users (see Stage 2 below) and has been fully unreachable since April 2025.
- After the regional processing center finishes reviewing it, BGS creates an End Product (EP) work product — either EP 940 ("Original STEM Scholarship") or EP 950 ("Supplemental STEM Scholarship"). Lighthouse surfaces it, vets-api passes it through, and CST renders it as a generic Education claim card. This path is alive and is what produces the Datadog rows.

The rest of this doc walks through each path in code.

## Stage 1 — Submission: vets-api saves the form and uploads it to a processing center each night

At this stage, the claim exists only inside vets-api's own database tables. Once a night, a scheduled job bundles all the new submissions into a single file and uploads that file to a server at a regional education processing center, where VA staff review it. The claim has not been entered into BGS — the VA's official system of record for active claims — so the Claim Status Tool has no way to look it up yet. (Lighthouse Benefits Claims, the API that CST reads from, only returns claims that exist in BGS.)

### The controller that receives a 22-10203

```ruby
# vets-api/app/controllers/v0/education_benefits_claims_controller.rb:9-31
def create
  claim = SavedClaim::EducationBenefits.form_class(form_type).new(education_benefits_claim_params)
  raise Common::Exceptions::Unauthorized if claim.requires_authenticated_user? && !@current_user

  claim.user_account = @current_user&.user_account
  claim.delete_date = Time.zone.now + claim.retention_period if claim.retention_period

  unless claim.save
    StatsD.increment("#{stats_key('create')}.failure")
    raise Common::Exceptions::ValidationErrors, claim
  end

  Rails.logger.info "ClaimID=#{claim.id} RPO=#{claim.education_benefits_claim.region} Form=#{form_type}"
  claim.after_submit(@current_user)
  clear_saved_form(claim.in_progress_form_id)
  render json: EducationBenefitsClaimSerializer.new(claim.education_benefits_claim)
end
```

What this does: When the Veteran submits a 22-10203 through the edu-benefits application, vets-api saves it to two database tables — one for the form data, one for an "automated decision" record that tracks whether the backend has finished reviewing it. No BGS work product is created here.

### The nightly job that bundles forms and uploads them to a processing center

```ruby
# vets-api/app/sidekiq/education_form/create_daily_spool_files.rb:14-22
class CreateDailySpoolFiles
  MAX_RETRIES = 5
  WINDOWS_NOTEPAD_LINEBREAK = "\r\n"
  STATSD_KEY = 'worker.education_benefits_claim'
  STATSD_FAILURE_METRIC = "#{STATSD_KEY}.failed_spool_file".freeze
  LIVE_FORM_TYPES = %w[1990 1995 5490 5495 0993 0994 10203 10297].map do |t|
    "22-#{t.upcase}"
  end.freeze
```

What this does: Each night, vets-api gathers all the new 22-10203 submissions (you can see `10203` in the `LIVE_FORM_TYPES` list), groups them by region, and writes one batch file per regional processing office. The job then uploads each file to the matching processing center's server, where VA staff review the applications in their own internal tools. When a STEM scholarship is approved downstream of that review, a matching work product gets created in BGS. That BGS work product is what eventually reaches CST through Lighthouse — see Stage 3 below. (The exact mechanism that creates the BGS record sits outside of vets-api and outside the scope of this doc.)

## Stage 2 — Pre-decision status: the STEM render path that is now unreachable

This is the code that was designed to tell Veterans "your STEM application has been automatically denied" before the regional processing center got involved. Two compounding reasons mean it does not run for production users today:

1. The Sidekiq job that moves a STEM submission into the `DENIED` state only does so in non-production environments (shown in the snippet below). So even historically, production records sat in `INIT` or `PROCESSED` — never `DENIED` — and the frontend only rendered denials. Production users have not seen a STEM card from this path for a long time.
2. On 2025-04-21, vets-api [PR #21548](https://github.com/department-of-veterans-affairs/vets-api/pull/21548) ("VBET-1393 - remove VSOSearch code and update/remove tests") removed the `stem_automated_decision` entry from `config/features.yml` as part of a broader EVSS decommission. That deletion made the frontend's feature-flag lookup permanently return a falsy value, so the render path is now unreachable regardless of what data the endpoint returns.

None of the frontend STEM code was intentionally retired. The components, the action, the reducer slice, and the route all still exist in the vets-website repo — they are just no longer reachable.

### Why production rarely (if ever) took the DENIED branch in the first place

```ruby
# vets-api/app/sidekiq/education_form/process10203_submissions.rb:122-132
def process_submission(submission, user_has_poa)
  remaining_entitlement = submission.education_stem_automated_decision&.remaining_entitlement
  status = if Settings.vsp_environment != 'production' && more_than_six_months?(remaining_entitlement)
             EducationStemAutomatedDecision::DENIED
           else
             EducationStemAutomatedDecision::PROCESSED
           end
  update_automated_decision(submission, status, user_has_poa)
end
```

What this does: The automated-decision Sidekiq job only assigns the `DENIED` state outside production. In production, every submission is marked `PROCESSED`. Because the frontend filter for STEM cards only admits denied records, the card was effectively invisible in production even before the April 2025 cleanup.

### The read endpoint that CST still hits on every page load

```ruby
# vets-api/app/controllers/v0/education_benefits_claims_controller.rb:33-38
def stem_claim_status
  current_applications = []
  current_applications = user_stem_automated_decision_claims unless @current_user.nil?
  render json: EducationStemClaimStatusSerializer.new(current_applications)
end
```

What this does: This endpoint is still alive and is still called every time a Veteran opens the CST claims list. It returns whatever STEM "automated decision" records exist for that Veteran. Because production never sets records to `DENIED` (see the Sidekiq snippet above), and because the frontend filters for denials, the response is effectively inert regardless of what it returns.

### The frontend action that calls the endpoint

```js
// vets-website/src/applications/claims-status/actions/index.js:596-632
// We don't want to show STEM claims unless they were automatically denied
const automatedDenial = stemClaim => stemClaim.attributes.automatedDenial;

export function getStemClaims() {
  return dispatch => {
    dispatch({ type: FETCH_STEM_CLAIMS_PENDING });
    if (canUseMocks()) {
      return getStemClaimsMock(dispatch);
    }
    return makeAuthRequest(
      '/v0/education_benefits_claims/stem_claim_status',
      null,
      dispatch,
      res => {
        const stemClaims = res.data.map(addAttributes).filter(automatedDenial);
        dispatch({
          type: FETCH_STEM_CLAIMS_SUCCESS,
          stemClaims,
        });
      },
      () => dispatch({ type: FETCH_STEM_CLAIMS_ERROR }),
    );
  };
}
```

What this does: CST fires this request on every claims-list page load. The `automatedDenial` filter ensures the only rows that would ever reach the render layer are denials — a state production records never enter, as shown in the Sidekiq snippet above.

### The feature-flag check that now always evaluates to empty

```jsx
// vets-website/src/applications/claims-status/containers/YourClaimsPageV2.jsx:386-397
const stemAutomatedDecision = toggleValues(state)[
  FEATURE_FLAG_NAMES.stemAutomatedDecision
];
...
const stemClaims = stemAutomatedDecision ? claimsV2Root.stemClaims : [];
```

What this does: CST reads a feature flag called `stemAutomatedDecision`. On 2025-04-21, vets-api PR #21548 deleted that flag from `config/features.yml` as part of a broader EVSS/VSOSearch cleanup. With no backing flag, the lookup resolves to a falsy value and this expression collapses to an empty list. Everything downstream that tries to render STEM cards receives nothing to render.

### The render branch that would have shown the STEM card

```jsx
// vets-website/src/applications/claims-status/containers/YourClaimsPageV2.jsx:134-151
renderListItem(claim) {
  const sanitizedClaim = withClaimStatusMetaIfEnabled(
    claim,
    this.props.cstChampvaCustomContentEnabled,
  );

  if (appealTypes.includes(claim.type)) {
    const { fullName } = this.props;
    return <AppealListItem key={claim.id} appeal={claim} name={fullName} />;
  }

  if (claim.type === 'education_benefits_claims') {
    return <StemClaimListItem key={claim.id} claim={claim} />;
  }

  return <ClaimsListItem key={sanitizedClaim.id} claim={sanitizedClaim} />;
}
```

What this does: The STEM card only renders for items whose `type` is `education_benefits_claims`, which is only true for items from the retired STEM endpoint above. Because that endpoint never returns data in production, this branch is never taken. Anything else (including STEM scholarship claims that come through Lighthouse — see Stage 3) falls through to the generic `ClaimsListItem`.

## Stage 3 — After processing: the BGS work product reaches CST through Lighthouse

This is the stage the Veteran actually sees today, and it is the source of the "Education" rows in the Datadog dashboard.

Reference context (from the team's claim-type spreadsheet):

- EP code 940, claim type code `940OSTEM`, claim type "Education", label "Original STEM Scholarship" — 347 detail-page hits in the last six months.
- EP code 950, claim type code `950SSTEM`, claim type "Education", label "Supplemental STEM Scholarship" — 353 detail-page hits in the last six months.

### How vets-api fetches the claim list from Lighthouse

```ruby
# vets-api/lib/lighthouse/benefits_claims/service.rb:43-57
def get_claims(lighthouse_client_id = nil, lighthouse_rsa_key_path = nil, options = {})
  response = config.get("#{@icn}/claims", lighthouse_client_id, lighthouse_rsa_key_path, options)
  claims = response.body

  validate_response_data!(claims, response, 'get_claims', Array)

  claims['data'] = filter_by_status(claims['data'])
  claims['data'] = apply_configured_ep_filters(claims['data'])

  claims
rescue Faraday::TimeoutError
  raise BenefitsClaims::ServiceException.new({ status: 504 }), 'Lighthouse Error'
rescue Faraday::ClientError, Faraday::ServerError => e
  raise BenefitsClaims::ServiceException.new(e.response), 'Lighthouse Error'
end
```

What this does: vets-api calls Lighthouse Benefits Claims for every claim the Veteran has, including STEM work products with EP codes 940 and 950. Lighthouse pulls the list from BGS, the VA's system of record for active claims. Two filters run: one drops claims in certain pending statuses, the other drops claims whose EP code is on a configured deny list.

### The configurable EP-code filter, and why STEM codes are not on it

```ruby
# vets-api/lib/lighthouse/benefits_claims/service.rb:17-25
# #90936 - according to the research done here,
# the 960 and 290 EP Codes were flagged as a claim groups that
# should be filtered out before they are sent to VA.gov and Mobile
EP_CODE_FILTER_FLAGS = {
  '960' => :cst_filter_ep_960,
  '290' => :cst_filter_ep_290
}.freeze
```

What this does: Today, only EP codes 960 and 290 can be filtered out, and even those are gated behind feature flags. EP codes 940 and 950 are not listed, so STEM scholarship work products always pass through to CST.

### The controller that passes Lighthouse data through unchanged and logs it

```ruby
# vets-api/app/controllers/v0/benefits_claims_controller.rb:66-85
update_claim_type_language(claim['data'])
...
# We want to log some details about claim type patterns to track in DataDog
log_claim_details(claim['data']['attributes'])

tap_claims([claim['data']])
report_evidence_submission_metrics('show', evidence_submissions)
render json: claim
```

```ruby
# vets-api/app/controllers/v0/benefits_claims_controller.rb:271-284
def log_claim_details(claim_info)
  ::Rails.logger.info('Claim Type Details',
                      { message_type: 'lh.cst.claim_types',
                        claim_type: claim_info['claimType'],
                        claim_type_code: claim_info['claimTypeCode'],
                        num_contentions: claim_info['contentions'].count,
                        ep_code: claim_info['endProductCode'],
                        current_phase_back: claim_info['claimPhaseDates']['currentPhaseBack'],
                        latest_phase_type: claim_info['claimPhaseDates']['latestPhaseType'],
                        decision_letter_sent: claim_info['decisionLetterSent'],
                        development_letter_sent: claim_info['developmentLetterSent'],
                        claim_id: params[:id] })
  log_evidence_requests(params[:id], claim_info)
end
```

What this does: Every time CST opens a claim detail page, vets-api writes a log line titled "Claim Type Details" with the claim's `claim_type` ("Education"), `claim_type_code` (`940OSTEM` or `950SSTEM`), and `ep_code` (940 or 950). Those fields come straight from Lighthouse — vets-api does not rename or relabel them for Education claims. This log is what the Datadog dashboard is counting. Important detail: the log emits from the vets-api Rails server, not from the CST frontend. The frontend itself does not emit any Datadog log with claim metadata (a grep of `src/applications/claims-status/` for this log message and for custom Datadog actions returns no hits). So the "claim_type" label you see in Datadog is the string vets-api received from Lighthouse, not anything the CST UI decided.

### The CST action that requests the list of claims

```js
// vets-website/src/applications/claims-status/actions/index.js:225-247
export const getClaims = () => {
  return dispatch => {
    const startTimeMillis = Date.now();
    dispatch({ type: FETCH_CLAIMS_PENDING });

    return apiRequest('/benefits_claims')
      .then(res => {
        recordClaimsAPIEvent({
          startTime: startTimeMillis,
          success: true,
        });
        dispatch(fetchClaimsSuccess(res.data));
      })
      .catch(error => {
        const errorCode = getErrorStatus(error);
        if (errorCode && errorCode !== UNKNOWN_STATUS) {
          Sentry.withScope(scope => {
            scope.setFingerprint(['{{default}}', errorCode]);
            Sentry.captureException(
              `lighthouse_claims_err_get_claims ${errorCode}`,
            );
          });
        }
```

What this does: CST asks vets-api for the Veteran's claims. The response includes every work product Lighthouse returned, including STEM scholarship claims with EP 940/950.

### The generic card that actually renders a STEM scholarship claim today

```jsx
// vets-website/src/applications/claims-status/components/ClaimsListItem.jsx:55-102
export default function ClaimsListItem({ claim }) {
  const {
    claimDate,
    claimPhaseDates,
    claimTypeCode,
    claimStatusMeta,
    decisionLetterSent,
    documentsNeeded,
    status,
    evidenceSubmissions = [],
  } = claim.attributes || {};
  ...
  const cardTitle = listCardMeta.title || generateClaimTitle(claim);
  const receivedLabel = listCardMeta.receivedLabel || 'Received on';
  ...
  const href = provider
    ? `/your-claims/${claim.id}/status?type=${provider}`
    : `/your-claims/${claim.id}/status`;
```

What this does: When CST lists claims, anything coming from Lighthouse has `type: "claim"`, so the STEM render branch from Stage 2 never triggers. The item renders as a generic claim card. There is no code anywhere in CST that recognizes `940OSTEM` or `950SSTEM` as STEM scholarship codes, so the card has no STEM-specific title, phases, or copy — it uses whatever `generateClaimTitle` produces for a generic "Education" claim.

### A note on EP 405

EP 405 also shows up in the Datadog dashboard as `claim_type = "Education"`. It is not in the claim-type mapping we have from the spreadsheet, so we cannot confirm whether 405 is a STEM scholarship work product, a different Education benefit, or something else. The path into CST is identical to 940/950 — Lighthouse returns it, vets-api passes it through, the generic card renders it.

## What the Veteran sees, end to end

- The Veteran submits Form 22-10203 in the edu-benefits application.
- Nothing appears in CST yet. The STEM pre-decision render path exists in the code but is unreachable in production, so there is no status for CST to show while the regional processing center is reviewing the form.
- After the processing center completes its review, BGS creates an EP 940 (Original STEM) or EP 950 (Supplemental STEM) work product.
- On the Veteran's next CST visit, a generic "Education" claim card appears in the list. The title does not say "STEM Scholarship" because CST has no mapping for `940OSTEM` or `950SSTEM`.
- Clicking the card opens a generic detail page backed by the Lighthouse Benefits Claims detail endpoint. That detail request is what produces the `Claim Type Details` log in Datadog.

## Conclusion

The two things the team has been calling separate pipelines are really the same STEM claim at two stages of its life:

- Pre-decision: the STEM render path is unreachable. Production records never enter the denial state the frontend was built to display, and the `stem_automated_decision` feature flag was removed from vets-api on 2025-04-21, gating the path off even if data ever did come through. The frontend code (component, action, reducer slice, route) is still present in the repo but runs for no one. Removing it is safe cleanup; it will not change what Veterans see and will not change the Datadog numbers.
- Post-decision: the "Education" rows in Datadog are live traffic. Each row is a real STEM scholarship work product coming from BGS through Lighthouse, rendered today as a generic Education claim because CST has no STEM-specific display logic for EP 940/950 or claim type codes `940OSTEM` / `950SSTEM`.

Open question for the product team: should CST continue to display STEM scholarship claims as generic "Education" claims, or should it identify them specifically? Two viable directions:

- Filter them out upstream by adding `940` and `950` to `EP_CODE_FILTER_FLAGS` in `lib/lighthouse/benefits_claims/service.rb` behind new Flipper flags, mirroring the existing pattern for 960 and 290. This would hide STEM work products from CST entirely.
- Keep them visible and label them correctly, by adding `940OSTEM` and `950SSTEM` to the frontend's claim-type-code mapping so the card title, phases, and copy reflect STEM Scholarship status rather than a generic "Education" claim.

Either direction is a product decision, not a frontend-only decision.
