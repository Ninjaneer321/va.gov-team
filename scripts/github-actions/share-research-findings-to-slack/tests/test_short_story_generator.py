#!/usr/bin/env python3
"""
Unit tests for short_story_generator.py
"""

import json
import os
import shutil
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch, MagicMock
from urllib import error

import sys

sys.path.insert(0, str(Path(__file__).parent.parent))
from short_story_generator import (  # noqa: E402
    extract_plaintext_prompt,
    extract_short_story,
    generate_short_story,
    prepare_research_content,
    write_short_story_to_github_env,
)


class TestShortStoryGenerator(unittest.TestCase):
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        self.original_cwd = os.getcwd()
        os.chdir(self.test_dir)

    def tearDown(self):
        os.chdir(self.original_cwd)
        shutil.rmtree(self.test_dir)

    def test_extract_plaintext_prompt_success(self):
        markdown = """# Prompt

```plaintext
Instruction one.
Instruction two.
```
"""
        prompt = extract_plaintext_prompt(markdown)
        self.assertEqual(prompt, "Instruction one.\nInstruction two.")

    def test_extract_plaintext_prompt_missing_fence(self):
        with self.assertRaises(ValueError):
            extract_plaintext_prompt("# Prompt without fenced instructions")

    def test_extract_short_story_from_string_content(self):
        response = {"choices": [{"message": {"content": "Generated short story"}}]}
        self.assertEqual(extract_short_story(response), "Generated short story")

    def test_extract_short_story_from_list_content(self):
        response = {
            "choices": [
                {
                    "message": {
                        "content": [
                            {"type": "output_text", "text": "Part one "},
                            {"type": "output_text", "text": "part two"},
                        ]
                    }
                }
            ]
        }
        self.assertEqual(extract_short_story(response), "Part one part two")

    def test_extract_short_story_ignores_non_string_text_parts(self):
        response = {
            "choices": [
                {
                    "message": {
                        "content": [
                            {"type": "output_text", "text": "Valid text"},
                            {"type": "output_text", "text": 123},
                        ]
                    }
                }
            ]
        }
        self.assertEqual(extract_short_story(response), "Valid text")

    @patch("short_story_generator.request.urlopen")
    def test_generate_short_story_calls_models_api(self, mock_urlopen):
        fake_response = MagicMock()
        fake_response.read.return_value = json.dumps(
            {"choices": [{"message": {"content": "Story from model"}}]}
        ).encode("utf-8")
        mock_urlopen.return_value.__enter__.return_value = fake_response

        result = generate_short_story("system prompt", "research content", "token-123")

        self.assertEqual(result, "Story from model")
        request_obj = mock_urlopen.call_args[0][0]
        self.assertEqual(request_obj.full_url, "https://models.github.ai/inference/chat/completions")
        self.assertEqual(request_obj.get_header("Authorization"), "Bearer token-123")

    @patch("short_story_generator.request.urlopen")
    def test_generate_short_story_http_error(self, mock_urlopen):
        http_error = error.HTTPError(
            url="https://models.github.ai/inference/chat/completions",
            code=401,
            msg="Unauthorized",
            hdrs=None,
            fp=None,
        )
        http_error.read = MagicMock(return_value=b'{"error":"bad token"}')
        mock_urlopen.side_effect = http_error

        with self.assertRaises(RuntimeError) as ctx:
            generate_short_story("system prompt", "research content", "bad-token")

        self.assertIn("HTTP error 401", str(ctx.exception))
        self.assertIn("bad token", str(ctx.exception))

    @patch("short_story_generator.request.urlopen")
    def test_generate_short_story_url_error(self, mock_urlopen):
        mock_urlopen.side_effect = error.URLError("network down")

        with self.assertRaises(RuntimeError) as ctx:
            generate_short_story("system prompt", "research content", "token-123")

        self.assertIn("connection error", str(ctx.exception))

    def test_write_short_story_to_github_env_multiline(self):
        env_file = Path(self.test_dir) / "github_env.txt"

        with patch.dict(os.environ, {"GITHUB_ENV": str(env_file)}):
            write_short_story_to_github_env("Line 1\nLine 2")

        written = env_file.read_text(encoding="utf-8")
        self.assertEqual(written, "SHORT_STORY<<EOF\nLine 1\nLine 2\nEOF\n")

    def test_prepare_research_content_strips_non_essential_sections(self):
        content = """---
title: Test
owner: Team
---

## Findings
Important insight.

```yaml key-finding-labels
- label: usability
```

More useful content.

## Appendix
This should be removed.
"""
        processed = prepare_research_content(content)
        self.assertNotIn("title: Test", processed)
        self.assertNotIn("key-finding-labels", processed)
        self.assertNotIn("This should be removed.", processed)
        self.assertIn("Important insight.", processed)
        self.assertIn("More useful content.", processed)

    def test_prepare_research_content_research_participants_fallback(self):
        content = """## Findings
Useful summary content.

## Research participants
Participant table and demographics.
"""
        processed = prepare_research_content(content)
        self.assertEqual(processed, "## Findings\nUseful summary content.")

    def test_prepare_research_content_truncates_to_max_chars(self):
        content = "A" * 50
        processed = prepare_research_content(content, max_chars=20)
        self.assertEqual(processed, "A" * 20 + "\n\n[Content truncated for length]")


if __name__ == "__main__":
    unittest.main(verbosity=2)
