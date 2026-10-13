'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export interface Certificate {
  file: string;
  title?: string;
  issuer?: string;
  date?: string;
  credentialUrl?: string;
  credentialId?: string;
}

interface CertificatesGalleryProps {
  certificates: Certificate[];
  className?: string;
}

export default function CertificatesGallery({
  certificates,
  className,
}: CertificatesGalleryProps) {
  const [active, setActive] = useState<string | null>(null);

  if (certificates.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">No certificates found</h2>
        <p className="text-muted-foreground">
          Check back later for certificates and achievements!
        </p>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ${className || ''}`}
      >
        {certificates.map((cert) => (
          <Card
            key={cert.file}
            className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700"
            onClick={() => setActive(cert.file)}
          >
            <CardHeader className="p-0">
              <div className="group bg-muted/20 relative aspect-video w-full overflow-hidden border-b border-neutral-200/60 dark:border-neutral-800/60">
                <Image
                  src={cert.file}
                  alt={cert.title || 'certificate'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                  <span className="text-xs font-medium text-white flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <Maximize2 className="size-3.5" />
                    Click to inspect credential
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-6 pt-5 pb-3">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {cert.title || 'Certificate'}
                </h3>
                {cert.issuer && (
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {cert.issuer}
                  </p>
                )}
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center justify-between gap-2 px-6 pb-5 pt-0 mt-auto">
              {cert.date && (
                <time
                  className="text-xs font-medium text-neutral-400 dark:text-neutral-500"
                  dateTime={cert.date}
                >
                  Issued on {formatDate(cert.date)}
                </time>
              )}
              {cert.credentialId && (
                <span className="rounded-md border border-neutral-200 bg-neutral-100/80 px-2 py-0.5 text-[10px] font-mono text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-400">
                  ID: {cert.credentialId}
                </span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Fullscreen viewer */}
      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="bg-background/95 max-h-[92vh] w-full max-w-[92vw] md:max-w-4xl border border-neutral-200 dark:border-neutral-800 p-0 backdrop-blur-md overflow-hidden rounded-2xl shadow-2xl">
          {active && (() => {
            const currentCert = certificates.find((c) => c.file === active);
            return (
              <>
                <DialogTitle className="sr-only">
                  {currentCert?.title || 'Certificate'}
                </DialogTitle>
                <div className="flex h-[320px] sm:h-[440px] md:h-[540px] items-center justify-center p-4 bg-black/40">
                  <div className="relative h-full w-full rounded-lg">
                    <Image
                      src={active}
                      alt={currentCert?.title || 'certificate'}
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
                {currentCert && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-neutral-200 dark:border-neutral-800 bg-background px-6 py-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {currentCert.title || 'Certificate'}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        {currentCert.issuer && (
                          <span>{currentCert.issuer}</span>
                        )}
                        {currentCert.date && (
                          <span>• {formatDate(currentCert.date)}</span>
                        )}
                        {currentCert.credentialId && (
                          <span>• ID: {currentCert.credentialId}</span>
                        )}
                      </div>
                    </div>
                    {currentCert.credentialUrl && (
                      <a
                        href={currentCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-neutral-200 bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                )}
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </>
  );
}
