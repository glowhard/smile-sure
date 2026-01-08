
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Consistent fade-up animation variant
const FADE_DURATION = 0.7;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: FADE_DURATION
    }
  }
};

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}

const OurServices = () => {
  // 8 services in 6 boxes from @footer.tsx (see file_context_0)
  // Scaling, Tooth Coloured Filling, Ortho Braces, Root Canal Treatment, Crowns & Bridges, Dentures, Children Dental Care, Tooth Extraction

  const services: Service[] = [
    {
      title: "Scaling",
      description: "Remove tough plaque and tartar with gentle ultrasonic scaling and polishing, keeping your gums healthy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15l3.75 3.75L12 9l5.25 9 3.75-2.25" />
        </svg>
      )
    },
    {
      title: "Tooth Coloured Filling",
      description: "Fix cavities and restore your smile with natural-looking, tooth-coloured composite fillings for a seamless look.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 6.487l-.349-1.78A2.25 2.25 0 0014.3 3.75H9.7a2.25 2.25 0 00-2.213 1.957l-.35 1.78M4.75 8.25h14.5m-12.5 0v8.625a2.25 2.25 0 002.25 2.25h5.5a2.25 2.25 0 002.25-2.25V8.25" />
        </svg>
      )
    },
    {
      title: "Ortho Braces",
      description: "Straighten crooked teeth with braces and aligners, helping you achieve a confident, beautiful smile.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5v9a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 16.5v-9A2.25 2.25 0 0018.75 5.25H5.25A2.25 2.25 0 003 7.5zm0 0l9 6 9-6" />
        </svg>
      )
    },
    {
      title: "Root Canal Treatment",
      description: "Save a badly decayed or painful tooth with advanced root canal therapy and modern pain relief.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c1.657 0 3-5.373 3-12S13.657 3 12 3s-3 5.373-3 12 1.343 6 3 6zm0 0V3" />
        </svg>
      )
    },
    {
      title: "Crowns & Bridges",
      description: "Restore damaged, cracked, or missing teeth with strong crowns and bridges that look and feel natural.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 7.5l5.5-4.5 5.5 4.5V18a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 016.5 18V7.5z" />
        </svg>
      )
    },
    {
      title: "Dentures",
      description: "Replace multiple missing teeth with comfortable, custom-made dentures for natural look and function.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.75 10.5c0 5.385 4.865 10 10.75 10S24.25 15.885 24.25 10.5V8.25h-21.5V10.5zm0 0H4.25M19.75 10.5h1.5" />
        </svg>
      )
    },
    {
      title: "Children Dental Care",
      description:
        "Gentle, friendly dental care for kids—including cleanings, sealants, fluoride, habit guidance, and preventive treatments for a healthy start.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3.866 4.477-7 10-7s10 3.134 10 7" />
        </svg>
      )
    },
    {
      title: "Tooth Extraction",
      description:
        "Safe and comfortable tooth extractions for all ages, using modern techniques to ensure patient comfort and a smooth recovery.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 19V6a1 1 0 00-2 0v13m7-7a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Regular Dental Check-up",
      description: "Comprehensive dental check-ups to maintain oral health, prevent cavities, and spot issues early.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 13.5c.708 1.13 2.203 2 4 2s3.292-.87 4-2m-8-3a1.5 1.5 0 003 0 1.5 1.5 0 10-3 0zm7 0a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0z" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 md:mb-20 lg:mb-24 gap-8 sm:gap-12">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] sm:leading-[0.95]"
            >
              We are committed to providing <br className="hidden sm:block" />
              a range of dental services.
            </motion.h2>
          </div>
          <motion.div
            className="hidden lg:flex w-[220px] xl:w-[300px] h-auto items-end justify-end flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 160 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.img
              src="/assets/teeth-character.png"
              alt="Cute tooth character"
              className="w-full h-auto object-contain scale-[1.5]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 140 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl sm:rounded-[40px] md:rounded-[48px] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] flex flex-col items-start h-full transition-all duration-500 hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.12)] hover:border-primary/20"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 md:mb-10 transition-colors ${service.isFeatured ? 'bg-primary text-white' : 'bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white'
                }`}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-6 sm:mb-8 md:mb-12 flex-grow">
                {service.description}
              </p>

              {/* <button className={`px-8 py-4 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${service.isFeatured
                ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90'
                : 'bg-white border-2 border-slate-100 text-slate-400 hover:border-primary hover:text-primary'
                }`}>
                Learn More
              </button> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;

