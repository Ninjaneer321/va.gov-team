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
| Who works on product X? | `.github/copilot-summaries/product-teams.md` | "Who is the product owner for Ask VA?" |
| What research exists for product X? | `.github/copilot-summaries/research-by-product.md` | "What research has been done on Ask VA?" |
| What has team Y researched? | `.github/copilot-summaries/research-by-team.md` | "What research has the Ask VA team conducted?" |
| Portfolio/crew hierarchy? | `.github/copilot-summaries/portfolios.md` | "What teams are in Digital Experience?" |
| **Browse findings by theme** | `.github/copilot-summaries/research-findings-index.md` | "What research exists about navigation issues?" |

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

### Quick Reference: Findings Index

For questions about **themes or patterns** across research, use the findings index:

**Use `.github/copilot-summaries/research-findings-index.md` when:**
- User asks about a theme: "What research exists about navigation?"
- User wants to browse patterns: "What are common accessibility issues?"
- User wants product overview: "What are the top findings for disability claims?"

**The index provides:**
- Findings grouped by theme (with study counts)
- Findings grouped by product (with top themes)
- Quick links to source studies

**Example queries:**
```
"What research exists about evidence submission?"
→ Read research-findings-index.md, search for "Evidence" theme

"What are the top findings for Ask VA?"
→ Read research-findings-index.md, navigate to "Ask VA" section

"What navigation issues appear across products?"
→ Read research-findings-index.md, find "Navigation" theme
```

**When to use deep research instead:**
- User wants comprehensive synthesis with quotes
- User wants frequency analysis ("mentioned in X studies")
- User wants implementation tracking
- User needs detailed cross-study patterns

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

### Note About Team Documentation

Some teams have their documentation in the **va.gov-team-sensitive** private repository.

In summary files, these teams are marked with 🔒 and will show:
```
- **README**: `teams/health-portfolio/hydra/README.md` *(in va.gov-team-sensitive — requires access)*
```

**When responding to users:**
- Don't generate links to va.gov-team-sensitive (they won't work for most users)
- Note that documentation is in the private repo
- Suggest contacting the team via Slack (channel listed in summary if available)
- Users with sensitive repo access can navigate to the path manually

### Team Personnel and Roles

When the user asks about who works on a product, **read `product-teams.md` first**. It contains team rosters
extracted from public product README files (e.g., `products/ask-va/README.md`).

- "Who is the product owner for Ask VA?" → Read `product-teams.md`, find the Ask VA section
- "Who designs for the Virtual Agent?" → Read `product-teams.md`, find the Virtual Agent section
- "Who manages the Authenticated Patterns team?" → Look for **Product Manager** or **Delivery Manager** role

If a product is not listed in `product-teams.md`, suggest the user check the product README directly:
> "Team member details for [product name] are not in the summary. Check `products/[product-name]/README.md` for the most up-to-date roster, or contact the team via Slack."

### Technical Note

`.github/knowledge-graph.json` exists in the repository and is auto-generated weekly. It is used **for automation and workflows only**. **Do not read it directly** when answering user questions - use the summary files in `.github/copilot-summaries/` instead.

The summary files are generated FROM the knowledge graph, so they contain the same information in a more accessible format.

### Output Format for Research Queries

When answering questions about research studies, follow these formatting guidelines:

#### For team research queries ("What research has team X conducted?")

Present results in this format:

```
The **[Team Name]** team has conducted **N research studies**:

## Recent Research (YYYY-YYYY)

### [Study Title](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/path/to/study)

- **Date**: YYYY-MM
- **Methodology**: [method type]
- **Participants**: [participant types]
- **Files**:
  - [Research Plan](https://github.com/.../plan.md)
  - [Findings](https://github.com/.../findings.md)
  - [Conversation Guide](https://github.com/.../guide.md)

[Repeat for each study]
```

#### For product research queries ("What research exists for product X?")

Present results in this format:

```
## Research for [Product Name]

[Product Name] has **N research studies** documented:

### [Study Title](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/path/to/study)

- **Date**: YYYY-MM
- **Conducted by**: [Team Name]
- **Methodology**: [method type]
- **Participants**: [participant types]

[Repeat for each study]
```

#### Important formatting rules

1. ✅ **Always hyperlink study titles** - Every study heading should be a clickable link
2. ✅ **Hyperlink all file references** - Research plans, findings, conversation guides should be links
3. ✅ **Use the `master` branch** - This repo uses `master`, not `main`
4. ✅ **Include study counts** - State "N research studies" in opening sentence
5. ✅ **Organize by date descending** - Most recent studies first
6. ✅ **Group by year** - When listing 10+ studies, add year headings for readability
7. ✅ **Preserve existing links** - Summary files contain complete URLs; use them directly

#### GitHub URL Construction (CRITICAL)

**This repository uses the `master` branch, not `main`.**

When constructing or copying GitHub URLs:

✅ **Correct:**
- `https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/...`
- `https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/.../file.md`

❌ **Wrong (creates 404 errors):**
- `https://github.com/department-of-veterans-affairs/va.gov-team/tree/main/products/...`
- `https://github.com/department-of-veterans-affairs/va.gov-team/blob/main/products/.../file.md`

**URL format reference:**
- Study directories: `/tree/master/[path]`
- Markdown files: `/blob/master/[path]/file.md`

If you encounter a path in the summary files, it should already be formatted as a complete hyperlink. Use the link as-is.

### Handling Broken Research Links

Due to inconsistent naming conventions in research directories, some direct links may result in 404 errors.

**If a user reports a broken link:**

1. ✅ **Use the search fallback link** - Summary files include a search link that will find the research
2. ✅ **Try URL variations** - The path might use different capitalization or hyphens:
   - `User research` vs `user-research` vs `User Research`
   - `2025-02` vs `2025-02-study` vs `2025 02`
3. ✅ **Search by keywords** - Use GitHub search: `path:products/[product-name] [study-keywords]`

**When presenting research links to users:**

- Include both the direct link and search link from the summary file
- If a direct link seems problematic (contains spaces, special characters), emphasize the search link:
  ```
  Note: If the direct link doesn't work, use the search link to locate this research.
  ```

**URL encoding reference:**
- Space → `%20`
- Parentheses → `%28` and `%29`
- Quotes → `%22`

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

---

## Deep Research Analysis for Research Findings

> 📘 **New to deep research?** See the [Deep Research User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/using-deep-research.md) for:
> - When to use deep research vs. summary files
> - How to manually trigger deep research if Copilot doesn't offer it
> - Output quality comparison (code search vs. deep research)
> - Common use cases with examples

The summary files (`.github/copilot-summaries/*.md`) provide **metadata** about research studies (who, when, methodology). For questions that require **analyzing actual research content and findings**, use the **deep research agent**.

### 🚨 CRITICAL: When to Trigger Deep Research

**For the following query patterns, you MUST use the deep research agent:**

| If the user asks... | Trigger deep research | Example |
|---------------------|----------------------|---------|
| "What **pain points** did we discover..." | ✅ YES | "What pain points did we discover in disability claims research?" |
| "What **themes** appear across..." | ✅ YES | "What themes appear across health tools research?" |
| "What do we **know about** [topic]..." | ✅ YES | "What do we know about evidence submission?" |
| "**Summarize** research on..." | ✅ YES | "Summarize all profile research from 2023-2024" |
| "How did research **influence**..." | ✅ YES | "How did research influence the dashboard design?" |
| "What **findings** emerged from..." | ✅ YES | "What findings emerged from Ask VA studies?" |
| "What research exists for [product]?" | ❌ NO (use summaries) | "What research exists for Ask VA?" |
| "How many studies has [team] done?" | ❌ NO (use summaries) | "How many studies has the Identity team done?" |

**Keywords that should trigger deep research:**
- "pain points"
- "themes"
- "findings"
- "what do we know"
- "summarize"
- "insights"
- "quotes"
- "what did we learn"
- "synthesis"

### Why Deep Research Matters

**Code search output (inadequate):**
```
Pain points discovered:
- Evidence submission confusion
- Unclear claim status
- Complex forms
[...flat list, no context]
```

**Deep research output (comprehensive):**
```
Top 5 Pain Points from Analysis of 17 Studies (2022-2025):

1. Inadequate Claim Status Information (mentioned in 8 studies)
   - "I don't really feel like anything's happening..." (P16, CST Initial Decisions 2023)
   - Addressed: Yes - Claim Contextualization (2024) added timelines
   
2. Evidence Gathering Confusion (mentioned in 9 studies)
   - "If these folks are going to file on their own, they need details..." (P5, Decision Reviews 2023)
   - Addressed: Partially - Claim Evidence (2024) tested new guidance
   
[...synthesis with quotes, implementation status, cross-study patterns]
```

**The difference:** Deep research reads actual findings files, extracts quotes, counts patterns across studies, and tracks implementation.

### Decision Matrix: When to Use What

| User Question Type | Tool to Use | Why |
|-------------------|-------------|-----|
| "What research has team X conducted?" | **Summary files** | Listing studies with metadata |
| "How many studies exist for product Y?" | **Summary files** | Counting/inventory |
| "Link me to the 2024 dashboard study" | **Summary files** | Quick reference lookup |
| "What pain points did we discover in research?" | **Deep research** | Need to read findings from files |
| "What themes appear across multiple studies?" | **Deep research** | Cross-study synthesis |
| "How did research influence design decisions?" | **Deep research** | Tracing impact through documents |
| "What do we know about [topic] from research?" | **Deep research** | Landscape analysis |

### Quick Decision Tree

```
User asks research question
  ↓
Does query ask about CONTENT of research?
(pain points, themes, findings, quotes, insights)
  ↓ YES                              ↓ NO (asks about METADATA)
  ↓                                   ↓
Trigger deep research agent           Does query ask WHO/WHEN/HOW MANY?
Tell user: "This will take             (which team, how many studies, when was research)
2-3 minutes"                           ↓ YES
  ↓                                   ↓
Return synthesis with                  Use summary files
quotes and citations                   Return quick answer in <5 seconds
```

### When to Use Deep Research

Trigger the deep research agent for these query types:

#### 1. Pain Point Analysis

**TRIGGER PHRASES (use deep research when query contains these):**
- "What pain points did we discover..."
- "What are the top usability issues..."
- "What frustrations do Veterans report..."
- "What problems were identified..."
- "What issues came up in research..."

**Example user query:**
```
What pain points did we discover in disability claims research?
```

**You MUST respond with:**
```
I'll use deep research to analyze findings across disability claims research studies.
This will take 2-3 minutes to read the research files and synthesize themes.

[Then trigger deep research agent]
```

**Deep research query to use:**
```
Analyze all research findings in products/disability/ and products/claim-appeal-status/
from 2022-2025 and identify:
1. Top 5 most frequently mentioned pain points
2. How many studies mentioned each pain point
3. Participant quotes supporting each pain point
4. Which pain points were addressed in subsequent work
5. Links to source research findings files
```

#### 2. Thematic Analysis

**TRIGGER PHRASES (use deep research when query contains these):**
- "What themes appear across..."
- "What usability patterns emerge..."
- "What accessibility issues are reported..."
- "What trends do we see in..."
- "What patterns exist across studies..."

**Example user query:**
```
What themes appear across health tools research?
```

**You MUST respond with:**
```
I'll use deep research to identify themes across health tools research studies.
This will take 2-3 minutes to read the research files and synthesize patterns.

[Then trigger deep research agent]
```

**Deep research query to use:**
```
Search all research in products/[area]/ and teams/[team]/ for studies from [timeframe].
Extract and synthesize:
1. Recurring themes across studies
2. Frequency of each theme (count of studies mentioning it)
3. Evolution of themes over time
4. Supporting evidence and participant quotes
5. Links to source studies for each theme
```

#### 3. Journey Mapping

**TRIGGER PHRASES (use deep research when query contains these):**
- "What do we know about the Veteran journey for..."
- "What pain points exist across the [process] experience..."
- "Map the touchpoints in..."
- "What is the user experience for..."
- "Walk me through the research on..."

**Example user query:**
```
What do we know about the Veteran journey for filing a disability claim?
```

**You MUST respond with:**
```
I'll use deep research to map the Veteran journey for filing a disability claim
based on research findings. This will take 2-3 minutes.

[Then trigger deep research agent]
```

**Deep research query to use:**
```
Search all research in products/ and teams/ for studies involving [task/process].
Extract:
1. User journey touchpoints mentioned in research
2. Pain points at each step
3. Unmet needs and feature requests
4. Participant quotes describing their experience
5. Suggested improvements from findings
6. Which improvements have been implemented
```

#### 4. Research Impact Tracing

**TRIGGER PHRASES (use deep research when query contains these):**
- "How did research influence..."
- "What recommendations were implemented..."
- "Show me the path from research to..."
- "What impact did research have on..."
- "Were research recommendations followed..."

**Example user query:**
```
How did 2023 profile research influence the current design?
```

**You MUST respond with:**
```
I'll use deep research to trace the impact of 2023 profile research on current
design decisions. This will take 2-3 minutes.

[Then trigger deep research agent]
```

**Deep research query to use:**
```
Trace the impact of research from [timeframe]:
1. Read research findings from [product/team path]
2. Find design decisions documented in product folders
3. Identify implemented features mentioned in findings
4. Map: recommendations → decisions → implementations
5. Note recommendations that weren't implemented and why (if documented)
```

#### 5. Pre-Research Discovery

**TRIGGER PHRASES (use deep research when query contains these):**
- "What existing research should I review before..."
- "What do we already know about..."
- "Summarize prior research on..."
- "What research should I read before..."
- "What has been studied about..."

**Example user query:**
```
What existing research should I review before planning a notifications study?
```

**You MUST respond with:**
```
I'll use deep research to find and summarize all research related to notifications.
This will take 2-3 minutes to analyze the relevant studies.

[Then trigger deep research agent]
```

**Deep research query to use:**
```
Find all research related to [topic]:
1. Search products/ and teams/ directories for relevant studies
2. Summarize methodologies used in each study
3. List key findings and recommendations
4. Identify research gaps or unanswered questions
5. Note which recommendations were implemented
6. Suggest what new research could explore
```

#### 6. Cross-Product Synthesis

**TRIGGER PHRASES (use deep research when query contains these):**
- "What do we know about [feature] across all products..."
- "How do different teams approach..."
- "Compare research findings for..."
- "What insights exist across..."
- "What have multiple teams learned about..."

**Example user query:**
```
Compare research findings for authentication across all products.
```

**You MUST respond with:**
```
I'll use deep research to compare authentication research across products.
This will take 2-3 minutes to analyze findings from multiple teams.

[Then trigger deep research agent]
```

**Deep research query to use:**
```
Search across products/[product-1]/, products/[product-2]/, etc. for research on [topic].
Synthesize:
1. How each product team approached the topic
2. Common findings across products
3. Unique findings specific to each product
4. Contradictions or disagreements in findings
5. Best practices that emerged
6. Links to all source studies
```

#### 7. Stakeholder Briefings

**TRIGGER PHRASES (use deep research when query contains these):**
- "Summarize all research on..."
- "What are the key insights from..."
- "Give me an executive summary of..."
- "Prepare a research briefing on..."
- "What should stakeholders know about..."

**Example user query:**
```
Summarize all research on the authenticated experience from 2023-2024 for a
stakeholder presentation.
```

**You MUST respond with:**
```
I'll use deep research to create a comprehensive briefing on authenticated experience
research from 2023-2024. This will take 2-3 minutes.

[Then trigger deep research agent]
```

**Deep research query to use:**
```
Analyze all research in [product path] from [timeframe]:
1. Executive summary (2-3 paragraphs)
2. Top 5 key findings with supporting evidence
3. Participant demographics and sample sizes
4. Methodologies used
5. Recommendations made and implementation status
6. Research gaps to address
7. Links to all studies for deep dives
```

### Example Conversations

#### Example 1: Pain Point Analysis

**User:** What pain points exist in the authenticated experience?

**Copilot response:**

```
I'll use deep research to analyze findings across all authenticated experience
research studies. This will take 2-3 minutes to explore the research files.

[Triggers deep research agent with detailed query]
[Agent reads research files in products/identity-personalization/]
[Agent extracts findings, quotes, synthesizes themes]

Based on analysis of research studies in the authenticated experience:

## 1. Profile Updates Are Confusing (mentioned in multiple studies)

**Pain Point:** Veterans don't understand which profile to update

**Evidence:**
- "I updated my address on VA.gov but it didn't change in MHV"
  (Personal Info Study, linked)
- Participants attempted to update wrong profile first
  (MHV Integration Study, linked)

**Studies:**
- [Personal Information Research](link-to-study)
- [MHV Profile Integration](link-to-study)
[...more studies]

## 2. Dashboard Navigation Confusion (mentioned in multiple studies)

**Pain Point:** Veterans can't find submitted forms or claims in My VA dashboard

**Evidence:**
- Participants couldn't locate their submitted inquiry
  (Dashboard Study, linked)

**Studies:**
- [Dashboard Usability](link-to-study)
- [My VA 2.0 Research](link-to-study)
[...more studies]

Would you like me to deep dive into any specific pain point?
```

#### Example 2: Pre-Research Discovery

**User:** What existing research should I review before planning a claims status study?

**Copilot response:**

```
I'll search all research related to claims status tracking and summarize
what we already know. This will take 2-3 minutes.

[Triggers deep research]
[Searches products/claim-status/, products/disability-benefits/, products/track-claim/]
[Reads findings, extracts key insights]

Found research studies related to claims status tracking:

## Key Findings to Consider

### 1. Notification Expectations
- **Finding:** Veterans expect email/SMS when status changes
- **Source:** Claims Status Notifications Study (linked)
- **Implemented:** Yes, email notifications added

### 2. Status Clarity
- **Finding:** Veterans don't understand claim status terminology
- **Quote:** "What does 'gathering evidence' mean? How long will this take?"
- **Source:** Claims Status Usability (linked)
- **Implemented:** Partially, plain language updates in progress

[...more findings]

## Methodologies Used
- Usability testing (moderated remote)
- Interviews
- Card sorting (status terminology)

## Research Gaps Identified
1. ❌ No research on claims status for dependents/survivors
2. ❌ Limited research on status updates for supplemental claims
3. ❌ No studies on multi-claim status viewing

## Recommendations for Your Study
Based on gaps and unanswered questions:
- Consider including dependents/survivors as participants
- Test status clarity with new plain language updates
- Explore multi-claim status management workflows

## All Relevant Studies
[Links to all studies with dates and key focus areas]
```

### How Copilot Should Decide

When a user asks a research question, follow this logic:

```
1. Is this asking for study METADATA (who, when, how many)?
   → YES: Use summary files (.github/copilot-summaries/)
   → NO: Continue to step 2

2. Is this asking about FINDINGS, THEMES, or INSIGHTS from research?
   → YES: Use deep research agent
   → NO: Continue to step 3

3. Does this require reading MULTIPLE research files to answer?
   → YES: Use deep research agent
   → NO: Use summary files or direct file lookup
```

### Deep Research Best Practices

When triggering the deep research agent:

1. **Be specific in the query** - Include product paths, timeframes, specific questions
2. **Request structured output** - Ask for numbered lists, themes, evidence
3. **Ask for citations** - Always request links to source studies
4. **Set expectations** - Tell user it will take 2-3 minutes
5. **Offer follow-ups** - After summary, offer to deep dive on specific findings

### Output Format for Deep Research Results

When presenting deep research findings, use this structure:

```markdown
Based on analysis of [N] research studies from [timeframe]:

## Top Finding 1: [Finding Title]

**Evidence:**
- [Specific data point] ([Study Name, Date](link-to-study))
- [Quote from participant] ([Study Name, Date](link-to-study))

**Impact:** [What was done as a result, if known]

## Top Finding 2: [Finding Title]

[etc...]

## Related Studies
- [Study 1](link-to-study) - Key focus area
- [Study 2](link-to-study) - Key focus area

Would you like me to explore any of these findings in more detail?
```

### Performance Notes

- **Summary file queries:** < 5 seconds
- **Deep research queries:** 2-4 minutes (reading and analyzing files)
- Set user expectations appropriately

---

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
  - `.github/copilot-summaries/product-teams.md`
  - `.github/copilot-summaries/research-by-team.md`
  - `.github/copilot-summaries/research-by-product.md`
  - `.github/copilot-summaries/portfolios.md`
- After making 3+ tool calls, evaluate if you have enough information to answer
- Provide partial answers if complete data isn't available: "Based on available information..."
- State what's missing: "I found X but need to search for Y to complete the answer"

### Issue: "Summary files don't have the information I need"

**Solutions:**
1. **Check all six summary files:**
   - `.github/copilot-summaries/teams.md` — for team ownership and research
   - `.github/copilot-summaries/product-teams.md` — for product team rosters (who works on what)
   - `.github/copilot-summaries/portfolios.md` — for portfolio/product lists
   - `.github/copilot-summaries/research-by-product.md` — for research by product
   - `.github/copilot-summaries/research-by-team.md` — for research by team
   - `.github/copilot-summaries/research-findings-index.md` — for findings by theme or product

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
