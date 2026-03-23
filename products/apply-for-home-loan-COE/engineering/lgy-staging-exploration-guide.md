# LGY Service Exploration via Argo CD Staging Console

## Overview

This guide walks you through exploring the LGY (Loan Guaranty) service from a staging Rails console via Argo CD. The goal is to build confidence that our code accurately handles the real responses from the LGY service, and to produce artifacts that the whole team can use.

### What we're trying to accomplish

The COE form rebuild depends on understanding what the LGY service actually returns. Right now, our VCR cassettes are from December 2021, fabricated with `fake_url.com` and hand-crafted data. We don't know if they reflect reality. The `coe_status` method has 7 branching paths, and we need to be confident that we're handling each one correctly.

By sweeping staging test users against the real LGY service, we can:

1. **Prove which response shapes the service actually returns.** For each `coe_status` branch (ELIGIBLE, DENIED, PENDING, etc.), find at least one real example. This gives us ground truth: "on this date, the LGY service returned exactly this for this user."

2. **Replace fabricated test data with real recordings.** VCR cassettes and betamocks responses derived from real service calls are a much stronger foundation than someone's best guess from 4 years ago. Once recorded, these are deterministic; tests and local dev run against the snapshot, not the live service.

3. **Document every response we find.** Even responses we don't immediately need for cassettes are valuable. A table mapping staging users to their LGY statuses becomes a reference for the whole team:
   - **PMs** can see which test users produce which scenarios without needing to spin up an environment
   - **FE developers** can see real response shapes to build their mock data against
   - **BE developers** can verify their code handles every observed response correctly

4. **Identify gaps.** If we sweep all available test users and never see a `NOT_ELIGIBLE` response, that's important to know. It means we either need to ask the LGY team to set up that test data, or we're working with an untested branch.

### Caveat

Staging data is hand-crafted by the LGY SQA team and can change without notice. The documentation we produce is a snapshot: "as of [date], these users returned these responses." It may drift over time, but it's still far more useful than having no documentation at all. When it does drift, re-running the sweep updates the picture.

### Why this matters for developer confidence

Our developers work with external services they can't directly observe from their local machines. The code that integrates with LGY "works," but when it comes time to change it, nobody is confident about what the service actually returns, what fields matter, or what error shapes to expect. This exploration replaces uncertainty with evidence.

**Good news:** `LGY::Service` takes `edipi:` and `icn:` directly in the constructor. No User object needed. This makes it the simplest service to explore.

**Time estimate:** 1-2 hours for initial exploration.

---

## 1. Getting Into the Console

1. Insert PIV card
2. Open Argo CD in browser (staging instance)
3. Find the `vets-api-web` deployment in the staging namespace
4. Open a terminal on one of the pods
5. Run `bundle exec rails c`

**Quick sanity checks once you're in:**

```ruby
# Confirm environment (will say "production" -- this is a known quirk,
# the pod is actually staging, confirmable via Datadog tags showing eks-staging)
Rails.env

# Confirm LGY is NOT mocked (should return false or nil)
# If true, betamocks will intercept calls and return canned responses
Settings.lgy.mock_coe

# Confirm the LGY class is available
LGY::Service
```

**Notes:**
- The console runs under `console1984` auditing. You may see occasional "Forbidden command attempted" warnings. These generally do not block the workflow.
- Copy-paste out of the Argo console is clunky. Work in small chunks rather than trying to copy large outputs.

---

## 2. Your First LGY Call

```ruby
service = LGY::Service.new(edipi: '1005127153', icn: '1012667145V762142')
response = service.get_determination
puts response.status
puts response.body
```

These identifiers were confirmed working against VA Profile and Lighthouse on 3/19, but LGY staging data is separate. If you get a 404 or error, that is useful data. Note it and try other users (see Section 7).

**What to observe:**
- HTTP status code
- Response body structure: `reference_number`, `status`, `determination_date`
- Whether this user exists in LGY's staging system at all

---

## 3. Exploring Each Endpoint

### 3a. get_determination

Returns the veteran's COE eligibility determination.

```ruby
service = LGY::Service.new(edipi: 'THE_EDIPI', icn: 'THE_ICN')
det = service.get_determination
puts det.status   # HTTP status
puts det.body     # Hash with reference_number, status, determination_date
```

Known `status` values: `ELIGIBLE`, `NOT_ELIGIBLE`, `PENDING`, `UNABLE_TO_DETERMINE_AUTOMATICALLY`

The `determination_date` field is epoch milliseconds (not seconds). To convert: `Time.at(det.body['determination_date'] / 1000)`.

### 3b. get_application

Returns the veteran's COE application, or 404 if none exists.

```ruby
app = service.get_application
puts app.status  # 200 or 404
puts app.body    # Hash with id, create_date, status, veteran info, loans, service periods
```

**Important:** The method rescues 404 errors and returns the error object directly (not nil). So `app.status` will be 404 as an integer, and `app.body` will contain the error structure. The `coe_status` method relies on checking `.status == 404`.

Known application `status` values: `SUBMITTED`, `RETURNED`

A 200 response contains rich data: `id`, `create_date`, `status`, `veteran` (name, address, contact info), `relevant_prior_loans`, `periods_of_service`. This is the data contract you're rebuilding.

### 3c. coe_status (the combination method)

**Call `get_determination` and `get_application` separately first** to see the raw responses. Then try:

```ruby
service.coe_status
```

This combines both endpoints using the branching logic described in Section 4. See what it returns for your test user.

**Memoization note:** Both `get_determination` and `get_application` use `||=` caching. If you want to test a different user, create a new service instance:

```ruby
service2 = LGY::Service.new(edipi: 'OTHER_EDIPI', icn: 'OTHER_ICN')
```

> **Note (2026-03-22):** Not explicitly called during the 3/22 exploration session. `coe_status` values in the reference table (Section 9) were derived from determination + application results rather than a direct call. Can be verified locally against the branching logic in Section 4.

### 3d. get_coe_documents

```ruby
docs = service.get_coe_documents
puts docs.body  # Array of document metadata: id, create_date, description, document_type
```

> **Note (2026-03-22):** Not called -- no staging users with documents were found in the sweep. Blocked until LGY SQA sets up a user with document history.

### 3e. get_coe_file

Returns the actual COE PDF as binary (octet-stream). Returns 404 if no COE available.

```ruby
coe = service.get_coe_file
puts coe.status  # 200 or 404
```

Not useful to inspect raw binary in console; just check the status code.

> **Note (2026-03-22):** Not called -- same gap as 3d. Blocked until LGY SQA sets up a user with a COE file.

### 3f. get_document(id)

Downloads a specific document by ID. First validates the ID exists in the user's document list (security check).

```ruby
docs = service.get_coe_documents
doc_id = docs.body.first['id'].to_s  # get an ID from the list
file = service.get_document(doc_id)
puts file.status
```

> **Note (2026-03-22):** Not called -- requires a document ID, blocked by the same gap as 3d/3e.

---

## 4. The coe_status Branching Logic

This is the core of the COE status page. The `coe_status` method in `lib/lgy/service.rb` combines `get_determination` and `get_application` results. Conditions are checked in this order (first match wins):

| # | determination.status | application | coe_status returns | Meaning |
|---|---|---|---|---|
| 1 | ELIGIBLE | 404 (no app) | `ELIGIBLE` | Eligible, hasn't applied yet |
| 2 | UNABLE_TO_DETERMINE_AUTOMATICALLY | (any) | `UNABLE_TO_DETERMINE_AUTOMATICALLY` | Needs manual review |
| 3 | ELIGIBLE | 200 | `AVAILABLE` | COE generated, application exists |
| 4 | NOT_ELIGIBLE | (any) | `DENIED` | Not eligible |
| 5 | PENDING | 404 | `PENDING` | Pending, no application (LGY says shouldn't happen, but SQA data has it) |
| 6 | PENDING | SUBMITTED | `PENDING` | Application submitted, awaiting determination |
| 7 | PENDING | RETURNED | `PENDING_UPLOAD` | Application returned, needs document upload |
| -- | (anything else) | (anything else) | `nil` (logs Sentry error) | Unexpected combination |

**Things to watch for:**
- Condition #2 checks `UNABLE_TO_DETERMINE_AUTOMATICALLY` before condition #3 (ELIGIBLE + 200), so it takes priority
- The `else` branch logs to Sentry with the unexpected statuses. If you hit this, you've found a new state.
- The comment in the code says "Kelli said we'll never have a pending status w/o an application, but LGY sqa data is getting hand crafted." This was written in 2021.

---

## 5. Finding Test Users with LGY Data

LGY staging (SQA) data is hand-crafted. Not every veteran with a valid EDIPI/ICN will have LGY data. Discovery is part of the work.

### Strategy 1: Try known EDIPIs

Start with these (confirmed working in other staging services on 3/19):

| EDIPI | ICN | Source |
|---|---|---|
| `1005127153` | `1012667145V762142` | VA Profile: V1 confirmed. Lighthouse: confirmed. |
| `1013590059` | `1008709396V637156` | vetsgovuser228 mock user. VA Profile: 200 (nil title38). |

### Strategy 2: Build EDIPI/ICN pairs from mock credentials

This parses the mock credential files and MPI profiles to build a list of user pairs, then prints them so you can see what's available.

```ruby
user_pairs = []

Dir.glob("#{Settings.betamocks.cache_dir}/credentials/idme/vetsgovuser*.json").sort.each do |f|
  cred = JSON.parse(File.read(f))
  mpi_path = "#{Settings.betamocks.cache_dir}/mvi/profile_idme_uuid/#{cred['uuid']}.yml"
  next unless File.exist?(mpi_path)

  mpi_data = File.read(mpi_path)
  icn = mpi_data.match(/extension="(\d+V\d+)\^NI\^200M/)&.captures&.first
  edipi = mpi_data.match(/extension="(\d+)\^NI\^200DOD/)&.captures&.first
  next unless edipi && icn

  user_pairs << { name: File.basename(f, '.json'), edipi: edipi, icn: icn }
  puts "#{File.basename(f)}: EDIPI=#{edipi}, ICN=#{icn}"
end

puts "Found #{user_pairs.size} users with EDIPI + ICN"
```

### Strategy 3: Sweep users against LGY

Uses the `user_pairs` from Strategy 2:

```ruby
results = []

user_pairs.each do |pair|
  service = LGY::Service.new(edipi: pair[:edipi], icn: pair[:icn])
  begin
    det = service.get_determination
    results << pair.merge(status: det.body['status'])
    puts "#{pair[:name]} (#{pair[:edipi]}): determination=#{det.body['status']}"
  rescue => e
    results << pair.merge(status: "ERROR: #{e.class}")
    puts "#{pair[:name]} (#{pair[:edipi]}): #{e.class} #{e.message[0..80]}"
  end
end

# Filter to users that have LGY data
lgy_users = results.select { |r| !r[:status].start_with?('ERROR') }
puts "\n#{lgy_users.size} users with LGY data:"
lgy_users.each { |u| puts "  #{u[:name]}: EDIPI=#{u[:edipi]}, ICN=#{u[:icn]}, status=#{u[:status]}" }
```

Document which users have data and what statuses they return. This becomes the team's reference for LGY staging users.

### Strategy 4b: Inspect full get_application response for a specific user

Use a PENDING + SUBMITTED user (user14) to capture the full application response shape -- veteran info, loans, service periods. This is the data contract the COE rebuild depends on.

```ruby
service = LGY::Service.new(edipi: '1007451748', icn: '1008709435V263289')
app = service.get_application
puts app.status
pp app.body
```

Paste the output below under "get_application 200 response shape."

### Strategy 4: Sweep lgy_users for application status

Requires `lgy_users` from Strategy 3. Calls `get_application` on each user and prints the HTTP status and, for 200 responses, the application `status` field. Paste this after the Strategy 3 sweep is complete.

```ruby
app_results = lgy_users.map do |pair|
  service = LGY::Service.new(edipi: pair[:edipi], icn: pair[:icn])
  begin
    app = service.get_application
    if app.status == 404
      puts "#{pair[:name]} (#{pair[:edipi]}): app=404 (no application)"
      pair.merge(app_status: 404, app_application_status: nil)
    else
      puts "#{pair[:name]} (#{pair[:edipi]}): app=200 status=#{app.body['status']}"
      pair.merge(app_status: 200, app_application_status: app.body['status'])
    end
  rescue => e
    puts "#{pair[:name]} (#{pair[:edipi]}): ERROR #{e.class} #{e.message[0..80]}"
    pair.merge(app_status: "ERROR: #{e.class}", app_application_status: nil)
  end
end
```

Paste the output here and update the `application` and `coe_status` columns in the user reference table (Section 9).

---

## 6. Recording VCR Cassettes

Once you find users with interesting data, you can record cassettes to replace the fabricated 2021 ones.

### Setup (run once per console session)

```ruby
require 'vcr'
require 'webmock'

VCR.configure do |c|
  c.cassette_library_dir = '/tmp/vcr_cassettes'
  c.hook_into :webmock
  c.allow_http_connections_when_no_cassette = true
end
```

**Safety note:** WebMock monkey-patches Net::HTTP in the console process only. It cannot affect the Puma web server serving staging traffic (separate process).

### Record a cassette

```ruby
VCR.use_cassette('lgy/determination_eligible_staging', record: :all) do
  service = LGY::Service.new(edipi: 'THE_EDIPI', icn: 'THE_ICN')
  response = service.get_determination
  puts response.body
end
```

### Read and copy

```ruby
puts File.read('/tmp/vcr_cassettes/lgy/determination_eligible_staging.yml')
```

Copy-paste the YAML output from the console into a local file at `spec/support/vcr_cassettes/lgy/`.

### Sanitize before committing

The cassette will contain real values that must be replaced:
- `Settings.lgy.api_key` -> `fake_api_key`
- `Settings.lgy.app_id` -> `fake_app_id`
- Real LGY base URL -> `https://fake_url.com`
- Any PII (EDIPI, ICN, SSN, names) -> test values matching existing cassette conventions

---

## 7. Cassettes Worth Capturing

Organized by `coe_status` branches:

- [x] `determination_eligible.yml` -- status ELIGIBLE (vetsgovuser198, captured 2026-03-22, needs sanitization)
- [ ] `determination_not_eligible.yml` -- status NOT_ELIGIBLE (**GAP: no staging user found**)
- [x] `determination_pending.yml` -- status PENDING (vetsgovuser14, captured 2026-03-22, needs sanitization)
- [x] `determination_unable_to_determine.yml` -- status UNABLE_TO_DETERMINE_AUTOMATICALLY (vetsgovuser1, captured 2026-03-22, needs sanitization)
- [x] `application_not_found.yml` -- 404 response (vetsgovuser198, captured 2026-03-22, needs sanitization)
- [x] `application_200_status_submitted.yml` -- application with SUBMITTED status (vetsgovuser14, captured 2026-03-22, needs sanitization)
- [ ] `application_200_status_returned.yml` -- application with RETURNED status (**GAP: no staging user found**)
- [ ] `documents_list.yml` -- document list for a user with documents (**GAP: no staging user with documents found**)
- [ ] `documents_coe_file.yml` -- successful COE PDF download (200) (**GAP**)
- [ ] `documents_coe_file_not_found.yml` -- no COE file (404) (**GAP**)

5 of 10 cassettes captured. Remaining 5 require LGY SQA test data. All captured cassettes need sanitization before committing (see Section 6 sanitization checklist).

---

## 8. Tips and Troubleshooting

**New service instance per user.** Due to memoization (`@get_determination ||=`, `@get_application ||=`), always create a fresh `LGY::Service.new(...)` when switching users.

**Breakers circuit breaker.** The Faraday connection uses `:breakers`. If LGY staging returns repeated 5xx errors, the circuit breaker may trip and start short-circuiting requests. If this happens, wait a few minutes.

**Response parsing.** The LGY Faraday stack includes `faraday.response :json` and `faraday.response :snakecase`. Response bodies come back as parsed Ruby hashes with snake_case keys (e.g., `determination_date` from LGY's `determinationDate`).

**Timestamps.** LGY returns epoch milliseconds. Divide by 1000 for Ruby: `Time.at(value / 1000)`.

**404 handling in get_application.** The method rescues `ClientError` with status 404 and returns the error object. `coe_status` checks `.status == 404` on this. This is intentional, not a bug.

---

## 9. After Exploration

### Document all findings

See [LGY Staging Exploration Findings](lgy-staging-exploration-findings.md) for the full user reference table, response shapes, gap analysis, and cassette status from the 2026-03-22 session.

### Record and replace cassettes

For each `coe_status` branch where you found a real example:
1. Record a VCR cassette (Section 6)
2. Sanitize sensitive data (Section 6)
3. Replace the corresponding fabricated 2021 cassette in `spec/support/vcr_cassettes/lgy/`
4. Convert to betamocks format for local dev mocks (extract response status, headers, body)

### Share with the team

- Post the user reference table from the findings doc somewhere the team can access it
- Flag any surprising response shapes, missing fields, or statuses not handled in the current code
- Use the real response shapes to validate the COE form rebuild data contract ([#2434](https://va.ghe.com/software/va-cve/issues/2434))
- FE developers can use the documented response bodies to build MSW mock handlers

---

## Key Files

| File | What it is |
|---|---|
| `lib/lgy/service.rb` | The service you'll be calling; all endpoints + coe_status logic |
| `lib/lgy/configuration.rb` | Faraday middleware stack (betamocks, snakecase, JSON, breakers) |
| `spec/lib/lgy/service_spec.rb` | Existing specs showing how each coe_status branch is tested |
| `spec/support/vcr_cassettes/lgy/` | Existing (fabricated) cassettes from 2021 |
| `app/controllers/v0/coe_controller.rb` | How the controller consumes LGY::Service; what the FE receives |
