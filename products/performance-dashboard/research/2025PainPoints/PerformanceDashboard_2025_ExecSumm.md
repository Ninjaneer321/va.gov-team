# **Performance Dashboard — 2025 Executive Summary**

**Full analysis:** [PerformanceDashboard_2025_CombinedSourcesFindings.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/3ad2e366378f847ded6c7d0f9527090c4eac3104/products/performance-dashboard/research/2025PainPoints/PerformanceDashboard_2025_CombinedSourcesFindings.md)

---

## **Satisfaction & Success**

* **CSAT:** Not available — no survey responses collected (GA4-only dataset)
* **Task success (self-reported):** Not measured — no Medallia data in scope
* **Data sources:** Google Analytics 4 (Jan–Dec 2025)

---

## **Top 5 Pain Points (Why People Fail)**

**1. Dashboard → Authentication Friction**

What's happening: 19% of dashboard sessions immediately redirect to sign-in flows with no clear value proposition for unauthenticated users.  
Impact: Unauthenticated visitors leave without engaging; authenticated users (LOA3) stay 12 seconds longer, indicating gatekeeping blocks self-service access.  
Fix: Create a public-facing summary section with system-level KPIs above the fold, and add dual CTAs for both "Explore Public Data" and "Sign In for Personalized Insights."

**2. Shallow Content Exploration**

What's happening: Only 439 clicks on outbound links across 60,468 page views (0.73% click-through rate); users spend 40–50 seconds scanning, not exploring.  
Impact: Deep-dive resources remain undiscovered; users leave without acting on insights.  
Fix: Redesign cards with inline "Learn More" links, increase visual contrast, and add a sticky "Resources" sidebar with contextual links based on viewed charts.

**3. Monthly Engagement Volatility & Onboarding Gap**

What's happening: Engagement rate fluctuates 86–93% month-to-month; new users surge 170–363/month with no structured welcome flow.  
Impact: Inconsistent experience complicates trend analysis; high new-user surges are missed activation opportunities.  
Fix: Add a dismissible "What's new" banner (1× per month) and a 2-step lightweight onboarding tutorial for first-time visitors.

**4. No Root Cause Visibility**

What's happening: GA4 shows *where* users drop off (19% to auth, 1% to links) but not *why* they make those choices.  
Impact: Teams cannot distinguish between users blocked by authentication, users who found what they need, and users who cannot find resources.  
Fix: Deploy 1-question exit micro-surveys at sign-in click and page exit to capture intent ("What were you looking for?").

**5. Missing Segment Diagnostics**

What's happening: No breakdown of behavior by authentication level (LOA1 vs. LOA3), device, or traffic source.  
Impact: Mobile-specific friction or campaign-driven volatility may be masked in aggregate metrics.  
Fix: Segment GA4 data retrospectively by LOA level and add forward-tracking by device and traffic source to isolate friction points.

---

**Report prepared:** 2026-04-21  
**Data period:** Jan 1–Dec 31, 2025
