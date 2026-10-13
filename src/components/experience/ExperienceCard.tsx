import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-5 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 md:p-6">
      {/* Company Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        {/* Left Side */}
        <div className="flex items-start gap-3.5">
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className="size-11 shrink-0 rounded-xl object-contain border border-neutral-200 dark:border-neutral-800 bg-white p-1 dark:bg-neutral-950"
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className={cn(
                  'text-base sm:text-lg font-bold text-foreground',
                  experience.isBlur ? 'blur-[5px]' : 'blur-none',
                )}
              >
                {experience.company}
              </h3>
              {experience.isCurrent && (
                <div className="flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[11px] font-medium text-green-600 dark:text-green-400">
                  <div className="size-1.5 animate-pulse rounded-full bg-green-500"></div>
                  Working
                </div>
              )}
              {experience.website && (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-4 text-neutral-400 hover:text-foreground transition-colors"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.x}
                      target="_blank"
                      className="size-4 text-neutral-400 hover:text-foreground transition-colors"
                    >
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.linkedin}
                      target="_blank"
                      className="size-4 text-neutral-400 hover:text-foreground transition-colors"
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className="size-4 text-neutral-400 hover:text-foreground transition-colors"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub</TooltipContent>
                </Tooltip>
              )}
            </div>
            <p className="text-sm font-medium text-muted-foreground">{experience.position}</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col text-xs md:text-right mt-1 md:mt-0 font-medium text-muted-foreground">
          <p>
            {experience.startDate} -{' '}
            {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          <p className="text-neutral-400">{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Technologies
        </p>
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill
              key={techIndex}
              name={technology.name}
              href={technology.href}
            >
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="text-secondary flex flex-col gap-1.5 text-sm mt-1">
        {experience.description.map(
          (description: string, descIndex: number) => (
            <p
              key={descIndex}
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: `• ${parseDescription(description)}`,
              }}
            />
          ),
        )}
      </div>
    </div>
  );
}
