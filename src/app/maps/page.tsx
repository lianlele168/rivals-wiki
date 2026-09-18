import React from 'react';
import type { Metadata } from 'next';
import MapsClient from './MapsClient';

export const metadata: Metadata = {
  title: 'Roblox Rivals Map Guide & Ranked Callouts ',
  description: 'Detailed competitive map guides for Roblox Rivals: Sightlines, high-ground advantages, health pack spawns, and sniper vantage spots.',
  alternates: {
    canonical: '/maps',
  },
  keywords: ['roblox rivals maps', 'rivals map callouts', 'rivals best sniper angles', 'rivals arena map'],
};

export default function MapsPage() {
  return <MapsClient />;
}
