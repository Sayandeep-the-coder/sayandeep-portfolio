<div align="center">

# Sayandeep Saha — Portfolio

**Personal portfolio website engineered with Next.js 15, React 19, Tailwind CSS, Framer Motion, and MDX.**

[![Live Demo](https://img.shields.io/badge/Live%20Site-sayandeepdev.in-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sayandeepdev.in)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🌟 Overview

Welcome to the source repository for my personal portfolio website, live at **[sayandeepdev.in](https://sayandeepdev.in)**.

This website showcases my software engineering journey, full-stack web applications, Web3 & decentralized protocols, AI/LLM pipelines, and technical writings in a responsive, accessible, and high-performance design.

![Portfolio Preview](/public/meta/hero.png)

---

## ✨ Features

- ⚡ **Next.js 15 (App Router & Turbopack)**: High-speed server rendering, static optimization, and quick reloads.
- 🎨 **Tailwind CSS & Shadcn UI**: Clean typography and polished interface components built on Radix primitives.
- 🌓 **Theme Switching**: Fluid dark and light theme transitions powered by `next-themes`.
- 📝 **MDX Case Studies & Tech Blog**: Dynamic routing for detailed project case studies and technical articles.
- 🔄 **Automated GitHub Projects Sync**: Custom sync script (`scripts/fetch-github-projects.mjs`) pulling my latest public repositories and repository metadata.
- 🤖 **Interactive AI Assistant**: Embedded AI chat assistant powered by Google Gemini API.
- 📬 **Telegram Contact Gateway**: Serverless contact form delivering visitor messages directly to my Telegram bot.
- 📊 **Privacy-Friendly Analytics**: Integration with Umami for lightweight, privacy-focused traffic analytics.
- 🔍 **SEO & Metadata**: Optimized meta tags, OpenGraph previews, and semantic markup for search engines and social platforms.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), [Node.js](https://nodejs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) |
| **Animations & UI** | [Framer Motion](https://motion.dev/), [Lenis](https://lenis.darkroom.engineering/) Smooth Scroll |
| **Content** | [MDX](https://mdxjs.com/), [Gray-Matter](https://github.com/jonschlinkert/gray-matter) |
| **Integrations** | [Google Gemini API](https://ai.google.dev/), Telegram Bot API, [Cal.com](https://cal.com/) |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/), [Lucide React](https://lucide.dev/) |
| **Analytics** | [Umami](https://umami.is/) |

---

## 📂 Project Structure

```
sayandeep-portfolio/
├── public/                 # Static assets, project thumbnails, logos, and meta images
│   ├── assets/             # Avatar and general assets
│   ├── blog/               # Blog post cover images
│   ├── meta/               # OpenGraph and hero images
│   └── project/            # Project showcase thumbnails
├── scripts/
│   └── fetch-github-projects.mjs  # Automation script to fetch and format GitHub repos
├── src/
│   ├── app/                # Next.js App Router (pages and API routes)
│   ├── components/         # Reusable React components (UI, layouts, widgets, SVGs)
│   ├── config/             # Site configuration (Hero, About, Projects, Experience, Meta, etc.)
│   ├── data/
│   │   ├── blog/           # MDX blog posts
│   │   ├── journey/        # MDX engineering journey milestones
│   │   └── projects/       # MDX project case studies
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and MDX parsers
│   └── types/              # TypeScript definitions
└── .env.example            # Environment variables template
```

---

## 🚀 Local Development

### 1. Installation

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file based on `.env.example`:

```env
TELEGRAM_BOT_TOKEN="your-telegram-bot-token"
TELEGRAM_CHAT_ID="your-telegram-chat-id"
GEMINI_API_KEY="your-gemini-api-key"
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"
NEXT_PUBLIC_UMAMI_SRC="your-umami-script-url"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### 4. Available Commands

- `npm run dev` — Starts development server with Turbopack.
- `npm run build` — Compiles production build.
- `npm run start` — Runs compiled build.
- `npm run lint` — Runs ESLint checks.
- `npm run sync-projects` — Pulls latest projects from GitHub and updates case studies.

---

## 👤 Author

**Sayandeep Saha**  
*Full-Stack Developer | AI & Web3 Enthusiast*

- 🌐 **Website**: [sayandeepdev.in](https://sayandeepdev.in)
- 🐙 **GitHub**: [@Sayandeep-the-coder](https://github.com/Sayandeep-the-coder)
- 💼 **LinkedIn**: [Sayandeep Saha](https://www.linkedin.com/in/sayandeep-saha-1812b0327/)
- 🐦 **X (Twitter)**: [@Sayandeep_005](https://x.com/Sayandeep_005)
- ✉️ **Email**: [jitsaha951@gmail.com](mailto:jitsaha951@gmail.com)
