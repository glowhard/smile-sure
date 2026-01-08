'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroBottom = () => {
  const router = useRouter()

  const services = [
    { label: "Ortho Braces", href: "/services" },
    { label: "Root Canal Treatment", href: "/services" },
    { label: "Crowns & Bridges", href: "#" },
    { label: "Dentures", href: "/services" },
    { label: "Tooth Extraction", href: "/services" },
  ];

  const title = 'Services';
  const copy =
    'We offer a comprehensive range of dental services designed to meet the needs of every patient.';
  const img =
    'https://framerusercontent.com/images/dWARlvTfJvZGsuaCnPbV2hIzCRs.png';

  // Consistent fade-up animation variants
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  return (
    <motion.section
      className="container mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 xl:gap-[20px] px-4 sm:px-6 lg:px-0 transform translate-y-[-30px] sm:translate-y-[-40px] md:translate-y-[-50px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Section - Services Info */}
      <motion.div
        className="w-full lg:w-2/3 flex flex-col justify-stretch"
        variants={itemVariants}
      >
        <section className='h-[40px] sm:h-[50px] md:h-[70px] min-h-[40px] sm:min-h-[50px] md:min-h-[70px] bg-transparent'></section>
        <section
          aria-labelledby="services-title"
          className="rounded-2xl sm:rounded-3xl bg-secondary p-4 sm:p-6 md:p-8 lg:p-10 flex-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-6 md:gap-x-12">

            {/* LEFT – Headline */}
            <div className="lg:col-span-2">
              <h2
                id="services-title"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-slate-900 max-w-md"
              >
                We provide expert dental care tailored to your needs.
              </h2>
            </div>

            {/* RIGHT – Why Dental */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                  Why Dental?
                </h3>

                {/* Avatars */}
                <div className="hidden sm:flex -space-x-2">
                  {[
                    'https://framerusercontent.com/images/zyLihMsmSSdiL5g5jHJn4e6zQ.jpg',
                    'https://framerusercontent.com/images/0YT123QRbremRM1AgxCueBx7IRY.jpg',
                    'https://framerusercontent.com/images/yWUGDZMAYtE216zWWnYBZ0LBoRo.jpg',
                    'https://framerusercontent.com/images/BcSdxaffL9NSUbnZMFbwTXGgdcc.jpg',
                    'https://framerusercontent.com/images/puGp4Hi5DUcsbLLVVYEhrdP1lg.jpg',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* LEFT – Pills */}
            <div className="lg:col-span-2">
              <ul className="flex flex-wrap gap-2 sm:gap-3 max-w-md">
                {services.map((s) => (
                  <li key={s.label}>
                    <motion.span
                      className="inline-flex items-center rounded-full border-2 border-primary px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                      whileHover={{ y: -2, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {s.label}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT – Empty spacer (keeps alignment clean like image) */}
            <div className="hidden lg:block lg:col-span-2">
              <p className="text-base leading-7 text-slate-600 max-w-md">
                Whether you&apos;re visiting for a routine check-up or a more advanced
                procedure, we ensure your oral health is in the best hands,
                helping you achieve a confident, healthy smile.
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Right Section - Services Card */}
      <motion.div
        className="w-full lg:w-1/3 flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-full lg:h-full relative"
        variants={itemVariants}
      >
        <motion.div
          className="group w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-full overflow-hidden rounded-2xl sm:rounded-[28px] flex flex-col relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
          whileHover={{
            scale: 1.02,
            y: -8,
            transition: { duration: 0.4 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Photo */}
          <motion.div
            className="flex-1 relative overflow-hidden h-full"
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
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 cursor-pointer" onClick={() => {
            router.push('/services')
          }}>
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                {title}
              </motion.h3>
              <motion.div
                className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#a67c52] rounded-full mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>

            {/* Body copy */}
            <motion.div
              className="flex flex-col gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                {copy}
              </p>

              {/* Call to action */}
              <motion.div
                className="flex items-center gap-2 text-[#c19a6b] font-semibold cursor-pointer group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm sm:text-base group-hover:text-white transition-colors duration-300">Explore our services</span>
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:w-5 sm:h-5 group-hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
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

          <div className="absolute right-0 bottom-0 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-tl-2xl sm:rounded-tl-[32px] overflow-visible">

            {/* Left cut */}
            <div className="absolute -left-6 sm:-left-8 bottom-0 w-6 h-6 sm:w-8 sm:h-8 bg-transparent rounded-br-2xl sm:rounded-br-[32px] shadow-[12px_12px_0_12px_white] sm:shadow-[16px_16px_0_16px_white]" />

            {/* Top cut */}
            <div className="absolute right-0 -top-6 sm:-top-8 w-6 h-6 sm:w-8 sm:h-8 bg-transparent rounded-br-2xl sm:rounded-br-[32px] shadow-[12px_12px_0_12px_white] sm:shadow-[16px_16px_0_16px_white]" />

            {/* Arrow circle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg sm:text-xl shadow-md cursor-pointer"
                variants={{
                  initial: { scale: 1, backgroundColor: "#6e4e24", color: "#fff" },
                  hover: {
                    scale: 1.15,
                    backgroundColor: "#fff",
                    color: "#6e4e24",
                    transition: { duration: 0.25, ease: "easeOut" }
                  }
                }}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                →
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroBottom;
