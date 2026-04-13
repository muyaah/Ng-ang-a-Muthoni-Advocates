import React from 'react';
import { Hero } from '@/src/components/Hero';
import { CoreValues } from '@/src/components/CoreValues';
import { PracticeAreas } from '@/src/components/PracticeAreas';
import { People } from '@/src/components/People';
import { Clients } from '@/src/components/Clients';
import { Testimonials } from '@/src/components/Testimonials';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <CoreValues />
      <PracticeAreas />
      <People />
      <Clients />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8"
          >
            Ready to secure your <br />
            <span className="text-brand-orange">legal future?</span>
          </motion.h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Our team of experts is ready to provide you with tailored legal solutions that meet your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-white text-brand-blue font-bold rounded-none hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-xl shadow-black/20">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-none hover:bg-white/10 transition-all duration-300">
              Download Firm Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
