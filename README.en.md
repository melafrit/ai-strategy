# AI Strategy

> An **independent**, trilingual pedagogical website inspired by the MIT Sloan Executive Education program
> *Artificial Intelligence: Implications for Business Strategy*.
>
> **🇫🇷 French (priority language) · 🇬🇧 English · 🇸🇦 Arabic**

[🇫🇷 Version française de ce README](./README.md)

[![License: MIT (code)](https://img.shields.io/badge/license--code-MIT-blue.svg)](./LICENSE-CODE)
[![License: CC BY-NC-SA 4.0 (content)](https://img.shields.io/badge/license--content-CC%20BY--NC--SA%204.0-lightgrey.svg)](./LICENSE-CONTENT)
[![Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01.svg)](https://astro.build/)
[![Status: Phase 1](https://img.shields.io/badge/status-Phase%201%20Framing-yellow.svg)](./docs/cadrage/planning.md)

---

## ✨ Vision in one sentence

A **business-first**, **trilingual**, **rigorously sourced** editorial website that makes the managerial and strategic implications of artificial intelligence accessible to executives, consultants, educators, and management students.

## 🎯 Audience

The website is designed to serve three primary audiences simultaneously:

| Audience | Typical use |
| :--- | :--- |
| **Executives and senior leadership** | Executive briefings, framing notes, enterprise AI roadmap |
| **Consultants and digital transformation leaders** | Client templates, decision matrices, reusable deliverables |
| **Educators and management/IS students** | Pedagogical handouts, quizzes, rubrics, evaluation framework |

Every page is written to be **readable at three levels**: executive summary, full pedagogical content, and downloadable operational annexes.

## 🧭 The MIT program at a glance

The *Artificial Intelligence: Implications for Business Strategy* program is offered by the MIT Sloan School of Management and the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL) as a fully online, self-paced, six-week course (6 to 8 hours per week). It is **resolutely managerial and strategic, not technical**, and culminates in an individual AI roadmap project.

The website covers the program's six modules:

1. **Introduction to Artificial Intelligence**
2. **Machine Learning in Business**
3. **Generative AI in Business**
4. **Robotics in Business**
5. **AI in Business and Society**
6. **The Future of Artificial Intelligence**

➡️ See the [full analytical report on the certificate](./docs/cadrage/charte-de-cadrage.md#programme-mit-de-référence) (currently in French) for source breakdown and confidence levels.

## 🏗️ Stack and architecture

| Layer | Choice |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (content-first, MDX, interactive islands) |
| **Languages** | FR (priority), EN, AR (with RTL support) |
| **i18n routing** | Symmetrical subfolders `/fr/`, `/en/`, `/ar/` |
| **Interactive components** | React islands (quizzes, matrices, roadmap builder) |
| **Persistence** | `localStorage` for quizzes and progress — no backend, GDPR-safe |
| **Visual direction** | *Consulting Modern* — sans-serif (IBM Plex), pure white, navy + blue accent |
| **Hosting target** | OVH infrastructure (deployed via GitHub Actions) |
| **Build** | 100% static |

## 📚 Pedagogical media planned

Beyond web pages, the website provides multiple complementary formats:

- **~30 downloadable PDF handouts** (module summaries + granular extracts: concepts, case studies, tools, quizzes)
- **Season 1 podcast — 10 connected episodes** generated via NotebookLM, `.m4a` format
- **Slides and infographics** generated via NotebookLM, embedded for viewing and download
- **Curated YouTube videos** with editorial context
- **Interactive quizzes** with local scoring and progress badges

NotebookLM prompts and media specifications will be produced in Phase 6 (see [planning](./docs/cadrage/planning.md)).

## 📂 Repository structure

```
ai-strategy/
├── README.md                    # Presentation FR
├── README.en.md                 # Presentation EN (you are here)
├── LICENSE-CODE                 # MIT — for source code
├── LICENSE-CONTENT              # CC BY-NC-SA 4.0 — for pedagogical content
├── CHANGELOG.md                 # Change history
├── .gitignore                   # Git exclusions (Astro-ready)
│
├── docs/                        # Project documentation
│   ├── README.md                # Documentation index
│   └── cadrage/                 # Phase 1 — Strategic framing
│       ├── charte-de-cadrage.md # Master document consolidating 10 decisions
│       ├── planning.md          # Detailed 7-phase plan
│       └── decisions-log.md     # Architecture Decision Records
│
├── (coming Phase 2+)
├── src/                         # Astro source code
├── public/                      # Static assets (PDF handouts, media)
└── prompts/                     # NotebookLM prompts (one file per podcast/slide/infographic)
```

## 🚀 Project status

The project follows a **7-phase plan**. Current status:

| Phase | Status | Description |
| :--- | :--- | :--- |
| **1. Framing and identity** | 🟡 In progress | Framing charter, planning, structural decisions |
| 2. Architecture and design system | ⚪ Upcoming | Sitemap, templates, design tokens, personas |
| 3. Technical scaffolding | ⚪ Upcoming | Astro init, i18n, OVH CI/CD |
| 4. French pedagogical content | ⚪ Upcoming | Web pages, modules, cases, glossary |
| 5. Interactive components and handouts | ⚪ Upcoming | Quizzes, matrices, PDFs, roadmap builder |
| 6. NotebookLM prompts and media | ⚪ Upcoming | Podcasts, slides, infographics |
| 7. SEO, QA, EN/AR translations | ⚪ Upcoming | Final optimization and internationalization |

➡️ Full details: [docs/cadrage/planning.md](./docs/cadrage/planning.md)

## 🔬 Editorial principles

Four rigor commitments structure all content produced in this repo:

1. **Visible source hierarchy.** Every claim is tagged with a level of evidence: `Official MIT source`, `Recommended complement`, `Pedagogical reconstruction`, `To be verified`.
2. **No invented sources.** No fictional citations, no unverifiable statistics, no undocumented case studies.
3. **Explicit independence from MIT.** This website is neither affiliated with, endorsed by, nor certified by MIT. It is an independent pedagogical resource inspired by publicly available themes of the program.
4. **Copyright respect.** No reproduction of MIT's proprietary content. Original syntheses and rewordings with brief, sourced citations.

## 📜 Licenses

The project uses a **dual license**:

- **Code** (Astro components, scripts, configuration): [MIT License](./LICENSE-CODE)
- **Pedagogical content** (Markdown, PDF handouts, illustrations, podcasts, etc.): [CC BY-NC-SA 4.0](./LICENSE-CONTENT)

In plain terms: the code is freely reusable; the pedagogical content is also reusable, provided you cite the source, do not use it for commercial purposes, and share derivative works under the same license.

## 🤝 Contributing

The project is in active construction by its primary author. To contribute or report an issue:

- Open an [Issue](https://github.com/melafrit/ai-strategy/issues) to report a problem or suggest an improvement
- Open a Pull Request to propose a correction or an addition

All content contributions must adhere to the editorial principles above.

## 👤 Author

**Mohamed El Afrit** — Educator, Trainer, and Consultant in Software Engineering, Data Science, Project Management and Information Systems.

---

*This README was last updated during Phase 1, May 2026.*
