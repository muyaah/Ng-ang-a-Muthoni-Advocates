import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { CONTACT_INFO, FIRM_NAME } from '@/src/lib/constants';

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-blue rounded-full mb-6 text-white">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Book An Appointment Today</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8">
            Book an appointment with our legal experts whenever or wherever you want!
          </p>
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-8 py-6 text-lg group">
            <Link to="/booking">
              Book Appointment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Safeguarding our clients' best interests within the four corners of the rule of law.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-zinc-200 shadow-sm shrink-0">
                  <Phone className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">{CONTACT_INFO.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-zinc-200 shadow-sm shrink-0">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">{CONTACT_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-zinc-200 shadow-sm shrink-0">
                  <Mail className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">{CONTACT_INFO.email}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Navigate</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Discover</Link></li>
              <li><Link to="/people" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Our People</Link></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Download Profile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Solution</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Get in Touch</Link></li>
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Technology</Link></li>
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Who're We?</Link></li>
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Expertise</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Discover</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Latest News</Link></li>
              <li><Link to="/blog" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">New Arrivals</Link></li>
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Solution</Link></li>
              <li><Link to="/people" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Gain Profession</Link></li>
              <li><Link to="/people" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors">Career</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-brand-blue transition-colors flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a></li>
              <li><a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="text-sm text-zinc-500 hover:text-brand-blue transition-colors flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">
            ©Copyright <span className="text-brand-blue font-medium">NgangaMuthoni.com</span> All rights reserved. 2024
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors">Privacy & Policy</Link>
            <Link to="/terms" className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
