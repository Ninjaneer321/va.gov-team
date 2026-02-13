#!/usr/bin/env python3
"""
Script to complete frontmatter for research findings files.
Follows strict guardrails: no fabrication, exact wording, explicit counts only.
"""

import argparse
import os
import re
import yaml
from pathlib import Path
from typing import Dict, List, Tuple, Any

# Tag taxonomy from the problem statement
AUDIENCE_TAGS = [
    "AUD: Attorneys", "AUD: Caregivers", "AUD: Claims Agents", "AUD: Clinicians",
    "AUD: Contact Center", "AUD: Dependents", "AUD: Family Member",
    "AUD: Internal VA Stakeholders", "AUD: National Guard", "AUD: Reserves",
    "AUD: School Certifying Officials (SCO)", "AUD: Service Members",
    "AUD: Surviving Family", "AUD: Travel Office Staff", "AUD: VA Staff",
    "AUD: Veterans", "AUD: Veteran Service Office (VSO)"
]

BENEFIT_TAGS = [
    "BNFT: Disability", "BNFT: Education", "BNFT: Employment", "BNFT: Finances",
    "BNFT: Healthcare", "BNFT: Housing", "BNFT: Life Insurance",
    "BNFT: Memorialization", "BNFT: Pension", "BNFT: Records"
]

PRODUCT_TAGS = [
    "PRDT: Accredited-Reps", "PRDT: Ask VA (AVA)", "PRDT: Benefit-letters",
    "PRDT: Benefit Hubs", "PRDT: Burials-memorials", "PRDT: Caregivers",
    "PRDT: CHAMPVA", "PRDT: Claim-status-tool", "PRDT: Contact us",
    "PRDT: Decision-reviews", "PRDT: Direct-deposit", "PRDT: Discharge-upgrade-wizard",
    "PRDT: eBenefits", "PRDT: Facilities", "PRDT: Find-a-va-form",
    "PRDT: Find-a-yellow-ribbon-school", "PRDT: Form 10-10 EZ",
    "PRDT: My VA"
]

MHV_TAGS = [
    "MHV: Admin Portal", "MHV: Appointments", "MHV: National Portal/Access",
    "MHV: MyHealth (Health Hub)", "MHV: Personal Health Records/Medical Records",
    "MHV: Pharmacy", "MHV: Secure Messaging"
]

METHODOLOGY_TAGS = [
    "usability-testing", "semi-structured-interviews", "card-sort", "tree-test",
    "moderated-research", "unmoderated-research", "remote-research",
    "in-person-research", "discovery", "evaluative", "generative"
]

OTHER_TAGS = [
    "Accessibility", "Internal Research: Platform Research"
]


def extract_frontmatter_and_content(text: str) -> Tuple[Dict, str]:
    """Extract existing frontmatter and content separately."""
    match = re.match(r"^---\s*\n(.*?)^---\s*\n(.*)$", text, re.DOTALL | re.MULTILINE)
    if match:
        frontmatter_yaml = match.group(1)
        content = match.group(2)
        try:
            frontmatter = yaml.safe_load(frontmatter_yaml) or {}
        except yaml.YAMLError as e:
            print(f"Error parsing YAML: {e}")
            frontmatter = {}
        return frontmatter, content
    return {}, text


def analyze_content_for_tags(content: str, frontmatter: Dict) -> List[str]:
    """
    Analyze content and infer tags based on explicit mentions.
    CRITICAL: Follow guardrails - only tag what's explicitly mentioned.
    """
    tags = []
    content_lower = content.lower()
    
    # Check for audience tags based on demographics
    demographics = frontmatter.get('demographics', {})
    
    # Helper function to safely get numeric value
    def get_count(value, default=0):
        if isinstance(value, int):
            return value
        if isinstance(value, str):
            try:
                return int(value)
            except (ValueError, TypeError):
                return default
        return default
    
    if get_count(demographics.get('veterans', 0)) > 0:
        tags.append("AUD: Veterans")
    if get_count(demographics.get('caregivers', 0)) > 0:
        tags.append("AUD: Caregivers")
    if get_count(demographics.get('service_members', 0)) > 0:
        tags.append("AUD: Service Members")
    if get_count(demographics.get('dependents', 0)) > 0:
        tags.append("AUD: Dependents")
    if get_count(demographics.get('VA_staff', 0)) > 0:
        tags.append("AUD: VA Staff")
    
    # Check for benefit tags based on content
    benefit_keywords = {
        "BNFT: Disability": ["disability", "disability compensation", "disability claim", "disability rating"],
        "BNFT: Education": ["education", "gi bill", "post-9/11", "education benefits"],
        "BNFT: Healthcare": ["healthcare", "health care", "medical", "appointment", "prescription", "pharmacy"],
        "BNFT: Housing": ["housing", "home loan", "coe", "certificate of eligibility"],
        "BNFT: Pension": ["pension"],
        "BNFT: Records": ["records", "dd214", "service records"],
    }
    
    for tag, keywords in benefit_keywords.items():
        if any(kw in content_lower for kw in keywords):
            tags.append(tag)
    
    # Check for product tags based on product name and content
    product = frontmatter.get('product', '')
    product_lower = product.lower() if product else ''
    
    product_mapping = {
        "accredited": "PRDT: Accredited-Reps",
        "find a representative": "PRDT: Accredited-Reps",
        "my va": "PRDT: My VA",
        "myva": "PRDT: My VA",
        "claim status": "PRDT: Claim-status-tool",
        "facilities": "PRDT: Facilities",
        "find a form": "PRDT: Find-a-va-form",
        "decision review": "PRDT: Decision-reviews",
        "caregivers": "PRDT: Caregivers",
        "caregiver": "PRDT: Caregivers",
    }
    
    for keyword, tag in product_mapping.items():
        if keyword in product_lower or keyword in content_lower:
            tags.append(tag)
            break
    
    # Check for MHV tags
    mhv_keywords = {
        "MHV: Appointments": ["appointment", "appointments", "schedule appointment"],
        "MHV: Pharmacy": ["prescription", "prescriptions", "medication", "refill", "pharmacy"],
        "MHV: Secure Messaging": ["secure message", "secure messaging", "messages"],
        "MHV: Personal Health Records/Medical Records": ["medical record", "health record", "personal health"],
    }
    
    for tag, keywords in mhv_keywords.items():
        if any(kw in content_lower for kw in keywords):
            tags.append(tag)
    
    # Check for methodology tags
    methodology = frontmatter.get('methodology', [])
    for method in methodology:
        method_lower = method.lower() if isinstance(method, str) else ''
        if 'usability' in method_lower or 'usability test' in content_lower:
            tags.append("usability-testing")
        if 'interview' in method_lower:
            tags.append("semi-structured-interviews")
        if 'card sort' in method_lower:
            tags.append("card-sort")
        if 'moderated' in method_lower or 'moderated' in content_lower:
            tags.append("moderated-research")
        if 'remote' in method_lower or 'zoom' in content_lower:
            tags.append("remote-research")
    
    # Check for accessibility - ONLY if AT users explicitly participated
    disability = demographics.get('disability', {})
    has_at_users = False
    if disability and isinstance(disability, dict):
        at_fields = ['AT_beginner', 'AT_advanced', 'screen_reader_desktop', 'screen_reader_mobile',
                     'magnification_zoom', 'speech_input', 'hearing_aids', 'sighted_keyboard', 'captions']
        for field in at_fields:
            if get_count(disability.get(field, 0)) > 0:
                has_at_users = True
                break
    
    # Only add Accessibility tag if AT users participated OR if it's explicitly mentioned as a focus
    if has_at_users:
        tags.append("Accessibility")
    elif 'accessibility testing' in content_lower or 'accessibility research' in content_lower:
        tags.append("Accessibility")
    
    # Check for research phase
    research_goals = frontmatter.get('research_goals', [])
    goals_text = ' '.join(research_goals).lower() if research_goals else ''
    
    if 'discover' in goals_text or 'explore' in goals_text:
        tags.append("discovery")
    if 'evaluate' in goals_text or 'validate' in goals_text or 'test' in goals_text:
        tags.append("evaluative")
    
    # Remove duplicates while preserving order
    seen = set()
    unique_tags = []
    for tag in tags:
        if tag not in seen:
            seen.add(tag)
            unique_tags.append(tag)
    
    return unique_tags


def should_add_tags(frontmatter: Dict) -> bool:
    """Check if tags section is missing or incomplete."""
    tags = frontmatter.get('tags')
    if tags is None:
        return True
    if isinstance(tags, list) and len(tags) == 0:
        return True
    if isinstance(tags, list) and any('[' in str(t) or 'TODO' in str(t) for t in tags):
        return True
    return False


def process_file(file_path: str, dry_run: bool = False) -> Dict[str, Any]:
    """
    Process a single research findings file to complete its frontmatter.
    Returns a dict with status and any changes made.
    """
    result = {
        'file': file_path,
        'success': False,
        'changes': [],
        'errors': []
    }
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        frontmatter, body = extract_frontmatter_and_content(content)
        
        if not frontmatter:
            result['errors'].append("No frontmatter found")
            return result
        
        changes_made = False
        
        # Check if tags need to be added
        if should_add_tags(frontmatter):
            tags = analyze_content_for_tags(body, frontmatter)
            if tags:
                frontmatter['tags'] = tags
                changes_made = True
                result['changes'].append(f"Added {len(tags)} tags")
        
        if changes_made and not dry_run:
            # Rebuild the file with updated frontmatter
            new_content = f"---\n{yaml.dump(frontmatter, sort_keys=False, allow_unicode=True)}---\n{body}"
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            result['success'] = True
        elif changes_made:
            result['success'] = True
            result['changes'].append("(dry run - no changes written)")
        else:
            result['changes'].append("No changes needed")
            result['success'] = True
            
    except Exception as e:
        result['errors'].append(str(e))
    
    return result


def main():
    parser = argparse.ArgumentParser(
        description='Complete frontmatter for research findings files'
    )
    parser.add_argument(
        '--file',
        help='Process a single file'
    )
    parser.add_argument(
        '--file-list',
        help='Path to a file containing list of files to process'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be changed without actually changing files'
    )
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Show detailed output'
    )
    
    args = parser.parse_args()
    
    files_to_process = []
    
    if args.file:
        files_to_process = [args.file]
    elif args.file_list:
        with open(args.file_list, 'r') as f:
            files_to_process = [line.strip() for line in f if line.strip()]
    else:
        print("Error: Must specify either --file or --file-list")
        return 1
    
    print(f"Processing {len(files_to_process)} files...")
    if args.dry_run:
        print("DRY RUN MODE - No files will be modified")
    print()
    
    results = []
    for file_path in files_to_process:
        if not os.path.exists(file_path):
            print(f"Warning: File not found: {file_path}")
            continue
        
        result = process_file(file_path, dry_run=args.dry_run)
        results.append(result)
        
        if args.verbose or not result['success']:
            print(f"\n{'='*80}")
            print(f"File: {result['file']}")
            if result['success']:
                print(f"Status: ✓ SUCCESS")
                for change in result['changes']:
                    print(f"  - {change}")
            else:
                print(f"Status: ✗ FAILED")
                for error in result['errors']:
                    print(f"  ERROR: {error}")
    
    # Summary
    print(f"\n{'='*80}")
    print("SUMMARY")
    print(f"{'='*80}")
    successful = sum(1 for r in results if r['success'])
    failed = len(results) - successful
    print(f"Total processed: {len(results)}")
    print(f"Successful: {successful}")
    print(f"Failed: {failed}")
    
    return 0 if failed == 0 else 1


if __name__ == '__main__':
    exit(main())
