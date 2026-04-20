# Adding an LFS-Tracked File via Pull Request

PRs are the right workflow for a shared repo. Here's the flow:

## 1. Clone the repo and set up Git LFS (skip if done)

```bash
brew install git-lfs
git lfs install
git clone https://github.com/department-of-veterans-affairs/va.gov-team.git
cd va.gov-team
```

## 2. Create a new branch

```bash
git checkout -b <your-branch-name>
```

Name it something descriptive — that's just a placeholder.

## 3. Copy your file into the right folder

```bash
cp ~/path/to/<your-file> products/claim-appeal-status/product-guides/
```

## 4. Commit and push the branch

```bash
git add -A
git commit -m "<your commit message>"
git push -u origin <your-branch-name>
```

The `-u origin <branch-name>` sets up tracking so future pushes from this branch are just `git push`.

`git add -A` stages everything that's changed in your working tree. If you want to be more precise (e.g., you have unrelated edits you don't want to include), use `git add <path/to/file>` instead.

## 5. Open the PR on GitHub

After the push, the terminal output will include a link that looks like:

```
https://github.com/department-of-veterans-affairs/va.gov-team/pull/new/<your-branch-name>
```

Click it (or go to the repo on GitHub — it'll show a yellow banner offering to open a PR from your new branch). Fill in the title and description, then submit.
