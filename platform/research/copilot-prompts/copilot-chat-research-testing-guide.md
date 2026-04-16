# Copilot Chat Research System: Testing Guide

Thank you for testing the new Copilot research discovery system!

## What You're Testing

A three-tier system for finding and analyzing research:
1. **Quick lookups** - Find research metadata in seconds
2. **Thematic browsing** - Browse findings by theme/product
3. **Deep analysis** - Comprehensive synthesis with quotes

## Setup (5 minutes)

### Step 1: Navigate to the repository

Go to: https://github.com/department-of-veterans-affairs/va.gov-team

Make sure you're on the main repository page (you should see folders like `products/`, `teams/`, `platform/`)

### Step 2: Open GitHub Copilot Chat

1. **Find the Copilot icon:**
   - Look at the **top of the page**, to the **right of the search box**
   - You'll see a **small icon that looks like a face wearing pilot goggles** 🥽
   
2. **Click the Copilot icon:**
   - This opens Copilot in a new immersive view (full-screen chat interface)

### Step 3: Attach the va.gov-team repository

When Copilot opens, the repository may not be attached yet. Here's how to attach it:

1. **Look for the "All Repositories" button** near the top of the page
2. **Click "All Repositories"**
3. **Search for:** `va.gov-team`
4. **Click on "department-of-veterans-affairs/va.gov-team"** to attach it
5. You should now see the repository name displayed (confirms it's attached)

**Visual guide:**
```
Top of GitHub page:
┌────────────────────────────────────────────────┐
│ [Search box 🔍]  [🥽 Copilot icon] ← Click here│
└────────────────────────────────────────────────┘

After clicking, you're in Copilot immersive view:
┌────────────────────────────────────────────────┐
│ [All Repositories ▼] ← Click here              │
│                                                 │
│ Search: va.gov-team                             │
│ → department-of-veterans-affairs/va.gov-team ✓  │
└────────────────────────────────────────────────┘
```

### Step 4: Understand Ask vs Agent mode

At the top of Copilot chat, you'll see two modes:

**Ask mode (default):**
- Quick questions and answers
- Uses summary files and search
- Fast responses (seconds)
- ✅ **Use this for Tests 1 & 2** (Quick lookup, Thematic browse)

**Agent mode:**
- Deep research and analysis
- Comprehensive synthesis with quotes
- Takes 2-4 minutes
- ✅ **Use this for Test 3** (Deep analysis)

**How to switch modes:**
- Look for the mode selector at the top: **Ask** | **Agent**
- Click the mode you want to use

### Step 5: You're ready to test!

Type your first query in the chat box and press Enter.

**Troubleshooting:**
- **Can't find the Copilot icon?** Make sure you have GitHub Copilot access enabled
- **Repository won't attach?** Try refreshing the page and searching for "va.gov-team" again
- **Still having issues?** DM @sstrassberg for help

---

## Test Scenarios (20 minutes)

### Scenario 1: Quick Lookup (5 minutes)

**Mode:** Use **Ask** mode (default)

**Your task:** Find research for a team or product you're familiar with.

**Try these queries (or make up your own):**
```
"What research has the [team name] team conducted?"
"What research exists for [product name]?"
"How many studies exist for [product area]?"
"When was the last research on [topic]?"
```

**Take notes as you test:**
- What query did you try?
- How long did it take to respond?
- Was the response useful? (1-5 stars)
- What worked well?
- What could improve?

---

### Scenario 2: Thematic Browse (5 minutes)

**Mode:** Use **Ask** mode

**Your task:** Find research about a common theme or pattern.

**Try these queries (or make up your own):**
```
"What research exists about navigation issues?"
"Show me all evidence submission research"
"What are the top findings for [product]?"
"What themes appear most frequently in [area] research?"
```

**Take notes as you test:**
- What query did you try?
- How long did it take to respond?
- Was the response useful? (1-5 stars)
- What worked well?
- What could improve?

---

### Scenario 3: Deep Analysis (10 minutes)

**Mode:** Switch to **Agent** mode

**Your task:** Get comprehensive analysis for research planning or stakeholder briefing.

**Try these queries (or make up your own):**
```
"What pain points did we discover in [product] research?"
"What do we know about [topic] from research with quotes and implementation status?"
"What accessibility issues appear across products?"
"I'm planning research on [topic]. What existing research should I review?"
```

**Watch for:** Copilot should mention it will take 2-3 minutes before starting the analysis.

**Take notes as you test:**
- What query did you try?
- How long did it take to respond?
- Did Copilot warn you it would take 2-3 minutes?
- Was the response useful? (1-5 stars)
- What worked well?
- What could improve?

---

## Submit Feedback (5 minutes)

**When you're done testing, submit your feedback:**

### 👉 [Click here to create feedback issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=copilot-chat-research-feedback.md)

The template has all the fields - just fill in your experiences!

---

## Need Help?

- **Questions during testing?** Post in #research-ops or DM @sstrassberg
- **Technical issues?** DM @sstrassberg
- **Can't submit feedback?** DM @sstrassberg

Thank you! Your feedback will help make this system better for the whole research community. 🙏
