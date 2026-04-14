import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FIRM_NAME } from '@/src/lib/constants';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80&w=1920" 
            alt="Legal Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/50 via-transparent to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">About Us</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-tight">
                A Modern and <br />
                <span className="text-brand-orange">Dedicated Law Firm</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Ng'ang'a Muthoni & Company Advocates is committed to listen and safeguard our clients' best interests within the four corners of the rule of law. We listen keenly and provide carefully considered legal advice that enable our clients to make informed decisions.
              </p>
              
              <div className="flex flex-wrap gap-8 items-center justify-center">
                <Button className="bg-brand-orange text-brand-blue hover:bg-white rounded-none px-8 py-6 font-bold group">
                  Download Business Profile <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-4">
                  <div className="text-brand-orange font-bold text-5xl">100+</div>
                  <div className="text-white/60 text-xs font-bold uppercase tracking-widest leading-tight text-left">
                    Clients <br /> Served
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <FlipCard 
            icon={Eye} 
            title="Our Vision" 
            content="To be a leading and reputable global firm of trusted advisors and advocates to our clients, providing sustainable legal solutions that protect and empower our clients to optimize opportunities." 
          />
          <FlipCard 
            icon={Target} 
            title="Our Mission" 
            content="We exist to empower our clients to navigate prevailing legal landscape through innovative legal counsel and representation for sustainable outcomes." 
          />
          <FlipCard 
            icon={CheckCircle2} 
            title="Our Promise" 
            content="We shall listen to you keenly, consider your legal needs carefully, and provide tailored legal services that protect and advance your best interests." 
          />
        </div>

        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative min-h-[500px] flex items-center">
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1920" 
              alt="Legal Pillars Background" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent" />
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

function FlipCard({ icon: Icon, title, content }: any) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div 
      className="relative h-[350px] w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-brand-blue border-2 border-brand-orange rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center shadow-xl">
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 transition-transform">
            <Icon className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <div className="w-12 h-1 bg-brand-orange rounded-full" />
          <p className="text-white/40 text-[10px] mt-8 uppercase tracking-[0.2em] font-bold">Click to flip</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-brand-blue border-2 border-brand-orange rounded-[2.5rem] p-10 flex items-center justify-center text-center rotate-y-180 shadow-xl"
        >
          <p className="text-white leading-relaxed text-lg font-medium italic">
            "{content}"
          </p>
        </div>
      </motion.div>
    </div>
  );
}
