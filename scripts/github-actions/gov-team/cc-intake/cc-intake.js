import fs from "fs";
import path from "path";
import { Octokit } from "octokit";

const { GITHUB_TOKEN, ISSUE_NUMBER, GITHUB_REPOSITORY, GITHUB_WORKSPACE } =
  process.env;
const [OWNER, REPO] = GITHUB_REPOSITORY.split("/");
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
    // console.log(intakeResponses);

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

    // Alway include these touchpoints on collab cycle ticket.
    const codeBlockFiles = [
      "1-collab-cycle-information.md",
      "2-team-and-product.md",
      "3-touchpoints-intro.md",
    ];

    if (audience?.startsWith("Individuals")) {
      codeBlockFiles.push("4-po-sync.md");
    }

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

    // Always include other required tasks on all collab cycle tickets.
    codeBlockFiles.push("9-other-required-tasks.md");

    let issueBody = "";

    codeBlockFiles.forEach((file) => {
      const filePath = path.join(codeBlocksDirectory, file);

      issueBody += fs.readFileSync(filePath, "utf-8");
    });

    // Replace template placeholders with intake responses
    for (const { question, placeholder, transform } of INTAKE_QUESTIONS) {
      if (placeholder && intakeResponses[question] !== undefined) {
        const value = transform
          ? transform(intakeResponses[question])
          : intakeResponses[question];
        issueBody = issueBody.replaceAll(placeholder, value);
      }
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

    if (platform === "VA Mobile App") {
      await octokit.request(
        "POST /repos/{owner}/{repo}/issues/{issue_number}/labels",
        {
          owner,
          repo,
          issue_number: issueNumber,
          labels: ["collaboration-cycle-mobile-app"],
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

  questions.forEach((question, i) => {
    const section = sections[i];
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
