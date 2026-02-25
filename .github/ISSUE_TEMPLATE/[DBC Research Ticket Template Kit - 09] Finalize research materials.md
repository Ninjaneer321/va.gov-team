---
name: "DBC Research Ticket Template Kit - 09: Finalize research materials"
about: To guide the finalization of the research plan, conversation guide, prototype, or other materials for the study. 
labels: "disability-benenfits,research" 
assignees: ''

---

> [!NOTE] 
> If you have any recommended changes to this ticket template, contact a DBC designer. Otherwise, remove this notice when creating your ticket.

### Description
This ticket covers final updates to the research plan, conversation guide, prototype, or other materials for the [study name] study. The study focuses on [brief description of study]. 

The goal is to have everything ready to submit a Research Ops ticket, which is necessary for any Veteran-facing studies. Moving your documents into GitHub can involve several steps, outlined below. Review the Further Information section for more guidance.

#### Timeframe for this ticket
This ticket should take well under a single sprint.

#### Output
[Add links when they're ready. Note status (in progress/final).]

### Tasks
- [ ] Conduct a detailed click-through review of prototype and fix any problems
- [ ] Create a shareable link to the prototype (review Further Information below)
- [ ] Transfer the research plan, conversation guide, and other docs (e.g. Research Approach) into GitHub. (For Google Doc transfer, review Further Instructions below)
   - [ ] Add notes to the top of the collaborative draft versions that they have been moved into GitHub and are now obsolete.
   - [ ] Make sure to list the approver (typically our UX enablement partner) and approval date at the bottom of the research plan in GitHub
- [ ] Complete the table holding “front matter” in the research plan and conversation guide.
   - [ ] You can use a Copilot prompt to have Copilot fill in the front matter. HOWEVER, you’ll likely need to correct some of this. (review Further Information below)
   - [ ] Select labels for the project ([instructions/label list](https://depo-platform-documentation.scrollhelp.site/research-design/adding-labels-in-the-research-repository)). These will go in the front matter and, later, in the research ops ticket.

### Acceptance criteria
- [ ] Prototype complete and tested against final conversation guide
- [ ] Conversation guide complete and moved into GitHub
- [ ] Research plan complete and moved into GitHub

### Further information
**Creating a shareable link to the Figma prototype**
- Open the **Share** modal via clicking ‘Share Prototype’ while in Presentation view (accessed via the play button in the upper-right corner of Figma when viewing a page)
- Modify file sharing permissions by clicking the first line item under ‘Who has access’ within the modal. You can set file sharing permissions to:
   - **Anyone:** Anyone, even those outside your organization, will be able to access this file. This is the option you’ll want to select prior to beginning your research sessions, as your participants are likely outside of the VA organization.
   - **VA.gov Platform:** Anyone with access to the VA.gov Platform Figma instance will be able to access this file.
   - **Only invited people:** Only those directly invited to the file can access it. 

**Moving Google docs into GitHub**

Two routes of action: 
- If the report is a Google doc, you have the option to ‘Copy as Markdown’ and paste the report into a new GitHub file. 
   1. In your GitHub research folder, click Add file > Create new file.
   2. Name the file according to naming conventions (e.g. “Research Plan”) and ensure the file name ends with ‘.md’ (Markdown file designation).
   3. Select all text in your Google doc and select ‘Copy as Markdown’ from the Edit dropdown. If this option is grayed out, go to Tools > Preferences > Enable Markdown.
   4. Paste your copied content into the empty page within your GitHub file.
   5. **NOTE:** ‘Copy as Markdown’ is not infallible, and leaves some manual cleanup to ensure formatting is correct. An online translator like [gdoc2md](https://gdoc2md.com/) might be a better option.
- Alternatively, follow steps 1-2 above, and copy/paste the text as-is into the new GitHub file. Familiarize yourself with basic [Markdown syntax](https://www.markdownguide.org/basic-syntax/), and format the text accordingly.

**Image formatting**

If adding images to your report (you should!), there are a few formatting tips:
- To actually get an image into your GitHub file, the easiest way is to drag/drop it into the editable file. GitHub will automatically embed the image and generate an <img> tag.
- To proportionally resize images, use [an online tool](https://scriptygoddess.com/resources/proportioncalc.htm).
- To add a border to the image, place it into a [table](https://www.markdownguide.org/extended-syntax/#tables).

**Adding front matter to the GitHub docs**

There are multiple ways to add front matter to your GitHub doc. Regardless of which approach you use, do a careful review of what Copilot generates, as you’ll likely need to correct a few details.
- You can start a Copilot chat, attach your research plan or conversation guide, and ask Copilot to generate content for the front matter section.
   - Sample prompt: “Review this file and use Natural Language Processing to fill-in the front matter section.”
   - You will receive copy/pastable code you can then insert yourself into your plan. 
- Alternatively, you can start a Copilot chat, attach your research plan or conversation guide, and ask Copilot to complete the front matter itself.
   - Sample prompt: “Review this file and use Natural Language Processing to directly modify and fill-in the front matter section.”
   - This approach will result in the metadata being directly edited in the file, and a Pull Request will be generated that you can review and merge into the master branch.

### Resources
- [List of related files/ReadMe]


