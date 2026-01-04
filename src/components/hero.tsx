'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppButton from './AppButton';

// Consistent fade-up animation variant
const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center relative h-[500px] md:h-[600px] lg:h-[700px] px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Video Background with Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
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
        className='container mx-auto flex flex-col justify-end h-full'
      >
        <motion.div
          className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[70px] relative z-10 w-2/3 pb-20'
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.div
            className="flex flex-col text-center lg:text-left text-4xl md:text-6xl lg:text-8xl w-full text-white font-bold leading-tight tracking-[-5px]"
            variants={fadeUpVariants}
          >
            <span>
              Exceptional
            </span>
            <span>
              dental care.
            </span>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col w-full gap-8 lg:gap-[40px] text-white text-center lg:text-left justify-center"
            variants={fadeUpVariants}
          >
            <h2
              className="text-xl md:text-xl lg:text-2xl font-light text-white"
            >
              Our team is committed to delivering top-quality, compassionate treatments in a comfortable environment.
            </h2>

            <div>
              <AppButton title='Book Now' onTap={() => {
                window.location.href = "/#book-visit"
              }} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;