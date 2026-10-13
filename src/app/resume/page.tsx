import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Sayandeep Saha — Computer Science & Engineering, KGEC
          </p>
          <div className="flex justify-center pt-2">
            <a
              href={resumeConfig.url}
              download="Sayandeep_Saha_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 shadow-md"
            >
              Download PDF Resume
            </a>
          </div>
        </div>
        <Separator />
        <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl bg-neutral-900">
          <iframe
            src={resumeConfig.url}
            className="h-[800px] w-full"
            title="Sayandeep Saha Resume"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
