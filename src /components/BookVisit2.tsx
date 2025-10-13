'use client';

import React from "react";
import { motion } from "framer-motion";

const features = [
  "Comprehensive Services",
  "Experienced Professionals",
  "State-of-the-Art Technology",
  "Personalized Treatment Plans",
  "Comfortable Relaxing Environment",
];

const BookVisit2 = () => {
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
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
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
    <section className="bg-gradient-to-br from-[#f6f7ff] via-[#f6f7ff] to-indigo-50/50 py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column - Features */}
        <motion.div className="order-2 lg:order-1" variants={itemVariants}>
          <motion.p 
            className="text-indigo-600 font-semibold uppercase mb-8 text-sm md:text-base tracking-wider"
            variants={itemVariants}
          >
            Book a Visit
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
          >
            {features.map((item, i) => (
              <motion.button
                key={i}
                className="px-6 py-4 border-2 border-indigo-600 rounded-full text-indigo-600 text-sm md:text-base font-semibold hover:bg-indigo-50 hover:border-indigo-700 hover:text-indigo-700 transition-all duration-300 text-left group relative overflow-hidden"
                variants={featureVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <motion.div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.5 }}
                />
                
                <span className="relative z-10 group-hover:translate-x-4 transition-transform duration-300">
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
            className="relative"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <img
              src="https://framerusercontent.com/images/Tk5H6Gua9njSZMCM2LwGgGGlFu4.jpg"
              alt="Professional Dentist"
              className="rounded-3xl w-full max-w-[350px] h-[400px] md:h-[450px] object-cover shadow-2xl"
            />
            
            {/* Decorative frame */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            
            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl border border-gray-100"
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
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div className="order-3" variants={itemVariants}>
          {/* Icon */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://framerusercontent.com/images/91516UD7bQ6A5Eb1kKCG1bFNhbA.svg"
              alt="Call Icon"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </motion.div>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Schedule your visit with us today!
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed"
            variants={itemVariants}
          >
            Our dedicated team at Dental is here to provide you with expert
            dental care in a comfortable and welcoming environment.
          </motion.p>

          <motion.button 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-base md:text-lg group"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              Schedule an Appointment
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-32 left-20 w-3 h-3 bg-indigo-400 rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-2 h-2 bg-purple-400 rounded-full opacity-50"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default BookVisit2;