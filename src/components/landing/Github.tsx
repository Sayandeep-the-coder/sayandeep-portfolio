'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Container from '../common/Container';
import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

import { motion } from 'motion/react';
import TextAnimate from '../common/TextAnimate';

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';
};

// Helper function to filter contributions to past year
function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setHasError(false);

        let data: {
          total?: Record<string, number>;
          contributions?: unknown[];
        } | null = null;

        // 1. Try local API route
        try {
          const res = await fetch(
            `${githubConfig.apiUrl}?username=${githubConfig.username}`,
          );
          if (res.ok) {
            data = await res.json();
          }
        } catch {
          // ignore, proceed to fallback
        }

        // 2. Direct external fallback if local endpoint returned nothing
        if (!data?.contributions || !Array.isArray(data.contributions)) {
          try {
            const fallbackRes = await fetch(
              `https://github-contributions-api.jogruber.de/v4/${githubConfig.username}?y=last`,
            );
            if (fallbackRes.ok) {
              data = await fallbackRes.json();
            }
          } catch {
            // ignore
          }
        }

        if (data?.contributions && Array.isArray(data.contributions)) {
          const flattened = data.contributions.flat();

          const contributionLevelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          };

          const validContributions: ContributionItem[] = [];

          for (const item of flattened) {
            if (typeof item === 'object' && item !== null && 'date' in item) {
              const record = item as Record<string, unknown>;
              const date = String(record.date);
              const count = Number(
                record.count ?? record.contributionCount ?? 0,
              );
              let level: 0 | 1 | 2 | 3 | 4 = 0;

              if (typeof record.level === 'number') {
                level = Math.min(Math.max(record.level, 0), 4) as 0 | 1 | 2 | 3 | 4;
              } else if (typeof record.contributionLevel === 'string') {
                level = contributionLevelMap[record.contributionLevel] ?? 0;
              } else if (count > 0) {
                level = count >= 10 ? 4 : count >= 5 ? 3 : count >= 2 ? 2 : 1;
              }

              validContributions.push({ date, count, level });
            }
          }

          if (validContributions.length > 0) {
            validContributions.sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
            );

            const filtered =
              validContributions.length > 366
                ? filterLastYear(validContributions)
                : validContributions;

            const total =
              data.total?.lastYear ??
              filtered.reduce((sum, item) => sum + item.count, 0);

            setTotalContributions(total);
            setContributions(filtered);
            setHasError(false);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error('Failed to fetch GitHub contributions:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">
              <TextAnimate text={githubConfig.title} />
            </h2>
            <p className="text-muted-foreground text-sm">
              <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
            </p>
            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total:{' '}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{' '}
                contributions
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"></div>
              <p className="text-muted-foreground text-sm">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <GithubIcon className="h-8 w-8" />
            </div>
            <p className="mb-2 font-medium">{githubConfig.errorState.title}</p>
            <p className="mb-4 text-sm">
              {githubConfig.errorState.description}
            </p>
            <Button
              variant="outline"
              asChild
              track={{
                name: 'external_link_click',
                data: {
                  url: `https://github.com/${githubConfig.username}`,
                  text: githubConfig.errorState.buttonText,
                  location: 'github_section',
                },
              }}
            >
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="bg-background/50 relative rounded-lg border border-dashed border-black/20 p-6 backdrop-blur-sm dark:border-white/10">
              <div className="w-full overflow-x-auto">
                <ActivityCalendar
                  data={contributions}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={githubConfig.fontSize}
                  colorScheme={theme === 'dark' ? 'dark' : 'light'}
                  maxLevel={githubConfig.maxLevel}
                  hideTotalCount={true}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  theme={githubConfig.theme}
                  labels={{
                    months: githubConfig.months,
                    weekdays: githubConfig.weekdays,
                    totalCount: githubConfig.totalCountLabel,
                  }}
                  style={{
                    color: 'rgb(139, 148, 158)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Container>
  );
}
