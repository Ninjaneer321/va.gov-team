import { describe, test, expect, vi } from "vitest";
import { buildInitiateTouchpointUrls } from "../modules/touchpoint-urls.js";

describe("buildInitiateTouchpointUrls", () => {
  const defaults = {
    teamName: "Test Team (99999)",
    productName: "Test Product",
    productLabel: "test-product",
    featureLabel: "test-feature",
    teamLabels: ["test-team"],
    platform: "VA.gov",
    milestoneTitle: "Collab Cycle #123",
  };

  test("replaces all 5 touchpoint placeholders", () => {
    const body = [
      "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}",
      "{{INITIATE_TOUCHPOINT_URL_ARCHITECTURE_INTENT}}",
      "{{INITIATE_TOUCHPOINT_URL_DESIGN_INTENT}}",
      "{{INITIATE_TOUCHPOINT_URL_MIDPOINT_REVIEW}}",
      "{{INITIATE_TOUCHPOINT_URL_STAGING_REVIEW}}",
    ].join("\n");

    const result = buildInitiateTouchpointUrls(body, defaults);

    expect(result).not.toContain("{{INITIATE_TOUCHPOINT_URL_");
    expect(result).toContain("DRAFT-PO-Sync.md");
    expect(result).toContain("DRAFT-Architecture-Intent.md");
    expect(result).toContain("DRAFT-Design-Intent.md");
    expect(result).toContain("DRAFT-Midpoint-Review.md");
    expect(result).toContain("DRAFT-Staging-Review.md");
  });

  test("includes correct title with team and product name", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, defaults);
    const url = new URL(result);

    expect(url.searchParams.get("title")).toBe(
      "PO Sync - Test Team (99999) - Test Product",
    );
  });

  test("includes default labels plus touchpoint-specific label", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, defaults);
    const url = new URL(result);
    const labels = url.searchParams.get("labels").split(",");

    expect(labels).toContain("collaboration-cycle");
    expect(labels).toContain("CC-touchpoint");
    expect(labels).toContain("PO-sync");
    expect(labels).toContain("test-team");
    expect(labels).toContain("test-product");
    expect(labels).toContain("test-feature");
  });

  test("includes mobile app label when platform is VA Mobile App", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, {
      ...defaults,
      platform: "VA Mobile App",
    });
    const url = new URL(result);
    const labels = url.searchParams.get("labels").split(",");

    expect(labels).toContain("collaboration-cycle-mobile-app");
  });

  test("excludes mobile app label when platform is VA.gov", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, defaults);
    const url = new URL(result);
    const labels = url.searchParams.get("labels").split(",");

    expect(labels).not.toContain("collaboration-cycle-mobile-app");
  });

  test("includes milestone in URL", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, defaults);
    const url = new URL(result);

    expect(url.searchParams.get("milestone")).toBe("Collab Cycle #123");
  });

  test("omits milestone when not provided", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, {
      ...defaults,
      milestoneTitle: null,
    });
    const url = new URL(result);

    expect(url.searchParams.has("milestone")).toBe(false);
  });

  test("omits _No response_ labels from URL", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, {
      ...defaults,
      featureLabel: "_No response_",
    });
    const url = new URL(result);
    const labels = url.searchParams.get("labels").split(",");

    expect(labels).not.toContain("_No response_");
    expect(labels).toContain("test-product");
  });

  test("omits empty team/product names from title", () => {
    const body = "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}";
    const result = buildInitiateTouchpointUrls(body, {
      ...defaults,
      teamName: "_No response_",
      productName: "_No response_",
    });
    const url = new URL(result);

    expect(url.searchParams.get("title")).toBe("PO Sync");
  });

  test("throws on error and logs failure", () => {
    expect(() =>
      buildInitiateTouchpointUrls(null, {
        teamName: "T",
        productName: "P",
        productLabel: "p",
        featureLabel: "f",
        milestoneTitle: "M",
      }),
    ).toThrow();
  });
});
