import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "John Kamau",
    role: "CEO, Tech Solutions",
    content: "Nganga Muthoni Advocates provided exceptional legal guidance during our merger. Their attention to detail and proactive approach saved us months of potential delays.",
    rating: 5
  },
  {
    name: "Sarah Wanjiku",
    role: "Real Estate Developer",
    content: "The best property law experts in Nairobi. They handled our complex land acquisition with absolute professionalism and integrity.",
    rating: 5
  },
  {
    name: "David Omondi",
    role: "Fintech Founder",
    content: "Their understanding of the Fintech landscape in Kenya is unmatched. They helped us navigate the regulatory requirements with ease.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-zinc-900 tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-brand-blue/10 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-zinc-600 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
