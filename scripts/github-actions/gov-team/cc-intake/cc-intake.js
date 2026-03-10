import fs from "fs";
import path from "path";
import { Octokit } from "octokit";
import { marked } from "marked";

const { GITHUB_TOKEN, ISSUE_NUMBER, GITHUB_REPOSITORY, GITHUB_WORKSPACE } =
  process.env;
const [OWNER, REPO] = GITHUB_REPOSITORY.split("/");
const SENSITIVE_REPO = "va.gov-team-sensitive";
const GITHUB_API_VERSION = "2022-11-28";
const INTAKE_QUESTIONS = [
  { question: "Your team name", placeholder: "{{TEAM_NAME}}" },
  { question: "Product name", placeholder: "{{PRODUCT_NAME}}" },
  { question: "Feature name", placeholder: "{{FEATURE_NAME}}" },
  { question: "Product outline", placeholder: "{{PRODUCT_OUTLINE}}" },
  { question: "GitHub label for product", placeholder: "{{PRODUCT_LABEL}}" },
  { question: "GitHub label for feature", placeholder: "{{FEATURE_LABEL}}" },
  {
    question: "Who is the primary audience for this product?",
    placeholder: "{{PRIMARY_AUDIENCE}}",
  },
  {
    question:
      "Will your work result in visible changes to the user experience?",
    placeholder: "{{HAS_VISIBLE_CHANGES}}",
    transform: (value) => (value === "Yes" ? "will" : "will not"),
  },
  {
    question: "Where will your product live?",
    placeholder: "{{PRODUCT_PLATFORM}}",
  },
];

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

/**
 * Creates a milestone for an issue and links it to the issue.
 */
async function createMilestone(owner, repo, issueNumber, githubAPIVersion) {
  try {
    const { data: issue } = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner,
        repo,
        issue_number: issueNumber,
        headers: {
          "X-GitHub-Api-Version": githubAPIVersion,
        },
      },
    );

    const milestoneTitle = `${issue.title} #${issue.number}`;

    if (issue.milestone && issue.milestone.title === milestoneTitle) {
      console.log(
        `⏭️ Milestone "${milestoneTitle}" already exists and is assigned to issue #${issueNumber}.`,
      );

      return milestoneTitle;
    }

    const { data: milestone } = await octokit.request(
      `POST /repos/{owner}/{repo}/milestones`,
      {
        owner,
        repo,
        title: milestoneTitle,
        headers: {
          "X-GitHub-Api-Version": githubAPIVersion,
        },
      },
    );

    await octokit.request("PATCH /repos/{owner}/{repo}/issues/{issue_number}", {
      owner,
      repo,
      issue_number: issueNumber,
      milestone: milestone.number,
      headers: {
        "X-GitHub-Api-Version": githubAPIVersion,
      },
    });

    console.log(
      `✅ Milestone "${milestoneTitle}" created and linked to issue #${issueNumber}.`,
    );

    return milestoneTitle;
  } catch (error) {
    console.error(`❌ Error creating milestone: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Parses a team README from va.gov-team-sensitive and extracts Slack channel, GitHub labels, and VA business owner (OCTO/VES).
 */
function parseTeamReadme(markdownContent) {
  const result = {
    slackChannel: null,
    slackChannelUrl: null,
    teamLabels: [],
    vaBusinessOwner: null,
  };

  const tokens = marked.lexer(markdownContent);
  const listItems = tokens
    .filter((token) => token.type === "list")
    .flatMap((list) => list.items);

  for (const item of listItems) {
    const innerTokens = item.tokens?.[0]?.tokens || [];
    const boldText = innerTokens.find((token) => token.type === "strong")?.text || "";

    if (boldText === "Slack Channel:") {
      const link = innerTokens.find((token) => token.type === "link");
      if (link) {
        result.slackChannel = link.text;
        result.slackChannelUrl = link.href;
      }
    }

    if (boldText === "GitHub Team Labels:") {
      const nestedList = item.tokens?.find((token) => token.type === "list");
      if (nestedList?.items?.length > 0) {
        result.teamLabels = nestedList.items.map((listItem) => {
          const linkToken = listItem.tokens?.[0]?.tokens?.find(
            (token) => token.type === "link",
          );
          return linkToken ? linkToken.text : listItem.text.trim();
        });
      }
    }

    if (boldText === "VA Business Owner:") {
      const textToken = innerTokens.find(
        (token) => token.type === "text" && token.text.trim() !== "",
      );
      if (textToken) {
        result.vaBusinessOwner = textToken.text.trim();
      }
    }
  }

  return result;
}

/**
 * Fetches and parses a team's README from va.gov-team-sensitive using the team ID from the intake dropdown.
 */
async function fetchTeamManifest(
  teamNameAnswer,
  workspacePath,
  githubAPIVersion,
) {
  try {
    // Parse team ID from dropdown value.
    const openParen = teamNameAnswer.lastIndexOf("(");
    const closeParen = teamNameAnswer.lastIndexOf(")");
    const teamId = teamNameAnswer.slice(openParen + 1, closeParen).trim();

    // Load team-lookup.json
    const teamLookupPath = path.join(workspacePath, "team-lookup.json");
    const teamLookup = JSON.parse(fs.readFileSync(teamLookupPath, "utf-8"));
    const teamData = teamLookup[teamId];

    // Derive the file path in the sensitive repo from the manifest URL.
    const blobIndex = teamData.manifest_url.indexOf("/blob/");
    const afterBlob = teamData.manifest_url.slice(blobIndex + "/blob/".length);
    const manifestPath = afterBlob.slice(afterBlob.indexOf("/") + 1);

    // Fetch the README from va.gov-team-sensitive.
    const { data: fileData } = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: OWNER,
        repo: SENSITIVE_REPO,
        path: manifestPath,
        headers: {
          "X-GitHub-Api-Version": githubAPIVersion,
        },
      },
    );

    const readmeContent = Buffer.from(fileData.content, "base64").toString(
      "utf-8",
    );
    const parsed = parseTeamReadme(readmeContent);

    // Build the public README URL from team-lookup.json.
    const teamReadmeUrl = `https://github.com/${OWNER}/${SENSITIVE_REPO}/blob/master/${teamData.readme_path}`;

    const labelNames = parsed.teamLabels;
    console.log(
      `✅ Team manifest fetched — labels: ${labelNames.length > 0 ? labelNames.join(", ") : "N/A"}, Slack: ${parsed.slackChannel || "N/A"}, VA Business Owner: ${parsed.vaBusinessOwner || "N/A"}.`,
    );

    return {
      teamReadme: teamReadmeUrl,
      teamLabels: parsed.teamLabels,
      slackChannel: parsed.slackChannel,
      slackChannelUrl: parsed.slackChannelUrl,
      vaBusinessOwner: parsed.vaBusinessOwner,
    };
  } catch (error) {
    console.error(`❌ Error fetching team manifest: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Reads in the issue's intake questions and adds touchpoints based on the responses.
 */
async function addCodeBlocks(
  owner,
  repo,
  issueNumber,
  githubAPIVersion,
  workspacePath,
  milestoneTitle,
) {
  try {
    const { data: issue } = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner,
        repo,
        issue_number: issueNumber,
        headers: {
          "X-GitHub-Api-Version": githubAPIVersion,
        },
      },
    );

    const questionStrings = INTAKE_QUESTIONS.map(
      (questions) => questions.question,
    );
    const intakeResponses = await parseIntakeQuestions(
      issue.body,
      questionStrings,
    );

    const codeBlocksDirectory = path.join(
      workspacePath,
      "scripts/github-actions/gov-team/cc-intake/markdown-code-blocks",
    );

    const visibleChanges =
      intakeResponses[
        "Will your work result in visible changes to the user experience?"
      ];
    const audience =
      intakeResponses["Who is the primary audience for this product?"];
    const platform = intakeResponses["Where will your product live?"];

    const teamNameAnswer = intakeResponses["Your team name"];
    const manifest = await fetchTeamManifest(
      teamNameAnswer,
      workspacePath,
      githubAPIVersion,
    );

    // Include default touchpoints on every collab cycle ticket.
    const codeBlockFiles = [
      "1-collab-cycle-information.md",
      "2-team-and-product.md",
      "3-touchpoints-intro.md",
    ];

    if (audience?.startsWith("Individuals")) {
      const isOctoOrVes =
        manifest.vaBusinessOwner === "OCTO" ||
        manifest.vaBusinessOwner === "VES";

      if (isOctoOrVes) {
        codeBlockFiles.push("4-po-sync.md");
      }
    }

    // Add architecture intent as a default block for all products.
    codeBlockFiles.push("5-architecture-intent.md");

    if (audience?.startsWith("Individuals")) {
      codeBlockFiles.push("6-design-review.md");
    }

    if (platform === "VA.gov") {
      codeBlockFiles.push("7-staging-review.md");
    }

    if (visibleChanges === "No" || audience?.startsWith("Organizations")) {
      codeBlockFiles.push("8-engineering-security-staging-review.md");
    }

    // Include other required tasks on every collab cycle ticket.
    codeBlockFiles.push("9-other-required-tasks.md");

    let issueBody = "";

    codeBlockFiles.forEach((file) => {
      const filePath = path.join(codeBlocksDirectory, file);

      issueBody += fs.readFileSync(filePath, "utf-8");
    });

    // Replace template placeholders with intake responses.
    for (const { question, placeholder, transform } of INTAKE_QUESTIONS) {
      if (placeholder && intakeResponses[question] !== undefined) {
        let value = transform
          ? transform(intakeResponses[question])
          : intakeResponses[question];

        // Wrap label values in backticks unless the response is empty.
        if (placeholder.includes("LABEL") && value !== "_No response_") {
          value = `\`${value}\``;
        }

        issueBody = issueBody.replaceAll(placeholder, value);
      }
    }

    // Replace team-specific placeholders from manifest data
    if (manifest.teamReadme) {
      issueBody = issueBody.replaceAll("{{TEAM_README}}", manifest.teamReadme);
    }
    if (manifest.teamLabels.length > 0) {
      const formattedLabels = manifest.teamLabels
        .map((label) => `\`${label}\``)
        .join(", ");
      issueBody = issueBody.replaceAll("{{TEAM_LABELS}}", formattedLabels);
    }
    if (manifest.slackChannel) {
      issueBody = issueBody.replaceAll(
        "{{TEAM_SLACK_CHANNEL}}",
        manifest.slackChannel,
      );
    }
    if (manifest.slackChannelUrl) {
      issueBody = issueBody.replaceAll(
        "{{TEAM_SLACK_CHANNEL_URL}}",
        manifest.slackChannelUrl,
      );
    }

    // Replace milestone placeholder with URL-encoded milestone title
    if (milestoneTitle) {
      issueBody = issueBody.replaceAll(
        "{{MILESTONE}}",
        encodeURIComponent(milestoneTitle),
      );
    }

    await octokit.request("PATCH /repos/{owner}/{repo}/issues/{issue_number}", {
      owner,
      repo,
      issue_number: issueNumber,
      body: issueBody,
      headers: {
        "X-GitHub-Api-Version": githubAPIVersion,
      },
    });

    // Collect all labels to add to the issue.
    const issueLabels = [...manifest.teamLabels];

    const productLabel = intakeResponses["GitHub label for product"];
    if (productLabel && productLabel !== "_No response_") {
      issueLabels.push(productLabel);
    }

    const featureLabel = intakeResponses["GitHub label for feature"];
    if (featureLabel && featureLabel !== "_No response_") {
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

    console.log(`✅ Code blocks added to issue #${issueNumber}.`);
  } catch (error) {
    console.error(`❌ Error adding code blocks: ${error.message}`);
    process.exit(1);
  }
}

async function parseIntakeQuestions(markdown, questions) {
  const result = {};
  const normalized = markdown.replace(/\r\n/g, "\n");
  const prefixed = normalized.startsWith("### ")
    ? "\n" + normalized
    : normalized;
  const sections = prefixed.split("\n### ").slice(1);

  questions.forEach((question, index) => {
    const section = sections[index];
    if (section) {
      const firstNewline = section.indexOf("\n");
      const answer =
        firstNewline === -1 ? "" : section.slice(firstNewline).trim();
      result[question] = answer;
    }
  });

  return result;
}

async function main() {
  const milestoneTitle = await createMilestone(
    OWNER,
    REPO,
    ISSUE_NUMBER,
    GITHUB_API_VERSION,
  );
  await addCodeBlocks(
    OWNER,
    REPO,
    ISSUE_NUMBER,
    GITHUB_API_VERSION,
    GITHUB_WORKSPACE,
    milestoneTitle,
  );
}

main();
