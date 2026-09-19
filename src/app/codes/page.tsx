import React from 'react';
import type { Metadata } from 'next';
import CodesClient from './CodesClient';
import { ACTIVE_CODES, FAQ_ITEMS } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Roblox Rivals Codes - Free Keys & Wrap Cases',
  description: 'Full list of working active Roblox Rivals codes. Claim free weapon keys, Community Wraps, Pearls, and Goodie Bags — with exact rewards and the follow requirements.',
  alternates: {
    canonical: '/codes',
  },
  keywords: ['roblox rivals codes', 'rivals promo codes', 'rivals keys', 'rivals codes '],
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
          text: 'Spawn into the main lobby, open the Shop and select More then Codes (or open Rewards from the bottom menu), paste your active code, and hit Redeem. Note that the redeem box stays locked until you follow Nosniy and SenseiWarrior on Roblox, join the Nosniy Games group, and follow @NosniyGames and @Sensei_RBX on X, then press Verify.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my Rivals code not working?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Milestone codes like FREE198 expire as soon as the next milestone code drops, so redeem them quickly. Also check the exact spelling, and make sure you cleared the follow requirements — following Nosniy and SenseiWarrior on Roblox, joining the Nosniy Games group, and following the developers on X — before pressing Verify.',
        },
      },
      {
        '@type': 'Question',
        name: 'When do new Rivals codes come out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'New codes usually arrive with game updates, player milestones, and seasonal events. The FREE1xx series increases by one with each major update — a new milestone code normally retires the previous one, so old FREE codes stop working fast.',
        },
      },
      {
        '@type': 'Question',
        name: 'What rewards do Rivals codes give?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rivals promo codes award free Weapon Keys for unlocking weapons and opening Wrap Cases, random Community Wraps for your weapons, plus event loot such as Goodie Bags, Pearls, and Tropical Chests.',
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
