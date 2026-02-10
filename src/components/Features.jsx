import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Zap, Repeat, FileCheck, ArrowUpRight, ShoppingCart, DollarSign, ShieldCheck } from 'lucide-react';

const Card = ({ children, className }) => (
  <motion.div
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className={`relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Under the Hood</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Built different. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
               Built for Tradies.
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
             Standard AI gets confused by "nogging" and "rough in". Ours was raised on the job site.
          </p>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px]">
          
          {/* CARD 1: THE AI BRAIN (Large, Top Left) */}
          <Card className="md:col-span-4 group relative">
             <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                {/* Animated Gradient Blob */}
                <motion.div 
                   animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                   transition={{ duration: 10, repeat: Infinity }}
                   className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
             </div>

             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 text-white">
                      <Mic size={24} />
                   </div>
                   <div className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                      Tradie-LLM v2
                   </div>
                </div>

                <div className="space-y-4">
                   <h3 className="text-3xl font-bold text-white leading-tight">
                      It speaks <span className="text-orange-400">Slang.</span>
                   </h3>
                   <p className="text-slate-300 font-medium max-w-md text-sm leading-relaxed">
                      We trained our model on 50,000+ hours of Australian construction site audio. It knows the difference between a "GPO" and a "J-Box", and understands that "roughly 10 meters" means you need 12.
                   </p>
                </div>
             </div>
          </Card>


          {/* CARD 2: LIVE SUPPLIER SYNC (Tall, Right) */}
          <Card className="md:col-span-2 md:row-span-2 bg-slate-50 border-none relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div className="h-full flex flex-col relative z-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-6">
                   <ShoppingCart size={24} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Live Price Sync.</h3>
                <p className="text-sm text-slate-500 font-medium mb-8">
                   Connected directly to major catalogs. Real-time stock & pricing.
                </p>

                {/* Simulated Scrolling Feed */}
                <div className="flex-1 overflow-hidden relative mask-linear-gradient">
                   <div className="space-y-3 absolute w-full animate-marquee-vertical">
                      {[
                        { name: 'Clipsal Iconic Switch', price: '$14.20' },
                        { name: '90mm Stormwater', price: '$22.50' },
                        { name: 'Yellow Tongue', price: '$65.00' },
                        { name: 'Rapid Set Concrete', price: '$9.80' },
                        { name: 'M10 DynaBolts', price: '$1.50' },
                        { name: 'Cat6 Cable (305m)', price: '$180.00' },
                      ].map((item, i) => (
                         <div key={i} className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                            <span className="text-xs font-bold text-slate-700">{item.name}</span>
                            <span className="text-[10px] font-mono font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{item.price}</span>
                         </div>
                      ))}
                   </div>
                </div>
                
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-20" />
             </div>
          </Card>


          {/* CARD 3: PROFIT PROTECTION (Bottom Left) */}
          <Card className="md:col-span-2 bg-white flex flex-col justify-between group">
             <div>
                <div className="flex justify-between items-start mb-4">
                   <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                      <DollarSign size={20} />
                   </div>
                   <div className="bg-slate-900 text-white text-[9px] font-bold px-2 py-1 rounded">
                      AUTO-MARKUP
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Profit Protection.</h3>
             </div>

             {/* Interactive Slider Visual */}
             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-2">
                   <span>Margin</span>
                   <span>20%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden relative">
                   <motion.div 
                     initial={{ width: "0%" }}
                     whileInView={{ width: "20%" }}
                     transition={{ duration: 1.5, delay: 0.5 }}
                     className="absolute top-0 left-0 h-full bg-orange-500" 
                   />
                </div>
                <div className="mt-3 flex justify-between items-center">
                   <span className="text-xs font-bold text-slate-500">Material Cost</span>
                   <span className="text-sm font-black text-slate-900">$100 <span className="text-slate-300">→</span> $120</span>
                </div>
             </div>
          </Card>


          {/* CARD 4: XERO INTEGRATION (Bottom Middle) */}
          <Card className="md:col-span-2 bg-blue-600 text-white relative overflow-hidden group">
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[size:20px_20px]" />
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-50" />

             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white border border-white/20">
                   <Repeat size={20} />
                </div>
                
                <div>
                   <h3 className="text-xl font-bold mb-2">Syncs to Xero.</h3>
                   <p className="text-blue-100 text-sm font-medium leading-relaxed">
                      Push approved quotes directly to Xero or QuickBooks as draft invoices. No double handling.
                   </p>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                   <ArrowUpRight size={24} />
                </div>
             </div>
          </Card>

        </div>
      </div>
    </section>
  );
}