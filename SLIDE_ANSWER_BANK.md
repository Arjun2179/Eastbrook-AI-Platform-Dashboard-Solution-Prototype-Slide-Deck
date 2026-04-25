# Slide Answer Bank

This file gives concise, assignment-ready answers for the four required explanation prompts.

## 1. Data 1 — What the Original Dashboard Shows

The original dashboard is an **AS-IS analytics view** built from `6,000` baseline rows covering `400` students across `Days 1–15`. It visualizes the current AI-use problem through one KPI row and five research sections. The KPI row shows daily prompts, screen time, verification rate, and eye dryness. The research sections then break the problem down into usage intensity, verification habits, physical strain, cognitive independence, and social-emotional AI risk.

The dashboard also includes filters for **age group**, **reliance type**, and **day range**, which lets users inspect whether the problem is concentrated in specific groups or appears across the student population.

## 2. Data 1 — What Insights Can Be Drawn

The dashboard shows that Eastbrook’s AI-use problem is not just about frequency. It is a combined **verification**, **well-being**, and **intervention-timing** issue.

The strongest insights are:

- Verification gets worse as tasks become harder: `66.0%` at low complexity, `53.6%` at medium, and `40.4%` at high complexity.
- A small over-reliant student group creates disproportionate risk: `23` dominant over-reliant students, only `36.0%` verification, and `68.4%` accepting AI output without verification.
- Physical strain is already high at baseline: `8.6 hrs/day` average screen time, `7.1/10` eye dryness, and `5.9/10` neck pain.
- Social-emotional AI use expands the risk beyond schoolwork, especially in the over-reliant group where `41.6%` use AI for social messaging and `33.2%` discuss serious topics with AI.

Together, these patterns show that the real problem is not AI access alone. It is **unmoderated AI use without enough verification friction or early staff visibility**.

## 3. Proposed Solution App — How It Supports Decision-Making

The proposed solution app turns the research findings into a **role-based intervention workflow**.

- The **Student Portal** helps students log AI sessions, see their behavior against baseline patterns, complete training, and respond to nudges.
- The **Educator Console** helps staff identify higher-risk students earlier, review alerts, and send nudges instead of waiting for late aggregate reports.
- The **Analyst Dashboard** helps users compare AS-IS and TO-BE patterns using filters such as phase, age group, reliance type, and day range.

This supports decision-making because each role gets a different layer of visibility: students see their own habits, educators see who needs support, and analysts see whether the intervention logic improves the KPIs over time.

For the assignment prototype, access is simple: open the landing page, choose a role card, use the sidebar, and open `/compare` for the public impact view. No login page is required.

## 4. Comparison Dashboard — What Insights Can Be Drawn

The comparison dashboard shows how the **TO-BE intervention phase** improves the project’s core KPIs relative to the **AS-IS baseline**.

The clearest improvements are:

- verification rises from `56.0%` to `66.7%`
- automation bias falls from `44.0%` to `33.3%`
- screen time drops from `8.6` to `7.8` hours
- eye dryness improves from `7.1` to `6.3`
- neck pain improves from `5.9` to `5.3`
- prompts per student fall from `35.3` to `29.7`
- nudge success rate is `25.6%`

These changes suggest that the intervention logic works because it adds friction where the AS-IS workflow had none. Instead of allowing unlimited AI use with no checkpoints, the TO-BE design introduces monitoring, nudges, and break support that improve verification behavior and slightly reduce physical strain.

The correct interpretation is that this is a **simulated / intervention-phase comparison**, not a claim that the school has already completed full real-world deployment.
