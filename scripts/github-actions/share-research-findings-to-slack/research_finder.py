#!/usr/bin/env python3
"""
Research Findings File Processor for VA.gov Team Repository

This script identifies and processes research findings files for sharing
to Slack, handling both manual and automatic discovery workflows.
"""

import os
import sys
import re
import json
import subprocess
import yaml
from pathlib import Path
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Tuple


class ResearchFileFinder:
    """Handles finding and processing research files."""

    # Minimum number of bracket placeholders (e.g. [Insert …]) that indicate
    # a report is still an unfilled template.
    BRACKET_PLACEHOLDER_THRESHOLD = 5
    
    def __init__(self):
        self.shared_files_log = Path(".github/workflows/shared-research-files.log")
        self.research_patterns = [
            r'.*[Ff]indings\.md$',
            r'.*[Rr]eport\.md$', 
            r'.*[Ii]nsights\.md$',
            r'.*[Rr]esearch-[Ff]indings\.md$',
            r'.*[Rr]esearch-[Rr]eport\.md$',
            r'.*[Rr]esearch-[Ii]nsights\.md$',
            r'.*[Uu]ser-[Rr]esearch-[Ff]indings\.md$',
            r'.*[Uu]ser-[Rr]esearch-[Rr]eport\.md$',
            r'.*[Ss]tudy-[Ff]indings\.md$',
            r'.*[Ss]tudy-[Rr]eport\.md$'
        ]
        
    def setup_tracking(self):
        """Ensure tracking directory and file exist."""
        self.shared_files_log.parent.mkdir(parents=True, exist_ok=True)
        self.shared_files_log.touch(exist_ok=True)
        
    def is_manual_run(self, event_name: str, file_path: str) -> bool:
        """Check if this is a manual workflow dispatch run."""
        return event_name == 'workflow_dispatch' and bool(file_path)
        
    def find_similar_files(self, file_path: str) -> List[str]:
        """Find similar files if the exact path doesn't exist."""
        search_dir = Path(file_path).parent
        search_name = Path(file_path).stem.lower()
        
        if not search_dir.exists():
            return []
            
        similar_files = []
        for md_file in search_dir.glob("*.md"):
            file_stem = md_file.stem.lower()
            # Check if either the search name contains parts of the file stem
            # or the file stem contains parts of the search name
            if (search_name in file_stem or 
                file_stem in search_name or
                any(part in file_stem for part in search_name.split('-') if len(part) > 2)):
                similar_files.append(str(md_file))
                
        return similar_files[:5]  # Limit to 5 suggestions
        
    def validate_manual_file(self, file_path: str) -> Tuple[bool, Optional[str]]:
        """Validate manually specified file exists and provide suggestions if not."""
        if Path(file_path).exists():
            return True, None
            
        # File doesn't exist, try to help user
        search_dir = Path(file_path).parent
        print(f"Error: Specified file not found: {file_path}")
        print(f"Looking for similar files in {search_dir}...")
        
        if search_dir.exists():
            md_files = list(search_dir.glob("*.md"))
            print(f"Markdown files in {search_dir}: {len(md_files)} found")
            
            similar_files = self.find_similar_files(file_path)
            if similar_files:
                print("Did you mean one of these?")
                for similar in similar_files:
                    print(f"  {similar}")
                    
        return False, f"File not found: {file_path}"
        
    def get_file_age_days(self, file_path: str) -> int:
        """Get the age of a file in days using git history."""
        try:
            # Get the last modification date from git
            result = subprocess.run(
                ['git', 'log', '-1', '--format=%ai', file_path],
                capture_output=True, text=True, check=True
            )
            
            if result.stdout.strip():
                # Parse git date format
                date_str = result.stdout.strip().split()[0]  # Get just the date part
                file_date = datetime.strptime(date_str, '%Y-%m-%d')
                age_days = (datetime.now() - file_date).days
                return age_days
            else:
                # If no git history, consider it new
                return 0
                
        except (subprocess.CalledProcessError, ValueError) as e:
            print(f"Warning: Could not determine age for {file_path}: {e}")
            return 0  # Default to 0 days if we can't determine age
            
    def is_file_shared(self, file_path: str) -> bool:
        """Check if file has already been shared."""
        if not self.shared_files_log.exists():
            return False
            
        try:
            with open(self.shared_files_log, 'r') as f:
                shared_files = f.read().splitlines()
            return file_path in shared_files
        except IOError:
            return False
            
    def is_report_complete(self, file_path: str) -> Tuple[bool, str]:
        """Check whether a research report has substantive content or is still an unfilled template.

        Researchers sometimes commit the findings template before any research
        has been conducted.  This method detects common template placeholder
        patterns so those files are skipped until they contain real content.

        Returns:
            (is_complete, reason) – *True* when the file looks like a real
            report; *False* with a human-readable reason when it still appears
            to be an unfilled template.
        """

        try:
            content = Path(file_path).read_text(encoding='utf-8')
        except UnicodeDecodeError:
            content = Path(file_path).read_text(encoding='latin-1')
        except IOError as exc:
            # If we can't read the file at all, let downstream steps deal
            # with the error – don't block on it here.
            print(f"Warning: Could not read {file_path} for completeness check: {exc}")
            return True, ""

        # ------------------------------------------------------------------
        # 1. YAML front-matter checks
        # ------------------------------------------------------------------
        front_matter = self._parse_front_matter(content)
        if front_matter:
            # Placeholder date still set to template default
            fm_date = str(front_matter.get('date', '')).strip()
            if fm_date.upper() == 'YYYY-MM-DD':
                return False, "Front-matter date is still the template placeholder (YYYY-MM-DD)"

            # key_findings still contain generic placeholders
            fm_findings = front_matter.get('key_findings', [])
            if isinstance(fm_findings, list) and fm_findings:
                placeholder_findings = {f.strip().lower() for f in fm_findings if isinstance(f, str)}
                template_defaults = {'finding 1', 'finding 2'}
                if template_defaults.issubset(placeholder_findings):
                    return False, "Front-matter key_findings still contain template placeholders"

        # ------------------------------------------------------------------
        # 2. Title still contains the "[Study]" placeholder
        # ------------------------------------------------------------------
        title_match = re.search(r'^#\s+\[Study\]\s+Research\s+Findings', content, re.MULTILINE | re.IGNORECASE)
        if title_match:
            return False, "Report title still contains the [Study] template placeholder"

        # ------------------------------------------------------------------
        # 3. Key Findings section contains only template placeholders
        # ------------------------------------------------------------------
        kf_match = re.search(
            r'^#{1,6}\s+Key\s+Findings\s*$(.*?)(?=^#{1,6}\s|\Z)',
            content,
            re.MULTILINE | re.DOTALL | re.IGNORECASE,
        )
        if kf_match:
            kf_body = kf_match.group(1)
            # Strip template boilerplate (italicized instructions, tip blocks, example links)
            kf_stripped = re.sub(r'>\s*\[!TIP\].*?(?=\n[^>]|\Z)', '', kf_body, flags=re.DOTALL)
            kf_stripped = re.sub(r'\[Example .+?\]\(.+?\)', '', kf_stripped, flags=re.IGNORECASE)
            kf_stripped = re.sub(r'\*[^*\n]+\*', '', kf_stripped)  # italic instructions

            # Collect the list items in the section
            items = re.findall(r'^\s*(?:\d+[\.\)]|[\-\*])\s+(.+)', kf_stripped, re.MULTILINE)
            if items:
                generic_item = re.compile(r'^Finding\s+(one|two|three|four|five|six|seven|eight|nine|ten|\d+)$', re.IGNORECASE)
                if all(generic_item.match(item.strip()) for item in items):
                    return False, "Key Findings section contains only template placeholder items"

        # ------------------------------------------------------------------
        # 4. High density of bracket placeholders like [Insert …]
        # ------------------------------------------------------------------
        bracket_placeholders = re.findall(
            r'\[(?:Insert\s+[^\]]+|Study|study)\]',
            content,
            re.IGNORECASE,
        )
        if len(bracket_placeholders) >= self.BRACKET_PLACEHOLDER_THRESHOLD:
            return False, f"Report contains {len(bracket_placeholders)} bracket placeholders (e.g. [Insert …])"

        return True, ""

    @staticmethod
    def _parse_front_matter(content: str) -> Optional[Dict]:
        """Parse YAML front matter from markdown content."""
        if not content.strip().startswith('---'):
            return None
        parts = content.split('---', 2)
        if len(parts) < 3:
            return None
        try:
            fm = yaml.safe_load(parts[1])
            return fm if isinstance(fm, dict) else None
        except yaml.YAMLError:
            return None

    def find_research_files(self, ignore_time_delay: bool = False, ignore_completeness_check: bool = False) -> List[str]:
        """Find research files that meet sharing criteria."""
        eligible_files = []
        
        # Search for research files in products directory
        products_dir = Path("products")
        if not products_dir.exists():
            print("Warning: products directory not found")
            return eligible_files
            
        for pattern in self.research_patterns:
            for file_path in products_dir.rglob("*.md"):
                if re.match(pattern, str(file_path)):
                    file_str = str(file_path)
                    
                    # Skip if already shared
                    if self.is_file_shared(file_str):
                        print(f"Skipping already shared file: {file_str}")
                        continue
                        
                    # Check age requirement (14+ days unless ignored)
                    if not ignore_time_delay:
                        age_days = self.get_file_age_days(file_str)
                        if age_days < 14:
                            print(f"Skipping recent file (age: {age_days} days): {file_str}")
                            continue

                    # Check report completeness (skip unfilled templates)
                    if not ignore_completeness_check:
                        is_complete, reason = self.is_report_complete(file_str)
                        if not is_complete:
                            print(f"Skipping incomplete report ({reason}): {file_str}")
                            continue
                            
                    eligible_files.append(file_str)
                    
        return eligible_files
        
    def process_files(self, event_name: str, manual_file_path: str = "", 
                    ignore_time_delay: bool = False,
                    ignore_completeness_check: bool = False) -> Dict:
        """Main processing logic for finding eligible files."""
        self.setup_tracking()
        
        result = {
            'eligible_files': '',
            'skip': 'false',
            'error_message': ''
        }
        
        # Handle manual run with specific file
        if self.is_manual_run(event_name, manual_file_path):
            is_valid, error_msg = self.validate_manual_file(manual_file_path)
            if is_valid:
                print(f"Manual run for specific file: {manual_file_path}")
                result['eligible_files'] = manual_file_path
            else:
                result['skip'] = 'true'
                result['error_message'] = error_msg
                
        else:
            # Automatic discovery
            eligible_files = self.find_research_files(ignore_time_delay, ignore_completeness_check)
            
            if eligible_files:
                # Process only the first file to avoid overwhelming Slack
                result['eligible_files'] = eligible_files[0]
                print(f"Found {len(eligible_files)} eligible files, processing: {eligible_files[0]}")
            else:
                print("No eligible research files found")
                result['skip'] = 'true'
                
        return result


def main():
    """Main entry point for the script."""
    if len(sys.argv) < 2:
        print("Usage: python research_finder.py <event_name> [file_path] [ignore_time_delay] [ignore_completeness_check]")
        sys.exit(1)
        
    event_name = sys.argv[1]
    manual_file_path = sys.argv[2] if len(sys.argv) > 2 else ""
    ignore_time_delay = sys.argv[3].lower() == 'true' if len(sys.argv) > 3 else False
    ignore_completeness_check = sys.argv[4].lower() == 'true' if len(sys.argv) > 4 else False
    
    finder = ResearchFileFinder()
    result = finder.process_files(event_name, manual_file_path, ignore_time_delay, ignore_completeness_check)
    
    # Output results for GitHub Actions
    github_output = os.environ.get('GITHUB_OUTPUT')
    if github_output:
        with open(github_output, 'a') as f:
            for key, value in result.items():
                f.write(f"{key}={value}\n")
    else:
        # For local testing
        print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()