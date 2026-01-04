'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppButton from './AppButton';
import { useRouter } from 'next/navigation';

const AboutClinic = () => {
  const router = useRouter();
  // Consistent fade-up animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      },
    },
  };

  const featureVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      },
    },
  };

  const videoVariants: any = {
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
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row w-full gap-10 lg:gap-12">
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
            className="text-primary font-black tracking-[0.3em] text-xs uppercase"
            variants={itemVariants}
          >
            About Clinic
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tighter leading-tight"
            variants={itemVariants}
          >
            Dental is a modern practice dedicated to exceptional care in a welcoming environment.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-base md:text-lg xl:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl"
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
              className="flex items-start gap-4 lg:gap-6 group rounded-2xl transition-all duration-300 hover:bg-secondary/50"
              variants={featureVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >

              <div className="flex-1">
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
                  Patient-Centered Care
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base xl:text-lg">
                  We prioritize the well-being and comfort of our patients, offering personalized
                  treatments and a supportive environment to make every visit a positive experience.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-start gap-4 lg:gap-6 group rounded-2xl transition-all duration-300 hover:bg-secondary/50"
              variants={featureVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >

              <div className="flex-1">
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
                  Advanced Treatments
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base xl:text-lg">
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
            <AppButton title='About our Clinic' onTap={() => router.push("/about")} />
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
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
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
