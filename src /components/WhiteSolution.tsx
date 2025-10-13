'use client';

import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: "https://framerusercontent.com/images/IcJUnaGk8VeLcwULCEg3wzQlhI.svg",
    title: "In-Office Professional Whitening",
    description:
      "Our whitening treatment combines advanced technology, expert techniques, and quality products to deliver results.",
  },
  {
    icon: "https://framerusercontent.com/images/MPmtH9mXcmlTUsoivBgF7sorYA.svg",
    title: "Take-Home Whitening Kits",
    description:
      "With custom trays and professional-grade gel, you can whiten your smile comfortably at your own pace from home.",
  },
  {
    icon: "https://framerusercontent.com/images/Uad0icXI22m7urNiziHHdiV22ow.svg",
    title: "Stain Removal and Polishing",
    description:
      "Our cleaning and polishing treatments eliminate stains from food, drinks, and smoking, bringing back your teeth's natural shine.",
  },
];

const WhiteSolution = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50/30 flex flex-col items-center justify-center py-16 lg:py-20 px-4 sm:px-6 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-indigo-200/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
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
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <motion.p 
            className="text-indigo-600 font-semibold uppercase tracking-wide mb-4 text-sm md:text-base"
            variants={itemVariants}
          >
            Achieve a Brighter, Whiter Smile
          </motion.p>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            We offer effective teeth whitening solutions.
          </motion.h2>

          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
            variants={itemVariants}
          >
            Whether you're looking to enhance your smile for a special occasion or
            simply want to improve your everyday appearance.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          className="grid gap-8 md:gap-12 sm:grid-cols-1 md:grid-cols-3 w-full max-w-6xl mx-auto mb-16"
          variants={containerVariants}
        >
          {solutions.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center px-4 sm:px-6 py-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-indigo-600 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-20 group-hover:opacity-60"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="/contact-us"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-base md:text-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Make Your Teeth Whiter
            <motion.svg
              className="w-5 h-5"
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

export default WhiteSolution;