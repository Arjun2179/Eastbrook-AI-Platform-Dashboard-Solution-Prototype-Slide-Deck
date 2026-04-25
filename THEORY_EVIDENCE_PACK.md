# Eastbrook Theory & Evidence Pack

## 1. Project Identity

**Official project identity**

Eastbrook Youth AI Well-Being is a school-centered analytics and intervention initiative focused on making student AI use safe, measurable, and sustainable. The project does **not** argue for banning AI. Its position is that AI is already part of student academic workflows, so the responsible response is to monitor use patterns, protect student well-being, and introduce better verification habits.

**Primary source**

- `Arjun/Project_Charter_Eastbrook.md`

**Working statement**

Eastbrook is trying to prevent AI from becoming an invisible source of automation bias, physical strain, and delayed intervention in student academic life.

## 2. Business Process Under Analysis

The project analyzes one core workflow:

1. Educator assigns work
2. Student uses AI to generate ideas, drafts, or answers
3. Student should independently verify the AI output
4. Student submits work
5. Staff review usage and well-being signals

**Critical failure point**

Step 3 is the failing checkpoint. Students are already using AI at high volume, but the current workflow does not add enough friction to make verification routine. Staff visibility also happens too late, so intervention is reactive instead of preventive.

**Primary sources**

- `Arjun/Project_Charter_Eastbrook.md`
- `dashboard/src/App.tsx`
- `app/src/pages/Landing.tsx`

## 3. Problem Definition

The project frames the problem as two linked harms created by unmoderated, high-volume AI use.

### Cognitive harm

- verification behavior is too low at baseline
- students increasingly accept AI output without checking
- over-reliant students show lower confidence without AI and worse verification behavior

### Physical harm

- screen exposure is high
- long continuous sessions correlate with eye dryness and neck pain
- staff only see the issue after patterns are established

**Charter-level statement**

Unmoderated, high-volume AI use is degrading cognitive independence while also creating measurable physical strain.

**Primary sources**

- `Arjun/Project_Charter_Eastbrook.md`
- `dashboard/public/data/hero_stats.json`
- `Arjun/synthetic_eastbrook_user_day.csv`

## 4. Solution Hypothesis

The project’s solution logic is:

- make AI behavior visible
- add friction where students usually skip verification
- monitor session length and symptoms
- give educators earlier signals
- compare AS-IS against TO-BE intervention outcomes

The prototype expresses that logic through:

- student logging and training
- educator alerts and nudges
- analyst filtering and comparison dashboards
- a public before/after impact view

**Current implementation truth**

- frontend: React
- backend: Express
- data layer: PostgreSQL-backed imported Eastbrook dataset
- prototype access: landing-page role selection, no login page required

**Primary sources**

- `app/README.md`
- `app/src/pages/Landing.tsx`
- `app/src/pages/analyst/AnalystDashboard.tsx`
- `app/server/analytics.js`

## 5. Slide 1 Evidence — Cover, Problem Framing, and Links

### Exact stats to use

- `400 students`
- `12,000 student-day observations`
- `34 dataset fields`
- `3 prototype roles`

### Exact baseline problem metrics

- `14,119 prompts/day`
- `35.3 prompts/student/day`
- `56.0% verification`
- `44.0% automation bias`
- `8.6 hrs/day` average screen time
- `7.1/10` eye dryness
- `5.9/10` neck pain
- `23` dominant over-reliant students

### Slide interpretation

The cover slide should immediately communicate that this is not a generic AI dashboard. It is a student well-being case where heavy AI usage, weak verification, and physical strain appear together in the same baseline dataset.

## 6. Slide 2 Evidence — What the Original Dashboard Shows

### Official framing

This is the **AS-IS original-problem dashboard**.

### Exact scope

- phase: `AS-IS`
- days: `1–15`
- rows: `6,000`
- students represented: `400`

### What the dashboard visualizes

- KPI row:
  - daily prompts
  - screen time
  - verification rate
  - eye dryness
- RQ1:
  - usage intensity
  - reliance distribution
  - age-based exposure
- RQ2:
  - verification by complexity
  - verification vs error relationship
- RQ3:
  - session length vs symptoms
  - breaks vs symptom recovery
- RQ4:
  - latency with vs without AI
  - planning skill and confidence without AI
- RQ5:
  - social messaging
  - serious-topic AI use
  - PII sharing

### Slide-safe wording

Use this slide to explain the structure of the dashboard, not to overload it with conclusions. The goal is to show what kinds of data the dashboard makes visible and how the filters support decision-making.

## 7. Slide 3 Evidence — Key Insights from the Original Dashboard

This slide should convert the dashboard into a short insight story.

### Insight 1: verification falls as task complexity rises

- low complexity: `66.0%`
- medium complexity: `53.6%`
- high complexity: `40.4%`

**Interpretation**

Students are least likely to verify AI outputs when the work is harder to check. This means the verification problem is strongest exactly where academic dependence risk is highest.

### Insight 2: over-reliant students are the clearest intervention target

Use the **student-level** count and the **row-level** behavior separately.

- dominant over-reliant students: `23`
- over-reliant AS-IS rows: `743`
- verification: `36.0%`
- accept without verification: `68.4%`
- confidence without AI: `2.69`
- latency with AI: `241 sec`
- latency without AI: `306 sec`

**Interpretation**

This subgroup verifies least, accepts AI most quickly, and performs worst when AI is removed. That makes over-reliance the strongest signal for targeted intervention.

### Insight 3: physical strain is already severe at baseline

- average screen time: `8.6 hrs/day`
- eye dryness: `7.1/10`
- neck pain: `5.9/10`

**Interpretation**

The project is not only about academic trust in AI. It also shows that daily AI-linked device exposure is already associated with visible physical discomfort across the student population.

### Insight 4: social-emotional AI use adds safeguarding risk

Within the over-reliant group:

- AI for social messaging: `41.6%`
- serious-topic AI use: `33.2%`
- PII shared: `13.6%`

**Interpretation**

Some students are not just using AI for schoolwork. They are also using it in social and emotionally sensitive contexts, which broadens the project from academic workflow monitoring to student safety and support planning.

### Age-group note

- ages `13–14`: `8.5 hrs/day`, `2.6 hrs` continuous use
- ages `15–17`: `8.6 hrs/day`, `2.6 hrs` continuous use

Use age commentary carefully. The stronger evidence is system-wide overexposure, not a dramatic age split.

## 8. Slide 4 Evidence — Proposed Solution App

### Official framing

This is a **role-based prototype application**, not a credential-heavy production system for the assignment.

### Roles to show

- Student Portal
- Educator Console
- Analyst Dashboard

### Decision-making value by role

**Student**

- logs AI sessions
- sees baseline and current behavior
- receives nudges
- tracks training and progress

**Educator**

- reviews roster risk
- monitors alerts
- sends nudges
- watches cohort trends

**Analyst**

- filters phase, age group, reliance type, and day range
- studies AS-IS and TO-BE evidence
- tracks KPI shifts and intervention outcomes

### Access flow to state explicitly

1. open the landing page
2. choose a role card
3. use the sidebar
4. open `/compare` for the public comparison view

### Important wording rule

Say that the prototype demonstrates the proposed solution and decision-support logic. Do **not** describe it as if Eastbrook has already fully deployed it across a live school environment.

## 9. Slide 5 Evidence — Comparison Dashboard

### Official framing

This is an **AS-IS vs TO-BE dataset comparison** representing simulated or intervention-phase improvement logic, not a claim of completed real-world deployment.

### Exact comparison metrics

- verification: `56.0% -> 66.7%` (`+10.7 pts`)
- automation bias: `44.0% -> 33.3%` (`-10.7 pts`)
- screen time: `8.6 -> 7.8 hrs` (`-0.8 hrs`)
- eye dryness: `7.1 -> 6.3` (`-0.8`)
- neck pain: `5.9 -> 5.3` (`-0.6`)
- daily prompts: `14,119 -> 11,871` (`-2,248/day`)
- prompts per student: `35.3 -> 29.7`
- digital physical strain index: `0.75 -> 0.73`
- nudge success rate: `25.6%`
- latency with AI: `219.2 sec -> 185.1 sec`
- latency without AI: `268.6 sec -> 247.2 sec`

### Safe interpretation

- verification improves
- automation bias declines
- screen exposure declines
- symptom scores improve
- the biggest logic change is the introduction of friction through nudges, monitoring, and break support

### Avoid overstating

Do not say:

- “the school has already achieved these results”
- “the app has been fully deployed to all students”
- “these are live production outcomes”

Prefer:

- “the TO-BE phase models the projected improvement under the intervention design”
- “the comparison dashboard shows how the proposed solution could improve the core KPIs”

## 10. Writing Guardrails for the Deck

### Do

- tie every claim to a visible metric or product feature
- keep slide text short and executive-friendly
- use speaker notes for extra explanation
- sound like a team interpreting its own data

### Do not

- paste analysis text from `app/src/pages/PublicComparison.tsx`
- mix `students` with `student-day observations`
- confuse dominant over-reliant **students** with over-reliant **rows**
- reuse old incorrect claims from earlier drafts

## 11. Incorrect Claims to Avoid

These should be treated as invalid for the final deck:

- `402 students`
- `202 students in TO-BE`
- `26 dataset fields`
- a login-page-based prototype access story
- outdated final-stack descriptions such as `Next.js` or `Power BI` as the official solution app

## 12. Recommended Evidence Hierarchy During Deck Writing

If you need to resolve conflicts while writing slide copy, use this order:

1. `Arjun/synthetic_eastbrook_user_day.csv`
2. `dashboard/public/data/*.json`
3. `app/server/analytics.js`
4. `app/src/pages/*`
5. `Arjun/Project_Charter_Eastbrook.md`
6. older deck or PPT drafts
