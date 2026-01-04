'use client';

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Wonderful Experience!",
    text: "I've been visiting Dental for years, and I've always had a great experience. The staff is friendly, the office is clean and modern, and Dr. Martinez always takes the time to explain my treatment options. I'm so happy with my smile!",
    name: "Lisa Miles",
    role: "Orthodontic Service",
    image: "https://framerusercontent.com/images/BobOk65j6uDzBORMNee0gKRWGk.jpg",
  },
  {
    title: "Highly Recommended!",
    text: "Dr. Wilson and his team made my orthodontic journey smooth and stress-free. The results are incredible, and I feel more confident than ever. I highly recommend Dental for anyone looking for top-notch dental care!",
    name: "Daniel Dalen",
    role: "Orthodontic Service",
    image: "https://framerusercontent.com/images/cPnLmzkyXcZEojXUlOLK54T0yw.jpg",
  },
  {
    title: "Amazing Experience!",
    text: "I was nervous about getting my first root canal, but Dr. Martinez and the whole team were so reassuring, kind, and professional. The procedure was quick, and I felt no pain. I'm grateful for the excellent care I received!",
    name: "Anna Frost",
    role: "Orthodontic Service",
    image: "https://framerusercontent.com/images/G45vgYrNZfse4JlMfG3uP8wg.jpg",
  },
];

const Testimonials = () => {
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
    <section className="py-16 lg:py-20 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-[#a67c52]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
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
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.p 
            className="text-[#362212] font-semibold uppercase tracking-wide mb-4 text-sm md:text-base"
            variants={itemVariants}
          >
            Testimonials
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#362212] leading-tight"
            variants={itemVariants}
          >
            What our patients say.
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full mx-auto"
          variants={containerVariants}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-[#faf8ec] to-[#faf8ec] rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#362212] group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e1] to-[#ede4d3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                >
                  <svg className="w-8 h-8 text-[#362212]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </motion.div>

                {/* Title + Body */}
                <div className="mb-6">
                  <motion.h4 
                    className="text-lg md:text-xl font-bold text-[#362212] mb-4 group-hover:text-[#5c3d2e] transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  >
                    "{t.title}"
                  </motion.h4>
                  <motion.p 
                    className="text-gray-600 text-sm md:text-base leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  >
                    {t.text}
                  </motion.p>
                </div>

                {/* Client Info */}
                <motion.div 
                  className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 group-hover:bg-white group-hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-3 border-white shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </motion.div>
                  <div className="ml-4 flex-1">
                    <p className="font-bold text-gray-900 text-sm md:text-base">{t.name}</p>
                    <p className="text-[#362212] text-xs md:text-sm font-medium">{t.role}</p>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 + i * 0.05, duration: 0.3 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Decorative corner element */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-[#a67c52] rounded-full opacity-20 group-hover:opacity-60"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-40 left-16 w-3 h-3 bg-[#a67c52] rounded-full opacity-60"
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
        className="absolute bottom-32 right-20 w-2 h-2 bg-[#8b6f47] rounded-full opacity-50"
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

export default Testimonials;