# How to Preview Your Team's Changes on a Live Test Site

**What this does:** Review instances let you see changes on a real, working version of VA.gov — before those changes go live. Think of it as a private preview link that only your team can access.

---

## Step 1: Request the Preview Build

1. Go to the [Review Instance Deploy page](http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/) (you must be on the VA network — CAG, AVD, or GFE).
2. Click **"Build with Parameters."**
3. You'll see two fields:
   - **`web_branch`** — the name of the branch with frontend changes. If there are no frontend changes, type `main`.
   - **`api_branch`** — the name of the branch with backend changes. If there are no backend changes, type `master`.
4. Click **Build** and wait for it to finish. The build takes several minutes.

> **Where do I get the branch name?** Ask your developer, or find it in the pull request — it's usually shown near the top of the PR page on GitHub, right after the words "wants to merge."

### Screenshot of the "Preview Build Setup Page"
![Jenkins "Pipeline Vets.gov Review Application Deploy" page showing five form fields: devops_branch set to master, api_branch set to master, web_branch set to main, content_branch set to main, and a source_repo dropdown left blank. A blue Build button is at the bottom.](image.png)
---

## Step 2: Open the Preview
Once the build completes, access the preview instance in 2 ways:

1. Click on the "https://long-identifier.vfs.va.gov" link in the top-most item of the "Build History" sidebar
![Jenkins page showing the Build History sidebar with a successful build. The review instance URL is highlighted with a red box beneath the build timestamp, showing a clickable link to the deployed preview site.](image-3.png)
2. Follow the instructions at [How Do I Connect to My Deployed Instance?](https://depo-platform-documentation.scrollhelp.site/developer-docs/review-instances#How-do-I-connect-to-my-deployed-instance%3F) to get the link to your preview site.

---

## Good to Know

- **The preview disappears automatically** after 7 days, or when the branch is deleted — you don't need to clean anything up.
- **If the site shows a "502" error**, the build is still in progress. Give it a few more minutes and refresh.
- **You can only reach review instances while on the VA network.** If you're remote, make sure you're connected through CAG or AVD first.
- **Need help?** Reach out to the Platform Support Team in Slack, or see the [full technical documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-review-instances-to-preview-changes) for more details.
