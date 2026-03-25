/**
 * Local test script that runs the issue body build pipeline with mock data.
 * No API calls are made. Outputs the final issue body to terminal.
 */

import path from "path";
import { fileURLToPath } from "url";
import { parseIntakeQuestions } from "./modules/intake-parser.js";
import { buildIssueBody } from "./modules/issue-body.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = path.resolve(__dirname, "../../../..");
const MOCK_ISSUE_BODY = `### Your team name

Decision Reviews (11004)

### Product name

Decision Reviews

### Feature name

Supplemental Claims

### Product directory link

https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews

### GitHub label for product

decision-reviews

### GitHub label for feature

supplemental-claims

### Who is the primary audience for this product?

Individuals (Veterans, their caregivers, families, survivors, or representatives directly supporting a Veteran)

### Will your work result in visible changes to the user experience?

Yes

### Where will your product live?

VA.gov`;

const MOCK_MANIFEST = {
  teamReadme:
    "https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/decision-reviews/README.md",
  teamLabels: ["benefits-decision-reviews", "Decision-Reviews-Team"],
  slackChannel: "#benefits-decision-reviews",
  slackChannelUrl:
    "https://dsva.slack.com/archives/C5AGLBNRK",
  vaBusinessOwner: "OCTO",
};

const MOCK_MILESTONE_TITLE =
  "Collaboration Cycle for Decision Reviews, Decision Reviews, Supplemental Claims #136378";

const intakeResponses = parseIntakeQuestions(MOCK_ISSUE_BODY);

console.log("=== Parsed Intake Responses ===");
console.log(JSON.stringify(intakeResponses, null, 2));
console.log();

const issueBody = buildIssueBody(WORKSPACE_ROOT, {
  intakeResponses,
  manifest: MOCK_MANIFEST,
  milestoneTitle: MOCK_MILESTONE_TITLE,
});

console.log("=== Generated Issue Body ===");
console.log(issueBody);
