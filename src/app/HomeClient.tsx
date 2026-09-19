'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Crosshair, Swords, Trophy, Key, MapPin, BookOpen, Sparkles, Copy, Check, ArrowRight, Flame, ShieldAlert, Zap } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';
import { GAME_INFO, ACTIVE_CODES, WEAPONS, WEAPON_QUALITIES, FAQ_ITEMS } from '@/data/wikiData';

export default function HomeClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const featureCards = [
    {
      title: "Interactive Crosshair Generator",
      desc: "Customize length, gap, dot size & color with live map background preview. Export codes in 1 click.",
      href: "/crosshair-generator",
      icon: Crosshair,
      color: "from-red-600 to-rose-600",
      badge: "HOT TOOL"
    },
    {
      title: "Weapon Database & TTK Calculator",
      desc: "Compare Headshot vs Body damage, Fire Rate (RPM), Reload Secs & Time-To-Kill @ 100/150 HP.",
      href: "/weapons",
      icon: Swords,
      color: "from-amber-600 to-orange-600",
      badge: "UPDATED"
    },
    {
      title: "2026 Meta Weapon Tier List",
      desc: "Rankings from S+ God Tier (Heavy Sniper, AR-47) to B Tier secondaries with meta analysis.",
      href: "/tier-list",
      icon: Trophy,
      color: "from-yellow-600 to-amber-500",
      badge: "S+ RANK"
    },
    {
      title: "Map Callouts & Strategy",
      desc: "Sniper sightlines, CQC flank vents, spawn perches, and objective strategies for all maps.",
      href: "/maps",
      icon: MapPin,
      color: "from-blue-600 to-cyan-600",
      badge: "STRATEGY"
    },
    {
      title: "Slide-Cancel & Aim Guides",
      desc: "Master unlimited sprint slide-cancels & convert sensitivity from Valorant, CS2 & Apex.",
      href: "/guides",
      icon: BookOpen,
      color: "from-purple-600 to-indigo-600",
      badge: "PRO GUIDE"
    },
    {
      title: "Verified Active Redeem Codes",
      desc: "100% working Roblox Rivals keys, skin wrap chests, and coin boost codes.",
      href: "/codes",
      icon: Key,
      color: "from-emerald-600 to-teal-600",
      badge: "KEYS"
    }
  ];

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* FAQPage JSON-LD Schema */}
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
            mainEntity: FAQ_ITEMS.map((faq) => ({
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 text-center space-y-8">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[350px] bg-red-600/10 blur-[130px] rounded-full" />
        </div>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800/50 text-red-300 text-xs font-mono font-bold shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span>2026 OFFICIAL ROBLOX RIVALS DATABASE</span>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-tight font-mono">
            DOMINATE ROBLOX RIVALS WITH <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              PRO CROSSHAIRS & TTK DATA
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Generate custom crosshair codes, calculate weapon TTK & damage thresholds, view 2026 meta rankings, and claim free weapon keys.
          </p>
        </div>

        {/* Hero Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/crosshair-generator"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-sm shadow-xl shadow-red-900/40 flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Crosshair className="w-5 h-5" />
            <span>Launch Crosshair Generator</span>
          </Link>
          <Link
            href="/weapons"
            className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-red-900/50 text-gray-200 font-bold text-sm flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Swords className="w-5 h-5 text-red-400" />
            <span>Weapon TTK Calculator</span>
          </Link>
        </div>

        {/* Game Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-left font-mono">
          {GAME_INFO.stats.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#090f1d] border border-red-900/30">
              <span className="text-[10px] text-gray-500 block uppercase font-bold">{stat.label}</span>
              <span className="text-sm font-extrabold text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AuthorCard Section */}
      <AuthorCard />

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 font-mono">
        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/rivals-hero.webp"
            alt="Roblox RIVALS Live Arena Dueling"
            width={640}
            height={360}
            className="rounded-xl object-cover w-full h-52 border border-red-950"
            priority
          />
          <p className="text-xs text-gray-400 mt-2 text-center">
            Figure 1: Official Nosniy Games RIVALS Live Arena — High speed dueling.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/rivals-icon.webp"
            alt="Roblox RIVALS Game Emblem"
            width={640}
            height={360}
            className="rounded-xl object-contain w-full h-52 bg-black/50 border border-red-950"
          />
          <p className="text-xs text-gray-400 mt-2 text-center">
            Figure 2: Official RIVALS Emblem — Ranked competitive badge.
          </p>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-red-900/30 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2 font-mono">
              <Target className="w-6 h-6 text-red-500" />
              <span>Interactive Toolkit & Guides</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">Select a tool or guide below to maximize your FPS gameplay</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group p-6 rounded-2xl bg-[#080d19] border border-red-950 hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-red-950/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#080d19] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-800/40">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors font-mono">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-center text-xs font-bold text-red-400 group-hover:text-red-300 font-mono">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active Codes Spotlight */}
      <section className="p-8 rounded-3xl bg-gradient-to-br from-[#090f1d] to-[#040710] border border-red-900/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-red-900/30 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-mono font-bold mb-2">
              <Zap className="w-3 h-3" />
              <span>TESTED & WORKING CODES</span>
            </div>
            <h2 className="text-2xl font-black text-white font-mono">Roblox Rivals Redeem Codes</h2>
          </div>
          <Link
            href="/codes"
            className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 font-mono"
          >
            <span>View All Codes ({ACTIVE_CODES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-base font-black text-yellow-400 block">{item.code}</span>
                <span className="text-xs text-gray-300 mt-1 block">{item.rewards}</span>
              </div>
              <button
                onClick={() => handleCopyCode(item.code)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors font-mono"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Meta Weapons Spotlight */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-red-900/30 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2 font-mono">
              <Flame className="w-6 h-6 text-amber-500" />
              <span>Top S+ Meta Guns</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">Highest DPS and fastest TTK weapons in current patch</p>
          </div>
          <Link href="/weapons" className="text-xs font-bold text-red-400 hover:text-red-300 font-mono">
            Full Weapon Specs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {WEAPONS.slice(0, 3).map((w, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#080d19] border border-red-900/30 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800">
                  {w.category}
                </span>
                <span className="text-xs font-mono font-black text-yellow-400">{w.quality}</span>
              </div>

              <div>
                <h3 className="font-extrabold text-lg text-white font-mono">{w.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{w.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div>
                  <span className="text-gray-500 block">Head Damage</span>
                  <span className="font-bold text-red-400 text-sm">{w.quality}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">100 HP TTK</span>
                  <span className="font-bold text-yellow-400 text-sm">{w.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-6">
        <h2 className="text-2xl font-bold text-white font-mono">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-red-300">{faq.question}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
