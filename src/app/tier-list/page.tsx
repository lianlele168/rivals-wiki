import React from 'react';
import type { Metadata } from 'next';
import TierListClient from './TierListClient';
import { TIER_LIST } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Roblox Rivals Weapon & Utility Tier List (September 2026)',
  description: 'Ranked tier list of best Primary weapons, Secondaries, and Utilities in Roblox Rivals. Evaluated by competitive duel winrates, recoil, and TTK.',
  alternates: {
    canonical: '/tier-list',
  },
  keywords: ['roblox rivals tier list', 'best weapon in rivals', 'rivals meta ranking', 'rivals assault rifle vs burst'],
};

export default function TierListPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Roblox Rivals Ranked Weapon Tier List',
    description: 'Competitive ranking of weapons and tactical utility items in Roblox Rivals.',
    numberOfItems: TIER_LIST.length,
    itemListElement: TIER_LIST.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      description: `${item.tier} Tier ${item.category} weapon. ${item.reason || ''}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <TierListClient />
    </>
  );
}
