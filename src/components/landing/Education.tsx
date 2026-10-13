'use client';

import { educations, type EducationItem } from '@/config/Education';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Education() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Academic" heading="Education" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="mt-8 flex flex-col gap-8 sm:gap-9"
      >
        {educations.map((item: EducationItem) => (
          <motion.div
            key={item.institution}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
          >
            {/* Left Column: Circular Logo & Info */}
            <div className="flex items-start gap-4">
              {/* Circular Logo */}
              <div className="relative size-11 sm:size-12 shrink-0 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1 flex items-center justify-center shadow-xs">
                <Image
                  src={item.image}
                  alt={item.institution}
                  width={48}
                  height={48}
                  className="size-full object-contain rounded-full"
                />
              </div>

              {/* Institution, Degree & Details */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                    {item.institution}
                  </h3>
                  {item.website && (
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-foreground transition-colors"
                        >
                          <span className="size-3.5 inline-block">
                            <Website />
                          </span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Visit Institute Website</TooltipContent>
                    </Tooltip>
                  )}
                </div>

                <p className="text-sm font-medium text-neutral-400 dark:text-neutral-300 mt-0.5">
                  {item.degree}
                </p>

                {item.details && (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {item.details}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Period */}
            <div className="sm:text-right shrink-0 pl-15 sm:pl-0">
              <p className="text-sm text-neutral-400 dark:text-neutral-500 font-normal">
                {item.period}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
