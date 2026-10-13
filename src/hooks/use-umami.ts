'use client';

import type { AnalyticsEvent } from '@/types/analytics';
import { useCallback } from 'react';

/**
 * Event tracking hook.
 */
export function useUmami() {
  const trackEvent = useCallback((_event: AnalyticsEvent) => {
    // No-op
  }, []);

  return { trackEvent };
}
