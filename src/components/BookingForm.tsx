import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';
import { Clock, User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export function BookingForm() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, we'd save to Firebase here
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">Booking Confirmed!</h2>
        <p className="text-zinc-500 mb-8">We've received your request and will contact you shortly to confirm the details.</p>
        <Button onClick={() => setSubmitted(false)} className="bg-brand-blue text-white">
          Book Another Appointment
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
          1. Select a Date
        </h3>
        <Card className="border-zinc-200 shadow-xl shadow-zinc-200/50 overflow-hidden rounded-3xl">
          <CardContent className="p-4">
            <Calendar 
              onChange={(val) => setDate(val as Date)} 
              value={date}
              className="w-full border-none font-sans"
              minDate={new Date()}
            />
          </CardContent>
        </Card>
        
        <div className="mt-8 p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
          <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Selected Date
          </h4>
          <p className="text-zinc-600 font-medium">
            {date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
          2. Your Information
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                <Input required placeholder="John Doe" className="pl-10 py-6 rounded-xl border-zinc-200 focus:ring-brand-blue" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                <Input required type="email" placeholder="john@example.com" className="pl-10 py-6 rounded-xl border-zinc-200 focus:ring-brand-blue" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Legal Service Needed</label>
            <select className="w-full p-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-blue outline-none bg-white">
              <option>Banking & Financial Services</option>
              <option>Fintech Law</option>
              <option>Commercial Transactions</option>
              <option>Technology & Data Protection</option>
              <option>Litigation & Dispute Resolution</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Message / Case Brief</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
              <Textarea required placeholder="Tell us more about your legal needs..." className="pl-10 py-4 min-h-[150px] rounded-xl border-zinc-200 focus:ring-brand-blue" />
            </div>
          </div>

          <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-8 text-lg font-bold rounded-xl shadow-xl shadow-brand-blue/20">
            Confirm Booking
          </Button>
        </form>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .react-calendar {
          width: 100%;
          background: white;
          border: none;
          font-family: inherit;
        }
        .react-calendar__navigation button {
          color: #294b9c;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .react-calendar__tile--now {
          background: #f9ac2c20;
          color: #f9ac2c;
          font-weight: bold;
        }
        .react-calendar__tile--active {
          background: #294b9c !important;
          color: white !important;
          border-radius: 8px;
        }
        .react-calendar__tile:hover {
          background: #f4f4f5;
          border-radius: 8px;
        }
      `}} />
    </div>
  );
}
