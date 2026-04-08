# VA Sitemap Scraper

**This documentation will be updatated as new development occurs**

## Project status

This documentation is for the Python scraper built as an MVP for indexing `va.gov` content from the public sitemap.

The project was intentionally scoped to solve the first practical problem:

- crawl the VA sitemap
- extract one document per page
- emit one companion metadata file per document
- keep all output on disk so the crawl can be inspected before any AWS integration exists

The intended future direction was to upload those document and metadata files into an S3 bucket and configure AWS Kendra to use that bucket as a data source. That future integration has not been implemented here. No AWS credentials are needed to run the current code.

## Why this exists

The original goal was to emulate the parts of Search.gov that matter to the VA use case:

- rely on the sitemap as the crawl seed
- eventually respect `robots.txt` as part of crawl policy
- extract searchable page content
- preserve metadata that can later drive result display, faceting, and filtering

Search.gov exposes metadata in search results and facets when that metadata exists. AWS Kendra can also use metadata for filtering and faceting, but its S3 integration expects metadata in a companion file format. That led to the central design decision for this application:

- each crawled page becomes a local document file
- each document gets a sibling `*.metadata.json` file

That structure lets the local output act as a stand in for a future S3 upload layout.

## Current scope

The current implementation does all of the following:

- starts from the VA sitemap index at `https://www.va.gov/sitemap_index.xml`
- walks child sitemap files recursively
- discovers page URLs from sitemap `urlset` documents
- fetches page HTML with the Python standard library
- extracts title, meta description, canonical URL, and flattened visible text
- prefers `<main>` and `<article>` content over site chrome when building page text
- writes one extracted text document per page
- writes one companion metadata JSON file per page
- writes crawl/debug records separately so the run can be audited

It does not currently:

- upload anything to S3
- create Kendra indexes or fields
- manage incremental syncs
- detect deletes
- normalize metadata with a VA owned taxonomy or source of truth

## High-level design

The scraper follows a sitemap first model.

The flow is:

1. Fetch the root sitemap index.
2. Parse child sitemap URLs from the index.
3. Fetch child sitemaps and discover page URLs.
4. Apply a domain filter to discovered page URLs.
5. Fetch each page.
6. Extract indexable content and metadata.
7. Write local artifacts for later inspection or eventual S3 upload.

## Repository contents

- `va_scraper.py`: main scraper implementation and CLI
- `test_va_scraper.py`: unit tests for XML parsing, HTML extraction, domain filtering, and metadata inference
- `output`: timestamped crawl runs and generated local artifacts

## How a run is organized

Each execution creates a timestamped directory under `output/`, for example:

```text
output/run-20260326T181316Z/
```

Within that run directory, the scraper writes:

- `manifest.json`: summary of the run and artifact paths
- `sitemaps.jsonl`: one record per sitemap fetched
- `discovered_urls.jsonl`: one record per URL discovered from sitemap files
- `records.jsonl`: one line per scraped page summarizing crawl results
- `documents/`: extracted text documents, one per page
- `records/`: pretty printed per page crawl/debug records
- `html/`: optional raw HTML responses

The important design choice is that `documents/` contains the future S3 ready shape:

- `documents/<file>.txt`
- `documents/<file>.txt.metadata.json`

That pairing is what a future upload process can map into S3 objects.

## What a document file contains

Each document file is plain text.

Today it is built from:

- page title
- meta description
- extracted visible main content text

The document is not raw HTML. It is a text representation intended to be easier for downstream indexing and simpler to inspect locally.

Example shape:

```text
<title>

<meta description>

<flattened visible text>
```

This is intentionally simple. It was enough for the MVP because the immediate question was whether a sitemap driven crawl could generate one indexable file per page, not whether the final content extraction logic was perfect.

## What a metadata file contains

Each document has a sibling metadata file ending in `.metadata.json`.

Example:

```json
{
  "DocumentId": "https://www.va.gov/health-care/apply/",
  "Attributes": {
    "_source_uri": "https://www.va.gov/health-care/apply/",
    "_document_title": "How to apply for VA health care",
    "_category": "sitewide",
    "_created_at": "2026-03-26T00:00:00Z",
    "_last_updated_at": "2026-03-26T00:00:00Z",
    "section": "health-care",
    "content_type": "page",
    "audience": ["veteran"],
    "benefit_category": ["health-care"],
    "topic": ["enrollment", "application"]
  }
}
```

The current implementation targets two groups of fields.

Reserved style fields:

- `_source_uri`
- `_document_title`
- `_category`
- `_created_at`
- `_last_updated_at`

Custom fields (not all inclusive) intended for Kendra index configuration:

- `section`
- `content_type`
- `audience`
- `benefit_category`
- `topic`

Important constraint for future AWS work:

- the custom fields must exist on the Kendra index before the S3 metadata files can populate them

That was part of the original design assumption and is why the scraper emits the custom metadata locally now, even though AWS integration is not implemented here.

## How metadata is inferred today

The scraper does not have a VA owned metadata source. It infers metadata heuristically from the URL, title, description, and extracted text.

Current logic includes:

- `section`: first URL path segment
- `content_type`: inferred from path segments such as `events`, `news-releases`, `stories`, `forms`, `faq`
- `audience`: inferred from simple regex matches such as `veteran`, `caregiver`, `service-member`, `family-member`, `survivor`, `dependent`
- `benefit_category`: inferred from a small set of known benefit related segments and regex patterns
- `topic`: inferred from simple regex matches such as `enrollment`, `application`, `benefits`, `claims`, `appointments`, `eligibility`, `forms`, `records`

The timestamp fields use this rule:

- if sitemap `lastmod` can be parsed, use it for `_created_at` and `_last_updated_at`
- otherwise fall back to the page fetch time

This is acceptable for local testing but should not be treated as authoritative metadata.

## Important limitations of the current metadata model

- `section` is URL-based, not taxonomy-based. A facility page may get `kansas-city-health-care` instead of a normalized business section like `health-care`.
- `audience`, `benefit_category`, and `topic` are heuristics. False positives and false negatives are expected.
- `_created_at` is not true publication time. It is currently derived from sitemap `lastmod` when available.
- `_last_updated_at` is also based on sitemap `lastmod`, not page-level editorial metadata.
- No controlled vocabulary exists yet for custom fields.
- There is no override layer for correcting bad inferences.

## HTML extraction strategy

The parser:

- ignores `script`, `style`, `noscript`, `svg`, `canvas`, `iframe`, and `template`
- suppresses text from `header`, `nav`, and `footer`
- prefers text found inside `<main>` or `<article>`
- falls back to all visible text if a stronger content container is not present

## Command-line interface

Basic example:

```bash
python3 va_scraper.py --limit 10
```

Supported options today include:

- `--sitemap-url`: override the root sitemap URL
- `--output-dir`: choose where run artifacts are written
- `--limit`: cap the number of pages scraped; `0` or negative means no cap
- `--timeout`: per-request timeout in seconds
- `--delay-seconds`: delay between requests
- `--user-agent`: override the HTTP user agent
- `--domain-filter`: restrict page URLs to specific domains; can be passed multiple times
- `--save-html`: keep raw HTML
- `--no-save-html`: skip raw HTML
- `--default-category`: value used for `_category`
- `--default-audience`: audience value to seed on every document; can be passed multiple times

Examples:

```bash
python3 va_scraper.py --limit 25
python3 va_scraper.py --limit 50 --delay-seconds 0.5
python3 va_scraper.py --output-dir ./tmp/scrape-output
python3 va_scraper.py --no-save-html
python3 va_scraper.py --domain-filter va.gov --domain-filter news.va.gov
python3 va_scraper.py --default-category sitewide --default-audience veteran
python3 va_scraper.py --limit 0
```

## What the tests cover

The test suite in `test_va_scraper.py` currently covers:

- sitemap index parsing
- sitemap URL set parsing
- HTML extraction of title, description, and visible text
- preference for `<main>` content over site chrome
- domain filtering
- timestamp normalization
- metadata field inference for a simple health-care example

Run the tests with:

```bash
python3 -m unittest test_va_scraper.py
```

The tests are intentionally small. They verify core behavior, but they are not a substitute for broader crawl validation against real VA content.

Conceptually, the local `documents/` folder is supposed to become something like:

```text
s3://<bucket>/<prefix>/documents/<file>.txt
s3://<bucket>/<prefix>/documents/<file>.txt.metadata.json
```

That upload step does not exist in this application yet, but the local artifact format was chosen to make that future step more straightforward.

## Decisions that were made deliberately

### Sitemaps instead of link following

Chosen because it is more predictable, more bounded, and closer to the intended Search.gov behavior.

### Text documents instead of raw HTML as the primary corpus

Chosen because the downstream target was search indexing, not page rendering.

### Separate crawl records from indexable documents

Chosen because debugging a crawl and publishing an indexable corpus are different concerns.

### Local disk output first

Chosen because it is much safer to validate the artifact shape before introducing AWS credentials, bucket layout, or Kendra ingestion behavior.

## Operational notes for future development

- Start with small capped runs using `--limit`.
- Inspect `manifest.json`, `sitemaps.jsonl`, `discovered_urls.jsonl`, and a few per page records after every change.
- Treat the metadata inference as provisional.
- Be cautious about removing the crawl delay.

## Summary

This repository is a working local MVP for generating a sitemap driven search corpus from `va.gov`.

Its value is not that it solves the full AWS problem already. Its value is that it establishes:

- a crawl model
- a document model
- a metadata model
- a local artifact layout that can later be published into S3 for Kendra
