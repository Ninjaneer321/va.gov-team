import { describe, test, expect, vi } from "vitest";
import { INTAKE_QUESTIONS, parseIntakeQuestions, fetchIntakeResponses } from "../modules/intake-parser.js";
import { MOCK_ISSUE_BODY, GITHUB_API_VERSION } from "./fixtures.js";

describe("INTAKE_QUESTIONS", () => {
  test("has 10 questions", () => {
    expect(INTAKE_QUESTIONS).toHaveLength(10);
  });

  test("each question has key, question, and placeholder", () => {
    for (const q of INTAKE_QUESTIONS) {
      expect(q).toHaveProperty("key");
      expect(q).toHaveProperty("question");
      expect(q).toHaveProperty("placeholder");
    }
  });

  test("visibleChanges has a transform function", () => {
    const q = INTAKE_QUESTIONS.find((q) => q.key === "visibleChanges");
    expect(q.transform("Yes")).toBe("will");
    expect(q.transform("No")).toBe("will not");
  });
});

describe("parseIntakeQuestions", () => {
  test("parses all responses from issue body markdown", () => {
    const result = parseIntakeQuestions(MOCK_ISSUE_BODY);

    expect(result.teamName).toBe("Test Team (99999)");
    expect(result.productName).toBe("Test Product");
    expect(result.featureName).toBe("Test Feature");
    expect(result.initiativeOverview).toBe("A tool that helps Veterans submit claims online.");
    expect(result.productDirectoryLink).toBe("https://example.com/outline");
    expect(result.productLabel).toBe("test-product");
    expect(result.featureLabel).toBe("test-feature");
    expect(result.audience).toContain("Individuals");
    expect(result.visibleChanges).toBe("Yes");
    expect(result.platform).toBe("VA.gov");
  });

  test("handles markdown starting with ###", () => {
    const body = "### Your team name\n\nDirect Start (12345)";
    const result = parseIntakeQuestions(body);

    expect(result.teamName).toBe("Direct Start (12345)");
  });

  test("handles \\r\\n line endings", () => {
    const body = "### Your team name\r\n\r\nCRLF Team (11111)";
    const result = parseIntakeQuestions(body);

    expect(result.teamName).toBe("CRLF Team (11111)");
  });

  test("returns empty string for section with no answer", () => {
    const body = "### Your team name";
    const result = parseIntakeQuestions(body);

    expect(result.teamName).toBe("");
  });

  test("correctly parses responses when optional sections are missing", () => {
    const bodyWithoutFeatureLabel = `### Your team name

Test Team (99999)

### Product name

Test Product

### Feature name

Test Feature

### Initiative overview

A tool that helps Veterans submit claims online.

### Product directory link

https://example.com/outline

### GitHub label for product

test-product

### Who is the primary audience for this product?

Individuals (Veterans, their caregivers, families, survivors, or representatives directly supporting a Veteran)

### Will your work result in visible changes to the user experience?

Yes

### Where will your product live?

VA.gov`;

    const result = parseIntakeQuestions(bodyWithoutFeatureLabel);

    expect(result.featureLabel).toBeUndefined();
    expect(result.audience).toContain("Individuals");
    expect(result.visibleChanges).toBe("Yes");
    expect(result.platform).toBe("VA.gov");
  });
});

describe("fetchIntakeResponses", () => {
  test("fetches issue and parses body", async () => {
    const mockOctokit = {
      request: vi.fn().mockResolvedValue({
        data: { body: MOCK_ISSUE_BODY },
      }),
    };

    const result = await fetchIntakeResponses(mockOctokit, {
      owner: "test-owner",
      repo: "test-repo",
      issueNumber: 123,
      githubAPIVersion: GITHUB_API_VERSION,
    });

    expect(mockOctokit.request).toHaveBeenCalledWith(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      expect.objectContaining({
        owner: "test-owner",
        repo: "test-repo",
        issue_number: 123,
      }),
    );
    expect(result.teamName).toBe("Test Team (99999)");
    expect(result.platform).toBe("VA.gov");
  });

  test("throws on API error", async () => {
    const mockOctokit = {
      request: vi.fn().mockRejectedValue(new Error("Not found")),
    };

    await expect(
      fetchIntakeResponses(mockOctokit, {
        owner: "test-owner",
        repo: "test-repo",
        issueNumber: 999,
        githubAPIVersion: "2022-11-28",
      }),
    ).rejects.toThrow("Not found");
  });
});
