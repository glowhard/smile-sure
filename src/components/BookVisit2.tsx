'use client';

import React from "react";
import { motion } from "framer-motion";
import AppButton from "./AppButton";
import { PhoneOutgoing, CheckCircle2 } from "lucide-react";

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
    <section id="meet-doctor" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-secondary/30 to-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

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
              className="flex items-center gap-2 mb-6 sm:mb-8"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
              <span className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase">
                Why Choose Us
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 sm:gap-4"
              variants={containerVariants}
            >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="px-4 py-3 sm:px-5 sm:py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-slate-800 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 text-left group relative overflow-hidden cursor-default shadow-sm hover:shadow-md"
                  variants={featureVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background animation on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10 flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="flex-1">{item}</span>
                  </div>
                </motion.div>
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
                scale: 1.03,
                y: -8,
                transition: { duration: 0.4 }
              }}
            >
              {/* Image container with enhanced border */}
              <div className="relative p-2 bg-gradient-to-br from-primary/20 via-secondary/10 to-white rounded-3xl sm:rounded-[2rem] shadow-2xl">
                <img
                  src="/assets/doctor.jpeg"
                  alt="Dr. Shrestha Singh - Professional Orthodontist"
                  className="rounded-2xl sm:rounded-3xl w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-none lg:h-full object-cover"
                />

                {/* Decorative frame */}
                <div className="absolute inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badge - Verified */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-br from-white to-primary/10 rounded-full p-3 sm:p-3 md:p-4 shadow-xl border-2 border-primary/30"
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
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-primary text-white rounded-2xl px-4 py-2.5 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.7, duration: 0.5 }
                }}
              >
                <p className="text-xs sm:text-sm font-bold">10+ Years</p>
                <p className="text-[10px] sm:text-xs opacity-90">Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="order-2 lg:order-3 h-full flex flex-col items-start justify-start lg:justify-end" variants={itemVariants}>

            <motion.a
              href="tel:9220688266"
              className="inline-flex items-center justify-center rounded-full bg-primary w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] md:w-[62px] md:h-[62px] mb-4 sm:mb-6 cursor-pointer hover:bg-primary/90 transition-colors"
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneOutgoing size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" color="#fff" />
            </motion.a>

            <motion.div
              className="bg-gradient-to-br from-primary/10 via-secondary/5 to-white border-2 border-primary/20 rounded-2xl p-4 sm:p-5 mb-6 shadow-lg"
              variants={itemVariants}
            >
              <p className="flex items-center gap-3 mb-2">
                <span className="text-primary font-extrabold tracking-widest uppercase text-[17px] sm:text-lg md:text-xl drop-shadow-sm">
                  Dr. Shrestha Singh
                </span>
              </p>
              <p className="text-slate-700 font-medium text-base sm:text-lg tracking-tight leading-snug">
                BDS, MDS — Orthodontist <span className="inline text-sm text-primary font-bold font-sans">(Braces Specialist)</span>
              </p>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              Transform Your Smile with Expert Care
            </motion.h2>

            <motion.p
              className="text-slate-500 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl font-medium leading-relaxed"
              variants={itemVariants}
            >
              Experience world-class dental care with Dr. Shrestha Singh and our dedicated team. From routine check-ups to advanced orthodontic treatments, we're committed to your oral health journey.
            </motion.p>

            <AppButton title="Book Your Appointment" onTap={() => {
              window.location.href = "/#book-visit"
            }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookVisit2;