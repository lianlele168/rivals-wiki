import React from 'react';
import type { Metadata } from 'next';
import TierListClient from './TierListClient';
import { WEAPON_QUALITIES } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Roblox Rivals Weapon & Utility Tier List ',
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
    numberOfItems: WEAPON_QUALITIES.length,
    itemListElement: WEAPON_QUALITIES.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      description: item.note,
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
