import React from 'react';
import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Roblox Rivals TTK & Weapon Damage Calculator | Roblox',
  description: 'Interactive TTK calculator for Roblox Rivals. Calculate headshot multipliers, effective damage falloff at range, and bullets-to-kill against shielded opponents.',
  alternates: {
    canonical: '/calculator',
  },
  keywords: [
    'roblox rivals ttk calculator',
    'rivals weapon damage',
    'rivals time to kill',
    'rivals assault rifle damage',
    'rivals pump shotgun headshot'
  ],
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Roblox Rivals TTK & Damage Calculator',
    url: 'https://rivals.robloxwikihub.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    description: 'Real-time Time-to-Kill and damage falloff calculator for weapons in Roblox Rivals.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorClient />
    </>
  );
}
