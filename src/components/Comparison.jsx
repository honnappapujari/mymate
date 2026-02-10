import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown, ShieldAlert, Zap, Clock, DollarSign, Database } from 'lucide-react';

const ComparisonRow = ({ label, us, them, icon: Icon }) => (
  <div className="grid grid-cols-12 items-center gap-4 py-5 border-b border-slate-100 last:border-0">
    {/* Feature Name */}
    <div className="col-span-12 md:col-span-4 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
        <Icon size={14} />
      </div>
      <span className="text-sm font-bold text-slate-700">{label}</span>
    </div>

    {/* Them (Bad) */}
    <div className="col-span-6 md:col-span-4 text-center md:text-left px-4 opacity-50 grayscale">
      <div className="flex items-center gap-2 text-slate-500 font-medium text-xs md:text-sm">
        <X size={16} className="text-red-400 shrink-0" />
        <span className="line-through decoration-red-300">{them}</span>
      </div>
    </div>

    {/* Us (Good) */}
    <div className="col-span-6 md:col-span-4 pl-4 border-l border-slate-100 md:border-0 md:pl-0">
      <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
        <div className="bg-green-100 text-green-600 p-0.5 rounded-full shrink-0">
           <Check size={12} strokeWidth={4} />
        </div>
        <span>{us}</span>
      </div>
    </div>
  </div>
);

export default function ComparisonModern() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
           <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Unfair</span> Advantage.
           </h2>
           <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Most apps are built for accountants, not tradies. We stripped out the bloat and focused on speed.
           </p>
        </div>

        {/* --- COMPARISON CARD --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* LEFT: THE COMPETITION (Sunken / Outdated) */}
          <div className="lg:col-span-5 relative z-0 lg:-mr-6">
             <div className="bg-slate-200/50 border border-slate-200 rounded-[2.5rem] p-8 lg:p-12 lg:pr-20 grayscale opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-8">
                   <ShieldAlert className="text-slate-400" size={24} />
                   <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest">Generic Apps</h3>
                </div>
                
                {/* Negative List */}
                <div className="space-y-6">
                   <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Input Method</div>
                      <div className="text-lg font-bold text-slate-600 line-through decoration-slate-400">Manual Typing</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Avg. Quote Time</div>
                      <div className="text-lg font-bold text-slate-600 line-through decoration-slate-400">20-30 Minutes</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Cost</div>
                      <div className="text-lg font-bold text-slate-600 line-through decoration-slate-400">$89/mo + Add-ons</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Setup</div>
                      <div className="text-lg font-bold text-slate-600 line-through decoration-slate-400">Days of Training</div>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT: THE HERO (Floating / Modern) */}
          <motion.div 
             initial={{ scale: 0.95, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="lg:col-span-7 relative z-10"
          >
             <div className="bg-white border-4 border-slate-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-orange-500/10 relative overflow-hidden group">
                
                {/* Badge */}
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
                   Winner 2026
                </div>

                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                      <Crown size={24} fill="currentColor" />
                   </div>
                   <div>
                      <h3 className="text-3xl font-black text-slate-900 italic tracking-tight">TradieQuoteBeater</h3>
                      <div className="flex gap-1">
                         {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-green-500" />)}
                      </div>
                   </div>
                </div>

                {/* COMPARISON ROWS */}
              {/* COMPARISON ROWS */}
<div className="space-y-2">
   <ComparisonRow 
      label="Input Channel" 
      us="WhatsApp / Voice" 
      them="Word / Desktop" 
      icon={Zap} 
   />
   <ComparisonRow 
      label="Daily Billable Leak" 
      us="$0 (Instant)" 
      them="$200 / Day" 
      icon={DollarSign} 
   />
   <ComparisonRow 
      label="Success Rate" 
      us="High-End Branded" 
      them="Amateur 'Word' Look" 
      icon={Crown} 
   />
   <ComparisonRow 
      label="Monthly Investment" 
      us="$29 AUD Flat" 
      them="$89+ (The 'Jobber' Tax)" 
      icon={Clock} 
   />
   <ComparisonRow 
      label="Pricing Accuracy" 
      us="Bunnings/AU Sync" 
      them="Guesswork / Old Files" 
      icon={Database} 
   />
</div>

                {/* Floating "VS" Divider for Mobile */}
                <div className="lg:hidden absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white w-10 h-10 flex items-center justify-center rounded-full font-black border-4 border-white">
                   VS
                </div>

             </div>
             
             {/* Glow Effect behind the card */}
             <div className="absolute inset-0 bg-orange-500 rounded-[3rem] blur-2xl -z-10 opacity-20 translate-y-4" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}