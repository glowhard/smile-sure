
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AppButton from './AppButton';

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

const FIRST_IMAGE = {
  imageUrl: '/images/teeth-white.jpg',
  label: 'After',
};

const SECOND_IMAGE = {
  imageUrl: '/images/teeth-dark.png',
  label: 'Before',
};

const features = [
  {
    title: 'In-Office Professional Whitening',
    description: 'Our whitening treatment combines advanced technology, expert techniques, and quality products to deliver results.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Take-Home Whitening Kits',
    description: 'With custom trays and professional-grade gel, you can whiten your smile comfortably at your own pace from home.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Stain Removal and Polishing',
    description: 'Our cleaning and polishing treatments eliminate stains from food, drinks, and smoking, bringing back your teeth\'s natural shine.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    )
  }
];

const WhiteSolution = () => (
  <section className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
      {/* Animate everything as one with a single fade up */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
          <p className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase">
            Achieve a Brighter, Whiter Smile
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1] sm:leading-tight px-4">
            We offer effective teeth <br className="hidden sm:block" /> whitening solutions.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto px-4">
            Whether you&apos;re looking to enhance your smile for a special occasion or simply want to improve your everyday appearance.
          </p>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-4 sm:space-y-6 flex flex-col items-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:bg-secondary/30"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-24 px-4">
          <AppButton title='Make Your Teeth Whiter' />
        </div>

        {/* Before/After Slider */}
        <motion.div 
          className="relative w-full max-w-2xl mx-auto rounded-2xl sm:rounded-3xl md:rounded-[48px] overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] group px-4"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
            className="rounded-2xl sm:rounded-3xl md:rounded-[48px] w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default WhiteSolution;

