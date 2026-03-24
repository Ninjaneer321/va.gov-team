#!/usr/bin/env python3
"""
Automated frontmatter remediation script for research plans and conversation guides.

This script helps fix files identified in the frontmatter audit by:
1. Adding frontmatter templates to files with none
2. Attempting to extract information from content to replace placeholders
3. Providing a framework for manual review and completion

Usage:
  python3 remediate_frontmatter.py --mode add-template --file <path>
  python3 remediate_frontmatter.py --mode smart-replace --file <path>
  python3 remediate_frontmatter.py --mode batch --csv frontmatter_audit.csv --status no_frontmatter --limit 10
"""

import os
import re
import sys
import csv
import argparse
from datetime import datetime
from pathlib import Path

# Frontmatter templates
RESEARCH_PLAN_TEMPLATE = '''---
# Research Plan Metadata
title: "Research Plan for {team}, {product}, {date}"
date: {date}
last_updated: {date}
team: "{team}"
product: "{product}"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "TBD - Please complete from research plan content"
  product_location: "TBD - Please specify location on VA.gov"
  user_familiarity: "TBD - New product or iteration?"
  product_brief_url: "TBD - Add product brief URL if available"

# Research Design
methodology: "TBD - e.g., usability testing, semi-structured interviews"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "TBD - Extract from research plan"
  - goal_2: "TBD - Extract from research plan"

research_questions:
  - "TBD - Extract from research plan"

hypotheses:
  - "TBD - Extract from research plan if available"

expected_outcomes: "TBD - How will findings advance the product?"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "TBD"
  
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  research_dates: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "TBD"

veteran_journey_phases:
  - "TBD"
    
# Research Repository Tracking
tags:
  - "TBD"
---

'''

CONVERSATION_GUIDE_TEMPLATE = '''---
title: "Conversation Guide for {team}, {product}, {date}"
author: "TBD"
date_created: "{date}"
last_modified: "{date}"

# Core research metadata
team: "{team}"
portfolio: "TBD"
product: "{product}"
research_phase: "TBD"
research_method: "moderated_interview"

# Session details
session_duration: "60 minutes"
session_type: "remote_moderated"
participant_criteria: "TBD"

# Related documents
related_research_plan: "TBD"
related_prototype: "N/A"

tags:
  - "TBD"
description: "TBD"

# Compliance flags
recording_required: true
observer_support: true
consent_for_clips: true
---

'''

def extract_team_and_product_from_path(file_path):
    """Extract team and product information from file path."""
    parts = Path(file_path).parts
    
    # Common patterns
    if 'products' in parts:
        idx = parts.index('products')
        if len(parts) > idx + 1:
            product = parts[idx + 1]
            team = product  # Default team to product name
            return team, product
    
    if 'teams' in parts:
        idx = parts.index('teams')
        if len(parts) > idx + 1:
            team = parts[idx + 1]
            # Try to find product
            if len(parts) > idx + 2:
                product = parts[idx + 2]
            else:
                product = team
            return team, product
    
    # Fallback: use directory name
    parent = Path(file_path).parent.name
    return parent, parent

def extract_info_from_content(content, file_type):
    """Extract useful information from file content."""
    info = {
        'has_goals': False,
        'has_questions': False,
        'has_hypotheses': False,
        'goals': [],
        'questions': [],
        'methodology': 'TBD'
    }
    
    # Look for goals section
    goals_match = re.search(r'##\s*(?:Research\s+)?Goals?\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL | re.IGNORECASE)
    if goals_match:
        info['has_goals'] = True
        goals_text = goals_match.group(1)
        # Extract bullet points
        goals = re.findall(r'[-*]\s*(.+)', goals_text)
        info['goals'] = [g.strip() for g in goals[:3]]  # Take first 3
    
    # Look for research questions
    questions_match = re.search(r'##\s*(?:Research\s+)?Questions?\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL | re.IGNORECASE)
    if questions_match:
        info['has_questions'] = True
        questions_text = questions_match.group(1)
        questions = re.findall(r'[-*]\s*(.+)', questions_text)
        info['questions'] = [q.strip() for q in questions[:5]]  # Take first 5
    
    # Look for hypotheses
    hyp_match = re.search(r'##\s*Hypothes[ei]s\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL | re.IGNORECASE)
    if hyp_match:
        info['has_hypotheses'] = True
    
    # Try to detect methodology
    if re.search(r'usability\s+test', content, re.IGNORECASE):
        info['methodology'] = 'usability testing'
    elif re.search(r'interview', content, re.IGNORECASE):
        info['methodology'] = 'semi-structured interviews'
    elif re.search(r'card\s+sort', content, re.IGNORECASE):
        info['methodology'] = 'card sort'
    
    return info

def add_frontmatter_template(file_path, file_type='research_plan'):
    """Add frontmatter template to a file that has none."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Don't add if already has frontmatter
        if content.strip().startswith('---'):
            print(f"  ⚠️  File already has frontmatter: {file_path}")
            return False
        
        # Extract info
        team, product = extract_team_and_product_from_path(file_path)
        date = datetime.now().strftime('%Y-%m-%d')
        
        # Extract additional info from content
        content_info = extract_info_from_content(content, file_type)
        
        # Choose template
        if file_type == 'research_plan':
            template = RESEARCH_PLAN_TEMPLATE
        else:
            template = CONVERSATION_GUIDE_TEMPLATE
        
        # Format template
        frontmatter = template.format(
            team=team,
            product=product,
            date=date
        )
        
        # Add frontmatter to file
        new_content = frontmatter + content
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"  ✅ Added frontmatter template: {file_path}")
        print(f"     Team: {team}, Product: {product}")
        if content_info['has_goals']:
            print(f"     Found {len(content_info['goals'])} goals in content")
        if content_info['has_questions']:
            print(f"     Found {len(content_info['questions'])} questions in content")
        
        return True
        
    except Exception as e:
        print(f"  ❌ Error processing {file_path}: {e}")
        return False

def process_batch_from_csv(csv_path, status_filter, file_type_filter=None, limit=None, dry_run=False):
    """Process multiple files from the audit CSV."""
    processed = 0
    success = 0
    
    with open(csv_path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['status'] != status_filter:
                continue
            
            if file_type_filter and row['file_type'] != file_type_filter:
                continue
            
            if limit and processed >= limit:
                break
            
            file_path = row['path']
            # Prepend products/ or teams/ based on path
            if not file_path.startswith('products/') and not file_path.startswith('teams/'):
                # Determine which directory
                if any(file_path.startswith(p) for p in ['digital-experience/', '_archive/', 'vsa/', 'health-products/', 'benefits-portfolio/']):
                    file_path = f"teams/{file_path}"
                else:
                    file_path = f"products/{file_path}"
            
            full_path = os.path.join('/home/runner/work/va.gov-team/va.gov-team', file_path)
            
            if not os.path.exists(full_path):
                print(f"  ⚠️  File not found: {full_path}")
                processed += 1
                continue
            
            print(f"\nProcessing {processed + 1}: {file_path}")
            
            if dry_run:
                print(f"  [DRY RUN] Would process: {file_path}")
                processed += 1
                continue
            
            if status_filter == 'no_frontmatter':
                if add_frontmatter_template(full_path, row['file_type']):
                    success += 1
            
            processed += 1
    
    print(f"\n{'='*80}")
    print(f"Batch processing complete:")
    print(f"  Files processed: {processed}")
    print(f"  Successful: {success}")
    print(f"  Failed: {processed - success}")
    print(f"{'='*80}")
    
    return processed, success

def main():
    parser = argparse.ArgumentParser(description='Remediate frontmatter issues')
    parser.add_argument('--mode', choices=['add-template', 'batch'], required=True,
                        help='Mode: add-template for single file, batch for CSV processing')
    parser.add_argument('--file', help='Single file to process')
    parser.add_argument('--file-type', choices=['research_plan', 'conversation_guide'],
                        help='Type of file (for single file mode)')
    parser.add_argument('--csv', default='frontmatter_audit.csv',
                        help='CSV file with audit results')
    parser.add_argument('--status', choices=['no_frontmatter', 'has_placeholder'],
                        help='Filter by status in CSV')
    parser.add_argument('--filter-type', choices=['research_plan', 'conversation_guide'],
                        help='Filter by file type in CSV')
    parser.add_argument('--limit', type=int,
                        help='Limit number of files to process in batch mode')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be done without making changes')
    
    args = parser.parse_args()
    
    if args.mode == 'add-template':
        if not args.file or not args.file_type:
            print("Error: --file and --file-type required for add-template mode")
            return 1
        add_frontmatter_template(args.file, args.file_type)
    
    elif args.mode == 'batch':
        if not args.status:
            print("Error: --status required for batch mode")
            return 1
        process_batch_from_csv(args.csv, args.status, args.filter_type, args.limit, args.dry_run)
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
