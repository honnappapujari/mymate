import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { Mic, ArrowRight, Play, CheckCircle2, FileText, Zap, Hammer, Sparkles } from 'lucide-react';

export default function HeroKinetic() {
  const [activeStage, setActiveStage] = useState('idle'); // idle, recording, processing, done

  // --- ANIMATION SEQUENCER ---
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setActiveStage('idle');
        await new Promise(r => setTimeout(r, 1000));
        
        setActiveStage('recording');
        await new Promise(r => setTimeout(r, 2000));
        
        setActiveStage('processing');
        await new Promise(r => setTimeout(r, 1500)); // The "Beam" happens here
        
        setActiveStage('done');
        await new Promise(r => setTimeout(r, 3000)); // Show the result
      }
    };
    sequence();
  }, []);

  // --- MOUSE TILT EFFECT (Subtle 3D) ---
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 50, damping: 20 });
  const y = useSpring(0, { stiffness: 50, damping: 20 });
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 10; // Range -5 to 5
    const yPct = (mouseY / height - 0.5) * 10; 
    x.set(xPct);
    y.set(yPct);
  };

  const rotateX = useTransform(y, (value) => value * -1); // Invert for natural tilt
  const rotateY = useTransform(x, (value) => value);

  return (
    <section 
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-[#FAFAFA] text-slate-900 py-16 px-6"
      onMouseMove={handleMouseMove}
    >
      
      {/* --- BACKGROUND: THE ARCHITECT'S DESK --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Isometric Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(60deg,#e5e7eb_1px,transparent_1px),linear-gradient(-60deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_69.28px] opacity-40"></div>
        
        {/* "Idea" Spotlights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* --- LEFT COLUMN: THE HOOK --- */}
        <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 pl-1 pr-3 py-1 rounded-full shadow-sm mx-auto lg:mx-0">
               <div className="bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">New</div>
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Bunnings API Live</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Turn talk <br />
              into <span className="relative inline-block text-orange-600">
                 tenders.
                 {/* Underline Scribble */}
                 <svg className="absolute w-full h-3 bottom-0 left-0 text-orange-300 -z-10 translate-y-1" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                 </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Stop typing at 9pm. Just explain the job to your phone, and our AI builds the itemized PDF quote instantly.
            </p>
          </motion.div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <button className="group relative bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm overflow-hidden shadow-2xl transition-transform hover:-translate-y-1">
                <div className="relative z-10 flex items-center gap-3">
                   <span>Try It Free</span>
                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </div>
                {/* Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             </button>
             
             <button className="px-8 py-4 rounded-2xl border-2 border-slate-100 text-slate-600 font-bold text-sm hover:border-slate-300 hover:text-slate-900 transition-colors flex items-center gap-2 bg-white/50 backdrop-blur-sm">
                <Play size={16} className="fill-slate-900" />
                <span>See the Magic</span>
             </button>
          </div>

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-slate-400 grayscale opacity-70">
             <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest">
                <CheckCircle2 size={12} /> Aussie Built
             </div>
             <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest">
                <CheckCircle2 size={12} /> GST Ready
             </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE KINETIC PIPELINE --- */}
        <div className="lg:col-span-7 perspective-1000 h-[450px] flex items-center justify-center" ref={ref}>
           
           {/* The Floating Container */}
           <motion.div 
             style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
             className="relative w-full max-w-[600px] h-[320px] bg-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center px-8 overflow-hidden group"
           >
              
              {/* Decorative Background inside the card */}
              <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              {/* --- COMPONENT 1: THE VOICE (SOURCE) --- */}
              <motion.div 
                className="relative z-10 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 flex flex-col gap-3 shrink-0"
                animate={{ 
                  scale: activeStage === 'recording' ? 1.05 : 1,
                  borderColor: activeStage === 'recording' ? '#F97316' : '#F1F5F9'
                }}
              >
                 <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${activeStage === 'recording' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>
                       <Mic size={20} />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Input</div>
                       <div className="text-xs font-bold text-slate-900">Voice Note</div>
                    </div>
                 </div>
                 
                 {/* Audio Wave Visualization */}
                 <div className="h-8 bg-slate-50 rounded-lg flex items-center justify-center gap-0.5 px-2 overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                       <motion.div 
                          key={i}
                          className={`w-1 rounded-full ${activeStage === 'recording' ? 'bg-orange-400' : 'bg-slate-200'}`}
                          animate={{ height: activeStage === 'recording' ? [8, 24, 8] : 4 }}
                          transition={{ 
                             repeat: activeStage === 'recording' ? Infinity : 0, 
                             duration: 0.5, 
                             delay: i * 0.05 
                          }}
                       />
                    ))}
                 </div>
                 <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-r border-slate-100 z-0" />
              </motion.div>


              {/* --- COMPONENT 2: THE BEAM (TRANSFER) --- */}
              <div className="flex-1 relative h-12 mx-[-10px] z-0 flex items-center justify-center">
                 {/* The Track */}
                 <div className="absolute inset-x-0 h-1 bg-slate-100 rounded-full overflow-hidden">
                    {activeStage === 'processing' && (
                       <motion.div 
                          layoutId="beam"
                          className="h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent w-1/2"
                          initial={{ x: '-100%' }}
                          animate={{ x: '200%' }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                       />
                    )}
                 </div>
                 
                 {/* Floating Sparkle Icon */}
                 <motion.div 
                   className="relative z-10 bg-white border border-orange-100 p-2 rounded-full shadow-sm"
                   animate={{ 
                      scale: activeStage === 'processing' ? [1, 1.2, 1] : 1,
                      rotate: activeStage === 'processing' ? 180 : 0
                   }}
                 >
                    <Zap size={16} className={activeStage === 'processing' ? "text-orange-500 fill-orange-500" : "text-slate-300"} />
                 </motion.div>
              </div>


              {/* --- COMPONENT 3: THE QUOTE (DESTINATION) --- */}
              <motion.div 
                 className="relative z-10 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden shrink-0"
                 initial={{ opacity: 0.5, filter: 'blur(2px)' }}
                 animate={{ 
                    opacity: activeStage === 'done' ? 1 : 0.8,
                    filter: activeStage === 'done' ? 'blur(0px)' : 'blur(0.5px)',
                    y: activeStage === 'done' ? 0 : 4
                 }}
              >
                 {/* Header */}
                 <div className="bg-slate-900 p-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <FileText size={12} className="text-white" />
                       <span className="text-[10px] font-bold text-white uppercase">Quote #204</span>
                    </div>
                 </div>

                 {/* Body */}
                 <div className="p-4 space-y-3">
                    <AnimatePresence>
                       {(activeStage === 'done' || activeStage === 'processing') && (
                          <motion.div 
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: 'auto' }}
                             className="flex justify-between items-center pb-2 border-b border-slate-50"
                          >
                             <div className="text-xs font-bold text-slate-700">Scope of Works</div>
                             <CheckCircle2 size={12} className="text-green-500" />
                          </motion.div>
                       )}
                    </AnimatePresence>

                    {/* Animated Line Items */}
                    <div className="space-y-2">
                       {activeStage === 'done' ? (
                          <>
                             <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex justify-between text-xs">
                                <span className="text-slate-500 font-medium">Timber Beams</span>
                                <span className="font-bold text-slate-900">$450</span>
                             </motion.div>
                             <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-between text-xs">
                                <span className="text-slate-500 font-medium">Installation</span>
                                <span className="font-bold text-slate-900">$800</span>
                             </motion.div>
                             <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="pt-2 flex justify-between items-end border-t border-slate-100 mt-2">
                                <span className="text-[10px] font-bold uppercase text-slate-400">Total</span>
                                <span className="text-lg font-black text-orange-600">$1,250</span>
                             </motion.div>
                          </>
                       ) : (
                          // Skeleton Loading State
                          <div className="space-y-2 opacity-30">
                             <div className="h-3 bg-slate-200 rounded w-2/3" />
                             <div className="h-3 bg-slate-200 rounded w-1/2" />
                             <div className="h-6 bg-slate-200 rounded w-full mt-2" />
                          </div>
                       )}
                    </div>
                 </div>
                 
                 {/* Success Flash */}
                 {activeStage === 'done' && (
                    <motion.div 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1, scale: [1, 1.5, 0] }} 
                       transition={{ duration: 0.5 }}
                       className="absolute inset-0 bg-green-500/10 z-20 pointer-events-none"
                    />
                 )}
              </motion.div>

           </motion.div>
        </div>
      </div>
    </section>
  );
}