import React from 'react';
import type { Metadata } from 'next';
import WeaponsClient from './WeaponsClient';
import { WEAPONS } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Roblox Rivals Weapon Database & Stat Inspector (September 2026)',
  description: 'Comprehensive specs for every weapon in Roblox Rivals: Fire rate, magazine size, headshot multipliers, recoil spread patterns, and reload speeds.',
  alternates: {
    canonical: '/weapons',
  },
  keywords: ['roblox rivals weapons', 'rivals weapon stats', 'rivals damage charts', 'rivals sniper reload time'],
};

export default function WeaponsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Roblox Rivals Weapon Index',
    description: 'Full weapon specs and performance data for Roblox Rivals.',
    numberOfItems: WEAPONS.length,
    itemListElement: WEAPONS.map((w, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: w.name,
      description: `${w.category} weapon dealing ${w.bodyDamage} body damage at ${w.fireRateRPM} RPM.`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <WeaponsClient />
    </>
  );
}
