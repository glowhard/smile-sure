'use client';

import React from "react";
import { motion } from "framer-motion";

const BookVisit = () => {
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

  const formVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'backOut',
        delay: 0.3,
      },
    },
  };

  const inputVariants = {
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

  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-[#4041D1]/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Top Section */}
      <motion.div 
        className="relative w-full max-w-6xl bg-gradient-to-br from-[#4041D1] via-[#4041D1] to-[#6366f1] rounded-3xl px-6 sm:px-8 md:px-16 py-12 md:py-16 text-center shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced Background pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden rounded-3xl">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 600 600"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="120" stroke="white" strokeWidth="0.5" />
          </motion.svg>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        <motion.p 
          className="text-sm font-semibold uppercase text-white/90 mb-4 relative tracking-wider"
          variants={itemVariants}
        >
          Book a Visit
        </motion.p>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight relative mb-6"
          variants={itemVariants}
        >
          Come visit us and experience compassionate care.
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-white/90 max-w-3xl mx-auto relative leading-relaxed"
          variants={itemVariants}
        >
          Whether it's your first visit or you're a returning patient, our team
          is here to provide you with personalized care in a relaxed and
          friendly environment.
        </motion.p>

        {/* Floating Form Card */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem] sm:bottom-[-4rem] w-[95%] sm:w-[90%] md:w-[85%] bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100"
          variants={formVariants}
        >
          <motion.p 
            className="text-gray-600 mb-6 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Fill out the form below, and we'll get back to you as soon as possible.
          </motion.p>
          
          <form className="flex flex-col lg:flex-row items-stretch gap-3 md:gap-4">
            <motion.input
              type="text"
              placeholder="FULL NAME*"
              className="flex-1 px-4 py-3 md:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1] focus:border-transparent transition-all duration-300 text-sm md:text-base placeholder-gray-500"
              variants={inputVariants}
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="email"
              placeholder="EMAIL*"
              className="flex-1 px-4 py-3 md:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1] focus:border-transparent transition-all duration-300 text-sm md:text-base placeholder-gray-500"
              variants={inputVariants}
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="tel"
              placeholder="PHONE NUMBER*"
              className="flex-1 px-4 py-3 md:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1] focus:border-transparent transition-all duration-300 text-sm md:text-base placeholder-gray-500"
              variants={inputVariants}
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="date"
              className="flex-1 px-4 py-3 md:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4041D1] focus:border-transparent transition-all duration-300 text-sm md:text-base"
              variants={inputVariants}
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.button
              type="submit"
              className="flex items-center justify-center px-6 py-3 md:py-4 rounded-xl bg-gradient-to-r from-[#4041D1] to-[#6366f1] hover:from-[#2f30a8] hover:to-[#4f46e5] transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl lg:w-auto w-full"
              variants={inputVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(64, 65, 209, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Spacer to account for floating form */}
      <div className="h-20 sm:h-16" />
    </section>
  );
};

export default BookVisit;