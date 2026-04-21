#!/usr/bin/env python3
"""
Unit tests for research_finder.py

Tests the ResearchFileFinder class functionality including:
- File discovery and pattern matching
- Manual file validation
- Age calculation and filtering
- Duplicate tracking
- GitHub Actions integration
"""

import unittest
import tempfile
import shutil
import os
import sys
import re  # Added missing import
from pathlib import Path
from datetime import datetime, timedelta
from unittest.mock import Mock, patch, MagicMock
import subprocess

# Add the parent directory to Python path to import the module
sys.path.insert(0, str(Path(__file__).parent.parent))
from research_finder import ResearchFileFinder


class TestResearchFileFinder(unittest.TestCase):
    """Test cases for ResearchFileFinder class."""
    
    def setUp(self):
        """Set up test environment with temporary directory structure."""
        self.test_dir = tempfile.mkdtemp()
        self.original_cwd = os.getcwd()
        os.chdir(self.test_dir)
        
        # Create test directory structure
        self.products_dir = Path("products")
        self.products_dir.mkdir()
        
        # Create test research files
        self.test_files = {
            "products/health-care/research/findings.md": "# Health Care Research Findings\n\nSome findings here.",
            "products/disability/study-report.md": "# Disability Study Report\n\nReport content.",
            "products/education/research-insights.md": "# Education Research Insights\n\nInsights content.",
            "products/benefits/user-research-findings.md": "# Benefits User Research\n\nUser research data.",
            "products/platform/regular-doc.md": "# Regular Documentation\n\nNot a research file.",
            "products/identity/research-findings.md": "# Identity Research Findings\n\nIdentity findings."
        }
        
        for file_path, content in self.test_files.items():
            file_obj = Path(file_path)
            file_obj.parent.mkdir(parents=True, exist_ok=True)
            file_obj.write_text(content)
        
        # Create .github directory structure
        github_dir = Path(".github/workflows")
        github_dir.mkdir(parents=True, exist_ok=True)
        
        self.finder = ResearchFileFinder()
        
    def tearDown(self):
        """Clean up test environment."""
        os.chdir(self.original_cwd)
        shutil.rmtree(self.test_dir)
    
    def test_init(self):
        """Test ResearchFileFinder initialization."""
        self.assertIsInstance(self.finder.research_patterns, list)
        self.assertEqual(len(self.finder.research_patterns), 10)
        self.assertEqual(self.finder.shared_files_log, Path(".github/workflows/shared-research-files.log"))
    
    def test_setup_tracking(self):
        """Test tracking file setup."""
        self.finder.setup_tracking()
        self.assertTrue(self.finder.shared_files_log.exists())
        self.assertTrue(self.finder.shared_files_log.parent.exists())
    
    def test_is_manual_run(self):
        """Test manual run detection."""
        # Test manual run with file path
        self.assertTrue(self.finder.is_manual_run('workflow_dispatch', 'some/file.md'))
        
        # Test manual run without file path
        self.assertFalse(self.finder.is_manual_run('workflow_dispatch', ''))
        
        # Test other event types
        self.assertFalse(self.finder.is_manual_run('push', 'some/file.md'))
        self.assertFalse(self.finder.is_manual_run('schedule', ''))
    
    def test_validate_manual_file_exists(self):
        """Test manual file validation when file exists."""
        valid_file = "products/health-care/research/findings.md"
        is_valid, error_msg = self.finder.validate_manual_file(valid_file)
        
        self.assertTrue(is_valid)
        self.assertIsNone(error_msg)
    
    def test_validate_manual_file_missing(self):
        """Test manual file validation when file doesn't exist."""
        missing_file = "products/nonexistent/research/findings.md"
        is_valid, error_msg = self.finder.validate_manual_file(missing_file)
        
        self.assertFalse(is_valid)
        self.assertIsNotNone(error_msg)
        self.assertIn("File not found", error_msg)
    
    @patch('subprocess.run')
    def test_get_file_age_days_success(self, mock_run):
        """Test successful file age calculation."""
        # Mock git log output for 5 days ago
        five_days_ago = (datetime.now() - timedelta(days=5)).strftime('%Y-%m-%d')
        mock_run.return_value.stdout = f"{five_days_ago} 10:00:00 -0400"
        mock_run.return_value.check = True
        
        age = self.finder.get_file_age_days("products/health-care/research/findings.md")
        self.assertEqual(age, 5)
    
    @patch('subprocess.run')
    def test_get_file_age_days_no_history(self, mock_run):
        """Test file age calculation when no git history exists."""
        mock_run.return_value.stdout = ""
        mock_run.return_value.check = True
        
        age = self.finder.get_file_age_days("products/health-care/research/findings.md")
        self.assertEqual(age, 0)
    
    @patch('subprocess.run')
    def test_get_file_age_days_error(self, mock_run):
        """Test file age calculation when git command fails."""
        mock_run.side_effect = subprocess.CalledProcessError(1, 'git')
        
        age = self.finder.get_file_age_days("products/health-care/research/findings.md")
        self.assertEqual(age, 0)
    
    def test_is_file_shared_empty_log(self):
        """Test shared file check when log doesn't exist."""
        self.assertFalse(self.finder.is_file_shared("products/health-care/research/findings.md"))
    
    def test_is_file_shared_with_log(self):
        """Test shared file check when log exists."""
        self.finder.setup_tracking()
        
        # Add a file to the log
        shared_file = "products/health-care/research/findings.md"
        with open(self.finder.shared_files_log, 'w') as f:
            f.write(f"{shared_file}\n")
        
        self.assertTrue(self.finder.is_file_shared(shared_file))
        self.assertFalse(self.finder.is_file_shared("products/disability/study-report.md"))
    
    @patch.object(ResearchFileFinder, 'get_file_age_days')
    @patch.object(ResearchFileFinder, 'is_file_shared')
    def test_find_research_files_with_age_filter(self, mock_is_shared, mock_get_age):
        """Test finding research files with age filtering."""
        mock_is_shared.return_value = False
        
        # Mock different ages for different files
        def mock_age_side_effect(file_path):
            if "findings.md" in file_path:
                return 20  # Old enough (>= 14 days)
            elif "study-report.md" in file_path:
                return 5  # Too recent (< 14 days)
            else:
                return 15  # Old enough (>= 14 days)
        
        mock_get_age.side_effect = mock_age_side_effect
        
        eligible_files = self.finder.find_research_files(ignore_time_delay=False)
        
        # Should find files that are 14+ days old
        self.assertGreater(len(eligible_files), 0)
        
        # Verify age checking was called
        self.assertTrue(mock_get_age.called)
    
    @patch.object(ResearchFileFinder, 'is_file_shared')
    def test_find_research_files_ignore_time_delay(self, mock_is_shared):
        """Test finding research files ignoring time delay."""
        mock_is_shared.return_value = False
        
        eligible_files = self.finder.find_research_files(ignore_time_delay=True)
        
        # Should find research files when ignoring time delay
        # Note: The actual count may be higher due to pattern matching multiple files
        # We expect at least our test research files
        expected_research_files = [
            "products/health-care/research/findings.md",
            "products/disability/study-report.md", 
            "products/education/research-insights.md",
            "products/benefits/user-research-findings.md",
            "products/identity/research-findings.md"
        ]
        
        # Check that we found at least the expected files
        self.assertGreaterEqual(len(eligible_files), len(expected_research_files))
        
        # Verify that all our expected files are included
        eligible_files_set = set(eligible_files)
        for expected_file in expected_research_files:
            self.assertIn(expected_file, eligible_files_set)
    
    @patch.object(ResearchFileFinder, 'is_file_shared')
    def test_find_research_files_already_shared(self, mock_is_shared):
        """Test that already shared files are skipped."""
        # Mark some files as already shared
        def mock_shared_side_effect(file_path):
            return "findings.md" in file_path
        
        mock_is_shared.side_effect = mock_shared_side_effect
        
        eligible_files = self.finder.find_research_files(ignore_time_delay=True)
        
        # Should exclude files marked as shared
        shared_files = [f for f in eligible_files if "findings.md" in f]
        self.assertEqual(len(shared_files), 0)
    
    def test_find_research_files_no_products_dir(self):
        """Test behavior when products directory doesn't exist."""
        shutil.rmtree("products")
        
        eligible_files = self.finder.find_research_files()
        self.assertEqual(len(eligible_files), 0)
    
    @patch.object(ResearchFileFinder, 'validate_manual_file')
    def test_process_files_manual_run_valid(self, mock_validate):
        """Test processing files for manual run with valid file."""
        mock_validate.return_value = (True, None)
        
        result = self.finder.process_files('workflow_dispatch', 'products/health-care/research/findings.md')
        
        self.assertEqual(result['eligible_files'], 'products/health-care/research/findings.md')
        self.assertEqual(result['skip'], 'false')
        self.assertEqual(result['error_message'], '')
    
    @patch.object(ResearchFileFinder, 'validate_manual_file')
    def test_process_files_manual_run_invalid(self, mock_validate):
        """Test processing files for manual run with invalid file."""
        mock_validate.return_value = (False, "File not found: missing.md")
        
        result = self.finder.process_files('workflow_dispatch', 'missing.md')
        
        self.assertEqual(result['eligible_files'], '')
        self.assertEqual(result['skip'], 'true')
        self.assertEqual(result['error_message'], 'File not found: missing.md')
    
    @patch.object(ResearchFileFinder, 'find_research_files')
    def test_process_files_automatic_with_files(self, mock_find):
        """Test processing files for automatic run with eligible files."""
        mock_find.return_value = [
            "products/health-care/research/findings.md",
            "products/disability/study-report.md"
        ]
        
        result = self.finder.process_files('schedule')
        
        # Should process only the first file
        self.assertEqual(result['eligible_files'], 'products/health-care/research/findings.md')
        self.assertEqual(result['skip'], 'false')
        self.assertEqual(result['error_message'], '')
    
    @patch.object(ResearchFileFinder, 'find_research_files')
    def test_process_files_automatic_no_files(self, mock_find):
        """Test processing files for automatic run with no eligible files."""
        mock_find.return_value = []
        
        result = self.finder.process_files('schedule')
        
        self.assertEqual(result['eligible_files'], '')
        self.assertEqual(result['skip'], 'true')
        self.assertEqual(result['error_message'], '')
    
    def test_research_patterns_coverage(self):
        """Test that research patterns match expected file types."""
        test_filenames = [
            "findings.md",
            "FINDINGS.md", 
            "research-report.md",
            "user-research-findings.md",
            "study-insights.md",
            "regular-doc.md",  # Should not match
            "findings.txt"     # Should not match
        ]
        
        matching_files = []
        for filename in test_filenames:
            for pattern in self.finder.research_patterns:
                if re.match(pattern, filename):
                    matching_files.append(filename)
                    break
        
        # Should match 4 research files (findings.md, FINDINGS.md, research-report.md, user-research-findings.md)
        # study-insights.md doesn't match our patterns since we don't have a "*insights.md" pattern
        expected_matches = 4
        self.assertEqual(len(matching_files), expected_matches)
        self.assertNotIn("regular-doc.md", matching_files)
        self.assertNotIn("findings.txt", matching_files)


class TestReportCompleteness(unittest.TestCase):
    """Test cases for the is_report_complete method."""

    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        self.original_cwd = os.getcwd()
        os.chdir(self.test_dir)

        github_dir = Path(".github/workflows")
        github_dir.mkdir(parents=True, exist_ok=True)

        self.finder = ResearchFileFinder()

    def tearDown(self):
        os.chdir(self.original_cwd)
        shutil.rmtree(self.test_dir)

    def _write(self, name, content):
        p = Path(name)
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(content, encoding='utf-8')
        return str(p)

    # --- Real / completed reports ------------------------------------------

    def test_complete_report_no_front_matter(self):
        """A report with real findings and no front matter passes."""
        path = self._write("products/test/findings.md", """\
# My Real Study Research Findings

## Key Findings
1. Veterans preferred the new navigation layout over the existing one
2. Mobile users completed tasks 30% faster with the updated design
3. Screen reader users reported improved satisfaction

## Recommendations
1. Implement the new navigation layout
""")
        is_complete, reason = self.finder.is_report_complete(path)
        self.assertTrue(is_complete, reason)

    def test_complete_report_with_front_matter(self):
        """A report with filled-in front matter passes."""
        path = self._write("products/test/findings.md", """\
---
title: "Auth Experience Research Findings"
date: "2025-09-15"
key_findings:
  - "Veterans preferred single sign-on"
  - "MFA confusion was the top barrier"
---

# Auth Experience Research Findings

## Key Findings
1. Veterans preferred single sign-on
2. MFA confusion was the top barrier
""")
        is_complete, reason = self.finder.is_report_complete(path)
        self.assertTrue(is_complete, reason)

    # --- Incomplete / template reports -------------------------------------

    def test_template_front_matter_date_placeholder(self):
        """Front matter with YYYY-MM-DD date is flagged."""
        path = self._write("products/test/findings.md", """\
---
title: "[Study] Research Findings"
date: "YYYY-MM-DD"
key_findings:
  - "Finding 1"
  - "Finding 2"
---

# [Study] Research Findings
""")
        is_complete, reason = self.finder.is_report_complete(path)
        self.assertFalse(is_complete)
        self.assertIn("YYYY-MM-DD", reason)

    def test_template_front_matter_placeholder_findings(self):
        """Front matter key_findings still set to template defaults."""
        path = self._write("products/test/findings.md", """\
---
title: "My Study"
date: "2025-06-01"
key_findings:
  - "Finding 1"
  - "Finding 2"
---

# My Study Findings

## Key Findings
- Finding one
- Finding two
""")
        is_complete, reason = self.finder.is_report_complete(path)
        self.assertFalse(is_complete)
        self.assertIn("key_findings", reason)

    def test_template_title_placeholder(self):
        """Title still contains the [Study] placeholder."""
        path = self._write("products/test/findings.md", """\
# [Study] Research Findings

## Key Findings
- Finding one
- Finding two
""")
        is_complete, reason = self.finder.is_report_complete(path)
        self.assertFalse(is_complete)
        self.assertIn("[Study]", reason)

    def test_template_key_findings_placeholder_items(self):
        """Key Findings section has only 'Finding one', 'Finding two', etc."""
        path = self._write("products/test/findings.md", """\
# Some Study

## Key Findings
1. Finding one
1. Finding two
1. Finding three
1. Finding four
1. Finding five
""")
        is_complete, reason = self.finder.is_report_complete(path)
        self.assertFalse(is_complete)
        self.assertIn("Key Findings", reason)

    def test_template_bracket_placeholders(self):
        """Report full of [Insert …] placeholders is flagged."""
        path = self._write("products/test/findings.md", """\
# Some Study

## Hypotheses and Conclusions
- **Hypothesis Statement:** [Insert statement]
  - [Insert evidence]

## Recommendations
1. **Recommendation:** [Insert action]
   - _Supporting evidence: [Insert data]_
2. **Recommendation:** [Insert action]
   - _Supporting evidence: [Insert data]_
""")
        is_complete, reason = self.finder.is_report_complete(path)
        self.assertFalse(is_complete)
        self.assertIn("bracket placeholders", reason)

    def test_mixed_real_and_template_findings_passes(self):
        """A report with some real findings alongside numbered placeholders passes."""
        path = self._write("products/test/findings.md", """\
# Disability Claims Research Findings

## Key Findings
1. Veterans found the multi-step process confusing
2. Average completion time was 45 minutes
3. Finding three
""")
        is_complete, reason = self.finder.is_report_complete(path)
        # Not all items are placeholders, so this should pass
        self.assertTrue(is_complete, reason)

    def test_nonexistent_file_returns_complete(self):
        """If the file cannot be read, default to complete (let downstream handle)."""
        is_complete, reason = self.finder.is_report_complete("does/not/exist.md")
        self.assertTrue(is_complete)

    @patch.object(ResearchFileFinder, 'get_file_age_days')
    @patch.object(ResearchFileFinder, 'is_file_shared')
    def test_find_research_files_skips_incomplete(self, mock_is_shared, mock_get_age):
        """Incomplete template files are excluded by find_research_files."""
        mock_is_shared.return_value = False
        mock_get_age.return_value = 20

        # One complete, one template
        products = Path("products")
        products.mkdir(exist_ok=True)

        complete = products / "real" / "findings.md"
        complete.parent.mkdir(parents=True, exist_ok=True)
        complete.write_text("# Real Study\n\n## Key Findings\n1. Veterans liked the new design\n")

        template = products / "empty" / "findings.md"
        template.parent.mkdir(parents=True, exist_ok=True)
        template.write_text("# [Study] Research Findings\n\n## Key Findings\n1. Finding one\n1. Finding two\n")

        eligible = self.finder.find_research_files(ignore_time_delay=True, ignore_completeness_check=False)
        eligible_set = set(eligible)

        self.assertIn(str(complete), eligible_set)
        self.assertNotIn(str(template), eligible_set)

    @patch.object(ResearchFileFinder, 'get_file_age_days')
    @patch.object(ResearchFileFinder, 'is_file_shared')
    def test_find_research_files_ignore_completeness_check(self, mock_is_shared, mock_get_age):
        """When ignore_completeness_check=True, template files are included."""
        mock_is_shared.return_value = False
        mock_get_age.return_value = 20

        products = Path("products")
        products.mkdir(exist_ok=True)

        template = products / "empty" / "findings.md"
        template.parent.mkdir(parents=True, exist_ok=True)
        template.write_text("# [Study] Research Findings\n\n## Key Findings\n1. Finding one\n1. Finding two\n")

        eligible = self.finder.find_research_files(ignore_time_delay=True, ignore_completeness_check=True)
        self.assertIn(str(template), set(eligible))


if __name__ == '__main__':
    # Configure test runner
    unittest.main(verbosity=2)