'use client';

import { motion } from 'motion/react';
import React from 'react';
import TextAnimate from './TextAnimate';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-secondary text-sm tracking-wide">{subHeading}</p>
      <h2 className="text-2xl font-bold">
        <TextAnimate text={heading} />
      </h2>
    </motion.div>
  );
}
