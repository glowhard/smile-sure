'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  backgroundImage?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax strength - reduced on mobile for better performance
  const y = useTransform(scrollY, [0, 600], [0, isMobile ? 100 : 200]);

  return (
    <section className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[700px] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Background Image with Overlay */}
      {backgroundImage ? (
        <>
          <motion.div
            className="absolute inset-0"
            style={{ y }}
          >
            <img
              src={backgroundImage}
              alt={`${label} - ${title}`}
              className="w-full h-full object-cover scale-[1.1] sm:scale-[1.12] md:scale-[1.15]"
              draggable={false}
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 sm:from-black/60 sm:via-black/40 sm:to-black/60" />
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 relative z-10 w-full">
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-white/90 font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase px-4"
            variants={fadeUpVariant}
          >
            {label}
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter text-white leading-[1.1] sm:leading-tight px-4 sm:px-6"
            variants={fadeUpVariant}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="text-white/80 font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4 sm:px-6 md:px-8"
              variants={fadeUpVariant}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Simple white divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 rounded-full bg-white shadow-lg shadow-white/50 mb-4 sm:mb-6 md:mb-8" />
    </section>
  );
};

export default PageHeader;

