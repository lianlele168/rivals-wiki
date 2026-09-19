'use client';

import React from 'react';
import { Trophy, ShieldCheck } from 'lucide-react';
import { WEAPON_QUALITIES } from '@/data/wikiData';

export default function TierListClient() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-mono font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>REAL IN-GAME CLASSIFICATION — VERIFIED SEPT 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Rivals Weapon Quality Guide
        </h1>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Rivals does not ship an official S/A/B meta tier list — most tier pages on the web are opinions. What the game actually has is a quality system: Standard, Prime and Contraband bands, plus gamemode exclusives and a skin economy. Here is how it really works.
        </p>
      </div>

      <div className="space-y-4">
        {WEAPON_QUALITIES.map((q) => (
          <div key={q.name} className="p-6 rounded-2xl bg-[#080d19] border border-red-900/40 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-white font-mono flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                {q.name}
              </h3>
              <span className="text-[10px] uppercase font-mono text-gray-500">{q.name.includes('Skin') ? 'Cosmetics' : 'Quality band'}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{q.note}</p>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-[#080d19] border border-red-900/40">
        <p className="text-xs text-gray-400 leading-relaxed">
          <strong className="text-white">Why no S/A/B tiers?</strong> Weapon balance shifts with every update, and no source publishes verifiable per-weapon win rates. Rather than dress opinions up as data, this page documents the classification system the game actually uses. For per-weapon verified stats, see the <a href="/weapons" className="text-red-400 hover:underline">weapons database</a>.
        </p>
      </div>
    </div>
  );
}
