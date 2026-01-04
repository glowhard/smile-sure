'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroBottom = () => {
  const services = [
    { label: 'Preventive Care', href: './services/preventive-care' },
    { label: 'Oral Surgery', href: './services/oral-surgery' },
    {
      label: 'Emergency Care',
      href: './services/emergency-care',
    },
    { label: 'Orthodontics', href: './services/orthodontics' },
    { label: 'Cosmetic Dentistry', href: './services/cosmetic-dentistry' },
    { label: 'Dental Repair', href: './services/dental-repair' },
  ];

  const title = 'Services';
  const copy =
    'We offer a comprehensive range of dental services designed to meet the needs of every patient.';
  const img =
    'https://framerusercontent.com/images/dWARlvTfJvZGsuaCnPbV2hIzCRs.png';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section 
      className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-[40px] justify-start items-stretch px-4 sm:px-6 lg:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Section - Services Info */}
      <motion.div 
        className="flex-1 min-w-0"
        variants={itemVariants}
      >
        <section
          aria-labelledby="services-title"
          className="w-full rounded-3xl bg-[#faf8ec]/60 m-6 sm:p-8 md:p-10 "
        >
          <div className="flex flex-row gap-2 lg:gap-10 h-full">
            {/* Top: headline + pills */}
            <motion.div variants={itemVariants}>
              <motion.h2
                id="services-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-slate-900"
                variants={itemVariants}
              >
                We provide expert
                <br className="hidden sm:block" /> dental care tailored
                <br className="hidden sm:block" /> to your needs.
              </motion.h2>

              <nav aria-label="Dental services" className="mt-6 sm:mt-8">
                <motion.ul 
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {services.map((s, index) => (
                    <motion.li 
                      key={s.label}
                      variants={serviceVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.a
                        // href={s.href}
                        className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 border-[#a67c52] text-[#5c3d2e] hover:border-[#8b6f47] hover:bg-[#f5f0e1] cursor-pointer"
                        whileHover={{
                          backgroundColor: 'rgb(245, 240, 225)',
                          borderColor: 'rgb(139, 111, 71)',
                        }}
                      >
                        {s.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </motion.div>

            {/* Bottom: Why Dental */}
            <motion.div 
              className=" flex flex-col "
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.h3 
                  className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900"
                  variants={itemVariants}
                >
                  Why Dental?
                </motion.h3>

                {/* Avatar group (decorative) */}
                <motion.div
                  className="ml-4 hidden shrink-0 sm:flex"
                  aria-hidden="true"
                  variants={containerVariants}
                >
                  {[
                    'https://framerusercontent.com/images/zyLihMsmSSdiL5g5jHJn4e6zQ.jpg',
                    'https://framerusercontent.com/images/0YT123QRbremRM1AgxCueBx7IRY.jpg',
                    'https://framerusercontent.com/images/yWUGDZMAYtE216zWWnYBZ0LBoRo.jpg',
                    'https://framerusercontent.com/images/BcSdxaffL9NSUbnZMFbwTXGgdcc.jpg',
                    'https://framerusercontent.com/images/puGp4Hi5DUcsbLLVVYEhrdP1lg.jpg',
                  ].map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt=""
                      className="h-8 w-8 rounded-full ring-2 ring-white object-cover -ml-2 first:ml-0"
                      variants={avatarVariants}
                      custom={i}
                      whileHover={{ 
                        scale: 1.1, 
                        zIndex: 10,
                        transition: { duration: 0.2 }
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              <motion.p 
                className="text-base leading-7 text-slate-600"
                variants={itemVariants}
              >
                Whether you're visiting for a routine check-up or a more
                advanced procedure, we ensure your oral health is in the best
                hands, helping you achieve a confident, healthy smile.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Right Section - Services Card */}
      <motion.div 
        className="flex-shrink-0 w-full lg:w-auto lg:max-w-[400px] xl:max-w-[480px]"
        variants={itemVariants}
      >
        <motion.div 
          className="group w-full h-[400px] sm:h-[480px] lg:h-[520px] overflow-hidden rounded-[28px] bg-slate-900 flex flex-col relative shadow-2xl"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Photo */}
          <motion.div 
            className="flex-1 relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.6, ease: 'easeOut' }
            }}
          >
            <img
              src={img}
              alt="Dental services showcase"
              className="w-full h-full object-cover"
            />
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
          </motion.div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                {title}
              </motion.h3>
              <motion.div 
                className="w-12 h-1 bg-[#a67c52] rounded-full mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>

            {/* Body copy */}
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-white/95 text-base sm:text-lg leading-relaxed font-medium">
                {copy}
              </p>
              
              {/* Call to action */}
              <motion.div
                className="flex items-center gap-2 text-[#c19a6b] font-semibold"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm sm:text-base">Explore our services</span>
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:w-5 sm:h-5"
                  whileHover={{ x: 2 }}
                >
                  <path
                    d="M5 12h12M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced floating action button */}
          <motion.button
            type="button"
            className="absolute -bottom-6 -right-6 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-white shadow-2xl ring-1 ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            aria-label="View all services"
            whileHover={{ 
              y: -6,
              scale: 1.1,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              y: -3,
              transition: { duration: 0.1 }
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              rotate: 0,
              transition: { delay: 0.6, duration: 0.5, ease: 'backOut' }
            }}
          >
            {/* Enhanced arrow with gradient */}
            <motion.div
              className="relative"
              whileHover={{
                x: 2,
                transition: { duration: 0.2 }
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="sm:w-6 sm:h-6 text-slate-700"
              >
                <path
                  d="M5 12h12M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.button>

          {/* Subtle corner accent */}
          <motion.div
            className="absolute top-6 right-6 w-2 h-2 bg-[#a67c52] rounded-full opacity-60"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroBottom;
