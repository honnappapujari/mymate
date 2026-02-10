import React from 'react';
import { XCircle, CheckCircle2, Clock } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 opacity-50">
           <XCircle className="text-red-500" size={40} />
           <h3 className="text-4xl font-black tracking-tighter text-slate-900">The 2-Hour Headache.</h3>
           <p className="text-slate-500 font-medium">Typing quotes in Word, chasing info, and losing jobs because you were too slow to reply.</p>
        </div>
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-orange-100">
           <CheckCircle2 className="text-orange-500 mb-6" size={40} />
           <h3 className="text-4xl font-black tracking-tighter text-slate-900">The 30-Second Win.</h3>
           <p className="text-slate-600 font-medium mb-6">"Mate, quote sent." Send it from the ute while the customer is still on the phone.</p>
           <div className="flex items-center gap-2 text-orange-500 font-black text-xs tracking-widest">
              <Clock size={16} /> 98% FASTER THAN TYPING
           </div>
        </div>
      </div>
    </section>
  );
}