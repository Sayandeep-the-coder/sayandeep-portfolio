import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Website from '@/components/svgs/Website';
import Avalanche from '@/components/technologies/Avalanche';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Rust from '@/components/technologies/Rust';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Python: Python,
  Rust: Rust,
  Avalanche: Avalanche,
};

export const heroConfig = {
  // Personal Information
  name: 'Sayandeep Saha',
  title: 'Full-Stack Developer | AI & Web3 Enthusiast',
  avatar: '/assets/avatar.jpg',

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build full-stack & AI-driven applications with {skills:0}, {skills:1}, {skills:2}, and {skills:3}. Focused on scalable architectures, intelligent pipelines, and decentralized Web3 protocols.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: 'mailto:jitsaha951@gmail.com',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sayandeep-saha-1812b0327/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/Sayandeep-the-coder',
    icon: <Github />,
  },
  {
    name: 'Portfolio',
    href: 'https://sayandeepdev.in',
    icon: <Website />,
  },
  {
    name: 'Email',
    href: 'mailto:jitsaha951@gmail.com',
    icon: <Mail />,
  },
];
