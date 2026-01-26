
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
    description: 'Get dramatic results in just one visit with our advanced chairside whitening treatment. Safe, fast, and supervised by dental professionals for optimal outcomes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Take-Home Whitening Kits',
    description: 'Custom-fitted trays with professional-grade whitening gel for gradual, convenient whitening at home. Achieve your desired shade at your own pace with expert guidance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Stain Removal & Polishing',
    description: 'Professional scaling and polishing to remove surface stains from coffee, tea, wine, and tobacco. Restore your teeth\'s natural brightness with our deep cleaning treatments.',
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
            Professional teeth whitening treatments at SmileSure help you achieve noticeable results safely and effectively. Perfect for special occasions or boosting your everyday confidence.
          </p>
        </div>

        {/* Before/After Slider - MOVED UP */}
        <div className="mb-12 sm:mb-16 md:mb-24">
          {/* Drag Instruction */}
          <motion.p
            className="text-center text-sm sm:text-base text-slate-400 font-semibold mb-6 sm:mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Drag to compare results
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.p>

          <motion.div
            className="relative w-full max-w-2xl mx-auto rounded-2xl sm:rounded-3xl md:rounded-[48px] overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] group px-4"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            {/* Before Label */}
            <div className="absolute top-4 left-8 sm:left-12 z-10 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
              Before
            </div>

            {/* After Label */}
            <div className="absolute top-4 right-8 sm:right-12 z-10 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
              After
            </div>

            <ReactBeforeSliderComponent
              firstImage={FIRST_IMAGE}
              secondImage={SECOND_IMAGE}
              className="rounded-2xl sm:rounded-3xl md:rounded-[48px] w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
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
        <div className="flex justify-center px-4">
          <AppButton
            title='Book Whitening Treatment'
            onTap={() => {
              window.location.href = "/#book-visit"
            }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhiteSolution;

