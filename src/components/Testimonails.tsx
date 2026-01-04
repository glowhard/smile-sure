
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
  handle: string;
  image: string;
  platform: 'Google' | 'Zocdoc' | 'Healthgrades' | 'Trustpilot';
  rating: number;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1, title: "Wonderful Experience!", quote: "I've been visiting SmileSure for years. The staff is friendly and professional. The new facility is absolutely state-of-the-art.", author: "Lisa Miles", handle: "@lisamiles", platform: 'Google', rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
  },
  {
    id: 2, title: "Highly Recommended!", quote: "Dr. Wilson and his team made my orthodontic journey stress-free. The results are incredible! I never thought my smile could look this good.", author: "Daniel Dalen", handle: "@danieldalen", platform: 'Trustpilot', rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
  },
  {
    id: 3, title: "Amazing Experience!", quote: "I was nervous about my root canal, but the team was reassuring and professional. I felt no pain at all during the entire procedure.", author: "Anna Frost", handle: "@annafrost", platform: 'Healthgrades', rating: 5, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop",
  },
  {
    id: 4, title: "Professional & Caring", quote: "From the moment I walked in, I felt welcomed. The staff explained everything clearly. Highly recommended for anyone with anxiety.", author: "Samuel Peterson", handle: "@sampete", platform: 'Google', rating: 5, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=120&h=120&fit=crop",
  },
  {
    id: 5, title: "Excellent Pediatric Care", quote: "My daughter was nervous for her first visit, but the team made it fun. She left with a big smile and a toy! We found our forever dentist.", author: "Emily Rhodes", handle: "@emrhodes", platform: 'Zocdoc', rating: 5, image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&h=120&fit=crop",
  },
  {
    id: 6, title: "Perfect Restoration", quote: "My dental repair was seamless. I can finally eat comfortably again. Thank you so much for the care and attention to detail.", author: "Marcus Chen", handle: "@marcus_c", platform: 'Trustpilot', rating: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop",
  },
  {
    id: 7, title: "Gentle and Kind", quote: "I've always had dental anxiety, but this practice is different. They truly listen to your concerns and provide gentle care.", author: "Sarah Jenkins", handle: "@sjenkins", platform: 'Google', rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop",
  },
  {
    id: 8, title: "Life Changing Results", quote: "The cosmetic work I had done here changed how I see myself. I'm no longer afraid to laugh out loud in photos. Thank you!", author: "Robert Taylor", handle: "@robtaylor", platform: 'Zocdoc', rating: 5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
  },
  {
    id: 9, title: "Modern Technology", quote: "Impressive use of tech. Everything from booking to the actual procedure felt highly efficient and modern. 10/10 would recommend.", author: "Jessica Alba", handle: "@jalba_tech", platform: 'Healthgrades', rating: 5, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop",
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div 
    className="bg-[#f8faff] rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-100 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:bg-white mb-4 sm:mb-6"
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <div className="flex gap-0.5 sm:gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-primary' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="px-3 py-1 sm:px-4 sm:py-1.5 bg-white rounded-full border border-slate-50 text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest text-slate-400">
        {testimonial.platform}
      </div>
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">{testimonial.title}</h3>
    <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-6 sm:mb-8 italic">"{testimonial.quote}"</p>
    <div className="flex items-center gap-3 sm:gap-4 mt-auto">
      <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm" />
      <div>
        <h4 className="text-xs sm:text-sm lg:text-base font-black text-slate-900 uppercase tracking-tighter leading-none">{testimonial.author}</h4>
        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest mt-1 sm:mt-1.5">{testimonial.handle}</p>
      </div>
    </div>
  </motion.div>
);

const VerticalColumn = ({ items, speed = 20, reverse = false }: { items: Testimonial[], speed?: number, reverse?: boolean }) => {
  return (
    <div className="relative h-[700px] sm:h-[800px] md:h-[900px] lg:h-[1000px] overflow-hidden">
      <motion.div
        className="flex flex-col"
        animate={{
          y: reverse ? [0, -50 + '%'] : [-50 + '%', 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex flex-col shrink-0">
          {[...items, ...items].map((item, idx) => (
            <TestimonialCard key={`${item.id}-${idx}`} testimonial={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header matching the reference */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 space-y-4 sm:space-y-6 lg:space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1] sm:leading-tight px-4"
          >
            What our patients say.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed px-4"
          >
            Leveraging artificial intelligence and precision medical engineering to provide users <br className="hidden md:block" /> with valuable insights, painless treatments, and better aesthetic outcomes.
          </motion.p>
        </div>

        {/* Vertical Gallery Layout */}
        <div className="relative w-full mx-auto">
          {/* Top/Bottom Fade Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Column 1 */}
            <VerticalColumn
              items={allTestimonials.slice(0, 3)}
              speed={25}
              reverse={true}
            />
            {/* Column 2 */}
            <VerticalColumn
              items={allTestimonials.slice(3, 6)}
              speed={35}
              reverse={false}
            />
            {/* Column 3 */}
            <div className="hidden md:block">
              <VerticalColumn
                items={allTestimonials.slice(6, 9)}
                speed={30}
                reverse={true}
              />
            </div>
          </div>
        </div>

        {/* Stats Section Bottom */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-12 sm:pt-16 lg:pt-20 border-t border-slate-50 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-center px-4">
          <div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">4.9/5</p>
            <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Average Rating</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">12k+</p>
            <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Happy Patients</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">98%</p>
            <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
