# Research Report: Discovery Research on Claim Lifecycle for Accredited Representatives 

The Accredited Representative Crew\
Accredited Representative Portal (ARP)\
Researcher: Heather Roy\
January 2026

## Background 

The Accredited Representative Portal (ARP) is a VA platform designed for accredited representatives---Veteran Service Organizations (VSOs), Attorneys, and Claims Agents---who assist Veterans and their dependents with submitting claims, filing appeals, and establishing power of attorney. 

While ARP supports these critical tasks, the team identified gaps in understanding how representatives experience the claim lifecycle, manage their caseloads, and how workflows differ across user types. To address these gaps, the Accredited Representative Crew's UX team conducted discovery research focused on representatives' pain points, workloads, and daily processes. 

This report includes: 

- **Goals, Methods, and Sample Size** 

- **Key Findings and Actionable Recommendations** 

- **User Type Summaries** (VSOs, Attorneys, Claims Agents) 

- **Additional Insights** and **Appendix** 

## Goals 

1. Thoroughly understand the entire claimant lifecycle, from initial contact to completion, specifically as it is experienced by accredited representatives such as VSOs, attorneys, and claims agents. 

a. Specifically focus on gathering more information on the post submission process for accredited representatives and what all that includes for their work with a claimant. 

2. Understand the day-to-day processes used by accredited representatives to manage their caseload work across multiple clients with numerous claims and appeals at various stages of the claims process. 

3. Investigate accredited representatives' current workflows, including VA and third-party tools they use, data needs, pain points, and notifications/status needs, to identify opportunities for improvement. 

## Method and Sample Size 

For this study, 14 discovery interviews were conducted over Microsoft Teams with accredited representatives. These were 1-hour long sessions where VSOs, attorneys, and claims agents discussed their work processes while screen sharing or verbally explaining their processes for the claim lifecycle and managing their cases. Their level of work experience ranged from 1 year or less to over 20 years.  

- Attorneys (3) 

- Claims Agents (3) 

- Big 6 (7 total) 

o VSO State/County Cross Accredited (5)  

o VSO County (2) 

- VSO State (1) 

## Key Findings 

## 1. In general, accredited representatives (VSOs, attorneys, and claims agents) share a common claim lifecycle: Intake and Education→ POA & ITF → Review Files in VBMS & Evidence Development → Submission → Manual Monitoring in VBMS → Interventions (C&P exams, letters, reach out to VA) → Potential Post Decision Actions (appeals). 

The information in this finding provides a focused look at specific elements of the claim lifecycle for VSO, attorneys, and claims agents---not a step-by-step overview of the entire process. For a complete view of the claim lifecycle, refer to the [Claim Lifecycle Diagram here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1764613358747/35a61e4c208bf302ab1eacbc567f48df3b03e147?sender=u554b3318aeb1da3365e27185) for review. To better understand each user type and their role in managing claims, see the "Summary of User Types for Accredited Representatives" section in the second half of this report.

*Note: Many findings in this report connect to Finding 1, which serves as an overarching insight into the claim lifecycle.*

**Attorneys and Claims Agents** 

User flows within the claim lifecycle vary some by representative type. During intake, Attorneys and Claims Agents determine whether the case is viable for them to take it or not. If they are not a good fit, they will refer the claimant to a VSO through local organizations or via their website resources. If they agree to take the case, then Attorneys usually collect a retainer and secure a signed fee agreement after intake. Similarly, Claims Agents often present a term of service and/or fee agreement for signature at the same stage. An additional step in the claim lifecycle for Attorneys and Claims Agents is receiving their payment once the VA makes a decision leading to compensation. Attorneys and Claims Agents either receive payment from the VA or directly from the claimant. There is a lot of frustration from this user type regarding receiving their payments from the VA, which led some to receiving payment from the claimant instead of the VA.  

***P4 (Attorney)*** [Establishing POA/ITF with Attorney] *"We'll get a retainer signed with a confidential offer of representation that says we're going to take a look at your case in more detail when we get VBMS access. We're going to perform a full case evaluation for free. If we are able to accept your case, we are going to work on it immediately. If we can't, we're going to withdraw your representative from VA systems and we're going to simultaneously withdraw waiver entitlement to attorney fees so that there's no issue with that on the back end for the prospect as they try to find alternative representation. When we file that representation paperwork it will include a fee agreement, a 21-22a, and an ITF. We file the ITF as soon as reasonably possible at the first filing."*

**Veteran Service Organizations** 

VSO subtypes---Big 6, State, County---often follow different workflows. Big 6 and State VSOs in administrative roles generally focus on submission volume, QA, and onboarding/training new VSOs rather than managing caseloads. They typically track only priority or complex cases (e.g., financial, health, age-related). Large state agencies like [TVC](https://tvc.texas.gov/claims/appointments/) emphasize evidence development and claim submission volume over maintaining continuity with claimants. They adopt a "submit and forget" it approach since claimants may work with different representatives throughout the lifecycle.

In contrast, State VSOs in non-administrative roles and County VSOs are more likely to support claimants end-to-end, from initial filing through appeals and future claims, resulting in greater caseload management. Additionally, County VSOs often submit packets to State VSOs for review before sending them to VA---a step Big 6 and State VSOs typically are not required to take, as they submit claims directly.

***P7 (State/County VSO)**** "**But with our older generation, I do put things on my calendar. Two weeks I need to check [Name] file because he probably got a letter and doesn't understand. But I would say 80% now I don't have to do that with it. I don't say fire and forget, but it kind of is because I got to move on to the next Veteran."*  

**Accredited Representatives of All User Types**

Overall, across the claim lifecycle, reps rely on VBMS for status updates, document review, and exam visibility. They intervene when claims stall or errors occur---by contacting VA staff, escalating delays, resubmitting documents, or clarifying issues. Common interventions including flagging errors from VA adjudicators, challenging unnecessary exams, and/or filing Higher-Level Reviews and Supplemental Claims. These actions strive to prevent delays in the claim lifecycle.

**Recommendations:**  

 I. **Create User Type Documentation:** Develop detailed user type profiles based on interview findings to serve as a single source of truth for product, engineering, and UX teams. User type documents are focused on behaviors, needs, goals, and pain points rooted in data whereas personas are fictional characters that represent a user in generalizations. Providing user types for ARC will give UX, product, and engineering a guide and source of truth to refer to when planning and engaging with ARP users (e.g., product planning, recruiting, features needed, etc.) 

 II. **Technical Discovery with Fee Agreement and Payment**: Explore ways to provide functionality in ARP for Attorneys and Claims Agents by setting up steps to allow these reps to submit fee agreement forms and receive payment. This most likely includes UX discovery research and/or SME interviews to better understand the fee agreement and payment flow for these user types.

## 2. Representatives need immediate access to VBMS after establishing POA to review the Veteran's file, identify eligible benefits, and build a strong case---which helps prevent delays in the claim lifecycle.

A repeated theme by most participants without [auto-establishment](https://www.bing.com/ck/a?!&&p=9a5fd11c5afb0b2825722f802022afa49a5e67642b2e41fe749d7c5a16515bc3JmltdHM9MTc3MDY4MTYwMA&ptn=3&ver=2&hsh=4&fclid=25fad0ec-8dd7-6768-07bc-c60f8c5e6692&psq=auto+establishment+of+VA+forms&u=a1aHR0cHM6Ly9uZWJ1bGEud3NpbWcuY29tLzFmNjU0NTE5MTY2MTkyYmFlY2RkN2RkNDAyNDRlODllP0FjY2Vzc0tleUlkPTFGQkQ3NkY2N0JGODdDOEREODU5) of POA was the need to get quicker access to VBMS to see the Veteran's files. Some reps wait 2-4 days while others reported waiting 2 weeks, which delays being able to help the Veteran at the initial intake appointment and often requires a follow-up appointment. Whereas reps who have access to auto-establishment of POA reported having access to VBMS within minutes or seconds and could continue assisting claimants in the initial intake appointment preventing any delays in the process. This efficiency helps build trust with Veterans. Additionally, Veterans often forget whether they have previously submitted a claim or are unsure which benefits to pursue. This makes VBMS access critical during intake, enabling representatives to review the Veteran's eFile---including military history and past claims---and develop a clear plan for what to apply for and how to build the case. Overall, representatives who mentioned having access to auto-establishment for POA as well as other VA forms (e.g.; 526ez or 686c) within their claims management tool experienced less delays in the claim lifecycle.

***P12 (VSO Cross Accredited)**** [*When using auto-establishment for POA with VetPro]* "That's really, really fast. While I'm still talking with the Veteran it can come up that quickly. The longest I think it has taken has been 5 minutes. It's very helpful. [when auto-establishment isn't working] It can take a couple days to get that authorization to go in and see their records. So, it requires another trip for the Veteran or another for us to be able to have them send a signature to their documents."* 

**Recommendations:**  

 I. **Outreach about VBMS Access:** Consider bringing awareness to the portal's quick access to VBMS after establishing POA when ARC's VSO Liaison is doing outreach with current and potential ARP users.

## 3. Most representatives currently track claim and appeal status by manually checking VBMS, which signals the need for trustworthy, automated notifications from VBMS within ARP. 

Most accredited representatives---State, County, Attorneys, and Claims Agents---monitor VBMS daily for updates such as EP changes, suspense dates, decision letters, C&P exam orders and vendor assignments, exam notes, and development letters. Representatives expressed a strong need for notifications and confirmation when files are uploaded successfully and when claim statuses change. While some do not review every file daily, they prioritize urgent cases, such as those involving older Veterans, individuals with chronic or life-threatening conditions (e.g. ALS, cancer), Veterans experiencing homelessness, or DIC claims for surviving spouses and substitute claimants. Manual checks are less frequent for younger or tech-savvy Veterans, with greater emphasis placed on supporting elderly, ill, or technologically underserved Veterans. Some Big Six and State VSOs who are also administrators and tackling QA and training do not check VBMS daily because their focus is on administrative tasks and claim submissions.   

Tracking updates in VBMS is a taxing task that oftentimes requires multiple clicks to get where the representative needs to go. For example, looking up EP changes requires extra effort and can be confusing to navigate, especially when EPs are frequently closed incorrectly by the VA. Similarly, representatives are constantly going through the Documents tab on VBMS to review files and any claim updates from the VA, but many files will be labeled incorrectly or vaguely requiring the representative to click into each file. A Documents folder for a Veteran can include dozens if not hundreds of files so this is a daunting task making it hard to find what the rep needs. A major pain point is many documents will be labeled "Correspondence", but it might be an exam note or medical opinion, but they do not know unless they click open each document and review them. Representatives no longer have the ability like they did in the past to rename documents, which creates a lot of work and manual labor for reps when building cases and tracking claims/appeals.

**P1 (VSO, cross accredited) ***"VBMS doesn't tell us when anything changes. We bookmark and check every day---EP codes, suspense dates---because there's no alert if a claim stalls or an exam gets ordered."* 

**P4 (Attorney)** *"We live in VBMS and Smart Advocate. If I could see exam scheduling, vendor, and DBQs the moment they're ordered---and get a push when the opinion posts---we'd save weeks and avoid unnecessary appeals."* 

**Recommendations**:  

 I. **Technical Discovery:** Determine which VBMS data points can be integrated into ARP for status updates.

a. Based on interview data, the most important VBMS updates are as followed in order of importance: 1) VBMS access, 2) Claim Status Changes (e.g.; "Ready for Decision," "Pending Approval," "Rating Decision Complete," etc.), [[HR1]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_1) [[JB2]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_2) 3) C&P Exams (Requests, Vendor Assignments, and Outcomes), 4) EP changes (tracked items)[[SF3]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_3) [[HR4]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_4) [[HR5]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_5) [[BJ6]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_6) [[HR7]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_7) , 5) Suspense dates, 6) New Documents, and 7) Form submission receipt.

 II. **UX Design Notifications:** Based on available VBMS data, develop ARP notification designs and information architecture to keep representatives informed of claim status changes.  

 III. **Notification Preferences:** Explore filtering options within ARP to allow user-controlled notification settings, avoiding email alerts and prioritizing in-tool notifications tailored to representative workflows. 

## 4. Many representatives reported they do not receive hard copies of letters from the VA and instead learn about decisions or VA requests by manually checking VBMS or hearing from the claimant.

Many representatives stated they believe they are supposed to receive mailed copies of the same letters that their claimants receive from the VA, but reps report inconsistent delivery or no delivery at all. Some letters go to state headquarters or main offices instead of to the individual offices where representatives are working so they do not receive those letters. Other reps reported that letters stopped entirely during COVID (2020) and everything is now digital. There is confusion about whether VA still mails letters to representatives.

As noted in Finding 3 and reinforced in Finding 4, accredited representatives often learn about new letters in VBMS---such as decision notices or C&P exams---by manually checking the Documents tab in VBMS or hearing from their claimants when they receive letters and have questions or concerns, so they reach out to the rep. This manual process creates more work and sometimes delays because letters can be missed. Representatives said it would be helpful to get notifications about new letters in VBMS to reduce the current manual process. For example, letters about decisions would be helpful to know ahead of time so they know how to explain it to their claimant and/or know what next steps to take without wasting time. Similarly, exam notices are easy to miss and cause frustration for the claimant and representative because both often experience not getting the letters or getting them too late and missing exams. This can cause major issues with a claimant's claim process as it can further delay the process since it can take months to get an exam scheduled. Overall, there is a strong need for digital notifications for representatives about new letters in VBMS.

***P13 (Big 6 VSO)*** *"I don't get copies of letters. I know they used to send those out, but somehow during COVID they stopped sending out the copies of the letters. I don't know if they ever plan on starting it again."* And this same point was reiterated by ***P16 (Claims Agent):** "We don't get anything. Usually, our Vet gets the letter. I see it because I'll watch VBMS like a micromanager."*

***P14 (Attorney)*** *"I could drill down into VBMS when an exam has been requested and it might be scheduled, but I have to do like 10 clicks to do that."*

***P12 (County VSO Cross Accredited)*** When asked what notifications would be helpful to receive, P12 said *"Notification of correspondence with the Veterans---so that we know when VA is sending letters. That would be really helpful. Decision letters or even a request for information for their claim. Those kinds of mailing are really important."*

**Recommendations**:  

 I. **Technical Discovery:** Explore which notifications can be made available in the Accredited Representative Portal from VBMS to notify representatives about new letters in a claimant's eFolder. Consider enabling proactive digital notifications for reps in ARP such as: Ready for Decision/Decision Letters, Exam Letters, Request for Information, and Payment Notifications[[JB8]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_8) [[HR9]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_9) [[BJ10]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_10) [[HR11]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_11) [[HR12]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_12) .

 II. **Education on Portal:** Investigate and consider clarifying on the Accredited Representative Portal whether VA still mails hard copies of letters to representatives.

## 5. Representatives fill out VA forms [21-22 ](https://www.va.gov/forms/21-22/)or [21-22a ](https://www.va.gov/forms/21-22a/)(POA) first and have claimants use e-signature tools to sign forms, which is a different workflow than what is currently in the Accredited Representative Portal.

Regardless of the tool used ([QuickSubmit](https://eauth.va.gov/accessva/?cspSelectFor=quicksubmit), [VetPro](https://fcp.vetpro.org/Admin/Login/Index), [SmartAdvocate](https://www.smartadvocate.com/)) representatives complete the 21-22 or 21-22a (POA forms) and obtain claimant signatures in person or via e-signature tools (e.g[., Finger,ink](https://vetpro.us/our-software/), Adobe, [Hona](https://www.hona.com/)). This workflow differs from ARP, where the Veteran initiates the form and the representative signs afterward. The e-signature tools available to reps were described as functioning like DocuSign. Access to e-signature tools significantly improves efficiency; representatives collect signatures remotely on any device, reducing delays and enabling immediate form submission. This accelerates VBMS access and prevents week-long wait times, allowing representatives to assist claimants faster.

When representatives have access to e-signatures like Finger.ink they can also apply digital signatures to subsequent claims in VetPro expediting the process for filing additional claims and or appeals. This cannot be done with VA forms that still require a wet signature but most common forms like [21-526ez](https://www.vba.va.gov/pubs/forms/VBA-21-526EZ-ARE.pdf) or appeals do allow the digital signature. Some representatives described how their claims management tool allows them to clip a signature and apply it to other forms rather than requesting the signature from the claimant again. Other reps do not follow that workflow and preferred to receive consent from the claimant each time a signature was needed and they used their e-signature tool. Overall, e-signature capability reduces friction and minimizes delays in the claim lifecycle.

**P13 (Big 6 VSO) ***"We're able to use VetPro to generate the form and then apply a digital signature and then submit it that way."* 

**P15 (County/State VSO) ***"Let me tell you what I'm in love with [Finger.ink]. The first time I used it I'll never forget. It was over the phone with a Veteran, and I say 'hey I'm going to try this new thing. So let me walk you through how to get your signature digitally on this 21-22 and let's see how fast it unlocks your file. And he never filed claims before. Within 2 minutes of hitting auto-establish VBMS was open and this form we just signed was sitting there."* 

**Recommendation**: 

 I. **Technical Discovery: **Explore what technical features may be possible in ARP to explore e-signature pathways to provide this workflow functionality for representatives who typically fill out 21-22 and 21-22a's first and request signatures.

 II. **User Interface and Information Architecture Redesign:** [There is an epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115284) currently backlogged for ARC to consider designing an alternative workflow in ARP for Rep-to-Claimant POA initiation, alongside the existing Claimant-to-Rep flow. This research further validates this need. This workflow option addresses critical need for quicker VBMS access across user types. If desired and feasible, map user journey, define new screens needed, and update information architecture to support both pathways.

## 6. Each accredited representative has their own way of prioritizing their daily workload, but a key theme for prioritization of work is driven by the claimant's health, financial situation, age, and the age of the claim. 

All accredited representatives expressed how they select what to work on first each day based on common key factors that they deem more urgent or important compared to other claims that are important but don't require the same level of urgency.  

- **First Tier**: Terminally ill veterans (e.g. ALS), homeless veterans, veterans hospitalized or serious health conditions, DIC/survivor benefits/pension, financial hardship for Veteran or dependents, mental health (e.g. suicidal ideation, PTSD, MST), age (e.g. older veterans not technologically savvy) 

- **Second Tier**: Expiring ITFs, Board meetings, urgent appeals, older or unfinished claims sitting in their queues, and congressional inquiries.  

Additionally, each representative reported using different tools for managing and prioritizing their workloads. Some use spreadsheets, calendars, and/or personal lists within their claims management tool to help them prioritize what to work on first. Others who have proprietary software have built automated flags and systems for prioritizing and assigning work. See more details about tools used for prioritization in the second half of the report with the section titled "Tools Used by Accredited Representatives."

***P14 (Attorney)*** *This attorney often works with Veterans experiencing homelessness and when speaking about priority processing of urgent claims, P14 wondered if ARP could assist in speeding up the priority flags triggered in VBMS for these hardship claims:" But if the portal could make that as quick as possible too, meaning like if there's a way to automate that I don't know that you can."* 

**P4 (Attorney)** "We've got a priority list in Microsoft OneNote that helps us identify priorities. Each person has a checklist that they work through and that priority list in OneNote helps them discern what's the highest priority versus what isn't. People are terminally ill; we want to get those cases going. We want higher value cases." 

**Recommendations**: 

 I. **Add Claimant Filtering:** Explore options to enable representatives to filter claimants in ARP by urgent factors such as health, DIC, financial status, age, and claim age.  

 II. **Technical Discovery for VBMS Flags:** Investigate whether VBMS data (e.g., flashes for terminal illness or homelessness) can be integrated into ARP to prioritize claims and appeals with these indicators. 

## 7. Representatives sometimes intervene on the claimant's behalf based on information they are tracking in VBMS before a decision is made.

After submitting a claim or appeal, most representatives monitor VBMS closely---tracking status updates, end products (EPs), C&P exams, and suspense dates---because specific notifications often prompt them to act on behalf of the claimant. Typically, they are intervening to ideally prevent unnecessary delays and appeals. The most common reasons a representative will act for a Veteran during the post submission period include: 

- **No movement (~90 days) on a claim**, some reps will send a regional [LEAF/Helpdesk request](https://vba-media1.vbatraining.org/VBA_Learning_Catalog/Other/HCS/4635965_Add_Ref(1).pdf), prompt the Veteran to call the VA hotline for updates, file a new [ITF](https://www.va.gov/resources/your-intent-to-file-a-va-claim/) to nudge processing, and/or contact a [Regional Office](https://benefits.va.gov/benefits/offices.asp).  

- **Responding to VA requests for additional info/evidence**(VA forms [21-4142 ](https://www.va.gov/forms/21-4142/)medical records or [21-4138 ](https://www.va.gov/forms/21-4138/)Statement in Support of a Claim like lay statements) 

- **Review C&P exams before and after a decision is made** (for accuracy and completeness) and reach out to a VSR, Rater or Coach at the VA to point out errors by the examiner or adjudicator. If before a decision, the rep will try to make a case for correction to prevent delays by resubmitting documents or contacting the coaches directly to prevent unnecessary appeals. If after a decision, they will begin the appeal process and evidence collection if supplemental claim. 

- **If a C&P exam is requested**, most reps will notify the Veteran about it to prepare them for the exam and some also confirm date and location of exam for the Veteran. If the rep believes the exam is unnecessary, they will encourage the Veteran to cancel the exam. 

- **If a decision is made**, most reps will contact the Veteran and discuss potential next steps like an appeal. Most will promptly file a Higher-Level Review for incorrect decisions or effective dates as well as inaccuracies with [DBQ](https://www.benefits.va.gov/compensation/dbq_publicdbqs.asp) interpretation or failure to apply secondary condition rules.

**Recommendations**: 

 I. **Technical Discovery for VBMS Data:** Identify which VBMS data points can trigger ARP notifications, such as claims stagnant for 60--90 days, exam requests or reviews, evidence requests, and decision updates.  

 II. **Design Customizable Notifications:** If VBMS data can be integrated, develop ARP notification designs and information architecture that allow representatives to customize and filter alerts based on their needs and preferences. 

## 8. Representatives heavily use VA form 20-0996 Higher-Level Review as their first route for most appeals because it is considered the fastest path.

Typically representatives file [Higher-Level Reviews](https://www.va.gov/forms/20-0996/) (HLRs) because they are viewed as the fastest appeal option (~2-4 months), compared to [Supplemental Claims](https://www.va.gov/forms/20-0995/) (SC) (~4-5 months) and [Notice of Disagreements](https://www.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/introduction) (NODs) (~1-3 years) as a last resort.

When reviewing decision letters in VBMS and spotting errors or failures in VA's [Duty to Assist](https://www.va.gov/resources/vas-duty-to-assist/), representatives typically file an HLR immediately rather than waiting, since evidence was already made available but not addressed by VA. If additional evidence is needed, they choose a SC. If it is a complex case that has been denied with HLRs and/or SC's, then they file a NOD, which is a Board appeal.

***P14 (Attorney)**** "I can file an HLR and say okay, well maybe you thought that was missing but that is wrong. I would want to file the quickest filing which is always an HLR."*

***P3 (State VSO)**** "I look at C&P exams, when the Veteran's decision was denied. I had one last week where the decision the provider said it was [connected] but VA still denied it. So it was an oversight on their part, but we still had to submit an HLR."*

**Recommendations**:  

 I. **Expand ARP Functionality for Appeals: **[ARC plans to support appeals](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1757632208401/e05280b008dfb309f0c055582a86037b0671bd36) on the Accredited Representative Portal, but it is recommended based on this research to consider prioritizing VA Form 20-0996 Higher-Level Review first. This form addresses a critical user need for faster appeal processing and improved claimant experience. [This epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115302) on uploading any PDFs to ARP may address some of these needs.

## 9. ARP has little use for Claims Agents and Attorneys because they have limited POA capabilities (no affiliate access), cannot submit fee agreement forms, and they cannot submit appeals, which is most of their caseload. 

As with past research and this discovery project, ARC continues to hear frustration from Attorneys and Claims Agents over ARP and the limited functionality for them compared to VSOs. ARP does not currently support appeals (Supplemental Claims, Higher Level Reviews, and Notice of Disagreements), which makes up the majority of the workload for Attorneys and Claims Agents. They do submit initial claims as well, but the majority of their workload is with appeals which is on the roadmap for ARP with this [super epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115306)[[HR13]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_13) [[JB14]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_14) [[JB15]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_15) [[JB16]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_16) [[JB17]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_17) [[HR18]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_18)  but not currently offered.

There are limited POA capabilities for Claims Agents and Attorneys on ARP as well, which is a barrier in wanting to use the portal because without POA functionality they cannot assist a claimant. One of those barriers is that most law firms have pods of attorneys and paralegals working on one claimant's case at a time. ARP does not offer affiliate access which allows accredited attorneys and claims agents in the same office have access to the POA of record's cases. For example, P4 (Attorney) works for a large law firm, and the founder/CEO has POA, but the CEO does not work the cases, which is how many law offices are set up. The attorneys doing the casework need access to the claimant's information.

Lastly, ARP does not allow Attorneys and Claims Agents to handle fee agreements and payments, which are necessary steps in their claim lifecycle with Veterans and dependents. During intake, paralegals typically work with claimants on sharing a fee agreement form and obtaining a retainer and then receiving payment once the VA makes a favorable decision. Claims Agents have a similar process except they are doing that work instead of paralegals.  

***P16 (Claims Agent)*** *"The portal is more directed toward VSOs... it's for 526 and 686C, not helpful for appeals."* 

***P5 (Claims Agent) ****"I use the portal right now for nothing because I can't have veterans request me to take their POA and I can't cancel their POA and I cannot file a claim. The old SEP I could just go to a veteran's file and start a claim. You know, here you got to download a form, complete it and then upload it. I ca do that already without the representative portal."* 

**Recommendations**:  

 I. **Expand ARP Functionality for Attorneys and Claims Agents:**This is currently on the [roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1757632208401/e05280b008dfb309f0c055582a86037b0671bd36) and is further validated by this research: Provide functionality for 21-22a (Appointment of Individual as Claimant's Representative), 20-0995 (Supplemental Claim), 20-0996 (Higher-Level Review), and 10182 (NOD-Decision Review Request).

 II. **Conduct UX Research on Payment Flow:** Current research highlights ARC's gaps in understanding the nuanced details of how attorneys and claims agents manage VA fee agreements and payments. Consider conducting more research with Attorneys and Claims Agents on those details (e.g.; how documents are shared, signed, submitted, and retainers accepted). Additionally, explore the steps for receiving payment from both the claimant and VA so that ARP can better understand these workflows and consider adding those functionalities to ARP.

 III. **Enable POA Management Requests and Affiliate Access:** Explore adding functionality for approving or canceling POA, allowing Veterans to request representation from attorneys and claims agents directly through ARP, and adding affiliate access so accredited attorneys and agents in the same office have POA access.

## 10. Delays in processing [VA Form 21-686c](https://www.va.gov/forms/21-686c/) can leave financially vulnerable claimants without compensation for 3--9 months, and ARP currently offers no auto-established or automated solution for representatives.

Some representatives reported that previously with the Stakeholder Enterprise Portal (SEP) they would submit a 686c dependency form and it would be processed in a few minutes (max 48 hours or less), but recently the processing times for 686c have drastically increased and now they are taking on average 6-9 months to award Veterans. [[SF19]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_19) [[HR20]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_20) [[HR21]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_21) This is problematic for Veterans and dependents who are in financial constraints.  

Additionally, representatives emphasized the need to submit supporting documentation---such as marriage certificates, birth certificates, or divorce decrees---along with the 686c to prevent delays caused by the VA requesting these documents later. 

***P8 (State VSO Cross Accredited)*** *"When you did a 686 in SEP, you could get it almost automatically processed. Like within a couple hours sometimes 24 hours. It would get done right away. With the ARP portal, I tried to do it one time, do an automatic update for dependency on the ARP portal and the functionality does not exist anymore. And I was like 'I'm not going use the portal when I can just use QuickSubmit to upload it."* 

***P7 (State/County VSO)*** *"The dependency pay, the 686c, worked really well in SEP, and we're hoping it works that way in ARP. Before in SEP we were able to upload that 686c, the marriage certificate and within 48 hours they were getting their pay whereas through normal systems like TVB and QuickSubmit it takes longer. We're hoping ARP will allow that feature because a lot of our reps really like that. [...] We'll submit all the, if there's children, we'll submit the birth certificates, all documentation in one claim. So the VA doesn't have to go back and ask for it."* 

**Recommendations**:  

 I. **Technical Discovery for Auto-Establishment:**It is currently [on ARC's roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115299) with a super epic to auto-establish VA Form 686c within ARP, which is further validated by this research and the recent decommissioning of SEP.

 II. **Enable Auto-Establishment of VA Forms on ARP:** Currently, [ARC's product roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1757632208401/e05280b008dfb309f0c055582a86037b0671bd36?sender=u554b3318aeb1da3365e27185)includes plans for auto-establishing VA forms 526ez, 686c, and 21-22a, which is further validated by this research as an ongoing need by representatives especially with SEP decommissioned. [[SF22]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_22) [[HR23]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_23) [[HR24]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_24) [[FS25]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_25) [[FS26]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_26) [[HR27]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_27) [[BJ28]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_28) [[HR29]](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20&amp;%20Artifacts/(new)%20Research%20Report-Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx#_msocom_29) At this present time, ARP offers auto-establishment of VA forms 21-22 (POA for VSOs) and 21-0966 Intent to File (ITF). Where possible, enable auto-establishment of VA forms on ARP because it assists with quicker access to VBMS when filing for POA and quicker claims and appeals when using auto-establishment compared to manual establishment processes. 

## 11. All accredited representatives want ways to communicate with VA adjudicators directly to prevent unnecessary delays and appeals. 

Representatives consistently expressed in these interviews the need for better communication with VA adjudicators to prevent unnecessary appeals caused by errors in decisions awaiting authorization. Currently, some representatives reach out to VSRs, Raters, or Coaches via Microsoft Teams, or in person if in a shared VA facility, to correct mistakes in adjudication or C&P exam interpretations. Monitoring VBMS updates is often driven by this need---to catch errors before decisions are finalized or to prepare for appeals. Reps emphasized that open communication could allow corrections or evidence submission before authorization, avoiding appeals that add months or years to the process.  

Many Higher-Level Reviews and Supplemental Claims could be prevented if these channels were available. For example, P15 from the interviews (County/State VSO) identified an error in a pending decision caused by a misinterpreted C&P exam. By contacting a Rating Coach directly, the error was corrected within 24 hours, granting the Veteran compensation and avoiding months of delay. This case illustrates how timely communication can significantly reduce unnecessary appeals and improve outcomes for Veterans. 

***P7 (State/County VSO)*** *"Now the Veteran must wait another 60 or 90 days just because it was a bad exam and the Rater didn't catch it. It is 10%-15% from what we see. It's a large chunk. We do a lot of Supplemental Claims that do not need to be done. if the VA rated out properly the first time Supplemental Claims would not have to be done."* 

***P16 (Claims Agent)*** *"It would be so nice if we had like an instant messenger thing that says 'Hey, I've got a Rater looking at your file, if she has any questions, would you be open to text and answering them?' I'm saying it would put out a lot of fires to where veterans are not getting turned down if they just open a communication channel with us."* 

**Recommendation**:  

 I. **Leverage Feedback to Inform Communication Improvements:** Collaborate with the ARP VSO Liaison to use representative feedback to guide enhancements in communication channels between representatives and VA. While no immediate solution exists, present these insights to VA stakeholders to highlight the need and explore potential approaches. 

## 12. Representatives want to avoid manual entry of claimant information if ARP already has the Veteran or dependent on file.

Many representatives expressed frustration with the manual entry of claimant information on VA forms, noting that these details already exist in their organization's system. Automating the population of fields in claims management tools without it---such as name and demographics---would save time and reduce errors caused by manual input. 

P16 (Claims Agent) *"You have to fill out all these forms back again. I am spending two and three hours filling out a 20-0995, downloading it, scanning it back in, and having to go to QuickSubmit to do that. It is a lot of redundancy."* 

**Recommendation:**  

 I. **Reduce Manual Data Entry:**Confirm that [ARC's super epic for 526ez](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127934) includes incorporating this feature---auto-populating claimant information in ARP form submissions. This research further validates this need to reduce manual entry to streamline workflows for representatives and minimize errors.   

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApAAAAAECAYAAAA53Q8sAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUATWljcm9zb2Z0IE9mZmljZX/tNXEAAACoSURBVGhD7dhRCkAwAMbxqRUpT07gZm6ydgU5gCvKEwrfyh4cgGz91RdR+vabh401xkwKBwII/F/gUMVG6ZT6/3VpiAACt0Clc6kUyokKAokJhO92V0Zl8N6vob/VRZ/YQKiLAAIIIIBAMgLOubDxa1lAJjNlFH0KxI3PrNtbfGRRQgABBBBAAIH3BPSjZtHbQzgQyEaABWQ2U8lAEEAAAQQQQACBbwQuAQkSaJaYkNYAAAAASUVORK5CYII=) 

# Summary of User Types for Accredited Representatives 

This section of the report provides foundational context about VSOs, Attorneys, and Claims Agents to inform product, engineering, and UX. It summarizes key characteristics of these user types, including the size of their caseloads, work environments, strategies for managing tasks, benefits they help claimants access, common evidence requirements for claims and appeals, and the tools they rely on.  

## Caseloads and Work Settings by User Type 

**County/State VSOs & Big Six VSOs** 

- **Caseload**: Typically manage 10--30 cases per week. 

- **Work Setting**: Mix of remote, in-person, and walk-in appointments. 

- **Appointments**: Usually scheduled for 40--90 minutes each. 

- **Workflow**: Some VSOs set aside administrative days for case tracking and follow-ups. 

- **Additional Roles**: May include QA, training, community outreach, education, and administrative tasks. 

**Attorneys** 

- **Caseload**: Firms handle 500--5,000 active cases; individual attorneys may represent 100+ clients. 

- **Support Structure**: Work with paralegals and/or pods of 6 attorneys for case management. 

- **Intake Process**: Paralegals often manage initial intake before attorney involvement. 

- **Work Setting**: All attorneys interviewed meet clients remotely only. 

**Claims Agents** 

- **Caseload**: Varies widely---some manage 1--2 claimants, others 12--20, and some up to 35--40. 

- **Support Structure**: Work independently without assistants, shaping workload differently than VSOs or attorneys. 

- **Work Setting**: Primarily remote, with some in-person meetings. 

## Strategies for Managing Caseloads  

**County/State/Big 6 VSOs** 

- **Admin Time**: Some schedule dedicated admin days for emails, CRM tasks, and claim tracking; others build in 15--20 minutes between appointments for these tasks. 

- **Work Prioritization**: Walk-ins take priority, followed by scheduled in-person, phone, and video appointments. 

- **Tracking Methods**: Manual processes using physical calendars or digital tools. 

- **Claim Submission**: County VSOs prepare claims and send packets to State VSOs for review before VA submission. 

- **Specialization**: Some offices assign reps to specific claim types (e.g., MST, pension, DIC, complex cases). 

- **Outreach:** Most VSO offices have some form of outreach and education in their communities to inform claimants they are available to help. 

**Attorneys** 

- **Support Structure**: Paralegals handle intake, status updates, and VBMS tracking; attorneys focus on case building and C&P exam prep. 

- **Team Setup**: Pods of ~6 attorneys may manage 100+ cases each. 

- **Tools:** Use internal claim management systems with automation for deadlines, demand letters, and case mapping. 

- **Prioritization**: Terminal cases, high-value cases, and vocal clients. 

- **Case Selection**: Attorneys often decline simpler cases, referring Veterans to VSOs for assistance. 

- **Word of Mouth**: Most attorneys reported getting clients mainly by word of mouth and do less outreach than VSOs. Some law firms do use advertising to get more claimants. 

**Claims Agents** 

- **Caseload**: Intentionally small (1--2 cases) for some; others manage 12--40 cases. 

- **Independence**: No assistants---workload shaped by solo operations. 

- **Tracking**: Manual flowcharts and spreadsheets; daily VBMS checks for task updates. 

- **Case Selection**: Similar to attorneys---focus on complex cases and appeals; some take unpaid cases to help Veterans and prevent delays. 

- **Word of Mouth**: Most Claims Agents reported getting clients mainly by word of mouth and they do not advertise or do outreach. 

## Types of Benefits they work on for Claimants  

**VSOs** 

- 21-526ez Disability Compensation (initial and increases) 

- 21-686c Application to Add and or Remove Dependents (dependency updates/additions) 

- 10-10ez for VA Healthcare (CHAMPVA and TriCare) 

- 20-0995 Supplemental Claim (appeal) 

- 20-0996 Higher Level Review (appeal) 

- 21P-534a Dependency and Indemnity Compensation for Surviving Spouse or Child (DIC)  

- 21P-534ez Survivors Pension and/or Accrued Benefits  

- 21P-535 Dependency and Indemnity Compensation by Parent(s) 

- Benefits Delivery at Discharge (BDD) for transitioning service members 

- Burial and Headstone benefits 

- 21P-527ez Application for Pension (Aid and Attendance) 

- State and Local benefits (property tax, DMV, etc.) 

**Attorneys** 

- 21-526ez Disability Compensation (initial, increases, injustices, and complex cases) 

- 21P-534a Dependency and Indemnity Compensation for Surviving Spouse or Child (DIC) 

- 20-0996 Higher Level Review (heavy use and preferred for speed) 

- 20-0995 Supplemental Claim 

- 10182 Notice of Disagreement (BVA appeal---direct review docket favored over hearings) 

- 21P-534ez Survivors Pension and/or Accrued Benefits (less common for this user type) 

- **Healthcare appeals/claims often avoided as well as non-service-connected compensation claims 

**Claims Agents** 

- 21-526ez Disability Compensation (initial, increases, and focus on mental health cases like MST, PTSD, and suicide) 

- Character of Discharge Determinations 

- 21P-534a Dependency and Indemnity Compensation for Surviving Spouse or Child (DIC) 

- Benefits Delivery at Discharge (BDD) for transitioning service members 

- Burial and Headstone benefits 

- 20-0996 Higher Level Review 

- 20-0995 Supplemental Claim 

- 10182 Notice of Disagreement (BVA appeal use only when needed) 

## Common Evidence Needed from Claimants 

**Claimant Info & Service Information** 

- Full name, SSN, DOB, mailing address, phone, email 

o DD214 / Discharge papers (proof of military service) 

- Service history: branch, dates, deployments, wartime periods 

- Prior rating decisions (to determine initial vs. appeal claim) 

**Medical Evidence** 

- VA and private medical records 

- Diagnosis confirmation (conditions claimed) 

- DBQs (Disability Benefits Questionnaires) 

- C&P exam reports 

- Nexus letters (linking condition to service) 

- Buddy statements (VA Form 21-10210) and 4138 (Statement in Support of Claim) 

**Financial & Pension Documentation** 

- Bank info: deposit slip or voided check 

- Financial statements for pension (VA Form 21-0969) 

- Aid & Attendance supporting docs 

**Dependency & Survivor Information** 

- Marriage certificate 

- Birth certificates for children 

- Prior marriage/divorce details 

- Death certificate (for DIC or burial benefits) 

- Guardianship/custody documents (for dependent children) 

## Tools Used by Accredited Representatives 

Accredited representatives use various tools each day to complete the claims lifecycle. Below is a table depicting the core VA systems used, VSO/Organization-specific software, and case management tools. The number of participants who use each tool is reflected in the information below with the number of users out of 14 participants in this study. 

**Core VA Systems** 

- **VBMS** (Veterans Benefits Management System)

o Use: Daily system of record for claim status, decisions, EP codes, suspense dates, notes, exam tracking, and priority flashes. 

o Users: VSOs, attorneys, claims agents (14/14) 

- **Citrix** / VA Desktop

o Use: Secure access to VBMS, CAPRI, VA email; pull records and contact VA for eligibility or travel. 

o Users: VSOs, attorneys, claims agents (14/14) 

- **QuickSubmit**

o Use: Submit POA, ITF, 526, 0995, 0996, and evidence; provides email confirmation (not always VBMS ingestion). 

o Users: VSOs, attorneys, claims agents (12/14) 

- **Accredited Representative Portal (ARP) **

o Use: POA acceptance and limited claim submissions (526, 686c); not appeals-ready. 

o Users: VSOs primarily; minimal use by attorneys/agents (4/14) 

- **Caseflow**

o Use: Submit appeals, pull full claim files (ZIP), track Board hearings. 

o Users: Attorneys/agents; advanced VSOs (4/14) 

- **CAPRI**

o Use: Access VA medical records for evidence; previously could push records to VBA folder. 

o Users: Attorneys/agents; advanced VSOs (3/14) 

- **E-Folder Express**

o Use: Download full claim files (unreliable, multiple attempts). 

o Users: Attorneys, claims agents (2/14) 

- **SHARE**

o Use: Occasional use for dependency/special cases. 

o Users: VSOs (2/14) 

**VSO / Organization-Specific Tools** 

- **VetPro**

o Use: Case management---profiles, SAFE notes, auto-generated forms, e-signatures, POA processing, auto-establish VBMS access. 

o Users: County/State VSOs (9/14) 

- **TVB**

o Use: VFW system for creating, managing, and submitting claims; auto-populates forms; quick status view. 

o Users: VFW VSOs (2/14) 

- **VATS Portal**

o Use: Submission path for American Legion/State DVA packages; automated submission messages. 

o Users: American Legion, State DVA offices (1/14) 

**Case Management & Productivity Tools** 

- **Spreadsheets & Task Lists **

o Use: Track ITF deadlines, reminders, pending actions, manual prioritization. 

o Users: VSOs, attorneys, claims agents (6/14) 

- **Microsoft Planner & Calendar **

o Use: Manual caseload buckets (Backlog, Up Next, On Hold); weekly reviews; no VA integration. 

o Users: VSOs, office admins (3/14) 

- **Microsoft OneNote **

o Use: SOPs, scripts, prioritization lists, knowledge base. 

o Users: VSOs, law firm teams (2/14) 

**Scheduling & Communication** 

- **WaitWell **

o Use: Appointment scheduling and queue management for phone/in-person sessions. 

o Users: County/State VSOs (1/14) 

- **RingCentral **

o Use: Phone intake and call routing for high-volume offices. 

o Users: County/State VSOs (1/14) 

- **Microsoft Teams **

o Use: Identify VA staff on files; occasional direct messaging. 

o Users: Attorneys, claims agents, VSOs (5/14) 

**E-Signature & Document Tools** 

- **Finger.Ink **

o Use: Remote e-signature via QR/email; enables same-session POA and form signing. 

o Users: VSOs (5/14) 

- **Hona **

o Use: Remote e-signature via Chrome extension; enables same-session form signing. 

o Users: Attorney (1/14) 

- **ShareFile / Adobe Sign **

o Use: Send forms (e.g., 21-22A) for e-sign during calls; audit trail for consent. 

o Users: Attorneys, claims agents, VSOs (4/14) 

- **Adobe Acrobat (incl. Citrix Universal Printer) **

o Use: Assemble/edit PDFs, draft cover letters, print/pull files from VBMS. 

o Users: VSOs, attorneys, claims agents (10/14) 

- **OneDrive for Business **

o Use: Store extracted claim files for navigation and team analysis. 

o Users: Attorneys/agents; advanced VSOs (2/14) 

**Reference & Research** 

- **CFR & M21-1 Manual **

o Use: Regulatory/procedural reference for strategy, effective dates, and appeals. 

o Users: VSOs, attorneys, claims agents (12/14) 

- **Local GIS & State Sites **

o Use: Verify eligibility for state benefits (tax relief, licenses, applications). 

o Users: County/State VSOs (5/14) 

- **ChatGPT **

o Use: For claim research and development 

o Users: VSOs (1/14)  

# Additional Findings 

- **Tool fragmentation and manual monitoring---**Representatives are working in various VA tools, third-party claims software, e-signature apps, case management tools, etc. which creates friction and rework; reps routinely check VBMS without proactive alerts and juggle appointments, walk-ins, phone calls, emails, social media, and more each day.  

- **Labeling issues with documents in VBMS ("correspondence," duplicates)** slows their work down when reviewing a claimant's file. Confusing language in decision letters and VBMS status updates cause frustration and worry for Veterans/claimants who often reach out to their reps worried and wanting clarity. 

- **Reps want access to more VA Forms on ARP** like: Lay Witness 21-10210, Supplemental Claims 20-0995, Higher Level Review 20-0996, Statement in Support of Claim 21-4138, Authorization to Disclose Information to the Department of VA 21-4142, and General Release for Medical Provider Information to the Department of VA 21-4142a.  

- **Representatives can see Veteran information when they have POA for a Dependent---**When an accredited representative has POA for a dependent (e.g. surviving spouse) they do get access to the Veteran's folder on VBMS. When a Veteran passes away, POA is revoked and a new POA form must be processed for the dependent. Therefore, it is the Veteran's file on VBMS but the dependent's award.  

- **There is a strong dislike for using Adobe in reps' workflows**---Some representatives reported they needed to use Adobe for signatures or when their claims management tool has an outdated form and they need to upload the newest version. There are better options for signatures like VetPro's Finger Ink tool.  

- **VSOs often help claimants with state and county benefits**---Representatives at Big 6, County, and State VSO offices often report helping Veterans and dependents access state benefits like DMV licenses and property taxes. They prefer only working with claimants in the states where they work so they are better informed about local benefits. 

- **Veterans experiencing homelessness typically use other individual's addresses or local VSO addresses**---For representatives who typically work with Veterans experiencing homelessness, they report that those Veterans will use the VSO's address, social worker's address, get a P.O. box, and/or use a relative's address. They also report having difficulty reaching out to Veterans who are homeless because the phones they typically use are only accessible when on Wi-Fi. 

# Appendix  

Research Plan:  [Research Plan- Discovery Research on Claim Lifecycle for Accredited Representatives.docx](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20%26%20Artifacts/Research%20Plan-%20Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx?d=wddf1bd39085a451c98bb0023b8dc4709&csf=1&web=1&e=WGMKsQ)

Conversation Guide:  [Conversation Guide for Discovery Research on Claim Lifecycle for Accredited Representatives.docx](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle/Research%20Report%20%26%20Artifacts/Conversation%20Guide%20for%20Discovery%20Research%20on%20Claim%20Lifecycle%20for%20Accredited%20Representatives.docx?d=w4e5d6b92442e445fbe9c960bfa513459&csf=1&web=1&e=Mtizje)

Link to SharePoint Folder:  [2025-12 Discovery Research with Accredited Reps on Claim Lifecycle](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-12%20Discovery%20Research%20with%20Accredited%20Reps%20on%20Claim%20Lifecycle?csf=1&web=1&e=0Wpm2P)

