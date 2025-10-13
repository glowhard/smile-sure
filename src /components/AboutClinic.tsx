'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutClinic = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="flex flex-col lg:flex-row w-full bg-[#F9FAFB] min-h-screen lg:min-h-[600px]">
      {/* Left Content */}
      <motion.div 
        className="flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full lg:w-1/2 py-12 lg:py-16 space-y-6 lg:space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Label */}
        <motion.p 
          className="text-sm font-semibold text-[#4041D1] uppercase tracking-wide"
          variants={itemVariants}
        >
          About Clinic
        </motion.p>

        {/* Main Heading */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#11081C] leading-tight"
          variants={itemVariants}
        >
          Dental is a modern practice dedicated to exceptional care in a welcoming environment.
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl"
          variants={itemVariants}
        >
          Our clinic is equipped with the latest technology and staffed by highly trained
          professionals who prioritize your comfort and well-being.
        </motion.p>

        {/* Features */}
        <motion.div 
          className="space-y-6 lg:space-y-8"
          variants={containerVariants}
        >
          {/* Feature 1 */}
          <motion.div 
            className="flex items-start gap-4 lg:gap-6 group"
            variants={featureVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://framerusercontent.com/images/aJApq07b2tRU9SdYq7jc5ldecI.svg"
                alt="Care Icon"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-semibold text-[#4041D1] mb-2 group-hover:text-[#2f30a8] transition-colors duration-300">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We prioritize the well-being and comfort of our patients, offering personalized
                treatments and a supportive environment to make every visit a positive experience.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="flex items-start gap-4 lg:gap-6 group"
            variants={featureVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://framerusercontent.com/images/Uad0icXI22m7urNiziHHdiV22ow.svg"
                alt="Tooth Icon"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-semibold text-[#4041D1] mb-2 group-hover:text-[#2f30a8] transition-colors duration-300">
                Advanced Treatments
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We are dedicated to providing the highest standard of dental care using advanced
                techniques and state-of-the-art technology, ensuring optimal results for our patients.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
        >
          <motion.a
            href="/about-us"
            className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-[#4041D1] hover:bg-[#2f30a8] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(64, 65, 209, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            About Our Clinic
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Video */}
      <motion.div 
        className="flex justify-center items-center w-full lg:w-1/2 p-6 lg:p-8 xl:p-12"
        variants={videoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
          }}
          transition={{ duration: 0.3 }}
        >
          <video
            src="https://framerusercontent.com/assets/QIxj4M3Ku5fa6SWTZWqzNoDt1A.mp4"
            poster="https://framerusercontent.com/images/F8S4eX96Pul5uYP4Yc6E8GH3aM.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Floating play indicator */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutClinic
