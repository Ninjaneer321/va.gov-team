
# Initiative Brief: Medical Records Mobile Strategy

#### Overview
This initiative aims to establish a comprehensive mobile strategy for Medical Records on the VA Health and Benefits (VAHB) app, building upon the existing Allergies, Vaccines, and Labs & Tests features to achieve feature parity with the VA.gov web experience and improve mobile access to health information for Veterans.

---

## Outcome Summary
Increase mobile adoption and user satisfaction by closing the gap between web and mobile Medical Records experiences, enabling Veterans to access their complete health information seamlessly across all platforms.

**Related/Associated product(s)**
- Medical Records on MHV on VA.gov | [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md)
- VA Health and Benefits (VAHB) Mobile App | [UX Strategy Doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/design/VAHB-app-strategy.md)

## Problem
**What is the problem and who is affected?**

Veterans who use the VAHB mobile app currently have access to only three Medical Records domains (Labs and test results, Allergies, Vaccines), while the VA.gov web experience offers six domains (adding Vitals, Care summaries and notes, and Health conditions). This feature gap forces Veterans to:
- Switch between mobile app and web browser to access their complete health information
- Experience inconsistent user experiences across platforms
- Face barriers to managing their health while on-the-go

**Evidence of the problem:**
- Based on the [UX Strategy document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/design/VAHB-app-strategy.md), there are missing domains (Vitals, Care summaries and notes, Health conditions) from the mobile experience
- Labs and test results are the most popular domain Veterans access (per quarterly metrics)
- Medical imaging results currently require external links, creating friction in the mobile experience

**Why is this occurring?**
- Mobile development has been phased, focusing on highest-value domains first
- Technical constraints around complex content types (e.g., medical imaging with large zip files)
- Strategic decisions needed around implementation modalities (Native vs. WebView vs. SSO)

**How does this help OCTO-DE's mission?**
This initiative directly supports OCTO objectives:
1. Veterans can manage their health services online (across all devices)
2. Veterans have a personalized experience with relevant and time-saving features
3. Veterans find a single, authoritative source of information (regardless of platform)

---

## Desired User Outcomes
- Veterans can access their complete medical records from their mobile device without switching to a web browser
- Veterans experience consistent, intuitive navigation across mobile and web platforms
- Veterans can quickly reference critical health information (allergies, vitals, care notes) during appointments or emergencies
- Veterans trust the mobile app as a comprehensive source for their health information

## Undesired User Outcomes
- Veterans feel the mobile experience is confusing or inconsistent with web
- Veterans encounter technical barriers (crashes, slow loading, authentication issues)
- Veterans abandon the mobile app due to missing features

## Desired Business Outcomes
- Increased mobile adoption and engagement metrics
- Reduced support calls related to mobile medical records access
- Improved user satisfaction scores for the VAHB app
- Demonstrated value of the VAHB app to stakeholders, supporting continued investment

## Undesired Business Outcomes
- Increased development costs without corresponding user value
- Technical debt from hasty implementation decisions
- Stakeholder confusion about mobile vs. web strategy

---

## Measuring Success

### Key Performance Indicators (KPIs)

| Category | KPI | Baseline | Target | Link to data source |
|----------|-----|----------|--------|---------------------|
| **Adoption** | % of Medical Records users accessing via mobile app | TBD | 40% | Analytics dashboard (TBD) |
| **Engagement** | Average sessions per user (mobile) | TBD | +25% increase | Analytics dashboard (TBD) |
| **Satisfaction** | CSAT scores - mobile Medical Records | TBD | ≥ 4.0/5.0 | Medallia |
| **Completion** | % users successfully viewing all domain types | TBD | 85% | Analytics dashboard (TBD) |
| **Trust** | % users who access Medical Records on mobile at least weekly | TBD | 30% | Analytics dashboard (TBD) |

**Balancing Metrics:**
- App crash rate (should remain < 1%)
- Average page load time (should remain < 3 seconds)
- Authentication failure rate (should remain < 2%)

---

## Discovery

### Assumptions/Risks

**Value Risks** (will people use it):
- **Assumption:** Veterans want to access Care summaries and notes, Vitals, and Health conditions on mobile
- **Validation:** Analyze web usage data for these domains; conduct user research on mobile preferences
- **Risk Level:** LOW - Web analytics show these are used features; mobile convenience is well-documented

**Usability Risks** (can people figure out how to use it):
- **Assumption:** Native implementation will provide the best user experience for all content types
- **Validation:** Prototype and test different modalities (Native vs. WebView) for complex content
- **Risk Level:** MEDIUM - Medical imaging and complex notes may require WebView; need to ensure seamless experience

**Technical Feasibility Risks**:
- **Assumption:** APIs can support all medical record domains with acceptable performance on mobile
- **Validation:** Technical discovery with API team; load testing
- **Risk Level:** MEDIUM - Medical imaging with large files may require special handling
- **Known Constraints:**
  - Blue Button and CCD will NOT be included in mobile app (per UX strategy)
  - Medical imaging files (large zip files) cannot be downloaded natively and may require WebView

**Organizational Viability Risks**:
- **Assumption:** Development resources are available to build remaining domains
- **Validation:** Confirm with mobile team capacity and roadmap
- **Risk Level:** LOW - This is a strategic priority with identified stakeholders

### What We're Building

**In Scope:**
1. **Care Summaries and Notes** - Native implementation with full list and detail views
2. **Vitals** - Native implementation with trends/charts if feasible
3. **Health Conditions** - Native implementation with list and detail views
4. **Medical Imaging Results** - Improved implementation using WebView (separated from Labs and test results)
5. **Consistent UX patterns** - Align with web experience while optimizing for mobile
6. **Print/Download capabilities** - Ensure parity with web for all domains

**Future Considerations:**
- Date range, sort, and filter functionality across all domains
- Integration with appointment preparation workflows
- Notifications for new medical records
- Offline access capabilities

**Explicitly Out of Scope:**
- Blue Button (permanently excluded from mobile per strategy)
- Continuity of Care Document (CCD) (permanently excluded from mobile per strategy)
- Patient-generated health data entry (future phase)
- Wearable device integration (future phase)

#### Go-to-market 
- Coordinate with VA Health and Benefits mobile app release cycles
- Align with ongoing MHV to VA.gov migration communications
- Leverage existing Medical Records user base through in-app messaging
- Consider phased rollout by domain (similar to web implementation)

--- 

## Launch Planning

### Collaboration Cycle
- Kickoff ticket: [TBD]
- Design intent: [TBD]
- Research review: [TBD]
- Midpoint review: [TBD]
- Privacy & Security review: [TBD]
- Staging review: [TBD]

### Timeline 

**Major Milestones:**
- **Q2 2026:** Discovery and technical planning
- **Q3 2026:** Design, prototyping, and user research for priority domains
- **Q4 2026:** Development and testing - Care Summaries and Notes
- **Q1 2027:** Development and testing - Vitals and Health Conditions
- **Q2 2027:** Medical Imaging WebView implementation
- **Q3 2027:** Full feature parity achieved

**Dependencies & Constraints:**
- API availability and performance for new domains
- Mobile app release schedule
- Coordination with VA.gov web releases
- Privacy and security review timelines

#### Initiative Launch Dates
- *Target Launch Date:* Phased rollout beginning Q4 2026
- *Actual Launch Date:* TBD

---

#### Communications

**Team:**
- Team Name: Medical Records - MHV on VA.gov / VAHB Mobile
- GitHub Label: medical-records, vahb-mobile
- Slack channel: #mhv-medical-records
- Product POCs: Marci McGuire

**Key Contacts:**
- Product Owner: Tracey Mulrooney
- Product Manager: Marci McGuire
- Design Lead: Jonathan Nelson
- MHV Records Section: Bresha Lipscomb, Carnetta Scruggs

#### Stakeholders

**Critical offices/departments:**
- Office/Department: OCTO, Office of Connected Care (OCC)
- OCC Leadership: Theresa Hancock, Nancy Wilck
- OCC Senior Advisor: Dr. Neil Evans
- OCTO Health Crew Lead: Lauren Alexanderson
- OCTO Leadership: Charles Worthington, Chris Johnston
- Mobile App Team: [TBD - coordinate with Ashley Matthews, Alex Taylor per docs]
- MHV Engineering: Barry Egbert
- API Team: Dave Mazik, Patrick Vinograd

---

## Screenshots & Documentation

### Current State
- **Mobile:** Allergies, Vaccines, Labs & Tests available natively
- **Web:** All six domains available (Allergies, Vaccines, Labs & Tests, Vitals, Care Summaries and Notes, Health Conditions)

### Supporting Documentation
- [UX Strategy for VAHB App and VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/design/VAHB-app-strategy.md)
- [Vision and Challenges Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/3-vision-and-challenges.md)
- [Previous Usability Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research)

---

<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)  
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
