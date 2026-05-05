export const INTAKE_QUESTIONS = [
  { key: "teamName", question: "Your team name", placeholder: "{{TEAM_NAME}}" },
  { key: "productName", question: "Product name", placeholder: "{{PRODUCT_NAME}}" },
  { key: "featureName", question: "Feature name", placeholder: "{{FEATURE_NAME}}" },
  {
    key: "initiativeOverview",
    question: "Initiative overview",
    placeholder: "{{INITIATIVE_OVERVIEW}}",
  },
  { key: "productDirectoryLink", question: "Product directory link", placeholder: "{{PRODUCT_DIRECTORY_LINK}}" },
  { key: "productLabel", question: "GitHub label for product", placeholder: "{{PRODUCT_LABEL}}" },
  { key: "featureLabel", question: "GitHub label for feature", placeholder: "{{FEATURE_LABEL}}" },
  {
    key: "audience",
    question: "Who is the primary audience for this product?",
    placeholder: "{{PRIMARY_AUDIENCE}}",
  },
  {
    key: "visibleChanges",
    question:
      "Will your work result in visible changes to the user experience?",
    placeholder: "{{HAS_VISIBLE_CHANGES}}",
    transform: (value) => (value === "Yes" ? "will" : "will not"),
  },
  {
    key: "platform",
    question: "Where will your product live?",
    placeholder: "{{PRODUCT_PLATFORM}}",
  },
];

/**
 * Fetches the intake issue and parses responses into an object keyed by each question's key.
 */
export async function fetchIntakeResponses(octokit, { owner, repo, issueNumber, githubAPIVersion }) {
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

    const responses = parseIntakeQuestions(issue.body);
    console.log(`✅ Intake responses parsed for issue #${issueNumber}.`);
    return responses;
  } catch (error) {
    console.error(`❌ Error fetching intake responses: ${error.message}`);
    throw error;
  }
}

/**
 * Parses the markdown body of a GitHub issue form submission into key-value pairs.
 */
export function parseIntakeQuestions(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const prefixed = normalized.startsWith("### ")
    ? "\n" + normalized
    : normalized;
  const sections = prefixed.split("\n### ").slice(1);

  const sectionMap = new Map();
  for (const section of sections) {
    const firstNewline = section.indexOf("\n");
    const heading = firstNewline === -1 ? section.trim() : section.slice(0, firstNewline).trim();
    const body = firstNewline === -1 ? "" : section.slice(firstNewline).trim();
    sectionMap.set(heading, body);
  }

  const result = {};
  INTAKE_QUESTIONS.forEach(({ key, question }) => {
    if (sectionMap.has(question)) {
      result[key] = sectionMap.get(question);
    }
  });

  return result;
}
