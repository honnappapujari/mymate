import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Comparison from './components/Comparison';
import CTA from './components/CTA';

export default function App() {
  return (
    <main className="antialiased selection:bg-orange-100">
      <Hero />
      <Problem />
      <Features />
      <Comparison />
      <CTA />
      <footer className="py-12 text-center border-t border-slate-100 bg-white">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
          Built for Aussie Tradies | © 2026 TradieQuoteBeater
        </p>
      </footer>
    </main>
  );
}