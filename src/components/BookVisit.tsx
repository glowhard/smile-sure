'use client';

import React from "react";
import { motion } from "framer-motion";
import { useContactEmail } from "../hooks/useContactEmail";

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

const BookVisit = () => {
  const { send, isLoading, toast, toastVariant } = useContactEmail();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const date = (form.elements.namedItem("date") as HTMLInputElement)?.value;

    await send({ email, name, phone, date });
  };

  return (
    <section
      id="book-visit"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-book-visit"
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center relative z-10">
        <motion.div
          className="relative w-full rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 text-center !pb-[0] overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <motion.p
            className="relative z-10 text-xs sm:text-sm font-semibold uppercase text-white/90 mb-3 sm:mb-4 tracking-wider"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            Book a Visit
          </motion.p>

          <motion.h2
            className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 px-2"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            Come visit us and experience <br className="hidden sm:block" /> compassionate care.
          </motion.h2>

          <motion.p
            className="relative z-10 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed px-2"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            Whether it&apos;s your first visit or you&apos;re a returning patient, our team
            is here to provide you with personalized care in a relaxed and
            friendly environment.
          </motion.p>

          {/* Spacer above the floating card on larger screens */}
          <div className="h-12 sm:h-16 md:h-24 lg:h-28"></div>

          {/* Form Card */}
          {/* On mobile, card sits naturally in the flow; on larger screens it "floats" over the background */}
          <div className="flex items-center justify-center w-full px-2 sm:px-0 md:absolute md:bottom-0 md:left-0 md:translate-y-1/2">
            <motion.div
              className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100"
              variants={fadeUpVariant}
              transition={{ duration: FADE_DURATION }}
            >
              <motion.p
                className="mb-3 sm:mb-4 w-full text-left text-xs sm:text-sm text-gray-500"
                variants={fadeUpVariant}
                transition={{ duration: FADE_DURATION }}
              >
                Fill out the form below, and we&apos;ll get back to you as soon as possible.
              </motion.p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row items-stretch gap-2.5 sm:gap-3 md:gap-4"
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="FULL NAME*"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base placeholder-gray-500"
                  required
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="EMAIL*"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base placeholder-gray-500"
                  required
                />
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER*"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base placeholder-gray-500"
                  required
                />
                <motion.input
                  type="date"
                  name="date"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 md:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#5c3d2e] to-[#a67c52] hover:from-[#704b36] hover:to-[#c19a6b] transition-all duration-300 text-white font-semibold text-xs sm:text-sm lg:w-auto w-full"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="hidden sm:inline">
                    {isLoading ? "Sending..." : "Submit"}
                  </span>
                  <span className="sm:hidden">
                    {isLoading ? "Sending..." : "Send"}
                  </span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
              </form>
              {toast && (
                <div
                  className={`mt-3 sm:mt-4 rounded-lg border px-3 py-2 text-xs sm:text-sm font-medium transition-colors ${toastVariant}`}
                >
                  {toast.message}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
        {/* Extra bottom padding so the floating card never gets cut off on small screens */}
        <div className="h-12 sm:h-16 md:h-24" />
      </div>
    </section>
  );
};

export default BookVisit;