#!/usr/bin/env python3
"""
Research Content Processor for Slack Notifications

Extracts and formats research findings content for sharing. 
"""

import os
import re
import sys
import subprocess
import unicodedata
import yaml
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional

def is_markdown_file(filename):
    """Check if a file has a markdown extension."""
    return os.path.splitext(filename)[1].lower() == '.md'

class ResearchContentProcessor:
    """Processes research files to extract key information."""
    
    def __init__(self, file_path: str):
        normalized_path = unicodedata.normalize('NFKC', str(file_path).strip())
        self.file_path = Path(normalized_path)
    
    def _parse_front_matter(self, content: str) -> Optional[Dict]:
        """Parse YAML front matter from markdown content."""
        # Check if content starts with YAML front matter (---)
        if not content.strip().startswith('---'):
            return None
        
        # Extract content between --- delimiters
        parts = content.split('---', 2)
        if len(parts) < 3:
            return None
        
        try:
            front_matter = yaml.safe_load(parts[1])
            return front_matter if isinstance(front_matter, dict) else None
        except yaml.YAMLError:
            return None
    
    def _is_metadata_line(self, line: str) -> bool:
        """Detect metadata lines including bold key-value pairs and jump-to links."""
        stripped = line.strip()
        
        # Match bold metadata like **Date:** or **Contacts:**
        if re.match(r'^\*\*[A-Za-z\s]+:\*\*', stripped):
            return True
        
        # Match jump-to links like "- [Key findings](#...)"
        if re.match(r'^[\-\*]\s*\[.+?\]\(#.+?\)', stripped):
            return True
        
        # Match standalone markdown links in brackets
        if re.match(r'^\[!\[', stripped) or re.match(r'^<', stripped):
            return True
        
        # Match plain metadata lines like "Date:", "Author:", etc.
        # Optionally preceded by bullet points or 0-2 asterisks
        if re.match(r'^[\*\-]?\s*\*{0,2}(last\s+updated|author|date|status|team|office|contacts):', stripped, re.IGNORECASE):
            return True
        
        return False
    
    def _is_template_boilerplate(self, line: str) -> bool:
        """Detect template instruction lines and example links."""
        stripped = line.strip()
        
        # Match italicized template instructions like "*Summarize the 5–10...*"
        # Single asterisks for italic, not double asterisks for bold
        if re.match(r'^\*[^*]+\*$', stripped):
            return True
        
        # Match example links like "[Example Key Findings](...)"
        if re.match(r'^\[Example\s+.+?\]\(.+?\)', stripped, re.IGNORECASE):
            return True
        
        # Match common template instruction patterns
        template_patterns = [
            r'^\*?Provide\s+',
            r'^\*?List\s+',
            r'^\*?Summarize\s+',
            r'^\*?Describe\s+',
            r'^\*?Add\s+a\s+link',
        ]
        for pattern in template_patterns:
            if re.match(pattern, stripped, re.IGNORECASE):
                return True
        
        return False
        
    def extract_title(self, content: str) -> str:
        """Extract title from markdown content."""
        lines = content.split('\n')
        
        # Look for H1 title first
        for line in lines:
            if line.startswith('# '):
                return line[2:].strip()
                
        # Fall back to H2 if no H1 found
        for line in lines:
            if line.startswith('## '):
                return line[3:].strip()
                
        return "Research Findings"
    
    def extract_summary(self, content: str) -> str:
        """Extract research summary/description from markdown content. 
        
        Looks for common summary section headers or extracts the first
        meaningful paragraph after the title.
        """
        # Priority 1: Check for YAML front matter research_goals
        front_matter = self._parse_front_matter(content)
        if front_matter and 'research_goals' in front_matter:
            goals = front_matter['research_goals']
            if isinstance(goals, list) and goals:
                # Join research goals into a readable sentence
                summary = '. '.join(str(goal).strip() for goal in goals if goal)
                if not summary.endswith('.'):
                    summary += '.'
                # Truncate if too long
                if len(summary) > 500:
                    summary = summary[:497] + "..."
                return summary
        
        lines = content.split('\n')
        
        # Common summary section patterns (case insensitive)
        summary_patterns = [
            r'^#{1,6}\s*(research\s+)?summary\s*$',
            r'^#{1,6}\s*overview\s*$',
            r'^#{1,6}\s*background\s*$',
            r'^#{1,6}\s*about\s+(this\s+)?(research|study)\s*$',
            r'^#{1,6}\s*description\s*$',
            r'^#{1,6}\s*introduction\s*$',
            r'^#{1,6}\s*purpose\s*$',
        ]
        
        summary_content = []
        in_summary_section = False
        summary_header_level = None
        
        # Priority 2: Look for explicit summary sections
        for i, line in enumerate(lines):
            # Check if we're entering a summary section
            if not in_summary_section:
                for pattern in summary_patterns:
                    if re.match(pattern, line.strip(), re.IGNORECASE):
                        in_summary_section = True
                        header_match = re.match(r'^(#{1,6})', line.strip())
                        summary_header_level = len(header_match.group(1)) if header_match else 1
                        break
                continue
            
            # If we're in summary section, collect content
            elif in_summary_section:
                # Stop at next section header of same or higher level
                if line.strip().startswith('#'):
                    current_header_match = re.match(r'^(#{1,6})', line.strip())
                    if current_header_match:
                        current_header_level = len(current_header_match.group(1))
                        if current_header_level <= summary_header_level:
                            break
                
                # Skip empty lines at start
                if not summary_content and not line.strip():
                    continue
                    
                # Skip metadata and template boilerplate
                if self._is_metadata_line(line) or self._is_template_boilerplate(line):
                    continue
                    
                summary_content.append(line)
                
                # Limit content length (first few paragraphs)
                if len(summary_content) >= 10:
                    break
        
        # Priority 3: Try to extract from "Research Goals" section
        if not summary_content:
            research_goals_pattern = r'^#{1,6}\s*research\s+goals?\s*$'
            in_goals_section = False
            goals_header_level = None
            
            for i, line in enumerate(lines):
                if not in_goals_section:
                    if re.match(research_goals_pattern, line.strip(), re.IGNORECASE):
                        in_goals_section = True
                        header_match = re.match(r'^(#{1,6})', line.strip())
                        goals_header_level = len(header_match.group(1)) if header_match else 1
                        continue
                
                elif in_goals_section:
                    # Stop at next section header of same or higher level
                    if line.strip().startswith('#'):
                        current_header_match = re.match(r'^(#{1,6})', line.strip())
                        if current_header_match:
                            current_header_level = len(current_header_match.group(1))
                            if current_header_level <= goals_header_level:
                                break
                    
                    # Skip empty lines, metadata, and template boilerplate
                    if not line.strip():
                        continue
                    if self._is_metadata_line(line) or self._is_template_boilerplate(line):
                        continue
                    
                    # Skip numbered goals (we want the descriptive paragraph)
                    if re.match(r'^\d+[\.\)]\s+\*?\*?.+', line.strip()):
                        continue
                    
                    # Collect meaningful paragraph text
                    if line.strip() and not line.strip().startswith('-') and not line.strip().startswith('*'):
                        summary_content.append(line)
                        if len(summary_content) >= 5:
                            break
        
        # Priority 4: If no explicit summary section found, try to get first paragraph after title
        if not summary_content:
            found_title = False
            for line in lines:
                if line.startswith('#'):
                    found_title = True
                    continue
                if found_title and line.strip():
                    # Skip metadata, template boilerplate, and links
                    if self._is_metadata_line(line) or self._is_template_boilerplate(line):
                        continue
                    
                    # Collect paragraph lines until empty line
                    if line.strip():
                        summary_content.append(line)
                    else:
                        if summary_content:
                            break
                    if len(summary_content) >= 5:
                        break
        
        if not summary_content:
            return "See full report for research context and methodology."
        
        # Clean up and format - preserve some structure but normalize
        summary_text = ' '.join(line.strip() for line in summary_content if line.strip())
        summary_text = re.sub(r'\s+', ' ', summary_text)  # Normalize whitespace
        
        # Truncate if too long (Slack has limits)
        if len(summary_text) > 500:
            summary_text = summary_text[:497] + "..."
            
        return summary_text
        
    def extract_key_findings(self, content: str) -> str:
        """Extract key findings section from markdown content. 
        
        Preserves numbered/bulleted list formatting for Slack.
        """
        # Priority 1: Check for YAML front matter key_findings
        front_matter = self._parse_front_matter(content)
        if front_matter and 'key_findings' in front_matter:
            findings = front_matter['key_findings']
            if isinstance(findings, list) and findings:
                # Format as numbered list for Slack
                formatted = []
                for i, finding in enumerate(findings, 1):
                    if finding:
                        formatted.append(f"{i}. {str(finding).strip()}")
                if formatted:
                    result = '\n'.join(formatted)
                    # Truncate if too long
                    if len(result) > 2000:
                        result = result[:1997] + "..."
                    return result
        
        lines = content.split('\n')
        
        # Look for "Key Findings" section at any header level (H1-H6) - case insensitive
        key_findings_pattern = r'^#{1,6}\s*key\s+findings\s*$'
        
        findings_content = []
        in_findings_section = False
        findings_header_level = None
        
        for i, line in enumerate(lines):
            # Check if we're entering the Key Findings section
            if not in_findings_section:
                if re.match(key_findings_pattern, line.strip(), re.IGNORECASE):
                    in_findings_section = True
                    # Capture the header level to know when to stop
                    findings_header_level = len(re.match(r'^(#{1,6})', line.strip()).group(1))
                    continue
            
            # If we're in findings section, collect content
            elif in_findings_section:
                # Stop at next section header of same or higher level
                if line.strip().startswith('#'):
                    current_header_match = re.match(r'^(#{1,6})', line.strip())
                    if current_header_match:
                        current_header_level = len(current_header_match.group(1))
                        if current_header_level <= findings_header_level:
                            break
                
                # Skip empty lines at start
                if not findings_content and not line.strip():
                    continue
                
                # Skip template boilerplate
                if self._is_template_boilerplate(line):
                    continue
                
                findings_content.append(line)
                
                # Limit content length
                if len(findings_content) >= 20:
                    break
                    
        # If no exact "Key Findings" section found, return helpful message
        if not findings_content:
            return "Key findings not specified, make sure there is an explicit Key Findings section."
        
        # Format findings for Slack mrkdwn
        formatted_findings = self._format_findings_for_slack(findings_content)
        
        # Truncate if too long
        if len(formatted_findings) > 2000:
            formatted_findings = formatted_findings[:1997] + "..."
            
        return formatted_findings
    
    def _format_findings_for_slack(self, lines: List[str]) -> str:
        """Format findings content for Slack mrkdwn format. 
        
        Converts markdown lists to Slack-compatible format.
        """
        formatted_lines = []
        finding_number = 0
        
        for line in lines:
            stripped = line.strip()
            
            # Skip empty lines but preserve them for spacing
            if not stripped:
                if formatted_lines and formatted_lines[-1] != '':
                    formatted_lines.append('')
                continue
            
            # Handle numbered lists (1. 2. 3. etc.)
            numbered_match = re.match(r'^(\d+)[.\)]\s*(.+)$', stripped)
            if numbered_match:
                finding_number += 1
                text = numbered_match.group(2)
                # Convert markdown bold to Slack bold
                text = self._convert_markdown_formatting(text)
                formatted_lines.append(f"{finding_number}. {text}")
                continue
            
            # Handle bullet points (-, *, •)
            bullet_match = re.match(r'^[\-\*•]\s*(.+)$', stripped)
            if bullet_match:
                finding_number += 1
                text = bullet_match.group(1)
                text = self._convert_markdown_formatting(text)
                formatted_lines.append(f"{finding_number}. {text}")
                continue
            
            # Handle continuation lines (indented content under a list item)
            if line.startswith('  ') or line.startswith('\t'):
                text = self._convert_markdown_formatting(stripped)
                formatted_lines.append(f"   {text}")
                continue
            
            # Regular paragraph text
            text = self._convert_markdown_formatting(stripped)
            formatted_lines.append(text)
        
        # Join with newlines to preserve list structure
        return '\n'.join(formatted_lines).strip()
    
    def _convert_markdown_formatting(self, text: str) -> str:
        """Convert common markdown formatting to Slack mrkdwn format. 
        
        Slack mrkdwn is similar but not identical to markdown. 
        """
        # Bold:  **text** or __text__ -> *text*
        text = re.sub(r'\*\*(.+?)\*\*', r'*\1*', text)
        text = re.sub(r'__(.+?)__', r'*\1*', text)
        
        # Italic: *text* or _text_ -> _text_ (Slack uses underscores)
        # Be careful not to convert already-converted bold
        text = re.sub(r'(?<!\*)_(.+?)_(?!\*)', r'_\1_', text)
        
        # Links: [text](url) -> <url|text>
        text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<\2|\1>', text)
        
        # Inline code: `code` stays the same in Slack
        
        return text
            
    def get_first_committed_date(self) -> str:
        """Get the original date of the research file.
        
        Priority:
        1. Date from YAML front matter
        2. First commit date using git log --diff-filter=A
        3. Last modified date as fallback
        """
        # Priority 1: Check YAML front matter for date field
        try:
            with open(self.file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            front_matter = self._parse_front_matter(content)
            if front_matter and 'date' in front_matter:
                date_value = front_matter['date']
                if date_value:
                    # Convert to string and extract date part (YYYY-MM-DD)
                    date_str = str(date_value).strip()
                    # Handle various date formats
                    date_match = re.match(r'(\d{4}-\d{2}-\d{2})', date_str)
                    if date_match:
                        return date_match.group(1)
        except (IOError, UnicodeDecodeError):
            pass
        
        # Priority 2: Get first commit date (when file was added)
        # Use --reverse to get chronological order, then take first line for efficiency
        try:
            result = subprocess.run(
                ['git', 'log', '--diff-filter=A', '--follow', '--format=%ai', '--reverse', str(self.file_path)],
                capture_output=True, text=True, check=True
            )
            
            if result.stdout.strip():
                # Get the first line (earliest commit)
                first_commit = result.stdout.strip().split('\n')[0]
                return first_commit.split()[0]  # Just the date part
        except subprocess.CalledProcessError:
            pass
        
        # Priority 3: Fall back to last modified date
        try:
            result = subprocess.run(
                ['git', 'log', '-1', '--format=%ai', str(self.file_path)],
                capture_output=True, text=True, check=True
            )
            
            if result.stdout.strip():
                return result.stdout.strip().split()[0]  # Just the date part
            else:
                return datetime.now().strftime('%Y-%m-%d')
                
        except subprocess.CalledProcessError:
            return datetime.now().strftime('%Y-%m-%d')
            
    def get_product_path(self) -> str:
        """Extract product/team path from file location."""
        path_parts = self.file_path.parts
        if len(path_parts) >= 3 and path_parts[0] == 'products':
            return '/'.join(path_parts[1:3])  # e.g., "health-care/appointments"
        return str(self.file_path.parent)
        
    def process_file(self) -> Dict[str, str]:
        """Process the research file and extract all key information."""
        if not self.file_path.exists():
            raise FileNotFoundError(f"Research file not found: {self.file_path}")
            
        try:
            with open(self.file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            # Try with different encoding if UTF-8 fails
            with open(self.file_path, 'r', encoding='latin-1') as f:
                content = f.read()
                
        return {
            'RESEARCH_FILE': str(self.file_path),
            'RESEARCH_TITLE': self.extract_title(content),
            'RESEARCH_SUMMARY': self.extract_summary(content),
            'KEY_FINDINGS': self.extract_key_findings(content),
            'STUDY_DATE': self.get_first_committed_date(),
            'PRODUCT_PATH': self.get_product_path()
        }


def main():
    """Main entry point for the script."""
    if len(sys.argv) < 2:
        print("Usage: python research_processor.py <file_path>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    
    try:
        processor = ResearchContentProcessor(file_path)
        result = processor.process_file()
        
        # Output to GitHub Actions environment
        github_env = os.environ.get('GITHUB_ENV')
        if github_env:
            with open(github_env, 'a') as f:
                for key, value in result.items():
                    if '\n' in value:  # Multi-line values need special handling
                        f.write(f"{key}<<EOF\n{value}\nEOF\n")
                    else:
                        f.write(f"{key}={value}\n")
        
        print(f"Successfully processed: {file_path}")
        print(f"Title: {result['RESEARCH_TITLE']}")
        print(f"Summary length: {len(result['RESEARCH_SUMMARY'])} characters")
        print(f"Findings length: {len(result['KEY_FINDINGS'])} characters")
        
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
