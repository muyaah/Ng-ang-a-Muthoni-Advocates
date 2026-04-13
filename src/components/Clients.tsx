import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '@/src/lib/constants';

export function Clients() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">Trusted By Leading Organizations</h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {CLIENTS.map((client) => (
            <div key={client} className="mx-12 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-zinc-100 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-xl">{client[0]}</span>
              </div>
              <span className="text-xl font-bold text-zinc-800 tracking-tight">{client}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {CLIENTS.map((client) => (
            <div key={`${client}-2`} className="mx-12 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-zinc-100 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-xl">{client[0]}</span>
              </div>
              <span className="text-xl font-bold text-zinc-800 tracking-tight">{client}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}} />
    </section>
  );
}
