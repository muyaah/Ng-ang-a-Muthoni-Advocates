import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Navigating Data Protection Laws in Kenya",
    excerpt: "With the recent implementation of the Data Protection Act, businesses must ensure they are compliant to avoid heavy penalties.",
    date: "April 10, 2024",
    author: "Priestely Gitonga",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "The Future of Fintech Regulation",
    excerpt: "How the Central Bank of Kenya is shaping the future of digital payments and financial innovation.",
    date: "April 5, 2024",
    author: "Antony Ng'ang'a",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Real Estate Trends: What You Need to Know",
    excerpt: "A comprehensive guide to property acquisition and management in the current economic climate.",
    date: "March 28, 2024",
    author: "Kelvin Kamau",
    image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Our Blog
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tighter mb-8"
          >
            Legal Insights <br />
            <span className="text-brand-blue">& Perspectives</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 bg-zinc-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-brand-blue text-[10px] font-bold uppercase tracking-widest rounded-full">
                     Legal News
                   </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
