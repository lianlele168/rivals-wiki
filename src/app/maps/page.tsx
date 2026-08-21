'use client';

import React, { useState } from 'react';
import { MapPin, Target, Shield, Compass, Sparkles, Navigation } from 'lucide-react';
import { MAPS, MapGuide } from '@/data/wikiData';

export default function MapsPage() {
  const [activeMapId, setActiveMapId] = useState<string>(MAPS[0].id);

  const activeMap = MAPS.find((m) => m.id === activeMapId) || MAPS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-300 text-xs font-mono font-bold mb-3">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>MAP CALLOUTS & POSITIONING STRATEGY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Roblox Rivals Map Strategy Guides
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Master CQC flank routes, high-ground sniper perches, objective choke points, and tactical callouts across all competitive maps.
        </p>
      </div>

      {/* Map Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {MAPS.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMapId(m.id)}
            className={`p-5 rounded-3xl border text-left transition-all font-mono space-y-2 ${
              activeMapId === m.id
                ? 'bg-gradient-to-br from-red-950 to-slate-900 border-red-500 shadow-xl shadow-red-950/50'
                : 'bg-[#080d19] border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="text-[10px] text-red-400 uppercase font-bold block">{m.environment}</span>
            <h2 className="text-lg font-black text-white">{m.name}</h2>
            <p className="text-xs text-gray-400 line-clamp-1">{m.playstyle}</p>
          </button>
        ))}
      </div>

      {/* Active Map Detail Card */}
      <div className="p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-800 text-xs font-mono font-bold">
              {activeMap.environment}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 text-yellow-400 border border-slate-800 text-xs font-mono">
              Recommended Playstyle: {activeMap.playstyle}
            </span>
          </div>

          <h2 className="text-3xl font-black text-white font-mono">{activeMap.name} Overview</h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">{activeMap.description}</p>
        </div>

        {/* Map Callouts Grid */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-mono">
            <Navigation className="w-5 h-5 text-blue-400" />
            <span>Essential Map Callouts</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {activeMap.callouts.map((call, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center font-mono"
              >
                <span className="text-xs font-extrabold text-white block">{call}</span>
                <span className="text-[10px] text-gray-500">Key Location #{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strategies Checklist */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-mono">
            <Compass className="w-5 h-5 text-amber-400" />
            <span>Tactical Recommendations & Positioning</span>
          </h3>

          <div className="space-y-3 font-mono text-xs">
            {activeMap.keyStrategies.map((strat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start space-x-3"
              >
                <div className="w-6 h-6 rounded-lg bg-red-950 text-red-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-gray-300 leading-relaxed">{strat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
