#!/usr/bin/env python3
"""
Generate a research short story using GitHub Models API.
"""

import json
import os
import re
import sys
from pathlib import Path
from typing import Dict, Union, List
from urllib import request, error


MODELS_ENDPOINT = "https://models.github.ai/inference/chat/completions"
MODEL_NAME = "openai/gpt-4o"
MAX_TOKENS = 1500


def read_text_file(file_path: str) -> str:
    """Read text from file with UTF-8 and latin-1 fallback."""
    path = Path(file_path)
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        print(
            f"Warning: UTF-8 decode failed for {file_path}; falling back to latin-1 "
            "(content may include incorrectly decoded characters).",
            file=sys.stderr,
        )
        return path.read_text(encoding="latin-1")


def extract_plaintext_prompt(prompt_markdown: str) -> str:
    """Extract prompt instructions from a ```plaintext fenced block."""
    match = re.search(r"```plaintext\s*(.*?)```", prompt_markdown, re.DOTALL | re.IGNORECASE)
    if not match:
        raise ValueError("No ```plaintext fenced prompt found in prompt template.")
    prompt_text = match.group(1).strip()
    if not prompt_text:
        raise ValueError("Prompt instructions are empty inside ```plaintext block.")
    return prompt_text


def extract_short_story(api_response: Dict) -> str:
    """Extract short story content from GitHub Models response."""
    choices = api_response.get("choices", [])
    if not choices:
        raise ValueError("No choices returned by GitHub Models API.")

    content: Union[str, List[Dict]] = choices[0].get("message", {}).get("content", "")
    if isinstance(content, list):
        text_parts = []
        for part in content:
            if isinstance(part, dict):
                text_value = part.get("text", "")
                if isinstance(text_value, str):
                    text_parts.append(text_value)
        content = "".join(text_parts)

    story = str(content).strip()
    if not story:
        raise ValueError("GitHub Models API returned an empty short story.")
    return story


def generate_short_story(system_prompt: str, research_content: str, token: str) -> str:
    """Call GitHub Models API and return the generated short story."""
    payload = {
        "model": MODEL_NAME,
        "max_tokens": MAX_TOKENS,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": research_content},
        ],
    }

    req = request.Request(
        MODELS_ENDPOINT,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with request.urlopen(req) as response:
            response_body = response.read().decode("utf-8")
    except error.HTTPError as exc:
        detail = "No error body returned."
        if hasattr(exc, "read"):
            try:
                detail = exc.read().decode("utf-8", errors="replace")
            except (AttributeError, UnicodeDecodeError, OSError):
                detail = "Could not decode API error response body."
        raise RuntimeError(f"GitHub Models API HTTP error {exc.code}: {detail}") from exc
    except error.URLError as exc:
        raise RuntimeError(f"GitHub Models API connection error: {exc}") from exc

    return extract_short_story(json.loads(response_body))


def write_short_story_to_github_env(short_story: str) -> None:
    """Write SHORT_STORY to GITHUB_ENV using heredoc format."""
    github_env = os.environ.get("GITHUB_ENV")
    if github_env:
        with open(github_env, "a", encoding="utf-8") as env_file:
            env_file.write("SHORT_STORY<<EOF\n")
            env_file.write(short_story)
            env_file.write("\nEOF\n")
    else:
        print(short_story)


def main() -> None:
    """Main entry point."""
    if len(sys.argv) < 3:
        print("Usage: python short_story_generator.py <prompt_template_path> <research_file_path>", file=sys.stderr)
        print("Requires GH_MODELS_TOKEN environment variable.", file=sys.stderr)
        sys.exit(1)

    prompt_template_path = sys.argv[1]
    research_file_path = sys.argv[2]
    token = os.environ.get("GH_MODELS_TOKEN", "").strip()

    if not token:
        print("Error: GH_MODELS_TOKEN is required.", file=sys.stderr)
        sys.exit(1)

    try:
        prompt_markdown = read_text_file(prompt_template_path)
        research_content = read_text_file(research_file_path)
        system_prompt = extract_plaintext_prompt(prompt_markdown)
        short_story = generate_short_story(system_prompt, research_content, token)
        write_short_story_to_github_env(short_story)
        print("Successfully generated short story")
        print(f"Short story length: {len(short_story)} characters")
    except Exception as exc:
        print(f"Error generating short story: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
