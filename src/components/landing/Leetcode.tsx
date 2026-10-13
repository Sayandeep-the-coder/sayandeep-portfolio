'use client';

import Link from 'next/link';
import React from 'react';

import Container from '../common/Container';
import { Button } from '../ui/button';

export default function Leetcode() {
  const username = 'Sayandeep_005';
  const profileUrl = `https://leetcode.com/u/${username}/`;

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg bg-[#FFA116]/10 text-[#FFA116]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.815 3.652 5.96 5.96 0 0 0 2.65-.248 5.765 5.765 0 0 0 2.215-1.372l3.854-4.126 5.406-5.788A1.375 1.375 0 0 0 20.32.96 1.374 1.374 0 0 0 19.359.522 1.374 1.374 0 0 0 18.398.084h-4.915zm-2.096 10.975a1.375 1.375 0 0 0-.961.438l-4.92 5.267a2.76 2.76 0 0 0-.62 1.084 2.82 2.82 0 0 0-.032 1.155 3.01 3.01 0 0 0 2.45 1.858 3.06 3.06 0 0 0 1.348-.127 2.96 2.96 0 0 0 1.127-.7l4.92-5.267a1.375 1.375 0 0 0-.961-2.316h-2.351z" />
                </svg>
              </span>
              <h2 className="text-foreground text-2xl font-bold">
                LeetCode Activity
              </h2>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              Algorithmic problem solving & competitive programming stats
            </p>
          </div>

          <Button variant="outline" asChild size="sm">
            <Link
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span>View LeetCode Profile</span>
              <svg
                className="size-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-4">
            <p className="text-xs font-medium text-neutral-500">Total Solved</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              250+
            </p>
            <p className="mt-1 text-[11px] text-neutral-400">DSA & Algorithms</p>
          </div>

          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-emerald-500">Easy</p>
              <span className="size-2 rounded-full bg-emerald-500" />
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              110+
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div className="h-full rounded-full bg-emerald-500 w-[75%]" />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-amber-500">Medium</p>
              <span className="size-2 rounded-full bg-amber-500" />
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              120+
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div className="h-full rounded-full bg-amber-500 w-[60%]" />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-rose-500">Hard</p>
              <span className="size-2 rounded-full bg-rose-500" />
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              20+
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div className="h-full rounded-full bg-rose-500 w-[30%]" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
