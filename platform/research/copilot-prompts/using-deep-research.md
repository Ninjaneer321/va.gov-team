# Using Deep Research for Comprehensive Research Analysis

## What is Deep Research?

Deep research is a Copilot agent that reads and analyzes actual research findings files across the repository to answer complex questions about what we learned from research.

## When to Use Deep Research

### ✅ Use Deep Research For:

| Question Type | Example |
|--------------|---------|
| **Pain points & insights** | "What pain points did we discover in disability claims research?" |
| **Cross-study synthesis** | "What themes appear across all health tools research?" |
| **Research landscape** | "What do we know about evidence submission from research?" |
| **Impact tracing** | "How did profile research influence current design?" |
| **Pre-research discovery** | "What existing research should I review before planning a notifications study?" |

### ❌ Don't Use Deep Research For:

| Question Type | Use This Instead | Example |
|--------------|------------------|---------|
| **Study inventory** | Summary files | "What research has the Ask VA team conducted?" |
| **Quick lookups** | Summary files | "Link me to the 2024 dashboard study" |
| **Team information** | Summary files | "Who owns VAOS?" |

## Output Difference: Code Search vs. Deep Research

### Code Search Output (Fast but Limited)

```
Pain points discovered in disability claims research:
- Evidence submission confusion
- Unclear claim status
- Complex forms
- Lack of trust in VA system
- Unclear timelines

Source: Various research files
```

**Limitations:**
- No frequency counts
- No participant quotes
- No implementation tracking
- No cross-study synthesis

---

### Deep Research Output (Comprehensive)

```
Cross-Study Analysis: Disability Claims Research (2022-2025)

Top 5 Pain Points from 17 Studies:

## Pain Point #1: Inadequate Claim Status Information
**Studies mentioning this: 8 of 17**

- CST Discovery (2022)
- Decision Reviews (2023)
- Initial Decisions CST (2023)
- Evidence Submission (2023)
- Claim Contextualization (2024)
- Development Letters (2024)
- Document Status (2024)
- Notifications Research (2025)

**Participant Quotes:**

"I don't really feel like anything's happening. It's been in here since
January, basically it's saying that they're still looking into it."
— P16, CST Initial Decisions (2023)

"Veterans wanted to be able to see more details and more frequent status
updates in CST. They often felt like the claim was 'stuck'..."
— Decision Reviews (2023)

**Was this addressed?**
✅ Yes - Substantially addressed across multiple studies:
- Evidence Submission (2023) validated "What you need to do" UI
- Claim Contextualization (2024) added estimated timelines
- Document Status (2024/2025) improved upload transparency
- Development Letters (2024) added structured notifications

[...continues with 4 more pain points, all with quotes, implementation status,
and source links]

## Cross-Cutting Themes
- Reliance on VSOs as band-aid for VA complexity
- Contact Center as pressure valve when digital fails
- Underserved populations missing from research

## Source Files
[Links to all 17 research findings files analyzed]
```

**Benefits:**
- ✅ Frequency counts across studies
- ✅ Direct participant quotes
- ✅ Implementation tracking
- ✅ Cross-study patterns
- ✅ Source file links
- ✅ Comprehensive synthesis

---

## How to Trigger Deep Research

### Method 1: Copilot Should Trigger Automatically

When you ask questions about research findings, Copilot should recognize the query pattern and automatically trigger deep research.

**Example:**
```
You: What pain points did we discover in disability claims research?

Copilot: I'll use deep research to analyze findings across disability claims
research studies. This will take 2-3 minutes to read the research files and
synthesize themes.

[Deep research runs...]

Copilot: Based on analysis of 17 research studies from 2022-2025, here are
the top 5 pain points...
```

---

### Method 2: Manual Trigger (If Copilot Doesn't Offer)

If Copilot gives you a code search result instead of deep research, you can **manually request it**:

**Template:**
```
I need you to use the deep research agent to analyze [product/area] research.

Research query: "Analyze all research findings in products/[path]/ from [timeframe]
and identify:
1. Top 5 most frequently mentioned [pain points/themes/findings]
2. How many studies mentioned each
3. Participant quotes supporting each
4. Which were addressed in subsequent work
5. Links to source research findings files"
```

**Example:**
```
I need you to use the deep research agent to analyze disability claims research.

Research query: "Analyze all research findings in products/disability/ and
products/claim-appeal-status/ from 2022-2025 and identify:
1. Top 5 most frequently mentioned pain points
2. How many studies mentioned each pain point
3. Participant quotes supporting each pain point
4. Which pain points were addressed in subsequent work
5. Links to source research findings files"
```

---

### Method 3: Follow-up Deep Dive

If Copilot gives you a quick summary first, you can **request deep research as a follow-up**:

```
You: What pain points did we discover in disability claims research?

Copilot: [Gives code search summary with list of pain points]

You: Can you do a deep research analysis on this with quotes and cross-study synthesis?

Copilot: [Triggers deep research and provides comprehensive analysis]
```

---

## Common Use Cases

### Use Case 1: Pre-Research Planning

**Scenario:** You're planning new research and want to know what we already learned.

**Query:**
```
I'm planning research on claims status tracking. What existing research should
I review, and what do we already know?
```

**Expected output:**
- List of relevant studies
- Key findings from each
- Research methodologies used
- Gaps identified
- Recommendations that were/weren't implemented

---

### Use Case 2: Stakeholder Briefing

**Scenario:** You need to brief stakeholders on research insights.

**Query:**
```
Summarize all research on the authenticated experience from 2023-2024 for a
stakeholder presentation. Include key findings, participant quotes, and
implementation status.
```

**Expected output:**
- Executive summary
- Top insights with supporting evidence
- Participant demographics
- Implementation tracking
- Links for deep dives

---

### Use Case 3: Thematic Analysis

**Scenario:** You want to identify patterns across multiple products.

**Query:**
```
What accessibility issues appear most frequently across health tools research?
```

**Expected output:**
- Common accessibility themes
- Frequency across studies
- Specific examples and quotes
- Product-specific vs. universal issues
- Recommendations made

---

### Use Case 4: Research Impact

**Scenario:** You want to trace how research influenced design.

**Query:**
```
How did 2023 profile research influence the current design? Show the path from
findings to implementation.
```

**Expected output:**
- Research findings
- Design decisions documented
- Implemented features
- Mapping: recommendations → decisions → implementations
- Unimplemented recommendations

---

## Performance Expectations

| Tool | Response Time | Depth | Best For |
|------|--------------|-------|----------|
| **Summary files** | < 5 seconds | Metadata only | Quick lookups |
| **Code search** | 5-15 seconds | Lists findings | Basic questions |
| **Deep research** | 2-4 minutes | Comprehensive synthesis | Analysis & insights |

---

## Tips for Best Results

### ✅ DO:
- Be specific about timeframe: "from 2022-2025"
- Specify product paths: "products/disability/ and products/claim-appeal-status/"
- Request explicit outputs: "with participant quotes and implementation status"
- Ask for synthesis: "identify themes across studies"

### ❌ DON'T:
- Ask metadata questions ("How many studies?") — use summary files instead
- Expect instant results — deep research takes 2-4 minutes
- Ask for general overviews — be specific about what you want to know

---

## Troubleshooting

**Q: Copilot gave me a code search result instead of deep research. Is it wrong?**

A: Not necessarily. If you got a quick list that's "good enough," that works. But if you need comprehensive synthesis with quotes and implementation tracking, manually trigger deep research using Method 2 above.

---

**Q: Deep research is taking a long time. Is it stuck?**

A: Deep research typically takes 2-4 minutes. It's reading dozens of research files and synthesizing themes. Wait for it to complete.

---

**Q: Can I use deep research for non-research questions?**

A: Yes! Deep research can analyze any content in the repository. It's particularly useful for:
- Understanding complex code flows
- Tracing decisions through documentation
- Analyzing patterns across multiple files

---

## Examples from Real Queries

### Example 1: Disability Claims Pain Points

**Query:** "What pain points did we discover in disability claims research?"

**Deep Research Output:**
- Analyzed 17 studies from 2022-2025
- Identified 5 top pain points with frequency counts
- Provided 20+ participant quotes
- Tracked implementation status for each
- Identified cross-cutting themes
- Linked to all source files

[See full output example above]

---

### Example 2: Ask VA Research Landscape

**Query:** "What do we know about Ask VA from research? I'm planning new usability testing."

**Deep Research Output:**
- Listed 19 Ask VA research studies
- Summarized methodologies used
- Key findings from each study cohort
- Research gaps identified
- Recommendations for new research
- Links to all studies

---

## Questions?

Post in **#va-copilot** Slack channel or tag **@sstrassberg**
