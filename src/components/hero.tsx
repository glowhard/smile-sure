'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppButton from './AppButton';

// Staggered animation variants
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] px-6 md:px-12 lg:px-16 overflow-hidden">

      {/* Video Background with Overlay */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/hero-vid.mp4"
        />
        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="container mx-auto relative z-10 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Promotional Badge */}
        <motion.div
          className="mb-8 md:mb-12 flex justify-center lg:justify-start"
          variants={fadeUpVariants}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white">
            <span className="text-sm md:text-base font-medium">
              Free Digital X-Ray + <span className="text-yellow-300 font-semibold">10% Off</span> All Treatments
            </span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Headline */}
          <motion.div variants={fadeUpVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight text-center lg:text-left">
              Exceptional<br />
              <span className="text-white/90">dental care.</span>
            </h1>
          </motion.div>

          {/* Right: Description & CTA */}
          <motion.div
            className="flex flex-col gap-6 text-center lg:text-left"
            variants={fadeUpVariants}
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Our team is committed to delivering top-quality, compassionate treatments in a comfortable environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AppButton
                title='Book Appointment'
                onTap={() => {
                  window.location.href = "/#book-visit"
                }}
              />
              <button
                onClick={() => window.location.href = "/services"}
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Our Services
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Hero;