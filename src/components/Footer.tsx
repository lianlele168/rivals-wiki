import React from 'react';
import Link from 'next/link';
import { Target, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03060c] border-t border-red-900/30 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 w-full mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-base font-mono">ROBLOX RIVALS WIKI</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-md">
            The premier community guide and interactive tool suite for Roblox Rivals. Customize crosshair codes, calculate weapon damage & TTK stats, and view 2026 meta rankings.
          </p>
          <div className="inline-flex items-center space-x-2 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
            <span>Redeem Codes & Weapon Data</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 font-mono">Interactive Tools</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/crosshair-generator" className="hover:text-white transition-colors">Crosshair Code Generator</Link></li>
            <li><Link href="/weapons" className="hover:text-white transition-colors">Weapon Database & TTK Calculator</Link></li>
            <li><Link href="/tier-list" className="hover:text-white transition-colors">2026 Weapon Tier List</Link></li>
            <li><Link href="/codes" className="hover:text-white transition-colors">Active Redeem Codes</Link></li>
          </ul>
        </div>

        {/* Strategy Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 font-mono">Strategy & Guides</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/maps" className="hover:text-white transition-colors">Map Strategy & Callouts</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">Slide-Cancel Technique</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">Sensitivity Converter</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">FPS Optimization Guide</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Roblox Rivals Wiki. Community database for Roblox FPS players.</p>
        <p className="mt-2 sm:mt-0 flex items-center gap-1">
          <span>Crafted with</span> <Heart className="w-3 h-3 text-red-500 fill-red-500" /> <span>for FPS Gamers</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-4 text-[11px] text-gray-600 text-center">
        <p>Content AI-assisted, human-reviewed · Data sources cited on page · Contact: lianlele168@gmail</p>
      </div>
    </footer>
  );
}
