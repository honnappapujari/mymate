import React from 'react';
import { Check, X } from 'lucide-react';

const Feature = ({ text, isBest }) => (
  <div className="flex items-center justify-between py-4 border-b border-slate-100">
    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{text}</span>
    {isBest ? <Check className="text-green-500" size={20} /> : <X className="text-red-400" size={20} />}
  </div>
);

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl font-black text-center mb-20 tracking-tighter text-slate-900">The Value Gap.</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-white border-4 border-slate-900 rounded-[3rem] shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-1 rounded-full text-[10px] font-black tracking-widest">THE BEATER</div>
            <h3 className="text-2xl font-black mb-8 italic text-slate-900">TradieQuoteBeater</h3>
            <Feature text="Voice-to-Quote" isBest={true} />
            <Feature text="Monthly Cost: $29" isBest={true} />
            <Feature text="Setup Time: 5 Mins" isBest={true} />
            <Feature text="Aussie Templates" isBest={true} />
          </div>
          <div className="p-10 bg-slate-50 rounded-[3rem] opacity-40 grayscale border border-slate-100">
            <h3 className="text-2xl font-black mb-8 italic text-slate-400">Standard Apps</h3>
            <Feature text="Voice-to-Quote" isBest={false} />
            <Feature text="Monthly Cost: $89+" isBest={false} />
            <Feature text="Setup Time: 2 Hours" isBest={false} />
            <Feature text="Aussie Templates" isBest={false} />
          </div>
        </div>
      </div>
    </section>
  );
}