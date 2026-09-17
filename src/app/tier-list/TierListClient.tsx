'use client';

import React, { useState } from 'react';
import { Trophy, Flame, Shield, Filter, Sparkles, Swords } from 'lucide-react';
import { TIER_LIST, TierItem } from '@/data/wikiData';

export default function TierListClient() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Primary', 'Secondary', 'Melee', 'Utility'];

  const filteredTierItems = TIER_LIST.filter(
    (item) => selectedCat === 'All' || item.category === selectedCat
  );

  const tiers: ('S+' | 'S' | 'A' | 'B')[] = ['S+', 'S', 'A', 'B'];

  const tierColors = {
    'S+': 'from-red-600 via-rose-600 to-amber-500 border-red-500 text-red-400',
    'S': 'from-amber-500 to-yellow-600 border-yellow-500 text-yellow-400',
    'A': 'from-cyan-500 to-blue-600 border-cyan-500 text-cyan-400',
    'B': 'from-slate-600 to-gray-700 border-gray-600 text-gray-400'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-300 text-xs font-mono font-bold mb-3">
          <Trophy className="w-3.5 h-3.5 text-yellow-400" />
          <span>2026 OFFICIAL RANKED META RANKINGS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Roblox Rivals Weapon & Utility Tier List
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Evaluated based on Time-to-Kill (TTK), headshot lethality, recoil controllability, and competitive ranked duel performance.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-[#080d19] p-2 rounded-2xl border border-slate-800 font-mono text-xs max-w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              selectedCat === cat
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tier List Stack */}
      <div className="space-y-8">
        {tiers.map((tier) => {
          const itemsInTier = filteredTierItems.filter((i) => i.tier === tier);
          if (itemsInTier.length === 0) return null;

          return (
            <div key={tier} className="p-6 rounded-3xl bg-[#080d19] border border-red-950 space-y-4">
              {/* Tier Header Badge */}
              <div className="flex items-center space-x-3">
                <div className={`w-14 h-12 rounded-2xl bg-gradient-to-r ${tierColors[tier]} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-[#080d19] rounded-[14px] flex items-center justify-center font-black font-mono text-xl text-white">
                    {tier}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white font-mono">
                    {tier === 'S+' ? 'God Tier Meta' : tier === 'S' ? 'Meta Dominant' : tier === 'A' ? 'Strong / Situational' : 'Balanced'}
                  </h2>
                  <span className="text-xs text-gray-400 font-mono">{itemsInTier.length} Weapons in this Tier</span>
                </div>
              </div>

              {/* Weapon Cards in Tier */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itemsInTier.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
                  >
                    <div className="flex justify-between items-center font-mono">
                      <span className="font-extrabold text-white text-base">{item.name}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-red-950 text-red-400 rounded border border-red-800">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed">{item.reason}</p>

                    <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-yellow-400 font-bold">
                      ⚡ {item.statsSummary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
