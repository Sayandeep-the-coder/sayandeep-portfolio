import Avalanche from '@/components/technologies/Avalanche';
import React from 'react';
import {
  SiAnthropic,
  SiBlockchaindotcom,
  SiCplusplus,
  SiDrizzle,
  SiGit,
  SiGithubactions,
  SiGooglegemini,
  SiHono,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiShadcnui,
  SiSocketdotio,
  SiStellar,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  category: string;
  href?: string;
}

export interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export const technicalSkills: SkillCategoryGroup[] = [
  {
    category: 'Languages',
    description: 'Core programming languages for systems, apps, and scripting',
    skills: [
      {
        name: 'TypeScript',
        icon: <SiTypescript className="size-4 text-[#3178C6]" />,
        category: 'Languages',
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript className="size-4 text-[#F7DF1E]" />,
        category: 'Languages',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'C / C++',
        icon: <SiCplusplus className="size-4 text-[#00599C]" />,
        category: 'Languages',
        href: 'https://isocpp.org/',
      },
      {
        name: 'Python',
        icon: <SiPython className="size-4 text-[#3776AB]" />,
        category: 'Languages',
        href: 'https://www.python.org/',
      },
      {
        name: 'Rust',
        icon: <SiRust className="size-4 text-[#DEA584]" />,
        category: 'Languages',
        href: 'https://www.rust-lang.org/',
      },
    ],
  },
  {
    category: 'Frameworks & Frontend',
    description: 'Modern web engineering and component architecture',
    skills: [
      {
        name: 'Next.js 14/15',
        icon: <SiNextdotjs className="size-4 text-foreground" />,
        category: 'Frameworks',
        href: 'https://nextjs.org/',
      },
      {
        name: 'React 19',
        icon: <SiReact className="size-4 text-[#61DAFB]" />,
        category: 'Frameworks',
        href: 'https://react.dev/',
      },
      {
        name: 'Hono',
        icon: <SiHono className="size-4 text-[#E36002]" />,
        category: 'Frameworks',
        href: 'https://hono.dev/',
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="size-4 text-[#06B6D4]" />,
        category: 'Frameworks',
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'shadcn/ui',
        icon: <SiShadcnui className="size-4 text-foreground" />,
        category: 'Frameworks',
        href: 'https://ui.shadcn.com/',
      },
    ],
  },
  {
    category: 'Backend & Tooling',
    description: 'Server runtimes, ORMs, websockets, and CI/CD pipelines',
    skills: [
      {
        name: 'Node.js',
        icon: <SiNodedotjs className="size-4 text-[#5FA04E]" />,
        category: 'Backend',
        href: 'https://nodejs.org/',
      },
      {
        name: 'Drizzle ORM',
        icon: <SiDrizzle className="size-4 text-[#C5F74F]" />,
        category: 'Backend',
        href: 'https://orm.drizzle.team/',
      },
      {
        name: 'Socket.io',
        icon: <SiSocketdotio className="size-4 text-foreground" />,
        category: 'Backend',
        href: 'https://socket.io/',
      },
      {
        name: 'Git',
        icon: <SiGit className="size-4 text-[#F05032]" />,
        category: 'Backend',
        href: 'https://git-scm.com/',
      },
      {
        name: 'GitHub Actions',
        icon: <SiGithubactions className="size-4 text-[#2088FF]" />,
        category: 'Backend',
        href: 'https://github.com/features/actions',
      },
      {
        name: 'Vercel',
        icon: <SiVercel className="size-4 text-foreground" />,
        category: 'Backend',
        href: 'https://vercel.com/',
      },
    ],
  },
  {
    category: 'Databases',
    description: 'Relational, document, in-memory, and vector data layers',
    skills: [
      {
        name: 'Supabase',
        icon: <SiSupabase className="size-4 text-[#3ECF8E]" />,
        category: 'Databases',
        href: 'https://supabase.com/',
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="size-4 text-[#4169E1]" />,
        category: 'Databases',
        href: 'https://www.postgresql.org/',
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="size-4 text-[#47A248]" />,
        category: 'Databases',
        href: 'https://www.mongodb.com/',
      },
      {
        name: 'Redis',
        icon: <SiRedis className="size-4 text-[#FF4438]" />,
        category: 'Databases',
        href: 'https://redis.io/',
      },
    ],
  },
  {
    category: 'AI / ML & Agent Systems',
    description: 'LLM integrations, agentic workflows, and semantic pipelines',
    skills: [
      {
        name: 'Google Gemini',
        icon: <SiGooglegemini className="size-4 text-[#8E75FF]" />,
        category: 'AI / ML',
        href: 'https://ai.google.dev/',
      },
      {
        name: 'Claude (Anthropic)',
        icon: <SiAnthropic className="size-4 text-[#D97706]" />,
        category: 'AI / ML',
        href: 'https://anthropic.com/',
      },
      {
        name: 'RAG Pipelines',
        icon: <SiLangchain className="size-4 text-[#00A389]" />,
        category: 'AI / ML',
      },
      {
        name: 'Agent Memory Systems',
        icon: <SiGooglegemini className="size-4 text-[#A855F7]" />,
        category: 'AI / ML',
      },
    ],
  },
  {
    category: 'Web3 & Blockchain',
    description: 'Smart contracts, zero-knowledge proofs, and decentralized protocols',
    skills: [
      {
        name: 'Stellar (Soroban)',
        icon: <SiStellar className="size-4 text-foreground" />,
        category: 'Web3',
        href: 'https://stellar.org/',
      },
      {
        name: 'Midnight (Compact / ZK)',
        icon: <SiBlockchaindotcom className="size-4 text-[#6366F1]" />,
        category: 'Web3',
        href: 'https://midnight.network/',
      },
      {
        name: 'Avalanche (Fuji)',
        icon: <Avalanche className="size-4" />,
        category: 'Web3',
        href: 'https://avax.network/',
      },
    ],
  },
];
