import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { PEOPLE } from '@/src/lib/constants';

export function People() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Our People
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900"
          >
            Dedicated Agents of <br />
            <span className="text-brand-blue">Justice and Fairness</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PEOPLE.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-zinc-100">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-blue transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-blue transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-brand-blue transition-colors">
                {person.name}
              </h3>
              <p className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
                {person.role}
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                {person.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
