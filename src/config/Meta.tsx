import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: `${heroConfig.name} | Full-Stack Developer, AI & Web3 Enthusiast`,
  description: `${about.description}`,
  url: process.env.NEXT_PUBLIC_URL || 'https://sayandeepdev.in',
  ogImage: '/meta/hero.png',
  author: {
    name: about.name,
    twitter: '@Sayandeep_005',
    github: 'Sayandeep-the-coder',
    linkedin: 'sayandeep-saha-1812b0327',
    email: 'jitsaha951@gmail.com',
  },
  keywords: [
    'Sayandeep Saha',
    'Sayandeep',
    'portfolio',
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'typescript',
    'web3',
    'ai',
    'stellar',
    'soroban',
    'rag pipelines',
    'kgec',
    'sayandeepdev',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${heroConfig.name} | Full-Stack Developer, AI & Web3 Enthusiast`,
    description: `${about.description} Explore my projects, journey, and technical expertise.`,
    keywords: [
      'Sayandeep Saha',
      'portfolio',
      'full-stack developer',
      'nextjs',
      'typescript',
      'ai agents',
      'web3',
      'stellar',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: `Contact | ${heroConfig.name}`,
    description:
      "Get in touch with Sayandeep Saha for software engineering opportunities, collaborations, or freelance projects.",
    keywords: ['contact', 'hire', 'collaboration', 'software developer', 'sayandeep saha'],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Work Experience page
  '/work-experience': {
    title: `Work Experience | ${heroConfig.name}`,
    description:
      'Explore my professional work experience, technical leadership, and engineering contributions across companies and developer communities.',
    keywords: [
      'work experience',
      'career',
      'software engineer',
      'full-stack developer',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: `Projects | ${heroConfig.name}`,
    description:
      'Discover full-stack web applications, AI agent systems, RAG pipelines, and decentralized Web3 protocols built by Sayandeep Saha.',
    keywords: [
      'projects',
      'portfolio',
      'ai agents',
      'rag benchmark',
      'web3',
      'stellar',
      'soroban',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Blog page
  '/blog': {
    title: `Blog & Technical Articles | ${heroConfig.name}`,
    description:
      'In-depth technical articles, tutorials, and engineering writeups on modern web architecture, AI systems, and decentralized protocols.',
    keywords: [
      'blog',
      'tutorials',
      'engineering blog',
      'technical writing',
      'web development',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: `Resume & CV | ${heroConfig.name}`,
    description: `View and download Sayandeep Saha's professional resume. Technical skill sets, engineering experience, and verified credentials.`,
    keywords: [
      'resume',
      'cv',
      'curriculum vitae',
      'software engineer resume',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Gears page
  '/gears': {
    title: `Gears & Tools | ${heroConfig.name}`,
    description:
      'A breakdown of the hardware, developer tools, peripherals, and software stack used daily by Sayandeep Saha.',
    keywords: [
      'gears',
      'developer setup',
      'software tools',
      'productivity',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Setup page
  '/setup': {
    title: `Setup Guide | ${heroConfig.name}`,
    description:
      'Development environment configuration, VS Code setup, themes, and extensions for optimized software engineering.',
    keywords: [
      'vscode setup',
      'developer environment',
      'extensions',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Journey page
  '/journey': {
    title: `Journey & Milestones | ${heroConfig.name}`,
    description:
      'A chronological timeline of my academic milestones, engineering growth, hackathon wins, and Web3 contributions.',
    keywords: [
      'journey',
      'timeline',
      'milestones',
      'kgec',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Certificates page
  '/journey/certificates': {
    title: `Certificates & Credentials | ${heroConfig.name}`,
    description:
      'Verified certifications, Stellar fellowship credentials, and hackathon awards achieved by Sayandeep Saha.',
    keywords: [
      'certificates',
      'credentials',
      'achievements',
      'hackathon',
      'stellar fellowship',
      'sayandeep saha',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
