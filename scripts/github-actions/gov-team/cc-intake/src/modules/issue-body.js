import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";
import { selectCodeBlockFiles, assembleCodeBlocks, replacePlaceholders } from "./code-blocks.js";
import { buildInitiateTouchpointUrls } from "./touchpoint-urls.js";
import { INTAKE_QUESTIONS } from "./intake-parser.js";

const CODE_BLOCKS_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../markdown-code-blocks",
);

/**
 * Builds the complete issue body from markdown templates with all placeholders replaced.
 */
export function buildIssueBody({ intakeResponses, manifest, milestoneTitle }) {
  try {
    const {
      audience,
      platform,
      visibleChanges,
      teamName,
      productName,
      productLabel,
      featureLabel,
    } = intakeResponses;

    const codeBlockFiles = selectCodeBlockFiles({
      audience,
      platform,
      visibleChanges,
      manifest,
    });

    const codeBlockContents = codeBlockFiles.map((file) =>
      fs.readFileSync(path.join(CODE_BLOCKS_DIR, file), "utf-8"),
    );

    let issueBody = assembleCodeBlocks(codeBlockContents);

    issueBody = buildInitiateTouchpointUrls(issueBody, {
      teamName,
      productName,
      productLabel,
      featureLabel,
      teamLabels: manifest.teamLabels,
      platform,
      milestoneTitle,
    });

    issueBody = replacePlaceholders(issueBody, {
      intakeQuestions: INTAKE_QUESTIONS,
      intakeResponses,
      manifest,
    });

    console.log(`✅ Issue body built successfully.`);
    return issueBody;
  } catch (error) {
    console.error(`❌ Error building issue body: ${error.message}`);
    throw error;
  }
}

/**
 * Updates the GitHub issue with the built issue body.
 */
export async function updateIssueBody(octokit, { owner, repo, issueNumber, githubAPIVersion, issueBody }) {
  try {
    await octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner,
        repo,
        issue_number: issueNumber,
        body: issueBody,
        headers: {
          "X-GitHub-Api-Version": githubAPIVersion,
        },
      },
    );
    console.log(`✅ Issue #${issueNumber} body updated.`);
  } catch (error) {
    console.error(`❌ Error updating issue body: ${error.message}`);
    throw error;
  }
}
