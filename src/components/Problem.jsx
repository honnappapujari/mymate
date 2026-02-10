import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Clock, FileWarning, Smartphone, ArrowRight, Zap, X } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA] relative overflow-hidden border-y border-slate-200">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-100/60 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
           <div className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              The Old Way vs. The New Way
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Stop quoting like it's <span className="text-slate-400 line-through decoration-red-400 decoration-4">1999.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* --- LEFT CARD: THE PROBLEM (The "Headache") --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-slate-100 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 overflow-hidden"
          >
             {/* "Messy Paper" Background Effect */}
             <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
             
             <div className="relative z-10 space-y-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-slate-200 rounded-2xl flex items-center justify-center mb-4 border border-slate-300">
                   <FileWarning size={28} className="text-slate-500" />
                </div>

                <div className="space-y-2">
                   <h3 className="text-3xl font-black text-slate-700 tracking-tight">The 2-Hour Headache.</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">
                      Typing Word docs at 9pm. Chasing supplier prices. Losing the job because you were <span className="text-red-500 font-bold decoration-2 underline decoration-wavy underline-offset-2">too slow to reply.</span>
                   </p>
                </div>

                {/* Visual Representation of "The Mess" */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm rotate-[-2deg] mt-8 grayscale group-hover:grayscale-0 transition-all">
                   <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                      <div className="w-20 h-2 bg-slate-200 rounded-full" />
                      <XCircle size={16} className="text-red-400" />
                   </div>
                   <div className="space-y-2">
                      <div className="w-full h-2 bg-slate-100 rounded-full" />
                      <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                      <div className="w-1/2 h-2 bg-red-50 rounded-full" /> {/* Error line */}
                   </div>
                </div>
             </div>
          </motion.div>


          {/* --- CENTER: THE "VS" BADGE --- */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="bg-white p-2 rounded-full shadow-xl border-4 border-slate-50">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black italic text-sm border border-slate-700">
                   VS
                </div>
             </div>
          </div>


          {/* --- RIGHT CARD: THE SOLUTION (The "Win") --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-white border border-orange-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-orange-500/10 overflow-hidden ring-4 ring-orange-50/50"
          >
             {/* "Glow" Background Effect */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

             <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                   <Zap size={28} className="text-white fill-white" />
                </div>

                <div className="space-y-2">
                   <h3 className="text-3xl font-black text-slate-900 tracking-tight">The 30-Second Win.</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">
                      "Mate, quote sent." Fire it off from the ute while the customer is still on the phone. Win the job before you leave the driveway.
                   </p>
                </div>

                {/* Visual Representation of "The Win" */}
                <div className="bg-slate-900 p-4 rounded-xl shadow-xl mt-8 rotate-[2deg] transition-transform hover:rotate-0">
                   {/* Fake Notification */}
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0 animate-pulse">
                         <CheckCircle2 size={20} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">Notification • Now</div>
                         <div className="text-sm font-bold text-white truncate">Quote #2094 Accepted</div>
                      </div>
                      <div className="text-xs font-bold text-green-400 whitespace-nowrap">
                         +$2,400
                      </div>
                   </div>
                </div>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mt-2 border border-orange-100">
                   <Clock size={12} /> 98% Faster Turnaround
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}