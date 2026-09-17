'use client';

import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

export default function SensitivityConverter() {
  const [valSens, setValSens] = useState<number>(0.35);
  const [csSens, setCsSens] = useState<number>(1.2);

  const convertedRivalsSensFromVal = (valSens * 3.18).toFixed(2);
  const convertedRivalsSensFromCs = (csSens * 1.00).toFixed(2);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#090f1d] to-[#040710] border border-red-900/40 space-y-6">
      <div>
        <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block">INTERACTIVE SENSITIVITY ENGINE</span>
        <h2 className="text-2xl font-black text-white font-mono flex items-center gap-2">
          <Sliders className="w-6 h-6 text-red-400" />
          <span>Competitive Mouse Sensitivity Converter</span>
        </h2>
        <p className="text-xs text-gray-400 mt-1">Convert your exact muscle memory sensitivity directly into Roblox Rivals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
        {/* Valorant Converter */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Valorant &rarr; Rivals</h3>
          <div className="space-y-2">
            <label className="text-xs text-gray-400 block">Enter Valorant In-Game Sensitivity:</label>
            <input
              type="number"
              step="0.01"
              value={valSens}
              onChange={(e) => setValSens(Number(e.target.value))}
              className="w-full bg-slate-950 border border-red-900/50 rounded-xl px-4 py-3 text-sm text-white font-bold focus:outline-none"
            />
          </div>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
            <span className="text-gray-400">Equivalent Rivals Sensitivity:</span>
            <span className="text-lg font-black text-red-400 font-mono">{convertedRivalsSensFromVal}</span>
          </div>
        </div>

        {/* CS2 Converter */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Counter-Strike 2 &rarr; Rivals</h3>
          <div className="space-y-2">
            <label className="text-xs text-gray-400 block">Enter CS2 In-Game Sensitivity:</label>
            <input
              type="number"
              step="0.01"
              value={csSens}
              onChange={(e) => setCsSens(Number(e.target.value))}
              className="w-full bg-slate-950 border border-red-900/50 rounded-xl px-4 py-3 text-sm text-white font-bold focus:outline-none"
            />
          </div>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
            <span className="text-gray-400">Equivalent Rivals Sensitivity:</span>
            <span className="text-lg font-black text-red-400 font-mono">{convertedRivalsSensFromCs}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
