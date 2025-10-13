'use client';

import React from 'react';
import { motion } from 'framer-motion';
 
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'backOut',
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row justify-start items-center relative h-[500px] md:h-[600px] lg:h-[700px] px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Video Background with Overlay */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/hero-vid.mp4"
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />
      </motion.div>
 
      <motion.div 
        className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[70px] w-full max-w-7xl mx-auto relative z-10'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div 
          className="flex flex-col text-center lg:text-left text-4xl md:text-6xl lg:text-8xl w-full text-white font-bold leading-tight"
          variants={titleVariants}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Exceptional
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            dental care.
          </motion.span>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="flex flex-col w-full gap-8 lg:gap-[40px] text-white text-center lg:text-left justify-center"
          variants={contentVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-lg">
              Our team is committed to delivering top-quality, compassionate
              treatments in a comfortable environment.
            </p>
          </motion.div>
          
          <motion.div
            variants={buttonVariants}
          >
            <motion.button 
              className="text-black px-8 md:px-10 lg:px-[40px] py-4 md:py-5 lg:py-[24px] rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase text-sm md:text-base font-semibold shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-50"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};
 
export default Hero;