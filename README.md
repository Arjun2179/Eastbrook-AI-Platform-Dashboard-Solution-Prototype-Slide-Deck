# Dashboard & Solution Prototype

This folder is the slide-prep workspace for Assignment 3.2 and now includes the first working local slide deck.

It gathers the theory, exact dataset-backed metrics, approved wording, and the deck files needed to build and present the Eastbrook submission without drifting into outdated claims or copied analysis.

## Files

- `THEORY_EVIDENCE_PACK.md`
  - Full theory, problem framing, slide-by-slide evidence, and claim guardrails.
- `SLIDE_ANSWER_BANK.md`
  - Direct answers to the assignment prompts in concise, presentation-friendly wording.
- `METRIC_SOURCE_OF_TRUTH.json`
  - Exact numbers, units, formulas, and source paths for every core slide claim.
- `index.html`
  - The local slide deck.
- `styles.css`
  - Deck styling and presentation layout.
- `script.js`
  - Slide navigation and link configuration.
- `notes.md`
  - Speaker notes for each slide.
- `package.json`
  - Local serve script for previewing the deck.

## Source-of-truth order

Use sources in this order when there is any mismatch:

1. Current dataset and derived dashboard data
2. Current app behavior and analytics formulas
3. Charter and project framing documents
4. Older PPT or deck drafts

## Current implementation anchors

- Original-problem dashboard: `dashboard/`
- Prototype app: `app/`
- Public comparison view: `app/src/pages/PublicComparison.tsx`
- Baseline theory: `Arjun/Project_Charter_Eastbrook.md`

## Local preview

From this folder, run:

```bash
npm run serve
```

The command will use `4180` by default and automatically fall forward to `4181`-`4184` if needed.
Open the exact URL printed in the terminal, for example:

```text
http://localhost:4180/Dashboard%20%26%20Solution%20prototype/
```

The deck uses:

- `/dashboard/index.html` for the local original-problem dashboard preview
- `http://localhost:3001/` for the prototype app button
- `http://localhost:3001/compare` for the comparison button

The local serve script prepares a small preview root automatically so the built dashboard is available at
`/dashboard/` and the embedded AS-IS preview loads correctly inside the deck.

If you want the prototype and comparison buttons to work during local testing, start the app server separately from the repo root:

```bash
npm run server
```

## Link guidance

Before final submission, replace local or development URLs with the real hosted links for:

- Original problem dashboard
- Prototype app landing page
- Comparison dashboard
