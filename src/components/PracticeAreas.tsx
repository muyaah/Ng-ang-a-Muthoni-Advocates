import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '@/src/lib/constants';

export function PracticeAreas() {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Tailored Legal Solutions <br />
              <span className="text-zinc-500">For Modern Challenges</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              View All Services <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[400px] overflow-hidden bg-zinc-900"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-x-0 top-0 h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
              <div className="absolute inset-0 z-0">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
              </div>

              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <span className="text-brand-orange font-mono text-sm mb-4 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {area.id}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {area.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-brand-orange transition-colors"
                >
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-brand-blue/10" />
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 blur-2xl opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
