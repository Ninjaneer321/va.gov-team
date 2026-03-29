import { hasResponse } from "./constants.js";

/**
 * Collects and assigns labels to an issue.
 */
export async function addLabelsToIssue(
  octokit,
  {
    owner,
    repo,
    issueNumber,
    githubAPIVersion,
    teamLabels,
    productLabel,
    featureLabel,
    platform,
  },
) {
  try {
    const issueLabels = [...teamLabels];

    if (hasResponse(productLabel)) {
      issueLabels.push(productLabel);
    }

    if (hasResponse(featureLabel)) {
      issueLabels.push(featureLabel);
    }

    if (platform === "VA Mobile App") {
      issueLabels.push("collaboration-cycle-mobile-app");
    }

    if (issueLabels.length > 0) {
      await octokit.request(
        "POST /repos/{owner}/{repo}/issues/{issue_number}/labels",
        {
          owner,
          repo,
          issue_number: issueNumber,
          labels: issueLabels,
          headers: {
            "X-GitHub-Api-Version": githubAPIVersion,
          },
        },
      );
    }

    console.log(
      `✅ Labels added to issue #${issueNumber}: ${issueLabels.length > 0 ? issueLabels.join(", ") : "none"}.`,
    );
  } catch (error) {
    console.error(`❌ Error adding labels to issue: ${error.message}`);
    throw error;
  }
}
