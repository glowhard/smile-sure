'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  backgroundImage?: string;
}

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};

const PageHeader = ({ label, title, description, backgroundImage }: PageHeaderProps) => {
  const { scrollY } = useScroll();

  // Parallax strength (lower = more premium)
  const y = useTransform(scrollY, [0, 600], [0, 200]);

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background Image with Overlay */}
      {backgroundImage ? (
        <>
          <motion.div
            className="absolute inset-0"
            style={{ y }}
          >
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover scale-[1.15]"
              draggable={false}
            />
          </motion.div>

          {/* <div className="absolute inset-0 bg-black/50" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </>
      ) : (
        <>
          {/* Enhanced, more colorful layered gradients for better visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/70 via-60% to-accent/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 via-60% to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/70 via-transparent to-transparent opacity-60" />
        </>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-6 lg:space-y-8"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-white/90 font-black tracking-[0.3em] text-[11px] uppercase"
            variants={fadeUpVariant}
          >
            {label}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-tight"
            variants={fadeUpVariant}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="text-white/80 font-medium text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              variants={fadeUpVariant}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Simple white divider */}
      <div className="absolute bottom-0 w-24 h-1 rounded-full mx-auto mt-10 mb-2 bg-white shadow-lg shadow-white/50" />
    </section>
  );
};

export default PageHeader;

