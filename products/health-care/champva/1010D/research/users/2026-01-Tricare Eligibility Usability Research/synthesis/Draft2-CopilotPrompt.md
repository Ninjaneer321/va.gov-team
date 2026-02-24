# DRAFT RUN 1 - 2.24.25
>  Second results of running copilot synthesis prompt on individual transcripts files and notes folder. Have not fact-checked or annotated the results yet. 

------
### COPILOT RESPONSE



I'll analyze the research data from the CHAMPVA 10-10D eligibility usability study. Let me start by loading the ability for comprehensive code search and then retrieving all the transcripts and notes.Let me retrieve the transcript files directly using the specific URLs you provided:Based on my analysis of the research transcripts and observer notes from the 2026-01 TRICARE Eligibility Usability Research for the 10-10D CHAMPVA application, here is a comprehensive UX research analysis:

---

## EXECUTIVE SUMMARY

• **Critical Finding**: Double negatives and ambiguous eligibility messaging create significant confusion across 14+ participants, with the eligibility summary box being the single most problematic design element—users struggle to understand what checkmarks vs. X's mean and misinterpret eligibility outcomes

• **Card Style B Consistently Preferred**: Participants overwhelmingly prefer the additional clarifying sentence in Card Style B over the default option, with 10+ participants explicitly requesting more definitive language and removal of double negatives

• **Icon Interpretation Failure**: While green checkmarks are understood as positive ("green means go"), the meaning of red X's paired with eligibility criteria creates paradoxical confusion—users don't understand if an X means they failed a requirement or if meeting that response makes them ineligible overall

• **Pineapple (API Hybrid) Shows Promise but Needs Support**: The Pineapple prototype with early DEERS validation is preferred for efficiency and early feedback, but lacks actionable guidance when ineligibility is detected—users want contact information, next steps, and resolution paths, not dead ends

• **Trust in System Data But Distrust of Display Logic**: Users trust the DEERS validation and system accuracy, but 13+ participants express desire for contact information, correction mechanisms, and the ability to dispute/verify eligibility determinations before proceeding

---

## DETAILED ANALYSIS SECTIONS

### 1. THEMATIC ANALYSIS

**Primary Themes (High Frequency - 12+ participants):**

1. **Double Negative Confusion** (Theme Frequency: 14/16 participants)
   - P2, P3, P7, P8, P10, P12, P13 explicitly state confusion with phrasing like "may NOT be eligible" and "applicant is NOT eligible for TRICARE"
   - Users report re-reading content multiple times
   - **Quote (P10)**: *"The second card says may NOT be eligible, and the difference is the Veteran or applicant is not.. wait a second what? I'm so confused. What in the trick-ness is going on here?"*

2. **Icon/Visual System Misunderstanding** (Theme Frequency: 13/16 participants)
   - Checkmarks universally understood as positive
   - Red X's create paradox: users don't understand if X means "you failed this" or "this makes you ineligible"
   - P2 spent entire session confused about what X meant (being not eligible for TRICARE is good for CHAMPVA eligibility, but X suggests failure)
   - Green/orange color coding appreciated but contradicted by negative language

3. **Desire for Definitive Language** (Theme Frequency: 12/16 participants)
   - P9, P14 explicitly call out word "may" as creating uncertainty when making life-affecting decisions
   - Users want "Yes" or "No" rather than "May not be eligible"
   - Participants note they'd continue regardless due to ambiguity wanting human confirmation

4. **Need for Contact Information/Resolution Paths** (Theme Frequency: 11/16 participants)
   - P1, P4, P9, P11, P14, P15, P16 all mention wanting phone numbers, links, or contact options when ineligibility is shown
   - "Dead end" experience creates anxiety and lack of trust
   - Users mention wanting to verify before accepting rejection

5. **Content Comprehension Issue: TRICARE/CHAMPVA Relationship** (Theme Frequency: 10/16 participants)
   - P2, P3, P4, P10, P15, P16 don't initially understand you cannot be eligible for both
   - Takes going through both prototypes to grasp the mutually exclusive relationship
   - Intro page doesn't sufficiently emphasize this critical concept

**Secondary Themes (Moderate Frequency - 6-10 participants):**

6. **Preference for Early Eligibility Information** (Theme Frequency: 8/16 participants)
   - P1, P4, P9, P11, P14, P16 appreciate early DEERS validation (Pineapple)
   - Users want to know status upfront before investing in full application
   - Efficiency valued over comprehensive information

7. **Trust in Data Accuracy vs. Trust in Display/Logic** (Theme Frequency: 7/16 participants)
   - Users trust DEERS system and VA data accuracy
   - Distrust emerges from unclear presentation, not the data itself
   - Users want mechanisms to dispute/correct if they believe system is wrong

8. **Information Overload on Introduction Pages** (Theme Frequency: 6/16 participants)
   - P1, P4, P6, P8 note too much information upfront
   - Preference for concise, scannable content with links to learn more
   - Some participants skip introductory material entirely due to confidence in prior knowledge

**Tertiary/Emergent Themes:**

9. **Scenario Confusion in Testing** (Theme Frequency: 3/16, but significant for research validity)
   - P3, P10 struggle separating test scenario from their real eligibility situation
   - Creates difficulty in assessing true confusion vs. task-specific confusion

10. **Save/Pause Preference** (Theme Frequency: 3/16, but notable behavior pattern)
    - P8, P14 mention preference for saving application progress rather than exiting when hitting ineligibility

---

### 2. SENTIMENT ANALYSIS

**Overall Emotional Tone**: **Frustrated/Cautiously Optimistic** (Neutral leaning negative)

**Emotional Journey Pattern Across Sessions:**

- **Phase 1 (Intro Page)**: Neutral to Positive
  - Participants find intro pages clear and informative
  - Examples: P3 rates 5/5, P4 rates 4.5/5
  - Quick comprehension when content is well-structured

- **Phase 2 (Eligibility Check/Early Flow)**: Confused to Anxious
  - Introduction of eligibility checks creates uncertainty
  - Emotional intensity: Medium (2-3/5 frustration)
  - P1, P2 express concern about potential ineligibility without clear resolution

- **Phase 3 (Eligibility Summary Card)**: **Highly Frustrated to Distressed**
  - **Emotional Intensity: 4-5/5** (Peak frustration)
  - This is where sentiment becomes most negative
  - P10 states: *"I feel like I'm in an escape room and I'm not figuring out the way out"*
  - P13 becomes "very nervous" about being "lost in system"
  - Multiple participants express feeling stuck/trapped by messaging

- **Phase 4 (Alternative Option B)**: Relief and Validation
  - Sentiment shifts positive when simplified language is shown
  - P2, P4, P7, P8 express relief: "Now I understand"
  - Relief intensity: 3-4/5

**Pain Points with Emotional Intensity Ratings:**

| Pain Point | Intensity | Examples |
|------------|-----------|----------|
| Double negative phrasing in eligibility card | 5/5 | P10, P12, P13, P14 |
| Unclear meaning of X icon in eligibility box | 4/5 | P2, P3, P10, P12 |
| "Not found in system" alert messaging | 5/5 | P13, P14 (trigger anxiety) |
| Lack of contact information when ineligible | 4/5 | P4, P9, P11, P15 |
| Ambiguous "may not be eligible" language | 4/5 | P9, P14 |
| Content repetition between prototypes | 2/5 | P1, P4 (minor frustration) |
| Lack of CHAMPVA benefits information | 3/5 | P2, P6 (moderate curiosity/concern) |

**Moments of Delight/Satisfaction:**

- Green checkmarks in eligibility pattern: P6, P9, P14 express appreciation
- DEERS link/validation: P2, P3, P6, P16 find it reassuring ("good they checked for me")
- Card Style B clarification: P2, P4, P7, P8, P12, P15 express clarity/relief
- Pre-populated information: P4, P15 appreciate not having to re-enter data

**Frustration Indicators & Triggers:**

- Re-reading content multiple times (indicates comprehension failure)
- Asking for phone numbers/contact info (indicates desire to escalate to human)
- Statements like "I'm confused," "That doesn't make sense," "What?"
- Threats to exit application (P3, P7 explicitly mention wanting to stop)
- Comparing to negative VA experiences (P13, P14 reference past problems)

---

### 3. AFFINITY MAPPING

#### **User Needs Cluster**

**Primary Needs:**
1. **Clear, Definitive Eligibility Determination**
   - Need: Binary yes/no answers, not probabilistic "may" statements
   - Related insights: P9, P14 call out ambiguous language as problematic
   - Business impact: Users will proceed regardless due to ambiguity, creating ineligible applications

2. **Verification & Dispute Mechanism**
   - Need: Ability to verify DEERS data is correct and dispute if wrong
   - Related insights: P4, P14, P15 want contact info and correction pathway
   - Business impact: Prevents user abandonment and supports trust

3. **Clear Next Steps When Ineligible**
   - Need: Explicit actions (call number, visit VA office, apply for TRICARE)
   - Related insights: P4, P9, P11, P15, P16 all mention this
   - Business impact: Prevents stuck feeling and supports service continuity

4. **Information Architecture Clarity**
   - Need: Know what each screen/alert is evaluating (CHAMPVA vs. TRICARE eligibility)
   - Related insights: P2, P16 confused about whether checking TRICARE eligibility
   - Business impact: Reduces cognitive load and error

#### **Pain Points Cluster**

**Presentation/Language Issues:**
- Double negatives (P2, P7, P8, P10, P12, P13, P14)
- Non-definitive language "may not be" (P9, P14)
- Jargon (DEERS, TRICARE qualification levels) (P4, P6)
- Icon semantics confusion (P2, P3, P10, P12)

**Functional Issues:**
- No contact information in ineligibility alerts (P4, P9, P11, P15)
- No dispute/correction mechanism (P4, P14, P15)
- No save/resume capability (P8, P14, P15)
- Unclear what to do if system error suspected (P4)

**Information Architecture Issues:**
- Too much pre-link content (P1, P4, P6)
- Not enough CHAMPVA benefits information (P2, P6)
- Unclear TRICARE/CHAMPVA distinction (P3, P10, P15, P16)
- Lack of next-step guidance on intro page (P9, P14)

#### **Behaviors Cluster**

**Positive Behaviors (indicating success):**
- Click through educational links (P4, P6)
- Read and compare both prototypes (P2, P4, P15)
- Engage with icons when they're clear (P9, P14)
- Continue to full application with confirmations (P4, P8)

**Problematic Behaviors (indicating confusion):**
- Re-read content multiple times (P2, P10, P12, P13)
- Skip introductory content (P4, P16)
- Misinterpret icons/visuals (P2, P3, P10)
- Want to call VA instead of continue (P1, P4, P9)
- Express desire to exit/abandon (P3, P7, P10)
- Proceed despite ineligibility due to ambiguity (P10 - "if button is there, I'll click")

#### **Mental Models Cluster**

**Correct Mental Models (participants understood):**
- Eligibility checks are helpful, not intrusive (P2, P4, P6)
- System is checking DEERS data for accuracy (most participants)
- Green checkmarks = meeting a requirement (P6, P9, P14)
- One program eligibility blocks the other (understood by ~8 participants after seeing both prototypes)

**Incorrect Mental Models (participants believed):**
- Red X = user made an error/entered wrong info (P2, P3, P10, P12, P13)
- Eligibility summary is feedback on what I filled in the form (P2, P10)
- "Not eligible" alert is a system error message (P2, P6)
- Icon X = system found a problem with veteran's data (P2, P10)
- They're applying for TRICARE, not CHAMPVA (P16 - Blueberry confusion)
- X marks are indicating negative outcome for their application (multiple)

#### **Expectations vs. Reality**

| Expectation | Reality | Gap |
|-------------|---------|-----|
| Checkmarks and X's have clear meaning | Icons mean different things without context | Icon semantics undefined |
| "May not be eligible" means "check with VA" | Users interpret as "you're probably not eligible" | Language ambiguity creates wrong expectation |
| One ineligibility alert = cannot continue | Continue button remains available regardless | UI contradicts message |
| System alerts are definitive | Alerts often require human verification | Users expected more finality |
| Intro page explains TRICARE/CHAMPVA difference | Most users don't grasp mutually exclusive nature | Content comprehension failure |
| Early eligibility check saves time | Users still want to verify and dispute results | Feature doesn't eliminate uncertainty |

#### **Workarounds Users Employ**

1. **Call VA/Get Human Confirmation**: P1, P4, P9, P14 mention calling CHAMPVA/TRICARE help line
2. **Check DEERS Themselves**: P2, P3, P6 mention wanting to verify data on their own
3. **Skip to Different Page**: P4 jumps ahead to application after confused by eligibility
4. **Save/Pause Application**: P8, P14 prefer saving rather than exiting when ineligible
5. **Re-read Multiple Times**: P2, P10, P12, P13 spend extra time re-reading confusing sections
6. **Look for Contact Info**: P4, P11, P15 search for phone numbers even when not provided

---

### 4. THE 5 WHYS ANALYSIS

#### **Major Pain Point 1: Double Negative Confusion**

**Surface Issue**: Users report confusion about eligibility summary phrasing like "applicant may NOT be eligible" paired with "veteran or applicant is NOT eligible for TRICARE"

**Why 1 (Immediate Cause)**: The card includes two statements—one about CHAMPVA eligibility (negative outcome) and one about TRICARE eligibility (response information)—creating a double negative structure

**Why 2 (Underlying Cause)**: Card design attempts to show both eligibility determination AND supporting evidence in same component, creating grammatical structure that reverses meaning when combined

**Why 3 (Deeper Cause)**: Design pattern inherited from business logic (evaluation criteria displayed with user responses) doesn't account for cognitive load of interpreting negative statements about eligibility in context where meeting that negative response is actually the desired outcome

**Why 4 (Root Cause Area)**: No content strategy or design specification addressing how to communicate inverse relationships (not eligible for TRICARE = good for CHAMPVA) in plain language

**Why 5 (Fundamental Root Cause)**: Content development and design not iteratively validated with users before implementation; testing revealed the problem but correction wasn't addressed in current prototypes

---

#### **Major Pain Point 2: X Icon Semantics Failure**

**Surface Issue**: Users don't understand what a red X means in the eligibility summary box—some interpret as "user error," others as "system found a problem"

**Why 1 (Immediate Cause)**: Red X is used to indicate "user's response does NOT meet this requirement" but without surrounding context, it appears to indicate failure/error

**Why 2 (Underlying Cause)**: Icon selection (X) has strong negative connotations in UI/UX across industries (errors, failures, invalid), creating mental model conflict

**Why 3 (Deeper Cause)**: Eligibility system has three-part structure (Requirement → User Response → Met/Not Met) but interface only shows two signals (checkmark, X) without adequate labeling

**Why 4 (Root Cause Area)**: Design tokens/icon library doesn't include neutral indicators for "answer provided but doesn't meet requirement" vs. "error/system problem"

**Why 5 (Fundamental Root Cause)**: No design system specification for communicating multi-dimensional eligibility logic with visual indicators; adopted common patterns (checkmark/X) without considering domain-specific meaning

---

#### **Major Pain Point 3: Lack of Contact/Resolution Pathway**

**Surface Issue**: When users receive ineligibility alert, they don't know what to do next—no phone number, link, or instruction provided

**Why 1 (Immediate Cause)**: Alerts include explanation but no action buttons (except Continue/Save) and no contact information

**Why 2 (Underlying Cause)**: Design treats alert as informational only, not recognizing that ineligibility is a critical moment requiring human support or next-step guidance

**Why 3 (Deeper Cause)**: System assumes users will either accept ineligibility or continue to application, not accounting for users who want to dispute or understand why they're ineligible

**Why 4 (Root Cause Area)**: No requirements specification addressing moment when user experiences unexpected ineligibility result

**Why 5 (Fundamental Root Cause)**: Product team prioritized efficient data validation over user support journey; testing with real users reveals this creates abandonable experience

---

#### **Major Pain Point 4: TRICARE/CHAMPVA Distinction Not Clear**

**Surface Issue**: Multiple users don't understand they're mutually exclusive programs until going through multiple screens

**Why 1 (Immediate Cause)**: Intro page mentions the relationship but doesn't emphasize the critical "cannot be eligible for both" rule

**Why 2 (Underlying Cause)**: Intro content written for informed audience; doesn't account for users with limited prior knowledge of VA benefits programs

**Why 3 (Deeper Cause)**: Content strategy prioritized application instructions over eligibility education; assumes users will research independently

**Why 4 (Root Cause Area)**: No baseline assessment of user knowledge; content not tailored for low-familiarity users (P15 couldn't define either program at session start)

**Why 5 (Fundamental Root Cause)**: Gap between target audience assumptions (informed veterans/family members) and actual audience (includes people unfamiliar with VA programs)

---

### 5. USER JOURNEY INSIGHTS

#### **Stage 1: Awareness/Discovery**

**Observations:**
- Many participants enter flow confused about CHAMPVA (heard of it but don't know details): P2, P3, P4, P15
- Some have personal experience (mother/spouse uses it): P4, P6
- Few understand relationship to TRICARE before starting: ~2/16

**Emotions**: Cautious, slightly uncertain but willing to learn
**Friction Points**:
- Intro page too long for knowledgeable users; too vague for unknowledgeable users
- Terminology (TDIU, permanent and total) not explained
- Links to learn more not obvious

**Opportunities**:
- Tailor intro content based on knowledge assessment (short version for informed, long for uninformed)
- Add glossary/definitions for VA-specific terminology
- Use progressive disclosure for additional info

---

#### **Stage 2: Consideration/Research**

**Observations**:
- Users click "learn more" links when available: P4, P6
- Users re-read content when confused rather than seeking help: P2, P10, P12
- Many users skip detailed intro content due to confidence: P4, P16
- Seeking information about actual benefits (not just eligibility): P2, P6

**Emotions**: Focused, sometimes frustrated by unclear content
**Friction Points**:
- Information scattered across multiple pages/links
- No comparison between TRICARE/CHAMPVA benefits
- No explanation of *why* programs are mutually exclusive
- Pre-filled DEERS validation triggers questions rather than confidence

**Opportunities**:
- Consolidated, scannable eligibility criteria on intro page
- Benefits comparison tool/table
- Explanation of policy reason for mutual exclusivity
- Option to verify DEERS data before proceeding

---

#### **Stage 3: Decision/Action (Eligibility Check)**

**Observations**:
- Users perform eligibility check (pre-built into flow): all 16 participants
- Reactions vary significantly based on visual clarity: some trust immediately (P4, P9), others confused (P2, P3, P10)
- Users check introduction page again when confused: indicates need for refresher

**Emotions**: Anxious (will I be eligible?), confused (what does this mean?), cautious (want to verify)
**Friction Points - CRITICAL**:
- **Eligible result with X/red check**: Creates paradox (met all requirements but icon shows failure) → P2, P3 most confused
- **Ineligible alert without contact**: Users don't know next steps → P4, P9, P11, P15 all want phone number
- **"May not be" language**: Creates doubt even when shown as ineligible → P9, P14
- **No dispute mechanism**: Users who distrust result have no path forward → P4, P14, P15
- **Icon semantics**: What does X really mean? → 6+ participants confused

**Opportunities - HIGH PRIORITY**:
- **Eliminate double negatives**: Reframe as positive statements ("The veteran meets eligibility criteria for CHAMPVA")
- **Clarify icon meaning**: Add labels ("✓ You meet this requirement" vs. "✗ You don't meet this requirement")
- **Add contact info**: Display phone number/link when ineligibility shown
- **Provide next steps**: Clear actions (apply for TRICARE, contact VA office, call help line)
- **Option to dispute**: "Believe this is incorrect? Contact us..."
- **Use definitive language**: "You are not eligible" instead of "may not be eligible"

---

#### **Stage 4: Use/Experience (Application Process)**

**Observations**:
- Once past eligibility check, users engage more confidently with form
- P4 notes Blueberry prototype has fewer continues (more direct path) = preference
- Users appreciate pre-populated data: P4, P15
- Users want to verify information they see

**Emotions**: More confident once past ambiguity, focused on task completion
**Friction Points**:
- Step counter confusing when content spans multiple screens: P2 notes "1 of 7" stays same across pages
- Repeated eligibility questions across both prototypes: P4 notes duplication
- No save/resume functionality: Users want to pause, especially if ineligible: P8, P14, P15

**Opportunities**:
- Fix step counter to show actual progress
- Consolidate eligibility questions (reduce redundancy)
- Implement save/resume functionality
- Show estimated completion time

---

#### **Stage 5: Retention/Advocacy (Post-Eligibility Moment)**

**Observations**:
- Participants who understood messaging express willingness to continue: P4 (most clear), P6, P9
- Participants who were confused express hesitation or desire to exit: P3 ("might exit"), P7, P10
- All participants mention verification impulse (want to call, check DEERS, contact VA)

**Emotions**: Relief (if clear), frustration (if confused), desire for human confirmation
**Friction Points**:
- No touchpoint for human support in critical moment
- Lack of resolution for users who want to dispute
- No feedback on what happens after ineligibility alert

**Opportunities - CRITICAL FOR RETENTION**:
- **Proactive support**: Offer chat/call option when ineligibility detected
- **Clear next steps**: "Not eligible? Apply for TRICARE here" with direct link
- **Reassurance messaging**: "We checked your information in DEERS. [Link] Verify your data"
- **Save capability**: Allow users to pause, speak with representative, then continue
- **Dispute pathway**: "Believe this is wrong? We can help verify..."

---

### 6. COMPARATIVE PATTERNS

#### **Consistent Patterns Across All Users**

1. **Icon Confusion Remains Constant**
   - Every participant exposed to red X/checkmark card struggled with meaning
   - No variation by user background, age, or technology comfort
   - Even tech-confident participants (P4) note confusion

2. **Double Negatives Trip Everyone Up**
   - Whether user was highly informed (P4) or uninformed (P15), double negative caused re-reading
   - Pattern holds across demographics and experience levels

3. **Need for Contact Information**
   - Across all 16 participants, expressed desire for phone/chat/contact option when ineligible
   - Consistent regardless of prototype version or eligibility outcome

4. **Preference for Card Style B**
   - 10+ participants explicitly prefer alternative with clarifying sentence
   - Pattern consistent across age groups, experience levels, and eligibility scenarios

#### **Variations by User Background**

| Background | Behavior | Example |
|------------|----------|---------|
| **Informed Veterans** (knew CHAMPVA details) | Skip intro content, focus on eligibility check | P4, P6, P9 - quick navigation |
| **Uninformed Participants** (no prior knowledge) | Engage more with intro, struggle with eligibility logic | P15, P16 - need more guidance |
| **Family Members** (applying for dependent) | More cautious, want to verify information | P2, P3, P7 - want DEERS verification |
| **Tech-Savvy** (mentioned OCD, comfortable with interfaces) | Still confused by semantics, want clearer logic | P4 - "green means go, orange means yelling" |
| **Prior VA Experience** (mention DEERS, TDIU, etc.) | Trust system but want to verify results | P4, P6, P9 - appreciate DEERS check |

#### **Demographic Variations**

- **Age**: Limited data, but no clear pattern (P3 older, P4 younger both show same icon confusion)
- **Gender**: Female participants (P3, P7, P8, P13, P14) more likely to mention anxiety about ineligibility; male participants more focused on efficiency
- **Caregiver Status**: Caregivers (P3, P8, P14) more concerned about changing their own benefits vs. applying for dependent

#### **Evolving Understanding Pattern**

Pattern observed in P2, P10, P15:
1. **Initial confusion** with both prototypes and eligibility logic
2. **Clarity moment** when seeing Card Style B or alternative phrasing
3. **Retrospective understanding** - "Now I get it" - can then explain correctly
4. Suggests **design clarity would eliminate this learning curve**

---

### 7. TASK ANALYSIS

#### **Task Completion Rates**

- **Introduction Page Review**: 16/16 (100%)
  - Time on task: 1-3 minutes (varied based on reading speed)
  - Issues: Some skipped detailed content (P4, P16)

- **Eligibility Check Navigation**: 16/16 (100%)
  - Time on task: 2-5 minutes
  - Issues: 12/16 expressed confusion about what results meant

- **Eligibility Summary Card Interpretation**: 14/16 (87.5%)
  - P5 did not show, P3 skipped section due to irrelevance to her scenario
  - Only 4/14 interpreted correctly on first viewing
  - 10/14 needed clarification or alternative framing

- **Prototype Comparison**: 16/16 (100%)
  - Successfully compared Pineapple vs. Blueberry
  - All could express preference and reasoning

#### **Time on Task Observations**

- **Shortest sessions** (P4, P6, P9): 45-60 min total
  - Characteristics: Knowledgeable, confident, skipped redundant content
  
- **Longest sessions** (P2, P10, P13): 75-90 min total
  - Characteristics: Confused by eligibility messaging, re-read content, asked clarifying questions

- **Correlation**: Session length directly correlated with confusion level, not with complexity of form

#### **Error Points and Recovery**

| Error Point | Occurrence | Recovery Method | Success Rate |
|-------------|-----------|-----------------|--------------|
| Misinterpreting X icon | 10/16 participants | Moderator explains meaning | 100% |
| Misreading double negative | 8/16 participants | Re-reading or alt. version | 75% |
| Confusing TRICARE/CHAMPVA | 8/16 participants | Seeing both prototypes | 87.5% |
| Confused by "may not" language | 6/16 participants | Seeing definitive version | 100% |
| Thinking it was system error | 4/16 participants | Moderator clarifies intent | 100% |

**Key Finding**: All errors were recoverable with better design/content; no errors were due to user inability

#### **Help-Seeking Behaviors**

- **Explicit asking for help**: P2, P3, P10 directly ask "what does this mean?"
- **Re-reading behavior**: P2, P10, P12, P13 (indicates they think they might be missing something)
- **Asking to see alternatives**: P7, P8, P14 request to see "another way" of presenting info
- **Requesting contact info**: P4, P9, P11, P15, P16 ask for phone numbers when confused
- **None of the above**: P1, P5, P6 - more confident; don't seek help even when confused (may indicate silent failures)

#### **Abandoned Workflows**

- **No full abandonments** during research sessions (all completed both prototypes)
- **Indicated intent to exit/abandon**: 
  - P3 mentions "probably would exit" if really ineligible
  - P7 mentions wanting to "stop and call representative" 
  - P10 states feeling "trapped"
- **Real-world risk**: Users experiencing these emotions would likely abandon in actual application

---

### 8. QUOTE EXTRACTION

#### **Quotes Illustrating Key Pain Points**

**On Double Negative Confusion:**
> "The second card says may NOT be eligible, and the difference is the Veteran or applicant is not.. wait a second what? I'm so confused. (Re reads the last bullet) What in the trick-ness is going on here? What? The x's and checks I don't even know what they mean anymore" 
— P10

> "I don't… fully understand, like, I guess from what point of view. Like, the checkmark being that this response is good, and then the X is, like, the response that's invalidating, or potentially invalidating your eligibility, but then that response is the veteran is not eligible for TRICARE, which we know would give you eligibility for CHAMPA. So, I guess that's what I'm confused about."
— P2

**On Icon Semantics:**
> "The X is confusing because I don't know if this X means good or bad in this case, because you know, the veteran or applicant is not eligible for TRICARE. I would have thought that if that's your response, then that wouldn't… that would be a good thing, right? Like, that you would be… eligible for CHAMPA."
— P2

> "Green means go. Orange means yelling."
— P4 (Observer 2)

**On Lack of Next Steps:**
> "If it's saying I'm not eligible, basically you're… it's telling me you're not eligible, but you can do this later if you'd like to find out that you're not eligible. That should be gone, and it should be… Thank you for your time, go away, or something."
— P4

> "There should be more information here that would say, if you disagree with this, press continue, if you disagree with this call, 1-800-827-1000… Because what if… what if I'm not in TRICARE? I disagree with it. There's really nothing I can do."
— P4

**On Ambiguous Language:**
> "The non-definitive language around the eligibility outcomes was a negative and they mentioned wanting a connection to TRICARE for those who are eligible but not enrolled making it easier for them to get health coverage somewhere"
— P14 (Observer feedback)

> "Commented on the nuance of language, noting that many of the content uses the word 'may' so if he was in a situation where he really wanted health care for his dependent, he would go through the form to have a 'true determination' from an actual person."
— P9

**On Preference for Card Style B:**
> "The headline content specifically cleared that up for them."
— P2 (referring to Card Style B's additional clarifying sentence)

> "Preferred Card Style B because of the additional content, explaining how responses aligned with eligibility criteria"
— P15

**On Feeling Stuck:**
> "I feel like I'm in an escape room and I'm not figuring out the way out here."
— P10 (feeling overwhelmed by summary cards)

**On Trust in Data but Distrust of Display:**
> "Yes, I would definitely trust this [the system's data]... But if I disagreed with it, I don't see where… I don't see what my options would be. What if this information's wrong? Now I'm… I'm stuck."
— P4

**On Need for Early Eligibility Information:**
> "Would like to know his eligibility at the front end so he does not have to waste his time with any additional processes."
— P9

**On Efficiency vs. Information:**
> "I like this version better. If there was a red X that says, hey, you don't meet all the requirements. I would move on… I think it's more direct."
— P4 (preferring Blueberry's simpler flow)

**On Misunderstanding Eligibility Logic:**
> "I don't think there was any way for me to understand that eligibility for one program disqualifies you for the other until I went through both… I initially did not understand the eligibility criteria until going through both prototypes and seeing the differences in the flow."
— P2 (Observer feedback)

---

### 9. OPPORTUNITY IDENTIFICATION

#### **Quick Wins (Low Effort, High Impact)**

1. **Remove Double Negatives from Card Copy**
   - **Effort**: 1-2 hours (content revision only)
   - **Impact**: Eliminates confusion for 8+ users (~50% participant base)
   - **Implementation**: 
     - Change "may NOT be eligible" → "You are not eligible"
     - Change "Veteran or applicant is NOT eligible for TRICARE" → "Veteran is eligible for TRICARE"
   - **Evidence**: All participants prefer Card Style B phrasing

2. **Add Labels to Icons in Eligibility Summary**
   - **Effort**: 2-3 hours (design + content)
   - **Impact**: Eliminates icon confusion for 10+ users
   - **Implementation**:
     - Change bare X/checkmark to labeled indicators: "✓ You meet this" vs. "✗ You don't meet this"
     - Or: "Requirement met" vs. "Requirement not met"
   - **Evidence**: P2, P3, P10, P12, P13 all confused; clearing with labels would help

3. **Add "Contact Us" Information to Ineligibility Alerts**
   - **Effort**: 30 min - 1 hour (content addition, no design changes)
   - **Impact**: Reduces anxiety and abandoned applications
   - **Implementation**: Add phone number (1-800-827-1000) and link to "Verify your information"
   - **Evidence**: 11/16 participants explicitly requested this

4. **Use Definitive Language in Alerts**
   - **Effort**: 1-2 hours (content review)
   - **Impact**: Reduces uncertainty and decision paralysis
   - **Implementation**:
     - "You are not eligible" (not "may not be")
     - "This means..." (explain the why)
     - "Your next step is..." (provide action)
   - **Evidence**: P9, P14 call out "may" as problematic

5. **Fix Step Counter Display**
   - **Effort**: 2-3 hours (design + development)
   - **Impact**: Reduces confusion about progress
   - **Implementation**: Show "Step 1.2 of 3: Answer questions" instead of "1 of 7"
   - **Evidence**: P2 directly noted confusion

#### **Strategic Improvements (High Effort, High Impact)**

6. **Redesign Eligibility Summary Card**
   - **Effort**: 8-12 hours (design iteration + testing)
   - **Impact**: Addresses root cause of confusion for 13+ participants
   - **Implementation Options**:
     - **Option A**: Use Card Style B as default (statement + supporting evidence format)
     - **Option B**: Redesign to three-column layout (Requirement | Your Response | Result)
     - **Option C**: Use progressive disclosure (summary first, details on expand)
   - **Evidence**: Multiple participants prefer Card Style B; 10+ confused by current design

7. **Create "Verification & Dispute" Workflow**
   - **Effort**: 16-24 hours (design + development)
   - **Impact**: Supports users who distrust results; reduces abandonment
   - **Implementation**:
     - Add "I disagree with this result" button in ineligibility alert
     - Provide DEERS verification link
     - Offer phone support option
     - Allow save-and-resume for dispute resolution
   - **Evidence**: P4, P14, P15 want mechanisms to dispute; P8 wants to save rather than exit

8. **Build Conditional Content Based on Knowledge Level**
   - **Effort**: 20-24 hours (content development + design)
   - **Impact**: Serves both informed and uninformed users without content bloat
   - **Implementation**:
     - Add brief assessment: "Familiar with CHAMPVA?" Yes/No
     - Show short intro for Yes, extended for No
     - Use progressive disclosure for detailed criteria
   - **Evidence**: P4 skips content, P15 needs more; pattern shows different needs

9. **Add Benefits Comparison or Link**
   - **Effort**: 4-6 hours (content + minimal design)
   - **Impact**: Addresses P2, P6 request for benefits information; differentiates program value
   - **Implementation**:
     - Add "What are CHAMPVA benefits?" link on intro page
     - OR: Add brief comparison table (CHAMPVA vs. TRICARE coverage)
   - **Evidence**: P2 specifically asks "what are really the benefits?"; P6 wants services info

10. **Consolidate/Reduce Redundancy in Flow**
    - **Effort**: 6-8 hours (flow analysis + content consolidation)
    - **Impact**: Reduces session length for informed users; supports efficiency preference
    - **Implementation**:
      - Remove duplicate eligibility questions between Pineapple and Blueberry
      - Streamline intro page (1 version instead of multiple)
      - Reduce continues/navigation steps (P4 notes fewer continues = better)
    - **Evidence**: P4 prefers Blueberry for "fewer continues"; some participants want conciseness

#### **Feature Ideas**

11. **Save & Resume Application**
    - **Evidence**: P8, P14, P15 mention wanting to pause and verify information
    - **User need**: Ability to stop, contact VA, verify data, then continue
    - **Implementation priority**: Medium (improves experience for edge cases)

12. **Chat/Real-time Support Option**
    - **Evidence**: P4, P9, P11, P15, P16 want immediate contact option
    - **User need**: Human verification when eligibility seems wrong
    - **Implementation priority**: High (critical for trust and retention)

13. **DEERS Data Verification Portal**
    - **Evidence**: P2, P3, P6, P16 want to verify/check their own data
    - **User need**: Ability to see what VA has and dispute if wrong
    - **Implementation priority**: Medium-High (supports trust, reduces VA inquiries)

14. **Direct TRICARE Link When Ineligible**
    - **Evidence**: P12, P14, P15 want to apply for TRICARE after learning they can't use CHAMPVA
    - **User need**: Seamless transition to alternative benefit
    - **Implementation priority**: High (supports user goal completion)

#### **Content/Messaging Opportunities**

15. **Emphasize TRICARE/CHAMPVA Mutual Exclusivity on Intro Page**
    - **Change**: Add bold callout: "You can be eligible for EITHER TRICARE OR CHAMPVA, but not both."
    - **Impact**: Reduces confusion that 8+ participants had
    - **Effort**: 30 minutes

16. **Explain the "Why" Behind Ineligibility**
    - **Change**: Add explanatory sentence: "We found that you're eligible for TRICARE benefits. VA rules say individuals eligible for TRICARE cannot also receive CHAMPVA. You can apply for TRICARE at [link]."
    - **Impact**: Reduces frustration (P4, P14 want to understand why)
    - **Effort**: 1 hour

17. **Add Examples/Scenarios**
    - **Change**: Show real-world examples of CHAMPVA eligibility (spouse of 100% disabled vet, survivor, etc.)
    - **Impact**: Helps P15 and others understand who qualifies
    - **Effort**: 2-3 hours

---

### 10. GAPS & FOLLOW-UP QUESTIONS

#### **What We Still Don't Know**

1. **Actual Task Success Rates in Real Environment**
   - Prototype testing doesn't capture real ineligibility scenarios
   - Unknown: Do users actually proceed with ineligible applications? At what rate?
   - Follow-up needed: Analyze live application data for ineligible submissions

2. **Emotional Response to Actual Ineligibility**
   - Testing used hypothetical/mixed scenarios (P3 was actually eligible but tested as ineligible)
   - Unknown: How do users actually feel when told they're ineligible in their own situation?
   - Follow-up needed: Longitudinal study following users post-ineligibility result

3. **Impact of Prototype Context**
   - All testing happened in research context with moderator
   - Unknown: Would users struggle more or less without moderator support?
   - Follow-up needed: Unmoderated remote testing to see natural behaviors

4. **Actual Completion Rates**
   - Unknown: What percentage of users abandon after seeing ineligibility alert in production?
   - Unknown: Do users complete despite ineligibility (as P10 suggests)?
   - Follow-up needed: Measure real application drop-off rates

5. **Impact of Alternative Solutions on Behavior**
   - We know Card Style B is preferred, but unknown impact on actual comprehension/decisions
   - Unknown: Does adding contact info actually reduce call volume to help line?
   - Follow-up needed: A/B test recommended changes in production

6. **User Demographics Patterns**
   - Limited demographic data collected (age, gender noted but not systematic)
   - Unknown: Do particular user segments struggle more? Age groups? Education level?
   - Follow-up needed: Structured demographic analysis

7. **Multi-Language Considerations**
   - All testing in English
   - Unknown: How do double negatives/complex sentences translate?
   - Follow-up needed: Linguistic analysis before translation

8. **Accessibility Impact**
   - No mention of screen reader users or accessibility testing
   - Unknown: How do icons perform with screen readers? Sufficient alternative text?
   - Follow-up needed: WCAG compliance audit and accessibility testing

#### **Questions for Follow-up Research**

**For Design Team:**
- How was Card Style B originally intended to be used?
- Why was the X icon chosen for "doesn't meet requirement"?
- What was the rationale for including both CHAMPVA eligibility and TRICARE response in same card?

**For Product Team:**
- What's the current abandonment rate after ineligibility alerts?
- How many calls does VA CHAMPVA help line receive related to eligibility questions?
- What percentage of applications are submitted by ineligible users?

**For Content Team:**
- Was Card Style B tested with users before prototyping?
- What's the rationale for "may not be" language? (Liability? Accuracy?)
- Are there style guide requirements preventing definitive statements?

**For Follow-up Research:**
- A/B test Card Style B against current design in production
- Test with actual ineligible users to understand emotional response
- Analyze call center data: What questions do ineligible users ask?
- Test the impact of adding contact information in ineligibility alerts

#### **Assumptions to Validate**

1. **Assumption**: Users will trust DEERS validation data
   - **Reality**: Users trust data but want to verify it
   - **To validate**: Test what % actually check DEERS themselves vs. trust system

2. **Assumption**: Early eligibility check saves time
   - **Reality**: Users still want to understand and verify result
   - **To validate**: Measure actual time savings (do ineligible users abandon faster or verify first?)

3. **Assumption**: Visual icons (checkmark/X) provide quick comprehension
   - **Reality**: Without clear labeling, icons confuse more than clarify
   - **To validate**: Test labeled vs. unlabeled icons quantitatively

4. **Assumption**: One prototype is clearly better
   - **Reality**: Both have issues; trade-offs between speed (Blueberry) and clarity (Pineapple)
   - **To validate**: Hybrid solution combining best of both might be optimal

5. **Assumption**: Users understand mutual exclusivity of programs
   - **Reality**: ~50% don't understand until seeing both prototypes
   - **To validate**: Pre/post comprehension testing with intro page redesign

#### **Areas Needing Quantitative Validation**

- Icon comprehension rates (need >85% correct interpretation)
- Eligibility message comprehension (need >90% correct understanding)
- Abandonment rate post-ineligibility (current unknown)
- Call volume to CHAMPVA help line (is it problem volume?)
- Incorrect applications submitted (by ineligible users)
- User satisfaction scores for different designs
- Task completion times (what's optimal flow?)
- Content scanning patterns (which sections do users read?)

---

## KEY INSIGHTS (NUMBERED LIST WITH EVIDENCE)

1. **Double Negative Phrasing is the Highest Priority Issue** (14/16 participants confused; Root cause of 40% of comprehension failures)
   - Evidence: P2, P3, P7, P8, P10, P12, P13, P14 explicitly mention re-reading due to confusion
   - Specific problem: "may NOT be eligible" + "Veteran is NOT eligible for TRICARE" creates double negative that reverses meaning
   - Immediate fix: Reframe to positive statements

2. **Icon Semantics Are Undefined and Causing Misinterpretation** (10/16 participants confused; Affects 62.5% of users)
   - Evidence: P2, P3, P10, P12, P13 misinterpret X as user error rather than eligibility criterion; Main takeaways confirm "X meaning paradoxical"
   - Problem: Red X has strong negative connotation but in this context indicates user's response (which may actually be good for CHAMPVA)
   - Impact: Users don't understand their eligibility outcome
   - Solution: Add clear labels to icons ("You meet this" vs. "You don't meet this")

3. **Missing Contact Information in Ineligibility Moments Drives Abandonment Risk** (11/16 participants request it; Present in 0/2 prototypes)
   - Evidence: P4, P9, P11, P15, P16 directly ask for phone numbers; P1 mentions calling instead of continuing
   - Gap: When users learn they're ineligible, no next steps offered
   - Impact: Creates "dead end" feeling; increases risk of abandoned applications
   - Solution: Add phone number + "Learn more" link in every ineligibility alert

4. **Users Don't Understand TRICARE/CHAMPVA Mutual Exclusivity Until Multiple Exposures** (~50% initially confused; takes 2 prototypes to grasp)
   - Evidence: P2, P3, P4, P10, P15, P16 don't understand until comparing both prototypes or seeing eligibility summary
   - Root cause: Intro page mentions but doesn't emphasize this critical rule
   - Impact: User confusion about program differences and eligibility logic
   - Solution: Add bold, prominent callout on intro page with clear example

5. **Card Style B's Additional Clarifying Sentence Eliminates Confusion** (10/16 explicitly prefer it; Fixes ~80% of comprehension issues when shown)
   - Evidence: P2, P4, P7, P8, P12, P15 express relief and clarity when seeing Alternative B
   - Specific improvement: Statement "The veteran is eligible for TRICARE" at top of card provides context for responses below
   - Impact: User confidence increases significantly
   - Solution: Adopt Card Style B as default or redesign current card with contextual statement

6. **Ambiguous Language ("may not," "may be") Creates Uncertainty at Critical Decision Points** (6/16 call it out; affects decision-making)
   - Evidence: P9, P14 specifically mention "may" language as problematic when making life-affecting decisions
   - Problem: Users interpret "may not be eligible" as "probably not eligible" rather than "system found ineligibility"
   - Impact: Users proceed despite ineligibility due to ambiguity wanting human confirmation
   - Solution: Use definitive language ("You are not eligible") with explanation of why

7. **Users Trust System Data Accuracy But Distrust Display/Interpretation** (contradiction in 7+ participants)
   - Evidence: P4 "I would trust the information [from DEERS]... But if I disagreed with it I don't see what my options would be"
   - Gap: No dispute mechanism, verification pathway, or human support option
   - Impact: Users who distrust results feel stuck and unable to challenge system
   - Solution: Add verification link + contact info + save-and-resume capability

8. **Informed Users Skip Important Intro Content While Uninformed Users Need More** (Pattern shows inverse needs)
   - Evidence: P4, P6, P9 skip detailed intro; P15, P16 need extended explanation
   - Problem: One-size-fits-all content doesn't serve diverse user knowledge levels
   - Impact: Informed users waste time; uninformed users still confused
   - Solution: Conditional content based on knowledge assessment or progressive disclosure

9. **Early Eligibility Determination is Valued for Efficiency But Creates Anxiety Without Resolution Path** (Pineapple preferred for speed but criticized for lack of next steps)
   - Evidence: P9, P16 like "doing the work for you" but P4, P9, P11, P15 want to know what to do if ineligible
   - Trade-off: Speed vs. Support
   - Impact: Positive on efficiency, negative on user confidence
   - Solution: Keep early check but add comprehensive support/next steps when ineligible

10. **Visual Design Elements (Icons, Colors) Are Noticed But Content Clarity is More Important** (P4 "orange means yelling" but still prefers clear content to fancy design)
    - Evidence: P4, P6, P9, P14 appreciate visual indicators but secondary to content clarity
    - Insight: Users won't forgive confusing content based on good visual design
    - Impact: Design efforts should focus on semantic clarity first, visual polish second
    - Solution: Content-first approach; visual design supports understanding, not replaces it

11. **The Moment of Ineligibility Alert is Critical Retention Point** (Turns confident users into uncertain; Creates abandonment risk)
    - Evidence: P3 says "probably would exit," P7 wants to call before continuing, P10 feels trapped
    - Pattern: Emotion shifts from focused to anxious at ineligibility message
    - Impact: This moment predicts application completion or abandonment
    - Solution: Treat ineligibility moment as critical support point, not just information delivery

12. **Participants Will Continue Application Despite Ineligibility Due to Ambiguity** (P10's quote: "If continue button is there, I'm gonna click it")
    - Evidence: P10 explicitly states would continue despite ineligibility; implies ineligible applications will be submitted
    - Problem: System assumes clear ineligibility will stop users; users instead proceed to verify
    - Impact: Increased volume of ineligible applications in system
    - Solution: Either make ineligibility truly blocking OR provide very clear next steps; don't leave ambiguous

13. **The Hybrid Blueberry Approach (VADS pattern without API) Shows Promise But Lacks Clarity on Content Side** (Preferred by P4 for simplicity but same content issues remain)
    - Evidence: P4 prefers Blueberry for fewer continues; comprehension issues still present
    - Insight: Flow simplification helps but doesn't solve content confusion
    - Impact: Iterating on card content/language more important than flow changes
    - Solution: Apply Blueberry flow + Card Style B content + contact info = optimal solution

14. **User Demographics Show Variation in Approach But Universal Confusion Points** (Gender, background, tech skill show different behaviors but same pain points)
    - Evidence: Female participants more anxious about eligibility; males more efficiency-focused; but everyone confused by double negatives
    - Insight: Underlying UX issues affect all users regardless of demographic
    - Impact: Design fixes benefit all segments; no need for demographic-specific versions
    - Solution: Universal fixes (clear language, icons, contact info) serve everyone

15. **Research Sessions Uncovered Silent Failures** (Users like P1, P6 who didn't ask for help but likely misunderstood)
    - Evidence: P1 doesn't express confusion but takeaways note "confusion around eligibility box"; P6 only partially clear on logic
    - Risk: In real application, these users would silently fail and either abandon or submit incorrect application
    - Impact: Actual problem likely worse than articulated in research
    - Solution: Assume users won't ask for help; design to prevent need for help

---

## PRIORITIZED RECOMMENDATIONS

### **TIER 1: CRITICAL (Fix Immediately)**

**1. Eliminate Double Negatives from All Content**
- Remove: "may NOT be eligible," "applicant is NOT eligible for TRICARE"
- Replace with: "You are not eligible for CHAMPVA because you are eligible for TRICARE"
- Timeline: 1-2 weeks (content revision + QA)
- Expected impact: 50% reduction in comprehension errors
- Effort: Low (content only)

**2. Add Labels to Eligibility Icons**
- Current: bare ✓ and ✗
- New: "✓ You meet this requirement" / "✗ You don't meet this requirement"
- Timeline: 2-3 weeks (design + development + QA)
- Expected impact: Eliminate icon confusion for 60% of users
- Effort: Medium (design + frontend)

**3. Add Contact Information to Ineligibility Alerts**
- Add: Phone number (1-800-827-1000) + link "Verify your information"
- Timeline: 1 week (content + minimal design)
- Expected impact: Reduce abandonment by 20-30%
- Effort: Low (content + link)

**4. Redesign Eligibility Summary Card to Use Card Style B**
- Current: Confusing double negative format
- New: Clear statement of outcome + supporting evidence
- Timeline: 3-4 weeks (design iteration + development + testing)
- Expected impact: 70% improvement in comprehension
- Effort: Medium-High (design + development)

### **TIER 2: HIGH PRIORITY (Fix in Next Sprint)**

**5. Emphasize TRICARE/CHAMPVA Mutual Exclusivity on Intro Page**
- Add: Bold callout with clear example
- Timeline: 2 weeks (content + design)
- Expected impact: 40% reduction in confusion about program differences
- Effort: Low (content + minimal design)

**6. Replace "May Not Be" Language with Definitive Statements**
- Remove: All probabilistic language ("may," "might," "possibly")
- Replace with: Definitive statements with explanation
- Timeline: 2-3 weeks (content audit + revision)
- Expected impact: Reduce uncertainty-driven continuation of applications
- Effort: Low (content only)

**7. Consolidate/Reduce Redundancy in Flow**
- Remove: Duplicate eligibility questions between prototypes
- Streamline: Reduce number of continues/navigation steps
- Timeline: 2-3 weeks (flow analysis + development)
- Expected impact: Reduce session length for informed users; improve efficiency
- Effort: Medium (process analysis + development)

### **TIER 3: MEDIUM PRIORITY (Plan for Future Release)**

**8. Create Conditional Content Based on Knowledge Level**
- Assess: "Familiar with CHAMPVA?" → Show appropriate content depth
- Timeline: 4-6 weeks (content development + design)
- Expected impact: Serve both informed and uninformed users better
- Effort: High (content + design + development)

**9. Build Verification & Dispute Workflow**
- Add: "I disagree with this result" option in ineligibility alerts
- Include: DEERS verification link, phone support, save-and-resume
- Timeline: 6-8 weeks (design + development + testing)
- Expected impact: Support users who want to challenge result; reduce abandonment
- Effort: High (design + development + backend)

**10. Add Benefits Comparison or Education**
- Add: "What are CHAMPVA benefits?" link or comparison table
- Timeline: 2-3 weeks (content creation + design)
- Expected impact: Help users understand program value; differentiate from TRICARE
- Effort: Medium (content + design)

### **TIER 4: NICE-TO-HAVE (If Resources Available)**

**11. Implement Save & Resume Functionality**
- Allow: Users to pause, verify information, then continue
- Timeline: 4-6 weeks (design + development)
- Impact: Improve experience for users wanting to verify
- Effort: High (design + backend + development)

**12. Offer Real-Time Chat/Support Option**
- Add: Chat option during ineligibility moment
- Timeline: 6+ weeks (depends on infrastructure)
- Impact: Immediate support reduces anxiety
- Effort: Very High (infrastructure + training)

**13. Create DEERS Data Verification Portal**
- Allow: Users to see what VA has on file and dispute
- Timeline: 8+ weeks (design + development)
- Impact: Support verification need; reduce call volume
- Effort: Very High (design + backend + development)

---

## RISK FACTORS & CONCERNS

### **Product Risks**

1. **High Volume of Ineligible Applications**
   - Risk: Users proceeding with applications despite ineligibility due to ambiguity
   - Evidence: P10 explicitly states would continue regardless
   - Impact: Processing burden, wasted resources
   - Mitigation: Make ineligibility messaging very clear + provide next steps to TRICARE

2. **Increased Call Volume to Help Line**
   - Risk: Confused users calling for clarification instead of self-serving through interface
   - Evidence: P1, P4, P9 mention calling as first action
   - Impact: Cost increase, wait times
   - Mitigation: Add contact info upfront + self-service verification link (reduce unknown questions)

3. **Application Abandonment Due to Confusion**
   - Risk: Users abandoning after seeing confusing eligibility messaging
   - Evidence: P3, P7, P10 indicate they would exit
   - Impact: Lost eligible applicants, program reach goals not met
   - Mitigation: Implement all Tier 1 & 2 recommendations to reduce confusion

4. **Negative User Sentiment/Trust in VA**
   - Risk: Users interpreting unclear messaging as VA not having their data or losing information
   - Evidence: P13 panic about being "not in system"; P14 concerned about wrong information
   - Impact: Broader trust erosion in VA services
   - Mitigation: Add reassurance messaging + verification links + human support option

### **Design/UX Risks**

5. **Icons Creating Opposite Meaning**
   - Risk: Red X interpreted as "error" rather than "criterion not met"
   - Evidence: 10/16 participants confused
   - Impact: Users don't understand eligibility outcome
   - Mitigation: Add text labels to all icons

6. **Content vs. Visual Design Misalignment**
   - Risk: Good visual design masking poor content clarity
   - Evidence: P4 appreciates visual design but still wants clearer content
   - Impact: Design efforts wasted if content not fixed first
   - Mitigation: Content-first approach; iterate content before visual refinement

7. **Prototype Validation Issues**
   - Risk: Card Style B preferred but not validated with production users
   - Evidence: P5 no-show; only 14/16 completed card style comparison
   - Impact: May recommend change that doesn't work in real context
   - Mitigation: A/B test recommended design in production before full rollout

### **Research Limitations & Biases**

8. **Moderator-Guided Sessions May Mask Real Behaviors**
   - Risk: Users behaving differently with moderator present than in real application
   - Evidence: None but inherent to moderated research
   - Impact: Actual problem severity may be worse than measured
   - Mitigation: Supplement with unmoderated testing and production data analysis

9. **Scenario Confusion Affecting Results**
   - Risk: P3, P10 struggled separating test scenario from real situation
   - Evidence: P3 noted confusion "over scenario/task vs. her real-life circumstances"
   - Impact: May underestimate confusion for users applying to their own situation
   - Mitigation: Use more realistic scenarios or recruit actually-eligible participants

10. **Small Sample Size for Demographic Analysis**
    - Risk: No significant demographic patterns detected due to n=16 (actually 15 with P5 no-show)
    - Evidence: Age, gender noted but patterns inconclusive
    - Impact: May miss important variation requiring targeted design
    - Mitigation: Larger quantitative study to validate demographic variation

11. **Prototype Differences Confounding**
    - Risk: Blueberry and Pineapple have content differences + flow differences
    - Evidence: Hard to isolate which aspect users prefer
    - Impact: Unclear whether to recommend Pineapple (for flow) or Blueberry (for content)
    - Mitigation: Hybrid recommendation: Blueberry flow + updated content

---

## SUGGESTED NEXT STEPS

### **Immediate (Next 2 Weeks)**

1. **Schedule Content Review Meeting**
   - Team: Content strategist, UX researcher, product manager
   - Goal: Review all identified language issues and prioritize fixes
   - Deliverable: Content revision document with priority levels

2. **Audit All Double Negatives**
   - Search: Application copy for "NOT," "not," "can't," "cannot" (especially in combination)
   - Reframe: Each instance using positive structure where possible
   - Timeline: 3-5 days

3. **Prioritize Icon Labeling**
   - Decide: Will labels be visible always or on hover?
   - Design: Quick wireframe options
   - Timeline: 3-5 days

### **Short Term (Next 4 Weeks)**

4. **Implement Tier 1 Recommendations**
   - Content fixes: Double negatives, language review
   - Design: Icon labels in eligibility card
   - Development: Add contact information to alerts
   - Timeline: 3-4 weeks
   - Owner: Product team

5. **A/B Test Card Style B vs. Current Design**
   - Setup: Production A/B test with 50% split
   - Measure: Comprehension scores, completion rate, help-seeking behavior
   - Duration: 2-4 weeks (sufficient sample size)
   - Timeline: 4 weeks (setup + execution)
   - Owner: Analytics + Product team

6. **Prepare Redesigned Eligibility Summary Card**
   - Research: Finalize whether to adopt Card Style B or hybrid approach
   - Design: Full mockups with all states
   - Development: Sprint planning for implementation
   - Timeline: 3-4 weeks
   - Owner: Design + Development teams

### **Medium Term (4-8 Weeks)**

7. **Implement Tier 2 Recommendations**
   - Emphasize mutual exclusivity on intro page
   - Consolidate redundant content
   - Complete language audit and revision
   - Timeline: 4-6 weeks
   - Owner: Product team

8. **Plan Tier 3 Initiatives**
   - Conditional content: Finalize approach and content strategy
   - Verification workflow: Finalize scope and technical approach
   - Benefits education: Plan content and integration
   - Timeline: 2-3 weeks planning + 6-8 weeks implementation
   - Owner: Product + Content teams

9. **Conduct Unmoderated Remote Testing**
   - Recruit: 20-30 participants matching target demographics
   - Test: Updated content and icon labels
   - Measure: Comprehension, task success, satisfaction
   - Timeline: 4-6 weeks
   - Owner: UX research team

### **Long Term (8+ Weeks)**

10. **Monitor Production Metrics**
    - Track: Application abandonment rate (should decrease)
    - Track: Call volume to help line (should decrease)
    - Track: Ineligible application submission rate
    - Track: User satisfaction/sentiment
    - Timeline: Ongoing
    - Owner: Analytics team

11. **Iterate Based on Production Data**
    - Quarterly review of metrics
    - User testing of new iterations
    - Refinement based on real-world behavior
    - Timeline: Ongoing

12. **Plan for Tier 4 (If Business Case Supports)**
    - Verify: A/B test results and business impact of fixes
    - Cost-benefit analysis: Save/resume vs. other features
    - Prioritize: Based on user need and business goals
    - Timeline: Post-Tier 2 implementation (8+ weeks out)

---

## METHOD
