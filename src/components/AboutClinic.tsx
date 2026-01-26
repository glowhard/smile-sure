'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppButton from './AppButton';
import { useRouter } from 'next/navigation';
import { containerVariants, itemVariants, featureVariants } from '@/src/constants/animations';

const AboutClinic = () => {
  const router = useRouter();

  const videoVariants = {
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
    <section className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row w-full gap-8 sm:gap-10 lg:gap-12">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Label */}
          <motion.p
            className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase"
            variants={itemVariants}
          >
            About Clinic
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1] sm:leading-tight"
            variants={itemVariants}
          >
            SmileSure Dental Care brings expert orthodontic treatment to the heart of Noida.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-sm sm:text-base md:text-lg xl:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Located in Sector 120, our clinic is led by Dr. Shrestha Singh (BDS, MDS - Orthodontist) with over 10 years of experience. We combine advanced technology with personalized care to deliver exceptional results for every patient.
          </motion.p>

          {/* Features */}
          <motion.div
            className="space-y-4 sm:space-y-6 lg:space-y-8"
            variants={containerVariants}
          >
            {/* Feature 1 */}
            <motion.div
              className="flex items-start gap-3 sm:gap-4 lg:gap-6 group p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-secondary/50"
              variants={featureVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >

              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-primary/80 transition-colors duration-300">
                  Specialized Orthodontic Expertise
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-xs sm:text-sm md:text-base xl:text-lg">
                  As a dedicated orthodontist with MDS credentials, Dr. Shrestha Singh specializes in braces, aligners, and comprehensive smile correction treatments. Every case receives expert attention and personalized care tailored to your unique needs.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-start gap-3 sm:gap-4 lg:gap-6 group p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-secondary/50"
              variants={featureVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >

              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-primary/80 transition-colors duration-300">
                  Trusted by 2,500+ Patients in Noida
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-xs sm:text-sm md:text-base xl:text-lg">
                  With a 4.8/5 Google rating and over a decade of experience serving families in Noida, we've built our reputation on delivering consistent results, transparent communication, and compassionate care at every visit.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <AppButton title='About Us' onTap={() => router.push("/about")} />
            <button
              onClick={() => window.location.href = "/#meet-doctor"}
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Meet Dr. Shrestha Singh
            </button>
          </motion.div>
        </motion.div>

        {/* Right Video */}
        <motion.div
          className="flex justify-center items-center w-full lg:w-1/2"
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            whileHover={{
              scale: 1.02,
              boxShadow: '0_30px_80px_-20px_rgba(0,0,0,0.25)',
              y: -8
            }}
            transition={{ duration: 0.4 }}
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
      </div>
    </section>
  );
};

export default AboutClinic
