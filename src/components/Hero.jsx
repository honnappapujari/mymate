import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Zap, ArrowRight, Play, CheckCircle2, Construction, Hammer, FileText } from 'lucide-react';

export default function HeroCompact() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-12 lg:py-16 px-6 selection:bg-orange-100 border-b border-slate-200">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- LEFT COLUMN: COMPACT PITCH --- */}
        <div className="space-y-6 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm mx-auto lg:mx-0">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">AI Quoting Engine v2.0</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Your voice is your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                admin team.
              </span>
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Turn site ramblings into professional PDF quotes in seconds. <br className="hidden lg:block"/>
              <span className="text-slate-900 font-bold decoration-orange-300 underline decoration-2 underline-offset-2">Stop working nights.</span>
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5">
              <span>Start Free Trial</span>
              <ArrowRight size={16} />
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-200 bg-white text-slate-600 font-bold text-sm hover:border-slate-300 hover:text-slate-900 transition-all">
              <Play size={14} fill="currentColor" />
              <span>See Demo</span>
            </button>
          </div>

          {/* Micro Trust */}
          <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Integrates with:</div>
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Xero_software_logo.svg" alt="Xero" className="h-4" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/QuickBooks_logo.svg" alt="Quickbooks" className="h-4" />
          </div>
        </div>

        {/* --- RIGHT COLUMN: COMPACT INTERFACE --- */}
        <div className="relative mx-auto w-full max-w-[400px] perspective-1000">
            
            {/* The "Widget" Container */}
            <motion.div 
               initial={{ rotateY: -5 }}
               whileHover={{ rotateY: 0 }}
               className="bg-white rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-slate-200 relative overflow-hidden h-[460px] flex flex-col"
            >
               {/* Header */}
               <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
                  <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>
                  <div className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-400 uppercase">
                     Project: 42 Station St
                  </div>
               </div>

               {/* Stage */}
               <div className="flex-1 relative p-6 flex flex-col items-center justify-center bg-slate-50/30">
                 
                 {/* Progress Pills */}
                 <div className="absolute top-4 flex gap-1.5">
                    {['Record', 'AI Sync', 'Invoice'].map((label, i) => (
                       <div key={i} className={`h-1 w-8 rounded-full transition-colors duration-500 ${step === i + 1 ? 'bg-slate-900' : 'bg-slate-200'}`} />
                    ))}
                 </div>

                 <AnimatePresence mode="wait">
                   
                   {/* STEP 1: INPUT */}
                   {step === 1 && (
                     <motion.div 
                       key="step1"
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 1.05 }}
                       className="w-full"
                     >
                        <div className="flex justify-center mb-6">
                           <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center animate-pulse">
                              <Mic size={24} className="text-orange-600" />
                           </div>
                        </div>
                        <div className="bg-white p-3 rounded-xl rounded-tr-sm shadow-sm border border-slate-100 w-full relative">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                                 <Play size={10} fill="white" className="text-white ml-0.5" />
                              </div>
                              <div className="h-6 flex items-center gap-0.5 flex-1 overflow-hidden">
                                 {[...Array(15)].map((_,i) => (
                                    <motion.div 
                                       key={i}
                                       animate={{ height: [4, 16, 4] }}
                                       transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.05 }}
                                       className="w-1 bg-slate-200 rounded-full"
                                    />
                                 ))}
                              </div>
                           </div>
                        </div>
                        <p className="text-center text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-wider">Processing Voice Data...</p>
                     </motion.div>
                   )}

                   {/* STEP 2: PROCESS */}
                   {step === 2 && (
                     <motion.div 
                       key="step2"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10"
                     >
                        <div className="w-16 h-16 bg-white border border-orange-100 rounded-2xl shadow-xl flex items-center justify-center relative mb-4">
                           <Zap size={28} className="text-orange-500 fill-orange-500" />
                           <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 border border-dashed border-orange-300 rounded-2xl -m-2"
                           />
                        </div>
                        <div className="space-y-1.5 w-48">
                           {['Parsing Items', 'Supplier Pricing', 'Formatting'].map((text, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wide"
                              >
                                 <CheckCircle2 size={10} className="text-green-500" /> {text}
                              </motion.div>
                           ))}
                        </div>
                     </motion.div>
                   )}

                   {/* STEP 3: OUTPUT */}
                   {step === 3 && (
                     <motion.div 
                        key="step3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full"
                     >
                        <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                           <div className="bg-slate-900 px-4 py-3 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <FileText size={14} className="text-white"/>
                                <span className="text-xs font-bold text-white">Quote #1024</span>
                              </div>
                              <span className="text-[10px] font-bold text-green-400 bg-white/10 px-1.5 py-0.5 rounded">SENT</span>
                           </div>
                           <div className="p-4 space-y-3">
                              <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                                <div className="text-[10px] text-slate-400 uppercase font-bold">Total</div>
                                <div className="text-xl font-black text-slate-900">$1,450.00</div>
                              </div>
                              
                              {/* Item 1 */}
                              <div className="flex justify-between items-center text-xs">
                                 <div className="flex items-center gap-2">
                                    <div className="p-1 bg-slate-50 rounded border border-slate-100">
                                      <Construction size={12} className="text-slate-400" />
                                    </div>
                                    <span className="font-bold text-slate-700">Beam</span>
                                 </div>
                                 <span className="font-mono font-medium text-slate-500">$850</span>
                              </div>

                              {/* Item 2 */}
                              <div className="flex justify-between items-center text-xs">
                                 <div className="flex items-center gap-2">
                                    <div className="p-1 bg-slate-50 rounded border border-slate-100">
                                      <Hammer size={12} className="text-slate-400" />
                                    </div>
                                    <span className="font-bold text-slate-700">Labor (4h)</span>
                                 </div>
                                 <span className="font-mono font-medium text-slate-500">$600</span>
                              </div>

                           </div>
                        </div>
                        <div className="mt-4 flex justify-center">
                           <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                              <CheckCircle2 size={10} /> Client Viewed
                           </div>
                        </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
            </motion.div>

            {/* Floating Tooltip */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1 }}
               className="absolute -right-4 top-20 bg-slate-800 text-white p-3 rounded-xl shadow-xl max-w-[120px] hidden md:block"
            >
               <div className="text-[10px] leading-tight font-medium">
                  <span className="text-orange-400 font-bold">Did you see?</span> <br/>
                  It auto-calculated the markup.
               </div>
               <div className="absolute -left-1.5 top-4 w-3 h-3 bg-slate-800 transform rotate-45" />
            </motion.div>

          </div>
        </div>
    </section>
  );
}