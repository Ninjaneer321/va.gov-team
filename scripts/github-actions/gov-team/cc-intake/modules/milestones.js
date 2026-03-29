/**
 * Finds an existing milestone by title across open and closed states.
 */
async function findMilestoneByTitle(
  octokit,
  { owner, repo, title, githubAPIVersion },
) {
  for (const state of ["open", "closed"]) {
    let page = 1;
    while (true) {
      const { data: milestones } = await octokit.request(
        "GET /repos/{owner}/{repo}/milestones",
        {
          owner,
          repo,
          state,
          per_page: 100,
          page,
          headers: {
            "X-GitHub-Api-Version": githubAPIVersion,
          },
        },
      );

      const match = milestones.find((m) => m.title === title);
      if (match) return match;
      if (milestones.length < 100) break;
      page++;
    }
  }

  return null;
}

/**
 * Creates or finds a milestone and assigns it to the issue.
 */
export async function createMilestone(
  octokit,
  { owner, repo, issueNumber, githubAPIVersion },
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

    const milestoneTitle = `${issue.title} #${issue.number}`;

    if (issue.milestone && issue.milestone.title === milestoneTitle) {
      console.log(
        `⏭️ Milestone "${milestoneTitle}" already exists and is assigned to issue #${issueNumber}.`,
      );

      return milestoneTitle;
    }

    let milestone = await findMilestoneByTitle(
      octokit,
      { owner, repo, title: milestoneTitle, githubAPIVersion },
    );

    if (milestone) {
      console.log(
        `⏭️ Milestone "${milestoneTitle}" already exists. Assigning to issue #${issueNumber}.`,
      );
    } else {
      const { data: created } = await octokit.request(
        "POST /repos/{owner}/{repo}/milestones",
        {
          owner,
          repo,
          title: milestoneTitle,
          headers: {
            "X-GitHub-Api-Version": githubAPIVersion,
          },
        },
      );
      milestone = created;
      console.log(`✅ Milestone "${milestoneTitle}" created.`);
    }

    await octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner,
        repo,
        issue_number: issueNumber,
        milestone: milestone.number,
        headers: {
          "X-GitHub-Api-Version": githubAPIVersion,
        },
      },
    );

    console.log(
      `✅ Milestone "${milestoneTitle}" linked to issue #${issueNumber}.`,
    );

    return milestoneTitle;
  } catch (error) {
    console.error(`❌ Error creating/assigning milestone: ${error.message}`);
    throw error;
  }
}
