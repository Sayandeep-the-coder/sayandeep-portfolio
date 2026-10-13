import { Link } from 'next-view-transitions';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="skill-inner-shadow inline-flex items-center align-middle rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-0.5 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white transition-colors hover:bg-black/10 dark:hover:bg-white/20 mx-0.5 my-0.5"
    >
      <span className="size-4 flex-shrink-0 inline-flex items-center justify-center">{children}</span>
      <span className="ml-1.5 text-xs font-semibold">{name}</span>
    </Link>
  );
}
