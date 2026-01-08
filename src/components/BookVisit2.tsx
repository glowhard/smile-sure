'use client';

import React from "react";
import { motion } from "framer-motion";
import AppButton from "./AppButton";
import { PhoneOutgoing } from "lucide-react";

const features = [
  "Comprehensive Services",
  "Experienced Professionals",
  "State-of-the-Art Technology",
  "Personalized Treatment Plans",
  "Comfortable Relaxing Environment",
];

const BookVisit2 = () => {
  // Consistent fade-up animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      },
    },
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Features */}
          <motion.div className="flex flex-col justify-between h-full order-3 lg:order-1" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-4 sm:mb-6"
            >
              Book a Visit
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 sm:gap-4"
              variants={containerVariants}
            >
              {features.map((item, i) => (
                <motion.button
                  key={i}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-[#362212] rounded-full text-[#362212] text-xs sm:text-sm md:text-base font-semibold hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 text-left group relative overflow-hidden"
                  variants={featureVariants}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background animation on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  <span className="relative z-10">
                    {item}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Middle Column - Doctor Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            variants={imageVariants}
          >
            <motion.div
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-none"
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.4 }
              }}
            >
              <img
                src="/assets/doctor.jpeg"
                alt="Professional Dentist"
                className="rounded-2xl sm:rounded-3xl w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-none lg:h-full object-cover shadow-2xl"
              />

              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating badge */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { delay: 0.5, duration: 0.6, ease: 'backOut' }
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#362212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="order-2 lg:order-3 h-full flex flex-col items-start justify-start lg:justify-end" variants={itemVariants}>

            <motion.div
              className="inline-flex items-center justify-center rounded-full bg-primary w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] md:w-[62px] md:h-[62px] mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { delay: 0.5, duration: 0.6, ease: 'backOut' }
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <PhoneOutgoing size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" color="#fff" />
            </motion.div>

            <motion.p
              className="flex items-center gap-3 mb-2"
              variants={itemVariants}
            >
              <span className="text-primary font-extrabold tracking-widest uppercase text-[17px] sm:text-lg md:text-xl drop-shadow-sm">
                Dr. Shrestha Singh
              </span>
            </motion.p>
            <motion.p
              className="text-slate-600 font-medium text-base sm:text-lg mb-4 tracking-tight leading-snug italic"
              variants={itemVariants}
            >
              BDS, MDS — Orthodontist <span className="inline text-sm text-primary font-semibold font-sans">(Braces Specialist)</span>
            </motion.p>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              Schedule your visit with us today!
            </motion.h2>

            <motion.p
              className="text-slate-500 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl font-medium leading-relaxed"
              variants={itemVariants}
            >
              Our dedicated team at Dental is here to provide you with expert
              dental care in a comfortable and welcoming environment.
            </motion.p>

            <AppButton title="Schedule an Appointment" onTap={() => {
              window.location.href = "/#book-visit"
            }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookVisit2;