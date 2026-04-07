import { describe, test, expect } from "vitest";
import {
  selectCodeBlockFiles,
  assembleCodeBlocks,
  replacePlaceholders,
} from "../src/modules/code-blocks.js";
import { INTAKE_QUESTIONS } from "../src/modules/intake-parser.js";
import { INDIVIDUALS, ORGANIZATIONS, INTAKE_RESPONSES, MANIFEST } from "./fixtures.js";

describe("selectCodeBlockFiles", () => {
  test("includes all blocks for Individuals / OCTO / VA.gov / visible changes", () => {
    const files = selectCodeBlockFiles({
      audience: INDIVIDUALS,
      platform: "VA.gov",
      visibleChanges: "Yes",
      manifest: { vaBusinessOwner: "OCTO" },
    });

    expect(files).toContain("4-po-sync.md");
    expect(files).toContain("5-architecture-intent.md");
    expect(files).toContain("6-design-review.md");
    expect(files).toContain("7-staging-review.md");
    expect(files).not.toContain("8-engineering-security-staging-review.md");
    expect(files).toContain("9-other-required-tasks.md");
  });

  test("includes PO Sync for VES teams", () => {
    const files = selectCodeBlockFiles({
      audience: INDIVIDUALS,
      platform: "VA.gov",
      visibleChanges: "Yes",
      manifest: { vaBusinessOwner: "VES" },
    });

    expect(files).toContain("4-po-sync.md");
  });

  test("excludes PO Sync for non-OCTO/VES teams", () => {
    const files = selectCodeBlockFiles({
      audience: INDIVIDUALS,
      platform: "VA.gov",
      visibleChanges: "Yes",
      manifest: { vaBusinessOwner: "VBA" },
    });

    expect(files).not.toContain("4-po-sync.md");
  });

  test("excludes PO Sync and design review for Organizations audience", () => {
    const files = selectCodeBlockFiles({
      audience: ORGANIZATIONS,
      platform: "VA.gov",
      visibleChanges: "Yes",
      manifest: { vaBusinessOwner: "OCTO" },
    });

    expect(files).not.toContain("4-po-sync.md");
    expect(files).not.toContain("6-design-review.md");
  });

  test("includes staging review for Organizations with no visible changes", () => {
    const files = selectCodeBlockFiles({
      audience: ORGANIZATIONS,
      platform: "VA.gov",
      visibleChanges: "No",
      manifest: { vaBusinessOwner: "OCTO" },
    });

    const stagingCount = files.filter((f) => f === "7-staging-review.md").length;
    expect(stagingCount).toBe(1);
  });

  test("excludes staging review for VA Mobile App platform", () => {
    const files = selectCodeBlockFiles({
      audience: INDIVIDUALS,
      platform: "VA Mobile App",
      visibleChanges: "Yes",
      manifest: { vaBusinessOwner: "OCTO" },
    });

    expect(files).not.toContain("7-staging-review.md");
  });

  test("includes staging review block for No visible changes", () => {
    const files = selectCodeBlockFiles({
      audience: INDIVIDUALS,
      platform: "VA Mobile App",
      visibleChanges: "No",
      manifest: { vaBusinessOwner: "OCTO" },
    });

    expect(files).toContain("7-staging-review.md");
  });

  test("always includes base blocks and other required tasks", () => {
    const files = selectCodeBlockFiles({
      audience: INDIVIDUALS,
      platform: "VA.gov",
      visibleChanges: "Yes",
      manifest: { vaBusinessOwner: "OCTO" },
    });

    expect(files).toContain("1-collab-cycle-information.md");
    expect(files).toContain("2-team-and-product.md");
    expect(files).toContain("3-touchpoints-intro.md");
    expect(files).toContain("5-architecture-intent.md");
    expect(files).toContain("9-other-required-tasks.md");
  });
});

describe("assembleCodeBlocks", () => {
  test("concatenates content blocks", () => {
    const result = assembleCodeBlocks(["Hello ", "World"]);
    expect(result).toBe("Hello World");
  });

  test("replaces step numbers with emojis in order", () => {
    const result = assembleCodeBlocks([
      "Step {{STEP_NUMBER}} first",
      "No step here",
      "Step {{STEP_NUMBER}} second",
    ]);

    expect(result).toContain("Step 1️⃣ first");
    expect(result).toContain("Step 2️⃣ second");
    expect(result).toContain("No step here");
  });

  test("falls back to numeric string beyond 10 steps", () => {
    const blocks = Array.from({ length: 11 }, (_, i) =>
      `Step {{STEP_NUMBER}} block ${i + 1}`,
    );

    const result = assembleCodeBlocks(blocks);
    expect(result).toContain("Step 🔟 block 10");
    expect(result).toContain("Step 11 block 11");
  });

  test("replaces all step number occurrences in one block", () => {
    const result = assembleCodeBlocks([
      "{{STEP_NUMBER}} title\n{{STEP_NUMBER}} again",
    ]);

    expect(result).toBe("1️⃣ title\n1️⃣ again");
  });

  test("throws on error", () => {
    expect(() => assembleCodeBlocks(null)).toThrow();
  });
});

describe("replacePlaceholders", () => {
  const manifest = MANIFEST;

  const intakeResponses = INTAKE_RESPONSES;

  test("replaces intake question placeholders", () => {
    const body = "Team: {{TEAM_NAME}}, Product: {{PRODUCT_NAME}}";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses,
      manifest,
    });

    expect(result).toContain("Team: Test Team (99999)");
    expect(result).toContain("Product: Test Product");
  });

  test("applies transform functions", () => {
    const body = "Changes {{HAS_VISIBLE_CHANGES}} happen";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses,
      manifest,
    });

    expect(result).toBe("Changes will happen");
  });

  test("applies transform for No visible changes", () => {
    const body = "Changes {{HAS_VISIBLE_CHANGES}} happen";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses: { ...intakeResponses, visibleChanges: "No" },
      manifest,
    });

    expect(result).toBe("Changes will not happen");
  });

  test("wraps label values in backticks", () => {
    const body = "Product: {{PRODUCT_LABEL}}, Feature: {{FEATURE_LABEL}}";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses,
      manifest,
    });

    expect(result).toContain("`test-product`");
    expect(result).toContain("`test-feature`");
  });

  test("does not wrap _No response_ labels in backticks", () => {
    const body = "Feature: {{FEATURE_LABEL}}";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses: { ...intakeResponses, featureLabel: "_No response_" },
      manifest,
    });

    expect(result).toBe("Feature: _No response_");
  });

  test("replaces team manifest placeholders", () => {
    const body =
      "[{{TEAM_SLACK_CHANNEL}}]({{TEAM_SLACK_CHANNEL_URL}}) {{TEAM_README}} {{TEAM_LABELS}}";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses,
      manifest,
    });

    expect(result).toContain("#test-channel");
    expect(result).toContain("https://slack.com/test");
    expect(result).toContain("https://example.com/readme");
    expect(result).toContain("`team-label-1`, `team-label-2`");
  });

  test("handles empty team labels array", () => {
    const body = "Labels: {{TEAM_LABELS}}";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses,
      manifest: { ...manifest, teamLabels: [] },
    });

    expect(result).toBe("Labels: {{TEAM_LABELS}}");
  });

  test("handles missing manifest fields gracefully", () => {
    const body = "{{TEAM_README}} {{TEAM_SLACK_CHANNEL}} {{TEAM_SLACK_CHANNEL_URL}}";
    const result = replacePlaceholders(body, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses,
      manifest: { teamLabels: [], teamReadme: null, slackChannel: null, slackChannelUrl: null },
    });

    expect(result).toContain("{{TEAM_README}}");
    expect(result).toContain("{{TEAM_SLACK_CHANNEL}}");
    expect(result).toContain("{{TEAM_SLACK_CHANNEL_URL}}");
  });

  test("throws on error", () => {
    expect(() =>
      replacePlaceholders("body", {
        intakeQuestions: null,
        intakeResponses: {},
        manifest: {},
      }),
    ).toThrow();
  });
});
