import { pathToFileURL } from "node:url";
import { Octokit } from "octokit";
import { createMilestone as createAndAssignMilestone } from "./modules/milestones.js";
import { fetchTeamManifest } from "./modules/team-manifest.js";
import { fetchIntakeResponses } from "./modules/intake-parser.js";
import { addLabelsToIssue } from "./modules/labels.js";
import { buildIssueBody, updateIssueBody } from "./modules/issue-body.js";

const { GITHUB_TOKEN, ISSUE_NUMBER, GITHUB_REPOSITORY, GITHUB_WORKSPACE } =
  process.env;
const [OWNER, REPO] = GITHUB_REPOSITORY.split("/");
const SENSITIVE_REPO = "va.gov-team-sensitive";
const GITHUB_API_VERSION = "2022-11-28";

if (!ISSUE_NUMBER) {
  console.error("Issue number not provided.");
  process.exit(1);
}

console.log(
  `🔄 Collaboration cycle intake script running for issue #${ISSUE_NUMBER}.`,
);

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

export async function processIntake() {
  const errors = [];

  // Group 1: Milestone and intake responses (independent of each other).
  const [milestoneTitle, intakeResponses] = await Promise.all([
    createAndAssignMilestone(octokit, {
      owner: OWNER,
      repo: REPO,
      issueNumber: ISSUE_NUMBER,
      githubAPIVersion: GITHUB_API_VERSION,
    }).catch((error) => { errors.push(error); return null; }),

    fetchIntakeResponses(octokit, {
      owner: OWNER,
      repo: REPO,
      issueNumber: ISSUE_NUMBER,
      githubAPIVersion: GITHUB_API_VERSION,
    }).catch((error) => { errors.push(error); return null; }),
  ]);

  // Group 2: Team manifest (depends on intake responses).
  let manifest = null;
  if (intakeResponses) {
    const { teamName } = intakeResponses;
    manifest = await fetchTeamManifest(octokit, {
      teamNameAnswer: teamName,
      workspacePath: GITHUB_WORKSPACE,
      githubAPIVersion: GITHUB_API_VERSION,
      owner: OWNER,
      sensitiveRepo: SENSITIVE_REPO,
    }).catch((error) => { errors.push(error); return null; });
  }

  // Group 3: Build and update issue body (depends on intake responses and manifest).
  if (intakeResponses && manifest) {
    try {
      const issueBody = buildIssueBody({
        intakeResponses,
        manifest,
        milestoneTitle,
      });

      await updateIssueBody(octokit, {
        owner: OWNER,
        repo: REPO,
        issueNumber: ISSUE_NUMBER,
        githubAPIVersion: GITHUB_API_VERSION,
        issueBody,
      });
    } catch (error) {
      errors.push(error);
    }
  }

  // Group 4: Labels (depends on intake responses and manifest, independent of issue body).
  if (intakeResponses && manifest) {
    const { productLabel, featureLabel, platform } = intakeResponses;
    await addLabelsToIssue(octokit, {
      owner: OWNER,
      repo: REPO,
      issueNumber: ISSUE_NUMBER,
      githubAPIVersion: GITHUB_API_VERSION,
      teamLabels: manifest.teamLabels,
      productLabel,
      featureLabel,
      platform,
    }).catch((error) => { errors.push(error); });
  }

  if (errors.length > 0) {
    console.error(`❌ ${errors.length} error(s) processing intake for issue #${ISSUE_NUMBER}:`);
    errors.forEach((e) => console.error(`  - ${e.message}`));
    process.exit(1);
  }

  console.log(`✅ Issue #${ISSUE_NUMBER} processed successfully.`);
}

// Execute this script when run directly. This prevents it from being run when imported by tests.
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  processIntake();
}
