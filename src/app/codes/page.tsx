import React from 'react';
import type { Metadata } from 'next';
import CodesClient from './CodesClient';
import { ACTIVE_CODES, FAQ_ITEMS } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Roblox Rivals Codes (September 2026) - Free Keys & Wrap Cases',
  description: 'Full list of working active Roblox Rivals codes for September 2026. Claim free weapon keys, community wraps, and coin boosters.',
  alternates: {
    canonical: '/codes',
  },
  keywords: ['roblox rivals codes', 'rivals promo codes', 'rivals keys', 'rivals codes september 2026'],
};

export default function CodesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I redeem codes in Roblox Rivals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spawn into the main lobby, open the Rewards or Codes menu from the bottom navigation bar, paste your active code, and hit Redeem.',
        },
      },
      {
        '@type': 'Question',
        name: 'What rewards do Rivals codes give?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rivals promo codes award free Weapon Keys for opening Wrap Cases, Cosmetic Finisher effects, and bonus Battle Pass EXP.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CodesClient />
    </>
  );
}
