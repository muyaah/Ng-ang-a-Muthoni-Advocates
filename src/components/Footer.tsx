import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { CONTACT_INFO, FIRM_NAME } from '@/src/lib/constants';

export function Footer() {
  return (
    <footer className="bg-white text-zinc-900 pt-0 pb-12 relative overflow-hidden border-t border-zinc-100">
      {/* Booking Appointment Strip - Orange */}
      <div className="bg-brand-orange py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-8 text-white shadow-lg shadow-brand-blue/20">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-extrabold text-brand-blue mb-6 tracking-tighter">Book An Appointment Today</h2>
          <p className="text-brand-blue/70 max-w-2xl mx-auto mb-10 text-lg font-medium">
            Connect with our legal experts across our Nairobi and Limuru offices. We are here to safeguard your interests.
          </p>
          <Button asChild className="bg-brand-blue hover:bg-white text-white hover:text-brand-blue rounded-none px-10 py-8 text-xl font-bold group transition-all border-2 border-transparent hover:border-brand-blue">
            <Link to="/booking">
              Book Appointment <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <Logo variant="footer" className="mb-0" />
            <p className="text-zinc-500 text-base leading-relaxed max-w-sm mb-10 mt-8">
              Ng'ang'a Muthoni & Company Advocates is committed to listen and safeguard our clients' best interests within the four corners of the rule of law.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href={`https://wa.me/${CONTACT_INFO.nairobi.whatsapp}`} icon={MessageCircle} />
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-8">Our Offices</h3>
            <div className="space-y-10">
              {/* Nairobi Office */}
              <div className="space-y-3">
                <h4 className="text-zinc-900 font-bold text-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange" /> {CONTACT_INFO.nairobi.name}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed pl-6">
                  {CONTACT_INFO.nairobi.address}
                </p>
                <div className="pl-6 space-y-2">
                  <a href={`tel:${CONTACT_INFO.nairobi.phone}`} className="text-zinc-500 hover:text-brand-orange text-sm block transition-colors">
                    {CONTACT_INFO.nairobi.phone}
                  </a>
                  <a href={`mailto:${CONTACT_INFO.nairobi.email}`} className="text-zinc-500 hover:text-brand-orange text-sm block transition-colors">
                    {CONTACT_INFO.nairobi.email}
                  </a>
                </div>
              </div>

              {/* Limuru Office */}
              <div className="space-y-3">
                <h4 className="text-zinc-900 font-bold text-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange" /> {CONTACT_INFO.limuru.name}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed pl-6">
                  {CONTACT_INFO.limuru.address}
                </p>
                <div className="pl-6 space-y-2">
                  <a href={`tel:${CONTACT_INFO.limuru.phone}`} className="text-zinc-500 hover:text-brand-orange text-sm block transition-colors">
                    {CONTACT_INFO.limuru.phone}
                  </a>
                  <a href={`mailto:${CONTACT_INFO.limuru.email}`} className="text-zinc-500 hover:text-brand-orange text-sm block transition-colors">
                    {CONTACT_INFO.limuru.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-8">Navigation</h3>
            <ul className="space-y-4">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/people">Our People</FooterLink>
              <FooterLink to="/blog">Insights</FooterLink>
              <FooterLink to="/booking">Booking</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-8">Legal</h3>
            <ul className="space-y-4">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/disclaimer">Disclaimer</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} <span className="text-brand-blue font-medium">Ng'ang'a Muthoni & Co. Advocates</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-zinc-400 text-xs font-medium uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-brand-orange transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-orange transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-brand-orange transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-zinc-500 hover:text-brand-orange text-sm transition-all hover:translate-x-1 inline-block">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-none border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-brand-orange hover:border-brand-orange transition-all"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
