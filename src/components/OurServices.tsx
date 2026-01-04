
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Consistent fade-up animation variant
const FADE_DURATION = 0.7;

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
  const services: Service[] = [
    {
      title: 'Preventive Care',
      description: 'Keep your smile healthy with check-ups, cleanings, and fluoride. Our team ensures your teeth stay strong.',
      isFeatured: false,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      )
    },
    {
      title: 'Oral Surgery',
      description: 'For complex needs, we provide dental implants, wisdom teeth extractions, and surgery to restore appearance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      title: 'Emergency Care',
      description: "If you're in pain or facing an urgent dental issue, we offer prompt, gentle, attentive care to help you feel better.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth and improve your smile with traditional braces or clear aligners for lasting confidence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5m16.5-16.5v16.5M12 3.75v16.5M3.75 12h16.5" />
        </svg>
      )
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance the natural beauty of your smile with services like teeth whitening, veneers, and smile makeovers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      title: 'Dental Repair',
      description: 'From fillings to crowns and bridges, we restore damaged teeth, improving both their function and appearance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.05-.842-.316-1.675-.979-2.227-1.231-1.032-3.124-.944-4.248.213L9.072 10.32m5.036-.424l-4.036 4.037" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-3xl space-y-6">
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="text-primary font-black tracking-[0.3em] text-[11px] uppercase"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.95]"
            >
              We are committed to providing <br />
              a range of dental services.
            </motion.h2>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group bg-white p-12 rounded-[48px] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] flex flex-col items-start h-full transition-all duration-500 hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.12)] hover:border-primary/20"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-colors ${service.isFeatured ? 'bg-primary text-white' : 'bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white'
                }`}>
                {service.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
                {service.title}
              </h3>

              <p className="text-slate-500 font-medium leading-relaxed mb-12 flex-grow">
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

