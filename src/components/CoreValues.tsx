import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Scale } from 'lucide-react';
import { CORE_VALUES } from '@/src/lib/constants';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Users: Users,
  Scale: Scale,
};

export function CoreValues() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Our Foundation</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Core Values</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: (value as any).position || 'center' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  
                  <p className="text-zinc-300 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {value.description}
                  </p>
                  
                  <div className="mt-6 w-12 h-1 bg-brand-orange group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
