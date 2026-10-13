'use client';

import { about, mySkills } from '@/config/About';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex flex-col gap-6 md:flex-row md:items-center"
      >
        <Image
          src="/assets/avatar.jpg"
          alt="Sayandeep Saha"
          width={300}
          height={300}
          className="size-48 md:size-52 shrink-0 rounded-2xl border-2 border-neutral-200/80 dark:border-neutral-800 object-cover shadow-md"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-3 leading-relaxed">{about.description}</p>
        </div>
      </motion.div>

      {/* Expanded Skills - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 pt-4 border-t border-neutral-200/40 dark:border-neutral-800/40"
      >
        <p className="text-secondary font-bold text-base mb-3">Skills</p>
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
          {mySkills.map((skill) => (
            <Tooltip key={skill.key}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.95 }}
                  className="size-6 sm:size-7 flex items-center justify-center hover:cursor-pointer transition-transform duration-200"
                >
                  {skill}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{skill.key}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
