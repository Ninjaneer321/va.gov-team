#!/usr/bin/env python3
"""
Improved frontmatter audit script with more precise placeholder detection.

A file is only considered to have "placeholder data" if it has ACTUAL placeholders
in the PRIMARY metadata fields:
- title contains [Team, Product, Date] or similar bracketed placeholders
- date is literally "YYYY-MM-DD" (not a real date)
- team contains [Team Name] or similar bracketed placeholders
- product contains [Product Name] or similar bracketed placeholders

Minor placeholders in less critical fields (like N/A in facility names) don't
count as having placeholder data if the primary fields are complete.
"""

import os
import re
import yaml
import csv
from pathlib import Path
from collections import defaultdict

# Primary placeholder patterns that indicate incomplete frontmatter
PRIMARY_PLACEHOLDER_PATTERNS = [
    r'\[Team,?\s*Product,?\s*Date\]',  # [Team, Product, Date]
    r'\[Team\s+Name\]',                  # [Team Name]
    r'\[Product\s+Name\]',               # [Product Name]
    r'\[AUTHOR\s+NAME\]',                # [AUTHOR NAME]
    r'YYYY-MM-DD',                        # YYYY-MM-DD (literal date placeholder)
    r'\[Enter\s+date.*?\]',              # [Enter date YYYY-MM-DD]
    r'\[Enter\s+name.*?\]',              # [Enter name]
    r'\[Enter\s+dates.*?\]',             # [Enter dates YYYY-MM-DD to YYYY-MM-DD]
    r'path/to/',                          # path/to/...
]

# These patterns in the PRIMARY fields indicate placeholders
def has_primary_placeholder(text):
    """Check if text has a primary placeholder pattern."""
    if not text or not isinstance(text, str):
        return False
    
    for pattern in PRIMARY_PLACEHOLDER_PATTERNS:
        if re.search(pattern, text, re.IGNORECASE):
            return True
    return False

def extract_frontmatter(file_path):
    """Extract YAML frontmatter from markdown file."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Check for frontmatter
        if not content.strip().startswith('---'):
            return None, 'no_frontmatter'
        
        # Extract frontmatter
        parts = content.split('---', 2)
        if len(parts) < 3:
            return None, 'no_frontmatter'
        
        frontmatter_text = parts[1]
        
        try:
            fm_data = yaml.safe_load(frontmatter_text)
            if not fm_data or not isinstance(fm_data, dict):
                return None, 'invalid_yaml'
            
            # Check PRIMARY fields for placeholders
            primary_fields_to_check = []
            
            # Title
            if 'title' in fm_data:
                primary_fields_to_check.append(('title', str(fm_data['title'])))
            
            # Date fields
            if 'date' in fm_data:
                primary_fields_to_check.append(('date', str(fm_data['date'])))
            if 'date_created' in fm_data:
                primary_fields_to_check.append(('date_created', str(fm_data['date_created'])))
            if 'last_updated' in fm_data:
                primary_fields_to_check.append(('last_updated', str(fm_data['last_updated'])))
            if 'last_modified' in fm_data:
                primary_fields_to_check.append(('last_modified', str(fm_data['last_modified'])))
            
            # Team/Product
            if 'team' in fm_data:
                primary_fields_to_check.append(('team', str(fm_data['team'])))
            if 'product' in fm_data:
                primary_fields_to_check.append(('product', str(fm_data['product'])))
            if 'author' in fm_data:
                primary_fields_to_check.append(('author', str(fm_data['author'])))
            
            # Check for placeholders in primary fields
            placeholder_examples = []
            for field_name, field_value in primary_fields_to_check:
                if has_primary_placeholder(field_value):
                    # Extract the placeholder pattern
                    for pattern in PRIMARY_PLACEHOLDER_PATTERNS:
                        matches = re.findall(pattern, field_value, re.IGNORECASE)
                        if matches:
                            placeholder_examples.extend(matches)
            
            if placeholder_examples:
                # Remove duplicates and return
                unique_placeholders = list(set(placeholder_examples))
                return fm_data, 'has_placeholder', unique_placeholders
            else:
                return fm_data, 'valid'
            
        except yaml.YAMLError as e:
            return None, 'invalid_yaml'
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return None, 'error'

def is_research_plan(filepath):
    """Determine if file is a research plan."""
    name = filepath.lower()
    
    # Explicit research plan patterns
    if 'research-plan' in name or 'research_plan' in name:
        return True
    if name.endswith('research-plan.md') or name.endswith('research_plan.md'):
        return True
    
    # Files that look like plans but aren't conversation guides
    if ('plan' in name or 'planning' in name) and 'conversation' not in name and 'guide' not in name:
        # But exclude rollout plans, strategic plans, etc
        if any(x in name for x in ['rollout', 'strategic', 'communication', 'launch', 'meeting', 'sprint']):
            return False
        return True
    
    return False

def is_conversation_guide(filepath):
    """Determine if file is a conversation guide."""
    name = filepath.lower()
    
    # Explicit conversation guide patterns
    if 'conversation-guide' in name or 'conversation_guide' in name:
        return True
    if 'conversationguide' in name:
        return True
    if name.endswith('conversation-guide.md') or name.endswith('conversation_guide.md'):
        return True
    if 'conversation guide' in name:
        return True
    
    return False

def scan_directory(base_path):
    """Scan directory for research plans and conversation guides."""
    results = {
        'research_plans': {'no_frontmatter': [], 'has_placeholder': [], 'valid': [], 'invalid_yaml': [], 'error': []},
        'conversation_guides': {'no_frontmatter': [], 'has_placeholder': [], 'valid': [], 'invalid_yaml': [], 'error': []}
    }
    
    # Walk through products and teams directories
    for dir_name in ['products', 'teams']:
        dir_path = os.path.join(base_path, dir_name)
        if not os.path.exists(dir_path):
            continue
        
        print(f"Scanning {dir_name}/ directory...")
        
        for root, dirs, files in os.walk(dir_path):
            # Skip node_modules and other irrelevant directories
            dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', '__pycache__']]
            
            for filename in files:
                if not filename.endswith('.md'):
                    continue
                
                filepath = os.path.join(root, filename)
                rel_path = os.path.relpath(filepath, base_path)
                
                # Determine file type
                is_rp = is_research_plan(filename)
                is_cg = is_conversation_guide(filename)
                
                if not is_rp and not is_cg:
                    continue
                
                file_type = 'research_plan' if is_rp else 'conversation_guide'
                
                # Extract frontmatter
                fm_data, status, *extra = extract_frontmatter(filepath)
                
                placeholder_examples = extra[0] if extra else []
                
                # Store result
                result_entry = {
                    'path': rel_path,
                    'directory': os.path.dirname(rel_path),
                    'placeholder_examples': placeholder_examples if isinstance(placeholder_examples, list) else []
                }
                
                if file_type == 'research_plan':
                    results['research_plans'][status].append(result_entry)
                else:
                    results['conversation_guides'][status].append(result_entry)
    
    return results

def generate_csv(results, output_path):
    """Generate CSV file from results."""
    print(f"\nGenerating CSV: {output_path}")
    
    with open(output_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['file_type', 'status', 'path', 'directory', 'placeholder_examples'])
        
        # Research plans
        for status in ['no_frontmatter', 'has_placeholder', 'valid']:
            for entry in results['research_plans'][status]:
                placeholders_str = ', '.join(entry['placeholder_examples']) if entry['placeholder_examples'] else ''
                writer.writerow(['research_plan', status, entry['path'], entry['directory'], placeholders_str])
        
        # Conversation guides
        for status in ['no_frontmatter', 'has_placeholder', 'valid']:
            for entry in results['conversation_guides'][status]:
                placeholders_str = ', '.join(entry['placeholder_examples']) if entry['placeholder_examples'] else ''
                writer.writerow(['conversation_guide', status, entry['path'], entry['directory'], placeholders_str])

def generate_summary_stats(results):
    """Generate summary statistics."""
    rp_no_fm = len(results['research_plans']['no_frontmatter'])
    rp_placeholder = len(results['research_plans']['has_placeholder'])
    rp_valid = len(results['research_plans']['valid'])
    rp_invalid = len(results['research_plans'].get('invalid_yaml', []))
    rp_error = len(results['research_plans'].get('error', []))
    rp_total = rp_no_fm + rp_placeholder + rp_valid + rp_invalid + rp_error
    
    cg_no_fm = len(results['conversation_guides']['no_frontmatter'])
    cg_placeholder = len(results['conversation_guides']['has_placeholder'])
    cg_valid = len(results['conversation_guides']['valid'])
    cg_invalid = len(results['conversation_guides'].get('invalid_yaml', []))
    cg_error = len(results['conversation_guides'].get('error', []))
    cg_total = cg_no_fm + cg_placeholder + cg_valid + cg_invalid + cg_error
    
    total_files = rp_total + cg_total
    total_issues = (rp_no_fm + rp_placeholder) + (cg_no_fm + cg_placeholder)
    
    return {
        'research_plans': {
            'total': rp_total,
            'no_frontmatter': rp_no_fm,
            'has_placeholder': rp_placeholder,
            'valid': rp_valid,
            'invalid_yaml': rp_invalid,
            'error': rp_error
        },
        'conversation_guides': {
            'total': cg_total,
            'no_frontmatter': cg_no_fm,
            'has_placeholder': cg_placeholder,
            'valid': cg_valid,
            'invalid_yaml': cg_invalid,
            'error': cg_error
        },
        'overall': {
            'total': total_files,
            'total_issues': total_issues,
            'percent_issues': (total_issues / total_files * 100) if total_files > 0 else 0
        }
    }

def main():
    base_path = '/home/runner/work/va.gov-team/va.gov-team'
    
    print("=" * 80)
    print("IMPROVED FRONTMATTER AUDIT")
    print("=" * 80)
    print("\nScanning for research plans and conversation guides...")
    print("Only flagging files with PRIMARY field placeholders:")
    print("  - [Team, Product, Date] in title")
    print("  - YYYY-MM-DD in date fields")
    print("  - [Team Name], [Product Name], [AUTHOR NAME]")
    print("  - [Enter date...], [Enter name...], etc.")
    print()
    
    results = scan_directory(base_path)
    stats = generate_summary_stats(results)
    
    # Generate CSV
    csv_path = os.path.join(base_path, 'frontmatter_audit.csv')
    generate_csv(results, csv_path)
    
    # Print summary
    print("\n" + "=" * 80)
    print("SUMMARY STATISTICS")
    print("=" * 80)
    print(f"\nResearch Plans:")
    print(f"  Total: {stats['research_plans']['total']}")
    print(f"  No Frontmatter: {stats['research_plans']['no_frontmatter']} ({stats['research_plans']['no_frontmatter']/stats['research_plans']['total']*100:.1f}%)")
    print(f"  Has Placeholder: {stats['research_plans']['has_placeholder']} ({stats['research_plans']['has_placeholder']/stats['research_plans']['total']*100:.1f}%)")
    print(f"  Valid: {stats['research_plans']['valid']} ({stats['research_plans']['valid']/stats['research_plans']['total']*100:.1f}%)")
    
    print(f"\nConversation Guides:")
    print(f"  Total: {stats['conversation_guides']['total']}")
    print(f"  No Frontmatter: {stats['conversation_guides']['no_frontmatter']} ({stats['conversation_guides']['no_frontmatter']/stats['conversation_guides']['total']*100:.1f}%)")
    print(f"  Has Placeholder: {stats['conversation_guides']['has_placeholder']} ({stats['conversation_guides']['has_placeholder']/stats['conversation_guides']['total']*100:.1f}%)")
    print(f"  Valid: {stats['conversation_guides']['valid']} ({stats['conversation_guides']['valid']/stats['conversation_guides']['total']*100:.1f}%)")
    
    print(f"\nOverall:")
    print(f"  Total Files: {stats['overall']['total']}")
    print(f"  Files with Issues: {stats['overall']['total_issues']} ({stats['overall']['percent_issues']:.1f}%)")
    print(f"  Valid Files: {stats['research_plans']['valid'] + stats['conversation_guides']['valid']} ({(stats['research_plans']['valid'] + stats['conversation_guides']['valid'])/stats['overall']['total']*100:.1f}%)")
    
    print("\n" + "=" * 80)
    print(f"CSV file generated: {csv_path}")
    print("=" * 80)
    
    return stats

if __name__ == '__main__':
    main()
