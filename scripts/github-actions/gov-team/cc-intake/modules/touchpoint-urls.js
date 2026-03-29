import { hasResponse } from "./constants.js";

const TOUCHPOINT_DEFAULT_LABELS = ["collaboration-cycle", "CC-touchpoint"];

const TOUCHPOINTS = [
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}", template: "DRAFT-PO-Sync.md", titlePrefix: "PO Sync", label: "PO-sync" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_ARCHITECTURE_INTENT}}", template: "DRAFT-Architecture-Intent.md", titlePrefix: "Architecture Intent", label: "architecture-intent" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_DESIGN_INTENT}}", template: "DRAFT-Design-Intent.md", titlePrefix: "Design Intent", label: "design-intent" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_MIDPOINT_REVIEW}}", template: "DRAFT-Midpoint-Review.md", titlePrefix: "Midpoint Review", label: "midpoint-review" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_STAGING_REVIEW}}", template: "DRAFT-Staging-Review.md", titlePrefix: "Staging Review", label: "staging-review" },
];

const INITIATE_TOUCHPOINT_BASE_URL =
  "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new";

/**
 * Builds touchpoint URLs and replaces their placeholders in the issue body.
 * Parameters with no value are omitted from the URL.
 */
export function buildInitiateTouchpointUrls(
  issueBody,
  { teamName, productName, productLabel, featureLabel, teamLabels, platform, milestoneTitle },
) {
  try {
    for (const { placeholder, template, titlePrefix, label } of TOUCHPOINTS) {
      const params = new URLSearchParams();
      params.set("template", template);

      const titleParts = [
        titlePrefix,
        hasResponse(teamName),
        hasResponse(productName),
      ].filter(Boolean);
      params.set("title", titleParts.join(" - "));

      const labels = [
        ...TOUCHPOINT_DEFAULT_LABELS,
        label,
        ...(teamLabels || []),
        hasResponse(productLabel),
        hasResponse(featureLabel),
        platform === "VA Mobile App" ? "collaboration-cycle-mobile-app" : null,
      ].filter(Boolean);
      params.set("labels", labels.join(","));

      if (milestoneTitle) params.set("milestone", milestoneTitle);

      issueBody = issueBody.replaceAll(
        placeholder,
        `${INITIATE_TOUCHPOINT_BASE_URL}?${params.toString()}`,
      );
    }

    console.log(`✅ Initiate touchpoint URLs built.`);
    return issueBody;
  } catch (error) {
    console.error(`❌ Error building touchpoint URLs: ${error.message}`);
    throw error;
  }
}
