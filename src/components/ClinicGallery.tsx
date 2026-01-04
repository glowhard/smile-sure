'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const galleryImages = [
  {
    src: '/assets/waiting-area.jpeg',
    alt: 'Comfortable Waiting Area',
    title: 'Welcoming Environment',
    description: 'A relaxing and comfortable space designed for your peace of mind.'
  },
  {
    src: '/assets/cabin1.jpeg',
    alt: 'Modern Treatment Cabin',
    title: 'State-of-the-Art Facilities',
    description: 'Equipped with the latest technology for optimal patient care.'
  },
  {
    src: '/assets/chair1.jpeg',
    alt: 'Dental Chair',
    title: 'Comfortable Treatment',
    description: 'Premium dental chairs designed for maximum patient comfort.'
  },
  {
    src: '/assets/chair2.jpeg',
    alt: 'Modern Dental Equipment',
    title: 'Advanced Equipment',
    description: 'Cutting-edge dental technology for precise and efficient treatments.'
  },
  {
    src: '/assets/chair3.jpeg',
    alt: 'Treatment Room',
    title: 'Modern Treatment Rooms',
    description: 'Spacious and well-equipped rooms for all your dental needs.'
  },
  {
    src: '/assets/chair4.jpeg',
    alt: 'Another Dental Chair',
    title: 'Additional Comfort',
    description: 'Experience extra comfort and support with our newest dental chair setup.'
  }
];

const ClinicGallery = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 space-y-4 sm:space-y-6 lg:space-y-8"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-primary font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] uppercase"
            variants={fadeUpVariant}
          >
            Our Clinic
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1] sm:leading-tight px-4"
            variants={fadeUpVariant}
          >
            Experience our modern facilities.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed px-4"
            variants={fadeUpVariant}
          >
            Step inside our state-of-the-art clinic and discover a space designed for your comfort,
            equipped with the latest technology, and staffed by caring professionals.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[32px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image Container */}
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {image.description}
                </p>
              </div>

              {/* Title on Image (visible by default) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center px-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium mb-8 max-w-2xl mx-auto"
            variants={fadeUpVariant}
          >
            We invite you to visit our clinic and experience the difference that modern facilities
            and compassionate care can make in your dental health journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClinicGallery;

