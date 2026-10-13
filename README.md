<div align="center">

# ⚡ Sayandeep Portfolio

**Personal portfolio website engineered with Next.js 15, React 19, Tailwind CSS, Framer Motion, and MDX.**

[![Live Demo](https://img.shields.io/badge/Demo-sayandeepdev.in-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sayandeepdev.in)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSayandeep-the-coder%2Fsayandeep-portfolio&env=TELEGRAM_BOT_TOKEN,TELEGRAM_CHAT_ID,GEMINI_API_KEY,NEXT_PUBLIC_URL,NEXT_PUBLIC_UMAMI_SRC,NEXT_PUBLIC_UMAMI_ID)

</div>

---

## 🌟 Overview

**sayandeep-portfolio** is a modern developer portfolio and technical showcase engineered by **[Sayandeep Saha](https://sayandeepdev.in)**. It presents full-stack web applications, Web3 & Stellar decentralized systems, AI/LLM pipelines, interactive blog articles, and verified project case studies with smooth animations and high-contrast dark/light mode.

![Portfolio Preview](/public/meta/hero.png)

---

## ✨ Features

- ⚡ **Next.js 15 (App Router & Turbopack)**: Blazing fast server-rendered and statically optimized pages.
- 🎨 **Tailwind CSS & Shadcn UI**: Clean design system built with Radix primitives and customizable design tokens.
- 🌓 **Theme Switching**: Fluid dark/light theme transitions powered by `next-themes`.
- 📝 **MDX Case Studies & Tech Blog**: Dynamic routing and rendering for deep-dive technical articles and project journeys.
- 🔄 **Automated GitHub Project Sync**: Custom script (`fetch-github-projects.mjs`) that pulls live repo stats and updates project listings automatically.
- 🤖 **AI Chat Assistant (Gemini)**: Embedded interactive chat assistant powered by the Google Gemini API.
- 📬 **Telegram Contact Gateway**: Serverless contact form submission that delivers visitor messages straight to your Telegram bot in real time.
- 📊 **Privacy-Focused Analytics**: Seamless integration with [Umami](https://umami.is) for cookie-free, GDPR-compliant web statistics.
- 📱 **Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop with ARIA attributes and smooth micro-interactions.
- 🔍 **SEO & Social Sharing Ready**: Rich OpenGraph tags, JSON-LD metadata, dynamic sitemaps, and Twitter cards.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) |
| **Animations** | [Framer Motion / Motion](https://motion.dev/), [Lenis](https://lenis.darkroom.engineering/) Smooth Scroll |
| **Content** | [MDX](https://mdxjs.com/), [Gray-Matter](https://github.com/jonschlinkert/gray-matter) |
| **Integrations** | [Google Gemini API](https://ai.google.dev/), Telegram Bot API, [Cal.com](https://cal.com/) Embed |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/), [Lucide React](https://lucide.dev/) |
| **Analytics** | [Umami Analytics](https://umami.is/) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- **Node.js** `v18.18.0` or later
- **npm**, **pnpm**, or **Bun**

### 1. Clone the Repository

```bash
git clone https://github.com/Sayandeep-the-coder/sayandeep-portfolio.git
cd sayandeep-portfolio
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using bun
bun install
```

### 3. Setup Environment Variables

Copy the example environment configuration:

```bash
cp .env.example .env
```

Configure your `.env` file with the following keys:

```env
# Telegram Contact Bot (Optional, for instant message notifications)
TELEGRAM_BOT_TOKEN="your-telegram-bot-token"
TELEGRAM_CHAT_ID="your-telegram-chat-id"

# Google Gemini API (For interactive AI features)
GEMINI_API_KEY="your-gemini-api-key"

# App URL & Environment
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"

# Umami Analytics (Optional)
NEXT_PUBLIC_UMAMI_SRC="https://cloud.umami.is/script.js"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"
```

### 4. Run the Development Server

```bash
# Using npm
npm run dev

# Or using bun
bun dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ⚙️ Configuration & Customization

The portfolio is architected for modular customization through `src/config/`:

| Config File | Purpose |
| :--- | :--- |
| [`Hero.tsx`](src/config/Hero.tsx) | Name, professional title, avatar, headline, and hero CTA buttons |
| [`About.tsx`](src/config/About.tsx) | Biography, core skill sets, and personal philosophies |
| [`Projects.tsx`](src/config/Projects.tsx) | Featured projects catalog, live demos, and case study slugs |
| [`Experience.tsx`](src/config/Experience.tsx) | Career timeline, company details, responsibilities, and badges |
| [`Contact.tsx`](src/config/Contact.tsx) | Contact channels, Telegram endpoint settings, and availability |
| [`Meta.tsx`](src/config/Meta.tsx) | SEO titles, meta descriptions, OpenGraph images, and social handles |
| [`Navbar.tsx`](src/config/Navbar.tsx) | Header navigation links and dropdown menus |
| [`Footer.tsx`](src/config/Footer.tsx) | Footer quick links, social links, and copyright text |
| [`Achievements.tsx`](src/config/Achievements.tsx) | Certifications, awards, hackathon wins, and milestones |
| [`Gears.tsx`](src/config/Gears.tsx) & [`Setup.tsx`](src/config/Setup.tsx) | Developer workstation setup, hardware, and dev tooling |

---

## 🔄 Automated GitHub Projects Sync

Keep your projects showcase in sync with your GitHub repositories automatically:

```bash
# Sync projects from your GitHub profile
npm run sync-projects
```

This runs `scripts/fetch-github-projects.mjs`, which:
1. Queries the GitHub API for your latest public repositories.
2. Formats technologies and tags into mapped UI components.
3. Automatically generates/updates MDX case studies in `src/data/projects/`.
4. Refreshes `src/config/Projects.tsx` with live URLs and repository links.

---

## 📝 Adding MDX Content

### Adding a Blog Post
1. Create a new `.mdx` file in `src/data/blog/your-post-slug.mdx`.
2. Add frontmatter metadata:
   ```yaml
   ---
   title: "Your Article Title"
   description: "A short summary of the topic."
   date: "2026-10-15"
   image: "/blog/thumbnail.png"
   tags: ["React", "TypeScript", "Next.js"]
   isPublished: true
   ---
   ```
3. Place any associated images into `public/blog/`.

### Adding a Project Case Study
1. Create a new `.mdx` file in `src/data/projects/your-project-slug.mdx`.
2. Populate frontmatter details (technologies, challenges, learnings, GitHub and live URLs).
3. Place project thumbnails in `public/project/`.

---

## 🧪 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Compiles an optimized production build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint type and style validation |
| `npm run format` | Runs Prettier across all files |
| `npm run sync-projects` | Automatically synchronizes projects with your GitHub profile |
| `npm run test-telegram` | Tests Telegram bot connectivity and retrieves chat ID |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the project on [Vercel](https://vercel.com/new).
3. Add the required environment variables (`TELEGRAM_BOT_TOKEN`, `GEMINI_API_KEY`, etc.).
4. Click **Deploy**.

Alternatively, click the **Deploy with Vercel** button above for automated one-click setup.

---

## 👤 Author

**Sayandeep Saha**  
*Full-Stack Developer | AI & Web3 Enthusiast*

- 🌐 **Website**: [sayandeepdev.in](https://sayandeepdev.in)
- 🐙 **GitHub**: [@Sayandeep-the-coder](https://github.com/Sayandeep-the-coder)
- 💼 **LinkedIn**: [Sayandeep Saha](https://www.linkedin.com/in/sayandeep-saha-1812b0327/)
- 🐦 **X (Twitter)**: [@Sayandeep_005](https://x.com/Sayandeep_005)
- ✉️ **Email**: [jitsaha951@gmail.com](mailto:jitsaha951@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
