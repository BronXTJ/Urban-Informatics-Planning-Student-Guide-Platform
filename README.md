# 🎓 Urban Informatics & Planning — 3rd Semester Guide

A learning platform for **BSc (Hons) Urban Informatics & Planning** students at the **University of Moratuwa**. It presents third-semester modules, concepts, tools, and assessment notes from the official student handbook in a browsable web guide.

🌐 **Live demo:** [https://bronxtj.github.io/Urban-Informatics-Planning-Student-Guide-Platform/](https://bronxtj.github.io/Urban-Informatics-Planning-Student-Guide-Platform/)

---

## 📌 About

The guide is based on the **official student handbook (2024–2028)**, Department of Town & Country Planning, University of Moratuwa.

- 📚 Eight core third-semester modules, with credits and descriptions
- 🎯 Learning objectives, intended outcomes, and course content
- 🧰 Tools and software called out per module (where listed)
- 📖 Recommended reading
- 📄 Downloadable PDF of the full guide

**Note:** Concepts follow the handbook. Tools, software, and methods can differ by lecturer and year.

---

## 🧭 Modules

| Code | Module |
|------|--------|
| **PL2301** | Planning Theory |
| **PL2302** | Planning and Design Studio III |
| **PL2303** | Land Management |
| **PL2304** | Applied Hydrology |
| **PL2305** | Population Studies in Planning |
| **PL2306** | Spatial Data Analytics and Visualization |
| **PL2307** | Planning Techniques |
| **PL2308** | Traffic and Transportation |

Click a module on the live site for objectives, assessment split, key concepts, and tools. A floating button lets you jump between modules while scrolling.

---

## 🛠️ Tech stack

| Layer | Tools |
|-------|--------|
| UI | **React 19**, **Vite 7**, **Tailwind CSS**, **Lucide** |
| Routing | **Wouter** |
| Package manager | **pnpm** |
| Hosting | **GitHub Pages** (Actions workflow on `main`) |

---

## 🚀 Getting started

### Prerequisites

- **Node.js** 22+ (LTS recommended)
- **pnpm** 10+

### Install & run locally

```bash
git clone https://github.com/BronXTJ/Urban-Informatics-Planning-Student-Guide-Platform.git
cd Urban-Informatics-Planning-Student-Guide-Platform
pnpm install
pnpm dev
```

Open the URL from the terminal (usually `http://localhost:3000/`).

### 📦 Production build

```bash
pnpm run build
pnpm run preview
```

GitHub Pages uses `base: '/Urban-Informatics-Planning-Student-Guide-Platform/'` in production (`vite.config.ts`). Pushes to `main` deploy via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

---

## 📁 Project structure

```
Urban-Informatics-Planning-Student-Guide-Platform/
├── client/                 # Vite app root
│   ├── public/             # Full-guide PDF
│   └── src/
│       ├── pages/          # Home + 404
│       ├── data/           # Module content
│       └── components/     # UI
├── server/                 # Optional Express static server
├── shared/                 # Shared constants
└── dist/                   # Production build (GitHub Pages)
```

---

## 👤 Author

**Thanuja Lakshan Senarathne**

Undergraduate — BSc (Hons) in Urban Informatics & Planning, University of Moratuwa

- 🐙 GitHub: [@BronXTJ](https://github.com/BronXTJ)
- 💼 LinkedIn: [thanuja-senarathne](https://www.linkedin.com/in/thanuja-senarathne-1122a828b)

---

## ⚖️ License & reuse

The app is listed as **MIT** in `package.json`. Handbook content remains the University’s; reuse the platform, but do not treat the module text as an official substitute for the handbook.

---

<p align="center">
  <sub>Department of Town & Country Planning · University of Moratuwa 🇱🇰</sub>
</p>
