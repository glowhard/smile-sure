'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Preventive Care",
    description: "Keep your smile healthy with regular check-ups, professional cleanings, and fluoride treatments. Our preventive approach ensures your teeth stay strong and healthy for years to come.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: "/services/preventive-care",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical procedures including dental implants, wisdom teeth extractions, and reconstructive surgery to restore both function and appearance with precision care.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    link: "/services/oral-surgery",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Emergency Care",
    description: "When dental emergencies strike, we're here to help. Our prompt, gentle, and attentive emergency care ensures you get relief when you need it most.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    ),
    link: "/services/emergency-care",
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Orthodontics",
    description: "Transform your smile with our comprehensive orthodontic treatments. From traditional braces to clear aligners, we help you achieve lasting confidence.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V12a1.5 1.5 0 01-1.5 1.5H9m0-4V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 4h6m2-6V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 6v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1" />
      </svg>
    ),
    link: "/services/orthodontics",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your natural beauty with our cosmetic dental services including teeth whitening, veneers, and complete smile makeovers tailored to your unique needs.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    link: "/services/cosmetic-dentistry",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Dental Repair",
    description: "Restore damaged teeth with our comprehensive repair services. From simple fillings to complex crowns and bridges, we improve both function and appearance.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    link: "/services/dental-repair",
    color: "from-cyan-500 to-blue-600"
  }
];

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

const OurServices = () => {
  return (
    <motion.section 
      className="px-6 md:px-16 lg:px-24 py-16 bg-[#F9FAFB]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Top Section */}
      <motion.div 
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 max-w-7xl mx-auto"
        variants={itemVariants}
      >
        <div className="space-y-4">
          <motion.p 
            className="text-sm font-semibold text-[#4041D1] uppercase tracking-wide"
            variants={itemVariants}
          >
            Our Services
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11081C] leading-tight max-w-2xl"
            variants={itemVariants}
          >
            We are committed to providing comprehensive dental care.
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            From preventive care to advanced treatments, our experienced team delivers personalized solutions for all your dental needs.
          </motion.p>
        </div>
        <motion.a
          href="/services"
          className="mt-8 md:mt-0 inline-flex items-center gap-2 bg-[#4041D1] hover:bg-[#2f30a8] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Services
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

      {/* Service Cards */}
      <motion.div 
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 flex flex-col justify-between transition-all duration-300 border border-gray-100 hover:border-[#4041D1]/20 relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {service.icon}
              </motion.div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#11081C] group-hover:text-[#4041D1] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            
            {/* CTA Link */}
            <motion.a
              href={service.link}
              className="relative z-10 mt-8 inline-flex items-center gap-2 text-[#4041D1] font-semibold group-hover:gap-3 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              Learn More
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>

            {/* Decorative corner element */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-[#4041D1] rounded-full opacity-20 group-hover:opacity-60"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div 
        className="mt-20 text-center max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-[#11081C] mb-4"
            variants={itemVariants}
          >
            Ready to start your dental journey?
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Schedule a consultation today and discover how our comprehensive dental services can transform your smile and oral health.
          </motion.p>
          <motion.a
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-[#4041D1] hover:bg-[#2f30a8] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurServices;
