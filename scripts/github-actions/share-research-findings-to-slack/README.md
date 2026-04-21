# Research Findings to Slack Scripts

This directory contains Python scripts that support the GitHub Actions workflow for automatically sharing research findings to Slack.

## Scripts

### `research_finder.py`
Handles finding and validating research files for sharing.

**Features:**
- Discovers research files based on filename patterns
- Validates file age (14-day waiting period)
- Validates report completeness (skips unfilled templates)
- Tracks previously shared files to avoid duplicates
- Supports manual file specification
- Provides helpful error messages with file suggestions

**Usage:**
```bash
python research_finder.py <event_name> [file_path] [ignore_time_delay] [ignore_completeness_check]
```

**Parameters:**
- `event_name`: GitHub Actions event type (`push`, `schedule`, `workflow_dispatch`)
- `file_path`: Optional specific file path for manual runs
- `ignore_time_delay`: Set to `true` to bypass 14-day waiting period
- `ignore_completeness_check`: Set to `true` to bypass report completeness validation

### `research_processor.py`
Extracts and formats content from research files for Slack notifications.

**Features:**
- Extracts titles from markdown headers
- Finds and formats key findings sections
- Gets git author information
- Determines file modification dates
- Extracts product path information

**Usage:**
```bash
python research_processor.py <file_path>
```

**Parameters:**
- `file_path`: Path to the research file to process

### `short_story_generator.py`
Generates a structured research short story using the GitHub Models API.

**Features:**
- Extracts prompt instructions from the `research-short-story-prompt.md` plaintext code block
- Sends the prompt + research report content to `openai/gpt-4o` via GitHub Models API
- Writes multi-line `SHORT_STORY` output to `$GITHUB_ENV` for workflow use

**Usage:**
```bash
python short_story_generator.py <prompt_template_path> <research_file_path>
```

**Parameters:**
- `prompt_template_path`: Path to short story prompt template markdown
- `research_file_path`: Path to research findings report markdown file

## Integration with GitHub Actions

These scripts are designed to work with the `share-research-findings-to-slack.yml` workflow:

1. **research_finder.py** outputs file eligibility information to `$GITHUB_OUTPUT`
2. **research_processor.py** outputs extracted content to `$GITHUB_ENV`
3. The workflow uses this information to format and send Slack notifications

## File Patterns Supported

The scripts look for files matching these patterns:
- `*findings.md`
- `*report.md`
- `*insights.md`
- `*research-findings.md`
- `*research-report.md`
- `*research-insights.md`
- `*user-research-findings.md`
- `*user-research-report.md`
- `*study-findings.md`
- `*study-report.md`

## Testing Locally

Both scripts can be tested locally outside of GitHub Actions:

```bash
# Test file discovery
cd /path/to/va.gov-team
python scripts/github-actions/share-research-findings-to-slack/research_finder.py schedule

# Test content processing
python scripts/github-actions/share-research-findings-to-slack/research_processor.py products/health-care/research/findings.md
```

## Dependencies

- Python 3.11+
- Git (for file history and author information)
- Standard Python libraries: `os`, `sys`, `re`, `json`, `subprocess`, `pathlib`, `datetime`, `typing`
