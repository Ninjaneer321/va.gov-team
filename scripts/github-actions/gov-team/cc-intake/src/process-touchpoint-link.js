import { pathToFileURL } from "node:url";
import { Octokit } from "octokit";
import {
  findCollabCycleIssue,
  addCollabCycleLinkToTouchpoint,
  replaceTouchpointInitiateLink,
} from "./modules/touchpoint-urls.js";
import { updateIssueBody } from "./modules/issue-body.js";

const { GITHUB_TOKEN, ISSUE_NUMBER, GITHUB_REPOSITORY } = process.env;
const [OWNER, REPO] = GITHUB_REPOSITORY.split("/");
const GITHUB_API_VERSION = "2022-11-28";

if (!ISSUE_NUMBER) {
  console.error("Issue number not provided.");
  process.exit(1);
}

console.log(
  `🔄 Touchpoint linking script running for issue #${ISSUE_NUMBER}.`,
);

const octokit = new Octokit({ auth: GITHUB_TOKEN });

export async function linkTouchpoint() {
  const { data: touchpointIssue } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues/{issue_number}",
    {
      owner: OWNER,
      repo: REPO,
      issue_number: ISSUE_NUMBER,
      headers: { "X-GitHub-Api-Version": GITHUB_API_VERSION },
    },
  );

  const labels = touchpointIssue.labels.map((label) => label.name);
  const milestone = touchpointIssue.milestone;

  if (!milestone) {
    console.error(
      `❌ Touchpoint issue #${ISSUE_NUMBER} has no milestone. Cannot find associated CC Request.`,
    );
    process.exit(1);
  }

  // Find the collab cycle issue that shares this milestone.
  const collabCycleIssue = await findCollabCycleIssue(octokit, {
    owner: OWNER,
    repo: REPO,
    milestoneNumber: milestone.number,
    githubAPIVersion: GITHUB_API_VERSION,
    touchpointIssueNumber: Number(ISSUE_NUMBER),
  });

  if (!collabCycleIssue) {
    console.error(
      `❌ Could not find a Collaboration Cycle Request issue for milestone "${milestone.title}".`,
    );
    process.exit(1);
  }

  console.log(`Found CC Request issue #${collabCycleIssue.number}.`);

  // Update the touchpoint issue body with a link to the collab cycle issue.
  const updatedTouchpointBody = addCollabCycleLinkToTouchpoint(
    touchpointIssue.body,
    { collabCycleIssueNumber: collabCycleIssue.number },
  );

  await updateIssueBody(octokit, {
    owner: OWNER,
    repo: REPO,
    issueNumber: ISSUE_NUMBER,
    githubAPIVersion: GITHUB_API_VERSION,
    issueBody: updatedTouchpointBody,
  });

  // Replace the "Initiate" link in the CC Request body with a link to this touchpoint.
  const updatedCCBody = replaceTouchpointInitiateLink(collabCycleIssue.body, {
    touchpointLabels: labels,
    touchpointNumber: Number(ISSUE_NUMBER),
    owner: OWNER,
    repo: REPO,
  });

  await updateIssueBody(octokit, {
    owner: OWNER,
    repo: REPO,
    issueNumber: collabCycleIssue.number,
    githubAPIVersion: GITHUB_API_VERSION,
    issueBody: updatedCCBody,
  });

  console.log(
    `✅ Linked touchpoint #${ISSUE_NUMBER} ↔ CC Request #${collabCycleIssue.number}.`,
  );
}

// Execute this script when run directly. This prevents it from being run when imported by tests.
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  linkTouchpoint();
}
