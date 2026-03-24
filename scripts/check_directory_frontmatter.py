#!/usr/bin/env python3
"""
Check a specific product or team directory for frontmatter issues.
Usage: python3 check_directory_frontmatter.py <directory_path>
Example: python3 check_directory_frontmatter.py products/health-care/checkin
"""

import os
import re
import sys
from pathlib import Path

# Placeholder patterns to detect
PLACEHOLDER_PATTERNS = [
    r'\[.*?\]',
    r'YYYY-MM-DD',
    r'YYYY-MM',
    r'\[Team.*?Name\]',
    r'\[TEAM.*?NAME\]',
    r'\[Product.*?Name\]',
    r'\[PRODUCT.*?NAME\]',
    r'\[AUTHOR.*?NAME\]',
    r'\[Date\]',
    r'\[TAG.*?\]',
    r'\[tag.*?\]',
    r'"[Tt]eam [Nn]ame"',
    r'"[Pp]roduct [Nn]ame"',
    r'"[Aa]uthor [Nn]ame"',
    r'\[X minutes\]',
    r'\[Brief description',
    r'path/to/',
    r'\[URL\]',
    r'\[Link',
    r'"N/A"',
]

def has_yaml_frontmatter(content):
    """Check if content starts with YAML frontmatter."""
    if not content.strip():
        return False
    return content.strip().startswith('---')

def extract_frontmatter(content):
    """Extract YAML frontmatter from content."""
    if not has_yaml_frontmatter(content):
        return None
    
    lines = content.split('\n')
    if not lines[0].strip() == '---':
        return None
    
    end_index = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            end_index = i
            break
    
    if end_index is None:
        return None
    
    return '\n'.join(lines[1:end_index])

def has_placeholder_data(frontmatter):
    """Check if frontmatter contains placeholder data."""
    if not frontmatter:
        return False
    
    for pattern in PLACEHOLDER_PATTERNS:
        if re.search(pattern, frontmatter):
            return True
    
    return False

def get_placeholder_examples(frontmatter, max_examples=3):
    """Get examples of placeholder data found in frontmatter."""
    if not frontmatter:
        return []
    
    examples = []
    for pattern in PLACEHOLDER_PATTERNS:
        matches = re.findall(pattern, frontmatter)
        for match in matches[:max_examples]:
            if match not in examples:
                examples.append(match)
            if len(examples) >= max_examples:
                break
        if len(examples) >= max_examples:
            break
    
    return examples

def check_directory(directory_path):
    """Check a directory for frontmatter issues."""
    if not os.path.isdir(directory_path):
        print(f"Error: Directory '{directory_path}' does not exist")
        sys.exit(1)
    
    results = {
        'no_frontmatter': [],
        'has_placeholder': [],
        'valid': []
    }
    
    # Find all markdown files
    for root, dirs, files in os.walk(directory_path):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
        
        for file in files:
            if not file.endswith('.md'):
                continue
            
            file_path = os.path.join(root, file)
            
            # Determine if it's a research plan or conversation guide
            file_lower = file.lower()
            is_research_plan = 'research-plan' in file_lower or 'research_plan' in file_lower or file_lower.startswith('plan')
            is_conversation_guide = 'conversation-guide' in file_lower or 'conversation_guide' in file_lower or 'conversation guide' in file_lower
            
            if not is_research_plan and not is_conversation_guide:
                continue
            
            # Read file content
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                continue
            
            file_type = 'research-plan' if is_research_plan else 'conversation-guide'
            
            if not has_yaml_frontmatter(content):
                results['no_frontmatter'].append((file_path, file_type))
            else:
                frontmatter = extract_frontmatter(content)
                if has_placeholder_data(frontmatter):
                    examples = get_placeholder_examples(frontmatter)
                    results['has_placeholder'].append((file_path, file_type, examples))
                else:
                    results['valid'].append((file_path, file_type))
    
    return results

def print_results(results, directory_path):
    """Print the results."""
    total = len(results['no_frontmatter']) + len(results['has_placeholder']) + len(results['valid'])
    issues = len(results['no_frontmatter']) + len(results['has_placeholder'])
    
    print("=" * 80)
    print(f"FRONTMATTER CHECK: {directory_path}")
    print("=" * 80)
    print()
    
    print(f"Total files checked: {total}")
    print(f"Files with issues: {issues}")
    print(f"Valid files: {len(results['valid'])}")
    print()
    
    if results['no_frontmatter']:
        print("-" * 80)
        print(f"FILES WITH NO FRONTMATTER ({len(results['no_frontmatter'])})")
        print("-" * 80)
        for file_path, file_type in results['no_frontmatter']:
            print(f"  [{file_type}] {file_path}")
        print()
    
    if results['has_placeholder']:
        print("-" * 80)
        print(f"FILES WITH PLACEHOLDER DATA ({len(results['has_placeholder'])})")
        print("-" * 80)
        for file_path, file_type, examples in results['has_placeholder']:
            print(f"  [{file_type}] {file_path}")
            if examples:
                print(f"    Examples: {', '.join(examples)}")
        print()
    
    if results['valid']:
        print("-" * 80)
        print(f"VALID FILES ({len(results['valid'])})")
        print("-" * 80)
        for file_path, file_type in results['valid']:
            print(f"  [{file_type}] {file_path}")
        print()
    
    # Summary
    print("=" * 80)
    if issues == 0:
        print("✅ ALL FILES HAVE VALID FRONTMATTER!")
    else:
        print(f"⚠️  {issues} file(s) need attention")
        print()
        print("Next steps:")
        print("1. Review the [Frontmatter Completion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-frontmatter-completion-guide.md)")
        print("2. Use GitHub Copilot prompts to auto-complete frontmatter")
        print("3. Replace all placeholder values with actual data")
    print("=" * 80)

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 check_directory_frontmatter.py <directory_path>")
        print("Example: python3 check_directory_frontmatter.py products/health-care/checkin")
        sys.exit(1)
    
    directory_path = sys.argv[1]
    results = check_directory(directory_path)
    print_results(results, directory_path)

if __name__ == '__main__':
    main()
