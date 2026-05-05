As of 4/9/2026

# Appeal issue descriptions in the Claim and Appeal Status Tool
 
## AMA Appeals
- Caseflow request issue text, while the appeal remains pending before the Board
- Caseflow decision issue text, after the Board's decision has been sent to the Veteran
- Exception: If the Board remanded the issue, this may then change to a generic issue description based on diagnostic code or benefit type for the remanded issue(s)
- When the Board remands an issue, the new claim that's created by the AOJ to process the remanded issue is only visible in the Status Tool if it's for a disability claim. If it's for an education or healthcare claim, Veterans won't see it in the Status Tool since we don't have a way to retrieve claims for those benefit types yet.
 
## Legacy Appeals
- Issue descriptions based on codes in CF
- TBD: which part of the VACOLS issue level(s) is being used/transmitted via the API

## Resolution
Interim fix language, "We're unable to show the issue on appeal" (or indicating number if more than one issue)
- If the issue description field in the API is nil/null
- Currently only limited to legacy appeals; AMA appeals have been resolved
