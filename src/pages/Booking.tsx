import React from 'react';
import { motion } from 'framer-motion';
import { BookingForm } from '@/src/components/BookingForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/src/lib/constants';

export default function Booking() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block">Booking</span>
              <h1 className="text-5xl font-extrabold text-zinc-900 tracking-tighter mb-8 leading-tight">
                Schedule a <br />
                <span className="text-brand-blue">Consultation</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
                Take the first step towards resolving your legal matters. Choose a convenient time and our team will get back to you.
              </p>

              <div className="space-y-8">
                {/* Nairobi Office */}
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <h3 className="font-bold text-brand-blue mb-4 uppercase tracking-widest text-xs">Nairobi Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                      <p className="text-zinc-600">{CONTACT_INFO.nairobi.phone}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                      <p className="text-zinc-600">{CONTACT_INFO.nairobi.email}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                      <p className="text-zinc-600">{CONTACT_INFO.nairobi.address}</p>
                    </div>
                  </div>
                </div>

                {/* Limuru Office */}
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <h3 className="font-bold text-brand-blue mb-4 uppercase tracking-widest text-xs">Limuru Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                      <p className="text-zinc-600">{CONTACT_INFO.limuru.phone}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                      <p className="text-zinc-600">{CONTACT_INFO.limuru.email}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                      <p className="text-zinc-600">{CONTACT_INFO.limuru.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
