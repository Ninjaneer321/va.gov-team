import { describe, test, expect, vi } from "vitest";
import { buildIssueBody, updateIssueBody } from "../src/modules/issue-body.js";
import { GITHUB_API_VERSION } from "./fixtures.js";

vi.mock("fs", () => ({
  default: {
    readFileSync: vi.fn((_path) => "mock markdown content\n"),
  },
}));

vi.mock("../src/modules/code-blocks.js", () => ({
  selectCodeBlockFiles: vi.fn(() => ["1-file.md", "2-file.md"]),
  assembleCodeBlocks: vi.fn((contents) => contents.join("\n")),
  replacePlaceholders: vi.fn((body) => body + "\n[placeholders replaced]"),
}));

vi.mock("../src/modules/touchpoint-urls.js", () => ({
  buildInitiateTouchpointUrls: vi.fn((body) => body + "\n[urls built]"),
}));

vi.mock("../src/modules/intake-parser.js", () => ({
  INTAKE_QUESTIONS: [{ key: "teamName", question: "Team name", placeholder: "{{TEAM_NAME}}" }],
}));

import fs from "fs";
import { selectCodeBlockFiles, assembleCodeBlocks, replacePlaceholders } from "../src/modules/code-blocks.js";
import { buildInitiateTouchpointUrls } from "../src/modules/touchpoint-urls.js";

const API_VERSION = GITHUB_API_VERSION;

describe("buildIssueBody", () => {
  test("orchestrates code blocks, touchpoint URLs, and placeholders", () => {
    const intakeResponses = {
      audience: "Veterans",
      platform: "VA.gov",
      visibleChanges: "will",
      teamName: "Ask VA (22008)",
      productName: "Ask VA",
      productLabel: "ask-va",
      featureLabel: "_No response_",
    };

    const manifest = {
      teamLabels: ["ask-va"],
      vaBusinessOwner: "John Smith",
    };

    const result = buildIssueBody({
      intakeResponses,
      manifest,
      milestoneTitle: "Collab Cycle #100",
    });

    expect(selectCodeBlockFiles).toHaveBeenCalledWith({
      audience: "Veterans",
      platform: "VA.gov",
      visibleChanges: "will",
      manifest,
    });

    expect(fs.readFileSync).toHaveBeenCalledTimes(2);

    expect(assembleCodeBlocks).toHaveBeenCalledWith([
      "mock markdown content\n",
      "mock markdown content\n",
    ]);

    expect(buildInitiateTouchpointUrls).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        teamName: "Ask VA (22008)",
        productName: "Ask VA",
        milestoneTitle: "Collab Cycle #100",
      }),
    );

    expect(replacePlaceholders).toHaveBeenCalled();

    expect(result).toContain("[urls built]");
    expect(result).toContain("[placeholders replaced]");
  });

  test("throws on error", () => {
    selectCodeBlockFiles.mockImplementationOnce(() => {
      throw new Error("bad files");
    });

    expect(() =>
      buildIssueBody({
        intakeResponses: {
          audience: "Veterans",
          platform: "VA.gov",
          visibleChanges: "will",
          teamName: "T",
          productName: "P",
          productLabel: "p",
          featureLabel: "f",
        },
        manifest: {},
        milestoneTitle: "M",
      }),
    ).toThrow("bad files");
  });
});

describe("updateIssueBody", () => {
  test("calls PATCH with issue body", async () => {
    const octokit = {
      request: vi.fn().mockResolvedValue({ data: {} }),
    };

    await updateIssueBody(octokit, {
      owner: "owner",
      repo: "repo",
      issueNumber: 42,
      githubAPIVersion: API_VERSION,
      issueBody: "# Updated body",
    });

    expect(octokit.request).toHaveBeenCalledWith(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      expect.objectContaining({
        owner: "owner",
        repo: "repo",
        issue_number: 42,
        body: "# Updated body",
      }),
    );
  });

  test("throws on API error", async () => {
    const octokit = {
      request: vi.fn().mockRejectedValue(new Error("Forbidden")),
    };

    await expect(
      updateIssueBody(octokit, {
        owner: "owner",
        repo: "repo",
        issueNumber: 42,
        githubAPIVersion: API_VERSION,
        issueBody: "body",
      }),
    ).rejects.toThrow("Forbidden");
  });
});
