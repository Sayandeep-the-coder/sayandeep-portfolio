import Calender from '@/components/svgs/Calender';
import { CertificateIcon } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  tag?: string;
  badge?: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: 'My Journey',
    description:
      'Chronological timeline of academic milestones, open-source releases, and engineering growth.',
    icon: Calender,
    href: '/journey',
    tag: 'Timeline & Milestones',
    badge: '2022 — 2028',
  },
  {
    name: 'Certificates & Achievements',
    description:
      'Verified credentials across Stellar Ecosystem, TigerGraph Hackathon, Midnight Network, and Sheryians Coding School.',
    icon: CertificateIcon,
    href: '/journey/certificates',
    tag: 'Credentials & Honors',
    badge: '4 Verified',
  },
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;
