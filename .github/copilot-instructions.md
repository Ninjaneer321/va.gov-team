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

  If a file is too large and gets truncated, switch strategies:
  - Use code search tools instead of getfile
  - Query for specific sections
  - State limitations: "Based on available data..." if results are incomplete
</critical_tool_calling_instructions>

## Team and Research Information

For questions about VA.gov teams, products, portfolios, and research, **read these summary files**:

| Question Type | File to Read | Example Query |
|---------------|--------------|---------------|
| Who owns a product? | `.github/copilot-summaries/teams.md` | "Who owns Ask VA?" |
| What research exists for product X? | `.github/copilot-summaries/research-by-product.md` | "What research has been done on Ask VA?" |
| What has team Y researched? | `.github/copilot-summaries/research-by-team.md` | "What research has the Ask VA team conducted?" |
| Portfolio/crew hierarchy? | `.github/copilot-summaries/portfolios.md` | "What teams are in Digital Experience?" |

### How to Use Summary Files

Use `getfile` to read the appropriate summary file, then search for the relevant section.

**Example 1: "Who owns Ask VA?"**

```
Tool: getfile
Path: .github/copilot-summaries/teams.md
→ Search for "Ask VA" section in the file
→ Provide answer with team details, products, and research count
```

**Example 2: "What research has been done on Ask VA?"**

```
Tool: getfile
Path: .github/copilot-summaries/research-by-product.md
→ Search for "Ask VA" section
→ List all research studies with dates and links
```

**Example 3: "What teams are in Digital Experience portfolio?"**

```
Tool: getfile
Path: .github/copilot-summaries/portfolios.md
→ Find "Digital Experience" section
→ List all crews and teams
```

### File Characteristics

- **Auto-generated weekly** - Updated every Monday at 8am UTC via GitHub Actions
- **Small and readable** - Each file under 100KB, easy to read in one getfile call
- **Human-friendly** - Formatted markdown with clear sections and tables
- **Complete** - Contains all teams, products, research studies, and organizational structure

### If Summary Doesn't Have the Answer

If the summary files don't contain enough detail:

1. Search the source directories directly:
   - `products/` - Product documentation
   - `teams/` - Team documentation
   - Use `lexical-code-search` or `semantic-code-search` to find specific files

2. Read specific files mentioned in the summary:
   - Team READMEs (linked in teams.md)
   - Research plans/findings (linked in research-by-*.md files)

### Technical Note

`.github/knowledge-graph.json` exists in the repository and is auto-generated weekly. It is used **for automation and workflows only**. **Do not read it directly** when answering user questions - use the summary files in `.github/copilot-summaries/` instead.

The summary files are generated FROM the knowledge graph, so they contain the same information in a more accessible format.

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
            .github/knowledge-graph.json
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
- **Purpose**: Ruby and Node.js scripts for repository maintenance and validation
- **Key Scripts**:
  - `scripts/manifest/validate_teams.rb` - Validates team README completeness
  - `scripts/manifest/generate_manifest.rb` - Generates team manifests
  - `scripts/cleanup.rb` - Repository maintenance
  - `scripts/migrate.rb` - Data migration utilities
  - `scripts/build-knowledge-graph.js` - Builds `.github/knowledge-graph.json` from products/teams directories
  - `scripts/generate-copilot-summaries.js` - Generates `.github/copilot-summaries/*.md` from `.github/knowledge-graph.json`

#### `/.github/` - Repository Configuration
- **Purpose**: GitHub Actions workflows, templates, and repository configuration
- **Key Files**:
  - `workflows/` - Automation workflows for the repository
  - `CODEOWNERS` - Code review assignments
  - Various issue and PR templates
- **Key Subdirectory**:
  - `copilot-summaries/` - Auto-generated markdown summaries for teams, research, and portfolios (see [Team and Research Information](#team-and-research-information))

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
- Copilot tried to read a large file using `getfile` multiple times
- The file was truncated each time
- Copilot was waiting for a "complete" signal that never came

**Solution (for users):**
- Ask a follow-up: "What is the answer?" or "Please summarize what you found"
- Rephrase your question to be more specific
- Reference specific paths: "Look in products/ask-va/design/User research/"

**Prevention (for Copilot):**
- **Always read the summary files** — they answer most team/research questions in one tool call:
  - `.github/copilot-summaries/teams.md`
  - `.github/copilot-summaries/research-by-team.md`
  - `.github/copilot-summaries/research-by-product.md`
  - `.github/copilot-summaries/portfolios.md`
- After making 3+ tool calls, evaluate if you have enough information to answer
- Provide partial answers if complete data isn't available: "Based on available information..."
- State what's missing: "I found X but need to search for Y to complete the answer"

### Issue: "Summary files don't have the information I need"

**Solutions:**
1. **Check all four summary files:**
   - `.github/copilot-summaries/teams.md` — for team ownership and research
   - `.github/copilot-summaries/portfolios.md` — for portfolio/product lists
   - `.github/copilot-summaries/research-by-product.md` — for research by product
   - `.github/copilot-summaries/research-by-team.md` — for research by team

2. **Fall back to directory search:**
   - Use `lexical-code-search` to find files: `path:/products/ask-va/ readme`
   - Use `semantic-code-search` for conceptual queries

3. **Verify the information exists:**
   - Some products may not have research directories
   - Some teams may not have complete documentation
   - State limitations clearly: "No research directories were found for this product."

### Issue: "File too large" or truncation warnings

**For large files:**
- Use `lexical-code-search` to find specific sections
- Use targeted queries: `path:/specific/file.md section-heading`
- Read only what you need, not the entire file
- For team/product/research queries, use the summary files in `.github/copilot-summaries/` instead

### Issue: "404 errors when following links"

**Common causes:**
- Files were moved or renamed
- URLs contain URL-encoded spaces (e.g., `User%20research`)
- Outdated paths in documentation

**Solutions:**
1. Decode URLs: `User%20research` → `User research`
2. Search for the file by name: `lexical-code-search: filename.md`
3. Check parent directory: If `products/ask-va/research/` gives 404, try `products/ask-va/design/User research/`

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
