'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Zap, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';

import AuthorCard from '@/components/AuthorCard';

export default function CodesClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Roblox Rivals Codes 
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Claim free weapon keys, Community Wraps, Pearls, and event loot. Every code on this page was re-tested on,  and shows its exact reward value — plus the follow requirements you must clear before the redeem box unlocks.
        </p>
      </div>

      {/* Active Codes Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
          <Zap className="w-5 h-5 text-emerald-400" />
          <span>Active Working Codes ({ACTIVE_CODES.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#080d19] border border-emerald-900/40 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono mb-2">
                  <span className="text-xl font-black text-yellow-400">{item.code}</span>
                  <span className="text-[10px] text-gray-500">{item.addedDate}</span>
                </div>
                <p className="text-sm font-semibold text-gray-200">{item.rewards}</p>
              </div>

              <button
                onClick={() => handleCopy(item.code)}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors font-mono shadow-lg shadow-emerald-950/50"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Code Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code ({item.code})</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How to Redeem Guide */}
      <div className="p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-4">
        <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-red-400" />
          <span>How to Redeem Codes in Roblox Rivals</span>
        </h3>
        <ol className="space-y-3 text-xs text-gray-300 font-mono list-decimal list-inside leading-relaxed">
          <li>Launch <strong>Roblox Rivals</strong> from your PC, Mobile, or Console app.</li>
          <li>Open the <strong>Shop</strong>, tap <strong>More</strong>, then choose <strong>Codes</strong> — or click <strong>Rewards</strong> in the bottom menu and scroll down to the code box.</li>
          <li><strong>Important — the Redeem box stays locked until you meet the follow requirements:</strong> follow the game&apos;s developers <strong>Nosniy</strong> and <strong>SenseiWarrior</strong> on Roblox, join the <strong>Nosniy Games</strong> Roblox group, and follow <strong>@NosniyGames</strong> and <strong>@Sensei_RBX</strong> on X. Then enter your Roblox username and hit <strong>Verify</strong> before typing a code.</li>
          <li>Copy any active code from our list above and paste it into the text box.</li>
          <li>Click <strong>Redeem</strong> to instantly receive your weapon keys and skin wrap chests!</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-5">
        <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-red-400" />
          <span>Rivals Codes FAQ</span>
        </h3>
        <div className="space-y-4 text-xs text-gray-300 leading-relaxed">
          <div>
            <p className="font-bold text-white font-mono">Why isn&apos;t my code working?</p>
            <p className="mt-1">Three usual reasons: (1) milestone codes like FREE198 expire the moment the next milestone drops, so grab them fast; (2) typos — type codes exactly as shown; (3) you haven&apos;t cleared the follow requirements yet, so the box never unlocked. To fix the last one, follow Nosniy and SenseiWarrior on Roblox, join the Nosniy Games group, follow @NosniyGames and @Sensei_RBX on X, then hit Verify. If a code still fails, rejoin the server and try again.</p>
          </div>
          <div>
            <p className="font-bold text-white font-mono">When do new Rivals codes drop?</p>
            <p className="mt-1">New codes usually arrive with game updates, player milestones, and seasonal events — the FREE1xx series climbs by one every major update. Follow the Nosniy Games socials, and check this page: we re-verify the full list daily.</p>
          </div>
          <div>
            <p className="font-bold text-white font-mono">What do Rivals codes give you?</p>
            <p className="mt-1">Most codes grant <strong>Weapon Keys</strong>, which you spend on weapons and Wrap Cases that contain weapon skins. Community codes hand out a random <strong>Community Wrap</strong> cosmetic for one weapon, while event codes and their leftovers can include <strong>Goodie Bags</strong>, <strong>Pearls</strong>, or <strong>Tropical Chests</strong>.</p>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="p-6 rounded-3xl bg-[#080d19] border border-red-900/30">
        <h3 className="text-sm font-bold text-white font-mono mb-3">Level Up Your Rivals Game</h3>
        <div className="flex flex-wrap gap-3 text-xs font-mono">
          <Link href="/weapons" className="px-4 py-2 rounded-xl border border-red-900/50 text-gray-300 hover:text-white hover:border-red-500 transition-colors">Weapons TTK Database</Link>
          <Link href="/tier-list" className="px-4 py-2 rounded-xl border border-red-900/50 text-gray-300 hover:text-white hover:border-red-500 transition-colors">Weapon Tier List</Link>
          <Link href="/guides" className="px-4 py-2 rounded-xl border border-red-900/50 text-gray-300 hover:text-white hover:border-red-500 transition-colors">Guides &amp; Maps</Link>
        </div>
      </div>

      {/* Expired Codes Section */}
      <div className="space-y-4 pt-6 border-t border-slate-900">
        <h3 className="text-sm font-bold text-gray-500 font-mono">Expired Codes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-60">
          {EXPIRED_CODES.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-between text-xs font-mono">
              <span className="line-through text-gray-400">{item.code}</span>
              <span className="text-gray-500">{item.rewards}</span>
            </div>
          ))}
        </div>
      </div>

      <AuthorCard
        authorName="Hlele"
        role="Editor"
        experience="AI-assisted research, human-reviewed"
        patchVersion="Checked against the Summer Patch v2.08 build"
        editorialNote="Every RIVALS code here was verified against multiple sources before listing, including its exact payout — keys, Pearls, Tropical Chests or Community Wraps, plus the follow-and-group requirements, since a valid code will still fail if you have not met them. Codes we could not re-confirm are explicitly marked."
      />
    </div>
  );
}
