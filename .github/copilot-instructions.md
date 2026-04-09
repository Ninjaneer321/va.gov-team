# GitHub Copilot Instructions for va.gov-team Repository

## Repository Overview

This is the va.gov-team repository, which contains documentation, workflows, and assets for the VA.gov website development and the Veteran-facing Services Platform (VSP). **This is a very large repository (~35GB)** due to extensive documentation, media files, and historical assets across 99+ products and multiple teams.

The repository serves as a central hub for:
- **Non-code documentation** for VA.gov products and platform
- **Team collaboration** across portfolios (Benefits, Health, Digital Experience, BAM)
- **Issue tracking** for platform and product development
- **Knowledge management** for Veterans Affairs digital services

<critical_tool_calling_instructions>
  Execute tool calls efficiently without excessive narration or explanation before calling tools.
  After gathering necessary information through tools, synthesize and present your answer.

  **Important**: If you've made multiple tool calls and gathered sufficient information to answer the user's question,
  provide your answer rather than making additional redundant calls. You don't need to wait for a "complete" signal—
  use your judgment to determine when you have enough information.

  If a file is too large and gets truncated (e.g., knowledge-graph.json), switch strategies:
  - Use code search tools instead of getfile
  - Query for specific sections or nodes
  - State limitations: "Based on available data..." if results are incomplete
</critical_tool_calling_instructions>

## Knowledge Graph — Products, Teams, Research & Organizational Context

### What It Is

This repository includes a **machine-readable knowledge graph** at the repo root:

```
knowledge-graph.json
```

It is a JSON file containing nodes (teams, portfolios, crews, products, categories, forms, external systems, **research studies**) and edges (relationships like `owns_product`, `has_research`, `conducted_research`, `implements_form`, etc.).

### Node Types

| Type | Description |
|---|---|
| `team` | A VA.gov engineering/product team (from `team-lookup.json`) |
| `product` | A product or sub-product folder under `/products/` |
| `portfolio` | A portfolio grouping multiple teams (e.g., Benefits Portfolio) |
| `crew` | A crew/pod within a portfolio |
| `form` | A VA form number (e.g., `21-526EZ`) |
| `category` | A hub/category product page |
| `external_system` | An external system (e.g., Lighthouse API, vets-api) |
| `research_study` | A research study directory under any `research/` or `user research/` folder **at any nesting level** (e.g., `products/*/research/`, `products/*/design/User research/`) |

### When To Use It

**Always consult `knowledge-graph.json` first** when a question involves any of the following:

| Question type | Example |
|---|---|
| **Which team owns a product?** | "Who works on the 526 disability claim form?" |
| **What products belong to a portfolio?** | "List all Health Portfolio products." |
| **Team → crew → portfolio hierarchy** | "What crew does the Messaging team belong to?" |
| **Cross-product integrations** | "What systems does the debt resolution product integrate with?" |
| **Form-to-product mapping** | "Which product implements VA Form 21-0966?" |
| **Finding documentation paths** | "Where is the Decision Reviews team README?" |
| **What research has been done on a product?** | "What research exists for the 526 disability form?" |
| **What usability studies exist for a form?** | "What usability studies exist for the disability claims form?" |
| **Research methods and patterns** | "What research methods are most common across products?" |
| **Team research history** | "What research has the Authenticated Experience team conducted?" |

### How To Use It

1. **Read the file**: Parse `knowledge-graph.json` from the repository root.
2. **Search nodes** by `type` (`team`, `product`, `portfolio`, `crew`, `form`, `category`, `external_system`, `research_study`) and `name` or `id`.
3. **Traverse edges** to find relationships. Each edge has a `source`, `target`, and `relationship` field.
4. **Follow file paths**: Nodes include fields like `readme_path`, `path`, and `files` that point to documentation files within this repo. Use those paths to read the actual documentation.

#### Node Structure (examples)

```json
// Team node — use readme_path to find team docs
{
  "id": "team-decision-reviews",
  "type": "team",
  "name": "Decision Reviews",
  "short_name": "decision-reviews",
  "team_id": 11004,
  "readme_path": "teams/benefits-portfolio/decision-reviews/README.md"
}

// Product node — use path to find product docs
{
  "id": "product-526ez",
  "type": "product",
  "name": "526ez",
  "path": "products/disability/526ez",
  "display_name": "21-526EZ Disability Compensation Application"
}

// Research study node — use files.plan, files.findings, files.conversation_guide
{
  "id": "research-products-disability-526ez-research-2023-07-toxic-exposure",
  "type": "research_study",
  "name": "Research Plan for Form 526 Toxic Exposure Subsection/New Questions, July 2023",
  "path": "products/disability/526ez/research/2023-07-Toxic-Exposure",
  "files": {
    "plan": "products/disability/526ez/research/2023-07-Toxic-Exposure/research-plan.md",
    "findings": "products/disability/526ez/research/2023-07-Toxic-Exposure/research-findings.md",
    "conversation_guide": "products/disability/526ez/research/2023-07-Toxic-Exposure/conversation-guide.md"
  },
  "date": "2023-07",
  "methodology": "usability testing",
  "participant_types": ["Veterans"],
  "research_goals": ["Validate form content clarity for toxic exposure questions"],
  "tags": ["usability-testing", "BNFT: Disability", "PRDT: Claim-status-tool"]
}
```

#### Edge Structure (examples)

```json
// Team belongs to a crew
{ "source": "team-decision-reviews", "target": "crew-cross-benefits-crew", "relationship": "belongs_to_crew" }

// Product has research
{ "source": "product-526ez", "target": "research-products-disability-526ez-research-2023-07-toxic-exposure", "relationship": "has_research" }

// Team conducted research
{ "source": "team-disability-experience", "target": "research-products-disability-526ez-research-2023-07-toxic-exposure", "relationship": "conducted_research" }

// Research references another product
{ "source": "research-products-...", "target": "product-veteran-id-cards", "relationship": "research_references_product" }

// Research references a form
{ "source": "research-products-...", "target": "form-21-526ez", "relationship": "research_for_form" }
```

### Answering Common Queries — Workflow

1. **"What team owns X product?"**
   → Find the product node by name → follow `owns_product` or `works_on_product` edges back to a team → read the team's `readme_path` for details.

2. **"What products are in the Health Portfolio?"**
   → Find portfolio node `portfolio-health-portfolio` → follow `belongs_to_portfolio` edges to find teams → follow `owns_product`/`works_on_product` edges from those teams to products.

3. **"What research has been done on product X?"**
   → Find the product node → follow `has_research` edges to `research_study` nodes → each study has `files.plan`, `files.findings`, and `files.conversation_guide` paths → read those files for details.

4. **"What usability studies exist for a specific form?"**
   → Find the form node by form number → follow `research_for_form` edges (reversed) to `research_study` nodes → check `methodology` field for "usability testing".

5. **"What research has team X conducted?"**
   → Find the team node → follow `conducted_research` edges to `research_study` nodes.

6. **"Where is the design/research documentation for X?"**
   → Find the product node → use its `path` field (e.g., `products/health-care/`) → look for subdirectories like `design/`, `research/`, `discovery/` within that path.

7. **"What form does product X implement?"**
   → Find the product node → follow `implements_form` edges → the target form node will have the form number.

### Important Notes

- The knowledge graph is **auto-generated** from the `/products/` and `/teams/` directories and `team-lookup.json`. It is the **authoritative index** for navigating this repository's organizational structure.
- Research studies are indexed from every `research/` and `user research/` directory under `/products/` and `/teams/` **at any nesting level**.
- **Non-standard research paths:** Some products use non-standard directory structures (e.g., `products/ask-va/design/User research/`). The knowledge graph scanner recursively searches for research directories regardless of parent folder names.
- If the knowledge graph doesn't have the answer, fall back to searching the `/products/` and `/teams/` directories directly.
- Always **cross-reference** the knowledge graph paths with actual files — documentation may have been added or moved since the last generation.

<knowledge_graph_usage>
## Querying the Knowledge Graph

The `knowledge-graph.json` file is **large** (1230+ nodes, 2500+ edges, 35k+ lines).
**Do NOT use `getfile` to read the entire file**—it will be truncated and require multiple attempts.

### Recommended Approach

**Always prefer code search over getfile for knowledge graph queries:**

1. **Lexical search for exact matches:**
   - Finding specific team: `lexical-code-search: "team-ask-va" path:knowledge-graph.json`
   - Finding specific product: `lexical-code-search: "product-526ez" path:knowledge-graph.json`
   - Finding edges: `lexical-code-search: "conducted_research" "team-ask-va" path:knowledge-graph.json`

2. **Semantic search for conceptual queries:**
   - `semantic-code-search: "What research has the Ask VA team conducted?" in knowledge-graph.json`

3. **Targeted getfile only for specific sections:**
   - If you need to read a small, known section, you can use getfile
   - Example: Reading the `_meta` or `statistics` section only
   - **Never** try to read the entire nodes or edges arrays with getfile

### Query Patterns

| User Question | Best Tool | Example Query |
|---------------|-----------|---------------|
| "What team owns X?" | Lexical search | `"product-ask-va" "owns_product"` in knowledge-graph.json |
| "What research has been done on X?" | Lexical search | `"product-ask-va" "has_research"` in knowledge-graph.json |
| "Which products are in Y portfolio?" | Lexical search | `"portfolio-digital-experience" "belongs_to_portfolio"` in knowledge-graph.json |
| "What research methods are used?" | Semantic search | Query about research methodologies in knowledge-graph.json |
| "Show me graph statistics" | Getfile (targeted) | Read just the `statistics` section |

### Multi-Step Workflow Example

For complex queries like "What team owns Ask VA and what research have they done?":

1. **Find the team node:**
   ```
   lexical-code-search: "team-ask-va" path:knowledge-graph.json
   ```

2. **Find research conducted by the team:**
   ```
   lexical-code-search: "team-ask-va" "conducted_research" path:knowledge-graph.json
   ```

3. **Get research details:**
   ```
   lexical-code-search: "research-products-ask-va-design-user-research" path:knowledge-graph.json
   ```

4. **Read actual research files (optional):**
   ```
   getfile: products/ask-va/design/User research/README.md
   ```

5. **Synthesize answer** combining all findings

### When getfile Gets Truncated

If you attempt `getfile` on knowledge-graph.json and see truncation warnings:
- **Stop immediately** - don't retry getfile multiple times
- **Switch to code search** using the patterns above
- **Provide your answer** based on search results, noting if information is incomplete
</knowledge_graph_usage>

## Research Data Integrity Rules

### CRITICAL: Never Fabricate Research Information

When users ask about research studies, you MUST:

1. **ALWAYS search first** - Use `lexical-code-search` or `semantic-code-search` to find actual research files before claiming they exist
2. **NEVER create fabricated entries** - Do not create list blocks, file paths, URLs, or research study data without tool response data
3. **Explicitly state when searching** - If research is requested but not yet searched, respond: "I need to search for research studies. Let me do that now." Then execute the search.
4. **Use actual paths only** - Only reference file paths that came directly from search tool responses
5. **No placeholders** - Never use placeholder data like "YYYY-MM-DD" or fabricated study names

### Research Query Workflow

**CORRECT Approach:**
1. User asks: "What research has been done on Ask VA?"
2. You respond: "Let me search for Ask VA research studies."
3. Execute: `lexical-code-search` with `query:path:/products\/ask-va\/.*research/`
4. Review actual search results
5. Present findings using actual file paths from search results

**INCORRECT Approach:**
❌ Immediately creating list blocks with fabricated research studies
❌ Inventing file paths without searching
❌ Creating placeholder entries like "Research: Study Name - Date"
❌ Using `list type="issue"` blocks for research without tool data

### Verification Before Presenting Research

Before presenting any research findings:
- [ ] I searched the actual repository directories
- [ ] I have file paths from tool responses
- [ ] I listed the actual files found
- [ ] I did not fabricate any entries

If you cannot find research, say: "I searched but did not find research studies in [location]. The product may not have documented research, or it may be in a different directory structure."

## Critical Setup Requirements

⚠️ **IMPORTANT: This repository requires special checkout configuration to prevent "No space left on device" errors.**

### Required Checkout Configuration

When working on tasks in this repository, **you must use the following optimized checkout settings**:

```yaml
jobs:
  your-job-name:
    runs-on: ubuntu-latest           # RECOMMENDED: Standard runner works with sparse checkout
    timeout-minutes: 45-60           # CRITICAL: Extend timeout for large operations
    
    steps:
      - name: Optimized checkout for large repository
        uses: actions/checkout@v4
        with:
          # Use shallow clone to reduce download size
          fetch-depth: 1
          # CRITICAL: Use sparse checkout to only get necessary directories
          sparse-checkout: |
            .github/workflows/
            scripts/
            teams/
            products/
            platform/
            docs/
            templates/
            assets/
            knowledge-graph.json
          sparse-checkout-cone-mode: false
          token: ${{ secrets.GITHUB_TOKEN }}
```

### Post-Checkout Setup

After checkout, if working with large files:
```bash
git lfs install
git lfs pull
```

For additional environment verification and setup steps, see: [`copilot-setup-steps.yml`](copilot-setup-steps.yml)

### Environment Requirements

- **Standard runners work well** with sparse checkout - `ubuntu-latest` is sufficient for most tasks
- **Use larger runners only when necessary** - `ubuntu-4-cores-latest` or `ubuntu-8-cores-latest` for full repository operations
- **Always use sparse checkout** - avoids "No space left on device" errors
- **Extend timeouts** to 45-60 minutes for large operations
- **Monitor disk space** with `df -h` to ensure sufficient space

## Repository Structure

### Primary Directories

#### `knowledge-graph.json` - Repository Knowledge Graph (Root)
- **Purpose**: Machine-readable index of all teams, products, portfolios, crews, forms, research studies, and their relationships
- **Usage**: Consult first when answering questions about organizational structure, product ownership, team hierarchy, form mappings, or research history
- **Format**: JSON with `nodes` array and `edges` array
- **Generated From**: `/products/`, `/teams/`, and `team-lookup.json`

#### `/products/` - Product Documentation (99+ products)
- **Purpose**: Documentation for all VA.gov user-facing products and VA Health Benefits mobile app features
- **Content**: Product outlines, design comps, content decks, discovery docs, user research files
- **Organization**: One folder per product (e.g., `health-care/`, `disability/`, `education-careers/`)
- **Key Files**: Each product should contain a `product-details-template.yml` file
- **Contributors**: Veteran-facing Service (VFS) teams and Platform teams.

#### `/teams/` - Team Organization and Documentation
- **Purpose**: Internal resources for teams building on or supporting VA.gov
- **Organization by Portfolios**:
  - `teams/benefits-portfolio/` - Benefits-focused teams
  - `teams/health-portfolio/` - Health products teams
  - `teams/digital-experience/` - Digital experience teams  
  - `teams/bam-portfolio/` - BAM (Benefits and Memorial) teams
- **Content**: Team charters, org charts, workflow documents, team-specific processes
- **Key Files**: Each team has a `README.md` (template structure moved to private repository)
- **Important**: Store team information ONLY - product information goes in `/products/`

#### `/platform/` - Platform Support Documentation
- **Purpose**: Resources, templates, guides, and processes supporting VFS development
- **Key Subdirectories**:
  - `accessibility/` - 508 compliance and accessibility guidelines
  - `analytics/` - Analytics implementation and reporting
  - `design/` - Design system, patterns, and guidelines
  - `engineering/` - Development standards and technical documentation
  - `research/` - Research processes, planning, and synthesis
  - `content/` - Content strategy and writing guidelines
  - `quality-assurance/` - Testing protocols and standards
  - `security/` - Security practices and ATO documentation

#### `/scripts/` - Automation and Validation Tools
- **Purpose**: Ruby scripts for repository maintenance and validation
- **Key Scripts**:
  - `scripts/manifest/validate_teams.rb` - Validates team README completeness
  - `scripts/manifest/generate_manifest.rb` - Generates team manifests
  - `scripts/cleanup.rb` - Repository maintenance
  - `scripts/migrate.rb` - Data migration utilities

#### `/.github/` - Repository Configuration
- **Purpose**: GitHub Actions workflows, templates, and repository configuration
- **Key Files**:
  - `workflows/` - Automation workflows for the repository
  - `CODEOWNERS` - Code review assignments
  - Various issue and PR templates

#### `/docs/` - General Documentation
- **Purpose**: Cross-cutting documentation and ADRs (Architecture Decision Records)
- **Content**: Issue templates, architectural decisions, general guidance

### Secondary Directories

- `/assets/` - Media files, images, and documents (managed via Git LFS)
- `/templates/` - Reusable templates for documentation and processes
- `/strategy/` - Strategic planning and high-level documentation
- `/impact-reviews/` - Impact assessment documentation
- `/octo/` - OCTO (Office of the CTO) specific documentation

## File Management Standards

### File and Folder Naming Conventions
- **Use lowercase** with dashes as separators (e.g., `repo-guidelines.md`)
- **No spaces or special characters** (&, :, %, etc.)
- **Omit unnecessary words** (the, a, and) when possible
- **Include versioning** at the end for multiple versions (e.g., `v1`, dates)
- **Use YYYYMMDD format** for dates to enable chronological sorting
- **Exception**: `README.md` files should be all capitals for visibility

### Large File Management
- **Git LFS Required** for: `.pdf`, `.mp4`, `.sketch`, `.pptx`, `.docx`, `.zip`, `.mov`, `.avi`
- **Do not upload these file types via web interface** - use Git LFS only
- **File organization**: Consider creating `files/` folders for extensive external files
- **Link from Markdown** files for discoverability

### Folder Structure Guidelines
- **Keep structures flat** - avoid deep nested hierarchies
- **Create child folders** only when you have multiple related files
- **Use clear definitions** for folder purposes
- **Don't repeat parent folder names** in child folder names

## Development Standards

### For GitHub Actions Workflows
- **Must include optimized checkout** configuration shown above
- **Test on branches** before merging to master
- **Include proper permissions** blocks
- **Use sparse checkout** to minimize repository size
- **Consider background processes** for long-running tasks
- **Monitor disk space** during execution

### For Team Documentation
- **Location**: `teams/{portfolio}/{team-name}/README.md`
- **Template**: Team documentation templates are in `va.gov-team-sensitive` repository at `/teams/team-readme-template.md`
- **Private Repository**: `https://github.com/department-of-veterans-affairs/va.gov-team-sensitive`
- **Validation**: Use `ruby scripts/manifest/validate_teams.rb`
- **Structure**: Must include `## Team Information` section
- **Note**: When referencing team templates or sensitive content, always direct users to the private repository URL

### For Product Documentation
- **Location**: `products/{product-name}/`
- **Requirements**: Include `product-details-template.yml`
- **Content**: Product-specific information only (not team-specific)
- **History**: Preserve project documents for historical tracking
- **Cross-reference**: Link to related team documentation appropriately

### For Platform Documentation
- **Audience**: Platform teams and VFS teams building on platform
- **Standards**: Follow established patterns in existing platform docs
- **Technical depth**: Provide implementation details and examples
- **Maintenance**: Keep documentation current with platform changes

## Common Development Tasks

### Team README Management
```bash
# Validate specific team documentation
ruby scripts/manifest/validate_teams.rb --team="Team Name" --verbose

# Validate all teams across portfolios
ruby scripts/manifest/validate_teams.rb

# Generate team manifest
ruby scripts/manifest/generate_manifest.rb --verbose

# Preview changes without writing
ruby scripts/manifest/generate_manifest.rb --dry-run
```

### Repository Maintenance
```bash
# Clean up deprecated content
ruby scripts/cleanup.rb
```

### Content Validation
- **Before committing**: Validate team documentation completeness
- **For workflows**: Test in branches with representative data
- **For large files**: Verify Git LFS handling before push
- **Cross-references**: Check that internal links remain valid

## Security and Compliance

### Public vs Private Content
- **This repository is PUBLIC** - no sensitive information allowed
- **Sensitive content** goes to the **private repository**: `https://github.com/department-of-veterans-affairs/va.gov-team-sensitive`
  - **Repository name**: `va.gov-team-sensitive`
  - **Access**: VA team members only
  - **Content**: Team rosters, organizational details, sensitive team information, team README templates
- **Prohibited content in public repo**: PII, credentials, security vulnerabilities, postmortems, team member personal information
- **Review carefully** before committing any content

### Workflow Permissions
- **Use least privilege** principle for workflow permissions
- **Standard token**: `${{ secrets.GITHUB_TOKEN }}` for repository access
- **Permissions blocks**: Always include explicit permissions in workflows
- **Security scanning**: Workflows should not expose sensitive data

### Performance Optimization

### Repository Size Management
1. **Always use sparse checkout** - prevents full repository download (35GB+)
2. **Enable Git LFS when needed** - only for workflows handling large files  
3. **Use shallow clones** - significantly reduces checkout time (`fetch-depth: 1`)
4. **Monitor disk space** - verify availability during operations (`df -h`)
5. **Standard runners are sufficient** - `ubuntu-latest` works with proper sparse checkout

### Build Optimization
- **Parallel workflows** when possible for independent tasks
- **Caching strategies** for repeated operations
- **Targeted operations** - avoid full repository scans
- **Efficient filtering** - use specific file patterns for searches

## Troubleshooting Common Issues

### Issue: "Copilot didn't answer my question on the first try"

**Symptom:** You asked a question about teams, products, or research, and Copilot made multiple tool calls but provided no answer. You had to ask "What is the answer?" to get a response.

**Root Cause:**
- Copilot tried to read a large file (like `knowledge-graph.json`) using `getfile` multiple times
- The file was truncated each time
- Copilot was waiting for a "complete" signal that never came

**Solution (for users):**
- Ask a follow-up: "What is the answer?" or "Please summarize what you found"
- Rephrase your question to be more specific: "Search the knowledge graph for Ask VA team research"
- Reference specific paths: "Look in products/ask-va/design/User research/"

**Prevention (for Copilot):**
- **Always use code search for knowledge-graph.json queries** (see `<knowledge_graph_usage>`)
- After making 3+ tool calls, evaluate if you have enough information to answer
- Provide partial answers if complete data isn't available: "Based on available information..."
- State what's missing: "I found X but need to search for Y to complete the answer"

### Issue: "Knowledge graph doesn't have the information I need"

**Solutions:**
1. **Fall back to directory search:**
   - Use `lexical-code-search` to find files: `path:/products/ask-va/ readme`
   - Use `semantic-code-search` for conceptual queries

2. **Check if the knowledge graph is outdated:**
   - Look for the `_meta.generated` timestamp in knowledge-graph.json
   - If it's more than a few days old, the graph may need regeneration
   - Recommend: "The knowledge graph may be outdated. Try running the regenerate workflow."

3. **Verify the information exists:**
   - Some products may not have research directories
   - Some teams may not have complete documentation
   - State limitations clearly: "No research directories were found for this product in the knowledge graph."

### Issue: "File too large" or truncation warnings

**For knowledge-graph.json (1230 nodes):**
- **Never use getfile** - always use code search (see `<knowledge_graph_usage>`)

**For other large files:**
- Use `lexical-code-search` to find specific sections
- Use targeted queries: `path:/specific/file.md section-heading`
- Read only what you need, not the entire file

### Issue: "404 errors when following links"

**Common causes:**
- Knowledge graph has outdated paths
- Files were moved or renamed
- URLs contain URL-encoded spaces (e.g., `User%20research`)

**Solutions:**
1. Decode URLs: `User%20research` → `User research`
2. Search for the file by name: `lexical-code-search: filename.md`
3. Check parent directory: If `products/ask-va/research/` gives 404, try `products/ask-va/design/User research/`
4. Recommend regenerating the knowledge graph if paths are consistently wrong

### "No space left on device" errors
1. Ensure sparse checkout is properly configured to limit directories
2. Use shallow clone (`fetch-depth: 1`)
3. Switch to larger GitHub Actions runners only if needed (`ubuntu-4-cores-latest`)
4. Monitor disk usage with `df -h`
5. Remove unnecessary files during workflow execution

### Large file handling issues
1. Verify Git LFS is properly configured
2. Check file types are listed in `.gitattributes`
3. Run `git lfs pull` after checkout
4. Confirm file size limits for your use case

### Team validation failures
1. Check README follows template structure
2. Verify `## Team Information` section exists
3. Remove placeholder text like `[Full Name]`
4. Ensure portfolio directory structure is correct

### Workflow failures
1. Verify checkout configuration includes all needed directories
2. Check permissions blocks are properly configured
3. Ensure runner size is appropriate for task
4. Monitor timeout settings for long operations

## Knowledge Hub and Resources

- **Primary documentation**: https://depo-platform-documentation.scrollhelp.site/
- **Repository guidelines**: `repo-guidelines.md`
- **Team documentation**: Moved to private repository for privacy protection
- **Platform orientation**: Required for VFS team members
- **Support channels**: #vfs-platform-support, #vfs-all-teams (Slack)

---

**Remember**: This repository serves the entire VA.gov ecosystem with complex organizational needs. Always use optimized checkout configuration, follow established patterns, and validate your work before committing. The size and scope require careful consideration of performance impact and organizational standards.
