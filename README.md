<div align="center">

# 🎓 Urban Informatics & Planning: 3rd Semester Guide

**The third-semester modules of BSc (Hons) Urban Informatics & Planning at the University of Moratuwa, as a browsable web guide with a downloadable PDF.**

[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](tsconfig.json)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](vite.config.ts)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](package.json)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](package.json)
[![Pages](https://github.com/BronXTJ/Urban-Informatics-Planning-Student-Guide-Platform/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/BronXTJ/Urban-Informatics-Planning-Student-Guide-Platform/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[**Live site**](https://bronxtj.github.io/Urban-Informatics-Planning-Student-Guide-Platform/) · [**Download the PDF**](client/public/Urban_Informatics_3rd_Semester_Guide.pdf)

</div>

---

## Contents

- [Why](#-why)
- [Highlights](#-highlights)
- [Modules](#-modules)
- [Screenshots](#️-screenshots)
- [Architecture](#️-architecture)
- [Getting started](#-getting-started)
- [Repository layout](#️-repository-layout)
- [Limitations](#-limitations)
- [Author](#-author)
- [Licence](#-licence)

---

## 🧭 Why

The official student handbook is long and hard to search. This guide puts the third-semester modules on one page you can click through: what each covers, how it is assessed, and what to read.

> [!NOTE]
> Content follows the **official student handbook (2024–2028)**, Department of Town & Country Planning, University of Moratuwa. Tools, software, and methods can differ by lecturer and year. The handbook is the authority.

---

## ✨ Highlights

| | Feature | What it means |
|---|---|---|
| 📚 | **Eight core modules** | Credits and descriptions for PL2301–PL2308 |
| 🎯 | **Objectives and outcomes** | Learning objectives, intended outcomes, course content |
| 📝 | **Assessment split** | How each module is assessed |
| 🧰 | **Tools** | Software named per module, where the handbook lists it |
| 📖 | **Reading** | Recommended reading per module |
| 🧭 | **Jump between modules** | A floating button while you scroll |
| 📄 | **PDF** | The full guide as one download |

---

## 📘 Modules

| Code | Module |
|---|---|
| PL2301 | Planning Theory |
| PL2302 | Planning and Design Studio III |
| PL2303 | Land Management |
| PL2304 | Applied Hydrology |
| PL2305 | Population Studies in Planning |
| PL2306 | Spatial Data Analytics and Visualization |
| PL2307 | Planning Techniques |
| PL2308 | Traffic and Transportation |

---

## 🖼️ Screenshots

<!-- TODO: add docs/screenshots/ – home, a module page, phone view -->

---

## 🏗️ Architecture

| Layer | Technology |
|---|---|
| UI | React 19, TypeScript, Tailwind CSS 4, Radix UI primitives, Lucide |
| Routing | Wouter |
| Content | TypeScript in `client/src/data/` (`modules.ts`, `modulesEnhanced.ts`) |
| Build | Vite 7; production `base` is `/Urban-Informatics-Planning-Student-Guide-Platform/` |
| Hosting | GitHub Pages via [`deploy-pages.yml`](.github/workflows/deploy-pages.yml) on push to `main` |
| Optional server | Express static server in `server/` |

---

## 🚀 Getting started

Requires Node.js 22+ and pnpm 10+.

```bash
git clone https://github.com/BronXTJ/Urban-Informatics-Planning-Student-Guide-Platform.git
cd Urban-Informatics-Planning-Student-Guide-Platform
pnpm install
pnpm dev          # usually http://localhost:3000/
```

| Command | What it does |
|---|---|
| `pnpm check` | TypeScript typecheck |
| `pnpm build` | Static build for GitHub Pages |
| `pnpm preview` | Serve the build locally |
| `pnpm build:all` then `pnpm start` | Build and run the optional Express server |

---

## 🗂️ Repository layout

```text
Urban-Informatics-Planning-Student-Guide-Platform/
├── client/
│   ├── public/          Urban_Informatics_3rd_Semester_Guide.pdf
│   └── src/
│       ├── pages/       Home, 404
│       ├── data/        Module content
│       └── components/  UI
├── server/              Optional Express static server
├── shared/              Shared constants
├── patches/             wouter patch
└── .github/workflows/deploy-pages.yml
```

---

## ⚠️ Limitations

- **Not an official substitute** for the handbook. Check the University's copy for anything that affects marks.
- **Third semester only**, from the 2024–2028 handbook.
- **No automated tests or CI.** Only the Pages deploy runs on push.

---

## 👤 Author

**Thanuja Lakshan Senarathne**, BSc (Hons) Urban Informatics & Planning, University of Moratuwa
[@BronXTJ](https://github.com/BronXTJ) · [LinkedIn](https://www.linkedin.com/in/thanuja-senarathne-1122a828b)

---

## 📜 Licence

The platform code is released under the [MIT License](LICENSE), matching `package.json`. Copyright (c) 2026 Thanuja Lakshan Senarathne.

Handbook content remains the University of Moratuwa's and keeps its owner's terms.

<div align="center"><sub>Department of Town & Country Planning · University of Moratuwa 🇱🇰</sub></div>
