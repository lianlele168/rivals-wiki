'use client';

import React, { useState } from 'react';
import { Swords, Zap, Shield, Flame, Search, ArrowUpDown, Filter, Sparkles } from 'lucide-react';
import { WEAPONS, WeaponData } from '@/data/wikiData';

export default function WeaponsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [armorHp, setArmorHp] = useState<100 | 150>(100);

  const [compareGun1, setCompareGun1] = useState<WeaponData>(WEAPONS[0]);
  const [compareGun2, setCompareGun2] = useState<WeaponData>(WEAPONS[1]);

  const categories = ['All', 'Primary', 'Secondary', 'Melee', 'Utility'];

  const filteredWeapons = WEAPONS.filter((w) => {
    const matchesCategory = selectedCategory === 'All' || w.category === selectedCategory;
    const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase()) || w.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-300 text-xs font-mono font-bold mb-3">
          <Swords className="w-3.5 h-3.5 text-red-400" />
          <span>ROBLOX RIVALS WEAPON DATABASE & SPECS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Rivals Weapon Database & TTK Calculator
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Detailed damage stats, fire rate (RPM), headshot multipliers, reload speeds, and side-by-side Time-to-Kill (TTK) comparison.
        </p>
      </div>

      {/* Interactive TTK Comparison Bar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#09101f] to-[#040810] border border-red-900/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-red-900/30 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block">INTERACTIVE SIMULATOR</span>
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Side-by-Side TTK Duel Calculator</span>
            </h2>
          </div>

          {/* Armor HP Toggle */}
          <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 font-mono text-xs">
            <span className="text-gray-400 font-bold px-2">Target Armor:</span>
            <button
              onClick={() => setArmorHp(100)}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                armorHp === 100 ? 'bg-red-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              100 HP (Normal)
            </button>
            <button
              onClick={() => setArmorHp(150)}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                armorHp === 150 ? 'bg-amber-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              150 HP (Heavy Armor)
            </button>
          </div>
        </div>

        {/* Side-by-Side Gun Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gun 1 Selector */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-gray-400">Weapon A</span>
              <select
                value={compareGun1.id}
                onChange={(e) => setCompareGun1(WEAPONS.find((w) => w.id === e.target.value) || WEAPONS[0])}
                className="bg-slate-950 border border-red-900/40 text-white text-xs font-mono font-bold rounded-xl px-3 py-2 focus:outline-none"
              >
                {WEAPONS.map((w) => (
                  <option key={w.id} value={w.id}>{w.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <h3 className="text-base font-black text-white">{compareGun1.name}</h3>
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800">
                <div>
                  <span className="text-gray-500 block">Head Damage</span>
                  <span className="font-bold text-red-400 text-sm">{compareGun1.headshotDamage} HP</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Fire Rate</span>
                  <span className="font-bold text-yellow-400 text-sm">{compareGun1.fireRateRPM} RPM</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Time to Kill ({armorHp}HP)</span>
                  <span className="font-extrabold text-emerald-400 text-base">
                    {armorHp === 100 ? compareGun1.ttk100hp : compareGun1.ttk150hp}s
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Reload Speed</span>
                  <span className="font-bold text-gray-300">{compareGun1.reloadTimeSec}s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gun 2 Selector */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-gray-400">Weapon B</span>
              <select
                value={compareGun2.id}
                onChange={(e) => setCompareGun2(WEAPONS.find((w) => w.id === e.target.value) || WEAPONS[1])}
                className="bg-slate-950 border border-red-900/40 text-white text-xs font-mono font-bold rounded-xl px-3 py-2 focus:outline-none"
              >
                {WEAPONS.map((w) => (
                  <option key={w.id} value={w.id}>{w.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <h3 className="text-base font-black text-white">{compareGun2.name}</h3>
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800">
                <div>
                  <span className="text-gray-500 block">Head Damage</span>
                  <span className="font-bold text-red-400 text-sm">{compareGun2.headshotDamage} HP</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Fire Rate</span>
                  <span className="font-bold text-yellow-400 text-sm">{compareGun2.fireRateRPM} RPM</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Time to Kill ({armorHp}HP)</span>
                  <span className="font-extrabold text-emerald-400 text-base">
                    {armorHp === 100 ? compareGun2.ttk100hp : compareGun2.ttk150hp}s
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Reload Speed</span>
                  <span className="font-bold text-gray-300">{compareGun2.reloadTimeSec}s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#080d19] p-1.5 rounded-2xl border border-slate-800 w-full sm:w-auto font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search weapon name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#080d19] border border-slate-800 rounded-2xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 font-mono"
          />
        </div>
      </div>

      {/* Weapon Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWeapons.map((w) => (
          <div
            key={w.id}
            className="p-6 rounded-3xl bg-[#080d19] border border-red-950 hover:border-red-600/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-800">
                  {w.category}
                </span>
                <span className="text-xs font-black text-yellow-400">{w.rarity}</span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white font-mono">{w.name}</h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{w.description}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-3 border-t border-slate-800">
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] text-gray-500 block">Headshot</span>
                  <span className="font-extrabold text-red-400 text-sm">{w.headshotDamage} HP</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] text-gray-500 block">Body Damage</span>
                  <span className="font-bold text-gray-200 text-sm">{w.bodyDamage} HP</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] text-gray-500 block">Fire Rate</span>
                  <span className="font-bold text-yellow-400 text-sm">{w.fireRateRPM} RPM</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] text-gray-500 block">Mag Size</span>
                  <span className="font-bold text-cyan-400 text-sm">{w.magazineSize} rds</span>
                </div>
              </div>

              {/* Pro Tip Box */}
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-300/90 leading-relaxed font-mono">
                <strong>💡 Pro Tip:</strong> {w.proTip}
              </div>
            </div>

            <div className="pt-2 text-[10px] font-mono text-gray-500 flex justify-between items-center border-t border-slate-800">
              <span>Effective: {w.effectiveRange}</span>
              <span>Reload: {w.reloadTimeSec}s</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
