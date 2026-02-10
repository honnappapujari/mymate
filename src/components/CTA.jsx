import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto relative group">
        
        {/* --- MAIN CARD --- */}
        <div className="absolute inset-0 bg-orange-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
        
        <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden px-8 py-20 md:p-24 text-center border border-slate-800 shadow-2xl">
           
           {/* Background Grid & Glow */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

           {/* Content */}
           <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full pl-1 pr-3 py-1 shadow-lg"
              >
                 <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    New
                 </div>
                 <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    Version 2.6 Live
                 </span>
              </motion.div>

              {/* Headline */}
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95]">
                 Get your <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    nights back.
                 </span>
              </h2>

              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                 Join 2,000+ Aussie tradies who stopped typing quotes and started finishing work at 3pm.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                 <button className="group relative bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] hover:bg-orange-400 transition-all w-full sm:w-auto overflow-hidden">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                       <Zap size={18} className="fill-white" />
                       <span>START FREE TRIAL</span>
                    </div>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700" />
                 </button>
                 
                 <button className="px-10 py-5 rounded-2xl border border-slate-700 text-slate-300 font-bold text-sm hover:bg-slate-800 hover:text-white transition-all w-full sm:w-auto">
                    VIEW DEMO
                 </button>
              </div>

              {/* Trust Footer */}
              <div className="pt-8 border-t border-slate-800/50 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 opacity-60">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <CheckCircle2 size={12} className="text-green-500" /> No Credit Card
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <ShieldCheck size={12} className="text-slate-300" /> Cancel Anytime
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <CheckCircle2 size={12} className="text-green-500" /> 14-Day Free Access
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}