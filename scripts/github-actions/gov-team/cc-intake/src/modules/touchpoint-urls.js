import { hasResponse } from "./constants.js";

const TOUCHPOINT_DEFAULT_LABELS = ["collaboration-cycle", "CC-touchpoint"];

const TOUCHPOINTS = [
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_PO_SYNC}}", template: "DRAFT-PO-Sync.md", titlePrefix: "PO Sync", label: "PO-sync", initiateText: "➡️ Initiate a PO Sync" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_ARCHITECTURE_INTENT}}", template: "DRAFT-Architecture-Intent.md", titlePrefix: "Architecture Intent", label: "architecture-intent", initiateText: "➡️ Initiate an Architecture Intent" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_DESIGN_INTENT}}", template: "DRAFT-Design-Intent.md", titlePrefix: "Design Intent", label: "design-intent", initiateText: "➡️ Initiate a Design Intent" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_MIDPOINT_REVIEW}}", template: "DRAFT-Midpoint-Review.md", titlePrefix: "Midpoint Review", label: "midpoint-review", initiateText: "➡️ Initiate a Midpoint Review" },
  { placeholder: "{{INITIATE_TOUCHPOINT_URL_STAGING_REVIEW}}", template: "DRAFT-Staging-Review.md", titlePrefix: "Staging Review", label: "staging-review", initiateText: "➡️ Initiate a Staging Review" },
];

const INITIATE_TOUCHPOINT_BASE_URL =
  "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new";

const CC_TICKET_PLACEHOLDER = "- Collaboration Cycle ticket";

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

/**
 * Format for the touchpoint link that replaces the "Initiate" link in the collab cycle issue.
 * Uses a bare #number reference so GitHub auto-links it with issue title and status.
 */
function formatTouchpointLink(touchpointNumber) {
  return `#${touchpointNumber}`;
}

/**
 * Finds the Collaboration Cycle Request issue that shares the given milestone.
 */
export async function findCollabCycleRequest(
  octokit,
  { owner, repo, milestoneNumber, githubAPIVersion, touchpointIssueNumber },
) {
  const ccLabels = ["collab-cycle-review", "collaboration-cycle-testing"];

  const { data: issues } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues",
    {
      owner,
      repo,
      milestone: milestoneNumber,
      state: "open",
      per_page: 50,
      headers: { "X-GitHub-Api-Version": githubAPIVersion },
    },
  );

  for (const issue of issues) {
    if (issue.number === touchpointIssueNumber) continue;

    const issueLabels = issue.labels.map((l) => l.name);
    if (ccLabels.some((label) => issueLabels.includes(label))) {
      return issue;
    }
  }

  return null;
}

/**
 * Replaces the CC ticket placeholder in the touchpoint issue body with a link to the collab cycle issue.
 */
export function addCollabCycleLinkToTouchpoint(
  touchpointBody,
  { collabCycleIssueNumber },
) {
  return touchpointBody.replace(
    CC_TICKET_PLACEHOLDER,
    `${CC_TICKET_PLACEHOLDER}: #${collabCycleIssueNumber}`,
  );
}

/**
 * Finds the touchpoint type from the issue labels and replaces the matching
 * "Initiate" link in the CC Request body with a link to the touchpoint ticket.
 */
export function replaceTouchpointInitiateLink(
  ccRequestBody,
  { touchpointLabels, touchpointNumber, owner, repo },
) {
  const touchpoint = TOUCHPOINTS.find((t) =>
    touchpointLabels.includes(t.label),
  );

  if (!touchpoint) {
    console.log(
      `No matching touchpoint type found in labels: ${touchpointLabels.join(", ")}`,
    );
    return ccRequestBody;
  }

  const replacement = formatTouchpointLink(
    touchpointNumber,
  );

  // The "Initiate" link looks like: [➡️ Initiate a PO Sync](https://github.com/.../issues/new?...)
  // Find it by matching on the known display text between [ and ].
  const searchText = `[${touchpoint.initiateText}](`;
  const linkStart = ccRequestBody.indexOf(searchText);
  if (linkStart === -1) {
    console.log(
      `"Initiate" link not found in CC Request body for "${touchpoint.titlePrefix}".`,
    );
    return ccRequestBody;
  }

  // Find the closing parenthesis of the markdown link.
  const urlStart = linkStart + searchText.length;
  const urlEnd = ccRequestBody.indexOf(")", urlStart);
  if (urlEnd === -1) {
    console.log(
      `Could not parse "Initiate" link URL for "${touchpoint.titlePrefix}".`,
    );
    return ccRequestBody;
  }

  const fullLink = ccRequestBody.substring(linkStart, urlEnd + 1);
  return ccRequestBody.replace(fullLink, replacement);
}
