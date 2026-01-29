import React from 'react';
import CityCard from './components/CityCard';
import { Map } from 'lucide-react';
import content from '../content.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-teal-500 selection:text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex flex-col items-center justify-center text-center px-4 bg-[url('https://images.unsplash.com/photo-1533552093475-7484df79766e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-sm font-medium animate-fade-in-up">
            <Map size={16} /> 云南秘境探索
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-400 drop-shadow-sm">
            极边风情之旅
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            探索芒市的悠闲，感受腾冲的热力，体验瑞丽的异域。
            <br className="hidden md:block" />
            一段跨越自然奇观与人文历史的绝美旅程。
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.cities.map((city, idx) => (
            <CityCard key={idx} city={city} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2026 云南旅游指南 - Mangshi • Tengchong • Ruili</p>
          <p className="mt-2">Made with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
