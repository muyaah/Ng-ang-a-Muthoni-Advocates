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
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-blue border border-zinc-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Call Us</h4>
                    <p className="text-zinc-500">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-blue border border-zinc-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Email Us</h4>
                    <p className="text-zinc-500">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-blue border border-zinc-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Visit Us</h4>
                    <p className="text-zinc-500">{CONTACT_INFO.address}</p>
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
