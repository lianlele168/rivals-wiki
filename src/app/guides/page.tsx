'use client';

import React, { useState } from 'react';
import { BookOpen, Zap, Sliders, Monitor, ArrowRight, Check } from 'lucide-react';
import { GUIDES } from '@/data/wikiData';

export default function GuidesPage() {
  const [valSens, setValSens] = useState<number>(0.35);
  const [csSens, setCsSens] = useState<number>(1.2);

  const convertedRivalsSensFromVal = (valSens * 3.18).toFixed(2);
  const convertedRivalsSensFromCs = (csSens * 1.00).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-xs font-mono font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5 text-purple-400" />
          <span>PRO MOVEMENT & AIM GUIDES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Rivals Movement & Sensitivity Guides
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Master slide-canceling, convert mouse sensitivity from Valorant / CS2, and optimize graphics for max FPS.
        </p>
      </div>

      {/* Sensitivity Converter Calculator Tool */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#090f1d] to-[#040710] border border-purple-900/40 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">INTERACTIVE CALCULATOR</span>
          <h2 className="text-2xl font-black text-white font-mono flex items-center gap-2">
            <Sliders className="w-6 h-6 text-purple-400" />
            <span>Mouse Sensitivity Converter</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Convert your muscle memory sensitivity directly into Roblox Rivals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          {/* Valorant Converter */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white">Valorant → Rivals</h3>
            <div className="space-y-2">
              <label className="text-xs text-gray-400 block">Enter Valorant In-Game Sensitivity:</label>
              <input
                type="number"
                step="0.01"
                value={valSens}
                onChange={(e) => setValSens(Number(e.target.value))}
                className="w-full bg-slate-950 border border-purple-900/50 rounded-xl px-4 py-3 text-sm text-white font-bold focus:outline-none"
              />
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
              <span className="text-gray-400">Equivalent Rivals Sensitivity:</span>
              <span className="text-lg font-black text-purple-400 font-mono">{convertedRivalsSensFromVal}</span>
            </div>
          </div>

          {/* CS2 / Apex Converter */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white">CS2 / Apex → Rivals</h3>
            <div className="space-y-2">
              <label className="text-xs text-gray-400 block">Enter CS2 / Apex Sensitivity:</label>
              <input
                type="number"
                step="0.05"
                value={csSens}
                onChange={(e) => setCsSens(Number(e.target.value))}
                className="w-full bg-slate-950 border border-purple-900/50 rounded-xl px-4 py-3 text-sm text-white font-bold focus:outline-none"
              />
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
              <span className="text-gray-400">Equivalent Rivals Sensitivity:</span>
              <span className="text-lg font-black text-purple-400 font-mono">{convertedRivalsSensFromCs}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Written Guides Stack */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <span>Advanced Gameplay Tutorials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.map((g, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center font-mono text-[10px]">
                  <span className="px-2.5 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-bold">
                    {g.category}
                  </span>
                  <span className="text-gray-500">{g.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-mono">{g.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{g.summary}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800 font-mono text-[11px]">
                  {g.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
