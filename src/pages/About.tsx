import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FIRM_NAME } from '@/src/lib/constants';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block">About Us</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tighter mb-8 leading-tight">
              A Modern and <br />
              <span className="text-brand-blue">Dedicated Law Firm</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Ng'ang'a Muthoni & Company Advocates is committed to listen and safeguard our clients' best interests within the four corners of the rule of law. We listen keenly and provide carefully considered legal advice that enable our clients to make informed decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-brand-blue text-white rounded-none px-8 py-6 group">
                Download Business Profile <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl shadow-brand-blue/10">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 max-w-xs">
              <p className="text-brand-blue font-bold text-4xl mb-1">15+</p>
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Years of Legal Excellence</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <Card 
            icon={Eye} 
            title="Our Vision" 
            content="To be a leading and reputable global firm of trusted advisors and advocates to our clients, providing sustainable legal solutions that protect and empower our clients to optimize opportunities." 
          />
          <Card 
            icon={Target} 
            title="Our Mission" 
            content="We exist to empower our clients to navigate prevailing legal landscape through innovative legal counsel and representation for sustainable outcomes." 
          />
          <Card 
            icon={CheckCircle2} 
            title="Our Promise" 
            content="We shall listen to you keenly, consider your legal needs carefully, and provide tailored legal services that protect and advance your best interests." 
          />
        </div>

        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-l from-brand-orange to-transparent" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Ours is a story of courage, innovation, and dedication to curate sustainable legal solutions to individual and business problems. We're relentless in our pursuit of the most suitable and sustainable remedies/options for our clients.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We believe that the law is an effective tool for social-economic progress and development within and beyond our beloved country, Kenya. Our deep passion for technology and innovation is our key driving force.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ icon: Icon, title, content }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-10 rounded-3xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300"
    >
      <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-8">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-zinc-900 mb-4">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">{content}</p>
    </motion.div>
  );
}
