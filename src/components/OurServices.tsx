
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/src/constants/animations';

interface Service {
  id: string;
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
      id: "ortho-braces",
      title: "Ortho Braces",
      description: "Expert orthodontic treatment by Dr. Shrestha Singh (MDS Orthodontist). Metal braces, ceramic braces, and clear aligners to straighten teeth and perfect your smile with precision care.",
      isFeatured: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          <circle cx="6" cy="6.75" r="1.5" fill="currentColor" />
          <circle cx="12" cy="6.75" r="1.5" fill="currentColor" />
          <circle cx="18" cy="6.75" r="1.5" fill="currentColor" />
          <circle cx="6" cy="12" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="18" cy="12" r="1.5" fill="currentColor" />
          <circle cx="6" cy="17.25" r="1.5" fill="currentColor" />
          <circle cx="12" cy="17.25" r="1.5" fill="currentColor" />
          <circle cx="18" cy="17.25" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: "root-canal-treatment",
      title: "Root Canal Treatment",
      description: "Advanced, painless root canal therapy using modern rotary techniques and effective anesthesia. Save your natural tooth and eliminate pain with expert endodontic care.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18c-1.657 0-3 2.686-3 6s1.343 6 3 6m0-12c1.657 0 3 2.686 3 6s-1.343 6-3 6m0 0c-1.657 0-3 2.686-3 6s1.343 6 3 6m0-12c1.657 0 3 2.686 3 6s-1.343 6-3 6" />
        </svg>
      )
    },
    {
      id: "crowns-bridges",
      title: "Crowns & Bridges",
      description: "High-quality ceramic and zirconia crowns and bridges for damaged or missing teeth. Durable, natural-looking restorations that restore both function and aesthetics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L9 6l3 3 3-3-3-3Z" fill="currentColor" opacity="0.2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L9 6l3 3 3-3-3-3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9c0 1-1.343 5-3 5s-3-4-3-5 1.343-2 3-2 3 1 3 2Zm12 0c0 1-1.343 5-3 5s-3-4-3-5 1.343-2 3-2 3 1 3 2Zm-9 0c0 1-1.343 5-3 5s-3-4-3-5 1.343-2 3-2 3 1 3 2Z" />
        </svg>
      )
    },
    {
      id: "scaling",
      title: "Scaling & Polishing",
      description: "Professional deep cleaning with ultrasonic scaling to remove stubborn plaque, tartar, and stains. Keep your gums healthy and prevent periodontal disease.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      )
    },
    {
      id: "tooth-coloured-filling",
      title: "Tooth Coloured Filling",
      description: "Aesthetic composite fillings that blend seamlessly with your natural teeth. Repair cavities and minor chips with materials that are both durable and virtually invisible.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3m0-9a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3m0 0a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3m0-9a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9a3 3 0 0 1-3 3m0 0a3 3 0 0 1-3-3m3 3a3 3 0 0 1 3 3m-3-3a3 3 0 0 0-3 3" />
        </svg>
      )
    },
    {
      id: "dentures",
      title: "Dentures",
      description: "Custom-fitted complete and partial dentures to replace multiple missing teeth. Comfortable, natural-looking prosthetics that restore your smile and chewing function.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10c0-2 1-3 3-3s3 1 3 3v4c0 2-1 4-3 4s-3-2-3-4v-4Zm6 0c0-2 1-3 3-3s3 1 3 3v4c0 2-1 4-3 4s-3-2-3-4v-4Zm6 0c0-2 1-3 3-3s3 1 3 3v4c0 2-1 4-3 4s-3-2-3-4v-4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: "children-dental-care",
      title: "Children Dental Care",
      description: "Gentle, child-friendly dental care in a comfortable environment. Preventive treatments, fluoride application, pit & fissure sealants, and habit-breaking appliances for growing smiles.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h.008v.008H9.75V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0h.008v.008h-.008V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    },
    {
      id: "tooth-extraction",
      title: "Tooth Extraction",
      description: "Safe, comfortable tooth extractions including wisdom teeth removal. Modern techniques with proper anesthesia ensure minimal discomfort and faster healing for all ages.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0-15l-3 3m3-3l3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.5c0 1.5 1.343 4.5 3 4.5s3-3 3-4.5-1.343-3.5-3-3.5-3 2-3 3.5z" />
        </svg>
      )
    },
    {
      id: "regular-dental-checkup",
      title: "Regular Dental Check-up",
      description: "Comprehensive oral examinations with digital X-rays and early detection of dental issues. Routine checkups every 6 months help maintain optimal oral health and prevent problems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
              From orthodontics to complete dental care, <br className="hidden sm:block" />
              expert treatment for every smile.
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed mt-4 sm:mt-6"
            >
              Dr. Shrestha Singh and our skilled team provide comprehensive dental solutions at our Sector 120 clinic, combining advanced techniques with compassionate care for optimal results.
            </motion.p>
          </div>
          <motion.div
            className="hidden lg:flex w-[220px] xl:w-[300px] h-auto items-end justify-end shrink-0"
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 160, damping: 12 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.img
              src="/assets/teeth-character.png"
              alt="Cute tooth character mascot"
              className="w-full h-auto object-contain scale-[1.5]"
              initial={{ y: 50, opacity: 0, rotate: 15 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 140, damping: 10 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
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
              id={service.id}
              variants={fadeUpVariant}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className={`group relative bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl sm:rounded-[40px] md:rounded-[48px] border flex flex-col items-start h-full transition-all duration-500 scroll-mt-24 ${
                service.isFeatured
                  ? 'border-primary/30 shadow-[0_40px_80px_-20px_rgba(166,124,82,0.15)] hover:shadow-[0_50px_100px_-25px_rgba(166,124,82,0.25)] hover:border-primary/50 bg-gradient-to-br from-primary/[0.02] to-white'
                  : 'border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.12)] hover:border-primary/20'
              }`}
            >
              {service.isFeatured && (
                <motion.div
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-primary text-white text-[10px] sm:text-xs font-black tracking-wider px-3 py-1.5 rounded-full shadow-lg"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  SPECIALTY
                </motion.div>
              )}

              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 md:mb-10 transition-all duration-300 ${
                service.isFeatured
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20'
              }`}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  {service.icon}
                </div>
              </div>

              <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 sm:mb-6 ${
                service.isFeatured ? 'text-primary' : 'text-slate-900'
              }`}>
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;

