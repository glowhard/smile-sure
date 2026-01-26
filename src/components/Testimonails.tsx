
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
  rating: number;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    title: "Very Good Experience",
    quote:
      "I have been visiting SmileSure for some time now. The doctors and staff are very polite and helpful. The clinic is clean and well maintained.",
    author: "Pooja Sharma",
    rating: 5,
  },
  {
    id: 2,
    title: "Excellent Braces Treatment",
    quote:
      "Mera braces treatment yahin se hua aur experience kaafi smooth raha. Dr. Shrestha ne sab clearly explain kiya. Results se main kaafi happy hoon.",
    author: "Amit Verma",
    rating: 5,
  },
  {
    id: 3,
    title: "Friendly and Professional",
    quote:
      "From reception to the dentist, everyone was friendly and professional. They explained each step clearly and made me feel comfortable throughout the visit.",
    author: "Rohit Mehta",
    rating: 5,
  },
  {
    id: 4,
    title: "Comfortable Experience",
    quote:
      "Usually mujhe dental clinics se thoda fear lagta hai, but SmileSure ka experience kaafi comfortable raha. Staff are calm and patient. Highly recommend.",
    author: "Simran Kaur",
    rating: 5,
  },
  {
    id: 5,
    title: "Smooth Appointment Process",
    quote:
      "Appointment scheduling was very easy through WhatsApp. Waiting time was minimal and the treatment went smoothly. Overall a very good experience.",
    author: "Rahul Malhotra",
    rating: 5,
  },
  {
    id: 6,
    title: "Great for Kids",
    quote:
      "Mere child ka first dental visit yahin hua. Staff ne kaafi ache se handle kiya aur child ko comfortable feel hua. Very patient with children.",
    author: "Anjali Singh",
    rating: 5,
  },
  {
    id: 7,
    title: "Clean and Modern Clinic",
    quote:
      "The clinic in Sector 120 is very clean and well organized. Modern equipment and extremely polite staff. Would definitely recommend to neighbors.",
    author: "Sandeep Kumar",
    rating: 5,
  },
  {
    id: 8,
    title: "Painless Treatment",
    quote:
      "Dr. Shrestha took time to explain the issue properly. Root canal treatment was completely painless. Staff was also very helpful and caring.",
    author: "Neha Gupta",
    rating: 5,
  },
  {
    id: 9,
    title: "Well Managed Clinic",
    quote:
      "Booking appointment was simple and follow-up reminders were sent on time. Everything felt well organized and professional.",
    author: "Karan Khanna",
    rating: 4,
  },
  {
    id: 10,
    title: "Excellent Root Canal",
    quote:
      "Root canal treatment went much better than I expected. Minimal pain during and after the procedure. Post-treatment care instructions were very clear.",
    author: "Meenal Joshi",
    rating: 5,
  },
  {
    id: 11,
    title: "Caring Staff",
    quote:
      "Staff ka behavior bahut acha tha aur doctor bhi patiently sunte hain. Saare doubts clear kiye without any rush. Overall positive experience.",
    author: "Vikas Arora",
    rating: 5,
  },
  {
    id: 12,
    title: "Professional Setup",
    quote:
      "Clinic looks modern and well maintained near Amrapali Zodiac. The whole team is professional and courteous. Very satisfied with the service.",
    author: "Ritika Jain",
    rating: 5,
  },
  {
    id: 13,
    title: "Good Experience Overall",
    quote:
      "Treatment was good and doctor explained everything clearly beforehand. Only suggestion is waiting time could be slightly better on busy days.",
    author: "Deepak Bansal",
    rating: 4,
  },
  {
    id: 14,
    title: "Cooperative Team",
    quote:
      "Staff is very cooperative and polite. They make you feel comfortable from the moment you enter. Felt at ease throughout the visit.",
    author: "Priya Nair",
    rating: 5,
  },
  {
    id: 15,
    title: "Amazing Results",
    quote:
      "Cosmetic treatment ke results kaafi ache aaye. My smile looks much better now aur confidence bhi improve hua. Thank you SmileSure!",
    author: "Arjun Mehra",
    rating: 5,
  },
  {
    id: 16,
    title: "Reliable Dental Care",
    quote:
      "Overall experience bahut achha raha. Doctors knowledgeable hain aur staff supportive hai. Prices are also reasonable for the quality of service.",
    author: "Kavita Saxena",
    rating: 5,
  },
  {
    id: 17,
    title: "Consistent Quality",
    quote:
      "Been here multiple times for different treatments and service has been consistently good. Doctors explain things honestly without unnecessary procedures.",
    author: "Mohit Aggarwal",
    rating: 5,
  },
  {
    id: 18,
    title: "Gentle Treatment",
    quote:
      "Pain kaafi kam tha during the filling procedure. Doctor ne continuously check kiya if I was comfortable. Very gentle approach.",
    author: "Nisha Kulkarni",
    rating: 5,
  },
  {
    id: 19,
    title: "Well Coordinated",
    quote:
      "Clinic is well managed and staff coordination is excellent. From registration to treatment, everything runs smoothly. Good experience overall.",
    author: "Alok Mishra",
    rating: 4,
  },
  {
    id: 20,
    title: "Highly Recommended",
    quote:
      "Good doctors, polite staff and clean clinic. Location in Sector 120 is also convenient. Would definitely recommend SmileSure to family and friends.",
    author: "Shweta Pandey",
    rating: 5,
  },
];


const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div
    className="bg-[#f8faff] rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-100 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:bg-white mb-4 sm:mb-6"
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-primary' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">{testimonial.title}</h3>
    <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-6 sm:mb-8 italic">&quot;{testimonial.quote}&quot;</p>
    <div className="flex items-center gap-3 sm:gap-4 mt-auto">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-white shadow-sm flex-shrink-0">
        <span className="text-sm sm:text-base font-bold text-primary">
          {testimonial.author.charAt(0)}
        </span>
      </div>
      <div>
        <h4 className="text-xs sm:text-sm lg:text-base font-black text-slate-900 uppercase tracking-tighter leading-none">{testimonial.author}</h4>
        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest mt-1 sm:mt-1.5">Patient Review</p>
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
            Real experiences from our valued patients. Discover why families in Noida <br className="hidden md:block" /> trust SmileSure for their dental care needs.
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
              items={allTestimonials.slice(0, 7)}
              speed={30}
              reverse={true}
            />
            {/* Column 2 */}
            <VerticalColumn
              items={allTestimonials.slice(7, 14)}
              speed={40}
              reverse={false}
            />
            {/* Column 3 */}
            <div className="hidden md:block">
              <VerticalColumn
                items={allTestimonials.slice(14, 20)}
                speed={35}
                reverse={true}
              />
            </div>
          </div>
        </div>

        {/* Stats Section Bottom */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-12 sm:pt-16 lg:pt-20 border-t border-slate-50">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-center px-4 mb-10 sm:mb-12">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">4.8/5</p>
              <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Google Rating</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">2,500+</p>
              <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Happy Patients</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">10+</p>
              <p className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider sm:tracking-widest uppercase text-slate-400 mt-1 sm:mt-2">Years Experience</p>
            </div>
          </div>

          {/* CTA to Google Reviews */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/anE6woKbe4bRXHZx7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              View All Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
