import Avalanche from '@/components/technologies/Avalanche';
import Bun from '@/components/technologies/Bun';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Rust from '@/components/technologies/Rust';
import TypeScript from '@/components/technologies/TypeScript';

import React from 'react';
import {
  SiAnthropic,
  SiCplusplus,
  SiDrizzle,
  SiGit,
  SiGithubactions,
  SiGooglegemini,
  SiHono,
  SiJavascript,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiStellar,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';

export const mySkills = [
  <ReactIcon key="React" />,
  <TypeScript key="TypeScript" />,
  <NextJs key="Next.js" />,
  <NodeJs key="Node.js" />,
  <SiHono key="Hono" className="size-full text-[#E36002]" />,
  <SiCplusplus key="C / C++" className="size-full text-[#00599C]" />,
  <Python key="Python" />,
  <Rust key="Rust" />,
  <SiJavascript key="JavaScript" className="size-full text-[#F7DF1E]" />,
  <SiTailwindcss key="Tailwind CSS" className="size-full text-[#06B6D4]" />,
  <SiShadcnui key="shadcn/ui" className="size-full text-foreground" />,
  <SiDrizzle key="Drizzle ORM" className="size-full text-[#C5F74F]" />,
  <SiSupabase key="Supabase" className="size-full text-[#3ECF8E]" />,
  <PostgreSQL key="PostgreSQL" />,
  <MongoDB key="MongoDB" />,
  <SiRedis key="Redis" className="size-full text-[#FF4438]" />,
  <SiGooglegemini key="Google Gemini" className="size-full text-[#8E75FF]" />,
  <SiAnthropic key="Claude (Anthropic)" className="size-full text-[#D97706]" />,
  <SiStellar key="Stellar (Soroban)" className="size-full text-foreground" />,
  <Avalanche key="Avalanche" />,
  <SiSocketdotio key="Socket.io" className="size-full text-foreground" />,
  <SiGit key="Git" className="size-full text-[#F05032]" />,
  <SiGithubactions key="GitHub Actions" className="size-full text-[#2088FF]" />,
  <SiVercel key="Vercel" className="size-full text-foreground" />,
  <Bun key="Bun" />,
  <Prisma key="Prisma" />,
];

export const about = {
  name: 'Sayandeep Saha',
  description: `CS Undergrad at Kalyani Government Engineering College (KGEC) & Core Member at Developer Community KGEC. Focused on Full-Stack engineering (Next.js, TypeScript, Supabase, Drizzle ORM), AI agent systems & RAG pipelines (Gemini, Claude), and decentralized Web3 protocols (Stellar Soroban, Midnight Compact/ZK).`,
};
