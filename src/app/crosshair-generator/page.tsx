import React from 'react';
import type { Metadata } from 'next';
import CrosshairGeneratorClient from './CrosshairGeneratorClient';

export const metadata: Metadata = {
  title: 'Roblox Rivals Crosshair Generator & Pro Codes ',
  description: 'Create custom static and dynamic crosshairs for Roblox Rivals. Customize dot size, inner line thickness, firing bloom, and export one-click import codes.',
  alternates: {
    canonical: '/crosshair-generator',
  },
  keywords: ['roblox rivals crosshair', 'rivals crosshair generator', 'best rivals crosshair codes', 'rivals dot crosshair'],
};

export default function CrosshairGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Roblox Rivals Crosshair Generator',
    url: 'https://rivals.robloxwikihub.com/crosshair-generator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    description: 'Custom crosshair generator and shareable code exporter for Roblox Rivals players.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CrosshairGeneratorClient />
    </>
  );
}
