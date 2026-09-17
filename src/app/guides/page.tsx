import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { BookOpen, Zap, Sliders, Monitor, ArrowRight, Check, Crosshair, Shield, HelpCircle } from 'lucide-react';
import { GUIDES } from '@/data/wikiData';
import AuthorCard from '@/components/AuthorCard';
import SensitivityConverter from '@/components/SensitivityConverter';

export const metadata: Metadata = {
  title: 'Roblox Rivals Movement Tech, Aim & Sensitivity Guide (September 2026)',
  description: 'Master slide-canceling, crouch-spam aim resets, FOV optimization, and Valorant-to-Rivals mouse sensitivity conversion formulas.',
  alternates: {
    canonical: '/guides',
  },
  keywords: ['rivals movement guide', 'rivals slide cancel', 'rivals sensitivity converter', 'rivals best settings'],
};

const GUIDE_FAQS = [
  {
    question: 'What sensitivity conversion ratio translates Valorant aim to Roblox Rivals?',
    answer: 'Multiply your Valorant sensitivity by 3.18 to achieve identical cm/360 rotational distance in Roblox Rivals at standard 90 Field of View (FOV).',
  },
  {
    question: 'How do you execute the slide-cancel movement tech in Rivals?',
    answer: 'Sprint forward, tap Crouch to initiate slide frames, and immediately tap Jump while holding forward. This preserves maximum momentum while keeping your weapon spread bloom tight.',
  },
  {
    question: 'What graphics settings provide maximum FPS and target clarity?',
    answer: 'Set Roblox Graphics Quality to 3 or 4 to disable particle foliage and bloom while retaining maximum draw distance for player silhouettes across open sightlines.',
  },
  {
    question: 'How does crouch-spamming affect weapon accuracy?',
    answer: 'Unlike tactical shooters, crouch-spamming in Rivals does not induce a persistent accuracy penalty, but it alters your headshot hitbox position drastically, throwing off enemy crosshair placement.',
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            dateModified: '2026-09-17',
            author: {
              '@type': 'Person',
              name: 'Marcus "Vortex" Vance',
              jobTitle: 'Lead FPS Frame-Data Analyst & Ranked Duelist',
            },
            mainEntity: GUIDE_FAQS.map((faq) => ({
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

      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-400 text-xs font-mono font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PRO MOVEMENT & AIM GUIDES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          RIVALS Movement, Aim & Sensitivity Masterclass
        </h1>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl leading-relaxed">
          Master slide-canceling, convert your mouse sensitivity from Valorant or Counter-Strike 2, configure crosshair settings, and optimize graphics performance for high-refresh-rate dueling.
        </p>
      </div>

      <AuthorCard />

      {/* Gameplay Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-slate-900/60 p-4 flex flex-col items-center">
          <Image
            src="/images/rivals-hero.webp"
            alt="Roblox RIVALS High Speed Dueling Arena"
            width={640}
            height={360}
            className="rounded-xl object-cover w-full h-56 border border-red-950"
            priority
          />
          <p className="text-xs text-slate-400 mt-2 text-center font-mono">
            Figure 1: Ranked 1v1 Arena — High verticality and dynamic sightline corridors.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-slate-900/60 p-4 flex flex-col items-center">
          <Image
            src="/images/rivals-icon.webp"
            alt="RIVALS Emblem and Combat Rank Badge"
            width={640}
            height={360}
            className="rounded-xl object-contain w-full h-56 bg-black/50 border border-red-950"
          />
          <p className="text-xs text-slate-400 mt-2 text-center font-mono">
            Figure 2: Official RIVALS Duelist Insignia and Ranked Tier Emblem.
          </p>
        </div>
      </div>

      {/* Sensitivity Converter Calculator Tool */}
      <SensitivityConverter />

      {/* In-depth Movement & Tactical Breakdown */}
      <div className="space-y-8 font-sans">
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            1. Slide-Canceling & Bunnyhop Velocity Stacking
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Momentum preservation is the core differentiator between casual players and leaderboard veterans in RIVALS. When executing a slide-cancel, wait for the first two frames of the crouch slide audio prompt before hitting Jump. Releasing crouch at the exact apex of the jump converts ground friction into airborne forward velocity, letting you cross open sniper corridors 40% faster than standard sprint velocity.
          </p>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-red-400" />
            2. Crosshair Placement & Pre-Aiming Corners
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Due to fast player models in RIVALS, reactive flick aiming is inherently less reliable than crosshair discipline. Keep your reticle positioned at head level approximately two player-widths away from door frames and ramp crests. This accounts for human reaction latency (average 180-220ms) so enemies run straight into your initial burst.
          </p>
        </section>

        {/* Existing Guides Stack */}
        <div className="space-y-6">
          {GUIDES.map((guide, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800 flex items-center justify-center font-bold text-red-400 font-mono">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-mono text-white">{guide.title}</h3>
                  <span className="text-xs text-gray-400">{guide.category}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{guide.summary}</p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                <span className="text-xs font-mono font-bold text-red-400 block mb-2">PRO EXECUTION STEPS:</span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {guide.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            Guides Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GUIDE_FAQS.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-slate-200 font-mono">{faq.question}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
