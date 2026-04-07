import { describe, test, expect, vi } from "vitest";
import { fetchTeamManifest } from "../src/modules/team-manifest.js";

vi.mock("fs", () => ({
  default: {
    readFileSync: vi.fn(),
  },
}));

import fs from "fs";

const API_VERSION = "2022-11-28";

const TEAM_LOOKUP = {
  "22008": {
    manifest_url:
      "https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/ask-va/manifest.md",
    readme_path: "teams/ask-va/README.md",
  },
};

const SAMPLE_README = `# Ask VA

## Team Information

- **Slack Channel:** [#ask-va](https://dsva.slack.com/channels/ask-va)
- **GitHub Team Labels:**
  - [ask-va](https://github.com/department-of-veterans-affairs/va.gov-team/labels/ask-va)
  - [avs](https://github.com/department-of-veterans-affairs/va.gov-team/labels/avs)
- **VA Business Owner:** John Smith
`;

function mockOctokit(readmeContent) {
  return {
    request: vi.fn().mockResolvedValue({
      data: {
        content: Buffer.from(readmeContent).toString("base64"),
      },
    }),
  };
}

describe("fetchTeamManifest", () => {
  test("parses team ID, loads lookup, fetches README, and returns manifest", async () => {
    fs.readFileSync.mockReturnValue(JSON.stringify(TEAM_LOOKUP));
    const octokit = mockOctokit(SAMPLE_README);

    const result = await fetchTeamManifest(octokit, {
      teamNameAnswer: "Ask VA (22008)",
      workspacePath: "/workspace",
      githubAPIVersion: API_VERSION,
      owner: "department-of-veterans-affairs",
      sensitiveRepo: "va.gov-team-sensitive",
    });

    expect(result.teamReadme).toBe(
      "https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/ask-va/README.md",
    );
    expect(result.teamLabels).toEqual(["ask-va", "avs"]);
    expect(result.slackChannel).toBe("#ask-va");
    expect(result.slackChannelUrl).toBe("https://dsva.slack.com/channels/ask-va");
    expect(result.vaBusinessOwner).toBe("John Smith");

    expect(octokit.request).toHaveBeenCalledWith(
      "GET /repos/{owner}/{repo}/contents/{path}",
      expect.objectContaining({
        path: "teams/ask-va/manifest.md",
      }),
    );
  });

  test("handles team name with nested parentheses", async () => {
    const lookup = {
      "99999": {
        manifest_url:
          "https://github.com/org/repo/blob/master/teams/my-team/manifest.md",
        readme_path: "teams/my-team/README.md",
      },
    };
    fs.readFileSync.mockReturnValue(JSON.stringify(lookup));
    const octokit = mockOctokit(SAMPLE_README);

    const result = await fetchTeamManifest(octokit, {
      teamNameAnswer: "My Team (formerly Other) (99999)",
      workspacePath: "/workspace",
      githubAPIVersion: API_VERSION,
      owner: "org",
      sensitiveRepo: "repo",
    });

    expect(result.teamLabels).toEqual(["ask-va", "avs"]);
  });

  test("returns nulls for missing README fields", async () => {
    fs.readFileSync.mockReturnValue(JSON.stringify(TEAM_LOOKUP));
    const octokit = mockOctokit("# Empty README\n\nNo relevant content here.");

    const result = await fetchTeamManifest(octokit, {
      teamNameAnswer: "Ask VA (22008)",
      workspacePath: "/workspace",
      githubAPIVersion: API_VERSION,
      owner: "department-of-veterans-affairs",
      sensitiveRepo: "va.gov-team-sensitive",
    });

    expect(result.slackChannel).toBeNull();
    expect(result.slackChannelUrl).toBeNull();
    expect(result.teamLabels).toEqual([]);
    expect(result.vaBusinessOwner).toBeNull();
  });

  test("handles labels without links (plain text)", async () => {
    const readme = `# Team

- **GitHub Team Labels:**
  - plain-label
  - another-label
`;
    fs.readFileSync.mockReturnValue(JSON.stringify(TEAM_LOOKUP));
    const octokit = mockOctokit(readme);

    const result = await fetchTeamManifest(octokit, {
      teamNameAnswer: "Ask VA (22008)",
      workspacePath: "/workspace",
      githubAPIVersion: API_VERSION,
      owner: "department-of-veterans-affairs",
      sensitiveRepo: "va.gov-team-sensitive",
    });

    expect(result.teamLabels).toEqual(["plain-label", "another-label"]);
  });

  test("throws on API error", async () => {
    fs.readFileSync.mockReturnValue(JSON.stringify(TEAM_LOOKUP));
    const octokit = {
      request: vi.fn().mockRejectedValue(new Error("Not Found")),
    };

    await expect(
      fetchTeamManifest(octokit, {
        teamNameAnswer: "Ask VA (22008)",
        workspacePath: "/workspace",
        githubAPIVersion: API_VERSION,
        owner: "owner",
        sensitiveRepo: "repo",
      }),
    ).rejects.toThrow("Not Found");
  });

  test("handles Slack Channel without link", async () => {
    const readme = `# Team

- **Slack Channel:** just-text-no-link
- **VA Business Owner:** 
`;
    fs.readFileSync.mockReturnValue(JSON.stringify(TEAM_LOOKUP));
    const octokit = mockOctokit(readme);

    const result = await fetchTeamManifest(octokit, {
      teamNameAnswer: "Ask VA (22008)",
      workspacePath: "/workspace",
      githubAPIVersion: API_VERSION,
      owner: "department-of-veterans-affairs",
      sensitiveRepo: "va.gov-team-sensitive",
    });

    expect(result.slackChannel).toBeNull();
    expect(result.slackChannelUrl).toBeNull();
    expect(result.vaBusinessOwner).toBeNull();
  });

  test("handles GitHub Team Labels without nested list", async () => {
    const readme = `# Team

- **GitHub Team Labels:** no-nested-list
`;
    fs.readFileSync.mockReturnValue(JSON.stringify(TEAM_LOOKUP));
    const octokit = mockOctokit(readme);

    const result = await fetchTeamManifest(octokit, {
      teamNameAnswer: "Ask VA (22008)",
      workspacePath: "/workspace",
      githubAPIVersion: API_VERSION,
      owner: "department-of-veterans-affairs",
      sensitiveRepo: "va.gov-team-sensitive",
    });

    expect(result.teamLabels).toEqual([]);
  });
});
