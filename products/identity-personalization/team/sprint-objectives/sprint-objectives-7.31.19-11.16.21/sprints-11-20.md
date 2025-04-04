# Authenticated Experience Sprint Objectives: Sprints 11 – 20

- [Sprint 11](#sprint-11-1218---1231)
- [Sprint 12](#sprint-12-12---114)
- [Sprint 13](#sprint-13-115---128)
- [Sprint 14](#sprint-14-129---211)
- [Sprint 15](#sprint-15-212---225)
- [Sprint 16](#sprint-16-226---310)
- [Sprint 17](#sprint-17-311---324)
- [Sprint 18](#sprint-18-325---47)
- [Sprint 19](#sprint-19-48---421)
- [Sprint 20](#sprint-20-422---55)

## Sprint 11 (12/18 - 12/31)

Note: Code freeze between 12/23 - 1/3/2020.

### [Sprint 11 Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4333)

### Time off

Sprint is 9 days with Christmas holiday.

- Arthur: Dec 19, 23 – 26; 5 days of availability
- Brad: Dec 18; 8 days of availability
- Erik: Dec 23 – 24; 7 days of availability
- Justin: Dec 24 – 27; 6 days of availability
- Lihan: 26 – 31; 5 days of availability
- Samara: Dec 24 – Dec 27; 6 days of availability
- Tressa No time off except 12/25; 8 days of availability 

We can either cancel grooming altogether or move to Dec 23. Sprint planning for Sprint 12 should be moved to Jan 2.

### Order of priorities

1. Get address validation ready for QA
2. Direct deposit updates
3. Create a plan for APO/FPO/DPO build + ticket writing

### Direct Deposit

**Erik**

- Ramp up to 100% [#3969](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3969)
- FE for routing number error [#4109](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4109)

### Address validation

To the best of our ability, this sprint's objective is to make sure all existing bugs are fixed/updates are implemented and ready for QA. **Note**: Having the feature fully ready for QA depends on VA Profile fixing some issues on their end. We can not be ready for QA without them. We'll consider the objective met here if things remain open only as a result of the VA Profile dependency.

- Use only candidate api for address validation api [#4060](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4060)
- Address validation: Continue, Cancel, and X buttons are broken [#4205](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4205)
- Address validation: Copy is missing a period [#4211](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4211)
- Validation Keys do not work to override addresses in the profile [#4245](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4245)
- Do not show the user any suggestions that are not "CONFIRMED" as deliverable [#4250](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4250)
- The address validation modal remembers the last option you selected between opens and closes #4264
- User should see the address they entered when going back to edit their address [#4271](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4271)
- Sometimes we get validation keys but can't force the addresses through [#4278](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4278)
- Implementing address validation modal confirmation screen [#4282](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4282)
- Review the flow for Address Validation Modal [#4283](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4283)
- 1st attempt to force an overridable address works, 2nd+ fail #4327
- In some cases picking a suggested address from the API will not work. #4328
- In some cases address updates fail because we make a POST call instead of a PUT #4246
 
### APO/FPO/DPO

**Arthur and Justin**

- Ticket creation for application updates (Arthur and Justin)
    - Figure out how to organize tickets for benefit teams in a clear way.
    - Create and assign tickets to Benefit and Memorials teams 1 & 2 for the recommended application updates. 

**Brad**

- FE profile update #4386

### Onboarding Tressa

**Tressa**

- General Onboarding [#4086](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/4086)
- Exploring VA.gov 

**Samara**

- Team intro [#4086](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/4086)
- Handoff of Profile 2.0 [#4332](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/4332)

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

## Sprint 12 (1/2 - 1/14)

Note: Code freeze still in effect 1/2 - 1/3.

### [Sprint 12 Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4492)

### Time off

Sprint 12 is 9 days with the New Year's Day holiday.

### Order of priorities

**Required to meet sprint objectives**

1. Get address validation ready for QA
2. Design exploration for Profile 2.0 & Initial technical discovery questions for Profile 2.0
3. Write APO/FPO/DPO tickets for benefits and memorials teams
4. Get eBenefits to confirm removal of direct deposit

**Not required to meet sprint objectives**

Only move on to these if there's time.

1. Refactor Vet360 profile components
2. 508/Accessibility tickets

### Address validation

**Necessary code fixes**

- Use only candidate api for address validation api #4060
- Sometimes we get validation keys but can't force the addresses through #4278 
  - **Note**: Dependent on VA Profile. May not complete this sprint.
- Raise address confidence threshold from 80 to 90 #4468
- Address suggestion bug #4487
- Disable "update" button if no address is selected #4483

**Enhancements**

- Log "bad" addresses a veteran tries to save #4481
- Show spinner when talking to address validation API #4485
- Make "edit address" text clickable in address validation alert texts #4484

**QA**

- Go/No-go for QA

### Direct deposit

- Confirm that eBenefits is removing direct deposit from the site in 1/29 release #3967
 
### APO/FPO/DPO

- Ticket creation for application updates #4374

### Profile 2.0

- Tressa to complete onboarding to the project [#4393](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4393)
- Profile 2.0: Initial design explorations #4469
- Answer initial technical discovery questions #2455
- ~(Maybe) Refactor Vet360 Profile form components to use SchemaForm #4068~

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

(Only move onto this work if all FE work is done for APO/FPO/DPO and address validation)

- [KEYBOARD]: Text Appointments - Focus must return to Edit button when modal dialog is closed #2427
- [SCREENREADER]: Text Appointments - Focus must be managed when users press Delete in the modal dialog #2430
- [ZOOM]: Text Appointments - Need a space between input and label in modal window #2435

## Sprint 13 (1/15 - 1/28)

Sprint 13 is 9 days with the MLK Day holiday.

### [Sprint 13 Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4884)

### Order of priorities

1. Get address validation ready for QA
2. Share, refine, and finalize designs for Profile 2.0
3. Monitoring, maintenance, bug fixes, hardening, 508, etc.
4. Refactor Vet360 profile components 
5. Hand off APO/FPO/DPO tickets to benefits and memorials teams

**If needed**

1. Technical discovery questions for Profile 2.0

**Other things to note**

- Lihan will be with our team half time and helping out Apps team #2 the other half of the time since we do not have enough backend work in our backlog. Lihan will (likely) start the sprint with the other team, and then rejoin us when VA Profile has gotten us the new endpoint and resolved the ADDRVAL112 error issues.

### Address validation

- New validation endpoint: VA Profile is targeting 1/17.
- ADDRVAL112 error will either be resolved with the new endpoint or shortly after

**Necessary code fixes**

- Sometimes we get validation keys but can't force the addresses through #4278 
  - **Note**: Dependent on VA Profile fixes. Will address this once those are complete.
- Update for address validation where there is only one option #4632
- Address Validation Error State not resetting #4837

**Enhancements**

- Make "edit address" text clickable in address validation alert texts #4484

**QA**

- Go/No-go
  
### Profile 2.0

- Settle on final design direction #4759
- Navigation exploration #4843
- (If applicable) Answer any additional technical discovery questions #2455
- Refactor Vet360 Profile form components to use SchemaForm #4068
  - [FE] Refactor VA Profile: Background research to determine scope #4930
  
### Monitoring, maintenance, bug fixes, hardening, 508, etc.

- [SCREENREADER]: Text Appointments - Focus must be managed when users press Delete in the modal dialog #2430
- [ZOOM]: Text Appointments - Need a space between input and label in modal window #2435
- Formation - CSS issue for checkboxes and radio inputs, text should be inset #4489
- Clean up "dashboard" references in code throughout repo #2270

### APO/FPO/DPO

- Hand off tickets for application updates #4374

### Error Matrix

- Justin to implement Lisa's feedback from [#3892](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3892#issuecomment-565577038)

### Team roadmap

- Samara to work on long term planning

## Sprint 14 (1/29 - 2/11)

### [Sprint 14 Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5181)

### Long term planning

- Tressa out: Feb 9 – 19

### Order of priorities

1. Address validation — QA & bug fixes
2. Profile 2.0 — Create states for all screens; Form refactoring
3. Maintenance & documentation
4. (If time) Profile 2.0 — Copy updates

### Address validation

#### 508 Review

- Request 508 Review

#### QA

**Tze**

- Finalize QA spreadsheet and QA test cases #5010
- Run QA and add bug tickets based on QA. #5012

**Samara**

- Help manage the QA process #5209
 
 **Brad**

- Work on bug fixes and 508 review updates as they come in.
- Address validation - can't select entered address with validation key #5178
- Address validation - Still getting validation keys that don't work #5180

#### Other

- Add documentation to address validation code in vets-api #3796
- Address validation: Load testing #5032

### Profile 2.0

Design
- Design review #5061
- Finish Contact information #5264

Frontend
- Convert profile phone number form to use SchemaForm #5118
- Convert profile email address form to use SchemaForm #5121

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

- Remove lodash/fp from front-end application code #5257
- [BE] Direct Deposit: Review product outline and update if needed #5251
- [FE] Direct Deposit: Review product outline and update if needed #5252
- [BE] Address validation: Review product outline and update if needed #5254

## Sprint 15 (2/12 - 2/25)

### [Sprint 15 Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5767)

### Long term planning

- Tressa out: Feb 12 – 19

### Order of priorities

1. Bug fixes/508 for address validation
2. Launch checklist for address validation (including E2E testing, documentation)
3. Profile 2.0 work
4. Monitoring, maintenance, bug fixes, hardening, 508, etc.

And we also have Matt onboarding!!

### Address validation

**PM** 

- Determine what analytics we need for this feature #5705
- Create contact center guide #5084
- Create a release plan #5085
  
**Dev**

- Profile - Address Validation - Alert-messages copy incorrect #5466
- Profile - Address Validation - Entered address selection IE11 quirk #5505
- Profile - Address Validation - Firefox - Alert-message icon not aligned & spaced correctly #5553
- E2E tests, running in CI/CD, passing on all browsers #5005
- Stop using country name for va profile contact information endpoint #5591
- Security review/Privacy review/ Production readiness review [41](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/41)
- Address validation: Review product outline and update if needed #5256
- Address validation flow to save / validate #5191
- Conditional rendering of the address validation form is somewhat cumbersome #5193

### Profile 2.0

**Design**

Tressa out most of the sprint. For when she is back:

- Military information #5265
- Direct deposit #5266
- Account security #5268
- Connected accounts #5269

**Dev**

- Convert profile phone number form to use SchemaForm #5118
- Refactor direct deposit form #5816
- Profile page scrolls when trying to submit invalid profile data #5458
- Profile edit email modal validations on staging do not match production #5704
- Release new profile forms to production and remove old legacy code #5817
- Profile 2.0: Investigate saving contact information #5815
- Profile page scrolls when trying to submit invalid profile data #5458
- Profile edit email modal validations on staging do not match production #5704

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

- [BE] Stop using country name for va profile contact information endpoint #5591
- filter vet360 address fields in PII sanitizer #5736
- Login: Investigate MHV/ID.me vulnerability [40](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/40)

## Sprint 16 (2/26 - 3/10)

### [Sprint 16 Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/6199)

### Order of priorities

1. Get address validation launched!
2. Profile 2.0: Copy for profile screens
3. Profile 2.0: Plan research/pre-usability review
4. Profile 2.0: Continue/finish refactoring work
5. Direct deposit copy update
6. Monitoring, maintenance, bug fixes, hardening, 508, etc.

### Address validation

- E2E testing #5005
- Finish all bug/QA/508 tickets that are still outstanding (TBD: We'll see what's still open by EOD Tuesday)
- Revisit release plan #5085
- Get/implement production key (note: this is already on its way but not sure what work Lihan has to do once he gets it)
- "Learn and Improve" plan written: KPI measurements, analytics reporting, next phase of features to build
- Analytics work (not our team) #5895
- Any analytics-related FE work

### Profile 2.0

Design
- Submit for update to copy for Profile 2.0 #5093
- Create research plan & kickoff recruiting #2585
- Last minute: design updates — in-line forms

Dev

- Any of the refactoring tickets Erik didn't get done this past sprint.

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

- [BE] Investigate MHV 400 errors #5893
- Design - Hide Direct Deposit information if the user is incompetent or has a fiduciary #6094

## Sprint 17 (3/11 - 3/24)

### [Sprint 17 Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/6622)

### Order of priorities

Any overflow from last sprint (Matt will identify if there is overflow), plus:

1. Address validation 
  - Any final tickets
  - Launch & monitoring
2. Profile 2.0: Design 
  - Edit modal state
  - Pre-usability review
  - Kickoff research recruiting
  - Badge/logo research
3. Profile 2.0: Build
  - Figure out what can happen in the sprint
  - Get appropriate build tickets ready
  - Have design/development intent review
  - Start build
4. Monitoring, maintenance, bug fixes, hardening, 508, etc.
5. Make sure epics/documentation is updated (Matt)

We *might* get to address validation post-launch tickets, but this is unlikely given that our ramp up for this is a full week.

### Address validation

- Anything open from the previous sprint
- Any required 508 tickets
- Go-no go
- Launch! #6426

### Profile 2.0

**Design**

- Edit modal state
- Pre-usability review
- Kickoff research recruiting
- Badge/logo research

**Dev**

- Figure out what can happen in the sprint
- Get appropriate build tickets ready
- Have design/development intent review
- Start build

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

- Design - Hide Direct Deposit information if the user is incompetent or has a fiduciary #6094
- Profile: Create a generic error state for when direct deposit is down #5959
- Curate Profile 2.0 Epic #6682

## Sprint 18 (3/25 - 4/7)

### [Sprint 18 Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/7193)

### Order of priorities

**Primary team**

Any overflow from last sprint, plus:

1. Profile 2.0: Build starts
2. Profile 2.0: Finish conversation guide; Kickoff research; Conduct research
3. Address validation post-launch tickets (only the ones already listed)
4. PM work
5. Monitoring, maintenance, bug fixes, hardening, 508, etc.

**Logged-in homepage discovery**

1. Finalize research plan
2. Plan 1 - 2 research activities (stakeholder interviews + maybe past research review?)
3. Potentially start conducting stakeholder interviews

### Address validation

- Ramp up to 50%
- Ramp up to 100%

### Profile 2.0

**Design**

Overflow from last sprint, plus:

- Get build tickets ready
- Run practice session
- Kick off recruiting (if ready)
- Conduct sessions (if possible — either start or complete)

If there's not a bunch of overflow from sprint 17, Tressa may have bandwidth to start on the tickets in epic #5518.

**Dev**
- Start build (figure out exactly which tickets)

### PM work

- Figure out what design needs to accompany [this ticket](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/6466) and get design tickets created and added to the backlog.
- Profile 2.0 epic grooming/What comes next with profile 2.0?
- Work with Erik to create a ticket for the Find VA Benefits work coming out of [#5865](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5865) 

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

- If possible, have Tressa do design this sprint to unblock #6466

### Logged-in homepage discovery

- Review and refine research proposal #7083
- Review and refine list of stakeholders #7086
- Create conversation guide #7087
- Schedule interviews #7088
- Conduct interviews #7089

- Other tasks — what can we get done? Research review? Other planning?

## Sprint 19 (4/8 - 4/21)

### [Sprint 19 Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/7725)

### Order of priorities

1. Address validation: Final tickets
2. Profile 2.0: Conduct sessions and summarize research (If time, start on content review/IA work)
3. Profile 2.0: Build continues

Logged in homepage

1. Synthesis for stakeholder interviews so far
2. Wrap up stakeholder interviews (if possible)
3. Research review
4. (Samara) Product outline

### Address validation
- Change address update endpoint to use iso3 country code #6046
- Stop using country name for VA profile contact information endpoint #5591
- Follow up with veterans to see if this feature resolves their issues saving addresses #6012 (Samara)
- 508 Office Review #7735

### Profile 2.0

#### PM
- Profile 2.0 epic grooming/What comes next with profile 2.0? #7222

#### Design
- Conduct research sessions #2587
- Create report and tickets #2588

(If time)
- Determine if there is any other content/links that needs to be updated as part of Profile 2.0 #5528
- Review Sign in FAQ for any links/content that need to be updated #5527
- Review Change your address content page for any links/content that need to be updated #5524
- Review My VA for any links/content that need to be updated #5522
- Review Direct deposit content page for any links/content that need to be updated #5525

#### Dev
- Make reusable Profile 2.0 info table component #7554
- Account security #5356
- Create a new side-nav component #7256
- Direct deposit #5355

## Sprint 20 (4/22 - 5/5)

### [Sprint 20 Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/8164)

### Order of priorities

**Project work**

1. Implement analytics tag for My VA health chat alert
2. Profile 2.0: Design updates from user testing; content review; IA plan and review
3. Profile 2.0: Continue build
4. Profile 2.0: Analytics planning
5. Address validation: Follow-up with veterans to see if they are still having issues saving their addresses
6. PM: Review team docs

**Non-project work**

1. Onboard Sandra (Welcome, Sandra!)

**Logged in homepage**

1. Finish work from last sprint
2. Plan user research/kickoff recruiting

### COVID-19: Health chat alert

- Implement analytics tag for My VA health chat alert #8033

### Profile 2.0

- Design - User testing updates
- Content/IA - Tressa reviewing content for updates
- Content/IA - Provide designs/guidance for content updates
- Content/IA - Tressa figuring out what URLs need to be updated/redirected
- **Stretch goal**: Content/IA - IA review (VSP cycle)
- Build - Continue build
- Analytics - Revisit KPIs and make sure they are updated in the product outline
- Analytics - Put together plan for how we want analytics set up
- Analytics - Submit request for review

### Address validation

- Follow up with veterans to see if this feature resolves their issues saving addresses #6012 (Note: still waiting to hear back from Chante/Kimberly/Joanne to see whether this is resolved or not)

### Onboarding Sandra 

- Sandra's onboarding checklist #8074
  - **Matt** this ticket needs further grooming by you
- Matt helping Sandra onboard

### PM

- Review updated authenticated experience team documents #8038
  
### Logged-in homepage  

- Finish work from last sprint
- Create research plan #7269
- Create conversation guide #7270
- Kick-off recruiting #7273

----------------

## Work that still needs to happen for Profile 2.0

- User testing - Finish usability testing
- User testing - Research write synthesis/create tickets
- Content/IA - Tressa reviewing content for updates
- Content/IA - Provide designs/guidance for content updates
- Content/IA - Tressa figuring out what URLs need to be updated/redirected
- Content/IA - IA review (VSP cycle)
- Build - Finish build
- Build - Implement updates from user testing
- Build - Implement any content updates/URL redirects/New URLs
- Build - Team verifies in staging that everything is behaving the way it should be BEFORE we do QA
- QA - plan for QA/submit QA request (needs to happen 1 sprint before we want QA to take place)
- QA - Tze conducts QA
- 508 - Request review of build
- 508 - Jen/Trevor conduct review of build
- QA - Implement fixes/updates that came out of QA/508 audit
- Analytics - Revisit KPIs and make sure they are updated in the product outline
- Analytics - Put together plan for how we want analytics set up
- Analytics - review (VSP cycle)
- Analytics - implementation
- Testing - Determine what we need re: E2E testing, load testing, unit testing
- Testing - Implement/run tests we determine we need
- Call center - Prep guide
- Call center - Prep video
- Call center - Contact Center Review (VSP cycle)
- Pre-launch - Product outline – Have team make updates to the product outline to prep for pre-launch activities/reviews
- Pre-launch - Put together release plan
- Pre-launch - Staging Review (VSP cycle) — Happens after QA
- Pre-launch - Privacy and Security Review (VSP cycle) — Happens closer to launch
- Pre-launch - Work with VA comms to figure out how we should communicate internally/externally about this feature update
- Pre-launch - Go/No-go
- Launch - Initial launch to UAT users
- UAT - Plan for UAT
- UAT - Recruiting
- UAT - Conduct sessions
- UAT - Fix bugs (if necessary)
- Launch - Ramp up phased launch
- Post-launch - Full Accessibility and 508 Office Audit (VSP cycle)
