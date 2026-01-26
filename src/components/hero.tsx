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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white shadow-lg">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm md:text-base font-medium">
              Special Offer: Free Digital X-Ray + <span className="text-yellow-300 font-bold">10% Off</span>
            </span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: Headline */}
          <motion.div variants={fadeUpVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight text-center lg:text-left">
              Your Smile,<br />
              <span className="text-white/90 whitespace-nowrap">Our Mission.</span>
            </h1>
          </motion.div>

          {/* Right: Description & CTA */}
          <motion.div
            className="flex flex-col gap-6 text-center lg:text-left"
            variants={fadeUpVariants}
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Expert orthodontic care and comprehensive dental treatments by Dr. Shrestha Singh (MDS Orthodontist) in the heart of Noida, Sector 120.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AppButton
                title='Book Your Visit'
                onTap={() => {
                  window.location.href = "/#book-visit"
                }}
              />
              <button
                onClick={() => window.location.href = "/services"}
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4"
              variants={fadeUpVariants}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="text-white">
                  <p className="text-lg md:text-xl font-bold leading-none">4.8/5</p>
                  <p className="text-xs md:text-sm text-white/70">Rating</p>
                </div>
              </div>

              <div className="h-10 w-px bg-white/20 hidden sm:block"></div>

              <div className="text-white">
                <p className="text-lg md:text-xl font-bold leading-none">2,500+</p>
                <p className="text-xs md:text-sm text-white/70">Happy Patients</p>
              </div>

              <div className="h-10 w-px bg-white/20 hidden sm:block"></div>

              <div className="text-white">
                <p className="text-lg md:text-xl font-bold leading-none">10+ Years</p>
                <p className="text-xs md:text-sm text-white/70">Experience</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Hero;