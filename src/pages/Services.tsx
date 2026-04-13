import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scale, Shield, Landmark, Cpu, Globe, Home, Briefcase, FileText, Users } from 'lucide-react';
import { PRACTICE_AREAS } from '@/src/lib/constants';

const iconMap: any = {
  "01": Landmark,
  "02": Cpu,
  "03": FileText,
  "04": Shield,
  "05": Scale,
  "06": Globe,
  "07": Briefcase,
  "08": Home,
  "09": Users,
  "10": Shield,
};

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Practice Areas
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tighter mb-8"
          >
            Comprehensive <br />
            <span className="text-brand-blue">Legal Expertise</span>
          </motion.h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            We provide tailored legal services that protect and advance your best interests in line with the prevailing legal landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRACTICE_AREAS.map((area, index) => {
            const Icon = iconMap[area.id] || Scale;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-brand-orange font-mono text-sm font-bold">{area.id}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-brand-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      Regulatory Compliance
                    </li>
                    <li className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      Dispute Resolution
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
