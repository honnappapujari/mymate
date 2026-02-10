import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ArrowRight, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/50 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
               <Zap size={20} className="fill-orange-500 text-orange-500" />
            </div>
            <div>
               <div className="font-black text-xl text-slate-900 tracking-tighter leading-none">
                  Tradie<span className="text-orange-500">AI</span>
               </div>
               {/* Status Badge */}
               <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">v2.6 Online</span>
               </div>
            </div>
          </div>


          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'How it Works', 'Reviews'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>


          {/* --- ACTIONS --- */}
          <div className="hidden md:flex items-center gap-4">
             <button className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
                Log In
             </button>
             <button className="group relative bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-lg overflow-hidden hover:bg-slate-800 transition-all">
                <div className="relative z-10 flex items-center gap-2">
                   <span>Start Free Trial</span>
                   <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                {/* Shine Animation */}
                <div className="absolute inset-0 bg-white/20 translate-y-full rotate-45 group-hover:translate-y-[-100%] transition-transform duration-500" />
             </button>
          </div>


          {/* --- MOBILE TOGGLE --- */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
             {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>


      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
             <div className="space-y-6">
                {['Features', 'Pricing', 'How it Works', 'Reviews'].map((link, i) => (
                   <motion.div
                     key={link}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="border-b border-slate-100 pb-4"
                   >
                      <a href="#" className="text-2xl font-black text-slate-900 block">
                         {link}
                      </a>
                   </motion.div>
                ))}
                
                <div className="pt-8 space-y-4">
                   <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                      Get Started <ArrowRight size={20} />
                   </button>
                   <button className="w-full bg-slate-50 text-slate-900 py-4 rounded-xl font-bold text-lg border border-slate-200 flex items-center justify-center gap-2">
                      <User size={20} /> Member Login
                   </button>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}