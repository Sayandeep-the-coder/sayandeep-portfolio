'use client';

import { type Project } from '@/types/project';
import { motion } from 'motion/react';
import React from 'react';

import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export function ProjectList({ projects, className }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ${className}`}
    >
      {projects.map((project: Project, index: number) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{
            duration: 0.45,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
