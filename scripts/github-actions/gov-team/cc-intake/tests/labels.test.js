import { describe, test, expect, vi } from "vitest";
import { addLabelsToIssue } from "../src/modules/labels.js";
import { GITHUB_API_VERSION } from "./fixtures.js";

const API_PARAMS = {
  owner: "test-owner",
  repo: "test-repo",
  issueNumber: 123,
  githubAPIVersion: GITHUB_API_VERSION,
};

describe("addLabelsToIssue", () => {
  test("adds team labels, product label, and feature label", async () => {
    const mockOctokit = { request: vi.fn().mockResolvedValue({}) };

    await addLabelsToIssue(mockOctokit, {
      ...API_PARAMS,
      teamLabels: ["team-label"],
      productLabel: "product-label",
      featureLabel: "feature-label",
      platform: "VA.gov",
    });

    expect(mockOctokit.request).toHaveBeenCalledWith(
      "POST /repos/{owner}/{repo}/issues/{issue_number}/labels",
      expect.objectContaining({
        labels: ["team-label", "product-label", "feature-label"],
      }),
    );
  });

  test("excludes _No response_ product label", async () => {
    const mockOctokit = { request: vi.fn().mockResolvedValue({}) };

    await addLabelsToIssue(mockOctokit, {
      ...API_PARAMS,
      teamLabels: ["team-label"],
      productLabel: "_No response_",
      featureLabel: "_No response_",
      platform: "VA.gov",
    });

    expect(mockOctokit.request).toHaveBeenCalledWith(
      "POST /repos/{owner}/{repo}/issues/{issue_number}/labels",
      expect.objectContaining({
        labels: ["team-label"],
      }),
    );
  });

  test("adds mobile app label for VA Mobile App platform", async () => {
    const mockOctokit = { request: vi.fn().mockResolvedValue({}) };

    await addLabelsToIssue(mockOctokit, {
      ...API_PARAMS,
      teamLabels: [],
      productLabel: "_No response_",
      featureLabel: "_No response_",
      platform: "VA Mobile App",
    });

    expect(mockOctokit.request).toHaveBeenCalledWith(
      "POST /repos/{owner}/{repo}/issues/{issue_number}/labels",
      expect.objectContaining({
        labels: ["collaboration-cycle-mobile-app"],
      }),
    );
  });

  test("does not call API when no labels to add", async () => {
    const mockOctokit = { request: vi.fn().mockResolvedValue({}) };

    await addLabelsToIssue(mockOctokit, {
      ...API_PARAMS,
      teamLabels: [],
      productLabel: "_No response_",
      featureLabel: "_No response_",
      platform: "VA.gov",
    });

    expect(mockOctokit.request).not.toHaveBeenCalled();
  });

  test("throws on API error", async () => {
    const mockOctokit = {
      request: vi.fn().mockRejectedValue(new Error("API error")),
    };

    await expect(
      addLabelsToIssue(mockOctokit, {
        ...API_PARAMS,
        teamLabels: ["label"],
        productLabel: "_No response_",
        featureLabel: "_No response_",
        platform: "VA.gov",
      }),
    ).rejects.toThrow("API error");
  });
});
