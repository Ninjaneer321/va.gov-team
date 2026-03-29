export const MOCK_ISSUE_BODY = `### Your team name

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

### GitHub label for feature

test-feature

### Who is the primary audience for this product?

Individuals (Veterans, their caregivers, families, survivors, or representatives directly supporting a Veteran)

### Will your work result in visible changes to the user experience?

Yes

### Where will your product live?

VA.gov`;

export const INDIVIDUALS =
  "Individuals (Veterans, their caregivers, families, survivors, or representatives directly supporting a Veteran)";

export const ORGANIZATIONS =
  "Organizations (e.g., VA employees, contractors, representatives working in an organizational capacity, etc.)";

export const INTAKE_RESPONSES = {
  teamName: "Test Team (99999)",
  productName: "Test Product",
  featureName: "Test Feature",
  initiativeOverview: "A tool that helps Veterans submit claims online.",
  productDirectoryLink: "https://example.com/outline",
  productLabel: "test-product",
  featureLabel: "test-feature",
  audience: INDIVIDUALS,
  visibleChanges: "Yes",
  platform: "VA.gov",
};

export const MANIFEST = {
  teamReadme: "https://example.com/readme",
  teamLabels: ["team-label-1", "team-label-2"],
  slackChannel: "#test-channel",
  slackChannelUrl: "https://slack.com/test",
  vaBusinessOwner: "OCTO",
};

export const GITHUB_API_VERSION = "2022-11-28";
