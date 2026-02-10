import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MapPin, ShieldCheck, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-6 relative overflow-hidden border-t border-slate-800">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Subtle Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
         {/* Glow */}
         <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-16">
           
           {/* COL 1: BRAND (Span 4) */}
           <div className="col-span-2 md:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-white">
                 <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Zap size={18} className="fill-white text-white" />
                 </div>
                 <span className="text-xl font-black tracking-tighter">TradieAI</span>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                 The only quoting engine trained on Australian construction data. Stop typing at night. Start finishing at 3pm.
              </p>

              <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/50 rounded-full px-3 py-1.5">
                 <MapPin size={12} className="text-orange-500" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Built in Melbourne, AU
                 </span>
              </div>
           </div>

           {/* COL 2: PRODUCT */}
           <div className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-white font-bold text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                 {['Features', 'Pricing', 'Bunnings Sync', 'Xero Integration', 'Changelog'].map(item => (
                    <li key={item}>
                       <a href="#" className="hover:text-orange-400 transition-colors">{item}</a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* COL 3: COMPANY */}
           <div className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-white font-bold text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                 {['About Us', 'Careers', 'Contact Support', 'Partner Program'].map(item => (
                    <li key={item}>
                       <a href="#" className="hover:text-orange-400 transition-colors">{item}</a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* COL 4: LEGAL */}
           <div className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-white font-bold text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                 {['Privacy Policy', 'Terms of Service', 'Data Security', 'Sub-processors'].map(item => (
                    <li key={item}>
                       <a href="#" className="hover:text-orange-400 transition-colors">{item}</a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* COL 5: SOCIALS (Mobile adjust) */}
           <div className="col-span-2 md:col-span-2 space-y-4">
               <h4 className="text-white font-bold text-sm">Follow Us</h4>
               <div className="flex gap-4">
                  {[Twitter, Github, Linkedin, Facebook].map((Icon, i) => (
                     <a key={i} href="#" className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all">
                        <Icon size={16} />
                     </a>
                  ))}
               </div>
           </div>

        </div>


        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           
           <div className="text-xs font-medium text-slate-600">
              &copy; {currentYear} TradieAI Pty Ltd. All rights reserved. ABN 12 345 678 910.
           </div>

           <div className="flex items-center gap-6">
              {/* System Status Indicator */}
              <div className="flex items-center gap-2">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">
                    All Systems Operational
                 </span>
              </div>
              
              <div className="flex items-center gap-1 text-slate-600">
                 <ShieldCheck size={12} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">SOC2 Compliant</span>
              </div>
           </div>

        </div>
      </div>
    </footer>
  );
}