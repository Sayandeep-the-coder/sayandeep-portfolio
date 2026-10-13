'use client';

import { type Experience, experiences } from '@/config/Experience';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceCard } from '../experience/ExperienceCard';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />
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
        className="mt-6 flex flex-col gap-6"
      >
        {experiences.slice(0, 2).map((experience: Experience) => (
          <motion.div
            key={experience.company}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-8 flex justify-center"
      >
        <Button
          variant="outline"
          track={{
            name: 'button_click',
            data: { buttonId: 'show_all_experiences', section: 'experience' },
          }}
        >
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </motion.div>
    </Container>
  );
}
