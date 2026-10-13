import { petConfig } from '@/config/Cat';
import Script from 'next/script';
import React from 'react';

export default function OnekoCat() {
  if (!petConfig.enabled) {
    return null;
  }

  const sprite =
    petConfig.pet === 'cat' ? '/oneko/oneko.gif' : '/oneko/dog.png';

  return (
    <Script
      src="/oneko/oneko.js"
      data-cat={sprite}
      data-dog={sprite}
      strategy="afterInteractive"
    />
  );
}
