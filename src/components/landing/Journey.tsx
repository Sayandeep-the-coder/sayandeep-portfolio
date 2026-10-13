'use client';

import { journeyItems } from '@/config/Journey';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { TrackedLink } from '../common/TrackedLink';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export default function Journey() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Path & Milestones" heading="Journey & Certifications" />
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
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
      >
        {journeyItems.map((item) => {
          const Icon = item.icon as React.ComponentType<{
            className?: string;
          }>;

          return (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <TrackedLink
                className="group block h-full focus:outline-none"
                href={item.href}
                track={{
                  name: 'button_click',
                  data: {
                    buttonId: item.name,
                    section: 'journey',
                    action: item.href,
                  },
                }}
              >
                <Card className="relative flex h-full flex-col justify-between overflow-hidden border border-neutral-200/80 bg-neutral-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-800 shadow-xs dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                        <Icon className="size-5" />
                      </div>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>

                    <div>
                      {item.tag && (
                        <p className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                          {item.tag}
                        </p>
                      )}
                      <h3 className="mt-1 text-base font-semibold text-foreground tracking-tight transition-colors group-hover:text-primary sm:text-lg">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors group-hover:text-primary">
                    <span>
                      {item.href === '/journey'
                        ? 'Read timeline & history'
                        : 'View all certificates'}
                    </span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Card>
              </TrackedLink>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
