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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80&w=1920" 
            alt="Justice Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Practice Areas
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8"
          >
            Comprehensive <br />
            <span className="text-brand-orange">Legal Expertise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            We provide tailored legal services that protect and advance your best interests in line with the prevailing legal landscape.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-16">
          {PRACTICE_AREAS.map((area, index) => {
            const Icon = iconMap[area.id] || Scale;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500 flex flex-col lg:flex-row gap-10 items-start overflow-hidden relative"
              >
                <div className="w-full lg:w-1/3 h-64 lg:h-full rounded-3xl overflow-hidden shrink-0 relative border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-500">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-brand-orange font-mono text-sm font-bold">{area.id}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-brand-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {(area as any).features?.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-zinc-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
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
