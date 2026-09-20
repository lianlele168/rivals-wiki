'use client';

import React, { useState } from 'react';
import { Crosshair, Search, ShieldCheck } from 'lucide-react';
import { WEAPONS } from '@/data/wikiData';

export default function WeaponsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Primary', 'Secondary', 'Melee'];
  const filtered = WEAPONS.filter((w) => {
    const matchesCategory = selectedCategory === 'All' || w.category === selectedCategory;
    const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-mono font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>ALL {WEAPONS.length} WEAPON NAMES SOURCED — SEPT 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Rivals Weapons Database
        </h1>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Every weapon name on this page was verified against the community wikis. Numeric stats appear only where a source documents them — the rest are honestly marked &ldquo;value not documented&rdquo; instead of filled with invented numbers.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center p-1 bg-gray-900/80 border border-gray-800 rounded-xl w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search weapons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900/80 border border-gray-800 rounded-xl pl-9 pr-4 py-2 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((w) => (
          <div key={w.id} className="p-5 rounded-2xl bg-[#080d19] border border-red-900/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono text-gray-400 border border-gray-800 px-2 py-0.5 rounded">{w.category}</span>
              <span className={`text-[10px] uppercase font-mono font-black px-2 py-0.5 rounded ${
                w.quality === 'Standard' ? 'bg-slate-800 text-slate-300' :
                w.quality === 'Prime' ? 'bg-amber-500/20 text-amber-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {w.quality}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white font-mono">{w.name}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{w.description}</p>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-500 font-mono mb-1">
                <Crosshair className="w-3 h-3" /> Stats
              </div>
              <p className="text-xs text-gray-200 font-mono leading-relaxed">{w.stats}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="p-12 text-center text-gray-400 border border-slate-800 rounded-2xl">
          No weapons match your search.
        </div>
      )}
    </div>
  );
}
