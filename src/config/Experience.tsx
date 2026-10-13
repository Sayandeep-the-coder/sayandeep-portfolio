import CSS from '@/components/technologies/CSS';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import React from 'react';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Developer Community, KGEC',
    position: 'Core Member / Intern Lead',
    location: 'Kalyani, West Bengal',
    image: '/company/dev-community.jpg',
    description: [
      'Led intern hiring & technical screening process to recruit and mentor new community members.',
      'Designed and shipped Journey to Mastery (journey-2-mastery.vercel.app), a live full-stack builder challenge platform.',
      'Building KWoC (KGEC Winter of Code) platform and rebuilding the official KGEC website (kgec.edu.in).',
    ],
    startDate: '2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://dev-community-kgec.vercel.app',
    github: 'https://github.com/Sayandeep-the-coder/DEV_COMMUNITY',
  },
  {
    isCurrent: false,
    company: 'Binary – KGEC Hackathon',
    position: 'Tech & Design Team',
    location: 'Kalyani, India',
    image: '/company/binary.png',
    description: [
      'Built and designed the TechTime hackathon website with responsive UI components and deployment pipelines.',
      'Collaborated closely with the core technical team to deliver a scalable, user-friendly event platform.',
    ],
    startDate: 'Jan 2026',
    endDate: 'Feb 2026',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
    ],
    website: 'https://dev-community-kgec.vercel.app',
    github: 'https://github.com/Sayandeep-the-coder/Binary-web-2k26',
  },
  {
    isCurrent: true,
    company: 'Imposter – Design Club, KGEC',
    position: 'Graphic Designer',
    location: 'Kalyani, West Bengal',
    image: '/company/kgec.png',
    description: [
      'Designing visual creatives, posters, and banners for flagship college events and community workshops.',
      'Managing visual branding, typography, and color schemes to maintain club brand identity.',
    ],
    startDate: 'Jan 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
    ],
    website: 'https://sayandeepdev.in',
  },
];
