'use client';

import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import TextAnimate from '../common/TextAnimate';
import { TrackedLink } from '../common/TrackedLink';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-primary font-semibold">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return <React.Fragment key={part.key}>{part.text}</React.Fragment>;
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Row 1: Top Section (Left: Avatar + Name / Title, Right: Portrait Card) */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Top Left: Avatar + Heading */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Avatar Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 sm:block"
          >
            <div className="relative inline-block w-fit shrink-0">
              <Image
                src={avatar}
                alt={name}
                width={100}
                height={100}
                className="size-16 sm:size-20 rounded-full border-2 border-neutral-200 dark:border-neutral-800 object-cover shadow-md"
                priority
              />
              <span className="absolute bottom-1 right-1 size-3.5 rounded-full bg-emerald-500 ring-2 ring-background" />
            </div>

            {/* Mobile Only: Live Status Pill */}
            <div className="inline-flex sm:hidden items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </div>
          </motion.div>

          {/* Mobile Heading (< sm) */}
          <div className="mt-4 flex flex-col gap-1.5 sm:hidden">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              <TextAnimate text={`Hi, I'm ${name}`} delay={0.08} />
            </h1>
            <p className="text-base font-medium text-secondary tracking-tight">
              <TextAnimate text={title} delay={0.2} />
            </p>
          </div>

          {/* Desktop Heading (>= sm) - Exact Original Layout */}
          <div className="mt-6 hidden sm:flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <TextAnimate text={`Hi, I'm ${name} — `} delay={0.08} />
              <span className="text-secondary">
                <TextAnimate text={title} delay={0.2} />
              </span>
            </h1>
          </div>
        </div>

        {/* Top Right: Portrait Photo Card (Hidden on mobile, preserved on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex md:w-72 lg:w-80 shrink-0 justify-center md:justify-end"
        >
          <div className="group relative w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/60 p-2 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-neutral-400/60 dark:hover:border-neutral-700">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-950">
              <Image
                src="/hero-portrait.jpg"
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                <span className="font-medium tracking-wide">{name}</span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 backdrop-blur-md text-[10px]">Developer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Row 2: Full-Width Bio & Skills Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 sm:mt-8 w-full border-t border-neutral-200/40 dark:border-neutral-800/40 pt-5 sm:pt-6"
      >
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {renderDescription()}
        </p>
      </motion.div>

      {/* Row 3: Bottom Section (Left: Social Links, Right: Action Buttons) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 sm:mt-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Bottom Left: Social Links */}
        <div className="flex items-center justify-center sm:justify-start gap-2.5">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <TrackedLink
                  href={link.href}
                  key={link.name}
                  className="text-secondary flex items-center justify-center rounded-lg p-2 transition-colors hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800/80"
                  track={{
                    name: 'external_link_click',
                    data: {
                      url: link.href,
                      text: link.name,
                      location: 'hero_social',
                    },
                  }}
                >
                  <span className="size-5">{link.icon}</span>
                </TrackedLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Bottom Right: Action Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full sm:w-auto sm:flex sm:flex-wrap sm:items-center sm:gap-4 sm:justify-end">
          {buttons.map((button, index) => {
            const IconComponent =
              buttonIcons[button.icon as keyof typeof buttonIcons];
            return (
              <Button
                key={index}
                variant={button.variant as 'outline' | 'default'}
                className={cn(
                  'w-full sm:w-auto justify-center',
                  button.variant === 'outline' && 'inset-shadow-indigo-500',
                  button.variant === 'default' && 'inset-shadow-indigo-500',
                )}
                track={{
                  name: 'button_click',
                  data: { buttonId: button.text, section: 'hero' },
                }}
              >
                {IconComponent && <IconComponent />}
                <Link href={button.href}>{button.text}</Link>
              </Button>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
}
