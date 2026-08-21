'use client';

import React, { useState } from 'react';
import { Crosshair, Copy, Check, RefreshCw, Sparkles, Sliders, Eye, Code, Download, Import } from 'lucide-react';
import { CROSSHAIR_PRESETS, CrosshairPreset } from '@/data/wikiData';

export default function CrosshairGeneratorPage() {
  const [color, setColor] = useState('#00FF66');
  const [length, setLength] = useState(7);
  const [thickness, setThickness] = useState(2);
  const [gap, setGap] = useState(3);
  const [showDot, setShowDot] = useState(false);
  const [dotSize, setDotSize] = useState(3);
  const [outline, setOutline] = useState(true);
  const [opacity, setOpacity] = useState(1.0);
  const [bgScene, setBgScene] = useState<'dark' | 'desert' | 'cyber'>('dark');

  const [copied, setCopied] = useState(false);
  const [inputCode, setInputCode] = useState('');

  const colorPresets = ['#00FF66', '#FF2233', '#00FFFF', '#FFFF00', '#FFFFFF', '#FF00FF', '#FFA500'];

  const generatedCode = `RIVALS-${color.replace('#', '')}-L${length}-T${thickness}-G${gap}${showDot ? `-D${dotSize}` : ''}${outline ? '-OUT' : ''}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoadPreset = (preset: CrosshairPreset) => {
    setColor(preset.color);
    setLength(preset.length);
    setThickness(preset.thickness);
    setGap(preset.gap);
    setShowDot(preset.showDot);
    setDotSize(preset.dotSize);
    setOutline(preset.outline);
    setOpacity(preset.opacity);
  };

  const handleReset = () => {
    setColor('#00FF66');
    setLength(7);
    setThickness(2);
    setGap(3);
    setShowDot(false);
    setDotSize(3);
    setOutline(true);
    setOpacity(1.0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-300 text-xs font-mono font-bold mb-3">
          <Crosshair className="w-3.5 h-3.5 text-red-400" />
          <span>ROBLOX RIVALS INTERACTIVE TOOL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Rivals Crosshair Generator & Code Exporter
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Customize your reticle length, gap, dot & outline with live game map background preview. Export codes directly to Roblox Rivals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 5 Cols: Sliders & Controls */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <Sliders className="w-5 h-5 text-red-400" />
              <span>Crosshair Settings</span>
            </h2>
            <button
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1 font-mono"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Color Selector */}
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-gray-300 flex justify-between">
              <span>Crosshair Color</span>
              <span className="text-red-400">{color}</span>
            </label>
            <div className="flex items-center space-x-2">
              {colorPresets.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-7 h-7 rounded-lg border-2 transition-transform hover:scale-110 ${
                    color === c ? 'border-white scale-110 shadow-lg' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-8 h-8 rounded border-none bg-transparent cursor-pointer"
              />
            </div>
          </div>

          {/* Slider: Crosshair Length */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono text-gray-300">
              <span>Length</span>
              <span className="text-red-400 font-bold">{length} px</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-red-500 bg-slate-900 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider: Thickness */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono text-gray-300">
              <span>Thickness</span>
              <span className="text-red-400 font-bold">{thickness} px</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="6"
              step="0.5"
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
              className="w-full accent-red-500 bg-slate-900 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider: Gap */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono text-gray-300">
              <span>Center Gap</span>
              <span className="text-red-400 font-bold">{gap} px</span>
            </div>
            <input
              type="range"
              min="0"
              max="15"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="w-full accent-red-500 bg-slate-900 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Toggles: Center Dot & Size */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-gray-200">Center Dot</span>
              <button
                onClick={() => setShowDot(!showDot)}
                className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                  showDot ? 'bg-red-600 text-white' : 'bg-slate-800 text-gray-400'
                }`}
              >
                {showDot ? 'ENABLED' : 'DISABLED'}
              </button>
            </div>

            {showDot && (
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[11px] font-mono text-gray-400">
                  <span>Dot Size</span>
                  <span className="text-red-400">{dotSize} px</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={dotSize}
                  onChange={(e) => setDotSize(Number(e.target.value))}
                  className="w-full accent-red-500 bg-slate-900 h-1.5 rounded-lg cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Toggles: Outline & Opacity */}
          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <span className="text-gray-300 font-bold">Black Outline</span>
              <button
                onClick={() => setOutline(!outline)}
                className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                  outline ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-gray-400'
                }`}
              >
                {outline ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>Opacity</span>
                <span className="text-red-400 font-bold">{opacity}</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1.0"
                step="0.1"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full accent-red-500 bg-slate-900 h-1.5 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Live Canvas / Preview Stage & Generated Code */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Preview Box */}
          <div className="p-6 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                <Eye className="w-4 h-4 text-red-400" />
                <span>Live Crosshair Preview Stage</span>
              </h3>

              {/* Background Scene Selector */}
              <div className="flex items-center space-x-1 text-[11px] font-mono">
                <button
                  onClick={() => setBgScene('dark')}
                  className={`px-2.5 py-1 rounded ${
                    bgScene === 'dark' ? 'bg-red-600 text-white font-bold' : 'bg-slate-900 text-gray-400'
                  }`}
                >
                  Night Warehouse
                </button>
                <button
                  onClick={() => setBgScene('desert')}
                  className={`px-2.5 py-1 rounded ${
                    bgScene === 'desert' ? 'bg-amber-600 text-white font-bold' : 'bg-slate-900 text-gray-400'
                  }`}
                >
                  Desert Map
                </button>
                <button
                  onClick={() => setBgScene('cyber')}
                  className={`px-2.5 py-1 rounded ${
                    bgScene === 'cyber' ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-900 text-gray-400'
                  }`}
                >
                  Cyber Arena
                </button>
              </div>
            </div>

            {/* Visual Crosshair Canvas Render Box */}
            <div
              className={`w-full h-80 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-800 transition-colors ${
                bgScene === 'dark'
                  ? 'bg-gradient-to-b from-[#0b1220] via-[#040810] to-[#0b1220]'
                  : bgScene === 'desert'
                  ? 'bg-gradient-to-b from-[#3a2612] via-[#21160a] to-[#3a2612]'
                  : 'bg-gradient-to-b from-[#092938] via-[#05151f] to-[#092938]'
              }`}
            >
              {/* Simulated In-Game Target Dummy */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-40 h-56 rounded-t-full border-2 border-red-500/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-yellow-400/50" />
                </div>
              </div>

              {/* RENDERED CROSSHAIR ELEMENT */}
              <div className="relative flex items-center justify-center pointer-events-none" style={{ opacity }}>
                {/* Center Dot */}
                {showDot && (
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: `${dotSize}px`,
                      height: `${dotSize}px`,
                      backgroundColor: color,
                      boxShadow: outline ? '0 0 2px #000' : 'none'
                    }}
                  />
                )}

                {/* Top Arm */}
                {length > 0 && (
                  <div
                    className="absolute"
                    style={{
                      bottom: `${gap}px`,
                      width: `${thickness}px`,
                      height: `${length}px`,
                      backgroundColor: color,
                      boxShadow: outline ? '0 0 2px #000' : 'none'
                    }}
                  />
                )}

                {/* Bottom Arm */}
                {length > 0 && (
                  <div
                    className="absolute"
                    style={{
                      top: `${gap}px`,
                      width: `${thickness}px`,
                      height: `${length}px`,
                      backgroundColor: color,
                      boxShadow: outline ? '0 0 2px #000' : 'none'
                    }}
                  />
                )}

                {/* Left Arm */}
                {length > 0 && (
                  <div
                    className="absolute"
                    style={{
                      right: `${gap}px`,
                      height: `${thickness}px`,
                      width: `${length}px`,
                      backgroundColor: color,
                      boxShadow: outline ? '0 0 2px #000' : 'none'
                    }}
                  />
                )}

                {/* Right Arm */}
                {length > 0 && (
                  <div
                    className="absolute"
                    style={{
                      left: `${gap}px`,
                      height: `${thickness}px`,
                      width: `${length}px`,
                      backgroundColor: color,
                      boxShadow: outline ? '0 0 2px #000' : 'none'
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Generated Code Output Box */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-red-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-gray-300 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-red-400" />
                <span>Generated Import Code</span>
              </span>
              <span className="text-[10px] text-gray-500 font-mono">Compatible with Roblox Rivals Settings</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-grow p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm font-bold text-yellow-400 truncate">
                {generatedCode}
              </div>
              <button
                onClick={handleCopy}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center space-x-2 transition-colors font-mono shadow-lg shadow-red-900/30"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pro Player Presets Library */}
          <div className="p-6 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Pro Player Crosshair Presets Library</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CROSSHAIR_PRESETS.map((preset) => (
                <div
                  key={preset.id}
                  onClick={() => handleLoadPreset(preset)}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 cursor-pointer transition-all hover:-translate-y-0.5 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full border border-slate-700"
                      style={{ backgroundColor: preset.color }}
                    />
                    <div>
                      <span className="font-mono text-xs font-bold text-white block">{preset.name}</span>
                      <span className="text-[10px] text-gray-400">{preset.author}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-red-400 font-bold">Load →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
