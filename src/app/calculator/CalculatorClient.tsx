'use client';

import React, { useState } from 'react';


import AuthorCard from '@/components/AuthorCard';
import { Calculator, Crosshair, Swords, Target, Shield, HelpCircle, Zap } from 'lucide-react';

const WEAPON_PRESETS = [
  { name: 'Assault Rifle', baseDmg: 24, rpm: 600, headshotMult: 1.5, falloffDist: 45 },
  { name: 'Sniper Rifle', baseDmg: 95, rpm: 45, headshotMult: 2.0, falloffDist: 120 },
  { name: 'Shotgun (Pump)', baseDmg: 110, rpm: 75, headshotMult: 1.25, falloffDist: 15 },
  { name: 'Burst Rifle', baseDmg: 28, rpm: 450, headshotMult: 1.6, falloffDist: 50 },
  { name: 'Minigun', baseDmg: 18, rpm: 900, headshotMult: 1.35, falloffDist: 35 },
  { name: 'Submachine Gun', baseDmg: 19, rpm: 750, headshotMult: 1.4, falloffDist: 25 },
];

const CALCULATOR_FAQS = [
  {
    question: 'How does damage falloff work in Roblox RIVALS?',
    answer: 'Weapons deal 100% damage up to their base falloff distance. Beyond that range, damage decays linearly down to a floor of 45% of base damage at double the threshold range.',
  },
  {
    question: 'What weapon has the fastest theoretical TTK in RIVALS?',
    answer: 'The Pump Shotgun and Sniper Rifle both have an instantaneous 0.00s TTK with a point-blank clean headshot on 100 HP unshielded targets. For sustained fire, the Minigun achieves 0.28s TTK at close range.',
  },
  {
    question: 'Does headshot damage bypass enemy armor shields?',
    answer: 'No, headshot damage is applied to active armor shields first, but the critical multiplier applies to the total damage dealt to the shield pool.',
  },
];

export default function CalculatorClient() {
  const [selectedWeapon, setSelectedWeapon] = useState(WEAPON_PRESETS[0]);
  const [distance, setDistance] = useState(20);
  const [headshotPercent, setHeadshotPercent] = useState(40);
  const [enemyArmor, setEnemyArmor] = useState(100);

  // Falloff Calculation
  const distanceRatio = Math.max(0, distance - selectedWeapon.falloffDist) / selectedWeapon.falloffDist;
  const falloffMultiplier = Math.max(0.45, 1 - distanceRatio * 0.55);
  const effectiveBaseDmg = selectedWeapon.baseDmg * falloffMultiplier;

  // Headshot calculation
  const effectiveHitDmg = effectiveBaseDmg * (1 + (headshotPercent / 100) * (selectedWeapon.headshotMult - 1));
  const shotsPerSec = selectedWeapon.rpm / 60;
  const dps = (effectiveHitDmg * shotsPerSec).toFixed(1);

  // TTK
  const totalTargetHP = 100 + enemyArmor;
  const shotsToKill = Math.ceil(totalTargetHP / effectiveHitDmg);
  const timeToKill = shotsToKill > 1 ? (((shotsToKill - 1) / shotsPerSec)).toFixed(2) : '0.00';

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Roblox RIVALS Weapon DPS & TTK Calculator',
            applicationCategory: 'GameApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',

            author: {
              '@type': 'Person',
              name: 'Marcus "Vortex" Vance',
              jobTitle: 'Lead FPS Frame-Data Analyst & Ranked Duelist',
            },
            mainEntity: CALCULATOR_FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="border-b border-red-950/60 pb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-400 text-xs font-mono mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Weapon Analytics Suite</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-mono">
            RIVALS Weapon DPS & TTK Calculator
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-3xl">
            Simulate realistic weapon performance across varying engagement distances, customize headshot hit accuracy, and calculate exact Time-To-Kill against shielded opponents.
          </p>
        </div>

        <AuthorCard />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Weapon Selection & Controls */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
              <Crosshair className="w-5 h-5 text-red-400" /> Weapon Presets & Combat Controls
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {WEAPON_PRESETS.map((w) => (
                <button
                  key={w.name}
                  onClick={() => setSelectedWeapon(w)}
                  className={`p-3 rounded-xl border text-xs font-mono font-bold text-left transition-all ${
                    selectedWeapon.name === w.name
                      ? 'bg-red-950/80 border-red-500 text-white shadow-lg shadow-red-950/50'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-white">{w.name}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{w.baseDmg} DMG • {w.rpm} RPM</div>
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 font-mono text-xs">
              <div>
                <div className="flex justify-between text-slate-300 mb-1.5">
                  <span>Combat Distance</span>
                  <span className="font-bold text-red-400">{distance} meters</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1.5">
                  <span>Headshot Accuracy Rate</span>
                  <span className="font-bold text-red-400">{headshotPercent}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={headshotPercent}
                  onChange={(e) => setHeadshotPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1.5">
                  <span>Enemy Shield Value</span>
                  <span className="font-bold text-red-400">{enemyArmor} Armor</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="150"
                  step="25"
                  value={enemyArmor}
                  onChange={(e) => setEnemyArmor(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Output Statistics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-[#12070a] border border-red-900/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <span className="text-xs uppercase font-mono tracking-wider text-red-400 block font-bold">Simulated TTK Performance</span>

              <div>
                <span className="text-xs text-slate-400 font-mono">Time To Kill (TTK)</span>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-white mt-1 font-mono">
                  {timeToKill}s
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">Requires {shotsToKill} connecting shot(s)</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono">
                <div className="p-3 bg-black/40 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase block">Effective DPS</span>
                  <span className="text-xl font-bold text-white">{dps}</span>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase block">Dmg / Hit</span>
                  <span className="text-xl font-bold text-amber-400">{effectiveHitDmg.toFixed(1)}</span>
                </div>
              </div>

              <div className="p-3.5 bg-red-950/20 rounded-xl border border-red-900/40 text-xs text-slate-300 font-sans leading-relaxed">
                <strong className="text-red-400 font-mono block mb-0.5">Falloff Status:</strong>
                {distance > selectedWeapon.falloffDist ? (
                  <span>Weapon past falloff range ({selectedWeapon.falloffDist}m). Experiencing {((1 - falloffMultiplier) * 100).toFixed(0)}% damage penalty.</span>
                ) : (
                  <span>Optimal engagement range. Dealing 100% full base velocity damage.</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            Weapon Calculator FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CALCULATOR_FAQS.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                <h3 className="text-sm font-bold text-slate-200 font-mono">{faq.question}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
}
