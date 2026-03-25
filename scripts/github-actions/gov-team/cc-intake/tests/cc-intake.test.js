import { describe, test, expect, vi, beforeEach } from "vitest";

vi.mock("octokit", () => {
  const MockOctokit = vi.fn(function () {
    this.request = vi.fn();
  });
  return { Octokit: MockOctokit };
});

vi.mock("../modules/milestones.js", () => ({
  createMilestone: vi.fn().mockResolvedValue("Collab Cycle #100"),
}));

vi.mock("../modules/intake-parser.js", () => ({
  fetchIntakeResponses: vi.fn().mockResolvedValue({
    teamName: "Ask VA (22008)",
    productName: "Ask VA",
    featureName: "Dashboard",
    productDirectoryLink: "https://example.com",
    initiativeOverview: "A tool for Veterans to ask questions.",
    productLabel: "ask-va",
    featureLabel: "ask-va-dashboard",
    audience: "Veterans",
    visibleChanges: "will",
    platform: "VA.gov",
  }),
}));

vi.mock("../modules/team-manifest.js", () => ({
  fetchTeamManifest: vi.fn().mockResolvedValue({
    teamReadme: "https://github.com/org/repo/blob/master/teams/ask-va/README.md",
    teamLabels: ["ask-va"],
    slackChannel: "#ask-va",
    slackChannelUrl: "https://dsva.slack.com/channels/ask-va",
    vaBusinessOwner: "John Smith",
  }),
}));

vi.mock("../modules/issue-body.js", () => ({
  buildIssueBody: vi.fn().mockReturnValue("# Built issue body"),
  updateIssueBody: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../modules/labels.js", () => ({
  addLabelsToIssue: vi.fn().mockResolvedValue(undefined),
}));

process.env.GITHUB_TOKEN = "test-token";
process.env.ISSUE_NUMBER = "100";
process.env.GITHUB_REPOSITORY = "owner/repo";
process.env.GITHUB_WORKSPACE = "/workspace";

const { processIntake } = await import("../cc-intake.js");

import { createMilestone } from "../modules/milestones.js";
import { fetchIntakeResponses } from "../modules/intake-parser.js";
import { fetchTeamManifest } from "../modules/team-manifest.js";
import { buildIssueBody, updateIssueBody } from "../modules/issue-body.js";
import { addLabelsToIssue } from "../modules/labels.js";

describe("processIntake", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("orchestrates the full intake pipeline", async () => {
    await processIntake();


    expect(createMilestone).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        owner: "owner",
        repo: "repo",
        issueNumber: "100",
      }),
    );

    expect(fetchIntakeResponses).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        owner: "owner",
        repo: "repo",
        issueNumber: "100",
      }),
    );

    expect(fetchTeamManifest).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        teamNameAnswer: "Ask VA (22008)",
        workspacePath: "/workspace",
      }),
    );

    expect(buildIssueBody).toHaveBeenCalledWith(
      expect.objectContaining({
        milestoneTitle: "Collab Cycle #100",
      }),
    );

    expect(updateIssueBody).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        issueBody: "# Built issue body",
      }),
    );

    expect(addLabelsToIssue).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        teamLabels: ["ask-va"],
        productLabel: "ask-va",
        featureLabel: "ask-va-dashboard",
        platform: "VA.gov",
      }),
    );
  });

  test("calls process.exit(1) on error", async () => {
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {});
    createMilestone.mockRejectedValueOnce(new Error("API failure"));

    await processIntake();

    expect(exitSpy).toHaveBeenCalledWith(1);
    exitSpy.mockRestore();
  });

  test("continues processing when milestone fails", async () => {
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {});
    createMilestone.mockRejectedValueOnce(new Error("Milestone error"));

    await processIntake();

    expect(fetchIntakeResponses).toHaveBeenCalled();
    expect(fetchTeamManifest).toHaveBeenCalled();
    expect(buildIssueBody).toHaveBeenCalled();
    expect(addLabelsToIssue).toHaveBeenCalled();
    expect(exitSpy).toHaveBeenCalledWith(1);
    exitSpy.mockRestore();
  });

  test("skips dependent steps when intake responses fail", async () => {
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {});
    fetchIntakeResponses.mockRejectedValueOnce(new Error("Parse error"));

    await processIntake();

    expect(fetchTeamManifest).not.toHaveBeenCalled();
    expect(buildIssueBody).not.toHaveBeenCalled();
    expect(addLabelsToIssue).not.toHaveBeenCalled();
    expect(exitSpy).toHaveBeenCalledWith(1);
    exitSpy.mockRestore();
  });
});

describe("cc-intake module-level guards", () => {
  test("exits when ISSUE_NUMBER is not set", async () => {
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {});
    const originalIssueNumber = process.env.ISSUE_NUMBER;

    delete process.env.ISSUE_NUMBER;
    vi.resetModules();

    await import("../cc-intake.js");

    expect(exitSpy).toHaveBeenCalledWith(1);

    process.env.ISSUE_NUMBER = originalIssueNumber;
    exitSpy.mockRestore();
  });
});
