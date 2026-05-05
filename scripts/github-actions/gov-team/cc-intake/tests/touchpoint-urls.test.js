import { describe, test, expect, vi } from "vitest";
import {
  buildInitiateTouchpointUrls,
  findCollabCycleIssue,
  addCollabCycleLinkToTouchpoint,
  replaceTouchpointInitiateLink,
} from "../src/modules/touchpoint-urls.js";
import { GITHUB_API_VERSION } from "./fixtures.js";

const OWNER = "department-of-veterans-affairs";
const REPO = "va.gov-team";

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

describe("addCollabCycleLinkToTouchpoint", () => {
  test("replaces the CC ticket placeholder with a link to the collab cycle issue", () => {
    const body =
      "- Collaboration Cycle ticket\n- PO Sync meeting date/time:\n\n## About PO Sync\n\nSome content here.";
    const result = addCollabCycleLinkToTouchpoint(body, {
      collabCycleIssueNumber: 456,
    });

    expect(result).toBe(
      `- Collaboration Cycle ticket: #456\n- PO Sync meeting date/time:\n\n## About PO Sync\n\nSome content here.`,
    );
  });
});

describe("replaceTouchpointInitiateLink", () => {
  const initiateUrl =
    "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=DRAFT-PO-Sync.md&title=PO+Sync+-+Test+Team&labels=collaboration-cycle%2CCC-touchpoint%2CPO-sync&milestone=Collab+Cycle+%23100";

  test("replaces PO Sync initiate link with touchpoint link", () => {
    const body = `Some text\n- [➡️ Initiate a PO Sync](${initiateUrl})\nMore text`;
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["collaboration-cycle", "CC-touchpoint", "PO-sync"],
      touchpointNumber: 789,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toContain(`#789`);
    expect(result).not.toContain("➡️ Initiate a PO Sync");
    expect(result).toContain("Some text");
    expect(result).toContain("More text");
  });

  test("replaces Architecture Intent initiate link", () => {
    const url =
      "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=DRAFT-Architecture-Intent.md&title=Architecture+Intent";
    const body = `- [➡️ Initiate an Architecture Intent](${url})`;
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["CC-touchpoint", "architecture-intent"],
      touchpointNumber: 101,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toContain(`#101`);
    expect(result).not.toContain("➡️ Initiate an Architecture Intent");
  });

  test("replaces Design Intent initiate link", () => {
    const url =
      "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=DRAFT-Design-Intent.md";
    const body = `- [➡️ Initiate a Design Intent](${url})`;
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["CC-touchpoint", "design-intent"],
      touchpointNumber: 202,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toContain(`#202`);
  });

  test("replaces Midpoint Review initiate link", () => {
    const url =
      "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=DRAFT-Midpoint-Review.md";
    const body = `- [➡️ Initiate a Midpoint Review](${url})`;
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["CC-touchpoint", "midpoint-review"],
      touchpointNumber: 303,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toContain(`#303`);
  });

  test("replaces Staging Review initiate link", () => {
    const url =
      "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=DRAFT-Staging-Review.md";
    const body = `- [➡️ Initiate a Staging Review](${url})`;
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["CC-touchpoint", "staging-review"],
      touchpointNumber: 404,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toContain(`#404`);
  });

  test("returns body unchanged when no matching touchpoint label", () => {
    const body = `- [➡️ Initiate a PO Sync](${initiateUrl})`;
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["collaboration-cycle", "some-other-label"],
      touchpointNumber: 789,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toBe(body);
  });

  test("returns body unchanged when initiate link text not found", () => {
    const body = "No initiate links here.";
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["CC-touchpoint", "PO-sync"],
      touchpointNumber: 789,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toBe(body);
  });

  test("only replaces the matching touchpoint, leaving others intact", () => {
    const poUrl =
      "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=DRAFT-PO-Sync.md";
    const archUrl =
      "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=DRAFT-Architecture-Intent.md";
    const body = [
      `- [➡️ Initiate a PO Sync](${poUrl})`,
      `- [➡️ Initiate an Architecture Intent](${archUrl})`,
    ].join("\n");

    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["CC-touchpoint", "PO-sync"],
      touchpointNumber: 500,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toContain(`#500`);
    expect(result).toContain("➡️ Initiate an Architecture Intent");
  });

  test("returns body unchanged when initiate link has no closing parenthesis", () => {
    const body = `- [➡️ Initiate a PO Sync](https://example.com`;
    const result = replaceTouchpointInitiateLink(body, {
      touchpointLabels: ["CC-touchpoint", "PO-sync"],
      touchpointNumber: 789,
      owner: OWNER,
      repo: REPO,
    });

    expect(result).toBe(body);
  });
});

describe("findCollabCycleRequest", () => {
  function mockOctokit(issues) {
    return {
      request: vi.fn().mockResolvedValue({ data: issues }),
    };
  }

  const defaults = {
    owner: OWNER,
    repo: REPO,
    milestoneNumber: 42,
    githubAPIVersion: GITHUB_API_VERSION,
    touchpointIssueNumber: 200,
  };

  test("finds CC Request with collab-cycle-review label", async () => {
    const issues = [
      {
        number: 100,
        labels: [{ name: "collab-cycle-review" }],
      },
      {
        number: 200,
        labels: [{ name: "CC-touchpoint" }],
      },
    ];

    const result = await findCollabCycleIssue(mockOctokit(issues), defaults);
    expect(result.number).toBe(100);
  });

  test("finds CC Request with collaboration-cycle-testing label", async () => {
    const issues = [
      {
        number: 150,
        labels: [{ name: "collaboration-cycle-testing" }],
      },
    ];

    const result = await findCollabCycleIssue(mockOctokit(issues), defaults);
    expect(result.number).toBe(150);
  });

  test("skips the touchpoint issue itself", async () => {
    const issues = [
      {
        number: 200,
        labels: [{ name: "collab-cycle-review" }],
      },
    ];

    const result = await findCollabCycleIssue(mockOctokit(issues), defaults);
    expect(result).toBeNull();
  });

  test("returns null when no matching issue found", async () => {
    const issues = [
      {
        number: 300,
        labels: [{ name: "some-other-label" }],
      },
    ];

    const result = await findCollabCycleIssue(mockOctokit(issues), defaults);
    expect(result).toBeNull();
  });

  test("returns null when no issues in milestone", async () => {
    const result = await findCollabCycleIssue(mockOctokit([]), defaults);
    expect(result).toBeNull();
  });
});
