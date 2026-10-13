import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const USERNAME = process.argv[2] || 'Sayandeep-the-coder';

console.log(`🚀 Fetching GitHub repository data for: ${USERNAME}...`);

// Technology mapping to sayandeep-portfolio components
const TECH_COMPONENT_MAP = {
  typescript: { name: 'TypeScript', component: 'TypeScript' },
  javascript: { name: 'JavaScript', component: 'JavaScript' },
  react: { name: 'React', component: 'ReactIcon' },
  'react.js': { name: 'React', component: 'ReactIcon' },
  nextjs: { name: 'Next.js', component: 'NextJs' },
  'next.js': { name: 'Next.js', component: 'NextJs' },
  nodejs: { name: 'Node.js', component: 'NodeJs' },
  'node.js': { name: 'Node.js', component: 'NodeJs' },
  express: { name: 'Express.js', component: 'ExpressJs' },
  'express.js': { name: 'Express.js', component: 'ExpressJs' },
  mongodb: { name: 'MongoDB', component: 'MongoDB' },
  postgresql: { name: 'PostgreSQL', component: 'PostgreSQL' },
  tailwind: { name: 'Tailwind CSS', component: 'TailwindCss' },
  tailwindcss: { name: 'Tailwind CSS', component: 'TailwindCss' },
  python: { name: 'Python', component: 'Python' },
  rust: { name: 'Rust', component: 'Rust' },
  bun: { name: 'Bun', component: 'Bun' },
  figma: { name: 'Figma', component: 'Figma' },
  vercel: { name: 'Vercel', component: 'Vercel' },
  socketio: { name: 'Socket.io', component: 'SocketIo' },
  'socket.io': { name: 'Socket.io', component: 'SocketIo' },
  motion: { name: 'Motion', component: 'Motion' },
  framer: { name: 'Motion', component: 'Motion' },
  shadcn: { name: 'shadcn/ui', component: 'Shadcn' },
  'shadcn/ui': { name: 'shadcn/ui', component: 'Shadcn' },
  prisma: { name: 'Prisma', component: 'Prisma' },
  css: { name: 'CSS', component: 'CSS' },
  html: { name: 'HTML', component: 'Html' },
};

// Curated metadata enhancements for Sayandeep's projects
const PROJECT_OVERRIDES = {
  gemreview: {
    title: 'GemReview - AI PR Review Bot',
    description:
      'AI-powered PR review CLI and GitHub Action powered by Google Gemini 2.5 Flash & Pro with live model discovery, inline PR comments, and intelligent quota failover.',
    image: '/project/gemreview.png',
    live: 'https://www.npmjs.com/package/@sayandeep_005/gemreview',
    technologies: ['TypeScript', 'Node.js', 'Vercel'],
    featured: true,
    challenges: [
      'Gemini 429/503 quota exhaustion handling with automated fallback across Flash and Pro models',
      'Accurate AST diff parsing to anchor comments to precise changed lines',
      'Sub-second execution in local terminal dry-run mode without external servers',
    ],
    learnings: [
      'Google Gemini API & Function Calling',
      'CLI distribution and semantic versioning on npm',
      'GitHub Actions ecosystem & PR REST/GraphQL API',
    ],
    overview:
      'GemReview solves PR review bottlenecks by automatically analyzing code diffs with Gemini AI and generating inline comments + severity breakdown covering security, performance, logic bugs, and test coverage.',
  },
  'graphrag-benchmark': {
    title: 'Medical GraphRAG Benchmark',
    description:
      'Three-pipeline LLM inference benchmark evaluating TigerGraph-powered GraphRAG against Basic RAG (Pinecone) using Gemma and Gemini embeddings on medical datasets.',
    image: '/project/graphrag.png',
    live: 'https://graphrag-benchmark-theta.vercel.app',
    technologies: ['Python', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    challenges: [
      'Orchestrating TigerGraph Savanna Docker services with multi-hop graph retrieval',
      'Dynamic top-K filtering with similarity threshold caps for Pinecone vector search',
      'Side-by-side latency, token usage, and cost analytics in real-time',
    ],
    learnings: [
      'Knowledge Graphs & TigerGraph architecture',
      'Pinecone Serverless Vector Database',
      'Google Gemma & GenAI REST API integration',
    ],
    overview:
      'Medical GraphRAG Benchmark demonstrates how graph-structured knowledge reduces hallucination and prompt token bloat compared to pure vector search on high-complexity clinical medical questions.',
  },
  stellar_students_pay: {
    title: 'Stellar Student Pay',
    description:
      'Student-centric payment platform on the Stellar network featuring Soroban smart contracts, instant cashback, UPI-like human readable Stellar IDs, and QR merchant pay.',
    image: '/project/stellar_students_pay.png',
    live: 'https://stellar-students-pay.vercel.app/',
    technologies: ['TypeScript', 'Next.js', 'Rust', 'Node.js', 'MongoDB'],
    featured: true,
    challenges: [
      'Non-custodial automated wallet creation upon signup with encrypted client keys',
      'Writing Soroban smart contracts in Rust for reward vault and merchant escrow',
      'Real-time XLM-to-INR conversions and QR scan-to-pay authorization',
    ],
    learnings: [
      'Soroban Smart Contract development in Rust',
      'Stellar Horizon & Soroban RPC APIs',
      'Decentralized payment UX design',
    ],
    overview:
      'Stellar Student Pay removes crypto friction for students, providing human-readable payment IDs like sayan@kgec.stellar, automated 2% cashback, and seamless campus merchant checkouts.',
  },
  StellarCrowdfund: {
    title: 'StellarCrowdfund',
    description:
      'Decentralized crowdfunding platform on Stellar testnet with Soroban smart contracts, automated milestone escrow, full on-chain refunds, and gasless fee-bump transactions.',
    image: '/project/stellarcrowdfund.png',
    live: 'https://stellarcrowdfund.vercel.app/',
    technologies: ['React', 'Rust', 'JavaScript', 'Tailwind CSS'],
    featured: true,
    challenges: [
      'Enforcing strict on-chain fund release only upon 100% campaign target achievement',
      'Automated trustline setup for backer accounts before funding',
      'Fee-sponsorship using Stellar Fee Bumps for gasless backer transactions',
    ],
    learnings: [
      'Soroban contract unit testing with 100% assertion coverage',
      'Freighter wallet integration with @stellar/stellar-sdk',
      'Glassmorphic dark design with accessible UI feedback',
    ],
    overview:
      'A production-ready full-stack crowdfunding platform on Stellar that ensures backer safety with cryptographic refund guarantees and transparent campaign state tracking.',
  'Journey-2-Mastery': {
    title: 'Journey to Mastery (J2M)',
    description:
      'Gamified developer learning platform inspired by Japanese martial arts ranking (Ronin to Shogun) with GitHub review pipelines, automated judge rubrics, and competitive leaderboards.',
    image: '/project/journey-2-mastery.png',
    live: 'https://github.com/Sayandeep-the-coder/Journey-2-Mastery',
    github: 'https://github.com/Sayandeep-the-coder/Journey-2-Mastery',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    featured: true,
    challenges: [
      'Implementing custom score rubrics and real-time judge review queues with automated load balancing',
      'Architecting Japanese cyber-minimalist design system with Bento Grid and smooth GSAP animations',
      'Stateless GitHub OAuth 2.0 flow integrated with PostgreSQL and Redis caching',
    ],
    learnings: [
      'Next.js App Router and React 19 architecture',
      'Drizzle ORM with PostgreSQL relations and migrations',
      'Gamified learning mechanics, leaderboard optimization, and Redis caching',
    ],
    overview:
      'Journey to Mastery (J2M) is a gamified learning platform inspired by the Japanese martial arts ranking system. Coders progress from Ronin to Shogun by completing real-world coding challenges, submitting GitHub repositories for review, and competing on a live leaderboard.',
  },
  'Private-election-system': {
    title: 'ShadowVote - ZK Election System',
    description:
      'Private zero-knowledge election dApp on the Midnight Network using Compact smart contracts and Merkle membership proofs for anonymous, coercion-resistant voting.',
    image: '/project/shadowvote.png',
    live: 'https://private-election-system-dapp.vercel.app',
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
    featured: true,
    challenges: [
      'Constructing off-chain Merkle membership trees with client-side ZK proof generation',
      'Preventing double-voting while keeping voter identity and ballot choices completely decoupled',
      'Testing Compact smart contract transitions against Midnight network devnet',
    ],
    learnings: [
      'Midnight Network & Compact Smart Contract language',
      'Zero-Knowledge cryptography & Merkle Trees',
      'Decentralized governance security design',
    ],
    overview:
      'ShadowVote enables DAOs, university bodies, and committees to hold verifiable elections without revealing wallet addresses, voter identities, or candidate selections.',
  },
  'EcoWaste-Management-System--PWA-': {
    title: 'EcoWaste Management Platform',
    description:
      'Progressive Web App for tracking, reporting, and learning about municipal waste management with AI categorization, real-time collection maps, and reward incentives.',
    image: '/project/wastemanagement.png',
    live: 'https://ecowaste.sayandeepdev.in',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    featured: true,
    challenges: [
      'Offline-first PWA caching and background sync for field reporting',
      'Image categorization using Google GenAI to identify waste recyclable grades',
      'Real-time municipal driver tracking and collection route updates',
    ],
    learnings: [
      'Progressive Web Application APIs and Service Workers',
      'Google GenAI vision analysis integration',
      'Scalable MongoDB geolocation index schemas',
    ],
    overview:
      'A comprehensive civic tech platform that incentivizes sustainable disposal through gamified reward points, verification workflows, and educational guides.',
  },
  DEV_COMMUNITY: {
    title: 'KGEC Dev Community & Hackathon Portal',
    description:
      'Official web platform for Kalyani Government Engineering College developer community, hosting festival registrations and the Binary Hackathon portal.',
    image: '/project/devcommunity.png',
    live: 'https://dev-community-kgec.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
    featured: true,
    challenges: [
      'High concurrency participant registration handling during hackathon registration bursts',
      'Responsive design across mobile and desktop devices with fast asset delivery',
      'Integration of live event schedules, announcements, and team management',
    ],
    learnings: [
      'Next.js App Router server actions and cache optimization',
      'Tailwind CSS component patterns and accessibility',
      'Community event management workflows',
    ],
    overview:
      'Engineered to empower KGEC students with technical workshops, hackathons, and open-source collaborations.',
  },
  'caption-generator-backend': {
    title: 'Caption Generator Backend',
    description:
      'AI-powered caption generator backend built with Node.js, Express, and MongoDB, providing secure authentication, post management, and RESTful APIs for AI caption creation.',
    image: '/project/intent.png',
    live: 'https://sayandeepdev.in',
    github: 'https://github.com/Sayandeep-the-coder',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
    featured: false,
    challenges: [
      'JWT authentication with rate limiting and secure HTTP-only cookies',
      'Prompt chaining and post generation latency optimization',
      'Graceful error handling and input sanitization',
    ],
    learnings: ['RESTful API architecture', 'Mongoose ODM schema design', 'Express middleware pipeline'],
    overview:
      'Scalable backend API powering content creators with contextual caption generation tailored by topic, tone, and platform.',
  },
  'ai-chat-rag': {
    title: 'AI Chat Application (RAG & Vector DB)',
    description:
      'Full-stack real-time chat application featuring Retrieval-Augmented Generation (RAG) architecture, vector embeddings, and real-time Socket.io streaming.',
    image: '/project/appwrite.png',
    live: 'https://sayandeepdev.in',
    github: 'https://github.com/Sayandeep-the-coder',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'TypeScript'],
    featured: false,
    challenges: [
      'Real-time token streaming over WebSocket connections',
      'Cosine similarity retrieval with chunk re-ranking',
      'Preserving conversation context within token window budgets',
    ],
    learnings: ['Vector Databases & Embeddings', 'WebSocket state management', 'Full-stack TypeScript patterns'],
    overview:
      'Intelligent conversational agent that indexes custom documents into vector databases to answer user queries with verified citations.',
  },
  'sayandeep-portfolio': {
    title: 'Sleek Developer Portfolio',
    description:
      'Personal portfolio website engineered with Next.js 15, React 19, Tailwind CSS, Framer Motion, and MDX case studies.',
    image: '/project/portfolio.png',
    live: 'https://sayandeepdev.in',
    github: `https://github.com/${USERNAME}/sayandeep-portfolio`,
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Motion'],
    featured: false,
    challenges: [
      'Fluid animations and high-contrast accessibility across light/dark themes',
      'MDX case study generation and dynamic route rendering',
      'Optimized performance with 100/100 Lighthouse score',
    ],
    learnings: ['Next.js 15 App Router & React 19 features', 'Framer Motion layout transitions', 'MDX pipelines'],
    overview:
      'Showcases Sayandeep Saha’s software engineering journey, Web3 projects, open-source tools, and technical articles in a modern, responsive layout.',
  },
};

async function fetchGitHubData() {
  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`,
      {
        headers: {
          'User-Agent': 'node-fetch',
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!reposRes.ok) {
      console.warn(`GitHub API warning: ${reposRes.status} ${reposRes.statusText}`);
    }

    const repos = reposRes.ok ? await reposRes.json() : [];
    console.log(`✅ Retrieved ${repos.length} repos from GitHub for ${USERNAME}`);

    return repos;
  } catch (err) {
    console.error('Error contacting GitHub API, using local fallback:', err.message);
    return [];
  }
}

function resolveTechnologies(repo, override) {
  const techNames = override?.technologies || [];
  if (techNames.length > 0) return techNames;

  const detected = new Set();
  if (repo.language) detected.add(repo.language);
  if (repo.topics) {
    repo.topics.forEach((t) => detected.add(t));
  }

  const mapped = [];
  detected.forEach((item) => {
    const key = item.toLowerCase();
    if (TECH_COMPONENT_MAP[key]) {
      mapped.push(TECH_COMPONENT_MAP[key].name);
    }
  });

  if (mapped.length === 0) {
    mapped.push('TypeScript', 'React', 'Next.js');
  }

  return mapped;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function main() {
  const repos = await fetchGitHubData();
  const repoMap = new Map();
  repos.forEach((r) => repoMap.set(r.name.toLowerCase(), r));

  // Determine key project list
  const priorityKeys = [
    'gemreview',
    'graphrag-benchmark',
    'stellar_students_pay',
    'StellarCrowdfund',
    'Private-election-system',
    'EcoWaste-Management-System--PWA-',
    'DEV_COMMUNITY',
    'ai-chat-rag',
    'caption-generator-backend',
    'sayandeep-portfolio',
  ];

  const processedProjects = [];

  for (const key of priorityKeys) {
    const override = PROJECT_OVERRIDES[key] || {};
    const repo =
      repoMap.get(key.toLowerCase()) ||
      repoMap.get(key.replace(/_/g, '-').toLowerCase()) ||
      {};

    const title = override.title || repo.name || key;
    const description =
      override.description ||
      repo.description ||
      'Open-source project built with modern technologies.';
    const image = override.image || '/project/portfolio.png';
    const live = override.live || repo.homepage || 'https://sayandeepdev.in';
    const github = override.github || repo.html_url || `https://github.com/${USERNAME}/${key}`;
    const technologies = resolveTechnologies(repo, override);
    const slug = slugify(key);

    processedProjects.push({
      key,
      slug,
      title,
      description,
      image,
      live,
      github,
      technologies,
      isWorking: true,
      featured: override.featured ?? true,
      challenges: override.challenges || [
        'Architecture and state management',
        'Scalable performance optimization',
        'Clean UI & developer UX design',
      ],
      learnings: override.learnings || ['Modern Full-Stack Development', 'Production Deployment', 'System Architecture'],
      overview: override.overview || description,
    });
  }

  console.log(`📦 Generating data for ${processedProjects.length} core projects...`);

  // 1. Generate src/config/Projects.tsx
  generateProjectsConfigFile(processedProjects);

  // 2. Generate MDX case study files in src/data/projects
  generateMDXFiles(processedProjects);

  console.log('🎉 Project sync completed successfully!');
}

function generateProjectsConfigFile(projectsList) {
  const imports = new Set();

  projectsList.forEach((p) => {
    p.technologies.forEach((t) => {
      const match = Object.values(TECH_COMPONENT_MAP).find(
        (m) => m.name.toLowerCase() === t.toLowerCase()
      );
      if (match) {
        imports.add(match.component);
      }
    });
  });

  // Ensure baseline imports
  ['TypeScript', 'ReactIcon', 'NextJs', 'NodeJs', 'MongoDB', 'TailwindCss', 'Rust', 'Python'].forEach(
    (comp) => imports.add(comp)
  );

  const importStatements = Array.from(imports)
    .sort()
    .map((comp) => `import ${comp} from '@/components/technologies/${comp}';`)
    .join('\n');

  const projectEntries = projectsList
    .map((p) => {
      const techIcons = p.technologies
        .map((t) => {
          const match = Object.values(TECH_COMPONENT_MAP).find(
            (m) => m.name.toLowerCase() === t.toLowerCase()
          );
          const compName = match ? match.component : 'TypeScript';
          const keyName = compName.toLowerCase();
          return `      { name: '${t}', icon: <${compName} key="${keyName}" /> },`;
        })
        .join('\n');

      return `  {
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
    image: ${JSON.stringify(p.image)},
    link: ${JSON.stringify(p.live)},
    technologies: [
${techIcons}
    ],
    github: ${JSON.stringify(p.github)},
    live: ${JSON.stringify(p.live)},
    details: true,
    projectDetailsPageSlug: '/projects/${p.slug}',
    isWorking: true,
  },`;
    })
    .join('\n');

  const content = `/*
 * Auto-generated by scripts/fetch-github-projects.mjs
 * Generated for Sayandeep Saha (@${USERNAME})
 */
${importStatements}
import { Project } from '@/types/project';

export const projects: Project[] = [
${projectEntries}
];
`;

  const targetPath = path.join(rootDir, 'src', 'config', 'Projects.tsx');
  fs.writeFileSync(targetPath, content, 'utf-8');
  console.log(`✅ Written ${targetPath}`);
}

function generateMDXFiles(projectsList) {
  const mdxDir = path.join(rootDir, 'src', 'data', 'projects');
  if (!fs.existsSync(mdxDir)) {
    fs.mkdirSync(mdxDir, { recursive: true });
  }

  projectsList.forEach((p) => {
    const filePath = path.join(mdxDir, `${p.slug}.mdx`);
    const frontmatter = `---
title: ${JSON.stringify(p.title)}
description: ${JSON.stringify(p.description)}
image: ${JSON.stringify(p.image)}
technologies: ${JSON.stringify(p.technologies)}
github: ${JSON.stringify(p.github)}
live: ${JSON.stringify(p.live)}
timeline: '2025 - 2026'
role: 'Lead Developer'
team: 'Solo / Open Source'
status: 'completed'
featured: ${p.featured}
challenges: ${JSON.stringify(p.challenges)}
learnings: ${JSON.stringify(p.learnings)}
isPublished: true
---

## Overview

${p.overview}

## Tech Stack & Architecture

${p.technologies.map((t) => `- **${t}**`).join('\n')}

## Key Features & Highlights

${p.challenges.map((c) => `- ${c}`).join('\n')}

## Links & Repositories

- **Live Demo / Deployment**: [${p.live}](${p.live})
- **GitHub Repository**: [${p.github}](${p.github})
`;

    fs.writeFileSync(filePath, frontmatter, 'utf-8');
  });

  console.log(`✅ Generated ${projectsList.length} MDX case studies in ${mdxDir}`);
}

main();
