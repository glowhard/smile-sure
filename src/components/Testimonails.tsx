
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
  handle: string;
  platform: 'Google' | 'Zocdoc' | 'Healthgrades' | 'Trustpilot';
  rating: number;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    title: "Very Good Experience",
    quote:
      "I have been visiting SmileSure for some time now. The doctors and staff are very polite and helpful. The clinic is clean and well maintained.",
    author: "Pooja Sharma",
    handle: "@poojasharma",
    platform: "Google",
    rating: 5,
  },
  {
    id: 2,
    title: "Highly Satisfied",
    quote:
      "Mera braces treatment yahin se hua aur experience kaafi smooth raha. Doctor ne sab clearly explain kiya. Results se main kaafi happy hoon.",
    author: "Amit Verma",
    handle: "@amitverma",
    platform: "Google",
    rating: 5,
  },
  {
    id: 3,
    title: "Friendly and Professional",
    quote:
      "From reception to the dentist, everyone was friendly and professional. They explained each step clearly and made me feel comfortable.",
    author: "Rohit Mehta",
    handle: "@rohitmehta",
    platform: "Google",
    rating: 5,
  },
  {
    id: 4,
    title: "Comfortable Experience",
    quote:
      "Usually mujhe dental clinics se thoda fear lagta hai, but SmileSure ka experience kaafi comfortable raha. Doctors are calm and patient.",
    author: "Simran Kaur",
    handle: "@simrankaur",
    platform: "Google",
    rating: 5,
  },
  {
    id: 5,
    title: "Good Overall Service",
    quote:
      "Appointment process was easy and waiting time was not too long. The treatment went smoothly. Overall a good experience.",
    author: "Rahul Malhotra",
    handle: "@rahulmalhotra",
    platform: "Google",
    rating: 5,
  },
  {
    id: 6,
    title: "Great for Kids",
    quote:
      "Mere child ka first dental visit yahin hua. Staff ne kaafi ache se handle kiya and made the experience stress-free.",
    author: "Anjali Singh",
    handle: "@anjalisingh",
    platform: "Google",
    rating: 5,
  },
  {
    id: 7,
    title: "Clean Clinic",
    quote:
      "The clinic is very clean and well organized. Modern equipment and polite staff. Would definitely recommend.",
    author: "Sandeep Kumar",
    handle: "@sandeepk",
    platform: "Google",
    rating: 5,
  },
  {
    id: 8,
    title: "Good Doctor",
    quote:
      "Doctor took time to explain the issue properly. Treatment was painless. Staff was also helpful.",
    author: "Neha Gupta",
    handle: "@nehagupta",
    platform: "Google",
    rating: 5,
  },
  {
    id: 9,
    title: "Smooth Process",
    quote:
      "Booking appointment was simple and follow-up was also good. Everything felt well managed.",
    author: "Karan Khanna",
    handle: "@karank",
    platform: "Google",
    rating: 4,
  },
  {
    id: 10,
    title: "Satisfied with Treatment",
    quote:
      "Root canal treatment went better than expected. Minimal pain and good post-treatment care.",
    author: "Meenal Joshi",
    handle: "@meenalj",
    platform: "Google",
    rating: 5,
  },
  {
    id: 11,
    title: "Nice Experience",
    quote:
      "Staff ka behavior kaafi acha tha aur doctor bhi patiently sunte hain. Overall positive experience.",
    author: "Vikas Arora",
    handle: "@vikasarora",
    platform: "Google",
    rating: 5,
  },
  {
    id: 12,
    title: "Professional Setup",
    quote:
      "Clinic looks modern and well maintained. The whole team is professional and courteous.",
    author: "Ritika Jain",
    handle: "@ritikaj",
    platform: "Google",
    rating: 5,
  },
  {
    id: 13,
    title: "Good Experience",
    quote:
      "Treatment was good and doctor explained everything clearly. Waiting time could be slightly better.",
    author: "Deepak Bansal",
    handle: "@deepakb",
    platform: "Google",
    rating: 4,
  },
  {
    id: 14,
    title: "Friendly Team",
    quote:
      "Staff is very cooperative and polite. Felt comfortable throughout the visit.",
    author: "Priya Nair",
    handle: "@priyanair",
    platform: "Google",
    rating: 5,
  },
  {
    id: 15,
    title: "Happy with Results",
    quote:
      "Cosmetic treatment ke results kaafi ache aaye. Confidence bhi improve hua.",
    author: "Arjun Mehra",
    handle: "@arjunmehra",
    platform: "Google",
    rating: 5,
  },
  {
    id: 16,
    title: "Good Dental Clinic",
    quote:
      "Overall experience achha raha. Doctors knowledgeable hain aur staff supportive hai.",
    author: "Kavita Saxena",
    handle: "@kavitas",
    platform: "Google",
    rating: 5,
  },
  {
    id: 17,
    title: "Reliable Clinic",
    quote:
      "Been here multiple times and service has been consistent. Doctors explain things honestly.",
    author: "Mohit Aggarwal",
    handle: "@mohita",
    platform: "Google",
    rating: 5,
  },
  {
    id: 18,
    title: "Comfortable Treatment",
    quote:
      "Pain kaafi kam tha aur doctor ne continuously check kiya if I was comfortable.",
    author: "Nisha Kulkarni",
    handle: "@nishak",
    platform: "Google",
    rating: 5,
  },
  {
    id: 19,
    title: "Well Managed",
    quote:
      "Clinic is well managed and staff coordination is good. Overall smooth experience.",
    author: "Alok Mishra",
    handle: "@alokm",
    platform: "Google",
    rating: 4,
  },
  {
    id: 20,
    title: "Recommended",
    quote:
      "Good doctors, polite staff and clean clinic. Would recommend SmileSure to others.",
    author: "Shweta Pandey",
    handle: "@shwetap",
    platform: "Google",
    rating: 5,
  },
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
    <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-6 sm:mb-8 italic">&quot;{testimonial.quote}&quot;</p>
    <div className="flex items-center gap-3 sm:gap-4 mt-auto">
      {/* <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm" /> */}
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
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">4.5/5</p>
            <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Average Rating</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">4k+</p>
            <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Happy Patients</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">99%</p>
            <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
