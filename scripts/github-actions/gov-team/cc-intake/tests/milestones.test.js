import { describe, test, expect, vi } from "vitest";
import { createMilestone } from "../src/modules/milestones.js";
import { GITHUB_API_VERSION } from "./fixtures.js";

const API_VERSION = GITHUB_API_VERSION;

function mockOctokit(responses) {
  const calls = [];
  return {
    request: vi.fn(async (route, params) => {
      calls.push({ route, params });
      const handler = responses[route];
      if (typeof handler === "function") return handler(params);
      return handler;
    }),
    calls,
  };
}

describe("createMilestone", () => {
  test("creates a new milestone and assigns it", async () => {
    const octokit = mockOctokit({
      "GET /repos/{owner}/{repo}/issues/{issue_number}": {
        data: { title: "Collab Cycle", number: 100, milestone: null },
      },
      "GET /repos/{owner}/{repo}/milestones": { data: [] },
      "POST /repos/{owner}/{repo}/milestones": {
        data: { number: 1, title: "Collab Cycle #100" },
      },
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}": { data: {} },
    });

    const result = await createMilestone(octokit, { owner: "owner", repo: "repo", issueNumber: 100, githubAPIVersion: API_VERSION });

    expect(result).toBe("Collab Cycle #100");
    expect(octokit.request).toHaveBeenCalledWith(
      "POST /repos/{owner}/{repo}/milestones",
      expect.objectContaining({ title: "Collab Cycle #100" }),
    );
    expect(octokit.request).toHaveBeenCalledWith(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      expect.objectContaining({ milestone: 1 }),
    );
  });

  test("skips creation when milestone already assigned to issue", async () => {
    const octokit = mockOctokit({
      "GET /repos/{owner}/{repo}/issues/{issue_number}": {
        data: {
          title: "Collab Cycle",
          number: 100,
          milestone: { title: "Collab Cycle #100" },
        },
      },
    });

    const result = await createMilestone(octokit, { owner: "owner", repo: "repo", issueNumber: 100, githubAPIVersion: API_VERSION });

    expect(result).toBe("Collab Cycle #100");
    expect(octokit.request).toHaveBeenCalledTimes(1);
  });

  test("finds existing open milestone and assigns it", async () => {
    const octokit = mockOctokit({
      "GET /repos/{owner}/{repo}/issues/{issue_number}": {
        data: { title: "Collab Cycle", number: 100, milestone: null },
      },
      "GET /repos/{owner}/{repo}/milestones": (params) => {
        if (params.state === "open") {
          return {
            data: [{ number: 5, title: "Collab Cycle #100" }],
          };
        }
        return { data: [] };
      },
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}": { data: {} },
    });

    const result = await createMilestone(octokit, { owner: "owner", repo: "repo", issueNumber: 100, githubAPIVersion: API_VERSION });

    expect(result).toBe("Collab Cycle #100");
    expect(octokit.request).not.toHaveBeenCalledWith(
      "POST /repos/{owner}/{repo}/milestones",
      expect.anything(),
    );
  });

  test("finds existing closed milestone and assigns it", async () => {
    const octokit = mockOctokit({
      "GET /repos/{owner}/{repo}/issues/{issue_number}": {
        data: { title: "Collab Cycle", number: 100, milestone: null },
      },
      "GET /repos/{owner}/{repo}/milestones": (params) => {
        if (params.state === "closed") {
          return {
            data: [{ number: 7, title: "Collab Cycle #100" }],
          };
        }
        return { data: [] };
      },
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}": { data: {} },
    });

    const result = await createMilestone(octokit, { owner: "owner", repo: "repo", issueNumber: 100, githubAPIVersion: API_VERSION });

    expect(result).toBe("Collab Cycle #100");
    expect(octokit.request).toHaveBeenCalledWith(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      expect.objectContaining({ milestone: 7 }),
    );
  });

  test("paginates through milestones", async () => {
    const page1 = Array.from({ length: 100 }, (_, i) => ({
      number: i,
      title: `Other #${i}`,
    }));

    const octokit = mockOctokit({
      "GET /repos/{owner}/{repo}/issues/{issue_number}": {
        data: { title: "Collab Cycle", number: 100, milestone: null },
      },
      "GET /repos/{owner}/{repo}/milestones": (params) => {
        if (params.state === "open" && params.page === 1) {
          return { data: page1 };
        }
        if (params.state === "open" && params.page === 2) {
          return { data: [{ number: 200, title: "Collab Cycle #100" }] };
        }
        return { data: [] };
      },
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}": { data: {} },
    });

    const result = await createMilestone(octokit, { owner: "owner", repo: "repo", issueNumber: 100, githubAPIVersion: API_VERSION });

    expect(result).toBe("Collab Cycle #100");
  });

  test("throws on API error", async () => {
    const octokit = mockOctokit({
      "GET /repos/{owner}/{repo}/issues/{issue_number}": () => {
        throw new Error("Network error");
      },
    });

    await expect(
      createMilestone(octokit, { owner: "owner", repo: "repo", issueNumber: 100, githubAPIVersion: API_VERSION }),
    ).rejects.toThrow("Network error");
  });
});
