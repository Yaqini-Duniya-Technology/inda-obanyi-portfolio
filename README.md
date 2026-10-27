# Inda Obanyi — AI/ML Engineering Portfolio

**[Live portfolio](https://indaobanyi.vercel.app)** · **[Project case studies](https://indaobanyi.vercel.app/projects)** · **[GitHub profile](https://github.com/Inda-Obanyi)** · **[LinkedIn](https://www.linkedin.com/in/inda-obanyi-8886553a6/)**

A React/Vite portfolio presenting applied machine learning, autonomous-system prototypes and full-stack software engineering with evidence-aware project case studies. Developed by Inda Obanyi, founder of [Yaqini & Duniya Technology](https://github.com/Yaqini-Duniya-Technology).

## Featured engineering evidence

| Project | Repository | Architecture and tests | Current evidence |
| --- | --- | --- | --- |
| **NEXUS — Autonomous Agricultural Intelligence** | [Source](https://github.com/Yaqini-Duniya-Technology/nexus-intelligent-farm) | [Architecture](https://github.com/Yaqini-Duniya-Technology/nexus-intelligent-farm/blob/master/docs/ARCHITECTURE.md) · [GitHub Actions](https://github.com/Yaqini-Duniya-Technology/nexus-intelligent-farm/actions/workflows/ci.yml) | Reproducible simulation documented; field validation pending |
| **FraudGuard AI** | [Source](https://github.com/Yaqini-Duniya-Technology/mobile-money-fraud-prediction) | [Architecture](https://github.com/Yaqini-Duniya-Technology/mobile-money-fraud-prediction/blob/main/docs/ARCHITECTURE.md) · [GitHub Actions](https://github.com/Yaqini-Duniya-Technology/mobile-money-fraud-prediction/actions/workflows/fraudguard-ci.yml) | Offline fraud-model evaluation, experimental risk-scoring API and functional application; production validation pending |

**Evidence policy:** Project metrics must be interpreted within their documented evaluation setup. Passing continuous integration verifies the automated checks in a workflow, not production safety or external validity.

## Frontend stack

- React, React Router, Vite and JavaScript
- Tailwind CSS and Framer Motion
- Project metadata in `src/data/projects.js`
- Individual project pages in `src/pages/ProjectDetails.jsx`

## Run locally

Requires a compatible Node.js and npm installation.

```bash
npm ci
npm run dev
```

Build the production bundle:

```bash
npm run build
```

For linting:

```bash
npm run lint
```

Deployment configuration is available in `vercel.json`.

## Portfolio structure

- `src/data/projects.js` — case-study content, project maturity and engineering evidence links
- `src/pages/ProjectDetails.jsx` — project details and evidence actions
- `src/components/` — reusable UI sections
- `public/` — static visual assets
- `scripts/generate-project-pages.mjs` — build-time page generation

## Development focus

Improve project descriptions, technical traceability, accessibility and deployed user experience while keeping simulation findings, offline experiments and production claims clearly separated.

---

**Inda Obanyi** · AI/ML Engineer · Software Developer · Founder, Yaqini & Duniya Technology

[Portfolio](https://indaobanyi.vercel.app) · [LinkedIn](https://www.linkedin.com/in/inda-obanyi-8886553a6/) · [Organization](https://github.com/Yaqini-Duniya-Technology)
