import { technicalSkills } from '@/config/Skills';
import Link from 'next/link';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Skills() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Technical" heading="Skills" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-3.5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 p-5 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm"
          >
            <div>
              <h3 className="font-semibold text-sm tracking-tight text-foreground">
                {group.category}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {group.skills.map((skill) => {
                const badge = (
                  <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-[1.03] shadow-xs">
                    <span className="shrink-0">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                );

                return skill.href ? (
                  <Link
                    key={skill.name}
                    href={skill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    {badge}
                  </Link>
                ) : (
                  <div key={skill.name}>{badge}</div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
