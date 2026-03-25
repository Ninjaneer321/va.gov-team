import fs from "fs";
import path from "path";
import { marked } from "marked";

/**
 * Parses a team README and extracts Slack channel, GitHub labels, and VA business owner.
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
    const boldText =
      innerTokens.find((token) => token.type === "strong")?.text || "";

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
export async function fetchTeamManifest(
  octokit,
  { teamNameAnswer, workspacePath, githubAPIVersion, owner, sensitiveRepo },
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
    const afterBlob = teamData.manifest_url.slice(
      blobIndex + "/blob/".length,
    );
    const manifestPath = afterBlob.slice(afterBlob.indexOf("/") + 1);

    // Fetch the README from va.gov-team-sensitive.
    const { data: fileData } = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner,
        repo: sensitiveRepo,
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
    const teamReadmeUrl = `https://github.com/${owner}/${sensitiveRepo}/blob/master/${teamData.readme_path}`;

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
    throw error;
  }
}
