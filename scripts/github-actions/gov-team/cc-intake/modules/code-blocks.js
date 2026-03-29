import { hasResponse } from "./constants.js";

const STEP_NUMBER_EMOJIS = [
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟",
];

/**
 * Determines which code block files to include based on intake responses and team manifest.
 */
export function selectCodeBlockFiles({
  audience,
  platform,
  visibleChanges,
  manifest,
}) {
  const files = [
    "1-collab-cycle-information.md",
    "2-team-and-product.md",
    "3-touchpoints-intro.md",
  ];

  if (audience?.startsWith("Individuals")) {
    const isOctoOrVes =
      manifest.vaBusinessOwner === "OCTO" || manifest.vaBusinessOwner === "VES";

    if (isOctoOrVes) {
      files.push("4-po-sync.md");
    }
  }

  // Architecture intent is a default block for all products.
  files.push("5-architecture-intent.md");

  if (audience?.startsWith("Individuals")) {
    files.push("6-design-review.md");
  }

  if (platform === "VA.gov" && audience?.startsWith("Individuals")) {
    files.push("7-staging-review.md");
  }

  // Typically, this is for an engineering/security-only staging review, but we are not doing that at this time. Instead, this outputs a standard staging review code block.
  if (visibleChanges === "No" || audience?.startsWith("Organizations")) {
    // files.push("8-engineering-security-staging-review.md");
    files.push("7-staging-review.md");
  }

  // Other required tasks is included on every collab cycle ticket.
  files.push("9-other-required-tasks.md");

  return files;
}

/**
 * Assigns step number emojis to code block contents and returns the assembled issue body.
 */
export function assembleCodeBlocks(codeBlockContents) {
  try {
    let stepCounter = 0;
    let issueBody = "";

    codeBlockContents.forEach((content) => {
      let block = content;

      if (block.includes("{{STEP_NUMBER}}")) {
        block = block.replaceAll(
          "{{STEP_NUMBER}}",
          STEP_NUMBER_EMOJIS[stepCounter] || String(stepCounter + 1),
        );
        stepCounter++;
      }

      issueBody += block;
    });

    console.log(`✅ Code blocks assembled.`);
    return issueBody;
  } catch (error) {
    console.error(`❌ Error assembling code blocks: ${error.message}`);
    throw error;
  }
}

/**
 * Replaces intake question placeholders and team manifest placeholders in the issue body.
 */
export function replacePlaceholders(
  issueBody,
  { intakeQuestions, intakeResponses, manifest },
) {
  try {
    for (const { key, placeholder, transform } of intakeQuestions) {
      if (placeholder && intakeResponses[key] !== undefined) {
        let value = transform
          ? transform(intakeResponses[key])
          : intakeResponses[key];

        if (placeholder.includes("LABEL") && hasResponse(value)) {
          value = `\`${value}\``;
        }

        issueBody = issueBody.replaceAll(placeholder, value);
      }
    }

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

    console.log(`✅ Placeholders replaced in issue body.`);
    return issueBody;
  } catch (error) {
    console.error(`❌ Error replacing placeholders: ${error.message}`);
    throw error;
  }
}
