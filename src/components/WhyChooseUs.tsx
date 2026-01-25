'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Heart, Shield, Sparkles, Users } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};

const reasons = [
  {
    icon: Award,
    title: 'Expert Care',
    description: 'Led by Dr. Shrestha Singh (BDS, MDS), a qualified orthodontist with years of experience in dental care.'
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'State-of-the-art equipment including digital X-rays and advanced treatment tools for precise care.'
  },
  {
    icon: Heart,
    title: 'Patient-Centered',
    description: 'We prioritize your comfort and well-being, offering personalized treatments in a welcoming environment.'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Convenient scheduling with extended hours to accommodate your busy lifestyle.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Strict hygiene protocols and sterilization standards to ensure your safety at every visit.'
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Comprehensive dental care for all ages, from children to seniors, in a comfortable setting.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase"
            variants={fadeUpVariant}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] sm:leading-tight px-4"
            variants={fadeUpVariant}
          >
            What makes us different.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed px-4"
            variants={fadeUpVariant}
          >
            We combine expertise, technology, and compassionate care to deliver exceptional dental services.
          </motion.p>
        </motion.div>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-primary hover:shadow-2xl transition-all duration-500"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-500">
                  <reason.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-white mb-3 sm:mb-4 transition-colors duration-500">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                {reason.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 text-center"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-6 py-3 text-primary"
            variants={fadeUpVariant}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm sm:text-base font-semibold">
              Free Digital X-Ray + 10% Off All Treatments
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
